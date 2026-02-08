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

    // Rozšíření logiky přepínání pro Číselný kód
if (cipherType) {
    cipherType.addEventListener('change', function() {
        const val = this.value;
        document.getElementById('options-morse').style.display = (val === 'morse') ? 'block' : 'none';
        document.getElementById('options-matrix').style.display = (val === 'matrix') ? 'block' : 'none';
        document.getElementById('options-number').style.display = (val === 'number_code') ? 'block' : 'none';
    });
}

// Speciální chování pro Hada - změna na Shora/Zdola
const matrixType = document.getElementById('matrix-type');
const startLabel = document.getElementById('start-label');
const startSelect = document.getElementById('start-point-select');

if (matrixType) {
    matrixType.addEventListener('change', function() {
        if (this.value === 'had') {
            startLabel.innerText = 'Výběr:';
            startSelect.innerHTML = `
                <option value="shora">Hora (shora)</option>
                <option value="zdola">Zdola</option>
            `;
        } else {
            startLabel.innerText = 'Startovní bod:';
            startSelect.innerHTML = `
                <option value="1">Levý dolní</option>
                <option value="2">Levý horní</option>
                <option value="3">Pravý horní</option>
                <option value="4">Pravý dolní</option>
            `;
        }
    });
}

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