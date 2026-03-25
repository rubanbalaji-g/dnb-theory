---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/sensitivity-specificity-ppv-and-npv/","dgPassFrontmatter":true}
---

## Diagnostic Test Evaluation

### The 2x2 Contingency Table

- To evaluate a new diagnostic test against a gold standard test (which provides a definitive diagnosis), researchers arrange the data into a 2x2 contingency table.
- This table categorizes results into four distinct groups based on whether the disease is actually present or absent.
- True positive (a): The test is positive, and the disease is present (correctly identified).
- False positive (b): The test is positive, but the disease is absent (incorrectly identified).
- False negative (c): The test is negative, but the disease is present (incorrectly rejected).
- True negative (d): The test is negative, and the disease is absent (correctly rejected).

|Test Result|Disease Present (Gold Standard)|Disease Absent (Gold Standard)|Total|
|:--|:--|:--|:--|
|**Positive**|True Positive (a)|False Positive (b)|a + b|
|**Negative**|False Negative (c)|True Negative (d)|c + d|
|**Total**|a + c|b + d|a + b + c + d|

### Sensitivity

- Sensitivity is defined as the percentage of true positives.
- It represents the proportion of individuals who actually have the disease who are correctly identified by the test as positive.
- In probabilistic terms, it is the probability that a test result will be positive when the disease is truly present.
- It is calculated as the number of true positives divided by the total number of diseased individuals: True Positive / (True Positive + False Negative), or a / (a + c).
- A highly sensitive test is characterized by yielding very few false negative results.
- Clinically, sensitivity is vital when case detection is of primary concern; because it rarely misses the disease, a negative result in a highly sensitive test effectively rules out the disease (a principle recognized by the mnemonic "SnOUT"),,.
- Sensitivity is an inherent characteristic of the test itself and is not influenced by the prevalence of the disease in the population.

### Specificity

- Specificity is defined as the percentage of true negatives.
- It represents the proportion of individuals who do not have the disease who are correctly identified by the test as negative.
- In probabilistic terms, it is the probability that a test result will be negative when the disease is truly absent.
- It is calculated as the number of true negatives divided by the total number of non-diseased individuals: True Negative / (False Positive + True Negative), or d / (b + d).
- A highly specific test yields very few false positive results.
- Clinically, if a highly specific test returns a positive result, it provides strong evidence to rule in the disease (a principle recognized by the mnemonic "SpIN"),.
- Like sensitivity, specificity is a fundamental characteristic of the test and remains unaffected by disease prevalence.

### Positive Predictive Value (PPV)

- Positive Predictive Value (PPV) is the probability that an individual with a positive test result actually has the disease in question,.
- It provides clinical relevance at the individual level, answering the patient's question: "If I test positive, what is the likelihood I truly have the disease?".
- It is calculated as the number of true positives divided by the total number of individuals testing positive: True Positive / (True Positive + False Positive), or a / (a + b).
- Unlike sensitivity and specificity, predictive values are heavily influenced by the prevalence of the disease in the population.
- As the prevalence of a disease increases within a population, the PPV of a test also increases.
- Conversely, if the disease is very rare (low prevalence), the PPV decreases significantly because the number of false positives will heavily outnumber the true positives.

### Negative Predictive Value (NPV)

- Negative Predictive Value (NPV) is the probability that an individual with a negative test result is truly free of the disease,.
- It is the proportion of people with a negative test who actually do not have the disease.
- It is calculated as the number of true negatives divided by the total number of individuals testing negative: True Negative / (False Negative + True Negative), or d / (c + d),.
- NPV is directly influenced by the prevalence of the condition,.
- As the prevalence of a disease decreases, the NPV increases because there will be a far greater number of true negatives for every false negative.

## Summary of Diagnostic Test Parameters

|Parameter|Definition / Concept|Formula|Clinical Utility|
|:--|:--|:--|:--|
|**Sensitivity**|Proportion of diseased people testing positive,.|a / (a + c)|Used to rule OUT disease (SnOUT); independent of prevalence,.|
|**Specificity**|Proportion of healthy people testing negative,.|d / (b + d)|Used to rule IN disease (SpIN); independent of prevalence,.|
|**PPV**|Probability of having the disease if the test is positive.|a / (a + b)|Indicates reliability of a positive result; increases with higher prevalence,.|
|**NPV**|Probability of not having the disease if the test is negative.|d / (c + d)|Indicates reliability of a negative result; increases with lower prevalence.|