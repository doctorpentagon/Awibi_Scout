/** Cardiovascular, respiratory and renal disease and physiology. */

export default [
  {
    id: 'AS-CVSD-0001',
    type: 'guideline',
    title: 'Heart Failure and Atrial Fibrillation — Recognition and the Decisions That Follow',
    short: 'Heart failure & AF',
    summary:
      'Heart failure is a syndrome, not a diagnosis — always ask what caused it. Atrial fibrillation raises two separate questions that must not be conflated: rate or rhythm, and anticoagulation. The second matters more.',
    domains: ['cardiovascular'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['heart failure', 'atrial fibrillation', 'af', 'hfref', 'hfpef', 'ccf', 'congestive cardiac failure'],
    terms: ['heart failure', 'hfref', 'hfpef', 'bnp', 'orthopnoea', 'pnd', 'atrial fibrillation', 'cha2ds2-vasc', 'has-bled', 'rate control', 'anticoagulation', 'ejection fraction'],
    confirm_locally: true,
    body: {
      heart_failure: {
        the_definition: 'A clinical syndrome in which the heart cannot deliver enough output for metabolic demand, or can only do so at elevated filling pressures.',
        the_two_types: {
          hfref: 'Reduced ejection fraction — a PUMP problem. Ischaemic heart disease, dilated cardiomyopathy, valve disease, arrhythmia, alcohol, chemotherapy, peripartum, myocarditis. This is the type with strong prognostic drug therapy.',
          hfpef: 'Preserved ejection fraction — a FILLING problem, from a stiff ventricle. Hypertension, age, obesity, diabetes, atrial fibrillation, and infiltration such as amyloid. Diagnosis is harder and drug options are fewer.',
        },
        symptoms_that_matter: 'Exertional breathlessness, ORTHOPNOEA (ask how many pillows, and whether that has changed), and PAROXYSMAL NOCTURNAL DYSPNOEA — waking gasping and having to sit or stand. PND is the most specific symptom in the history.',
        signs: 'Raised JVP, third heart sound, displaced apex, bibasal crackles, peripheral oedema, hepatomegaly, ascites in advanced disease.',
        bnp: 'Best used to RULE OUT — a low value makes heart failure unlikely. A raised value is less specific and rises with age, renal impairment, atrial fibrillation, pulmonary embolism and sepsis. Obesity LOWERS it, which can produce a false reassurance.',
        the_essential_next_step: 'ECHOCARDIOGRAPHY. It gives the ejection fraction, chamber sizes, valve function and wall motion — without it you have a syndrome and no diagnosis.',
        always_ask_why: 'Heart failure is the endpoint of something. Look for ischaemia, hypertension, valve disease, arrhythmia, alcohol, thyroid disease, anaemia and cardiotoxic drugs. Treating the failure without finding the cause misses reversible disease.',
        acute_decompensation: 'Sit the patient up, give oxygen if hypoxic, diuresis per protocol, and identify the PRECIPITANT — ischaemia, arrhythmia, infection, non-adherence, NSAIDs, anaemia, thyroid disease, or excess fluid or salt.',
      },
      atrial_fibrillation: {
        recognition: 'An IRREGULARLY IRREGULAR pulse with NO P WAVES and an irregular baseline on the ECG. A pulse DEFICIT (apical rate greater than radial) is characteristic.',
        find_the_cause: 'Cardiac: hypertension, ischaemia, valve disease (especially mitral), heart failure. Non-cardiac: THYROTOXICOSIS (always check thyroid function in new AF), alcohol, sepsis, pulmonary embolism, electrolyte disturbance, hypoxia, post-operative.',
        the_two_separate_questions: {
          question_one_rate_or_rhythm:
            'Rate control or rhythm control. Rate control is a reasonable default for most; rhythm control is favoured in younger patients, new-onset AF, symptomatic patients despite rate control, and in heart failure. The evidence has shifted toward earlier rhythm control in selected patients — follow current local guidance.',
          question_two_stroke_prevention:
            'THIS IS THE ONE THAT CHANGES OUTCOMES. AF causes stasis in the left atrium and thrombus formation; the resulting strokes are large and disabling. Assess stroke risk with CHA2DS2-VASc and bleeding risk with HAS-BLED.',
          the_critical_misunderstanding:
            'HAS-BLED IS NOT A REASON TO WITHHOLD ANTICOAGULATION. It identifies MODIFIABLE bleeding risks — uncontrolled hypertension, alcohol, concurrent antiplatelets or NSAIDs, labile INR — so that they can be corrected. Using a high HAS-BLED score to justify leaving a high-risk patient unanticoagulated is a well-documented error that causes preventable strokes.',
          the_other_error: 'ASPIRIN IS NOT ADEQUATE stroke prevention in atrial fibrillation. It carries bleeding risk with little protective benefit. Anticoagulation is the treatment.',
        },
        the_cardioversion_trap:
          'Cardioverting AF of uncertain or greater than 48 hours duration WITHOUT adequate anticoagulation or transoesophageal echocardiography risks embolising an existing atrial thrombus at the moment sinus rhythm returns. Follow the local anticoagulation-before-cardioversion protocol. An unstable patient is cardioverted regardless — but that decision is made knowingly.',
        valvular_af: 'AF with moderate-to-severe mitral stenosis or a mechanical valve requires WARFARIN. Direct oral anticoagulants are NOT licensed and are inferior in this group.',
      },
    },
    warnings: [
      'HAS-BLED is not a reason to withhold anticoagulation. It identifies modifiable bleeding risks to correct.',
      'Aspirin is not adequate stroke prevention in atrial fibrillation.',
      'Do not cardiovert AF of uncertain duration without anticoagulation or transoesophageal echo — you may embolise an existing thrombus.',
      'In AF with mechanical valves or moderate-severe mitral stenosis, use warfarin. DOACs are not licensed and are inferior.',
      'Check thyroid function in every new atrial fibrillation.',
      'BNP is lowered by obesity and raised by age and renal impairment. Use it to rule out, not to rule in.',
      'Heart failure is a syndrome — always identify and treat the underlying cause.',
    ],
    limitations: ['Rate targets, rhythm strategy and anticoagulation thresholds follow current national guidance and change.'],
    cards: [
      { q: 'Which heart failure symptom is most specific?', a: 'Paroxysmal nocturnal dyspnoea — waking gasping and needing to sit up.' },
      { q: 'What is HAS-BLED for?', a: 'Identifying MODIFIABLE bleeding risks to correct — not a reason to withhold anticoagulation.' },
      { q: 'Is aspirin adequate for stroke prevention in AF?', a: 'No. It has bleeding risk with little protective benefit. Anticoagulation is the treatment.' },
      { q: 'Which AF patients need warfarin rather than a DOAC?', a: 'Mechanical heart valves and moderate-to-severe mitral stenosis.' },
      { q: 'What must you check in every new AF?', a: 'Thyroid function — and look for sepsis, PE, alcohol and electrolyte disturbance.' },
      { q: 'How does obesity affect BNP?', a: 'It lowers it, which can falsely reassure.' },
    ],
    checks: ['Echocardiogram arranged', 'Underlying cause sought', 'CHA2DS2-VASc calculated', 'HAS-BLED used to correct modifiable risks, not to withhold', 'Thyroid function checked in new AF', 'Anticoagulation status before any cardioversion'],
  },

  {
    id: 'AS-RESP-0001',
    type: 'guideline',
    title: 'Asthma, COPD and Pneumonia — Separating Them and the Emergencies Within Each',
    short: 'Asthma, COPD, pneumonia',
    summary:
      'Three conditions that overlap in presentation and diverge sharply in treatment. Each carries a specific sign that means the patient is about to arrest, and those are the facts worth knowing above all others.',
    domains: ['respiratory', 'emergency_medicine', 'infectious_disease'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['asthma', 'copd', 'pneumonia', 'exacerbation', 'wheeze', 'chest infection'],
    terms: ['asthma', 'copd', 'pneumonia', 'silent chest', 'peak flow', 'curb-65', 'reversibility', 'spirometry', 'type 2 respiratory failure', 'niv', 'consolidation'],
    confirm_locally: true,
    body: {
      asthma_versus_copd: {
        asthma: 'Usually younger onset, VARIABLE and REVERSIBLE airflow obstruction, diurnal variation with worse symptoms at night and early morning, atopy and eczema, clear triggers, and often no smoking history. Spirometry shows SIGNIFICANT REVERSIBILITY with a bronchodilator.',
        copd: 'Older, SMOKING (or biomass fuel exposure — a major cause in low-resource settings, particularly in women cooking indoors), persistent and largely FIXED obstruction, chronic productive cough, progressive breathlessness without much day-to-day variability.',
        the_overlap: 'Asthma-COPD overlap exists and is common. Where the picture is mixed, treat the reversible component and follow local pathways.',
        spirometry_essentials: 'Both show an OBSTRUCTIVE pattern — FEV1/FVC ratio reduced. Reversibility separates them. Restrictive disease (fibrosis, neuromuscular, chest wall, obesity) shows a reduced FVC with a NORMAL OR HIGH ratio.',
      },
      acute_asthma: {
        the_peri_arrest_signs: [
          'SILENT CHEST — no wheeze because no air is moving. This is NOT improvement.',
          'EXHAUSTION, confusion, or a reduced conscious level.',
          'A NORMAL OR RISING carbon dioxide. A tiring asthmatic should be hyperventilating; a normal CO2 means they can no longer do so.',
          'Cyanosis, bradycardia, hypotension, feeble respiratory effort.',
          'Inability to complete sentences, and a peak flow far below predicted or best.',
        ],
        management_principles: 'High-flow oxygen to target saturation, repeated or continuous inhaled bronchodilators, SYSTEMIC STEROIDS EARLY (they take hours to work, so early administration matters), and escalation per protocol. Involve critical care early in life-threatening features.',
        the_thing_that_is_forgotten: 'Every acute asthma attack requires a review of inhaler technique, adherence, trigger avoidance and a written personalised action plan before discharge. Attacks recur because these are not addressed.',
      },
      acute_copd_exacerbation: {
        the_oxygen_issue: {
          the_fact: 'A minority of COPD patients are chronic CO2 retainers in whom uncontrolled high-flow oxygen worsens hypercapnia and causes narcosis.',
          the_correct_response: 'Use a CONTROLLED oxygen target range per local protocol, typically lower than for other patients, and check a blood gas.',
          the_error_in_the_other_direction:
            'Withholding oxygen from a hypoxic dying patient because of a fear of CO2 retention. Hypoxia kills faster than hypercapnia. Give oxygen, titrate to the target range, and measure the gas — do not simply refuse it.',
        },
        type_2_respiratory_failure: 'Low oxygen WITH high CO2. If the pH is low despite maximal medical therapy, NON-INVASIVE VENTILATION is the treatment, per local criteria. A high bicarbonate indicates chronic retention and tells you this is longstanding.',
        management: 'Bronchodilators, steroids, antibiotics if there are features of infection (increased sputum volume or purulence), and controlled oxygen.',
      },
      pneumonia: {
        diagnosis: 'Fever, cough, purulent sputum, pleuritic pain and breathlessness, with FOCAL chest signs — bronchial breathing, crackles, dullness, increased vocal resonance — and consolidation on the chest film.',
        severity: 'Score it. CURB-65 (Confusion, Urea, Respiratory rate, Blood pressure, age 65) or the local equivalent determines whether the patient is managed at home, on a ward, or in critical care. Scoring changes the decision; impression does not.',
        the_atypical_presentations: 'The ELDERLY may present with CONFUSION or a fall and NO fever and no cough. In children, TACHYPNOEA is the most sensitive sign. In both, the diagnosis is missed when it is looked for only in those who present classically.',
        the_follow_up_that_is_forgotten:
          'Arrange a FOLLOW-UP CHEST RADIOGRAPH after treatment in patients at risk, and act on failure to resolve. Non-resolving consolidation may be tuberculosis, an obstructing malignancy, organising pneumonia or an unusual organism. Treating pneumonia and never looking again is how lung cancer is missed.',
        tuberculosis_note: 'In endemic settings, chronic cough over the locally specified duration with weight loss, night sweats or haemoptysis is TB until excluded. Isolate and send sputum before anything else. An upper lobe cavity is TB until proven otherwise.',
      },
    },
    warnings: [
      'A silent chest in asthma means no air movement — a peri-arrest sign, not improvement.',
      'A normal or rising CO2 in acute severe asthma indicates exhaustion. Call critical care.',
      'In COPD use a controlled oxygen target — but never withhold oxygen from a hypoxic patient. Hypoxia kills faster than hypercapnia.',
      'Score pneumonia severity formally. Clinical impression under-triages.',
      'Elderly patients with pneumonia may present with confusion or a fall and no fever.',
      'Arrange follow-up imaging after pneumonia and investigate non-resolving consolidation for tuberculosis and malignancy.',
      'Give systemic steroids early in acute asthma — they take hours to act.',
    ],
    limitations: ['Oxygen targets, NIV criteria and antibiotic choices are set by national and local guidance.'],
    cards: [
      { q: 'What does a silent chest mean in asthma?', a: 'No air is moving. It is a peri-arrest sign.' },
      { q: 'Why is a normal CO2 alarming in acute severe asthma?', a: 'The patient should be hyperventilating. A normal CO2 means they are exhausted.' },
      { q: 'Obstructive versus restrictive spirometry?', a: 'Obstructive: reduced FEV1/FVC ratio. Restrictive: reduced FVC with a normal or high ratio.' },
      { q: 'What separates asthma from COPD on spirometry?', a: 'Significant reversibility with a bronchodilator.' },
      { q: 'What must happen after treating pneumonia?', a: 'Follow-up imaging in at-risk patients, and investigation of non-resolving consolidation for TB and malignancy.' },
      { q: 'Most sensitive sign of pneumonia in a child?', a: 'Tachypnoea.' },
    ],
    checks: ['Peak flow or spirometry recorded', 'Silent chest and CO2 assessed in asthma', 'Controlled oxygen target set in COPD', 'Severity score calculated in pneumonia', 'Sputum sent and isolation if TB possible', 'Follow-up imaging arranged', 'Inhaler technique and action plan reviewed'],
  },

  {
    id: 'AS-RENL-0001',
    type: 'mechanism',
    title: 'The Nephron, Acute Kidney Injury and the Nephrotic–Nephritic Split',
    short: 'Kidney physiology & AKI',
    summary:
      'The nephron in segments, then the two questions that organise all kidney disease: is this acute or chronic, and is the problem before, in, or after the kidney? Then the two glomerular syndromes, which are opposites.',
    domains: ['renal', 'physiology'],
    intents: ['classify', 'interpret'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['nephron', 'aki', 'acute kidney injury', 'ckd', 'nephrotic', 'nephritic', 'renal failure', 'kidney'],
    terms: ['nephron', 'glomerulus', 'proximal tubule', 'loop of henle', 'countercurrent', 'aki', 'prerenal', 'atn', 'nephrotic', 'nephritic', 'proteinuria', 'haematuria', 'casts', 'fena'],
    confirm_locally: true,
    body: {
      the_nephron_segment_by_segment: {
        glomerulus: 'Filters about 180 litres a day. The barrier is fenestrated endothelium, basement membrane and podocyte foot processes. It is SIZE and CHARGE selective — which is why damage to it lets protein through.',
        proximal_convoluted_tubule:
          'The workhorse. Reabsorbs about 65–70% of filtered sodium and water, and essentially ALL glucose, amino acids and bicarbonate. Damage here causes FANCONI SYNDROME — glycosuria with normal blood glucose, aminoaciduria, phosphaturia and a type 2 renal tubular acidosis. Acetazolamide and SGLT2 inhibitors act here.',
        loop_of_henle: {
          descending: 'Permeable to WATER, not to solute. Water leaves, so the filtrate concentrates.',
          thick_ascending: 'Permeable to SOLUTE, not to water. The NKCC2 transporter pumps sodium, potassium and chloride out. This is where LOOP DIURETICS act, and why they are the most powerful.',
          the_countercurrent_multiplier:
            'The opposing permeabilities of the two limbs build a concentration gradient in the medulla, which is what allows urine to be concentrated at all. Loop diuretics abolish that gradient, which is why they cause such large diureses and why they impair concentrating ability.',
        },
        distal_convoluted_tubule: 'The NCC transporter reabsorbs sodium and chloride — where THIAZIDES act. Also the site of PTH-driven calcium reabsorption, which is why thiazides RETAIN calcium (useful in stone-formers, and a cause of hypercalcaemia).',
        collecting_duct: 'ENaC channels reabsorb sodium under ALDOSTERONE control, exchanging for potassium and hydrogen — where AMILORIDE and SPIRONOLACTONE act, and why they are potassium-SPARING. ADH inserts aquaporins here for final water reabsorption.',
      },
      the_endocrine_kidney: 'ERYTHROPOIETIN (its loss causes the anaemia of chronic kidney disease), RENIN (blood pressure), and 1-ALPHA HYDROXYLASE (activating vitamin D — its loss causes the calcium and bone disease of CKD).',
      acute_kidney_injury: {
        the_three_way_split: {
          pre_renal: 'The kidney is starved of blood. Hypovolaemia, haemorrhage, sepsis, heart failure, cirrhosis, renal artery stenosis, and DRUGS — NSAIDs, ACE inhibitors and ARBs. The commonest category.',
          intrinsic: 'The kidney itself is damaged. Acute TUBULAR necrosis (prolonged ischaemia, or toxins — aminoglycosides, contrast, myoglobin in rhabdomyolysis), acute INTERSTITIAL nephritis (drugs — with fever, rash and eosinophilia), and GLOMERULAR disease.',
          post_renal: 'Obstruction. Prostate, stones, tumour, retroperitoneal fibrosis, a blocked catheter. ALWAYS EXCLUDE IT — it is the most rapidly reversible cause, and the test is a bladder scan and an ultrasound.',
        },
        the_first_three_actions: [
          'Assess FLUID STATUS and treat it. Most AKI is pre-renal.',
          'BLADDER SCAN and ultrasound. Obstruction is reversible and missing it costs nephrons.',
          'STOP NEPHROTOXICS — NSAIDs, ACE inhibitors and ARBs, aminoglycosides, contrast — and dose-adjust everything else.',
        ],
        distinguishing_prerenal_from_atn:
          'In PRE-RENAL the tubules are intact and avidly reabsorbing sodium, so urine sodium and fractional excretion of sodium are LOW and urine is CONCENTRATED. In ATN the tubules are damaged and cannot reabsorb, so urine sodium and FENa are HIGH and the urine is dilute with MUDDY BROWN GRANULAR CASTS. FENa is unreliable if diuretics have been given.',
        indications_for_urgent_dialysis: 'Refractory hyperkalaemia, refractory acidosis, refractory fluid overload with pulmonary oedema, uraemic complications (pericarditis, encephalopathy), and certain poisonings. Remember AEIOU.',
      },
      nephrotic_versus_nephritic: {
        the_principle: 'NephrOtic is a PODOCYTE/barrier problem — protein leaks. NephrItic is an INFLAMMATORY problem — blood and cells leak, and filtration falls.',
        nephrotic_syndrome: {
          triad: 'Heavy PROTEINURIA, HYPOALBUMINAEMIA and OEDEMA, with hyperlipidaemia.',
          urine: 'Frothy. Bland sediment — no casts of significance.',
          causes: 'Minimal change disease (the commonest in children, and steroid-responsive), focal segmental glomerulosclerosis, membranous nephropathy, and secondary causes — DIABETES (the commonest cause overall), amyloid, lupus, HIV, hepatitis B and C.',
          the_complications_that_get_missed: [
            'THROMBOSIS — urinary loss of antithrombin III and other regulators creates a hypercoagulable state. Renal vein thrombosis and pulmonary embolism are real risks.',
            'INFECTION — loss of immunoglobulin in the urine, with particular susceptibility to encapsulated organisms and spontaneous bacterial peritonitis.',
            'Hyperlipidaemia and vitamin D deficiency from urinary loss of binding proteins.',
          ],
        },
        nephritic_syndrome: {
          features: 'HAEMATURIA (classically COLA-COLOURED), RED CELL CASTS (which prove a glomerular source), HYPERTENSION, OLIGURIA, and a modest proteinuria — less than nephrotic range.',
          causes: 'Post-infectious (classically 1–3 weeks AFTER a streptococcal throat or skin infection), IgA nephropathy (haematuria DURING or 1–2 days after an upper respiratory infection — the timing distinguishes it), lupus nephritis, ANCA vasculitis, anti-GBM disease.',
          the_timing_discriminator: 'IgA nephropathy: haematuria WITH the infection. Post-streptococcal: haematuria 1–3 WEEKS AFTER it. This one question separates the two at the bedside.',
          the_emergency: 'RAPIDLY PROGRESSIVE glomerulonephritis — renal function falling over days to weeks with crescents on biopsy. It destroys kidneys permanently within weeks. Any nephritic picture with rapidly rising creatinine needs same-day nephrology discussion.',
        },
        the_overlap: 'Some diseases produce both pictures. Lupus nephritis is the classic chameleon.',
      },
    },
    warnings: [
      'Always exclude obstruction in acute kidney injury with a bladder scan and ultrasound — it is the most reversible cause.',
      'Stop NSAIDs, ACE inhibitors and ARBs in AKI, and check for the triple whammy combination.',
      'Nephrotic syndrome carries a real thrombotic risk from urinary loss of antithrombin III. Consider it in any nephrotic patient with new breathlessness or flank pain.',
      'Rapidly progressive glomerulonephritis destroys kidneys within weeks. Any nephritic picture with rapidly rising creatinine needs same-day nephrology discussion.',
      'FENa is unreliable after diuretics have been given.',
      'Red cell casts prove a glomerular source of haematuria.',
    ],
    limitations: ['AKI staging criteria and dialysis thresholds are protocol-specific.'],
    cards: [
      { q: 'Where do loop diuretics act and why are they the most potent?', a: 'The thick ascending limb, on NKCC2 — it reabsorbs a large sodium load and they also abolish the medullary gradient.' },
      { q: 'Why do thiazides retain calcium?', a: 'They act at the distal convoluted tubule, where they increase calcium reabsorption — useful in stone formers.' },
      { q: 'What causes Fanconi syndrome and what does it look like?', a: 'Proximal tubule damage — glycosuria with normal blood glucose, aminoaciduria, phosphaturia and a type 2 RTA.' },
      { q: 'Pre-renal versus ATN on urine indices?', a: 'Pre-renal: low urine sodium and FENa, concentrated urine. ATN: high urine sodium and FENa, muddy brown casts.' },
      { q: 'Nephrotic versus nephritic in one line?', a: 'Nephrotic is a barrier problem — protein leaks. Nephritic is inflammation — blood, casts, hypertension and falling filtration.' },
      { q: 'IgA nephropathy versus post-streptococcal — how do you tell?', a: 'Timing. IgA: haematuria with the infection. Post-streptococcal: 1–3 weeks after.' },
      { q: 'Why are nephrotic patients prothrombotic?', a: 'They lose antithrombin III and other regulators in the urine.' },
    ],
    checks: ['Fluid status assessed', 'Bladder scan and renal ultrasound done', 'Nephrotoxic drugs stopped', 'Urine dipstick and microscopy for casts', 'Urine protein quantified', 'Nephrology contacted if rapidly progressive'],
  },
];
