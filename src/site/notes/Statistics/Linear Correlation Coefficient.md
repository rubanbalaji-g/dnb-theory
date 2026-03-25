---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/linear-correlation-coefficient/","dgPassFrontmatter":true}
---

### Definition and Core Concepts

- The linear correlation coefficient, universally known as Pearson's product-moment correlation coefficient, is a statistical measure used to quantify the strength and direction of a linear relationship between two continuous quantitative variables.
- The sample correlation coefficient is denoted by the letter $r$, whereas the true population correlation coefficient is denoted by the Greek letter $\rho$ (rho).
- It is invariant to the linear change of the scale for the variables, meaning it is a dimensionless number with no measurement units attached to it.

### Characteristics and Interpretation of Values

- The value of the correlation coefficient fluctuates strictly within a range of -1 to +1.
- The algebraic sign of the coefficient (+ or -) defines the exact direction of the relationship, while the absolute magnitude indicates the strength of the association.

|Correlation Value (r)|Direction and Strength|Clinical Significance|
|:--|:--|:--|
|**+1.0**|Perfect positive correlation|Variables move perfectly in the same direction; as one increases, the other increases proportionally.|
|**0.60 to 0.99**|Strong positive correlation|High degree of linear association, commonly considered a strong positive relationship.|
|**0**|No correlation|Indicates the complete absence of a _linear_ relationship between the variables.|
|**-0.60 to -0.99**|Strong negative correlation|High degree of inverse association.|
|**-1.0**|Perfect negative correlation|Variables move perfectly in opposite directions; as one increases, the other decreases proportionally.|

### Assumptions and Prerequisites

- **Continuous Data:** Both variables measured must provide interval or ratio-type data (continuous numerical variables).
- **Bivariate Normality:** Both variables should be approximately normally distributed, and their joint distribution should form a bivariate normal distribution.
- **Linearity:** The relationship between the two variables must inherently be linear, a prerequisite that should always be verified visually using a scatter plot prior to mathematical analysis.

### Hypothesis Testing and Statistical Significance

- A hypothesis test is conducted to determine whether the observed sample correlation ($r$) is a true reflection of the population correlation ($\rho$) or simply a product of random sampling error.
- The null hypothesis ($H_0$) postulates that $\rho = 0$, meaning there is absolutely no linear correlation in the broader population.
- The alternative hypothesis ($H_1$) postulates that $\rho \neq 0$, asserting that a linear relationship does exist.
- The test statistic is calculated using the formula $t = r \cdot \sqrt{\frac{n-2}{1-r^2}}$, which follows a Student's t-distribution with $n - 2$ degrees of freedom.
- A resulting p-value of less than 0.05 leads to the rejection of the null hypothesis, confirming the statistical significance of the correlation.

### Coefficient of Determination ($R^2$)

- Squaring the Pearson correlation coefficient ($r$) generates the coefficient of determination, denoted as $R^2$.
- The $R^2$ value, often expressed as a percentage, specifically quantifies the proportion of the variance in one response variable that can be directly accounted for, or explained by, the explanatory variable through their linear relationship.

### Linear Correlation versus Linear Regression

- While frequently used together, correlation and regression serve distinct analytical purposes in medical statistics.

|Characteristic|Linear Correlation|Simple Linear Regression|
|:--|:--|:--|
|**Primary Objective**|Assesses the presence, strength, and direction of a linear association.|Quantifies the relationship to predict the exact value of an outcome based on a predictor.|
|**Variable Hierarchy**|Treats both variables symmetrically; there is no designated independent or dependent variable.|Strictly defines one independent (explanatory) variable and one dependent (response) variable.|
|**Mathematical Output**|Produces a single dimensionless index score ($r$).|Produces a linear equation ($y = \alpha + \beta x$) establishing the intercept and slope.|

### Limitations and Clinical Caveats

- **Correlation Does Not Imply Causation:** Establishing a strong, statistically significant correlation between two variables does not prove that changes in one biologically cause changes in the other.
- **Spurious Correlations:** False associations can arise artefactually due to unmeasured confounding variables, sampling bias, or coincidental chance (e.g., simultaneous seasonal rises in unrelated events).
- **Non-Linear Relationships:** An $r$-value of zero exclusively rules out a _linear_ relationship; the variables may still possess a strong, non-linear (e.g., U-shaped or exponential) biological relationship.
- **Vulnerability to Outliers:** Pearson's correlation is highly sensitive to extreme outliers; if data are skewed or contain significant outliers, the non-parametric Spearman's rank correlation coefficient (which evaluates ranked data rather than raw values) must be used instead.