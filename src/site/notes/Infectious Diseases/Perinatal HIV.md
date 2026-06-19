---
{"dg-publish":true,"uplink":"/infectious-diseases/infectious-diseases/","uptext":"Back to Index (Infectious Diseases)","permalink":"/infectious-diseases/perinatal-hiv/","dgPassFrontmatter":true}
---

## Transmission Dynamics

- Vertical transmission represents the primary route of HIV infection in pediatric populations, accounting for >90% of cases. 
- Without intervention, vertical transmission rates range from 15% to 45%.
- Transmission occurs during three distinct perinatal phases:
    - **Intrauterine (20-30%):** Occurs transplacentally, predominantly in late gestation, and is typically suggested by a positive PCR test within 48 hours of birth.
    - **Intrapartum (70-80%):** Occurs via mucosal exposure to infected maternal blood and secretions during delivery or micro-transfusions during labor, suggested by a negative PCR at birth but positive at 1-2 weeks.
    - **Postpartum (15-20%):** Occurs through breastfeeding in untreated populations, with risk directly increasing alongside the duration of breastfeeding and the practice of mixed feeding.

## Risk Factors For Vertical Transmission

|Factor Category|Specific Risk Determinants|
|---|---|
|**Viral Factors**|High maternal viral load serves as the most critical determinant; advanced maternal clinical disease and low CD4 count also significantly increase risk.|
|**Obstetric Factors**|Vaginal delivery in the presence of a high viral load, prolonged rupture of membranes exceeding 4 hours, chorioamnionitis, and preterm delivery.|
|**Infant Factors**|Breastfeeding, mixed feeding practices (combining breast milk with other liquids or solids), and the presence of oral thrush in the infant.|

## Diagnostic Evaluation In Infants

- Standard antibody tests (ELISA) remain strictly non-diagnostic in infants younger than 18 months secondary to the persistence of passively transferred maternal IgG antibodies.
- Definitive diagnosis strictly relies on virologic assays, specifically HIV DNA PCR (detecting proviral DNA) or HIV RNA PCR (detecting viral load) utilizing dried blood spots or whole blood.

### Testing Schedule And Confirmation
```mermaid
%%{init: {"themeVariables": { "lineWidth": "3px", "lineColor": "#000000" } }}%%
graph TD
    %% Custom Styling Classes for High Contrast (Orange/Brown Theme)
    classDef clinicalNode fill:#FFEADA,stroke:#D97724,stroke-width:2px,color:#7A3B08;
    classDef decisionPos fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px,color:#1B5E20;
    classDef decisionNeg fill:#FFEBEE,stroke:#C62828,stroke-width:2px,color:#B71C1C;
    classDef finalNode fill:#FFF3E0,stroke:#E65100,stroke-width:2px,color:#5D4037;

    A[Baby born to HIV infected mother] --> B[Consider NAT at birth<br>within 2 days]
    A -.->|Prophylaxis| Baseline[Start nevirapine 2 mg/kg/dose OD at birth<br>Both nevirapine and zidovudine if high-risk infant<br>Start cotrimoxazole at 4-6 weeks of age]
    
    B --> B_Pos[Positive]
    B --> B_Neg[Negative]
    
    B_Pos --> C[Start ART and repeat NAT to confirm infection]
    
    B_Neg --> D[HIV 1 DNA PCR DBS at 6 weeks]
    D --> D_Pos[Positive]
    D --> D_Neg[Negative]
    
    D_Pos --> E[Send whole blood sample for HIV-1 DNA PCR<br>Repeat HIV 1 DNA PCR]
    E --> E_Pos[Positive]
    E --> E_Neg[Negative]
    
    E_Pos --> F[Collect and send another blood sample for confirmatory HIV-1 PCR<br>Continue cotrimoxazole; start pediatric ART; continue breastfeeding till 2 years]
    
    D_Neg --> G[Continue cotrimoxazole; stop NVP<br>at 6 or 12 weeks depending upon infant's risk status]
    E_Neg --> G
    
    G --> H[Repeat HIV 1 DNA PCR DBS at 9 months<br>or earlier if child is symptomatic]
    H --> H_Pos[Positive]
    H --> H_Neg[Negative]
    
    H_Pos --> F
    
    H_Neg --> I[Continue cotrimoxazole till HIV is excluded.<br>Continue breastfeeding at least till 2 years,<br>followed by gradual stoppage over 1 month]
    
    I --> J[Establish definitive diagnosis at 18 months or 3 months after cessation of breast feeding,<br>whichever is later, by HIV antibody tests 3 rapid tests]

    %% Class Assignments
    class A,B,C,D,E,F,G,H,I,J,Baseline clinicalNode;
    class B_Pos,D_Pos,E_Pos,H_Pos decisionPos;
    class B_Neg,D_Neg,E_Neg,H_Neg decisionNeg;
    class J finalNode;
```

