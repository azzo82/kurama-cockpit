---
id: dbs-03-2-sql-advanced
kurs: dbs
nr: 3.2
titel: Kapitel 2.2 SQL Teil 2: Joins, Subqueries, Views & Klausur-Kurzreferenz
quellen: DBS-2.2_SQL.pdf + SQL-Kurzreferenz.pdf
seiten: 72
---

> **Kurz gesagt:** Der fortgeschrittene Teil von SQL: Wie verknüpft man mehrere Tabellen über Joins (Inner, Outer, Self-Join)? Wie baut man mächtige verschachtelte Abfragen (Subqueries mit `IN`, `EXISTS`, skalare und korrelierte Unterabfragen)? Dieser Leitfaden behandelt außerdem Mengenoperatoren (`UNION`, `INTERSECT`, `EXCEPT`), Sichten (`CREATE VIEW`), Transaktionssteuerung und enthält die **offizielle THA-Klausur-Kurzreferenz** von Prof. Kolonko in EBNF.

## 🎯 Lernziele
- Alle Join-Typen (`INNER JOIN`, `LEFT/RIGHT/FULL OUTER JOIN`, `CROSS JOIN`, Self-Join) fehlerfrei formulieren und ihre Ergebnismengen analysieren (S. 76–105).
- Unterabfragen (Subqueries: skalar, mehrzeilig, korreliert) sicher konstruieren (S. 106–125).
- Existenzprüfungen mit `EXISTS` und `NOT EXISTS` anwenden (S. 120–125).
- Mengenoperatoren (`UNION`, `INTERSECT`, `EXCEPT`) anwenden (S. 126–133).
- Sichten (Views) zur Datenkapselung und Berechtigungssteuerung definieren (S. 134–140).
- Transaktionen mit `COMMIT` und `ROLLBACK` steuern (S. 141–146).

## 📖 Kerninhalte
### 1. Tabellenverknüpfungen (Joins) (S. 76–105)
Joins kombinieren Datensätze aus zwei oder mehr Tabellen basierend auf einer logischen Verknüpfungsbedingung (`ON`-Klausel).

- **INNER JOIN:**
  - Standard-Join. Liefert nur diejenigen Zeilen zurück, bei denen die Verknüpfungsbedingung in **beiden** Tabellen erfüllt ist (Schnittmenge der Partner).
```sql
SELECT m.nachname, a.name AS abteilung
FROM mitarbeiter m
INNER JOIN abteilung a ON m.abtnr = a.abtnr;
```

- **LEFT (OUTER) JOIN:**
  - Behält **alle Zeilen der linken Tabelle** bei. Findet sich in der rechten Tabelle kein passender Partner, werden die rechten Spalten mit `NULL` aufgefüllt.
  - *Praxis-Einsatz:* Finden von Datensätzen ohne Zuordnung (z. B. Kunden ohne Bestellungen, Abteilungen ohne Mitarbeiter).
```sql
-- Finde alle Abteilungen, auch solche, die aktuell keine Mitarbeiter haben:
SELECT a.name, m.nachname
FROM abteilung a
LEFT JOIN mitarbeiter m ON a.abtnr = m.abtnr;
```

- **RIGHT (OUTER) JOIN:**
  - Symmetrisch zum Left Join: Behält alle Zeilen der rechten Tabelle bei.

- **FULL (OUTER) JOIN:**
  - Behält alle Zeilen aus **beiden** Tabellen bei. Fehlende Partner auf jeder Seite werden mit `NULL` gefüllt.

- **CROSS JOIN (Kartesisches Produkt):**
  - Kombiniert jedes Tupel der linken Tabelle mit jedem Tupel der rechten Tabelle (ohne `ON`-Bedingung).

- **Self-Join (Selbstverbund):**
  - Eine Tabelle wird mit sich selbst verknüpft (erfordert zwei unterschiedliche Tabellen-Aliase!).
  - *Typisches Klausurbeispiel: Mitarbeiter und sein Vorgesetzter in derselben Tabelle.*
