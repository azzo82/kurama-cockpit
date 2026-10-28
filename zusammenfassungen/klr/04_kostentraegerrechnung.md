---
id: klr-04-kostentraegerrechnung
kurs: klr
nr: 4
titel: Kapitel 2.3 Vollkostenrechnung: Kostenträgerrechnung & Kalkulationsverfahren
quellen: KLR - Skript 2026-WS - Kapitel 2.3 Vollkostenrechnung - Kostenträgerrechnung.pdf
seiten: 45
---

> **Kurz gesagt:** Die Kostenträgerrechnung ist die dritte und finale Stufe der Kostenrechnung. Sie beantwortet die Frage: *Wofür sind die Kosten angefallen?* Sie ermittelt die Stückkosten der Produkte (Kostenträgerstückrechnung / Kalkulation) zur Preisfindung und bewertet den Periodenerfolg (Kostenträgerzeitrechnung). Dieses Skript behandelt alle Vorlesungs-Kalkulationsverfahren (einstufige/zweistufige Divisionskalkulation, Äquivalenzziffernkalkulation und die differenzierte Zuschlagskalkulation mit Vorwärts-/Rückwärtsrechnung).

## 🎯 Lernziele
- Die Aufgaben und Arten der Kostenträgerrechnung (Stück- vs. Zeitrechnung, Vor-, mitlaufende und Nachkalkulation) verstehen (S. 5–11).
- Die einstufige und zweistufige Divisionskalkulation bei Bestandsveränderungen fehlerfrei berechnen (S. 17–23).
- Das 5-Schritte-Vorgehen der Äquivalenzziffernkalkulation bei Sortenfertigung sicher anwenden (S. 25–31).
- Das vollständige Kalkulationsschema der differenzierten Zuschlagskalkulation von Materialeinzelkosten bis zum Bruttoverkaufspreis (inkl. Rabatt, Skonto, Gewinn) beherrschen (S. 33–45).

## 📖 Kerninhalte
### 1. Grundlagen & Aufgaben der Kostenträgerrechnung (S. 5–11)
- **Kostenträger:** Die im Unternehmen erstellten Leistungs- und Absatzeinheiten (Endprodukte, Dienstleistungen, Kundenaufträge, interne Projekte).
- **Zwei Rechenwerke:**
  1. **Kostenträgerstückrechnung (Kalkulation):** Ermittlung der Selbstkosten je Erzeugniseinheit (Stück, Stunde, kg). Dient der Preisfindung, Angebotserstellung, Festlegung von Preisuntergrenzen und Bewertung von Lagerbeständen.
  2. **Kostenträgerzeitrechnung (Erfolgsrechnung):** Ermittlung der Gesamtkosten und des Betriebsergebnisses aller Kostenträger innerhalb einer Periode (Gesamtkostenverfahren vs. Umsatzkostenverfahren).
- **Zeitpunkte der Kalkulation (S. 11):**
  - *Vorkalkulation:* Vor Beginn der Leistungserstellung auf Basis von Plan-/Normalkosten zur Angebotserstellung.
  - *Mitlaufende (Zwischen-)Kalkulation:* Während der Fertigung (z. B. Großanlagenbau) zur laufenden Kostenüberwachung.
  - *Nachkalkulation:* Nach Fertigstellung auf Basis tatsächlicher Istkosten zur Soll-Ist-Abweichungsanalyse.

### 2. Die Kalkulationsverfahren im Überblick (S. 12–35)
Die Wahl des Verfahrens richtet sich nach dem Fertigungstyp des Unternehmens:

| Fertigungstyp | Typisches Produktbeispiel | Geeignetes Kalkulationsverfahren |
|---|---|---|
| **Massenfertigung** (Ein-Produkt-Betrieb) | Strom, Zement, Trinkwasser, Mehl | Einstufige / mehrstufige **Divisionskalkulation** |
| **Sortenfertigung** (Verwandte Produktvarianten) | Bierbrauerei, Schrauben, Schokolade, Textilien | **Äquivalenzziffernkalkulation** |
| **Serien- & Einzelfertigung** (Kundenindividuell) | Sondermaschinenbau, Schreinerei, Individualsoftware | **Zuschlagskalkulation** |
| **Kuppelproduktion** (Verbundene Produkte) | Raffinerie (Benzin/Kerosin/Bitumen), Chemie | Restwertmethode / Verteilungsmethode |

### 3. Divisionskalkulation (S. 17–23)
- **Einstufige Divisionskalkulation (keine Bestandsveränderungen, Produktion = Absatz):**
  `Selbstkosten pro Stück (k) = Gesamte Kosten der Periode / Produzierte Menge (x)`
- **Zweistufige Divisionskalkulation (bei Lagerbestandsveränderungen an Fertigerzeugnissen):**
  Herstellkosten beziehen sich auf die Produktionsmenge; Vertriebs- und Verwaltungskosten beziehen sich ausschließlich auf die abgesetzte Menge!
  `Selbstkosten pro Stück (k) = (Herstellkosten / Produktionsmenge) + (Verwaltungs- und Vertriebskosten / Absatzmenge)`

