---
id: dia-04-normalformen
kurs: dia
nr: 4
titel: Kapitel 4 Normalformen, Funktionale Abhängigkeiten & Normalisierung (1NF bis BCNF)
quellen: DIA-4_Normalformen.pdf
seiten: 141
---

> **Kurz gesagt:** Das Herzstück des Datenbankentwurfs: Wie verhindert man Datenredundanz und gefährliche Anomalien (Einfüge-, Änderungs- und Löschanomalien)? Dieses Skript führt formal in funktionale Abhängigkeiten (Armstrong-Axiome, Attributhülle) ein und erklärt die Normalformen (1NF, 2NF, 3NF und Boyce-Codd-Normalform BCNF) mit anschaulichen Tabellen und schrittweisen Zerlegungsbeispielen.

## 🎯 Lernziele
- Die drei klassischen Datenanomalien (Einfüge-, Update- und Löschanomalie) erkennen und erklären (S. 3–15).
- Funktionale Abhängigkeiten ($X \to Y$) formal definieren und die Attributhülle $X^+$ berechnen (S. 16–35).
- Minimale Schlüsselkandidaten über funktionale Abhängigkeiten mathematisch ermitteln (S. 36–50).
- Die Bedingungen der 1NF (Atomarität), 2NF (keine Teilabhängigkeiten) und 3NF (keine transitiven Abhängigkeiten) verstehen und Tabellen schrittweise normalisieren (S. 51–110).
- Die Boyce-Codd-Normalform (BCNF) abgrenzen und die Kriterien Verlustfreiheit und Abhängigkeitstreue anwenden (S. 111–141).

## 📖 Kerninhalte
### 1. Motivation: Redundanz & Anomalien (S. 3–15)
Ein schlecht entworfenes (denormalisiertes) Schema führt zu Datenredundanz und drei kritischen Anomalien:
1. **Einfügeanomalie (Insert Anomaly):**
   - Ein neuer Fakt kann nicht gespeichert werden, weil der Primärschlüssel noch unvollständig ist.
   - *Beispiel:* Eine neue Abteilung kann nicht angelegt werden, solange ihr noch kein Mitarbeiter (als Teil des Schlüssels) zugewiesen wurde.
2. **Änderungsanomalie (Update Anomaly):**
   - Dieselbe Information (z. B. der Abteilungsleiter) ist mehrfach redundant gespeichert. Ändert sich der Leiter, müssen viele Zeilen aktualisiert werden. Wird eine Zeile übersehen, ist der Datenbestand inkonsistent.
3. **Löschanomalie (Delete Anomaly):**
   - Beim Löschen eines Datensatzes gehen unbeabsichtigt andere, wichtige Fakten verloren.
   - *Beispiel:* Kündigt der einzige Mitarbeiter einer Abteilung, wird seine Zeile gelöscht – damit verschwindet auch die Information über die Existenz der Abteilung!

### 2. Funktionale Abhängigkeiten (FA / FD) (S. 16–35)
- **Definition:** Gegeben sei eine Relation $R$ mit Attributmengen $X, Y \subseteq R$.
  $Y$ ist von $X$ **funktional abhängig** ($X \to Y$), wenn für alle zulässigen Zustände von $R$ gilt:
  Haben zwei Tupel $t_1, t_2$ die gleichen Werte für $X$, müssen sie zwingend auch die gleichen Werte für $Y$ haben:
  $$t_1[X] = t_2[X] \implies t_1[Y] = t_2[Y]$$
  - $X$ heißt **Determinante** (bestimmende Menge), $Y$ heißt **abhängige Menge**.
  - *Trivial:* Wenn $Y \subseteq X$ (z. B. `{MNr, Name} -> Name`).
- **Armstrong-Axiome (Ableitungsregeln):**
  1. *Reflexivität:* Wenn $Y \subseteq X$, dann gilt $X \to Y$.
  2. *Akkumulation (Erweiterung):* Wenn $X \to Y$, dann gilt $X \cup Z \to Y \cup Z$.
  3. *Transitivität:* Wenn $X \to Y$ und $Y \to Z$, dann gilt $X \to Z$.
  - *Daraus abgeleitet:* Vereinigungsregel ($X \to Y \land X \to Z \implies X \to YZ$) und Dekompositionsregel ($X \to YZ \implies X \to Y \land X \to Z$).
