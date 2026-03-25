---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/t-tests/","dgPassFrontmatter":true}
---

### Basic Concept and Statistical Rationale

- A t-test is a parametric statistical significance test utilized to assess and evaluate hypotheses regarding population means.
- The procedure calculates a t-statistic, which represents the ratio of the difference between the group means to the variability (or standard error) within the groups.
- A larger t-statistic implies that the difference between the groups is substantially greater than the difference within the groups, yielding stronger evidence against the null hypothesis.
- To determine statistical significance, the calculated t-statistic is compared against a critical value derived from the t-distribution.
- If the t-statistic falls into the rejection region (i.e., it is greater than the critical value), the null hypothesis ($H_0$) is rejected in favour of the alternative hypothesis ($H_a$).

### The t-Distribution

- The Student's t-distribution is a continuous probability distribution utilized for estimating the mean of a normally distributed population, specifically when the sample size is small and the true population standard deviation remains unknown.
- Similar to the standard normal (z) distribution, the t-distribution is symmetrical and bell-shaped.
- However, the t-distribution is slightly wider and features fatter, higher tails.
- This specific shape accounts for the greater degree of uncertainty inherent in estimating a population mean from a small, limited sample size.
- The exact shape of the t-distribution is dependent on the degrees of freedom (df); as the sample size and degrees of freedom increase, the t-distribution closely approximates the standard normal distribution.

### General Assumptions for Parametric t-Tests

- The dependent variable being analyzed must be a continuous numerical variable.
- The individual measurements within the populations must follow an approximately normal distribution.
- When analyzing independent groups, the variances (or standard deviations) of the two populations should be nearly equal, an assumption known as homogeneity of variance.
- If the assumption of equal variances is violated, an adjusted test, such as Welch's t-test, must be employed by adjusting the degrees of freedom.

### Types of t-Tests and Clinical Applications

- In pediatric research and general medical statistics, the selection of the specific t-test depends entirely on the study design and the relationship between the comparison groups.
- For example, an independent t-test is ideal for comparing the mean haematocrit levels between a control group of children with Tetralogy of Fallot and a separate treatment group.

|Type of t-Test|Clinical Indication / Usage|Null Hypothesis ($H_0$)|Degrees of Freedom (df)|Non-Parametric Equivalent|
|:--|:--|:--|:--|:--|
|**One-Sample t-Test**|Used to compare the mean of a single sample to a fixed, known population value or a established "gold standard".|$\mu = \mu_0$ (The population mean represented by the sample equals the known hypothesized value).|$n - 1$ (where n = sample size).|Sign test or Wilcoxon signed rank-sum test.|
|**Independent-Samples (Two-Sample) t-Test**|Used to compare the means of a particular variable between two completely independent and unrelated groups.|$\mu_1 = \mu_2$ (There is no difference between the means of the two independent populations).|$n_1 + n_2 - 2$ (where $n_1$ and $n_2$ are the sample sizes of the two groups).|Mann-Whitney U test (also known as Wilcoxon rank sum test).|
|**Paired-Samples (Dependent) t-Test**|Used to compare two related or matched samples, such as measurements taken from the same individual before and after a specific treatment.|$\mu_d = 0$ (The mean of the paired differences between the two conditions is zero).|$n - 1$ (where n = total number of matched pairs).|Wilcoxon matched-pairs signed-rank test.|