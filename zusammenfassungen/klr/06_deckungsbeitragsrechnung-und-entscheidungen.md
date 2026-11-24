---
id: klr-06-deckungsbeitragsrechnung-entscheidungen
kurs: klr
nr: 6
titel: Kapitel 3.3 Teilkostenrechnung: Mehrstufige Deckungsbeitragsrechnung & Kurzfristige Entscheidungen (PUG, Zusatzauftrag, Engpass, Make-or-Buy)
quellen: KLR - Skript 2026-WS - Kapitel 3.3 Teilkostenrechnung - Deckungsbeitragsrechnung.pdf
seiten: 48
---

> **Kurz gesagt:** Welche Geschäftsbereiche im Konzern Zirbelnuss verdienen wirklich das Geld – soll das Bistro wegen eines negativen DB II geschlossen werden? Und wie entscheidet das Controlling kurzfristig über **Rabattaktionen (Black Week)**, **Sonderaufträge (Hotel Alpenhof & Hotelgruppe Bergblick)**, **Produktionsengpässe (CNC-Zentrum & Zirbenholz)** sowie **Eigenfertigung vs. Fremdbezug (3D-Druck-Beschlagset & Bistro-Brötchen)**? Dieses 48-seitige Vorlesungs- und Übungsskript von Prof. Dr. Jochen Übelhör (Folien 355–411) liefert alle Verfahren und Musterlösungen der operativen Entscheidungsrechnung.

## 🎯 Lernziele
- Die Grenzen der **einstufigen Deckungsbeitragsrechnung (*Direct Costing*)** erkennen und eine **mehrstufige Deckungsbeitragsrechnung (*stufenweise Fixkostendeckungsrechnung*)** über 5 Fixkostenschichten (**DB I bis DB IV** und **Betriebsergebnis**) aufstellen (S. 5–13, **Übung 4** S. 16–18).
- Entscheidungen zur **Sortimentsbereinigung / Produkteinstellung** unter Berücksichtigung **abbaubarer vs. nicht abbaubarer Fixkosten** sowie **Verbundeffekten** quantifizieren (S. 14–15, **Übung 5 Bistro** S. 19–21).
- **Kurzfristige, langfristige und engpassbezogene Preisuntergrenzen (PUG)** berechnen und Rabattaktionen inkl. **Kannibalisierungseffekten** bewerten (S. 25–27, **Übung 6 Black Week** S. 28–30).
- Über die **Annahme oder Ablehnung von Zusatzaufträgen** bei freier Kapazität, bei Kapazitätsengpass (**Opportunitätskosten**) sowie bei **sprungfixen Zusatzschichtkosten** entscheiden (S. 31–32, **Übung 7 Hotelgruppe Bergblick** S. 33–35).
- Das **optimale Produktionsprogramm bei einem Kapazitäts- oder Materialengpass** über den **relativen Deckungsbeitrag** sowie die **Preisobergrenze für Engpassfaktoren** bestimmen (S. 36–38, **Übung 8 Engpass Zirbenholz** S. 39–40).
- **Make-or-Buy-Entscheidungen (Eigenfertigung vs. Fremdbezug)** inkl. **kritischer Menge** und **Preisobergrenze (POG)** berechnen (S. 41–44, **Übung 9 Bistro-Brötchen** S. 45–47).

---

## 📖 Teil A: Einstufige vs. Mehrstufige Deckungsbeitragsrechnung (S. 4–23 / Folien 358–381)

### 1. Einstufige Deckungsbeitragsrechnung (*Direct Costing*, S. 5–8)
- **Aufbau:** Je Produkt werden die variablen Kosten vom Umsatz abgezogen (`DB = Umsatz - K_var`). Anschließend werden sämtliche Fixkosten **als ein einziger ungeteilter Block** von der Summe aller Deckungsbeiträge abgezogen:
  ```
  Summe aller Produkt-Deckungsbeiträge (Σ DB)
  – Gesamte Fixkosten des Unternehmens (als ein Block)
  = Betriebsergebnis (BE)
  ```
- **Vorlesungsbeispiel Experience Center (einstufig, S. 7 / Folie 361, in T€):**
  | Größe (in T€) | Zirbel-Café | Bistro | Möbel-Abverkauf | Accessoires | **SUMME** |
  |---|---:|---:|---:|---:|---:|
  | **Umsatzerlöse** | 343 | 210 | 250 | 150 | **953** |
  | **– Variable Kosten** | –63 | –95 | –175 | –85 | **–418** |
  | **= Deckungsbeitrag (DB)** | **280** | **115** | **75** | **65** | **535** |
  | **– Fixkosten (en bloc)** | | | | | **–515** |
  | **= Betriebsergebnis (BE)** | | | | | **+20** |
- **Problem der einstufigen Rechnung (S. 8):** Alle vier Bereiche haben einen positiven DB, aber es bleibt völlig unklar, **welches Produkt bzw. welcher Bereich welche Fixkosten verursacht** und ob ein einzelner Bereich seine eigenen Fixkosten (z. B. Koch und Küchengeräte im Bistro) überhaupt selbst trägt!

---

### 2. Mehrstufige Deckungsbeitragsrechnung (*Stufenweise Fixkostendeckungsrechnung*, S. 9–13)
- **Grundregel (S. 9–10):** Der Fixkostenblock wird in **hierarchische Schichten** zerlegt. Fixkosten werden **exakt auf der untersten Ebene abgezogen, auf der sie sich direkt und überschneidungsfrei (ohne Schlüsselung/Umlage!) zurechnen lassen**:
  1. **Variable Kosten** (je Stück/Tasse/Gericht: Kaffeebohnen, Milch, Lebensmittel, Handelsware) → ergibt **Deckungsbeitrag I (DB I)** *(Beitrag des Produkts zur Fixkostendeckung)*.
  2. **Erzeugnisfixkosten / Produktfixkosten** (nur für ein Produkt/Teilbereich: Barista & Siebträger im Café; Koch & Küchengeräte im Bistro) → ergibt **Deckungsbeitrag II (DB II)** *(Deckt das Produkt seine eigenen Fixkosten?)*.
  3. **Erzeugnisgruppenfixkosten** (für mehrere Produkte gemeinsam: Gastraum & Spülküche für Gastronomie; Verkaufsfläche für Werksverkauf) → ergibt **Deckungsbeitrag III (DB III)** *(Trägt sich die Produktgruppe selbst?)*.
  4. **Bereichsfixkosten / Geschäftsfeldfixkosten** (Gebäude des Experience Centers, Center-Leitung) → ergibt **Deckungsbeitrag IV (DB IV)** *(Trägt sich der Standort/Geschäftsbereich selbst?)*.
  5. **Unternehmensfixkosten** (Geschäftsführung, Konzernverwaltung, zentrale IT) → ergibt das **Betriebsergebnis (BE)**.

