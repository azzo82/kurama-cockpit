---
id: se-04-uml-2-5-notation
kurs: se
nr: 4
titel: Offizielle UML 2.5 Notationsübersicht (Komplett-Referenz aller 14 Diagrammtypen)
quellen: OOSE-UML-Notationsübersicht-2.5.pdf
seiten: 4
---

> **Kurz gesagt:** Dein vollständiges Klausur-Nachschlagewerk zur **Unified Modeling Language (UML 2.5)** nach dem offiziellen oose-Referenzbogen aus dem Software-Engineering-Kurs. Es fasst alle **14 UML-Diagrammtypen** (7 Strukturdiagramme & 7 Verhaltensdiagramme) inklusive exakter Syntax für Sichtbarkeiten, Attribute, Operationen, Pfeilspitzen, Beziehungen (`«include»` vs. `«extend»`, Aggregation vs. Komposition) und Kontrollflüsse zusammen.

## 🎯 Lernziele
- Alle **14 UML-2.5-Diagrammtypen** sauber in **Strukturdiagramme** und **Verhaltensdiagramme** einordnen (S. 1–4).
- Im **Anwendungsfalldiagramm (Use Case Diagram)** Akteure, Systemgrenzen, `«include»`-, `«extend»`- (mit Condition & Extension Point) und Vererbungsbeziehungen fehlerfrei zeichnen (S. 1).
- Im **Klassendiagramm** die exakte UML-Syntax für Attribute und Operationen sowie alle 6 Beziehungsarten (Assoziation, Aggregation, Komposition, Abhängigkeit, Vererbung, Schnittstellen-Realisierung) beherrschen (S. 1).
- Dynamische Abläufe mit **Aktivitätsdiagramm**, **Zustandsdiagramm** und **Sequenzdiagramm** (inkl. kombinierter Fragmente wie `alt`, `ref`, synchroner vs. asynchroner Nachrichten) normgerecht modellieren (S. 2–4).
- Architektur- und Systemstruktur über **Paket-, Komponenten- und Verteilungsdiagramme** abbilden (S. 2, S. 4).

## 📖 Kerninhalte

### 1. Systematik aller 14 UML-2.5-Diagramme im Überblick
| Strukturdiagramme *(Statische Systemarchitektur)* | Verhaltensdiagramme *(Dynamik & Interaktion)* |
|---|---|
| 1. **Klassendiagramm** *(S. 1 – zentral!)* | 8. **Anwendungsfalldiagramm / Use Case** *(S. 1 – zentral!)* |
| 2. **Objektdiagramm** *(S. 1)* | 9. **Aktivitätsdiagramm** *(S. 3 – zentral!)* |
| 3. **Paketdiagramm** *(S. 2)* | 10. **Zustandsdiagramm** *(S. 2 – zentral!)* |
| 4. **Komponentendiagramm** *(S. 2)* | 11. **Sequenzdiagramm** *(S. 4 – zentral!)* |
| 5. **Einsatz- & Verteilungsdiagramm** *(S. 2)* | 12. **Kommunikationsdiagramm** *(S. 2)* |
| 6. **Kompositionsstrukturdiagramm** *(S. 4)* | 13. **Interaktionsübersichtsdiagramm** *(S. 3)* |
| 7. **Profildiagramm** *(S. 4)* | 14. **Zeitdiagramm** *(S. 2)* |

---

### 2. Anwendungsfalldiagramm (Use Case Diagram) (S. 1 oben)
Beschreibt das **extern sichtbare Systemverhalten** aus Sicht der Benutzer und Nachbarsysteme (*Was* leistet das System, nicht *wie*?):
- **Akteure:** Strichmännchen (menschlicher Akteur) oder Rechteck mit Stereotyp/Icon (**Fremdsystem als Akteur**).
  - Können über **Generalisierung/Vererbung** (geschlossene leere Dreiecksspitze) von einem *abstrakten Akteur* (`{abstract}`) erben.
  - Können Multiplizitäten zur Verbindung tragen (z. B. `1..3`).
