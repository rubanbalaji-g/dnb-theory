---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/forest-plot/","dgPassFrontmatter":true}
---

### Definition and Purpose

- A Forest plot is a specific graphical illustration commonly used to present the results of a meta-analysis.
- It visually displays the point estimates and confidence intervals for all the selected individual studies, alongside the combined overall summary effect.
- In a standard layout, the plot is usually accompanied by descriptive text including the name of each study (or the author and year of publication), a summary of the raw results for each study, the calculated weight of each study, the overall effect estimate, and statistical tests of heterogeneity.

### Components and Interpretation

- The graphical elements of a Forest plot convey specific statistical information regarding the individual trials and the pooled data.

|Component|Description and Interpretation|
|:--|:--|
|**Horizontal Axis**|Represents the scale of the chosen effect measure, such as the Odds Ratio (OR), Relative Risk (RR), Absolute Risk Reduction (ARR), or Standardized Mean Difference (SMD).|
|**Vertical Line**|Known as the "line of null effect", it signifies the exact value where there is no statistical association between an exposure and an outcome. For relative ratio measures like OR or RR, this line passes through 1; for absolute difference measures like ARR or Mean Difference (MD), the line passes through 0.|
|**Squares (Boxes)**|Represent the specific effect estimates of the individual studies. The physical size of each square is proportional to the statistical weight that the study contributes to the overall meta-analysis.|
|**Horizontal Lines**|Extend from the squares to represent the 95% confidence intervals (CI) for each individual study. Smaller trials inherently produce wider confidence intervals and consequently receive less weight. If a study's horizontal line crosses the vertical line of null effect, that individual study's result is not statistically significant.|
|**Diamond**|Located at the lowest row of the plot, it represents the overall pooled summary effect estimate. The two horizontal tips (ends) of the diamond represent the exact width of the 95% confidence interval for this combined estimate. If the horizontal tips of the diamond cross the vertical line of null effect, the overall combined result is deemed not statistically significant.|