- **Mehrstufige DB-Rechnung im Experience Center (S. 12 / Folie 367, in T€):**
  | Stufe (in T€) | Zirbel-Café | Bistro | Möbel-Abverkauf | Accessoires | **Experience Center** |
  |---|---:|---:|---:|---:|---:|
  | **Umsatzerlöse** | 343 | 210 | 250 | 150 | **953** |
  | **– Variable Kosten** | –63 | –95 | –175 | –85 | **–418** |
  | **= Deckungsbeitrag I (DB I)** | **280** | **115** | **75** | **65** | **535** |
  | **– Erzeugnisfixkosten** | –210 | –125 | –20 | –30 | **–385** |
  | **= Deckungsbeitrag II (DB II)** | **+70** | **–10** | **+55** | **+35** | **150** |
  | *Zwischensumme Gruppe* | *Gastronomie: +60* | | *Verkauf: +90* | | |
  | **– Gruppenfixkosten** | *–45* | | *–30* | | **–75** |
  | **= Deckungsbeitrag III (DB III)** | **+15** *(Gastro)* | | **+60** *(Verkauf)* | | **75** |
  | **– Bereichsfixkosten** | | | | | **–55** |
  | **= Deckungsbeitrag IV (DB IV)** | | | | | **+20** |

- **Interpretation der Stufen (S. 12–13 / Folien 367–369):**
  - **DB I > 0 (`Bistro: +115 T€`):** Das Produkt liefert kurzfristig einen positiven Beitrag zur Deckung der Fixkosten → **kurzfristig NICHT sofort einstellen**, sonst fehlen diese `115 T€`!
  - **DB II < 0 (`Bistro: -10 T€`):** Das Bistro schafft es nicht ganz, seine eigenen Erzeugnisfixkosten (`125 T€`) zu decken. Die **Gastronomie als Gruppe (`DB III = +15 T€`)** ist dank des Zirbel-Cafés aber profitabel.
  - **Mittelfristige Prüfung vor einer Schließung:** Preise/Sortiment/Kosten optimieren und prüfen: **(1) Abbaubarkeit der Fixkosten** (Kündigungsfristen, Abschreibungen), **(2) Verbundeffekte** (trinken Bistro-Gäste danach Kaffee?), **(3) Strategie/Image** (Verweildauer im Experience Center).

---

### 3. Sortimentsbereinigung & Profit-Center-Steuerung (S. 14–15, 23 / Folien 370–371, 381)
- **Zentrale Klausurformel für die Ergebniswirkung einer Produkteinstellung (S. 14–15):**
  ```
  Δ Betriebsergebnis = – DB I des eingestellten Produkts
                       + kurzfristig abbaubare Fixkosten
                       ± Verbundeffekte bei anderen Produkten (Δ DB I anderer Produkte)
                       ± DB aus alternativer Nutzung freier Kapazität
  ```
  > **Wichtig:** Nicht die gesamten Erzeugnisfixkosten fallen bei einer Schließung sofort weg, sondern **nur der abbaubare Teil**! Nicht abbaubare Fixkosten (z. B. laufende Abschreibungen auf Spezialmaschinen, unkündbare Miet-/Arbeitsverträge) bleiben als *„Eh-da-Kosten"* bestehen!
- **Steuerung als Profit-Center (S. 23 / Folie 381):**
  - Jedes der 5 Geschäftsfelder wird als *„Unternehmen im Unternehmen"* mit eigener Ergebnisverantwortung geführt.
  - **Steuerungsgröße:** Der Deckungsbeitrag nach den vom Bereichsleiter beeinflussbaren Fixkosten (**DB III** bzw. **DB IV**) – nicht das durch Konzernumlagen verzerrte Nettoergebnis! Interne Lieferungen zwischen Bereichen werden über marktbasierte **Verrechnungspreise** abgerechnet.

---

## 📖 Teil B: Kurzfristige Entscheidungen mit Deckungsbeiträgen (S. 25–48 / Folien 383–411)

