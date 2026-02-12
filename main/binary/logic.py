def encrypt(text, separator):
    binary_results = []
    for char in text.lower():
        if 'a' <= char <= 'z':
            # Výpočet pozice (1-26) a převod na binární řetězec
            position = ord(char) - ord('a') + 1
            binary_results.append(format(position, 'b'))
        elif char == ' ':
            # Mezera mezi slovy je v seznamu jako prázdný řetězec
            binary_results.append("") 
    
    return separator.join(binary_results)

def decrypt(binary_string, separator):
    result = []
    # Rozdělení řetězce podle zvoleného oddělovače
    binary_values = binary_string.split(separator)
    
    for val in binary_values:
        if val == "":
            # Prázdné místo mezi oddělovači značí mezeru v textu
            result.append(" ")
        else:
            # Převod z binární soustavy na pozici a pak na znak
            position = int(val, 2)
            char = chr(position + ord('a') - 1)
            result.append(char)
            
    return "".join(result)