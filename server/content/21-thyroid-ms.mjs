/** Graves disease, antithyroid drugs, and the McDonald criteria for MS. */

export default [
  {
    id: 'AS-THYR-0001',
    type: 'guideline',
    title: 'Graves Disease and the Causes of Thyrotoxicosis',
    short: 'Graves disease',
    summary:
      'Graves is an autoantibody that MIMICS TSH, so the gland is driven continuously and the pituitary cannot switch it off. Distinguishing it from a toxic nodule and from thyroiditis matters, because thyroiditis needs no antithyroid drug at all.',
    domains: ['endocrine', 'immunology'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['graves disease', 'graves', 'thyrotoxicosis', 'hyperthyroidism', 'overactive thyroid', 'exophthalmos', 'thyroid eye disease'],
    terms: ['graves', 'thyrotoxicosis', 'hyperthyroid', 'trab', 'exophthalmos', 'proptosis', 'goitre', 'pretibial myxoedema', 'thyroid storm', 'toxic nodule', 'thyroiditis', 'uptake scan'],
    confirm_locally: true,
    body: {
      the_mechanism:
        'Graves disease is caused by TSH RECEPTOR ANTIBODIES (TRAb) — an IgG autoantibody that BINDS AND ACTIVATES the TSH receptor on thyroid follicular cells. It behaves like TSH, but with one critical difference: it is NOT subject to negative feedback. Rising thyroid hormone suppresses pituitary TSH to nothing, yet the antibody keeps stimulating regardless. The gland grows (diffuse goitre) and over-produces continuously.',
      why_the_eyes_and_shins_are_involved:
        'The TSH receptor is also expressed on ORBITAL FIBROBLASTS and on dermal fibroblasts in the pretibial skin. The same antibody stimulates those cells to proliferate and to secrete glycosaminoglycans, which draw in water. That is why Graves — alone among the causes of thyrotoxicosis — produces EXOPHTHALMOS and PRETIBIAL MYXOEDEMA. These are not caused by the excess hormone; they are caused by the antibody. This explains why eye disease can appear before, during or long after the biochemical thyrotoxicosis, and why it can worsen even once the patient is rendered euthyroid.',
      the_features: {
        of_thyrotoxicosis_generally:
          'Weight loss despite increased appetite, heat intolerance, sweating, palpitations, tremor, anxiety and irritability, frequent loose stools, oligomenorrhoea, proximal muscle weakness. In the ELDERLY it may present as APATHETIC thyrotoxicosis — weight loss, atrial fibrillation and depression, with none of the classic hyperactivity.',
        signs: 'Tachycardia or ATRIAL FIBRILLATION, fine tremor, warm sweaty palms, brisk reflexes, lid lag and lid retraction (which occur in ANY thyrotoxicosis, from sympathetic overactivity).',
        specific_to_graves: [
          'DIFFUSE, smooth goitre, sometimes with a BRUIT — a bruit indicates high vascularity and is near-specific.',
          'EXOPHTHALMOS / PROPTOSIS — the globe pushed forward. Distinguish this from lid retraction: in proptosis you can see sclera BELOW the lower limbus and the eye is genuinely displaced.',
          'THYROID DERMOPATHY (pretibial myxoedema) — raised, waxy, orange-peel plaques on the shins.',
          'THYROID ACROPACHY — clubbing with periosteal new bone. Rare and highly specific.',
        ],
      },
      the_three_way_differential: {
        graves: 'DIFFUSE goitre, often a bruit. TRAb POSITIVE. Uptake scan shows DIFFUSE, HIGH uptake. Eye and skin signs possible. Younger patients, female predominance, other autoimmune disease.',
        toxic_nodular_goitre_or_adenoma: 'IRREGULAR, NODULAR gland or a single palpable nodule. TRAb NEGATIVE. Uptake scan shows FOCAL "HOT" areas with the rest of the gland SUPPRESSED. NO eye or skin signs. Older patients, often long-standing goitre, common in iodine-deficient regions.',
        thyroiditis: {
          what: 'Inflammation causing RELEASE of preformed stored hormone — the gland is not over-PRODUCING, it is LEAKING.',
          types: 'Subacute (de Quervain) — PAINFUL, tender gland, often post-viral with raised inflammatory markers. Silent and postpartum thyroiditis — painless. Amiodarone- and drug-induced.',
          the_scan_finding: 'Uptake is LOW or ABSENT — the defining feature, and the opposite of Graves.',
          why_it_matters_enormously:
            'Thyroiditis is SELF-LIMITING and is typically followed by a HYPOTHYROID phase before recovery. ANTITHYROID DRUGS DO NOT WORK — there is nothing to block, because no hormone is being synthesised. Treatment is symptomatic: beta-blockade, and analgesia or steroids if painful. Giving carbimazole here achieves nothing and delays recognition.',
        },
        the_discriminating_test: 'TRAb, and where available a RADIOIODINE UPTAKE SCAN. High diffuse uptake = Graves. Focal hot nodule = toxic nodule. LOW or absent uptake = thyroiditis (or exogenous thyroxine, or iodine load).',
        factitious: 'Exogenous thyroxine ingestion. Thyrotoxic with a LOW uptake and, distinctively, a LOW THYROGLOBULIN — the gland is switched off and not releasing its own stored protein.',
      },
      treatment_options_in_principle: {
        antithyroid_drugs: 'See the antithyroid drug entry. First line in most settings, particularly in Graves where remission is possible.',
        beta_blockade: 'Controls the adrenergic symptoms — tremor, palpitations, anxiety — within hours, while antithyroid drugs take weeks. Propranolol additionally inhibits peripheral T4-to-T3 conversion at higher doses.',
        radioiodine: 'Definitive. CONTRAINDICATED IN PREGNANCY AND BREASTFEEDING, and it can PRECIPITATE OR WORSEN THYROID EYE DISEASE — a specific caution in patients with active ophthalmopathy.',
        surgery: 'Thyroidectomy for large goitre, compressive symptoms, suspected malignancy, or where other options fail. The patient must be rendered euthyroid before operation to avoid precipitating a storm.',
        the_eye_disease: 'Managed separately from the thyroid. SMOKING is the single strongest modifiable risk factor for progression and for a poor response to treatment — smoking cessation is a therapeutic intervention here, not general advice. Sight-threatening features (corneal exposure, optic nerve compression) need same-day ophthalmology.',
      },
      thyroid_storm: {
        what: 'Decompensated, life-threatening thyrotoxicosis with a high mortality.',
        precipitants: 'Infection, surgery, trauma, iodinated contrast, radioiodine, childbirth, DKA, and abrupt withdrawal of antithyroid medication.',
        features: 'FEVER, marked tachycardia or tachyarrhythmia out of proportion, agitation progressing to delirium and coma, vomiting and diarrhoea, and cardiac failure. It is a CLINICAL diagnosis — the hormone levels are not necessarily higher than in uncomplicated thyrotoxicosis.',
        the_management_principle:
          'Treat on suspicion. Block synthesis (antithyroid drug), block release (IODINE — but only AFTER the antithyroid drug has been given, or the iodine provides fresh substrate and makes it worse), block peripheral conversion and adrenergic effect (propranolol, corticosteroid), cool, rehydrate, and treat the precipitant. The ORDER of antithyroid drug before iodine is the point most often got wrong.',
      },
    },
    warnings: [
      'Thyroiditis does NOT respond to antithyroid drugs — the gland is leaking stored hormone, not making it. A low or absent uptake scan is the discriminator.',
      'In thyroid storm, give the antithyroid drug BEFORE iodine. Iodine first supplies substrate and worsens the storm.',
      'Radioiodine is contraindicated in pregnancy and breastfeeding, and can precipitate or worsen thyroid eye disease.',
      'Smoking markedly worsens Graves ophthalmopathy and its response to treatment. Cessation is a therapeutic intervention.',
      'Elderly patients may present with apathetic thyrotoxicosis — weight loss, atrial fibrillation and depression, with no hyperactivity.',
      'TRAb crosses the placenta. In a pregnant woman with Graves, a high level risks neonatal thyrotoxicosis — measure it and involve the neonatal team.',
      'Render the patient euthyroid before thyroidectomy to avoid precipitating a storm.',
    ],
    limitations: ['Uptake scanning is not universally available. Treatment choice, doses and monitoring are specialist- and protocol-directed.'],
    cards: [
      { q: 'What causes Graves disease mechanistically?', a: 'TSH receptor antibodies that bind and ACTIVATE the receptor, and are not subject to negative feedback.' },
      { q: 'Why does Graves alone cause eye and shin signs?', a: 'The TSH receptor is also on orbital and pretibial fibroblasts; the antibody stimulates them directly.' },
      { q: 'Uptake scan in Graves vs toxic nodule vs thyroiditis?', a: 'Diffuse high uptake; focal hot nodule with suppression elsewhere; LOW or absent uptake.' },
      { q: 'Why do antithyroid drugs fail in thyroiditis?', a: 'The gland is releasing preformed stored hormone, not synthesising it. There is nothing to block.' },
      { q: 'In thyroid storm, what must come before iodine?', a: 'The antithyroid drug. Iodine given first supplies substrate and worsens it.' },
      { q: 'Which modifiable factor most worsens Graves eye disease?', a: 'Smoking.' },
      { q: 'How does apathetic thyrotoxicosis present?', a: 'Weight loss, atrial fibrillation and depression in an older patient, without hyperactivity.' },
    ],
    checks: ['TSH and free T4 and T3 sent', 'TRAb sent', 'Uptake scan considered', 'Eye signs examined and smoking status recorded', 'Pregnancy status established before radioiodine', 'Precipitant sought if storm suspected', 'Euthyroid before surgery'],
    related: ['thyroid_function_tests_reading_tsh_and_free_t4_together'],
  },

  {
    id: 'AS-THYR-0002',
    type: 'drug',
    title: 'Antithyroid Drugs — Mechanism, and the Agranulocytosis Rule That Saves Lives',
    short: 'Antithyroid drugs',
    summary:
      'Carbimazole, methimazole and propylthiouracil block thyroid hormone synthesis. PTU additionally blocks peripheral conversion. All of them can cause AGRANULOCYTOSIS, and the single instruction that prevents deaths is the sore-throat rule.',
    domains: ['endocrine', 'pharmacology', 'haematology'],
    intents: ['prescribe_reference', 'monitor'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['carbimazole', 'methimazole', 'propylthiouracil', 'ptu', 'antithyroid', 'thionamide', 'agranulocytosis'],
    terms: ['carbimazole', 'methimazole', 'propylthiouracil', 'ptu', 'thionamide', 'agranulocytosis', 'neutropenia', 'sore throat', 'thyroid peroxidase', 'hepatotoxicity', 'block and replace'],
    confirm_locally: true,
    body: {
      the_mechanism: {
        shared: 'All thionamides inhibit THYROID PEROXIDASE, the enzyme that oxidises iodide, iodinates tyrosine residues on thyroglobulin, and couples them to form T3 and T4. Blocking it stops NEW hormone synthesis.',
        the_delay:
          'They do NOT touch hormone already STORED in the colloid, and the thyroid holds weeks of supply. That is why clinical improvement takes 2–6 weeks and why BETA-BLOCKADE is added for immediate symptom control. A patient told the tablets will "fix it" and feeling no better in a week will stop taking them.',
        ptu_uniquely: 'Propylthiouracil ALSO inhibits DEIODINASE, the peripheral enzyme converting T4 to the more active T3. That extra action gives a faster biochemical effect, which is why PTU is favoured in THYROID STORM.',
      },
      which_drug_when: {
        carbimazole_or_methimazole: 'First line for most patients. Longer acting, usually once daily, better adherence, and a lower risk of severe hepatotoxicity than PTU. Carbimazole is a prodrug converted to methimazole.',
        propylthiouracil: 'Reserved for: THYROID STORM (the peripheral conversion block), FIRST TRIMESTER of pregnancy, and intolerance of carbimazole.',
        the_pregnancy_reasoning:
          'Carbimazole and methimazole carry a small risk of a specific EMBRYOPATHY (aplasia cutis, choanal atresia, oesophageal atresia) with FIRST-TRIMESTER exposure. PTU does not, so PTU is preferred in the first trimester. But PTU carries the greater risk of severe LIVER FAILURE, so many protocols switch BACK to carbimazole after the first trimester. Both drugs cross the placenta and can cause fetal hypothyroidism and goitre — the lowest effective dose is used, and "block and replace" is AVOIDED in pregnancy because the levothyroxine does not cross adequately to protect the fetus while the antithyroid drug does.',
      },
      the_two_regimens: {
        titration: 'Start at a higher dose, then reduce to the lowest that maintains euthyroidism, guided by free T4 initially. TSH stays suppressed for MONTHS after the hormones normalise, so titrating on TSH alone early causes over-treatment.',
        block_and_replace: 'A full blocking dose of antithyroid drug PLUS levothyroxine. Fewer blood tests and more stable levels, but a higher total drug exposure. Not used in pregnancy.',
      },
      agranulocytosis: {
        what: 'A sudden, idiosyncratic, immune-mediated destruction of neutrophils. Rare — well under 1% — but potentially FATAL, because the patient has no defence against bacterial infection.',
        timing: 'Most cases occur in the first 3 MONTHS, but it can happen at any time and after a dose increase.',
        it_is_not_dose_predictable: 'It is idiosyncratic. Routine periodic full blood counts do NOT reliably catch it, because it develops between tests. That is exactly why the patient instruction matters more than the monitoring schedule.',
        the_rule_that_must_be_given_to_every_patient: {
          the_instruction:
            'STOP THE DRUG IMMEDIATELY and get an URGENT FULL BLOOD COUNT if you develop a SORE THROAT, FEVER, MOUTH ULCERS, or any unexplained infection or feeling suddenly very unwell.',
          why_it_is_phrased_that_way:
            'Neutropenic patients cannot form pus, so the presentation is a sore throat that looks unimpressive with systemic illness out of proportion. Telling a patient to "report side effects" is not enough — they must be told the specific symptoms and told to STOP the drug first and ask questions afterwards, because waiting for an appointment can be fatal.',
          documentation: 'Record that this warning was given, and give it in writing. It is the single highest-value action in prescribing these drugs.',
        },
        what_to_do_if_it_happens: [
          'STOP the antithyroid drug immediately — do not wait for the count.',
          'Urgent full blood count with differential.',
          'If neutropenic and febrile, treat as NEUTROPENIC SEPSIS — broad-spectrum antibiotics within one hour per the local protocol.',
          'Do NOT switch to the other thionamide. CROSS-REACTIVITY is well described; the alternative can cause the same reaction. The patient needs a different modality — radioiodine or surgery — discussed with endocrinology.',
          'Record it as a drug allergy, prominently.',
        ],
      },
      the_other_adverse_effects: {
        common_and_minor: 'Rash, urticaria, arthralgia, gastrointestinal upset, altered taste. Usually manageable.',
        hepatotoxicity: 'PTU can cause severe, sometimes fatal, hepatocellular necrosis — this is its defining serious risk and the reason it is second line. Carbimazole tends instead to cause a CHOLESTATIC picture, generally less severe. Warn about jaundice, dark urine, pale stools, right upper quadrant pain and persistent nausea.',
        anca_vasculitis: 'Associated particularly with PTU, and can occur after prolonged use.',
        the_summary: 'Two warnings go to every patient: the SORE THROAT rule (agranulocytosis) and the JAUNDICE rule (hepatotoxicity).',
      },
    },
    warnings: [
      'Every patient must be told: STOP the drug and get an urgent full blood count if you develop a sore throat, fever or mouth ulcers. Give this in writing and document it.',
      'Routine blood counts do not reliably detect agranulocytosis — it develops between tests. The patient instruction is the safety net.',
      'If agranulocytosis occurs, do NOT switch to the other thionamide. Cross-reactivity is well described.',
      'PTU can cause fatal liver failure. Warn about jaundice, dark urine and persistent nausea.',
      'Carbimazole and methimazole carry a first-trimester embryopathy risk; PTU is preferred in the first trimester and often switched back afterwards.',
      'Block-and-replace is avoided in pregnancy — levothyroxine does not cross the placenta adequately while the antithyroid drug does.',
      'TSH remains suppressed for months after hormones normalise. Titrate on free T4 early, not TSH.',
      'Clinical improvement takes 2–6 weeks because stored hormone must be depleted. Add a beta-blocker for immediate symptom control and tell the patient why.',
    ],
    limitations: ['Doses, regimens, monitoring intervals and pregnancy switching points are set by local endocrine protocol.'],
    cards: [
      { q: 'What enzyme do thionamides inhibit?', a: 'Thyroid peroxidase — blocking iodination and coupling, so no NEW hormone is made.' },
      { q: 'Why do antithyroid drugs take weeks to work?', a: 'They do not affect hormone already stored in the colloid, and the gland holds weeks of supply.' },
      { q: 'What does PTU do that carbimazole does not?', a: 'It also inhibits peripheral deiodinase, blocking T4-to-T3 conversion — hence its use in thyroid storm.' },
      { q: 'State the agranulocytosis instruction verbatim.', a: 'Stop the drug immediately and get an urgent full blood count if you get a sore throat, fever or mouth ulcers.' },
      { q: 'Agranulocytosis on carbimazole — can you switch to PTU?', a: 'No. Cross-reactivity is well described. Move to radioiodine or surgery.' },
      { q: 'Which thionamide in the first trimester, and why?', a: 'PTU — carbimazole and methimazole carry an embryopathy risk. Often switched back after the first trimester because of PTU hepatotoxicity.' },
      { q: 'Why not titrate on TSH early?', a: 'TSH stays suppressed for months after T4 normalises; titrating on it causes over-treatment.' },
    ],
    checks: ['Sore-throat rule given verbally AND in writing, and documented', 'Jaundice warning given', 'Baseline FBC and liver function', 'Beta-blocker considered for symptom control', 'Pregnancy status established and drug chosen accordingly', 'Free T4 used for early titration', 'Drug allergy recorded if reaction occurs'],
  },

  {
    id: 'AS-NEUR-0006',
    type: 'criteria',
    title: 'McDonald Criteria — Diagnosing Multiple Sclerosis by Dissemination in Space and Time',
    short: 'McDonald criteria',
    summary:
      'MS is diagnosed by proving lesions separated in SPACE and in TIME, with no better explanation. The criteria exist to let MRI and CSF substitute for waiting years for a second clinical attack — and the "no better explanation" clause does more work than the rest combined.',
    domains: ['neurology'],
    intents: ['classify', 'investigate'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'mcdonald criteria', 'ms diagnosis', 'dissemination in space', 'dissemination in time', 'dis dit',
      'multiple sclerosis criteria', 'dawson fingers', 'area postrema', 'nmo', 'nmosd', 'neuromyelitis optica',
      'adem', 'acute disseminated encephalomyelitis', 'mogad', 'aquaporin 4', 'aqp4',
      'longitudinally extensive transverse myelitis', 'periventricular', 'juxtacortical', 'infratentorial',
    ],
    terms: [
      'mcdonald', 'dissemination', 'space', 'time', 'oligoclonal bands', 'periventricular', 'juxtacortical',
      'infratentorial', 'gadolinium', 'cis', 'clinically isolated syndrome', 'nmo', 'nmosd', 'adem', 'aquaporin',
      'aqp4', 'mog', 'mogad', 'dawson', 'dawson fingers', 'area postrema', 'letm', 'longitudinally extensive',
      'enhancing', 'non-enhancing', 'demyelination', 'interferon beta', 'natalizumab', 'fingolimod',
    ],
    confirm_locally: true,
    body: {
      the_core_idea:
        'Multiple sclerosis means lesions that are MULTIPLE in location and MULTIPLE in time. Historically that meant waiting for a second clinical attack. The McDonald criteria allow MRI and cerebrospinal fluid findings to demonstrate the same thing at a single point, so treatment can start earlier — which matters, because disability accrues from the start.',
      dissemination_in_space: {
        what: 'Lesions in at least TWO of the four CNS locations characteristic of MS.',
        the_four_locations: [
          'PERIVENTRICULAR — abutting the ventricles. DAWSON FINGERS are the classic form: ovoid lesions oriented PERPENDICULAR to the ventricular surface, following the deep medullary veins.',
          'JUXTACORTICAL / CORTICAL — touching or within the cortex.',
          'INFRATENTORIAL — brainstem, cerebellum, cerebellar peduncles.',
          'SPINAL CORD — typically SHORT segment, under two vertebral bodies, and PERIPHERAL/eccentric within the cord cross-section.',
        ],
        how_it_can_be_shown: 'Clinically (attacks referable to different sites) or radiologically (lesions in two or more of those locations on MRI).',
      },
      dissemination_in_time: {
        what: 'Evidence that lesions arose at DIFFERENT times.',
        how_it_can_be_shown: [
          'A second clinical attack.',
          'A NEW lesion on a follow-up MRI compared with a baseline.',
          'The simultaneous presence on a SINGLE scan of BOTH a gadolinium-ENHANCING lesion and a NON-enhancing lesion. Enhancement indicates breakdown of the blood-brain barrier and lasts only a few weeks, so an enhancing lesion is recent and a non-enhancing one is older — two different times, proven on one scan. This is the elegant core of the criteria.',
          'CSF-specific OLIGOCLONAL BANDS. In the 2017 revision these can SUBSTITUTE for dissemination in time in a patient with a clinically isolated syndrome who meets dissemination in space. This was a significant change and it allows earlier diagnosis and earlier treatment.',
        ],
      },
      oligoclonal_bands: {
        what: 'Immunoglobulin bands on CSF electrophoresis, run ALONGSIDE a paired SERUM sample.',
        the_interpretation_that_matters:
          'Bands present in CSF but ABSENT in serum indicate INTRATHECAL synthesis — the immune activity is inside the CNS. Bands present in BOTH mean a systemic process leaking across, which is NOT supportive of MS and should redirect the workup.',
        note: 'They are supportive, not pathognomonic — they occur in CNS infection, sarcoidosis, lupus and other inflammatory disease.',
      },
      the_clause_that_does_the_most_work: {
        no_better_explanation:
          'Every version of the criteria requires that there is NO BETTER EXPLANATION. This is not a formality. White matter lesions are extremely common with age, migraine, hypertension, diabetes and smoking, and applying the criteria to them produces confident misdiagnosis. Published series of "MS misdiagnosis" consistently find the criteria were applied to patients who never had a typical attack.',
        the_practical_rule: 'The criteria are for people with a clinical syndrome TYPICAL of demyelination. They are not a screening tool for incidental white matter change, and they must not be applied to an MRI report in isolation.',
      },
      red_flags_against_ms: [
        'Progressive course from the very onset in a young patient without spinal cord features.',
        'LONGITUDINALLY EXTENSIVE cord lesion — three or more vertebral segments. This points to NMOSD, not MS.',
        'Normal MRI despite clear clinical relapses.',
        'Bands present in BOTH serum and CSF.',
        'Peripheral nervous system involvement, prominent systemic features, marked constitutional upset.',
        'Bilateral simultaneous optic neuritis, or severe optic neuritis with poor recovery.',
        'Meningeal enhancement, or lesions respecting a vascular territory.',
      ],
      the_key_differentials: {
        nmosd: {
          what: 'Neuromyelitis optica spectrum disorder — AQUAPORIN-4 IgG antibody against astrocyte water channels.',
          features: 'SEVERE optic neuritis, often bilateral, with poor recovery. LONGITUDINALLY EXTENSIVE transverse myelitis over three or more segments. Area postrema syndrome — intractable hiccups, nausea and vomiting, which is highly characteristic and frequently misattributed to a gastrointestinal cause.',
          why_the_distinction_is_urgent:
            'Several MS disease-modifying therapies — interferon beta, natalizumab and fingolimod among them — can SEVERELY WORSEN NMOSD. Giving an MS drug to a patient who actually has NMOSD causes harm. Test aquaporin-4 antibody before starting disease-modifying therapy.',
        },
        mogad: 'MOG antibody-associated disease. Overlaps with both; often bilateral optic neuritis with disc swelling, ADEM-like presentations in children, and a generally better recovery. Test MOG antibody where the picture is atypical.',
        adem: {
          what: 'Acute disseminated encephalomyelitis.',
          features: 'Typically MONOPHASIC, usually in CHILDREN, often POST-INFECTIOUS or post-vaccination, with ENCEPHALOPATHY — altered consciousness or behaviour, which MS does not characteristically cause — and large, fluffy, poorly demarcated lesions all of the SAME AGE (so all enhance or none do).',
          the_discriminator: 'ENCEPHALOPATHY plus lesions all of the same age. MS lesions are of different ages, which is the whole point of dissemination in time.',
        },
        the_others_to_exclude: 'B12 deficiency, HIV, syphilis, sarcoidosis, lupus, Behçet, Susac syndrome, small-vessel ischaemic disease, CADASIL, and cervical spondylotic myelopathy.',
      },
      the_practical_workup: [
        'MRI brain AND whole spine, with and without gadolinium.',
        'Lumbar puncture for oligoclonal bands with a PAIRED serum sample.',
        'AQUAPORIN-4 antibody, and MOG antibody if the picture is atypical.',
        'Bloods to exclude mimics: B12, thyroid, ANA/ENA, ACE, HIV, syphilis serology, and inflammatory markers.',
        'Visual evoked potentials where a subclinical optic nerve lesion would change the diagnosis.',
      ],
    },
    warnings: [
      'Do not apply the McDonald criteria to incidental white matter lesions. They require a clinical syndrome typical of demyelination, and misuse is a documented cause of MS misdiagnosis.',
      'Test aquaporin-4 antibody BEFORE starting disease-modifying therapy. Several MS drugs severely worsen NMOSD.',
      'A longitudinally extensive cord lesion (three or more segments) points AWAY from MS and toward NMOSD.',
      'Oligoclonal bands present in BOTH serum and CSF indicate a systemic process, not MS.',
      'Encephalopathy is not typical of MS — consider ADEM, especially in a child after infection.',
      'Exclude B12 deficiency, HIV and syphilis in every case. All are treatable and all mimic MS.',
      'Criteria are periodically revised. Confirm the version in current local use before applying thresholds.',
    ],
    limitations: [
      'This entry describes the PRINCIPLES of the criteria. Exact lesion counts and thresholds differ between revisions — apply the version your service currently uses.',
      'MRI protocols and antibody assay availability vary by centre.',
    ],
    cards: [
      { q: 'What two things must MS diagnosis demonstrate?', a: 'Dissemination in space and dissemination in time, with no better explanation.' },
      { q: 'Name the four locations for dissemination in space.', a: 'Periventricular, juxtacortical/cortical, infratentorial, and spinal cord.' },
      { q: 'How can one MRI prove dissemination in time?', a: 'Simultaneous enhancing AND non-enhancing lesions — enhancement lasts only weeks, so they arose at different times.' },
      { q: 'What can substitute for dissemination in time in a clinically isolated syndrome?', a: 'CSF-specific oligoclonal bands (2017 revision).' },
      { q: 'What are Dawson fingers?', a: 'Ovoid periventricular lesions oriented perpendicular to the ventricles, along the deep medullary veins.' },
      { q: 'Which cord finding points away from MS?', a: 'A longitudinally extensive lesion over three or more vertebral segments — suggests NMOSD.' },
      { q: 'Why must aquaporin-4 be tested before treatment?', a: 'Interferon beta, natalizumab and fingolimod can severely worsen NMOSD.' },
      { q: 'What distinguishes ADEM from MS?', a: 'Encephalopathy, and lesions all of the same age. MS lesions are of different ages.' },
    ],
    checks: ['Clinical syndrome typical of demyelination confirmed', 'MRI brain and whole spine with gadolinium', 'Paired CSF and serum oligoclonal bands', 'Aquaporin-4 antibody sent before DMT', 'B12, HIV, syphilis, ANA excluded', 'Cord lesion length measured', 'Current criteria version confirmed'],
  },
];
