---
id: itmr-03-projektsteuerung
kurs: itmr
nr: 3
titel: V3 Projektsteuerung, Earned Value Methode, Risikomanagement & Schattenprojekte
quellen: ITMR_V3_Projektsteuerung.pdf
seiten: 33
---

> **Kurz gesagt:** Wie behält man ein laufendes Projekt im Griff? Diese Vorlesung behandelt das Projektcontrolling mit Statusberichten, die Meilensteintrendanalyse (MTA) zur Terminerkennung, die Earned Value Methode (EVM) zur objektiven Kosten- und Leistungsüberwachung, das Risikomanagement sowie das Phänomen von Schattenprojekten.

## 🎯 Lernziele
- Instrumente des operativen Projektcontrollings (Statusbericht, Meilensteintrendanalyse) anwenden und interpretieren (S. 4–9).
- Die Earned Value Methode (EVM) mit allen Kennzahlen (BAC, PV, AC, EV, CV, SV, CPI, SPI, EAC) verstehen und Klausuraufgaben sicher durchrechnen (S. 10–20).
- Den Risikomanagementprozess (Identifikation, qualitative/quantitative Bewertung, Bewältigung) strukturiert beschreiben (S. 22–27).
- Schattenprojekte und Schatten-IT definieren, klassifizieren und deren Risiken sowie Innovationspotenziale abwägen (S. 29–31).

## 📖 Kerninhalte
### 1. Projektcontrolling, Statusberichte & Meilensteintrendanalyse (MTA) (S. 4–9)
- **Ziele der Steuerung:** Sicherung des Erreichens der Projektziele durch regelmäßige Soll-Ist-Vergleiche, Erkennen von Abweichungen und Einleiten von Korrekturmaßnahmen (S. 4–5).
- **Projektstatusbericht (S. 6–7):**
  - Regelmäßiges, standardisiertes Kommunikationsinstrument für Auftraggeber, Lenkungsausschuss und Stakeholder.
  - Typischer Aufbau: Ampelstatus (Kosten, Termine, Qualität), erreichte Ergebnisse der Periode, Plan für die Folgeperiode, erkannte Risiken und offene Entscheidungsbedarfe.
- **Meilensteintrendanalyse (MTA) (S. 8–9):**
  - Grafische Methode zur frühzeitigen Prognose von Terminverschiebungen.
  - Auf der x-Achse steht das Berichtsdatum (wann wird gefragt?), auf der y-Achse der prognostizierte Termin des Meilensteins (wann wird er fertig?).
  - *Kurvenverlauf deuten:*
    - Waagerechte Linie: Meilenstein liegt exakt im Plan.
    - Ansteigende Linie: Meilenstein verschiebt sich nach hinten (Verzögerung!).
    - Abfallende Linie: Meilenstein wird früher als geplant erreicht.

### 2. Die Earned Value Methode (EVM) (S. 10–20)
Die EVM verknüpft Umfang, Zeitplan und tatsächliche Kosten zu einer objektiven Leistungs- und Wirtschaftlichkeitsbewertung.

#### Basiskennzahlen (S. 13–14):
- **BAC (Budget at Completion):** Das ursprünglich genehmigte Gesamtbudget des Projekts.
- **PV (Planned Value / Planwert):** Geplante Kosten für die bis zum Stichtag vorgesehene Arbeitsleistung (`PV = geplanter %-Fortschritt * BAC`).
- **AC (Actual Cost / Istkosten):** Die bis zum Stichtag tatsächlich angefallenen Kosten.
- **EV (Earned Value / Fertigstellungswert):** Der monetäre Wert der bis zum Stichtag tatsächlich erbrachten Leistung (`EV = tatsächlicher Fertigstellungsgrad * BAC`).
  - *Fertigstellungsgrad-Ermittlung (S. 14):* Mengenproportional (z. B. 150 von 500 Rechnern = 30 %), zeitproportional, 50/50-Verfahren oder Meilensteintechnik.

#### Abweichungen (Variances) (S. 15–16):
- **Cost Variance (Kostenabweichung):**
  - `CV = EV - AC`
  - `CV > 0`: Projekt arbeitet wirtschaftlicher als geplant (Kostenunterschreitung).
  - `CV < 0`: Kostenüberschreitung (Projekt ist teurer als die Leistung wert ist).
- **Schedule Variance (Planabweichung):**
  - `SV = EV - PV`
  - `SV > 0`: Projekt ist dem Zeitplan voraus.
  - `SV < 0`: Projekt liegt hinter dem Zeitplan zurück (Verzug).

