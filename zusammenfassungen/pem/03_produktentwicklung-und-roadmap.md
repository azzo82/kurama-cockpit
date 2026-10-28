---
id: pem-03-produktentwicklung-roadmap
kurs: pem
nr: 3
titel: Kapitel 3 Produktentwicklung, Innovationsarten, Roadmapping & Releaseplanung
quellen: PEM-Vorl_Produktentwicklung_WS26_print.pdf + PEM-Ueb_PE_WS26_Print.pdf
seiten: 224
---

> **Kurz gesagt:** Von der Produktstrategie zur konkreten Release-Roadmap: Wie entstehen marktfähige Software- und Digitalprodukte? Dieses Skript behandelt die Innovationsarten (inkrementell, radikal, disruptiv), analysiert die strategischen Risiken der Produktentwicklung, vergleicht klassische Stage-Gate- mit agilen Vorgehensmodellen und leitet die Release-Roadmap anhand von Feature-Aufwänden und Personalkapazitäten (Personentage) her.

## 🎯 Lernziele
- Die Produktstrategie als Bindeglied zwischen Unternehmenszielen und Produktentwicklung verstehen (Vorlesung, S. 4–15).
- Drei Innovationstypen (inkrementell, radikal, disruptiv) unterscheiden und mit Beispielen belegen (Übung, S. 4).
- Risiken der Produktstrategie (Technologierisiko, Marktrisiko, Implementierungsrisiko) bewerten (Übung, S. 3).
- Eine Release-Roadmap auf Basis von Feature-Aufwänden (Personentage PT) und Team-Kapazitäten schrittweise aufstellen (Übung, S. 5–9).

## 📖 Kerninhalte
### 1. Produktstrategie & Innovationsarten (Vorlesung & Übung, S. 4)
Die Produktstrategie legt fest, welche Produkte neu entwickelt, modifiziert oder aus dem Programm genommen werden.
- **Drei Typen von Innovationen:**
  1. **Inkrementelle Innovation:**
     - Kontinuierliche Weiterentwicklung und Optimierung bestehender Produkte/Technologien (z. B. Performance-Update für ein DBMS, neues iPhone-Modell, Beheben von Softwarefehlern). Geringes Risiko, sichere Erträge.
  2. **Radikale Innovation:**
     - Grundlegend neue Technologie oder neuartiges Produkt mit hohem technologischen Wandel (z. B. Übergang von klassischen Verbrennern zu Elektroantrieben, Übergang von relationalen Datenbanken zu relationalen In-Memory-Systemen wie SAP HANA). Hohes Risiko, hohe Differenzierung.
  3. **Disruptive Innovation (nach Christensen):**
     - Eine Innovation, die zunächst in Nischenmärkten startet (oft einfacher, günstiger, leistungsschwächer als etablierte Produkte), sich dann rasant verbessert und etablierte Marktführer vollständig verdrängt (z. B. Streaming-Dienste verdrängten Videotheken; Digitalkameras verdrängten analoge Filme; Smartphones verdrängten Navigationsgeräte).

### 2. Risiken der Produktstrategie (Übung, S. 3)
1. **Marktrisiko:**
   - Fehleinschätzung von Kundenbedürfnissen, Marktgröße oder Zahlungsbereitschaft. Das Produkt löst kein echtes Kundenproblem ("Lösung sucht Problem").
2. **Technologierisiko:**
   - Gewählte Basistechnologien erweisen sich als instabil, nicht skalierfähig, zu komplex oder werden vor Markteinführung obsolet.
3. **Wettbewerbsrisiko:**
   - Konkurrenten launchen ein gleichwertiges oder besseres Produkt schneller (Time-to-Market verpasst).
4. **Implementierungs- und Budgetrisiko:**
   - Entwicklungsdauer und Kosten explodieren (Ressourcenengpässe).

### 3. Vorgehensmodelle in der Produktentwicklung
- **Klassisches Stage-Gate-Modell (Cooper):**
  - Linearer Prozess mit festen Kontrolltoren (Gates): Idee → Vorstudie → Konzept → Entwicklung → Test → Launch. Nach jeder Phase entscheidet ein Gate-Meeting über "Go" oder "Kill".
- **Agile Produktentwicklung (Scrum / Lean Startup / MVP):**
  - **Minimum Viable Product (MVP):** Die kleinstmögliche Version eines Produkts, die für Erstanwender (Early Adopters) bereits einen spürbaren Nutzen bietet und schnelles Kundenfeedback liefert ("Build – Measure – Learn").

