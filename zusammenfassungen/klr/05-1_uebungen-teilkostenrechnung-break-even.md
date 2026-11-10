---
id: klr-05-1-uebungen-break-even
kurs: klr
nr: 5.1
titel: Übung 3.1 Teilkostenrechnung & Break-even-Analyse: Alle Übungen im Konzern Zirbelnuss
quellen: KLR - Übung - 3.1 - Teilkostenrechnung - Break-even Analyse.pdf
seiten: 12
---

> **Kurz gesagt:** Das offizielle Übungsskript von Prof. Dr. Jochen Übelhör zu **Kapitel 3.1 (Teilkostenrechnung & Break-even-Analyse)** im **Konzern Zirbelnuss** (Folien 326–353). Es umfasst die komplette Musterlösung zur **mathematischen Kostenauflösung** in der Möbelfertigung (**Übung 1**), das vollständige Referenzmodell zum **Zirbenbett** (inkl. Zielgewinn, Sicherheitskoeffizient, Cash-Point & Sensitivitätsanalyse), die Einprodukt-Break-even-Analyse der **3D-Druck-Leuchte „Lumo"** (**Übung 2**) sowie den **Mehrprodukt-Break-even im Online-Shop** inkl. Sortimentsmix-Verschiebung durch eine Influencer-Kampagne (**Übung 3**).

## 🎯 Lernziele
- Mischkosten mithilfe des **Differenzenquotienten (Hoch-Tief-Methode)** in fixe und variable Bestandteile zerlegen und die **Kostenunterdeckung** bei rückläufiger Beschäftigung berechnen (**Übung 1**, S. 3–4 / Folien 326–328).
- Die **Einprodukt-Break-even-Analyse** mit allen Erweiterungen (**Zielgewinn, Sicherheitskoeffizient, Cash-Point, Sensitivitätsanalyse**) sicher beherrschen (**Zirbenbett & Übung 2**, S. 5–10 / Folien 337–346).
- Den **Gewinnhebel (Operating Leverage)** bei Preisänderungen quantifizieren und mit **Kapazitätsgrenzen** abgleichen (**Übung 2**, S. 9–10 / Folien 344–346).
- Eine **Mehrprodukt-Break-even-Analyse** bei konstantem Absatzmix über den **gewichteten durchschnittlichen Stückdeckungsbeitrag (`Ø db`)** und die **durchschnittliche DB-Quote** durchführen sowie Auswirkungen einer **Mix-Verschiebung** berechnen (**Übung 3**, S. 11–12 / Folien 351–353).

## 📖 Kerninhalte & Formelsammlung zur Übung

| Kennzahl | Formel | Bedeutung im Konzern Zirbelnuss |
|---|---|---|
| **Proportionaler Satz (`k_v`)** | `k_v = (K_2 - K_1) / (x_2 - x_1)` | Variable Kosten je Bezugsgrößeneinheit (Differenzenquotient) |
| **Fixkosten (`K_f`)** | `K_f = K_Gesamt - k_v * x` | Beschäftigungsunabhängige Bereitschaftskosten je Periode |
| **Stückdeckungsbeitrag (`db`)** | `db = p - k_v` | Beitrag einer verkauften Einheit zur Deckung der Fixkosten |
| **DB-Quote (`DBU-Faktor`)** | `DB-Quote = db / p = DB / U` | Prozentualer Anteil des Umsatzes, der als Deckungsbeitrag verbleibt |
| **Break-even-Menge (`x_BE`)** | `x_BE = K_f / db` | Kritische Absatzmenge mit `Gewinn = 0 €` (`DB = K_f`) |
| **Break-even-Umsatz (`U_BE`)** | `U_BE = x_BE * p = K_f / DB-Quote` | Kritischer Mindestumsatz zur vollen Fixkostendeckung |
| **Menge für Zielgewinn (`x_ZG`)** | `x_ZG = (K_f + G_Ziel) / db` | Benötigte Absatzmenge zum Erreichen eines Plangewinns `G_Ziel` |
| **Sicherheitskoeffizient (`S`)** | `S = (x_Plan - x_BE) / x_Plan` | Maximal verkraftbarer prozentualer Absatzrückgang vor Verlustzone |
| **Cash-Point (`x_Cash`)** | `x_Cash = (K_f - Abschreibungen) / db` | Liquiditäts-Gewinnschwelle (Deckung aller auszahlungswirksamen Kosten) |
| **Mehrprodukt-Break-even** | `x_BE,ges = K_f / Ø db` mit `Ø db = DB_ges / x_ges` | Gesamte Gewinnschwellenmenge bei konstantem Verkaufsverhältnis |