- **Attributhülle ($X^+$):**
  - Die Menge aller Attribute, die durch $X$ über funktionale Abhängigkeiten eindeutig bestimmt werden.
  - Wenn $X^+$ alle Attribute der Relation umfasst, ist $X$ ein **Superschlüssel**! Ist kein echtes Teil von $X$ ein Superschlüssel, ist $X$ ein **minimaler Schlüsselkandidat**.

### 3. Die Stufen der Normalisierung (S. 51–110)
#### 1. Normalform (1NF) – Atomarität (S. 52–65):
- **Bedingung:** Eine Relation ist in 1NF, wenn alle Attributwerte **atomar** (unteilbar) sind.
- **Verstöße gegen 1NF:**
  - Zusammengesetzte Werte in einem Feld (z. B. `Name = 'Dr. Max Mustermann'`, `Adresse = 'Musterstr. 1, 86150 Augsburg'`).
  - Mehrwertige Attribute / Mengen (z. B. `Hobbys = 'Fußball, Schach, Lesen'`).
  - Wiederholungsgruppen (z. B. Spalten `Telefon1`, `Telefon2`, `Telefon3`).
- **Herstellung der 1NF:** Felder aufspalten in atomare Einzelattribute bzw. mehrwertige Attribute in eigene Zeilen/Tabellen auslagern.

#### 2. Normalform (2NF) – Keine partiellen Schlüsselabhängigkeiten (S. 66–85):
- **Bedingung:** Die Relation ist in 1NF und jedes Nichtschlüsselattribut ist **voll funktional abhängig** von jedem Schlüsselkandidaten.
- **Verstoß gegen 2NF:** Ein Nichtschlüsselattribut hängt nur von einem **Teil** eines zusammengesetzten Primärschlüssels ab!
- **Wichtigste Klausurregel:**
  - Besteht der Primärschlüssel aus nur **einem einzigen Attribut**, ist die Tabelle **automatisch in 2NF**, sobald sie in 1NF ist!
  - 2NF-Verletzungen können **nur bei zusammengesetzten Primärschlüsseln** auftreten!
- **Herstellung der 2NF:** Zerlegung in mehrere Relationen: Das teilabhängige Attribut wandert zusammen mit dem Teilschlüssel in eine eigene Tabelle.

#### 3. Normalform (3NF) – Keine transitiven Abhängigkeiten (S. 86–110):
- **Bedingung:** Die Relation ist in 2NF und kein Nichtschlüsselattribut ist **transitiv abhängig** von einem Schlüsselkandidaten.
- **Verstoß gegen 3NF:** Ein Nichtschlüsselattribut bestimmt ein anderes Nichtschlüsselattribut:
  $Schlüssel \to Nichtschlüssel_1 \to Nichtschlüssel_2$.
  - *Typisches Beispiel:* `KundenNr -> PLZ -> Ort`.
    `Ort` hängt von `PLZ` ab, und `PLZ` ist kein Schlüssel!
- **Herstellung der 3NF:** Das transitiv abhängige Attribut wird zusammen mit seiner Determinante in eine eigene Tabelle ausgelagert (z. B. `Ort(PLZ, Ortsname)`). In der Ursprungstabelle verbleibt die Determinante als Fremdschlüssel.

#### Boyce-Codd-Normalform (BCNF) (S. 111–130):
- **Bedingung:** Eine Relation ist in BCNF, wenn für **jede** nicht-triviale funktionale Abhängigkeit $X \to Y$ gilt: **$X$ ist ein Superschlüssel!**
- **Unterschied zu 3NF:** 3NF erlaubt Ausnahmen, wenn $Y$ Teil eines Schlüsselkandidaten ist. BCNF lässt keine Ausnahmen zu. Relevant bei überlappenden, zusammengesetzten Schlüsselkandidaten.

