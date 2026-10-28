---
id: dia-02-9-fallstudie-lwis
kurs: dia
nr: 2.9
titel: Fallstudie & Klausurübung: Lehrgangsinformationssystem (LWIS) & Kursverwaltung
quellen: DIA-2.3_Fallstudie.pdf + LectureManagement_DE.pdf + LWIS-ConceptualDataModel.pdf + LWIS-Lösung.pdf
seiten: 82
---

> **Kurz gesagt:** Die große praxis- und klausurnahe Fallstudie von Prof. Kolonko: Das Lehrgangs- und Weiterbildungsinformationssystem (LWIS) sowie die Kursverwaltung. Dieses Skript führt von der sprachlichen Aufgabenstellung und den semantisch irreduziblen Fakten über das konzeptionelle ER-Diagramm bis hin zur vollständigen Ableitung des relationalen Datenbankschemas mit allen Primär- und Fremdschlüsseln.

## 🎯 Lernziele
- Komplexe Realwelt-Szenarien (Sportverband/Weiterbildung) systematisch analysieren (S. 2–15).
- Entitäten, Attribute und Beziehungsstrukturen mit Rollen und Kardinalitäten modellieren (S. 16–35).
- Rekursive Beziehungen (Bezirks-Hierarchie mit Oberbezirk, Benutzeränderungen) abbilden.
- N:M-Beziehungen mit Beziehungsattributen und zusammengesetzten Schlüsseln (z. B. Teilnehmer-Lizenzen mit Unterrichtseinheiten UE) in eigenständige Relationen überführen.
- Das vollständige relationale Schema (Logisches Modell) mit PK, FK und Unique-Constraints ableiten.

## 📖 Kerninhalte
### 1. Fachliche Ausgangssituation des LWIS
Ein Sport- und Fachverband organisiert Weiterbildungslehrgänge für Mitglieder:
- **Benutzer (Mitglieder, Teilnehmer, Referenten):** Werden mit Stammdaten erfasst (Name, Geburtsdatum, Adresse, Kontakt, BY-Nummer, Verein, Graduierung/Gürtelfarbe).
- **Bezirke:** Sind hierarchisch gegliedert (jeder Bezirk kann einem übergeordneten Oberbezirk zugeordnet sein; rekursive 1:N-Beziehung).
- **Lehrgänge:** Finden an einem Datum an einem Ort statt, gehören zu einem Bezirk und vergeben Unterrichtseinheiten (max. UE).
- **Lizenzen:** Werden von Verbänden ausgestellt (z. B. Trainer-C-Lizenz) und besitzen Gültigkeitszeiträume.
- **Teilnahme & Lizenzgutschrift:** Ein Lehrgang kann für bestimmte Lizenzen freigeschaltet sein (`LG-Lizenz`). Ein Teilnehmer kann für absolvierte Lehrgänge UE auf seine Lizenz angerechnet bekommen (`LG-Teilnehmer-Lizenz`).

### 2. Das vollständige Logische Datenmodell (Ableitungsergebnis nach Prof. Kolonko)
Aus dem konzeptionellen Modell leitet sich folgendes relationales Schema ab:

1. **`Bezirk`** (`Bezirk_ID` [PK], `Bezeichnung` [U1], `Oberbezirk` [FK1 → Bezirk])
   - *Besonderheit:* Rekursiver Fremdschlüssel `Oberbezirk` verweist auf den Primärschlüssel derselben Tabelle `Bezirk`.
2. **`Graduierung`** (`Grad_ID` [PK], `Grad_Bezeichnung` [U1], `Gürtelfarbe`)
   - Sportliche Einstufung (z. B. Schwarzgurt, Braungurt).
3. **`Benutzer`** (
   `Benutzer_ID` [PK], `Username` [U1], `Passwort`, `BY-Nummer` [U2], `Nachname` [U3], `Vorname` [U3], `Geburtsdatum` [U3], `Bezirk` [FK2 → Bezirk], `Graduierung` [FK1 → Graduierung], `Strasse`, `PLZ`, `Ort`, `Telefon_privat`, `Telefon_dienst`, `Telefon_mobil`, `Fax`, `E-Mail`, `Verein`, `Bemerkung`, `letzter_login`, `letzte_aenderung`, `aenderer` [FK3 → Benutzer], `verifiziert`
   )
   - *Unique-Constraints:* `U1` auf `Username`, `U2` auf `BY-Nummer`, `U3` zusammengesetzt auf `(Nachname, Vorname, Geburtsdatum)`.
   - *Fremdschlüssel:* `aenderer` ist ein rekursiver Fremdschlüssel auf den Benutzer, der die letzte Änderung durchgeführt hat.
4. **`Benutzerart`** (`Benutzerart_ID` [PK], `BA_Bezeichnung` [U1], `Schlüssel`)
   - Rollen im System (z. B. Lehrgangsleiter, Referent, Teilnehmer, Administrator).
5. **`Benutzer-Benutzerart`** (`BBA_ID` [PK], `Benutzer` [U1, FK1], `Benutzerart` [U1, FK2], `stv`)
   - N:M-Auflösung: Welcher Benutzer besitzt welche Rolle? `stv` (stellvertretend) als Beziehungsattribut.
6. **`Benutzerart-Bezirk`** (`BAB_ID` [PK], `Benutzerart` [U1, FK1], `Bezirk` [U1, FK2], `erstellen`)
   - Berechtigung: Darf eine Benutzerart in einem bestimmten Bezirk Lehrgänge erstellen?
7. **`Lizenz`** (`Lizenz_ID` [PK], `Verband` [U1], `Fachsport_ID` [U1], `Bezeichnung`, `Beschreibung`)
8. **`Benutzer-Lizenz`** (`BL_ID` [PK], `Benutzer` [U1, FK1], `Lizenz` [U1, FK2], `Ausstellung`, `Gültigkeit`, `Versand`)
   - Erworbene Lizenzen eines Benutzers mit Datum der Gültigkeit.
