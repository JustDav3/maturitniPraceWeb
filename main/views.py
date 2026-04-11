from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.models import User
from .morse import logic as morse_logic, constants as morse_consts
from .number_code import logic as number_logic, constants as number_consts
from .matrix import logic as matrix_logic
from .binary import logic as binary_logic
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import VysledekTestu
import json
import random, math

def login_view(request):
    if request.method == "POST":
        user_name = request.POST.get("username")
        pass_word = request.POST.get("password")
        
        user = authenticate(request, username=user_name, password=pass_word)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, "Nesprávné jméno nebo heslo.")
            return redirect('home')
    return redirect('home')

def logout_view(request):
    logout(request)
    return redirect('home')

def home(request):
    context = {}
    
    if request.method == "POST":
        project = request.POST.get("projekt")
        user_input = request.POST.get("vstup", "")
        action = request.POST.get("akce")
        shift = int(request.POST.get("shift") or 0)
        
        dynamic_select_val = request.POST.get("dynamic_select", "1")
        dynamic_check_bool = request.POST.get("dynamic_checkbox") == "on"
        
        in1 = request.POST.get("input_1", ".")
        in2 = request.POST.get("input_2", "-")
        in3 = request.POST.get("input_3", "|")

        context.update({
            'projekt': project, 
            'vstup': user_input, 
            'akce': action, 
            'shift': shift, 
            'dynamic_check_bool': dynamic_check_bool,
            'dynamic_select_val': dynamic_select_val
        })

        if project in ["spirala", "snek", "had"]:
            action = "sifrovat"

        # 1. MORSEOVKA 
        if project == "morse":
            mode = dynamic_select_val
            main_dict = morse_consts.morse_dict if mode == "1" else morse_consts.morse_reverse
            up_dict = morse_consts.morse_uppercase if mode == "1" else morse_consts.morse_reverse_uppercase
            low_dict = morse_consts.morse_lowercase if mode == "1" else morse_consts.morse_reverse_lowercase

            if in1 != "." or in2 != "-":
                def transform_chars(dictionary):
                    return {k: v.replace('-', in2).replace('.', in1) for k, v in dictionary.items()}
                main_dict = transform_chars(main_dict)
                up_dict = transform_chars(up_dict)
                low_dict = transform_chars(low_dict)

            if action == "sifrovat":
                result = morse_logic.encrypt(user_input.upper(), main_dict, in3)
            else:
                result = morse_logic.decrypt_logic(user_input, up_dict, low_dict, in3)
            
            context['vysledek_morse'] = result
            context['vysledek_prepis'] = result

        # 2. ČÍSELNÝ KÓD 
        elif project == "number_code":
            encryption_dict = number_consts.alphabet_dict if dynamic_select_val == "1" else number_consts.czech_alphabet
            
            if dynamic_check_bool:
                sorted_keys = sorted(encryption_dict.keys())
                values = [encryption_dict[k] for k in sorted_keys]
                encryption_dict = dict(zip(sorted_keys, values[::-1]))

            if shift != 0:
                encryption_dict = number_logic.shift_alphabet(encryption_dict, shift)

            upper_dict = {k: v for k, v in encryption_dict.items() if k.isupper()}
            lower_dict = {k: v for k, v in encryption_dict.items() if k.islower()}

            if action == "sifrovat":
                result = number_logic.encrypt(user_input.upper(), encryption_dict)
            else:
                result = number_logic.decrypt(user_input, upper_dict, lower_dict)
            
            context['vysledek_number'] = result

        # 3. BINÁRNÍ ŠIFRA
        elif project == "binary":
            separator = in3 or " "
            clean_input = "".join([c for c in user_input if c.isalnum()])
            
            if not clean_input and action == "sifrovat":
                messages.error(request, "Chyba: Prázdný vstup pro binární šifru!")
                result = ""
            else:
                if action == "sifrovat":
                    result = binary_logic.encrypt(clean_input.upper(), separator)
                    if dynamic_check_bool:
                        result = "".join(['1' if c == '0' else '0' if c == '1' else c for c in result])
                else:
                    processed_input = user_input
                    if dynamic_check_bool:
                        processed_input = "".join(['1' if c == '0' else '0' if c == '1' else c for c in user_input])
                    result = binary_logic.decrypt(processed_input, separator)
            
            context['vysledek_number'] = result
            context['vysledek_prepis'] = f"|{result}|"

        # 4. MATICOVÉ ŠIFRY (SPIRÁLA, ŠNEK, HAD)
        elif project in ["spirala", "snek", "had"]:
            if project == "spirala":
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "1", dynamic_select_val)
                context['start_bod'] = dynamic_select_val
            elif project == "snek":
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "2", dynamic_select_val)
                context['start_bod'] = dynamic_select_val
            elif project == "had":
                param_had = "1" if dynamic_select_val == "shora" else "2"
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "3", param_had)
                context['smer_had'] = dynamic_select_val

            matrix_clean = [[str(znak).upper() for znak in radek] for radek in matrix]
            context['vysledek_matrix'] = matrix_clean
            context['rozmer_matrix'] = dim

            radky_prepis = [f"| {' '.join(radek)} |" for radek in matrix_clean]
            context['vysledek_prepis_matrix'] = "\n".join(radky_prepis)

    if request.user.is_authenticated:
        is_admin = request.user.is_superuser
        is_staff = request.user.is_staff
        is_vedouci_nebo_admin = is_admin or is_staff

        if is_admin:
            vysledky = VysledekTestu.objects.all().order_by('-datum')
            seznam_clenu = User.objects.all().order_by('username')
        elif is_staff:
            vysledky = VysledekTestu.objects.filter(
                uzivatel__in=User.objects.filter(groups__name='Skupina_Děti')
            ) | VysledekTestu.objects.filter(uzivatel=request.user.username)
            vysledky = vysledky.distinct().order_by('-datum')
            
            # V seznamu pro filtr uvidí jen děti
            seznam_clenu = User.objects.filter(groups__name='Skupina_Děti').order_by('username')
        else:
            vysledky = VysledekTestu.objects.filter(uzivatel=request.user.username).order_by('-datum')

    context = {
        'vysledky': vysledky,
        'seznam_clenu': seznam_clenu,
        'is_vedouci': is_vedouci_nebo_admin,
    }
    return render(request, '/index.html', context)