### 1. Grundprinzip: Entscheidungsrelevante Kosten vs. Sunk Costs (S. 25 / Folie 383)
Für kurzfristige operative Entscheidungen ist **ausschließlich relevant, was sich durch die Entscheidung verändert**:
- **Entscheidungsrelevant:** Zusätzliche Erlöse, zusätzliche variable Kosten, **zusätzliche (sprungfixe) oder abbaubare Fixkosten** sowie **entgangene Deckungsbeiträge (Opportunitätskosten)** bei Kapazitätsengpässen.
- **NICHT entscheidungsrelevant:** Vorhandene, unveränderliche Fixkosten (*„Eh-da-Kosten"*) sowie bereits in der Vergangenheit unwiederbringlich ausgegebene Beträge (*Sunk Costs*).

---

### 2. Preisuntergrenzen (PUG, S. 26–27 / Folien 384–385)
| Art der Preisuntergrenze | Kapazitätssituation | Formel | Wert beim Zirbenbett (`p = 2.000 €`) |
|---|---|---|---|
| **1. Kurzfristige (absolute) PUG** | **Freie Kapazität** (Ausnahmesituation) | `PUG_kurz = k_var` *(dort ist `db = 0`)* | **`1.200 €`** *(Material 660 € + Lohn 360 € + var. FGK 180 €)* |
| **2. Langfristige PUG** | Dauerhafte Existenzsicherung | `PUG_lang = Selbstkosten = k_var + K_fix / x` | **`1.800 €`** *(1.200 € + 96.000 € / 160 Betten)* |
| **3. PUG bei Engpass** | **Kapazität voll ausgelastet** | `PUG_Engpass = k_var + entgangener DB` | `1.200 € + verdrängter DB (Opportunitätskosten)` |

---

### 3. Annahme eines Zusatzauftrags (S. 31–32 / Folien 390–391)
- **Entscheidungsregel:** Ein Zusatzauftrag zum Sonderpreis `p_Zusatz` wird angenommen, wenn:
  - **Ohne zusätzliche Fixkosten (freie Kapazität):** `p_Zusatz > k_var` bzw. `db_Zusatz > 0`
  - **Mit zusätzlichen (sprungfixen) Fixkosten:** `DB_Zusatz - K_fix,zusätzlich > 0`
  - **Bei Kapazitätsengpass:** `DB_Zusatz - entgangener DB_regulär > 0`
  - *Voraussetzung:* Keine Kannibalisierung des Stammgeschäfts (Preisdifferenzierung muss gegenüber Regulärkunden abgeschirmt sein).
- **Auflösung des Einstiegsfalls „Hotel Alpenhof" (300 Schneidebretter M zu `12,00 €`, S. 32 / Folie 391):**
  - Vollkostensicht rechnet mit `15,00 €` Selbstkosten (`-3,00 €/Brett` = `-900 €` scheinbarer Verlust) und lehnt fälschlich ab.
  - **Teilkostensicht:** Variable Kosten je Brett `k_var = 5,60 € (0,004 m³ Holz) + 1,60 € (Öl/Verpackung) + 1,20 € (0,02 h Lohn) + 0,60 € (0,02 h var. FGK) = 9,00 €`.
  - **Stück-DB Zusatzauftrag:** `db = 12,00 € - 9,00 € = +3,00 €/Brett` → **Ergebnisverbesserung = `300 * 3,00 € = +900 €` → Auftrag annehmen!** *(Bedingung: freie Kapazität und kein Weiterverkauf an reguläre Shop-Kunden, die `35 €` zahlen).*

---

### 4. Optimales Produktionsprogramm bei einem Engpass (S. 36–38 / Folien 396–399)
- **Fall 1: Kein Engpass:** Alle Produkte mit positivem Stückdeckungsbeitrag (`db > 0`) werden bis zur vollen Absatzhöchstmenge produziert.
- **Fall 2: Ein Kapazitäts- oder Materialengpass liegt vor:**
  - **Falle:** NIEMALS nach dem höchsten absoluten Stück-DB (`db`) sortieren!
  - **4-Schritte-Algorithmus nach dem relativen Deckungsbeitrag (`db_rel`, S. 36):**
    1. **Absoluten Stück-DB** je Produkt berechnen: `db_i = p_i - k_var,i` *(falls `db_i <= 0`: sofort streichen)*.
    2. **Relativen Deckungsbeitrag** je Engpasseinheit berechnen:
       `db_rel,i = db_i / Engpassbedarf je Stück (z. B. €/Stunde oder €/m³)`
    3. **Rangfolge** vom höchsten zum niedrigsten `db_rel` festlegen (**Rang 1 = höchster `db_rel`**).
    4. **Engpasskapazität nach Rangfolge zuteilen:** Rang 1 voll produzieren → Restkapazität für Rang 2 → usw., bis der Engpass aufgebraucht ist (das letzte gefertigte Produkt ist das **Grenzprodukt**).

- **Vorlesungsbeispiel: Engpass am CNC-Bearbeitungszentrum (`640 h` verfügbar, S. 37–38 / Folien 397–399):**
  | Produkt | Stück-DB `db` | CNC-Std./Stk. | Nachfrage | CNC-Bedarf | **Relativer DB (`db / h`)** | **Rang** | **Optimale Menge** | **CNC-Std. genutzt** | **DB im Optimum** |
  |---|---:|---:|---:|---:|---:| :---: |---:|---:|---:|
  | **Esstisch** | 450 € | 1,5 h | 200 Stk. | 300 h | **`300 €/h`** | **1** | **200 Stk.** | 300 h | **90.000 €** |
  | **Sideboard** | 600 € | 2,5 h | 120 Stk. | 300 h | **`240 €/h`** | **2** | **120 Stk.** | 300 h | **72.000 €** |
  | **Zirbenbett** | 800 € | 4,0 h | 40 Stk. | 160 h | **`200 €/h`** | **3** | **10 Stk.** *(Rest 40 h / 4 h)* | 40 h | **8.000 €** |
  | **Summe** | | | | **760 h** *(120 h fehlen!)* | | | | **640 h** | **`170.000 €`** |
  - *Vergleich:* Wer fälschlich nach dem höchsten absoluten Stück-DB sortiert (40 Betten → 120 Sideboards → 120 Esstische), erzielt nur `158.000 €` Deckungsbeitrag – also **`12.000 €` weniger Gewinn**!

---

### 5. Make-or-Buy (Eigenfertigung vs. Fremdbezug) & Preisobergrenzen (S. 41–44 / Folien 403–406)
- **Kostenvergleich:**
  - **Eigenfertigung (`Make`):** Variable Kosten der Eigenfertigung (`k_var`) + zusätzliche (bzw. abbaubare) Fixkosten + **bei Engpass: entgangener DB verdrängter Produkte (Opportunitätskosten)**. *(Bereits vorhandene Fixkosten wie Hallenmiete, Abschreibungen oder festangestelltes Personal mit freier Zeit sind NICHT relevant!)*
  - **Fremdbezug (`Buy`):** Einkaufspreis + Bezugsnebenkosten (Fracht, Zoll, Qualitätsprüfung, Bestellabwicklung).
- **Preisobergrenze (POG) beim Einkauf = Gegenstück zur Preisuntergrenze (S. 44 / Folie 406):**
  - **Bei freier Kapazität:** `POG = k_var,Make (+ abbaubare Fixkosten / x)`
  - **Bei Engpass:** `POG = k_var,Make + entgangener DB je Einheit (Opportunitätskosten)`
- **Vorlesungsbeispiel: 640 Beschlagsets im 3D-Druck selbst drucken? (S. 42–44 / Folien 404–406):**
  - **Fremdbezug (`Buy`):** `38,00 €/Set`.
  - **Vollkosten-Trugschluss (`41,40 €/Set`):** Material `9,00 €` + Lohn (`0,25 h * 40 € = 10,00 €`) + volle FGK (`0,25 h * 89,60 €/h = 22,40 €`) = `41,40 € > 38,00 €` (würde fälschlich zum Zukauf raten).
  - **Entscheidungsrelevante Kosten bei freier Kapazität (`160 Druckstunden` frei):** Im FGK-Satz (`89,60 €/h`) sind nur `32,00 €/h` variabel und `57,60 €/h` fix (`14,40 €/Set` fallen ohnehin an!).
    - `k_var,Make = 9,00 € (Material) + 10,00 € (Lohn) + 8,00 € (0,25 h * 32 €/h var. FGK) = 27,00 €/Set` (= **POG bei freier Kapazität**).
    - **Entscheidung:** **Eigenfertigung (`Make`)!** Ersparnis = `(38,00 € - 27,00 €) * 640 Sets = 11,00 € * 640 = 7.040 €/Jahr`.
  - **Was gilt, wenn der 3D-Druck voll ausgelastet ist und jedes Set Leuchten (`110 €/h` DB) verdrängt? (S. 44):**
    - `POG_Engpass = 27,00 € + 0,25 h * 110 €/h = 27,00 € + 27,50 € = 54,50 €/Set`. Da der Zukaufpreis (`38,00 €`) unter `54,50 €` liegt, ist **bei Engpass der Fremdbezug (`Buy`) vorteilhaft**!

---

## 🧮 Alle 6 Übungen aus Kapitel 3.3 (Übung 4 bis Übung 9) – Komplett gelöst!

### 1. Übung 4: Mehrstufige DB-Rechnung für den Zirbelnuss-Konzern 2027 (S. 16–18 / Folien 372–374)
- **Ausgangsdaten:** Ergebnisplanung 2027 für 3 Geschäftsfelder; **Unternehmensfixkosten = `120 T€`**.
- **a) Vollständige mehrstufige DB-Rechnung (in T€):**

