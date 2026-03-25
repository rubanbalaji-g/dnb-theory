---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/relative-risk-rr/","dgPassFrontmatter":true}
---

### Definition and Calculation

- Relative risk (RR), which is also synonymous with cumulative incidence ratio or risk ratio, is a fundamental statistical measure used to quantify the association between exposure to a particular risk factor and the subsequent occurrence of a specific clinical outcome or disease.
- It is mathematically defined as the ratio of the incidence rate (or probability) of an event occurring among an exposed group divided by the incidence rate of the event occurring among a non-exposed (control) group.
- To calculate the relative risk, data are typically organized into a 2x2 contingency table where 'a' represents individuals who are exposed and diseased, 'b' represents exposed and healthy, 'c' represents unexposed and diseased, and 'd' represents unexposed and healthy.
- The risk or incidence among the exposed population is calculated as the number of diseased individuals divided by the total number of exposed individuals: $a / (a+b)$.
- The risk or incidence among the non-exposed population is calculated correspondingly as $c / (c+d)$.
- Consequently, the formal equation for Relative Risk is expressed as $RR = \frac{a / (a+b)}{c / (c+d)}$.
- For instance, if a cohort study demonstrates that the risk of coronary heart disease among a population of smokers is 10% and the risk among non-smokers is 5%, the calculated relative risk is 2, meaning smokers face double the risk compared to non-smokers.

### Study Design Applicability

- The calculation of relative risk is strictly reserved for prospective study designs, such as longitudinal cohort studies and randomized controlled trials.
- These specific study designs allow researchers to follow disease-free subjects forward in time, thereby enabling the direct and accurate measurement of true disease incidence within the defined populations.
- Relative risk cannot be validly calculated in retrospective case-control studies, because the total populations at risk are not naturally observed; instead, the researcher artificially fixes the number of cases and controls.
- In such retrospective designs, the odds ratio (OR) must be utilized as the measure of association; however, if the disease being studied is exceptionally rare, the odds ratio will mathematically approximate the relative risk.

### Clinical Interpretation

- The interpretation of a relative risk estimate centers around comparing the calculated value to a null value of 1.0, which assumes equal risk across both populations.
- To determine statistical significance, the 95% confidence interval for the relative risk must be evaluated; if the confidence interval includes the value of 1, the association is deemed not statistically significant.

|Relative Risk Value|Clinical Interpretation|
|:--|:--|
|**RR = 1.0**|The incidence rate is identical among both the exposed and non-exposed subjects, indicating a complete lack of association between the exposure and the disease.|
|**RR > 1.0**|The risk is elevated in the exposed group, providing epidemiological evidence that the exposure serves as a harmful risk factor for the disease. A relative risk of five indicates an exposed person is five times as likely to contract the illness.|
|**RR < 1.0**|The risk is lower in the exposed group, providing evidence for a protective effect, which is often the desired outcome when evaluating new vaccines or therapeutic interventions.|

### Clinical Implications and Limitations

- While relative risk effectively communicates the strength of an association between an exposure and a disease, it does not convey the absolute probability that an individual will actually develop the condition.
- A major limitation of relying on relative risk in clinical practice is that it remains a constant ratio irrespective of the underlying baseline event rates within the population.
- When reporting the benefits of a medical intervention, utilizing the relative risk reduction (calculated as $1 - RR$) in isolation is likely to produce a false sense of over-estimation regarding the treatment's true clinical efficacy.
- For example, a relative risk reduction of 20% might sound highly impressive, but if the absolute baseline risk of the disease is very small, the actual absolute risk reduction (ARR) might be a trivial 0.1%.
- The lower the baseline event rate in the non-exposed control group, the more drastically the relative risk reduction will diverge from and inflate the perceived absolute risk reduction.
- To accurately reflect true clinical impact, establish appropriate healthcare priorities, and accurately calculate the Number Needed to Treat (NNT), best statistical practice dictates that relative risk should never be presented in isolation; it must always be reported alongside the absolute baseline risk or the absolute risk reduction.
- Furthermore, unlike adjusted odds ratios derived from multiple logistic regression, a crude relative risk calculation does not possess the inherent mathematical ability to adjust for or control multiple confounding variables that may skew the association.