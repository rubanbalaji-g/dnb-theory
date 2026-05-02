---
{"dg-publish":true,"uptext":"Back to Index (🚑 Emergencies and Critical Care)","uplink":"/emergencies/emergencies-and-critical-care/","permalink":"/emergencies/approach-to-a-child-with-road-traffic-accident-rta/","dgPassFrontmatter":true}
---

## Algorithm
```mermaid
%%{init: { "theme": "dark", "themeVariables": { "lineWidth": "3px", "lineColor": "#000000" } }}%%
graph TD

classDef start fill:#1b5e20,color:#ffffff,stroke:#66bb6a;
classDef step fill:#0d47a1,color:#ffffff,stroke:#42a5f5;
classDef decision fill:#4a148c,color:#ffffff,stroke:#ab47bc;
classDef alert fill:#b71c1c,color:#ffffff,stroke:#ef5350;

A(<b>Pediatric RTA</b><br>Rapid cABCDE Survey):::start
B1[<b>c Catastrophic Bleed</b><br>Pressure and Tourniquet]:::step
B2[<b>A Airway and C-Spine</b><br>MILS and Rigid Collar]:::step
B3[<b>B Breathing</b><br>O2 and Treat Life-Threats]:::step
B4[<b>C Circulation</b><br>Fluids Blood IV or IO]:::step
B5[<b>D and E Assessment</b><br>GCS Pupils and Warmth]:::step

A --> B1
A --> B2
A --> B3
A --> B4
A --> B5

C[<b>Trauma Adjuncts</b><br>FAST X-Rays and Labs]:::step

B1 --> C
B2 --> C
B3 --> C
B4 --> C
B5 --> C

D{<b>Stabilized</b>}:::decision

C --> D

E[<b>Unstable</b><br>Emergency Surgery]:::alert
F[<b>Secondary Survey</b><br>Head-to-Toe and AMPLE]:::step

D -->|No| E
D -->|Yes| F

G1[<b>Neurotrauma Mgmt</b><br>ICP Control and Hypertonics]:::step
G2[<b>Thoraco-Abdominal Mgmt</b><br>Conservative Care or Surgery]:::step

F --> G1
F --> G2

H[<b>Disposition</b><br>Transfer to Level 1 Trauma]:::step

G1 --> H
G2 --> H
```
## INTRODUCTION
- Pediatric trauma requires a specialized approach due to unique anatomy (larger head-to-body ratio, compliant chest wall, smaller functional residual capacity).
- Goal: Rapid identification and reversal of life-threatening injuries via the Primary Survey.

## I. PRIMARY SURVEY (cABCDE Approach)
- **C (Catastrophic Hemorrhage):** Identify and control massive external bleeding using direct pressure or tourniquets.
- **A (Airway with C-spine Protection):** 
    - Assess patency (vocalization, breath sounds). 
    - Maintain neutral position (infants) or sniffing position (older children). 
    - Manual In-Line Stabilization (MILS) for C-spine; rigid collar once sized.
- **B (Breathing & Ventilation):**
    - High-flow O2 (15L/min via NRBM).
    - Inspect for tracheal deviation, chest rise, and neck vein distension.
    - Life-threats to exclude: Tension pneumothorax (needle decompression), Open pneumothorax, Massive hemothorax, Flail chest.
- **C (Circulation & Hemorrhage Control):**
    - Assess: Heart rate (earliest sign of shock), CRT (>2 sec), pulse volume, BP (late sign).
    - Access: Two large-bore peripheral IVs; if unsuccessful <90 seconds/3 attempts, proceed to Intraosseous (IO) access.
    - Fluid Resuscitation: 20 mL/kg isotonic crystalloid bolus (repeat up to 40-60 mL/kg if needed).
    - Massive Hemorrhage Protocol: Blood products (10 mL/kg pRBCs) if non-responsive to crystalloids.
- **D (Disability):**
    - GCS (Pediatric version) or AVPU scale. 
    - Pupil size, symmetry, and reaction.
- **E (Exposure & Environment):** 
    - Full undressing for head-to-toe inspection. 
    - Prevent hypothermia (warm fluids, blankets, increased room temperature).

## II. ADJUNCTS TO PRIMARY SURVEY
- FAST Scan (Focused Assessment with Sonography for Trauma).
- Chest X-ray and Pelvic X-ray.
- ABG/VBG, Lactate, Cross-matching, Hemoglobin, Baseline Labs.

## III. SECONDARY SURVEY (Head-to-Toe Evaluation)
- Performed only after stabilization of ABCs.
- **AMPLE History:** Allergies, Medications, Past illness/Pregnancy, Last meal, Events/Environment of RTA.
- **Physical Exam:**
    - Head/Maxillofacial: Palpate for step-offs, Battle sign, Raccoon eyes (Basal skull fracture).
    - Neck/C-spine: Midline tenderness.
    - Thorax: Auscultation, palpation for crepitus.
    - Abdomen: Distension, bruising (Seatbelt sign).
    - Pelvis/Perineum: Pelvic stability, urethral meatus bleeding.
    - Musculoskeletal: Deformities, neurovascular status of limbs.
    - Back: Log-roll to inspect spine and perform PR exam (if indicated).

## IV. DEFINITIVE MANAGEMENT & DISPOSITION
- **Neurotrauma:** ICP management (Head end elevation 30°, Hypertonic saline/Mannitol).
- **Thoraco-abdominal Trauma:** Most pediatric blunt abdominal injuries (Spleen/Liver) are managed conservatively if hemodynamically stable.
- **Surgical Consultation:** Early involvement of pediatric surgery/orthopedics.
- **Transfer:** To a Level 1 Pediatric Trauma Center if local resources are exceeded.

## V. ALGORITHM SUMMARY (MANAGEMENT FLOW)
1. Pre-hospital notification/Triage.
2. Primary Survey (ABCs) + Resuscitation.
3. Stabilized? 
   - Yes: Secondary Survey -> Targeted Imaging (CT) -> Definitive Care.
   - No: Re-evaluate ABCs -> Emergency Surgery/Life-saving interventions.