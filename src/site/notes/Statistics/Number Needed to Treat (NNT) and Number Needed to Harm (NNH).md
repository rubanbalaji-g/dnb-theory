---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/number-needed-to-treat-nnt-and-number-needed-to-harm-nnh/","dgPassFrontmatter":true}
---

### Core Concepts and Clinical Utility

- The Number Needed to Treat (NNT) and the Number Needed to Harm (NNH) are essential statistical measures used to communicate the clinical impact of a treatment to patients, clinicians, and policymakers.
- They provide a highly practical assessment of an intervention's effect size by translating complex probabilities into numbers that assist in making direct choices for individual patient care.
- These measures are heavily preferred over relative risk reduction (RRR), which can falsely over-inflate the perceived benefits of a treatment.
- While relative risk reduction remains constant irrespective of the event rates in the population, both NNT and NNH are derived from absolute risk, which varies appropriately according to the actual event rate in the population.

### Number Needed to Treat (NNT)

- The NNT is formally defined as the number of patients that need to be treated with a specific intervention in order to prevent a single adverse event that would have occurred otherwise.
- It is calculated mathematically as the inverse of the Absolute Risk Reduction (ARR).
- The formula is expressed as: $NNT = \frac{1}{ARR}$.
- The Absolute Risk Reduction (ARR) itself is the difference in the absolute risk between the control group and the exposed treatment group.
- For example, in a study assessing intensive diabetes therapy, if 9.6% of patients in usual care develop neuropathy compared to only 2.8% in the intensive therapy group, the ARR is 6.8% (or 0.068).
- Calculating the NNT ($1 \div 0.068$) yields 14.7, which is conventionally rounded up to 15. This means that 15 diabetic patients need to be treated with intensive therapy to prevent one patient from developing neuropathy.
- A smaller NNT value indicates a highly effective intervention, as fewer patients need to receive the therapy to achieve a definitive clinical benefit.

### Number Needed to Harm (NNH)

- The statistical concept of NNT can equally be applied to harmful or adverse outcomes; when evaluating toxicity or side effects, the metric becomes the Number Needed to Harm (NNH).
- NNH is defined as the specific number of patients who need to be exposed to an intervention or risk factor to observe one single additional adverse event taking place in the exposed group.
- In clinical evaluation, a larger NNH value indicates a much safer intervention, as it implies that a vast number of patients must be exposed before even one experiences the adverse effect.

### Limitations and Clinical Caveats

- NNT and NNH are not absolute measures of an intervention's effectiveness; they are strictly estimates of efficacy and safety relative to a specific comparator, such as a placebo or a standard alternative treatment.
- Therefore, when quoting an NNT or NNH in clinical practice, the comparator must always be explicitly stated (e.g., at least 28 patients need to be treated with statins to prevent a single cardiovascular death _when compared specifically to a placebo_).
- Because they depend on absolute risk differences, NNT and NNH will inherently vary according to the baseline risk of the specific population being treated.
- If the baseline event rate of a disease becomes rarer in a given population, the Absolute Risk Reduction will correspondingly get smaller, which inevitably causes the NNT to increase.
- For instance, an intervention might boast a 50% relative risk reduction, but if the baseline risk drops from 0.20 to 0.06, the ARR shrinks from 10% down to 3%, subsequently increasing the NNT from 10 up to 33 patients.

### Comparative Summary

|Feature|Number Needed to Treat (NNT)|Number Needed to Harm (NNH)|
|:--|:--|:--|
|**Clinical Definition**|Number of patients treated to prevent one adverse event.|Number of patients exposed to observe one adverse event.|
|**Primary Application**|Evaluating therapeutic efficacy and clinical benefit.|Evaluating treatment safety, side effects, and toxicity.|
|**Calculation Basis**|Inverse of Absolute Risk Reduction ($1 \div ARR$).|Inverse of Absolute Risk Increase.|
|**Ideal Value**|A smaller number is highly desirable (more effective).|A larger number is highly desirable (safer).|