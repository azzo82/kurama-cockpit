---
id: dbs-04-physisches-datenmodell
kurs: dbs
nr: 4
titel: Kapitel 3 Ableitung physischer Schemata, Vererbung & Indizes
quellen: DBS-3_Ableitung-physDM.pdf
seiten: 22
---

> **Kurz gesagt:** Vom logischen Entwurf zur performanten Datenbank: Wie werden Entity-Relationship-Konzepte in konkrete SQL-Tabellen, Primär-/Fremdschlüssel und Constraints übersetzt? Wie modelliert man Vererbung (Obertyp-/Untertyp-Strukturen) im relationalen Modell und wie optimiert man Abfragen gezielt durch Indizes (B-Bäume, Clustered vs. Non-Clustered)?

## 🎯 Lernziele
- Logische Schemata in physische SQL-Tabellenstrukturen überführen (S. 2–8).
- Geeignete Primärschlüssel und Fremdschlüssel inklusive referentieller Aktionen (`CASCADE`, `SET NULL`, `RESTRICT`) definieren (S. 7–12).
- Die drei Transformationsstrategien für Obertyp-/Untertyp-Konstrukte (Generalisierung/Spezialisierung) bewerten und anwenden (S. 16–17).
- Die Funktionsweise und den Nutzen von Indizes (B-Baum-Index, Clustered vs. Non-Clustered) für die Performance verstehen (S. 18–21).

## 📖 Kerninhalte
### 1. Tabellendefinition & Schlüsselwahl (S. 2–12)
- **Wahl des Primärschlüssels:**
  - Natürlicher Schlüssel (aus den Fachdaten vorhanden, z. B. ISBN) vs. künstlicher Surrogatschlüssel (z. B. fortlaufende ID / UUID).
  - Kriterien: Unveränderlichkeit (Immutability), Eindeutigkeit, Kürze (Performancevorteil bei Joins).
- **Fremdschlüssel & referentielle Aktionen (S. 9–12):**
  - Definiert, was passiert, wenn ein Datensatz in der übergeordneten Tabelle gelöscht oder geändert wird:
    - `ON DELETE RESTRICT` (Standard): Löschen wird verhindert, solange Kinddatensätze existieren.
    - `ON DELETE CASCADE`: Kinddatensätze werden automatisch mitgelöscht (sinnvoll bei existenzabhängigen Entitäten, z. B. Rechnungspositionen bei Löschung der Rechnung).
    - `ON DELETE SET NULL`: Der Fremdschlüssel im Kinddatensatz wird auf `NULL` gesetzt (nur erlaubt, wenn die Spalte nicht `NOT NULL` ist).

### 2. Abbildung von Vererbung (Obertyp-/Untertyp-Hierarchien) (S. 16–17)
Da relationale Datenbanken keine native Objektvererbung unterstützen, gibt es drei Entwurfsmuster zur Abbildung von Generalisierung/Spezialisierung:

1. **Option A: Eine Tabelle je Ober- und Untertyp (Klassische relationale Vererbung):**
   - Tabelle für Obertyp (z. B. `Person`) enthält alle gemeinsamen Attribute.
   - Separate Tabellen für jeden Untertyp (z. B. `Kunde`, `Mitarbeiter`) enthalten nur die spezifischen Attribute sowie den Primärschlüssel des Obertyps als Fremdschlüssel (1:1-Beziehung).
   - *Vorteile:* Normalisiert, keine Nullwerte, saubere Integritätsprüfungen.
   - *Nachteile:* Erfordert Joins bei Gesamtabfragen.
2. **Option B: Nur Tabellen für Untertypen (Horizontale Zerlegung):**
   - Keine Tabelle für den Obertyp; alle Attribute des Obertyps werden in jede Untertyp-Tabelle dupliziert.
   - *Vorteile:* Keine Joins für reine Untertypabfragen.
   - *Nachteile:* Identitätsverlust bei Typwechsel, schwierige Gesamtabfragen über alle Personen.
3. **Option C: Eine einzige Gesamttabelle für alle Typen (Single Table):**
   - Alle Attribute aller Untertypen landen in einer einzigen großen Tabelle, ergänzt um eine Spalte `Typ` (Diskriminator).
   - *Vorteile:* Extrem schnell bei polymorphen Abfragen (kein Join nötig).
   - *Nachteile:* Viele `NULL`-Werte in typfremden Spalten, Integritätsbedingungen (z. B. `NOT NULL`) können für untertypspezifische Attribute nicht auf Schemaebene erzwungen werden.

### 3. Datenbank-Performance & Indizes (S. 18–21)
Ein Index ist eine zusätzliche, redundante Datenstruktur, die das Auffinden von Datensätzen beschleunigt, ohne die gesamte Tabelle sequenziell durchsuchen zu müssen (Full Table Scan).

- **B-Baum-Index (Balanced Tree):**
  - Der Standard-Index in relationalen Systemen.
  - Balancierter Baum mit logarithmischer Suchzeit $O(\log n)$.
  - Unterstützt exakte Vergleiche (`=`) und Bereichsabfragen (`BETWEEN`, `<`, `>`).
- **Clustered Index vs. Non-Clustered (Sekundär-)Index:**
  - *Clustered Index:* Die physische Speicherung der Datenzeilen auf der Festplatte folgt der Reihenfolge des Index. Pro Tabelle kann es **genau einen** Clustered Index geben (meist automatisch auf dem Primärschlüssel).
  - *Non-Clustered Index:* Ein separater Zeigerbaum; Blätter enthalten den Indexschlüssel und einen Zeiger auf den eigentlichen Speicherort der Datenzeile (Row-ID).
