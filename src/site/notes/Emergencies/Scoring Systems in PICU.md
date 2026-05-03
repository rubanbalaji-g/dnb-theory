---
{"dg-publish":true,"uptext":"Back to Index (🚑 Emergencies and Critical Care)","uplink":"/emergencies/emergencies-and-critical-care/","permalink":"/emergencies/scoring-systems-in-picu/","dgPassFrontmatter":true}
---

## 1. INTRODUCTION AND RATIONALE
Scoring systems in the Pediatric Intensive Care Unit (PICU) are objective, mathematical tools designed to quantify the severity of illness, predict the probability of mortality, and assess the degree of organ dysfunction. Because critically ill children present with a heterogeneous mix of diagnoses and varying degrees of physiological derangement, subjective clinical assessment alone is insufficient for epidemiological and quality-control purposes. 

**Core Utilities of PICU Scoring Systems:**
* **Prognostication and Risk Stratification:** Establishing the probability of death for individual patients and stratifying them by risk for clinical trials.
* **Benchmarking and Quality Assurance:** Comparing the performance of different PICUs using the Standardized Mortality Ratio (SMR), calculated as Observed Deaths divided by Expected Deaths. An SMR < 1.0 indicates better-than-expected survival.
* **Resource Allocation:** Guiding the distribution of intensive care resources, step-down facility triage, and nursing workloads.
* **Longitudinal Tracking:** Monitoring the progression or resolution of organ dysfunction over the course of the PICU stay.
* **Standardization in Research:** Ensuring uniform inclusion criteria and baseline illness severity matching in multicenter critical care trials.

## 2. STATISTICAL VALIDATION OF SCORING SYSTEMS
To understand the efficacy of any scoring system, two distinct statistical properties must be evaluated. Examiners expect postgraduates to clearly distinguish between these concepts:
* **Discrimination:** The ability of the model to correctly distinguish between a patient who will survive and one who will die. It is measured using the Area Under the Receiver Operating Characteristic curve (AUROC). An AUROC of 1.0 is perfect, >0.8 is good, and >0.9 is excellent.
* **Calibration:** The degree of agreement between the predicted probability of death and the actual observed mortality across various deciles of risk. It is evaluated using the Hosmer-Lemeshow goodness-of-fit test. A well-calibrated model will accurately predict 10 deaths in a cohort of 100 children who each have a 10% predicted risk of mortality.

## 3. CLASSIFICATION OF PICU SCORING SYSTEMS
Scoring systems are broadly classified based on their primary objective and timing of assessment:
1. **Mortality Prediction Models (Admission-based):** PRISM, PIM.
2. **Organ Dysfunction Models (Longitudinal/Daily):** PELOD, pSOFA.
3. **Disease-Specific Models:** Phoenix Sepsis Score (Sepsis), Pediatric Trauma Score (Trauma).
4. **Therapeutic Intervention / Workload Models:** VIS, TISS.
5. **Functional Outcome Models (Post-Discharge):** POPC, PCPC, FSS.

## 4. MORTALITY PREDICTION MODELS (ADMISSION DATA)

### A. Pediatric Risk of Mortality (PRISM)
First developed in 1988, the PRISM score has evolved through PRISM III and currently PRISM IV. It is designed to estimate mortality risk based on the worst physiological derangements observed during the initial ICU period.
* **Timing of Data Collection:** The most abnormal values recorded during the first 12 to 24 hours of PICU admission are utilized.
* **Variables in PRISM IV:** Incorporates 17 physiological and laboratory variables, divided into distinct domains:
  * **Cardiovascular/Vital Signs:** Systolic blood pressure, heart rate, temperature.
  * **Neurologic:** Pupillary reflexes, mental status (Glasgow Coma Scale).
  * **Respiratory & Acid-Base:** PaO2, pH, pCO2, total CO2.
  * **Chemistry & Hematology:** Serum glucose, potassium, blood urea nitrogen (BUN), creatinine, total white blood cell (WBC) count, platelet count, Prothrombin Time (PT), and Partial Thromboplastin Time (PTT).
* **Advantages:** Exceptionally high discrimination power; provides a comprehensive physiological snapshot. It is highly validated across diverse PICU populations globally.
* **Limitations (The Treatment Paradox):** Because PRISM gathers data over 24 hours, early, aggressive, and high-quality PICU interventions can normalize physiological variables (e.g., fluid resuscitation normalizing heart rate and BUN). Paradoxically, this lowers the PRISM score, making the patient appear "less sick" at baseline, which confounds the assessment of the unit's actual care quality. This phenomenon is known as "lead-time bias" or the "treatment paradox."

