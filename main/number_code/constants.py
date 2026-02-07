# alphabet_dict - základní anglická abeceda a mapování diakritiky
alphabet_dict = {
    'A': '1', 'B': '2', 'C': '3', 'D': '4', 'E': '5', 'F': '6', 'G': '7', 'H': '8',
    'I': '9', 'J': '10', 'K': '11', 'L': '12', 'M': '13', 'N': '14', 'O': '15',
    'P': '16', 'Q': '17', 'R': '18', 'S': '19', 'T': '20', 'U': '21', 'V': '22',
    'W': '23', 'X': '24', 'Y': '25', 'Z': '26',
    'Á': '1', 'Č': '3', 'Ď': '4', 'Ě': '5', 'É': '5', 'Í': '9', 'Ň': '14',
    'Ó': '15', 'Ř': '18', 'Š': '19', 'Ť': '20', 'Ů': '21', 'Ú': '21', 'Ý': '25', 'Ž': '26'
}

# Slovníky pro dešifrování (velká a malá písmena)
alphabet_uppercase = {k: v for k, v in alphabet_dict.items() if k.isupper() and len(k) == 1 and ord(k) < 128}
alphabet_lowercase = {k.lower(): v for k, v in alphabet_uppercase.items()}

# czech_alphabet - kompletní česká abeceda
czech_alphabet = {
    'A': '1', 'Á': '2', 'B': '3', 'C': '4', 'Č': '5', 'D': '6', 'Ď': '7', 'E': '8',
    'É': '9', 'Ě': '10', 'F': '11', 'G': '12', 'H': '13', 'I': '14', 'Í': '15',
    'J': '16', 'K': '17', 'L': '18', 'M': '19', 'N': '20', 'Ň': '21', 'O': '22',
    'Ó': '23', 'P': '24', 'Q': '25', 'R': '26', 'Ř': '27', 'S': '28', 'Š': '29',
    'T': '30', 'Ť': '31', 'U': '32', 'Ú': '33', 'Ů': '34', 'V': '35', 'W': '36',
    'X': '37', 'Y': '38', 'Ý': '39', 'Z': '40', 'Ž': '41'
}

# Obrácené abecedy (Reverse)
alphabet_reverse = {k: str(27 - int(v)) for k, v in alphabet_dict.items() if v.isdigit()}
czech_alphabet_reverse = {k: str(42 - int(v)) for k, v in czech_alphabet.items() if v.isdigit()}