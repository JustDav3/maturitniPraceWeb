def encrypt(message, current_dict):
    # message - jako text (msg)
    cipher = ""
    last_was_space = False
    for letter in message:
        # letter - písmena
        if letter == ".":
            cipher = cipher[:-1] + ". "
            last_was_space = False
        elif letter == " ":
            # Více mezer za sebou nepřidá další oddělovač slov.
            if cipher and not last_was_space:
                cipher = cipher[:-1] + "; "
                last_was_space = True
        elif letter in current_dict:
            cipher += current_dict[letter] + ','
            last_was_space = False
    return cipher


def decrypt(message, dict_uppercase, dict_lowercase):
    # deciphered - výsledný dešifrovaný text
    deciphered = ""
    # temp_num - dočasné uložení načítaného čísla
    temp_num = ""
    # start_msg - příznak pro velké písmeno na začátku věty
    start_msg = True

    for char in message:
        if char not in (",", ".", ";"):
            if char != " ":
                temp_num += char
        else:
            if temp_num:
                current_dict = dict_uppercase if start_msg else dict_lowercase
                try:
                    val_list = list(current_dict.values())
                    key_list = list(current_dict.keys())
                    deciphered += key_list[val_list.index(temp_num)]
                    start_msg = False
                except ValueError:
                    deciphered += "?"
                temp_num = ""

            if char == ".":
                if deciphered.endswith(' '):
                    deciphered = deciphered[:-1]
                deciphered += ". "
                start_msg = True
            elif char == ";":
                deciphered += " "
    return deciphered


def shift_alphabet(current_dict, shift_value):
    # Modifikuje hodnoty v abecedě o zadaný posun
    new_dict = current_dict.copy()
    for key in new_dict:
        if new_dict[key].isdigit():
            new_dict[key] = str(int(new_dict[key]) + shift_value)
    return new_dict