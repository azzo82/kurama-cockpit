---
id: dbs-01-grundlagen
kurs: dbs
nr: 1
titel: Kapitel 1 Grundlagen von Datenbanksystemen & DBMS
quellen: DBS-1_Grundlagen.pdf
seiten: 48
---

> **Kurz gesagt:** Warum genügen einfache Text- oder Tabellendateien in Großunternehmen nicht mehr? Diese Einführungsvorlesung stellt die Schwächen klassischer Dateisysteme (Redundanz, Inkonsistenz, Concurrency-Probleme) den Vorteilen moderner Datenbanksysteme (DBMS) gegenüber, erklärt die ANSI/SPARC 3-Ebenen-Architektur, Datenunabhängigkeit und die fundamentalen ACID-Eigenschaften von Transaktionen.

## 🎯 Lernziele
- Die Nachteile der dateibasierten Datenhaltung gegenüber Datenbankmanagementsystemen (DBMS) benennen (S. 3–15).
- Die ANSI/SPARC 3-Ebenen-Architektur (externe, konzeptionelle und interne Ebene) skizzieren (S. 18–26).
- Den Unterschied zwischen logischer und physischer Datenunabhängigkeit erklären (S. 27–32).
- Die vier ACID-Prinzipien (Atomicity, Consistency, Isolation, Durability) für Transaktionen definieren (S. 33–42).
- Die Aufgaben und Kernkomponenten eines DBMS verstehen (S. 43–48).

## 📖 Kerninhalte
### 1. Dateisysteme vs. Datenbanksysteme (S. 3–15)
Klassische Datei-Verarbeitung (z. B. jedes Programm speichert eigene CSV-/Binärdateien) führt zu gravierenden Problemen:
- **Redundanz:** Dieselben Daten werden mehrfach an verschiedenen Stellen gespeichert (z. B. Kundenadresse in Rechnungsstellung und Versand).
- **Inkonsistenz (Widersprüchlichkeit):** Wird eine Adresse an einer Stelle geändert, bleibt sie an anderer Stelle veraltet (Anomalien).
- **Abhängigkeit zwischen Anwendung und Daten:** Ändert sich das Dateiformat, müssen alle Anwendungsprogramme neu geschrieben/kompiliert werden.
- **Mangelnde Mehrbenutzerfähigkeit (Concurrency-Probleme):** Wenn zwei Benutzer gleichzeitig auf dieselbe Datei schreiben, kommt es zu Lost Updates.
- **Sicherheits- und Integritätslücken:** Keine zentralen Zugriffsrechte oder Konsistenzprüfungen.

**Lösung:** Das **Datenbanksystem (DBS)** besteht aus der **Datenbank (DB)** (der eigentlichen Datenbasis) und dem **Datenbankmanagementsystem (DBMS)** (der Software zur Verwaltung, Abfrage und Sicherung).

### 2. Die ANSI/SPARC 3-Ebenen-Architektur (S. 18–26)
Zur Entkopplung von Programmen und Speicherstrukturen teilt der ANSI/SPARC-Standard das DBMS in drei Abstraktionsebenen ein:
1. **Externe Ebene (Benutzersichten / Views):**
   - Wie sieht der einzelne Anwender oder die Applikation die Daten?
   - Individuelle, maßgeschneiderte Sichten (z. B. Personalabteilung sieht Gehalt, aber keine Passwörter; Webshop sieht Artikelpreise, aber keine internen Einkaufskosten).
2. **Konzeptionelle (logische) Ebene:**
   - *Was* wird insgesamt in der Datenbank gespeichert und wie hängen die Daten zusammen?
   - Gesamtsicht aller Entitäten, Attribute und Beziehungen (z. B. das vollständige relationale Schema aller Tabellen, Primär- und Fremdschlüssel). Unabhängig von Hardware oder Speichermedien.
3. **Interne (physische) Ebene:**
   - *Wie* werden die Daten technisch auf dem Datenträger abgelegt?
   - Dateiorganisation, Speicherblöcke, B-Bäume, Hashing, Kompression und Zugriffszeiten.

### 3. Datenunabhängigkeit (S. 27–32)
Eines der wichtigsten Qualitätsmerkmale von Datenbanksystemen:
- **Logische Datenunabhängigkeit:**
  - Die konzeptionelle Ebene kann geändert werden (z. B. Hinzufügen einer neuen Tabelle oder eines neuen Attributs), ohne dass bestehende externe Sichten oder Anwendungsprogramme angepasst werden müssen.
- **Physische Datenunabhängigkeit:**
  - Die interne Ebene kann optimiert werden (z. B. Umstellung auf SSDs, Neuanlage von Indizes, Umsortierung von Speicherblöcken), ohne dass das konzeptionelle Schema oder Anwendungsprogramme geändert werden müssen.

### 4. Transaktionen & das ACID-Prinzip (S. 33–42)
Eine **Transaktion** ist eine logische Einheit von Datenbankoperationen (Lesen, Schreiben, Ändern), die vollständig oder gar nicht ausgeführt werden muss. Sie garantiert den **ACID-Standard**:
- **A – Atomicity (Atomarität / Unteilbarkeit):**
  - "Alles oder Nichts": Entweder werden alle Operationen der Transaktion dauerhaft ausgeführt (`COMMIT`), oder bei einem Fehler wird der Ausgangszustand vollständig wiederhergestellt (`ROLLBACK`).
  - *Beispiel:* Banküberweisung (Abbuchung bei Konto A und Gutschrift bei Konto B; stürzt das System dazwischen ab, wird die Abbuchung zurückgerollt).
