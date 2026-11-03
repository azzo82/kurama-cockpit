---
id: itmr-04-uebungsblatt-1
kurs: itmr
nr: 4
titel: Übungsblatt 1 (inkl. Musterlösung): Netzplantechnik, Meilensteintrendanalyse & Earned Value Methode
quellen: Übungsblatt_1_Studierende.pdf
seiten: 6
---

> **Kurz gesagt:** Das offizielle klausurnahe **Übungsblatt 1** von Prof. Dr. Björn Häckel zum Projekt- und Portfoliomanagement – hier komplett mit allen Rechenschritten und Musterlösungen aufbereitet! Trainiert werden die drei wichtigsten Prüfungsaufgaben der Projektsteuerung: **Netzplanberechnung** (FAZ, FEZ, SAZ, SEZ, Gesamtpuffer, freier Puffer, kritischer Pfad & Projektverkürzung), **Meilensteintrendanalyse (MTA)** sowie eine mehrperiodige **Earned-Value-Analyse** (CV, CPI, SV, SPI, EAC).

## 🎯 Lernziele
- Aus einer textuellen Projektbeschreibung einen vollständigen **Vorgangsknoten-Netzplan** mit 14 Vorgängen erstellen und Vorwärts-/Rückwärtsrechnung fehlerfrei durchführen (Aufgabe 1a, S. 2–3 & S. 6).
- Konkrete Management-Maßnahmen zur **Verkürzung der Projektdauer** auf dem kritischen Pfad ableiten und kritisch bewerten (Aufgabe 1b, S. 3).
- Den Kurvenverlauf von drei Teilprojekten in einem **Meilensteindiagramm (MTA)** präzise interpretieren (Aufgabe 2, S. 4).
- Monats- und Kumulativwerte der **Earned Value Methode (EVM)** inkl. zwei verschiedener **EAC-Prognosen** sowie Verfahren zur Bestimmung des Fertigstellungsgrads berechnen und erläutern (Aufgabe 3, S. 5).

## 📖 Kerninhalte & Vollständige Musterlösungen

### 1. Aufgabe 1: Terminmanagement – Netzplantechnik (S. 2–3, Hilfestellung S. 6)

#### a) Logische Abhängigkeiten & Vollständige Netzplantabelle
Ein ERP-Einführungsprojekt umfasst die Teilprojekte **Finanzen (TPF)**, **Personal (TPP)** sowie übergreifende **Gesamtprojekt-Aufgaben (GP)**:
- Projektstart bei Tag `0` parallel mit `a` (Anforderungsanalyse TPF) und `b` (Anforderungsanalyse TPP).
- Nach `a` & `b` folgt `c` (Software-Auswahl GP).
- Nach `c` starten parallel `e` (Fachkonzeption TPF), `f` (Fachkonzeption TPP) und `d` (Hardwarebeschaffung GP).
- Nach Abschluss beider Fachkonzepte (`e`, `f`) startet `g` (Schulungskonzept GP); nach beiden Fachkonzepten **und** der Hardwarebeschaffung (`e`, `f`, `d`) starten `h` (Implementierung TPF) und `i` (Implementierung TPP).
- Nach `g`, `h` und `i` folgt `j` (Durchführung der Schulungen); parallel folgen `k` (Modultest TPF nach `h`) und `l` (Modultest TPP nach `i`).
- Nach `k` und `l` folgt `m` (Integrationstest GP).
- Nach `j` und `m` folgt abschließend `n` (Datenübernahme & Produktivsetzung GP).

**Rechenformeln (ohne Zeitverschiebung):**
- *Vorwärtsrechnung:* `FAZ = max(FEZ aller Vorgänger)` (Startknoten: `0`); `FEZ = FAZ + Dauer`.
- *Rückwärtsrechnung:* `SEZ = min(SAZ aller Nachfolger)` (Endknoten: `SEZ = FEZ`); `SAZ = SEZ - Dauer`.
- *Pufferzeiten:* **Gesamtpuffer** `GP = SAZ - FAZ = SEZ - FEZ`; **Freier Puffer** `FP = min(FAZ aller Nachfolger) - FEZ`.

