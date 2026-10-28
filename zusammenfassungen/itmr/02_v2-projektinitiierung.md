---
id: itmr-02-projektplanung-netzplan
kurs: itmr
nr: 2
titel: V2 Projektplanung, Projektstrukturplan & Netzplantechnik
quellen: ITMR_V2_Projektinitiierung.pdf
seiten: 35
---

> **Kurz gesagt:** Von der Idee zum konkreten Plan: Wie zerlegt man ein komplexes IT-Projekt in beherrschbare Arbeitspakete? Diese Vorlesung behandelt den Projektstrukturplan (PSP), die Ablauf- und Terminplanung (Gantt-Diagramme, Meilensteine) und die Netzplantechnik inklusive Vorwärts-/Rückwärtsrechnung, Pufferzeiten und kritischem Pfad sowie Methoden der Aufwands- und Kostenschätzung.

## 🎯 Lernziele
- Den Projektstrukturplan (PSP) als zentrales Basisinstrument des Projektmanagements verstehen und erstellen können (S. 7–11).
- Methoden der Terminplanung (Datumsliste, Balkendiagramm / Gantt, Netzplan) unterscheiden und anwenden (S. 15–20).
- Netzpläne vollständig berechnen: Früheste/späteste Zeitpunkte, Gesamtpuffer, freier Puffer und kritischer Pfad (S. 21–27).
- Die Prinzipien der Ressourcen- und Kapazitätsplanung verstehen (S. 28–29).
- Schätzmethoden für IT-Projektkosten (Top-down vs. Bottom-up, parametrisch, Expertenurteil) bewerten können (S. 30–33).

## 📖 Kerninhalte
### 1. Der Projektstrukturplan (PSP / Work Breakdown Structure) (S. 7–11)
- **Bedeutung:** Der PSP ist das "Rückgrat" des Projekts; er gliedert den gesamten Projektumfang hierarchisch in Teilprojekte und elementare **Arbeitspakete (AP)**.
- **Ebenen:**
  - Ebene 1: Gesamtprojekt.
  - Ebene 2: Teilprojekte / Teilaufgaben.
  - Ebene 3+: Arbeitspakete (nicht weiter unterteilbare Einheiten für Planung und Zuweisung).
- **Gliederungsprinzipien:**
  - *Objektorientiert:* Gliederung nach Systemkomponenten (z. B. Datenbank, Frontend, Schnittstelle).
  - *Funktionsorientiert:* Gliederung nach Tätigkeiten (z. B. Konzeption, Entwicklung, Test, Schulung).
  - *Phasenorientiert:* Gliederung nach zeitlichem Projektablauf (z. B. Phase 1 Analyse, Phase 2 Rollout).
- **Entwicklungsansätze:**
  - *Top-down (Deduktiv):* Zerlegung vom Gesamtprojekt in immer feinere Teilaufgaben (Sinnvoll bei bekannten Projekttypen).
  - *Bottom-up (Induktiv):* Brainstorming aller Aufgaben und anschließende Gruppierung (Sinnvoll bei neuartigen Vorhaben).

### 2. Ablauf- und Terminplanung (S. 12–20)
- **Gründe für Planung:** Transparenz, Reduktion von Unsicherheit, Erkennen von Engpässen, Koordination von Abhängigkeiten (S. 13).
- **Prokrastination & Puffer (Studentensyndrom / Parkinsonsches Gesetz):** Zu große Einzelpuffer verleiten dazu, erst im letzten Moment zu beginnen. Puffer sollten strategisch am Projektende oder vor Meilensteinen gebündelt werden (S. 14).
- **Meilensteine:** Ereignisse von besonderer Bedeutung im Projektverlauf (Dauer = 0), die den Abschluss wichtiger Phasen markieren (z. B. "Fachkonzept freigegeben", "Systemtest bestanden") (S. 16).
- **Darstellungsformen:**
  - *Datumsliste:* Einfache tabellarische Auflistung von Terminen.
  - *Gantt-Diagramm (Balkenplan):* Horizontale Zeitbalken veranschaulichen Start, Dauer und Überschneidungen von Tätigkeiten (S. 19–20).