### B. Pediatric Index of Mortality (PIM)
Developed specifically to overcome the treatment paradox seen with PRISM, PIM (currently utilized as PIM 2 and PIM 3) relies on data collected at the immediate point of ICU encounter.
* **Timing of Data Collection:** Data must be collected within the first 1 hour of PICU admission, or at the time of initial face-to-face contact with the ICU team.
* **Variables in PIM 3:** Comprises 10 variables, making it significantly less labor-intensive than PRISM. It heavily weights the pre-ICU context.
	* **Physiological:** Systolic blood pressure, pupillary reaction to light, PaO2/FiO2 ratio, and base excess.
	* **Therapeutic:** Whether the patient is on mechanical ventilation at the time of admission.
	* **Contextual & Diagnostic:** Classifies admissions as elective vs. non-elective; assesses post-cardiopulmonary bypass status; and stratifies patients based on specific high-risk diagnoses (e.g., severe combined immunodeficiency, leukemia) and low-risk diagnoses (e.g., asthma, bronchiolitis).
* **Advantages:** Because it assesses the patient prior to the full effect of intensive care interventions, PIM accurately reflects the severity of illness presented to the ICU, completely avoiding the treatment paradox. It requires no complex laboratory panels, making it highly applicable in resource-limited settings.
* **Limitations:** It may underestimate the true risk of mortality in patients who experience sudden clinical deterioration or nosocomial complications later in their PICU stay.

## 5. ORGAN DYSFUNCTION MODELS (LONGITUDINAL TRACKING)
While PRISM and PIM predict death, a binary outcome, many critically ill children survive with substantial morbidity. Organ dysfunction scores quantify the severity of Multiple Organ Dysfunction Syndrome (MODS) on a continuous spectrum.

### A. Pediatric Logistic Organ Dysfunction (PELOD-2)
PELOD-2 is the premier tool for describing and quantifying organ dysfunction sequentially throughout the PICU stay.
* **Timing of Data Collection:** Calculated on specific clinically relevant days (e.g., Days 1, 2, 5, 8, 12, 16, 18, and at discharge). The worst value for each variable on that specific day is recorded.
* **Variables:** Consists of 10 variables evaluating 5 distinct organ systems:
  1. **Neurologic:** Glasgow Coma Scale (GCS) and pupillary reaction.
  2. **Cardiovascular:** Serum lactatemia and Mean Arterial Pressure (MAP).
  3. **Renal:** Serum creatinine (adjusted for age).
  4. **Respiratory:** PaO2/FiO2 ratio, pCO2, and the use of invasive mechanical ventilation.
  5. **Hematologic:** Leukocyte count and platelet count.
* **Key Distinctions:** Unlike adult organ dysfunction scores, PELOD-2 intentionally omits hepatic parameters (bilirubin/transaminases), as statistical modeling showed they did not independently improve mortality prediction in critically ill children.

### B. Pediatric Sequential Organ Failure Assessment (pSOFA)
Derived from the highly successful adult SOFA score, pSOFA was adapted to track daily organ dysfunction, specifically in the context of identifying pediatric sepsis.
* **Variables:** Evaluates 6 organ systems, scored from 0 (normal) to 4 (severe failure).
	1. **Respiratory:** PaO2/FiO2 ratio (or SpO2/FiO2 ratio if blood gases are unavailable).
	2. **Coagulation:** Platelet count.
	3. **Hepatic:** Serum bilirubin.
	4. **Cardiovascular:** Mean Arterial Pressure (MAP) and the dose of vasoactive infusions. Uses age-adjusted MAP cut-offs.
	5. **Neurologic:** Glasgow Coma Scale (GCS).
	6. **Renal:** Serum creatinine or urine output.
* **Utility:** Highly sensitive for tracking day-to-day deterioration and evaluating the response to therapeutic interventions in septic shock.

