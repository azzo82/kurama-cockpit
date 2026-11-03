---
id: klr-05-teilkostenrechnung-break-even
kurs: klr
nr: 5
titel: Kapitel 3.1 & 3.2 Teilkostenrechnung: Grundlagen, Deckungsbeitrag & Break-even-Analyse (Ein- & Mehrprodukt)
quellen: KLR - Skript 2026-WS - Kapitel 3.1 Teilkostenrechnung - Grundlagen und Break-even.pdf
seiten: 46
---

> **Kurz gesagt:** Warum lehnt die Vollkostenrechnung profitable Zusatzaufträge fälschlich ab und treibt Unternehmen bei Absatzrückgang in eine Preiserhöhungs-Todesspirale? Dieses Skript von Prof. Dr. Jochen Übelhör führt in die **Teilkosten- und Deckungsbeitragsrechnung** ein, löst Mischkosten über den Differenzenquotienten auf und berechnet die komplette **Break-even-Analyse** (Gewinnschwelle, DB-Quote, Zielgewinn, Sicherheitskoeffizient, Cash-Point, Sensitivitätsanalyse sowie **Mehrprodukt-Break-even**) anhand aller Vorlesungs- und Übungsfälle im Konzern Zirbelnuss.

## 🎯 Lernziele
- Die zwei Kardinalfehler der Vollkostenrechnung (**Gemeinkostenschlüsselung** & **Fixkostenproportionalisierung**) sowie die Fixkostendegression erklären (S. 11–15).
- Fixe, variable, sprungfixe und **Mischkosten** unterscheiden und Mischkosten mittels **Differenzenquotient** auflösen (S. 14–15, Übung 1 S. 24–25).
- Kosten-, Erlös- und Gewinnfunktionen aufstellen, **variable Einzel- UND variable Gemeinkosten** korrekt ansetzen und einstufige vs. mehrstufige DB-Rechnungen abgrenzen (S. 16–23).
- Im **Einproduktfall** Break-even-Menge, Break-even-Umsatz, DB-Quote, Zielgewinn-Menge, Sicherheitskoeffizient, Cash-Point und Preissensitivität sicher berechnen (S. 31–39).
- Im **Mehrproduktunternehmen** den gewichteten Stück-DB (`Ø db`) sowie die durchschnittliche DB-Quote über einen konstanten Produktmix bestimmen und Mix-Verschiebungen analysieren (S. 40–46).

## 📖 Kerninhalte

