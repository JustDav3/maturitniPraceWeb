/**
 * scripts.js - Webová Aplikace pro TK Rozrazil
 * Struktura: Konstanty -> Pomocné funkce -> Handlery -> Event Listenery
 */

document.addEventListener('DOMContentLoaded', function () {

    // 1. KONSTANTY
    const cipherType = document.getElementById('cipher-type');
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const djangoData = document.getElementById('django-data');

    // 2. FUNKCE PRO PŘEPÍNÁNÍ ŠIFER (S tvojí opravou pro startovní body)
    function handleCipherChange(val) {
        // Skryje všechny skupiny a VYPNEME jejich inputy (aby se netloukly startovní body)
        document.querySelectorAll('.cipher-options').forEach(el => {
            el.style.display = 'none';
            el.querySelectorAll('select, input').forEach(input => {
                input.disabled = true;
            });
        });

        // Mapování tvých ID z HTML
        let activeDiv = null;
        if (val === 'morse') {
            activeDiv = document.getElementById('options-morse');
        } 
        else if (val === 'number_code') {
            activeDiv = document.getElementById('options-number'); // Sedí na tvé ID v HTML
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

        // Zobrazení a ZAPNUTÍ prvků
        if (activeDiv) {
            activeDiv.style.display = 'block';
            activeDiv.querySelectorAll('select, input').forEach(input => {
                input.disabled = false;
            });
        }
    }

    // 3. EVENT LISTENERY

    if (cipherType) {
        cipherType.addEventListener('change', function() {
            handleCipherChange(this.value);
        });
    }

    // Přepínání menu (O mně / Šifry)
    if (btnSifry) {
        btnSifry.addEventListener('click', () => {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        });
    }

    if (btnOMne) {
        btnOMne.addEventListener('click', () => {
            secSifry.style.display = 'none';
            secUvod.style.display = 'block';
        });
    }

    // 4. INICIALIZACE
    
    if (cipherType) {
        handleCipherChange(cipherType.value);
    }

    if (djangoData) {
        const shouldShow = djangoData.getAttribute('data-show-sifry') === 'true';
        if (shouldShow) {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        }
    }
});