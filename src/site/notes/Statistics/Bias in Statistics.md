---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/bias-in-statistics/","dgPassFrontmatter":true}
---

## Definition and Core Concepts of Bias

- Bias is formally defined as the deviation of results or inferences from the truth, or the specific processes leading to such a deviation.
- In medical statistics, bias represents a systematic tendency to deviate from the true estimate of a treatment's effect or an exposure's risk.
- It describes the extent to which the statistical method utilized in a study fails to estimate the true quantity it is intended to estimate, or fails to test the actual hypothesis.
- Bias is considered a systematic error that skews all data in a particular direction and can occur at any stage of the research process, from the initial literature review through to the publication of results.
- A critical distinction must be made between random error and systematic error (bias); unlike random error, systematic error cannot be dealt with or minimized simply by increasing the sample size.
- Increasing the sample size in the presence of bias serves only to obtain more mathematically precise, yet fundamentally flawed and biased, estimates of the desired quantity.

## Classification of Bias in Medical Research

### Selection and Sampling Biases

#### **Selection Bias:** 
- This bias is introduced when a treatment is chosen by the individual involved or is subject to constraints that go unobserved by the researcher.
- Selection bias means any direct links between a treatment and outcomes are confounded with unmeasured variables.
- A classic example of selection bias is the 1920s Lanarkshire milk experiment, where 10,000 children were randomly allocated to receive free milk and a similar number received no supplementation.
- However, well-intentioned teachers broke the random allocation to give the poorest children priority for the free milk, resulting in the effects of the milk supplementation becoming indistinguishable from the effects of poverty.
- Selection bias is also present when the individuals included in a study are simply not representative of the broader target population.
#### **Berkson’s Bias (Berkson's Fallacy):** 
- This refers to the existence of artefactual associations between two medical conditions, or between a disease and a risk factor, arising from the interplay of differential hospital admission rates.
- An example is an autopsy study where fewer autopsies than expected found both tuberculosis and cancer occurring together, erroneously implying that tuberculosis is protective against cancer.
- This fallacy occurred simply because people who died with both diseases were less likely to be autopsied. It is impossible to mathematically correct for Berkson's bias during analysis.
#### **Length Bias:** 
- A bias that arises in sampling schemes based on patient visits, where certain individuals are more likely to be selected simply because they make more frequent visits.
- In cancer screening, length-biased sampling results in the detected cases containing a disproportionate excess of slow-growing cancers compared to the sample of cancers diagnosed positively because of routine symptoms.
#### **Lead Time Bias:** 
- This is the difference in time from when a tumour would have naturally been detected by symptoms (in the absence of screening) to when detection artificially occurred due to the presence of a screening programme.
- Comparing survival times between screened and unscreened populations is subject to lead time bias if survival is estimated strictly as the time from diagnosis to death, as early detection artificially increases the survival time without necessarily prolonging the patient's life.
#### **Volunteer Bias:** 
- A source of bias in clinical trials involving participants who volunteer, arising from the known propensity of volunteers to respond better to treatments than the general patient population.

### Measurement and Information Biases

#### **Ascertainment Bias (Detection Bias):** 
- This is a form of bias arising from a direct relationship between exposure to a risk factor and the probability of detecting an event of interest.
- For example, in a retrospective study comparing women with cervical cancer and a control group, an apparent excess of oral contraceptive use among the cases might simply be due to more frequent screening in women who use oral contraceptives.
#### **Recall Bias (Report Bias):** 
- A significant limitation of retrospective study designs, such as case-control studies, where participants (especially healthy controls) may not report or remember their past exposures accurately.
#### **Acquiescence Bias (Yea-saying):** 
- The bias produced by survey respondents who have a psychological tendency to give positive answers, such as ‘true’, ‘like’, or ‘yes’, irrespective of the actual content or meaning of the question.
#### **End-Aversion Bias:** 
- The reluctance of certain individuals to use the extreme ends of a measurement scale when responding to questionnaires.
#### **Interviewer Bias:** 
- Bias occurring in surveys of human populations as a direct result of the action of the interviewer, including failure to contact the appropriate demographic or making systematic errors in recording the answers received.
#### **Response Bias:** 
- The systematic component of the difference between the information provided by a survey respondent and the actual 'truth'.
#### **Non-response Bias:** 
- A bias introduced when the respondents in a survey differ significantly in their baseline characteristics from those who fail to respond, undermining the final results if the non-response rate is high.
#### **Protopathic Bias (Reverse Causality):** 
- A consequence of differential misclassification of an exposure related to its timing of occurrence.
- It occurs when a change in exposure that takes place _after_ disease occurrence is incorrectly thought to _precede_ the disease.
- For instance, a finding that alcohol has a protective effect against clinical gallstone disease might actually be explained by patients reducing their alcohol use because of early symptoms related to the gallstones.

### Reporting, Cognitive, and Publication Biases

#### **Publication Bias (File Draw Problem):** 
- The bias produced because studies are not uniformly likely to be published in scientific journals.
- Statistical significance remains a major determining factor in persuading editors to publish a paper, leading to a literature landscape that selectively excludes studies with small or non-significant effects.
####  **Outcome Reporting Bias:** 
- This occurs when a pre-specified outcome is deliberately modified or not reported, or when an outcome not previously specified in the protocol is reported, usually to make the results look more statistically attractive.
- Researchers have estimated that statistically significant outcomes are twice as likely to be reported than non-significant results, which overestimates the true treatment effect by approximately 20%.
####  **Confirmation Bias:** 
- An inherent cognitive human trait whereby researchers tend to actively seek out, favour, and give credence to evidence that confirms their preconceived prior beliefs, while ignoring contradictory information.
####  **Citation Distortion:** 
- Arising from confirmation bias, this phenomenon occurs when a researcher gives undue weight and citation to evidence that favours their belief, creating a network of unfounded authority via biased citation. Statistically significant results are nearly twice as likely to be cited as non-significant ones.

## Tabular Summary of Common Statistical Biases

|Bias Category|Name of Bias|Core Mechanism and Description|
|:--|:--|:--|
|**Selection**|Selection Bias|The allocation or choice of subjects is flawed, resulting in unmeasured variables confounding the relationship between treatment and outcome.|
|**Selection**|Berkson’s Fallacy|Spurious associations caused by differential hospital admission rates; prevalent in autopsy or inpatient studies.|
|**Selection**|Length Bias|Patients with slower-progressing diseases are disproportionately sampled because they have longer asymptomatic periods and make more clinic visits.|
|**Measurement**|Ascertainment Bias|The probability of detecting the outcome is directly influenced by the exposure status itself (e.g., increased surveillance in the exposed group).|
|**Measurement**|Recall Bias|Differential accuracy in remembering past exposures between diseased cases and healthy controls.|
|**Measurement**|Protopathic Bias|Incorrectly attributing a change in habits caused by early disease symptoms as the primary cause of the disease (reverse causality).|
|**Reporting**|Publication Bias|The systemic failure to publish studies that yield non-significant or negative results, skewing meta-analyses.|
|**Reporting**|Outcome Reporting Bias|Selectively reporting only the specific endpoints that achieved statistical significance within a larger trial.|