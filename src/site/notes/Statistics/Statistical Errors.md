---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/statistical-errors/","dgPassFrontmatter":true}
---

## Types of Errors in Statistical Hypothesis Testing

- In statistical hypothesis testing, researchers evaluate sample data to reach a conclusion regarding a specific research question.
- The decision is made by either rejecting or failing to reject the null hypothesis ($H_0$), which typically states that there is no difference or no association between the groups being studied.
- Because statistical inference relies on generalizing findings from a limited sample to a larger population, there is an inherent degree of uncertainty.
- Consequently, there are two primary types of errors that can be committed during this decision-making process: Type I error and Type II error.

### Type I Error (False Positive)

- A Type I error occurs when a researcher rejects the null hypothesis when it is, in fact, true.
- Clinically, this means the researcher incorrectly concludes that a difference exists (e.g., a new drug is effective or an exposure causes a disease) when it actually does not.
- This error represents a "false positive" conclusion.
- The probability of committing a Type I error is denoted by the Greek letter alpha ($\alpha$).
- The maximum allowed probability of committing this error is defined as the level of significance of the statistical test.
- This alpha level is entirely controlled by the researcher and is conventionally set at 0.05 (a 5% risk of error) or sometimes more conservatively at 0.01 (a 1% risk of error).
- A Type I error is generally considered the more serious and harmful of the two errors because it can lead to the false promotion and implementation of a useless or potentially harmful medical intervention.

### Type II Error (False Negative)

- A Type II error occurs when a researcher fails to reject (or accepts) the null hypothesis when it is, in fact, false.
- Clinically, this means the researcher incorrectly concludes that no difference or effect exists between treatments or groups, when a true difference is actually present.
- This error represents a "false negative" conclusion.
- The probability of committing a Type II error is denoted by the Greek letter beta ($\beta$).
- Unlike Type I errors, the probability of a Type II error is generally unknown beforehand, but its maximum acceptable limit in research design is typically set at 20% ($\beta = 0.20$).
- A Type II error is frequently caused by the study having an inadequate sample size, which makes the analysis too underpowered to detect a true clinical difference.

### Power of the Study

- The statistical power of a study is inherently linked to the Type II error.
- Power is defined as the probability of correctly rejecting the null hypothesis when it is false, or the probability of _not_ committing a Type II error.
- It is calculated mathematically as $1 - \beta$.
- If the acceptable limit for a Type II error ($\beta$) is set at 20% (0.20), the corresponding minimum acceptable statistical power for the study is 80% (0.80).

### Relationship Between Type I and Type II Errors

- For any given set of data and a fixed sample size, the probabilities of Type I ($\alpha$) and Type II ($\beta$) errors are inversely related.
- If a researcher attempts to reduce the risk of a Type I error by making the significance level stricter (e.g., moving $\alpha$ from 0.05 to 0.01), the risk of committing a Type II error will inherently increase.
- The only methodological way to lower the risk of a Type II error without increasing the risk of a Type I error is to increase the overall sample size of the study.
- Increasing the sample size improves the precision of the estimated means and reduces data overlap, thereby increasing the overall power of the study to detect true differences.
- Performing an _a priori_ sample size calculation before initiating a clinical trial is therefore essential to control the risk of Type II errors.

### Summary Matrix of Statistical Decisions

- The following tabular column illustrates the possible outcomes of a statistical hypothesis test based on the truth in the population and the researcher's final decision:

|Truth in the Real World (Population)|Researcher Fails to Reject $H_0$ (No Difference)|Researcher Rejects $H_0$ (Difference Exists)|
|:--|:--|:--|
|**Null Hypothesis ($H_0$) is True**|Correct Decision (True Negative)|**Type I Error** (False Positive, $\alpha$)|
|**Null Hypothesis ($H_0$) is False**|**Type II Error** (False Negative, $\beta$)|Correct Decision (True Positive, Power = $1 - \beta$)|