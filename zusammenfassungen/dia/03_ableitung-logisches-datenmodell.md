---
id: dia-03-ableitung-logisches-modell
kurs: dia
nr: 3
titel: Kapitel 3 Ableitung des logischen relationalen Datenmodells (Transformationsregeln)
quellen: DIA-3_Ableitung-logDM.pdf
seiten: 122
---

> **Kurz gesagt:** Wie wird aus einem konzeptionellen ER-Diagramm ein fehlerfreies relationales Tabellenschema? Dieses Skript erklärt die 7 formalen Transformationsregeln: Wo wird der Fremdschlüssel bei 1:1 platziert? Warum wandert der Fremdschlüssel bei 1:N zwingend zur N-Seite? Wie werden N:M-Beziehungen, mehrwertige Attribute, mehrstellige Beziehungen und Rollen in Relationen übersetzt?

## 🎯 Lernziele
- Die formalen Abbildungsregeln vom ER-Modell zum relationalen Modell anwenden (S. 3–25).
- Fremdschlüssel bei 1:1-Beziehungen anhand von Totalitätsbedingungen (Nullwert-Vermeidung) optimal platzieren (S. 26–42).
- Die 1:N-Regel ("Fremdschlüssel auf die N-Seite") begründen und umsetzen (S. 43–60).
- N:M-Beziehungen und Beziehungsattribute über Verknüpfungsrelationen auflösen (S. 61–85).
- Mehrwertige Attribute und mehrstellige Beziehungen in Relationen transformieren (S. 86–122).

## 📖 Kerninhalte
### 1. Das Transformationskonzept (S. 3–25)
Die Ableitung überführt konzeptionelle Entitäten, Attribute und Beziehungsstrukturen in Relationen (Tabellen). Jede Relation erhält einen Primärschlüssel, atomare Attribute und Fremdschlüssel zur Abbildung der Beziehungssemantik.

### 2. Die 7 zentralen Transformationsregeln
#### Regel 1: Reguläre (starke) Entitätstypen (S. 12–20)
- Jeder reguläre Entitätstyp $E$ wird zu einer eigenständigen Relation $R$.
- Alle einfachen, einwertigen Attribute von $E$ werden zu Spalten von $R$.
- Der Primärschlüssel von $E$ wird zum Primärschlüssel von $R$.

#### Regel 2: Schwache Entitätstypen (S. 21–25)
- Ein schwacher Entitätstyp $W$ wird zu einer eigenen Relation $R_W$.
- Der Primärschlüssel von $R_W$ setzt sich zusammen aus:
  1. Dem Primärschlüssel der übergeordneten identifizierenden Entität (als Fremdschlüssel).
  2. Dem Teilschlüssel (Diskriminator) von $W$.

#### Regel 3: Binäre 1:1-Beziehungen (S. 26–42)
Es gibt zwei beteiligte Relationen $R_1$ und $R_2$. Wo wird der Fremdschlüssel platziert?
- **Fall A (Einseitige totale Teilnahme `(1, 1)` vs. `(0, 1)`):**
  - Der Primärschlüssel der optionalen Seite wandert als Fremdschlüssel in die Relation der **totalen (verpflichtenden) Seite**!
  - *Grund:* Dadurch wird garantiert, dass die Fremdschlüsselspalte niemals `NULL` enthält (Nullwert-Vermeidung).
  - Die Fremdschlüsselspalte muss mit einem `UNIQUE`-Constraint versehen werden.
- **Fall B (Beidseitig totale Teilnahme `(1, 1)` auf beiden Seiten):**
  - Beide Relationen können zu einer einzigen gemeinsamen Tabelle zusammengefasst werden.
- **Fall C (Beidseitig optionale Teilnahme `(0, 1)` auf beiden Seiten):**
  - Entweder Fremdschlüssel in eine der beiden Tabellen (erzeugt unvermeidbare `NULL`-Werte), oder Auslagerung in eine eigene Beziehungs-Zwischentabelle.

