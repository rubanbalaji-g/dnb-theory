---
{"dg-publish":true,"permalink":"/neonatalogy/infants-of-diabetic-mother/"}
---

## 1. Introduction & Pathophysiology
* **Definition:** Neonate born to a mother with pre-existing diabetes (Type 1 or 2) or gestational diabetes (GDM).
* **Core Pathophysiology (Pedersen Hypothesis):**
<!-- htmlmin:ignore -->
```mermaid
graph TD
    subgraph Maternal_Environment [Maternal Environment]
    A[Maternal Uncontrolled Diabetes] -->|Hyperglycemia| B(Maternal High Blood Glucose)
    M_Insulin[Maternal Insulin] -.->|Does NOT Cross Placenta| C
    end

    B -->|Glucose Crosses Placenta Freely| C(Fetal Hyperglycemia)

    subgraph Fetal_Environment [Fetal Environment]
    C -->|Stimulates| D(Fetal Pancreatic Beta-Cell Hyperplasia)
    D -->|Overproduction| E(Fetal Hyperinsulinemia)
    
    %% Path 1: Growth
    E -->|Insulin = Growth Factor| F[Macrosomia / Organomegaly]
    F -->|Risk of| F1[Birth Trauma / Shoulder Dystocia]

    %% Path 2: Metabolism/Hypoxia
    E -->|Increased Metabolic Rate| G[Fetal Tissue Hypoxia]
    G -->|Increased Erythropoietin| H[Polycythemia / Hyperviscosity]
    H -->|Breakdown of RBCs| H1[Hyperbilirubinemia]

     Symptomatic Branch
    D -- Yes --> E[Partial Exchange Transfusion PET]
    E --> F[Target Hct: 55%]

    %% Asymptomatic Branch
    D -- No --> G{Check Hct Level}
    
    G -- Hct ≥ 75% --> E
    G -- Hct 70-74% --> H[Conservative Management]
    H --> I[Hydration / Extra Feeds +20ml/kg]
    I --> J[Monitor Hct & Symptoms]
    
    G -- Hct 65-69% --> K[Observation]
    K --> L[Monitor for Symptoms & Re-check Hct]

    style E fill:#f96,stroke:#333,stroke-width:2px
    style A fill:#bbf,stroke:#333,stroke-width:2px
```
<!-- /htmlmin:ignore -->
* **Asymptomatic:**
	* Hct 65–69%: Monitor.
	* Hct 70–74%: Hydration (Feed/IV) to encourage hemodilution
	* Hct $\ge$ 75%: Partial Exchange Transfusion (PET).
   * **Symptomatic (Hct > 65%):** Partial Exchange Transfusion (PET).
   * **PET Details:**
	    - $$ volume\;of\; blood \;to\; be \;exchanged \;\;= \;\; \frac{blood\; vol \times (observe\; Hct - Desired\; Hct)}{Observed\; Hct}$$
        * Desired Hct: 55%. Fluid: Normal Saline.

### B. Hyperbilirubinemia
* Secondary to polycythemia (increased RBC mass breakdown) and immature hepatic conjugation.

### C. Thrombocytopenia
* Mild, transient; associated with polycythemia/hyperviscosity.

## 4. Respiratory Complications
* **Respiratory Distress Syndrome (RDS):** Delayed surfactant maturation due to antagonism of cortisol by insulin.
* **Transient Tachypnea of Newborn (TTN):** Common in infants delivered via elective CS (associated with macrosomia).

## 5. Congenital Anomalies (Embryopathy)
* Occurs due to hyperglycemia during organogenesis (First Trimester).
* **Cardiac:** Hypertrophic Cardiomyopathy (septal hypertrophy - transient), Transposition of Great Arteries (TGA), VSD.
* **CNS:** Neural tube defects, Anencephaly.
* **Skeletal:** Caudal Regression Syndrome (Sacral Agenesis) – most specific to IDM.
* **Gastrointestinal:** Small Left Colon Syndrome, Situs Inversus.
* **Renal:** Renal vein thrombosis (associated with polycythemia).

## 6. Growth Abnormalities
* **Macrosomia (LGA):** Birth weight > 90th percentile or > 4000g. Risk of birth trauma (shoulder dystocia, Erb’s palsy, clavicle fracture) and asphyxia.
* **IUGR (SGA):** Seen in mothers with severe diabetic vasculopathy (placental insufficiency).

## 7. Long-term Outcome
* **Neurodevelopment:**
    * Symptomatic hypoglycemia linked to white matter abnormalities and executive function deficits.
    * Polycythemia-associated hyperviscosity may cause micro-infarcts but PET benefits on long-term outcome are debated.
* **Metabolic:** Increased risk of childhood obesity and early-onset Type 2 Diabetes (Metabolic programming).