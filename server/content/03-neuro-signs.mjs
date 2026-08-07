/**
 * Named neurological signs and phenomena.
 *
 * Each answers: what it is · how to elicit it · what it means · where the
 * lesion is · and what it is commonly confused with.
 */

export default [
  {
    id: 'AS-SIGN-0001',
    type: 'stigmata',
    title: 'Babinski Sign — The Plantar Response and What It Really Tests',
    short: 'Babinski',
    summary:
      'An upgoing great toe on stroking the sole. It is a sign of upper motor neurone (corticospinal tract) dysfunction, and it is normal in infants until the corticospinal tract myelinates.',
    domains: ['neurology'],
    intents: ['examine', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['plantar response', 'extensor plantar', 'babinski reflex', 'upgoing plantar', 'plantar reflex'],
    terms: ['babinski', 'plantar', 'great toe', 'upper motor neurone', 'umn', 'corticospinal', 'extensor plantar'],
    body: {
      how_to_elicit: [
        'Warn the patient, and make sure the foot is warm and relaxed.',
        'Use a blunt object — an orange stick or a key, never a sharp point.',
        'Stroke firmly up the LATERAL border of the sole, from the heel toward the little toe.',
        'Then curve MEDIALLY across the ball of the foot toward the great toe.',
        'Watch the GREAT TOE, not the other toes.',
      ],
      interpretation: {
        normal_flexor: 'The great toe curls DOWN. Reported as "downgoing" or flexor.',
        abnormal_extensor:
          'The great toe goes UP, often with fanning of the other toes. Reported as "upgoing" or extensor. This is the Babinski sign and it indicates corticospinal tract dysfunction anywhere from cortex to spinal cord.',
      },
      the_common_error:
        'Stroking too medially or too centrally, or using a sharp object, produces a WITHDRAWAL response — the whole leg pulls away and the toes flex. That is not a plantar response. Always use the lateral border first, then curve across.',
      when_it_is_normal: 'Up to about one year of age, before the corticospinal tract is fully myelinated. An extensor plantar in a young infant is expected.',
      why_it_confuses: [
        'A withdrawal artefact is routinely recorded as an extensor response by inexperienced examiners.',
        'It may be absent in acute spinal shock, where reflexes are initially flaccid and areflexic despite an upper motor neurone lesion.',
        'A very ticklish patient makes it uninterpretable — this is a limitation, not a finding.',
        'It can be transiently positive after a seizure, in coma, and in deep sleep.',
      ],
      what_goes_with_it:
        'A true upper motor neurone picture also has increased tone, brisk reflexes, clonus, and a pyramidal pattern of weakness — weak extensors in the arm, weak flexors in the leg. One sign in isolation is weak evidence.',
    },
    warnings: [
      'A new unilateral extensor plantar in a patient with new weakness is a red flag. Look for stroke or cord compression and escalate.',
      'Do not use a sharp instrument. It breaks skin, causes withdrawal, and gives a false result.',
    ],
    limitations: ['Poor inter-observer reliability. It is one sign among several and should never stand alone.'],
    cards: [
      { q: 'Which part of the sole do you stroke, and in what direction?', a: 'The lateral border from heel toward the little toe, then curving medially across the ball of the foot.' },
      { q: 'Which toe do you watch?', a: 'The great toe.' },
      { q: 'At what age is an extensor plantar normal?', a: 'Up to about one year, before corticospinal myelination is complete.' },
      { q: 'What is the commonest false positive?', a: 'Withdrawal — from stroking too medially or using a sharp object.' },
    ],
    checks: ['Blunt object used', 'Lateral border stroked first', 'Great toe observed', 'Both sides compared', 'Tone, reflexes and power documented alongside'],
    related: ['cranial_nerves_1_12_test_and_lesion'],
  },

  {
    id: 'AS-SIGN-0002',
    type: 'stigmata',
    title: 'Kernig and Brudzinski Signs — Meningism, and Their Real Sensitivity',
    short: 'Kernig & Brudzinski',
    summary:
      'Two classic signs of meningeal irritation. Both are reasonably specific but poorly sensitive — a negative Kernig or Brudzinski does NOT exclude meningitis, and relying on them delays lumbar puncture and antibiotics.',
    domains: ['neurology', 'infectious_disease', 'emergency_medicine'],
    intents: ['examine', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['kernig sign', 'brudzinski sign', 'meningism', 'neck stiffness', 'brudzinski', 'kernig'],
    terms: ['kernig', 'brudzinski', 'meningism', 'meningitis', 'neck stiffness', 'nuchal rigidity', 'subarachnoid'],
    body: {
      kernig_sign: {
        how: 'With the patient supine, flex the hip to 90 degrees with the knee bent, then attempt to straighten the knee.',
        positive: 'Resistance and pain in the back or hamstring that prevents full knee extension. Usually bilateral.',
        mechanism: 'Extending the knee with the hip flexed stretches the lumbosacral nerve roots, which drags on inflamed meninges.',
      },
      brudzinski_sign: {
        how: 'With the patient supine and the chest still, passively flex the neck.',
        positive: 'Involuntary flexion of the hips and knees.',
        mechanism: 'Neck flexion stretches the inflamed meninges; the patient reflexly flexes the legs to relieve the tension.',
      },
      nuchal_rigidity:
        'Resistance to passive neck FLEXION specifically. Rotation and lateral flexion are typically preserved — that is what distinguishes meningism from cervical spine disease or arthritis, where all movements are restricted.',
      the_evidence_problem: {
        message:
          'In adult studies these signs have high specificity but LOW sensitivity — often only around 5–30% for Kernig and Brudzinski. Most patients with proven bacterial meningitis do NOT have them.',
        consequence: 'A negative examination must never delay lumbar puncture or antibiotics when meningitis is suspected clinically.',
      },
      who_they_fail_in: [
        'Infants — a bulging fontanelle, irritability, poor feeding, high-pitched cry and hypotonia matter far more than Kernig or Brudzinski, which are unreliable in this group.',
        'The elderly — may present with confusion alone and no neck stiffness.',
        'The immunosuppressed — blunted inflammatory response, so signs may be absent entirely.',
        'Deeply unconscious patients — signs may be lost.',
      ],
      other_causes_of_meningism: 'Subarachnoid haemorrhage (meningism from blood, not infection), tonsillitis and cervical lymphadenitis in children, pneumonia of the upper lobe, tetanus, and raised intracranial pressure.',
    },
    warnings: [
      'A negative Kernig and Brudzinski does NOT exclude meningitis. If you suspect it clinically, give antibiotics and proceed to lumbar puncture per protocol. Do not wait for signs.',
      'Do not delay antibiotics for a CT scan or a lumbar puncture in suspected bacterial meningitis. Antibiotics first when there is any delay.',
      'Neck stiffness with sudden severe headache is subarachnoid haemorrhage until excluded.',
      'A non-blanching rash with fever is meningococcal sepsis until proven otherwise — treat immediately.',
    ],
    limitations: ['Both signs have low sensitivity and were described in an era of untreated, advanced disease.'],
    cards: [
      { q: 'How do you elicit Kernig sign?', a: 'Hip flexed to 90 degrees, then try to extend the knee. Pain and resistance is positive.' },
      { q: 'How do you elicit Brudzinski sign?', a: 'Passively flex the neck. Involuntary hip and knee flexion is positive.' },
      { q: 'Does a negative Kernig exclude meningitis?', a: 'No. Sensitivity is low — most patients with bacterial meningitis do not have it.' },
      { q: 'What distinguishes meningism from cervical spine disease?', a: 'Meningism restricts neck FLEXION while rotation is preserved; spine disease restricts all movements.' },
      { q: 'Meningism in an infant — what do you look for instead?', a: 'Bulging fontanelle, irritability, poor feeding, high-pitched cry, hypotonia.' },
    ],
    checks: [
      'Antibiotics given without waiting for imaging or LP if meningitis suspected',
      'Rash examined for non-blanching lesions',
      'Neck flexion versus rotation distinguished',
      'Fontanelle checked in an infant',
      'Subarachnoid haemorrhage considered if sudden severe headache',
      'Senior informed',
    ],
  },

  {
    id: 'AS-SIGN-0003',
    type: 'stigmata',
    title: 'Lhermitte Sign — The Electric Shock Down the Spine',
    short: 'Lhermitte',
    summary:
      'A sudden electric-shock sensation running down the spine and into the limbs on flexing the neck. It indicates a lesion in the posterior columns of the cervical cord — most famously multiple sclerosis, but not only that.',
    domains: ['neurology'],
    intents: ['identify', 'examine'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['lhermitte phenomenon', 'barber chair phenomenon', 'lhermitte'],
    terms: ['lhermitte', 'electric shock', 'neck flexion', 'posterior column', 'multiple sclerosis', 'cervical cord', 'barber chair'],
    body: {
      what_it_is:
        'A brief, non-painful electric or buzzing sensation shooting from the neck down the spine, sometimes into the arms and legs, provoked by NECK FLEXION. Also called the barber chair phenomenon.',
      mechanism:
        'Demyelinated or irritated axons in the posterior columns of the cervical cord become mechanically sensitive. Stretching them on neck flexion generates spontaneous ectopic impulses, which the brain interprets as a shock travelling down the body.',
      causes: [
        'MULTIPLE SCLEROSIS — the classic association, and it may be the presenting symptom',
        'Cervical spondylotic myelopathy — common, and often the real cause in an older patient',
        'Subacute combined degeneration of the cord from vitamin B12 deficiency',
        'Cervical cord tumour or compression',
        'Radiation myelopathy after neck irradiation',
        'Chemotherapy — cisplatin',
        'Trauma, including whiplash',
      ],
      why_it_confuses: [
        'It is widely taught as "the multiple sclerosis sign", but in an older patient cervical spondylosis is statistically more likely.',
        'It is a SYMPTOM the patient reports, not a sign you elicit — although you can reproduce it by asking them to flex the neck.',
        'It is often confused with Uhthoff phenomenon, which is heat-related worsening of existing symptoms. Lhermitte is mechanical and momentary; Uhthoff is thermal and lasts as long as the temperature is raised.',
      ],
      what_to_do: 'Take a full neurological history, examine for posterior column signs (vibration and proprioception), check vitamin B12, and image the cervical cord with MRI.',
    },
    warnings: [
      'Lhermitte sign with progressive weakness, gait disturbance or sphincter symptoms suggests cord compression. That is a surgical emergency — image urgently.',
      'Do not assume multiple sclerosis. Exclude cervical compression and B12 deficiency, both of which are treatable.',
    ],
    limitations: ['Non-specific: it localises to the cervical posterior columns but does not name the pathology.'],
    cards: [
      { q: 'What movement provokes Lhermitte sign?', a: 'Neck flexion.' },
      { q: 'Where is the lesion?', a: 'Posterior columns of the cervical spinal cord.' },
      { q: 'Name three causes other than multiple sclerosis.', a: 'Cervical spondylotic myelopathy, B12 deficiency (subacute combined degeneration), radiation myelopathy or cord tumour.' },
      { q: 'How does Lhermitte differ from Uhthoff?', a: 'Lhermitte is a momentary shock on neck flexion (mechanical). Uhthoff is worsening of existing symptoms with heat (thermal).' },
    ],
    checks: ['Vibration and proprioception tested', 'Vitamin B12 checked', 'Cervical MRI arranged', 'Red flags for cord compression sought'],
  },

  {
    id: 'AS-SIGN-0004',
    type: 'mechanism',
    title: 'Uhthoff Phenomenon — Why Heat Makes Multiple Sclerosis Worse',
    short: 'Uhthoff',
    summary:
      'A temporary worsening of existing neurological symptoms when body temperature rises — a hot bath, exercise, fever, hot weather. It is not a relapse, and treating it as one leads to unnecessary steroids.',
    domains: ['neurology'],
    intents: ['identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['uhthoff phenomenon', 'uhthoff sign', 'heat sensitivity', 'uhthoff'],
    terms: ['uhthoff', 'heat', 'temperature', 'multiple sclerosis', 'pseudo relapse', 'hot bath', 'demyelination'],
    body: {
      what_it_is:
        'Transient worsening of pre-existing neurological symptoms when core temperature rises. Classically blurring of vision in an eye affected by previous optic neuritis, but any old symptom can re-emerge.',
      mechanism:
        'Demyelinated axons conduct with almost no safety margin. A rise in temperature shortens the duration of the sodium current and reduces the safety factor for conduction, so a partially demyelinated axon that just manages to conduct at 37 degrees fails at 38. Cooling restores conduction — which is why the symptoms resolve completely once the temperature falls.',
      key_features: [
        'Symptoms are OLD ones returning, not new ones.',
        'Onset is with the temperature rise and resolution is with cooling, typically within minutes to a day.',
        'There is NO new inflammation and no new lesion.',
      ],
      why_it_matters: {
        pseudo_relapse:
          'This is a PSEUDO-relapse. A true relapse requires new or worsening symptoms lasting more than 24 hours in the absence of fever or infection. Mistaking Uhthoff for a relapse leads to unnecessary steroid courses, and — worse — misses the infection that caused the fever.',
        the_practical_rule: 'A patient with multiple sclerosis who deteriorates should be screened for INFECTION, especially urinary tract infection, before anyone considers a relapse.',
      },
      triggers: 'Hot bath or shower, exercise, fever from any infection, hot weather, sauna, a heavy meal, menstrual cycle.',
      management: 'Cooling, treating any underlying infection, avoiding known triggers, and reassurance. Cooling garments and pre-cooling before exercise help some patients.',
      historical_note:
        'The hot bath test was once used to diagnose multiple sclerosis. It was abandoned because it is dangerous — it can precipitate severe transient deficits.',
    },
    warnings: [
      'A patient with multiple sclerosis who worsens is more likely to have an infection than a relapse. Screen for urinary tract infection first.',
      'Do not give steroids for a pseudo-relapse. Steroids in an untreated infection cause harm.',
      'The hot bath test must not be used diagnostically.',
    ],
    limitations: ['A clinical phenomenon with no confirmatory test. It is distinguished from relapse by history and by the absence of infection.'],
    cards: [
      { q: 'What is Uhthoff phenomenon?', a: 'Temporary worsening of EXISTING neurological symptoms when body temperature rises. It resolves on cooling.' },
      { q: 'Why does heat cause it?', a: 'Demyelinated axons conduct with almost no safety margin. Higher temperature shortens the sodium current and conduction fails.' },
      { q: 'Is it a relapse?', a: 'No — it is a pseudo-relapse. No new lesion, no new inflammation.' },
      { q: 'What must you look for in a person with MS who deteriorates?', a: 'Infection, especially urinary tract infection.' },
    ],
    checks: ['Temperature measured', 'Urine dipstick and infection screen done', 'Symptoms confirmed as old rather than new', 'Duration over 24 hours without fever established before calling it a relapse'],
  },

  {
    id: 'AS-SIGN-0005',
    type: 'mechanism',
    title: 'Raynaud Phenomenon — Primary Versus Secondary, and Why It Matters',
    short: 'Raynaud',
    summary:
      'Episodic, sharply demarcated colour change of the digits on cold or emotional stress — classically white, then blue, then red. The critical distinction is primary (benign) versus secondary (a marker of connective tissue disease).',
    domains: ['vascular', 'immunology', 'cardiovascular'],
    intents: ['identify', 'classify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['raynauds', 'raynaud disease', 'raynaud syndrome', 'raynaud phenomenon', 'reynolds', 'reynaud'],
    terms: ['raynaud', 'white blue red', 'triphasic', 'vasospasm', 'digital', 'scleroderma', 'nailfold capillaroscopy', 'cold'],
    body: {
      the_colour_sequence: {
        white_pallor: 'Vasospasm — the digit blanches, sharply demarcated. This phase must be present for a true diagnosis.',
        blue_cyanosis: 'Deoxygenated blood stagnates in the dilated capillaries and venules.',
        red_rubor: 'Reperfusion hyperaemia, often with throbbing pain and tingling as flow returns.',
        note: 'Not everyone shows all three. The WHITE phase with a sharp border is the essential feature.',
      },
      primary_raynaud: {
        who: 'Young women, onset in the teens or twenties, often a family history.',
        features: 'Symmetrical, both hands, NO tissue damage, no ulcers, normal nailfold capillaries, normal inflammatory markers, negative autoantibodies.',
        prognosis: 'Benign. Manage with warmth, gloves, smoking cessation and trigger avoidance; a calcium channel blocker such as nifedipine if severe.',
      },
      secondary_raynaud: {
        who: 'Onset after about 30, or a man, or asymmetrical.',
        red_flags: [
          'Digital ULCERS, pitting scars or gangrene',
          'Asymmetry, or involvement of the thumb',
          'Abnormal nailfold capillaries on capillaroscopy',
          'Positive antinuclear antibody or a specific antibody',
          'Raised inflammatory markers',
          'Other features: skin tightening, arthritis, dry eyes and mouth, muscle weakness, rash',
        ],
        causes: [
          'SYSTEMIC SCLEROSIS — Raynaud is the presenting feature in most patients and may precede other features by years',
          'Systemic lupus erythematosus, mixed connective tissue disease, Sjögren syndrome, dermatomyositis',
          'Vasculitis, cryoglobulinaemia',
          'Thoracic outlet syndrome, cervical rib',
          'Vibration white finger — occupational, from hand-held power tools',
          'Drugs: beta-blockers, ergot, some chemotherapy, sympathomimetics',
          'Hyperviscosity: polycythaemia, myeloma',
        ],
      },
      why_it_confuses: [
        'The name is frequently misspelled and mispronounced, which makes it hard to search for — this entry answers to several spellings.',
        'Simple cold hands are NOT Raynaud. The sharp demarcation and the white phase are what make it Raynaud.',
        'Acrocyanosis is persistent bluish discolouration without the triphasic change and without a white phase.',
        'Chilblains (pernio) are painful, itchy red-purple lesions after cold, and are a different entity.',
      ],
      investigation: 'Nailfold capillaroscopy, antinuclear antibody, extractable nuclear antigens, inflammatory markers, full blood count. Occupational and drug history.',
    },
    warnings: [
      'Digital ulceration or gangrene means SECONDARY Raynaud until proven otherwise. Refer urgently — critical digital ischaemia can lose a finger.',
      'New Raynaud in a man, or over the age of 30, or asymmetrical, warrants investigation for connective tissue disease.',
      'Beta-blockers can precipitate or worsen Raynaud. Review the drug chart.',
    ],
    limitations: ['Capillaroscopy requires expertise and is not universally available.'],
    cards: [
      { q: 'What is the essential phase for diagnosing Raynaud?', a: 'The white, sharply demarcated blanching phase. Not everyone has all three colours.' },
      { q: 'Name four red flags for secondary Raynaud.', a: 'Digital ulcers or scars, asymmetry or thumb involvement, abnormal nailfold capillaries, positive autoantibodies. Also onset after 30, or in a man.' },
      { q: 'Which connective tissue disease is Raynaud most associated with?', a: 'Systemic sclerosis — it is usually the presenting feature and can precede other signs by years.' },
      { q: 'Which common drug class worsens Raynaud?', a: 'Beta-blockers.' },
    ],
    checks: ['White phase and demarcation confirmed', 'Digits examined for ulcers and pitting scars', 'Nailfold capillaries examined', 'Autoantibodies sent if red flags', 'Occupational vibration history taken', 'Drug chart reviewed', 'Smoking cessation advised'],
  },

  {
    id: 'AS-SIGN-0006',
    type: 'guideline',
    title: 'Multiple Sclerosis — Patterns, Diagnosis and the Common Traps',
    short: 'Multiple sclerosis',
    summary:
      'Demyelination of the central nervous system separated in TIME and in SPACE. The diagnosis rests on that separation, and the commonest error is diagnosing it from a single episode or from imaging alone.',
    domains: ['neurology'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['ms', 'disseminated sclerosis', 'demyelination', 'multiple sclerosis'],
    ambiguous: ['ms'],
    terms: ['multiple sclerosis', 'ms', 'demyelination', 'optic neuritis', 'oligoclonal bands', 'mcdonald criteria', 'relapsing remitting', 'internuclear ophthalmoplegia'],
    body: {
      the_core_idea:
        'Immune-mediated demyelination of the CENTRAL nervous system — brain, optic nerve and spinal cord. The peripheral nervous system is spared, which is why MS never causes a glove-and-stocking sensory loss.',
      dissemination:
        'Diagnosis requires lesions separated in SPACE (different parts of the CNS) and in TIME (occurring at different times). This is the essence of the McDonald criteria; MRI and cerebrospinal fluid can substitute for a second clinical attack.',
      classic_presentations: [
        'OPTIC NEURITIS — painful loss of vision in one eye, worse on eye movement, with a relative afferent pupillary defect and often a normal-looking disc early ("the patient sees nothing and the doctor sees nothing")',
        'INTERNUCLEAR OPHTHALMOPLEGIA — failure of adduction of one eye with nystagmus of the abducting eye, from a lesion in the medial longitudinal fasciculus. Bilateral INO in a young person is highly suggestive of MS.',
        'Transverse myelitis — sensory level, weakness, bladder involvement',
        'Sensory disturbance, LHERMITTE sign',
        'Cerebellar signs, ataxia, intention tremor',
        'Bladder dysfunction and fatigue — often the most disabling symptoms in practice',
      ],
      disease_patterns: {
        relapsing_remitting: 'About 85% at onset. Discrete attacks with partial or complete recovery.',
        secondary_progressive: 'Many relapsing-remitting patients eventually convert to steady progression.',
        primary_progressive: 'About 10–15%. Steady decline from the start, more often in older patients and men, often a spinal cord picture.',
        clinically_isolated_syndrome: 'A first episode. Not yet MS — but MRI predicts who will convert.',
      },
      investigation: [
        'MRI brain and spinal cord with contrast — periventricular, juxtacortical, infratentorial and spinal cord lesions. Dawson fingers are perpendicular periventricular lesions.',
        'Cerebrospinal fluid — OLIGOCLONAL BANDS present in CSF but NOT in serum. Bands in both means a systemic process, not MS.',
        'Visual evoked potentials — delayed latency with preserved waveform indicates previous demyelination.',
        'Blood tests to exclude mimics: B12, thyroid, autoantibodies, HIV, syphilis, aquaporin-4 antibody.',
      ],
      the_mimics_that_matter: [
        'NEUROMYELITIS OPTICA (aquaporin-4 antibody) — longitudinally extensive cord lesions and severe optic neuritis. Critical to distinguish, because some MS drugs make it worse.',
        'B12 deficiency — treatable, and can look identical',
        'Systemic lupus erythematosus, sarcoidosis, Behçet disease',
        'HIV, syphilis, Lyme disease',
        'Cervical spondylotic myelopathy',
        'Small-vessel ischaemic change on MRI in an older patient — commonly over-read as demyelination',
      ],
      why_it_confuses: [
        'White matter lesions on MRI are extremely common with age and migraine. Imaging alone does not diagnose MS.',
        'Uhthoff phenomenon is mistaken for a relapse, leading to unnecessary steroids.',
        'A relapse is defined as new or worsening symptoms for more than 24 hours WITHOUT fever or infection. Screen for infection first.',
        'MS is a CNS disease. Peripheral findings — absent reflexes, glove-and-stocking loss — point elsewhere.',
      ],
    },
    warnings: [
      'Do not diagnose MS on MRI alone. White matter lesions are common and non-specific.',
      'Exclude neuromyelitis optica before starting disease-modifying therapy — some MS treatments worsen it severely.',
      'Screen for infection before treating an apparent relapse. Infection-driven pseudo-relapse is common.',
      'Exclude vitamin B12 deficiency in every case. It is treatable and mimics MS closely.',
    ],
    limitations: ['Diagnostic criteria are revised periodically. Confirm the current version in use locally.'],
    cards: [
      { q: 'What two separations define MS?', a: 'Dissemination in space and dissemination in time.' },
      { q: 'What is internuclear ophthalmoplegia?', a: 'Failure of adduction of one eye with nystagmus of the abducting eye, from a medial longitudinal fasciculus lesion. Bilateral in a young person suggests MS.' },
      { q: 'What CSF finding supports MS?', a: 'Oligoclonal bands present in CSF but absent in serum.' },
      { q: 'Which mimic must be excluded before disease-modifying therapy?', a: 'Neuromyelitis optica — aquaporin-4 antibody. Some MS drugs worsen it.' },
      { q: 'Definition of a relapse?', a: 'New or worsening symptoms lasting more than 24 hours in the absence of fever or infection.' },
    ],
    checks: ['Dissemination in space and time documented', 'MRI brain and cord done', 'CSF oligoclonal bands sent', 'B12, thyroid, HIV, syphilis, autoantibodies sent', 'Aquaporin-4 antibody sent', 'Infection excluded before treating a relapse'],
    related: ['lhermitte_sign_the_electric_shock_down_the_spine', 'uhthoff_phenomenon_why_heat_makes_multiple_sclerosis_worse'],
  },
];
