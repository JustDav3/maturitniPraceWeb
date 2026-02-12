from django.shortcuts import render
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

        # Uložení dat zpět do kontextu pro zachování ve formuláři
        context['projekt'] = project
        context['vstup'] = user_input
        context['akce'] = action

        # 1. MORSEOVKA
        if project == "morse":
            mode = request.POST.get("mode", "1")
            custom_dot = request.POST.get("custom_dot", ".")
            custom_dash = request.POST.get("custom_dash", "-")
            custom_sep = request.POST.get("custom_sep", "|")

            context['custom_dot'] = custom_dot
            context['custom_dash'] = custom_dash
            context['custom_sep'] = custom_sep
            context['mode'] = mode

            # Výběr správného slovníku podle módu
            main_dict = morse_consts.morse_dict if mode == "1" else morse_consts.morse_reverse
            upper_dict = morse_consts.morse_uppercase if mode == "1" else morse_consts.morse_reverse_uppercase
            lower_dict = morse_consts.morse_lowercase if mode == "1" else morse_consts.morse_reverse_lowercase

            # Transformace na vlastní znaky (tečky/čárky)
            if custom_dot != "." or custom_dash != "-":
                def transform_chars(dictionary):
                    return {k: v.replace('-', custom_dash).replace('.', custom_dot) for k, v in dictionary.items()}
                main_dict = transform_chars(main_dict)
                upper_dict = transform_chars(upper_dict)
                lower_dict = transform_chars(lower_dict)

            if action == "sifrovat":
                result = morse_logic.encrypt(user_input.upper(), main_dict, custom_sep)
            else:
                result = morse_logic.decrypt_logic(user_input, upper_dict, lower_dict, custom_sep)
            
            context['vysledek_morse'] = result
            context['vysledek_prepis'] = f"{result}"

        # 2. ČÍSELNÝ KÓD
        elif project == "number_code":
            alphabet_type = int(request.POST.get("typ_abecedy", 1))
            shift = int(request.POST.get("posun") or 0)
            reverse_order = request.POST.get("obratit") == "on"

            context['posun'] = shift
            context['obratit'] = reverse_order

            # Výběr abecedy (Anglická/Česká)
            encryption_dict = number_consts.alphabet_dict if alphabet_type == 1 else number_consts.czech_alphabet
            
            # Logika pro obrácení abecedy (A=26, Z=1)
            if reverse_order:
                sorted_keys = sorted(encryption_dict.keys())
                values = [encryption_dict[k] for k in sorted_keys]
                reversed_values = values[::-1]
                encryption_dict = dict(zip(sorted_keys, reversed_values))

            # Aplikace posunu
            if shift != 0:
                encryption_dict = number_logic.shift_alphabet(encryption_dict, shift)

            # Příprava slovníků pro dešifrování
            upper_dict = {k: v for k, v in encryption_dict.items() if k.isupper()}
            lower_dict = {k: v for k, v in encryption_dict.items() if k.islower()}

            if action == "sifrovat":
                result = number_logic.encrypt(user_input.upper(), encryption_dict)
            else:
                result = number_logic.decrypt(user_input, upper_dict, lower_dict)
            
            context['vysledek_number'] = result

        # 3. BINÁRNÍ ŠIFRA (Využívá tvůj soubor logic.py)
        elif project == "binary":
            separator = request.POST.get("binary_sep", ";")
            shift = int(request.POST.get("binary_shift") or 0)
            invert_bits = request.POST.get("binary_invert") == "on"

            context['binary_sep'] = separator
            context['binary_shift'] = shift
            context['binary_invert'] = invert_bits

            if action == "sifrovat":
                # Příprava textu s posunem před převodem na binár
                shifted_text = ""
                for char in user_input.lower():
                    if 'a' <= char <= 'z':
                        # Výpočet nové pozice v anglické abecedě (1-26)
                        new_pos = (ord(char) - ord('a') + 1 + shift)
                        new_pos = (new_pos - 1) % 26 + 1
                        shifted_text += chr(new_pos + ord('a') - 1)
                    else:
                        shifted_text += char
                
                # Volání tvé funkce encrypt z logic.py
                result = binary_logic.encrypt(shifted_text, separator)
                
                # Logika pro inverzi bitů (0 na 1 a naopak)
                if invert_bits:
                    parts = result.split(separator)
                    inverted_parts = []
                    for p in parts:
                        if p != "": # Mezera je v tvém logicu prázdný řetězec
                            # Pro inverzi doplňujeme na 5 bitů
                            padded_bin = p.zfill(5)
                            inverted_parts.append("".join('1' if b == '0' else '0' for b in padded_bin))
                        else:
                            inverted_parts.append("")
                    result = separator.join(inverted_parts)
            
            else:
                # DEŠIFROVÁNÍ
                input_for_logic = user_input
                if invert_bits:
                    # Pokud bylo invertováno, vrátíme bity zpět před dešifrováním
                    parts = user_input.split(separator)
                    deinverted_parts = []
                    for p in parts:
                        if p != "":
                            deinverted_parts.append("".join('1' if b == '0' else '0' for b in p))
                        else:
                            deinverted_parts.append("")
                    input_for_logic = separator.join(deinverted_parts)

                # Volání tvé funkce decrypt z logic.py
                raw_result = binary_logic.decrypt(input_for_logic, separator)
                
                # Vrácení posunu zpět na původní písmena
                final_text = ""
                for char in raw_result:
                    if 'a' <= char <= 'z':
                        orig_pos = (ord(char) - ord('a') + 1 - shift)
                        orig_pos = (orig_pos - 1) % 26 + 1
                        final_text += chr(orig_pos + ord('a') - 1)
                    else:
                        final_text += char
                result = final_text.upper()
            
            context['vysledek_number'] = result
            context['vysledek_prepis'] = f"|{result}|"

        # 4. SPIRÁLA
        elif project == "spirala":
            start_point = request.POST.get("start_bod", "1")
            matrix, dimension = matrix_logic.vytvor_matice_sifry(user_input, "1", start_point)
            context['vysledek_matrix'] = matrix
            context['rozmer_matrix'] = dimension
            context['start_bod'] = start_point

        # 5. ŠNEK
        elif project == "snek":
            start_point = request.POST.get("start_bod", "1")
            matrix, dimension = matrix_logic.vytvor_matice_sifry(user_input, "2", start_point)
            context['vysledek_matrix'] = matrix
            context['rozmer_matrix'] = dimension
            context['start_bod'] = start_point

        # 6. HAD
        elif project == "had":
            snake_direction = request.POST.get("smer_had", "shora")
            snake_param = "2" if snake_direction == "shora" else "1"
            
            matrix, dimension = matrix_logic.vytvor_matice_sifry(user_input, "3", snake_param)
            
            context['vysledek_matrix'] = matrix
            context['rozmer_matrix'] = dimension
            context['smer_had'] = snake_direction

    return render(request, "main/index.html", context)