| Stufe (in T€) | Betten | Tische | Sideboards | Duft & Wohnen | Zirben-Kosmetik | Leuchten | Auftragsdruck | **KONZERN GESAMT** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| **Umsatzerlöse** | 320,0 | 912,0 | 758,4 | 353,8 | 90,0 | 80,1 | 60,0 | **2.574,3** |
| **– Variable Kosten** | –192,0 | –552,0 | –470,4 | –159,4 | –54,0 | –30,6 | –24,0 | **–1.482,4** |
| **= Deckungsbeitrag I (DB I)** | **128,0** | **360,0** | **288,0** | **194,4** | **36,0** | **49,5** | **36,0** | **1.091,9** |
| **– Erzeugnisfixkosten** | –96,0 | –60,0 | –50,0 | –145,8 | –12,0 | –33,0 | –10,0 | **–406,8** |
| **= Deckungsbeitrag II (DB II)** | **32,0** | **300,0** | **238,0** | **48,6** | **24,0** | **16,5** | **26,0** | **685,1** |
| *Geschäftsfeld-Summe DB II* | ***Möbelfertigung: 570,0*** | | | ***Online-Shop: 72,6*** | | ***3D-Druck: 42,5*** | | **685,1** |
| **– Geschäftsfeldfixkosten** | *–420,0* | | | *–30,0* | | *–30,0* | | **–480,0** |
| **= Deckungsbeitrag III (DB III)** | **`150,0`** *(Möbel)* | | | **`42,6`** *(Shop)* | | **`12,5`** *(3D-Druck)* | | **205,1** |
| **– Unternehmensfixkosten** | | | | | | | | **–120,0** |
| **= Betriebsergebnis (BE)** | | | | | | | | **`+85,1 T€`** |

- **b) Analyse & Empfehlung:**
  - **Schwächste Produktgruppe nach DB II:** **3D-Druck Leuchten (`16,5 T€`)**, gefolgt von Zirben-Kosmetik (`24,0 T€`) und Betten (`32,0 T€` trotz `320 T€` Umsatz wegen hoher Erzeugnisfixkosten von `96 T€`). *Aber:* **Alle 7 Produktgruppen haben einen positiven DB I UND einen positiven DB II** – jede Produktgruppe deckt ihre eigenen Erzeugnisfixkosten vollständig und liefert einen Überschuss!
  - **Schwächstes Geschäftsfeld nach DB III:** **3D-Druck (`+12,5 T€`)**, während die Möbelfertigung (`+150,0 T€`) das Rückgrat des Konzerns bildet.
  - **Empfehlung:** **Kein Bereich und keine Produktgruppe darf geschlossen werden** (da alle `DB II > 0` und `DB III > 0` aufweisen – jede Schließung würde das Betriebsergebnis von `85,1 T€` verschlechtern!). Stattdessen: Im 3D-Druck Kapazitätsauslastung erhöhen (z. B. interne Fertigung von Beschlagsets für die Möbelfertigung), bei den Betten und bei Duft & Wohnen die hohen Erzeugnisfixkosten (`96 T€` bzw. `145,8 T€`) überprüfen.

---

### 2. Übung 5: Soll das Bistro geschlossen werden? (S. 19–21 / Folien 376–378)
- **Ausgangsdaten aus der mehrstufigen Rechnung (Folie 367):**
  - Bistro: Umsatz `210 T€`, variable Kosten `95 T€` → **`DB I = +115 T€`**, Erzeugnisfixkosten `125 T€` → **`DB II = -10 T€`**.
  - Zirbel-Café: **`DB I = +280 T€`**.
  - Aktueller `DB IV` des gesamten Experience Centers: **`+20 T€`**.
  - **Recherche Controlling bei Schließung:**
    1. **`25 T€` der Bistro-Fixkosten sind kurzfristig NICHT abbaubar** (Abschreibung Küchengeräte, Kündigungsfristen) → **abbaubare Fixkosten = `125 T€ - 25 T€ = 100 T€`**.
    2. **Verbundeffekt:** Das Zirbel-Café verliert **`10 %` Absatz** (und damit `10 %` seines `DB I`: `10 % * 280 T€ = -28 T€`).
