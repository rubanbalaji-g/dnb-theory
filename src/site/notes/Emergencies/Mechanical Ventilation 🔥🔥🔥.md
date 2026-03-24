---
{"dg-publish":true,"uptext":"Back to Index (🚑 Emergencies and Critical Care)","uplink":"/emergencies/emergencies-and-critical-care/","permalink":"/emergencies/mechanical-ventilation/","dgPassFrontmatter":true}
---

## Mechanical Ventilation in Children: Core Concepts

- Mechanical ventilation implies artificially blowing a gas (air-oxygen mixture) into the lungs to support or replace spontaneous breathing.
- Positive pressure ventilation provides external support to overcome the work of breathing (WoB) and is the most common modality for managing hypoxemia and acute respiratory acidosis in the pediatric intensive care unit (PICU).
- The primary goal is to ensure adequate oxygenation and ventilation while minimizing Ventilator-Induced Lung Injury (VILI), Ventilator-Associated Pneumonia (VAP), and Ventilator-Induced Diaphragmatic Dysfunction (VIDD).
- The indications for initiating mechanical ventilation include severe hypoxemia (PaO2 < 60 mm Hg), acute hypoventilation/hypercapnia (PaCO2 > 50-55 mm Hg with pH < 7.25), apnea, the need to reduce the work of breathing (e.g., severe pneumonia), securing the airway for procedures or altered sensorium, decreasing systemic oxygen consumption (e.g., in shock), and controlling intracranial pressure.

## Key Ventilator Variables: 'Control' and 'Cycling'

- The working of a mechanical ventilator (and its modes) is understood through specific phase variables that define the respiratory cycle.

### Control Variable

- The control variable is the primary parameter that the ventilator manipulates to cause inspiration.
- By definition, a control variable remains constant even as the patient's ventilatory load (resistance and compliance) changes.
- **Pressure Control:** The airway pressure is held constant throughout the inspiratory phase.
- **Volume Control:** The ventilator delivers a constant, pre-set tidal volume regardless of the pressure required (up to a safety limit).
- **Flow Control:** The ventilator delivers a constant flow waveform.

### Cycle Variable (Cycling)

- Cycling refers to the phase variable used to terminate inspiration and switch the ventilator from the inspiratory phase to the expiratory phase.
- Inspiration is terminated once the specific, pre-set cycle variable is reached.
- **Time Cycling:** The most commonly used cycle variable in pediatric ventilation, where inspiration ends after a pre-set inspiratory time (Ti) has elapsed.
- **Volume Cycling:** The ventilator cycles to expiration once a pre-set tidal volume has been delivered.
- **Flow Cycling:** The ventilator cycles when the inspiratory flow falls to a certain predetermined level (typically 25% of the peak inspiratory flow); this is classically used in Pressure Support Ventilation (PSV).

## Pressures Used and Varied During Mechanical Ventilation

- Various pressures are manipulated to optimize gas exchange, maintain lung volumes, and avoid barotrauma.

|Pressure Parameter|Definition & Physiological Role|Clinical Significance & Side Effects|
|:--|:--|:--|
|**Peak Inspiratory Pressure (PIP)**|* The highest pressure that occurs during the inspiratory phase, typically at the end of inspiration. * PIP = Resistance / Compliance. * It determines the delivered tidal volume (Vt) and minute ventilation, thus affecting CO2 removal.|* Higher PIP increases Mean Airway Pressure (MAP) and improves oxygenation. * Excessive PIP causes barotrauma, pneumothorax, and triggers high-pressure alarms.|
|**Positive End-Expiratory Pressure (PEEP)**|* The positive airway pressure maintained at the end of expiration. * Normal physiological PEEP is ~3 cm H2O. * PEEP prevents the closure or collapse of recruited alveoli during expiration.|* It is the most effective parameter to increase oxygenation. * Increases functional residual capacity (FRC) and improves V/Q matching. * Excessive PEEP impedes venous return, decreases cardiac output, decreases cerebral perfusion, and causes gas trapping.|
|**Mean Airway Pressure (MAP)**|* The average pressure perceived by the airways throughout the entire respiratory cycle. * Calculated as: `k (Ti x PIP) + (Te x PEEP) / (Ti + Te)` (where k is a constant based on the waveform).|* Major determinant of oxygenation. * Used to calculate the Oxygenation Index (OI): `(MAP x FiO2 x 100) / PaO2`.|
|**Driving Pressure (ΔP)**|* The pressure difference driving gas into the lungs, calculated as PIP minus PEEP (ΔP = PIP - PEEP).|* Directly proportional to the tidal volume delivered in pressure-controlled modes. * Maintaining a low driving pressure is strongly associated with improved survival in ARDS.|
|**Auto-PEEP (Intrinsic PEEP)**|* Unintentional positive pressure remaining in the alveoli at the end of expiration due to incomplete lung emptying (gas trapping).|* Severely increases the work of breathing and causes patient-ventilator asynchrony. * May cause pneumothorax or hypotension. * Counterbalanced by adding extrinsic PEEP or increasing expiratory time (Te).|

