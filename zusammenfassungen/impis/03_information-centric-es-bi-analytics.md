---
id: impis-03-information-centric-es
kurs: impis
nr: 3
titel: Informationszentrierte Enterprise Systems: DSS, Business Intelligence, Data Warehouse & Data Analytics
quellen: 22-IMPES_Information_centric_ES.pdf
seiten: 22
---

> **Kurz gesagt:** Während prozessorientierte ERP-Systeme das operative Tagesgeschäft abwickeln, stehen **informationszentrierte Enterprise Systems (DSS, Business Intelligence & Data Analytics)** an der Spitze der Unternehmenspyramide (Ferstl & Sinz). Dieses Skript von Prof. Dr. Jens Lauterbach (basierend u. a. auf Sharda 2020 sowie Alavi & Leidner 2001) erklärt, wie aus Rohdaten über ETL-Strecken, Enterprise Data Warehouses, Data Marts und Data Lakes fundierte Managemententscheidungen für semi- und unstrukturierte Probleme entstehen.

## 🎯 Lernziele
- Informationszentrierte Enterprise Systems in die Gesamtarchitektur betrieblicher Anwendungssoftware nach **Ferstl & Sinz (2008)** einordnen (S. 4 / Folie 4).
- Das Konzept, die 14 Fähigkeiten, die 5-Komponenten-Architektur und die historische Evolution (1970er–2020er) von **Decision Support Systems (DSS)** beschreiben (S. 5–8 / Folien 5–11).
- **Business Intelligence (BI)** als Sammelbegriff (*Umbrella Term*), die 3 BI-Umgebungen und die 5-stufige **Enterprise-Data-Warehouse-Architektur (inkl. ETL & Data Marts)** erklären (S. 10–12 / Folien 13–15).
- Die drei Reifegrade von **Data Analytics** (*Descriptive, Predictive, Prescriptive*) sowie deren Einsatz entlang der **Retail Value Chain** abgrenzen (S. 14–15 / Folien 17–18).
- **Daten, Information und Wissen** (Alavi & Leidner 2001), die **Taxonomie der Datenarten**, die **4-stufige Data-Processing-Pipeline** sowie moderne **Big-Data- & Data-Lake-Architekturen** (Hadoop, MapReduce, NoSQL/MongoDB) beherrschen (S. 16–20 / Folien 20–24).

## 📖 Kerninhalte

### 1. Einordnung & Decision Support Systems (DSS) (S. 4–8 / Folien 4–11)
- **Unternehmenssoftware-Landkarte (nach Ferstl & Sinz 2008, S. 4):**
  1. *Supplier-Centric Software:* B2B-Portale, SRM, SCM.
  2. *Customer-Centric Software:* E-Commerce (B2C), Operational CRM, Analytical CRM.
  3. *People-Centric Software (Querschnitt):* CSCW, Enterprise Portals, ECM, Social Web, HRM.
  4. *Organizational Process- & Information-Centric Software (Unternehmenspyramide):*
     - **Unten (operativ):** ERP & Operational Systems (z. B. MES), PLM.
     - **Mitte (Steuerung & Stammdaten):** Business Process Management (BPM), Master Data Management (MDM).
     - **Spitze (informationszentriert – Fokus dieser Vorlesung):** **Business Intelligence & Analytics** – verdichten Daten aller operativen Systeme für bessere Managemententscheidungen, die über Wachstum oder Niedergang eines Unternehmens entscheiden (S. 5).
- **Formale Definition DSS (Sharda 2020, S. 6 / Folie 9):**
  - Ein **Decision Support System (DSS)** ist formal keine einzelne Software, sondern ein **methodischer Ansatz (*approach/methodology*) zur Entscheidungsunterstützung**.
  - Es nutzt ein interaktives, flexibles und anpassungsfähiges **Computer-Based Information System (CBIS)** zur Lösung spezifischer **semi-strukturierter oder unstrukturierter Managementprobleme** (Probleme ohne festes Kochrezept, bei denen menschliche Urteilskraft nötig bleibt).