### 4. Äquivalenzziffernkalkulation (S. 25–31)
Wird angewendet, wenn sich Produkte in Material- oder Bearbeitungsaufwand proportional unterscheiden.
- **5-Schritte-Verfahren:**
  1. *Festlegung des Basisprodukts:* Standardprodukt erhält die Äquivalenzziffer `ÄZ = 1,0`.
  2. *Festlegung der ÄZ für Varianten:* Z. B. Variante B benötigt 40 % mehr Holz → `ÄZ_B = 1,4`.
  3. *Berechnung der Rechnungseinheiten (RE):* `RE_i = Produktionsmenge_i * ÄZ_i`. Summe aller RE bilden.
  4. *Kosten je Rechnungseinheit ermitteln:* `Kosten je RE = Gesamtkosten / Gesamtsumme aller RE`.
  5. *Stückkosten je Produktvariante berechnen:* `Stückkosten k_i = Kosten je RE * ÄZ_i`.

### 5. Differenzierte Zuschlagskalkulation (S. 33–45)
Verknüpft Einzelkosten aus dem Material- und Fertigungsbereich mit den im BAB ermittelten Gemeinkostenzuschlagssätzen.

#### Das vollständige Kalkulationsschema (Vorlesungsstandard):
```
  Fertigungsmaterial (Materialeinzelkosten MEK)
+ Materialgemeinkosten (MGK = MEK * MGK-Zuschlagssatz)
= Materialkosten (MK)

  Fertigungslohn (Fertigungseinzelkosten FEK)
+ Fertigungsgemeinkosten (FGK = FEK * FGK-Zuschlagssatz)
+ Sondereinzelkosten der Fertigung (SEK Fertigung, z. B. Spezialwerkzeuge)
= Fertigungskosten (FK)

  Materialkosten (MK)
+ Fertigungskosten (FK)
= HERSTELLKOSTEN DER PRODUKTION (HKP)
+ Minderbestand an unfertigen/fertigen Erzeugnissen (oder - Mehrbestand)
= HERSTELLKOSTEN DES UMSATZES (HKU)

+ Verwaltungsgemeinkosten (VwGK = HKU * VwGK-Zuschlagssatz)
+ Vertriebsgemeinkosten (VtGK = HKU * VtGK-Zuschlagssatz)
+ Sondereinzelkosten des Vertriebs (SEK Vertrieb, z. B. Spezialverpackung, Transportversicherung)
= SELBSTKOSTEN (SK)

+ Gewinnzuschlag (in % der Selbstkosten)
= BARVERKAUFSPREIS (BVP)

+ Kundenskonto (im Hundert: gerechnet auf den Zielverkaufspreis!)
= ZIELVERKAUFSPREIS (ZVP)

+ Kundenrabatt (im Hundert: gerechnet auf den Nettoverkaufspreis!)
= NETTOVERKAUFSPREIS (Listenverkaufspreis netto)

+ Umsatzsteuer (z. B. 19 %)
= BRUTTOVERKAUFSPREIS (Endpreis für Endverbraucher)
```

## 🧮 Beispiele & Rechenwege
### 1. Zweistufige Divisionskalkulation (Übung 2)
Im Quartal produziert die Schreinerei Zirbelnuss 1.000 Vollholz-Hocker, verkauft aber nur 800 Stück (200 Stück gehen ins Fertigteillager).
- Herstellkosten der Periode: 120.000 €
- Verwaltungs- und Vertriebskosten: 32.000 €

**Berechnung:**
- `Herstellkosten je Stück = 120.000 € / 1.000 Stück = 120 €`
- `Verwaltungs-/Vertriebskosten je Stück = 32.000 € / 800 Stück = 40 €`
- `Selbstkosten je abgesetztes Stück = 120 € + 40 € = 160 €`
- *Bilanzansatz für die 200 Hocker im Lager:* Werden zu **Herstellkosten** bewertet (`200 * 120 € = 24.000 €`), da Vertriebskosten noch nicht entstanden sind!

### 2. Vorwärtskalkulation (Zuschlagskalkulation)
Ein individueller Schreibtisch verursacht:
- Materialeinzelkosten (Holz): 400 €
- Fertigungslohn: 300 €
- Aus dem BAB gegebene Zuschlagssätze: MGK = 10 %, FGK = 150 %, VwGK = 8 %, VtGK = 12 %
- Gewinnzuschlag: 10 %, Kundenskonto: 2 %, Kundenrabatt: 10 %

**Rechengang:**
1. MEK = 400 €
2. MGK = 10 % von 400 € = 40 € → **Materialkosten = 440 €**
3. FEK = 300 €
4. FGK = 150 % von 300 € = 450 € → **Fertigungskosten = 750 €**
5. **Herstellkosten (HK) = 440 € + 750 € = 1.190 €**
6. VwGK = 8 % von 1.190 € = 95,20 €
7. VtGK = 12 % von 1.190 € = 142,80 €
8. **Selbstkosten (SK) = 1.190 € + 95,20 € + 142,80 € = 1.428,00 €**
9. + Gewinn (10 % von SK) = 142,80 € → **Barverkaufspreis (BVP) = 1.570,80 €**
10. + Skonto (2 %): BVP entspricht 98 % des Zielverkaufspreises!
    `ZVP = BVP / 0,98 = 1.570,80 € / 0,98 = 1.602,86 €` (Skonto = 32,06 €).
