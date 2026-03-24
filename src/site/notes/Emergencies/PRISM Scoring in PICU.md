---
{"dg-publish":true,"uptext":"Back to Index (🚑 Emergencies and Critical Care)","uplink":"/emergencies/emergencies-and-critical-care/","permalink":"/emergencies/prism-scoring-in-picu/","dgPassFrontmatter":true}
---

## Definition
The **Pediatric Risk of Mortality (PRISM)** score is a physiologically based scoring system designed to assess the severity of illness and predict the risk of mortality in infants and children admitted to Pediatric Intensive Care Units (PICUs). Developed by Pollack et al., it is primarily used for risk-adjustment, institutional quality benchmarking, and clinical research.

## Evolution of PRISM
* **PRISM (1988):** Derived from the Physiologic Stability Index (PSI); reduced variables from 34 to 14.
* **PRISM III (1996):** Expanded to 17 variables with refined categories and improved calibration. Validated over the first 12 or 24 hours of admission.
* **PRISM IV (2016):** The most recent update; optimized for current PICU practices. It focuses on the **first 4 hours** of admission to minimize the influence of treatment effects on the score.

## Components and Parameters (PRISM III/IV)
The score integrates multiple physiological systems using the "worst" value recorded during the defined assessment window.

### 1. Cardiovascular & Vital Signs
* **Systolic Blood Pressure:** Age-adjusted ranges.
* **Heart Rate:** Tachycardia or bradycardia.
* **Temperature:** Hyperthermia or hypothermia.
* **Mental Status:** Glasgow Coma Scale (GCS) or pupillary reactivity.

### 2. Respiratory Parameters
* **PaO₂ / FiO₂ ratio:** Indicator of oxygenation.
* **PaCO₂:** Indicator of ventilation.
* **pH / Total CO₂:** Assessment of acid-base status.

### 3. Biochemical & Hematological Parameters
* **Glucose:** Hyperglycemia or hypoglycemia.
* **Potassium:** Hyperkalemia or hypokalemia.
* **BUN / Creatinine:** Renal function markers.
* **White Blood Cell (WBC) Count:** Leukopenia or leukocytosis.
* **Platelet Count:** Thrombocytopenia.
* **Prothrombin Time (PT) / PTT:** Coagulation status.

## Calculation Methodology
* **Data Collection Window:** * PRISM III: First 12 or 24 hours.
    * PRISM IV: First 4 hours.
* **Scoring:** Points are assigned based on the degree of deviation from the normal physiological range.
* **Probability of Mortality (P):** Calculated using a logistic regression equation: 
    $logit(P) = \alpha + \beta(Score) + \text{other factors (age, admission source, etc.)}$
    $P = \frac{e^{logit}}{1 + e^{logit}}$

## Clinical Significance & Applications
* **Mortality Prediction:** A higher score correlates strongly with an increased risk of death.
* **Standardized Mortality Ratio (SMR):** Observed Mortality ÷ Predicted Mortality. An SMR > 1 suggests performance below benchmark; SMR < 1 suggests superior care.
* **Resource Allocation:** Helps in triaging patients and identifying those requiring the most intensive interventions.
* **Quality Improvement:** Allows for "apples-to-apples" comparison of PICU outcomes across different centers by adjusting for patient sickness at entry.

## Limitations
* **Treatment Effect:** If data is collected after 24 hours (PRISM III), the score may reflect the quality of treatment rather than the initial severity of the disease.
* **Age Sensitivity:** Performance can vary across different age groups (e.g., neonates vs. adolescents).
* **Exclude Groups:** Not validated for premature neonates or patients with certain chronic conditions.
* **Validation:** Requires periodic recalibration as PICU outcomes improve globally.