## Prevention Of Mother-To-Child Transmission

### Antenatal And Intrapartum Interventions

- **Maternal Antiretroviral Therapy:** 
	- All HIV-infected pregnant women must immediately initiate lifelong combination antiretroviral therapy (cART) to maintain a suppressed maternal viral load below 1,000 copies/mL. 
	- The recommended standard regimen is Tenofovir plus Lamivudine plus Dolutegravir.  
- **Mode Of Delivery:** 
	- Vaginal delivery remains safe and recommended if the mother is on effective ART with a suppressed viral load (<1,000 copies/mL). 
	- Elective Cesarean section is strictly recommended at 38 weeks for women presenting with a viral load >1,000 copies/mL or an unknown viral load.
- **Obstetric Practices:** 
	- Clinicians must avoid artificial rupture of membranes, fetal scalp monitoring, instrumental delivery, and routine episiotomy to minimize fetal exposure to maternal blood.

### Infant Antiretroviral Prophylaxis

Postnatal prophylaxis aims to prevent the establishment of infection and depends entirely on the infant's specific risk categorization.
#### Standard Risk
- Mother on adequate/regular ART
- viral load less than 1000 copies/mL from 32 weeks to delivery
#### High Risk
- Mother not on ART, on ART <4 weeks at delivery, 
- Unknown/high viral load >1000 copies/mL from 32 weeks to delivery, 
- Newly identified during pregnancy/within 6 weeks of delivery

| Infant Risk Category  | Feeding Method                | Infant Prophylaxis Regimen                                                                                                                                |
| :-------------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Standard Risk**<br> | Exclusive Breastfeeding       | Daily Nevirapine (NVP) at birth for 6 weeks                                                                                                               |
|                       | Exclusive Replacement Feeding | Daily NVP **or** twice-daily Zidovudine (AZT) at birth for 4–6 weeks                                                                                      |
| **High Risk**<br>     | Exclusive Breastfeeding       | **Two drugs:** Twice-daily AZT + once-daily NVP for the first 12 weeks.<br><br>*Note: For weeks 7–12, NVP alone can be used instead of the dual regimen.* |
|                       | Exclusive Replacement Feeding | **Two drugs:** Twice-daily AZT + once-daily NVP for 6 weeks                                                                                               |
### Dosage of  Prophylactic Drugs
| Age / Duration | Weight Category | Nevirapine (NVP) Dosing (Syrup: 10 mg/mL) | Zidovudine (AZT) Dosing (Syrup: 10 mg/mL) |
| :--- | :--- | :--- | :--- |
| **Birth to 6 weeks** | < 2000 g | 2 mg/kg/dose once daily<br>*(0.2 mL/kg once daily)* | 5 mg per dose twice daily<br>*(0.5 mL of syrup twice daily)* |
| | 2000–2449 g | 10 mg once daily<br>*(1 mL of syrup once daily)* | 10 mg per dose twice daily<br>*(1 mL of syrup twice daily)* |
| | ≥ 2500 g | 15 mg once daily<br>*(1.5 mL of syrup once daily)* | 15 mg per dose twice daily<br>*(1.5 mL of syrup twice daily)* |
| **> 6 weeks to 12 weeks** | All weights | 20 mg once daily<br>*(2.0 mL of syrup once daily)* | *Dose not established for prophylaxis*<br>Use treatment dose: 60 mg twice daily *(6 mL syrup twice daily)* |

### Infant Feeding And General Care

- **Feeding Practices:** 
	- In resource-rich settings, formula feeding is universally recommended to completely eliminate postnatal transmission. 
	- In resource-limited settings, exclusive breastfeeding is recommended for the first 6 months provided the mother remains on effective ART; mixed feeding must be strictly avoided as it drastically increases transmission risk.
> [!orange] 📝 WHO, NACO and GoI stance 
> - WHO, NACO and Government of India all advocate for the exclusive breastfeeding of the newborn till 6 months of age
> - Replacement feeding is advised _only_ if  
> 	- it meets the **AFASS** criteria: **A**cceptable, **F**easible, **A**ffordable, **S**ustainable, and **S**afe 
> 	- Mother provides explicit written consent after Informed Councelling
> - Mixed Feeding is to be avoided 
- **Cotrimoxazole Prophylaxis:** 
	- Mandatory for all HIV-exposed infants starting at 4 to 6 weeks of age to prevent life-threatening _Pneumocystis jirovecii_ pneumonia. 
	- This must continue until HIV infection is definitively excluded.
- **Immunization:** 
	- Administer BCG at birth strictly to asymptomatic HIV-exposed infants
	- It is strongly contraindicated in symptomatic HIV-infected infants due to the risk of disseminated BCG disease. 
	  Inactivated vaccines are safe and recommended.