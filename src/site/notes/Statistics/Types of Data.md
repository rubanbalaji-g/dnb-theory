---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/types-of-data/","dgPassFrontmatter":true}
---

## Overview of Data Variables

- A data variable is defined as a characteristic of interest about an individual element that varies from person to person or from group to group.
- Recognizing the exact type of variable is essential in biomedical research, as it dictates how data is summarized, graphically presented, and statistically analyzed.
- Variables are broadly classified into two major categories: Categorical (qualitative) and Numerical (quantitative) data.

### Categorical (Qualitative) Variables

- Categorical variables describe data in terms of a specific quality or categorization and fundamentally lack a unit of measurement.
- Individuals are evaluated as belonging to specific, well-defined categories.

|Subtype|Definition|Clinical Examples|
|:--|:--|:--|
|**Nominal**|Categorical variables consisting of categories that have no intrinsic or natural sequence.|Blood groups (A, B, AB, O), sex (male, female), ethnicity, or nationality.|
|**Ordinal**|Categorical variables where the categories possess a meaningful, hierarchical order.|Disease severity (mild, moderate, severe), BMI status (underweight, normal, overweight, obese), or pain scales.|
|**Binary (Dichotomous)**|A specific type of nominal variable that restricts observations to one of only two possible states.|Dead/alive, diseased/healthy, or smoker/non-smoker.|

### Numerical (Quantitative) Variables

- Numerical variables take numerical values to which standard arithmetic operations can be applied.
- They are either systematically measured or counted and inherently possess a specific measurement unit.

|Subtype|Definition|Clinical Examples|
|:--|:--|:--|
|**Discrete**|Variables that take only integer values (whole numbers with no decimals); they typically represent a definitive count of items or events.|Number of children in a family, number of hospital visits, or number of teeth extracted.|
|**Continuous**|Variables that can take any real numerical value within a given range, including decimals; they involve exact physical measurements.|Weight (in kg), height (in cm), or fasting blood glucose level (in mg/dL).|

### Measurement Scales for Numerical Data

- Numerical variables can be further delineated based on their absolute mathematical properties:
- **Interval Scale:** An ordered numerical scale with the property that equal differences between levels reflect equal differences in the characteristic being measured; however, it lacks a true, absolute zero point (e.g., temperature measured in degrees Celsius).
- **Ratio Scale:** An interval scale that features a fixed, true zero point indicating the complete and total absence of the measured quantity (e.g., weight, or temperature in degrees Kelvin).

### Explanatory and Response Variables

- In the context of experimental design and regression analysis, variables are also categorized by their causal or associative relationships.
- **Independent Variable:** Alternatively known as the explanatory or predictor variable; it is the factor that is either manipulated or observed to evaluate its potential effect on another variable.
- **Dependent Variable:** Alternatively known as the response or outcome variable; it is the observed result or condition that is potentially caused or influenced by changes in the independent variable.

### Levels of Data Measurement and Transformation

- Data variables naturally exist within a hierarchy of measurement levels: numerical continuous $\rightarrow$ numerical discrete $\rightarrow$ ordinal $\rightarrow$ nominal.
- It is statistically permissible to downgrade a variable to a lower level of measurement.
- For instance, an exact continuous age can be grouped into an ordinal category (e.g., age groups like 11-20 or 21-30) or a nominal category (e.g., "young" vs. "old").
- However, it is impossible to transform data collected originally at a categorical level into a precise numerical form.
- While categorizing continuous variables is common for descriptive convenience, it causes a significant loss of information and introduces extreme measurement error; therefore, researchers should prioritize collecting data at the highest numerical continuous level possible.