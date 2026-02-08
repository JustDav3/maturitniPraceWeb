from django.shortcuts import render
from .morse import logic as m_logic, constants as m_consts
from .number_code import logic as n_logic, constants as n_consts
from .matrix import logic as mat_logic

def home(request):
    context = {}
    
    if request.method == "POST":
        projekt = request.POST.get("projekt")
        vstup = request.POST.get("vstup", "")
        akce = request.POST.get("akce")

        # Uložíme vstupní data zpět do kontextu, aby zůstala ve formuláři
        context['projekt'] = projekt
        context['vstup'] = vstup
        context['akce'] = akce

        # 1. MORSEOVKA
        if projekt == "morse":
            mode = request.POST.get("mode", "1")
            c_dot = request.POST.get("custom_dot", ".")
            c_dash = request.POST.get("custom_dash", "-")
            c_sep = request.POST.get("custom_sep", "|")

            d = m_consts.morse_dict if mode == "1" else m_consts.morse_reverse
            up_d = m_consts.morse_uppercase if mode == "1" else m_consts.morse_reverse_uppercase
            low_d = m_consts.morse_lowercase if mode == "1" else m_consts.morse_reverse_lowercase

            if c_dot != "." or c_dash != "-":
                def transform_web(slovnik):
                    return {k: v.replace('-', c_dash).replace('.', c_dot) for k, v in slovnik.items()}
                d = transform_web(d)
                up_d = transform_web(up_d)
                low_d = transform_web(low_d)

            if akce == "sifrovat":
                vysledek = m_logic.encrypt(vstup.upper(), d, c_sep)
            else:
                vysledek = m_logic.decrypt_logic(vstup, up_d, low_d, c_sep)
            
            context['vysledek_morse'] = vysledek
            # PŘIDÁNO: Verze pro přepis
            context['vysledek_prepis'] = f"| {vysledek} |"

        # 2. ČÍSELNÝ KÓD
        elif projekt == "number_code":
            typ = int(request.POST.get("typ_abecedy", 1))
            posun = int(request.POST.get("posun") or 0) # Načtení posunu
            
            # Výběr správné abecedy z constants.py
            enc_dict = n_consts.alphabet_dict if typ == 1 else n_consts.czech_alphabet
            up_dict = n_consts.alphabet_uppercase if typ == 1 else {k:v for k,v in n_consts.czech_alphabet.items() if k.isupper()}
            low_dict = n_consts.alphabet_lowercase if typ == 1 else {k:v for k,v in n_consts.czech_alphabet.items() if k.islower()}

            # Aplikace posunu, pokud není nula
            if posun != 0:
                enc_dict = n_logic.shift_alphabet(enc_dict, posun)
                up_dict = n_logic.shift_alphabet(up_dict, posun)
                low_dict = n_logic.shift_alphabet(low_dict, posun)

            if akce == "sifrovat":
                vysledek = n_logic.encrypt(vstup.upper(), enc_dict)
            else:
                vysledek = n_logic.decrypt(vstup, up_dict, low_dict)

        # 3. MATICE
        elif projekt == "matrix":
            volba = request.POST.get("typ_matice")
            start_bod = request.POST.get("start_bod", "1")
            matice, rozmer = mat_logic.vytvor_matice_sifry(vstup, volba, start_bod)
            context['vysledek_matrix'] = matice
            context['rozmer_matrix'] = rozmer

    return render(request, "main/index.html", context)