| Nr. | Vorgang | Vorgänger | Dauer | FAZ | FEZ | SAZ | SEZ | GP | FP | Kritisch? |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|:---:|
| **a)** | Anforderungsanalyse (TPF) | – | 40 | **0** | **40** | **0** | **40** | **0** | **0** | 🔴 **JA** |
| **b)** | Anforderungsanalyse (TPP) | – | 25 | 0 | 25 | 15 | 40 | 15 | 15 | Nein |
| **c)** | Software-Auswahl (GP) | a, b | 10 | **40** | **50** | **40** | **50** | **0** | **0** | 🔴 **JA** |
| **d)** | Hardwarebeschaffung (GP) | c | 20 | 50 | 70 | 90 | 110 | 40 | 40 | Nein |
| **e)** | Fachkonzeption (TPF) | c | 60 | **50** | **110** | **50** | **110** | **0** | **0** | 🔴 **JA** |
| **f)** | Fachkonzeption (TPP) | c | 40 | 50 | 90 | 70 | 110 | 20 | 20 | Nein |
| **g)** | Schulungskonzept erstellen (GP) | e, f | 20 | 110 | 130 | 135 | 155 | 25 | 25 | Nein |
| **h)** | Implementierung (TPF) | d, e, f | 45 | **110** | **155** | **110** | **155** | **0** | **0** | 🔴 **JA** |
| **i)** | Implementierung (TPP) | d, e, f | 20 | 110 | 130 | 135 | 155 | 25 | **0** | Nein *(FP=0!)* |
| **j)** | Durchführung Schulungen (GP) | g, h, i | 60 | **155** | **215** | **155** | **215** | **0** | **0** | 🔴 **JA** |
| **k)** | Modultest (TPF) | h | 10 | 155 | 165 | 195 | 205 | 40 | **0** | Nein *(FP=0!)* |
| **l)** | Modultest (TPP) | i | 10 | 130 | 140 | 195 | 205 | 65 | 25 | Nein |
| **m)** | Integrationstest (GP) | k, l | 10 | 165 | 175 | 205 | 215 | 40 | 40 | Nein |
| **n)** | Datenübernahme & Go-Live (GP) | j, m | 10 | **215** | **225** | **215** | **225** | **0** | **0** | 🔴 **JA** |

- **Gesamtprojektdauer:** **225 Arbeitstage**.
- **Kritischer Pfad (`GP = 0`):** `a (40) → c (10) → e (60) → h (45) → j (60) → n (10) = 225 AT`.

#### b) Drei Maßnahmen zur Verkürzung um 20 Arbeitstage (von 225 auf 205 AT)
> **Grundregel:** Eine Verkürzung der Gesamtdauer gelingt **nur durch Ansetzen am kritischen Pfad** (`a-c-e-h-j-n`)! Zudem darf kein Parallelpfad (z. B. `f` mit `GP = 20` oder `b` mit `GP = 15`) dadurch unbeachtet neu kritisch werden.

1. **Fast Tracking / Parallelisierung (Ablauflogik entkoppeln):**
   - *Vorschlag:* Teilprojekte TPF und TPP stärker entkoppeln oder Überlappung einführen – z. B. **TPP-Schulungen schon nach Abschluss von Implementierung TPP (`i`, Tag 130) starten**, während TPF (`h`) noch implementiert wird, oder Implementierung TPF (`h`) bereits nach Fachkonzept TPF (`e`) beginnen, ohne auf TPP zu warten. Auch Schulungsdurchführung (`j`, 60 AT) parallel zu mehr Trainern/Gruppen staffeln (z. B. 2 parallele Schulungskohorten → Halbierung von `j` von 60 auf 30 AT spart sofort **30 AT**, wobei `m` bei Tag 175 endet, also Puffer von 40 AT hat!).
   - *Diskussion:* Sehr hohes Einsparpotenzial (insb. bei `j`: bis zu 40 AT möglich, bevor Pfad `k → m` bei 175 AT kritisch wird!), erfordert aber mehr Schulungsräume/Trainer und erhöht den Koordinationsaufwand.
2. **Crashing / Ressourcenerhöhung auf kritischen Vorgängen (`e`, `h`, `j`):**
   - *Vorschlag:* Zusätzliche Entwickler/Berater in **Fachkonzeption TPF (`e`, 60 AT)** oder **Implementierung TPF (`h`, 45 AT)** einsetzen bzw. interne Umschichtung aus unkritischen Vorgängen (z. B. Entwickler aus TPP `f`/`i`, die 20–25 Tage Puffer haben, zeitweise nach TPF verlagern).
   - *Diskussion:* Steigert Projektkosten (externe Tagessätze) und unterliegt dem **Brooks'schen Gesetz** (*„Adding manpower to a late software project makes it later"* durch Einarbeitungs- und Kommunikationsaufwand). Außerdem hat `f` nur 20 AT Puffer – kürzt man `e` um mehr als 20 AT, wird `f` ebenfalls kritisch!
