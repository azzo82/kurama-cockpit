---
id: dia-02-konzeptionelle-modellierung
kurs: dia
nr: 2
titel: Kapitel 2 Semantische Informationsanalyse & Konzeptionelle Datenmodellierung (ERM)
quellen: DIA-2.1_InfoAnalyse.pdf + DIA-2.2_KonzeptDM.pdf + DIA-2.2x_Zusatzbeispiele.pdf
seiten: 144
---

> **Kurz gesagt:** Vom Text der Fachabteilung zum formalen Entwurf: Wie filtert man aus natürlichsprachigen Anforderungen semantisch irreduzible Sätze heraus? Wie unterscheidet man lexikalische (LOT) von nicht-lexikalischen Objekttypen (NOLOT)? Diese Vorlesung führt in das Entity-Relationship-Modell (ERM) ein und klärt die verschiedenen Notationsformen (Chen vs. Min-Max vs. Krähenfuß) sowie schwache Entitäten.

## 🎯 Lernziele
- Natürlichsprachige Texte in semantisch irreduzible Elementarsätze zerlegen (S. 2–18).
- Nicht-lexikalische Objekttypen (NOLOT / Entitäten) und lexikalische Objekttypen (LOT / Werte) unterscheiden (S. 19–26).
- Entity-Relationship-Diagramme (ERD) mit Entitäten, Attributen und Beziehungen korrekt konstruieren (S. 27–45).
- Kardinalitäten in Chen-Notation (1:1, 1:n, n:m) und Min-Max-Notation `(min, max)` fehlerfrei zuordnen und interpretieren (S. 46–60).
- Schwache Entitätstypen (Weak Entities) und identifizierende Beziehungen modellieren (S. 61–67).

## 📖 Kerninhalte
### 1. Semantische Informationsanalyse & Natürliche Sprache (S. 2–18)
Die Modellierung beginnt mit der Analyse von Anforderungstexten der Fachabteilung:
- **Substantive** weisen häufig auf **Objekttypen (Entitäten)** oder **Attribute** hin.
- **Verben** weisen meist auf **Beziehungen (Relationships)** hin.
- **Semantisch irreduzible Sätze (Elementarsätze):**
  - Ein elementarer Satz drückt genau einen einzigen Sachverhalt aus.
  - Er kann nicht ohne Informationsverlust in zwei oder mehrere kleinere Sätze aufgespalten werden.
  - *Beispiel:* "Der Student Müller mit Matrikelnummer 12345 besucht die Vorlesung Datenbanken."
    - Teilsatz 1: "Der Student hat den Nachnamen Müller." (Identifikation über MatrNr)
    - Teilsatz 2: "Der Student mit MatrNr 12345 belegt die Vorlesung Datenbanken."

### 2. Objekttypen: LOT vs. NOLOT (S. 19–26)
In der faktenorientierten Modellierung unterscheidet man strikt:
- **NOLOT (Non-Lexical Object Type):**
  - Reale oder abstrakte Entitäten der Wirklichkeit (z. B. ein Mensch, ein physisches Auto, ein Unternehmen, ein Hörsaal).
  - Ein NOLOT kann nicht direkt gedruckt oder gesprochen werden, sondern existiert als eigenständiges Ding in der Realwelt.
- **LOT (Lexical Object Type):**
  - Symbolische Repräsentationen, Zeichenketten, Zahlen oder Bezeichner, die gedruckt, gesprochen und am Bildschirm angezeigt werden können (z. B. `Matrikelnummer`, `Nachname`, `Farbe`, `Preis`, `Kennzeichen`).
- **Verknüpfung:** Ein NOLOT (das Auto) wird über einen LOT (das Kennzeichen `'A-WI-2026'`) identifiziert (Referenzbeziehung).

### 3. Grundelemente des Entity-Relationship-Modells (ERM) (S. 27–45)
- **Entitätstyp (Entity Type):** Klasse von realen Dingen mit gleichen Attributen (Rechteck im Chen-Diagramm, z. B. `Kunde`, `Artikel`).
- **Attribut:** Eigenschaft einer Entität (Ellipse im Chen-Diagramm, z. B. `Geburtsdatum`).
  - *Schlüsselattribut:* Identifiziert die Entität eindeutig (im Diagramm unterstrichen).
  - *Mehrwertiges Attribut:* Kann mehrere Werte annehmen (z. B. mehrere Telefonnummern; Doppel-Ellipse).
  - *Zusammengesetztes Attribut:* Zerlegbar (z. B. `Adresse` besteht aus `Straße`, `PLZ`, `Ort`).
