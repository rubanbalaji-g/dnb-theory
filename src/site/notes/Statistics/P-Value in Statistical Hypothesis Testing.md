---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/p-value-in-statistical-hypothesis-testing/","dgPassFrontmatter":true}
---

### Definition and Core Concept

- The p-value (probability value) is defined as the probability of obtaining a test statistic result as extreme as, or more extreme than, the one actually observed, assuming that the null hypothesis ($H_0$) is entirely true.
- It serves as a numerical measure of the weight of evidence either in favor of or against the stated null hypothesis.
- Because it represents a mathematical probability, the p-value always lies on a scale between 0 and 1.
- It specifically indicates how likely it is that random chance generated the collected data (or a rarer outcome) in a hypothetical scenario where there is absolutely no real difference or association between the groups being studied.

### Interpretation and Decision Rule

- To make a definitive statistical decision, the calculated p-value is compared against a pre-specified level of significance, denoted by the Greek letter alpha ($\alpha$), which is conventionally set at 0.05 (a 5% risk threshold).
- The smaller the p-value, the stronger the statistical evidence against the null hypothesis, indicating that the observed data would be highly unusual if $H_0$ were actually true.
- Conversely, a high p-value indicates weak evidence against the null hypothesis, suggesting that the data are highly consistent with $H_0$.
- A p-value less than $\alpha$ (e.g., $p < 0.05$) indicates that there is less than a 5% probability of observing such a difference merely by chance; thus, the result is deemed "statistically significant" and the null hypothesis is firmly rejected.
- A p-value greater than or equal to $\alpha$ means there is insufficient evidence to reject the null hypothesis, and the result is described as "not statistically significant".

### Summary of Statistical Decisions

|Scenario|Comparison with Alpha ($\alpha=0.05$)|Statistical Decision|Clinical Implication|
|:--|:--|:--|:--|
|**P-value < 0.05**|Less than the significance level.|Reject the Null Hypothesis ($H_0$).|Strong evidence of a statistically significant difference or association.|
|**P-value $\ge$ 0.05**|Greater than or equal to the significance level.|Fail to reject the Null Hypothesis ($H_0$).|Insufficient evidence; the observed difference may simply be due to chance.|

### Statistical versus Clinical Significance

- The p-value is strictly an indicator of statistical significance and provides absolutely no information regarding the clinical implication, practical importance, or magnitude of the observed difference.
- It does not convey the size of the treatment effect; understanding the true clinical effect size requires the concurrent use of Confidence Intervals (CI).
- With extremely large sample sizes, even tiny, clinically irrelevant differences can easily produce highly significant (very small) p-values.

### Common Misinterpretations

- A widespread and incorrect assumption is that the p-value represents the probability that the null hypothesis itself is true.
- Another common fallacy is interpreting the p-value as the absolute probability that the data arose entirely by chance.
- Failing to reject the null hypothesis due to a high p-value does not mean the null hypothesis has been proven to be true; it merely indicates a lack of sufficient data to disprove it.

### Guidelines for Reporting

- Exact p-values should be reported rather than using vague threshold statements like "$P < 0.05$", "$P \ge 0.05$", or "NS" (not significant).
- Reporting exact values allows researchers to interpret the p-value as a continuum of evidence rather than a strict binary category.
- If statistical software outputs a p-value of "0.000", it must be reported as $p < 0.001$, as the probability is very small but mathematically never exactly zero.
- Similarly, if the software outputs a p-value of exactly 1, it should be accurately reported as $p > 0.999$.