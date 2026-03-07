from django.shortcuts import render
from django.contrib import messages
from .morse import logic as morse_logic, constants as morse_consts
from .number_code import logic as number_logic, constants as number_consts
from .matrix import logic as matrix_logic
from .binary import logic as binary_logic

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
        context.update({'projekt': project, 'vstup': user_input, 'akce': action, 'shift': shift})

        # Načtení hodnoty z dynamického selectu (default "1")
        dynamic_val = request.POST.get("dynamic_select", "1")

        # --- 1. MORSEOVKA ---
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

        # --- 2. ČÍSELNÝ KÓD ---
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

        # --- 3. BINÁRNÍ ŠIFRA ---
        elif project == "binary":
            separator = in3 or " "
            if any(char.isdigit() for char in user_input):
                messages.warning(request, "V binární šifře nelze šifrovat čísla! Byla automaticky vynechána.")
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
                    parts = result.split(separator)
                    inverted = [ "".join('1' if b=='0' else '0' for b in p.zfill(5)) if p else "" for p in parts ]
                    result = separator.join(inverted)
            else:
                # Dešifrování (včetně případné zpětné inverze)
                if dyn_check:
                    parts = user_input.split(separator)
                    deinverted = [ "".join('1' if b=='0' else '0' for b in p) if p else "" for p in parts ]
                    user_input = separator.join(deinverted)

                user_input = binary_logic.decrypt(user_input, separator)
                # Vrácení posunu zpět
                result = user_input.upper()
            
            context['vysledek_number'] = result
            context['vysledek_prepis'] = f"|{result}|"

        # --- 4. SPIRÁLA ---
        elif project == "spirala":
            matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "1", dynamic_val)
            matrix = [
            [znak.upper() for znak in radek if znak.isalpha()] 
            for radek in matrix
            ]
            context['start_bod'] = dynamic_val # Pro JS vzpomínku

        # --- 5. ŠNEK ---
        elif project == "snek":
            matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "2", dynamic_val)
            matrix = [
            [znak.upper() for znak in radek if znak.isalpha()] 
            for radek in matrix
            ]
            context['start_bod'] = dynamic_val # Pro JS vzpomínku

        # --- 6. HAD ---
        elif project == "had":
            # Převod textu ze selectu na parametry pro tvou logiku
            # "shora" -> parametr "2", "zleva" -> parametr "1"
            param_had = "2" if dynamic_val == "shora" else "1"
            matrix, dim = matrix_logic.vytvor_matice_sifry(user_input, "3", param_had)
            matrix = [
            [znak.upper() for znak in radek if znak.isalpha()] 
            for radek in matrix
            ]
            context['smer_had'] = dynamic_val # Pro JS vzpomínku (shora/zleva)

        if project in ["spirala", "snek", "had"]:
            context['vysledek_matrix'] = matrix
            context['rozmer_matrix'] = dim
            
            # Vytvoření té "krabičky" s čarami | |
            radky_prepis = []
            for radek in matrix:
                # Každý řádek obalíme | a spojíme znaky mezerou
                radky_prepis.append(f"| {' '.join(radek)} |")
            
            # Spojíme řádky do jednoho bloku textu s odřádkováním
            context['vysledek_prepis_matrix'] = "\n".join(radky_prepis)

    return render(request, "main/index.html", context)