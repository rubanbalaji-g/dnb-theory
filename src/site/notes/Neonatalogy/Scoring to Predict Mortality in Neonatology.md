---
{"dg-publish":true,"permalink":"/neonatalogy/scoring-to-predict-mortality-in-neonatology/","dgPassFrontmatter":true}
---

### 1. Introduction
Neonatal mortality scoring systems quantify the "burden of illness" to predict outcomes (mortality/morbidity). They are essential tools in modern neonatology for:
* **Benchmarking:** Comparing performance between different NICUs (risk-adjusted mortality).
* **Audit & Quality Improvement:** Tracking unit performance over time.
* **Resource Allocation:** Determining nurse-patient ratios.
* **Prognostication:** Assisting (but not dictating) clinical decision-making and parental counseling.
* **Research:** Stratifying patients in clinical trials to ensure baseline comparability.

### 2. Principles of Scoring Systems
To be effective, a score must possess:
1.  **Discrimination:** Ability to correctly distinguish between survivors and non-survivors (Measured by Area Under ROC Curve - AUC). An AUC > 0.8 is considered excellent.
2.  **Calibration:** Agreement between predicted probability and observed outcome across different risk strata (Measured by Hosmer-Lemeshow Goodness-of-Fit test).
3.  **Simplicity:** Minimal data points, routinely available, and easy to compute.
4.  **Robustness:** Independent of treatment variations (avoiding "treatment bias").

### 3. Classification of Scoring Systems
| Category | Basis | Examples |
| :--- | :--- | :--- |
| **Demographic/Anatomic** | Static variables (Birth weight, Gestational Age) | Birth Weight alone, NMOS |
| **Physiologic** | Derangement of homeostasis | SNAP, SNAP-II, SNAP-PE |
| **Combined** | Physiology + Demographics | CRIB, CRIB-II |
| **Therapeutic** | Intensity of intervention/workload | NTISS, TISS |
| **Transport** | Stability during transfer | TRIPS, MINT |

### 4. Major Physiologic & Combined Scores (The "Gold Standards")

#### A. CRIB (Clinical Risk Index for Babies) #scoring 
Designed for VLBW infants (<1500g).
* **CRIB I (1993):**
    * **Timing:** Data collected in first 12 hours.
    * **Items (6):** Birth Weight, GA, Congenital Malformations, Max Base Excess, Min FiO2, Max FiO2.
    * **Limitations:** Heavily influenced by early treatment practices (FiO2).

* **CRIB II (2003):** Updated to remove treatment bias (FiO2 removed).
    * **Timing:** First hour of admission (Admission Score).
    * **Items (5):**
        1.  <span style="color:rgb(255, 0, 0)">B</span>irth Weight
        2.  <span style="color:rgb(255, 0, 0)">E</span>xcess Base
        3.  <span style="color:rgb(255, 0, 0)">S</span>ex
        4.  <span style="color:rgb(255, 0, 0)">T</span>emperature at the time of admission (Hypotherimia risk)
        5.  <span style="color:rgb(255, 0, 0)">G</span>estational Age
> [!red] 🧠 Mnemonic
>    BEST G

* **Advantages:** Simpler, immediate assessment, less influenced by unit protocols.

#### B. SNAP (Score for Neonatal Acute Physiology) #scoring 
Applicable to **all** birth weights and gestations.
* **SNAP (1993):** Included 34 physiologic variables collected over first 24 hours. Highly accurate but clinically cumbersome.
* **SNAP-PE:** Added "Perinatal Extension" (Apgar score, Birth weight, SGA status).
* **SNAP-II (2001):** Simplified using multivariate regression to **6 key variables** (collected in first 12 hours):
	1. <span style="color:rgb(0, 176, 80)">p</span>H - Lowest 
	2. <span style="color:rgb(0, 176, 80)">U</span>rine Output (<1ml/kg/hr)
	3. <span style="color:rgb(0, 176, 80)">M</span>ean Arterial Pressure (MAP) - Lowest
	4. <span style="color:rgb(0, 176, 80)">P</span>aO<sub>2</sub>/FiO<sub>2</sub> ratio - worst
	5. <span style="color:rgb(0, 176, 80)">Se</span>izures (multiple or repeatitive)
	6. <span style="color:rgb(0, 176, 80)">T</span>emperature (lowest)
> [!Green] 🧠 Mnemonic
>    PUMP SeT

* **SNAP-PE-II:** SNAP-II + Birth Weight + SGA + Apgar (5 min).
* **Utility:** Considered the "Gold Standard" for physiology-based risk adjustment in mixed NICU populations.

### 5. Therapeutic & Workload Scores
* **NTISS (Neonatal Therapeutic Intervention Scoring System):**
    * Measures severity based on the intensity of therapy (e.g., ventilation mode, number of lines, medications).
    * **Main Use:** Nursing manpower planning and resource allocation.
    * **Flaw:** "Circular logic" – sicker babies get more treatment, but aggressive treatment can inflate the score independent of actual mortality risk (Treatment Bias).

### 6. Transport Scores
* **TRIPS (Transport Risk Index of Physiologic Stability):**
    * Assesses stability at the referring hospital and on admission to NICU.
    * **Components:** Temperature, BP, Respiratory status, Response to noxious stimuli.
    * **Use:** Audit of transport team quality.

### 7. Comparison: CRIB-II vs. SNAP-PE-II
| Feature               | CRIB-II                                        | SNAP-PE-II                             |
| :-------------------- | :--------------------------------------------- | :------------------------------------- |
| **Target Population** | Preterm (<31 weeks ) / VLBW only (<1500 grams) | All Neonates                           |
| **Complexity**        | Simple (5 items)                               | Moderate (6 physiologic + 3 perinatal) |
| **Data Window**       | Admission (0-1 hr)                             | First 12 hours                         |
| **invasiveness**      | Requires ABG (Base Excess)                     | Requires ABG, BP, Urine output         |
| **Performance**       | Excellent for VLBW                             | Excellent for Term & Preterm           |

### 8. Application in LMIC (Low-Middle Income Countries)
* **Challenges:**
    * Lack of routine ABG/BP monitoring in peripheral centers makes SNAP/CRIB difficult.
    * Differences in mortality drivers (Sepsis/Asphyxia vs. Prematurity alone).
* **Solutions:**
    * **NMOS (Neonatal Mortality Outcome Score):** Uses simplified parameters (Age, WT, RR, Cyanosis, Capillary refill).
    * **Simplified SNAP-II:** Using SpO2 instead of PaO2/FiO2 ratio.

### 9. Conclusion
No single score is perfect. **CRIB-II** is preferred for VLBW benchmarking due to simplicity, while **SNAP-PE-II** provides a comprehensive physiologic assessment for the entire NICU population. For true quality improvement, units must participate in collaborative networks (e.g., Vermont Oxford Network) using standardized, risk-adjusted mortality scores.