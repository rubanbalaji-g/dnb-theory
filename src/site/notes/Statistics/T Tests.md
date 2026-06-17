---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/t-tests/","dgPassFrontmatter":true}
---

## Overview Of The T-Test

The t-test is a fundamental parametric statistical procedure. It is used to assess hypotheses about population means. It compares the difference of a continuous variable between groups. The test is only valid when performed on normally distributed data.

- William S. Gosset invented the test under the pseudonym "Student".
- It generates a t-statistic.
- The t-statistic is a ratio of the difference between the group means and the variability within the groups.
- A larger t-statistic provides greater evidence against the null hypothesis.

## The T-Distribution

When sample sizes are small, the normal distribution is not a good indicator of data. In these cases, data follow the t-distribution.

- The t-distribution is symmetric and bell-shaped like a normal distribution.
- It has a larger standard deviation than the normal distribution.
- It is lower and wider, and its tails are higher.
- The shape depends on a single parameter called degrees of freedom.
- The advantage of the t-distribution is that it accounts for sample size.
- A smaller sample size yields a more prominent tail to account for greater uncertainty.
- As sample size increases, the t-distribution approaches the standard normal distribution.

## Core Assumptions

To perform a valid t-test, specific distributional assumptions must be met.

- **Normality**: The dependent variables must be normally distributed within each group.
- **Independence**: Subjects within the samples should be independent (for independent and one-sample tests).
- **Homogeneity Of Variance**: The variances in the two populations must be nearly equal.

### Evaluating Assumptions

- Normality is checked using histograms, the Shapiro-Wilk test, or the Kolmogorov-Smirnov test.
- Homogeneity of variance is tested using the F-test or Levene's test.
- If variances are unequal, an adjusted t-test (like Welch's test) must be used.
- If data are grossly skewed, non-parametric alternative tests must be utilized.

## Types Of T-Tests

### One-Sample T-Test

A one-sample t-test compares the mean of a single variable against a specified known value or gold standard. It determines if the sample comes from a population with a mean different from the hypothesized value.

#### Hypotheses

- **Null Hypothesis ($H_0$)**: The population mean is equal to the hypothesized value ($\mu = \mu_0$).
- **Alternative Hypothesis ($H_1$)**: The population mean is not equal to the hypothesized value ($\mu \neq \mu_0$).

#### Mathematical Formula

The t-statistic is calculated as follows: $$t = \frac{\bar{X} - \mu_0}{S / \sqrt{n}}$$

- Where $\bar{X}$ is the sample mean.
- $\mu_0$ is the known population mean.
- $S$ is the sample standard deviation.
- $n$ is the sample size.
- Degrees of freedom ($df$) = $n - 1$.

### Independent-Samples T-Test

An independent-samples t-test compares the means of two independent groups. It evaluates whether the unknown means of two populations differ from each other.

#### Characteristics

- Subjects in the first group cannot be in the second group.
- The groups can be from separate populations (e.g., males and females).
- They can also be from a single population randomly divided into subgroups (e.g., treatment and control).

#### Hypotheses

- **Null Hypothesis ($H_0$)**: There is no difference between the means of the two groups ($\mu_1 = \mu_2$).
- **Alternative Hypothesis ($H_1$)**: There is a difference between the means ($\mu_1 \neq \mu_2$).

#### Mathematical Formula

The test calculates the difference between sample means divided by the standard error of the difference. $$t = \frac{\bar{X}_1 - \bar{X}_2}{S_{\bar{X}_1 - \bar{X}_2}}$$

- Where $\bar{X}_1$ and $\bar{X}_2$ are the sample means.
- $S_{\bar{X}_1 - \bar{X}_2}$ is the standard error of the difference.
- Degrees of freedom ($df$) = $n_1 + n_2 - 2$.

### Paired-Sample T-Test

A paired-sample t-test compares the means of two related variables. It is used when the data are paired or matched.

#### Characteristics

- Used for pre-test/post-test measurements taken from the same individuals.
- Used for subjects matched in pairs at baseline.
- The test assesses whether the mean of the paired differences is zero.
- Each subject serves as their own control.

#### Hypotheses

- **Null Hypothesis ($H_0$)**: The mean of the paired differences is zero ($\mu_d = 0$).
- **Alternative Hypothesis ($H_1$)**: The mean of the paired differences is not zero ($\mu_d \neq 0$).

#### Mathematical Formula

$$t = \frac{\bar{d}}{S_d / \sqrt{n}}$$

- Where $\bar{d}$ is the mean of the differences.
- $S_d$ is the standard deviation of the differences.
- $n$ is the number of paired observations.
- Degrees of freedom ($df$) = $n - 1$.

## Tabular Comparison Of T-Tests And Non-Parametric Equivalents

|T-Test Type|Purpose|Degrees of Freedom|Non-Parametric Equivalent|
|:--|:--|:--|:--|
|**One-Sample**|Compares sample mean to a fixed known value.|$n - 1$|Wilcoxon signed rank-sum test or Sign test.|
|**Independent-Samples**|Compares means of two unrelated groups.|$n_1 + n_2 - 2$|Mann-Whitney U test.|
|**Paired-Sample**|Compares means of two related or matched observations.|$n - 1$ (pairs)|Wilcoxon matched-pair signed-rank test.|

## Statistical Decision Making

The objective of the t-test is to distinguish whether an observed difference suggests a real population difference or is due to chance.

- Researchers calculate the t-statistic from the sample data.
- They determine the degrees of freedom.
- The t-statistic is compared against a critical value from the t-distribution table.
- The critical value defines the rejection region based on a chosen significance level, usually $\alpha = 0.05$.
- If the calculated t-statistic is equal to or greater than the critical value, the null hypothesis is rejected.
- Rejecting the null hypothesis means the result is statistically significant and unlikely due to chance.
- If the t-statistic is smaller than the critical value, researchers fail to reject the null hypothesis.
- Failing to reject the null hypothesis implies there is insufficient evidence to conclude a difference exists.