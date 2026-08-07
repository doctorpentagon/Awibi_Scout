/** Tissue responses: fibrosis, cirrhosis, amyloid, cysts and cellular adaptation. */

export default [
  {
    id: 'AS-GPTH-0003',
    type: 'mechanism',
    title: 'Fibrosis — Why Repair Becomes Disease, and Where It Ends Every Organ',
    short: 'Fibrosis',
    summary:
      'Fibrosis is normal healing that does not stop. It is the final common pathway of chronic injury in every organ, and the reason chronic disease becomes irreversible — collagen replaces working tissue, and collagen does not work.',
    domains: ['pathology', 'hepatology', 'respiratory', 'renal'],
    intents: ['identify', 'revise'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['fibrosis', 'scarring', 'sclerosis', 'pulmonary fibrosis', 'cystic fibrosis'],
    terms: ['fibrosis', 'collagen', 'myofibroblast', 'tgf-beta', 'scar', 'sclerosis', 'stellate cell', 'contracture', 'keloid', 'cystic fibrosis'],
    body: {
      the_principle:
        'Tissue injury triggers repair. Where the injury is brief and the tissue can regenerate, healing restores function. Where injury is REPEATED or PERSISTENT, or the tissue cannot regenerate, the repair response continues and lays down collagen. The result is a scar: mechanically adequate, functionally useless.',
      the_cells_and_the_signal: {
        myofibroblast: 'The effector cell. It synthesises collagen and contracts, which is why scars shrink over time.',
        tgf_beta: 'The dominant pro-fibrotic cytokine. It drives myofibroblast activation and collagen deposition, and it is the target of much anti-fibrotic drug development.',
        organ_specific_cells: 'In the LIVER, HEPATIC STELLATE CELLS sit quiescent storing vitamin A and activate into myofibroblasts on injury — this is the central event in liver fibrosis.',
      },
      where_it_ends_each_organ: {
        liver: 'Chronic hepatitis, alcohol, fatty liver, biliary obstruction → CIRRHOSIS.',
        lung: 'Interstitial lung disease, occupational dust exposure, drugs (bleomycin, amiodarone, methotrexate), radiation → PULMONARY FIBROSIS with restrictive physiology and impaired gas transfer.',
        kidney: 'Any chronic glomerular or tubulointerstitial injury → GLOMERULOSCLEROSIS and interstitial fibrosis → chronic kidney disease. The degree of interstitial fibrosis on biopsy predicts outcome better than the original diagnosis.',
        heart: 'Infarction and chronic pressure or volume overload → myocardial fibrosis → stiff ventricle, diastolic dysfunction and arrhythmia substrate.',
        skin: 'Excess dermal collagen → HYPERTROPHIC SCAR (stays within the wound margins) or KELOID (grows BEYOND the original wound). Keloid is commoner and more severe in darker skin, and recurs after excision — an important counselling point before any elective skin surgery.',
        joints_and_soft_tissue: 'Dupuytren contracture (palmar fascia), frozen shoulder, plantar fibromatosis.',
        peritoneum: 'Post-surgical ADHESIONS — the commonest cause of small bowel obstruction in anyone who has had abdominal surgery.',
      },
      why_it_matters_clinically: [
        'Fibrosis is largely IRREVERSIBLE once established, which is why early treatment of the underlying cause is the only effective strategy.',
        'Removing the cause can halt progression and sometimes allow partial regression — stopping alcohol, treating hepatitis B or C, controlling blood pressure and proteinuria in kidney disease.',
        'Once fibrosis dominates, treatment shifts from cure to managing the consequences.',
      ],
      cystic_fibrosis_is_a_different_thing_entirely: {
        the_naming_trap:
          'CYSTIC FIBROSIS is NOT a fibrotic disease in the sense above. It is named for the cystic and fibrotic appearance of the PANCREAS at autopsy in affected children — the fibrosis is a consequence, not the mechanism.',
        what_it_actually_is:
          'An AUTOSOMAL RECESSIVE defect in the CFTR chloride channel. Defective chloride transport produces thick, dehydrated secretions in every exocrine organ.',
        consequences: [
          'LUNG — thick mucus, impaired clearance, chronic infection (Pseudomonas, Staphylococcus, Burkholderia), bronchiectasis, and eventual respiratory failure. This is what determines survival.',
          'PANCREAS — duct obstruction causing exocrine insufficiency (steatorrhoea, fat-soluble vitamin deficiency, failure to thrive) and later CF-related diabetes.',
          'GUT — MECONIUM ILEUS in the newborn, which may be the presenting feature, and distal intestinal obstruction later.',
          'LIVER — biliary obstruction and, in a minority, cirrhosis.',
          'REPRODUCTIVE — congenital absence of the vas deferens causes male infertility in almost all affected men.',
          'SWEAT — salt loss, the basis of the SWEAT TEST, and a risk of hyponatraemic dehydration in hot weather.',
        ],
        diagnosis: 'Newborn screening where available, sweat chloride testing, and genetic analysis.',
      },
    },
    warnings: [
      'Fibrosis is largely irreversible. The only effective intervention is early treatment of the underlying cause.',
      'Keloid is commoner and more severe in darker skin and recurs after excision. Counsel before elective skin surgery.',
      'Adhesions are the commonest cause of small bowel obstruction after abdominal surgery — always ask about previous operations.',
      'Cystic fibrosis is a CFTR channel disease, not a primary fibrotic disease. Do not confuse the two.',
      'Amiodarone, methotrexate, bleomycin and nitrofurantoin cause pulmonary fibrosis. Review the drug chart in any new breathlessness.',
    ],
    limitations: ['Anti-fibrotic therapy is disease-specific and specialist-directed.'],
    cards: [
      { q: 'What is fibrosis in one sentence?', a: 'Repair that does not stop — collagen replaces functioning tissue after repeated or persistent injury.' },
      { q: 'Which cell drives liver fibrosis?', a: 'The hepatic stellate cell, activating into a myofibroblast.' },
      { q: 'Hypertrophic scar versus keloid?', a: 'Hypertrophic stays within the wound margins. Keloid grows beyond them, is commoner in darker skin, and recurs after excision.' },
      { q: 'Is cystic fibrosis a fibrotic disease?', a: 'No. It is a CFTR chloride channel defect; the pancreatic fibrosis is a consequence that gave it its name.' },
      { q: 'Why does CF cause male infertility?', a: 'Congenital absence of the vas deferens in almost all affected men.' },
    ],
    checks: ['Underlying cause of fibrosis identified and treated', 'Drug chart reviewed for fibrogenic drugs', 'Previous surgery asked about in obstruction', 'Keloid risk discussed before elective skin surgery'],
  },

  {
    id: 'AS-GPTH-0004',
    type: 'pattern',
    title: 'Cirrhosis — Portal Hypertension, Synthetic Failure and Decompensation',
    short: 'Cirrhosis',
    summary:
      'Cirrhosis is fibrosis plus regenerative nodules that destroy liver architecture. Everything that follows comes from two consequences: blood cannot get through (portal hypertension) and the liver cannot make things (synthetic failure).',
    domains: ['hepatology', 'general_surgery'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['cirrhosis', 'liver failure', 'portal hypertension', 'chronic liver disease', 'decompensated liver disease'],
    terms: ['cirrhosis', 'portal hypertension', 'varices', 'ascites', 'sbp', 'encephalopathy', 'child pugh', 'meld', 'spider naevi', 'caput medusae', 'hepatorenal'],
    confirm_locally: true,
    body: {
      what_it_is: 'Diffuse fibrosis with regenerative NODULES replacing normal architecture. The nodularity is what distinguishes cirrhosis from fibrosis alone, and it is what obstructs blood flow.',
      causes: 'Alcohol; chronic hepatitis B and C; metabolic-associated fatty liver disease; autoimmune hepatitis; primary biliary cholangitis and primary sclerosing cholangitis; haemochromatosis; Wilson disease; alpha-1 antitrypsin deficiency; drugs; and in endemic regions, schistosomiasis.',
      the_two_consequences: {
        portal_hypertension: {
          mechanism: 'Blood cannot pass through the fibrotic liver, so pressure rises in the portal system and finds collateral routes back to the systemic circulation.',
          results: [
            'OESOPHAGEAL AND GASTRIC VARICES — thin-walled collaterals that bleed catastrophically. The commonest cause of death in cirrhosis.',
            'ASCITES — portal hypertension plus low albumin plus sodium retention.',
            'SPLENOMEGALY with hypersplenism → thrombocytopenia (often the first abnormality noticed).',
            'CAPUT MEDUSAE — dilated periumbilical veins.',
            'HEPATIC ENCEPHALOPATHY — gut toxins bypass the liver.',
          ],
        },
        synthetic_failure: {
          results: [
            'Low ALBUMIN → oedema, ascites, and unreliable total calcium and drug binding.',
            'Prolonged PT/INR → bleeding. INR is the best single marker of synthetic function and of prognosis.',
            'Low UREA → so urea cannot be used to judge renal function in these patients.',
            'HYPOGLYCAEMIA in advanced disease — check the glucose in any confused cirrhotic.',
            'Reduced clearance of drugs and hormones → gynaecomastia, spider naevi, palmar erythema, testicular atrophy from failure to clear oestrogens.',
          ],
        },
      },
      compensated_versus_decompensated: {
        compensated: 'Cirrhosis present but the liver is coping. Often asymptomatic and found incidentally on imaging or from a low platelet count.',
        decompensated: 'Defined by the appearance of ASCITES, VARICEAL BLEEDING, ENCEPHALOPATHY or JAUNDICE. Decompensation marks a sharp fall in prognosis and should trigger discussion about transplantation candidacy where available.',
      },
      the_complications_to_recognise: {
        spontaneous_bacterial_peritonitis: {
          what: 'Infection of ascitic fluid WITHOUT a perforation.',
          the_rule:
            'ANY cirrhotic with ascites who deteriorates in ANY way — fever, abdominal pain, encephalopathy, renal impairment, or simply "not right" — needs a DIAGNOSTIC ASCITIC TAP. The classical features are frequently absent. Diagnosis rests on the ascitic neutrophil count, and antibiotics are started on that, not on culture.',
        },
        variceal_bleeding: 'Resuscitate, transfuse to a restrictive target per protocol, give vasoactive therapy and prophylactic antibiotics (which reduce mortality independently), and arrange urgent endoscopy.',
        hepatorenal_syndrome: 'Progressive renal failure from splanchnic vasodilation and renal vasoconstriction, in the absence of intrinsic kidney disease. A diagnosis of exclusion — stop diuretics and nephrotoxics, exclude sepsis and hypovolaemia first.',
        hepatocellular_carcinoma: 'Cirrhosis of any cause is the major risk factor. Surveillance imaging at intervals is standard where available.',
      },
      scoring: 'CHILD-PUGH uses bilirubin, albumin, INR, ascites and encephalopathy. MELD uses bilirubin, INR and creatinine and drives transplant prioritisation. Use whichever your unit uses.',
      practical_prescribing_cautions: [
        'AVOID NSAIDs — they precipitate renal failure and gastrointestinal bleeding.',
        'Avoid sedatives and opioids, or use with great caution — they precipitate encephalopathy.',
        'Paracetamol is generally the safest analgesic but at reduced total daily dose per local guidance.',
        'Aminoglycosides are best avoided.',
      ],
    },
    warnings: [
      'Any cirrhotic with ascites who deteriorates in any way needs a diagnostic ascitic tap for spontaneous bacterial peritonitis. Classical features are often absent.',
      'Avoid NSAIDs entirely in cirrhosis — they cause renal failure and bleeding.',
      'Do not use urea to judge renal function in liver failure; the liver cannot make it.',
      'Check glucose in any confused cirrhotic — hypoglycaemia is common and correctable.',
      'Give prophylactic antibiotics in variceal bleeding; they reduce mortality independently of the bleeding.',
      'Decompensation (ascites, varices, encephalopathy, jaundice) marks a sharp prognostic change — escalate and consider transplant referral.',
    ],
    limitations: ['Transfusion targets, vasoactive agents and antibiotic choices are protocol-specific.'],
    cards: [
      { q: 'What distinguishes cirrhosis from fibrosis alone?', a: 'Regenerative nodules destroying architecture — that is what obstructs blood flow.' },
      { q: 'What defines decompensated cirrhosis?', a: 'Ascites, variceal bleeding, encephalopathy or jaundice.' },
      { q: 'A cirrhotic with ascites who is "not right" — what must you do?', a: 'Diagnostic ascitic tap. Spontaneous bacterial peritonitis often has no classical features.' },
      { q: 'Which single test best reflects hepatic synthetic function?', a: 'INR (prothrombin time). Albumin is slower and confounded by inflammation.' },
      { q: 'Why is urea low in liver failure?', a: 'The liver makes urea from ammonia. It therefore cannot be used to assess renal function here.' },
      { q: 'Which analgesic class must be avoided in cirrhosis?', a: 'NSAIDs — they precipitate renal failure and gastrointestinal bleeding.' },
    ],
    checks: ['Ascitic tap if any deterioration', 'INR, albumin, bilirubin and creatinine checked', 'Glucose checked if confused', 'NSAIDs and sedatives avoided', 'Variceal prophylaxis and surveillance addressed', 'Transplant candidacy considered if decompensated'],
  },

  {
    id: 'AS-GPTH-0005',
    type: 'named_knowledge',
    title: 'Amyloidosis, Hygroma and Other Named Swellings',
    short: 'Amyloid & swellings',
    summary:
      'Amyloid is a protein folded wrongly and deposited where it cannot be cleared — a single mechanism producing many different diseases depending on which protein and which organ. Grouped here with the named cystic swellings that get confused with it.',
    domains: ['pathology', 'haematology', 'paediatrics'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['amyloidosis', 'amyloid', 'cystic hygroma', 'lymphangioma', 'hygroma', 'ganglion', 'sebaceous cyst'],
    terms: ['amyloid', 'amyloidosis', 'congo red', 'apple green birefringence', 'al amyloid', 'aa amyloid', 'cystic hygroma', 'lymphangioma', 'ganglion', 'bursa', 'transillumination'],
    body: {
      amyloidosis: {
        the_mechanism:
          'A protein misfolds into a BETA-PLEATED SHEET, which is resistant to degradation. It accumulates in the extracellular space of tissues, physically separating cells from their blood supply and disrupting organ architecture. Many different precursor proteins can do this — which is why amyloidosis is a family of diseases rather than one.',
        the_stain: 'CONGO RED, which produces APPLE-GREEN BIREFRINGENCE under polarised light. This is the diagnostic finding and it is worth remembering because it is unique and frequently examined.',
        the_main_types: {
          al_primary: 'Light chain amyloid, from a clonal plasma cell disorder. Associated with MYELOMA. Affects heart, kidney, liver, nerves and tongue.',
          aa_secondary: 'From serum amyloid A, an acute phase protein, in CHRONIC INFLAMMATION — rheumatoid arthritis, inflammatory bowel disease, chronic infection including tuberculosis, bronchiectasis and osteomyelitis, and familial Mediterranean fever. Predominantly renal.',
          attr: 'Transthyretin — either hereditary or wild-type (age-related). Cardiac and neuropathic. Increasingly recognised as a cause of heart failure with preserved ejection fraction in older adults.',
          dialysis_related: 'Beta-2 microglobulin in long-term dialysis, depositing in joints and causing carpal tunnel syndrome.',
          localised: 'Confined to one organ, such as cerebral amyloid in Alzheimer disease and cerebral amyloid angiopathy.',
        },
        clinical_clues: [
          'NEPHROTIC-range proteinuria with bland urinary sediment — the commonest renal presentation.',
          'RESTRICTIVE cardiomyopathy: heart failure with THICK walls on echocardiography but LOW voltages on the ECG. That combination — thick heart, small voltages — is highly suggestive and is otherwise paradoxical.',
          'MACROGLOSSIA and PERIORBITAL PURPURA ("racoon eyes", classically after minor pressure such as coughing or proctoscopy) — uncommon but near-specific for AL amyloid.',
          'Peripheral and autonomic neuropathy, carpal tunnel syndrome, hepatomegaly, easy bruising.',
        ],
        the_practical_point: 'Amyloid should be considered in unexplained proteinuria, unexplained heart failure with preserved ejection fraction and thick walls, or a neuropathy with no obvious cause — particularly alongside a chronic inflammatory disease or a paraprotein.',
      },
      cystic_hygroma: {
        what: 'A congenital LYMPHATIC malformation (macrocystic lymphangioma) caused by failure of lymphatic channels to connect to the venous system.',
        where: 'Classically the POSTERIOR TRIANGLE OF THE NECK, also the axilla.',
        features: 'Soft, fluctuant, compressible, and BRILLIANTLY TRANSILLUMINABLE — which is the classic bedside sign that distinguishes it. It may increase in size with infection or bleeding into it.',
        when: 'Present at birth or appearing in the first years of life.',
        the_associations:
          'Fetal cystic hygroma detected on antenatal ultrasound is strongly associated with CHROMOSOMAL ABNORMALITY — TURNER SYNDROME (45,X) above all, and also trisomies 21, 18 and 13. Its detection warrants genetic counselling and testing.',
        the_risk: 'A large cervical hygroma can compromise the AIRWAY at or after birth, and delivery may need to be planned in a centre with paediatric airway expertise.',
      },
      the_other_named_swellings: {
        ganglion: 'A cyst arising from a joint capsule or tendon sheath, most often on the dorsum of the wrist. Firm, smooth, transilluminates, and moves with the tendon. Frequently resolves spontaneously.',
        bursa: 'An inflamed bursa — olecranon, prepatellar ("housemaid\'s knee"), infrapatellar ("clergyman\'s knee"), trochanteric. Must be distinguished from SEPTIC bursitis, which is red, hot and systemically unwell and needs aspiration.',
        epidermoid_cyst: 'Commonly and incorrectly called a sebaceous cyst. A keratin-filled cyst with a central PUNCTUM, mobile with the skin rather than under it. Does not transilluminate.',
        lipoma: 'Soft, lobulated, mobile, SLIPS AWAY from the examining finger, does not transilluminate.',
        the_examination_routine: 'For any lump: site, size, shape, surface, edge, consistency, fluctuance, TRANSILLUMINATION, pulsatility, compressibility, temperature, tenderness, attachment to skin and to deep structures, and regional lymph nodes.',
      },
    },
    warnings: [
      'Thick ventricular walls on echocardiography with LOW ECG voltages suggests infiltration — think cardiac amyloid. It is otherwise a paradox.',
      'Periorbital purpura and macroglossia are near-specific for AL amyloid; look for a paraprotein.',
      'Antenatally detected cystic hygroma requires genetic counselling — the association with Turner syndrome and trisomies is strong.',
      'A large cervical hygroma may obstruct the neonatal airway. Plan delivery with paediatric airway expertise available.',
      'A hot, tender, red bursa may be septic and needs aspiration, not simply anti-inflammatories.',
    ],
    limitations: ['Amyloid typing requires specialist immunohistochemistry or mass spectrometry; treatment is type-specific.'],
    cards: [
      { q: 'What stain and finding diagnoses amyloid?', a: 'Congo red, showing apple-green birefringence under polarised light.' },
      { q: 'AL versus AA amyloid?', a: 'AL is light chain from a plasma cell clone (myeloma). AA is from serum amyloid A in chronic inflammation.' },
      { q: 'Thick heart walls with low ECG voltages suggests what?', a: 'Infiltration — cardiac amyloidosis.' },
      { q: 'What is the classic bedside sign of a cystic hygroma?', a: 'Brilliant transillumination, in a soft compressible posterior triangle swelling.' },
      { q: 'Antenatal cystic hygroma — what must be considered?', a: 'Chromosomal abnormality, especially Turner syndrome; also trisomies 21, 18 and 13.' },
      { q: 'How do you distinguish a lipoma from an epidermoid cyst?', a: 'Lipoma is soft, lobulated and slips away; epidermoid cyst has a punctum and moves with the skin. Neither transilluminates.' },
    ],
    checks: ['Congo red requested if amyloid suspected', 'Paraprotein screen sent', 'Echo and ECG voltages compared', 'Transillumination performed on any cystic lump', 'Genetic counselling arranged for antenatal hygroma'],
  },

  {
    id: 'AS-GPTH-0006',
    type: 'definition',
    title: 'Cellular Adaptation — Hypertrophy, Hyperplasia, Atrophy, Metaplasia, Dysplasia and Neoplasia',
    short: 'Cellular adaptation',
    summary:
      'Six words describing how tissue responds to a changed demand. The sequence metaplasia → dysplasia → neoplasia is the single most important pathway in cancer prevention, because the first two steps are reversible or treatable and the third is not.',
    domains: ['pathology', 'oncology'],
    intents: ['classify', 'revise'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['hypertrophy', 'hyperplasia', 'atrophy', 'metaplasia', 'dysplasia', 'neoplasia', 'cellular adaptation'],
    terms: ['hypertrophy', 'hyperplasia', 'atrophy', 'metaplasia', 'dysplasia', 'neoplasia', 'anaplasia', 'barrett', 'cin', 'carcinoma in situ', 'apoptosis'],
    body: {
      the_reversible_adaptations: {
        hypertrophy: 'Cells get BIGGER. No increase in number. Occurs where cells cannot divide — cardiac and skeletal muscle. Left ventricular hypertrophy in hypertension; skeletal muscle in a weightlifter; the pregnant uterus (which does both).',
        hyperplasia: 'Cells increase in NUMBER. Only possible where cells can divide. Benign prostatic hyperplasia; endometrial hyperplasia from unopposed oestrogen; parathyroid hyperplasia in chronic kidney disease.',
        atrophy: 'Cells get SMALLER or fewer. From disuse (a limb in a cast), denervation, loss of blood supply, loss of hormonal stimulus (endometrium after menopause), ageing, or malnutrition. Note that STEROID therapy causes muscle atrophy — proximal weakness in a patient on long-term steroids is usually myopathy, not neuropathy.',
        metaplasia: {
          what: 'One MATURE, differentiated cell type is replaced by ANOTHER mature cell type, usually one better suited to a hostile environment.',
          it_is_adaptive: 'The tissue is protecting itself. But the replacement cell type is in the wrong place, and it is more prone to further change.',
          examples: [
            'BARRETT OESOPHAGUS — squamous epithelium replaced by COLUMNAR intestinal-type epithelium in response to chronic acid reflux. Predisposes to adenocarcinoma.',
            'Respiratory ciliated columnar epithelium replaced by SQUAMOUS epithelium in smokers — losing the cilia, which is exactly why smokers cannot clear secretions.',
            'Cervical squamous metaplasia at the transformation zone — normal, but the site where dysplasia and cancer arise.',
          ],
          reversibility: 'Metaplasia can regress if the stimulus is removed. That is the argument for stopping smoking and controlling reflux.',
        },
      },
      the_pre_malignant_and_malignant: {
        dysplasia: {
          what: 'DISORDERED growth — cells that are abnormal in size, shape and organisation, with increased mitoses and loss of normal maturation, but STILL CONFINED to the epithelium and not invading through the basement membrane.',
          graded: 'Low grade or high grade (or in the cervix, CIN 1 to 3).',
          the_key_fact: 'Dysplasia is PRE-MALIGNANT, not malignant, and it is REVERSIBLE in its lower grades if the stimulus is removed. High-grade dysplasia and carcinoma in situ are treated to prevent progression. This is the entire biological basis of SCREENING — cervical, colonoscopic surveillance, Barrett surveillance.',
        },
        carcinoma_in_situ: 'Full-thickness dysplasia that has NOT breached the basement membrane. Not yet capable of metastasis. Curable by local treatment.',
        neoplasia: {
          what: 'New, autonomous, uncontrolled growth that persists after the initiating stimulus is removed. That AUTONOMY is what distinguishes neoplasia from hyperplasia.',
          benign_vs_malignant: 'BENIGN: slow, encapsulated, well-differentiated, no invasion, no metastasis; harmful by pressure, obstruction or hormone secretion. MALIGNANT: invasive through basement membrane, poorly differentiated, metastasises.',
          anaplasia: 'Complete loss of differentiation — the cells no longer resemble their tissue of origin. A marker of aggressive malignancy.',
        },
      },
      the_sequence_that_matters:
        'NORMAL → METAPLASIA → DYSPLASIA → CARCINOMA IN SITU → INVASIVE CARCINOMA. Each of the first three steps is potentially reversible or treatable. The last is not. Everything in cancer screening exists to intercept this sequence before the final step.',
      naming_conventions: {
        benign: '-OMA. Lipoma, adenoma, fibroma, leiomyoma.',
        malignant_epithelial: 'CARCINOMA. Adenocarcinoma, squamous cell carcinoma.',
        malignant_mesenchymal: 'SARCOMA. Osteosarcoma, liposarcoma, leiomyosarcoma.',
        the_exceptions_that_break_the_rule: 'MELANOMA, LYMPHOMA, MESOTHELIOMA and SEMINOMA are all MALIGNANT despite the -oma ending. This trips people constantly.',
      },
    },
    warnings: [
      'Melanoma, lymphoma, mesothelioma and seminoma are malignant despite the -oma suffix.',
      'Dysplasia is not cancer. It is pre-malignant and often reversible — which is the entire rationale for screening programmes.',
      'Proximal weakness in a patient on long-term steroids is usually steroid myopathy, not neuropathy.',
      'Barrett oesophagus requires surveillance because of the adenocarcinoma risk.',
    ],
    limitations: ['Grading systems differ by organ and are revised periodically.'],
    cards: [
      { q: 'Hypertrophy versus hyperplasia?', a: 'Hypertrophy: cells get bigger (where they cannot divide). Hyperplasia: cells increase in number.' },
      { q: 'What is metaplasia and give an example?', a: 'One mature cell type replaced by another. Barrett oesophagus — squamous replaced by columnar from acid reflux.' },
      { q: 'What separates dysplasia from carcinoma?', a: 'Dysplasia has not breached the basement membrane and cannot metastasise.' },
      { q: 'Give the full pre-malignant sequence.', a: 'Normal → metaplasia → dysplasia → carcinoma in situ → invasive carcinoma.' },
      { q: 'Name four malignancies ending in -oma.', a: 'Melanoma, lymphoma, mesothelioma, seminoma.' },
      { q: 'What distinguishes neoplasia from hyperplasia?', a: 'Autonomy — neoplastic growth persists after the initiating stimulus is removed.' },
    ],
    checks: ['Metaplastic stimulus identified and removed where possible', 'Surveillance arranged for known dysplasia', 'Steroid myopathy considered in proximal weakness'],
  },
];
