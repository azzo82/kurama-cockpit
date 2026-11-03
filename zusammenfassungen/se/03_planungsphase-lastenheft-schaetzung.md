---
id: se-03-planungsphase-lastenheft-schaetzung
kurs: se
nr: 3
titel: Kapitel 3 Planungsphase: Lastenheft, Aufwandsschätzung (Function Points, COCOMO) & Risikomanagement
quellen: 3_SE_bac_Planungsphase.pdf
seiten: 27
---

> **Kurz gesagt:** In der **Planungsphase** wird entschieden, *welches* Problem gelöst werden soll, ob das Vorhaben machbar ist und was es kosten wird. Dieses Skript von Prof. Dr. Anja Metzner behandelt den 4-stufigen Weg von der Ist-Aufnahme zum Soll-Konzept, die scharfe Trennung zwischen **Lastenheft** und **Pflichtenheft**, die **Aufwandsschätzung** (Produktivitätsmaße, LOC-Kritik, **Function-Point-Methode**, **COCOMO / Kitchenham-Formel**, Schätzungstrichter & **Teufelsviereck**) sowie das **Risikomanagement**.

## 🎯 Lernziele
- Die 4 Schritte zur Problemdefinition (*Ist-Aufnahme → Ist-Analyse → Verbesserungsvorschläge → Soll-Konzept*) sowie das kognitive Modell nach **Holl/Maydt (2006)** erläutern (S. 3–6).
- Die **4 Hauptaufgaben der Planungsphase**, ihre schriftlichen Ergebnisse und die **Verantwortlichkeitsmatrix (`v` / `m`)** beherrschen (S. 7–8, S. 27).
- **Lastenheft** und **Pflichtenheft** nach Phase, Sichtweise, Inhalt (*WAS* vs. *WIE*) und Rechtsverbindlichkeit abgrenzen sowie den Aufbau eines Lastenhefts skizzieren (S. 9–11).
- Projektkosten gliedern, **LOC vs. Function Points** bewerten, das **6-Schritte-Function-Point-Verfahren**, die **5 Schätzverfahren** (inkl. Kitchenham-/COCOMO-Formel), den **4x-Schätzungstrichter** und das **Teufelsviereck nach Sneed** erklären (S. 13–24, S. 27).
- Die **3 Risikokategorien** und den **4-stufigen Risikomanagement-Zyklus** nach Sommerville anwenden (S. 25–27).

## 📖 Kerninhalte

### 1. Ablauf, Aufgaben & Rollen der Planungsphase (S. 3–8)
- **Grundsätzliches 4-Schritte-Vorgehen zur Problemdefinition (S. 4–5):**
  1. **Ist-Aufnahme:** Neutrale Beschreibung des momentanen Systems und seines aktuellen Zustands.
  2. **Ist-Analyse:** Bewertung des Ist-Zustands (**Schwachstellenanalyse** – wo und ob Verbesserungen nötig sind).
  3. **Verbesserungsvorschläge:** Sammlung möglicher Lösungsalternativen und grobe Veränderungswege.
  4. **Soll-Konzept:** Auswahl einer Alternative, formales Modell von Ist- und geplantem Soll-Zustand → mündet in die Spezifikation des **Lastenhefts**.
- **Kognitives Modell der Softwareeinführung (Holl & Maydt 2006, S. 6):**
  - Trennt die **deskriptive Ist-Aufnahme** (*survey of the current state* → Systems Analysis → formalisiertes Ist-Modell) von der **präskriptiven Soll-Konzeption** (*concept of the planned state* → Requirements Engineering → formalisierte Soll-Anforderungen).
  - *Kernerkenntnis:* Beide Seiten sind über einen iterativen Lernzyklus (*Experiential Learning*) gekoppelt – schon das Befragen und Analysieren verändert das Problembewusstsein der Mitarbeiter im Unternehmen!

