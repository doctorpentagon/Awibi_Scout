/**
 * Otorhinolaryngology — from the ENT special-posting compilation (395 pages).
 *
 * Scout carried otitis externa and cholesteatoma and nothing else, so an entire
 * specialty containing several true airway emergencies was effectively absent.
 *
 * Written from scratch: every term defined before it is used.
 */

export default [
  {
    id: 'AS-ENTX-0003',
    type: 'test',
    title: 'Hearing Loss — Conductive Versus Sensorineural, and the Tuning Fork Tests',
    short: 'Hearing loss and tuning forks',
    summary:
      'Sound reaches the inner ear two ways: through AIR (the normal route, via ear canal and middle ear) and through BONE (straight through the skull). Every hearing test exploits that. If air conduction is broken but bone works, the problem is CONDUCTIVE and often fixable. If both are broken, it is SENSORINEURAL.',
    domains: ['ent', 'neurology'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'hearing loss', 'deafness', 'conductive hearing loss', 'sensorineural hearing loss',
      'rinne', 'weber', 'rinne test', 'weber test', 'tuning fork test', 'audiogram',
      'audiometry', 'presbycusis', 'sudden sensorineural hearing loss', 'sshl', 'ssnhl',
      'otosclerosis', 'noise induced hearing loss', 'ototoxicity',
    ],
    terms: [
      'hearing loss', 'deafness', 'conductive', 'sensorineural', 'mixed', 'rinne', 'weber',
      'tuning fork', '512 hz', 'air conduction', 'bone conduction', 'audiogram', 'audiometry',
      'air bone gap', 'presbycusis', 'otosclerosis', 'ototoxic', 'aminoglycoside', 'cisplatin',
      'wax', 'cerumen', 'tympanic membrane', 'cochlea', 'acoustic neuroma', 'vestibular schwannoma',
    ],
    confirm_locally: true,
    body: {
      the_two_pathways_that_explain_every_test: {
        air_conduction: 'Sound waves travel down the EAR CANAL, vibrate the TYMPANIC MEMBRANE (eardrum), pass through the three OSSICLES (malleus, incus, stapes) of the middle ear, and reach the COCHLEA of the inner ear. This is the normal route and it involves the outer and middle ear.',
        bone_conduction: 'Sound vibrates the SKULL directly and reaches the cochlea WITHOUT passing through the ear canal or middle ear. It bypasses the whole conductive apparatus.',
        why_this_matters: 'Comparing the two tells you WHERE the fault is, using nothing but a tuning fork. If bone conduction is normal but air conduction is not, the outer or middle ear is at fault. If both are reduced, the cochlea or the nerve is at fault.',
      },

      the_two_kinds_of_hearing_loss: {
        conductive: {
          what: 'Sound cannot get THROUGH to a working inner ear. The problem is in the ear canal, eardrum or middle ear.',
          causes: 'WAX impaction (the commonest and most trivially reversible — always look before doing anything else) · foreign body · otitis externa with a swollen canal · OTITIS MEDIA WITH EFFUSION ("glue ear", the commonest cause in children) · tympanic membrane perforation · OTOSCLEROSIS (fixation of the stapes footplate — typically a young adult, often worse in pregnancy, with a family history) · ossicular disruption after trauma · cholesteatoma · middle ear tumour.',
          the_encouraging_part: 'Conductive loss is frequently CURABLE — remove the wax, drain the effusion, repair the drum, mobilise or replace the stapes.',
        },
        sensorineural: {
          what: 'The COCHLEA or the AUDITORY NERVE is damaged. Sound arrives but cannot be transduced or transmitted.',
          causes: 'PRESBYCUSIS (age-related, symmetrical, high frequencies first) · NOISE exposure (occupational, military, music — with a characteristic notch at 4 kHz on the audiogram) · OTOTOXIC DRUGS (aminoglycosides such as gentamicin, cisplatin, loop diuretics at high dose, and quinine) · Ménière disease · vestibular schwannoma (acoustic neuroma) · meningitis, mumps, measles, congenital rubella and congenital cytomegalovirus · head injury and temporal bone fracture · autoimmune inner ear disease.',
          the_hard_part: 'It is largely IRREVERSIBLE. Management is amplification (hearing aids), cochlear implantation in severe cases, and above all PREVENTION.',
        },
        mixed: 'Both together — for example chronic suppurative otitis media that has also damaged the cochlea.',
      },

      the_tuning_fork_tests: {
        which_fork: 'Use a 512 Hz fork. A 256 Hz fork is felt as vibration rather than heard, and 1024 Hz decays too quickly.',
        rinne_test: {
          how: 'Strike the fork. Place it on the MASTOID process (bone conduction) until the patient says the sound has gone, then move it beside the ear canal (air conduction) and ask if they can still hear it.',
          normal_or_positive: 'AIR CONDUCTION IS BETTER THAN BONE — they can still hear it beside the ear. Written "Rinne positive". This is the NORMAL result, and it is also the result in SENSORINEURAL loss, because both routes are reduced equally and air still wins.',
          abnormal_or_negative: 'BONE BETTER THAN AIR — they cannot hear it beside the ear after it has stopped at the mastoid. "Rinne negative". This indicates CONDUCTIVE loss in that ear.',
          the_confusing_naming: 'Note the trap: "Rinne POSITIVE" means NORMAL, and "Rinne NEGATIVE" means abnormal. This is the reverse of almost every other test in medicine and it causes constant confusion. Safer practice is to write what you actually found — "air better than bone" — rather than positive or negative.',
        },
        weber_test: {
          how: 'Strike the fork and place it in the MIDLINE — on the forehead, the vertex, or the upper incisors. Ask WHERE the sound is heard: middle, left, or right.',
          normal: 'Heard in the MIDLINE, equally in both ears.',
          lateralises_to_the_AFFECTED_ear: 'CONDUCTIVE loss on that side. This is counterintuitive and worth understanding rather than memorising: the blocked ear is shielded from competing background room noise, so the bone-conducted sound is perceived as louder there. You can demonstrate this on yourself — plug one ear with a finger and hum, and the sound moves to the plugged side.',
          lateralises_to_the_GOOD_ear: 'SENSORINEURAL loss on the opposite side. The damaged cochlea simply cannot hear it, so the sound is perceived in the working ear.',
        },
        putting_them_together: 'Rinne negative on the left with Weber lateralising left = LEFT CONDUCTIVE loss. Rinne positive both sides with Weber lateralising right = LEFT SENSORINEURAL loss.',
        the_important_limitation:
          'Tuning fork tests are a bedside SCREEN, not a diagnosis. They are unreliable in mild loss and can be frankly misleading in severe unilateral sensorineural loss — where the sound crosses the skull and is heard by the OPPOSITE good cochlea, producing a FALSE NEGATIVE Rinne that mimics conductive loss. A formal AUDIOGRAM, with masking, is what settles it.',
      },

      reading_an_audiogram_in_one_paragraph:
        'Frequency (pitch) runs along the bottom in hertz, low on the left; loudness runs down the side in decibels, quiet at the top. So DOWN THE PAGE means WORSE hearing. Air conduction is plotted as O for the right ear and X for the left; bone conduction with brackets. An AIR-BONE GAP — bone better than air by more than about 10 dB — means CONDUCTIVE loss. Both lines dropping together with no gap means SENSORINEURAL. A notch at 4 kHz suggests noise damage; a downward slope at high frequencies in an older patient suggests presbycusis.',

      the_emergency_hidden_in_this_topic: {
        sudden_sensorineural_hearing_loss: {
          what: 'Hearing loss of at least 30 decibels across three consecutive frequencies developing within 72 HOURS. Usually unilateral, often noticed on waking or on trying to use a telephone.',
          why_it_is_urgent:
            'This is an OTOLOGICAL EMERGENCY. Corticosteroid treatment is most effective when started EARLY — ideally within days — and the chance of recovery falls sharply with delay. It is frequently misdiagnosed as wax or as a blocked ear from a cold, the patient is reassured, and by the time they are seen again the window has closed and the deafness is permanent.',
          the_bedside_discriminator: 'WEBER LATERALISES TO THE GOOD (opposite) EAR. If a patient reports sudden hearing loss and the Weber goes AWAY from the affected side, this is sensorineural until proven otherwise — refer the same day. If it lateralises TO the affected ear it is conductive, and wax or effusion is the likely and far less urgent cause.',
          what_else_to_do: 'Examine to exclude wax and effusion, look for neurological signs, and arrange urgent audiometry and ENT referral. MRI is needed later to exclude vestibular schwannoma, since a minority of these present this way.',
        },
      },

      red_flags_in_any_hearing_loss: [
        'SUDDEN sensorineural loss — same-day referral.',
        'UNILATERAL or markedly ASYMMETRIC sensorineural loss, or unilateral tinnitus — needs MRI to exclude vestibular schwannoma.',
        'Hearing loss with FACIAL WEAKNESS, vertigo, or other cranial nerve signs.',
        'Hearing loss with a foul-smelling discharge or an attic crust — suggests cholesteatoma.',
        'Any hearing concern in a CHILD — even mild loss impairs speech and language development, and it must be tested rather than reassured. Do not accept "he hears when he wants to".',
      ],
    },
    warnings: [
      'Sudden sensorineural hearing loss is an EMERGENCY. Steroid treatment works best within days — delay causes permanent deafness.',
      'If Weber lateralises AWAY from the deaf ear, the loss is sensorineural — refer the same day.',
      '"Rinne positive" means NORMAL. The naming is the reverse of most tests — write "air better than bone" instead.',
      'Weber lateralises TOWARDS the ear with conductive loss, and AWAY from the ear with sensorineural loss.',
      'Severe unilateral sensorineural loss can give a FALSE NEGATIVE Rinne because sound crosses the skull to the good cochlea.',
      'Always look in the ear before anything else. Wax is the commonest and most trivially reversible cause.',
      'Unilateral sensorineural loss or unilateral tinnitus needs MRI to exclude a vestibular schwannoma.',
      'Never reassure about hearing in a child — even mild loss impairs speech and language development.',
      'Ask about ototoxic drugs: aminoglycosides, cisplatin, high-dose loop diuretics and quinine.',
    ],
    limitations: ['Audiometric thresholds, steroid regimens and referral pathways are protocol-specific. Scout states no doses.'],
    cards: [
      { q: 'What are the two pathways sound can take to the cochlea?', a: 'Air conduction through canal and middle ear, and bone conduction directly through the skull.' },
      { q: 'What does a Rinne negative result mean?', a: 'Bone better than air — conductive loss in that ear. Confusingly, "negative" is the abnormal one.' },
      { q: 'Which way does Weber lateralise in conductive loss?', a: 'TOWARDS the affected ear — it is shielded from background noise.' },
      { q: 'Which way does Weber lateralise in sensorineural loss?', a: 'AWAY from the affected ear, to the good side.' },
      { q: 'Define sudden sensorineural hearing loss.', a: 'At least 30 dB across three consecutive frequencies within 72 hours.' },
      { q: 'Why is it an emergency?', a: 'Steroids work best within days; delay leads to permanent deafness.' },
      { q: 'What does an air-bone gap on an audiogram indicate?', a: 'Conductive hearing loss.' },
      { q: 'What audiogram finding suggests noise damage?', a: 'A notch at 4 kHz.' },
      { q: 'Which hearing loss pattern needs an MRI?', a: 'Unilateral or asymmetric sensorineural loss, or unilateral tinnitus — to exclude vestibular schwannoma.' },
    ],
    checks: ['Ear canal examined and wax excluded first', 'Rinne and Weber performed with a 512 Hz fork and findings written descriptively', 'Onset speed established', 'Sudden sensorineural loss referred same day', 'Ototoxic drug history taken', 'Audiometry arranged', 'MRI considered if asymmetric', 'Child referred for formal testing rather than reassured'],
  },

  {
    id: 'AS-ENTX-0004',
    type: 'emergency',
    title: 'ENT Emergencies — Epistaxis, Stridor, Quinsy, Deep Neck Infection and the Blocked Tracheostomy',
    short: 'ENT emergencies',
    summary:
      'ENT holds several conditions that kill within minutes, and they all threaten the same thing: the airway. The one every ward doctor should know cold is the BLOCKED OR DISPLACED TRACHEOSTOMY — because the correct first action depends on a single question: does this patient still have a larynx?',
    domains: ['ent', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'ent emergencies', 'epistaxis', 'nosebleed', 'stridor', 'upper airway obstruction',
      'quinsy', 'peritonsillar abscess', 'ludwig angina', 'deep neck space infection',
      'retropharyngeal abscess', 'tracheostomy emergency', 'blocked tracheostomy',
      'laryngectomy', 'stoma', 'acute mastoiditis', 'foreign body', 'button battery',
    ],
    terms: [
      'epistaxis', 'nosebleed', 'little area', 'kiesselbach', 'woodruff plexus', 'nasal packing',
      'sphenopalatine', 'stridor', 'inspiratory', 'biphasic', 'upper airway obstruction',
      'quinsy', 'peritonsillar abscess', 'trismus', 'hot potato voice', 'uvular deviation',
      'ludwig angina', 'retropharyngeal', 'parapharyngeal', 'tracheostomy', 'laryngectomy',
      'stoma', 'mastoiditis', 'button battery', 'foreign body', 'aural', 'nasal',
    ],
    confirm_locally: true,
    body: {
      the_organising_principle:
        'Almost every ENT emergency is an AIRWAY emergency, a BLEEDING emergency, or an INFECTION that will become an airway emergency. Ask those three questions of any ENT presentation and you will not miss the ones that kill.',

      epistaxis_nosebleed: {
        the_anatomy_that_decides_management: {
          anterior: 'About 90% of bleeds. From LITTLE AREA (Kiesselbach plexus) on the anterior nasal septum, where several arteries anastomose just under thin mucosa. Usually visible, usually controllable with simple measures.',
          posterior: 'Fewer, but far more dangerous. From branches of the SPHENOPALATINE artery deep in the nose. Suspect it when bleeding is heavy, comes from BOTH nostrils, runs down the THROAT, or continues despite correct anterior pressure. These patients can lose significant volume and can aspirate.',
        },
        first_aid_done_properly: 'Sit the patient UP and lean FORWARD (so blood is not swallowed or aspirated — swallowed blood causes vomiting and hides the volume lost). Pinch the SOFT part of the nose — the cartilage, NOT the bony bridge — firmly and continuously for 10–15 MINUTES WITHOUT RELEASING TO CHECK. Releasing to look is the commonest reason this fails. Ice in the mouth or on the neck may help. Ask them to spit blood out, not swallow it.',
        the_stepwise_escalation: 'Resuscitate if shocked — this can be a major haemorrhage. Then: direct pressure → topical vasoconstrictor and good light with suction → CAUTERY of an identified anterior vessel (silver nitrate, one side of the septum only) → ANTERIOR PACKING → POSTERIOR packing or a balloon device → surgical or radiological intervention (sphenopalatine artery ligation or embolisation).',
        the_specific_cautions: [
          'NEVER cauterise BOTH sides of the septum at the same visit — you risk septal perforation.',
          'Check ANTICOAGULANTS and antiplatelets, and check the platelet count and clotting. Do not simply stop anticoagulation without weighing why the patient is on it.',
          'A posterior pack causes discomfort, and dislodgement can obstruct the airway. These patients are admitted and monitored, not sent home.',
          'RECURRENT UNILATERAL epistaxis with nasal obstruction, especially in an ADOLESCENT MALE, raises JUVENILE NASOPHARYNGEAL ANGIOFIBROMA — a vascular tumour that must NOT be biopsied in clinic because it can bleed catastrophically. Image it first.',
          'In an adult from an endemic region, persistent unilateral symptoms with a neck node raise NASOPHARYNGEAL CARCINOMA.',
        ],
      },

      stridor_and_upper_airway_obstruction: {
        what_stridor_is: 'A harsh, high-pitched noise from turbulent airflow through a NARROWED UPPER airway. It is a SIGN OF OBSTRUCTION, not a diagnosis, and it means the airway is already significantly narrowed.',
        where_the_sound_localises_the_problem: {
          inspiratory: 'Obstruction ABOVE the vocal cords (supraglottic or glottic) — the extrathoracic airway collapses inward on inspiration.',
          expiratory: 'Obstruction BELOW, in the intrathoracic trachea or bronchi. Wheeze is the lower-airway equivalent.',
          biphasic: 'Obstruction AT the glottis or subglottis — a fixed narrowing that limits flow in both directions. Biphasic stridor is the most concerning of the three.',
        },
        the_signs_that_mean_act_now: 'Stridor at REST · increasing respiratory rate then a FALLING rate as the patient tires · accessory muscle use, tracheal tug and intercostal recession · inability to speak in full sentences · drooling and inability to swallow saliva · sitting forward in a tripod position · agitation, then exhaustion, then a QUIET chest and drowsiness — which is peri-arrest, not improvement.',
        the_rules_that_prevent_disaster: [
          'DO NOT distress the patient, especially a child. Crying and struggling increase turbulent flow and oxygen demand and can convert a partial obstruction into a complete one. Let a child sit on a parent lap.',
          'DO NOT examine the throat with a spatula, and do not lie the patient flat, if EPIGLOTTITIS is a possibility — this can precipitate complete obstruction.',
          'CALL FOR SENIOR ANAESTHETIC AND ENT HELP EARLY, before the airway is lost. The right place to secure a critically narrowed airway is theatre with a surgeon scrubbed and ready for a surgical airway.',
          'Give oxygen, and consider nebulised adrenaline and steroids as a temporising measure per local protocol.',
        ],
        the_main_causes: 'Foreign body · croup (viral laryngotracheobronchitis, barking cough, a child) · EPIGLOTTITIS (rapid onset, high fever, drooling, muffled voice — now rarer where Haemophilus influenzae type b vaccination is given, and correspondingly forgotten) · anaphylaxis and angio-oedema · deep neck space infection · laryngeal trauma or burn · bilateral vocal cord palsy · laryngeal tumour · post-extubation oedema.',
      },

      peritonsillar_abscess_quinsy: {
        what: 'A collection of PUS between the tonsillar capsule and the surrounding pharyngeal muscle. Usually a complication of acute tonsillitis, usually unilateral, usually in an adolescent or young adult.',
        the_four_features_that_identify_it: 'SEVERE UNILATERAL sore throat and pain on swallowing · TRISMUS (inability to open the mouth fully, because the pterygoid muscles are irritated) · a "HOT POTATO" or muffled voice, as though speaking with food in the mouth · UVULAR DEVIATION AWAY from the affected side, with a bulging, displaced tonsil.',
        why_trismus_matters: 'It is the finding that separates quinsy from simple tonsillitis, and it is also the finding that makes examination and any airway intervention harder. Note it explicitly.',
        management: 'Analgesia, antibiotics and fluids, plus DRAINAGE — needle aspiration or incision — which is what actually resolves it. Antibiotics alone are frequently inadequate for an established abscess. Watch for spread into the deep neck spaces.',
      },

      deep_neck_space_infections: {
        why_they_are_feared: 'The neck is divided by layers of fascia into spaces that are continuous with the MEDIASTINUM. An infection that escapes a space can descend to cause MEDIASTINITIS, and it can obstruct the airway on the way.',
        ludwig_angina: {
          what: 'A rapidly spreading CELLULITIS of the SUBMANDIBULAR and SUBLINGUAL spaces, bilaterally. It is usually ODONTOGENIC — arising from an infected lower molar tooth.',
          the_signs: 'A tense, brawny, tender swelling under the chin and jaw · ELEVATION AND POSTERIOR DISPLACEMENT OF THE TONGUE · drooling and inability to swallow · a muffled voice · fever and systemic illness.',
          the_danger: 'The tongue is pushed up and back into the airway. This is an AIRWAY EMERGENCY, and it is one where intubation is difficult and may be impossible, so a surgical airway must be planned for from the outset. Involve senior anaesthetics and ENT or maxillofacial surgery IMMEDIATELY, before deterioration.',
          management_principles: 'Secure the airway, high-dose intravenous antibiotics, and SURGICAL DRAINAGE with removal of the causative tooth. Antibiotics alone do not treat a collection.',
        },
        retropharyngeal_abscess: 'More common in young CHILDREN, where the retropharyngeal lymph nodes are still present. Neck stiffness, refusal to move the neck, drooling, fever, and a change in voice. A lateral neck radiograph may show widened prevertebral soft tissue, but CT is definitive. Risks airway obstruction and mediastinal spread.',
        parapharyngeal_abscess: 'Presents with trismus, neck swelling and systemic illness. Complications include internal jugular vein thrombosis with septic emboli — LEMIERRE SYNDROME — and carotid erosion.',
      },

      the_tracheostomy_and_laryngectomy_emergency: {
        why_this_deserves_special_emphasis:
          'A blocked or displaced tracheostomy tube kills quickly, and it is mismanaged by clinicians who apply ordinary airway teaching. The single question that determines everything is: IS THERE STILL A PATENT UPPER AIRWAY?',
        the_critical_distinction: {
          tracheostomy: 'An opening into the trachea, but the larynx and upper airway are STILL CONNECTED. If the tube fails, you CAN oxygenate from the mouth and nose in the usual way as well as via the stoma.',
          laryngectomy: 'The larynx has been REMOVED and the trachea is brought permanently to the skin as an END STOMA. There is NO CONNECTION between mouth and lungs. Oxygen or ventilation applied to the face achieves NOTHING. All oxygenation must go through the STOMA.',
          the_practical_consequence:
            'Applying a bag-valve-mask to the face of a laryngectomy patient is completely futile and wastes the minutes that would have saved them. Patients should have a bed-head sign stating which they are — look for it, and if there is no sign, look at the neck.',
        },
        the_emergency_sequence_in_principle: 'Call for help and for the difficult airway trolley. Apply high-flow oxygen to BOTH the face AND the stoma (unless you know it is a laryngectomy, in which case the stoma only). Assess patency — can you pass a suction catheter? Remove the inner tube; remove any speaking valve or cap. If still obstructed, deflate the cuff. If still failing, REMOVE THE TUBE ENTIRELY — a blocked tube in situ is worse than an open stoma — and oxygenate via stoma and, if it is a tracheostomy rather than a laryngectomy, via the face as well. Follow your local emergency tracheostomy algorithm.',
        the_common_errors: 'Assuming a stoma means a laryngectomy · not removing an obstructing tube because it seems drastic · forcing a replacement tube blindly and creating a false passage · and forgetting that a fresh tracheostomy tract has not matured, so a displaced tube may be very difficult to replace and the tract can close.',
      },

      other_emergencies_worth_knowing: {
        acute_mastoiditis: 'A complication of otitis media where infection enters the mastoid air cells. The pinna is pushed DOWN AND OUT, there is post-auricular swelling, redness and tenderness, and the post-auricular sulcus is lost. It needs admission, intravenous antibiotics, imaging and often surgery — because from there infection can reach the intracranial cavity, causing meningitis, sigmoid sinus thrombosis or a brain abscess.',
        button_battery: {
          why_it_is_separated_out:
            'A button (disc) battery in the NOSE or OESOPHAGUS is a TIME-CRITICAL EMERGENCY. It generates a local electrical current that causes liquefactive necrosis and can perforate tissue within HOURS. In the nose it destroys the septum; in the oesophagus it can erode into the aorta and kill. It must be removed IMMEDIATELY — this outranks nearly everything else on the emergency list, and it is often mistaken for an ordinary foreign body and left overnight.',
          the_clue: 'On radiograph a button battery shows a DOUBLE RING or halo sign, distinguishing it from a coin.',
        },
        aural_and_nasal_foreign_bodies: 'Common in children. One careless attempt at removal can push the object deeper, cause bleeding and make specialist removal far harder. ORGANIC material (peas, beans) SWELLS with moisture, so do not irrigate. Refer rather than persist after a single failed attempt.',
        post_tonsillectomy_haemorrhage: 'PRIMARY within 24 hours, usually needing return to theatre. SECONDARY at 5–10 days, usually from infection. Children swallow blood, so the volume lost is easily underestimated — repeated swallowing is the sign to look for. Treat as a potential major haemorrhage with a difficult airway.',
      },
    },
    warnings: [
      'A patient with a neck stoma may be a LARYNGECTOMY. Oxygen to the face achieves NOTHING — it must go through the stoma.',
      'A blocked tracheostomy tube must be REMOVED. An obstructing tube in situ is worse than an open stoma.',
      'A BUTTON BATTERY in the nose or oesophagus needs removal within HOURS — it causes liquefactive necrosis and can erode into the aorta. Look for the double-ring sign.',
      'In suspected epiglottitis do NOT examine the throat with a spatula or lie the patient flat.',
      'Do not distress a child with stridor — crying can convert partial obstruction into complete.',
      'A falling respiratory rate with a quiet chest and drowsiness in airway obstruction is peri-arrest, not improvement.',
      'Pinch the SOFT part of the nose for 10–15 minutes without releasing to check. Releasing is the commonest reason it fails.',
      'Never cauterise both sides of the nasal septum at one visit — septal perforation.',
      'Recurrent unilateral epistaxis in an adolescent male may be juvenile nasopharyngeal angiofibroma — do NOT biopsy, image first.',
      'Ludwig angina pushes the tongue up and back. Plan for a surgical airway from the outset; intubation may be impossible.',
      'Trismus separates quinsy from simple tonsillitis, and makes any airway intervention harder.',
      'An abscess needs DRAINAGE. Antibiotics alone do not treat a collection.',
      'Children swallow blood after tonsillectomy — repeated swallowing means bleeding, and the volume lost is underestimated.',
      'Do not irrigate an organic aural foreign body — it swells.',
    ],
    limitations: ['Antibiotic choice, packing technique, tracheostomy algorithms and drainage practice are institution-specific. Scout states no doses.'],
    cards: [
      { q: 'Where do most nosebleeds come from?', a: 'Little area (Kiesselbach plexus) on the anterior septum — about 90%.' },
      { q: 'What suggests a posterior bleed?', a: 'Heavy bleeding, from both nostrils, running down the throat, or continuing despite correct anterior pressure.' },
      { q: 'How should first aid for epistaxis be done?', a: 'Sit up, lean forward, pinch the SOFT part for 10–15 minutes without releasing.' },
      { q: 'What does biphasic stridor indicate?', a: 'Obstruction at the glottis or subglottis — the most concerning pattern.' },
      { q: 'Name the four features of quinsy.', a: 'Severe unilateral sore throat, trismus, hot-potato voice, uvular deviation away from the side.' },
      { q: 'What is Ludwig angina and why is it lethal?', a: 'Bilateral submandibular and sublingual cellulitis, usually dental — it pushes the tongue up and back, obstructing the airway.' },
      { q: 'What single question governs a tracheostomy emergency?', a: 'Is there a patent upper airway — tracheostomy (yes) or laryngectomy (no)?' },
      { q: 'Why is a button battery an emergency?', a: 'It causes liquefactive necrosis within hours and can perforate the septum or erode into the aorta.' },
      { q: 'How is a button battery distinguished on X-ray?', a: 'A double-ring or halo sign, unlike a coin.' },
      { q: 'What are the signs of acute mastoiditis?', a: 'Pinna pushed down and out, post-auricular swelling and tenderness, loss of the post-auricular sulcus.' },
      { q: 'When does secondary post-tonsillectomy bleeding occur?', a: 'At 5–10 days, usually from infection.' },
    ],
    checks: ['Airway assessed first in every ENT emergency', 'Stoma type established — tracheostomy or laryngectomy', 'Bed-head sign looked for', 'Anticoagulants and clotting checked in epistaxis', 'Senior anaesthetic and ENT help called early in stridor', 'Drainage arranged for any abscess', 'Button battery excluded in any nasal or swallowed foreign body', 'Volume loss assessed in post-tonsillectomy bleeding'],
  },
];