#### Performance-Indizes (S. 17):
- **CPI (Cost Performance Index):** `CPI = EV / AC`
  - `CPI > 1,0`: Höhere Wirtschaftlichkeit (für 1 € Ausgabe erhält man mehr als 1 € Gegenwert).
  - `CPI < 1,0`: Unwirtschaftlich (Kosten laufen davon).
- **SPI (Schedule Performance Index):** `SPI = EV / PV`
  - `SPI > 1,0`: Schneller als geplant.
  - `SPI < 1,0`: Langsamer als geplant.

#### Prognosen für das Projektende (S. 18–20):
- **EAC (Estimate at Completion / Voraussichtliche Gesamtkosten):**
  - Standardannahme (bisherige Kosteneffizienz bleibt gleich): `EAC = BAC / CPI`.
  - Wenn Abweichungen einmalig waren und Restarbeiten nach Plan laufen: `EAC = AC + (BAC - EV)`.
- **Kostenüber-/unterschreitung (VAC):** `VAC = BAC - EAC`.

### 3. Risikomanagement im Projekt (S. 22–27)
- **Risikobegriff:** Unsicherheit über zukünftige Ereignisse mit negativer Auswirkung auf die Projektziele (`Risikowert = Eintrittswahrscheinlichkeit * Schadensausmaß`) (S. 22).
- **Phasen des Risikomanagements:**
  1. *Risikoidentifikation:* Brainstorming, Checklisten, Risikostrukturplan (Grouping nach technischen, organisatorischen, externen Risiken) (S. 23–24).
  2. *Risikoanalyse & -bewertung:* Qualitativ (Risikomatrix niedrig/mittel/hoch) und quantitativ (Erwartungswert des Schadens in Euro) (S. 25).
  3. *Risikobewältigung (Strategien) (S. 26–27):*
     - **Vermeiden:** Ursache eliminieren (z. B. riskante Technologie nicht einsetzen).
     - **Vermindern / Mindern:** Wahrscheinlichkeit oder Schaden durch Schutzmaßnahmen reduzieren (z. B. Schulung, automatisierte Tests).
     - **Überwälzen / Transferieren:** Risiko an Dritte abgeben (z. B. Festpreisverträge, Versicherungen).
     - **Akzeptieren:** Risiko bewusst tragen und Budget-/Zeitpuffer vorhalten.

### 4. Schattenprojekte & Schatten-IT (S. 29–31)
- **Definition:** IT-Projekte oder Systeme, die außerhalb der offiziellen IT-Organisation, ohne Freigabe des Managements und ohne Einhaltung der zentralen IT-Governance durchgeführt werden (Buchwald & Urbach 2012).
- **Arten von Schattenprojekten (S. 30):**
  - Pilotprojekte aus Fachabteilungen.
  - Strategische Initiativen unter dem Radar.
  - Umgehungsprojekte wegen schwerfälliger IT-Prozesse.
- **Zwei Seiten der Medaille:**
  - *Gefahren:* Sicherheitslücken, mangelnde Datensicherheit (DSGVO), fehlende Schnittstellenkompatibilität, Redundanz und Ressourcenverschwendung.
  - *Chancen:* Hohe Agilität, schnelle Problemlösung im Fachbereich, Innovationsquelle für das Unternehmen (S. 31).

## 🧮 Beispiele & Rechenwege
### Ausführliche EVM-Klausuraufgabe
**Ausgangssituation:**
- Gesamtbudget eines Softwareprojekts: `BAC = 100.000 €`.
- Geplante Projektdauer: 10 Monate.
- Stichtag: Nach 4 Monaten.
- Nach Plan sollten zu diesem Zeitpunkt 40 % der Gesamtarbeit erledigt sein.
- Tatsächlicher Erhebungsstand am Stichtag:
  - Fertigstellungsgrad der Arbeit = 30 %.
  - Bislang tatsächlich ausgegebenes Geld = 50.000 €.

**1. Basiskennzahlen berechnen:**
- `PV = 40 % * 100.000 € = 40.000 €`
- `AC = 50.000 €`
- `EV = 30 % * 100.000 € = 30.000 €`

**2. Abweichungen analysieren:**
- Kostenabweichung: `CV = EV - AC = 30.000 € - 50.000 € = -20.000 €` (Kostenüberschreitung um 20.000 €!).
- Planabweichung: `SV = EV - PV = 30.000 € - 40.000 € = -10.000 €` (Leistungsrückstand im Wert von 10.000 €!).

