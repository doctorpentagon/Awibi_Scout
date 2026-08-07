/** The encephalitis / encephalopathy family, and CSF interpretation. */

export default [
  {
    id: 'AS-ENCE-0001',
    type: 'definition',
    title: 'Encephalitis, Encephalopathy and Meningoencephalitis — The Difference That Changes Treatment',
    short: 'Encephalitis vs encephalopathy',
    summary:
      'Encephalitis is INFLAMMATION of the brain. Encephalopathy is DYSFUNCTION of the brain without primary inflammation. Meningoencephalitis is both meninges and brain. Fever plus confusion demands you decide which, because one needs aciclovir within the hour.',
    domains: ['neurology', 'infectious_disease', 'emergency_medicine'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['encephalitis', 'encephalopathy', 'meningoencephalitis', 'brain inflammation', 'altered mental state'],
    terms: ['encephalitis', 'encephalopathy', 'meningoencephalitis', 'hsv', 'aciclovir', 'confusion', 'delirium', 'temporal lobe', 'seizure'],
    body: {
      the_distinction: {
        meningitis: 'Inflammation of the MENINGES. Headache, fever, neck stiffness, photophobia — but CONSCIOUS LEVEL AND BRAIN FUNCTION ARE NORMAL.',
        encephalitis:
          'Inflammation of the BRAIN PARENCHYMA. Altered consciousness, personality or behaviour change, seizures, focal neurological signs. Fever is usual. The brain itself is not working.',
        meningoencephalitis: 'Both. Common in many infections; the categories overlap in practice.',
        encephalopathy:
          'Brain DYSFUNCTION without primary inflammation — metabolic, toxic, hypoxic, hypertensive or hepatic. Usually NO fever, usually no CSF pleocytosis.',
      },
      the_discriminating_question:
        'Is the brain INFLAMED or POISONED? Fever, seizures, focal signs and CSF pleocytosis point to inflammation. A metabolic derangement, drug or organ failure with a normal CSF points to encephalopathy. If in doubt, cover for both.',
      herpes_simplex_encephalitis: {
        why_it_dominates: 'It is the commonest sporadic fatal encephalitis, and it is TREATABLE — but only if aciclovir is given early. Delay converts a survivable illness into death or severe disability.',
        features: 'Fever, confusion, personality change, dysphasia, seizures — especially TEMPORAL LOBE features. Bizarre behaviour or olfactory hallucinations are classic.',
        imaging: 'MRI shows TEMPORAL LOBE changes, often asymmetrical and haemorrhagic. CT is frequently normal early.',
        csf: 'Lymphocytic pleocytosis, raised protein, normal glucose, sometimes red cells. HSV PCR is the diagnostic test — but it can be NEGATIVE in the first 24–48 hours.',
        the_rule: 'START ACICLOVIR ON SUSPICION. Do not wait for the PCR, the MRI or the lumbar puncture. A negative early PCR does not exclude it — repeat it and continue treatment until an alternative diagnosis is established.',
      },
      other_causes_of_encephalitis: [
        'Other viruses: varicella zoster, enteroviruses, measles, mumps, arboviruses, rabies, HIV seroconversion',
        'In endemic regions: cerebral malaria, Japanese encephalitis, West Nile, Lassa fever',
        'Bacterial: tuberculosis, listeria, syphilis',
        'AUTOIMMUNE encephalitis — anti-NMDA receptor encephalitis in a young person with psychiatric features, movement disorder and seizures. Often paraneoplastic (ovarian teratoma). Increasingly recognised and treatable.',
      ],
      causes_of_encephalopathy: [
        'Metabolic: hypoglycaemia, hyponatraemia, hypercalcaemia, uraemia, hepatic failure',
        'Hypoxic-ischaemic',
        'Toxic: alcohol withdrawal, drugs, carbon monoxide',
        'Hypertensive encephalopathy and PRES',
        'Wernicke encephalopathy — thiamine deficiency',
        'Sepsis-associated encephalopathy',
      ],
      the_reversible_ones_to_exclude_immediately:
        'Check GLUCOSE in every confused patient before anything else. Then sodium, calcium, oxygenation and temperature. Give thiamine if there is any suspicion of Wernicke — it is harmless and the alternative is irreversible.',
    },
    warnings: [
      'Start intravenous aciclovir on clinical suspicion of viral encephalitis. Do not wait for imaging, lumbar puncture or PCR results. Delay is the main determinant of outcome.',
      'A negative HSV PCR in the first 24–48 hours does NOT exclude herpes encephalitis. Repeat it and continue treatment.',
      'Check capillary glucose in every confused patient before any other test.',
      'Give thiamine before glucose in any patient with possible alcohol dependence or malnutrition — a glucose load can precipitate Wernicke encephalopathy.',
      'In a malaria-endemic area, cerebral malaria must be excluded in any febrile coma. Do a blood film or rapid test immediately.',
    ],
    limitations: ['CSF and imaging findings overlap considerably between causes. Treatment is often started empirically for several possibilities at once.'],
    cards: [
      { q: 'Meningitis versus encephalitis in one line?', a: 'Meningitis inflames the meninges and the brain still works. Encephalitis inflames the brain and it does not — altered consciousness, seizures, focal signs.' },
      { q: 'When do you start aciclovir?', a: 'On suspicion. Before imaging, before the LP, before the PCR.' },
      { q: 'Does a negative HSV PCR exclude herpes encephalitis?', a: 'Not in the first 24–48 hours. Repeat it and keep treating.' },
      { q: 'First test in any confused patient?', a: 'Capillary glucose.' },
      { q: 'Young person with psychiatric features, seizures and a movement disorder?', a: 'Consider anti-NMDA receptor autoimmune encephalitis, and look for an ovarian teratoma.' },
    ],
    checks: [
      'Capillary glucose checked',
      'Aciclovir started on suspicion',
      'Blood cultures taken',
      'Malaria film or rapid test in endemic area',
      'Sodium, calcium, renal and liver function checked',
      'Thiamine given if any risk of Wernicke',
      'Imaging before LP if focal signs or reduced consciousness',
      'Senior and infection specialist informed',
    ],
  },

  {
    id: 'AS-ENCE-0002',
    type: 'pattern',
    title: 'Hepatic Encephalopathy — Grading and the Precipitant You Must Find',
    short: 'Hepatic encephalopathy',
    summary:
      'Brain dysfunction from liver failure. It almost never occurs spontaneously — there is nearly always a PRECIPITANT, and finding it matters more than the ammonia level.',
    domains: ['hepatology', 'neurology', 'critical_care'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['hepatic encephalopathy', 'liver encephalopathy', 'portosystemic encephalopathy', 'he'],
    terms: ['hepatic encephalopathy', 'ammonia', 'asterixis', 'lactulose', 'rifaximin', 'cirrhosis', 'west haven', 'flapping tremor'],
    body: {
      mechanism:
        'A failing liver cannot clear nitrogenous waste, and portosystemic shunting lets gut-derived toxins bypass it. Ammonia crosses into the brain, is taken up by astrocytes and converted to glutamine, which draws water in and causes astrocyte swelling and cerebral oedema. Inflammation and altered neurotransmission contribute.',
      west_haven_grading: {
        grade_1: 'Mild confusion, altered sleep pattern, shortened attention span, euphoria or anxiety. Easily missed.',
        grade_2: 'Lethargy, disorientation to time, obvious personality change, inappropriate behaviour. ASTERIXIS present.',
        grade_3: 'Somnolent but rousable, gross disorientation, confusion, bizarre behaviour.',
        grade_4: 'COMA, unresponsive to pain.',
        covert: 'Minimal or covert encephalopathy affects driving and work performance before it is clinically obvious, and requires psychometric testing to detect.',
      },
      asterixis: {
        what: 'A "flapping tremor" — with arms outstretched and wrists dorsiflexed, the hands drop and jerk back. It is a NEGATIVE myoclonus: a brief lapse in postural muscle tone, not a true tremor.',
        note: 'It is NOT specific to liver disease. It also occurs in CO2 retention, uraemia and severe heart failure.',
      },
      the_precipitants: {
        message: 'Find and treat the precipitant. Lactulose alone without addressing the cause fails.',
        list: [
          'INFECTION — especially spontaneous bacterial peritonitis. Do a diagnostic ascitic tap in any patient with ascites and encephalopathy.',
          'GASTROINTESTINAL BLEEDING — blood is a huge protein load to the gut',
          'CONSTIPATION',
          'Electrolyte disturbance — hypokalaemia and hyponatraemia, often from over-diuresis',
          'Dehydration and renal impairment',
          'Sedatives, opioids and benzodiazepines',
          'Excess dietary protein (a much smaller factor than once believed)',
          'Portosystemic shunt, including TIPS',
          'Hepatocellular carcinoma or progression of liver disease',
        ],
      },
      ammonia_caveat:
        'Serum ammonia correlates POORLY with grade and should not be used to diagnose, grade or monitor hepatic encephalopathy in a patient with known liver disease. A normal ammonia does not exclude it; a high one does not prove it. Samples are also easily falsely raised by tourniquet use and delay.',
      management: [
        'Treat the precipitant — this is the main intervention.',
        'Lactulose to produce two to three soft stools daily; it acidifies the colon and traps ammonia.',
        'Rifaximin as an add-on to reduce recurrence where available.',
        'Avoid sedatives. Do NOT protein-restrict — malnutrition worsens outcomes.',
        'Airway protection at grade 3–4.',
      ],
    },
    warnings: [
      'Do not use the ammonia level to diagnose or monitor hepatic encephalopathy in known liver disease. Treat the patient.',
      'Do NOT restrict protein. Older teaching recommended it; malnutrition worsens outcome and modern guidance is adequate protein.',
      'Always look for spontaneous bacterial peritonitis. Perform a diagnostic ascitic tap in any cirrhotic patient with ascites who deteriorates.',
      'Avoid benzodiazepines and opioids — they precipitate and deepen encephalopathy.',
      'Grade 3 or 4 needs airway assessment and critical care involvement.',
    ],
    limitations: ['West Haven grading has poor inter-observer reliability at the milder grades.'],
    cards: [
      { q: 'What is asterixis and is it specific?', a: 'A negative myoclonus — a brief loss of postural tone causing a flap. Not specific: also CO2 retention, uraemia, heart failure.' },
      { q: 'Should ammonia guide management?', a: 'No. It correlates poorly with grade in known liver disease. Find the precipitant instead.' },
      { q: 'Name five precipitants.', a: 'Infection (especially SBP), GI bleeding, constipation, electrolyte disturbance, sedatives.' },
      { q: 'Should you restrict protein?', a: 'No. That is outdated. Malnutrition worsens outcome.' },
      { q: 'What is the lactulose target?', a: 'Two to three soft stools per day.' },
    ],
    checks: [
      'Grade documented (West Haven)',
      'Asterixis tested',
      'Diagnostic ascitic tap done if ascites present',
      'Septic screen and cultures sent',
      'Electrolytes and renal function checked',
      'GI bleeding assessed',
      'Sedatives stopped',
      'Airway assessed if grade 3 or 4',
    ],
  },

  {
    id: 'AS-ENCE-0003',
    type: 'emergency',
    title: 'Hypertensive Encephalopathy and PRES',
    short: 'Hypertensive encephalopathy',
    summary:
      'Brain dysfunction caused by blood pressure exceeding the limit of cerebral autoregulation. It is reversible if treated correctly — and made permanent by lowering the pressure too fast.',
    domains: ['neurology', 'cardiovascular', 'emergency_medicine'],
    intents: ['identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['hypertensive encephalopathy', 'pres', 'posterior reversible encephalopathy syndrome', 'malignant hypertension'],
    terms: ['hypertensive encephalopathy', 'pres', 'autoregulation', 'papilloedema', 'eclampsia', 'occipital', 'cortical blindness', 'malignant hypertension'],
    body: {
      mechanism:
        'Cerebral blood flow is normally held constant across a range of pressures by autoregulation. Above the upper limit, autoregulation BREAKS THROUGH: vessels are forced open, the blood-brain barrier leaks, and vasogenic OEDEMA develops. The posterior circulation is most affected because it has less sympathetic innervation to protect it — which is why the occipital lobes suffer first and visual symptoms dominate.',
      features: [
        'Headache, nausea and vomiting',
        'Confusion, agitation, reduced consciousness',
        'VISUAL disturbance — blurring, field loss, or cortical blindness',
        'Seizures — often the presenting event',
        'PAPILLOEDEMA and retinal haemorrhages on fundoscopy',
        'Severely raised blood pressure — though the ABSOLUTE value matters less than the RATE of rise',
      ],
      pres: {
        what: 'Posterior Reversible Encephalopathy Syndrome — the radiological counterpart. MRI shows symmetrical vasogenic oedema in the parieto-occipital white matter, bright on T2 and FLAIR.',
        note: 'Neither "posterior" nor "reversible" is guaranteed: it can involve other regions, and if untreated it can infarct or haemorrhage and become permanent.',
        other_causes: 'PRES is not only hypertensive. It also occurs with eclampsia, ciclosporin and tacrolimus, cytotoxic chemotherapy, renal failure, sepsis and autoimmune disease — sometimes with only modestly raised pressure.',
      },
      the_critical_treatment_rule: {
        principle:
          'A chronically hypertensive brain has shifted its autoregulatory curve UPWARD. It now depends on a high pressure to perfuse itself. Dropping the pressure rapidly to "normal" causes cerebral ISCHAEMIA and infarction — turning a reversible condition into a stroke.',
        practice:
          'Lower the mean arterial pressure by roughly 20–25% in the first hour, and no further in the first day, using a controlled intravenous infusion that can be titrated. Follow the local protocol for agent and target.',
      },
      the_key_exception:
        'Different emergencies have different targets. Aortic dissection needs rapid, aggressive lowering. Acute ischaemic stroke needs permissive hypertension. Eclampsia has its own pathway with magnesium sulphate. Never apply one target to every hypertensive emergency.',
      differential: 'Ischaemic and haemorrhagic stroke, subarachnoid haemorrhage, venous sinus thrombosis, encephalitis, and in pregnancy, eclampsia. Imaging is required — the treatment for stroke is the opposite.',
    },
    warnings: [
      'Do NOT lower blood pressure rapidly. Aim for roughly a 20–25% reduction in mean arterial pressure over the first hour. Rapid normalisation causes cerebral infarction, blindness and death.',
      'Use a titratable intravenous infusion with continuous monitoring, not sublingual or oral boluses.',
      'Exclude stroke with imaging before treating — the blood pressure target in acute ischaemic stroke is the opposite.',
      'In pregnancy this is eclampsia until proven otherwise. Magnesium sulphate and the obstetric pathway take priority.',
    ],
    limitations: ['Targets and preferred agents differ between institutions and by the specific emergency. Confirm your local protocol.'],
    cards: [
      { q: 'Why do the occipital lobes suffer first?', a: 'The posterior circulation has less sympathetic innervation to protect against pressure breakthrough.' },
      { q: 'How fast should you lower the pressure?', a: 'By about 20–25% of the mean arterial pressure in the first hour. No faster.' },
      { q: 'Why is rapid lowering dangerous?', a: 'Chronic hypertension shifts the autoregulatory curve upward; the brain needs the higher pressure to perfuse. Rapid lowering causes infarction.' },
      { q: 'Is PRES always hypertensive?', a: 'No — also eclampsia, ciclosporin and tacrolimus, chemotherapy, renal failure, sepsis and autoimmune disease.' },
    ],
    checks: ['Imaging done to exclude stroke and haemorrhage', 'Fundoscopy for papilloedema', 'Pregnancy test in a woman of childbearing age', 'Titratable IV infusion used', 'Target reduction written in the notes', 'Continuous monitoring in place'],
  },

  {
    id: 'AS-CSF-0001',
    type: 'test',
    title: 'CSF Analysis — Bacterial, Viral, Tuberculous and Fungal Patterns',
    short: 'CSF analysis',
    summary:
      'Four patterns of cerebrospinal fluid separate the causes of meningitis. The glucose ratio and the cell type do most of the work — and the single most important rule is that antibiotics come before the lumbar puncture, never after.',
    domains: ['infectious_disease', 'neurology', 'laboratory_medicine'],
    intents: ['interpret', 'investigate'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['csf', 'lumbar puncture', 'spinal tap', 'cerebrospinal fluid', 'lp', 'csf analysis'],
    terms: ['csf', 'lumbar puncture', 'meningitis', 'xanthochromia', 'india ink', 'ziehl neelsen', 'cryptococcal', 'glucose ratio', 'pleocytosis', 'opening pressure'],
    confirm_locally: true,
    body: {
      normal_values: {
        appearance: 'Clear and colourless — "gin clear"',
        opening_pressure: 'About 10–20 cm H2O in an adult, measured lying in the lateral position with legs extended',
        white_cells: 'Under 5 per mm3 in an adult, and no neutrophils. Neonates are allowed more.',
        protein: 'About 0.15–0.45 g/L',
        glucose: 'About 60% of a PAIRED plasma glucose — always send a simultaneous blood glucose',
      },
      the_four_patterns: {
        bacterial: {
          appearance: 'Turbid or cloudy',
          cells: 'Very high, hundreds to thousands, NEUTROPHILS',
          protein: 'HIGH',
          glucose: 'LOW — often under 40% of plasma. Bacteria consume it.',
          other: 'Gram stain and culture. Raised lactate. Opening pressure raised.',
        },
        viral: {
          appearance: 'Clear',
          cells: 'Moderately raised, tens to hundreds, LYMPHOCYTES',
          protein: 'Normal or mildly raised',
          glucose: 'NORMAL — the key discriminator from bacterial and TB',
          other: 'Viral PCR including HSV and enterovirus. Note: very early viral meningitis can show neutrophils, which then shift to lymphocytes over 24 hours.',
        },
        tuberculous: {
          appearance: 'Clear or slightly opalescent; may form a fibrin web on standing',
          cells: 'Raised, LYMPHOCYTES predominate (neutrophils possible early)',
          protein: 'VERY HIGH — often the highest of all four',
          glucose: 'LOW',
          other: 'Ziehl-Neelsen stain has poor sensitivity; TB PCR and prolonged culture. A LARGE VOLUME sample greatly improves yield. Typically a subacute course over weeks with cranial nerve palsies and basal meningeal enhancement on imaging.',
        },
        fungal: {
          appearance: 'Clear',
          cells: 'Raised lymphocytes; may be surprisingly LOW in advanced HIV because there is no immune response left to mount',
          protein: 'High',
          glucose: 'Low',
          other:
            'CRYPTOCOCCUS is the important one in HIV. India ink shows the capsule; cryptococcal antigen (CrAg) on CSF and serum is far more sensitive and is the test of choice. Opening pressure is often VERY HIGH and must be measured and managed.',
        },
      },
      the_shortcut:
        'Look at the GLUCOSE first. LOW glucose narrows it to bacterial, tuberculous or fungal. NORMAL glucose with lymphocytes suggests viral. Then use the cell type and protein to separate the low-glucose group: neutrophils and very high protein with an acute course is bacterial; lymphocytes with very high protein and a subacute course is TB.',
      xanthochromia:
        'Yellow discolouration of the supernatant after centrifugation, from bilirubin released by breakdown of red cells. It is the test for SUBARACHNOID HAEMORRHAGE when CT is negative. It takes about 12 hours to develop, so the LP must be delayed at least 12 hours after headache onset. It distinguishes true subarachnoid blood from a traumatic tap.',
      traumatic_tap_versus_haemorrhage:
        'In a traumatic tap the red cell count FALLS between the first and last bottle and there is no xanthochromia. In subarachnoid haemorrhage the count stays constant across bottles and xanthochromia is present after 12 hours.',
      cryptococcal_pressure_management:
        'In cryptococcal meningitis, raised intracranial pressure is a major cause of death and is managed with repeated therapeutic lumbar punctures, not with steroids or mannitol. Measure the opening pressure every time.',
    },
    warnings: [
      'GIVE ANTIBIOTICS FIRST if there will be ANY delay to lumbar puncture. Never delay antibiotics for a CT or an LP in suspected bacterial meningitis. CSF culture yield falls after antibiotics, but the patient survives.',
      'Do a CT head BEFORE lumbar puncture if there are focal neurological signs, reduced or fluctuating consciousness, papilloedema, seizures, or immunosuppression — LP in raised intracranial pressure risks coning.',
      'ALWAYS send a paired blood glucose. A CSF glucose without a plasma glucose is uninterpretable.',
      'Send a LARGE volume if tuberculosis is suspected. Small samples miss it.',
      'In cryptococcal meningitis, measure and manage the opening pressure — raised pressure kills more patients than the fungus itself.',
    ],
    limitations: [
      'Patterns overlap. Partially treated bacterial meningitis can look viral. Early viral meningitis can look bacterial.',
      'Reference ranges differ by age and by laboratory, and neonatal values are quite different. Confirm locally.',
    ],
    cards: [
      { q: 'Which single value narrows the differential fastest?', a: 'CSF glucose as a ratio to a paired plasma glucose. Low points to bacterial, TB or fungal.' },
      { q: 'Viral meningitis CSF glucose?', a: 'Normal. That is the key discriminator.' },
      { q: 'Which pattern has the highest protein?', a: 'Tuberculous meningitis, typically with lymphocytes and a subacute course.' },
      { q: 'Best test for cryptococcal meningitis?', a: 'Cryptococcal antigen (CrAg) on CSF and serum — more sensitive than India ink.' },
      { q: 'How do you distinguish a traumatic tap from subarachnoid haemorrhage?', a: 'Red cells fall between bottles in a traumatic tap and there is no xanthochromia. In SAH the count is constant and xanthochromia appears after 12 hours.' },
      { q: 'When must a CT precede the LP?', a: 'Focal signs, reduced consciousness, papilloedema, seizures, or immunosuppression.' },
    ],
    checks: [
      'Antibiotics given before LP if any delay',
      'CT done first if indicated',
      'Opening pressure measured',
      'Paired blood glucose sent',
      'Cell count, protein, glucose, Gram stain, culture sent',
      'Viral PCR sent',
      'CrAg sent if immunosuppressed',
      'Large volume sent if TB suspected',
      'Bottles labelled in order for red cell comparison',
    ],
  },
];
