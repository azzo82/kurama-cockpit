---
id: klr-07-plankostenrechnung-abweichungsanalyse
kurs: klr
nr: 7
titel: Kapitel 3.4 Teilkostenrechnung: Starre & Flexible Plankostenrechnung, Kostenplanung & Abweichungsanalyse
quellen: KLR - Skript 2026-WS - Kapitel 3.4 Teilkostenrechnung - Plankostenrechnung.pdf
seiten: 32
---

> **Kurz gesagt:** Hat die Möbelfertigung im 1. Quartal 2027 mit `146.000 €` Istkosten bei `1.800` Arbeitsstunden wirklich unwirtschaftlich gearbeitet – und hat die Leiterin des 3D-Drucks recht, wenn sie sich bei Überbeschäftigung über eine scheinbare Kostenunterschreitung freut? Dieses abschließende Kapitel-3-Skript von Prof. Dr. Jochen Übelhör (Folien 413–448) zeigt den 5-stufigen Aufbau der **betrieblichen Kostenplanung**, vergleicht **starre Plankostenrechnung**, **flexible Plankostenrechnung auf Vollkostenbasis** und **Grenzplankostenrechnung** und zerlegt Kostenabweichungen präzise in **Beschäftigungs-, Verbrauchs-, Mengen- und Preisabweichungen**.

## 🎯 Lernziele
- Die Systeme der Kostenrechnung nach **Zeitbezug (Ist-, Normal-, Plankosten)** und **Umfang (Voll- vs. Teilkosten)** einordnen sowie **Ist-, Normal-, Plan- und Sollkosten** sauber abgrenzen (S. 5–6).
- Den **5-stufigen Ablauf der Kostenplanung** (Absatz-, Produktions-, Kapazitäts-, Kostenstellen- und Ergebnisplanung) inkl. der Berechnung von **Leerkosten** beherrschen (S. 8–14).
- Eine **starre Plankostenrechnung** durchführen und erklären, warum ihre Gesamtabweichung für die Kostenkontrolle bei Beschäftigungsschwankungen unbrauchbar ist (S. 15–18).
- In der **flexiblen Plankostenrechnung** die **Sollkosten (`K_Soll`)** berechnen und die Gesamtabweichung in **Beschäftigungsabweichung (`ΔB`)** und **Verbrauchsabweichung (`ΔV`)** zerlegen (S. 19–21, **Übung 10 3D-Druck** S. 23–25).
- Die Verbrauchsabweichung über den Zwischenschritt **`K_ip` (Istmenge zu Planpreisen)** weiter in **Mengenabweichung** und **Preisabweichung** aufspalten und die Verantwortlichkeiten (Fertigung vs. Einkauf) zuordnen (S. 22, **Übung 11 Zirbenholz** S. 26–28).

---

## 📖 Kerninhalte

### 1. Einordnung & Grundbegriffe der Plankostenrechnung (S. 5–7 / Folien 417–419)

- **Matrix der Kostenrechnungssysteme (S. 5 / Folie 417):**
  | Umfang \ Zeitbezug | **Istkosten** *(vergangenheitsorientiert)* | **Normalkosten** *(vergangenheitsorientiert, geglättet)* | **Plankosten** *(zukunftsorientiert)* |
  |---|---|---|---|
  | **Vollkostenrechnung** | Vollkostenrechnung auf Istkostenbasis | Vollkostenrechnung auf Normalkostenbasis | **Starre PKR** & **Flexible PKR auf Vollkostenbasis** |
  | **Teilkostenrechnung** | Teilkostenrechnung auf Istkostenbasis | Teilkostenrechnung auf Normalkostenbasis | **Flexible PKR auf Teilkostenbasis (*Grenzplankostenrechnung*)** |

- **Die 4 zentralen Kostenbegriffe (S. 6 / Folie 418):**
  1. **Istkosten (`K_Ist`):** Tatsächlich in der Periode angefallene Kosten (`Ist-Menge * Ist-Preis`).
  2. **Normalkosten (`K_Normal`):** Geglätteter Durchschnitt vergangener Istkosten (`Ø Istkosten früherer Perioden`).
  3. **Plankosten (`K_Plan`):** Im Voraus für die geplante Beschäftigung (`B_Plan`) ermittelte Vorgabekosten (`Plan-Menge * Plan-Preis = K_fix,plan + k_var,plan * B_Plan`).
  4. **Sollkosten (`K_Soll`):** An die **tatsächlich erreichte Ist-Beschäftigung (`B_Ist`) angepasste Plankosten** – der **einzig faire Maßstab** für die Wirtschaftlichkeitskontrolle einer Kostenstelle:
     ```
     K_Soll(B_Ist) = K_fix,plan + k_var,plan * B_Ist
     ```
