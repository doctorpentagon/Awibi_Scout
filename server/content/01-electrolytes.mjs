/**
 * Electrolytes and metabolites.
 *
 * Every entry answers the same four questions the ward actually asks:
 *   what causes it · where it is seen · why it confuses · what you do
 *
 * "Relative" is the theme. Most electrolyte errors are not arithmetic — they
 * are a true number read in the wrong context: a normal potassium in DKA, a
 * normal calcium in low albumin, a high urea from a GI bleed rather than a
 * failing kidney.
 */

export default [
  {
    id: 'AS-ELEC-0001',
    type: 'pattern',
    title: 'Hypokalaemia — Causes, Where It Is Seen, and Why It Misleads',
    short: 'Low potassium',
    summary:
      'Potassium below 3.5 mmol/L. Most of the body\'s potassium is inside cells, so the serum value is a poor guide to total body stores — a patient can be profoundly depleted with a normal number, and the ECG matters more than the reading.',
    domains: ['renal', 'critical_care', 'emergency_medicine'],
    intents: ['interpret', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['low potassium', 'hypokalemia', 'low k', 'k low', 'hypokalaemia'],
    terms: ['potassium', 'k+', 'serum potassium', 'u wave', 'electrolyte', 'diuretic', 'refeeding'],
    confirm_locally: true,
    body: {
      definition:
        'Serum potassium below 3.5 mmol/L. Mild 3.0–3.4, moderate 2.5–2.9, severe below 2.5 or symptomatic at any level.',
      why_the_number_misleads: [
        'Only about 2% of total body potassium is in the serum. The rest is intracellular. A normal serum potassium can sit on top of a large total-body deficit.',
        'Alkalosis drives potassium INTO cells. A patient who is vomiting has a real deficit AND an alkalosis pushing the number down further — the reading understates nothing here, but treating the alkalosis alone will not fix the store.',
        'Insulin, salbutamol and adrenaline all shift potassium into cells. A number taken after a nebuliser is not the patient\'s baseline.',
        'Magnesium must be corrected first. Potassium will not stay up while magnesium is low, because low magnesium opens renal potassium channels — you can pour potassium in and watch it leave in the urine.',
      ],
      causes_by_mechanism: {
        renal_loss: [
          'Loop and thiazide diuretics — the commonest cause on any ward',
          'Hyperaldosteronism (Conn syndrome), Cushing syndrome, liquorice',
          'Renal tubular acidosis types 1 and 2',
          'Bartter and Gitelman syndromes',
          'Amphotericin B, aminoglycosides',
        ],
        gi_loss: [
          'Diarrhoea — including laxative misuse',
          'Vomiting and nasogastric aspiration (loss is largely renal, driven by the alkalosis)',
          'Villous adenoma, fistula, ileostomy output',
        ],
        shift_into_cells: [
          'Insulin — especially during DKA treatment',
          'Beta-2 agonists: salbutamol nebulisers',
          'Alkalosis of any cause',
          'Refeeding syndrome',
          'Familial hypokalaemic periodic paralysis',
        ],
        poor_intake: ['Starvation, alcohol dependence, anorexia — rarely the sole cause in an adult'],
      },
      where_you_meet_it: [
        'DKA under treatment — insulin drives potassium into cells and the number falls fast. This is the classic killer.',
        'The patient on furosemide for heart failure',
        'Severe gastroenteritis, cholera',
        'Any patient with prolonged vomiting or NG aspiration',
        'Refeeding a severely malnourished child or adult',
      ],
      ecg_changes_in_order: [
        'Flattened or inverted T waves',
        'ST depression',
        'Prominent U waves after the T',
        'Apparent long QT (really a fused QU interval)',
        'Ventricular ectopics, then VT and torsades',
      ],
      what_you_do: [
        'Check magnesium and correct it — potassium will not hold otherwise.',
        'Oral replacement if mild and the patient can swallow.',
        'IV potassium only via a controlled rate. Never as a push. Never as a free-running drip.',
        'Follow the local protocol for concentration and rate; peripheral lines tolerate far less than central.',
        'Recheck after replacement, and look for the cause rather than treating the number repeatedly.',
      ],
    },
    warnings: [
      'Never give potassium as an intravenous push or a free-running drip. It causes cardiac arrest. Use a pump or a burette and follow the ward protocol for how much per hour and how much to dilute it.',
      'In DKA, potassium falls once insulin starts. If potassium is below 3.3 mmol/L, replace it BEFORE starting insulin.',
      'Correct magnesium first, or replacement will not hold.',
    ],
    limitations: [
      'A haemolysed sample raises potassium falsely and will mask hypokalaemia — a normal result on a haemolysed sample may be a low one.',
      'Reference ranges differ between laboratories and between serum and plasma. Confirm with your own laboratory.',
    ],
    cards: [
      { q: 'Why will potassium not stay up despite replacement?', a: 'Magnesium is low. Low magnesium opens renal potassium channels, so the potassium you give is lost in the urine. Correct magnesium first.' },
      { q: 'In DKA, when do you replace potassium before insulin?', a: 'When potassium is below 3.3 mmol/L. Insulin drives potassium into cells and will drop it further.' },
      { q: 'Name the ECG changes of hypokalaemia in order.', a: 'Flat or inverted T, ST depression, prominent U wave, apparent long QT, then ventricular arrhythmia including torsades.' },
      { q: 'Why can serum potassium be normal in a depleted patient?', a: 'Only about 2% of body potassium is extracellular. Serum reflects distribution, not stores.' },
    ],
    checks: [
      'Magnesium checked and corrected',
      'ECG done and reviewed',
      'Cause identified, not just the number treated',
      'Route and rate follow the local protocol',
      'Potassium never given as a push or free-running drip',
      'Recheck timing planned and documented',
    ],
    related: ['ecg_waves_intervals_and_what_changes_them'],
  },

  {
    id: 'AS-ELEC-0002',
    type: 'pattern',
    title: 'Hyperkalaemia — Causes, Pseudohyperkalaemia, and What To Do Now',
    short: 'High potassium',
    summary:
      'Potassium above 5.5 mmol/L. The commonest reversible cause of a preventable cardiac arrest on a general ward — and one of the commonest laboratory artefacts, so the first question is always whether the number is real.',
    domains: ['renal', 'emergency_medicine', 'critical_care'],
    intents: ['interpret', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['high potassium', 'hyperkalemia', 'high k', 'raised potassium', 'hyperkalaemia'],
    terms: ['potassium', 'k+', 'tented t', 'peaked t wave', 'calcium gluconate', 'insulin dextrose', 'sine wave', 'haemolysed'],
    confirm_locally: true,
    body: {
      definition: 'Mild 5.5–5.9, moderate 6.0–6.4, severe 6.5 and above, or ANY level with ECG change.',
      first_question_is_it_real: {
        note: 'Pseudohyperkalaemia is common and dangerous in both directions — treating an artefact harms, and dismissing a real value kills.',
        causes: [
          'Haemolysis in the sample — the single commonest cause. Potassium leaks from lysed red cells.',
          'Difficult venepuncture, small needle, prolonged tourniquet, fist clenching',
          'Delay in transport to the laboratory, or a sample left in the cold',
          'Very high platelet or white cell counts',
          'Drip-arm sampling from a limb receiving potassium',
        ],
        how_to_resolve:
          'Repeat the sample properly, but do NOT wait for the repeat before acting if there are ECG changes or the patient is unwell. Treat the ECG, not the number.',
      },
      causes_by_mechanism: {
        reduced_excretion: [
          'Acute kidney injury and chronic kidney disease — the commonest real cause',
          'ACE inhibitors, ARBs, spironolactone, amiloride',
          'NSAIDs, trimethoprim, heparin',
          'Addison disease and adrenal crisis',
          'Type 4 renal tubular acidosis',
        ],
        shift_out_of_cells: [
          'Metabolic acidosis',
          'Insulin deficiency — DKA',
          'Tissue breakdown: rhabdomyolysis, tumour lysis, burns, crush injury',
          'Suxamethonium in burns or denervation',
          'Digoxin toxicity',
        ],
        excess_intake: ['Potassium supplements, salt substitutes, stored blood transfusion — usually only with impaired excretion'],
      },
      where_you_meet_it: [
        'The dialysis patient who has missed a session',
        'Crush injury and rhabdomyolysis after trauma or prolonged immobility',
        'Adrenal crisis — hyperkalaemia WITH hyponatraemia is the classic pair',
        'The heart-failure patient on an ACE inhibitor and spironolactone together',
        'Tumour lysis syndrome after starting chemotherapy',
      ],
      ecg_progression: [
        'Tall, tented, narrow T waves (about 5.5)',
        'Flattened then absent P waves, PR lengthens (about 6.5)',
        'QRS widens (about 7.5)',
        'Sine wave, then asystole or VF (above 8)',
      ],
      treatment_in_order: [
        'PROTECT the myocardium: IV calcium (gluconate or chloride) if there are ECG changes. It does not lower potassium — it stabilises the membrane. Repeat if changes persist.',
        'SHIFT into cells: insulin with dextrose; salbutamol nebulisers as an adjunct.',
        'REMOVE from the body: this is the only step that actually lowers total potassium — treat the cause, stop the offending drugs, consider a potassium binder, and refer for dialysis if refractory or anuric.',
      ],
    },
    warnings: [
      'Treat the ECG, not the number. A patient with a potassium of 6.5 and a sine wave needs calcium immediately; a well patient with 6.5 and a haemolysed sample needs a repeat first.',
      'Calcium protects the heart but does NOT lower potassium. If you give calcium and stop, the potassium is still there.',
      'Insulin with dextrose causes hypoglycaemia hours later. Monitor the glucose after treatment — this is a common and avoidable harm.',
      'Absence of ECG change does not exclude dangerous hyperkalaemia. The ECG can be normal at 7.0.',
    ],
    limitations: [
      'The potassium values against each ECG stage are a guide, not a threshold. Rate of rise matters more than the absolute number.',
      'Local protocols differ on calcium salt, insulin dose and binder availability. Confirm with your unit.',
    ],
    cards: [
      { q: 'First drug in hyperkalaemia with ECG changes?', a: 'IV calcium — gluconate or chloride. It stabilises the myocardium. It does not lower the potassium.' },
      { q: 'Which step actually removes potassium from the body?', a: 'Only removal — treating the cause, a binder, or dialysis. Calcium protects and insulin shifts; neither removes.' },
      { q: 'Commonest cause of a falsely high potassium?', a: 'Haemolysis of the sample.' },
      { q: 'Hyperkalaemia with hyponatraemia — what should you think of?', a: 'Adrenal insufficiency, and adrenal crisis in a sick patient.' },
      { q: 'What is the danger hours after insulin-dextrose treatment?', a: 'Hypoglycaemia. Monitor glucose.' },
    ],
    checks: [
      'Sample quality checked — haemolysed?',
      'ECG done immediately',
      'IV calcium given if ECG changes present',
      'Insulin-dextrose given and glucose monitoring planned',
      'Offending drugs stopped (ACEi, ARB, spironolactone, NSAID, trimethoprim)',
      'Cause identified',
      'Renal referral considered if anuric or refractory',
      'Repeat potassium timed and documented',
    ],
    related: ['ecg_waves_intervals_and_what_changes_them', 'hypokalaemia_causes_where_it_is_seen_and_why_it_misleads'],
  },

  {
    id: 'AS-ELEC-0003',
    type: 'pattern',
    title: 'Hyponatraemia — True, Pseudo, and Which Type You Are Looking At',
    short: 'Low sodium',
    summary:
      'Sodium below 135 mmol/L. Almost always a water problem, not a salt problem. The critical step is assessing fluid status, because the same number in a dry patient and an overloaded patient needs opposite treatment.',
    domains: ['renal', 'endocrine', 'emergency_medicine'],
    intents: ['interpret', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['low sodium', 'hyponatremia', 'low na', 'siadh', 'hyponatraemia'],
    terms: ['sodium', 'na+', 'siadh', 'osmolality', 'water', 'fluid status', 'central pontine myelinolysis', 'osmotic demyelination'],
    confirm_locally: true,
    body: {
      the_key_idea:
        'Sodium concentration is a ratio of sodium to water. A low sodium usually means too much water, not too little salt. Ask "how much water?" before "how much salt?".',
      step_1_is_it_true: {
        pseudohyponatraemia:
          'Very high lipids or paraprotein displace water in the sample, so the measured sodium is low while the true concentration is normal. Serum osmolality is NORMAL. Modern direct-reading analysers are much less affected.',
        translocational:
          'High glucose or mannitol pulls water out of cells and dilutes the sodium. Serum osmolality is HIGH. Sodium falls about 2.4 mmol/L for every 5.5 mmol/L rise in glucose. Correct the glucose and the sodium corrects itself — this is the trap in DKA and HHS.',
        true_hyponatraemia: 'Serum osmolality is LOW. Now classify by fluid status.',
      },
      step_2_classify_by_fluid_status: {
        hypovolaemic: {
          you_find: 'Dry mucous membranes, reduced skin turgor, postural drop, tachycardia, low JVP, oliguria',
          causes: 'Vomiting, diarrhoea, diuretics, burns, third-space loss, salt-wasting nephropathy, adrenal insufficiency',
          treat: 'Replace volume with isotonic saline. The sodium rises as ADH switches off.',
        },
        euvolaemic: {
          you_find: 'No oedema, no signs of dehydration. Urine osmolality high, urine sodium high.',
          causes:
            'SIADH — from lung disease, CNS disease, malignancy (especially small-cell lung cancer), drugs (carbamazepine, SSRIs, opioids), pain, nausea. Also hypothyroidism and glucocorticoid deficiency, which must be excluded before diagnosing SIADH.',
          treat: 'Fluid restriction first. Treat the cause.',
        },
        hypervolaemic: {
          you_find: 'Oedema, raised JVP, ascites, crackles',
          causes: 'Heart failure, cirrhosis, nephrotic syndrome, renal failure',
          treat: 'Fluid and salt restriction, treat the underlying organ failure. Saline makes it worse.',
        },
      },
      why_it_confuses: [
        'The number is identical in three states that need opposite treatment. Fluid status is the whole examination.',
        'In DKA the sodium looks low but the patient is water-depleted, not water-overloaded. Correcting glucose reveals the real sodium, which is often high.',
        'A patient can be hyponatraemic and hypovolaemic at the same time — giving fluid restriction here makes them worse.',
        'SIADH is a diagnosis of exclusion. Check thyroid and cortisol before you label it.',
        'Chronic hyponatraemia is often asymptomatic at a level that would cause seizures if it developed acutely. Rate of fall matters more than the value.',
      ],
      symptoms_by_severity: [
        'Mild: nausea, malaise, headache, poor concentration',
        'Moderate: confusion, unsteadiness, falls',
        'Severe: seizures, reduced consciousness, respiratory arrest, coma',
      ],
    },
    warnings: [
      'Do NOT correct sodium faster than the local protocol allows — typically no more than 8–10 mmol/L in 24 hours. Overly rapid correction causes osmotic demyelination (central pontine myelinolysis), which is irreversible and can leave a locked-in patient.',
      'Patients at highest risk of demyelination are those with chronic hyponatraemia, malnutrition, alcohol dependence, liver disease and hypokalaemia.',
      'Hypertonic saline is for symptomatic severe hyponatraemia with seizures or reduced consciousness only, and under senior supervision.',
      'Exclude hypothyroidism and adrenal insufficiency before diagnosing SIADH.',
    ],
    limitations: [
      'Clinical assessment of fluid status is unreliable in the elderly and in liver disease. Use it, but do not trust it alone.',
      'Urine sodium is altered by recent diuretics and is hard to interpret in that setting.',
    ],
    cards: [
      { q: 'First question in hyponatraemia?', a: 'What is the fluid status? Hypovolaemic, euvolaemic or hypervolaemic — the same number needs opposite treatment.' },
      { q: 'What is the danger of correcting sodium too fast?', a: 'Osmotic demyelination syndrome (central pontine myelinolysis). Irreversible. Keep within roughly 8–10 mmol/L in 24 hours.' },
      { q: 'How does high glucose affect sodium?', a: 'It pulls water out of cells and dilutes sodium by about 2.4 mmol/L per 5.5 mmol/L rise in glucose. Correct the glucose and the sodium corrects itself.' },
      { q: 'What must you exclude before diagnosing SIADH?', a: 'Hypothyroidism and glucocorticoid deficiency, and the patient must be euvolaemic.' },
    ],
    checks: [
      'Fluid status assessed and documented',
      'Glucose checked (translocational cause excluded)',
      'Serum and urine osmolality sent',
      'Urine sodium sent',
      'Thyroid and cortisol considered if euvolaemic',
      'Drug chart reviewed for causes',
      'Correction rate limit written in the notes',
      'Sodium rechecked within the protocol interval',
    ],
    related: ['dka_diagnosis_2024_criteria'],
  },

  {
    id: 'AS-ELEC-0004',
    type: 'pattern',
    title: 'Hypernatraemia — Almost Always Water Loss, Not Salt Gain',
    short: 'High sodium',
    summary:
      'Sodium above 145 mmol/L. Nearly always a water deficit in a patient who cannot ask for or reach a drink — the very young, the very old, the sedated, and the neurologically impaired.',
    domains: ['renal', 'endocrine', 'critical_care'],
    intents: ['interpret', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['high sodium', 'hypernatremia', 'high na', 'hypernatraemia'],
    terms: ['sodium', 'na+', 'diabetes insipidus', 'water deficit', 'thirst', 'dehydration'],
    body: {
      the_key_idea:
        'Thirst is an extremely powerful defence. A conscious person with access to water almost cannot become hypernatraemic. So hypernatraemia asks: why could this patient not drink?',
      causes: {
        water_loss_without_replacement: [
          'Fever, sweating, burns',
          'Diarrhoea, especially in infants',
          'Osmotic diuresis: hyperglycaemia, mannitol, high protein feeds',
          'Diabetes insipidus — cranial (no ADH) or nephrogenic (kidney does not respond); lithium is a common nephrogenic cause',
        ],
        impaired_access_or_thirst: [
          'Infants and the frail elderly',
          'Sedated, intubated or unconscious patients',
          'Stroke, dementia, immobility',
          'Hypothalamic lesions damaging the thirst centre',
        ],
        sodium_gain: ['Hypertonic saline, sodium bicarbonate, salt poisoning, incorrectly made-up feeds — uncommon but important in infants'],
      },
      where_you_meet_it: [
        'The nursing-home resident admitted with a chest infection who has not drunk for two days',
        'The infant with gastroenteritis',
        'The ventilated patient on the intensive care unit',
        'The patient on lithium with polyuria',
      ],
      why_it_confuses: [
        'The patient looks less obviously dry than in hyponatraemic dehydration, because water shifts out of cells and preserves the circulation. Circulatory collapse is a LATE sign.',
        'In DKA the measured sodium is low but the corrected sodium is often high — the patient has a large water deficit hidden by the glucose.',
        'Polyuria plus hypernatraemia points to diabetes insipidus; polyuria plus hyponatraemia points to primary polydipsia.',
      ],
      what_you_do: [
        'Find and treat the cause, and find out why they could not drink.',
        'Replace water — orally or by nasogastric tube if at all possible; it is safer and self-limiting.',
        'If intravenous, correct slowly. Rapid correction causes cerebral oedema and seizures, especially in children.',
        'Follow the local protocol for correction rate — commonly no more than about 10–12 mmol/L in 24 hours in chronic cases.',
      ],
    },
    warnings: [
      'Correcting hypernatraemia too quickly causes cerebral oedema, seizures and death — the mirror image of the risk in hyponatraemia. Children are especially vulnerable.',
      'If the patient is shocked, restore the circulation first with isotonic fluid, then address the water deficit.',
      'Always ask why the patient could not drink. The answer is often a safeguarding, staffing or neurological problem that will recur.',
    ],
    limitations: ['Water-deficit formulae estimate only, and assume a total body water fraction that is wrong in obesity, oedema and infancy.'],
    cards: [
      { q: 'Why is hypernatraemia rare in a conscious mobile adult?', a: 'Thirst is a powerful defence. Hypernatraemia means the patient could not sense thirst or could not reach water.' },
      { q: 'Danger of correcting hypernatraemia too fast?', a: 'Cerebral oedema and seizures, especially in children.' },
      { q: 'Polyuria with hypernatraemia suggests?', a: 'Diabetes insipidus — cranial or nephrogenic.' },
    ],
    checks: [
      'Cause of water loss identified',
      'Reason the patient could not drink identified and addressed',
      'Enteral route used where possible',
      'Correction rate limit documented',
      'Glucose checked',
      'Neurological observations in place',
    ],
  },

  {
    id: 'AS-ELEC-0005',
    type: 'pattern',
    title: 'Calcium — Why the Uncorrected Number Lies',
    short: 'Calcium',
    summary:
      'About half of serum calcium is bound to albumin and is not biologically active. In a patient with low albumin — which is most sick patients — the total calcium reads low while the ionised calcium is normal. Correct it before you treat it.',
    domains: ['endocrine', 'laboratory_medicine', 'renal'],
    intents: ['interpret', 'calculate'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['hypocalcaemia', 'hypercalcaemia', 'low calcium', 'high calcium', 'corrected calcium', 'hypocalcemia', 'hypercalcemia'],
    terms: ['calcium', 'ca2+', 'albumin', 'pth', 'parathyroid', 'chvostek', 'trousseau', 'tetany', 'bone profile'],
    confirm_locally: true,
    body: {
      why_correction_matters:
        'Roughly 40–45% of calcium is albumin-bound, 10% complexed, and only the remaining ionised fraction is active. Malnutrition, sepsis, liver disease and nephrotic syndrome all drop albumin — so a low total calcium in a sick patient is usually an albumin problem, not a calcium problem.',
      correction:
        'A widely used adjustment adds about 0.02 mmol/L to the measured calcium for every 1 g/L that albumin falls below 40 g/L. Formulae vary between laboratories — use the one your laboratory reports, and where the decision is critical, measure ionised calcium directly.',
      hypocalcaemia: {
        causes: [
          'Vitamin D deficiency — the commonest worldwide',
          'Chronic kidney disease (reduced 1-alpha hydroxylation, phosphate retention)',
          'Hypoparathyroidism — most often after thyroid or parathyroid surgery',
          'Magnesium depletion (impairs PTH release and action)',
          'Acute pancreatitis, rhabdomyolysis, tumour lysis',
          'Massive transfusion — citrate binds calcium',
          'Respiratory alkalosis — hyperventilation lowers ionised calcium without changing total',
        ],
        signs: [
          'Perioral and fingertip paraesthesiae',
          'Carpopedal spasm',
          'Chvostek sign — tapping the facial nerve causes facial twitch',
          'Trousseau sign — inflating a cuff above systolic for 3 minutes causes carpal spasm; more specific than Chvostek',
          'Prolonged QT, seizures, laryngospasm, arrhythmia when severe',
        ],
      },
      hypercalcaemia: {
        causes: [
          'Primary hyperparathyroidism — commonest in the community, often an incidental finding in a well patient',
          'Malignancy — commonest in hospital: bone metastases, myeloma, PTH-related peptide from squamous tumours',
          'Excess vitamin D, sarcoidosis and other granulomatous disease',
          'Thiazides, lithium, immobilisation, thyrotoxicosis',
          'Milk-alkali syndrome',
        ],
        symptoms: 'Stones, bones, abdominal groans and psychic moans — renal stones, bone pain, constipation and abdominal pain, confusion and depression. Polyuria and thirst are early and easily missed.',
        management: 'Rehydrate with isotonic saline first — these patients are profoundly dry. Then treat the cause; bisphosphonates for malignancy after rehydration.',
      },
      why_it_confuses: [
        'A sick hypoalbuminaemic patient looks hypocalcaemic on paper and is not.',
        'Chvostek sign is present in a significant minority of normal people. Trousseau is more specific.',
        'Hyperventilating patients get tetany with a completely normal total calcium — alkalosis increases albumin binding and drops the ionised fraction.',
        'The PTH is the key test: a raised or even "inappropriately normal" PTH with a high calcium points to hyperparathyroidism; a suppressed PTH with a high calcium points to malignancy.',
      ],
    },
    warnings: [
      'A low total calcium with a low albumin is usually not true hypocalcaemia. Correct or measure ionised calcium before treating.',
      'IV calcium is irritant and causes tissue necrosis if it extravasates. Calcium chloride is more irritant than gluconate.',
      'Give calcium with extreme caution in a patient on digoxin — it potentiates digoxin toxicity.',
      'In hypercalcaemia, rehydrate before giving a bisphosphonate.',
    ],
    limitations: [
      'Correction formulae are population-derived and perform poorly at very low albumin and in renal failure. Ionised calcium is the reference standard.',
      'Correction constants differ by laboratory. Confirm which your laboratory uses.',
    ],
    cards: [
      { q: 'Why does a sick patient often look hypocalcaemic?', a: 'Low albumin. About 40–45% of calcium is albumin-bound and inactive; the ionised fraction is usually normal.' },
      { q: 'Which is more specific, Chvostek or Trousseau?', a: 'Trousseau — carpal spasm after 3 minutes of cuff inflation. Chvostek occurs in many normal people.' },
      { q: 'High calcium with suppressed PTH — think what?', a: 'Malignancy.' },
      { q: 'First treatment for symptomatic hypercalcaemia?', a: 'Isotonic saline rehydration. These patients are very dry.' },
      { q: 'Why does hyperventilation cause tetany?', a: 'Alkalosis increases calcium binding to albumin, lowering the ionised fraction while total calcium is unchanged.' },
    ],
    checks: [
      'Albumin checked and calcium corrected',
      'Ionised calcium considered where the decision is critical',
      'Magnesium checked',
      'PTH sent if calcium abnormal',
      'ECG done if severe',
      'Digoxin status checked before giving IV calcium',
    ],
  },

  {
    id: 'AS-ELEC-0006',
    type: 'pattern',
    title: 'Magnesium — The Electrolyte That Blocks Correction of the Others',
    short: 'Magnesium',
    summary:
      'Low magnesium is under-measured and under-treated. It causes refractory hypokalaemia and refractory hypocalcaemia, so a patient whose potassium or calcium will not correct usually has an unmeasured magnesium problem.',
    domains: ['renal', 'critical_care', 'obstetrics'],
    intents: ['interpret', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['hypomagnesaemia', 'hypermagnesaemia', 'low magnesium', 'high magnesium', 'mg'],
    terms: ['magnesium', 'mg2+', 'torsades', 'refractory hypokalaemia', 'eclampsia', 'magnesium sulphate'],
    body: {
      why_it_matters_first:
        'Magnesium is a cofactor for the sodium-potassium pump and is required for PTH release and action. Without it, potassium is lost in the urine and calcium cannot be corrected. If potassium or calcium will not hold, check magnesium.',
      hypomagnesaemia: {
        causes: [
          'Diuretics, proton pump inhibitors (often forgotten, and dose-related over months)',
          'Alcohol dependence and malnutrition',
          'Diarrhoea, malabsorption, short bowel',
          'Aminoglycosides, amphotericin, cisplatin, ciclosporin',
          'Refeeding syndrome',
          'Diabetes, especially with poor control',
        ],
        features: 'Tremor, tetany, weakness, arrhythmia — particularly torsades de pointes — seizures, and refractory low potassium or calcium.',
      },
      hypermagnesaemia: {
        causes: 'Almost always renal failure plus a magnesium load — antacids, laxatives, or therapeutic magnesium in pre-eclampsia.',
        features_in_order: [
          'Loss of deep tendon reflexes — the earliest and most useful clinical sign',
          'Nausea, flushing, drowsiness',
          'Respiratory depression',
          'Bradycardia, hypotension, cardiac arrest',
        ],
        antidote: 'Calcium gluconate, plus stopping the magnesium.',
      },
      obstetric_note:
        'Magnesium sulphate is the treatment of choice for eclamptic seizures and for seizure prophylaxis in severe pre-eclampsia. Monitoring is clinical: reflexes, respiratory rate and urine output — the loss of the patellar reflex is the first warning of toxicity.',
      why_it_confuses: [
        'Serum magnesium is a poor reflection of total body magnesium, most of which is in bone and cells. A normal level does not exclude depletion.',
        'It is frequently not on the standard electrolyte panel, so it is simply never seen.',
        'Symptoms overlap almost entirely with those of low potassium and low calcium.',
      ],
    },
    warnings: [
      'In a patient on magnesium sulphate, loss of the patellar reflex is the first sign of toxicity. Check reflexes, respiratory rate and urine output at the interval your protocol specifies.',
      'Calcium gluconate is the antidote to magnesium toxicity.',
      'Give magnesium cautiously in renal impairment — it is renally excreted and accumulates.',
    ],
    limitations: ['Serum magnesium correlates poorly with total body stores; a normal value does not exclude deficiency.'],
    cards: [
      { q: 'Potassium will not correct despite replacement. What have you missed?', a: 'Magnesium.' },
      { q: 'First sign of magnesium toxicity?', a: 'Loss of deep tendon reflexes, classically the patellar reflex.' },
      { q: 'Antidote for magnesium toxicity?', a: 'Calcium gluconate, and stop the magnesium.' },
      { q: 'Which common long-term drug causes hypomagnesaemia?', a: 'Proton pump inhibitors, over months of use.' },
    ],
    checks: [
      'Magnesium measured when potassium or calcium is abnormal',
      'Drug chart reviewed (PPI, diuretic, aminoglycoside)',
      'Reflexes checked if receiving magnesium',
      'Renal function considered before dosing',
    ],
    related: ['pre_eclampsia_and_eclampsia'],
  },

  {
    id: 'AS-ELEC-0007',
    type: 'pattern',
    title: 'Urea — Why It Rises When the Kidney Is Fine',
    short: 'Urea',
    summary:
      'Urea is not a pure kidney test. It rises with dehydration, gastrointestinal bleeding, high protein intake, steroids and catabolism, and falls in liver failure and pregnancy. The urea-to-creatinine relationship tells you which.',
    domains: ['renal', 'laboratory_medicine', 'hepatology'],
    intents: ['interpret'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['blood urea', 'bun', 'urea nitrogen', 'raised urea', 'high urea'],
    terms: ['urea', 'creatinine', 'gi bleed', 'prerenal', 'azotaemia', 'uraemia', 'dehydration'],
    confirm_locally: true,
    body: {
      what_urea_is:
        'The end product of protein breakdown, made in the liver from ammonia and excreted by the kidney. It is freely filtered and then partly reabsorbed — and that reabsorption increases when the patient is dry, which is why urea rises before creatinine in dehydration.',
      raised_urea_with_normal_or_near_normal_creatinine: {
        meaning: 'A disproportionately high urea points away from intrinsic kidney disease.',
        causes: [
          'Dehydration and hypovolaemia — pre-renal. The commonest cause.',
          'UPPER GASTROINTESTINAL BLEEDING — blood in the gut is a large protein meal that is digested and absorbed. A rising urea with a normal creatinine in a patient with melaena is a classic and easily missed clue.',
          'High protein intake or enteral feed',
          'Corticosteroids and tetracyclines increase catabolism',
          'Any catabolic state: sepsis, trauma, burns, major surgery',
          'Gastrointestinal bleeding into any closed space, including a large haematoma',
        ],
      },
      raised_urea_and_raised_creatinine: 'Suggests genuine renal impairment — acute kidney injury or chronic kidney disease. Look at the trend and any previous results.',
      low_urea: [
        'Liver failure — the liver cannot make urea. A low urea in a jaundiced patient is a bad sign, not a reassuring one.',
        'Pregnancy — plasma volume expansion and increased filtration',
        'Low protein intake, malnutrition',
        'Overhydration, SIADH',
      ],
      why_it_confuses: [
        'Everyone learns "urea and creatinine" as a single kidney test, so a raised urea is read as kidney failure when it may be a bleed or simple dehydration.',
        'In liver failure the urea is LOW, so it cannot be used to judge renal function in that patient — creatinine is also unreliable because of poor muscle mass.',
        'Units differ: many places report urea in mmol/L, others report blood urea nitrogen (BUN) in mg/dL. They are not the same number. Confirm what your laboratory reports.',
      ],
    },
    warnings: [
      'A rising urea with a normal creatinine in a patient with black stool or anaemia is an upper gastrointestinal bleed until proven otherwise.',
      'Urea and BUN are different measurements with different units. Confirm which your laboratory reports before acting on a threshold.',
    ],
    limitations: [
      'Creatinine depends on muscle mass, so it overestimates renal function in the elderly, the malnourished and in cirrhosis.',
      'Reference ranges are laboratory-specific and vary with age, sex and pregnancy.',
    ],
    cards: [
      { q: 'Raised urea, normal creatinine, black stool — what is this?', a: 'Upper gastrointestinal bleeding. Digested blood is a protein load.' },
      { q: 'Why is urea low in liver failure?', a: 'The liver makes urea from ammonia. A failing liver cannot, so urea falls and ammonia rises.' },
      { q: 'Why does urea rise before creatinine in dehydration?', a: 'Urea is reabsorbed in the tubule and reabsorption increases when the patient is volume-depleted.' },
    ],
    checks: [
      'Fluid status assessed',
      'Stool colour and haemoglobin checked if urea disproportionately raised',
      'Drug chart reviewed for steroids',
      'Previous results compared for trend',
      'Units confirmed against the local laboratory',
    ],
  },

  {
    id: 'AS-ELEC-0008',
    type: 'pattern',
    title: 'Uric Acid — Gout, Tumour Lysis and Pre-eclampsia',
    short: 'Uric acid',
    summary:
      'The end product of purine breakdown. Most people with a high level never get gout, and an attack of gout can occur with a normal level — so it confirms nothing on its own. Its real value is in tumour lysis and in pre-eclampsia.',
    domains: ['renal', 'oncology', 'orthopaedics', 'obstetrics'],
    intents: ['interpret'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['urate', 'serum urate', 'hyperuricaemia', 'hyperuricemia'],
    terms: ['uric acid', 'urate', 'gout', 'tumour lysis', 'tophi', 'allopurinol', 'purine', 'pre-eclampsia'],
    body: {
      why_it_rises: {
        overproduction: [
          'High cell turnover — leukaemia, lymphoma, haemolysis, psoriasis',
          'TUMOUR LYSIS SYNDROME after starting chemotherapy',
          'Purine-rich diet: red meat, offal, shellfish; beer particularly',
          'Alcohol — both increases production and reduces excretion',
        ],
        underexcretion: [
          'Chronic kidney disease — the commonest cause',
          'Diuretics, especially thiazides; low-dose aspirin; ciclosporin',
          'Dehydration',
          'Lead nephropathy',
          'PRE-ECLAMPSIA — a rising urate tracks disease severity',
        ],
      },
      why_it_confuses: [
        'Most people with hyperuricaemia never develop gout. A high level is not a diagnosis.',
        'During an ACUTE attack of gout the serum urate is often NORMAL or even low, because urate is depositing in the joint. A normal level does not exclude gout — joint aspiration showing negatively birefringent needle-shaped crystals is the diagnosis.',
        'Treating asymptomatic hyperuricaemia is generally not indicated. Treating the number rather than the patient is the classic error here.',
        'Starting or stopping urate-lowering therapy during an acute attack can prolong or worsen it — follow local guidance on timing and cover.',
      ],
      tumour_lysis_syndrome: {
        what: 'Massive cell breakdown after chemotherapy releases potassium, phosphate and urate, and calcium falls as it binds phosphate.',
        the_four: 'High potassium, high phosphate, high urate, LOW calcium.',
        risk: 'Acute kidney injury, arrhythmia, seizure, death.',
        prevention: 'Identify high-risk patients before treatment, hydrate well, and give urate-lowering prophylaxis per protocol.',
      },
      pre_eclampsia_note:
        'Urate rises in pre-eclampsia and broadly tracks severity, but it is neither sensitive nor specific enough to diagnose or exclude it. It supports a clinical picture; it does not make one.',
    },
    warnings: [
      'A normal serum urate does not exclude acute gout. If the joint is hot and the patient is unwell, exclude septic arthritis first — that is the diagnosis that destroys a joint.',
      'In tumour lysis, hyperkalaemia is what kills. Monitor potassium and the ECG, not just the urate.',
    ],
    limitations: [
      'Reference ranges differ by sex and by laboratory.',
      'Urate is not a diagnostic test for gout, and not a screening test for pre-eclampsia.',
    ],
    cards: [
      { q: 'Can gout occur with a normal uric acid?', a: 'Yes — during an acute attack the level is often normal or low. Aspiration showing negatively birefringent needle crystals is the diagnosis.' },
      { q: 'The four biochemical changes of tumour lysis?', a: 'High potassium, high phosphate, high urate, low calcium.' },
      { q: 'Hot swollen joint — what must you exclude before calling it gout?', a: 'Septic arthritis.' },
    ],
    checks: [
      'Septic arthritis excluded in an acute hot joint',
      'Joint aspiration considered',
      'Renal function and drug chart reviewed',
      'Tumour lysis risk assessed before chemotherapy',
    ],
  },

  {
    id: 'AS-ELEC-0009',
    type: 'pattern',
    title: 'Bicarbonate — What a Single Number Actually Tells You',
    short: 'Bicarbonate',
    summary:
      'Serum bicarbonate on a routine panel is the metabolic component of acid-base balance. A low value means metabolic acidosis or respiratory compensation for an alkalosis — and you cannot tell which without the pH.',
    domains: ['renal', 'critical_care', 'laboratory_medicine'],
    intents: ['interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['hco3', 'serum bicarbonate', 'total co2', 'bicarb'],
    terms: ['bicarbonate', 'hco3', 'acidosis', 'alkalosis', 'anion gap', 'base excess', 'acid base'],
    body: {
      what_it_is:
        'Bicarbonate is the main extracellular buffer. The routine chemistry panel usually reports total CO2, which is mostly bicarbonate. It is the METABOLIC side of the acid-base equation; pCO2 is the respiratory side.',
      low_bicarbonate_means_one_of_two_things: [
        'A metabolic acidosis — bicarbonate has been consumed buffering acid, or lost from the gut or kidney.',
        'Renal compensation for a chronic respiratory ALKALOSIS — the kidney excretes bicarbonate to offset a low CO2.',
        'You cannot distinguish these without a blood gas. A low bicarbonate with a low pH is acidosis; with a high pH it is compensation.',
      ],
      high_bicarbonate_means: [
        'A metabolic alkalosis — vomiting, diuretics, hypokalaemia, hyperaldosteronism.',
        'Renal compensation for a chronic respiratory acidosis — the classic pattern in long-standing COPD, where a high bicarbonate is the fingerprint of chronic CO2 retention.',
      ],
      why_it_confuses: [
        'A high bicarbonate in COPD is not alkalosis — it is the kidney compensating for chronic hypercapnia. Recognising it tells you the retention is chronic, not new.',
        'Total CO2 on a venous panel and bicarbonate on an arterial gas are measured differently and will not match exactly.',
        'A normal bicarbonate does not exclude a mixed disorder: a metabolic acidosis and a metabolic alkalosis together can produce a normal number in a very sick patient. Calculate the anion gap.',
      ],
      practical_use:
        'On a routine panel, a low bicarbonate is often the first and only clue to a significant metabolic acidosis in a patient who has not had a gas. Take it seriously: calculate the anion gap and check lactate, glucose and renal function.',
    },
    warnings: [
      'A normal bicarbonate does not exclude a serious mixed acid-base disorder. Calculate the anion gap.',
      'A high bicarbonate in a breathless patient may mean chronic CO2 retention. Uncontrolled oxygen in that patient can worsen hypercapnia — follow the target saturation range in the local protocol.',
    ],
    limitations: ['Venous total CO2 and arterial bicarbonate are not interchangeable. Ranges are laboratory-specific.'],
    cards: [
      { q: 'Low bicarbonate — what two things can it mean?', a: 'Metabolic acidosis, or renal compensation for a chronic respiratory alkalosis. The pH distinguishes them.' },
      { q: 'Why is bicarbonate high in long-standing COPD?', a: 'Renal compensation for chronic CO2 retention. It marks the retention as chronic.' },
    ],
    checks: ['Anion gap calculated', 'Blood gas obtained if bicarbonate abnormal', 'Lactate and glucose checked'],
  },

  {
    id: 'AS-ELEC-0010',
    type: 'mechanism',
    title: 'Anion Gap and the Delta Ratio — Finding the Hidden Disorder',
    short: 'Anion gap',
    summary:
      'The anion gap separates the causes of metabolic acidosis into two groups and, with the delta ratio, reveals a second disorder hiding behind the first. It is the single most useful calculation in acid-base medicine.',
    domains: ['critical_care', 'renal', 'toxicology'],
    intents: ['calculate', 'interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['anion gap', 'delta ratio', 'delta gap', 'ag'],
    terms: ['anion gap', 'hagma', 'nagma', 'delta ratio', 'albumin correction', 'lactate', 'ketones', 'toxic alcohol'],
    body: {
      the_calculation:
        'Anion gap = sodium − (chloride + bicarbonate). A commonly used reference range is about 8–16 mmol/L, but this depends on whether potassium is included and on your analyser — confirm the range your laboratory uses.',
      albumin_correction: {
        why: 'Albumin is the largest unmeasured anion. A hypoalbuminaemic patient has a lower baseline gap, so a "normal" gap in a sick patient may be genuinely raised.',
        rule: 'Add roughly 2.5 mmol/L to the gap for every 10 g/L that albumin falls below 40 g/L. Missing this is the commonest reason a raised-gap acidosis is overlooked in intensive care.',
      },
      raised_gap_acidosis: {
        meaning: 'An acid has been ADDED, and its unmeasured anion widens the gap.',
        causes: 'Lactate (sepsis, ischaemia, metformin), ketones (diabetic, alcoholic, starvation), renal failure (urate, phosphate, sulphate), and toxins — methanol, ethylene glycol, salicylate, paraldehyde.',
      },
      normal_gap_acidosis: {
        meaning: 'Bicarbonate has been LOST and chloride has risen to replace it — hyperchloraemic acidosis. Nothing new has been added, so the gap stays normal.',
        causes: 'Diarrhoea (the commonest by far), renal tubular acidosis, large-volume 0.9% saline infusion, carbonic anhydrase inhibitors, ureteric diversion, pancreatic or biliary fistula.',
      },
      delta_ratio: {
        what: 'Compares how much the gap has RISEN against how much the bicarbonate has FALLEN: (measured gap − normal gap) ÷ (normal bicarbonate − measured bicarbonate).',
        interpretation: [
          'Less than about 0.4 — a pure normal-gap acidosis',
          'About 0.4 to 0.8 — a mixed raised-gap and normal-gap acidosis',
          'About 1 to 2 — a pure raised-gap acidosis',
          'Greater than about 2 — there is a coexisting metabolic ALKALOSIS, or a pre-existing high bicarbonate from chronic respiratory acidosis',
        ],
        why_it_matters:
          'It finds the disorder you were not looking for. A vomiting diabetic in ketoacidosis has an alkalosis on top of an acidosis, and the bicarbonate may look almost normal while the patient is critically ill.',
      },
      osmolar_gap:
        'If a raised-gap acidosis has no obvious cause, calculate the osmolar gap (measured minus calculated osmolality). A raised osmolar gap with a raised anion gap suggests a toxic alcohol — methanol or ethylene glycol — which is a time-critical poisoning.',
    },
    warnings: [
      'Always correct the anion gap for albumin in a sick or malnourished patient, or you will miss a significant acidosis.',
      'A raised anion gap acidosis with no obvious cause is a toxic alcohol ingestion until proven otherwise. Discuss with the poisons service urgently.',
      'A normal bicarbonate does not exclude serious disease when two opposing disorders coexist.',
    ],
    limitations: ['Reference ranges depend on the analyser and on whether potassium is included in the formula.'],
    cards: [
      { q: 'How do you calculate the anion gap?', a: 'Sodium minus (chloride plus bicarbonate).' },
      { q: 'What does a normal anion gap acidosis mean?', a: 'Bicarbonate has been lost and chloride replaced it — hyperchloraemic acidosis. Diarrhoea is the commonest cause.' },
      { q: 'How do you correct the gap for albumin?', a: 'Add about 2.5 mmol/L for every 10 g/L the albumin is below 40 g/L.' },
      { q: 'Delta ratio above 2 means what?', a: 'A coexisting metabolic alkalosis, or a chronically raised bicarbonate from respiratory acidosis.' },
      { q: 'Raised anion gap with raised osmolar gap?', a: 'Toxic alcohol — methanol or ethylene glycol. Time-critical.' },
    ],
    checks: [
      'Anion gap calculated',
      'Gap corrected for albumin',
      'Lactate, ketones and glucose checked',
      'Delta ratio calculated if gap raised',
      'Osmolar gap considered if cause unclear',
    ],
  },

  {
    id: 'AS-ELEC-0011',
    type: 'pattern',
    title: 'Phosphate and Refeeding Syndrome',
    short: 'Phosphate',
    summary:
      'Phosphate is the electrolyte that kills during refeeding. Reintroducing carbohydrate to a starved patient drives phosphate into cells, and the fall can cause cardiac and respiratory failure days after treatment began.',
    domains: ['nutrition', 'critical_care', 'renal'],
    intents: ['interpret', 'identify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['hypophosphataemia', 'hyperphosphataemia', 'low phosphate', 'refeeding syndrome', 'phosphate'],
    terms: ['phosphate', 'po4', 'refeeding', 'malnutrition', 'thiamine', 'ckd', 'renal bone disease'],
    body: {
      low_phosphate: {
        causes: [
          'REFEEDING SYNDROME — the one to know',
          'Alcohol dependence',
          'DKA treatment (insulin drives phosphate into cells)',
          'Respiratory alkalosis',
          'Phosphate binders, antacids',
          'Hyperparathyroidism, vitamin D deficiency, Fanconi syndrome',
        ],
        effects: 'Muscle weakness including the diaphragm (failure to wean from a ventilator), rhabdomyolysis, confusion and seizures, reduced cardiac contractility, haemolysis, impaired oxygen delivery.',
      },
      refeeding_syndrome: {
        who_is_at_risk:
          'Very low BMI, little or no intake for days, significant unintentional weight loss, alcohol dependence, anorexia nervosa, prolonged fasting, post-bariatric surgery, and any patient with already low potassium, phosphate or magnesium before feeding.',
        mechanism:
          'In starvation the body switches to fat and protein and depletes intracellular phosphate, potassium and magnesium while serum levels look normal. Carbohydrate triggers insulin release, which drives glucose, phosphate, potassium and magnesium into cells — and the serum levels crash.',
        what_happens: 'Arrhythmia, cardiac failure, respiratory failure, rhabdomyolysis, seizures, death — typically within the first 72 hours of feeding.',
        prevention: [
          'Identify risk BEFORE feeding starts.',
          'Start feeding slowly at the rate the local protocol specifies, and increase gradually.',
          'Give thiamine and a vitamin B preparation BEFORE or with the first feed.',
          'Check and correct potassium, phosphate and magnesium — correct alongside feeding, do not delay feeding indefinitely.',
          'Monitor electrolytes daily for the first several days.',
        ],
      },
      high_phosphate: {
        causes: 'Chronic kidney disease (commonest), tumour lysis, rhabdomyolysis, hypoparathyroidism, excess intake.',
        consequences: 'Binds calcium, causing hypocalcaemia; drives secondary hyperparathyroidism and renal bone disease; vascular calcification.',
      },
      why_it_confuses: [
        'Serum phosphate is normal in a starved patient before feeding — the deficit is intracellular. A normal result before refeeding is not reassurance.',
        'The collapse happens days AFTER treatment starts, when the patient appears to be improving.',
        'Weakness from hypophosphataemia is easily attributed to the underlying illness.',
      ],
    },
    warnings: [
      'Give thiamine before or with the first feed in any at-risk patient. Refeeding without thiamine can precipitate Wernicke encephalopathy.',
      'A normal phosphate before feeding does not exclude refeeding risk — the deficit is intracellular.',
      'Do not rush to full-rate feeding in a high-risk patient. Follow the local protocol.',
    ],
    limitations: ['Refeeding protocols and thresholds vary between institutions. Confirm your local guidance.'],
    cards: [
      { q: 'Which electrolyte defines refeeding syndrome?', a: 'Phosphate — driven into cells by insulin when carbohydrate is reintroduced.' },
      { q: 'What must be given before or with the first feed in a high-risk patient?', a: 'Thiamine and B vitamins, to prevent Wernicke encephalopathy.' },
      { q: 'When does refeeding syndrome typically occur?', a: 'Within the first 72 hours of feeding, when the patient seems to be improving.' },
      { q: 'Why is low phosphate dangerous in a ventilated patient?', a: 'It weakens the diaphragm and prevents weaning.' },
    ],
    checks: [
      'Refeeding risk assessed before feeding starts',
      'Thiamine given before or with the first feed',
      'Baseline potassium, phosphate and magnesium checked',
      'Feeding rate follows the local protocol',
      'Daily electrolytes for the first several days',
      'Cardiac monitoring considered in high risk',
    ],
  },

  {
    id: 'AS-ELEC-0012',
    type: 'pattern',
    title: 'Which Organ Is This? Reading a Biochemistry Panel by Pattern',
    short: 'Panel patterns',
    summary:
      'A set of abnormal results is a pattern, not a list. This maps the common patterns onto the organ behind them — kidney, liver, bone, adrenal, gut — so a panel can be read in one pass instead of one line at a time.',
    domains: ['laboratory_medicine', 'renal', 'hepatology', 'endocrine'],
    intents: ['interpret', 'classify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['biochemistry pattern', 'blood test pattern', 'which organ', 'lab pattern', 'panel interpretation'],
    terms: ['pattern', 'u&e', 'lft', 'bone profile', 'interpretation', 'organ', 'template', 'which disease'],
    confirm_locally: true,
    body: {
      kidney: {
        pattern: 'Urea up, creatinine up, potassium up, bicarbonate down, phosphate up, calcium down, haemoglobin low if chronic.',
        acute_vs_chronic:
          'Small kidneys on ultrasound, anaemia, low calcium with high phosphate and a raised PTH all point to CHRONIC. A previous normal creatinine points to ACUTE. Both can coexist — acute on chronic.',
        next: 'Urine dipstick, urine output, renal ultrasound, review every nephrotoxic drug.',
      },
      liver_hepatocellular: {
        pattern: 'ALT and AST markedly raised, ALP mildly raised, bilirubin variable.',
        means: 'Hepatocyte injury — viral hepatitis, drugs including paracetamol, ischaemia, autoimmune hepatitis.',
        note: 'An AST:ALT ratio above 2 suggests alcoholic liver disease.',
      },
      liver_cholestatic: {
        pattern: 'ALP and GGT markedly raised, ALT mildly raised, bilirubin raised, conjugated.',
        means: 'Obstruction or cholestasis — gallstones, tumour of the head of pancreas, stricture, primary biliary cholangitis, drugs.',
        note: 'A raised ALP with a NORMAL GGT points to bone, not liver — Paget disease, osteomalacia, metastases, or normal growth in a child.',
      },
      liver_synthetic_function: {
        pattern: 'Albumin low, prothrombin time or INR prolonged, urea LOW, glucose low, ammonia high.',
        means: 'The liver has lost function, not just been injured. INR and albumin are the true measures of synthetic capacity — the transaminases only measure damage.',
      },
      bone_profile: {
        vitamin_d_deficiency: 'Calcium low or low-normal, phosphate low, ALP HIGH, PTH high.',
        primary_hyperparathyroidism: 'Calcium HIGH, phosphate low, PTH high or inappropriately normal.',
        malignancy: 'Calcium HIGH, PTH SUPPRESSED.',
        ckd_mineral_bone_disease: 'Calcium low, phosphate HIGH, PTH high, ALP high.',
        pagets: 'Calcium normal, phosphate normal, ALP very HIGH in isolation.',
      },
      adrenal: {
        addison: 'Sodium LOW, potassium HIGH, glucose low, urea up, eosinophilia. This pairing is the classic clue.',
        cushing_or_conn: 'Sodium high-normal, potassium LOW, metabolic alkalosis, hypertension.',
      },
      gut_and_nutrition: {
        pattern: 'Albumin low, calcium low, magnesium low, potassium low, low bicarbonate with a NORMAL anion gap in diarrhoea, iron and B12 low in malabsorption.',
      },
      why_it_confuses: [
        'A single abnormal result read alone is usually uninterpretable. Sodium plus potassium together, or calcium plus phosphate plus PTH together, name the organ.',
        'Isolated raised ALP is the classic trap — check GGT to decide whether it is liver or bone.',
        'Albumin distorts calcium, and the anion gap, and reflects both nutrition and liver function. Always look at it.',
      ],
    },
    warnings: [
      'These are patterns for orientation, not diagnostic criteria. A pattern points; it does not prove.',
      'Reference ranges are laboratory-specific and vary with age, sex and pregnancy. Confirm with your laboratory.',
    ],
    limitations: ['Mixed disease is common and produces mixed patterns. Trend over time is more informative than one panel.'],
    cards: [
      { q: 'Low sodium with high potassium — which organ?', a: 'Adrenal. Think Addison disease and adrenal crisis.' },
      { q: 'Raised ALP with a normal GGT — liver or bone?', a: 'Bone. A raised GGT is what makes a raised ALP hepatic.' },
      { q: 'Which tests measure liver SYNTHETIC function?', a: 'Albumin, prothrombin time or INR, and urea. Transaminases measure damage, not function.' },
      { q: 'High calcium with suppressed PTH?', a: 'Malignancy.' },
      { q: 'High calcium with raised or inappropriately normal PTH?', a: 'Primary hyperparathyroidism.' },
    ],
    checks: [
      'Albumin reviewed before interpreting calcium',
      'GGT checked before attributing a raised ALP to liver',
      'Sodium and potassium read together',
      'Previous results compared for trend',
      'Reference ranges confirmed against the local laboratory',
    ],
  },
];
