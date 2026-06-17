---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/analysis-of-variance-anova/","dgPassFrontmatter":true}
---

## Overview And Definition

Analysis of Variance (ANOVA) is a parametric statistical model utilized to compare the means of three or more independent groups.

- It provides a methodology for partitioning the total variance computed from a data set into specific components.
- Each component represents the amount of the total variance attributed to a specific source of variation.
- The primary goal is to test hypotheses about population means by comparing the variance between groups against the variance within groups.
- **Null Hypothesis ($H_0$)**: All population means are absolutely equal ($H_0: \mu_1 = \mu_2 = \dots = \mu_g$).
- **Alternative Hypothesis ($H_1$)**: At least one population mean is significantly different from the others.

## Core Assumptions

Three crucial assumptions must be satisfied prior to applying an ANOVA model.

- **Independence**: The observed values must be strictly independent of each other.
- **Normality**: The dependent variable must be normally distributed within each individual group.
    - Normality can be investigated using histograms, Q-Q plots, or the Shapiro-Wilk test.
- **Homogeneity Of Variance**: The population variance of each group must be nearly equal.
    - This assumption is typically assessed using Bartlett’s test or Levene’s test.
    - If variances are unequal, Welch's adjusted ANOVA test must be used.

## Mathematical Components And The F-Statistic

The fundamental principle of ANOVA relies on disassembling the total variation into distinct parts.

### Variability Disassembly

- **Total Variation ($SST$)**: The overall variation among all individual values and the overall mean.
    - It represents the total sum of squares.
    - It is mathematically defined as $SST = SSB + SSE$.
- **Variation Between Groups ($SSB$)**: The variation between the individual group means and the overall mean.
    - It may be caused by the specific treatment effect or by random error.
- **Variation Within Groups ($SSE$ or $SSW$)**: The variation of individual values from their specific group mean.
    - It is caused purely by random error or individual differences.

### Mean Squares And The F-Statistic

- Sums of squares are converted into Mean Squares ($MS$) by dividing them by their respective degrees of freedom ($df$).
- The test statistic generated is the F-statistic.
- It is calculated as the ratio of the Mean Square Between groups ($MSB$) to the Mean Square Within groups ($MSE$).

$$F = \frac{MSB}{MSE}$$

- If the null hypothesis is true, the F-statistic should be approximately 1.
- A larger F-statistic indicates that the between-group variance is significantly larger than the within-group variance.

### Standard ANOVA Structural Layout

|Source of Variation|Sum of Squares ($SS$)|Degrees of Freedom ($DF$)|Mean Square ($MS$)|F-statistic|
|:--|:--|:--|:--|:--|
|**Between Groups**|$SSB$|$g - 1$|$MSB = \frac{SSB}{g - 1}$|$\frac{MSB}{MSE}$|
|**Within Groups (Error)**|$SSE$|$N - g$|$MSE = \frac{SSE}{N - g}$||
|**Total**|$SST$|$N - 1$|||

_(Note: $g$ is the number of groups, and $N$ is the total sample size)_

## Types Of ANOVA Designs

The specific type of ANOVA applied depends entirely on the study design and the number of independent variables.

|ANOVA Type|Description|Key Features|Non-Parametric Equivalent|
|:--|:--|:--|:--|
|**One-Way ANOVA**|Tests one primary factor with 3 or more independent levels.|Uses a completely randomized design.|Kruskal-Wallis test.|
|**Two-Way ANOVA**|Assesses the effect of two independent variables simultaneously.|Allows the assessment of potential interactions between factors.|None directly mapped; requires complex modeling.|
|**Repeated Measures ANOVA**|Tests paired or matched data with 3 or more measurements.|The same subjects are measured across multiple time points or conditions.|Friedman test.|

## Post-Hoc Multiple Comparisons

An ANOVA test yields a single overarching p-value.

- A significant F-value merely indicates that differences exist among the means.
- It does not identify exactly which specific groups differ from each other.
- To identify pairwise differences, researchers must perform post-hoc multiple comparison tests.
- These tests strictly adjust the significance level to prevent the inflation of Type I errors.
- **Common Post-Hoc Tests**:
    - **Bonferroni Correction**: Divides the significance level ($\alpha$) by the number of tests performed.
    - **Tukey's HSD**: Commonly used for all possible pairwise comparisons.
    - **Dunnett-t Test**: Specifically compares multiple treatment groups against a single control group.
    - **SNK-q Test**: Adjusts the significance level using a studentized range statistic (q).