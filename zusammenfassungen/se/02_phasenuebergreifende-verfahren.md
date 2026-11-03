---
id: se-02-phasenuebergreifende-verfahren
kurs: se
nr: 2
titel: Kapitel 2 Phasenübergreifende Verfahren: Vorgehensmodelle, Projektplanung & Projektmanagement
quellen: 2_SE_bac_Phasenübergreifend.pdf
seiten: 44
---

> **Kurz gesagt:** Wie organisiert man professionelle Softwareentwicklung statt chaotischem Drauflos-Programmieren? Dieses Zentralskript von Prof. Dr. Anja Metzner behandelt alle wichtigen **Vorgehensmodelle** (Wasserfall, V-Modell/V-Modell XT, Spiralmodell, Agile Modelle mit Scrum, XP, Kanban & CI/CD), die **Projektplanung** (Magisches Dreieck, Planungsregelkreis) sowie das operative **Projektmanagement** inklusive Gantt-Diagramm, Prof. Metzners spezifischem **Vorgangsknotennetzplan-Schema**, Ressourcenplanung und Kostenkalkulation.

## 🎯 Lernziele
- Definition, Phasenbestandteile, die **6 SE-Grundphasen** und die allgemeinen Vorteile von Vorgehensmodellen erklären (S. 3–7, S. 44).
- **Wasserfallmodell** (klassisch, iterativ, inkrementell), **V-Modell / V-Modell XT** (Verifikation vs. Validierung, 4 Produktzustände, 4 Submodelle, Tailoring), **Spiralmodell** und **Agile Modelle** (Agiles Manifest, Scrum, XP, Kanban, CI/CD) mit Vor-/Nachteilen und Einsatzgebieten vergleichen (S. 8–27).
- Das **Magische Dreieck**, die 6 Managementaufgaben und den iterativen Regelkreis der **Projektplanung** beschreiben (S. 28–30).
- Projektmanagement nach **DIN 69901** und die **9 PMI-Wissensgebiete** benennen (S. 31–32).
- **Gantt-Diagramme** und **Vorgangsknotennetzpläne** (nach dem Metzner-Knotenschema `FA | Dauer | SA` / `FE | GP | SE`, inkl. FS/SS/FF/SF, kritischem Pfad, Ressourcenplan und Personalkostenkalkulation) fehlerfrei aufstellen und berechnen (S. 33–43).

## 📖 Kerninhalte

### 1. Grundlagen der Vorgehensmodelle (S. 3–7)
- **Leitbild „Software Factory" (Wieken 1990, S. 3):** Software-Produktion als ingenieurmäßiger Prozess von *Idee → Spezifikation → Software-Architektur → Programmierung/Montage → Test → Integration → Abnahme*.
- **Definition Vorgehensmodell (S. 4):** Abstrakte Darstellung (Modell) für das Vorgehen im Software-Engineering. Es bildet Software-Lebenszyklen ab, legt **Aktivitäten** sowie deren **Reihenfolge** fest und bündelt sie zu **Phasen**.
  - *5 Bestandteile jeder Phase:* (1) Phasenziele, (2) Aktivitäten & Rollenzuordnungen, (3) Dokumentation, (4) Methoden, Richtlinien, Konventionen, Werkzeuge & Sprachen, (5) erlaubte Phasenübergänge.
- **Die 6 Grundphasen ALLER Vorgehensmodelle (S. 5):**
  1. **Planungsphase:** Problemdefinition
  2. **Definitionsphase:** Anforderungen, Spezifikation
  3. **Designphase:** Entwurf (Modell), System-Design
  4. **Implementationsphase:** Software-Entwicklung
  5. **Abnahme- und Einführungsphase:** Verifikation und Testen
  6. **Wartungs- und Pflegephase**
- **Allgemeine Vorteile von Vorgehensmodellen (S. 7):** Leitfaden für die Entwicklung, gemeinsame verbindliche Projektstruktur, projektbegleitende Dokumentation, Planbarkeit, Zertifizierbarkeit, **Personenunabhängigkeit** und frühzeitige Fehlererkennung durch feste Testaktivitäten.

---

### 2. Die 4 großen Vorgehensmodelle im Detail (S. 8–27)

#### A) Klassisches & Verbessertes Wasserfallmodell (Royce 1970, S. 8–12)
- **Klassisch (S. 8–9):** Streng sequenzielle Kaskade über die 6 Phasen; jede Phase endet mit geprüften und abgenommenen Dokumenten.
  - *Vorteile:* Linear, leicht verständlich, klarer Top-Down-Ablauf.
  - *Nachteile:* Starre Phasentrennung, keine Rückkopplung auf frühere Phasen, frühe Festlegung/Verpflichtungen, neue Anforderungen nachträglich nicht integrierbar.