### 3. Netzplantechnik & Vorgangsknoten (S. 21–27)
Ein Netzplan stellt Vorgänge und ihre logischen Anordnungsbeziehungen grafisch dar. Im Vorgangsknoten-Netzplan enthält jeder Knoten:
- **FAZ:** Frühester Anfangszeitpunkt.
- **D:** Vorgangsdauer.
- **FEZ:** Frühester Endzeitpunkt (`FEZ = FAZ + D`).
- **SAZ:** Spätester Anfangszeitpunkt (`SAZ = SEZ - D`).
- **SEZ:** Spätester Endzeitpunkt.
- **GP:** Gesamtpuffer (`GP = SAZ - FAZ = SEZ - FEZ`).
- **FP:** Freier Puffer (`FP = min(FAZ aller Nachfolger) - FEZ`).

#### Berechnungsschritte:
1. **Vorwärtsrechnung (S. 25):** Start bei Projektbeginn (`FAZ = 0`). Für jeden Vorgang gilt: `FEZ = FAZ + D`. Bei mehreren Vorgängern: `FAZ_Nachfolger = max(FEZ aller direkten Vorgänger)`. Das maximale FEZ am Ende ergibt die Mindestgesamtdauer.
2. **Rückwärtsrechnung (S. 25):** Start am Projektende (`SEZ_Ende = FEZ_Ende`). Für jeden Vorgang gilt: `SAZ = SEZ - D`. Bei mehreren Nachfolgern: `SEZ_Vorgänger = min(SAZ aller direkten Nachfolger)`.
3. **Pufferzeiten (S. 24):**
  - **Gesamtpuffer (GP):** Zeitspanne, um die ein Vorgang maximal verschoben werden kann, ohne den Gesamtendtermin zu gefährden.
  - **Freier Puffer (FP):** Zeitspanne, um die ein Vorgang verschoben werden kann, ohne den FAZ des frühesten Nachfolgers zu verzögern.
4. **Kritischer Pfad (Critical Path):**
  - Die Kette aller Vorgänge, bei denen `GP = 0` (und damit `FP = 0`) gilt.
  - Jede Verzögerung auf dem kritischen Pfad verzögert das Gesamtprojekt unmittelbar um dieselbe Zeitspanne!

### 4. Ressourcen- und Kostenschätzung (S. 28–33)
- **Herausforderung bei IT-Projekten:** Immaterielle Leistung, wechselnde Anforderungen, technologische Unbekannte führen oft zu Budgetüberschreitungen (S. 30).
- **Schätzmethoden:**
  - *Top-down Schätzung:* Grobe Gesamtschätzung durch Experten oder Management, aufgeteilt auf Module.
  - *Bottom-up Schätzung:* Detaillierte Schätzung auf Ebene der einzelnen Arbeitspakete im PSP, aufsummiert zum Gesamtbudget.
  - *Analogieschätzung (Vergleichsmethode):* Rückgriff auf Erfahrungswerte früherer, ähnlicher Projekte.
  - *Parametrische Schätzung:* Statistische Formeln basierend auf Kenngrößen (z. B. Kosten pro Function Point, Codezeilen, Screens).

## 🧮 Beispiele & Rechenwege
### Vollständiges Netzplan-Rechenbeispiel
Gegeben sei folgende Vorgangskette:
- Vorgang A: Dauer 3 Tage, Vorgänger: keine.
- Vorgang B: Dauer 4 Tage, Vorgänger: A.
- Vorgang C: Dauer 2 Tage, Vorgänger: A.
- Vorgang D: Dauer 5 Tage, Vorgänger: B und C.

**1. Vorwärtsrechnung:**
- A: FAZ = 0, FEZ = 0 + 3 = 3.
- B: FAZ = 3, FEZ = 3 + 4 = 7.
- C: FAZ = 3, FEZ = 3 + 2 = 5.
- D: FAZ = max(FEZ_B, FEZ_C) = max(7, 5) = 7. FEZ = 7 + 5 = **12 Tage** (Projektende).

**2. Rückwärtsrechnung:**
- D: SEZ = 12, SAZ = 12 - 5 = 7.
- B: SEZ = min(SAZ_D) = 7, SAZ = 7 - 4 = 3.
- C: SEZ = min(SAZ_D) = 7, SAZ = 7 - 2 = 5.
- A: SEZ = min(SAZ_B, SAZ_C) = min(3, 5) = 3, SAZ = 3 - 3 = 0.

**3. Pufferberechnung:**
- A: GP = 3 - 3 = 0, FP = min(FAZ_B, FAZ_C) - FEZ_A = 3 - 3 = 0.
- B: GP = 7 - 7 = 0, FP = FAZ_D - FEZ_B = 7 - 7 = 0.
- C: GP = 7 - 5 = **2 Tage**, FP = FAZ_D - FEZ_C = 7 - 5 = **2 Tage**.
- D: GP = 12 - 12 = 0, FP = 0.

