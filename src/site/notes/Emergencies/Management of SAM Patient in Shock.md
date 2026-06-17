---
{"dg-publish":true,"uptext":"Back to Index (🚑 Emergencies and Critical Care)","uplink":"/emergencies/emergencies-and-critical-care/","permalink":"/emergencies/management-of-sam-patient-in-shock/","dgPassFrontmatter":true}
---

## Algorithm
```mermaid
%%{init: {
  "flowchart": {
    "htmlLabels": true,
    "useMaxWidth": false
  },
  "theme": "base",
  "themeVariables": { 
    "lineWidth": "3px", 
    "lineColor": "#000000"
  } 
}}%%
graph TD
    %% Base style definitions
    classDef action fill:#FFF0F2,stroke:#990011,stroke-width:3px,color:#990011;
    classDef decision fill:#FFF5E6,stroke:#B35900,stroke-width:3px,color:#B35900;
    classDef improve fill:#EAF4F1,stroke:#196F3D,stroke-width:3px,color:#196F3D;

    A["<div style='width:700px; font-size:15px; font-weight:bold; padding:10px;'>A child with SAM with cold extremities with CRT > 3 seconds and weak & fast pulse</div>"]:::action --> B
    
    B["<div style='width:700px; text-align:left; font-size:14px; padding:12px;'><span style='font-weight:bold; color:#990011;'>Immediate Interventions:</span><br>• Give oxygen to keep SpO2 > 94%<br>• Insert an IV line (draw blood for emergency laboratory investigations)<br>• Weigh the child (or estimate the weight) to calculate the volume of fluid<br>• Give 5 ml/kg 10% Glucose IV<br>• Give IV fluid 15 ml/kg over 1 hour of either half-normal saline with 5% glucose or Ringer's lactate in 5% glucose*</div>"]:::action --> C

    C["<div style='width:700px; font-size:14px; padding:10px;'>Measure the pulse, respiratory rate, temperature and CRT at the start and every 10 min</div>"]:::action --> D
    C --> E
    C --> F

    D{"<div style='width:250px; font-size:14px;'><span style='font-weight:bold; color:#196F3D;'>Signs of improvement</span><br>(PR and RR fall)</div>"}:::improve --> G["<div style='width:500px; text-align:left; font-size:14px; padding:10px;'>Switch to oral or nasogastric rehydration with ORS, 10 ml/kg/h up to 10 hours in alternate hour with starter diet (F-75)</div>"]:::improve
    
    E{"<div style='width:300px; font-size:14px;'>If the child fails to improve after the first 15 ml/kg IV over 60 minutes</div>"}:::decision --> H
    
    F{"<div style='width:300px; font-size:14px;'>If the child deteriorates, during the IV rehydration (RR increases by 5 /min or PR by 15 beats/min)</div>"}:::decision --> I["<div style='width:250px; font-size:14px; padding:10px;'>Stop the infusion and reassess</div>"]:::decision --> H

    H["<div style='width:700px; font-size:15px; font-weight:bold; padding:10px;'>Assume: The child has septic shock</div>"]:::action --> J

    J["<div style='width:700px; text-align:left; font-size:14px; padding:12px;'><span style='font-weight:bold; color:#990011;'>Septic Shock Management:</span><br>• Add broad spectrum antibiotics<br>• Start Epinephrine infusion (0.1 to 1 mcg/kg/min). Use dopamine infusion at 10 mcg/kg/min if epinephrine not available<br>• If no response, give IV hydrocortisone if adrenal insufficiency is a possibility (1-2 mg/kg)<br>• If still poor response/prolonged or high dose of vasopressors required, consider transfer to facility with ICU settings, if available</div>"]:::action --> K

    K["<div style='width:700px; font-size:14px; padding:10px;'>As soon as child is stabilized start feeding</div>"]:::action
```

## Identification Of Shock In Severe Acute Malnutrition

