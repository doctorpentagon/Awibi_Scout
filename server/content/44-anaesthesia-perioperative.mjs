/**
 * Anaesthesia — the perioperative pathway, airway assessment and the machine.
 *
 * Built from the Anaesthesia special-posting compilation (318 pages). Scout
 * previously had a single drugs-and-blocks entry, so `mallampati`, `vaporizer`
 * and `preoxygenation` were gaps or landed on unrelated entries.
 *
 * Written from scratch: every term defined before it is used, on the assumption
 * the reader has never set foot in an operating theatre.
 */

export default [
  {
    id: 'AS-ANAE-0010',
    type: 'principles',
    title: 'What Anaesthesia Actually Is — Types, the Sedation Continuum and the Perioperative Pathway',
    short: 'Anaesthesia foundations',
    summary:
      'Anaesthesia is not "putting someone to sleep". It is the deliberate, reversible removal of pain, awareness and movement while a team keeps the patient alive through the interval. Sedation and general anaesthesia are not different things — they are points on ONE continuum, and you can slide down it by accident.',
    domains: ['anaesthesia', 'critical_care', 'general_surgery'],
    intents: ['understand', 'classify'],
    hazard: 'critical',
    urgency: 'routine',
    aka: [
      'anaesthesia', 'anesthesia', 'general anaesthesia', 'ga', 'regional anaesthesia',
      'local anaesthesia', 'sedation', 'conscious sedation', 'sedation continuum',
      'monitored anaesthesia care', 'perioperative', 'triad of anaesthesia', 'balanced anaesthesia',
      'anaesthetist', 'anesthesiologist',
    ],
    terms: [
      'anaesthesia', 'general anaesthesia', 'regional', 'local', 'sedation', 'continuum',
      'triad of anaesthesia', 'hypnosis', 'analgesia', 'muscle relaxation', 'amnesia',
      'balanced anaesthesia', 'perioperative', 'preoperative', 'intraoperative', 'postoperative',
      'induction', 'maintenance', 'emergence', 'recovery', 'pacu', 'awareness', 'depth of anaesthesia',
    ],
    confirm_locally: true,
    body: {
      start_here_what_the_words_mean: {
        anaesthesia: 'From the Greek "an-" (without) and "aisthesis" (sensation) — literally WITHOUT SENSATION. It is a drug-induced state that is deliberately produced and, crucially, REVERSIBLE.',
        anaesthetist_or_anaesthesiologist: 'The doctor who provides it. "Anaesthetist" is used in the UK, Commonwealth and much of Africa; "anesthesiologist" in the United States. Same role.',
        perioperative: '"Peri-" means AROUND. The perioperative period is everything around the operation — before (preoperative), during (intraoperative) and after (postoperative). The anaesthetist owns all three, not just the middle one.',
        the_central_idea:
          'Surgery does two things to a patient: it hurts, and it injures. Anaesthesia exists to abolish the pain and the awareness of it, to keep the patient still enough to be operated on, and — the part that is easy to forget — to KEEP THEM ALIVE while the drugs that achieve all this are suppressing their breathing, their circulation and their reflexes. The anaesthetist is not "the person who gives the injection". They are the physician managing a deliberately poisoned patient through a controlled physiological insult.',
      },

      the_triad_of_anaesthesia: {
        why_a_triad: 'A single drug that does everything would need a huge dose and would cause enormous side effects. Instead, three separate goals are met by separate drugs at modest doses. This is called BALANCED ANAESTHESIA and it is the organising idea of the whole specialty.',
        one_hypnosis: 'UNCONSCIOUSNESS and lack of awareness. Delivered by induction agents (propofol, thiopentone, ketamine, etomidate) and maintained by volatile gases (sevoflurane, isoflurane, desflurane) or a continuous infusion.',
        two_analgesia: 'ABOLITION OF PAIN. Note that unconsciousness alone does NOT block pain — the body still mounts a stress response to surgical stimulus, with tachycardia, hypertension and neuroendocrine activation. Opioids, local anaesthetics and other analgesics do this job.',
        three_muscle_relaxation: 'IMMOBILITY and relaxation of muscle so the surgeon can operate and the airway can be instrumented. Delivered by neuromuscular blocking drugs.',
        the_danger_hidden_in_the_triad:
          'A paralysed patient cannot move, cannot speak and cannot signal distress. If the HYPNOTIC component fails while the RELAXANT is working, the result is ACCIDENTAL AWARENESS UNDER GENERAL ANAESTHESIA — the patient is conscious, may feel pain, and is completely unable to indicate it. This is rare, devastating, and the single strongest reason that depth of anaesthesia is monitored and that paralysis is never used casually.',
      },

      the_types_of_anaesthesia: {
        general_anaesthesia: 'A reversible state of drug-induced UNCONSCIOUSNESS affecting the WHOLE body. The patient is unrousable even to painful stimulus. Airway support is almost always required because protective reflexes and breathing are suppressed.',
        regional_anaesthesia: {
          what: 'Sensation is blocked in a REGION of the body by depositing local anaesthetic around the nerves supplying it. The patient may be fully awake.',
          examples: 'SPINAL (subarachnoid) — into the cerebrospinal fluid, fast and dense, for lower abdominal and lower limb surgery and caesarean section. EPIDURAL — into the epidural space, slower, titratable, and can be left as a catheter for prolonged analgesia including labour. PERIPHERAL NERVE BLOCKS — brachial plexus, femoral, sciatic and many others, increasingly guided by ultrasound.',
          why_it_is_often_better: 'Avoids airway instrumentation, causes less nausea, gives excellent postoperative analgesia, reduces opioid requirement, and in some settings reduces complications. In a resource-limited environment a spinal anaesthetic may also be far safer and cheaper than a general anaesthetic, which is a genuinely important point and not merely an economic one.',
        },
        local_anaesthesia: 'Infiltration of a SMALL area — suturing a laceration, removing a skin lesion, a dental block. The patient is fully awake and the area is numb.',
        sedation: 'Drugs given to reduce anxiety and awareness while the patient continues to breathe for themselves. Used for endoscopy, imaging in children, minor procedures, and to supplement regional techniques.',
        combined: 'These are routinely COMBINED — for example a general anaesthetic plus a regional block for postoperative pain, which is now standard practice for many major operations.',
      },

      the_sedation_continuum_the_most_important_safety_concept: {
        the_principle:
          'Sedation and general anaesthesia are NOT two different states. They are a CONTINUUM, and every patient given a sedative is somewhere on it. Depth depends on the drug, the dose, the rate, and — unpredictably — on that individual patient. You can pass from one level to the next WITHOUT INTENDING TO.',
        level_1_minimal_sedation_anxiolysis: 'Responds NORMALLY to voice. Airway unaffected, breathing unaffected, cardiovascular function unaffected. Coordination and judgement may be impaired.',
        level_2_moderate_sedation: 'Responds PURPOSEFULLY to voice or light touch. Maintains own airway. Breathing adequate. Cardiovascular function usually maintained. Note: a reflex WITHDRAWAL from pain is NOT a purposeful response — mistaking one for the other is how people under-estimate the depth they have reached.',
        level_3_deep_sedation: 'Not easily roused; responds purposefully only to REPEATED or PAINFUL stimulation. Airway may need support. Breathing may be inadequate. Cardiovascular function usually maintained.',
        level_4_general_anaesthesia: 'UNROUSABLE, even to pain. Airway intervention usually required. Breathing frequently inadequate. Cardiovascular function may be impaired.',
        the_rule_that_follows_from_this:
          'Anyone administering sedation must be trained and equipped to RESCUE A PATIENT FROM ONE LEVEL DEEPER than they intended to produce. If you plan moderate sedation you must be able to manage deep sedation — which means airway skills, oxygen, suction, monitoring, reversal agents and a second person. This is the single most transgressed rule in procedural sedation, and it is transgressed by people who "only gave a small dose".',
      },

      the_perioperative_pathway: {
        preoperative: 'Assessment, risk stratification, optimisation of existing disease, explanation and consent, fasting instructions, premedication, and formulating the anaesthetic PLAN — including the airway plan and the backup airway plan.',
        induction: 'The transition from awake to anaesthetised. Physiologically the most dangerous few minutes of a routine anaesthetic, because consciousness, airway reflexes, breathing and vascular tone are all lost within about a minute.',
        maintenance: 'Keeping the patient at the right depth while surgery proceeds — adjusting for the intensity of stimulus, replacing fluid and blood, maintaining temperature, and monitoring continuously.',
        emergence: 'Waking up. The SECOND most dangerous period, because reflexes return unevenly — a patient can be awake enough to cough and bite but not awake enough to protect their airway. LARYNGOSPASM and airway obstruction cluster here.',
        recovery: 'The post-anaesthesia care unit (PACU). Monitored until awake, breathing adequately, pain-controlled, warm, and haemodynamically stable. Most immediate postoperative catastrophes happen here or shortly after leaving.',
        postoperative: 'Pain management, nausea and vomiting, fluid balance, thromboprophylaxis, and recognition of complications.',
        the_asymmetry_worth_noticing: 'Public attention focuses on the operation. Anaesthetic morbidity clusters at INDUCTION and EMERGENCE — the two transitions — not in the stable middle.',
      },

      why_anaesthesia_is_dangerous_in_a_way_that_is_easy_to_underestimate: {
        the_drugs_do_harm_deliberately: 'Every anaesthetic drug suppresses something the patient needs: consciousness, airway reflexes, respiratory drive, myocardial contractility, vascular tone. Safety comes not from the drugs being gentle but from CONTINUOUS MONITORING and IMMEDIATE correction.',
        loss_of_protective_reflexes: 'An anaesthetised patient cannot cough, swallow or protect their airway. Gastric contents entering the lungs — ASPIRATION — causes a chemical pneumonitis that can be fatal. This single fact explains fasting rules, rapid sequence induction and cricoid pressure.',
        the_patient_cannot_report: 'They cannot say "I feel faint", "I am in pain", "something is wrong". Every warning that a conscious patient would give must instead be DETECTED by a monitor or by the anaesthetist looking.',
        the_safety_record_is_earned_not_given:
          'Anaesthesia is now extremely safe in well-resourced settings — but that safety was built from pulse oximetry, capnography, standardised monitoring, checklists, difficult airway algorithms and trained assistance. Where those are absent, mortality is orders of magnitude higher. The safety belongs to the SYSTEM, not to the drugs.',
      },
    },
    warnings: [
      'Sedation and general anaesthesia are ONE continuum. You can pass from moderate to deep sedation without intending to.',
      'Anyone giving sedation must be able to rescue a patient from ONE LEVEL DEEPER than intended — airway skills, oxygen, suction, monitoring and a trained assistant.',
      'A reflex withdrawal from pain is NOT a purposeful response. Mistaking it underestimates the depth reached.',
      'Unconsciousness does not abolish the pain response — analgesia is a separate component of the triad.',
      'A paralysed patient with inadequate hypnosis is AWARE and cannot signal it. Never paralyse casually.',
      'Induction and emergence are the two most dangerous periods, not the stable middle.',
      'Laryngospasm and airway obstruction cluster at emergence, when reflexes return unevenly.',
      'An anaesthetised patient cannot protect their airway. Aspiration of gastric contents can be fatal.',
      'Anaesthetic safety is a property of the SYSTEM — monitoring, checklists, trained assistance — not of the drugs.',
    ],
    limitations: ['Drug choice, dosing, monitoring standards and sedation governance are protocol- and country-specific. Scout states no doses.'],
    cards: [
      { q: 'What does the word anaesthesia literally mean?', a: 'Without sensation — from Greek an- (without) and aisthesis (sensation).' },
      { q: 'Name the triad of anaesthesia.', a: 'Hypnosis (unconsciousness), analgesia (pain relief), and muscle relaxation.' },
      { q: 'What is balanced anaesthesia?', a: 'Using separate drugs at modest doses for each component of the triad, rather than one drug at a huge dose.' },
      { q: 'What are the four levels of the sedation continuum?', a: 'Minimal (anxiolysis), moderate, deep, and general anaesthesia.' },
      { q: 'What is the rescue rule for sedation?', a: 'Be able to rescue a patient from one level deeper than you intended to produce.' },
      { q: 'Which two periods carry most anaesthetic risk?', a: 'Induction and emergence — the two transitions.' },
      { q: 'What is accidental awareness and why is it so serious?', a: 'Consciousness with inadequate hypnosis while paralysed — the patient may feel pain and cannot signal it.' },
      { q: 'Why is regional anaesthesia often preferable?', a: 'Avoids airway instrumentation, less nausea, better postoperative analgesia, less opioid, and often safer and cheaper.' },
    ],
    checks: ['Type of anaesthesia chosen and justified', 'Sedation depth intended stated explicitly', 'Rescue capability one level deeper confirmed', 'Airway plan and backup plan documented', 'Monitoring available and working', 'Trained assistant present'],
  },

  {
    id: 'AS-ANAE-0011',
    type: 'examination',
    title: 'Airway Assessment — Mallampati, Thyromental Distance and Predicting the Difficult Airway',
    short: 'Airway assessment',
    summary:
      'You are asking one question: if this patient stops breathing after I give the drugs, can I keep them oxygenated? No single test answers it — Mallampati alone is a poor predictor. Assessment is a COMBINATION of findings, and the most valuable single piece of information is a previous difficult intubation.',
    domains: ['anaesthesia', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'airway assessment', 'mallampati', 'modified mallampati', 'thyromental distance',
      'difficult airway', 'difficult intubation', 'lemon', 'lemon score', 'mouth opening',
      'upper lip bite test', 'cormack lehane', 'cicv', 'cannot intubate cannot oxygenate',
      'front of neck access', 'cricothyroid membrane', 'preoxygenation', 'apnoeic oxygenation',
    ],
    terms: [
      'airway assessment', 'mallampati', 'thyromental', 'sternomental', 'interincisor',
      'mouth opening', 'upper lip bite', 'mandibular protrusion', 'cervical extension',
      'cormack lehane', 'lemon', 'difficult airway', 'difficult mask ventilation', 'mocha',
      'bones', 'cicv', 'ciccv', 'front of neck access', 'cricothyroidotomy', 'cricothyroid membrane',
      'preoxygenation', 'denitrogenation', 'apnoeic oxygenation', 'rapid sequence induction',
      'obstructive sleep apnoea', 'obesity',
    ],
    confirm_locally: true,
    body: {
      the_question_you_are_really_asking: {
        the_framing:
          'Airway assessment is not an academic exercise in scoring. Once you give an induction agent and a muscle relaxant, the patient STOPS BREATHING. From that moment you must supply oxygen yourself. The entire assessment answers one question: CAN I OXYGENATE THIS PATIENT if they cannot do it themselves?',
        the_four_ways_you_might_fail: 'Difficulty with (1) FACE MASK ventilation, (2) SUPRAGLOTTIC AIRWAY placement, (3) TRACHEAL INTUBATION, and (4) FRONT-OF-NECK ACCESS. A patient may be easy for one and impossible for another, so all four are assessed — not just intubation.',
      },

      the_history_which_matters_more_than_the_examination: {
        the_single_most_valuable_finding:
          'A PREVIOUS DIFFICULT INTUBATION. Ask directly: have you had an anaesthetic before, and were you told there was any difficulty with your breathing tube? Look for an alert card, a bracelet, or previous anaesthetic records. This outperforms every bedside test, and it is the question most often skipped.',
        other_history: 'SNORING and OBSTRUCTIVE SLEEP APNOEA (predicts difficult mask ventilation). Head and neck RADIOTHERAPY or surgery (fibrosis, fixed tissues — a major and under-appreciated predictor). Burns or scarring to face and neck. Rheumatoid arthritis (limited neck movement, unstable atlanto-axial joint). Ankylosing spondylitis (fixed flexed neck). Acromegaly (large tongue and soft tissues). Down syndrome (large tongue, atlanto-axial instability). Trauma. Tumours of the airway. Stridor, voice change or difficulty lying flat — all suggest a compromised airway ALREADY. Pregnancy (oedematous, friable, vascular airway). LOOSE TEETH or dentures — ask and document, because a tooth lost into the airway is both an injury and a foreign body.',
      },

      the_bedside_tests_and_what_each_one_is_actually_measuring: {
        modified_mallampati: {
          how_to_do_it: 'Patient SITTING UPRIGHT, head neutral, mouth opened as WIDE as possible, tongue protruded MAXIMALLY, and WITHOUT phonating (asking them to say "aah" changes the view and invalidates it). Look from eye level.',
          the_classes: 'CLASS I — soft palate, fauces, uvula and both pillars visible. CLASS II — soft palate, fauces and uvula visible. CLASS III — soft palate and only the BASE of the uvula visible. CLASS IV — soft palate NOT visible at all, only hard palate.',
          what_it_measures: 'The relationship between TONGUE SIZE and ORAL CAVITY volume. A big tongue in a small mouth obstructs the view at laryngoscopy.',
          the_honest_limitation:
            'MALLAMPATI ALONE IS A POOR PREDICTOR. Used in isolation it has modest sensitivity and specificity and generates both false alarms and false reassurance. It has value only as one component of a combined assessment. Quoting a Mallampati class as though it settles the question is a common and unsafe shortcut.',
        },
        thyromental_distance: {
          how: 'With the neck FULLY EXTENDED, measure from the thyroid notch (the top of the Adam\'s apple) to the tip of the mentum (chin). Roughly three finger-breadths, or about 6.5 cm, is considered adequate.',
          what_it_measures: 'The space into which the tongue must be displaced during laryngoscopy. A SHORT distance means a "receding chin" and little room to compress the tongue, so the larynx sits more anteriorly relative to your line of sight.',
        },
        mouth_opening_interincisor_gap: 'Distance between upper and lower incisors on maximal opening. Less than about 3 cm (two to three finger-breadths) predicts difficulty, because you need room to insert a laryngoscope AND a tube alongside it.',
        mandibular_protrusion_upper_lip_bite_test: {
          how: 'Ask the patient to bite their UPPER LIP with their lower incisors. CLASS A — lower incisors reach above the vermilion border. CLASS B — reach the vermilion but not above. CLASS C — cannot reach the upper lip at all.',
          what_it_measures: 'The ability to SUBLUX the jaw forward. Inability to advance the lower incisors past the upper ones is a strong predictor of difficulty, and this test performs better than Mallampati.',
        },
        cervical_movement: 'Assess flexion of the lower neck and EXTENSION at the atlanto-occipital joint — this creates the "sniffing position" that aligns the oral, pharyngeal and laryngeal axes. NEVER force movement in suspected cervical spine injury, in rheumatoid arthritis, or in Down syndrome.',
        the_cricothyroid_membrane: {
          why_it_belongs_in_every_assessment:
            'PALPATE AND IDENTIFY IT BEFORE YOU START, in every patient. If everything else fails, this is where an emergency surgical airway goes. Identifying it under pressure, in a hypoxic patient with a swollen neck, is far harder than identifying it calmly beforehand. In obese or distorted necks, mark it or use ultrasound. This takes ten seconds and is the step most often omitted.',
        },
      },

      combining_the_findings: {
        lemon_for_difficult_intubation: 'L — LOOK externally for obvious abnormality. E — EVALUATE the 3-3-2 rule (3 finger-breadths mouth opening, 3 between chin and hyoid, 2 between hyoid and thyroid notch). M — MALLAMPATI. O — OBSTRUCTION or obesity. N — NECK mobility.',
        predictors_of_difficult_MASK_ventilation: 'Remember these separately, because a patient you cannot intubate is survivable if you can mask-ventilate — and a patient you can neither intubate NOR ventilate is an emergency. Predictors: BEARD, obesity (raised body mass index), no TEETH (edentulous — a poor mask seal), age over 55, snoring or sleep apnoea, and a stiff or non-compliant chest.',
        cormack_lehane_is_not_a_prediction: 'This grades what you ACTUALLY SEE at laryngoscopy — I full view of the glottis, II partial, III epiglottis only, IV neither glottis nor epiglottis. It is a DESCRIPTION AFTER THE FACT, recorded for future anaesthetics, not a bedside predictor. Confusing it with Mallampati is a frequent error.',
      },

      preoxygenation_the_step_that_buys_the_time: {
        what_it_is: 'Breathing a HIGH concentration of oxygen through a tightly sealed mask BEFORE induction, for about three minutes of normal breathing or eight vital-capacity breaths.',
        what_it_actually_does: 'The functional residual capacity — the air left in the lungs after a normal breath out — is normally about 70–80% NITROGEN, which is useless. Preoxygenation performs DENITROGENATION: it washes out nitrogen and replaces it with oxygen, converting the lungs into an oxygen reservoir. A well-preoxygenated healthy adult may tolerate several minutes of apnoea before desaturating; a poorly preoxygenated one desaturates in seconds.',
        who_desaturates_fast_and_why: 'CHILDREN (high oxygen consumption, small reserve), PREGNANT women (raised diaphragm reduces functional residual capacity, and consumption is higher), the OBESE (reduced functional residual capacity, higher demand), and the CRITICALLY ILL (shunt, high consumption). In these groups the safe apnoeic window may be under a minute, and preoxygenation is not optional.',
        practical_points: 'The mask MUST seal — a leak entrains room air and defeats the whole process. Position matters: head-up or ramped improves it, especially in the obese. APNOEIC OXYGENATION — leaving nasal oxygen running during the apnoeic period — extends the safe window and costs almost nothing.',
      },

      when_assessment_predicts_difficulty: {
        the_principle: 'A predicted difficult airway is managed by PLANNING, not by courage. The plan is made and stated out loud BEFORE any drug is given.',
        what_planning_means: 'Senior help present from the start. Equipment prepared and checked — videolaryngoscope, bougie, supraglottic airways in several sizes, front-of-neck kit open. A stated PLAN A, PLAN B, PLAN C and a declared point at which you move on rather than repeating a failing technique. Consider AWAKE intubation, where the airway is secured under local anaesthetic with the patient breathing and protecting themselves throughout — the safest option when difficulty is genuinely anticipated.',
        the_failure_pattern_that_kills:
          'Repeated attempts at the same failing technique, causing trauma, bleeding and swelling, converting a difficult airway into an impossible one, while oxygen saturation falls. CANNOT INTUBATE, CANNOT OXYGENATE (CICO) is the terminal emergency, and the treatment is EARLY declaration and FRONT-OF-NECK ACCESS. The recurring lesson from every published airway disaster is that front-of-neck access was performed too LATE, not too early. Declare it, call it, and cut.',
      },
    },
    warnings: [
      'MALLAMPATI ALONE IS A POOR PREDICTOR. Use a combination of findings, never a single score.',
      'A previous difficult intubation is the most valuable single piece of information. Ask about it directly and look for an alert card.',
      'Assess mask ventilation separately from intubation — the patient you can neither intubate nor ventilate is the emergency.',
      'PALPATE AND IDENTIFY THE CRICOTHYROID MEMBRANE in every patient before induction. Finding it under pressure is far harder.',
      'Do not force neck movement in suspected cervical injury, rheumatoid arthritis or Down syndrome.',
      'Do not ask the patient to phonate during Mallampati assessment — it invalidates the view.',
      'Cormack-Lehane grades what you see AT laryngoscopy. It is a record, not a prediction.',
      'Children, pregnant women, the obese and the critically ill desaturate within seconds. Preoxygenate properly and consider apnoeic oxygenation.',
      'A mask leak defeats preoxygenation entirely.',
      'Repeated attempts at a failing technique convert a difficult airway into an impossible one.',
      'In cannot-intubate-cannot-oxygenate, front-of-neck access is performed too LATE far more often than too early. Declare it and act.',
      'Ask about and document loose teeth and dentures.',
    ],
    limitations: ['Difficult-airway algorithms, equipment availability and awake-intubation technique are institution-specific. Follow your local guideline.'],
    cards: [
      { q: 'What single question does airway assessment answer?', a: 'If this patient stops breathing after induction, can I oxygenate them?' },
      { q: 'How is the modified Mallampati performed?', a: 'Sitting upright, head neutral, mouth wide, tongue maximally protruded, WITHOUT phonating.' },
      { q: 'What does Mallampati actually measure?', a: 'Tongue size relative to oral cavity volume.' },
      { q: 'What is the honest limitation of Mallampati?', a: 'Alone it is a poor predictor — it has value only as part of a combined assessment.' },
      { q: 'What does thyromental distance measure?', a: 'The space into which the tongue is displaced during laryngoscopy — about 6.5 cm is adequate.' },
      { q: 'Which test outperforms Mallampati?', a: 'The upper lip bite test — it assesses mandibular protrusion.' },
      { q: 'List predictors of difficult MASK ventilation.', a: 'Beard, obesity, edentulous, age over 55, snoring or sleep apnoea, stiff chest.' },
      { q: 'What does preoxygenation actually achieve?', a: 'Denitrogenation — replacing nitrogen in the functional residual capacity with oxygen, creating a reservoir.' },
      { q: 'Who desaturates fastest?', a: 'Children, pregnant women, the obese and the critically ill.' },
      { q: 'What is the recurring lesson from airway disasters?', a: 'Front-of-neck access was performed too late, not too early.' },
      { q: 'Cormack-Lehane vs Mallampati?', a: 'Cormack-Lehane describes the actual laryngoscopic view; Mallampati is a bedside prediction.' },
    ],
    checks: ['Previous anaesthetic difficulty asked about', 'Mallampati, mouth opening, thyromental distance and upper lip bite recorded', 'Neck movement assessed safely', 'Mask ventilation predictors considered separately', 'Cricothyroid membrane palpated and identified', 'Loose teeth documented', 'Preoxygenation performed with a sealed mask', 'Plans A, B and C stated aloud before induction', 'Senior help and difficult airway equipment available'],
  },

  {
    id: 'AS-ANAE-0012',
    type: 'instrument',
    title: 'The Anaesthesia Machine — Gases, Vaporizers, Breathing Systems and Capnography',
    short: 'Anaesthesia workstation',
    summary:
      'The machine is a life-support system, not a gas tap. It has one job above all others: it must NEVER deliver a hypoxic mixture. Every safety feature — the pin index, the oxygen failure alarm, the hypoxic guard — exists because someone died when it was absent.',
    domains: ['anaesthesia', 'critical_care'],
    intents: ['understand', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'anaesthesia machine', 'anaesthetic machine', 'anaesthesia workstation', 'boyle machine',
      'vaporizer', 'vaporiser', 'breathing system', 'breathing circuit', 'circle system',
      'mapleson', 'soda lime', 'capnography', 'end tidal co2', 'pin index', 'oxygen failure alarm',
      'scavenging', 'machine check',
    ],
    terms: [
      'anaesthesia machine', 'workstation', 'cylinder', 'pipeline', 'pin index', 'schrader',
      'pressure regulator', 'flowmeter', 'rotameter', 'hypoxic guard', 'oxygen failure alarm',
      'vaporizer', 'splitting ratio', 'saturated vapour pressure', 'circle system', 'soda lime',
      'carbon dioxide absorber', 'mapleson', 'bain', 'dead space', 'rebreathing', 'scavenging',
      'capnography', 'end tidal co2', 'capnogram', 'oesophageal intubation', 'machine check',
    ],
    confirm_locally: true,
    body: {
      what_the_machine_is_for: {
        the_four_jobs: 'DELIVER a precise mixture of oxygen and other gases · ADD a controlled concentration of volatile anaesthetic agent · PROVIDE a means of ventilating the patient · REMOVE exhaled carbon dioxide and waste gas.',
        the_overriding_safety_principle:
          'The machine must be incapable of delivering a HYPOXIC mixture. Almost every engineering safeguard in it exists to make hypoxic delivery difficult or impossible, because delivering nitrous oxide without oxygen kills within minutes and has done so historically.',
      },

      gas_supply: {
        two_sources: 'PIPELINE — piped from a central hospital supply, the normal working source. CYLINDERS — attached to the machine as the BACKUP, and used where no pipeline exists. Cylinders must be checked and turned on before every list, because they are the only supply if the pipeline fails.',
        colour_coding_and_the_warning_about_it:
          'Cylinders are colour-coded — but the coding DIFFERS BETWEEN COUNTRIES and standards have changed. In the older UK system oxygen is black with a white shoulder; under the ISO standard oxygen is white-shouldered; in the United States oxygen is green. NEVER rely on colour alone. READ THE LABEL. This is a genuine, documented cause of fatal gas misidentification.',
        the_two_keying_systems: {
          pin_index: 'For CYLINDERS. Each gas has a unique arrangement of pins and holes on the yoke, so an oxygen cylinder physically cannot be fitted to a nitrous oxide port. A mechanical impossibility, not a warning label.',
          schrader_valve: 'For PIPELINES. Each gas has a non-interchangeable diameter-indexed probe, so the wrong hose cannot be connected.',
          why_this_matters: 'Both are examples of the same design philosophy — make the dangerous action PHYSICALLY IMPOSSIBLE rather than relying on human vigilance. This is a principle worth internalising well beyond anaesthesia.',
        },
        pressure_regulators: 'Cylinder pressure is very high and falls as the cylinder empties. Regulators reduce it to a constant working pressure so that flow does not change as the cylinder drains.',
        flowmeters_rotameters: 'Measure the flow of each gas. In a correctly configured machine OXYGEN is positioned DOWNSTREAM (nearest the outlet) so that a leak in another flowmeter cannot dilute the oxygen on its way out.',
        the_safety_devices: {
          oxygen_failure_alarm: 'Sounds when oxygen supply pressure falls. Classically driven by the oxygen supply itself, so it cannot fail silently.',
          hypoxic_guard: 'A mechanical or electronic link between the oxygen and nitrous oxide controls that prevents delivery below a minimum oxygen concentration (commonly 25%). You physically cannot dial up a hypoxic mixture.',
          oxygen_flush: 'Delivers a high flow of pure oxygen directly, BYPASSING the vaporizer. Useful in an emergency — but note the corollary: it delivers NO anaesthetic agent, so prolonged use during surgery risks AWARENESS. It can also cause barotrauma if used with a closed system.',
        },
      },

      vaporizers: {
        the_problem_they_solve:
          'Volatile agents such as sevoflurane and isoflurane are LIQUIDS at room temperature. Their vapour above the liquid is far too concentrated to give directly — it would be lethal. A vaporizer produces an accurate, DILUTE, controlled concentration.',
        how_it_works: 'Fresh gas entering the vaporizer is SPLIT. A small fraction is diverted through the vaporising chamber where it becomes fully saturated with agent; the remainder bypasses it. The two streams recombine, and the SPLITTING RATIO — set by the dial — determines the final concentration.',
        why_they_are_agent_specific:
          'Each agent has a different SATURATED VAPOUR PRESSURE — a different tendency to evaporate — so each vaporizer is calibrated for ONE agent and is keyed so the wrong agent cannot be filled into it. Filling a vaporizer with the wrong agent can deliver a grossly wrong and potentially fatal concentration.',
        temperature_compensation: 'Evaporation cools the liquid, which would reduce output over time. Vaporizers contain a temperature-compensating mechanism (typically a bimetallic strip) that widens the flow to the chamber as it cools, keeping output constant.',
        practical_rules: 'Keep vaporizers UPRIGHT — tipping can flood the bypass and deliver a dangerously high concentration. Do not overfill. Only one vaporizer should be on at a time, and interlocks usually enforce this.',
      },

      breathing_systems: {
        the_two_problems_any_system_must_solve: 'Deliver fresh gas to the patient, and prevent REBREATHING of exhaled carbon dioxide.',
        dead_space: 'The volume of the airway that is ventilated but takes NO part in gas exchange. ANATOMICAL dead space is the conducting airways. APPARATUS dead space is added by the equipment — masks, connectors, filters. Adding apparatus dead space is significant in small children, where it can be a large fraction of tidal volume.',
        mapleson_systems: 'Simple, valveless systems with no carbon dioxide absorber. They prevent rebreathing by using a HIGH FRESH GAS FLOW to wash out exhaled gas. Efficient for one mode of ventilation and not another — the Mapleson A (Magill) is efficient for SPONTANEOUS breathing, while the Mapleson D and its coaxial version the BAIN circuit are efficient for CONTROLLED ventilation. They are simple, light and portable, but wasteful of gas.',
        the_circle_system: {
          what: 'The standard modern system. Gas circulates in a CIRCLE through one-way valves, passing through a CARBON DIOXIDE ABSORBER so exhaled gas can be reused.',
          the_advantage: 'Because carbon dioxide is removed chemically rather than flushed away, fresh gas flow can be very LOW. That means far less agent used, much lower cost, less atmospheric pollution, and better preservation of the patient\'s heat and humidity.',
          the_absorber: 'SODA LIME — calcium hydroxide with sodium hydroxide. It reacts with carbon dioxide to form calcium carbonate, producing HEAT and WATER as by-products, which is why the canister feels warm and the gas becomes humidified. A pH indicator dye changes colour when exhausted — but note the dye can REVERT on standing, so a canister that looks fresh after resting may still be exhausted. Judge by the capnograph, which will show a rising inspired carbon dioxide, not by the colour alone.',
          hazards: 'Exhausted absorbent causes rebreathing. Very dry absorbent can react with volatile agents to produce carbon monoxide and, with sevoflurane, "compound A".',
        },
        scavenging: 'Waste anaesthetic gas is actively removed from theatre to protect STAFF from chronic exposure. Not a patient safety device — an occupational health one.',
      },

      capnography_the_single_most_valuable_monitor: {
        what_it_measures: 'The concentration of carbon dioxide in exhaled gas, displayed continuously as a WAVEFORM (the capnogram) with a numerical end-tidal value.',
        the_role_that_saves_lives:
          'It is the DEFINITIVE confirmation of TRACHEAL INTUBATION. A sustained capnograph trace over several breaths confirms the tube is in the trachea. Its ABSENCE means the tube is in the OESOPHAGUS until proven otherwise. Unrecognised oesophageal intubation is uniformly fatal and is entirely preventable by this monitor. The rule is: NO TRACE = WRONG PLACE.',
        what_the_waveform_tells_you: 'A normal capnogram has a flat baseline at zero, a rapid upstroke, a near-flat alveolar plateau, and a sharp downstroke on inspiration.',
        specific_patterns: {
          sudden_loss: 'Disconnection, oesophageal intubation, complete obstruction, or CARDIAC ARREST — because with no circulation, no carbon dioxide is delivered to the lungs.',
          gradual_fall: 'Falling cardiac output, hypovolaemia, hyperventilation, or pulmonary embolism.',
          rising_value: 'Hypoventilation, rising production (fever, sepsis, MALIGNANT HYPERTHERMIA — where a rapidly rising end-tidal carbon dioxide is often the EARLIEST sign), or absorbed carbon dioxide during laparoscopy.',
          sloping_upstroke_shark_fin: 'Obstruction to expiratory flow — bronchospasm, asthma, chronic obstructive pulmonary disease, or a kinked tube.',
          raised_baseline: 'REBREATHING — usually exhausted soda lime or a faulty valve.',
          return_of_a_trace_during_cpr: 'A sudden rise in end-tidal carbon dioxide during cardiopulmonary resuscitation is often the first sign of RETURN OF SPONTANEOUS CIRCULATION.',
        },
      },

      the_machine_check: {
        why_it_is_not_a_formality: 'The check exists because machines fail in ways that are silent until a patient is anaesthetised and cannot breathe for themselves. It is performed at the START OF EVERY LIST and again with EVERY CHANGE of machine or patient where relevant.',
        what_it_covers: 'Self-test completed · adequate OXYGEN supply from pipeline AND a full backup cylinder · correct gas identity read from the LABEL · no leaks in the breathing system · vaporizer correctly filled, seated and not tipped · carbon dioxide absorbent not exhausted · ventilator functioning · SUCTION present and working · alarms enabled and audible · SCAVENGING connected · and — the item most often forgotten — a SELF-INFLATING BAG immediately available so you can ventilate the patient if the machine fails completely.',
      },
    },
    warnings: [
      'NO TRACE = WRONG PLACE. Absent capnography after intubation means oesophageal placement until proven otherwise.',
      'NEVER identify a cylinder by colour alone — coding differs between countries and has changed. READ THE LABEL.',
      'Keep vaporizers upright. Tipping can deliver a dangerously high concentration.',
      'Vaporizers are agent-specific. Filling with the wrong agent can be fatal.',
      'The oxygen flush bypasses the vaporizer and delivers NO anaesthetic — prolonged use risks awareness.',
      'Soda lime indicator dye can revert on standing. A canister that looks fresh may be exhausted — trust the capnograph.',
      'A rapidly rising end-tidal carbon dioxide may be the earliest sign of malignant hyperthermia.',
      'Sudden loss of the capnograph trace may mean cardiac arrest, not just disconnection.',
      'Check that a SELF-INFLATING BAG is immediately available — it is the fallback when the machine fails entirely.',
      'Check the backup cylinder is present and full before every list; it is the only supply if the pipeline fails.',
      'Apparatus dead space matters most in small children, where it can be a large fraction of tidal volume.',
    ],
    limitations: ['Machine designs, check procedures and absorbent types vary by manufacturer and institution. Follow the local checklist for the specific workstation.'],
    cards: [
      { q: 'What is the overriding safety principle of the anaesthesia machine?', a: 'It must be incapable of delivering a hypoxic mixture.' },
      { q: 'What is the pin index system?', a: 'A unique pin arrangement making it physically impossible to fit a cylinder to the wrong yoke.' },
      { q: 'Why must you not identify cylinders by colour?', a: 'Colour coding differs between countries and has changed — read the label.' },
      { q: 'How does a vaporizer work?', a: 'It splits fresh gas — part is saturated with agent, part bypasses — and the splitting ratio sets the concentration.' },
      { q: 'Why is each vaporizer agent-specific?', a: 'Each agent has a different saturated vapour pressure, so calibration differs.' },
      { q: 'What is the advantage of a circle system?', a: 'Carbon dioxide is absorbed chemically, so fresh gas flow can be very low — less agent, cost, pollution and heat loss.' },
      { q: 'What does soda lime produce as by-products?', a: 'Heat and water — which is why the canister warms and the gas is humidified.' },
      { q: 'What does absent capnography after intubation mean?', a: 'Oesophageal intubation until proven otherwise. No trace = wrong place.' },
      { q: 'What causes a shark-fin capnogram?', a: 'Expiratory flow obstruction — bronchospasm, asthma, COPD, or a kinked tube.' },
      { q: 'What does a raised capnogram baseline indicate?', a: 'Rebreathing — usually exhausted soda lime or a faulty valve.' },
      { q: 'What does the oxygen flush bypass, and why does that matter?', a: 'The vaporizer — so it delivers no anaesthetic agent and prolonged use risks awareness.' },
    ],
    checks: ['Machine self-test completed', 'Pipeline and full backup cylinder confirmed', 'Gas identity read from the label', 'Breathing system leak-tested', 'Vaporizer filled, seated and upright', 'Absorbent checked', 'Suction working', 'Alarms enabled', 'Scavenging connected', 'Self-inflating bag immediately available', 'Capnography connected and working'],
  },
];
