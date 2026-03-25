---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/accuracy-and-precision/","dgPassFrontmatter":true}
---

### Definition and Concept of Accuracy

- Accuracy is defined as the degree of conformity of a measured value to some recognized true or standard value.
- An accurate statistical estimate is one that is fundamentally close to the actual, true quantity being estimated within the population.
- Accuracy is intimately related to the concept of bias and systematic error.
- Systematic error is the bias that results when a data-collecting procedure or a method of analysis consistently leads to results that deviate from the true quantity intended to be estimated.
- If a measurement is highly biased, it fundamentally lacks accuracy, regardless of how meticulously the data is collected.
- Crucially, simply increasing the sample size of a study does absolutely nothing to correct systematic error or improve accuracy; it only serves to produce a more precisely biased estimate of the desired quantity.

### Definition and Concept of Precision

- Precision is a term applied to describe the likely spread, variability, or consistency of estimates of a parameter within a statistical model.
- A precise interval estimate is a remarkably narrow one, indicating that repeated measurements or samples yield highly clustered and consistent results.
- In statistical terms, precision is directly measured and quantified by the standard error of the estimator.
- The standard error quantifies the expected variation in sample means if multiple different samples were consecutively taken from the exact same population, effectively acting as a measure of data precision regarding the mean.
- Unlike accuracy, precision is highly dependent on the sample size of the study.
- Precision can be significantly increased, and the corresponding standard error decreased, by utilizing a larger sample size.
- As the sample size expands to more closely match the true population size, sample means cluster much more tightly around the population mean, yielding a highly precise estimate.
- When calculating confidence intervals, a wide interval unequivocally indicates that the estimate is not precise, whereas a narrow interval indicates a highly precise estimate.

### The Relationship Between Accuracy and Precision

- Accuracy and precision describe two entirely different dimensions of measurement quality, and one does not guarantee the other.
- An estimate can be highly precise—perhaps having a very narrow confidence interval or being quoted to a large number of decimal places—but still be completely inaccurate if it is systematically biased away from the true value.
- Conversely, a set of measurements can be accurate (centred symmetrically around the true target value) but remain imprecise if there is a wide, random scatter of data points.
- The Mean Squared Error (MSE) is a statistical metric specifically utilized because it simultaneously reflects both the bias (lack of accuracy) and the precision (variance) of a parameter estimator.

### Comparative Summary

|Feature|Accuracy|Precision|
|:--|:--|:--|
|**Primary Definition**|The degree to which an estimate or measurement conforms to the true, recognized standard value.|The degree of spread or consistency of repeated estimates or measurements.|
|**Statistical Measure**|Inversely related to Bias / Systematic Error.|Measured by the Standard Error and Variance.|
|**Effect of Sample Size**|Unaffected by sample size; increasing sample size will not fix systematic inaccuracies.|Highly dependent on sample size; increasing sample size directly increases precision.|
|**Interval Characteristic**|Determines if the confidence interval actually captures the true population parameter.|Determines the exact width (narrowness) of the confidence interval.|
|**Clinical Analogy**|Hitting the exact center of a target or bullseye.|Hitting the exact same spot on the target repeatedly, regardless of where that spot is.|

### Clinical and Laboratory Application

- In clinical laboratories and medical research, rigorous quality control procedures must be designed and implemented to ensure that both the precision and the accuracy of diagnostic laboratory tests are maintained within acceptable limits.
- A procedure known as "calibration" is frequently used when a cheap and easy-to-apply measurement method is known to be imprecise and subject to bias (inaccurate).
- By comparing the cheap method across a range of concentrations against a well-established, highly accurate reference method, a calibration curve can be constructed to read off accurate estimates, thereby correcting the inherent lack of accuracy and precision in the routine test.