#### Regel 4: Binäre 1:N-Beziehungen (S. 43–60)
- **Die goldene Regel:** Der Primärschlüssel der **1-Seite** wird als **Fremdschlüssel in die Relation der N-Seite** aufgenommen!
  - *Beispiel:* Abteilung (1) hat viele Mitarbeiter (N) → `Mitarbeiter` erhält das Attribut `AbtNr` als Fremdschlüssel.
- *Begründung:* Würde man den Fremdschlüssel auf die 1-Seite setzen, müsste man dort eine Liste von Mitarbeiternummern in ein Feld schreiben – das würde die 1. Normalform (Atomarität) verletzen!
- Beziehungsattribute der 1:N-Beziehung wandern ebenfalls in die Relation der N-Seite.

#### Regel 5: Binäre N:M-Beziehungen (S. 61–85)
- Eine N:M-Beziehung erfordert zwingend eine **eigene neue Relation (Verknüpfungstabelle / Assoziationstabelle)** $R_{NM}$.
- Der Primärschlüssel von $R_{NM}$ ist ein **zusammengesetzter Primärschlüssel**, bestehend aus den Primärschlüsseln beider beteiligter Relationen: `PK = (PK_1, PK_2)`.
- Beide Attribute sind zugleich Fremdschlüssel auf die Ursprungstabellen.
- Alle Attribute der Beziehung (z. B. Note bei Student-prüft-Fach) werden als Spalten in $R_{NM}$ aufgenommen.

#### Regel 6: Mehrwertige Attribute (S. 86–100)
- Kann ein Attribut mehrere Werte besitzen (z. B. eine Person hat mehrere Telefonnummern oder mehrere Hobbys), darf es nicht als Kommaliste in der Haupttabelle stehen (Verletzung der 1NF).
- **Lösung:** Es wird eine eigene Relation erstellt, bestehend aus dem Primärschlüssel der Entität und dem Attributwert:
  `Person_Telefon(Person_ID, Telefonnummer)`. Primärschlüssel ist die Kombination aus beiden Attributen!

#### Regel 7: N-äre (mehrstellige) Beziehungen (S. 101–122)
- Beziehungen zwischen drei oder mehr Entitäten (z. B. `Lieferant` liefert `Teil` an `Projekt`) werden zu einer eigenen Relation.
- Diese Verknüpfungstabelle enthält die Primärschlüssel aller beteiligten Entitäten als Fremdschlüssel sowie eventuelle Beziehungsattribute (z. B. `Menge`, `Lieferdatum`).

## 🧮 Beispiele & Rechenwege
### Vollständiges Transformationsbeispiel: Universitätsverwaltung
Gegeben sei folgendes ER-Modell:
- `Professor` (PersNr [PK], Name, Rang)
- `Vorlesung` (VorlNr [PK], Titel, SWS)
- `Student` (MatrNr [PK], Name, Semester)
- Beziehung `liest`: Professor liest Vorlesung (1:N, Professor kann 0..* Vorlesungen lesen, Vorlesung muss von genau 1 Professor gelesen werden).
- Beziehung `hört`: Student hört Vorlesung (N:M, mit Beziehungsattribut `Prüfungsnote`).
- Mehrwertiges Attribut `Fachgebiet` an `Professor`.

**Abgeleitetes Relationales Schema:**
```
Professor(PersNr, Name, Rang)
  PK: PersNr

Professor_Fachgebiet(PersNr, Fachgebiet)
  PK: (PersNr, Fachgebiet)
  FK: PersNr REFERENCES Professor(PersNr) ON DELETE CASCADE

Vorlesung(VorlNr, Titel, SWS, gelesen_von)
  PK: VorlNr
  FK: gelesen_von REFERENCES Professor(PersNr) [1:N Regel!]

Student(MatrNr, Name, Semester)
  PK: MatrNr

hoert(MatrNr, VorlNr, Pruefungsnote)
  PK: (MatrNr, VorlNr) [N:M Regel!]
  FK1: MatrNr REFERENCES Student(MatrNr) ON DELETE CASCADE
  FK2: VorlNr REFERENCES Vorlesung(VorlNr) ON DELETE CASCADE
```

