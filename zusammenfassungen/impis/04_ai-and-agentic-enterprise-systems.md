---
id: impis-04-ai-and-es
kurs: impis
nr: 4
titel: AI & Agentic Enterprise Systems: Machine Learning, Deep Learning, GenAI, RAG & SAP Business AI
quellen: 30-IMPES_AI_and_ES_2026.pdf
seiten: 44
---

> **Kurz gesagt:** Künstliche Intelligenz entwickelt sich zur obersten Querschnittsschicht moderner Enterprise Systems! Dieses Skript von Prof. Dr. Jens Lauterbach führt von den Grundlagen des **Machine Learnings** (Supervised, Unsupervised, Reinforcement Learning sowie konkreten Rechenbeispielen zu **Linearer Regression** und **Perzeptron-Klassifikation**) über **Deep Learning** (XOR-Problem, künstliche Neuronen, Sigmoid, Backpropagation) und **Generative AI / RAG** (Feuerriegel et al. 2024) bis hin zu **Agentic AI** (Profile, Memory, Reasoning, Action nach Wang et al. 2024), der **3-stufigen SAP Business AI / BTP Architektur** (Joule, GenAI Hub, AI Core) und den organisatorischen Transformationshürden.

## 🎯 Lernziele
- Erklären, was **Artificial Intelligence (AI)** und **Machine Learning (ML)** sind, wie sie mit Data Science und Advanced Analytics verschmelzen und warum ML sich fundamental von klassischer regelbasierter Programmierung unterscheidet (S. 4–10 / Folien 4–10).
- Die drei ML-Hauptkategorien (**Supervised**, **Non-supervised**, **Reinforcement Learning**) samt Algorithmen, Praxisanwendungen und dem **7-Schritte-Prozess zur Modellerstellung** beherrschen (S. 8–9 / Folien 9–10).
- Einfache ML-Rechenbeispiele zur **Linearen Regression** ($\hat{y} = a \cdot x + c$) und zum **Linearen Klassifikator** ($\hat{y} = A \cdot x$, Fehler $E = t - \hat{y}$, Update-Regel $\Delta A = L \cdot \frac{E}{x}$) selbstständig durchrechnen (S. 10–20 / Folien 11–24).
- **Deep Learning** und **Künstliche Neuronale Netze (ANN)** anhand des **XOR-Problems**, des künstlichen Neurons mit **Sigmoid-Aktivierungsfunktion** und des **4-stufigen Lernzyklus** (*Feed Forward, Loss/Error, Backpropagation, Gradient Descent*) erklären (S. 22–25 / Folien 26–30).
- **Predictive AI**, **Generative AI** und **GenAI & RAG** entlang aller 9 Dimensionen nach **Feuerriegel et al. (2024)** präzise voneinander abgrenzen (S. 26–27 / Folien 31–33).
- **Agentic AI** definieren und die **4 Kernmodule autonomer LLM-Agenten** (*Profile, Memory, Reasoning, Action* nach Wang et al. 2024) samt technischer Umsetzung beschreiben (S. 29–31 / Folien 35–37).
- Die **3 Integrationslevel von KI in Enterprise-Plattformen**, die **SAP AI Strategy** (*Joule, AI Foundation on SAP BTP, Generative AI Hub, SAP AI Core*) sowie Chancen, Risiken und die **4 Transformationsbarrieren (O-I-T-E)** analysieren (S. 33–42 / Folien 40–51).

## 📖 Kerninhalte

### 1. Grundlagen: Von Science Fiction zu Machine Learning (S. 4–9 / Folien 4–10)
- **Einordnung in die Unternehmenssoftware-Architektur (nach Ferstl & Sinz 2008, Folie 4):**
  - Über allen vier klassischen Säulen (*Supplier-Centric*, *Organizational Process- & Information-Centric*, *Customer-Centric* und *People-Centric Software*) spannt sich heute als neuer grüner Dachlayer: **„Artificial Intelligence and Agentic Enterprise Systems"**.
- **Konvergenz von Data Science, AI & Analytics (Sharda 2020, Folie 5):**
  - **Computer Science** + **Math and Statistics** + **Business Acumen (Geschäftsverständnis)** verschmelzen zu **Data Science and AI**, welche gemeinsam **Predictive / Prescriptive Analytics** antreiben.
- **Historische Meilensteine & 6 Kernfähigkeiten von KI (Russell & Norvig 2016, Folie 6):**
  - *Historie:* 15. Jh. Leonardos Roboter $\to$ 18. Jh. Schachtürke (*The Chess Turk*) $\to$ **1950: Alan Turings „Turing Test"** (die *Turing-Maschine* ist das theoretische Fundament aller modernen Computer!) $\to$ 20. Jh. Terminator T-800.
  - **Die 6 erforderlichen Fähigkeiten (*Required Capabilities*) für KI:**
    1. **Knowledge** (Wissensrepräsentation)
    2. **Natural Language** (Sprachverarbeitung / NLP)
    3. **Reasoning** (Logisches Schließen & Planen)
    4. **Machine Learning** (Lernen aus Erfahrung/Daten)
    5. **Machine Vision** (Computer Vision / Bilderkennung)
    6. **Robotics** (Physische Interaktion)
