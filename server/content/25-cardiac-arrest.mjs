/**
 * Cardiac arrest had no entry at all.
 *
 * `CPR` resolved to Cerebral Perfusion Pressure, `ALS` to Normal Values, `ROSC`
 * to Raynaud and `defibrillation` to cardiac enzymes. Anaphylaxis, stroke,
 * sepsis and status epilepticus all had homes; the ultimate emergency did not.
 */

export default [
  {
    id: 'AS-CARD-0003',
    type: 'emergency',
    title: 'Cardiac Arrest — Rhythms, CPR Quality and the Reversible Causes',
    short: 'Cardiac arrest',
    summary:
      'Two shockable rhythms, two non-shockable. What determines survival is not the drugs — it is EARLY high-quality compressions with minimal interruption, EARLY defibrillation, and finding the reversible cause. Adrenaline improves return of circulation far more than it improves survival with intact neurology.',
    domains: ['emergency_medicine', 'critical_care', 'cardiovascular'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'cardiac arrest', 'cpr', 'cardiopulmonary resuscitation', 'als', 'advanced life support',
      'bls', 'basic life support', 'resuscitation', 'defibrillation', 'rosc', 'code blue',
      'crash call', 'vf arrest', 'asystole', 'pea', 'collapse',
      'ventricular fibrillation', 'vf', 'pulseless vt', 'pulseless ventricular tachycardia',
      'pulseless electrical activity', 'shockable rhythm', 'non-shockable rhythm',
      'chest compressions', 'four hs and four ts', 'reversible causes of cardiac arrest',
    ],
    terms: [
      'cardiac arrest', 'cpr', 'chest compressions', 'defibrillation', 'shock', 'vf',
      'ventricular fibrillation', 'pulseless vt', 'asystole', 'pea', 'pulseless electrical activity',
      'rosc', 'adrenaline', 'epinephrine', 'amiodarone', 'four hs', 'four ts', 'reversible causes',
      'post arrest care', 'targeted temperature', 'als', 'bls', 'agonal',
    ],
    confirm_locally: true,
    body: {
      recognition: {
        the_three_things: 'UNRESPONSIVE + NOT BREATHING NORMALLY + no signs of life. Start compressions.',
        agonal_breathing:
          'Occasional gasping, snoring or irregular noisy breaths in the first minutes of arrest. It is NOT breathing — it is a brainstem reflex, and it is the single commonest reason bystanders and staff delay starting CPR. If breathing is not NORMAL, treat it as arrest.',
        pulse_check: 'Unreliable and slow even for experienced clinicians. Do not spend more than 10 seconds, and if there is any doubt, START COMPRESSIONS. The harm of compressions on a perfusing patient is far smaller than the harm of delay in an arrest.',
      },
      the_four_rhythms: {
        shockable: {
          which: 'VENTRICULAR FIBRILLATION and PULSELESS VENTRICULAR TACHYCARDIA.',
          action: 'DEFIBRILLATE IMMEDIATELY, then resume compressions at once without waiting to reassess. Every minute of delay in defibrillation substantially reduces survival, and these are the rhythms with the best outcomes — so recognising them fast matters more than anything else in the algorithm.',
        },
        non_shockable: {
          which: 'ASYSTOLE and PULSELESS ELECTRICAL ACTIVITY (PEA — organised electrical activity with no pulse).',
          action: 'Do NOT shock. Continue high-quality CPR, give adrenaline early, and above all HUNT THE REVERSIBLE CAUSE — in PEA especially, the rhythm is a symptom and the cause is the treatment.',
          the_common_error: 'Shocking asystole or PEA. It achieves nothing, interrupts compressions, and interruption is what kills.',
        },
        fine_vf_versus_asystole: 'Fine VF can look like asystole. Check the leads, gain and connections before calling asystole — a shockable rhythm mistaken for asystole loses the best chance the patient has.',
      },
      what_actually_determines_survival: {
        the_hierarchy: 'Early recognition → early high-quality CPR → early defibrillation → treating the cause. Drugs sit well below all of these.',
        compression_quality: [
          'Push HARD and FAST — depth and rate per your current guideline.',
          'FULL RECOIL between compressions. Leaning prevents the heart refilling, and it is the most frequent quality failure.',
          'MINIMISE INTERRUPTIONS. Coronary perfusion pressure builds over successive compressions and collapses the moment you stop — every pause resets the work already done. Pre-charge the defibrillator and plan the rhythm check so the pause is measured in seconds.',
          'ROTATE the compressor regularly. Quality degrades with fatigue long before the person doing it notices.',
          'Avoid over-ventilation. Excessive ventilation raises intrathoracic pressure and reduces venous return and cardiac output.',
        ],
        the_uncomfortable_evidence:
          'ADRENALINE clearly increases return of spontaneous circulation, but its effect on survival with GOOD NEUROLOGICAL OUTCOME is far more modest. It is part of the algorithm, but it is not what saves the patient — compressions and defibrillation are. Never let drug preparation interrupt compressions.',
      },
      the_reversible_causes: {
        why_this_is_the_core_skill: 'In PEA and asystole, the algorithm keeps the patient alive while you find the cause. If you do not find it, the outcome is decided. Run through them explicitly and out loud.',
        four_hs: {
          hypoxia: 'Airway and oxygenation. Confirm the airway is patent and the chest is being ventilated.',
          hypovolaemia: 'Haemorrhage — trauma, gastrointestinal, ruptured aneurysm, ruptured ectopic pregnancy. Give volume and stop the bleeding.',
          hyperkalaemia_and_metabolic: 'Hyperkalaemia, hypokalaemia, hypocalcaemia, hypoglycaemia, acidosis. Hyperkalaemia is common in renal failure, crush injury and rhabdomyolysis, and it is TREATABLE — check a gas early.',
          hypothermia: 'Prolonged resuscitation is justified. A patient is not dead until WARM and dead, and defibrillation and drugs are less effective until rewarmed.',
        },
        four_ts: {
          tension_pneumothorax: 'Decompress on clinical suspicion. Do not wait for imaging.',
          tamponade: 'Consider after cardiac surgery, trauma, malignancy or uraemia. Bedside ultrasound in the rhythm-check pause identifies it.',
          toxins: 'Overdose and poisoning — check for antidotes. Local anaesthetic toxicity, beta-blocker, calcium channel blocker, tricyclic and opioid overdose all have specific treatments.',
          thrombosis: 'Coronary (massive MI) or pulmonary (massive PE). Suspected massive PE may justify thrombolysis, and if given, CPR should then be continued for an extended period to allow it to work.',
        },
        pregnancy: 'From roughly the second half of pregnancy, perform MANUAL LEFT UTERINE DISPLACEMENT to relieve aortocaval compression, and prepare for RESUSCITATIVE HYSTEROTOMY early — it is done to save the MOTHER by relieving that compression, and the window is short.',
      },
      things_that_help_that_are_easy_to_forget: [
        'WAVEFORM CAPNOGRAPHY. It confirms tracheal tube placement, gives real-time feedback on compression quality, and a sudden RISE in end-tidal CO2 is often the first sign of return of circulation. A persistently very low value after prolonged good-quality CPR carries poor prognostic information.',
        'BEDSIDE ULTRASOUND during the planned rhythm-check pause — for tamponade, right heart strain, hypovolaemia and cardiac standstill. It must NOT extend the pause.',
        'Point-of-care blood gas for potassium and glucose.',
        'Get the HISTORY from whoever was present. The cause is usually in the story, not on the monitor.',
      ],
      after_return_of_circulation: {
        the_principle: 'ROSC is the middle of the resuscitation, not the end. Most deaths after ROSC are from brain injury and from the cause not being fixed.',
        priorities: [
          'Airway and controlled ventilation — target NORMOcapnia. Both hypocapnia (cerebral vasoconstriction) and hypercapnia are harmful.',
          'Oxygenation to a target range. Avoid sustained HYPERoxia as well as hypoxia.',
          'Blood pressure and perfusion support.',
          '12-lead ECG and urgent consideration of coronary angiography.',
          'Targeted temperature management and active avoidance of FEVER.',
          'Treat seizures; control glucose; find and fix the precipitant.',
          'Delay neurological prognostication — it is unreliable early, and sedation confounds it.',
        ],
      },
      the_human_part: [
        'Assign roles and a team leader out loud. Leadership quality measurably changes compression fraction.',
        'Family presence during resuscitation is supported by evidence where a staff member can be assigned to them.',
        'Establish whether a valid DNACPR decision or advance directive exists — starting CPR against a valid decision is a harm, and so is withholding it without one.',
        'Debrief the team afterwards. It improves both performance and staff wellbeing.',
      ],
    },
    warnings: [
      'Agonal gasping is NOT breathing. It is the commonest reason CPR is delayed.',
      'Do not spend more than 10 seconds on a pulse check. If in doubt, start compressions.',
      'Minimise interruptions — coronary perfusion pressure collapses the instant compressions stop.',
      'Never shock asystole or PEA. Find the reversible cause instead.',
      'Fine VF can be mistaken for asystole — check leads, gain and connections.',
      'Allow full chest recoil. Leaning is the most common quality failure.',
      'Adrenaline improves ROSC far more than it improves neurologically intact survival. It never justifies pausing compressions.',
      'A hypothermic patient is not dead until warm and dead — continue resuscitation.',
      'In later pregnancy, displace the uterus manually and consider resuscitative hysterotomy early — it is done for the mother.',
      'Avoid hyperoxia and hypocapnia after ROSC, and prevent fever.',
      'Do not prognosticate neurologically in the early hours — it is unreliable and confounded by sedation.',
    ],
    limitations: [
      'Compression depth and rate, shock energies, drug timing and temperature targets are set by the resuscitation council guideline your service follows and are periodically revised. No doses are given here.',
      'This entry describes principles. It is not a substitute for accredited life support training and current local algorithms.',
    ],
    cards: [
      { q: 'Which rhythms are shockable?', a: 'Ventricular fibrillation and pulseless VT. Asystole and PEA are not.' },
      { q: 'Why is agonal breathing dangerous?', a: 'It is a brainstem reflex mistaken for breathing — the commonest cause of delayed CPR.' },
      { q: 'What determines survival most?', a: 'Early high-quality compressions with minimal interruption, early defibrillation, and treating the cause.' },
      { q: 'Why do interruptions matter so much?', a: 'Coronary perfusion pressure builds over successive compressions and collapses when you stop.' },
      { q: 'What does adrenaline actually improve?', a: 'ROSC substantially; neurologically intact survival far less.' },
      { q: 'List the four Hs.', a: 'Hypoxia, hypovolaemia, hyper/hypokalaemia and metabolic causes, hypothermia.' },
      { q: 'List the four Ts.', a: 'Tension pneumothorax, tamponade, toxins, thrombosis (coronary or pulmonary).' },
      { q: 'Uses of waveform capnography in arrest?', a: 'Confirms tube placement, gauges compression quality, and a sudden rise suggests ROSC.' },
      { q: 'Cardiac arrest in late pregnancy — what is added?', a: 'Manual left uterine displacement and early resuscitative hysterotomy, done to save the mother.' },
      { q: 'Key post-ROSC targets?', a: 'Normocapnia, avoid hyperoxia, support perfusion, ECG and angiography, avoid fever, delay prognostication.' },
    ],
    checks: [
      'Compressions started within seconds of recognition',
      'Rhythm identified as shockable or not',
      'Defibrillation delivered immediately if shockable',
      'Interruptions kept to seconds; defibrillator pre-charged',
      'Compressor rotated regularly',
      'Four Hs and four Ts stated out loud',
      'Capnography attached',
      'Uterine displacement if pregnant',
      'DNACPR status established',
      'Post-ROSC targets set and team debriefed',
    ],
  },
];
