---
id: itmr-05-v4-bewertung
kurs: itmr
nr: 5
titel: V4 Bewertung von IT-Projekten: Kapitalwertmethode, Risikoanalyse & (μ,σ)-Entscheidungsregel
quellen: ITMR_V4_Bewertung.pdf
seiten: 38
---

> **Kurz gesagt:** Wie entscheidet man objektiv, ob sich ein IT-Projekt wirtschaftlich lohnt – insbesondere wenn zukünftige Rückflüsse unsicher sind? Diese Vorlesung von Prof. Dr. Björn Häckel schlägt den Bogen von der klassischen **Kapitalwertmethode ($KW_0$) unter Sicherheit** über **Zustandsbäume und Wahrscheinlichkeitsrechnung unter Risiko** bis hin zur **$(\mu,\sigma)$-Entscheidungsregel**, dem **Pareto-Kriterium**, dem **Sicherheitsäquivalent (Bernoulli-Prinzip)** und **Indifferenzkurven** für risikoscheue, risikoneutrale und risikofreudige Entscheider.

## 🎯 Lernziele
- Die drei fundamentalen **Entscheidungssituationen** (*Sicherheit*, *Risiko*, *Ungewissheit*) sauber voneinander abgrenzen (S. 3, 5, 14).
- Den **Perioden-Cash-Flow ($Z_t$)**, den **Barwert ($BW_0$)** und den **Kapitalwert ($KW_0$)** berechnen sowie die Entscheidungsregeln für sich ausschließende und unabhängige IT-Projekte anwenden (S. 6–12).
- Erklären, warum klassische deterministische Investitionsrechnungen bei **IT-Projekten** häufig zu kurz greifen (S. 13).
- Mehrstufige **Zustands- und Entscheidungsbäume** mit bedingten Wahrscheinlichkeiten, Pfadwahrscheinlichkeiten und dem **Erwartungswert $E(KW_0)$** durchrechnen (S. 15–24).
- Den Unterschied zwischen **objektiver Rationalität** und **subjektiver Rationalität** (*Paralysis by Analysis*) in der normativen Entscheidungstheorie erläutern (S. 25–26).
- Konkurrierende IT-Projekte anhand von **Erwartungswert ($\mu$)**, **Varianz ($\sigma^2$)** bzw. **Standardabweichung ($\sigma$)**, dem **Pareto-Kriterium** sowie der **$(\mu,\sigma)$-Präferenzfunktion $\Phi(\mu,\sigma) = \mu - \frac{\alpha}{2}\sigma^2$** bewerten und die zugehörigen **Indifferenzkurven** skizzieren (S. 27–37).

## 📖 Kerninhalte

### 1. Einordnung & Entscheidungssituationen (S. 2–5, 14)
- **Einordnung im Kurs:** Nach Einführung, Initiierung, Planung und Steuerung folgen nun die **Strategischen Entscheidungen**: *Bewertung von IT-Projekten* (Einzelbewertung/Vergleich) und *IT-Projektportfolio*.
- **Leitmotiv (Warren Buffett, S. 4):** *„Frage nicht nach dem Preis, den Du für ein Unternehmen zahlst, sondern nach dem Wert, den Du für Dein Geld bekommst."*
- **Klassifikation unternehmerischer Entscheidungssituationen (S. 5 & 14):**
  ```
                 Unternehmerische Entscheidungen unter ...
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
       Sicherheit                                     Unsicherheit
  (künftige Entwicklungen                     (künftige Entwicklungen sind
     sind exakt bekannt)                         nicht sicher bekannt)
                                                            │
                                        ┌───────────────────┴───────────────────┐
                                        ▼                                       ▼
                                     Risiko                               Ungewissheit
                          (objektive oder subjektive              (keinerlei Informationen über
                         Wahrscheinlichkeiten liegen vor)         Verteilung der Umweltzustände)
  ```

---

### 2. Projektbewertung unter Sicherheit: Cash-Flow & Kapitalwertmethode (S. 6–13)

#### a) Definition & Bedeutung des Perioden-Cash-Flows $Z_t$ (S. 6–7)
- **Berechnungsschema für den Perioden-Cash-Flow $Z_t$:**
  $$\begin{aligned}
  &\text{Laufende Einzahlungen} && + E_t \\
  -\ &\text{laufende Auszahlungen} && \\
  -\ &\text{(Fremdkapital-)Zinsen} && - A_t \\
  -\ &\text{(Steuern} - \text{Subventionen)} && \\
  \hline
  =\ &\textbf{Cash-Flow} && \mathbf{= Z_t = E_t - A_t}
  \end{aligned}$$
- **Warum Cash-Flows statt Gewinn/GuV? (S. 6):**
  - $Z_t$ ist der erwirtschaftete **Einzahlungsüberschuss**, der direkt für Gewinnausschüttungen und zur Deckung von Investitionsauszahlungen zur Verfügung steht.
  - $Z_t$ ist an jedem Periodenende **objektiv feststellbar** und **unabhängig von bilanzpolitischen Bewertungsfragen** (z. B. Abschreibungsmethoden oder Rückstellungen in der GuV / im Betriebsergebnis).
