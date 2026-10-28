---
id: dbs-03-1-sql-grundlagen
kurs: dbs
nr: 3.1
titel: Kapitel 2.2 SQL Teil 1: DDL, DML, Abfragen & Aggregationen
quellen: DBS-2.2_SQL.pdf
seiten: 75
---

> **Kurz gesagt:** Structured Query Language (SQL) ist der weltweite Standard für relationale Datenbanken. Dieser erste Teil behandelt die Datendefinitionssprache (DDL mit `CREATE`, `ALTER`, `DROP` und Constraints wie `PRIMARY KEY`, `FOREIGN KEY`, `CHECK`), die Datenmanipulationssprache (DML mit `INSERT`, `UPDATE`, `DELETE`) sowie die Kernstruktur von `SELECT`-Abfragen mit Filterung und Aggregation (`GROUP BY`, `HAVING`).

## 🎯 Lernziele
- Tabellenschemata mit korrekten SQL-Datentypen und Integritätsbedingungen (Constraints) definieren (S. 8–24).
- Datensätze über DML-Befehle (`INSERT`, `UPDATE`, `DELETE`) konsistent verwalten (S. 25–38).
- Komplexe Filterbedingungen mit `WHERE`, `LIKE`, `IN`, `BETWEEN` und `IS NULL` formulieren (S. 39–55).
- Aggregatfunktionen (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) verstehen und mit `GROUP BY` anwenden (S. 56–68).
- Den entscheidenden Unterschied zwischen `WHERE` (Zeilenfilter vor Aggregation) und `HAVING` (Gruppenfilter nach Aggregation) fehlerfrei anwenden (S. 69–75).

## 📖 Kerninhalte
### 1. Data Definition Language (DDL) (S. 8–24)
Mit der DDL wird die Struktur (das Schema) der Datenbank erstellt und verändert.
- **Häufigste Datentypen:**
  - `VARCHAR2(n)` / `VARCHAR(n)`: Variable Zeichenkette bis Länge $n$.
  - `CHAR(n)`: Feste Zeichenkette (wird mit Leerzeichen aufgefüllt).
  - `NUMBER(p, s)` / `DECIMAL(p, s)`: Numerischer Wert mit Präzision $p$ und $s$ Nachkommastellen.
  - `INTEGER` / `INT`: Ganze Zahl.
  - `DATE` / `TIMESTAMP`: Datum und Uhrzeit.

- **Tabellenerstellung mit Constraints:**
```sql
CREATE TABLE abteilung (
    abtnr       INTEGER PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE,
    budget      DECIMAL(12, 2) CHECK (budget >= 0)
);

CREATE TABLE mitarbeiter (
    mnr         INTEGER,
    nachname    VARCHAR(50) NOT NULL,
    vorname     VARCHAR(50),
    gehalt      DECIMAL(10, 2) DEFAULT 3000.00,
    abtnr       INTEGER,
    CONSTRAINT pk_mitarbeiter PRIMARY KEY (mnr),
    CONSTRAINT fk_ma_abt FOREIGN KEY (abtnr) 
        REFERENCES abteilung (abtnr)
        ON DELETE SET NULL
);
```

- **Integritätsbedingungen (Constraints):**
  - `PRIMARY KEY`: Erzwingt Eindeutigkeit und schließt `NULL` aus (`UNIQUE + NOT NULL`).
  - `FOREIGN KEY REFERENCES`: Sichert die referentielle Integrität. Reaktionen bei Löschung des Elternsatzes:
    - `ON DELETE RESTRICT` / `NO ACTION`: Löschen verboten, solange Referenzen existieren (Standard).
    - `ON DELETE CASCADE`: Alle abhängigen Kinddatensätze werden automatisch mitgelöscht.
    - `ON DELETE SET NULL`: Fremdschlüsselspalte im Kinddatensatz wird auf `NULL` gesetzt.
  - `NOT NULL`: Wert darf nicht undefiniert (`NULL`) sein.
  - `UNIQUE`: Wert muss tabelleweit eindeutig sein (`NULL` ist meist erlaubt).
  - `CHECK (Bedingung)`: Benutzerdefinierte Werteprüfung (z. B. `gehalt > 0`).

- **Änderung & Löschen:**
```sql
ALTER TABLE mitarbeiter ADD email VARCHAR(100);
ALTER TABLE mitarbeiter DROP COLUMN vorname;
DROP TABLE mitarbeiter CASCADE CONSTRAINTS;
```

### 2. Data Manipulation Language (DML) (S. 25–38)
- **Einfügen von Datensätzen (`INSERT`):**
```sql
INSERT INTO abteilung (abtnr, name, budget)
VALUES (10, 'Forschung & Entwicklung', 500000.00);

-- Mehrere Zeilen auf einmal oder via SELECT
INSERT INTO mitarbeiter (mnr, nachname, abtnr)
VALUES (101, 'Müller', 10);
```