- **Die 4 Aufgaben, Ergebnisse & Verantwortlichkeiten der Planungsphase (S. 7–8 – extrem klausurrelevant!):**
  | Aufgabe (S. 7) | Kerninhalt | Schriftliches Ergebnis (S. 8) |
  |---|---|---|
  | **1. Voruntersuchung** | Ist-Aufnahme/-Analyse, Alternativen, Soll-Konzept, wichtigste Anforderungen | **Lastenheft** |
  | **2. Machbarkeitsstudie** | Technische/fachliche Realisierbarkeit, Abdeckung durch Standard-SW prüfen, Ressourcen & Risiken prüfen | **Studien** |
  | **3. Produktplanung** | Produktauswahl, Trend-/Marktanalysen, Forschungsergebnisse, Kundenanalysen | **Studien, Risikoanalyse** |
  | **4. Projektplanung** | Aufwandsschätzung inkl. Kosten-, Ressourcen- und Terminplanung | **Kosten-, Termin- u. Ressourcenplan** |

  - **Verantwortlichkeitsmatrix (`v` = verantwortlich, `m` = mitwirkend, S. 8):**
    | Dokument / Ergebnis | Auftraggeber (Kunde) | Projektleiter | Anwendungsspezialist (Poweruser) | Fachlicher Entwickler (SE-Spezialist) |
    |---|:---:|:---:|:---:|:---:|
    | **Lastenheft** | `m` | `m` | **`v`** | **`v`** |
    | **Studien, Risikoanalyse** | `m` | `m` | **`v`** | `m` |
    | **Projektplan** | `m` | **`v`** | `m` | `m` |

---

### 2. Lastenheft vs. Pflichtenheft (S. 9–11)
| Merkmal | Lastenheft | Pflichtenheft |
|---|---|---|
| **SE-Phase** | **Planungsphase** | **Definitionsphase** *(Verfeinerung des Lastenhefts)* |
| **Perspektive** | **Auftraggeber-Sicht** (fachliche Basisanforderungen) | **Auftragnehmer-Sicht** (detaillierte Realisierungsvorgaben) |
| **Leitfrage** | **„WAS"** soll das System leisten (und wofür)? *(NICHT das WIE!)* | **„WIE"** und womit werden die Anforderungen konkret umgesetzt? |
| **Rechtsstatus** | Grundlage der Ausschreibung / Anfrage | **Vertragsgegenstand** zwischen Auftraggeber und Auftragnehmer! |

- **Modellierungsrichtungen (S. 9):**
  - **Outside-in:** Zuerst die *Systemumgebung* (Schnittstellen/Akteure) modellieren, danach die *Systeminterna*.
  - **Inside-out:** Zuerst die *Systeminterna* modellieren, danach die *Systemumgebung*.
- **Form & Mustergliederung eines Lastenhefts (S. 10–11):**
  - Verbale Beschreibung + Diagramme/Grafiken; **jede einzelne Anforderung muss eindeutig nummeriert sein!**
  - *Musterkapitel (S. 11):* `Historie` → `1 Projektbeschreibung` (1.1 Problemstellung/Vision, 1.2 Ist-Zustand, 1.3 Bewertung/Motivation, 1.4 Soll-Zustand/Ziel, 1.5 Lösungsweg, 1.6 Einschränkungen, 1.7 Verantwortliche, 1.8 Stakeholder, 1.9 Termin) → `2 Anforderungen` (2.1 Übersicht, 2.2 Muss-Anforderungen diese Version, 2.3 Wunschanforderungen, 2.4 Spätere Versionen, 2.5 **Abgelehnte Anforderungen**, 2.6 Offene Punkte) → `3 Ergänzende Infos` → `4 Glossar`.

---

### 3. Aufwandsschätzung, Function Points, COCOMO & Teufelsviereck (S. 12–24)

#### A) Projektgesamtkosten & Software-Produktivität (S. 13–20)
- **3 Kostenblöcke eines SW-Projekts (S. 14):**
  1. *HW-, SW-Kosten & Wartung*
  2. *Reise- & Schulungskosten*
  3. *Personalkosten* – umfassen **nicht nur Entwicklergehälter**, sondern auch Raumkosten (Miete, Heizung, Licht), Sekretariat/Technikpersonal, Kommunikationsnetze, zentrale Dienste (Druckerei) und Sozialversicherungen!
