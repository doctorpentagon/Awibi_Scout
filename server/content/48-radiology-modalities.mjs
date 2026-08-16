/**
 * Radiology — the modalities themselves, radiation, and contrast safety.
 *
 * From the Radiology compilation (519 pages, 511 topics). Scout could already
 * READ a chest film but had nothing on what the modalities ARE, what they cost
 * in radiation, or how contrast harms people — so `radiation dose`,
 * `ionising radiation` and `ultrasound` all landed on unrelated entries.
 *
 * Written from first principles: a reader here is assumed not to know what a
 * Hounsfield unit or a T1 image is.
 */

export default [
  {
    id: 'AS-RADS-0020',
    type: 'imaging',
    title: 'Imaging Modalities From First Principles — X-ray, CT, Ultrasound and MRI',
    short: 'Imaging modalities',
    summary:
      'Four ways of making a picture, each using a different physical signal. Choosing well means knowing what each one CANNOT see: X-ray and CT cannot show you soft tissue detail, ultrasound cannot get through bone or gas, and MRI cannot be used on an unstable patient.',
    domains: ['radiology'],
    intents: ['understand', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'imaging modalities', 'x-ray', 'radiograph', 'plain film', 'computed tomography', 'ct scan',
      'ultrasound', 'sonography', 'doppler', 'magnetic resonance imaging', 'mri', 'fluoroscopy',
      'nuclear medicine', 'pet', 'hounsfield unit', 'radiodensity', 'echogenicity', 't1', 't2',
      'choosing an imaging test',
    ],
    terms: [
      'x-ray', 'radiograph', 'attenuation', 'radiodensity', 'radiolucent', 'radiopaque',
      'computed tomography', 'ct', 'hounsfield', 'window', 'axial', 'coronal', 'sagittal',
      'ultrasound', 'echogenic', 'hypoechoic', 'anechoic', 'acoustic shadow', 'doppler',
      'mri', 't1', 't2', 'flair', 'dwi', 'diffusion weighted', 'gadolinium', 'tesla',
      'fluoroscopy', 'nuclear medicine', 'pet', 'scintigraphy', 'modality choice',
    ],
    confirm_locally: true,
    body: {
      the_question_that_should_precede_every_request: {
        the_rule:
          'Order an image only when the answer will CHANGE what you do. "Let us image and see" produces incidental findings, radiation, cost, delay and anxiety, and it frequently produces a finding that then has to be chased with more imaging. Write the clinical question on the request. A radiologist answering "is there a fracture of the scaphoid" gives a far more useful report than one answering "wrist pain, please image".',
        the_four_things_a_request_must_carry: 'The clinical question · relevant history and examination findings · the SIDE and site · and safety information — pregnancy status, renal function, allergy, implants, and whether the patient can lie flat and still.',
      },

      plain_radiography_x_ray: {
        how_the_image_is_made:
          'X-rays are a form of ionising electromagnetic radiation. They are fired through the patient onto a detector. Different tissues ABSORB (attenuate) different amounts depending mainly on their DENSITY and atomic number. What reaches the detector makes the image, so a radiograph is a SHADOW — a two-dimensional projection of a three-dimensional object.',
        the_five_densities_in_order: 'AIR (blackest) → FAT → SOFT TISSUE and FLUID (which look identical, and this is the single biggest limitation of plain film) → BONE and calcium → METAL and contrast (whitest).',
        the_vocabulary: 'RADIOLUCENT means it lets X-rays through and looks DARK. RADIOPAQUE means it blocks them and looks WHITE.',
        the_consequences_of_it_being_a_shadow: [
          'Structures OVERLAP. A lesion can be hidden behind the heart, the diaphragm or a rib.',
          'You cannot judge depth. This is why TWO VIEWS AT RIGHT ANGLES are the rule — a fracture invisible on one projection is often obvious on the other, and a swallowed object cannot be localised on a single view.',
          'MAGNIFICATION varies with distance from the detector. This is why an AP (anteroposterior) chest film, taken with the patient sitting up in bed, MAGNIFIES the heart and cannot be used to judge heart size, while a PA (posteroanterior) film taken standing at a proper distance can.',
          'Soft tissue and fluid have the same density, so a plain film cannot distinguish pus from blood from tumour.',
        ],
        what_it_is_still_best_for: 'Bones and fractures · chest (aeration, consolidation, effusion, pneumothorax, cardiac silhouette) · line and tube position · foreign bodies · bowel gas pattern and free air. It is fast, cheap, portable and low-dose, which is why it remains the most-used modality in the world.',
      },

      computed_tomography_ct: {
        how_it_works: 'The same X-rays, but the tube rotates around the patient taking many projections, and a computer RECONSTRUCTS them into cross-sectional slices. It solves the overlap problem of plain film entirely.',
        hounsfield_units: {
          what: 'CT measures attenuation on a standardised scale named after Godfrey Hounsfield. WATER is defined as 0. AIR is about −1000. FAT is around −100. Soft tissue is roughly +30 to +70. Acute BLOOD is denser, around +50 to +80 — which is why fresh haemorrhage looks BRIGHT WHITE on an unenhanced head CT and is the basis of stroke imaging. BONE is +700 or more.',
          why_windowing_matters:
            'The eye can only distinguish a limited number of grey levels, but CT captures thousands of values. WINDOWING selects a narrow range to display across the full grey scale. The same scan viewed on a LUNG window, a SOFT TISSUE window and a BONE window shows completely different things — a pneumothorax can be invisible on soft tissue windows and obvious on lung windows. If you are looking at CT images and cannot see something you expect, ask whether you are on the right window.',
        },
        strengths: 'FAST — seconds for a whole body, which makes it the modality of trauma and of the unstable patient. Excellent for bone, acute haemorrhage, free air, calcification, and lung parenchyma. Reproducible and widely available.',
        weaknesses: 'A SUBSTANTIAL RADIATION DOSE — the main reason not to. Poorer soft tissue contrast than MRI. Contrast is often needed, with its own risks. Metal causes streak artefact.',
      },

      ultrasound: {
        how_it_works: 'A transducer emits high-frequency SOUND, which reflects off interfaces between tissues of differing acoustic properties. The machine times the returning echoes and builds an image. NO IONISING RADIATION at all.',
        the_vocabulary: 'ECHOGENIC or hyperechoic = brighter than surrounding tissue. HYPOECHOIC = darker. ANECHOIC = completely black, meaning no echoes return — which is what pure fluid looks like, so a simple cyst, a full bladder or ascites appears black.',
        the_two_things_it_cannot_pass: 'BONE and GAS both reflect sound almost completely, casting an ACOUSTIC SHADOW behind them. So ultrasound cannot see through the skull in an adult, cannot see the lungs directly, and is defeated by overlying bowel gas — which is exactly why the pancreas is so often reported as "obscured by bowel gas".',
        strengths: 'No radiation, so it is FIRST LINE in PREGNANCY and in CHILDREN. Portable and repeatable at the bedside. REAL-TIME and DYNAMIC — you can watch something move, compress a vein to test for thrombosis, or guide a needle live. Excellent for fluid, gallstones, hydronephrosis, and soft tissue.',
        weaknesses: 'Highly OPERATOR-DEPENDENT — the image quality and the report depend on the person holding the probe, and a negative scan by an inexperienced operator excludes much less. Limited by body habitus, gas and bone. Poor for lung parenchyma and for the brain in adults.',
        doppler: 'Uses the frequency shift of sound reflected from MOVING blood to show flow — its direction and speed. This is how deep vein thrombosis, arterial stenosis and testicular or ovarian torsion are assessed.',
      },

      magnetic_resonance_imaging_mri: {
        how_it_works_in_plain_terms:
          'A very strong magnet aligns the hydrogen protons in the body water. A radio pulse knocks them out of alignment; as they relax back they emit a signal that is used to build the image. NO IONISING RADIATION. Because the signal depends on the local chemical environment of water, MRI distinguishes soft tissues far better than anything else.',
        the_two_basic_sequences_and_a_way_to_remember_them: {
          t1: 'FAT is bright, water is dark. Good ANATOMY.',
          t2: 'WATER is bright, fat is fairly bright too. Good PATHOLOGY, because most disease involves oedema — and oedema is water.',
          the_memory_hook: 'On T2, water is White — "T2, H2O". Since almost all pathology causes oedema, "bright on T2" is the commonest way disease announces itself.',
          flair: 'A T2 image with the free water signal SUPPRESSED, so cerebrospinal fluid goes dark. This makes lesions next to the ventricles visible instead of being lost in bright CSF — which is why FLAIR is the sequence for multiple sclerosis plaques.',
          diffusion_weighted_imaging: 'Detects restricted movement of water molecules. It becomes positive within MINUTES of an acute ischaemic stroke, long before CT changes appear, which makes it the most sensitive early test for infarction. Also useful for abscess and for some tumours.',
        },
        strengths: 'Unrivalled SOFT TISSUE contrast. Best for brain and spinal cord, ligaments and cartilage, marrow, pelvic organs, and characterising liver and soft tissue lesions. Multiplanar without repositioning the patient.',
        weaknesses: {
          slow: 'Twenty to sixty minutes. The patient must lie still throughout — which frequently requires sedation or general anaesthetic in young children, and is impossible for a patient in pain or agitation.',
          access: 'Expensive, scarce, and often with long waits — a genuine constraint in most of the world.',
          the_safety_issue: 'The magnet is ALWAYS ON, even when no scan is running. FERROMAGNETIC objects become projectiles. People have been killed by oxygen cylinders drawn into the bore. Implants — pacemakers, some clips and stimulators, metallic foreign bodies — may heat, move or malfunction. Anyone entering the scanner room must be screened, including staff and relatives.',
          the_specific_occupational_question: 'Always ask about METALWORKING or grinding. A tiny intraocular metallic foreign body the patient has forgotten about can move in the magnet and blind them, so an orbital radiograph is obtained first when the history suggests it.',
          claustrophobia: 'Common and under-anticipated. Warn the patient; some need sedation or an open scanner.',
        },
      },

      the_other_modalities: {
        fluoroscopy: 'Real-time, continuous X-ray. Used for contrast studies (barium swallow and meal, contrast enema), and to guide procedures — line placement, joint injection, orthopaedic reduction, endoscopic retrograde cholangiopancreatography. Dose accumulates with screening TIME, so it is not trivial.',
        nuclear_medicine: 'A radioactive tracer is given and the RADIATION EMITTED BY THE PATIENT is detected. It images FUNCTION rather than structure — bone scan for metastases, ventilation-perfusion scan for pulmonary embolism, thyroid uptake scan, renal function scans.',
        pet: 'Positron emission tomography, usually with a glucose analogue, showing METABOLIC ACTIVITY. Combined with CT (PET-CT) to place that activity anatomically. Central to cancer staging and to assessing treatment response.',
      },

      choosing_the_right_test: {
        the_principle: 'Match the modality to the TISSUE and to the URGENCY, and take account of radiation and of the patient.',
        acute_head_injury_or_suspected_stroke: 'CT FIRST — it is fast and it excludes haemorrhage, which is the decision that determines whether thrombolysis is possible. MRI with diffusion weighting is more sensitive for infarct but is slower and less available.',
        suspected_pulmonary_embolism: 'CT pulmonary angiography, or a ventilation-perfusion scan where radiation to breast tissue in a young woman or pregnancy makes it preferable.',
        gallstones_hydronephrosis_or_a_pregnant_abdomen: 'ULTRASOUND first — no radiation and excellent for fluid and stones.',
        bone_and_joint: 'Plain radiograph first. CT for complex fractures and surgical planning; MRI for ligament, cartilage, marrow and early osteomyelitis.',
        soft_tissue_spinal_cord_or_brain_parenchyma: 'MRI.',
        the_unstable_patient: 'CT, if they can safely be moved at all — and often the answer is bedside ultrasound instead, because the scanner is a dangerous place for someone who is deteriorating. "The CT scanner is not a resuscitation area" is a rule that saves lives.',
        the_pregnant_patient: 'Ultrasound and MRI (without gadolinium) are preferred. But NEVER withhold a genuinely indicated CT — a missed pulmonary embolism or intracranial bleed kills the mother and therefore the fetus, and diagnostic doses are far below the threshold for fetal harm. Discuss, document, and image.',
      },
    },
    warnings: [
      'Order an image only when the answer will change management, and write the clinical question on the request.',
      'A radiograph is a SHADOW — always get two views at right angles, because a fracture invisible on one is often obvious on the other.',
      'An AP film magnifies the heart. Never judge cardiac size on an AP or supine chest film.',
      'Soft tissue and fluid are the same density on plain film — it cannot distinguish pus from blood from tumour.',
      'If you cannot see something expected on a CT, check you are on the right WINDOW. A pneumothorax can be invisible on soft tissue windows.',
      'Ultrasound cannot pass bone or gas — which is why the pancreas is so often "obscured by bowel gas".',
      'Ultrasound is operator-dependent. A negative scan by an inexperienced operator excludes far less.',
      'The MRI magnet is ALWAYS ON. Ferromagnetic objects become projectiles and have killed people.',
      'Ask about metalworking before MRI — a forgotten intraocular metal fragment can move and blind the patient.',
      'On T2, water is white — and since almost all pathology causes oedema, "bright on T2" is how disease usually announces itself.',
      'Diffusion-weighted MRI turns positive within minutes of stroke, long before CT changes.',
      'The CT scanner is not a resuscitation area. Consider bedside ultrasound in the unstable patient.',
      'Never withhold genuinely indicated CT in pregnancy — a missed diagnosis kills the mother and therefore the fetus.',
    ],
    limitations: ['Protocols, availability and sequence naming vary between centres and manufacturers. Follow local imaging pathways.'],
    cards: [
      { q: 'List the five plain film densities from black to white.', a: 'Air, fat, soft tissue/fluid, bone, metal.' },
      { q: 'Why are two views at right angles the rule?', a: 'A radiograph is a shadow with no depth information — a fracture invisible on one view may be obvious on the other.' },
      { q: 'Why can you not judge heart size on an AP film?', a: 'Distance from the detector magnifies the heart.' },
      { q: 'What is a Hounsfield unit?', a: 'A standardised CT attenuation scale: water 0, air −1000, acute blood +50 to +80, bone +700 or more.' },
      { q: 'What is windowing and why does it matter?', a: 'Displaying a selected attenuation range — the same scan on lung, soft tissue and bone windows shows different things.' },
      { q: 'What two things stop ultrasound?', a: 'Bone and gas — both reflect sound and cast an acoustic shadow.' },
      { q: 'What does anechoic mean?', a: 'Completely black — no echoes return, which is what pure fluid looks like.' },
      { q: 'T1 versus T2?', a: 'T1 fat bright, water dark, good anatomy. T2 water bright, good pathology. "T2, H2O".' },
      { q: 'What is FLAIR for?', a: 'A T2 with free water suppressed so CSF goes dark — used to see periventricular lesions such as MS plaques.' },
      { q: 'Which sequence detects stroke earliest?', a: 'Diffusion-weighted imaging — positive within minutes.' },
      { q: 'What must be asked before MRI in a metalworker?', a: 'About intraocular metallic foreign bodies — an orbital radiograph may be needed first.' },
      { q: 'First-line imaging for gallstones in pregnancy?', a: 'Ultrasound — no radiation and excellent for stones and fluid.' },
    ],
    checks: ['Clinical question written on the request', 'Side and site stated', 'Two views obtained for bone', 'Correct window used on CT', 'Pregnancy status established', 'MRI safety screening completed', 'Patient stability considered before moving to the scanner'],
  },

  {
    id: 'AS-RADS-0021',
    type: 'principles',
    title: 'Radiation Dose and Protection — Justification, ALARA and What a Scan Actually Costs',
    short: 'Radiation dose and protection',
    summary:
      'Ionising radiation damages DNA, and the risk is cumulative over a lifetime. A single abdominal CT delivers roughly the dose of several hundred chest radiographs. The two governing principles are JUSTIFICATION — this scan must do more good than harm — and OPTIMISATION — as low as reasonably achievable.',
    domains: ['radiology', 'public_health'],
    intents: ['understand', 'act'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'radiation dose', 'radiation protection', 'ionising radiation', 'alara', 'as low as reasonably achievable',
      'justification', 'optimisation', 'millisievert', 'msv', 'effective dose', 'background radiation',
      'stochastic effect', 'deterministic effect', 'radiation in pregnancy', 'lead apron', 'dosimeter',
    ],
    terms: [
      'radiation', 'ionising', 'dose', 'millisievert', 'msv', 'effective dose', 'alara',
      'justification', 'optimisation', 'stochastic', 'deterministic', 'background radiation',
      'pregnancy', 'fetal dose', 'ten day rule', 'lead apron', 'thyroid shield', 'dosimeter',
      'inverse square law', 'time distance shielding', 'paediatric dose', 'cumulative dose',
    ],
    confirm_locally: true,
    body: {
      what_ionising_radiation_actually_does: {
        the_mechanism: 'It carries enough energy to eject electrons from atoms — to IONISE them. In tissue this damages molecules directly and, more importantly, splits water to produce free radicals that damage DNA. Most damage is repaired; some is not; and a small fraction of unrepaired damage can lead to a mutation that later becomes a cancer.',
        the_two_kinds_of_harm: {
          deterministic: 'Occurs above a THRESHOLD dose, and the severity rises with dose. Skin erythema, hair loss, cataract, sterility, and — at high doses — acute radiation syndrome. These are effectively confined to radiotherapy, prolonged interventional procedures and accidents, not diagnostic imaging.',
          stochastic: 'The one that matters for diagnostic imaging. NO THRESHOLD is assumed: any dose carries some probability of causing a cancer, and the PROBABILITY rises with dose while the SEVERITY does not. This is why there is no "safe" dose, only a justified one, and why doses accumulate over a lifetime.',
        },
        the_unit: 'The SIEVERT (Sv) measures EFFECTIVE dose — it weights the physical energy absorbed by how damaging that radiation type is and how sensitive the irradiated organs are. Diagnostic doses are quoted in MILLISIEVERTS (mSv).',
      },

      what_things_actually_cost_in_dose: {
        the_reference_point: 'Natural BACKGROUND radiation is roughly 2–3 mSv per year in most places — from cosmic rays, radon, the ground, and the potassium in our own bodies. Quoting doses in "equivalent chest X-rays" or "months of background" is far more meaningful to a patient than millisieverts.',
        approximate_doses: 'Chest radiograph ~0.02 mSv (a few days of background) · limb radiograph, less still · abdominal radiograph ~0.7 mSv · mammogram ~0.4 mSv · head CT ~2 mSv · chest CT ~7 mSv · ABDOMEN-PELVIS CT ~10 mSv, roughly 500 chest radiographs or 3–4 years of background · CT pulmonary angiogram similar · a barium enema or a long interventional procedure can exceed this.',
        the_practical_conclusion: 'ULTRASOUND AND MRI CARRY NO IONISING RADIATION AT ALL. Where either answers the question, the radiation argument is settled before it starts.',
      },

      the_two_principles_that_govern_everything: {
        justification: 'No exposure without net benefit. The examination must be expected to do more good than harm FOR THIS PATIENT. It requires a specific clinical question, and it requires that the answer will change management. "Routine" imaging without a question is unjustified by definition.',
        optimisation_alara: 'ALARA — As Low As Reasonably Achievable. Once justified, use the lowest dose that still answers the question: correct protocol, correct field limited to the area of interest, no unnecessary repeat phases, and — importantly — paediatric protocols for children rather than adult settings scaled down by eye.',
        the_third_leg: 'DOSE LIMITS apply to staff and the public, not to patients undergoing justified medical exposure — a patient has no dose limit, which is precisely why justification carries the whole weight.',
      },

      children: {
        why_they_are_different:
          'Children are substantially more radiosensitive than adults, because their tissues are dividing rapidly, and they have a LONGER LIFETIME AHEAD for a stochastic cancer to appear. The same dose therefore carries a considerably higher lifetime risk in a child.',
        what_follows: 'Prefer ultrasound and MRI wherever they will answer the question. Use paediatric CT protocols — the "IMAGE GENTLY" principle — and never simply apply adult settings. Question every repeat scan. Involve a radiologist early, because a well-chosen single scan beats three poorly chosen ones.',
      },

      pregnancy: {
        the_honest_position:
          'Fetal risk depends on dose and on gestational age, with the greatest sensitivity during organogenesis. But DIAGNOSTIC doses are far below the thresholds associated with deterministic fetal harm, and the small stochastic risk is usually vastly outweighed by the risk of missing a serious maternal diagnosis.',
        the_rule_that_matters_most: 'NEVER WITHHOLD A GENUINELY INDICATED SCAN BECAUSE A WOMAN IS PREGNANT. A missed pulmonary embolism, aortic dissection or intracranial haemorrhage kills the mother, and the fetus with her. Discuss it, document the discussion, use the lowest-dose adequate protocol, shield where it does not degrade the image, and image.',
        practical_steps: 'Ask every woman of childbearing age about the possibility of pregnancy and record the answer — this is the source of most avoidable exposures. Prefer ultrasound and MRI. Note that imaging of the head, chest or a limb delivers a negligible fetal dose because the uterus is outside the beam.',
        the_ten_day_rule: 'An older convention of imaging the abdomen and pelvis only in the first ten days of the menstrual cycle. Largely superseded by asking directly and by justification, but you will still encounter the term.',
      },

      protecting_staff_and_yourself: {
        the_three_levers: {
          time: 'Minimise the time spent in the radiation field. In fluoroscopy this means minimising SCREENING time, which is the single largest determinant of dose to everyone in the room.',
          distance: 'The INVERSE SQUARE LAW — dose falls with the SQUARE of distance. Doubling your distance from the source quarters your dose. Simply stepping back two metres is remarkably effective and costs nothing.',
          shielding: 'Lead aprons, thyroid shields, lead glasses and mobile screens. Aprons must be checked for cracks; a damaged apron gives false confidence.',
        },
        the_key_scatter_fact:
          'In fluoroscopy the main hazard to staff is not the primary beam but SCATTERED radiation from the PATIENT. Scatter is greatest on the side where the X-ray TUBE is — so with an under-couch tube, standing beside the patient exposes your legs, and with the tube above, your head, neck, eyes and thyroid take more. Stand on the DETECTOR side wherever the setup allows.',
        monitoring: 'Staff working with radiation wear a DOSIMETER, worn consistently in the correct position and outside the apron at collar level or as your service specifies. It monitors compliance and detects unexpected exposure — it does not protect anyone.',
        holding_patients: 'Where a patient must be supported during an exposure, it should not be a member of staff who is regularly exposed, should never be someone pregnant, and the person must be given an apron and positioned out of the primary beam.',
      },

      the_conversation_with_the_patient: {
        how_to_put_it_honestly: 'Give the risk in context — "this scan gives about the same radiation as three years of the background radiation everyone gets from the environment, and it raises your lifetime cancer risk by a very small amount" — and then give the counterweight: "not doing it means we might miss something that would harm you today". Patients accept justified imaging readily when the reasoning is shared.',
        what_not_to_do: 'Do not say "it is completely safe", which is untrue, and do not overstate the risk so that a patient refuses a scan they need. Both mislead.',
      },
    },
    warnings: [
      'There is NO safe dose of ionising radiation — only a justified one. Stochastic risk is assumed to have no threshold.',
      'An abdomen-pelvis CT delivers roughly 10 mSv — about 500 chest radiographs, or 3 to 4 years of background radiation.',
      'Ultrasound and MRI carry NO ionising radiation. Where either answers the question, prefer it.',
      'Children are considerably more radiosensitive and have longer for a cancer to appear. Use paediatric protocols, never scaled-down adult ones.',
      'NEVER withhold a genuinely indicated scan in pregnancy — a missed diagnosis kills the mother and the fetus.',
      'Ask every woman of childbearing age about pregnancy and record the answer.',
      'Dose limits apply to staff and the public, NOT to patients — which is why justification carries the whole weight.',
      'In fluoroscopy the hazard to staff is SCATTER from the patient, not the primary beam. Stand on the detector side.',
      'Doubling your distance from the source quarters your dose.',
      'A dosimeter monitors exposure; it does not protect. Wear it correctly and consistently.',
      'Check lead aprons for cracks — a damaged apron gives false confidence.',
      'Never say a scan is "completely safe", and never overstate risk so a patient refuses a scan they need.',
    ],
    limitations: ['Dose figures are approximate and vary substantially with equipment, protocol and patient size. Use local diagnostic reference levels.'],
    cards: [
      { q: 'What is the difference between deterministic and stochastic effects?', a: 'Deterministic have a threshold and worsen with dose; stochastic have no threshold — dose raises probability, not severity.' },
      { q: 'What are the two governing principles?', a: 'Justification (net benefit for this patient) and optimisation (ALARA — as low as reasonably achievable).' },
      { q: 'Roughly what dose is an abdomen-pelvis CT?', a: 'About 10 mSv — around 500 chest radiographs or 3 to 4 years of background.' },
      { q: 'What is annual background radiation?', a: 'Roughly 2 to 3 mSv.' },
      { q: 'Why are children more vulnerable?', a: 'Rapidly dividing tissues and a longer lifetime for a stochastic cancer to develop.' },
      { q: 'Should you withhold an indicated scan in pregnancy?', a: 'No — a missed diagnosis kills the mother and therefore the fetus. Discuss, document, optimise and image.' },
      { q: 'Do patients have a dose limit?', a: 'No — dose limits apply to staff and the public. That is why justification carries the weight.' },
      { q: 'What are the three levers of staff protection?', a: 'Time, distance and shielding.' },
      { q: 'What does the inverse square law mean practically?', a: 'Doubling your distance quarters your dose.' },
      { q: 'What is the main staff hazard in fluoroscopy?', a: 'Scattered radiation from the patient — stand on the detector side, away from the tube.' },
    ],
    checks: ['Examination justified against a specific clinical question', 'Ultrasound or MRI considered first', 'Pregnancy status asked and recorded', 'Paediatric protocol used for children', 'Field limited to the area of interest', 'Repeat and multiphase scans questioned', 'Staff shielded, distanced and wearing dosimeters', 'Risk explained in context the patient can understand'],
  },

  {
    id: 'AS-RADS-0022',
    type: 'drug',
    title: 'Contrast Agents — Iodinated, Gadolinium, and the Harms Worth Knowing',
    short: 'Contrast agents',
    summary:
      'Contrast makes vessels and abnormal tissue visible by changing how they attenuate X-rays or behave in a magnetic field. The three questions before giving any of it: kidneys, allergy, and — for iodinated contrast — thyroid and metformin.',
    domains: ['radiology', 'pharmacology', 'renal'],
    intents: ['prescribe_reference', 'act'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'contrast', 'contrast media', 'contrast agent', 'iodinated contrast', 'iv contrast',
      'gadolinium', 'contrast nephropathy', 'contrast induced nephropathy', 'contrast allergy',
      'contrast reaction', 'nephrogenic systemic fibrosis', 'barium', 'gastrografin',
      'metformin and contrast', 'extravasation',
    ],
    terms: [
      'contrast', 'iodinated', 'gadolinium', 'nephropathy', 'contrast induced', 'anaphylactoid',
      'allergy', 'premedication', 'metformin', 'lactic acidosis', 'nephrogenic systemic fibrosis',
      'nsf', 'barium', 'water soluble contrast', 'gastrografin', 'extravasation', 'thyrotoxicosis',
      'egfr', 'hydration', 'shellfish',
    ],
    confirm_locally: true,
    body: {
      what_contrast_is_for: 'Native tissues often attenuate similarly, so a lesion is invisible against its background. Contrast agents change that: they are dense (iodine) or magnetically active (gadolinium), so they highlight blood vessels, show where blood supply is increased or the blood-brain barrier is broken, and outline the lumen of hollow organs. "Enhancement" simply means a structure has taken up contrast and become brighter.',

      iodinated_contrast_for_ct_and_fluoroscopy: {
        what_it_is: 'Iodine-containing compounds given intravenously, orally or into a cavity. Modern agents are non-ionic and low- or iso-osmolar, which made them considerably safer than the older high-osmolar ionic agents.',
        the_three_checks_before_giving_it: {
          kidneys: 'Renal function — usually eGFR. Risk of contrast-associated kidney injury rises with pre-existing chronic kidney disease, particularly diabetic nephropathy, dehydration, heart failure, and other nephrotoxic drugs.',
          allergy: 'Previous reaction to contrast specifically, plus severe asthma and other severe allergy.',
          thyroid_and_metformin: 'See below — both are specific to iodinated contrast and both are regularly forgotten.',
        },
        contrast_associated_kidney_injury: {
          what: 'A rise in creatinine within 48–72 hours of intravascular contrast, usually transient.',
          the_important_re_appraisal:
            'This was historically considered common and dangerous. Better-controlled studies comparing patients who received contrast with matched patients who did not suggest the true attributable risk is substantially LOWER than once believed, and that much of the observed creatinine rise reflects the illness that prompted the scan rather than the contrast. The practical consequence matters: FEAR OF CONTRAST NEPHROPATHY SHOULD NOT PREVENT A SCAN THAT WILL CHANGE MANAGEMENT in a sick patient. Withholding a CT for suspected aortic dissection because of a modestly reduced eGFR is the greater harm.',
          who_still_warrants_care: 'Significantly reduced eGFR, dehydration, and repeated contrast within a short interval.',
          what_actually_helps: 'HYDRATION with intravenous fluid before and after in higher-risk patients, using the lowest volume of contrast that answers the question, avoiding repeated studies close together, and reviewing other nephrotoxics. Evidence for prophylactic sodium bicarbonate and N-acetylcysteine is weak and they are no longer routinely recommended.',
        },
        allergic_and_anaphylactoid_reactions: {
          the_spectrum: 'Mild — flushing, warmth, mild urticaria, nausea. Moderate — marked urticaria, mild bronchospasm, vomiting. SEVERE — laryngeal oedema, severe bronchospasm, hypotension, cardiovascular collapse. Severe reactions are rare but occur, so resuscitation equipment and trained staff must be available wherever contrast is given.',
          most_reactions_are_not_true_allergy: 'Many are ANAPHYLACTOID — direct mediator release without prior sensitisation — which is why a reaction can occur on first exposure. Management, however, is the same as for anaphylaxis: adrenaline for severe reactions.',
          the_shellfish_myth:
            'There is NO specific link between shellfish allergy and iodinated contrast reaction. The iodine content of shellfish is irrelevant; shellfish allergy is to tropomyosin protein. Asking about shellfish gives false reassurance when negative and causes needless refusal when positive. Ask about PREVIOUS CONTRAST REACTIONS and about severe allergy generally.',
          premedication: 'Corticosteroid and antihistamine regimens are used before repeat exposure in patients with previous moderate reactions. They reduce but do not abolish risk, and they require hours of lead time — so they are impractical in an emergency, where the decision is whether the scan is needed enough to proceed with full resuscitation readiness.',
        },
        metformin: {
          the_real_mechanism: 'Metformin does NOT cause kidney injury and does not interact chemically with contrast. The concern is INDIRECT: IF contrast precipitates acute kidney injury, metformin accumulates, and accumulated metformin can cause LACTIC ACIDOSIS.',
          what_that_means_in_practice: 'In patients with NORMAL renal function receiving standard intravenous contrast, metformin generally does NOT need to be stopped. In significantly reduced eGFR, or where acute kidney injury is likely or present, it is withheld at the time of the study and restarted after renal function is rechecked at 48 hours. Follow your local protocol — practice differs — but understand that the reasoning is about accumulation, not a direct interaction.',
        },
        thyroid: 'The iodine load can precipitate THYROTOXICOSIS in patients with autonomous thyroid nodules or latent Graves disease — the Jod-Basedow phenomenon — typically weeks after exposure. It also renders the thyroid unable to take up radioiodine for weeks to months, so iodinated contrast must be AVOIDED before planned thyroid scintigraphy or radioiodine treatment. Giving contrast to a patient awaiting radioiodine delays their treatment substantially.',
        extravasation: 'Contrast leaking into the soft tissues around the cannula causes pain and swelling and, rarely, compartment syndrome or skin necrosis. Stop the injection, elevate the limb, and observe. Assess neurovascular status and seek surgical advice if pain is severe, the compartment is tense, or there is sensory or vascular change.',
      },

      gadolinium_for_mri: {
        what_it_does: 'A paramagnetic metal that shortens T1 relaxation, so enhancing tissue appears BRIGHT on T1 images. It shows vascularity and breakdown of the blood-brain barrier — which is why an enhancing brain lesion means the barrier is disrupted.',
        nephrogenic_systemic_fibrosis: {
          what: 'A rare but serious and sometimes fatal fibrosing condition of skin, joints and internal organs, occurring in patients with SEVERE renal impairment exposed to gadolinium.',
          the_current_position: 'Risk relates strongly to the agent class — older linear agents carried far more risk than modern macrocyclic ones — and to the degree of renal impairment. With current agents and screening it has become very rare. Renal function is still checked before gadolinium, and in severe impairment or dialysis the decision is made with radiology.',
        },
        other_considerations: 'Gadolinium DEPOSITION in brain and bone has been demonstrated after repeated exposure; no clinical harm has been established, but it supports not giving it without reason. Gadolinium is generally AVOIDED in pregnancy because it crosses the placenta and its fetal effects are not established — non-contrast MRI is preferred.',
      },

      enteral_contrast: {
        barium: 'Excellent mucosal coating and image quality for swallow and follow-through studies. ABSOLUTELY CONTRAINDICATED where PERFORATION is suspected or where the patient may go to surgery — barium in the peritoneum causes a severe, persistent chemical peritonitis and dense adhesions. It should also be avoided if there is a risk of ASPIRATION into the lungs.',
        water_soluble_agents: 'Used where perforation or aspiration is a concern, because they are absorbed and cause far less peritoneal reaction. Note that some water-soluble agents are highly HYPEROSMOLAR and can cause severe pulmonary oedema if aspirated, so the specific agent matters — an iso-osmolar agent is used when aspiration is the risk.',
      },

      the_summary_before_you_press_inject: 'Is the contrast NECESSARY to answer the question? Renal function known? Previous reaction or severe allergy? Pregnancy? Metformin and renal function considered? Thyroid scintigraphy or radioiodine planned? Cannula good and correctly sited? Resuscitation equipment and trained staff present?',
    },
    warnings: [
      'There is NO link between shellfish allergy and contrast reaction — the shellfish question misleads in both directions. Ask about previous CONTRAST reactions.',
      'Fear of contrast nephropathy should NOT prevent a scan that will change management — the attributable risk is lower than historically believed.',
      'Metformin does not interact with contrast directly. The concern is accumulation IF acute kidney injury occurs, causing lactic acidosis.',
      'BARIUM is absolutely contraindicated where perforation is suspected — it causes severe chemical peritonitis.',
      'Hyperosmolar water-soluble contrast can cause severe pulmonary oedema if aspirated — choose an iso-osmolar agent when aspiration is a risk.',
      'Iodinated contrast blocks radioiodine uptake for weeks to months — avoid it before planned thyroid scintigraphy or radioiodine treatment.',
      'Iodinated contrast can precipitate thyrotoxicosis weeks later in autonomous nodular disease (Jod-Basedow).',
      'Contrast reactions are often anaphylactoid and can occur on FIRST exposure. Resuscitation equipment and trained staff must be present.',
      'Premedication takes hours and is impractical in an emergency — the decision there is whether the scan is needed enough to proceed prepared.',
      'Gadolinium is avoided in pregnancy — it crosses the placenta and fetal effects are not established.',
      'Check renal function before gadolinium; nephrogenic systemic fibrosis occurs in severe impairment.',
      'Extravasation with severe pain or a tense compartment needs urgent surgical assessment.',
      'Evidence for prophylactic N-acetylcysteine and bicarbonate is weak — hydration is what helps.',
    ],
    limitations: ['Agent choice, eGFR thresholds, metformin policy and premedication regimens differ substantially between institutions. Scout states no doses — follow local protocol.'],
    cards: [
      { q: 'Is shellfish allergy relevant to contrast?', a: 'No — there is no link. Ask about previous contrast reactions and severe allergy generally.' },
      { q: 'Why is metformin withheld around contrast?', a: 'Not a direct interaction — if contrast causes AKI, metformin accumulates and can cause lactic acidosis.' },
      { q: 'Has contrast nephropathy been over-estimated?', a: 'Yes — controlled studies suggest much lower attributable risk. Do not withhold a scan that will change management.' },
      { q: 'When is barium absolutely contraindicated?', a: 'Suspected perforation or likely surgery — it causes severe chemical peritonitis.' },
      { q: 'Why avoid iodinated contrast before radioiodine?', a: 'The iodine load blocks thyroid uptake for weeks to months.' },
      { q: 'What is the Jod-Basedow phenomenon?', a: 'Iodine-induced thyrotoxicosis in autonomous nodular thyroid disease.' },
      { q: 'What is nephrogenic systemic fibrosis?', a: 'A rare fibrosing disease from gadolinium in severe renal impairment — much rarer with modern macrocyclic agents.' },
      { q: 'Can a contrast reaction occur on first exposure?', a: 'Yes — many are anaphylactoid, not true allergy.' },
      { q: 'What actually reduces contrast-associated kidney injury?', a: 'Hydration and using the lowest necessary volume. N-acetylcysteine and bicarbonate are not recommended.' },
      { q: 'What does an enhancing brain lesion indicate?', a: 'Breakdown of the blood-brain barrier.' },
    ],
    checks: ['Contrast confirmed necessary to answer the question', 'Renal function known', 'Previous contrast reaction and severe allergy asked about — not shellfish', 'Pregnancy status established', 'Metformin and renal function considered', 'Planned thyroid scintigraphy or radioiodine excluded', 'Cannula sited and patent', 'Resuscitation equipment and trained staff available'],
  },
];
