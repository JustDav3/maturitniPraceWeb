const KATEGORIE_UZLU = {
    'Spojovací': [
        { id: 'ambulak', nazev: 'Ambulák', url: 'https://www.youtube-nocookie.com/embed/zUTuDpYQsvI', popis: 'Pro spojení stejně silných lan.'},
        { id: 'skotak', nazev: 'Škoťák', url: 'https://www.youtube-nocookie.com/embed/n5P6xnNa5nI', popis: 'Pro spojení lan různé tloušťky.'},
        { id: 'sevcak', nazev: 'Ševčák', url: 'https://www.youtube-nocookie.com/embed/gleZlA655WI', popis: 'Pevný spojovací uzel.'}
    ],
    'Nahazované': [
        { id: 'lodak', nazev: 'Lodák', url: 'https://www.youtube-nocookie.com/embed/HEW92nDCrmg', popis: 'Rychlé připevnění ke kůlu.'},
        { id: 'drevarak', nazev: 'Dřevařák', url: 'https://www.youtube-nocookie.com/embed/kXSCqdBSdQM', popis: 'Vlečení kmenů.'},
        { id: 'zkracovacka', nazev: 'Zkracovačka', url: 'https://www.youtube-nocookie.com/embed/gdoa6zCbR5A', popis: 'Zkrácení lana bez řezání.'}
    ],
    'Kolem pasu': [
        { id: 'dracak', nazev: 'Dračák', url: 'https://www.youtube-nocookie.com/embed/_E0KBUc2GFg', popis: 'Pevná smyčka, která se nestahuje.'},
        { id: 'dobracek', nazev: 'Dobráček', url: 'https://www.youtube-nocookie.com/embed/eT47TEOTS8A', popis: 'Dekorativní nebo upevňovací uzel.'}
    ],
    'Kolem ruky': [
        { id: 'liscak', nazev: 'Liščák', url: 'https://www.youtube-nocookie.com/embed/bdw2_9jnhwc', popis: 'Jednoduchá upevňovací smyčka.'},
        { id: 'auticka', nazev: 'Autíčka', url: 'https://www.youtube-nocookie.com/embed/ltyfdXzHZi8', popis: 'Smyčka na hračky nebo drobnosti.'},
        { id: 'pouta', nazev: 'Pouta', url: 'https://www.youtube-nocookie.com/embed/GHfZHNNelAM', popis: 'Dvojitá stahovací smyčka.'}
    ]
};