- **Warum nutzen Unternehmen Plankosten? (S. 6):** (1) Verlässliche Basis für Vorab-Angebotskalkulation und Preisgestaltung, (2) klare Budgetvorgaben für Kostenstellen, (3) Wirtschaftlichkeitskontrolle durch Plan-Ist- bzw. Soll-Ist-Vergleich.

---

### 2. Der 5-stufige Ablauf der Kostenplanung für 2027 (S. 8–14 / Folien 420–428)
> **Merksatz (Folie 421):** *Basis jeder Planung ist die **Absatzplanung** – Fehler in der Absatzprognose setzen sich zwangsläufig durch alle nachgelagerten Teilpläne fort!*

#### Stufe 1 & 2: Absatz- und Produktionsplanung Möbelfertigung 2027 (S. 11 / Folie 424)
| Produkt | Plan-Absatz 2027 | Verkaufspreis | Plan-Umsatz | Holz je Stk. | Holzbedarf gesamt | Std. je Stk. (KSt 100) | Fertigungsstunden gesamt |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Zirbenbett** | 160 Stk. | 2.000 € | 320.000 € | 0,40 m³ | 64 m³ | 6 h | 960 h |
| **Esstisch** | 800 Stk. | 1.140 € | 912.000 € | 0,15 m³ | 120 m³ | 5 h | 4.000 h |
| **Sideboard** | 480 Stk. | 1.580 € | 758.400 € | 0,25 m³ | 120 m³ | 6 h | 2.880 h |
| **Summe 2027** | | | **`1.990.400 €`** | | **`304 m³`** | | **`7.840 h`** |

#### Stufe 3: Kapazitätsplanung & Behandlung von Leerkapazitäten (S. 12 / Folie 425)
- **Arbeitszeitbudget je Mitarbeiter (MA):**
  `250 Werktage - 30 Urlaubstage - 10 Krankheitstage (Plan) - 10 Schulungstage = 200 Produktivtage * 8 h/Tag = 1.600 h je Mitarbeiter/Jahr`.
- **Personalbedarf & Planbeschäftigung:**
  `7.840 benötigte Stunden / 1.600 h/MA = 4,9 MA` → da Personal nicht teilbar ist, werden **5 Mitarbeiter** eingestellt → **Verfügbare Kapazität = Planbeschäftigung `B_Plan = 5 * 1.600 h = 8.000 h/Jahr`** *(bzw. `2.000 h/Quartal`)*.
- **Leerkapazität & Leerkosten:**
  `8.000 h Kapazität - 7.840 h Produktionsbedarf = 160 h Leerkapazität` (Puffer, Wartung, Betriebsversammlung). Diese wird mit dem geplanten Fixkostensatz (`44,60 €/h`) bewertet:
  ```
  Geplante Leerkosten = 160 h * 44,60 €/h = 7.136 €/Jahr
  ```

#### Stufe 4: Kostenstellenplan KSt 100 Möbelfertigung für 2027 (`B_Plan = 8.000 h`, S. 13 / Folie 426)
| Kostenart in KSt 100 | Geplante Fixkosten (Jahr) | Geplante variable Kosten (Jahr) | Summe Plankosten (Jahr) | Quartalswert (`÷ 4`, bei `2.000 h`) | Plansatz je Stunde (`÷ 8.000 h`) |
|---|---:|---:|---:|---:|---:|
| **Gehälter (Meisterin, AV)** | 180.000 € | – | 180.000 € | 45.000 € | 22,50 €/h (fix) |
| **Abschreibungen (CNC, Maschinen)** | 110.000 € | – | 110.000 € | 27.500 € | 13,75 €/h (fix) |
| **Raumkosten Werkhalle** | 46.800 € | – | 46.800 € | 11.700 € | 5,85 €/h (fix) |
| **Kalkulatorische Zinsen** | 20.000 € | – | 20.000 € | 5.000 € | 2,50 €/h (fix) |
| **Energie** | – | 96.000 € | 96.000 € | 24.000 € | **12,00 €/h (var.)** |
| **Werkzeuge & Hilfsstoffe** | – | 80.000 € | 80.000 € | 20.000 € | **10,00 €/h (var.)** |
| **Instandhaltung** | – | 64.000 € | 64.000 € | 16.000 € | **8,00 €/h (var.)** |
| **SUMME KSt 100** | **`356.800 €`** | **`240.000 €`** | **`596.800 €`** | **`149.200 €`** *(89.200 fix + 60.000 var.)* | **`74,60 €/h`** *(44,60 fix + 30,00 var.)* |