### 1. Kritik an der Vollkostenrechnung & Kostenverhalten (S. 6–15)
- **Zwei Hauptmängel der Vollkostenrechnung (S. 11):**
  1. **Gemeinkostenschlüsselung:** Gemeinkosten werden über Zuschlagssätze auf Produkte verteilt, obwohl keine direkte Ursache-Wirkungs-Beziehung zum einzelnen Stück besteht.
  2. **Fixkostenproportionalisierung:** Zeitabhängige Fixkosten (Hallenmiete, Meistergehalt, zeitlineare AfA) werden pro Stück verrechnet, als würden sie mit der Menge wachsen.
  - *Folgen für Managemententscheidungen:*
    - **Ablehnung lohnender Zusatzaufträge (S. 6):** Bietet das *Hotel Alpenhof* bei freier Kapazität `12 €/Brett` (Vollkosten `15 €`), sagt die Vollkostenrechnung „Nein" – obwohl jedes Brett über den variablen Kosten zusätzliche Fixkosten deckt!
    - **Kalkulatorische Todesspirale bei Absatzrückgang (S. 13):** Sinkt der Absatz (z. B. Zirbenbett von 160 auf 80 Stück), steigen die rechnerischen Vollkosten je Stück von `1.800 €` auf `2.400 €`. Erhöht das Management daraufhin den Verkaufspreis, bricht der Absatz noch weiter ein (*„man kalkuliert sich aus dem Markt"*).

- **Vier Kostenverläufe bei Beschäftigungsänderung (S. 14):**
  1. **Fixe Kosten (`K_fix`):** Mengenunabhängige Kosten der Betriebsbereitschaft (Hallenmiete, Meistergehalt, CNC-Abschreibung).
  2. **Variable Kosten (`K_var`):** Steigen proportional mit der Menge `x` (Zirbenholz, Beschläge, Akkordlohn).
  3. **Sprungfixe (intervallfixe) Kosten:** Innerhalb einer Kapazitätsstufe konstant, springen ab einer Schwelle treppenförmig nach oben (zweite Schicht, zusätzlicher 3D-Drucker/Lieferwagen).
  4. **Mischkosten:** Enthalten einen fixen Grundsockel plus variablen Verbrauchsanteil (z. B. Strom mit Grundgebühr + Arbeitspreis, Instandhaltung).
     - **Auflösung per Differenzenquotient (S. 24):**
       `k_var = (K_2 - K_1) / (x_2 - x_1)` und `K_fix = K_1 - k_var * x_1`

- **Gesamt- vs. Stückbetrachtung (S. 15 – beliebte Prüfungsmatrix!):**
  | Kostenart | Gesamtbetrachtung (pro Periode) | Stückbetrachtung (pro Einheit `x`) |
  |---|---|---|
  | **Fixe Kosten** | **Konstant** (`K_fix`, z. B. 96.000 €) | **Sinkend (hyperbolisch)** (`K_fix / x` → *Fixkostendegression / Economies of Scale*) |
  | **Variable Kosten** | **Proportional steigend** (`k_var * x`) | **Konstant** (`k_var`, z. B. 1.200 €/Bett) |

---

### 2. Grundidee & Formeln der Deckungsbeitragsrechnung (S. 16–23)
- **Grundprinzip der Teilkostenrechnung (S. 16–18):**
  - Nur die **variablen Kosten** werden den Kostenträgern zugerechnet – und zwar **alle variablen Kosten: variable Einzelkosten UND variable Gemeinkosten** (echte wie CNC-Maschinenstrom sowie unechte wie Leim/Schleifpapier)!
  - Die **Fixkosten** werden **nicht geschlüsselt**, sondern wandern „en bloc" in die Periodenergebnisrechnung.
- **Zentrale Funktionsgleichungen (S. 17, 20):**
  - **Stückdeckungsbeitrag:** `db = p - k_var`
  - **Gesamtdeckungsbeitrag:** `DB = E(x) - K_var(x) = db * x`
  - **Erlösfunktion:** `E(x) = p * x` | **Kostenfunktion:** `K(x) = K_fix + k_var * x`
  - **Gewinnfunktion (Betriebsergebnis):** `G(x) = db * x - K_fix = DB - K_fix`
- **Systeme der Deckungsbeitragsrechnung (S. 23):**
  1. **Einstufige DB-Rechnung (*Direct Costing*):** Abzug sämtlicher Fixkosten als ein einziger Gesamtblock vom Gesamt-DB.
  2. **Mehrstufige DB-Rechnung (*Stufenweise Fixkostendeckungsrechnung*):** Gestaffelter Abzug von Produktfixkosten → Produktgruppenfixkosten → Bereichsfixkosten → Unternehmensfixkosten.

---

### 3. Break-even-Analyse: Einprodukt- & Mehrproduktmodell (S. 31–46)
Der **Break-even-Point (Gewinnschwelle)** ist die Absatzmenge, bei der der Gesamtdeckungsbeitrag exakt die Fixkosten deckt (`G(x) = 0` bzw. `DB = K_fix` bzw. `Umsatz = Gesamtkosten`).

- **6 Prämissen der Break-even-Analyse (S. 31):** (1) Lineare Kosten-/Erlösverläufe (`p`, `k_var` konstant), (2) eindeutige Kostenspaltung in fix/variabel, (3) Produktion = Absatz (keine Lageränderung), (4) Einproduktbetrieb oder **konstanter Produktmix**, (5) kurzfristiger Horizont (konstante Kapazität/`K_fix`), (6) sichere Daten.

#### Alle Klausurformeln der Break-even-Analyse auf einen Blick (S. 32, 35, 41)
```
EINPRODUKT-FORMELN:
• Break-even-Menge:        x_BE = K_fix / db
• Deckungsbeitragsquote:   DB-Quote = db / p = DB / Umsatz
• Break-even-Umsatz:       U_BE = x_BE * p  =  K_fix / DB-Quote
• Zielgewinn-Menge:        x_G  = (K_fix + G_Ziel) / db
• Sicherheitskoeffizient:  S    = (x_Plan - x_BE) / x_Plan     [in %]
• Cash-Point (Liquidität): x_CP = (K_fix - Abschreibungen) / db

MEHRPRODUKT-SCHEMA (4 Schritte bei konstantem Produktmix):
1. Je Produkt i:           db_i = p_i - k_var,i   und   DB_i = db_i * x_i
2. Gewichtete Ø-Werte:     Ø db = (Summe DB_i) / (Summe x_i)
                           Ø DB-Quote = (Summe DB_i) / (Summe Umsatz_i)
3. Gesamt-Break-even:      x_BE,ges = K_fix / Ø db      und   U_BE,ges = K_fix / Ø DB-Quote
4. Produkt-Aufteilung:     x_BE,i = x_BE,ges * Mix-Anteil_i   (mit Mix-Anteil_i = x_i / Summe x_i)
```

## 🧮 Beispiele & Rechenwege (Alle Vorlesungs- & Übungsaufgaben gelöst!)

### 1. Leitbeispiel: Zirbenbett „Lechhausen" & Sensitivitätsanalyse (S. 12–22, 33–37)
- **Daten:** `p = 2.000 €`; Kapazität = `200 Betten`, Planabsatz = `160 Betten`; `K_fix = 96.000 €/Jahr`.
- **Variable Stückkosten (`S. 21`):** Holz `560 €` + Beschläge/Öl `100 €` + Lohn (`6 h * 60 € = 360 €`) + **variable FGK** (`6 h * 30 € = 180 €`) = **`k_var = 1.200 €`** → **`db = 800 €/Bett`**, **`DB-Quote = 800 / 2.000 = 40 %`**.
- **Ergebnisse:**
  - **Plangewinn (160 Stk.):** `DB = 160 * 800 € = 128.000 €` → `G = 128.000 € - 96.000 € = 32.000 €`.
  - **Break-even:** `x_BE = 96.000 € / 800 € = 120 Betten`; `U_BE = 96.000 € / 0,40 = 240.000 €`.
  - **Zielgewinn `40.000 €`:** `x_G = (96.000 + 40.000) / 800 = 170 Betten` *(machbar, da `< 200` Kapazität)*.
  - **Sicherheitskoeffizient:** `S = (160 - 120) / 160 = 25 %` *(Absatz darf um bis zu 25 % / 40 Betten einbrechen, bevor Verlust entsteht)*.
  - **Sensitivitätsanalyse (`S. 37` – Preis hat den stärksten Hebel!):**
    - *Preis –10 % (`p = 1.800 €`):* `db = 600 €` → `x_BE = 96.000 / 600 = 160 Betten` (**+33,3 %** höherer Break-even, Plangewinn fällt auf `0 €`!).
    - *Holzpreis +10 % (`k_var = 1.256 €`):* `db = 744 €` → `x_BE = 96.000 / 744 = 129,03 → 130 Betten` (**+10 Stk.**).
    - *Messeauftritt (`K_fix = 108.000 €`, +12,5 %):* `db = 800 €` → `x_BE = 108.000 / 800 = 135 Betten` (**+12,5 %**).

---

### 2. Übung 1: Kostenauflösung in der Möbelfertigung (S. 24–25)
- **Gegeben:** Vollkosten-Stundensatz aus Kap. 2.3 = `74,60 €/h`. Beobachtungen: **Q3:** `1.600 h` → `137.200 € FGK`; **Q4:** `2.000 h` → `149.200 € FGK`.
- **Lösung:**
  - **a) Variable FGK/h:** `k_var = (149.200 - 137.200) / (2.000 - 1.600) = 12.000 € / 400 h = 30,00 €/h`.
  - **b) Fixe FGK/Quartal:** `K_fix = 137.200 € - (30 €/h * 1.600 h) = 89.200 €`.
  - **c) Kosten bei `1.800 h`:** `K(1.800) = 89.200 € + 30 * 1.800 = 143.200 €`.
  - **d) Zerlegung von `74,60 €/h` & Unterdeckung bei `1.600 h`:** Bei Planbeschäftigung `2.000 h` besteht `74,60 €/h` aus **`30,00 €/h` variabel + `44,60 €/h` Fixkostenanteil** (`89.200 / 2.000`). Sinkt die Auslastung auf `1.600 h`, verrechnet die Vollkostenrechnung nur `1.600 * 74,60 € = 119.360 €`, während tatsächlich `137.200 €` anfallen → **`17.840 €` Kostenunterdeckung** (`400 fehlende Std. * 44,60 €/h`)!