```sql
SELECT 
    m.nachname AS mitarbeiter,
    v.nachname AS vorgesetzter
FROM mitarbeiter m
LEFT JOIN mitarbeiter v ON m.vorgesetzter_mnr = v.mnr;
```

### 2. Unterabfragen (Subqueries) (S. 106–125)
Eine `SELECT`-Abfrage, die innerhalb einer anderen SQL-Anweisung geschachtelt ist.

1. **Skalare Subquery:**
   - Liefert genau **einen Wert** (eine Zeile, eine Spalte) zurück. Kann überall dort stehen, wo ein konstanter Wert erlaubt ist.
```sql
-- Alle Mitarbeiter, die mehr als das Durchschnittsgehalt verdienen:
SELECT nachname, gehalt
FROM mitarbeiter
WHERE gehalt > (SELECT AVG(gehalt) FROM mitarbeiter);
```

2. **Mehrzeilige Subquery (Mengenvergleich):**
   - Liefert eine einspaltige Liste von Werten.
   - Operatoren: `IN`, `NOT IN`, `> ANY` (größer als mindestens einer), `> ALL` (größer als alle).
```sql
-- Mitarbeiter, die in Abteilungen mit Sitz in Augsburg arbeiten:
SELECT nachname
FROM mitarbeiter
WHERE abtnr IN (SELECT abtnr FROM abteilung WHERE standort = 'Augsburg');
```

3. **Korrelierte Subquery & `EXISTS` (S. 120–125):**
   - Die innere Abfrage greift auf Werte der äußeren Abfrage zu und wird für jede Zeile der äußeren Abfrage neu ausgewertet!
   - `EXISTS (SELECT ...)`: Prüft, ob die Unterabfrage mindestens eine Zeile liefert (wahr/falsch). Extrem performant, da die Datenbank nach dem ersten Treffer stoppt.
```sql
-- Finde alle Abteilungen, in denen mindestens ein Mitarbeiter über 8.000 € verdient:
SELECT a.name
FROM abteilung a
WHERE EXISTS (
    SELECT 1 
    FROM mitarbeiter m 
    WHERE m.abtnr = a.abtnr AND m.gehalt > 8000.00
);
```

### 3. Mengenoperationen (Set Operators) (S. 126–133)
Kombinieren die Zeilen zweier `SELECT`-Abfragen (erfordert identische Spaltenanzahl und kompatible Datentypen):
- `UNION`: Vereinigung beider Mengen mit **automatischer Duplikatentfernung**.
- `UNION ALL`: Vereinigung beider Mengen **inklusive Duplikaten** (schneller, da kein Sortier-/Deduplizierungsaufwand!).
- `INTERSECT`: Liefert nur Zeilen, die in beiden Abfragen vorkommen (Schnittmenge).
- `EXCEPT` (in Oracle: `MINUS`): Liefert Zeilen der ersten Abfrage, die nicht in der zweiten Abfrage vorkommen.

### 4. Sichten (Views) & Transaktionen (S. 134–146)
- **Views (Gespeicherte Abfragen):**
```sql
CREATE VIEW v_augsburger_mitarbeiter AS
SELECT m.mnr, m.nachname, a.name AS abteilung
FROM mitarbeiter m
JOIN abteilung a ON m.abtnr = a.abtnr
WHERE a.standort = 'Augsburg';

-- Verwendung wie eine normale Tabelle:
SELECT * FROM v_augsburger_mitarbeiter WHERE nachname LIKE 'A%';
```
- **Vorteile von Views:** Vereinfachung komplexer Queries, Schutz sensibler Daten (externe Ebene), logische Datenunabhängigkeit.
- **Transaktionssteuerung:**
  - `COMMIT;`: Schreibt alle bisherigen Änderungen der Transaktion dauerhaft auf Platte.
  - `ROLLBACK;`: Verwirft alle Änderungen seit dem letzten `COMMIT` und stellt den Ursprungszustand wieder her.