- **Produktivitätsmaße für Software (S. 15–20):**
  1. **Größenspezifische Maße:** `LOC (Lines of Code)`, Anzahl Objektcodeanweisungen, Dokumentationsseiten.
     - *Kritik an LOC (S. 17):* Keine einheitlichen Zählstandards (Leerzeilen? Deklarationen?), extrem **programmiersprachenabhängig**, unterscheidet nicht zwischen gutem und schlechtem Code.
  2. **Funktionsspezifische Maße:** **`Function-Points (FP)`** (Albrecht 1979), `Object-Points`.
     - *Vorteile FP (S. 18):* **Programmiersprachenunabhängig**, bereits aus Anforderungen schätzbar, Systemvergleich möglich (besonders geeignet für ein-/ausgabeorientierte DV-Systeme; grober Folienrichtwert: ca. *1 FP pro Personenmonat* bei Kleinstwerten bzw. ablesbar über Balzert-Erfahrungskurve).
  - *5 Einflussfaktoren auf die Produktivität (S. 16):* (1) Domänenerfahrung, (2) Prozessqualität/Vorgehensmodell, (3) Projektgröße (mehr Köpfe = mehr Kommunikationsaufwand!), (4) Technische Tool-Unterstützung (CASE), (5) Arbeitsumgebung/Wohlbefinden.
  - *Generelle Schwäche aller Volumen/Zeit-Maße (S. 20):* Ignorieren **nicht-funktionale Qualität** (Wartbarkeit, Zuverlässigkeit, Refactoring) und **Wiederverwendung** und verleiten zum Fehlschluss **„Mehr Code/Volumen = Besser"**.

#### B) Das 6-Schritte-Function-Point-Verfahren (nach Balzert, S. 18–19)
1. **Produktanforderungen analysieren.**
2. **Kategorisierung in 5 Elementtypen:** (1) *Eingabedaten*, (2) *Ausgabedaten*, (3) *Abfragen (Benutzerinteraktionen)*, (4) *Interne Datenbestände (Dateien)*, (5) *Referenzdaten (externe Schnittstellen)*.
3. **Gewichtung jedes Elements nach Komplexität:** `einfach`, `mittel` oder `komplex`.
4. **Roh-Function-Points** im Berechnungsformular summieren.
5. **Einflussfaktoren (Summe 0–60)** bewerten und einrechnen.
6. **Bewertete Function Points (`FP ± 30 %`)** berechnen und über historische Erfahrungskurve die **Entwicklungszeit in Personenmonaten (PM)** ablesen (Folienbeispiel S. 19: `8 FP ≈ 2,6–2,7 PM`).

#### C) Die 5 Schätzverfahren & die algorithmische Kostenformel (S. 21–24)
- **Die 5 Verfahren der Aufwandsschätzung (S. 21 – Pflichtwissen für die Klausur!):**
  1. **Algorithmisches Aufwandsmodell** (z. B. **COCOMO** – *Constructive Cost Model*): Mathematische Formel auf Basis von Größenmetriken.
  2. **Expertenbeurteilung:** Mehrere Experten schätzen unabhängig und führen ihre Schätzungen zusammen.
  3. **Analogieschätzung:** Vergleich mit den Ist-Kosten eines abgeschlossenen, ähnlichen Referenzprojekts.
  4. **Parkinsons Gesetz:** *„Arbeit dehnt sich genau auf die verfügbare Zeit aus"* → Kosten richten sich nach vorhandenen Personen × Zeit bis Liefertermin.
  5. **Price to win:** Schätzung orientiert sich am Budget/Zahlungswillen des Kunden, um den Auftrag zu gewinnen.

- **Allgemeine Formel algorithmischer Kostenmodelle (Kitchenham 1990 / COCOMO-Basis, S. 22):**
  ```
  Aufwand = A * (Größe ^ B) * M
  ```
  - `A`: Konstante für Organisation & Softwaretyp.
  - `Größe`: Geschätzter Umfang in `LOC`, `Function-Points` oder `Object-Points`.
  - `B`: **Skalenexponent zwischen `1,0` und `1,5`** → Da `B > 1` bei Großprojekten gilt, wächst der Aufwand **überproportional/exponentiell** mit der Softwaregröße (Kommunikations- und Integrationskomplexität)!
  - `M`: Multiplikator aus Prozess-, Produkt- und Teammerkmalen (Kostentreiber).

- **Schätzungstrichter / Cone of Uncertainty (Boehm 1995, S. 23):**
  - Zu Projektbeginn (*Anforderungen*) schwankt eine Schätzung um den **Faktor `4x` nach oben (`400 %`) und `1/4x` nach unten (`25 %`)**! Erst über *SW-Design → Implementierung → Test → Einführung* konvergiert der Fehler gegen 0.