- **Vereinfachende zeitliche Annahmen (S. 7):**
  1. Die Anfangsauszahlung $I_0$ fällt exakt im Zeitpunkt **$t = 0$** an.
  2. Alle weiteren Zahlungen treten jeweils **nachschüssig am Periodenende** in den Zeitpunkten $t = 1, 2, 3, \dots, n$ auf.
  3. Eine Periode $]t-1; t]$ entspricht standardmäßig **einem Jahr**.

#### b) Kalkulationszinssatz $i$, Barwert $BW_0$ & Kapitalwert $KW_0$ (S. 8–11)
- **Kalkulationszinssatz $i$ (S. 8):** Repräsentiert die **Finanzierungskosten** der Investition bzw. die **Opportunitätskosten** (entgangene Erträge alternativer Geldanlagen am Kapitalmarkt). Er macht Zahlungen zu unterschiedlichen Zeitpunkten durch **Aufzinsung** und **Abzinsung (Diskontierung)** zu einem gemeinsamen Bezugszeitpunkt vergleichbar.
- **Prinzip der Abzinsung (S. 9):**
  - Welcher Betrag muss heute ($t=0$) angelegt werden, um inkl. Zins und Zinseszins in $t$ einen bestimmten Betrag zu erhalten?
  - **Abzinsungsfaktor:** $(1 + i)^{-t} = \frac{1}{(1 + i)^t}$.
  - *Beispiel (S. 9):* Einzahlung von $100\text{ GE}$ in $t_5$ bei $i = 3{,}5\,\%$ ($0{,}035$):
    $$BW_0 = \frac{100}{(1 + 0{,}035)^5} = 100 \cdot (1{,}035)^{-5} = 100 \cdot 0{,}8419 = 84{,}20\text{ GE}$$
- **Barwert ($BW_0$) vs. Kapitalwert ($KW_0$) (S. 10):**
  - **Barwert $BW_0$:** Summe der auf $t=0$ abgezinsten künftigen Einzahlungsüberschüsse *ohne* Abzug der Anfangsinvestition:
    $$BW_0 = \sum_{t=1}^{n} \frac{E_t - A_t}{(1 + i_t)^t}$$
    *(Im Folienbeispiel S. 10 mit $Z_1 = \dots = Z_4 = 400$ und $i = 10\,\%$: $BW_0 = \frac{400}{1{,}1} + \frac{400}{1{,}1^2} + \frac{400}{1{,}1^3} + \frac{400}{1{,}1^4} \approx 1.276$).*
  - **Kapitalwert $KW_0$ (Net Present Value, NPV):** Summe der Barwerte **aller** mit der Investition verbundenen Zahlungen **inklusive** der Anfangsinvestition $-I_0$:
    $$KW_0 = -I_0 + \sum_{t=1}^{n} \frac{E_t - A_t}{(1 + i_t)^t} = -I_0 + BW_0$$
    *(Im Folienbeispiel S. 10 mit $I_0 = 1.000$: $KW_0 = -1.000 + 1.276 = +276$).*

- **Ökonomische Interpretation & Entscheidungsregeln (S. 11):**
  - **$KW_0 > 0$:** Die Investition erwirtschaftet mehr als die geforderte Mindestverzinsung $i$ und **erhöht den Unternehmenswert** (Cash-Flow-Barwert).
  - **$KW_0 = 0$:** Die Investition verzinst das eingesetzte Kapital exakt zum Kalkulationszins $i$ (Unternehmenswert bleibt unverändert).
  - **$KW_0 < 0$:** Die Investition vernichtet Unternehmenswert (unvorteilhaft).
  - **Entscheidungsregel (A) bei sich gegenseitig ausschließenden Alternativen:** Wähle die Alternative mit dem **höchsten positiven Kapitalwert $KW_0$**!
  - **Entscheidungsregel (B) bei sich nicht ausschließenden (unabhängigen) Projekten:** Führe **alle** Projekte durch, die einen **positiven Kapitalwert $KW_0 > 0$** aufweisen!

#### c) Warum die klassische Kapitalwertmethode bei IT-Projekten oft zu kurz greift (S. 13)
Der klassische Dreischritt (*Prognose der Zahlungsströme $\to$ Diskontierung $\to$ deterministische Entscheidung*) stößt bei IT-Projekten an **vier zentrale Grenzen**:
1. **Kurze Technologiezyklen & volatile Märkte:** Exakte mehrjährige Cashflow-Prognosen sind bei innovativen IT-Vorhaben kaum seriös möglich.
2. **Schwer quantifizierbare Nutzenpotenziale:** Strategische Vorteile, höhere Datenqualität oder Kundenzufriedenheit lassen sich zu Projektbeginn nur schwer in fixen Euro-Einzahlungen abbilden.
3. **Schwer planbare Folgekosten:** Während die Anfangsinvestition ($I_0$) meist recht fix kalkuliert werden kann, schwanken laufende Betriebs-, Wartungs-, Lizenz- und Cloudkosten stark.
4. **Nicht-linearer, iterativer Projektverlauf:** IT-Projekte werden oft agil/iterativ gesteuert, sodass sich Scope und Zielsetzung während der Laufzeit fortlaufend ändern (Handlungsspielräume!).

