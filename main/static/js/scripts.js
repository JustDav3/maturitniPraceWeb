document.addEventListener('DOMContentLoaded', function () {

    // 1. KONSTANTY
    const cipherType = document.getElementById('cipher-type');
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const djangoData = document.getElementById('django-data');

    // 2. FUNKCE PRO PŘEPÍNÁNÍ ŠIFER
    function handleCipherChange(val) {
        // Skryje všechny skupiny a VYPNEME jejich inputy
        document.querySelectorAll('.cipher-options').forEach(el => {
            el.style.display = 'none';
            el.querySelectorAll('select, input').forEach(input => {
                input.disabled = true;
            });
        });

        let activeDiv = null;
        if (val === 'morse') {
            activeDiv = document.getElementById('options-morse');
        } 
        else if (val === 'number_code') {
            activeDiv = document.getElementById('options-number');
        }
        else if (val === 'spirala') {
            activeDiv = document.getElementById('options-spirala');
        } 
        else if (val === 'snek') {
            activeDiv = document.getElementById('options-snek');
        }
        else if (val === 'had') {
            activeDiv = document.getElementById('options-had');
        }

        if (activeDiv) {
            activeDiv.style.display = 'block';
            activeDiv.querySelectorAll('select, input').forEach(input => {
                input.disabled = false;
            });
        }
    }

    // 3. EVENT LISTENERY (S kontrolou existence, aby se JS nesekl)
    if (cipherType) {
        cipherType.addEventListener('change', function() {
            handleCipherChange(this.value);
        });
    }

    if (btnSifry && secSifry && secUvod) {
        btnSifry.addEventListener('click', () => {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        });
    }

    if (btnOMne && secSifry && secUvod) {
        btnOMne.addEventListener('click', () => {
            secSifry.style.display = 'none';
            secUvod.style.display = 'block';
        });
    }

    // 4. INICIALIZACE - POŘADÍ JE DŮLEŽITÉ
    
    // Nejdřív zjistíme, jestli máme ukázat šifry (návrat z Django)
    let showingSifry = false;
    if (djangoData) {
        showingSifry = djangoData.getAttribute('data-show-sifry') === 'true';
        if (showingSifry && secUvod && secSifry) {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        }
    }

    // Až pak nastavíme správný select (aby disabled sedělo)
    if (cipherType) {
        handleCipherChange(cipherType.value);
    }
});