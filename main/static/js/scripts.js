/*
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
 */
const DATABAZE_UZLU = {
    'ambulak': {
        id: 'ambulak',
        nazev: 'Ambulák',
        url: 'https://www.youtube-nocookie.com/embed/zUTuDpYQsvI?si=ctbF-ET3qkjTc4N4',
        kategorie: 'Spojovací',
        zajimavost: "Zajímavost: Slouží ke spojování dvou stejně silných lan. Je plochý a netlačí, proto se používá i v první pomoci k zavázání trojcípého šátku.",
        navod: [
            "NÁVOD:",
            "1. Jeden konec lana pevně ukotvi.",
            "2. Na laně vytvoř pevnou smyčku (Alpský motýlek).",
            "3. Volný konec obtoč kolem druhého bodu a provlékni ho smyčkou.",
            "4. Silným tahem lano vypni.",
            "5. Zajisti dvěma polovičními lodními smyčkami."
        ]
    },
    'auticka': {
        id: 'auticka',
        nazev: 'Autíčka',
        url: 'https://www.youtube-nocookie.com/embed/ltyfdXzHZi8?si=ezOOsv_N3RB4tKEq',
        kategorie: 'Spojovací',
        zajimavost: "Zajímavost: Oficiálně se jmenuje 'Rybářská spojka'. Je to nejlepší uzel na spojování kluzkých silonů nebo mokrých šňůr. Říká se mu autíčka, protože dvě očka do sebe zapadnou jako nárazníky.",
        navod: [
            "NÁVOD:",
            "1. Polož dvě lana konci proti sobě.",
            "2. Na prvním laně uvaž jednoduchý uzel kolem druhého lana.",
            "3. Na druhém laně uvaž jednoduchý uzel kolem prvního lana.",
            "4. Zatáhni za dlouhé konce tak, aby se uzly k sobě sjely.",
            "5. Zkontroluj, zda oba volné konce koukají na opačné strany."
        ]
    },
    'skotak': {
        id: 'skotak',
        nazev: 'Škoťák',
        url: 'https://www.youtube-nocookie.com/embed/n5P6xnNa5nI?si=o6lbmg5zuNQFmmM3',
        kategorie: 'Spojovací',
        zajimavost: "Zajímavost: Nejlepší způsob, jak spojit dvě lana, která mají různou tloušťku (třeba tlusté lano a tkaničku). Skoták drží tam, kde se ambulantní uzel rozvazuje.",
        navod: [
            "NÁVOD:",
            "1. Na silnějším laně vytvoř ohyb (podkovu).",
            "2. Slabší lano provlékni ohybem spodem.",
            "3. Obtoč slabší lano kolem celého ohybu.",
            "4. Konec slabšího lana provlékni pod sebou samým.",
            "5. Dotaž."
        ]
    },
    'drevarak': {
        id: 'drevarak',
        nazev: 'Dřevařák',
        url: 'https://www.youtube-nocookie.com/embed/kXSCqdBSdQM?si=xnSGgd_jwu6EXOkn',
        kategorie: 'Nahazované',
        zajimavost: "Zajímavost: Ideální uzel na tahání klád z lesa. Čím víc za lano taháš, tím víc se uzel do dřeva zakusuje. Na hladkém kůlu ale může klouzat, tak bacha!",
        navod: [
            "NÁVOD:",
            "1. Obtoč lano kolem kmene nebo klády.",
            "2. Volný konec obtoč kolem pevné části lana.",
            "3. Poté volný konec omotej alespoň 3x kolem sebe samého uvnitř smyčky.",
            "4. Utáhni tak, aby ovinutí přiléhalo ke dřevu."
        ]
    },
    'liscak': {
        id: 'liscak',
        nazev: 'Liščák',
        url: 'https://www.youtube-nocookie.com/embed/bdw2_9jnkwc?si=2HWge-0mYYF8zj4X',
        kategorie: 'Nahazované',
        zajimavost: "Zajímavost: Nejjednodušší uzel na světě. Používá se na připevnění provazu ke kroužku nebo když chceš na šňůru pověsit hrneček. Drží jen tehdy, když jsou oba konce stejně zatížené.",
        navod: [
            "NÁVOD:",
            "1. Ohni lano napůl, abys vytvořil očko.",
            "2. Očko přilož ke kůlu nebo břevnu.",
            "3. Oba volné konce protáhni vnitřkem očka přes kůl.",
            "4. Stejnoměrně dotáhni."
        ]
    },
    'lodak': {
        id: 'lodak',
        nazev: 'Lodák',
        url: 'https://www.youtube-nocookie.com/embed/HEW92nDCrmg?si=IXPPXmO0DkgKAUPh',
        kategorie: 'Nahazované',
        zajimavost: "Zajímavost: Základní uzel pro každého vodáka i stavitele. Drží skvěle na kulatém dřevě. Uvázat ho můžeš buď nahozením, nebo postupným provlékáním.",
        navod: [
            "NÁVOD:",
            "1. Obtoč lano kolem kůlu.",
            "2. Překřiž lano a obtoč ho kolem kůlu podruhé.",
            "3. Konec lana provlékni pod posledním ovinem.",
            "4. Utáhni oba konce směrem od sebe."
        ]
    },
    'zkracovacka': {
        id: 'zkracovacka',
        nazev: 'Zkracovačka',
        url: 'https://www.youtube-nocookie.com/embed/gdoa6zCbR5A?si=sb8H_6HtUd1qRlXk',
        kategorie: 'Nahazované',
        zajimavost: "Zajímavost: Kouzelný uzel, který zkrátí lano, aniž bys ho musel řezat. Navíc tím můžeš vyřadit poškozený kus lana – stačí, aby to poškození bylo uprostřed uzlu.",
        navod: [
            "NÁVOD:",
            "1. Vytvoř na laně tři smyčky za sebou (jako vlnovku).",
            "2. Krajní smyčky částečně protáhni prostřední smyčkou.",
            "3. Za tyhle 'uši' lano napni.",
            "4. Uzel drží jen pod stálým tahem, jinak se může rozpadnout!"
        ]
    },
    'dobracek': {
        id: 'dobracek',
        nazev: 'Dobráček',
        url: 'https://www.youtube-nocookie.com/embed/eT47TEOTS8A?si=YZ2N0_qQfnUEIGoq',
        kategorie: 'Estetické',
        zajimavost: "Zajímavost: Dobráček (nebo dobrý uzel) je symbol přátelství. Skauti ho nosí na cípu šátku. Je to uzel, který tě má naučit, že každý den máš vykonat alespoň jeden dobrý skutek.",
        navod: [
            "NÁVOD:",
            "1. Vezmi cíp šátku a udělej na něm jednoduchou smyčku.",
            "2. Druhý cíp provlékni smyčkou, obtoč kolem a znovu provlékni.",
            "3. Uzel musí po dotažení tvořit pravidelný čtverec.",
            "4. Srovnej prameny, aby uzel vypadal úhledně."
        ]
    },
    'dracak': {
        id: 'dracak',
        nazev: 'Dračák',
        url: 'https://www.youtube-nocookie.com/embed/_E0KBUc2GFg?si=L7smB5MGd_tReHke',
        kategorie: 'Estetické',
        zajimavost: "Zajímavost: Král uzlů. Je to pevná smyčka, která se nikdy sama nestáhne a nezadrhne, ale přitom se lehce rozvazuje. Používá se všude tam, kde potřebuješ oko, kterému můžeš věřit život.",
        navod: [
            "NÁVOD:",
            "1. Udělej na laně malé očko (vypadá jako jezírko).",
            "2. Konec lana (princezna) vyleze z jezírka spodem.",
            "3. Oběhne strom (dlouhé lano) zezadu.",
            "4. Skočí zpátky do jezírka.",
            "5. Pořádně dotáhni."
        ]
    },
    'sevcak': {
        id: 'sevcak',
        nazev: 'Ševčák',
        url: 'https://www.youtube-nocookie.com/embed/gleZlA655WI?si=Tx170LZfq0l5VGOd',
        kategorie: 'Estetické',
        zajimavost: "Zajímavost: Nejsilnější spojka na dvě lana. Ševčák (nebo rybářský kříž) se používá, když potřebuješ spojit dvě lana tak pevně, aby spoj nepovolil ani pod velkým tahem.",
        navod: [
            "NÁVOD:",
            "1. Překřiž konce dvou lan.",
            "2. Prvním koncem udělej smyčku kolem druhého lana a provlékni.",
            "3. To samé zopakuj na druhé straně.",
            "4. Uzly k sobě pevně dotáhni."
        ]
    },
    'pouta': {
        id: 'pouta',
        nazev: 'Pouta',
        url: 'https://www.youtube-nocookie.com/embed/GHfZHNNelAM?si=5UZQwaCJwNetN4dG',
        kategorie: 'Kolem ruky',
        zajimavost: "Zajímavost: Vytvoří dvě pevná oka, která se dají stáhnout. V nouzi se používal na fixaci rukou, ale v oddíle ho využiješ spíš jako efektní uzel na hry nebo fixaci břemen.",
        navod: [
            "NÁVOD:",
            "1. Udělej dvě smyčky vedle sebe (jako brýle).",
            "2. Vnitřní části smyček provlékni navzájem skrz sebe.",
            "3. Zatáhni za vzniklá oka.",
            "4. Uzlem se dá posouvat a měnit velikost ok před dotažením."
        ]
    }
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
    const btnNastaveniTestu = document.getElementById('btn-nastaveni-testu');

    const submenu = document.getElementById('uzly-submenu');

    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const secUzly = document.getElementById('section-uzly');
    const secTest = document.getElementById('section-test');
    const secVysledky = document.getElementById('section-vysledky');
    const secNastaveniTestu = document.getElementById('section-nastaveni-testu');

    const userFilter = document.getElementById('filter-uzivatel');

    const vsechnySekce = [secUvod, secSifry, secUzly, secTest, secVysledky, secNastaveniTestu];
    const vsechnaTlacitka = [btnOMne, btnSifry, btnUzly, btnTest, btnVysledky, btnNastaveniTestu];

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
        vsechnaTlacitka.forEach(btn => {
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
        const container = document.getElementById('uzly-menu');
        if (!container) return;

        container.innerHTML = '';

        const kategorie = {
            'Spojovací': [],
            'Nahazované': [],
            'Estetické': [],
            'Kolem ruky': []
        };

        // Roztřídíme uzly z nové DATABAZE_UZLU do kategorií
        for (const id in DATABAZE_UZLU) {
            const uzel = DATABAZE_UZLU[id];
            if (kategorie[uzel.kategorie]) {
                kategorie[uzel.kategorie].push(uzel);
            }
        }

        // Vykreslíme kategorie a jejich tlačítka
        for (const nazevKat in kategorie) {
            if (kategorie[nazevKat].length > 0) {
                const katDiv = document.createElement('div');
                katDiv.className = 'kategorie-sekce';
                katDiv.innerHTML = `<h4 style="color: #d4f0c7; margin-top: 15px; margin-bottom: 5px; border-bottom: 1px solid rgba(255,255,255,0.1);">${nazevKat}</h4>`;
                
                kategorie[nazevKat].forEach(uzel => {
                    const btn = document.createElement('button');
                    btn.innerText = uzel.nazev;
                    btn.className = 'uzel-menu-btn';
                    btn.style.display = 'block';
                    btn.style.width = '100%';
                    btn.style.textAlign = 'left';
                    btn.style.marginBottom = '3px';


                    btn.onclick = () => {
                        window.location.href = `/uzly/${uzel.id}/`;
                    };

                    katDiv.appendChild(btn);
                });
                
                container.appendChild(katDiv);
            }
        }
        /*
        const submenu = document.getElementById('uzly-submenu');
        if (!submenu) return;

        if (submenu.innerHTML.trim() === "") {
            for (const [nazevKat, uzly] of Object.entries(DATABAZE_UZLU).reduce((acc, [key, value]) => {
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
        */
    };



    window.zobrazUzel = function (uzel) {
        // 1. Vytáhneme data z nové sjednocené konstanty
        const uzel = DATABAZE_UZLU[uzelId];
        
        // Pokud uzel neexistuje, raději nic neděláme
        if (!uzel) {
            console.error("Uzel nenalezen v databázi:", uzelId);
            return;
        }

        // 2. Najdeme HTML elementy, do kterých budeme zapisovat
        const detail = document.getElementById('uzel-detail');
        const iframe = document.getElementById('uzel-video-frame');
        const obrazkyContainer = document.getElementById('uzel-obrazky');
        const nazevEl = document.getElementById('uzel-nazev');

        // 3. Nastavení videa a hlavního nadpisu
        if (nazevEl) {
            nazevEl.innerText = uzel.nazev;
            nazevEl.style.display = 'block';
        }
        
        if (iframe) {
            // Použije URL přímo z objektu uzlu
            iframe.src = uzel.url;
        }

        // 4. Sestavení HTML pro návod a zajímavost
        let htmlContent = `
            <div class="uzel-zajimavost" style="padding: 15px; margin-bottom: 20px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                <p style="font-style: italic; color: #ffffff; margin: 0;">${uzel.zajimavost}</p>
            </div>
            <div class="uzel-navod-text" style="color: white; font-family: 'Comic Sans MS', cursive; line-height: 1.6;">
        `;

        // Projdeme pole navod a vykreslíme řádky
        uzel.navod.forEach(radek => {
            if (radek === "NÁVOD:") {
                htmlContent += `<h4 style="color: #d4f0c7; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">${radek}</h4>`;
            } else {
                htmlContent += `<p style="margin-bottom: 8px;">${radek}</p>`;
            }
        });

        htmlContent += `</div>`;

        // 5. Vložení vygenerovaného obsahu do stránky
        if (obrazkyContainer) {
            obrazkyContainer.innerHTML = htmlContent;
        }

        // 6. Zobrazení sekce a plynulé odscrollování k detailu
        if (detail) {
            detail.style.display = 'block';
            detail.scrollIntoView({ behavior: 'smooth' });
        }

        // 7. Aktualizace URL bez reloadu (aby uživatel mohl kopírovat odkaz)
        const novaUrl = `/uzly/${uzel.id}/`;
        if (window.location.pathname !== novaUrl) {
            history.pushState({ uzelId: uzel.id }, '', novaUrl);
        }
        
        console.log("Vykreslen detail uzlu:", uzel.nazev);
    };

    // DYNAMICKÉ FILTROVÁNÍ UŽIVATELŮ
    if (userFilter) {
        userFilter.addEventListener('change', function () {
            const selectedUser = this.value;
            const table = document.getElementsByClassName('vysledky-tabulka')[0];
            if (!table) {
                console.error("Tabulka s ID 'vysledky-tabulka' nebyla nalezena!");
                return;
            }

            const rows = table.querySelectorAll('tbody tr');

            rows.forEach((row, index) => {
                const usernameCell = row.cells[1];
                if (usernameCell) {
                    const rowUsername = usernameCell.textContent.trim();
                    if (selectedUser === 'all' || rowUsername === selectedUser) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                } else {
                    console.error("Buňka s uživatelským jménem nebyla nalezena v řádku " + (index + 1));
                }
            });
        });
    }

    async function generujNahodnyTest() {
        try {
            const response = await fetch('/generuj-zadani/');
            const data = await response.json();

            const zadaniText = document.getElementById('test-sifra-zadani-text');
            const zadaniTabulka = document.getElementById('test-sifra-zadani-tabulka');
            const sifraTyp = document.getElementById('test-sifra-typ');
            const uzelNazevElement = document.getElementById('test-uzel-nazev');

            if (data.zadani) {
                zadaniText.innerText = "";
                while (zadaniTabulka.rows.length > 0) {
                    zadaniTabulka.deleteRow(0);
                }

                zadaniText.style.display = 'none';
                zadaniTabulka.style.display = 'none';

                if (data.zadani.includes(';')) {
                    const radky = data.zadani.split(';');
                    let htmlObsah = '';

                    radky.forEach(radek => {
                        if (radek.trim().length > 0) {
                            htmlObsah += '<tr>';
                            const znaky = radek.split('');
                            znaky.forEach(znak => {
                                const obsah = (znak === ' _') ? '&nbsp;' : znak;
                                htmlObsah += `<td>${obsah}</td>`;
                            });
                            htmlObsah += '</tr>';
                        }
                    });

                    zadaniTabulka.innerHTML = htmlObsah;
                    zadaniTabulka.style.display = 'table';
                }
                else {
                    zadaniText.innerText = data.zadani;
                    zadaniText.style.display = 'block';
                }

                if (sifraTyp) sifraTyp.innerText = data.typ;

                const kategorie = Object.keys(KATEGORIE_UZLU);
                const nahodnaKat = kategorie[Math.floor(Math.random() * kategorie.length)];
                const uzly = KATEGORIE_UZLU[nahodnaKat];
                const nahodnyUzel = uzly[Math.floor(Math.random() * uzly.length)];

                if (uzelNazevElement) {
                    uzelNazevElement.innerText = "Uvaž tento uzel: " + nahodnyUzel.nazev;
                }

                window.aktualniSifraSpravne = data.spravne;
                window.posledniTypSifry = data.typ;
                window.aktualniSifraZadani = Array.isArray(data.zadani) ? JSON.stringify(data.zadani) : data.zadani;
                window.aktualniUzelNazev = nahodnyUzel.nazev;

                document.getElementById('test-sifra-odpoved').value = "";
                document.getElementById('test-uzel-check').checked = false;

            }
        }
        catch (error) {
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

        if (sekceKeZobrazeni) {
            sekceKeZobrazeni.style.display = 'block';
        }

        nastavAktivniTlacitko(idTlacitka);
        if (extraFunkce) extraFunkce();
    }

    function zobrazCil(data) {
        if (!data) return;
        vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
        if (submenu) submenu.style.display = 'none';
        
        data.s.style.display = 'block';
        nastavAktivniTlacitko(data.b);
        if (data.f) data.f();
    }
    
    if (cipherType) {
        cipherType.onchange = (e) => handleCipherChange(e.target.value);
        handleCipherChange(cipherType.value);
    }


    // 2. Samotná logika po načtení stránky
    window.addEventListener('load', () => {
        // 1. Rozsekáme cestu v URL (např. /uzly/ambulak/ -> ["uzly", "ambulak"])
        const path = window.location.pathname.split('/').filter(p => p !== '');
        
        // Mapa pro základní sekce (když cesta obsahuje jen jedno slovo)
        const sekceMapa = {
            'uvod': { s: secUvod, b: 'btn-o-mne' },
            'sifry': { s: secSifry, b: 'btn-sifry' },
            'uzly': { s: secUzly, b: 'btn-uzly', f: window.generujMenuUzlu },
            'vysledky': { s: secVysledky, b: 'btn-vysledky' },
            'nastaveni-testu': { s: secNastaveniTestu, b: 'btn-nastaveni-testu' }
        };

        // --- LOGIKA PRO UZLY (/uzly/id-uzlu) ---
        if (path[0] === 'uzly') {
            // Vždy zobrazíme sekci uzly a aktivujeme tlačítko v horním menu
            vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
            secUzly.style.display = 'block';
            nastavAktivniTlacitko('btn-uzly');

            // Vygenerujeme boční menu uzlů z nové konstanty
            if (window.generujMenuUzlu) window.generujMenuUzlu();

            // Pokud je v URL i ID konkrétního uzlu (např. path[1] je "ambulak")
            if (path[1]) {
                const uzelId = path[1];
                
                // Ověříme, zda uzel v naší nové konstantě existuje
                if (DATABAZE_UZLU[uzelId]) {
                    console.log("Načítám uzel z konstanty:", uzelId);
                    window.zobrazUzel(uzelId);
                } else {
                    console.warn("Uzel s tímto ID neexistuje v DATABAZE_UZLU:", uzelId);
                }
            }
        } 
        
        // --- LOGIKA PRO OSTATNÍ SEKCE (/sifry, /vysledky atd.) ---
        else if (path.length === 1) {
            const cil = path[0];
            if (sekceMapa[cil]) {
                const data = sekceMapa[cil];
                vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
                data.s.style.display = 'block';
                nastavAktivniTlacitko(data.b);
                if (data.f) data.f();
            }
        } 
        
        // --- DEFAULT (Úvodní stránka) ---
        else {
            vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
            secUvod.style.display = 'block';
            nastavAktivniTlacitko('btn-o-mne');
        }
        /*
        const path = window.location.pathname.split('/').filter(p => p !== '');
        const mapa = {
            'uvod': { s: secUvod, b: 'btn-o-mne' },
            'sifry': { s: secSifry, b: 'btn-sifry' },
            'uzly': { s: secUzly, b: 'btn-uzly', f: window.generujMenuUzlu },
            'test': { s: secTest, b: 'btn-test', f: typeof generujNahodnyTest !== 'undefined' ? generujNahodnyTest : null },
            'vysledky': { s: secVysledky, b: 'btn-vysledky' },
            'nastaveni-testu': { s: secNastaveniTestu, b: 'btn-nastaveni-testu' }
        };
        console.log("Detekovaná cesta:", path);

        // PŘÍPAD 1: /uzly/ambulak
        if (path[0] === 'uzly' && path[1]) {
            const hledaneId = path[1];
            
            // Zobrazíme sekci uzlů a menu
            vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
            secUzly.style.display = 'block';
            nastavAktivniTlacitko('btn-uzly');
            if (window.generujMenuUzlu) window.generujMenuUzlu();

            // Najdeme uzel v datech
            let uzelData = null;
            for (const kat in KATEGORIE_UZLU) {
                uzelData = KATEGORIE_UZLU[kat].find(u => u.id === hledaneId);
                if (uzelData) break;
            }

            if (uzelData) {
                console.log("Našel jsem uzel:", uzelData.nazev);
                window.zobrazUzel(uzelData);
            }
        } 
        // PŘÍPAD 2: Klasická sekce jako /sifry
        else if (path.length === 1 && mapa[path[0]]) {
            const data = mapa[path[0]];
            vsechnySekce.forEach(s => { if (s) s.style.display = 'none'; });
            data.s.style.display = 'block';
            nastavAktivniTlacitko(data.b);
            if (data.f) data.f();
        }
    });
    */
});