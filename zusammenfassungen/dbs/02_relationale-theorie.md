---
id: dbs-02-relationale-theorie
kurs: dbs
nr: 2
titel: Kapitel 2.1 Relationale Theorie, Schlüssel & Relationenalgebra
quellen: DBS-2.1_RelTheorie.pdf
seiten: 91
---

> **Kurz gesagt:** Die mathematische Basis aller SQL-Datenbanken: Edgar F. Codds relationales Modell. Diese Vorlesung definiert Relationen, Attribute, Domänen und Tupel, klärt das hierarchische Schlüsselkonzept (Superschlüssel → Schlüsselkandidat → Primärschlüssel → Fremdschlüssel) und führt in die Relationenalgebra ein (Selektion, Projektion, Joins, Mengenoperationen und Division).

## 🎯 Lernziele
- Eine Relation formal als mathematische Teilmenge eines kartesischen Produkts definieren (S. 3–15).
- Grad (Stelligkeit) und Kardinalität von Relationen unterscheiden (S. 12–16).
- Die Schlüsselhierarchie (Superschlüssel, Schlüsselkandidat, Primärschlüssel) exakt anwenden (S. 18–28).
- Die zwei fundamentalen Integritätsregeln (Entity Integrity und Referentielle Integrität) erklären (S. 29–35).
- Alle Grund- und abgeleiteten Operatoren der Relationenalgebra ($\sigma$, $\pi$, $\times$, $\cup$, $-$, $\cap$, $\bowtie$, $\div$) formal und tabellarisch anwenden (S. 36–91).

## 📖 Kerninhalte
### 1. Das relationale Datenmodell (S. 3–17)
- **Domäne (Wertebereich $D$):** Eine Menge atomarer (nicht weiter zerlegbarer) Werte desselben Datentyps (z. B. `INTEGER`, `VARCHAR(50)`, `DATE`).
- **Kartesisches Produkt ($D_1 \times D_2 \times \dots \times D_n$):** Die Menge aller geordneten n-Tupel $(d_1, d_2, \dots, d_n)$ mit $d_i \in D_i$.
- **Relation ($R$):** Eine mathematische Teilmenge des kartesischen Produkts: $R \subseteq D_1 \times D_2 \times \dots \times D_n$.
  - In der Datenbankpraxis: Eine **Tabelle**.
- **Tupel:** Ein einzelnes Element der Relation. In der Praxis: Eine **Zeile (Datensatz)**.
- **Attribut:** Eine benannte Spalte der Relation.
- **Grad (Stelligkeit):** Die Anzahl der Attribute (Spalten) einer Relation.
- **Kardinalität:** Die Anzahl der Tupel (Zeilen) einer Relation zu einem bestimmten Zeitpunkt.
- **Wichtige Eigenschaften relationaler Tabellen:**
  - Jedes Attribut enthält atomare Werte (1. Normalform).
  - Die Reihenfolge der Zeilen (Tupel) ist mathematisch irrelevant.
  - Die Reihenfolge der Spalten (Attribute) ist irrelevant.
  - Es gibt **keine doppelten Tupel** (Duplikate sind in einer mathematischen Menge verboten).

### 2. Schlüsselkonzepte & Integritätsregeln (S. 18–35)
1. **Superschlüssel (Super Key):**
   - Eine Teilmenge von Attributen, deren Werte ein Tupel in der Relation eindeutig identifizieren.
   - *Jede Obermenge eines Schlüssels ist wieder ein Superschlüssel.*
2. **Schlüsselkandidat (Candidate Key):**
   - Ein **minimaler Superschlüssel**. Das bedeutet: Entfernt man auch nur ein einziges Attribut, geht die Eindeutigkeit verloren.
   - Eine Relation kann mehrere Schlüsselkandidaten besitzen (z. B. Matrikelnummer vs. Steuer-ID).
3. **Primärschlüssel (Primary Key):**
   - Ein vom Datenbankdesigner verbindlich ausgewählter Schlüsselkandidat zur Identifikation der Tupel.
   - **Integritätsregel 1: Entity Integrity (Entitätsintegrität):** Kein Attribut des Primärschlüssels darf jemals den Wert `NULL` annehmen!
