document.addEventListener('DOMContentLoaded', function () {
    const cipherType = document.getElementById('cipher-type');
    const shiftBox = document.getElementById('shared-shift-container');
    const dSelect = document.getElementById('container-select');
    const dCheck = document.getElementById('container-checkbox');
    const dInp1 = document.getElementById('container-input-1');
    const dInp2 = document.getElementById('container-input-2');
    const dInp3 = document.getElementById('container-input-3');
    
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');
    const djangoData = document.getElementById('django-data');

    function handleCipherChange(val) {
        // Reset: Vše schováme a vypneme inputy
        [shiftBox, dSelect, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        if (val === 'morse') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Režim šifrování:';
            document.getElementById('dynamic-select').innerHTML = '<option value="1">Klasická (.-)</option><option value="2">Obrácená (-.)</option>';
            dInp1.style.display = 'block'; document.getElementById('label-input-1').innerText = 'Tečka:';
            dInp2.style.display = 'block'; document.getElementById('label-input-2').innerText = 'Čárka:';
            dInp3.style.display = 'block'; document.getElementById('label-input-3').innerText = 'Oddělovač:';
            // Nastavení výchozích hodnot, pokud jsou prázdné
            if(!document.getElementById('dynamic-input-1').value) document.getElementById('dynamic-input-1').value = '.';
            if(!document.getElementById('dynamic-input-2').value) document.getElementById('dynamic-input-2').value = '-';
            if(!document.getElementById('dynamic-input-3').value) document.getElementById('dynamic-input-3').value = '|';
        } 
        else if (val === 'number_code') {
            shiftBox.style.display = 'block';
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Typ abecedy:';
            document.getElementById('dynamic-select').innerHTML = '<option value="1">Anglická (26)</option><option value="2">Česká (42)</option>';
            dCheck.style.display = 'block';
            document.getElementById('label-checkbox').innerText = 'Obrátit pořadí (A=26, Z=1)';
        } 
        else if (val === 'binary') {
            shiftBox.style.display = 'block';
            dInp3.style.display = 'block';
            document.getElementById('label-input-3').innerText = 'Oddělovač bitů:';
            dCheck.style.display = 'block';
            document.getElementById('label-checkbox').innerText = 'Inverzní bity (0↔1)';
        }
        else if (val === 'spirala') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Startovní bod (roh):';
            document.getElementById('dynamic-select').innerHTML = '<option value="1">Vlevo nahoře</option><option value="2">Vpravo nahoře</option><option value="3">Vlevo dole</option><option value="4">Vpravo dole</option>';
        }
        else if (val === 'snek') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Startovní střed:';
            document.getElementById('dynamic-select').innerHTML = '<option value="1">Vlevo dole</option><option value="2">Vlevo nahoře</option><option value="3">Vpravo nahoře</option><option value="4">Vpravo dole</option>';
        }
        else if (val === 'had') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Směr pohybu hada:';
            document.getElementById('dynamic-select').innerHTML = '<option value="shora">Shora dolů</option><option value="zleva">Zleva doprava</option>';
        }

        // Aktivujeme jen zobrazené prvky
        [shiftBox, dSelect, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    // Event listenery pro menu
    btnSifry.onclick = () => { secUvod.style.display = 'none'; secSifry.style.display = 'block'; };
    btnOMne.onclick = () => { secSifry.style.display = 'none'; secUvod.style.display = 'block'; };

    if (djangoData && djangoData.getAttribute('data-show-sifry') === 'true') {
        secUvod.style.display = 'none'; secSifry.style.display = 'block';
    }

    cipherType.onchange = (e) => handleCipherChange(e.target.value);
    handleCipherChange(cipherType.value);
});