3. **Scope-Reduktion / Timeboxing (Funktionsumfang verschieben):**
   - *Vorschlag:* Nicht geschäftskritische Zusatzfunktionen („Nice-to-have"-Reports in TPF) aus Release 1 ausklammern und in eine nachgelagerte Phase 2 nach Produktivsetzung verlagern.
   - *Diskussion:* Spart Zeit in `e` und `h` ohne Zusatzkosten, reduziert aber initial den Leistungsumfang (Abstimmung mit Fachabteilung/Lenkungsausschuss nötig).

---

### 2. Aufgabe 2: Projektsteuerung – Meilensteintrendanalyse (MTA) (S. 4)
Im MTA-Diagramm zeigt die x-Achse den **Berichtszeitpunkt** (`1.01` bis `1.06`) und die y-Achse den jeweils **prognostizierten Meilensteintermin**:

1. **Anforderungsspezifikation (Quadrate ■):**
   - Startet bei Berichtszeitpunkt `1.01` und `1.02` planmäßig auf Zieltermin **`1.06`** (waagerecht).
   - Ab `1.03` steigt die Kurve auf **`1.07`** (+1 Monat Verzug), bleibt in `1.04` konstant auf `1.07` und steigt in `1.05` nochmals auf **`1.08`** (+2 Monate Gesamtverzug).
   - In `1.06` und `1.07` verläuft sie leicht unter `1.08` und trifft kurz vor **`1.08`** auf die 45°-Diagonale → Meilenstein wurde erst Ende Juli statt Anfang Juni fertiggestellt (**deutliche Terminüberschreitung um knapp 2 Monate**).
2. **Datenbankdesign (Dreiecke ▲):**
   - Startet in `1.01` knapp über `1.09`, **steigt bis `1.03` auf über `1.10`** an (anfängliche Verzögerung / Probleme).
   - Ab `1.03` greifen offenbar Gegenmaßnahmen: Die Kurve **fällt kontinuierlich** über `1.04`, `1.05` bis `1.06` wieder auf **`1.09`** zurück!
   - *Fazit:* Frühzeitige Abweichungserkennung und **erfolgreiches Gegensteuern** – das Teilprojekt liegt zum Stichtag `1.06` wieder voll auf ursprünglichem Kurs (`1.09`).
3. **Layout-Entwurf (Kreise ●):**
   - Liegt von `1.01` bis `1.04` fast konstant kurz über **`1.12`** (stabil im Plan).
   - In `1.05` starker **Ausreißer nach oben auf `1.01` (Folgejahr)** (+1 Monat drohender Verzug), der jedoch bis `1.06` sofort wieder auf **`1.12`** korrigiert wird.
   - *Fazit:* Kurzfristige Krise/Engpass im Mai erfolgreich behoben (oder zu optimistische Korrektur – Projektleitung sollte prüfen, ob die Rücknahme auf `1.12` realistisch untermauert ist!).

---

### 3. Aufgabe 3: Kostenmanagement – Earned Value Methode (EVM) (S. 5)
**Ausgangsdaten (Monatswerte):** Geplante Dauer = 6 Monate à `PV = 35.000 €/Monat` → Gesamtbudget **`BAC = 6 * 35.000 € = 210.000 €`**.

#### a) Monats- und Kumulativkennzahlen bis Ende Monat 4

**1. Einzelmonats-Betrachtung:**
| Monat | EV | AC | PV | `CV = EV - AC` | `CPI = EV / AC` | `SV = EV - PV` | `SPI = EV / PV` |
|:---:|---:|---:|---:|---:|---:|---:|---:|
| **1** | 25.000 € | 20.000 € | 35.000 € | **+5.000 €** | **1,25** | –10.000 € | 0,71 |
| **2** | 15.000 € | 40.000 € | 35.000 € | **–25.000 €** | **0,375** | –20.000 € | 0,43 |
| **3** | 25.000 € | 25.000 € | 35.000 € | 0 € | 1,00 | –10.000 € | 0,71 |
| **4** | 45.000 € | 35.000 € | 35.000 € | **+10.000 €** | **1,29** | **+10.000 €** | **1,29** |

**2. Kumulierte Betrachtung zum Stichtag Ende Monat 4 (entscheidend für Gesamtsteuerung!):**
- `EV_kum(4) = 25.000 + 15.000 + 25.000 + 45.000 = 110.000 €`
- `AC_kum(4) = 20.000 + 40.000 + 25.000 + 35.000 = 120.000 €`
- `PV_kum(4) = 4 * 35.000 = 140.000 €`
- **Kostenabweichung (`CV`):** `110.000 € - 120.000 € = -10.000 €` → Kostenüberschreitung um 10.000 €!
- **Kosteneffizienz (`CPI`):** `110.000 / 120.000 = 0,9167` (`91,67 %`) → Unwirtschaftlich (pro 1 € Einsatz nur ~0,92 € Leistungswert; Hauptursache war der massive Einbruch in Monat 2!).
- **Planabweichung (`SV`):** `110.000 € - 140.000 € = -30.000 €` → Leistungsrückstand im Wert von 30.000 €!
- **Zeiteffizienz (`SPI`):** `110.000 / 140.000 = 0,7857` (`78,57 %`) → Projekt liegt zeitlich rund 21,4 % hinter dem Plan, zeigt aber in Monat 4 (`SPI_M4 = 1,29`, `CPI_M4 = 1,29`) bereits einen starken Aufwärtstrend!

#### b) Prognose der Gesamtkosten am Projektende (`EAC`) nach Monat 4 (`BAC = 210.000 €`)
1. **Fall a – Weiterer Projektfortschritt wie ursprünglich geplant (einmalige Abweichung):**
   `EAC = AC + (BAC - EV) = 120.000 € + (210.000 € - 110.000 €) = 220.000 €` *(+10.000 € über Budget)*.
2. **Fall b – Weiterer Projektfortschritt wie im bisherigen Projektverlauf (gleiche Kosteneffizienz `CPI`):**
   `EAC = BAC / CPI = 210.000 € / (110.000 / 120.000) = 229.090,91 €` *(+19.090,91 € über Budget)*.

#### c) Projektabschluss vor Plan in Monat 5 (Kumulierte Verlaufskurven)
Mit Monat 5 (`EV_5 = 100.000 €`, `AC_5 = 105.000 €`) ergeben sich folgende **kumulierte Kurvenpunkte** für das EVM-Diagramm (x-Achse: Monate 0–6, y-Achse: Euro):

| Monat | `PV_kum` (Planlinie) | `EV_kum` (Fertigstellungswert) | `AC_kum` (Istkosten) |
|:---:|---:|---:|---:|
| **0** | 0 € | 0 € | 0 € |
| **1** | 35.000 € | 25.000 € | 20.000 € |
| **2** | 70.000 € | 40.000 € | 60.000 € |
| **3** | 105.000 € | 65.000 € | 85.000 € |
| **4** | 140.000 € | 110.000 € | 120.000 € |
| **5** | 175.000 € | **210.000 € (= BAC!)** | **225.000 €** |
| **6** | **210.000 € (= BAC)** | 210.000 € | 225.000 € |

- *Interpretation:* Durch das Crashing in Monat 5 erreicht `EV_kum` bereits Ende Monat 5 die `BAC`-Linie von **210.000 €** (100 % Leistung **1 Monat vor Plan** fertig!), bezahlt dafür aber finale Istkosten von **`AC_kum = 225.000 €`** (15.000 € Budgetüberschreitung für die Beschleunigung).

#### d) Zwei Verfahren zur Ermittlung des Fertigstellungsgrads (FGR)
1. **Meilenstein-Methode (0/100- oder gewichtete Meilensteintechnik):** Einem Arbeitspaket werden vorab definierte Zwischenmeilensteine mit festen Prozentwerten zugeordnet (z. B. Konzept abgenommen = 30 %, Code fertig = 70 %, Test bestanden = 100 %). *Vorteil:* Sehr objektiv, verhindert das subjektive „90-%-fertig-Syndrom".
2. **50/50-Regel (oder 20/80-Regel) / Mengenproportionale Messung:**
   - *50/50-Verfahren:* Bei Start eines kurzen Arbeitspakets werden pauschal 50 % FGR angesetzt, die restlichen 50 % erst bei vollständiger Abnahme.
   - *Mengenproportional:* Objektive Zählung gleichartiger Einheiten (`erledigte Einheiten / Gesamteinheiten`, z. B. 120 von 300 migrierten Servern = 40 %).

## ⚠️ Klausurfallen & typische Fehler
- **Monatswerte vs. Kumulativwerte in EVM-Tabellen:** Prüfe sofort, ob `PV` konstant bleibt (hier 6 × 35.000 €) oder ansteigt! Bleibt `PV` konstant, sind es **Periodeneinzelwerte** und müssen für Stichtagsaussagen und `EAC` zwingend **aufsummiert** werden!
- **Freier Puffer vs. Gesamtpuffer (Vorgang `i` und `k`):** Ein Vorgang kann einen großen Gesamtpuffer haben (`i`: `GP = 25`, `k`: `GP = 40`), aber trotzdem **`FP = 0`**, weil sein direkter Nachfolger (`l` bzw. `m`) zum frühestmöglichen Zeitpunkt auf ihn wartet!
- **Projektverkürzung abseits des kritischen Pfads:** Das Beschleunigen von Hardwarebeschaffung (`d`, `GP = 40`) verkürzt das Gesamtprojekt um **0 Tage**!

## 🧠 Merkhilfen
- **Puffer-Check:** *Kritischer Pfad heißt `GP = 0` von Start bis Ziel. Freier Puffer schaut nur auf das `FAZ` der direkten Nachfolger!*
- **Zwei EAC-Welten:** *Einmaliger Ausrutscher = `AC + Restarbeit (BAC - EV)`. Dauerhafter Effizienztrend = `BAC / CPI`.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| FAZ / FEZ | Frühester Anfangs- bzw. Endzeitpunkt eines Vorgangs (Vorwärtsrechnung). |
| SAZ / SEZ | Spätester Anfangs- bzw. Endzeitpunkt ohne Verzögerung des Projektendes (Rückwärtsrechnung). |
| Gesamtpuffer (GP) | Zeitspanne (`SAZ - FAZ`), um die ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden. |
| Freier Puffer (FP) | Zeitspanne (`min FAZ_Nachf - FEZ`), ohne auch nur den frühesten Start eines Nachfolgers zu verzögern. |
| Crashing vs. Fast Tracking | Projektverkürzung durch Ressourceneinsatz/Mehrkosten (Crashing) vs. Parallelisierung von Vorgängen (Fast Tracking). |

## ✅ Selbsttest
**F:** Warum besitzt der Vorgang `i` (Implementierung TPP) im Netzplan einen Gesamtpuffer von 25 Tagen, aber einen freien Puffer von 0 Tagen?
**A:** Weil sein Nachfolger `l` (Modultest TPP) ausschließlich von `i` abhängt und daher frühestens direkt bei `FEZ(i) = 130` starten kann (`FP = 130 - 130 = 0`). Verschiebt sich `i`, verschiebt sich sofort `FAZ(l)`, allerdings ohne das Gesamtprojektende (225) zu gefährden, da auf dem Zweig `i → l → m` insgesamt 25 Tage Puffer bis `j` bzw. `n` bestehen.

**F:** Woran erkennt man in Aufgabe 3, dass die Tabelle Monatswerte und keine kumulierten Werte enthält, und wie hoch ist das Gesamtbudget BAC?
**A:** Daran, dass der Planned Value (PV) in den Monaten 1 bis 6 jeweils konstant 35.000 € beträgt (statt stetig zu wachsen). Das Gesamtbudget BAC ist die Summe aller Planwerte über die 6 Projektmonate: `6 * 35.000 € = 210.000 €`.

**F:** Wann verwendet man die Formel `EAC = AC + (BAC - EV)` und wann `EAC = BAC / CPI`?
**A:** `AC + (BAC - EV)` nutzt man, wenn bisherige Kostenabweichungen auf einmaligen Sonderereignissen beruhten und die Restarbeit wieder exakt zu Plankosten erwartet wird. `BAC / CPI` verwendet man, wenn die bisherige Kosteneffizienz (Über- oder Unterschreitungsrate) voraussichtlich auch für den Rest des Projekts anhält.
