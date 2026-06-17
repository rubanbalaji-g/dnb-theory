---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/chi-square-test/","dgPassFrontmatter":true}
---

## Overview Of The Chi-Square Test

The Chi-square test is a fundamental non-parametric statistical procedure utilized extensively in medical research and epidemiology. It is designed specifically for the analysis of unordered categorical or qualitative data.

- The test operates by comparing the actual observed frequencies within a sample to the theoretical expected frequencies.
- The theoretical frequency represents the expected value if the null hypothesis is entirely true.
- The primary purpose is to determine whether significant differences exist between sample proportions and population proportions.
- The calculated statistic relies on the Chi-square distribution, which is a continuous and asymmetrical probability distribution.
- The shape of this distribution depends completely on the degrees of freedom.

## Types Of Chi-Square Tests

Depending on the specific research question and study design, the basic principles of the test can be applied in three distinct ways.

### Goodness Of Fit Test

- This test evaluates a single categorical variable.
- It compares the observed frequencies of an event against a theoretically expected frequency distribution.
- **Null Hypothesis**: The observed frequencies match the expected frequencies perfectly.
- **Alternative Hypothesis**: There is a significant discrepancy between observed and expected frequencies.

### Test Of Independence Or Association

- This is the most common application in medical literature.
- It evaluates whether two different categorical variables are associated or completely independent of each other.
- Data are organized into a contingency table (e.g., rows for exposure, columns for disease outcome).
- **Null Hypothesis**: The row variables and column variables are independent. One variable predicts nothing about the other.

### Test For Trend

- This variation assesses the association between a binary outcome variable and an ordinal categorical variable.
- It evaluates whether there is a linear trend in the proportions across the ordered categories.
- It possesses greater statistical power for detecting specific linear departures from the null hypothesis compared to the standard test of independence.

## Core Mathematical Principles And Formulas

The execution of the test requires meticulous calculation of expected counts and the subsequent test statistic.

### Calculation Of Expected Frequency

- The theoretical expected frequency must be calculated for each individual cell within the contingency table.
- It is calculated using the marginal totals of the table. $$Expected\ Frequency\ (T) = \frac{Row\ Total \times Column\ Total}{Overall\ Total}$$

### The Basic Chi-Square Statistic

- The test statistic quantifies the cumulative deviation between actual data and theoretical expectations.
- A larger test statistic indicates stronger evidence against the null hypothesis. $$\chi^2 = \sum \frac{(Actual - Expected)^2}{Expected}$$

### Degrees Of Freedom

- The probability value (p-value) cannot be determined from the test statistic alone.
- The degrees of freedom must be calculated to locate the correct critical value on the probability distribution.
- For a contingency table, the formula relies on the number of rows (R) and columns (C). $$df = (R - 1) \times (C - 1)$$
- A standard 2x2 fourfold table always possesses 1 degree of freedom.

## The 2x2 Fourfold Contingency Table

The simplest and most frequent application of the test compares two binary variables.

|Treatment / Exposure Group|Disease Present|Disease Absent|Total|
|:--|:--|:--|:--|
|**Group A (Exposed)**|a|b|a + b|
|**Group B (Unexposed)**|c|d|c + d|
|**Total**|a + c|b + d|a + b + c + d|

### Yates Continuity Correction

- The standard test relies on a continuous probability distribution to approximate discrete probability frequencies.
- To improve this approximation in smaller samples, the Yates continuity correction is sometimes applied to 2x2 tables.
- It is utilized when the total sample size is greater than or equal to 40, but the expected frequency in any cell is between 1 and 5.
- The correction subtracts 0.5 from the absolute difference before squaring, making the test more conservative. $$\chi^2 = \sum \frac{(|Actual - Expected| - 0.5)^2}{Expected}$$
- Many modern statisticians consider this correction overly conservative. It increases the risk of Type II errors.
- With the advent of computational software, Fisher's exact test is now generally preferred over Yates' correction.

## Core Assumptions And Limitations

Violating the underlying assumptions compromises the validity of the resulting p-value.

### Data Requirements

- Data must consist of absolute raw frequencies or counts.
- The test cannot be performed on percentages, proportions, or continuous interval data.
- Observations must be strictly independent. A single subject can contribute data to only one cell in the table.

### The Rule Of 5

- The accuracy of the continuous approximation depends heavily on the expected frequencies.
- At least 80% of the cells must have an expected frequency greater than or equal to 5.
- Absolutely no cell should have an expected frequency less than 1.

### Limitation Regarding Effect Size

- The test is strictly a significance test. It only provides a p-value.
- It indicates whether an association exists, but it gives absolutely no information regarding the strength or magnitude of that association.
- Researchers must calculate the Odds Ratio or Relative Risk separately to understand the clinical effect size.

## Alternative Tests For Categorical Data

When the standard assumptions are not met, alternative statistical procedures must be deployed.

|Clinical Scenario|Suggested Statistical Test|Rationale And Characteristic|
|:--|:--|:--|
|**Independent samples, expected cell counts < 5**|Fisher's Exact Test|Used when the "Rule of 5" is violated or sample size is very small (<40). It calculates the exact probability using the hypergeometric distribution rather than an approximation.|
|**Paired or matched observations**|McNemar's Test|Used for dependent data (e.g., pre-test/post-test crossover designs on the same subjects). It evaluates subjects who changed their status.|
|**Evaluating specific covariates**|Logistic Regression|While Chi-square tests association, logistic regression allows for predictive modeling and adjustment for multiple confounding variables simultaneously.|

## Handling Larger Contingency Tables (R x C)

- When evaluating variables with more than two categories (e.g., a 3x4 table), the standard test can still be applied.
- However, a significant overall p-value only indicates that at least one group differs from the rest.
- It does not specify exactly where the differences lie.
- To identify specific differences, post-hoc pairwise comparisons must be conducted.
- During post-hoc testing, the Bonferroni correction should be strictly applied to adjust the significance level, thereby preventing the inflation of Type I errors.