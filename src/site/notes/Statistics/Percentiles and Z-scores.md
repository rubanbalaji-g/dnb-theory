---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/percentiles-and-z-scores/","dgPassFrontmatter":true}
---

## Concepts for Measuring Growth

### Percentiles

- A percentile is a statistical measure that indicates the value below which a specific percentage of observations fall within a given population.
- It effectively divides a probability distribution, frequency distribution, or ranked dataset into 100 equal parts.
- The 50th percentile corresponds exactly to the median, meaning half of the population values are above it and half are below it.
- The 25th percentile is known as the first quartile (Q1), and the 75th percentile is known as the third quartile (Q3).
- In medical practice, percentiles are commonly used to define the limits of a normal range, particularly in pediatric growth charts.
- For example, if a child's blood pressure or weight is at the 80th percentile, it means their measurement is greater than 80% of the other recorded values in the reference population.
- Values that fall outside the 5th and 95th percentiles (the lowest and highest 5% of the population) are frequently considered abnormal.

### Z Scores (Standard Scores)

- A Z-score (also known as a standard score) measures the exact number of standard deviations by which a raw measurement deviates from the population mean.
- It is calculated using the equation: $z = (x - \mu) / \sigma$, where $x$ is the original raw value, $\mu$ is the population mean, and $\sigma$ is the standard deviation.
- Calculating a Z-score transforms any normally distributed data into a standard normal distribution, which universally features a mean of 0 and a standard deviation of 1.
- A Z-score of 0 represents a value exactly at the mean, a positive Z-score indicates a value above the mean, and a negative Z-score indicates a value below the mean.
- Z-scores are highly beneficial because they allow clinicians to compare individual scores across different samples, such as adjusting a patient's measurement against an age, sex, and ethnicity-matched reference group.

### Relation and Comparison of the Concepts

- Percentiles, Z-scores, and Percent of Median are all statistical methods utilized to assess an individual's growth metrics against an established normative population.
- Z-scores and percentiles are mathematically tied to one another through the standard normal distribution curve.
- In a perfectly normal (bell-shaped) distribution, the mean, median, and mode are all equal and located at the exact center of the curve.
- Therefore, a Z-score of 0 corresponds exactly to the 50th percentile, which is also the median value.
- Every specific Z-score translates to a specific percentile probability; for example, a Z-score of +2 standard deviations means approximately 97.44% of scores fall below that value (the 97.4th percentile).
- Z-scores provide a distinct advantage over percentiles at the extreme ends of a growth chart (e.g., beyond the 1st or 99th percentiles) because they quantify exactly how far an outlier is from the mean, whereas percentiles cluster tightly together at the extremes and lose sensitivity.

### Tabular Comparison of Growth Metrics

|Feature|Percentile|Z Score (Standard Score)|Percent of Median|
|:--|:--|:--|:--|
|**Definition**|The value below which a specific percentage of observations fall.|The number of standard deviations a value is from the mean.|The ratio of an individual's measurement to the population median.|
|**Center Value**|50th Percentile (Median)|Z-score of 0 (Mean)|100% of Median|
|**Unit of Measurement**|Percentage (0 to 100)|Standard Deviations|Percentage|
|**Utility in Extremes**|Poor sensitivity (clusters at the 1st and 99th ends).|Excellent sensitivity (quantifies exact distance from the mean).|Good sensitivity (shows exact mathematical ratio to the center).|
|**Statistical Basis**|Divides ranked data into 100 equal groups.|Standardizes variables using the mean ($\mu$) and standard deviation ($\sigma$).|Compares a raw value against the 50th percentile value.|