- **Musterlösung:**
  - **a) Ergebniswirkung einer Bistro-Schließung:**
    ```
    Wegfallender DB I des Bistros:                 – 115 T€
    + Kurzfristig abbaubare Fixkosten (125 – 25):  + 100 T€
    = Isolierter Effekt Bistro:                    –  15 T€
    – Verbundeffekt Zirbel-Café (10 % von 280 T€): –  28 T€
    =======================================================
    = Gesamte Ergebniswirkung (Δ Betriebsergebnis): – 43 T€
    ```
  - **b) Veränderung des DB IV des Experience Centers:**
    - Der DB IV sinkt um `43 T€` von `+20 T€` auf **`-23 T€`** (auch der DB III der Gastronomie stürzt von `+15 T€` um `43 T€` auf `-28 T€` ab!). Durch die Schließung des Bistros würde das gesamte Experience Center in die Verlustzone gerissen!
  - **c) Empfehlung & qualitative Argumente:**
    - **Dringende Empfehlung: Bistro NICHT schließen!** Stattdessen die fehlenden `10 T€` zum positiven DB II durch moderate Preisanpassungen bei Bowls/Wraps, Speisekarten-Straffung (Food-Waste senken) oder Personaleinsatz-Optimierung zwischen Café und Bistro reinholen.
    - **Qualitative Argumente:** Das Bistro verlängert die **Verweildauer der Besucher im Werksverkauf** (Kunden kaufen nach dem Mittagessen Möbel und Accessoires), stärkt das Marken-Erlebnis („Experience Center") und verhindert Leerstand mitten im Showroom.

---

### 3. Übung 6: Black-Week-Aktion im Online-Shop (S. 28–30 / Folien 386–388)
- **Ausgangsdaten (Duftsäckchen):**
  - Normalpreis `p = 9,90 €`, variable Stückkosten `k_var = 3,90 €` (`3,40 €` Ware + `0,50 €` Versand/Zahlung) → **`db_normal = 6,00 €/Stk.`**
  - Erzeugnisfixkosten `K_fix = 4.800 €/Monat` bei regulärem Absatz `x_normal = 1.200 Stk./Monat` (`4,00 €` Fixkosten/Stk.).
  - **Black-Week-Aktion:** `30 %` Rabatt, erwarteter Aktionsabsatz `2.500 Stk.` (davon **`500 Stk.` Stammkunden-Kannibalisierung** und **`2.000 Stk.` echte Zusatzverkäufe**), zusätzliche Werbekosten `1.500 €`.
- **Musterlösung:**
  - **a) Kurz- und langfristige Preisuntergrenze:**
    - **Kurzfristige PUG:** `PUG_kurz = k_var = 3,90 €`
    - **Langfristige PUG:** `PUG_lang = Selbstkosten = 3,90 € + (4.800 € / 1.200 Stk.) = 3,90 € + 4,00 € = 7,90 €`
  - **b) Ist der Aktionspreis kurzfristig vertretbar?**
    - **Aktionspreis (`-30 %`):** `p_Aktion = 9,90 € * 0,70 = 6,93 €` *(Rabatt = `2,97 €/Stk.`)*.
    - Da `6,93 € > 3,90 €` (`PUG_kurz`), erwirtschaftet jedes Aktions-Duftsäckchen einen positiven Stückdeckungsbeitrag von **`db_Aktion = 6,93 € - 3,90 € = +3,03 €/Stk.`** → **Ja, kurzfristig vertretbar** (auch wenn er unter der langfristigen PUG von `7,90 €` liegt).
  - **c) Ergebniswirkung der Aktion (inkl. Kannibalisierung & Werbekosten):**
    ```
    1. Zusätzlicher DB durch 2.000 echte Neukäufe (2.000 × 3,03 €):       + 6.060 €
    2. Kannibalisierung bei 500 Stammkunden (500 × –2,97 € entgangener DB): – 1.485 €
    3. Zusätzliche Werbekosten für die Black-Week-Kampagne:               – 1.500 €
    ===============================================================================
    = Netto-Ergebniswirkung (Δ Gewinn im Aktionsmonat):                   + 3.075 €
    ```
    *(Alternativer Gesamtvergleich: Ohne Aktion `1.200 * 6,00 € = 7.200 € DB`; mit Aktion `700 Regulärkäufe * 6,00 € + 2.500 Aktionskäufe * 3,03 € - 1.500 € Werbung = 4.200 € + 7.575 € - 1.500 € = 10.275 € DB` → Vorteil **`+3.075 €`** ✓ → **Die Aktion lohnt sich!**)*
  - **d) Qualitative Risiken:**
    - **Referenzpreis-Erosion:** Kunden gewöhnen sich an `6,93 €` und warten künftig auf Rabatte, statt `9,90 €` zu zahlen.
    - **Vorzieheffekte (Horten):** Stammkunden decken sich für das ganze Weihnachtsgeschäft ein → Umsatzeinbruch im Dezember.
    - **Markenimage & Logistik-Engpass:** Zu hohe Rabatte können das Premium-Image („Zirbelnuss") verwässern; `2.500` Zusatzpakete in einer Woche belasten Versand und Lager.

---

### 4. Übung 7: Hotelgruppe Bergblick bestellt 120 Zirbenbetten (S. 33–35 / Folien 392–394)
- **Ausgangsdaten:**
  - Regulärgeschäft: `p_reg = 2.000 €`, `k_var = 1.200 €` → **`db_reg = 800 €/Bett`**.
  - Kapazität: `200 Betten/Jahr`, Planabsatz: `160 Betten/Jahr` → **freie Kapazität = `40 Betten`**.
  - **Zusatzauftrag Hotelgruppe Bergblick:** `120 Betten` zum Sonderpreis `p_Zusatz = 1.500 €/Bett` → **`db_Zusatz = 1.500 € - 1.200 € = +300 €/Bett`**.
  - Optionale Zusatzschicht: schafft `+80 Betten` Kapazität für **`15.000 €` sprungfixe Zusatzkosten**.
- **Musterlösung:**
  - **a) Beurteilung bei ausreichend freier Kapazität (wenn 120 Betten frei wären):**
    - Da `p_Zusatz (1.500 €) > k_var (1.200 €)`, bringt jedes Bett `+300 €` DB → **Ergebnisverbesserung = `120 * 300 € = +36.000 €` → Auftrag annehmen!** (`PUG = 1.200 €`).
  - **b) Beurteilung bei tatsächlicher Kapazität (nur 40 frei, keine Zusatzschicht):**
    - Um `120` Hotelbetten zu liefern, werden `40` freie Kapazitätsplätze genutzt, aber **`80` reguläre Betten (`db_reg = 800 €`) verdrängt**!
    - **Opportunitätskosten (entgangener DB):** `80 Betten * 800 € = 64.000 €`.
    - **Ergebniswirkung:**
      ```
      Zusätzlicher DB aus dem Hotelauftrag (120 × 300 €):   + 36.000 €
      – Entgangener DB aus 80 verdrängten Regulärbetten:    – 64.000 €
      ================================================================
      = Ergebniswirkung (Δ Betriebsergebnis):               – 28.000 €
      ```
      *(Oder direkt: `40 freie Betten * (+300 €) + 80 verdrängte Betten * (-500 € Preisnachlass) = +12.000 € - 40.000 € = -28.000 €`)*.
    - **Entscheidung:** **Auftrag zwingend ABLEHNEN** (oder auf die 40 freien Betten begrenzen, die `+12.000 €` bringen)!
    - **Preisuntergrenze (PUG) bei Engpass für den 120er-Auftrag:**
      `PUG_Engpass = k_var + (entgangener DB / 120) = 1.200 € + (64.000 € / 120) = 1.200 € + 533,33 € = 1.733,33 €/Bett` *(Gesamterlös mindestens `208.000 €`; für jedes einzelne verdrängte Bett liegt die PUG beim vollen Listenpreis von `1.200 € + 800 € = 2.000 €`)*.
  - **c) Beurteilung MIT Zusatzschicht (`+80 Betten` für `15.000 €` Fixkosten):**
    - Mit der Zusatzschicht steigt die Kapazität auf `280 Betten` → **keine Verdrängung regulärer Kunden mehr**!
    - **Ergebniswirkung:** `DB_Zusatz (120 * 300 € = 36.000 €) - Schichtfixkosten (15.000 €) = +21.000 €` zusätzlicher Gewinn → **Auftrag mit Zusatzschicht ANNEHMEN!**
    - **Preisuntergrenze mit Zusatzschicht:**
      `PUG_Schicht = k_var + (K_fix,Schicht / 120) = 1.200 € + (15.000 € / 120) = 1.200 € + 125 € = 1.325,00 €/Bett`.
  - **d) Qualitative Aspekte:**
    - **Positive Werbewirkung (Showroom-Effekt):** Hotelgäste schlafen im Zirbenbett und bestellen danach im Online-Shop oder Experience Center zum vollen Listenpreis (`2.000 €`).
    - **Folgeaufträge & Referenzkunde** im B2B-Objektgeschäft vs. Belastung der Belegschaft durch Schichtarbeit und Gefahr, dass der Sonderpreis (`1.500 €`) am Markt bekannt wird.

