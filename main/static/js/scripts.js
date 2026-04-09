const KATEGORIE_UZLU = {
    'Spojovací': [
        { id: 'ambulak', nazev: 'Ambulák', url: 'https://www.youtube-nocookie.com/embed/zUTuDpYQsvI?si=ctbF-ET3qkjTc4N4' },
        { id: 'auticka', nazev: 'Autíčka', url: 'https://www.youtube-nocookie.com/embed/ltyfdXzHZi8?si=ezOOsv_N3RB4tKEq' },
        { id: 'skotak', nazev: 'Škoťák', url: 'https://www.youtube-nocookie.com/embed/n5P6xnNa5nI?si=o6lbmg5zuNQFmmM3' },
    ],
    'Nahazované': [
        { id: 'drevarak', nazev: 'Dřevařák', url: 'https://www.youtube-nocookie.com/embed/kXSCqdBSdQM?si=xnSGgd_jwu6EXOkn' },
        { id: 'liscak', nazev: 'Liščák', url: 'https://www.youtube-nocookie.com/embed/bdw2_9jnkwc?si=2HWge-0mYYF8zj4X' },
        { id: 'lodak', nazev: 'Lodák', url: 'https://www.youtube-nocookie.com/embed/HEW92nDCrmg?si=IXPPXmO0DkgKAUPh' },
        { id: 'zkracovacka', nazev: 'Zkracovačka', url: 'https://www.youtube-nocookie.com/embed/gdoa6zCbR5A?si=sb8H_6HtUd1qRlXk' },
    ],
    'Estetické': [
        { id: 'dobracek', nazev: 'Dobráček', url: 'https://www.youtube-nocookie.com/embed/eT47TEOTS8A?si=YZ2N0_qQfnUEIGoq' },
        { id: 'dracak', nazev: 'Dračák', url: 'https://www.youtube-nocookie.com/embed/_E0KBUc2GFg?si=L7smB5MGd_tReHke' },
        { id: 'sevcak', nazev: 'Ševčák', url: 'https://www.youtube-nocookie.com/embed/gleZlA655WI?si=Tx170LZfq0l5VGOd' },
    ],
    'Kolem ruky': [
        { id: 'pouta', nazev: 'Pouta', url: 'https://www.youtube-nocookie.com/embed/GHfZHNNelAM?si=5UZQwaCJwNetN4dG' },
    ]
};