11. + Rabatt (10 %): ZVP entspricht 90 % des Nettoverkaufspreises!
    `Listenpreis netto = ZVP / 0,90 = 1.602,86 € / 0,90 = 1.780,96 €` (Rabatt = 178,10 €).

## ⚠️ Klausurfallen & typische Fehler
- **Divisionskalkulation bei Lageraufbau:** Verwaltungs- und Vertriebskosten dürfen **niemals** durch die Produktionsmenge dividiert werden, sondern **immer nur durch die abgesetzte Menge**!
- **Skonto- und Rabattrechnung (Im Hundert):**
  - Wer `BVP * 1,02` rechnet, fällt durch! Skonto wird vom Zielpreis abgezogen (`BVP = 98 %`, also `ZVP = BVP / (1 - Skontosatz)`).
  - Ebenso beim Rabatt: `ZVP = 90 %`, also `Listenpreis = ZVP / (1 - Rabattsatz)`.
- **Zuschlagsbasis für Verwaltung/Vertrieb:** VwGK und VtGK werden auf die **Herstellkosten des Umsatzes** aufgeschlagen, nicht auf die Selbstkosten oder Einzelkosten!

## 🧠 Merkhilfen
- **Kalkulationsaufbau:** *Material + Fertigung = Herstellkosten. Herstellkosten + Verwaltung/Vertrieb = Selbstkosten. Selbstkosten + Gewinn = Barpreis.*
- **Preiskalkulation "Im Hundert":** *Skonto und Rabatt zieht der Kunde vom höheren Preis ab – deshalb beim Hochrechnen immer durch (100 - %) teilen!*
- **Äquivalenzziffern:** *Multipliziere Menge mit Faktor, teile Gesamtkosten durch Summe der Einheiten, multipliziere zurück mit Faktor.*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Kostenträger | Absatz- oder Lagerleistung, die den betrieblichen Güterverzehr getragen hat. |
| Kostenträgerstückrechnung | Ermittlung der Kosten pro Stück/Einheit (Vorkalkulation, Nachkalkulation). |
| Einstufige Divisionskalkulation | Reines Teilen der Gesamtkosten durch die hergestellte Menge bei Ein-Produkt-Betrieben. |
| Zweistufige Divisionskalkulation | Getrennte Verrechnung von Herstell- und Vertriebskosten bei Bestandsänderungen. |
| Äquivalenzziffernkalkulation | Umrechnung verwandter Sorten auf eine fiktive Standardeinheit. |
| Herstellkosten (HK) | Material- plus Fertigungskosten; gesetzliche Bewertungsobergrenze für Halb- und Fertigerzeugnisse. |
| Selbstkosten (SK) | Herstellkosten zuzüglich Verwaltungs- und Vertriebskosten; langfristige Preisuntergrenze. |

## ✅ Selbsttest
**F:** Warum müssen bei der zweistufigen Divisionskalkulation Herstellkosten und Vertriebskosten durch unterschiedliche Mengen geteilt werden?
**A:** Weil nur produzierte Güter Herstellkosten verursachen (die auch bei Lageraufbau entstehen), während Vertriebs- und Marketingkosten nur für tatsächlich verkaufte (abgesetzte) Erzeugnisse anfallen.

**F:** Wie funktioniert das 5-Schritte-Verfahren der Äquivalenzziffernkalkulation?
**A:** 1. Basisprodukt mit ÄZ = 1 festlegen, 2. ÄZ der Varianten bestimmen, 3. Rechnungseinheiten (Menge * ÄZ) ermitteln und aufsummieren, 4. Stückkosten je Rechnungseinheit (Gesamtkosten / Summe RE) berechnen, 5. Stückkosten je Variante (Stückkosten RE * ÄZ) multiplizieren.

**F:** Ein Produkt hat Herstellkosten von 200 €. Die VwGK betragen 10 %, die VtGK 15 %. Wie hoch sind die Selbstkosten?
**A:** `VwGK = 10 % * 200 € = 20 €`, `VtGK = 15 % * 200 € = 30 €`. Selbstkosten = `200 € + 20 € + 30 € = 250 €`.

**F:** Ein Kunde erhält 3 % Skonto. Der Barverkaufspreis beträgt 970 €. Wie hoch ist der Zielverkaufspreis?
**A:** Da der Kunde 3 % vom Zielverkaufspreis abzieht, entspricht der Barverkaufspreis 97 % des Zielverkaufspreises: `Zielverkaufspreis = 970 € / 0,97 = 1.000 €`.

**F:** Was ist der betriebswirtschaftliche Unterschied zwischen Herstellkosten und Selbstkosten?
**A:** Herstellkosten umfassen ausschließlich material- und fertigungsbezogene Kosten; Selbstkosten enthalten zusätzlich die Verwaltungs- und Vertriebsgemeinkosten und stellen die langfristige Preisuntergrenze dar.
