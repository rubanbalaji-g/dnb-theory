---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/evaluation-of-a-diagnostic-test-study/","dgPassFrontmatter":true}
---

### Introduction and Purpose

- Diagnostic test studies are designed to evaluate the accuracy and utility of a new diagnostic or screening test by comparing it to a recognized "gold standard" test that provides a definitive diagnosis,.
- The goal is to determine how well the new test correctly identifies patients with the disease and correctly rejects those without it, often because the new test may be cheaper, easier, or less invasive than the gold standard,.
- The evaluation relies on cross-tabulating the results of the new test against the gold standard to quantify the margin of error, including false-positive and false-negative outcomes,.

### The Contingency Table Framework

- The fundamental framework for evaluating a diagnostic test is the 2x2 contingency table, which categorizes subjects based on their true disease status and their test outcome,,,.

|New Diagnostic Test|Gold Standard: Disease Present|Gold Standard: Disease Absent|Total|
|:--|:--|:--|:--|
|**Test Positive**|True Positive (a)|False Positive (b)|Total Test Positive (a+b)|
|**Test Negative**|False Negative (c)|True Negative (d)|Total Test Negative (c+d)|
|**Total**|Total Diseased (a+c)|Total Healthy (b+d)|Total Population (a+b+c+d)|

### Measures of Inherent Test Accuracy

- **Sensitivity:** This measures the test's ability to correctly identify individuals with the disease.
- It is defined as the proportion of people with the disease who test positive, calculated as True Positives divided by Total Diseased $\frac{a}{a+c}$,.
- A highly sensitive test has few false negatives, making it exceptionally useful for ruling out a disease (often remembered by the mnemonic "SnOUT").
- **Specificity:** This evaluates the test's ability to correctly identify healthy individuals.
- It is the proportion of healthy people who test negative, calculated as True Negatives divided by Total Healthy $\frac{d}{b+d}$,.
- A highly specific test yields very few false positives, making it ideal for ruling in a disease ("SpIN").
- Both sensitivity and specificity are fixed characteristics of the test itself and remain unaffected by the prevalence of the disease in the population being tested,.

### Measures of Clinical Utility (Predictive Values)

- While sensitivity and specificity describe the test's overall accuracy, clinicians and patients primarily need to know the probability of having the disease given a specific test result,.
- **Positive Predictive Value (PPV):** The probability that an individual with a positive test result actually has the disease,.
- PPV is calculated as True Positives divided by Total Test Positives $\frac{a}{a+b}$,.
- **Negative Predictive Value (NPV):** The probability that an individual with a negative test result is truly free of the disease,.
- NPV is calculated as True Negatives divided by Total Test Negatives $\frac{d}{c+d}$,.
- **Effect of Prevalence:** Unlike sensitivity and specificity, predictive values are heavily influenced by the disease's prevalence,.
- As disease prevalence decreases in a population, the NPV increases (because true negatives far outnumber false negatives), while the PPV decreases (because false positives outnumber true positives),.

### Advanced Evaluation Methods

- **Likelihood Ratio (LR):** The LR combines sensitivity and specificity into a single value that represents the ratio of the probability of a specific test result in a diseased person compared to a healthy person,.
- A Positive LR indicates the likelihood of testing positive if diseased versus healthy; larger values are superior for ruling in disease.
- A Negative LR indicates the likelihood of testing negative if diseased versus healthy; smaller values are better for ruling out disease.
- **Receiver Operating Characteristic (ROC) Curve:** When a diagnostic test yields numerical or continuous results, an ROC curve is plotted to determine the optimal cut-off value,.
- The ROC curve plots the True Positive Rate (Sensitivity) on the Y-axis against the False Positive Rate (1 - Specificity) on the X-axis for all possible cut-off points,.
- A perfect test produces an ROC curve that passes through the upper left corner (100% sensitivity, 100% specificity).
- **Area Under the Curve (AUC):** The AUC quantifies the overall accuracy of the test across all cut-offs, ranging from 0.5 (no better than chance) to 1.0 (perfect discrimination).

### Reporting Standards (STARD)

- Studies evaluating diagnostic tests should be reported using the STARD (Standards for Reporting of Diagnostic Accuracy) guidelines.
- The STARD checklist ensures transparent reporting regarding population samples, recruitment criteria, and the expertise of the testers, mitigating bias and improving the reproducibility of the study's evaluation.