---
id: impis-02-process-centric-sap
kurs: impis
nr: 2
titel: Prozessorientierte Enterprise Systems & SAP S/4HANA Architektur
quellen: 20-IMPES_Process_centric_ES_.pdf + 21-IMPES_Process_centric_ES.pdf
seiten: 62
---

> **Kurz gesagt:** Von den historischen Ursprüngen (MRP I, MRP II) zu modernen In-Memory-Systemen: Warum überwinden prozessorientierte Enterprise Systems die Silos funktionaler Software? Dieses Skript erklärt die Systemarchitektur von SAP S/4HANA (3-Tier Client/Server, HANA In-Memory-Datenbank), trennt Stammdaten von Bewegungsdaten und skizziert die zentralen Kernprozesse (Order-to-Cash, Procure-to-Pay, Plan-to-Produce).

## 🎯 Lernziele
- Die Evolution von isolierten Insellösungen über MRP I/II zu prozessorientierten ERP-Systemen nachvollziehen (20, S. 4–11).
- Die Probleme funktionaler Systeme (Datenredundanz, Verzögerungen, Medienbrüche) analysieren (20, S. 6–8).
- Die 3-Ebenen-Architektur (Database Tier, Application Tier, Presentation Tier) von SAP S/4HANA erklären (21, S. 3–6).
- Das Prinzip der SAP HANA In-Memory-Datenbank und deren Performance-Vorteile beschreiben (21, S. 6).
- Den Unterschied zwischen Stammdaten (Master Data) und Bewegungsdaten (Transaction Data) an Beispielen anwenden (21, S. 7–10).
- Die drei betrieblichen Kernprozesse (Order-to-Cash, Procure-to-Pay, Plan-to-Produce) skizzieren (20, S. 9–10).

## 📖 Kerninhalte
### 1. Evolution der Enterprise Systems (20, S. 4–11)
Historische Entwicklung prozessorientierter Systeme:
1. **1960er/70er – Isolierte Insellösungen & MRP I (Material Requirements Planning):**
   - Reine Stücklistenauflösung und Materialbedarfsrechnung für die Fertigung.
2. **1980er – MRP II (Manufacturing Resource Planning):**
   - Erweiterung um Maschinenbelegung, Personalkapazitäten und Werkstattsteuerung.
3. **1990er – ERP (Enterprise Resource Planning, z. B. SAP R/3):**
   - Integration aller Unternehmensfunktionen (Finanzbuchhaltung, Controlling, Vertrieb, Einkauf, Produktion, Personal).
4. **2000er+ – ERP II & Cloud / In-Memory (z. B. SAP S/4HANA):**
   - Öffnung über Unternehmensgrenzen hinweg (Lieferantenintegration via SCM, Kundenintegration via CRM) und Echtzeitauswertungen direkt im Hauptspeicher.

### 2. Probleme funktionaler Silo-Systeme (20, S. 6–8)
Vor Einführung prozessorientierter ERP-Systeme besaß jede Abteilung ihre eigene Software:
- **Datenredundanz:** Kunde Mustermann war im Vertriebssystem, im Buchhaltungssystem und im Liefersystem separat gespeichert.
- **Inkonsistenz & Medienbrüche:** Manuelles Abtippen von Auftragsdaten von Abteilung zu Abteilung führte zu Tippfehlern und Zeitverlust.
- **Mangelnde Gesamtsicht:** Das Management konnte Bestände oder offene Rechnungen nur über zeitaufwendige manuelle Monatsabschlüsse ermitteln.

### 3. SAP S/4HANA: Die 3-Tier Client/Server Architektur (21, S. 3–6)
SAP S/4HANA basiert auf einer klassischen dreischichtigen Architektur:
1. **Presentation Tier (Präsentationsschicht / User Interface):**
   - Der Zugang für den Anwender: SAP GUI (klassisch auf dem Desktop) oder moderne **SAP Fiori Apps** (webbasiert auf PC, Tablet und Smartphone via HTML5/UI5).
2. **Application Tier (Applikationsschicht / Logik):**
   - Ein oder mehrere Anwendungsserver führen die betriebswirtschaftliche Programmlogik (ABAP / Java) aus, steuern Workflows und berechnen Buchungssätze.
3. **Database Tier (Datenbankschicht):**
   - Speicherung aller Daten in der relationalen In-Memory-Datenbank **SAP HANA**.
   - **Besonderheit In-Memory-Technologie (Folie 6):** Im Gegensatz zu klassischen Datenbanken liegen alle Geschäftsdaten permanent im extrem schnellen Arbeitsspeicher (RAM) statt auf langsamen Festplatten. Dies ermöglicht Realtime-Analytics und operative Buchungen auf denselben Daten ohne nächtliche Batch-Läufe!

### 4. Datenstrukturen: Stammdaten vs. Bewegungsdaten (21, S. 7–10)
In jedem ERP-System unterscheidet man zwei fundamentale Datenkategorien:
- **Stammdaten (Master Data):**
  - Langfristig im System gespeicherte, statische Grunddaten, die von mehreren Geschäftsprozessen immer wieder verwendet werden.
  - *Beispiele:*
    - *Materialstamm (Material Master):* Artikelnummer, Bezeichnung, Gewicht, Basismengeneinheit, Einkaufspreis, Lagerort.
    - *Kundenstamm (Customer Master / Business Partner):* Name, Adresse, Zahlungsbedingungen, Währung.
    - *Lieferantenstamm (Vendor Master).*
    - *Sachkontenstamm (G/L Accounts) & Kostenstellenstamm.*