#### Stufe 5: Plan-Ergebnis 2027 der Möbelfertigung (S. 14 / Folie 428)
- Umsatz `1.990,4 T€` – Zirbenholz `425,6 T€` – sonst. Material `83,2 T€` – Fertigungslöhne `470,4 T€` – variable FGK (`7.840 h * 30 €/h = 235,2 T€`) = **`DB I = 776,0 T€`** – Erzeugnisfixkosten `206,0 T€` = **`DB II = 570,0 T€`** – Geschäftsfeldfixkosten `420,0 T€` = **`DB III Möbelfertigung = 150,0 T€`**.

---

### 3. Starre vs. Flexible Plankostenrechnung & Abweichungsanalyse (S. 15–22, 29 / Folien 429–436, 445)

#### Alle Formeln der Plankostenrechnung & Abweichungsanalyse auf einen Blick
```
1. PLANVERRECHNUNGSSÄTZE (bei Planbeschäftigung B_Plan):
   • Gesamter Planverrechnungssatz (Vollkosten):  k_plan     = K_Plan / B_Plan = k_fix,plan + k_var,plan
   • Variabler Planverrechnungssatz:              k_var,plan = K_var,plan / B_Plan
   • Fixer Planverrechnungssatz:                  k_fix,plan = K_fix,plan / B_Plan

2. KOSTENGRÖSSEN BEI IST-BESCHÄFTIGUNG (B_Ist):
   • Verrechnete Plankosten (Entlastung KSt):     K_verr = k_plan * B_Ist
   • Sollkosten (fairer Kontrollmaßstab):         K_Soll = K_fix,plan + k_var,plan * B_Ist
   • Istkosten (tatsächliche Belastung KSt):      K_Ist  = x_Ist * p_Ist

3. ABWEICHUNGSANALYSE (Positive Werte "+" = Mehrkosten / Unterdeckung; Negative Werte "–" = Ersparnis / Überdeckung):
   • Gesamtabweichung (Starre PKR):               ΔG = K_Ist  – K_verr   = ΔV + ΔB
   • Verbrauchsabweichung (Flexible PKR):         ΔV = K_Ist  – K_Soll   (echte Unwirtschaftlichkeit -> Verantwortung KSt!)
   • Beschäftigungsabweichung (Flexible PKR):     ΔB = K_Soll – K_verr   = K_fix,plan * (1 – B_Ist / B_Plan)
                                                                         = (B_Plan – B_Ist) * k_fix,plan (Leerkosten!)

4. AUFSPALTUNG DER VERBRAUCHSABWEICHUNG IN MENGEN- & PREISABWEICHUNG (mit Zwischenwert K_ip = x_Ist * p_Plan):
   • Mengenabweichung (Verantwortung Fertigung):  ΔM = K_ip  – K_Soll = (x_Ist – x_Soll) * p_Plan
   • Preisabweichung (Verantwortung Einkauf):     ΔP = K_Ist – K_ip   = (p_Ist – p_Plan) * x_Ist
   *(Bei Vergleich mit dem ursprünglichen Planwert K_Plan = x_Plan * p_Plan kommt als 1. Stufe noch die
     beschäftigungsbedingte Abweichung K_Soll – K_Plan = (x_Soll – x_Plan) * p_Plan hinzu!)*
```

#### Vorlesungsfall: Abweichungsanalyse Q1/2027 in der Möbelfertigung (KSt 100, S. 15–22 / Folien 429–436)
- **Daten Q1/2027:**
  - **Plan:** `B_Plan = 2.000 h`, `K_Plan = 149.200 €` (`89.200 €` fix + `60.000 €` variabel → `k_plan = 74,60 €/h = 44,60 €/h fix + 30,00 €/h var.`).
  - **Ist Ende März 2027:** `B_Ist = 1.800 h` (`200 h` Unterbeschäftigung), **`K_Ist = 146.000 €`**.