- **Ändern von Datensätzen (`UPDATE`):**
```sql
UPDATE mitarbeiter
SET gehalt = gehalt * 1.05
WHERE abtnr = 10;
-- Achtung: Ohne WHERE-Klausel werden ALLE Zeilen der Tabelle verändert!
```

- **Löschen von Datensätzen (`DELETE`):**
```sql
DELETE FROM mitarbeiter
WHERE gehalt < 2500.00;
-- Achtung: Ohne WHERE wird die gesamte Tabelle geleert!
```

### 3. Datenabfrage: Die Klauseln von `SELECT` (S. 39–55)
Die fundamentale Reihenfolge bei der Niederschrift einer SQL-Abfrage lautet:
1. `SELECT` [DISTINCT] (Spaltenauswahl)
2. `FROM` (Tabelle(n))
3. `WHERE` (Zeilenfilter)
4. `GROUP BY` (Gruppierungsattribute)
5. `HAVING` (Gruppenfilter)
6. `ORDER BY` (Sortierung `ASC` / `DESC`)

- **Spezielle Vergleichsoperatoren im `WHERE`:**
  - `BETWEEN a AND b`: Wertebereich (Grenzen $a$ und $b$ sind **inklusive**!).
  - `IN (wert1, wert2, ...)`: Prüfung auf Mitgliedschaft in einer Werteliste.
  - `IS NULL` bzw. `IS NOT NULL`: Prüfung auf Nullwerte (**Achtung:** `= NULL` ist immer falsch!).
  - `LIKE 'M%r'`: Textmuster-Vergleich:
    - `%` steht für null, ein oder beliebig viele Zeichen.
    - `_` (Unterstrich) steht für exakt ein beliebiges Zeichen (z. B. `'H_ber'` findet 'Huber' und 'Haber').

### 4. Aggregatfunktionen & Gruppierung (S. 56–75)
- **Aggregatfunktionen:** Rechnen über eine Menge von Zeilen und liefern einen einzigen Ergebniswert:
  - `COUNT(*)`: Zählt alle Zeilen (inklusive Nullzeilen).
  - `COUNT(spalte)`: Zählt nur Zeilen, bei denen `spalte` **nicht** `NULL` ist.
  - `COUNT(DISTINCT spalte)`: Zählt verschiedene Werte.
  - `SUM(spalte)`: Summiert Werte (ignoriert `NULL`).
  - `AVG(spalte)`: Bildet arithmetisches Mittel (ignoriert `NULL`).
  - `MIN(spalte)` / `MAX(spalte)`: Ermittelt Minimal-/Maximalwert.

- **Gruppierung (`GROUP BY`):**
  - Zerlegt die Ergebnismenge in disjunkte Gruppen.
  - **Syntax-Regel:** Jedes Attribut in der `SELECT`-Klausel, das nicht in einer Aggregatfunktion steht, **muss zwingend** in der `GROUP BY`-Klausel aufgeführt sein!

- **Filterung mit `HAVING` vs. `WHERE`:**
  - `WHERE` filtert einzelne Datensätze **bevor** gruppiert und aggregiert wird. Darf **keine** Aggregatfunktionen enthalten!
  - `HAVING` filtert bereits gebildete Gruppen **nach** der Aggregation. Enthält fast immer Aggregatfunktionen (z. B. `HAVING AVG(gehalt) > 5000`).

## 🧮 Beispiele & Rechenwege
### Praxisaufgabe: Abteilungsanalyse
Gegeben sei die Tabelle `mitarbeiter(mnr, name, gehalt, abtnr)`.
**Aufgabe:** "Ermittle für alle Abteilungen mit mehr als 3 Mitarbeitern die Abteilungsnummer, die Mitarbeiteranzahl und das Durchschnittsgehalt, jedoch nur für Mitarbeiter mit einem Gehalt über 3.000 €. Sortiere das Ergebnis absteigend nach dem Durchschnittsgehalt."

```sql
SELECT 
    abtnr,
    COUNT(*) AS anzahl_mitarbeiter,
    ROUND(AVG(gehalt), 2) AS schnitt_gehalt
FROM mitarbeiter
WHERE gehalt > 3000.00
GROUP BY abtnr
HAVING COUNT(*) > 3
ORDER BY schnitt_gehalt DESC;
```

**Logische Ausführungsreihenfolge der Datenbank:**
1. `FROM mitarbeiter`: Tabelle laden.
2. `WHERE gehalt > 3000.00`: Alle Zeilen mit Gehalt <= 3000 verwerfen.
3. `GROUP BY abtnr`: Verbliebene Mitarbeiter nach Abteilungen bündeln.
4. `HAVING COUNT(*) > 3`: Nur Abteilungen behalten, in denen mehr als 3 gutbezahlte Mitarbeiter verblieben sind.
5. `SELECT abtnr, COUNT(*), AVG(gehalt)`: Aggregatwerte berechnen und Spalten ausgeben.
6. `ORDER BY schnitt_gehalt DESC`: Ergebniszeilen sortieren.