- A child with Severe Acute Malnutrition (SAM) is considered to be in shock if specific clinical signs are present.
- Look for cold extremities.
- Check for a Capillary Refill Time (CRT) that is longer than 3 seconds.
- Palpate for a weak and fast pulse.

## Initial Stabilization And Resuscitation

- Provide oxygen immediately to maintain oxygen saturation (SpO2) above 94%.
- Insert an intravenous (IV) line promptly.
- Draw blood for emergency laboratory investigations at the time of IV insertion.
- Weigh the child accurately.
- Estimate the weight if the child cannot be weighed to calculate fluid volume.
- Administer 5 ml/kg of 10% Glucose IV to prevent or treat hypoglycemia.

## Intravenous Fluid Therapy Protocol

- Do not use standard rapid fluid resuscitation protocols in SAM patients.
- Administer IV fluids slowly and cautiously.

|Fluid Parameter|Recommendation|
|:--|:--|
|**Volume**|15 ml/kg.|
|**Duration**|Administer over 1 hour.|
|**Fluid Choice 1**|Half-normal saline with 5% glucose.|
|**Fluid Choice 2**|Ringer's lactate in 5% glucose.|
|**Special Condition**|If profuse diarrhoea is present (more than 10 loose watery stools in the last 24 hours), repeat 15 ml/kg of fluid over 1 hour.|

## Monitoring During Fluid Resuscitation

- Continuous monitoring is critical to prevent fluid overload.
- Record baseline parameters at the start of the infusion.
- Measure the pulse rate, respiratory rate, temperature, and CRT every 10 minutes.

## Assessment Of Response To Fluid Therapy

### Signs Of Improvement

- Improvement is indicated by a fall in pulse rate and respiratory rate.

|Action Upon Improvement|Details|
|:--|:--|
|**Switch To Oral Route**|Stop IV fluids and switch to oral or nasogastric rehydration.|
|**Rehydration Fluid**|Use Oral Rehydration Salt (ORS) solution.|
|**Volume And Rate**|Give 10 ml/kg/hour for up to 10 hours.|
|**Diet Integration**|Provide ORS in alternate hours with starter diet (F-75).|
|**Feeding**|Start feeding as soon as the child is stabilized.|

### Signs Of Deterioration

- Deterioration during IV rehydration is a critical emergency.
- It is indicated if the respiratory rate increases by 5 breaths per minute.
- It is also indicated if the pulse rate increases by 15 beats per minute.
- Stop the IV infusion immediately.
- Reassess the patient thoroughly.

### Failure To Improve

- If the child fails to improve after the first 15 ml/kg IV fluid over 60 minutes, assume the child has septic shock.

## Management Of Septic Shock In Severe Acute Malnutrition

- Initiate aggressive management for septic shock if fluid resuscitation fails.

### Antimicrobial Therapy

- Add broad-spectrum antibiotics immediately.
- Give third-generation cephalosporins.
- Use Injection Cefotaxime 150 mg/kg/day in 3 divided doses.
- Alternatively, use Injection Ceftriaxone 100 mg/kg/day in 2 divided doses.
- Combine with Injection Gentamicin 7.5 mg as a single dose.
- Do not administer the second dose of Gentamicin until the child has passed urine.
- Continue the antibiotic course for 10-14 days.

### Vasoactive Support

- Start Epinephrine infusion at a dose of 0.1 to 1 mcg/kg/min.
- Use Dopamine infusion at 10 mcg/kg/min if Epinephrine is not available.

### Additional Interventions

- Consider adrenal insufficiency if the shock is unresponsive.
- Administer IV hydrocortisone at a dose of 1-2 mg/kg if no response to vasoactive drugs is seen.
- Consider transferring the patient to a facility with Intensive Care Unit (ICU) settings.
- Transfer is indicated if there is a persistently poor response.
- Transfer is also indicated if prolonged or high doses of vasopressors are required.