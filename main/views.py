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

        # 1. MORSEOVKA (Řádek 20)
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
            context['vysledek_prepis'] = f"| {vysledek} |"

        # 2. ČÍSELNÝ KÓD (Řádek 48)
        elif projekt == "number_code":
            typ = int(request.POST.get("typ_abecedy", 1))
            posun = int(request.POST.get("posun") or 0)
            
            enc_dict = n_consts.alphabet_dict if typ == 1 else n_consts.czech_alphabet
            up_dict = n_consts.alphabet_uppercase if typ == 1 else {k:v for k,v in n_consts.czech_alphabet.items() if k.isupper()}
            low_dict = n_consts.alphabet_lowercase if typ == 1 else {k:v for k,v in n_consts.czech_alphabet.items() if k.islower()}

            if posun != 0:
                enc_dict = n_logic.shift_alphabet(enc_dict, posun)
                up_dict = n_logic.shift_alphabet(up_dict, posun)
                low_dict = n_logic.shift_alphabet(low_dict, posun)

            if akce == "sifrovat":
                vysledek = n_logic.encrypt(vstup.upper(), enc_dict)
            else:
                vysledek = n_logic.decrypt(vstup, up_dict, low_dict)
            
            # OPRAVA: Musíme výsledek uložit do vysledek_number, aby ho HTML vidělo
            context['vysledek_number'] = vysledek

        # 3. SPIRÁLA A ŠNEK (Řádek 70)
        elif projekt in ["spirala", "snek"]:
            start_bod = request.POST.get("start_bod", "1")
            matice, rozmer = mat_logic.vytvor_matice_sifry(vstup, projekt, start_bod)
            context['vysledek_matrix'] = matice
            context['rozmer_matrix'] = rozmer
            context['start_bod'] = start_bod # Pro udržení výběru v selectu

        # 4. HAD
        elif projekt == "had":
            smer_text = request.POST.get("smer_had", "shora")
            
            # PŘEKLADAČ: Tady převedeme text z webu na čísla, která tvoje logika už zná.
            # Uprav si čísla 1 a 2 podle toho, co tvoje funkce pro hada skutečně používá.
            if smer_text == "shora":
                finalni_parametr = "1" 
            else: # zleva
                finalni_parametr = "2"

            # Tvoje funkce zůstává beze změny, jen do ní pošleme to správné ID
            matice, rozmer = mat_logic.vytvor_matice_sifry(vstup, "had", finalni_parametr)
            
            context['vysledek_matrix'] = matice
            context['rozmer_matrix'] = rozmer
            context['smer_had'] = smer_text

    return render(request, "main/index.html", context)