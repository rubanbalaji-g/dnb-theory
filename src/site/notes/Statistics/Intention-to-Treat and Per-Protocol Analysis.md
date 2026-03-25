---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/intention-to-treat-and-per-protocol-analysis/","dgPassFrontmatter":true}
---

### Intention-to-Treat (ITT) Analysis
*   Intention-to-treat (ITT) is a statistical concept used in the analysis of randomized controlled trials (RCTs) where all participants are analyzed within the original group they were randomly allocated to, regardless of the actual treatment they received.
*   The fundamental motto of the ITT approach is "once randomised, always analysed".
*   The analysis includes all patients, even if they crossed over to the other trial arm, failed to comply with the treatment, dropped out of the study, or were lost to follow-up.
*   It is considered the gold standard for statistical analysis in pragmatic randomized controlled trials.
*   **Strengths and Advantages:**
    *   ITT preserves the carefully achieved benefits of the initial randomization, ensuring that known and unknown confounding factors remain equally distributed between the study arms.
    *   It prevents attritional bias, which can occur if dropouts and losses to follow-up happen in a non-random fashion.
    *   By maintaining the entire cohort, ITT analysis retains the maximum sample size, providing the most study power compared to other types of analyses.
    *   It reflects a true population-level effect and estimates the effect of *assignment* to a particular treatment. 
    *   Because it includes non-compliant patients, it provides a highly realistic estimate of the intervention's likely practical benefits when deployed in real-world clinical practice, where some patients will inevitably refuse or stop taking the medication.
    *   Due to the inclusion of a heterogeneous group, ITT provides a conservative estimate of the treatment effect, thereby reducing the risk of a Type I error (false positive).
*   **Limitations and Challenges:**
    *   A primary disadvantage is the potential to introduce clinical heterogeneity, as the analyzed group contains a disparate mix of patients (some who received the intervention, some who crossed over, some who dropped out).
    *   Because the treatment differences are diluted, ITT is more likely to yield a finding of "no difference," thus increasing the risk of a Type II error (false negative).
    *   Handling missing data (from dropouts or lost follow-ups) is complex; researchers commonly use methods like "last observation carried forward" or the gold-standard "multiple imputations method" to compensate for missing data points without removing the patient from the ITT analysis.

### Per-Protocol Analysis
*   Per-protocol analysis is an alternative approach that evaluates only the outcomes of those participants who strictly adhered to the original intended allocated intervention.
*   Participants who dropped out, crossed over to the alternate treatment group, or committed protocol violations are entirely excluded from the analysis.
*   Instead of measuring the effect of treatment assignment, it specifically analyzes the effect of *adherence* to the treatment assignment.
*   **Strengths and Advantages:**
    *   It measures the optimal efficacy of the treatment under ideal conditions where patients fully comply.
    *   While ITT is preferred for superiority trials, per-protocol analysis is often the preferred method for non-inferiority trials. In a non-inferiority trial, ITT is disadvantageous because protocol violations naturally dilute the differences between treatment arms, making it artificially easier to prove that a new drug is "not inferior" (favoring non-inferiority).
*   **Limitations and Challenges:**
    *   By excluding non-compliant participants, per-protocol analysis fundamentally violates and breaks the original randomization of the cohort.
    *   This loss of randomization means the remaining comparison groups are likely to be unmatched and heavily affected by confounding factors.
    *   Due to the reduction in sample size from excluded patients, the study may lose adequate statistical power, significantly increasing the risk of a Type II error.
    *   The introduction of confounding variables simultaneously increases the risk of a Type I error, making the results highly susceptible to bias.
    *   It frequently overestimates the true clinical effect of the treatment.

### Comparative Application in Clinical Trials

| Feature | Intention-to-Treat (ITT) | Per-Protocol |
| :--- | :--- | :--- |
| **Analyzed Population** | All randomized patients. | Only fully compliant patients. |
| **Randomization** | Strictly preserved. | Violated and broken. |
| **Statistical Power** | Maximum power (largest sample). | Reduced power (smaller sample). |
| **Risk of Errors** | Decreases Type I, Increases Type II. | Increases Type I, Increases Type II. |
| **Clinical Relevance** | Represents real-world effectiveness. | Represents ideal-world efficacy. |
| **Preferred Trial Design** | Superiority trials. | Non-inferiority trials. |

*   **Sensitivity Analysis:** Best practice in clinical research dictates performing a sensitivity analysis by conducting both ITT and per-protocol analyses.
*   Comparing the results of both tests allows researchers to assess the extent to which bias may have crept into the trial and evaluates the likely non-compliance rate of the treatment in real-world practice.