### 5. Die offizielle THA SQL-Kurzreferenz (EBNF nach Prof. Kolonko)
```
SELECT [ALL | DISTINCT] ( * | ( <expr> [<e_alias>] { , <expr> [<e_alias>] } ) )
FROM <table> [<t_alias>]
[ [INNER | LEFT | RIGHT | FULL] JOIN <table> [<t_alias>] ON <condition> ]
[WHERE <condition>]
[GROUP BY <expr> { , <expr> } [HAVING <group_condition>] ]
[ORDER BY <expr> [ASC | DESC] { , <expr> [ASC | DESC] } ]
{ ( UNION [ALL] | INTERSECT | EXCEPT ) <select_stmt> } ;

INSERT INTO <table> [ '(' <column> { , <column> } ')' ]
( VALUES '(' <expr> { , <expr> } ')' { , '(' <expr> { , <expr> } ')' } | <select_stmt> ) ;

UPDATE <table>
SET <column> = ( <expr> | '(' <select_stmt> ')' )
{ , <column> = ( <expr> | '(' <select_stmt> ')' ) }
[WHERE <condition>] ;

DELETE FROM <table> [WHERE <condition>] ;

CREATE TABLE <table> '('
  <column_def> { , <column_def> }
  [ , <table_constraint> { , <table_constraint> } ]
')' ;

column_def ::= <col_name> <datatype> [<default_expr>] [ [NOT] NULL ]
table_constraint ::= CONSTRAINT <const_name> ( PRIMARY KEY (<col>...) | UNIQUE (<col>...) | FOREIGN KEY (<col>...) REFERENCES <table> (<col>...) [ON DELETE (CASCADE | SET NULL)] | CHECK (<condition>) )

ALTER TABLE <tableName>
  RENAME TO <new_tableName>
| ADD ( <column_def> | <table_constraint> )
| DROP ( COLUMN <columnName> | CONSTRAINT <constraintName> )
| ALTER COLUMN <columnName> ( TYPE <datatype> | SET [NOT] NULL )
| RENAME COLUMN <columnName> TO <newColumnName> ;

DROP TABLE <table> [CASCADE] ;
```

## 🧮 Beispiele & Rechenwege
### Klausurtypische Abfrage: Das Antijoin-Muster (Finde Datensätze ohne Partner)
**Aufgabe:** "Ermittle alle Kunden (Kundennummer und Name), die noch nie eine Bestellung aufgegeben haben."

**Lösungsmöglichkeit 1: Mit LEFT JOIN und NULL-Prüfung:**
```sql
SELECT k.kunden_nr, k.name
FROM kunde k
LEFT JOIN bestellung b ON k.kunden_nr = b.kunden_nr
WHERE b.bestell_nr IS NULL;
```

**Lösungsmöglichkeit 2: Mit NOT EXISTS (Empfohlen):**
```sql
SELECT k.kunden_nr, k.name
FROM kunde k
WHERE NOT EXISTS (
    SELECT 1 
    FROM bestellung b 
    WHERE b.kunden_nr = k.kunden_nr
);
```

**Lösungsmöglichkeit 3: Mit NOT IN (Achtung bei NULL!):**
```sql
SELECT k.kunden_nr, k.name
FROM kunde k
WHERE k.kunden_nr NOT IN (
    SELECT kunden_nr 
    FROM bestellung 
    WHERE kunden_nr IS NOT NULL
);
```

## ⚠️ Klausurfallen & typische Fehler
- **Die `NOT IN` Falle mit NULL:** Enthält das Ergebnis der Subquery auch nur ein einziges `NULL`, liefert `NOT IN` **immer eine leere Ergebnismenge**, da `x != NULL` zu `UNKNOWN` evaluiert! Lösung: `NOT EXISTS` verwenden oder in der Unterabfrage `WHERE spalte IS NOT NULL` ergänzen.
- **`UNION` vs. `UNION ALL`:** `UNION` führt im Hintergrund einen teuren Sortier- und Deduplizierungsschritt durch. Wenn bekannt ist, dass keine Duplikate existieren oder Duplikate erwünscht sind, immer `UNION ALL` verwenden.
- **Filter im `ON` vs. `WHERE` beim LEFT JOIN:**
  - Eine Bedingung in der `ON`-Klausel (`ON k.id = b.kid AND b.jahr = 2026`) filtert nur, welche Datensätze gejoint werden (Kunden ohne 2026er-Bestellung bleiben mit NULL erhalten!).
  - Steht dieselbe Bedingung im `WHERE` (`WHERE b.jahr = 2026`), verwandelt sie den LEFT JOIN faktisch in einen INNER JOIN, da die Zeilen mit NULL herausgefiltert werden!