## Modes of Mechanical Ventilation and Their Uses

- Depending on how the trigger, limit, and cycle variables are set, different modes provide varying degrees of support.

### 1. Continuous/Controlled Mandatory Ventilation (CMV)

- All breaths are mandatory, and the clinician sets a minimum continuous respiratory rate.
- **Where it is used:** Useful in patients who have no spontaneous respiratory effort, such as those with severe shock, profound coma, or under heavy sedation/neuromuscular blockade.
- **Disadvantages:** Leads to patient-ventilator asynchrony if the patient attempts to breathe, requiring heavy sedation and potentially causing respiratory muscle atrophy.

### 2. Assist/Control Ventilation (A/C)

- All spontaneous breaths that exceed the trigger sensitivity result in the delivery of a fully supported mechanical breath.
- If the patient is apneic, a control breath is provided at the set interval.
- **Where it is used:** Useful in the acute phase of illness (e.g., acute ARDS) where resting the respiratory muscles is critical while still allowing the patient to govern their own respiratory rate.
- **Disadvantages:** If the patient's spontaneous respiratory rate is very high, it can lead to severe hyperventilation, respiratory alkalosis, and auto-PEEP.

### 3. Synchronized Intermittent Mandatory Ventilation (SIMV)

- A pre-set number of mandatory breaths are delivered in synchronization with the patient's inspiratory efforts within a specific time window.
- If the patient breathes above the set rate, the extra breaths are spontaneous and unassisted (unless combined with Pressure Support).
- **Where it is used:** Highly utilized as a weaning mode or to train respiratory muscles, as it achieves good synchrony while allowing spontaneous breathing.

### 4. Pressure Support Ventilation (PSV)

- Breaths are triggered by the patient, limited by a set pressure, and cycled by flow (when inspiratory flow drops to a specific threshold, e.g., 25% of peak).
- The patient maintains control over the respiratory rate and inspiratory time.
- **Where it is used:** Used to overcome the imposed work of breathing from the endotracheal tube and ventilator circuit. Used as a standalone weaning mode or combined with SIMV to support spontaneous breaths.

### 5. Advanced / Newer Modes

- **Pressure Regulated Volume Control (PRVC):** Combines volume control (ensures fixed tidal volume) with pressure control (decelerating flow, constant PIP). The ventilator dynamically adjusts the PIP between breaths to achieve the target tidal volume using the lowest possible pressure.
- **Where PRVC is used:** Excellent for neonates, infants, and conditions with rapidly changing compliance, as it auto-weans pressure as the lungs improve.
- **Airway Pressure Release Ventilation (APRV):** A lung-protective mode that recruits lungs by allowing spontaneous breathing at a high continuous pressure (Phigh) for a prolonged duration, with very brief releases to a lower pressure (Plow) for ventilation. Used as a rescue mode in severe ARDS.
- **High-Frequency Oscillatory Ventilation (HFOV):** Uses extremely high rates (>300 breaths/min) and tidal volumes smaller than anatomical dead space, maintaining a constant mean airway pressure to keep alveoli open. Used as a rescue therapy for refractory hypoxemia/hypercapnia in ARDS and air-leak syndromes.

## Pressure Controlled (PCV) vs. Volume Controlled (VCV) Ventilation

- Conventional ventilation is fundamentally divided into controlling pressure or controlling volume.

