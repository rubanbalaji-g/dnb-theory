---
{"dg-publish":true,"uptext":"Back to Index (🧬 Genetics)","uplink":"/genetics/genetics/","permalink":"/genetics/multiplex-ligation-dependent-probe-amplification-mlpa/","dgPassFrontmatter":true}
---

## Introduction And Definition

- Introduced by Schouten et al. in 2002.
- High-throughput, semi-quantitative molecular technique designed to detect abnormal gene copy numbers (deletions and duplications) and specific point mutations across multiple genomic targets simultaneously.
- Rapid diagnostic test capable of delivering precise clinical results within 1 to 2 days.
- Amplifies specifically designed, hybridized probes rather than amplifying the target patient DNA directly.

## Core Principles And Probe Design

- Relies on the hybridization of two adjacent target-specific probes to a single DNA strand.
- Enzymatic ligation occurs only when both probes are perfectly hybridized to directly adjacent target sequences.
- PCR amplification occurs exclusively for the ligated probes, generating an amount of amplified product directly proportional to the target DNA present in the sample.

### Structural Components Of MLPA Probes

|Probe Element|Characteristics|
|---|---|
|**Left Probe Oligonucleotide (LPO)**|Contains a universal forward primer sequence and a target-specific sequence.|
|**Right Probe Oligonucleotide (RPO)**|Contains a target-specific sequence, a variable-length stuffer sequence, and a universal reverse primer sequence.|
|**Stuffer Sequence**|Determines the unique total length of the final amplified fragment, allowing multiplexing and size-based separation via capillary electrophoresis.|

## Sequential Methodology

- **DNA Denaturation**: Patient genomic DNA (50-250 ng) is heated to 98°C to separate double-stranded DNA into single strands.
- **Hybridization**: The probe mix is added, allowing left and right probe oligonucleotides to hybridize to their specific adjacent target sequences during an overnight incubation at 60°C.
- **Ligation**: A heat-stable DNA ligase (Ligase-65) covalently links the adjacent probes. Strict perfect complementarity is required; a single nucleotide mismatch prevents ligation.
- **Amplification**: PCR is performed using a single pair of universal fluorescently labeled primers. Because all probes share universal primers, amplification bias is minimized. Unligated probes possess only one primer binding site and do not amplify exponentially.
- **Fragment Separation**: Amplified PCR products are separated by size using capillary electrophoresis, generating a sequential pattern of peaks known as an electropherogram.

## Data Analysis And Normalization

- Raw peak areas or heights undergo intra-sample normalization against internal control probes and inter-sample normalization against healthy reference DNA.

|Dosage Quotient (DQ)|Copy Number Interpretation|
|---|---|
|**~1.0**|Normal copy number (2 alleles).|
|**~0.5**|Heterozygous deletion (1 allele).|
|**~1.5**|Heterozygous duplication (3 alleles).|
|**0**|Homozygous deletion (0 alleles).|

## Clinical Applications In Pediatrics

### Neuromuscular And Neurodevelopmental Disorders

- **Spinal Muscular Atrophy (SMA)**: Gold standard first-line diagnostic test. Accurately quantifies SMN1 and SMN2 copy numbers to confirm diagnosis and predict phenotypic severity.
- **Duchenne/Becker Muscular Dystrophy (DMD/BMD)**: Detects large exonic deletions and duplications in the DMD gene, accounting for 65-75% of pathogenic variants.
- **Rett Syndrome**: Detects large deletions or duplications in the MECP2 gene.
- **[[Neuromuscular/Charcot-Marie-Tooth Disease\|Charcot-Marie-Tooth Disease]] Type 1A (CMT1A)**: Detects PMP22 gene duplication.

### Imprinting Disorders

- **Methylation-Specific MLPA (MS-MLPA)**: Utilizes probes containing restriction enzyme recognition sites sensitive to DNA methylation to simultaneously detect copy number changes and altered methylation patterns.
- Diagnostic tool for Prader-Willi Syndrome, Angelman Syndrome, Beckwith-Wiedemann Syndrome, and Silver-Russell Syndrome.

### Microdeletion And Microduplication Syndromes

- Evaluates subtelomeric rearrangements, a significant cause of idiopathic intellectual disability.
- Detects classical contiguous gene deletion syndromes like DiGeorge Syndrome (22q11.2) and Williams Syndrome (7q11.23).

## Advantages And Limitations

|Feature|Advantages|Limitations|
|---|---|---|
|**Diagnostic Scope**|High multiplexing capacity (up to 50-60 distinct genomic targets in a single tube).|Targeted approach; detects copy number changes only in specific sequences targeted by the probes.|
|**Resolution Limits**|Capable of detecting single exon deletions/duplications, exceeding the resolution of standard FISH or karyotyping.|Cannot detect balanced rearrangements (translocations, inversions), point mutations, intronic variants, or triplet repeats.|
|**Logistics**|Cost-effective, high throughput, and requires minute amounts of genomic DNA (as low as 20 ng).|Susceptible to benign Single Nucleotide Polymorphisms (SNPs) at the ligation site, which can falsely indicate a deletion (allele drop-out).|