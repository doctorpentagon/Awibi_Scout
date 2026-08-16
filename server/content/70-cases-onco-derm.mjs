/**
 * CASE SCENARIOS — Hypercalcaemia of malignancy and Stevens-Johnson/TEN.
 *
 * Batch 3, part 4.
 */

export default [
  {
    id: 'AS-CASE-0027',
    type: 'case',
    specialty: 'Medicine — Oncology',
    teaching_case: true,
    title: 'CASE: Confused, Constipated and Drinking Constantly — Calcium 3.8',
    short: 'Case: hypercalcaemia of malignancy',
    summary:
      'A 63-year-old with lung cancer, confusion and a corrected calcium of 3.8 mmol/L. Teaches why fluid comes before the bisphosphonate and not with it, why the calcium must be CORRECTED for albumin, and why furosemide is no longer part of the treatment.',
    domains: ['oncology', 'endocrinology', 'emergency_medicine', 'nephrology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case hypercalcaemia', 'hypercalcaemia of malignancy case', 'corrected calcium',
      'zoledronic acid case', 'pamidronate', 'denosumab hypercalcaemia', 'pthrp',
      'bones stones groans moans', 'calcitonin hypercalcaemia',
    ],
    terms: [
      'case', 'hypercalcaemia', 'corrected calcium', 'albumin correction', 'pthrp',
      'parathyroid hormone related peptide', 'zoledronic acid', 'pamidronate', 'denosumab',
      'calcitonin', 'osteonecrosis of the jaw', 'nephrogenic diabetes insipidus',
      'primary hyperparathyroidism', 'sarcoidosis hypercalcaemia', 'short qt',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '63-year-old woman with squamous cell lung cancer, brought in by her daughter with a week of increasing confusion, constant thirst, vomiting and no bowel movement for six days. Her corrected calcium is 3.8 mmol/L (normal 2.20 to 2.60).',

      section_1_clerking: {
        history:
          'Over a week she has become progressively confused, drowsy and low in mood. She is drinking constantly and passing large volumes of urine, including at night. She has vomited several times, eaten almost nothing, and has not opened her bowels for six days. Her daughter says "she is just not herself" and initially assumed the cancer was progressing in her brain.',
        the_mnemonic_and_what_each_part_actually_means: {
          the_phrase: 'BONES, STONES, ABDOMINAL GROANS AND PSYCHIC MOANS — with thirst and polyuria.',
          bones: 'BONE PAIN, from the metastases or from the bone resorption driving the calcium up.',
          stones: 'RENAL STONES, from chronic hypercalciuria — more a feature of chronic hyperparathyroidism than of acute malignant hypercalcaemia.',
          abdominal_groans: 'CONSTIPATION, nausea, vomiting, anorexia and abdominal pain. CALCIUM REDUCES SMOOTH MUSCLE EXCITABILITY, so gut motility falls — hence six days without a bowel movement. Pancreatitis and peptic ulceration also occur.',
          psychic_moans: 'CONFUSION, drowsiness, depression, fatigue, and in severe cases coma. CALCIUM ALTERS NEURONAL MEMBRANE EXCITABILITY. THIS IS THE FEATURE MOST OFTEN MISATTRIBUTED — confusion in a cancer patient gets blamed on brain metastases, opioids or "just the cancer" while a completely reversible metabolic cause sits untreated on the blood form.',
          thirst_and_polyuria: {
            the_mechanism: 'HIGH CALCIUM CAUSES NEPHROGENIC DIABETES INSIPIDUS — it interferes with the action of antidiuretic hormone on the collecting duct, so the kidney cannot concentrate urine.',
            the_consequence:
              'THE PATIENT PASSES LARGE VOLUMES OF DILUTE URINE AND BECOMES PROFOUNDLY DEHYDRATED. Dehydration reduces renal perfusion, so the kidney excretes LESS calcium, so the calcium rises further, causing more polyuria. THIS VICIOUS CYCLE IS THE ENTIRE REASON FLUID IS THE FIRST TREATMENT — you are breaking the loop, not just "rehydrating".',
          },
        },
        past_medical_history: 'Squamous cell carcinoma of the lung, diagnosed 8 months ago, on palliative chemotherapy. Hypertension. Osteoarthritis.',
        drug_history: 'THE DRUG HISTORY IS PART OF THE DIAGNOSIS. Review for: THIAZIDE DIURETICS, which reduce urinary calcium excretion and raise calcium · LITHIUM · CALCIUM AND VITAMIN D SUPPLEMENTS, frequently taken over the counter and not mentioned · high-dose VITAMIN A · and antacids. She takes BENDROFLUMETHIAZIDE and a calcium-vitamin D supplement bought herself — BOTH MUST STOP.',
        vitals: 'BP 96/58 mmHg. Pulse 108. Respiratory rate 18. Temperature 36.4. Saturation 96%. GCS 13. Glucose 6.2. Dry mucous membranes, reduced skin turgor, capillary refill 3 seconds.',
        examination: 'Drowsy, disorientated in time and place. Clinically DEHYDRATED. Abdomen distended with sluggish bowel sounds — no peritonism. No focal neurological deficit. Reduced power globally, consistent with generalised weakness rather than a focal lesion. Chest: reduced air entry at the right base. NO papilloedema.',
        ecg: 'A SHORT QT INTERVAL — the characteristic change of hypercalcaemia. Severe hypercalcaemia also causes bradyarrhythmia, bundle branch block, and in extreme cases cardiac arrest. Do an ECG in every significant hypercalcaemia.',
      },

      section_2_mechanism: {
        the_correction_that_must_be_done_first: {
          why: 'Roughly HALF of circulating calcium is BOUND TO ALBUMIN and is biologically INACTIVE. Only the IONISED (free) fraction is active. A patient with a low albumin — extremely common in cancer, malnutrition, liver disease and critical illness — has a LOW TOTAL calcium even when the active ionised fraction is high.',
          the_consequence:
            'AN UNCORRECTED CALCIUM IN A HYPOALBUMINAEMIC CANCER PATIENT CAN LOOK NORMAL WHILE THE PATIENT IS SEVERELY HYPERCALCAEMIC. THIS IS THE COMMONEST WAY THE DIAGNOSIS IS MISSED.',
          the_formula: 'A widely used correction: CORRECTED CALCIUM = MEASURED CALCIUM + 0.02 x (40 minus ALBUMIN in g/L). So a measured calcium of 2.60 with an albumin of 25 corrects to 2.60 + 0.02 x 15 = 2.90 mmol/L — a normal-looking result that is in fact clearly abnormal. ALWAYS USE THE CORRECTED VALUE, and where available, an IONISED CALCIUM is more reliable still.',
        },
        the_two_main_malignant_mechanisms: {
          humoral_hypercalcaemia_of_malignancy: {
            frequency: 'The commonest mechanism, around 80% of malignant hypercalcaemia.',
            the_mechanism:
              'The tumour secretes PARATHYROID HORMONE-RELATED PEPTIDE (PTHrP). It is a different molecule from parathyroid hormone but binds the SAME RECEPTOR, so it does the same things: increases bone resorption, increases renal calcium reabsorption, and increases phosphate excretion.',
            the_tumours: 'SQUAMOUS CELL CARCINOMAS above all — lung, head and neck, oesophagus, cervix — and renal cell carcinoma, bladder and ovary. SHE HAS SQUAMOUS CELL LUNG CANCER, THE CLASSIC CAUSE.',
            the_biochemical_signature: 'PTH is SUPPRESSED (because the calcium is high and the feedback loop works normally), PTHrP is RAISED, and phosphate is LOW.',
          },
          local_osteolytic_hypercalcaemia: 'Around 20%. Extensive bone metastases release cytokines that activate OSTEOCLASTS locally, dissolving bone and releasing calcium. Classic in MYELOMA and in breast cancer with extensive bone disease.',
          the_third_mechanism_worth_knowing: 'Some LYMPHOMAS produce excess 1-alpha-hydroxylase, converting vitamin D to its active form and increasing gut calcium absorption. THE SAME MECHANISM OPERATES IN SARCOIDOSIS AND OTHER GRANULOMATOUS DISEASE — and this is the one type of hypercalcaemia that responds well to STEROIDS, which is why the mechanism is worth remembering.',
        },
        why_calcium_causes_these_symptoms: 'Extracellular calcium stabilises neuronal and muscle membranes by altering the threshold for depolarisation. HIGH calcium RAISES the threshold, so tissues become LESS excitable — hence drowsiness, confusion, weakness, constipation and a short QT. LOW calcium does the reverse, causing tetany and a long QT. Understanding the direction removes the need to memorise either list.',
      },

      section_3_differentials: {
        the_first_split: 'MEASURE THE PARATHYROID HORMONE. IT SEPARATES THE ENTIRE DIFFERENTIAL IN ONE TEST.',
        pth_raised_or_inappropriately_normal: {
          meaning: 'The parathyroid gland is driving it — the feedback loop is broken.',
          causes: 'PRIMARY HYPERPARATHYROIDISM, the commonest cause of hypercalcaemia in the community and often an incidental finding in a well patient. Also tertiary hyperparathyroidism in chronic kidney disease, lithium, and FAMILIAL HYPOCALCIURIC HYPERCALCAEMIA — a benign inherited condition with a LOW urinary calcium, which must be identified because it needs NO treatment and patients have been subjected to unnecessary parathyroid surgery.',
        },
        pth_suppressed: {
          meaning: 'Something other than the parathyroid gland is driving it, and the gland is appropriately switched off.',
          causes: 'MALIGNANCY, which is the commonest cause of hypercalcaemia in HOSPITAL inpatients · granulomatous disease such as SARCOIDOSIS and TUBERCULOSIS · VITAMIN D TOXICITY · THYROTOXICOSIS · ADRENAL INSUFFICIENCY · immobilisation · milk-alkali syndrome · and drugs including thiazides and vitamin A.',
        },
        the_useful_generalisation:
          'HYPERCALCAEMIA IN A WELL OUTPATIENT IS USUALLY PRIMARY HYPERPARATHYROIDISM — chronic, mild and often asymptomatic. HYPERCALCAEMIA IN AN UNWELL INPATIENT IS USUALLY MALIGNANCY — acute, severe and symptomatic. The tempo and the setting predict the cause before any test.',
        the_prognostic_reality: 'HYPERCALCAEMIA OF MALIGNANCY IS A POOR PROGNOSTIC SIGN, with median survival historically measured in months. IT IS STILL TREATED, because treatment relieves genuinely miserable symptoms — confusion, vomiting, constipation, thirst — and restores the patient to themselves. But the conversation about overall goals of care belongs in this admission, not the next one.',
      },

      section_4_investigations: {
        the_essential_panel: 'CORRECTED CALCIUM with ALBUMIN — or ionised calcium. PARATHYROID HORMONE, taken BEFORE treatment, because it splits the differential. PHOSPHATE — low in PTHrP-mediated disease and in hyperparathyroidism, high in vitamin D excess. MAGNESIUM. UREA, CREATININE AND ELECTROLYTES for acute kidney injury, which is almost universal here. ALKALINE PHOSPHATASE, raised with bone metastases. Full blood count. VITAMIN D. ECG.',
        additional_tests_by_suspicion: 'PTHrP where available, confirming the humoral mechanism. MYELOMA SCREEN — serum protein electrophoresis, free light chains and urinary Bence-Jones protein — MANDATORY in unexplained hypercalcaemia, particularly with anaemia, renal impairment and bone pain. THYROID FUNCTION. SHORT SYNACTHEN TEST if adrenal insufficiency is possible. ACE and imaging for sarcoidosis. 24-HOUR URINARY CALCIUM if familial hypocalciuric hypercalcaemia is suspected — the calcium:creatinine clearance ratio is characteristically LOW.',
        imaging: 'Staging or restaging imaging as clinically indicated. A skeletal survey or other imaging for myeloma if suspected. Imaging is NOT needed before treatment begins.',
      },

      section_5_management: {
        the_order_which_is_the_whole_lesson: 'FLUID FIRST. BISPHOSPHONATE SECOND, AND ONLY ONCE REHYDRATED. THE ORDER IS NOT INTERCHANGEABLE.',
        a_intravenous_fluid: {
          the_regimen: 'SODIUM CHLORIDE 0.9% — typically 3 to 4 litres in the first 24 hours, adjusted for age, cardiac and renal function. In a frail patient with heart failure, less and slower with closer monitoring.',
          why_it_works_three_ways: '1. It CORRECTS THE DEHYDRATION caused by nephrogenic diabetes insipidus. 2. It RESTORES RENAL PERFUSION AND GLOMERULAR FILTRATION, so the kidney can excrete calcium again. 3. SODIUM AND CALCIUM COMPETE FOR REABSORPTION IN THE PROXIMAL TUBULE AND LOOP OF HENLE — delivering a large sodium load therefore INCREASES CALCIUM EXCRETION directly. That third point is why isotonic SALINE specifically is used, rather than glucose.',
          monitoring: 'Fluid balance, daily weight, urea and electrolytes at least daily, and careful assessment for fluid overload. Recheck the calcium after rehydration — it often falls substantially with fluid alone.',
        },
        b_why_furosemide_is_no_longer_routine: {
          the_old_teaching: 'Loop diuretics were given alongside fluid to promote calciuresis, on the reasoning that furosemide blocks calcium reabsorption in the loop of Henle.',
          what_changed:
            'THE EVIDENCE FOR BENEFIT IS POOR, AND THE HARM IS REAL. A patient who is already profoundly volume-deplete is given a diuretic, WORSENING THE DEHYDRATION THAT IS DRIVING THE HYPERCALCAEMIA — the opposite of what is needed. It also causes potassium and magnesium loss.',
          current_practice: 'FUROSEMIDE IS RESERVED FOR MANAGING FLUID OVERLOAD ONCE THE PATIENT IS FULLY REHYDRATED — for example in heart failure or renal impairment where the fluid load cannot be tolerated. IT IS NOT A TREATMENT FOR THE HYPERCALCAEMIA ITSELF. This is a genuine reversal of older teaching and is frequently got wrong.',
        },
        c_bisphosphonate: {
          drug: 'ZOLEDRONIC ACID 4 mg intravenously over at least 15 minutes, DOSE-ADJUSTED FOR RENAL FUNCTION. Alternatively PAMIDRONATE 30 to 90 mg intravenously over 2 to 4 hours, dosed according to the calcium level.',
          mechanism: 'Bisphosphonates bind to bone mineral and are taken up by OSTEOCLASTS, in which they inhibit the enzyme farnesyl pyrophosphate synthase and induce apoptosis. THEY THEREFORE SWITCH OFF THE BONE RESORPTION THAT IS RELEASING THE CALCIUM — treating the source rather than the level.',
          the_timing_rule_that_matters:
            'GIVE IT ONLY AFTER ADEQUATE REHYDRATION. Bisphosphonates are NEPHROTOXIC, and giving one to a dehydrated patient with acute kidney injury risks worsening renal failure. Rehydration first is not sequencing pedantry — it is what makes the drug safe.',
          the_onset_that_must_be_explained:
            'IT TAKES 2 TO 4 DAYS TO WORK, with the maximum effect at 4 to 7 days, and the effect lasts 2 to 4 weeks. DO NOT REDOSE IN 24 HOURS BECAUSE THE CALCIUM HAS NOT FALLEN — that is the expected time course, and repeat dosing too early risks toxicity. Explain this to the team and to the family, or someone will conclude the drug has failed.',
          adverse_effects: 'An ACUTE PHASE REACTION with fever, myalgia and flu-like symptoms in the first 48 hours, common and self-limiting. HYPOCALCAEMIA — overshoot, particularly in vitamin D deficiency, so check vitamin D and monitor calcium afterwards. Renal impairment. OSTEONECROSIS OF THE JAW with repeated use — arrange a dental review before long-term therapy where the clinical situation permits.',
        },
        d_denosumab: 'A monoclonal antibody against RANK LIGAND, blocking osteoclast formation and activity. USEFUL IN BISPHOSPHONATE-REFRACTORY HYPERCALCAEMIA AND IN SIGNIFICANT RENAL IMPAIRMENT, WHERE BISPHOSPHONATES ARE PROBLEMATIC — a genuinely important niche. It causes hypocalcaemia more readily than bisphosphonates, so calcium and vitamin D status must be checked and monitored closely.',
        e_calcitonin_for_the_first_48_hours: 'CALCITONIN inhibits osteoclasts and increases renal calcium excretion. ITS VALUE IS SPEED — it works within 4 TO 6 HOURS, far faster than a bisphosphonate. Use it in SEVERE, SYMPTOMATIC hypercalcaemia to bridge the gap while the bisphosphonate takes effect. TACHYPHYLAXIS DEVELOPS WITHIN 48 HOURS — the effect wears off as receptors downregulate — so it is a bridge, never a treatment in its own right.',
        f_steroids_where_they_belong: 'PREDNISOLONE is effective ONLY in hypercalcaemia driven by EXCESS ACTIVE VITAMIN D — lymphoma, myeloma, sarcoidosis, tuberculosis and vitamin D toxicity — because it reduces 1-alpha-hydroxylase activity and gut calcium absorption. IT DOES NOT WORK in PTHrP-mediated hypercalcaemia of solid tumours, which is her situation. Knowing which mechanism you are treating tells you whether the steroid is useful or pointless.',
        g_dialysis: 'For life-threatening hypercalcaemia with renal failure or when fluid cannot be given safely. Rarely needed but decisive when it is.',
        h_stop_the_contributing_drugs: 'STOP THE THIAZIDE. STOP THE CALCIUM AND VITAMIN D SUPPLEMENT. Review lithium and any vitamin A. These are removable causes sitting on the drug chart, and stopping them costs nothing.',
        i_treat_the_underlying_cancer_and_have_the_conversation: {
          the_cancer: 'The definitive treatment for hypercalcaemia of malignancy is control of the malignancy. Where systemic anticancer treatment is possible, it is the most durable answer.',
          the_conversation:
            'Hypercalcaemia of malignancy carries a poor prognosis. TREATING IT IS STILL RIGHT — it relieves confusion, vomiting, constipation and thirst, and gives the patient back their clarity and dignity. But this admission is the right moment to discuss goals of care, what she would want if it recurs, preferred place of care, and advance planning. Involve specialist palliative care EARLY, for symptom control and support, not only at the end.',
          recurrence: 'It commonly recurs as the bisphosphonate effect wears off after 2 to 4 weeks. Plan monitoring, agree in advance whether repeat treatment is appropriate, and document that decision so it is not remade in a crisis at 3 a.m.',
        },
      },

      section_6_teaching_points: {
        bonus_1_always_correct_for_albumin:
          'Half of circulating calcium is bound to albumin and inactive. In a hypoalbuminaemic cancer patient the total calcium can look normal while the patient is severely hypercalcaemic. Corrected calcium = measured + 0.02 x (40 minus albumin). This is the commonest reason the diagnosis is missed.',
        bonus_2_fluid_before_bisphosphonate_always:
          'Fluid corrects the dehydration, restores glomerular filtration, and delivers a sodium load that competes with calcium for tubular reabsorption. It also makes the bisphosphonate safe, because bisphosphonates are nephrotoxic and a dehydrated patient with acute kidney injury is exactly the wrong recipient.',
        bonus_3_furosemide_is_no_longer_part_of_treatment:
          'The evidence for benefit is poor and it worsens the dehydration that is driving the hypercalcaemia. Reserve it for fluid overload AFTER full rehydration. This is a real reversal of older teaching.',
        bonus_4_the_bisphosphonate_takes_days_not_hours:
          'Two to four days to work, maximum at 4 to 7 days, lasting 2 to 4 weeks. Calcitonin bridges the gap, working within 4 to 6 hours, but develops tachyphylaxis within 48 hours. Redosing a bisphosphonate at 24 hours because "it has not worked" is a misunderstanding of its pharmacology.',
        bonus_5_the_pth_splits_the_whole_differential:
          'RAISED or inappropriately normal means the parathyroid is driving it — hyperparathyroidism, lithium, familial hypocalciuric hypercalcaemia. SUPPRESSED means something else is — malignancy, granulomatous disease, vitamin D excess, thyrotoxicosis. Take it BEFORE treatment.',
        bonus_6_the_vicious_cycle_explains_the_treatment:
          'High calcium causes nephrogenic diabetes insipidus, which causes dehydration, which reduces renal calcium excretion, which raises calcium further. Fluid breaks the loop. Once you see the cycle, the treatment order is obvious rather than memorised.',
        trap_1: 'Do not blame confusion in a cancer patient on brain metastases or opioids without checking a corrected calcium. This is a completely reversible cause.',
        trap_2: 'Steroids only work in vitamin D-mediated hypercalcaemia — lymphoma, myeloma, sarcoidosis. They are useless for PTHrP-driven solid tumour hypercalcaemia.',
        trap_3: 'Stop the thiazide and any calcium or vitamin D supplement — patients rarely mention over-the-counter supplements.',
        trap_4: 'Send a myeloma screen in any unexplained hypercalcaemia, particularly with anaemia, renal impairment and bone pain.',
        trap_5: 'Identify familial hypocalciuric hypercalcaemia by a low urinary calcium — it needs no treatment, and patients have had unnecessary parathyroid surgery.',
        trap_6: 'Consider denosumab where renal function precludes a bisphosphonate.',
        trap_7: 'Watch for post-treatment HYPOCALCAEMIA, especially in vitamin D deficiency.',
        one_line_summary: 'Hypercalcaemia of malignancy from squamous cell lung cancer, PTHrP-mediated. Three to four litres of saline first, PTH before treatment, zoledronic acid only once rehydrated, calcitonin to bridge the first 48 hours, stop the thiazide and the supplement — and expect the calcium to take days, not hours.',
      },
    },
    warnings: [
      'ALWAYS USE THE CORRECTED CALCIUM — a hypoalbuminaemic cancer patient can have a normal-looking total calcium while severely hypercalcaemic.',
      'FLUID FIRST, BISPHOSPHONATE SECOND — the order is not interchangeable. Bisphosphonates are nephrotoxic and unsafe in a dehydrated patient.',
      'FUROSEMIDE IS NO LONGER PART OF TREATMENT — it worsens the dehydration driving the hypercalcaemia. Reserve it for overload after rehydration.',
      'The bisphosphonate takes 2 to 4 DAYS to work — do NOT redose at 24 hours because the calcium has not fallen.',
      'CALCITONIN works in 4 to 6 hours but develops tachyphylaxis within 48 hours — it is a bridge, not a treatment.',
      'TAKE PARATHYROID HORMONE BEFORE TREATMENT — it splits the entire differential in one test.',
      'Do NOT blame confusion in a cancer patient on brain metastases or opioids without checking a corrected calcium.',
      'STEROIDS only work in vitamin D-mediated hypercalcaemia — lymphoma, myeloma, sarcoidosis. Useless in PTHrP-driven solid tumours.',
      'STOP the thiazide and any calcium or vitamin D supplement — patients rarely mention over-the-counter supplements.',
      'Send a MYELOMA SCREEN in unexplained hypercalcaemia, especially with anaemia, renal impairment and bone pain.',
      'Identify familial hypocalciuric hypercalcaemia by a LOW urinary calcium — it needs no treatment.',
      'Consider DENOSUMAB where renal impairment precludes a bisphosphonate.',
      'Watch for post-treatment HYPOCALCAEMIA, particularly in vitamin D deficiency.',
      'Do an ECG — hypercalcaemia shortens the QT and causes bradyarrhythmia.',
      'Doses here are teaching examples. Follow your local oncology and renal guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Fluid volumes, bisphosphonate choice and renal dose adjustments vary and require local guidance.',
      'The albumin correction formula is an approximation; ionised calcium is more reliable where available.',
    ],
    cards: [
      { q: 'Give the albumin correction formula.', a: 'Corrected calcium = measured calcium + 0.02 x (40 minus albumin in g/L).' },
      { q: 'Why is fluid the first treatment?', a: 'It corrects dehydration, restores glomerular filtration, and delivers sodium that competes with calcium for tubular reabsorption.' },
      { q: 'Why is furosemide no longer used?', a: 'Poor evidence of benefit, and it worsens the dehydration that is driving the hypercalcaemia.' },
      { q: 'How long does a bisphosphonate take to work?', a: '2 to 4 days, maximum at 4 to 7 days, lasting 2 to 4 weeks.' },
      { q: 'What is the role of calcitonin?', a: 'A bridge — it works in 4 to 6 hours but develops tachyphylaxis within 48 hours.' },
      { q: 'What does the PTH result tell you?', a: 'Raised or inappropriately normal means parathyroid-driven; suppressed means malignancy, granulomatous disease or vitamin D excess.' },
      { q: 'What is the commonest malignant mechanism?', a: 'PTHrP secretion — humoral hypercalcaemia, about 80%, classically in squamous cell carcinoma.' },
      { q: 'Which hypercalcaemias respond to steroids?', a: 'Vitamin D-mediated ones — lymphoma, myeloma, sarcoidosis, tuberculosis, vitamin D toxicity.' },
      { q: 'Why does hypercalcaemia cause polyuria?', a: 'It causes nephrogenic diabetes insipidus by impairing ADH action on the collecting duct.' },
      { q: 'Describe the vicious cycle.', a: 'High calcium causes polyuria and dehydration, which reduces renal calcium excretion, which raises calcium further.' },
      { q: 'Which drugs on the chart can cause it?', a: 'Thiazides, lithium, calcium and vitamin D supplements, high-dose vitamin A, antacids.' },
      { q: 'When is denosumab preferred?', a: 'Bisphosphonate-refractory hypercalcaemia and significant renal impairment.' },
    ],
    checks: [
      'Calcium corrected for albumin',
      'PTH sent BEFORE treatment',
      'Phosphate, magnesium, renal function and ALP checked',
      'ECG performed',
      'Myeloma screen sent if cause unclear',
      'Intravenous saline started as first treatment',
      'Furosemide withheld unless managing established overload',
      'Bisphosphonate given only after rehydration, renally dose-adjusted',
      'Calcitonin considered as a bridge in severe symptomatic disease',
      'Thiazide and calcium/vitamin D supplement stopped',
      'Steroid used only if a vitamin D-mediated mechanism',
      'Calcium monitored for post-treatment hypocalcaemia',
      'Goals of care discussed and palliative care involved early',
      'Recurrence plan documented',
    ],
    related: ['calcium_homeostasis_hypercalcaemia_and_hypocalcaemia'],
  },

  {
    id: 'AS-CASE-0028',
    type: 'case',
    specialty: 'Medicine — Dermatology',
    teaching_case: true,
    title: 'CASE: A Painful Rash and Mouth Ulcers Two Weeks After Starting a New Drug',
    short: 'Case: Stevens-Johnson syndrome and toxic epidermal necrolysis',
    summary:
      'A 34-year-old two weeks into carbamazepine with painful skin, mucosal ulceration and blistering. Teaches why skin PAIN precedes the rash, what Nikolsky sign means, why steroids remain contentious, and why this is managed like a burn.',
    domains: ['dermatology', 'emergency_medicine', 'critical_care', 'pharmacology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case stevens johnson', 'sjs ten case', 'toxic epidermal necrolysis case',
      'nikolsky sign', 'scorten', 'drug eruption case', 'carbamazepine rash',
      'hla-b 1502', 'erythema multiforme versus sjs', 'dress syndrome',
    ],
    terms: [
      'case', 'stevens johnson syndrome', 'toxic epidermal necrolysis', 'nikolsky sign',
      'scorten', 'epidermal detachment', 'mucosal involvement', 'carbamazepine',
      'allopurinol', 'lamotrigine', 'hla-b 1502', 'dress', 'ciclosporin',
      'intravenous immunoglobulin', 'burns unit', 'body surface area',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '34-year-old man started on carbamazepine 14 days ago for trigeminal neuralgia, presenting with 3 days of fever and painful skin, and 24 hours of blistering with mouth and eye involvement. About 12% of his body surface is detached.',

      section_1_clerking: {
        history:
          'Started carbamazepine 14 days ago. Four days ago he developed fever, sore throat and a gritty burning sensation in both eyes. Three days ago his skin began to HURT — a burning, tender feeling on his chest and face BEFORE any rash appeared. Two days ago a dusky red rash appeared on his face and trunk. Yesterday the skin began to blister and peel, his mouth became too painful to eat or drink, and he could not open his eyes properly.',
        the_symptom_that_makes_the_early_diagnosis: {
          skin_pain_before_the_rash:
            'PAINFUL SKIN OUT OF PROPORTION TO WHAT IS VISIBLE, PRECEDING THE RASH, IS THE EARLIEST AND MOST IMPORTANT WARNING SIGN. Most drug rashes ITCH. THIS ONE HURTS — because the epidermis is undergoing necrosis before it separates. A patient describing burning, tender skin days into a new drug should be assessed urgently, even if the skin looks unremarkable.',
          why_it_matters: 'It is the only symptom that appears while the disease is still potentially limited — before detachment, before mucosal destruction, before the patient needs a burns unit. Recognising it is the difference between stopping the drug on day 3 and stopping it on day 6.',
        },
        the_prodrome: 'Fever, sore throat, malaise, cough and gritty eyes for 1 to 3 days before the rash — frequently misdiagnosed as a viral illness or an upper respiratory infection, and the patient is sent home. In someone recently started on a high-risk drug, THIS PRODROME IS THE DISEASE ANNOUNCING ITSELF.',
        the_drug_history_which_is_the_diagnosis: {
          the_timing_rule: 'MOST CASES BEGIN 4 DAYS TO 4 WEEKS AFTER STARTING THE CULPRIT DRUG, most commonly around 1 to 3 weeks. HIS ONSET AT 14 DAYS IS ENTIRELY TYPICAL. A drug started on the day of the rash is very unlikely to be the cause; a drug started a fortnight ago is prime suspect.',
          the_high_risk_drugs: 'ANTICONVULSANTS — CARBAMAZEPINE, LAMOTRIGINE, PHENYTOIN, PHENOBARBITAL · ALLOPURINOL, one of the commonest causes worldwide · SULFONAMIDES including CO-TRIMOXAZOLE · NEVIRAPINE · NSAIDs, particularly the oxicam class · and some antibiotics including penicillins and quinolones. Also consider MYCOPLASMA PNEUMONIAE infection, which causes a similar mucocutaneous syndrome particularly in children and young adults.',
          the_practical_action: 'LIST EVERY DRUG STARTED IN THE PRECEDING 8 WEEKS with exact start dates, including over-the-counter medicines, herbal preparations and anything borrowed from a relative. Draw a timeline. THE TIMELINE IS THE DIAGNOSTIC INSTRUMENT.',
        },
        vitals: 'BP 104/62 mmHg. Pulse 118. Respiratory rate 24. Temperature 38.7. Saturation 96%. Urine output reduced. Glucose 7.4. Weight 72 kg.',
        examination: {
          skin: 'DUSKY ERYTHEMATOUS MACULES WITH DARKER CENTRES coalescing over the face, neck, upper trunk and proximal limbs. FLACCID BLISTERS with sheets of detached epidermis over the chest and back. ESTIMATED DETACHED AREA 12% OF BODY SURFACE. The skin is exquisitely TENDER.',
          nikolsky_sign: {
            how_to_elicit: 'Apply gentle LATERAL (shearing) pressure with a finger to apparently normal-looking skin adjacent to a lesion.',
            positive_result: 'The epidermis SHEARS OFF, sliding away from the dermis.',
            what_it_means: 'THE EPIDERMIS HAS LOST ITS ATTACHMENT TO THE DERMIS — full-thickness epidermal necrosis is present even where the skin still looks intact. It indicates that the disease extends beyond the visible rash, and it is positive in Stevens-Johnson syndrome, toxic epidermal necrolysis, pemphigus vulgaris and staphylococcal scalded skin syndrome. HIS IS POSITIVE.',
          },
          mucosae: {
            the_rule: 'MUCOSAL INVOLVEMENT AT TWO OR MORE SITES IS CHARACTERISTIC AND OCCURS IN OVER 90%. EXAMINE ALL OF THEM — mouth, eyes, nose, genitals and perianal skin. Genital and ocular involvement is missed because it is not looked for, and both cause permanent damage.',
            findings: 'Extensive painful oral erosions with haemorrhagic crusting of the lips. CONJUNCTIVAL INJECTION WITH EROSIONS AND EARLY PSEUDOMEMBRANE — requiring same-day ophthalmology. Erosions on the glans.',
          },
          the_area_calculation: 'Estimate DETACHED or DETACHABLE epidermis, not simply erythema, using the rule of nines or the palm method (the patient palm including fingers is about 1% of body surface). THE PERCENTAGE DEFINES THE DIAGNOSIS AND DRIVES THE REFERRAL.',
        },
      },

      section_2_mechanism: {
        the_spectrum_defined_by_area: {
          the_classification: 'STEVENS-JOHNSON SYNDROME: LESS THAN 10% of body surface detached. SJS/TEN OVERLAP: 10 to 30%. TOXIC EPIDERMAL NECROLYSIS: MORE THAN 30%.',
          the_point: 'THEY ARE ONE DISEASE ON A SEVERITY SPECTRUM, not three conditions. HE IS AT 12% — SJS/TEN OVERLAP — AND IT CAN PROGRESS FOR SEVERAL DAYS. The area on admission is not the final area, and management must anticipate progression rather than react to it.',
        },
        the_immunology: 'A drug or its metabolite is presented to CYTOTOXIC CD8 T LYMPHOCYTES, which are activated and attack KERATINOCYTES. They kill through GRANULYSIN — now recognised as the principal mediator, found in high concentration in blister fluid — as well as perforin, granzyme B and the Fas-Fas ligand pathway. The result is WIDESPREAD KERATINOCYTE APOPTOSIS and full-thickness epidermal necrosis with detachment at the dermo-epidermal junction.',
        the_genetics_that_are_clinically_actionable: {
          hla_b_1502: 'Strongly associated with CARBAMAZEPINE-INDUCED Stevens-Johnson syndrome and toxic epidermal necrolysis in people of HAN CHINESE, THAI, MALAY and some other South-East Asian ancestry. SCREENING BEFORE PRESCRIBING CARBAMAZEPINE IS RECOMMENDED IN THESE POPULATIONS and prevents cases.',
          hla_b_5801: 'Associated with ALLOPURINOL-induced severe cutaneous reactions, particularly in Han Chinese, Thai and Korean populations.',
          why_it_matters_here: 'This is pharmacogenomics that changes prescribing today, not in the future. It also means FIRST-DEGREE RELATIVES may share the risk allele and should avoid the drug.',
        },
        why_the_patient_becomes_critically_ill:
          'The skin performs barrier, thermoregulatory and immune functions. LOSING IT PRODUCES EXACTLY THE PHYSIOLOGY OF A MAJOR BURN: massive fluid and protein loss through denuded skin, hypovolaemia and acute kidney injury, HYPOTHERMIA from lost thermoregulation, overwhelming risk of BACTERIAL INFECTION AND SEPSIS through the breached barrier, a hypercatabolic state, and — where the respiratory and gastrointestinal mucosa are involved — airway compromise and gut failure. SEPSIS IS THE LEADING CAUSE OF DEATH.',
      },

      section_3_differentials: {
        one_sjs_ten: 'WORKING DIAGNOSIS. Supporting: high-risk drug at 14 days, prodrome, painful skin preceding the rash, dusky targetoid lesions, positive Nikolsky sign, epidermal detachment, multi-site mucosal involvement.',
        two_erythema_multiforme_major: {
          why_the_distinction_matters: 'It is a DIFFERENT DISEASE with a different cause and a far better prognosis, and the two are still conflated.',
          the_differences: 'Erythema multiforme is usually triggered by INFECTION — classically HERPES SIMPLEX — rather than by drugs. The lesions are TYPICAL TARGET LESIONS with three distinct zones, ACRALLY distributed on the hands, feet and extensor limbs. Epidermal detachment is minimal, systemic illness is milder, and it usually resolves without the mortality of SJS/TEN. It also RECURS with herpes reactivation, which SJS/TEN does not.',
        },
        three_staphylococcal_scalded_skin_syndrome: 'Caused by staphylococcal EXFOLIATIVE TOXIN, mainly in young children. Nikolsky sign is positive, BUT MUCOSAL SURFACES ARE SPARED — that is the key discriminator — and the split is SUPERFICIAL, within the granular layer, not at the dermo-epidermal junction. Biopsy distinguishes them definitively, and treatment is antibiotics.',
        four_dress_syndrome: 'DRUG REACTION WITH EOSINOPHILIA AND SYSTEMIC SYMPTOMS — a different severe drug reaction with a LONGER latency of 2 to 8 weeks, FACIAL OEDEMA, marked EOSINOPHILIA, lymphadenopathy and prominent ORGAN involvement, particularly hepatitis. Skin detachment is not the feature. It has its own high mortality and can relapse.',
        five_acute_generalised_exanthematous_pustulosis: 'Rapid onset within days, with dozens of small STERILE PUSTULES on erythematous skin, usually starting in the flexures. Better prognosis.',
        six_autoimmune_blistering_disease: 'PEMPHIGUS VULGARIS gives flaccid blisters with mucosal involvement and a positive Nikolsky sign, but it evolves over WEEKS TO MONTHS rather than days and has no drug timeline. BULLOUS PEMPHIGOID gives TENSE blisters, usually in the elderly, with a negative Nikolsky sign.',
        seven_toxic_shock_syndrome_and_severe_sepsis: 'Fever, rash and hypotension. The rash is a diffuse erythroderma that DESQUAMATES LATER, without early detachment.',
      },

      section_4_investigations: {
        the_priority: 'THE DIAGNOSIS IS CLINICAL AND TREATMENT — ABOVE ALL STOPPING THE DRUG — MUST NOT WAIT FOR ANY RESULT.',
        skin_biopsy: 'Confirms the diagnosis and excludes mimics. Take a lesional biopsy for routine histology, showing FULL-THICKNESS EPIDERMAL NECROSIS with subepidermal separation and a sparse dermal infiltrate. Take a SECOND perilesional sample for DIRECT IMMUNOFLUORESCENCE, which is NEGATIVE in SJS/TEN and POSITIVE in autoimmune blistering disease — that distinction is the reason two samples are taken. A frozen section can give an answer within hours where the diagnosis is uncertain.',
        bloods: 'Full blood count with DIFFERENTIAL — EOSINOPHILIA suggests DRESS rather than SJS/TEN · urea, creatinine and electrolytes, since acute kidney injury is common and is a SCORTEN component · GLUCOSE, also a SCORTEN component · BICARBONATE, another · liver function · CRP · albumin, which falls with protein loss · clotting · blood gas · BLOOD CULTURES and SKIN SWABS from denuded areas for surveillance.',
        scorten_the_severity_score: {
          what_it_is: 'A validated score predicting mortality, calculated ideally within the first 24 hours and again at 72 hours.',
          the_seven_criteria: 'AGE over 40 · underlying MALIGNANCY · HEART RATE over 120 · initial epidermal DETACHMENT over 10% · serum UREA over 10 mmol/L · serum BICARBONATE under 20 mmol/L · serum GLUCOSE over 14 mmol/L. One point each.',
          why_it_matters: 'Mortality rises steeply with the score — from a few percent at 0 to 1, to over 90% at 5 or more. It guides the level of care, supports the referral conversation, and informs what you tell the family. HIS SCORE INCLUDES tachycardia and detachment over 10%.',
        },
        ophthalmology: 'URGENT SAME-DAY SLIT LAMP EXAMINATION. Ocular involvement is present in the majority and causes PERMANENT SEQUELAE — symblepharon (adhesions between eyelid and globe), trichiasis, corneal scarring, dry eye and blindness — IF NOT MANAGED EARLY. Daily review during the acute phase.',
        other: 'Chest radiograph, since respiratory mucosal involvement occurs and carries a poor prognosis. Consider MYCOPLASMA serology or PCR, particularly in younger patients without a clear drug trigger.',
      },

      section_5_management: {
        a_stop_the_drug_which_is_the_single_most_important_action: {
          the_rule: 'STOP THE SUSPECTED CULPRIT IMMEDIATELY, AND STOP EVERY NON-ESSENTIAL DRUG STARTED IN THE PRECEDING 8 WEEKS.',
          the_evidence: 'EARLIER WITHDRAWAL OF THE CULPRIT DRUG IS ASSOCIATED WITH LOWER MORTALITY. Every day of continued exposure worsens the outcome, and drugs with LONG HALF-LIVES carry a worse prognosis for exactly that reason — the exposure continues after the tablet stops.',
          the_practical_difficulty: 'If several drugs are plausible, stop them all and reintroduce only what is essential, with a different agent where possible. Do not spend hours deciding which one it is while the patient continues to take it.',
          documentation: 'Record the reaction prominently as a SEVERE ALLERGY in every record, and — see below — this is a lifelong contraindication.',
        },
        b_refer_to_a_burns_unit_or_intensive_care: {
          the_rule: 'PATIENTS WITH SIGNIFICANT DETACHMENT SHOULD BE MANAGED IN A BURNS UNIT OR INTENSIVE CARE. EARLY TRANSFER IMPROVES SURVIVAL.',
          why: 'The physiology is that of a major burn, and burns units have the expertise in wound care, fluid management, thermoregulation, infection control and nutrition that this disease demands. A general medical ward cannot provide it.',
          do_not_wait: 'Refer on the basis of the diagnosis and trajectory, not the current percentage — the area progresses over days.',
        },
        c_supportive_care_which_is_the_treatment: {
          fluid: 'Substantial fluid losses through denuded skin, though generally LESS than an equivalent thermal burn because there is no oedema-generating deep injury. Guide replacement by urine output — target roughly 0.5 to 1 mL/kg/hour — plus haemodynamics and electrolytes, rather than applying a burns formula rigidly. Avoid both under-resuscitation and overload.',
          temperature: 'THE PATIENT CANNOT THERMOREGULATE. Nurse in a WARMED ROOM, typically 30 to 32 degrees Celsius, use warming devices and warmed fluids. Hypothermia is common, harmful and preventable.',
          skin_care: 'Non-adherent dressings; specialist burns wound care. DO NOT DEBRIDE DETACHED EPIDERMIS ROUTINELY — leaving it in place as a biological dressing is widely preferred. Handle the patient minimally, use a pressure-relieving surface, and avoid adhesive tape on skin.',
          infection: 'SEPSIS IS THE LEADING CAUSE OF DEATH. Strict asepsis, minimal lines and catheters, surveillance swabs and cultures. DO NOT GIVE PROPHYLACTIC ANTIBIOTICS — they select resistant organisms without preventing sepsis. Treat infection promptly when it is identified, and note that FEVER IS PART OF THE DISEASE, so the diagnosis of sepsis rests on the whole picture and on cultures.',
          mouth_and_nutrition: 'Regular mouth care with antiseptic and anaesthetic rinses. NASOGASTRIC FEEDING EARLY — the state is hypercatabolic and oral intake is impossible. Early enteral nutrition supports healing and reduces bacterial translocation.',
          eyes: 'Daily ophthalmology review. Lubricants, topical antibiotic or steroid as directed by the ophthalmologist, and lysis of developing adhesions. THIS IS THE INTERVENTION THAT PREVENTS LIFELONG BLINDNESS and it is the one most likely to be deferred while the skin dominates attention.',
          genital_and_anal_care: 'Barrier and topical treatment, and separation of surfaces to prevent adhesions and stricture. GENITAL SCARRING AND VAGINAL STENOSIS ARE SERIOUS, PREVENTABLE LONG-TERM COMPLICATIONS that are routinely neglected because nobody examines the area.',
          pain: 'SEVERE. Opioids, often by infusion, with adjuncts. Dressing changes need additional analgesia planned in advance.',
          airway: 'If there is respiratory mucosal involvement, hoarseness or stridor, involve intensive care early — mucosal sloughing can obstruct the airway.',
          thromboprophylaxis: 'Immobile, inflamed and dehydrated. Prescribe it.',
        },
        d_the_immunomodulation_question_and_an_honest_answer: {
          the_state_of_the_evidence:
            'THERE IS NO UNIVERSALLY AGREED SPECIFIC TREATMENT, AND THE EVIDENCE IS OF LOW QUALITY — this disease is rare, so randomised trials are very difficult. Any confident statement that one agent is definitely correct is overstating the literature. Practice varies legitimately between centres.',
          corticosteroids: 'CONTENTIOUS. Some observational data suggest benefit with short, early, high-dose treatment; other data suggest increased infection and delayed healing. Widely used in some centres, avoided in others.',
          ciclosporin: 'Increasingly favoured, with several observational studies suggesting reduced mortality and faster re-epithelialisation, and a plausible mechanism in blocking T-cell activation. It is a reasonable choice where expertise exists.',
          intravenous_immunoglobulin: 'Proposed to block Fas-mediated apoptosis. Trial and cohort results have been INCONSISTENT, and enthusiasm has declined. It carries thrombotic and renal risks.',
          anti_tnf_agents: 'Etanercept has shown promise in small studies, including one randomised comparison with steroids.',
          the_honest_summary: 'SUPPORTIVE CARE AND EARLY DRUG WITHDRAWAL ARE THE INTERVENTIONS WITH THE STRONGEST EVIDENCE. Specific immunomodulation is a specialist decision made with dermatology, and no agent should be given at the expense of getting the fundamentals right.',
        },
        e_the_long_term_consequences_that_must_be_anticipated: {
          skin: 'Dyspigmentation, scarring, nail dystrophy and abnormal sweating.',
          eyes: 'Chronic dry eye, symblepharon, trichiasis, corneal scarring and visual loss — THE COMMONEST DISABLING LONG-TERM SEQUELA, and the reason for daily acute ophthalmology input.',
          mucosal_and_genital: 'Oesophageal, vaginal, urethral and anal strictures. Vaginal adhesions and dyspareunia. These require dedicated follow-up and are usually not asked about.',
          respiratory: 'Bronchiolitis obliterans in patients with respiratory involvement.',
          psychological: 'Post-traumatic stress is common after an illness of this severity and disfigurement. Screen for it.',
        },
        f_the_lifelong_action_that_prevents_a_second_episode: {
          the_rule:
            'THE CULPRIT DRUG IS ABSOLUTELY CONTRAINDICATED FOR LIFE. RE-EXPOSURE CAUSES A FASTER AND MORE SEVERE REACTION. THERE IS NO SUCH THING AS A CAUTIOUS RECHALLENGE, AND NO DESENSITISATION PROTOCOL FOR THIS REACTION.',
          the_practical_steps: 'Record it as a SEVERE ALLERGY in the hospital record, the primary care record and the pharmacy record. Give the patient a WRITTEN ALERT CARD naming the drug and the reaction, and consider a medical alert bracelet. Explain it in words they will remember, not in a discharge summary they will never read.',
          the_cross_reactivity: 'AVOID STRUCTURALLY RELATED DRUGS. For AROMATIC ANTICONVULSANTS — carbamazepine, phenytoin, phenobarbital, oxcarbazepine and lamotrigine — there is substantial cross-reactivity, so an alternative must come from a DIFFERENT structural class, such as levetiracetam or valproate. Naming only the single drug and leaving the class unaddressed is how patients are re-exposed.',
          the_family: 'Advise that FIRST-DEGREE RELATIVES may carry the same HLA risk allele and should avoid the drug or be tested before it is prescribed. This is a genuine, actionable piece of prevention that is almost never mentioned.',
          reporting: 'Report to the national pharmacovigilance scheme.',
        },
      },

      section_6_teaching_points: {
        bonus_1_painful_skin_before_the_rash:
          'Most drug rashes itch. This one HURTS, because the epidermis is necrosing before it separates. Skin pain out of proportion to the visible rash, days into a new drug, is the earliest warning and the only one that appears while the disease is still limited.',
        bonus_2_the_percentage_defines_the_diagnosis:
          'Under 10% detached is Stevens-Johnson syndrome, 10 to 30% is overlap, over 30% is toxic epidermal necrolysis — one disease on a spectrum. Measure DETACHED or DETACHABLE epidermis, not erythema. And remember the area on admission is not the final area; it progresses for days.',
        bonus_3_nikolsky_sign_shows_the_disease_beyond_the_rash:
          'Gentle lateral pressure on normal-looking skin shears the epidermis away, showing that full-thickness necrosis extends past what you can see. It is positive in SJS/TEN, pemphigus and staphylococcal scalded skin syndrome — but in scalded skin syndrome the MUCOSAE ARE SPARED, which is the discriminator.',
        bonus_4_stopping_the_drug_early_saves_lives:
          'Earlier withdrawal is associated with lower mortality, and drugs with long half-lives have worse outcomes because exposure continues after the last tablet. If several drugs are plausible, stop them all — do not spend the day deciding.',
        bonus_5_manage_it_like_a_burn:
          'Loss of the skin barrier produces burn physiology — fluid and protein loss, hypothermia, hypercatabolism and overwhelming infection risk. Early transfer to a burns unit improves survival. Warm the room, do not debride detached epidermis, and do NOT give prophylactic antibiotics.',
        bonus_6_the_eyes_determine_the_long_term_disability:
          'Ocular involvement occurs in the majority and causes symblepharon, corneal scarring and blindness if not managed from day one. Daily ophthalmology review during the acute phase is the single intervention most likely to change the patient life afterwards — and the one most likely to be deferred.',
        bonus_7_hla_typing_is_actionable_prescribing:
          'HLA-B*1502 with carbamazepine in South-East Asian populations, HLA-B*5801 with allopurinol in Han Chinese, Thai and Korean populations. Screening before prescribing prevents cases, and first-degree relatives may share the allele.',
        trap_1: 'Distinguish erythema multiforme major — herpes-triggered, acral target lesions, minimal detachment, far better prognosis, and it recurs.',
        trap_2: 'Distinguish DRESS — longer latency, facial oedema, eosinophilia, organ involvement, without detachment.',
        trap_3: 'Take TWO biopsies — histology and direct immunofluorescence — because negative immunofluorescence is what excludes autoimmune blistering disease.',
        trap_4: 'Examine the genitals and perianal skin. Strictures and adhesions are preventable and are neglected because nobody looks.',
        trap_5: 'No prophylactic antibiotics — they select resistant organisms without preventing sepsis. And remember fever is part of the disease.',
        trap_6: 'The culprit drug is contraindicated FOR LIFE, along with its structural class. Naming only the single drug is how re-exposure happens.',
        trap_7: 'Be honest that specific immunomodulation is not settled — supportive care and early withdrawal carry the strongest evidence.',
        one_line_summary: 'SJS/TEN overlap at 12% from carbamazepine at 14 days. Stop the drug and everything else non-essential now, calculate SCORTEN, transfer to a burns unit, warm the room and feed early, ophthalmology daily — and make sure he never receives an aromatic anticonvulsant again.',
      },
    },
    warnings: [
      'PAINFUL SKIN PRECEDING THE RASH is the earliest warning — most drug rashes itch, this one hurts.',
      'STOP THE CULPRIT DRUG IMMEDIATELY and every non-essential drug started in the preceding 8 weeks — earlier withdrawal lowers mortality.',
      'The percentage of DETACHED epidermis defines the diagnosis: under 10% SJS, 10 to 30% overlap, over 30% TEN. It progresses for days.',
      'REFER EARLY TO A BURNS UNIT OR INTENSIVE CARE — early transfer improves survival.',
      'NURSE IN A WARMED ROOM — the patient cannot thermoregulate and hypothermia is common and preventable.',
      'DO NOT ROUTINELY DEBRIDE detached epidermis — it acts as a biological dressing.',
      'DO NOT GIVE PROPHYLACTIC ANTIBIOTICS — they select resistant organisms without preventing sepsis. Sepsis is the leading cause of death.',
      'URGENT SAME-DAY AND THEN DAILY OPHTHALMOLOGY — ocular scarring and blindness are the commonest disabling sequelae.',
      'EXAMINE GENITAL AND PERIANAL SKIN — strictures and adhesions are preventable and routinely neglected.',
      'Take TWO biopsies — histology and direct immunofluorescence, which is negative in SJS/TEN and positive in autoimmune blistering disease.',
      'Calculate SCORTEN within 24 hours — it guides level of care and the conversation with the family.',
      'Specific immunomodulation is NOT settled — supportive care and early drug withdrawal have the strongest evidence.',
      'THE CULPRIT DRUG IS CONTRAINDICATED FOR LIFE, along with its structural class. There is no cautious rechallenge.',
      'Warn that FIRST-DEGREE RELATIVES may share the HLA risk allele.',
      'Distinguish from erythema multiforme major, DRESS and staphylococcal scalded skin syndrome — mucosae are SPARED in the last.',
      'Doses and thresholds here are teaching examples. Follow your local dermatology and burns guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Specific immunomodulatory treatment is genuinely unsettled and varies legitimately between centres.',
      'Fluid resuscitation is guided by response rather than a burns formula, and requires burns or intensive care expertise.',
    ],
    cards: [
      { q: 'What is the earliest warning sign?', a: 'Painful skin out of proportion to the visible rash — most drug rashes itch, this one hurts.' },
      { q: 'Give the classification by body surface area.', a: 'Under 10% detached = SJS; 10 to 30% = overlap; over 30% = TEN.' },
      { q: 'How is Nikolsky sign elicited and what does it mean?', a: 'Lateral shearing pressure on normal-looking skin shears the epidermis off — full-thickness necrosis beyond the visible rash.' },
      { q: 'What distinguishes staphylococcal scalded skin syndrome?', a: 'Mucosal surfaces are SPARED, and the split is superficial within the granular layer.' },
      { q: 'Name the typical latency and four high-risk drugs.', a: '4 days to 4 weeks. Carbamazepine, lamotrigine, allopurinol, sulfonamides.' },
      { q: 'List the SCORTEN criteria.', a: 'Age over 40, malignancy, heart rate over 120, detachment over 10%, urea over 10, bicarbonate under 20, glucose over 14.' },
      { q: 'Why take two skin biopsies?', a: 'Histology plus direct immunofluorescence — negative immunofluorescence excludes autoimmune blistering disease.' },
      { q: 'Why is this managed like a burn?', a: 'Loss of the skin barrier causes fluid and protein loss, hypothermia, hypercatabolism and overwhelming infection risk.' },
      { q: 'Should prophylactic antibiotics be given?', a: 'No — they select resistant organisms without preventing sepsis, which is the leading cause of death.' },
      { q: 'What is the commonest disabling long-term sequela?', a: 'Ocular scarring — symblepharon, corneal scarring and visual loss. Daily ophthalmology prevents it.' },
      { q: 'How does erythema multiforme major differ?', a: 'Herpes-triggered, acral typical target lesions, minimal detachment, better prognosis, and it recurs.' },
      { q: 'Which HLA alleles are clinically actionable?', a: 'HLA-B*1502 with carbamazepine in South-East Asian populations; HLA-B*5801 with allopurinol in Han Chinese, Thai and Korean populations.' },
      { q: 'What must the patient avoid afterwards?', a: 'The culprit drug for life AND its structural class — for aromatic anticonvulsants, switch to levetiracetam or valproate.' },
    ],
    checks: [
      'Culprit drug and all non-essential recent drugs stopped immediately',
      'Drug timeline drawn covering 8 weeks including over-the-counter and herbal',
      'Detached body surface area estimated and documented',
      'Nikolsky sign elicited',
      'All mucosal sites examined including eyes and genitals',
      'SCORTEN calculated within 24 hours',
      'Two skin biopsies taken — histology and direct immunofluorescence',
      'Referred early to burns unit or intensive care',
      'Room warmed and warming devices used',
      'Detached epidermis left in place',
      'No prophylactic antibiotics; surveillance cultures taken',
      'Same-day then daily ophthalmology review',
      'Genital and perianal care to prevent adhesions',
      'Early nasogastric feeding and adequate analgesia',
      'Severe allergy documented in all records with an alert card, class avoidance explained, family advised',
    ],
    related: ['severe_cutaneous_adverse_drug_reactions'],
  },
];
