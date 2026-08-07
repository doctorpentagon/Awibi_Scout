/**
 * Symptom-based differentials, structured as rule-in / rule-out.
 *
 * Each entry leads with the KILLERS, because the job at first contact is not to
 * name the diagnosis — it is to exclude the things that end the conversation.
 */

export default [
  {
    id: 'AS-DIFX-0001',
    type: 'differential',
    title: 'Chest Pain — What Rules In, What Rules Out',
    short: 'Chest pain',
    summary:
      'Six causes can kill within hours. Work through those first, then the common ones. The history discriminates better than any single test, and a normal early ECG and troponin exclude nothing.',
    domains: ['cardiovascular', 'emergency_medicine', 'respiratory'],
    intents: ['assess', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['chest pain', 'chest pain differential', 'acute chest pain'],
    terms: ['chest pain', 'acs', 'mi', 'aortic dissection', 'pulmonary embolism', 'pneumothorax', 'pericarditis', 'oesophageal rupture', 'troponin', 'boerhaave'],
    confirm_locally: true,
    body: {
      the_six_that_kill: {
        acute_coronary_syndrome: {
          rules_in: 'Central, heavy or crushing, radiating to jaw or left arm, lasting more than 20 minutes, with sweating, nausea or breathlessness. Dynamic ECG change. RISING troponin on serial testing.',
          rules_out: 'Nothing at first contact. A single normal ECG and a single normal troponin DO NOT exclude it — serial testing over the locally specified interval is required.',
          the_trap: 'ATYPICAL presentations are common and lethal: women, diabetics (autonomic neuropathy blunts pain), the elderly (may present only with breathlessness, confusion or a fall). "No chest pain" does not mean no infarct.',
        },
        aortic_dissection: {
          rules_in: 'ABRUPT, maximal at onset, TEARING or ripping, radiating to the BACK between the shoulder blades. Blood pressure or pulse DIFFERENCE between arms, a new aortic regurgitant murmur, focal neurology, or a widened mediastinum on chest film.',
          rules_out: 'CT angiography.',
          why_it_is_here: 'Because giving antiplatelets and anticoagulants for a presumed myocardial infarction to a patient who is actually dissecting can be fatal. Ask about the character and onset of the pain before treating.',
        },
        pulmonary_embolism: {
          rules_in: 'PLEURITIC pain, sudden breathlessness, tachycardia, hypoxia, unilateral leg swelling, risk factors (immobility, surgery, malignancy, pregnancy, oestrogen, previous VTE).',
          rules_out: 'A validated clinical probability score plus a negative D-dimer excludes it in LOW-probability patients only. In high probability, go straight to imaging — a negative D-dimer does not exclude it there.',
        },
        tension_pneumothorax: {
          rules_in: 'Sudden pleuritic pain and breathlessness, reduced expansion and air entry with hyper-resonance on the affected side, tracheal deviation AWAY, distended neck veins, hypotension.',
          rules_out: 'It is a CLINICAL diagnosis. Do NOT wait for a chest film — decompress immediately.',
        },
        oesophageal_rupture: {
          rules_in: 'Severe pain after FORCEFUL VOMITING or retching (Boerhaave), subcutaneous emphysema, and mediastinal air on imaging.',
          why_it_is_here: 'Rare, rapidly fatal, and consistently missed because the vomiting is attributed to the pain rather than recognised as its cause.',
        },
        cardiac_tamponade: {
          rules_in: 'Hypotension, raised JVP and muffled heart sounds (Beck triad), pulsus paradoxus, low-voltage ECG with electrical alternans.',
          rules_out: 'Echocardiography.',
        },
      },
      the_common_and_less_dangerous: {
        pericarditis: 'SHARP, pleuritic, WORSE LYING FLAT and BETTER SITTING FORWARD. A pericardial rub. ECG shows widespread SADDLE-SHAPED (concave) ST elevation with PR depression — as opposed to the territorial convex elevation of a STEMI.',
        musculoskeletal: 'REPRODUCIBLE ON PALPATION, worse with movement or a specific position, often a history of exertion or cough. Reproducible tenderness makes a benign cause more likely but does not exclude a serious one.',
        gastro_oesophageal_reflux: 'Burning, related to meals and to lying flat, with an acid taste. Relief with antacids is suggestive but NOT diagnostic — cardiac pain has repeatedly been relieved by antacids.',
        pneumonia_and_pleurisy: 'Pleuritic pain with fever, cough and focal chest signs.',
        herpes_zoster: 'Unilateral, DERMATOMAL, burning, with pain that may PRECEDE the rash by days. Examine the skin.',
        anxiety_and_panic: 'A diagnosis of exclusion only, and never at first contact.',
      },
      the_discriminating_questions: [
        'ONSET — abrupt and maximal instantly (dissection, pneumothorax, PE) versus building over minutes (ACS)?',
        'CHARACTER — tearing (dissection), crushing (ACS), sharp and pleuritic (PE, pneumothorax, pericarditis), burning (reflux)?',
        'RADIATION — jaw and arm (ACS), interscapular back (dissection)?',
        'What makes it BETTER OR WORSE — sitting forward (pericarditis), breathing (pleuritic), palpation (musculoskeletal), food or antacids (reflux)?',
        'ASSOCIATED features — sweating and vomiting (ACS), breathlessness and haemoptysis (PE), syncope (dissection, PE, tamponade)?',
      ],
      the_minimum_workup: 'ECG within 10 minutes of arrival, observations including oxygen saturation and blood pressure IN BOTH ARMS, chest radiograph, troponin with serial repeat per protocol, and a clinical probability assessment for PE.',
    },
    warnings: [
      'A single normal ECG and troponin do not exclude acute coronary syndrome. Serial testing is required.',
      'Ask about tearing pain radiating to the back and check blood pressure in both arms BEFORE giving antiplatelets or anticoagulants — antithrombotics in aortic dissection can be fatal.',
      'Tension pneumothorax is a clinical diagnosis. Decompress before imaging.',
      'Diabetics, women and the elderly frequently present without typical chest pain.',
      'Relief with antacids does not exclude cardiac pain.',
    ],
    limitations: ['Troponin assays, thresholds and serial intervals are assay- and protocol-specific.'],
    cards: [
      { q: 'Name the six causes of chest pain that kill within hours.', a: 'ACS, aortic dissection, pulmonary embolism, tension pneumothorax, oesophageal rupture, cardiac tamponade.' },
      { q: 'Which feature most suggests dissection?', a: 'Abrupt, maximal-at-onset tearing pain radiating to the interscapular back, with a blood pressure difference between arms.' },
      { q: 'How does pericarditis ST elevation differ from STEMI?', a: 'Pericarditis: widespread concave saddle-shaped elevation with PR depression. STEMI: territorial convex elevation with reciprocal depression.' },
      { q: 'Does a normal troponin exclude ACS?', a: 'No. Serial testing over the locally specified interval is required.' },
      { q: 'Chest pain after forceful vomiting?', a: 'Consider oesophageal rupture — Boerhaave syndrome. Rare and rapidly fatal.' },
    ],
    checks: ['ECG within 10 minutes', 'Blood pressure both arms', 'Serial troponin planned', 'PE probability scored', 'Skin examined for zoster', 'Dissection considered before antithrombotics'],
  },

  {
    id: 'AS-DIFX-0002',
    type: 'differential',
    title: 'Breathlessness — Rule In, Rule Out',
    short: 'Breathlessness',
    summary:
      'Sort by speed of onset first — seconds, hours, or weeks. That single question narrows the differential more than any investigation, and it is often not asked.',
    domains: ['respiratory', 'cardiovascular', 'emergency_medicine'],
    intents: ['assess', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['breathlessness', 'dyspnoea', 'dyspnea', 'shortness of breath', 'sob'],
    terms: ['breathlessness', 'dyspnoea', 'orthopnoea', 'pnd', 'wheeze', 'stridor', 'bnp', 'pulmonary oedema', 'anaphylaxis', 'silent chest'],
    confirm_locally: true,
    body: {
      sort_by_onset: {
        seconds_to_minutes: 'Pneumothorax, pulmonary embolism, ANAPHYLAXIS, inhaled foreign body, acute pulmonary oedema, arrhythmia.',
        hours_to_days: 'Asthma or COPD exacerbation, pneumonia, heart failure, pleural effusion, metabolic acidosis (breathlessness with NO lung disease — DKA, sepsis, renal failure, salicylate).',
        weeks_to_months: 'Anaemia, chronic heart failure, malignancy, interstitial lung disease, pleural effusion, neuromuscular disease, deconditioning, obesity, thyrotoxicosis.',
      },
      the_immediate_threats: {
        anaphylaxis: 'Rapid onset with URTICARIA, angioedema, wheeze or stridor, hypotension, after an exposure. INTRAMUSCULAR ADRENALINE first — before antihistamines, before steroids, before investigations. Delay in giving adrenaline is the commonest factor in anaphylaxis deaths.',
        upper_airway_obstruction: 'STRIDOR — an inspiratory noise, not a wheeze. Anaphylaxis, epiglottitis, foreign body, tumour. Do NOT examine the throat of a child with suspected epiglottitis; keep them calm and get senior airway help immediately.',
        tension_pneumothorax: 'Clinical diagnosis, immediate decompression.',
        acute_pulmonary_oedema: 'Orthopnoea, pink frothy sputum, fine bilateral crackles, raised JVP, third heart sound, gallop.',
        life_threatening_asthma: 'A SILENT CHEST, exhaustion, confusion, cyanosis, a NORMAL or RISING carbon dioxide. Each of these means the patient is peri-arrest — a quiet chest is not improvement, it is no air moving.',
      },
      cardiac_versus_respiratory: {
        favours_cardiac: 'ORTHOPNOEA and PAROXYSMAL NOCTURNAL DYSPNOEA, raised JVP, third heart sound, bilateral basal crackles, peripheral oedema, raised BNP/NT-proBNP, cardiomegaly and upper lobe venous diversion on the chest film.',
        favours_respiratory: 'Wheeze, productive cough, smoking history, focal chest signs, hyperinflation.',
        the_honest_caveat: 'Both frequently coexist, especially in older patients. BNP is most useful for RULING OUT heart failure when it is low; a raised value is less specific and rises with age, renal impairment, atrial fibrillation and pulmonary embolism.',
      },
      the_ones_that_get_missed: {
        pulmonary_embolism: 'Breathlessness with a CLEAR CHEST and a NORMAL chest radiograph. Hypoxia out of proportion to the examination findings. Always consider it when the lungs sound normal but the patient is breathless.',
        metabolic_acidosis: 'Deep sighing KUSSMAUL breathing with clear lungs. The patient is breathless because they are blowing off carbon dioxide to compensate for acid, not because of lung disease. Check glucose, ketones, lactate and a gas.',
        anaemia: 'Gradual exertional breathlessness with pallor and tachycardia. A full blood count is cheap and frequently diagnostic.',
        neuromuscular_weakness: 'Guillain-Barré, myasthenia. Breathlessness lying flat, weak cough, and a falling FORCED VITAL CAPACITY. Oxygen saturation stays normal until respiratory arrest is imminent — monitor FVC, not saturation.',
      },
      the_minimum_workup: 'Observations including saturation and respiratory rate, ECG, chest radiograph, full blood count, urea and electrolytes, and a blood gas if unwell. Add D-dimer or imaging by PE probability, and BNP where heart failure is in question.',
    },
    warnings: [
      'In anaphylaxis, give intramuscular adrenaline FIRST. Delay is the commonest contributor to death.',
      'A silent chest in asthma means no air movement, not improvement. It is a peri-arrest sign.',
      'A normal or rising carbon dioxide in acute severe asthma indicates exhaustion — call for critical care help.',
      'Do not examine the throat in suspected epiglottitis. Keep the child calm and get airway expertise.',
      'In neuromuscular weakness, monitor forced vital capacity. Oxygen saturation stays normal until arrest is imminent.',
      'Breathlessness with a clear chest and normal film: think pulmonary embolism or metabolic acidosis.',
    ],
    limitations: ['BNP thresholds are assay-specific and altered by age, renal function and obesity.'],
    cards: [
      { q: 'What is the first question in breathlessness?', a: 'How fast did it come on — seconds, hours, or weeks?' },
      { q: 'What does a silent chest in asthma mean?', a: 'No air is moving. It is a peri-arrest sign, not improvement.' },
      { q: 'Breathless with a clear chest and normal film — two causes?', a: 'Pulmonary embolism and metabolic acidosis (compensatory hyperventilation).' },
      { q: 'What do you monitor in neuromuscular respiratory weakness?', a: 'Forced vital capacity. Saturation remains normal until arrest is imminent.' },
      { q: 'Stridor versus wheeze?', a: 'Stridor is inspiratory and means upper airway obstruction. Wheeze is expiratory and means lower airway narrowing.' },
    ],
    checks: ['Onset speed established', 'Adrenaline given if anaphylaxis', 'Air entry and silent chest assessed', 'PE considered if chest clear', 'Glucose, ketones and gas if acidotic breathing', 'FVC monitored in weakness'],
  },

  {
    id: 'AS-DIFX-0003',
    type: 'differential',
    title: 'Acute Abdominal Pain — Rule In, Rule Out',
    short: 'Abdominal pain',
    summary:
      'Location narrows it, but three rules save lives: always exclude pregnancy, always consider that the cause may be outside the abdomen, and remember that the elderly and the immunosuppressed present without signs.',
    domains: ['general_surgery', 'emergency_medicine', 'gynaecology'],
    intents: ['assess', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['abdominal pain', 'acute abdomen', 'belly pain', 'abdominal pain differential'],
    terms: ['abdominal pain', 'acute abdomen', 'peritonism', 'ectopic', 'aaa', 'mesenteric ischaemia', 'appendicitis', 'cholecystitis', 'pancreatitis', 'perforation', 'obstruction'],
    confirm_locally: true,
    body: {
      three_rules_before_anything_else: [
        'PREGNANCY TEST in every woman of childbearing age with abdominal pain. No exceptions, whatever the history. A ruptured ECTOPIC kills young, previously well women, and it is missed when the test is not done.',
        'The cause may be OUTSIDE the abdomen: inferior myocardial infarction, lower lobe pneumonia, DKA, testicular torsion, and in children, tonsillitis and mesenteric adenitis. Examine the chest and the scrotum.',
        'The ELDERLY, the DIABETIC, the IMMUNOSUPPRESSED and those on STEROIDS present with minimal signs and normal inflammatory markers while having a catastrophe. A soft abdomen in these groups reassures you far less than it should.',
      ],
      by_location: {
        right_upper_quadrant: 'Biliary colic, acute cholecystitis (Murphy sign), cholangitis (Charcot triad: fever, jaundice, RUQ pain), hepatitis, liver abscess, right lower lobe pneumonia.',
        epigastric: 'Peptic ulcer, perforated ulcer, PANCREATITIS (boring pain radiating to the back, relieved by sitting forward), gastritis, and INFERIOR MYOCARDIAL INFARCTION.',
        left_upper_quadrant: 'Splenic pathology (infarct, rupture, abscess), gastric ulcer, left lower lobe pneumonia.',
        right_iliac_fossa: 'Appendicitis, mesenteric adenitis, ovarian cyst or torsion, ECTOPIC PREGNANCY, Crohn disease, ureteric colic, caecal pathology.',
        left_iliac_fossa: 'Diverticulitis, colitis, ovarian pathology, ectopic, ureteric colic, constipation.',
        suprapubic: 'Urinary retention, cystitis, pelvic inflammatory disease, ectopic, ovarian torsion.',
        loin_to_groin: 'URETERIC COLIC — but in anyone over 50 with first-episode "renal colic", exclude a leaking ABDOMINAL AORTIC ANEURYSM, which mimics it exactly and is the classic fatal misdiagnosis.',
        diffuse: 'Perforation with peritonitis, obstruction, MESENTERIC ISCHAEMIA, DKA, gastroenteritis, sickle crisis.',
      },
      the_time_critical_ones: {
        ruptured_aaa: 'Over 50, sudden back or flank pain, hypotension, a pulsatile expansile mass. Do not send an unstable patient to the CT scanner — call vascular surgery immediately.',
        ruptured_ectopic: 'Amenorrhoea, abdominal pain, shoulder-tip pain from diaphragmatic irritation, and shock. Positive pregnancy test.',
        mesenteric_ischaemia:
          'PAIN OUT OF PROPORTION to a soft abdomen and unremarkable examination, in an older patient, often with atrial fibrillation or vascular disease, plus a metabolic acidosis with a raised lactate. Signs appear only when bowel is already dead. This is the abdominal equivalent of necrotising fasciitis — the discrepancy between severe pain and benign findings IS the diagnosis.',
        perforation: 'Sudden severe pain, a rigid board-like abdomen, absent bowel sounds, free air under the diaphragm on an ERECT film — remembering that absence of free air does not exclude it.',
        obstruction: 'Colicky pain, vomiting, distension, absolute constipation. Check for HERNIAE at every orifice — an incarcerated hernia is a commonly missed cause.',
        testicular_torsion: 'Sudden severe testicular pain, sometimes felt in the ABDOMEN. Always examine the scrotum in a boy or young man with abdominal pain. Time-critical.',
      },
      examination_essentials: [
        'Observations first — tachycardia and hypotension outrank any abdominal sign.',
        'Inspect for distension, scars and visible peristalsis.',
        'Palpate gently, away from the pain first, watching the face rather than the hand.',
        'Look for PERITONISM: guarding, rebound, percussion tenderness. Percussion tenderness is kinder and more reliable than rebound.',
        'HERNIAL ORIFICES — every one, every time.',
        'External genitalia in males.',
        'Consider rectal and vaginal examination where indicated, with a chaperone.',
      ],
      the_minimum_workup: 'Pregnancy test, full blood count, urea and electrolytes, liver function, amylase or lipase, CRP, glucose, group and save, urine dipstick, ECG, and an erect chest film if perforation is possible. Lactate and a gas if unwell. Imaging as directed by the clinical picture.',
    },
    warnings: [
      'Do a pregnancy test in every woman of childbearing age with abdominal pain, regardless of the history given.',
      'First-episode "renal colic" over 50 is a leaking abdominal aortic aneurysm until excluded.',
      'Pain out of proportion to a soft abdomen in an older patient is mesenteric ischaemia until proven otherwise.',
      'Examine the scrotum in every male with abdominal pain — torsion is time-critical.',
      'The elderly, diabetic, immunosuppressed and steroid-treated present with minimal signs. A soft abdomen does not reassure.',
      'Always examine the hernial orifices in suspected obstruction.',
    ],
    limitations: ['Amylase falls with time from onset and may be normal in late-presenting pancreatitis; lipase is more sensitive.'],
    cards: [
      { q: 'What test must every woman of childbearing age with abdominal pain have?', a: 'A pregnancy test. No exceptions.' },
      { q: 'First-episode renal colic in a 68-year-old?', a: 'Leaking abdominal aortic aneurysm until excluded.' },
      { q: 'Severe pain with a soft abdomen in an older patient with AF?', a: 'Mesenteric ischaemia. Signs appear only when the bowel is already dead.' },
      { q: 'Name three extra-abdominal causes of abdominal pain.', a: 'Inferior MI, lower lobe pneumonia, DKA. Also testicular torsion and, in children, tonsillitis.' },
      { q: 'What is Charcot triad?', a: 'Fever, jaundice and right upper quadrant pain — ascending cholangitis.' },
    ],
    checks: ['Pregnancy test done', 'Hernial orifices examined', 'Scrotum examined in males', 'Chest examined and ECG done', 'Peritonism assessed by percussion', 'Lactate checked if pain out of proportion'],
  },

  {
    id: 'AS-DIFX-0004',
    type: 'differential',
    title: 'Headache, Fever and Jaundice — Three Presentations, Rule In and Rule Out',
    short: 'Headache, fever, jaundice',
    summary:
      'Three common presentations grouped by the same discipline: name the dangerous causes, state what rules each in, and state what actually excludes it.',
    domains: ['neurology', 'infectious_disease', 'hepatology'],
    intents: ['assess', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['headache', 'fever', 'pyrexia', 'jaundice', 'headache differential', 'fever differential'],
    terms: ['headache', 'thunderclap', 'subarachnoid', 'temporal arteritis', 'fever', 'sepsis', 'jaundice', 'bilirubin', 'prehepatic', 'cholestatic', 'pyrexia of unknown origin'],
    confirm_locally: true,
    body: {
      headache: {
        the_red_flags: [
          'THUNDERCLAP — maximal within seconds to a minute. Subarachnoid haemorrhage until excluded: CT head, and if negative and it is more than 6–12 hours since onset, lumbar puncture for XANTHOCHROMIA.',
          'Fever with neck stiffness or rash — meningitis. Antibiotics FIRST.',
          'New headache over 50 — GIANT CELL ARTERITIS. Scalp tenderness, jaw claudication, raised ESR/CRP. Start steroids IMMEDIATELY on suspicion to prevent irreversible blindness; the temporal artery biopsy can follow.',
          'Focal neurology, seizure, or altered consciousness — space-occupying lesion, stroke, venous sinus thrombosis.',
          'Papilloedema, or headache WORSE ON LYING FLAT, coughing or straining — raised intracranial pressure.',
          'Immunosuppression, HIV, or malignancy — abscess, toxoplasmosis, lymphoma, cryptococcus.',
          'Pregnancy or postpartum — pre-eclampsia, venous sinus thrombosis.',
          'Carbon monoxide — ask whether others in the household have headaches, and about heating appliances. It is repeatedly missed.',
        ],
        the_primary_headaches: {
          migraine: 'Unilateral, throbbing, hours to days, with nausea, photophobia and phonophobia, worse with movement, sometimes preceded by an aura. Relieved by lying in the dark.',
          tension_type: 'Bilateral, band-like pressure, non-throbbing, not aggravated by activity.',
          cluster: 'Strictly UNILATERAL, orbital, excruciating, lasting 15 minutes to 3 hours, with ipsilateral AUTONOMIC features — lacrimation, nasal congestion, ptosis. The patient is RESTLESS and paces, unlike migraine.',
          medication_overuse: 'Frequent analgesia producing a daily background headache. Ask about analgesic frequency in every chronic headache.',
        },
      },
      fever: {
        first_question: 'Is this SEPSIS? Look at the physiology, not the temperature. Tachycardia, tachypnoea, hypotension, altered mentation, reduced urine output, mottling, and a raised lactate. Use the local sepsis screening tool and start the sepsis bundle within the hour if triggered.',
        the_categories: {
          infection: 'By system: respiratory, urinary, skin and soft tissue, abdominal, CNS, line-related, bone and joint, endocarditis.',
          in_the_returned_traveller:
            'MALARIA until proven otherwise — a blood film or rapid test in ANY febrile patient with relevant exposure, repeated if negative and suspicion persists. Also typhoid, dengue, and the viral haemorrhagic fevers, which require isolation and specialist notification.',
          non_infective: 'Malignancy (lymphoma, renal cell, leukaemia), connective tissue disease, vasculitis, DRUG FEVER, venous thromboembolism, thyroid storm, and transfusion reaction.',
        },
        the_ones_that_are_missed: [
          'ENDOCARDITIS — fever with a new murmur, or fever with no source. Take THREE sets of blood cultures from separate sites before antibiotics.',
          'NEUTROPENIC SEPSIS — any fever after recent chemotherapy. Antibiotics within one hour.',
          'The ASPLENIC patient — overwhelming sepsis within hours.',
          'DRUG FEVER — review the chart; it resolves on stopping the drug.',
          'Deep collections: subphrenic, pelvic, dental, prostatic.',
        ],
      },
      jaundice: {
        the_three_way_split: {
          pre_hepatic: 'HAEMOLYSIS or Gilbert syndrome. UNCONJUGATED bilirubin. Urine is NORMAL colour (unconjugated bilirubin is not water-soluble and does not appear in urine), stools normal. Anaemia, high LDH, high reticulocytes, low haptoglobin.',
          hepatic: 'Hepatocellular injury. ALT and AST markedly raised. Viral hepatitis, drugs (paracetamol above all), alcohol, autoimmune, ischaemia.',
          post_hepatic_cholestatic: 'Obstruction. ALP and GGT markedly raised, CONJUGATED bilirubin. DARK URINE and PALE STOOLS, with itch. Gallstones, pancreatic head tumour, stricture.',
        },
        the_two_questions_that_do_most_of_the_work: 'What colour is the urine, and what colour are the stools? Dark urine with pale stools means obstruction. Normal urine and stools with anaemia means haemolysis.',
        the_emergencies: {
          ascending_cholangitis: 'CHARCOT TRIAD — fever, jaundice, right upper quadrant pain. Add hypotension and confusion for REYNOLDS PENTAD. Needs antibiotics and urgent BILIARY DRAINAGE; antibiotics alone do not treat an obstructed infected system.',
          acute_liver_failure: 'Jaundice with COAGULOPATHY and ENCEPHALOPATHY. Check the INR — it is the key prognostic marker. Consider paracetamol at every presentation and take a staggered-overdose history. Discuss early with a liver unit.',
          neonatal: 'Jaundice in the first 24 hours, or prolonged beyond 14 days, is pathological — see the paediatric entry.',
        },
        do_not_forget: 'Not all yellow is jaundice. Carotenaemia spares the SCLERAE. Check the sclerae in natural light — and remember that scleral icterus is where jaundice is detected earliest and most reliably across all skin tones.',
      },
    },
    warnings: [
      'Thunderclap headache is subarachnoid haemorrhage until excluded. A normal CT after 6 hours does not exclude it — lumbar puncture for xanthochromia is required.',
      'New headache over 50 with scalp tenderness or jaw claudication: start steroids immediately for giant cell arteritis. Do not wait for biopsy — blindness is irreversible.',
      'Any febrile patient with relevant travel exposure needs a malaria test, repeated if negative and suspicion persists.',
      'Fever with no source and a new murmur is endocarditis — three sets of blood cultures before antibiotics.',
      'Ascending cholangitis needs biliary drainage, not antibiotics alone.',
      'In acute liver failure, INR is the key prognostic marker. Discuss with a liver unit early.',
      'Ask about carbon monoxide in headache — especially if others in the household are affected.',
    ],
    limitations: ['Sepsis screening tools and thresholds are locally specified.'],
    cards: [
      { q: 'Thunderclap headache — what excludes subarachnoid haemorrhage?', a: 'CT head, and if negative beyond 6–12 hours, lumbar puncture for xanthochromia.' },
      { q: 'New headache over 50 with jaw claudication?', a: 'Giant cell arteritis. Start steroids immediately; biopsy can follow.' },
      { q: 'Which headache makes the patient restless rather than still?', a: 'Cluster headache. Migraine sufferers lie still in the dark.' },
      { q: 'Dark urine with pale stools means what?', a: 'Cholestatic (post-hepatic) jaundice — conjugated bilirubin with obstruction.' },
      { q: 'Why is urine normal in haemolytic jaundice?', a: 'Unconjugated bilirubin is not water-soluble and is not excreted in urine.' },
      { q: 'What is Reynolds pentad?', a: 'Charcot triad (fever, jaundice, RUQ pain) plus hypotension and confusion — suppurative cholangitis.' },
    ],
    checks: ['Red flags screened in headache', 'ESR/CRP and steroids if GCA suspected', 'Malaria test if travel exposure', 'Blood cultures before antibiotics', 'Urine and stool colour asked', 'INR checked in jaundice', 'Sclerae examined in natural light'],
  },
];
