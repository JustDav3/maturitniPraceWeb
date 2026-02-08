document.addEventListener('DOMContentLoaded', function() {
    const btnSifry = document.getElementById('menu-sifry');
    const sekceUvod = document.getElementById('uvod-sekce');
    const sekceSifry = document.getElementById('sifry-sekce');

    // Funkce pro zobrazení šifer
    function ukazSifry() {
        sekceUvod.style.display = 'none';
        sekceSifry.style.display = 'block';
    }

    // Kliknutí v menu
    btnSifry.addEventListener('click', ukazSifry);

    // DŮLEŽITÉ: Pokud Django vrátil výsledek, chceme, aby šifry zůstaly viditelné
    // Kontrolujeme, zda je v textarea nějaký text nebo zda existuje výsledek
    const vysledek = document.querySelector('.result-area');
    const textarea = document.querySelector('textarea[name="vstup"]');
    
    if (vysledek || (textarea && textarea.value.trim() !== "")) {
        ukazSifry();
    }
});