---

### 3. Projektbewertung unter Risiko: Zustandsbäume & Wahrscheinlichkeiten (S. 14–26)

#### a) Umweltzustände & Wahrscheinlichkeitsarten (S. 16–19)
- In jeder Periode werden mögliche Zukunftsszenarien als **Umweltzustände $s_j$** in einem **Zustands- bzw. Entscheidungsbaum** modelliert, auf deren Eintritt der Entscheider keinen Einfluss hat.
- **Drei Arten von Wahrscheinlichkeiten (S. 19):**
  1. **Objektive Wahrscheinlichkeit (bekannt):** Aus kombinatorisch-mathematischen Überlegungen exakt bestimmbar (z. B. Würfeln, Lotto).
  2. **Objektive Wahrscheinlichkeit (geschätzt):** Aus großen historischen Datenmengen und empirischen Häufigkeiten abgeleitet (z. B. Versicherungsstatistiken, Ausfallraten von Serverfestplatten).
  3. **Subjektive Wahrscheinlichkeit:** Marktentwicklungen bei disruptiven IT-Innovationen sind keine wiederholbaren Zufallsexperimente; ein erfahrener Entscheider schätzt die Eintrittswahrscheinlichkeiten $p_j$ anhand seines Markt- und Fachwissens.

#### b) Grundregeln der Wahrscheinlichkeitsrechnung & Pfadregel (S. 21–24)
- **Axiome für Ereignisse $A, B \subset \Omega$ (Ergebnismenge $\Omega$, S. 22):**
  - Nichtnegativität: $P(A) \ge 0$ für jedes Ereignis $A \subset \Omega$.
  - Normierung: $P(\Omega) = 1$ (die Summe aller sich ausschließenden Elementarereignisse einer Stufe ist immer $100\,\% = 1{,}0$).
  - Additivität bei **disjunkten** (sich gegenseitig ausschließenden) Ereignissen: $P(A \cup B) = P(A) + P(B)$.
- **Bedingte Wahrscheinlichkeit & Unabhängigkeit (S. 23):**
  - Wahrscheinlichkeit von $B$ unter der Bedingung, dass $A$ bereits eingetreten ist:
    $$P(B \mid A) = \frac{P(A \cap B)}{P(A)} \quad \Longleftrightarrow \quad P(A \cap B) = P(A) \cdot P(B \mid A)$$
  - **Pfadmultiplikationsregel im Zustandsbaum (S. 21):** Die Wahrscheinlichkeit eines Endknotens ergibt sich aus dem **Produkt der Einzel- bzw. bedingten Wahrscheinlichkeiten entlang des Pfades** (z. B. $P(s_4) = P(s_1) \cdot P(s_4 \mid s_1)$).
  - **Stochastische Unabhängigkeit:** Liefert das Eintreten von $A$ keinerlei Information über $B$, heißen $A$ und $B$ unabhängig und es gilt:
    $$P(A \cap B) = P(A) \cdot P(B) \quad \text{sowie} \quad P(B \mid A) = P(B)$$
- **Erwartungswert einer diskreten Zufallsvariable $X$ (S. 24):**
  $$\mu = E[X] = \sum_{j=1}^{n} x_j \cdot p_j$$

#### c) Normative Entscheidungstheorie: Objektive vs. Subjektive Rationalität (S. 25–26)
- **Grundmodell der Entscheidungsmatrix unter Risiko (S. 25):**
  - Der Entscheider wählt zwischen $m > 1$ **Handlungsalternativen $a_i$** ($i = 1, \dots, m$, z. B. IT-Projekte).
  - Die Umwelt realisiert einen von $n$ **Umweltzuständen $s_j$** mit bekannter Wahrscheinlichkeit $p_j$ ($j = 1, \dots, n$).
  - Das resultierende **Ergebnis $x_{ij}$** (z. B. der Kapitalwert von Projekt $a_i$ im Zustand $s_j$) bildet eine Zufallsvariable $X_i$.
- **Objektive vs. Subjektive Rationalität (S. 26):**
  - **Objektive Rationalität:** Klassische theoretische Annahme, dass alle Alternativen, Zustände und Wahrscheinlichkeiten zum Entscheidungszeitpunkt **kostenlos bekannt** sind und das Denken, Rechnen und Bewerten weder Zeit noch Geld kostet.
  - **Subjektive Rationalität:** In der Praxis kostet Informationsbeschaffung Zeit und Geld. Es kann daher vollkommen **rational** sein, auf eine noch tiefere Analyse zu verzichten, um eine **„Paralysis by Analysis"** (Handlungsunfähigkeit durch endloses Analysieren) zu vermeiden!

---

