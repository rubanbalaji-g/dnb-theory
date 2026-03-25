---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/confidence-interval/","dgPassFrontmatter":true}
---

### Definition and Concept

- A confidence interval (CI) is an estimated range of probable values, calculated from sample data, within which we expect to find the true but unknown population parameter.
- It represents our uncertainty regarding the exact true population value and provides a range that gives a specific level of confidence.
- The interval is composed of two boundaries: a lower confidence limit and an upper confidence limit.
- The mathematical calculation of a CI relies heavily on the Standard Error (SE).
- For a standard 95% CI of a mean, the formula utilised is the Sample Mean ± (1.96 × SE).

### Key Characteristics

- **Interpretation:** The scientifically precise interpretation of a 95% CI states that if an experiment is repeated an infinite number of times under the same conditions, 95% of all constructed confidence intervals will contain the true population mean.
- **Effect of Sample Size:** The width of the CI is directly influenced by the sample size; taking a larger sample size reduces the standard error, which mathematically results in a narrower and more precise confidence interval.
- **Effect of Confidence Level:** Adjusting the desired confidence level alters the interval's width; for example, a 90% CI will be narrower than a 95% CI because it allows for a larger margin of error (10% versus 5%).

### Clinical Application and Interpretation

- Confidence intervals are highly useful in medical research to simultaneously gauge the size of the clinical effect and its statistical significance.
- The relationship between the 95% CI and statistical significance (at a p-value of 0.05) depends on whether the interval contains the null value.

|Statistical Measure|Null Value|Interpretation if Null Value is within the 95% CI|
|:--|:--|:--|
|**Mean Difference** (e.g., comparing two groups)|**0**|The difference between the groups is not statistically significant.|
|**Absolute Risk Reduction (ARR)**|**0**|The risk reduction is not statistically significant.|
|**Ratios** (e.g., Odds Ratio, Relative Risk)|**1**|The association or risk difference is not statistically significant.|