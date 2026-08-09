/**
 * Two category splits that the existing entries blurred.
 *
 * `AS-DRUG-0003` covered digoxin as one block — mechanism, indications,
 * toxicity together. The distinction that actually causes errors is DIGOXIN
 * EFFECT (an expected ECG change in a correctly dosed patient) versus DIGOXIN
 * TOXICITY (a different, dangerous entity). They are separated here.
 *
 * Heart failure was likewise described by treatment ("the four pillars") and by
 * syndrome, but never classified by ejection fraction, which is the split that
 * decides which treatments apply at all.
 */

export default [
  {
    id: 'AS-CARD-0008',
    type: 'waveform',
    title: 'Digoxin Effect Versus Digoxin Toxicity — Two Different Things',
    short: 'Digoxin effect vs toxicity',
    summary:
      'The scooped ST depression of DIGOXIN EFFECT is an EXPECTED finding in a correctly dosed patient and means nothing is wrong. DIGOXIN TOXICITY is a different entity with different ECG findings, and the level does not decide which one you are looking at.',
    domains: ['cardiovascular', 'toxicology', 'pharmacology'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'digoxin effect', 'digoxin toxicity', 'reverse tick', 'reverse tick sign', 'salvador dali sagging',
      'scooped st depression', 'digitalis effect', 'digitalis toxicity', 'dig effect', 'dig toxicity',
      'bidirectional ventricular tachycardia', 'xanthopsia', 'digoxin immune fab', 'digifab',
    ],
    terms: [
      'digoxin effect', 'digoxin toxicity', 'reverse tick', 'scooped', 'sagging st', 'downsloping',
      'salvador dali', 'shortened qt', 'bidirectional vt', 'atrial tachycardia with block', 'paced',
      'xanthopsia', 'yellow green halos', 'hyperkalaemia', 'hypokalaemia', 'digoxin immune fab',
      'digibind', 'digifab', 'narrow therapeutic index', 'calcium', 'stone heart',
    ],
    confirm_locally: true,
    body: {
      the_distinction_that_matters: {
        the_error:
          'A scooped ST segment on the ECG of a patient taking digoxin is repeatedly reported as "digoxin toxicity". It is not. It is DIGOXIN EFFECT — the expected electrophysiological signature of the drug being present. Treating it as poisoning leads to stopping a drug that is working; ignoring genuine toxicity because "the level is in range" leads to death. The two are separate questions.',
        the_rule: 'DIGOXIN EFFECT is about the ST SEGMENT and is benign. DIGOXIN TOXICITY is about RHYTHM plus SYSTEMIC symptoms, and it is a clinical diagnosis.',
      },
      digoxin_effect: {
        what_it_is: 'The normal repolarisation change caused by therapeutic digoxin. It indicates the drug is present. It does NOT indicate the dose is right, and it does not indicate the dose is wrong.',
        the_ecg: {
          st_segment: 'DOWNSLOPING ST depression with a distinctive concave, "SCOOPED" shape — described as the REVERSE TICK sign (like a tick mark drawn backwards) or as "SALVADOR DALÍ sagging", after the drooping clocks. It is most obvious in the lateral leads (V5, V6, I, aVL) where the R waves are tallest.',
          t_wave: 'FLATTENED, biphasic or INVERTED T waves.',
          qt_interval: 'SHORTENED QT — a useful discriminator, because most causes of ST-T change either lengthen the QT or leave it alone. Shortening points at digoxin.',
          pr_interval: 'Mildly PROLONGED, from the drug\'s vagal effect slowing AV nodal conduction.',
          u_wave: 'May become prominent.',
        },
        why_it_gets_confused_with_ischaemia:
          'Downsloping ST depression also occurs in ischaemia and in left ventricular strain. The discriminators are the SCOOPED shape rather than a straight or upsloping line, the SHORT QT rather than a normal or long one, and the clinical context. When genuinely uncertain, treat the patient: digoxin effect does not cause chest pain.',
        what_to_do: 'Nothing. Record it, and do not order a digoxin level because of it alone.',
      },
      digoxin_toxicity: {
        what_it_is: 'Poisoning. A clinical diagnosis based on symptoms, rhythm and electrolytes — NOT on the serum level alone. Toxicity occurs at "therapeutic" levels when potassium, magnesium or renal function are wrong, and a high level in an asymptomatic patient with a normal rhythm may not need treatment.',
        the_ecg_findings: {
          the_unifying_mechanism: 'Digoxin causes INCREASED AUTOMATICITY with DEPRESSED CONDUCTION. That combination is the signature: fast, ectopic activity happening at the same time as block. Almost any arrhythmia can occur, but the ones that should raise digoxin immediately are:',
          the_near_specific_one: 'BIDIRECTIONAL VENTRICULAR TACHYCARDIA — a broad complex tachycardia in which the QRS axis alternates beat to beat. It is rare and highly suggestive; the other main cause is catecholaminergic polymorphic VT.',
          the_classic_combination: 'ATRIAL TACHYCARDIA WITH AV BLOCK — a fast atrium with a blocked conduction system in the same tracing. This is the increased-automaticity-plus-depressed-conduction pattern made visible, and it is close to a fingerprint.',
          the_others: 'Frequent ventricular ectopy and bigeminy, any degree of AV block, junctional rhythms, severe bradycardia, and — a specific pattern worth knowing — REGULARISED atrial fibrillation, where a previously irregular AF becomes regular because of complete AV block with a junctional escape. A regular rhythm in a patient known to be in AF is a red flag, not reassurance.',
        },
        the_systemic_features: {
          gastrointestinal: 'Anorexia, nausea, vomiting and abdominal pain — usually the EARLIEST symptoms, and routinely attributed to something else in an elderly patient.',
          neurological: 'Confusion, drowsiness, weakness, headache, and in older patients a delirium that gets blamed on age or infection.',
          visual: 'The distinctive one — XANTHOPSIA: a yellow-green tinge to vision, with HALOES around lights. Also blurring and altered colour perception. Ask about it directly; patients rarely volunteer "things look yellow" as a drug side effect.',
        },
        the_electrolytes_that_drive_it: {
          hypokalaemia: 'The commonest precipitant of CHRONIC toxicity. Digoxin and potassium COMPETE for the same binding site on the Na/K-ATPase, so a LOW potassium means MORE digoxin binds and toxicity occurs at an ordinary level. Diuretics therefore cause digoxin toxicity indirectly and constantly. Also correct MAGNESIUM — hypomagnesaemia both causes refractory hypokalaemia and independently worsens toxicity.',
          hyperkalaemia_in_acute_overdose: 'The opposite direction, and it is a SEVERITY MARKER rather than a cause. In acute overdose the pump is massively inhibited, so potassium leaks out of cells and the serum potassium RISES. A high potassium in acute digoxin overdose predicts mortality and is an indication for antidote.',
          the_trap: 'Do NOT reflexively give intravenous CALCIUM for hyperkalaemia if digoxin toxicity is the cause. The traditional teaching is that it precipitates an inexcitable "stone heart"; the modern evidence for that is weaker than once believed, but the safe course remains to treat the digoxin with the antidote rather than reach for calcium first. Follow your local toxicology advice.',
          other_precipitants: 'RENAL IMPAIRMENT (digoxin is renally cleared — an AKI turns a stable dose into an overdose), hypercalcaemia, hypothyroidism, age, low body weight, and DRUG INTERACTIONS: amiodarone, verapamil, quinidine, macrolides, itraconazole and spironolactone all raise digoxin levels.',
        },
        management_principles: [
          'Stop the digoxin.',
          'Continuous cardiac monitoring, and correct potassium and magnesium carefully.',
          'Treat bradyarrhythmia with atropine; pacing may be needed, though it carries risk in a hyper-excitable myocardium.',
          'DIGOXIN IMMUNE FAB is the antidote and is indicated for life-threatening arrhythmia, significant hyperkalaemia in acute overdose, haemodynamic instability or a very large ingestion. It works fast.',
          'Digoxin is NOT removed by dialysis — the volume of distribution is far too large. This is asked constantly and got wrong constantly.',
          'Avoid class Ia and Ic antiarrhythmics; discuss with toxicology.',
        ],
      },
      the_bedside_summary: 'Scooped ST with a short QT in a well patient = EFFECT, leave it alone. Any new arrhythmia, nausea, confusion or yellow vision in someone on digoxin = TOXICITY until proven otherwise, whatever the level says.',
    },
    warnings: [
      'Digoxin EFFECT is not toxicity. Scooped ST depression with a short QT is expected and needs no action.',
      'Toxicity is a CLINICAL diagnosis. It occurs at therapeutic levels, and a high level without symptoms or arrhythmia may not need treatment.',
      'HYPOkalaemia precipitates chronic toxicity because potassium and digoxin compete for the same binding site. Diuretics are the usual route in.',
      'HYPERkalaemia in ACUTE overdose is a severity marker and an indication for antidote.',
      'Do not reach for intravenous calcium first in digoxin-associated hyperkalaemia — treat the digoxin. Follow local toxicology advice.',
      'Bidirectional VT, and atrial tachycardia with AV block, should make you think digoxin immediately.',
      'A previously irregular AF that becomes REGULAR suggests complete AV block with a junctional escape — a red flag, not improvement.',
      'Ask directly about yellow-green vision and haloes. Patients do not volunteer it.',
      'Digoxin is NOT dialysable — the volume of distribution is far too large.',
      'Any AKI turns a stable digoxin dose into an overdose. Recheck renal function whenever the patient is unwell.',
      'Amiodarone, verapamil, macrolides and spironolactone all raise digoxin levels.',
    ],
    limitations: ['Levels, antidote dosing and arrhythmia management are protocol- and toxicology-directed. No doses are given here.'],
    cards: [
      { q: 'What is the reverse tick sign?', a: 'The scooped downsloping ST depression of digoxin EFFECT — expected, not toxicity.' },
      { q: 'Which interval helps separate digoxin effect from ischaemia?', a: 'The QT — digoxin SHORTENS it, most other causes do not.' },
      { q: 'Is digoxin toxicity diagnosed on the level?', a: 'No — it is clinical. It occurs at therapeutic levels and a high level may not need treating.' },
      { q: 'Why does hypokalaemia cause toxicity?', a: 'Potassium and digoxin compete for the same site on the Na/K-ATPase, so less potassium means more digoxin bound.' },
      { q: 'What does hyperkalaemia mean in acute overdose?', a: 'A severity marker predicting mortality — an indication for digoxin immune Fab.' },
      { q: 'Which arrhythmia is near-specific?', a: 'Bidirectional ventricular tachycardia; also atrial tachycardia with AV block.' },
      { q: 'What does a regular rhythm in known AF suggest?', a: 'Complete AV block with junctional escape — digoxin toxicity.' },
      { q: 'What is xanthopsia?', a: 'Yellow-green vision with haloes around lights.' },
      { q: 'Can dialysis remove digoxin?', a: 'No — the volume of distribution is far too large.' },
    ],
    checks: ['ST shape and QT assessed before calling it toxicity', 'Potassium, magnesium and renal function checked', 'Visual and GI symptoms asked about directly', 'Interacting drugs reviewed', 'Rhythm strip examined for block with ectopy', 'Toxicology contacted if antidote considered'],
    related: ['digoxin_use_cautions_and_toxicity'],
  },

  {
    id: 'AS-CARD-0009',
    type: 'classification',
    title: 'Heart Failure by Ejection Fraction — HFrEF, HFmrEF, HFpEF and Recovered',
    short: 'Heart failure classification',
    summary:
      'The ejection fraction decides which treatments apply. HFrEF has four drugs that change survival; HFpEF is a stiff ventricle where most of those drugs have never worked, and the treatment is the comorbidities plus an SGLT2 inhibitor.',
    domains: ['cardiovascular'],
    intents: ['classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'heart failure classification', 'ejection fraction', 'lvef', 'hfref', 'hfmref', 'hfpef',
      'hfrecef', 'recovered ejection fraction', 'systolic heart failure', 'diastolic heart failure',
      'preserved ejection fraction', 'reduced ejection fraction', 'nyha',
    ],
    terms: [
      'ejection fraction', 'lvef', 'hfref', 'hfmref', 'hfpef', 'hfrecef', 'systolic', 'diastolic',
      'preserved', 'reduced', 'mildly reduced', 'recovered', 'nyha', 'four pillars', 'sglt2',
      'natriuretic peptide', 'bnp', 'nt-probnp', 'echocardiography', 'stroke volume',
    ],
    confirm_locally: true,
    body: {
      what_the_number_means: {
        definition: 'EJECTION FRACTION is the proportion of the blood in the left ventricle at the end of filling that is ejected with each beat — stroke volume divided by end-diastolic volume. Normal is roughly 50–70%.',
        the_thing_to_understand:
          'It is a RATIO, not a measure of how much blood is pumped. A small, stiff ventricle can eject 60% of a tiny volume and still deliver an inadequate cardiac output — which is exactly what happens in HFpEF. A normal ejection fraction therefore does NOT mean a normal heart or an adequate output.',
        how_it_is_measured: 'Usually echocardiography, which is operator-dependent with meaningful inter-observer variation — so a change of a few points between scans may be measurement, not disease. Cardiac MRI is the reference standard.',
      },
      the_four_categories: {
        hfref: {
          ef: '40% or below',
          formerly: 'Systolic heart failure',
          the_problem: 'The ventricle cannot CONTRACT adequately. It is typically dilated with thin walls — eccentric remodelling.',
          causes: 'Ischaemic heart disease (the commonest), previous myocardial infarction, dilated cardiomyopathy, valvular disease, myocarditis, alcohol, chemotherapy (anthracyclines, trastuzumab), peripartum, tachycardia-induced, and thyroid disease.',
          why_this_category_matters_most: 'It is the ONLY category with a large body of evidence for drugs that reduce MORTALITY. The four pillars — an ARNI or ACE inhibitor/ARB, a beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor — each independently improve survival and should be started early and titrated, not sequenced slowly one at a time. Device therapy (ICD, CRT) applies here too.',
        },
        hfmref: {
          ef: '41% to 49%',
          formerly: 'Mid-range ejection fraction — deliberately renamed to MILDLY REDUCED, because "mid-range" implied a benign middle ground and this group behaves much more like HFrEF than like HFpEF.',
          the_practical_position: 'Evidence is weaker because these patients were often excluded from trials, but subgroup and pooled data support using HFrEF therapies. Treat it as HFrEF unless there is a reason not to. Importantly, this group is UNSTABLE as a label — many are moving in one direction or the other, so repeat the echo.',
        },
        hfpef: {
          ef: '50% or above',
          formerly: 'Diastolic heart failure',
          the_problem: 'The ventricle contracts normally but is STIFF and cannot RELAX and FILL. Filling pressures rise, and that pressure is transmitted back to the lungs — which is why the patient is breathless despite a "normal" heart on a report.',
          who: 'Older patients, more often women, with HYPERTENSION (the dominant driver), obesity, diabetes, atrial fibrillation, chronic kidney disease and sleep apnoea. It now accounts for around half of all heart failure and the proportion is rising.',
          the_diagnostic_difficulty:
            'The echo can look near-normal, so the diagnosis rests on symptoms and signs of heart failure PLUS evidence of raised filling pressures — natriuretic peptides, diastolic indices, left atrial enlargement, or a stress test. It is frequently misattributed to obesity, deconditioning or lung disease for years. Note that natriuretic peptides are LOWER in obesity, so a normal BNP in a very obese breathless patient does not exclude HFpEF.',
          the_treatment_reality:
            'Be honest about this: the drugs that transformed HFrEF have largely FAILED to show mortality benefit in HFpEF. What is established is SGLT2 INHIBITORS, which reduce hospitalisation and cardiovascular death and are now first-line. Beyond that: diuretics for congestion (symptom relief only), and aggressive treatment of the CAUSES — blood pressure, weight, atrial fibrillation, sleep apnoea, diabetes. Mineralocorticoid antagonists have a role in selected patients. Exercise training genuinely helps.',
          the_mimics_that_must_be_excluded: 'Before settling on HFpEF, exclude the specific and treatable causes of a stiff ventricle: CARDIAC AMYLOIDOSIS (suspect it with a thick ventricle and LOW ECG voltages, carpal tunnel syndrome, or intolerance of standard heart failure drugs), hypertrophic cardiomyopathy, constrictive pericarditis, and significant valve disease. Amyloidosis in particular is now treatable and is routinely missed.',
        },
        hfrecef: {
          ef: 'Previously 40% or below, now improved to above 40% — often 50% or more',
          what_it_means: 'HEART FAILURE WITH RECOVERED (or improved) ejection fraction. The ventricle has remodelled favourably on treatment, or the cause was reversible — tachycardia-induced, peripartum, alcohol, myocarditis, thyroid.',
          the_critical_point:
            'RECOVERED IS NOT CURED. Withdrawing heart failure therapy in these patients causes RELAPSE in a substantial proportion, and the TRED-HF trial demonstrated exactly that. The improvement is the treatment working, not the disease being gone. Continue the medication and continue follow-up unless there is a specific reason and specialist oversight.',
        },
      },
      the_two_axes_people_conflate: {
        ejection_fraction: 'Classifies the PHENOTYPE and decides which drugs apply. It changes slowly.',
        nyha_class: 'Classifies current SYMPTOM severity — I no limitation, II slight, III marked, IV symptoms at rest. It changes week to week and can be III today and II next month on the same ejection fraction.',
        the_point: 'They are independent. A patient can have an ejection fraction of 25% and be NYHA I. Quote both, and never substitute one for the other.',
      },
      the_universal_principle: 'Heart failure is a SYNDROME, not a diagnosis. Whatever the ejection fraction, the question "what caused this?" must still be answered — ischaemia, valve disease, arrhythmia, thyroid, alcohol, infiltration, hypertension — because several of those causes are treatable in their own right and the label alone treats nobody.',
    },
    warnings: [
      'A normal ejection fraction does not mean a normal heart. It is a ratio — a small stiff ventricle can eject 60% of too little.',
      'RECOVERED is not cured. Withdrawing therapy causes relapse in a substantial proportion — continue treatment and follow-up.',
      'Do not sequence the four pillars slowly one at a time in HFrEF; all four independently improve survival and should be started early and titrated.',
      'In HFpEF, most HFrEF drugs have not shown mortality benefit. SGLT2 inhibitors are the established therapy; the rest is treating the causes.',
      'Natriuretic peptides are LOWER in obesity — a normal BNP does not exclude HFpEF in a very obese breathless patient.',
      'Exclude cardiac amyloidosis before settling on HFpEF — thick ventricle with LOW ECG voltages, carpal tunnel, or intolerance of heart failure drugs.',
      'Echo ejection fraction is operator-dependent. A few points of change between scans may be measurement, not disease.',
      'HFmrEF behaves more like HFrEF than HFpEF — treat it as HFrEF unless there is a reason not to.',
      'Ejection fraction and NYHA class are independent. Quote both.',
      'Heart failure is a syndrome — always answer what caused it.',
    ],
    limitations: ['Cut-offs and drug recommendations follow the guideline your service uses and are periodically revised. No doses are given here.'],
    cards: [
      { q: 'Give the four ejection fraction categories.', a: 'HFrEF ≤40%, HFmrEF 41–49%, HFpEF ≥50%, and HFrecEF previously ≤40% now improved.' },
      { q: 'Why can a normal ejection fraction still be heart failure?', a: 'It is a ratio — a small stiff ventricle ejects a normal fraction of an inadequate volume.' },
      { q: 'What are the four pillars, and for which category?', a: 'ARNI/ACEi, beta-blocker, MRA, SGLT2 inhibitor — for HFrEF. All four improve survival.' },
      { q: 'What is established treatment in HFpEF?', a: 'SGLT2 inhibitors, diuretics for symptoms, and aggressive treatment of the causes.' },
      { q: 'Why does obesity matter when interpreting BNP?', a: 'Natriuretic peptides are lower in obesity — a normal value does not exclude HFpEF.' },
      { q: 'Which treatable mimic of HFpEF is routinely missed?', a: 'Cardiac amyloidosis — thick ventricle with low ECG voltages.' },
      { q: 'Can heart failure drugs be stopped once EF recovers?', a: 'No — TRED-HF showed relapse. Recovered is not cured.' },
      { q: 'How do EF and NYHA class differ?', a: 'EF is the phenotype and changes slowly; NYHA is current symptoms and changes week to week.' },
    ],
    checks: ['Ejection fraction documented with the measurement method', 'Category assigned and NYHA class recorded separately', 'Cause of the heart failure identified', 'Four pillars started and titrated if HFrEF', 'SGLT2 inhibitor considered if HFpEF', 'Amyloidosis considered before settling on HFpEF', 'Therapy continued if EF has recovered'],
    related: ['heart_failure_and_atrial_fibrillation_recognition_and_the_decisions_that_follow'],
  },
];
