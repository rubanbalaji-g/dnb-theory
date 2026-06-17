---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/sensitivity-specificity-ppv-and-npv/","dgPassFrontmatter":true}
---

## Overview Of Diagnostic Testing

- Medical research continuously seeks to develop new diagnostic tests that are cheaper, easier, or less invasive than standard ones.
- A new diagnostic test must be systematically compared against an established gold standard test.
- The gold standard test provides a definitive and absolute diagnosis of a particular clinical condition.
- Researchers apply both the new diagnostic test and the gold standard test to a specific group of individuals.
- Participants will include some individuals who truly have the disease and some who do not.
- The accuracy of the new test is subsequently determined by calculating specific statistical parameters from the collected data.

## The 2x2 Contingency Table

### Structural Layout

- The results of a diagnostic accuracy study are arranged in a 2x2 contingency table.
- The columns strictly represent the true disease status as determined by the gold standard test.
- The rows represent the outcome results of the new diagnostic test being evaluated.

|New Diagnostic Test|Disease Present (Gold Standard)|Disease Absent (Gold Standard)|Total|
|:--|:--|:--|:--|
|**Test Positive**|True Positive (a)|False Positive (b)|a + b|
|**Test Negative**|False Negative (c)|True Negative (d)|c + d|
|**Total**|a + c|b + d|a + b + c + d|

### Classification Of Outcomes

- **True Positive (a)**: The new test correctly identifies patients who have the disease.
- **False Positive (b)**: The new test incorrectly identifies healthy individuals as having the disease.
- **False Negative (c)**: The new test incorrectly rejects the diagnosis in patients who actually have the disease.
- **True Negative (d)**: The new test correctly rejects the diagnosis in healthy individuals.

## Sensitivity

### Definition And Characteristics

- Sensitivity is a fundamental index used to measure the performance of a diagnostic test.
- It evaluates how well a specific test identifies patients who truly have the disease.
- It is defined as the proportion of individuals with the disease who are correctly identified by the test as positive.
- It represents the true positive rate of the diagnostic test.

### Mathematical Formula

- Sensitivity relies entirely on the left column of the contingency table.
- It is calculated by dividing the number of true positives by the total number of diseased individuals.

$$Sensitivity = \frac{True\ Positive}{True\ Positive + False\ Negative} = \frac{a}{a+c}$$

### Clinical Interpretation And Application

- A highly sensitive test yields very few false negative results.
- An ideal 100% sensitive test will be positive in all patients with the disease.
- Because it rarely misses the disease, a highly sensitive test is excellent for ruling out a condition.
- If a highly sensitive test yields a negative result, the clinician can confidently rule out the disease.
- This clinical utility is easily remembered by the mnemonic SnOUT (Sensitivity rules OUT).
- However, high sensitivity often comes at the cost of a higher false positive rate.

## Specificity

### Definition And Characteristics

- Specificity is the complementary index used to assess diagnostic test performance.
- It evaluates how accurately a diagnostic test identifies healthy individuals.
- It is defined as the proportion of individuals without the disease who are correctly identified by the test as negative.
- It represents the true negative rate of the diagnostic test.

### Mathematical Formula

- Specificity relies entirely on the right column of the contingency table.
- It is calculated by dividing the number of true negatives by the total number of healthy individuals.

$$Specificity = \frac{True\ Negative}{False\ Positive + True\ Negative} = \frac{d}{b+d}$$

### Clinical Interpretation And Application

- A highly specific test yields extremely few false positive results.
- Because it is highly selective, it rarely mistakenly identifies a healthy person as diseased.
- A highly specific test is exceptionally useful for ruling in a disease.
- If a highly specific test yields a positive result, the clinician can confidently rule in the disease.
- This clinical utility is easily remembered by the mnemonic SpIN (Specificity rules IN).
- However, high specificity often increases the risk of yielding false negative results.
- Researchers map the constant trade-off between sensitivity and specificity using a Receiver Operating Characteristic (ROC) curve.

## Predictive Values

### Overview Of Predictive Testing

- Sensitivity and specificity are inherent characteristics of the test itself.
- They evaluate diagnostic accuracy from a broad population level.
- However, clinicians and patients primarily want to know the probability of having the disease given a specific test result.
- Predictive values answer this question and provide accuracy at the individual patient level.

### Positive Predictive Value (PPV)

- PPV measures the likelihood that an individual actually has the disease if they test positive.
- It is the proportion of people with a positive test who truly harbor the disease.
- It relies entirely on the top row of the contingency table.

$$PPV = \frac{True\ Positive}{True\ Positive + False\ Positive} = \frac{a}{a+b}$$

### Negative Predictive Value (NPV)

- NPV measures the likelihood that an individual is truly healthy if they test negative.
- It is the proportion of people with a negative test who are completely free of the disease.
- It relies entirely on the bottom row of the contingency table.

$$NPV = \frac{True\ Negative}{False\ Negative + True\ Negative} = \frac{d}{c+d}$$

### The Impact Of Disease Prevalence

- Prevalence defines the percentage of the overall population that truly has the condition.
- Unlike sensitivity and specificity, the PPV and NPV are heavily influenced by the disease prevalence within the tested population.
- As the prevalence of a disease decreases, the NPV automatically increases.
- This occurs because false negatives become extremely rare when the disease itself is very uncommon.
- Conversely, as the prevalence decreases, the PPV drops significantly.
- This happens because a rare disease will generate a proportionately higher number of false positives for every single true positive.

## Summary Table Of Diagnostic Accuracy Metrics

|Metric|Clinical Question Answered|Formula Derivation|Key Clinical Utility|
|:--|:--|:--|:--|
|**Sensitivity**|How well does the test identify diseased individuals?|$TP / (TP + FN)$|High sensitivity rules OUT disease (SnOUT).|
|**Specificity**|How well does the test identify healthy individuals?|$TN / (FP + TN)$|High specificity rules IN disease (SpIN).|
|**PPV**|If the test is positive, what is the chance I am sick?|$TP / (TP + FP)$|Predicts true sickness; decreases in rare diseases.|
|**NPV**|If the test is negative, what is the chance I am healthy?|$TN / (FN + TN)$|Predicts true health; increases in rare diseases.|