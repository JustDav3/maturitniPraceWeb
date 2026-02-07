from django.shortcuts import render
from .morse import logic as m_logic, constants as m_consts
from .number_code import logic as n_logic, constants as n_consts
from .matrix import logic as mat_logic

def home(request):
    context = {}
    
    if request.method == "POST":
        projekt = request.POST.get("projekt")
        vstup = request.POST.get("vstup", "")

        # 1. MORSEOVKA
        # Upravená část ve views.py pro Morseovku
        if projekt == "morse":
            akce = request.POST.get("akce")
            mode = request.POST.get("mode", "1")
            
            # Načtení tvých vlastních znaků z webu
            c_dot = request.POST.get("custom_dot", ".")
            c_dash = request.POST.get("custom_dash", "-")
            c_sep = request.POST.get("custom_sep", "|")

            # Výběr základního slovníku
            d = m_consts.morse_dict if mode == "1" else m_consts.morse_reverse
            up_d = m_consts.morse_uppercase if mode == "1" else m_consts.morse_reverse_uppercase
            low_d = m_consts.morse_lowercase if mode == "1" else m_consts.morse_reverse_lowercase

            # Pokud uživatel zadal jiné znaky než . a -, vytvoříme upravený slovník
            if c_dot != "." or c_dash != "-":
                def transform_web(slovnik):
                    return {k: v.replace('-', c_dash).replace('.', c_dot) for k, v in slovnik.items()}
                
                d = transform_web(d)
                up_d = transform_web(up_d)
                low_d = transform_web(low_d)

            if akce == "sifrovat":
                # Použijeme tvou funkci encrypt a vložíme do ní zvolený oddělovač c_sep
                context['vysledek_morse'] = m_logic.encrypt(vstup.upper(), d, c_sep)
            else:
                # To samé pro dešifrování
                context['vysledek_morse'] = m_logic.decrypt_logic(vstup, up_d, low_d, c_sep)
            
            context['text_morse'] = vstup

        # 2. ČÍSELNÝ KÓD
        elif projekt == "number_code":
            akce = request.POST.get("akce")
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
                context['vysledek_number'] = n_logic.encrypt(vstup.upper(), enc_dict)
            else:
                context['vysledek_number'] = n_logic.decrypt(vstup, up_dict, low_dict)
            context['text_number'] = vstup

        # 3. MATICE (SPIRÁLA, ŠNEK, HAD)
        elif projekt == "matrix":
            volba = request.POST.get("typ_matice")
            start_bod = request.POST.get("start_bod", "1")
            matice, rozmer = mat_logic.vytvor_matice_sifry(vstup, volba, start_bod)
            context['vysledek_matrix'] = matice
            context['rozmer_matrix'] = rozmer
            context['text_matrix'] = vstup

    return render(request, "main/index.html", context)