- **Das Teufelsviereck nach Sneed (1983, S. 24):**
  - Vier konkurrierende Achsen spannen eine **konstante Produktivitätsfläche** auf: **Produktqualität** (oben), **Produktgröße/Funktionsumfang** (rechts), **Erstellungszeit** (unten), **Entwicklungskosten** (links).
  - *Konsequenz:* Zieht man an Qualität und Funktionsumfang nach außen, schnellen zwangsläufig **Kosten** und/oder **Entwicklungsdauer** in die Höhe!

---

### 4. Risikomanagement in Softwareprojekten (S. 25–26)
- **Die 3 Risikokategorien (S. 25):**
  1. **Projektrisiken** *(betreffen Zeitplan & Ressourcen)*: Personalausfall/-wechsel, Managementwechsel, fehlende HW/SW, Anforderungsänderungen, Verzögerungen, Umfangsunterschätzung.
  2. **Produktrisiken** *(betreffen Qualität & Leistung der SW)*: Schlechte CASE-Tools/Hilfsmittel sowie ebenfalls Anforderungsänderungen, Verzögerungen, Umfangsunterschätzung.
  3. **Wirtschaftliche Risiken** *(betreffen das Unternehmen/Markt)*: Technologiewandel, neue Konkurrenzprodukte.
- **4-stufiger Risikomanagement-Prozess (Sommerville 2017, S. 26):**
  1. **Risikoerkennung** → *Liste potentieller Risiken*
  2. **Risikoanalyse** → *Priorisierte Risikoliste*
  3. **Risikoplanung** → *Risikovermeidungsplan & Notfallplan*
  4. **Risikoüberwachung** → *Laufende Risikobewertung* (mit **Rückkopplungspfeil zurück zu Schritt 2 Risikoanalyse**!).

## 🧮 Beispiele & Rechenwege
### Personalkosten-Kalkulation einer Anforderung (S. 13)
- **Gegeben:** Anforderung Nr. 433, Aufgabe Nr. 23 (`Funktion: UserLogin()`):
  - Geschätzter Aufwand: `2 Personen` für jeweils `2 Manntage` (`1 Manntag = 8 Stunden`)
  - Kalkulationsstundensatz (inkl. Personalneben-/Raumkosten): `80 €/h`
- **Rechenweg:**
  - Gesamte Personenstunden = `2 Personen * 2 Tage * 8 h/Tag = 32 Personenstunden`
  - **Gesamtkosten der Aufgabe** = `32 h * 80 €/h = 2.560,00 €`

## ⚠️ Klausurfallen & typische Fehler
- **Verantwortlichkeits-Falle beim Lastenheft (S. 8):** Obwohl das Lastenheft die Anforderungen *aus Sicht des Auftraggebers* formuliert, ist laut Folie 8 der Auftraggeber nur **mitwirkend (`m`)**, während **Anwendungsspezialist (`v`)** und **fachlicher Entwickler (`v`)** für die Erstellung verantwortlich zeichnen!
- **Lastenheft ist KEIN Vertragsgegenstand (S. 9):** Rechtsverbindlicher Vertragsgegenstand wird erst das in der Definitionsphase verfeinerte **Pflichtenheft**!
- **Exponent `B` in der Kostenformel ist NICHT linear (S. 22):** Doppelte Softwaregröße kostet bei `B > 1` (z. B. `B = 1,2`) **mehr als das Doppelte** an Aufwand (`2^1,2 = 2,30`)!
- **Personalkosten zu eng fassen (S. 14):** In der Softwarekalkulation zählen Heizung, Büromiete, Sekretariat, IT-Netzwerk und Arbeitgeber-Sozialabgaben zu den **Personalkosten** (umgelegt im Stundensatz)!

