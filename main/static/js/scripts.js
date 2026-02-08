document.addEventListener('DOMContentLoaded', function() {
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const cipherType = document.getElementById('cipher-type');

    // Funkce pro skrytí všeho a ukázání jedné sekce
    function switchSection(toShow) {
        secUvod.style.display = 'none';
        secSifry.style.display = 'none';
        // Zde můžeš přidat další sekce (uzly, testy), až je vytvoříš
        
        toShow.style.display = 'block';
    }

    if (btnSifry) btnSifry.addEventListener('click', () => switchSection(secSifry));
    if (btnOMne) btnOMne.addEventListener('click', () => switchSection(secUvod));

    // Dynamické zobrazení polí (Morse vs Matice)
    if (cipherType) {
        cipherType.addEventListener('change', function() {
            const val = this.value;
            const optMorse = document.getElementById('options-morse');
            const optMatrix = document.getElementById('options-matrix');
            
            if (optMorse) optMorse.style.display = (val === 'morse') ? 'block' : 'none';
            if (optMatrix) optMatrix.style.display = (val === 'matrix') ? 'block' : 'none';
        });
    }

    // Automatické otevření po odeslání (Django data)
    const djangoData = document.getElementById('django-data');
    if (djangoData) {
        const shouldShow = djangoData.getAttribute('data-show-sifry') === 'true';
        if (shouldShow) {
            switchSection(secSifry);
            if (cipherType) cipherType.dispatchEvent(new Event('change'));
        }
    }
});