const DATA_UZLU = {
    'ambulak': [
        "Zajímavost: Slouží ke spojování dvou stejně silných lan. Je plochý a netlačí, proto se používá i v první pomoci k zavázání trojcípého šátku.",
        "NÁVOD:",
        "1. Jeden konec lana pevně ukotvi.",
        "2. Na laně vytvoř pevnou smyčku (Alpský motýlek).",
        "3. Volný konec obtoč kolem druhého bodu a provlékni ho smyčkou.",
        "4. Silným tahem lano vypni.",
        "5. Zajisti dvěma polovičními lodními smyčkami."
    ],
    'auticka': [
        "Zajímavost: Oficiálně se jmenuje 'Rybářská spojka'. Je to nejlepší uzel na spojování kluzkých silonů nebo mokrých šňůr. Říká se mu autíčka, protože dvě očka do sebe zapadnou jako nárazníky.",
        "NÁVOD:",
        "1. Polož dvě lana konci proti sobě.",
        "2. Na prvním laně uvaž jednoduchý uzel kolem druhého lana.",
        "3. Na druhém laně uvaž jednoduchý uzel kolem prvního lana.",
        "4. Zatáhni za dlouhé konce tak, aby se uzly k sobě sjely.",
        "5. Zkontroluj, zda oba volné konce koukají na opačné strany."
    ],
    'dobracek': [
        "Zajímavost: Dobráček (nebo dobrý uzel) je symbol přátelství. Skauti ho nosí na cípu šátku. Je to uzel, který tě má naučit, že každý den máš vykonat alespoň jeden dobrý skutek.",
        "NÁVOD:",
        "1. Vezmi cíp šátku a udělej na něm jednoduchou smyčku.",
        "2. Druhý cíp provlékni smyčkou, obtoč kolem a znovu provlékni.",
        "3. Uzel musí po dotažení tvořit pravidelný čtverec.",
        "4. Srovnej prameny, aby uzel vypadal úhledně."
    ],
    'dracak': [
        "Zajímavost: Král uzlů. Je to pevná smyčka, která se nikdy sama nestáhne a nezadrhne, ale přitom se lehce rozvazuje. Používá se všude tam, kde potřebuješ oko, kterému můžeš věřit život.",
        "NÁVOD:",
        "1. Udělej na laně malé očko (vypadá jako jezírko).",
        "2. Konec lana (princezna) vyleze z jezírka spodem.",
        "3. Oběhne strom (dlouhé lano) zezadu.",
        "4. Skočí zpátky do jezírka.",
        "5. Pořádně dotáhni."
    ],
    'drevarak': [
        "Zajímavost: Ideální uzel na tahání klád z lesa. Čím víc za lano taháš, tím víc se uzel do dřeva zakusuje. Na hladkém kůlu ale může klouzat, tak bacha!",
        "NÁVOD:",
        "1. Obtoč lano kolem kmene nebo klády.",
        "2. Volný konec obtoč kolem pevné části lana.",
        "3. Poté volný konec omotej alespoň 3x kolem sebe samého uvnitř smyčky.",
        "4. Utáhni tak, aby ovinutí přiléhalo ke dřevu."
    ],
    'liscak': [
        "Zajímavost: Nejjednodušší uzel na světě. Používá se na připevnění provazu ke kroužku nebo když chceš na šňůru pověsit hrneček. Drží jen tehdy, když jsou oba konce stejně zatížené.",
        "NÁVOD:",
        "1. Ohni lano napůl, abys vytvořil očko.",
        "2. Očko přilož ke kůlu nebo břevnu.",
        "3. Oba volné konce protáhni vnitřkem očka přes kůl.",
        "4. Stejnoměrně dotáhni."
    ],
    'lodak': [
        "Zajímavost: Základní uzel pro každého vodáka i stavitele. Drží skvěle na kulatém dřevě. Uvázat ho můžeš buď nahozením, nebo postupným provlékáním.",
        "NÁVOD:",
        "1. Obtoč lano kolem kůlu.",
        "2. Překřiž lano a obtoč ho kolem kůlu podruhé.",
        "3. Konec lana provlékni pod posledním ovinem.",
        "4. Utáhni oba konce směrem od sebe."
    ],
    'pouta': [
        "Zajímavost: Vytvoří dvě pevná oka, která se dají stáhnout. V nouzi se používal na fixaci rukou, ale v oddíle ho využiješ spíš jako efektní uzel na hry nebo fixaci břemen.",
        "NÁVOD:",
        "1. Udělej dvě smyčky vedle sebe (jako brýle).",
        "2. Vnitřní části smyček provlékni navzájem skrz sebe.",
        "3. Zatáhni za vzniklá oka.",
        "4. Uzlem se dá posouvat a měnit velikost ok před dotažením."
    ],
    'sevcak': [
        "Zajímavost: Nejsilnější spojka na dvě lana. Ševčák (nebo rybářský kříž) se používá, když potřebuješ spojit dvě lana tak pevně, aby spoj nepovolil ani pod velkým tahem.",
        "NÁVOD:",
        "1. Překřiž konce dvou lan.",
        "2. Prvním koncem udělej smyčku kolem druhého lana a provlékni.",
        "3. To samé zopakuj na druhé straně.",
        "4. Uzly k sobě pevně dotáhni."
    ],
    'skotak': [
        "Zajímavost: Nejlepší způsob, jak spojit dvě lana, která mají různou tloušťku (třeba tlusté lano a tkaničku). Skoták drží tam, kde se ambulantní uzel rozvazuje.",
        "NÁVOD:",
        "1. Na silnějším laně vytvoř ohyb (podkovu).",
        "2. Slabší lano provlékni ohybem spodem.",
        "3. Obtoč slabší lano kolem celého ohybu.",
        "4. Konec slabšího lana provlékni pod sebou samým.",
        "5. Dotaž."
    ],
    'zkracovacka': [
        "Zajímavost: Kouzelný uzel, který zkrátí lano, aniž bys ho musel řezat. Navíc tím můžeš vyřadit poškozený kus lana – stačí, aby to poškození bylo uprostřed uzlu.",
        "NÁVOD:",
        "1. Vytvoř na laně tři smyčky za sebou (jako vlnovku).",
        "2. Krajní smyčky částečně protáhni prostřední smyčkou.",
        "3. Za tyhle 'uši' lano napni.",
        "4. Uzel drží jen pod stálým tahem, jinak se může rozpadnout!"
    ]
};

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let aktualniSifraZadani = "";
let aktualniSifraSpravne = "";
let aktualniUzelNazev = "";