## 🧠 Merkhilfen
- **Lastenheft vs. Pflichtenheft:** *Der Kunde lädt dem Entwickler seine **Lasten** auf (**WAS** will ich?); der Entwickler nimmt sich in die **Pflicht** (**WIE** setze ich es vertraglich um?).*
- **5 Function-Point-Arten:** *3× Transaktionen (Eingaben, Ausgaben, Abfragen) + 2× Daten (interne Datenbestände, externe Referenzdaten).*
- **4 Risiko-Schritte (E-A-P-Ü):** **E**rkennen → **A**nalysieren → **P**lanen → **Ü**berwachen.

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Lastenheft | Vom Auftraggeber getriebene Gesamtheit der fachlichen Anforderungen (*WAS*, Planungsphase). |
| Pflichtenheft | Vom Auftragnehmer ausgearbeitete Realisierungsvorgabe (*WIE*, Definitionsphase, Vertragsgegenstand). |
| Outside-in vs. Inside-out | Erst Systemumgebung dann Interna modellieren vs. erst Systeminterna dann Umgebung. |
| Function Points (FP) | Sprachunabhängiges funktionsspezifisches Maß für Softwaregröße anhand von Ein-/Ausgaben und Dateien. |
| COCOMO | Algorithmisches Kostenschätzmodell (*Constructive Cost Model*) auf Basis von `A * Größe^B * M`. |
| Teufelsviereck (Sneed) | Zielkonflikt zwischen Qualität, Funktionsumfang, Entwicklungszeit und Kosten bei fester Produktivität. |

## ✅ Selbsttest
**F:** Welche vier Hauptaufgaben umfasst die Planungsphase und welche schriftlichen Ergebnisse gehen jeweils daraus hervor? *(Offizielle Lernzielfrage S. 27)*
**A:** 1. *Voruntersuchung* → Ergebnis: **Lastenheft**; 2. *Machbarkeitsstudie* → Ergebnis: **Studien**; 3. *Produktplanung* → Ergebnis: **Studien & Risikoanalyse**; 4. *Projektplanung* → Ergebnis: **Kosten-, Termin- und Ressourcenplan**.

**F:** Worin unterscheiden sich Lastenheft und Pflichtenheft hinsichtlich Entstehungsphase, Sichtweise, Leitfrage und Vertragsrelevanz?
**A:** Das *Lastenheft* entsteht in der Planungsphase aus Sicht des Auftraggebers und beschreibt das fachliche „WAS" (nicht das WIE). Das *Pflichtenheft* entsteht durch Verfeinerung in der Definitionsphase aus Sicht des Auftragnehmers, beschreibt das „WIE" der Umsetzung und bildet den rechtsverbindlichen **Vertragsgegenstand**.

**F:** Welche Vorteile bietet das Function-Point-Verfahren gegenüber Lines of Code (LOC), und welche generellen Schwächen teilen dennoch beide Maße?
**A:** Function Points sind programmiersprachenunabhängig, objektiv über 5 Funktions-/Datenarten zählbar und schon früh anhand der Anforderungen (vor dem Codieren) bestimmbar. Beide Volumenmaße vernachlässigen jedoch nicht-funktionale Qualitätsmerkmale (z. B. Wartbarkeit, Sicherheit) sowie Code-Wiederverwendung und fördern den Fehlschluss „Mehr Umfang = höhere Produktivität".

**F:** Nennen Sie die fünf Schätzverfahren aus der Vorlesung und erklären Sie die Größen `A`, `B` und `M` in der Formel `Aufwand = A * Größe^B * M`! *(Offizielle Lernzielfrage S. 27)*
**A:** Die 5 Verfahren sind: (1) Algorithmisches Aufwandsmodell (COCOMO), (2) Expertenbeurteilung, (3) Analogieschätzung, (4) Parkinsons Gesetz und (5) Price to win. In der Formel ist `A` ein konstanter Organisations-/Softwarefaktor, `B` ein Exponent zwischen `1,0` und `1,5` für überlineares Aufwandswachstum bei Großprojekten, und `M` ein Multiplikator für Prozess-, Produkt- und Teammerkmale.

**F:** Welche drei Risikokategorien unterscheidet das Risikomanagement und wie lauten die vier Prozessschritte mit ihren Ergebnissen? *(Offizielle Lernzielfrage S. 27)*
**A:** Die 3 Kategorien sind *Projektrisiken* (Zeitplan/Ressourcen), *Produktrisiken* (Qualität/Leistung) und *wirtschaftliche Risiken* (Markt/Unternehmen). Die 4 Schritte sind: 1. *Risikoerkennung* (Liste potentieller Risiken) → 2. *Risikoanalyse* (Priorisierte Liste) → 3. *Risikoplanung* (Risikovermeidungs- & Notfallplan) → 4. *Risikoüberwachung* (Risikobewertung, mit Rückkopplung zur Risikoanalyse).