## 6. SPECIFIC DISEASE MODELS: THE PHOENIX SEPSIS SCORE (2024 UPDATE) #recent
This is the most critical recent advancement in pediatric critical care scoring. In 2024, the Society of Critical Care Medicine (SCCM) Pediatric Sepsis Definition Task Force retired the outdated 2005 IPSCC SIRS-based criteria, introducing the data-driven Phoenix criteria.
* **Rationale:** Traditional Systemic Inflammatory Response Syndrome (SIRS) criteria lacked specificity; nearly all hospitalized children have tachycardia or tachypnea. Sepsis is now fundamentally defined as a dysregulated host response causing life-threatening organ dysfunction.
* **The Score:** The Phoenix Sepsis Score (PSS) is a 4-organ system model that identifies potentially life-threatening dysfunction. 
* **Variables & Domains:**
	1. **Respiratory:** Based on PaO2/FiO2 ratio, SpO2/FiO2 ratio, and the requirement for invasive or non-invasive mechanical ventilation.
	2. **Cardiovascular:** Based on Mean Arterial Pressure, blood lactate levels, and the requirement for vasoactive medications.
	3. **Coagulation:** Based on platelet count, INR, D-dimer, and fibrinogen levels.
	4. **Neurological:** Based strictly on the Glasgow Coma Scale (GCS).
* **Diagnostic Criteria:**
	* **Pediatric Sepsis:** Suspected or confirmed infection PLUS a Phoenix Sepsis Score of 2 or higher.
	* **Pediatric Septic Shock:** Defined as children meeting the criteria for sepsis who also have cardiovascular dysfunction (indicated by at least 1 point in the cardiovascular domain of the PSS, such as severe hypotension, lactate > 5 mmol/L, or need for vasoactives).
	* **Impact:** A PSS >= 2 correlates with a significantly higher risk of in-hospital mortality. It improves diagnostic specificity and epidemiological tracking globally.



## 7. THERAPEUTIC INTENSITY AND WORKLOAD SCORES
These scores proxy illness severity by measuring how much medical and nursing intervention the patient requires.

### A. Vasoactive-Inotropic Score (VIS)
An essential calculation in modern PICUs, particularly in post-operative cardiac care and vasodilatory septic shock. It standardizes the quantification of pharmacological cardiovascular support.
* **Formula:** 
  VIS = Dopamine + Dobutamine + (10 x Milrinone) + (100 x Epinephrine) + (100 x Norepinephrine) + (10,000 x Vasopressin).
  *(Note: Dopamine, Dobutamine, Milrinone, Epinephrine, and Norepinephrine are measured in mcg/kg/min. Vasopressin is measured in Units/kg/min).*
* **Clinical Application:** A high maximum VIS within the first 24 to 48 hours of PICU admission is a robust independent predictor of poor outcomes, prolonged mechanical ventilation, and mortality.

### B. Therapeutic Intervention Scoring System (TISS)
* **Purpose:** Measures the nursing workload and therapeutic interventions (e.g., multiple central lines, continuous renal replacement therapy, ECMO, frequent lab draws). 
* **Utility:** While it indirectly reflects illness severity (sicker patients need more interventions), its primary role is in PICU administration, staffing allocation, and budget planning.



## 8. FUNCTIONAL OUTCOME SCORES (POST-PICU ASSESSMENT)
With decreasing PICU mortality rates, the focus of pediatric critical care has shifted towards "PICU Survivorship" and minimizing Post-Intensive Care Syndrome in Pediatrics (PICS-p). Assessing functional morbidity at discharge is paramount.

### A. Pediatric Overall Performance Category (POPC) & Pediatric Cerebral Performance Category (PCPC)
* **Structure:** These are 6-point ordinal scales used to quantify short-term and long-term functional and cognitive outcomes.
* **Scale Breakdown:**
  1. Normal function.
  2. Mild disability.
  3. Moderate disability.
  4. Severe disability.
  5. Coma or vegetative state.
  6. Brain death / Death.
* **Utility:** Patients are scored at pre-admission baseline, at PICU discharge, and at follow-up. An increase of >= 1 point from baseline indicates newly acquired morbidity.

### B. Functional Status Scale (FSS)
Developed specifically by the Collaborative Pediatric Critical Care Research Network (CPCCRN), the FSS is more objective and granular than the POPC/PCPC.
* **Domains:** Evaluates 6 distinct domains of functioning: Mental Status, Sensory Functioning, Communication, Motor Functioning, Feeding, and Respiratory Status.
* **Scoring:** Each domain is scored from 1 (normal) to 5 (very severe dysfunction). The total sum score ranges from 6 (completely normal) to 30 (most severe dysfunction).
* **Utility:** Highly sensitive for detecting subtle, domain-specific morbidities that impact the child's quality of life after critical illness.



