---
id: impis-05-es-implementation
kurs: impis
nr: 5
titel: Enterprise System Implementation: Digitale Transformation, O-I-T-Evolution, Erfolgsfaktoren & Change Projects
quellen: 60-IMPES_ES_Implementations.pdf
seiten: 32
---

> **Kurz gesagt:** Die Einführung eines Enterprise Systems ist kein reines IT-Installationsprojekt, sondern eine tiefgreifende **IT-induzierte Digitale Transformation**! Dieses Skript von Prof. Dr. Jens Lauterbach verbindet das **O-I-T-Modell** (Lauterbach et al. 2013) mit der **Prozesstheorie der ES-Transformation** (Soh & Markus 1995; Swanson 1994), den **11 Kritischen Erfolgsfaktoren** nach Nah et al. (2001), klassischem Projektmanagement (**Project Charter, Iron Triangle, Chaos Report, Yourdons „Death March", WBS, Shenhar & Dvir**) sowie der entscheidenden Abgrenzung zwischen **Engineering/Task Perspective** und **Organizational Perspective („Change Projects" nach Andersen 2006)** bis hin zum **Programm-Management**.

## 🎯 Lernziele
- **Digitale Transformation** nach Vial (2019) definieren und begründen, warum jede ES-Implementierung eine IT-induzierte Transformation ist (S. 4–5 / Folien 4–5).
- Das **O-I-T-Modell** (*Organisation, Individual, Technology*) und die **ES-Transformation** als intentionalen Übergang zwischen O-I-T-Konfigurationen über die Zeit ($t_0 \to t_1 \to t_n$) erklären (S. 7–8 / Folien 7–8).
- Den generischen **ES-Transformationsprozess** (*Organizational Adoption, Conversion, Use, Competitive Process*) sowie die Rollen von **Delivery Organization (DO)** und **Host Organization (HO)** nach Soh & Markus (1995) und Swanson (1994) beschreiben und Praxisbeispiele einordnen (S. 9–12 / Folien 9–13).
- Die **11 Kritischen Erfolgsfaktoren (CSFs)** nach Nah et al. (2001) den Phasen der ES-Transformation zuordnen (S. 14 / Folie 16).
- Klassische Projektmanagement-Konzepte (**5 Projektmerkmale, Project Charter, Iron Triangle, Standish Chaos Report Typ 1–3, Death-March-Projekte nach Yourdon, 9 PM-Wissensgebiete, WBS, Projekttypologie nach Shenhar & Dvir**) sicher anwenden (S. 15–25 / Folien 17–28).
- **Change Projects** nach Andersen (2006) charakterisieren, die **Engineering/Task Perspective** der **Organizational Perspective** gegenüberstellen und **Projektmanagement** von **Programm-Management** abgrenzen (S. 26–30 / Folien 29–34).

## 📖 Kerninhalte

### 1. Digitale Transformation & Evolution des O-I-T-Modells (S. 4–8 / Folien 4–8)
- **Leitsatz der Vorlesung (Folie 4):**
  $$\textbf{Enterprise System Implementation} = \textbf{IT-induced / Digital Transformation!}$$
- **Formale Definition Digitale Transformation (Vial 2019, S. 9 / Folie 5):**
  *„[Digital transformation is] a process that aims to improve an entity by triggering significant changes to its properties through combinations of information, computing, communication, and connectivity technologies [= digital technologies]."*
  - **Vier Technologie-Säulen (Vial 2019):** *Information*, *Computing*, *Communication* und *Connectivity Technologies*.
- **Recap: Das soziotechnische O-I-T-Modell (Lauterbach et al. 2013, Folie 7):**
  ```
  ┌───────────────────────────────────┐         ┌───────────────────────────────────┐
  │          O – ORGANISATION         │         │          T – TECHNOLOGY           │
  │ • Orga. Context                   │         │ • Information Technology (is-a)   │
  │ • Organizational Structure:       │         │ • Tech. Platform (builds on)      │
  │   - Functional Structure (Aufbau) │         │ • Application (Application Layer) │
  │   - Procedural Structure (Ablauf) │         │ • Interface (Schnittstelle)       │
  │ • Process ──(represented by)──► Task        └─────────────────┬─────────────────┘
  └─────────────────┬─────────────────┘                           │
                    │               ┌─────────────────────────────┘
                    ▼               ▼
          ┌───────────────────────────────────────────┐
          │              I – INDIVIDUAL               │
          │ • Action (verbindet Task & Application!)  │
          │ • Individual (im Individual Context)      │
          │ • builds ► Mental Model                   │
          └───────────────────────────────────────────┘
  ```
