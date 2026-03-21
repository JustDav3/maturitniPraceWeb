from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from .morse import logic as morse_logic, constants as morse_consts
from .number_code import logic as number_logic, constants as number_consts
from .matrix import logic as matrix_logic
from .binary import logic as binary_logic



def login_view(request):
    if request.method == "POST":
        user_name = request.POST.get("username")
        pass_word = request.POST.get("password")
        
        user = authenticate(request, username=user_name, password=pass_word)
        if user is not None:
            login(request, user)
            return redirect('home') # nebo kamkoli jinam
        else:
            # Zde by bylo dobré přidat zprávu o chybě pomocí messages
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
        shift = int(request.POST.get("shift") or 0) # Globální posun pro všechny šifry
        
        # Načtení dat z dynamických polí formuláře
        dyn_select = request.POST.get("dynamic_select")
        dyn_check = request.POST.get("dynamic_checkbox") == "on"
        in1 = request.POST.get("input_1", ".")
        in2 = request.POST.get("input_2", "-")
        in3 = request.POST.get("input_3", "|")

        # Uložení dat zpět do kontextu pro zachování ve formuláři po odeslání
        context.update({'projekt': project, 'vstup': user_input, 'akce': action, 'shift': shift, 'dyn_check': dyn_check})

        # Načtení hodnoty z dynamického selectu (default "1")
        dynamic_val = request.POST.get("dynamic_select", "1")

        if project in ["spirala", "snek", "had"]:
            action = "sifrovat"

        #  1. MORSEOVKA 
        if project == "morse":
            mode = dyn_select or "1"
            # Výběr správného slovníku podle módu (Klasická/Obrácená)
            main_dict = morse_consts.morse_dict if mode == "1" else morse_consts.morse_reverse
            up_dict = morse_consts.morse_uppercase if mode == "1" else morse_consts.morse_reverse_uppercase
            low_dict = morse_consts.morse_lowercase if mode == "1" else morse_consts.morse_reverse_lowercase

            # Pokud uživatel zadal vlastní znaky pro tečku a čárku, nahradíme je
            if in1 != "." or in2 != "-":
                def transform_chars(dictionary):
                    return {k: v.replace('-', in2).replace('.', in1) for k, v in dictionary.items()}
                main_dict = transform_chars(main_dict)
                up_dict = transform_chars(up_dict)
                low_dict = transform_chars(low_dict)

            # Volání šifrování nebo dešifrování
            if action == "sifrovat":
                result = morse_logic.encrypt(user_input.upper(), main_dict, in3)
            else:
                result = morse_logic.decrypt_logic(user_input, up_dict, low_dict, in3)
            
            context['vysledek_morse'] = result
            context['vysledek_prepis'] = result

        #  2. ČÍSELNÝ KÓD 
        elif project == "number_code":
            # Výběr abecedy (Anglická/Česká)
            encryption_dict = number_consts.alphabet_dict if dyn_select == "1" else number_consts.czech_alphabet
            
            # Logika pro obrácení abecedy (A=26, Z=1)
            if dyn_check:
                sorted_keys = sorted(encryption_dict.keys())
                values = [encryption_dict[k] for k in sorted_keys]
                encryption_dict = dict(zip(sorted_keys, values[::-1]))

            # Aplikace posunu
            if shift != 0:
                encryption_dict = number_logic.shift_alphabet(encryption_dict, shift)

            # Příprava slovníků pro dešifrování (zachování malých/velkých písmen)
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
            if action == "sifrovat":
                # Posun textu před převodem do bináru

                clean_input = "".join([c for c in user_input if c.isalpha()])
                if not clean_input: # Pokud po smazání čísel nic nezbylo
                    messages.error(request, "Chyba: Zadal jsi pouze čísla, není co šifrovat!")
                    result = ""
                else:
                    result = binary_logic.encrypt(clean_input.upper(), separator)
                
                # Pokud je zapnutá inverze (záměna 0 za 1)
                if dyn_check:
                    # Projdeme každý znak výsledku (0, 1 a oddělovač)
                    inverted_chars = []
                    for char in result:
                        if char == '0':
                            inverted_chars.append('1')
                        elif char == '1':
                            inverted_chars.append('0')
                        else:
                            inverted_chars.append(char) # Ponecháme oddělovač (mezeru/čárku)
                    result = "".join(inverted_chars)

            else:
                # DEŠIFROVÁNÍ
                # 1. Pokud uživatel vložil invertovaný binár, musíme ho nejdřív vrátit zpět
                if dyn_check:
                    deinverted = []
                    for char in user_input:
                        if char == '0':
                            deinverted.append('1')
                        elif char == '1':
                            deinverted.append('0')
                        else:
                            deinverted.append(char)
                    user_input = "".join(deinverted)
                # 2. Klasické dešifrování z bináru na text
                result = binary_logic.decrypt(user_input, separator)
            
            context['vysledek_number'] = result
            context['vysledek_prepis'] = f"|{result}|"

# 4. SPIRÁLA, ŠNEK, HAD #
        elif project in ["spirala", "snek", "had"]:
            if project == "spirala":
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "1", dynamic_val)
                context['start_bod'] = dynamic_val
            elif project == "snek":
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "2", dynamic_val)
                context['start_bod'] = dynamic_val
            elif project == "had":
                param_had = "1" if dynamic_val == "shora" else "2"
                matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "3", param_had)
                context['smer_had'] = dynamic_val

            # Vyčištění matice pro zobrazení (převede vše na velká písmena/čísla a zachová je)
            matrix_clean = [[str(znak).upper() for znak in radek] for radek in matrix]
            
            context['vysledek_matrix'] = matrix_clean
            context['rozmer_matrix'] = dim

            # Vytvoření textového přepisu
            radky_prepis = [f"| {' '.join(radek)} |" for radek in matrix_clean]
            context['vysledek_prepis_matrix'] = "\n".join(radky_prepis)

    return render(request, "main/index.html", context)