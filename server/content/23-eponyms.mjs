/**
 * Eponym disambiguation.
 *
 * `charcot marie tooth` and `charcot joint` both resolved onto "Triads and
 * Tetrads", and `bell phenomenon` onto Lhermitte sign — confidently wrong,
 * which is worse than a gap. One name attached to several unrelated entities
 * needs an entry whose job is to separate them.
 */

export default [
  {
    id: 'AS-EPON-0001',
    type: 'eponym',
    title: 'Charcot — Four Different Things With the Same Name',
    short: 'Charcot (disambiguation)',
    summary:
      'Jean-Martin Charcot attached his name to a triad in CHOLANGITIS, a different triad in MULTIPLE SCLEROSIS, a destroyed neuropathic JOINT, and an inherited NEUROPATHY. They share nothing but the name, and two of them are triads — which is exactly how they get confused.',
    domains: ['neurology', 'general_surgery', 'orthopaedics'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'charcot', 'charcot triad', 'charcot joint', 'charcot foot', 'charcot arthropathy',
      'charcot neuroarthropathy', 'charcot marie tooth', 'cmt', 'charcot marie tooth disease',
      'charcot bouchard', 'reynolds pentad',
    ],
    terms: [
      'charcot', 'triad', 'cholangitis', 'multiple sclerosis', 'neuropathic joint', 'neuroarthropathy',
      'charcot foot', 'marie tooth', 'cmt', 'hereditary neuropathy', 'peroneal muscular atrophy',
      'charcot bouchard aneurysm', 'nystagmus', 'intention tremor', 'scanning speech',
      'reynolds pentad', 'eponym',
    ],
    confirm_locally: true,
    body: {
      the_four: {
        one_charcot_triad_of_cholangitis: {
          what: 'FEVER (often with rigors) + JAUNDICE + RIGHT UPPER QUADRANT PAIN.',
          means: 'An obstructed biliary tree that has become infected.',
          why_it_matters: 'Antibiotics alone do not treat it — the obstruction must be DRAINED. REYNOLDS PENTAD adds SHOCK and ALTERED MENTAL STATUS, indicating suppurative cholangitis with a high mortality and the need for drainage the same day.',
          note: 'This is the one people usually mean when they say "Charcot triad" unqualified — but not always, which is the problem.',
        },
        two_charcot_neurological_triad_of_multiple_sclerosis: {
          what: 'NYSTAGMUS + INTENTION TREMOR + SCANNING (staccato) SPEECH.',
          means: 'A historical description of brainstem and cerebellar involvement in advanced multiple sclerosis.',
          why_it_matters:
            'It is of HISTORICAL interest only and must NOT be used diagnostically. Modern diagnosis uses the McDonald criteria — dissemination in space and time. A patient with early MS will not have this triad, and waiting for it means waiting years.',
          the_confusion: 'Two different Charcot triads exist. If someone says "Charcot triad" in a neurology context they may mean this one, and in a surgical context the cholangitis one. ALWAYS clarify which.',
        },
        three_charcot_joint: {
          what: 'A NEUROPATHIC ARTHROPATHY — progressive destruction of a joint that has lost its protective PAIN sensation.',
          mechanism: 'Without pain feedback the patient keeps loading a damaged joint. Repeated unnoticed microtrauma plus inflammatory bone resorption destroys and deforms it.',
          commonest_setting: 'The FOOT in DIABETIC neuropathy ("Charcot foot"). Historically tabes dorsalis (syphilis) and syringomyelia; also leprosy, which matters in endemic regions.',
          the_presentation_that_gets_missed:
            'A HOT, SWOLLEN, RED foot in a person with neuropathy — often with LITTLE OR NO PAIN, and frequently NO history of injury. It looks exactly like CELLULITIS or gout and is routinely treated as infection while the joint collapses.',
          the_discriminator: 'ELEVATE the limb for several minutes. In acute Charcot the redness and swelling substantially SETTLE; in cellulitis they do not. A normal or near-normal white count and CRP in a florid-looking foot also point away from infection.',
          why_urgency_matters:
            'The acute phase is the window. IMMEDIATE OFFLOADING — total contact casting or equivalent, non-weight-bearing — can prevent permanent deformity. Weeks of "treating cellulitis" produce a rocker-bottom foot, ulceration and eventually amputation. Suspicion alone justifies offloading and urgent specialist referral. X-rays are often NORMAL early, so a normal film does not exclude it.',
        },
        four_charcot_marie_tooth_disease: {
          what: 'The commonest INHERITED peripheral neuropathy — a hereditary motor and sensory neuropathy. Named after Charcot, Pierre Marie and Howard Henry Tooth. "Tooth" is a surname, not a dental reference.',
          features: 'Distal weakness and wasting beginning in the feet — the classic "INVERTED CHAMPAGNE BOTTLE" legs — PES CAVUS (high arch), hammer toes, foot drop with a high-stepping gait, absent ankle reflexes, and distal sensory loss. Onset usually in the first two decades, slowly progressive.',
          why_it_matters_practically:
            'It is a cause of secondary Charcot JOINT (the sensory loss), and of recurrent ankle injury and ulceration. Management is largely orthotic, physiotherapy and foot protection. Certain drugs are relatively contraindicated because they are neurotoxic — vincristine most notably — and this must be known before prescribing chemotherapy.',
        },
      },
      also_bearing_his_name: 'CHARCOT-BOUCHARD ANEURYSMS — microaneurysms of small penetrating cerebral arteries in chronic hypertension, the classic substrate for deep intracerebral haemorrhage in the basal ganglia, thalamus, pons and cerebellum.',
      how_to_avoid_the_confusion:
        'If a colleague says "Charcot", ask which. In a jaundiced febrile patient it is the biliary triad. In a hot swollen insensate diabetic foot it is the joint. In a young patient with pes cavus and foot drop it is the inherited neuropathy. In an MS discussion it is a historical triad you should not be using.',
    },
    warnings: [
      'A hot swollen red foot in a neuropathic patient is Charcot arthropathy until proven otherwise, even without pain and even without injury. It is repeatedly mistaken for cellulitis.',
      'Early X-rays are often NORMAL in acute Charcot foot. A normal film does not exclude it — offload on suspicion.',
      'Delay in offloading costs the foot. The acute phase is the window to prevent permanent deformity.',
      'Charcot triad of MS is historical and must not be used diagnostically — use the McDonald criteria.',
      '"Charcot triad" is ambiguous. Clarify whether cholangitis or MS is meant.',
      'Cholangitis needs DRAINAGE, not antibiotics alone. Reynolds pentad means today.',
      'Vincristine and other neurotoxic drugs need specific caution in Charcot-Marie-Tooth disease.',
    ],
    limitations: ['Offloading technique, casting protocols and referral pathways are service-specific.'],
    cards: [
      { q: 'Charcot triad of cholangitis?', a: 'Fever with rigors, jaundice, RUQ pain. Reynolds pentad adds shock and altered mental status.' },
      { q: 'Charcot neurological triad?', a: 'Nystagmus, intention tremor, scanning speech — historical MS description, not diagnostic.' },
      { q: 'What is a Charcot joint?', a: 'Neuropathic arthropathy — a joint destroyed because protective pain sensation is lost.' },
      { q: 'How do you distinguish acute Charcot foot from cellulitis?', a: 'Elevate the limb: Charcot redness and swelling largely settle, cellulitis does not.' },
      { q: 'Does a normal X-ray exclude acute Charcot foot?', a: 'No — films are often normal early. Offload on suspicion.' },
      { q: 'What is Charcot-Marie-Tooth?', a: 'The commonest inherited neuropathy — pes cavus, foot drop, inverted champagne bottle legs. "Tooth" is a surname.' },
      { q: 'Which drug needs caution in CMT?', a: 'Vincristine, and other neurotoxic agents.' },
      { q: 'What are Charcot-Bouchard aneurysms?', a: 'Hypertensive microaneurysms causing deep intracerebral haemorrhage.' },
    ],
    checks: ['Which "Charcot" is meant has been clarified', 'Neuropathic foot elevated to distinguish from cellulitis', 'Offloading started on suspicion, not after imaging', 'Cholangitis drainage arranged, not antibiotics alone', 'McDonald criteria used for MS, not the historical triad'],
    related: ['mcdonald_criteria_diagnosing_multiple_sclerosis_by_dissemination_in_space_and_time'],
  },

  {
    id: 'AS-EPON-0002',
    type: 'eponym',
    title: 'Bell — Palsy, Phenomenon, and Why One Is Not Evidence of the Other',
    short: 'Bell (disambiguation)',
    summary:
      'Bell PALSY is an idiopathic lower motor neurone facial weakness. Bell PHENOMENON is the normal upward eye roll on closing the lids, visible only when closure fails. The phenomenon is a NORMAL reflex — seeing it does not confirm the palsy.',
    domains: ['neurology', 'ophthalmology'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['bell palsy', 'bells palsy', 'bell phenomenon', 'bell sign', 'facial palsy', 'facial nerve palsy', 'seventh nerve palsy'],
    terms: [
      'bell', 'bell palsy', 'bell phenomenon', 'facial nerve', 'seventh nerve', 'cn vii',
      'lower motor neurone', 'upper motor neurone', 'forehead sparing', 'ramsay hunt',
      'lagophthalmos', 'house brackmann', 'eponym',
    ],
    confirm_locally: true,
    body: {
      bell_palsy: {
        what: 'An acute, IDIOPATHIC, LOWER motor neurone palsy of the facial nerve (CN VII). A diagnosis of exclusion.',
        the_defining_finding:
          'The FOREHEAD IS INVOLVED — the patient cannot wrinkle it or raise the eyebrow on the affected side. This is the single most important thing on the face. The forehead has BILATERAL upper motor neurone supply, so an UPPER motor neurone lesion (a stroke) SPARES it, while a lower motor neurone lesion does not. Forehead sparing points to a central cause and changes the pathway entirely.',
        other_features: 'Sudden onset over hours to days, often with pain behind the ear, altered taste on the anterior two-thirds of the tongue, hyperacusis, and reduced tear production.',
        what_must_be_excluded: [
          'STROKE — forehead SPARED, and look for other neurological signs. This is the critical discrimination and it is made at the bedside in seconds.',
          'RAMSAY HUNT SYNDROME — herpes zoster of the geniculate ganglion. Look INSIDE the ear canal and at the palate for VESICLES, and ask about severe pain and vertigo or hearing loss. It has a worse prognosis and different treatment, and the vesicles are missed by not looking in the canal.',
          'LYME disease, particularly where endemic and especially with BILATERAL palsy.',
          'Otitis media or cholesteatoma, parotid tumour (feel the parotid), trauma, sarcoidosis, HIV seroconversion, and Guillain-Barré or its Miller Fisher variant if BILATERAL.',
          'BILATERAL facial palsy is NOT Bell palsy until proven otherwise — it demands a search for Lyme, sarcoidosis, Guillain-Barré and HIV.',
        ],
        the_eye_is_the_priority:
          'Incomplete closure (LAGOPHTHALMOS) with reduced tearing leaves the CORNEA exposed. Corneal ulceration and scarring is the main preventable complication and can cost sight. Lubricating drops by day, ointment and TAPING or a patch at night, and urgent ophthalmology review if the eye becomes red or painful or vision changes.',
        treatment_principle: 'Corticosteroids started EARLY improve recovery, and the benefit falls with delay — so this is time-sensitive. Antivirals are added in some protocols, particularly where zoster is suspected. Follow local guidance for agent, dose and timing.',
      },
      bell_phenomenon: {
        what: 'The normal, protective REFLEX upward and outward rotation of the eyeball when the eyelids close.',
        why_it_becomes_visible: 'It happens in everyone but is hidden behind closed lids. In facial weakness the lids do not close fully, so the upward roll becomes VISIBLE through the open gap.',
        the_error_to_avoid:
          'Because it is seen in facial palsy, it is often described as a SIGN of it. It is not. It is a NORMAL reflex being revealed by the weakness. Its ABSENCE in a patient with lagophthalmos is arguably the more worrying finding, because the cornea then has no protection at all — an eye that cannot close AND does not roll up is at high risk and needs urgent ophthalmic attention.',
      },
      the_other_bells_worth_knowing: 'BELL-MAGENDIE law — anterior spinal roots are motor, posterior roots are sensory. Charles Bell also gave his name to the long thoracic nerve palsy causing winged scapula, sometimes called Bell nerve palsy.',
    },
    warnings: [
      'Check the FOREHEAD. Forehead sparing means an upper motor neurone lesion — treat as a stroke, not Bell palsy.',
      'Look inside the ear canal and at the palate for vesicles. Ramsay Hunt has a worse prognosis and different treatment.',
      'BILATERAL facial palsy is not Bell palsy — investigate for Lyme, sarcoidosis, Guillain-Barré and HIV.',
      'Protect the cornea. Lagophthalmos with reduced tearing causes ulceration and can cost sight.',
      'Corticosteroid benefit falls with delay — this is time-sensitive.',
      'Bell phenomenon is a NORMAL reflex made visible, not a sign of Bell palsy. Its ABSENCE with lagophthalmos is the concerning finding.',
      'Feel the parotid. A parotid tumour causes facial palsy and is missed by not palpating.',
    ],
    limitations: ['Steroid and antiviral regimens, and grading scales such as House-Brackmann, are protocol-specific. No doses are given here.'],
    cards: [
      { q: 'What single finding separates Bell palsy from a stroke?', a: 'Forehead involvement. Bilateral UMN supply means a stroke spares the forehead.' },
      { q: 'What is Ramsay Hunt syndrome?', a: 'Zoster of the geniculate ganglion — look for vesicles in the ear canal and palate. Worse prognosis.' },
      { q: 'Bilateral facial palsy — what now?', a: 'Not Bell palsy. Investigate Lyme, sarcoidosis, Guillain-Barré and HIV.' },
      { q: 'What is the main preventable complication?', a: 'Corneal exposure and ulceration from lagophthalmos.' },
      { q: 'What is Bell phenomenon?', a: 'The normal upward eye roll on lid closure — visible only because closure is incomplete.' },
      { q: 'Why is an ABSENT Bell phenomenon worrying?', a: 'An eye that cannot close and does not roll up has no corneal protection at all.' },
      { q: 'What is the Bell-Magendie law?', a: 'Anterior spinal roots are motor; posterior roots are sensory.' },
    ],
    checks: ['Forehead tested', 'Ear canal and palate inspected for vesicles', 'Parotid palpated', 'Bilateral case investigated for secondary causes', 'Eye protection prescribed and explained', 'Steroids considered early'],
  },
];
