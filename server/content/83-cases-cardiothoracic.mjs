/**
 * CASE SCENARIOS — Cardiothoracic: aortic dissection and oesophageal perforation.
 *
 * Batch 6, part 2.
 */

export default [
  {
    id: 'AS-CASE-0053',
    type: 'case',
    specialty: 'Surgery — Cardiothoracic surgery',
    teaching_case: true,
    title: 'CASE: Tearing Chest Pain Radiating to the Back with Unequal Arm Pressures',
    short: 'Case: acute aortic dissection',
    summary:
      'A 58-year-old hypertensive man with tearing interscapular pain. Teaches why this is the diagnosis that must be excluded before thrombolysis or anticoagulation, why the blood pressure difference matters, why heart rate is lowered BEFORE blood pressure, and why the type determines the treatment.',
    domains: ['cardiothoracic_surgery', 'cardiovascular', 'emergency_medicine', 'vascular_surgery'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case aortic dissection', 'thoracic aortic dissection case', 'tearing chest pain',
      'stanford classification', 'debakey classification', 'blood pressure difference arms',
      'widened mediastinum', 'impulse control', 'malperfusion syndrome', 'aortic dissection detection risk score',
    ],
    terms: [
      'case', 'aortic dissection', 'stanford type a', 'stanford type b', 'debakey',
      'intimal tear', 'false lumen', 'malperfusion', 'cardiac tamponade',
      'aortic regurgitation', 'widened mediastinum', 'ct angiography aorta',
      'transoesophageal echocardiography', 'impulse control', 'labetalol', 'esmolol',
      'sodium nitroprusside', 'tevar', 'd-dimer dissection',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '58-year-old hypertensive man with sudden severe chest pain 90 minutes ago, described as tearing and radiating between the shoulder blades. His right arm blood pressure is 178/96 and his left is 132/78.',

      section_1_the_reason_this_diagnosis_dominates_everything: {
        the_statement:
          'AORTIC DISSECTION MUST BE CONSIDERED AND EXCLUDED IN ANY PATIENT PRESENTING WITH ACUTE CHEST PAIN BEFORE THROMBOLYSIS, ANTICOAGULATION OR ANTIPLATELET THERAPY IS GIVEN. GIVING A CLOT-DISSOLVING DRUG TO A PATIENT WITH A DISSECTING AORTA IS RAPIDLY FATAL, AND IT HAPPENS BECAUSE DISSECTION CAN CAUSE ST ELEVATION.',
          why_it_causes_st_elevation: 'THE DISSECTION FLAP CAN EXTEND INTO A CORONARY OSTIUM — MOST COMMONLY THE RIGHT — CAUSING A GENUINE INFERIOR MYOCARDIAL INFARCTION. THE ECG IS THEREFORE NOT REASSURING AND CAN BE ACTIVELY MISLEADING. AN INFERIOR STEMI WITH TEARING PAIN RADIATING TO THE BACK, OR WITH A BLOOD PRESSURE DIFFERENCE, IS A DISSECTION UNTIL PROVEN OTHERWISE.',
        the_mortality_arithmetic: 'UNTREATED TYPE A DISSECTION CARRIES A MORTALITY OF APPROXIMATELY 1 TO 2% PER HOUR IN THE FIRST 48 HOURS. THAT NUMBER IS THE ENTIRE ARGUMENT FOR SPEED — every hour of diagnostic delay costs a measurable proportion of survival.',
      },

      section_2_clerking: {
        history:
          'Sudden onset 90 minutes ago while lifting. He describes it as a TEARING or RIPPING sensation, MAXIMAL AT ONSET, felt in the front of the chest and between the shoulder blades. It has MIGRATED downwards towards his abdomen over the last 30 minutes. He feels faint. Known hypertension, poorly controlled, and he has stopped his tablets.',
        the_features_that_should_trigger_the_thought: {
          sudden_and_maximal_at_onset:
            'THE PAIN OF DISSECTION IS MAXIMAL AT ITS START. THE PAIN OF MYOCARDIAL INFARCTION TYPICALLY BUILDS AND CRESCENDOS. This is one of the more useful discriminators, and it is established by one question: "was it worst right at the beginning, or did it build up?"',
          the_quality: 'TEARING or RIPPING. Not every patient uses those words, and its absence does not exclude the diagnosis — but its presence is significant.',
          radiation_to_the_back: 'INTERSCAPULAR PAIN IS CHARACTERISTIC, particularly of descending aortic involvement.',
          migration: 'PAIN THAT MOVES AS THE DISSECTION PROPAGATES — from chest to back to abdomen to legs. IT IS ALMOST SPECIFIC TO DISSECTION AND IT IS RARELY ASKED ABOUT.',
        },
        the_risk_factors: 'HYPERTENSION, present in the large majority and the single most important · AGE · MALE SEX · pre-existing ANEURYSM · BICUSPID AORTIC VALVE and COARCTATION · CONNECTIVE TISSUE DISORDERS — MARFAN, LOEYS-DIETZ, VASCULAR EHLERS-DANLOS — which cause dissection in YOUNG patients with no hypertension · previous cardiac surgery or catheterisation · COCAINE AND AMPHETAMINE use, which cause an acute hypertensive surge · pregnancy, particularly the third trimester and peripartum · and inflammatory aortitis including giant cell arteritis and syphilis.',
        the_two_populations_that_get_missed: 'THE YOUNG PATIENT WITH A CONNECTIVE TISSUE DISORDER — look for tall stature, arachnodactyly, high arched palate, lens dislocation and a family history of sudden death — AND THE PREGNANT WOMAN, in whom chest pain is attributed to reflux. Ask about cocaine use in any young patient with chest pain.',
        vitals: 'RIGHT ARM 178/96, LEFT ARM 132/78 — A DIFFERENCE OF 46 mmHg. Pulse 104. Respiratory rate 24. Saturation 96%. Afebrile. Pale and sweating.',
        the_blood_pressure_difference: {
          the_threshold: 'A DIFFERENCE OF MORE THAN 20 mmHg BETWEEN ARMS IS SIGNIFICANT AND SUGGESTS THAT THE DISSECTION FLAP IS COMPROMISING A SUBCLAVIAN ARTERY.',
          the_honest_caveat: 'IT IS PRESENT IN ONLY ABOUT A THIRD OF DISSECTIONS. ITS ABSENCE EXCLUDES NOTHING. But its presence in a patient with acute chest pain is powerful, and MEASURING BOTH ARMS COSTS THIRTY SECONDS AND IS ROUTINELY NOT DONE.',
        },
        examination: {
          pulses: 'CHECK ALL FOUR LIMB PULSES AND COMPARE. A PULSE DEFICIT — an absent or diminished pulse — indicates branch vessel involvement and is a marker of severity.',
          heart: 'LISTEN FOR THE EARLY DIASTOLIC MURMUR OF AORTIC REGURGITATION AT THE LEFT STERNAL EDGE WITH THE PATIENT SITTING FORWARD IN EXPIRATION. It occurs in a substantial proportion of type A dissections because the dissection disrupts the valve support, and it is a strong pointer.',
          signs_of_tamponade: 'HYPOTENSION, RAISED JUGULAR VENOUS PRESSURE, MUFFLED HEART SOUNDS AND PULSUS PARADOXUS. Proximal dissection can rupture into the pericardium — the commonest mode of death in type A.',
          neurological: 'STROKE, PARAPLEGIA or limb ischaemia from branch occlusion. A PATIENT PRESENTING WITH STROKE AND CHEST PAIN, OR WITH SUDDEN PARAPLEGIA, MAY HAVE A DISSECTION — and thrombolysing that stroke would be catastrophic.',
          abdomen: 'Mesenteric or renal malperfusion causing abdominal pain, a rising lactate, or anuria.',
        },
        the_range_of_presentations: 'DISSECTION IS A GREAT MIMIC. It presents as myocardial infarction, stroke, syncope, acute limb ischaemia, mesenteric ischaemia, acute kidney injury, paraplegia, cardiac tamponade, hoarseness from recurrent laryngeal nerve stretch, and Horner syndrome. IF A PATIENT HAS TWO SEEMINGLY UNRELATED ACUTE VASCULAR EVENTS, THINK OF THE ONE PROCESS THAT CAN CAUSE BOTH.',
      },

      section_3_classification_and_why_it_determines_treatment: {
        stanford: {
          type_a: 'INVOLVES THE ASCENDING AORTA, regardless of where the tear is. ROUGHLY TWO THIRDS OF CASES.',
          type_b: 'DOES NOT INVOLVE THE ASCENDING AORTA — confined to the descending aorta distal to the left subclavian.',
          why_this_is_the_useful_system: 'BECAUSE IT MAPS DIRECTLY ONTO TREATMENT. TYPE A IS A SURGICAL EMERGENCY. TYPE B IS MANAGED MEDICALLY UNLESS COMPLICATED. THAT IS THE WHOLE POINT OF THE CLASSIFICATION.',
        },
        debakey: 'TYPE I — originates in the ascending aorta and extends beyond the arch. TYPE II — confined to the ascending aorta. TYPE III — originates in the descending aorta. More anatomically descriptive, less directly tied to management.',
        why_type_a_kills: 'THE ASCENDING AORTA IS SURROUNDED BY THE PERICARDIUM. RUPTURE THEREFORE CAUSES CARDIAC TAMPONADE. IT CAN ALSO CAUSE ACUTE SEVERE AORTIC REGURGITATION, CORONARY OSTIAL OCCLUSION WITH MYOCARDIAL INFARCTION, AND STROKE FROM ARCH VESSEL INVOLVEMENT. FOUR LETHAL MECHANISMS IN ONE ANATOMICAL SEGMENT.',
        the_mechanism: 'A TEAR IN THE INTIMA ALLOWS BLOOD TO ENTER THE MEDIA UNDER SYSTEMIC PRESSURE, SPLITTING THE AORTIC WALL ALONG ITS LENGTH AND CREATING A FALSE LUMEN. The false lumen can rupture outwards, compress the true lumen causing MALPERFUSION of branch vessels, or re-enter the true lumen distally. THE PROPAGATION IS DRIVEN BY THE FORCE AND RATE OF THE PRESSURE WAVE, WHICH IS WHY TREATMENT TARGETS EXACTLY THAT.',
      },

      section_4_investigations: {
        the_priority: 'IN A HAEMODYNAMICALLY UNSTABLE PATIENT WITH SUSPECTED TYPE A DISSECTION, THE PRIORITY IS THE CARDIOTHORACIC SURGEON AND THE THEATRE. Bedside echocardiography may be the only imaging obtained.',
        ct_angiography_of_the_whole_aorta: 'THE INVESTIGATION OF CHOICE — fast, widely available, and it defines the entry tear, the extent, branch vessel involvement, pericardial effusion and rupture. IMAGE FROM THE THORACIC INLET TO THE FEMORAL ARTERIES, because the dissection may extend the whole length and the surgical plan depends on knowing it.',
        transoesophageal_echocardiography: 'EXCELLENT for the ascending aorta, the valve and the pericardium, and it can be performed at the bedside or on the operating table in an unstable patient without moving them. Requires sedation and expertise.',
        transthoracic_echocardiography: 'Available immediately at the bedside. Can show aortic regurgitation, a dilated aortic root, a pericardial effusion and sometimes the flap. A NORMAL TRANSTHORACIC ECHO DOES NOT EXCLUDE DISSECTION, but a pericardial effusion with aortic regurgitation in this context is highly suggestive and enough to act on.',
        chest_radiograph: {
          the_findings: 'WIDENED MEDIASTINUM · abnormal aortic contour · pleural effusion, usually left-sided · displacement of a calcified intimal plaque inwards from the aortic border (the CALCIUM SIGN) · tracheal deviation.',
          the_critical_limitation: 'A NORMAL CHEST RADIOGRAPH DOES NOT EXCLUDE DISSECTION — IT IS NORMAL IN A SIGNIFICANT MINORITY. IT MUST NEVER BE USED AS A RULE-OUT TEST, and reassurance from a normal film is a documented route to a missed diagnosis.',
        },
        ecg: 'MANDATORY — but its purpose here is to identify coronary involvement and to alert you to the trap, NOT to exclude dissection. IT IS NORMAL OR NON-SPECIFIC IN MANY CASES, AND ST ELEVATION MAY REPRESENT CORONARY OSTIAL DISSECTION.',
        d_dimer: {
          the_use: 'A D-DIMER IS TYPICALLY MARKEDLY RAISED IN DISSECTION, AND A NEGATIVE D-DIMER IN A LOW-RISK PATIENT HAS BEEN PROPOSED AS A RULE-OUT.',
          the_caution: 'IT MUST ONLY BE USED IN CONJUNCTION WITH A FORMAL RISK SCORE SUCH AS THE AORTIC DISSECTION DETECTION RISK SCORE, AND NEVER ALONE. A NEGATIVE D-DIMER IN A HIGH-RISK PATIENT DOES NOT EXCLUDE DISSECTION, and using it that way is dangerous.',
        },
        bloods: 'Full blood count · CROSS-MATCH URGENTLY, several units · urea, creatinine and electrolytes for renal malperfusion · TROPONIN, which may be raised from coronary involvement and does not exclude dissection · LACTATE for mesenteric malperfusion · clotting · blood gas.',
      },

      section_5_management: {
        a_the_medical_management_that_applies_to_every_dissection: {
          the_principle: 'REDUCE THE FORCE WITH WHICH BLOOD STRIKES THE INTIMAL FLAP — "IMPULSE CONTROL", OR dP/dt. THIS IS DETERMINED BY BOTH THE BLOOD PRESSURE AND, CRITICALLY, THE RATE OF RISE OF PRESSURE, WHICH DEPENDS ON HEART RATE AND CONTRACTILITY.',
          the_order_that_must_not_be_reversed: {
            the_rule: 'GIVE THE BETA BLOCKER FIRST TO CONTROL HEART RATE, AND ONLY THEN ADD A VASODILATOR FOR BLOOD PRESSURE.',
            why: 'GIVING A VASODILATOR ALONE CAUSES A REFLEX TACHYCARDIA AND AN INCREASE IN THE RATE OF RISE OF AORTIC PRESSURE, WHICH PROPAGATES THE DISSECTION. THE BLOOD PRESSURE FALLS AND THE PATIENT GETS WORSE. THIS IS ONE OF THE CLEAREST EXAMPLES IN MEDICINE OF THE ORDER OF TWO DRUGS MATTERING MORE THAN EITHER DRUG.',
          },
          the_targets: 'HEART RATE BELOW 60 BEATS PER MINUTE, AND SYSTOLIC BLOOD PRESSURE ROUGHLY 100 TO 120 mmHg — OR THE LOWEST PRESSURE THAT MAINTAINS ADEQUATE ORGAN PERFUSION, JUDGED BY CONSCIOUS LEVEL AND URINE OUTPUT.',
          the_drugs: 'LABETALOL, which blocks both alpha and beta receptors, or ESMOLOL by infusion, which is short-acting and easily titrated. Then add SODIUM NITROPRUSSIDE or another vasodilator if the pressure remains high. If beta blockade is contraindicated, a rate-limiting calcium channel blocker such as diltiazem or verapamil is used.',
          analgesia: 'ADEQUATE OPIOID ANALGESIA IS PART OF THE BLOOD PRESSURE TREATMENT. Pain drives catecholamines, tachycardia and hypertension. Do not under-treat it while chasing a blood pressure target.',
          arterial_line: 'Insert one, and note which arm — measure from the arm with the HIGHER pressure, since the lower reading reflects a compromised subclavian and would lead to over-treatment.',
        },
        b_type_a_is_a_surgical_emergency: {
          the_action: 'IMMEDIATE CARDIOTHORACIC SURGICAL REFERRAL BY TELEPHONE. Transfer to a cardiothoracic centre without delay if not already in one.',
          the_operation: 'Replacement of the ascending aorta with an interposition graft, with aortic valve repair or replacement and coronary reimplantation as required. Performed on cardiopulmonary bypass, often with deep hypothermic circulatory arrest for arch involvement.',
          the_mortality: 'HIGH EVEN WITH SURGERY — commonly quoted around 20 to 25% operative mortality — BUT FAR HIGHER WITHOUT IT. The comparison is with 1 to 2% per hour untreated.',
        },
        c_type_b_is_medical_unless_complicated: {
          uncomplicated: 'MEDICAL MANAGEMENT with impulse control, in a monitored setting, with serial imaging. Most do well.',
          complicated: 'RUPTURE or impending rupture · MALPERFUSION of visceral, renal, spinal or limb vessels · REFRACTORY PAIN, which indicates ongoing propagation · REFRACTORY HYPERTENSION · rapid aortic expansion. THESE REQUIRE INTERVENTION, USUALLY THORACIC ENDOVASCULAR AORTIC REPAIR (TEVAR), which covers the entry tear with a stent graft and allows the false lumen to thrombose.',
          the_teaching_point: 'REFRACTORY PAIN IN A TYPE B DISSECTION IS NOT AN ANALGESIA PROBLEM — IT MEANS THE DISSECTION IS PROPAGATING AND IS AN INDICATION FOR INTERVENTION.',
        },
        d_what_must_not_be_given: 'NO THROMBOLYSIS. NO ANTIPLATELETS OR ANTICOAGULATION unless the diagnosis is definitively excluded. NO vasodilator before rate control. AND AVOID LARGE-VOLUME FLUID RESUSCITATION in a hypotensive dissection patient — hypotension usually means tamponade or rupture, and pouring in fluid raises the pressure driving the dissection. THE ANSWER TO HYPOTENSION IN TYPE A DISSECTION IS THE OPERATING THEATRE, NOT MORE FLUID.',
        e_afterwards: 'LIFELONG STRICT BLOOD PRESSURE CONTROL, usually with a beta blocker as part of the regimen — THE SINGLE MOST IMPORTANT LONG-TERM INTERVENTION. Serial imaging surveillance of the residual aorta. Avoid heavy isometric lifting and competitive contact sport. SCREEN FIRST-DEGREE RELATIVES and refer for GENETIC ASSESSMENT where a connective tissue disorder or a young patient is involved — this is a genuine, actionable and routinely omitted step. Smoking cessation and cardiovascular risk management.',
      },

      section_6_teaching_points: {
        bonus_1_exclude_it_before_you_thrombolyse:
          'The dissection flap can extend into a coronary ostium and cause a genuine inferior STEMI. Thrombolysing that patient is rapidly fatal. An inferior STEMI with tearing pain to the back or a blood pressure difference is a dissection until proven otherwise.',
        bonus_2_beta_blocker_before_vasodilator:
          'A vasodilator alone causes reflex tachycardia and increases the RATE OF RISE of aortic pressure, propagating the dissection. Rate first, then pressure. It is one of the clearest examples of the order of two drugs mattering more than either drug.',
        bonus_3_measure_both_arms:
          'A difference over 20 mmHg suggests subclavian involvement. It is present in only about a third, so its absence excludes nothing — but it costs thirty seconds and it is routinely not done.',
        bonus_4_maximal_at_onset_versus_crescendo:
          'Dissection pain is worst at the very beginning; infarct pain builds. One question — "was it worst right at the start, or did it build up?" — separates them more usefully than the character of the pain.',
        bonus_5_migrating_pain_is_almost_specific:
          'Pain that moves from chest to back to abdomen as the dissection propagates is close to diagnostic, and it is almost never asked about.',
        bonus_6_a_normal_chest_radiograph_does_not_exclude_it:
          'It is normal in a significant minority. It must never be used as a rule-out test, and reassurance from a normal film is a documented route to a missed diagnosis.',
        bonus_7_stanford_maps_onto_treatment:
          'Type A involves the ascending aorta and is a surgical emergency; type B does not and is medical unless complicated. That is the whole purpose of the classification.',
        trap_1: 'Do NOT pour fluid into a hypotensive type A dissection — hypotension usually means tamponade or rupture, and the answer is theatre.',
        trap_2: 'REFRACTORY PAIN in type B is not an analgesia problem — it means propagation and is an indication for intervention.',
        trap_3: 'Measure and treat from the arm with the HIGHER pressure — the lower reading reflects a compromised subclavian.',
        trap_4: 'A raised troponin does not exclude dissection; it may reflect coronary ostial involvement.',
        trap_5: 'D-dimer may only be used with a formal risk score, never alone, and never in a high-risk patient.',
        trap_6: 'Think of dissection in a YOUNG patient with a connective tissue disorder, in PREGNANCY, and after COCAINE use.',
        trap_7: 'SCREEN FIRST-DEGREE RELATIVES and refer for genetic assessment where indicated — a routinely omitted step.',
        one_line_summary: 'Acute type A aortic dissection. Measure both arms, exclude it before any antithrombotic, beta blocker before vasodilator, CT angiogram of the whole aorta — and telephone the cardiothoracic surgeon while it is happening.',
      },
    },
    warnings: [
      'EXCLUDE DISSECTION BEFORE THROMBOLYSIS, ANTIPLATELETS OR ANTICOAGULATION — the flap can cause a genuine inferior STEMI.',
      'UNTREATED TYPE A MORTALITY IS ROUGHLY 1 TO 2% PER HOUR in the first 48 hours.',
      'GIVE THE BETA BLOCKER BEFORE THE VASODILATOR — a vasodilator alone causes reflex tachycardia and propagates the dissection.',
      'MEASURE BLOOD PRESSURE IN BOTH ARMS — a difference over 20 mmHg is significant, though present in only about a third.',
      'A NORMAL CHEST RADIOGRAPH DOES NOT EXCLUDE DISSECTION — it is normal in a significant minority.',
      'A NORMAL ECG DOES NOT EXCLUDE IT, and ST elevation may represent coronary ostial dissection.',
      'A RAISED TROPONIN DOES NOT EXCLUDE IT.',
      'D-DIMER may only be used alongside a formal risk score, never alone and never in a high-risk patient.',
      'DO NOT GIVE LARGE-VOLUME FLUID to a hypotensive type A dissection — hypotension means tamponade or rupture, and the answer is theatre.',
      'Measure and treat from the arm with the HIGHER pressure.',
      'REFRACTORY PAIN IN TYPE B MEANS PROPAGATION and is an indication for intervention, not more analgesia.',
      'Adequate analgesia is part of blood pressure control — pain drives catecholamines and hypertension.',
      'Image the WHOLE aorta from thoracic inlet to femoral arteries.',
      'THINK OF DISSECTION in young patients with connective tissue disorders, in pregnancy, and after cocaine use.',
      'SCREEN FIRST-DEGREE RELATIVES and refer for genetic assessment where indicated.',
      'Doses and targets here are teaching examples. Follow local cardiothoracic protocols.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Imaging pathways, TEVAR indications and blood pressure targets vary between centres.',
      'Type B management is evolving, with increasing early endovascular intervention in selected uncomplicated cases.',
    ],
    cards: [
      { q: 'Why must dissection be excluded before thrombolysis?', a: 'The flap can extend into a coronary ostium causing a genuine STEMI — thrombolysing a dissection is rapidly fatal.' },
      { q: 'What is the untreated type A mortality?', a: 'Roughly 1 to 2% per hour in the first 48 hours.' },
      { q: 'Why is the beta blocker given before the vasodilator?', a: 'A vasodilator alone causes reflex tachycardia, raising dP/dt and propagating the dissection.' },
      { q: 'What are the treatment targets?', a: 'Heart rate below 60 and systolic 100 to 120 mmHg, or the lowest maintaining organ perfusion.' },
      { q: 'What blood pressure difference is significant?', a: 'More than 20 mmHg between arms — present in about a third, so absence excludes nothing.' },
      { q: 'Distinguish dissection pain from infarct pain.', a: 'Dissection is maximal at onset; infarct pain builds and crescendos.' },
      { q: 'Give the Stanford classification and its implication.', a: 'Type A involves the ascending aorta and is a surgical emergency; type B does not and is medical unless complicated.' },
      { q: 'Name four lethal mechanisms of type A dissection.', a: 'Tamponade, acute aortic regurgitation, coronary ostial occlusion, and stroke from arch vessel involvement.' },
      { q: 'Does a normal chest radiograph exclude dissection?', a: 'No — it is normal in a significant minority and must never be used as a rule-out test.' },
      { q: 'What complications convert type B to surgical?', a: 'Rupture, malperfusion, refractory pain, refractory hypertension, or rapid expansion.' },
      { q: 'Why avoid fluid in a hypotensive type A dissection?', a: 'Hypotension usually means tamponade or rupture — fluid raises the pressure driving the dissection.' },
      { q: 'Which arm should guide treatment?', a: 'The one with the HIGHER pressure — the lower reflects a compromised subclavian.' },
    ],
    checks: [
      'Blood pressure measured in BOTH arms',
      'All four limb pulses checked and compared',
      'Onset character established — maximal at onset versus crescendo',
      'Migration of pain asked about',
      'Aortic regurgitation murmur listened for',
      'Tamponade features assessed',
      'ECG performed but not used to exclude dissection',
      'Thrombolysis, antiplatelets and anticoagulation withheld until excluded',
      'Beta blocker given BEFORE any vasodilator',
      'Adequate analgesia given as part of blood pressure control',
      'Arterial line sited on the higher-pressure arm',
      'CT angiography of the WHOLE aorta arranged, or bedside echo if unstable',
      'Cross-match arranged urgently',
      'Cardiothoracic surgeon telephoned immediately for type A',
      'Connective tissue disorder, pregnancy and cocaine use considered',
      'Lifelong blood pressure control, surveillance and relative screening arranged',
    ],
    related: ['aortic_aneurysm_and_dissection_recognition_and_thresholds'],
  },

  {
    id: 'AS-CASE-0054',
    type: 'case',
    specialty: 'Surgery — Cardiothoracic surgery',
    teaching_case: true,
    title: 'CASE: Violent Vomiting, Then Chest Pain and Surgical Emphysema',
    short: 'Case: oesophageal perforation (Boerhaave syndrome)',
    summary:
      'A 52-year-old with chest pain after forceful vomiting and crackling in the neck. Teaches Mackler triad, why the mediastinum is a low-resistance space that kills, why the chest film can be normal early, and why delay beyond 24 hours transforms the prognosis.',
    domains: ['cardiothoracic_surgery', 'general_surgery', 'emergency_medicine', 'gastroenterology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case oesophageal perforation', 'boerhaave syndrome case', 'mackler triad',
      'surgical emphysema chest', 'mediastinitis case', 'hamman sign',
      'water soluble contrast swallow', 'iatrogenic oesophageal perforation',
    ],
    terms: [
      'case', 'oesophageal perforation', 'boerhaave syndrome', 'mackler triad',
      'surgical emphysema', 'subcutaneous emphysema', 'pneumomediastinum', 'hamman sign',
      'mediastinitis', 'mallory-weiss tear', 'water-soluble contrast swallow', 'gastrografin',
      'oesophageal stent', 'thoracotomy repair', 'v sign of naclerio',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '52-year-old man who vomited forcefully several times after a heavy meal and alcohol, then developed sudden severe lower chest and epigastric pain. He now has crackling under the skin of his neck.',

      section_1_the_triad_and_the_diagnosis_that_is_almost_always_delayed: {
        mackler_triad: {
          the_three: 'FORCEFUL VOMITING · SEVERE LOWER CHEST OR EPIGASTRIC PAIN · SUBCUTANEOUS EMPHYSEMA.',
          the_honest_caveat: 'ALL THREE ARE PRESENT IN A MINORITY. SUBCUTANEOUS EMPHYSEMA IN PARTICULAR TAKES HOURS TO DEVELOP AND IS ABSENT EARLY, WHEN THE DIAGNOSIS MOST NEEDS TO BE MADE. ITS ABSENCE EXCLUDES NOTHING.',
        },
        why_it_is_missed: {
          the_problem: 'IT IS UNCOMMON, THE PRESENTATION OVERLAPS WITH FAR COMMONER CONDITIONS, AND MOST CLINICIANS SEE VERY FEW CASES. IT IS MISDIAGNOSED AS MYOCARDIAL INFARCTION, PERFORATED PEPTIC ULCER, PANCREATITIS, PNEUMONIA, PNEUMOTHORAX AND AORTIC DISSECTION.',
          the_key_to_thinking_of_it: 'SEVERE CHEST PAIN THAT BEGINS IMMEDIATELY AFTER AN EPISODE OF FORCEFUL VOMITING OR RETCHING. THE SEQUENCE — VOMITING FIRST, THEN PAIN — IS THE CLUE. IN MOST OTHER CAUSES OF CHEST PAIN THE PAIN COMES FIRST AND THE VOMITING FOLLOWS.',
        },
        the_time_dependence_that_defines_the_prognosis: {
          the_statement:
            'MORTALITY RISES STEEPLY WITH DELAY. REPAIR WITHIN 24 HOURS CARRIES A SUBSTANTIALLY BETTER OUTCOME THAN REPAIR AFTER 24 HOURS, WHEN THE TISSUES ARE OEDEMATOUS AND FRIABLE AND PRIMARY REPAIR OFTEN FAILS. Overall mortality is commonly quoted around 20 to 30%, and much higher with late presentation.',
          the_implication: 'THE DIAGNOSTIC DELAY, NOT THE PERFORATION ITSELF, IS USUALLY WHAT KILLS THE PATIENT. That reframes the whole case as a problem of thinking of it, rather than a problem of treating it.',
        },
      },

      section_2_clerking: {
        history:
          'Heavy meal and several drinks, then repeated forceful vomiting. During the last retch he felt a sudden severe tearing pain in the lower chest and epigastrium, radiating to the back and left shoulder. It is worse on swallowing and on lying flat. He feels short of breath and has become sweaty and unwell over the last two hours.',
        the_features: 'PAIN WORSE ON SWALLOWING (ODYNOPHAGIA) AND ON DEEP INSPIRATION · dyspnoea · systemic illness out of proportion to the examination early on · and PAIN RELIEVED BY SITTING FORWARD, reflecting mediastinal irritation.',
        the_causes_by_frequency: {
          iatrogenic: 'THE COMMONEST CAUSE OVERALL — endoscopy, dilatation of a stricture, variceal banding or sclerotherapy, transoesophageal echocardiography, nasogastric tube insertion, intubation and surgery. CONSIDER PERFORATION IN ANY PATIENT WITH CHEST OR NECK PAIN AFTER AN OESOPHAGEAL PROCEDURE, and note that the perforation may be recognised at the time or present hours later.',
          spontaneous_boerhaave: 'Rupture from a sudden rise in intraluminal pressure against a closed cricopharyngeus during forceful vomiting. TYPICALLY OCCURS IN THE LEFT POSTEROLATERAL WALL OF THE LOWER THIRD, A FEW CENTIMETRES ABOVE THE DIAPHRAGM, BECAUSE THAT SEGMENT LACKS SURROUNDING SUPPORTIVE STRUCTURES AND HAS THE THINNEST MUSCULAR LAYER. THAT IS WHY THE EFFUSION IS USUALLY LEFT-SIDED.',
          other: 'Foreign body or caustic ingestion · trauma, penetrating or blunt · malignancy · and severe oesophagitis.',
        },
        the_distinction_from_mallory_weiss: 'A MALLORY-WEISS TEAR IS A PARTIAL-THICKNESS MUCOSAL TEAR AT THE GASTRO-OESOPHAGEAL JUNCTION, ALSO CAUSED BY VOMITING, PRESENTING WITH HAEMATEMESIS AND USUALLY SETTLING SPONTANEOUSLY. BOERHAAVE IS FULL-THICKNESS AND LIFE-THREATENING. SAME MECHANISM, DIFFERENT DEPTH, ENTIRELY DIFFERENT DISEASE — and the discriminator is that Mallory-Weiss bleeds while Boerhaave causes pain and sepsis.',
        vitals: 'BP 96/58 mmHg. Pulse 122. Respiratory rate 30. Temperature 37.8. Saturation 92% on air. Unwell, sweating, anxious.',
        examination: {
          surgical_emphysema: 'CREPITUS — A CRACKLING, CRUNCHY SENSATION LIKE BUBBLE WRAP — ON PALPATING THE SKIN OF THE NECK AND SUPRACLAVICULAR FOSSAE. PALPATE THE NECK SPECIFICALLY IN ANY PATIENT WITH CHEST PAIN AFTER VOMITING OR AN OESOPHAGEAL PROCEDURE. IT TAKES FIVE SECONDS AND IT IS THE SIGN THAT MAKES THE DIAGNOSIS AT THE BEDSIDE.',
          hamman_sign: 'A CRUNCHING OR CRACKLING SOUND SYNCHRONOUS WITH THE HEARTBEAT, HEARD OVER THE PRECORDIUM, CAUSED BY AIR IN THE MEDIASTINUM. Listen for it with the patient in the left lateral position. It is not always present, but it is highly suggestive when it is.',
          chest: 'Reduced air entry at the LEFT base with dullness — a left pleural effusion. Tachypnoea.',
          abdomen: 'Epigastric tenderness with guarding, which can suggest a perforated viscus and lead the assessment below the diaphragm.',
        },
      },

      section_3_mechanism: {
        why_the_mediastinum_is_so_dangerous: {
          the_anatomy: 'THE MEDIASTINUM IS A LOOSE AREOLAR SPACE WITH LITTLE RESISTANCE TO THE SPREAD OF FLUID, AIR AND INFECTION, AND IT COMMUNICATES WITH THE NECK ABOVE AND, VIA THE DIAPHRAGMATIC HIATUSES, WITH THE RETROPERITONEUM BELOW.',
          the_consequence:
            'GASTRIC CONTENTS — ACID, ENZYMES, FOOD AND ORAL BACTERIA — ARE FORCED INTO THIS SPACE UNDER THE PRESSURE OF EACH SWALLOW AND EACH BREATH. THE NEGATIVE INTRATHORACIC PRESSURE OF INSPIRATION ACTIVELY SUCKS CONTENTS THROUGH THE PERFORATION. THE RESULT IS A CHEMICAL MEDIASTINITIS FOLLOWED WITHIN HOURS BY A POLYMICROBIAL NECROTISING INFECTION, WITH SEPTIC SHOCK AND MULTI-ORGAN FAILURE.',
          the_teaching_point: 'THE OESOPHAGUS HAS NO SEROSA. Every other part of the gastrointestinal tract has a serosal layer that helps contain a perforation and holds sutures. THE OESOPHAGUS DOES NOT — WHICH IS WHY PERFORATION SPREADS SO FAST AND WHY REPAIRS BREAK DOWN SO READILY.',
        },
        the_pleural_involvement: 'The perforation frequently communicates with the pleural space, producing a pleural effusion — usually LEFT-SIDED, matching the site of rupture — that rapidly becomes an EMPYEMA containing gastric contents.',
      },

      section_4_investigations: {
        the_rule: 'IF THE DIAGNOSIS IS SUSPECTED, INVESTIGATE URGENTLY AND INVOLVE THE SURGEONS IN PARALLEL. Delay is the main determinant of outcome.',
        chest_radiograph: {
          the_findings: 'PNEUMOMEDIASTINUM — lucent streaks outlining the mediastinal structures · SUBCUTANEOUS EMPHYSEMA in the neck and chest wall · LEFT PLEURAL EFFUSION · pneumothorax or hydropneumothorax · widened mediastinum · and the V SIGN OF NACLERIO, a V-shaped lucency formed by air between the lower left mediastinal border and the diaphragm.',
          the_limitation: 'IT CAN BE COMPLETELY NORMAL IN THE FIRST HOUR OR TWO, BEFORE AIR HAS TRACKED. A NORMAL EARLY FILM DOES NOT EXCLUDE PERFORATION.',
        },
        ct_with_oral_water_soluble_contrast: 'THE INVESTIGATION OF CHOICE. It demonstrates the perforation and the leak, shows the extent of mediastinal and pleural contamination, identifies collections that will need drainage, and excludes the alternatives including dissection. IT IS BOTH DIAGNOSTIC AND THE BASIS OF THE OPERATIVE PLAN.',
        contrast_swallow: {
          the_rule: 'USE A WATER-SOLUBLE CONTRAST AGENT FIRST, NEVER BARIUM AS THE INITIAL STUDY.',
          why: 'BARIUM IN THE MEDIASTINUM OR PLEURAL SPACE CAUSES AN INTENSE, PERSISTENT INFLAMMATORY REACTION AND FIBROSIS AND IS EXTREMELY DIFFICULT TO REMOVE. Water-soluble agents are absorbed.',
          the_nuance: 'Water-soluble contrast is LESS SENSITIVE and misses a proportion of small leaks. IF THE WATER-SOLUBLE STUDY IS NEGATIVE BUT SUSPICION REMAINS, A CAUTIOUS DILUTE BARIUM STUDY MAY THEN BE PERFORMED — the sequence exists precisely because of this trade-off. Note also that water-soluble contrast is hazardous if ASPIRATED, causing chemical pneumonitis, so it must not be used where there is a high aspiration risk.',
        },
        endoscopy: 'Can visualise the perforation directly and is used in some centres, particularly to plan stenting. IT CARRIES A RISK OF EXTENDING THE PERFORATION WITH INSUFFLATION and should be performed by an experienced operator with minimal air, in discussion with the surgical team.',
        pleural_fluid_analysis: 'IF AN EFFUSION IS DRAINED, THE FINDINGS ARE DIAGNOSTIC: A LOW pH, VERY HIGH AMYLASE (of salivary origin), AND SOMETIMES VISIBLE FOOD PARTICLES. A pleural aspirate containing food debris settles the diagnosis instantly.',
        bloods: 'Full blood count · CRP · UREA AND ELECTROLYTES · AMYLASE, which may be raised and mimic pancreatitis · LACTATE · clotting · GROUP AND CROSS-MATCH · BLOOD CULTURES · blood gas. ECG and troponin to address the cardiac differential.',
      },

      section_5_management: {
        a_immediate: 'NIL BY MOUTH ABSOLUTELY — every swallow forces more contamination into the mediastinum. AGGRESSIVE FLUID RESUSCITATION; these patients are profoundly volume-deplete. BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS covering Gram-positives, Gram-negatives and anaerobes, PLUS ANTIFUNGAL COVER, because Candida from the upper gastrointestinal tract is a genuine pathogen in mediastinitis. INTRAVENOUS PROTON PUMP INHIBITOR to reduce acid contamination. Analgesia. Oxygen. Catheterise. NASOGASTRIC TUBE only under direct guidance — BLIND PASSAGE RISKS PASSING THE TUBE THROUGH THE PERFORATION.',
        b_call_the_surgeons_immediately: 'CARDIOTHORACIC OR UPPER GASTROINTESTINAL SURGERY, DEPENDING ON LOCAL ARRANGEMENTS, AND CRITICAL CARE. TRANSFER TO A SPECIALIST CENTRE IF NOT ALREADY IN ONE — outcomes are better in centres that manage these regularly.',
        c_the_treatment_options: {
          the_principle: 'THE AIMS ARE: CONTROL THE LEAK · DRAIN THE CONTAMINATED SPACES · SUPPORT THE PATIENT AND FEED THEM.',
          primary_surgical_repair: 'For patients presenting EARLY, generally within 24 hours, with healthy tissue. The mucosal defect is closed, usually buttressed with a flap of pleura, intercostal muscle or stomach, BECAUSE THE ABSENCE OF A SEROSA MAKES THE REPAIR INHERENTLY WEAK. The mediastinum and pleural space are washed out and drained widely.',
          oesophageal_stenting: 'A COVERED SELF-EXPANDING METAL STENT PLACED ENDOSCOPICALLY TO SEAL THE PERFORATION, COMBINED WITH DRAINAGE OF COLLECTIONS. Increasingly used, particularly for LATE presentations, IATROGENIC perforations, and patients unfit for thoracotomy. IT CONTROLS THE LEAK WITHOUT A MAJOR OPERATION. Complications include stent migration.',
          endoscopic_vacuum_therapy: 'A sponge connected to negative pressure placed into the cavity or lumen, changed at intervals. Increasingly used in specialist centres with good results.',
          conservative_management: 'For a SMALL, CONTAINED perforation in a STABLE patient with no sepsis and no mediastinal contamination — typically a contained iatrogenic cervical perforation. Nil by mouth, antibiotics, nutritional support and very close observation with a low threshold to intervene. IT IS A SELECTED STRATEGY, NOT A DEFAULT.',
          drainage: 'CHEST DRAINS FOR PLEURAL COLLECTIONS, and radiological or surgical drainage of mediastinal collections. INADEQUATE DRAINAGE IS A COMMON CAUSE OF FAILURE — the leak may be controlled while the patient remains septic from an undrained space.',
          oesophagectomy_or_diversion: 'For extensive necrosis or failed repair — a major undertaking reserved for the worst cases.',
        },
        d_nutrition_which_is_a_central_part_of_treatment: {
          the_problem: 'THE PATIENT CANNOT EAT FOR WEEKS AND IS PROFOUNDLY CATABOLIC.',
          the_solution: 'ESTABLISH ENTERAL ACCESS BEYOND THE PERFORATION EARLY — a FEEDING JEJUNOSTOMY placed at the time of surgery, or a nasojejunal tube placed under direct vision. ENTERAL NUTRITION IS PREFERRED TO PARENTERAL because it maintains gut integrity and reduces infective complications. THIS IS PLANNED AT THE FIRST OPERATION, not arranged as an afterthought two weeks later when the patient has lost 10 kilograms.',
        },
        e_the_ongoing_course: 'Prolonged critical care. Repeated imaging and often repeated drainage. Watch for recurrent leak, empyema, mediastinal abscess, tracheo-oesophageal fistula, stricture and vocal cord palsy. Physiotherapy and rehabilitation. Late oesophageal stricture is common and may need dilatation. These patients have a long recovery and need to be told so.',
      },

      section_6_teaching_points: {
        bonus_1_the_sequence_is_the_clue:
          'Vomiting FIRST, then chest pain. In most other causes of chest pain the pain comes first and vomiting follows. That reversal, in a patient with severe chest pain, is what should make you palpate the neck.',
        bonus_2_palpate_the_neck:
          'Surgical emphysema — crackling like bubble wrap in the neck and supraclavicular fossae — takes five seconds to find and makes the diagnosis at the bedside. But it takes hours to develop, so its absence early excludes nothing.',
        bonus_3_the_oesophagus_has_no_serosa:
          'Every other part of the gut has a serosal layer that contains perforation and holds sutures. The oesophagus does not — which is why contamination spreads so fast and why repairs must be buttressed with pleura, muscle or stomach.',
        bonus_4_water_soluble_contrast_first_never_barium:
          'Barium in the mediastinum causes intense persistent inflammation and fibrosis and cannot be removed. Water-soluble agents are absorbed — but they are less sensitive, so a negative study with continuing suspicion may be followed by cautious dilute barium.',
        bonus_5_the_delay_is_what_kills:
          'Repair within 24 hours carries a substantially better outcome; after that the tissues are oedematous and friable and primary repair often fails. The diagnostic delay, not the perforation, is usually the cause of death — which makes this a problem of thinking of it.',
        bonus_6_the_pleural_fluid_is_diagnostic:
          'Low pH, very high amylase of salivary origin, and sometimes visible food particles. An aspirate containing food debris settles the diagnosis instantly.',
        bonus_7_plan_the_feeding_at_the_first_operation:
          'The patient cannot eat for weeks and is profoundly catabolic. A feeding jejunostomy placed during the initial surgery is planned nutrition; arranging it two weeks later after 10 kilograms of weight loss is not.',
        trap_1: 'Mackler triad is complete in a minority, and subcutaneous emphysema is absent early.',
        trap_2: 'A NORMAL EARLY CHEST RADIOGRAPH does not exclude perforation.',
        trap_3: 'Amylase may be raised and mimic pancreatitis.',
        trap_4: 'Do NOT pass a nasogastric tube blindly — it can go through the perforation.',
        trap_5: 'Add ANTIFUNGAL cover — Candida is a genuine pathogen in mediastinitis.',
        trap_6: 'Consider perforation in ANY patient with chest or neck pain after an oesophageal procedure — iatrogenic is the commonest cause overall.',
        trap_7: 'Inadequate DRAINAGE is a common cause of failure — the leak may be sealed while the patient remains septic from an undrained space.',
        one_line_summary: 'Boerhaave syndrome. Vomiting then pain is the sequence, palpate the neck for crepitus, water-soluble contrast CT and never barium first, nil by mouth with antifungal cover — and get the surgeons involved inside 24 hours, because the delay is what kills.',
      },
    },
    warnings: [
      'THE SEQUENCE IS THE CLUE — vomiting FIRST, then chest pain. In most other causes the pain comes first.',
      'PALPATE THE NECK for surgical emphysema in any chest pain after vomiting or an oesophageal procedure.',
      'MACKLER TRIAD IS COMPLETE IN A MINORITY, and subcutaneous emphysema takes hours to appear.',
      'A NORMAL EARLY CHEST RADIOGRAPH DOES NOT EXCLUDE PERFORATION.',
      'USE WATER-SOLUBLE CONTRAST FIRST, NEVER BARIUM — barium in the mediastinum causes irreversible inflammation and fibrosis.',
      'Water-soluble contrast is less sensitive and hazardous if aspirated — a negative study with continuing suspicion may need cautious dilute barium.',
      'DELAY BEYOND 24 HOURS TRANSFORMS THE PROGNOSIS — the diagnostic delay is usually what kills.',
      'THE OESOPHAGUS HAS NO SEROSA — contamination spreads fast and repairs must be buttressed.',
      'NIL BY MOUTH ABSOLUTELY — every swallow forces more contamination into the mediastinum.',
      'DO NOT PASS A NASOGASTRIC TUBE BLINDLY — it can pass through the perforation.',
      'ADD ANTIFUNGAL COVER — Candida is a genuine pathogen in mediastinitis.',
      'AMYLASE MAY BE RAISED and mimic pancreatitis.',
      'IATROGENIC PERFORATION IS THE COMMONEST CAUSE OVERALL — consider it after any oesophageal procedure.',
      'INADEQUATE DRAINAGE is a common cause of failure — the leak may be sealed while an undrained space keeps the patient septic.',
      'PLAN ENTERAL FEEDING ACCESS at the first operation, not weeks later.',
      'Management here is a teaching example. Follow local upper gastrointestinal and cardiothoracic pathways.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Stenting, endoscopic vacuum therapy and surgical repair are chosen by specialist teams according to timing, site and patient condition.',
      'Conservative management is a carefully selected strategy requiring repeated senior review, not a default.',
    ],
    cards: [
      { q: 'What is Mackler triad?', a: 'Forceful vomiting, severe lower chest or epigastric pain, and subcutaneous emphysema — complete in a minority.' },
      { q: 'What sequence should raise suspicion?', a: 'Vomiting FIRST, then chest pain — the reverse of most other causes.' },
      { q: 'Where does Boerhaave rupture typically occur and why?', a: 'Left posterolateral wall of the lower third — least supported and thinnest muscular layer. Hence the left pleural effusion.' },
      { q: 'Why is the mediastinum so dangerous?', a: 'A loose areolar space with little resistance to spread, and negative intrathoracic pressure actively draws contents through.' },
      { q: 'Why do oesophageal repairs break down?', a: 'The oesophagus has no serosa to contain the leak or hold sutures — repairs must be buttressed.' },
      { q: 'Why water-soluble contrast rather than barium?', a: 'Barium in the mediastinum causes intense persistent inflammation and fibrosis and cannot be removed.' },
      { q: 'What is Hamman sign?', a: 'A crunching sound synchronous with the heartbeat, from mediastinal air.' },
      { q: 'What is the V sign of Naclerio?', a: 'A V-shaped lucency of air between the lower left mediastinal border and the diaphragm.' },
      { q: 'What are the diagnostic pleural fluid findings?', a: 'Low pH, very high amylase of salivary origin, and sometimes visible food particles.' },
      { q: 'How does Mallory-Weiss differ?', a: 'Partial-thickness mucosal tear causing haematemesis that usually settles — same mechanism, different depth.' },
      { q: 'What determines prognosis most?', a: 'Time to treatment — repair within 24 hours is substantially better than after.' },
      { q: 'Why is a feeding jejunostomy planned early?', a: 'The patient cannot eat for weeks and is profoundly catabolic; enteral feeding beats parenteral.' },
    ],
    checks: [
      'Sequence of vomiting then pain established',
      'Neck palpated for surgical emphysema',
      'Hamman sign listened for',
      'Recent oesophageal procedure asked about',
      'Nil by mouth instituted immediately',
      'Aggressive fluid resuscitation and sepsis six',
      'Broad-spectrum antibiotics PLUS antifungal cover given',
      'Proton pump inhibitor started',
      'Nasogastric tube not passed blindly',
      'CT with oral water-soluble contrast arranged',
      'Barium avoided as the initial study',
      'Cardiothoracic or upper GI surgery and critical care contacted immediately',
      'Pleural collections drained and fluid analysed',
      'Transfer to a specialist centre considered',
      'Enteral feeding access planned at the first operation',
    ],
    related: ['acute_chest_pain_the_differential_that_must_be_excluded'],
  },
];