---

## 🧮 Vollständige Übungen & Musterlösungen

### 1. Übung 1: Kostenauflösung in der Möbelfertigung (S. 3–4 / Folien 326 & 328)
- **Ausgangssituation:** Aus dem BAB Q4/2026 (Kapitel 2.3) ist der Vollkosten-Fertigungsgemeinkostensatz der KST 100 Möbelfertigung bekannt: **`74,60 €/h`** (bei `2.000 h`). Um zu ermitteln, welcher Teil davon variabel und welcher fix ist, betrachtet das Controlling zwei Quartale:
  - **Q3/2026:** `1.600 h` Fertigungsstunden → `137.200 €` Fertigungsgemeinkosten
  - **Q4/2026:** `2.000 h` Fertigungsstunden → `149.200 €` Fertigungsgemeinkosten

#### Schritt-für-Schritt-Musterlösung:
- **a) Variable Fertigungsgemeinkosten je Stunde (`k_v`) über den Differenzenquotienten:**
  ```
  k_v = (149.200 € - 137.200 €) / (2.000 h - 1.600 h)
      = 12.000 € / 400 h
      = 30,00 €/h
  ```
- **b) Fixe Fertigungsgemeinkosten je Quartal (`K_f`):**
  - Einsetzen in Q4/2026: `K_f = 149.200 € - (2.000 h * 30,00 €/h) = 149.200 € - 60.000 € = 89.200 €`
  - *(Kontrollprobe mit Q3/2026: `137.200 € - 1.600 h * 30,00 €/h = 137.200 € - 48.000 € = 89.200 €` ✓)*
- **c) Lineare Kostenfunktion & Kostenprognose bei `1.800 h`:**
  - **Kostenfunktion:** `K(h) = 89.200 € + 30,00 €/h * h`
  - **Erwartete Kosten bei `1.800 h`:** `K(1.800) = 89.200 € + 30,00 €/h * 1.800 h = 89.200 € + 54.000 € = 143.200 €`
- **d) Zerlegung des Vollkostensatzes (`74,60 €/h`) & Kostenunterdeckung bei `1.600 h`:**
  - Bei Planbeschäftigung (`2.000 h`) besteht der Stundensatz von `74,60 €/h` aus:
    - **Variabler Satz:** `30,00 €/h`
    - **Fixkostenanteil:** `89.200 € / 2.000 h = 44,60 €/h` (`30,00 + 44,60 = 74,60 €/h`)
  - **Was passiert, wenn in Q3 nur `1.600 h` gearbeitet und mit `74,60 €/h` verrechnet werden?**
    - Verrechnete Gemeinkosten (auf Kostenträger): `1.600 h * 74,60 €/h = 119.360 €`
    - Tatsächliche (Soll-)Gemeinkosten bei `1.600 h`: `137.200 €`
    - **Kostenunterdeckung:** `119.360 € - 137.200 € = -17.840 €`
  - **Erkenntnis:** Der Vollkostensatz „proportionalisiert" Fixkosten künstlich. Sinkt die Beschäftigung um `400 h` unter das Planniveau (`2.000 h → 1.600 h`), bleiben genau `400 h * 44,60 €/h = 17.840 €` an Fixkosten ungedeckt!

---

### 2. Referenzbeispiel: Break-even-Analyse des Zirbenbetts (S. 5–8 / Folien 337–343)
Bevor Übung 2 startet, fasst das Übungsskript alle Werkzeuge der Break-even-Analyse am **Zirbenbett** (Planabsatz `x_Plan = 160 Betten`, Kapazität `200 Betten`) zusammen:

- **Grunddaten Zirbenbett (S. 5 / Folie 337):**
  - Verkaufspreis `p = 2.000 €`, variable Stückkosten `k_v = 1.200 €`
  - **Stückdeckungsbeitrag:** `db = 2.000 € - 1.200 € = 800 €/Bett` (**DB-Quote:** `800 / 2.000 = 40 %`)
  - **Fixkosten:** `K_f = 96.000 € / Jahr`
- **Basis-Break-even & Plangewinn (S. 5–6 / Folien 337–338):**
  1. **Break-even-Menge:** `x_BE = 96.000 € / 800 €/Bett = 120 Betten`
  2. **Break-even-Umsatz:** `U_BE = 120 Betten * 2.000 € = 240.000 €` *(oder: `96.000 € / 0,40 = 240.000 €`)*
  3. **Grafische Interpretation & Plangewinn bei 160 Betten:** Bis 120 Betten liegt das Zirbenbett in der Verlustzone; ab dem 121. Bett bringt jedes weitere Bett `800 €` Gewinn. Bei `160 Betten` beträgt der Plangewinn `(160 - 120) * 800 € = 40 * 800 € = 32.000 €`.
- **Drei Erweiterungen am Zirbenbett (S. 7 / Folie 341):**
  1. **Zielgewinn `40.000 €`:** `x_ZG = (96.000 € + 40.000 €) / 800 €/Bett = 136.000 / 800 = 170 Betten` *(innerhalb der Kapazität von 200 Betten machbar!)*.
  2. **Sicherheitskoeffizient:** `S = (160 - 120) / 160 = 40 / 160 = 25 %` *(der Absatz darf um bis zu 25 % einbrechen, bevor Verluste entstehen)*.
  3. **Cash-Point (Liquiditätsschwelle):** In den Fixkosten (`96.000 €`) stecken `24.000 €` nicht auszahlungswirksame Abschreibungen → `x_Cash = (96.000 € - 24.000 €) / 800 €/Bett = 72.000 / 800 = 90 Betten`.
- **Sensitivitätsanalyse: Wie empfindlich reagiert der Break-even? (S. 8 / Folie 343):**

| Szenario | Preis `p` | Variable Kosten `k_var` | Fixkosten `K_fix` | Stück-DB `db` | Break-even-Menge `x_BE` | Veränderung ggü. Basis |
|---|---|---|---|---|---|---|
| **Basis** | **2.000 €** | **1.200 €** | **96.000 €** | **800 €** | **120 Betten** | – |
| **Preis –10 %** | 1.800 € | 1.200 € | 96.000 € | 600 € (–25 %) | **160 Betten** | **+33,3 % (+40 Betten)** |
| **Holzpreis +10 % (`k_var +56 €`)** | 2.000 € | 1.256 € | 96.000 € | 744 € (–7 %) | **130 Betten** *(exakt 129,03)* | +8,3 % (+10 Betten) |
| **Messeauftritt (`K_fix +12.000 €`)** | 2.000 € | 1.200 € | 108.000 € | 800 € (±0 %) | **135 Betten** | +12,5 % (+15 Betten) |

> **Zentrale Erkenntnis (Folie 343):** Preisänderungen haben den stärksten Hebel! Schon **10 % Preisnachlass** (`-200 €`) zehren **25 % des Deckungsbeitrags** auf (`800 € → 600 €`) und lassen die Break-even-Menge von 120 auf 160 Betten hochschnellen.

---

### 3. Übung 2: Die Zirbel-Leuchte „Lumo" aus dem 3D-Drucker (S. 9–10 / Folien 344 & 346)
- **Ausgangsdaten (Geschäftsbereich 3D-Druck, Planjahr 2027):**
  - Verkaufspreis `p = 89,00 €`
  - Variable Kosten je Leuchte `k_v = 34,00 €`
  - Fixkosten pro Jahr `K_f = 33.000 €`
  - Maximale Jahreskapazität: `1.000 Stück`
  - Geplanter Absatz: `900 Stück`

