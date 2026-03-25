---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/standard-deviation-and-standard-error/","dgPassFrontmatter":true}
---

### Standard Deviation (SD)

- The standard deviation is a fundamental measure of dispersion used to describe the variability or spread of data within a specific sample.
- It represents the average distance of individual data values from their arithmetic mean.
- If data values are widely spread across a range, the average distance from the mean is large, resulting in a correspondingly large standard deviation.
- Conversely, if data values are clustered closely around the mean, the average distance is small, and the standard deviation will be small.
- Mathematically, standard deviation is calculated as the positive square root of the variance.
- Variance itself is computed by summing the squared differences between each individual observation and the mean, and then dividing this sum by the number of observations minus one ($n-1$).
- The denominator ($n-1$) is utilized as a mathematical adjustment known as Bessel's correction, which accounts for the fact that a sample typically underestimates the variation of the full population.
- Standard deviation is preferred over variance for descriptive purposes because taking the square root reverts the value back to the exact same units of measurement as the original data and the mean, making it clinically interpretable.
- In a perfectly normal distribution, the standard deviation precisely defines the dispersion of data around the central mean.
- According to the empirical rule for normal distributions, approximately 68.27% of all observations fall within one standard deviation of the mean, 95% fall within 1.96 standard deviations, and 99.7% fall within three standard deviations.

### Standard Error (SE)

- The standard error (or standard error of the mean) quantifies the expected variation in sample means if multiple different samples were consecutively taken from the exact same population.
- It is formally defined as the standard deviation of the sampling distribution of a given statistic.
- Standard error serves to evaluate the precision of a sample mean, indicating how accurately the calculated mean of any single sample represents the true, unknown population mean.
- It is calculated mathematically by dividing the standard deviation of the sample by the square root of the total sample size ($SE = \frac{SD}{\sqrt{n}}$).
- The magnitude of the standard error depends entirely on two factors: the inherent variability in the data (standard deviation) and the sample size.
- Standard error increases when the standard deviation (the variance of the underlying population) increases.
- Standard error strictly decreases as the sample size increases; as the sample size expands to more closely match the true population size, sample means cluster more tightly around the true population mean.
- Due to its formula, the standard error is inherently always a smaller numerical value than the standard deviation.
- It is a vital parameter for inferential statistics, serving as the basis for calculating confidence intervals to infer population parameters (e.g., $95% \text{ CI} = \text{Sample Mean} \pm 1.96 \times SE$).
- It is also utilized directly in hypothesis testing to calculate test statistics, such as the t-statistic, which is derived by dividing the difference between two sample means by the standard error of the difference.

### Comparison Between Standard Deviation and Standard Error

|Feature|Standard Deviation (SD)|Standard Error (SE)|
|:--|:--|:--|
|**Primary Definition**|Quantifies the variation, spread, or dispersion within one single sample.|Quantifies the variation in the means derived from multiple samples taken from a population.|
|**What it Measures**|Acts as a measure of raw data variability.|Acts as a measure of data precision regarding the mean.|
|**Mathematical Calculation**|Calculated as the square root of the sample variance.|Calculated as the standard deviation divided by the square root of the sample size.|
|**Statistical Application**|Used primarily for descriptive statistics to summarize symmetric continuous data.|Used exclusively for inferential statistics to estimate unknown population parameters.|
|**Value Comparison**|Will always yield a larger absolute numerical value.|Will always be smaller than the standard deviation.|
|**Effect of Sample Size**|Unaffected by simply increasing the sample size; reflects true population spread.|Markedly decreases and narrows as the sample size increases.|