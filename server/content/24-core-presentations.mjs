/**
 * Four gaps found by following the disambiguation options to where they land.
 *
 * `MI`, `acute coronary syndrome` and `STEMI` all resolved onto the ISIS-2
 * trial; `diabetes mellitus` onto Urine Colour; `pulmonary embolism` onto Chest
 * Pain; `lung function tests` onto Thyroid Function Tests. Scout was offering
 * the right choice and then answering the wrong question.
 */

export default [
  {
    id: 'AS-CARD-0002',
    type: 'emergency',
    title: 'Acute Coronary Syndrome — STEMI, NSTEMI and Unstable Angina',
    short: 'Acute coronary syndrome',
    summary:
      'One spectrum, split by the ECG first and the troponin second. STEMI needs REPERFUSION now and the clock starts at first medical contact. The dangerous cases are the ones that do not present with crushing central chest pain — women, older people and those with diabetes.',
    domains: ['cardiovascular', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'acute coronary syndrome', 'acs', 'myocardial infarction', 'mi', 'heart attack', 'stemi',
      'nstemi', 'unstable angina', 'st elevation', 'coronary thrombosis', 'angina',
    ],
    terms: [
      'acs', 'stemi', 'nstemi', 'unstable angina', 'myocardial infarction', 'heart attack',
      'st elevation', 'st depression', 'reperfusion', 'thrombolysis', 'fibrinolysis', 'pci',
      'primary pci', 'door to balloon', 'door to needle', 'troponin', 'ischaemia', 'silent mi',
      'posterior mi', 'right ventricular infarct', 'reciprocal change',
    ],
    confirm_locally: true,
    body: {
      the_first_decision: {
        the_question: 'Is there ST ELEVATION (or a new left bundle branch block, or a true posterior infarct)? That single question splits the pathway.',
        stemi: 'ST elevation meeting threshold in two contiguous leads, new LBBB, or posterior MI. This is a COMPLETE occlusion. It needs REPERFUSION as fast as possible — primary PCI where available within the target time, otherwise FIBRINOLYSIS. Do not wait for troponin. The ECG is the trigger.',
        nstemi_and_unstable_angina:
          'No ST elevation. Distinguished from each other by TROPONIN: raised = NSTEMI, normal = unstable angina. Both are managed with antithrombotic therapy and RISK-STRATIFIED for the timing of angiography. Not immediate reperfusion, but not benign — NSTEMI has comparable or worse one-year mortality than STEMI.',
      },
      the_ecg: {
        get_it_fast: 'A 12-lead ECG within 10 minutes of arrival for any suspected cardiac chest pain. This is the single most time-critical investigation in the department.',
        territories: 'Inferior — II, III, aVF (right coronary usually). Anterior/septal — V1–V4 (LAD). Lateral — I, aVL, V5–V6 (circumflex). Knowing the territory predicts the complications.',
        reciprocal_change: 'ST DEPRESSION in the opposite territory strongly supports a true infarct rather than a mimic such as pericarditis or early repolarisation. Look for it actively.',
        the_two_that_are_missed: {
          posterior_mi:
            'Presents as ST DEPRESSION with a TALL R WAVE in V1–V3 — the mirror image, because no standard lead looks at the posterior wall. It is a STEMI-equivalent requiring reperfusion, and it is repeatedly managed as an NSTEMI. Do POSTERIOR leads (V7–V9) if you suspect it.',
          right_ventricular_infarct:
            'Accompanies inferior MI in a substantial minority. Do RIGHT-SIDED leads (V4R) in every inferior STEMI. It matters enormously because these patients are PRELOAD-DEPENDENT — NITRATES can cause catastrophic hypotension. They need FLUID, not vasodilators.',
        },
        a_normal_ecg_does_not_exclude_acs: 'Especially early. If the story is convincing, REPEAT the ECG — serially, and whenever the pain changes.',
      },
      atypical_presentation: {
        who: 'WOMEN, OLDER people, and those with DIABETES (autonomic neuropathy blunts the pain).',
        how_it_looks: 'Breathlessness alone, epigastric pain or "indigestion", nausea and vomiting, sweating, syncope, fatigue, or confusion in the elderly. A "silent" MI is common in diabetes.',
        the_practical_rule: 'New unexplained breathlessness, sweating or epigastric pain in an at-risk patient earns an ECG. The cost of an ECG is nothing; the cost of missing this is a life.',
      },
      the_immediate_management_principles: {
        note: 'Principles only — every agent, dose and timing target follows your local protocol.',
        steps: [
          'ECG within 10 minutes; continuous cardiac monitoring; IV access; defibrillator available.',
          'ASPIRIN immediately unless genuinely contraindicated. A second antiplatelet per protocol.',
          'Analgesia and antiemetic. Oxygen ONLY if hypoxic — routine oxygen in the non-hypoxic is not beneficial and may cause harm.',
          'STEMI → activate the reperfusion pathway NOW. Primary PCI if achievable within the target; otherwise fibrinolysis, with the checklist for contraindications.',
          'NSTEMI/UA → antithrombotic therapy and risk stratification to determine the timing of angiography.',
          'Treat the complications: arrhythmia, heart failure, cardiogenic shock, mechanical complications.',
        ],
        cautions: [
          'NITRATES are contraindicated in right ventricular infarction and in recent phosphodiesterase-5 inhibitor use — profound hypotension.',
          'Check fibrinolysis contraindications carefully, and consider AORTIC DISSECTION before giving any antithrombotic. Dissection can mimic inferior MI, and anticoagulating it is catastrophic.',
        ],
      },
      complications_by_timing: {
        immediate: 'Ventricular fibrillation and ventricular tachycardia — the commonest cause of death, and the reason for immediate monitoring and a defibrillator at hand. Bradycardia and heart block, especially with inferior infarcts.',
        early_days: 'Heart failure and cardiogenic shock, pericarditis, mural thrombus, and re-infarction.',
        mechanical_days_3_to_7: 'PAPILLARY MUSCLE RUPTURE (acute mitral regurgitation with a new murmur and flash pulmonary oedema), VENTRICULAR SEPTAL RUPTURE (new harsh murmur with shock), and FREE WALL RUPTURE (tamponade, usually fatal). A NEW MURMUR with deterioration after an MI is a surgical emergency until proven otherwise.',
        late: 'Ventricular aneurysm with persistent ST elevation, Dressler syndrome, arrhythmia and chronic heart failure.',
      },
      the_mimics_to_exclude: 'Aortic dissection, pulmonary embolism, pericarditis and myocarditis, oesophageal rupture or spasm, pneumothorax, and musculoskeletal pain. Dissection and PE are the two that are both common enough and lethal enough to actively exclude.',
    },
    warnings: [
      'ECG within 10 minutes. A normal early ECG does not exclude ACS — repeat it serially.',
      'ST depression with tall R waves in V1–V3 is a POSTERIOR STEMI, not an NSTEMI. It needs reperfusion.',
      'Do right-sided leads in every inferior STEMI. RV infarcts are preload-dependent — nitrates can cause catastrophic hypotension.',
      'Consider aortic dissection before any antithrombotic. It mimics inferior MI and anticoagulation is catastrophic.',
      'Women, older people and people with diabetes present atypically. Breathlessness or epigastric pain alone earns an ECG.',
      'Oxygen only if hypoxic. Routine oxygen in the non-hypoxic is not beneficial.',
      'A new murmur with deterioration days after an MI is a mechanical complication — surgical emergency.',
      'STEMI is diagnosed on the ECG. Do not wait for troponin to activate reperfusion.',
    ],
    limitations: ['Agents, doses, reperfusion time targets and risk-score thresholds are protocol- and country-specific. No doses are given here.'],
    cards: [
      { q: 'What splits the ACS pathway first?', a: 'ST elevation on the ECG — STEMI goes to immediate reperfusion, without waiting for troponin.' },
      { q: 'NSTEMI vs unstable angina?', a: 'Troponin. Raised = NSTEMI, normal = unstable angina.' },
      { q: 'ST depression with tall R waves in V1–V3?', a: 'Posterior STEMI — a reperfusion indication, commonly mismanaged as NSTEMI.' },
      { q: 'Why do right-sided leads in inferior STEMI?', a: 'To find RV infarction — those patients are preload-dependent and nitrates can crash them.' },
      { q: 'Who presents atypically?', a: 'Women, older people, and people with diabetes — breathlessness, epigastric pain, syncope, confusion.' },
      { q: 'New murmur plus deterioration on day 3–7 post MI?', a: 'Papillary muscle or septal rupture — surgical emergency.' },
      { q: 'Which mimic must be excluded before anticoagulating?', a: 'Aortic dissection.' },
    ],
    checks: ['ECG within 10 minutes', 'Serial ECGs if pain continues', 'Posterior and right-sided leads considered', 'Aspirin given', 'Dissection considered', 'Reperfusion pathway activated for STEMI', 'Monitoring and defibrillator available'],
  },

  {
    id: 'AS-ENDO-0003',
    type: 'guideline',
    title: 'Diabetes Mellitus — Diagnosis, Types and What Actually Prevents Harm',
    short: 'Diabetes mellitus',
    summary:
      'Diagnosis is straightforward; the errors are in TYPE and in FOLLOW-UP. Mislabelling type 1 as type 2 in a thin adult leads to DKA. And the things that most reduce harm — blood pressure, feet, eyes and kidneys — are not the glucose.',
    domains: ['endocrine', 'public_health'],
    intents: ['identify', 'classify', 'monitor'],
    hazard: 'critical',
    urgency: 'routine',
    aka: [
      'diabetes', 'diabetes mellitus', 'dm', 'type 1 diabetes', 'type 2 diabetes', 't1dm', 't2dm',
      'sugar disease', 'hyperglycaemia', 'prediabetes', 'impaired glucose tolerance',
      'gestational diabetes', 'hba1c', 'diabetic',
    ],
    terms: [
      'diabetes', 'diabetes mellitus', 'type 1', 'type 2', 'hba1c', 'glycated haemoglobin',
      'fasting glucose', 'ogtt', 'random glucose', 'polyuria', 'polydipsia', 'prediabetes',
      'gestational', 'mody', 'lada', 'c-peptide', 'retinopathy', 'nephropathy', 'neuropathy',
      'diabetic foot', 'microalbuminuria', 'ketones',
    ],
    confirm_locally: true,
    body: {
      making_the_diagnosis: {
        the_principle:
          'In a patient WITH symptoms (polyuria, polydipsia, weight loss, blurred vision), ONE diagnostic result is enough. In an ASYMPTOMATIC patient, the abnormal result must be REPEATED on a separate day before labelling someone diabetic for life.',
        the_tests: 'Fasting plasma glucose, a 2-hour value on an oral glucose tolerance test, a random glucose with symptoms, or HbA1c. Thresholds are set by the guideline your service follows — confirm them locally rather than recalling them.',
        prediabetes: 'Impaired fasting glucose and impaired glucose tolerance are not benign labels — they identify people in whom lifestyle intervention demonstrably reduces progression. This is one of the few places where prevention genuinely works.',
      },
      when_hba1c_must_not_be_used: {
        why_it_matters: 'HbA1c reflects glycation over the red cell lifespan, so ANYTHING that changes red cell turnover invalidates it. This is a frequent and consequential error, particularly where haemoglobinopathies are common.',
        do_not_rely_on_it_in: [
          'Any condition SHORTENING red cell survival — haemolysis, sickle cell disease, thalassaemia, malaria, recent transfusion, splenomegaly. HbA1c reads FALSELY LOW.',
          'Iron and B12 deficiency, which prolong red cell survival and can read FALSELY HIGH — and, importantly, the value FALLS on treating the deficiency without any change in glycaemia.',
          'PREGNANCY, advanced kidney disease and erythropoietin therapy.',
          'RAPIDLY evolving hyperglycaemia — new type 1 diabetes can present with catastrophic hyperglycaemia and a near-normal HbA1c, because there has not been time.',
        ],
        the_practical_rule: 'If the HbA1c and the glucose disagree, believe the GLUCOSE and ask why the HbA1c is unreliable.',
      },
      getting_the_type_right: {
        why_it_matters: 'This is where real harm occurs. A person with type 1 wrongly labelled type 2 and given oral agents will progress to DIABETIC KETOACIDOSIS. Type 1 can present at ANY age, and adults with type 1 are routinely misclassified because they are adults.',
        features_favouring_type_1: 'Younger age but not exclusively; LEAN body habitus; rapid onset over weeks; marked weight loss; KETONES present; personal or family history of autoimmune disease; and failure to respond to oral agents.',
        features_favouring_type_2: 'Gradual onset, overweight or central adiposity, acanthosis nigricans, strong family history, features of the metabolic syndrome, and no ketosis.',
        when_uncertain: 'C-peptide (measures endogenous insulin) and islet autoantibodies (GAD, IA-2, ZnT8) resolve most cases. LADA — latent autoimmune diabetes in adults — is slowly progressive type 1 in an adult and is the classic misclassification.',
        do_not_forget: 'SECONDARY diabetes — pancreatic disease including chronic pancreatitis and cancer, corticosteroids, endocrine causes (Cushing, acromegaly, phaeochromocytoma), HIV therapy, and MODY (a monogenic diabetes with a strong multi-generation family history and young onset, which is frequently mislabelled and sometimes needs no insulin at all).',
        the_safety_rule: 'If a patient with "type 2" diabetes has ketones or is losing weight rapidly, reconsider the type urgently and check for DKA.',
      },
      what_actually_reduces_harm: {
        the_uncomfortable_truth:
          'Intensive glucose lowering reduces MICROvascular complications, but blood pressure control, lipid management, smoking cessation and foot care do at least as much for overall outcome — often more, and faster. A consultation spent entirely on glucose has missed most of the available benefit.',
        the_annual_review: [
          'HbA1c, and an individualised target — tighter in the young and newly diagnosed, looser in the frail and in those with hypoglycaemia unawareness. A single target for everyone causes harm at both ends.',
          'BLOOD PRESSURE at every visit.',
          'FEET — inspect, and test sensation with a monofilament. Foot ulceration and amputation are among the most devastating and most preventable outcomes, and neuropathy means the patient will not feel the problem starting.',
          'EYES — retinal screening. Diabetic retinopathy is asymptomatic until it is advanced, which is exactly why screening exists.',
          'KIDNEYS — urine albumin:creatinine ratio and eGFR.',
          'Lipids, smoking status, weight, and injection sites where relevant.',
          'Vaccination, and pre-conception counselling in women of childbearing age.',
        ],
      },
      hypoglycaemia: {
        why_it_belongs_here: 'It is the commonest serious harm of TREATMENT, and it kills faster than hyperglycaemia.',
        recognise: 'Sweating, tremor, hunger, palpitations, then confusion, aggression, drowsiness, seizure and coma. In anyone with altered consciousness, CHECK THE GLUCOSE — always, and early.',
        the_traps: 'HYPOGLYCAEMIA UNAWARENESS after repeated episodes removes the warning symptoms entirely. Beta-blockers mask them. Sulfonylureas cause PROLONGED hypoglycaemia that recurs after initial correction, so these patients need observation and not discharge. Renal impairment, alcohol, missed meals and exercise all increase risk.',
      },
      the_acute_emergencies: 'DKA and HHS are covered separately. The rule that matters here: any unwell person with diabetes needs a glucose AND ketones checked, and "sick day rules" — never stop insulin when unwell — must be taught explicitly, because stopping insulin during illness is a common route into DKA.',
    },
    warnings: [
      'Type 1 can present at any age. A lean adult with rapid onset, weight loss or ketones is type 1 until proven otherwise — oral agents there lead to DKA.',
      'HbA1c is unreliable in haemoglobinopathy, haemolysis, malaria, recent transfusion, pregnancy, iron/B12 deficiency and advanced kidney disease.',
      'If HbA1c and glucose disagree, believe the glucose.',
      'New type 1 can present with severe hyperglycaemia and a near-normal HbA1c — there has not been time for glycation.',
      'In an asymptomatic patient, repeat an abnormal result on a separate day before diagnosing.',
      'Check the glucose in ANY patient with altered consciousness.',
      'Sulfonylurea hypoglycaemia is prolonged and recurs — observe, do not discharge after initial correction.',
      'Never stop insulin during illness. Teach sick day rules explicitly.',
      'Blood pressure, feet, eyes and kidneys deliver as much benefit as glucose control. Do not spend the whole consultation on sugar.',
    ],
    limitations: ['Diagnostic thresholds, HbA1c targets and drug choices are guideline- and country-specific. No doses are given here.'],
    cards: [
      { q: 'When does one abnormal result diagnose diabetes?', a: 'When the patient has symptoms. Otherwise repeat on a separate day.' },
      { q: 'When is HbA1c unreliable?', a: 'Haemoglobinopathy, haemolysis, malaria, transfusion, pregnancy, iron/B12 deficiency, advanced CKD, and rapid-onset diabetes.' },
      { q: 'HbA1c and glucose disagree — which do you believe?', a: 'The glucose. Then ask why the HbA1c is invalid.' },
      { q: 'Which features suggest type 1 in an adult?', a: 'Lean, rapid onset, weight loss, ketones, autoimmune history, failure of oral agents.' },
      { q: 'What is LADA?', a: 'Latent autoimmune diabetes in adults — slowly progressive type 1, classically misclassified as type 2.' },
      { q: 'Which tests resolve an uncertain type?', a: 'C-peptide and islet autoantibodies (GAD, IA-2, ZnT8).' },
      { q: 'Why is sulfonylurea hypoglycaemia dangerous?', a: 'It is prolonged and recurs after initial correction — these patients need observation.' },
      { q: 'What matters as much as glucose control?', a: 'Blood pressure, lipids, smoking cessation, feet, eyes and kidneys.' },
    ],
    checks: ['Type reconsidered if ketones or rapid weight loss', 'HbA1c validity checked against haemoglobinopathy and anaemia', 'Blood pressure recorded', 'Feet inspected and monofilament tested', 'Retinal screening arranged', 'ACR and eGFR sent', 'Sick day rules taught', 'Hypoglycaemia awareness assessed'],
  },

  {
    id: 'AS-RESP-0002',
    type: 'emergency',
    title: 'Pulmonary Embolism — Probability First, Then the Test',
    short: 'Pulmonary embolism',
    summary:
      'The order is what matters: score the probability BEFORE ordering a D-dimer. A D-dimer sent in a high-probability patient can only mislead, and a normal ECG, chest film and oxygen saturation together do not exclude PE.',
    domains: ['respiratory', 'emergency_medicine', 'cardiovascular'],
    intents: ['identify', 'investigate', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'pulmonary embolism', 'pe', 'pulmonary thromboembolism', 'vte', 'venous thromboembolism',
      'clot on the lung', 'massive pe', 'saddle embolus', 'ctpa',
    ],
    terms: [
      'pulmonary embolism', 'pe', 'vte', 'wells', 'perc', 'd-dimer', 'ctpa', 'v/q scan',
      'pleuritic', 'haemoptysis', 'dvt', 'right heart strain', 's1q3t3', 'thrombolysis',
      'anticoagulation', 'massive pe', 'submassive', 'provoked', 'unprovoked',
    ],
    confirm_locally: true,
    body: {
      the_order_of_operations: {
        the_rule: 'PROBABILITY FIRST. Use a validated score (Wells, Geneva) BEFORE choosing the test. The D-dimer is only interpretable once probability is established.',
        low_or_intermediate_probability: 'A NEGATIVE D-dimer safely excludes PE and avoids imaging. This is the only correct use of the test.',
        high_probability: 'Go STRAIGHT TO IMAGING. A negative D-dimer here does NOT exclude PE, so ordering it can only confuse the picture and delay treatment.',
        why_it_goes_wrong: 'D-dimer is raised by infection, surgery, trauma, malignancy, pregnancy, liver disease, age and hospitalisation. Used as a rule-IN test it generates needless imaging; used in high-probability patients it generates false reassurance.',
      },
      presentation: {
        classic: 'Sudden breathlessness, PLEURITIC chest pain, haemoptysis, tachycardia, tachypnoea.',
        the_problem: 'Presentation is highly variable. It can present as isolated unexplained breathlessness, as SYNCOPE, as unexplained tachycardia, as new atrial fibrillation, or as unexplained hypotension. Syncope in particular is under-recognised as a PE presentation.',
        what_does_not_exclude_it: [
          'A NORMAL chest X-ray — usual in PE, and its main role is excluding other causes.',
          'NORMAL oxygen saturation — common, especially in young patients with good reserve.',
          'A NORMAL ECG. Sinus tachycardia is the commonest finding. The classic S1Q3T3 is uncommon and its absence means nothing.',
          'The ABSENCE of leg signs. Most PEs arrive from veins that were clinically silent.',
        ],
      },
      risk_factors: {
        the_categories: 'Recent SURGERY or IMMOBILITY (including long travel and hospital admission), ACTIVE MALIGNANCY, PREGNANCY and the postpartum period, oestrogen-containing contraception or HRT, previous VTE, thrombophilia, obesity, and increasing age.',
        the_key_split: 'PROVOKED (a clear transient risk factor) versus UNPROVOKED. This drives the duration of anticoagulation and whether to look for an underlying cause, so it must be documented at diagnosis.',
      },
      investigation: {
        ctpa: 'The usual definitive test. Considerations: contrast nephropathy, contrast allergy, and radiation — the last being particularly relevant in young women, where breast dose matters.',
        vq: 'Preferred where CTPA is contraindicated, and often preferred in PREGNANCY and in young women with a normal chest film.',
        echo: 'Not a diagnostic test for PE, but invaluable in the haemodynamically UNSTABLE patient who cannot go to the scanner — right ventricular strain or dilatation supports the diagnosis and can justify treating on the spot.',
        leg_ultrasound: 'A positive proximal DVT scan in a patient with suspected PE is enough to justify anticoagulation without further imaging — useful when CTPA is unavailable or contraindicated.',
      },
      pregnancy: 'PE is a leading cause of maternal death. D-dimer rises physiologically in pregnancy, which degrades its usefulness. Do NOT withhold imaging out of concern about radiation — the risk of a missed PE is far greater. Use the pathway your obstetric service specifies, with leg ultrasound first where appropriate.',
      severity_and_treatment_principles: {
        note: 'Principles only. Agents, doses and thresholds follow your local protocol.',
        massive_high_risk: 'PE with HYPOTENSION or shock. Consider THROMBOLYSIS or embolectomy. Mortality is high and the decision is time-critical.',
        submassive_intermediate: 'Normotensive but with right ventricular strain on imaging or echo, or raised troponin or BNP. Anticoagulate and monitor closely — a subset deteriorates.',
        low_risk: 'Anticoagulate. Selected patients can be managed as outpatients using a validated severity score.',
        general: 'Start anticoagulation while awaiting imaging if clinical suspicion is high and bleeding risk permits — do not let a scan delay treatment in a sick patient.',
      },
      after_the_event: [
        'Document PROVOKED versus UNPROVOKED — it determines anticoagulation duration.',
        'Age- and sex-appropriate cancer screening in unprovoked VTE. Extensive occult malignancy screening is not routinely indicated.',
        'Review oestrogen-containing contraception or HRT.',
        'Warn about the small but real risk of chronic thromboembolic pulmonary hypertension if breathlessness persists.',
      ],
    },
    warnings: [
      'Score probability BEFORE ordering a D-dimer. In high probability, image regardless of the result.',
      'A positive D-dimer means "image", never "treat".',
      'A normal chest X-ray, normal saturations and a normal ECG do NOT exclude PE.',
      'Absence of leg signs does not exclude PE — most originate from clinically silent veins.',
      'Syncope and new atrial fibrillation can be the only presentation.',
      'Do not withhold imaging in pregnancy because of radiation. PE is a leading cause of maternal death.',
      'If suspicion is high and bleeding risk permits, anticoagulate while awaiting the scan.',
      'Document provoked versus unprovoked at diagnosis — it determines treatment duration.',
    ],
    limitations: ['Scores, imaging pathways, thrombolysis criteria and anticoagulant choice are protocol-specific. No doses are given here.'],
    cards: [
      { q: 'What must happen before ordering a D-dimer?', a: 'Score the pre-test probability. D-dimer is only interpretable afterwards.' },
      { q: 'High probability with a negative D-dimer?', a: 'Image anyway. A negative result does not exclude PE at high probability.' },
      { q: 'Does a normal chest X-ray exclude PE?', a: 'No — it is usually normal. Its role is excluding other causes.' },
      { q: 'Commonest ECG finding in PE?', a: 'Sinus tachycardia. S1Q3T3 is uncommon and its absence means nothing.' },
      { q: 'Unstable patient who cannot go to CT?', a: 'Bedside echo — right ventricular strain supports treating on the spot.' },
      { q: 'Why does provoked vs unprovoked matter?', a: 'It determines the duration of anticoagulation and whether to look further.' },
      { q: 'PE in pregnancy — imaging concern?', a: 'Do not withhold imaging. Missed PE is a leading cause of maternal death.' },
    ],
    checks: ['Pre-test probability scored first', 'D-dimer used only at low/intermediate probability', 'Imaging arranged without delay at high probability', 'Haemodynamic status assessed for massive PE', 'Anticoagulation started if suspicion high and bleeding risk permits', 'Provoked vs unprovoked documented', 'Contraception and HRT reviewed'],
  },

  {
    id: 'AS-RESP-0003',
    type: 'test',
    title: 'Spirometry and Lung Function Tests — Obstructive Versus Restrictive',
    short: 'Spirometry',
    summary:
      'The FEV1/FVC RATIO decides obstructive versus restrictive, and nothing else does. A low FEV1 alone tells you nothing about which. Reversibility separates asthma from COPD, and effort dependence means a bad technique produces a confident wrong answer.',
    domains: ['respiratory', 'laboratory_medicine'],
    intents: ['investigate', 'classify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: [
      'spirometry', 'lung function tests', 'lft respiratory', 'pulmonary function tests', 'pft',
      'fev1', 'fvc', 'peak flow', 'pefr', 'reversibility testing', 'flow volume loop',
      'transfer factor', 'dlco', 'obstructive', 'restrictive',
    ],
    terms: [
      'spirometry', 'lung function', 'pulmonary function', 'fev1', 'fvc', 'fev1/fvc', 'ratio',
      'peak flow', 'pefr', 'reversibility', 'bronchodilator', 'flow volume loop', 'dlco',
      'transfer factor', 'tlco', 'obstructive', 'restrictive', 'gold', 'asthma', 'copd',
      'fibrosis', 'lung volumes', 'residual volume',
    ],
    confirm_locally: true,
    body: {
      the_one_number_that_matters_first: {
        the_ratio: 'FEV1/FVC. This is what separates the two patterns, and reading FEV1 alone is the commonest error.',
        obstructive: 'RATIO REDUCED. Airflow is limited, so FEV1 falls proportionally more than FVC. Asthma, COPD, bronchiectasis, bronchiolitis.',
        restrictive: 'RATIO NORMAL OR RAISED, with BOTH FEV1 and FVC reduced. The lungs cannot fill. Interstitial lung disease, chest wall and spinal deformity such as kyphoscoliosis, neuromuscular weakness, obesity, large pleural effusion, and extensive pulmonary resection.',
        the_key_insight: 'A LOW FEV1 ALONE DOES NOT MEAN OBSTRUCTION. In restriction FEV1 is also low — but so is FVC, so the ratio is preserved. Always read the ratio.',
        mixed: 'Both patterns can coexist, and formal lung volumes are then needed to confirm true restriction.',
      },
      reversibility_testing: {
        what: 'Repeat spirometry after a bronchodilator.',
        significant_reversibility: 'Supports ASTHMA. The thresholds for "significant" are defined by the guideline your service uses — confirm them locally.',
        the_caveats: [
          'ASTHMA CAN BE IRREVERSIBLE at the moment of testing, especially if well controlled or if the patient took their inhaler beforehand. A negative test does not exclude asthma.',
          'COPD can show SOME reversibility. Reversibility is a spectrum and not a binary label, and the two conditions overlap.',
          'Asthma is variable by nature, so normal spirometry between episodes is entirely expected. Serial peak flow diaries, or testing when symptomatic, are often more informative than a single normal test.',
        ],
      },
      peak_flow: {
        what: 'A crude, effort-dependent measure of large-airway flow.',
        where_it_is_genuinely_useful: 'Monitoring known asthma over time, assessing acute severity against the patient own best, and demonstrating diurnal variability or occupational patterns with a diary.',
        limitations: 'It is NOT a diagnostic substitute for spirometry, it does not distinguish obstructive from restrictive disease, and it is insensitive to small-airway disease. Always compare against the patient personal best rather than a predicted value where one is known.',
      },
      the_flow_volume_loop: {
        why_it_is_worth_looking_at: 'The SHAPE carries information no number does.',
        patterns: [
          'Obstruction — a scooped, concave expiratory limb.',
          'Restriction — a narrow loop of normal shape, small in both axes.',
          'FIXED UPPER AIRWAY OBSTRUCTION — flattening of BOTH inspiratory and expiratory limbs. Tracheal stenosis, goitre, tumour.',
          'VARIABLE EXTRATHORACIC obstruction — flattened INSPIRATORY limb. Vocal cord dysfunction, which is regularly and mistakenly treated as refractory asthma for years.',
        ],
        the_practical_value: 'A patient labelled "difficult asthma" who is not responding deserves a look at the loop before treatment is escalated further.',
      },
      transfer_factor: {
        what: 'DLCO/TLCO measures gas transfer across the alveolar membrane.',
        low: 'Emphysema, interstitial lung disease, pulmonary vascular disease including pulmonary hypertension and chronic PE, and anaemia.',
        raised: 'Alveolar haemorrhage, polycythaemia, and left-to-right shunt.',
        the_discriminating_use: 'It separates ASTHMA (transfer factor NORMAL or high) from EMPHYSEMA (transfer factor LOW), when spirometry alone shows obstruction in both. Correct for haemoglobin — anaemia lowers it independently of any lung disease.',
      },
      quality_and_interpretation: {
        effort_dependence:
          'Spirometry is EFFORT-DEPENDENT. Poor technique, submaximal effort, a leaking mouth seal, coughing or early termination all produce results that look like restriction. An uninterpretable test reported as a number is worse than no test, because it will be acted on. Check that acceptability and repeatability criteria were met before interpreting anything.',
        predicted_values: 'Results are compared against predicted values for age, sex, height and ethnicity. Using an inappropriate reference set systematically misclassifies patients. Know which reference equation your device uses.',
        contraindications_and_timing: 'Relative contraindications include recent myocardial infarction, pneumothorax, recent eye or abdominal surgery, and haemoptysis. Defer testing during an acute exacerbation or active infection — results will not represent the patient baseline.',
      },
    },
    warnings: [
      'Read the FEV1/FVC RATIO. A low FEV1 alone does not mean obstruction — it is also low in restriction.',
      'Normal spirometry does not exclude asthma. It is variable by definition; test when symptomatic or use a peak flow diary.',
      'A negative reversibility test does not exclude asthma, and some reversibility does not exclude COPD.',
      'Peak flow is not a substitute for spirometry and cannot distinguish obstructive from restrictive disease.',
      'A flattened inspiratory limb suggests vocal cord dysfunction — commonly misdiagnosed as refractory asthma for years.',
      'Spirometry is effort-dependent. Confirm acceptability and repeatability criteria were met before interpreting.',
      'Correct the transfer factor for haemoglobin — anaemia lowers it independently of lung disease.',
      'Defer testing during an acute exacerbation; the result will not represent baseline.',
    ],
    limitations: ['Reversibility thresholds, severity grading and reference equations are guideline- and device-specific. Confirm which your service uses.'],
    cards: [
      { q: 'Which single value separates obstructive from restrictive?', a: 'The FEV1/FVC ratio. Reduced = obstructive; normal or raised with low FVC = restrictive.' },
      { q: 'Why is a low FEV1 alone uninformative?', a: 'FEV1 falls in restriction too — but so does FVC, preserving the ratio.' },
      { q: 'Does normal spirometry exclude asthma?', a: 'No. Asthma is variable — test when symptomatic or use a serial peak flow diary.' },
      { q: 'Flattened inspiratory limb on the loop?', a: 'Variable extrathoracic obstruction — think vocal cord dysfunction, often mislabelled refractory asthma.' },
      { q: 'How does transfer factor separate asthma from emphysema?', a: 'Normal or high in asthma; LOW in emphysema.' },
      { q: 'What must the transfer factor be corrected for?', a: 'Haemoglobin — anaemia lowers it independently.' },
      { q: 'Why can poor technique mimic restriction?', a: 'Submaximal effort or early termination reduces FVC, producing a falsely restrictive pattern.' },
    ],
    checks: ['Ratio read before FEV1', 'Acceptability and repeatability criteria met', 'Reversibility performed where asthma suspected', 'Flow volume loop shape inspected', 'Transfer factor corrected for haemoglobin', 'Testing deferred if acutely unwell', 'Correct reference equation confirmed'],
  },
];