---

### 5. Übung 8: Engpass Zirbenholz im Q3/2027 (S. 39–40 / Folien 400–401)
- **Ausgangsdaten:** Wegen Sturmschäden in Tirol sind im 3. Quartal 2027 nur **`60,0 m³` Zirbenholz** verfügbar (regulärer Einkaufspreis **`1.400 €/m³`**).
- **a & b) Engpassprüfung, relativer DB je m³ & Optimales Produktionsprogramm:**

| Produkt | Stück-DB `db` | Holz je Stk. | Nachfrage Q3 | Holzbedarf gesamt | **Relativer DB (`db / m³`)** | **Rang** | **b) Optimale Menge** | **b) Holz verbraucht** | **b) DB im Optimum** |
|---|---:|---:|---:|---:|---:| :---: |---:|---:|---:|
| **Schneidebrett M** | 26 € | 0,004 m³ | 1.000 Stk. | 4,0 m³ | **`6.500 €/m³`** | **1** | **1.000 Stk.** | 4,0 m³ | **26.000 €** |
| **Esstisch** | 450 € | 0,15 m³ | 200 Stk. | 30,0 m³ | **`3.000 €/m³`** | **2** | **200 Stk.** | 30,0 m³ | **90.000 €** |
| **Sideboard** | 600 € | 0,25 m³ | 120 Stk. | 30,0 m³ | **`2.400 €/m³`** | **3** | **104 Stk.** *(Rest 26 m³ / 0,25)* | 26,0 m³ | **62.400 €** |
| **Zirbenbett** | 800 € | 0,40 m³ | 40 Stk. | 16,0 m³ | **`2.000 €/m³`** | **4** | **0 Stk.** | 0,0 m³ | **0 €** |
| **Summe** | | | | **`80,0 m³`** *(> 60 m³ → **20 m³ fehlen!**)* | | | | **`60,0 m³`** | **`178.400 €`** |

  - **Erkenntnis zu a & b:** Es liegt ein Engpass von `20 m³` vor. Obwohl das Schneidebrett M den kleinsten absoluten Stück-DB (`26 €`) hat, verbraucht es fast kein Holz (`0,004 m³`) und erzielt mit **`6.500 €/m³`** den mit Abstand höchsten relativen DB (**Rang 1**), während das Zirbenbett trotz `800 €` Stück-DB auf **Rang 4** (`2.000 €/m³`) landet und im reinen Optimum gar nicht gefertigt wird!

- **c) Programm & Deckungsbeitrag bei einem Hotelvertrag über mindestens `30 Zirbenbetten`:**
  - **Schritt 1 (Pflichtmenge vorab reservieren):** `30 Zirbenbetten * 0,40 m³ = 12,0 m³` Holz (`DB = 30 * 800 € = 24.000 €`). Verbleibende Restkapazität: `60,0 m³ - 12,0 m³ = 48,0 m³`.
  - **Schritt 2 (Restliche `48,0 m³` nach Rangfolge verteilen):**
    1. **Rang 1 Schneidebrett M:** `1.000 Stk.` (`4,0 m³` Holz, Rest `44,0 m³`, `DB = 26.000 €`)
    2. **Rang 2 Esstisch:** `200 Stk.` (`30,0 m³` Holz, Rest `14,0 m³`, `DB = 90.000 €`)
    3. **Rang 3 Sideboard:** Rest `14,0 m³ / 0,25 m³ = 56 Stk.` (`14,0 m³` Holz, Rest `0 m³`, `DB = 56 * 600 € = 33.600 €`)
  - **Neuer Gesamt-Deckungsbeitrag:** `24.000 € (30 Betten) + 26.000 € (Bretter) + 90.000 € (Tische) + 33.600 € (56 Sideboards) = 173.600 €`.
  - **Kosten des Hotelvertrags (Opportunitätsverlust):** `178.400 € - 173.600 € = 4.800 €` *(Kontrollrechnung: Für die 30 Betten wurden `12 m³` Holz vom Sideboard abgezogen; jedes m³ bringt beim Bett `2.000 €` statt `2.400 €` beim Sideboard → `12 m³ * 400 €/m³ Differenz = 4.800 €` ✓)*.

- **d) Maximaler Einkaufspreis (Preisobergrenze) für einen zusätzlichen m³ Zirbenholz:**
  - Ein zusätzlicher m³ Holz wird für das aktuell verdrängte Grenzprodukt (**Sideboard, Rang 3**) eingesetzt.
  - Beim regulären Holzpreis von `1.400 €/m³` erwirtschaftet das Sideboard einen zusätzlichen Deckungsbeitrag von **`2.400 €/m³`** (= maximaler Mehrpreis/Aufschlag, den Zirbelnuss zusätzlich zum Normalpreis zahlen dürfte).
  - **Absolute Preisobergrenze je m³ Zirbenholz (für die nächsten 4 m³ bis zur vollen Sideboard-Nachfrage):**
    ```
    POG_Holz = Regulärer Holzpreis (1.400 €/m³) + Relativer DB des Grenzprodukts Sideboard (2.400 €/m³)
             = 3.800 €/m³
    ```
    *(Hinweis: Sind die fehlenden 16 Sideboards = 4 m³ abgedeckt, fließen die weiteren 16 m³ in das Zirbenbett mit `rel. DB = 2.000 €/m³`; dort beträgt die POG dann `1.400 € + 2.000 € = 3.400 €/m³`).*

---

### 6. Übung 9: Brötchen für das Bistro selbst backen? (Make-or-Buy, S. 45–47 / Folien 407–409)
- **Ausgangsdaten:**
  - Jahresbedarf: `x = 40.000 Brötchen/Jahr`.
  - **Fremdbezug (`Buy`)** von Bäckerei aus Lechhausen: **`p_Buy = 0,65 €/Brötchen`** (inkl. Lieferung).
  - **Eigenfertigung (`Make`):**
    - Variable Kosten je Brötchen: `0,22 €` (Zutaten) + `0,05 €` (Energie) + `0,10 €` (stundenweise Aushilfe) = **`k_var,Make = 0,37 €/Brötchen`**.
    - Zusätzliche Fixkosten: **`K_fix,Make = 6.000 €/Jahr`** (Leasing Backofen).
    - Der festangestellte Koch hat morgens ohnehin freie Zeit.