document.addEventListener('DOMContentLoaded', function () {
    // 1. SELEKTORY
    const cipherType = document.getElementById('cipher-type');
    const shiftBox = document.getElementById('shared-shift-container');
    const dSelect = document.getElementById('dynamic-select');
    const dContainer = document.getElementById('container-select');
    const dLabel = document.getElementById('label-select');
    const dCheck = document.getElementById('container-checkbox');
    const dInp1 = document.getElementById('container-input-1');
    const dInp2 = document.getElementById('container-input-2');
    const dInp3 = document.getElementById('container-input-3');
    const btnSubmitTest = document.getElementById('btn-odeslat-test');

    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const btnUzly = document.getElementById('btn-uzly');
    const btnTest = document.getElementById('btn-test');
    const btnOdeslat = document.getElementById('btn-odeslat-test');
    const btnVysledky = document.getElementById('btn-vysledky');
    const submenu = document.getElementById('uzly-submenu');

    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const secUzly = document.getElementById('section-uzly');
    const secTest = document.getElementById('section-test');
    const secVysledky = document.getElementById('section-vysledky');

    const vsechnySekce = [secUvod, secSifry, secUzly, secTest, secVysledky];

    const djangoData = document.getElementById('django-data');

    // 2. POČÁTEČNÍ STAV
    const showSifry = djangoData && djangoData.getAttribute('data-show-sifry') === 'true';
    const hasMessages = document.querySelector('.alert') !== null;

    if (showSifry || hasMessages) {
        secUvod.style.display = 'none';
        secUzly.style.display = 'none';
        secSifry.style.display = 'block';
    }

    // 3. LOGIKA ŠIFER
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

    function nastavAktivniTlacitko(id) {
        [btnOMne, btnSifry, btnUzly, btnTest, btnVysledky].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        const aktivni = document.getElementById(id);
        if (aktivni) aktivni.classList.add('active');
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

    // 4. LOGIKA UZLŮ
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
                        window.zobrazUzel(uzel.id, uzel.nazev, uzel.url);
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



    window.zobrazUzel = function (folderName, nazev, ytUrl) {
    const detail = document.getElementById('uzel-detail');
    const iframe = document.getElementById('uzel-video-frame');
    const obrazkyContainer = document.getElementById('uzel-obrazky');

    if (!detail || !obrazkyContainer) return;

    document.getElementById('uzel-nazev').innerText = nazev;

    if (iframe) {
        iframe.src = ytUrl;
    }

    let textHtml = '';
    const data = DATA_UZLU[folderName];

    if (data) {
        textHtml += `
            <div class="uzel-zajimavost" style="padding: 15px; margin-bottom: 20px;">
                <p style="font-style: italic; color: #ffffff; margin-bottom: 0;">${data[0]}</p>
            </div>
        `;

        textHtml += `<div class="uzel-navod-text" style="color: white; font-family: Comic Sans MS; line-height: 1.6;">`;
        for (let i = 1; i < data.length; i++) {
            if (data[i] === "NÁVOD:") {
                textHtml += `<h4 style="color: #d4f0c7; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">${data[i]}</h4>`;
            } else {
                textHtml += `<p style="margin-bottom: 8px;">${data[i]}</p>`;
            }
        }
        textHtml += `</div>`;
    } else {
        textHtml = '<p style="color: white;">Návod pro tento uzel připravujeme.</p>';
    }

    obrazkyContainer.innerHTML = textHtml;
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });
    };

    async function generujNahodnyTest() {
        try {
            const response = await fetch('/generuj-zadani/');
            const data = await response.json();
            
            const zadaniElement = document.getElementById('test-sifra-zadani');
            const typElement = document.getElementById('test-sifra-typ');
            const uzelNazevElement = document.getElementById('test-uzel-nazev'); 

            if (zadaniElement) {
                zadaniElement.innerHTML = ""; 
                if (Array.isArray(data.zadani)) {
                    let tabulka = '<table class="test-matrix">';
                    data.zadani.forEach(radek => {
                        tabulka += '<tr>';
                        radek.forEach(pismeno => {
                            tabulka += `<td>${pismeno}</td>`;
                        });
                        tabulka += '</tr>';
                    });
                    tabulka += '</table>';
                    zadaniElement.innerHTML = tabulka;
                } else {
                    zadaniElement.innerText = data.zadani;
                }
            }

            if (typElement) typElement.innerText = data.typ;

            // LOGIKA PRO UZLY
            const kategorie = Object.keys(KATEGORIE_UZLU);
            const nahodnaKat = kategorie[Math.floor(Math.random() * kategorie.length)];
            const uzly = KATEGORIE_UZLU[nahodnaKat];
            const nahodnyUzel = uzly[Math.floor(Math.random() * uzly.length)];

            // ZÁPIS UZLU DO HTML
            if (uzelNazevElement) {
                uzelNazevElement.innerText = nahodnyUzel.nazev;
            }

            // Uložení pro odeslání do DB
            window.aktualniSifraSpravne = data.spravne;
            window.posledniTypSifry = data.typ;
            window.aktualniSifraZadani = Array.isArray(data.zadani) ? JSON.stringify(data.zadani) : data.zadani;
            window.aktualniUzelNazev = nahodnyUzel.nazev;

            document.getElementById('test-sifra-odpoved').value = "";
            document.getElementById('test-uzel-check').checked = false;

        } catch (error) {
            console.error("Chyba:", error);
        }
    }

    async function ulozitVysledekTestu() {
        const odpovedUzivatele = document.getElementById('test-sifra-odpoved').value.trim();
        const sifra_spravne = odpovedUzivatele.toLowerCase() === window.aktualniSifraSpravne.toLowerCase();

        const data = {
            data_sifra_typ: window.posledniTypSifry || "neuvedeno",
            data_sifra_zadani: window.aktualniSifraZadani || "",
            data_sifra_spravne_reseni: window.aktualniSifraSpravne || "",
            data_sifra_odpoved: odpovedUzivatele,
            data_sifra_spravne: sifra_spravne,
            data_uzel_nazev: window.aktualniUzelNazev || "neuvedeno",
            data_uzel_hotovo: document.getElementById('test-uzel-check').checked,
            data_body_celkem: 0,
        };

        try {
            const response = await fetch('/ulozit-test/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            if (result.status === 'success') {
                location.reload();
            } else {
                alert("Chyba: " + result.message);
            }
        } catch (error) {
            console.error("Chyba spojení:", error);
        }
    }

    

    // 5. EVENT LISTENERY
    function prepniSekci(idTlacitka, sekceKeZobrazeni, extraFunkce = null) {
        vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
        if (submenu) submenu.style.display = 'none';

        if (sekceKeZobrazeni) sekceKeZobrazeni.style.display = 'block';

        nastavAktivniTlacitko(idTlacitka);

        if (extraFunkce) extraFunkce();
    }

    btnOMne.onclick    = () => prepniSekci('btn-o-mne', secUvod);
    btnSifry.onclick   = () => prepniSekci('btn-sifry', secSifry);
    btnUzly.onclick    = () => prepniSekci('btn-uzly', secUzly, window.generujMenuUzlu);

    if (btnTest) {
        btnTest.onclick = () => prepniSekci('btn-test', secTest, generujNahodnyTest);
    }

    if (btnVysledky) {
        btnVysledky.onclick = () => prepniSekci('btn-vysledky', secVysledky);
    }

    if (btnOdeslat) {
        btnOdeslat.onclick = ulozitVysledekTestu;
    }

    if (cipherType) {
        cipherType.onchange = (e) => handleCipherChange(e.target.value);
        handleCipherChange(cipherType.value);
    }
});