/**
 * Written after a fair criticism: earlier entries used abbreviations —
 * SGLT2, COX-1, ARNI, HFpEF — without ever expanding them, and named drug
 * CLASSES without naming a single actual drug. A reader who does not already
 * know the abbreviation learns nothing.
 *
 * Rule applied here and from now on: EXPAND EVERY ABBREVIATION ON FIRST USE,
 * and never name a class without naming the drugs in it.
 */

export default [
  {
    id: 'AS-DRGC-0004',
    type: 'drug',
    title: 'Diabetes Drugs — Every Class, What It Does, and When to Pick It Over Another',
    short: 'Antidiabetic drug classes',
    summary:
      'Nine classes, each named in full with real drug examples. The choice is no longer about which lowers glucose most — metformin, then a drug chosen for the ORGAN you are protecting: the heart, the kidney, or the weight. And when the sugar is very high with weight loss and ketones, none of the tablets are the answer — that is insulin.',
    domains: ['endocrine', 'pharmacology'],
    intents: ['prescribe_reference', 'classify'],
    hazard: 'critical',
    urgency: 'routine',
    aka: [
      'antidiabetic drugs', 'diabetes drugs', 'oral hypoglycaemics', 'oral antidiabetic',
      'metformin', 'sulfonylurea', 'gliclazide', 'glibenclamide', 'glimepiride',
      'sglt2 inhibitor', 'gliflozin', 'dapagliflozin', 'empagliflozin', 'canagliflozin',
      'glp-1 agonist', 'semaglutide', 'liraglutide', 'dulaglutide', 'tirzepatide',
      'dpp-4 inhibitor', 'gliptin', 'sitagliptin', 'linagliptin',
      'pioglitazone', 'thiazolidinedione', 'glitazone', 'acarbose', 'insulin types',
    ],
    terms: [
      'metformin', 'biguanide', 'sulfonylurea', 'gliclazide', 'glibenclamide', 'glimepiride',
      'sglt2', 'gliflozin', 'dapagliflozin', 'empagliflozin', 'glp-1', 'semaglutide',
      'liraglutide', 'dulaglutide', 'tirzepatide', 'dpp-4', 'gliptin', 'sitagliptin',
      'linagliptin', 'pioglitazone', 'thiazolidinedione', 'acarbose', 'insulin', 'hba1c',
      'lactic acidosis', 'hypoglycaemia', 'euglycaemic dka', 'weight neutral', 'cardiovascular outcome',
    ],
    confirm_locally: true,
    body: {
      the_abbreviations_expanded_first: {
        why: 'Every short form used below, written out once. A drug class you cannot name is a drug class you cannot look up.',
        hba1c: 'HbA1c — GLYCATED HAEMOGLOBIN. Glucose sticks irreversibly to haemoglobin, so the level reflects the average glucose over the red cell lifespan, roughly the past 2–3 months. It is the standard measure of overall control.',
        sglt2: 'SGLT2 — SODIUM-GLUCOSE CO-TRANSPORTER 2. The protein in the kidney that reabsorbs filtered glucose back into the blood. Blocking it makes you pass sugar in the urine.',
        glp1: 'GLP-1 — GLUCAGON-LIKE PEPTIDE 1. A gut hormone released after eating that tells the pancreas to release insulin, tells the liver to stop making glucose, slows stomach emptying and reduces appetite.',
        dpp4: 'DPP-4 — DIPEPTIDYL PEPTIDASE 4. The enzyme that DESTROYS GLP-1. Block the enzyme and your own GLP-1 lasts longer.',
        tzd: 'TZD — THIAZOLIDINEDIONE, also called a glitazone. Makes tissues more sensitive to insulin.',
        dka: 'DKA — DIABETIC KETOACIDOSIS. Life-threatening acid build-up from burning fat when there is not enough insulin.',
        cv_ckd: 'CV — CARDIOVASCULAR. CKD — CHRONIC KIDNEY DISEASE. ASCVD — ATHEROSCLEROTIC CARDIOVASCULAR DISEASE, meaning established artery disease such as previous heart attack or stroke.',
      },

      the_modern_principle: {
        what_changed:
          'Treatment used to be a ladder chosen by how much each drug lowered HbA1c. That is no longer how it works. Several drugs were shown to reduce heart attacks, heart failure hospitalisation, kidney failure and death BEYOND what their glucose lowering explained. So the question is now: what else does this person have? Heart failure, kidney disease, established artery disease, or obesity each point at a specific drug.',
        the_order: 'METFORMIN plus lifestyle for almost everyone. Then add the drug that protects the ORGAN at risk. HbA1c matters, but it is no longer the only thing choosing the drug.',
      },

      class_1_biguanide_metformin: {
        the_only_drug: 'METFORMIN.',
        how_it_works: 'Mainly reduces the amount of glucose the LIVER makes and releases, and makes muscle more sensitive to insulin. It does not make the pancreas release insulin.',
        advantages: 'FIRST LINE almost everywhere. Does NOT cause hypoglycaemia on its own, because it does not force insulin out. WEIGHT NEUTRAL or mildly weight-reducing. Very cheap and very well understood. Long-term cardiovascular benefit shown in UKPDS.',
        side_effects: 'GASTROINTESTINAL — nausea, diarrhoea, metallic taste — in a substantial minority. Usually manageable by starting low, going slow, taking it with food, or using the modified-release form. Long-term VITAMIN B12 DEFICIENCY, which is genuinely under-checked and causes a neuropathy that is easily blamed on diabetes itself.',
        the_serious_but_rare_one: 'LACTIC ACIDOSIS. Rare, but serious. Risk rises when metformin accumulates — so it is withheld in significant renal impairment, in acute illness with dehydration or hypoxia, and around iodinated contrast and surgery. The practical rule patients must be told is SICK DAY RULES: stop metformin while vomiting, having diarrhoea, or acutely unwell and not drinking, and restart when eating and drinking normally.',
        when_not_to_use: 'Severe renal impairment (thresholds are local), acute decompensation, severe hepatic impairment, and heavy alcohol use.',
      },

      class_2_sglt2_inhibitors_the_gliflozins: {
        the_drugs: 'DAPAGLIFLOZIN, EMPAGLIFLOZIN, CANAGLIFLOZIN, ertugliflozin. Recognise them by the ending "-GLIFLOZIN".',
        how_it_works: 'Blocks SGLT2 in the kidney so filtered glucose is NOT reabsorbed and is passed out in the urine instead. Because it works in the kidney and not on the pancreas, it lowers glucose WITHOUT needing insulin to be present.',
        advantages: {
          the_big_one: 'PROVEN BENEFIT IN HEART FAILURE AND KIDNEY DISEASE, including in people WITHOUT diabetes. It reduces heart failure hospitalisation and slows progression of chronic kidney disease. This is why it now appears in cardiology and nephrology guidelines, not just diabetes ones.',
          others: 'Causes WEIGHT LOSS (you are excreting calories). Lowers blood pressure a little. Does not cause hypoglycaemia by itself.',
        },
        side_effects: {
          common: 'GENITAL THRUSH and urinary infection — sugar in the urine feeds yeast. Warn every patient, and advise genital hygiene. Volume depletion, dizziness and postural drop, particularly with a diuretic.',
          rare_and_serious: 'FOURNIER GANGRENE — a necrotising infection of the perineum. Rare, but any severe genital pain, swelling or redness needs the same-day emergency assessment.',
          the_specific_trap: 'EUGLYCAEMIC DIABETIC KETOACIDOSIS — full ketoacidosis with a glucose that looks normal or only mildly raised, because the sugar is being poured out in the urine. A clinician who checks only the glucose will be falsely reassured. CHECK KETONES, NOT JUST GLUCOSE, in any unwell patient on a gliflozin. Hold the drug during acute illness, fasting and around surgery.',
        },
        choose_it_when: 'Heart failure, chronic kidney disease, established artery disease, or when weight loss is wanted.',
      },

      class_3_glp1_receptor_agonists: {
        the_drugs: 'SEMAGLUTIDE (Ozempic weekly injection, Rybelsus tablet, Wegovy for obesity), LIRAGLUTIDE, DULAGLUTIDE, exenatide. TIRZEPATIDE is a dual GLP-1 and GIP agonist and is more potent still. Recognise them by "-GLUTIDE" or "-TIDE".',
        how_it_works: 'Mimics the gut hormone GLP-1: increases insulin release ONLY when glucose is high (which is why it does not cause hypoglycaemia alone), suppresses glucagon, slows gastric emptying, and acts on the brain to REDUCE APPETITE.',
        advantages: 'The LARGEST WEIGHT LOSS of any glucose-lowering class, by a wide margin. Proven reduction in cardiovascular events for several agents. Powerful HbA1c reduction. Mostly weekly injection, which suits adherence.',
        side_effects: 'NAUSEA, vomiting, diarrhoea — very common at the start and on dose increases, and the main reason people stop. It settles; escalate the dose slowly. Gallstones with rapid weight loss. Pancreatitis is reported and remains debated. AVOID in personal or family history of MEDULLARY THYROID CARCINOMA or multiple endocrine neoplasia type 2, based on rodent data. Injection-site reactions. Expensive, and supply has been unreliable.',
        choose_it_when: 'Obesity is a major problem, or established artery disease. Increasingly used before insulin in type 2 diabetes for exactly that reason.',
      },

      class_4_dpp4_inhibitors_the_gliptins: {
        the_drugs: 'SITAGLIPTIN, LINAGLIPTIN, alogliptin, saxagliptin. Recognise "-GLIPTIN".',
        how_it_works: 'Blocks the enzyme DPP-4 that breaks down your own GLP-1, so natural GLP-1 lasts longer. Same pathway as the injections, but a much gentler effect.',
        advantages: 'WELL TOLERATED and WEIGHT NEUTRAL. Oral, once daily. No hypoglycaemia alone. LINAGLIPTIN is cleared by the liver, so it needs no dose change in renal impairment — genuinely useful in advanced kidney disease.',
        disadvantages: 'MODEST glucose lowering compared with the others, and NO cardiovascular or kidney benefit demonstrated. Saxagliptin was associated with more heart failure hospitalisation — so avoid gliptins where heart failure is the concern. Pancreatitis and joint pain reported.',
        choose_it_when: 'A frail or elderly patient where the priority is avoiding hypoglycaemia and side effects rather than maximum benefit, or where renal impairment restricts other options.',
        do_not_combine: 'Never give a gliptin with a GLP-1 agonist — the same pathway, no added benefit.',
      },

      class_5_sulfonylureas: {
        the_drugs: 'GLICLAZIDE, GLIMEPIRIDE, GLIBENCLAMIDE (glyburide), tolbutamide.',
        how_it_works: 'Binds the sulfonylurea receptor on the pancreatic beta cell, closes the potassium channel, and FORCES insulin release — whether or not glucose is high. That last point is the whole safety story.',
        advantages: 'CHEAP, widely available, and works FAST with a substantial HbA1c drop. In many settings it is the realistic second-line drug on cost grounds alone, and that matters more than guideline preference if the alternatives are unaffordable.',
        side_effects: {
          hypoglycaemia: 'The defining risk, because insulin is released regardless of the glucose level. It can be PROLONGED and can RECUR many hours after apparent correction — so a patient with sulfonylurea hypoglycaemia must be OBSERVED, not corrected and discharged. Worse with GLIBENCLAMIDE (long acting), in the elderly, in renal impairment, and when meals are missed.',
          others: 'WEIGHT GAIN. Rash, and rarely blood dyscrasias.',
        },
        the_practical_preference: 'GLICLAZIDE is generally preferred over glibenclamide — shorter acting, less hypoglycaemia, safer in older people.',
        caution: 'Beta-blockers mask the warning symptoms of hypoglycaemia. Alcohol and missed meals precipitate it.',
      },

      class_6_thiazolidinediones: {
        the_drug: 'PIOGLITAZONE. (Rosiglitazone was withdrawn in many countries over cardiovascular concerns.)',
        how_it_works: 'Activates a nuclear receptor called PPAR-gamma, which makes fat and muscle more SENSITIVE to insulin. It takes WEEKS to work — this is not a drug for a quick correction.',
        advantages: 'Durable glucose control, no hypoglycaemia alone, improves fatty liver, and evidence of benefit in insulin-resistant stroke patients.',
        side_effects: 'FLUID RETENTION and OEDEMA — so it is CONTRAINDICATED IN HEART FAILURE, which is the key exam and ward point. WEIGHT GAIN. Increased FRACTURE risk, particularly in women. A debated association with bladder cancer.',
        choose_it_when: 'Marked insulin resistance or fatty liver, and no heart failure.',
      },

      class_7_alpha_glucosidase_inhibitors: {
        the_drug: 'ACARBOSE.',
        how_it_works: 'Blocks the gut enzyme that breaks complex carbohydrate into absorbable sugar, so absorption is slowed and the after-meal spike is blunted.',
        advantages: 'Targets post-meal glucose specifically. No hypoglycaemia alone. Weight neutral.',
        side_effects: 'FLATULENCE, bloating and diarrhoea — from unabsorbed carbohydrate fermenting in the colon. Poor tolerance limits use.',
        the_critical_rule: 'If a patient on acarbose becomes hypoglycaemic from ANOTHER drug, treat with GLUCOSE (dextrose), NOT with sucrose or ordinary table sugar — acarbose blocks the enzyme needed to break sucrose down, so ordinary sugar will not work fast enough.',
      },

      class_8_meglitinides: {
        the_drugs: 'REPAGLINIDE, nateglinide.',
        how_it_works: 'Same idea as a sulfonylurea but FAST ON, FAST OFF. Taken with each meal.',
        use: 'Useful with erratic meal timing, since a skipped meal means a skipped dose. Less prolonged hypoglycaemia than a sulfonylurea, but more dosing.',
      },

      class_9_insulin: {
        the_types: {
          rapid_acting: 'Aspart, lispro, glulisine — starts in minutes, taken with the meal.',
          short_acting: 'Regular / soluble human insulin — starts in about 30 minutes.',
          intermediate: 'NPH / isophane — covers roughly half a day, and is cloudy so it must be resuspended.',
          long_acting: 'Glargine, detemir, degludec — flat background cover for 24 hours or more.',
          premixed: 'Fixed combinations such as 30/70, giving background and mealtime cover in one injection. Convenient, less flexible.',
        },
        the_point_the_question_raised:
          'You asked when insulin is chosen over the tablets. The answer is not "when the tablets fail" — it is when the pancreas cannot deliver, and there are specific situations where insulin is the RIGHT FIRST CHOICE rather than a last resort:',
        when_insulin_is_needed_regardless_of_hba1c: [
          'TYPE 1 DIABETES — always, from diagnosis, for life. No tablet substitutes for absent insulin.',
          'DIABETIC KETOACIDOSIS or hyperosmolar hyperglycaemic state — insulin, always.',
          'CATABOLIC FEATURES: marked weight loss, ketones present, very high glucose with thirst and polyuria. This is a failing pancreas and it needs insulin NOW, not another tablet.',
          'PREGNANCY, where insulin (and metformin in some protocols) is used and most other agents are avoided.',
          'ACUTE ILLNESS, sepsis, surgery, and steroid-induced hyperglycaemia.',
          'SEVERE hepatic or renal impairment restricting the oral options.',
          'A very high HbA1c at diagnosis — a period of insulin can rest the beta cells, and some patients then come OFF it.',
        ],
        the_nuance_worth_knowing: 'Starting insulin is NOT a failure and should not be framed to patients as one. It is also not necessarily permanent in type 2 diabetes. And with GLP-1 agonists now available, many patients who would once have gone straight to insulin do better on an injectable that also reduces weight.',
        side_effects: 'HYPOGLYCAEMIA (the main one), WEIGHT GAIN, injection-site LIPOHYPERTROPHY, and rarely allergy. See the insulin injection technique entry — bad technique, not dose, explains much unexplained variability.',
      },

      choosing_between_them_a_practical_map: {
        everyone: 'Metformin plus diet, activity, smoking cessation, blood pressure and lipids.',
        heart_failure: 'Add an SGLT2 INHIBITOR. AVOID pioglitazone (fluid retention) and be cautious with saxagliptin.',
        chronic_kidney_disease: 'Add an SGLT2 INHIBITOR. Linagliptin if a gliptin is needed. Adjust or avoid metformin by the local threshold.',
        established_artery_disease: 'A GLP-1 AGONIST or an SGLT2 INHIBITOR, both with proven cardiovascular benefit.',
        obesity_dominant: 'A GLP-1 AGONIST (or tirzepatide). Avoid sulfonylureas and pioglitazone, which cause weight gain.',
        frail_or_elderly: 'Prioritise AVOIDING HYPOGLYCAEMIA — a gliptin is gentle; relax the HbA1c target; avoid glibenclamide entirely.',
        cost_is_the_constraint: 'Metformin plus GLICLAZIDE remains effective, affordable and widely available. An unaffordable optimal drug is worse than an affordable good one, and pretending otherwise is not clinical guidance.',
        very_high_glucose_with_weight_loss_or_ketones: 'INSULIN, now. Do not add another tablet.',
      },

      targets: 'HbA1c targets are INDIVIDUAL, not universal — tighter in the young, newly diagnosed and otherwise well; looser in the frail, in those with hypoglycaemia unawareness, and where the risk of a hypo outweighs the benefit of a lower number. A single target applied to everyone causes harm at both ends.',
    },
    warnings: [
      'SGLT2 inhibitors cause EUGLYCAEMIC ketoacidosis — check KETONES, not just glucose, in any unwell patient on a gliflozin.',
      'Warn every patient starting a gliflozin about genital thrush, and about severe perineal pain as a Fournier gangrene red flag.',
      'Sulfonylurea hypoglycaemia is PROLONGED and RECURS. Observe the patient; do not correct and discharge.',
      'Gliclazide is preferred over glibenclamide — shorter acting and less hypoglycaemia, especially in the elderly.',
      'Pioglitazone is CONTRAINDICATED in heart failure — it causes fluid retention.',
      'Teach metformin SICK DAY RULES: stop while vomiting, with diarrhoea, or acutely unwell and not drinking.',
      'Check vitamin B12 in anyone on long-term metformin — the deficiency neuropathy is blamed on diabetes instead.',
      'If a patient on acarbose has a hypo, give GLUCOSE — ordinary table sugar will not work, because acarbose blocks its breakdown.',
      'Never combine a DPP-4 inhibitor with a GLP-1 agonist — same pathway, no added benefit.',
      'Avoid GLP-1 agonists with a personal or family history of medullary thyroid carcinoma or MEN type 2.',
      'Weight loss with ketones and very high glucose means INSULIN now, not another tablet — and reconsider whether this is type 1.',
      'HbA1c targets are individual. A single target for everyone harms the frail and under-treats the young.',
    ],
    limitations: ['Doses, renal thresholds, licensing and availability are country- and formulary-specific and change. Scout deliberately states no doses.'],
    cards: [
      { q: 'What does SGLT2 stand for, and how does blocking it work?', a: 'Sodium-glucose co-transporter 2 — blocking it makes the kidney pass glucose into the urine instead of reabsorbing it.' },
      { q: 'What does GLP-1 stand for and do?', a: 'Glucagon-like peptide 1 — a gut hormone that raises insulin only when glucose is high, slows the stomach and reduces appetite.' },
      { q: 'What does DPP-4 do, and what do gliptins do to it?', a: 'DPP-4 (dipeptidyl peptidase 4) destroys GLP-1. Gliptins block the enzyme so your own GLP-1 lasts longer.' },
      { q: 'Name three SGLT2 inhibitors.', a: 'Dapagliflozin, empagliflozin, canagliflozin — the "-gliflozins".' },
      { q: 'Which class gives the most weight loss?', a: 'GLP-1 receptor agonists — semaglutide, liraglutide, dulaglutide; tirzepatide more still.' },
      { q: 'Which diabetes drug is contraindicated in heart failure?', a: 'Pioglitazone — fluid retention.' },
      { q: 'Why is sulfonylurea hypoglycaemia dangerous?', a: 'Insulin is forced out regardless of glucose, so it is prolonged and recurs after correction.' },
      { q: 'When is insulin the right first choice rather than a last resort?', a: 'Type 1, DKA, catabolic features (weight loss and ketones), pregnancy, acute illness, and a very high HbA1c at diagnosis.' },
      { q: 'What must you check in an unwell patient on a gliflozin?', a: 'Ketones — euglycaemic DKA has a near-normal glucose.' },
      { q: 'Hypo on acarbose — what do you give?', a: 'Glucose, not table sugar. Acarbose blocks sucrose breakdown.' },
      { q: 'What does HbA1c actually measure?', a: 'Glycated haemoglobin — average glucose over roughly the past 2–3 months.' },
    ],
    checks: ['Metformin considered first unless contraindicated', 'Organ at risk identified and the drug chosen for it', 'Ketone advice given with any SGLT2 inhibitor', 'Sick day rules taught for metformin', 'Hypoglycaemia risk assessed before a sulfonylurea', 'HbA1c target individualised and recorded', 'Cost and availability considered', 'B12 checked on long-term metformin'],
  },

  {
    id: 'AS-DRGC-0005',
    type: 'drug',
    title: 'NSAIDs, COX-1, COX-2 and the Lipoxygenase Pathway — With the Drugs Named',
    short: 'NSAIDs, COX and LOX',
    summary:
      'One enzyme family, two versions. COX-1 is the housekeeper protecting your stomach and platelets; COX-2 is the one switched on by inflammation. Every NSAID side effect is explained by which of the two it blocks — and the arachidonic acid pathway also explains why blocking one arm can worsen asthma.',
    domains: ['pharmacology', 'immunology'],
    intents: ['prescribe_reference', 'understand'],
    hazard: 'critical',
    urgency: 'routine',
    aka: [
      'nsaid', 'nsaids', 'cox-1', 'cox-2', 'cyclo-oxygenase', 'cyclooxygenase', 'lipoxygenase',
      'lox', 'arachidonic acid', 'prostaglandin', 'leukotriene', 'coxib', 'celecoxib', 'ibuprofen',
      'naproxen', 'diclofenac', 'aspirin', 'indomethacin', 'montelukast', 'zileuton',
      'aspirin exacerbated respiratory disease', 'samter triad',
    ],
    terms: [
      'nsaid', 'cox-1', 'cox-2', 'cyclo-oxygenase', 'lipoxygenase', 'arachidonic acid',
      'prostaglandin', 'thromboxane', 'prostacyclin', 'leukotriene', 'phospholipase a2',
      'celecoxib', 'ibuprofen', 'naproxen', 'diclofenac', 'aspirin', 'indomethacin', 'ketorolac',
      'montelukast', 'zafirlukast', 'zileuton', 'samter', 'aerd', 'reye syndrome', 'triple whammy',
    ],
    confirm_locally: true,
    body: {
      the_abbreviations_expanded_first: {
        nsaid: 'NSAID — NON-STEROIDAL ANTI-INFLAMMATORY DRUG. "Non-steroidal" simply distinguishes them from corticosteroids, which are the other big anti-inflammatory family.',
        cox: 'COX — CYCLO-OXYGENASE. The enzyme that converts arachidonic acid into prostaglandins and thromboxane. It exists as COX-1 and COX-2.',
        lox: 'LOX — LIPOXYGENASE. The OTHER enzyme acting on the same starting material, producing LEUKOTRIENES instead.',
        coxib: 'COXIB — a selective COX-2 inhibitor. Celecoxib and etoricoxib.',
      },

      the_pathway_in_one_picture: {
        the_start: 'Cell membrane damage releases PHOSPHOLIPIDS. The enzyme PHOSPHOLIPASE A2 converts them into ARACHIDONIC ACID. That single molecule is the fork in the road.',
        arm_one_cyclo_oxygenase: 'Arachidonic acid → COX → PROSTAGLANDINS (pain, fever, inflammation, stomach protection, kidney blood flow), PROSTACYCLIN (vasodilates, stops platelets sticking) and THROMBOXANE A2 (vasoconstricts, makes platelets stick).',
        arm_two_lipoxygenase: 'Arachidonic acid → LOX → LEUKOTRIENES, which cause bronchoconstriction, mucus and eosinophil recruitment. This is the ASTHMA arm.',
        why_this_matters_clinically:
          'CORTICOSTEROIDS block PHOSPHOLIPASE A2, so they shut down BOTH arms — which is why they are more powerful anti-inflammatories than NSAIDs, and why they have far more side effects. NSAIDs block only the COX arm. Blocking COX can push arachidonic acid down the LOX arm, producing MORE leukotrienes — which is the mechanism behind aspirin-induced asthma.',
      },

      cox_1_versus_cox_2: {
        cox_1_the_housekeeper: {
          where: 'Present all the time, in almost every tissue.',
          what_it_does: 'Makes the prostaglandins that PROTECT THE STOMACH LINING (mucus and bicarbonate), maintain KIDNEY blood flow, and — in platelets — make THROMBOXANE A2 for clotting.',
          so_blocking_it_causes: 'Gastric ulceration and bleeding, kidney injury, and reduced platelet function (bleeding).',
        },
        cox_2_the_inducible_one: {
          where: 'Switched ON at sites of inflammation. Also constitutively present in kidney and vascular endothelium — which is the catch.',
          what_it_does: 'Makes the prostaglandins of PAIN, FEVER and INFLAMMATION. Also makes PROSTACYCLIN in blood vessels, which is protective.',
          so_blocking_it_gives: 'The wanted effect — analgesia, antipyresis, anti-inflammation — with less stomach damage.',
        },
        the_trade_off_that_defines_the_class:
          'A selective COX-2 inhibitor spares the stomach BUT removes protective PROSTACYCLIN from blood vessels while leaving platelet THROMBOXANE (COX-1) intact. That tips the balance towards clotting — which is why coxibs carry an increased risk of myocardial infarction and stroke, and why rofecoxib was withdrawn. You trade stomach risk for cardiovascular risk. Neither is free.',
      },

      the_drugs_named: {
        non_selective_block_both: 'IBUPROFEN (weakest gastrointestinal risk of the traditional ones), NAPROXEN (relatively favourable cardiovascular profile — often preferred if a patient has heart disease and needs an NSAID), DICLOFENAC (effective but higher cardiovascular risk), INDOMETACIN (potent, poorly tolerated, used in gout and in closing a patent ductus arteriosus), KETOROLAC (very potent, short-term only, high bleeding risk), mefenamic acid, piroxicam.',
        cox_2_selective: 'CELECOXIB, ETORICOXIB. Better for the stomach, worse for the heart. Avoid in established cardiovascular disease.',
        aspirin_is_different: {
          why: 'Aspirin binds COX IRREVERSIBLY. A platelet has no nucleus and cannot make new enzyme, so a single low dose disables that platelet for its whole 7–10 day life. Endothelium CAN make new enzyme. That asymmetry is exactly why LOW-DOSE aspirin is antiplatelet while HIGH-DOSE aspirin is an anti-inflammatory.',
          reye_syndrome: 'AVOID aspirin in children and teenagers with a viral illness — REYE SYNDROME, an encephalopathy with fatty liver. Exceptions such as Kawasaki disease are specialist-directed.',
        },
        paracetamol_note: 'PARACETAMOL (acetaminophen) is an analgesic and antipyretic but a WEAK anti-inflammatory, works largely centrally, and does NOT carry the gastric, renal, platelet or cardiovascular profile of an NSAID. It is not an NSAID and should not be lumped in with them.',
      },

      the_four_predictable_harms: {
        gastrointestinal: 'Dyspepsia, erosion, ULCER, bleeding and perforation — and it can be PAINLESS, especially in the elderly, so the first sign may be a bleed. Risk rises with age, past ulcer, high dose, long duration, and combination with steroids, anticoagulants or SSRIs. Co-prescribe a PROTON PUMP INHIBITOR in anyone at risk.',
        renal: 'Prostaglandins keep the afferent arteriole open. Block them and renal perfusion falls — usually harmless in a healthy person, dangerous in anyone volume-depleted, elderly, or with existing kidney disease. The TRIPLE WHAMMY of an ACE inhibitor (or ARB) plus a DIURETIC plus an NSAID is a well-described cause of avoidable acute kidney injury. Also fluid retention, hypertension and hyperkalaemia.',
        cardiovascular: 'Increased myocardial infarction, stroke and heart failure with most NSAIDs, greatest with coxibs and diclofenac and lowest with naproxen. NSAIDs worsen heart failure and blunt antihypertensives. Ibuprofen can also block aspirin\'s antiplatelet effect if taken shortly before it.',
        respiratory_and_allergic: 'ASPIRIN-EXACERBATED RESPIRATORY DISEASE, also called SAMTER TRIAD: asthma + nasal polyps + NSAID sensitivity. Blocking COX diverts arachidonic acid down the LOX arm, flooding the airway with leukotrienes and causing severe bronchospasm. Ask every asthmatic about NSAID reactions before prescribing.',
      },

      the_lipoxygenase_drugs: {
        why_they_exist: 'If leukotrienes drive the asthma arm, blocking them treats asthma — particularly the aspirin-sensitive and exercise-induced types.',
        leukotriene_receptor_antagonists: 'MONTELUKAST, zafirlukast. Block the receptor. Oral, useful as add-on therapy in asthma and in allergic rhinitis. Important warning: montelukast carries NEUROPSYCHIATRIC adverse effects — sleep disturbance, vivid dreams, agitation, mood change and suicidal ideation, including in children. Parents must be told what to watch for.',
        synthesis_inhibitor: 'ZILEUTON blocks 5-lipoxygenase itself. Less used; needs liver monitoring.',
      },

      prescribing_rules_that_prevent_most_harm: [
        'Lowest effective dose, shortest possible duration. Review it — NSAIDs get repeated indefinitely without anyone reconsidering.',
        'Check renal function, blood pressure and the full drug list first, including over-the-counter and traditional remedies. Patients do not report ibuprofen as "medication".',
        'Co-prescribe a proton pump inhibitor for anyone with gastrointestinal risk factors.',
        'Naproxen where cardiovascular risk dominates; a coxib plus a proton pump inhibitor where gastrointestinal risk dominates and the heart is fine.',
        'Avoid entirely in significant renal impairment, active ulcer, heart failure, and in the third trimester of pregnancy (premature closure of the ductus arteriosus and oligohydramnios).',
        'Never combine two NSAIDs. The harms add; the benefit does not.',
      ],
    },
    warnings: [
      'Blocking COX-1 removes stomach protection, kidney perfusion and platelet function — that is the whole side-effect profile.',
      'COX-2 selective drugs spare the stomach but increase myocardial infarction and stroke risk. You trade one risk for another.',
      'NSAID ulceration can be PAINLESS in the elderly — the first sign may be a bleed.',
      'The TRIPLE WHAMMY — ACE inhibitor or ARB, plus diuretic, plus NSAID — is a well-described cause of avoidable acute kidney injury.',
      'Ask every asthmatic about NSAID sensitivity: aspirin-exacerbated respiratory disease (Samter triad) causes severe bronchospasm.',
      'Avoid aspirin in children and teenagers with viral illness — Reye syndrome.',
      'Naproxen has the most favourable cardiovascular profile; diclofenac and the coxibs the worst.',
      'Ibuprofen taken shortly before aspirin can block aspirin\'s antiplatelet effect.',
      'Montelukast causes neuropsychiatric effects including mood change and suicidal ideation, in children too. Warn parents explicitly.',
      'Avoid NSAIDs in the third trimester — premature ductus arteriosus closure and oligohydramnios.',
      'Paracetamol is NOT an NSAID and does not share these harms.',
      'Never combine two NSAIDs.',
    ],
    limitations: ['Doses, relative risk rankings and licensing vary by agent and country and are periodically revised. No doses are given here.'],
    cards: [
      { q: 'What does NSAID stand for?', a: 'Non-steroidal anti-inflammatory drug — non-steroidal distinguishes them from corticosteroids.' },
      { q: 'What do COX and LOX stand for?', a: 'Cyclo-oxygenase and lipoxygenase — the two enzymes acting on arachidonic acid.' },
      { q: 'COX-1 vs COX-2 in one line?', a: 'COX-1 is the constant housekeeper (stomach, kidney, platelets); COX-2 is induced by inflammation.' },
      { q: 'Why do coxibs increase cardiovascular risk?', a: 'They remove protective prostacyclin from vessels while leaving platelet thromboxane intact.' },
      { q: 'Why is low-dose aspirin antiplatelet but high-dose anti-inflammatory?', a: 'Aspirin binds COX irreversibly; platelets have no nucleus and cannot make more enzyme.' },
      { q: 'Which NSAID is preferred if cardiovascular risk dominates?', a: 'Naproxen.' },
      { q: 'What is Samter triad?', a: 'Asthma, nasal polyps and NSAID sensitivity — blocking COX diverts arachidonic acid to leukotrienes.' },
      { q: 'Which drugs block the leukotriene arm?', a: 'Montelukast and zafirlukast (receptor); zileuton (5-lipoxygenase).' },
      { q: 'What must parents be warned about with montelukast?', a: 'Neuropsychiatric effects — sleep disturbance, mood change, suicidal ideation.' },
      { q: 'Where do corticosteroids act on this pathway?', a: 'Phospholipase A2 — upstream of both arms, which is why they are more powerful and more toxic.' },
      { q: 'Is paracetamol an NSAID?', a: 'No — weak anti-inflammatory, largely central, without the gastric, renal or cardiovascular profile.' },
    ],
    checks: ['Renal function and blood pressure checked before prescribing', 'Full drug list including over-the-counter reviewed', 'Asthma and NSAID sensitivity asked about', 'Proton pump inhibitor co-prescribed if at risk', 'Agent matched to whether gastric or cardiovascular risk dominates', 'Duration set and a review date recorded', 'Two NSAIDs never combined'],
  },
];
