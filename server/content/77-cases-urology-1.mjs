/**
 * CASE SCENARIOS — Urology: testicular torsion and the infected obstructed kidney.
 *
 * Batch 5, part 1.
 */

export default [
  {
    id: 'AS-CASE-0041',
    type: 'case',
    specialty: 'Surgery — Urology',
    teaching_case: true,
    title: 'CASE: A 14-Year-Old with Sudden Testicular Pain at 3 a.m.',
    short: 'Case: testicular torsion',
    summary:
      'A boy woken by severe scrotal pain 4 hours ago. Teaches why no investigation may delay theatre, why the abdominal pain presentation is the one that gets missed, what the bell-clapper deformity is, and why both testes are fixed even though only one twisted.',
    domains: ['urology', 'emergency_medicine', 'paediatrics'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case testicular torsion', 'torsion of testis case', 'acute scrotum case',
      'bell clapper deformity', 'prehn sign', 'cremasteric reflex', 'blue dot sign',
      'torsion of appendix testis', 'orchidopexy', 'epididymo-orchitis versus torsion',
    ],
    terms: [
      'case', 'testicular torsion', 'acute scrotum', 'bell clapper deformity',
      'cremasteric reflex', 'prehn sign', 'blue dot sign', 'appendix testis',
      'hydatid of morgagni', 'orchidopexy', 'orchidectomy', 'epididymo-orchitis',
      'doppler ultrasound scrotum', 'manual detorsion', 'open book detorsion',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '14-year-old boy woken from sleep 4 hours ago by sudden severe pain in the left testicle, with vomiting. He is pale and cannot get comfortable. His mother brought him because he was also complaining of tummy ache.',

      section_1_the_governing_rule: {
        the_statement:
          'TESTICULAR TORSION IS A SURGICAL EMERGENCY WITH A HARD TIME LIMIT. THE TESTIS IS USUALLY SALVAGEABLE WITHIN ABOUT 6 HOURS, SALVAGE FALLS SHARPLY BETWEEN 6 AND 12 HOURS, AND AFTER 24 HOURS IT IS ALMOST ALWAYS LOST. HE IS AT 4 HOURS — INSIDE THE WINDOW, AND THE WINDOW IS CLOSING WHILE THE DIAGNOSIS IS BEING DISCUSSED.',
        the_second_rule:
          'IF TORSION IS SUSPECTED, THE PATIENT GOES TO THEATRE. NO INVESTIGATION MAY DELAY EXPLORATION. A NEGATIVE OR EQUIVOCAL ULTRASOUND DOES NOT EXCLUDE IT, AND WAITING FOR A SCAN OUT OF HOURS IS THE COMMONEST REASON TESTES ARE LOST. A NEGATIVE EXPLORATION IS AN ACCEPTABLE OUTCOME; A LOST TESTIS FROM DELAY IS NOT.',
        the_age_pattern: 'THERE ARE TWO PEAKS: THE NEONATAL PERIOD and PUBERTY, roughly ages 12 to 18, when rapid testicular growth increases the risk. BUT IT OCCURS AT ANY AGE, INCLUDING IN ADULTS, and assuming an older man with acute scrotal pain has epididymo-orchitis is a recognised error.',
      },

      section_2_clerking: {
        history:
          'Woken from sleep by sudden severe left testicular pain. He vomited twice. He also complains of lower abdominal pain. No urinary symptoms — no dysuria, frequency or discharge. No trauma. No fever. He has had two brief similar episodes in the last few months that settled within an hour and he told nobody.',
        the_features_that_point_at_torsion: {
          sudden_onset_often_waking_from_sleep: 'CLASSIC. Torsion frequently occurs at night or on waking, thought to relate to cremasteric contraction during sleep.',
          vomiting: 'Common with torsion and unusual with epididymo-orchitis — a useful discriminator that is often not asked about.',
          previous_self_resolving_episodes:
            'INTERMITTENT TORSION AND SPONTANEOUS DETORSION. THIS IS AN IMPORTANT AND UNDER-ASKED PIECE OF HISTORY. A boy with recurrent brief episodes of severe testicular pain has an anatomically predisposed testis and should be referred for ELECTIVE BILATERAL ORCHIDOPEXY — because the next episode may not untwist.',
          absence_of_urinary_symptoms: 'Dysuria, frequency and discharge point towards infection. Their ABSENCE supports torsion. But note their PRESENCE does not exclude torsion.',
        },
        the_presentation_that_gets_missed: {
          the_problem:
            'HE COMPLAINS OF ABDOMINAL PAIN. THE TESTIS DEVELOPS ON THE POSTERIOR ABDOMINAL WALL AND DESCENDS, TAKING ITS NERVE SUPPLY WITH IT — SO PAIN IS REFERRED TO THE T10 DERMATOME, WHICH IS THE PERIUMBILICAL AND LOWER ABDOMINAL REGION. A BOY CAN THEREFORE PRESENT WITH ABDOMINAL PAIN AND VOMITING AND NO COMPLAINT OF SCROTAL PAIN AT ALL.',
          the_rule_that_follows:
            'EXAMINE THE TESTES IN EVERY BOY AND MAN WITH ABDOMINAL PAIN. THIS IS THE SINGLE MOST IMPORTANT PREVENTABLE CAUSE OF A MISSED TORSION. Adolescents are also embarrassed and may not volunteer scrotal pain, and a clinician who does not ask and does not look will not find it. EXPLAIN WHY YOU ARE EXAMINING, OFFER A CHAPERONE, AND DO IT.',
        },
        vitals: 'BP 118/70 mmHg. Pulse 104. Temperature 36.8 — AFEBRILE, which argues against infection. Respiratory rate 18. Distressed and pale.',
        examination: {
          inspection: 'The LEFT hemiscrotum is swollen and erythematous. THE LEFT TESTIS LIES HIGHER THAN THE RIGHT AND HORIZONTALLY — a HIGH-RIDING, TRANSVERSELY ORIENTATED TESTIS, because the twisted spermatic cord shortens and rotates it.',
          palpation: 'EXQUISITELY TENDER — often too tender to examine properly, which is itself informative. The whole testis is tender rather than a localised area.',
          the_cremasteric_reflex: {
            how_to_elicit: 'STROKE OR LIGHTLY PINCH THE SKIN OF THE UPPER MEDIAL THIGH. The normal response is CONTRACTION OF THE CREMASTER MUSCLE, ELEVATING THE IPSILATERAL TESTIS. The afferent and efferent limbs are both in the GENITOFEMORAL NERVE (L1-L2).',
            in_torsion: 'IT IS TYPICALLY ABSENT on the affected side — the most useful single physical sign.',
            the_honest_caveat: 'IT IS NOT INFALLIBLE. It is normally absent in some boys under about 30 months and can be present in a proportion of confirmed torsions. A PRESENT CREMASTERIC REFLEX DOES NOT EXCLUDE TORSION — this must be stated plainly, because a present reflex has been used to justify discharge.',
          },
          prehn_sign: 'ELEVATING THE TESTIS RELIEVES PAIN IN EPIDIDYMO-ORCHITIS AND DOES NOT RELIEVE (OR WORSENS) PAIN IN TORSION. IT IS UNRELIABLE AND MUST NOT BE USED TO EXCLUDE TORSION. It is worth knowing because it is asked about, not because it decides management.',
          examine_the_other_side: 'ALWAYS EXAMINE BOTH TESTES AND COMPARE. Also examine the abdomen and the groin for a hernia, and check the lie of the contralateral testis, since the anatomical predisposition is usually bilateral.',
        },
      },

      section_3_mechanism: {
        what_torsion_is: 'THE SPERMATIC CORD TWISTS, OCCLUDING FIRST THE THIN-WALLED VENOUS DRAINAGE AND THEN THE ARTERIAL SUPPLY.',
        the_sequence: [
          '1. Venous occlusion causes CONGESTION and SWELLING.',
          '2. Swelling within the tight tunica albuginea further raises pressure.',
          '3. ARTERIAL INFLOW FAILS, causing ischaemia.',
          '4. INFARCTION AND NECROSIS follow. The germinal epithelium is the most sensitive tissue and is damaged earliest.',
        ],
        the_degree_matters: 'THE NUMBER OF TWISTS DETERMINES THE SPEED. A 180-degree twist may cause partial obstruction with slower damage; 360 degrees or more causes complete arterial occlusion and rapid infarction. THIS IS WHY THE 6-HOUR RULE IS A GUIDE, NOT A GUARANTEE — a severely twisted testis can be lost sooner, and a partially twisted one may survive longer.',
        the_bell_clapper_deformity: {
          the_normal_anatomy: 'The tunica vaginalis normally covers the anterior and lateral surfaces of the testis, leaving the POSTERIOR surface attached to the scrotal wall. That posterior attachment ANCHORS the testis and prevents it rotating.',
          the_abnormality:
            'IN THE BELL-CLAPPER DEFORMITY, THE TUNICA VAGINALIS INSERTS HIGH ON THE SPERMATIC CORD AND COMPLETELY ENCIRCLES THE TESTIS, INCLUDING POSTERIORLY. THE TESTIS THEREFORE HANGS FREELY WITHIN THE TUNICA LIKE THE CLAPPER INSIDE A BELL, AND CAN ROTATE ON ITS CORD.',
          the_consequence_that_determines_the_operation:
            'THE DEFORMITY IS USUALLY BILATERAL AND CONGENITAL. THAT IS WHY BOTH TESTES ARE FIXED AT OPERATION EVEN THOUGH ONLY ONE TWISTED — THE OTHER SIDE IS ANATOMICALLY PREDISPOSED AND WILL TORT IN TIME. FIXING ONLY THE AFFECTED SIDE LEAVES THE PATIENT AT RISK OF LOSING HIS REMAINING TESTIS, WHICH IS A FAR WORSE OUTCOME.',
        },
        extravaginal_torsion: 'IN NEONATES, THE WHOLE CORD AND TUNICA TWIST TOGETHER (EXTRAVAGINAL), because the tunica is not yet adherent to the scrotal wall. It often occurs before or around birth, presenting as a firm, non-tender, discoloured scrotal mass, and the testis is usually already lost. Management differs and is a paediatric urology decision.',
        the_immunological_point: 'The blood-testis barrier normally sequesters germ cells from the immune system. Prolonged ischaemia and infarction can expose these antigens, and ANTISPERM ANTIBODIES may develop, potentially affecting fertility in the CONTRALATERAL testis. It is one of several reasons prompt salvage matters beyond the affected side.',
      },

      section_4_differentials: {
        one_testicular_torsion: 'MUST BE ASSUMED. Supporting: age, sudden onset waking from sleep, vomiting, high-riding transverse testis, absent cremasteric reflex, afebrile, no urinary symptoms, previous self-resolving episodes.',
        two_torsion_of_the_appendix_testis: {
          what_it_is: 'Torsion of a small embryological remnant on the upper pole — the HYDATID OF MORGAGNI, a Müllerian duct remnant.',
          the_features: 'Commonest in boys aged 7 to 12. Pain is usually LESS SEVERE and more GRADUAL, localised to the UPPER POLE, with a tender nodule there. THE BLUE DOT SIGN — a small blue or dark spot visible through the scrotal skin at the upper pole, representing the infarcted appendage — is pathognomonic when present, though it is present in a minority.',
          the_management: 'It is SELF-LIMITING and treated with analgesia. BUT IT CANNOT BE RELIABLY DISTINGUISHED FROM TORSION WITHOUT EXPLORATION IN MANY CASES, AND WHERE THERE IS ANY DOUBT THE PATIENT IS EXPLORED.',
        },
        three_epididymo_orchitis: {
          the_features: 'GRADUAL onset over days, FEVER, DYSURIA, urethral discharge, and often a history of urinary tract infection or sexual exposure. The epididymis is tender, sometimes separately palpable from the testis early on. Prehn sign may be positive. Raised inflammatory markers and pyuria.',
          the_organisms: 'In sexually active young men, CHLAMYDIA TRACHOMATIS and NEISSERIA GONORRHOEAE — requiring partner notification and sexual health referral. In older men and those with urinary tract abnormalities, coliforms such as Escherichia coli.',
          the_warning: 'IN A TEENAGER, DO NOT DIAGNOSE EPIDIDYMO-ORCHITIS WITHOUT SERIOUSLY CONSIDERING TORSION. It is the diagnosis most often attached to a torted testis, and the antibiotics are given while the testis dies.',
        },
        four_incarcerated_inguinal_hernia: 'A groin swelling extending into the scrotum, with bowel obstruction if strangulated. Examine the groin.',
        five_trauma_and_testicular_rupture: 'History of injury; ultrasound assesses the tunica albuginea and haematoma. Requires exploration if ruptured.',
        six_idiopathic_scrotal_oedema: 'Painless or mildly uncomfortable erythema and swelling extending beyond the scrotum onto the perineum and groin, in young boys. Self-limiting.',
        seven_henoch_schonlein_purpura: 'Can cause scrotal pain and swelling in children, with the characteristic rash on the buttocks and legs, abdominal pain and joint involvement.',
        eight_testicular_tumour: 'Usually a PAINLESS lump, but can present with acute pain if there is haemorrhage into the tumour. Examine and image after the acute episode where the history suggests it.',
      },

      section_5_investigations: {
        the_principle: 'NONE OF THESE MAY DELAY THEATRE. THEY ARE FOR EQUIVOCAL CASES OR FOR ALTERNATIVE DIAGNOSES, NOT FOR CONFIRMING A CLINICAL SUSPICION OF TORSION.',
        urine_dipstick_and_culture: 'A positive nitrite and leucocytes support infection. NOTE THAT A NEGATIVE DIPSTICK IS COMMON IN TORSION AND SUPPORTS IT, BUT A POSITIVE ONE DOES NOT EXCLUDE TORSION — the two can coexist and pyuria has other causes.',
        colour_doppler_ultrasound: {
          what_it_shows: 'ABSENT OR REDUCED ARTERIAL FLOW in the affected testis, sometimes with the WHIRLPOOL SIGN of the twisted cord. It also identifies alternative diagnoses — abscess, hernia, tumour, appendix testis torsion.',
          the_limitations_that_must_be_understood:
            'IT IS OPERATOR-DEPENDENT AND FREQUENTLY UNAVAILABLE OUT OF HOURS, WHICH IS WHEN TORSION PRESENTS. FLOW MAY BE PRESENT IN EARLY OR PARTIAL TORSION, AND IN INTERMITTENT TORSION THAT HAS SPONTANEOUSLY DETORTED — INDEED SUCH A TESTIS MAY SHOW INCREASED FLOW FROM REACTIVE HYPERAEMIA. A SCAN SHOWING NORMAL FLOW THEREFORE DOES NOT EXCLUDE TORSION.',
          where_it_fits: 'Useful where the clinical picture genuinely points elsewhere and there is time. NEVER as a gatekeeper to exploration in a convincing case.',
        },
        scoring_systems: 'The TWIST score (Testicular Workup for Ischemia and Suspected Torsion) uses testicular swelling, hard testis, absent cremasteric reflex, nausea or vomiting, and high-riding testis. HIGH SCORES SUPPORT PROCEEDING DIRECTLY TO SURGERY; low scores may support observation or imaging. IT IS AN AID TO CONFIDENCE, NOT A LICENCE TO WAIT.',
        bloods: 'Full blood count and CRP if infection is genuinely being considered. Group and save and preoperative bloods for theatre. THEY DO NOT DIAGNOSE OR EXCLUDE TORSION.',
      },

      section_6_management: {
        a_immediate: 'NIL BY MOUTH. Intravenous access and bloods. STRONG ANALGESIA — this is one of the most painful conditions and boys are frequently under-analgesed out of misplaced caution; give an opioid. Antiemetic. CALL THE UROLOGIST OR ON-CALL SURGEON IMMEDIATELY AND ALERT THEATRE. CONSENT for scrotal exploration, BILATERAL FIXATION, AND POSSIBLE ORCHIDECTOMY.',
        the_consent_conversation: {
          why_it_needs_care: 'YOU MUST CONSENT FOR THE POSSIBILITY OF ORCHIDECTOMY, and for FIXATION OF THE UNAFFECTED SIDE. Both need explaining to a frightened adolescent and their parent under time pressure.',
          what_to_say: 'Explain that the testis is twisted and losing its blood supply; that the operation untwists it and stitches BOTH testes in place so it cannot happen again; that if the testis is already dead it must be removed because a dead testis can harm the other one and causes ongoing problems; and that ONE HEALTHY TESTIS IS SUFFICIENT FOR NORMAL HORMONE PRODUCTION AND FERTILITY IN THE GREAT MAJORITY OF MEN. That last sentence matters enormously to a 14-year-old and is often omitted.',
        },
        b_manual_detorsion: {
          what_it_is: 'A TEMPORISING MANOEUVRE where surgery will be delayed. The testis typically twists MEDIALLY (inwards), so detorsion is usually performed by rotating the testis OUTWARDS — the "OPEN BOOK" manoeuvre, as if opening a book, with the patient facing you: the left testis is rotated clockwise and the right anticlockwise, as seen by the examiner.',
          the_endpoint: 'SUCCESS IS SUGGESTED BY IMMEDIATE PAIN RELIEF AND THE TESTIS RETURNING TO A NORMAL VERTICAL LIE. MORE THAN ONE FULL ROTATION MAY BE NEEDED, and if pain worsens, try the opposite direction — a third of torsions twist laterally.',
          the_essential_caveat:
            'SUCCESSFUL MANUAL DETORSION DOES NOT REMOVE THE NEED FOR SURGERY. IT BUYS TIME. THE PATIENT STILL REQUIRES EXPLORATION AND BILATERAL FIXATION, BECAUSE DETORSION MAY BE INCOMPLETE AND THE ANATOMICAL PREDISPOSITION REMAINS. Sending a comfortable boy home after manual detorsion is a serious error.',
        },
        c_scrotal_exploration: {
          the_operation: 'Through a scrotal or midline raphe incision, the testis is delivered, DETORTED, AND WRAPPED IN WARM SALINE SWABS FOR SEVERAL MINUTES TO ASSESS RECOVERY. If it pinks up and bleeds when the tunica is incised, it is viable and is FIXED. If it remains black and does not recover, it is REMOVED.',
          bilateral_fixation: 'THE CONTRALATERAL TESTIS IS FIXED AT THE SAME OPERATION, ALWAYS, because the bell-clapper deformity is bilateral. Fixation is by three-point suture fixation to the dartos, or by dartos pouch technique.',
          orchidectomy: 'A NECROTIC TESTIS MUST BE REMOVED. Leaving it risks infection, chronic pain, and exposure of germ cell antigens that may generate antisperm antibodies affecting the other side. Offer a PROSTHESIS — usually at a later date — and raise it, because young men care about it and rarely ask.',
        },
        d_after_the_operation: {
          if_the_testis_was_saved: 'Follow-up to assess atrophy, which can occur despite apparently successful salvage. Reassure about fertility and hormone function.',
          if_it_was_removed: 'Explain clearly. Discuss the prosthesis. Offer psychological support — the loss matters to an adolescent far more than adults often assume. Advise SELF-EXAMINATION OF THE REMAINING TESTIS and immediate presentation with any pain, because he now has only one.',
          the_fertility_conversation: 'One healthy testis produces adequate testosterone and sperm for normal puberty and fertility in the great majority. Say this explicitly and early.',
          safeguarding_and_delay: 'IF THERE WAS A SIGNIFICANT DELAY IN PRESENTATION OR REFERRAL, EXAMINE WHY. Was he embarrassed? Was he seen and reassured elsewhere? Was a scan awaited? These are learning points for the service, and the honest answer usually improves the next boy pathway.',
        },
      },

      section_7_teaching_points: {
        bonus_1_examine_the_testes_in_every_boy_with_abdominal_pain:
          'The testis develops on the posterior abdominal wall and descends with its T10 nerve supply, so pain refers to the periumbilical region. A boy can present with abdominal pain and vomiting and never mention his scrotum — especially an embarrassed adolescent. This is the single most preventable cause of a missed torsion.',
        bonus_2_no_investigation_may_delay_theatre:
          'A normal Doppler does not exclude torsion — flow can be present in early, partial or recently detorted torsion, sometimes with reactive hyperaemia. Waiting for an out-of-hours scan is the commonest reason testes are lost. A negative exploration is acceptable; a lost testis from delay is not.',
        bonus_3_the_bell_clapper_deformity_is_bilateral:
          'The tunica vaginalis inserts high and encircles the testis, so it hangs freely like a clapper in a bell. It is congenital and usually bilateral — which is why BOTH testes are fixed even though only one twisted. Fixing one side leaves the boy at risk of losing his only remaining testis.',
        bonus_4_a_present_cremasteric_reflex_does_not_exclude_torsion:
          'It is the most useful single sign when absent, but it is normally absent in some young boys and present in a proportion of confirmed torsions. It has been used to justify discharge, and it should not be.',
        bonus_5_manual_detorsion_buys_time_and_nothing_more:
          'Open-book rotation outwards can relieve ischaemia, but detorsion may be incomplete and the anatomical predisposition remains. The patient still needs exploration and bilateral fixation. Sending a comfortable boy home is a serious error.',
        bonus_6_ask_about_previous_episodes:
          'Recurrent brief episodes of severe testicular pain that settled are INTERMITTENT TORSION. That boy needs elective bilateral orchidopexy, because the next episode may not untwist. It is a question nobody asks.',
        trap_1: 'The time window is 6 hours for reliable salvage, falling sharply to 12, almost never after 24 — and the number of twists means a severely torted testis can be lost sooner.',
        trap_2: 'Do NOT diagnose epididymo-orchitis in a teenager without seriously considering torsion — it is the label most often attached to a torted testis.',
        trap_3: 'The blue dot sign indicates a torted appendix testis, but it is present in a minority, and doubt means exploration.',
        trap_4: 'Prehn sign is unreliable and must not be used to exclude torsion.',
        trap_5: 'Give strong analgesia — boys are systematically under-analgesed here.',
        trap_6: 'Consent explicitly for orchidectomy AND bilateral fixation, and say that one healthy testis is enough for normal hormones and fertility.',
        trap_7: 'Torsion occurs at any age including in adults and neonates — the two peaks are a pattern, not a rule.',
        one_line_summary: 'Testicular torsion at 4 hours. Examine the testes of every boy with abdominal pain, do not wait for a scan, give proper analgesia, consent for orchidectomy and bilateral fixation — and tell him one testis is enough.',
      },
    },
    warnings: [
      'IF TORSION IS SUSPECTED, GO TO THEATRE — no investigation may delay exploration.',
      'A NORMAL DOPPLER ULTRASOUND DOES NOT EXCLUDE TORSION — flow can be present in early, partial or recently detorted torsion.',
      'THE SALVAGE WINDOW IS ABOUT 6 HOURS, falling sharply to 12, and almost never salvageable after 24.',
      'EXAMINE THE TESTES IN EVERY BOY AND MAN WITH ABDOMINAL PAIN — referred T10 pain means the scrotum may never be mentioned.',
      'A PRESENT CREMASTERIC REFLEX DOES NOT EXCLUDE TORSION.',
      'PREHN SIGN IS UNRELIABLE and must not be used to exclude torsion.',
      'DO NOT diagnose epididymo-orchitis in a teenager without seriously considering torsion.',
      'FIX BOTH TESTES — the bell-clapper deformity is bilateral and congenital.',
      'MANUAL DETORSION BUYS TIME ONLY — the patient still needs exploration and bilateral fixation.',
      'ASK ABOUT PREVIOUS SELF-RESOLVING EPISODES — intermittent torsion needs elective bilateral orchidopexy.',
      'GIVE STRONG ANALGESIA — this is severely painful and boys are systematically under-treated.',
      'CONSENT explicitly for orchidectomy and bilateral fixation, and state that one healthy testis is sufficient for normal hormones and fertility.',
      'Torsion occurs at ANY age, including neonates and adults — the two peaks are a pattern, not a rule.',
      'Management here is a teaching example. Follow local urology guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Imaging availability and scoring system use vary; the surgical threshold should remain low regardless.',
      'Neonatal (extravaginal) torsion differs in mechanism, prognosis and management and requires paediatric urology input.',
    ],
    cards: [
      { q: 'What is the salvage window?', a: 'About 6 hours for reliable salvage, falling sharply to 12, almost never after 24.' },
      { q: 'Why can torsion present as abdominal pain?', a: 'The testis descends with its T10 nerve supply, so pain refers to the periumbilical region.' },
      { q: 'Does a normal Doppler exclude torsion?', a: 'No — flow can be present in early, partial or recently detorted torsion, sometimes with reactive hyperaemia.' },
      { q: 'What is the bell-clapper deformity?', a: 'The tunica vaginalis inserts high and encircles the testis, which hangs freely and can rotate — usually bilateral.' },
      { q: 'Why are both testes fixed?', a: 'The deformity is congenital and bilateral, so the other side will torsion in time.' },
      { q: 'How is the cremasteric reflex elicited and interpreted?', a: 'Stroke the upper medial thigh — absence supports torsion, but its presence does NOT exclude it.' },
      { q: 'What is the blue dot sign?', a: 'A dark spot at the upper pole from an infarcted appendix testis — pathognomonic but present in a minority.' },
      { q: 'Describe manual detorsion.', a: 'Open-book rotation outwards — left clockwise, right anticlockwise as seen by the examiner. It buys time only.' },
      { q: 'Does successful manual detorsion avoid surgery?', a: 'No — detorsion may be incomplete and the anatomical predisposition remains. Exploration and bilateral fixation are still required.' },
      { q: 'How does epididymo-orchitis differ?', a: 'Gradual onset over days, fever, dysuria and discharge, with raised inflammatory markers and pyuria.' },
      { q: 'What does a history of previous brief episodes mean?', a: 'Intermittent torsion — the boy needs elective bilateral orchidopexy.' },
      { q: 'Why must a necrotic testis be removed?', a: 'Risk of infection, chronic pain, and exposure of germ cell antigens generating antisperm antibodies affecting the other side.' },
    ],
    checks: [
      'Testes examined in a boy presenting with abdominal pain',
      'Chaperone offered and examination explained',
      'Time of onset established and documented',
      'Previous self-resolving episodes asked about',
      'Both testes examined and compared',
      'Cremasteric reflex tested but not used to exclude',
      'Strong analgesia given',
      'Urology or on-call surgeon called immediately',
      'Theatre alerted; patient nil by mouth',
      'Imaging NOT allowed to delay exploration',
      'Consent obtained for exploration, bilateral fixation and possible orchidectomy',
      'Manual detorsion considered only as a temporising measure',
      'Fertility and hormone reassurance given explicitly',
      'Prosthesis discussed if orchidectomy performed',
      'Reason for any delay in presentation or referral examined',
    ],
    related: ['acute_scrotum_differential_and_time_critical_decisions'],
  },

  {
    id: 'AS-CASE-0042',
    type: 'case',
    specialty: 'Surgery — Urology',
    teaching_case: true,
    title: 'CASE: Renal Colic with a Fever of 38.9 — The Obstructed Infected Kidney',
    short: 'Case: infected obstructed kidney',
    summary:
      'A 52-year-old with ureteric colic, fever and hypotension. Teaches why a stone plus a fever is a urological emergency rather than a painkiller problem, why antibiotics alone fail, and why the stone is not treated at the same sitting.',
    domains: ['urology', 'emergency_medicine', 'nephrology', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case renal colic', 'infected obstructed kidney case', 'pyonephrosis case',
      'obstructed infected system', 'nephrostomy case', 'ureteric stent',
      'ct kub', 'urosepsis case', 'staghorn calculus',
    ],
    terms: [
      'case', 'renal colic', 'ureteric colic', 'urolithiasis', 'obstructed infected kidney',
      'pyonephrosis', 'urosepsis', 'nephrostomy', 'ureteric stent', 'jj stent',
      'ct kub', 'staghorn calculus', 'struvite', 'calcium oxalate', 'uric acid stone',
      'medical expulsive therapy', 'tamsulosin', 'eswl', 'ureteroscopy',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '52-year-old woman with 12 hours of severe left loin pain radiating to the groin, now with a temperature of 38.9, rigors, and a blood pressure of 88/52. CT shows a 9 mm stone in the left mid-ureter with hydronephrosis.',

      section_1_the_rule_that_defines_the_case: {
        the_statement:
          'AN OBSTRUCTED KIDNEY THAT IS ALSO INFECTED IS A UROLOGICAL EMERGENCY REQUIRING DRAINAGE WITHIN HOURS. IT IS NOT A PAIN PROBLEM WITH A COMPLICATING INFECTION. THE COMBINATION OF OBSTRUCTION AND INFECTION PRODUCES A CLOSED, PRESSURISED, INFECTED CAVITY — AND, EXACTLY AS IN CHOLANGITIS OR AN UNDRAINED ABSCESS, ANTIBIOTICS ALONE CANNOT TREAT IT.',
        the_two_things_that_must_be_asked_of_every_renal_colic_patient: {
          question_1: 'IS THERE A FEVER OR ANY SIGN OF INFECTION? A stone plus sepsis needs drainage today.',
          question_2: 'IS THIS A SINGLE OR SOLITARY FUNCTIONING KIDNEY, OR IS THERE BILATERAL OBSTRUCTION, OR ACUTE KIDNEY INJURY? Obstruction of a solitary kidney is ANURIC RENAL FAILURE and is equally urgent.',
          why: 'MOST RENAL COLIC IS MANAGED WITH ANALGESIA AND EXPECTANT TREATMENT. THESE TWO QUESTIONS IDENTIFY THE MINORITY WHO NEED AN INTERVENTION TONIGHT, AND THEY ARE ANSWERED WITH A THERMOMETER AND A CREATININE.',
        },
      },

      section_2_clerking: {
        history:
          'Sudden severe left loin pain 12 hours ago, coming in waves, radiating round to the left groin and labia. She could not lie still and paced the room. She vomited three times. Since this morning she has had rigors and feels "shivery and confused". She passed a stone 3 years ago. Reduced urine output today.',
        the_character_of_the_pain: 'LOIN TO GROIN, COLICKY, SEVERE, AND THE PATIENT CANNOT KEEP STILL. THE RESTLESSNESS IS DIAGNOSTICALLY USEFUL: A PATIENT WITH PERITONITIS LIES ABSOLUTELY STILL BECAUSE MOVEMENT HURTS; A PATIENT WITH COLIC WRITHES AND PACES BECAUSE NO POSITION HELPS. That distinction is visible from the doorway.',
        why_the_pain_radiates_where_it_does: 'The pain follows the course of the ureter and the referred distribution of its nerve supply (T11 to L2). A stone at the PELVI-URETERIC JUNCTION gives flank pain; in the MID-URETER it refers to the iliac fossa and groin; and at the VESICO-URETERIC JUNCTION it causes suprapubic pain with URINARY FREQUENCY, URGENCY AND PAIN REFERRED TO THE TIP OF THE PENIS OR THE LABIA — which is regularly misdiagnosed as a urinary tract infection.',
        the_features_of_sepsis: 'RIGORS · fever · confusion · hypotension · tachycardia. RIGORS — true shaking chills — indicate BACTERAEMIA and are a significant symptom that should never be recorded as "felt cold".',
        past_history_and_risk_factors: 'Previous stone (recurrence risk is substantial). ASK ABOUT: dehydration and low fluid intake · hot climate or occupation · high salt, animal protein or oxalate intake · gout and hyperuricaemia · hyperparathyroidism and hypercalcaemia · inflammatory bowel disease, malabsorption and bowel resection (enteric hyperoxaluria) · recurrent urinary infection · anatomical abnormalities · immobilisation · and drugs including topiramate, indinavir and excess vitamin C or calcium supplements. FAMILY HISTORY is relevant, particularly for cystinuria and primary hyperoxaluria.',
        vitals: 'BP 88/52 mmHg. Pulse 122. Respiratory rate 26. Temperature 38.9. Saturation 95%. Lactate 3.6 mmol/L. Confused, GCS 14. Urine output minimal.',
        examination: 'Restless, sweating. LEFT RENAL ANGLE TENDERNESS. Abdomen soft with mild left-sided tenderness, no peritonism. Cool peripheries with prolonged capillary refill. NOTE: SIGNIFICANT PERITONISM SHOULD MAKE YOU RECONSIDER — renal colic does not cause a rigid abdomen, and the great mimic is a leaking abdominal aortic aneurysm.',
      },

      section_3_the_differential_that_kills: {
        ruptured_or_leaking_abdominal_aortic_aneurysm: {
          why_it_is_first: 'AN AORTIC ANEURYSM LEAKING INTO THE RETROPERITONEUM CAUSES SEVERE LOIN AND FLANK PAIN RADIATING TO THE GROIN, WITH HAEMATURIA IN SOME PATIENTS — IT MIMICS RENAL COLIC EXACTLY.',
          the_rule:
            'A FIRST PRESENTATION OF "RENAL COLIC" IN A PATIENT OVER 50, PARTICULARLY WITH HYPOTENSION OR VASCULAR RISK FACTORS, IS A LEAKING ANEURYSM UNTIL PROVEN OTHERWISE. Examine for a pulsatile expansile mass and check the femoral pulses. THIS MISDIAGNOSIS IS WELL DOCUMENTED AND FATAL, and it is the reason that "first stone over 50" should always prompt the thought.',
        },
        other_differentials: 'PYELONEPHRITIS without obstruction · ECTOPIC PREGNANCY and ovarian torsion — DO A PREGNANCY TEST · appendicitis, particularly with a retrocaecal appendix · diverticulitis · testicular torsion referring to the loin · musculoskeletal pain · renal infarction, in atrial fibrillation, with a very high LDH · papillary necrosis in diabetes, sickle cell disease and analgesic nephropathy · and herpes zoster before the rash appears.',
      },

      section_4_investigations: {
        ct_kub: {
          what_it_is: 'NON-CONTRAST CT OF THE KIDNEYS, URETERS AND BLADDER — the reference standard, with sensitivity and specificity above 95%.',
          why_non_contrast: 'STONES ARE DENSE AND VISIBLE WITHOUT CONTRAST, AND CONTRAST IN THE COLLECTING SYSTEM WOULD OBSCURE THEM. It also identifies alternative diagnoses, including the aneurysm.',
          what_it_tells_you: 'STONE SIZE AND POSITION, which predict spontaneous passage; the DEGREE OF HYDRONEPHROSIS; PERINEPHRIC STRANDING; and STONE DENSITY IN HOUNSFIELD UNITS, which predicts response to shockwave treatment. Note that INDINAVIR STONES ARE RADIOLUCENT EVEN ON CT — a rare but genuine exception.',
          in_pregnancy: 'ULTRASOUND FIRST, THEN MRI IF NEEDED. Avoid CT.',
        },
        ultrasound: 'Useful in pregnancy, in children, and for follow-up. Detects hydronephrosis and renal stones well but is POOR AT VISUALISING MID-URETERIC STONES because of overlying bowel gas. A dilated system with no visible stone is still highly suggestive.',
        urine: 'DIPSTICK — HAEMATURIA IS PRESENT IN ROUGHLY 85%, SO ITS ABSENCE DOES NOT EXCLUDE A STONE, and this is a common misconception. Nitrites and leucocytes suggest infection. SEND A CULTURE BEFORE ANTIBIOTICS. Note that in complete obstruction the infected urine may not reach the bladder, so A CLEAN BLADDER SPECIMEN DOES NOT EXCLUDE INFECTION ABOVE THE OBSTRUCTION — the definitive sample is the one obtained at drainage.',
        bloods: 'Full blood count · CRP · UREA, CREATININE AND ELECTROLYTES for acute kidney injury · CALCIUM, PHOSPHATE AND URATE, which begin the metabolic workup · LACTATE · CLOTTING, since an intervention is coming · BLOOD CULTURES BEFORE ANTIBIOTICS · GROUP AND SAVE · and a PREGNANCY TEST.',
        the_metabolic_workup_for_later: 'STONE ANALYSIS if one is retrieved or passed — it directs prevention and is frequently discarded. In recurrent or high-risk stone formers, a 24-hour urine collection for volume, calcium, oxalate, citrate, urate, sodium and pH, plus parathyroid hormone if calcium is raised.',
      },

      section_5_management: {
        a_resuscitation_and_antibiotics: 'ABCDE. Oxygen. Two cannulae. BALANCED CRYSTALLOID with reassessment. BLOOD CULTURES THEN BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS covering Gram-negatives per local policy. Catheterise and monitor urine output. Vasopressors and critical care if hypotension persists. THE SEPSIS SIX WITHIN THE HOUR.',
        b_analgesia: {
          first_line: 'A NON-STEROIDAL ANTI-INFLAMMATORY DRUG — for example DICLOFENAC 75 mg intramuscularly or 100 mg per rectum — IS MORE EFFECTIVE THAN AN OPIOID FOR URETERIC COLIC and is first line.',
          why_it_works_better: 'NSAIDs reduce GLOMERULAR FILTRATION AND THEREFORE URINE PRODUCTION AND RENAL PELVIC PRESSURE, and they reduce ureteric smooth muscle spasm and the prostaglandin-mediated oedema at the stone. They treat the MECHANISM of the pain, not just the perception of it.',
          the_caution_that_applies_here: 'BUT NSAIDs ARE NEPHROTOXIC AND MUST BE USED WITH CARE — OR AVOIDED — IN ACUTE KIDNEY INJURY, SEPSIS, HYPOVOLAEMIA AND EXISTING RENAL IMPAIRMENT. SHE IS SEPTIC, HYPOTENSIVE AND OLIGURIC, SO AN NSAID IS THE WRONG CHOICE TONIGHT. Use an opioid and paracetamol instead, and reconsider the NSAID once she is resuscitated and renal function is known.',
          antiemetic: 'Give one — vomiting is near-universal.',
        },
        c_drainage_which_is_the_definitive_treatment: {
          the_rule: 'THE OBSTRUCTED INFECTED KIDNEY MUST BE DECOMPRESSED URGENTLY — WITHIN HOURS. ANTIBIOTICS ALONE WILL NOT CLEAR PUS UNDER PRESSURE IN A CLOSED SPACE, AND PENETRATION INTO AN OBSTRUCTED SYSTEM IS POOR. DELAY IS DIRECTLY ASSOCIATED WITH MORTALITY.',
          the_two_options: {
            percutaneous_nephrostomy: 'A tube placed radiologically through the flank directly into the renal pelvis. Advantages: performed under local anaesthesia, avoids a general anaesthetic in an unstable septic patient, drains thick pus effectively, and allows antegrade imaging later. Often preferred in the SEPTIC, UNSTABLE patient.',
            retrograde_ureteric_stent: 'A JJ stent passed cystoscopically up the ureter. Usually requires a general anaesthetic and can be difficult to pass beyond a tightly impacted stone, but avoids an external tube and bag.',
            the_choice: 'DETERMINED BY LOCAL EXPERTISE AND AVAILABILITY AND BY THE PATIENT CONDITION. THE IMPORTANT POINT IS NOT WHICH, BUT THAT ONE OF THEM HAPPENS TONIGHT.',
          },
          the_rule_that_is_most_often_broken: {
            the_statement: 'DO NOT ATTEMPT TO TREAT THE STONE AT THE SAME SITTING. NO URETEROSCOPY, NO LASER FRAGMENTATION, NO SHOCKWAVE LITHOTRIPSY IN AN INFECTED OBSTRUCTED SYSTEM.',
            why: 'MANIPULATING AN INFECTED OBSTRUCTED SYSTEM AND RAISING INTRARENAL PRESSURE CAUSES PYELOVENOUS AND PYELOLYMPHATIC BACKFLOW, FORCING BACTERIA AND ENDOTOXIN DIRECTLY INTO THE CIRCULATION AND PRECIPITATING FULMINANT SEPTIC SHOCK ON THE TABLE. DRAIN NOW, TREAT THE STONE LATER — usually after days to weeks of antibiotics with the infection controlled.',
          },
          send_the_pus: 'SEND URINE OBTAINED AT DRAINAGE FOR URGENT MICROSCOPY AND CULTURE — it is the definitive sample and frequently yields the organism when blood and bladder cultures do not.',
        },
        d_the_stones_that_do_not_need_intervention: {
          the_general_rule: 'MOST STONES UNDER 5 mm PASS SPONTANEOUSLY — around 70 to 80%. Stones of 5 to 10 mm pass less often. STONES OVER 10 mm RARELY PASS AND USUALLY NEED INTERVENTION. HER STONE IS 9 mm, so passage was unlikely even without the infection.',
          medical_expulsive_therapy: 'AN ALPHA BLOCKER SUCH AS TAMSULOSIN relaxes ureteric smooth muscle and may aid passage of DISTAL ureteric stones, particularly those over about 5 mm. Evidence is mixed and benefit is modest — recent large trials showed less effect than earlier studies. It is reasonable for selected distal stones and is NOT a substitute for intervention where one is indicated.',
          the_indications_for_intervention: 'INFECTION WITH OBSTRUCTION (an emergency) · obstruction of a SOLITARY kidney or BILATERAL obstruction · ACUTE KIDNEY INJURY · UNCONTROLLED PAIN OR VOMITING despite adequate treatment · a stone unlikely to pass · and failure to progress over several weeks.',
          the_safety_netting_for_those_managed_expectantly: 'They must know to RETURN IMMEDIATELY WITH FEVER, RIGORS, UNCONTROLLED PAIN, VOMITING OR REDUCED URINE OUTPUT — and it must be written down. A patient sent home with an unobstructed stone who develops a fever at 2 a.m. has the emergency in this case.',
        },
        e_definitive_stone_treatment_later: 'EXTRACORPOREAL SHOCKWAVE LITHOTRIPSY for suitable stones — contraindicated in pregnancy, uncorrected coagulopathy and untreated infection. URETEROSCOPY WITH LASER FRAGMENTATION, now the most versatile option. PERCUTANEOUS NEPHROLITHOTOMY for large or staghorn stones. Open surgery is rare.',
        f_prevention_which_is_the_part_that_is_skipped: {
          the_universal_advice: 'FLUID INTAKE SUFFICIENT TO PRODUCE 2 TO 2.5 LITRES OF URINE PER DAY — the single most effective preventive measure for every stone type, and it needs to be quantified rather than "drink more". Reduce SALT and animal protein. MAINTAIN NORMAL DIETARY CALCIUM — RESTRICTING CALCIUM PARADOXICALLY INCREASES STONE RISK, because dietary calcium binds oxalate in the gut and prevents its absorption. THIS IS COUNTER-INTUITIVE AND PATIENTS ARE FREQUENTLY GIVEN THE OPPOSITE ADVICE.',
          by_stone_type: 'CALCIUM OXALATE (commonest) — fluids, reduce oxalate-rich foods, thiazide if hypercalciuric, potassium citrate if hypocitraturic. URIC ACID — alkalinise the urine, allopurinol, and note these stones can be DISSOLVED medically. STRUVITE (magnesium ammonium phosphate) — formed by UREASE-PRODUCING organisms such as Proteus that split urea and alkalinise the urine; these form STAGHORN calculi, and COMPLETE STONE CLEARANCE IS ESSENTIAL BECAUSE RESIDUAL FRAGMENTS HARBOUR BACTERIA AND REGROW. CYSTINE — inherited, needs high fluid intake, alkalinisation and specific agents.',
          the_recurrence_rate: 'Roughly half of stone formers have another stone within 5 to 10 years. Prevention is not optional advice — it is the treatment for the disease.',
        },
      },

      section_6_teaching_points: {
        bonus_1_a_stone_plus_a_fever_is_an_emergency:
          'Obstruction plus infection creates a closed, pressurised, infected cavity. Antibiotics penetrate it poorly and cannot clear pus under pressure. It belongs with cholangitis and the undrained abscess: DRAINAGE IS THE TREATMENT, within hours.',
        bonus_2_do_not_treat_the_stone_at_the_same_sitting:
          'Manipulating an infected obstructed system raises intrarenal pressure and forces bacteria into the circulation by pyelovenous backflow, precipitating fulminant septic shock on the table. Drain now, treat the stone weeks later.',
        bonus_3_first_renal_colic_over_50_is_an_aneurysm_until_proven_otherwise:
          'A leaking aortic aneurysm causes loin-to-groin pain and sometimes haematuria, mimicking colic exactly. Examine for a pulsatile expansile mass and check the femoral pulses. This misdiagnosis is documented and fatal.',
        bonus_4_absence_of_haematuria_does_not_exclude_a_stone:
          'Haematuria is present in about 85% — so roughly one in seven has none. And a clean bladder specimen does not exclude infection ABOVE a complete obstruction, because that urine never reaches the bladder.',
        bonus_5_nsaids_beat_opioids_for_colic_but_not_in_this_patient:
          'They reduce glomerular filtration, renal pelvic pressure and prostaglandin-mediated oedema — treating the mechanism. But they are nephrotoxic and wrong in sepsis, hypovolaemia and acute kidney injury. Knowing WHY they work tells you when not to use them.',
        bonus_6_restricting_dietary_calcium_increases_stone_risk:
          'Dietary calcium binds oxalate in the gut and prevents its absorption. Restricting it increases urinary oxalate and stone formation. Patients are routinely given exactly the wrong advice.',
        bonus_7_the_restless_patient:
          'Colic patients writhe because no position helps; peritonitis patients lie absolutely still because movement hurts. Visible from the doorway, and it distinguishes two large categories of abdominal pain before you touch anyone.',
        trap_1: 'Ask two questions of every renal colic patient: is there a fever, and is this a solitary kidney or is renal function impaired?',
        trap_2: 'Struvite staghorn stones harbour urease-producing bacteria — complete clearance is essential or they regrow.',
        trap_3: 'Send urine obtained AT DRAINAGE for culture — it is the definitive sample.',
        trap_4: 'Keep the stone for analysis — it directs prevention and is routinely thrown away.',
        trap_5: 'Quantify the fluid advice: 2 to 2.5 litres of URINE per day, not "drink more".',
        trap_6: 'Give written safety-netting to anyone managed expectantly — fever, rigors, vomiting or reduced urine output means return immediately.',
        one_line_summary: 'Infected obstructed kidney behind a 9 mm ureteric stone. Resuscitate, cultures then antibiotics, avoid the NSAID because she is septic and oliguric, and get her drained tonight — but do not touch the stone until the infection is controlled.',
      },
    },
    warnings: [
      'A STONE PLUS A FEVER IS A UROLOGICAL EMERGENCY — the obstructed infected kidney must be DRAINED within hours.',
      'ANTIBIOTICS ALONE CANNOT TREAT AN OBSTRUCTED INFECTED SYSTEM — penetration is poor and pus is under pressure.',
      'DO NOT TREAT THE STONE AT THE SAME SITTING — manipulation forces bacteria into the circulation and causes fulminant septic shock.',
      'FIRST "RENAL COLIC" OVER 50 IS A LEAKING AORTIC ANEURYSM UNTIL PROVEN OTHERWISE.',
      'ABSENCE OF HAEMATURIA DOES NOT EXCLUDE A STONE — it is present in only about 85%.',
      'A CLEAN BLADDER SPECIMEN DOES NOT EXCLUDE INFECTION ABOVE A COMPLETE OBSTRUCTION.',
      'NSAIDs are first line for colic but are NEPHROTOXIC — avoid in sepsis, hypovolaemia and acute kidney injury.',
      'ALWAYS ASK whether this is a SOLITARY kidney or whether obstruction is bilateral — that is anuric renal failure.',
      'Send urine obtained AT DRAINAGE for culture — it is the definitive sample.',
      'DO A PREGNANCY TEST and use ultrasound then MRI rather than CT in pregnancy.',
      'STRUVITE STAGHORN STONES harbour urease-producing bacteria — complete clearance is essential or they regrow.',
      'RESTRICTING DIETARY CALCIUM INCREASES STONE RISK — maintain normal intake.',
      'Keep the stone for ANALYSIS — it directs prevention and is routinely discarded.',
      'Give WRITTEN safety-netting to anyone managed expectantly — fever, rigors, vomiting or low urine output means return immediately.',
      'Doses and antibiotic choices here are teaching examples. Follow local urology and microbiology policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Choice between nephrostomy and stent depends on local expertise and availability.',
      'Medical expulsive therapy evidence is mixed and its role is limited to selected distal stones.',
    ],
    cards: [
      { q: 'What two questions must every renal colic patient be asked?', a: 'Is there a fever or infection, and is this a solitary kidney or is renal function impaired?' },
      { q: 'Why can antibiotics not treat an infected obstructed kidney?', a: 'It is a closed pressurised infected cavity — antibiotic penetration is poor and pus is under pressure.' },
      { q: 'Why must the stone not be treated at the same sitting?', a: 'Raising intrarenal pressure causes pyelovenous backflow, forcing bacteria into the circulation and precipitating septic shock.' },
      { q: 'What is the crucial differential in a first presentation over 50?', a: 'A leaking abdominal aortic aneurysm — it mimics renal colic exactly, sometimes with haematuria.' },
      { q: 'How often is haematuria present?', a: 'About 85% — so its absence does not exclude a stone.' },
      { q: 'Why are NSAIDs more effective than opioids in colic?', a: 'They reduce glomerular filtration, renal pelvic pressure and prostaglandin-mediated oedema — treating the mechanism.' },
      { q: 'When must NSAIDs be avoided here?', a: 'Sepsis, hypovolaemia, acute kidney injury or existing renal impairment — they are nephrotoxic.' },
      { q: 'Compare nephrostomy and retrograde stent.', a: 'Nephrostomy: local anaesthesia, drains thick pus, good in the unstable septic patient. Stent: avoids an external bag but usually needs a general anaesthetic.' },
      { q: 'What proportion of stones under 5 mm pass spontaneously?', a: 'Around 70 to 80%; stones over 10 mm rarely pass.' },
      { q: 'Which organisms form struvite stones and why does it matter?', a: 'Urease-producing organisms such as Proteus — they form staghorn calculi and residual fragments harbour bacteria and regrow.' },
      { q: 'Why should dietary calcium NOT be restricted?', a: 'Dietary calcium binds oxalate in the gut and prevents its absorption — restriction increases stone risk.' },
      { q: 'What is the fluid target for prevention?', a: '2 to 2.5 litres of URINE per day — quantified, not "drink more".' },
      { q: 'How does the patient position differ between colic and peritonitis?', a: 'Colic patients writhe because no position helps; peritonitis patients lie absolutely still.' },
    ],
    checks: [
      'Fever and sepsis features specifically sought',
      'Solitary kidney, bilateral obstruction and renal function checked',
      'Leaking aortic aneurysm considered in a first presentation over 50',
      'Pregnancy test done',
      'Blood cultures taken before antibiotics',
      'Sepsis six completed within the hour',
      'NSAID avoided because of sepsis and acute kidney injury',
      'Non-contrast CT KUB obtained (ultrasound then MRI if pregnant)',
      'Urology contacted urgently for drainage',
      'Drainage arranged within hours — nephrostomy or stent',
      'NO stone treatment attempted at the same sitting',
      'Urine from the drained system sent for culture',
      'Stone kept for analysis if retrieved',
      'Metabolic workup planned for recurrent stone formers',
      'Written safety-netting given if managed expectantly',
    ],
    related: ['urinary_stone_disease_presentation_imaging_and_management'],
  },
];