- **Wichtigste der 14 DSS-Fähigkeiten (S. 6 / Folie 9):**
  - Unterstützt **semi-strukturierte und unstrukturierte Probleme** auf **allen Managementebenen** (für Einzelpersonen und Gruppen, auch bei sequenziellen/interdependenten Entscheidungen).
  - Unterstützt alle **4 Phasen des Entscheidungsprozesses nach Herbert Simon**: *Intelligence* (Problemerkennung/Datensammlung) → *Design* (Entwicklung von Alternativen) → *Choice* (Auswahl) → *Implementation* (Umsetzung).
  - Steigert **Effektivität** (bessere Entscheidungen) und **Effizienz** (schnellere Entscheidungen), belässt aber die **vollständige Kontrolle beim Menschen (*complete human control*)**!
- **Schematische 5-Komponenten-Architektur eines DSS (S. 7 / Folie 10):**
  1. **Data Management:** Verwaltet interne/externe Daten aus `ERP/POS`, `Legacy` und `Web`.
  2. **Model Management:** Enthält quantitative Optimierungs-, Finanz- und Statistikmodelle.
  3. **External Models:** Anbindung externer Modelle via Internet/Intranet/Extranet.
  4. **Knowledge-Based Subsystems:** Optionale KI-/Expertensystem-Komponente, gespeist aus der *Organizational Knowledgebase*.
  5. **User Interface:** Dialogschnittstelle, über die der **Manager (User)** interaktiv mit allen Subsystemen kommuniziert.
- **Evolution von DSS bis Automation (S. 8 / Folie 11):**
  - **1970er (*DSS*):** Routine Reporting, AI/Expert Systems, erste DSS.
  - **1980er–1990er (*Enterprise/Executive IS*):** Relationale DBMS, ERP, Data Warehousing, Dashboards/Scorecards, **EIS (*Executive Information Systems*)**.
  - **Späte 1990er–2000er (*Business Intelligence*):** SaaS, Data/Text/Web Mining; bis **2006** verschmelzen alle kommerziellen Angebote unter dem Sammelbegriff **Business Intelligence (BI)** & BPM.
  - **2010er (*Analytics & Big Data*):** Cloud, Big Data Analytics, In-Memory / MPP, Social Media Analytics.
  - **2020er (*Automation*):** Automated Analytics, AI/Deep Learning, IoT/Sensoren, Robotics & Smart Robo-Assistants.

---

### 2. Business Intelligence (BI) & Enterprise Data Warehouse (S. 10–12 / Folien 13–15)
- **Definition BI (S. 10 / Folie 13):** BI ist ein **Sammelbegriff (*Umbrella Term*)**, der Architekturen, Werkzeuge, Datenbanken, Analyse-Tools, Anwendungen und Methoden vereint, um durch Analyse **historischer und aktueller Daten** interaktiv Erkenntnisse (*Insights*) für bessere Entscheidungen zu gewinnen.
  - **Die zentrale BI-Transformationskette:**
    `Data (Daten) ➔ Information (Informationen) ➔ Decisions (Entscheidungen) ➔ Actions (Handlungen)`
  - *Bestandteile des BI-Ökosystems:* ETL, Metadata, Data Warehouse, Data Marts, OLAP, Dashboards/Scorecards, EIS/ESS, Financial Reporting, Alerts/Notifications, Data & Text Mining, Predictive Analytics, Spreadsheets (MS Excel), Portals, Workflows.

- **High-Level-BI-Architektur – Die 3 Umgebungen & Rollen (S. 11 / Folie 14):**
  | Umgebung (*Environment*) | Verantwortliche Rolle | Kernaufgaben & Komponenten |
  |---|---|---|
  | **1. Data Warehouse Environment** | **Technical Staff** (IT-/DWH-Spezialisten) | Aufbau des DWH aus *Data Sources* durch **Organizing**, **Summarizing** (Verdichten) und **Standardizing** (Vereinheitlichen). |
  | **2. Business Analytics Environment** | **Business Users** (Fachanalysten) | Datenzugriff (*Access*), Manipulation & Auswertung über Browser, Portale, Dashboards – und künftig **AI?** (*Intelligent Systems*). |
  | **3. Performance and Strategy** | **Managers / Executives** (Führungskräfte) | Strategische Steuerung über **BPM Strategies** (*Business Performance Management*), die Zielvorgaben zurückspiegeln. |

