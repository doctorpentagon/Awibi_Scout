/**
 * CASE SCENARIOS — Open fracture, supracondylar fracture in a child,
 * acute urinary retention, and the infected diabetic foot.
 *
 * Batch 5, part 4 — closes the batch at case 50.
 */

export default [
  {
    id: 'AS-CASE-0047',
    type: 'case',
    specialty: 'Surgery — Orthopaedics',
    teaching_case: true,
    title: 'CASE: Bone Through the Skin After a Motorcycle Crash',
    short: 'Case: open tibial fracture',
    summary:
      'A 26-year-old with an open tibial fracture and a contaminated wound. Teaches the Gustilo-Anderson grades and why they are assigned in theatre, why antibiotics within an hour matter more than the 6-hour debridement rule, and why photographing the wound once prevents repeated exposure.',
    domains: ['orthopaedics', 'trauma', 'plastic_surgery', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case open fracture', 'compound fracture case', 'gustilo anderson case',
      'open tibial fracture', 'debridement timing', 'orthoplastic',
      'fix and flap', 'antibiotics open fracture', 'tetanus open fracture',
    ],
    terms: [
      'case', 'open fracture', 'compound fracture', 'gustilo anderson classification',
      'debridement', 'orthoplastic', 'fix and flap', 'external fixator',
      'intramedullary nail', 'negative pressure wound therapy', 'tetanus prophylaxis',
      'compartment syndrome', 'neurovascular status', 'bsst boa standards',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '26-year-old motorcyclist with an obvious open fracture of the left tibia. Bone is visible through a 6 cm wound contaminated with roadside dirt. The foot is warm with palpable pulses and he can move his toes.',

      section_1_the_first_actions_and_why_the_order_matters: {
        the_temptation: 'The wound is dramatic and everyone wants to look at it, clean it and photograph it repeatedly.',
        the_correct_sequence: {
          one: 'THIS IS A TRAUMA PATIENT. COMPLETE THE PRIMARY SURVEY FIRST. AN OPEN TIBIAL FRACTURE IS DISTRACTING AND CAN CAUSE THE CHEST, ABDOMEN AND HEAD TO BE IGNORED. The limb is not what kills him in the first hour.',
          two: 'ASSESS AND DOCUMENT THE NEUROVASCULAR STATUS OF THE LIMB — DISTAL PULSES, CAPILLARY REFILL, SENSATION AND MOTOR FUNCTION — BEFORE AND AFTER ANY MANIPULATION. This is a medicolegal and clinical necessity, because a deficit discovered later must be attributable to a point in time.',
          three: 'GIVE INTRAVENOUS ANTIBIOTICS WITHIN THE HOUR. This is the single highest-value action for the limb and is discussed below.',
          four: 'REMOVE GROSS CONTAMINATION ONLY. DO NOT SCRUB, DO NOT IRRIGATE AGGRESSIVELY IN THE EMERGENCY DEPARTMENT, AND DO NOT PUSH PROTRUDING BONE BACK IN DELIBERATELY. Formal debridement happens in theatre. Emergency department irrigation drives contamination deeper.',
          five: 'PHOTOGRAPH THE WOUND ONCE, THEN COVER IT WITH A SALINE-SOAKED GAUZE AND AN OCCLUSIVE DRESSING AND LEAVE IT ALONE.',
          six: 'REDUCE AND SPLINT THE LIMB, then REASSESS AND DOCUMENT the neurovascular status again.',
          seven: 'TETANUS PROPHYLAXIS. ANALGESIA. Bloods, cross-match, nil by mouth. Refer to orthopaedics and plastic surgery TOGETHER.',
        },
        the_photograph_rule: {
          why_it_matters:
            'A SINGLE GOOD PHOTOGRAPH TAKEN ON ARRIVAL, STORED IN THE NOTES, MEANS THE WOUND NEVER HAS TO BE UNCOVERED AGAIN UNTIL THEATRE. EVERY EXPOSURE INTRODUCES HOSPITAL ORGANISMS. Without a photograph, each new clinician lifts the dressing "just to see", and a wound can be exposed five or six times before it reaches theatre. IT IS A ONE-SECOND ACTION THAT PREVENTS A MEASURABLE HARM.',
        },
      },

      section_2_the_classification_and_its_honest_limits: {
        gustilo_anderson: {
          type_i: 'WOUND LESS THAN 1 cm, CLEAN, with minimal soft tissue damage and a simple fracture pattern. Usually an inside-out injury from a bone spike.',
          type_ii: 'WOUND 1 TO 10 cm, with MODERATE soft tissue damage and no extensive stripping.',
          type_iiia: 'EXTENSIVE soft tissue damage or a wound over 10 cm, BUT ADEQUATE SOFT TISSUE COVERAGE OF BONE REMAINS. Includes any high-energy injury, segmental fracture or significant contamination REGARDLESS OF WOUND SIZE.',
          type_iiib: 'EXTENSIVE soft tissue loss WITH PERIOSTEAL STRIPPING AND EXPOSED BONE REQUIRING SOFT TISSUE COVERAGE — a flap. THIS IS THE GRADE THAT DEFINES THE NEED FOR PLASTIC SURGERY.',
          type_iiic: 'ANY OPEN FRACTURE WITH AN ARTERIAL INJURY REQUIRING REPAIR, REGARDLESS OF THE SIZE OF THE WOUND. A 1 cm wound with a transected popliteal artery is IIIC.',
        },
        the_three_points_that_are_usually_omitted: {
          one_it_is_assigned_in_theatre:
            'THE GRADE IS DETERMINED AFTER DEBRIDEMENT, WHEN THE TRUE EXTENT OF DEVITALISED TISSUE, PERIOSTEAL STRIPPING AND CONTAMINATION IS VISIBLE. A WOUND THAT LOOKS SMALL IN THE EMERGENCY DEPARTMENT IS FREQUENTLY UPGRADED IN THEATRE. Assigning a grade from the resuscitation room and treating it as settled is a common error, and it leads to underestimating the injury.',
          two_energy_matters_more_than_length:
            'A 2 cm wound from a high-energy motorcycle crash with a segmental fracture is a TYPE III injury, not a type I. THE SIZE OF THE HOLE IN THE SKIN REFLECTS THE ENERGY POORLY — the soft tissue envelope, periosteal stripping and fracture comminution reflect it far better.',
          three_interobserver_agreement_is_poor:
            'Studies show only moderate agreement between surgeons on Gustilo grade. IT IS USEFUL FOR COMMUNICATION, PROGNOSIS AND ANTIBIOTIC DECISIONS, BUT IT IS NOT A PRECISION INSTRUMENT, and management should not hinge on a borderline grade.',
        },
      },

      section_3_the_two_time_rules_and_which_one_is_real: {
        antibiotics_within_an_hour: {
          the_rule: 'INTRAVENOUS ANTIBIOTICS AS SOON AS POSSIBLE AND WITHIN ONE HOUR OF INJURY. THIS IS THE TIME RULE WITH THE STRONGEST EVIDENCE, AND IT IS THE ONE MOST OFTEN NEGLECTED.',
          the_agent: 'CO-AMOXICLAV OR A CEPHALOSPORIN, per local policy, covering skin flora. Add cover for Gram-negatives and anaerobes in heavily contaminated wounds, and specific cover for water or agricultural contamination. CONTINUE FOR 24 TO 72 HOURS AND RE-DOSE AT DEBRIDEMENT.',
          the_evidence: 'DELAY IN ANTIBIOTIC ADMINISTRATION IS MORE STRONGLY ASSOCIATED WITH INFECTION THAN DELAY IN DEBRIDEMENT. If you can only do one thing quickly, do this.',
        },
        the_six_hour_debridement_rule: {
          the_traditional_teaching: 'That all open fractures must be debrided within 6 hours of injury.',
          the_current_position:
            'THE 6-HOUR RULE IS POORLY EVIDENCED AND HAS BEEN LARGELY ABANDONED. Multiple studies have failed to show that debridement within 6 hours reduces infection compared with debridement within 12 to 24 hours, PROVIDED ANTIBIOTICS WERE GIVEN EARLY AND THE WOUND WAS APPROPRIATELY DRESSED.',
          what_replaced_it:
            'DEBRIDEMENT SHOULD BE PERFORMED BY AN APPROPRIATELY SENIOR ORTHOPAEDIC AND PLASTIC SURGICAL TEAM, ON A PLANNED LIST, IN DAYLIGHT HOURS WHERE POSSIBLE — GENERALLY WITHIN 12 TO 24 HOURS. A THOROUGH DEBRIDEMENT BY AN EXPERIENCED SURGEON AT 14 HOURS IS BETTER THAN A HURRIED ONE BY A TIRED JUNIOR AT 4 A.M. THE QUALITY OF THE DEBRIDEMENT MATTERS MORE THAN THE CLOCK.',
          the_exceptions_that_still_go_immediately: 'GROSS CONTAMINATION — agricultural, marine or sewage · VASCULAR COMPROMISE requiring revascularisation · COMPARTMENT SYNDROME · and a MULTIPLY INJURED patient requiring surgery for other reasons. THESE GO NOW.',
          why_this_correction_matters: 'Because the old rule is still taught, and it drives poor decisions in both directions — rushing a case that should be planned, and creating a false sense that a case done at 5 hours 55 minutes has been optimally managed.',
        },
      },

      section_4_assessment_and_investigation: {
        the_limb_assessment: 'DOCUMENT: distal pulses by palpation and Doppler · capillary refill · sensation in each nerve distribution — TIBIAL (sole), DEEP PERONEAL (first web space), SUPERFICIAL PERONEAL (dorsum), SURAL and SAPHENOUS · motor function — ankle dorsiflexion and plantarflexion, toe movement · skin colour and temperature · the size, site and contamination of the wound · and the presence of degloving.',
        compartment_syndrome: 'AN OPEN FRACTURE DOES NOT DECOMPRESS THE COMPARTMENTS AND DOES NOT PROTECT AGAINST COMPARTMENT SYNDROME. THIS IS A DANGEROUS AND WIDESPREAD MISCONCEPTION. The fascial planes are not opened by a skin wound. Monitor for escalating pain, pain on passive stretch and a tense compartment exactly as in a closed fracture.',
        imaging: 'RADIOGRAPHS IN TWO PLANES INCLUDING THE JOINT ABOVE AND THE JOINT BELOW. CT for complex or intra-articular patterns. CT ANGIOGRAPHY if there is any vascular concern — but a pulseless limb goes to theatre with the vascular surgeon, not to the scanner.',
        bloods: 'Full blood count, urea and electrolytes, clotting, GROUP AND CROSS-MATCH, CRP as a baseline, glucose. Take swabs only if directed by microbiology — surface swabs in the emergency department grow colonisers and mislead.',
      },

      section_5_management: {
        a_the_orthoplastic_principle: {
          the_statement:
            'SEVERE OPEN LOWER LIMB FRACTURES SHOULD BE MANAGED JOINTLY BY ORTHOPAEDIC AND PLASTIC SURGEONS FROM THE OUTSET, IN A SPECIALIST CENTRE. THE SKELETAL FIXATION AND THE SOFT TISSUE COVERAGE MUST BE PLANNED TOGETHER, BECAUSE THE FIXATION AFFECTS WHAT FLAP IS POSSIBLE AND THE FLAP AFFECTS WHERE FIXATION CAN GO.',
          the_consequence: 'Referral is to BOTH teams simultaneously, and transfer to an orthoplastic centre should be arranged early rather than after a first operation elsewhere has limited the options.',
        },
        b_debridement: {
          the_principle: 'EXCISE ALL DEVITALISED AND CONTAMINATED TISSUE UNTIL HEALTHY, BLEEDING, CONTRACTILE TISSUE IS REACHED. Extend the wound as needed along fasciotomy-compatible lines. THE DEBRIDEMENT IS THE OPERATION THAT DETERMINES WHETHER THE LIMB BECOMES INFECTED.',
          irrigation: 'COPIOUS IRRIGATION WITH NORMAL SALINE. NOTE THAT THE FLOW TRIAL SHOWED NO BENEFIT FROM HIGH-PRESSURE OVER LOW-PRESSURE IRRIGATION, AND THAT SOAP SOLUTION WAS WORSE THAN SALINE — high pressure may drive contamination deeper and damage tissue. VOLUME AND THOROUGHNESS MATTER; PRESSURE AND ADDITIVES DO NOT.',
          the_assessment_of_bone: 'Bone fragments with no soft tissue attachment are avascular and are generally removed; those with attachments are retained. This judgement is a senior one.',
        },
        c_skeletal_stabilisation: 'TEMPORARY EXTERNAL FIXATION where soft tissues are not ready, the patient is unstable, or a staged approach is planned. DEFINITIVE INTERNAL FIXATION — usually an intramedullary nail for the tibia — where the wound can be closed or covered at the same sitting. THE PRINCIPLE IS THAT DEFINITIVE INTERNAL FIXATION AND SOFT TISSUE COVERAGE SHOULD IDEALLY HAPPEN TOGETHER.',
        d_soft_tissue_coverage: {
          the_target: 'DEFINITIVE SOFT TISSUE COVERAGE WITHIN 72 HOURS OF INJURY WHERE POSSIBLE. THE LONGER BONE AND METALWORK REMAIN EXPOSED, THE HIGHER THE INFECTION RATE.',
          the_options: 'Direct closure if tension-free and the tissues are healthy · split skin graft over healthy muscle · LOCAL FLAP · or FREE FLAP for larger defects, particularly over the distal third of the tibia where local options are limited because the bone is subcutaneous with little surrounding muscle.',
          fix_and_flap: 'THE "FIX AND FLAP" APPROACH — DEFINITIVE FIXATION AND FLAP COVERAGE AT A SINGLE COMBINED PROCEDURE — GIVES THE BEST RESULTS IN SUITABLE PATIENTS AND IS THE REASON THE ORTHOPLASTIC MODEL EXISTS.',
          negative_pressure_wound_therapy: 'A TEMPORISING DRESSING BETWEEN PROCEDURES. IT IS NOT DEFINITIVE COVERAGE AND MUST NOT BECOME A SUBSTITUTE FOR TIMELY FLAP SURGERY — prolonged use while awaiting a flap is associated with worse outcomes.',
        },
        e_amputation_and_the_mess_score_caveat: {
          when_it_is_considered: 'A mangled limb with prolonged warm ischaemia, extensive soft tissue and bone loss, a completely insensate foot from tibial nerve transection, or a critically unwell patient in whom limb salvage is not survivable.',
          the_mess_score: 'The MANGLED EXTREMITY SEVERITY SCORE combines skeletal and soft tissue injury, limb ischaemia, shock and age.',
          the_honest_correction:
            'MESS AND SIMILAR SCORES HAVE PERFORMED POORLY WHEN TESTED PROSPECTIVELY. THEY HAVE LOW SPECIFICITY FOR PREDICTING AMPUTATION AND MUST NOT BE USED ALONE TO DECIDE TO REMOVE A LIMB. The LEAP study also showed that functional outcomes after salvage and after amputation were broadly similar at 2 and 7 years, and that psychosocial factors predicted outcome more strongly than the injury. THE DECISION IS A SENIOR, MULTIDISCIPLINARY, PATIENT-INVOLVED ONE — NOT A CALCULATION.',
          the_practical_point: 'An insensate sole was once considered an indication for amputation; LEAP showed that many such patients regain sensation, and it is no longer accepted as a standalone criterion.',
        },
        f_the_rest: 'TETANUS PROPHYLAXIS according to immunisation status and wound type — an open fracture contaminated with soil is a tetanus-prone wound. Thromboprophylaxis. Analgesia, including regional techniques — BUT DISCUSS A DENSE BLOCK WITH THE SURGEON, since it can mask compartment syndrome. Nutrition. Early physiotherapy. Psychological support — these are young patients facing months of treatment. Rehabilitation and return-to-work planning.',
      },

      section_6_teaching_points: {
        bonus_1_antibiotics_within_the_hour_beat_the_six_hour_rule:
          'Delay in antibiotics is more strongly associated with infection than delay in debridement. The 6-hour debridement rule is poorly evidenced and largely abandoned — a thorough debridement by a senior team at 14 hours beats a hurried one at 4 a.m.',
        bonus_2_the_gustilo_grade_is_assigned_in_theatre:
          'The true extent of devitalised tissue, periosteal stripping and contamination is only visible after debridement, and wounds are frequently upgraded. Energy matters more than wound length: a 2 cm wound from a high-energy crash with a segmental fracture is type III.',
        bonus_3_an_open_fracture_does_not_prevent_compartment_syndrome:
          'The skin wound does not open the fascial planes. This misconception is widespread and dangerous — monitor exactly as for a closed fracture.',
        bonus_4_photograph_once_and_leave_it_alone:
          'Every exposure introduces hospital organisms, and without a photograph each new clinician lifts the dressing to look. One image in the notes prevents five exposures.',
        bonus_5_high_pressure_irrigation_is_not_better:
          'The FLOW trial showed no benefit of high over low pressure, and that soap was worse than saline. Volume and thoroughness matter; pressure and additives do not.',
        bonus_6_orthoplastic_from_the_outset_and_cover_within_72_hours:
          'Fixation determines what flap is possible and the flap determines where fixation can go — so both teams plan together. Definitive coverage within 72 hours, and negative pressure dressings are a bridge, never a substitute.',
        bonus_7_do_not_amputate_on_a_score:
          'MESS performs poorly prospectively and must not decide amputation alone. LEAP showed broadly similar outcomes after salvage and amputation, with psychosocial factors predicting outcome more than the injury — and that an insensate sole often recovers.',
        trap_1: 'Complete the PRIMARY SURVEY first — a dramatic limb injury is distracting.',
        trap_2: 'Document neurovascular status BEFORE and AFTER any manipulation.',
        trap_3: 'Do NOT scrub or aggressively irrigate in the emergency department — it drives contamination deeper.',
        trap_4: 'Surface swabs in the emergency department grow colonisers and mislead.',
        trap_5: 'Gross contamination, vascular compromise and compartment syndrome still go to theatre immediately.',
        trap_6: 'Distal third tibial wounds usually need a free flap — the bone is subcutaneous with little local muscle.',
        trap_7: 'Discuss dense regional blocks with the surgeon — they can mask compartment syndrome.',
        one_line_summary: 'Open tibial fracture. Primary survey first, antibiotics within the hour, document neurovascular status before and after splinting, photograph once and cover — then a planned orthoplastic debridement, not a rushed one at 4 a.m.',
      },
    },
    warnings: [
      'GIVE INTRAVENOUS ANTIBIOTICS WITHIN ONE HOUR — delay in antibiotics matters more than delay in debridement.',
      'THE 6-HOUR DEBRIDEMENT RULE IS POORLY EVIDENCED — a thorough senior debridement at 12 to 24 hours beats a rushed one overnight.',
      'Gross contamination, vascular compromise and compartment syndrome still require IMMEDIATE theatre.',
      'THE GUSTILO GRADE IS ASSIGNED IN THEATRE after debridement — wounds are frequently upgraded.',
      'ENERGY MATTERS MORE THAN WOUND LENGTH — a small wound from a high-energy injury is a type III.',
      'AN OPEN FRACTURE DOES NOT PREVENT COMPARTMENT SYNDROME — the skin wound does not open the fascia.',
      'COMPLETE THE PRIMARY SURVEY FIRST — a dramatic limb injury distracts from chest, abdomen and head.',
      'DOCUMENT NEUROVASCULAR STATUS BEFORE AND AFTER any manipulation or splinting.',
      'PHOTOGRAPH THE WOUND ONCE, cover it, and leave it alone — every exposure introduces hospital organisms.',
      'DO NOT scrub or aggressively irrigate in the emergency department — it drives contamination deeper.',
      'HIGH-PRESSURE IRRIGATION IS NOT BETTER than low pressure, and soap is worse than saline (FLOW trial).',
      'Refer to ORTHOPAEDICS AND PLASTIC SURGERY TOGETHER — fixation and coverage must be planned jointly.',
      'AIM FOR DEFINITIVE SOFT TISSUE COVERAGE WITHIN 72 HOURS — negative pressure therapy is a bridge, not a substitute.',
      'DO NOT USE MESS OR SIMILAR SCORES ALONE TO DECIDE AMPUTATION — they perform poorly prospectively.',
      'An INSENSATE SOLE is no longer an accepted standalone indication for amputation.',
      'Give TETANUS PROPHYLAXIS — a soil-contaminated open fracture is a tetanus-prone wound.',
      'Discuss dense regional blocks with the surgeon — they can mask compartment syndrome.',
      'Antibiotic choices here are teaching examples. Follow local orthopaedic and microbiology policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Debridement timing, antibiotic regimens and orthoplastic pathways follow national standards and local availability.',
      'Limb salvage versus amputation is a senior multidisciplinary decision made with the patient.',
    ],
    cards: [
      { q: 'Which time rule has the strongest evidence?', a: 'Intravenous antibiotics within one hour — delay matters more than delay in debridement.' },
      { q: 'What happened to the 6-hour debridement rule?', a: 'It is poorly evidenced and largely abandoned — quality of debridement matters more than the clock.' },
      { q: 'Which open fractures still go to theatre immediately?', a: 'Gross contamination, vascular compromise, compartment syndrome, and other surgical indications.' },
      { q: 'When is the Gustilo grade assigned?', a: 'In theatre after debridement — the true extent is only visible then, and wounds are frequently upgraded.' },
      { q: 'What defines type IIIB and IIIC?', a: 'IIIB: extensive soft tissue loss with exposed bone needing a flap. IIIC: any arterial injury requiring repair, regardless of wound size.' },
      { q: 'Does an open fracture prevent compartment syndrome?', a: 'No — the skin wound does not open the fascial planes. Monitor exactly as for a closed fracture.' },
      { q: 'Why photograph the wound once?', a: 'Every exposure introduces hospital organisms; without an image each new clinician lifts the dressing.' },
      { q: 'What did the FLOW trial show about irrigation?', a: 'No benefit of high over low pressure, and soap solution was worse than saline.' },
      { q: 'What is the orthoplastic principle?', a: 'Orthopaedic and plastic surgeons plan fixation and coverage together from the outset.' },
      { q: 'What is the target for definitive soft tissue coverage?', a: 'Within 72 hours — negative pressure therapy is a bridge, not a substitute.' },
      { q: 'Why can MESS not decide amputation?', a: 'It performs poorly prospectively with low specificity; LEAP showed similar outcomes after salvage and amputation.' },
      { q: 'Why do distal third tibial wounds usually need a free flap?', a: 'The bone is subcutaneous with little surrounding muscle for a local flap.' },
    ],
    checks: [
      'Primary survey completed before focusing on the limb',
      'Neurovascular status documented before and after manipulation',
      'Intravenous antibiotics given within one hour',
      'Tetanus prophylaxis given',
      'Gross contamination removed but no scrubbing or aggressive irrigation',
      'Wound photographed once, then covered with saline gauze and occlusive dressing',
      'Limb reduced and splinted, then neurovascular status reassessed',
      'Compartment syndrome monitoring instituted despite the open wound',
      'Radiographs including joint above and below',
      'Orthopaedics AND plastic surgery referred together',
      'Transfer to an orthoplastic centre considered early',
      'Debridement planned with a senior team rather than rushed overnight',
      'Definitive soft tissue coverage planned within 72 hours',
      'Amputation decision, if any, made multidisciplinarily and not on a score',
      'Analgesia plan discussed with the surgeon regarding regional blocks',
    ],
    related: ['open_fracture_classification_and_orthoplastic_management'],
  },

  {
    id: 'AS-CASE-0048',
    type: 'case',
    specialty: 'Surgery — Urology',
    teaching_case: true,
    title: 'CASE: Unable to Pass Urine for Twelve Hours with a Palpable Bladder',
    short: 'Case: acute urinary retention',
    summary:
      'A 71-year-old man with painful retention. Teaches how acute and chronic retention differ and why it matters, what post-obstructive diuresis is and why it can kill, and why a raised creatinine changes the whole management.',
    domains: ['urology', 'emergency_medicine', 'nephrology'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case urinary retention', 'acute urinary retention case', 'chronic retention',
      'post-obstructive diuresis', 'high pressure chronic retention', 'obstructive uropathy',
      'catheter case', 'benign prostatic hyperplasia', 'trial without catheter',
    ],
    terms: [
      'case', 'acute urinary retention', 'chronic urinary retention', 'obstructive uropathy',
      'post-obstructive diuresis', 'high pressure chronic retention', 'hydronephrosis',
      'benign prostatic hyperplasia', 'tamsulosin', 'finasteride', 'trial without catheter',
      'suprapubic catheter', 'urethral injury', 'phimosis', 'clot retention',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '71-year-old man unable to pass urine for 12 hours, in severe suprapubic pain, with a tender palpable bladder to the umbilicus. He has had a poor stream and nocturia for two years.',

      section_1_the_distinction_that_governs_everything: {
        acute_retention: 'SUDDEN, PAINFUL inability to pass urine, usually with a volume of 500 to 1,000 mL. THE PAIN IS THE DEFINING FEATURE — the bladder has not had time to stretch, so distension is agonising. Catheterisation gives immediate, dramatic relief.',
        chronic_retention: 'GRADUAL, PAINLESS accumulation over weeks to months, often with volumes of 1,500 mL or much more. The bladder wall stretches slowly and the patient adapts. THEY OFTEN PRESENT WITH OVERFLOW INCONTINENCE — "I keep dribbling" — WHICH IS FREQUENTLY MISDIAGNOSED AS AN INCONTINENCE PROBLEM AND TREATED WITH ANTICHOLINERGICS, WHICH MAKES IT WORSE. Nocturnal enuresis in an older man is chronic retention until proven otherwise.',
        acute_on_chronic: 'Painful decompensation on a background of chronic retention — the commonest presentation in practice.',
        the_split_that_actually_matters: {
          low_pressure_chronic_retention: 'A large residual with NORMAL renal function and NO hydronephrosis. The bladder accommodates at low pressure. Managed electively.',
          high_pressure_chronic_retention:
            'A large residual with RAISED BLADDER PRESSURE TRANSMITTED BACK UP THE URETERS, CAUSING BILATERAL HYDRONEPHROSIS AND RENAL IMPAIRMENT. Often with nocturnal enuresis. THIS IS A UROLOGICAL EMERGENCY — IT CAUSES PROGRESSIVE IRREVERSIBLE RENAL DAMAGE, AND IT IS THE GROUP MOST AT RISK OF POST-OBSTRUCTIVE DIURESIS AFTER DRAINAGE.',
          the_practical_rule: 'CHECK THE CREATININE IN EVERY PATIENT WITH RETENTION. IT SEPARATES A ROUTINE CATHETERISATION FROM AN ADMISSION.',
        },
      },

      section_2_clerking: {
        history: 'Twelve hours of increasing suprapubic pain and inability to void. For two years he has had a POOR STREAM, HESITANCY, TERMINAL DRIBBLING, INCOMPLETE EMPTYING, NOCTURIA three times a night and URGENCY. Three days ago he started a decongestant containing PSEUDOEPHEDRINE for a cold. He has been constipated for a week.',
        the_precipitants_that_are_in_the_history_if_you_ask: {
          drugs:
            'THE COMMONEST REVERSIBLE CAUSE AND THE ONE MOST OFTEN MISSED. ANTICHOLINERGICS (oxybutynin, antihistamines, tricyclics, antipsychotics, some antiemetics) reduce detrusor contraction. ALPHA AGONISTS — including PSEUDOEPHEDRINE in over-the-counter cold remedies — increase bladder neck tone. OPIOIDS. CALCIUM CHANNEL BLOCKERS. NSAIDs. ALWAYS ASK ABOUT OVER-THE-COUNTER MEDICINES BY NAME — HIS DECONGESTANT WILL NOT APPEAR ON ANY PRESCRIPTION LIST.',
          other_precipitants: 'CONSTIPATION, which is extremely common and easily treated · urinary tract infection · postoperative state and anaesthesia · alcohol excess · immobility · cold weather · and holding on for a prolonged period.',
        },
        the_causes_by_category: 'OBSTRUCTIVE — benign prostatic hyperplasia (commonest in men), prostate cancer, urethral stricture, PHIMOSIS or PARAPHIMOSIS, meatal stenosis, bladder or urethral stone, CLOT RETENTION after haematuria, faecal impaction, pelvic mass or gravid uterus in women. NEUROLOGICAL — CAUDA EQUINA SYNDROME (ask about back pain and saddle sensation in every retention), spinal cord compression, multiple sclerosis, diabetic autonomic neuropathy, Parkinson disease, post-stroke. INFECTIVE — prostatitis, urethritis, HERPES ZOSTER of the sacral dermatomes. MYOGENIC — chronic overdistension causing detrusor failure.',
        the_question_that_must_not_be_skipped: 'ASK ABOUT BACK PAIN, LEG SYMPTOMS AND SADDLE SENSATION IN EVERY PATIENT WITH RETENTION. CAUDA EQUINA SYNDROME PRESENTS WITH RETENTION, AND CATHETERISING THE PATIENT WITHOUT ASKING RELIEVES THE SYMPTOM AND MISSES THE DIAGNOSIS.',
        vitals: 'BP 156/88 mmHg — raised from pain. Pulse 96. Temperature 36.8. Distressed and restless.',
        examination: 'TENDER PALPABLE BLADDER, DULL TO PERCUSSION, ARISING FROM THE PELVIS — you cannot get below it, which distinguishes it from other abdominal masses. Examine the external genitalia for PHIMOSIS, PARAPHIMOSIS, meatal stenosis and a palpable urethral stone. DIGITAL RECTAL EXAMINATION for prostate size and character — smooth and enlarged in benign hyperplasia, HARD AND IRREGULAR WITH LOSS OF THE MEDIAN SULCUS in cancer — and for FAECAL IMPACTION and ANAL TONE. Neurological examination of the lower limbs and perineum where cauda equina is possible.',
        the_prostate_examination_caveat: 'PROSTATE SIZE ON RECTAL EXAMINATION CORRELATES POORLY WITH THE DEGREE OF OBSTRUCTION. A small prostate can obstruct badly and a large one may not obstruct at all. The examination is for TEXTURE and to detect cancer, not to measure obstruction.',
      },

      section_3_investigations: {
        bladder_scan: 'CONFIRMS RETENTION AND QUANTIFIES THE VOLUME BEFORE CATHETERISATION. It is quick, non-invasive and avoids catheterising a patient who is anuric from another cause rather than retaining — an important distinction, because an empty bladder in a patient not passing urine means renal failure or bilateral obstruction, not retention.',
        the_essential_blood_test: 'UREA, CREATININE AND ELECTROLYTES. A RAISED CREATININE INDICATES HIGH-PRESSURE RETENTION OR OBSTRUCTIVE UROPATHY AND CHANGES THE MANAGEMENT ENTIRELY — the patient is admitted, monitored for post-obstructive diuresis, and the catheter is NOT removed for a trial without catheter in the short term. CHECK THE POTASSIUM — obstructive uropathy causes hyperkalaemia.',
        other_bloods: 'Full blood count, CRP, glucose, bone profile. PSA — BUT NOTE THAT PSA IS SIGNIFICANTLY RAISED BY RETENTION, CATHETERISATION, URINARY INFECTION, PROSTATITIS, RECENT EJACULATION AND EVEN RECTAL EXAMINATION. A PSA TAKEN AT THE TIME OF ACUTE RETENTION IS UNINTERPRETABLE AND SHOULD BE DEFERRED FOR SEVERAL WEEKS. Taking it now generates a falsely alarming number and an unnecessary referral.',
        urine: 'Dipstick and culture from the catheter specimen. Note that dipstick is often positive simply from catheterisation and retention.',
        ultrasound: 'RENAL TRACT ULTRASOUND to assess for HYDRONEPHROSIS — mandatory if the creatinine is raised — and to assess the bladder and prostate.',
        further: 'Flow studies, urodynamics and cystoscopy as an outpatient where indicated. MRI SPINE URGENTLY if cauda equina is suspected.',
      },

      section_4_management: {
        a_catheterise: {
          the_relief: 'URETHRAL CATHETERISATION IS BOTH DIAGNOSTIC AND THERAPEUTIC AND PROVIDES DRAMATIC RELIEF. Use aseptic technique, adequate lubricating anaesthetic gel INSTILLED AND GIVEN TIME TO WORK — this is routinely rushed and is the difference between a tolerable and a traumatic procedure.',
          record_the_residual: 'MEASURE AND DOCUMENT THE VOLUME DRAINED. It defines acute versus chronic, guides the risk of post-obstructive diuresis, and is the number the urologist will ask for.',
          the_absolute_contraindication: 'DO NOT PASS A URETHRAL CATHETER IF THERE IS SUSPECTED URETHRAL INJURY — BLOOD AT THE MEATUS, A HIGH-RIDING PROSTATE, PERINEAL OR SCROTAL BRUISING, OR SIGNIFICANT PELVIC TRAUMA. It can convert a partial tear into a complete disruption. Seek urological help; a suprapubic catheter may be needed.',
          when_urethral_catheterisation_fails: 'Try a larger or a COUDÉ-TIP catheter, which negotiates a prostatic obstruction better. Then SEEK UROLOGICAL HELP — do not make repeated forceful attempts, which cause false passages, bleeding and strictures. SUPRAPUBIC CATHETERISATION is the alternative and requires a full bladder and ultrasound guidance where available. AVOID SUPRAPUBIC PUNCTURE where there is previous lower abdominal surgery, a possible bladder tumour or clot retention, without specialist input.',
          clot_retention: 'A DIFFERENT PROBLEM. It needs a LARGE-BORE THREE-WAY CATHETER, MANUAL BLADDER WASHOUT and often IRRIGATION. A standard catheter will simply block. Involve urology.',
        },
        b_post_obstructive_diuresis_which_is_the_thing_that_kills: {
          what_it_is: 'AFTER RELIEF OF CHRONIC OBSTRUCTION, THE KIDNEYS MAY PRODUCE VERY LARGE VOLUMES OF URINE — LITRES PER HOUR IN SEVERE CASES.',
          why_it_happens: 'PHYSIOLOGICAL COMPONENT: excretion of retained urea, sodium and water accumulated during obstruction — an appropriate response. PATHOLOGICAL COMPONENT: obstruction damages the tubules and the medullary concentrating gradient, so the kidney TEMPORARILY CANNOT CONCENTRATE URINE and continues to lose salt and water even after the excess has gone.',
          the_danger: 'PROFOUND HYPOVOLAEMIA, HYPOTENSION, ELECTROLYTE LOSS — SODIUM, POTASSIUM AND MAGNESIUM — AND CARDIOVASCULAR COLLAPSE. A PATIENT SENT HOME AFTER A "SUCCESSFUL" CATHETERISATION OF 2 LITRES CAN RETURN COLLAPSED.',
          who_is_at_risk: 'LARGE RESIDUAL VOLUMES — commonly taken as over 1,000 to 1,500 mL · RAISED CREATININE · HYDRONEPHROSIS · oedema and fluid overload · confusion.',
          the_management: 'ADMIT. MEASURE HOURLY URINE OUTPUT. WEIGH DAILY. MONITOR ELECTROLYTES AND CREATININE AT LEAST DAILY, MORE OFTEN IF BRISK. REPLACE FLUID — commonly replacing a proportion of the previous hour output, guided by clinical volume status rather than a rigid formula. Lying and standing blood pressure. THE DIURESIS IS USUALLY SELF-LIMITING OVER 24 TO 72 HOURS.',
          the_myth_worth_correcting:
            'SLOW, CLAMPED DECOMPRESSION OF THE BLADDER WAS TRADITIONALLY RECOMMENDED TO PREVENT DIURESIS AND HAEMATURIA. THE EVIDENCE DOES NOT SUPPORT IT — rapid complete drainage is safe, and clamping risks bladder discomfort and does not prevent post-obstructive diuresis, which is a renal rather than a bladder phenomenon. DRAIN THE BLADDER COMPLETELY AND MONITOR THE PATIENT.',
          decompression_haematuria: 'Mild haematuria after decompression of a chronically distended bladder is common, from rupture of small submucosal vessels as the bladder wall relaxes. It is usually self-limiting and does not require clamping.',
        },
        c_treat_the_precipitant: 'STOP THE OFFENDING DRUG — his pseudoephedrine. TREAT CONSTIPATION with laxatives, and consider manual evacuation for impaction. TREAT INFECTION. Reduce the faecal load and the drug burden before assuming the prostate is the whole story.',
        d_alpha_blocker_before_the_trial_without_catheter: {
          the_drug: 'TAMSULOSIN 400 micrograms daily, started at least 24 to 48 hours before the catheter is removed.',
          why: 'IT RELAXES PROSTATIC AND BLADDER NECK SMOOTH MUSCLE AND SIGNIFICANTLY INCREASES THE CHANCE OF A SUCCESSFUL TRIAL WITHOUT CATHETER. This is well established and is frequently forgotten, and the patient then fails the trial unnecessarily.',
          the_caution: 'POSTURAL HYPOTENSION AND DIZZINESS, particularly in the elderly and in those on antihypertensives — warn about it. Also INTRAOPERATIVE FLOPPY IRIS SYNDROME during cataract surgery — TELL THE PATIENT TO INFORM THEIR OPHTHALMOLOGIST THAT THEY TAKE IT, because it complicates the operation and the surgeon needs to know in advance.',
          finasteride: 'A 5-ALPHA-REDUCTASE INHIBITOR that shrinks the prostate over MONTHS, useful for larger glands and to reduce the risk of retention and surgery long term. IT ALSO ROUGHLY HALVES THE PSA, SO PSA RESULTS MUST BE INTERPRETED ACCORDINGLY — a "normal" PSA on finasteride may represent a doubled true value.',
        },
        e_the_trial_without_catheter_and_beyond: {
          for_uncomplicated_acute_retention: 'Catheter removed after a few days on an alpha blocker, with the precipitant treated. Success is more likely with smaller residual volumes, younger age and an identifiable precipitant.',
          if_it_fails: 'Re-catheterise and refer for urological assessment. Options include a long-term catheter, intermittent self-catheterisation (which is preferable to an indwelling catheter where the patient can manage it, because it carries a far lower infection rate), or surgery — TRANSURETHRAL RESECTION OF THE PROSTATE and its alternatives.',
          for_high_pressure_chronic_retention: 'DO NOT ATTEMPT AN EARLY TRIAL WITHOUT CATHETER. The bladder is decompensated and the kidneys need protecting. These patients need catheter drainage, monitoring of renal recovery, and urological planning.',
          catheter_care: 'Minimise catheter time. Educate on care. Note that asymptomatic bacteriuria in a catheterised patient should NOT be treated — it is universal and treating it selects resistance.',
        },
      },

      section_5_teaching_points: {
        bonus_1_check_the_creatinine_in_every_retention:
          'It separates a routine catheterisation from an admission. A raised creatinine means high-pressure chronic retention or obstructive uropathy, and that patient needs an ultrasound, admission, monitoring and no early trial without catheter.',
        bonus_2_post_obstructive_diuresis_can_kill_after_a_successful_procedure:
          'Damaged tubules and a washed-out medullary gradient mean the kidney cannot concentrate urine, so it keeps losing salt and water after the retained volume has gone. A patient sent home after a "successful" 2-litre drainage can return collapsed. Admit large volumes, measure hourly output, weigh daily and monitor electrolytes.',
        bonus_3_do_not_clamp_the_catheter:
          'Slow decompression was traditionally recommended and the evidence does not support it. Post-obstructive diuresis is a RENAL phenomenon, not a bladder one, and clamping does not prevent it. Drain completely and monitor the patient.',
        bonus_4_start_the_alpha_blocker_before_removing_the_catheter:
          'Tamsulosin started 24 to 48 hours beforehand significantly increases the success of a trial without catheter. Forgetting it means the patient fails unnecessarily and goes home with a catheter they did not need.',
        bonus_5_chronic_retention_presents_as_incontinence:
          'Painless overflow — "I keep dribbling", or nocturnal enuresis in an older man — is chronic retention until proven otherwise. It is frequently misdiagnosed as an incontinence problem and treated with anticholinergics, which makes it worse.',
        bonus_6_the_drug_history_holds_the_reversible_cause:
          'Anticholinergics, alpha agonists including over-the-counter pseudoephedrine, opioids and calcium channel blockers all precipitate retention. Ask about over-the-counter medicines BY NAME — his decongestant appears on no prescription list.',
        bonus_7_do_not_take_a_psa_during_acute_retention:
          'Retention, catheterisation, infection, prostatitis and rectal examination all raise it. A PSA taken now is uninterpretable and generates a falsely alarming number. Defer it several weeks — and remember finasteride roughly halves it.',
        trap_1: 'ASK ABOUT BACK PAIN AND SADDLE SENSATION IN EVERY RETENTION — cauda equina presents this way, and catheterising relieves the symptom while missing the diagnosis.',
        trap_2: 'Do NOT catheterise urethrally with blood at the meatus, a high-riding prostate or perineal bruising.',
        trap_3: 'Do not make repeated forceful attempts — false passages, bleeding and strictures follow. Ask for help.',
        trap_4: 'Clot retention needs a three-way catheter and washout — a standard catheter will block.',
        trap_5: 'Prostate size on rectal examination correlates poorly with the degree of obstruction.',
        trap_6: 'Warn about postural hypotension with tamsulosin, and tell the patient to inform their ophthalmologist because of floppy iris syndrome.',
        trap_7: 'Do not treat asymptomatic bacteriuria in a catheterised patient.',
        one_line_summary: 'Acute-on-chronic retention precipitated by an over-the-counter decongestant. Scan the bladder, catheterise and record the volume, check the creatinine, watch for post-obstructive diuresis — and start the alpha blocker before you plan to take the catheter out.',
      },
    },
    warnings: [
      'CHECK THE CREATININE IN EVERY RETENTION — it separates a routine catheterisation from an admission.',
      'POST-OBSTRUCTIVE DIURESIS CAN KILL AFTER A SUCCESSFUL PROCEDURE — admit large-volume retention and monitor hourly output, weight and electrolytes.',
      'DO NOT CLAMP THE CATHETER — the evidence does not support slow decompression, and diuresis is a renal not a bladder phenomenon.',
      'ASK ABOUT BACK PAIN AND SADDLE SENSATION IN EVERY RETENTION — cauda equina presents this way.',
      'DO NOT PASS A URETHRAL CATHETER with blood at the meatus, a high-riding prostate or perineal bruising.',
      'DO NOT make repeated forceful catheterisation attempts — false passages, bleeding and strictures follow. Ask for help.',
      'CLOT RETENTION needs a large-bore three-way catheter and washout — a standard catheter will block.',
      'CHRONIC RETENTION PRESENTS AS OVERFLOW INCONTINENCE and is often wrongly treated with anticholinergics.',
      'ASK ABOUT OVER-THE-COUNTER MEDICINES BY NAME — pseudoephedrine and antihistamines precipitate retention.',
      'DO NOT TAKE A PSA DURING ACUTE RETENTION — it is uninterpretable. Defer several weeks.',
      'FINASTERIDE ROUGHLY HALVES THE PSA — interpret results accordingly.',
      'START THE ALPHA BLOCKER 24 TO 48 HOURS BEFORE removing the catheter, or the trial fails unnecessarily.',
      'Warn about postural hypotension with tamsulosin, and about floppy iris syndrome before cataract surgery.',
      'DO NOT ATTEMPT AN EARLY TRIAL WITHOUT CATHETER in high-pressure chronic retention.',
      'DO NOT TREAT ASYMPTOMATIC BACTERIURIA in a catheterised patient.',
      'Prostate size on rectal examination correlates poorly with the degree of obstruction.',
      'Management here is a teaching example. Follow local urology guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Trial without catheter timing, fluid replacement regimens and surgical options vary between services.',
      'Retention in women and in children has a different differential and requires separate consideration.',
    ],
    cards: [
      { q: 'How do acute and chronic retention differ?', a: 'Acute is sudden and painful with 500 to 1,000 mL; chronic is gradual and painless with much larger volumes and overflow.' },
      { q: 'What is high-pressure chronic retention?', a: 'Large residual with pressure transmitted up the ureters causing hydronephrosis and renal impairment — an emergency.' },
      { q: 'Why check the creatinine?', a: 'A raised value indicates high-pressure retention or obstructive uropathy and changes management entirely.' },
      { q: 'What is post-obstructive diuresis?', a: 'Massive urine output after relief of chronic obstruction — physiological excretion plus tubular damage preventing concentration.' },
      { q: 'Should the catheter be clamped to decompress slowly?', a: 'No — the evidence does not support it, and diuresis is a renal not a bladder phenomenon.' },
      { q: 'Which drugs precipitate retention?', a: 'Anticholinergics, alpha agonists including pseudoephedrine, opioids, calcium channel blockers and NSAIDs.' },
      { q: 'Why start tamsulosin before removing the catheter?', a: 'Started 24 to 48 hours before, it significantly increases the success of a trial without catheter.' },
      { q: 'What must patients on tamsulosin tell their ophthalmologist?', a: 'That they take it — it causes intraoperative floppy iris syndrome during cataract surgery.' },
      { q: 'Why not take a PSA during acute retention?', a: 'Retention, catheterisation, infection and rectal examination all raise it — the result is uninterpretable.' },
      { q: 'How does finasteride affect the PSA?', a: 'It roughly halves it — a "normal" value on finasteride may represent a doubled true value.' },
      { q: 'When must urethral catheterisation be avoided?', a: 'Blood at the meatus, high-riding prostate, perineal bruising, or significant pelvic trauma.' },
      { q: 'What does painless dribbling or nocturnal enuresis in an older man suggest?', a: 'Chronic retention with overflow — often misdiagnosed and wrongly treated with anticholinergics.' },
    ],
    checks: [
      'Bladder scanned before catheterisation',
      'Back pain and saddle sensation asked about',
      'Urethral injury excluded before catheterisation',
      'Adequate anaesthetic gel instilled and given time to work',
      'Drained volume measured and documented',
      'Creatinine and potassium checked',
      'Renal tract ultrasound if creatinine raised',
      'PSA deferred, not taken during retention',
      'Precipitating drugs identified and stopped, including over-the-counter',
      'Constipation and infection treated',
      'Post-obstructive diuresis risk assessed and monitoring instituted for large volumes',
      'Hourly urine output, daily weight and electrolytes if at risk',
      'Catheter NOT clamped',
      'Alpha blocker started 24 to 48 hours before any trial without catheter',
      'Floppy iris warning given',
      'High-pressure chronic retention identified and early trial without catheter avoided',
    ],
    related: ['lower_urinary_tract_symptoms_and_bladder_outflow_obstruction'],
  },
];