## ⚠️ Klausurfallen & typische Fehler
- **Nullwert-Vergleich:** Niemals `WHERE spalte = NULL` schreiben! Das liefert in SQL immer `UNKNOWN` (wird als falsch interpretiert). Richtig ist ausschließlich: `WHERE spalte IS NULL`.
- **`WHERE` vs. `HAVING` Verwechslung:** Schreiben von `WHERE AVG(gehalt) > 4000` führt zu einem Syntaxfehler! Aggregatfilter gehören **immer** in die `HAVING`-Klausel.
- **Ungültige Spaltenauswahl bei `GROUP BY`:** Wer `SELECT name, abtnr, AVG(gehalt) FROM mitarbeiter GROUP BY abtnr;` schreibt, erzeugt einen Fehler, da `name` pro Abteilung nicht eindeutig ist und weder im `GROUP BY` steht noch aggregiert wird.
- **`COUNT(*)` vs. `COUNT(spalte)`:** `COUNT(*)` zählt alle Zeilen; `COUNT(bonus)` zählt nur diejenigen Zeilen, in denen `bonus` nicht `NULL` ist!

## 🧠 Merkhilfen
- **Klausel-Reihenfolge im SQL-Code:** **S**elect **F**rom **W**here **G**roup by **H**aving **O**rder by (*"So Findet Walter Ganz Hübsche Ostereier"*).
- **Logische Ausführung der Datenbank-Engine:** Erst Zeilen filtern (`WHERE`), dann Schachteln bilden (`GROUP BY`), dann Schachteln aussieben (`HAVING`), dann berechnen (`SELECT`), dann anordnen (`ORDER BY`).
- **NULL-Vergleich:** *Null ist kein Wert, sondern ein Zustand – deshalb fragen wir 'Ist es Null?' (`IS NULL`), nicht 'Gleicht es Null?'*.

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| DDL | Data Definition Language; Befehle zur Schemaverwaltung (`CREATE`, `ALTER`, `DROP`). |
| DML | Data Manipulation Language; Befehle zur Datenpflege (`INSERT`, `UPDATE`, `DELETE`). |
| Constraint | Integritätsregel zur Sicherung konsistenter Datenzustände (z. B. `CHECK`, `FK`). |
| Referentielle Integrität | Regel, dass Fremdschlüssel immer auf existierende Primärschlüssel verweisen müssen. |
| CASCADE | Folgeaktion: Kinddatensätze werden beim Löschen des Elternsatzes automatisch mitgelöscht. |
| Aggregatfunktion | Berechnet eine Kennzahl über mehrere Datensätze (`SUM`, `AVG`, `COUNT`, `MIN`, `MAX`). |
| GROUP BY | Fasst Datensätze mit gleichen Attributwerten zu Gruppen zusammen. |
| HAVING | Filtert Gruppen anhand von aggregierten Bedingungen. |

## ✅ Selbsttest
**F:** Welcher fundamentale Unterschied besteht zwischen den SQL-Klauseln `WHERE` und `HAVING`?
**A:** `WHERE` filtert einzelne Tupel vor der Gruppierung und darf keine Aggregatfunktionen enthalten; `HAVING` filtert bereits gebildete Gruppen nach der Aggregation anhand aggregierter Werte.

**F:** Warum führt die Abfrage `SELECT abtnr, MAX(gehalt), name FROM mitarbeiter GROUP BY abtnr;` zu einem SQL-Fehler?
**A:** Weil das Attribut `name` weder in der `GROUP BY`-Klausel aufgeführt ist noch über eine Aggregatfunktion zusammengefasst wurde; die Datenbank weiß nicht, welcher Name bei mehreren Mitarbeitern pro Abteilung ausgegeben werden soll.

**F:** Was bewirkt die Klausel `ON DELETE CASCADE` bei einer Fremdschlüssel-Definition?
**A:** Wird ein Datensatz in der übergeordneten Tabelle gelöscht, werden automatisch und kaskadierend alle Datensätze in der untergeordneten Tabelle mitgelöscht, die diesen Fremdschlüssel referenzieren.

**F:** Welches Ergebnis liefert `SELECT COUNT(*) FROM t;` im Vergleich zu `SELECT COUNT(spalte) FROM t;`, wenn in 3 von 10 Zeilen `spalte` den Wert `NULL` hat?
**A:** `COUNT(*)` liefert 10 (alle Datensätze der Tabelle); `COUNT(spalte)` liefert 7, da Nullwerte von spaltenbezogenen Aggregatfunktionen ignoriert werden.

**F:** Wie sucht man in SQL nach allen Kunden, deren Nachname mit einem 'S' beginnt, genau 5 Buchstaben lang ist und auf 'r' endet?
**A:** Mit dem Mustervergleich: `WHERE nachname LIKE 'S___r'`. (Das führende 'S', drei Unterstriche für die drei mittleren Zeichen und das abschließende 'r').
