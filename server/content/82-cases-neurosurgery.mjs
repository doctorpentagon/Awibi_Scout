/**
 * CASE SCENARIOS — Neurosurgery: chronic subdural haematoma and blocked shunt.
 *
 * Batch 6, part 1.
 */

export default [
  {
    id: 'AS-CASE-0051',
    type: 'case',
    specialty: 'Surgery — Neurosurgery',
    teaching_case: true,
    title: 'CASE: Six Weeks of "Getting Confused" in an 79-Year-Old on Warfarin',
    short: 'Case: chronic subdural haematoma',
    summary:
      'An older man labelled as developing dementia who actually has a chronic subdural haematoma. Teaches why the injury is forgotten, why the clot changes density over weeks and can become invisible, and why this is the reversible cause of confusion that nobody looks for.',
    domains: ['neurosurgery', 'geriatrics', 'neurology', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case chronic subdural', 'chronic subdural haematoma case', 'subdural in the elderly',
      'isodense subdural', 'burr hole drainage', 'reversible dementia',
      'bridging veins', 'brain atrophy subdural', 'middle meningeal embolisation',
    ],
    terms: [
      'case', 'chronic subdural haematoma', 'bridging veins', 'brain atrophy',
      'isodense', 'hyperdense', 'hypodense', 'burr hole drainage', 'craniotomy',
      'midline shift', 'reversible causes of confusion', 'anticoagulation reversal',
      'middle meningeal artery embolisation', 'subdural drain', 'recurrence',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '79-year-old man brought by his daughter because "he has gone downhill" over six weeks — more confused, unsteady, sleeping in the afternoons, and dragging his left leg. He is on warfarin for atrial fibrillation.',

      section_1_why_this_diagnosis_is_missed: {
        the_pattern: 'AN OLDER PERSON DETERIORATES GRADUALLY OVER WEEKS. THE FAMILY AND OFTEN THE DOCTOR CONCLUDE IT IS DEMENTIA, OR "JUST AGE", OR A SERIES OF SMALL STROKES. NOBODY ASKS ABOUT A FALL SIX WEEKS AGO, AND THE PATIENT DOES NOT REMEMBER IT.',
        the_three_reasons_it_is_missed: {
          one_the_injury_is_trivial_or_forgotten:
            'IN A SUBSTANTIAL PROPORTION — COMMONLY QUOTED AS UP TO HALF — NO HEAD INJURY IS RECALLED AT ALL. Where there was one, it was often minor: a knock on a cupboard door, a stumble against a wall, a fall from a chair. IT DOES NOT NEED TO HAVE BEEN A SIGNIFICANT INJURY.',
          two_the_presentation_is_non_specific:
            'HEADACHE · progressive CONFUSION and cognitive decline · DROWSINESS and a FLUCTUATING conscious level · unsteadiness and FALLS · personality or behaviour change · URINARY INCONTINENCE · and only sometimes a focal deficit. EVERY ONE OF THOSE IS ATTRIBUTED TO AGE OR DEMENTIA BY DEFAULT.',
          three_the_fluctuation_is_misread: 'A FLUCTUATING CONSCIOUS LEVEL AND COGNITION IS CHARACTERISTIC AND IS FREQUENTLY LABELLED AS DELIRIUM AND TREATED AS SUCH — with a search for infection and a review of drugs, but no scan.',
        },
        the_reason_it_matters: 'IT IS ONE OF THE FEW GENUINELY REVERSIBLE CAUSES OF PROGRESSIVE COGNITIVE DECLINE IN AN OLDER PERSON. AN OPERATION LASTING UNDER AN HOUR CAN RETURN A PATIENT WHO WAS BEING ASSESSED FOR A NURSING HOME TO INDEPENDENT LIVING. THAT IS WHY THE THRESHOLD FOR A CT SCAN IN THIS SITUATION SHOULD BE VERY LOW.',
      },

      section_2_clerking: {
        history_from_the_daughter:
          'Six weeks ago he was fully independent, drove, and managed his own affairs. Since then he has become forgetful, sleeps in the afternoon, has become unsteady, and has had two falls. In the last two weeks he has been dragging his left leg and has had two episodes of incontinence. He complains of a persistent dull headache. SHE MENTIONS, ONLY WHEN ASKED DIRECTLY, THAT HE SLIPPED IN THE BATHROOM ABOUT TWO MONTHS AGO AND BANGED HIS HEAD, BUT "HE WAS FINE AFTERWARDS".',
        the_collateral_history_is_the_investigation:
          'THE PATIENT CANNOT GIVE THIS HISTORY — THAT IS THE POINT. GET IT FROM THE FAMILY. Establish the BASELINE: what could he do six weeks ago? A patient who was driving and managing finances two months ago and is now confused has NOT developed dementia in that time — dementia does not progress at that rate.',
        the_specific_questions: 'ANY FALL OR HEAD KNOCK IN THE LAST 3 MONTHS, HOWEVER MINOR? · anticoagulants or antiplatelets · ALCOHOL intake, which causes both atrophy and falls · previous stroke · headache and its pattern · fluctuation in alertness through the day · continence · and the SPEED of the decline.',
        risk_factors: 'AGE with cerebral ATROPHY · ANTICOAGULATION AND ANTIPLATELETS — the single strongest modifiable risk · ALCOHOL dependence · repeated FALLS · epilepsy · previous neurosurgery or a ventricular SHUNT, which lowers intracranial pressure and increases traction on the bridging veins · coagulopathy · and intracranial hypotension.',
        drug_history: 'WARFARIN, with an INR checked today. Also aspirin, clopidogrel and direct oral anticoagulants. THE ANTICOAGULATION IS BOTH THE CAUSE AND THE FIRST THING THAT MUST BE ADDRESSED.',
        vitals: 'BP 152/84 mmHg. Pulse 76, irregular. Temperature 36.7. Respiratory rate 16. Saturation 96%. GLUCOSE 5.8. GCS 14 (E4 V4 M6) — drowsy and disorientated but rousable.',
        examination: {
          neurological: 'MILD LEFT-SIDED WEAKNESS, 4/5 in the arm and leg, with increased tone and an upgoing left plantar. Left-sided inattention. Slowed and unsteady gait. NOTE THAT THE DEFICIT IS OFTEN MILD AND EASILY MISSED IF NOT SPECIFICALLY LOOKED FOR.',
          the_false_localising_caveat: 'AS WITH ANY MASS LESION, A CONTRALATERAL DEFICIT IS USUAL BUT KERNOHAN NOTCH PHENOMENON CAN PRODUCE WEAKNESS ON THE SAME SIDE AS THE CLOT. THE SCAN, NOT THE EXAMINATION, DETERMINES THE SIDE.',
          cognitive: 'FORMAL COGNITIVE ASSESSMENT AND DOCUMENTATION — it establishes the baseline and, importantly, it is the measure against which improvement after drainage is judged.',
          general: 'Look for signs of the fall — bruising, particularly around the scalp and mastoid. Examine for other causes of confusion: infection, dehydration, constipation and retention. CHECK FOR PAPILLOEDEMA, though it is often absent.',
        },
      },

      section_3_mechanism: {
        the_bridging_veins: {
          the_anatomy: 'VEINS CROSS FROM THE CORTICAL SURFACE THROUGH THE SUBDURAL SPACE TO DRAIN INTO THE DURAL VENOUS SINUSES. THEY ARE CALLED BRIDGING VEINS BECAUSE THEY BRIDGE THAT GAP, AND THEY ARE THIN-WALLED AND UNSUPPORTED ALONG THEIR SUBDURAL COURSE.',
          why_the_elderly: 'CEREBRAL ATROPHY WITH AGE INCREASES THE DISTANCE THE VEINS MUST TRAVERSE AND PUTS THEM UNDER TENSION, AND IT ALLOWS THE BRAIN TO MOVE MORE FREELY WITHIN THE SKULL. A MINOR DECELERATION THEREFORE SHEARS THEM WHERE IT WOULD NOT IN A YOUNGER BRAIN. THE SAME ATROPHY ALSO MEANS THERE IS MORE ROOM FOR A CLOT TO EXPAND BEFORE SYMPTOMS APPEAR — WHICH IS WHY THE COLLECTION IS OFTEN VERY LARGE BY PRESENTATION.',
          why_it_is_slow: 'IT IS VENOUS BLEEDING AT LOW PRESSURE, so it accumulates over weeks rather than the hours of an arterial extradural haematoma.',
        },
        why_it_keeps_growing: {
          the_membrane: 'WITHIN DAYS TO WEEKS, A VASCULAR NEOMEMBRANE FORMS AROUND THE COLLECTION. IT CONTAINS FRAGILE, LEAKY CAPILLARIES.',
          the_cycle: 'THOSE VESSELS BLEED REPEATEDLY, AND THE BREAKDOWN OF BLOOD PRODUCTS RAISES THE OSMOTIC PRESSURE OF THE COLLECTION, DRAWING IN MORE FLUID. THE HAEMATOMA THEREFORE ENLARGES PROGRESSIVELY WITHOUT ANY FURTHER INJURY. IT IS A SELF-PERPETUATING PROCESS, WHICH IS WHY THE PATIENT DETERIORATES WEEKS AFTER AN INJURY THEY HAVE FORGOTTEN, AND WHY RECURRENCE AFTER DRAINAGE IS COMMON.',
          the_therapeutic_implication: 'THIS MEMBRANE AND ITS BLOOD SUPPLY, LARGELY FROM THE MIDDLE MENINGEAL ARTERY, IS THE TARGET OF MIDDLE MENINGEAL ARTERY EMBOLISATION — a newer adjunct that reduces recurrence by devascularising the membrane.',
        },
        contrast_with_the_acute_subdural: 'AN ACUTE SUBDURAL HAEMATOMA FOLLOWS SIGNIFICANT TRAUMA, PRESENTS WITHIN HOURS, IS HYPERDENSE ON CT, AND CARRIES A MUCH WORSE PROGNOSIS — BECAUSE THE FORCES THAT CAUSED IT ALSO CAUSED SEVERE UNDERLYING BRAIN INJURY. A CHRONIC SUBDURAL COMPRESSES A STRUCTURALLY INTACT BRAIN, WHICH IS PRECISELY WHY DRAINING IT WORKS SO WELL.',
      },

      section_4_imaging_and_the_density_trap: {
        the_ct_appearance: 'A CRESCENTIC (CONCAVE) COLLECTION OVER THE CONVEXITY OF THE BRAIN. IT CROSSES SUTURE LINES, BECAUSE IT LIES BENEATH THE DURA, BUT IT DOES NOT CROSS THE MIDLINE, BECAUSE THE FALX BLOCKS IT. Contrast with the extradural haematoma, which is BICONVEX and does NOT cross sutures.',
        the_density_changes_with_time: {
          acute_0_to_3_days: 'HYPERDENSE — bright white — because clotted blood is denser than brain.',
          subacute_3_days_to_3_weeks: 'ISODENSE — THE SAME DENSITY AS BRAIN — as haemoglobin breaks down.',
          chronic_beyond_3_weeks: 'HYPODENSE — darker than brain, approaching the density of cerebrospinal fluid.',
        },
        the_trap_that_must_be_understood: {
          the_problem:
            'AN ISODENSE SUBACUTE SUBDURAL HAEMATOMA CAN BE ALMOST INVISIBLE ON CT, PARTICULARLY IF IT IS BILATERAL — BECAUSE BILATERAL COLLECTIONS BALANCE EACH OTHER AND THERE IS NO MIDLINE SHIFT TO DRAW THE EYE.',
          the_secondary_signs_to_look_for: 'EFFACEMENT OF THE CORTICAL SULCI on the affected side · loss of the grey-white interface being pushed inwards from the inner table · COMPRESSION OF THE LATERAL VENTRICLE · MIDLINE SHIFT · and, in bilateral cases, ABNORMALLY SMALL, COMPRESSED, SLIT-LIKE VENTRICLES IN AN ATROPHIC BRAIN THAT SHOULD HAVE LARGE ONES. A 79-YEAR-OLD WITH SMALL VENTRICLES AND NO VISIBLE SULCI HAS BILATERAL SUBDURAL COLLECTIONS UNTIL PROVEN OTHERWISE.',
          the_action: 'IF THE CT IS REPORTED AS NORMAL BUT THE CLINICAL PICTURE IS CONVINCING, DISCUSS IT WITH THE RADIOLOGIST AND CONSIDER MRI, WHICH IS FAR MORE SENSITIVE AND IS NOT SUBJECT TO THE ISODENSE PROBLEM.',
        },
        the_mixed_density_finding: 'A COLLECTION WITH BOTH HYPERDENSE AND HYPODENSE COMPONENTS, SOMETIMES WITH A FLUID LEVEL, INDICATES ACUTE-ON-CHRONIC BLEEDING — recurrent haemorrhage from the membrane. It is common and predicts a higher recurrence rate.',
        bloods: 'FULL BLOOD COUNT · CLOTTING AND INR · urea, creatinine and electrolytes · GLUCOSE · liver function · GROUP AND SAVE. And screen for the other reversible causes of confusion: infection, sodium, calcium, thyroid function, B12.',
      },

      section_5_management: {
        a_reverse_the_anticoagulation: 'THE FIRST ACTION. His INR is 3.4. STOP THE WARFARIN AND REVERSE IT — VITAMIN K plus PROTHROMBIN COMPLEX CONCENTRATE for a significant collection with neurological deficit. Discuss timing with neurosurgery. FOR ANTIPLATELETS, platelet transfusion is not routinely beneficial and should be discussed rather than assumed. FOR A DIRECT ORAL ANTICOAGULANT, use the specific reversal agent where available.',
        b_the_conversation_about_restarting_it: {
          the_dilemma: 'HE HAS ATRIAL FIBRILLATION AND NEEDS ANTICOAGULATION TO PREVENT STROKE. HE HAS JUST BLED INTO HIS HEAD. BOTH RISKS ARE REAL.',
          the_approach: 'THIS IS A MULTIDISCIPLINARY DECISION involving neurosurgery, cardiology and the patient. Anticoagulation is commonly restarted after a delay of weeks once the collection has resolved and the surgeon is satisfied, because thrombotic risk accumulates continuously while the bleed has been treated. LEFT ATRIAL APPENDAGE OCCLUSION is an option where anticoagulation is judged too dangerous.',
          the_documentation_point: 'DOCUMENT THE PLAN, THE REASONING, THE RESTART DATE AND WHO WILL REVIEW IT. AN UNDOCUMENTED "HOLD ANTICOAGULATION" BECOMES A PERMANENT STOP BY DEFAULT, AND THE PATIENT HAS A STROKE INSTEAD.',
        },
        c_surgery: {
          the_indications: 'SYMPTOMATIC COLLECTION with neurological deficit, cognitive decline or reduced consciousness · SIGNIFICANT MIDLINE SHIFT · a large collection, often taken as more than about 10 mm in thickness.',
          the_operation: 'BURR HOLE CRANIOSTOMY — one or two burr holes, the dura opened, the liquefied haematoma washed out with warm saline, and a SUBDURAL DRAIN LEFT IN PLACE. IT IS QUICK, OFTEN DONE UNDER LOCAL ANAESTHESIA OR LIGHT SEDATION, AND WELL TOLERATED EVEN IN FRAIL PATIENTS.',
          the_drain_evidence: 'LEAVING A SUBDURAL DRAIN FOR ABOUT 48 HOURS SIGNIFICANTLY REDUCES RECURRENCE AND IMPROVES OUTCOME. This was demonstrated in a randomised trial and changed practice — it is a small technical point with a large effect.',
          the_positioning_afterwards: 'NURSE FLAT FOR THE FIRST 24 TO 48 HOURS AND ENCOURAGE FLUID INTAKE, TO PROMOTE BRAIN RE-EXPANSION AND OBLITERATION OF THE SUBDURAL SPACE. SITTING THE PATIENT UP TOO EARLY ALLOWS THE SPACE TO REACCUMULATE.',
          craniotomy: 'Reserved for a solid, organised or heavily septated haematoma that will not wash out, or for recurrence.',
          middle_meningeal_artery_embolisation: 'AN ENDOVASCULAR ADJUNCT THAT DEVASCULARISES THE MEMBRANE. Recent trials support it as an adjunct to surgery for reducing recurrence, and as a primary treatment in selected patients — an area of active change, so follow current local practice.',
        },
        d_conservative_management: 'A SMALL, ASYMPTOMATIC COLLECTION WITH NO SHIFT MAY BE OBSERVED WITH REPEAT IMAGING, particularly in a frail patient. Correct the coagulopathy, address falls risk, and image again in a few weeks. THIS IS AN ACTIVE PLAN WITH A REVIEW DATE, NOT A DECISION TO DO NOTHING.',
        e_the_rest_of_the_admission: {
          delirium_and_falls: 'Apply a delirium prevention bundle. Assess and address FALLS — he has fallen repeatedly and will do so again. Physiotherapy, home hazards, vision, footwear, and a medication review for sedatives and antihypertensives.',
          seizures: 'Occur in a minority. Treat if they happen; prophylaxis is a neurosurgical decision and is not routine.',
          the_recurrence_warning: 'RECURRENCE OCCURS IN ROUGHLY 10 TO 20%, USUALLY WITHIN THE FIRST FEW WEEKS. TELL THE PATIENT AND FAMILY EXPLICITLY WHAT TO WATCH FOR — returning headache, drowsiness, confusion or weakness — AND HOW TO GET BACK. Give it in writing.',
          the_outcome_conversation: 'MANY PATIENTS IMPROVE DRAMATICALLY, SOMETIMES WITHIN DAYS. But recovery can be slower in the frail and the very old, and some cognitive impairment may prove to be genuine underlying dementia unmasked rather than caused by the clot. Be honest that the operation treats the collection, not necessarily every symptom.',
        },
      },

      section_6_teaching_points: {
        bonus_1_ask_about_a_head_knock_in_the_last_three_months:
          'Up to half of patients recall no injury at all, and where there was one it was often trivial. The question has to be asked directly and of the family, because the patient does not remember. A patient who was driving two months ago and is now confused has not developed dementia — dementia does not move at that speed.',
        bonus_2_the_isodense_subdural_can_be_invisible:
          'Between about 3 days and 3 weeks the collection is the same density as brain. Bilateral collections are worse still, because they balance and there is no midline shift. Look for EFFACED SULCI and ABNORMALLY SMALL VENTRICLES in an atrophic brain that should have large ones.',
        bonus_3_it_grows_without_further_injury:
          'A vascular neomembrane forms with fragile leaky capillaries that rebleed, and blood breakdown raises osmotic pressure, drawing in fluid. The process is self-perpetuating, which explains deterioration weeks after a forgotten injury — and why recurrence is common and why embolising the membrane helps.',
        bonus_4_atrophy_explains_both_the_cause_and_the_delay:
          'It stretches the bridging veins so a minor knock shears them, and it leaves room for the clot to expand before symptoms appear. The collection is therefore usually large by the time anyone notices.',
        bonus_5_leave_a_drain_and_nurse_flat:
          'A subdural drain for about 48 hours significantly reduces recurrence — demonstrated in a randomised trial. Nursing flat with good hydration promotes brain re-expansion; sitting the patient up early lets the space reaccumulate. Two small measures with large effects.',
        bonus_6_this_is_the_reversible_cause_of_confusion:
          'An operation under an hour, often under local anaesthesia, can return a patient being assessed for a nursing home to independent living. That asymmetry — low-risk intervention, high potential gain — is why the threshold for scanning should be very low.',
        trap_1: 'A FLUCTUATING conscious level is characteristic and is regularly labelled delirium and treated without a scan.',
        trap_2: 'Crescentic and crosses sutures but not the midline — the reverse of the biconvex extradural, which does not cross sutures.',
        trap_3: 'If the CT is reported normal but the picture is convincing, discuss it and consider MRI.',
        trap_4: 'Kernohan notch can put the weakness on the SAME side — the scan decides.',
        trap_5: 'DOCUMENT the anticoagulation restart plan with a date and a reviewer, or the hold becomes permanent and the patient has a stroke.',
        trap_6: 'Warn about recurrence in writing — 10 to 20%, usually within weeks.',
        trap_7: 'Address the FALLS. He will fall again, and the next one may be worse.',
        one_line_summary: 'Chronic subdural haematoma presenting as dementia. Ask the daughter about a head knock, look for effaced sulci if the scan looks normal, reverse the warfarin, burr hole with a drain and nurse flat — and document when the anticoagulation restarts.',
      },
    },
    warnings: [
      'ASK ABOUT A HEAD KNOCK IN THE LAST 3 MONTHS — up to half recall no injury at all, and it need not have been significant.',
      'A PATIENT WHO WAS INDEPENDENT TWO MONTHS AGO HAS NOT DEVELOPED DEMENTIA — dementia does not progress at that rate.',
      'AN ISODENSE SUBDURAL (3 days to 3 weeks) CAN BE ALMOST INVISIBLE ON CT, especially if BILATERAL.',
      'Look for EFFACED SULCI and ABNORMALLY SMALL VENTRICLES in an atrophic brain — that is bilateral collections until proven otherwise.',
      'If the CT is reported normal but the picture is convincing, discuss with the radiologist and consider MRI.',
      'A FLUCTUATING conscious level is characteristic and is regularly mislabelled as delirium and never scanned.',
      'Crescentic, CROSSES SUTURES but NOT the midline — the reverse of the biconvex extradural.',
      'REVERSE THE ANTICOAGULATION FIRST — vitamin K plus prothrombin complex concentrate for a significant symptomatic collection.',
      'LEAVE A SUBDURAL DRAIN for about 48 hours — it significantly reduces recurrence.',
      'NURSE FLAT for 24 to 48 hours with good hydration — sitting up early allows reaccumulation.',
      'Kernohan notch phenomenon can put the weakness on the SAME side as the clot.',
      'DOCUMENT the anticoagulation restart plan with a date and a named reviewer — an undocumented hold becomes a permanent stop.',
      'WARN IN WRITING about recurrence — 10 to 20%, usually within the first few weeks.',
      'ADDRESS THE FALLS — he has fallen repeatedly and will fall again.',
      'Be honest that surgery treats the collection, not necessarily every symptom — underlying dementia may be unmasked.',
      'Management here is a teaching example. Follow local neurosurgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Middle meningeal artery embolisation is an area of active change; follow current local practice.',
      'Anticoagulation restart timing is individualised and requires multidisciplinary input.',
    ],
    cards: [
      { q: 'How often is a head injury recalled?', a: 'Up to half of patients recall none at all, and where there was one it was often trivial.' },
      { q: 'Why does brain atrophy predispose to this?', a: 'It stretches the bridging veins so a minor knock shears them, and leaves room for the clot to expand before symptoms.' },
      { q: 'Give the CT density changes over time.', a: 'Hyperdense 0 to 3 days, ISODENSE 3 days to 3 weeks, hypodense beyond 3 weeks.' },
      { q: 'What makes an isodense subdural especially easy to miss?', a: 'Bilateral collections balance each other, so there is no midline shift to draw the eye.' },
      { q: 'What secondary signs should you look for?', a: 'Effaced sulci, compressed ventricles, loss of grey-white interface, and abnormally small ventricles in an atrophic brain.' },
      { q: 'Why does the haematoma enlarge without further injury?', a: 'A vascular neomembrane rebleeds and blood breakdown raises osmotic pressure, drawing in fluid — a self-perpetuating cycle.' },
      { q: 'How does the shape differ from an extradural haematoma?', a: 'Crescentic, crosses sutures but not the midline; extradural is biconvex and does not cross sutures.' },
      { q: 'What is the standard operation?', a: 'Burr hole craniostomy with washout and a subdural drain, often under local anaesthesia.' },
      { q: 'Why leave a subdural drain?', a: 'It significantly reduces recurrence — demonstrated in a randomised trial.' },
      { q: 'How should the patient be nursed afterwards?', a: 'Flat for 24 to 48 hours with good hydration, to promote brain re-expansion.' },
      { q: 'What is middle meningeal artery embolisation for?', a: 'Devascularising the neomembrane to reduce recurrence, as an adjunct or in selected primary cases.' },
      { q: 'What is the recurrence rate?', a: 'Roughly 10 to 20%, usually within the first few weeks — warn the family in writing.' },
    ],
    checks: [
      'Collateral history taken from family, including a direct question about any head knock',
      'Baseline function two months ago established',
      'Anticoagulant and antiplatelet history taken and INR checked',
      'Formal cognitive assessment documented as a baseline',
      'Focal neurology specifically sought',
      'CT head obtained with a low threshold',
      'Secondary signs looked for if the scan appears normal; MRI considered',
      'Other reversible causes of confusion screened',
      'Anticoagulation reversed in discussion with neurosurgery',
      'Neurosurgical referral made',
      'Subdural drain planned and patient nursed flat postoperatively',
      'Anticoagulation restart plan documented with a date and reviewer',
      'Falls assessment and medication review completed',
      'Written recurrence warning given to patient and family',
    ],
    related: ['raised_intracranial_pressure_the_monro_kellie_doctrine_cushing_reflex_and_herniation'],
  },

  {
    id: 'AS-CASE-0052',
    type: 'case',
    specialty: 'Surgery — Neurosurgery',
    teaching_case: true,
    title: 'CASE: A 9-Year-Old with a Shunt, Vomiting and a Headache',
    short: 'Case: blocked ventriculoperitoneal shunt',
    summary:
      'A child with a VP shunt, headache and vomiting. Teaches why the parents are the most reliable diagnostic instrument, why a normal CT does not exclude blockage, the slit ventricle problem, and why deterioration can be catastrophically fast.',
    domains: ['neurosurgery', 'paediatrics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case blocked shunt', 'vp shunt malfunction case', 'shunt blockage',
      'hydrocephalus case', 'slit ventricle syndrome', 'shunt series',
      'shunt infection', 'sunsetting eyes', 'shunt tap',
    ],
    terms: [
      'case', 'ventriculoperitoneal shunt', 'shunt malfunction', 'hydrocephalus',
      'raised intracranial pressure', 'slit ventricle syndrome', 'shunt series',
      'shunt tap', 'external ventricular drain', 'shunt infection', 'ventriculitis',
      'sunsetting eyes', 'papilloedema', 'sixth nerve palsy', 'endoscopic third ventriculostomy',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '9-year-old girl with a ventriculoperitoneal shunt inserted in infancy for congenital hydrocephalus, brought in with 2 days of headache and vomiting. Her mother says "this is exactly how she was the last time it blocked".',

      section_1_the_single_most_important_principle: {
        the_statement:
          'THE PARENTS OF A CHILD WITH A SHUNT ARE THE MOST RELIABLE DIAGNOSTIC INSTRUMENT IN THE ROOM. THEY HAVE SEEN THEIR CHILD BLOCK BEFORE AND THEY KNOW THE PATTERN. IF A PARENT SAYS "THIS IS HER SHUNT", BELIEVE THEM AND INVESTIGATE ACCORDINGLY. DISMISSING THAT STATEMENT IS THE COMMONEST ROUTE TO A DISASTER IN THIS CONDITION.',
        why_it_matters: 'A BLOCKED SHUNT CAUSES ACUTELY RAISED INTRACRANIAL PRESSURE. DETERIORATION FROM HEADACHE TO CONING AND DEATH CAN OCCUR WITHIN HOURS, AND CHILDREN COMPENSATE WELL UNTIL THEY DO NOT — THE COLLAPSE IS SUDDEN, NOT GRADUAL.',
        the_practical_rule: 'ANY CHILD WITH A SHUNT AND HEADACHE, VOMITING, DROWSINESS OR ANY BEHAVIOURAL CHANGE HAS A SHUNT MALFUNCTION UNTIL PROVEN OTHERWISE — INCLUDING WHEN THEY ALSO HAVE AN OBVIOUS VIRAL ILLNESS. Gastroenteritis and shunt blockage both cause vomiting, and a child can have both.',
      },

      section_2_clerking: {
        history:
          'Two days of increasing headache, worse in the MORNING and on lying down. Vomiting four times, mostly on waking. Off her food. More irritable and "not herself" according to her mother. Sleepy this afternoon. NO fever, no diarrhoea. Shunt inserted at 6 weeks of age; last revised 3 years ago for blockage, with an identical presentation.',
        the_features_of_raised_intracranial_pressure_in_a_child:
          'HEADACHE WORSE IN THE MORNING AND ON LYING FLAT, because recumbency raises intracranial pressure overnight · VOMITING, often without nausea and often on waking · DROWSINESS and reduced conscious level · IRRITABILITY AND BEHAVIOURAL CHANGE, which parents notice first and which is easily dismissed · declining school performance in slower presentations · VISUAL disturbance and DIPLOPIA · neck pain · and, in an INFANT, a BULGING FONTANELLE, INCREASING HEAD CIRCUMFERENCE CROSSING CENTILES, SPLAYED SUTURES, A HIGH-PITCHED CRY, POOR FEEDING and the SUNSETTING SIGN.',
        the_sunsetting_sign: 'FORCED DOWNWARD DEVIATION OF THE EYES SO THAT THE SCLERA IS VISIBLE ABOVE THE IRIS, GIVING THE APPEARANCE OF A SETTING SUN. It results from pressure on the dorsal midbrain impairing upgaze — part of PARINAUD SYNDROME. IT IS A SIGN OF SIGNIFICANTLY RAISED PRESSURE IN AN INFANT AND IS AN URGENT FINDING.',
        the_history_to_obtain_from_the_family: 'WHY THE SHUNT WAS PLACED · WHEN IT WAS LAST REVISED AND WHY · HOW MANY REVISIONS · WHAT HER BLOCKAGES USUALLY LOOK LIKE · the type of shunt and valve, and whether it is PROGRAMMABLE · WHICH NEUROSURGICAL CENTRE LOOKS AFTER HER · and whether she carries a shunt card or alert document. MOST FAMILIES CARRY THIS INFORMATION AND MOST CLINICIANS DO NOT ASK FOR IT.',
        vitals: 'BP 118/74 mmHg. Pulse 68 — RELATIVE BRADYCARDIA FOR A 9-YEAR-OLD, and a warning sign. Respiratory rate 16. Temperature 36.9. Saturation 98%. GLUCOSE 5.2. GCS 14, drowsy but rousable and orientated.',
        the_vital_sign_warning: 'BRADYCARDIA WITH HYPERTENSION AND IRREGULAR BREATHING — THE CUSHING REFLEX — IS A PRE-TERMINAL SIGN OF CRITICALLY RAISED INTRACRANIAL PRESSURE. IN CHILDREN, BRADYCARDIA IS PARTICULARLY OMINOUS AND MUST NEVER BE INTERPRETED AS "SETTLED" OR "SLEEPING".',
        examination: {
          the_shunt_itself: 'PALPATE ALONG THE ENTIRE SHUNT TRACT — from the valve behind the ear, down the neck, across the chest and abdomen to the peritoneal entry point. FEEL FOR: swelling or fluid tracking along the tubing, which suggests a break or distal blockage · redness or tenderness, suggesting infection · a discontinuity in the tubing · and tethering.',
          the_valve_pumping_test: {
            what_people_do: 'Pressing the reservoir to see whether it empties and refills.',
            the_honest_assessment: 'IT IS UNRELIABLE IN BOTH DIRECTIONS. A valve that pumps normally can still be blocked, and a valve that feels stiff may be functioning. IT MUST NOT BE USED TO EXCLUDE MALFUNCTION, and repeated vigorous pumping can itself cause problems. Note the finding, but do not act on it.',
          },
          neurological: 'GCS, pupils, and EYE MOVEMENTS — a SIXTH NERVE PALSY (failure of abduction, causing horizontal diplopia) IS A CLASSIC FALSE LOCALISING SIGN OF RAISED INTRACRANIAL PRESSURE, because the sixth nerve has a long intracranial course and is stretched. FUNDOSCOPY FOR PAPILLOEDEMA — its absence does not exclude raised pressure, particularly in acute rises. Tone, power, reflexes, coordination and gait if safe.',
          general: 'Head circumference in infants, plotted on a chart against previous measurements. Abdominal examination — a distal shunt catheter can cause a peritoneal pseudocyst, presenting with abdominal pain and a mass. Examine for other causes of headache and vomiting, but do not let finding one stop you excluding shunt malfunction.',
        },
      },

      section_3_the_ways_a_shunt_fails: {
        proximal_obstruction: 'The ventricular catheter blocks — commonly with choroid plexus, debris or glial tissue. The commonest site of failure.',
        distal_obstruction: 'The peritoneal end blocks or becomes walled off by adhesions or a pseudocyst.',
        valve_malfunction: 'The valve mechanism fails or is set incorrectly.',
        disconnection_or_fracture: 'The tubing separates at a connector or fractures, most often in the neck where repeated movement causes fatigue. IT CAN ALSO BECOME CALCIFIED AND TETHERED, AND IN A GROWING CHILD THE TUBING CAN SIMPLY BECOME TOO SHORT.',
        migration: 'The catheter migrates out of position.',
        overdrainage: {
          what_it_is: 'THE OPPOSITE PROBLEM — the shunt drains too much cerebrospinal fluid.',
          the_presentation: 'POSTURAL HEADACHE THAT IS WORSE ON STANDING AND RELIEVED BY LYING DOWN — THE EXACT OPPOSITE OF THE UNDERDRAINAGE PATTERN. It can cause subdural collections, particularly in older patients, and SLIT VENTRICLE SYNDROME.',
          why_it_matters: 'ASK ABOUT THE POSTURAL PATTERN OF THE HEADACHE — IT DISTINGUISHES OVERDRAINAGE FROM OBSTRUCTION AND POINTS IN OPPOSITE TREATMENT DIRECTIONS.',
        },
        infection: {
          the_timing: 'MOST SHUNT INFECTIONS OCCUR WITHIN THE FIRST FEW MONTHS AFTER INSERTION OR REVISION, USUALLY FROM SKIN ORGANISMS INTRODUCED AT SURGERY — COAGULASE-NEGATIVE STAPHYLOCOCCI AND STAPHYLOCOCCUS AUREUS.',
          the_presentation: 'FEVER, shunt tract erythema and tenderness, malfunction, meningism, and in ventriculoperitoneal shunts ABDOMINAL PAIN and peritonitis. IT FREQUENTLY PRESENTS AS MALFUNCTION RATHER THAN AS OBVIOUS SEPSIS, and the fever may be low-grade or absent.',
          the_rule: 'A CHILD WITH A SHUNT AND A FEVER NEEDS SHUNT INFECTION SPECIFICALLY EXCLUDED, NOT JUST A SEPTIC SCREEN.',
        },
      },

      section_4_investigations: {
        the_imaging: {
          ct_or_mri_head: 'TO ASSESS VENTRICULAR SIZE AND COMPARE IT WITH PREVIOUS SCANS. GETTING THE OLD IMAGES IS ESSENTIAL — ventricular size is meaningless in isolation and only interpretable as a change. MRI is preferred in children where available to avoid radiation, and rapid-sequence MRI protocols exist specifically for shunt assessment.',
          the_critical_limitation: {
            the_statement:
              'A NORMAL CT DOES NOT EXCLUDE SHUNT MALFUNCTION. IN A SUBSTANTIAL PROPORTION OF PROVEN BLOCKAGES THE VENTRICLES DO NOT ENLARGE — PARTICULARLY IN CHILDREN WITH LONG-STANDING SHUNTS WHOSE VENTRICLES HAVE BECOME STIFF AND NON-COMPLIANT.',
            slit_ventricle_syndrome:
              'CHRONIC OVERDRAINAGE MAKES THE VENTRICLES SMALL AND THE VENTRICULAR WALLS STIFF. WHEN THE SHUNT THEN BLOCKS, THE VENTRICLES CANNOT EXPAND, SO THE PRESSURE RISES STEEPLY WITHOUT ANY RADIOLOGICAL CHANGE. THESE CHILDREN CAN HAVE DANGEROUSLY RAISED PRESSURE AND A COMPLETELY NORMAL-LOOKING SCAN, AND THEY DETERIORATE FAST. THE SCAN IS THE MOST DANGEROUS FALSE REASSURANCE IN THIS CONDITION.',
            the_action: 'IF THE CHILD IS SYMPTOMATIC AND THE SCAN IS UNCHANGED, DISCUSS WITH NEUROSURGERY ANYWAY. THE CLINICAL PICTURE OUTRANKS THE IMAGING.',
          },
        },
        the_shunt_series: 'PLAIN RADIOGRAPHS OF THE SKULL, NECK, CHEST AND ABDOMEN FOLLOWING THE ENTIRE COURSE OF THE SHUNT, LOOKING FOR DISCONNECTION, FRACTURE, MIGRATION OR KINKING. It is cheap, quick and finds mechanical failures that head imaging cannot. IT IS FREQUENTLY OMITTED BECAUSE PEOPLE THINK ONLY OF THE HEAD.',
        ultrasound_abdomen: 'For a suspected abdominal pseudocyst if there is abdominal pain or distension.',
        shunt_tap: 'ASPIRATION FROM THE RESERVOIR BY A NEUROSURGEON — measures pressure, tests flow, and obtains cerebrospinal fluid for cell count, glucose, protein, Gram stain and culture. IT IS A NEUROSURGICAL PROCEDURE, NOT ONE FOR THE EMERGENCY DEPARTMENT, because it risks introducing infection.',
        bloods: 'Full blood count, CRP, urea and electrolytes, glucose, blood cultures if febrile. NOTE THAT INFLAMMATORY MARKERS ARE OFTEN NORMAL IN SHUNT INFECTION, particularly with coagulase-negative staphylococci, so normal results do not exclude it.',
        what_not_to_do: 'DO NOT PERFORM A LUMBAR PUNCTURE IN SUSPECTED SHUNT MALFUNCTION WITH RAISED INTRACRANIAL PRESSURE AND OBSTRUCTIVE HYDROCEPHALUS — IT RISKS HERNIATION. Cerebrospinal fluid is obtained from the shunt by the neurosurgeon.',
      },

      section_5_management: {
        a_immediate: 'ABCDE. HIGH-FLOW OXYGEN. NURSE HEAD UP AT 30 DEGREES with the neck midline. Analgesia and antiemetic. Nil by mouth. Intravenous access and bloods. CONTINUOUS OBSERVATION WITH REGULAR NEUROLOGICAL ASSESSMENT — at least hourly, and more often if deteriorating. AVOID SEDATING DRUGS that obscure the conscious level.',
        b_telephone_the_neurosurgical_centre: 'IMMEDIATELY, AND BEFORE THE IMAGING IS REPORTED. Most shunt patients are under a named neurosurgical unit that holds their history and previous imaging, and the on-call team will guide investigation and transfer. DO NOT WAIT UNTIL THE MORNING, AND DO NOT WAIT FOR A FORMAL REPORT.',
        c_if_the_child_deteriorates_acutely: {
          the_emergency: 'A RAPIDLY FALLING GCS WITH SIGNS OF HERNIATION IS A NEUROSURGICAL EMERGENCY.',
          the_actions: 'Intubate and ventilate to maintain normocapnia; brief mild hyperventilation only as a bridge. Osmotic therapy — hypertonic saline or mannitol — as a temporising measure. AND, WHERE ADVISED BY THE NEUROSURGEON AND WHERE NO OTHER OPTION EXISTS, EMERGENCY TAPPING OF THE SHUNT RESERVOIR CAN BE LIFE-SAVING BY ACUTELY LOWERING PRESSURE. THIS IS DONE UNDER NEUROSURGICAL INSTRUCTION.',
          the_transfer: 'Transfer intubated and ventilated with an appropriate escort. DO NOT DELAY TRANSFER FOR NON-ESSENTIAL INVESTIGATIONS.',
        },
        d_definitive_treatment: {
          shunt_revision: 'REPLACEMENT OF THE BLOCKED COMPONENT, OR OF THE WHOLE SYSTEM. Usually straightforward and definitive.',
          externalisation: 'IF INFECTION IS PRESENT, THE SHUNT IS USUALLY REMOVED OR EXTERNALISED, AN EXTERNAL VENTRICULAR DRAIN PLACED, AND ANTIBIOTICS GIVEN — OFTEN INTRAVENOUSLY AND SOMETIMES INTRAVENTRICULARLY — UNTIL THE FLUID IS STERILE. A NEW SHUNT IS THEN INSERTED. ANTIBIOTICS ALONE RARELY CLEAR AN INFECTED SHUNT, BECAUSE THE ORGANISMS FORM A BIOFILM ON THE PLASTIC THAT ANTIBIOTICS CANNOT PENETRATE. THAT BIOFILM PRINCIPLE IS THE SAME REASON INFECTED PROSTHETIC JOINTS AND INFECTED LINES USUALLY HAVE TO COME OUT.',
          endoscopic_third_ventriculostomy: 'AN ALTERNATIVE TO A SHUNT IN SELECTED PATIENTS WITH OBSTRUCTIVE HYDROCEPHALUS — a hole is made in the floor of the third ventricle allowing cerebrospinal fluid to bypass the obstruction. IT AVOIDS HAVING A DEVICE AT ALL, WHICH AVOIDS BLOCKAGE AND INFECTION, BUT IT IS NOT SUITABLE FOR EVERY CAUSE AND CAN ALSO FAIL.',
        },
        e_before_discharge: {
          the_shunt_card: 'ENSURE THE FAMILY HAVE AN UP-TO-DATE SHUNT CARD OR ALERT DOCUMENT stating the type of shunt, the valve setting if programmable, the date and reason for the last revision, and the neurosurgical centre and contact number. IT IS THE DOCUMENT THAT SAVES TIME AT THE NEXT PRESENTATION, AND IT IS OFTEN OUT OF DATE.',
          the_programmable_valve_warning: 'PROGRAMMABLE VALVES CAN BE REPROGRAMMED BY STRONG MAGNETIC FIELDS — MOST IMPORTANTLY MRI. THE SETTING MUST BE CHECKED AND RESET AFTER ANY MRI SCAN. Failing to do so leaves the child with a wrong setting and a subsequent presentation nobody can explain.',
          the_safety_netting: 'GIVE WRITTEN ADVICE ON THE SYMPTOMS OF MALFUNCTION AND INFECTION AND EXACTLY WHERE TO GO. TELL THE FAMILY EXPLICITLY THAT THEY SHOULD PRESENT EARLY AND THAT THEIR JUDGEMENT ABOUT THEIR OWN CHILD IS TRUSTED — many families delay because a previous attendance made them feel they were overreacting.',
        },
      },

      section_6_teaching_points: {
        bonus_1_believe_the_parents:
          'They have seen their child block before and they know the pattern. "This is exactly how she was last time" is high-quality diagnostic information. Dismissing it is the commonest route to disaster in this condition.',
        bonus_2_a_normal_ct_does_not_exclude_a_blocked_shunt:
          'In a substantial proportion of proven blockages the ventricles do not enlarge. In SLIT VENTRICLE SYNDROME, chronic overdrainage has made the ventricles stiff and non-compliant, so pressure rises steeply with no radiological change. These children deteriorate fast with a normal-looking scan.',
        bonus_3_get_the_old_images:
          'Ventricular size is meaningless in isolation and only interpretable as a CHANGE. Comparing with the previous scan is the whole point of the imaging.',
        bonus_4_do_the_shunt_series:
          'Plain films along the whole tract find disconnection, fracture, migration and kinking that head imaging cannot. It is cheap and quick and it is routinely omitted because people think only of the head.',
        bonus_5_the_postural_pattern_separates_two_opposite_problems:
          'Headache worse LYING DOWN and in the morning suggests UNDERDRAINAGE and obstruction. Headache worse STANDING and relieved by lying suggests OVERDRAINAGE. They point in opposite treatment directions and one question distinguishes them.',
        bonus_6_the_valve_pumping_test_proves_nothing:
          'A valve that pumps normally can be blocked and a stiff valve may be working. Note it, but never use it to exclude malfunction — and do not pump repeatedly.',
        bonus_7_an_infected_shunt_usually_has_to_come_out:
          'Organisms form a biofilm on the plastic that antibiotics cannot penetrate — the same principle as an infected prosthetic joint or line. Externalise, treat, and reshunt when the fluid is sterile.',
        trap_1: 'BRADYCARDIA in a child with a shunt is ominous, not reassuring — it is part of the Cushing reflex.',
        trap_2: 'DO NOT perform a lumbar puncture in suspected obstructive hydrocephalus — it risks herniation.',
        trap_3: 'Normal inflammatory markers do not exclude shunt infection, particularly with coagulase-negative staphylococci.',
        trap_4: 'A sixth nerve palsy is a FALSE localising sign of raised pressure.',
        trap_5: 'Absence of papilloedema does not exclude raised pressure, especially in acute rises.',
        trap_6: 'PROGRAMMABLE VALVES MUST BE CHECKED AND RESET AFTER ANY MRI.',
        trap_7: 'A child can have gastroenteritis AND a blocked shunt — finding one cause does not exclude the other.',
        one_line_summary: 'Blocked ventriculoperitoneal shunt. Believe the mother, telephone the neurosurgical centre before the scan is reported, get the old images and a shunt series — and remember that a normal CT is the most dangerous reassurance in this condition.',
      },
    },
    warnings: [
      'BELIEVE THE PARENTS — "this is how she was last time it blocked" is high-quality diagnostic information.',
      'ANY child with a shunt and headache, vomiting, drowsiness or behavioural change has a MALFUNCTION until proven otherwise.',
      'A NORMAL CT DOES NOT EXCLUDE SHUNT MALFUNCTION — in slit ventricle syndrome the ventricles cannot expand and pressure rises with no radiological change.',
      'GET THE OLD IMAGES — ventricular size is only interpretable as a change.',
      'DO A SHUNT SERIES — plain films along the whole tract find disconnection and fracture that head imaging cannot.',
      'BRADYCARDIA in a child with a shunt is OMINOUS — part of the Cushing reflex, never a sign of settling.',
      'DO NOT PERFORM A LUMBAR PUNCTURE in suspected obstructive hydrocephalus — it risks herniation.',
      'THE VALVE PUMPING TEST IS UNRELIABLE in both directions and must not be used to exclude malfunction.',
      'Headache worse LYING DOWN suggests obstruction; worse STANDING suggests OVERDRAINAGE — opposite treatments.',
      'NORMAL INFLAMMATORY MARKERS DO NOT EXCLUDE SHUNT INFECTION, particularly coagulase-negative staphylococci.',
      'AN INFECTED SHUNT USUALLY HAS TO COME OUT — biofilm on the plastic resists antibiotics.',
      'TELEPHONE THE NEUROSURGICAL CENTRE IMMEDIATELY, before the imaging is reported.',
      'A SIXTH NERVE PALSY is a FALSE localising sign, and absent papilloedema does not exclude raised pressure.',
      'PROGRAMMABLE VALVES MUST BE CHECKED AND RESET AFTER ANY MRI.',
      'A child can have gastroenteritis AND a blocked shunt — one diagnosis does not exclude the other.',
      'Management here is a teaching example. Follow the advice of the child named neurosurgical centre.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Imaging protocols, shunt tap policy and infection management follow the responsible neurosurgical unit.',
      'Emergency shunt tapping outside a neurosurgical unit is done only under neurosurgical instruction.',
    ],
    cards: [
      { q: 'Who is the most reliable diagnostic instrument here?', a: 'The parents — they have seen their child block before and know the pattern.' },
      { q: 'Does a normal CT exclude shunt malfunction?', a: 'No — in a substantial proportion the ventricles do not enlarge, especially in slit ventricle syndrome.' },
      { q: 'What is slit ventricle syndrome?', a: 'Chronic overdrainage makes ventricles small and stiff, so on blockage pressure rises steeply with no radiological change.' },
      { q: 'What is a shunt series?', a: 'Plain films of skull, neck, chest and abdomen following the whole tract, looking for disconnection, fracture or migration.' },
      { q: 'How does the postural pattern of headache help?', a: 'Worse lying down suggests obstruction; worse standing suggests overdrainage — opposite problems.' },
      { q: 'What is the sunsetting sign?', a: 'Forced downward eye deviation with sclera visible above the iris, from dorsal midbrain pressure — raised pressure in an infant.' },
      { q: 'Is the valve pumping test reliable?', a: 'No — a valve that pumps can be blocked and a stiff valve may work. Never use it to exclude malfunction.' },
      { q: 'Why must an infected shunt usually be removed?', a: 'Organisms form a biofilm on the plastic that antibiotics cannot penetrate.' },
      { q: 'Why is a lumbar puncture contraindicated?', a: 'Obstructive hydrocephalus with raised pressure — it risks herniation.' },
      { q: 'What must happen after an MRI in a patient with a programmable valve?', a: 'The setting must be checked and reset — strong magnetic fields can reprogram it.' },
      { q: 'What does bradycardia in a child with a shunt mean?', a: 'Part of the Cushing reflex — critically raised intracranial pressure, never a sign of settling.' },
      { q: 'What is an endoscopic third ventriculostomy?', a: 'A hole in the floor of the third ventricle bypassing the obstruction — avoids a device, but is not suitable for every cause.' },
    ],
    checks: [
      'Parents account taken seriously and documented',
      'Reason for shunt, revision history and centre established',
      'Shunt card or alert document requested',
      'Postural pattern of the headache asked about',
      'Whole shunt tract palpated',
      'GCS, pupils, eye movements and fundi examined',
      'Head circumference plotted in an infant',
      'Neurosurgical centre telephoned before imaging is reported',
      'CT or rapid MRI obtained AND compared with previous imaging',
      'Shunt series performed',
      'Lumbar puncture NOT performed',
      'Hourly neurological observations with sedating drugs avoided',
      'Nursed head up 30 degrees with the neck midline',
      'Shunt infection considered even with normal inflammatory markers',
      'Transfer arranged without waiting for non-essential investigations',
      'Shunt card updated and written safety-netting given before discharge',
    ],
    related: ['raised_intracranial_pressure_the_monro_kellie_doctrine_cushing_reflex_and_herniation'],
  },
];
