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
    const btnuzly = document.getElementById('btn-uzly');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const djangoData = document.getElementById('django-data');

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

        // 2. Načtení uložených dat z data- atributů (aby se pamatovalo nastavení)
        const savedStartBod = dSelect.getAttribute('data-start-bod');
        const savedSmerHad = dSelect.getAttribute('data-smer-had');
        const savedMode = dSelect.getAttribute('data-mode');

        // 3. Logika pro jednotlivé šifry
        if (val === 'morse') {
            setupSelect('Režim šifrování:', [
                {val: '1', text: 'Klasická (.-)'},
                {val: '2', text: 'Obrácená (-.)'}
            ], savedMode);
            dInp1.style.display = 'block'; dInp2.style.display = 'block'; dInp3.style.display = 'block';
            document.getElementById('label-input-1').innerText = 'Tečka:';
            document.getElementById('label-input-2').innerText = 'Čárka:';
            document.getElementById('label-input-3').innerText = 'Oddělovač:';
        } 
        else if (val === 'number_code') {
            shiftBox.style.display = 'block';
            setupSelect('Typ abecedy:', [
                {val: '1', text: 'Anglická (26)'},
                {val: '2', text: 'Česká (42)'}
            ], savedMode); // nebo jiné savedValue podle tvého views.py
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
        else if (val === 'spirala') {
            setupSelect('Startovní bod (roh):', [
                {val: '1', text: 'Vlevo nahoře'}, {val: '2', text: 'Vpravo nahoře'},
                {val: '3', text: 'Vlevo dole'}, {val: '4', text: 'Vpravo dole'}
            ], savedStartBod);
        }
        else if (val === 'snek') {
            setupSelect('Startovní střed:', [
                {val: '1', text: 'Vlevo dole'}, {val: '2', text: 'Vlevo nahoře'},
                {val: '3', text: 'Vpravo nahoře'}, {val: '4', text: 'Vpravo dole'}
            ], savedStartBod);
        }
        else if (val === 'had') {
            setupSelect('Směr pohybu hada:', [
                {val: 'shora', text: 'Shora dolů'},
                {val: 'zleva', text: 'Zleva doprava'}
            ], savedSmerHad);
        }

        // 4. Aktivace zobrazených inputů (kromě dSelect, který řeší setupSelect)
        [shiftBox, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    // Event listenery pro menu
    btnSifry.onclick = () => { secUvod.style.display = 'none'; secSifry.style.display = 'block'; };
    btnOMne.onclick = () => { secSifry.style.display = 'none'; secUvod.style.display = 'block'; };

    // Automatické otevření sekce šifry po odeslání z Django
    if (djangoData && djangoData.getAttribute('data-show-sifry') === 'true') {
        secUvod.style.display = 'none'; secSifry.style.display = 'block';
    }

    cipherType.onchange = (e) => handleCipherChange(e.target.value);
    
    // Prvotní spuštění při načtení
    handleCipherChange(cipherType.value);
});