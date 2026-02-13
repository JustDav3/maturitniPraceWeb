document.addEventListener('DOMContentLoaded', function () {
    // Načtení všech prvků z DOMu
    const cipherType = document.getElementById('cipher-type');
    const shiftBox = document.getElementById('shared-shift-container');
    const dSelect = document.getElementById('container-select');
    const dCheck = document.getElementById('container-checkbox');
    const dInp1 = document.getElementById('container-input-1');
    const dInp2 = document.getElementById('container-input-2');
    const dInp3 = document.getElementById('container-input-3');

    function handleCipherChange(val) {
        // Reset: Nejdřív všechno schováme a vypneme, aby se neposílala zbytečná data
        [shiftBox, dSelect, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.querySelectorAll('select, input').forEach(i => i.disabled = true);
            }
        });

        // --- Logika pro jednotlivé šifry ---
        if (val === 'morse') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Režim šifrování:';
            document.getElementById('dynamic-select').innerHTML = '<option value="1">Klasická (.-)</option><option value="2">Obrácená (-.)</option>';
            
            // Pro morseovku používáme všechna tři textová pole
            dInp1.style.display = 'block'; document.getElementById('label-input-1').innerText = 'Tečka:';
            dInp2.style.display = 'block'; document.getElementById('label-input-2').innerText = 'Čárka:';
            dInp3.style.display = 'block'; document.getElementById('label-input-3').innerText = 'Oddělovač:';
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
            document.getElementById('dynamic-select').innerHTML = `
                <option value="1">Vlevo nahoře</option>
                <option value="2">Vpravo nahoře</option>
                <option value="3">Vlevo dole</option>
                <option value="4">Vpravo dole</option>`;
        }
        else if (val === 'snek') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Startovní střed:';
            document.getElementById('dynamic-select').innerHTML = `
                <option value="1">Střed - vlevo dole</option>
                <option value="2">Střed - vlevo nahoře</option>
                <option value="3">Střed - vpravo nahoře</option>
                <option value="4">Střed - vpravo dole</option>`;
        }
        else if (val === 'had') {
            dSelect.style.display = 'block';
            document.getElementById('label-select').innerText = 'Směr pohybu hada:';
            document.getElementById('dynamic-select').innerHTML = `
                <option value="shora">Shora dolů (sloupce)</option>
                <option value="zleva">Zleva doprava (řádky)</option>`;
        }

        // Aktivujeme jen ty prvky, které jsme právě ukázali
        [shiftBox, dSelect, dCheck, dInp1, dInp2, dInp3].forEach(el => {
            if (el && el.style.display !== 'none') {
                el.querySelectorAll('select, input').forEach(i => i.disabled = false);
            }
        });
    }

    // Inicializace při načtení stránky
    if (cipherType) {
        cipherType.addEventListener('change', (e) => handleCipherChange(e.target.value));
        handleCipherChange(cipherType.value);
    }
});