/**
 * CASE SCENARIOS — Orthopaedics: neck of femur fracture and cauda equina syndrome.
 *
 * Batch 5, part 3.
 */

export default [
  {
    id: 'AS-CASE-0045',
    type: 'case',
    specialty: 'Surgery — Orthopaedics',
    teaching_case: true,
    title: 'CASE: An 82-Year-Old Found on the Floor with a Shortened Externally Rotated Leg',
    short: 'Case: fractured neck of femur',
    summary:
      'An 82-year-old after a fall from standing height. Teaches why the blood supply determines the operation, why intracapsular and extracapsular fractures are different diseases, why surgery within 36 hours is a mortality intervention, and why the fall itself must be investigated.',
    domains: ['orthopaedics', 'geriatrics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case neck of femur fracture', 'hip fracture case', 'nof case',
      'garden classification', 'intracapsular versus extracapsular', 'hemiarthroplasty',
      'dynamic hip screw', 'fascia iliaca block', 'avascular necrosis femoral head',
      'fragility fracture', 'osteoporosis case',
    ],
    terms: [
      'case', 'neck of femur fracture', 'hip fracture', 'intracapsular', 'extracapsular',
      'garden classification', 'medial femoral circumflex artery', 'avascular necrosis',
      'non-union', 'hemiarthroplasty', 'total hip replacement', 'dynamic hip screw',
      'intramedullary nail', 'fascia iliaca block', 'fragility fracture', 'osteoporosis',
      'bisphosphonate', 'delirium', 'orthogeriatric',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '82-year-old woman who lives alone, found on the bathroom floor by her daughter after an unwitnessed fall at some point overnight. Her right leg is shortened and externally rotated and she cannot weight bear.',

      section_1_the_two_things_that_matter_most: {
        the_first: 'THE ANATOMY OF THE FRACTURE DETERMINES THE OPERATION, BECAUSE IT DETERMINES WHETHER THE FEMORAL HEAD STILL HAS A BLOOD SUPPLY. That single question — INTRACAPSULAR OR EXTRACAPSULAR — governs everything the surgeon does.',
        the_second:
          'THE FRACTURE IS OFTEN THE LEAST IMPORTANT PART OF THE ADMISSION. THIS IS A FRAIL OLDER PERSON WHOSE 30-DAY MORTALITY IS AROUND 8 TO 10% AND WHOSE ONE-YEAR MORTALITY IS ROUGHLY 20 TO 30%. Most of that mortality comes from delirium, pneumonia, pressure injury, thromboembolism, malnutrition and the underlying illness that caused the fall — not from the femur. A HIP FRACTURE IS A MEDICAL EMERGENCY MANAGED BY SURGEONS, AND THE ORTHOGERIATRIC INPUT MATTERS AS MUCH AS THE IMPLANT.',
      },

      section_2_clerking: {
        the_history_that_must_be_taken_even_though_the_fracture_is_obvious: {
          the_question_behind_the_question: 'WHY DID SHE FALL? A FALL FROM STANDING HEIGHT IN AN 82-YEAR-OLD IS A SYMPTOM, NOT AN EVENT. Treating the femur and ignoring the cause guarantees the next fracture.',
          the_causes_to_screen_for:
            'SYNCOPE — was there loss of consciousness, and was it witnessed? Cardiac causes include arrhythmia, complete heart block and aortic stenosis, all of which need identifying · POSTURAL HYPOTENSION, frequently drug-induced · INFECTION, particularly urinary and chest, presenting as a fall in an older person · STROKE or transient ischaemic attack · SEIZURE · HYPOGLYCAEMIA, especially on insulin or sulfonylureas · DELIRIUM · POLYPHARMACY, above all sedatives, antihypertensives, diuretics, opioids and anticholinergics · alcohol · visual impairment · peripheral neuropathy · Parkinson disease · and environmental hazards.',
          the_long_lie: 'SHE WAS ON THE FLOOR OVERNIGHT. A "LONG LIE" — generally more than an hour — CAUSES RHABDOMYOLYSIS, ACUTE KIDNEY INJURY, HYPOTHERMIA, DEHYDRATION, PRESSURE INJURY AND PNEUMONIA. CHECK CREATINE KINASE, RENAL FUNCTION, POTASSIUM AND TEMPERATURE, AND INSPECT PRESSURE AREAS INCLUDING THE HEELS AND SACRUM. It is a distinct clinical entity and it is regularly overlooked because attention is on the fracture.',
        },
        the_baseline_that_determines_the_operation: 'ESTABLISH HER PRE-FRACTURE FUNCTION AND COGNITION: did she walk independently, with a stick, or with a frame? Did she go outdoors? Does she have dementia? Who does she live with and what support does she have? THIS IS NOT SOCIAL BACKGROUND FOR THE CLERKING — IT DIRECTLY DETERMINES WHETHER SHE RECEIVES A HEMIARTHROPLASTY OR A TOTAL HIP REPLACEMENT, and it sets the rehabilitation goal. Get it from the daughter while she is here.',
        drug_history: 'ANTICOAGULANTS AND ANTIPLATELETS — these determine the timing of surgery and any need for reversal, and must be established immediately. Also bone-relevant drugs, steroids, and everything that could have contributed to the fall.',
        vitals: 'BP 106/62 mmHg. Pulse 96. Temperature 35.4 — HYPOTHERMIC from the long lie. Respiratory rate 20. Saturation 94%. Glucose 6.4. Confused, AMTS 6/10 — but establish her BASELINE cognition before calling this delirium.',
        examination: {
          the_leg: 'SHORTENED AND EXTERNALLY ROTATED. THE MECHANISM IS WORTH UNDERSTANDING: with the femoral neck fractured, the strong external rotators and the iliopsoas pull the distal fragment upwards and rotate it outwards, unopposed. Pain on any movement, particularly rotation. Unable to straight leg raise.',
          the_exception_that_is_missed: 'AN UNDISPLACED OR IMPACTED FRACTURE MAY HAVE NO DEFORMITY AT ALL, AND THE PATIENT MAY EVEN BE ABLE TO WEIGHT BEAR WITH PAIN. A NORMAL-LOOKING LEG DOES NOT EXCLUDE A HIP FRACTURE — see the imaging section.',
          the_rest: 'FULL EXAMINATION, NOT JUST THE HIP. Assess neurovascular status of the limb. Examine the head for injury — a head injury in an anticoagulated patient after an unwitnessed fall needs a CT. Examine the chest and heart, listen for AORTIC STENOSIS (which matters for anaesthesia and may have caused the fall), assess hydration, and INSPECT ALL PRESSURE AREAS INCLUDING HEELS. Check for other fractures, particularly wrist, humerus and pubic rami.',
        },
      },

      section_3_the_anatomy_that_decides_the_operation: {
        the_blood_supply_of_the_femoral_head: {
          the_three_sources: '1. THE RETINACULAR VESSELS, arising mainly from the MEDIAL FEMORAL CIRCUMFLEX ARTERY, which run UP THE FEMORAL NECK BENEATH THE CAPSULE. THIS IS THE DOMINANT SUPPLY IN ADULTS. 2. Intramedullary vessels within the neck. 3. The artery in the LIGAMENTUM TERES, which is significant in children but contributes little in adults.',
          the_consequence:
            'BECAUSE THE MAIN SUPPLY RUNS RETROGRADELY UP THE NECK, A FRACTURE ACROSS THE NECK INSIDE THE CAPSULE DISRUPTS IT. THE FEMORAL HEAD LOSES ITS BLOOD SUPPLY. THAT IS THE ENTIRE REASON INTRACAPSULAR AND EXTRACAPSULAR FRACTURES ARE TREATED DIFFERENTLY.',
        },
        intracapsular_fractures: {
          where: 'SUBCAPITAL AND TRANSCERVICAL — proximal to the intertrochanteric line, INSIDE the joint capsule.',
          the_problem: 'THE BLOOD SUPPLY TO THE HEAD IS DISRUPTED. Risks are AVASCULAR NECROSIS OF THE FEMORAL HEAD and NON-UNION, both far more likely if the fracture is DISPLACED. The intracapsular haematoma also raises intracapsular pressure, further compromising perfusion.',
          the_garden_classification: 'I — INCOMPLETE or impacted in valgus. II — COMPLETE but UNDISPLACED. III — COMPLETE and PARTIALLY displaced, with trabeculae still partly aligned. IV — COMPLETE and FULLY displaced.',
          the_practical_simplification: 'GARDEN I AND II ARE UNDISPLACED; GARDEN III AND IV ARE DISPLACED. THAT IS THE DISTINCTION THAT MATTERS, BECAUSE INTEROBSERVER AGREEMENT ON THE FOUR-PART SYSTEM IS POOR AND THE TREATMENT DECISION IS BINARY.',
          the_operations: {
            undisplaced_garden_i_and_ii: 'INTERNAL FIXATION with cannulated screws or a sliding hip screw, PRESERVING THE PATIENT OWN FEMORAL HEAD, since the blood supply may be intact. Accept a risk of later avascular necrosis requiring revision.',
            displaced_garden_iii_and_iv: 'REPLACE THE HEAD, because it is likely to be avascular. Fixing a displaced intracapsular fracture in an older patient leads to high rates of avascular necrosis, non-union and reoperation.',
            hemiarthroplasty_versus_total_hip_replacement: {
              hemiarthroplasty: 'Replaces the femoral head only. For LESS MOBILE, more dependent or cognitively impaired patients.',
              total_hip_replacement: 'Replaces head AND acetabulum. OFFERED TO PATIENTS WHO WERE INDEPENDENTLY MOBILE (with no more than a stick), ARE NOT COGNITIVELY IMPAIRED, AND ARE MEDICALLY FIT FOR THE PROCEDURE AND ABLE TO PARTICIPATE IN REHABILITATION. IT GIVES BETTER FUNCTION AND LOWER REOPERATION RATES IN THAT GROUP.',
              the_point: 'THIS IS WHY THE PRE-FRACTURE MOBILITY AND COGNITION HISTORY IS A SURGICAL INVESTIGATION, NOT SOCIAL BACKGROUND. Failing to record it can cost the patient the better operation.',
            },
          },
        },
        extracapsular_fractures: {
          where: 'INTERTROCHANTERIC (between the greater and lesser trochanters) and SUBTROCHANTERIC (below the lesser trochanter), OUTSIDE the capsule.',
          the_advantage: 'THE BLOOD SUPPLY TO THE HEAD IS PRESERVED, so avascular necrosis is not the concern. The bone here is well vascularised metaphyseal bone that heals well. THE HEAD IS THEREFORE ALWAYS PRESERVED AND THE FRACTURE IS FIXED.',
          the_operations: 'DYNAMIC (SLIDING) HIP SCREW for stable intertrochanteric fractures — a lag screw into the head sliding within a side plate, allowing controlled impaction at the fracture site. INTRAMEDULLARY NAIL for subtrochanteric fractures, reverse oblique patterns and unstable configurations, where a side plate would fail.',
          the_bleeding_point: 'EXTRACAPSULAR FRACTURES BLEED SUBSTANTIALLY MORE THAN INTRACAPSULAR ONES, because the capsule does not contain the haematoma — blood loss of a litre or more occurs, and patients are frequently more anaemic and more hypovolaemic than expected. CROSS-MATCH ACCORDINGLY.',
        },
      },

      section_4_investigations: {
        radiographs: 'AP PELVIS AND LATERAL OF THE AFFECTED HIP. THE AP PELVIS IS ESSENTIAL, NOT AN AP OF THE HIP ALONE — comparing with the normal side is how subtle fractures are detected. Look at SHENTON LINE, the smooth curve from the inferior border of the superior pubic ramus to the inferomedial femoral neck; DISRUPTION OF SHENTON LINE INDICATES A FRACTURE and is a quick check on any pelvis film.',
        the_occult_fracture: {
          the_problem: 'ROUGHLY 2 TO 10% OF HIP FRACTURES ARE NOT VISIBLE ON THE INITIAL RADIOGRAPH.',
          the_rule: 'IF THE PATIENT CANNOT WEIGHT BEAR AND HAS HIP PAIN WITH A NORMAL RADIOGRAPH, THE FRACTURE IS NOT EXCLUDED. PROCEED TO MRI, WHICH IS THE INVESTIGATION OF CHOICE AND DETECTS THE FRACTURE IMMEDIATELY. CT is an alternative where MRI is unavailable but is less sensitive for undisplaced fractures. SENDING SUCH A PATIENT HOME WITH "SOFT TISSUE INJURY" IS A RECOGNISED ERROR THAT LEADS TO DISPLACEMENT OF AN UNDISPLACED FRACTURE.',
        },
        bloods_and_workup: 'Full blood count · UREA, CREATININE AND ELECTROLYTES, particularly after a long lie · CREATINE KINASE for rhabdomyolysis · GROUP AND CROSS-MATCH · clotting and anticoagulant status · glucose · CRP · BONE PROFILE INCLUDING CALCIUM, PHOSPHATE AND VITAMIN D · thyroid function and myeloma screen where indicated · ECG · CHEST RADIOGRAPH · urinalysis and culture if infection is suspected. ECHOCARDIOGRAM IF A SIGNIFICANT MURMUR IS PRESENT — but it MUST NOT DELAY SURGERY UNLESS IT WILL CHANGE THE ANAESTHETIC PLAN, and that decision belongs to the anaesthetist.',
        cognitive_assessment: 'A FORMAL BASELINE COGNITIVE SCORE ON ADMISSION, such as an abbreviated mental test or 4AT. WITHOUT A BASELINE, POSTOPERATIVE DELIRIUM CANNOT BE RECOGNISED — and delirium affects a large proportion of hip fracture patients and independently worsens outcome.',
      },

      section_5_management: {
        a_analgesia_which_is_a_medical_intervention_not_a_comfort_measure: {
          the_principle: 'UNCONTROLLED PAIN CAUSES DELIRIUM, IMMOBILITY, PNEUMONIA, PRESSURE INJURY AND A CATECHOLAMINE SURGE THAT PRECIPITATES CARDIAC EVENTS. HIP FRACTURE PATIENTS ARE SYSTEMATICALLY UNDER-ANALGESED, PARTICULARLY THOSE WITH DEMENTIA WHO CANNOT ASK.',
          the_regional_block: {
            what_it_is: 'A FASCIA ILIACA COMPARTMENT BLOCK or femoral nerve block, performed in the emergency department, ideally under ultrasound guidance.',
            why_it_matters: 'IT PROVIDES EXCELLENT ANALGESIA WHILE SPARING OPIOIDS, AND REDUCING OPIOID USE IN AN 82-YEAR-OLD DIRECTLY REDUCES DELIRIUM, RESPIRATORY DEPRESSION AND CONSTIPATION. IT SHOULD BE OFFERED EARLY AND IS FREQUENTLY OMITTED BECAUSE NOBODY OWNS THE TASK.',
          },
          the_rest: 'Regular paracetamol. Opioids titrated carefully with a LAXATIVE and an antiemetic. AVOID NSAIDs in this population — renal impairment, gastrointestinal bleeding and cardiac risk. Assess pain in patients with dementia using a behavioural tool, since they may show agitation rather than report pain.',
        },
        b_surgery_within_36_hours: {
          the_standard: 'SURGERY ON THE DAY OF, OR THE DAY AFTER, ADMISSION — GENERALLY WITHIN 36 HOURS.',
          why_it_is_a_mortality_intervention:
            'DELAY BEYOND 48 HOURS IS ASSOCIATED WITH INCREASED MORTALITY AND COMPLICATIONS. Every day in bed brings pneumonia, delirium, pressure injury, venous thromboembolism, deconditioning and loss of the chance to ever walk again. SURGERY IS THE ANALGESIA AND IT IS THE ROUTE TO MOBILISATION — it is not an elective procedure to be fitted around other investigations.',
          what_justifies_a_delay: 'ONLY A CORRECTABLE PROBLEM THAT MAKES SURGERY UNSAFE AND CAN BE FIXED QUICKLY — severe anaemia, significant electrolyte disturbance, uncontrolled diabetes, acute cardiac failure, sepsis, or reversible coagulopathy. INVESTIGATING AN ASYMPTOMATIC MURMUR, WAITING FOR A ROUTINE ECHOCARDIOGRAM, OR WAITING FOR A LIST TO BECOME FREE ARE NOT ACCEPTABLE REASONS, and each is a documented cause of avoidable delay.',
          anticoagulation: 'Establish the agent and last dose immediately. Warfarin is reversed with vitamin K, with prothrombin complex concentrate if urgent. Direct oral anticoagulants usually require a defined interval based on renal function. PLAN THIS ON ADMISSION, NOT ON THE MORNING OF THE LIST.',
        },
        c_the_orthogeriatric_care_that_determines_the_outcome: {
          the_model: 'SHARED CARE BETWEEN ORTHOPAEDICS AND GERIATRIC MEDICINE FROM ADMISSION, NOT A REFERRAL AFTER A COMPLICATION. It reduces mortality, delirium and length of stay, and it is the single most effective service-level intervention in hip fracture care.',
          delirium_prevention: 'The highest-value activity on the ward. TREAT PAIN. AVOID CONSTIPATION AND URINARY RETENTION. AVOID UNNECESSARY CATHETERS. Correct hypoxia, dehydration and electrolytes. REVIEW AND STOP CULPRIT DRUGS, particularly anticholinergics and sedatives. Ensure GLASSES AND HEARING AIDS ARE AVAILABLE — a simple intervention with real effect. Promote orientation, natural light and sleep. Involve family. Avoid moving the patient between wards.',
          nutrition_and_hydration: 'Malnutrition is common and worsens healing and mortality. Screen, supplement, and minimise fasting time — repeated cancellations mean repeated starvation, which is itself harmful.',
          pressure_care: 'A pressure-relieving mattress from arrival. HEELS ARE THE HIGHEST-RISK SITE IN A HIP FRACTURE PATIENT and are routinely forgotten — offload them.',
          thromboprophylaxis: 'Mechanical and pharmacological, per protocol, timed around surgery.',
          mobilisation: 'PHYSIOTHERAPY ON THE DAY AFTER SURGERY, AND FULL WEIGHT BEARING AS PAIN ALLOWS FOR ALMOST ALL MODERN FIXATIONS AND ARTHROPLASTIES. Restricting weight bearing in an elderly patient is usually impractical and harmful, and unless the surgeon has specified otherwise the default is to get them up.',
        },
        d_the_bone_health_that_is_almost_always_forgotten: {
          the_point: 'THIS IS A FRAGILITY FRACTURE — A FRACTURE FROM A FALL FROM STANDING HEIGHT OR LESS. IT IS DIAGNOSTIC OF OSTEOPOROSIS IN THIS CONTEXT AND IS THE STRONGEST PREDICTOR OF THE NEXT FRACTURE. A PATIENT WHO HAS ONE HAS ROUGHLY DOUBLE THE RISK OF ANOTHER.',
          the_actions: 'CALCIUM AND VITAMIN D. ANTIRESORPTIVE THERAPY — a bisphosphonate such as alendronic acid, or zoledronic acid, or denosumab where oral treatment is unsuitable. DEXA SCAN where it will change management, though in a hip fragility fracture treatment is often started without waiting. Review steroids and other bone-toxic drugs. Falls assessment and prevention. Exclude secondary causes — myeloma, hyperparathyroidism, coeliac disease, hyperthyroidism.',
          the_failure: 'FRACTURE LIAISON SERVICES EXIST BECAUSE THIS STEP IS OMITTED SO CONSISTENTLY. A patient can be operated on beautifully, rehabilitated well, discharged — and receive nothing to prevent the next fracture. IT IS THE COMMONEST MISSED OPPORTUNITY IN THE ENTIRE PATHWAY.',
        },
        e_discharge_and_the_honest_conversation: {
          rehabilitation: 'Multidisciplinary, with early discharge planning from day one. Occupational therapy home assessment, equipment and adaptations, and a package of care.',
          the_realistic_outlook: 'ROUGHLY HALF OF PATIENTS DO NOT RETURN TO THEIR PREVIOUS LEVEL OF FUNCTION, AND A SIGNIFICANT PROPORTION WHO LIVED INDEPENDENTLY DO NOT RETURN HOME. Say this honestly and early to the patient and family, because expectations set on day one determine how the next three months feel.',
          ceilings_of_care: 'In a very frail patient, discuss what should happen if they deteriorate. Surgery is almost always still appropriate for analgesia and nursing care even in a patient not for escalation — A HIP FRACTURE IS FIXED FOR COMFORT AS MUCH AS FOR FUNCTION, and a decision not to escalate elsewhere is not a reason to withhold the operation.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_blood_supply_determines_the_operation:
          'The retinacular vessels from the medial femoral circumflex artery run RETROGRADELY up the femoral neck. An intracapsular fracture disrupts them, so a DISPLACED intracapsular fracture means the head is likely avascular and must be REPLACED. An extracapsular fracture spares them, so the head is preserved and the fracture is FIXED. One anatomical fact, two entirely different operations.',
        bonus_2_the_mobility_history_is_a_surgical_investigation:
          'Total hip replacement is offered to patients who walked independently with no more than a stick, are not cognitively impaired and can engage in rehabilitation — and it gives better function and fewer reoperations in that group. Failing to record the baseline can cost the patient the better operation.',
        bonus_3_a_normal_radiograph_does_not_exclude_a_hip_fracture:
          '2 to 10% are occult. A patient who cannot weight bear with hip pain and a normal film needs an MRI. Sending them home with "soft tissue injury" allows an undisplaced fracture to displace.',
        bonus_4_surgery_within_36_hours_is_a_mortality_intervention:
          'Delay beyond 48 hours increases mortality and complications. Surgery is the analgesia and the route to mobilisation. Waiting for a routine echocardiogram or a free list is not an acceptable reason for delay.',
        bonus_5_the_fascia_iliaca_block_reduces_delirium:
          'It provides excellent analgesia while sparing opioids, and opioid sparing in an 82-year-old directly reduces delirium and respiratory depression. It is frequently omitted because nobody owns the task.',
        bonus_6_the_long_lie_is_its_own_diagnosis:
          'More than an hour on the floor causes rhabdomyolysis, acute kidney injury, hypothermia, dehydration, pressure injury and pneumonia. Check creatine kinase, renal function, potassium and temperature, and inspect the heels and sacrum.',
        bonus_7_the_fracture_is_diagnostic_of_osteoporosis_and_nobody_treats_it:
          'A fall from standing height causing a hip fracture is a fragility fracture and roughly doubles the risk of the next one. Calcium, vitamin D, an antiresorptive and a falls assessment. Fracture liaison services exist precisely because this step is omitted so consistently.',
        trap_1: 'ASK WHY SHE FELL. A fall from standing height in an older person is a symptom — syncope, arrhythmia, infection, postural hypotension, hypoglycaemia or polypharmacy.',
        trap_2: 'Extracapsular fractures bleed substantially more — the capsule does not contain the haematoma. Cross-match accordingly.',
        trap_3: 'Check Shenton line on the AP PELVIS, not an AP hip alone — comparison with the normal side finds subtle fractures.',
        trap_4: 'Record a BASELINE cognitive score, or postoperative delirium cannot be recognised.',
        trap_5: 'Offload the HEELS — the highest-risk pressure site in these patients and routinely forgotten.',
        trap_6: 'Full weight bearing as pain allows is the default after modern fixation — restricting it is usually impractical and harmful.',
        trap_7: 'Operate even in a patient not for escalation elsewhere — the fracture is fixed for comfort and nursing care as much as for function.',
        one_line_summary: 'Displaced intracapsular neck of femur fracture after an unwitnessed fall with a long lie. Fascia iliaca block now, find out why she fell, operate within 36 hours, orthogeriatric care from day one — and start her bone protection before she leaves.',
      },
    },
    warnings: [
      'ASK WHY THE PATIENT FELL — a fall from standing height in an older person is a symptom, not an event.',
      'A LONG LIE causes rhabdomyolysis, acute kidney injury, hypothermia and pressure injury — check CK, renal function, potassium and temperature.',
      'A NORMAL RADIOGRAPH DOES NOT EXCLUDE A HIP FRACTURE — 2 to 10% are occult. If they cannot weight bear, get an MRI.',
      'DISPLACED INTRACAPSULAR fractures need the head REPLACED; EXTRACAPSULAR fractures are FIXED — the blood supply decides.',
      'RECORD PRE-FRACTURE MOBILITY AND COGNITION — it determines whether the patient is offered a total hip replacement.',
      'SURGERY WITHIN 36 HOURS — delay beyond 48 hours increases mortality. A routine echocardiogram is not a reason to delay.',
      'OFFER A FASCIA ILIACA BLOCK EARLY — opioid sparing directly reduces delirium in this population.',
      'AVOID NSAIDs in this population — renal, gastrointestinal and cardiac risk.',
      'EXTRACAPSULAR FRACTURES BLEED MORE — the capsule does not contain the haematoma. Cross-match accordingly.',
      'RECORD A BASELINE COGNITIVE SCORE, or postoperative delirium cannot be recognised.',
      'OFFLOAD THE HEELS — the highest-risk pressure site in hip fracture patients.',
      'MOBILISE THE DAY AFTER SURGERY, full weight bearing as pain allows unless the surgeon specifies otherwise.',
      'TREAT THE OSTEOPOROSIS — this is a fragility fracture and roughly doubles the risk of the next one. It is the commonest missed step in the pathway.',
      'Operate even in a patient not for escalation elsewhere — the fracture is fixed for comfort and nursing care.',
      'Management here is a teaching example. Follow local hip fracture and orthogeriatric protocols.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Implant choice, weight-bearing status and anticoagulation timing are surgical decisions.',
      'Garden classification has poor interobserver agreement beyond the displaced/undisplaced distinction.',
    ],
    cards: [
      { q: 'Why does the fracture level determine the operation?', a: 'Retinacular vessels run retrogradely up the neck — intracapsular fractures disrupt them, extracapsular ones do not.' },
      { q: 'Which artery supplies the femoral head in adults?', a: 'Mainly the medial femoral circumflex artery via retinacular vessels.' },
      { q: 'Simplify the Garden classification.', a: 'I and II are undisplaced; III and IV are displaced — that binary decides the treatment.' },
      { q: 'Who is offered a total hip replacement rather than hemiarthroplasty?', a: 'Independently mobile with no more than a stick, not cognitively impaired, and fit to engage in rehabilitation.' },
      { q: 'Why is the leg shortened and externally rotated?', a: 'The external rotators and iliopsoas pull the distal fragment up and rotate it outwards, unopposed.' },
      { q: 'What proportion of hip fractures are occult on radiograph?', a: '2 to 10% — a patient unable to weight bear with a normal film needs an MRI.' },
      { q: 'What is Shenton line?', a: 'The smooth curve from the inferior superior pubic ramus to the inferomedial femoral neck — disruption indicates fracture.' },
      { q: 'Why does surgery within 36 hours matter?', a: 'Delay beyond 48 hours increases mortality — surgery is the analgesia and the route to mobilisation.' },
      { q: 'How does a fascia iliaca block reduce delirium?', a: 'It spares opioids, and opioid sparing in an older patient directly reduces delirium and respiratory depression.' },
      { q: 'What is a long lie and what does it cause?', a: 'More than an hour on the floor — rhabdomyolysis, acute kidney injury, hypothermia, dehydration and pressure injury.' },
      { q: 'Which fractures bleed more and why?', a: 'Extracapsular — the capsule does not contain the haematoma, and blood loss of a litre or more occurs.' },
      { q: 'What is a fragility fracture and why does it matter?', a: 'A fracture from a fall from standing height or less — diagnostic of osteoporosis and roughly doubling the risk of the next fracture.' },
    ],
    checks: [
      'Cause of the fall investigated, not just the fracture',
      'Long lie recognised with CK, renal function, potassium and temperature checked',
      'Pre-fracture mobility and cognition recorded from a collateral history',
      'Baseline cognitive score documented',
      'Anticoagulant agent and last dose established on admission',
      'Fascia iliaca block offered early',
      'NSAIDs avoided',
      'AP pelvis and lateral hip obtained; Shenton line checked',
      'MRI arranged if unable to weight bear with a normal film',
      'Cross-match arranged, especially for extracapsular fractures',
      'Surgery planned within 36 hours with no non-essential delay',
      'Orthogeriatric review from admission',
      'Delirium prevention bundle including glasses and hearing aids',
      'Pressure-relieving mattress with heels offloaded',
      'Thromboprophylaxis and nutrition addressed',
      'Mobilisation the day after surgery, weight bearing as pain allows',
      'Bone protection and falls assessment arranged before discharge',
      'Realistic functional outlook discussed with patient and family',
    ],
    related: ['fragility_fractures_and_the_osteoporosis_that_causes_them'],
  },

  {
    id: 'AS-CASE-0046',
    type: 'case',
    specialty: 'Surgery — Orthopaedics',
    teaching_case: true,
    title: 'CASE: Back Pain with Numbness When He Wipes',
    short: 'Case: cauda equina syndrome',
    summary:
      'A 41-year-old with back pain, bilateral leg symptoms and saddle numbness. Teaches the questions that must be asked in every back pain consultation, why painless retention with overflow is the sign everyone waits for and shouldn\'t, and why the MRI is emergency imaging.',
    domains: ['orthopaedics', 'neurosurgery', 'emergency_medicine', 'neurology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case cauda equina', 'cauda equina syndrome case', 'saddle anaesthesia',
      'red flag back pain', 'painless retention overflow', 'emergency mri spine',
      'post void residual', 'cauda equina red flags', 'disc prolapse case',
    ],
    terms: [
      'case', 'cauda equina syndrome', 'saddle anaesthesia', 'red flags back pain',
      'painless urinary retention', 'overflow incontinence', 'post-void residual',
      'anal tone', 'bulbocavernosus reflex', 'emergency mri', 'discectomy',
      'central disc prolapse', 'conus medullaris syndrome', 'sciatica',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '41-year-old warehouse worker with 3 weeks of back pain and left sciatica, who has developed pain in BOTH legs over 2 days, numbness when he wipes after opening his bowels, and difficulty starting to pass urine.',

      section_1_the_questions_that_must_be_asked: {
        the_principle:
          'CAUDA EQUINA SYNDROME IS DIAGNOSED BY ASKING QUESTIONS THAT PATIENTS DO NOT VOLUNTEER. NOBODY WALKS IN AND SAYS "MY PERINEUM IS NUMB". THE DIAGNOSIS IS MISSED BECAUSE THE QUESTIONS ARE NOT ASKED, NOT BECAUSE THE ANSWERS ARE SUBTLE.',
        the_questions_in_the_words_to_use: {
          saddle_sensation: '"WHEN YOU WIPE AFTER GOING TO THE TOILET, DOES IT FEEL NORMAL?" or "Is there any numbness between your legs, around your back passage or genitals?" HIS ANSWER IS YES — it feels different, like it has been injected at the dentist.',
          bladder: '"CAN YOU TELL WHEN YOUR BLADDER IS FULL? Can you start the stream normally? Can you tell when you are passing urine? Do you feel empty afterwards? Is there any leaking?" LOSS OF BLADDER SENSATION AND POOR STREAM ARE EARLIER AND MORE IMPORTANT THAN INCONTINENCE.',
          bowel: '"Can you tell when you need to open your bowels? Can you control it? Any leakage or soiling?"',
          sexual: '"Any change in sensation during sex, or in erections?" It is easily skipped from embarrassment and it is a genuine early sign.',
          legs: '"Is the pain now in BOTH legs? Any weakness, or has it changed?" BILATERAL sciatica is a significant escalation from unilateral.',
        },
        the_dangerous_myth: {
          the_belief: 'That cauda equina syndrome is diagnosed by painless urinary retention with overflow incontinence.',
          the_correction:
            'PAINLESS RETENTION WITH OVERFLOW IS A LATE SIGN. BY THE TIME IT APPEARS, THE PROGNOSIS FOR RECOVERY OF BLADDER FUNCTION IS SUBSTANTIALLY WORSE. THE DISTINCTION BETWEEN "INCOMPLETE" CAUDA EQUINA (ALTERED SENSATION, HESITANCY, LOSS OF DESIRE TO VOID, BUT STILL VOIDING) AND "RETENTION" CAUDA EQUINA IS THE MOST PROGNOSTICALLY IMPORTANT DISTINCTION IN THE CONDITION. THE INCOMPLETE GROUP DO FAR BETTER WITH URGENT SURGERY. WAITING FOR RETENTION TO CONFIRM THE DIAGNOSIS IS WAITING FOR THE POINT AT WHICH SURGERY HELPS LESS.',
        },
        the_other_red_flags_in_back_pain: 'AGE UNDER 20 OR OVER 55 AT FIRST PRESENTATION · THORACIC pain · history of CANCER · unexplained WEIGHT LOSS · FEVER, night sweats, intravenous drug use or immunosuppression (infection) · significant TRAUMA, or minor trauma in an osteoporotic patient · PROGRESSIVE NEUROLOGICAL DEFICIT · STEROID use · NIGHT PAIN that wakes the patient · and pain unrelieved by rest.',
      },

      section_2_anatomy_and_mechanism: {
        what_the_cauda_equina_is: 'THE SPINAL CORD ENDS AT THE CONUS MEDULLARIS, USUALLY AT THE LEVEL OF L1 TO L2 IN ADULTS. Below that, the lumbar and sacral nerve roots continue within the thecal sac as a bundle resembling a horse tail — the CAUDA EQUINA. THESE ARE PERIPHERAL NERVE ROOTS, NOT SPINAL CORD.',
        the_consequence_for_the_examination: 'COMPRESSION PRODUCES A LOWER MOTOR NEURONE PICTURE — FLACCID WEAKNESS, REDUCED OR ABSENT REFLEXES, AND DOWNGOING PLANTARS. UPPER MOTOR NEURONE SIGNS — increased tone, brisk reflexes, upgoing plantars — INDICATE A LESION AT OR ABOVE THE CONUS AND POINT TO A DIFFERENT LEVEL AND DIFFERENTIAL.',
        conus_medullaris_syndrome: 'Compression AT the conus itself (around L1-L2) causes a MIXED picture with both upper and lower motor neurone signs, EARLIER and more SYMMETRICAL bladder and bowel dysfunction, and often less radicular leg pain. The distinction is academic in the emergency — both need urgent imaging and decompression — but it explains confusing examination findings.',
        the_causes: 'CENTRAL LUMBAR DISC PROLAPSE is the commonest, usually L4-L5 or L5-S1 · SPINAL STENOSIS with acute deterioration · TUMOUR, primary or metastatic · EPIDURAL ABSCESS, particularly in intravenous drug users, diabetics and the immunosuppressed · EPIDURAL HAEMATOMA, especially in anticoagulated patients or after spinal procedures · TRAUMA and fracture · and iatrogenic causes after spinal surgery or instrumentation.',
        why_the_bladder_is_affected: 'The parasympathetic supply to the detrusor arises from S2, S3 AND S4 — "S2, 3, 4 KEEPS THE URINE OFF THE FLOOR". The pudendal nerve, also S2-S4, supplies the external sphincter and the perineal sensation of the saddle area. COMPRESSION OF THESE SACRAL ROOTS THEREFORE PRODUCES SADDLE ANAESTHESIA, LOSS OF BLADDER SENSATION AND SPHINCTER DYSFUNCTION TOGETHER — which is why they are asked about as a group.',
      },

      section_3_examination: {
        the_essential_examination: {
          saddle_sensation: 'TEST LIGHT TOUCH AND PINPRICK IN THE PERIANAL AND PERINEAL SKIN AND OVER THE BUTTOCKS AND POSTERIOR THIGHS, COMPARING SIDES. IT MUST BE DONE AND DOCUMENTED. Explain, offer a chaperone, and do it — "PR not done" in a patient with these symptoms is indefensible.',
          anal_tone_and_voluntary_contraction: 'DIGITAL RECTAL EXAMINATION FOR RESTING TONE AND, IMPORTANTLY, FOR VOLUNTARY SQUEEZE. Loss of voluntary contraction is significant. Note that RESTING TONE ALONE IS INSENSITIVE.',
          lower_limb_neurology: 'Power, tone, reflexes (knee L3-L4, ankle S1-S2) and plantars. Sensation by dermatome. LOOK FOR A LOWER MOTOR NEURONE PATTERN.',
          straight_leg_raise: 'Reproduces radicular pain in nerve root irritation. BILATERAL positive straight leg raise is concerning.',
          gait: 'If safe to test.',
        },
        the_post_void_residual_which_is_the_objective_measure: {
          how: 'ASK HIM TO PASS URINE, THEN SCAN THE BLADDER WITH A PORTABLE ULTRASOUND. A significantly raised residual — commonly taken as more than 100 to 200 mL, with local thresholds varying — INDICATES BLADDER DYSFUNCTION.',
          why_it_matters: 'IT CONVERTS A SUBJECTIVE SYMPTOM INTO AN OBJECTIVE, DOCUMENTED NUMBER. It is quick, non-invasive, available in most emergency departments, and it strengthens the referral considerably. A patient reporting hesitancy with a 600 mL residual is a different conversation with the on-call spinal team from a patient reporting hesitancy alone.',
          his_result: 'POST-VOID RESIDUAL 480 mL.',
        },
        vitals_and_general: 'Afebrile, systemically well. Check for fever and back tenderness suggesting infection, and for signs of malignancy. Examine the abdomen for a palpable bladder.',
      },

      section_4_investigation: {
        the_rule: {
          the_statement: 'URGENT MRI OF THE WHOLE LUMBOSACRAL SPINE — AND IT IS EMERGENCY IMAGING, AVAILABLE OUT OF HOURS. IF YOUR HOSPITAL CANNOT PROVIDE IT, THE PATIENT MUST BE TRANSFERRED TO ONE THAT CAN, THAT NIGHT.',
          the_reason: 'THE DIAGNOSIS CANNOT BE MADE OR EXCLUDED CLINICALLY WITH SUFFICIENT CONFIDENCE. Clinical features have poor predictive value in both directions — many patients with the full syndrome clinically have a normal scan, and some with modest symptoms have severe compression. SCAN EVERYONE IN WHOM IT IS SUSPECTED.',
          the_scope: 'IMAGE THE WHOLE LUMBOSACRAL SPINE. A limited scan of the presumed level can miss a lesion elsewhere, and in suspected malignancy or infection the WHOLE spine should be imaged.',
        },
        if_mri_is_contraindicated_or_unavailable: 'CT myelography is the alternative. PLAIN RADIOGRAPHS AND CT ARE INADEQUATE — they do not show the neural structures or soft tissue compression, and a normal plain film must never be used to exclude the diagnosis.',
        bloods: 'Full blood count, CRP and ESR — RAISED INFLAMMATORY MARKERS SHOULD RAISE THE QUESTION OF EPIDURAL ABSCESS OR DISCITIS, which is a different emergency needing blood cultures and antibiotics as well as decompression. Urea and electrolytes. Clotting and group and save for theatre. PSA and myeloma screen where malignancy is suspected. Blood cultures if febrile.',
      },

      section_5_management: {
        a_the_referral: 'TELEPHONE THE ON-CALL SPINAL SURGERY OR NEUROSURGERY SERVICE IMMEDIATELY — do not email, do not wait for the scan report, and send the images. STATE THE POST-VOID RESIDUAL AND THE SADDLE SENSATION FINDINGS. Escalate if there is any delay.',
        b_supportive: 'ANALGESIA — often severe pain requiring opioids and a neuropathic agent. CATHETERISE if there is retention, and record the residual volume drained. Nil by mouth. Bloods and consent. Thromboprophylaxis, balanced against imminent surgery. Nurse comfortably; strict flat bed rest is not required unless there is instability.',
        c_surgery: {
          the_operation: 'URGENT SURGICAL DECOMPRESSION — DISCECTOMY, LAMINECTOMY OR THE APPROPRIATE PROCEDURE FOR THE CAUSE.',
          the_timing: 'AS SOON AS POSSIBLE. THE EVIDENCE ON EXACT TIMING IS DEBATED, AND THAT DEBATE IS SOMETIMES MISUSED TO JUSTIFY DELAY. What is clear is that EARLIER DECOMPRESSION IS ASSOCIATED WITH BETTER OUTCOMES, AND THAT THE NEUROLOGICAL STATE AT THE TIME OF SURGERY IS THE STRONGEST PREDICTOR OF RECOVERY. THE PRACTICAL RULE IS THAT THIS IS AN EMERGENCY OPERATION, NOT A NEXT-AVAILABLE-LIST OPERATION.',
          the_prognostic_point: 'PATIENTS WITH INCOMPLETE CAUDA EQUINA — ALTERED SENSATION AND URINARY DIFFICULTY BUT STILL VOIDING — DO MUCH BETTER THAN THOSE WHO HAVE PROGRESSED TO PAINLESS RETENTION WITH OVERFLOW. THIS IS THE ENTIRE ARGUMENT FOR ASKING THE QUESTIONS EARLY.',
        },
        d_if_the_cause_is_not_a_disc: 'EPIDURAL ABSCESS needs blood cultures, antibiotics and usually surgical drainage. TUMOUR needs dexamethasone, oncology involvement and consideration of radiotherapy alongside surgery. EPIDURAL HAEMATOMA needs urgent reversal of anticoagulation and evacuation.',
        e_afterwards: {
          what_may_not_recover: 'BLADDER, BOWEL AND SEXUAL FUNCTION MAY NOT RETURN EVEN AFTER TECHNICALLY SUCCESSFUL SURGERY. Some patients need long-term intermittent self-catheterisation, bowel management and support for sexual dysfunction.',
          the_follow_up: 'Urology and continence services. Bowel management. SEXUAL FUNCTION — raise it, because patients will not, and it is a major and neglected consequence. Physiotherapy and rehabilitation. Psychological support. Occupational assessment — a warehouse worker with residual deficit may not return to that job.',
          the_conversation: 'Be honest before and after surgery about what may not recover. Patients who are told only "we will decompress it" and then discover permanent bladder dysfunction feel deceived, and rightly.',
        },
        f_the_service_level_point: {
          why_it_is_worth_stating: 'CAUDA EQUINA SYNDROME IS ONE OF THE MOST FREQUENT AND MOST EXPENSIVE SOURCES OF CLINICAL NEGLIGENCE CLAIMS IN ORTHOPAEDICS AND EMERGENCY MEDICINE, AND THE FAILURE IS ALMOST ALWAYS THE SAME: THE QUESTIONS WERE NOT ASKED, THE PERINEUM WAS NOT EXAMINED, OR THE SCAN WAS DEFERRED TO THE MORNING.',
          the_documentation: 'RECORD EXPLICITLY: saddle sensation asked about and tested · bladder and bowel function asked about in detail · anal tone and voluntary squeeze · post-void residual volume · the time of each assessment · who was called, when, and what was agreed. GOOD DOCUMENTATION HERE IS ALSO GOOD CARE, because a documented trend is what lets the next clinician see deterioration.',
          the_safety_netting: 'ANY PATIENT WITH BACK PAIN DISCHARGED WITHOUT THESE SYMPTOMS MUST BE GIVEN WRITTEN ADVICE TO RETURN IMMEDIATELY IF THEY DEVELOP NUMBNESS IN THE SADDLE AREA, DIFFICULTY PASSING URINE, LOSS OF BLADDER OR BOWEL CONTROL, OR NEW LEG WEAKNESS. VERBAL ADVICE ALONE IS NOT ENOUGH, and this is the single most valuable thing you can do for the many back pain patients who do not have cauda equina today.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_diagnosis_is_made_by_asking:
          'Nobody volunteers "my perineum is numb". Ask in plain words: "When you wipe, does it feel normal?" "Can you tell when your bladder is full?" "Can you start the stream?" The diagnosis is missed because the questions are not asked, not because the answers are subtle.',
        bonus_2_painless_retention_is_a_late_sign_not_the_diagnostic_criterion:
          'Incomplete cauda equina — altered sensation, hesitancy, loss of the desire to void, but still voiding — has a far better prognosis than retention with overflow. Waiting for retention to confirm the diagnosis means waiting for the point at which surgery helps less.',
        bonus_3_the_post_void_residual_turns_a_symptom_into_a_number:
          'Bladder scan after voiding. A residual over 100 to 200 mL is objective, documented evidence that transforms the referral conversation. It takes two minutes and most emergency departments have the scanner.',
        bonus_4_it_is_a_lower_motor_neurone_syndrome:
          'The cauda equina is peripheral nerve roots, not spinal cord — so expect flaccid weakness, reduced reflexes and downgoing plantars. Upper motor neurone signs mean the lesion is at or above the conus and change the differential.',
        bonus_5_s2_3_4_explains_why_the_symptoms_cluster:
          'The parasympathetic detrusor supply and the pudendal nerve both arise from S2 to S4. That is why saddle anaesthesia, bladder sensation loss and sphincter dysfunction occur together, and why they are asked about as a group.',
        bonus_6_mri_is_emergency_imaging:
          'Clinical features predict the scan poorly in both directions. Scan everyone in whom it is suspected, image the WHOLE lumbosacral spine, and if your hospital cannot provide it out of hours, transfer the patient that night.',
        bonus_7_written_safety_netting_is_the_highest_value_intervention:
          'Most back pain patients do not have cauda equina today. Giving every one of them written instructions to return immediately with saddle numbness, urinary difficulty, incontinence or new weakness is what catches the one who develops it next week.',
        trap_1: 'Test and DOCUMENT saddle sensation and anal tone including VOLUNTARY squeeze — resting tone alone is insensitive.',
        trap_2: 'Raised inflammatory markers suggest EPIDURAL ABSCESS or discitis — a different emergency needing cultures and antibiotics too.',
        trap_3: 'Plain radiographs and CT are inadequate — they do not show neural compression.',
        trap_4: 'Ask about sexual function. It is skipped from embarrassment and it is a genuine early sign and a major long-term consequence.',
        trap_5: 'Bilateral sciatica is a significant escalation from unilateral.',
        trap_6: 'Be honest that bladder, bowel and sexual function may not recover even after successful decompression.',
        one_line_summary: 'Cauda equina syndrome from a central disc prolapse. Ask the questions in plain words, examine the perineum, scan the bladder for a residual, and get an emergency MRI tonight — because the incomplete patient recovers and the one in retention often does not.',
      },
    },
    warnings: [
      'THE DIAGNOSIS IS MADE BY ASKING — patients never volunteer saddle numbness. Use plain words.',
      'PAINLESS RETENTION WITH OVERFLOW IS A LATE SIGN — incomplete cauda equina has a far better prognosis.',
      'TEST AND DOCUMENT SADDLE SENSATION AND ANAL TONE INCLUDING VOLUNTARY SQUEEZE — resting tone alone is insensitive.',
      'MEASURE A POST-VOID RESIDUAL — it converts a symptom into an objective documented number.',
      'URGENT MRI OF THE WHOLE LUMBOSACRAL SPINE — this is EMERGENCY imaging, available out of hours. Transfer if necessary.',
      'CLINICAL FEATURES PREDICT THE SCAN POORLY IN BOTH DIRECTIONS — scan everyone in whom it is suspected.',
      'PLAIN RADIOGRAPHS AND CT ARE INADEQUATE — they do not show neural compression.',
      'It is a LOWER motor neurone syndrome — upper motor neurone signs mean a lesion at or above the conus.',
      'RAISED INFLAMMATORY MARKERS suggest EPIDURAL ABSCESS or discitis — take cultures and give antibiotics as well.',
      'TELEPHONE the spinal or neurosurgical service — do not wait for the formal report.',
      'ASK ABOUT SEXUAL FUNCTION — it is skipped from embarrassment and is both an early sign and a major consequence.',
      'BLADDER, BOWEL AND SEXUAL FUNCTION MAY NOT RECOVER even after successful decompression — say so honestly.',
      'GIVE WRITTEN SAFETY-NETTING to every back pain patient discharged — saddle numbness, urinary difficulty, incontinence or new weakness means return immediately.',
      'DOCUMENT the questions asked, the examination, the residual volume, the times and every call.',
      'Management here is a teaching example. Follow local spinal pathways.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Exact surgical timing remains debated, and local thresholds for post-void residual vary.',
      'The distinction between conus medullaris and cauda equina syndromes is academic in the emergency — both need urgent imaging and decompression.',
    ],
    cards: [
      { q: 'How should you ask about saddle sensation?', a: '"When you wipe after going to the toilet, does it feel normal?" Patients never volunteer it.' },
      { q: 'Why is painless retention with overflow a poor diagnostic criterion?', a: 'It is a LATE sign — incomplete cauda equina, still voiding, has a far better prognosis.' },
      { q: 'What is the value of a post-void residual?', a: 'It converts a subjective symptom into an objective documented number and transforms the referral.' },
      { q: 'What motor neurone pattern is expected and why?', a: 'Lower motor neurone — the cauda equina is peripheral nerve roots, not spinal cord.' },
      { q: 'Which roots supply the bladder and perineum?', a: 'S2, S3 and S4 — parasympathetic detrusor supply and the pudendal nerve.' },
      { q: 'What imaging is required?', a: 'Urgent MRI of the whole lumbosacral spine — emergency imaging, out of hours, transferring if necessary.' },
      { q: 'Why not rely on clinical features?', a: 'They predict the scan poorly in both directions — many with the full clinical syndrome have a normal scan.' },
      { q: 'What do raised inflammatory markers suggest?', a: 'Epidural abscess or discitis — needing cultures and antibiotics as well as decompression.' },
      { q: 'What must be documented?', a: 'Questions asked, saddle sensation, anal tone and voluntary squeeze, post-void residual, times and calls.' },
      { q: 'Name five red flags in back pain.', a: 'Age under 20 or over 55, thoracic pain, cancer history, weight loss, fever, night pain, progressive deficit, steroids.' },
      { q: 'What is conus medullaris syndrome?', a: 'Compression at L1-L2 giving mixed upper and lower motor neurone signs with earlier symmetrical bladder dysfunction.' },
      { q: 'What is the highest-value intervention for back pain patients generally?', a: 'Written safety-netting to return immediately with saddle numbness, urinary difficulty, incontinence or new weakness.' },
    ],
    checks: [
      'Saddle sensation asked about in plain words and tested',
      'Bladder sensation, stream and emptying asked about in detail',
      'Bowel control and sexual function asked about',
      'Bilateral leg symptoms identified',
      'Digital rectal examination for tone AND voluntary squeeze, documented',
      'Lower limb neurology documented including reflexes and plantars',
      'Post-void residual measured and recorded',
      'Red flags for infection and malignancy screened',
      'Inflammatory markers checked',
      'Emergency MRI of the whole lumbosacral spine arranged, or transfer organised',
      'Spinal or neurosurgical team telephoned with findings including the residual',
      'Catheterised if in retention with the volume recorded',
      'Analgesia given, bloods and consent prepared',
      'Honest discussion about possible permanent bladder, bowel and sexual dysfunction',
      'Written safety-netting given to any back pain patient discharged',
    ],
    related: ['red_flags_in_back_pain_and_the_spinal_emergencies'],
  },
];
