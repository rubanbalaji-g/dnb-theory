---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/chi-square-test/","dgPassFrontmatter":true}
---

### Definition and Core Concepts

- The Chi-square test is a non-parametric statistical procedure used to analyze unordered categorical or nominal data.
- It operates by comparing the actual observed frequencies of an event against the theoretical expected frequencies, assuming the null hypothesis is true.
- The test evaluates the deviation between these observed and expected counts to determine if the difference is statistically significant or simply due to random chance.
- It is exclusively a test of significance and provides no information regarding the strength of association or the magnitude of the effect size.

### Types of Chi-Square Tests

- **Test of Independence (Association):** Used to assess whether two categorical variables (e.g., a specific exposure and a clinical outcome) are related or completely independent of each other.
- **Goodness-of-Fit Test:** Assesses the degree of agreement between an empirically observed frequency distribution and a theoretically predicted frequency distribution.
- **Test for Trend:** Applied to a contingency table where one variable has two categories and the other has multiple ordered (ordinal) categories to assess differences in the trend of proportions.

### Assumptions and Prerequisites

- **Data Format:** Data must be presented as raw counts or frequencies, not as percentages or proportions.
- **Independence of Observations:** Each subject must contribute data to only one cell in the contingency table, meaning there are no repeated measurements on the same individual.
- **Minimum Expected Frequencies (Rule of 5):** For the test to be mathematically valid, at least 80% of the expected cell frequencies must be greater than 5, and no expected frequency should be less than 1.
- If the sample size is small (e.g., less than 40) or the expected frequency rule is violated, Fisher's exact test should be used instead of the Chi-square test.
- Yates' continuity correction is often applied in 2x2 tables to improve the approximation of the discrete probability of observed frequencies to the continuous Chi-square distribution, thereby reducing the risk of a Type I false-positive error.

### Calculation Principles

- **Expected Frequency:** For any given cell in a contingency table, this is calculated by multiplying the respective row total by the column total, and dividing the product by the overall total sample size.
- **Test Statistic Formula:** The statistic is calculated as the sum of all cells using the formula $\sum \frac{(O - E)^2}{E}$, where O is the observed frequency and E is the expected frequency.
- **Degrees of Freedom (df):** Calculated as $(Rows - 1) \times (Columns - 1)$. For a standard 2x2 contingency table, the degrees of freedom is 1.

### Illustrative Example: Passive Smoking and Coronary Death

- **Clinical Setting:** A researcher wishes to investigate if there is an association between passive smoking (the exposure) and coronary death (the outcome).
- **Hypotheses:**
    - The null hypothesis ($H_0$) states that the row variables and column variables are independent, meaning passive smoking status has no bearing on the risk of coronary death.
    - The alternative hypothesis ($H_1$) states that there is a significant association between passive smoking and coronary death.
- **Contingency Table Setup:** A cohort of 250 patients is surveyed and divided based on their exposure and outcome into a 2x2 contingency table.

|Patient Status|Coronary Death (Positive Outcome)|No Coronary Death (Negative Outcome)|Total|
|:--|:--|:--|:--|
|**Passive Smoking (Exposure Positive)**|50|100|150|
|**No Passive Smoking (Exposure Negative)**|20|80|100|
|**Total**|70|180|250|

- **Interpretation and Analysis:** The expected frequencies are calculated for each cell; for example, the expected deaths in passive smokers would be $(150 \times 70) / 250 = 42$.
- The Chi-square statistic is computed by summing the squared differences between the observed and expected frequencies, divided by the expected frequencies across all four cells.
- This calculated test statistic is then compared against the critical value from the standard Chi-square distribution table for 1 degree of freedom.
- If the computed statistic is larger than the critical value (yielding a p-value < 0.05), the null hypothesis is rejected, leading to the clinical conclusion that there is a statistically significant association between passive smoking and coronary death.