- **Die 5-stufige Enterprise-Data-Warehouse-Architektur (EDW) (S. 12 / Folie 15):**
  ```
  [1. Data Sources]     [2. ETL Process]      [3. Enterprise DWH]     [4. Data Marts]         [5. Applications]
   • ERP                 • Select              + Metadata (oben)       • Marketing             • Routine Reporting
   • Legacy         ──►  • Extract        ──►  [ Enterprise Data ] ──► • Operations ──► [MW] ─►• Data/Text Mining
   • POS                 • Transform           [    Warehouse    ]     • Finance               • OLAP, Dashboard, Web
   • Other OLTP/Web      • Integrate           + Replication (unten)   (oder direkt:           • Custom-Built Apps
   • External Data       • Load                                        "No data mart options")
  ```
  - **ETL-Prozess (5 Teilschritte auf Folie 15):** *Select* (Auswählen) → *Extract* (Extrahieren) → *Transform* (Bereinigen/Harmonisieren) → *Integrate* (Zusammenführen) → *Load* (Laden ins EDW).
  - **Data Marts:** Kleinere, abteilungsbezogene Teil-Datenbestände (z. B. Marketing, Operations, Finance), die vom zentralen EDW gespeist werden (alternativ direkter Zugriff ohne Data Marts über *Middleware*).

---

### 3. Data Analytics: Reifegrade & Retail Value Chain (S. 14–15 / Folien 17–18)
- **Die 3 Stufen von Data Analytics (Sharda 2020, S. 14 / Folie 17 – Klausurklassiker!):**
  | Dimension | 1. Descriptive Analytics *(Beschreibend)* | 2. Predictive Analytics *(Vorhersagend)* | 3. Prescriptive Analytics *(Handlungsempfehlend)* |
  |---|---|---|---|
  | **Leitfragen** | *What happened?* / *What is happening?* | *What will happen?* / *Why will it happen?* | *What should I do?* / *Why should I do it?* |
  | **Enablers (Methoden)** | Business Reporting, Dashboards, Scorecards, Data Warehousing | Data Mining, Text/Web/Media Mining, Forecasting | Optimization (Optimierung), Simulation, Decision Modeling, Expert Systems |
  | **Ergebnis (Outcome)** | Klar definierte Geschäftsprobleme und Chancen | Präzise Zukunftsprognosen von Ereignissen | Bestmögliche Entscheidungen und konkrete Handlungen |

- **Anwendungsbeispiel: Analytics in der Retail Value Chain (7 Stufen, S. 15 / Folie 18):**
  1. *Vendors (Lieferanten):* Supply Chain Management, Bestandskosten-Optimierung, Vermeidung von Fehl-/Überbeständen.
  2. *Planning:* Regalflächen-Optimierung (*Shelf-space*), Standortanalyse, Aktions- & Markdown-Optimierung.
  3. *Merchandizing:* Zielgerichtete Promotions, Preisoptimierung, personalisiertes Einkaufserlebnis.
  4. *Buying (Einkauf):* Trendanalyse, Category Management, Nachfrageprognosen (*Demand Forecasting*).
  5. *Warehousing & Logistics:* Pünktliche Warenverfügbarkeit, Auftragsbündelung (*Clubbing*), Transportkostensenkung.
  6. *Multichannel Operations:* Nahtloses Kundenerlebnis über Filiale/Web/Mobile, Kanal-Performance-Vergleich.
  7. *Customers:* Kundenbindung (*Retention*), Bedarfsverständnis, Fokus auf Kunden mit hohem *Customer Lifetime Value*.

---