- **Wann hilft ein Index?**
  - Bei Spalten, die häufig in `WHERE`-Bedingungen, `JOIN`-Bedingungen oder `ORDER BY` genutzt werden.
  - Bei hoher Selektivität (viele unterschiedliche Werte, z. B. Kundennummer statt Geschlecht).
- **Die Kosten von Indizes:**
  - Jeder Index verbraucht Speicherplatz.
  - Jeder Schreibzugriff (`INSERT`, `UPDATE`, `DELETE`) wird verlangsamt, da alle zugehörigen Indizes synchron aktualisiert werden müssen!

## 🧮 Beispiele & Rechenwege
### DDL-Muster zur Vererbungsabbildung (Option A):
```sql
-- Gemeinsame Obertyp-Tabelle
CREATE TABLE person (
    person_id   INTEGER PRIMARY KEY,
    nachname    VARCHAR(50) NOT NULL,
    vorname     VARCHAR(50) NOT NULL,
    geburtsdatum DATE
);

-- Untertyp 1: Kunde
CREATE TABLE kunde (
    person_id   INTEGER PRIMARY KEY,
    kreditlimit DECIMAL(10, 2) DEFAULT 1000.00,
    CONSTRAINT fk_kunde_person FOREIGN KEY (person_id)
        REFERENCES person (person_id) ON DELETE CASCADE
);

-- Untertyp 2: Mitarbeiter
CREATE TABLE mitarbeiter (
    person_id   INTEGER PRIMARY KEY,
    gehalt      DECIMAL(10, 2) NOT NULL,
    einstellungsdatum DATE NOT NULL,
    CONSTRAINT fk_ma_person FOREIGN KEY (person_id)
        REFERENCES person (person_id) ON DELETE CASCADE
);
```

## ⚠️ Klausurfallen & typische Fehler
- **Zu viele Indizes:** Ein Index beschleunigt Leseoperationen, verlangsamt aber Schreiboperationen (`INSERT`/`UPDATE`) massiv! In Schreib-intensiven Tabellen sparsam indexieren.
- **Index auf Spalten mit geringer Selektivität:** Ein Index auf einer Spalte `geschlecht` ('M'/'W'/'D') ist nutzlos, da die Datenbank bei 50 % Trefferquote ohnehin schneller über einen Full Table Scan operiert.
- **Zusammengesetzte Indizes & Reihenfolge:** Bei einem Index auf `(nachname, vorname)` greift der Index bei einer Suche nach `nachname`, aber **nicht**, wenn nur nach `vorname` gefiltert wird (Left-Prefix-Regel).

## 🧠 Merkhilfen
- **Vererbung:**
  - *Option A:* Jede Klasse hat ihre Tabelle (sauber, Joins).
  - *Option C:* Alles in einen Topf (schnell, viele NULLs).
- **Index-Faustregel:** *Lesen beschleunigen, Schreiben bezahlen.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Physisches Schema | Konkrete Implementierung des logischen Datenmodells im DBMS. |
| Surrogatschlüssel | Künstlich generierter, fachlich bedeutungsloser Primärschlüssel (z. B. ID). |
| ON DELETE CASCADE | Kaskadierendes Mitlöschen von Kinddatensätzen. |
| B-Baum-Index | Standard-Baumstruktur für schnelle Bereichs- und Gleichheitssuchen ($O(\log n)$). |
| Clustered Index | Bestimmt die tatsächliche physische Reihenfolge der Daten auf der Platte (max. 1 pro Tabelle). |
| Full Table Scan | Sequenzielles Durchlesen der gesamten Tabelle von Anfang bis Ende. |

## ✅ Selbsttest
**F:** Welche drei Strategien existieren zur relationalen Abbildung von Generalisierungs- und Spezialisierungshierarchien?
**A:** 1. Eine Tabelle für den Obertyp und je eine Tabelle für jeden Untertyp (mit 1:1 Fremdschlüssel), 2. Ausschließlich Tabellen für die Untertypen (Obertypattribute werden dupliziert), 3. Eine einzige Gesamttabelle für alle Typen mit Typdiskriminatorspalte und NULL-Werten.

**F:** Was ist der fundamentale Unterschied zwischen einem Clustered Index und einem Non-Clustered Index?
**A:** Ein Clustered Index legt die tatsächliche physische Speicherreihenfolge der Datenzeilen auf dem Datenträger fest (daher max. 1 pro Tabelle); ein Non-Clustered Index ist eine separate Hilfsstruktur, deren Blattknoten Zeiger auf die eigentlichen Datensätze enthalten.

**F:** Warum verlangsamen Indizes Schreiboperationen (`INSERT`, `UPDATE`, `DELETE`)?
**A:** Weil bei jeder Änderung an indexierten Spalten nicht nur die Datentabelle selbst, sondern auch alle zugehörigen B-Baum-Indexstrukturen im Speicher und auf der Festplatte synchron angepasst und balanciert werden müssen.

**F:** Wann entscheidet sich der Query Optimizer eines DBMS trotz vorhandenem Index für einen Full Table Scan?
**A:** Wenn eine Abfrage einen großen Prozentsatz der gesamten Tabelle zurückliefert (geringe Selektivität, z. B. Suche nach Werten, die in 30–50 % aller Zeilen vorkommen), da das zeilenweise Nachschlagen über Indexzeiger ineffizienter wäre als das sequentielle Blocklesen.

**F:** Was geschieht, wenn ein Fremdschlüssel mit `ON DELETE SET NULL` definiert ist und der entsprechende Primärschlüssel in der Elterntabelle gelöscht wird?
**A:** Die abhängigen Kinddatensätze bleiben erhalten, jedoch wird ihr Fremdschlüsselattribut automatisch auf den Wert `NULL` gesetzt.