- **ES-Transformation als Evolution von O-I-T-Konfigurationen über die Zeit (Folie 8):**
  - O-I-T-Konfigurationen verändern sich im Zeitverlauf – entweder unbeabsichtigt (*unintended drift*) oder absichtsvoll gesteuert (*intended*).
  - **Definition ES Transformation:** Der **intentionale (bewusst geplante) Veränderungsprozess** zwischen verschiedenen O-I-T-Konfigurationen zu den Zeitpunkten $t_0 \to t_1 \to t_n$:
    - **$t_0$ $(O, I, T)$:** Ausgangszustand vor Projektbeginn.
    - **$t_1$ $(O, I, T')$:** Neues Enterprise System ($T'$) ist technisch ausgerollt (Go-Live), aber Organisation ($O$) und mentale Modelle der Menschen ($I$) sind noch auf dem alten Stand!
    - **$t_n$ $(O', I', T')$:** Erfolgreiche Transformation – auch Prozesse/Strukturen ($O'$) und das Nutzungsverhalten/Mental Model der Individuen ($I'$) haben sich an $T'$ angepasst.

---

### 2. Generischer ES-Transformationsprozess & Klassifikation (S. 9–12 / Folien 9–13)

#### a) Entitäten & Teilprozesse nach Soh & Markus (1995) und Swanson (1994) (Folien 9–10)
```
┌──────────────────┐   ┌───────────────────────────────┐   ┌───────────────────────────┐   ┌──────────────────────────┐
│  Org. Adoption   │   │     Delivery Organization     │   │     Host Organization     │   │          Market          │
│     Process      │   │        (IT Department)        │   │       (Corporation)       │   │                          │
│                  ├──►│                               ├──►│                           ├──►│                          │
│ • Awareness      │   │  Expenditure ──────► Assets   │   │  Assets ───────► Impacts  │   │ Impacts ──► Orga.        │
│ • Selecting      │   │                               │   │                           │   │             Performance  │
│ • Evaluating     │   │    [the conversion process]   │   │     [the use process]     │   │ [the competitive process]│
│ • Deciding       │   └───────────────────────────────┘   └───────────────────────────┘   └──────────────────────────┘
```
- **Die zwei zentralen organisatorischen Einheiten (Folie 10):**
  1. **Delivery Organization (DO):** Meist eine temporäre Projektorganisation bestehend aus interner IT-Abteilung, Fachexperten (*Business Experts*) und externen Partnern (Softwarehersteller wie SAP, Beratungen). Ihre Aufgabe ist es, die ES-Technologie an die Host Organization zu liefern.
  2. **Host Organization (HO):** Die aufnehmende Basisorganisation (das Gesamtunternehmen bzw. die Fachabteilungen), die mit dem System im Tagesgeschäft arbeitet.
  - *Reziprozität:* Die wechselseitigen Veränderungen in beiden Einheiten (DO und HO) und ihre Interaktionen machen den ES-Transformationsprozess aus.
- **Die vier verketteten Teilprozesse (Folien 9–10):**
  1. **Organizational Adoption Process:** Alle Handlungen von Individuen zur Schaffung von Bewusstsein (*Creating Awareness*), Auswahl (*Selecting*), Bewertung (*Evaluating*), Initiierung und Entscheidung für die Einführung einer neuen ES-Technologie.
  2. **Conversion Process (in der DO):** Alle Aktivitäten (innerhalb oder zwischen Organisationen) zur Entwicklung und technischen Implementierung der ES-Technologie – wandelt Projektbudget (*Expenditure*) in nutzbare Systeme (*Assets*) um.
  3. **Use Process (in der HO):** Alle Handlungen der Mitarbeiter bei der Nutzung und Anpassung der ES-Technologie bzw. ihrer Arbeitsumgebung (*Work System*), um den angestrebten Geschäftswert (*Impacts*) zu realisieren.
  4. **Competitive Process (im Markt):** Umsetzung der internen *Impacts* am Markt in messbare **Organizational Performance** (Umsatz, Wettbewerbsvorteil).

#### b) Klassifikation von ES-Transformationen nach Scope & Impact (Swanson 1994, Folien 11–13)
Je größer der **Technological Scope** (*I Small, II Medium, III Large-Scale*) und je weiter der **Organizational Scope** von der reinen IT-Abteilung (**DO**) über die Fachabteilungen und das Kundenangebot (**HO**) bis hin zu externen Marktpartnern (**HO + x**) reicht, desto höher ist der **Organizational Impact**:

| Org. Scope $\rightarrow$ | **DO:** Administration | **DO:** Production Processes | **HO:** Administration | **HO:** Production Processes | **HO:** Value Proposition *(Kundenwert)* | **HO + x:** Cross-Organizational |
|---|---|---|---|---|---|---|
| **I – Small** | X | X | – | – | – | – |
| **II – Medium** | X | X | X | (X) | – | – |
| **III – Large-Scale** | X | X | X | X | X | (X) |
| **Beispiel 1: Industrie (*Manufacturing*)** | IT Project Mgmt. Tool | Eclipse IDE | **SAP ERP** | **MES Software** *(Manufacturing Execution)* | **Predictive Maintenance App** für Produkt | **Supplier Marketplace** (Lieferantenportal) |
| **Beispiel 2: Bank (*Service Company*)** | IT Project Mgmt. Tool | Eclipse IDE | **SAP FI / SAP CO** | **SAP Core Banking System** | **Core Banking + Mobile Banking App** | **Multi-Organization Core Banking Platform** |

---

### 3. Aufgaben & Kritische Erfolgsfaktoren (CSFs) im Transformationsprozess (S. 14–25 / Folien 16–28)

#### a) Die 11 Critical Success Factors (CSFs) nach Nah et al. (2001, Folie 16)
Der Transformationsprozess gliedert sich operativ in vier Phasenblöcke:
`1. Create Awareness, Select, Evaluate, Decision` (*Adoption*) $\to$ `2. (Develop) and Implement` (*Conversion*) $\to$ `3. Adopt and Accept` (*Use I*) $\to$ `4. Use, Routinize, Extend` (*Use II*).

| Kritischer Erfolgsfaktor (CSF nach Nah et al. 2001) | 1. Adoption *(Select/Decide)* | 2. Conversion *(Implement)* | 3. Use I *(Adopt & Accept)* | 4. Use II *(Routinize & Extend)* |
|---|:---:|:---:|:---:|:---:|
| **1. Top Management Support** *(durchgehend ab Tag 1!)* | ✅ | ✅ | ✅ | ✅ |
| **2. Business Plan & Vision** *(später: Develop Business Vision)* | ✅ | ✅ | ✅ | ✅ |
| **3. Effective Communication** *(durchgehend ab Tag 1!)* | ✅ | ✅ | ✅ | ✅ |
| **4. Teamwork & Composition** *(interdisziplinäres Team aus DO+HO)* | – | ✅ | ✅ | ✅ |
| **5. Project Management** *(Fokus auf Umsetzung & Abnahme)* | – | ✅ | ✅ | – |
| **6. Find Project Champion** *(prominenter interner Treiber)* | – | ✅ | ✅ | (✅) |
| **7. Change Management Program & Culture** | – | ✅ | ✅ | ✅ |
| **8. BPR (Business Process Reengineering) & Minimum Customization** | – | ✅ | ✅ | ✅ |
| **9. S/W Dev, Testing & Troubleshooting** | – | ✅ | ✅ | ✅ |
| **10. Monitoring & Evaluation** *(Erfolgsmessung im Betrieb)* | – | – | ✅ | ✅ |

> 💡 **Klausur-Merksatz zu Punkt 8:** *„BPR & Minimum Customization"* bedeutet: Lieber die Geschäftsprozesse der Organisation an den SAP-Standard anpassen (*Business Process Reengineering*), als den Standard-Quellcode massiv umzuprogrammieren (*Minimum Customization*)!

#### b) Projektdefinition, Project Charter, Chaos Report & Death March (Folien 17–22)
- **5 Charakteristika eines Projekts (PMI / Thomson 2002, Folie 17):**
  1. **Unique Purpose:** Klar definiertes Ziel – ein einzigartiges Produkt, Service oder Ergebnis.
  2. **Temporary:** Definiertes Anfangs- und Enddatum.
  3. **Requires resources from various areas:** Menschen, Hardware, Software und Assets aus verschiedenen Abteilungen.
  4. **Has a primary sponsor or customer:** Der **Project Sponsor** gibt die Richtung vor und stellt die Finanzierung (*Funding*) bereit.
  5. **Uncertainty:** Jedes Projekt ist einzigartig; Ziele, Dauer und Kosten sind schwer exakt vorab zu schätzen (Hauptgrund für Schwierigkeiten bei neuen Technologien!).
- **Vom Projektstart zum Project Charter (Phillips 2004, Folien 18–19):**
  - Reifekette: `Project Genesis` $\to$ `Definition` $\to$ `Sponsor` $\to$ `Manager` $\to$ `Objective` $\to$ `Team` $\to$ `Resources` $\to$ **`Project Charter`**.
  - Der **Project Charter (Projektauftrag)** ist das offizielle Gründungsdokument im Einklang mit den Zielen der Host Organization. Typische Gliederung (Folie 19): *Executive Summary, Project Purpose/Justification (Business Need/Case, Business Objectives), Project Description (Objectives & Success Criteria, Requirements, Constraints, Assumptions, Preliminary Scope Statement), Risks, Project Deliverables, Summary Milestone Schedule, Summary Budget, Project Approval Requirements, Project Manager, Authorization*.
- **Iron Triangle & Standish Group Chaos Report (Folien 20–21):**
  - **Iron Triangle:** *Cost*, *Time*, *Scope* (mit *Quality* im Zentrum).
  - **Die 3 Projekt-Kategorien der Standish Group Chaos-Studie (1994–2015, Folie 21):**
    - **Type 1 (Successful):** Projekt erfolgreich in Zeit, im Budget und mit vollem geplantem Funktionsumfang abgeschlossen *(2015: nur **29 %**, 1994: **16 %**!)*.
    - **Type 2 (Challenged / Partially successful):** Projekt wurde zwar fertiggestellt, hat aber Zeit oder Budget überzogen oder einen reduzierten Scope geliefert *(2015: **52 %**)*.
    - **Type 3 (Impaired / Failed):** Projekt wurde vor Abschluss abgebrochen / nicht erfolgreich beendet *(2015: **19 %**)*.
- **„Death March"-Projekte nach Edward Yourdon (2004, Folie 22):**
  - **Definition:** Ein Projekt heißt **Death March Project (Todesmarsch-Projekt)**, wenn seine Projektparameter die normale realistische Norm um **mindestens 50 % überschreiten** (*„exceed the norm by at least 50 percent"*).
  - *Konkret heißt das:* Das Budget oder die Personalstärke wurde **halbiert** (oder noch stärker gekürzt), die Projektlaufzeit wurde halbiert, oder der geforderte Funktionsumfang/Performance-Anspruch ist **doppelt so hoch** wie unter normalen Umständen.
  - **Typische Gründe für Death-March-Projekte:**
    - *„Politics, politics, politics"* (Machtspiele im Unternehmen).
    - Naive Versprechungen von Marketing, Top-Management oder unerfahrenen Projektleitern.
    - Naiver Optimismus der Jugend (*„We can do it over the weekend!"*).
    - „Start-up"-Mentalität junger Firmen oder **„Marine Corps"-Mentalität** (*„Real programmers don't need sleep!"*).
    - Extremer Wettbewerbsdruck durch Globalisierung, neue Technologien, unerwartete staatliche Regulierung oder unvorhergesehene Krisen (Insolvenz des Softwareherstellers, Ausfall der besten Entwickler).

#### c) 9 PM-Wissensgebiete, Work Breakdown Structure (WBS) & Projekttypologie (Folien 23–28)
- **Die 9 Knowledge Areas des Projektmanagements (PMI / Thomson 2002, Folie 23):**
  - **4 Core Functions (Kernfunktionen):** *Scope Mgmt.*, *Time Mgmt.*, *Cost Mgmt.*, *Quality Mgmt.*
  - **4 Supporting Functions (Unterstützungsfunktionen):** *HR Mgmt.*, *Communication Mgmt.*, *Risk Mgmt.*, *Procurement Mgmt.*
  - **9. Dachfunktion:** **Project Management Integration** (bündelt alle 8 Bereiche mithilfe von *Tools*, um aus *Stakeholder Expectations* den *Project Success* zu erzeugen).
- **Work Breakdown Structure (WBS / Projektstrukturplan, Folien 25–27):**
  - **Definition:** Eine hierarchische Kategorisierung und Dekomposition der Projekt-Liefergegenstände (*Deliverables*):
    `Scope` $\to$ `Phases` $\to$ `Work Units` $\to$ `Tasks` $\to$ `Resources`.
  - **WBS dient als Input für (Folie 25):** *Activity definition, Cost estimating, Cost budgeting, Resource planning, Risk management planning*.
  - **Inhalt jedes Arbeitspakets in der Praxis (z. B. in Excel, Smartsheet, MS Project, Folie 26):** Aufwand (*Effort*, z. B. in Manntagen), Status (*Progress*), Verantwortlicher (*Responsible Person*), Fertigstellungsdatum (*Date of Completion*) und Abhängigkeiten zu anderen Arbeitspaketen (*Dependencies*).
- **Projekttypologie nach Shenhar & Dvir (1996): *„A project is not a project is not a project"* (Folie 28):**
  Klassifikation entlang von **System Scope** (y-Achse) und **Technology Uncertainty** (x-Achse):

  | System Scope $\uparrow$ \ Tech. Uncertainty $\rightarrow$ | **1. Low-Tech** *(bekannte Technik)* | **2. Medium-Tech** *(etwas neue Technik)* | **3. High-Tech** *(neue, aber existierende Technik)* | **4. „Super" High-Tech** *(Technik muss erst erfunden werden)* |
  |---|---|---|---|---|
  | **Array** *(Verbundsystem vieler Systeme)* | Modernisierung der New Yorker U-Bahn | Eurotunnel (*English Channel Tunnel*) | – | US Strategic Defense Initiative (SDI / „Star Wars") |
  | **System** *(komplexes Gesamtsystem)* | Hausbau (*Building a House*) | Neues Automodell (*New Car Model*) | Erster PC / Patriot-Rakete | Erstes Stealth-Tarnkappenflugzeug |
  | **Assembly** *(einzelne Baugruppe / Gerät)* | – | – | Erster MP3-Player | – |

---

### 4. ES-Transformationen als „Change Projects" & Programm-Management (S. 26–30 / Folien 29–34)

#### a) Warum ES-Transformationen „Change Projects" sind (Andersen 2006, Folien 29–31 – Top-Klausurthema!)
- **Definition Change (Renewal) Projects (Folie 29):** Projekte zur Einführung neuer IT, Reorganisation, Organisationsentwicklung und Schulung, die ihre Ergebnisse **intern an die eigene Host Organization** liefern (nicht an externe Kunden!).
- Sie verlangen zwingend eine **Organizational Perspective** anstelle der traditionellen **Engineering/Task Perspective**:

| Differenzierungskriterium | **Engineering / Task Perspective** *(Traditionelle Ingenieurssicht)* | **Organizational Perspective** *(Change-Projekt-Sicht nach Andersen 2006)* |
|---|---|---|
| **1. Project Definition** | Ein Projekt ist ein **temporäres Vorhaben (*temporary endeavor*)** zur Schaffung eines einzigartigen Produkts, Services oder Ergebnisses. | Ein Projekt ist eine **temporäre Organisation (*temporary organization*)**, die von ihrer permanenten Basisorganisation (*Host Organization*) gegründet wird, um einen Auftrag in ihrem Namen auszuführen. |
| **2. Rationale & Focus** | • Fokus liegt auf der technischen Arbeit/Aufgabe selbst.<br>• Betrachtet aus Sicht derjenigen, die die Arbeit leisten (DO). | • Die temporäre Organisation erhält Inputs von der permanenten Organisation und liefert ihre Ergebnisse an genau diese zurück.<br>• Maßstab ist, was der **Basisorganisation am besten dient**. |
| **3. Underlying Assumptions** | • Vollkommen rationaler Ansatz (**Homo Oeconomicus**).<br>• Tendenz zu Starrheit (*rigidity*) und Bürokratie. | • **Politik und Konflikte sind essenziell (*politics and conflict are essential*)!**<br>• Projekt als **Vehikel für Wandel (*vehicle for change*)**, das kreative Kräfte freisetzt. |
| **4. Objectives (Ziele)** | • Ziele werden **zu Beginn** der Projektausführung festgeschrieben (Produkt gemäß Spezifikation in fester Zeit und Budget). | • Ziel ist die **positive Entwicklung / Veränderung der Host Organization**.<br>• Die Host Organization erteilt ein Mandat, dessen Charakter sich im Verlauf stark weiterentwickeln kann. |
| **5. Planning (Planung)** | • **Detaillierte Pläne zu Beginn**, exakte Ressourcenberechnung und striktes Abarbeiten des Plans. | • **Weniger detaillierte Pläne zu Beginn**.<br>• Fokus auf den Sinn (*Purpose*) des Projekts und das Zeichnen einer **Vision / eines gewünschten Zukunftsbilds**. |
| **6. Success (Erfolgsmaßstab)** | • Projekterfolg ist erreicht, sobald die Lieferung **in Time, in Budget und gemäß Spezifikation** erfolgt ist. | • Projekterfolg ist **erst dann** erreicht, wenn die Basisorganisation das Potenzial der Ergebnisse tatsächlich **nutzt** und **„der Wandel" (*the change*)**, den sie ursprünglich wollte, im Alltag eingetreten ist! |

#### b) Project Management vs. Program Management (Pellegrinelli 1997; Reiss, Folien 33–34)
- **Anschauliche Metapher (G. Reiss, Folie 33):**
  *„Project management is like juggling three balls – time, cost and quality. Program management is like a troupe of circus performers standing in a circle, each juggling three balls and swapping balls from time to time."*
- **Definition Programm (Pellegrinelli 1997, S. 142 / Folie 33):**
  *„A program is a framework for grouping existing projects or defining new projects, and for focusing all the activities required to achieve a set of major benefits."*
- **Große ES-Transformationen als Programm (Folie 34):**
  Eine unternehmensweite ERP-/ES-Einführung ist fast nie ein einzelnes Projekt, sondern ein **Programm**, das aus einer Kette aufeinander aufbauender Einzelprojekte besteht:
  ```
  ┌───────────────────────────────────────── PROGRAM ─────────────────────────────────────────┐
  │                                                                                           │
  │  ┌─────────────────────────┐                                                              │
  │  │ Project 1:              │   ┌─────────────────┐   ┌───────────────────────────────┐    │
  │  │ • Feasibility Study     │──►│ Project 2:      │──►│ Project 3:                    │    │
  │  │ • Analysis              │   │ • Software      │   │ • Customization V1            │    │
  │  └─────────────────────────┘   │   Package       │   │ • Roll-Out V1                 │    │
  │                                │   Selection     │   └───────────────┬───────────────┘    │
  │                                └─────────────────┘                   │         ...        │
  │                                                                      ▼                    │
  │                                                      ┌───────────────────────────────┐    │
  │                                                      │ Project n:                    │    │
  │                                                      │ • Customization Vn            │    │
  │                                                      │ • Roll-Out Vn                 │    │
  │                                                      └───────────────────────────────┘    │
  └───────────────────────────────────────────────────────────────────────────────────────────┘
  ```

---

## ⚠️ Klausurfallen & typische Fehler
- **Go-Live ($t_1$) mit abgeschlossener ES-Transformation ($t_n$) verwechseln:** Wenn die IT-Abteilung (DO) das neue SAP-System technisch live schaltet ($T \to T'$), ist erst der **Conversion Process** beendet! Ohne den anschließenden **Use Process** in der Host Organization ($O \to O'$, $I \to I'$) entsteht **kein Business Impact**!
- **Engineering vs. Organizational Success (Andersen 2006):** Aus *Engineering-Sicht* gilt ein ERP-Projekt als erfolgreich, wenn die Software pünktlich und im Budget installiert wurde. Aus *Organizational-Sicht (Change Project)* ist es trotzdem **gescheitert**, wenn die Mitarbeiter das System boykottieren oder der angestrebte organisatorische Wandel ausbleibt!
- **DO vs. HO bei Swansons Klassifikation:** Ein *IT Project Management Tool* oder die *Eclipse IDE* verändert nur die Arbeit der **Delivery Organization (DO = IT-Abteilung)**; erst Systeme wie *SAP ERP*, *MES* oder eine *Mobile Banking App* transformieren die **Host Organization (HO)**!
- **Death March Schwellenwert:** Nach Yourdon (2004) spricht man ab einer Überdehnung der normalen Projektparameter (Zeit, Budget, Personal oder Scope) um **mindestens 50 %** von einem *Death March Project*.

## 🧠 Merkhilfen
- **O-I-T-Brücke:** *Das **I**ndividuum bildet ein **Mental Model** und verbindet durch seine **Action** die **Task** (aus **O**) mit der **Application** (aus **T**).*
- **Soh & Markus Wertkette:** *DO macht aus **Expenditure $\to$ Assets** (Conversion), HO macht aus **Assets $\to$ Impacts** (Use), der Markt macht aus **Impacts $\to$ Performance** (Competitive).*
- **Chaos-Report-Typen 1–2–3:** *Typ 1 = Traumprojekt (in time/budget/scope), Typ 2 = Teilerfolg mit Schrammen (überzogen/abgespeckt), Typ 3 = Totalschaden (abgebrochen).*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Digitale Transformation (Vial 2019) | Verbesserung einer Einheit durch signifikante Eigenschaftsänderungen mittels Informations-, Rechen-, Kommunikations- und Konnektivitätstechnologien. |
| O-I-T-Modell (Lauterbach et al. 2013) | Soziotechnisches Dreieck aus *Organisation* (Struktur/Prozess/Task), *Technology* (Plattform/App/Interface) und *Individual* (Mental Model/Action). |
| Delivery Organization (DO) vs. Host Organization (HO) | DO = liefernde Projekt-/IT-Organisation (inkl. Beratern); HO = aufnehmendes Unternehmen / Fachabteilungen. |
| Adoption / Conversion / Use Process | Die 3 Phasen der ES-Transformation: Auswählen & Entscheiden $\to$ Entwickeln & Implementieren $\to$ Nutzen & Routinisieren. |
| Death March Project (Yourdon 2004) | Projekt, dessen Parameter (Budget, Personal, Zeit, Scope) die realistische Norm um mindestens 50 % überschreiten. |
| Work Breakdown Structure (WBS) | Hierarchische Zerlegung des Projekt-Scopes in Phasen, Arbeitspakete und Aufgaben (Projektstrukturplan). |
| Change Project (Andersen 2006) | Internes Erneuerungsprojekt aus *Organizational Perspective*, bei dem Politik/Konflikte normal sind und Erfolg erst bei gelebtem Wandel eintritt. |
| Program Management (Pellegrinelli 1997) | Übergeordneter Rahmen zur koordinierten Steuerung mehrerer zusammengehöriger Einzelprojekte zur Erzielung großer Geschäftsnutzen. |

## ✅ Selbsttest
**F:** Wie definiert Vial (2019) „Digitale Transformation" und wie lässt sich eine ES-Transformation mithilfe des O-I-T-Modells von Lauterbach et al. (2013) über die Zeit ($t_0, t_1, t_n$) erklären?
**A:** Nach Vial (2019) ist digitale Transformation ein Prozess zur Verbesserung einer Organisation durch signifikante Eigenschaftsänderungen mittels einer Kombination aus Informations-, Rechen-, Kommunikations- und Konnektivitätstechnologien. Im O-I-T-Modell ist die ES-Transformation der intentionale Übergang von einer Ausgangskonfiguration $(O, I, T)$ in $t_0$ über die technische Einführung $(O, I, T')$ in $t_1$ hin zur vollständigen Anpassung auch der Organisation und der mentalen Modelle/Handlungen der Individuen $(O', I', T')$ in $t_n$.

**F:** Erklären Sie das Prozessmodell einer ES-Transformation nach Soh & Markus (1995) und Swanson (1994) inklusive der Rollen von Delivery Organization (DO) und Host Organization (HO).
**A:** Nach dem *Organizational Adoption Process* (Awareness, Auswahl, Entscheidung) wandelt die *Delivery Organization (DO)* (IT-Abteilung, Fachexperten, externe Berater) im *Conversion Process* finanzielle Ausgaben (*Expenditure*) in technische *Assets* (das konfigurierte ES) um. Anschließend nutzt die *Host Organization (HO)* (Fachabteilungen) diese Assets im *Use Process*, um organisatorische *Impacts* zu erzielen, die sich im *Competitive Process* am Markt in höherer *Organizational Performance* niederschlagen.

**F:** Nennen Sie mindestens sechs der elf kritischen Erfolgsfaktoren (CSFs) nach Nah et al. (2001) und geben Sie an, welche drei Faktoren bereits ab der allerersten Phase (Organizational Adoption Process) durchgehend vorhanden sein müssen.
**A:** Durchgehend ab der allerersten Phase (*Adoption*) bis zum Ende müssen 1. *Top Management Support*, 2. *Business Plan & Vision* und 3. *Effective Communication* vorhanden sein. Ab dem *Conversion Process* kommen u. a. 4. *Teamwork & Composition*, 5. *Project Management*, 6. *Find Project Champion*, 7. *Change Management Program & Culture*, 8. *BPR & Minimum Customization* sowie 9. *Software Dev, Testing & Troubleshooting* hinzu (ergänzt um 10. *Monitoring & Evaluation* im *Use Process*).

**F:** Was versteht man unter den drei Projektergebnistypen des Standish Group Chaos Reports und wann liegt nach Yourdon (2004) ein sogenanntes „Death March Project" vor?
**A:** Im Chaos Report bedeutet *Type 1* ein voll erfolgreiches Projekt (in Zeit, Budget und Scope), *Type 2* ein teilweise erfolgreiches Projekt (abgeschlossen, aber Zeit/Budget überzogen oder Scope gekürzt) und *Type 3* ein gescheitertes/abgebrochenes Projekt. Ein *Death March Project* nach Yourdon liegt vor, wenn die Projektparameter die realistische Norm um mindestens 50 % überschreiten (z. B. Budget, Zeit oder Personal halbiert oder geforderte Funktionalität verdoppelt).

**F:** Worin unterscheiden sich die „Engineering/Task Perspective" und die „Organizational Perspective" bei Change-Projekten nach Andersen (2006) hinsichtlich Grundannahmen, Planung und Erfolgsdefinition?
**A:** Die *Engineering Perspective* sieht das Projekt als rationale Aufgabe (*Homo Oeconomicus*) mit detaillierten Anfangsplänen; Erfolg ist die bloße Abgabe in Zeit, Budget und Spezifikation. Die *Organizational Perspective* begreift das Projekt als *temporäre Organisation* innerhalb der Host Organization, erkennt Politik und Konflikte als wesentlichen Bestandteil des Wandels an, plant anfangs weniger detailliert zugunsten einer starken Zukunftsvision und sieht das Projekt erst dann als erfolgreich an, wenn die Host Organization die Ergebnisse tatsächlich nutzt und der angestrebte Wandel gelebt wird.
