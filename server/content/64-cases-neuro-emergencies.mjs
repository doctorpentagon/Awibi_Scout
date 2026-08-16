/**
 * CASE SCENARIOS — Medicine: Neurology emergencies.
 *
 * Batch 2, part 2. Status epilepticus, bacterial meningitis, Guillain-Barre.
 */

export default [
  {
    id: 'AS-CASE-0014',
    type: 'case',
    specialty: 'Medicine — Neurology',
    teaching_case: true,
    title: 'CASE: A Seizure That Has Not Stopped for 12 Minutes',
    short: 'Case: status epilepticus',
    summary:
      'A 28-year-old known epileptic who ran out of tablets, now in a continuous generalised seizure. Teaches the timed ladder — benzodiazepine, then a second-line agent, then anaesthesia — why the clock rather than appearance drives escalation, and why the paralysed patient may still be fitting.',
    domains: ['neurology', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case status epilepticus', 'seizure case', 'convulsive status', 'lorazepam case',
      'levetiracetam', 'phenytoin loading', 'non-convulsive status', 'rsi seizure',
    ],
    terms: [
      'case', 'status epilepticus', 'seizure', 'convulsive', 'lorazepam', 'midazolam',
      'diazepam', 'levetiracetam', 'phenytoin', 'sodium valproate', 'refractory status',
      'non-convulsive status', 'eeg', 'rhabdomyolysis', 'purple glove syndrome',
      'todd paresis', 'eclampsia', 'pyridoxine',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '28-year-old man with known epilepsy, brought in by ambulance mid-seizure. Paramedics say it started about 12 minutes ago and has not stopped. His girlfriend says he ran out of his tablets four days ago.',

      section_1_clerking: {
        the_definition_that_drives_everything: {
          old_teaching: 'Status epilepticus used to be defined as 30 minutes of continuous seizure activity.',
          current_operational_definition:
            'FIVE MINUTES of continuous generalised convulsive seizure activity, OR two or more seizures without full recovery of consciousness between them. THE DEFINITION WAS SHORTENED DELIBERATELY, because most self-limiting seizures stop within 2 to 3 minutes, and because neuronal injury and treatment resistance begin far earlier than 30 minutes. A seizure still going at 5 minutes is unlikely to stop on its own and needs treatment NOW.',
        },
        history_from_the_paramedics_and_girlfriend:
          'Generalised tonic-clonic activity, continuous, 12 minutes. No head injury. No fever. He has epilepsy diagnosed at 19, usually well controlled on levetiracetam, but RAN OUT OF TABLETS FOUR DAYS AGO and did not get a repeat prescription. No alcohol. No recreational drugs known.',
        reading_the_clues: {
          twelve_minutes: 'Already well past the 5-minute threshold. He is in established status epilepticus and the clock is the most important number in the room. RECORD THE TIME OF ONSET.',
          ran_out_of_medication:
            'ANTIEPILEPTIC WITHDRAWAL IS THE COMMONEST PRECIPITANT of status in a known epileptic. It is also entirely preventable, and the reason must be found — cost, access, side effects, forgetfulness, or simply not understanding that stopping abruptly is dangerous.',
          no_fever_no_head_injury: 'Narrows the differential, but does not exclude infection or a structural cause. Both are still checked.',
        },
        the_precipitants_to_run_through: 'Antiepileptic withdrawal or non-adherence (commonest in known epilepsy) · ALCOHOL withdrawal · HYPOGLYCAEMIA · electrolyte disturbance, especially sodium, calcium and magnesium · CNS INFECTION — meningitis or encephalitis · stroke or intracranial haemorrhage · head injury · brain tumour · drug toxicity, including tricyclics, tramadol and cocaine · ECLAMPSIA in any woman who is pregnant or up to 6 weeks postpartum · and hypoxia.',
        examination_while_treating:
          'You examine and treat simultaneously. Airway patency, oxygen saturation, GLUCOSE, temperature, pupils, signs of head injury, neck stiffness (though difficult during convulsion), rash, needle marks, and a MEDIC-ALERT BRACELET. Check for tongue biting and incontinence to support that this is a genuine seizure.',
        vitals: 'BP 156/94 mmHg. Pulse 132. Respiratory rate irregular. Temperature 37.4. Saturation 89% on air. CAPILLARY GLUCOSE 5.2 mmol/L. Pupils 5 mm and reactive.',
      },

      section_2_mechanism: {
        what_a_seizure_is: 'Abnormal, excessive, synchronised electrical discharge in a population of cortical neurons. It reflects a failure of the normal balance between EXCITATION, mediated largely by glutamate, and INHIBITION, mediated largely by GABA (gamma-aminobutyric acid).',
        why_prolonged_seizures_become_harder_to_stop_the_key_concept: {
          receptor_trafficking:
            'Within MINUTES of continuous seizure activity, GABA-A receptors — the target of benzodiazepines — are INTERNALISED, pulled from the neuronal surface membrane into the cell. At the same time, excitatory glutamate receptors are moved TO the surface. The brain becomes progressively LESS responsive to benzodiazepines and MORE excitable.',
          the_practical_consequence:
            'THIS IS WHY EARLY TREATMENT WORKS AND LATE TREATMENT FAILS. A benzodiazepine given at 5 minutes has a high chance of terminating the seizure; the same drug at 45 minutes often will not. It is also why you must not simply keep repeating benzodiazepines — after two adequate doses, escalate to a different mechanism rather than giving a third.',
        },
        the_systemic_damage: [
          '1. Continuous muscle activity consumes enormous oxygen and glucose while the airway is compromised — HYPOXIA and later HYPOGLYCAEMIA.',
          '2. Anaerobic metabolism produces LACTIC ACIDOSIS.',
          '3. Massive muscle activity causes RHABDOMYOLYSIS — muscle breakdown releasing myoglobin, which causes acute kidney injury, and potassium, which causes arrhythmia.',
          '4. HYPERTHERMIA from muscle activity worsens neuronal injury.',
          '5. Catecholamine surge causes tachycardia, hypertension, arrhythmia and sometimes neurogenic pulmonary oedema.',
          '6. After roughly 30 minutes, the brain begins to sustain EXCITOTOXIC NEURONAL INJURY independent of the systemic effects — calcium influx driven by sustained glutamate activity kills neurons, particularly in the hippocampus.',
        ],
      },

      section_3_differentials: {
        one_convulsive_status_epilepticus: 'WORKING DIAGNOSIS. Supporting: known epilepsy, medication withdrawal, continuous generalised convulsive activity beyond 5 minutes.',
        two_psychogenic_non_epileptic_seizure: {
          note: 'A genuine condition, not fabrication, and it can coexist with epilepsy.',
          features_that_suggest_it: 'Eyes CLOSED and resisting passive opening (eyes are usually OPEN in a genuine tonic-clonic seizure) · asynchronous, thrashing, side-to-side movements rather than rhythmic clonic jerks · pelvic thrusting · prolonged duration with preserved oxygenation and no cyanosis · rapid recovery without a post-ictal phase · absence of a rise in lactate.',
          the_safe_approach: 'IF IN DOUBT, TREAT AS EPILEPTIC. The harm of under-treating true status vastly exceeds the harm of a benzodiazepine dose. But avoid escalating to intubation on uncertain grounds — get senior help and, if available, an EEG.',
        },
        three_eclampsia: 'ALWAYS ASK IF SHE COULD BE PREGNANT OR RECENTLY DELIVERED — up to 6 weeks postpartum. Eclampsia is treated with MAGNESIUM SULPHATE, not the standard epilepsy ladder, and missing it is a major cause of maternal death.',
        four_hypoglycaemia: 'Check the glucose in every seizure. It is instantly reversible and it is the first thing you do.',
        five_meningitis_or_encephalitis: 'Fever, headache, neck stiffness, rash. If suspected, give antibiotics and aciclovir EARLY — do not wait for imaging or lumbar puncture.',
        six_intracranial_haemorrhage_or_stroke: 'Focal onset, head injury, anticoagulation. CT once the seizure is controlled.',
      },

      section_4_investigations: {
        note: 'INVESTIGATION HAPPENS ALONGSIDE TREATMENT, NEVER BEFORE IT. The only test that precedes drug administration is the capillary glucose.',
        immediate_bedside: {
          glucose: 'CAPILLARY GLUCOSE FIRST, ALWAYS. Hypoglycaemia causes seizures and is reversible in one minute. If under 4 mmol/L, give 100 mL of 20% glucose intravenously. If there is any suspicion of alcohol dependence or malnutrition, give THIAMINE (Pabrinex) BEFORE or WITH the glucose, because a glucose load in a thiamine-deficient patient can precipitate WERNICKE ENCEPHALOPATHY.',
          temperature_and_saturation: 'Hyperthermia worsens injury; hypoxia is both cause and consequence.',
        },
        bloods: 'Full blood count · UREA AND ELECTROLYTES including SODIUM, CALCIUM and MAGNESIUM, all of which cause seizures when deranged · liver function · CREATINE KINASE, looking for rhabdomyolysis, which can reach tens of thousands of units per litre · venous or arterial gas for pH and LACTATE · ANTIEPILEPTIC DRUG LEVELS where available, which directly confirms non-adherence · toxicology screen · blood cultures if febrile · and a PREGNANCY TEST in any woman of reproductive age.',
        the_lactate_point: 'A markedly raised lactate immediately after a generalised seizure is EXPECTED, from anaerobic muscle metabolism, and clears within about an hour. It supports that the event was a genuine tonic-clonic seizure. A normal lactate after a prolonged apparent convulsion should raise the question of a non-epileptic event.',
        imaging: 'CT HEAD once the seizure is controlled and the patient is stable — looking for haemorrhage, stroke, mass or trauma. Urgent if there is a focal deficit, head injury, anticoagulation, immunosuppression, or a first seizure.',
        lumbar_puncture: 'If infection is suspected — AFTER imaging where there are focal signs or reduced consciousness. Do not delay antibiotics for it.',
        eeg: {
          why_it_matters_more_than_people_realise:
            'ELECTROENCEPHALOGRAPHY is essential if the patient does not wake up after the convulsions stop, because of NON-CONVULSIVE STATUS EPILEPTICUS — continuing electrical seizure activity WITHOUT visible convulsion. A patient who has been paralysed for intubation CANNOT CONVULSE, so the only way to know whether they are still fitting is the EEG. Attributing prolonged unconsciousness to "post-ictal drowsiness" without an EEG is a recognised and serious error.',
        },
      },

      section_5_management: {
        the_structure: 'A TIMED LADDER. Escalate by the CLOCK, not by how the patient looks. Write the times down — in a resuscitation the sense of elapsed time is unreliable, and someone must be nominated to keep the clock.',
        step_0_immediate: {
          airway: 'Head tilt and chin lift or jaw thrust. NASOPHARYNGEAL airway if tolerated — an oropharyngeal airway is usually impossible during a convulsion and DO NOT FORCE ANYTHING BETWEEN THE TEETH. Suction. Recovery position between seizures.',
          breathing: 'HIGH-FLOW OXYGEN, 15 L/min via non-rebreather mask.',
          circulation: 'Intravenous access, bloods, cardiac monitoring.',
          disability: 'GLUCOSE. Pupils.',
          protect_from_injury: 'Remove hazards, pad where possible. Do not restrain the limbs.',
        },
        step_1_benzodiazepine_0_to_5_minutes: {
          first_choice_with_iv_access:
            'LORAZEPAM 4 mg by SLOW INTRAVENOUS INJECTION over 2 minutes. Preferred because it has a longer duration of anticonvulsant action in the brain than diazepam, so seizures recur less.',
          without_iv_access:
            'MIDAZOLAM 10 mg BUCCALLY (into the cheek) or INTRAMUSCULARLY, or DIAZEPAM 10 to 20 mg RECTALLY. Buccal midazolam is at least as effective as intravenous lorazepam in the pre-hospital setting and needs no cannula.',
          the_second_dose: 'If the seizure continues after 10 minutes, give a SECOND dose of LORAZEPAM 4 mg.',
          the_rule_that_prevents_harm:
            'DO NOT GIVE MORE THAN TWO DOSES OF BENZODIAZEPINE. A third dose adds little anticonvulsant benefit — because of the receptor internalisation described above — while substantially increasing respiratory depression and hypotension. AFTER TWO DOSES, MOVE TO A DIFFERENT MECHANISM. Repeated benzodiazepine dosing without escalation is one of the commonest management failures in status.',
          monitor: 'Respiratory rate, oxygen saturation and blood pressure continuously. Have airway support immediately available.',
        },
        step_2_second_line_agent_at_about_10_to_20_minutes: {
          note: 'Any one of the following. Choice depends on local protocol, the patient existing medication and comorbidity. Give it as an INFUSION while continuing to monitor.',
          levetiracetam: 'LEVETIRACETAM 60 mg/kg intravenously, to a MAXIMUM of 4,500 mg, infused over 10 minutes. FOR A 70 kg MAN: 60 x 70 = 4,200 mg. Widely used first because it has few interactions, needs no cardiac monitoring and is well tolerated. Reduce the dose in renal impairment.',
          sodium_valproate: 'SODIUM VALPROATE 40 mg/kg intravenously, maximum 3,000 mg, over 10 minutes. FOR 70 kg: 2,800 mg. ABSOLUTELY CONTRAINDICATED IN PREGNANCY AND IN WOMEN OF CHILDBEARING POTENTIAL unless a strict pregnancy prevention programme is in place, because of major congenital malformations and neurodevelopmental harm. Avoid in known liver disease and in mitochondrial disease.',
          phenytoin: {
            dose: 'PHENYTOIN 20 mg/kg intravenously, maximum 2,000 mg, at a rate NOT EXCEEDING 50 mg per minute. FOR 70 kg: 1,400 mg, taking at least 28 minutes.',
            why_the_rate_limit_matters: 'Faster infusion causes HYPOTENSION and CARDIAC ARRHYTHMIA, because the drug and its propylene glycol diluent are cardiodepressant. CARDIAC MONITORING IS MANDATORY throughout.',
            purple_glove_syndrome: 'Phenytoin is highly irritant and strongly alkaline. Extravasation causes PURPLE GLOVE SYNDROME — progressive limb discolouration, oedema and pain that can progress to necrosis and compartment syndrome. Use a large vein, a well-secured cannula, and check the site repeatedly. FOSPHENYTOIN is a prodrug that is far less irritant and can be given faster, and is preferred where available.',
          },
        },
        step_3_refractory_status_at_about_30_to_45_minutes: {
          definition: 'Seizure continuing despite an adequate benzodiazepine and an adequate second-line agent.',
          the_action: 'GENERAL ANAESTHESIA with intubation and ventilation, in intensive care. Agents include PROPOFOL, MIDAZOLAM infusion or THIOPENTONE. CALL ANAESTHETICS AND INTENSIVE CARE EARLY — ideally at the time you give the second-line agent, not after it has failed, because it takes time for them to arrive and prepare.',
          continuous_eeg: 'Once paralysed, the patient cannot convulse, so CONTINUOUS EEG MONITORING is required to know whether the seizure has actually stopped. The target is usually seizure suppression or a burst-suppression pattern.',
        },
        step_4_specific_situations: {
          eclampsia: 'MAGNESIUM SULPHATE, not the standard ladder. A typical regimen is 4 g intravenously over 5 to 15 minutes, followed by an infusion of 1 g per hour. Monitor deep tendon reflexes, respiratory rate and urine output for magnesium toxicity, and have CALCIUM GLUCONATE available as the antidote.',
          alcohol_withdrawal_seizures: 'Benzodiazepines are the treatment. Give THIAMINE. Phenytoin is ineffective for alcohol withdrawal seizures specifically.',
          isoniazid_overdose: 'Causes seizures refractory to standard treatment. The antidote is PYRIDOXINE (vitamin B6), given gram for gram with the ingested isoniazid.',
          hyponatraemia: 'Seizures from severe hyponatraemia need HYPERTONIC SALINE, not more antiepileptics.',
        },
        after_the_seizure_stops: {
          monitor: 'Airway, breathing, circulation. Continuous observations. Recovery position. Expect a post-ictal phase of confusion and drowsiness lasting minutes to hours.',
          if_they_do_not_wake_up: 'THINK NON-CONVULSIVE STATUS EPILEPTICUS AND GET AN EEG. Do not assume post-ictal drowsiness beyond about 30 to 60 minutes.',
          rhabdomyolysis: 'Check creatine kinase, potassium and renal function. Give generous intravenous fluid if the creatine kinase is markedly raised, to protect the kidneys from myoglobin.',
          todd_paresis: 'A transient focal weakness after a seizure, lasting minutes to hours, which MIMICS STROKE exactly. If in doubt, image.',
        },
        before_discharge: {
          the_actual_problem: 'HE RAN OUT OF TABLETS. Establish why — cost, repeat prescription failure, side effects, forgetfulness, or not knowing that abrupt withdrawal is dangerous. Fixing THAT prevents the next admission; representing the same drug does not.',
          practical: 'Restart or adjust his antiepileptic with neurology input. Arrange a reliable repeat prescription. Consider a dosette box or reminder. Give written advice about never stopping abruptly.',
          safety_advice: 'DRIVING — he must stop and inform the licensing authority; the period off driving is determined by national rules. Avoid swimming alone, showers rather than baths, care with heights, machinery and cooking. Advise family on what to do in a seizure and when to call an ambulance.',
        },
      },

      section_6_teaching_points: {
        bonus_1_why_the_definition_was_shortened_to_five_minutes:
          'Most self-limiting seizures stop within 2 to 3 minutes. Beyond 5 minutes, spontaneous termination becomes unlikely and neuronal injury and drug resistance begin. The old 30-minute definition delayed treatment until the seizure was already hard to stop.',
        bonus_2_receptor_internalisation_explains_the_whole_ladder:
          'Continuous seizure activity pulls GABA-A receptors off the neuronal surface within minutes, so benzodiazepines become progressively less effective, while excitatory receptors are moved TO the surface. This is why early treatment works, why a third benzodiazepine dose is futile, and why escalation must be to a DIFFERENT mechanism.',
        bonus_3_the_paralysed_patient_cannot_convulse:
          'Once intubated and paralysed, visible seizure activity stops whether or not the brain has. NON-CONVULSIVE STATUS is invisible without an EEG. A patient who does not wake up needs an EEG, not reassurance about the post-ictal phase.',
        bonus_4_the_lactate_tells_you_it_was_real:
          'A markedly raised lactate immediately after a generalised convulsion is expected from anaerobic muscle metabolism and clears within about an hour. It supports a genuine tonic-clonic seizure, and a normal lactate after a prolonged apparent convulsion should prompt consideration of a non-epileptic event.',
        trap_1: 'CHECK THE GLUCOSE FIRST. And give thiamine before or with glucose in anyone who may be alcohol-dependent or malnourished, or you may precipitate Wernicke encephalopathy.',
        trap_2: 'Do not give more than two benzodiazepine doses. Escalate to a different mechanism instead.',
        trap_3: 'Never force anything between the teeth. It breaks teeth, injures the airway and injures you.',
        trap_4: 'Phenytoin must not exceed 50 mg per minute and requires cardiac monitoring. Watch the cannula site for purple glove syndrome.',
        trap_5: 'Sodium valproate is contraindicated in women of childbearing potential without a pregnancy prevention programme.',
        trap_6: 'ALWAYS consider eclampsia in a woman who is pregnant or up to 6 weeks postpartum — the treatment is magnesium, not the standard ladder.',
        trap_7: 'Call anaesthetics and intensive care when you give the second-line drug, not after it fails.',
        one_line_summary: 'Established status epilepticus from antiepileptic withdrawal. Glucose, oxygen, two doses of lorazepam and no more, then levetiracetam by weight, anaesthesia by 30 to 45 minutes — and an EEG if he does not wake up.',
      },
    },
    warnings: [
      'Status epilepticus is 5 MINUTES of continuous seizure, not 30. Treat at 5 minutes.',
      'CHECK THE GLUCOSE FIRST, and give thiamine before or with glucose in possible alcohol dependence or malnutrition.',
      'DO NOT give more than TWO benzodiazepine doses — a third adds little benefit and substantial respiratory depression. Escalate to a different mechanism.',
      'Never force anything between the teeth during a seizure.',
      'Phenytoin must not exceed 50 mg per minute and requires cardiac monitoring — faster causes hypotension and arrhythmia.',
      'Watch the phenytoin cannula site — extravasation causes purple glove syndrome with necrosis and compartment syndrome.',
      'Sodium valproate is contraindicated in women of childbearing potential without a strict pregnancy prevention programme.',
      'ALWAYS consider ECLAMPSIA in a woman pregnant or up to 6 weeks postpartum — treat with magnesium sulphate, not the standard ladder.',
      'A PARALYSED patient cannot convulse. If they do not wake up, get an EEG — non-convulsive status is invisible without it.',
      'Call anaesthetics and intensive care when you give the second-line agent, not after it has failed.',
      'Check creatine kinase and potassium — rhabdomyolysis causes acute kidney injury and arrhythmia.',
      'Todd paresis after a seizure mimics stroke exactly.',
      'Doses here are teaching examples for an adult. Follow your local status epilepticus protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Second-line agent choice, doses and escalation timings differ between national and local guidelines.',
      'Paediatric doses are weight-based and differ substantially — not covered here.',
    ],
    cards: [
      { q: 'Define status epilepticus.', a: 'Five minutes of continuous generalised convulsive seizure, or repeated seizures without recovery between them.' },
      { q: 'Why was the definition shortened from 30 to 5 minutes?', a: 'Most seizures stop within 2 to 3 minutes; beyond 5 spontaneous termination is unlikely and injury and drug resistance begin.' },
      { q: 'Why do benzodiazepines fail in prolonged seizures?', a: 'GABA-A receptors are internalised within minutes while excitatory receptors move to the surface.' },
      { q: 'How many benzodiazepine doses, and why no more?', a: 'Two. A third adds little anticonvulsant benefit but substantial respiratory depression.' },
      { q: 'Give the levetiracetam loading dose for a 70 kg adult.', a: '60 mg/kg = 4,200 mg intravenously over 10 minutes, maximum 4,500 mg.' },
      { q: 'What is the maximum phenytoin infusion rate, and why?', a: '50 mg per minute — faster causes hypotension and arrhythmia. Cardiac monitoring is mandatory.' },
      { q: 'What is purple glove syndrome?', a: 'Limb discolouration, oedema and pain from phenytoin extravasation, which can progress to necrosis.' },
      { q: 'Which seizure needs magnesium rather than the standard ladder?', a: 'Eclampsia — in pregnancy or up to 6 weeks postpartum.' },
      { q: 'Why must a paralysed patient have an EEG?', a: 'Paralysis abolishes visible convulsion but not electrical seizure activity — non-convulsive status is otherwise invisible.' },
      { q: 'What does a raised lactate after a convulsion indicate?', a: 'Anaerobic muscle metabolism — it supports a genuine tonic-clonic seizure and clears within about an hour.' },
      { q: 'What is the antidote for isoniazid-induced seizures?', a: 'Pyridoxine, gram for gram with the ingested isoniazid.' },
    ],
    checks: [
      'Time of seizure onset recorded and a clock-keeper nominated',
      'Glucose checked immediately',
      'Thiamine given if alcohol dependence or malnutrition possible',
      'High-flow oxygen and airway support',
      'No more than two benzodiazepine doses given',
      'Second-line agent calculated by weight',
      'Cardiac monitoring if phenytoin used, with cannula site checked',
      'Pregnancy considered and eclampsia excluded',
      'Anaesthetics and intensive care alerted early',
      'EEG arranged if the patient does not wake',
      'Creatine kinase, potassium and renal function checked',
      'Reason for medication lapse established before discharge',
      'Driving and safety advice given and documented',
    ],
    related: ['seizure_cough_chest_pain_and_generalised_weakness_structured_histories'],
  },

  {
    id: 'AS-CASE-0015',
    type: 'case',
    specialty: 'Medicine — Infectious disease',
    teaching_case: true,
    title: 'CASE: Fever, Headache and a Rash That Does Not Blanch',
    short: 'Case: bacterial meningitis',
    summary:
      'A 19-year-old student with 8 hours of fever, headache and a non-blanching rash. The whole case turns on one rule: GIVE THE ANTIBIOTIC FIRST. Not after the CT, not after the lumbar puncture — first.',
    domains: ['infectious_disease', 'neurology', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case meningitis', 'bacterial meningitis case', 'meningococcal sepsis case',
      'non-blanching rash', 'purpura fulminans', 'ceftriaxone meningitis', 'dexamethasone meningitis',
      'lumbar puncture case', 'glass test',
    ],
    terms: [
      'case', 'meningitis', 'meningococcal', 'neisseria meningitidis', 'streptococcus pneumoniae',
      'non-blanching', 'petechiae', 'purpura', 'glass test', 'kernig', 'brudzinski',
      'ceftriaxone', 'dexamethasone', 'amoxicillin listeria', 'aciclovir', 'lumbar puncture',
      'csf', 'opening pressure', 'waterhouse friderichsen', 'chemoprophylaxis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '19-year-old university student in hall of residence, brought by friends with 8 hours of fever, severe headache, vomiting, photophobia and a rash on his legs that appeared an hour ago.',

      section_1_clerking: {
        history:
          'Well yesterday. Woke with headache and fever, which worsened rapidly through the day. He has vomited four times, cannot tolerate the light, and his neck hurts to move. An hour ago his friends noticed dark red spots on his shins that they thought were bruises. He has become increasingly drowsy in the last 30 minutes.',
        reading_the_clues: {
          eight_hours: 'RAPID. Bacterial meningitis and meningococcal sepsis progress over HOURS, not days. A viral illness building over days behaves differently. Speed is a severity marker in itself.',
          the_rash:
            'THE MOST IMPORTANT FINDING IN THE CASE. Dark red or purple spots that DO NOT BLANCH when pressed. Test it with the GLASS TEST — press the side of a clear glass firmly over the rash. Erythema from dilated vessels BLANCHES (whitens); blood that has LEAKED OUT of vessels does NOT. A non-blanching rash in a febrile unwell patient is MENINGOCOCCAL SEPSIS UNTIL PROVEN OTHERWISE.',
          rapidly_worsening_drowsiness: 'A falling conscious level in this context indicates either raised intracranial pressure or septic shock, and it changes the imaging decision.',
          university_hall_of_residence: 'Crowded living raises meningococcal transmission. It also means CONTACT TRACING and CHEMOPROPHYLAXIS will be needed for his household and close contacts.',
        },
        the_classic_triad_and_its_limitation:
          'FEVER, NECK STIFFNESS and ALTERED MENTAL STATE. All three are present in fewer than half of adults with bacterial meningitis, so the ABSENCE of the full triad excludes nothing. Nearly all patients have at least TWO of fever, headache, neck stiffness and altered consciousness — which is a more useful rule.',
        past_medical_history: 'Nil. Vaccinations up to date as far as he knows — ASK SPECIFICALLY about meningococcal vaccination, as it covers some serogroups and not others, and does not exclude the diagnosis.',
        vitals: 'BP 88/48 mmHg. Pulse 128. Respiratory rate 28. Temperature 39.4. Saturation 94% on air. GCS 13/15. CAPILLARY REFILL 4 seconds. Glucose 6.1.',
        the_vitals_interpretation:
          'HE IS IN SEPTIC SHOCK — hypotensive, tachycardic, poorly perfused. This is not simply meningitis; this is MENINGOCOCCAL SEPSIS, which has a higher mortality than meningitis alone and is what the rash signifies.',
        examination:
          'Drowsy but rousable. NECK STIFFNESS on passive flexion. KERNIG and BRUDZINSKI signs positive — but note BOTH ARE INSENSITIVE and their absence excludes nothing. NON-BLANCHING PETECHIAL AND PURPURIC RASH over both shins and now the trunk, SPREADING WHILE OBSERVED. Cold peripheries with mottling. No focal neurological deficit. Fundoscopy shows no papilloedema.',
        the_rash_terminology: 'PETECHIAE are non-blanching spots under about 3 mm. PURPURA are 3 mm to 1 cm. ECCHYMOSES are larger. PURPURA FULMINANS is widespread, rapidly progressive purpura with skin necrosis, indicating disseminated intravascular coagulation and carrying a very high mortality.',
      },

      section_2_mechanism: {
        how_meningitis_happens: [
          '1. Neisseria meningitidis colonises the nasopharynx — carried harmlessly by a proportion of healthy people.',
          '2. In a susceptible host it INVADES the bloodstream.',
          '3. From the blood it crosses the blood-brain barrier into the subarachnoid space, where host defences are limited.',
          '4. Bacterial multiplication triggers a massive INFLAMMATORY response — cytokines, neutrophil influx, and breakdown of the blood-brain barrier.',
          '5. That inflammation causes CEREBRAL OEDEMA, raised intracranial pressure, impaired cerebral blood flow and, in some, hydrocephalus and cranial nerve damage — including the SENSORINEURAL HEARING LOSS that is the commonest long-term sequela.',
        ],
        why_the_rash_and_the_shock: {
          endotoxin: 'The meningococcal cell wall contains LIPOOLIGOSACCHARIDE, a potent endotoxin released in large quantities during rapid bacterial multiplication and lysis.',
          the_consequences:
            'Endotoxin triggers overwhelming cytokine release, causing profound VASODILATATION and CAPILLARY LEAK — hence the hypotension and poor perfusion. It also activates coagulation diffusely, consuming clotting factors and platelets, causing DISSEMINATED INTRAVASCULAR COAGULATION. Microvascular thrombosis plus vessel damage causes bleeding into the skin — THE NON-BLANCHING RASH IS THEREFORE A DIRECT MARKER OF SEPSIS SEVERITY, not merely a skin finding.',
          waterhouse_friderichsen_syndrome: 'Bilateral ADRENAL HAEMORRHAGE causing acute adrenal insufficiency on top of septic shock. Suspect it in refractory hypotension, and treat with hydrocortisone.',
        },
        the_organisms_by_age_and_context: {
          adults_and_older_children: 'STREPTOCOCCUS PNEUMONIAE (commonest overall in adults) and NEISSERIA MENINGITIDIS.',
          over_50_or_immunocompromised_or_pregnant: 'ADD LISTERIA MONOCYTOGENES — this is why AMOXICILLIN is added to the regimen in these groups, because cephalosporins do not cover Listeria.',
          neonates: 'Group B streptococcus, Escherichia coli, Listeria.',
          after_neurosurgery_or_head_injury: 'Staphylococci and Gram-negative organisms.',
        },
      },

      section_3_differentials: {
        one_meningococcal_sepsis_with_meningitis: 'WORKING DIAGNOSIS. Supporting: rapid onset, fever, headache, photophobia, neck stiffness, non-blanching spreading rash, shock, drowsiness, communal living.',
        two_pneumococcal_meningitis: 'Supporting: meningitic features. Against: the rash strongly favours meningococcus. But both are covered by the same empirical antibiotic, so the distinction does not delay treatment.',
        three_viral_meningitis: 'Supporting: fever, headache, neck stiffness, photophobia. Against: he is SHOCKED, drowsy and has a purpuric rash — viral meningitis patients are usually systemically much better. CSF findings distinguish them.',
        four_encephalitis: 'Supporting: fever and altered consciousness. Distinguishing feature: ENCEPHALITIS causes altered behaviour, confusion, personality change and seizures out of proportion to meningism, and herpes simplex is the treatable cause. If encephalitis is possible, ADD ACICLOVIR.',
        five_subarachnoid_haemorrhage: 'Supporting: severe headache, vomiting, neck stiffness. Against: onset over hours with fever rather than instantaneous. Speed of onset and fever separate them.',
        six_other_causes_of_a_non_blanching_rash: 'Immune thrombocytopenia, other vasculitis, and mechanical causes such as vomiting-induced facial petechiae. NONE OF THESE SHOULD DELAY ANTIBIOTICS IN A FEBRILE UNWELL PATIENT.',
      },

      section_4_investigations: {
        the_governing_rule: {
          statement: 'DO NOT DELAY ANTIBIOTICS FOR ANY INVESTIGATION. Not for blood cultures if they are difficult, not for the CT, not for the lumbar puncture. Mortality rises measurably with every hour of delay.',
          practical: 'Take blood cultures if it takes seconds; give the antibiotic; then investigate.',
        },
        blood_cultures: 'Before antibiotics IF IT CAUSES NO DELAY. Yield falls after antibiotics, but the antibiotic matters more.',
        meningococcal_pcr: {
          why_it_is_valuable: 'A BLOOD PCR (polymerase chain reaction) for meningococcal DNA REMAINS POSITIVE FOR SEVERAL DAYS AFTER ANTIBIOTICS HAVE BEEN GIVEN, unlike culture. It therefore allows confirmation of the diagnosis even when treatment was correctly given first. Send it in every suspected case.',
        },
        bloods: 'Full blood count (white cells may be very high OR LOW — a LOW count in sepsis is a poor prognostic sign) · CRP · UREA AND ELECTROLYTES · CLOTTING SCREEN AND FIBRINOGEN, looking for disseminated intravascular coagulation · LACTATE, which is a key marker of shock severity · glucose, which must be paired with the CSF glucose · liver function · blood gas.',
        lumbar_puncture: {
          when_to_delay_and_image_first:
            'CT HEAD BEFORE LUMBAR PUNCTURE if any of: FOCAL neurological signs · reduced or falling CONSCIOUS LEVEL · SEIZURES · papilloedema · immunocompromise · or signs of raised intracranial pressure. The concern is that removing fluid below a pressure gradient can precipitate CEREBRAL HERNIATION.',
          his_case: 'His GCS is 13 and falling, so HE NEEDS A CT FIRST — but the antibiotic is given BEFORE the CT, not after it.',
          the_common_error: 'Waiting for the CT before giving antibiotics. The CT delays treatment by an hour or more and does not change the antibiotic.',
          csf_findings: {
            what_to_send: 'Cell count and differential, protein, glucose (with a PAIRED blood glucose taken at the same time), Gram stain, culture, and PCR. Measure the OPENING PRESSURE — it is raised in bacterial meningitis and is frequently not recorded.',
            bacterial: 'Appearance TURBID or cloudy · WHITE CELLS markedly raised, predominantly NEUTROPHILS · PROTEIN raised (normal 0.15 to 0.45 g/L) · GLUCOSE LOW, typically under half the blood glucose, because bacteria and neutrophils consume it · opening pressure raised.',
            viral: 'Appearance clear · white cells modestly raised, predominantly LYMPHOCYTES · protein normal or mildly raised · GLUCOSE NORMAL.',
            tuberculous_or_fungal: 'Appearance clear or fibrin web · LYMPHOCYTES · protein VERY HIGH · glucose LOW · and it evolves over weeks rather than hours.',
            the_glucose_rule: 'THE CSF GLUCOSE IS MEANINGLESS WITHOUT A PAIRED BLOOD GLUCOSE. It is the RATIO that matters — normally about two thirds of the blood level.',
          },
        },
      },

      section_5_management: {
        the_first_action: {
          antibiotics_now:
            'CEFTRIAXONE 2 g intravenously (or CEFOTAXIME 2 g intravenously) IMMEDIATELY. This is the single action that determines outcome. In the community, before transfer, BENZYLPENICILLIN 1.2 g intramuscularly or intravenously should be given if meningococcal disease is suspected and transfer will be delayed.',
          add_amoxicillin_if:
            'AGE OVER 50, PREGNANT, IMMUNOCOMPROMISED, or alcohol-dependent — ADD AMOXICILLIN 2 g intravenously every 4 hours to cover LISTERIA MONOCYTOGENES, which cephalosporins do not treat. He is 19 and immunocompetent, so it is not needed here — but knowing WHY is the point.',
          add_aciclovir_if: 'Encephalitic features are present — confusion, behavioural change, seizures — ACICLOVIR 10 mg/kg intravenously every 8 hours for herpes simplex, adjusted for renal function.',
        },
        dexamethasone: {
          drug: 'DEXAMETHASONE 10 mg intravenously every 6 hours for 4 days.',
          the_timing_that_matters: 'GIVE IT WITH OR JUST BEFORE THE FIRST DOSE OF ANTIBIOTIC. If given late — after antibiotics have already caused bacterial lysis — the benefit is lost.',
          why: 'Antibiotics kill bacteria, and dying bacteria RELEASE cell wall components that provoke a further burst of inflammation. Dexamethasone blunts that inflammatory surge. It reduces hearing loss and, in pneumococcal meningitis, reduces mortality.',
          the_caveats: 'Benefit is clearest in PNEUMOCOCCAL meningitis. It is generally NOT recommended in meningococcal SEPSIS without meningitis, in immunocompromised patients, or in post-surgical meningitis. Do not withhold antibiotics while looking for dexamethasone.',
        },
        resuscitation_of_the_septic_shock: {
          the_point: 'HE IS SHOCKED. This is as urgent as the meningitis.',
          fluids: 'BALANCED CRYSTALLOID 500 mL boluses, reassessing after each — blood pressure, heart rate, capillary refill, conscious level, urine output and lactate. He may need several litres.',
          vasopressors: 'If he remains hypotensive after adequate fluid, he needs a VASOPRESSOR such as NORADRENALINE, which requires central access and intensive care. Escalate early rather than repeating boluses indefinitely.',
          the_sepsis_six: 'Give oxygen, take blood cultures, give antibiotics, give fluid, measure lactate, and measure urine output — all within the first hour.',
          steroids_for_refractory_shock: 'HYDROCORTISONE 50 mg intravenously every 6 hours in refractory shock, and specifically if Waterhouse-Friderichsen adrenal failure is suspected.',
          disseminated_intravascular_coagulation: 'Involve haematology. Replace with fresh frozen plasma, cryoprecipitate and platelets guided by the clotting screen and bleeding, not by numbers alone.',
        },
        the_public_health_actions_that_are_not_optional: {
          notification: 'BACTERIAL MENINGITIS AND MENINGOCOCCAL SEPSIS ARE NOTIFIABLE DISEASES. Notify the public health authority IMMEDIATELY on clinical suspicion — do not wait for laboratory confirmation.',
          chemoprophylaxis:
            'CLOSE CONTACTS need antibiotic prophylaxis, typically CIPROFLOXACIN as a single oral dose, or rifampicin. "Close contacts" means household members, those who have shared a bedroom, intimate partners, and — importantly here — others in the same hall of residence as defined by public health. Healthcare staff need it only if they had direct exposure to respiratory secretions, such as during airway management without protection.',
          isolation: 'Droplet precautions for the first 24 hours of effective antibiotic treatment.',
          why_this_matters: 'Prophylaxis prevents secondary cases. In a university hall, failing to notify promptly can allow an outbreak.',
        },
        monitoring_and_complications: {
          monitor: 'Continuous observations, hourly neurological observations, urine output, lactate trend, and clotting.',
          complications: 'Raised intracranial pressure and herniation · seizures · SENSORINEURAL HEARING LOSS, the commonest long-term sequela · hydrocephalus · cerebral infarction from vasculitis · subdural empyema · disseminated intravascular coagulation with LIMB AND DIGIT NECROSIS requiring amputation · adrenal haemorrhage · and death.',
          follow_up: 'FORMAL AUDIOLOGY ASSESSMENT before or shortly after discharge for every patient with bacterial meningitis. Hearing loss is common, is missed if not tested, and early identification matters — particularly in children, where it affects speech and language development.',
        },
      },

      section_6_teaching_points: {
        bonus_1_antibiotics_come_first:
          'Not after the CT, not after the lumbar puncture, not after the blood cultures if those are difficult. Mortality rises with every hour of delay. If you remember one thing from this case, it is the ORDER.',
        bonus_2_the_glass_test:
          'Press a clear glass firmly over the rash. Erythema from vasodilatation BLANCHES; blood outside the vessels does NOT. A non-blanching rash in a febrile unwell patient is meningococcal sepsis until proven otherwise. It is the highest-value two-second examination in medicine, and it can be taught to parents and students in one sentence.',
        bonus_3_meningococcal_pcr_survives_antibiotics:
          'Blood PCR remains positive for days after antibiotics, unlike culture. This means giving the antibiotic first — which you must — does not cost you the diagnosis. Knowing this removes the last excuse for delay.',
        bonus_4_dexamethasone_timing:
          'It must be given WITH or JUST BEFORE the first antibiotic dose, because it works by blunting the inflammatory surge caused by bacterial lysis. Given afterwards, the surge has already happened and the benefit is lost.',
        bonus_5_why_amoxicillin_is_added_over_50:
          'Cephalosporins do not cover LISTERIA MONOCYTOGENES, which causes meningitis in the over-50s, the pregnant and the immunocompromised. Amoxicillin covers it. This is a small addition that is frequently forgotten and occasionally fatal.',
        trap_1: 'The classic triad is present in fewer than half of adults. Its absence excludes nothing — most patients have at least two of fever, headache, neck stiffness and altered consciousness.',
        trap_2: 'Kernig and Brudzinski signs are insensitive. A negative sign is not reassurance.',
        trap_3: 'CSF glucose is meaningless without a PAIRED blood glucose taken at the same time.',
        trap_4: 'A LOW white cell count in sepsis is a poor prognostic sign, not reassurance.',
        trap_5: 'Notify public health on SUSPICION, not on confirmation. Contacts need prophylaxis quickly.',
        trap_6: 'Arrange formal audiology — hearing loss is the commonest long-term sequela and is missed unless tested.',
        one_line_summary: 'Meningococcal sepsis with meningitis. Ceftriaxone within minutes and before any imaging, dexamethasone with the first dose, fluid and vasopressors for the shock, meningococcal PCR to confirm afterwards, and notify public health on suspicion.',
      },
    },
    warnings: [
      'GIVE THE ANTIBIOTIC FIRST — before the CT, before the lumbar puncture, and before blood cultures if those cause any delay. Mortality rises with every hour.',
      'A NON-BLANCHING rash in a febrile unwell patient is meningococcal sepsis until proven otherwise. Use the glass test.',
      'The classic triad is present in fewer than half of adults — its absence excludes nothing.',
      'Kernig and Brudzinski signs are insensitive; a negative sign is not reassurance.',
      'CT before lumbar puncture if there are focal signs, reduced consciousness, seizures, papilloedema or immunocompromise — but give the antibiotic before the CT.',
      'Give DEXAMETHASONE with or just before the first antibiotic dose — given later, the benefit is lost.',
      'ADD AMOXICILLIN if over 50, pregnant or immunocompromised — cephalosporins do not cover Listeria.',
      'Add ACICLOVIR if there are encephalitic features.',
      'Meningococcal blood PCR stays positive for days after antibiotics — giving treatment first does not cost the diagnosis.',
      'CSF glucose is meaningless without a paired blood glucose.',
      'A LOW white cell count in sepsis is a poor prognostic sign, not reassurance.',
      'NOTIFY PUBLIC HEALTH ON SUSPICION, not on confirmation. Close contacts need prophylaxis quickly.',
      'Arrange formal audiology — sensorineural hearing loss is the commonest long-term sequela.',
      'Doses here are teaching examples for an adult. Follow your local meningitis protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Antibiotic choice, dexamethasone policy and prophylaxis regimens follow national and local guidance.',
      'Paediatric and neonatal doses and organisms differ substantially.',
    ],
    cards: [
      { q: 'What is the single most important action?', a: 'Give the antibiotic immediately — before CT, lumbar puncture, or difficult blood cultures.' },
      { q: 'How do you perform and interpret the glass test?', a: 'Press a clear glass over the rash — erythema blanches, blood outside vessels does not.' },
      { q: 'How often is the classic triad present in adults?', a: 'Fewer than half. Most have at least two of fever, headache, neck stiffness and altered consciousness.' },
      { q: 'When is CT needed before lumbar puncture?', a: 'Focal signs, reduced consciousness, seizures, papilloedema, or immunocompromise.' },
      { q: 'When must dexamethasone be given and why?', a: 'With or just before the first antibiotic — it blunts the inflammatory surge from bacterial lysis.' },
      { q: 'Who needs added amoxicillin, and why?', a: 'Over 50, pregnant or immunocompromised — to cover Listeria, which cephalosporins miss.' },
      { q: 'Give the CSF findings in bacterial meningitis.', a: 'Turbid, high neutrophils, high protein, LOW glucose (under half the blood level), raised opening pressure.' },
      { q: 'Why is meningococcal PCR useful?', a: 'It stays positive for days after antibiotics, unlike culture — so treating first does not lose the diagnosis.' },
      { q: 'What is Waterhouse-Friderichsen syndrome?', a: 'Bilateral adrenal haemorrhage causing acute adrenal insufficiency in meningococcal sepsis.' },
      { q: 'What is the commonest long-term sequela?', a: 'Sensorineural hearing loss — arrange formal audiology.' },
      { q: 'When do you notify public health?', a: 'On clinical suspicion, not on laboratory confirmation.' },
    ],
    checks: [
      'Antibiotic given within minutes of suspicion',
      'Glass test performed and rash documented',
      'Dexamethasone given with or before the first antibiotic',
      'Amoxicillin added if over 50, pregnant or immunocompromised',
      'Aciclovir considered if encephalitic features',
      'Blood cultures and meningococcal PCR sent',
      'CT before lumbar puncture where indicated',
      'CSF sent with a paired blood glucose and opening pressure recorded',
      'Sepsis six completed within the hour',
      'Public health notified on suspicion',
      'Contact chemoprophylaxis arranged',
      'Audiology follow-up arranged',
    ],
    related: ['csf_analysis_across_bacterial_viral_tuberculous_and_fungal'],
  },
];
