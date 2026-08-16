/**
 * CASE SCENARIOS — Vascular surgery: acute limb ischaemia and ruptured AAA.
 *
 * Batch 5, part 2.
 */

export default [
  {
    id: 'AS-CASE-0043',
    type: 'case',
    specialty: 'Surgery — Vascular surgery',
    teaching_case: true,
    title: 'CASE: A White, Cold, Painful Leg Six Hours After It Started',
    short: 'Case: acute limb ischaemia',
    summary:
      'A 74-year-old in atrial fibrillation with a pulseless white leg. Teaches the six Ps in the order they actually appear, why fixed mottling means the limb is dead, the Rutherford categories that decide the operation, and why reperfusion can kill the patient.',
    domains: ['vascular_surgery', 'emergency_medicine', 'cardiovascular'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case acute limb ischaemia', 'white leg case', 'six ps case', 'embolus limb',
      'rutherford classification limb', 'embolectomy case', 'fogarty catheter',
      'fixed mottling', 'reperfusion syndrome', 'crush syndrome limb',
    ],
    terms: [
      'case', 'acute limb ischaemia', 'six ps', 'embolus', 'thrombosis in situ',
      'rutherford classification', 'embolectomy', 'fogarty catheter', 'thrombolysis',
      'fixed mottling', 'reperfusion injury', 'rhabdomyolysis', 'hyperkalaemia',
      'compartment syndrome', 'fasciotomy', 'ankle brachial pressure index',
      'intermittent claudication', 'critical limb ischaemia',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '74-year-old woman in atrial fibrillation, not anticoagulated, with sudden onset 6 hours ago of a painful, white, cold right leg. She cannot move her toes and the foot feels numb.',

      section_1_the_six_ps_in_the_order_they_appear: {
        the_correction_that_matters:
          'THE SIX Ps ARE USUALLY LISTED ALPHABETICALLY OR BY MEMORABILITY. THEY SHOULD BE LEARNED IN THE ORDER THEY APPEAR CLINICALLY, BECAUSE THAT ORDER IS THE PROGNOSIS.',
        the_order: {
          one_pain: 'FIRST. Sudden, severe and constant. Ask exactly when it started — the clock starts there.',
          two_pallor: 'The limb is white, then becomes mottled. See below for why mottling is the critical observation.',
          three_pulselessness: 'ABSENT PULSES DISTAL TO THE OCCLUSION. FEEL BOTH LEGS AND COMPARE — the contralateral pulses tell you whether the patient has pulses at all normally, which is the key to the embolus-versus-thrombosis question.',
          four_perishing_cold: 'Feel with the BACK OF YOUR HAND along both limbs simultaneously and identify the LEVEL at which the temperature changes. That level is roughly one joint below the occlusion.',
          five_paraesthesia: 'THE FIRST SIGN OF NERVE ISCHAEMIA AND THE FIRST OMINOUS ONE. Sensory nerves are the most metabolically sensitive tissue in the limb and fail before muscle. LOSS OF LIGHT TOUCH AND PROPRIOCEPTION BETWEEN THE TOES IS AN EARLY WARNING THAT THE LIMB IS THREATENED, AND IT IS ONLY FOUND IF YOU TEST FOR IT.',
          six_paralysis: 'THE LATEST AND WORST. INABILITY TO MOVE THE TOES OR FOOT MEANS MUSCLE ISCHAEMIA IS ESTABLISHED AND THE LIMB IS IMMEDIATELY THREATENED. A PATIENT WITH PARALYSIS NEEDS REVASCULARISATION NOW, NOT AN INVESTIGATION.',
        },
        the_practical_summary:
          'PAIN, PALLOR, PULSELESSNESS AND COLDNESS TELL YOU THERE IS ISCHAEMIA. PARAESTHESIA AND PARALYSIS TELL YOU HOW URGENT IT IS. THE NEUROLOGICAL FINDINGS, NOT THE COLOUR, DETERMINE WHETHER THE LIMB IS VIABLE, THREATENED OR ALREADY LOST — AND THEY ARE THE TWO MOST OFTEN NOT EXAMINED.',
        the_time_window: 'IRREVERSIBLE MUSCLE AND NERVE DAMAGE BEGINS AT ROUGHLY 4 TO 6 HOURS. SHE IS AT 6 HOURS WITH PARALYSIS AND SENSORY LOSS. THIS IS AN IMMEDIATE THREAT.',
      },

      section_2_the_distinction_that_determines_the_operation: {
        the_question: 'IS THIS AN EMBOLUS ON A NORMAL ARTERY, OR THROMBOSIS ON A DISEASED ONE? THE TWO NEED DIFFERENT OPERATIONS, AND THE ANSWER IS LARGELY IN THE HISTORY AND THE OTHER LEG.',
        embolus: {
          the_features: 'SUDDEN, DRAMATIC ONSET — the patient names the minute · NO history of claudication · A CLEAR EMBOLIC SOURCE, above all ATRIAL FIBRILLATION, also recent myocardial infarction with mural thrombus, prosthetic valves, endocarditis, aneurysm (aortic, popliteal) and, rarely, paradoxical embolism through a patent foramen ovale · NORMAL PULSES IN THE CONTRALATERAL LIMB, because the arteries are not diseased · and POOR COLLATERALS, so the ischaemia is PROFOUND.',
          the_common_site: 'THE COMMON FEMORAL BIFURCATION is the commonest site in the leg, because the vessel narrows there. Also the popliteal trifurcation and the aortic bifurcation — a SADDLE EMBOLUS at the aortic bifurcation causes BILATERAL leg ischaemia with absent femoral pulses and is rapidly fatal.',
          the_operation: 'EMBOLECTOMY, usually with a FOGARTY BALLOON CATHETER passed through a femoral arteriotomy, often under LOCAL ANAESTHESIA. It is quick and can be dramatically effective.',
        },
        thrombosis_in_situ: {
          the_features: 'MORE INSIDIOUS onset over hours to days · A HISTORY OF INTERMITTENT CLAUDICATION, rest pain or previous vascular intervention · ABSENT OR REDUCED PULSES IN THE OTHER LEG TOO, because the disease is systemic · vascular risk factors — smoking, diabetes, hypertension, hyperlipidaemia · and WELL-DEVELOPED COLLATERALS, so the ischaemia may be LESS PROFOUND despite complete occlusion.',
          the_operation: 'MORE COMPLEX — angioplasty and stenting, thrombolysis, or a BYPASS. Simple embolectomy will fail, because the underlying stenosis remains. IT REQUIRES IMAGING TO PLAN, which is why a stable thrombotic patient may be imaged first while an embolic patient with a threatened limb goes straight to theatre.',
        },
        the_practical_point: 'EXAMINE THE OTHER LEG. NORMAL PULSES ON THE CONTRALATERAL SIDE IN A PATIENT WITH ATRIAL FIBRILLATION AND A SUDDEN WHITE LEG STRONGLY SUGGESTS AN EMBOLUS AND SUPPORTS PROCEEDING DIRECTLY TO EMBOLECTOMY. It takes ten seconds and it changes the operation.',
      },

      section_3_clerking_and_examination: {
        history: 'Sudden severe right leg pain 6 hours ago while sitting. NO previous leg pain on walking. She has atrial fibrillation and DECLINED ANTICOAGULATION. No previous vascular surgery.',
        vitals: 'BP 148/88 mmHg. Pulse 96, IRREGULARLY IRREGULAR. Temperature 36.6. Respiratory rate 18. Glucose 7.2.',
        examination: {
          the_leg: 'RIGHT LEG WHITE AND COLD FROM THE MID-THIGH DOWN, with a clear temperature demarcation. FEMORAL PULSE PRESENT, POPLITEAL AND DISTAL PULSES ABSENT — placing the occlusion at the femoral bifurcation or superficial femoral artery.',
          the_other_leg: 'ALL PULSES PRESENT AND NORMAL — supporting embolus rather than thrombosis.',
          neurological: 'REDUCED SENSATION over the forefoot and toes. UNABLE TO MOVE THE TOES. Calf soft but tender.',
          the_calf_examination: 'A TENSE, HARD, TENDER CALF SUGGESTS ESTABLISHED MUSCLE INFARCTION OR COMPARTMENT SYNDROME AND IS AN OMINOUS SIGN. Squeeze the calf gently and compare sides.',
          the_mottling_that_decides_everything: {
            blanching_mottling: 'Mottled skin that BLANCHES ON PRESSURE AND REFILLS. THE CAPILLARY BED IS STILL PATENT AND THE LIMB IS SALVAGEABLE.',
            fixed_mottling: 'Mottling that DOES NOT BLANCH — a dark, purple, fixed pattern. THE CAPILLARIES HAVE THROMBOSED. THE LIMB IS IRREVERSIBLY LOST, AND REVASCULARISATION AT THIS STAGE WILL NOT SAVE IT — IT WILL RELEASE A LETHAL LOAD OF POTASSIUM AND MYOGLOBIN INTO THE CIRCULATION AND MAY KILL THE PATIENT.',
            the_point: 'PRESS ON THE MOTTLING. IT TAKES TWO SECONDS AND IT IS THE OBSERVATION THAT SEPARATES A LIMB THAT SHOULD BE REVASCULARISED FROM ONE THAT REQUIRES PRIMARY AMPUTATION OR PALLIATION.',
          },
          also_examine: 'The heart for atrial fibrillation and murmurs. The abdomen for an aneurysm. BOTH POPLITEAL FOSSAE for aneurysm — a popliteal aneurysm is a classic embolic source and thrombosis of one is a classic cause of acute limb ischaemia, and it is missed because the popliteal fossa is not palpated.',
        },
        handheld_doppler: 'AN ESSENTIAL BEDSIDE TOOL. Listen at the dorsalis pedis and posterior tibial arteries. AN AUDIBLE ARTERIAL SIGNAL MEANS SOME FLOW REMAINS. AN ABSENT ARTERIAL SIGNAL WITH AN ABSENT VENOUS SIGNAL IS AN OMINOUS COMBINATION indicating a very severely compromised limb. NOTE THAT A DOPPLER SIGNAL MAY BE PRESENT WHEN A PULSE IS NOT PALPABLE — so "no palpable pulse" and "no flow" are different statements.',
      },

      section_4_the_rutherford_classification_which_decides_the_plan: {
        why_it_matters: 'IT TRANSLATES THE EXAMINATION INTO A DECISION. THE THREE THINGS THAT DETERMINE THE CATEGORY ARE SENSORY LOSS, MUSCLE WEAKNESS AND DOPPLER SIGNALS.',
        the_categories: {
          i_viable: 'NO sensory loss, NO muscle weakness, ARTERIAL AND VENOUS DOPPLER SIGNALS AUDIBLE. NOT IMMEDIATELY THREATENED. There is time for imaging and a planned procedure.',
          iia_marginally_threatened: 'MINIMAL sensory loss, confined to the toes, NO muscle weakness. ARTERIAL SIGNAL OFTEN INAUDIBLE, venous audible. SALVAGEABLE IF PROMPTLY TREATED.',
          iib_immediately_threatened: 'SENSORY LOSS BEYOND THE TOES WITH REST PAIN, AND MILD TO MODERATE MUSCLE WEAKNESS. ARTERIAL SIGNAL INAUDIBLE, venous audible. SALVAGEABLE ONLY WITH IMMEDIATE REVASCULARISATION. THIS IS AN EMERGENCY AND THE PATIENT GOES TO THEATRE, NOT TO THE SCANNER.',
          iii_irreversible: 'PROFOUND ANAESTHESIA, PROFOUND PARALYSIS OR RIGOR, FIXED MOTTLING. BOTH ARTERIAL AND VENOUS SIGNALS INAUDIBLE. MAJOR TISSUE LOSS AND PERMANENT NERVE DAMAGE ARE INEVITABLE. THE LIMB CANNOT BE SAVED — THE DECISION IS PRIMARY AMPUTATION OR, IN A DYING PATIENT, PALLIATION.',
        },
        her_category: 'SENSORY LOSS BEYOND THE TOES AND INABILITY TO MOVE THE TOES, WITH BLANCHING MOTTLING AND A VENOUS BUT NO ARTERIAL DOPPLER SIGNAL — CATEGORY IIb, IMMEDIATELY THREATENED. SHE NEEDS REVASCULARISATION NOW.',
        the_decision_rule_that_follows: 'CATEGORY I AND IIa MAY BE IMAGED FIRST. CATEGORY IIb GOES STRAIGHT TO THEATRE — IMAGING IS DONE ON TABLE IF NEEDED. CATEGORY III IS NOT REVASCULARISED.',
      },

      section_5_management: {
        a_immediate: {
          heparin: 'FULL SYSTEMIC HEPARINISATION IMMEDIATELY — an intravenous bolus followed by infusion, unless contraindicated. IT DOES NOT DISSOLVE THE EXISTING CLOT, BUT IT PREVENTS PROPAGATION OF THROMBUS PROXIMALLY AND DISTALLY, WHICH PRESERVES THE RUN-OFF VESSELS AND THEREFORE THE OPERABILITY OF THE LIMB. It is the single most useful thing to do while waiting for the surgeon.',
          the_rest: 'OXYGEN. ANALGESIA — this is severe pain and requires opioids. INTRAVENOUS FLUID. NIL BY MOUTH. Bloods including full blood count, urea and electrolytes, POTASSIUM, CREATINE KINASE, clotting, GROUP AND CROSS-MATCH. ECG for atrial fibrillation and myocardial infarction. KEEP THE LIMB AT OR BELOW THE LEVEL OF THE HEART, NOT ELEVATED, and KEEP IT WARM BUT DO NOT APPLY DIRECT HEAT — an anaesthetic limb burns easily and the patient cannot feel it. Protect the heel and pressure areas.',
          call_vascular_surgery_immediately: 'BY TELEPHONE. State the Rutherford category. A category IIb limb is as urgent as any surgical emergency in the hospital.',
        },
        b_imaging: {
          the_rule: 'DO NOT DELAY REVASCULARISATION OF A CATEGORY IIb LIMB FOR IMAGING. Time to reperfusion determines the outcome.',
          when_it_helps: 'CT ANGIOGRAPHY defines the anatomy, the level of occlusion and the run-off, and is valuable in a VIABLE or MARGINALLY threatened limb, and in suspected thrombosis where a bypass may be needed. On-table angiography is used when the patient goes directly to theatre.',
        },
        c_revascularisation: {
          embolectomy: 'For an embolus. A FOGARTY BALLOON CATHETER is passed beyond the clot through an arteriotomy, the balloon is inflated, and the catheter is withdrawn, dragging the clot out. Often under LOCAL ANAESTHETIC, which matters in a frail patient with cardiac disease. ON-TABLE ANGIOGRAPHY afterwards confirms clearance of the run-off.',
          for_thrombosis: 'ANGIOPLASTY AND STENTING, SURGICAL BYPASS, or thrombectomy combined with treatment of the underlying lesion. Requires planning and imaging.',
          catheter_directed_thrombolysis: 'A catheter is placed into the clot and a thrombolytic infused over hours. SUITABLE FOR CATEGORY I AND SOME IIa LIMBS WHERE THERE IS TIME, and useful for distal clot that cannot be reached surgically. NOT SUITABLE FOR A CATEGORY IIb LIMB, because it takes hours the limb does not have. Contraindicated with recent surgery, stroke, bleeding or coagulopathy.',
          primary_amputation: 'FOR A CATEGORY III LIMB. It is not a failure — it is the correct operation, and attempting revascularisation of dead muscle can kill the patient.',
        },
        d_the_reperfusion_that_can_kill: {
          the_mechanism: 'ISCHAEMIC MUSCLE ACCUMULATES POTASSIUM, HYDROGEN IONS, MYOGLOBIN AND INFLAMMATORY MEDIATORS. WHEN FLOW IS RESTORED, ALL OF IT ENTERS THE SYSTEMIC CIRCULATION AT ONCE.',
          the_consequences: 'HYPERKALAEMIA CAUSING ARRHYTHMIA AND CARDIAC ARREST · SEVERE METABOLIC ACIDOSIS · MYOGLOBINURIA CAUSING ACUTE KIDNEY INJURY · massive fluid shift and hypotension · and ARDS from inflammatory mediators. THIS IS THE SAME PHYSIOLOGY AS CRUSH SYNDROME.',
          the_management: 'ANTICIPATE IT WITH THE ANAESTHETIST BEFORE THE CLAMP COMES OFF. GENEROUS INTRAVENOUS FLUID BEFORE AND DURING REPERFUSION. MONITOR POTASSIUM AND THE ECG CONTINUOUSLY, and have CALCIUM, INSULIN-DEXTROSE and bicarbonate available. Monitor creatine kinase, renal function and urine output. Involve critical care.',
          the_teaching_point: 'THE PATIENT CAN ARREST AT THE MOMENT THE OPERATION SUCCEEDS. THIS IS NOT A THEORETICAL RISK, AND IT IS THE REASON A CATEGORY III LIMB IS AMPUTATED RATHER THAN REVASCULARISED.',
        },
        e_compartment_syndrome_after_reperfusion: {
          why_it_happens: 'REPERFUSED MUSCLE SWELLS DRAMATICALLY. In the tight fascial compartments of the calf, this raises compartment pressure and causes a SECONDARY compartment syndrome — after a technically successful operation.',
          the_action: 'MONITOR THE LIMB CLOSELY AFTERWARDS FOR PAIN, TENSENESS AND PAIN ON PASSIVE STRETCH. MANY SURGEONS PERFORM PROPHYLACTIC FASCIOTOMY at the time of revascularisation where ischaemia has been prolonged — generally beyond about 4 to 6 hours — precisely because the syndrome is predictable. A LIMB THAT IS SUCCESSFULLY REVASCULARISED AND THEN LOST TO COMPARTMENT SYNDROME IS A PARTICULARLY AVOIDABLE TRAGEDY.',
        },
        f_afterwards_and_the_prevention_that_was_missed: {
          find_the_source: 'ECHOCARDIOGRAM for cardiac thrombus, valve disease or endocarditis. Assess for aneurysm — aortic and POPLITEAL, and examine both popliteal fossae. Rhythm monitoring if atrial fibrillation is suspected but not documented. Thrombophilia screen in a young patient without an obvious source.',
          anticoagulation: 'LIFELONG anticoagulation for atrial fibrillation or another cardiac source.',
          the_conversation_that_should_have_happened_earlier:
            'SHE HAS ATRIAL FIBRILLATION AND DECLINED ANTICOAGULATION. THE SAME EMBOLIC MECHANISM CAUSES STROKE AND MESENTERIC ISCHAEMIA. When a patient declines anticoagulation, explain concretely WHAT it prevents, and REVISIT the conversation rather than recording a refusal once and never raising it again. A decision made two years ago on partial information is not informed consent for today.',
          secondary_prevention: 'Antiplatelet and statin where the mechanism is atherosclerotic. Smoking cessation, blood pressure and diabetes control. Supervised exercise and vascular follow-up for peripheral arterial disease.',
          the_honest_prognosis: 'ACUTE LIMB ISCHAEMIA CARRIES HIGH MORBIDITY AND MORTALITY — these are elderly patients with cardiac disease undergoing urgent surgery. Amputation and death rates are both substantial. Discuss this honestly with the patient and family before the operation.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_six_ps_in_clinical_order_are_a_prognosis:
          'Pain, pallor, pulselessness and coldness say there is ischaemia. PARAESTHESIA and PARALYSIS say how urgent it is — nerve is the most sensitive tissue and fails before muscle. Those two are the ones that determine viability, and they are the two most often not examined.',
        bonus_2_press_on_the_mottling:
          'Mottling that BLANCHES means the capillary bed is patent and the limb is salvageable. FIXED mottling that does not blanch means the capillaries have thrombosed, the limb is lost, and revascularisation will release a lethal potassium and myoglobin load. Two seconds separates revascularisation from amputation.',
        bonus_3_examine_the_other_leg:
          'Normal contralateral pulses with a sudden white leg in atrial fibrillation means EMBOLUS on a normal artery — a Fogarty embolectomy, often under local anaesthetic. Absent contralateral pulses with a claudication history means THROMBOSIS on diseased artery — which needs imaging and a bypass, and where simple embolectomy will fail.',
        bonus_4_heparin_immediately_even_though_it_dissolves_nothing:
          'It prevents propagation of thrombus proximally and distally, preserving the run-off vessels and therefore the operability of the limb. It is the most useful thing to do while waiting for the surgeon.',
        bonus_5_rutherford_translates_examination_into_a_decision:
          'I and IIa may be imaged first. IIb goes STRAIGHT to theatre. III is not revascularised. Sensory loss, muscle weakness and Doppler signals are the three inputs.',
        bonus_6_the_patient_can_arrest_when_the_operation_succeeds:
          'Reperfusion releases potassium, acid, myoglobin and inflammatory mediators simultaneously — the physiology of crush syndrome. Anticipate it with the anaesthetist before the clamp comes off, with fluid, ECG monitoring and hyperkalaemia treatment ready.',
        bonus_7_prophylactic_fasciotomy_after_prolonged_ischaemia:
          'Reperfused muscle swells and causes a SECONDARY compartment syndrome after a technically successful operation. Many surgeons fasciotomise prophylactically beyond 4 to 6 hours of ischaemia, because the syndrome is predictable.',
        trap_1: 'Do NOT elevate the limb and do NOT apply direct heat — an anaesthetic limb burns and the patient cannot feel it.',
        trap_2: 'Palpate BOTH popliteal fossae — a popliteal aneurysm is a classic source and a classic cause, and it is missed because nobody feels for it.',
        trap_3: 'A Doppler signal can be present when a pulse is not palpable — "no palpable pulse" and "no flow" are different statements.',
        trap_4: 'Thrombolysis takes hours a category IIb limb does not have.',
        trap_5: 'A tense, hard, tender calf suggests established muscle infarction — an ominous sign.',
        trap_6: 'A saddle embolus at the aortic bifurcation causes BILATERAL ischaemia with absent femoral pulses and is rapidly fatal.',
        trap_7: 'Primary amputation for a category III limb is the correct operation, not a failure.',
        one_line_summary: 'Category IIb acute limb ischaemia from an embolus in untreated atrial fibrillation. Heparinise now, press on the mottling, examine the other leg, straight to theatre for embolectomy — and warn the anaesthetist about the potassium before the clamp comes off.',
      },
    },
    warnings: [
      'PARAESTHESIA AND PARALYSIS are the signs that determine urgency — and they are the two most often not examined.',
      'PRESS ON THE MOTTLING — fixed, non-blanching mottling means the limb is irreversibly lost.',
      'REVASCULARISING A DEAD LIMB CAN KILL THE PATIENT — a lethal load of potassium and myoglobin is released.',
      'GIVE SYSTEMIC HEPARIN IMMEDIATELY — it prevents thrombus propagation and preserves the run-off vessels.',
      'EXAMINE THE OTHER LEG — normal contralateral pulses suggest embolus; absent ones suggest thrombosis on diseased artery.',
      'CATEGORY IIb GOES STRAIGHT TO THEATRE — do not delay revascularisation for imaging.',
      'THROMBOLYSIS TAKES HOURS a category IIb limb does not have.',
      'ANTICIPATE REPERFUSION INJURY with the anaesthetist BEFORE the clamp comes off — hyperkalaemia, acidosis, myoglobinuria.',
      'CONSIDER PROPHYLACTIC FASCIOTOMY after prolonged ischaemia — reperfused muscle swells and causes secondary compartment syndrome.',
      'DO NOT ELEVATE the limb and DO NOT apply direct heat — an anaesthetic limb burns unnoticed.',
      'PALPATE BOTH POPLITEAL FOSSAE — popliteal aneurysm is a classic source and cause and is routinely missed.',
      'A Doppler signal may be present when no pulse is palpable — the two statements are not the same.',
      'A SADDLE EMBOLUS at the aortic bifurcation causes bilateral ischaemia with absent femoral pulses and is rapidly fatal.',
      'PRIMARY AMPUTATION for a category III limb is the correct operation, not a failure.',
      'Management here is a teaching example. Follow local vascular surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Thrombolysis protocols, imaging pathways and fasciotomy policy vary between vascular units.',
      'Decisions about primary amputation and palliation are senior surgical judgements made with the patient and family.',
    ],
    cards: [
      { q: 'Which of the six Ps determine urgency?', a: 'Paraesthesia and paralysis — nerve is the most sensitive tissue and fails before muscle.' },
      { q: 'What does fixed, non-blanching mottling mean?', a: 'The capillary bed has thrombosed — the limb is irreversibly lost.' },
      { q: 'Why give heparin immediately?', a: 'It does not dissolve clot but prevents propagation, preserving the run-off vessels and the operability of the limb.' },
      { q: 'How does examining the other leg change the operation?', a: 'Normal contralateral pulses suggest embolus (embolectomy); absent ones suggest thrombosis on diseased artery (bypass).' },
      { q: 'Give the Rutherford categories and their implications.', a: 'I viable (image first), IIa marginally threatened, IIb immediately threatened (straight to theatre), III irreversible (amputate).' },
      { q: 'What are the three inputs to the Rutherford category?', a: 'Sensory loss, muscle weakness and Doppler signals.' },
      { q: 'Where do emboli commonly lodge in the leg?', a: 'The common femoral bifurcation, the popliteal trifurcation, and the aortic bifurcation (saddle embolus).' },
      { q: 'What is a Fogarty catheter used for?', a: 'Balloon embolectomy — passed beyond the clot, inflated and withdrawn to drag it out, often under local anaesthetic.' },
      { q: 'Describe reperfusion syndrome.', a: 'Potassium, acid, myoglobin and inflammatory mediators released at once — arrhythmia, acidosis, acute kidney injury and ARDS.' },
      { q: 'Why is prophylactic fasciotomy considered?', a: 'Reperfused muscle swells, causing secondary compartment syndrome after a technically successful revascularisation.' },
      { q: 'When is catheter-directed thrombolysis appropriate?', a: 'Category I and some IIa limbs where there is time — not IIb, which cannot wait hours.' },
      { q: 'Why must the limb not be warmed directly?', a: 'It is anaesthetic — the patient cannot feel a burn.' },
    ],
    checks: [
      'Time of onset established',
      'All six Ps assessed, including sensation and toe movement',
      'Mottling tested for blanching',
      'Both legs examined and pulses compared',
      'Both popliteal fossae palpated for aneurysm',
      'Handheld Doppler used for arterial and venous signals',
      'Rutherford category assigned and documented',
      'Systemic heparin given immediately',
      'Opioid analgesia given',
      'Limb kept at or below heart level, warm but without direct heat',
      'Vascular surgery telephoned with the Rutherford category stated',
      'Imaging NOT delaying theatre in a category IIb limb',
      'Potassium, creatine kinase and renal function checked',
      'Anaesthetist warned about reperfusion before the clamp is released',
      'Fasciotomy considered after prolonged ischaemia',
      'Embolic source investigated and lifelong anticoagulation arranged',
      'Prognosis discussed honestly before surgery',
    ],
    related: ['peripheral_arterial_disease_and_the_ischaemic_limb'],
  },

  {
    id: 'AS-CASE-0044',
    type: 'case',
    specialty: 'Surgery — Vascular surgery',
    teaching_case: true,
    title: 'CASE: Collapse with Back Pain in a 78-Year-Old Man',
    short: 'Case: ruptured abdominal aortic aneurysm',
    summary:
      'A 78-year-old smoker with sudden back pain, collapse and a pulsatile mass. Teaches the triad and why it is often incomplete, why this is misdiagnosed as renal colic, why permissive hypotension applies, and why the only useful action in the emergency department is to get him to theatre.',
    domains: ['vascular_surgery', 'emergency_medicine', 'trauma'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case ruptured aaa', 'abdominal aortic aneurysm rupture case', 'pulsatile mass',
      'aaa triad', 'permissive hypotension aaa', 'evar case', 'aortic screening',
      'renal colic mimic', 'retroperitoneal haemorrhage',
    ],
    terms: [
      'case', 'abdominal aortic aneurysm', 'ruptured aaa', 'pulsatile expansile mass',
      'retroperitoneal haemorrhage', 'permissive hypotension', 'evar', 'open repair',
      'aortic screening programme', 'abdominal aortic diameter', 'contained rupture',
      'aortocaval fistula', 'aortoenteric fistula', 'laplace law aneurysm',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '78-year-old man, lifelong smoker, collapsed at home with sudden severe central abdominal and back pain 40 minutes ago. Blood pressure 82/48, pulse 118, cold and clammy, with a pulsatile mass in the abdomen.',

      section_1_recognition: {
        the_classic_triad: {
          the_three: 'SUDDEN ABDOMINAL OR BACK PAIN · HYPOTENSION OR COLLAPSE · A PULSATILE ABDOMINAL MASS.',
          the_honest_caveat: 'ALL THREE ARE PRESENT IN ONLY ABOUT HALF OF PATIENTS. THE MASS IS DIFFICULT OR IMPOSSIBLE TO FEEL IN AN OBESE PATIENT, AND MAY BE ABSENT IF THE PATIENT IS PROFOUNDLY HYPOTENSIVE. THE ABSENCE OF A PALPABLE MASS DOES NOT EXCLUDE THE DIAGNOSIS.',
        },
        how_to_examine_for_it: 'PLACE BOTH HANDS ON EITHER SIDE OF THE MIDLINE ABOVE THE UMBILICUS. A TRUE ANEURYSM IS EXPANSILE — THE HANDS MOVE APART. A mass that is merely PULSATILE — moving both hands in the same direction — is TRANSMITTED pulsation from a normal aorta beneath it. THE DISTINCTION BETWEEN EXPANSILE AND TRANSMITTED IS THE POINT OF THE EXAMINATION, and it is frequently taught as "pulsatile mass" without it.',
        the_misdiagnosis_that_kills: {
          renal_colic:
            'RUPTURED ANEURYSM BLEEDS INTO THE RETROPERITONEUM, WHERE THE KIDNEYS AND URETERS LIE. IT THEREFORE CAUSES LOIN AND FLANK PAIN RADIATING TO THE GROIN, AND SOMETIMES HAEMATURIA. IT MIMICS URETERIC COLIC EXACTLY.',
            the_rule: 'A FIRST PRESENTATION OF "RENAL COLIC" IN A PATIENT OVER 50 IS A RUPTURED OR LEAKING ANEURYSM UNTIL PROVEN OTHERWISE. Sending such a patient for an outpatient scan with analgesia is a documented cause of death.',
          other_misdiagnoses: 'It is also mistaken for MYOCARDIAL INFARCTION, PERFORATED VISCUS, PANCREATITIS, DIVERTICULITIS, MUSCULOSKELETAL BACK PAIN and SCIATICA — the last particularly when the pain radiates down a leg from retroperitoneal nerve root compression.',
        },
        the_risk_factors: 'AGE and MALE SEX — men are affected roughly 4 to 6 times more often · SMOKING, the strongest modifiable risk factor by a wide margin · HYPERTENSION · FAMILY HISTORY, which substantially increases risk · atherosclerosis and other vascular disease · and connective tissue disorders such as MARFAN and EHLERS-DANLOS in younger patients. NOTE THAT DIABETES IS ASSOCIATED WITH A LOWER RISK OF ANEURYSM — an unusual and genuinely counter-intuitive association.',
      },

      section_2_mechanism: {
        what_an_aneurysm_is: 'A PERMANENT LOCALISED DILATATION OF AN ARTERY TO MORE THAN 1.5 TIMES ITS NORMAL DIAMETER. FOR THE INFRARENAL ABDOMINAL AORTA, A DIAMETER OF 3 cm OR MORE DEFINES AN ANEURYSM.',
        true_versus_false: 'A TRUE aneurysm involves ALL THREE LAYERS of the arterial wall. A FALSE (pseudo) aneurysm is a contained rupture where blood is held by surrounding tissue rather than by an intact wall — typically after trauma or arterial puncture.',
        why_they_form: 'DEGRADATION OF ELASTIN AND COLLAGEN IN THE MEDIA, driven by matrix metalloproteinases, inflammation and atherosclerosis. The INFRARENAL aorta is most affected — it has fewer vasa vasorum and less elastin than the thoracic aorta, and it bears reflected pressure waves from the bifurcation.',
        the_law_of_laplace_again: {
          the_relationship: 'WALL TENSION IS PROPORTIONAL TO PRESSURE MULTIPLIED BY RADIUS.',
          the_consequence:
            'AS THE ANEURYSM ENLARGES, WALL TENSION RISES, WHICH DRIVES FURTHER ENLARGEMENT. GROWTH ACCELERATES AND RUPTURE RISK RISES STEEPLY AND NON-LINEARLY WITH DIAMETER. THIS IS WHY SURVEILLANCE INTERVALS SHORTEN AS THE ANEURYSM GROWS, AND WHY THE REPAIR THRESHOLD IS A DIAMETER RATHER THAN A SYMPTOM.',
          the_approximate_annual_rupture_risk: 'Below 4 cm: very low. 4 to 5.5 cm: low, around 1% or less per year. 5.5 to 6 cm: rising, roughly 5 to 10%. Above 7 cm: high, in the region of 20 to 30% or more per year. FIGURES VARY BETWEEN SERIES — the SHAPE of the curve is the point.',
        },
        the_repair_threshold: 'ELECTIVE REPAIR IS GENERALLY OFFERED AT A DIAMETER OF 5.5 cm IN MEN, OR FOR RAPID GROWTH (commonly taken as more than 1 cm per year), OR FOR SYMPTOMS. Thresholds are lower in women, in whom aneurysms rupture at smaller diameters. THE THRESHOLD EXISTS BECAUSE BELOW IT, THE OPERATIVE MORTALITY EXCEEDS THE RUPTURE RISK — trials showed no survival benefit from repairing small aneurysms.',
        where_it_ruptures: 'MOST RUPTURE POSTERIORLY AND LATERALLY INTO THE RETROPERITONEUM, where the surrounding tissues can temporarily CONTAIN the bleeding — a CONTAINED RUPTURE. THAT CONTAINMENT IS WHY THE PATIENT ARRIVES ALIVE, AND IT IS PRECARIOUS. ANTERIOR rupture into the free peritoneal cavity causes immediate exsanguination and the patient rarely reaches hospital.',
        the_rare_presentations_worth_knowing: 'AORTOCAVAL FISTULA — rupture into the inferior vena cava, causing high-output cardiac failure, a machinery-like abdominal bruit and leg swelling. AORTOENTERIC FISTULA — usually after previous aortic graft surgery, causing a "herald" gastrointestinal bleed followed by catastrophic haemorrhage; ANY GASTROINTESTINAL BLEED IN A PATIENT WITH A PREVIOUS AORTIC GRAFT IS AN AORTOENTERIC FISTULA UNTIL PROVEN OTHERWISE.',
      },

      section_3_clerking_and_examination: {
        history: 'Sudden severe central abdominal pain radiating through to the back 40 minutes ago, followed by collapse. He is a lifelong smoker with hypertension and known peripheral arterial disease. HIS BROTHER DIED OF A "BURST ARTERY IN THE STOMACH" — a family history he has never been asked about.',
        vitals: 'BP 82/48 mmHg. Pulse 118. Respiratory rate 26. Saturation 94%. Cold, clammy, capillary refill 4 seconds. GCS 14, anxious and restless.',
        examination:
          'Pale and shut down. TENDER, PULSATILE, EXPANSILE MASS above the umbilicus. Abdominal tenderness without generalised rigidity. GREY-TURNER SIGN (flank bruising) and CULLEN SIGN (periumbilical bruising) may appear with retroperitoneal haemorrhage but TAKE HOURS TO DEVELOP AND ARE LATE — do not wait for them. FEMORAL PULSES present but weak. Check for signs of DISTAL EMBOLISATION — "TRASH FOOT", with blue toes despite palpable pulses, from mural thrombus embolising distally.',
        the_examination_point: 'RESTLESSNESS AND AGITATION IN AN OLDER PATIENT WITH ABDOMINAL PAIN IS SHOCK UNTIL PROVEN OTHERWISE. It is easily labelled as confusion or anxiety.',
      },

      section_4_investigations: {
        the_governing_rule: {
          the_statement:
            'A HAEMODYNAMICALLY UNSTABLE PATIENT WITH A KNOWN OR SUSPECTED ANEURYSM AND A CONVINCING HISTORY DOES NOT NEED A SCAN — HE NEEDS A VASCULAR SURGEON AND A THEATRE. THE DIAGNOSIS IS CLINICAL, AND TIME SPENT IN THE RADIOLOGY DEPARTMENT IS TIME NOT SPENT IN THEATRE.',
          the_nuance: 'THE PICTURE IS DIFFERENT IN A STABLE PATIENT OR WHERE THE DIAGNOSIS IS GENUINELY UNCERTAIN, WHERE CT ANGIOGRAPHY IS ESSENTIAL — BOTH TO CONFIRM AND TO DETERMINE WHETHER ENDOVASCULAR REPAIR IS ANATOMICALLY FEASIBLE. Many units will accept a very rapid CT in a transiently stable patient specifically to plan EVAR, because that decision changes mortality. THE JUDGEMENT IS THE SURGEON, AND THE CONVERSATION SHOULD HAPPEN BY TELEPHONE WITHIN MINUTES OF ARRIVAL.',
        },
        bedside_ultrasound: 'CAN CONFIRM THE PRESENCE OF AN ANEURYSM IN SECONDS, at the bedside, without moving the patient. IT IS EXCELLENT FOR CONFIRMING AN ANEURYSM EXISTS AND POOR AT CONFIRMING RUPTURE, because retroperitoneal blood is difficult to see. A POSITIVE SCAN IN A SHOCKED PATIENT WITH THE RIGHT HISTORY IS ENOUGH TO ACT ON.',
        ct_angiography: 'The definitive investigation in a stable patient. Confirms rupture, defines the anatomy — neck length and angulation, iliac access — and determines EVAR suitability.',
        bloods: 'CROSS-MATCH URGENTLY — 6 to 10 units or more, and ACTIVATE THE MASSIVE HAEMORRHAGE PROTOCOL. Full blood count, urea and electrolytes, clotting, blood gas with lactate. ECG. NOTE THAT THE HAEMOGLOBIN MAY BE NORMAL IN ACUTE HAEMORRHAGE before haemodilution — do not be reassured.',
      },

      section_5_management: {
        a_what_actually_helps_in_the_emergency_department: {
          the_short_list: 'CALL THE VASCULAR SURGEON AND THE ANAESTHETIST. ACTIVATE THE MASSIVE HAEMORRHAGE PROTOCOL. ALERT THEATRE. TWO LARGE-BORE CANNULAE. CROSS-MATCH. ANALGESIA. NOTHING ELSE MATTERS AS MUCH AS THE TELEPHONE CALL.',
          the_transfer_point: 'IF YOUR HOSPITAL HAS NO VASCULAR SERVICE, THE DECISION TO TRANSFER MUST BE MADE IMMEDIATELY, IN PARALLEL WITH RESUSCITATION, NOT AFTER IT. Discuss with the regional vascular unit at once.',
        },
        b_permissive_hypotension_which_is_the_key_management_principle: {
          the_target: 'AIM FOR A SYSTOLIC BLOOD PRESSURE OF ROUGHLY 70 TO 90 mmHg, OR SIMPLY FOR A CONSCIOUS PATIENT WHO IS TALKING TO YOU — WHICH IS A BETTER BEDSIDE ENDPOINT, BECAUSE IT MEANS THE BRAIN IS PERFUSED.',
          why: 'A RUPTURED ANEURYSM IS TEMPORARILY CONTAINED BY RETROPERITONEAL TAMPONADE AND FRESH CLOT. RESTORING A NORMAL BLOOD PRESSURE DISLODGES THAT CLOT, OVERWHELMS THE TAMPONADE AND CONVERTS A CONTAINED RUPTURE INTO A FREE ONE. THE PATIENT THEN EXSANGUINATES.',
          the_practical_instruction:
            'DO NOT POUR IN FLUID TO "CORRECT" THE BLOOD PRESSURE. THIS IS COUNTER-INTUITIVE AND IS OFTEN THE INSTINCT OF EVERYONE IN THE ROOM. A systolic of 82 in a talking patient with a contained rupture is a BETTER situation than a systolic of 130 achieved with three litres of crystalloid. AVOID LARGE-VOLUME CRYSTALLOID SPECIFICALLY — it dilutes clotting factors and worsens the coagulopathy as well.',
          when_to_give_blood: 'Give BLOOD, not crystalloid, and give it to maintain consciousness and organ perfusion — not to reach a number. TRANEXAMIC ACID is reasonable where local protocol supports it.',
        },
        c_the_repair: {
          evar_endovascular_aneurysm_repair: {
            what_it_is: 'A stent graft is deployed inside the aneurysm sac via the femoral arteries, excluding the sac from the circulation.',
            the_advantages: 'LOWER SHORT-TERM MORTALITY AND MORBIDITY THAN OPEN REPAIR, avoids a laparotomy and aortic cross-clamping, and can often be done under LOCAL ANAESTHESIA — a significant advantage in a shocked elderly patient, since induction of general anaesthesia abolishes the sympathetic tone that is maintaining their blood pressure and can precipitate cardiac arrest.',
            the_limitation: 'IT REQUIRES SUITABLE ANATOMY — an adequate infrarenal neck and accessible iliac vessels — AND THEREFORE REQUIRES A CT. Not all patients are candidates. It also requires LIFELONG SURVEILLANCE for ENDOLEAK, migration and sac expansion, which is a genuine long-term burden.',
            the_evidence: 'Trials of EVAR versus open repair for RUPTURED aneurysm showed broadly similar early mortality overall but advantages in selected patients and in length of stay, and EVAR is now widely used where anatomy and logistics allow.',
          },
          open_repair: 'Laparotomy, proximal aortic control, and replacement of the aneurysmal segment with a tube or bifurcated graft. Necessary where anatomy is unsuitable or EVAR is unavailable. Higher physiological insult, but definitive.',
          aortic_occlusion_balloon: 'Some units place an occlusion balloon via the femoral artery to achieve proximal control before induction of anaesthesia — again, because induction can precipitate collapse.',
        },
        d_the_honest_prognosis_and_the_conversation: {
          the_numbers: 'OVERALL MORTALITY FROM RUPTURED ANEURYSM IS AROUND 80% WHEN OUT-OF-HOSPITAL DEATHS ARE INCLUDED. Of those who reach hospital alive, operative mortality is roughly 30 to 50%. THESE ARE NOT GOOD ODDS, AND THE PATIENT AND FAMILY DESERVE TO KNOW THEM.',
          the_decision_not_to_operate: 'IN A VERY FRAIL PATIENT WITH SIGNIFICANT COMORBIDITY, SURGERY MAY NOT BE IN THEIR INTERESTS. THAT IS A LEGITIMATE SENIOR DECISION MADE WITH THE PATIENT WHERE POSSIBLE AND WITH THE FAMILY, AND IT REQUIRES EXCELLENT PALLIATIVE CARE AND ANALGESIA RATHER THAN ABANDONMENT. Make the decision explicitly and document it — a default drift into no treatment without a conversation is the worst outcome.',
          the_speed_of_the_conversation: 'There may be only minutes. Be direct, be kind, and make sure the family understand the seriousness before he goes to theatre, because he may not come back.',
        },
        e_after_surgery: 'Critical care. Watch for ABDOMINAL COMPARTMENT SYNDROME after open repair or massive transfusion. ACUTE KIDNEY INJURY from hypoperfusion and suprarenal clamping. COLONIC ISCHAEMIA from loss of the inferior mesenteric artery — SUSPECT IT WITH BLOODY DIARRHOEA AFTER AORTIC SURGERY AND INVESTIGATE PROMPTLY, because it carries very high mortality. Spinal cord ischaemia. Distal embolisation. Multi-organ failure. And after EVAR, lifelong surveillance imaging.',
        f_prevention_and_screening: {
          screening: 'MANY COUNTRIES SCREEN MEN AT AGE 65 WITH A SINGLE ABDOMINAL ULTRASOUND. It reduces aneurysm-related mortality substantially and is one of the more clearly effective screening programmes. Men with a normal aorta at 65 need no further screening.',
          surveillance: 'Detected small aneurysms enter a surveillance programme with intervals shortening as diameter increases — for example annually at 3 to 4.4 cm and three-monthly above 4.5 cm, with referral at 5.5 cm. Local programmes vary.',
          medical_management: 'SMOKING CESSATION IS THE SINGLE MOST IMPORTANT INTERVENTION — it slows growth and reduces rupture risk. Blood pressure control, statin and antiplatelet for overall cardiovascular risk. THERE IS NO DRUG THAT RELIABLY SHRINKS AN ANEURYSM, despite trials of several.',
          the_family: 'FIRST-DEGREE RELATIVES OF PATIENTS WITH AN ANEURYSM HAVE SUBSTANTIALLY INCREASED RISK AND SHOULD BE OFFERED SCREENING. HIS BROTHER DIED OF ONE AND NOBODY EVER ASKED. Ask about family history in every vascular patient, and act on it.',
        },
      },

      section_6_teaching_points: {
        bonus_1_first_renal_colic_over_50_is_an_aneurysm_until_proven_otherwise:
          'Retroperitoneal blood produces loin-to-groin pain and sometimes haematuria, mimicking ureteric colic exactly. Sending such a patient home with analgesia and an outpatient scan is a documented cause of death.',
        bonus_2_expansile_not_merely_pulsatile:
          'Place a hand either side of the midline. A true aneurysm pushes your hands APART; transmitted pulsation moves them in the same direction. That distinction is the point of the examination and is usually taught without it.',
        bonus_3_permissive_hypotension_because_the_clot_is_holding_him_together:
          'The rupture is contained by retroperitoneal tamponade and fresh clot. Restoring a normal pressure dislodges it and converts a contained rupture into a free one. Aim for a talking patient, not a number — and give blood, not litres of crystalloid.',
        bonus_4_laplace_explains_the_repair_threshold:
          'Wall tension is pressure times radius, so enlargement drives further enlargement and rupture risk rises steeply and non-linearly with diameter. Below 5.5 cm the operative mortality exceeds the rupture risk, which is why the threshold is a diameter rather than a symptom.',
        bonus_5_induction_of_anaesthesia_can_kill_before_the_incision:
          'General anaesthesia abolishes the sympathetic tone maintaining the blood pressure and can precipitate collapse. That is why EVAR under local anaesthesia is attractive in a shocked patient, and why some units place an occlusion balloon before induction.',
        bonus_6_all_three_triad_features_appear_in_only_half:
          'The mass is impossible to feel in an obese patient and may be absent when profoundly hypotensive. Grey-Turner and Cullen signs take hours and are late. Do not wait for a complete picture.',
        bonus_7_the_family_history_nobody_asks_about:
          'First-degree relatives have substantially increased risk and should be offered screening. His brother died of one and it was never recorded. Ask, and act on the answer.',
        trap_1: 'Any gastrointestinal bleed in a patient with a previous aortic graft is an AORTOENTERIC FISTULA until proven otherwise.',
        trap_2: 'Bloody diarrhoea after aortic surgery is COLONIC ISCHAEMIA until proven otherwise — very high mortality.',
        trap_3: 'Haemoglobin may be normal in acute haemorrhage before haemodilution.',
        trap_4: 'Restlessness in an older patient with abdominal pain is SHOCK, not anxiety.',
        trap_5: 'DIABETES is associated with LOWER aneurysm risk — genuinely counter-intuitive and worth remembering.',
        trap_6: 'Women rupture at smaller diameters, so thresholds are lower.',
        trap_7: 'A decision not to operate in a very frail patient is legitimate — but it must be made explicitly and documented, with good palliation.',
        one_line_summary: 'Ruptured abdominal aortic aneurysm. Telephone the vascular surgeon and activate the massive haemorrhage protocol first, keep him talking rather than chasing a blood pressure, and do not send an unstable patient to the scanner.',
      },
    },
    warnings: [
      'A FIRST PRESENTATION OF "RENAL COLIC" OVER 50 IS A RUPTURED ANEURYSM UNTIL PROVEN OTHERWISE.',
      'ALL THREE TRIAD FEATURES ARE PRESENT IN ONLY ABOUT HALF — absence of a palpable mass does not exclude it.',
      'PERMISSIVE HYPOTENSION — aim for a TALKING patient, not a normal blood pressure. Restoring pressure dislodges the clot.',
      'GIVE BLOOD, NOT LARGE-VOLUME CRYSTALLOID — crystalloid dilutes clotting factors and worsens coagulopathy.',
      'AN UNSTABLE PATIENT WITH A CONVINCING HISTORY DOES NOT NEED A SCAN — he needs a surgeon and a theatre.',
      'CALL THE VASCULAR SURGEON AND ACTIVATE THE MASSIVE HAEMORRHAGE PROTOCOL FIRST — nothing else matters as much.',
      'If there is no local vascular service, decide on TRANSFER IMMEDIATELY, in parallel with resuscitation.',
      'INDUCTION OF ANAESTHESIA CAN PRECIPITATE COLLAPSE by abolishing compensatory sympathetic tone.',
      'A mass must be EXPANSILE, not merely pulsatile — transmitted pulsation moves both hands the same way.',
      'GREY-TURNER AND CULLEN SIGNS TAKE HOURS and are late — do not wait for them.',
      'HAEMOGLOBIN MAY BE NORMAL in acute haemorrhage before haemodilution.',
      'Any GASTROINTESTINAL BLEED with a previous aortic graft is an AORTOENTERIC FISTULA until proven otherwise.',
      'BLOODY DIARRHOEA AFTER AORTIC SURGERY is colonic ischaemia until proven otherwise — very high mortality.',
      'WOMEN RUPTURE AT SMALLER DIAMETERS — repair thresholds are lower.',
      'OFFER SCREENING TO FIRST-DEGREE RELATIVES — risk is substantially increased.',
      'A decision not to operate in a very frail patient is legitimate but must be explicit, documented and accompanied by good palliation.',
      'Management here is a teaching example. Follow local vascular protocols.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. EVAR versus open repair for rupture depends on anatomy, logistics and local expertise.',
      'Rupture risk figures vary between series; the shape of the risk curve rather than the exact number is the teaching point.',
    ],
    cards: [
      { q: 'Give the classic triad and its limitation.', a: 'Sudden abdominal or back pain, hypotension, pulsatile mass — all three present in only about half.' },
      { q: 'How do you distinguish an expansile from a transmitted pulsation?', a: 'An expansile mass pushes both hands apart; transmitted pulsation moves them in the same direction.' },
      { q: 'What is the crucial misdiagnosis?', a: 'Renal colic — retroperitoneal blood causes loin-to-groin pain and sometimes haematuria.' },
      { q: 'What defines an abdominal aortic aneurysm?', a: 'Infrarenal aortic diameter of 3 cm or more, or 1.5 times normal.' },
      { q: 'Why does rupture risk rise steeply with diameter?', a: 'Law of Laplace — wall tension is pressure times radius, so enlargement drives further enlargement.' },
      { q: 'What is the usual elective repair threshold and why?', a: '5.5 cm in men — below that, operative mortality exceeds rupture risk.' },
      { q: 'Explain permissive hypotension here.', a: 'The rupture is contained by retroperitoneal tamponade and clot; restoring pressure dislodges it and causes free rupture.' },
      { q: 'What is a better endpoint than a blood pressure number?', a: 'A conscious, talking patient — it means the brain is perfused.' },
      { q: 'Why can EVAR under local anaesthesia be advantageous?', a: 'General anaesthesia abolishes compensatory sympathetic tone and can precipitate collapse in a shocked patient.' },
      { q: 'What is the long-term burden of EVAR?', a: 'Lifelong surveillance for endoleak, migration and sac expansion.' },
      { q: 'What does bloody diarrhoea after aortic surgery suggest?', a: 'Colonic ischaemia from loss of the inferior mesenteric artery — very high mortality.' },
      { q: 'What does a GI bleed in a patient with an aortic graft suggest?', a: 'Aortoenteric fistula until proven otherwise.' },
      { q: 'Which common condition is associated with LOWER aneurysm risk?', a: 'Diabetes — a genuinely counter-intuitive association.' },
    ],
    checks: [
      'Aneurysm considered in any patient over 50 with abdominal or back pain and hypotension',
      'Abdomen examined for an EXPANSILE mass',
      'Femoral pulses and distal embolisation assessed',
      'Vascular surgeon telephoned immediately',
      'Massive haemorrhage protocol activated and theatre alerted',
      'Two large-bore cannulae and urgent cross-match',
      'Permissive hypotension maintained — patient kept talking, not normotensive',
      'Blood given rather than large-volume crystalloid',
      'Unstable patient NOT sent to the scanner',
      'Bedside ultrasound used if it does not delay',
      'Transfer decision made immediately if no local vascular service',
      'Prognosis discussed honestly with patient and family',
      'Decision not to operate, if taken, made explicitly and documented with palliation',
      'Family history recorded and relatives offered screening',
      'Smoking cessation addressed for survivors',
    ],
    related: ['aortic_aneurysm_and_dissection_recognition_and_thresholds'],
  },
];