- **Klassische Programmierung vs. Machine Learning (Folien 8 & 10):**
  - **Klassisch programmierbar (*Easily programmable*):** Klare Regeln und explizite Instruktionen (`Input` $\to$ `Instruction` $\to$ `Output/Result`, z. B. $\sqrt{30} + 22 - 8 = 19{,}477$).
  - **Nicht explizit programmierbar (*Machine Learning*):** Komplexe, adaptive Muster ohne feste Wenn-Dann-Regel (z. B. *„Was ist auf diesem Bild – eine Katze?"*).
  - **Definition Machine Learning (Folie 10):** *„Machine Learning is a capability of intelligent systems that allows them to answer questions by learning from data without being explicitly programmed."*
  - **Quantitatives Grundmodell:** `Input x` $\to$ `Learning Algorithm ~f(x)` $\to$ `Output y` mit fortlaufender Rückkopplung über `Error/Feedback`.

- **Die 3 Lernparadigmen des Machine Learning (Folien 9–10 – Klausurklassiker!):**
  | Lernparadigma | Ziel / Purpose | Typische Algorithmen | Reale Enterprise- & Industrie-Use-Cases |
  |---|---|---|---|
  | **1. Supervised Learning** *(Überwachtes Lernen mit bekannten Ziel-Labels $y$)* | **Classification / Prediction** (Klassifikation & Vorhersage) | • Regression<br>• K-NN (*k-Nearest Neighbors*)<br>• Decision Tree<br>• Support Vector Machine (SVM)<br>• Bayes Classifier<br>• Neural Network | • **Sales Prediction** & **Risk Prediction**<br>• **Recommender Systems** (Netflix)<br>• **Spam Filter** (Google)<br>• **Face Recognition** (Meta, Apple)<br>• **Self-Driving Car** (Tesla)<br>• **Medical Research** (Pfizer) |
  | **2. Non-supervised Learning** *(Unüberwachtes Lernen ohne vorgegebene Labels)* | **Clustering** & Muster-/Anomalieerkennung | • K-Means Cluster<br>• DBScan<br>• Mean-Shift Cluster<br>• Hierarchical Clustering<br>• Anomaly Detection<br>• Dimension Reduction | • **Fraud Detection** (MasterCard)<br>• **Market Segmentation** (J.P. Morgan)<br>• **Predictive Maintenance** (Bosch Rexroth)<br>• **IT Security** (IBM) |
  | **3. Reinforcement Learning** *(Bestärkendes Lernen durch Belohnung/Interaktion)* | **Optimal Path** (Optimale Entscheidungsstrategie) | • Q-Learning | • **Gaming** (Nintendo / AlphaGo)<br>• **Robotics** (KUKA Industrieroboter) |

- **Die 7 Schritte zum Aufbau eines ML-Modells (*Setting up the Model*, Folie 10):**
  1. **Gather Data** (Daten sammeln)
  2. **Scrub Data** (Daten bereinigen / aufbereiten)
  3. **Select Algorithm** (Passenden ML-Algorithmus auswählen)
  4. **Implement Model** (Modell implementieren)
  5. **Train Model** (Modell mit Trainingsdaten trainieren)
  6. **Test Model** (Modellgüte an Testdaten prüfen)
  7. **Tune Model** (Hyperparameter und Gewichte feinjustieren)

---

### 2. Mathematische ML-Grundmodelle: Lineare Regression & Klassifikation (S. 10–20 / Folien 11–24)

#### a) Einfache Lineare Regression: Stückkosten vs. Automatisierungsgrad (Folien 11–14)
- **Fragestellung:** Wie lassen sich die **Stückkosten ($y$, Cost per Unit)** anhand des **Automatisierungsgrads ($x$, Degree of Automation in %)** vorhersagen?
- **Gegebene Beobachtungen:** $(x_1 = 0, y_1 = 45)$, $(x_2 = 10, y_2 = 40)$, $(x_3 = 20, y_3 = 38)$.
- **Lineares Regressionsmodell:**
  $$\hat{y} = a \cdot x + c$$
  *(mit $x =$ Automatisierungsgrad, $\hat{y} =$ geschätzte Stückkosten, $a =$ Steigung/Slope, $c =$ Achsenabschnitt/Intercept $= 45$ wegen Punkt $(0, 45)$).*
- **Iteratives Lernen der Steigung $a$:**
  1. **Startannahme $a = -1, c = 45$ (Folie 13):**
     - *1. Predict (für $x=10$):* $\hat{y} = -1 \cdot 10 + 45 = 35$.
     - *2. Measure the Error:* Beobachtet wurde $y = 40 \implies$ Fehler $E = y - \hat{y} = 40 - 35 = +5$.
     - *3. Adjust the Slope:* Da $\hat{y}$ zu niedrig war, wird die Gerade flacher gemacht: $a: -1 \to -0{,}5$.
     - *Check:* $\hat{y} = -0{,}5 \cdot 10 + 45 = 40$ ✓.
  2. **Test am dritten Datenpunkt $x = 20$ mit $y = 38$ (Folie 14):**
     - *Test mit $a = -0{,}5$:* $\hat{y} = -0{,}5 \cdot 20 + 45 = 35 \implies$ Fehler $E = 38 - 35 = +3$ (Gerade liegt zu tief).
     - *Trial mit $a = -0{,}25$:* $\hat{y} = -0{,}25 \cdot 20 + 45 = 40 \implies$ Fehler $E = 38 - 40 = -2$ (Gerade liegt zu hoch).
     - *Erkenntnis:* Eine Gerade, die einen Punkt exakt trifft, verfehlt oft andere Punkte. Wegen des **Vorzeichenwechsels** ($E = +3$ vs. $E = -2$) liegt die beste Ausgleichsgerade zwischen $a = -0{,}5$ und $a = -0{,}25$!

#### b) Einfacher Linearer Klassifikator (Perzeptron-Lernregel nach Rashid 2016, Folien 15–20)
- **Fragestellung:** Kauft ein neuer Kunde einen Sportwagen (`YES` vs. `NO`) basierend auf Gehalt ($x =$ Salary in T€) und Alter ($y =$ Age)?
- **Trainingsdaten:**
  - Kunde 1 (*Buyer*): `Salary x = 80k`, `Age y = 30` $\to$ **Sports Car = YES**
  - Kunde 2 (*Non-Buyer*): `Salary x = 20k`, `Age y = 80` $\to$ **Sports Car = NO**
- **Modell der Entscheidungsgrenze (*Decision Boundary*, Folie 16):** Ursprungsgerade $\hat{y} = A \cdot x$. Gesucht ist die Steigung $A$, sodass die Gerade Käufer (unterhalb der Gerade) und Nicht-Käufer (oberhalb der Gerade) sauber trennt.
- **Mathematische Herleitung der Update-Regel (Folien 17–20):**
  1. **Initiale Schätzung (Folie 17):** $A_0 = \frac{\Delta y}{\Delta x} = \frac{10}{40} = 0{,}25$. Für $x = 80$ liefert die Gerade $\hat{y} = 0{,}25 \cdot 80 = 20$.
  2. **Fehler am 1. Punkt (*Buyer* bei $x=80, y=30$, Folie 18):** Damit der Buyer ($y=30$) sicher unterhalb der Trennlinie liegt, setzen wir als Zielwert (*Target*) der Trenngerade bei $x=80$ den Wert **$t = 35$**.
     $$E = t - \hat{y} = 35 - 20 = 15 \quad (\text{positiver Fehler} \implies \text{Gerade muss steiler werden!})$$
  3. **Koeffizienten-Update $\Delta A$ (Folie 19):**
     Aus $t = (A + \Delta A)\cdot x$ und $\hat{y} = A \cdot x$ folgt für den Fehler:
     $$E = (A + \Delta A)x - Ax = \Delta A \cdot x \quad \Longleftrightarrow \quad \boxed{\Delta A = \frac{E}{x}}$$
     Eingesetzt für Punkt 1: $\Delta A = \frac{15}{80} = 0{,}1875 \implies A_1 = 0{,}25 + 0{,}1875 = \mathbf{0{,}4375}$ (Probe: $\hat{y}_1 = 0{,}4375 \cdot 80 = 35$).
  4. **Anwendung auf den 2. Punkt (*Non-Buyer* bei $x=20, y=80 \implies$ Target $t \approx 79$ knapp unter 80, Folie 20):**
     - Vorhersage mit $A_1$: $\hat{y} = 0{,}4375 \cdot 20 = 8{,}75$.
     - Fehler: $E = 79 - 8{,}75 = 70{,}25 \implies \Delta A = \frac{70{,}25}{20} = 3{,}5125 \implies A_2 \approx 0{,}4375 + 3{,}5125 = \mathbf{3{,}95}$.
  5. **Warum eine Lernrate $L$ (*Learning Rate*) unverzichtbar ist (Folie 20):**
     Ohne Dämpfung rotiert die Gerade bei jedem neuen Punkt radikal auf das letzte Beispiel und „vergisst" vorherige Punkte (instabile Sprünge). Deshalb wird das Update mit einer **Lernrate $L \in (0, 1)$** gedämpft:
     $$\boxed{\Delta A = L \cdot \left(\frac{E}{x}\right)}$$

---

### 3. Deep Learning, Neuronale Netze & Generative AI / RAG (S. 21–27 / Folien 25–33)

#### a) Vom XOR-Problem zum Künstlichen Neuronalen Netz (Folien 26–30)
- **Warum ein einzelner linearer Klassifikator oft nicht reicht – Das logische XOR-Problem (Rashid 2016, Folie 26):**
  - Wahrheitstabelle von `XOR` (Exklusiv-Oder): `(0,0) -> 0`, `(0,1) -> 1`, `(1,0) -> 1`, `(1,1) -> 0`.
  - Im 2D-Koordinatensystem liegen die grünen `1`-Punkte `(0,1)` und `(1,0)` diagonal gegenüber den roten `0`-Punkten `(0,0)` und `(1,1)`. Es ist **mathematisch unmöglich**, diese beiden Klassen mit einer einzigen geraden Linie zu trennen (*nicht linear separierbar*)! Erst durch die Kombination **mehrerer Klassifikatoren/Linien** wird das Problem lösbar.
- **Architektur Künstlicher Neuronaler Netze (*Artificial Neural Networks, ANN*, Folien 27–28):**
  - Besteht aus vernetzten Schichten (*Layers*): **Input Layer** $\to$ mehrere **Hidden Layers** (*Hidden Layer 1, 2, 3...* $\implies$ daher der Begriff **Deep Learning**!) $\to$ **Output Layer**.
  - **Mathematik eines Künstlichen Neurons (Folie 28):**
    1. *Gewichtete Summe (Net Input):* Jedes Eingangssignal $x_i$ wird mit einem Verbindungsgewicht $w_i$ multipliziert und aufsummiert:
       $$z = \text{Net Input} = \sum w_i x_i = w_1 x_1 + w_2 x_2 + w_3 x_3$$
    2. *Nichtlineare Aktivierungsfunktion $f(z)$:* Entscheidet, wie stark das Neuron „feuert". Klassisches Beispiel auf Folie 28 ist die S-förmige **Sigmoid-Funktion**:
       $$f(z) = \frac{1}{1 + e^{-z}} \quad \implies \quad \hat{y} = f\left(\sum w_i x_i\right)$$
       *(Eigenschaften der Sigmoid-Funktion: bildet jeden Wert $z \in (-\infty, +\infty)$ glatt auf das Intervall $(0, 1)$ ab; bei $z = 0$ ist $f(0) = 0{,}5$).*
- **Der 4-stufige Lernprozess im Neuronalen Netz (Rashid 2016, Folie 30 – Prüfungs-Dauerbrenner!):**
  1. **(A) Feed Forward:** Das Eingabebild (z. B. Katze, Zielwert `Cat = 10`) wird von links nach rechts durch alle Schichten gerechnet und liefert einen aktuellen Ist-Output (z. B. `Output = 3`).
  2. **(B) Loss / Error:** Am Ausgang wird der Fehler zwischen Erwartungswert und Output gemessen (`Loss/Error = 10 - 3 = 7`).
  3. **(C) Backpropagation:** Der Fehler wird **rückwärts** vom Output Layer durch die Hidden Layers verteilt; dabei wird für jedes Gewicht der **Gradient** (Steigung der Fehlerfunktion) berechnet (*distribute error – calculates gradient*).
  4. **(D) Gradient Descent (Gradientenabstieg):** Die Gewichte $w_i$ im Netz werden entgegen der Gradientenrichtung angepasst, sodass der Fehler beim nächsten Durchlauf sinkt (*change weights based on gradients*).

#### b) Generative AI & Abgrenzung zu Predictive AI und RAG (Feuerriegel et al. 2024, Folien 31–33)
- **Definition Generative AI (Folie 31):** Berechnungsverfahren auf Basis tiefer neuronaler Netze (Deep Learning) und großer Trainingsdatenmengen, die in der Lage sind, **scheinbar neue, sinnvolle Inhalte** (*Text, Bilder/Video, Sprache/Musik, Programmcode*) anhand gelernter Muster zu generieren.
- **Die 3 Betrachtungsebenen von Generative AI (Folie 31):**
  | Output-Modalität | 1. Model Level *(Basismodell)* | 2. System Level *(Interaktionssystem)* | 3. Application Level *(Business-Anwendung)* |
  |---|---|---|---|
  | **Text Generation** | X-to-text (GPT-4, LLaMA 2) | ChatGPT, YouChat | Content-Erstellung (SEO, Kundenservice), Übersetzung, Zusammenfassung |
  | **Image/Video Generation** | X-to-image (Stable Diffusion, DALL-E 2) | Midjourney, Runway | Synthetische Produkt- & Werbebilder, Lernmaterialien |
  | **Speech/Music Generation** | X-to-music/speech (MusicLM, VALL-E) | ElevenLabs | KI-Musik, Text-to-Speech für News & Produkt-Tutorials |
  | **Code Generation** | X-to-code (Codex, AlphaCode) | GitHub Copilot | Softwareentwicklung, Code-Synthese, Review & Dokumentation |

- **Die große Vergleichstabelle: Predictive AI vs. Generative AI vs. GenAI & RAG (Folie 33 – 1:1 Klausurwissen!):**
  | Dimension | Predictive AI | Generative AI | GenAI & RAG *(Retrieval-Augmented Generation)* |
  |---|---|---|---|
  | **Learning objective** | *„Bei 50k € Werbung ($x$), welchen Umsatz ($y$) erwarte ich?"* | *„Wie sieht menschliche Sprache ($x$) typischerweise aus?"* | *„Welcher Text ($x$) ist wahrscheinlich, **gegeben diese spezifischen Unternehmensfakten ($d$)**?"* |
  | **What you can do** | Umsatz auf Basis von Werbeausgaben vorhersagen | Neue Sätze generieren, Text fortsetzen, Absätze schreiben | Neue Sätze/Absätze generieren **in einem spezifischen Unternehmenskontext ($d$)** |
  | **System (Beispiel)** | Regression / Classifier | LLM / ChatGPT | **SAP BTP GenAI Hub** |
  | **Core task** | Ergebnis $y$ aus Input $x$ vorhersagen | Neue Daten generieren | Neue, kontextgebundene Daten generieren |
  | **Probability modeled** | $P(y \mid x)$ *(auf Folie: $P(x \mid y)$)* | **$P(x)$** | **$P(x \mid d)$** |
  | **Typical outputs** | Zahlen (*Numbers*), Klassen (*Classes*) | Text, Bilder (*Images*), Code | Text, Bilder (*Images*), Code |
  | **Roots in ML** | **Discriminative models** | **Generative models** | **Generative models** |
  | **Typical methods** | Regression, Classifiers, NN | GANs, LLMs, Diffusion | GANs, LLMs, Diffusion (+ Vektorsuche/Grounding) |
  | **Enterprise role** | **Decision support** | **Knowledge & content work** | **Knowledge & content work** (mit Faktenbindung) |

---

### 4. Agentic AI, SAP Business AI / BTP & Organisatorische Transformation (S. 28–42 / Folien 34–51)

#### a) Agentic AI: Definition & 4-Modul-Architektur (Wang et al. 2024, Folien 35–37)
- **Definition Autonomer Agent (Wang et al. 2024, Folie 35):**
  *„An autonomous agent is a system situated within and a part of an environment that senses that environment and acts on it, over time, in pursuit of its own agenda and so as to effect what it senses in the future."*
- **Die 4 Kernmodule eines LLM-basierten autonomen Agenten (Folie 36):**
  ```
  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │                     LLM-Based Autonomous Agent (Wang et al. 2024)               │
  ├──────────────────┬──────────────────┬─────────────────────┬─────────────────────┤
  │    1. Profile    │    2. Memory     │    3. Reasoning     │      4. Action      │
  ├──────────────────┼──────────────────┼─────────────────────┼─────────────────────┤
  │ • Identität      │ • Kontext halten │ • Nächste Schritte  │ • Interaktion mit   │
  │ • Ziele (Goals)  │ • Erfahrungen    │   entscheiden       │   der Umwelt /      │
  │ • Constraints    │   speichern      │ • Aufgaben zerlegen │   Fremdsystemen     │
  │ • Hintergrund    │ • Kontinuität    │ • Aktionen planen   │   ausführen         │
  ├──────────────────┼──────────────────┼─────────────────────┼─────────────────────┤
  │ System-Prompts   │ Vector Database  │ Prompts & LLM       │ Action Controller   │
  │ & Rollenvorgaben │ & Wissensquellen │ (Chain-of-Thought)  │ & APIs / Connectors │
  └──────────────────┴──────────────────┴─────────────────────┴─────────────────────┘
  ```
  - *Praxisbeispiel MS Copilot Studio Sales Agent (Folie 37):* **Profile** (Purpose & Guidelines für Vertriebsunterstützung), **Memory** (Wissensquellen: OneDrive, SharePoint, Outlook, Teams), **Reasoning** (22 Sek. Begründung & Aufgabenplanung im Chat), **Action** (Skills, E-Mail-Entwürfe erstellen, Copilot-Connectoren & Websuche aufrufen).

#### b) Die 3 Integrationslevel & SAP Business AI / BTP Architektur (Banda et al. 2024, Folien 40–45)
- **KI-Schichtenmodell (*Zwiebelmodell*, Folie 40):** `Machine Learning` $\supset$ `Deep Learning` $\supset$ `GenAI` $\supset$ `LLM` $\supset$ `RAG`.
- **Die 3 Enterprise Platform Integration Levels (Folien 40, 43–45):**
  | Integrationslevel | Beschreibung | Umsetzung im SAP-Ökosystem (SAP Business AI) |
  |---|---|---|
  | **Level 1** | **User integration via assistants or agents** *(Sofort nutzbare Unterstützung für Fachanwender & Entwickler)* | • **SAP Joule** (*„A copilot that truly understands your business"* – nahtlose UX über das gesamte Portfolio)<br>• **Embedded AI capabilities** direkt in *SAP Cloud ERP, HCM, Spend Management, CRM, SAP BTP* |
  | **Level 2** | **Configuration & integration of business use cases into applications** *(Anpassung & Einbettung über AI Toolkit)* | • **SAP AI Foundation on SAP BTP:** Vorgefertigte *AI Services* (*Document Processing, Recommendation, Machine Translation*)<br>• **Generative AI Hub** (im *SAP AI Launchpad*): *Playground, Prompt Engineering, Prompt Management, Prompt Registry, Libraries/SDKs* + **Trust & Control** (*Inference Engine, Agents, Grounding, Content Moderation, Multitenancy, Security, Data Privacy*) |
  | **Level 3** | **Implement and train contextualized models and integrate via API** *(Eigenes Modelltraining, Hosting & Fine-Tuning)* | • **SAP AI Core:** *AI Workload Management* (*Training & Inference*), **Business Data and Context** (**Vector Engine** & Data Management)<br>• **Foundation Model Access:** *SAP Built*, *Custom*, *Hosted*, *Fine-Tuned* sowie *Partner Built* (*Microsoft Azure OpenAI, Falcon, Meta Llama 2, Aleph Alpha, AWS Bedrock, Google Cloud, IBM, Anthropic, Databricks*) |

  - **Die 5 Capability Pillars der SAP Business Technology Platform (BTP, Folie 41):**
    1. *App Dev* (Build and innovate) • 2. *Automation* (Optimize and automate) • 3. *Integration* (Connect and simplify) • 4. *Data and Analytics* (Give data purpose) • 5. *AI* (Infuse intelligence).
  - **SAP Business AI Leitprinzipien (Folie 43):** **Relevant. Reliable. Responsible.**

#### c) Organisatorischer Einfluss: Wertschöpfungskette, Chancen/Risiken & Barrieren (Folien 47–51)
- **Transformation der gesamten Wertschöpfungskette (Porter Value Chain, Folie 47):**
  - Grundsätzlich können **alle digitalisierten Unternehmensfunktionen** durch ML verbessert werden:
  - *Primäre Funktionen:* Marketing & Sales (Kundenbedürfnisse vorhersagen), Procurement, Production (ML in Maschinen/Digital Twins), Logistics, Services (Fulfillment).
  - *Sekundäre Funktionen:* Infrastructure, Finance & Controlling, (Information) Technology, Human Resources.
- **Rewards vs. Risks bei der Einführung von ML-Services (Folie 48):**
  | Ebene (Rewards) | Chancen (*Rewards*) | Ebene (Risks) | Herausforderungen & Risiken (*Risks*) |
  |---|---|---|---|
  | **Strategy & Finance** | • Potenzieller *Game Changer*<br>• Kostensenkung (*Cost reduction*)<br>• Umsatzsteigerung (*Revenue increase*) | **Compliance & Security** | • Rechtliche & moralische Fragen (*Legal & moral issues*)<br>• Datenschutz (*Privacy issues*)<br>• Datensicherheit (*Data security issues*) |
  | **Market & Customer** | • Besseres Marketing<br>• Bessere Produkte<br>• Besserer Kundenservice | **Technology & Architecture** | • Integration in traditionelle Legacy-IS<br>• Viele verschiedene Technologien<br>• Wahl der richtigen Start-Domäne |
  | **Org. & Value Chain** | • Automatisierung & Effizienz<br>• Reduktion monotoner Arbeit (*tedious work*)<br>• Risikoreduktion | **Implementation & Migration** | • Hohe technologische Komplexität<br>• Fachkräftemangel (*Lack of skilled people*)<br>• Widerstand der Mitarbeiter (*Resistance*) |

- **3 Nutzenkategorien von KI (Folie 50):** **Cost Savings** (Prozessautomatisierung, Arbeitserleichterung, Digital Twins, Qualitätssicherung), **Business Enabler** (Kundenverhalten & Produktwahl vorhersagen, Produktdesign, Service) und **Strategic Resource** (Know-how-Aufbau & Identifikation erster Use Cases als Wettbewerbsvorteil).
- **Status Quo: Organization's AI Transformation Journey & die 4 Barrieren (Folie 51):**
  - *3 Phasen der KI-Reife:*
    1. **Pilot AI Use:** Aufkommen von Generative AI & Chatbots (z. B. ChatGPT) – geringer Produktivitätseffekt.
    2. **Experimental AI Use:** KI-augmentierte Enterprise Systems (z. B. SAP Joule) und erste **AI Agents** (z. B. Joule Agents).
    3. **Effective AI Use:** Nach Überwindung der Transformationsbarrieren entsteht ein **beispielloser Produktivitätsschub (*unprecedented productivity boost*)**!
  - **Die 4 Barrieren auf dem Weg zum Effective AI Use (O-I-T-E Framework, Folie 51):**
    1. **Organizational:** Mangel an strategischer Ausrichtung, klaren Zielen und Führung (*lack of strategic direction, objectives and leadership*).
    2. **Individual:** Fehlende Bereitschaft und Skills der Mitarbeiter sowie ethische und psychologische Faktoren (z. B. **Angst vor Arbeitsplatzverlust** / *fear of job loss*).
    3. **Technological:** Unzureichende Altsysteme (*legacy systems*), mangelhafte Datenqualität, Integrationsprobleme sowie Designmängel KI-gestützter Systeme (Usability, Zuverlässigkeit/Halluzinationen).
    4. **Environmental:** Strenge regulatorische Anforderungen (z. B. EU AI Act, DSGVO) und hoher Wettbewerbsdruck.

---

## ⚠️ Klausurfallen & typische Fehler
- **Predictive AI vs. Generative AI Wahrscheinlichkeiten verwechseln:** Predictive AI arbeitet mit **diskriminativen Modellen** (Klassengrenzen / bedingte Vorhersage von Zahlen oder Klassen $y$ aus Input $x$), während Generative AI die Verteilung **$P(x)$** (bzw. mit RAG **$P(x \mid d)$** gegeben Unternehmenskontext $d$) modelliert, um **neue Daten** zu erzeugen!
- **Warum braucht man beim Klassifikator eine Lernrate $L$?** Ohne Lernrate ($\Delta A = E/x$) dreht sich die Trenngerade bei jedem neuen Punkt exakt auf diesen Punkt und zerstört das zuvor gelernte Wissen. Erst $\Delta A = L \cdot (E/x)$ mit kleinem $L$ sorgt für stabiles Lernen über viele Punkte!
- **XOR-Problem:** Ein einzelnes Perzeptron (eine einzige Gerade) kann `AND` und `OR` trennen, scheitert aber zwingend an `XOR` – genau deshalb braucht man **mehrschichtige Neuronale Netze (Hidden Layers)**!
- **Feed Forward vs. Backpropagation:** Daten fließen beim Vorhersagen **vorwärts** (*Feed Forward*), aber der **Fehler (Loss)** fließt beim Training **rückwärts** (*Backpropagation*), um die Gradienten für den *Gradient Descent* zu berechnen!

## 🧠 Merkhilfen
- **7 ML-Schritte (G-S-S-I-T-T-T):** **G**ather $\to$ **S**crub $\to$ **S**elect $\to$ **I**mplement $\to$ **T**rain $\to$ **T**est $\to$ **T**une.
- **4 ANN-Lernschritte (F-L-B-G):** **F**eed Forward $\to$ **L**oss/Error $\to$ **B**ackpropagation $\to$ **G**radient Descent.
- **4 Agentic-AI-Module (P-M-R-A):** **P**rofile (Wer bin ich?) $\to$ **M**emory (Was weiß ich?) $\to$ **R**easoning (Was plane ich?) $\to$ **A**ction (Was führe ich per API aus?).
- **3 SAP-AI-Levels:** *Level 1 = **Joule** (fertiger Copilot für User), Level 2 = **GenAI Hub & AI Services** (Prompting, Grounding & Konfiguration), Level 3 = **AI Core** (eigene Modelle trainieren/fine-tunen).*

## 📌 Begriffe auf einen Blick
| Begriff | Bedeutung |
|---|---|
| Machine Learning (ML) | Fähigkeit intelligenter Systeme, aus Daten zu lernen, ohne explizit programmiert zu sein. |
| Supervised / Unsupervised / Reinforcement | Die 3 ML-Paradigmen: Lernen mit Labels (Vorhersage), ohne Labels (Clustering) bzw. durch Belohnung. |
| Sigmoid-Funktion | Nichtlineare Aktivierungsfunktion $f(z) = \frac{1}{1+e^{-z}}$ im künstlichen Neuron mit Wertebereich $(0,1)$. |
| Backpropagation & Gradient Descent | Rückwärtsverteilung des Fehlers zur Gradientenberechnung und anschließende Gewichtsanpassung im ANN. |
| RAG (Retrieval-Augmented Generation) | Kopplung eines LLM mit spezifischen Unternehmensfakten $d$ ($P(x \mid d)$), z. B. über Vektordatenbanken/Grounding. |
| Agentic AI | Autonome Systeme aus *Profile, Memory, Reasoning, Action*, die Umwelt wahrnehmen und mehrstufige Ziele verfolgen. |
| SAP Joule | Zentraler KI-Copilot der SAP auf Level 1 für natürliche Sprachinteraktion über alle SAP-Cloud-Anwendungen. |
| Generative AI Hub & SAP AI Core | SAP-BTP-Komponenten (Level 2 & 3) für Prompting, Grounding/Trust und Training/Betrieb von Foundation Models. |

## ✅ Selbsttest
**F:** Worin besteht der fundamentale Unterschied zwischen klassischer Programmierung und Machine Learning, und wie lauten die drei Hauptparadigmen des Machine Learning mit je einem Praxisbeispiel?
**A:** Bei klassischer Programmierung gibt der Mensch explizite Regeln/Instruktionen vor, um aus Input einen Output zu berechnen. Beim Machine Learning lernt ein quantitatives Modell $\sim f(x)$ selbstständig anhand von Trainingsdaten und Fehler-Feedback. Die drei Paradigmen sind: 1. *Supervised Learning* (mit Labels, z. B. Umsatzprognose, Spam-Filter), 2. *Non-supervised Learning* (ohne Labels/Clustering, z. B. Betrugserkennung bei MasterCard, Kundensegmentierung) und 3. *Reinforcement Learning* (Lernen durch Belohnung, z. B. Q-Learning in Robotik oder Gaming).

**F:** Warum kann ein einzelner linearer Klassifikator das logische XOR-Problem nicht lösen, und wie läuft der 4-stufige Lernprozess in einem mehrschichtigen Künstlichen Neuronalen Netz (ANN) ab?
**A:** Beim XOR-Problem (`(0,1)->1`, `(1,0)->1` vs. `(0,0)->0`, `(1,1)->0`) liegen die Klassen diagonal gegenüber und sind nicht durch eine einzige Gerade linear trennbar. Ein ANN nutzt deshalb mehrere *Hidden Layers* und lernt in vier Schritten: (A) *Feed Forward* (Input vorwärts bis zum Output rechnen), (B) *Loss/Error* (Abweichung zum Zielwert bestimmen), (C) *Backpropagation* (Fehler rückwärts verteilen und Gradienten berechnen) und (D) *Gradient Descent* (Gewichte $w_i$ anhand der Gradienten anpassen).

**F:** Wie unterscheiden sich Predictive AI, Generative AI und GenAI mit RAG hinsichtlich ihrer modellierten Wahrscheinlichkeit, ihrer ML-Wurzeln und ihrer Rolle im Unternehmen (nach Feuerriegel et al. 2024)?
**A:** *Predictive AI* basiert auf diskriminativen Modellen, sagt Zahlen oder Klassen $y$ aus Input $x$ voraus und dient dem *Decision Support*. *Generative AI* basiert auf generativen Modellen (LLMs, Diffusion, GANs), modelliert $P(x)$ zur Erzeugung neuer Texte, Bilder oder Codes für *Knowledge & Content Work*. *GenAI & RAG* modelliert die bedingte Wahrscheinlichkeit $P(x \mid d)$, indem es die Textgenerierung an spezifische Unternehmensfakten $d$ (Grounding, z. B. im SAP BTP GenAI Hub) bindet.

**F:** Aus welchen vier Kernmodulen besteht ein LLM-basierter autonomer Agent (Agentic AI nach Wang et al. 2024) und mit welchen Technologien werden diese typischerweise implementiert?
**A:** 1. *Profile* (Identität, Ziele, Rahmenbedingungen – implementiert über System-Prompts), 2. *Memory* (Kontext und Erfahrungen speichern – implementiert z. B. über Vektordatenbanken), 3. *Reasoning* (Aufgaben zerlegen, nächste Schritte planen – implementiert über LLMs und Prompting-Strategien) und 4. *Action* (Interaktion mit der Systemumwelt – implementiert über Action Controller und APIs).

**F:** Erklären Sie die drei Integrationslevel von KI auf der SAP Business Technology Platform (BTP) sowie die vier Barrieren, warum Unternehmen beim Übergang zu „Effective AI Use" oft kämpfen.
**A:** *Level 1* ist die direkte Nutzerintegration über Assistenten/Agenten wie *SAP Joule* und Embedded AI in Cloud-ERP-Prozessen; *Level 2* ist die Konfiguration und Einbindung von Use Cases über *SAP AI Services* und den *Generative AI Hub* (Prompt Management, Grounding, Trust & Control); *Level 3* ist das eigene Training/Fine-Tuning und Hosting kontextualisierter Modelle via *SAP AI Core* und *HANA Vector Engine*. Die vier Transformationsbarrieren sind *Organizational* (fehlende Strategie/Führung), *Individual* (fehlende Skills, Angst vor Jobverlust), *Technological* (Legacy-Systeme, schlechte Datenqualität, mangelnde Zuverlässigkeit) und *Environmental* (strenge Regulierung, Wettbewerbsdruck).
