/**
 * scripts.js - Webová Aplikace pro TK Rozrazil
 * Struktura: Konstanty -> Pomocné funkce -> Handlery -> Event Listenery
 */

document.addEventListener('DOMContentLoaded', function () {

    // 1. KONSTANTY (Výběr všech potřebných elementů)
    const btnSifry = document.getElementById('btn-sifry');
    const btnOMne = document.getElementById('btn-o-mne');
    const secUvod = document.getElementById('section-uvod');
    const secSifry = document.getElementById('section-sifry');

    const cipherType = document.getElementById('cipher-type');
    const matrixType = document.getElementById('matrix-type');
    const startLabel = document.getElementById('start-label');
    const startSelect = document.getElementById('start-point-select');
    const djangoData = document.getElementById('django-data');

    // 2. POMOCNÉ FUNKCE (Znovupoužitelná logika)

    // Funkce pro přepínání hlavních sekcí webu
    function switchSection(toShow) {
        if (!secUvod || !secSifry) return;

        secUvod.style.display = 'none';
        secSifry.style.display = 'none';
        // Zde v budoucnu přidáš další sekce: secUzly.style.display = 'none';

        if (toShow) toShow.style.display = 'block';
    }

    // Aktualizace HTML pro výběr startovního bodu u maticových šifer
    function updateMatrixOptions(type) {
        if (!startLabel || !startSelect) return;

        if (type === 'had') {
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
    }

    // 3. HANDLERY (Obsluha konkrétních změn v UI)

    // Sjednocená funkce pro zobrazení pod-možností šifer
    function handleCipherChange(val) {
        const optMorse = document.getElementById('options-morse');
        const optMatrix = document.getElementById('options-matrix');
        const optNumber = document.getElementById('options-number');

        if (optMorse) optMorse.style.display = (val === 'morse') ? 'block' : 'none';
        if (optMatrix) optMatrix.style.display = (val === 'matrix') ? 'block' : 'none';
        if (optNumber) optNumber.style.display = (val === 'number_code') ? 'block' : 'none';
    }

    // Tuto logiku přidejte do vašeho handleru pro změnu typu matice
    function updateMatrixOptions(type) {
        const startPointWrapper = document.getElementById('wrapper-start-point');
        const snakeDirectionWrapper = document.getElementById('wrapper-snake-direction');

        if (type === 'had') {
            // Schováme startovní bod, ukážeme směr hada
            if (startPointWrapper) startPointWrapper.style.display = 'none';
            if (snakeDirectionWrapper) snakeDirectionWrapper.style.display = 'block';
        } else {
            // Pro spirálu a šneka naopak
            if (startPointWrapper) startPointWrapper.style.display = 'block';
            if (snakeDirectionWrapper) snakeDirectionWrapper.style.display = 'none';
        }
    }

    // 4. EVENT LISTENERY (Reakce na akce uživatele)

    // Kliknutí v hlavním menu
    if (btnSifry) btnSifry.addEventListener('click', () => switchSection(secSifry));
    if (btnOMne) btnOMne.addEventListener('click', () => switchSection(secUvod));

    // Změna typu šifry v selectu
    if (cipherType) {
        cipherType.addEventListener('change', function () {
            handleCipherChange(this.value);
        });
    }

    // Změna typu matice (např. přepnutí na Hada)
    if (matrixType) {
        matrixType.addEventListener('change', function () {
            updateMatrixOptions(this.value);
        });
    }

    // 5. INICIALIZACE (Nastavení stavu po načtení stránky)

    if (djangoData) {
        const shouldShow = djangoData.getAttribute('data-show-sifry') === 'true';
        if (shouldShow) {
            switchSection(secSifry);
            // Synchronizace UI s aktuální vybranou šifrou
            if (cipherType) handleCipherChange(cipherType.value);
        }
    }
});