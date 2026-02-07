# morse_dict - základní slovník pro šifrování
morse_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', '': ''
} #

# letters_with_diacritic - písmena s diakritikou pro šifrování
letters_with_diacritic = {
    'Á': '.-', 'Č': '-.-.', 'Ď': '-..', 'Ě': '.', 'É': '.', 'Í': '..',
    'Ň': '-.', 'Ó': '---', 'Ř': '.-.', 'Š': '...', 'Ť': '-', 'Ů': '..-',
    'Ú': '..-', 'Ý': '-.--', 'Ž': '--..'
} #

morse_dict.update(letters_with_diacritic) #
morse_dict.update({k.lower(): v for k, v in morse_dict.items() if k != ''}) #

# Slovníky pro dešifrování (morse_uppercase a morse_lowercase)
morse_uppercase = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', '': ''
} #

morse_lowercase = {k.lower(): v for k, v in morse_uppercase.items() if k != ''} #
morse_lowercase[''] = '' #

def make_reverse(d):
    """Vytvoří obrácenou morseovku (tečka <-> čárka)"""
    return {k: v.replace('.', 'x').replace('-', '.').replace('x', '-') for k, v in d.items()} #

morse_reverse = make_reverse(morse_dict) #
morse_reverse_uppercase = make_reverse(morse_uppercase) #
morse_reverse_lowercase = make_reverse(morse_lowercase) #

separator = "|" #