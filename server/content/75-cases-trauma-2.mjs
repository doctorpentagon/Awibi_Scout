/**
 * CASE SCENARIOS — Head injury and chest trauma.
 *
 * Batch 4, part 4.
 */

export default [
  {
    id: 'AS-CASE-0037',
    type: 'case',
    specialty: 'Surgery — Trauma',
    teaching_case: true,
    title: 'CASE: Knocked Out, Woke Up, Talked — Now Drowsy Again',
    short: 'Case: extradural haematoma and head injury',
    summary:
      'A 19-year-old with a lucid interval after a temporal blow. Teaches why the lucid interval is the classic trap, what the Cushing reflex means, why hyperventilation is a bridge and not a treatment, and why hypotension and hypoxia do more damage than the clot.',
    domains: ['trauma', 'neurosurgery', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case extradural haematoma', 'epidural haematoma case', 'lucid interval case',
      'head injury case', 'cushing reflex', 'uncal herniation', 'blown pupil',
      'middle meningeal artery', 'lens shaped haematoma', 'monro kellie',
    ],
    terms: [
      'case', 'extradural haematoma', 'epidural haematoma', 'subdural haematoma',
      'lucid interval', 'middle meningeal artery', 'pterion', 'biconvex', 'lentiform',
      'cushing reflex', 'uncal herniation', 'third nerve palsy', 'monro kellie doctrine',
      'cerebral perfusion pressure', 'secondary brain injury', 'hyperventilation',
      'hypertonic saline', 'mannitol', 'burr hole', 'craniotomy',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '19-year-old struck on the left side of the head with a bat. Knocked out for about a minute, then fully alert and talking normally for 90 minutes. He has now become drowsy, vomited twice, and his right arm is weak.',

      section_1_clerking: {
        the_pattern_that_defines_the_case: {
          the_lucid_interval:
            'BRIEF LOSS OF CONSCIOUSNESS AT IMPACT (from concussion) · THEN A PERIOD OF NORMAL OR NEAR-NORMAL CONSCIOUSNESS LASTING MINUTES TO HOURS (the LUCID INTERVAL) · THEN PROGRESSIVE DETERIORATION as the haematoma expands.',
          why_it_happens: 'The initial knockout is CONCUSSION — a transient functional disturbance that recovers. The subsequent deterioration is the MASS EFFECT of an enlarging arterial clot. The two are separate events, which is why there is a gap between them.',
          why_it_is_dangerous:
            'DURING THE LUCID INTERVAL THE PATIENT LOOKS COMPLETELY WELL. THEY ARE REASSURED, DISCHARGED, OR PLACED IN A CORRIDOR TO WAIT. THE LUCID INTERVAL IS THE PERIOD IN WHICH THE DIAGNOSIS SHOULD BE MADE AND THE OPERATION ARRANGED — AND IT IS THE PERIOD IN WHICH THE OPPORTUNITY IS MOST OFTEN LOST. A patient who was knocked out and then seemed fine is not a patient who is fine.',
          the_honest_caveat: 'IT IS PRESENT IN ONLY A MINORITY — perhaps a third — OF EXTRADURAL HAEMATOMAS. ITS ABSENCE EXCLUDES NOTHING. Many patients never regain consciousness, and some never lose it initially.',
        },
        history: 'Struck once with a bat to the left temple. Immediate loss of consciousness for about a minute, witnessed. Then got up, talked normally, walked to the ambulance and gave a clear account. Over the last 20 minutes he has become increasingly drowsy and confused, has vomited twice and complains of severe headache.',
        the_features_that_matter: 'MECHANISM AND SITE OF IMPACT · duration of loss of consciousness · AMNESIA — both retrograde (before) and post-traumatic (after), the latter being a marker of injury severity · SEIZURES · vomiting, particularly repeated · severe or worsening headache · ANTICOAGULANTS OR ANTIPLATELETS, which transform a trivial injury into a fatal one · alcohol or drugs, which confuse assessment but must never be assumed as the cause of drowsiness · and any focal neurological symptom.',
        vitals: 'BP 168/72 mmHg — A WIDE PULSE PRESSURE. Pulse 52 — BRADYCARDIA. Respiratory rate 10 and irregular. Saturation 96%. GCS 10 (E2 V3 M5), having been 15 twenty minutes ago. Glucose 5.6. Left pupil 6 mm and sluggish.',
        the_cushing_reflex_which_is_a_terminal_sign: {
          the_triad: 'HYPERTENSION WITH A WIDENING PULSE PRESSURE · BRADYCARDIA · IRREGULAR OR DEPRESSED RESPIRATION.',
          why_it_happens:
            'As intracranial pressure rises towards mean arterial pressure, cerebral perfusion fails. The brainstem responds with a MASSIVE SYMPATHETIC SURGE to raise systemic pressure and restore perfusion — hence the HYPERTENSION. The resulting high pressure stimulates baroreceptors, which reflexly slow the heart — hence the BRADYCARDIA. Brainstem compression then disturbs the respiratory centre — hence the IRREGULAR BREATHING.',
          what_it_means_clinically:
            'IT IS A LATE AND PRE-TERMINAL SIGN OF CRITICALLY RAISED INTRACRANIAL PRESSURE AND IMPENDING HERNIATION. IT IS NOT A SIGN TO WAIT FOR — IT IS A SIGN THAT YOU ARE ALREADY VERY LATE. AND CRITICALLY: DO NOT TREAT THE HYPERTENSION. It is the brain maintaining its own perfusion, and lowering it removes the last thing keeping the brainstem alive. TREAT THE PRESSURE INSIDE THE SKULL, NOT THE PRESSURE IN THE ARM.',
        },
        examination: {
          pupils: {
            the_finding: 'LEFT PUPIL DILATED AND SLUGGISH, PROGRESSING TO FIXED AND DILATED — a "BLOWN" PUPIL.',
            the_mechanism:
              'UNCAL HERNIATION. The expanding clot pushes the UNCUS of the temporal lobe medially over the free edge of the tentorium. The OCULOMOTOR NERVE (third cranial nerve) runs there and is compressed. The PARASYMPATHETIC FIBRES, which constrict the pupil, run SUPERFICIALLY on the nerve and are therefore compressed FIRST — so the earliest sign is a SLUGGISH then DILATED pupil, BEFORE the eye movement palsy appears.',
            the_side_rule: 'THE DILATED PUPIL IS USUALLY ON THE SAME SIDE AS THE CLOT — an IPSILATERAL blown pupil. THE LIMB WEAKNESS IS USUALLY ON THE OPPOSITE SIDE. He has a LEFT blown pupil and RIGHT arm weakness, consistent with a LEFT-sided haematoma.',
            the_exception_worth_knowing: 'KERNOHAN NOTCH PHENOMENON — the brainstem is pushed against the opposite tentorial edge, producing weakness on the SAME side as the clot. This is a FALSE LOCALISING SIGN and can lead to operating on the wrong side. IT IS ANOTHER REASON THE CT, NOT THE EXAMINATION, DETERMINES WHICH SIDE IS OPENED.',
          },
          gcs: 'E2 V3 M5 = 10. RECORD THE THREE COMPONENTS SEPARATELY, NOT JUST THE TOTAL — a GCS of 10 made up of E4 V5 M1 is a completely different patient from E2 V3 M5, and the MOTOR score carries the most prognostic weight. A FALLING GCS, particularly a drop of 2 or more points, IS THE FINDING, more than any absolute number.',
          scalp_and_skull: 'Boggy swelling over the left temple. LOOK FOR SIGNS OF BASE OF SKULL FRACTURE: PERIORBITAL BRUISING (RACCOON EYES), BRUISING OVER THE MASTOID (BATTLE SIGN, which takes hours to appear), BLOOD BEHIND THE EARDRUM (HAEMOTYMPANUM), and CEREBROSPINAL FLUID LEAK FROM NOSE OR EAR.',
          limbs: 'Right arm weakness with increased tone. Left side moving normally.',
          the_rest: 'THIS IS STILL A TRAUMA PATIENT — complete the primary survey. Cervical spine immobilisation. Look for other injuries. A HEAD INJURY DOES NOT EXPLAIN HYPOTENSION — if the patient is hypotensive, they are bleeding somewhere else.',
        },
      },

      section_2_mechanism: {
        the_monro_kellie_doctrine: {
          the_statement: 'THE SKULL IS A RIGID BOX OF FIXED VOLUME CONTAINING THREE THINGS: BRAIN (about 80%), BLOOD (about 10%) AND CEREBROSPINAL FLUID (about 10%). THE TOTAL VOLUME IS CONSTANT. IF ONE COMPONENT INCREASES, ANOTHER MUST DECREASE OR THE PRESSURE RISES.',
          the_compensation_phase: 'Initially, cerebrospinal fluid is displaced into the spinal subarachnoid space and venous blood is squeezed out. During this phase the pressure barely rises AND THE PATIENT LOOKS WELL — WHICH IS THE PHYSIOLOGICAL BASIS OF THE LUCID INTERVAL.',
          the_decompensation_phase:
            'ONCE COMPENSATION IS EXHAUSTED, A SMALL FURTHER INCREASE IN VOLUME CAUSES A STEEP RISE IN PRESSURE. THE CURVE IS EXPONENTIAL, NOT LINEAR. THIS IS WHY DETERIORATION IS SUDDEN AND CATASTROPHIC RATHER THAN GRADUAL — the patient goes from talking to herniating over minutes.',
        },
        the_extradural_haematoma_specifically: {
          the_vessel: 'Classically the MIDDLE MENINGEAL ARTERY, torn where it runs in a groove on the inner table of the skull beneath the PTERION.',
          the_pterion: 'THE JUNCTION OF THE FRONTAL, PARIETAL, TEMPORAL AND SPHENOID BONES ON THE LATERAL SKULL — THE THINNEST PART OF THE SKULL, lying roughly two finger-breadths above the zygomatic arch and a thumb-breadth behind the frontal process of the zygoma. A blow here fractures the thin bone and lacerates the artery beneath. THAT IS WHY A TEMPORAL BLOW IS SO DANGEROUS.',
          the_shape_on_ct: 'BICONVEX (LENS-SHAPED, LENTIFORM) and DOES NOT CROSS SUTURE LINES, because the dura is firmly attached to the skull at the sutures and the blood cannot strip past them. It CAN cross the midline and the tentorium, unlike a subdural.',
          the_pressure: 'It is ARTERIAL bleeding under systemic pressure, which is why it expands quickly and why deterioration is rapid.',
        },
        contrast_with_subdural_haematoma: {
          the_vessel: 'Tearing of the BRIDGING VEINS crossing from the cortex to the dural venous sinuses — VENOUS, therefore LOWER PRESSURE and SLOWER.',
          the_shape: 'CRESCENTIC (concave over the brain surface) and CROSSES SUTURE LINES, because it lies beneath the dura, but does NOT cross the midline, because the falx blocks it.',
          the_population: 'ELDERLY and ALCOHOL-DEPENDENT patients, in whom brain atrophy stretches the bridging veins and increases the space they traverse — so a minor injury tears them. CHRONIC SUBDURAL HAEMATOMA presents WEEKS after a trivial or forgotten injury, with headache, confusion, gait disturbance or a fluctuating conscious level. IT IS A CLASSIC MIMIC OF DEMENTIA OR STROKE IN AN OLDER PERSON, IT IS TREATABLE, AND IT IS MISSED BECAUSE NOBODY ASKS ABOUT A FALL THREE WEEKS AGO.',
          the_prognosis_paradox: 'AN EXTRADURAL HAEMATOMA OFTEN HAS A BETTER PROGNOSIS THAN AN ACUTE SUBDURAL, DESPITE BEING ARTERIAL AND FASTER. The reason is that the extradural strips dura off bone without necessarily damaging the underlying brain, whereas an acute subdural results from forces that also cause severe underlying brain injury. THE OUTCOME DEPENDS ON THE BRAIN, NOT THE CLOT.',
        },
        primary_and_secondary_brain_injury: {
          primary: 'The damage done at the moment of impact — contusion, laceration, diffuse axonal injury. IT CANNOT BE UNDONE. Prevention is the only intervention: helmets, seatbelts, speed.',
          secondary: {
            what_it_is: 'DAMAGE OCCURRING AFTER THE IMPACT from HYPOXIA, HYPOTENSION, HYPERCAPNIA, HYPOGLYCAEMIA AND HYPERGLYCAEMIA, HYPERTHERMIA, SEIZURES, RAISED INTRACRANIAL PRESSURE AND HYPONATRAEMIA.',
            why_it_dominates_management:
              'SECONDARY INJURY IS ENTIRELY PREVENTABLE, AND IT DETERMINES OUTCOME AS MUCH AS THE ORIGINAL INJURY. A SINGLE EPISODE OF SYSTOLIC BLOOD PRESSURE BELOW 90 mmHg ROUGHLY DOUBLES MORTALITY AFTER SEVERE HEAD INJURY; a single episode of hypoxia does similar harm. THE MOST IMPORTANT THINGS YOU DO FOR A HEAD-INJURED BRAIN ARE OXYGENATE IT AND PERFUSE IT — which are within the reach of every clinician, unlike neurosurgery.',
          },
          cerebral_perfusion_pressure: 'CPP = MEAN ARTERIAL PRESSURE MINUS INTRACRANIAL PRESSURE. That equation is the whole of head injury management in one line: you can either RAISE the mean arterial pressure or LOWER the intracranial pressure, and both are being attempted simultaneously. It also explains why hypotension is so catastrophic — it directly subtracts from perfusion.',
        },
      },

      section_3_investigations: {
        the_ct_head: {
          the_rule: 'IMMEDIATE NON-CONTRAST CT HEAD. In a deteriorating patient with a falling GCS and a dilating pupil, THIS IS THE MOST URGENT INVESTIGATION IN THE HOSPITAL AND SHOULD BE PERFORMED WITHIN MINUTES, WITH THE NEUROSURGEONS TELEPHONED IN PARALLEL RATHER THAN AFTERWARDS.',
          the_common_indications_for_urgent_ct_after_head_injury: 'GCS below 13 at any point, or below 15 at 2 hours · SUSPECTED OPEN, DEPRESSED OR BASE OF SKULL FRACTURE · POST-TRAUMATIC SEIZURE · FOCAL NEUROLOGICAL DEFICIT · MORE THAN ONE EPISODE OF VOMITING · and, with a history of loss of consciousness or amnesia, additional risk factors such as AGE OVER 65, ANTICOAGULATION, DANGEROUS MECHANISM, or retrograde amnesia over 30 minutes. LOCAL AND NATIONAL CRITERIA VARY — KNOW YOURS.',
          the_anticoagulation_rule: 'ANY HEAD INJURY IN AN ANTICOAGULATED PATIENT WARRANTS A LOW THRESHOLD FOR CT, EVEN WITH A NORMAL GCS AND A TRIVIAL MECHANISM, and many guidelines mandate it. A patient on warfarin or a direct oral anticoagulant who bangs their head and feels fine can have a fatal bleed hours later.',
          what_you_are_looking_for: 'The haematoma and its shape · MIDLINE SHIFT · effacement of the basal cisterns, which is an important marker of raised pressure · contusions · subarachnoid blood · diffuse axonal injury · skull fractures · and pneumocephalus.',
        },
        the_rest: 'Bloods including full blood count, urea and electrolytes, GLUCOSE, CLOTTING AND GROUP AND SAVE. ALCOHOL AND TOXICOLOGY where relevant — but never as an explanation for drowsiness until the CT is done. CERVICAL SPINE IMAGING, since head injury and cervical injury coexist. Whole-body CT if the mechanism warrants it.',
      },

      section_4_management: {
        a_the_priorities: 'AIRWAY, OXYGENATION AND PERFUSION COME FIRST, BECAUSE THEY PREVENT SECONDARY INJURY. THEN LOWER THE INTRACRANIAL PRESSURE. THEN GET THE CLOT OUT.',
        b_airway_and_ventilation: {
          intubate: 'A GCS OF 8 OR LESS, OR A FALLING GCS, OR LOSS OF AIRWAY REFLEXES, MANDATES A DEFINITIVE AIRWAY. HE IS AT 10 AND FALLING — INTUBATE NOW RATHER THAN WATCHING HIM REACH 8.',
          the_targets: 'MAINTAIN OXYGEN SATURATION ABOVE 94% and PaO2 above roughly 13 kPa. MAINTAIN NORMOCAPNIA — a PaCO2 around 4.5 to 5.0 kPa. CAPNOGRAPHY IS ESSENTIAL.',
          why_carbon_dioxide_matters_so_much:
            'CEREBRAL BLOOD VESSELS ARE EXQUISITELY SENSITIVE TO CARBON DIOXIDE. HYPERCAPNIA CAUSES CEREBRAL VASODILATATION, INCREASING CEREBRAL BLOOD VOLUME AND THEREFORE INTRACRANIAL PRESSURE — so a patient who is hypoventilating is actively raising their own intracranial pressure. HYPOCAPNIA CAUSES VASOCONSTRICTION, reducing blood volume and pressure — but ALSO REDUCING CEREBRAL BLOOD FLOW, WHICH CAUSES ISCHAEMIA.',
          hyperventilation_as_a_bridge_not_a_treatment:
            'BRIEF, MILD HYPERVENTILATION TO A PaCO2 AROUND 4.0 TO 4.5 kPa CAN BUY MINUTES IN A PATIENT WHO IS ACTIVELY HERNIATING, WHILE DEFINITIVE TREATMENT IS ARRANGED. PROLONGED OR AGGRESSIVE HYPERVENTILATION CAUSES CEREBRAL ISCHAEMIA AND WORSENS OUTCOME. IT IS A BRIDGE TO THEATRE, MEASURED IN MINUTES, NOT A MANAGEMENT STRATEGY.',
        },
        c_perfusion: 'MAINTAIN AN ADEQUATE MEAN ARTERIAL PRESSURE. AVOID HYPOTENSION ABSOLUTELY. Use isotonic fluid and blood as needed; vasopressors if required. AVOID HYPOTONIC FLUIDS AND GLUCOSE-CONTAINING SOLUTIONS, because free water crosses into brain tissue and worsens cerebral oedema. DO NOT TREAT THE HYPERTENSION OF THE CUSHING REFLEX.',
        d_measures_to_lower_intracranial_pressure: {
          positioning: 'HEAD UP 30 DEGREES to promote venous drainage. KEEP THE NECK STRAIGHT AND MIDLINE, AND ENSURE NOTHING COMPRESSES THE JUGULAR VEINS — a tight cervical collar or tape can obstruct venous outflow and raise intracranial pressure, which is a genuine and under-recognised harm of collars.',
          sedation_and_analgesia: 'Adequate sedation and analgesia reduce cerebral metabolic demand and prevent surges in pressure from coughing, straining and pain.',
          osmotic_therapy: {
            mannitol: 'MANNITOL 0.25 to 1 g/kg intravenously. It draws water out of brain tissue osmotically. It also causes a DIURESIS, so it can cause HYPOVOLAEMIA AND HYPOTENSION — which is precisely what you must not allow. Monitor volume status and serum osmolality.',
            hypertonic_saline: 'HYPERTONIC SALINE, for example 3% or 5%, is increasingly preferred because it lowers pressure WITHOUT causing hypovolaemia, and may even support blood pressure. Monitor sodium closely.',
            the_status_of_both: 'THESE ARE TEMPORISING MEASURES TO BUY TIME FOR DEFINITIVE TREATMENT. THEY DO NOT REMOVE THE CLOT.',
          },
          seizure_control: 'Seizures dramatically increase cerebral metabolic demand and intracranial pressure. Treat them promptly. Prophylactic anticonvulsants reduce EARLY post-traumatic seizures in selected severe injuries, though they do not improve long-term outcome — a neurosurgical decision.',
          other: 'Treat fever aggressively, since hyperthermia worsens injury. Maintain normoglycaemia. Correct coagulopathy urgently — REVERSE ANTICOAGULATION IMMEDIATELY in a bleeding head injury; this is one of the clearest indications for prothrombin complex concentrate and vitamin K, or a specific reversal agent.',
          steroids: 'CORTICOSTEROIDS ARE CONTRAINDICATED IN TRAUMATIC BRAIN INJURY. The CRASH trial showed INCREASED MORTALITY. They remain useful for oedema around tumours, but not in trauma — a distinction that is regularly confused.',
        },
        e_the_definitive_treatment: {
          the_operation: 'URGENT CRANIOTOMY AND EVACUATION OF THE HAEMATOMA, with control of the bleeding vessel. It is one of the most rewarding operations in surgery: a young patient who is herniating can make a complete recovery if the clot is removed in time.',
          the_urgency: 'TIME FROM DETERIORATION TO EVACUATION IS THE STRONGEST DETERMINANT OF OUTCOME. Every minute of herniation causes irreversible brainstem injury.',
          transfer: 'TELEPHONE THE NEUROSURGICAL UNIT DIRECTLY AND EARLY — do not wait for the formal CT report, and send the images electronically. Transfer a stabilised, intubated, ventilated patient with an escort competent to manage them. DO NOT DELAY TRANSFER FOR NON-ESSENTIAL INVESTIGATIONS.',
          burr_holes: 'Emergency burr hole decompression by a non-neurosurgeon is a last resort, appropriate only where transfer is impossible and the patient is dying, and only with remote neurosurgical guidance. It is mentioned here because in some settings it is the only option, not because it is routine.',
        },
        f_the_patient_who_is_discharged: {
          the_point: 'MOST HEAD INJURIES ARE MINOR AND GO HOME. THE DISCHARGE ADVICE IS THE SAFETY NET AND IS OFTEN GIVEN CARELESSLY.',
          the_requirements: 'A RESPONSIBLE ADULT TO OBSERVE THEM FOR 24 HOURS. WRITTEN head injury advice, not just verbal. CLEAR INSTRUCTIONS TO RETURN IMMEDIATELY for: worsening headache, repeated vomiting, drowsiness or difficulty waking, confusion, weakness or numbness, visual disturbance, seizure, clear fluid from nose or ear, or unusual behaviour. NO ALCOHOL, no driving, and advice on return to work, school and SPORT.',
          concussion_and_return_to_sport: 'GRADUATED RETURN-TO-PLAY PROTOCOLS EXIST FOR GOOD REASON. SECOND IMPACT SYNDROME — a second head injury before the first has resolved — can cause catastrophic cerebral swelling in young people. "IF IN DOUBT, SIT THEM OUT."',
        },
      },

      section_5_teaching_points: {
        bonus_1_the_lucid_interval_is_when_the_diagnosis_should_be_made:
          'Knockout from concussion, recovery, then deterioration from an expanding arterial clot — two separate events with a gap between them. During that gap the patient looks well and gets reassured or left waiting. It is present in only about a third of cases, so its absence excludes nothing, but its presence should never be reassuring.',
        bonus_2_monro_kellie_explains_why_deterioration_is_sudden:
          'Cerebrospinal fluid and venous blood are displaced first, so pressure barely rises and the patient looks fine. Once compensation is exhausted, the pressure-volume curve turns exponential, and a small further increase causes catastrophic decompensation over minutes.',
        bonus_3_the_cushing_reflex_is_pre_terminal_and_must_not_be_treated:
          'Hypertension with widening pulse pressure, bradycardia and irregular respiration mean the brainstem is compressed and perfusion is failing. The hypertension is the brain keeping itself alive. Lowering it removes the last compensation. Treat the pressure inside the skull, not the pressure in the arm.',
        bonus_4_why_the_pupil_blows_before_the_eye_stops_moving:
          'The parasympathetic pupilloconstrictor fibres run SUPERFICIALLY on the oculomotor nerve, so external compression at the tentorial edge affects them first. A sluggish then dilated pupil precedes the eye movement palsy — which is why pupils are checked repeatedly, not once.',
        bonus_5_secondary_injury_is_what_you_can_actually_change:
          'Primary injury happened at impact and cannot be undone. A single systolic below 90 roughly doubles mortality, and hypoxia does similar harm. Oxygenating and perfusing the brain is available to every clinician and matters as much as the operation.',
        bonus_6_carbon_dioxide_is_a_cerebral_vasoactive_drug:
          'Hypercapnia vasodilates and raises intracranial pressure — so a hypoventilating patient is raising their own pressure. Hypocapnia vasoconstricts and lowers it, but causes ischaemia. Brief mild hyperventilation is a bridge to theatre measured in minutes, never a strategy.',
        bonus_7_extradural_versus_subdural_in_one_line_each:
          'EXTRADURAL: middle meningeal ARTERY at the PTERION, BICONVEX, does NOT cross sutures, young patients, rapid. SUBDURAL: BRIDGING VEINS, CRESCENTIC, CROSSES sutures but not the midline, elderly and alcohol-dependent, slower — and chronic subdural mimics dementia or stroke weeks after a forgotten fall.',
        trap_1: 'STEROIDS ARE CONTRAINDICATED in traumatic brain injury — the CRASH trial showed increased mortality. They help oedema around tumours, not trauma.',
        trap_2: 'A head injury does NOT explain hypotension. A hypotensive trauma patient is bleeding somewhere else.',
        trap_3: 'Record the three GCS components separately — the motor score carries the most prognostic weight, and a FALLING GCS matters more than any absolute number.',
        trap_4: 'Never attribute drowsiness to alcohol or drugs before the CT.',
        trap_5: 'A tight collar or tape can obstruct jugular venous drainage and raise intracranial pressure.',
        trap_6: 'Kernohan notch phenomenon can put the weakness on the SAME side as the clot — the CT, not the examination, decides which side is opened.',
        trap_7: 'ANY head injury on anticoagulants needs a low threshold for CT, however trivial the mechanism.',
        trap_8: 'Discharge advice is the safety net — written instructions and a responsible adult for 24 hours.',
        one_line_summary: 'Extradural haematoma with a lucid interval and uncal herniation. Intubate now rather than waiting for GCS 8, oxygenate and perfuse to prevent secondary injury, osmotic therapy and brief hyperventilation as a bridge, and telephone the neurosurgeons while the scan is happening.',
      },
    },
    warnings: [
      'THE LUCID INTERVAL IS WHEN THE DIAGNOSIS SHOULD BE MADE — the patient looks well and gets discharged or left waiting.',
      'Its ABSENCE excludes nothing — it occurs in only about a third of extradural haematomas.',
      'THE CUSHING REFLEX IS PRE-TERMINAL — and DO NOT TREAT THE HYPERTENSION. It is the brain keeping itself perfused.',
      'A FALLING GCS matters more than any absolute number — record the three components separately.',
      'INTUBATE AT GCS 8 OR LESS, OR IF FALLING — do not wait to reach 8.',
      'A SINGLE EPISODE OF SYSTOLIC BELOW 90 ROUGHLY DOUBLES MORTALITY after severe head injury.',
      'HYPERCAPNIA RAISES INTRACRANIAL PRESSURE — a hypoventilating patient is raising their own pressure.',
      'HYPERVENTILATION IS A BRIDGE MEASURED IN MINUTES, not a strategy — prolonged use causes cerebral ischaemia.',
      'AVOID HYPOTONIC AND GLUCOSE-CONTAINING FLUIDS — free water worsens cerebral oedema.',
      'STEROIDS ARE CONTRAINDICATED in traumatic brain injury — the CRASH trial showed increased mortality.',
      'A HEAD INJURY DOES NOT EXPLAIN HYPOTENSION — the patient is bleeding somewhere else.',
      'NEVER attribute drowsiness to alcohol or drugs before the CT.',
      'A TIGHT COLLAR OR TAPE can obstruct jugular drainage and raise intracranial pressure.',
      'ANY head injury on ANTICOAGULANTS needs a low threshold for CT, however trivial the mechanism — and urgent reversal if bleeding.',
      'Kernohan notch phenomenon can put weakness on the SAME side as the clot — the CT decides which side is opened.',
      'Give WRITTEN discharge advice with a responsible adult observing for 24 hours.',
      'Management here is a teaching example. Follow your local head injury and neurosurgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. CT criteria, osmotic therapy choice and transfer pathways vary between national guidelines and services.',
      'Emergency burr hole decompression by non-neurosurgeons is a last resort in settings without transfer options, not routine practice.',
    ],
    cards: [
      { q: 'Describe the lucid interval and why it occurs.', a: 'Concussion causes brief loss of consciousness, recovery follows, then an expanding arterial clot causes deterioration — two separate events.' },
      { q: 'State the Monro-Kellie doctrine.', a: 'The skull is a fixed box of brain, blood and CSF — if one increases another must decrease or pressure rises.' },
      { q: 'Name the Cushing reflex triad and what to do about the hypertension.', a: 'Hypertension with widening pulse pressure, bradycardia, irregular respiration — do NOT treat the hypertension.' },
      { q: 'Why does the pupil dilate before eye movement is affected?', a: 'Parasympathetic pupilloconstrictor fibres run superficially on the oculomotor nerve and are compressed first.' },
      { q: 'Where is the pterion and why does it matter?', a: 'Junction of frontal, parietal, temporal and sphenoid bones — thinnest skull, over the middle meningeal artery.' },
      { q: 'Distinguish extradural from subdural on CT.', a: 'Extradural: biconvex, does not cross sutures. Subdural: crescentic, crosses sutures but not the midline.' },
      { q: 'Give the cerebral perfusion pressure equation.', a: 'CPP = mean arterial pressure minus intracranial pressure.' },
      { q: 'What is secondary brain injury and why does it dominate management?', a: 'Preventable damage from hypoxia, hypotension, hypercapnia, seizures and raised pressure — it determines outcome and is within everyone’s reach.' },
      { q: 'How does carbon dioxide affect intracranial pressure?', a: 'Hypercapnia vasodilates and raises it; hypocapnia vasoconstricts and lowers it but causes ischaemia.' },
      { q: 'Compare mannitol and hypertonic saline.', a: 'Both are temporising. Mannitol causes diuresis and can cause hypotension; hypertonic saline lowers pressure without hypovolaemia.' },
      { q: 'Are steroids used in traumatic brain injury?', a: 'No — contraindicated. The CRASH trial showed increased mortality.' },
      { q: 'What is Kernohan notch phenomenon?', a: 'Brainstem compression against the opposite tentorial edge causing weakness on the SAME side as the clot — a false localising sign.' },
      { q: 'Why does chronic subdural haematoma get missed?', a: 'It presents weeks later with confusion or gait disturbance, mimicking dementia or stroke, and nobody asks about a fall weeks ago.' },
    ],
    checks: [
      'Primary survey completed — head injury does not explain hypotension',
      'GCS recorded as three separate components and repeated',
      'Pupils checked repeatedly, not once',
      'Glucose checked',
      'Base of skull fracture signs looked for',
      'Anticoagulation status established and reversal started if bleeding',
      'Immediate CT head with neurosurgeons telephoned in parallel',
      'Intubated for GCS 8 or less or falling',
      'Normocapnia maintained with capnography',
      'Hypotension and hypoxia avoided absolutely',
      'Cushing hypertension NOT treated',
      'Head up 30 degrees with neck midline and no jugular compression',
      'Hypotonic and glucose-containing fluids avoided',
      'Steroids NOT given',
      'Osmotic therapy used as a bridge, not a treatment',
      'Direct telephone referral and images sent before the formal report',
      'Written discharge advice and responsible adult if discharged',
    ],
    related: ['raised_intracranial_pressure_the_monro_kellie_doctrine_cushing_reflex_and_herniation'],
  },

  {
    id: 'AS-CASE-0038',
    type: 'case',
    specialty: 'Surgery — Trauma',
    teaching_case: true,
    title: 'CASE: Stabbed in the Left Chest, Breathless and Shocked',
    short: 'Case: penetrating chest trauma',
    summary:
      'A 28-year-old with a left chest stab wound, hypotension and reduced breath sounds. Teaches how to separate tension pneumothorax from massive haemothorax from tamponade at the bedside, why 1,500 mL from the drain means theatre, and Beck triad and its limitations.',
    domains: ['trauma', 'cardiothoracic_surgery', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case chest trauma', 'penetrating chest injury case', 'massive haemothorax',
      'cardiac tamponade case', 'beck triad', 'chest drain case', 'thoracotomy indication',
      'pulsus paradoxus', 'box of the chest', 'sucking chest wound',
    ],
    terms: [
      'case', 'penetrating chest trauma', 'tension pneumothorax', 'massive haemothorax',
      'cardiac tamponade', 'beck triad', 'pulsus paradoxus', 'kussmaul sign',
      'chest drain', 'thoracostomy', 'thoracotomy', 'pericardiocentesis', 'efast',
      'open pneumothorax', 'flail chest', 'traumatic aortic injury', 'autotransfusion',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '28-year-old man stabbed once in the left chest just medial to the nipple 20 minutes ago. Blood pressure 78/54, pulse 132, respiratory rate 34, saturation 88%, agitated, with reduced breath sounds on the left.',

      section_1_the_immediate_question: {
        the_framing:
          'A SHOCKED PATIENT WITH A PENETRATING CHEST WOUND HAS ONE OF A SMALL NUMBER OF IMMEDIATELY LETHAL PROBLEMS, AND THEY ARE DISTINGUISHED AT THE BEDSIDE IN UNDER A MINUTE. The three that must be separated NOW are TENSION PNEUMOTHORAX, MASSIVE HAEMOTHORAX and CARDIAC TAMPONADE. All three cause hypotension. The treatment for each is different, and getting it wrong wastes the only minutes available.',
        the_bedside_discriminators: {
          tension_pneumothorax: 'HYPER-RESONANT to percussion · absent breath sounds · trachea deviated AWAY (late) · distended neck veins (unless also hypovolaemic) · TREATMENT: IMMEDIATE DECOMPRESSION.',
          massive_haemothorax: 'DULL to percussion · absent breath sounds · FLAT neck veins, because the patient is hypovolaemic · TREATMENT: CHEST DRAIN AND BLOOD, AND OFTEN THEATRE.',
          cardiac_tamponade: 'BREATH SOUNDS NORMAL AND CHEST RESONANT — the lungs are fine · MUFFLED heart sounds · DISTENDED neck veins · TREATMENT: PERICARDIAL DECOMPRESSION.',
          the_single_most_useful_manoeuvre:
            'PERCUSS THE CHEST. HYPER-RESONANT MEANS AIR (TENSION PNEUMOTHORAX). DULL MEANS BLOOD (HAEMOTHORAX). NORMAL RESONANCE WITH NORMAL BREATH SOUNDS IN A SHOCKED PATIENT WITH A CENTRAL CHEST WOUND MEANS THINK TAMPONADE. Two taps of a finger separate three lethal diagnoses, and percussion is the examination skill most often skipped.',
        },
        the_box_of_the_chest: {
          the_concept: 'THE "BOX" OR "CARDIAC BOX" IS THE AREA BOUNDED BY THE CLAVICLES ABOVE, THE COSTAL MARGINS BELOW, AND THE MID-CLAVICULAR OR NIPPLE LINES LATERALLY.',
          why_it_matters: 'A PENETRATING WOUND WITHIN THE BOX CARRIES A HIGH RISK OF CARDIAC OR GREAT VESSEL INJURY. HIS WOUND IS MEDIAL TO THE NIPPLE — INSIDE THE BOX. That single observation should make tamponade the leading thought before any test.',
          the_caveat: 'A wound OUTSIDE the box does not exclude cardiac injury — blades travel, and the trajectory is not predictable from the entry point.',
        },
        the_diaphragm_rule: {
          the_point: 'THE DIAPHRAGM RISES TO THE LEVEL OF THE NIPPLES (roughly the 4th intercostal space) IN FULL EXPIRATION.',
          the_consequence: 'ANY PENETRATING WOUND BELOW THE NIPPLE LINE ANTERIORLY, OR BELOW THE TIP OF THE SCAPULA POSTERIORLY, MUST BE ASSUMED TO HAVE CROSSED THE DIAPHRAGM AND ENTERED THE ABDOMEN. THORACOABDOMINAL INJURIES ARE MISSED BY TREATING A CHEST WOUND AS A CHEST PROBLEM ONLY.',
        },
      },

      section_2_clerking_and_examination: {
        history_from_the_paramedics: 'Single stab wound with a kitchen knife, approximately 20 minutes ago. Blade length unknown. Patient was initially talking, has become progressively more breathless and agitated during transfer.',
        the_agitation: 'AGITATION IS HYPOXIA AND HYPOPERFUSION UNTIL PROVEN OTHERWISE. It is not the patient being difficult. Oxygen and blood, not sedation.',
        vitals: 'BP 78/54 mmHg. Pulse 132. Respiratory rate 34. Saturation 88% on high-flow oxygen. GCS 14, agitated. Cool peripheries, capillary refill 4 seconds.',
        examination: {
          the_wound: 'A single 2 cm wound in the left 4th intercostal space, 2 cm medial to the nipple. DO NOT PROBE IT and DO NOT REMOVE AN IMPALED OBJECT — an impaled knife may be tamponading the injury it caused, and removing it in the emergency department causes catastrophic haemorrhage. STABILISE IT IN PLACE AND REMOVE IT IN THEATRE.',
          chest: 'Reduced expansion on the left. BREATH SOUNDS REDUCED ON THE LEFT. PERCUSSION DULL AT THE LEFT BASE. Trachea central. Also LOOK AND FEEL FOR: surgical emphysema, a flail segment, and a SUCKING wound.',
          the_back: 'LOG ROLL AND EXAMINE THE BACK AND AXILLAE. Posterior wounds are missed with embarrassing regularity because nobody turns the patient. COUNT THE WOUNDS — assailants rarely stab once, and a second wound in the axilla or back changes everything.',
          neck_veins: 'FLAT — consistent with hypovolaemia from blood loss rather than the distended veins of tamponade or tension. BUT NOTE: A PATIENT WITH BOTH TAMPONADE AND SIGNIFICANT HAEMORRHAGE MAY HAVE FLAT NECK VEINS DESPITE TAMPONADE, because there is not enough volume to distend them. Absent JVP distension does NOT exclude tamponade in a bleeding patient.',
          heart_sounds: 'Difficult to assess in a noisy resuscitation room — which is exactly why MUFFLED HEART SOUNDS is the least reliable component of Beck triad in practice.',
        },
      },

      section_3_the_three_diagnoses_in_detail: {
        tension_pneumothorax: {
          mechanism: 'A one-way valve allows air into the pleural space on inspiration but not out. Pressure rises, collapsing the lung, then SHIFTING THE MEDIASTINUM AND KINKING THE GREAT VEINS. THE HYPOTENSION IS FROM OBSTRUCTED VENOUS RETURN, NOT FROM RESPIRATORY FAILURE — which is why it kills so fast and why decompression works instantly.',
          treatment: 'IMMEDIATE DECOMPRESSION WITHOUT WAITING FOR A RADIOGRAPH. Needle decompression at the 4TH OR 5TH INTERCOSTAL SPACE IN THE ANTERIOR AXILLARY LINE (preferred over the traditional 2nd space mid-clavicular line, where standard cannulae often fail to reach the pleura in adults), or FINGER THORACOSTOMY, followed by a formal CHEST DRAIN.',
        },
        massive_haemothorax: {
          the_definition: 'MORE THAN 1,500 mL OF BLOOD IN THE HEMITHORAX, OR MORE THAN A THIRD OF THE BLOOD VOLUME. Each hemithorax can hold 2 to 3 litres — enough to exsanguinate.',
          the_source: 'Intercostal or internal mammary arteries, lung parenchyma, great vessels, or the heart.',
          treatment_and_the_number_that_decides_theatre: {
            the_drain: 'A LARGE-BORE CHEST DRAIN in the SAFE TRIANGLE. Restore circulating volume WITH BLOOD BEFORE OR AS YOU DRAIN — draining a large haemothorax from a hypovolaemic patient can precipitate cardiovascular collapse, both by removing the tamponading effect and by allowing the lung to re-expand and bleed further.',
            the_thoracotomy_thresholds:
              'IMMEDIATE DRAINAGE OF MORE THAN 1,500 mL · OR CONTINUING LOSS OF MORE THAN 200 mL PER HOUR FOR 2 TO 4 HOURS · OR PERSISTENT HAEMODYNAMIC INSTABILITY OR ONGOING TRANSFUSION REQUIREMENT. ANY OF THESE MEANS THEATRE. THESE ARE THE NUMBERS TO KNOW, because the decision to operate is otherwise made too late.',
            autotransfusion: 'Where available, blood drained from the chest can be collected and reinfused — valuable where blood supplies are limited, which is a real consideration in many settings.',
          },
        },
        cardiac_tamponade: {
          mechanism: 'Blood in the PERICARDIAL SAC. The parietal pericardium is FIBROUS AND NON-COMPLIANT ACUTELY, so it cannot stretch. AS LITTLE AS 50 TO 100 mL OF BLOOD ACCUMULATING RAPIDLY CAN CAUSE TAMPONADE — whereas a slowly accumulating chronic effusion can reach a litre or more without compromise, because the pericardium stretches over time. THE RATE OF ACCUMULATION MATTERS MORE THAN THE VOLUME.',
          the_physiology: 'Rising pericardial pressure prevents DIASTOLIC FILLING of the ventricles, particularly the thin-walled right ventricle. Stroke volume falls, and the patient compensates with tachycardia until they cannot.',
          beck_triad: {
            the_three: 'HYPOTENSION · DISTENDED NECK VEINS · MUFFLED HEART SOUNDS.',
            the_honest_limitation:
              'ALL THREE ARE PRESENT IN ONLY A MINORITY OF PATIENTS. Neck veins may be FLAT if the patient is hypovolaemic from bleeding elsewhere. Heart sounds are almost impossible to assess reliably in a resuscitation room. RELYING ON BECK TRIAD TO DIAGNOSE TAMPONADE WILL MISS MOST CASES — the diagnosis is made by a HIGH INDEX OF SUSPICION IN A PATIENT WITH A WOUND IN THE BOX, plus ULTRASOUND.',
          },
          pulsus_paradoxus: 'AN EXAGGERATED FALL IN SYSTOLIC BLOOD PRESSURE ON INSPIRATION, conventionally more than 10 mmHg. The name is misleading — IT IS AN EXAGGERATION OF A NORMAL PHENOMENON, not a paradox. On inspiration, increased venous return fills the right ventricle, which in a constrained pericardium pushes the septum leftwards and reduces left ventricular filling. It also occurs in severe asthma and COPD.',
          kussmaul_sign: 'A RISE in jugular venous pressure on INSPIRATION, instead of the normal fall. More typical of constrictive pericarditis than tamponade, but worth recognising.',
          treatment: {
            the_definitive_answer: 'SURGICAL DECOMPRESSION — a pericardial window or thoracotomy with repair of the cardiac injury. THIS IS A SURGICAL DIAGNOSIS AND THE PATIENT NEEDS A SURGEON.',
            pericardiocentesis: 'A TEMPORISING MEASURE ONLY. Blood in the pericardium often CLOTS, so aspiration frequently fails — and a negative aspiration DOES NOT EXCLUDE TAMPONADE. Removing even 20 to 30 mL can restore output enough to reach theatre, so it is worth doing when surgery is not immediately available, under ultrasound guidance where possible. IT IS NOT A TREATMENT.',
            fluid_as_a_bridge: 'Giving fluid raises filling pressure and can transiently improve output while preparing for surgery. It buys minutes, not more.',
          },
        },
      },

      section_4_investigations: {
        the_rule: 'IN AN UNSTABLE PATIENT, THE ONLY ACCEPTABLE INVESTIGATIONS ARE THOSE PERFORMED AT THE BEDSIDE IN SECONDS. Everything else waits until the patient is stabilised or is in theatre.',
        efast: {
          what_it_is: 'EXTENDED FOCUSED ASSESSMENT WITH SONOGRAPHY FOR TRAUMA — the FAST views plus BILATERAL LUNG and PLEURAL views.',
          why_it_is_the_key_investigation_here: 'IT ANSWERS THE THREE QUESTIONS AT ONCE, AT THE BEDSIDE, IN UNDER TWO MINUTES: IS THERE PERICARDIAL FLUID (tamponade)? IS THERE PLEURAL FLUID (haemothorax)? IS THERE LUNG SLIDING (its ABSENCE suggests pneumothorax)? Plus free fluid in the abdomen for a thoracoabdominal wound.',
          the_caveat: 'Operator-dependent, and a negative scan does not exclude injury. But a POSITIVE pericardial view in a shocked patient with a wound in the box is effectively diagnostic and sends the patient to theatre.',
        },
        chest_radiograph: 'Useful in a STABLE patient — pneumothorax, haemothorax, widened mediastinum, foreign body, and the position of drains and tubes. A SUPINE FILM IS INSENSITIVE FOR BOTH PNEUMOTHORAX AND HAEMOTHORAX, because air rises anteriorly and blood layers posteriorly rather than forming an obvious meniscus. NEVER DELAY DECOMPRESSION OF A TENSION PNEUMOTHORAX FOR A FILM.',
        ct: 'For the STABLE patient — defines trajectory, identifies occult injury, and assesses the mediastinum and great vessels. NOT for the unstable patient.',
        bloods_and_monitoring: 'Cross-match urgently and activate the massive haemorrhage protocol. Blood gas with lactate and base deficit. ECG — cardiac injury causes arrhythmia and ST changes, and blunt cardiac injury is a separate entity. Continuous monitoring.',
      },

      section_5_management: {
        a_the_first_two_minutes: 'High-flow oxygen. Two large-bore cannulae, ideally ABOVE the diaphragm if there is a possibility of an inferior vena cava or abdominal venous injury. Cross-match and activate the massive haemorrhage protocol. TRANEXAMIC ACID 1 g within 3 hours of injury. Call the SURGEON AND ANAESTHETIST IMMEDIATELY. Warm the patient.',
        b_the_chest_drain: {
          the_site: 'THE SAFE TRIANGLE — bounded by the LATERAL BORDER OF PECTORALIS MAJOR anteriorly, the LATERAL BORDER OF LATISSIMUS DORSI posteriorly, a horizontal line at the level of the NIPPLE (5th intercostal space) inferiorly, and the AXILLA at the apex. IT EXISTS TO AVOID THE LONG THORACIC NERVE, THE HEART, THE LIVER AND THE SPLEEN. Drains placed too low injure the liver or spleen, and this is a recognised and avoidable harm.',
          the_technique_point: 'INSERT IMMEDIATELY ABOVE THE UPPER BORDER OF THE RIB BELOW, because the INTERCOSTAL NEUROVASCULAR BUNDLE RUNS IN THE GROOVE ON THE INFERIOR SURFACE OF EACH RIB. Aiming for the top of the lower rib keeps you away from it.',
          the_size: 'A LARGE-BORE drain for blood — small drains block with clot. Small-bore drains are appropriate for a simple pneumothorax, not for a haemothorax.',
          in_trauma: 'BLUNT DISSECTION AND FINGER SWEEP before inserting the drain, to confirm you are in the pleural space and that no lung or abdominal organ is adherent. NEVER USE A TROCAR.',
        },
        c_the_open_pneumothorax: {
          the_problem: 'A SUCKING CHEST WOUND. If the wound is larger than about two thirds of the tracheal diameter, air preferentially enters through the wound rather than the trachea on inspiration, and ventilation fails.',
          the_treatment: 'A THREE-SIDED OCCLUSIVE DRESSING, taped on three sides so it acts as a FLUTTER VALVE — air escapes on expiration but cannot enter on inspiration. A FOUR-SIDED SEAL CAN CONVERT AN OPEN PNEUMOTHORAX INTO A TENSION PNEUMOTHORAX, which is why the fourth side is deliberately left open. Follow with a formal chest drain placed AWAY from the wound.',
        },
        d_when_to_open_the_chest: {
          operative_thoracotomy_in_theatre: 'For the thoracotomy thresholds above, for confirmed cardiac injury, great vessel injury, oesophageal or major airway injury.',
          resuscitative_thoracotomy_in_the_emergency_department: {
            the_indication: 'A patient with PENETRATING CHEST TRAUMA who LOSES CARDIAC OUTPUT IN FRONT OF YOU OR WITHIN ROUGHLY 10 TO 15 MINUTES OF ARREST, particularly with a STAB wound and suspected TAMPONADE.',
            the_outcomes: 'SURVIVAL IS BEST FOR PENETRATING CARDIAC INJURY WITH TAMPONADE — where meaningful survival rates are reported — AND VERY POOR FOR BLUNT TRAUMA ARREST, where it is rarely justified. The distinction matters, because the procedure is otherwise futile and distressing.',
            the_aims: 'Release tamponade · control cardiac or pulmonary haemorrhage · cross-clamp the descending aorta to redistribute blood to the brain and heart · internal cardiac massage.',
            the_reality: 'It requires training, a team and equipment, and a decision made in seconds. It is included here so that the indication is recognised, not because it is expected of an unsupported junior.',
          },
        },
        e_the_other_injuries_to_think_about: 'THORACOABDOMINAL injury if the wound is below the nipple line — this patient needs abdominal assessment too. TRAUMATIC AORTIC INJURY in deceleration mechanisms, suggested by a widened mediastinum. TRACHEOBRONCHIAL injury, suggested by a persistent large air leak and failure of the lung to re-expand after drainage. OESOPHAGEAL injury, which is easily missed and highly lethal. DIAPHRAGMATIC injury, which may present years later with herniation.',
        f_ongoing_care: 'ANALGESIA IS A RESPIRATORY TREATMENT IN CHEST TRAUMA — pain causes splinting, which causes atelectasis, which causes pneumonia. Use multimodal analgesia and consider regional blocks or epidural for rib fractures. CHEST PHYSIOTHERAPY AND INCENTIVE SPIROMETRY. Tetanus prophylaxis. Antibiotics per local policy for penetrating injury and drains. Monitor drain output. And remember the PSYCHOSOCIAL dimension of interpersonal violence — safeguarding, police involvement where appropriate, and support.',
      },

      section_6_teaching_points: {
        bonus_1_percussion_separates_three_lethal_diagnoses:
          'HYPER-RESONANT means air — tension pneumothorax. DULL means blood — massive haemothorax. NORMAL resonance with normal breath sounds in a shocked patient with a central wound means think TAMPONADE. Two taps of a finger, and it is the examination skill most often skipped.',
        bonus_2_the_box_makes_tamponade_the_leading_thought:
          'A penetrating wound between the clavicles, costal margins and mid-clavicular lines carries a high risk of cardiac injury. But a wound outside the box does not exclude it — blades travel.',
        bonus_3_the_numbers_that_decide_thoracotomy:
          'More than 1,500 mL drained immediately, or more than 200 mL per hour for 2 to 4 hours, or persistent instability. Knowing these prevents the decision to operate being made too late.',
        bonus_4_beck_triad_misses_most_cases:
          'All three features are present in a minority. Neck veins can be FLAT in a bleeding patient despite tamponade, and heart sounds cannot be assessed reliably in a resuscitation room. Suspicion plus ultrasound makes the diagnosis, not the triad.',
        bonus_5_the_rate_matters_more_than_the_volume_in_tamponade:
          'The acute pericardium is non-compliant, so 50 to 100 mL accumulating rapidly can kill, while a slowly accumulating chronic effusion of a litre may be tolerated. That is why a small stab wound to the heart is lethal.',
        bonus_6_the_three_sided_dressing:
          'Taped on three sides, it lets air out on expiration but not in on inspiration. A four-sided seal can convert an open pneumothorax into a TENSION pneumothorax — which is why the fourth side is deliberately left open.',
        bonus_7_the_diaphragm_reaches_the_nipples_in_expiration:
          'Any penetrating wound below the nipple anteriorly, or below the scapular tip posteriorly, must be assumed to have entered the abdomen. Thoracoabdominal injuries are missed by treating a chest wound as a chest problem.',
        trap_1: 'DO NOT PROBE THE WOUND, and DO NOT REMOVE AN IMPALED OBJECT — it may be tamponading the injury. Remove it in theatre.',
        trap_2: 'LOG ROLL AND COUNT THE WOUNDS — posterior and axillary wounds are missed because nobody turns the patient.',
        trap_3: 'A negative PERICARDIOCENTESIS does not exclude tamponade, because pericardial blood clots. It is a bridge, never a treatment.',
        trap_4: 'Restore volume with BLOOD before or as you drain a large haemothorax — draining a hypovolaemic patient can precipitate collapse.',
        trap_5: 'A SUPINE chest film is insensitive for both pneumothorax and haemothorax. Never delay decompression for a film.',
        trap_6: 'Insert the drain in the SAFE TRIANGLE and immediately ABOVE the rib below — the neurovascular bundle runs under each rib.',
        trap_7: 'Resuscitative thoracotomy has meaningful survival in penetrating cardiac injury with tamponade, and is rarely justified in blunt trauma arrest.',
        trap_8: 'Analgesia is a RESPIRATORY treatment in chest trauma — splinting causes atelectasis and pneumonia.',
        one_line_summary: 'Penetrating chest trauma inside the cardiac box. Percuss the chest to separate air from blood from tamponade, eFAST at the bedside, large-bore drain with blood ready, and count the litres — 1,500 immediately or 200 an hour means theatre.',
      },
    },
    warnings: [
      'PERCUSS THE CHEST — hyper-resonant means tension pneumothorax, dull means haemothorax, normal with a central wound means think tamponade.',
      'TENSION PNEUMOTHORAX IS A CLINICAL DIAGNOSIS — decompress before any radiograph.',
      'A wound in the CARDIAC BOX carries high risk of cardiac injury — but a wound outside it does not exclude one.',
      'THORACOTOMY THRESHOLDS: more than 1,500 mL immediately, or more than 200 mL/hour for 2 to 4 hours, or persistent instability.',
      'BECK TRIAD IS PRESENT IN A MINORITY — neck veins can be FLAT in a bleeding patient despite tamponade.',
      'As little as 50 to 100 mL of rapidly accumulating pericardial blood can cause tamponade — the RATE matters more than the volume.',
      'A NEGATIVE PERICARDIOCENTESIS DOES NOT EXCLUDE TAMPONADE — pericardial blood clots. It is a bridge, never a treatment.',
      'DO NOT PROBE THE WOUND and DO NOT REMOVE AN IMPALED OBJECT — remove it in theatre.',
      'LOG ROLL AND COUNT THE WOUNDS — posterior and axillary wounds are routinely missed.',
      'Restore volume with BLOOD before or as you drain a large haemothorax, or the patient may collapse.',
      'Use a THREE-SIDED dressing for an open pneumothorax — a four-sided seal can create a tension pneumothorax.',
      'Any penetrating wound BELOW THE NIPPLE LINE must be assumed to have crossed the diaphragm into the abdomen.',
      'Insert chest drains in the SAFE TRIANGLE, immediately ABOVE the rib below, with blunt dissection and finger sweep. NEVER use a trocar.',
      'A SUPINE chest film is insensitive for pneumothorax and haemothorax.',
      'Resuscitative thoracotomy has meaningful survival in penetrating cardiac injury with tamponade, and is rarely justified in blunt trauma arrest.',
      'ANALGESIA IS A RESPIRATORY TREATMENT in chest trauma — splinting causes atelectasis and pneumonia.',
      'Management here is a teaching example. Follow your local major trauma protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Thoracotomy thresholds, drain policy and resuscitative thoracotomy indications vary between trauma systems.',
      'Resuscitative thoracotomy requires specific training, team and equipment and is not expected of an unsupported junior.',
    ],
    cards: [
      { q: 'How does percussion separate three lethal diagnoses?', a: 'Hyper-resonant = tension pneumothorax; dull = haemothorax; normal with a central wound = think tamponade.' },
      { q: 'What is the cardiac box?', a: 'Clavicles above, costal margins below, mid-clavicular lines laterally — wounds here risk cardiac injury.' },
      { q: 'Define massive haemothorax.', a: 'More than 1,500 mL in the hemithorax, or more than a third of blood volume.' },
      { q: 'Give the thoracotomy thresholds.', a: 'Over 1,500 mL immediately, or over 200 mL/hour for 2 to 4 hours, or persistent instability.' },
      { q: 'Name Beck triad and its limitation.', a: 'Hypotension, distended neck veins, muffled heart sounds — all three present in only a minority.' },
      { q: 'Why can 100 mL cause tamponade?', a: 'The acute pericardium is non-compliant — the rate of accumulation matters more than the volume.' },
      { q: 'What is pulsus paradoxus?', a: 'An exaggerated inspiratory fall in systolic pressure over 10 mmHg — an exaggeration of a normal phenomenon.' },
      { q: 'Why is pericardiocentesis unreliable?', a: 'Pericardial blood clots, so aspiration often fails — a negative result does not exclude tamponade.' },
      { q: 'Why a three-sided dressing for an open pneumothorax?', a: 'It acts as a flutter valve; a four-sided seal can convert it to a tension pneumothorax.' },
      { q: 'Where is the safe triangle?', a: 'Lateral pectoralis major, lateral latissimus dorsi, the nipple-level horizontal line, with the axilla at the apex.' },
      { q: 'Why insert above the lower rib?', a: 'The intercostal neurovascular bundle runs in a groove on the inferior surface of each rib.' },
      { q: 'How high does the diaphragm rise, and why does it matter?', a: 'To the nipples in full expiration — wounds below that must be assumed to have entered the abdomen.' },
      { q: 'When is resuscitative thoracotomy justified?', a: 'Penetrating chest trauma with loss of output within about 10 to 15 minutes — best outcomes in cardiac stab with tamponade.' },
    ],
    checks: [
      'Chest percussed to distinguish air from blood',
      'Cardiac box position of the wound noted',
      'Tension pneumothorax excluded clinically before imaging',
      'Wound not probed; impaled object left in place',
      'Patient log rolled and all wounds counted',
      'eFAST performed at the bedside',
      'Two large-bore cannulae above the diaphragm',
      'Massive haemorrhage protocol activated and blood available before drainage',
      'Tranexamic acid within 3 hours of injury',
      'Chest drain in the safe triangle, above the rib below, blunt dissection, no trocar',
      'Drain output measured and thoracotomy thresholds applied',
      'Three-sided dressing if an open pneumothorax',
      'Abdominal assessment if the wound is below the nipple line',
      'Surgeon and anaesthetist called immediately',
      'Patient warmed; analgesia given as a respiratory treatment',
      'Tetanus prophylaxis and safeguarding considered',
    ],
    related: ['trauma_primary_survey_and_the_immediately_life_threatening_injuries'],
  },
];