- **Beziehungstyp (Relationship Type):** Logische Verknüpfung zwischen zwei oder mehr Entitätstypen (Raute im Chen-Diagramm, z. B. `kauft`, `arbeitet_in`).

### 4. Kardinalitäten & Notationssysteme (S. 46–60)
Wie viele Entitäten können auf jeder Seite an einer Beziehung teilnehmen?

#### Chen-Notation (Klassisch):
- Schreibt `1`, `N`, `M` an die Verbindungslinien:
  - **1:1 (Eins-zu-Eins):** Jeder Mitarbeiter leitet maximal eine Abteilung; jede Abteilung hat genau einen Leiter.
  - **1:N (Eins-zu-Viele):** Eine Abteilung beschäftigt viele Mitarbeiter; jeder Mitarbeiter gehört zu genau einer Abteilung.
  - **N:M (Viele-zu-Viele):** Ein Student hört viele Vorlesungen; eine Vorlesung wird von vielen Studenten besucht.
- **Leserichtung bei Chen:** Man schaut über die Beziehung hinweg auf die Gegenseite!

#### Min-Max-Notation (Merise-Notation):
- Schreibt ein Tupel `(min, max)` an jede Entität:
  - `min`: Minimale Teilnahme (0 = optional, 1 = Pflicht/totale Teilnahme).
  - `max`: Maximale Teilnahme (1 = höchstens ein Partner, `*` oder `N` = beliebig viele).
- **Leserichtung bei Min-Max:** Das Tupel `(min, max)` steht direkt an der betrachteten Entität und beschreibt deren **eigenes** Teilnahmeverhalten!

| Beziehung | Chen-Notation (A zu B) | Min-Max an Entität A | Min-Max an Entität B |
|---|---|---|---|
| Pflicht-1:N (Abt hat mind. 1 MA, MA muss in 1 Abt sein) | 1 an Abt, N an MA | (1, N) | (1, 1) |
| Optionale 1:N (Abt kann 0 MA haben, MA kann abteilungsfrei sein) | 1 an Abt, N an MA | (0, N) | (0, 1) |
| N:M (Student belegt 0..* Kurse, Kurs hat 1..* Studenten) | N an Student, M an Kurs | (0, *) | (1, *) |

### 5. Schwache Entitäten (Weak Entities) (S. 61–67)
- **Definition:** Eine Entität, die keinen eigenen Primärschlüssel aus ihren eigenen Attributen bilden kann und **existenzabhängig** von einer übergeordneten Entität (Strong Entity) ist.
- **Darstellung:** Doppelt umrandetes Rechteck; identifizierende Beziehung als doppelt umrandete Raute.
- **Identifikation:** Der Primärschlüssel der schwachen Entität setzt sich zusammen aus dem Primärschlüssel der Elternebene und einem **Teilschlüssel (Diskriminator)** der schwachen Entität (gestrichelt unterstrichen).
  - *Klassisches Beispiel:* `Raum` (schwache Entität mit Teilschlüssel `Raumnummer`) existiert nur im Kontext von `Gebäude` (starke Entität mit `GebäudeID`). Ein Primärschlüssel ist `(GebäudeID, Raumnummer)`.

## 🧮 Beispiele & Rechenwege
### Notationsvergleich: Projektleitung
Gegeben: "Ein Mitarbeiter kann maximal ein Projekt leiten, muss aber keines leiten. Jedes Projekt muss von genau einem Mitarbeiter geleitet werden."

- **Chen-Notation:**
  - `Mitarbeiter` ---(1)--- < leitet > ---(1)--- `Projekt`
- **Min-Max-Notation:**
  - An `Mitarbeiter`: `(0, 1)` (Ein Mitarbeiter leitet 0 oder 1 Projekt).
  - An `Projekt`: `(1, 1)` (Ein Projekt wird von genau 1 Mitarbeiter geleitet).