### 4. Risiko-Rendite-Steuerung: Varianz, Pareto-Kriterium & $(\mu,\sigma)$-Regel (S. 27–37)

#### a) Risikomaß: Varianz $\sigma^2$ und Standardabweichung $\sigma$ (S. 29–30)
- Der Erwartungswert $\mu_i = E[X_i]$ allein ist **blind für das Risiko** (er ignoriert, wie stark die Ergebnisse schwanken!).
- **Varianz $\sigma_i^2$:** Mittlere quadratische Abweichung der möglichen Ergebnisse $x_{ij}$ vom Erwartungswert $\mu_i$:
  $$\sigma_i^2 = \sum_{j=1}^{n} (x_{ij} - \mu_i)^2 \cdot p_j$$
- **Standardabweichung $\sigma_i$:** Quadratwurzel der Varianz (hat dieselbe Einheit wie $\mu_i$, z. B. T€):
  $$\sigma_i = \sqrt{\sigma_i^2} = \sqrt{\sum_{j=1}^{n} (x_{ij} - \mu_i)^2 \cdot p_j}$$
- *Wichtig:* Varianz und Standardabweichung messen Risiko als **beidseitige Abweichung** (sowohl negative Unterschreitungen als auch positive Überschreitungen von $\mu_i$ erhöhen $\sigma_i$).

#### b) Das Pareto-Kriterium (Dominanzprinzip für Risikoscheue, S. 31)
- **Definition Pareto-Effizienz:** Ein Projekt ist **Pareto-effizient**, wenn es **kein anderes Projekt** gibt, das bezüglich eines der beiden Kriterien ($\mu$ oder $\sigma$) besser ist, ohne gleichzeitig bezüglich des jeweils anderen Kriteriums schlechter zu sein.
- Für einen **risikoscheuen (risikoaversen)** Entscheider ist ein Projekt umso attraktiver, je **höher $\mu$** und je **kleiner $\sigma$** ist (im $(\sigma,\mu)$-Diagramm also möglichst weit **links oben**!).
- Wird ein Projekt von einem anderen dominiert (gleiches $\mu$ bei höherem $\sigma$, oder kleineres $\mu$ bei gleichem/höherem $\sigma$), scheidet es sofort aus. Bleiben mehrere Pareto-effiziente Projekte übrig (z. B. $a_1$ mit kleinerem Risiko vs. $a_4$ mit höherem Erwartungswert), braucht man die individuelle Risikoneigung des Entscheiders!

#### c) Präferenzfunktional $\Phi(X)$, $(\mu,\sigma)$-Regel & Bernoulli-Prinzip (S. 32–36)
- **Präferenzfunktional $\Phi$ (S. 32–33):** Ordnet jeder Zufallsvariable $X_i$ eine eindeutige reelle Bewertungszahl $\Phi(X_i)$ zu, sodass gilt:
  $$\Phi(X_1) \ge \Phi(X_2) \quad \Longleftrightarrow \quad X_1 \succcurlyeq X_2 \quad (\text{Projekt 1 wird Projekt 2 vorgezogen})$$
  Hängt $\Phi$ nur von $\mu$ und $\sigma$ ab, spricht man von einer **$(\mu,\sigma)$-Entscheidungsregel** $\Phi(\mu,\sigma)$.
- **Verbindung zum Bernoulli-Prinzip & Sicherheitsäquivalent $S$ (S. 34):**
  - Im Allgemeinen verstößt eine beliebige $(\mu,\sigma)$-Regel manchmal gegen die Axiome des Bernoulli-Prinzips (Erwartungsnutzentheorie).
  - **Berühmter Spezialfall (Freund / Chipman, S. 34):** Ist der Kapitalwert **normalverteilt** ($X \sim N(\mu,\sigma)$) und besitzt der Entscheider eine **exponentielle Risikonutzenfunktion** mit konstanter absoluter Risikoaversion $r(x) = \alpha$:
    $$u(x) = 1 - e^{-\alpha x} \quad \Longleftrightarrow \quad r(x) = \alpha$$
    dann ist die folgende **$(\mu,\sigma)$-Entscheidungsregel exakt mit dem Bernoulli-Prinzip verträglich** und entspricht zugleich dem **Sicherheitsäquivalent $S$** (dem sicheren Betrag, den der Entscheider genauso hoch schätzt wie das unsichere Projekt):
    $$\boxed{\Phi(\mu, \sigma) = S = u^{-1}\big(E[u(X)]\big) = \mu - \frac{\alpha}{2} \cdot \sigma^2}$$

