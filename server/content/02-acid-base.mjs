/** Acid-base. Every type of acidosis and alkalosis, plus compensation. */

export default [
  {
    id: 'AS-ACID-0001',
    type: 'pathway',
    title: 'Acid-Base — The Five-Step Reading of Any Blood Gas',
    short: 'Blood gas steps',
    summary:
      'A fixed order that works on every gas, every time. Read it in this sequence and a mixed disorder cannot hide from you.',
    domains: ['critical_care', 'respiratory', 'renal'],
    intents: ['interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['abg', 'blood gas', 'arterial blood gas', 'acid base', 'gas interpretation', 'vbg'],
    terms: ['abg', 'ph', 'pco2', 'bicarbonate', 'base excess', 'compensation', 'anion gap', 'lactate'],
    body: {
      before_you_start:
        'Look at the patient and the oxygen first. A gas is a snapshot of a person — note the inspired oxygen, because a "normal" pO2 on 60% oxygen is not normal at all.',
      the_five_steps: [
        'STEP 1 — Oxygenation. Is the pO2 adequate FOR THE INSPIRED OXYGEN? Type 1 respiratory failure is low oxygen with normal or low CO2. Type 2 is low oxygen with HIGH CO2.',
        'STEP 2 — pH. Below 7.35 is acidaemia. Above 7.45 is alkalaemia. A normal pH does not mean normal — it may be full compensation or two opposing disorders.',
        'STEP 3 — Which side is driving it? Look at pCO2 and bicarbonate. If the pCO2 explains the pH direction, it is respiratory. If the bicarbonate explains it, it is metabolic.',
        'STEP 4 — Is there compensation, and is it appropriate? Compensation moves toward normal but NEVER overshoots. If it looks overcorrected, there are two disorders.',
        'STEP 5 — Calculate the ANION GAP if there is a metabolic acidosis, correct it for albumin, and calculate the delta ratio. This is where the hidden second disorder appears.',
      ],
      the_direction_rule: {
        principle:
          'In a SIMPLE disorder, pCO2 and bicarbonate move in the SAME direction. If they move in opposite directions, there are two primary disorders.',
        examples: [
          'Low pH, low bicarbonate, low pCO2 → metabolic acidosis with respiratory compensation. Same direction. Simple.',
          'Low pH, low bicarbonate, HIGH pCO2 → metabolic acidosis AND respiratory acidosis. Opposite directions. Two disorders, and the patient is tiring.',
        ],
      },
      compensation_rules: {
        note: 'These are guides for recognising an unexpected second disorder, not targets to treat.',
        metabolic_acidosis:
          'The lungs blow off CO2. Winter formula: expected pCO2 in mmHg ≈ 1.5 × bicarbonate + 8 (±2). If actual pCO2 is higher, there is a coexisting respiratory acidosis; if lower, a respiratory alkalosis.',
        metabolic_alkalosis: 'Respiration slows and CO2 rises, but hypoxia limits how far this can go.',
        respiratory_acidosis:
          'Acute: bicarbonate rises about 1 mmol/L for each 10 mmHg rise in pCO2. Chronic: about 3.5–4 mmol/L, because the kidney takes 3–5 days. A large bicarbonate rise therefore proves the retention is CHRONIC.',
        respiratory_alkalosis: 'Acute: bicarbonate falls about 2 mmol/L per 10 mmHg fall in pCO2. Chronic: about 4–5.',
      },
      venous_versus_arterial:
        'A venous gas is adequate for pH, bicarbonate and lactate in most situations and spares the patient an arterial stab. It is NOT reliable for pO2, and venous pCO2 runs a few mmHg higher. If oxygenation is the question, you need an arterial sample or oximetry.',
      units_warning:
        'pCO2 is reported in kPa in some countries and mmHg in others. The compensation formulae above use mmHg. Roughly 1 kPa ≈ 7.5 mmHg. Confirm the units your analyser reports before applying any formula.',
    },
    warnings: [
      'A normal pH never excludes a severe disorder. Two opposing disorders can produce a normal pH in a dying patient.',
      'Compensation never fully corrects the pH and never overshoots. Apparent overcorrection means a second primary disorder.',
      'Compensation formulae assume mmHg. Check your units.',
    ],
    limitations: ['Formulae are approximations derived from populations and perform poorly in mixed and rapidly changing states.'],
    cards: [
      { q: 'What are the five steps?', a: 'Oxygenation, pH, which side is driving, is compensation appropriate, then the anion gap and delta ratio.' },
      { q: 'pCO2 and bicarbonate move in opposite directions — what does that mean?', a: 'Two primary disorders, not one with compensation.' },
      { q: 'How do you tell acute from chronic CO2 retention?', a: 'By how much the bicarbonate has risen. About 1 mmol/L per 10 mmHg is acute; 3.5–4 is chronic, because the kidney needs days.' },
      { q: 'Type 1 versus type 2 respiratory failure?', a: 'Type 1: low oxygen, normal or low CO2. Type 2: low oxygen with HIGH CO2.' },
    ],
    checks: [
      'Inspired oxygen recorded',
      'pH classified',
      'Driving side identified',
      'Compensation checked against expected',
      'Anion gap calculated and corrected for albumin',
      'Lactate and glucose reviewed',
      'Units confirmed',
    ],
    related: ['anion_gap_and_the_delta_ratio_finding_the_hidden_disorder'],
  },

  {
    id: 'AS-ACID-0002',
    type: 'pattern',
    title: 'Raised Anion Gap Metabolic Acidosis — An Acid Has Been Added',
    short: 'Raised gap acidosis',
    summary:
      'Low pH, low bicarbonate, wide anion gap. Something acidic has entered the blood. The list is short, the causes are mostly dangerous, and lactate and ketones account for the great majority.',
    domains: ['critical_care', 'emergency_medicine', 'toxicology'],
    intents: ['interpret', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['hagma', 'high anion gap metabolic acidosis', 'raised gap acidosis', 'wide gap acidosis'],
    terms: ['anion gap', 'lactate', 'ketoacidosis', 'methanol', 'ethylene glycol', 'salicylate', 'uraemia', 'metformin'],
    body: {
      the_causes: {
        lactate: {
          type_a: 'Tissue hypoperfusion — shock of any kind, sepsis, mesenteric ischaemia, severe hypoxia, cardiac arrest. This is the common and lethal group.',
          type_b: 'No hypoperfusion — metformin, liver failure, thiamine deficiency, malignancy, some antiretrovirals, severe asthma treated with salbutamol.',
        },
        ketones: 'Diabetic ketoacidosis, alcoholic ketoacidosis, starvation ketosis. Check ketones in ANY unwell diabetic.',
        renal_failure: 'Retained urate, phosphate and sulphate. Usually a modest gap unless very advanced.',
        toxins: 'Methanol, ethylene glycol, salicylate, paraldehyde, isoniazid overdose. These are time-critical and specific antidotes exist.',
      },
      the_practical_approach: [
        'Measure lactate. It is fast, available, and covers the biggest group.',
        'Measure ketones — blood ketones if available, urine if not.',
        'Check renal function and glucose.',
        'If none of these explains the gap, calculate the OSMOLAR GAP and consider a toxic alcohol. Discuss with the poisons service.',
        'Look for the source of shock or sepsis. A raised lactate is a warning about perfusion, not just a number.',
      ],
      salicylate_special_case:
        'Salicylate poisoning classically produces a MIXED picture: a respiratory alkalosis (direct stimulation of the respiratory centre) plus a raised-gap metabolic acidosis. In an adult the pH may be near-normal early. A falling pH in salicylate poisoning is an ominous late sign.',
      why_it_confuses: [
        'A patient can have a normal bicarbonate and a raised gap if a metabolic alkalosis coexists — this is what the delta ratio is for.',
        'Lactate rises with adrenaline, salbutamol and seizure activity without any perfusion failure — interpret it with the patient.',
        'A "normal" gap in hypoalbuminaemia may be genuinely raised once corrected.',
      ],
    },
    warnings: [
      'A raised anion gap acidosis with no explanation from lactate, ketones or renal failure is a toxic alcohol until proven otherwise. This is time-critical — discuss with the poisons service immediately.',
      'A raised lactate in a shocked patient is an emergency, not a laboratory curiosity.',
      'In salicylate poisoning, a normal or high pH early does not mean the patient is well. Deterioration is rapid.',
    ],
    limitations: ['The gap is a screening tool. It does not identify which acid, and normal ranges vary by analyser.'],
    cards: [
      { q: 'Which two causes account for most raised-gap acidoses?', a: 'Lactate and ketones.' },
      { q: 'Type A versus type B lactic acidosis?', a: 'Type A is tissue hypoperfusion. Type B has no hypoperfusion — metformin, liver failure, thiamine deficiency, malignancy.' },
      { q: 'Classic acid-base picture of salicylate poisoning?', a: 'Mixed respiratory alkalosis with a raised-gap metabolic acidosis.' },
      { q: 'Raised anion gap with no obvious cause — next calculation?', a: 'The osmolar gap, looking for methanol or ethylene glycol.' },
    ],
    checks: ['Lactate measured', 'Ketones measured', 'Glucose and renal function checked', 'Osmolar gap considered', 'Source of shock or sepsis sought', 'Poisons service contacted if toxin suspected'],
  },

  {
    id: 'AS-ACID-0003',
    type: 'pattern',
    title: 'Normal Anion Gap Metabolic Acidosis — Bicarbonate Has Been Lost',
    short: 'Normal gap acidosis',
    summary:
      'Low pH, low bicarbonate, normal anion gap, high chloride. Nothing has been added — bicarbonate has been lost from the gut or the kidney and chloride has moved in to take its place.',
    domains: ['renal', 'critical_care', 'paediatrics'],
    intents: ['interpret', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['nagma', 'hyperchloraemic acidosis', 'normal gap acidosis', 'hyperchloremic acidosis'],
    terms: ['normal anion gap', 'hyperchloraemic', 'diarrhoea', 'renal tubular acidosis', 'rta', 'saline', 'urinary anion gap'],
    body: {
      the_two_places_bicarbonate_goes: {
        gut: 'DIARRHOEA is by far the commonest cause worldwide, and the commonest cause of death from it in children is this acidosis plus dehydration. Also ileostomy output, fistula, ureteric diversion.',
        kidney: 'Renal tubular acidosis, carbonic anhydrase inhibitors such as acetazolamide, early renal failure.',
      },
      iatrogenic: 'Large-volume 0.9% saline resuscitation causes a hyperchloraemic acidosis. It is common in intensive care and is usually a consequence of treatment rather than a disease.',
      distinguishing_gut_from_kidney: {
        tool: 'The URINARY anion gap: urine sodium + urine potassium − urine chloride.',
        interpretation: [
          'NEGATIVE urinary gap — the kidney is excreting ammonium properly, so the loss is from the GUT. Think diarrhoea.',
          'POSITIVE urinary gap — the kidney is failing to excrete acid, so the problem is RENAL. Think renal tubular acidosis.',
        ],
        memory_aid: 'NEG-UT — a NEGative urinary gap points to the GUT.',
      },
      renal_tubular_acidosis: {
        type_1_distal: 'Cannot acidify urine. Urine pH stays above 5.5. Potassium LOW. Causes stones and nephrocalcinosis. Associated with Sjögren syndrome and autoimmune disease.',
        type_2_proximal: 'Cannot reabsorb bicarbonate. Urine pH is variable and can go below 5.5 once bicarbonate is depleted. Potassium LOW. Part of Fanconi syndrome; associated with myeloma.',
        type_4: 'Aldosterone deficiency or resistance. Potassium HIGH — the one that stands out. Common in diabetic nephropathy and with ACE inhibitors, spironolactone and trimethoprim.',
        the_shortcut: 'Types 1 and 2 have LOW potassium; type 4 has HIGH potassium. That single fact separates them at the bedside.',
      },
      why_it_confuses: [
        'The anion gap is normal, so it can be missed entirely if only the gap is checked and not the bicarbonate.',
        'Hyperchloraemia from saline resuscitation looks like disease but is treatment.',
        'Type 4 RTA has a HIGH potassium, which is the opposite of what most people remember about RTA.',
      ],
    },
    warnings: [
      'In a child with diarrhoea, this acidosis plus dehydration is what kills. Rehydration is the treatment; follow the local plan.',
      'Do not attribute a normal-gap acidosis to saline without excluding diarrhoea and renal tubular acidosis.',
    ],
    limitations: ['The urinary anion gap is unreliable in the presence of other unmeasured urinary anions such as ketones, and in volume depletion.'],
    cards: [
      { q: 'Commonest cause of a normal anion gap acidosis worldwide?', a: 'Diarrhoea.' },
      { q: 'What does a NEGATIVE urinary anion gap tell you?', a: 'The kidney is working; the loss is from the gut. NEG-UT.' },
      { q: 'Which renal tubular acidosis has a HIGH potassium?', a: 'Type 4. Types 1 and 2 have low potassium.' },
      { q: 'Which RTA causes stones and nephrocalcinosis?', a: 'Type 1, distal.' },
    ],
    checks: ['Anion gap confirmed normal', 'Chloride reviewed', 'Diarrhoea history taken', 'Urinary anion gap calculated', 'Potassium reviewed to classify RTA', 'Fluid given reviewed for chloride load'],
  },

  {
    id: 'AS-ACID-0004',
    type: 'pattern',
    title: 'Metabolic Alkalosis — And Why It Will Not Correct',
    short: 'Metabolic alkalosis',
    summary:
      'High pH, high bicarbonate. Usually vomiting or diuretics. The important part is not the cause but the maintenance — chloride and potassium depletion stop the kidney from excreting the excess bicarbonate.',
    domains: ['renal', 'critical_care', 'general_surgery'],
    intents: ['interpret', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['alkalosis', 'high bicarbonate', 'metabolic alkalosis'],
    terms: ['alkalosis', 'vomiting', 'pyloric stenosis', 'diuretic', 'chloride responsive', 'conn', 'hypokalaemia'],
    body: {
      generation_versus_maintenance: {
        principle:
          'A healthy kidney excretes excess bicarbonate easily, so an alkalosis should self-correct. If it persists, something is MAINTAINING it — almost always chloride depletion, volume depletion or potassium depletion. Treating the cause without replacing chloride will not work.',
      },
      chloride_responsive: {
        urine_chloride: 'LOW (typically under 20 mmol/L)',
        causes: 'Vomiting, nasogastric aspiration, diuretics (after they stop), post-hypercapnia, cystic fibrosis sweat losses.',
        treatment: 'Sodium chloride and potassium replacement. These respond to saline.',
      },
      chloride_resistant: {
        urine_chloride: 'HIGH (typically above 20 mmol/L)',
        causes: 'Hyperaldosteronism (Conn), Cushing syndrome, liquorice, Bartter and Gitelman syndromes, severe potassium depletion, ongoing diuretic use.',
        treatment: 'Saline will not fix these. Treat the underlying endocrine cause and replace potassium.',
      },
      infantile_pyloric_stenosis:
        'The classic exam and ward picture: a HYPOCHLORAEMIC, HYPOKALAEMIC METABOLIC ALKALOSIS in a young infant with projectile non-bilious vomiting. The metabolic disturbance must be corrected BEFORE surgery — this is a medical emergency and a surgical semi-elective.',
      consequences: [
        'Alkalosis increases calcium binding to albumin, so ionised calcium falls and tetany can occur with a normal total calcium.',
        'It shifts potassium into cells, worsening hypokalaemia.',
        'It shifts the oxygen dissociation curve LEFT, reducing oxygen release to tissues.',
        'It reduces respiratory drive.',
      ],
      why_it_confuses: [
        'The vomiting patient loses acid from the stomach, but most of the potassium loss is actually renal, driven by the alkalosis and volume depletion.',
        'A patient can look "alkalotic" from compensation for chronic CO2 retention rather than a primary alkalosis — check the pH.',
        'Correcting the alkalosis in a chronically hypercapnic patient too quickly removes their respiratory drive.',
      ],
    },
    warnings: [
      'In infantile pyloric stenosis, correct the fluid and electrolyte disturbance before theatre. Anaesthetising an alkalotic, hypochloraemic, hypokalaemic infant is dangerous.',
      'Chloride-resistant alkalosis will not respond to saline. Measure urine chloride before pouring in fluid.',
    ],
    limitations: ['Urine chloride is unreliable while a diuretic is still acting.'],
    cards: [
      { q: 'What maintains a metabolic alkalosis?', a: 'Chloride, volume and potassium depletion. Without replacing chloride, the kidney cannot excrete the bicarbonate.' },
      { q: 'Which test separates chloride-responsive from chloride-resistant?', a: 'Urine chloride. Low means responsive to saline; high means resistant.' },
      { q: 'Acid-base picture of infantile pyloric stenosis?', a: 'Hypochloraemic hypokalaemic metabolic alkalosis.' },
      { q: 'Why does tetany occur in alkalosis with normal total calcium?', a: 'Alkalosis increases albumin binding of calcium, lowering the ionised fraction.' },
    ],
    checks: ['Urine chloride sent', 'Potassium and chloride replaced', 'Volume status assessed', 'Endocrine cause considered if chloride-resistant', 'Electrolytes corrected before surgery in pyloric stenosis'],
  },

  {
    id: 'AS-ACID-0005',
    type: 'pattern',
    title: 'Respiratory Acidosis and Alkalosis — The Lung Side',
    short: 'Respiratory acid-base',
    summary:
      'CO2 is an acid. Retain it and the pH falls; blow it off and the pH rises. The clinically urgent question is whether retention is acute or chronic, because that changes the oxygen target and the whole management.',
    domains: ['respiratory', 'critical_care', 'emergency_medicine'],
    intents: ['interpret', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['respiratory acidosis', 'respiratory alkalosis', 'co2 retention', 'hypercapnia', 'hypocapnia', 'type 2 respiratory failure'],
    terms: ['pco2', 'hypercapnia', 'co2 retention', 'copd', 'hyperventilation', 'niv', 'type 2 respiratory failure'],
    confirm_locally: true,
    body: {
      respiratory_acidosis: {
        definition: 'High pCO2 with a low pH. The patient is not ventilating enough.',
        causes: {
          wont_breathe: 'Opioids, sedatives, head injury, raised intracranial pressure, stroke affecting the brainstem',
          cant_breathe_neuromuscular: 'Guillain-Barré, myasthenia gravis, motor neurone disease, high cervical cord injury, muscular dystrophy',
          cant_breathe_chest_wall: 'Severe kyphoscoliosis, flail chest, obesity hypoventilation',
          cant_breathe_lung: 'COPD, severe asthma (a rising CO2 in acute asthma is a pre-terminal sign), pneumonia, pulmonary oedema',
        },
        acute_versus_chronic:
          'Acute: bicarbonate barely raised, pH markedly low. Chronic: bicarbonate substantially raised, pH near-normal. The bicarbonate is the memory of how long this has been going on.',
        management_principle:
          'Treat the cause, support ventilation. Non-invasive ventilation is the treatment for hypercapnic respiratory failure in the right patient; follow local criteria. In known or suspected chronic retention, use a controlled oxygen target range rather than high-flow oxygen.',
      },
      respiratory_alkalosis: {
        definition: 'Low pCO2 with a high pH. The patient is over-ventilating.',
        causes: [
          'Pain, anxiety and panic — common, but a diagnosis of exclusion',
          'HYPOXIA of any cause — the lung tries to compensate. This is the one that matters.',
          'PULMONARY EMBOLISM — classically a respiratory alkalosis with hypoxia',
          'Sepsis — often the earliest gas abnormality, before lactate rises',
          'Salicylate poisoning',
          'Pregnancy — progesterone drives ventilation; a mild respiratory alkalosis is NORMAL in pregnancy',
          'Liver failure, high altitude, CNS lesions, mechanical over-ventilation',
        ],
        the_trap:
          'Never label a hyperventilating patient as anxious until hypoxia, pulmonary embolism, sepsis and salicylate have been considered. Hyperventilation is a symptom of dying as often as it is of anxiety.',
        effects: 'Tetany and paraesthesiae from a fall in ionised calcium, cerebral vasoconstriction causing dizziness, and a left shift of the oxygen dissociation curve.',
      },
      why_it_confuses: [
        'A near-normal pH with a very high CO2 means chronic, compensated retention — the patient may be at their baseline, not deteriorating.',
        'A NORMAL CO2 in acute severe asthma is a danger sign, not reassurance: the patient should be hyperventilating and is tiring.',
        'A mild respiratory alkalosis in a pregnant woman is physiological.',
      ],
    },
    warnings: [
      'A normal or rising CO2 in acute severe asthma indicates exhaustion and impending respiratory arrest. Call for senior and critical care help immediately.',
      'In known chronic CO2 retention, uncontrolled high-flow oxygen can worsen hypercapnia. Use the target saturation range in your local protocol — but never withhold oxygen from a hypoxic patient who is dying.',
      'Do not diagnose hyperventilation as anxiety until pulmonary embolism, sepsis, hypoxia and salicylate have been excluded.',
    ],
    limitations: ['Oxygen targets and non-invasive ventilation criteria are set locally. Confirm your unit protocol.'],
    cards: [
      { q: 'What does a normal CO2 in acute severe asthma mean?', a: 'The patient is tiring. It is a pre-terminal sign, not reassurance.' },
      { q: 'How do you tell acute from chronic CO2 retention?', a: 'By the bicarbonate. A large rise means the kidney has had days — chronic.' },
      { q: 'Hyperventilation with hypoxia — what must you exclude?', a: 'Pulmonary embolism, sepsis and other causes of hypoxia. Never assume anxiety first.' },
      { q: 'Is respiratory alkalosis normal in pregnancy?', a: 'Yes, a mild one is physiological, driven by progesterone.' },
    ],
    checks: [
      'Inspired oxygen documented',
      'Acute versus chronic determined from bicarbonate',
      'Cause categorised: will not, cannot (neuromuscular, chest wall, lung)',
      'Oxygen target range set per protocol',
      'NIV considered against local criteria',
      'PE and sepsis considered in respiratory alkalosis',
    ],
  },
];