- **1. Starre Plankostenrechnung (S. 16–18):**
  - `K_verr = 1.800 h * 74,60 €/h = 134.280 €`
  - **Gesamtabweichung (Unterdeckung):** `K_Ist - K_verr = 146.000 € - 134.280 € = +11.720 €` *(Belastung > Entlastung = Kostenunterdeckung)*.
  - *Kritik:* Die starre Rechnung wirft der Kostenstellenleitung scheinbar `11.720 €` Unwirtschaftlichkeit vor, obwohl der Großteil nur dadurch entsteht, dass `200 h` weniger gearbeitet wurden und die Fixkosten (`89.200 €`) trotzdem voll anfallen!
- **2. Flexible Plankostenrechnung auf Vollkostenbasis (S. 19–21):**
  - **Sollkosten bei `1.800 h`:** `K_Soll = 89.200 € + 30,00 €/h * 1.800 h = 89.200 € + 54.000 € = 143.200 €`.
  - **Verbrauchsabweichung (`ΔV = K_Ist - K_Soll`):** `146.000 € - 143.200 € = +2.800 €` → **Nur diese `2.800 €` sind echte Kostenüberschreitung in der Kostenstelle!** (Laut Kostenartentabelle Folie 435: **`+1.800 €` bei Energie** [`23.400 € Ist` statt `21.600 € Soll`] und **`+1.000 €` bei Instandhaltung** [`15.400 € Ist` statt `14.400 € Soll`]).
  - **Beschäftigungsabweichung (`ΔB = K_Soll - K_verr`):** `143.200 € - 134.280 € = +8.920 €` → **Nicht gedeckte Fixkosten (Leerkosten)** wegen `200` fehlenden Arbeitsstunden (`200 h * 44,60 €/h = 8.920 €`), für die die Fertigungsleitung nichts kann!
- **3. Vertiefung: Preis- und Mengenabweichung beim Strom in Q1/2027 (S. 22 / Folie 436):**
  - Warum lag die Energie um `+1.800 €` über Soll (`23.400 €` statt `21.600 €`)?
    1. **Sollkosten (`K_Soll` bei `1.800 h` à `48 kWh/h`):** `86.400 kWh * 0,25 €/kWh = 21.600 €`
    2. **Istmenge zum Planpreis (`K_ip`):** `78.000 kWh * 0,25 €/kWh = 19.500 €`
    3. **Istkosten (`K_Ist`):** `78.000 kWh * 0,30 €/kWh = 23.400 €`
  - **Mengenabweichung (`K_ip - K_Soll`):** `19.500 € - 21.600 € = -2.100 €` (`-8.400 kWh * 0,25 €` → **Lob an die Fertigung: Sie hat sogar `8.400 kWh` Strom eingespart!**).
  - **Preisabweichung (`K_Ist - K_ip`):** `23.400 € - 19.500 € = +3.900 €` (`78.000 kWh * +0,05 €` → der Strompreis ist um 5 Cent gestiegen; Verantwortung liegt beim Einkauf/Energiemarkt, nicht bei der Meisterin!).
  - *Saldo:* `-2.100 € (Menge) + 3.900 € (Preis) = +1.800 €` Verbrauchsabweichung Energie.

---

### 4. Systemvergleich: Starre PKR vs. Flexible PKR vs. Grenzplankostenrechnung (S. 29 / Folie 445)
| Merkmal | Starre Plankostenrechnung | Flexible PKR (auf Vollkostenbasis) | Grenzplankostenrechnung (Flexible PKR auf Teilkostenbasis) |
|---|---|---|---|
| **Trennung fix / variabel** | Nein | **Ja** | **Ja** |
| **Anpassung an Istbeschäftigung** | Nein | **Ja (über Sollkosten `K_Soll`)** | **Ja (über variable Sollkosten)** |
| **Ermittelte Abweichungen** | Nur Gesamtabweichung (`K_Ist - K_verr`) | **Verbrauchs- (`ΔV`) + Beschäftigungsabweichung (`ΔB`)** | **Nur Verbrauchsabweichung (`ΔV`)** *(da keine Fixkosten verrechnet werden, ist `ΔB = 0`)* |
| **Kalkulation auf Produkte** | Vollkosten (`k_plan`) | Vollkosten (`k_plan`) | **Nur variable Kosten (`k_var,plan`) → fließt direkt in DB-Rechnung!** |
| **Aussagekraft Kostenkontrolle** | Kaum aussagekräftig | **Hoch (aussagekräftig)** | **Hoch (aussagekräftig)** |
| **Aufwand** | Gering | Mittel | Hoch |

