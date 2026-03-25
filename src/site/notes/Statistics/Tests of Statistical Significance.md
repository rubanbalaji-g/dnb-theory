---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/tests-of-statistical-significance/","dgPassFrontmatter":true}
---

### Principles of Hypothesis Testing

- A statistical hypothesis test is a method of making decisions using data from a controlled experiment or an observational study to generalize study results from a sample to the broader population.
- The statistical analysis journey begins with defining two competing hypotheses: the null hypothesis ($H_0$), which states that nothing is happening or there is no difference, and the alternative hypothesis ($H_1$), which represents the researcher's theory that a difference or association exists,.
- A test statistic is calculated from the sample data, which helps determine the p-value,.
- The p-value indicates the probability of obtaining the observed results, or more extreme values, by chance alone if the null hypothesis were entirely true.
- If the p-value is less than the predetermined significance level (typically $\alpha = 0.05$), the null hypothesis is rejected in favor of the alternative hypothesis.
- Failing to reject the null hypothesis implies that there is insufficient evidence to prove an effect, not necessarily that the null hypothesis is absolutely true,.

### Parametric versus Non-Parametric Tests

- Statistical tests are broadly classified into parametric and non-parametric categories based on the distribution of the numerical data.
- Parametric tests evaluate the actual raw values to compare means across groups, assuming that the continuous numerical variables follow a normal (Gaussian) distribution,.
- Non-parametric tests do not assume a normal distribution and operate by transforming raw data into ranks, subsequently comparing the medians between groups rather than the means,.
- Non-parametric statistics are also the required method for analyzing ordinal data or when sample sizes are inadequate to ascertain distribution normality,.

### Selection of the Appropriate Statistical Test

- Selecting the proper statistical test depends fundamentally on the type of data variable (categorical vs. numerical), the number of groups being compared, and whether the groups are independent or paired,,.
- Independent data refers to distinct groups where subjects in one group cannot influence subjects in another, whereas paired (dependent) data involves repeated measurements on the same individuals, such as pre-test and post-test conditions.

|Data Type|Number of Groups (Conditions)|Relationship|Parametric Test|Non-Parametric Test|
|:--|:--|:--|:--|:--|
|Continuous (Numerical)|2|Independent|Independent samples t-test|Mann-Whitney U test|
|Continuous (Numerical)|2|Paired (Dependent)|Paired t-test|Wilcoxon signed-rank test|
|Continuous (Numerical)|> 2|Independent|One-way ANOVA|Kruskal-Wallis test|
|Continuous (Numerical)|> 2|Paired (Dependent)|Repeated measures ANOVA|Friedman test|
|Categorical (Nominal)|2|Independent|-|Chi-square test / Fisher's exact test|
|Categorical (Nominal)|2|Paired (Dependent)|-|McNemar's test|
<img src=https://i.imgur.com/AUJlOgj.png>
### Common Statistical Tests in Clinical Research

- **Independent samples t-test:** Compares the means of two distinct groups to ascertain if they are significantly different, requiring tests for normality and homogeneity of variance (Levene's test) prior to execution.
- **Paired t-test:** Evaluates whether the mean of the paired differences between two related conditions on the same subjects equals zero.
- **Analysis of Variance (ANOVA):** Utilizes the ratio of "between-group variance" to "within-group variance" to determine if significant differences exist among the means of three or more independent groups.
- **Post-hoc testing:** Following a significant ANOVA result, adjustments like the Bonferroni or Tukey methods are used to perform pairwise comparisons without inflating the risk of false-positive errors,.
- **Mann-Whitney U test:** The non-parametric counterpart to the independent t-test that compares the sum of ranks for two independent groups.
- **Wilcoxon signed-rank test:** Analyzes paired, non-normally distributed data by ranking the absolute differences between two conditions and utilizing the signs of the actual differences to evaluate median shifts,.
- **Chi-square test:** Assesses the association between categorical variables by evaluating the deviation between actual observed frequencies and the theoretical expected frequencies under the null hypothesis,.
- **Fisher’s exact test:** Used for 2x2 contingency tables when the sample size is small or when more than 20% of the expected cell counts fall below 5, bypassing the approximations of the Chi-square test,.
- **McNemar’s test:** Applied to paired binary nominal variables to evaluate changes in proportions over two time points, such as assessing pass/fail rates before and after an intervention.

### Errors in Statistical Testing

- **Type I Error ($\alpha$):** Occurs when a true null hypothesis is erroneously rejected, culminating in a false-positive conclusion where an effect or difference is claimed when none truly exists,.
- **Type II Error ($\beta$):** Transpires when the test fails to reject a false null hypothesis, yielding a false-negative conclusion where a true clinical effect is entirely missed,.
- **Statistical Power ($1 - \beta$):** Defines the probability of successfully avoiding a Type II error and correctly detecting a true difference, a metric generally powered at 80% or higher in robust trial designs.