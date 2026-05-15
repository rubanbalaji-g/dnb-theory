---
{"dg-publish":true,"uplink":"/genetics/genetics/","uptext":"Back to Index (🧬 Genetics)","permalink":"/genetics/exome-sequencing/","dgPassFrontmatter":true}
---

## Definition And Principle

- High-throughput [[Genetics/Next-Generation Sequencing (NGS)\|next-generation sequencing (NGS)]] technology selectively evaluating protein-coding regions (exons) within the human genome.
- Targets approximately 20,000 known human genes, representing merely 1% to 2% of the entire genome (approximately 30-60 Mb).
- Captures the vast majority (approximately 85%) of established disease-causing pathogenic variants responsible for Mendelian disorders.
- Identifies single nucleotide variants (SNVs), small insertions and deletions (indels), missense mutations, and splice-site alterations.
- Advanced bioinformatic pipelines simultaneously detect smaller copy number variants (CNVs) routinely.

## Methodology And Workflow

- **DNA Extraction And Library Preparation:** Genomic DNA undergoes fragmentation followed by targeted capture of sequences corresponding to exonic regions via hybridization-based probes.
- **Sequencing:** Captured DNA processes through massively parallel short-read sequencing simultaneously, generating millions of reads.
- **Bioinformatic Pipeline:** Raw data (FASTQ) undergoes alignment to a reference human genome (hg38/GRCh38), variant calling, and annotation using specialized software.
- **Variant Prioritization:** Analysts filter thousands of variants utilizing population databases, disease-causing databases, and phenotype matching via Human Phenotype Ontology (HPO) terms.
- **Trio Sequencing:** Simultaneous testing of the proband and both biological parents (Trio-WES) constitutes the gold standard, effectively determining segregation patterns and readily identifying _de novo_ or compound heterozygous mutations.
- **Turnaround Time:** Standard reporting requires 2-8 weeks, whereas rapid WES for critically ill neonates yields results within 48-72 hours.

## Clinical Indications

|Category|Specific Clinical Scenarios|
|---|---|
|**Neurodevelopmental Disorders**|Unexplained [[Development/Global Developmental Delay\|global developmental delay]], intellectual disability, and [[Development/Autism Spectrum Disorder\|autism spectrum disorder]] after negative chromosomal microarray.|
|**Complex Phenotypes**|Multiple congenital anomalies or dysmorphic features lacking a clearly recognizable syndromic pattern.|
|**Extreme Heterogeneity**|Suspected monogenic disorders implicating massive numbers of candidate genes (e.g., epileptic encephalopathies, skeletal dysplasias, neuromuscular disorders).|
|**Atypical Presentations**|Inborn errors of metabolism with negative biochemical screening or atypical features of known conditions.|
|**Dual Diagnoses**|Patients exhibiting two or more unrelated phenotypes suggesting oligogenic conditions.|
|**Neonatal Intensive Care**|Critically ill infants requiring rapid diagnosis for time-sensitive, life-altering medical management decisions.|

## Diagnostic Yield And Advantages

- Provides a robust diagnostic yield ranging from 25% to 40% in previously undiagnosed dysmorphic, intellectual disability, and multiple congenital anomaly cases.
- Proves highly cost-effective, effectively ending the prolonged diagnostic odyssey associated with sequential single-gene testing.
- Facilitates the discovery of novel disease-gene associations.
- Enables targeted precision therapy initiation, guides medical surveillance protocols, and provides precise recurrence risk counseling.
- Periodic reanalysis of existing exome data every 6-12 months yields an additional 10-15% diagnostic success due to continuously updated gene-disease associations.

## Variant Interpretation

- Classification follows American College of Medical Genetics and Genomics (ACMG) and Association for Molecular Pathology (AMP) guidelines.
- Assigns variants into five tiers: Pathogenic, Likely pathogenic, Variant of Uncertain Significance (VUS), Likely benign, and Benign.
- Utilizes evidence tiers comprising very strong (null variant), strong (_de novo_), moderate (population frequency), and supporting (computational predictions) criteria.

## Limitations And Ethical Considerations

|Limitation Category|Clinical Impact|
|---|---|
|**Coverage Gaps**|Strictly evaluates targeted coding regions, missing pathogenic variants in deep intronic, regulatory, promoter regions, and epigenetic/imprinting disorders.|
|**Structural Variants**|Possesses limited sensitivity for detecting large structural variations, translocations, inversions, and triplet repeat expansions compared to whole genome sequencing or chromosomal microarray.|
|**Variant Of Uncertain Significance**|Identifies massive amounts of genetic variation (frequently >30,000 VUS per individual), requiring extensive functional evidence and expert bioinformatic correlation to determine true pathogenicity.|
|**Incidental Findings**|May uncover pathogenic variants completely unrelated to the primary clinical indication, such as actionable adult-onset cancer predisposition genes.|

- Mandatory pre-test genetic counseling must address expectations regarding diagnostic yield, limitations, and specific family preferences regarding the disclosure of medically actionable incidental findings.