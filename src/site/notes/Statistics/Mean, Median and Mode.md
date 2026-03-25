---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/mean-median-and-mode/","dgPassFrontmatter":true}
---

## Measures of Central Tendency

- A measure of central tendency is a point estimate (a single value) that represents the centre around which the majority of data values in a distribution cluster.
- The three most commonly used measures to identify central tendency in medical statistics are the mean, median, and mode.

### Mean

- The mean, commonly known as the arithmetic average, is calculated by adding all the observed values in a dataset and dividing that sum by the total number of observations.
- It utilizes every single data value in its calculation, making it a highly sensitive measure.
- The mean is considered the best measure of central tendency for continuous variables that follow a symmetric or normal distribution.
- Its major clinical limitation is that it is heavily distorted by extreme values (outliers) and skewed distributions, meaning it can sometimes provide a misleading representation of the data's center.

### Median

- The median is the exact middle value of a dataset when all observations are arranged (ranked) in sequential order from the lowest to the highest.
- If a dataset contains an odd number of observations, the median is the exact central value; if it contains an even number, the median is calculated as the average of the two central values.
- It perfectly divides the dataset into two equal halves, corresponding exactly to the 50th percentile (or second quartile).
- The median is the preferred measure of central tendency for skewed distributions because it is relatively insensitive to the presence of outliers.

### Mode

- The mode is defined as the most frequently occurring value within a set of observations.
- Depending on the data, a dataset may have a single mode, multiple modes (referred to as bimodal or multimodal), or no mode at all if every value appears only once.
- Unlike the mean, the mode is completely unaffected by extreme outlier values.
- The mode is the most suitable measure of central tendency for describing categorical variables, particularly nominal data where calculating an average or ranking the data is impossible (e.g., blood groups).

### Comparison of Central Tendency Measures

- The following table summarizes the high-yield differences between the three measures:

|Feature|Mean|Median|Mode|
|:--|:--|:--|:--|
|**Definition**|The arithmetic average of all values.|The exact middle value of ranked data.|The most frequently occurring value.|
|**Preferred Data Type**|Normally distributed, continuous numerical data.|Skewed, continuous numerical data.|Categorical or nominal data.|
|**Effect of Outliers**|Heavily distorted and pulled towards the outlier.|Not significantly affected.|Not affected at all.|
|**Information Utilization**|Uses every single observation in its calculation.|Ignores most data points, focuses only on the center.|Ignores most data points, focuses solely on frequency.|