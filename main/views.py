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
        if projekt == "morse":
            akce = request.POST.get("akce")
            mode = request.POST.get("mode", "1")
            if akce == "sifrovat":
                d = m_consts.morse_dict if mode == "1" else m_consts.morse_reverse
                context['vysledek_morse'] = m_logic.encrypt(vstup.upper(), d, m_consts.separator)
            else:
                up_d = m_consts.morse_uppercase if mode == "1" else m_consts.morse_reverse_uppercase
                low_d = m_consts.morse_lowercase if mode == "1" else m_consts.morse_reverse_lowercase
                context['vysledek_morse'] = m_logic.decrypt_logic(vstup, up_d, low_d, m_consts.separator)
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