- **Bewegungsdaten (Transaction Data / Transaktionsdaten):**
  - Kurzlebige, prozessbezogene Daten, die bei der Durchführung eines konkreten Geschäftsvorfalls entstehen und Belege erzeugen.
  - Verknüpfen immer Stammdaten mit Zeit-, Mengen- und Preisangaben.
  - *Beispiele:* Kundenauftrag (wer kauft wann wie viel?), Wareneingangsbeleg, Ausgangsrechnung, Buchhaltungsbeleg.

### 5. Die drei Kernprozesse im ERP-System (20, S. 9–10)
1. **Order-to-Cash (Kundenauftragsabwicklung):**
   - Kundenanfrage → Angebot → Kundenauftragserfassung → Verfügbarkeitsprüfung (ATP) → Kommissionierung & Warenausgang → Rechnungserstellung → Zahlungseingang.
2. **Procure-to-Pay (Beschaffungsprozess):**
   - Bedarfsanforderung (Banf) → Lieferantenauswahl & Bestellung → Wareneingang (Lagerbestandsmehrung) → Rechnungseingang (3-Wege-Abgleich) → Zahlungsausgang.
3. **Plan-to-Produce (Produktionsplanung & -steuerung):**
   - Absatzplanung → Produktionsprogrammplanung → Materialbedarfsplanung (MRP) → Fertigungsauftrag → Materialentnahme → Fertigungsrückmeldung → Einlagerung der Fertigerzeugnisse.

## ⚠️ Klausurfallen & typische Fehler
- **Stamm- vs. Bewegungsdaten verwechseln:** Die Kundenadresse ist ein **Stammdatum**; die Rechnungsnummer oder Bestellmenge einer konkreten Bestellung ist ein **Bewegungsdatum**!
- **In-Memory-Datenbank:** HANA speichert Daten spaltenorientiert (Column-based) im RAM; das ist der Grund für die extreme Beschleunigung von Aggregationen (`SUM`, `AVG`), nicht etwa schnellere Prozessoren.

## 🧠 Merkhilfen
- **3-Tier-Modell:** *Fiori zeigt es (Presentation), ABAP rechnet es (Application), HANA speichert es (Database).*
- **Daten-Unterschied:** *Stammdaten stehen im Regal (Material, Kunde), Bewegungsdaten fließen durch die Kasse (Bestellung, Rechnung).*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| In-Memory-Datenbank | Datenbank (HANA), die den gesamten operativen Datenbestand im RAM hält. |
| SAP Fiori | Rollenbasierte, webfähige HTML5-Benutzeroberfläche für SAP. |
| Stammdaten | Statische, wiederverwendbare Stamminformationen (Kunde, Material, Sachkonto). |
| Bewegungsdaten | Transaktionsbezogene Belegdaten eines konkreten Geschäftsvorfalls. |
| Order-to-Cash | End-to-End-Prozess vom Kundenauftrag bis zum Zahlungseingang. |
| Procure-to-Pay | End-to-End-Prozess von der Bestellanforderung bis zur Lieferantenbezahlung. |

## ✅ Selbsttest
**F:** Was versteht man unter der 3-Tier-Architektur von SAP S/4HANA?
**A:** Die Trennung des Systems in drei eigenständige Schichten: Präsentationsschicht (SAP Fiori / GUI für die Benutzerinteraktion), Applikationsschicht (Logik- und Anwendungsserver) und Datenbankschicht (SAP HANA In-Memory-Datenbank).

**F:** Worin besteht der wesentliche technische Unterschied zwischen klassischen relationalen Datenbanken und SAP HANA?
**A:** Bei klassischen Datenbanken liegen die Daten auf Festplatten und müssen bei Abfragen blockweise geladen werden; SAP HANA hält alle relationalen Daten primär und spaltenorientiert im Arbeitsspeicher (RAM), wodurch Abfragen und Analysen in Echtzeit ausgeführt werden.

**F:** Erklären Sie den Unterschied zwischen Stammdaten und Bewegungsdaten an einem Beispiel aus dem Einkauf.
**A:** Der Lieferantenname, seine Bankverbindung und die Adresse sind Stammdaten (langfristig gültig); die konkrete Bestellung Nr. 4711 über 500 Festmeter Holz am 12.10. inklusive Lieferschein und Eingangsrechnung sind Bewegungsdaten.

**F:** Welche wesentlichen Prozessschritte umfasst der "Procure-to-Pay"-Zyklus?
**A:** Ermittlung des Materialbedarfs (Bedarfsanforderung), Lieferantenauswahl, Bestellerteilung, Wareneingang und Prüfung, Rechnungseingang und Rechnungsprüfung (Abgleich Bestellung/Lieferschein/Rechnung) sowie abschließende Zahlungsabwicklung.