// Poznámka: DATA_UZLU jsem ponechal, pokud bys chtěl v budoucnu nahradit generické texty "Krok X" těmito popisy.
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
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    // --- 1. SELEKTORY ---
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
    const submenu = document.getElementById('uzly-submenu');

    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const secUzly = document.getElementById('section-uzly');
    const djangoData = document.getElementById('django-data');

    // --- 2. POČÁTEČNÍ STAV ---
    const showSifry = djangoData && djangoData.getAttribute('data-show-sifry') === 'true';
    const hasMessages = document.querySelector('.alert') !== null;

    if (showSifry || hasMessages) {
        secUvod.style.display = 'none';
        secUzly.style.display = 'none';
        secSifry.style.display = 'block';
    }

    // --- 3. LOGIKA ŠIFER ---
    function updateCipherUI(cipherName) {
        const modeContainer = document.querySelector('.cipher-mode-container');
        if (!modeContainer) return;

        const encryptionOnlyCiphers = ['had', 'snek', 'spirala'];

        if (encryptionOnlyCiphers.includes(cipherName.toLowerCase())) {
            modeContainer.innerHTML = `
                <div class="form-select small-select label-as-select" style="text-align: center; color: #000000;">Pouze zašifrování</div>
                <input type="hidden" name="akce" value="sifrovat"> 
            `;
        } else {
            modeContainer.innerHTML = `
                <select name="akce" class="form-select small-select">
                    <option value="sifrovat">Zašifrovat</option>
                    <option value="desifrovat">Dešifrovat</option>
                </select>
            `;
        }
    }

    function setupSelect(labelText, optionsArray, savedValue) {
        dContainer.style.display = 'block';
        dLabel.innerText = labelText;
        dSelect.disabled = false;

        dSelect.innerHTML = optionsArray.map(opt => {
            const isSelected = opt.val == savedValue ? 'selected' : '';
            return `<option value="${opt.val}" ${isSelected}>${opt.text}</option>`;
        }).join('');
    }

    function nastavAktivniTlacitko(idTlacitka) {
        // Seznam všech tvých ID tlačítek
        const tlacitka = ['btn-o-mne', 'btn-sifry', 'btn-uzly', 'btn-test'];
        
        tlacitka.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                if (id === idTlacitka) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        });
    }

    function handleCipherChange(val) {
        updateCipherUI(val);
        [shiftBox, dContainer, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        const savedStartBod = dSelect.getAttribute('data-start-bod');
        const savedSmerHad = dSelect.getAttribute('data-smer-had');
        const savedMode = dSelect.getAttribute('data-mode');

        if (val === 'morse') {
            setupSelect('Režim šifrování:', [{ val: '1', text: 'Klasická (.-)' }, { val: '2', text: 'Obrácená (-.)' }], savedMode);
            dInp1.style.display = 'block'; dInp2.style.display = 'block'; dInp3.style.display = 'block';
            document.getElementById('label-input-1').innerText = 'Tečka:';
            document.getElementById('label-input-2').innerText = 'Čárka:';
            document.getElementById('label-input-3').innerText = 'Oddělovač:';
        }
        else if (val === 'number_code') {
            shiftBox.style.display = 'block';
            setupSelect('Typ abecedy:', [{ val: '1', text: 'Anglická (26)' }, { val: '2', text: 'Česká (42)' }], savedMode);
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
            if (val === 'spirala') setupSelect('Startovní bod (roh):', [{ val: '1', text: 'Vlevo nahoře' }, { val: '2', text: 'Vpravo nahoře' }, { val: '3', text: 'Vlevo dole' }, { val: '4', text: 'Vpravo dole' }], savedStartBod);
            if (val === 'snek') setupSelect('Startovní střed:', [{ val: '1', text: 'Vlevo dole' }, { val: '2', text: 'Vlevo nahoře' }, { val: '3', text: 'Vpravo nahoře' }, { val: '4', text: 'Vpravo dole' }], savedStartBod);
            if (val === 'had') setupSelect('Směr pohybu hada:', [{ val: 'shora', text: 'Shora dolů' }, { val: 'zdola', text: 'Zdola nahoru' }], savedSmerHad);
        }

        [shiftBox, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    // --- 4. LOGIKA UZLŮ ---
    window.generujMenuUzlu = function () {
        const submenu = document.getElementById('uzly-submenu');
        if (!submenu) return;

        if (submenu.innerHTML.trim() === "") {
            for (const [nazevKat, uzly] of Object.entries(KATEGORIE_UZLU)) {
                const katDiv = document.createElement('div');
                katDiv.className = 'submenu-category';
                katDiv.innerText = nazevKat;

                const podMenuUzly = document.createElement('div');
                podMenuUzly.className = 'submenu-items-list';
                podMenuUzly.style.display = 'none';

                uzly.forEach(uzel => {
                    const uzelLink = document.createElement('div');
                    uzelLink.className = 'submenu-item-link';
                    uzelLink.innerText = uzel.nazev;
                    uzelLink.onclick = (e) => {
                        e.stopPropagation();
                        window.zobrazUzel(uzel.id, uzel.nazev, uzel.url, uzel.popis);
                    };
                    podMenuUzly.appendChild(uzelLink);
                });

                katDiv.onclick = (e) => {
                    e.stopPropagation();
                    const isVisible = podMenuUzly.style.display === 'block';
                    document.querySelectorAll('.submenu-items-list').forEach(el => el.style.display = 'none');
                    podMenuUzly.style.display = isVisible ? 'none' : 'block';
                };

                submenu.appendChild(katDiv);
                submenu.appendChild(podMenuUzly);
            }
        }
        submenu.style.display = (submenu.style.display === "none" || submenu.style.display === "") ? "block" : "none";
    };

    

    window.zobrazUzel = function (folderName, nazev, ytUrl, popis) {
        const detail = document.getElementById('uzel-detail');
        const iframe = document.getElementById('uzel-video-frame');
        const obrazkyContainer = document.getElementById('uzel-obrazky');

        document.getElementById('uzel-nazev').innerText = nazev;
        document.getElementById('uzel-popis').innerText = popis;
        
        if (iframe) { 
            iframe.src = ytUrl; 
        }

        let imgHtml = '';
        const pocetObrazku = 5;

        for (let i = 1; i <= pocetObrazku; i++) {
            imgHtml += `
                <div class="col" style="flex: 1; min-width: 150px;">
                    <img src="/static/uzly/${folderName}/${i}.png" class="uzel-img-div" alt="Krok ${i}" style="width:100%; border-radius:4px;">
                    <small style="display:block; text-align:center; color:#d4f0c7; font-family: 'Comic Sans MS';">Krok ${i}</small>
                </div>`;
        }
        obrazkyContainer.innerHTML = imgHtml;

        detail.style.display = 'block';
        detail.scrollIntoView({ behavior: 'smooth' });
    };

    // --- 5. EVENT LISTENERY PRO HLAVNÍ MENU ---
    btnSifry.onclick = () => {
        secUvod.style.display = 'none'; secUzly.style.display = 'none';
        secSifry.style.display = 'block';
        if(submenu) submenu.style.display = 'none';
        nastavAktivniTlacitko('btn-sifry');
    };
    btnOMne.onclick = () => {
        secSifry.style.display = 'none'; secUzly.style.display = 'none';
        secUvod.style.display = 'block';
        if(submenu) submenu.style.display = 'none';
        nastavAktivniTlacitko('btn-o-mne');
    };
    btnUzly.onclick = () => {
        secUvod.style.display = 'none'; secSifry.style.display = 'none';
        secUzly.style.display = 'block';
        window.generujMenuUzlu();
        /* if(submenu) submenu.style.display = 'block'; */
        nastavAktivniTlacitko('btn-uzly');
    };

    if (cipherType) {
        cipherType.onchange = (e) => handleCipherChange(e.target.value);
        handleCipherChange(cipherType.value);
    }
});