---
{"dg-publish":true,"uplink":"/genetics/genetics/","uptext":"Back to Index (🧬 Genetics)","permalink":"/genetics/next-generation-sequencing-ngs/","dgPassFrontmatter":true}
---

## Definition And Core Principles

- Next-Generation Sequencing (NGS) is a high-throughput, massively parallel sequencing technology that determines the nucleotide order in DNA or RNA fragments simultaneously.
- Generates millions to billions of sequence reads in a single run, serving as a rapid and cost-effective alternative to traditional Sanger sequencing.
- Identifies sequence-level alterations, including single nucleotide variants (SNVs), small insertions, and deletions (indels) that disrupt normal gene expression and protein function.

## Types Of Next-Generation Sequencing Modalities

| Sequencing Modality                  | Features And Scope                                                                                                                                                                                              | Clinical Indications                                                                                                                                                                     |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Targeted Gene Panels**             | Sequences a predefined subset of genes (50–500 genes) known to be associated with specific overlapping clinical phenotypes. Offers high depth of coverage (>100x) and lowers the rate of incidental findings.   | Locus heterogeneity, overlapping phenotypes, or disorders sharing a common biological pathway (e.g., epilepsy, deafness, RASopathies, muscular dystrophies).                             |
| **Whole [[Genetics/Exome Sequencing\|Exome Sequencing]] (WES)** | Targets protein-coding regions (exons), representing only 1–2% of the genome but harboring approximately 85% of disease-causing mutations. Yields a diagnosis in 25–40% of undiagnosed cases.                   | Extreme genetic heterogeneity, dual diagnoses, atypical phenotypes, unexplained [[Development/Global Developmental Delay\|global developmental delay]], and severe intellectual disability where _de novo_ mutations are common. |
| **Whole Genome Sequencing (WGS)**    | Sequences the entire genome, including both coding and non-coding (intronic or regulatory) regions. Provides improved detection of structural variations, copy number variations (CNVs), and repeat expansions. | Suspected non-coding or structural variations, critically ill neonates requiring rapid data generation, and nondiagnostic WES cases.                                                     |

## Workflow And Methodology

- **Library Preparation**: Involves fragmentation of genomic DNA into smaller segments, adapter ligation, end repair, A-tailing, and linker modification amplification.
- **Sequencing Platforms**: Employs platforms such as Illumina (sequencing-by-synthesis, short-read 150–300 bp), Ion Torrent (semiconductor detecting pH changes), or long-read platforms (PacBio, Oxford Nanopore) for structural variants and repeats.
- **Data Analysis**: Bioinformatics analysis maps and aligns raw sequenced base calls to a standard reference human genome sequence.
- **Variant Calling**: Detects SNVs, indels, CNVs, and structural variants (SVs).
- **Variant Interpretation**: Filters thousands of identified variants using population databases; variants are classified into pathogenic, likely pathogenic, variant of unknown significance (VUS), likely benign, and benign per American College of Medical Genetics and Genomics (ACMG) and Association for Molecular Pathology (AMP) guidelines.

## Indications In Pediatric Medicine

- **Undiagnosed Genetic Syndromes**: [[Development/Global Developmental Delay\|Global developmental delay]], [[Development/Autism Spectrum Disorder\|autism spectrum disorder]], and multiple congenital anomalies after negative chromosomal microarray (CMA) testing.
- **Neurometabolic And Neurodegenerative Disorders**: Rapid diagnosis of inborn errors of metabolism during neonatal metabolic crises.
- **Neuromuscular And Epileptic Encephalopathies**: Early infantile epileptic encephalopathy panels identify specific gene defects to guide precision drug therapy.
- **Hematology And Oncology**: Minimal residual disease detection, fusion genes, bone marrow failure syndromes, and cancer predisposition syndromes (e.g., _TP53_, _RB1_).
- **Neonatal Intensive Care**: Rapid WGS enables time-sensitive, life-altering management decisions in critically ill infants.

## Advantages Over Traditional Methods

- Provides simultaneous interrogation of thousands of genes, making it highly cost-efficient per gene compared to Sanger sequencing.
- Rapid turnaround times, particularly in neonatal intensive care settings (24–48 hours).
- Allows for iterative re-analysis of existing genomic data as new gene-disease associations are discovered over time.

## Limitations And Diagnostic Challenges

- **Variant Of Uncertain Significance (VUS)**: Generates a high rate of VUS, requiring complex functional evidence or family segregation studies (trio sequencing involving both parents and the proband) to determine pathogenicity.
- **Incidental Findings**: Potential discovery of pathogenic variants entirely unrelated to the primary clinical indication (e.g., adult-onset cancer predisposition), necessitating rigorous pre-test ethical genetic counseling.
- **Coverage Gaps**: Variable coverage depth in GC-rich regions, highly homologous sequences, and pseudogenes can lead to false-negative results.
- **Technical Blind Spots**: Standard short-read NGS has limited utility in detecting methylation disorders, triplet repeat expansions, and certain large structural deletions.
- **Data Burden**: Generates massive amounts of sequencing data requiring highly complex bioinformatics pipelines and data storage solutions.