---

## 🧮 Alle Übungen aus Kapitel 3.4 (Übung 10 & Übung 11) – Komplett gelöst!

### 1. Übung 10: Abweichungsanalyse im 3D-Druck bei Überbeschäftigung (Q2/2027, S. 23–25 / Folien 437–439)
- **Ausgangsdaten (KSt 3D-Druck, Q2/2027):**
  - **Planbeschäftigung:** `B_Plan = 500 h`
  - **Plankosten gesamt:** `K_Plan = 44.800 €`, davon **variabel `K_var,plan = 16.000 €`** → **fix `K_fix,plan = 44.800 € - 16.000 € = 28.800 €`**.
  - **Ist-Werte Q2/2027:** `B_Ist = 560 h` (**`+60 h` Überbeschäftigung!**), **`K_Ist = 49.500 €`**.
  - *Aussage der Kostenstellenleiterin:* „Wir liegen unter Plan."

#### Schritt-für-Schritt-Musterlösung:
- **a) Planverrechnungssatz und Aufteilung in fix und variabel:**
  ```
  • Gesamter Planverrechnungssatz:   k_plan     = 44.800 € / 500 h = 89,60 €/h
  • Variabler Planverrechnungssatz:  k_var,plan = 16.000 € / 500 h = 32,00 €/h
  • Fixer Planverrechnungssatz:      k_fix,plan = 28.800 € / 500 h = 57,60 €/h
  ```
- **b) Starre Plankostenrechnung & Prüfung der Aussage der Leiterin:**
  - **Verrechnete Plankosten (`K_verr`):** `560 h * 89,60 €/h = 50.176 €`
  - **Gesamtabweichung (`K_Ist - K_verr`):** `49.500 € - 50.176 € = -676 €` (**Kostenüberdeckung** von `676 €`, da die Kostenstelle `676 €` mehr auf Produkte verrechnet hat, als tatsächlich an Istkosten angefallen sind).
  - *Hat die Leiterin recht?* **Nur scheinbar in der starren Rechnung – inhaltlich hat sie UNRECHT!** Die Istkosten (`49.500 €`) liegen zwar um `676 €` unter den *verrechneten* Plankosten (`50.176 €`), aber das liegt nur daran, dass bei `560 h` (`60` Überstunden) fälschlich `560 * 57,60 € = 32.256 €` an Fixkosten verrechnet wurden, obwohl die Fixkosten nur `28.800 €` betragen!
- **c) Flexible Plankostenrechnung (Sollkosten, Verbrauchs- & Beschäftigungsabweichung):**
  ```
  1. Sollkosten bei 560 h (K_Soll):
     K_Soll = K_fix,plan + k_var,plan * B_Ist
            = 28.800 €   + 32,00 €/h  * 560 h
            = 28.800 €   + 17.920 €
            = 46.720 €

  2. Verbrauchsabweichung (ΔV = K_Ist – K_Soll):
     ΔV = 49.500 € – 46.720 € = +2.780 €   (echte Kostenüberschreitung / Unwirtschaftlichkeit!)

  3. Beschäftigungsabweichung (ΔB = K_Soll – K_verr):
     ΔB = 46.720 € – 50.176 € = –3.456 €   (Fixkostenüberdeckung durch 60 Überstunden: –60 h × 57,60 €/h)

  4. Kontrollsumme (Gesamtabweichung ΔG = ΔV + ΔB):
     ΔG = +2.780 € + (–3.456 €) = –676 €  ✓
  ```
- **d) Interpretation des Ergebnisses:**
  - Die flexible Plankostenrechnung deckt auf, dass im 3D-Druck **unwirtschaftlich gearbeitet wurde**: Bei `560` Druckstunden hätten maximal **`46.720 €` (`K_Soll`)** anfallen dürfen – tatsächlich wurden **`49.500 €` (`+2.780 €` Verbrauchsabweichung)** verbraucht (z. B. durch Fehldrucke/Filament-Ausschuss, Überstundenzuschläge oder höheren Wartungsaufwand).
  - Dass die starre Rechnung trotzdem eine Überdeckung von `–676 €` ausweist, ist ein **gefährlicher Blend-Effekt der Vollkostenverrechnung bei Überbeschäftigung**: Die positive Fixkostenüberdeckung (`–3.456 €` aus `60 h * 57,60 €/h`) hat die reale Kostenüberschreitung (`+2.780 €`) in der Gesamtsumme überdeckt!

