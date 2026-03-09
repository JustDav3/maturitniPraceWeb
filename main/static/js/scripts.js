const DATA_UZLU = {
    'ambulak': [
        "Příprava konců lan a jejich překřížení.", // Krok 1
        "První provlečení konce pod lanem.",       // Krok 2
        "Vytvoření druhé smyčky v opačném směru.", // Krok 3
        "Dotažení uzlu rovnoměrným tahem.",        // Krok 4
        "Kontrola správnosti – uzel musí být plochý." // Krok 5
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

    if (showSifry || hasMessages) {
        secUvod.style.display = 'none';
        secUzly.style.display = 'none';
        secSifry.style.display = 'block';
    }

    // POMOCNÁ FUNKCE: Nastaví select, label a vybere správnou hodnotu
    function setupSelect(labelText, optionsArray, savedValue) {
        dContainer.style.display = 'block'; 
        dLabel.innerText = labelText;
        dSelect.disabled = false;
        
        dSelect.innerHTML = optionsArray.map(opt => {
            const isSelected = opt.val == savedValue ? 'selected' : '';
            return `<option value="${opt.val}" ${isSelected}>${opt.text}</option>`;
        }).join('');
    }

    function handleCipherChange(val) {
        // 1. Reset: Vše schováme a vypneme
        [shiftBox, dContainer, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        const savedStartBod = dSelect.getAttribute('data-start-bod');
        const savedSmerHad = dSelect.getAttribute('data-smer-had');
        const savedMode = dSelect.getAttribute('data-mode');

        // 3. Logika pro jednotlivé šifry
        if (val === 'morse') {
            setupSelect('Režim šifrování:', [{val: '1', text: 'Klasická (.-)'}, {val: '2', text: 'Obrácená (-.)'}], savedMode);
            dInp1.style.display = 'block'; dInp2.style.display = 'block'; dInp3.style.display = 'block';
            document.getElementById('label-input-1').innerText = 'Tečka:';
            document.getElementById('label-input-2').innerText = 'Čárka:';
            document.getElementById('label-input-3').innerText = 'Oddělovač:';
        } 
        else if (val === 'number_code') {
            shiftBox.style.display = 'block';
            setupSelect('Typ abecedy:', [{val: '1', text: 'Anglická (26)'}, {val: '2', text: 'Česká (42)'}], savedMode);
            dCheck.style.display = 'block';
            document.getElementById('label-checkbox').innerText = 'Obrátit pořadí (A=26, Z=1)';
        } 
        else if (val === 'binary') {
            shiftBox.style.display = 'block';
            dInp3.style.display = 'block';
            document.getElementById('label-input-3').innerText = 'Oddělovač bitů:';
            dCheck.style.display = 'block';
            document.getElementById('label-checkbox').innerText = 'Invertování bitů (0↔1)';
        }
        else if (val === 'spirala' || val === 'snek' || val === 'had') {
            if (val === 'spirala') setupSelect('Startovní bod (roh):', [{val: '1', text: 'Vlevo nahoře'}, {val: '2', text: 'Vpravo nahoře'}, {val: '3', text: 'Vlevo dole'}, {val: '4', text: 'Vpravo dole'}], savedStartBod);
            if (val === 'snek') setupSelect('Startovní střed:', [{val: '1', text: 'Vlevo dole'}, {val: '2', text: 'Vlevo nahoře'}, {val: '3', text: 'Vpravo nahoře'}, {val: '4', text: 'Vpravo dole'}], savedStartBod);
            if (val === 'had') setupSelect('Směr pohybu hada:', [{val: 'shora', text: 'Shora dolů'}, {val: 'zleva', text: 'Zleva doprava'}], savedSmerHad);
        }

        // 4. Aktivace zobrazených inputů
        [shiftBox, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    // --- EVENT LISTENERY PRO MENU (Nyní správně mimo funkci zobrazUzel) ---
    btnSifry.onclick = () => { 
        secUvod.style.display = 'none'; secUzly.style.display = 'none';
        secSifry.style.display = 'block'; 
    };
    btnOMne.onclick = () => {
        secSifry.style.display = 'none'; secUzly.style.display = 'none';
        secUvod.style.display = 'block'; 
    };
    btnUzly.onclick = () => { 
        secUvod.style.display = 'none'; secSifry.style.display = 'none'; 
        secUzly.style.display = 'block'; 
    };

    // Automatické otevření sekce šifry po odeslání z Django
    if (djangoData && djangoData.getAttribute('data-show-sifry') === 'true') {
        secUvod.style.display = 'none'; secUzly.style.display = 'none'; secSifry.style.display = 'block';
    }

    cipherType.onchange = (e) => handleCipherChange(e.target.value);
    
    // Prvotní spuštění při načtení
    handleCipherChange(cipherType.value);
}); // <-- Tady končí DOMContentLoaded

// --- GLOBÁLNÍ FUNKCE PRO UZLY (Mimo DOMContentLoaded) ---
window.zobrazUzel = function(folderName, nazev, ytUrl, popis) {
    const detail = document.getElementById('uzel-detail');
    const iframe = document.getElementById('uzel-video-frame');
    const obrazkyContainer = document.getElementById('uzel-obrazky');

    // 1. Nastavíme texty
    document.getElementById('uzel-nazev').innerText = nazev;
    document.getElementById('uzel-popis').innerText = popis;
    if (iframe) { iframe.src = ytUrl; }

    // 2. Nastavíme YouTube video
    iframe.src = ytUrl;

    // 3. Vygenerujeme 5 obrázků
    let imgHtml = '';
    const pocetObrazku = 5; 

    for (let i = 1; i <= pocetObrazku; i++) {
        imgHtml += `
            <div class="col" style="flex: 1; min-width: 150px;">
                <img src="/static/uzly/${folderName}/${i}.png" class="uzel-img-step" alt="Krok ${i}" style="width:100%; border-radius:4px;">
                <small style="display:block; text-align:center; color:#d4f0c7; font-family: 'Comic Sans MS">Krok ${i}</small>
            </div>`;
    }
    obrazkyContainer.innerHTML = imgHtml;

    // 4. Zviditelníme detail
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });
};