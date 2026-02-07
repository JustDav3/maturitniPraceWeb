// Příklad: Funkce pro vymazání polí (můžeš ji přidat k tlačítku)
function clearFields() {
    document.querySelectorAll('textarea').forEach(el => el.value = '');
}