import logic


def encrypt(message, active_dict, separator):
    # message - jako text (msg)
    cipher = separator
    for letter in message:
        if letter == ' ':
            if cipher[:-1] != separator and cipher[:-2] != separator:
                cipher += separator
        elif letter in (',', ':', '.'):
            if letter == '.': cipher += separator
        elif letter in active_dict:
            cipher += active_dict[letter] + separator
    return cipher + separator #


def decrypt_logic(message, dict_uppercase, dict_lowercase, separator):
    # decipher - výsledný dešifrovaný text
    if not message or message[0] != separator:
        return "!!Chyba!!" #

    decipher = ''
    citext = '' # citext - dočasné uložení kódu písmene
    space_count = 0
    start_msg = True # start_msg - hlídá velké písmeno na začátku

    for letter in message[1:]:
        if letter != separator:
            space_count = 0
            citext += letter
        else:
            space_count += 1
            if citext:
                current_dict = dict_uppercase if start_msg else dict_lowercase
                try:
                    val_list = list(current_dict.values())
                    key_list = list(current_dict.keys())
                    decipher += key_list[val_list.index(citext)]
                    start_msg = False
                except ValueError:
                    decipher += "?"
                citext = ''

            if space_count == 2:
                decipher += ' '
            elif space_count == 3:
                if decipher.endswith(' '): decipher = decipher[:-1]
                decipher += '. '
                start_msg = True
    return decipher #


def custom_morse_setup(base_dict, base_up, base_low):
    """Vytvoří vlastní transformované slovníky"""
    dash = input("Zadej znak pro ČÁRKU: ")
    dot = input("Zadej znak pro TEČKU: ")
    sep = input("Zadej znak pro ODDĚLOVAČ: ")

    def transform(d):
        return {k: v.replace('-', dash).replace('.', dot) for k, v in d.items()}

    return transform(base_dict), transform(base_up), transform(base_low), sep #