9. **`Lehrgang`** (`LG_ID` [PK], `Datum` [U1], `Bezeichnung` [U1], `Bezirk` [FK1], `Ort`, `max_UE`, `Bemerkung`, `Ausschr_URL`)
10. **`LG-Lizenz`** (`LGL_ID` [PK], `Lehrgang` [U1, FK1], `Lizenz` [U1, FK2])
    - Gibt an, für welche Lizenzen ein Lehrgang anrechenbar ist.
11. **`LG-Teilnehmer`** (`TN_ID` [PK], `Benutzer` [U1, FK1], `Lehrgang` [U1, FK2], `Anmeldung`, `zugeteilt`, `eingeladen`)
    - Anmeldung und Status eines Benutzers zu einem Lehrgang.
12. **`LG-Teilnehmer-Lizenz`** (`TNL_ID` [PK], `Lizenz` [PK, FK1], `Benutzer` [PK, FK1, FK2], `Lehrgang` [U1, FK2], `UE`)
    - *Zentrale Prüfungsregel:* Gutschrift der absolvierten Unterrichtseinheiten (UE) auf eine konkrete Lizenz des Teilnehmers.

## 🧮 Beispiele & Rechenwege
### SQL-DDL Ausschnitt zur LWIS-Implementierung:
```sql
CREATE TABLE bezirk (
    bezirk_id       INTEGER PRIMARY KEY,
    bezeichnung     VARCHAR(50) NOT NULL UNIQUE,
    oberbezirk_id   INTEGER,
    CONSTRAINT fk_bezirk_ober FOREIGN KEY (oberbezirk_id)
        REFERENCES bezirk (bezirk_id) ON DELETE SET NULL
);

CREATE TABLE lg_teilnehmer_lizenz (
    tnl_id          INTEGER PRIMARY KEY,
    benutzer_id     INTEGER NOT NULL,
    lehrgang_id     INTEGER NOT NULL,
    lizenz_id       INTEGER NOT NULL,
    ue_anzahl       INTEGER CHECK (ue_anzahl > 0),
    CONSTRAINT fk_tnl_user FOREIGN KEY (benutzer_id) REFERENCES benutzer (benutzer_id),
    CONSTRAINT fk_tnl_lehrgang FOREIGN KEY (lehrgang_id) REFERENCES lehrgang (lg_id),
    CONSTRAINT fk_tnl_lizenz FOREIGN KEY (lizenz_id) REFERENCES lizenz (lizenz_id),
    CONSTRAINT uq_tnl UNIQUE (benutzer_id, lehrgang_id, lizenz_id)
);
```

## ⚠️ Klausurfallen & typische Fehler
- **Rekursive Fremdschlüssel:** Vergiss bei Selbstbezügen (z. B. `Oberbezirk` auf `Bezirk` oder `aenderer` auf `Benutzer`) niemals, dass der Fremdschlüssel auf die eigene Tabelle verweist. Hier muss der Fremdschlüssel **immer `NULL` erlauben**, da der oberste Bezirk (z. B. Landesverband) keinen Oberbezirk hat.
- **Tertiäre Beziehungen (3-stellige Relationen):** Wenn wie bei `LG-Teilnehmer-Lizenz` drei Entitäten zusammenhängen (Teilnehmer bekommt für einen Lehrgang Punkte für eine Lizenz), muss die Zwischentabelle Fremdschlüssel zu allen drei Partnern aufweisen.

## 🧠 Merkhilfen
- **Rekursive Beziehung:** *Die Schlange beißt sich in den Schwanz (Spalte verweist auf den eigenen Primärschlüssel).*
- **N:M-Zwischentabelle:** *Für jede Viele-zu-Viele-Beziehung eine eigene Tabelle mit den beiden Fremdschlüsseln als Unique-Kombination.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Rekursive Beziehung | Verknüpfung einer Entität mit sich selbst (z. B. Hierarchien, Vorgesetzte). |
| Teilschlüssel | Attribut, das schwache Entitäten innerhalb der übergeordneten Entität unterscheidet. |
| Zwischentabelle | Tabelle zur technischen Auflösung von N:M-Beziehungen. |
| Unique Constraint | Schema-Zusicherung, dass eine Attributkombination tabelleweit eindeutig sein muss. |

## ✅ Selbsttest
**F:** Wie wird eine rekursive 1:N-Beziehung wie die Bezirkshierarchie (Bezirk hat Oberbezirk) im relationalen Modell realisiert?
**A:** In der Relation `Bezirk` wird ein Fremdschlüsselattribut `Oberbezirk_ID` aufgenommen, das auf den Primärschlüssel `Bezirk_ID` derselben Tabelle verweist (wobei der Wert für den obersten Bezirk `NULL` ist).

**F:** Welche Tabelle löst die N:M-Beziehung zwischen Lehrgängen und teilnehmenden Benutzern im LWIS auf?
**A:** Die Tabelle `LG-Teilnehmer`, die Fremdschlüssel auf `Lehrgang` und `Benutzer` enthält sowie Beziehungsattribute wie Anmeldedatum und Zuteilungsstatus speichert.

**F:** Warum ist das Attribut `UE` (Unterrichtseinheiten) in `LG-Teilnehmer-Lizenz` und nicht in `LG-Teilnehmer` abgelegt?
**A:** Weil ein Lehrgang für mehrere verschiedene Lizenzen unterschiedliche Unterrichtseinheiten anrechnen kann; die Gutschrift hängt also von der Kombination aus Lehrgang, Teilnehmer und angestrebter Lizenz ab.
