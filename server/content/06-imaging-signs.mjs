/**
 * Imaging vocabulary. What a word means on a film, why it happens, and what
 * disease it points to. Searchable by the word itself — "hypodense",
 * "silhouette sign", "meniscus" — because that is how it is encountered.
 */

export default [
  {
    id: 'AS-RADS-0001',
    type: 'named_knowledge',
    title: 'Silhouette Sign — Localising a Lung Opacity Without a Lateral Film',
    short: 'Silhouette sign',
    summary:
      'Two structures of the same density in direct contact lose the border between them. Which border disappears tells you exactly which lobe is diseased — on a single frontal film.',
    domains: ['radiology', 'respiratory'],
    intents: ['interpret', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['silhouette sign', 'loss of silhouette', 'border obliteration'],
    terms: ['silhouette', 'cxr', 'chest x-ray', 'consolidation', 'right middle lobe', 'lingula', 'heart border', 'diaphragm', 'localise'],
    body: {
      the_physics:
        'A border is visible on a radiograph only when two tissues of DIFFERENT density touch — air against soft tissue. If air-filled lung next to the heart is replaced by fluid or consolidation, it becomes the same density as the heart, and the border between them vanishes. The structure is still there; the interface is gone.',
      the_map: {
        right_heart_border: 'Lost in RIGHT MIDDLE LOBE disease. The right middle lobe sits directly against it.',
        left_heart_border: 'Lost in LINGULA disease (part of the left upper lobe).',
        right_hemidiaphragm: 'Lost in RIGHT LOWER LOBE disease.',
        left_hemidiaphragm: 'Lost in LEFT LOWER LOBE disease.',
        aortic_knuckle: 'Lost in apico-posterior LEFT UPPER LOBE disease.',
        ascending_aorta_right_upper_mediastinum: 'Lost in RIGHT UPPER LOBE disease.',
      },
      the_useful_inversion:
        'If an opacity is dense but the heart border remains CRISP through it, the opacity is NOT in contact with the heart — it is posterior (lower lobe) or anterior but separated. A clearly visible border through an opacity is as informative as a lost one.',
      why_it_confuses: [
        'The sign is about CONTACT, not about severity. A small area of right middle lobe consolidation abolishes the right heart border, while a large lower lobe consolidation may leave it perfectly sharp.',
        'Poor inspiration, rotation and a lordotic projection all blur borders and produce a false positive. Assess film quality first.',
        'A large amount of breast tissue or chest wall soft tissue can mimic a lost border.',
      ],
      practical_use:
        'On a frontal chest film with an opacity, ask which borders are preserved and which are lost. That gives you the lobe without needing a lateral view — useful where a lateral film is not routinely available.',
    },
    warnings: [
      'Assess film quality — rotation, inspiration and penetration — before calling a border lost. Technical factors cause most false positives.',
      'The silhouette sign localises; it does not diagnose. Consolidation, collapse, mass and fluid can all cause it.',
    ],
    limitations: ['Requires an adequately penetrated, non-rotated frontal film.'],
    cards: [
      { q: 'Why does a border disappear?', a: 'Two structures of the same density in direct contact have no interface to cast a border.' },
      { q: 'Lost right heart border — which lobe?', a: 'Right middle lobe.' },
      { q: 'Lost left heart border — which lobe?', a: 'The lingula, part of the left upper lobe.' },
      { q: 'Lost hemidiaphragm — which lobe?', a: 'The lower lobe on that side.' },
      { q: 'An opacity with a crisp heart border through it means what?', a: 'It is not in contact with the heart — usually posterior, in a lower lobe.' },
    ],
    checks: ['Film quality assessed', 'Each border systematically checked', 'Lobe assigned', 'Correlated with examination findings'],
  },

  {
    id: 'AS-RADS-0002',
    type: 'named_knowledge',
    title: 'Pleural Effusion — Meniscus Sign, Blunted Angles and How Much Fluid',
    short: 'Meniscus sign',
    summary:
      'Fluid in the pleural space rises higher at the edges than in the middle, producing the meniscus. The costophrenic angle blunts first, and how the fluid behaves on a decubitus film tells you whether it is free or loculated.',
    domains: ['radiology', 'respiratory'],
    intents: ['interpret', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['meniscus sign', 'pleural effusion', 'blunted costophrenic angle', 'costophrenic angle'],
    terms: ['meniscus', 'effusion', 'costophrenic', 'cardiophrenic', 'blunting', 'decubitus', 'loculated', 'empyema', 'white out'],
    body: {
      the_meniscus:
        'Fluid tracks up the inside of the chest wall by surface tension and because the lung is more compliant centrally, so the upper surface of the fluid appears CONCAVE — highest laterally, lowest medially. This upward-curving edge is the meniscus.',
      how_much_fluid_before_you_see_it: {
        lateral_decubitus: 'As little as about 50 mL may be detected.',
        lateral_erect_film: 'About 175–200 mL blunts the POSTERIOR costophrenic angle, which is the deepest recess and blunts first.',
        frontal_erect_film: 'About 200–500 mL is needed to blunt the LATERAL costophrenic angle.',
        supine_film:
          'Fluid layers POSTERIORLY and produces a diffuse HAZINESS of the whole hemithorax with preserved vascular markings — no meniscus at all. Large effusions are routinely missed on supine films in intensive care.',
      },
      the_angles: {
        costophrenic: 'Between the diaphragm and the chest wall laterally. Should be sharp and acute. Blunting is the earliest sign of fluid.',
        cardiophrenic: 'Between the heart and the diaphragm. Fat pads here are common and normal, and are frequently mistaken for pathology. A cardiophrenic mass may be a pericardial cyst, a Morgagni hernia or lymph nodes.',
      },
      free_versus_loculated:
        'A LATERAL DECUBITUS film with the affected side down shows free fluid layering along the dependent chest wall. Fluid that does NOT move is LOCULATED, which suggests empyema, haemothorax or malignancy, and changes management — a loculated collection often needs image guidance or surgery, not a simple drain.',
      complete_white_out: {
        the_question: 'Which way is the trachea and mediastinum pushed?',
        pushed_away: 'A large EFFUSION or a mass — something is occupying space.',
        pulled_towards: 'COLLAPSE — the lung has lost volume and pulled everything toward it.',
        central: 'Consolidation of an entire lung, or a combination, or mesothelioma encasing the lung.',
        why_it_matters: 'The management is entirely different — drain the effusion, but a collapse needs the obstruction found and cleared.',
      },
      ultrasound_note:
        'Ultrasound is more sensitive than a plain film, distinguishes fluid from consolidation immediately, identifies loculations, and should be used to guide any pleural procedure. Blind pleural aspiration is no longer acceptable practice where ultrasound is available.',
    },
    warnings: [
      'A supine film hides effusions. If you are looking for fluid, get an erect or decubitus film, or use ultrasound.',
      'Use ultrasound to guide pleural procedures wherever it is available. Blind aspiration risks the liver, spleen and lung.',
      'In a complete white-out, check the mediastinal shift BEFORE draining. Draining a collapsed lung achieves nothing and delays the real treatment.',
    ],
    limitations: ['Plain films cannot reliably distinguish transudate from exudate, or fluid from thickening.'],
    cards: [
      { q: 'Why is the fluid level concave?', a: 'Surface tension and lung compliance make the fluid rise higher at the chest wall — the meniscus.' },
      { q: 'Which angle blunts first, and on which film?', a: 'The posterior costophrenic angle on a lateral film, at about 175–200 mL.' },
      { q: 'How does an effusion look on a supine film?', a: 'Diffuse haziness with preserved vascular markings and no meniscus. Easily missed.' },
      { q: 'White-out with the trachea pulled TOWARDS it?', a: 'Collapse. Pushed away means effusion or mass.' },
      { q: 'Fluid that does not move on a decubitus film?', a: 'Loculated — suggests empyema, haemothorax or malignancy.' },
    ],
    checks: ['Erect or decubitus film obtained', 'Costophrenic angles assessed', 'Mediastinal shift determined', 'Ultrasound used before any procedure', 'Loculation assessed'],
  },

  {
    id: 'AS-RADS-0003',
    type: 'named_knowledge',
    title: 'Density and Intensity — Hypodense, Hyperdense, Hypointense, Hyperintense',
    short: 'Density vs intensity',
    summary:
      'DENSITY is a CT word. INTENSITY is an MRI word. Using the wrong one signals you do not know which modality you are describing — and on MRI the sequence must always be stated, because the same tissue is bright on one and dark on another.',
    domains: ['radiology'],
    intents: ['interpret', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['hypodense', 'hyperdense', 'hypointense', 'hyperintense', 'isodense', 'attenuation', 'signal intensity'],
    terms: ['hypodense', 'hyperdense', 'hypointense', 'hyperintense', 'ct', 'mri', 't1', 't2', 'flair', 'hounsfield', 'dwi', 'attenuation', 'radiolucent', 'radiopaque'],
    body: {
      the_vocabulary_rule: {
        ct: 'Uses DENSITY or attenuation, measured in Hounsfield units. Hypodense = dark. Hyperdense = bright.',
        mri: 'Uses SIGNAL INTENSITY. Hypointense = dark. Hyperintense = bright. ALWAYS name the sequence — "T2 hyperintense", never just "hyperintense".',
        plain_film: 'Uses RADIOLUCENT (dark, like air) and RADIOPAQUE or radiodense (bright, like bone and metal).',
      },
      ct_hounsfield_scale: {
        air: 'about −1000, black',
        fat: 'about −100 to −50, dark',
        water_and_csf: '0 by definition',
        simple_fluid: 'about 0 to 15',
        white_matter: 'about 20 to 30',
        grey_matter: 'about 35 to 45',
        acute_blood: 'about 50 to 100, BRIGHT — this is why fresh haemorrhage is white on CT',
        bone_and_metal: 'about 700 to 3000, very bright',
      },
      blood_on_ct_over_time: {
        hyperacute_to_acute: 'HYPERDENSE (bright white) — clotted blood is dense because of the protein content of haemoglobin.',
        subacute: 'Becomes ISODENSE with brain over 1–2 weeks, which is the dangerous window — a subdural haematoma can become almost invisible.',
        chronic: 'HYPODENSE (dark), approaching CSF density.',
        clinical_point:
          'An ISODENSE subdural is easy to miss. Look for indirect signs: effacement of sulci, midline shift, and loss of the grey-white differentiation on one side.',
      },
      mri_sequences: {
        t1: 'FAT is bright, WATER is dark. Good anatomy. CSF is DARK. Fat, subacute blood (methaemoglobin), melanin, gadolinium and high protein are bright.',
        t2: 'WATER is bright, fat is intermediate. Good for pathology, because most disease involves oedema. CSF is BRIGHT.',
        flair: 'A T2 with the CSF signal SUPPRESSED (nulled). Water is still bright, but the CSF is dark — so periventricular lesions that would be hidden against bright CSF on T2 become obvious. This is the workhorse sequence for multiple sclerosis and small-vessel disease.',
        dwi: 'Diffusion-weighted imaging. Restricted diffusion is BRIGHT with a corresponding DARK ADC map. This is how ACUTE INFARCT is detected — bright on DWI within minutes, long before CT changes. Also bright in abscess (thick pus restricts diffusion) and in epidermoid cysts.',
        stir: 'Fat suppressed. Bone marrow oedema, and therefore occult fracture and infection, stands out.',
      },
      the_memory_aid:
        'WW2 — Water is White on T2. And on T1, water is dark, so CSF is black. If you can see whether CSF is black or white, you know which sequence you are looking at.',
      why_it_confuses: [
        'The same lesion is dark on T1 and bright on T2. Without the sequence named, "hyperintense" means nothing.',
        'Blood changes appearance on CT over time and can become invisible in the subacute phase.',
        'FLAIR and T2 look similar apart from the CSF, and this is exactly what makes FLAIR useful.',
        '"Lucency" and "density" are plain film words; using them for MRI is incorrect.',
      ],
    },
    warnings: [
      'A normal CT does not exclude an acute stroke. DWI on MRI shows infarction within minutes; CT may be normal for hours.',
      'An isodense subdural haematoma in the subacute phase can be nearly invisible. Look for mass effect and sulcal effacement.',
    ],
    limitations: ['Hounsfield values vary with scanner, calibration and contrast, and are a guide only.'],
    cards: [
      { q: 'Which word goes with CT and which with MRI?', a: 'Density with CT (Hounsfield). Intensity with MRI — and always name the sequence.' },
      { q: 'Is CSF bright or dark on T1 and on T2?', a: 'Dark on T1, bright on T2. Water is White on T2.' },
      { q: 'What is FLAIR for?', a: 'A T2 with CSF suppressed, so periventricular lesions are visible against dark CSF.' },
      { q: 'Which sequence shows acute infarct earliest?', a: 'DWI — bright, with a dark ADC map, within minutes.' },
      { q: 'How does blood change on CT over time?', a: 'Hyperdense acutely, isodense at 1–2 weeks, hypodense when chronic.' },
    ],
    checks: ['Correct modality vocabulary used', 'MRI sequence named', 'ADC map reviewed alongside DWI', 'Indirect signs sought if isodense collection suspected'],
  },

  {
    id: 'AS-RADS-0004',
    type: 'differential',
    title: 'Ring-Enhancing Lesions on CT and MRI',
    short: 'Ring-enhancing lesion',
    summary:
      'A lesion with a rim of contrast enhancement around a non-enhancing centre. The differential is short, memorable, and dominated by infection in many settings — not tumour.',
    domains: ['radiology', 'neurology', 'infectious_disease', 'oncology'],
    intents: ['interpret', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['ring enhancing lesion', 'ring enhancement', 'rim enhancing lesion', 'multiple enhancing lesions'],
    terms: ['ring enhancing', 'rim enhancing', 'abscess', 'toxoplasmosis', 'tuberculoma', 'neurocysticercosis', 'glioblastoma', 'metastasis', 'dwi', 'magic dr'],
    body: {
      why_a_ring_forms:
        'Contrast leaks where the blood-brain barrier is broken — at the vascular, inflamed RIM. The centre is necrotic or purulent, has no blood supply, and therefore does not enhance. The ring IS the living, reacting edge.',
      the_differential: {
        mnemonic: 'MAGIC DR — Metastasis, Abscess, Glioblastoma, Infarct (subacute), Contusion, Demyelination, Radiation necrosis.',
        expanded: [
          'ABSCESS — pyogenic. Thin, smooth, regular ring. Marked surrounding oedema.',
          'TOXOPLASMOSIS — multiple lesions, basal ganglia and grey-white junction, in advanced HIV. Usually the first thought in an HIV-positive patient.',
          'TUBERCULOMA — common wherever TB is common. Often multiple, basal, with surrounding oedema.',
          'NEUROCYSTICERCOSIS — the commonest cause of adult-onset seizures in many endemic regions. Lesions at different stages simultaneously; calcified lesions in the chronic phase.',
          'GLIOBLASTOMA — thick, IRREGULAR, nodular ring with central necrosis. May cross the corpus callosum.',
          'METASTASIS — multiple, at the grey-white junction, with oedema out of proportion to lesion size.',
          'Subacute infarct, resolving haematoma, demyelination (an INCOMPLETE or open ring is characteristic of demyelination), radiation necrosis.',
        ],
      },
      the_features_that_separate_them: {
        dwi: 'ABSCESS shows RESTRICTED diffusion — bright on DWI with a dark ADC — because pus is thick and viscous. Necrotic TUMOUR does NOT restrict. This is the single most useful discriminator.',
        ring_character: 'Thin, smooth and regular favours abscess. Thick, irregular and nodular favours tumour.',
        incomplete_ring: 'An open or incomplete ring, with the gap facing the cortex, is characteristic of DEMYELINATION.',
        number_and_site: 'Multiple lesions at the grey-white junction suggest metastases or septic emboli. Basal ganglia lesions in HIV suggest toxoplasmosis.',
        context: 'HIV status, TB exposure, endemic parasitic disease, known primary malignancy, recent infection or surgery, immunosuppression.',
      },
      the_practical_rule:
        'Do not assume tumour. In much of the world, infection is more likely than malignancy, and infection is treatable. Take the history, check HIV status, and consider a trial of therapy where that is the local pathway.',
      in_hiv:
        'Toxoplasmosis and primary CNS lymphoma are the two main considerations. Toxoplasmosis is usually multiple with a positive serology, lymphoma often solitary and periventricular. Where thallium SPECT or PET is unavailable, an empirical trial of anti-toxoplasma treatment with reimaging at two weeks is a widely used pathway.',
    },
    warnings: [
      'A ring-enhancing lesion is not automatically a tumour. In many settings infection — TB, toxoplasmosis, cysticercosis, pyogenic abscess — is more likely and is treatable.',
      'Check HIV status in any patient with multiple ring-enhancing lesions.',
      'Do not biopsy before considering a treatable infective cause and discussing with a specialist.',
      'Lumbar puncture is dangerous with a space-occupying lesion and mass effect. Image first.',
    ],
    limitations: ['Imaging appearances overlap substantially; tissue diagnosis or a treatment trial is often required.'],
    cards: [
      { q: 'What does the ring represent?', a: 'The vascular, inflamed rim where the blood-brain barrier is broken. The centre is necrotic or purulent and avascular.' },
      { q: 'Give the MAGIC DR mnemonic.', a: 'Metastasis, Abscess, Glioblastoma, Infarct, Contusion, Demyelination, Radiation necrosis.' },
      { q: 'Which sequence separates abscess from necrotic tumour?', a: 'DWI. Abscess restricts diffusion — bright on DWI, dark on ADC. Tumour does not.' },
      { q: 'Multiple basal ganglia ring lesions in HIV?', a: 'Toxoplasmosis.' },
      { q: 'An incomplete or open ring suggests?', a: 'Demyelination.' },
    ],
    checks: ['HIV status checked', 'DWI and ADC reviewed', 'Number, site and ring character described', 'TB and parasitic exposure history taken', 'Specialist discussion before biopsy', 'LP deferred if mass effect'],
  },

  {
    id: 'AS-RADS-0005',
    type: 'named_knowledge',
    title: 'Consolidation, Collapse, Cavitation and the Air Bronchogram',
    short: 'Consolidation vs collapse',
    summary:
      'Consolidation FILLS the alveoli and keeps the lung the same size. Collapse EMPTIES it and the lung shrinks. Volume — not whiteness — is what separates them, and the air bronchogram settles it.',
    domains: ['radiology', 'respiratory'],
    intents: ['interpret', 'classify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['consolidation', 'collapse', 'atelectasis', 'air bronchogram', 'cavitation'],
    terms: ['consolidation', 'collapse', 'atelectasis', 'air bronchogram', 'cavity', 'volume loss', 'opacity', 'white out', 'patchy opacity'],
    body: {
      consolidation: {
        what: 'Alveolar air replaced by fluid, pus, blood or cells. The lung stays the SAME SIZE.',
        signs: 'Homogeneous or patchy opacification, AIR BRONCHOGRAMS, no volume loss, silhouette sign against adjacent structures.',
        causes: 'Pneumonia (commonest), pulmonary oedema, haemorrhage, aspiration, infarction, and — when chronic and non-resolving — malignancy, especially adenocarcinoma in situ, or organising pneumonia.',
      },
      collapse_atelectasis: {
        what: 'Alveolar air is lost and the lung SHRINKS.',
        signs: [
          'VOLUME LOSS — this is the defining feature',
          'Mediastinum and trachea PULLED TOWARD the collapse',
          'Hemidiaphragm raised on that side',
          'Ribs crowded together',
          'Fissures displaced toward the collapse',
          'Compensatory hyperinflation of the remaining lung',
        ],
        causes: 'Bronchial obstruction — tumour, mucus plug, foreign body (especially in a child), lymph node compression — or compression from outside, or failure to expand after surgery.',
      },
      air_bronchogram: {
        what: 'Air-filled bronchi appearing as dark branching lines against surrounding white, opacified alveoli.',
        why_it_matters:
          'It proves the disease is ALVEOLAR (air-space) and that the airway is PATENT. It therefore favours consolidation over collapse, and argues against a proximal obstructing lesion.',
        caveat: 'Air bronchograms can occur in some collapse and in lymphoma, so it is strong evidence rather than proof.',
      },
      the_discriminating_question: 'Where is the trachea? PULLED toward the white side = collapse. PUSHED away = effusion or mass. Central with air bronchograms = consolidation.',
      cavitation: {
        what: 'A gas-filled space within consolidation or a mass, from necrosis that has drained into a bronchus. It may show an air-fluid level.',
        causes: [
          'TUBERCULOSIS — classically UPPER lobe, posterior segments, often with surrounding nodularity. The most important cause worldwide.',
          'Lung abscess — usually with an air-fluid level; aspiration-related, so dependent segments',
          'Necrotising pneumonia — Staphylococcus aureus, Klebsiella',
          'SQUAMOUS CELL CARCINOMA — the lung cancer that cavitates, typically THICK, irregular walls',
          'Septic emboli — multiple peripheral cavities, think right-sided endocarditis and intravenous drug use',
          'Granulomatosis with polyangiitis, rheumatoid nodules',
          'Fungal — aspergilloma showing a mobile mass within a cavity',
        ],
        wall_thickness_guide: 'A thin, smooth wall favours benign or infective causes. A thick, irregular, nodular wall raises concern for malignancy. This is a guide, not a rule.',
      },
      non_resolving_consolidation:
        'Consolidation that has not cleared after adequate treatment and a reasonable interval must be investigated. It may be tuberculosis, malignancy, organising pneumonia or an unusual organism. Arrange follow-up imaging on every patient treated for pneumonia and act on failure to resolve.',
    },
    warnings: [
      'Consolidation that fails to resolve after treatment needs investigation for tuberculosis and malignancy. Always arrange follow-up imaging after treating pneumonia.',
      'Sudden lobar collapse in a child suggests an inhaled foreign body. Ask about a choking episode.',
      'An upper lobe cavity is tuberculosis until proven otherwise. Isolate the patient and send sputum before anything else.',
    ],
    limitations: ['Plain films are insensitive to early and small changes. CT is far more sensitive for cavitation and for underlying masses.'],
    cards: [
      { q: 'What single feature separates consolidation from collapse?', a: 'Volume. Consolidation keeps the lung the same size; collapse shrinks it and pulls structures toward it.' },
      { q: 'What does an air bronchogram prove?', a: 'The disease is alveolar and the airway is patent — favouring consolidation.' },
      { q: 'Trachea pulled toward the white hemithorax?', a: 'Collapse.' },
      { q: 'Upper lobe cavity — first diagnosis?', a: 'Tuberculosis. Isolate and send sputum.' },
      { q: 'Which lung cancer classically cavitates?', a: 'Squamous cell carcinoma, typically with a thick irregular wall.' },
    ],
    checks: ['Volume assessed', 'Tracheal position noted', 'Air bronchograms looked for', 'TB considered for any upper lobe cavity', 'Follow-up imaging arranged after pneumonia'],
  },

  {
    id: 'AS-RADS-0006',
    type: 'named_knowledge',
    title: 'Reading a Chest Film Systematically — And the Numbers Worth Knowing',
    short: 'CXR system',
    summary:
      'A fixed order so nothing is missed, plus the measurements that turn an impression into a finding: cardiothoracic ratio, tracheal position, and where free air and tube tips should sit.',
    domains: ['radiology', 'respiratory', 'emergency_medicine'],
    intents: ['interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['chest x-ray', 'cxr', 'chest radiograph', 'cardiothoracic ratio', 'reading a chest film'],
    terms: ['cxr', 'chest x ray', 'cardiothoracic ratio', 'ctr', 'rotation', 'penetration', 'inspiration', 'free air', 'pneumoperitoneum', 'ett position', 'review areas'],
    body: {
      quality_first: {
        mnemonic: 'RIP — Rotation, Inspiration, Penetration.',
        rotation: 'The medial ends of the clavicles should be EQUIDISTANT from the spinous processes. Rotation falsely alters heart size and mediastinal contours.',
        inspiration: 'Count 5–7 ANTERIOR ribs or about 8–10 posterior ribs above the diaphragm. Poor inspiration crowds the lung bases and mimics consolidation and cardiomegaly.',
        penetration: 'The lower thoracic vertebrae should be just visible through the heart. Under-penetration makes everything look white; over-penetration hides subtle changes.',
        projection: 'PA versus AP matters enormously. On an AP film — the portable one — the heart is MAGNIFIED and cannot be assessed for size.',
      },
      the_system: [
        'A — Airway: trachea central? Carina angle? Any deviation?',
        'B — Breathing: lung fields zone by zone, comparing left with right; pleura for pneumothorax and effusion',
        'C — Circulation: heart size and borders, mediastinal width, aortic knuckle, pulmonary vessels',
        'D — Diaphragm: both hemidiaphragms, costophrenic angles, and air UNDER the diaphragm',
        'E — Everything else: bones, soft tissues, breast shadows, surgical emphysema, and every tube, line and device',
      ],
      cardiothoracic_ratio: {
        how: 'Widest transverse cardiac diameter divided by the widest internal thoracic diameter, measured on a PA film.',
        normal: 'Up to about 0.5 in an adult on a PA film.',
        cautions: 'Not valid on an AP or portable film, not valid on a poor inspiration, and not valid in children under about 5, where a larger ratio is normal. A large heart may be dilatation, hypertrophy, or a pericardial effusion — the film cannot distinguish them; echocardiography can.',
      },
      free_air_under_the_diaphragm: {
        what: 'A lucent crescent between the diaphragm and the liver on an ERECT film — pneumoperitoneum, meaning a perforated viscus until proven otherwise.',
        requirements: 'The patient must be ERECT for at least 10–15 minutes beforehand. A SUPINE film will not show it.',
        the_critical_caveat: 'ABSENCE of free air does NOT exclude perforation. A significant proportion of perforations show no free air. If the clinical picture fits, act on it.',
        mimic: 'Chilaiditi sign — colon interposed between the liver and diaphragm. Look for haustral markings within the lucency.',
      },
      tube_and_line_positions: {
        endotracheal_tube: 'Tip about 5 cm above the carina, roughly at the level of the aortic arch. Too deep goes into the RIGHT main bronchus, causing left lung collapse.',
        nasogastric_tube: 'Must pass BELOW the diaphragm and be seen to bisect the carina and remain midline. If it is seen in the bronchial tree, it is in the lung — do not feed.',
        central_line: 'Tip at the lower superior vena cava, around the level of the carina.',
        chest_drain: 'Side holes must all be inside the pleural cavity.',
      },
      the_review_areas: 'The places lesions hide: lung APICES, behind the HEART, below the DIAPHRAGM, the HILA, the periphery just inside the ribs, and the soft tissues and bones. Look at these deliberately after the main sweep.',
    },
    warnings: [
      'Absence of free air under the diaphragm does NOT exclude a perforated viscus. Treat the patient.',
      'Never assess heart size on an AP or portable film — it is magnified.',
      'Confirm nasogastric tube position on the film before feeding. Feeding into a lung is fatal and is a never event.',
      'A supine film hides both free air and pleural fluid.',
    ],
    limitations: ['Plain radiography has limited sensitivity. A normal film does not exclude pulmonary embolism, early pneumonia or small pneumothorax.'],
    cards: [
      { q: 'What does RIP stand for?', a: 'Rotation, Inspiration, Penetration — the quality check before interpretation.' },
      { q: 'Normal cardiothoracic ratio, and on which film?', a: 'Up to about 0.5, and only on a PA film.' },
      { q: 'Where should an endotracheal tube tip sit?', a: 'About 5 cm above the carina.' },
      { q: 'Does absent free air exclude perforation?', a: 'No. A significant proportion of perforations show none.' },
      { q: 'Name the review areas.', a: 'Apices, behind the heart, below the diaphragm, hila, the lung periphery, and bones and soft tissues.' },
    ],
    checks: ['Quality assessed (RIP)', 'Projection noted (PA or AP)', 'ABCDE system followed', 'Review areas checked', 'All tubes and lines assessed', 'Compared with previous films'],
  },
];
