---
id: dia-01-grundlagen-terminologie
kurs: dia
nr: 1
titel: Kapitel 1 Grundlagen der Daten- und Informationsanalyse & Semiotik
quellen: DIA-1_Grundlagen.pdf
seiten: 28
---

> **Kurz gesagt:** Daten sind das Rohöl der Informationsgesellschaft – aber was unterscheidet ein reines Zeichen von Information und Wissen? Diese Grundlagenvorlesung klärt die semiotischen Ebenen (Syntax, Semantik, Pragmatik), definiert Daten, Information und Wissen, und zeigt, warum präzise begriffliche Analysen das Fundament für jedes spätere Datenbankschema bilden.

## 🎯 Lernziele
- Die Begriffshierarchie Zeichen → Daten → Information → Wissen präzise abgrenzen (S. 3–12).
- Die vier semiotischen Ebenen (Syntax, Semantik, Pragmatik, Sigmatik) verstehen (S. 13–18).
- Die Dimensionen der Datenqualität und die Rolle von Informationssystemen erklären (S. 19–28).

## 📖 Kerninhalte
### 1. Begriffshierarchie: Vom Zeichen zum Wissen (S. 3–12)
- **Zeichen (Syntax):** Diskrete Elemente aus einem definierten Zeichensatz (z. B. Ziffern `0-9`, Buchstaben `A-Z`), gebildet nach syntaktischen Regeln (Alphabet, Grammatik). Ein isoliertes Zeichen hat für sich noch keine Bedeutung.
- **Daten:** Zeichen, die nach syntaktischen Regeln angeordnet sind, aber noch ohne Kontext dastehen (z. B. die Zahl `38,5` oder die Zeichenkette `'MUC'`).
- **Information:** Daten, die in einen **Kontext** gesetzt werden und dadurch eine fachliche **Bedeutung (Semantik)** erhalten.
  - *Beispiel:* `'38,5'` wird durch den Kontext "Körpertemperatur des Patienten Huber in Grad Celsius" zu einer verständlichen Information (er hat leichtes Fieber).
- **Wissen:** Die Verknüpfung von Informationen mit Erfahrungen, Handlungsregeln und bestehendem Vorwissen zur Lösung konkreter Problemstellungen (Pragmatik).
  - *Beispiel:* Das Wissen eines Arztes, ab wann bei 38,5 °C Fieber senkende Medikamente verabreicht werden müssen.

### 2. Die semiotischen Ebenen der Information (S. 13–18)
Die Semiotik ist die Lehre von Zeichen und Zeichenprozessen:
1. **Syntaktische Ebene (Syntax):**
   - Formale Regeln der Zeichenzusammensetzung (Codierung, Grammatik, Datentypen, Längenbeschränkungen).
   - *Frage:* Entspricht die Eingabe der vorgegebenen Form (z. B. ist die IBAN 22 Zeichen lang)?
2. **Semantische Ebene (Semantik):**
   - Die inhaltliche Bedeutung der Zeichenfolge im Kontext der realen Welt.
   - *Frage:* Was bedeuten die Daten für den Betrachter?
3. **Pragmatische Ebene (Pragmatik):**
   - Der handlungsauslösende Nutzen der Information für den Empfänger (Zweckorientierung, Entscheidungsrelevanz).
   - *Frage:* Welche Entscheidung oder Aktion folgt aus dieser Information?
4. **Sigmatische Ebene:**
   - Der Bezug zwischen dem Zeichen und dem realen Objekt in der Wirklichkeit (Referenz).

### 3. Informationssysteme & Datenqualität (S. 19–28)
- Ein **Betriebliches Informationssystem (IS)** ist ein soziotechnisches System, das Mensch, Technologie und Aufgaben zur Erfassung, Speicherung, Verarbeitung und Bereitstellung von Informationen verknüpft.
- **Kriterien hochwertiger Datenqualität:**
  - *Korrektheit (Richtigkeit):* Daten bilden die reale Wirklichkeit fehlerfrei ab.
  - *Vollständigkeit:* Alle erforderlichen Attribute und Pflichtfelder sind vorhanden.
  - *Konsistenz (Widerspruchsfreiheit):* Keine widersprüchlichen Angaben in verschiedenen Systemteilen.
  - *Aktualität:* Daten entsprechen dem aktuellen Zustand der realen Welt.
  - *Relevanz:* Information ist für den Entscheidungsprozess nützlich und nicht überfrachtet.

