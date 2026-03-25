---
{"dg-publish":true,"uplink":"/statistics/statistics/","uptext":"Back to Index (🔢 Statistics)","permalink":"/statistics/funnel-plot/","dgPassFrontmatter":true}
---

### Definition and Clinical Utility
* A funnel plot is a simple, informal graphical method (a scatterplot) used primarily in the context of systematic reviews and meta-analyses to assess the presence of publication bias,,.
* Publication bias occurs when the published literature represents an incomplete subset of all studies conducted on a topic, often because studies with small or non-significant effects are selectively excluded from publication,,.
* The plot helps reviewers visually identify if such negative or non-significant studies have been left out of the meta-analysis,.

### Construction and Components
* The funnel plot is constructed by plotting individual studies based on their effect size against their precision,. 
* A vertical line is typically drawn through the center of the plot, representing the pooled treatment effect (the assumed true population mean) derived from the meta-analysis,.

| Plot Component | Description and Scaling |
| :--- | :--- |
| **X-axis** | Represents the study's result or treatment effect size (e.g., Odds Ratio, Relative Risk, or mean difference),,. |
| **Y-axis** | Represents the precision of the treatment effect, such as the sample size, standard error, or the reciprocal of the standard error (1/standard error),,. |
| **Y-axis Orientation** | The y-axis is often inverted, placing 0 at the very top of the graph so that higher precision is visually higher on the plot,. |
| **Data Points** | Each individual circle or dot plotted on the graph represents a separate, independent study included in the meta-analysis,. |

### Interpretation of the Plot
* The fundamental principle behind the funnel plot relies on sampling variability: smaller studies are less precise and more affected by random variation, while larger studies provide a more precise estimate of the true population mean,.

| Plot Appearance | Study Distribution | Clinical Implication |
| :--- | :--- | :--- |
| **Symmetrical (No Bias)** | Larger, more precise studies cluster tightly near the top around the vertical pooled effect line,. Smaller studies scatter widely at the bottom on both sides of the line, creating a symmetrical, inverted funnel or pyramid shape,,. | Indicates the absence of publication bias; the whole spectrum of the population was likely sampled and published,. |
| **Asymmetrical (Bias Present)** | The pyramid is skewed, typically displaying a noticeable gap or missing section in one of the lower corners (often the corner representing small, non-significant, or negative effects),,. | Suggests the presence of publication bias, meaning certain studies were selectively excluded from the literature,. |

* It is important to maintain cautious interpretation, as asymmetry in a funnel plot can occasionally arise from factors other than publication bias,.

### Related Statistical Tests and Methods
* Visual inspection of a funnel plot is informal; therefore, specific statistical tests are used to objectively evaluate the asymmetry of the plot.
* **Egger's Test:** A formal statistical test for funnel plot asymmetry based on a linear regression of the effect size (divided by its standard error) against precision,. A significant p-value (p < 0.05) indicates the presence of publication bias,.
* **Begg's Test:** Another statistical test used to evaluate funnel plot asymmetry, based on the size of the rank correlation between the effect estimates and their variances,.
* **Trim and Fill Method:** A statistical procedure designed to achieve a more objective interpretation of an asymmetrical funnel plot. It imputes (estimates and fills in) the missing effect sizes for the studies that are presumed to have been excluded from the meta-analysis due to bias, allowing for an adjusted pooled estimate.