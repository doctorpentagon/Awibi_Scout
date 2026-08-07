/**
 * Brainstem and cord syndromes, tracts, and the -itis / -osis / -oma family
 * that generates most of the confusion in neurology vocabulary.
 */

export default [
  {
    id: 'AS-NEUR-0001',
    type: 'named_knowledge',
    title: 'Bulbar and Pseudobulbar Palsy — What "Bulb" Means and What "Pseudo" Means',
    short: 'Bulbar palsy',
    summary:
      'The "bulb" is the medulla oblongata. Bulbar palsy is a LOWER motor neurone lesion of its nerves; pseudobulbar palsy is an UPPER motor neurone lesion of the pathways to them. Same swallowing and speech problem, opposite signs, opposite causes.',
    domains: ['neurology'],
    intents: ['classify', 'examine'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['bulbar palsy', 'pseudobulbar palsy', 'bulbar', 'pseudobulbar', 'bulbar weakness'],
    terms: ['bulbar', 'pseudobulbar', 'medulla', 'dysarthria', 'dysphagia', 'tongue fasciculation', 'emotional lability', 'jaw jerk', 'donald duck speech'],
    body: {
      what_bulb_means:
        'The medulla oblongata was called the "bulb" because of its swollen, bulb-like shape where the spinal cord widens into the brainstem. The nuclei of cranial nerves IX, X, XI and XII sit here, and they control swallowing, phonation and tongue movement. "Bulbar" therefore means "to do with the medulla and its nerves".',
      what_pseudo_means:
        'Pseudo means false. The patient LOOKS as if the bulb is damaged — the same slurred speech and swallowing failure — but the medulla and its nerves are intact. The lesion is ABOVE, in the corticobulbar tracts descending from the cortex. It is an upper motor neurone version of the same clinical picture.',
      bulbar_palsy: {
        lesion: 'LOWER motor neurone — the nuclei in the medulla or the nerves themselves (IX, X, XI, XII)',
        tongue: 'WASTED and FASCICULATING, flaccid',
        speech: 'Nasal, quiet, indistinct — like a wet, weak voice',
        jaw_jerk: 'ABSENT or normal',
        gag_reflex: 'Absent',
        emotion: 'Normal',
        causes: 'Motor neurone disease, Guillain-Barré syndrome, myasthenia gravis, poliomyelitis, brainstem stroke affecting the medulla, syringobulbia, botulism, diphtheria',
      },
      pseudobulbar_palsy: {
        lesion: 'UPPER motor neurone — BILATERAL corticobulbar tract lesions. Bilateral is essential, because these nuclei have bilateral cortical supply.',
        tongue: 'SMALL, STIFF and spastic — moves slowly, no wasting, no fasciculation',
        speech: 'Strained, strangled, "hot potato" or Donald Duck speech',
        jaw_jerk: 'BRISK or exaggerated — this is the single most useful discriminator',
        gag_reflex: 'Exaggerated',
        emotion: 'EMOTIONAL LABILITY — inappropriate, uncontrollable laughing or crying out of keeping with mood. Very characteristic.',
        causes: 'Bilateral strokes (especially lacunar), multiple sclerosis, motor neurone disease, high brainstem tumour, severe traumatic brain injury, progressive supranuclear palsy',
      },
      the_discriminator:
        'The JAW JERK. Absent or normal in bulbar (lower motor neurone); brisk in pseudobulbar (upper motor neurone). Add the tongue: wasted and fasciculating is bulbar; small, stiff and slow is pseudobulbar.',
      motor_neurone_disease_note:
        'Motor neurone disease is the classic cause of BOTH at once, because it affects upper and lower motor neurones simultaneously. A wasted fasciculating tongue with a brisk jaw jerk in the same patient is highly suggestive of it.',
      why_it_matters_practically:
        'Both cause dysphagia and both risk ASPIRATION. Whatever the level of the lesion, the immediate management is the same: keep the patient nil by mouth until a swallow assessment is done, and consider aspiration pneumonia in any deterioration.',
    },
    warnings: [
      'Both carry a high risk of aspiration. Keep nil by mouth until a formal swallow assessment. Aspiration pneumonia is the usual cause of death in these patients.',
      'Pseudobulbar palsy requires BILATERAL upper motor neurone lesions. A unilateral lesion does not produce it, because the supply is bilateral.',
      'Sudden-onset bulbar symptoms may be brainstem stroke — a time-critical emergency.',
    ],
    limitations: ['Mixed pictures are common, particularly in motor neurone disease.'],
    cards: [
      { q: 'What does "bulb" refer to?', a: 'The medulla oblongata, which houses the nuclei of cranial nerves IX, X, XI and XII.' },
      { q: 'What does "pseudo" mean here?', a: 'The medulla is intact — the lesion is above it, in the corticobulbar tracts. It only looks like a bulbar palsy.' },
      { q: 'Single best discriminating sign?', a: 'The jaw jerk. Absent or normal in bulbar; brisk in pseudobulbar.' },
      { q: 'Tongue in each?', a: 'Bulbar: wasted and fasciculating. Pseudobulbar: small, stiff and spastic.' },
      { q: 'Which produces emotional lability?', a: 'Pseudobulbar palsy.' },
      { q: 'Why does pseudobulbar palsy need bilateral lesions?', a: 'The bulbar nuclei receive bilateral corticobulbar supply, so one side alone can compensate.' },
    ],
    checks: ['Nil by mouth until swallow assessed', 'Jaw jerk tested', 'Tongue examined for wasting and fasciculation', 'Speech quality described', 'Aspiration risk documented', 'Stroke considered if sudden onset'],
  },

  {
    id: 'AS-NEUR-0002',
    type: 'named_knowledge',
    title: 'Wallenberg Syndrome — Lateral Medullary Stroke',
    short: 'Wallenberg',
    summary:
      'Occlusion of the posterior inferior cerebellar artery or vertebral artery. The classic crossed sensory loss — pain and temperature lost on the FACE on one side and the BODY on the other — with no limb weakness at all.',
    domains: ['neurology', 'emergency_medicine'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['lateral medullary syndrome', 'pica syndrome', 'posterior inferior cerebellar artery syndrome', 'wallenberg'],
    terms: ['wallenberg', 'lateral medullary', 'pica', 'crossed sensory loss', 'horner', 'vertigo', 'dysphagia', 'brainstem stroke'],
    body: {
      vessel: 'Vertebral artery, or its branch the posterior inferior cerebellar artery (PICA), supplying the LATERAL medulla.',
      why_no_weakness:
        'The corticospinal tract runs in the MEDIAL medulla (the pyramids). A lateral medullary infarct spares it entirely. That is why a patient can have a devastating brainstem stroke with completely normal limb power — and why it is so often missed.',
      the_crossed_sensory_loss: {
        face: 'IPSILATERAL loss of pain and temperature — the spinal trigeminal nucleus and tract, which is on the same side.',
        body: 'CONTRALATERAL loss of pain and temperature — the spinothalamic tract, which has already crossed in the cord.',
        significance: 'Crossed sensory loss is the signature of a brainstem lesion. Nothing in the hemispheres or cord produces it.',
      },
      other_features: [
        'IPSILATERAL HORNER SYNDROME — ptosis, miosis, anhidrosis, from the descending sympathetic fibres',
        'Ipsilateral cerebellar signs — ataxia, falling toward the side of the lesion, nystagmus',
        'Severe VERTIGO, nausea and vomiting — vestibular nuclei',
        'DYSPHAGIA and hoarseness with an ipsilateral absent gag — nucleus ambiguus (IX and X)',
        'Hiccups — characteristic and often intractable',
        'Loss of taste in some cases',
      ],
      mnemonic_for_the_structures:
        'Lateral medulla contains: spinal trigeminal nucleus (face pain/temp), spinothalamic tract (body pain/temp), nucleus ambiguus (swallow), vestibular nuclei (vertigo), sympathetic fibres (Horner), inferior cerebellar peduncle (ataxia).',
      why_it_confuses: [
        'Normal limb power reassures the inexperienced. It should not — this is a brainstem stroke.',
        'The presentation of vertigo and vomiting is routinely mistaken for a labyrinthitis or gastroenteritis. Vertigo with ANY other neurological sign is a stroke until proven otherwise.',
        'Medial medullary syndrome is the opposite: it DOES cause contralateral limb weakness plus ipsilateral tongue deviation, and spares pain and temperature on the face.',
      ],
      management: 'Treat as an acute stroke on the local pathway. Nil by mouth until swallow assessed — aspiration is the main early killer. Assess for vertebral artery dissection, especially in a younger patient or after neck trauma or manipulation.',
    },
    warnings: [
      'Acute vertigo with any other neurological sign — diplopia, dysarthria, dysphagia, ataxia, Horner syndrome, crossed sensory loss — is a posterior circulation stroke until proven otherwise. Do not diagnose labyrinthitis.',
      'A normal CT head does not exclude a posterior fossa stroke. CT is poor in the posterior fossa; MRI is needed.',
      'Keep nil by mouth until swallowing is formally assessed. Aspiration is the main early cause of death.',
      'Consider vertebral artery dissection in a young patient, or after neck trauma or manipulation.',
    ],
    limitations: ['Presentations are frequently incomplete; not every feature is present in every patient.'],
    cards: [
      { q: 'Which artery is occluded in Wallenberg syndrome?', a: 'Vertebral artery or PICA, supplying the lateral medulla.' },
      { q: 'Why is there no limb weakness?', a: 'The corticospinal tract runs in the MEDIAL medulla and is spared by a lateral infarct.' },
      { q: 'Describe the crossed sensory loss.', a: 'Pain and temperature lost on the IPSILATERAL face and the CONTRALATERAL body.' },
      { q: 'Which pupillary syndrome accompanies it?', a: 'Ipsilateral Horner syndrome — ptosis, miosis, anhidrosis.' },
      { q: 'Vertigo plus dysphagia plus ataxia — what must you exclude?', a: 'Posterior circulation stroke. Not labyrinthitis.' },
    ],
    checks: ['Stroke pathway activated', 'Nil by mouth until swallow assessed', 'MRI arranged (CT is unreliable in the posterior fossa)', 'Horner syndrome looked for', 'Crossed sensory loss tested', 'Dissection considered'],
    related: ['acute_stroke_recognition_and_hyperacute_pathway'],
  },

  {
    id: 'AS-NEUR-0003',
    type: 'atlas',
    title: 'Spinal Tracts — Ascending and Descending, and Their Brainstem Course',
    short: 'Spinal tracts',
    summary:
      'Three tracts explain almost every cord and brainstem localisation: the dorsal columns, the spinothalamic tract and the corticospinal tract. What matters is WHERE each one crosses, because that is what makes a lesion ipsilateral or contralateral.',
    domains: ['neurology', 'anatomy'],
    intents: ['identify', 'revise'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['ascending tracts', 'descending tracts', 'dorsal columns', 'spinothalamic', 'corticospinal', 'pyramidal tract', 'spinal cord tracts'],
    terms: ['tract', 'ascending', 'descending', 'dorsal column', 'spinothalamic', 'corticospinal', 'decussation', 'brown sequard', 'medial lemniscus', 'pyramid'],
    body: {
      the_rule_that_explains_everything:
        'A tract produces contralateral signs BELOW where it crosses and ipsilateral signs ABOVE where it crosses. Learn the crossing point of each tract and every localisation follows.',
      dorsal_columns: {
        carries: 'Fine touch, vibration, proprioception, two-point discrimination',
        spinal_course: 'Enters the cord and ascends on the SAME side, in the posterior columns. Gracile fasciculus medially (legs), cuneate laterally (arms).',
        where_it_crosses: 'In the MEDULLA, at the nucleus gracilis and cuneatus. It then becomes the MEDIAL LEMNISCUS and ascends to the thalamus.',
        brainstem_part: 'Medial lemniscus — runs medially through medulla, pons and midbrain.',
        lesion_effect: 'Cord lesion → IPSILATERAL loss of vibration and proprioception below. Brainstem lesion above the crossing → CONTRALATERAL loss.',
        clinical: 'Subacute combined degeneration (B12), tabes dorsalis, cord compression, MS.',
      },
      spinothalamic_tract: {
        carries: 'Pain, temperature, crude touch',
        spinal_course: 'Synapses in the dorsal horn, then crosses within ONE OR TWO SEGMENTS in the anterior white commissure, and ascends contralaterally.',
        where_it_crosses: 'In the SPINAL CORD, at or near the level of entry.',
        brainstem_part: 'Spinal lemniscus, running LATERALLY through the brainstem — which is why it is hit in the LATERAL medullary (Wallenberg) syndrome.',
        lesion_effect: 'Cord lesion → CONTRALATERAL loss of pain and temperature, starting a segment or two below the lesion.',
        clinical: 'Syringomyelia classically damages the crossing fibres, producing a "cape" distribution of dissociated sensory loss with preserved dorsal column function.',
      },
      corticospinal_tract: {
        carries: 'Voluntary motor command',
        course: 'From the motor cortex, through the internal capsule and cerebral peduncle, into the PYRAMIDS of the MEDULLA.',
        where_it_crosses: 'At the PYRAMIDAL DECUSSATION, in the LOWER MEDULLA — about 85% crosses to become the lateral corticospinal tract; the remainder stays as the anterior corticospinal tract.',
        brainstem_part: 'Runs in the medial medulla (the pyramids) — which is why the MEDIAL medullary syndrome causes weakness and the LATERAL one does not.',
        lesion_effect: 'Above the decussation → CONTRALATERAL weakness. Below it, in the cord → IPSILATERAL weakness.',
      },
      brown_sequard_syndrome: {
        what: 'Hemisection of the cord. It is the perfect illustration of the crossing rule.',
        findings: [
          'IPSILATERAL loss of motor power (corticospinal — crossed higher up, in the medulla)',
          'IPSILATERAL loss of vibration and proprioception (dorsal columns — cross in the medulla)',
          'CONTRALATERAL loss of pain and temperature (spinothalamic — crossed in the cord)',
        ],
        memory: 'Same side: power and position. Opposite side: pain and temperature.',
      },
      why_it_confuses: [
        'Students learn "the tracts cross" without learning WHERE, so they cannot predict the side.',
        'Dorsal columns and corticospinal both cross in the MEDULLA; spinothalamic crosses in the CORD. That single difference generates Brown-Séquard.',
        'The names change at the crossing point — dorsal columns become the medial lemniscus, spinothalamic becomes the spinal lemniscus. It is the same pathway with a new name.',
      ],
    },
    warnings: ['A sensory LEVEL on the trunk is a cord lesion until proven otherwise. Image urgently — cord compression is time-critical.'],
    limitations: ['Simplified. Other tracts (spinocerebellar, rubrospinal, reticulospinal) contribute to clinical pictures.'],
    cards: [
      { q: 'Where does the spinothalamic tract cross?', a: 'In the spinal cord, within one or two segments of entry.' },
      { q: 'Where do the dorsal columns cross?', a: 'In the medulla, at the nucleus gracilis and cuneatus, becoming the medial lemniscus.' },
      { q: 'Where does the corticospinal tract cross?', a: 'At the pyramidal decussation in the lower medulla.' },
      { q: 'Brown-Séquard findings?', a: 'Ipsilateral weakness and loss of vibration and proprioception; contralateral loss of pain and temperature.' },
      { q: 'Why does lateral medullary stroke spare power?', a: 'The corticospinal tract runs in the MEDIAL medulla, in the pyramids.' },
    ],
    checks: ['Sensory level sought', 'Vibration and proprioception tested separately from pain and temperature', 'Both sides compared', 'Urgent imaging if a level is found'],
    related: ['wallenberg_syndrome_lateral_medullary_stroke'],
  },

  {
    id: 'AS-NEUR-0004',
    type: 'definition',
    title: 'Polio, Poliomyelitis, Polymyositis and Myelitis — Untangling the Names',
    short: 'Polio vs myositis',
    summary:
      'Four similar-sounding words describing entirely different diseases. Taking the Greek roots apart makes them permanently separable: polio means grey, myelo means cord or marrow, myo means muscle, and -itis means inflammation.',
    domains: ['neurology', 'infectious_disease', 'immunology'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['polio', 'poliomyelitis', 'polymyositis', 'myelitis', 'transverse myelitis'],
    terms: ['polio', 'poliomyelitis', 'polymyositis', 'myelitis', 'transverse myelitis', 'anterior horn', 'flaccid paralysis', 'afp', 'creatine kinase'],
    body: {
      the_roots: {
        polio: 'Greek "polios" = GREY. Refers to the grey matter of the spinal cord.',
        myelos: 'Greek = marrow or cord. In "myelitis" it means the SPINAL CORD. (In "myeloid" it means bone marrow — same root, different structure.)',
        myo: 'Greek "mys" = MUSCLE.',
        poly: 'Greek = MANY. Note this is POLY, not POLIO — a single letter separates "many muscles" from "grey matter".',
        itis: 'Inflammation.',
      },
      poliomyelitis: {
        literally: 'Inflammation of the GREY matter of the spinal CORD.',
        what: 'Enterovirus infection destroying the ANTERIOR HORN CELLS — the lower motor neurones in the grey matter.',
        picture:
          'ASYMMETRICAL, FLACCID paralysis with absent reflexes and wasting. Sensation is COMPLETELY NORMAL, because only the motor grey matter is destroyed. Usually a febrile prodrome first.',
        why_sensation_is_spared: 'The virus targets anterior horn (motor) cells. Sensory pathways in the posterior columns and dorsal horn are untouched.',
        public_health: 'Any child with acute flaccid paralysis must be notified and investigated as possible polio — this is a statutory surveillance requirement in most countries. Stool samples for viral culture are required.',
        post_polio_syndrome: 'New weakness and fatigue decades after the original infection, from attrition of the surviving over-worked motor units.',
      },
      polymyositis: {
        literally: 'Inflammation of MANY MUSCLES.',
        what: 'An autoimmune inflammatory myopathy attacking skeletal muscle, not nerve.',
        picture:
          'SYMMETRICAL, PROXIMAL weakness developing over weeks to months — difficulty rising from a chair, climbing stairs, combing hair. Reflexes are PRESERVED. Sensation normal. Muscle may be tender.',
        tests: 'CREATINE KINASE markedly raised, EMG shows a myopathic pattern, muscle biopsy confirms. Autoantibodies including anti-Jo-1.',
        dermatomyositis: 'The same with a rash — heliotrope discolouration of the eyelids, Gottron papules over the knuckles. In adults it carries an association with underlying MALIGNANCY, which must be screened for.',
      },
      myelitis: {
        literally: 'Inflammation of the spinal CORD.',
        transverse_myelitis:
          'Inflammation across a segment of the cord, producing a SENSORY LEVEL, weakness below it, and bladder and bowel involvement. Both motor and sensory pathways are affected — unlike polio.',
        causes: 'Post-infectious, multiple sclerosis, neuromyelitis optica, systemic lupus, sarcoidosis, and infections including HIV and schistosomiasis.',
        note: 'A sensory level is the discriminating feature. Polio has none.',
      },
      the_separating_questions: [
        'Is sensation normal? Normal → polio or polymyositis. Abnormal with a LEVEL → myelitis.',
        'Are reflexes absent or preserved? Absent and flaccid → polio (lower motor neurone). Preserved → polymyositis (muscle disease).',
        'Symmetrical or asymmetrical? Polio is characteristically asymmetrical; polymyositis is symmetrical and proximal.',
        'Is creatine kinase high? Very high → polymyositis.',
      ],
    },
    warnings: [
      'Acute flaccid paralysis in a child is a NOTIFIABLE event in polio surveillance. Report it and send stool samples per the national protocol, even if you think it is something else.',
      'Transverse myelitis with a sensory level needs urgent imaging to exclude cord COMPRESSION, which is surgically treatable.',
      'Adult dermatomyositis requires screening for underlying malignancy.',
    ],
    limitations: ['Guillain-Barré syndrome also causes acute flaccid paralysis but is typically symmetrical and ascending with sensory symptoms.'],
    cards: [
      { q: 'What does "polio" mean literally?', a: 'Grey — referring to the grey matter of the spinal cord.' },
      { q: 'Why is sensation normal in poliomyelitis?', a: 'The virus destroys anterior horn motor cells only. Sensory pathways are untouched.' },
      { q: 'Polymyositis versus poliomyelitis — reflexes?', a: 'Polymyositis: reflexes preserved (muscle disease). Poliomyelitis: reflexes absent (lower motor neurone).' },
      { q: 'Which feature separates myelitis from both?', a: 'A sensory level, plus bladder and bowel involvement.' },
      { q: 'What must be done for any child with acute flaccid paralysis?', a: 'Notify as possible polio and send stool samples for viral culture.' },
    ],
    checks: ['Sensation tested for a level', 'Reflexes documented', 'Symmetry documented', 'Creatine kinase sent', 'Acute flaccid paralysis notified if a child', 'Urgent cord imaging if a sensory level'],
  },

  {
    id: 'AS-NEUR-0005',
    type: 'definition',
    title: 'Gliosis, Glioma and the Glial Cells — Scar Versus Tumour',
    short: 'Gliosis & glioma',
    summary:
      'Glial cells are the supporting cells of the central nervous system. Gliosis is their SCAR response to injury; glioma is their TUMOUR. Both appear as abnormality on imaging and are routinely confused.',
    domains: ['neurology', 'pathology', 'oncology', 'radiology'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['glial scar', 'astrocytosis', 'glioma', 'astrocytoma', 'glioblastoma', 'gliosis'],
    terms: ['gliosis', 'glioma', 'glial', 'astrocyte', 'oligodendrocyte', 'microglia', 'ependymal', 'glioblastoma', 'gfap', 'ring enhancing'],
    body: {
      the_glial_cells: {
        astrocyte: 'Structural support, blood-brain barrier, potassium buffering, neurotransmitter uptake. The cell responsible for gliosis.',
        oligodendrocyte: 'Makes MYELIN in the CNS. One oligodendrocyte myelinates many axons. (In the peripheral nervous system this job belongs to the Schwann cell, and one Schwann cell serves one segment of one axon.)',
        microglia: 'The resident immune cell — the macrophage of the CNS.',
        ependymal: 'Lines the ventricles and central canal; involved in cerebrospinal fluid production and flow.',
      },
      gliosis: {
        what: 'Reactive proliferation of astrocytes in response to CNS injury — the brain\'s equivalent of scar tissue.',
        why_it_matters:
          'The CNS cannot form collagenous scar the way other tissues do. It forms a GLIAL scar instead. This seals the injury, but it also inhibits axonal regrowth — one reason central nerve injury recovers so poorly compared with peripheral nerve injury.',
        causes: 'Any CNS insult — infarct, trauma, haemorrhage, infection, demyelination, chronic epilepsy (mesial temporal sclerosis), neurodegeneration.',
        imaging: 'Appears as a T2 and FLAIR HYPERINTENSE area, usually with VOLUME LOSS and NO mass effect and NO enhancement. That combination is the key.',
      },
      glioma: {
        what: 'A primary brain TUMOUR arising from glial cells. Astrocytoma, oligodendroglioma, ependymoma, and glioblastoma at the malignant end.',
        imaging: 'A MASS with mass effect, surrounding oedema, and often ENHANCEMENT after contrast. Glioblastoma classically shows RING ENHANCEMENT with central necrosis and crosses the corpus callosum in a "butterfly" pattern.',
        note: 'Gliomas rarely metastasise outside the CNS but infiltrate widely within it, which is why complete surgical cure is so difficult.',
      },
      how_to_tell_them_apart_on_imaging: {
        gliosis: 'Volume LOSS, no mass effect, no enhancement, follows a vascular territory or an old injury',
        glioma: 'Volume GAIN (mass effect), oedema, enhancement, crosses boundaries, expands over time',
        the_rule: 'A scar SHRINKS the brain. A tumour PUSHES it. Serial imaging settles most cases.',
      },
      why_it_confuses: [
        'Both are bright on T2 and FLAIR. The distinguishing features are mass effect and enhancement, not signal.',
        'The suffix -osis means a process or state (here, scarring); -oma means a tumour. That is a general rule across pathology and it holds here.',
        'Radiotherapy causes both gliosis and, years later, a small risk of secondary glioma — so an area of change in an irradiated brain needs careful interpretation.',
      ],
    },
    warnings: [
      'A ring-enhancing lesion is not automatically a tumour. Abscess, tuberculoma, toxoplasmosis and neurocysticercosis all ring-enhance, and in many settings infection is far more likely.',
      'New enhancement or mass effect in an area of previously stable gliosis needs urgent specialist review.',
    ],
    limitations: ['Imaging cannot always distinguish tumour recurrence from radiation change; advanced sequences or biopsy may be required.'],
    cards: [
      { q: 'Which glial cell makes myelin in the CNS?', a: 'The oligodendrocyte. In the peripheral nervous system it is the Schwann cell.' },
      { q: 'What is gliosis?', a: 'Reactive astrocyte proliferation — the glial scar of the CNS.' },
      { q: 'How do gliosis and glioma differ on imaging?', a: 'Gliosis has volume loss, no mass effect, no enhancement. Glioma has mass effect, oedema and enhancement.' },
      { q: 'Which glioma classically shows ring enhancement and crosses the corpus callosum?', a: 'Glioblastoma — the butterfly pattern.' },
      { q: 'What do the suffixes -osis and -oma mean?', a: '-osis is a process or state; -oma is a tumour.' },
    ],
    checks: ['Mass effect assessed', 'Contrast enhancement assessed', 'Previous imaging compared', 'Infective causes of ring enhancement considered'],
  },
];