- **C – Consistency (Konsistenz / Erhaltung der Integrität):**
  - Eine Transaktion führt eine Datenbank von einem gültigen, konsistenten Zustand in einen neuen konsistenten Zustand über. Integritätsbedingungen (z. B. Primärschlüssel-Eindeutigkeit, Fremdschlüssel-Existenz, Saldo >= 0) dürfen zu keinem Zeitpunkt dauerhaft verletzt werden.
- **I – Isolation (Isolierung):**
  - Nebenläufige (gleichzeitige) Transaktionen beeinflussen sich nicht gegenseitig. Jede Transaktion verhält sich so, als liefe sie völlig allein auf dem System.
  - Verhindert Concurrency-Anomalien wie *Dirty Read*, *Non-Repeatable Read* und *Phantom Read*.
- **D – Durability (Dauerhaftigkeit / Persistenz):**
  - Sobald eine Transaktion erfolgreich bestätigt wurde (`COMMIT`), sind ihre Änderungen dauerhaft im System gesichert – selbst bei einem direkten Stromausfall oder Hardwareabsturz (Sicherstellung über Write-Ahead-Logging / WAL).

## 🧮 Beispiele & Rechenwege
- **Anomalie-Szenario: Lost Update (ohne Transaktionsisolierung):**
  - Anfangsbestand Artikel X: 10 Stück im Lager.
  - Transaktion T1 liest Bestand (10), möchte 2 Stück verkaufen (neuer Bestand 8).
  - Zeitgleich liest Transaktion T2 den Bestand (10), möchte 3 Stück verkaufen (neuer Bestand 7).
  - T1 schreibt 8 zurück (`COMMIT`).
  - T2 überschreibt den Wert mit 7 (`COMMIT`).
  - *Fehler:* Es wurden 5 Stück verkauft, der Datenbestand zeigt aber 7 statt 5! Das DBMS verhindert diesen Verlust durch Sperren (Locks / Two-Phase-Locking).

## ⚠️ Klausurfallen & typische Fehler
- **Datenbank vs. DBMS:** Eine Datenbank (DB) ist die passive Sammlung strukturierter Daten; das DBMS ist das aktive Software-System (z. B. PostgreSQL, Oracle, MySQL), das die Daten verwaltet.
- **Logische vs. physische Datenunabhängigkeit:**
  - *Physisch:* Index anlegen oder Festplatte tauschen beeinflusst die SQL-Abfrage nicht.
  - *Logisch:* Neue Spalten in Tabellen stören bestehende Abfragen auf Views nicht.
- **Atomarität ist nicht Isolation:** Atomarität garantiert das "Ganz-oder-Gar-Nicht" einer einzelnen Transaktion; Isolation schützt mehrere gleichzeitige Transaktionen voreinander.

## 🧠 Merkhilfen
- **ANSI/SPARC 3-Ebenen:** *Extern = Was der User sieht; Konzeptionell = Was die DB logisch enthält; Intern = Wie die Bits auf der Platte liegen.*
- **ACID-Akronym:** **A**tomar (unteilbar), **C**onsistent (integer), **I**soliert (ungestört), **D**auerhaft (stromausfallsicher).

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Datenbank (DB) | Strukturierter, anwendungsunabhängiger Datenbestand. |
| DBMS | Software zur Speicherung, Sicherung und Abfrage einer Datenbank. |
| ANSI/SPARC-Architektur | Standardisierte 3-Ebenen-Architektur (extern, konzeptionell, intern). |
| Physische Datenunabhängigkeit | Änderungen am Speichermedium erfordern keine Anpassung der Logik. |
| Logische Datenunabhängigkeit | Erweiterungen des Gesamtschemas berühren bestehende Sichten nicht. |
| Transaktion | Folge von SQL-Befehlen, die als unteilbare logische Einheit ausgeführt wird. |
| COMMIT / ROLLBACK | Dauerhaftes Bestätigen bzw. vollständiges Verwerfen einer Transaktion. |
| ACID | Die vier Schutzanforderungen an verlässliche Transaktionsverarbeitung. |

## ✅ Selbsttest
**F:** Welche gravierenden Nachteile entstehen bei der Datenhaltung über einfache Betriebssystem-Dateien im Vergleich zu einem DBMS?
**A:** Hohe Datenredundanz, Inkonsistenzen bei Updates, enge Abhängigkeit zwischen Anwendung und Datenstruktur, fehlende Mehrbenutzer-Synchronisation (Gefahr von Lost Updates) und mangelnde Sicherheits- und Integritätsprüfungen.

**F:** Welche drei Ebenen umfasst die ANSI/SPARC-Architektur?
**A:** Die externe Ebene (individuelle Benutzersichten), die konzeptionelle Ebene (gesamtes logisches Datenschema) und die interne Ebene (physische Speicherung auf Datenträgern).

**F:** Was versteht man unter physischer Datenunabhängigkeit?
**A:** Dass Änderungen an der internen Speicherorganisation (z. B. Hinzufügen von Indizes, Wechsel des Speicherformats oder Datenträgers) keine Änderungen am logischen Datenbankschema oder den Anwendungsprogrammen erfordern.

**F:** Wofür steht der Buchstabe 'A' im ACID-Prinzip und wie wird er in der Praxis garantiert?
**A:** Für Atomarität (Atomicity): Eine Transaktion wird entweder vollständig ausgeführt oder bei Abbruch/Fehler via Rollback komplett zurückgesetzt, sodass keine Halbzustände existieren.

**F:** Ein Kassensystem bucht 100 € von Konto A ab, stürzt ab, und bucht auf Konto B nichts ein. Welches ACID-Kriterium verhindert diesen Fehlerzustand?
**A:** Das Atomaritätskriterium (Atomicity) in Verbindung mit dem Konsistenzkriterium (Consistency): Das DBMS rollt die unvollständige Transaktion beim Neustart automatisch zurück.
