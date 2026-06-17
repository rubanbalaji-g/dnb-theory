---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/number-needed-to-treat-nnt-and-number-needed-to-harm-nnh/","dgPassFrontmatter":true}
---

## Number Needed To Treat (NNT)

### Definition And Concept

- Number Needed to Treat (NNT) is a measure used to communicate the clinical impact of an intervention to patients, clinicians, and policymakers.
- It specifies the exact number of patients who need to be treated in order to prevent one additional adverse event from occurring.
- NNT is not an absolute measure of the effectiveness of a drug.
- Instead, it is an estimate of efficacy specifically when compared to a defined comparator, such as a placebo.
- It provides a clearer picture of treatment impact than relative risk, which can often over-inflate the perceived benefits of an intervention.

### Mathematical Calculation

- NNT is mathematically calculated as the inverse of the Absolute Risk Reduction (ARR).
- The ARR is the actual difference in absolute risk between the control group and the intervention group.

$$NNT = \frac{1}{ARR}$$

- If the calculation yields a fraction, it must be rounded up to the next whole patient.
- For example, if the ARR is 0.036 (or 3.6%), the calculation is $1 / 0.036 = 27.77$.
- Therefore, at least 28 patients would need to be treated to prevent a single adverse event.

### Clinical Interpretation

- The smaller the NNT, the more effective the intervention.
- For example, an NNT of 15 implies that 15 patients must undergo a specific therapy to prevent one patient from developing a negative outcome like neuropathy.
- NNT will inherently vary according to the baseline risk of the specific population being studied.
- Therefore, when quoting an NNT, the exact comparator used must always be explicitly stated to provide proper context.

## Number Needed To Harm (NNH)

### Definition And Concept

- The concept of NNT can be equally applied to harmful outcomes instead of beneficial ones.
- When an intervention or exposure produces a harmful effect, the measure is termed the Number Needed to Harm (NNH).
- NNH indicates how many patients must be exposed to an intervention or risk factor to observe one single adverse event taking place in the exposed group.

### Mathematical Calculation

- NNH is calculated as the inverse of the Absolute Risk Increase (or attributable risk).

$$NNH = \frac{1}{Absolute\ Risk\ Increase}$$

### Clinical Interpretation

- The larger the NNH, the safer the intervention is considered to be.
- A very large NNH indicates that many people must be exposed before one person is harmed, implying low toxicity or a high safety profile.
- A very small NNH indicates a highly toxic exposure or a dangerous side effect profile.

## Tabular Comparison Of NNT And NNH

|Parameter|Number Needed To Treat (NNT)|Number Needed To Harm (NNH)|
|:--|:--|:--|
|**Primary Focus**|Beneficial interventions and preventive treatments.|Harmful exposures, risk factors, or side effects.|
|**Definition**|Patients needed to treat to prevent one adverse event.|Patients needed to expose to cause one adverse event.|
|**Calculation**|$1 / Absolute\ Risk\ Reduction$.|$1 / Absolute\ Risk\ Increase$.|
|**Indicator Of Success**|Smaller numbers indicate a highly effective intervention.|Larger numbers indicate a highly safe intervention.|
|**Clinical Value**|Helps make decisions between competing treatment options.|Helps assess acceptable toxicity and safety thresholds.|