## 🧠 Merkhilfen
- **Join-Visualisierung:**
  - `INNER JOIN`: *Nur Treffer auf beiden Seiten.*
  - `LEFT JOIN`: *Die linke Tabelle ist heilig (alle Zeilen bleiben).*
  - `FULL JOIN`: *Niemand wird zurückgelassen (beide Seiten komplett).*
- **Subqueries:**
  - Skalar: *Genau ein Wert (1 Zeile, 1 Spalte).*
  - `EXISTS`: *Stoppt beim ersten Treffer – ideal für 'Gibt es mindestens einen...'.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Inner Join | Verknüpfung zweier Tabellen; behält nur Zeilen mit Übereinstimmung. |
| Left Outer Join | Behält alle Zeilen der linken Tabelle; füllt fehlende rechte Spalten mit NULL. |
| Self-Join | Verknüpfung einer Tabelle mit sich selbst über zwei Aliase. |
| Korrelierte Subquery | Unterabfrage, die für jede Zeile der äußeren Abfrage mit deren Werten ausgeführt wird. |
| EXISTS | Prüft effizient auf die Existenz mindestens einer Ergebniszeile in einer Unterabfrage. |
| UNION | Mengenvereinigung zweier SELECT-Ergebnisse unter Entfernung von Duplikaten. |
| View (Sicht) | Gespeicherte, benannte SELECT-Abfrage, die wie eine virtuelle Tabelle genutzt wird. |

## ✅ Selbsttest
**F:** Wie findet man mit Hilfe eines `LEFT JOIN` alle Datensätze einer Elterntabelle, die keine Kinddatensätze besitzen?
**A:** Man joint die Elterntabelle via `LEFT JOIN` an die Kindtabelle und prüft in der `WHERE`-Klausel den Primärschlüssel der Kindtabelle auf `IS NULL` (z. B. `WHERE kind.id IS NULL`).

**F:** Warum ist die Abfrage `WHERE spalte NOT IN (SELECT ...)` gefährlich, wenn die Unterabfrage einen `NULL`-Wert zurückgibt?
**A:** Weil der Vergleich mit `NULL` in SQL drei-wertige Logik (`UNKNOWN`) erzeugt; bei `NOT IN` führt ein einziger `NULL`-Wert dazu, dass die gesamte Bedingung für alle Zeilen fehlschlägt und das Ergebnis leer bleibt.

**F:** Was unterscheidet `UNION` von `UNION ALL` bezüglich Duplikaten und Rechenaufwand?
**A:** `UNION` eliminiert Duplikate durch einen internen Sortiervorgang (höherer Rechenaufwand); `UNION ALL` fügt alle Zeilen ungeprüft zusammen, behält Duplikate und ist deutlich schneller.

**F:** Wozu dient das Schlüsselwort `EXISTS` in Verbindung mit Unterabfragen?
**A:** Es prüft, ob die Unterabfrage mindestens eine Zeile zurückgibt; sobald die Datenbank eine passende Zeile findet, bricht sie die Auswertung erfolgreich ab (Boolean true).

**F:** Was geschieht bei einem `ROLLBACK` in einer Transaktion?
**A:** Alle seit dem Start der Transaktion (oder dem letzten `COMMIT`/`SAVEPOINT`) durch DML-Befehle vorgenommenen Datenänderungen werden vollständig rückgängig gemacht.