## 9. LIMITATIONS AND CHALLENGES OF PICU SCORING SYSTEMS
While robust, candidates must recognize the inherent limitations of applying these mathematical models in real-world clinical practice:
* **Failure of Calibration in LMICs:** Most major scores (PRISM, PIM) are derived and validated from massive databases in High-Income Countries (HICs). When applied to Low- and Middle-Income Countries (LMICs), they often maintain good discrimination but demonstrate poor calibration. They may systematically under-predict mortality due to unmeasured variables like underlying severe acute malnutrition, delayed presentation, and resource constraints.
* **Missing Data and Laboratory Constraints:** Complex scores like PRISM IV require extensive blood panels (PT/PTT, ABGs, comprehensive chemistries). In resource-limited settings, absent data points are generally coded as "normal" by the scoring algorithms, artificially lowering the predicted mortality risk.
* **Inter-observer Variability:** Clinical parameters, particularly the Glasgow Coma Scale in sedated or pre-verbal infants, and pupillary reflexes, are subject to significant inter-observer variability, impacting score reliability.
* **The "Moving Target" of Critical Care:** As technology improves and therapies evolve (e.g., widespread use of High-Flow Nasal Cannula, early ECMO), overall PICU mortality drops. Consequently, scoring systems must be periodically recalibrated (e.g., the transition from PRISM III to PRISM IV) to maintain accuracy.
* **Inability to Predict Individual Outcomes:** It is a cardinal rule of critical care that scoring systems are designed for population-level statistics and cohort benchmarking. They must never be used to definitively dictate the withdrawal or withholding of life-sustaining therapies in an individual patient.
## Table 1 : Mortality/Organ Dysfunction Scores

| Component / Domain            | PRISM IV                                                                                                      | PIM 3                                                                                                                                           | PELOD-2                                       | pSOFA                               | Phoenix Sepsis Score (PSS)                                       |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | :---------------------------------- | :--------------------------------------------------------------- |
| **Cardiovascular**            | Systolic blood pressure, heart rate, temperature.                                                             | Systolic blood pressure.                                                                                                                        | Mean Arterial Pressure (MAP), serum lactate.  | MAP, dose of vasoactive infusions.  | MAP, blood lactate, vasoactive medications.                      |
| **Respiratory & Acid-Base**   | PaO2, pH, pCO2, total CO2.                                                                                    | PaO2/FiO2 ratio, base excess.                                                                                                                   | PaO2/FiO2 ratio, pCO2.                        | PaO2/FiO2 ratio or SpO2/FiO2 ratio. | PaO2/FiO2 ratio, SpO2/FiO2 ratio,                                |
| **Neurologic**                | Pupillary reflexes, mental status (Glasgow Coma Scale).                                                       | Pupillary reaction to light.                                                                                                                    | Glasgow Coma Scale (GCS), pupillary reaction. | Glasgow Coma Scale (GCS).           | Glasgow Coma Scale (GCS).                                        |
| **Renal**                     | Blood urea nitrogen (BUN), serum creatinine.                                                                  | _Not evaluated_                                                                                                                                 | Serum creatinine (adjusted for age).          | Serum creatinine or urine output.   | _Not evaluated_                                                  |
| **Hematologic & Coagulation** | Total white blood cell (WBC) count, platelet count, Prothrombin Time (PT), Partial Thromboplastin Time (PTT). | _Not evaluated_                                                                                                                                 | Leukocyte count, platelet count.              | Platelet count.                     | Platelet count, INR, D-dimer, fibrinogen.                        |
| **Hepatic**                   | _Not evaluated_                                                                                               | _Not evaluated_                                                                                                                                 | _Omitted intentionally_.                      | Serum bilirubin.                    | _Not evaluated_                                                  |
| **Chemistry**                 | Serum glucose, potassium.                                                                                     | _Not evaluated_                                                                                                                                 | _Not evaluated_                               | _Not evaluated_                     | _Not evaluated_                                                  |
| **Contextual & Therapeutic**  | _Not evaluated_                                                                                               | Mechanical ventilation at admission, elective vs. non-elective admission, post-cardiopulmonary bypass status, high-risk and low-risk diagnoses. | Use of invasive mechanical ventilation.       | _Not evaluated_                     | requirement for invasive or non-invasive mechanical ventilation. |