#### Schritt-für-Schritt-Musterlösung:
- **a) Break-even-Menge und Break-even-Umsatz:**
  - **Stückdeckungsbeitrag:** `db = 89 € - 34 € = 55 €/Leuchte` *(DB-Quote: `55 / 89 ≈ 61,80 %`)*
  - **Break-even-Menge (`x_BE`):** `33.000 € / 55 €/Stück = 600 Stück`
  - **Break-even-Umsatz (`U_BE`):** `600 Stück * 89 € = 53.400 €`
- **b) Gewinn und Sicherheitskoeffizient bei Planabsatz (`900 Stück`):**
  - **Plangewinn (`G`):** `900 Stück * 55 € - 33.000 € = 49.500 € - 33.000 € = 16.500 €` *(oder über Überdeckungsmenge: `(900 - 600) * 55 € = 300 * 55 € = 16.500 €`)*
  - **Sicherheitskoeffizient (`S`):** `(900 - 600) / 900 = 300 / 900 = 33,3 %` *(der Absatz darf um ein Drittel einbrechen, bevor die Leuchte in die Verlustzone rutscht)*.
- **c) Benötigte Menge für einen Zielgewinn von `22.000 €` & kritische Würdigung:**
  - **Zielgewinn-Menge (`x_ZG`):** `(33.000 € + 22.000 €) / 55 €/Stück = 55.000 € / 55 € = 1.000 Stück`
  - **Was fällt auf?** `1.000 Stück` entspricht exakt **100 % der maximalen Produktionskapazität (`1.000 Stück`)**! Es gibt **keinerlei Kapazitätspuffer** mehr – jeder kleinste Maschinenstillstand, Ausschuss oder Minderabsatz verhindert das Erreichen des Zielgewinns.
- **d) Wettbewerber-Reaktion: Preissenkung auf `79,00 €` (`-10 €` bzw. `-11,2 %`):**
  - **Neuer Stückdeckungsbeitrag:** `db_neu = 79 € - 34 € = 45 €/Stück`
  - **Neue Break-even-Menge:** `x_BE,neu = 33.000 € / 45 €/Stück = 733,33 Stück → aufgerundet 734 Stück` *(da nur ganze Leuchten verkauft werden können!)*
  - **Neuer Gewinn bei Planabsatz (`900 Stück`):** `900 * 45 € - 33.000 € = 40.500 € - 33.000 € = 7.500 €`
  - **Erkenntnis:** Eine Preissenkung um rund **11 %** (`89 € → 79 €`) lässt den Gewinn um **mehr als die Hälfte (`-54,5 %`, von `16.500 €` auf `7.500 €`)** einbrechen! Um bei `79 €` wieder den alten Gewinn von `16.500 €` zu erzielen, müsste Zirbelnuss `(33.000 + 16.500) / 45 = 1.100 Stück` verkaufen – was über der Kapazitätsgrenze von `1.000 Stück` liegt!

---

### 4. Übung 3: Mehrprodukt-Break-even im Online-Shop (S. 11–12 / Folien 351 & 353)
- **Ausgangsdaten:** Der Online-Shop vertreibt drei Zirben-Produkte. Die gemeinsamen **Fixkosten** (Lager, Fotografie, Online-Marketing, Shop-Personal) betragen **`12.150 €` pro Monat**.

| Produkt | Verkaufspreis `p` | Variable Kosten `k_v` | Geplanter Absatz / Monat | Mix-Anteil am Gesamtabsatz (`1.600 Stk.`) |
|---|---|---|---|---|
| **Duftsäckchen** | 9,90 € | 3,90 € | 1.200 Stk. | `1.200 / 1.600 = 75,00 %` |
| **Zirbenkissen** | 39,00 € | 19,00 € | 300 Stk. | `300 / 1.600 = 18,75 %` |
| **Zirbenöl-Diffusor** | 59,00 € | 29,00 € | 100 Stk. | `100 / 1.600 = 6,25 %` |
| **Summe / Gesamt** | – | – | **1.600 Stk.** | **100,00 %** |

