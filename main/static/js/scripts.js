// Příklad: Funkce pro vymazání polí (můžeš ji přidat k tlačítku)
function clearFields() {
    document.querySelectorAll('textarea').forEach(el => el.value = '');
}

document.addEventListener("DOMContentLoaded", function() {
    // 1. Najdeme uloženou záložku v localStorage
    const activeTab = localStorage.getItem('activeTab');
    
    if (activeTab) {
        // 2. Pokud existuje, najdeme tlačítko podle ID a aktivujeme ho
        const tabButton = document.getElementById(activeTab);
        if (tabButton) {
            const tab = new bootstrap.Tab(tabButton);
            tab.show();
        }
    }

    // 3. Sledujeme kliknutí na záložky a ukládáme jejich ID
    const tabLinks = document.querySelectorAll('button[data-bs-toggle="pill"]');
    tabLinks.forEach(button => {
        button.addEventListener('shown.bs.tab', function (event) {
            localStorage.setItem('activeTab', event.target.id);
        });
    });
});