4. **Fremdschlüssel (Foreign Key):**
   - Eine Attributmenge in einer Relation $R_1$, die auf den Primärschlüssel einer Relation $R_2$ (oder $R_1$) verweist.
   - **Integritätsregel 2: Referentielle Integrität:** Jeder Fremdschlüsselwert muss entweder exakt mit einem existierenden Primärschlüsselwert der Zieltabelle übereinstimmen oder vollständig `NULL` sein.

### 3. Die Operatoren der Relationenalgebra (S. 36–91)
Die Relationenalgebra ist eine formale prozedurale Abfragesprache. Jede Operation nimmt eine oder zwei Relationen als Eingabe und liefert als Ergebnis wieder eine neue Relation (Abgeschlossenheit).

#### Die fünf elementaren Grundoperatoren:
1. **Selektion ($\sigma_{\text{Bedingung}}(R)$):**
   - Filtert Zeilen (Tupel), die eine logische Bedingung erfüllen.
   - *Beispiel:* $\sigma_{\text{Gehalt} > 50000}(\text{Mitarbeiter})$
2. **Projektion ($\pi_{\text{Attributliste}}(R)$):**
   - Wählt bestimmte Spalten aus und blendet alle anderen aus.
   - **Wichtig:** Da das Ergebnis eine mathematische Menge ist, werden Duplikate automatisch eliminiert!
   - *Beispiel:* $\pi_{\text{Nachname, Ort}}(\text{Kunde})$
3. **Kartesisches Produkt ($R \times S$):**
   - Kombiniert jedes Tupel aus $R$ mit jedem Tupel aus $S$.
   - Hat $R$ $n$ Tupel und $S$ $m$ Tupel, enthält das Ergebnis $n \cdot m$ Tupel.
4. **Vereinigung ($R \cup S$):**
   - Fasst alle Tupel aus $R$ und $S$ zusammen (Duplikate entfernt).
   - **Bedingung:** Beide Relationen müssen **vereinigungskompatibel** sein (gleicher Grad und identische Domänen in gleicher Reihenfolge!).
5. **Mengendifferenz ($R - S$):**
   - Alle Tupel, die in $R$, aber **nicht** in $S$ enthalten sind (Vereinigungskompatibilität erforderlich).

#### Abgeleitete & erweiterte Operatoren:
- **Schnittmenge ($R \cap S$):**
  - Tupel, die sowohl in $R$ als auch in $S$ vorkommen ($R \cap S = R - (R - S)$).
- **Theta-Join ($R \bowtie_{\text{Bedingung}} S$):**
  - Verknüpfung zweier Relationen über eine Vergleichsbedingung: $\sigma_{\text{Bedingung}}(R \times S)$.
- **Equi-Join:** Theta-Join mit Gleichheitsoperator ($=$), z. B. $R \bowtie_{R.A = S.B} S$.
- **Natural Join ($R \bowtie S$):**
  - Equi-Join über alle namensgleichen Attribute beider Relationen. Die doppelten Verknüpfungsspalten werden automatisch auf eine einzige Spalte projiziert.
- **Semijoin ($R \ltimes S$):**
  - Liefert nur diejenigen Tupel aus $R$, die mindestens einen Join-Partner in $S$ finden.
- **Division ($R \div S$):**
  - Dient zur Beantwortung von "Für-alle"-Abfragen (Universalquantor).
  - *Beispiel:* "Finde alle Kunden, die **alle** Produkte gekauft haben, die in der Relation $S$ gelistet sind."

## 🧮 Beispiele & Rechenwege
Gegeben seien zwei Relationen:
- **Mitarbeiter(MNr, Name, AbtNr):**
  - (1, 'Mayer', 10)
  - (2, 'Huber', 20)
  - (3, 'Schmidt', 10)
- **Abteilung(AbtNr, AbtName):**
  - (10, 'Vertrieb')
  - (20, 'Entwicklung')
  - (30, 'Einkauf')

**1. Selektion & Projektion:**
- $\sigma_{\text{AbtNr}=10}(\text{Mitarbeiter})$ ergibt:
  (1, 'Mayer', 10) und (3, 'Schmidt', 10).
- $\pi_{\text{Name}}(\sigma_{\text{AbtNr}=10}(\text{Mitarbeiter}))$ ergibt:
  'Mayer', 'Schmidt'.

**2. Natural Join ($Mitarbeiter \bowtie Abteilung$):**
- Beide Relationen haben das gemeinsame Attribut `AbtNr`.
- Ergebnisrelation mit Grad 4:
  - (1, 'Mayer', 10, 'Vertrieb')
  - (2, 'Huber', 20, 'Entwicklung')
  - (3, 'Schmidt', 10, 'Vertrieb')
