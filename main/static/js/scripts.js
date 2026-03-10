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

    const showSifry = djangoData.getAttribute('data-show-sifry') === 'true';
    const hasMessages = document.querySelector('.alert') !== null;

    // Funkce pro přepínání sekcí
    // Tato funkce musí nahradit veškeré sec.style.display = '...'
    function showSection(sectionToShow) {
    const sections = [secUvod, secSifry, secUzly];
    sections.forEach(s => {
        s.style.display = 'none'; // Reset
        s.classList.remove('visible-section');
    });
    sectionToShow.style.display = 'block';
    sectionToShow.classList.add('visible-section');
    }

    if (showSifry || hasMessages) showSection(secSifry);

    function setupSelect(labelText, optionsArray, savedValue) {
        dContainer.classList.remove('hidden-element');
        dLabel.innerText = labelText;
        dSelect.disabled = false;
        dSelect.innerHTML = optionsArray.map(opt => {
            const isSelected = opt.val == savedValue ? 'selected' : '';
            return `<option value="${opt.val}" ${isSelected}>${opt.text}</option>`;
        }).join('');
    }

    function handleCipherChange(val) {
        // Reset: skryjeme vše
        [shiftBox, dContainer, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.classList.add('hidden-element');
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        const savedStartBod = dSelect.getAttribute('data-start-bod');
        const savedSmerHad = dSelect.getAttribute('data-smer-had');
        const savedMode = dSelect.getAttribute('data-mode');

        if (val === 'morse') {
            setupSelect('Režim šifrování:', [{ val: '1', text: 'Klasická (.-)' }, { val: '2', text: 'Obrácená (-.)' }], savedMode);
            [dInp1, dInp2, dInp3].forEach(el => el.classList.remove('hidden-element'));
            document.getElementById('label-input-1').innerText = 'Tečka:';
            document.getElementById('label-input-2').innerText = 'Čárka:';
            document.getElementById('label-input-3').innerText = 'Oddělovač:';
        }
        else if (val === 'number_code') {
            shiftBox.classList.remove('hidden-element');
            setupSelect('Typ abecedy:', [{ val: '1', text: 'Anglická (26)' }, { val: '2', text: 'Česká (42)' }], savedMode);
            dCheck.classList.remove('hidden-element');
            document.getElementById('label-checkbox').innerText = 'Obrátit pořadí (A=26, Z=1)';
        }
        else if (val === 'binary') {
            shiftBox.classList.remove('hidden-element');
            dInp3.classList.remove('hidden-element');
            document.getElementById('label-input-3').innerText = 'Oddělovač bitů:';
            dCheck.classList.remove('hidden-element');
            document.getElementById('label-checkbox').innerText = 'Invertování bitů (0↔1)';
        }
        else if (val === 'spirala' || val === 'snek' || val === 'had') {
            if (val === 'spirala') setupSelect('Startovní bod:', [{ val: '1', text: 'Vlevo nahoře' }, { val: '2', text: 'Vpravo nahoře' }, { val: '3', text: 'Vlevo dole' }, { val: '4', text: 'Vpravo dole' }], savedStartBod);
            if (val === 'snek') setupSelect('Startovní střed:', [{ val: '1', text: 'Vlevo dole' }, { val: '2', text: 'Vlevo nahoře' }, { val: '3', text: 'Vpravo nahoře' }, { val: '4', text: 'Vpravo dole' }], savedStartBod);
            if (val === 'had') setupSelect('Směr pohybu:', [{ val: 'shora', text: 'Shora dolů' }, { val: 'zleva', text: 'Zleva doprava' }], savedSmerHad);
        }

        // Povolení inputů
        [shiftBox, dCheck, dInp1, dInp2, dInp3, dContainer].forEach(el => {
            if (el && !el.classList.contains('hidden-element')) {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    btnSifry.onclick = () => showSection('section-sifry');
    btnOMne.onclick = () => showSection('section-uvod');
    btnUzly.onclick = () => showSection('section-uzly');

    cipherType.onchange = (e) => handleCipherChange(e.target.value);
    handleCipherChange(cipherType.value);
});

window.zobrazUzel = function (folderName, nazev, ytUrl, popis) {
    const detail = document.getElementById('uzel-detail');
    document.getElementById('uzel-nazev').innerText = nazev;
    document.getElementById('uzel-popis').innerText = popis;
    document.getElementById('uzel-video-frame').src = ytUrl;

    let imgHtml = '';
    for (let i = 1; i <= 5; i++) {
        imgHtml += `
            <div class="col">
                <img src="/static/uzly/${folderName}/${i}.png" class="uzel-img-step" alt="Krok ${i}">
                <small class="step-label">Krok ${i}</small>
            </div>`;
    }
    document.getElementById('uzel-obrazky').innerHTML = imgHtml;

    detail.classList.remove('hidden-element'); 
    detail.scrollIntoView({ behavior: 'smooth' });
};