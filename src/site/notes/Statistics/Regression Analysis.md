---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/regression-analysis/","dgPassFrontmatter":true}
---

### Definition and Core Principles

- Regression analysis is a statistical tool used to investigate and quantify the relationship between one or more independent variables (predictors) and an outcome (dependent) variable.
- It goes beyond merely describing the strength and direction of an association by quantifying the exact mathematical relationship, thus generating a regression equation.
- The two primary clinical and research purposes of regression are predicting the value of an outcome variable based on known predictors, and controlling (adjusting) for confounding variables to isolate the true effect of a specific exposure or intervention.
- Regression models are classified as "simple" when there is only one independent variable, and "multiple" (or multivariable) when there are two or more independent variables influencing the outcome.

### Types of Regression Models

- The selection of the appropriate regression model depends fundamentally on the data type of the outcome (dependent) variable.

|Outcome Variable Type|Required Regression Model|Effect Measure Produced|
|:--|:--|:--|
|Continuous (Numerical)|Linear Regression|Regression Coefficient / Mean Difference|
|Binary (Dichotomous)|Logistic Regression|Odds Ratio (OR)|
|Time-to-Event (Survival)|Cox Proportional Hazards Regression|Hazard Ratio (HR)|

### Linear Regression

- Utilized when the dependent variable is continuous (e.g., blood pressure, weight), predicting its value based on continuous, ordinal, or categorical independent variables.
- The simple linear regression equation is expressed as $y = b_0 + b_1x$.
- The $b_0$ parameter is the intercept (or constant), representing the expected baseline value of the outcome variable (y) when the independent variable (x) is exactly zero.
- The $b_1$ parameter is the slope (regression coefficient), representing the exact amount of change in the outcome variable for each one-unit increase in the independent variable.
- The Coefficient of Determination ($R^2$) assesses the goodness-of-fit of the model, indicating the specific proportion or percentage of the variance in the outcome variable that is explained by the independent variables.
- Key statistical assumptions for linear regression include Linearity, Independence of observations, Normal distribution of residuals, and Equal variance (Homoscedasticity).
- In multiple linear regression, there must also be an absence of multicollinearity (strong correlation between the independent variables themselves), which can cause unstable estimates and falsely inflated standard errors.

### Logistic Regression

- Applied when the outcome variable is binary or dichotomous, meaning it has only two possible states (e.g., disease present/absent, dead/alive, complication/no complication).
- Because a binary outcome cannot be modelled directly on a linear scale without predicting impossible values outside the 0 to 1 range, logistic regression uses a logit transformation to model the natural logarithm of the odds of the event occurring.
- The underlying equation is $ln[p/(1-p)] = b_0 + b_1x$, where $p$ is the probability of the outcome.
- The exponent of the regression coefficient ($exp(b_1)$) yields the Odds Ratio (OR), representing the multiplicative increase in the odds of the outcome for each unit increase in the predictor.
- In multiple logistic regression, the resulting OR is an "adjusted Odds Ratio," meaning it actively accounts for and removes the simultaneous effects of other confounding variables in the model.

### Cox Proportional Hazards Regression

- Utilized in survival analysis where the outcome of interest is not just whether an event occurred, but the time until the specific event occurs (e.g., time to death or relapse).
- The model analyzes the hazard function, and the exponent of the calculated regression coefficient gives the Hazard Ratio (HR).
- The HR indicates the relative risk of the event occurring in one group compared to another, averaged over the entire study period.
- It relies strictly on the proportional hazards assumption, meaning the hazard ratio between comparison groups must remain constant over time; if this assumption is violated, a time-dependent Cox model is required.

### Variable Selection Methods in Multiple Regression

- When building highly predictive multiple regression models, automated algorithms are often used to select the most significant independent variables from a large pool of candidates.
- **Forward Selection:** Starts with an empty model and sequentially adds variables one by one based on the highest statistical significance (lowest p-value) until no more significant variables are found.
- **Backward Elimination:** Starts with a saturated model containing all candidate variables and sequentially removes the least significant variables one by one until only statistically significant predictors remain.
- **Stepwise Selection:** A hybrid approach that adds variables similar to forward selection but continually re-evaluates all included variables, dropping any that lose their statistical significance as new variables are introduced into the model.