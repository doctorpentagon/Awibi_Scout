/** Nutrition, vitamins, antioxidant biochemistry, and immunisation. */

export default [
  {
    id: 'AS-NUTR-0001',
    type: 'named_knowledge',
    title: 'Classes of Food and the Tests That Assess Each',
    short: 'Food classes & tests',
    summary:
      'Six classes: carbohydrate, protein, fat, vitamins, minerals and water. Each has a test that measures status and a deficiency syndrome that names itself. This maps class to test to disease.',
    domains: ['nutrition', 'biochemistry'],
    intents: ['identify', 'revise'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['classes of food', 'macronutrients', 'micronutrients', 'nutritional assessment', 'food classes'],
    terms: ['carbohydrate', 'protein', 'fat', 'vitamin', 'mineral', 'albumin', 'prealbumin', 'ferritin', 'nutrition', 'kwashiorkor', 'marasmus', 'muac'],
    confirm_locally: true,
    body: {
      carbohydrate: {
        provides: 'About 4 kcal per gram. The brain\'s obligatory fuel.',
        forms: 'Simple (glucose, fructose, sucrose, lactose) and complex (starch, glycogen, fibre).',
        tests: 'Fasting glucose, oral glucose tolerance test, HbA1c, C-peptide.',
        disorders: 'Diabetes, reactive hypoglycaemia, lactose intolerance.',
      },
      protein: {
        provides: 'About 4 kcal per gram, but its real job is structure, enzymes, antibodies and transport.',
        essential_amino_acids: 'Histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine.',
        tests: 'Albumin, prealbumin (transthyretin), total protein, transferrin.',
        the_caution:
          'ALBUMIN IS A POOR NUTRITIONAL MARKER in illness. It is a negative acute phase protein, so it falls with inflammation, sepsis, liver disease and capillary leak regardless of intake. Its half-life is around 20 days, so it is slow. Prealbumin is shorter (2–3 days) but is equally suppressed by inflammation. A low albumin in a sick patient measures illness, not malnutrition.',
        disorders: 'Kwashiorkor (oedematous malnutrition — the child has some energy but insufficient protein) and marasmus (severe wasting from overall energy deficit). Marasmic-kwashiorkor is both.',
      },
      fat: {
        provides: 'About 9 kcal per gram. Also cell membranes, steroid hormones, and the carrier for vitamins A, D, E and K.',
        essential: 'Linoleic acid (omega-6) and alpha-linolenic acid (omega-3).',
        tests: 'Lipid profile, and faecal elastase or faecal fat where malabsorption is suspected.',
        note: 'Fat malabsorption causes deficiency of the FAT-SOLUBLE vitamins together — think of that combination in coeliac disease, cystic fibrosis, cholestasis and after bowel resection.',
      },
      vitamins_and_minerals: 'Covered in the vitamins entry and in the individual electrolyte entries.',
      practical_nutritional_assessment: {
        the_point: 'Blood tests are the weakest part of nutritional assessment. Anthropometry and history are stronger.',
        tools: [
          'Weight, height, BMI, and — most importantly — UNINTENTIONAL WEIGHT LOSS over time',
          'MID-UPPER ARM CIRCUMFERENCE (MUAC): the field standard in children aged 6–59 months, and it needs no scales',
          'Assessment of recent intake and of whether intake is likely to remain poor',
          'Oedema — its presence changes the classification of childhood malnutrition entirely',
        ],
        why_muac_matters: 'It requires only a paper tape, is independent of hydration status in a way weight is not, and is colour-banded so a community health worker can use it correctly without arithmetic.',
      },
    },
    warnings: [
      'Do not use albumin as a nutritional marker in an unwell patient. It reflects inflammation, not intake.',
      'Refeeding a severely malnourished patient carries real risk. Assess refeeding risk before starting and give thiamine first.',
      'Oedema in a malnourished child changes the classification and the management pathway. Always check for bilateral pitting oedema of the feet.',
    ],
    limitations: ['Reference values and malnutrition thresholds are age- and programme-specific. Follow national protocol.'],
    cards: [
      { q: 'Why is albumin a poor nutritional marker?', a: 'It is a negative acute phase protein — it falls with inflammation, sepsis and liver disease regardless of intake, and it has a long half-life.' },
      { q: 'What does fat malabsorption cost you?', a: 'The fat-soluble vitamins A, D, E and K together.' },
      { q: 'Kwashiorkor versus marasmus?', a: 'Kwashiorkor is oedematous protein malnutrition. Marasmus is severe wasting from overall energy deficit.' },
      { q: 'Why is MUAC the field standard in young children?', a: 'It needs only a tape, is colour-banded, and is less affected by hydration than weight.' },
    ],
    checks: ['Weight and unintentional weight loss documented', 'MUAC measured in children 6–59 months', 'Bilateral pitting oedema checked', 'Refeeding risk assessed', 'Thiamine given before feeding if at risk'],
  },

  {
    id: 'AS-NUTR-0002',
    type: 'named_knowledge',
    title: 'Vitamins — Deficiency Syndromes and the Ones That Cause Harm in Excess',
    short: 'Vitamins',
    summary:
      'Fat-soluble vitamins (A, D, E, K) are stored and can therefore be TOXIC in excess. Water-soluble vitamins are mostly excreted, so deficiency develops faster but toxicity is rarer. That single distinction organises the whole subject.',
    domains: ['nutrition', 'biochemistry'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['vitamins', 'vitamin deficiency', 'vitamin d', 'vitamin k', 'thiamine', 'scurvy', 'rickets', 'pellagra', 'beriberi'],
    terms: ['vitamin', 'thiamine', 'wernicke', 'scurvy', 'rickets', 'osteomalacia', 'pellagra', 'beriberi', 'night blindness', 'vitamin k', 'inr'],
    body: {
      fat_soluble: {
        vitamin_a: {
          role: 'Vision (retinal in rhodopsin), epithelial integrity, immunity.',
          deficiency: 'NIGHT BLINDNESS first, then Bitot spots, xerophthalmia, and eventually corneal ulceration and irreversible blindness. It also markedly increases death from measles and diarrhoea in children — which is why supplementation is a core child-survival intervention.',
          excess: 'TERATOGENIC. High-dose vitamin A and retinoid drugs must be avoided in pregnancy. Chronic excess causes raised intracranial pressure, hepatotoxicity and bone pain.',
        },
        vitamin_d: {
          role: 'Calcium and phosphate absorption from the gut; bone mineralisation.',
          activation: 'Skin (UVB) or diet → liver 25-hydroxylation → KIDNEY 1-alpha-hydroxylation to the active form. This is why CHRONIC KIDNEY DISEASE causes functional vitamin D deficiency even with adequate intake — the kidney cannot make the active form.',
          deficiency: 'RICKETS in children (growing bone), OSTEOMALACIA in adults (mature bone). Biochemistry: calcium low or low-normal, phosphate low, ALP HIGH, PTH high.',
          rickets_signs: 'Delayed fontanelle closure, frontal bossing, craniotabes, RACHITIC ROSARY (beading at the costochondral junctions), Harrison sulcus, wrist and ankle widening, bowing of the legs (genu varum) or knock knees (genu valgum), and in severe untreated disease a WINDSWEPT deformity — one leg bowed out and the other in.',
          excess: 'Hypercalcaemia, nephrocalcinosis, renal stones.',
        },
        vitamin_e: { role: 'Antioxidant protecting membrane lipids.', deficiency: 'Rare; haemolysis, ataxia and neuropathy, mainly in fat malabsorption and in preterm infants.' },
        vitamin_k: {
          role: 'Gamma-carboxylation of clotting factors II, VII, IX, X and Proteins C and S. Without it those factors cannot bind calcium and are non-functional.',
          deficiency: 'Bleeding with a PROLONGED PT/INR. Causes: newborns (poor placental transfer, low in breast milk, sterile gut), fat malabsorption, obstructive jaundice (no bile means no fat-soluble vitamin absorption), prolonged antibiotics, warfarin.',
          the_newborn_point:
            'HAEMORRHAGIC DISEASE OF THE NEWBORN (vitamin K deficiency bleeding) is prevented by vitamin K at birth. Late-onset disease can present as catastrophic intracranial haemorrhage at 2–8 weeks in an exclusively breastfed baby who missed the dose. This is one of the highest-value single interventions in newborn care.',
        },
      },
      water_soluble: {
        b1_thiamine: {
          deficiency: 'WET beriberi (high-output cardiac failure), DRY beriberi (peripheral neuropathy), and WERNICKE ENCEPHALOPATHY — confusion, ophthalmoplegia and ataxia.',
          the_critical_rule:
            'Give THIAMINE BEFORE glucose in any patient at risk (alcohol dependence, malnutrition, hyperemesis, prolonged vomiting, refeeding). A glucose load consumes the last thiamine and can precipitate Wernicke encephalopathy, which becomes irreversible Korsakoff syndrome.',
          note: 'The classic triad is present in a minority of Wernicke cases. Treat on suspicion — thiamine is safe and the alternative is permanent amnesia.',
        },
        b3_niacin: 'PELLAGRA — the three Ds: Dermatitis (photosensitive, Casal necklace), Diarrhoea, Dementia, and if untreated Death. Seen in maize-dependent diets, alcohol dependence, carcinoid (tryptophan diverted), and isoniazid therapy.',
        b6_pyridoxine: 'Deficiency causes peripheral neuropathy and sideroblastic anaemia. ISONIAZID causes it, which is why pyridoxine is co-prescribed with isoniazid. Excess pyridoxine also causes a sensory neuropathy — both ends harm.',
        b9_folate: 'Megaloblastic anaemia WITHOUT neurological signs. Prevents neural tube defects — supplement before conception and through the first trimester.',
        b12_cobalamin: 'Megaloblastic anaemia WITH neurological disease — subacute combined degeneration of the cord, peripheral neuropathy, cognitive change. Causes: pernicious anaemia, gastrectomy, ileal disease or resection, metformin, strict vegan diet, and fish tapeworm.',
        c_ascorbic_acid:
          'SCURVY. Vitamin C is required to hydroxylate proline and lysine in collagen, so without it collagen is defective: perifollicular haemorrhage, corkscrew hairs, swollen bleeding gums, poor wound healing, old wounds reopening, and subperiosteal haemorrhage causing severe bone pain in children.',
      },
      the_two_rules_worth_memorising: [
        'Thiamine BEFORE glucose in anyone at risk.',
        'B12 BEFORE folate when both may be deficient.',
      ],
    },
    warnings: [
      'Give thiamine before glucose in alcohol dependence, malnutrition or hyperemesis. Glucose alone can precipitate irreversible Wernicke-Korsakoff.',
      'High-dose vitamin A and retinoids are teratogenic. Avoid in pregnancy and in women who may become pregnant.',
      'Vitamin K at birth prevents haemorrhagic disease of the newborn, including late intracranial haemorrhage at 2–8 weeks. Confirm it was given.',
      'Do not correct folate before excluding B12 deficiency.',
      'Co-prescribe pyridoxine with isoniazid to prevent peripheral neuropathy.',
    ],
    limitations: ['Doses and supplementation schedules are set by national programme. Follow local guidance.'],
    cards: [
      { q: 'Why does chronic kidney disease cause vitamin D deficiency?', a: 'The kidney performs 1-alpha-hydroxylation. Without it the active form cannot be made.' },
      { q: 'Which comes first, thiamine or glucose?', a: 'Thiamine. Glucose first can precipitate Wernicke encephalopathy.' },
      { q: 'Vitamin K deficiency — which clotting test is prolonged?', a: 'PT/INR, because Factor VII has the shortest half-life.' },
      { q: 'Name the three Ds of pellagra.', a: 'Dermatitis, diarrhoea, dementia — and death if untreated. Niacin (B3) deficiency.' },
      { q: 'Why does scurvy cause bleeding gums and poor healing?', a: 'Vitamin C is needed to hydroxylate proline and lysine in collagen; the collagen made without it is defective.' },
      { q: 'Which drug causes pyridoxine deficiency?', a: 'Isoniazid — which is why pyridoxine is co-prescribed.' },
    ],
    checks: ['Thiamine given before glucose in at-risk patients', 'Newborn vitamin K confirmed', 'B12 checked before folate replacement', 'Pyridoxine co-prescribed with isoniazid', 'Pregnancy status checked before vitamin A'],
  },

  {
    id: 'AS-BIOC-0001',
    type: 'mechanism',
    title: 'Glutathione, Oxidative Stress and Antioxidant Defence',
    short: 'Glutathione & oxidative stress',
    summary:
      'Glutathione is the cell\'s main internal antioxidant and its main detoxifier. Two ward-relevant consequences follow directly: why paracetamol overdose destroys the liver, and why certain drugs and foods trigger haemolysis in G6PD deficiency.',
    domains: ['biochemistry', 'toxicology', 'haematology'],
    intents: ['identify', 'revise'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['glutathione', 'gsh', 'oxidative stress', 'antioxidant', 'free radicals', 'reactive oxygen species'],
    terms: ['glutathione', 'gsh', 'gssg', 'oxidative stress', 'ros', 'antioxidant', 'g6pd', 'nadph', 'paracetamol', 'acetylcysteine', 'catalase', 'superoxide dismutase'],
    body: {
      what_glutathione_is:
        'A tripeptide — glutamate, cysteine, glycine — whose active part is the thiol (-SH) group on cysteine. Reduced form GSH is the working molecule; oxidised form GSSG is two GSH joined by a disulphide bond. The GSH:GSSG RATIO is the cell\'s redox thermostat.',
      what_it_does: [
        'ANTIOXIDANT — glutathione peroxidase uses GSH to convert hydrogen peroxide to water.',
        'REGENERATION — GSH recycles vitamins C and E back to their active forms, so the antioxidants act as a linked system rather than individually.',
        'DETOXIFICATION — glutathione S-transferase conjugates GSH to toxins and drug metabolites so they can be excreted.',
        'Maintains protein thiols and supports immune cell function.',
      ],
      recycling_and_why_nadph_matters:
        'Glutathione reductase converts GSSG back to GSH, and it needs NADPH to do it. NADPH comes from the PENTOSE PHOSPHATE PATHWAY, whose rate-limiting enzyme is G6PD. That single dependency chain explains G6PD deficiency entirely.',
      g6pd_deficiency: {
        mechanism: 'No G6PD → no NADPH → glutathione cannot be regenerated → the red cell has no defence against oxidative stress. Haemoglobin oxidises and precipitates as HEINZ BODIES; the spleen bites them out leaving BITE CELLS.',
        triggers: 'Infection (the commonest trigger overall), fava beans, primaquine and other antimalarials, sulphonamides, nitrofurantoin, dapsone, naphthalene mothballs.',
        pattern: 'Acute intravascular haemolysis a few days after exposure, with jaundice and dark urine. X-linked, so predominantly males.',
        the_testing_trap:
          'G6PD levels can be FALSELY NORMAL during an acute haemolytic episode, because the deficient old cells have already been destroyed and the surviving young reticulocytes have higher enzyme levels. Retest several weeks after recovery.',
      },
      paracetamol_and_glutathione: {
        mechanism:
          'Most paracetamol is conjugated harmlessly. A small fraction becomes NAPQI, a highly reactive metabolite, which GLUTATHIONE neutralises. In overdose the conjugation pathways saturate, NAPQI accumulates, glutathione is exhausted, and NAPQI binds hepatocyte proteins causing centrilobular necrosis.',
        why_acetylcysteine_works: 'It replenishes cysteine, the rate-limiting substrate for glutathione synthesis. It is not an antidote in the receptor-blocking sense — it refills the tank.',
        why_timing_matters: 'Acetylcysteine is most effective when given before glutathione is exhausted and NAPQI has bound. Delay costs liver. Follow the local nomogram and treatment protocol.',
        higher_risk: 'Chronic alcohol use, malnutrition, anorexia, and enzyme-inducing drugs — all reduce baseline glutathione or increase NAPQI production.',
      },
      the_enzymatic_antioxidants: {
        superoxide_dismutase: 'Converts superoxide to hydrogen peroxide.',
        catalase: 'Converts hydrogen peroxide to water and oxygen.',
        glutathione_peroxidase: 'Also converts hydrogen peroxide to water, using GSH. Requires SELENIUM as a cofactor — which is why selenium deficiency impairs antioxidant defence.',
      },
      the_honest_caveat:
        'Oxidative stress is genuinely implicated in ageing, atherosclerosis, neurodegeneration and cancer. That does NOT mean antioxidant supplements prevent those diseases — large trials have repeatedly failed to show benefit, and some (beta-carotene in smokers) showed HARM. The biochemistry is sound; the supplement inference is not.',
    },
    warnings: [
      'A normal G6PD level during acute haemolysis does not exclude deficiency. Retest after recovery.',
      'In paracetamol overdose, follow the local nomogram and start acetylcysteine within the protocol window. Do not wait for symptoms — the liver is silent until it is too late.',
      'Antioxidant supplements have not been shown to prevent disease, and beta-carotene increased lung cancer risk in smokers. Do not extrapolate from the biochemistry.',
    ],
    limitations: ['Research markers of oxidative stress are not routine clinical tests and should not be ordered as such.'],
    cards: [
      { q: 'What regenerates oxidised glutathione, and what does it need?', a: 'Glutathione reductase, using NADPH from the pentose phosphate pathway.' },
      { q: 'Explain G6PD deficiency in one chain.', a: 'No G6PD → no NADPH → glutathione cannot be regenerated → no defence against oxidative stress → haemolysis with Heinz bodies and bite cells.' },
      { q: 'Why does acetylcysteine work in paracetamol overdose?', a: 'It replenishes cysteine, the rate-limiting substrate for glutathione, which neutralises NAPQI.' },
      { q: 'Which trace element does glutathione peroxidase require?', a: 'Selenium.' },
      { q: 'Do antioxidant supplements prevent disease?', a: 'No. Trials have failed to show benefit, and beta-carotene increased lung cancer in smokers.' },
    ],
    checks: ['G6PD retested after recovery if suspected', 'Paracetamol level timed correctly against the nomogram', 'Acetylcysteine started within the protocol window', 'Trigger drugs reviewed in G6PD deficiency'],
  },

  {
    id: 'AS-VACC-0001',
    type: 'guideline',
    title: 'Vaccines — Types, the Cold Chain, and Who Must Not Receive a Live Vaccine',
    short: 'Vaccination',
    summary:
      'The single most important practical distinction is LIVE versus non-live, because live vaccines are contraindicated in pregnancy and significant immunosuppression. Everything else — schedule, route, storage — follows national programme.',
    domains: ['public_health', 'infectious_disease', 'paediatrics'],
    intents: ['identify', 'prescribe_reference'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['vaccination', 'immunisation', 'vaccine', 'immunization', 'cold chain', 'epi'],
    terms: ['vaccine', 'vaccination', 'immunisation', 'bcg', 'opv', 'measles', 'cold chain', 'live attenuated', 'inactivated', 'conjugate', 'yellow fever'],
    confirm_locally: true,
    body: {
      the_types: {
        live_attenuated: {
          what: 'A weakened organism that replicates but does not cause disease. Produces strong, long-lasting immunity, often from one or two doses.',
          examples: 'BCG, oral polio vaccine, measles, MMR, yellow fever, rotavirus, varicella, oral typhoid.',
          contraindications: 'PREGNANCY. Significant IMMUNOSUPPRESSION — high-dose steroids, chemotherapy, biologics, advanced HIV with low CD4, primary immunodeficiency.',
        },
        inactivated_killed: { what: 'Killed organism. Safe in immunosuppression, but needs multiple doses and boosters.', examples: 'Inactivated polio (IPV), hepatitis A, rabies, injectable influenza, whole-cell pertussis.' },
        subunit_and_toxoid: { what: 'Only a purified component, or an inactivated toxin.', examples: 'Hepatitis B, HPV, acellular pertussis, tetanus toxoid, diphtheria toxoid.' },
        conjugate: {
          what: 'A polysaccharide antigen chemically joined to a carrier protein.',
          why_it_matters: 'Plain polysaccharide antigens provoke a T-cell-INDEPENDENT response, which is weak in infants under two and produces no memory. Conjugating them to a protein converts it into a T-cell-DEPENDENT response, which works in infants and generates memory. This is why Hib and pneumococcal conjugate vaccines transformed child mortality.',
          examples: 'Hib, pneumococcal conjugate, meningococcal conjugate.',
        },
        mrna_and_viral_vector: { what: 'Deliver the genetic instructions for an antigen. Not live in the conventional sense.', examples: 'COVID-19 vaccines.' },
      },
      the_cold_chain: {
        why: 'Vaccines are biological products. Heat destroys potency in most; FREEZING destroys the adsorbed aluminium-adjuvanted vaccines. A vaccine that has broken its cold chain looks completely normal and is completely useless — the child is left unprotected while everyone believes they are protected.',
        practice: [
          'Most vaccines are stored at +2°C to +8°C.',
          'Do NOT freeze adjuvanted vaccines — hepatitis B, DPT, tetanus toxoid. Freezing is as damaging as heat and is more often missed.',
          'Monitor and RECORD temperature at least twice daily, and act on excursions.',
          'Use vaccine vial monitors where fitted — the indicator square darkens with cumulative heat exposure. Discard when it reaches the discard point.',
          'Rotate stock first-in first-out; check expiry.',
          'Store diluents with their vaccine and never freeze them; reconstitute only with the matched diluent.',
          'Discard reconstituted vaccine within the time the programme specifies — reconstituted measles and BCG have no preservative and support bacterial growth.',
        ],
      },
      routes: 'BCG is INTRADERMAL — the wrong depth means no protection and a poor scar. MMR, measles and yellow fever are subcutaneous. DPT, hepatitis B, Hib, pneumococcal and tetanus are intramuscular. Polio (OPV) and rotavirus are oral.',
      common_misconceptions_that_cause_missed_doses: [
        'Mild illness, low-grade fever, or a course of antibiotics is NOT a reason to defer vaccination.',
        'Malnutrition is NOT a contraindication — those children need protection most. (Live vaccines still need care in severe immunosuppression.)',
        'Breastfeeding is not a contraindication.',
        'A previous mild local reaction is not a contraindication.',
        'A genuine contraindication is anaphylaxis to a previous dose or a vaccine component, and live vaccines in pregnancy or significant immunosuppression.',
      ],
      anaphylaxis_readiness: 'Adrenaline must be immediately available wherever vaccines are given, with staff trained to use it and an observation period per protocol.',
    },
    warnings: [
      'Live vaccines are contraindicated in pregnancy and in significant immunosuppression.',
      'Freezing destroys adjuvanted vaccines such as hepatitis B, DPT and tetanus toxoid. A frozen vaccine looks normal and does not work.',
      'Reconstituted measles and BCG contain no preservative. Discard within the time the programme specifies.',
      'Adrenaline must be immediately available at every vaccination session.',
      'Schedules differ by country and are revised. Always follow the current NATIONAL immunisation schedule, not a remembered one.',
    ],
    limitations: [
      'This entry does not reproduce a national schedule. Schedules change and vary by country — use the current national programme document.',
    ],
    cards: [
      { q: 'Which vaccine types are contraindicated in pregnancy?', a: 'Live attenuated — BCG, MMR, measles, yellow fever, oral polio, varicella, rotavirus.' },
      { q: 'Why are conjugate vaccines used in infants?', a: 'Plain polysaccharides give a weak T-cell-independent response under age two. Conjugation to protein makes it T-cell dependent, producing a strong response and memory.' },
      { q: 'What does freezing do to a hepatitis B or DPT vaccine?', a: 'Destroys it. Adjuvanted vaccines must never be frozen — and the damage is invisible.' },
      { q: 'Which route is BCG given by?', a: 'Intradermal. Wrong depth means no protection.' },
      { q: 'Is mild illness a reason to defer vaccination?', a: 'No. Nor is malnutrition, breastfeeding, or antibiotic use. Missed opportunities are a major cause of under-immunisation.' },
    ],
    checks: ['Live vaccine contraindications screened (pregnancy, immunosuppression)', 'Cold chain temperature recorded', 'Vaccine vial monitor checked', 'Correct route and site used', 'Adrenaline available', 'Dose recorded on the card and register'],
  },
];
