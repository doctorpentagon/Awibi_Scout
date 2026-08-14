/**
 * Ophthalmology — from the Ophthalmology special-posting compilation (403 pages).
 *
 * Written from scratch: every term defined before use. Sight is lost in hours
 * in several of these conditions, and the commonest reason is that the first
 * clinician did not know which red eye was the dangerous one.
 */

export default [
  {
    id: 'AS-EYEX-0002',
    type: 'differential',
    title: 'The Red Eye — Which One Threatens Sight',
    short: 'Red eye',
    summary:
      'Most red eyes are harmless. A few blind people. Three questions separate them: is VISION affected, is there real PAIN rather than grittiness, and is the PUPIL abnormal? Any one of those three means this is not conjunctivitis.',
    domains: ['ophthalmology', 'emergency_medicine'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'red eye', 'painful red eye', 'conjunctivitis', 'keratitis', 'corneal ulcer', 'uveitis',
      'iritis', 'anterior uveitis', 'scleritis', 'episcleritis', 'acute angle closure glaucoma',
      'endophthalmitis', 'subconjunctival haemorrhage', 'ciliary flush', 'hypopyon',
    ],
    terms: [
      'red eye', 'conjunctivitis', 'keratitis', 'corneal ulcer', 'dendritic ulcer', 'uveitis',
      'iritis', 'scleritis', 'episcleritis', 'angle closure', 'glaucoma', 'endophthalmitis',
      'ciliary flush', 'circumcorneal', 'hypopyon', 'hyphaema', 'photophobia', 'fluorescein',
      'slit lamp', 'contact lens', 'phenylephrine', 'blanching', 'visual acuity',
    ],
    confirm_locally: true,
    body: {
      the_three_questions_that_sort_every_red_eye: {
        one_is_vision_reduced:
          'MEASURE IT. Formally, one eye at a time, with their glasses on, using a chart — not "can you see my fingers". Reduced visual acuity in a red eye essentially EXCLUDES simple conjunctivitis and means something is affecting the cornea, the anterior chamber or the retina. This single measurement is the most valuable thing done in the assessment, and it is the one most often skipped.',
        two_is_there_true_pain:
          'Distinguish GRITTINESS, itching and a foreign body sensation (surface problems — conjunctivitis, dry eye, a foreign body) from DEEP, BORING, ACHING pain that may radiate to the brow or head (intraocular — keratitis, uveitis, scleritis, angle closure). Pain that wakes the patient from sleep is scleritis until proven otherwise.',
        three_is_the_pupil_normal:
          'A SMALL, irregular, poorly reactive pupil suggests ANTERIOR UVEITIS (the inflamed iris sticks to the lens). A MID-DILATED, oval, fixed, unreactive pupil in a painful red eye with a hazy cornea is ACUTE ANGLE CLOSURE GLAUCOMA until proven otherwise.',
        the_rule: 'Normal vision, no true pain, normal pupil → almost certainly benign. ANY of the three abnormal → same-day ophthalmology.',
      },

      the_pattern_of_redness_itself: {
        diffuse_conjunctival_injection: 'Redness greatest in the FORNICES (the recesses where lid meets globe) and fading towards the cornea. Individual vessels are visible, they MOVE when the conjunctiva is moved with a cotton bud, and they BLANCH with topical phenylephrine. Suggests conjunctivitis.',
        ciliary_flush: 'A ring of deep redness CONCENTRATED AROUND THE CORNEA (circumcorneal), often with a violaceous hue. These are deeper vessels — they do NOT move and do NOT blanch. Ciliary flush means INTRAOCULAR inflammation: keratitis, uveitis or angle closure. It is one of the most useful signs in the whole assessment.',
        sectoral_redness: 'A wedge of redness in one segment suggests episcleritis or scleritis.',
        the_phenylephrine_test: 'Topical phenylephrine constricts SUPERFICIAL vessels. EPISCLERITIS blanches; SCLERITIS does NOT. This distinguishes a benign self-limiting condition from one associated with systemic disease and a threat to the eye.',
      },

      the_dangerous_causes: {
        acute_angle_closure_glaucoma: {
          what: 'The drainage angle of the anterior chamber closes, aqueous humour cannot escape, and intraocular pressure rises abruptly to very high levels. The optic nerve is damaged within HOURS.',
          the_picture: 'Sudden severe PAIN in and around the eye · marked VISUAL BLURRING with HALOES AROUND LIGHTS · a RED eye with ciliary flush · a HAZY, oedematous cornea (the eye looks "steamy") · a MID-DILATED, OVAL, FIXED pupil · and an eye that feels HARD like a marble when gently palpated through the closed lid and compared with the other side.',
          the_systemic_trap:
            'NAUSEA, VOMITING and severe HEADACHE are prominent, and patients are repeatedly admitted under general medicine or surgery as an abdominal or neurological problem while the eye goes unexamined and vision is lost. Any patient with headache, nausea and vomiting should have their eyes looked at.',
          precipitants: 'Dim light (as in a cinema), prolonged near work, and PUPIL-DILATING DRUGS — including anticholinergics, some antidepressants and antihistamines, and dilating drops given for fundoscopy in a susceptible eye. Long-sighted (hypermetropic) eyes are anatomically predisposed because the anterior chamber is shallow.',
          management_principle: 'Immediate ophthalmology. Lower the pressure medically, then definitive treatment with LASER PERIPHERAL IRIDOTOMY to create a permanent drainage channel — and the OTHER eye is treated prophylactically, because it has the same anatomy and will otherwise do the same thing.',
        },
        microbial_keratitis_and_corneal_ulcer: {
          what: 'Infection of the cornea. A sight-threatening emergency because corneal scarring in the visual axis causes permanent loss, and perforation is possible.',
          the_single_biggest_risk_factor:
            'CONTACT LENS WEAR — especially sleeping in lenses, poor hygiene, or using tap water. A contact lens wearer with a painful red eye is a corneal ulcer until proven otherwise, and the lens must be removed, sent for culture, and NOT worn again until cleared.',
          other_risks: 'Corneal abrasion or foreign body, trauma with vegetable matter (which raises FUNGAL keratitis — important in agricultural settings and easily missed), dry eye, lid disease, and topical steroid use.',
          herpes_simplex_keratitis: 'Produces a branching DENDRITIC ULCER seen with fluorescein. This is the reason the next warning exists.',
          the_prohibition_that_matters_most:
            'NEVER give topical STEROID to an undiagnosed red eye. In herpes simplex keratitis steroid promotes viral replication and can convert a dendritic ulcer into a deep geographic ulcer with corneal melting and perforation. In fungal and bacterial keratitis it worsens infection. In an eye with an undetected abrasion it delays healing and raises pressure. Steroid eye drops are prescribed by ophthalmology, on a slit lamp, with a diagnosis.',
        },
        anterior_uveitis_iritis: {
          what: 'Inflammation of the iris and ciliary body.',
          the_picture: 'Aching pain, marked PHOTOPHOBIA, blurred vision, ciliary flush, a SMALL and often IRREGULAR pupil (from adhesions between iris and lens, called posterior synechiae), and cells and flare in the anterior chamber on slit lamp. A HYPOPYON — a visible layer of white cells settled at the bottom of the anterior chamber — indicates severe inflammation or infection.',
          consensual_photophobia: 'Shining light in the UNAFFECTED eye causes pain in the AFFECTED one, because both pupils constrict together. This is a useful bedside sign that distinguishes true intraocular inflammation from surface irritation.',
          the_systemic_associations: 'Ankylosing spondylitis and the HLA-B27 spondyloarthropathies, inflammatory bowel disease, sarcoidosis, Behçet disease, tuberculosis, syphilis, herpes. Recurrent or bilateral uveitis warrants a systemic workup — the eye may be the first presentation of the underlying disease.',
        },
        scleritis: 'Severe, deep, BORING pain that WAKES THE PATIENT FROM SLEEP and is tender to touch through the lid. Does NOT blanch with phenylephrine. Strongly associated with systemic autoimmune disease — rheumatoid arthritis and ANCA-associated vasculitis in particular — and necrotising scleritis can perforate the globe. It is a marker of active systemic disease and needs both ophthalmology and rheumatology.',
        endophthalmitis: 'Infection INSIDE the eye. Suspect it in any patient with pain and falling vision AFTER intraocular surgery (classically days after cataract surgery) or after penetrating trauma or an intravitreal injection. Hypopyon is characteristic. It is a same-hour emergency — delay costs the eye entirely.',
      },

      the_benign_causes: {
        conjunctivitis: {
          bacterial: 'PURULENT, sticky discharge, lids stuck together on waking, usually bilateral by spread. Vision normal.',
          viral: 'WATERY discharge, often preceded by an upper respiratory infection, frequently with a tender PRE-AURICULAR LYMPH NODE — a useful discriminator. Highly contagious; emphasise hand hygiene and not sharing towels.',
          allergic: 'ITCH is the dominant symptom, with watery discharge, bilateral, often seasonal, with a papillary reaction under the upper lid.',
          the_neonatal_exception:
            'Conjunctivitis in the FIRST MONTH of life (ophthalmia neonatorum) is NEVER routine. GONOCOCCAL infection, typically in the first few days, is hyperacute with profuse pus and can perforate the cornea within days. CHLAMYDIAL infection appears at one to two weeks and may be accompanied by pneumonitis. Both need urgent investigation, systemic treatment and treatment of the parents.',
        },
        episcleritis: 'Sectoral redness, mild discomfort rather than true pain, normal vision, and it BLANCHES with phenylephrine. Usually self-limiting and benign.',
        subconjunctival_haemorrhage: 'A flat, sharply demarcated, bright red patch of blood with NORMAL vision and NO pain. Alarming to look at and almost always harmless. Ask about anticoagulants, check blood pressure, and consider a bleeding disorder if recurrent. Important exception: if it follows TRAUMA and has NO POSTERIOR BORDER you can see, consider an orbital fracture or a ruptured globe.',
        dry_eye_and_blepharitis: 'Grittiness, burning, fluctuating vision that improves on blinking, worse in air conditioning or with screen use. Crusted lid margins in blepharitis. Chronic, and managed with lid hygiene and lubricants.',
      },

      what_you_must_do_and_must_not_do: {
        always: 'MEASURE visual acuity in each eye · examine the pupils · look with FLUORESCEIN and a blue light for corneal staining · EVERT THE UPPER LID if a foreign body is possible (a subtarsal foreign body causes vertical linear corneal scratches and will not be found otherwise) · ask about CONTACT LENSES · ask about trauma and about what was being done at the time.',
        never: 'NEVER prescribe topical steroid without a diagnosis · never pad an eye that may be infected · never remove an object that has PENETRATED the globe · never apply pressure to an eye with a suspected ruptured globe — shield it and refer.',
      },
    },
    warnings: [
      'MEASURE visual acuity in every red eye. Reduced vision essentially excludes simple conjunctivitis.',
      'NEVER give topical steroid to an undiagnosed red eye — in herpes simplex keratitis it can cause corneal melting and perforation.',
      'A contact lens wearer with a painful red eye has microbial keratitis until proven otherwise.',
      'Acute angle closure presents with headache, nausea and vomiting and is repeatedly admitted as a medical or surgical problem while sight is lost. Examine the eyes.',
      'A mid-dilated, oval, fixed pupil with a hazy cornea and a hard eye is angle closure — same-hour referral.',
      'Ciliary flush (redness concentrated around the cornea) means intraocular disease, not conjunctivitis.',
      'Scleritis does not blanch with phenylephrine; episcleritis does.',
      'Pain that wakes the patient from sleep is scleritis until proven otherwise, and it signals active systemic disease.',
      'Pain and falling vision after intraocular surgery or injection is endophthalmitis — a same-hour emergency.',
      'Conjunctivitis in the first month of life is never routine — gonococcal infection can perforate the cornea within days.',
      'Evert the upper lid if a foreign body is possible; a subtarsal foreign body is otherwise missed.',
      'A subconjunctival haemorrhage with no visible posterior border after trauma suggests orbital fracture or globe rupture — shield, do not press.',
      'Never remove a penetrating foreign body from the globe.',
    ],
    limitations: ['Drop choices, pressure-lowering regimens and referral timeframes are protocol-specific. Scout states no doses.'],
    cards: [
      { q: 'What three questions sort a red eye?', a: 'Is vision reduced, is there true deep pain, and is the pupil abnormal?' },
      { q: 'What is ciliary flush and what does it mean?', a: 'Redness concentrated around the cornea from deeper vessels — it indicates intraocular disease.' },
      { q: 'How do you distinguish scleritis from episcleritis?', a: 'Phenylephrine blanches episcleritis but not scleritis. Scleritis also has severe pain that wakes the patient.' },
      { q: 'Describe the pupil in acute angle closure.', a: 'Mid-dilated, oval, fixed and unreactive, with a hazy cornea and a hard eye.' },
      { q: 'Why is angle closure missed?', a: 'Headache, nausea and vomiting lead to admission under medicine or surgery without the eye being examined.' },
      { q: 'Biggest risk factor for microbial keratitis?', a: 'Contact lens wear — especially sleeping in lenses or using tap water.' },
      { q: 'Why must steroid never be given to an undiagnosed red eye?', a: 'In herpes simplex keratitis it promotes viral replication and can cause corneal melting and perforation.' },
      { q: 'What is consensual photophobia?', a: 'Light in the unaffected eye causes pain in the affected one — a sign of true intraocular inflammation.' },
      { q: 'What is a hypopyon?', a: 'A layer of white cells settled in the anterior chamber — severe inflammation or infection.' },
      { q: 'Which conjunctivitis has a pre-auricular node?', a: 'Viral.' },
      { q: 'Why is neonatal conjunctivitis never routine?', a: 'Gonococcal infection can perforate the cornea within days; chlamydia may come with pneumonitis.' },
    ],
    checks: ['Visual acuity measured in each eye', 'Pupils examined and compared', 'Redness pattern described (diffuse vs ciliary flush)', 'Fluorescein used with a blue light', 'Upper lid everted if foreign body possible', 'Contact lens use asked about', 'No steroid given without a diagnosis', 'Same-day referral if vision, pain or pupil abnormal'],
  },

  {
    id: 'AS-EYEX-0003',
    type: 'emergency',
    title: 'Sudden Visual Loss and the Eye Emergencies That Are Measured in Minutes',
    short: 'Sudden visual loss',
    summary:
      'Split it by PAIN and by whether the loss is TRANSIENT. Two conditions need action before anything else: CHEMICAL INJURY, where you irrigate before you even measure vision, and GIANT CELL ARTERITIS, where you treat on suspicion before the biopsy.',
    domains: ['ophthalmology', 'emergency_medicine', 'neurology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'sudden visual loss', 'sudden blindness', 'painless visual loss', 'amaurosis fugax',
      'central retinal artery occlusion', 'crao', 'central retinal vein occlusion', 'crvo',
      'retinal detachment', 'vitreous haemorrhage', 'giant cell arteritis', 'temporal arteritis',
      'optic neuritis', 'chemical eye injury', 'ocular chemical burn', 'orbital cellulitis',
      'globe rupture', 'ischaemic optic neuropathy',
    ],
    terms: [
      'sudden visual loss', 'amaurosis fugax', 'crao', 'cherry red spot', 'crvo',
      'blood and thunder', 'retinal detachment', 'floaters', 'flashes', 'photopsia', 'curtain',
      'vitreous haemorrhage', 'giant cell arteritis', 'temporal arteritis', 'jaw claudication',
      'esr', 'optic neuritis', 'rapd', 'relative afferent pupillary defect', 'chemical injury',
      'alkali', 'irrigation', 'orbital cellulitis', 'proptosis', 'globe rupture', 'seidel',
    ],
    confirm_locally: true,
    body: {
      the_two_that_come_before_assessment: {
        chemical_injury: {
          the_rule: 'IRRIGATE FIRST. Before history, before visual acuity, before referral. Copious irrigation with saline or clean water for at least 20–30 minutes, and continue until the pH of the tear film returns to neutral and stays there. Evert BOTH lids and sweep the fornices to remove retained particles — solid alkali such as cement or lime lodges there and keeps burning.',
          why_alkali_is_worse_than_acid:
            'ACID causes protein coagulation, which forms a barrier that partly limits its own penetration. ALKALI causes LIQUEFACTIVE necrosis — it saponifies cell membranes and keeps penetrating deeper, into the anterior chamber, damaging the drainage angle and the lens. Alkali injuries therefore continue to worsen after exposure has stopped, and the initial appearance badly underestimates the eventual damage.',
          the_ominous_sign: 'A WHITE, blanched eye may look less alarming than a red one, but it indicates LIMBAL ISCHAEMIA — the blood vessels are destroyed — and it carries a far worse prognosis than a red, inflamed eye. Do not be reassured by an eye that is not red.',
          common_agents: 'Cement, lime, plaster, oven and drain cleaners, ammonia and bleach (alkali); battery acid and toilet cleaners (acid). Occupational and domestic both.',
        },
        giant_cell_arteritis: {
          the_rule: 'TREAT ON SUSPICION. Start high-dose corticosteroid IMMEDIATELY — do not wait for the ESR result, and do not wait for the temporal artery biopsy. The biopsy remains informative for up to about two weeks after starting steroid, so treatment does not destroy the diagnosis. Vision lost is NOT recovered, and the second eye is at high risk within days.',
          the_picture: 'Age over 50 (usually well over) · new headache, often temporal · SCALP TENDERNESS, classically noticed when combing hair or on a pillow · JAW CLAUDICATION — aching in the jaw on chewing, which is the most specific symptom and must be asked about directly · a thickened, tender, pulseless temporal artery · systemic features of malaise, weight loss and fever · and polymyalgia rheumatica in about half.',
          the_visual_event: 'Amaurosis fugax or sudden painless loss, from ARTERITIC ANTERIOR ISCHAEMIC OPTIC NEUROPATHY. A pale, swollen optic disc is characteristic.',
          the_caveat: 'Inflammatory markers are usually high but can be NORMAL. A normal ESR does not exclude it in a convincing clinical picture.',
        },
      },

      sudden_PAINLESS_visual_loss: {
        central_retinal_artery_occlusion: {
          what: 'The retinal artery is blocked — this is a STROKE OF THE EYE, and it is managed as such.',
          the_picture: 'Sudden, profound, painless loss in one eye, often described as a curtain that came down and stayed. A RELATIVE AFFERENT PUPILLARY DEFECT is present. Fundoscopy shows a PALE, oedematous retina with a CHERRY-RED SPOT at the macula — the spot is red because the fovea is thin and the intact choroidal circulation shows through the surrounding pallor.',
          the_time_pressure: 'Retinal tissue tolerates ischaemia for only a short time — realistically well under a few hours. Outcomes are poor and treatment is of limited proven benefit, which makes the NEXT point the important one.',
          what_actually_matters_most:
            'This is a stroke. The patient needs an URGENT STROKE PATHWAY assessment — carotid imaging, cardiac rhythm assessment for atrial fibrillation, vascular risk factor management — because the eye may be the warning before a cerebral stroke. And in anyone over 50, GIANT CELL ARTERITIS must be excluded. Treating the eye and forgetting the stroke workup is the substantive error here.',
        },
        central_retinal_vein_occlusion: 'Less abrupt and less profound than arterial occlusion. Fundoscopy shows the striking "BLOOD AND THUNDER" appearance — widespread flame haemorrhages in all four quadrants, dilated tortuous veins, cotton-wool spots and disc swelling. Associated with hypertension, diabetes, glaucoma and hyperviscosity. Complications include macular oedema and later neovascular glaucoma.',
        retinal_detachment: {
          the_warning_symptoms: 'FLASHES of light (photopsia) and a sudden shower of new FLOATERS, followed by a CURTAIN or shadow advancing across the visual field. Central vision is preserved until the macula detaches.',
          the_time_critical_distinction:
            'A detachment that is "MACULA ON" — central vision still normal — is an emergency to be operated on urgently, because once the macula detaches central vision is often permanently reduced even after successful surgery. So a patient with a peripheral curtain and STILL-GOOD central vision is MORE urgent, not less. That is counterintuitive and it is the point that determines the outcome.',
          risks: 'Myopia (short sight), previous cataract surgery, trauma, previous detachment in the other eye.',
        },
        vitreous_haemorrhage: 'Sudden floaters, cobwebs or a red or black haze, or profound loss if dense. Common causes are proliferative diabetic retinopathy, retinal tear, and retinal vein occlusion. The fundus may be obscured; ultrasound is used to exclude an underlying detachment.',
        optic_neuritis: 'Subacute rather than instantaneous — vision falls over hours to days. Characteristically PAIN ON EYE MOVEMENT, loss of COLOUR vision (especially red desaturation), and a RELATIVE AFFERENT PUPILLARY DEFECT. Often the first presentation of multiple sclerosis; test for aquaporin-4 and MOG antibodies where the picture is atypical, bilateral or severe.',
      },

      sudden_PAINFUL_visual_loss: 'Acute angle closure glaucoma · microbial keratitis · endophthalmitis · anterior uveitis · scleritis · orbital cellulitis · trauma with globe rupture or hyphaema. These are covered in the red eye entry, and every one is a same-day or same-hour referral.',

      transient_visual_loss: {
        amaurosis_fugax: 'Painless loss lasting minutes then fully recovering, classically like a curtain descending and lifting. It is a TRANSIENT ISCHAEMIC ATTACK OF THE EYE and carries the same stroke risk as any TIA. It requires urgent TIA-pathway assessment, not reassurance because "it got better". Also consider giant cell arteritis in the over-50s.',
        other_causes: 'Migraine with aura (usually a positive phenomenon such as zigzag lines, spreading over 20–30 minutes, often followed by headache, and typically in a younger patient), papilloedema with raised intracranial pressure (transient visual obscurations on standing), and postural hypotension.',
      },

      two_more_that_must_not_be_missed: {
        orbital_cellulitis: {
          what: 'Infection BEHIND the orbital septum, usually spreading from the ethmoid sinuses.',
          how_to_separate_it_from_the_harmless_version:
            'PRESEPTAL cellulitis is in front of the septum: lid swelling and redness, but NORMAL eye movements, NORMAL vision and NO proptosis. ORBITAL cellulitis adds PROPTOSIS (the eye pushed forward), PAINFUL or RESTRICTED eye movements, DIPLOPIA, reduced vision, and a relative afferent pupillary defect. Those four findings are the discriminator and they must be actively tested — check eye movements and vision in every swollen lid.',
          why_it_matters: 'It threatens sight through optic nerve compression, and life through cavernous sinus thrombosis, meningitis and intracranial abscess. It needs admission, intravenous antibiotics, imaging and ophthalmology.',
        },
        globe_rupture: {
          suspect_it_when: 'High-velocity injury, hammering or grinding metal, a full-thickness laceration, a teardrop or peaked pupil, prolapsed dark uveal tissue at the wound, a very soft eye, or a subconjunctival haemorrhage with no visible posterior limit.',
          what_to_do_and_not_do: 'Place a RIGID SHIELD over the eye — never a pad, and never any pressure. Do NOT measure intraocular pressure, do NOT instil drops beyond what is needed, and do NOT attempt to remove a penetrating object. Keep the patient nil by mouth, give analgesia and antiemetic (vomiting raises intraocular pressure and can extrude contents), check tetanus status, start antibiotics per protocol, and refer immediately.',
          the_hidden_injury: 'A small, high-velocity intraocular foreign body from hammering metal can cause minimal external signs. Always ask what the patient was doing, and image if the history fits — a missed intraocular metallic foreign body causes siderosis and blindness.',
        },
      },

      the_examination_that_takes_two_minutes_and_changes_everything: 'Visual acuity in EACH eye separately · pupils, specifically looking for a RELATIVE AFFERENT PUPILLARY DEFECT using the swinging light test (the affected pupil paradoxically DILATES when the light swings to it — this indicates optic nerve or extensive retinal disease and is objective, so it cannot be feigned) · confrontation visual fields · eye movements and whether they hurt · red desaturation compared between eyes · and fundoscopy.',
    },
    warnings: [
      'In chemical injury, IRRIGATE FIRST — before history, before visual acuity, before referral. Continue until the pH is neutral and stays neutral.',
      'ALKALI causes liquefactive necrosis and keeps penetrating. Injuries worsen after exposure stops.',
      'A WHITE, blanched eye after chemical injury means limbal ischaemia and a WORSE prognosis than a red one.',
      'Evert both lids and sweep the fornices — retained solid alkali keeps burning.',
      'In suspected giant cell arteritis, start steroid IMMEDIATELY. Do not wait for ESR or biopsy; the biopsy stays informative for about two weeks.',
      'A normal ESR does not exclude giant cell arteritis.',
      'Ask specifically about JAW CLAUDICATION — it is the most specific symptom.',
      'Central retinal artery occlusion is a STROKE. Arrange the stroke pathway, and exclude giant cell arteritis in the over-50s.',
      'A "macula on" retinal detachment is MORE urgent, not less — operating before the macula detaches preserves central vision.',
      'Amaurosis fugax is a TIA of the eye. It needs urgent assessment, not reassurance because it resolved.',
      'In a swollen lid, TEST eye movements and vision — proptosis, painful movement, diplopia and reduced vision separate orbital from preseptal cellulitis.',
      'In suspected globe rupture, shield the eye — never pad it, never press, never measure pressure, never remove a penetrating object.',
      'Give an antiemetic in globe injury — vomiting raises intraocular pressure and can extrude contents.',
      'Ask what the patient was doing. Hammering metal suggests an intraocular foreign body with minimal external signs.',
    ],
    limitations: ['Irrigation volumes, steroid regimens, surgical timing and imaging protocols are institution-specific. Scout states no doses.'],
    cards: [
      { q: 'What is done first in a chemical eye injury?', a: 'Irrigate — before history, acuity or referral. Continue until pH is neutral and stays neutral.' },
      { q: 'Why is alkali worse than acid?', a: 'It causes liquefactive necrosis and keeps penetrating; acid coagulates protein and partly limits itself.' },
      { q: 'What does a white eye after a chemical burn indicate?', a: 'Limbal ischaemia — a worse prognosis than a red eye.' },
      { q: 'When do you start steroid in suspected giant cell arteritis?', a: 'Immediately, on suspicion — the biopsy stays informative for about two weeks.' },
      { q: 'Which GCA symptom is most specific?', a: 'Jaw claudication.' },
      { q: 'What is the fundoscopic sign of central retinal artery occlusion?', a: 'A pale retina with a cherry-red spot at the macula.' },
      { q: 'What must accompany treatment of CRAO?', a: 'An urgent stroke pathway assessment — it is a stroke of the eye.' },
      { q: 'Why is a "macula on" detachment more urgent?', a: 'Operating before the macula detaches preserves central vision, which is often permanently lost otherwise.' },
      { q: 'What separates orbital from preseptal cellulitis?', a: 'Proptosis, painful or restricted eye movements, diplopia and reduced vision.' },
      { q: 'What is a relative afferent pupillary defect?', a: 'The affected pupil dilates when light swings to it — objective evidence of optic nerve or extensive retinal disease.' },
      { q: 'What should never be done to a suspected ruptured globe?', a: 'Never pad it, press it, measure its pressure, or remove a penetrating object — shield and refer.' },
    ],
    checks: ['Chemical injury irrigated before anything else and pH rechecked', 'Both lids everted and fornices swept', 'Jaw claudication and scalp tenderness asked about in the over-50s', 'Steroid started on suspicion in GCA', 'Stroke pathway triggered for CRAO or amaurosis fugax', 'Macula status established in detachment', 'Eye movements and vision tested in any swollen lid', 'Rigid shield applied in suspected rupture', 'Mechanism asked about for intraocular foreign body'],
  },
];