#### Schritt-für-Schritt-Musterlösung:
- **a) Stückdeckungsbeitrag (`db`), DB-Quote je Produkt & Gesamtdeckungsbeitrag:**
  - **Duftsäckchen:** `db = 9,90 € - 3,90 € = 6,00 €` | `DB-Quote = 6,00 / 9,90 = 60,61 % (60,6 %)` | `DB = 1.200 * 6,00 € = 7.200 €` | `Umsatz = 1.200 * 9,90 € = 11.880 €`
  - **Zirbenkissen:** `db = 39,00 € - 19,00 € = 20,00 €` | `DB-Quote = 20,00 / 39,00 = 51,28 % (51,3 %)` | `DB = 300 * 20,00 € = 6.000 €` | `Umsatz = 300 * 39,00 € = 11.700 €`
  - **Zirbenöl-Diffusor:** `db = 59,00 € - 29,00 € = 30,00 €` | `DB-Quote = 30,00 / 59,00 = 50,85 % (50,8 %)` | `DB = 100 * 30,00 € = 3.000 €` | `Umsatz = 100 * 59,00 € = 5.900 €`
  - **Gesamtwerte im Plan:**
    - **Gesamt-DB:** `7.200 € + 6.000 € + 3.000 € = 16.200 €`
    - **Gesamtumsatz:** `11.880 € + 11.700 € + 5.900 € = 29.480 €`
    - **Gewichteter Durchschnitts-DB (`Ø db`):** `16.200 € / 1.600 Stk. = 10,125 €/Stk.`
    - **Gewichtete Durchschnitts-DB-Quote (`Ø DB-Quote`):** `16.200 € / 29.480 € = 54,9525 %` *(in Tabelle gerundet `55,0 %`, für Umsatzformel `54,95 %`)*

- **b) Break-even-Menge gesamt und je Produkt (bei konstantem Produktmix):**
  - **Gesamte Break-even-Menge (`x_BE,ges`):**
    ```
    x_BE,ges = Fixkosten / Ø db = 12.150 € / 10,125 €/Stk. = 1.200 Stück (gesamt)
    ```
    *(Hinweis: `1.200 / 1.600 = 75 %` des Planabsatzes werden für den Break-even benötigt!)*
  - **Aufteilung auf die drei Produkte nach dem konstanten Mix-Verhältnis (`12 : 3 : 1` bzw.jeweils `75 %` der Planmenge):**
    - **Duftsäckchen (`75,00 %`):** `1.200 Stk. * 75,00 % = 900 Stück` *(Probe DB: `900 * 6 € = 5.400 €`)*
    - **Zirbenkissen (`18,75 %`):** `1.200 Stk. * 18,75 % = 225 Stück` *(Probe DB: `225 * 20 € = 4.500 €`)*
    - **Zirbenöl-Diffusor (`6,25 %`):** `1.200 Stk. * 6,25 % = 75 Stück` *(Probe DB: `75 * 30 € = 2.250 €`)*
    - *(Kontrollsumme DB bei Break-even: `5.400 € + 4.500 € + 2.250 € = 12.150 € = Fixkosten` ✓)*

| Produkt | `db` | `DB-Quote` | Plan-Absatz | Gesamt-`DB` | Break-even-Menge |
|---|---|---|---|---|---|
| **Duftsäckchen** | 6,00 € | 60,6 % | 1.200 | 7.200 € | **900** |
| **Zirbenkissen** | 20,00 € | 51,3 % | 300 | 6.000 € | **225** |
| **Zirbenöl-Diffusor** | 30,00 € | 50,8 % | 100 | 3.000 € | **75** |
| **Summe / Ø** | **Ø 10,125 €** | **Ø 54,95 % (55,0 %)** | **1.600** | **16.200 €** | **1.200** |

- **c) Break-even-Umsatz (`U_BE`):**
  - Über die durchschnittliche DB-Quote: `U_BE = 12.150 € / 0,549525 = 22.110 €`
  - *(Alternativ exakt über die Break-even-Stückzahlen: `900 * 9,90 € + 225 * 39,00 € + 75 * 59,00 € = 8.910 € + 8.775 € + 4.425 € = 22.110 €` oder `75 % * 29.480 € = 22.110 €` ✓)*

