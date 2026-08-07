/**
 * Endocrine dynamic function tests.
 *
 * Principle throughout: to test a gland you suspect of OVER-producing, try to
 * SUPPRESS it. To test one you suspect of UNDER-producing, try to STIMULATE it.
 * Every dynamic test in endocrinology is one of those two moves.
 */

export default [
  {
    id: 'AS-ENDO-0001',
    type: 'test',
    title: 'Dexamethasone Suppression and Synacthen — Testing the Adrenal Axis',
    short: 'Cortisol testing',
    summary:
      'Suspect too much cortisol, try to suppress it. Suspect too little, try to stimulate it. The dexamethasone suppression test screens for Cushing syndrome; the short Synacthen test screens for adrenal insufficiency.',
    domains: ['endocrine', 'laboratory_medicine'],
    intents: ['investigate', 'interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['dexamethasone suppression test', 'dst', 'synacthen', 'short synacthen test', 'acth stimulation', 'cortisol test'],
    terms: ['dexamethasone', 'suppression', 'synacthen', 'tetracosactide', 'cortisol', 'acth', 'cushing', 'addison', 'adrenal insufficiency'],
    confirm_locally: true,
    body: {
      the_organising_principle: 'Over-production → try to SUPPRESS. Under-production → try to STIMULATE.',
      cortisol_physiology:
        'Cortisol has a strong circadian rhythm — highest at about 8am, lowest around midnight. This is why a random cortisol is almost uninterpretable and why timing is specified in every protocol.',
      overnight_dexamethasone_suppression: {
        purpose: 'SCREEN for Cushing syndrome (cortisol excess).',
        principle: 'Dexamethasone is a potent synthetic glucocorticoid that suppresses ACTH in a normal axis. It is not detected by the cortisol assay, so any cortisol measured is the patient\'s own.',
        method: 'Dexamethasone by mouth late in the evening, serum cortisol at about 8–9am the next morning.',
        interpretation: 'Adequate suppression makes Cushing syndrome unlikely. FAILURE to suppress is abnormal and requires confirmation with a second test — it does not diagnose Cushing by itself.',
        false_positives:
          'This is where the test goes wrong. Enzyme-inducing drugs (phenytoin, carbamazepine, rifampicin) clear dexamethasone faster; oestrogen and pregnancy raise cortisol-binding globulin and so raise TOTAL cortisol; depression, alcohol excess, obesity, severe illness and shift work all disturb the axis (pseudo-Cushing). Take a full drug history first.',
      },
      alternative_screens: 'Late-night salivary cortisol and 24-hour urinary free cortisol are the other accepted screening tests. Local practice varies; use what your laboratory validates.',
      after_a_positive_screen:
        'Once cortisol excess is confirmed, measure ACTH to localise. SUPPRESSED ACTH means an adrenal source (adrenal adenoma or carcinoma). NORMAL or HIGH ACTH means a pituitary tumour (Cushing DISEASE) or an ectopic ACTH source, usually small-cell lung cancer. Further testing separates those two.',
      cushing_syndrome_versus_disease:
        'Cushing SYNDROME is the clinical state of cortisol excess from any cause — and the commonest cause by far is EXOGENOUS STEROIDS. Cushing DISEASE specifically means a pituitary ACTH-secreting adenoma. Always take a steroid history, including inhalers, topical preparations and traditional or over-the-counter remedies, before investigating.',
      short_synacthen_test: {
        purpose: 'SCREEN for adrenal insufficiency (cortisol deficiency).',
        principle: 'Synthetic ACTH is given; a healthy adrenal responds by producing cortisol.',
        method: 'Baseline cortisol, then synthetic ACTH intramuscularly or intravenously, with cortisol measured again at 30 and 60 minutes.',
        interpretation:
          'An adequate rise excludes primary adrenal insufficiency. A flat or inadequate response indicates adrenal insufficiency. The exact threshold depends on the assay your laboratory uses — modern specific assays read lower than older ones, so use the local cut-off, not a remembered number.',
        important_caveat:
          'The test can be falsely NORMAL in recent-onset SECONDARY (pituitary) insufficiency, because the adrenal has not yet atrophied and can still respond. If pituitary disease is suspected, discuss with endocrinology.',
      },
      distinguishing_primary_from_secondary: {
        primary_addison: 'The adrenal has failed. ACTH is HIGH. Aldosterone is lost as well, so there is HYPONATRAEMIA with HYPERKALAEMIA, salt craving and postural hypotension. High ACTH drives PIGMENTATION of skin creases, scars and buccal mucosa.',
        secondary: 'The pituitary has failed. ACTH is LOW. Aldosterone is preserved (it is driven by renin, not ACTH), so potassium is usually NORMAL and there is NO pigmentation. Commonest cause overall: abrupt withdrawal of long-term steroids.',
        the_shortcut: 'Pigmented with a high potassium = primary. Pale with a normal potassium = secondary.',
      },
      the_emergency_rule:
        'If adrenal crisis is suspected, take a baseline cortisol and ACTH and then TREAT IMMEDIATELY with hydrocortisone. Do not wait for the Synacthen test. Hydrocortisone does cross-react with cortisol assays, so take the sample first — but never delay treatment for a sample.',
    },
    warnings: [
      'In suspected adrenal crisis, give hydrocortisone immediately after taking a baseline sample. Never delay treatment for dynamic testing.',
      'Take a full steroid history — including inhaled, topical, joint injections and traditional remedies — before investigating for Cushing syndrome. Exogenous steroid is the commonest cause.',
      'Enzyme-inducing drugs and oestrogen invalidate the dexamethasone suppression test. Review the drug chart before ordering.',
      'A normal short Synacthen test does not exclude recent-onset secondary adrenal insufficiency.',
      'Assay-specific cut-offs differ. Use your own laboratory\'s thresholds, not remembered figures.',
    ],
    limitations: ['Dynamic test protocols, doses and thresholds are institution-specific and assay-specific.'],
    cards: [
      { q: 'What is the organising principle of endocrine dynamic testing?', a: 'Suspected over-production: suppress it. Suspected under-production: stimulate it.' },
      { q: 'Failure to suppress on dexamethasone — is that a diagnosis?', a: 'No. It is a positive screen requiring confirmation, and false positives are common.' },
      { q: 'High cortisol with SUPPRESSED ACTH means?', a: 'An adrenal source. Normal or high ACTH means pituitary (Cushing disease) or ectopic.' },
      { q: 'Primary versus secondary adrenal insufficiency at the bedside?', a: 'Primary: pigmentation, high potassium, low sodium. Secondary: no pigmentation, normal potassium.' },
      { q: 'Suspected adrenal crisis — what comes first?', a: 'Take baseline cortisol and ACTH, then give hydrocortisone immediately. Do not wait for testing.' },
      { q: 'Commonest cause of Cushing syndrome overall?', a: 'Exogenous steroids.' },
    ],
    checks: ['Full steroid history taken', 'Drug chart reviewed for enzyme inducers and oestrogen', 'Timing of samples correct', 'Local assay thresholds used', 'Hydrocortisone given first if crisis suspected'],
    related: ['adrenal_crisis_give_hydrocortisone_now'],
  },

  {
    id: 'AS-ENDO-0002',
    type: 'test',
    title: 'Thyroid Function Tests — Reading TSH and Free T4 Together',
    short: 'Thyroid function tests',
    summary:
      'TSH and free T4 must be read as a PAIR, and TSH moves in the opposite direction to the hormone in primary disease. Reading TSH alone is the commonest thyroid error.',
    domains: ['endocrine', 'laboratory_medicine'],
    intents: ['interpret'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['tft', 'thyroid function test', 'tsh', 'free t4', 'thyroid test', 'thyroid function'],
    terms: ['tsh', 't4', 't3', 'thyroid', 'hypothyroid', 'hyperthyroid', 'sick euthyroid', 'anti-tpo', 'trab', 'levothyroxine'],
    confirm_locally: true,
    body: {
      the_feedback_loop:
        'The pituitary senses thyroid hormone and adjusts TSH inversely. Low thyroid hormone → the pituitary shouts louder → TSH HIGH. High thyroid hormone → the pituitary goes quiet → TSH LOW. TSH is exquisitely sensitive, which is why it is the first-line test — but only in an intact pituitary.',
      the_patterns: {
        high_tsh_low_t4: 'PRIMARY HYPOTHYROIDISM. The thyroid has failed. Commonest cause worldwide is iodine deficiency; in iodine-replete areas, Hashimoto thyroiditis.',
        high_tsh_normal_t4: 'SUBCLINICAL hypothyroidism. Check anti-TPO antibodies and repeat before committing to lifelong treatment.',
        low_tsh_high_t4: 'PRIMARY HYPERTHYROIDISM. Graves disease, toxic nodule, toxic multinodular goitre, or thyroiditis.',
        low_tsh_normal_t4: 'SUBCLINICAL hyperthyroidism, or the effect of recent treatment. Check free T3 — T3 toxicosis exists.',
        low_tsh_low_t4:
          'This is the pattern that catches people out. Either SECONDARY (pituitary) hypothyroidism, where the pituitary cannot make TSH, or NON-THYROIDAL ILLNESS. Both need thinking about, and neither is treated by simply giving levothyroxine.',
        high_tsh_high_t4: 'Rare. A TSH-secreting pituitary adenoma, or thyroid hormone resistance. Refer.',
      },
      sick_euthyroid_syndrome: {
        what: 'In any significant acute illness, T3 falls first, then T4, and TSH is low or normal. It is an adaptive response, not thyroid disease.',
        the_rule: 'Do NOT check thyroid function in an acutely unwell inpatient unless you specifically suspect thyroid disease as the cause of the illness. If it has been checked and is abnormal, repeat it 6 weeks after recovery before acting.',
        why_it_matters: 'Treating sick euthyroid with levothyroxine does not help and may harm.',
      },
      the_antibodies: {
        anti_tpo: 'Hashimoto thyroiditis, and also positive in Graves. Predicts progression from subclinical to overt hypothyroidism.',
        trab: 'TSH receptor antibody — diagnostic of GRAVES. Crosses the placenta, so a pregnant woman with Graves needs it measured; a high level risks neonatal thyrotoxicosis.',
      },
      practical_traps: [
        'BIOTIN supplements (including high-dose over-the-counter hair and nail products) interfere with many immunoassays and can produce a falsely low TSH with falsely high T4 — mimicking Graves disease. Ask about supplements and repeat off biotin.',
        'Amiodarone can cause both hypo- and hyperthyroidism, sometimes years after stopping.',
        'Lithium causes hypothyroidism and goitre.',
        'In pregnancy the reference ranges CHANGE by trimester — human chorionic gonadotropin cross-stimulates the TSH receptor, so first-trimester TSH is normally lower. Use pregnancy-specific ranges.',
        'Levothyroxine absorption is reduced by calcium, iron, proton pump inhibitors and food. Take it fasting, separated from those.',
      ],
      starting_levothyroxine:
        'Start low and go slow in the elderly and in known ischaemic heart disease — a rapid increase in metabolic rate can precipitate angina or arrhythmia. Recheck TSH no sooner than about 6 weeks after any dose change, because the axis takes that long to re-equilibrate.',
    },
    warnings: [
      'Do not interpret thyroid function tests in acute illness. Sick euthyroid syndrome mimics disease; repeat after recovery.',
      'Ask about biotin supplements before acting on a discordant result — they cause a false Graves-like pattern.',
      'Use pregnancy-specific, trimester-specific reference ranges. Standard ranges misclassify pregnant women.',
      'Start levothyroxine cautiously in the elderly and in ischaemic heart disease.',
      'Never check TSH sooner than about 6 weeks after a dose change; earlier results mislead.',
    ],
    limitations: ['Reference ranges are assay- and population-specific. Confirm with your own laboratory.'],
    cards: [
      { q: 'Why must TSH and free T4 be read together?', a: 'TSH alone cannot distinguish primary from secondary disease, or from sick euthyroid syndrome.' },
      { q: 'Low TSH with low T4 — what two things?', a: 'Secondary (pituitary) hypothyroidism, or non-thyroidal illness. Neither is treated with levothyroxine reflexively.' },
      { q: 'Should you check thyroid function in an acutely unwell inpatient?', a: 'Generally no. Sick euthyroid syndrome makes it uninterpretable. Repeat 6 weeks after recovery.' },
      { q: 'Which supplement mimics Graves disease on testing?', a: 'Biotin — it interferes with immunoassays.' },
      { q: 'How soon can you recheck TSH after a dose change?', a: 'About 6 weeks. Earlier is misleading.' },
    ],
    checks: ['TSH and free T4 interpreted as a pair', 'Acute illness considered', 'Biotin and amiodarone asked about', 'Pregnancy-specific ranges used if pregnant', 'Recheck interval at least 6 weeks'],
  },
];