## ⚠️ Klausurfallen & typische Fehler
- **Der Notations-Dreher Chen vs. Min-Max:**
  - Bei Chen steht das `N` bei `Mitarbeiter`, weil "eine Abteilung N Mitarbeiter hat" (Blick auf die Gegenseite).
  - Bei Min-Max steht `(1, N)` bei der `Abteilung`, weil "jede Abteilung 1 bis N Mitarbeiter umfasst" (Blick auf die eigene Kardinalität). Wer das verwechselt, vertauscht die gesamte Modelllogik!
- **Schwache Entitäten ohne Teilschlüssel:** Eine schwache Entität hat fast immer einen Teilschlüssel (z. B. Positionsnummer auf einer Rechnung); ohne ihn könnten mehrere Positionen derselben Rechnung nicht unterschieden werden.

## 🧠 Merkhilfen
- **NOLOT vs. LOT:** *NOLOT kannst du anfassen (Student Ahmad), LOT kannst du aufschreiben (Matrikelnummer 12345).*
- **Min-Max-Spickzettel:**
  - `(0, 1)` = Kann, aber höchstens einmal (optional 1).
  - `(1, 1)` = Muss genau einmal (Pflicht 1).
  - `(0, *)` = Kann beliebig oft oder gar nicht.
  - `(1, *)` = Muss mindestens einmal, kann beliebig oft.

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| NOLOT | Nicht-lexikalischer Objekttyp; reale Entität der Wirklichkeit. |
| LOT | Lexikalischer Objekttyp; sprachlich/textlich darstellbarer Wert. |
| Elementarsatz | Semantisch irreduzibler Faktensatz ohne Informationsverlust. |
| Entität | Konkretes, eindeutig identifizierbares Objekt der Realwelt. |
| Attribut | Eigenschaft oder Merkmal einer Entität. |
| Chen-Notation | Klassische Kardinalitätsnotation mit 1:1, 1:N, N:M über die Beziehung hinweg. |
| Min-Max-Notation | Beschreibt minimale und maximale Teilnahme `(min, max)` direkt an der Entität. |
| Schwache Entität | Existenzabhängige Entität ohne vollständigen eigenen Primärschlüssel. |

## ✅ Selbsttest
**F:** Was versteht man unter einem semantisch irreduziblen Satz in der Informationsanalyse?
**A:** Einen elementaren Satz, der genau einen unteilbaren Fakt ausdrückt und nicht ohne Verlust von Bedeutung in zwei kleinere, eigenständige Sätze zerlegt werden kann.

**F:** Wie unterscheiden sich NOLOT und LOT an einem Beispiel aus dem Hochschulbereich?
**A:** Der physische Student Ahmad ist ein NOLOT (reales Ding, nicht druckbar); seine Matrikelnummer '987654' oder sein Vorname 'Ahmad' ist ein LOT (druckbare Zeichenkette zur Identifikation).

**F:** Welche Bedeutung hat das Tupel `(1, 1)` in der Min-Max-Notation an einer Entität?
**A:** Es drückt eine totale (verpflichtende) und eindeutige Teilnahme aus: Jedes Exemplar dieser Entität muss an genau einer Beziehungsinstanz teilnehmen (weder 0 noch mehr als 1).

**F:** Was ist eine schwache Entität (Weak Entity) und wie wird sie im relationalen Modell identifiziert?
**A:** Eine Entität, die nicht existenzfähig ist ohne eine übergeordnete starke Entität und keinen eigenen vollständigen Primärschlüssel besitzt; ihr Primärschlüssel wird durch Kombination des Primärschlüssels der Elternentität mit ihrem eigenen Teilschlüssel (Diskriminator) gebildet.

**F:** Warum steht bei einer 1:N-Beziehung zwischen Abteilung und Mitarbeiter in der Min-Max-Notation an der Abteilung das Tupel `(1, N)`?
**A:** Weil in der Min-Max-Notation direkt an der Entität abgelesen wird, wie viele Instanzen der Beziehung sie eingeht: Eine Abteilung umfasst hier mindestens 1 und maximal N Mitarbeiter.
