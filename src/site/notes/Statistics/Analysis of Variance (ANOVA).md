---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/analysis-of-variance-anova/","dgPassFrontmatter":true}
---

### Definition and Purpose

- Analysis of variance (ANOVA) is a commonly used statistical methodology for partitioning the total variance within a data set into components, allowing researchers to estimate and test hypotheses about population means.
- It is primarily applied to examine the difference in means of three or more independent groups or populations.
- The fundamental null hypothesis ($H_0$) in ANOVA states that all population means are identical ($H_0: \mu_1 = \mu_2 = \dots = \mu_g$), meaning any observed variation between the groups is solely attributable to random sampling errors.
- The alternative hypothesis ($H_1$) dictates that at least one group mean is significantly different from the others.

### Variability Disassembly

- The core theme of ANOVA is dividing the total variation of all data into different identifiable sources of variation.
- **Total Variation (SST):** The overall variation among all individual values and the overall mean, which may be caused by the treatment factor or by random error.
- **Variation Between Groups (SSB):** The variation between the mean of each specific group and the overall mean, which represents the effect of the treatment or intervention.
- **Variation Within Groups (SSE):** The variation between individual values within a group and their respective group mean, which is exclusively caused by random error or individual differences.
- The mathematical relationship is expressed as Total Sum of Squares (SST) = Between Groups Sum of Squares (SSB) + Within Groups Sum of Squares (SSE).

### Test Statistic and The F-Ratio

- ANOVA utilizes the F-statistic to determine if the means are significantly different.
- The F-statistic is computed as the ratio of the Mean Square Between groups (MSB) to the Mean Square Within groups (or Mean Square Error, MSE).
- The mean squares are derived by dividing the respective sum of squares by their degrees of freedom.
- If the null hypothesis is true (the treatment has no effect), the variation between groups will roughly equal the variation within groups, yielding an F-value close to 1.
- If the F-statistic is significantly larger than 1, it indicates that the between-group variance exceeds the within-group variance, leading to the rejection of the null hypothesis.

### Assumptions of ANOVA

- For an ANOVA to be statistically valid, the data must satisfy three primary assumptions.

|Assumption|Description|Verification / Action if Violated|
|:--|:--|:--|
|**Independence**|The observed values must be completely independent of each other.|Ensure appropriate study design and random sampling.|
|**Normality**|The dependent variable should be approximately normally distributed within each group.|Verified by Histograms or Shapiro-Wilk tests; if violated, use non-parametric equivalents (e.g., Kruskal-Wallis).|
|**Homogeneity of Variance**|The population variance of each group should be approximately equal.|Verified by Levene's or Bartlett's test; if violated, use Welch's adjusted test.|

### Types of ANOVA Models

- Different variations of ANOVA are utilized based on the specific research design and the number of independent variables (factors) being tested.

|Type of ANOVA|Clinical Application|Non-Parametric Equivalent|
|:--|:--|:--|
|**One-Way ANOVA**|Compares means across three or more independent groups evaluating a single continuous outcome against one categorical independent variable.|Kruskal-Wallis H test.|
|**Repeated Measures ANOVA**|Applied when paired or matched data is collected by measuring the same subjects multiple times (e.g., pre-test, post-test, follow-up).|Friedman test.|
|**Two-Way ANOVA**|Evaluates the independent effects and the interaction effect of two distinct categorical independent variables (factors) on a single continuous outcome.|N/A (Often requires data transformation or complex modelling).|

### Multiple Comparisons (Post-Hoc Testing)

- A significant F-value in ANOVA strictly indicates that at least one group mean differs from the rest, but it does not specify which specific groups differ from each other.
- To identify the exact differences, researchers must conduct multiple pairwise comparisons between the groups.
- Conducting multiple standard t-tests is inappropriate because it drastically increases the probability of making a Type I error (false positive).
- Post-hoc tests adjust the significance level to safeguard against this error inflation while identifying the specific differing pairs.
- Commonly utilized post-hoc procedures include the Bonferroni correction, Tukey's Honestly Significant Difference (HSD) test, the Student-Newman-Keuls (SNK-q) test, the Least Significant Difference (LSD-t) test, and the Dunnett-t test (used specifically to compare multiple treatment groups against a single control group).