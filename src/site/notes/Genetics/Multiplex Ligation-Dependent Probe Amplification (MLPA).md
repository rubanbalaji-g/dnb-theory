---
{"dg-publish":true,"uptext":"Back to Index (🧬 Genetics)","uplink":"/genetics/genetics/","permalink":"/genetics/multiplex-ligation-dependent-probe-amplification-mlpa/","dgPassFrontmatter":true}
---

## Introduction And Definition

- Multiplex ligation-dependent probe amplification (MLPA) is an advanced, high-throughput, semi-quantitative molecular cytogenetic technique.
- It is designed to detect abnormal gene copy numbers, including submicroscopic deletions and duplications.
- It can also identify specific point mutations across multiple genomic targets simultaneously.
- Unlike standard polymerase chain reaction (PCR) which amplifies the target patient DNA directly, MLPA amplifies specifically designed, hybridized probes.

## Core Principles

- The method relies on the hybridization of two adjacent target-specific probes to a single DNA strand.
- Both probes must be perfectly hybridized to directly adjacent target sequences to undergo enzymatic ligation.
- PCR amplification occurs exclusively for these ligated probes.
- The amount of amplified probe product is directly proportional to the amount of target DNA present in the patient's sample.

## Structural Design Of Probes

- Each MLPA probe consists of two separate oligonucleotides.

### Left Probe Oligonucleotide

- This section contains a universal forward primer sequence.
- It also includes a target-specific sequence.

### Right Probe Oligonucleotide

- This section contains a target-specific sequence.
- It includes a variable-length "stuffer" sequence.
- It ends with a universal reverse primer sequence.
- The stuffer sequence is crucial for multiplexing.
- It ensures that each ligated probe pair has a unique total length, allowing separation by capillary electrophoresis.

## Sequential Methodology

### DNA Denaturation

- The genomic DNA of the patient is heated to 98°C.
- This separates the double-stranded DNA into single strands to allow access for the probes.

### Hybridization

- The specific MLPA probe mix is added to the sample.
- The left and right probe oligonucleotides hybridize to their specific adjacent target sequences.
- This occurs during an overnight incubation period at 60°C.

### Ligation

- A highly specific heat-stable DNA ligase, known as **Ligase-65**, is introduced.
- It covalently links the adjacent left and right probes.
- Ligation strictly requires perfect complementarity at the probe junction.
- A single nucleotide mismatch at the ligation site prevents successful ligation.

### Amplification And Separation

- PCR amplification is performed using a single pair of universal fluorescently labeled primers.
- Because all probes utilize the same universal primers, amplification bias is minimized.
- Unligated probes are not amplified exponentially because they only possess one primer binding site.
- The amplified PCR products, or amplicons, are separated based on their unique sizes using capillary electrophoresis.

## Data Analysis And Interpretation

- Raw data peak areas are analyzed using specialized software.
- Intra-sample normalization compares each peak against reference control peaks within the same patient sample.
- Inter-sample normalization compares the normalized probe signals to those obtained from healthy reference DNA.
- The results are reported as a Dosage Quotient (DQ).
- A normal copy number of two alleles yields a DQ of approximately 1.0.
- A heterozygous deletion yields a DQ of roughly 0.5.
- A heterozygous duplication yields a DQ of around 1.5.
- A homozygous deletion yields a DQ of 0.

## Clinical Applications In Pediatrics

|Disease Category|Specific Conditions|Target Gene Or Region|
|---|---|---|
|**Neuromuscular Disorders**|Spinal muscular atrophy (SMA)|_SMN1_ and _SMN2_ copy number quantification.|
||Duchenne and Becker muscular dystrophy|_DMD_ exonic deletions and duplications.|
|**Neurodevelopmental Disorders**|Rett syndrome|_MECP2_ large deletions or duplications.|
|**Peripheral Neuropathies**|Charcot-Marie-Tooth disease type 1A and Hereditary neuropathy with liability to pressure palsies|_PMP22_ gene duplication or deletion.|
|**Imprinting Disorders**|Prader-Willi syndrome, Angelman syndrome, Beckwith-Wiedemann syndrome|Evaluated using Methylation-Specific MLPA (MS-MLPA) to assess methylation patterns and copy number.|
|**Microdeletion Syndromes**|DiGeorge syndrome, Williams syndrome|Targeted screening for classical contiguous gene deletion syndromes.|

## Advantages And Limitations

|Feature|Description|
|---|---|
|**Advantages**|High multiplexing capacity allows analysis of up to 50 to 60 distinct genomic targets in a single reaction.|
||It is highly cost-effective and provides a faster turnaround time compared to next-generation sequencing for targeted testing.|
||It offers a high resolution capable of detecting single exon deletions or duplications.|
||It requires very low genomic DNA input, functioning with as little as 20 nanograms.|
|**Limitations**|It utilizes a targeted approach, meaning it only detects copy number changes in the specific sequences targeted by the probes.|
||It cannot detect balanced chromosomal translocations or inversions.|
||It is susceptible to benign single nucleotide polymorphisms at the probe ligation site, which can falsely indicate a deletion known as allele drop-out.|
||It does not broadly detect point mutations, intronic variants, or triplet repeat expansions.|