- **Die drei Risikoeinstellungen & ihre Indifferenzkurven (S. 35–36):**
  > Auf einer **Indifferenzkurve** liegen alle $(\mu,\sigma)$-Kombinationen, die für den Entscheider exakt denselben Präferenzwert $\Phi(\mu,\sigma) = \text{const.}$ (dasselbe Sicherheitsäquivalent) besitzen. Durch Umstellen folgt die Kurvengleichung im $(\sigma,\mu)$-Diagramm:
  > $$\mu(\sigma) = \text{const.} + \frac{\alpha}{2} \cdot \sigma^2$$

  | Risikotyp | Parameter $\alpha$ | Wirkung von Risiko $\sigma$ auf $\Phi(\mu,\sigma)$ | Verlauf der Indifferenzkurven im $(\sigma,\mu)$-Diagramm |
  |---|:---:|---|---|
  | **Risikoavers *(risikoscheu)*** | **$\alpha > 0$** *(z. B. $\alpha = +0{,}2$)* | **Negativ:** $\frac{\alpha}{2}\sigma^2$ wird als **Risikoprämie** vom Erwartungswert $\mu$ abgezogen. Höheres $\sigma$ braucht höheres $\mu$ als Ausgleich! | **Steigend (konvex nach oben):** Je weiter rechts ($\sigma \uparrow$), desto höher muss $\mu$ steigen. |
  | **Risikoneutral** | **$\alpha = 0$** | **Neutral:** $\Phi(\mu,\sigma) = \mu$. Die Streuung $\sigma$ spielt für die Bewertung **keine Rolle**. | **Waagerechte Geraden:** Parallel zur $\sigma$-Achse. |
  | **Risikofreudig *(risikosympathisierend)*** | **$\alpha < 0$** *(z. B. $\alpha = -0{,}2$)* | **Positiv:** Da $-\frac{\alpha}{2} > 0$, **erhöht** eine größere Streuung $\sigma^2$ den Präferenzwert $\Phi$! | **Fallend (konkav nach unten):** Für mehr Risiko ($\sigma \uparrow$) akzeptiert der Entscheider sogar ein geringeres $\mu$. |

---

## 🧮 Beispiele & Rechenwege

### 1. Durchgehendes Beispiel A: Zweistufiger Zustandsbaum (Disruptive Technologie, S. 12, 17, 20–24)
**Ausgangsdaten:**
- Sichere Anfangsauszahlung in $t=0$: $I_0 = -20\text{ T€}$, Kalkulationszinssatz $i = 7\,\%$ ($0{,}07$).
- Unsichere Einzahlungen in $t=1$ (Zustände $s_1, s_2, s_3$) und $t=2$ (Endzustände $s_4 \dots s_9$):

| Pfad ($t_0 \to t_1 \to t_2$) | $E_1$ ($t=1$) | $P(s_{t1})$ | $E_2$ ($t=2$) | $P(s_{t2} \mid s_{t1})$ | Kapitalwert $KW_0 = -20 + \frac{E_1}{1{,}07} + \frac{E_2}{1{,}07^2}$ *(gerundet)* | Pfadwahrscheinlichkeit $P(KW_0) = P(s_{t1}) \cdot P(s_{t2} \mid s_{t1})$ |
|---|---:|---:|---:|---:|---:|---:|
| **$s_0 \to s_1 \to s_4$** | $0\text{ T€}$ | $0{,}3$ | $0\text{ T€}$ | $0{,}7$ | $-20 + 0 + 0 = \mathbf{-20\text{ T€}}$ | $0{,}3 \cdot 0{,}7 = \mathbf{0{,}21}$ |
| **$s_0 \to s_1 \to s_5$** | $0\text{ T€}$ | $0{,}3$ | $5\text{ T€}$ | $0{,}3$ | $-20 + 0 + \frac{5}{1{,}1449} \approx \mathbf{-16\text{ T€}}$ | $0{,}3 \cdot 0{,}3 = \mathbf{0{,}09}$ |
| **$s_0 \to s_2 \to s_6$** | $15\text{ T€}$ | $0{,}3$ | $5\text{ T€}$ | $0{,}5$ | $-20 + \frac{15}{1{,}07} + \frac{5}{1{,}1449} \approx \mathbf{-2\text{ T€}}$ | $0{,}3 \cdot 0{,}5 = \mathbf{0{,}15}$ |
| **$s_0 \to s_2 \to s_7$** | $15\text{ T€}$ | $0{,}3$ | $15\text{ T€}$ | $0{,}5$ | $-20 + 14{,}02 + 13{,}10 \approx \mathbf{+7\text{ T€}}$ | $0{,}3 \cdot 0{,}5 = \mathbf{0{,}15}$ |
| **$s_0 \to s_3 \to s_8$** | $30\text{ T€}$ | $0{,}4$ | $15\text{ T€}$ | $0{,}1$ | $-20 + 28{,}04 + 13{,}10 \approx \mathbf{+21\text{ T€}}$ | $0{,}4 \cdot 0{,}1 = \mathbf{0{,}04}$ |
| **$s_0 \to s_3 \to s_9$** | $30\text{ T€}$ | $0{,}4$ | $20\text{ T€}$ | $0{,}9$ | $-20 + 28{,}04 + 17{,}47 \approx \mathbf{+26\text{ T€}}$ | $0{,}4 \cdot 0{,}9 = \mathbf{0{,}36}$ |
| **Summe (Kontrolle!)** | | $\mathbf{1{,}0}$ | | | | $\mathbf{1{,}00}$ |

