/**
 * CASE SCENARIOS — Tetanus and malignant spinal cord compression.
 *
 * Batch 3, part 3.
 */

export default [
  {
    id: 'AS-CASE-0025',
    type: 'case',
    specialty: 'Medicine — Infectious disease',
    teaching_case: true,
    title: 'CASE: A Farmer Who Cannot Open His Mouth Three Weeks After a Foot Injury',
    short: 'Case: generalised tetanus',
    summary:
      'A 46-year-old with trismus, risus sardonicus and spasms triggered by noise. Teaches why the diagnosis is clinical and no test confirms it, why the wound may look trivial or be healed, why metronidazole replaced penicillin, and why surviving tetanus does not confer immunity.',
    domains: ['infectious_disease', 'critical_care', 'emergency_medicine', 'tropical_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case tetanus', 'lockjaw case', 'trismus case', 'risus sardonicus',
      'opisthotonus', 'tetanus immunoglobulin', 'autonomic instability tetanus',
      'spatula test', 'clostridium tetani',
    ],
    terms: [
      'case', 'tetanus', 'clostridium tetani', 'tetanospasmin', 'trismus', 'lockjaw',
      'risus sardonicus', 'opisthotonus', 'spatula test', 'tetanus immunoglobulin',
      'metronidazole', 'magnesium sulphate', 'autonomic dysfunction', 'neonatal tetanus',
      'tetanus toxoid', 'wound debridement', 'strychnine',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '46-year-old farmer brought in unable to open his mouth properly for two days, with stiffness of the neck and back and painful spasms. Three weeks ago he stepped on a nail in the field; the wound healed and he thought nothing of it.',

      section_1_clerking: {
        history:
          'Three weeks ago he stepped on a rusty nail while barefoot. The puncture wound was cleaned with water at home. It scabbed over and healed. Five days ago he noticed his jaw felt stiff. Over the last two days he cannot open his mouth wide enough to eat properly, his neck and back have become rigid, and he has had episodes of painful whole-body stiffening lasting about a minute, triggered by being touched or by a door slamming. HE HAS BEEN FULLY AWAKE AND AWARE THROUGHOUT EVERY SPASM.',
        the_two_features_that_make_the_diagnosis: {
          trismus_with_preserved_consciousness:
            'TRISMUS — inability to open the mouth, "lockjaw" — from sustained masseter contraction. It is the presenting feature in the majority of cases. THE PATIENT IS FULLY CONSCIOUS AND ORIENTATED THROUGHOUT. That combination — severe generalised muscle spasm with a completely clear mind — is almost unique to tetanus, and it also means the experience is agonising and terrifying, which has direct implications for sedation and for how you talk to the patient.',
          stimulus_triggered_spasms:
            'Spasms provoked by TOUCH, LIGHT, NOISE OR MOVEMENT. This is why the patient must be nursed in a QUIET, DARKENED ROOM with minimal handling — the environment is part of the treatment, not a comfort measure.',
        },
        the_incubation_and_onset_periods_which_predict_outcome: {
          incubation_period: 'From injury to first symptom. HIS IS 3 WEEKS.',
          period_of_onset: 'From first symptom (trismus) to first generalised spasm. HIS IS ABOUT 3 DAYS.',
          why_they_matter:
            'SHORTER PERIODS MEAN MORE SEVERE DISEASE AND WORSE PROGNOSIS. An incubation under 7 days, or a period of onset under 48 hours, indicates severe tetanus with high mortality. They are simple bedside numbers that stratify risk before any investigation, and they should be documented explicitly.',
        },
        the_immunisation_history_which_is_the_whole_prevention_story:
          'ASK DIRECTLY AND DO NOT ACCEPT VAGUENESS. He has never had a documented tetanus vaccination as an adult and cannot recall childhood immunisation. IN MOST HIGH-INCOME SETTINGS, TETANUS OCCURS ALMOST ENTIRELY IN THE UNVACCINATED OR INCOMPLETELY VACCINATED — commonly older adults, people who never completed a course, and people who inject drugs. Globally, NEONATAL TETANUS from unclean cord care remains a major cause of newborn death and is entirely preventable by maternal immunisation.',
        the_wound_that_may_not_look_like_anything:
          'HIS WOUND HAS HEALED. THIS IS COMMON AND IT IS THE MAIN REASON THE DIAGNOSIS IS MISSED. In a substantial proportion of cases no wound is found at all. The absence of a visible wound NEVER excludes tetanus. Ask about any injury in the preceding weeks, however trivial, and also about injections, dental procedures, burns, ulcers, surgery and childbirth.',
        vitals: 'BP 178/104 mmHg, FLUCTUATING — recorded at 104/62 twenty minutes earlier. Pulse 128, also fluctuating. Respiratory rate 24. Temperature 37.9. Saturation 95%. Profuse sweating. GCS 15 — FULLY ALERT.',
        the_vitals_that_signal_the_dangerous_phase:
          'THE SWINGING BLOOD PRESSURE AND PULSE ARE AUTONOMIC INSTABILITY. Tetanospasmin also disinhibits the sympathetic nervous system, causing catecholamine surges with labile hypertension, tachycardia, arrhythmia, sweating and hyperpyrexia, alternating with sudden hypotension and bradycardia. IN THE MODERN ERA, WHERE VENTILATION MANAGES THE RESPIRATORY FAILURE, AUTONOMIC INSTABILITY IS A LEADING CAUSE OF DEATH.',
        examination:
          'RISUS SARDONICUS — a fixed grimace with raised eyebrows and drawn-back lips, from sustained facial muscle contraction. Trismus with inter-incisor distance about 15 mm. Rigid abdomen — BOARD-LIKE, and it has been mistaken for a surgical abdomen. NECK AND BACK RIGIDITY with early OPISTHOTONUS — arching of the back with the neck hyperextended. Reflexes brisk. NO sensory loss. FULLY ORIENTATED. Inspect the sole of the foot: a healed puncture scar with no surrounding inflammation.',
        the_spatula_test:
          'A SIMPLE BEDSIDE TEST. Touch the posterior pharyngeal wall with a soft-tipped spatula. A NORMAL person GAGS AND EXPELS the spatula. IN TETANUS the patient REFLEXLY BITES DOWN on it — a masseter spasm. It has been reported as highly sensitive and specific, and it costs nothing. HAVE SUCTION AND AIRWAY EQUIPMENT READY, because it can provoke a spasm.',
      },

      section_2_mechanism: {
        the_organism: 'CLOSTRIDIUM TETANI — a Gram-positive, spore-forming, STRICTLY ANAEROBIC bacillus. Spores are ubiquitous in soil, dust and animal faeces, and are extremely resistant to heat and disinfectants.',
        why_a_puncture_wound_is_the_classic_entry:
          'The spores need an ANAEROBIC environment to germinate. A deep, narrow puncture wound — especially one contaminated with soil, or containing devitalised tissue or a foreign body — provides exactly that. THIS IS WHY A TINY WOUND IS MORE DANGEROUS THAN A LARGE OPEN ONE: a big open laceration is well oxygenated and less favourable to the organism.',
        the_toxin_and_what_it_does: {
          tetanospasmin: 'The germinating bacteria produce TETANOSPASMIN, one of the most potent toxins known.',
          the_journey: 'It binds to peripheral motor nerve terminals and travels by RETROGRADE AXONAL TRANSPORT up the nerve to the spinal cord and brainstem. THE TRANSPORT TIME EXPLAINS THE INCUBATION PERIOD, and explains why the shortest nerves — those to the head and neck — are affected FIRST, giving trismus and facial spasm before generalised rigidity.',
          the_target:
            'In the central nervous system it CLEAVES SYNAPTOBREVIN, a protein required for neurotransmitter vesicle release. It does this specifically in INHIBITORY INTERNEURONS — the cells that release GLYCINE AND GABA to damp down motor neuron firing.',
          the_consequence:
            'INHIBITION IS REMOVED. Motor neurons fire continuously and unopposed, and AGONIST AND ANTAGONIST MUSCLES CONTRACT SIMULTANEOUSLY. That is why the spasms are so violent and so painful, and why they can FRACTURE VERTEBRAE AND TEAR MUSCLES. It is a disease of LOST INHIBITION, not of excess excitation — which is the single idea that makes everything else make sense.',
          why_consciousness_is_preserved: 'The toxin acts on inhibitory interneurons of the motor system and autonomic pathways. IT DOES NOT AFFECT CONSCIOUSNESS. The patient experiences every spasm fully aware.',
          irreversibility: 'ONCE THE TOXIN IS BOUND INSIDE THE NEURON IT CANNOT BE NEUTRALISED. Recovery requires the growth of NEW nerve terminals, which takes WEEKS. THIS IS WHY ANTITOXIN ONLY NEUTRALISES CIRCULATING, UNBOUND TOXIN AND CANNOT REVERSE ESTABLISHED DISEASE — and why it must be given as early as possible.',
        },
        the_forms: 'GENERALISED — the commonest, as here. LOCALISED — rigidity confined to muscles near the wound, with a better prognosis. CEPHALIC — following head or facial injury or otitis media, with cranial nerve palsies, particularly facial. NEONATAL — from unclean umbilical cord care in an unimmunised mother, presenting in the first two weeks with failure to feed, rigidity and spasms, and carrying very high mortality.',
      },

      section_3_differentials: {
        the_framing: 'THE DIAGNOSIS IS CLINICAL. THERE IS NO CONFIRMATORY TEST. Wound culture is positive in a minority and a negative culture excludes nothing. Do not wait for a laboratory result — it will not come.',
        one_tetanus: 'WORKING DIAGNOSIS. Supporting: puncture wound 3 weeks ago, no immunisation, trismus, risus sardonicus, opisthotonus, stimulus-triggered spasms, PRESERVED CONSCIOUSNESS, autonomic instability.',
        two_dystonic_reaction_to_drugs: 'THE MOST IMPORTANT MIMIC because it is instantly reversible. Metoclopramide, prochlorperazine, haloperidol and other dopamine antagonists cause acute dystonia with trismus, neck twisting and OCULOGYRIC CRISIS — sustained upward eye deviation, which does NOT occur in tetanus. TAKE A DRUG HISTORY AND GIVE A TRIAL OF PROCYCLIDINE OR BENZTROPINE if there is any doubt; the response is dramatic and within minutes.',
        three_dental_or_peritonsillar_infection: 'A dental abscess or quinsy causes trismus, but it is PAINFUL AND LOCALISED, with local swelling and fever, and no generalised rigidity or spasms.',
        four_strychnine_poisoning: 'Produces almost identical generalised spasms by blocking glycine receptors — a very similar final mechanism. The distinguishing feature is that BETWEEN SPASMS THE PATIENT IS COMPLETELY RELAXED, whereas in tetanus there is SUSTAINED BACKGROUND RIGIDITY. A history of rodenticide exposure supports it.',
        five_meningitis_or_encephalitis: 'Neck stiffness, but with FEVER, ALTERED CONSCIOUSNESS and no trismus or triggered spasms.',
        six_seizures: 'Consciousness is impaired during a generalised seizure and there is a post-ictal phase. Tetanus spasms occur in a fully alert patient with no post-ictal state.',
        seven_hypocalcaemic_tetany: 'Carpopedal spasm with Chvostek and Trousseau signs, and a low calcium. Check it.',
        eight_stiff_person_syndrome_and_rabies: 'Rare. Rabies causes hydrophobia and aerophobia with progressive encephalitis and is worth considering after animal exposure.',
      },

      section_4_investigations: {
        the_governing_point: 'INVESTIGATIONS DO NOT MAKE THE DIAGNOSIS AND MUST NOT DELAY TREATMENT. They exclude mimics and support management.',
        wound_culture: 'Send it, but expect it to be negative in most cases. A negative culture does not exclude tetanus and a positive one is not required.',
        bloods: 'Full blood count · urea and electrolytes · CALCIUM AND MAGNESIUM, to exclude hypocalcaemic tetany and to guide magnesium therapy · CREATINE KINASE, which is often markedly raised from sustained muscle contraction and warns of RHABDOMYOLYSIS · renal function, for the same reason · blood gas · glucose · blood cultures.',
        toxicology: 'If strychnine or a drug reaction is plausible.',
        the_antibody_test_that_is_occasionally_useful: 'A protective ANTI-TETANUS ANTIBODY LEVEL makes tetanus very unlikely and can help where the picture is atypical. It is not widely or rapidly available and should never delay treatment.',
        monitoring: 'Continuous cardiac monitoring for autonomic instability and arrhythmia. Regular creatine kinase and renal function for rhabdomyolysis.',
      },

      section_5_management: {
        the_five_aims: 'STOP FURTHER TOXIN PRODUCTION · NEUTRALISE UNBOUND TOXIN · CONTROL THE SPASMS · MANAGE THE AUTONOMIC INSTABILITY · AND IMMUNISE, BECAUSE THE DISEASE DOES NOT.',
        a_environment_and_airway_first: {
          environment: 'QUIET, DARKENED ROOM. Minimal handling, and CLUSTER NURSING INTERVENTIONS so the patient is disturbed as few times as possible. Every touch, light and noise can trigger a spasm. This is genuine treatment, and it is often treated as an optional nicety.',
          airway: 'SPASM OF THE LARYNGEAL AND RESPIRATORY MUSCLES CAUSES SUDDEN AIRWAY OBSTRUCTION AND APNOEA, AND IS A LEADING CAUSE OF DEATH. Have airway equipment and suction at the bedside from the moment of suspicion. INTENSIVE CARE INVOLVEMENT FROM THE OUTSET — severe tetanus needs intubation, and often EARLY TRACHEOSTOMY because ventilation is required for weeks. Elective, controlled airway management is far safer than emergency intubation during a laryngeal spasm.',
        },
        b_neutralise_the_toxin: {
          human_tetanus_immunoglobulin: 'HUMAN TETANUS IMMUNOGLOBULIN — a typical therapeutic dose is 3,000 to 6,000 units intramuscularly, with part of the dose infiltrated around the wound where a wound is identified. Where human immunoglobulin is unavailable, equine antitoxin is used with the risk of serum sickness and anaphylaxis.',
          the_limitation_that_must_be_understood:
            'IT NEUTRALISES ONLY CIRCULATING, UNBOUND TOXIN. TOXIN ALREADY INTERNALISED IN NEURONS CANNOT BE REACHED. It therefore prevents the disease getting worse; it does NOT reverse what has happened. GIVE IT AS EARLY AS POSSIBLE — every hour of delay lets more toxin bind irreversibly. And EXPECT NO IMMEDIATE CLINICAL IMPROVEMENT; a patient who does not improve after immunoglobulin has not failed treatment.',
        },
        c_eliminate_the_organism: {
          antibiotic: 'METRONIDAZOLE 500 mg intravenously every 8 hours for 7 to 10 days.',
          why_metronidazole_replaced_penicillin:
            'PENICILLIN IS A GABA ANTAGONIST. Since tetanus is a disease of LOST GABA-mediated inhibition, penicillin theoretically worsens the very mechanism causing the spasms, and comparative data favoured metronidazole with better outcomes. METRONIDAZOLE IS NOW PREFERRED. This is a good example of a mechanism-based drug choice, and it is a frequently examined point.',
          wound_care: 'DEBRIDE THE WOUND — remove foreign material and devitalised tissue to eliminate the anaerobic environment. DO IT AFTER GIVING IMMUNOGLOBULIN, ideally at least an hour later, because surgical manipulation can release a further bolus of toxin into the circulation. Where the wound has healed, as here, there may be nothing to debride.',
        },
        d_control_the_spasms: {
          benzodiazepines: 'THE MAINSTAY. DIAZEPAM or MIDAZOLAM by infusion, titrated to control spasms while maintaining ventilation. VERY LARGE DOSES ARE OFTEN NEEDED — far beyond usual sedation ranges — because they are restoring the GABA-mediated inhibition the toxin has abolished. They work at exactly the point the disease has broken, which is why they are so effective.',
          magnesium_sulphate: 'MAGNESIUM SULPHATE infusion reduces spasm and helps control autonomic instability by inhibiting catecholamine release and acting at the neuromuscular junction. Monitor deep tendon reflexes, respiratory rate and magnesium levels for toxicity, and have CALCIUM GLUCONATE available as the antidote.',
          neuromuscular_blockade: 'If spasms remain uncontrolled despite maximal sedation, a NON-DEPOLARISING neuromuscular blocking agent is used, which mandates intubation and ventilation. ENSURE ADEQUATE SEDATION AND ANALGESIA — a paralysed, under-sedated tetanus patient is fully conscious and in agony, and cannot signal it. This is one of the most serious avoidable harms in the whole disease.',
          avoid_suxamethonium: 'As in any denervation-like state with prolonged immobility, it risks hyperkalaemic cardiac arrest.',
        },
        e_manage_the_autonomic_instability: 'Magnesium sulphate. Short-acting agents such as LABETALOL or ESMOLOL for hypertensive surges — AVOID LONG-ACTING BETA BLOCKERS ALONE, particularly propranolol, which has been associated with sudden death in tetanus, partly through unopposed alpha effects and loss of compensatory tachycardia. Adequate sedation and analgesia reduce surges. Morphine infusions are widely used. Treat bradycardia and be prepared for asystole; some patients need pacing.',
        f_supportive_care_over_weeks: 'NUTRITION — the metabolic demand is enormous and swallowing is unsafe; enteral feeding by nasogastric tube. Thromboprophylaxis. Pressure area care. Bowel and bladder care. Physiotherapy. RHABDOMYOLYSIS — monitor creatine kinase and renal function and hydrate. Watch for aspiration pneumonia, ventilator-associated pneumonia and line infection. Prevent and treat pressure injury, contractures and fractures from spasms.',
        g_the_step_that_is_forgotten_because_the_patient_survived: {
          the_rule:
            'HAVING TETANUS DOES NOT PRODUCE IMMUNITY. The amount of toxin needed to cause the disease is far below the amount needed to provoke a protective antibody response. A SURVIVOR IS EXACTLY AS SUSCEPTIBLE AS BEFORE AND CAN GET IT AGAIN.',
          the_action: 'GIVE TETANUS TOXOID VACCINE DURING THE ADMISSION — at a DIFFERENT SITE from the immunoglobulin — and COMPLETE A FULL PRIMARY COURSE of three doses at the correct intervals, with boosters thereafter. DOCUMENT IT AND ARRANGE THE FOLLOW-UP DOSES, because they are the ones that get lost.',
        },
        h_prevention_which_is_the_real_answer: {
          wound_management: 'For any wound, assess IMMUNISATION STATUS and WOUND TYPE. TETANUS-PRONE WOUNDS include puncture wounds, wounds contaminated with soil or manure, wounds with devitalised tissue or foreign bodies, burns, and any wound presenting after 6 hours. Give a TOXOID BOOSTER if immunisation is incomplete or the last dose was long ago, and ADD TETANUS IMMUNOGLOBULIN for high-risk wounds in inadequately immunised patients. THOROUGH WOUND CLEANING AND DEBRIDEMENT IS ITSELF PREVENTION.',
          public_health: 'Childhood immunisation with boosters. MATERNAL IMMUNISATION IN PREGNANCY prevents NEONATAL TETANUS, together with clean delivery and clean cord care — the combination that has eliminated neonatal tetanus from most countries and remains the priority where it has not.',
        },
      },

      section_6_teaching_points: {
        bonus_1_it_is_a_disease_of_lost_inhibition:
          'Tetanospasmin cleaves synaptobrevin in INHIBITORY interneurons, abolishing glycine and GABA release. Motor neurons fire unopposed and agonists and antagonists contract together — hence violent spasms that fracture vertebrae. Every treatment follows from this: benzodiazepines restore GABA inhibition, and penicillin, a GABA antagonist, would worsen it.',
        bonus_2_metronidazole_not_penicillin:
          'Penicillin antagonises GABA, the exact transmitter the toxin has already disabled, and comparative data favoured metronidazole. It is a clean example of choosing a drug from mechanism rather than habit.',
        bonus_3_the_incubation_and_onset_periods_predict_death:
          'Incubation is injury to first symptom; period of onset is first symptom to first generalised spasm. Under 7 days and under 48 hours respectively mean severe disease. Two numbers from the history stratify risk before any test.',
        bonus_4_antitoxin_cannot_reverse_bound_toxin:
          'Once internalised, the toxin is unreachable and recovery needs new nerve terminals over weeks. Immunoglobulin neutralises only circulating toxin — give it as early as possible, and do not interpret the absence of immediate improvement as treatment failure.',
        bonus_5_surviving_tetanus_confers_no_immunity:
          'The disease-causing dose of toxin is far below the immunising dose. Vaccinate the survivor during the admission, at a different site from the immunoglobulin, and complete the primary course. This is the step most often omitted, precisely because the patient recovered.',
        bonus_6_the_spatula_test:
          'Touch the posterior pharynx — a normal patient gags and expels the spatula; a tetanus patient bites down. Highly sensitive and specific, costs nothing, and needs only suction and airway equipment ready in case it provokes a spasm.',
        trap_1: 'A HEALED OR ABSENT WOUND DOES NOT EXCLUDE TETANUS. In many cases no wound is ever found.',
        trap_2: 'Exclude a DRUG-INDUCED DYSTONIC REACTION — it mimics tetanus and reverses in minutes with procyclidine. Look for oculogyric crisis, which tetanus does not cause.',
        trap_3: 'The patient is FULLY CONSCIOUS throughout. A paralysed, under-sedated patient is in agony and cannot tell you.',
        trap_4: 'Autonomic instability is now a leading cause of death — monitor continuously and avoid propranolol alone.',
        trap_5: 'Give the immunoglobulin BEFORE debriding — surgery can release a further bolus of toxin.',
        trap_6: 'Nurse in a quiet, darkened room with clustered care. The environment is treatment.',
        trap_7: 'Expect weeks of ventilation — plan for early tracheostomy rather than repeated crises.',
        one_line_summary: 'Generalised tetanus three weeks after a puncture wound. Quiet dark room and secure the airway early, immunoglobulin now, metronidazole not penicillin, benzodiazepines and magnesium for the spasms and autonomic swings — and vaccinate him before he goes home, because surviving it protects him from nothing.',
      },
    },
    warnings: [
      'THE DIAGNOSIS IS CLINICAL — there is no confirmatory test, and a negative wound culture excludes nothing.',
      'A HEALED OR ABSENT WOUND DOES NOT EXCLUDE TETANUS — in many cases no wound is ever found.',
      'EXCLUDE A DRUG-INDUCED DYSTONIC REACTION — it mimics tetanus and reverses in minutes. Oculogyric crisis does not occur in tetanus.',
      'Laryngeal spasm causes sudden airway obstruction — have airway equipment at the bedside and involve intensive care from the outset.',
      'GIVE TETANUS IMMUNOGLOBULIN EARLY — it neutralises only unbound toxin and cannot reverse established disease.',
      'Give immunoglobulin BEFORE wound debridement — surgery can release a further bolus of toxin.',
      'USE METRONIDAZOLE, NOT PENICILLIN — penicillin is a GABA antagonist and worsens the underlying mechanism.',
      'The patient is FULLY CONSCIOUS throughout every spasm. A paralysed, under-sedated patient is in agony and cannot signal it.',
      'Autonomic instability is a leading cause of death — monitor continuously and avoid propranolol alone.',
      'Nurse in a QUIET, DARKENED room with clustered care — the environment is treatment, not comfort.',
      'SURVIVING TETANUS CONFERS NO IMMUNITY. Vaccinate during the admission, at a different site from the immunoglobulin, and complete the primary course.',
      'Monitor creatine kinase and renal function — sustained spasm causes rhabdomyolysis.',
      'Expect weeks of ventilation — plan early tracheostomy rather than repeated emergencies.',
      'Doses here are teaching examples. Follow WHO and national guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Immunoglobulin dose, sedation regimens and autonomic management vary between services and drug availability.',
      'Neonatal tetanus differs substantially in presentation and management and is not covered in detail here.',
    ],
    cards: [
      { q: 'What is the mechanism of tetanospasmin?', a: 'It cleaves synaptobrevin in inhibitory interneurons, abolishing glycine and GABA release so motor neurons fire unopposed.' },
      { q: 'Why is consciousness preserved?', a: 'The toxin acts on inhibitory motor and autonomic pathways, not on consciousness — the patient experiences every spasm fully aware.' },
      { q: 'Define the incubation and onset periods and their significance.', a: 'Injury to first symptom, and first symptom to first generalised spasm. Under 7 days and under 48 hours mean severe disease.' },
      { q: 'Why metronidazole rather than penicillin?', a: 'Penicillin is a GABA antagonist and worsens the mechanism the toxin has already broken.' },
      { q: 'What can tetanus immunoglobulin achieve?', a: 'It neutralises circulating unbound toxin only — it cannot reverse toxin already internalised.' },
      { q: 'What is the spatula test?', a: 'Touching the posterior pharynx — a normal patient gags, a tetanus patient bites down on the spatula.' },
      { q: 'Why does a small puncture wound carry higher risk than a large laceration?', a: 'Clostridium tetani is a strict anaerobe — a deep narrow wound provides the anaerobic environment spores need.' },
      { q: 'Does surviving tetanus confer immunity?', a: 'No — the disease-causing dose is far below the immunising dose. Vaccinate the survivor.' },
      { q: 'Name three signs of generalised tetanus.', a: 'Trismus, risus sardonicus and opisthotonus, with stimulus-triggered spasms.' },
      { q: 'What is the leading cause of death in the modern era?', a: 'Autonomic instability, since ventilation manages the respiratory failure.' },
      { q: 'How is strychnine poisoning distinguished?', a: 'Between spasms the patient is completely relaxed; in tetanus there is sustained background rigidity.' },
      { q: 'Which beta blocker is specifically avoided?', a: 'Propranolol alone — it has been associated with sudden death in tetanus.' },
    ],
    checks: [
      'Drug-induced dystonic reaction excluded',
      'Incubation period and period of onset documented',
      'Immunisation history taken explicitly',
      'Quiet darkened room with clustered nursing arranged',
      'Airway equipment at the bedside and intensive care involved',
      'Tetanus immunoglobulin given as early as possible',
      'Wound debrided AFTER immunoglobulin',
      'Metronidazole started, penicillin avoided',
      'Benzodiazepine infusion titrated to spasm control',
      'Magnesium sulphate considered with reflex and level monitoring',
      'Adequate sedation confirmed if neuromuscular blockade used',
      'Continuous cardiac monitoring for autonomic instability',
      'Creatine kinase and renal function monitored',
      'TETANUS TOXOID GIVEN during admission at a different site, and the primary course arranged',
    ],
    related: ['tetanus_and_wound_prophylaxis'],
  },

  {
    id: 'AS-CASE-0026',
    type: 'case',
    specialty: 'Medicine — Oncology',
    teaching_case: true,
    title: 'CASE: Back Pain, Then Numb Legs — A Known Prostate Cancer Patient',
    short: 'Case: malignant spinal cord compression',
    summary:
      'A 68-year-old with known prostate cancer, worsening back pain and 24 hours of leg weakness. Teaches why the MRI is of the WHOLE spine, why steroids go in before the scan, and why the neurological state at the moment you treat is the best the patient will ever be.',
    domains: ['oncology', 'neurosurgery', 'orthopaedics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case spinal cord compression', 'mscc case', 'malignant cord compression',
      'metastatic spinal cord compression', 'cauda equina malignant', 'whole spine mri',
      'dexamethasone cord compression', 'radiotherapy cord compression',
    ],
    terms: [
      'case', 'spinal cord compression', 'metastatic', 'prostate cancer', 'sclerotic metastases',
      'whole spine mri', 'dexamethasone', 'radiotherapy', 'decompressive surgery',
      'cauda equina syndrome', 'conus medullaris', 'sensory level', 'bisphosphonate',
      'hypercalcaemia', 'psa', 'performance status',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '68-year-old man with metastatic prostate cancer, six weeks of worsening mid-back pain now waking him at night, and 24 hours of increasing weakness and numbness in both legs with difficulty starting to pass urine.',

      section_1_clerking: {
        the_governing_principle:
          'THE NEUROLOGICAL FUNCTION A PATIENT HAS AT THE MOMENT YOU TREAT THEM IS, ON AVERAGE, THE BEST THEY WILL EVER HAVE AGAIN. Treatment PRESERVES function far more reliably than it RESTORES it. A patient who is walking when treated usually keeps walking; a patient who is paraplegic when treated usually stays paraplegic. THAT IS THE ENTIRE URGENCY OF THIS DISEASE, and it is why hours matter.',
        history:
          'Six weeks of progressive thoracic back pain. INITIALLY MECHANICAL, now CONSTANT, WORSE AT NIGHT AND WAKING HIM FROM SLEEP, and WORSE ON COUGHING, SNEEZING AND STRAINING. For 24 hours his legs have felt heavy and numb from the mid-abdomen down; today he has needed to hold furniture to walk. He has had difficulty starting to pass urine since this morning and thinks his bladder feels full.',
        the_red_flag_pattern_in_back_pain: {
          the_features: 'PROGRESSIVE, unrelenting pain · NOCTURNAL pain that WAKES the patient · pain worse on COUGHING, SNEEZING OR STRAINING, which raises intraspinal pressure · THORACIC pain, which is less commonly mechanical · pain in a patient with KNOWN CANCER · any associated neurological symptom or sphincter disturbance.',
          the_timing_that_is_repeatedly_missed:
            'BACK PAIN PRECEDES NEUROLOGICAL SIGNS BY WEEKS TO MONTHS IN MOST PATIENTS. HIS PAIN STARTED SIX WEEKS AGO. That was the window in which the diagnosis could have been made with the patient still walking normally. NEW OR CHANGED BACK PAIN IN A PATIENT WITH KNOWN CANCER WARRANTS URGENT IMAGING BEFORE ANY NEUROLOGICAL DEFICIT APPEARS — waiting for weakness is waiting too long.',
        },
        the_sphincter_symptoms:
          'Hesitancy, poor stream, incomplete emptying, and eventually PAINLESS RETENTION WITH OVERFLOW INCONTINENCE. ASK EVERY PATIENT WITH BACK PAIN ABOUT BLADDER AND BOWEL FUNCTION AND ABOUT SADDLE SENSATION — "when you wipe, does it feel normal?" These symptoms are late, they are missed because nobody asks, and their appearance signals that time has almost run out.',
        past_medical_history: 'Prostate adenocarcinoma diagnosed 3 years ago with bone metastases. On androgen deprivation therapy. Hypertension. Type 2 diabetes — RELEVANT, because high-dose dexamethasone is about to be given.',
        vitals: 'BP 142/82 mmHg. Pulse 84. Respiratory rate 16. Temperature 36.8. Saturation 97%. Glucose 8.9. BLADDER SCAN: 620 mL residual — HE IS IN RETENTION AND DOES NOT FULLY REALISE IT.',
        examination: {
          motor: 'Symmetrical weakness of both legs — hip flexion 3/5, knee extension 4/5, ankle dorsiflexion 3/5. He can stand but cannot walk unaided.',
          tone_and_reflexes: 'INCREASED TONE, BRISK KNEE AND ANKLE REFLEXES, and UPGOING PLANTARS — an UPPER MOTOR NEURONE pattern, indicating a lesion at or above the conus. In acute severe compression, SPINAL SHOCK can produce flaccidity and areflexia initially, which mimics a lower motor neurone lesion and must not mislead you.',
          sensory:
            'A SENSORY LEVEL AT T10 — sensation is reduced below the umbilicus and normal above it. THE SENSORY LEVEL IS THE SINGLE MOST USEFUL LOCALISING SIGN IN THE EXAMINATION. Test with a pin or cold object starting at the FEET and moving UPWARDS, marking where sensation changes — ascending is more reliable than descending because patients detect the transition to normal more crisply.',
          the_critical_caveat_about_the_level:
            'THE CLINICAL SENSORY LEVEL DOES NOT RELIABLY INDICATE THE LEVEL OF THE COMPRESSING LESION. The bony metastasis is often SEVERAL VERTEBRAL LEVELS HIGHER than the sensory level suggests. THIS IS ONE OF TWO REASONS THE WHOLE SPINE IS IMAGED, NOT JUST THE SUSPECTED SEGMENT.',
          saddle_and_anal_tone: 'SADDLE SENSATION and ANAL TONE MUST BE EXAMINED AND DOCUMENTED. Reduced perianal sensation or lax anal tone indicates cauda equina or conus involvement and is a surgical emergency. Omitting this examination — or documenting "PR not done" without reason — is indefensible in a patient with these symptoms.',
          spine: 'Localised tenderness over the T8 to T10 spinous processes.',
        },
      },

      section_2_mechanism: {
        how_it_happens: 'Most malignant cord compression arises from metastasis to the VERTEBRAL BODY, which then expands backwards into the epidural space and compresses the cord — rather than from tumour arising within the cord itself. Less often it results from vertebral collapse driving bone fragments backwards, or from direct extension of a paravertebral tumour through the intervertebral foramen.',
        why_the_vertebral_body: 'It has a rich, slow-flowing venous marrow circulation — including BATSON VENOUS PLEXUS, a valveless system connecting pelvic veins directly to vertebral veins, which is why PROSTATE and other pelvic tumours seed the spine so readily and why raising intra-abdominal pressure can promote spread.',
        the_two_phases_of_injury: {
          phase_1_reversible: 'Compression obstructs the EPIDURAL VENOUS PLEXUS, causing VASOGENIC OEDEMA of the cord. This impairs conduction but the cord is still viable — AND IT IS THIS OEDEMA THAT DEXAMETHASONE REDUCES, which is why steroids can improve function within hours.',
          phase_2_irreversible: 'Continued compression obstructs ARTERIAL supply, causing CORD INFARCTION. Infarcted cord does not recover. THE TRANSITION FROM PHASE 1 TO PHASE 2 IS WHY HOURS MATTER, and why the deficit at the time of treatment predicts the final outcome.',
        },
        the_common_primaries: 'PROSTATE, BREAST and LUNG account for the majority. Also myeloma, lymphoma, renal and thyroid. IN AROUND A FIFTH OF PATIENTS, CORD COMPRESSION IS THE FIRST PRESENTATION OF AN UNDIAGNOSED CANCER — so the absence of a known malignancy does not exclude it.',
        the_level_distribution: 'THORACIC spine about 60 to 70%, LUMBOSACRAL about 20 to 30%, CERVICAL about 10%. AND CRUCIALLY, ROUGHLY A THIRD OF PATIENTS HAVE MULTIPLE LEVELS OF COMPRESSION — THE SECOND REASON THE WHOLE SPINE IS IMAGED. Treating one level and missing another higher up is a well-described disaster.',
      },

      section_3_differentials: {
        one_malignant_spinal_cord_compression: 'WORKING DIAGNOSIS. Supporting: known metastatic prostate cancer, progressive nocturnal thoracic back pain, symmetrical leg weakness with upper motor neurone signs, a sensory level, and urinary retention.',
        two_cauda_equina_syndrome: 'Compression BELOW the cord termination at about L1-L2, affecting the nerve roots. Gives a LOWER MOTOR NEURONE pattern — flaccid weakness, ABSENT reflexes, downgoing plantars — with SADDLE ANAESTHESIA and sphincter disturbance. Also a surgical emergency. The MRI distinguishes them, and the management urgency is the same.',
        three_pathological_vertebral_fracture: 'Sudden severe pain with or without neurological deficit, often after minimal trauma in metastatic bone disease. May coexist.',
        four_epidural_abscess: 'Fever, raised inflammatory markers, and risk factors such as intravenous drug use, diabetes, bacteraemia or recent spinal procedure. Also compresses the cord and also needs urgent MRI and decompression — a different treatment but the same pathway.',
        five_spinal_haematoma: 'Consider in anticoagulated patients or after spinal procedures. Sudden onset.',
        six_transverse_myelitis_or_demyelination: 'Inflammatory, typically over hours to days, usually without the preceding weeks of bone pain.',
        seven_leptomeningeal_disease_or_intramedullary_metastasis: 'Less common patterns of malignant spinal involvement, distinguished on MRI.',
        eight_degenerative_or_mechanical_causes: 'Common in this age group, but they do NOT cause nocturnal waking pain, progressive symmetrical weakness, a sensory level or sphincter disturbance — those features take the diagnosis out of the degenerative category entirely.',
      },

      section_4_investigations: {
        mri_of_the_whole_spine: {
          the_rule: 'URGENT MRI OF THE WHOLE SPINE — CERVICAL, THORACIC AND LUMBOSACRAL — WITHIN 24 HOURS OF SUSPICION, AND IMMEDIATELY IF THERE IS A NEUROLOGICAL DEFICIT.',
          the_two_reasons_the_whole_spine_is_imaged: '1. ROUGHLY A THIRD OF PATIENTS HAVE COMPRESSION AT MORE THAN ONE LEVEL, and treating one while missing another is a recognised catastrophe. 2. THE CLINICAL SENSORY LEVEL DOES NOT RELIABLY PREDICT THE ANATOMICAL LEVEL — the lesion is often higher than the examination suggests. IMAGING ONLY THE SEGMENT YOU SUSPECT IS THE COMMONEST TECHNICAL ERROR IN THIS DIAGNOSIS.',
          what_it_shows: 'Vertebral metastases with epidural soft tissue extension, the degree of cord compression, cord signal change indicating oedema or infarction, and any additional levels.',
          if_mri_is_contraindicated_or_unavailable: 'CT MYELOGRAPHY, or CT with reconstruction, as a second best. A plain radiograph is NOT adequate — it may be normal in the presence of significant epidural disease, and a normal film must never be used to exclude compression. DO NOT LET THE ABSENCE OF LOCAL MRI DELAY STEROIDS OR THE REFERRAL; transfer if necessary.',
        },
        bloods: 'Full blood count · urea and electrolytes · CORRECTED CALCIUM, because HYPERCALCAEMIA OF MALIGNANCY commonly coexists and causes confusion, constipation and dehydration · liver function · ALKALINE PHOSPHATASE, raised with bone metastases · PSA in prostate cancer · clotting, in case of surgery · glucose and HbA1c before high-dose steroids · group and save.',
        staging_and_tissue: 'CT chest, abdomen and pelvis to stage. IF THERE IS NO KNOWN PRIMARY, A TISSUE DIAGNOSIS IS ESSENTIAL — biopsy of the spinal lesion or a more accessible site — because treatment differs completely by tumour type, and lymphoma or germ cell tumour would be treated quite differently from carcinoma.',
        bladder: 'BLADDER SCAN. Retention with overflow is easily missed because it is PAINLESS when the sensory supply is impaired. Catheterise if the residual is significant.',
      },

      section_5_management: {
        a_dexamethasone_now: {
          the_rule: 'GIVE DEXAMETHASONE IMMEDIATELY ON CLINICAL SUSPICION — BEFORE THE MRI, NOT AFTER IT. The scan may take hours to arrange; the oedema is progressing throughout.',
          dose: 'DEXAMETHASONE 16 mg orally or intravenously as a loading dose, then 16 mg daily (often 8 mg twice daily, with the second dose given before the evening to reduce insomnia), continued until definitive treatment and then TAPERED.',
          why_it_works: 'It reduces the VASOGENIC OEDEMA around the compressed cord, improving conduction and often improving power within hours. It treats phase 1 injury — which is why it must reach the patient before phase 2 begins.',
          the_essential_co_prescriptions_that_get_forgotten: 'GASTRIC PROTECTION with a proton pump inhibitor. BLOOD GLUCOSE MONITORING — high-dose dexamethasone frequently causes marked hyperglycaemia and he is already diabetic, so he may need insulin. Warn about INSOMNIA, agitation and mood change. Plan the TAPER, because abrupt cessation after prolonged use causes adrenal insufficiency.',
          the_one_exception: 'IF LYMPHOMA IS A POSSIBLE DIAGNOSIS AND NO TISSUE HAS BEEN OBTAINED, DISCUSS WITH ONCOLOGY BEFORE GIVING STEROIDS. Steroids are lympholytic and can destroy the diagnostic tissue, leaving a patient with an unclassifiable and therefore untreatable tumour. In a patient with a known non-lymphoid primary, as here, give the steroid without hesitation.',
        },
        b_immobilise_and_refer_in_parallel: {
          flat_bed_rest: 'NURSE FLAT WITH LOG-ROLLING until spinal stability has been assessed. An unstable metastatic vertebra can displace and complete the injury. Neurological observations at least hourly.',
          the_referrals: 'CONTACT THE ACUTE ONCOLOGY OR MSCC COORDINATOR SERVICE IMMEDIATELY — most services have a defined 24-hour pathway. REFER TO CLINICAL ONCOLOGY AND TO SPINAL SURGERY IN PARALLEL, not sequentially. The decision between surgery and radiotherapy is made jointly, and waiting for one to answer before contacting the other loses hours.',
        },
        c_the_definitive_treatment_decision: {
          surgery_decompression_and_stabilisation: {
            when: 'Considered for: SPINAL INSTABILITY or vertebral collapse with bony retropulsion · a SINGLE level of compression · GOOD PERFORMANCE STATUS AND REASONABLE LIFE EXPECTANCY, generally taken as more than 3 months · RADIORESISTANT tumours such as renal cell carcinoma, melanoma and sarcoma · progression DESPITE previous radiotherapy to that site · or where a TISSUE DIAGNOSIS is needed.',
            the_evidence: 'A randomised trial (Patchell) showed that DECOMPRESSIVE SURGERY FOLLOWED BY RADIOTHERAPY produced better ambulation outcomes than radiotherapy alone in selected patients with a single level of compression and good performance status. SELECTION IS EVERYTHING — the result does not generalise to frail patients with multilevel disease.',
          },
          radiotherapy: 'The mainstay for most patients — multilevel disease, radiosensitive tumours (and PROSTATE, breast, myeloma and lymphoma are radiosensitive), poorer performance status, or where surgery is not appropriate. Delivered urgently, typically within 24 hours of diagnosis.',
          systemic_therapy: 'For highly chemosensitive or hormone-sensitive tumours, systemic treatment contributes — but it is NOT a substitute for urgent local treatment when the cord is compressed.',
          his_situation: 'Prostate cancer is radiosensitive and he has known widespread metastatic disease. He is likely to be treated with urgent radiotherapy, with surgery considered if imaging shows instability or a single level with good functional status. THE DECISION IS MULTIDISCIPLINARY AND URGENT.',
        },
        d_the_supportive_care_that_determines_quality_of_life: {
          pain: 'Often severe and has both nociceptive bone and neuropathic components. Use the analgesic ladder with strong opioids, ADD A NEUROPATHIC AGENT such as gabapentin or pregabalin, and consider bisphosphonates and radiotherapy, both of which relieve bone pain. Prescribe a LAXATIVE with every opioid — and note that constipation is compounded here by immobility, opioids, and any hypercalcaemia.',
          bladder_and_bowel: 'Catheterise for retention. Establish a bowel regimen early — neurogenic bowel is distressing, and it is neglected while attention is on the legs.',
          skin_and_thrombosis: 'Pressure-relieving mattress and regular repositioning — an immobile patient with sensory loss develops pressure injury quickly. THROMBOPROPHYLAXIS: cancer plus immobility plus paresis is among the highest venous thromboembolism risks in medicine.',
          bone_targeted_therapy: 'BISPHOSPHONATES or DENOSUMAB reduce skeletal-related events in metastatic bone disease and help pain. Check dental status before starting, because of osteonecrosis of the jaw, and correct hypocalcaemia and vitamin D deficiency first.',
          rehabilitation: 'Early physiotherapy and occupational therapy, wheelchair assessment, home adaptation and discharge planning. Involve the specialist palliative care team EARLY — this is for symptom control and support, not only for end-of-life care, and early involvement improves both quality of life and, in some cancers, survival.',
          the_conversation: 'BE HONEST ABOUT PROGNOSIS FOR WALKING. If he is not walking at the time of treatment, the chance of regaining independent walking is low, and he and his family need to know that as they plan. Discuss goals of care, preferred place of care, and advance planning, sensitively and without evasion.',
        },
      },

      section_6_teaching_points: {
        bonus_1_function_at_treatment_predicts_function_forever:
          'Treatment PRESERVES neurology far more reliably than it RESTORES it. Ambulant at treatment usually means ambulant afterwards; paraplegic at treatment usually means paraplegic afterwards. This single fact is the reason the pathway is measured in hours.',
        bonus_2_image_the_whole_spine:
          'About a third of patients have compression at more than one level, and the clinical sensory level does not reliably predict the anatomical level — the lesion is often higher. Imaging only the segment you suspect is the commonest technical error in this diagnosis.',
        bonus_3_steroids_before_the_scan:
          'Dexamethasone treats the vasogenic oedema of the reversible phase. The scan takes hours to arrange and the oedema progresses throughout. The one exception is possible lymphoma without tissue — steroids can destroy the diagnostic material, so discuss first.',
        bonus_4_the_pain_comes_weeks_before_the_weakness:
          'Back pain precedes neurological signs by weeks to months in most patients. New or changed back pain in a patient with known cancer warrants urgent imaging BEFORE any deficit appears. Waiting for weakness is waiting too long, and it is the systemic failure that produces most paraplegic presentations.',
        bonus_5_spinal_shock_can_masquerade_as_a_lower_motor_neurone_lesion:
          'Acute severe cord compression can present with flaccid weakness and absent reflexes, mimicking cauda equina or a peripheral cause. Do not let flaccidity persuade you the cord is not involved.',
        bonus_6_a_fifth_have_no_known_cancer:
          'In roughly 20% of patients, cord compression is the FIRST presentation of malignancy. The absence of a cancer history does not exclude it — and in that group a tissue diagnosis becomes essential before systemic treatment.',
        trap_1: 'ASK ABOUT BLADDER, BOWEL AND SADDLE SENSATION, and EXAMINE anal tone. These are missed because nobody asks and nobody examines.',
        trap_2: 'A NORMAL PLAIN RADIOGRAPH DOES NOT EXCLUDE COMPRESSION. Only MRI answers the question.',
        trap_3: 'Refer to oncology and spinal surgery IN PARALLEL, not one after the other.',
        trap_4: 'Check the CALCIUM — hypercalcaemia of malignancy commonly coexists and is separately treatable.',
        trap_5: 'Prescribe gastric protection, monitor glucose and plan the steroid taper — dexamethasone complications are predictable and preventable.',
        trap_6: 'Thromboprophylaxis is essential — cancer plus immobility plus paresis is among the highest risks in medicine.',
        trap_7: 'Nurse flat with log-rolling until stability is assessed.',
        one_line_summary: 'Malignant spinal cord compression from prostate cancer. Dexamethasone 16 mg before the scan, MRI of the WHOLE spine within hours, oncology and spinal surgery referred in parallel, flat bed rest and catheter — and remember his legs will probably never be better than they are tonight.',
      },
    },
    warnings: [
      'THE NEUROLOGY AT THE TIME OF TREATMENT PREDICTS THE FINAL OUTCOME — treatment preserves function far more reliably than it restores it.',
      'GIVE DEXAMETHASONE 16 mg IMMEDIATELY ON SUSPICION — before the MRI, not after.',
      'IMAGE THE WHOLE SPINE — a third have multiple levels, and the sensory level does not predict the anatomical level.',
      'A NORMAL PLAIN RADIOGRAPH DOES NOT EXCLUDE CORD COMPRESSION.',
      'New or changed back pain in a patient with cancer needs urgent imaging BEFORE any neurological deficit appears.',
      'ASK about bladder, bowel and saddle sensation, and EXAMINE anal tone. Retention with overflow is painless and easily missed.',
      'If LYMPHOMA is possible and no tissue has been obtained, discuss before giving steroids — they can destroy the diagnostic material.',
      'Spinal shock can cause flaccid areflexic weakness that mimics a lower motor neurone lesion.',
      'Around 20% of cases are the FIRST presentation of malignancy — no cancer history does not exclude it.',
      'Refer to oncology and spinal surgery IN PARALLEL, not sequentially.',
      'Nurse FLAT with log-rolling until spinal stability is assessed.',
      'Check CORRECTED CALCIUM — hypercalcaemia of malignancy commonly coexists.',
      'Prescribe gastric protection, monitor glucose, and plan the dexamethasone taper.',
      'Thromboprophylaxis is essential — cancer plus immobility plus paresis is among the highest VTE risks in medicine.',
      'Doses here are teaching examples. Follow your local acute oncology pathway.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Steroid dosing, surgical selection criteria and radiotherapy fractionation vary between services.',
      'The surgery-versus-radiotherapy decision is multidisciplinary and depends on tumour type, stability, performance status and prognosis.',
    ],
    cards: [
      { q: 'What determines the final neurological outcome?', a: 'The function present at the time of treatment — treatment preserves far better than it restores.' },
      { q: 'Why image the WHOLE spine?', a: 'About a third have multiple levels, and the clinical sensory level does not reliably predict the anatomical level.' },
      { q: 'When is dexamethasone given?', a: 'Immediately on suspicion, before the MRI — 16 mg loading then 16 mg daily.' },
      { q: 'What is the one exception to giving steroids first?', a: 'Possible lymphoma with no tissue diagnosis — steroids can destroy the diagnostic material.' },
      { q: 'How does dexamethasone help?', a: 'It reduces vasogenic oedema around the cord — the reversible phase of injury.' },
      { q: 'Describe the two phases of cord injury.', a: 'Venous obstruction causing reversible oedema, then arterial obstruction causing irreversible infarction.' },
      { q: 'How long does back pain usually precede weakness?', a: 'Weeks to months — which is the window in which the diagnosis should be made.' },
      { q: 'Which primaries most commonly cause it?', a: 'Prostate, breast and lung, then myeloma, lymphoma, renal and thyroid.' },
      { q: 'How does cauda equina syndrome differ on examination?', a: 'Lower motor neurone pattern — flaccid, areflexic, downgoing plantars, with saddle anaesthesia.' },
      { q: 'What proportion present without a known cancer?', a: 'Roughly 20% — cord compression is the first presentation of malignancy.' },
      { q: 'Why is Batson plexus relevant?', a: 'A valveless venous system connecting pelvic to vertebral veins, explaining why prostate cancer seeds the spine.' },
      { q: 'What did the Patchell trial show?', a: 'Decompressive surgery followed by radiotherapy improved ambulation over radiotherapy alone in selected single-level patients with good performance status.' },
    ],
    checks: [
      'Dexamethasone given before imaging',
      'Lymphoma considered before steroids if no tissue diagnosis',
      'MRI of the WHOLE spine requested urgently',
      'Sensory level, saddle sensation and anal tone examined and documented',
      'Bladder scanned and catheterised if in retention',
      'Nursed flat with log-rolling until stability assessed',
      'Hourly neurological observations',
      'Acute oncology or MSCC coordinator contacted',
      'Oncology and spinal surgery referred in parallel',
      'Corrected calcium checked',
      'Gastric protection and glucose monitoring with steroids',
      'Thromboprophylaxis prescribed',
      'Bone-targeted therapy considered with dental check',
      'Honest prognosis for walking discussed and palliative care involved early',
    ],
    related: ['oncological_emergencies_recognition_and_first_actions'],
  },
];
