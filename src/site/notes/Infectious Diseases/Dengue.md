---
{"dg-publish":true,"permalink":"/infectious-diseases/dengue/","noteIcon":""}
---

## Pathophysiology of Dengue
<!-- htmlmin:ignore -->
```mermaid
graph TD
    A[Infected Aedes Mosquito Bite] --> B{DENV Infection};
    B --> C[Primary Infection];
    B --> D[Secondary Infection<br>Different Serotype];

    C --> E[Asymptomatic or<br>Dengue Fever DF];

    D --> F[Antibody-Dependent Enhancement ADE];
    F --> G[Increased Viral Entry into Monocytes/Macrophages];
    G --> H[Increased Viral Replication & High Viral Load];

    H --> I(Cytokine Storm);
    H --> J(Complement Activation);

    I --> K[Increased Vascular Permeability];
    J --> K;

    K --> L[Plasma Leakage];
    H --> M[Thrombocytopenia<br>Platelet Depletion];

    L & M --> N[Dengue Hemorrhagic Fever DHF];
    N --> O[Dengue Shock Syndrome DSS];

    subgraph "Host Immune Response"
        F
        I
        J
    end

    subgraph "Key Pathological Events"
        K
        L
        M
    end

    subgraph "Clinical Manifestations"
        E
        N
        O
    end

    style F fill:#f9f,stroke:#333,stroke-width:2px
    style K fill:#f9f,stroke:#333,stroke-width:2px
    style O fill:#c00,stroke:#333,stroke-width:2px,color:#fff


```
<!-- /htmlmin:ignore -->
### Antibody dependent enhancement (ADE)
- DENV taken up by dendritic cells
- DENV has 3 proteins
	- envelope E
	- precursor membrane pre-M
	- NS1
- E protein specific antibodies - neutralization of infection
- pre-M protein specific antibodies - weak neutralization, help in ADE
- NS1 specific antibodies - non-neutralizing, complement mediated lysis of cells
- Non-neutralizing antibody-virus complex - enter host cells
- virus replicated
### cytokine storm
- CD4+, CD8+ cells specific to DENV cause lysis of virus infected cells and produce cytokines like INF - γ, TNF - α, lymphotoxin, IL-2, IL12, IL6, IL10
- more vigorous with previous infections
- augmented response
### Vasculopathy
- occurs in 3rd to 7th day of life
- plasma leakage - mild to profound shock
- Anti-NS1 act as autoantibodies and cross react with platelets and non-infected endothelial cells ⟶ resulting in disturbance in capillary platelets
- can cause
	- hemoconcentration
	- pleural effusion
	- ascites
	- multi-organ dysfunction
### Coagulopathy
- multifactorial
- release of heparan sulphate and chondroitin sulphate from glycocalyx ⟶ coagulopathy
- thrombocytopenia ⟶ increases the severity of bleeding
- lab features
	- ↓ Fibrinogen
	- ↓ platelets
	- ↑ APTT
	- DIC
## Clinical features
- Fever  of 2 to 7 days or more with 
	- Headache
	- Retro-orbital pain
	- Myalgia
	- Arthralgia
	- Rash
	- Haemorrhagic Manifestations
	- Thrombocytopenia or Leucopenia
	- Warning signs and symptoms