|Feature|Pressure Controlled Ventilation (PCV)|Volume Controlled Ventilation (VCV)|
|:--|:--|:--|
|**Control Variable**|Peak Inspiratory Pressure (PIP) is fixed and constant.|Tidal Volume (Vt) is fixed and constant.|
|**Dependent Variable**|Tidal volume varies based on the patient's lung compliance and resistance.|Peak Inspiratory Pressure (PIP) varies based on the patient's lung compliance and resistance.|
|**Flow Pattern**|Decelerating flow pattern (front-end loaded).|Constant (square) flow pattern.|
|**Alveolar Pressure**|Constant.|Variable.|
|**Response to ETT Leaks**|Unaffected by large leaks; maintains pressure and compensates flow.|Grossly inadequate volume delivery if large leaks are present (expiratory Vt drops significantly).|
|**Advantages**|* Less risk of barotrauma. * Decelerating flow improves intra-pulmonary gas distribution. * More effective in treating stiff, heterogeneous, or atelectatic lungs. * Auto-weans tidal volume if compliance worsens, protecting the lung.|* Less risk of volutrauma. * Guarantees a consistent minute ventilation and stable PaCO2. * Auto-weans PIP as lung compliance improves.|
|**Disadvantages**|* Risk of volutrauma/hyperventilation if lung compliance suddenly improves. * Does not guarantee minute ventilation.|* Risk of severe barotrauma in stiff lungs if PIP is not strictly monitored. * Fixed inspiratory flow can lead to "flow starvation" and increased work of breathing if it doesn't match patient demand. * Highly sensitive to leaks around uncuffed endotracheal tubes.|

## Suitable Indications and Disease-Specific Application

- The choice between PCV and VCV, alongside specific parameter settings, is heavily influenced by the underlying pathophysiology.

### 1. Normal Lungs (e.g., Post-operative, Neuromuscular Paralysis, Shock)

- **Preferred Mode:** Volume Controlled Ventilation (VCV) is preferred.
- **Indication Logic:** Since lung mechanics (compliance and resistance) are normal, VCV safely guarantees minute ventilation and prevents atelectasis without a high risk of barotrauma.
- **Settings:** Tidal Volume: 6-8 ml/kg, PIP: 12-15 cm H2O, PEEP: 3-4 cm H2O, Rate: Age-appropriate normal.

### 2. Acute Severe Asthma (Obstructive Airway Disease)

- **Preferred Mode:** Pressure Controlled Ventilation (PCV) is preferred.
- **Indication Logic:** Asthma is characterized by severely high airway resistance and prolonged expiratory time constants. VCV with a constant flow can generate dangerously high peak pressures and cause barotrauma. PCV utilizes a decelerating flow pattern which better overcomes resistance and limits the absolute peak pressure.
- **Settings:** The primary goal is to reduce work of breathing and allow permissive hypercapnia to avoid dynamic hyperinflation (auto-PEEP).
- Tidal Volume: 5-6 ml/kg, PIP: 20-25 cm H2O, PEEP: Low (2-3 cm H2O) to match auto-PEEP and splint airways, I:E Ratio: Prolonged expiratory time (1:3 to 1:4), Rate: Low (e.g., 8-12/min in older children).

### 3. Severe Pneumonia / ARDS (Restrictive Lung Disease)

- **Preferred Mode:** Both PCV and VCV can be used, though PCV or advanced hybrid modes like PRVC are often preferred due to heterogeneous lung involvement.
- **Indication Logic:** ARDS lungs are stiff (low compliance) with widespread atelectasis and a very small "functional" lung volume (baby lung concept). PCV is advantageous because the decelerating flow pattern recruits stiff alveoli more effectively while strictly capping the peak alveolar pressures, avoiding barotrauma in the healthy lung segments.
- **Settings:** The strategy utilizes the "Open Lung Approach" or "ARDSNet" lung-protective parameters.
- Tidal Volume: Low (4-6 ml/kg) to prevent volutrauma, PIP: 20-25 cm H2O (Plateau pressure strictly < 28-30 cm H2O), PEEP: High (6-10 cm H2O or more) to recruit collapsed alveoli and prevent atelectotrauma, Rate: High normal to compensate for low tidal volume. Permissive hypoxemia (SpO2 88-92%) and hypercapnia are utilized.