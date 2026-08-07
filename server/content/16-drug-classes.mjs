/**
 * Drug classes — mechanism, what they are used for, and what they do to people.
 *
 * Source review note: the supplied document lists specific doses throughout.
 * Doses are deliberately NOT reproduced. They vary by formulation, indication,
 * renal and hepatic function, age and national formulary, and an unreviewed
 * dose in a reference tool is a patient-safety hazard. These entries name the
 * drug and the decision; the number comes from your formulary.
 */

export default [
  {
    id: 'AS-DRGC-0001',
    type: 'drug',
    title: 'NSAIDs — One Mechanism, Four Predictable Harms',
    short: 'NSAIDs',
    summary:
      'Every NSAID adverse effect follows from one action: blocking cyclo-oxygenase. Knowing that, you can predict the gastric, renal, cardiovascular and respiratory harms without memorising them, and identify who must not have them.',
    domains: ['pharmacology', 'renal', 'cardiovascular'],
    intents: ['prescribe_reference', 'identify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['nsaid', 'nsaids', 'ibuprofen', 'diclofenac', 'naproxen', 'aspirin', 'cox inhibitor', 'anti-inflammatory'],
    terms: ['nsaid', 'cox', 'prostaglandin', 'ibuprofen', 'diclofenac', 'naproxen', 'celecoxib', 'aspirin', 'reye', 'triple whammy', 'ppi'],
    confirm_locally: true,
    body: {
      the_single_mechanism: 'NSAIDs inhibit cyclo-oxygenase, which converts arachidonic acid to prostaglandins. COX-2 is induced at sites of inflammation and produces the prostaglandins responsible for pain, swelling and fever. COX-1 is constitutive and produces prostaglandins that maintain gastric mucus and bicarbonate, renal perfusion, and platelet thromboxane.',
      the_four_harms_all_follow: {
        gastrointestinal:
          'Loss of COX-1-derived gastric prostaglandins removes mucus and bicarbonate protection → erosions, ulcers, bleeding and perforation. It is NOT purely a local effect, so parenteral and rectal routes do not avoid it. Risk rises with age, past ulcer, Helicobacter pylori, and co-prescription of steroids, anticoagulants or SSRIs. Gastroprotection with a proton pump inhibitor is indicated in at-risk patients per local guidance.',
        renal:
          'Prostaglandins dilate the afferent arteriole and maintain glomerular filtration when perfusion is threatened. Block them in a patient who is dry, septic, in heart failure or cirrhotic, and filtration falls — acute kidney injury. They also cause sodium and water retention, worsening hypertension and heart failure, and hyperkalaemia.',
        the_triple_whammy:
          'ACE inhibitor or ARB + DIURETIC + NSAID together. The ACE inhibitor dilates the efferent arteriole, the NSAID constricts the afferent, and the diuretic removes volume. Glomerular perfusion collapses. This combination is one of the commonest identifiable causes of avoidable acute kidney injury on any ward — look for it on every drug chart.',
        cardiovascular:
          'Shifting the balance between thromboxane and prostacyclin increases thrombotic risk. Most NSAIDs raise the risk of myocardial infarction and stroke, and all raise blood pressure and cause fluid retention. Avoid in established cardiovascular disease and in heart failure.',
        respiratory_and_allergic:
          'Blocking COX pushes arachidonic acid down the lipoxygenase pathway to leukotrienes, which are bronchoconstrictors. A minority of asthmatics have NSAID-exacerbated respiratory disease — classically with nasal polyps and asthma. Always ask an asthmatic whether NSAIDs have ever affected their breathing.',
      },
      aspirin_is_different: {
        why: 'Aspirin inhibits COX IRREVERSIBLY. A platelet has no nucleus and cannot make new enzyme, so a single dose disables that platelet for its remaining lifespan — about 7–10 days. That is what makes low-dose aspirin an antiplatelet drug rather than an analgesic.',
        reye_syndrome:
          'Aspirin must be AVOIDED IN CHILDREN (conventionally under 16) because of the association with Reye syndrome — acute encephalopathy with fatty liver. The exception is specific indications such as Kawasaki disease, under specialist direction.',
      },
      cox_2_selective_agents:
        'Designed to spare COX-1 and therefore the stomach. They do reduce gastrointestinal risk, but the cardiovascular risk remains and for some agents is higher. They are not a free pass — the renal risk is unchanged, because renal prostaglandins are produced by both isoforms.',
      who_should_not_have_an_nsaid: [
        'Active or previous peptic ulceration or gastrointestinal bleeding',
        'Significant renal impairment, or any patient at risk of it — dehydration, sepsis, heart failure, cirrhosis',
        'Heart failure, and established ischaemic or cerebrovascular disease',
        'THIRD-TRIMESTER PREGNANCY — premature closure of the ductus arteriosus, oligohydramnios and impaired fetal renal function. Avoid in later pregnancy entirely.',
        'Known NSAID-exacerbated respiratory disease',
        'On an anticoagulant, or on an ACE inhibitor plus diuretic',
      ],
      practical_prescribing: 'Lowest effective dose, shortest duration, with gastroprotection where indicated, with renal function checked in anyone at risk, and with a clear stop date. NSAIDs are analgesics, not maintenance therapy.',
    },
    warnings: [
      'The "triple whammy" — ACE inhibitor/ARB + diuretic + NSAID — is a leading avoidable cause of acute kidney injury. Check every drug chart for it.',
      'Avoid NSAIDs in the third trimester of pregnancy: premature ductal closure, oligohydramnios and fetal renal impairment.',
      'Do not give aspirin to children under 16 except for specific specialist indications, because of Reye syndrome.',
      'Ask every asthmatic whether NSAIDs have ever affected their breathing before prescribing.',
      'Parenteral and rectal NSAIDs still cause ulcers — the gastric effect is systemic, not local.',
    ],
    limitations: ['Doses, formulary choice and gastroprotection thresholds are set locally.'],
    cards: [
      { q: 'Why do NSAIDs cause acute kidney injury?', a: 'Prostaglandins dilate the afferent arteriole to preserve filtration when perfusion is low. Blocking them removes that compensation.' },
      { q: 'What is the triple whammy?', a: 'ACE inhibitor or ARB + diuretic + NSAID. A leading avoidable cause of AKI.' },
      { q: 'Why is aspirin an antiplatelet rather than an analgesic at low dose?', a: 'It inhibits COX irreversibly, and platelets have no nucleus to make new enzyme — the effect lasts the platelet lifespan.' },
      { q: 'Why avoid NSAIDs in the third trimester?', a: 'Premature closure of the ductus arteriosus, oligohydramnios and impaired fetal renal function.' },
      { q: 'Do COX-2 selective agents avoid renal risk?', a: 'No. Renal prostaglandins come from both isoforms. They reduce gastric risk only.' },
    ],
    checks: ['Renal function and hydration assessed', 'Drug chart checked for ACEi/ARB + diuretic', 'Ulcer and bleeding history taken', 'Asthma history asked', 'Pregnancy status checked', 'Gastroprotection considered', 'Stop date documented'],
  },

  {
    id: 'AS-DRGC-0002',
    type: 'regimen',
    title: 'Anti-Tuberculosis Drugs — RIPE, Their Toxicities and Why Directly Observed Therapy Exists',
    short: 'Anti-TB drugs',
    summary:
      'Four drugs, one mnemonic, and a specific organ toxicity for each that determines what you monitor. TB is treated with combinations for months because monotherapy reliably breeds resistance.',
    domains: ['infectious_disease', 'respiratory', 'pharmacology'],
    intents: ['prescribe_reference', 'monitor'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['anti-tb', 'ripe', 'tb treatment', 'rifampicin', 'isoniazid', 'pyrazinamide', 'ethambutol', 'antituberculous'],
    terms: ['tuberculosis', 'ripe', 'rifampicin', 'isoniazid', 'pyrazinamide', 'ethambutol', 'streptomycin', 'dot', 'mdr-tb', 'pyridoxine', 'hepatotoxicity', 'optic neuritis'],
    confirm_locally: true,
    body: {
      why_combination_therapy:
        'A tuberculous cavity contains an enormous bacterial population, within which spontaneous resistant mutants to any single drug already exist. Give one drug and you select them out within weeks. Combination therapy means an organism would need simultaneous mutations to several drugs, which is vanishingly unlikely. This is why single-drug treatment, or a patient taking only part of the regimen, actively CREATES multi-drug-resistant TB.',
      the_first_line_four: {
        R_rifampicin: {
          key_toxicity: 'HEPATOTOXICITY.',
          the_unmistakable_effect: 'ORANGE-RED discolouration of urine, tears, sweat and saliva. Harmless — but patients must be warned or they stop the drug in alarm. It permanently stains soft contact lenses.',
          the_interaction_that_matters:
            'Rifampicin is a POTENT CYTOCHROME P450 INDUCER. It accelerates the metabolism of many drugs — hormonal CONTRACEPTIVES (a major and frequently missed failure: additional or alternative contraception is essential), warfarin, corticosteroids, antiretrovirals, some anticonvulsants, and many others. Check every co-prescription against the formulary.',
        },
        I_isoniazid: {
          key_toxicity: 'HEPATOTOXICITY and PERIPHERAL NEUROPATHY.',
          the_neuropathy: 'Isoniazid depletes pyridoxine (vitamin B6). PYRIDOXINE IS CO-PRESCRIBED to prevent it — routinely in many programmes, and always in those at higher risk: malnutrition, diabetes, HIV, alcohol dependence, chronic kidney disease, and pregnancy.',
          other: 'Can cause a drug-induced lupus-like syndrome and, in overdose, seizures that respond to pyridoxine.',
        },
        P_pyrazinamide: {
          key_toxicity: 'HEPATOTOXICITY — the most hepatotoxic of the four.',
          other: 'Raises URIC ACID, causing arthralgia and occasionally precipitating gout.',
        },
        E_ethambutol: {
          key_toxicity: 'OPTIC NEURITIS — dose-related, and it is the one toxicity that is not hepatic.',
          what_to_do:
            'Check VISUAL ACUITY and RED-GREEN COLOUR VISION at baseline and monitor during treatment. Warn the patient explicitly to report any change in vision or colour perception IMMEDIATELY and stop the drug. Detected early it is reversible; ignored it is not. It is used with particular caution in young children who cannot report visual change reliably.',
        },
      },
      the_shared_problem_hepatotoxicity: {
        why_it_dominates_monitoring: 'Three of the four first-line drugs are hepatotoxic, so drug-induced liver injury is the commonest reason therapy is interrupted.',
        practice: 'Baseline liver function before starting, and monitoring during treatment per protocol — more intensively in those with pre-existing liver disease, alcohol dependence, hepatitis B or C, HIV, pregnancy or older age.',
        counselling: 'Tell every patient to stop and seek review if they develop nausea and vomiting, abdominal pain, jaundice or dark urine. Patients who are not told simply continue.',
      },
      the_phases: 'Treatment runs in an INTENSIVE phase with more drugs, followed by a longer CONTINUATION phase with fewer. Regimens, drug numbers and durations differ for pulmonary versus extrapulmonary disease, for CNS and bone disease, in HIV co-infection, in children and in pregnancy. Use the current NATIONAL TB programme guideline.',
      directly_observed_therapy: {
        what: 'A trained observer watches each dose being swallowed.',
        why: 'Treatment lasts months, and patients feel better within weeks. Partial adherence is the single largest driver of drug resistance, relapse and continued transmission. DOT exists because the consequence of non-adherence is not just an individual relapse but a resistant organism entering the community.',
      },
      drug_resistant_tb: {
        definitions: 'MDR-TB is resistance to at least isoniazid and rifampicin. Further resistance patterns define pre-XDR and XDR-TB.',
        the_action: 'A GeneXpert result showing RIFAMPICIN RESISTANCE must trigger the drug-resistant pathway IMMEDIATELY — not standard first-line therapy. Regimens are longer, more toxic and specialist-directed.',
      },
      alongside_treatment: [
        'Test for HIV in every TB patient — co-infection changes the regimen, the timing of antiretroviral therapy and the risk of immune reconstitution inflammatory syndrome.',
        'Notify the case. TB is notifiable and contact tracing is part of treatment.',
        'Screen household and close contacts.',
        'Address nutrition, and the social conditions that will determine whether the course is completed.',
      ],
    },
    warnings: [
      'Never treat tuberculosis with a single drug. Monotherapy creates multi-drug-resistant TB.',
      'Rifampicin induces cytochrome P450 and makes hormonal contraception unreliable. Arrange alternative contraception explicitly.',
      'Ethambutol causes optic neuritis. Check acuity and colour vision at baseline, monitor, and tell the patient to stop and report any visual change immediately.',
      'Co-prescribe pyridoxine with isoniazid to prevent peripheral neuropathy.',
      'Warn every patient about the symptoms of hepatitis and to stop and seek review if they occur.',
      'Rifampicin turns body fluids orange-red and permanently stains soft contact lenses. Warn the patient or they will stop the drug.',
      'Rifampicin resistance on GeneXpert means the drug-resistant pathway, not standard therapy.',
    ],
    limitations: ['Regimens, durations and monitoring intervals are set by national TB programme guidance and differ by site of disease and comorbidity.'],
    cards: [
      { q: 'Why is TB never treated with one drug?', a: 'Resistant mutants already exist in the bacterial population; monotherapy selects them out and creates MDR-TB.' },
      { q: 'Which anti-TB drug causes optic neuritis and how is it monitored?', a: 'Ethambutol. Baseline and ongoing visual acuity and red-green colour vision, with explicit patient warning.' },
      { q: 'Why is pyridoxine given with isoniazid?', a: 'Isoniazid depletes vitamin B6, causing peripheral neuropathy.' },
      { q: 'Name the most important rifampicin interaction.', a: 'Potent P450 induction — it makes hormonal contraception unreliable, and affects warfarin, steroids and antiretrovirals.' },
      { q: 'Which drug raises uric acid?', a: 'Pyrazinamide.' },
      { q: 'What must a rifampicin-resistant GeneXpert trigger?', a: 'The drug-resistant TB pathway immediately, not standard first-line therapy.' },
    ],
    checks: ['Baseline liver function', 'Baseline visual acuity and colour vision', 'Pyridoxine co-prescribed', 'Contraception counselling if on rifampicin', 'HIV test sent', 'Case notified and contacts traced', 'Hepatitis warning given to patient', 'DOT arranged'],
  },

  {
    id: 'AS-DRGC-0003',
    type: 'named_knowledge',
    title: 'Monoclonal Antibodies and Systemic Anticancer Therapy — Naming, Targets and Toxicity',
    short: 'Monoclonals & chemotherapy',
    summary:
      'The suffix of a biological drug tells you what it is; the stem before it tells you what it hits. And for anyone on the ward, three toxicity emergencies matter far more than the mechanisms: neutropenic sepsis, tumour lysis, and immune-related adverse events.',
    domains: ['oncology', 'pharmacology', 'immunology'],
    intents: ['identify', 'prescribe_reference'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['monoclonal antibody', 'biologics', 'chemotherapy', 'immunotherapy', 'checkpoint inhibitor', 'mab', 'anticancer'],
    terms: ['monoclonal', 'mab', 'rituximab', 'trastuzumab', 'bevacizumab', 'infliximab', 'checkpoint inhibitor', 'pd-1', 'neutropenic sepsis', 'tumour lysis', 'chemotherapy', 'anthracycline'],
    confirm_locally: true,
    body: {
      how_to_read_the_name: {
        the_suffix: '-MAB = monoclonal antibody. -CEPT = a receptor fusion protein (etanercept). -NIB = a small-molecule kinase INhiBitor (imatinib, tofacitinib) — note these are NOT antibodies and are taken orally.',
        the_source_syllable: 'Historically -o-mab was murine, -xi-mab chimeric (infliximab, rituximab), -zu-mab humanised (trastuzumab, bevacizumab), and -u-mab fully human (adalimumab). The more murine, the more immunogenic and the higher the infusion-reaction risk.',
        the_target_stem: '-ci- targets the circulatory system, -li- the immune system, -tu- a tumour. So bevaCIzumab acts on vasculature, adaLImumab on immune targets, trastuzUMAB on a tumour receptor.',
      },
      the_main_targets_worth_knowing: {
        cd20_rituximab: 'Depletes B cells. Lymphoma, chronic lymphocytic leukaemia, rheumatoid arthritis, ANCA vasculitis. KEY RISK: HEPATITIS B REACTIVATION — screen for hepatitis B before giving it. Also progressive multifocal leukoencephalopathy, rarely.',
        her2_trastuzumab: 'HER2-positive breast and gastric cancer. KEY RISK: CARDIOTOXICITY — cardiac function must be assessed at baseline and monitored.',
        vegf_bevacizumab: 'Blocks angiogenesis. KEY RISKS: hypertension, proteinuria, IMPAIRED WOUND HEALING and gastrointestinal perforation — which is why it must be stopped around surgery.',
        egfr_cetuximab: 'Colorectal and head and neck cancer. Characteristic ACNEIFORM RASH (which correlates with response) and hypomagnesaemia.',
        tnf_alpha_infliximab_adalimumab_etanercept: 'Rheumatoid arthritis, inflammatory bowel disease, psoriasis, ankylosing spondylitis. KEY RISK: REACTIVATION OF LATENT TUBERCULOSIS, because TNF maintains granulomas. SCREEN FOR TB BEFORE STARTING. Also worsens heart failure and demyelinating disease.',
        il6_tocilizumab: 'Rheumatoid arthritis, giant cell arteritis, cytokine release syndrome. It SUPPRESSES CRP, so CRP can no longer be used to detect infection in these patients — a serious practical trap.',
        ige_omalizumab: 'Severe allergic asthma.',
        checkpoint_inhibitors: 'Anti-PD-1 (pembrolizumab, nivolumab) and anti-PD-L1 (atezolizumab) release the brakes on T cells against tumour. Discussed below — their toxicity is unlike conventional chemotherapy.',
      },
      the_three_emergencies_that_matter_on_the_ward: {
        neutropenic_sepsis: {
          what: 'Fever (or any sign of sepsis, including hypothermia or unexplained deterioration) in a patient with a low neutrophil count, typically 7–14 days after chemotherapy.',
          the_rule:
            'This is a MEDICAL EMERGENCY. Broad-spectrum antibiotics within ONE HOUR of presentation, per the local neutropenic sepsis protocol, BEFORE the neutrophil count is back. Do not wait for the full blood count, do not wait for cultures to be processed, and do not send the patient home because they look well — neutropenic patients cannot mount the signs that would normally look alarming.',
          note: 'Any patient who has had chemotherapy in the preceding six weeks and presents feeling unwell must be treated as neutropenic sepsis until the count says otherwise.',
        },
        tumour_lysis_syndrome: {
          what: 'Massive tumour cell breakdown, usually shortly after starting treatment of a bulky, rapidly proliferating malignancy — high-grade lymphoma, acute leukaemia.',
          the_biochemistry: 'Cells release their contents: potassium HIGH, phosphate HIGH, urate HIGH, and calcium LOW (it binds the phosphate).',
          what_kills: 'HYPERKALAEMIA causing arrhythmia, and acute kidney injury from urate and calcium phosphate deposition.',
          management: 'Identify high-risk patients BEFORE treatment, hydrate, give urate-lowering prophylaxis per protocol, and monitor biochemistry and the ECG intensively.',
        },
        immune_related_adverse_events: {
          what: 'Checkpoint inhibitors work by removing inhibition from T cells — so the toxicity is AUTOIMMUNE, and it can affect any organ.',
          the_list: 'Colitis (diarrhoea — which can perforate), pneumonitis (breathlessness and cough), hepatitis, thyroiditis, hypophysitis and adrenal insufficiency, dermatitis, myocarditis, nephritis.',
          the_critical_difference:
            'These are NOT infections and they are NOT treated with antibiotics. Significant events are treated with CORTICOSTEROIDS and by holding the drug. Diarrhoea in a patient on a checkpoint inhibitor is immune colitis until proven otherwise — treating it as gastroenteritis and sending them home can be fatal.',
          the_timing_trap: 'They can appear WEEKS TO MONTHS after the last dose, so a patient no longer on active treatment is still at risk. Always ask about immunotherapy in the past year.',
          hypophysitis: 'Presents as vague fatigue, headache and hyponatraemia — easily missed, and it causes secondary adrenal insufficiency which is life-threatening.',
        },
      },
      classic_chemotherapy_toxicities_worth_knowing: {
        anthracyclines: 'Doxorubicin — CARDIOTOXICITY, cumulative and dose-limited. Also a vesicant: extravasation causes tissue necrosis.',
        platinums: 'Cisplatin — NEPHROTOXICITY, OTOTOXICITY and peripheral neuropathy. Carboplatin is more myelosuppressive but less nephrotoxic. Oxaliplatin causes a distinctive COLD-INDUCED neuropathy.',
        vinca_alkaloids: 'Vincristine — peripheral NEUROPATHY, and it is FATAL IF GIVEN INTRATHECALLY. This is a designated never event with specific national safety controls on administration.',
        bleomycin: 'PULMONARY FIBROSIS, cumulative.',
        cyclophosphamide: 'HAEMORRHAGIC CYSTITIS from the metabolite acrolein — prevented with hydration and mesna.',
        methotrexate: 'Myelosuppression, mucositis, hepatotoxicity, pneumonitis. Given WEEKLY in rheumatological use — daily dosing in error has killed patients. Folic acid is co-prescribed.',
        fluorouracil_5fu: 'Mucositis, diarrhoea, palmar-plantar erythrodysaesthesia.',
      },
      the_general_principle: 'You do not need to know the regimens. You need to recognise the emergencies, know that the drug list matters, and know who to call.',
    },
    warnings: [
      'NEUTROPENIC SEPSIS: broad-spectrum antibiotics within one hour, before the blood count returns. Any unwell patient who has had chemotherapy in the last six weeks is neutropenic sepsis until proven otherwise.',
      'Screen for latent TUBERCULOSIS before anti-TNF therapy, and for HEPATITIS B before rituximab.',
      'Diarrhoea or breathlessness on a checkpoint inhibitor is immune colitis or pneumonitis until proven otherwise — treated with steroids, not antibiotics. It can occur months after the last dose.',
      'CRP is suppressed by tocilizumab and cannot be used to detect infection in those patients.',
      'Vincristine is fatal if given intrathecally. It is subject to mandatory national safety controls.',
      'Methotrexate for rheumatological indications is a WEEKLY dose. Daily administration in error has killed patients.',
      'Assess cardiac function before trastuzumab and anthracyclines.',
    ],
    limitations: ['Regimens, monitoring and thresholds are protocol-specific and specialist-directed. This entry is for recognition, not for prescribing.'],
    cards: [
      { q: 'What do the suffixes -mab, -cept and -nib tell you?', a: '-mab is a monoclonal antibody, -cept a receptor fusion protein, -nib a small-molecule kinase inhibitor.' },
      { q: 'How quickly must antibiotics be given in neutropenic sepsis?', a: 'Within one hour, before the neutrophil count is available.' },
      { q: 'What must be screened before anti-TNF therapy, and before rituximab?', a: 'Latent tuberculosis before anti-TNF. Hepatitis B before rituximab.' },
      { q: 'Diarrhoea in a patient on pembrolizumab?', a: 'Immune colitis until proven otherwise. Steroids, not antibiotics — and it can occur months after the last dose.' },
      { q: 'The four biochemical changes of tumour lysis?', a: 'High potassium, high phosphate, high urate, LOW calcium.' },
      { q: 'Why can CRP not be used in a patient on tocilizumab?', a: 'IL-6 blockade suppresses hepatic CRP synthesis regardless of infection.' },
      { q: 'Which chemotherapy drug is fatal if given intrathecally?', a: 'Vincristine.' },
    ],
    checks: ['Neutropenic sepsis protocol activated if febrile post-chemotherapy', 'TB and hepatitis B screening before biologics', 'Cardiac assessment before anthracycline or trastuzumab', 'Immunotherapy history asked in the past year', 'Tumour lysis risk assessed before starting treatment', 'Methotrexate confirmed as weekly'],
  },
];