### Febrile phase
- sudden rise in temperature ≥ 38.5° C
- associated with above clinical features in the first 2-7 days
- maculopapular or rubelliform rash in 3rd to 4th fever
- bleeding manifestations may be observed
- facial puffiness, conjunctival congestion,  pharyngeal erythema, lymphadenopathy, and hepatomegaly
### Critical phase
- after 3rd or 4th day of fever
- characterized by vasculopathy and coagulopathy
- leading to plasma leakage, excessive hemoconcentration, bleeding, eventually leading to shock and organ dysfunction
- watchout for warning signs
![](https://i.ibb.co/VcP3FZGb/pdfeditor-e-JGx-QBVUGt.png)
### Convalescent phase
- lasts 2-3 days
- return of extravasated fluid into capillaries
- develops a convalescent rash characterized by confluent erythematous eruption with sparing areas of normal skin
- pruritic rash

## Approach to dengue
<!-- htmlmin:ignore -->
```mermaid
graph TD
    A[Febrile patient <br>in endemic area] --> B{Assess for <br>Dengue};
    B --> C{History & <br>Physical Exam<br>Look for rash, <br>myalgia, headache};
    C --> D[Tourniquet Test];
    C --> E[CBC with <br>Platelet Count];

    subgraph "Initial Assessment"
        direction LR
        C
        D
        E
    end

    E --> F{Any Warning <br>Signs?};
    F -- No --> G[Group A: <br>Ambulatory Care];
    F -- Yes --> H{Group B: <br>In-patient Care};

    G --> G1[Advise adequate <br>hydration & <br>nutrition];
    G1 --> G2[Paracetamol for <br>fever <br>&lpar; Avoid NSAID &rpar;];
    G2 --> G3[Educate on <br>warning signs];
    G3 --> G4[Daily follow-up <br>until afebrile <br>for 48h];
    G4 --> F;

    H --> H1[Obtain baseline <br>Hematocrit <br>&lpar; HCT &rpar;];
    H1 --> H2[Start IV <br>fluid therapy <br>&lpar; Isotonic <br>crystalloids &rpar; ];
    H2 --> H3[Monitor vitals, <br>fluid balance, <br>HCT, <br>platelets];
    H3 --> I{Patient Improves?};
    I -- Yes --> J[Gradually reduce <br>IV fluids];
    J --> K[Discharge when <br>stable, afebrile, <br>good urine output, <br>and rising <br>platelet count];

    I -- No, develops <br>signs of <br>severe dengue --> L{Group C: <br>Severe Dengue};



    L --> M[Urgent admission <br>to HDU/ICU];
    M --> N[Manage shock <br>with crystalloid/colloid <br>resuscitation];
    N --> O[Manage severe <br>bleeding with <br>blood transfusion];
    O --> P[Manage organ <br>failure];

    style F fill:#ffdfba,stroke:#333,stroke-width:2px
    style L fill:#ffb3ba,stroke:#c00,stroke-width:2px
    style G fill:#baffc9,stroke:#333,stroke-width:1px
    style H fill:#ffdfba,stroke:#333,stroke-width:1px

```
<!-- /htmlmin:ignore -->
Dengue severity classification
<!-- htmlmin:ignore -->
```mermaid
graph TB
    subgraph "Warning Signs"
        direction TB
        WS1[Abdominal pain <br>or tenderness]
        WS2[Persistent vomiting]
        WS3[Clinical fluid <br>accumulation]
        WS4[Mucosal bleed]
        WS5[Lethargy, <br>restlessness]
        WS6[Liver <br>enlargement <br> >2 cm]
        WS7[Lab: increase <br>in HCT concurrent <br>with rapid decrease <br>in platelet count]

        %% Invisible links to force vertical stacking
        WS1 ~~~ WS2 ~~~ WS3 ~~~ WS4 ~~~ WS5 ~~~ WS6 ~~~ WS7
    end
    
    subgraph "Severe Dengue Criteria"
        direction TB
        SD1[Severe plasma <br>leakage leading <br>to shock <br>&lpar; DSS &rpar;]
        SD2[Severe bleeding]
        SD3[Severe organ <br>impairment <br>&lpar; liver, CNS, heart &rpar;]

        %% Invisible links to force vertical stacking
        SD1 ~~~ SD2 ~~~ SD3
    end


```
<!-- /htmlmin:ignore -->
### clinical classification of dengue
![](https://i.ibb.co/Z6bG2fcS/pdfeditor-IM6u5-KTx-O2.png)