---

### 2. Übung 11: Preis- und Mengenabweichung beim Zirbenholz (Q2/2027, S. 26–28 / Folien 441–443)
- **Ausgangsdaten (Zirbenholz in Q2/2027):**
  - **Plan (für geplante Produktionsmenge):** `x_Plan = 80 m³` zu `p_Plan = 1.400 €/m³`
  - **Soll (für tatsächliche Ist-Produktion laut Stückliste):** `x_Soll = 82 m³` zu `p_Plan = 1.400 €/m³`
  - **Ist (tatsächlich verbraucht & bezahlt):** `x_Ist = 86 m³` zu `p_Ist = 1.550 €/m³`

#### Schritt-für-Schritt-Musterlösung:
- **a & b) Berechnung aller Kostengrößen & 3-stufige Abweichungszerlegung:**

| Größe / Abweichungsstufe | Formel & Rechenweg | Betrag in € | Interpretation & Ursache |
|---|---|---:|---|
| **1. Plankosten (`K_Plan`)** | `80 m³ × 1.400 €/m³` | **`112.000 €`** | Ursprüngliches Holzbudget für Plan-Produktion |
| **2. Sollkosten (`K_Soll`)** | `82 m³ × 1.400 €/m³` | **`114.800 €`** | Erlaubte Holzkosten für die höhere Ist-Produktion |
| **3. Istmenge zu Planpreis (`K_ip`)** | `86 m³ × 1.400 €/m³` | **`120.400 €`** | Rechnerischer Zwischenschritt zur Trennung von Menge & Preis |
| **4. Istkosten (`K_Ist`)** | `86 m³ × 1.550 €/m³` | **`133.300 €`** | Tatsächlich bezahlte Holzkosten in Q2/2027 |
| **Gesamtabweichung (`K_Ist - K_Plan`)** | `133.300 € – 112.000 €` | **`+21.300 €`** | Gesamte Budgetüberschreitung gegenüber Jahresplan |
| ↳ *davon **1. Beschäftigungsbedingt** (`K_Soll - K_Plan`)* | `114.800 € – 112.000 €` (`+2 m³ × 1.400 €`) | **`+2.800 €`** | Mehr Möbel produziert als geplant (**keine echte Abweichung/Unwirtschaftlichkeit!**) |
| ↳ *davon **2. Mengenabweichung** (`K_ip - K_Soll`)* | `120.400 € – 114.800 €` (`+4 m³ × 1.400 €`) | **`+5.600 €`** | **`4 m³` Holz-Mehrverbrauch** (Verschnitt, Ausschuss, Hobelfehler) |
| ↳ *davon **3. Preisabweichung** (`K_Ist - K_ip`)* | `133.300 € – 120.400 €` (`86 m³ × +150 €`) | **`+12.900 €`** | **Holzpreis um `+150 €/m³` gestiegen** (auf alle `86 m³` Istmenge) |
| *(Nachrichtlich: **Verbrauchsabweichung** `K_Ist - K_Soll`)* | `133.300 € – 114.800 €` (`5.600 € + 12.900 €`) | *`+18.500 €`* | *Summe aus Mengen- und Preisabweichung bei Ist-Produktion* |

- **c) Zuordnung der Verantwortlichkeiten:**
  1. **Beschäftigungsbedingte Mehrkosten (`+2.800 €` für `+2 m³`):** **Keine Fehlentwicklung!** Es wurden mehr Möbel produziert und verkauft; den `+2.800 €` Holzkosten stehen entsprechende Mehrerlöse gegenüber.
  2. **Mengenabweichung (`+5.600 €` für `+4 m³` Mehrverbrauch gegenüber Stückliste):** **Verantwortung liegt in der Möbelfertigung (KSt 100)** – Ursachen prüfen: Verschnitt an der CNC-Fräse, Ausschuss, Bedienfehler oder mangelhafte Holzqualität (Astlöcher/Risse → dann Rücksprache mit Einkauf).
  3. **Preisabweichung (`+12.900 €` wegen `+150 €/m³` teurerem Einkauf):** **Verantwortung liegt beim Einkauf bzw. am Beschaffungsmarkt** (Sturmschäden/Verknappung in Tirol, Eilbestellungen ohne Mengenrabatt, fehlende Rahmenverträge).

---