### 4. Gütekriterien der Dekomposition (S. 131–141)
Bei jeder Zerlegung einer Relation in Teilrelationen müssen zwei Kriterien erfüllt sein:
1. **Verlustfreiheit (Lossless Join):**
   - Werden die Teilrelationen über einen Natural Join wieder verknüpft, muss exakt die Ursprungsrelation entstehen (keine fiktiven Phantomtupel / Scheintupel!).
   - *Satz:* Eine Zerlegung von $R$ in $R_1, R_2$ ist verlustfrei, wenn die gemeinsamen Attribute $R_1 \cap R_2$ einen Superschlüssel für mindestens eine der beiden Teilrelationen bilden.
2. **Abhängigkeitstreue (Dependency Preservation):**
   - Alle ursprünglichen funktionalen Abhängigkeiten müssen innerhalb der Teilrelationen prüfbar bleiben, ohne Joins über mehrere Tabellen ausführen zu müssen.

## 🧮 Beispiele & Rechenwege
### Das vollständige Normalisierungsbeispiel (Vorlesungsstandard)
Gegeben sei eine unnormalisierte Auftragszeile:
`Bestellposition(BestellNr, ArtikelNr, Datum, KundenNr, Kundenname, Artikelname, Menge, Einzelpreis)`

- Zusammengesetzter Primärschlüssel: `(BestellNr, ArtikelNr)`
- Gegebene funktionale Abhängigkeiten:
  - `(BestellNr, ArtikelNr) -> Menge` (voll abhängig von beiden!)
  - `BestellNr -> Datum, KundenNr, Kundenname` (hängt nur vom Teil `BestellNr` ab → **2NF-Verletzung!**)
  - `ArtikelNr -> Artikelname, Einzelpreis` (hängt nur vom Teil `ArtikelNr` ab → **2NF-Verletzung!**)
  - `KundenNr -> Kundenname` (Nichtschlüssel bestimmt Nichtschlüssel → **3NF-Verletzung!**)

#### Schritt 1: Überführung in 2NF (Teilabhängigkeiten eliminieren)
Wir spalten die teilabhängigen Attribute in eigene Tabellen ab:
- **`Bestellposition(BestellNr, ArtikelNr, Menge)`** (PK: `BestellNr, ArtikelNr` – voll funktional abhängig!)
- **`Bestellung(BestellNr, Datum, KundenNr, Kundenname)`** (PK: `BestellNr`)
- **`Artikel(ArtikelNr, Artikelname, Einzelpreis)`** (PK: `ArtikelNr`)
*Alle drei Tabellen sind nun in 2NF!*

#### Schritt 2: Überführung in 3NF (Transitive Abhängigkeiten eliminieren)
In der Tabelle `Bestellung` gilt: `BestellNr -> KundenNr` und `KundenNr -> Kundenname`.
`Kundenname` hängt transitiv über `KundenNr` vom Primärschlüssel ab!
Auslagerung von Kunde in eigene Relation:
- **`Kunde(KundenNr, Kundenname)`** (PK: `KundenNr`)
- **`Bestellung(BestellNr, Datum, KundenNr)`** (PK: `BestellNr`, FK: `KundenNr`)

#### Endergebnis in 3NF (4 saubere, redundanzfreie Tabellen):
1. `Bestellposition(BestellNr, ArtikelNr, Menge)` (PK: `BestellNr, ArtikelNr`)
2. `Bestellung(BestellNr, Datum, KundenNr)` (PK: `BestellNr`)
3. `Kunde(KundenNr, Kundenname)` (PK: `KundenNr`)
4. `Artikel(ArtikelNr, Artikelname, Einzelpreis)` (PK: `ArtikelNr`)
*Frei von Einfüge-, Änderungs- und Löschanomalien!*