- **d) Gewinn und Sicherheitskoeffizient im Plan:**
  - **Plangewinn:** `G = 16.200 € - 12.150 € = 4.050 € / Monat`
  - **Sicherheitskoeffizient:** `S = (1.600 - 1.200) / 1.600 = 400 / 1.600 = 25,0 %` *(da bei `1.200` von `1.600` Stück bereits `75 %` des Planvolumens für die Kostendeckung reichen, beträgt der Sicherheitspuffer `100 % - 75 % = 25 %`)*.

- **e) Influencer-Kampagne verdoppelt den Absatz der Diffusoren (`100 → 200 Stück`):**
  - **Neuer Gesamtabsatz:** `1.200 + 300 + 200 = 1.700 Stück`
  - **Neuer Gesamt-DB:** `7.200 € + 6.000 € + (200 * 30 €) = 19.200 €` *(+3.000 € durch 100 zusätzliche Diffusoren)*
  - **Neuer gewichteter Durchschnitts-DB (`Ø db_neu`):** `19.200 € / 1.700 Stk. = 11,2941 €/Stk. (≈ 11,29 €)`
  - **Neue Break-even-Menge gesamt:** `12.150 € / 11,2941 € = 1.075,78 Stück → 1.076 Stück`
  - **Neuer Monatsgewinn:** `19.200 € - 12.150 € = 7.050 €` *(+3.000 € bzw. **+74,1 % mehr Gewinn** bei nur +6,25 % mehr Stückabsatz!)*
  - **Erkenntnis:** Weil der Diffusor mit `30 €` den höchsten absoluten Stückdeckungsbeitrag besitzt, verbessert sein höherer Mix-Anteil den durchschnittlichen Deckungsbeitrag je verkauftem Artikel (`10,125 € → 11,29 €`). Dadurch **sinkt die Break-even-Gesamtmenge** von `1.200` auf `1.076 Stück`!

---

## ⚠️ Klausurfallen & typische Fehler
- **Aufrunden bei der Break-even-Menge:** Ergibt `K_f / db` eine Dezimalzahl wie `733,33 Stück` (Übung 2d) oder `1.075,78 Stück` (Übung 3e), muss für ganze verkaufbare Einheiten immer **auf die nächste ganze Zahl aufgerundet** werden (`734 Stück` bzw. `1.076 Stück`), da bei Abrundung (`733 Stück`) noch ein kleiner Restverlust übrig bliebe!
- **Mehrprodukt-Durchschnitts-DB niemals ungewichtet mitteln:** In Übung 3 wäre das einfache arithmetische Mittel `(6 + 20 + 30) / 3 = 18,67 €` **komplett falsch**, weil vom Duftsäckchen (`6 €`) zwölfmal so viele Einheiten verkauft werden wie vom Diffusor (`30 €`). Immer **`Gesamt-DB / Gesamtabsatzmenge`** (`16.200 € / 1.600 Stk. = 10,125 €`) rechnen!
- **Rundungsfalle beim Mehrprodukt-Break-even-Umsatz:** Nutzt man in Übung 3c die grob gerundete DB-Quote `55,0 %`, erhält man `12.150 / 0,55 = 22.090,91 €` statt der exakten **`22.110,00 €`**. Sicherer Klausurtrick: Multipliziere einfach die exakten Break-even-Stückzahlen (`900`, `225`, `75`) mit ihren Verkaufspreisen oder nutze den exakten Quotienten `12.150 € * (29.480 € / 16.200 €) = 22.110 €`!
- **Abschreibungen beim Cash-Point abziehen, Zielgewinn addieren:**
  - **Zielgewinn:** Zähler wird **größer** (`K_f + G_Ziel`), weil mehr verdient werden muss.
  - **Cash-Point:** Zähler wird **kleiner** (`K_f - Abschreibungen`), weil Abschreibungen in der laufenden Periode keinen Zahlungsmittelabfluss verursachen.

