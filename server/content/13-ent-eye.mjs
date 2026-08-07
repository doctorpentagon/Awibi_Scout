/** Ear, nose, throat and eye. */

export default [
  {
    id: 'AS-ENTX-0001',
    type: 'differential',
    title: 'Otitis — Externa, Acute Media, Media with Effusion, and Chronic',
    short: 'Otitis types',
    summary:
      'Four different diseases sharing a name. The discriminator is simple: pain on moving the pinna means the problem is OUTSIDE the drum; a bulging red drum means it is INSIDE. Their treatments are opposite.',
    domains: ['infectious_disease', 'paediatrics'],
    intents: ['classify', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['otitis externa', 'otitis media', 'glue ear', 'swimmers ear', 'ear infection', 'otitis', 'csom'],
    terms: ['otitis', 'externa', 'media', 'effusion', 'glue ear', 'tympanic membrane', 'mastoiditis', 'cholesteatoma', 'perforation', 'otorrhoea', 'tragus'],
    confirm_locally: true,
    body: {
      the_discriminating_examination: {
        tragal_tenderness: 'Pain on pressing the tragus or pulling the pinna means OTITIS EXTERNA — the canal is inflamed.',
        the_drum: 'A red, BULGING, immobile drum with loss of the light reflex means OTITIS MEDIA — pus behind the drum. A red drum alone is not enough: a crying child has a red drum. BULGING is the sign that matters.',
      },
      otitis_externa: {
        what: 'Infection or inflammation of the ear CANAL. Pseudomonas and Staphylococcus aureus, sometimes fungal (Aspergillus, Candida).',
        risk: 'Swimming, humidity, cotton buds, hearing aids, eczema and psoriasis of the canal.',
        features: 'Itch first, then pain, tragal tenderness, a swollen debris-filled canal, scanty discharge, and conductive hearing loss if the canal occludes.',
        management: 'AURAL TOILET (careful cleaning) is at least as important as any drop — a drop cannot reach through debris. Topical antibiotic or antifungal with or without steroid, keep the ear DRY, and stop cotton buds.',
        the_emergency_variant: {
          name: 'NECROTISING (malignant) otitis externa',
          who: 'ELDERLY DIABETICS and the immunosuppressed.',
          what: 'Pseudomonas osteomyelitis of the skull base.',
          red_flags: 'Severe DEEP boring pain, especially at night and out of proportion to the findings; granulation tissue at the bony-cartilaginous junction of the canal floor; and CRANIAL NERVE palsy — facial nerve first.',
          action: 'Urgent ENT referral, imaging and prolonged systemic anti-pseudomonal therapy. Mortality is significant. Any diabetic with severe unremitting ear pain needs this excluded.',
        },
      },
      acute_otitis_media: {
        what: 'Infection of the MIDDLE ear. Commonest in young children because the Eustachian tube is shorter, wider and more horizontal.',
        organisms: 'Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis; viral in a large proportion.',
        features: 'Rapid-onset ear pain, fever, irritability, and in infants ear-pulling and poor feeding. A BULGING drum. If the drum PERFORATES the pain suddenly RELIEVES and purulent discharge appears — that sequence is diagnostic.',
        management: 'Most cases in otherwise well children resolve without antibiotics; analgesia is the priority and delayed-prescription strategies are widely used. Antibiotics are indicated by age, severity, bilaterality, perforation and comorbidity per local guidance.',
      },
      otitis_media_with_effusion: {
        also_called: 'GLUE EAR.',
        what: 'Fluid behind an INTACT drum WITHOUT acute infection. Not painful.',
        features: 'A dull, retracted or amber drum with reduced mobility; sometimes an air-fluid level or bubbles. Conductive HEARING LOSS is the problem.',
        why_it_matters: 'It is the commonest cause of acquired hearing loss in children, and hearing loss at that age impairs SPEECH AND LANGUAGE DEVELOPMENT and school performance. A child described as "not listening", inattentive or with delayed speech needs their hearing tested — not their behaviour managed.',
        management: 'Most resolve spontaneously; a period of watchful waiting with hearing assessment is standard, with grommets or hearing aids if it persists and affects development.',
      },
      chronic_suppurative_otitis_media: {
        what: 'Persistent discharge through a PERFORATED drum for weeks or more.',
        the_dangerous_form: {
          cholesteatoma:
            'Keratinising squamous epithelium trapped in the middle ear, which expands and ERODES BONE. It is not a tumour but behaves locally like one.',
          suspect_if: 'FOUL-SMELLING discharge, an attic or marginal perforation, granulation tissue or visible white debris, and progressive hearing loss.',
          why_it_matters: 'It erodes into the ossicles, facial nerve, labyrinth and intracranially — causing facial palsy, vertigo, meningitis and brain abscess. It requires SURGERY; drops will not treat it.',
        },
      },
      complications_to_recognise: {
        mastoiditis:
          'Post-auricular swelling, redness and tenderness with the PINNA PUSHED FORWARD AND DOWN, and loss of the post-auricular crease. This is a complication of acute otitis media and requires urgent admission, intravenous antibiotics and ENT review.',
        facial_palsy: 'A lower motor neurone facial palsy with ear disease is never benign — it means the infection has reached the facial nerve canal.',
        intracranial: 'Meningitis, sigmoid sinus thrombosis, extradural or brain abscess. Headache, fever, altered consciousness or focal signs in a patient with ear disease demand urgent imaging.',
      },
      the_one_line_summary: 'Pull the pinna: pain means externa. Look at the drum: bulging means acute media, dull and retracted means effusion, perforated and smelly means chronic — and think cholesteatoma.',
    },
    warnings: [
      'Severe deep ear pain in an elderly diabetic is necrotising otitis externa until excluded. Urgent ENT referral.',
      'Post-auricular swelling with the pinna pushed forward is MASTOIDITIS — admit urgently.',
      'Foul-smelling chronic discharge with an attic perforation suggests cholesteatoma. It needs surgery, not drops.',
      'Facial nerve palsy or vertigo with ear disease indicates spread beyond the middle ear. Refer immediately.',
      'A child with glue ear needs a hearing assessment. Untreated hearing loss impairs speech and language development.',
    ],
    limitations: ['Antibiotic thresholds and choices are set by national guidance and vary widely.'],
    cards: [
      { q: 'How do you separate otitis externa from otitis media at the bedside?', a: 'Tragal tenderness and pain on pulling the pinna = externa. A bulging drum = media.' },
      { q: 'What is the key sign in acute otitis media — redness or bulging?', a: 'Bulging. A crying child has a red drum.' },
      { q: 'Severe night ear pain in an elderly diabetic?', a: 'Necrotising otitis externa — skull base osteomyelitis. Urgent referral.' },
      { q: 'Why does glue ear matter if it is painless?', a: 'It causes conductive hearing loss that impairs speech, language and schooling.' },
      { q: 'Foul discharge with an attic perforation?', a: 'Cholesteatoma — erodes bone, needs surgery.' },
      { q: 'What is the sign of mastoiditis?', a: 'Post-auricular swelling with the pinna pushed forward and down.' },
    ],
    checks: ['Tragus and pinna tested', 'Drum described (bulging/retracted/perforated)', 'Hearing assessed in effusion', 'Post-auricular area examined', 'Facial nerve tested', 'Diabetic status noted in severe otalgia'],
  },

  {
    id: 'AS-EYEX-0001',
    type: 'examination',
    title: 'The Eye Examination — Acuity, Fields, Perimetry, Pupils and Fundoscopy',
    short: 'Eye examination',
    summary:
      'A fixed order. Acuity is the vital sign of the eye and must be recorded before anything else — including before any drops. Then pupils, then fields, then the back of the eye.',
    domains: ['neurology', 'anatomy'],
    intents: ['examine'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['eye examination', 'visual acuity', 'visual fields', 'perimetry', 'fundoscopy', 'ophthalmoscopy', 'snellen', 'rapd'],
    terms: ['visual acuity', 'snellen', 'pinhole', 'visual field', 'confrontation', 'perimetry', 'fundoscopy', 'ophthalmoscope', 'rapd', 'papilloedema', 'cup disc ratio', 'red reflex'],
    body: {
      order_of_examination: 'Acuity → pupils → eye movements → visual fields → anterior segment → fundoscopy. Acuity FIRST, always, and before any dilating or anaesthetic drop.',
      visual_acuity: {
        why_first: 'It is the vital sign of the eye. An acuity recorded after treatment has begun is medicolegally and clinically worthless, and a change in acuity is the single most useful measure of whether an eye is getting better or worse.',
        how: 'Snellen chart at the stated distance, each eye SEPARATELY with the other properly occluded, WITH the patient\'s usual glasses or contact lenses on.',
        notation: 'Recorded as distance over line — 6/6 means at 6 metres the patient reads what a normal eye reads at 6 metres. 6/60 means they read at 6 metres what should be readable at 60. The LARGER the bottom number, the WORSE the vision.',
        if_they_cannot_read_the_top_line: 'Step down in order: Counting Fingers → Hand Movements → Perception of Light → No Perception of Light. Record which.',
        the_pinhole_test:
          'The most useful single manoeuvre in the whole examination. Have the patient look through a pinhole. If acuity IMPROVES, the defect is REFRACTIVE — they need glasses, not a referral. If acuity does NOT improve, there is pathology in the media, retina or optic nerve. This one test separates the optician\'s problem from the ophthalmologist\'s.',
        children_and_the_illiterate: 'Use picture charts, Sheridan-Gardiner or a tumbling E chart. In infants, assess fixing and following behaviour and look for objection to occlusion of one eye.',
      },
      pupils: {
        the_relative_afferent_pupillary_defect: {
          what: 'The SWINGING TORCH test. Move a bright light rapidly between the eyes. Normally both pupils stay constricted. If, when the light reaches the affected eye, BOTH pupils paradoxically DILATE, that eye has an RAPD.',
          means: 'A defect in the AFFERENT pathway — optic nerve or extensive retina — on that side. Optic neuritis, ischaemic optic neuropathy, extensive retinal detachment, central retinal artery occlusion, advanced glaucoma.',
          why_it_matters: 'It is objective. It cannot be feigned and does not depend on the patient\'s report. An RAPD is hard evidence of optic nerve disease.',
          note: 'A cataract, however dense, does NOT cause an RAPD. If someone has poor vision and an RAPD, do not blame the cataract.',
        },
      },
      visual_fields: {
        confrontation: 'Sit at the same level, about an arm\'s length away. Test each eye against your own field, quadrant by quadrant, using a small red target or finger movement. Crude but detects large defects.',
        formal_perimetry: {
          what: 'Machine-based mapping of the field.',
          static_automated: 'The standard (for example Humphrey). The machine presents stationary lights of varying brightness at fixed points and finds the dimmest one seen at each. Used for GLAUCOMA monitoring and neurological field defects.',
          kinetic: 'Goldmann. A moving target is brought inward until seen, mapping isopters. Better for very poor vision and for peripheral field assessment.',
          why_it_beats_confrontation: 'Confrontation misses early and shallow defects entirely. Glaucoma is diagnosed and monitored on perimetry, not at the bedside.',
        },
        localising_the_lesion: {
          monocular_loss: 'Anterior to the chiasm — that eye, its retina or its optic nerve.',
          bitemporal_hemianopia: 'The CHIASM — the crossing nasal fibres. Pituitary adenoma, craniopharyngioma, meningioma.',
          homonymous_hemianopia: 'Behind the chiasm — the opposite optic tract, radiation or occipital cortex.',
          quadrantanopia:
            'Superior quadrant = TEMPORAL lobe (Meyer loop) — "PIE IN THE SKY". Inferior quadrant = PARIETAL lobe.',
          macular_sparing: 'Homonymous hemianopia with the central field preserved suggests an OCCIPITAL lesion, because the occipital pole has dual blood supply.',
        },
      },
      fundoscopy: {
        preparation: 'Darken the room. Use the patient\'s right eye with your right eye and your right hand, and vice versa. Ask the patient to fix on a distant point. Dilating drops give a far better view — but check the pupils and record acuity FIRST, and be aware of the small risk of precipitating angle-closure in susceptible eyes.',
        the_red_reflex:
          'Look from about arm\'s length first. An ABSENT or WHITE red reflex (leukocoria) is critical — in a child it means RETINOBLASTOMA or congenital cataract until proven otherwise and warrants same-day referral. In adults it suggests dense cataract or vitreous haemorrhage.',
        what_to_assess_at_the_disc: [
          'COLOUR — pale means optic atrophy.',
          'MARGINS — blurred means swelling. Bilateral disc swelling from raised intracranial pressure is PAPILLOEDEMA; the word should be reserved for that cause.',
          'CUP-TO-DISC RATIO — an enlarged cup (over about 0.5, or asymmetry between eyes) suggests GLAUCOMA.',
          'Then follow the four vascular arcades out, then examine the macula last (it is the most uncomfortable for the patient).',
        ],
        key_patterns: {
          diabetic_retinopathy: 'Microaneurysms, dot and blot haemorrhages, hard exudates, cotton wool spots; and in proliferative disease, NEW VESSELS — which are sight-threatening and need urgent referral.',
          hypertensive_retinopathy: 'Arteriolar narrowing, arteriovenous nipping, flame haemorrhages, cotton wool spots, and in malignant hypertension papilloedema.',
          papilloedema: 'Blurred disc margins, loss of venous pulsation, disc hyperaemia. Raised intracranial pressure until proven otherwise.',
          central_retinal_artery_occlusion: 'A pale retina with a CHERRY-RED SPOT at the macula. Sudden painless total visual loss — an ocular stroke and a time-critical emergency.',
        },
      },
      the_red_eye_discriminators: {
        the_question: 'Is the eye PAINFUL, is VISION reduced, and is the PUPIL abnormal? If any is yes, it is not conjunctivitis.',
        conjunctivitis: 'Gritty rather than painful, normal vision, normal pupil, diffuse redness, discharge.',
        keratitis_or_corneal_ulcer: 'Painful, photophobic, reduced vision, stains with fluorescein. CONTACT LENS wear is the key risk factor.',
        anterior_uveitis: 'Painful, photophobic, SMALL irregular pupil, circumcorneal (ciliary) injection, vision reduced.',
        acute_angle_closure_glaucoma:
          'Severe pain, often with HEADACHE, NAUSEA AND VOMITING (frequently mistaken for a gastrointestinal or neurological problem), haloes around lights, a hazy cornea, a FIXED MID-DILATED oval pupil, and a hard eye. A sight-threatening emergency requiring immediate ophthalmology referral.',
        scleritis: 'Deep boring pain that wakes the patient, worse on eye movement; associated with systemic autoimmune disease.',
      },
    },
    warnings: [
      'Record visual acuity before any drop or treatment. It is the vital sign of the eye.',
      'An absent or white red reflex in a child is retinoblastoma or congenital cataract until proven otherwise — same-day referral.',
      'A cataract does not cause a relative afferent pupillary defect. If there is an RAPD, look for optic nerve or retinal disease.',
      'Severe eye pain with headache, vomiting and a fixed mid-dilated pupil is acute angle-closure glaucoma. Immediate referral — vision is lost within hours.',
      'Sudden painless visual loss with a cherry-red spot is central retinal artery occlusion — a time-critical ocular stroke.',
      'A red eye that is painful, has reduced vision, or has an abnormal pupil is not conjunctivitis.',
    ],
    limitations: ['Direct ophthalmoscopy gives a narrow field and misses peripheral pathology. Formal assessment requires slit lamp and dilated examination.'],
    cards: [
      { q: 'What must be recorded before anything else in an eye examination?', a: 'Visual acuity, before any drops.' },
      { q: 'What does the pinhole test tell you?', a: 'If acuity improves, the problem is refractive. If not, there is media, retinal or optic nerve pathology.' },
      { q: 'What does an RAPD indicate, and what does NOT cause it?', a: 'Optic nerve or extensive retinal disease. A cataract does not cause one.' },
      { q: 'Superior quadrantanopia localises where?', a: 'Temporal lobe, Meyer loop — "pie in the sky". Inferior quadrant is parietal.' },
      { q: 'White red reflex in a child?', a: 'Retinoblastoma or congenital cataract until proven otherwise. Same-day referral.' },
      { q: 'Which red eye features exclude simple conjunctivitis?', a: 'Pain, reduced vision, or an abnormal pupil.' },
      { q: 'Fixed mid-dilated pupil with severe pain and vomiting?', a: 'Acute angle-closure glaucoma — immediate referral.' },
    ],
    checks: ['Acuity recorded each eye with correction, before drops', 'Pinhole tested if acuity reduced', 'Swinging torch test for RAPD', 'Fields tested by confrontation', 'Red reflex checked', 'Discs, vessels and macula examined', 'Urgent referral if any red flag'],
  },
];