- **Verbesserte Wasserfallmodelle (wichtige Folienunterscheidung S. 10–12!):**
  - **Iteratives Wasserfallmodell (S. 10):** Von der letzten Phase (*Wartungs- u. Pflegephase*) führt ein gemeinsamer Rückkopplungspfad zurück in **jede einzelne** der 5 Vorgängerphasen.
  - **Inkrementelles Wasserfallmodell (S. 11):** Von jeder Phase führt ein direkter Rückkopplungspfeil genau **eine Stufe zurück** in die unmittelbare Vorgängerphase.
  - *Praxisbewertung:* Erlaubt mehrere Produktversionen und nachträgliche Anforderungen, aber viele Wiederholungen sind teuer.

#### B) Das V-Modell & V-Modell XT (S. 13–17)
Stellt jedem Entwurfs- und Spezifikationsschritt auf dem linken Ast explizit die zugehörige Teststufe auf dem rechten Ast gegenüber:
```
Anforderungsdefinition  ─── Szenarien ───►  Abnahmetest       } VALIDIERUNG ("Richtiges Produkt?")
   │ ▲                                         │ ▲
Grobentwurf (Makroarch.) ── Testfälle ───►  Systemtest        ┐
   │ ▲                                         │ ▲            │
Feinentwurf (Mikroarch.) ── Testfälle ───►  Integrationstest  ├─ VERIFIKATION ("Produkt richtig gebaut?")
   │ ▲                                         │ ▲            │
Implementation           ── Testfälle ───►  Modultest         ┘
```
- **Produkte & ihre 4 Zustände im V-Modell (S. 14 – Klausurklassiker!):**
  - Dokumente heißen im V-Modell **Produkte**; Tätigkeiten, die Produkte verändern, heißen **Aktivitäten**.
  - Exakte Zustandsfolge:
    `geplant` ──(erstellen)──► `in Bearbeitung` ──(vorlegen)──► `vorgelegt` ──(akzeptieren)──► `akzeptiert`
    - *Rücksprünge:* Von `vorgelegt` per **nachbessern** zurück nach `in Bearbeitung`; von `akzeptiert` per **wiederaufnehmen** zurück nach `in Bearbeitung`!
- **4 Submodelle des V-Modells (S. 15):**
  1. **SE** – Systemerstellung
  2. **QS** – Qualitätssicherung
  3. **KM** – Konfigurationsmanagement
  4. **PM** – Projektmanagement
  *(Jedes Submodell besteht aus **Aktivitäten** [Prozessabläufe], **Produkten** [Dokumente] und **Rollen** [Personen]).*
- **Tailoring im V-Modell XT (S. 16):** Projektspezifisches Zuschneiden des Modells abhängig von *Projekttyp, Projektvariante und Projektmerkmalen* (inkl. Quality Gates / Entscheidungsmeetings).
- **Steckbrief V-Modell (S. 17):** Ideal für **große, komplexe Systeme** und **Standard bei deutschen Behörden/staatlichen Organisationen**; für kleine Projekte zu hoher bürokratischer Overhead und hoher Schulungsaufwand.

#### C) Das Spiralmodell (Boehm 1988, S. 18–19)
- Zyklisch-iteratives Modell von innen nach außen über **4 Quadranten (laut Metzner-Folie S. 18):**
  1. **Analyse** (Anforderungen, Anforderungsvalidierung) → 2. **Entwurf** (Architekturentwurf, **Prototyp**) → 3. **Implementierung** → 4. **Test/Einsatz** (Zyklus 1: Modultest → Zyklus 2: Integrationstest → Zyklus 3: Systemtest).
- *Vorteile:* Extrem flexibel (pro Zyklus eigenes Vorgehen wählbar), schnelle einsatzfähige Inkremente/Prototypen.
- *Nachteile:* Hoher Managementaufwand (ständige Neuentscheidungen), Wegwerf-Prototypen erfordern evtl. Neuprogrammierung, viele Zyklen sind teuer (für große Projekte geeignet).

#### D) Agile Vorgehensmodelle: Scrum, XP, Kanban & CI/CD (S. 20–27)
- **Die 4 Wertepaare des Agilen Manifests (S. 20):**
  1. **Individuum und Interaktion** > Prozess und Werkzeug
  2. **Ausführbare Software** > vollständige Dokumentation
  3. **Zusammenarbeit mit Kunden** > Vertragsverhandlung
  4. **Berücksichtigung von Änderungen** > Bestehen auf Plänen