## 🧠 Merkhilfen
- **Differenzenquotient (Übung 1):** *„Delta Kosten durch Delta Stunden enttarnt die variablen Kosten; der Rest zum Gesamtwert ist immer der Fixkostenblock."*
- **Preissenkungs-Schock (Übung 2d):** *„Rabatte schlagen ungebremst 1:1 auf den Stück-DB durch – 11 % weniger Preis frisst über 50 % vom Gewinn!"*
- **Mehrprodukt-Mix (Übung 3):** *„Erst das Paket schnüren (`Ø db = Gesamt-DB / Gesamtmenge`), dann durch `Ø db` teilen, danach mit den Mix-Prozenten wieder auf die Einzelprodukte verteilen."*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Differenzenquotient | Verfahren der Kostenauflösung: `k_v = (K_2 - K_1) / (x_2 - x_1)`. |
| Fixkostenproportionalisierung | Fehler der Vollkostenrechnung, fixe Kosten über Stundensätze wie variable Kosten zu verrechnen. |
| Cash-Point | Liquiditätspunkt: Absatzmenge, ab der alle auszahlungswirksamen Kosten gedeckt sind (`(K_f - Abschr.) / db`). |
| Sicherheitskoeffizient | Prozentualer Puffer zwischen Planabsatz und Break-even-Menge (`(x_Plan - x_BE) / x_Plan`). |
| Gewichteter Durchschnitts-DB (`Ø db`) | `DB_gesamt / Absatzmenge_gesamt`; Schlüsselgröße für den Mehrprodukt-Break-even bei konstantem Mix. |

## ✅ Selbsttest
**F:** Warum entsteht in Übung 1d bei einem Rückgang der Fertigungsstunden von 2.000 h auf 1.600 h eine Kostenunterdeckung von genau 17.840 €?
**A:** Weil im Vollkostensatz von `74,60 €/h` neben `30,00 €/h` variablen Kosten auch `44,60 €/h` anteilige Fixkosten (`89.200 € / 2.000 h`) stecken. Fehlen 400 Stunden zur Planbeschäftigung, werden `400 h * 44,60 €/h = 17.840 €` Fixkosten nicht auf die Kostenträger verrechnet (`119.360 €` verrechnet vs. `137.200 €` Ist-/Sollkosten).

**F:** Wie berechnet man den Cash-Point des Zirbenbetts (`K_f = 96.000 €`, davon `24.000 €` Abschreibungen, `db = 800 €`) und was sagt das Ergebnis aus?
**A:** `x_Cash = (96.000 € - 24.000 €) / 800 €/Bett = 72.000 € / 800 € = 90 Betten`. Ab 90 verkauften Betten sind alle laufenden Auszahlungen gedeckt (kein negativer Cashflow mehr), auch wenn bilanziell wegen der Abschreibungen erst ab 120 Betten ein Gewinn entsteht.

**F:** Warum ist in Übung 2c ein Zielgewinn von 22.000 € für die 3D-Druck-Leuchte „Lumo" operativ hochriskant, obwohl er rechnerisch erreichbar ist?
**A:** Für 22.000 € Zielgewinn müssen `(33.000 € + 22.000 €) / 55 € = 1.000 Leuchten` produziert und verkauft werden. Das entspricht exakt 100 % der Maximalkapazität (1.000 Stück) – es gibt also null Kapazitätspuffer für Ausfälle oder Nachfrageschwankungen.

**F:** Wie ermittelt man in Übung 3b die Break-even-Menge für die drei Online-Shop-Produkte und warum sinkt die gesamte Break-even-Menge in Aufgabe 3e durch die Influencer-Kampagne?
**A:** Man teilt die Fixkosten (`12.150 €`) durch den gewichteten Durchschnitts-DB (`Ø db = 16.200 € / 1.600 Stk. = 10,125 €`) und erhält `1.200 Stück` gesamt, die im konstanten Mix (`75 % / 18,75 % / 6,25 %`) auf `900` Duftsäckchen, `225` Kissen und `75` Diffusoren aufgeteilt werden. Verdoppelt sich der Diffusor-Absatz (`db = 30 €`), steigt der gewichtete `Ø db` auf `11,29 €`, sodass bereits `1.076 Stück` zur Fixkostendeckung ausreichen.