@login_required
def ulozit_vysledek_testu(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            sifra_typ = data.get('data_sifra_typ', 'Neznámý')
            sifra_zadani = data.get('data_sifra_zadani', '')

            sifra_spravne_zadani=data.get('data_sifra_spravne_reseni'), 
            sifra_odpoved_uzivatele=data.get('data_sifra_odpoved')
            sifra_spravne=data.get('data_sifra_spravne', False)

            uzel_nazev = data.get('data_uzel_nazev', 'Neznámý')
            uzel_hotovo = data.get('data_uzel_hotovo', False)

            body_celkem = 0
            if sifra_spravne is True:
                body_celkem += 1

            if uzel_hotovo is True:
                body_celkem += 1

            VysledekTestu.objects.create(
                uzivatel=request.user,
                sifra_zadani=sifra_zadani,
                sifra_typ=sifra_typ,                
                sifra_spravne_zadani=sifra_spravne_zadani,
                sifra_odpoved_uzivatele=sifra_odpoved_uzivatele,
                sifra_spravne=sifra_spravne,
                uzel_nazev=uzel_nazev,
                uzel_hotovo=uzel_hotovo,
                body_celkem=body_celkem
            )
            return JsonResponse({'status': 'success', 'body': body_celkem})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@login_required
def generuj_zadani_api(request):
    SLOVA = ["LES", "STROM", "VODA", "OHEŇ", "UZEL", "MAPA", "STAN", "POTOK", "CESTA"]
    MATICE_VETY = ["ROZRAZIL", "TABORAK", "VYPRAVA"]
    
    typy = ['morse', 'number_code', 'binary', 'spirala', 'snek', 'had']
    vybrany_typ = random.choice(typy)
    
    zadani = ""
    spravne = ""
    typ_display = ""

    # 1. MORSEOVKA
    if vybrany_typ == 'morse':
        spravne = random.choice(SLOVA)
        zadani = morse_logic.encrypt(spravne, morse_consts.morse_dict, morse_consts.separator)
        typ_display = "Morseovka"
        
        if random.random() > 0.7:
            zadani = zadani.replace('.', 'x').replace('-', '.').replace('x', '-')
            typ_display += " (Inverzní)"

    # 2. ČÍSELNÝ KÓD
    elif vybrany_typ == 'number_code':
        spravne = random.choice(SLOVA)
        zadani = number_logic.encrypt(spravne, number_consts.alphabet_dict)
        typ_display = "Číselný kód"
        
        if random.random() > 0.5:
            posun = random.randint(1, 10)
            posunuta_abeceda = number_logic.shift_alphabet(number_consts.alphabet_dict, posun)
            zadani = number_logic.encrypt(spravne, posunuta_abeceda)
            typ_display += f" (Posun +{posun})"

    # 3. BINÁRNÍ KÓD
    elif vybrany_typ == 'binary':
        spravne = random.choice(SLOVA)
        zadani = binary_logic.encrypt(spravne, "|")
        typ_display = "Binární kód"

    # 4. MATICE - Spirála, Šnek, Had
    elif vybrany_typ in ['spirala', 'snek', 'had']:
        spravne = random.choice(MATICE_VETY)
        map_typ = {"spirala": "1", "snek": "2", "had": "3"}
        
        matice, rozmer = matrix_logic.vytvor_matice_sifry(spravne, map_typ[vybrany_typ], "1")        

        radky_text = []
        for r in range(rozmer):
            radek_znaku = ""
            for s in range(rozmer):
                znak = matice[r][s]
                radek_znaku += znak if znak and znak.strip() else "_"
            radky_text.append(radek_znaku)
        
        zadani = ";".join(radky_text)
        typ_display = f"Matice ({vybrany_typ.capitalize()})"

    return JsonResponse({
        'zadani': zadani,
        'spravne': spravne.upper(),
        'typ': typ_display
    })