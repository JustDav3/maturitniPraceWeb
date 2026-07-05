# Webová Aplikace Uzly a Šifry pro TK Rozrazil

Tento repozitář obsahuje maturitní práci, jejímž cílem je digitalizace vzdělávacích materiálů a zjednodušení výuky skautských dovedností (uzlování a šifer) pro turistický oddíl **TK Rozrazil**.

Aplikace byla původně navržena jako komplexní informační systém s databázovým pozadím, správou uživatelských rolí a ukládáním výsledků. Pro účely zjednodušení obhajoby a eliminace závislostí na externích databázových serverech byla aplikace upravena do **odlehčeného bezdatabázového režimu**.

---

## 🚀 Hlavní Funkce Aplikace

1. **Modul Šifry:** Interaktivní rozhraní pro procvičování klasických šifer (Caesarova šifra, Morseova abeceda aj.). Uživatelé překládají zašifrovaný text a systém okamžitě na front-endu ověřuje správnost odpovědi.
2. **Modul Uzly:** Digitální manuál pro vázání základních skautských uzlů, doplněný o textové popisy, schémata a videoinstruktáže pro zvýšení efektivity výuky.
3. **Interaktivní Testování:** Možnost vyzkoušet si test znalostí kombinující dešifrování slov a fyzické vázání uzlů s okamžitou zpětnou vazbou na stránce.

---

## 🛠️ Architektura a Vývoj (Evoluce Projektu)

### 1. Původní Architektura (Produkční Prototyp)
V první fázi vývoje (popisované v hlavní maturitní dokumentaci) aplikace fungovala jako plnohodnotný Django systém:
* **Backend:** Python + Django framework s využitím Django ORM.
* **Databáze:** Lokální SQLite (`db.sqlite3`) přecházející na produkční PostgreSQL na cloudu.
* **Autentizace:** Systém uživatelských rolí (*Administrátor*, *Vedoucí*, *Účastník*) pro registraci dětí a správu oprávnění.
* **Persistence:** Výsledky testů se ukládaly do databázových tabulek (`vysledektestu`, `tabulkaslov`), kde je vedoucí mohl filtrovat a mazat.

### 2. Současná Architektura (Bezdatabázový / Maturitní Režim)
Aby se zajistila 100% spolehlivost při maturitní prezentaci bez rizika výpadků databáze, ztráty dat při uspání serveru na Renderu nebo problémů s migracemi, byl projekt transformován:
* **Odebrání databáze:** Modely (`models.py`) byly vyřazeny. Veškerá data (slova k šifrám, parametry uzlů) jsou staticky definována přímo v kódu na straně backendu (`views.py`) a front-endu.
* **Zrušení přihlašování:** Všechny sekce webu jsou okamžitě přístupné bez nutnosti autentizace. Odpadá tak zadávání přihlašovacích údajů, správa session a riziko zablokování účtů.
* **Okamžité vyhodnocení:** Tabulky výsledků a historie byly nahrazeny přímým front-endovým vyhodnocením. Výsledky testu se zobrazí uživateli ihned po odevzdání na obrazovce, nikam se trvale neukládají.

---

## 💻 Technické Požadavky a Spuštění

### Požadavky na prostředí
* **Python** 3.10 nebo novější
* **Django** 5.0+
* **Webový prohlížeč:** Google Chrome, Opera (optimalizováno pro stolní počítače/notebooky kvůli třípanelovému rozvržení).

### Lokální spuštění aplikace v bezdatabázovém režimu

1. **Klonování repozitáře:**
   ```bash
   git clone [https://github.com/JustDav3/maturitniPraceWeb.git](https://github.com/JustDav3/maturitniPraceWeb.git)
   cd maturitniPraceWeb