---

### 3. Übung 2: 3D-Druck-Zirbelleuchte „Lumo" (S. 38–39)
- **Gegeben:** `p = 89 €`, `k_var = 34 €` → **`db = 55 €`**, `K_fix = 33.000 €`, Kapazität = `1.000 Stk.`, Planabsatz = `900 Stk.`
- **Lösung:**
  - **a) Break-even:** `x_BE = 33.000 / 55 = 600 Stk.`; `U_BE = 600 * 89 € = 53.400 €` (`DB-Quote ≈ 61,80 %`).
  - **b) Plan-Ergebnis (900 Stk.):** `G = 900 * 55 € - 33.000 € = 16.500 €`; `S = (900 - 600) / 900 = 33,33 %`.
  - **c) Zielgewinn `22.000 €`:** `x_G = (33.000 + 22.000) / 55 = 1.000 Stk.` → **Auffälligkeit:** Entspricht **exakt 100 % der Kapazitätsgrenze** (kein Puffer; mehr Gewinn erfordert weiteren Drucker = sprungfixe Kosten!).
  - **d) Preissenkung auf `79 €`:** `db_neu = 79 - 34 = 45 €` → `x_BE,neu = 33.000 / 45 = 733,33 → 734 Stk.` *(aufgerundet!)*; Plangewinn bei 900 Stk. halbiert sich fast auf `7.500 €`.