## 🧮 Beispiele & Rechenwege
- **Das semiotische Treppenbeispiel:**
  - Zeichen: `2`, `4`, `.`, `1`, `0`, `.`, `2`, `0`, `2`, `6`.
  - Daten: `24.10.2026` (nach deutscher Datumssyntax formatiert).
  - Information: "Der Abgabetermin für die Hausarbeit in Wirtschaftsinformatik ist der 24.10.2026."
  - Wissen: "Da die Korrektur 14 Tage dauert und die Prüfungsanmeldung bis 10.11.2026 läuft, muss der Student heute mit der Recherche beginnen."

## ⚠️ Klausurfallen & typische Fehler
- **Verwechslung von Daten und Information:** Daten sind rein syntaktische Gebilde; Information entsteht erst durch die semantische Anreicherung mit Kontext!
- **Pragmatik nicht vergessen:** Der höchste Wert in betrieblichen Systemen entsteht auf der pragmatischen Ebene – Daten, die niemandem zur Entscheidung nützen, sind reiner Ballast.

## 🧠 Merkhilfen
- **Die Wissenstreppe:** *Zeichen (Code) → Daten (Struktur) → Information (Bedeutung) → Wissen (Handlung).*
- **Semiotik-Trio:** *Syntax = Grammatik, Semantik = Bedeutung, Pragmatik = Nutzen.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Zeichen | Elementares Symbol eines vereinbarten Alphabets. |
| Daten | Syntaktisch geordnete Zeichenfolgen ohne inhärenten Kontext. |
| Information | Daten, angereichert mit Kontext und semantischer Bedeutung. |
| Wissen | Zweckorientiert verknüpfte Informationen zur Problemlösung und Entscheidungsfindung. |
| Syntax | Formale Regeln zur Bildung von Zeichenkombinationen. |
| Semantik | Bedeutungsinhalt von Zeichen und Aussagen. |
| Pragmatik | Wirkung und Handlungsrelevanz einer Information für den Empfänger. |

## ✅ Selbsttest
**F:** Was unterscheidet Daten von Information?
**A:** Daten sind rein syntaktisch strukturierte Zeichenfolgen ohne zwingenden Kontext; Information entsteht erst, wenn Daten in einen situativen Zusammenhang gestellt werden und dadurch eine fachliche Bedeutung (Semantik) erhalten.

**F:** Welche vier Ebenen unterscheidet die Semiotik und womit befasst sich die Syntax?
**A:** Syntax, Semantik, Pragmatik und Sigmatik. Die Syntax befasst sich mit den formalen Regeln der Zeichenverknüpfung und Codierung unabhängig von deren Bedeutung.

**F:** Geben Sie ein konkretes Beispiel für den Übergang von Information zu Wissen.
**A:** Information: "Der Server meldet eine Festplattenauslastung von 98 %." Wissen: "Der Administrator weiß, dass das Datenbanksystem bei 100 % stoppt und daher unverzüglich Log-Dateien archiviert und bereinigt werden müssen."

**F:** Welche fünf zentralen Dimensionen bestimmen die Qualität von Daten in einem Informationssystem?
**A:** Korrektheit, Vollständigkeit, Konsistenz (Widerspruchsfreiheit), Aktualität und Relevanz.

**F:** Warum ist ein isolierter Zahlenwert wie `42` kein Wissen?
**A:** Weil `42` ohne Kontext und Einheit lediglich eine Zahl (Daten) darstellt; erst mit Einheit (z. B. km/h) wird sie zur Information und verknüpft mit einer Geschwindigkeitsbegrenzung zum handlungsleitenden Wissen.
