document.addEventListener('DOMContentLoaded', function() {
    const btnSifry = document.getElementById('menu-sifry');
    const btnUvod = document.getElementById('menu-uvod');
    const sekceSifry = document.getElementById('sekce-sifry');
    const sekceUvod = document.getElementById('sekce-uvod');

    btnSifry.addEventListener('click', function() {
        sekceUvod.style.display = 'none';
        sekceSifry.style.display = 'block';
    });

    btnUvod.addEventListener('click', function() {
        sekceSifry.style.display = 'none';
        sekceUvod.style.display = 'block';
    });

    // Kontrola, zda Django poslalo výsledek - pokud ano, automaticky otevřít šifry
    const maVysledek = document.querySelector('.result-area');
    if (maVysledek) {
        sekceUvod.style.display = 'none';
        sekceSifry.style.display = 'block';
    }
});