---

### 4. Mehrprodukt-Break-even: Zirbel-Café (S. 42–43) & Übung 3 Online-Shop (S. 44–45)
- **Vorlesungsbeispiel Zirbel-Café (`K_fix = 4.035 €/Woche`):**
  - Espresso (`600 Stk.`, `db = 2,30 €`, `DB = 1.380 €`) + Cappuccino (`800 Stk.`, `db = 3,20 €`, `DB = 2.560 €`) + Latte (`400 Stk.`, `db = 3,60 €`, `DB = 1.440 €`) → Summe `x = 1.800 Tassen`, Umsatz `6.600 €`, **`DB_ges = 5.380 €`**.
  - `Ø db = 5.380 / 1.800 = 2,9889 €` (≈ 2,99 €); `Ø DB-Quote = 5.380 / 6.600 = 81,515 %`.
  - *Ungerundet gerechnet:* `x_BE = 4.035 / (5.380 / 1.800) = 1.350 Tassen` (`450` Espresso, `600` Cappuccino, `300` Latte); `U_BE = 4.950 €`; `S = 25 %`.

- **Übung 3: Online-Shop (`K_fix = 12.150 €/Monat`) + Influencer-Effekt:**
  | Produkt | `p_i` | `k_v,i` | `db_i` | DB-Quote | Plan `x_i` | Mix | Umsatz `U_i` | `DB_i` | `x_BE,i` |
  |---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
  | **Duftsäckchen** | 9,90 € | 3,90 € | **6,00 €** | 60,61 % | 1.200 | 75,00 % | 11.880 € | 7.200 € | **900** |
  | **Zirbenkissen** | 39,00 € | 19,00 € | **20,00 €** | 51,28 % | 300 | 18,75 % | 11.700 € | 6.000 € | **225** |
  | **Diffusor** | 59,00 € | 29,00 € | **30,00 €** | 50,85 % | 100 | 6,25 % | 5.900 € | 3.000 € | **75** |
  | **Summe / Ø** | – | – | **Ø 10,125 €** | **Ø 54,95 %** | **1.600** | **100 %** | **29.480 €** | **16.200 €** | **1.200** |

  - **b/c/d) Basis-Ergebnisse:** `x_BE = 12.150 / 10,125 = 1.200 Stk.`; `U_BE = 22.110 €`; Plangewinn `G = 16.200 - 12.150 = 4.050 €`; `S = (1.600 - 1.200) / 1.600 = 25 %`.
  - **e) Influencer-Kampagne verdoppelt Diffusor-Absatz (`100 → 200 Stk.`):**
    - Neue Summen: `x = 1.700 Stk.`, `U = 35.380 €`, `DB = 19.200 €`, Gewinn = **`7.050 €`** (`+3.000 €`), `S_neu = 36,72 %`.
    - **Spannender Gegenlaufeffekt:** Da der Diffusor den höchsten Stück-DB (`30 €`), aber die niedrigste prozentuale DB-Quote (`50,85 %`) besitzt, steigt `Ø db` auf `11,294 €` (**Break-even-Menge sinkt** auf `1.076 Stk.`), während `Ø DB-Quote` leicht auf `54,27 %` fällt (**Break-even-Umsatz steigt** leicht auf `22.388,91 €`)!

## ⚠️ Klausurfallen & typische Fehler
- **Variable Gemeinkosten vergessen:** „Gemeinkosten = fix" ist **falsch**! Variable Gemeinkosten (z. B. `30 €/h` variable FGK beim Zirbenbett) gehören zwingend in `k_var`!
- **Rundungsfalle beim Mehrprodukt-Break-even:** Prof. Übelhör wählt die Zahlen so, dass ungerundet glatte Ergebnisse entstehen (`1.350 Tassen`, `1.200 Stück`). Schreibe `Ø db ≈ 2,99 €` hin, aber **rechne im Taschenrechner immer mit dem exakten Bruch weiter**!
- **Aufrunden bei Stückgütern:** Ergibt `x_BE` z. B. `129,03 Betten` oder `733,33 Leuchten`, wird bei unteilbaren Produkten immer **auf die nächste ganze Zahl aufgerundet** (`130` bzw. `734`), da bei `129` bzw. `733` noch ein kleiner Verlust verbleibt!
- **Kapazitätscheck vergessen:** Prüfe bei Zielgewinn-Aufgaben immer, ob `x_G <= Kapazitätsgrenze` gilt!

