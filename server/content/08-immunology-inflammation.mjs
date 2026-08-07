/** Inflammation, cell death, and the immune vocabulary. */

export default [
  {
    id: 'AS-GPTH-0001',
    type: 'mechanism',
    title: 'Acute and Chronic Inflammation — And the Mediators Behind Each Sign',
    short: 'Inflammation',
    summary:
      'The five cardinal signs are not a list to memorise — each one is the visible result of a specific mediator doing a specific thing. Knowing which mediator produces which sign explains why every anti-inflammatory drug works where it does.',
    domains: ['pathology', 'immunology'],
    intents: ['identify', 'revise'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['inflammation', 'acute inflammation', 'chronic inflammation', 'granuloma', 'inflammatory mediators'],
    terms: ['inflammation', 'histamine', 'prostaglandin', 'bradykinin', 'cytokine', 'granuloma', 'macrophage', 'neutrophil', 'nsaid', 'cox'],
    body: {
      the_five_signs_and_their_mediators: {
        rubor_redness: 'Vasodilation — histamine, prostaglandins, nitric oxide.',
        calor_heat: 'Increased blood flow, same mediators.',
        tumor_swelling: 'Increased vascular permeability letting protein-rich fluid into tissue — histamine, bradykinin, leukotrienes C4/D4/E4.',
        dolor_pain: 'BRADYKININ and PROSTAGLANDIN E2. Prostaglandins sensitise nerve endings rather than firing them directly, which is why NSAIDs reduce pain without being analgesics in the opioid sense.',
        functio_laesa: 'Loss of function — the combined result.',
      },
      why_nsaids_do_what_they_do:
        'Cyclo-oxygenase converts arachidonic acid into prostaglandins. NSAIDs block COX, so they reduce pain, swelling and FEVER (prostaglandin E2 acts on the hypothalamic set point). COX-1 also maintains gastric mucus and renal blood flow — which is exactly why non-selective NSAIDs cause ulcers and acute kidney injury. Blocking COX pushes arachidonic acid down the lipoxygenase pathway to leukotrienes, which is one reason NSAIDs can precipitate asthma.',
      acute_versus_chronic: {
        acute: 'Minutes to days. NEUTROPHIL dominated. Outcomes: complete resolution, abscess, healing by fibrosis, or progression to chronic.',
        chronic: 'Weeks to years. MACROPHAGE, LYMPHOCYTE and PLASMA CELL dominated, with simultaneous tissue destruction, attempted healing and fibrosis. Occurs when the stimulus persists, in autoimmunity, or after unresolved acute inflammation.',
      },
      granuloma: {
        what: 'A focal collection of activated macrophages (epithelioid cells), often with multinucleate giant cells, walling off something the body cannot destroy or digest.',
        caseating: 'With central necrosis. TUBERCULOSIS is the classic; also some fungal infections.',
        non_caseating: 'Sarcoidosis, Crohn disease, foreign body reaction, leprosy (tuberculoid), berylliosis.',
        driven_by: 'IFN-gamma from Th1 cells, and TNF-alpha to maintain the structure. This is exactly why anti-TNF biologics REACTIVATE latent tuberculosis — the granuloma falls apart. Screen for TB before starting them.',
      },
      key_cytokines: {
        il_1_and_tnf_alpha: 'Fever, acute phase response, endothelial activation. TNF-alpha also drives cachexia.',
        il_6: 'The main driver of hepatic acute phase protein synthesis, including CRP. This is why anti-IL-6 therapy suppresses CRP and it can no longer be used to monitor infection in those patients.',
        il_8: 'Neutrophil chemotaxis.',
        il_10_and_tgf_beta: 'Anti-inflammatory; TGF-beta also drives FIBROSIS.',
        il_17: 'Neutrophil recruitment; central in psoriasis and several autoimmune diseases.',
        interferons: 'Alpha and beta are antiviral (type I). GAMMA is different — it activates macrophages and is the key granuloma cytokine.',
      },
      esr_versus_crp: {
        crp: 'Made by the liver under IL-6 drive. Rises within 6–12 hours, peaks around 48 hours, and falls FAST once the stimulus goes. Good for tracking response to treatment day by day.',
        esr: 'Indirect — it measures how fast red cells settle, which depends on fibrinogen and immunoglobulins. Rises over 24–48 hours and falls SLOWLY over weeks. Also raised by anaemia, pregnancy, older age, and paraproteins independent of inflammation.',
        how_to_use_them: 'CRP for acute change. ESR for chronic or smouldering disease. A very high ESR with a normal CRP should raise the question of a paraprotein — think myeloma.',
        both_are_non_specific: 'Neither diagnoses anything. They quantify that something inflammatory is happening.',
      },
    },
    warnings: [
      'Screen for latent tuberculosis before starting anti-TNF therapy. Blocking TNF-alpha breaks down granulomas and reactivates TB.',
      'CRP is unreliable in patients on IL-6 inhibitors such as tocilizumab — it is suppressed regardless of infection.',
      'A normal CRP does not exclude serious infection, particularly very early, in the immunosuppressed, or in liver failure where synthesis is impaired.',
    ],
    limitations: ['Inflammatory markers are non-specific and must be read with the clinical picture.'],
    cards: [
      { q: 'Which two mediators cause the pain of inflammation?', a: 'Bradykinin and prostaglandin E2. Prostaglandins sensitise nerve endings rather than firing them.' },
      { q: 'Why do NSAIDs cause ulcers and kidney injury?', a: 'COX-1 maintains gastric mucus and renal blood flow. Blocking it removes both.' },
      { q: 'Which cytokine maintains granulomas, and what is the clinical consequence?', a: 'TNF-alpha. Anti-TNF biologics reactivate latent tuberculosis — screen first.' },
      { q: 'CRP versus ESR — which for acute change?', a: 'CRP. It rises within 6–12 hours and falls fast. ESR is slow in both directions.' },
      { q: 'Very high ESR with a normal CRP — think what?', a: 'A paraprotein. Consider myeloma.' },
      { q: 'Caseating versus non-caseating granuloma?', a: 'Caseating: tuberculosis. Non-caseating: sarcoidosis, Crohn disease, foreign body.' },
    ],
    checks: ['CRP and ESR interpreted against the time course', 'TB screening before anti-TNF therapy', 'NSAID risks reviewed (gastric, renal, asthma)'],
  },

  {
    id: 'AS-GPTH-0002',
    type: 'mechanism',
    title: 'Apoptosis and the Six Types of Necrosis',
    short: 'Cell death',
    summary:
      'Apoptosis is tidy, energy-requiring and provokes no inflammation. Necrosis is messy, unregulated and always inflames. The pattern of necrosis names the organ and often the cause.',
    domains: ['pathology'],
    intents: ['classify', 'identify'],
    hazard: 'low',
    urgency: 'routine',
    aka: ['apoptosis', 'necrosis', 'cell death', 'caseous necrosis', 'coagulative necrosis', 'liquefactive necrosis'],
    terms: ['apoptosis', 'necrosis', 'caspase', 'coagulative', 'liquefactive', 'caseous', 'fat necrosis', 'fibrinoid', 'gangrene', 'bcl-2'],
    body: {
      apoptosis_versus_necrosis: {
        apoptosis: 'Programmed, ENERGY-DEPENDENT, single cells, cell SHRINKS, membrane stays intact, contents are packaged into apoptotic bodies and eaten. NO INFLAMMATION.',
        necrosis: 'Unregulated, energy failure, groups of cells, cell SWELLS and bursts, contents spill out. ALWAYS INFLAMMATORY.',
        the_one_line: 'Apoptosis is a controlled demolition. Necrosis is a building collapsing.',
      },
      apoptosis_pathways: {
        intrinsic_mitochondrial:
          'Triggered by DNA damage, growth factor withdrawal, hypoxia. Controlled by the Bcl-2 family — BAX and BAK push toward death, BCL-2 and BCL-xL hold it back. Mitochondria release cytochrome c, forming the apoptosome, which activates caspase-9 then caspase-3.',
        extrinsic_death_receptor: 'FasL or TNF binds Fas/TNFR, recruits FADD, activates caspase-8 then caspase-3.',
        cytotoxic: 'Cytotoxic T cells and NK cells punch holes with perforin and inject granzyme B, activating caspase-3 directly.',
        clinical_meaning: [
          'TOO MUCH apoptosis: neurodegeneration, ischaemic injury, CD4 loss in HIV.',
          'TOO LITTLE apoptosis: CANCER. Follicular lymphoma over-expresses BCL-2 through the t(14;18) translocation, so cells that should die do not.',
        ],
      },
      the_six_necroses: {
        coagulative:
          'ISCHAEMIA in any solid organ except brain. Protein denaturation preserves the cell outline for days — the tissue looks like cooked egg white, ghostly cells with no nuclei. Myocardial infarct, renal infarct, splenic infarct.',
        liquefactive:
          'The BRAIN (which has little structural protein and much lipid) and any PYOGENIC infection. Enzymes digest the tissue to liquid. Cerebral infarct, abscess.',
        caseous:
          'Cheese-like, crumbly, structureless. TUBERCULOSIS above all, also histoplasmosis and other granulomatous infection. A combination of coagulative and liquefactive within a granuloma.',
        fat: 'PANCREATITIS (released lipase digests peri-pancreatic fat) and breast trauma. Fatty acids bind calcium, forming chalky white saponification — which is one reason calcium falls in acute pancreatitis.',
        fibrinoid:
          'Immune complexes deposit in vessel walls with fibrin, giving a bright pink smudgy appearance. Vasculitis, malignant hypertension, rheumatic fever.',
        gangrenous:
          'Not a distinct mechanism but a clinical term. DRY gangrene is coagulative necrosis from ischaemia. WET gangrene is that plus bacterial infection, so it becomes liquefactive. GAS gangrene is Clostridium perfringens, and it is a surgical emergency.',
      },
      the_memory_hook:
        'Brain liquefies. Everything else coagulates. TB is cheesy. Pancreas is fatty. Vessels go fibrinoid. Limbs go gangrenous.',
    },
    warnings: ['Gas gangrene is a time-critical surgical emergency requiring urgent debridement and antibiotics. Crepitus in an ischaemic limb is an immediate surgical call.'],
    limitations: ['Categories overlap; mixed patterns are common.'],
    cards: [
      { q: 'Why does apoptosis not cause inflammation?', a: 'The membrane stays intact and contents are packaged into apoptotic bodies and phagocytosed.' },
      { q: 'Which organ shows liquefactive necrosis after infarction?', a: 'The brain. Everything else shows coagulative.' },
      { q: 'Which necrosis is characteristic of tuberculosis?', a: 'Caseous.' },
      { q: 'Why does calcium fall in acute pancreatitis?', a: 'Fat necrosis — released fatty acids bind calcium as saponification.' },
      { q: 'Which apoptosis protein is over-expressed in follicular lymphoma?', a: 'BCL-2, via t(14;18) — cells that should die do not.' },
    ],
    checks: ['Pattern of necrosis identified', 'Cause inferred from pattern', 'Surgical review if gangrene suspected'],
  },

  {
    id: 'AS-IMMU-0001',
    type: 'named_knowledge',
    title: 'Antigens, Antibodies and Antigen Presentation',
    short: 'Antigens & antibodies',
    summary:
      'An antigen is anything an antibody or T cell receptor binds. An antibody is a Y-shaped protein whose two arms decide WHAT it binds and whose stem decides WHAT HAPPENS NEXT. The five classes differ almost entirely in that stem.',
    domains: ['immunology'],
    intents: ['identify', 'revise'],
    hazard: 'low',
    urgency: 'routine',
    aka: ['antigen', 'antibody', 'immunoglobulin', 'antigen presentation', 'mhc', 'hla', 'apc'],
    terms: ['antigen', 'antibody', 'immunoglobulin', 'igg', 'igm', 'iga', 'ige', 'igd', 'epitope', 'hapten', 'mhc', 'hla', 'apc', 'complement'],
    body: {
      the_vocabulary: {
        antigen: 'Anything an antibody or T cell receptor can BIND.',
        immunogen: 'An antigen that also PROVOKES a response. All immunogens are antigens; not all antigens are immunogens.',
        epitope: 'The specific small part of the antigen actually bound. One antigen carries many epitopes.',
        hapten:
          'A molecule too small to provoke a response alone, which becomes immunogenic once bound to a carrier protein. This is the mechanism of PENICILLIN ALLERGY — penicillin binds a serum protein and the complex becomes a target.',
      },
      antibody_structure:
        'Two heavy chains and two light chains in a Y. The two Fab arms carry the VARIABLE regions and determine specificity. The Fc stem is the CONSTANT region and determines the effector function — which complement it fixes, which cells it binds, whether it crosses the placenta.',
      the_five_classes: {
        igg: 'Most abundant. The SECONDARY response antibody. The only one that crosses the PLACENTA, giving passive newborn immunity. Opsonises, fixes complement, mediates ADCC. Most autoantibodies are IgG.',
        igm: 'PENTAMER — ten binding sites. The FIRST antibody made in a primary response, so IgM positivity indicates RECENT or acute infection. Its size makes it the most efficient COMPLEMENT activator. It cannot cross the placenta, which is why IgM in a neonate means the baby made it — a congenital infection.',
        iga: 'The MUCOSAL antibody. Dimeric in secretions with a secretory component protecting it from digestion. Found in breast milk, saliva, tears, gut and respiratory secretions. Selective IgA deficiency is the commonest primary immunodeficiency and matters because those patients can react to IgA in blood products.',
        igd: 'Mainly a B cell surface receptor. Little known circulating function.',
        ige: 'Binds mast cells and basophils. Mediates TYPE I hypersensitivity — allergy, asthma, anaphylaxis — and defends against parasitic worms. Present in tiny amounts in serum.',
      },
      antigen_presentation: {
        mhc_class_i:
          'On ALL nucleated cells. Presents ENDOGENOUS antigen — protein made inside the cell, including viral protein and tumour protein — to CD8 cytotoxic T cells. The message is "look what I am making inside".',
        mhc_class_ii:
          'On professional antigen-presenting cells only — dendritic cells, macrophages and B cells. Presents EXOGENOUS antigen taken up from outside to CD4 helper T cells. The message is "look what I found out there".',
        the_rule: 'MHC I to CD8 (1×8 = 8). MHC II to CD4 (2×4 = 8). The rule of eight.',
        the_apcs: 'DENDRITIC CELLS are the most potent and the only ones that can activate a naive T cell. Macrophages and B cells present to already-primed T cells.',
      },
      complement_in_one_paragraph:
        'Three pathways converge on C3. CLASSICAL is triggered by antigen-antibody complexes (IgM best, then IgG). LECTIN is triggered by mannose on microbial surfaces. ALTERNATIVE ticks over spontaneously on any surface lacking inhibitors. All produce C3b for OPSONISATION, C3a and C5a as ANAPHYLATOXINS and chemoattractants, and C5–C9 forming the MEMBRANE ATTACK COMPLEX. Terminal complement (C5–C9) deficiency causes recurrent NEISSERIA infection specifically — a patient with recurrent meningococcal disease needs complement testing.',
      hypersensitivity_in_one_line: {
        type_1: 'IgE, mast cells, immediate — anaphylaxis, asthma, hay fever.',
        type_2: 'Antibody against a fixed tissue antigen — autoimmune haemolytic anaemia, Goodpasture, myasthenia gravis, rheumatic fever.',
        type_3: 'Immune COMPLEX deposition — serum sickness, lupus nephritis, post-streptococcal glomerulonephritis.',
        type_4: 'DELAYED, T-cell mediated, no antibody — tuberculin test, contact dermatitis, graft rejection, and the delayed drug rashes.',
        the_mnemonic: 'ACID — Anaphylactic, Cytotoxic, Immune complex, Delayed.',
      },
    },
    warnings: [
      'IgM in a neonate indicates congenital infection, because maternal IgM cannot cross the placenta.',
      'Recurrent Neisseria infection suggests terminal complement deficiency. Test for it and vaccinate.',
      'Patients with selective IgA deficiency can have severe reactions to blood products containing IgA.',
    ],
    limitations: ['The hypersensitivity classification is a simplification; many diseases involve more than one mechanism.'],
    cards: [
      { q: 'Which antibody crosses the placenta?', a: 'IgG only.' },
      { q: 'Which is the best complement activator and why?', a: 'IgM — it is a pentamer, so it readily provides the two adjacent Fc regions C1q needs.' },
      { q: 'MHC class I presents to which T cell?', a: 'CD8 cytotoxic. MHC II presents to CD4. Rule of eight.' },
      { q: 'What is a hapten, and give a clinical example?', a: 'A small molecule that becomes immunogenic only when bound to a carrier protein. Penicillin allergy.' },
      { q: 'Recurrent Neisseria infections suggest what deficiency?', a: 'Terminal complement, C5 to C9.' },
      { q: 'Give the four hypersensitivity types.', a: 'ACID — Anaphylactic (IgE), Cytotoxic (antibody to tissue), Immune complex, Delayed (T cell).' },
    ],
    checks: ['Hypersensitivity type identified where relevant', 'Complement screen considered in recurrent Neisseria', 'IgA status considered before blood products in known deficiency'],
  },

  {
    id: 'AS-IMMU-0002',
    type: 'test',
    title: 'Autoantibodies — Which Test, Which Disease, and What a Positive Actually Means',
    short: 'Autoantibodies',
    summary:
      'Autoantibody tests are screening tools, not diagnoses. A positive ANA is common in healthy people; a positive anti-dsDNA is not. Knowing which are sensitive (good for ruling out) and which are specific (good for ruling in) prevents most misuse.',
    domains: ['immunology', 'laboratory_medicine'],
    intents: ['interpret', 'investigate'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['autoantibody', 'ana', 'anti-dsdna', 'rheumatoid factor', 'anti-ccp', 'anca', 'autoantibodies'],
    terms: ['autoantibody', 'ana', 'dsdna', 'anti-ccp', 'rheumatoid factor', 'anca', 'anti-gbm', 'anti-tpo', 'ttg', 'scl-70', 'centromere'],
    confirm_locally: true,
    body: {
      the_governing_principle:
        'SENSITIVE tests are for ruling OUT. SPECIFIC tests are for ruling IN. ANA is sensitive and non-specific; anti-dsDNA and anti-Sm are specific and less sensitive. Order the sensitive test first and the specific test to confirm.',
      connective_tissue: {
        ana: 'Screening test for connective tissue disease. Sensitive for lupus (near 95%) but positive in perhaps 5–15% of healthy people, more with age, and in many other conditions. A positive ANA alone diagnoses nothing.',
        anti_dsdna: 'Highly SPECIFIC for lupus, and the titre tracks disease activity, particularly lupus NEPHRITIS.',
        anti_sm: 'The most specific antibody for lupus, but present in only a minority.',
        anti_ro_ssa_and_la_ssb: 'Sjögren syndrome and lupus. Anti-Ro crosses the placenta and causes CONGENITAL HEART BLOCK and neonatal lupus — a pregnant woman with anti-Ro needs fetal cardiac monitoring.',
        anti_scl_70: 'DIFFUSE systemic sclerosis. Associated with interstitial lung disease and scleroderma renal crisis.',
        anti_centromere: 'LIMITED systemic sclerosis (the CREST pattern). Associated with pulmonary hypertension rather than lung fibrosis.',
        anti_jo_1: 'Anti-synthetase syndrome — myositis with interstitial lung disease, mechanic\'s hands and Raynaud phenomenon.',
      },
      joints: {
        rheumatoid_factor: 'An antibody against the Fc of IgG. Positive in about 70% of rheumatoid arthritis, but ALSO in Sjögren, lupus, hepatitis C, endocarditis, tuberculosis and in healthy elderly people. Poor specificity.',
        anti_ccp: 'Far more SPECIFIC for rheumatoid arthritis, can be positive years before symptoms, and predicts erosive disease. This is the better test.',
      },
      vasculitis_and_kidney: {
        c_anca_pr3: 'Granulomatosis with polyangiitis — upper airway, lung and kidney.',
        p_anca_mpo: 'Microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis.',
        anti_gbm: 'Goodpasture disease — pulmonary haemorrhage with rapidly progressive glomerulonephritis. A time-critical diagnosis; treatment is plasma exchange plus immunosuppression, and delay costs kidneys.',
      },
      organ_specific: {
        anti_tpo_and_anti_tg: 'Hashimoto thyroiditis, and also present in Graves disease.',
        trab: 'TSH receptor antibody — diagnostic of GRAVES disease and useful in pregnancy, since it crosses the placenta and can cause neonatal thyrotoxicosis.',
        anti_ttg_iga: 'Coeliac disease — the first-line test. CRITICALLY, it must be sent with a TOTAL IgA level, because selective IgA deficiency is common in coeliac disease and gives a false negative. The patient must also still be EATING GLUTEN.',
        anti_gad_and_ia2: 'Type 1 diabetes.',
        anti_acetylcholine_receptor: 'Myasthenia gravis.',
        anti_mitochondrial: 'Primary biliary cholangitis.',
        anti_smooth_muscle: 'Autoimmune hepatitis.',
      },
      how_to_avoid_misusing_them: [
        'Do not order an autoantibody screen for non-specific tiredness or aches. The pre-test probability is low and a false positive causes years of anxiety and unnecessary tests.',
        'Interpret every result against the clinical picture and the titre, not just positive or negative.',
        'A negative test does not exclude disease; seronegative rheumatoid arthritis and ANA-negative lupus both exist.',
      ],
    },
    warnings: [
      'Send TOTAL IgA with anti-tTG. IgA deficiency is over-represented in coeliac disease and produces a false negative.',
      'The patient must be eating gluten for coeliac serology to be valid. Testing after a gluten-free trial gives a false negative.',
      'Anti-Ro in pregnancy risks fetal congenital heart block. Arrange fetal cardiac surveillance.',
      'Anti-GBM disease is a nephrological emergency. Suspected pulmonary-renal syndrome needs same-day specialist referral.',
      'Do not screen with autoantibodies in the absence of clinical features. False positives are common and harmful.',
    ],
    limitations: ['Assay methods and cut-offs differ between laboratories. Titres are not comparable across platforms.'],
    cards: [
      { q: 'Which lupus antibody tracks disease activity and nephritis?', a: 'Anti-dsDNA.' },
      { q: 'Rheumatoid factor versus anti-CCP?', a: 'Anti-CCP is far more specific, can precede symptoms, and predicts erosive disease.' },
      { q: 'What must always accompany an anti-tTG request?', a: 'Total IgA — IgA deficiency causes a false negative. And the patient must still be eating gluten.' },
      { q: 'Anti-Ro in pregnancy — what is the risk?', a: 'Congenital heart block and neonatal lupus. Arrange fetal cardiac monitoring.' },
      { q: 'Anti-Scl-70 versus anti-centromere?', a: 'Scl-70: diffuse sclerosis with lung fibrosis. Centromere: limited/CREST with pulmonary hypertension.' },
    ],
    checks: ['Clinical indication documented before ordering', 'Total IgA sent with anti-tTG', 'Gluten intake confirmed before coeliac serology', 'Titre and pattern reviewed, not just positive/negative', 'Urgent referral if pulmonary-renal syndrome'],
  },
];
