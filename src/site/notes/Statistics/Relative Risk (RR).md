---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/relative-risk-rr/","dgPassFrontmatter":true}
---

## Overview Of Risk Analysis

Epidemiological studies and clinical trials rely on statistical measures to quantify the relationship between an exposure and an outcome. These measures help clinicians understand the probability of an event occurring. They provide essential context regarding whether an exposure is harmful or protective.

## Relative Risk

### Definition And Concept

- Relative Risk (RR) evaluates the strength of an association between an exposure and a clinical outcome.
- It is calculated exclusively in prospective studies like cohort studies and randomized controlled trials.
- It estimates the probability of an event in the exposed group compared to the non-exposed control group.

### Mathematical Calculation

- RR is derived by dividing the true incidence of the disease among the exposed group by the incidence among the non-exposed group.
- The calculation utilizes data arranged in a standard 2x2 contingency table.

$$RR = \frac{Incidence\ among\ exposed}{Incidence\ among\ non-exposed} = \frac{a / (a + b)}{c / (c + d)}$$

### Clinical Interpretation

- **RR = 1.0**: The risk of the event is identical in both groups, indicating a complete lack of association.
- **RR < 1.0**: The risk is lower in the exposed group. This suggests that the exposure has a protective therapeutic effect.
- **RR > 1.0**: The risk is significantly higher in the exposed group. This indicates that the exposure is a harmful risk factor.
- A 95% Confidence Interval (CI) must be reported alongside the RR. If the CI contains 1.0, the association is not statistically significant.

## Relative Risk Reduction

### Definition And Characteristics

- Relative Risk Reduction (RRR) quantifies the proportional decrease in the risk of an adverse event among the exposed group.
- It compares the efficacy of an intervention relative to the control group.
- RRR remains a constant measure irrespective of the underlying event rates within the population.
- Because it presents proportional changes, RRR often appears much more impressive than absolute measures.

### Mathematical Calculation

- It is calculated directly from the Relative Risk.

$$RRR = 1 - RR$$

- Alternatively, it can be expressed as a percentage by multiplying the result by 100.

## Absolute Risk Reduction

### Definition And Concept

- Absolute Risk Reduction (ARR) measures the exact difference in absolute risk between the control group and the intervention group.
- It is also referred to as the risk difference.
- Unlike RRR, the ARR varies significantly according to the baseline event rate of the population.
- As the event rate in a population gets rarer, the ARR becomes progressively smaller.

### Mathematical Calculation And Utility

- It is calculated by subtracting the risk in the exposed group from the risk in the unexposed group.

$$ARR = Risk_{control} - Risk_{treatment}$$

- The ARR is essential for calculating the Number Needed to Treat (NNT).
- The NNT represents the precise number of patients that must be treated to prevent one single adverse event.

$$NNT = \frac{1}{ARR}$$

## Attributable Risk Increase

### Definition And Concept

- Attributable risk calculates the absolute difference in disease incidence between an exposed group and a non-exposed group.
- While ARR measures the reduction of risk due to a protective intervention, attributable risk quantifies the absolute increase in risk caused by a harmful exposure.
- It isolates the specific increase in disease incidence that can be directly attributed to the risk factor being studied.

### Mathematical Calculation

- It is calculated by subtracting the incidence rate of the non-exposed group from the incidence rate of the exposed group.

$$Attributable\ Risk = Incidence_{exposed} - Incidence_{non-exposed}$$

- If the confidence interval for the attributable risk includes zero, there is no statistically significant association.
- Similar to NNT, attributable risk is used to calculate the Number Needed to Harm (NNH).
- NNH indicates how many individuals must be exposed to the risk factor to observe one additional adverse event.

## Tabular Comparison Of Risk Measures

|Measure|Description|Formula / Derivation|Clinical Utility|
|:--|:--|:--|:--|
|**Relative Risk (RR)**|Ratio of probability of an event in exposed versus non-exposed.|$Risk_{exposed} / Risk_{control}$|Identifies strength and direction of an association.|
|**Relative Risk Reduction (RRR)**|Proportional reduction in relative risk.|$1 - RR$|Evaluates intervention efficacy but can overestimate benefits.|
|**Absolute Risk Reduction (ARR)**|Actual reduction in event probability due to treatment.|$Risk_{control} - Risk_{treatment}$|Determines true clinical impact and dictates the NNT.|
|**Attributable Risk Increase**|Absolute increase in event probability due to a risk factor.|$Risk_{exposed} - Risk_{control}$|Quantifies harmful impact of exposures and dictates the NNH.|