- **Musterlösung:**
  - **a) Vergleich der entscheidungsrelevanten Kosten bei `40.000 Brötchen/Jahr`:**
    - **Fremdbezug (`Buy`):** `40.000 Stk. * 0,65 €/Stk. = 26.000 €/Jahr`
    - **Eigenfertigung (`Make`):** `6.000 € (Leasing Backofen) + 40.000 Stk. * 0,37 €/Stk. = 6.000 € + 14.800 € = 20.800 €/Jahr` *(entspricht `0,52 €/Brötchen`)*
    - **Kostenvorteil Eigenfertigung (`Make`):** `26.000 € - 20.800 € = 5.200 €/Jahr Ersparnis`!
  - **b) Empfehlung & warum das Gehalt des Kochs nicht zählt:**
    - **Empfehlung:** **Selbst backen (`Make`)**, da sich das Betriebsergebnis des Bistros dadurch um **`+5.200 €/Jahr`** verbessert (der negative DB II des Bistros von `–10 T€` halbiert sich dadurch fast!).
    - **Warum zählt der Koch nicht?** Der Koch ist fest angestellt und hat morgens freie Kapazität. Sein Gehalt fällt unabhängig von der Brötchen-Entscheidung in voller Höhe an (**nicht entscheidungsrelevante „Eh-da-Kosten"**). Die Aushilfe hingegen wird stundenweise zusätzlich bezahlt (`0,10 €/Stk.`) und ist deshalb entscheidungsrelevant!
  - **c) Kritische Menge (`x_krit`), ab der sich das Selbstbacken lohnt:**
    - Gleichsetzen der Kostenfunktionen `K_Buy(x) = K_Make(x)`:
      ```
      0,65 € * x  =  6.000 € + 0,37 € * x     | – 0,37 € * x
      0,28 € * x  =  6.000 €                  | ÷ 0,28 €/Stk. (Ersparnis je Brötchen)
      x_krit      =  6.000 € / 0,28 €/Stk. = 21.428,57 → ab 21.429 Brötchen/Jahr!
      ```
  - **d) Was ändert sich bei einer Reduktion auf `20.000 Brötchen/Jahr`?**
    - Da `20.000 < 21.429` (`x_krit`), reicht die Menge nicht mehr aus, um die `6.000 €` Leasingkosten über den Stückvorteil von `0,28 €` einzuspielen:
      - `K_Buy(20.000) = 20.000 * 0,65 € = 13.000 €/Jahr`
      - `K_Make(20.000) = 6.000 € + 20.000 * 0,37 € = 6.000 € + 7.400 € = 13.400 €/Jahr` (`0,67 €/Stk.`)
    - **Entscheidung bei 20.000 Stück:** **Fremdbezug (`Buy`) ist um `400 €/Jahr` günstiger!**
  - **e) Qualitative Faktoren für bzw. gegen Make:**
    - *Pro Make:* Frischer Backduft im Bistro/Experience Center (verkaufsfördernd!), Unabhängigkeit von Lieferzeiten der Bäckerei, flexible Nachproduktion bei starkem Andrang.
    - *Contra Make:* Bindung an den Leasingvertrag für den Backofen (Fixkostenrisiko bei Absatzrückgang), Ausfallrisiko bei Krankheit von Koch/Aushilfe, handwerkliche Bäckerqualität evtl. höher als Aufback-/Eigenware.

---

## ⚠️ Grenzen der Deckungsbeitragsrechnung & Klausurfallen (S. 48 / Folie 411)
- **Grenzen der Teilkostenrechnung (S. 48):**
  1. *Kostenseite:* Trennung in fix und variabel ist in der Praxis oft unscharf; viele Zusatzaufträge erhöhen langfristig doch die Fixkosten (Verschleiß, Überstunden, Verwaltung).
  2. *Absatzseite:* Kurzfristige Sonderpreise verderben langfristig das Preisniveau (Referenzpreis-Effekt); die Grenze zwischen Zusatz- und Regulärgeschäft verschwimmt.
  3. *Langfristige Existenzsicherung:* Auf Dauer müssen **alle Kosten (inkl. aller Fixkosten)** über die Preise verdient werden → **Teil- und Vollkostenrechnung ergänzen sich!**
- **Die 4 häufigsten Klausurfallen in Kapitel 3.3:**
  1. **Bei Produkteinstellung alle Erzeugnisfixkosten als Ersparnis ansetzen:** Falsch! Nur die **kurzfristig abbaubaren** Fixkosten (`Erzeugnisfixkosten - bleibende Fixkosten`) verbessern das Ergebnis.
  2. **Engpass nach absolutem Stück-DB (`db`) sortieren:** Kostet in der Klausur sofort die halbe Punktzahl! Sobald ein Engpass vorliegt, **immer durch den Engpassbedarf je Stück teilen (`db_rel = db / Engpassbedarf`)**.
  3. **Beim maximalen Einkaufspreis (Übung 8d) den Basispreis vergessen:** Der relative DB des Grenzprodukts (`2.400 €/m³`) ist der **maximale Aufpreis** über dem regulären Einkaufspreis (`1.400 €/m³`). Die absolute Preisobergrenze ist `1.400 € + 2.400 € = 3.800 €/m³`!
  4. **„Eh-da-Personal" in Make-or-Buy einrechnen:** Ein festangestellter Mitarbeiter mit freier Kapazität (wie der Bistro-Koch in Übung 9) verursacht `0 €` zusätzliche Kosten!