- **Wichtige Klarstellung (S. 23):**
  `agil = flexibel, Vertrauen, Zusammenhalt` — **`agil != schnell, Druck, hohe Produktivität`**!
- **Scrum-Kompaktübersicht (S. 22):**
  - *3 Rollen:* **Product Owner** (verantwortet Backlog/Priorisierung), **Scrum Master** (Prozess-Coach), **Team** (selbstorganisierte Umsetzung).
  - *3 Artefakte:* **Product Backlog**, **Sprint Backlog**, **Burn-Down Charts** (+ *Potentially Shippable Product Increment*).
  - *5 Aktivitäten:* **Sprint Planning**, **Sprint** (kurze feste Iteration), **Daily Scrum Meeting**, **Sprint Review**, **Sprint Retro(spective)**.
- **CI/CD-Automatisierungskette (JetBrains, S. 22):**
  - *Continuous Integration:* `Code → Build → Unit Test`
  - *Continuous Delivery:* `Integration Test → Repository`
  - *Continuous Deployment:* `Deploy` (automatisch in Produktion)
- **Agile Methoden & 8 Prinzipien (XP / Kanban, S. 23–26):**
  - *Kanban-Board (S. 25):* Visualisiert Fluss mit **WIP-Limits** (*Work-in-Progress* in Klammern): `Backlog | In Progress (3) | Peer Review (3) | In Test (1) | Done | Blocked`.
  - *8 Agile Prinzipien (S. 26):* (1) `CCO` – Collective Code Ownership, (2) Mehrfachverwendung von Ressourcen, (3) Einfachheit (*Simple Design*), (4) Totale Qualitätsorientierung (analog TQM), (5) Dokumentation nur wo nötig (Coding Standards, Backlogs, Definition of Done, Testfälle, Architektur-Doku), (6) Anforderungen erst umsetzen wenn benötigt (*YAGNI*), (7) *Customer on Site*, (8) **Arbeitszeiten respektieren (40-h-Woche / Sustained Pace)**.
  - *Kernpraktiken:* Planning Game, User Stories, Pair Programming, Test-First / TDD, Refactoring, Small Releases.
  - *Einsatzgebiet (S. 27):* Leichtgewichtig, wenig Bürokratie, hohe Codequalität – ideal für **kleine Teams und kleine, flexible Systeme** (Nachteil: Endergebnis vorab nicht exakt vorhersagbar, hohe Teamdisziplin nötig).

---

### 3. Projektplanung & Projektmanagement (S. 28–43)
- **Magisches Dreieck (S. 28):** **Projektmanagement** balanciert **Kosten**, **Ressourcen** und **Zeit**.
- **Projektplanungs-Regelkreis (S. 30):** Nach Aufstellen der Randbedingungen, Erstschätzung und Meilenstein-Definition folgt die Schleife: *Randbedingungen verhandeln → Projektzeitplan aufstellen → Aktivitäten starten → Fortschritt prüfen → Technische Reviews & Überarbeitung → Projektparameter anpassen*.
- **Definition Projektmanagement nach DIN 69901 (S. 31):** *„Gesamtheit von Führungsaufgaben, Organisation, Techniken und Mitteln für die Abwicklung eines Projektes"* – Ziel: **Erwartungen der Stakeholder erfüllen**.
- **9 PMI-Wissensgebiete (S. 32):** **Terminmanagement**, **Kostenmanagement**, **Ressourcen-(Personal-)Management** *(Kernfokus!)* sowie Qualitäts-, Integrations-, Risiko-, Kommunikations-, Umfangs- und Beschaffungsmanagement.

#### Gantt-Diagramm & Vorgangsknotennetzplan (S. 34–40)
- **Gantt-Diagramm (S. 34):** Balkenplan entlang einer Zeitachse – *blaue Balken* = Vorgänge mit Puffer, *rote Balken* = kritische Vorgänge, *schwarze Rauten* = Meilensteine (`Dauer = 0`), *Pfeile* = Abhängigkeiten.
- **Vorgangspfeilnetz vs. Vorgangsknotennetz (S. 36):** Im Vorgangspfeilnetz stehen Aktivitäten auf Pfeilen und Ereignisse in Knoten; in der Vorlesung nutzen wir das **Vorgangsknotennetz** (Knoten = Aktionen, Pfeile = Abhängigkeiten).
- **Das offizielle Metzner-Knotenschema (S. 37 – Achtung bei der Feldbelegung!):**
  ```
  ┌──────────┬───────────┬──────────┐
  │    FA    │   Dauer   │    SA    │   ← OBEN: Anfangstermine & Dauer!
  ├──────────┴───────────┴──────────┤
  │        Vorgangsname, Nr.        │
  ├──────────┬───────────┬──────────┤
  │    FE    │    GP     │    SE    │   ← UNTEN: Endtermine & Gesamtpuffer!
  └──────────┴───────────┴──────────┘
  ```
