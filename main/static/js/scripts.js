const DATA_UZLU = {
    'ambulak': [
        "Příprava konců lan a jejich překřížení.",
        "První provlečení konce pod lanem.",
        "Vytvoření druhé smyčky v opačném směru.",
        "Dotažení uzlu rovnoměrným tahem.",
        "Kontrola správnosti – uzel musí být plochý."
    ],
    'skotak': [
        "Vytvoření smyčky na silnějším laně.",
        "Provlečení slabšího lana smyčkou spodem.",
        "Obtočení slabšího lana kolem celé smyčky.",
        "Provlečení pod sebou samým.",
        "Pořádné dotažení obou lan."
    ],
};

document.addEventListener('DOMContentLoaded', function () {
    const cipherType = document.getElementById('cipher-type');
    const shiftBox = document.getElementById('shared-shift-container');
    const dSelect = document.getElementById('dynamic-select');
    const dContainer = document.getElementById('container-select');
    const dLabel = document.getElementById('label-select');
    const dCheck = document.getElementById('container-checkbox');
    const dInp1 = document.getElementById('container-input-1');
    const dInp2 = document.getElementById('container-input-2');
    const dInp3 = document.getElementById('container-input-3');

    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const btnUzly = document.getElementById('btn-uzly');
    
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const secUzly = document.getElementById('section-uzly');
    const djangoData = document.getElementById('django-data');

    // Sjednocená funkce pro přepínání sekcí
    function prepniSekci(zobrazit) {
        if (secUvod) secUvod.style.display = 'none';
        if (secSifry) secSifry.style.display = 'none';
        if (secUzly) secUzly.style.display = 'none';
        
        if (zobrazit) zobrazit.style.display = 'block';
    }

    // Propojení menu
    if (btnSifry) btnSifry.onclick = () => prepniSekci(secSifry);
    if (btnOMne) btnOMne.onclick = () => prepniSekci(secUvod);
    if (btnUzly) btnUzly.onclick = () => prepniSekci(secUzly);

    // Automatické zobrazení po odeslání Django formuláře
    const showSifry = djangoData ? djangoData.getAttribute('data-show-sifry') === 'true' : false;
    const hasMessages = document.querySelector('.alert') !== null;
    
    if (showSifry || hasMessages) {
        prepniSekci(secSifry);
    } else {
        prepniSekci(secUvod);
    }

    // Logika šifer
    function setupSelect(labelText, optionsArray, savedValue) {
        if (dContainer) dContainer.style.display = 'block';
        if (dLabel) dLabel.innerText = labelText;
        if (dSelect) {
            dSelect.disabled = false;
            dSelect.innerHTML = optionsArray.map(opt => {
                const isSelected = opt.val == savedValue ? 'selected' : '';
                return `<option value="${opt.val}" ${isSelected}>${opt.text}</option>`;
            }).join('');
        }
    }

    function handleCipherChange(val) {
        [shiftBox, dContainer, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        if (!dSelect) return;
        const savedStartBod = dSelect.getAttribute('data-start-bod');
        const savedSmerHad = dSelect.getAttribute('data-smer-had');
        const savedMode = dSelect.getAttribute('data-mode');

        if (val === 'morse') {
            setupSelect('Režim šifrování:', [{ val: '1', text: 'Klasická (.-)' }, { val: '2', text: 'Obrácená (-.)' }], savedMode);
            [dInp1, dInp2, dInp3].forEach(el => { if (el) el.style.display = 'block'; });
            document.getElementById('label-input-1').innerText = 'Tečka:';
            document.getElementById('label-input-2').innerText = 'Čárka:';
            document.getElementById('label-input-3').innerText = 'Oddělovač:';
        } else if (val === 'number_code') {
            if (shiftBox) shiftBox.style.display = 'block';
            setupSelect('Typ abecedy:', [{ val: '1', text: 'Anglická (26)' }, { val: '2', text: 'Česká (42)' }], savedMode);
            if (dCheck) dCheck.style.display = 'block';
            document.getElementById('label-checkbox').innerText = 'Obrátit pořadí (A=26, Z=1)';
        }

        [shiftBox, dCheck, dInp1, dInp2, dInp3, dContainer].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    if (cipherType) {
        cipherType.onchange = (e) => handleCipherChange(e.target.value);
        handleCipherChange(cipherType.value);
    }
});

// Globální funkce pro uzly
window.zobrazUzel = function (folderName, nazev, ytUrl, popis) {
    const detail = document.getElementById('uzel-detail');
    const obrazkyContainer = document.getElementById('uzel-obrazky');

    document.getElementById('uzel-nazev').innerText = nazev;
    document.getElementById('uzel-popis').innerText = popis;
    document.getElementById('uzel-video-frame').src = ytUrl;

    if (obrazkyContainer) {
        let imgHtml = '';
        for (let i = 1; i <= 5; i++) {
            imgHtml += `
                <div class="col" style="flex: 1;">
                    <img src="/static/uzly/${folderName}/${i}.png" alt="Krok ${i}" style="width:100%; border-radius:4px;">
                    <small>Krok ${i}</small>
                </div>`;
        }
        obrazkyContainer.innerHTML = imgHtml;
    }

    if (detail) detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });
};