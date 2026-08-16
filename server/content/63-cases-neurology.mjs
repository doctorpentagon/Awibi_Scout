/**
 * CASE SCENARIOS — Medicine: Neurology.
 *
 * Batch 2, part 1. Same rules: every term defined where it first appears,
 * every investigation with expected result and normal range, every drug with
 * dose, route, preparation, rate and monitoring.
 */

export default [
  {
    id: 'AS-CASE-0012',
    type: 'case',
    specialty: 'Medicine — Neurology',
    teaching_case: true,
    title: 'CASE: Sudden Right-Sided Weakness and Loss of Speech at 08:40 This Morning',
    short: 'Case: acute ischaemic stroke',
    summary:
      'A 71-year-old in atrial fibrillation with a dense left hemisphere stroke, 50 minutes from onset. Teaches why the CT is done to exclude BLEEDING rather than to see the stroke, why the time of onset governs everything, and why lowering the blood pressure can make it worse.',
    domains: ['neurology', 'emergency_medicine', 'cardiovascular'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case stroke', 'ischaemic stroke case', 'thrombolysis case', 'alteplase stroke',
      'thrombectomy case', 'nihss', 'rosier', 'fast', 'wake up stroke', 'stroke mimic',
    ],
    terms: [
      'case', 'stroke', 'ischaemic', 'infarct', 'thrombolysis', 'alteplase', 'tenecteplase',
      'thrombectomy', 'nihss', 'rosier', 'fast', 'penumbra', 'core', 'ct head', 'ct angiogram',
      'atrial fibrillation', 'permissive hypertension', 'dysphagia screen', 'aspiration',
      'todd paresis', 'stroke mimic', 'cha2ds2-vasc',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '71-year-old woman, known atrial fibrillation, found by her husband at 08:40 unable to speak and with a drooping right face and a limp right arm. She was completely well at 08:00 when he made her tea.',

      section_1_clerking: {
        the_single_most_important_question:
          'WHEN WAS SHE LAST SEEN WELL? Not "when was she found" — LAST SEEN WELL. Every treatment decision runs off this number. Here it is 08:00, and she presents at 09:15, so she is 75 MINUTES from onset. Write the exact time in the notes, and record who witnessed it and how you know.',
        history:
          'Her husband gave her tea at 08:00 and she spoke normally. At 08:40 he found her slumped in the chair, unable to get words out, with the right side of her face drooping and her right arm hanging. No headache, no vomiting, no seizure, no head injury.',
        reading_the_clues: {
          sudden_onset: 'Vascular events are SUDDEN and MAXIMAL at or near onset. Something that builds over hours or days is not a stroke.',
          focal_deficit: 'A deficit corresponding to one arterial territory. Global confusion without focal signs is rarely stroke.',
          no_headache_or_vomiting: 'Their ABSENCE mildly favours ischaemic over haemorrhagic stroke — but it does NOT distinguish them. ONLY IMAGING DOES. Never decide on clinical grounds.',
          known_atrial_fibrillation: 'The likely mechanism. In atrial fibrillation the atria quiver rather than contract, blood stagnates in the left atrial appendage, a clot forms and embolises to the brain. ASK WHETHER SHE WAS ANTICOAGULATED — the answer changes both the cause and the treatment.',
        },
        past_medical_history: 'Atrial fibrillation diagnosed 3 years ago. Hypertension. Type 2 diabetes. No previous stroke.',
        drug_history:
          'Bisoprolol 5 mg orally daily. Ramipril 5 mg orally daily. Metformin 1 g twice daily. APIXABAN 5 mg twice daily — BUT HER HUSBAND SAYS SHE OFTEN FORGETS IT AND HE THINKS SHE HAS NOT TAKEN IT FOR SEVERAL DAYS. ESTABLISH THE EXACT TIME OF THE LAST DOSE. Recent anticoagulation is a contraindication to thrombolysis, and this detail decides whether she can receive it.',
        vitals: {
          values: 'BP 186/98 mmHg. Pulse 108, IRREGULARLY IRREGULAR. Respiratory rate 18. Temperature 36.7. Saturation 96% on air. CAPILLARY GLUCOSE 6.8 mmol/L.',
          the_glucose_is_not_a_formality:
            'HYPOGLYCAEMIA IS A STROKE MIMIC and is instantly reversible. A glucose must be checked in EVERY patient with a focal neurological deficit, before anything else. Hers is normal, so it is excluded.',
          the_blood_pressure: 'Raised — and see the management section, because the instinct to lower it is wrong here.',
        },
        examination: {
          general: 'Alert, eyes open, GCS 14 (E4 V4 M6 — verbal reduced by the aphasia, not by conscious level, which is an important distinction).',
          speech:
            'GLOBAL APHASIA — she cannot produce speech and cannot follow commands. APHASIA means loss of language; DYSARTHRIA means the words are formed but slurred because the muscles are weak. They are different and localise differently: aphasia means the DOMINANT HEMISPHERE (usually left) is involved; dysarthria can come from many sites.',
          cranial_nerves:
            'RIGHT FACIAL WEAKNESS SPARING THE FOREHEAD — she can still wrinkle her brow. THIS IS THE KEY SIGN. The forehead has bilateral upper motor neurone supply, so a stroke SPARES it. A lower motor neurone lesion such as Bell palsy does NOT — the whole side is weak. Forehead sparing means this is central.',
          limbs: 'Right arm power 0/5, right leg power 2/5. Right-sided increased tone with an upgoing right plantar (Babinski sign) — upper motor neurone signs.',
          gaze: 'Eyes deviated to the LEFT — she looks TOWARDS the side of the lesion and AWAY from the weak side, because the frontal eye field on the damaged side no longer drives conjugate gaze to the opposite side.',
          cvs: 'Irregularly irregular pulse, no murmurs, JVP not raised.',
        },
        scoring:
          'NIHSS — the National Institutes of Health Stroke Scale — grades severity from 0 to 42 across consciousness, gaze, fields, facial palsy, limb power, ataxia, sensation, language, dysarthria and neglect. HER SCORE IS 19 — a severe stroke. It matters because it guides treatment eligibility, predicts outcome, and gives a reproducible baseline against which to detect deterioration.',
      },

      section_2_mechanism: {
        the_core_and_the_penumbra: {
          the_idea:
            'When an artery occludes, the tissue at the centre — the CORE — loses almost all blood flow and dies within minutes. Around it is the PENUMBRA: tissue supplied by collateral vessels, which is not working but is still ALIVE. It is electrically silent but structurally intact.',
          why_this_is_everything:
            'THE PENUMBRA IS WHAT TREATMENT SAVES. Restore blood flow and it recovers; leave it and it is progressively recruited into the core. This is why "TIME IS BRAIN" — roughly 1.9 million neurons are lost per minute in a large vessel occlusion. Every minute of delay converts salvageable tissue into dead tissue.',
        },
        her_sequence: [
          '1. Atrial fibrillation means the atria quiver rather than contract.',
          '2. Blood stagnates in the LEFT ATRIAL APPENDAGE and a thrombus forms — one arm of Virchow triad, stasis.',
          '3. Part of it breaks off, enters the systemic circulation and lodges in a cerebral artery — here the LEFT MIDDLE CEREBRAL ARTERY.',
          '4. The territory it supplies loses perfusion. That territory includes the motor and sensory cortex for the FACE AND ARM more than the leg, and — in the dominant hemisphere — the LANGUAGE areas.',
          '5. Hence the picture: right face and arm weaker than leg, plus aphasia, plus gaze deviation to the left.',
        ],
        why_the_arm_more_than_the_leg:
          'The MIDDLE cerebral artery supplies the lateral surface of the hemisphere, where the face and arm are represented on the motor homunculus. The ANTERIOR cerebral artery supplies the medial surface, where the LEG is represented. So a middle cerebral stroke affects face and arm more than leg; an anterior cerebral stroke does the reverse. That single anatomical fact localises most strokes at the bedside.',
      },

      section_3_differentials: {
        the_stroke_mimics_that_must_be_excluded: {
          hypoglycaemia: 'Reversible in minutes and can cause a dense hemiparesis. CHECK THE GLUCOSE FIRST, ALWAYS.',
          seizure_with_todd_paresis: 'A focal weakness AFTER a seizure, lasting minutes to hours. Ask specifically about witnessed shaking, tongue biting and incontinence. It mimics stroke exactly.',
          migraine_with_aura: 'Usually younger, with positive phenomena such as zigzag lines, spreading over 20 to 30 minutes, often followed by headache.',
          space_occupying_lesion: 'Tumour or subdural haematoma presenting apparently suddenly. The CT finds it.',
          sepsis_or_metabolic_upset: 'Can unmask an OLD deficit — "recrudescence" — in a patient with a previous stroke.',
          functional_neurological_disorder: 'A genuine diagnosis, not an accusation, but it must never be assumed before imaging.',
        },
        ischaemic_versus_haemorrhagic:
          'About 85% of strokes are ischaemic and 15% haemorrhagic. THEY CANNOT BE DISTINGUISHED CLINICALLY WITH ANY RELIABILITY. Headache, vomiting and reduced consciousness are commoner in haemorrhage but occur in both. THE CT IS THE ONLY ANSWER, and it is the reason the scan is urgent — not to see the infarct, but to exclude the bleed.',
      },

      section_4_investigations: {
        immediate_non_contrast_ct_head: {
          why:
            'THE PURPOSE IS TO EXCLUDE HAEMORRHAGE, not to see the infarct. This is the point most often misunderstood. An acute ischaemic stroke is frequently NORMAL on CT in the first hours, because infarcted tissue takes time to become visibly dark. A normal scan therefore does NOT exclude stroke — it EXCLUDES BLEEDING, which is what you need to know before giving a clot-dissolving drug.',
          timing: 'IMMEDIATELY on arrival for any patient who may be eligible for thrombolysis or thrombectomy. This is one of the few genuinely "scan first, ask later" situations in medicine.',
          expected_here: 'No haemorrhage. Possibly a HYPERDENSE MIDDLE CEREBRAL ARTERY SIGN — a bright artery on the left, representing the clot itself — and early loss of grey-white differentiation.',
          what_normal_looks_like: 'Symmetrical hemispheres, clear grey-white differentiation, no bright (hyperdense) blood, no midline shift, normal ventricles and basal cisterns.',
        },
        ct_angiography: 'To identify a LARGE VESSEL OCCLUSION — internal carotid, or the M1 or M2 segment of the middle cerebral artery — because that is what can be treated by mechanical THROMBECTOMY. Expected here: occlusion of the left M1 segment.',
        glucose: 'Already done. It is not a laboratory test in this context — it is a bedside step that precedes everything.',
        bloods: 'FULL BLOOD COUNT (platelets, because thrombocytopenia contraindicates thrombolysis). CLOTTING SCREEN AND INR (a raised INR contraindicates it). UREA AND ELECTROLYTES. Note that in a genuinely eligible patient you do NOT wait for results unless there is a specific reason to suspect an abnormality — waiting costs penumbra.',
        ecg: 'Confirms atrial fibrillation, and excludes a concurrent myocardial infarction, which can both cause a stroke and be caused by one.',
        later_investigations: 'Carotid Doppler ultrasound to look for a treatable stenosis. Echocardiogram to look for a cardiac source. HbA1c and lipid profile. Prolonged cardiac monitoring if atrial fibrillation is suspected but not yet documented.',
      },

      section_5_management: {
        a_the_first_ten_minutes: {
          actions: 'Alert the STROKE TEAM immediately — this is a pre-alert, made from the ambulance where possible. Airway, breathing, circulation. GLUCOSE. Intravenous access and bloods. STRAIGHT TO CT — do not divert to a cubicle for a full clerking first. Weigh the patient or estimate weight, because thrombolysis is weight-based.',
          keep_her_nil_by_mouth:
            'ABSOLUTELY NOTHING BY MOUTH — not even a sip of water, not oral medication — until a SWALLOW SCREEN has been performed by a trained person. Roughly half of acute stroke patients have unsafe swallowing, and ASPIRATION PNEUMONIA is a leading cause of death and disability after stroke. Giving a stroke patient their morning tablets with water before the swallow screen is a common and genuinely dangerous error.',
        },
        b_thrombolysis: {
          what_it_is: 'A drug that DISSOLVES the clot, given intravenously. ALTEPLASE 0.9 mg/kg, with 10% given as a bolus over 1 minute and the remaining 90% as an infusion over 60 minutes, to a MAXIMUM TOTAL of 90 mg.',
          worked_calculation:
            'HER WEIGHT IS 68 kg. Total dose = 0.9 x 68 = 61.2 mg. Bolus = 10% = 6.1 mg over 1 minute. Infusion = 55.1 mg over 60 minutes. (TENECTEPLASE 0.25 mg/kg as a single bolus is used in many services now and is simpler to give.)',
          the_time_window: 'Within 4.5 HOURS of onset for most patients. BENEFIT FALLS SHARPLY WITH TIME — the number needed to treat rises steeply every 30 minutes. She is at 75 minutes, which is excellent.',
          absolute_contraindications:
            'Haemorrhage on CT · previous intracranial haemorrhage at any time · ischaemic stroke or significant head injury within 3 months · known intracranial tumour or arteriovenous malformation · active internal bleeding · suspected AORTIC DISSECTION · platelets below 100 x 10^9/L · INR above 1.7 or therapeutic anticoagulation · recent major surgery.',
          the_specific_problem_here:
            'SHE IS PRESCRIBED APIXABAN, a direct oral anticoagulant. If she has taken it within 48 hours, thrombolysis is CONTRAINDICATED, because the bleeding risk is unacceptable. Her husband thinks she has not taken it for several days — but "thinks" is not enough. Establish it as precisely as possible: count the tablets in the packet, check the pharmacy dispensing date, telephone the general practitioner. IF SHE CANNOT RECEIVE THROMBOLYSIS, SHE MAY STILL BE ELIGIBLE FOR THROMBECTOMY, which does not carry the same restriction. This is exactly why both pathways are considered together.',
          risks: 'The main risk is SYMPTOMATIC INTRACRANIAL HAEMORRHAGE in roughly 2 to 6%. Discuss it with the patient or family where possible. It is why the contraindication list is checked line by line, not skimmed.',
        },
        c_mechanical_thrombectomy: {
          what_it_is: 'A catheter is passed from the groin or wrist up into the cerebral circulation, and the clot is physically retrieved with a stent retriever or aspirated.',
          who: 'Patients with a LARGE VESSEL OCCLUSION — which she has, an M1 occlusion — and a significant deficit.',
          the_window: 'Generally within 6 hours, extended to 24 hours in selected patients where advanced imaging (CT perfusion) shows a small core and a large salvageable penumbra. THIS IS WHY A "LATE" PATIENT SHOULD STILL BE DISCUSSED — the window is far longer than many people assume.',
          the_key_point: 'THROMBECTOMY AND THROMBOLYSIS ARE NOT ALTERNATIVES. Eligible patients often receive both. Refer for thrombectomy assessment in parallel with giving thrombolysis, not afterwards.',
        },
        d_blood_pressure_and_why_you_should_usually_leave_it_alone: {
          the_principle:
            'In acute ischaemic stroke, high blood pressure is largely COMPENSATORY. Autoregulation is lost in the injured brain, so perfusion of the PENUMBRA depends passively on systemic pressure. LOWERING THE BLOOD PRESSURE REDUCES PENUMBRAL PERFUSION AND CAN EXTEND THE INFARCT. This is called PERMISSIVE HYPERTENSION.',
          the_thresholds:
            'If NOT for thrombolysis: generally do not treat unless above roughly 220/120 mmHg, or there is another indication such as aortic dissection, acute heart failure or hypertensive encephalopathy. IF FOR THROMBOLYSIS: blood pressure must be brought below 185/110 mmHg before the drug and kept below 180/105 for 24 hours afterwards, because the bleeding risk is otherwise unacceptable.',
          her_case: 'At 186/98 she is marginally above the thrombolysis threshold and needs careful, controlled lowering — for example intravenous LABETALOL in small increments, or a GTN infusion — with frequent monitoring. Do NOT drop it precipitously.',
        },
        e_antithrombotic_timing: {
          the_rule: 'ASPIRIN 300 mg orally (or rectally, or by nasogastric tube if the swallow is unsafe) once daily for 14 days, then long-term secondary prevention.',
          the_critical_timing_point:
            'IF SHE RECEIVES THROMBOLYSIS, ASPIRIN MUST BE WITHHELD FOR 24 HOURS, and only given after a REPEAT CT has excluded haemorrhagic transformation. Giving an antiplatelet immediately after a clot-dissolving drug substantially increases bleeding risk. If she does not receive thrombolysis, aspirin is given as soon as haemorrhage is excluded on the initial scan.',
        },
        f_the_rest_of_the_stroke_unit_care_which_saves_more_lives_than_thrombolysis: {
          the_evidence: 'ADMISSION TO AN ORGANISED STROKE UNIT reduces death and dependency more than any single drug, and it benefits EVERY stroke patient, not just the small proportion eligible for reperfusion. This is worth stating plainly because thrombolysis attracts all the attention.',
          the_components: 'Swallow screening before anything by mouth · early mobilisation · glucose control avoiding both hyper- and hypoglycaemia · temperature control, since fever worsens outcome · venous thromboembolism prevention with intermittent pneumatic compression (NOT graduated stockings, which were shown to be ineffective and harmful in stroke) · early physiotherapy, occupational therapy and speech and language therapy · nutrition and hydration · pressure area care · mood screening, because depression after stroke is common and under-treated.',
        },
        g_secondary_prevention_the_thing_that_prevents_the_next_one: {
          anticoagulation_for_atrial_fibrillation:
            'She has atrial fibrillation and has now had a stroke. ANTICOAGULATION IS THE SINGLE MOST IMPORTANT INTERVENTION for preventing a recurrence — it reduces stroke risk in atrial fibrillation by roughly two thirds, far more than aspirin. Restart timing depends on infarct size: a common approach is roughly 1 day after a transient ischaemic attack, 3 days after a small stroke, 6 days after a moderate one and 12 days after a large one, because early anticoagulation risks haemorrhagic transformation. Her CHA2DS2-VASc score is high.',
          the_conversation_that_actually_matters:
            'SHE WAS ALREADY PRESCRIBED APIXABAN AND WAS NOT TAKING IT. Simply representing the same prescription will produce the same outcome. Find out WHY — cost, side effects, swallowing difficulty, forgetfulness, not understanding what it is for, or a belief that it is unnecessary. Then address that specific reason: a dosette box, a family member supervising, a reminder, a different agent, or an honest conversation about what the drug prevents. This is the highest-value thing in the whole discharge plan and it is usually reduced to a line on a prescription.',
          the_rest: 'High-intensity statin such as atorvastatin 80 mg at night. Blood pressure control, started after the acute phase rather than immediately. Diabetes optimisation. Smoking cessation. Carotid endarterectomy if there is a significant symptomatic stenosis on the relevant side.',
          driving: 'She must not drive for at least a month, and longer for a vocational licence. Inform her and the licensing authority, and document it.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_ct_is_to_exclude_blood_not_to_see_the_stroke:
          'An acute infarct is frequently INVISIBLE on CT in the first hours. A "normal" scan does not mean there is no stroke. Its job is to answer one question — is there blood? — because that determines whether a clot-dissolving drug can be given. Reporting "normal CT, so not a stroke" is a serious and common misreading.',
        bonus_2_permissive_hypertension:
          'The high blood pressure is keeping the penumbra alive. Autoregulation is lost, so perfusion follows systemic pressure passively. Lowering it can extend the infarct. The exception is a patient going for thrombolysis, where it must come below 185/110 to make bleeding risk acceptable. Knowing WHICH patient you have determines opposite actions.',
        bonus_3_forehead_sparing:
          'The forehead has bilateral upper motor neurone supply. A stroke SPARES it; a lower motor neurone facial palsy such as Bell palsy does NOT. Asking a patient to raise their eyebrows takes two seconds and separates a central from a peripheral lesion.',
        bonus_4_the_swallow_screen:
          'Nothing by mouth — including tablets and sips of water — until a trained person has screened the swallow. About half of acute stroke patients aspirate, and aspiration pneumonia is a leading cause of death after stroke. This is one of the most frequently broken rules on a ward.',
        trap_1: 'CHECK THE GLUCOSE FIRST in every focal neurological deficit. Hypoglycaemia mimics stroke exactly and reverses in minutes.',
        trap_2: 'Establish the time LAST SEEN WELL, not the time found. Everything depends on it, and a wake-up stroke is timed from when they went to sleep unless advanced imaging is available.',
        trap_3: 'Ischaemic and haemorrhagic stroke cannot be distinguished clinically. Do not act on a hunch — image.',
        trap_4: 'Thrombolysis and thrombectomy are not alternatives. Refer for thrombectomy in parallel, and remember its window extends to 24 hours in selected patients.',
        trap_5: 'Withhold aspirin for 24 hours after thrombolysis and repeat the CT first.',
        trap_6: 'She was already on an anticoagulant and not taking it. Represcribing without finding out why guarantees the next stroke.',
        one_line_summary: 'Left middle cerebral artery ischaemic stroke in untreated atrial fibrillation, 75 minutes from onset. Glucose, then straight to CT to exclude blood, thrombolysis and thrombectomy assessed in parallel, nothing by mouth until swallow screened — and find out why she stopped her apixaban.',
      },
    },
    warnings: [
      'CHECK THE GLUCOSE FIRST in any focal neurological deficit — hypoglycaemia mimics stroke and reverses in minutes.',
      'Establish the time LAST SEEN WELL, not the time found. Every treatment decision depends on it.',
      'The CT is done to EXCLUDE HAEMORRHAGE. An acute infarct is often invisible early — a normal scan does not exclude stroke.',
      'Ischaemic and haemorrhagic stroke cannot be reliably distinguished clinically. Image before acting.',
      'NOTHING BY MOUTH — including tablets and sips of water — until a trained swallow screen is done. Aspiration pneumonia is a leading cause of death after stroke.',
      'Do NOT lower the blood pressure routinely — permissive hypertension keeps the penumbra perfused. The exception is before thrombolysis, where it must be below 185/110.',
      'Recent direct oral anticoagulant use contraindicates thrombolysis — establish the last dose precisely, not approximately.',
      'Thrombectomy is NOT an alternative to thrombolysis — refer in parallel, and its window extends to 24 hours in selected patients.',
      'Withhold aspirin for 24 hours after thrombolysis and repeat the CT before giving it.',
      'Use intermittent pneumatic compression for thromboprophylaxis, NOT graduated compression stockings, which are harmful in stroke.',
      'Admission to an organised stroke unit saves more lives than any single drug and benefits every patient.',
      'Find out WHY she stopped her anticoagulant before representing the same prescription.',
      'Doses here are teaching examples for an adult. Follow your local stroke protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Time windows, agent choice, blood pressure thresholds and anticoagulation restart timing differ between guidelines and services.',
      'Thrombectomy availability requires a comprehensive stroke centre and differs enormously by region.',
    ],
    cards: [
      { q: 'What is the single most important question in acute stroke?', a: 'When was the patient LAST SEEN WELL — not when they were found.' },
      { q: 'What is the purpose of the immediate CT head?', a: 'To exclude haemorrhage. An acute infarct is often invisible in the first hours.' },
      { q: 'What are the core and the penumbra?', a: 'The core is tissue already dead; the penumbra is hypoperfused but salvageable tissue that treatment saves.' },
      { q: 'Why does a stroke spare the forehead?', a: 'The forehead has bilateral upper motor neurone supply; a lower motor neurone palsy does not spare it.' },
      { q: 'Calculate alteplase for a 68 kg patient.', a: '0.9 x 68 = 61.2 mg total; 6.1 mg bolus over 1 minute, then 55.1 mg over 60 minutes.' },
      { q: 'What is permissive hypertension and why?', a: 'Leaving the blood pressure high because autoregulation is lost and penumbral perfusion depends on it.' },
      { q: 'What blood pressure is needed before thrombolysis?', a: 'Below 185/110, and kept below 180/105 for 24 hours afterwards.' },
      { q: 'When is aspirin given after thrombolysis?', a: 'After 24 hours, and only once a repeat CT has excluded haemorrhagic transformation.' },
      { q: 'Which thromboprophylaxis is used in stroke, and which is not?', a: 'Intermittent pneumatic compression. NOT graduated stockings, which are harmful in stroke.' },
      { q: 'Why does a middle cerebral artery stroke affect arm more than leg?', a: 'The MCA supplies the lateral surface where face and arm are represented; the leg is medial, supplied by the anterior cerebral artery.' },
      { q: 'Name three stroke mimics.', a: 'Hypoglycaemia, Todd paresis after a seizure, and migraine with aura.' },
    ],
    checks: [
      'Glucose checked before anything else',
      'Time last seen well established and documented',
      'Stroke team pre-alerted',
      'Immediate non-contrast CT head',
      'CT angiography for large vessel occlusion',
      'Thrombolysis contraindications checked line by line',
      'Exact time of last anticoagulant dose established',
      'Thrombectomy referral made in parallel',
      'NIHSS scored and documented',
      'Nil by mouth until swallow screened',
      'Blood pressure managed according to thrombolysis status',
      'Stroke unit admission arranged',
      'Reason for anticoagulant non-adherence explored before discharge',
    ],
    related: ['mcdonald_criteria_diagnosing_multiple_sclerosis_by_dissemination_in_space_and_time'],
  },

  {
    id: 'AS-CASE-0013',
    type: 'case',
    specialty: 'Medicine — Neurology',
    teaching_case: true,
    title: 'CASE: The Worst Headache of Her Life, Maximal Within Seconds',
    short: 'Case: subarachnoid haemorrhage',
    summary:
      'A 46-year-old with a thunderclap headache and neck stiffness. Teaches why the CT must be early, why a normal CT does NOT end the investigation, what xanthochromia is and why the lumbar puncture is timed at 12 hours, and why nimodipine is given.',
    domains: ['neurology', 'neurosurgery', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case subarachnoid haemorrhage', 'thunderclap headache case', 'sah case',
      'xanthochromia', 'nimodipine', 'hunt and hess', 'world federation grading',
      'sentinel headache', 'berry aneurysm case',
    ],
    terms: [
      'case', 'subarachnoid haemorrhage', 'thunderclap', 'sentinel headache', 'xanthochromia',
      'lumbar puncture', 'three tube', 'nimodipine', 'vasospasm', 'delayed cerebral ischaemia',
      'hunt and hess', 'fisher grade', 'coiling', 'clipping', 'berry aneurysm', 'rebleed',
      'hydrocephalus', 'terson syndrome',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '46-year-old woman with sudden severe occipital headache while lifting a heavy box 4 hours ago, described as "like being hit on the back of the head", with vomiting and neck stiffness.',

      section_1_clerking: {
        history:
          'Four hours ago, while lifting, she developed sudden severe headache at the back of the head that was MAXIMAL WITHIN SECONDS. She vomited three times. She finds bright light uncomfortable and her neck feels stiff. She briefly lost consciousness at onset for about a minute. She has never had a headache like this.',
        reading_the_clues: {
          maximal_within_seconds:
            'THIS IS THE DEFINITION OF A THUNDERCLAP HEADACHE, and it is the single most important feature. Ask precisely: "Did it come on like a switch, or did it build?" A headache that reaches maximum intensity within one minute of onset must be investigated for subarachnoid haemorrhage, regardless of how the patient looks now. Most headaches build; this one did not.',
          worst_ever: 'A useful phrase, but not sufficient on its own. Speed of onset matters more than severity.',
          onset_during_exertion: 'Straining raises intracranial and arterial pressure and can precipitate aneurysmal rupture. Classic triggers include lifting, straining at stool, coughing and sexual intercourse.',
          vomiting_photophobia_neck_stiffness: 'MENINGISM — irritation of the meninges by blood. Note it takes HOURS to develop, so its absence early does not exclude the diagnosis.',
          transient_loss_of_consciousness: 'Occurs in about half, from the abrupt rise in intracranial pressure at the moment of rupture. It is a significant feature and suggests a substantial bleed.',
        },
        the_question_that_must_be_asked:
          'HAVE YOU HAD A SUDDEN SEVERE HEADACHE IN THE LAST FEW WEEKS THAT SETTLED? A SENTINEL HEADACHE — a small warning leak — precedes major rupture in a meaningful proportion of patients, and is routinely dismissed as migraine or tension headache. Recognising it prevents the catastrophic bleed. She reports a severe headache 10 days ago that lasted a day and settled.',
        past_medical_history: 'Hypertension, poorly controlled. No previous neurological problems.',
        family_history: 'HER MOTHER DIED SUDDENLY AGED 52 OF A "BRAIN HAEMORRHAGE". A first-degree relative with subarachnoid haemorrhage substantially increases risk. Also ask about polycystic kidney disease and connective tissue disorders such as Ehlers-Danlos, both associated with intracranial aneurysms.',
        social_history: 'Smokes 15 a day. Drinks moderately. Smoking and hypertension are the two strongest modifiable risk factors.',
        vitals: 'BP 178/96 mmHg. Pulse 88. Respiratory rate 16. Temperature 37.1. Saturation 98%. GCS 15. Glucose 5.9.',
        examination:
          'Alert and orientated. NECK STIFFNESS on passive flexion. KERNIG SIGN — with the hip flexed to 90 degrees, extending the knee causes pain and resistance — and BRUDZINSKI SIGN — passive neck flexion causes involuntary hip and knee flexion. Both indicate meningeal irritation and BOTH ARE INSENSITIVE, so their absence excludes nothing. No focal neurological deficit. FUNDOSCOPY: no papilloedema, but look specifically for SUBHYALOID HAEMORRHAGE (see teaching points).',
        grading:
          'HUNT AND HESS GRADE: 1 is mild headache with no deficit; 2 is severe headache or cranial nerve palsy with no other deficit; 3 is drowsiness or mild focal deficit; 4 is stupor with hemiparesis; 5 is deep coma. SHE IS GRADE 2. The grade predicts outcome and guides urgency. The World Federation of Neurosurgical Societies grade uses GCS plus motor deficit and is also widely used.',
      },

      section_2_mechanism: {
        what_it_is: 'Bleeding into the SUBARACHNOID SPACE — the layer between the arachnoid and pia mater, where the cerebrospinal fluid circulates and where the major cerebral arteries run.',
        the_cause:
          'About 85% are from a ruptured BERRY (saccular) ANEURYSM — a thin-walled outpouching arising at arterial branch points on the circle of Willis, where wall stress is highest. Hypertension and smoking accelerate their formation and rupture.',
        why_it_is_so_dangerous: [
          '1. Arterial blood under systemic pressure enters a closed space, causing an abrupt spike in intracranial pressure — hence the instantaneous headache and the transient loss of consciousness.',
          '2. Blood irritates the meninges, producing meningism over hours.',
          '3. Blood obstructs cerebrospinal fluid drainage at the arachnoid granulations, causing HYDROCEPHALUS.',
          '4. Breakdown products of blood irritate the arteries, causing VASOSPASM days later — see below.',
          '5. The aneurysm can REBLEED, and rebleeding is frequently fatal.',
        ],
        the_three_complications_by_timing: {
          rebleeding: 'Highest risk in the FIRST 24 HOURS and remains high for days. Mortality with rebleeding is very high. THIS IS WHY THE ANEURYSM IS SECURED URGENTLY rather than electively.',
          vasospasm_and_delayed_cerebral_ischaemia:
            'Typically days 3 TO 14, peaking around days 7 to 10. Blood breakdown products cause cerebral arteries to constrict, reducing perfusion and causing DELAYED INFARCTION. It presents as a new focal deficit or a falling conscious level in a patient who had been improving. It is the leading cause of disability in survivors, and it is what nimodipine is given to prevent.',
          hydrocephalus: 'Can be acute, from blood blocking cerebrospinal fluid flow, or chronic weeks later. Presents with falling consciousness and may need external ventricular drainage.',
        },
      },

      section_3_differentials: {
        one_subarachnoid_haemorrhage: 'WORKING DIAGNOSIS. Supporting: thunderclap onset, exertional trigger, vomiting, transient loss of consciousness, meningism, sentinel headache, family history, smoking and hypertension.',
        two_meningitis: 'Supporting: headache, neck stiffness, photophobia, vomiting. Against: the onset was INSTANTANEOUS rather than over hours, and she is afebrile. Both can present with meningism — the SPEED OF ONSET is the discriminator.',
        three_migraine: 'Supporting: headache, photophobia, vomiting. Against: she has never had one like this, and migraine BUILDS over minutes to hours rather than being maximal instantly. NEVER diagnose a first thunderclap headache as migraine.',
        four_cervical_artery_dissection: 'Supporting: sudden headache, often with neck pain. May cause Horner syndrome or stroke. Consider particularly after neck trauma or manipulation.',
        five_reversible_cerebral_vasoconstriction_syndrome: 'Causes RECURRENT thunderclap headaches, often triggered by exertion, sex or certain drugs. Diagnosed on angiography after subarachnoid haemorrhage is excluded.',
        six_venous_sinus_thrombosis: 'Headache with raised intracranial pressure, sometimes seizures. Consider in pregnancy, on the combined pill, or with thrombophilia.',
      },

      section_4_investigations: {
        immediate_non_contrast_ct_head: {
          why: 'To detect blood in the subarachnoid space.',
          expected: 'HYPERDENSE (bright white) blood in the basal cisterns, sylvian fissures and sulci. Acute blood is bright because it is denser than brain tissue on CT — around 50 to 80 Hounsfield units.',
          the_sensitivity_point_that_governs_everything:
            'CT SENSITIVITY DEPENDS ENTIRELY ON TIME. Within 6 hours of onset, using a modern scanner and an expert reporter, sensitivity approaches 99% or above. By 24 hours it falls to around 90%, by 3 days to about 80%, and by a week it is unreliable, because the blood is progressively broken down and reabsorbed. SCAN EARLY.',
          her_case: 'At 4 hours she is within the highest-sensitivity window.',
        },
        lumbar_puncture_if_the_ct_is_normal: {
          the_rule:
            'IF THE CT IS NORMAL BUT THE HISTORY IS CONVINCING, THE INVESTIGATION IS NOT OVER. Proceed to LUMBAR PUNCTURE — unless the scan was performed within 6 hours of onset and reported as definitively normal by an expert, in which case many services now accept that as sufficient. Follow local policy, but never let a normal CT alone close a convincing thunderclap history at 12 hours.',
          the_timing_which_is_the_whole_point:
            'PERFORM THE LUMBAR PUNCTURE AT LEAST 12 HOURS AFTER HEADACHE ONSET. WHY: you are looking for XANTHOCHROMIA — a yellow discolouration of the cerebrospinal fluid caused by BILIRUBIN, formed when red cells in the fluid break down. That breakdown TAKES TIME. Tapping too early gives fluid that has not yet turned yellow, producing a false negative.',
          what_xanthochromia_distinguishes:
            'It separates a genuine subarachnoid bleed from a TRAUMATIC TAP — blood introduced by the needle itself. In a traumatic tap the red cells have not been sitting in the fluid long enough to break down, so there is no bilirubin. Xanthochromia is detected properly by SPECTROPHOTOMETRY, not by holding the tube to the light, which is unreliable.',
          the_three_tube_technique:
            'Collect sequential numbered tubes. In a TRAUMATIC TAP the red cell count FALLS markedly from the first tube to the last, as the needle-induced bleeding clears. In a genuine subarachnoid haemorrhage the count stays roughly the SAME across all tubes. This is helpful but less reliable than xanthochromia.',
          also_send: 'Opening pressure, cell count, protein, glucose with a paired blood glucose, and culture — because meningitis remains in the differential.',
          contraindication: 'Do not perform a lumbar puncture if there are focal neurological signs, a reduced conscious level, or evidence of a mass or raised pressure on CT — the pressure gradient can precipitate herniation.',
        },
        ct_angiography: 'Once subarachnoid haemorrhage is confirmed, to identify the aneurysm and plan treatment. Digital subtraction angiography is the reference standard and is used when CT angiography is negative or when treatment is being delivered.',
        bloods_and_ecg: 'Full blood count, urea and electrolytes, clotting and group and save. ECG — subarachnoid haemorrhage causes striking ECG changes including deep T-wave inversion, ST changes and a long QT, and can cause NEUROGENIC STUNNED MYOCARDIUM. These changes are frequently mistaken for a primary cardiac event, and treating a subarachnoid haemorrhage as an acute coronary syndrome with antiplatelets and anticoagulation is catastrophic.',
      },

      section_5_management: {
        a_immediate: 'ABCDE. Nurse in a quiet environment with the head of the bed at 30 degrees. Analgesia — paracetamol and opioids as needed; AVOID non-steroidal anti-inflammatory drugs because they inhibit platelets and increase rebleeding risk. Antiemetic. Strict bed rest until the aneurysm is secured. URGENT NEUROSURGICAL REFERRAL — telephone, do not email.',
        b_nimodipine: {
          drug: 'NIMODIPINE 60 mg orally every 4 hours for 21 days.',
          what_it_is: 'A dihydropyridine calcium channel blocker that is LIPOPHILIC and therefore crosses the blood-brain barrier, acting preferentially on cerebral vessels.',
          why_it_is_given:
            'It reduces DELAYED CEREBRAL ISCHAEMIA and improves neurological outcome. Note carefully: the evidence is for BETTER OUTCOMES, and the mechanism may be neuroprotective as much as purely anti-vasospastic — it does not simply prevent arteries narrowing. GIVE IT TO EVERY PATIENT WITH ANEURYSMAL SUBARACHNOID HAEMORRHAGE unless contraindicated.',
          monitoring: 'It causes HYPOTENSION. Monitor blood pressure closely — if it drops significantly, reduce the dose or give it more frequently at a lower dose rather than stopping it altogether. Continue for the full 21 days, spanning the vasospasm window.',
          route: 'Oral or by nasogastric tube. The intravenous preparation is used only in specific circumstances and requires central access.',
        },
        c_blood_pressure: {
          before_the_aneurysm_is_secured:
            'Aim to avoid extremes. Marked hypertension increases rebleeding risk, so systolic is usually kept below about 160 mmHg using a titratable agent such as intravenous labetalol. But do NOT drop it aggressively, because cerebral perfusion pressure must be maintained. Pain and anxiety raise blood pressure, so treat those first — good analgesia is a blood pressure treatment here.',
          after_it_is_secured: 'The emphasis shifts to maintaining adequate perfusion to prevent delayed ischaemia, and blood pressure is generally allowed to run higher.',
        },
        d_securing_the_aneurysm: {
          the_urgency: 'Ideally within 24 to 72 hours, because rebleeding risk is highest early and is frequently fatal.',
          endovascular_coiling: 'Platinum coils are packed into the aneurysm sac via a catheter from the groin, causing it to thrombose. Less invasive, and for many aneurysms it produces better outcomes than surgery.',
          surgical_clipping: 'A craniotomy is performed and a metal clip placed across the aneurysm neck. Preferred for some anatomies, for large haematomas needing evacuation, and where coiling is not feasible.',
          the_decision: 'Made by a neurovascular multidisciplinary team based on aneurysm location, size, shape and patient factors.',
        },
        e_fluids_and_sodium: {
          fluids: 'Maintain EUVOLAEMIA with isotonic fluid. Avoid hypovolaemia, which worsens delayed cerebral ischaemia, and avoid hypotonic fluids, which worsen cerebral oedema.',
          hyponatraemia: 'Common after subarachnoid haemorrhage, and the cause matters. CEREBRAL SALT WASTING involves genuine salt and volume LOSS and is treated with salt and fluid REPLACEMENT. The SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE involves water RETENTION and is treated with fluid RESTRICTION. GETTING THIS BACKWARDS IS DANGEROUS: fluid-restricting a patient with cerebral salt wasting causes hypovolaemia and precipitates delayed cerebral ischaemia. Assess volume status carefully and take specialist advice.',
        },
        f_monitoring_for_the_complications: 'Hourly neurological observations. A NEW FOCAL DEFICIT OR FALLING CONSCIOUS LEVEL between days 3 and 14 is DELAYED CEREBRAL ISCHAEMIA until proven otherwise, and needs urgent imaging and escalation. Watch also for hydrocephalus, seizures, and the cardiac and respiratory complications of the catecholamine surge.',
        g_after_discharge: {
          modifiable_risks: 'SMOKING CESSATION and BLOOD PRESSURE CONTROL are the two interventions that reduce the risk of further aneurysm formation and rupture. Both are essential, and both are frequently reduced to a sentence.',
          screening_relatives:
            'She has a first-degree relative who died of a brain haemorrhage. Screening of first-degree relatives with magnetic resonance angiography may be considered where there are TWO OR MORE affected first-degree relatives, or in specific conditions such as autosomal dominant polycystic kidney disease. This is a specialist decision with real psychological consequences, and it should be discussed rather than simply arranged.',
          recovery: 'Even patients with a good grade often have lasting fatigue, cognitive difficulty, mood disturbance and headache. Warn them, and arrange follow-up — these problems are real, common and routinely dismissed.',
        },
      },

      section_6_teaching_points: {
        bonus_1_thunderclap_is_defined_by_speed_not_severity:
          'A headache MAXIMAL WITHIN ONE MINUTE of onset is a thunderclap headache and must be investigated for subarachnoid haemorrhage. Ask "did it come on like a switch?" Severity alone is far less discriminating — plenty of migraines are agonising, but they build.',
        bonus_2_ct_sensitivity_falls_with_time:
          'Near 99% within 6 hours, roughly 90% at 24 hours, about 80% at 3 days, and unreliable by a week, because blood is progressively broken down. This is why the scan is urgent and why a normal CT at 3 days means very little.',
        bonus_3_why_the_lumbar_puncture_waits_12_hours:
          'XANTHOCHROMIA is bilirubin formed as red cells in the cerebrospinal fluid break down, and that takes time. Tapping before 12 hours risks a false negative. It is also what distinguishes a real bleed from a TRAUMATIC TAP, in which the cells have not had time to break down.',
        bonus_4_subhyaloid_haemorrhage_and_terson_syndrome:
          'Look at the fundi. SUBHYALOID (preretinal) HAEMORRHAGES are well-demarcated boat-shaped haemorrhages in front of the retina, caused by the sudden rise in intracranial pressure being transmitted along the optic nerve sheath and obstructing venous return. Extensive intraocular bleeding in this setting is TERSON SYNDROME, which is associated with a worse prognosis and can permanently affect vision if unrecognised. Two seconds with an ophthalmoscope can find it.',
        bonus_5_the_ecg_trap:
          'Subarachnoid haemorrhage causes deep T-wave inversion, ST changes and a long QT, and can stun the myocardium with a rise in troponin. These are regularly mistaken for an acute coronary syndrome. Giving antiplatelets and anticoagulation to a patient with an intracranial bleed is catastrophic. If the headache came first, believe the headache.',
        trap_1: 'Never diagnose a FIRST thunderclap headache as migraine.',
        trap_2: 'Ask about a SENTINEL HEADACHE in the preceding weeks — recognising it prevents the catastrophic bleed.',
        trap_3: 'Avoid non-steroidal anti-inflammatory drugs for the pain — they inhibit platelets and increase rebleeding risk.',
        trap_4: 'Do not fluid-restrict hyponatraemia here without establishing the cause. Cerebral salt wasting needs salt and fluid; restricting it precipitates delayed cerebral ischaemia.',
        trap_5: 'A new deficit on days 3 to 14 is delayed cerebral ischaemia until proven otherwise — not "post-operative confusion".',
        trap_6: 'Kernig and Brudzinski signs are insensitive. Their absence excludes nothing.',
        one_line_summary: 'Aneurysmal subarachnoid haemorrhage at 4 hours. CT now while sensitivity is highest, lumbar puncture at 12 hours if it is negative and the story is convincing, nimodipine for 21 days, urgent neurosurgery to secure the aneurysm — and look at the fundi.',
      },
    },
    warnings: [
      'A headache MAXIMAL WITHIN ONE MINUTE is a thunderclap headache and must be investigated for subarachnoid haemorrhage.',
      'CT sensitivity falls with time — near 99% within 6 hours, about 80% at 3 days, unreliable by a week. Scan early.',
      'A normal CT does NOT close a convincing thunderclap history beyond 6 hours — proceed to lumbar puncture.',
      'Perform the lumbar puncture at least 12 HOURS after onset — xanthochromia takes time to develop and an early tap gives a false negative.',
      'Never diagnose a FIRST thunderclap headache as migraine.',
      'Ask about a SENTINEL HEADACHE in the preceding weeks — it is the warning leak before the fatal bleed.',
      'AVOID non-steroidal anti-inflammatory drugs — they inhibit platelets and increase rebleeding risk.',
      'Give NIMODIPINE 60 mg every 4 hours for 21 days to every aneurysmal subarachnoid haemorrhage unless contraindicated.',
      'A new focal deficit or falling consciousness on days 3 to 14 is delayed cerebral ischaemia until proven otherwise.',
      'Do not fluid-restrict hyponatraemia without establishing the cause — cerebral salt wasting needs salt and fluid, and restricting it precipitates ischaemia.',
      'Subarachnoid haemorrhage causes ECG changes and troponin rise that mimic acute coronary syndrome. Antiplatelets and anticoagulation here are catastrophic.',
      'Kernig and Brudzinski signs are insensitive — their absence excludes nothing.',
      'Doses here are teaching examples for an adult. Follow your local neurosurgical protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. CT-only rule-out policies, lumbar puncture timing and blood pressure targets differ between services.',
      'Aneurysm treatment decisions are made by a neurovascular multidisciplinary team.',
    ],
    cards: [
      { q: 'Define a thunderclap headache.', a: 'A headache reaching maximum intensity within one minute of onset.' },
      { q: 'How does CT sensitivity change with time?', a: 'Near 99% within 6 hours, about 90% at 24 hours, 80% at 3 days, unreliable by a week.' },
      { q: 'Why is the lumbar puncture delayed to 12 hours?', a: 'Xanthochromia is bilirubin from red cell breakdown, which takes time — an early tap gives a false negative.' },
      { q: 'What does xanthochromia distinguish?', a: 'A genuine subarachnoid bleed from a traumatic tap, where cells have not had time to break down.' },
      { q: 'What is the three-tube technique?', a: 'Red cell count falls across tubes in a traumatic tap but stays constant in a real bleed.' },
      { q: 'What is a sentinel headache?', a: 'A small warning leak days to weeks before major rupture, often dismissed as migraine.' },
      { q: 'Give the nimodipine regimen and its purpose.', a: '60 mg orally every 4 hours for 21 days, to reduce delayed cerebral ischaemia and improve outcome.' },
      { q: 'When does vasospasm occur?', a: 'Days 3 to 14, peaking around days 7 to 10.' },
      { q: 'Cerebral salt wasting versus SIADH — why does it matter?', a: 'Salt wasting needs salt and fluid replacement; SIADH needs restriction. Restricting salt wasting precipitates delayed cerebral ischaemia.' },
      { q: 'What is Terson syndrome?', a: 'Intraocular haemorrhage accompanying subarachnoid haemorrhage — associated with worse prognosis.' },
      { q: 'Why is the ECG dangerous in subarachnoid haemorrhage?', a: 'It mimics acute coronary syndrome, and giving antiplatelets or anticoagulation to an intracranial bleed is catastrophic.' },
    ],
    checks: [
      'Speed of onset established precisely',
      'Sentinel headache asked about',
      'Family history of aneurysm or polycystic kidney disease taken',
      'Immediate non-contrast CT head',
      'Lumbar puncture timed at 12 hours or later if CT negative',
      'Fundi examined for subhyaloid haemorrhage',
      'NSAIDs avoided for analgesia',
      'Nimodipine started and blood pressure monitored',
      'Urgent neurosurgical referral by telephone',
      'Hourly neurological observations for delayed cerebral ischaemia',
      'Sodium monitored with volume status assessed before treating hyponatraemia',
      'Smoking cessation and blood pressure control arranged',
    ],
    related: ['raised_intracranial_pressure_the_monro_kellie_doctrine_cushing_reflex_and_herniation'],
  },
];