**Ergebnis:**
- Der **Kritische Pfad** verläuft über **A → B → D** (Gesamtdauer = 12 Tage).
- Vorgang C hat 2 Tage Gesamt- und freien Puffer; eine Verzögerung von C um bis zu 2 Tage hat keine Auswirkung auf D oder das Projektende.

## ⚠️ Klausurfallen & typische Fehler
- **Pufferverwechslung:** Gesamtpuffer (GP) bezieht sich auf das Projektende, freier Puffer (FP) nur auf den direkten Nachfolger. `FP <= GP` gilt immer!
- **Vorwärtsrechnung bei Verzweigungen:** Immer das **Maximum** der Vorgänger-FEZ nehmen! Bei der Rückwärtsrechnung hingegen immer das **Minimum** der Nachfolger-SAZ!
- **Meilensteindauer:** Meilensteine haben immer die Dauer 0 Tage. Sie binden keine Ressourcen, markieren nur Zustände.

## 🧠 Merkhilfen
- **Netzplan-Regel:** *Vorwärts = Maximum (das Späteste bestimmt den Start), Rückwärts = Minimum (das Früheste setzt die Frist).*
- **Kritischer Pfad:** *Kein Puffer, kein Pardon (GP = 0) – jeder Verzug trifft das Projektende.*
- **Top-Down vs. Bottom-Up:** *Top-Down schätzt das Dach, Bottom-Up stapelt die Steine.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Projektstrukturplan (PSP) | Vollständige hierarchische Zerlegung aller Aufgaben und Liefergegenstände eines Projekts. |
| Arbeitspaket (AP) | Kleinste Einheit im PSP, die von einer Person/Gruppe eigenverantwortlich bearbeitet wird. |
| Meilenstein | Ereignis von besonderer Bedeutung (Dauer = 0) zur Fortschrittskontrolle. |
| Gantt-Diagramm | Zeitachsenbasiertes Balkendiagramm zur Visualisierung von Vorgangsdauern und Terminen. |
| FAZ / FEZ | Frühester Anfangs- bzw. Endzeitpunkt eines Vorgangs (Vorwärtsrechnung). |
| SAZ / SEZ | Spätester Anfangs- bzw. Endzeitpunkt eines Vorgangs (Rückwärtsrechnung). |
| Gesamtpuffer (GP) | Differenz zwischen spätester und frühester Lage (`SAZ - FAZ`), schützt das Projektende. |
| Freier Puffer (FP) | Puffer, der den frühesten Start des Folgevorgangs nicht beeinträchtigt. |
| Kritischer Pfad | Kette aller Vorgänge ohne Pufferzeit (`GP = 0`), bestimmt die Gesamtlaufzeit. |

## ✅ Selbsttest
**F:** Was ist der primäre Zweck des Projektstrukturplans (PSP) im Projektmanagement?
**A:** Er dient der vollständigen, hierarchischen Strukturierung des Projektgegenstands in handhabbare Teilaufgaben und Arbeitspakete und bildet die Basis für Termin-, Kosten- und Ressourcenplanung.

**F:** Wie unterscheiden sich Gesamtpuffer (GP) und freier Puffer (FP) in der Netzplantechnik?
**A:** Der Gesamtpuffer ist die Zeitspanne, um die ein Vorgang verschoben werden darf, ohne den Gesamt-Projektendtermin zu gefährden; der freie Puffer darf den frühesten Anfangszeitpunkt der direkten Nachfolger nicht verzögern.

**F:** Warum verlangt die Vorwärtsrechnung im Netzplan bei mehreren Vorgängern das Maximum?
**A:** Weil ein Nachfolger erst dann beginnen kann, wenn alle seine zwingenden Vorbedingungen und Vorgängervorgänge vollständig abgeschlossen sind.

**F:** Welche Eigenschaft zeichnet den kritischen Pfad aus und warum ist er für den Projektleiter essenziell?
**A:** Alle Vorgänge auf dem kritischen Pfad haben einen Gesamtpuffer von 0; jede Verzögerung eines dieser Vorgänge führt unmittelbar zu einer Verzögerung des gesamten Projektendtermins.

**F:** Was versteht man unter einer parametrischen Kostenschätzung?
**A:** Eine mathematisch-statistische Schätzung von Kosten oder Aufwänden anhand messbarer Projektparameter (z. B. Anzahl Codezeilen, Function Points, Datenbanktabellen).