- **4 Verknüpfungsbeziehungen (S. 37):**
  - **FS (Finish-Start – Standard):** Nacheinander (*nächste Phase startet nach Review der vorigen*).
  - **SS (Start-Start):** Gleichzeitiger Beginn (*Protokollierung startet mit Beginn der Testphase*).
  - **FF (Finish-Finish):** Gleichzeitiges Ende (*Abschalten erst bei erfolgreicher Datensicherung*).
  - **SF (Start-Finish):** Ende erst nach erfolgreichem Start (*Anmelde-Vorgang endet erst, wenn Bediensystem gestartet wurde*).

- **Formeln der Netzplanberechnung (S. 40):**
  - *Vorwärtsrechnung:* `FA = max(FE aller Vorgänger)` | `FE = FA + Dauer`
  - *Rückwärtsrechnung:* `SE = min(SA aller Nachfolger)` | `SA = SE - Dauer`
  - *Gesamtpuffer:* `GP = SA - FA = SE - FE`
  - **Kritischer Pfad (S. 38):** Längste Kette im Netzplan; durchgehend **`GP = 0`** (`FA = SA`, `FE = SE`). Jede Verzögerung verzögert das gesamte Projekt!

## 🧮 Beispiele & Rechenwege

### 1. Vorlesungs-Netzplanbeispiel (11 Vorgänge, S. 34–35, 39)
- Nach `3 Spezifikation fertig` laufen zwei Stränge parallel:
  - Strang 1: `4 Systemarchitektur (5 Tage)`
  - Strang 2: `5 Komponenten definieren (0,667 Tage) → 6 Prozessabläufe (2 Tage)` = `2,667 Tage` *(besitzt Puffer gegenüber Strang 1!)*.
- Nach `4` (und `6`) laufen parallel: `7 Programmierung Modul A (6 Tage)` vs. `8 Programmierung Modul B (8 Tage)` *(Modul A hat 2 Tage Puffer!)*.
- **Kritischer Pfad:** `1 (0) → 2 Spezifikation (1,5) → 3 (0) → 4 Systemarchitektur (5) → 8 Modul B (8) → 9 Nutzinhalt (1) → 10 Test (0,75) → 11 Ende (0)` = **`16,25 Arbeitstage`**.

### 2. Ressourcenplan & Kostenrechenbeispiel `UserLogin()` (S. 41–43)
- **Wichtige Erkenntnis (S. 41):** Aus dem reinen Netzplan folgen noch **weder der reale Endtermin noch Auslastung oder Kosten** – erst die **Ressourcenbelegungsliste** zeigt, ob ein Mitarbeiter zwei parallele Aufgaben gleichzeitig erledigen müsste!
- **Vorlesungs-Kalkulationsformel (S. 43 – `1 Manntag = 8 Stunden`!):**
  - Funktion `UserLogin()` (Anforderung 433, Aufgabe 23): `2 Personen` à `2 Manntage`, Stundensatz `80 €/h`:
    `Kosten = 8 h/Tag * 2 Personen * 2 Tage * 80 €/h = 2.560,00 €`

## ⚠️ Klausurfallen & typische Fehler
- **Feldanordnung im Netzplanknoten (S. 37):** Prof. Metzner schreibt **oben `FA | Dauer | SA`** und **unten `FE | GP | SE`** (nicht links Anfang und rechts Ende wie in manchen anderen Fächern!). Im Klausurvordruck immer zuerst die Legende prüfen!
- **Verifikation vs. Validierung im V-Modell (S. 13):** Nur der **Abnahmetest** (gegen Anforderungsdefinition/Szenarien) ist auf Folie 13 als **Validierung** markiert; **Modultest, Integrationstest und Systemtest** zählen zur **Verifikation**!
- **Abhängige Puffer & neuer kritischer Pfad (S. 40, 42):**
  1. Puffer hintereinanderliegender Vorgänge sind **nicht unabhängig** (verbraucht Vorgang A seinen Puffer, fehlt er Vorgang B).
  2. Kürzt man Vorgänge auf dem kritischen Pfad, kann ein paralleler Nebenpfad plötzlich zum **neuen kritischen Pfad** werden!