**3. Performance-Indizes bestimmen:**
- `CPI = EV / AC = 30.000 / 50.000 = 0,60` (Für jeden investierten Euro wurden nur 60 Cent Gegenwert erarbeitet).
- `SPI = EV / PV = 30.000 / 40.000 = 0,75` (Das Projekt schreitet nur mit 75 % der geplanten Geschwindigkeit voran).

**4. Prognose der Gesamtkosten (EAC):**
- Unter der Annahme, dass der bisherige Trend anhält:
  `EAC = BAC / CPI = 100.000 € / 0,60 = 166.667 €`.
- Die prognostizierte Budgetüberschreitung beträgt somit ca. 66.667 €!

## ⚠️ Klausurfallen & typische Fehler
- **EV-Berechnung:** Der Earned Value hängt **immer** vom BAC ab (`EV = Fortschritt * BAC`), **niemals** von den tatsächlichen Kosten AC!
- **Vorzeichenregel:** Sowohl bei CV als auch bei SV bedeutet ein **negatives Vorzeichen** immer etwas Schlechtes (`CV < 0` = zu teuer, `SV < 0` = verzögert).
- **MTA-Linienrichtung:** Eine Linie, die nach **oben** wandert, bedeutet **Terminverzug** (das Datum rückt nach hinten), keine Verbesserung!

## 🧠 Merkhilfen
- **EVM-Subtraktionen:** Immer `EV` zuerst! (`CV = EV - AC`, `SV = EV - PV`).
- **Index-Regel:** *Über 1 ist super (1,2 = effizient/schneller), unter 1 ist bitter (0,8 = teuer/langsamer).*
- **Risikostrategien V-M-T-A:** **V**ermeiden, **M**indern, **T**ransferieren, **A**kzeptieren.

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Meilensteintrendanalyse (MTA) | Grafisches Frühwarnsystem für Terminabweichungen von Meilensteinen im Zeitablauf. |
| Budget at Completion (BAC) | Das vertraglich oder intern genehmigte Gesamtbudget des Projekts. |
| Planned Value (PV) | Der monetäre Planwert der Arbeit, die bis zum Stichtag erledigt sein sollte. |
| Actual Cost (AC) | Die tatsächlich bis zum Stichtag angefallenen Istkosten. |
| Earned Value (EV) | Der objektive Wert der bis zum Stichtag tatsächlich geleisteten Arbeit (`Fortschritt * BAC`). |
| CPI / SPI | Kennzahlen für Wirtschaftlichkeit (`EV/AC`) und Termineffizienz (`EV/PV`). |
| Estimate at Completion (EAC) | Die hochgerechneten Gesamtkosten des Projekts bei Projektabschluss. |
| Schatten-IT | Von Fachbereichen eigenmächtig beschaffte oder entwickelte IT-Lösungen ohne IT-Freigabe. |

## ✅ Selbsttest
**F:** Was zeigt eine Meilensteintrendanalyse (MTA), wenn die Kurve eines Meilensteins im Zeitverlauf steil nach oben abknickt?
**A:** Es zeigt eine gravierende Terminverzögerung an: Bei jeder Berichterstattung wird der erwartete Fertigstellungstermin des Meilensteins weiter in die Zukunft verschoben.

**F:** Wie lautet die Formel für die Kostenabweichung (CV) in der Earned Value Analyse und was bedeutet ein negatives Ergebnis?
**A:** `CV = EV - AC`; ein negatives Ergebnis bedeutet eine Kostenüberschreitung, d. h. für die erbrachte Leistung wurde mehr Geld ausgegeben als ursprünglich budgetiert.

**F:** Was drückt ein Cost Performance Index (CPI) von 0,80 aus?
**A:** Das Projekt arbeitet unwirtschaftlich: Für jeden tatsächlich ausgegebenen Euro wurde nur ein Gegenwert von 0,80 Euro an Projektleistung fertiggestellt.

**F:** Wie lauten die vier grundlegenden Strategien zur Risikobewältigung?
**A:** Risikovermeidung (Aktivität ändern), Risikominderung (Eintrittswahrscheinlichkeit/Schaden senken), Risikotransfer (an Dritte abwälzen) und Risikoakzeptanz (Puffer bilden).

**F:** Welche Gefahren und welche Chancen birgt Schatten-IT in Unternehmen?
**A:** Gefahren sind Sicherheitsrisiken, mangelnde Datensicherheit/DSGVO-Verstöße und Silo-Inseln; Chancen liegen in schnellerer Problemlösung, Agilität und hoher Innovationskraft für Fachbereiche.