### 4. Roadmapping & Releaseplanung (Übung, S. 5–9)
Eine Produkt-Roadmap visualisiert die strategische Entwicklung eines Produkts über die Zeitachse.
- **Ablauf der Releaseplanung nach Personentagen (PT):**
  1. *Feature-Backlog erstellen:* Auflistung aller gewünschten Funktionen.
  2. *Aufwandsschätzung:* Schätzung des Entwicklungsaufwands je Feature in Personentagen (PT).
  3. *Priorisierung:* Einordnung nach Geschäftswert, Kundenrelevanz und technischen Abhängigkeiten (MoSCoW-Methode: Must, Should, Could, Won't).
  4. *Kapazitätsabgleich:* Gegenüberstellung des Gesamtaufwands mit den verfügbaren Entwicklerkapazitäten pro Quartal/Release-Zyklus.
  5. *Zuweisung zu Releases (v1.0, v1.1, v2.0):* Festlegung, welche Features in welches Release eingeplant werden.

## 🧮 Beispiele & Rechenwege
### Die Roadmapping-Übung aus der Vorlesung
Gegeben sei ein Entwicklungsteam mit 4 Entwicklern. Ein Release-Zyklus (Quartal) umfasst 60 Arbeitstage pro Entwickler.
- Verfügbare Gesamtkapazität je Release: `4 Entwickler * 60 Tage = 240 Personentage (PT)`.
- Abzug für Puffer/Fehlerbehebung (20 %): `240 PT - 48 PT = 192 PT Netto-Kapazität`.

**Feature-Backlog mit Schätzungen:**
- Feature A (User Login & Auth): 30 PT (Must-Have)
- Feature B (Dashboard & Visualisierung): 80 PT (Must-Have)
- Feature C (Daten-Export als PDF/CSV): 50 PT (Should-Have)
- Feature D (Automatisierte E-Mail-Berichte): 70 PT (Could-Have)
- Feature E (KI-Vorhersage-Modul): 120 PT (Could-Have)

**Release-Zuweisung:**
- **Release 1.0 (MVP):**
  - Features A (30 PT) + B (80 PT) + C (50 PT) = **160 PT**.
  - Passt in das Netto-Budget von 192 PT! (Verbleibende 32 PT dienen als Reserve).
- **Release 2.0 (Folgequartal):**
  - Features D (70 PT) + E (120 PT) = **190 PT**.
  - Voll ausgelastet!

## ⚠️ Klausurfallen & typische Fehler
- **Verwechslung radikal vs. disruptiv:**
  - *Radikal:* Technologisch hochkomplex, von Anfang an leistungsstark (z. B. Überschallflugzeug).
  - *Disruptiv:* Startet oft billig und leistungsschwach am unteren Marktende und greift etablierte Anbieter von unten an (z. B. Smartphone-Kameras verdrängen Kompaktkameras).
- **Kapazitätsplanung ohne Puffer:** In Klausuraufgaben dürfen Entwicklerkapazitäten niemals zu 100 % mit reiner Feature-Entwicklung verplant werden (Krankheit, Urlaube, Bugfixing müssen berücksichtigt werden).

## 🧠 Merkhilfen
- **Innovationstypen:**
  - Inkrementell: *Besser machen (Evolution).*
  - Radikal: *Neu erfinden (Revolution).*
  - Disruptiv: *Verdrängen von unten (Disruption).*
- **MVP-Prinzip:** *Lieber ein fahrbereites Skateboard heute als ein Auto erst in drei Jahren.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Inkrementelle Innovation | Schrittweise Verbesserung und Pflege bestehender Produkte. |
| Radikale Innovation | Technologischer Durchbruch mit hohem Neuheitsgrad. |
| Disruptive Innovation | Verdrängung etablierter Märkte durch anfangs einfache Lösungen von unten. |
| MVP | Minimum Viable Product; minimal funktionsfähiges Produkt zum frühen Markttest. |
| Roadmap | Zeitliche, strategische Meilenstein- und Release-Übersicht eines Produkts. |
| Personentag (PT) | Maßeinheit für den Arbeitsaufwand einer vollzeitbeschäftigten Person pro Tag. |

## ✅ Selbsttest
**F:** Was unterscheidet eine inkrementelle von einer disruptiven Innovation?
**A:** Eine inkrementelle Innovation optimiert schrittweise bestehende Produkte für bestehende Kunden (z. B. Software-Updates); eine disruptive Innovation startet oft als einfachere, kostengünstige Lösung in Nischenmärkten und rollt den Markt von unten auf, bis etablierte Anbieter verdrängt werden.

**F:** Welche wesentlichen Risiken müssen bei der Formulierung einer Produktstrategie berücksichtigt werden?
**A:** Das Marktrisiko (fehlende Kundenakzeptanz/Bedarf), das Technologierisiko (Machbarkeit, Skalierbarkeit), das Wettbewerbsrisiko (schnellere Konkurrenten) und das Implementierungsrisiko (Budget- und Terminüberschreitung).

**F:** Was ist das primäre Ziel eines "Minimum Viable Product" (MVP)?
**A:** Mit minimalem Entwicklungsaufwand eine erste lauffähige Version an Erstanwender auszuliefern, um durch echtes Nutzerfeedback schnellstmöglich zu lernen und Fehlentwicklungen zu vermeiden.

**F:** Wie wird eine Release-Roadmap auf Basis von Personentagen (PT) kalkuliert?
**A:** Die geschätzten Aufwände aller priorisierten Features (in PT) werden aufsummiert und der bereinigten Netto-Entwicklerkapazität des Teams pro Release-Periode gegenübergestellt.