- **Systemgrenze & Anwendungsfälle:** Rechteckiger Systemkasten enthält Ellipsen (**Systemanwendungsfälle**); außerhalb liegende Geschäftsprozesse können als *Geschäftsanwendungsfall* (Ellipse mit Schrägstrich) per `«trace»` verknüpft sein.
- **Beziehungen zwischen Anwendungsfällen (Pfeilrichtung = Klausurfalle Nr. 1!):**
  | Beziehung | Notation | Pfeilrichtung & Bedeutung |
  |---|---|---|
  | **`«include»`** | Gestrichelter Pfeil mit offener Spitze + `«include»` | **Basis-UC `--->` eingebundener Sekundär-UC**: Der Sekundär-UC wird **immer zwingend** mit ausgeführt. |
  | **`«extend»`** | Gestrichelter Pfeil mit offener Spitze + `«extend»` | **Erweiternder Sekundär-UC `--->` Basis-UC** *(umgekehrte Richtung!)*: Optionale Erweiterung an einem definierten **Extension Point** nur wenn `Condition: {bedingung}` erfüllt ist! |
  | **Spezialisierung** | Durchgezogener Pfeil mit geschlossener leerer Spitze | Spezialisierter Anwendungsfall erbt vom allgemeinen Anwendungsfall. |
  | **`«refine»`** | Gestrichelter Pfeil + `«refine»` | Verknüpft ein `«requirement»` (Anforderung) bzw. `«feature»` mit dem realisierenden Anwendungsfall. |

---

### 3. Klassendiagramm & Objektdiagramm (S. 1 Mitte/unten)
#### Exakte UML-2.5-Syntax innerhalb einer Klasse (3 Kompartimente: Name, Attribute, Operationen)
- **Sichtbarkeitsmodifikatoren (Visibility):**
  - `+` **public** (überall sichtbar)
  - `#` **protected** (in Klasse selbst, Unterklassen und Paket sichtbar)
  - `-` **private** (nur innerhalb der eigenen Klasse sichtbar)
  - `~` **package** (paketweit sichtbar)
- **Attribut-Syntax:**
  `Sichtbarkeit Attributname : Paket::Typ [Multiplizität Ordnung] = Initialwert {Eigenschaftswerte}`
  - *Typische Eigenschaftswerte:* `{readOnly}` (Konstante), `{ordered}` (sortiert), `{composite}`.
  - *Statische Attribute/Operationen (Klassenattribute):* Werden **unterstrichen**!
  - *Abstrakte Klassen / abstrakte Operationen:* Kursiv geschrieben oder `{abstract}`.
- **Operations-Syntax:**
  `Sichtbarkeit Operationsname (Richtung Name : Typ = Standardwert) : Rückgabetyp {Eigenschaftswerte}`
  - *Parameterrichtung:* `in` (Eingabe), `out` (Ausgabe), `inout` (Ein-/Ausgabe).
  - *Eigenschaftswert:* `{query}` (lesende Methode ohne Seiteneffekte / ändert Objektzustand nicht).

