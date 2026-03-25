---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/randomization-techniques/","dgPassFrontmatter":true}
---

## 1. Definition and Purpose
* **Definition:** Randomization is the methodological process of assigning clinical trial participants to treatment or control groups using a chance mechanism, ensuring every participant has a known (usually equal) probability of receiving the intervention.
* **Primary Purpose:** To eliminate selection bias, evenly distribute known and unknown confounding factors (baseline characteristics) between groups, and provide a mathematically valid basis for statistical inference.

## 2. Simple Randomization
* **Mechanism:** Analogous to repeated coin tossing. It utilizes computer-generated random number sequences or standard random number tables.
* **Advantages:** Simple to implement; maintains absolute unpredictability.
* **Disadvantages:** High risk of unequal group sizes and chronological bias, particularly in trials with small sample sizes ($n < 100$).

## 3. Block Randomization (Permuted Block)
* **Mechanism:** Participants are divided into "blocks" of even sizes (e.g., 4, 6, or 8). Randomization occurs within each block, ensuring an exact, equal number of subjects are allocated to each group per block (e.g., 2 Treatment and 2 Control in a block of 4).
* **Advantages:** Guarantees strict balance in sample sizes across treatment arms at any given point during the trial, which is crucial for trials utilizing interim analyses.
* **Disadvantages:** If the block size is fixed and known to the investigator, the final allocation in a block becomes predictable, threatening allocation concealment. *Solution: Use randomly varying block sizes.*

## 4. Stratified Randomization
* **Mechanism:** The study population is first divided into homogeneous subgroups (strata) based on highly influential prognostic variables (e.g., birth weight $<1000g$ vs $>1000g$, or disease severity). Block randomization is then performed independently within each stratum.
* **Advantages:** Ensures proportional balance of critical confounders across study arms, increasing the statistical power of the trial.
* **Disadvantages:** Logistically complex. Over-stratification (using too many variables) can lead to fragmented, unfilled blocks.

## 5. Covariate Adaptive Randomization (Minimization)
* **Mechanism:** A dynamic process where the probability of assignment changes based on the baseline characteristics of participants already enrolled in the trial, aiming to minimize aggregate imbalance.
* **Advantages:** The most effective technique for balancing multiple covariates simultaneously in very small clinical trials.
* **Disadvantages:** Computationally demanding; mandates centralized, real-time computer allocation.