## ⚠️ Klausurfallen & typische Fehler
- **Überbeschäftigungs-Falle (wie in Übung 10):** Wenn `B_Ist > B_Plan` ist, liegt `K_verr` **über** `K_Soll` (`ΔB` ist negativ = Fixkostenüberdeckung). Dadurch kann die Gesamtabweichung negativ sein (`-676 €`), **obwohl eine massive Verbrauchsabweichung (`+2.780 €`) vorliegt**! Verlasse dich bei der Wirtschaftlichkeitsfrage **niemals** auf `K_Ist - K_verr`, sondern **immer nur auf `ΔV = K_Ist - K_Soll`**!
- **Vorzeichen-Konvention bei Abweichungen:** In der Übelhör-Klausur wird immer **`Ist - Soll`** bzw. **`Soll - Verrechnet`** gerechnet:
  - **Positives Vorzeichen (`+`)** = Mehrkosten / Kostenunterdeckung (ungünstig).
  - **Negatives Vorzeichen (`-`)** = Kostenersparnis / Kostenüberdeckung (günstig).
- **Zwischenschritt `K_ip` (`Istmenge * Planpreis`) verwechseln:** Merke dir die feste Kette **`K_Soll` (`x_Soll * p_Plan`) → `K_ip` (`x_Ist * p_Plan`) → `K_Ist` (`x_Ist * p_Ist`)**:
  - Beim Schritt von `K_Soll` zu `K_ip` ändert sich **nur die Menge** (`p_Plan` bleibt fest) → **Mengenabweichung**!
  - Beim Schritt von `K_ip` zu `K_Ist` ändert sich **nur der Preis** (`x_Ist` bleibt fest) → **Preisabweichung**!
- **Kapazitätsplanung (Personal nicht teilbar):** Ergibt der Personalbedarf `4,9 Mitarbeiter`, muss auf **5 ganze Mitarbeiter** (`8.000 h`) aufgerundet werden. Die Differenz (`160 h`) sind geplante **Leerkosten** (`160 h * k_fix,plan`).

## 🧠 Merkhilfen
- **Fairness-Formel der Kostenkontrolle:** *Die Kostenstellenleitung haftet nur für **`ΔV = K_Ist - K_Soll`** (und darin nur für die **Mengenabweichung**)! Für Beschäftigungsabweichungen (`ΔB`, fehlende Aufträge) und Preisabweichungen (`ΔP`, Marktpreise) kann die Werkstatt nichts!*
- **Treppen-Eselsbrücke für Menge & Preis:** *Erst die Menge anpassen bei festem Planpreis (`K_Soll → K_ip`), dann den Preis anpassen bei fester Istmenge (`K_ip → K_Ist`)!*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Plankosten (`K_Plan`) | Vorab für die Planbeschäftigung (`B_Plan`) budgetierte Kosten (`K_fix,plan + k_var,plan * B_Plan`). |
| Sollkosten (`K_Soll`) | An die tatsächliche Ist-Beschäftigung angepasste Plankosten (`K_fix,plan + k_var,plan * B_Ist`); Maßstab der Kostenkontrolle. |
| Verrechnete Plankosten (`K_verr`) | In der Vollkostenrechnung auf die Kostenträger weiterbelastete Kosten (`k_plan * B_Ist`). |
| Verbrauchsabweichung (`ΔV`) | Differenz aus Istkosten und Sollkosten (`K_Ist - K_Soll`); misst die echte Wirtschaftlichkeit der Kostenstelle. |
| Beschäftigungsabweichung (`ΔB`) | Differenz aus Sollkosten und verrechneten Plankosten (`K_Soll - K_verr`); misst ungedeckte (oder überdeckte) Fixkosten. |
| Grenzplankostenrechnung | Flexible Plankostenrechnung auf Teilkostenbasis; verrechnet nur variable Plankosten auf Produkte (`ΔB` entfällt). |

## ✅ Selbsttest
**F1:** Worin unterscheiden sich Plankosten (`K_Plan`), Sollkosten (`K_Soll`) und verrechnete Plankosten (`K_verr`)?
**A:** `K_Plan` sind die vorab für die Planbeschäftigung (`B_Plan`) budgetierten Kosten. `K_Soll = K_fix,plan + k_var,plan * B_Ist` passt die variablen Plankosten an die tatsächliche Ist-Beschäftigung an und lässt die Fixkosten konstant (fairer Kontrollmaßstab). `K_verr = k_plan * B_Ist` proportionalisiert auch die Fixkosten pro Einheit und gibt an, wie viel in der Vollkostenrechnung auf die Produkte verrechnet wurde.