**Berechnung des erwarteten Kapitalwerts $E(KW_0)$ (S. 24):**
$$\begin{aligned}
E(KW_0) &= (-20) \cdot 0{,}21 + (-16) \cdot 0{,}09 + (-2) \cdot 0{,}15 + 7 \cdot 0{,}15 + 21 \cdot 0{,}04 + 26 \cdot 0{,}36 \\
&= -4{,}20 - 1{,}44 - 0{,}30 + 1{,}05 + 0{,}84 + 9{,}36 = \mathbf{5{,}31\text{ T€}}
\end{aligned}$$
- *Zusatzcheck für die Klausur:* Mit welcher Wahrscheinlichkeit ist der Kapitalwert dieses Projekts **negativ** (Verlustgefahr)?
  Summe der disjunkten Verlust-Endknoten ($s_4, s_5, s_6$): $P(KW_0 < 0) = 0{,}21 + 0{,}09 + 0{,}15 = \mathbf{0{,}45 = 45\,\%}$!

---

### 2. Durchgehendes Beispiel B: Vergleich von 4 IT-Projekten nach $\mu$, $\sigma$, Pareto & $(\mu,\sigma)$-Regel (S. 27–36)
Gegeben sind vier sich gegenseitig ausschließende IT-Projekte $a_1 \dots a_4$ und drei Umweltzustände mit $p_1 = 0{,}3$, $p_2 = 0{,}3$, $p_3 = 0{,}4$:

| Projekt $a_i$ | $s_1$ ($0{,}3$) | $s_2$ ($0{,}3$) | $s_3$ ($0{,}4$) | Erwartungswert $\mu_i = \sum x_{ij} p_j$ | Varianz $\sigma_i^2 = \sum (x_{ij}-\mu_i)^2 p_j$ | Standardabw. $\sigma_i = \sqrt{\sigma_i^2}$ |
|---|---:|---:|---:|---:|---:|---:|
| **Projekt 1 ($a_1$)** | $25$ | $17$ | $32$ | $25\cdot 0{,}3 + 17\cdot 0{,}3 + 32\cdot 0{,}4 = \mathbf{25{,}4}$ | $(-0{,}4)^2\cdot 0{,}3 + (-8{,}4)^2\cdot 0{,}3 + 6{,}6^2\cdot 0{,}4 = \mathbf{38{,}64}$ | $\sqrt{38{,}64} = \mathbf{6{,}22}$ |
| **Projekt 2 ($a_2$)** | $20{,}5$ | $-13{,}5$ | $18{,}25$ | $6{,}15 - 4{,}05 + 7{,}30 = \mathbf{9{,}4}$ | $11{,}1^2\cdot 0{,}3 + (-22{,}9)^2\cdot 0{,}3 + 8{,}85^2\cdot 0{,}4 = \mathbf{225{,}6}$ | $\sqrt{225{,}6} = \mathbf{15{,}02}$ |
| **Projekt 3 ($a_3$)** | $1$ | $17$ | $10$ | $0{,}3 + 5{,}1 + 4{,}0 = \mathbf{9{,}4}$ | $(-8{,}4)^2\cdot 0{,}3 + 7{,}6^2\cdot 0{,}3 + 0{,}6^2\cdot 0{,}4 = \mathbf{38{,}64}$ | $\sqrt{38{,}64} = \mathbf{6{,}22}$ |
| **Projekt 4 ($a_4$)** | $0$ | $44{,}5$ | $55$ | $0 + 13{,}35 + 22{,}0 = \mathbf{35{,}35}$ | $(-35{,}35)^2\cdot 0{,}3 + 9{,}15^2\cdot 0{,}3 + 19{,}65^2\cdot 0{,}4 = \mathbf{554{,}45}$ | $\sqrt{554{,}45} = \mathbf{23{,}55}$ |

**Schritt 1 – Pareto-Dominanzprüfung (für risikoaverse Entscheider, S. 31):**
- **$a_1$ dominiert $a_3$:** Beide haben exakt dasselbe Risiko ($\sigma = 6{,}22$), aber $a_1$ hat einen viel höheren Erwartungswert ($\mu_1 = 25{,}4 > \mu_3 = 9{,}4$).
- **$a_1$ und $a_3$ dominieren $a_2$:** $a_2$ hat nur $\mu_2 = 9{,}4$, aber ein viel höheres Risiko ($\sigma_2 = 15{,}02 > 6{,}22$).
- **Pareto-effiziente Projekte:** Nur **$a_1$** (geringes Risiko, guter Ertrag) und **$a_4$** (höchster Ertrag $\mu_4 = 35{,}35$, aber auch höchstes Risiko $\sigma_4 = 23{,}55$) sind Pareto-effizient!