#### Alle Pfeil- und Beziehungsarten im Klassendiagramm (Auswendig für jede SE-Klausur!)
```
Vererbung (Generalisierung):   Unterklasse  ────────▷  Oberklasse           (durchgezogen, leeres Dreieck)
Schnittstellen-Realisierung:   Anbieter     - - - - ▷  «interface»          (gestrichelt, leeres Dreieck)
Gerichtete Assoziation:        Klasse1     ✕────────>  Klasse2              (durchgezogen, offene Pfeilspitze; ✕ = nicht navigierbar)
Abhängigkeit (Dependency):     Abhängige    - - - - >  Unabhängige Klasse   (gestrichelt, offene Pfeilspitze)
Aggregation (Teil-Ganzes):     Ganzes       ◇────────  Teil                 (leere Raute AM GANZEN!)
Komposition (Existenzabh.):    Ganzes       ◆────────  Existenzabh. Teil    (ausgefüllte schwarze Raute AM GANZEN!)
```
- **Weitere wichtige Klassendiagramm-Elemente (S. 1):**
  - **Qualifizierte Assoziation:** Kleines Rechteck `[Qualifizierer]` (z. B. `KontoNr` oder `MatrikelNr`) am Klassenrand reduziert Multiplizität (z. B. von `*` auf `0..1`).
  - **Assoziationsklasse:** Über gestrichelte Linie an eine Assoziation gehängt, wenn die Beziehung eigene Attribute besitzt.
  - **Mehrgliedrige (ternäre) Assoziation:** Große leere Raute in der Mitte verbindet drei Klassen (`Klasse1`, `Klasse2`, `Klasse3`).
  - **Schnittstellen („Stecker & Buchse" / Lollipop-Notation):** Geschlossener Kreis `───○` = **angebotene Schnittstelle** (*provided*, „Stecker"); Halbkreis `───(` = **benutzte Schnittstelle** (*required*, „Buchse").
  - **Analyse-Stereotypen (ECB-Muster):** `Entity` (Kreis mit Unterstrich), `Control` (Kreis mit Pfeil), `Boundary` (Kreis mit T-Strich links).
  - **Objektdiagramm:** Zeigt konkrete Laufzeit-Instanzen zur Momentaufnahme: `Objektname : Klassenname` **unterstrichen** mit konkreten Attributwerten (`attribut = wert`).

---

### 4. Zustandsdiagramm & Aktivitätsdiagramm (S. 2–3)

#### Zustandsdiagramm (State Machine Diagram, S. 2 unten links)
Modelliert den Lebenszyklus eines einzelnen Objekts über Zustände und Transitionen:
- **Knoten:** Schwarzer Punkt `●` = **Startzustand**; Punkt im Kreis `◉` = **Endzustand**; abgerundetes Rechteck = **Zustand**; Kreis mit `H` = **Historisierung** (merkt sich letzten Unterzustand).
- **Interne Aktivitäten im Zustand:**
  - `entry / aktion` (beim Betreten des Zustands einmalig ausgeführt)
  - `do / aktion` (andauernde Aktivität solange im Zustand)
  - `exit / aktion` (beim Verlassen des Zustands ausgeführt)
- **Transitions-Syntax am Pfeil:** `ereignis [bedingung] / verhalten`
  - *Zeit-Trigger:* `after(Zeitdauer)` (relativ) oder `at(Zeitpunkt)` (absolut).

#### Aktivitätsdiagramm (Activity Diagram, S. 3)
Modelliert Geschäftsprozesse, Workflows und algorithmische Abläufe (inkl. Nebenläufigkeit):
- **Kontrollknoten (exakt unterscheiden!):**
  | Knoten | Symbol | Semantik |
  |---|---|---|
  | **Startknoten** | Ausgefüllter Punkt `●` | Startet den Tokenfluss der Aktivität. |
  | **Endknoten (Activity Final)** | Punkt im Kreis `◉` | Beendet die **gesamte** Aktivität (alle parallelen Stränge stoppen!). |
  | **Ablaufende (Flow Final)** | Kreis mit Kreuz `⊗` | Beendet **nur diesen einzelnen lokalen Kontrollfluss-Pfad**! |
  | **Entscheidung / Zusammenführung** | Leere Raute `◇` | **ODER-Verzweigung** mit disjunkten Wächterbedingungen `[x < 0]`, `[x >= 0]` bzw. Zusammenführung alternativer Pfade. |
  | **Teilung (Fork) / Synchronisation (Join)** | Schwarzer Querbalken `▬▬▬` | **UND-Parallelisierung** (*Splitting* in nebenläufige Stränge) bzw. **UND-Synchronisation** (wartet, bis *alle* eingehenden Pfade ankommen; optional `{joinSpec = ...}`). |
- **Spezialelemente:** **Partitionen (Swimlanes)** für Verantwortlichkeiten (`Partition A`, `Partition B`), **Signale** (Fünfeck konvex = *Signal senden*, konkav/eingekerbt = *Signal empfangen*, Sanduhr = *Zeitereignis*), **Unterbrechbarer Aktivitätsbereich** (gestrichelter Rahmen + Blitzpfeil für Abbruch/Exception), **Objektknoten** (`«datastore»`, `«central buffer»`).

---

### 5. Sequenzdiagramm & Weitere Architekturdiagramme (S. 2, S. 4)

#### Sequenzdiagramm (Sequence Diagram, S. 4 oben)
Zeigt den zeitlichen Nachrichtenaustausch zwischen Objekten entlang vertikaler **Lebenslinien** (Zeit läuft von oben nach unten; schmale Balken auf der Lebenslinie = **Ausführungsfokus**):
- **Nachrichtenpfeile (wichtiger Unterschied der Pfeilspitzen!):**
  - `────────▶` *(durchgezogen, ausgefüllte Spitze)*: **Synchrone Nachricht** (Sender wartet blockierend auf Antwort).
  - `- - - - >` *(gestrichelt, offene Spitze)*: **Antwortnachricht (Return)**.
  - `────────>` *(durchgezogen, offene Spitze)*: **Asynchrone Nachricht** (Sender läuft sofort weiter, ohne zu warten).
  - Pfeil auf neuen Objektkasten `:KlasseX`: **Objekt-Konstruktion** (`erzeugeObjekt`); großes Kreuz `✕` am Ende der Lebenslinie: **Objekt-Destruktion**.
- **Kombinierte Fragmente (Rechteckrahmen mit Operator-Ecke oben links):**
  - `alt` mit `[Bedingung]` und gestrichelter Trennlinie `[else]`: Alternative Verzweigung (`if / else`).
  - `ref`: **Interaktionsverweis** auf ein ausgelagertes Detail-Sequenzdiagramm.
  - *(Weitere Standardoperatoren in UML 2.5: `opt` = optionales `if`, `loop` = Schleife, `par` = parallel).*

#### Paket-, Komponenten- & Verteilungsdiagramm (S. 2)
- **Paketdiagramm:** Gruppiert Modellelemente in Namensräume (Ordner-Symbol); Beziehungen `«import»`, `«access»`, `«merge»`.
- **Komponentendiagramm:** Modulare Softwarebausteine (`«component»`) mit Ports, angebotenen (`provided`) und benötigten (`required`) Schnittstellen sowie Realisierungsartefakten (`«artifact» komponente.jar` via `«manifest»`).
- **Einsatz- & Verteilungsdiagramm (Deployment Diagram):** Physische Laufzeitumgebung aus 3D-Knoten (z. B. `Client`, `«database» Datenbank-Server`), Kommunikationsprotokollen (`http/LAN`) und darauf per `«deploy»` verteilten Artefakten (`myClientPrg.exe`, `rdbms.exe`).

## ⚠️ Klausurfallen & typische Fehler
- **`«include»` vs. `«extend»` Pfeilrichtung verwechseln:** Bei `«include»` zeigt der Pfeil **vom Basis-UC zum eingebundenen UC**; bei `«extend»` zeigt er **umgekehrt vom optionalen Erweiterungs-UC zum Basis-UC**!
- **Raute bei Aggregation/Komposition auf der falschen Seite:** Die Raute (`◇` bzw. `◆`) klebt **IMMER am Ganzen** (z. B. am `Auto` oder `Rechnung`), niemals am Einzelteil (`Rad` / `Rechnungsposition`)!
- **Raute vs. Balken im Aktivitätsdiagramm:** Raute `◇` = **Entweder-Oder** (`if/else`); schwarzer Balken `▬▬▬` = **Gleichzeitig / Parallel** (`UND`). Wer parallele Pfade mit einer Raute zusammenführt statt mit einem Synchronisationsbalken, erzeugt Token-Fehler!
- **Synchroner vs. asynchroner Pfeil im Sequenzdiagramm:** Ausgefülltes Dreieck `▶` = synchron (wartet); offene Pfeilspitze `>` = asynchron!

## 🧠 Merkhilfen
- **`extend`-Eselsbrücke:** *Der Zusatz-Use-Case streckt die Hand aus und tippt dem Haupt-Use-Case auf die Schulter („Ich erweitere dich bei Bedarf!") → Pfeil zum Basis-UC.*
- **Komposition vs. Aggregation:** *Ausgefüllte schwarze Raute `◆` = Tod des Ganzen bedeutet Tod der Teile (Raum stirbt mit Gebäude). Leere Raute `◇` = Teile überleben allein (Stuhl überlebt Raum).*
- **Sichtbarkeiten:** `+` (offen für alle), `#` (Familie/Vererbung), `~` (Nachbarschaft/Paket), `-` (streng privat).

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| `«include»` | Zwingende Wiederverwendung eines Teil-Anwendungsfalls durch einen Basis-Anwendungsfall. |
| `«extend»` | Bedingte, optionale Erweiterung eines Basis-Anwendungsfalls an einem *Extension Point*. |
| Komposition (`◆`) | Strenge Teil-Ganzes-Beziehung mit Existenzabhängigkeit (ein Teil gehört zu max. einem Ganzen). |
| Aggregation (`◇`) | Lose Teil-Ganzes-Beziehung ohne Existenzabhängigkeit (Teile können geteilt werden / weiterbestehen). |
| Synchronisationsbalken (`▬▬▬`) | Fork (Aufspaltung in parallele Abläufe) bzw. Join (Warten auf alle parallelen Stränge). |
| Ablaufende (`⊗`) vs. Endknoten (`◉`) | `⊗` stoppt nur einen einzelnen Pfad; `◉` terminiert sofort die gesamte Aktivität. |

## ✅ Selbsttest
**F:** In welche Richtung zeigen die Pfeile bei `«include»` und `«extend»` im UML-Anwendungsfalldiagramm jeweils?
**A:** Bei `«include»` zeigt der gestrichelte Pfeil vom Basis-Anwendungsfall auf den zwingend eingebundenen Sekundär-Anwendungsfall. Bei `«extend»` zeigt der Pfeil umgekehrt vom optional erweiternden Anwendungsfall auf den Basis-Anwendungsfall (inkl. Angabe von *Condition* und *Extension Point*).

**F:** Worin unterscheiden sich Aggregation und Komposition im UML-Klassendiagramm fachlich und grafisch?
**A:** Grafisch hat die Aggregation eine leere Raute (`◇`) und die Komposition eine ausgefüllte schwarze Raute (`◆`) – jeweils auf der Seite des „Ganzen". Fachlich ist das Teil bei einer Komposition existenzabhängig vom Ganzen (wird das Ganze gelöscht, werden auch seine Teile gelöscht; ein Teil gehört gleichzeitig höchstens zu einem Ganzen), bei einer Aggregation nicht.

**F:** Wie lautet die vollständige UML-2.5-Syntax für ein privates Attribut `rabatt` vom Typ `Double` mit Standardwert `0.0`, das nach Erzeugung nicht mehr geändert werden darf?
**A:** `- rabatt : Double = 0.0 {readOnly}`

**F:** Welcher Unterschied besteht im Aktivitätsdiagramm zwischen dem Endknoten (`◉`) und dem Ablaufende (`⊗`)?
**A:** Der Aktivitäts-Endknoten (`◉`, Punkt im Kreis) bricht sofort die gesamte Aktivität inklusive aller noch laufenden parallelen Pfade ab; das Ablaufende (`⊗`, Kreis mit Kreuz) beendet dagegen nur den jeweiligen lokalen Kontrollflusspfad, während andere parallele Zweige weiterlaufen.

**F:** Wie unterscheidet man im UML-Sequenzdiagramm eine synchrone Nachricht, eine asynchrone Nachricht und eine Antwortnachricht?
**A:** Eine synchrone Nachricht hat eine durchgezogene Linie mit ausgefüllter Pfeilspitze (`───▶`), eine asynchrone Nachricht eine durchgezogene Linie mit offener Pfeilspitze (`───>`), und eine Antwortnachricht eine gestrichelte Linie mit offener Pfeilspitze (`- - - >`).