- **Manntag-Umrechnung:** Ein Manntag / Personentag zählt in SE-Rechenaufgaben exakt **8 Arbeitsstunden**!

## 🧠 Merkhilfen
- **6 SE-Grundphasen (P-D-D-I-A-W):** **P**lanung → **D**efinition → **D**esign → **I**mplementierung → **A**bnahme/Einführung → **W**artung.
- **V-Modell Produktzustände:** *Geplant → in Bearbeitung → vorgelegt → akzeptiert (mit Rückweg über „nachbessern" oder „wiederaufnehmen").*
- **Continuous X:** *CI baut & testet lokal/automatisch → Continuous Delivery legt ins Repo bereit → Continuous Deployment rollt live in Produktion aus.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Vorgehensmodell | Abstraktes Phasen- und Aktivitätsmodell für den Software-Lebenszyklus. |
| Tailoring (V-Modell XT) | Projektspezifisches Anpassen von Rollen, Produkten und Aktivitäten an die Projektgröße/-art. |
| Verifikation vs. Validierung | Prüfen gegen Entwurfsspezifikation (Modul-/Integrations-/Systemtest) vs. gegen Kundenwunsch (Abnahmetest). |
| Collective Code Ownership | Agiles Prinzip: Dem gesamten Team gehört der Code gemeinsam; jeder darf jede Stelle verbessern. |
| Kritischer Pfad | Längster Vorgangspfad durch den Netzplan mit `Gesamtpuffer GP = 0`. |
| Meilenstein | Kontrollpunkt im Projektplan mit der `Dauer = 0`. |

## ✅ Selbsttest
**F:** Wie lautet die Definition eines Vorgehensmodells, aus welchen 5 Elementen besteht jede Phase, und welche 6 Phasen kommen in allen Vorgehensmodellen vor? *(Offizielle Lernzielfrage S. 44)*
**A:** Ein Vorgehensmodell ist die abstrakte Darstellung des Vorgehens im Software-Engineering, die Software-Lebenszyklen abbildet und Aktivitäten in Phasen ordnet. Jede Phase definiert (1) Phasenziele, (2) Aktivitäten & Rollen, (3) Dokumentation, (4) Methoden/Werkzeuge/Sprachen und (5) Phasenübergänge. Die 6 Grundphasen sind: Planungs-, Definitions-, Design-, Implementations-, Abnahme-/Einführungs- sowie Wartungs-/Pflegephase.

**F:** Welche 4 Produktzustände kennt das V-Modell und welche 4 Submodelle umfasst es?
**A:** Die 4 Produktzustände lauten *geplant* → *in Bearbeitung* → *vorgelegt* → *akzeptiert* (mit Rückübergängen *nachbessern* und *wiederaufnehmen*). Die 4 Submodelle sind *Systemerstellung (SE)*, *Qualitätssicherung (QS)*, *Konfigurationsmanagement (KM)* und *Projektmanagement (PM)*.

**F:** Wie grenzt das V-Modell die vier Teststufen hinsichtlich Verifikation und Validierung voneinander ab?
**A:** Modultest (gegen Implementation), Integrationstest (gegen Feinentwurf/Mikroarchitektur) und Systemtest (gegen Grobentwurf/Makroarchitektur) bilden die *Verifikation*; der Abnahmetest (gegen Anforderungsdefinition/Szenarien) bildet die *Validierung*.

**F:** Warum bedeutet „agil" laut Vorlesung ausdrücklich NICHT „schnell, Druck und keine Dokumentation"?
**A:** Weil Agilität auf *Flexibilität, Vertrauen, Zusammenhalt* und nachhaltigem Arbeitstempo (*40-h-Woche / Sustained Pace*) basiert. Dokumentiert wird zielgerichtet („so viel wie nötig"), z. B. über Coding Standards, Backlogs, Definition of Done, automatisierte Testfälle und Architekturdokumentation.

**F:** Warum reicht ein berechneter Vorgangsknotennetzplan allein noch nicht aus, um den tatsächlichen Endtermin und die Kosten eines Softwareprojekts zu garantieren?
**A:** Weil der Netzplan nur logische Abhängigkeiten zwischen Aufgaben abbildet, aber noch keine personelle Ressourcenzuordnung vornimmt. Erst ein *Ressourcenplan* deckt Überlastungen auf (wenn z. B. dieselbe Person zwei parallele Vorgänge gleichzeitig bearbeiten müsste) und ermöglicht die reale Termin- und Kostenkalkulation.