**Schritt 2 – Präferenzwerte $\Phi(\mu, \sigma) = \mu - \frac{\alpha}{2} \cdot \sigma^2$ für drei Unternehmertypen (S. 36):**
> **Achtung beim Nachrechnen:** In die Formel $\Phi(\mu,\sigma) = \mu - \frac{\alpha}{2} \cdot \sigma^2$ wird die **Varianz $\sigma^2$** eingesetzt (z. B. $38{,}64$ bzw. $554{,}45$), nicht die einfache Standardabweichung $\sigma$! Bei $\alpha = \pm 0{,}2$ ist $\frac{\alpha}{2} = \pm 0{,}1$:

| Projekt | **1. Risikofreudig ($\alpha = -0{,}2$)**<br>$\Phi = \mu + 0{,}1 \cdot \sigma^2$ | **2. Risikoneutral ($\alpha = 0$)**<br>$\Phi = \mu$ | **3. Risikoavers ($\alpha = +0{,}2$)**<br>$\Phi = \mu - 0{,}1 \cdot \sigma^2$ |
|---|---|---|---|
| **Projekt 1 ($a_1$)** | $25{,}4 + 0{,}1 \cdot 38{,}64 = \mathbf{29{,}26}$ | $\mathbf{25{,}40}$ | $25{,}4 - 0{,}1 \cdot 38{,}64 = \mathbf{21{,}54}$ 🏆 |
| **Projekt 2 ($a_2$)** | $9{,}4 + 0{,}1 \cdot 225{,}6 = \mathbf{31{,}96}$ | $\mathbf{9{,}40}$ | $9{,}4 - 0{,}1 \cdot 225{,}6 = \mathbf{-13{,}16}$ |
| **Projekt 3 ($a_3$)** | $9{,}4 + 0{,}1 \cdot 38{,}64 = \mathbf{13{,}26}$ | $\mathbf{9{,}40}$ | $9{,}4 - 0{,}1 \cdot 38{,}64 = \mathbf{5{,}54}$ |
| **Projekt 4 ($a_4$)** | $35{,}35 + 0{,}1 \cdot 554{,}45 = \mathbf{90{,}81}$ 🏆 | $\mathbf{35{,}35}$ 🏆 | $35{,}35 - 0{,}1 \cdot 554{,}45 = \mathbf{-20{,}11}$ |
| **Rangfolge ($\prec$)** | $a_3 \prec a_1 \prec a_2 \prec \mathbf{a_4}$ | $a_2 \sim a_3 \prec a_1 \prec \mathbf{a_4}$ | $a_4 \prec a_2 \prec a_3 \prec \mathbf{a_1}$ |

---

## ⚠️ Klausurfallen & typische Fehler
1. **$\sigma$ statt $\sigma^2$ in $\Phi(\mu,\sigma) = \mu - \frac{\alpha}{2}\sigma^2$ einsetzen:** Häufigster Rechenfehler in der Klausur! Wenn in einer Aufgabe $\sigma = 6{,}22$ gegeben ist, musst du zuerst quadrieren ($\sigma^2 = 38{,}64$), bevor du mit $\frac{\alpha}{2}$ multiplizierst!
2. **Anfangsauszahlung $I_0$ abzinsen oder vergessen:** $I_0$ fällt bereits in $t=0$ an und wird daher **nicht** abgezinst ($(1+i)^0 = 1$), muss aber beim Kapitalwert $KW_0 = -I_0 + BW_0$ zwingend abgezogen werden!
3. **Wahrscheinlichkeiten $p_j$ bei der Varianzberechnung vergessen oder quadrieren:** In $\sigma^2 = \sum (x_{ij} - \mu)^2 \cdot p_j$ wird **nur die Klammer $(x_{ij} - \mu)$ quadriert**, die Wahrscheinlichkeit $p_j$ wird **einfach** dazu multipliziert!
4. **Risikofreudiger Entscheider und Pareto-Dominanz:** Für den Risikofreudigen ($\alpha = -0{,}2$) ist Projekt $a_2$ ($\Phi = 31{,}96$) plötzlich besser als $a_1$ ($\Phi = 29{,}26$), weil er die extrem hohe Varianz ($\sigma_2^2 = 225{,}6$) positiv bewertet!

## 🧠 Merkhilfen
- **Barwert vs. Kapitalwert:** *Der **B**arwert schaut nur nach vorn (Summe abgezinster Rückflüsse), der **K**apitalwert zieht die **K**aufsumme $I_0$ gleich ab ($KW_0 = -I_0 + BW_0$).*
- **Risiko vs. Ungewissheit:** *Bei **Risiko** kannst du würfeln (Wahrscheinlichkeiten bekannt), bei **Ungewissheit** tappt man völlig im Dunkeln (keine Wahrscheinlichkeiten).*
- **$\alpha$-Vorzeichen in $\Phi = \mu - \frac{\alpha}{2}\sigma^2$:**
  - *$\alpha > 0$ = **A**vers (zieht Risiko ab, Kurve steigt nach oben).*
  - *$\alpha = 0$ = Neutral (Risiko fällt weg, Kurve flach).*
  - *$\alpha < 0$ = Zocker/risikofreudig (Minus mal Minus gibt Plus – Risiko gibt Bonus!).*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Perioden-Cash-Flow ($Z_t$) | Objektiver Einzahlungsüberschuss ($E_t - A_t$) einer Periode, unabhängig von Bilanzpolitik. |