### 4. Daten-Taxonomie, Aufbereitung & Big Data / Data Lake (S. 16–20 / Folien 20–24)
- **Daten als „Treibstoff" (*Fuel*) & Wissenshierarchie (S. 16–17 / Folien 20–21):**
  - *Drei Datenquell-Welten:* **Business Processes** (`ERP`, `CRM`, `SCM`), **Internet/Social Media** und **Machines/IoT** fließen unter **Data Protection** in die **Cloud** (*Data Storage* → *Analytics: Build, Test, Validate*).
  - **Abgrenzung nach Alavi & Leidner (2001, S. 17):**
    - **Data (Daten):** Rohe Fakten und Zahlen ohne Kontext (*facts, raw numbers*).
    - **Information:** Verarbeitete, interpretierte Daten (*processed/interpreted data*).
    - **Knowledge (Wissen):** Personalisierte Information **im Kopf eines Akteurs/Menschen** (*personalized information – in an agent's head*).

- **Taxonomie der Daten (S. 18 / Folie 22):**
  1. **Structured Data (Strukturierte Daten – festes Tabellenschema):**
     - *Categorical (qualitativ):* **Nominal** (reine Kategorien ohne Rangfolge: Farbe, Land) vs. **Ordinal** (mit natürlicher Rangfolge: Schulnoten, Rating niedrig/mittel/hoch).
     - *Numerical (quantitativ):* **Interval** (gleiche Abstände, *kein* absoluter Nullpunkt: Temperatur in °C, Kalenderdatum) vs. **Ratio** (gleiche Abstände *mit* absolutem Nullpunkt: Umsatz, Preis, Gewicht, Stückzahl).
  2. **Unstructured or Semi-Structured Data:**
     - *Textual* (Freitext, E-Mails, Posts), *Multimedia* (*Image*, *Audio*, *Video*) sowie **XML / JSON** (typische **semi-strukturierte** Austauschformate mit Tags/Key-Value-Paaren).

- **4-stufige Data-Processing-Pipeline für Analytics (iterativ mit Feedback! S. 19 / Folie 23):**
  1. **Data Consolidation:** *Collect data* (Sammeln), *Select data* (Auswählen), *Integrate data* (Zusammenführen).
  2. **Data Cleaning:** *Impute values* (fehlende Werte auffüllen), *Reduce noise* (Rauschen/Ausreißer glätten), *Eliminate duplicates* (Dubletten löschen).
  3. **Data Transformation:** *Normalize data* (Wertebereiche normieren), *Discretize data* (in Klassen einteilen), *Create attributes* (neue Merkmale berechnen / Feature Engineering).
  4. **Data Reduction:** *Reduce dimension* (Spaltenzahl reduzieren), *Reduce volume* (Datenmenge/Stichprobe reduzieren), *Balance data* (unausgewogene Klassen ausgleichen) → Ergebnis: **Well-Formed Data im DW**.

- **Big Data & Data Lake Architektur (Teradata-Modell, S. 20 / Folie 24):**
  - Verknüpft klassische Quellen (`ERP, SCM, CRM`) UND unstrukturierte Massendaten (`Images, Audio/Video, Machine Logs, Text, Web/Social`) über drei vernetzte Plattformen:
    1. **Data Platform mit Data Lake:** Schnelles Laden großer Rohdatenmengen im Originalformat + Langzeitarchiv.
       - **Schlüsseltechnologien des Data Lake (Hervorhebung Prof. Lauterbach):** **`Hadoop`**, **`MapReduce`** (verteilte Parallelverarbeitung) und **`NoSQL (z. B. MongoDB)`**.
    2. **Integrated Data Warehouse:** Für reguläres BI, Predictive Analytics & Operational Intelligence.
    3. **Integrated Discovery Platform:** Für Data Scientists (*Data Discovery, Fast-Fail Hypothesis Testing, Path/Graph/Time-Series Analysis, Pattern Detection*).

## ⚠️ Klausurfallen & typische Fehler
- **DSS ersetzt NICHT den Manager:** Ein DSS löst keine Probleme vollautomatisch ohne Menschen, sondern unterstützt **semi-/unstrukturierte Probleme** unter **vollständiger menschlicher Kontrolle (*complete human control*)**!
- **Information vs. Knowledge (Alavi & Leidner):** Aufbereitete Zahlen in einem Dashboard sind **Information**, noch kein *Knowledge*! Erst durch Erfahrung und Vernetzung **im Kopf des Entscheiders** entsteht Wissen (*Knowledge*).
- **Interval vs. Ratio verwechseln:** `20 °C` ist nicht „doppelt so warm" wie `10 °C` (**Intervallskala**, kein absoluter Nullpunkt); `200 € Umsatz` ist dagegen exakt doppelt so hoch wie `100 €` (**Verhältnisskala / Ratio**).
- **Data Warehouse vs. Data Lake:** Ein **Enterprise Data Warehouse** speichert stark bereinigte, streng strukturierte Daten (nach ETL); ein **Data Lake** nimmt auch rohe, unstrukturierte und semi-strukturierte Massendaten (Videos, Sensor-Logs, JSON) über Technologien wie **Hadoop / MapReduce / NoSQL (MongoDB)** auf.

## 🧠 Merkhilfen
- **Simons 4 Phasen im DSS:** **I-D-C-I** – *Intelligence* (Spähen) → *Design* (Entwerfen) → *Choice* (Wählen) → *Implementation* (Umsetzen).
- **3 Analytics-Stufen:** *Descriptive schaut in den Rückspiegel („Was war?"), Predictive in die Wettervorhersage („Was kommt?"), Prescriptive ins Navigationssystem („Wie soll ich fahren?").*
- **4 Preprocessing-Schritte (C-C-T-R):** **C**onsolidate → **C**lean → **T**ransform → **R**educe *(mit Feedback-Schleifen)*.

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Decision Support System (DSS) | Methodischer CBIS-Ansatz zur Unterstützung semi- und unstrukturierter Managemententscheidungen. |
| Business Intelligence (BI) | Sammelbegriff für Architekturen, DWH, OLAP und Tools zur Umwandlung von Daten in Entscheidungen. |
| ETL-Prozess | Datenintegrationsstrecke ins DWH: *Select, Extract, Transform, Integrate, Load*. |
| Data Mart | Fachbereichsspezifischer Teil-Datenbestand (z. B. Marketing, Finance), abgeleitet aus dem EDW. |
| Descriptive / Predictive / Prescriptive | Die 3 Analytics-Stufen: Vergangenheit beschreiben → Zukunft vorhersagen → optimale Handlung empfehlen. |
| Data Imputation | Statistisches Schätzen und Auffüllen fehlender Werte (*Missing Values*) im Schritt *Data Cleaning*. |
| Data Lake | Flexibler Big-Data-Rohdatenspeicher (Hadoop, MapReduce, NoSQL/MongoDB) für alle Datenformate. |

## ✅ Selbsttest
**F:** Welche Art von Problemen adressieren Decision Support Systems (DSS) im Gegensatz zu operativen Transaktionssystemen (OLTP), und wer behält die Entscheidungsgewalt?
**A:** DSS adressieren semi-strukturierte und unstrukturierte Managementprobleme (für die kein starrer Standardalgorithmus existiert) über alle vier Phasen nach Simon (Intelligence, Design, Choice, Implementation). Die vollständige Kontrolle (*complete human control*) bleibt jederzeit beim menschlichen Entscheider.

**F:** Nennen Sie die drei Umgebungen der High-Level-BI-Architektur und ordnen Sie jeweils die verantwortliche Personengruppe zu.
**A:** 1. *Data Warehouse Environment* – verantwortet vom *Technical Staff* (IT-Personal: Organizing, Summarizing, Standardizing); 2. *Business Analytics Environment* – genutzt von *Business Users* (Analysten: Datenzugriff, Auswertung, Dashboards); 3. *Performance and Strategy Environment* – gesteuert von *Managers/Executives* (BPM-Strategien).

**F:** Worin unterscheiden sich Descriptive, Predictive und Prescriptive Analytics hinsichtlich ihrer Leitfrage und ihrer typischen Methoden?
**A:** *Descriptive Analytics* fragt „Was ist passiert?" (Reporting, Dashboards, Scorecards, DWH); *Predictive Analytics* fragt „Was wird warum passieren?" (Data/Text Mining, Forecasting); *Prescriptive Analytics* fragt „Was soll ich tun?" (Optimierung, Simulation, Decision Modeling, Expertensysteme).

**F:** Wie grenzen Alavi & Leidner (2001) die Begriffe Data, Information und Knowledge voneinander ab?
**A:** *Data* sind rohe, kontextlose Fakten und Zahlen; *Information* entsteht durch Verarbeitung und Interpretation dieser Daten; *Knowledge* (Wissen) ist personalisierte, mit Erfahrung verknüpfte Information im Kopf eines menschlichen Akteurs (*in an agent's head*).

**F:** Welche vier Phasen durchläuft die Datenaufbereitung (Data Processing for Analytics) und welche Technologien nennt die Vorlesung explizit für einen Big-Data Data Lake?
**A:** Die vier iterativen Phasen sind 1. *Data Consolidation* (Collect, Select, Integrate), 2. *Data Cleaning* (Impute values, Reduce noise, Eliminate duplicates), 3. *Data Transformation* (Normalize, Discretize, Create attributes) und 4. *Data Reduction* (Reduce dimension, Reduce volume, Balance data). Für den Data Lake werden explizit *Hadoop*, *MapReduce* und *NoSQL-Datenbanken (z. B. MongoDB)* genannt.