## ⚠️ Klausurfallen & typische Fehler
- **Falsche Fremdschlüsselrichtung bei 1:N:** Niemals den Fremdschlüssel auf die 1-Seite packen! Der Fremdschlüssel steht **immer auf der N-Seite** (beim "Kind").
- **Schlüssel bei N:M-Zwischentabellen:** Der Primärschlüssel der Zwischentabelle muss **zusammengesetzt** aus beiden Fremdschlüsseln sein. Wer nur einen der beiden als PK definiert, erlaubt jedem Studenten nur genau eine Vorlesung!
- **1:1 Fremdschlüssel-Platzierung:** Setze den Fremdschlüssel immer in die Tabelle mit der **totale Teilnahme `(1, 1)`**, sonst entstehen vermeidbare `NULL`-Werte in der Datenbank.

## 🧠 Merkhilfen
- **1:N-Merksatz:** *Der Schlüssel der EINS wandert ins Kind (N).*
- **N:M-Merksatz:** *Aus zwei mach drei (eigene Zwischentabelle).*
- **Mehrwertiges Attribut:** *Mehrere Werte = eigene Tabelle.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Logisches Schema | Technologieunabhängiges relationales Tabellenschema. |
| Fremdschlüssel | Attribut, das als Primärschlüssel in einer anderen Tabelle dient. |
| Verknüpfungstabelle | Eigene Relation zur Auflösung von N:M- oder n-ären Beziehungen. |
| Zusammengesetzter Primärschlüssel | Primärschlüssel, der aus mindestens zwei Attributen besteht. |
| Totale Teilnahme | Jede Entität muss an mindestens einer Beziehungsinstanz teilnehmen (`min >= 1`). |

## ✅ Selbsttest
**F:** Wohin wandert der Fremdschlüssel bei der Transformation einer binären 1:N-Beziehung und warum?
**A:** Der Primärschlüssel der 1-Seite wandert als Fremdschlüssel in die Relation der N-Seite. Würde man ihn auf der 1-Seite eintragen, müsste man dort mehrere Werte in ein Feld schreiben, was die 1. Normalform (Atomarität) verletzen würde.

**F:** Wie wird eine binäre N:M-Beziehung im relationalen Datenmodell realisiert?
**A:** Durch Erstellung einer eigenständigen Verknüpfungsrelation (Zwischentabelle), deren Primärschlüssel aus der Kombination der Primärschlüssel beider beteiligter Entitäten gebildet wird und die eventuelle Beziehungsattribute aufnimmt.

**F:** Wie wird ein mehrwertiges Attribut (z. B. mehrere E-Mail-Adressen einer Person) relational abgebildet?
**A:** Durch Auslagerung in eine separate Relation, bestehend aus dem Primärschlüssel der Person und der E-Mail-Adresse, wobei beide Attribute gemeinsam den Primärschlüssel der neuen Tabelle bilden.

**F:** Wie wird bei einer 1:1-Beziehung zwischen zwei Entitäten entschieden, welche Tabelle den Fremdschlüssel erhält?
**A:** Verfügt eine Seite über eine totale Teilnahme `(1, 1)` und die andere über eine optionale `(0, 1)`, wandert der Fremdschlüssel in die Tabelle der totalen Seite, um Nullwerte zu vermeiden.

**F:** Welchen Primärschlüssel erhält die Relation einer schwachen Entität?
**A:** Einen zusammengesetzten Primärschlüssel, der aus dem Primärschlüssel der übergeordneten starken Entität (als Fremdschlüssel) und dem eigenen Teilschlüssel (Diskriminator) der schwachen Entität besteht.