| Kalkulationszinssatz ($i$) | Mindestverzinsungsanspruch (Finanzierungs- bzw. Opportunitätskosten) zur Diskontierung. |
| Barwert ($BW_0$) | Summe aller auf $t=0$ abgezinsten künftigen Zahlungsüberschüsse. |
| Kapitalwert ($KW_0$) | Barwert abzüglich Anfangsauszahlung ($-I_0 + BW_0$); vorteilhaft ab $KW_0 > 0$. |
| Entscheidung unter Risiko | Zukunft ist unsicher, aber für die Umweltzustände liegen objektive/subjektive Wahrscheinlichkeiten vor. |
| Pareto-Effizienz | Kein anderes Projekt hat höheren Erwartungswert $\mu$ bei maximal gleichem Risiko $\sigma$ (bzw. kleineres $\sigma$ bei mind. gleichem $\mu$). |
| Sicherheitsäquivalent ($S$) | Sicherer Geldbetrag, der für den Entscheider denselben Nutzen hat wie die unsichere Zufallsvariable ($S = \mu - \frac{\alpha}{2}\sigma^2$). |
| Indifferenzkurve | Geometrischer Ort aller $(\mu,\sigma)$-Kombinationen mit identischem Präferenzwert $\Phi(\mu,\sigma) = \text{const.}$ |

## ✅ Selbsttest
**F:** Worin unterscheiden sich eine Entscheidung unter Risiko und eine Entscheidung unter Ungewissheit?
**A:** Beide gehören zu den Entscheidungen unter Unsicherheit. Bei einer Entscheidung unter *Risiko* liegen dem Entscheidungsträger objektive oder subjektive Wahrscheinlichkeiten für das Eintreten der künftigen Umweltzustände vor; bei *Ungewissheit* fehlen jegliche Informationen über die Wahrscheinlichkeitsverteilung der Umweltzustände.

**F:** Warum verwendet die Investitionsrechnung zur Bewertung von IT-Projekten Perioden-Cash-Flows ($Z_t$) anstelle des buchhalterischen Gewinns aus der GuV?
**A:** Weil der Cash-Flow ($Z_t = E_t - A_t$) als tatsächlicher Einzahlungsüberschuss am Periodenende objektiv feststellbar ist, sofort für Investitionen oder Ausschüttungen zur Verfügung steht und – anders als der GuV-Erfolg – nicht durch bilanzpolitische Bewertungswahlrechte (wie Abschreibungen oder Rückstellungen) verzerrt wird.

**F:** Nennen Sie die vier Gründe aus der Vorlesung, warum die klassische deterministische Kapitalwertmethode bei IT-Projekten an Grenzen stößt.
**A:** 1. Kurze Technologiezyklen und volatile Märkte erschweren exakte Cashflow-Prognosen; 2. qualitative/strategische Nutzenpotenziale lassen sich schwer in fixen Cashflows abbilden; 3. laufende Folgekosten (Wartung, Betrieb) sind im Gegensatz zur Anfangsinvestition schwer planbar; 4. IT-Projekte verlaufen selten linear, sondern werden iterativ gesteuert, wobei sich Ziele fortlaufend ändern.

**F:** Was versteht man unter „objektiver Rationalität" im Vergleich zu „subjektiver Rationalität" in der Entscheidungstheorie?
**A:** *Objektive Rationalität* unterstellt, dass alle Handlungsalternativen, Umweltzustände und Wahrscheinlichkeiten kostenlos bekannt sind und das Analysieren/Rechnen keine Kosten verursacht. *Subjektive Rationalität* berücksichtigt, dass Informationsbeschaffung und Analyse Aufwand verursachen – es kann daher rational sein, eine Analyse rechtzeitig abzubrechen, um „Paralysis by Analysis" zu vermeiden.

**F:** Unter welchen zwei mathematischen Voraussetzungen ist die $(\mu,\sigma)$-Regel $\Phi(\mu,\sigma) = \mu - \frac{\alpha}{2}\sigma^2$ mit dem Bernoulli-Prinzip verträglich, und wie verlaufen die Indifferenzkurven für $\alpha > 0$, $\alpha = 0$ und $\alpha < 0$?
**A:** Die Zufallsvariable $X$ muss normalverteilt sein ($X \sim N(\mu,\sigma)$) und der Entscheider muss eine exponentielle Nutzenfunktion $u(x) = 1 - e^{-\alpha x}$ mit konstanter Risikoaversion $r(x) = \alpha$ besitzen. Im $(\sigma,\mu)$-Diagramm verlaufen die Indifferenzkurven ($\mu = \text{const.} + \frac{\alpha}{2}\sigma^2$) für $\alpha > 0$ (risikoavers) steigend/konvex nach oben, für $\alpha = 0$ (risikoneutral) waagerecht und für $\alpha < 0$ (risikofreudig) fallend nach rechts unten.