- *Hinweis:* Abteilung 30 ('Einkauf') taucht im Inner/Natural Join nicht auf, da kein Mitarbeiter in Abt 30 arbeitet!

## ⚠️ Klausurfallen & typische Fehler
- **Duplikat-Eliminierung bei Projektion:** In der relationalen Algebra eliminiert $\pi$ Duplikate **immer** automatisch! (Im Gegensatz zum SQL-Befehl `SELECT`, der Duplikate standardmäßig behält und erst mit `DISTINCT` entfernt).
- **Vereinigungskompatibilität:** Man kann `Mitarbeiter` und `Abteilung` **nicht** vereinigen ($R \cup S$), da sie unterschiedliche Spalten und Datentypen haben.
- **Primärschlüssel-Nullwert:** Ein Primärschlüssel darf niemals `NULL` enthalten, auch nicht teilweise bei zusammengesetzten Schlüsseln (Entity Integrity)!

## 🧠 Merkhilfen
- **Griechische Symbole der Relationenalgebra:**
  - $\sigma$ (Sigma) = **S**elektion (Zeilen / horizontaler Schnitt).
  - $\pi$ (Pi) = **P**rojektion (Spalten / vertikaler Schnitt).
  - $\bowtie$ = **Bowtie / Join** (Verbindung).
- **Schlüsselpyramide:**
  - Superschlüssel = *Große Menge eindeutiger Kombinationen*
  - Schlüsselkandidat = *Auf das absolute Minimum abgespeckt*
  - Primärschlüssel = *Der Eine, der offiziell ausgewählt wurde*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Relation | Mathematische Teilmenge eines kartesischen Produkts; Tabelle. |
| Tupel | Zeile einer Relation (Datensatz). |
| Grad / Stelligkeit | Anzahl der Attribute (Spalten) einer Relation. |
| Kardinalität | Anzahl der Tupel (Zeilen) einer Relation zu einem Zeitpunkt. |
| Superschlüssel | Attributkombination, die jedes Tupel eindeutig identifiziert. |
| Schlüsselkandidat | Minimaler Superschlüssel (ohne überflüssige Attribute). |
| Primärschlüssel | Ausgewählter Schlüsselkandidat; unterliegt der Entitätsintegrität (kein NULL). |
| Fremdschlüssel | Attribut, das auf den Primärschlüssel einer Referenztabelle verweist. |
| Natural Join | Automatischer Verbund über alle gleichnamigen Attribute mit Duplikatspaltenentfernung. |

## ✅ Selbsttest
**F:** Was versteht man unter dem Grad (der Stelligkeit) einer Relation im Unterschied zur Kardinalität?
**A:** Der Grad ist die feste Anzahl der Attribute (Spalten) des Relationenschemas; die Kardinalität ist die variable Anzahl der aktuell in der Relation gespeicherten Tupel (Zeilen).

**F:** Warum ist jeder Schlüsselkandidat ein Superschlüssel, aber nicht jeder Superschlüssel ein Schlüsselkandidat?
**A:** Ein Superschlüssel garantiert lediglich Eindeutigkeit; erst wenn er minimal ist (kein Attribut weggelassen werden kann, ohne die Eindeutigkeit zu verlieren), wird er zum Schlüsselkandidaten.

**F:** Was besagt die Regel der referentiellen Integrität für Fremdschlüssel?
**A:** Ein Fremdschlüsselwert in einer Kindtabelle muss entweder exakt mit einem vorhandenen Primärschlüsselwert in der referenzierten Elterntabelle übereinstimmen oder er muss vollständig NULL sein.

**F:** Wie verhält sich die relationale Projektion ($\pi$) bezüglich doppelter Ergebniszeilen im Vergleich zum SQL-Befehl `SELECT`?
**A:** Die mathematische Projektion $\pi$ eliminiert Duplikate stets automatisch, da das Ergebnis eine echte Menge ist; SQL behält Duplikate standardmäßig bei und entfernt sie erst durch das Schlüsselwort `DISTINCT`.

**F:** Wozu dient die relationale Division ($\div$)?
**A:** Zur Formulierung von Abfragen mit All-Quantor ("für alle"), z. B. um Entitäten zu ermitteln, die mit ausnahmslos allen Elementen einer Vergleichsrelation in Beziehung stehen.