## 🧠 Merkhilfen
- **DB-Stufenlogik:** *Erst füllt der Deckungsbeitrag den Fixkosten-Topf bis zum Rand (= Break-even), jeder Tropfen darüber hinaus ist reiner Gewinn!*
- **Cash-Point-Formel:** *Abschreibungen kosten dieses Jahr kein Bargeld – für den Liquiditätspunkt aus `K_fix` herausrechnen!*
- **Preishebel:** *1 € Preissenkung schlägt 1:1 ungebremst auf den Stück-DB durch!*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Fixkostenproportionalisierung | Fehler der VKR, fixe Periodenkosten rechnerisch in konstante Stückkosten umzuwandeln. |
| Stückdeckungsbeitrag (`db`) | Differenz aus Verkaufspreis und sämtlichen variablen Stückkosten (`p - k_var`). |
| Break-even-Point (`x_BE`) | Gewinnschwellenmenge (`K_fix / db`), ab der das Betriebsergebnis positiv wird. |
| DB-Quote (Deckungsgrad) | Prozentualer Anteil des Deckungsbeitrags am Umsatz (`db / p = DB / U`). |
| Sicherheitskoeffizient (`S`) | Prozentualer maximaler Absatzrückgang bis zum Erreichen der Verlustzone. |
| Cash-Point (`x_CP`) | Liquiditätsschwelle (`(K_fix - AfA) / db`), ab der alle auszahlungswirksamen Kosten gedeckt sind. |

## ✅ Selbsttest
**F:** Warum kann die Vollkostenrechnung bei einem Nachfragerückgang zu einer gefährlichen „Todesspirale" in der Preispolitik führen?
**A:** Weil die konstanten Fixkosten bei sinkender Menge auf weniger Stücke verteilt werden, wodurch die kalkulierten Selbstkosten pro Stück steigen. Erhöht das Unternehmen daraufhin die Preise, sinkt die Nachfrage weiter und die Stückkosten steigen erneut.

**F:** Welche Kostenbestandteile fließen in der Teilkostenrechnung in die variablen Stückkosten `k_var` ein?
**A:** Sämtliche beschäftigungsabhängigen (variablen) Kosten – also sowohl die variablen Einzelkosten (z. B. Rohholz, Akkordlohn) als auch die echten und unechten variablen Gemeinkosten (z. B. Maschinenstrom, Leim/Schleifpapier).

**F:** Ein Produkt hat `p = 100 €`, `k_var = 60 €`, `K_fix = 80.000 €` (darin `20.000 €` Abschreibungen) und einen Planabsatz von `2.500 Stück`. Berechnen Sie `x_BE`, `U_BE`, `S` und den `Cash-Point`!
**A:** `db = 40 €`, `DB-Quote = 40 %`. `x_BE = 80.000 / 40 = 2.000 Stück`; `U_BE = 2.000 * 100 € = 200.000 €`; `S = (2.500 - 2.000) / 2.500 = 20 %`; `Cash-Point = (80.000 - 20.000) / 40 = 1.500 Stück`.

**F:** Wie berechnet man die Break-even-Menge in einem Mehrproduktunternehmen und welche zentrale Annahme muss dafür gelten?
**A:** Man teilt die gesamten Fixkosten durch den mengengewichteten Durchschnitts-Stückdeckungsbeitrag (`Ø db = Summe DB_i / Summe x_i`) und teilt `x_BE` anschließend gemäß den Mengenanteilen auf die Einzelprodukte auf. Zentrale Annahme ist ein **konstanter Produktmix** (konstantes Mengenverhältnis der Produkte).

**F:** Warum kann in einem Mehrproduktbetrieb bei einer Mix-Verschiebung gleichzeitig die Break-even-Menge sinken und der Break-even-Umsatz steigen?
**A:** Wenn der Absatzanteil eines hochpreisigen Produkts wächst, das zwar einen überdurchschnittlich hohen absoluten Stück-DB in Euro (`Ø db` steigt → `x_BE` sinkt), aber gleichzeitig eine unterdurchschnittliche prozentuale DB-Quote (`Ø DB-Quote` sinkt → `U_BE` steigt) aufweist.
