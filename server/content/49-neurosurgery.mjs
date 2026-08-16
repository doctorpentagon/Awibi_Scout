/**
 * Neurosurgery — raised intracranial pressure, head injury and hydrocephalus.
 *
 * From Surgery S3. Scout had CPP and the bleed imaging signs but nothing on the
 * PHYSIOLOGY of raised pressure, so `hydrocephalus` landed on Delirium,
 * `burr hole` on Haemostasis and `cushing reflex` on the adrenal entry.
 */

export default [
  {
    id: 'AS-NSUR-0010',
    type: 'mechanism',
    title: 'Raised Intracranial Pressure — The Monro-Kellie Doctrine, Cushing Reflex and Herniation',
    short: 'Raised intracranial pressure',
    summary:
      'The skull is a rigid box of fixed volume. Anything added must displace something else, and once compensation is exhausted pressure rises very steeply for a very small extra volume. The CUSHING REFLEX — rising blood pressure, FALLING pulse, irregular breathing — is a PRE-TERMINAL sign, not an early warning.',
    domains: ['neurosurgery', 'neurology', 'critical_care', 'emergency_medicine'],
    intents: ['understand', 'identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'raised intracranial pressure', 'raised icp', 'intracranial hypertension', 'monro kellie',
      'cushing reflex', 'cushing triad', 'cerebral perfusion pressure', 'coning', 'herniation',
      'uncal herniation', 'tonsillar herniation', 'papilloedema', 'blown pupil', 'burr hole',
      'decompressive craniectomy', 'mannitol', 'hypertonic saline',
    ],
    terms: [
      'intracranial pressure', 'icp', 'monro kellie', 'compliance', 'compensation',
      'cerebral perfusion pressure', 'cpp', 'map', 'autoregulation', 'cushing reflex',
      'cushing triad', 'bradycardia', 'hypertension', 'irregular respiration', 'papilloedema',
      'herniation', 'coning', 'uncal', 'tonsillar', 'subfalcine', 'third nerve palsy',
      'fixed dilated pupil', 'midline shift', 'effaced', 'mannitol', 'hypertonic saline',
      'burr hole', 'craniotomy', 'decompressive craniectomy', 'lumbar puncture contraindication',
    ],
    confirm_locally: true,
    body: {
      the_monro_kellie_doctrine: {
        the_statement: 'The adult skull is a RIGID container of essentially FIXED volume. It holds three things: BRAIN (about 80%), BLOOD (about 10%) and CEREBROSPINAL FLUID (about 10%). Because the total cannot change, any INCREASE in one, or the addition of a fourth thing such as a haematoma or tumour, must be matched by a DECREASE in another — or the pressure rises.',
        the_compensation_available: 'The body buys time by displacing CSF into the spinal subarachnoid space and increasing its absorption, and by squeezing venous blood out of the cranium. These are the only two levers, and they are limited.',
        the_compliance_curve_and_why_it_matters_most:
          'While compensation is available, a growing mass causes almost NO rise in pressure — the patient looks well and the observations are normal. Once those reserves are exhausted, the curve turns sharply upward and a very SMALL further increase in volume causes a very LARGE rise in pressure. This is why a head-injured patient can appear stable for hours and then deteriorate catastrophically within minutes. Reassurance based on stable observations is therefore unsafe in anyone with an expanding intracranial lesion — the observations are stable right up until they are not.',
        the_paediatric_exception: 'In an infant the fontanelles are open and the sutures unfused, so the skull CAN expand. A baby therefore compensates far longer, and the signs are different: a TENSE, BULGING fontanelle, rapidly increasing head circumference, splayed sutures, and "SUNSETTING" eyes (downward deviation with sclera visible above the iris). Measure and PLOT the head circumference — it is the single most useful measurement in an infant with suspected raised pressure.',
      },

      cerebral_perfusion_pressure: {
        the_equation: 'CPP = MAP − ICP. Cerebral perfusion pressure equals mean arterial pressure minus intracranial pressure.',
        why_it_is_the_number_that_matters: 'The brain does not care about intracranial pressure in isolation — it cares whether blood is still being driven through it. Pressure rising, or blood pressure falling, both reduce perfusion.',
        the_practical_consequence_that_is_repeatedly_got_wrong:
          'HYPOTENSION IS DEVASTATING IN HEAD INJURY. A single episode of systolic hypotension roughly doubles mortality in traumatic brain injury, because it directly reduces perfusion pressure at a time when the brain has no reserve. So the priority in a head-injured patient is to maintain blood pressure and oxygenation — treating shock is treating the brain. Similarly, HYPOXIA and HYPERCAPNIA are harmful: carbon dioxide is a potent cerebral vasodilator, so a rising CO2 increases cerebral blood volume and raises pressure further.',
        autoregulation: 'Normally the brain keeps its own blood flow constant across a wide range of blood pressures. After injury this autoregulation is IMPAIRED or lost, so cerebral blood flow becomes passively dependent on blood pressure — which is precisely why swings in blood pressure become dangerous.',
      },

      the_clinical_picture: {
        early_and_non_specific: 'HEADACHE that is worse in the MORNING, on LYING FLAT, and on coughing, straining or bending — all of which raise intracranial pressure further. VOMITING, classically without preceding nausea and sometimes projectile. Visual blurring or transient obscurations. Drowsiness and altered behaviour.',
        papilloedema: 'Swelling of the optic disc from transmitted pressure along the optic nerve sheath. It is a valuable sign when PRESENT, but it takes HOURS TO DAYS to develop — so its ABSENCE does NOT exclude acutely raised pressure. Never use a normal fundus to reassure yourself in acute head injury.',
        the_reliable_early_sign: 'A FALLING LEVEL OF CONSCIOUSNESS. The Glasgow Coma Scale, measured serially by the same method, is the most sensitive practical monitor available at the bedside. A drop of 2 or more points is significant and demands immediate reassessment and imaging.',
        cushing_reflex: {
          what_it_is: 'A physiological response to critically raised intracranial pressure: the body raises systemic blood pressure in an attempt to maintain cerebral perfusion, and the resulting baroreceptor activation slows the heart.',
          the_triad: 'HYPERTENSION (specifically a WIDENING pulse pressure) · BRADYCARDIA · IRREGULAR or depressed RESPIRATION.',
          the_point_that_matters:
            'This is a LATE, PRE-TERMINAL sign. It indicates brainstem compression and imminent herniation. It is NOT an early warning to watch for — by the time it appears, the window for intervention is nearly closed. Note also that it is the OPPOSITE of the shock pattern: in haemorrhagic shock the pulse RISES and the pressure FALLS, whereas here the pressure RISES and the pulse FALLS. A hypertensive, bradycardic, head-injured patient is not "stable" — they are coning.',
        },
      },

      herniation_syndromes: {
        what_herniation_means: 'Brain tissue forced from one compartment into another through a fixed opening, compressing whatever it meets.',
        uncal_transtentorial: {
          what: 'The medial temporal lobe (uncus) is pushed over the tentorial edge.',
          what_it_compresses_and_in_what_order: 'First the OCULOMOTOR NERVE (III) on that side — its superficial parasympathetic fibres are hit first, so the earliest sign is a DILATING, SLUGGISH pupil on the SAME side as the lesion, progressing to a fixed dilated "blown" pupil with the eye deviated down and out. Then the CEREBRAL PEDUNCLE, causing weakness on the OPPOSITE side. Then consciousness falls as the brainstem is compressed.',
          the_false_localising_sign: 'Occasionally the opposite peduncle is pushed against the tentorial edge instead, producing weakness on the SAME side as the lesion — the KERNOHAN NOTCH phenomenon. It misleads about which side the lesion is on, and the PUPIL is the more reliable guide.',
          the_practical_rule: 'A UNILATERAL DILATING PUPIL IN A DETERIORATING HEAD-INJURED PATIENT IS AN EMERGENCY. It usually indicates a mass on the SAME side. This is the finding that triggers immediate imaging and neurosurgical contact.',
        },
        tonsillar_coning: 'The cerebellar tonsils are forced down through the foramen magnum onto the MEDULLA — which contains the respiratory and cardiovascular centres. Causes neck stiffness, falling consciousness, respiratory irregularity and then arrest. This is the mechanism by which lumbar puncture kills in raised pressure.',
        subfalcine: 'The cingulate gyrus is pushed under the falx, which can compress the anterior cerebral artery and cause leg weakness. Seen on imaging as MIDLINE SHIFT.',
        the_lumbar_puncture_rule:
          'DO NOT perform a lumbar puncture where raised intracranial pressure from a MASS LESION is suspected. Removing fluid from below creates a pressure gradient that can precipitate tonsillar herniation and death. Image first where there are focal neurological signs, papilloedema, a reduced or falling conscious level, seizures, or immunosuppression. The exception worth understanding is idiopathic intracranial hypertension, where pressure is raised WITHOUT a mass and lumbar puncture is both safe and therapeutic — the danger is the gradient a mass creates, not the pressure itself.',
      },

      management_principles: {
        the_first_line_is_physiology_not_drugs: 'Airway, oxygenation and blood pressure come first, because hypoxia and hypotension do more damage than the pressure itself. Then: HEAD UP about 30 degrees to improve venous drainage · head and neck MIDLINE and cervical collars not too tight, because anything obstructing jugular venous return raises intracranial pressure · treat pain, agitation, fever and seizures, all of which increase cerebral metabolic demand · avoid hypotonic fluids, which worsen cerebral oedema · maintain normal carbon dioxide.',
        osmotic_therapy: 'MANNITOL or HYPERTONIC SALINE draw water out of the brain across an intact blood-brain barrier. They are TEMPORISING measures that buy time to reach definitive treatment — they do not treat the cause.',
        hyperventilation: 'Lowering carbon dioxide constricts cerebral vessels and rapidly reduces intracranial pressure — but at the cost of reducing cerebral blood flow, which risks ISCHAEMIA. It is therefore a brief rescue manoeuvre for impending herniation while preparing definitive treatment, not a maintenance strategy.',
        definitive_treatment: 'Remove the cause. Evacuate the haematoma, resect the tumour, divert the CSF. A BURR HOLE is a small opening drilled in the skull — used for drainage, particularly of a chronic subdural haematoma, and to place monitors. A CRANIOTOMY raises a bone flap for access and replaces it. A DECOMPRESSIVE CRANIECTOMY removes a portion of skull and LEAVES IT OUT, allowing swollen brain to expand — which is the deliberate answer to the Monro-Kellie problem: if you cannot reduce the contents, enlarge the box.',
        steroids: 'CORTICOSTEROIDS work well for VASOGENIC oedema around a TUMOUR or abscess. They are NOT indicated in traumatic brain injury, where a large trial (CRASH) showed INCREASED mortality. This distinction is important and frequently blurred.',
      },
    },
    warnings: [
      'The CUSHING REFLEX is a PRE-TERMINAL sign of brainstem compression, not an early warning. A hypertensive, bradycardic head-injured patient is coning.',
      'Cushing reflex is the OPPOSITE of shock — pressure rises and pulse falls. Do not read it as stability.',
      'Stable observations do not mean a stable patient. Compensation masks a growing mass until it exhausts, then pressure rises very steeply.',
      'A UNILATERAL DILATING PUPIL in a deteriorating patient is an emergency, and usually indicates a mass on the SAME side.',
      'HYPOTENSION roughly doubles mortality in traumatic brain injury. Treating shock is treating the brain.',
      'A normal fundus does NOT exclude acutely raised pressure — papilloedema takes hours to days to appear.',
      'DO NOT perform a lumbar puncture where a mass lesion is suspected — it can precipitate tonsillar herniation and death.',
      'Kernohan notch phenomenon gives weakness on the SAME side as the lesion — the pupil is the more reliable localiser.',
      'A tight cervical collar obstructs jugular venous return and raises intracranial pressure.',
      'Corticosteroids help tumour oedema but INCREASE mortality in traumatic brain injury.',
      'Hyperventilation is a brief rescue for impending herniation, not maintenance — it risks ischaemia.',
      'In an infant, measure and PLOT head circumference — the skull can expand, so the usual signs appear late.',
      'A fall of 2 or more GCS points demands immediate reassessment and imaging.',
    ],
    limitations: ['Monitoring thresholds, osmotic therapy regimens and surgical indications are unit-specific. Scout states no doses.'],
    cards: [
      { q: 'State the Monro-Kellie doctrine.', a: 'The skull is a fixed volume of brain, blood and CSF — an increase in one must be offset or pressure rises.' },
      { q: 'Why can a head-injured patient look stable then crash?', a: 'Compensation keeps pressure normal until reserves exhaust, after which small volume increases cause large pressure rises.' },
      { q: 'Give the Cushing triad and its significance.', a: 'Hypertension with widening pulse pressure, bradycardia, irregular respiration — a pre-terminal sign of brainstem compression.' },
      { q: 'What is the CPP equation?', a: 'CPP = MAP − ICP.' },
      { q: 'Why is hypotension so dangerous in head injury?', a: 'It directly reduces cerebral perfusion pressure; a single episode roughly doubles mortality.' },
      { q: 'What does a unilateral dilating pupil indicate?', a: 'Uncal herniation compressing the third nerve — usually a mass on the same side.' },
      { q: 'What is the Kernohan notch phenomenon?', a: 'The opposite peduncle compressed, giving weakness on the same side as the lesion — a false localising sign.' },
      { q: 'Why is lumbar puncture dangerous in a mass lesion?', a: 'It creates a pressure gradient that can precipitate tonsillar herniation.' },
      { q: 'Does papilloedema exclude raised pressure if absent?', a: 'No — it takes hours to days to develop.' },
      { q: 'When are steroids appropriate for cerebral oedema?', a: 'Vasogenic oedema around a tumour or abscess. NOT in traumatic brain injury, where they increase mortality.' },
      { q: 'What is a decompressive craniectomy?', a: 'Removing part of the skull and leaving it out — enlarging the box when the contents cannot be reduced.' },
      { q: 'How does raised pressure present in an infant?', a: 'Bulging fontanelle, rapidly increasing head circumference, splayed sutures, sunsetting eyes.' },
    ],
    checks: ['GCS measured serially by the same method', 'Pupils checked and compared', 'Blood pressure and oxygenation protected', 'Head up 30 degrees and neck midline', 'Collar checked for tightness', 'Imaging before lumbar puncture where a mass is possible', 'Neurosurgery contacted early', 'Head circumference plotted in an infant'],
  },

  {
    id: 'AS-NSUR-0011',
    type: 'guideline',
    title: 'Head Injury and Hydrocephalus — Who to Scan, and Where the Fluid Goes',
    short: 'Head injury and hydrocephalus',
    summary:
      'The extradural bleed with a LUCID INTERVAL is the one that kills a patient who walked in talking. And hydrocephalus is not simply "water on the brain" — the distinction between COMMUNICATING and NON-COMMUNICATING decides whether a lumbar puncture is treatment or a lethal mistake.',
    domains: ['neurosurgery', 'emergency_medicine', 'paediatrics'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'head injury', 'traumatic brain injury', 'tbi', 'extradural haematoma', 'epidural haematoma',
      'subdural haematoma', 'lucid interval', 'diffuse axonal injury', 'skull fracture',
      'basal skull fracture', 'battle sign', 'raccoon eyes', 'hydrocephalus', 'shunt',
      'ventriculoperitoneal shunt', 'vp shunt', 'normal pressure hydrocephalus',
    ],
    terms: [
      'head injury', 'traumatic brain injury', 'extradural', 'epidural', 'lens shaped',
      'biconvex', 'lucid interval', 'middle meningeal', 'pterion', 'subdural', 'crescent',
      'bridging veins', 'chronic subdural', 'diffuse axonal injury', 'contrecoup',
      'basal skull fracture', 'battle sign', 'raccoon eyes', 'panda eyes', 'csf rhinorrhoea',
      'otorrhoea', 'hydrocephalus', 'communicating', 'non-communicating', 'obstructive',
      'aqueduct', 'shunt', 'vp shunt', 'shunt blockage', 'normal pressure hydrocephalus',
    ],
    confirm_locally: true,
    body: {
      the_intracranial_bleeds_and_what_distinguishes_them: {
        extradural_epidural: {
          where: 'Between the skull and the dura.',
          cause: 'Usually a fracture of the thin TEMPORAL bone at the PTERION tearing the MIDDLE MENINGEAL ARTERY. Arterial, so it fills fast.',
          on_ct: 'A BICONVEX, lens-shaped (lentiform) collection that does NOT cross suture lines, because the dura is firmly attached there. It CAN cross the midline.',
          the_clinical_signature: 'THE LUCID INTERVAL. The patient is knocked out briefly, then WAKES UP AND TALKS, sometimes for hours, while the arterial bleed expands. Then they deteriorate rapidly into coma. This is why a patient who "seems fine now" after a head injury can still be in mortal danger, and why the mechanism and the initial loss of consciousness matter as much as the current examination.',
          the_outcome: 'If evacuated in time the underlying brain is often normal and recovery can be excellent. If missed, it kills. Few conditions have a starker gap between the outcome of prompt and delayed treatment.',
        },
        subdural: {
          where: 'Between the dura and the arachnoid.',
          cause: 'Tearing of the BRIDGING VEINS crossing that space. Venous, so slower.',
          on_ct: 'A CRESCENT-shaped collection that DOES cross suture lines (it is not limited by dural attachments) but does NOT cross the midline (the falx stops it). This is the exact mirror of the extradural pattern, and the two rules together identify almost every case.',
          who: 'ACUTE in significant trauma. CHRONIC in the ELDERLY and in people with alcohol dependence, in whom cerebral atrophy stretches the bridging veins and makes them vulnerable — so a trivial or forgotten injury weeks earlier can cause it. Also with anticoagulation.',
          the_chronic_presentation_that_gets_missed: 'Gradual confusion, personality change, headache, unsteadiness or a fluctuating conscious level in an older person — routinely attributed to dementia, delirium or a urinary infection. A chronic subdural is a TREATABLE cause of apparent dementia, and it is found by scanning rather than by assuming.',
        },
        subarachnoid: 'Blood in the CSF spaces. Traumatic, or spontaneous from a ruptured aneurysm — the thunderclap headache.',
        diffuse_axonal_injury: 'Shearing of axons from rotational acceleration and deceleration. The CT may look almost NORMAL despite a deeply unconscious patient — a mismatch that is itself the clue. MRI is far more sensitive. Prognosis is often poor.',
      },

      basal_skull_fracture: {
        the_signs: 'BATTLE SIGN — bruising over the mastoid, behind the ear. RACCOON or PANDA EYES — periorbital bruising, typically bilateral and not explained by direct injury to the eye. CSF RHINORRHOEA or OTORRHOEA — clear fluid from nose or ear. HAEMOTYMPANUM — blood behind the eardrum. Cranial nerve palsies, particularly facial nerve.',
        the_timing_point: 'Battle sign and raccoon eyes take HOURS to develop, so their absence early means nothing.',
        the_practical_prohibitions: 'Do NOT pass a NASOGASTRIC tube — it can enter the cranial cavity through the fracture. Use the oral route. Do not pack the ear or nose. Avoid nasal airways.',
        the_test_that_is_unreliable: 'The "halo" or double-ring sign of CSF mixed with blood on tissue paper is often quoted but is not reliable. Testing for beta-2 transferrin is the specific test where available.',
      },

      who_needs_a_scan: {
        the_principle: 'Imaging decisions follow validated rules — the Canadian CT Head Rule, NICE guidance and others. Learn and apply the one your service uses rather than deciding case by case, because these rules exist precisely because individual judgement misses cases.',
        the_features_that_appear_in_all_of_them: 'GCS below 15 at two hours after injury, or any GCS below 13 on arrival · suspected open or depressed skull fracture · any sign of BASAL skull fracture · POST-TRAUMATIC SEIZURE · FOCAL neurological deficit · more than one episode of VOMITING · dangerous mechanism (pedestrian struck, ejection, fall from height) · age over 65 · ANTICOAGULATION or a bleeding disorder — which lowers the threshold dramatically and is the single most important modifier in an ageing population · and retrograde amnesia beyond 30 minutes.',
        anticoagulated_patients: 'A patient on an anticoagulant with even a minor head injury warrants a low threshold for scanning and for a period of observation, because a bleed can be delayed. Reversal should be considered early if a bleed is found.',
      },

      hydrocephalus: {
        what_it_actually_is: 'An excess of CEREBROSPINAL FLUID within the ventricular system, causing them to dilate. CSF is produced mainly by the choroid plexus, circulates through the ventricles and around the brain and cord, and is absorbed into the venous system. Hydrocephalus results from a problem with FLOW or ABSORPTION — and, very rarely, over-production.',
        the_classification_that_governs_safety: {
          non_communicating_obstructive: 'A physical BLOCK within the ventricular system — commonly at the narrow cerebral AQUEDUCT, or by a posterior fossa tumour, colloid cyst, or congenital malformation. CSF cannot reach the subarachnoid space.',
          communicating: 'CSF flows out of the ventricles normally but is not ABSORBED properly — after subarachnoid haemorrhage or meningitis, where blood or inflammatory debris blocks the arachnoid granulations.',
          why_the_distinction_is_not_academic:
            'In NON-COMMUNICATING hydrocephalus a lumbar puncture is DANGEROUS — the pressure gradient it creates can cause herniation, exactly as with any mass lesion. In COMMUNICATING hydrocephalus, and in normal pressure hydrocephalus, lumbar puncture may be both safe and diagnostic. Getting this wrong kills, which is why imaging precedes the needle.',
        },
        presentation: 'In INFANTS: increasing head circumference crossing centiles, tense fontanelle, splayed sutures, sunsetting eyes, irritability, vomiting. In OLDER children and adults: the features of raised intracranial pressure — headache worse in the morning, vomiting, papilloedema, falling consciousness.',
        normal_pressure_hydrocephalus: {
          the_triad: 'GAIT disturbance (typically a broad-based, shuffling, "magnetic" gait, as though the feet are stuck to the floor) · URINARY incontinence · and DEMENTIA. The classic mnemonic is "wet, wacky and wobbly", though the gait usually comes FIRST and responds best to treatment.',
          why_it_matters: 'It is one of the few POTENTIALLY REVERSIBLE causes of dementia. Ventricles are enlarged out of proportion to any cerebral atrophy, and pressure is normal on measurement. Some patients improve markedly after CSF diversion, and improvement in gait after a high-volume lumbar puncture helps predict who will benefit.',
        },
        treatment_and_the_thing_to_know_about_shunts: {
          the_shunt: 'A VENTRICULOPERITONEAL shunt drains CSF from a ventricle, through a valve, down a tube under the skin, into the peritoneal cavity where it is absorbed. Alternatives drain to the atrium or pleura. An ENDOSCOPIC THIRD VENTRICULOSTOMY creates an internal bypass and avoids hardware, suitable for some obstructive cases.',
          shunt_malfunction: 'The complication every clinician meets. It presents as RECURRENCE OF RAISED PRESSURE — headache, vomiting, drowsiness, irritability, and in a child a return of the original symptoms. Any patient with a shunt and these symptoms has a BLOCKED SHUNT until proven otherwise, and needs urgent neurosurgical assessment and imaging. Do not attribute vomiting in a shunted child to gastroenteritis without considering it.',
          shunt_infection: 'Usually within months of insertion, often with skin organisms. Fever, shunt-tract tenderness, and features of malfunction. In a ventriculoperitoneal shunt it can present as an abdominal picture.',
          over_drainage: 'Too much drainage causes LOW pressure headache that is worse UPRIGHT and relieved by lying flat — the opposite pattern to raised pressure — and can cause subdural collections as the brain pulls away from the dura.',
        },
      },
    },
    warnings: [
      'The LUCID INTERVAL of an extradural haematoma means a patient can talk normally while dying. Mechanism and initial loss of consciousness matter as much as current examination.',
      'Extradural: biconvex, does not cross sutures. Subdural: crescent, crosses sutures but not the midline.',
      'Chronic subdural is a TREATABLE cause of apparent dementia in the elderly — scan rather than assume.',
      'Diffuse axonal injury can have a near-normal CT despite deep coma. That mismatch is the clue.',
      'Do NOT pass a nasogastric tube if a basal skull fracture is suspected — use the oral route.',
      'Battle sign and raccoon eyes take hours to appear; their absence early means nothing.',
      'Anticoagulation dramatically lowers the threshold for scanning, and bleeding may be delayed.',
      'Apply your service validated head injury imaging rule rather than deciding case by case.',
      'In NON-COMMUNICATING hydrocephalus, lumbar puncture can cause herniation. Image before the needle.',
      'A shunted patient with headache, vomiting or drowsiness has a BLOCKED SHUNT until proven otherwise.',
      'Do not attribute vomiting in a shunted child to gastroenteritis without excluding shunt failure.',
      'Normal pressure hydrocephalus is a potentially reversible dementia — gait usually comes first and responds best.',
      'Headache worse UPRIGHT and relieved by lying flat suggests over-drainage, the opposite of raised pressure.',
    ],
    limitations: ['Imaging rules, reversal protocols and shunt management are institution-specific. Scout states no doses.'],
    cards: [
      { q: 'What is the lucid interval and which bleed causes it?', a: 'Brief unconsciousness, then waking and talking before rapid deterioration — classically an extradural haematoma.' },
      { q: 'Which artery is typically torn in an extradural?', a: 'The middle meningeal artery, at the pterion.' },
      { q: 'How do extradural and subdural differ on CT?', a: 'Extradural is biconvex and does not cross sutures; subdural is crescentic, crosses sutures but not the midline.' },
      { q: 'Who gets chronic subdural haematoma?', a: 'The elderly and people with alcohol dependence — atrophy stretches bridging veins, so trivial injury suffices.' },
      { q: 'What does a near-normal CT with deep coma suggest?', a: 'Diffuse axonal injury — MRI is far more sensitive.' },
      { q: 'Name the signs of basal skull fracture.', a: 'Battle sign, raccoon eyes, CSF rhinorrhoea or otorrhoea, haemotympanum, cranial nerve palsy.' },
      { q: 'What must never be passed in suspected basal skull fracture?', a: 'A nasogastric tube — it can enter the cranial cavity.' },
      { q: 'Communicating versus non-communicating hydrocephalus?', a: 'Non-communicating is a physical block within the ventricles; communicating is failed absorption. LP is dangerous in the former.' },
      { q: 'Give the normal pressure hydrocephalus triad.', a: 'Gait disturbance, urinary incontinence, dementia — wet, wacky and wobbly, with gait first.' },
      { q: 'A shunted child vomiting and drowsy — what is it until proven otherwise?', a: 'A blocked shunt.' },
      { q: 'What does headache relieved by lying flat suggest in a shunted patient?', a: 'Over-drainage — the opposite pattern to raised pressure.' },
    ],
    checks: ['Mechanism and any loss of consciousness recorded', 'Validated imaging rule applied', 'Anticoagulation status established', 'Basal skull fracture signs sought and NG tube avoided', 'GCS trended', 'Imaging before lumbar puncture', 'Shunt status asked about in any patient with headache or vomiting', 'Neurosurgery contacted early'],
  },
];