## 🧠 Merkhilfen
- **Bistro-Regel (Mehrstufige DB-Rechnung):** *Solange `DB I > 0` ist, hilft das Produkt beim Fixkostentragen. Ein negativer `DB II` ist ein Warnsignal zum Optimieren, aber kein blinder Schließungsbefehl!*
- **PUG-Dreiklang:** *Kurzfristig = `k_var` | Langfristig = `Selbstkosten` | Bei Engpass = `k_var + verdrängter DB`.*
- **Engpass-Mantra:** *Nicht wer pro Stück am meisten bringt gewinnt, sondern wer pro knapper Stunde (oder pro knappem m³ Holz) am meisten bringt!*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Einstufige DB-Rechnung (*Direct Costing*) | Zieht sämtliche Fixkosten als einen ungeteilten Gesamtblock von der Summe der Produkt-DBs ab. |
| Mehrstufige DB-Rechnung | Stufenweise Fixkostendeckungsrechnung (DB I bis DB IV), die Fixkosten ohne Schlüsselung auf ihrer Entstehungsebene abzieht. |
| Abbaubare Fixkosten | Teil der Fixkosten, der bei Schließung/Einstellung innerhalb des Betrachtungszeitraums tatsächlich wegfällt. |
| Opportunitätskosten | Entgangener Deckungsbeitrag der besten verdrängten Handlungsalternative bei einem Kapazitätsengpass. |
| Relativer Deckungsbeitrag (`db_rel`) | Stückdeckungsbeitrag geteilt durch den Engpassbedarf je Stück (`db / Engpasseinheit`); Kriterium für die Engpass-Rangfolge. |
| Preisobergrenze (POG) | Maximaler Einkaufspreis für ein Zukaufteil oder Rohmaterial, ab dem Eigenfertigung bzw. Verzicht günstiger ist. |

## ✅ Selbsttest
**F1:** Was ist der zentrale Unterschied zwischen der einstufigen und der mehrstufigen Deckungsbeitragsrechnung, und welche Grundregel gilt für die Zurechnung der Fixkosten?
**A:** Die einstufige DB-Rechnung zieht alle Fixkosten als einen einzigen Gesamtblock ab, während die mehrstufige DB-Rechnung den Fixkostenblock in Hierarchieschichten (Erzeugnis-, Erzeugnisgruppen-, Bereichs- und Unternehmensfixkosten) aufspaltet. Grundregel: Fixkosten werden nur dort abgezogen, wo sie sich direkt und eindeutig **ohne Schlüsselung oder Umlage** zurechnen lassen.

**F2:** Was sagen ein positiver DB I (`+115 T€`) und ein gleichzeitig negativer DB II (`-10 T€`) beim Bistro im Experience Center aus?
**A:** `DB I > 0` bedeutet, dass das Bistro seine variablen Kosten voll deckt und kurzfristig `115 T€` zur Deckung der Fixkosten beiträgt. `DB II < 0` zeigt, dass dieser Betrag jedoch nicht ganz ausreicht, um die eigenen Erzeugnisfixkosten des Bistros (`125 T€`) um `10 T€` zu decken.

**F3:** Warum verschlechtert sich das Betriebsergebnis von Zirbelnuss bei einer Schließung des Bistros um `43 T€`, obwohl das Bistro einen negativen DB II von `-10 T€` ausweist?
**A:** Weil bei einer Schließung `115 T€` DB I wegfallen, aber von den `125 T€` Bistro-Fixkosten kurzfristig nur `100 T€` abbaubar sind (`25 T€` bleiben für Abschreibungen und Kündigungsfristen bestehen → isolierter Effekt `-15 T€`). Zusätzlich verliert das Zirbel-Café durch den fehlenden Verbundeffekt 10 % seines DB I (`-28 T€`), was zusammen `-43 T€` ergibt.

**F4:** Wie lauten die Formeln für die kurzfristige, die langfristige und die engpassbezogene Preisuntergrenze (PUG)?
**A:** Kurzfristige PUG (freie Kapazität) = `k_var`; langfristige PUG = `Selbstkosten` (`k_var + Fixkostenanteil je Stück`); PUG bei Engpass = `k_var + entgangener Deckungsbeitrag (Opportunitätskosten)`.

**F5:** Zirbelnuss hat Kapazität für 200 Zirbenbetten (`p = 2.000 €`, `k_var = 1.200 €`, `db = 800 €`) und verkauft regulär 160 Betten. Eine Hotelgruppe möchte 120 Betten zum Sonderpreis von `1.500 €` kaufen. Lohnt sich der Auftrag ohne bzw. mit Zusatzschicht (`15.000 €` Schichtfixkosten)?
**A:** Ohne Zusatzschicht sind nur 40 Plätze frei, sodass 80 reguläre Betten verdrängt werden: `120 * 300 € Zusatz-DB - 80 * 800 € entgangener DB = 36.000 € - 64.000 € = -28.000 €` (ablehnen!). Mit Zusatzschicht wird kein reguläres Bett verdrängt: `36.000 € Zusatz-DB - 15.000 € Schichtfixkosten = +21.000 €` Mehrgewinn (annehmen, PUG liegt bei `1.325 €/Bett`).

**F6:** Warum ist es bei einem Produktionsengpass falsch, die Produkte nach ihrem höchsten absoluten Stückdeckungsbeitrag (`db`) zu priorisieren?
**A:** Weil ein Produkt mit hohem Stück-DB (wie das Zirbenbett mit `800 €`) oft überproportional viel der knappen Engpasskapazität (`4,0 CNC-Stunden` bzw. `0,40 m³` Holz) blockiert. Entscheidend für die Gewinnmaximierung ist der **relative Deckungsbeitrag** (`db / Engpassbedarf je Stück`), der den Ertrag je knapper Ressourceneinheit misst.

**F7:** Im Holz-Engpass (Übung 8, Holzpreis `1.400 €/m³`) ist das Sideboard (`db = 600 €`, Holzbedarf `0,25 m³`, `rel. DB = 2.400 €/m³`) das letzte nur teilweise gefertigte Produkt (Grenzprodukt). Wie viel dürfte Zirbelnuss maximal für einen zusätzlichen m³ Zirbenholz bezahlen?
**A:** Jeder zusätzliche m³ Holz ermöglicht die Fertigung von 4 weiteren Sideboards und erwirtschaftet (nach Abzug des normalen Holzpreises von `1.400 €`) einen zusätzlichen DB von `2.400 €`. Zirbelnuss dürfte also bis zu `2.400 €` Aufpreis zahlen, was einer absoluten Preisobergrenze von `1.400 € + 2.400 € = 3.800 €/m³` entspricht.

**F8:** Das Bistro benötigt `40.000` Brötchen pro Jahr (Kaufpreis Bäckerei: `0,65 €/Stk.`). Selbstbacken kostet `0,37 €/Stk.` variabel plus `6.000 €/Jahr` Ofen-Leasing; der festangestellte Koch hat morgens freie Zeit. Wie hoch sind die Ersparnis bei 40.000 Stück und die kritische Menge?
**A:** Das Gehalt des Kochs ist als „Eh-da-Kosten" nicht entscheidungsrelevant. Bei 40.000 Stück kostet Buy `26.000 €` und Make `6.000 € + 14.800 € = 20.800 €` → Make spart `5.200 €/Jahr`. Die kritische Menge liegt bei `x_krit = 6.000 € / (0,65 € - 0,37 €) = 6.000 / 0,28 = 21.428,57 → ab 21.429 Brötchen/Jahr`.
