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

    // 2. FUNKCE PRO PŘEPÍNÁNÍ ŠIFER
    function handleCipherChange(val) {
        // Skryje všechny skupiny pod-voleb
        document.querySelectorAll('.cipher-options').forEach(el => {
            el.style.display = 'none';
        });

        // Definice, co se má pro jakou volbu ukázat
        if (val === 'morse') {
            const optMorse = document.getElementById('options-morse');
            if (optMorse) optMorse.style.display = 'block';
        } 
        else if (val === 'spirala' || val === 'snek') {
            const optMatrix = document.getElementById('options-matrix-standard');
            if (optMatrix) optMatrix.style.display = 'block';
        } 
        else if (val === 'had') {
            const optHad = document.getElementById('options-had');
            if (optHad) optHad.style.display = 'block';
        }
    }

    // 3. EVENT LISTENERY (Interakce)

    // Změna šifry v selectu
    if (cipherType) {
        cipherType.addEventListener('change', function() {
            handleCipherChange(this.value);
        });
    }

    // Přepínání sekcí v menu
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

    // 4. INICIALIZACE (Po načtení nebo návratu z Django)
    
    // Nastavíme správné viditelné pod-volby podle aktuální hodnoty
    if (cipherType) {
        handleCipherChange(cipherType.value);
    }

    // Pokud Django poslalo data, otevřeme rovnou sekci Šifry
    if (djangoData) {
        const shouldShow = djangoData.getAttribute('data-show-sifry') === 'true';
        if (shouldShow) {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        }
    }
});