**F2:** Warum ist die starre Plankostenrechnung für die Kontrolle der Wirtschaftlichkeit einer Kostenstelle ungeeignet, sobald `B_Ist` von `B_Plan` abweicht?
**A:** Weil die starre Plankostenrechnung nicht zwischen fixen und variablen Kosten trennt. Ihre Gesamtabweichung (`K_Ist - K_verr`) vermischt echte Verbrauchsabweichungen mit rechnerischen Fixkostenunter- bzw. -überdeckungen (Beschäftigungsabweichung).

**F3:** Wie berechnet man in der Kapazitätsplanung der Möbelfertigung (`7.840 h` Produktionsbedarf, `1.600 h` je Mitarbeiter/Jahr, Fixkostensatz `44,60 €/h`) die Planbeschäftigung und die geplanten Leerkosten?
**A:** `7.840 h / 1.600 h = 4,9 Mitarbeiter` → aufgerundet auf `5 Mitarbeiter`, ergibt eine Planbeschäftigung von `5 * 1.600 h = 8.000 h`. Die nicht genutzten `160 h` Leerkapazität ergeben geplante Leerkosten von `160 h * 44,60 €/h = 7.136 €`.

**F4:** Im 3D-Druck (Übung 10) gilt: `B_Plan = 500 h`, `K_Plan = 44.800 €` (davon `16.000 €` variabel, `28.800 €` fix). Im Q2 wurden `B_Ist = 560 h` gearbeitet bei `K_Ist = 49.500 €`. Warum zeigt die starre Rechnung `-676 €` Überdeckung, obwohl unwirtschaftlich gearbeitet wurde?
**A:** Mit `k_plan = 89,60 €/h` (`32,00 €/h` var. + `57,60 €/h` fix) verrechnet die starre Rechnung `560 * 89,60 € = 50.176 €` (`ΔG = 49.500 - 50.176 = -676 €`). Die Sollkosten bei `560 h` betragen aber nur `K_Soll = 28.800 € + 32 €/h * 560 h = 46.720 €`. Es liegt also eine echte Verbrauchsabweichung von `ΔV = 49.500 - 46.720 = +2.780 €` vor, die nur durch die Fixkostenüberdeckung der 60 Überstunden (`ΔB = -60 * 57,60 € = -3.456 €`) verdeckt wurde.

**F5:** Wie zerlegt man die Verbrauchsabweichung einer Material- oder Energiekostenart mithilfe des Zwischenwerts `K_ip` in Mengen- und Preisabweichung?
**A:** Man bildet `K_ip = Ist-Menge * Plan-Preis`. Die **Mengenabweichung** ist `K_ip - K_Soll = (x_Ist - x_Soll) * p_Plan` (Verantwortung: Fertigung). Die **Preisabweichung** ist `K_Ist - K_ip = (p_Ist - p_Plan) * x_Ist` (Verantwortung: Einkauf/Markt).

**F6:** Beim Zirbenholz (Übung 11) galt: Plan `80 m³ à 1.400 €`, Soll für Ist-Produktion `82 m³ à 1.400 €`, Ist `86 m³ à 1.550 €`. Wie hoch sind beschäftigungsbedingte Abweichung, Mengenabweichung und Preisabweichung?
**A:** `K_Plan = 112.000 €`, `K_Soll = 114.800 €`, `K_ip = 86 * 1.400 € = 120.400 €`, `K_Ist = 86 * 1.550 € = 133.300 €`. Beschäftigungsbedingt: `114.800 - 112.000 = +2.800 €`; Mengenabweichung: `120.400 - 114.800 = +5.600 €` (`4 m³` Verschnitt); Preisabweichung: `133.300 - 120.400 = +12.900 €` (`+150 €/m³` auf `86 m³`). Summe = `+21.300 €`.

**F7:** Wodurch unterscheidet sich die Grenzplankostenrechnung von der flexiblen Plankostenrechnung auf Vollkostenbasis?
**A:** Die Grenzplankostenrechnung ist eine flexible Plankostenrechnung auf **Teilkostenbasis**: Sie verrechnet ausschließlich die variablen Plankosten (`k_var,plan`) auf die Kostenträger und übernimmt die Fixkosten als Block in die Deckungsbeitragsrechnung. Dadurch entsteht in der Grenzplankostenrechnung keine Beschäftigungsabweichung (`ΔB = 0`), sondern nur die Verbrauchsabweichung (`ΔV`).