## ⚠️ Klausurfallen & typische Fehler
- **2NF vorschnell prüfen:** Wenn eine Tabelle einen einfachen Primärschlüssel aus einem einzigen Attribut hat (z. B. `KundenNr`), kann sie niemals die 2. Normalform verletzen! Zeit in der Klausur sparen: Direkt prüfen, ob 3NF verletzt ist.
- **Transitive Abhängigkeit vs. 1:N-Beziehung:** Wenn `KundenNr` in der Bestellung steht, ist das kein 3NF-Verstoß, sondern ein normaler Fremdschlüssel. Erst wenn auch der `Kundenname` in der Bestellung steht, entsteht die transitive Redundanz!
- **Verlustbehaftete Zerlegung:** Trennt man eine Tabelle so auf, dass die Schnittmenge der beiden Teile kein Schlüssel von einem der beiden Teile ist, entstehen beim Join sogenannte **Scheintupel (Phantom Records)**. Das ist in der Klausur ein schwerer Fehler!

## 🧠 Merkhilfen
- **Der Normalformen-Schwur (nach William Kent):**
  *"Ich schwöre, dass jedes Attribut abhängt vom Schlüssel (1NF), vom ganzen Schlüssel (2NF) und von nichts als dem Schlüssel (3NF), so wahr mir Codd helfe!"*
- **Schnelltest:**
  - 1NF: *Keine Listen in Zellen.*
  - 2NF: *Hängt alles vom GANZEN zusammengesetzten Schlüssel ab?*
  - 3NF: *Bestimmt ein Nichtschlüssel einen anderen Nichtschlüssel? Raus damit!*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Redundanz | Mehrfache, unnötige Speicherung identischer Informationen. |
| Anomalie | Fehlerzustand bei Einfüge-, Änderungs- oder Löschoperationen. |
| Funktionale Abhängigkeit | $X \to Y$: $X$ bestimmt den Wert von $Y$ eindeutig. |
| Attributhülle $X^+$ | Menge aller Attribute, die durch $X$ funktional determiniert werden. |
| 1. Normalform (1NF) | Alle Attributwerte sind atomar. |
| 2. Normalform (2NF) | 1NF + alle Nichtschlüsselattribute sind voll funktional vom Schlüssel abhängig. |
| 3. Normalform (3NF) | 2NF + keine transitiven Abhängigkeiten zwischen Nichtschlüsselattributen. |
| BCNF | Jede Determinante einer nicht-trivialen funktionalen Abhängigkeit ist ein Superschlüssel. |
| Verlustfreiheit | Der Natural Join der Teilrelationen ergibt exakt die Ursprungsrelation (keine Scheintupel). |

## ✅ Selbsttest
**F:** Was ist eine Löschanomalie und an welchem Beispiel lässt sie sich verdeutlichen?
**A:** Eine Löschanomalie tritt auf, wenn durch das Löschen eines Datensatzes unbeabsichtigt andere, fachlich unabhängige Informationen verloren gehen (z. B. das Löschen des letzten Mitarbeiters einer Abteilung löscht gleichzeitig die gesamte Information über die Existenz dieser Abteilung).

**F:** Unter welcher Bedingung ist eine Relation in 1. Normalform garantiert auch in 2. Normalform?
**A:** Wenn ihr Primärschlüssel aus genau einem einzigen Attribut (keinem zusammengesetzten Schlüssel) besteht, da partielle Schlüsselabhängigkeiten nur bei zusammengesetzten Schlüsseln existieren können.

**F:** Wie lautet die Definition der 3. Normalform (3NF)?
**A:** Eine Relation ist in 3NF, wenn sie in 2NF ist und kein Nichtschlüsselattribut transitiv von einem Schlüsselkandidaten abhängt (d. h. kein Nichtschlüsselattribut bestimmt ein anderes Nichtschlüsselattribut).

**F:** Worin unterscheidet sich die Boyce-Codd-Normalform (BCNF) von der 3. Normalform?
**A:** In der BCNF muss ausnahmslos jede Determinante einer funktionalen Abhängigkeit ein Superschlüssel sein; die 3NF lässt als Ausnahme zu, dass die abhängige Seite Teil eines Schlüsselkandidaten ist.

**F:** Was versteht man unter einer verlustfreien Zerlegung (Lossless Join) bei der Normalisierung?
**A:** Dass eine zerlegte Relation durch einen Natural Join wieder exakt in ihren ursprünglichen Zustand überführt werden kann, ohne dass dabei zusätzliche, falsche Datensätze (Scheintupel) entstehen.
