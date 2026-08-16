/**
 * CASE SCENARIOS — Medicine: Endocrinology and Nephrology.
 *
 * Batch 2. Same rules as batch 1: every term defined where it first appears,
 * every investigation with its expected result and normal range, every drug
 * with dose, route, how to mix it, rate, and what to monitor.
 *
 * teaching_case: true renders the standing dose banner. These doses are worked
 * examples for an adult with normal renal and hepatic function unless stated.
 */

export default [
  {
    id: 'AS-CASE-0006',
    type: 'case',
    specialty: 'Medicine — Endocrinology',
    teaching_case: true,
    title: 'CASE: A 19-Year-Old With Vomiting, Deep Sighing Breathing and a Glucose of 28',
    short: 'Case: diabetic ketoacidosis',
    summary:
      'Newly diagnosed type 1 diabetes presenting in ketoacidosis. Teaches the three diagnostic criteria, why FLUID comes before insulin, why potassium falls when you start treating, and the two complications that kill — cerebral oedema in the young and hypokalaemia in everyone.',
    domains: ['endocrine', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case dka', 'diabetic ketoacidosis case', 'kussmaul breathing', 'ketones case',
      'insulin infusion case', 'cerebral oedema dka', 'euglycaemic dka', 'new type 1 diabetes',
    ],
    terms: [
      'case', 'dka', 'diabetic ketoacidosis', 'kussmaul', 'ketones', 'beta hydroxybutyrate',
      'anion gap', 'fixed rate insulin infusion', 'actrapid', 'potassium', 'cerebral oedema',
      'euglycaemic dka', 'sglt2', 'osmolality', 'pseudohyponatraemia', 'sick day rules',
      'basal bolus', 'glargine', 'aspart',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '19-year-old female student, no past medical history, with 3 days of vomiting, abdominal pain, thirst and passing large volumes of urine, now drowsy with deep sighing breathing.',

      section_1_clerking: {
        history:
          'Three weeks of increasing THIRST (polydipsia), passing large volumes of urine including waking at night (polyuria and nocturia), and 6 kg of unintentional weight loss despite a normal appetite. For 3 days she has vomited repeatedly and has diffuse abdominal pain. Today she became drowsy. Her flatmate says her breath smells sweet.',
        reading_the_clues: {
          polyuria_polydipsia_weight_loss:
            'The classic triad of NEW type 1 diabetes. WHY: glucose rises above the renal threshold (about 10 mmol/L), so it spills into urine and drags water with it by OSMOTIC DIURESIS. That causes the polyuria; the resulting dehydration causes the thirst. Weight loss occurs because without insulin the body cannot use glucose and breaks down fat and muscle instead.',
          vomiting_and_abdominal_pain:
            'Very common in ketoacidosis and frequently misdiagnosed as gastroenteritis or a surgical abdomen. The acidosis itself causes it. A young person with vomiting and abdominal pain must have a GLUCOSE and KETONES checked before being labelled gastroenteritis.',
          deep_sighing_breathing:
            'KUSSMAUL BREATHING — deep, slow, laboured respirations. It is not distress; it is COMPENSATION. Blowing off carbon dioxide (an acid) is the body attempting to correct a metabolic acidosis.',
          sweet_breath: 'ACETONE, a ketone, excreted through the lungs. Often described as smelling of pear drops or nail varnish remover. Not everyone can detect it.',
          three_weeks_then_three_days: 'Weeks of osmotic symptoms means the diabetes has been developing; three days of vomiting means decompensation into ketoacidosis.',
        },
        no_past_history: 'This is a NEW diagnosis. Roughly a quarter of new type 1 diabetes presents in ketoacidosis, and the earlier symptoms were missed.',
        vitals: {
          values: 'BP 96/58 mmHg (LOW — she is volume depleted). Pulse 124 (tachycardia). Respiratory rate 30 (Kussmaul). Temperature 36.4 (normal — but infection is still the commonest precipitant and can be present without fever). Saturation 99% on air. GCS 13/15. CAPILLARY GLUCOSE 28.4 mmol/L. CAPILLARY KETONES 5.8 mmol/L.',
          interpretation: 'Hypotensive and tachycardic from severe dehydration. She has lost several litres through osmotic diuresis and vomiting.',
        },
        examination:
          'Dry mucous membranes, reduced skin turgor, sunken eyes — all signs of DEHYDRATION. Capillary refill 4 seconds (normal under 2). Abdomen soft with generalised mild tenderness and no guarding — this is the acidosis, not peritonitis. Chest clear. No focal neurology.',
      },

      section_2_mechanism: {
        what_dka_actually_is: 'A state of ABSOLUTE INSULIN DEFICIENCY. Not simply high sugar — the defining problem is that without insulin the body switches to burning fat, and the by-products of that are acids.',
        step_by_step: [
          '1. Autoimmune destruction of pancreatic beta cells means NO INSULIN is produced.',
          '2. Without insulin, glucose CANNOT ENTER cells. The blood is full of fuel the tissues cannot use — "starvation in the midst of plenty".',
          '3. The body believes it is starving, so counter-regulatory hormones rise — glucagon, cortisol, catecholamines, growth hormone. These tell the liver to make MORE glucose (gluconeogenesis and glycogenolysis), so the glucose climbs higher still.',
          '4. Glucose exceeds the renal threshold and spills into urine, dragging water and electrolytes with it — OSMOTIC DIURESIS. Result: profound dehydration, and loss of sodium, potassium, magnesium and phosphate.',
          '5. Unable to use glucose, cells break down FAT. Free fatty acids reach the liver and are converted into KETONE BODIES — acetoacetate, beta-hydroxybutyrate and acetone.',
          '6. Ketones are ACIDS. They accumulate and consume bicarbonate — METABOLIC ACIDOSIS with a RAISED ANION GAP.',
          '7. The lungs compensate by blowing off carbon dioxide — KUSSMAUL BREATHING. Acetone is exhaled — the sweet breath.',
          '8. Acidosis and dehydration cause vomiting and abdominal pain, worsening the fluid loss — a vicious circle.',
          '9. Severe dehydration reduces cerebral perfusion, and the acidosis affects the brain directly — DROWSINESS progressing to coma.',
        ],
        the_potassium_trap_which_is_the_whole_lesson:
          'THE SERUM POTASSIUM IS USUALLY NORMAL OR HIGH AT PRESENTATION, BUT TOTAL BODY POTASSIUM IS SEVERELY DEPLETED. Two reasons: acidosis drives potassium OUT of cells into the blood, and the lack of insulin does the same, because insulin normally pushes potassium INTO cells. Meanwhile litres of potassium have been lost in the urine. So the blood level lies. THE MOMENT YOU GIVE INSULIN, potassium is driven back into cells and the serum level CRASHES — which causes fatal arrhythmia. This is why potassium is checked before insulin is started and monitored hourly afterwards.',
      },

      section_3_differentials: {
        one_dka: 'WORKING DIAGNOSIS. Supporting: osmotic symptoms, weight loss, vomiting, Kussmaul breathing, glucose 28.4, ketones 5.8, dehydration. Confirm: blood gas showing acidosis.',
        two_hhs: 'HYPEROSMOLAR HYPERGLYCAEMIC STATE. Supporting: high glucose and dehydration. Against: she is young, has ketones, and has a short history. HHS occurs in older type 2 patients over days to weeks, with much higher glucose, much higher osmolality, and minimal ketones. See the separate HHS case.',
        three_gastroenteritis: 'Supporting: vomiting and abdominal pain. Against: glucose 28.4 and ketones 5.8. THIS IS THE CLASSIC MISDIAGNOSIS — a young person with vomiting sent home with an antiemetic. CHECK GLUCOSE AND KETONES IN EVERY VOMITING PATIENT.',
        four_surgical_abdomen: 'Supporting: abdominal pain and vomiting. Against: soft abdomen without guarding or rebound. The pain of ketoacidosis resolves as the acidosis is corrected — so if pain persists after correction, reconsider a surgical cause.',
        five_sepsis: 'Supporting: tachycardia and hypotension. Against: afebrile. But infection is the COMMONEST PRECIPITANT of ketoacidosis, so it must be actively sought even in a patient who is afebrile — the acidosis can suppress the temperature response.',
      },

      section_4_investigations: {
        the_three_diagnostic_criteria: {
          note: 'ALL THREE must be present. Learn them as a set.',
          one_hyperglycaemia: 'Glucose above 11 mmol/L — OR a known diagnosis of diabetes. Note that glucose can be near-normal (see euglycaemic DKA in the teaching points).',
          two_ketonaemia: 'Blood ketones 3.0 mmol/L or above, or significant ketonuria (2+ or more on dipstick). Expected here: 5.8. Normal is under 0.6.',
          three_acidosis: 'Venous pH below 7.3, OR bicarbonate below 15 mmol/L.',
        },
        blood_gas: {
          why: 'Confirms the acidosis and its severity. A VENOUS gas is sufficient — you do not need an arterial sample for pH and bicarbonate in ketoacidosis, and venous is far less painful.',
          normal: 'pH 7.35 to 7.45, bicarbonate 22 to 26 mmol/L, base excess −2 to +2.',
          expected: 'pH 7.08, bicarbonate 6 mmol/L, base excess −22, lactate 2.1.',
          interpretation: 'SEVERE metabolic acidosis. Severity markers that mandate higher-level care include pH under 7.1, bicarbonate under 5, ketones over 6, potassium under 3.5 on admission, GCS under 12, systolic under 90, pulse over 100 or under 60, and oxygen saturation under 92%. SHE HAS SEVERAL — she needs critical care review.',
        },
        urea_and_electrolytes: {
          expected: 'Sodium 130 mmol/L, potassium 5.4 mmol/L, urea 11.2, creatinine 118.',
          how_to_read_the_sodium:
            'It looks low, but this is PSEUDOHYPONATRAEMIA — the high glucose pulls water out of cells into the blood, DILUTING the sodium. Correct it mentally: add roughly 2.4 mmol/L of sodium for every 5.5 mmol/L of glucose above normal. Her true sodium is therefore substantially higher, and will RISE as glucose falls. A rising sodium during treatment is EXPECTED and reassuring, not alarming.',
          the_potassium: '5.4 looks high, but as explained above her TOTAL BODY potassium is severely depleted. It will fall fast once insulin starts.',
          urea_and_creatinine: 'Both raised from dehydration — a PRE-RENAL picture that should improve with fluid.',
        },
        other_bloods: 'FULL BLOOD COUNT — white cells are commonly raised in ketoacidosis WITHOUT infection, from stress demargination, so a high count does not prove sepsis. CRP, blood cultures, and a septic screen because infection is the commonest precipitant. HbA1c to confirm this is chronic hyperglycaemia rather than an acute stress. Amylase can be mildly raised in ketoacidosis without pancreatitis.',
        ecg: 'Look for the changes of hyperkalaemia (tall tented T waves, widened QRS) and hypokalaemia (flattened T waves, U waves), and exclude a silent infarct as a precipitant in older patients.',
        chest_xray_and_urine: 'Looking for the precipitant — pneumonia, urinary infection. Send urine for culture.',
        find_the_precipitant_mnemonic: 'The 5 I\'s — INFECTION (commonest), INFARCTION (myocardial), INFANT (pregnancy), INSULIN omitted or wrong dose, and INTOXICATION (alcohol, drugs). In a NEW diagnosis like hers, the precipitant is simply the undiagnosed diabetes itself.',
      },

      section_5_management: {
        the_order_matters: 'FLUID FIRST, THEN POTASSIUM, THEN INSULIN. Giving insulin to a severely dehydrated, potassium-depleted patient before restoring circulating volume can cause circulatory collapse and fatal hypokalaemia.',
        step_1_fluid: {
          why_first:
            'She has lost several litres. Fluid alone lowers glucose substantially by diluting it and restoring renal perfusion so the kidneys can excrete it. It also restores blood pressure and tissue perfusion, clearing lactate.',
          the_regimen:
            'If systolic under 90 mmHg (SHE IS at 96, so borderline — reassess): give 500 mL of 0.9% SODIUM CHLORIDE over 10 to 15 minutes and repeat if still hypotensive. Then a typical adult schedule: 1 litre of 0.9% sodium chloride over 1 hour, then 1 litre over 2 hours (with potassium), 1 litre over 2 hours, 1 litre over 4 hours, 1 litre over 4 hours, 1 litre over 6 hours.',
          caution_in_the_young:
            'FLUID MUST BE GIVEN MORE CAUTIOUSLY IN CHILDREN, ADOLESCENTS AND YOUNG ADULTS because of the risk of CEREBRAL OEDEMA. At 19 she sits in that higher-risk group. Follow your local paediatric or young-person protocol rather than the standard adult one where they differ.',
        },
        step_2_potassium: {
          the_rule: 'CHECK POTASSIUM BEFORE STARTING INSULIN, and then hourly.',
          the_thresholds: 'If potassium is ABOVE 5.5 mmol/L — give NO potassium in the first bag, but recheck within an hour. If potassium is 3.5 to 5.5 — add 40 mmol of potassium chloride to each litre. If potassium is BELOW 3.5 — this needs SENIOR REVIEW and higher-concentration replacement, usually via a central line in a monitored setting, and INSULIN SHOULD BE DELAYED until potassium is above 3.5.',
          her_case: 'Potassium 5.4, so no potassium in the first litre, then 40 mmol per litre once it falls below 5.5 — which it will, quickly.',
          why_it_matters: 'Hypokalaemia is one of the two commonest causes of death in ketoacidosis. It causes fatal arrhythmia and respiratory muscle weakness.',
        },
        step_3_insulin: {
          preparation:
            'FIXED RATE INTRAVENOUS INSULIN INFUSION. HOW TO MAKE IT: take 50 units of SOLUBLE HUMAN INSULIN (Actrapid or Humulin S) and make up to 50 mL with 0.9% sodium chloride in a syringe pump. THIS GIVES 1 UNIT PER MILLILITRE — an easy, safe concentration.',
          dose: '0.1 units per kilogram per hour. HER WEIGHT IS 60 kg, SO 0.1 x 60 = 6 units per hour = 6 mL per hour.',
          why_fixed_rate_not_sliding_scale:
            'A fixed rate clears KETONES reliably. A variable "sliding scale" titrated to glucose alone can stop insulin once the sugar falls while ketones are still being produced — which leaves the acidosis uncorrected. YOU ARE TREATING THE KETONES, NOT THE GLUCOSE.',
          continue_her_long_acting_insulin: 'If a patient is already on a long-acting basal insulin such as glargine, CONTINUE IT alongside the infusion. It prevents rebound ketosis when the infusion stops. She is newly diagnosed, so she has none — but she will be started on one.',
        },
        step_4_add_glucose_when_the_sugar_falls: {
          the_rule: 'WHEN GLUCOSE FALLS BELOW 14 mmol/L, ADD 10% GLUCOSE at 125 mL per hour ALONGSIDE the saline, and CONTINUE THE INSULIN AT THE SAME RATE.',
          why_this_confuses_people:
            'It seems wrong to give sugar to a patient with diabetes. But you are not treating the glucose — you are treating the KETONES, and insulin is the only thing that switches off ketone production. The glucose infusion exists purely to let you keep the insulin running without causing hypoglycaemia.',
        },
        targets_of_treatment: {
          note: 'Judge success by the KETONES and the BICARBONATE, not the glucose.',
          targets: 'Ketones falling by at least 0.5 mmol/L per hour. Bicarbonate rising by at least 3 mmol/L per hour. Glucose falling by at least 3 mmol/L per hour. If these are not met, CHECK THE INFUSION IS CONNECTED AND RUNNING, then increase the insulin rate by 1 unit per hour and reassess.',
        },
        what_not_to_do: {
          bicarbonate: 'DO NOT give sodium bicarbonate routinely, even at pH 7.08. It can worsen intracellular acidosis, cause a paradoxical fall in cerebrospinal fluid pH, worsen hypokalaemia, and delay ketone clearance. It is reserved for extreme cases on senior or critical care advice.',
          insulin_bolus: 'A stat intravenous insulin bolus is generally NOT recommended in adults on a fixed rate infusion — it adds nothing and increases the risk of a rapid potassium shift.',
        },
        resolution_and_conversion_to_subcutaneous_insulin: {
          resolution_criteria: 'Ketones under 0.6 mmol/L, venous pH above 7.3, AND bicarbonate above 15. All three — not glucose alone.',
          the_conversion: 'Convert to subcutaneous insulin ONLY when she is eating and drinking, and give the first subcutaneous dose WITH A MEAL, then STOP THE INFUSION 30 TO 60 MINUTES LATER. Stopping the infusion before the subcutaneous insulin has taken effect causes immediate rebound ketosis, and it is a very common error.',
          starting_a_basal_bolus_regimen: {
            total_daily_dose: 'A typical starting point in new type 1 diabetes is 0.5 units per kilogram per day. FOR 60 kg = 30 units total per day.',
            basal: 'Half the total as a long-acting BASAL insulin — INSULIN GLARGINE (Lantus) 15 units subcutaneously once daily, at about 10 p.m. It gives flat background cover for 24 hours.',
            bolus: 'The other half split across meals as a short-acting BOLUS insulin — INSULIN ASPART (NovoRapid) 5 units subcutaneously three times daily, 15 minutes before breakfast, lunch and dinner.',
            note: 'These are starting doses to be titrated by the diabetes team against her actual readings. Requirements are frequently lower during the "honeymoon" period after diagnosis, when some beta cell function briefly returns.',
          },
        },
        monitoring: 'Hourly capillary glucose AND hourly ketones. Hourly potassium initially, from a venous gas, then less often as it stabilises. Strict fluid balance with a catheter if she is not passing urine. Continuous cardiac monitoring while potassium is being replaced. HOURLY NEUROLOGICAL OBSERVATIONS in a young patient, for the reason below.',
      },

      section_6_teaching_points: {
        bonus_1_cerebral_oedema_the_thing_that_kills_young_patients: {
          what: 'Swelling of the brain during treatment of ketoacidosis. Rare, but it is the leading cause of death in children and young adults with DKA, and mortality is high.',
          when: 'Typically 4 to 12 HOURS AFTER TREATMENT STARTS — that is, when the patient appears to be improving.',
          the_warning_signs: 'HEADACHE is the earliest and most important. Then irritability, a FALLING conscious level, BRADYCARDIA WITH RISING BLOOD PRESSURE (the Cushing response), and pupillary changes.',
          why_it_matters_practically:
            'A young patient with ketoacidosis who complains of HEADACHE during treatment must be taken seriously immediately — not given paracetamol and left. Risk is associated with rapid fluid administration and rapid falls in osmolality, which is exactly why fluid is given more cautiously in the young.',
        },
        bonus_2_euglycaemic_dka:
          'Ketoacidosis with a NORMAL or only mildly raised glucose. It occurs in pregnancy, in prolonged starvation, in alcohol excess, and — importantly and increasingly — in patients taking SGLT2 INHIBITORS (the "-gliflozins" such as dapagliflozin and empagliflozin), because those drugs pour glucose into the urine and mask the hyperglycaemia. A clinician who checks only the glucose will be falsely reassured. CHECK KETONES, NOT JUST GLUCOSE, in any unwell patient on a gliflozin.',
        bonus_3_why_you_treat_ketones_not_glucose:
          'The glucose is the symptom; the KETOACIDOSIS is the disease. This is why the insulin rate is fixed rather than titrated to sugar, why glucose is ADDED when the sugar falls, and why resolution is defined by ketones and bicarbonate rather than by a normal glucose.',
        bonus_4_the_sodium_that_rises_during_treatment:
          'Her sodium of 130 is falsely low because high glucose pulls water into the blood and dilutes it. As glucose falls, the sodium RISES. This is expected and reassuring. A sodium that FAILS to rise, or falls further, during treatment is a warning sign associated with cerebral oedema.',
        trap_1: 'CHECK GLUCOSE AND KETONES IN EVERY VOMITING PATIENT. Ketoacidosis is repeatedly mislabelled gastroenteritis or a surgical abdomen.',
        trap_2: 'A raised white cell count in ketoacidosis does NOT prove infection — stress demargination raises it without sepsis.',
        trap_3: 'Never stop the insulin infusion before subcutaneous insulin has been given with a meal and allowed 30 to 60 minutes to act. Rebound ketosis follows immediately.',
        trap_4: 'Do not give sodium bicarbonate routinely, even at a very low pH.',
        trap_5: 'Insulin will crash the potassium. Check it before you start and hourly afterwards, and delay insulin if it is below 3.5.',
        one_line_summary: 'New type 1 diabetes in ketoacidosis. Fluid first, potassium before insulin, a fixed rate infusion at 0.1 units/kg/hour, add 10% glucose when the sugar falls below 14 — and watch a young patient for the headache that means cerebral oedema.',
      },
    },
    warnings: [
      'CHECK POTASSIUM BEFORE STARTING INSULIN and hourly afterwards. Insulin drives potassium into cells and the level crashes.',
      'If potassium is below 3.5 mmol/L, DELAY insulin and get senior help — hypokalaemia is a leading cause of death in DKA.',
      'Fluid comes BEFORE insulin. Giving insulin to a severely dehydrated patient can precipitate circulatory collapse.',
      'Give fluid more cautiously in children, adolescents and young adults because of cerebral oedema risk.',
      'HEADACHE during treatment in a young patient is cerebral oedema until proven otherwise — it kills 4 to 12 hours in, when they seem to be improving.',
      'Treat the KETONES, not the glucose. Add 10% glucose when the sugar falls below 14 and keep the insulin running.',
      'Resolution is ketones under 0.6, pH above 7.3 AND bicarbonate above 15 — not a normal glucose.',
      'Never stop the infusion before subcutaneous insulin has been given with a meal and allowed 30 to 60 minutes to work.',
      'Do not give sodium bicarbonate routinely, even at a very low pH.',
      'A raised white cell count does not prove infection in DKA.',
      'EUGLYCAEMIC DKA occurs with SGLT2 inhibitors, in pregnancy, starvation and alcohol excess — check ketones, not just glucose.',
      'Check glucose and ketones in every vomiting patient — DKA is repeatedly mislabelled gastroenteritis.',
      'Doses here are teaching examples for an adult. Check your local formulary and your DKA protocol before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Fluid rates, potassium thresholds and conversion criteria differ between national and local DKA guidelines, and paediatric protocols differ substantially.',
    ],
    cards: [
      { q: 'Give the three diagnostic criteria for DKA.', a: 'Hyperglycaemia (or known diabetes), ketonaemia 3.0 or above, and acidosis with pH under 7.3 or bicarbonate under 15.' },
      { q: 'What is Kussmaul breathing and why does it happen?', a: 'Deep sighing respirations blowing off carbon dioxide to compensate for metabolic acidosis.' },
      { q: 'Why is the serum potassium misleading in DKA?', a: 'Acidosis and insulin lack drive potassium out of cells, so the blood level looks normal or high while total body stores are severely depleted.' },
      { q: 'How do you make a fixed rate insulin infusion?', a: '50 units of soluble insulin made up to 50 mL with 0.9% sodium chloride = 1 unit per mL.' },
      { q: 'Calculate the rate for a 60 kg patient.', a: '0.1 units/kg/hour = 6 units/hour = 6 mL/hour.' },
      { q: 'Why add 10% glucose when the sugar falls below 14?', a: 'So the insulin can keep running to clear ketones without causing hypoglycaemia.' },
      { q: 'Define resolution of DKA.', a: 'Ketones under 0.6, venous pH above 7.3, and bicarbonate above 15 — all three.' },
      { q: 'When does cerebral oedema occur and what is the first sign?', a: '4 to 12 hours after treatment starts, when the patient seems better. Headache is the earliest sign.' },
      { q: 'What is euglycaemic DKA and who gets it?', a: 'Ketoacidosis with a near-normal glucose — in pregnancy, starvation, alcohol excess and on SGLT2 inhibitors.' },
      { q: 'Why is the sodium low, and what happens during treatment?', a: 'Pseudohyponatraemia from glucose pulling water into the blood; it RISES as glucose falls, which is expected.' },
      { q: 'Recite the 5 I precipitants.', a: 'Infection, Infarction, Infant (pregnancy), Insulin omission, Intoxication.' },
    ],
    checks: [
      'Glucose and ketones checked in the vomiting patient',
      'Venous gas taken and severity markers assessed',
      'Potassium checked BEFORE insulin started',
      'Fluid resuscitation begun before insulin',
      'Fixed rate infusion prepared at 1 unit per mL and rate calculated by weight',
      'Long-acting insulin continued if already prescribed',
      '10% glucose added when sugar falls below 14',
      'Hourly ketones, glucose and potassium',
      'Hourly neurological observations in a young patient',
      'Precipitant sought using the 5 I mnemonic',
      'Subcutaneous insulin given with a meal before the infusion is stopped',
    ],
    related: ['diabetes_mellitus_diagnosis_types_and_what_actually_prevents_harm'],
  },

  {
    id: 'AS-CASE-0007',
    type: 'case',
    specialty: 'Medicine — Endocrinology',
    teaching_case: true,
    title: 'CASE: An 78-Year-Old Found Confused With a Glucose of 52 and No Ketones',
    short: 'Case: hyperosmolar hyperglycaemic state',
    summary:
      'A far higher glucose than ketoacidosis, minimal ketones, and a much slower onset. Teaches why HHS is managed more slowly and gently than DKA, why the osmolality matters more than the glucose, and why these patients need anticoagulation.',
    domains: ['endocrine', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case hhs', 'hyperosmolar hyperglycaemic state case', 'honk', 'hyperosmolar coma',
      'osmolality case', 'central pontine myelinolysis', 'osmotic demyelination',
    ],
    terms: [
      'case', 'hhs', 'hyperosmolar', 'osmolality', 'osmolarity', 'hyperglycaemia',
      'dehydration', 'thrombosis', 'anticoagulation', 'osmotic demyelination',
      'central pontine myelinolysis', 'corrected sodium', 'foot examination',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '78-year-old man with type 2 diabetes on gliclazide, found confused at home by his daughter after 2 weeks of increasing thirst and drowsiness.',

      section_1_clerking: {
        history:
          'Over TWO WEEKS he has become increasingly thirsty, passing large volumes of urine, and progressively drowsy and confused. He lives alone and has been eating poorly. His daughter found him today unable to stand. There is NO vomiting and no abdominal pain.',
        the_contrast_with_dka: 'TWO WEEKS, not three days. NO vomiting. NO abdominal pain. NO Kussmaul breathing. Older, type 2, on an oral agent. Every one of those points away from ketoacidosis and towards HHS.',
        why_the_slow_onset_makes_it_worse:
          'Because it develops over weeks rather than days, the fluid losses are FAR GREATER — typically 8 to 10 litres, against 5 to 7 in ketoacidosis. And because there is no vomiting or acidosis to make the patient feel acutely unwell, they present LATE. Mortality is considerably HIGHER than in ketoacidosis.',
        past_medical_history: 'Type 2 diabetes 14 years. Hypertension. Chronic kidney disease stage 3. Previous transient ischaemic attack.',
        drug_history: 'Gliclazide 80 mg orally twice daily. Metformin 1 g twice daily. Ramipril 5 mg daily. Amlodipine 5 mg daily. Simvastatin 20 mg at night. HIS DAUGHTER SAYS HE HAS BEEN CONFUSED AND MAY NOT HAVE BEEN TAKING THEM.',
        vitals: {
          values: 'BP 88/54 mmHg (hypotensive). Pulse 118. Respiratory rate 20 (NOT Kussmaul — there is no significant acidosis to compensate for). Temperature 37.8. Saturation 95% on air. GCS 11/15. CAPILLARY GLUCOSE reads "HI" — above the meter range, so a LABORATORY glucose is needed. CAPILLARY KETONES 0.8 mmol/L.',
          the_key_numbers: 'GLUCOSE 52 mmol/L on the laboratory sample. KETONES 0.8 — mildly raised but nowhere near the 3.0 threshold for ketoacidosis.',
        },
        examination:
          'Profoundly dehydrated — dry mucous membranes, absent skin turgor, sunken eyes, capillary refill 5 seconds. Drowsy, rousable to voice, no focal neurology. Chest: coarse crackles at the right base. FEET: a deep ulcer under the right first metatarsal head with surrounding cellulitis and a foul smell. EXAMINE THE FEET IN EVERY DIABETIC — this is his precipitant, and it would be missed if the shoes stayed on.',
      },

      section_2_mechanism: {
        why_there_are_no_ketones_the_central_idea:
          'In type 2 diabetes there is still SOME endogenous insulin — enough to suppress fat breakdown (LIPOLYSIS) and therefore prevent significant ketone production, but NOT enough to control blood glucose. So glucose climbs relentlessly while ketones stay low. That single fact explains every difference between HHS and DKA.',
        step_by_step: [
          '1. Insulin resistance plus an acute stress (here, an infected foot) raises glucose.',
          '2. Some residual insulin prevents ketogenesis, so there is NO acidosis and NO vomiting to make him feel acutely ill.',
          '3. Without those warning symptoms he continues for WEEKS, and glucose climbs to extreme levels.',
          '4. Massive osmotic diuresis loses 8 to 10 litres of water and large amounts of sodium and potassium.',
          '5. Because water is lost in excess of sodium, the blood becomes HYPEROSMOLAR — concentrated.',
          '6. Water is drawn OUT of brain cells by osmosis, causing cellular dehydration — CONFUSION, drowsiness, seizures and coma. THE CONSCIOUS LEVEL CORRELATES WITH THE OSMOLALITY, NOT WITH THE GLUCOSE.',
          '7. Severe dehydration plus hyperviscosity — thick, sludgy blood — creates a strongly PROTHROMBOTIC state, causing stroke, myocardial infarction, deep vein thrombosis, pulmonary embolism and arterial occlusion.',
        ],
      },

      section_3_differentials: {
        one_hhs: 'WORKING DIAGNOSIS. Supporting: older type 2 patient, 2-week history, glucose 52, ketones 0.8, profound dehydration, reduced consciousness, identified precipitant.',
        two_dka: 'Against: ketones only 0.8 (needs 3.0 or above), no acidosis, no Kussmaul breathing, no vomiting, and a much longer history. NOTE: MIXED PICTURES OCCUR — a patient can have features of both, and is then treated for the ketoacidosis first.',
        three_sepsis_with_hyperglycaemia: 'Supporting: fever, infected foot, confusion. Against: the extreme glucose and osmolality. BUT THIS IS NOT AN EITHER-OR — the sepsis is the PRECIPITANT and must be treated simultaneously.',
        four_stroke: 'Supporting: confusion in an older man with vascular disease. Against: no focal neurology. IMPORTANT: HHS both mimics AND causes stroke, so if focal signs are present, image the head.',
        five_hypoglycaemia: 'He is on GLICLAZIDE. Always check glucose in a confused patient — here it was the opposite problem, but the reflex is the same.',
      },

      section_4_investigations: {
        the_three_features_of_hhs: 'HYPOVOLAEMIA · marked HYPERGLYCAEMIA (30 mmol/L or above) WITHOUT significant ketonaemia (under 3.0) or acidosis (pH above 7.3, bicarbonate above 15) · and a raised SERUM OSMOLALITY, usually 320 mosmol/kg or above.',
        osmolality: {
          why_it_is_the_key_number: 'It determines the conscious level and drives the risk of osmotic demyelination if corrected too fast.',
          how_to_calculate_it: 'Estimated osmolality = (2 x sodium) + glucose + urea, all in mmol/L.',
          worked_example: 'Sodium 152, glucose 52, urea 18. (2 x 152) + 52 + 18 = 304 + 52 + 18 = 374 mosmol/kg. NORMAL IS 275 to 295. This is extremely high.',
        },
        urea_and_electrolytes: {
          expected: 'Sodium 152 (HIGH), potassium 4.8, urea 18.2, creatinine 198, eGFR 24.',
          the_sodium_point:
            'Unlike ketoacidosis, the sodium here is genuinely HIGH — and it is high DESPITE the dilutional effect of the glucose, meaning the true (corrected) sodium is higher still. Corrected sodium = measured sodium + 2.4 for every 5.5 mmol/L of glucose above 5.5. That gives roughly 152 + (2.4 x 8.5) = about 172. This is profound water depletion.',
          renal: 'Acute kidney injury on chronic kidney disease from dehydration.',
        },
        blood_gas: 'Expected pH 7.34, bicarbonate 19, lactate 2.4. MILD acidosis only, and largely from poor perfusion rather than ketones. This is what separates it from ketoacidosis.',
        septic_screen: 'Full blood count (white cells 19), CRP 180, blood cultures, urine culture, chest X-ray showing right basal consolidation, and a WOUND SWAB plus foot X-ray looking for OSTEOMYELITIS — infection of the bone underneath the ulcer. Note that plain films are NORMAL for the first 10 to 14 days of osteomyelitis, so a normal film excludes nothing.',
        other: 'ECG and troponin, because silent myocardial infarction is a common precipitant in an elderly diabetic. Creatine kinase if he has been on the floor for a long period, looking for rhabdomyolysis.',
      },

      section_5_management: {
        the_governing_principle: 'EVERYTHING IS SLOWER AND GENTLER THAN IN KETOACIDOSIS. He has been like this for two weeks; the brain has adapted to the high osmolality, and correcting it fast causes harm.',
        step_1_fluid_which_is_the_main_treatment: {
          the_fluid: '0.9% SODIUM CHLORIDE. Yes, even though the sodium is 152 — because relative to his plasma, 0.9% saline is HYPOTONIC and will still lower the osmolality.',
          the_rate: 'Slower than in ketoacidosis. A typical approach is 1 litre over the first hour if hypotensive, then aiming for a positive balance of roughly 3 to 6 litres by 12 hours, with full replacement over 24 to 72 hours.',
          the_targets_which_are_the_safety_limits:
            'Aim to reduce OSMOLALITY by no more than 3 to 8 mosmol/kg per HOUR. Aim to reduce GLUCOSE by no more than 4 to 6 mmol/L per hour. Sodium should not fall by more than about 10 mmol/L in 24 hours.',
          why_the_limits_exist:
            'Correcting hyperosmolality too quickly causes water to rush INTO brain cells, producing CEREBRAL OEDEMA. Correcting a chronic hypernatraemia too fast risks OSMOTIC DEMYELINATION SYNDROME (historically called central pontine myelinolysis) — irreversible damage to the brainstem causing quadriparesis and a locked-in state. These limits are not bureaucratic; they are the difference between recovery and permanent disability.',
        },
        step_2_insulin_only_if_needed_and_later: {
          the_key_difference_from_dka:
            'IN HHS, DO NOT START INSULIN IMMEDIATELY. Fluid alone lowers the glucose substantially, and giving insulin early causes a rapid fall in glucose and osmolality, driving water into cells and risking cerebral oedema and cardiovascular collapse.',
          when_to_start: 'Start insulin ONLY if there is significant ketonaemia (indicating a mixed picture), OR if the glucose stops falling adequately with fluid alone.',
          the_dose: 'A LOWER rate than ketoacidosis: 0.05 units per kilogram per hour. FOR AN 80 kg MAN = 4 units per hour = 4 mL per hour, using the same 50 units in 50 mL preparation (1 unit per mL).',
        },
        step_3_potassium: 'Same principles as ketoacidosis — replace once below 5.5 mmol/L and monitor closely. Total body potassium is depleted here too.',
        step_4_treat_the_precipitant: 'Antibiotics for the infected foot and the pneumonia, following local policy — for example CO-AMOXICLAV 1.2 g intravenously three times daily. Urgent DIABETIC FOOT TEAM referral, because this may need debridement or amputation. Withhold metformin (renal impairment) and gliclazide (he is not eating and it causes prolonged hypoglycaemia).',
        step_5_anticoagulation_which_is_specific_to_hhs: {
          why: 'The combination of extreme dehydration, hyperviscosity and immobility makes HHS a strongly PROTHROMBOTIC state. Arterial and venous thrombosis are major causes of death.',
          what: 'PROPHYLACTIC LOW MOLECULAR WEIGHT HEPARIN for all patients unless contraindicated — for example ENOXAPARIN 40 mg subcutaneously once daily, dose-reduced if eGFR is under 30 (as here, so 20 mg once daily per local policy). Some protocols recommend full anticoagulation in selected high-risk patients — a senior decision.',
        },
        step_6_the_feet_and_pressure_areas: 'He has been immobile and dehydrated. Inspect ALL pressure areas, offload the ulcerated foot completely, and involve tissue viability.',
        monitoring: 'Hourly glucose. Osmolality (calculated) hourly initially. Urea and electrolytes every 2 to 4 hours at first. Strict fluid balance with a catheter. Continuous cardiac monitoring. Neurological observations, because a falling conscious level during treatment suggests cerebral oedema.',
        recovery_expectations: 'Full recovery of consciousness takes LONGER than in ketoacidosis — often 24 to 72 hours — because the osmolality must normalise gradually. Do not assume a persistently drowsy patient has had a stroke without imaging, but equally do not panic if recovery is slow while the numbers are improving appropriately.',
      },

      section_6_teaching_points: {
        bonus_1_the_table_you_must_know: {
          onset: 'DKA days · HHS weeks.',
          age_and_type: 'DKA younger, type 1 · HHS older, type 2.',
          glucose: 'DKA usually 11 to 40 · HHS 30 to over 50.',
          ketones: 'DKA 3.0 or above · HHS under 3.0.',
          ph: 'DKA under 7.3 · HHS above 7.3.',
          osmolality: 'DKA variable · HHS 320 or above.',
          fluid_deficit: 'DKA 5 to 7 litres · HHS 8 to 10 litres.',
          insulin: 'DKA immediately at 0.1 units/kg/hour · HHS delayed, and only if needed, at 0.05.',
          mortality: 'DKA low with treatment · HHS considerably higher.',
        },
        bonus_2_why_no_ketones:
          'Residual endogenous insulin in type 2 diabetes is enough to suppress lipolysis and prevent ketogenesis, but not enough to control glucose. That one fact explains the whole clinical picture — no acidosis, no Kussmaul breathing, no vomiting, later presentation, higher glucose and higher mortality.',
        bonus_3_osmotic_demyelination:
          'Correcting a chronically raised osmolality or sodium too quickly can cause irreversible demyelination of the brainstem, producing quadriparesis, pseudobulbar palsy and a locked-in state, typically appearing DAYS after the correction. The patient improves, then deteriorates catastrophically. This is why the correction limits exist and why they are checked hourly.',
        bonus_4_examine_the_feet:
          'His precipitant was an infected foot ulcer he could not feel, because of diabetic peripheral neuropathy. TAKE THE SHOES AND SOCKS OFF OF EVERY DIABETIC PATIENT, EVERY ADMISSION. The precipitant of HHS is frequently found there, and it is frequently missed because nobody looked.',
        trap_1: 'Do not start insulin immediately in HHS. Fluid alone lowers glucose, and early insulin risks cerebral oedema and collapse.',
        trap_2: 'Use 0.9% sodium chloride even with a sodium of 152 — relative to his plasma it is hypotonic.',
        trap_3: 'Anticoagulate. HHS is strongly prothrombotic and thrombosis is a major cause of death — this is routinely forgotten.',
        trap_4: 'Slow recovery of consciousness is expected over 24 to 72 hours. Judge by the trend in osmolality, not by the clock alone.',
        trap_5: 'Stop the gliclazide in a patient who is not eating — it causes prolonged, recurrent hypoglycaemia.',
        one_line_summary: 'Hyperosmolar hyperglycaemic state precipitated by an infected foot. Fluid is the treatment, insulin is delayed and lower-dose, correction limits are safety limits, and everyone gets anticoagulation.',
      },
    },
    warnings: [
      'Do NOT start insulin immediately in HHS — fluid alone lowers glucose, and early insulin risks cerebral oedema and cardiovascular collapse.',
      'If insulin is needed, use a LOWER rate than DKA: 0.05 units/kg/hour.',
      'Reduce osmolality by no more than 3 to 8 mosmol/kg per hour and glucose by no more than 4 to 6 mmol/L per hour.',
      'Correcting too fast risks OSMOTIC DEMYELINATION — irreversible brainstem damage appearing days later, after apparent improvement.',
      'ANTICOAGULATE. HHS is strongly prothrombotic and thrombosis is a major cause of death. This is routinely forgotten.',
      'Use 0.9% sodium chloride even with a high sodium — relative to the patient plasma it is hypotonic.',
      'TAKE THE SHOES AND SOCKS OFF. The precipitant is often an infected foot the patient cannot feel.',
      'Stop gliclazide in a patient who is not eating — it causes prolonged recurrent hypoglycaemia.',
      'Plain radiographs are normal for the first 10 to 14 days of osteomyelitis — a normal film excludes nothing.',
      'Recovery of consciousness takes 24 to 72 hours. Judge by the osmolality trend, and image if focal signs appear.',
      'Doses here are teaching examples for an adult. Check your local formulary and HHS protocol before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Fluid rates, correction limits and insulin thresholds differ between guidelines.',
      'Enoxaparin dosing requires renal adjustment; the figure shown assumes the eGFR described.',
    ],
    cards: [
      { q: 'Why are there no ketones in HHS?', a: 'Residual endogenous insulin suppresses lipolysis, preventing ketogenesis, but is insufficient to control glucose.' },
      { q: 'How do you estimate serum osmolality?', a: '(2 x sodium) + glucose + urea, all in mmol/L. Normal 275 to 295.' },
      { q: 'Calculate osmolality for sodium 152, glucose 52, urea 18.', a: '304 + 52 + 18 = 374 mosmol/kg — extremely high.' },
      { q: 'What are the safe correction limits in HHS?', a: 'Osmolality by 3 to 8 mosmol/kg per hour; glucose by 4 to 6 mmol/L per hour.' },
      { q: 'What happens if you correct too quickly?', a: 'Cerebral oedema, or osmotic demyelination syndrome causing irreversible brainstem damage days later.' },
      { q: 'When is insulin started in HHS, and at what dose?', a: 'Only if ketonaemia is significant or glucose stops falling with fluid — then 0.05 units/kg/hour.' },
      { q: 'Why does every HHS patient need anticoagulation?', a: 'Dehydration and hyperviscosity make it strongly prothrombotic; thrombosis is a major cause of death.' },
      { q: 'Give the fluid deficit in HHS versus DKA.', a: 'HHS 8 to 10 litres; DKA 5 to 7 litres.' },
      { q: 'What correlates with the conscious level in HHS?', a: 'The osmolality, not the glucose.' },
      { q: 'What must you do to every diabetic patient on admission?', a: 'Take the shoes and socks off and examine the feet.' },
    ],
    checks: [
      'Laboratory glucose sent when the meter reads HI',
      'Ketones measured to distinguish from DKA',
      'Osmolality calculated and recorded',
      'Correction limits written on the chart',
      'Insulin withheld initially unless ketonaemic',
      'Prophylactic anticoagulation prescribed',
      'Feet examined with shoes and socks removed',
      'Precipitant sought and treated',
      'Gliclazide and metformin reviewed',
      'Neurological observations for cerebral oedema',
    ],
    related: ['diabetes_mellitus_diagnosis_types_and_what_actually_prevents_harm'],
  },

  {
    id: 'AS-CASE-0008',
    type: 'case',
    specialty: 'Medicine — Nephrology',
    teaching_case: true,
    title: 'CASE: Oliguria and a Potassium of 7.2 After Three Days of Diarrhoea',
    short: 'Case: AKI with severe hyperkalaemia',
    summary:
      'A 74-year-old on an ACE inhibitor, a diuretic and ibuprofen — the triple whammy — with acute kidney injury and life-threatening hyperkalaemia. Teaches the ECG that must come first, why calcium protects but does not lower, and the pre-renal, renal, post-renal split.',
    domains: ['renal', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case aki', 'acute kidney injury case', 'hyperkalaemia case', 'triple whammy case',
      'calcium gluconate', 'insulin dextrose', 'oliguria case', 'sine wave ecg',
    ],
    terms: [
      'case', 'acute kidney injury', 'aki', 'hyperkalaemia', 'triple whammy', 'pre-renal',
      'intrinsic', 'post-renal', 'obstruction', 'bladder scan', 'calcium gluconate',
      'insulin dextrose', 'salbutamol nebuliser', 'tented t waves', 'sine wave',
      'kdigo', 'nephrotoxic', 'urine dipstick', 'dialysis indications', 'aeiou',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '74-year-old woman with hypertension and osteoarthritis, three days of profuse diarrhoea and vomiting, now passing almost no urine and feeling weak.',

      section_1_clerking: {
        history:
          'Three days of profuse watery diarrhoea and vomiting after a family gathering. She has been unable to keep fluids down. Over the last 24 hours she has passed almost no urine. Today she feels profoundly weak, with tingling around the mouth, and her daughter noticed she seems muddled.',
        reading_the_clues: {
          diarrhoea_and_vomiting: 'Massive fluid loss — the PRE-RENAL cause.',
          almost_no_urine: 'OLIGURIA, conventionally under 0.5 mL/kg/hour or under about 400 mL/day. It means the kidneys are not being perfused, are damaged, or are obstructed.',
          profound_weakness_and_perioral_tingling: 'These are symptoms of HYPERKALAEMIA — a dangerously high potassium. It causes muscle weakness, paraesthesia and, before that gives much warning, cardiac arrest.',
          muddled: 'Uraemic encephalopathy, dehydration, or electrolyte disturbance.',
        },
        past_medical_history: 'Hypertension. Osteoarthritis of both knees. Type 2 diabetes, diet-controlled.',
        drug_history: {
          the_critical_combination:
            'RAMIPRIL 10 mg orally daily (an ACE inhibitor). BENDROFLUMETHIAZIDE 2.5 mg orally daily (a thiazide diuretic). IBUPROFEN 400 mg three times daily, bought over the counter for her knees — SHE DOES NOT CONSIDER THIS "MEDICATION" AND DID NOT MENTION IT UNTIL ASKED DIRECTLY.',
          the_triple_whammy:
            'ACE INHIBITOR + DIURETIC + NSAID. This combination is a well-described cause of avoidable acute kidney injury, and it works by attacking renal perfusion from three directions at once. The mechanism is explained in the next section. ALWAYS ASK ABOUT OVER-THE-COUNTER AND TRADITIONAL REMEDIES BY NAME — patients do not report them as drugs.',
        },
        vitals: 'BP 92/56 mmHg (hypotensive — her usual is 150/85). Pulse 58 and irregular (BRADYCARDIA IS OMINOUS HERE). Respiratory rate 20. Temperature 36.9. Saturation 97%. GCS 14/15.',
        examination:
          'Dry mucous membranes, reduced skin turgor, capillary refill 4 seconds, JVP NOT VISIBLE (consistent with volume depletion). Abdomen soft, non-tender. BLADDER NOT PALPABLE. Reduced power globally with reduced reflexes — a consequence of hyperkalaemia.',
      },

      section_2_mechanism: {
        the_three_categories_of_aki: {
          pre_renal: 'The kidney itself is fine, but not enough blood is reaching it. Causes: dehydration, haemorrhage, sepsis, heart failure, and drugs that impair renal blood flow. THE COMMONEST CATEGORY, and the most reversible.',
          intrinsic_renal: 'The kidney tissue itself is damaged — acute tubular necrosis (often the end result of prolonged pre-renal injury), glomerulonephritis, interstitial nephritis, vasculitis, rhabdomyolysis, or nephrotoxic drugs.',
          post_renal: 'Obstruction to urine flow — prostate, stones, tumour, blocked catheter. THE ONE THAT IS FULLY REVERSIBLE IF FOUND, and the one most often missed because nobody scans the bladder.',
        },
        how_the_triple_whammy_works: {
          the_normal_physiology:
            'Glomerular filtration depends on the pressure difference across the glomerulus, which is set by two arterioles. The AFFERENT (incoming) arteriole is kept dilated by PROSTAGLANDINS. The EFFERENT (outgoing) arteriole is kept constricted by ANGIOTENSIN II. Together they maintain filtration pressure even when blood pressure falls.',
          what_each_drug_does: 'The DIURETIC depletes volume, reducing renal blood flow. The NSAID blocks prostaglandins, so the AFFERENT arteriole constricts — less blood gets in. The ACE INHIBITOR blocks angiotensin II, so the EFFERENT arteriole dilates — pressure inside the glomerulus falls further. FILTRATION COLLAPSES.',
          plus_her_illness: 'Three days of diarrhoea and vomiting removed several more litres. The drugs had already removed her ability to compensate.',
        },
        why_the_potassium_rose: 'Potassium is excreted almost entirely by the kidney. When filtration collapses, it accumulates. The ACE inhibitor makes it worse by reducing aldosterone, the hormone that normally drives potassium excretion. Acidosis from poor perfusion drives more potassium out of cells into the blood.',
        why_hyperkalaemia_kills:
          'Potassium determines the resting membrane potential of cardiac cells. As it rises, the resting potential becomes less negative, sodium channels inactivate, conduction slows and the heart becomes electrically unstable — progressing through bradycardia and widening QRS complexes to a sine wave pattern and then asystole or ventricular fibrillation. It can happen with very little warning.',
      },

      section_3_differentials: {
        one_pre_renal_aki_with_hyperkalaemia: 'WORKING DIAGNOSIS. Supporting: massive fluid loss, hypotension, oliguria, the triple whammy, dry examination and absent JVP.',
        two_intrinsic_renal_disease: 'Supporting: NSAID use can cause interstitial nephritis. Against: no rash, fever or eosinophilia. Check urine dipstick — blood and protein together would suggest a glomerular cause.',
        three_post_renal_obstruction: 'Supporting: oliguria. Against: bladder not palpable. MUST STILL BE EXCLUDED WITH A BLADDER SCAN AND ULTRASOUND — obstruction is the fully reversible cause and is missed by assumption.',
        four_sepsis: 'Supporting: acute illness, hypotension. Against: afebrile with no source. Still send cultures.',
        five_primary_cardiac_cause_of_the_bradycardia: 'The bradycardia here is far more likely to be the hyperkalaemia than primary heart block — but the ECG will tell you, and it is the first thing you do.',
      },

      section_4_investigations: {
        the_ecg_comes_first: {
          why: 'BECAUSE HYPERKALAEMIA KILLS BEFORE ANY BLOOD RESULT COMES BACK. Her pulse is 58 and irregular in a patient with symptoms of hyperkalaemia. Do not wait for the laboratory.',
          the_progression_of_changes: 'Earliest: TALL, PEAKED, "TENTED" T WAVES, best seen in the praecordial leads. Then FLATTENING AND LOSS OF THE P WAVE as atrial conduction fails. Then PROLONGED PR INTERVAL. Then a WIDENING QRS COMPLEX. Then the QRS merges with the T wave to form a SINE WAVE — a pre-terminal pattern. Then ventricular fibrillation or asystole.',
          expected_here: 'Tall tented T waves, absent P waves and a broad QRS of 140 milliseconds (normal under 120). THIS IS A CARDIAC EMERGENCY.',
          the_caveat: 'The ECG is not perfectly sensitive — a normal ECG does NOT exclude dangerous hyperkalaemia. But an abnormal one mandates immediate treatment.',
        },
        urea_and_electrolytes: {
          expected: 'POTASSIUM 7.2 mmol/L (normal 3.5 to 5.0). Sodium 148. Urea 32.4. Creatinine 412 (her baseline 6 months ago was 88). Bicarbonate 15.',
          how_to_stage_the_aki:
            'KDIGO staging: Stage 1 is a creatinine rise of 1.5 to 1.9 times baseline, or 26.5 micromol/L or more in 48 hours. Stage 2 is 2.0 to 2.9 times baseline. Stage 3 is 3.0 times or more, or creatinine 354 or above, or needing dialysis. HERS IS 412 FROM A BASELINE OF 88 — that is more than 4.5 times, so STAGE 3.',
          the_key_teaching_point: 'AKI IS DEFINED BY CHANGE FROM BASELINE, NOT BY CROSSING A THRESHOLD. Always find the previous creatinine. A doubling within the "normal range" is still a serious injury.',
          urea_creatinine_ratio: 'Urea is raised disproportionately to creatinine, which supports a PRE-RENAL picture — the kidney is reabsorbing urea avidly along with sodium and water.',
        },
        urine_dipstick: 'The most important bedside renal test, and the most often skipped. BLOOD AND PROTEIN TOGETHER suggest a GLOMERULAR cause and change everything. Expected here: trace protein only, consistent with a pre-renal picture.',
        bladder_scan_and_ultrasound: 'BLADDER SCAN IMMEDIATELY — a simple bedside ultrasound measuring residual volume. Expected: under 50 mL, excluding outflow obstruction. Then a renal ULTRASOUND to exclude hydronephrosis and to assess kidney size — SMALL kidneys would indicate chronic disease rather than acute.',
        other_bloods: 'Full blood count, CRP, blood cultures, venous gas for a rapid potassium and pH, calcium, phosphate, creatine kinase (to exclude rhabdomyolysis if she has been on the floor), and a bone profile.',
        stool_culture: 'Given three days of diarrhoea, to identify the organism and consider haemolytic uraemic syndrome if there is bloody diarrhoea with anaemia and low platelets.',
      },

      section_5_management: {
        step_1_treat_the_potassium_now: {
          the_sequence: 'PROTECT the heart, SHIFT potassium into cells, then REMOVE it from the body. Three separate jobs, and the drugs do different ones.',
          a_protect_the_myocardium: {
            drug: 'CALCIUM GLUCONATE 10%, 10 to 30 mL intravenously over 5 to 10 minutes, through a large vein with cardiac monitoring. (Calcium chloride 10% 10 mL is an alternative with more elemental calcium but greater tissue toxicity if it extravasates, so it is usually reserved for central access or arrest.)',
            what_it_does: 'It ANTAGONISES the effect of potassium at the cardiac membrane, restoring the normal gradient and stabilising the myocardium.',
            the_critical_point: 'CALCIUM DOES NOT LOWER THE POTASSIUM AT ALL. It buys you time — roughly 30 to 60 minutes — during which you must give something that actually shifts or removes potassium. Repeat it if ECG changes persist.',
            caution: 'Use with great care in a patient on DIGOXIN, where rapid calcium has traditionally been said to precipitate an inexcitable "stone heart". Give it slowly and take toxicology advice.',
          },
          b_shift_potassium_into_cells: {
            insulin_and_glucose: {
              preparation: 'Give 10 UNITS of SOLUBLE INSULIN (Actrapid) in 50 mL of 50% GLUCOSE (or 250 mL of 10% glucose) intravenously over 15 to 30 minutes.',
              mechanism: 'Insulin drives potassium into cells via the sodium-potassium pump. The glucose is given ONLY to prevent hypoglycaemia — it is not treating anything itself.',
              onset_and_duration: 'Works within 15 minutes, lasts 4 to 6 hours.',
              the_essential_monitoring: 'CHECK CAPILLARY GLUCOSE HOURLY FOR AT LEAST 6 HOURS. Hypoglycaemia after insulin-dextrose for hyperkalaemia is common, is frequently missed once the crisis has passed, and has caused deaths.',
            },
            salbutamol: 'SALBUTAMOL 10 to 20 mg NEBULISED (a much higher dose than for asthma). Also drives potassium into cells, by a different receptor pathway, so its effect is ADDITIVE to insulin. Causes tremor and tachycardia. Not reliable as sole therapy — roughly a fifth of patients do not respond.',
          },
          c_remove_potassium_from_the_body: {
            fluid_and_correcting_the_cause: 'Restoring circulating volume restores renal perfusion, which is what actually allows potassium to be excreted. THIS IS THE DEFINITIVE TREATMENT IN A PRE-RENAL PICTURE.',
            potassium_binders: 'Newer oral binders such as sodium zirconium cyclosilicate or patiromer bind potassium in the gut and are used to lower it over hours. Older resins act too slowly to be useful acutely.',
            dialysis: 'For refractory hyperkalaemia — see the indications below.',
          },
        },
        step_2_fluid_resuscitation: {
          what: 'BALANCED CRYSTALLOID (for example Hartmann solution or Plasma-Lyte) or 0.9% SODIUM CHLORIDE.',
          the_nuance_worth_knowing:
            'Hartmann solution contains a small amount of potassium (about 5 mmol/L), which alarms people in hyperkalaemia. In practice it is generally SAFE and often preferable, because large volumes of 0.9% saline cause a hyperchloraemic acidosis which itself worsens hyperkalaemia. Follow local guidance, but understand the reasoning rather than reflexively avoiding it.',
            how_much: '500 mL boluses, reassessing after each — blood pressure, pulse, capillary refill, JVP, urine output and lung bases. Repeat until she is euvolaemic. DO NOT GIVE A FIXED VOLUME WITHOUT REASSESSING; over-filling a patient who becomes anuric causes pulmonary oedema.',
        },
        step_3_stop_the_nephrotoxins: {
          stop_now: 'RAMIPRIL (reduces glomerular filtration pressure and raises potassium). BENDROFLUMETHIAZIDE (depletes volume). IBUPROFEN (constricts the afferent arteriole).',
          also_review: 'Metformin if she were taking it, and any other renally cleared or nephrotoxic drug. Adjust doses of everything else for her current renal function.',
          the_conversation_at_discharge: 'She must be told clearly: DO NOT TAKE IBUPROFEN OR SIMILAR PAINKILLERS. Offer paracetamol and refer for knee assessment. And give SICK DAY RULES — hold the ACE inhibitor and diuretic during vomiting, diarrhoea or fever, and restart when eating and drinking normally. Written instructions.',
        },
        step_4_catheterise_and_measure: 'Insert a urinary catheter to measure output accurately hourly. Target above 0.5 mL/kg/hour. Note this is for MEASUREMENT — it does not treat anything.',
        indications_for_urgent_dialysis_aeiou:
          'A — ACIDOSIS, severe and refractory. E — ELECTROLYTES, refractory hyperkalaemia (the commonest true emergency indication). I — INTOXICATION with a dialysable poison such as salicylate, lithium, toxic alcohols or metformin. O — OVERLOAD, refractory pulmonary oedema. U — URAEMIA, with pericarditis, encephalopathy or unexplained bleeding from platelet dysfunction.',
        monitoring: 'Repeat potassium within 1 hour of treatment, then every 2 to 4 hours. HOURLY GLUCOSE FOR 6 HOURS after insulin-dextrose. Continuous cardiac monitoring until potassium is safely below 6.0. Hourly urine output. Daily urea, electrolytes and creatinine. Daily weight.',
      },

      section_6_teaching_points: {
        bonus_1_calcium_protects_but_does_not_lower:
          'This is the single most misunderstood point in hyperkalaemia. Calcium gluconate stabilises the cardiac membrane against the potassium — it does NOT reduce the potassium by a single millimole. If you give calcium and stop there, the patient still has a potassium of 7.2 and will arrest once the calcium wears off in 30 to 60 minutes. Always follow it with insulin-dextrose and treatment of the cause.',
        bonus_2_the_hypoglycaemia_that_follows:
          'Insulin-dextrose for hyperkalaemia frequently causes hypoglycaemia several hours later, once the emergency is over and attention has moved on. CHECK GLUCOSE HOURLY FOR AT LEAST 6 HOURS. This is a recognised cause of avoidable harm and death.',
        bonus_3_aki_is_defined_by_change_not_threshold:
          'Her creatinine of 412 is dramatic, but a rise from 60 to 130 is also a serious acute kidney injury even though 130 looks nearly normal. ALWAYS FIND THE PREVIOUS RESULT. This is also why creatinine is unreliable in the frail — a low muscle mass produces a low creatinine, so kidney function is worse than the number suggests.',
        bonus_4_the_triple_whammy_explained_by_arterioles:
          'The NSAID constricts the AFFERENT (incoming) arteriole by blocking prostaglandins. The ACE inhibitor dilates the EFFERENT (outgoing) arteriole by blocking angiotensin II. The diuretic empties the tank. Filtration pressure depends on all three, and this combination removes every compensatory mechanism at once.',
        trap_1: 'DO THE ECG FIRST. Hyperkalaemia kills before the laboratory result returns.',
        trap_2: 'A normal ECG does not exclude dangerous hyperkalaemia — but an abnormal one mandates immediate treatment.',
        trap_3: 'SCAN THE BLADDER in every case of oliguria. Obstruction is the fully reversible cause and is missed by assumption.',
        trap_4: 'Ask about over-the-counter and traditional remedies BY NAME. Patients do not consider ibuprofen to be medication.',
        trap_5: 'Do not give a fixed volume of fluid without reassessing. If she becomes anuric, continued fluid causes pulmonary oedema.',
        trap_6: 'Give sick day rules in writing before discharge — holding the ACE inhibitor and diuretic during vomiting or diarrhoea prevents the next admission.',
        one_line_summary: 'Stage 3 pre-renal acute kidney injury with life-threatening hyperkalaemia from the triple whammy. ECG first, calcium to protect, insulin-dextrose to shift, fluid and stopping the drugs to fix it — and hourly glucose for six hours afterwards.',
      },
    },
    warnings: [
      'DO THE ECG FIRST in suspected hyperkalaemia — it kills before the laboratory result returns.',
      'CALCIUM PROTECTS THE HEART BUT DOES NOT LOWER THE POTASSIUM. It buys 30 to 60 minutes and must be followed by something that shifts or removes potassium.',
      'Check glucose HOURLY FOR AT LEAST 6 HOURS after insulin-dextrose — the resulting hypoglycaemia is a recognised cause of death.',
      'A normal ECG does NOT exclude dangerous hyperkalaemia.',
      'SCAN THE BLADDER in every case of oliguria — obstruction is the fully reversible cause.',
      'Ask about over-the-counter and traditional remedies BY NAME. Patients do not report ibuprofen as medication.',
      'AKI is defined by CHANGE FROM BASELINE, not by crossing a threshold. Always find the previous creatinine.',
      'Do not give fixed fluid volumes without reassessing — an anuric patient will develop pulmonary oedema.',
      'Use calcium with great caution in a patient on digoxin; take toxicology advice.',
      'Give written SICK DAY RULES before discharge — hold the ACE inhibitor and diuretic during vomiting, diarrhoea or fever.',
      'Doses here are teaching examples for an adult. Check your local formulary and hyperkalaemia protocol before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Hyperkalaemia treatment thresholds, fluid choice and binder availability differ by service.',
      'Potassium binder availability and dialysis access vary enormously between settings.',
    ],
    cards: [
      { q: 'Name the three categories of acute kidney injury.', a: 'Pre-renal (poor perfusion), intrinsic renal (kidney tissue damage), post-renal (obstruction).' },
      { q: 'What is the triple whammy and how does it work?', a: 'ACE inhibitor, diuretic and NSAID — the NSAID constricts the afferent arteriole, the ACE inhibitor dilates the efferent, and the diuretic depletes volume.' },
      { q: 'List the ECG changes of hyperkalaemia in order.', a: 'Tented T waves, loss of P waves, prolonged PR, widening QRS, sine wave, then arrest.' },
      { q: 'Does calcium gluconate lower the potassium?', a: 'No — it stabilises the cardiac membrane for 30 to 60 minutes only. You must follow it with something that shifts or removes potassium.' },
      { q: 'How is insulin-dextrose given for hyperkalaemia?', a: '10 units of soluble insulin in 50 mL of 50% glucose IV over 15 to 30 minutes.' },
      { q: 'What must be monitored after insulin-dextrose, and for how long?', a: 'Capillary glucose hourly for at least 6 hours — delayed hypoglycaemia is common and has killed patients.' },
      { q: 'What dose of nebulised salbutamol is used for hyperkalaemia?', a: '10 to 20 mg — much higher than the asthma dose.' },
      { q: 'How is AKI staged, and what defines it?', a: 'KDIGO stages by creatinine rise from BASELINE — change, not a threshold. Stage 3 is 3 times baseline or creatinine 354 or above.' },
      { q: 'Recite AEIOU for dialysis indications.', a: 'Acidosis, Electrolytes, Intoxication, Overload, Uraemia.' },
      { q: 'What single bedside test is most often skipped in oliguria?', a: 'The urine dipstick — blood and protein together suggest a glomerular cause.' },
    ],
    checks: [
      'ECG performed immediately, before waiting for laboratory potassium',
      'Cardiac monitoring attached',
      'Calcium given if ECG changes present, and repeated if they persist',
      'Insulin-dextrose given and hourly glucose started for 6 hours',
      'Bladder scanned to exclude obstruction',
      'Urine dipstick performed',
      'Previous creatinine found and AKI staged',
      'All nephrotoxics stopped and documented',
      'Fluid given in boluses with reassessment after each',
      'Dialysis indications assessed against AEIOU',
      'Written sick day rules given before discharge',
    ],
    related: ['creatinine_egfr_and_why_creatine_is_a_different_test'],
  },
];
