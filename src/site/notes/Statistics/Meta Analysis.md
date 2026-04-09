---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/meta-analysis/","dgPassFrontmatter":true}
---

### Definition and Rationale

- Meta-analysis is a statistical technique and a form of secondary research used to systematically combine the results of two or more independent studies to provide a single summary estimate of a treatment effect or to yield an overall answer to a specific clinical question.
- The procedure is essentially the quantitative component of a systematic review and is performed after identifying relevant studies through structured inclusion criteria.
- The primary advantage of pooling studies together is that it significantly increases the available sample size, which subsequently reduces the Standard Error (SE), improves the precision of the overall effect estimate, and increases the statistical power of the conclusions.

### Steps in Conducting a Meta-Analysis

- **Developing the Question:** Formulating a good research question and identifying relevant studies using PICO criteria (Population, Intervention, Comparator, Outcomes).
- **Determining Eligibility:** Applying strict inclusion and exclusion criteria to eliminate studies with high risks of bias or unacceptable clinical heterogeneity.
- **Data Extraction:** Creating a structured database to collect study details (author, year, number of participants, intervention vs. control parameters) and calculating an individual effect estimate for each selected study.
- **Statistical Pooling:** Combining the data using specialized weighting techniques and statistical models to arrive at the overall summary estimate.

### Weighting Techniques and Summary Statistics

- Directly adding study results together is inappropriate because it gives equal weight to all studies, irrespective of their precision; instead, meta-analyses use "weighting" to allocate influence based on sample size and variance.

|Feature|Inverse Variance Method|Mantel-Haenszel Method|
|:--|:--|:--|
|**Concept**|Weighting is allocated in inverse proportion to the variance of the effect estimate (studies with wider confidence intervals receive less weight).|Gives greater emphasis to overall study size while simultaneously taking variance into account.|
|**Primary Indication**|The preferred technique for pooling studies that evaluate continuous outcome variables.|The preferred technique for pooling studies that evaluate binary (dichotomous) outcome variables.|
|**Summary Statistics Utilized**|**Weighted Mean Difference (WMD):** Used when all included studies utilize the same measurement scale.**Standardised Mean Difference (SMD):** Used when studies assess the same outcome but utilize different scales, standardizing the mean differences by dividing by the standard deviation.|**Relative Risk (RR), Odds Ratio (OR), or Absolute Risk Reduction (ARR):** Calculated from the grouped binary event rates of the exposed and unexposed populations.|

### Statistical Models for Combining Data

- The choice of the statistical model depends on the degree of underlying heterogeneity among the included studies.

| Model Type               | Underlying Assumptions                                                                                                                                                   | Indications and Characteristics                                                                                                                                                  |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fixed-Effects Model**  | Assumes that one true intervention effect underlies all included studies and that any observed differences in results are purely due to random chance or sampling error. | Used when there is no significant clinical or statistical heterogeneity present. It generally produces a narrower confidence interval.                                           |
| **Random-Effects Model** | Assumes that the true treatment effect is randomly distributed and different across studies, though all belong to the same underlying distribution.                      | Used when significant clinical or statistical heterogeneity is present. It generally results in a wider overall confidence interval due to the assumption of higher variability. |

### Assessment of Heterogeneity

- Heterogeneity represents the variation between studies, which can be clinical (differences in age, population, dose), methodological, or statistical (variation in treatment effect beyond what is expected by chance alone).
- **Q-test for Heterogeneity:** A statistical test based on the Chi-square distribution; it indicates the presence of heterogeneity. Because it has low power with small study numbers, a p-value cutoff of <0.10 is conventionally used to establish significance.
- **$I^2$ Statistic:** Quantifies the percentage of total variability in the effect estimates that is due to heterogeneity rather than chance; it is independent of the number of studies.
- An $I^2$ value of 0% to 30% might not be important, 30% to 50% represents moderate heterogeneity, and >50% to 75% strongly suggests substantial to considerable heterogeneity, prompting the use of a random-effects model.
- **L'Abbé Plot:** A scatterplot used to graphically explore statistical heterogeneity, plotting the outcome in the control group against the intervention group, where large deviations indicate heterogeneity.

### Graphical Representation: The Forest Plot

- A Forest plot provides a graphical illustration of the meta-analysis results, displaying individual study estimates alongside the combined summary estimate.
- The horizontal axis represents the specific effect measure (e.g., OR, RR, SMD).
- A vertical "line of null effect" is drawn at the value where there is no association (placed at 1 for ratios like OR/RR, and at 0 for differences like ARR/MD).
- Individual studies are represented by boxes, where the size of the box corresponds to the statistical weight of the study, and horizontal lines extending from the boxes represent the 95% confidence intervals.
- A diamond at the bottom represents the overall pooled summary estimate, with its horizontal tips indicating the final 95% confidence interval; if the tips cross the line of null effect, the combined result is not statistically significant.

### Evaluation of Publication Bias

- Publication bias occurs when studies with non-significant or negative results are selectively excluded from the published literature, skewing the overall meta-analysis results.
- **Funnel Plot:** An informal scatterplot assessing publication bias by plotting treatment effect sizes against measures of precision (such as sample size or standard error).
- In the absence of bias, the plot resembles a symmetrical inverted funnel or pyramid; asymmetry or a noticeable gap typically indicates that smaller, non-significant studies are missing from the analysis.
- **Egger’s and Begg’s Tests:** Formal statistical tests utilized to analyze funnel plot asymmetry; Egger's test uses linear regression of effect size against precision to detect bias (significant if p < 0.05).

### Advanced Extensions of Meta-Analysis

- **Cumulative Meta-analysis:** Repeated execution of a meta-analysis with each new study added chronologically to examine how the pooled effect size shifts over time.
- **Network Meta-analysis:** Summarizes both direct and indirect evidence across multiple treatments for a given condition, useful when interventions differ across individual trials.
- **Individual Patient Data Meta-analysis:** Operates directly on the raw, individual-level data acquired from the original researchers rather than using published summary statistics.
- **Meta-regression Analysis:** Explores sources of heterogeneity by utilizing multiple linear or logistic regression to investigate the relationship between study characteristics (e.g., demographics, timing) and the observed effect magnitude.
- **Bayesian Meta-analysis:** Incorporates prior distribution information from other trials and flexibly accounts for parameter uncertainty using Markov chain Monte Carlo methods.