document.addEventListener('DOMContentLoaded', function() {
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const cipherType = document.getElementById('cipher-type');

    // Funkce pro přepnutí na šifry
    function showSifry() {
        if (secUvod && secSifry) {
            secUvod.style.display = 'none';
            secSifry.style.display = 'block';
        }
    }

    // Obsluha menu
    if (btnSifry) {
        btnSifry.addEventListener('click', showSifry);
    }
    if (btnOMne) {
        btnOMne.addEventListener('click', () => {
            secSifry.style.display = 'none';
            secUvod.style.display = 'block';
        });
    }

    // Dynamické zobrazení polí podle typu šifry
    if (cipherType) {
        cipherType.addEventListener('change', function() {
            const val = this.value;
            const optMorse = document.getElementById('options-morse');
            const optMatrix = document.getElementById('options-matrix');
            
            if (optMorse) optMorse.style.display = (val === 'morse') ? 'block' : 'none';
            if (optMatrix) optMatrix.style.display = (val === 'matrix') ? 'block' : 'none';
        });
    }

    // Automatické otevření sekce po operaci (pokud Django poslalo data)
    const djangoData = document.getElementById('django-data');
    if (djangoData) {
        const shouldShow = djangoData.getAttribute('data-show-sifry') === 'true';
        if (shouldShow) {
            showSifry();
            // Aktualizace viditelnosti pod-voleb
            if (cipherType) {
                cipherType.dispatchEvent(new Event('change'));
            }
        }
    }
});