/**
 * CASE SCENARIOS — Medicine: Rheumatology.
 *
 * Batch 3, part 1.
 */

export default [
  {
    id: 'AS-CASE-0021',
    type: 'case',
    specialty: 'Medicine — Rheumatology',
    teaching_case: true,
    title: 'CASE: New Headache and Jaw Ache on Chewing in a 74-Year-Old',
    short: 'Case: giant cell arteritis',
    summary:
      'A 74-year-old with three weeks of temporal headache, scalp tenderness and jaw claudication. Teaches why steroids are started before the biopsy, why a normal ESR does not exclude it, and why the second eye is the one you are actually protecting.',
    domains: ['rheumatology', 'ophthalmology', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case giant cell arteritis', 'gca case', 'temporal arteritis case',
      'jaw claudication', 'temporal artery biopsy', 'skip lesions',
      'polymyalgia rheumatica', 'amaurosis fugax gca', 'aion',
    ],
    terms: [
      'case', 'giant cell arteritis', 'temporal arteritis', 'jaw claudication',
      'scalp tenderness', 'amaurosis fugax', 'anterior ischaemic optic neuropathy',
      'esr', 'crp', 'temporal artery biopsy', 'skip lesions', 'polymyalgia rheumatica',
      'tocilizumab', 'prednisolone', 'methylprednisolone', 'aortic aneurysm gca',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '74-year-old woman with three weeks of new right-sided headache, tenderness when she brushes her hair, and aching in her jaw that comes on after a few minutes of chewing and stops when she rests.',

      section_1_clerking: {
        history:
          'Three weeks of constant right temporal headache, unlike any headache she has had before. Her scalp is tender — she cannot bear to brush her hair or rest her head on that side of the pillow. When she eats, her jaw begins to ache after two or three minutes of chewing and she has to stop; the ache goes away with rest. She has felt generally unwell with fatigue, low-grade fevers, poor appetite and 3 kg of weight loss. She has had aching and stiffness in both shoulders and hips for two months, WORST IN THE MORNING AND LASTING OVER AN HOUR.',
        the_symptom_that_should_stop_you: {
          jaw_claudication:
            'PAIN IN THE MUSCLES OF MASTICATION BROUGHT ON BY CHEWING AND RELIEVED BY REST. "Claudication" means exactly what it means in the legs — ischaemic muscle pain on exertion. The masseter is working, its arterial supply is narrowed by arteritis, and it becomes ischaemic. IT IS THE MOST SPECIFIC SYMPTOM IN THE WHOLE DISEASE and its presence should trigger treatment before anything else is arranged. Ask for it explicitly, because patients describe it as "my jaw gets tired" and do not think it is important.',
          why_it_is_missed: 'It is not painful at rest, it resolves in seconds, and it sounds trivial. Nobody volunteers it. YOU HAVE TO ASK: "Does your jaw ache or tire when you chew, and does it stop when you rest?"',
        },
        the_question_that_must_be_asked_at_every_contact:
          'ANY VISUAL SYMPTOMS? Transient loss of vision in one eye like a curtain coming down (AMAUROSIS FUGAX), double vision, blurring, or a dark patch. VISUAL LOSS IN GIANT CELL ARTERITIS IS SUDDEN, PAINLESS AND IRREVERSIBLE. Transient visual symptoms are the warning before permanent loss, and they are the difference between a treated patient and a blind one. SHE REPORTS TWO EPISODES of the vision in her right eye "greying out" for a minute, two days ago.',
        the_associated_condition:
          'Her shoulder and hip girdle aching with prolonged morning stiffness is POLYMYALGIA RHEUMATICA. It shares a disease spectrum with giant cell arteritis — roughly 40 to 50% of patients with arteritis have polymyalgic symptoms, and around 15% of polymyalgia patients develop arteritis. ANY PATIENT WITH POLYMYALGIA RHEUMATICA MUST BE WARNED ABOUT THE HEADACHE AND VISUAL SYMPTOMS AND TOLD TO SEEK HELP THE SAME DAY.',
        past_medical_history: 'Hypertension. Osteoarthritis of the knees. NO diabetes — relevant, because she is about to receive high-dose steroids.',
        vitals: 'BP 148/84 mmHg. Pulse 82. Temperature 37.6. Respiratory rate 16. Saturation 97%. Glucose 5.8.',
        examination: {
          temporal_arteries:
            'THE RIGHT TEMPORAL ARTERY IS THICKENED, TENDER, NODULAR AND PULSELESS. Palpate both arteries in front of the ear and up over the temple, comparing sides. A normal-feeling artery does NOT exclude the diagnosis — abnormal findings are helpful, normal findings are not.',
          eyes:
            'Visual acuity 6/6 both eyes today. Pupils equal and reactive with NO RELATIVE AFFERENT PUPILLARY DEFECT — check this specifically, because it is the objective sign of optic nerve ischaemia. FUNDOSCOPY: normal discs. In established anterior ischaemic optic neuropathy the disc is SWOLLEN AND PALE — "chalky white" swelling — which distinguishes the arteritic form from the non-arteritic.',
          scalp: 'Diffusely tender over the right temple. LOOK FOR SCALP NECROSIS in severe disease — an ulcerated area over the temple indicating complete arterial occlusion.',
          other_arteries:
            'EXAMINE AND COMPARE BLOOD PRESSURE IN BOTH ARMS, and palpate all peripheral pulses, listening for SUBCLAVIAN AND CAROTID BRUITS. Giant cell arteritis is a LARGE VESSEL VASCULITIS — it involves the aorta and its branches, not only the temporal artery, and a blood pressure difference between arms or an absent pulse points to large-vessel involvement.',
          girdles: 'Shoulder and hip abduction limited by pain with no true weakness — a key point, because polymyalgia causes PAIN-LIMITED movement, not weakness. True weakness suggests an inflammatory myopathy instead.',
        },
      },

      section_2_mechanism: {
        what_it_is: 'A GRANULOMATOUS VASCULITIS of large and medium-sized arteries, with a particular affinity for branches of the EXTERNAL CAROTID ARTERY and for the OPHTHALMIC and POSTERIOR CILIARY arteries. It is a disease of people over 50, and increasingly common with age.',
        the_pathology:
          'An immune response centred on the ARTERIAL WALL. Dendritic cells in the adventitia activate T cells, which recruit macrophages that fuse into MULTINUCLEATED GIANT CELLS — hence the name. The resulting inflammation destroys the INTERNAL ELASTIC LAMINA and drives INTIMAL HYPERPLASIA, which progressively narrows and finally occludes the lumen.',
        why_the_symptoms_are_what_they_are: [
          'HEADACHE AND SCALP TENDERNESS — inflammation of the superficial temporal and occipital arteries.',
          'JAW CLAUDICATION — ischaemia of the masseter, supplied by the maxillary artery, a branch of the external carotid.',
          'VISUAL LOSS — occlusion of the POSTERIOR CILIARY ARTERIES, which supply the optic nerve head. This causes ARTERITIC ANTERIOR ISCHAEMIC OPTIC NEUROPATHY. Less commonly the central retinal artery occludes.',
          'SYSTEMIC SYMPTOMS — fever, weight loss, malaise — from circulating inflammatory cytokines, particularly interleukin-6.',
          'AORTIC DISEASE — the same process in the aorta causes ANEURYSM AND DISSECTION years later, which is why long-term follow-up matters.',
        ],
        why_the_visual_loss_is_irreversible_and_what_that_means_for_treatment:
          'Once the posterior ciliary arteries occlude, the optic nerve head INFARCTS. Infarcted nerve does not recover. Steroids given after visual loss RARELY RESTORE SIGHT IN THAT EYE. WHAT THEY DO IS PROTECT THE OTHER EYE — and without treatment, the second eye is affected within days to weeks in a substantial proportion of patients. THAT IS THE ENTIRE URGENCY OF THIS DISEASE: you are not usually saving the eye that is threatened today, you are saving the one that is still normal.',
      },

      section_3_differentials: {
        one_giant_cell_arteritis: 'WORKING DIAGNOSIS. Supporting: age over 50, new headache, scalp tenderness, JAW CLAUDICATION, transient visual loss, abnormal temporal artery, systemic symptoms, polymyalgic girdle symptoms.',
        two_tension_or_cervicogenic_headache: 'Common at this age, but does not cause jaw claudication, scalp tenderness, systemic symptoms or visual loss. A NEW headache in someone over 50 is never dismissed as tension headache without thought.',
        three_migraine: 'A first migraine at 74 is rare. No systemic features.',
        four_trigeminal_neuralgia: 'Brief, electric-shock, lancinating pain in a trigeminal distribution triggered by touch — quite different in character from a constant boring headache.',
        five_temporomandibular_joint_dysfunction: 'Also causes jaw pain on chewing, but the pain is IN THE JOINT, with clicking and tenderness over the joint itself, and it is not relieved promptly by rest in the claudication pattern.',
        six_non_arteritic_anterior_ischaemic_optic_neuropathy: 'Painless visual loss without systemic symptoms, normal inflammatory markers, typically in patients with vascular risk factors and a "crowded" small optic disc. It matters because it does NOT need steroids and it is not an emergency of the same kind.',
        seven_other_vasculitis_or_infection: 'ANCA-associated vasculitis, infective endocarditis and malignancy all produce systemic symptoms with raised inflammatory markers. They are considered if the picture does not fit.',
      },

      section_4_investigations: {
        the_governing_principle:
          'TREATMENT IS STARTED ON CLINICAL SUSPICION, BEFORE ANY RESULT. The biopsy and the bloods confirm or refute afterwards. Delaying steroids to obtain a test is how patients go blind.',
        inflammatory_markers: {
          esr_and_crp: 'BOTH SHOULD BE SENT. The ESR (erythrocyte sedimentation rate) is classically markedly raised, often above 50 mm/hour and sometimes above 100. CRP (C-reactive protein) rises faster and falls faster and is often the more useful marker.',
          the_trap_that_matters:
            'A NORMAL ESR DOES NOT EXCLUDE GIANT CELL ARTERITIS. A small but real proportion of biopsy-proven cases have a normal ESR, and a smaller number have both markers normal. IF THE CLINICAL PICTURE IS CONVINCING — particularly jaw claudication with visual symptoms — TREAT REGARDLESS OF THE NUMBERS. A patient sent home with "your inflammatory markers are normal" and a temporal headache with jaw claudication is a patient who may return blind.',
          the_other_direction: 'A raised ESR alone is very non-specific in the elderly — infection, malignancy, myeloma and renal disease all raise it. The test supports a clinical diagnosis; it does not make one.',
        },
        other_bloods: 'Full blood count — a NORMOCYTIC ANAEMIA of chronic disease and a raised PLATELET COUNT are common and supportive. Liver function — ALKALINE PHOSPHATASE is often raised. Urea and electrolytes. Glucose and HbA1c BEFORE starting steroids, because high-dose steroids frequently unmask or worsen diabetes. Bone profile.',
        temporal_artery_biopsy: {
          the_standard: 'THE DIAGNOSTIC REFERENCE TEST. Take a segment of at least 1 to 2 cm — length matters, for the reason below.',
          the_timing:
            'IDEALLY WITHIN 1 WEEK OF STARTING STEROIDS, and certainly within 2 weeks. Steroids gradually suppress the histological changes, so the yield falls with time — but IT REMAINS POSITIVE FOR SEVERAL WEEKS, which is precisely why you START STEROIDS FIRST AND BIOPSY AFTERWARDS. There is no justification for delaying treatment to arrange a biopsy.',
          skip_lesions_the_reason_a_negative_biopsy_means_little:
            'THE INFLAMMATION IS PATCHY ALONG THE ARTERY — segments of diseased wall alternate with normal segments. These are SKIP LESIONS. A biopsy may sample a normal segment and be reported as negative in a patient who definitely has the disease. THIS IS WHY A NEGATIVE BIOPSY DOES NOT EXCLUDE GIANT CELL ARTERITIS, and why an adequate LENGTH of artery is taken — a longer specimen crosses more segments. If the clinical picture is strong, treat despite a negative biopsy.',
          what_it_shows: 'Granulomatous inflammation with mononuclear infiltrate, MULTINUCLEATED GIANT CELLS, fragmentation of the internal elastic lamina, and intimal hyperplasia narrowing the lumen.',
        },
        ultrasound: 'TEMPORAL ARTERY ULTRASOUND showing the HALO SIGN — a hypoechoic circumferential wall thickening representing oedema — is increasingly used as a rapid, non-invasive first test. It is operator-dependent and, like biopsy, the halo fades with steroid treatment, so it is most useful early.',
        large_vessel_imaging: 'CT or MR angiography, or PET-CT, where large-vessel involvement is suspected — asymmetric blood pressures, absent pulses, bruits, or persistent systemic symptoms without cranial features. It also establishes a baseline for later aneurysm surveillance.',
        ophthalmology: 'URGENT SAME-DAY OPHTHALMOLOGY ASSESSMENT for any visual symptom. Formal acuity, fields, pupils and dilated fundoscopy.',
      },

      section_5_management: {
        a_start_steroids_now: {
          the_rule: 'GIVE THE FIRST DOSE BEFORE ARRANGING ANYTHING ELSE. Not after the ESR, not after the biopsy is booked, not after the rheumatology clinic call back.',
          without_visual_symptoms: 'PREDNISOLONE 40 to 60 mg orally once daily.',
          with_visual_symptoms_or_visual_loss_which_is_her_situation:
            'INTRAVENOUS METHYLPREDNISOLONE 500 mg to 1 g daily for 3 days, then oral prednisolone 40 to 60 mg daily. SHE HAS HAD AMAUROSIS FUGAX, so she is in this group. The higher dose reflects the imminent threat to sight.',
          the_response: 'Headache and systemic symptoms typically improve DRAMATICALLY within 24 to 72 hours. A complete lack of response should make you question the diagnosis — the steroid response is itself diagnostically informative.',
        },
        b_aspirin: 'LOW-DOSE ASPIRIN 75 mg daily is commonly added, on the reasoning that it reduces ischaemic complications, alongside gastric protection. The evidence is observational rather than from trials, so practice varies — but it is widely used.',
        c_the_steroid_protection_that_is_routinely_forgotten: {
          the_context: 'She faces at least 1 to 2 years of steroids, often longer. The complications of the treatment will affect her more than the disease if they are not anticipated.',
          bone: 'BONE PROTECTION FROM DAY ONE — calcium and vitamin D, plus a BISPHOSPHONATE such as alendronic acid in a woman of 74 on high-dose long-term steroids. Do not wait for a DEXA scan to start; arrange the scan as well. Steroid-induced osteoporosis causes fractures within months, and bone is lost fastest in the first 6 to 12 months.',
          stomach: 'A PROTON PUMP INHIBITOR, particularly with concurrent aspirin.',
          glucose: 'Monitor glucose — steroid-induced hyperglycaemia is common and she should be told to report thirst and polyuria.',
          infection: 'Consider Pneumocystis prophylaxis if additional immunosuppression is used. Check varicella and tuberculosis status where relevant.',
          the_steroid_card: 'GIVE A STEROID EMERGENCY CARD and explain ADRENAL SUPPRESSION: she must NEVER stop the steroid abruptly, and the dose must be INCREASED during illness, injury or surgery. Abrupt cessation causes an adrenal crisis, which kills.',
          other: 'Blood pressure, weight, mood — steroids cause insomnia, agitation and occasionally frank psychosis — cataract and glaucoma screening, and skin fragility.',
        },
        d_steroid_sparing_treatment: {
          tocilizumab: 'An INTERLEUKIN-6 RECEPTOR BLOCKER, given subcutaneously or intravenously. It is proven in trials to sustain remission and REDUCE CUMULATIVE STEROID EXPOSURE, and is used in relapsing disease or where steroid toxicity is a serious problem. IMPORTANT PRACTICAL POINT: IT SUPPRESSES CRP AND ESR REGARDLESS OF DISEASE ACTIVITY, so these markers become useless for monitoring — you must follow symptoms instead. It also masks the inflammatory response to infection.',
          methotrexate: 'A modest steroid-sparing effect; used in some services.',
        },
        e_tapering_and_relapse: 'The steroid dose is reduced gradually over months to years, guided by symptoms and inflammatory markers. RELAPSE IS COMMON, especially during reduction, and presents with recurrence of headache, girdle symptoms or systemic features. Patients must know to report these promptly rather than waiting for the next appointment.',
        f_long_term_surveillance: 'Giant cell arteritis increases the risk of THORACIC AORTIC ANEURYSM AND DISSECTION years after the acute episode. Long-term follow-up with periodic imaging is recommended, and this is frequently lost once the acute illness settles.',
        g_the_safety_netting: 'SHE MUST KNOW: any new visual symptom means attend immediately, day or night. Do not stop the steroid. Report relapse symptoms. Increase the dose in intercurrent illness. Carry the steroid card. Written information, not just a conversation at discharge.',
      },

      section_6_teaching_points: {
        bonus_1_you_are_protecting_the_other_eye:
          'Once the optic nerve head infarcts, sight in that eye rarely returns even with steroids. What treatment reliably does is prevent the SECOND eye from going, and without treatment the second eye follows within days to weeks in a substantial proportion. Understanding this reframes the urgency: the emergency is not about the eye that is already affected.',
        bonus_2_a_normal_esr_does_not_exclude_it:
          'A real proportion of biopsy-proven cases have a normal ESR, and some have normal ESR and CRP. If the clinical picture is convincing — jaw claudication plus visual symptoms above all — TREAT. Sending a patient home on the strength of a normal inflammatory marker is how this diagnosis is missed.',
        bonus_3_skip_lesions_mean_a_negative_biopsy_proves_nothing:
          'Inflammation is patchy along the artery, so a biopsy can sample a normal segment. Take at least 1 to 2 cm to cross more segments — and if the clinical picture is strong, treat despite a negative result.',
        bonus_4_biopsy_stays_positive_for_weeks_so_treat_first:
          'Histological changes persist for several weeks after steroids are started, although yield declines. There is therefore NO justification for delaying treatment to arrange a biopsy. Start the steroid, then book the biopsy for within a week.',
        bonus_5_jaw_claudication_is_the_most_specific_symptom_and_nobody_volunteers_it:
          'Ischaemic masseter pain on chewing, relieved by rest. Patients describe it as their jaw getting tired and think it is trivial. You have to ask the question in those words.',
        bonus_6_tocilizumab_makes_the_inflammatory_markers_useless:
          'It blocks interleukin-6, the driver of CRP production, so CRP and ESR fall regardless of disease activity and also fail to rise with infection. Monitor symptoms, and maintain a high index of suspicion for infection in a patient with normal markers.',
        trap_1: 'Warn every polymyalgia rheumatica patient about headache and visual symptoms — 15% develop arteritis.',
        trap_2: 'Start bone protection on day one, not after a DEXA scan. Bone is lost fastest in the first 6 to 12 months.',
        trap_3: 'Give a steroid emergency card and explain that abrupt cessation causes adrenal crisis and that the dose must rise during illness.',
        trap_4: 'Check both arms for a blood pressure difference and listen for bruits — this is a large-vessel vasculitis, not just a temporal artery disease.',
        trap_5: 'Arrange long-term aortic surveillance — aneurysm and dissection occur years later and follow-up is usually lost.',
        trap_6: 'Distinguish arteritic from non-arteritic ischaemic optic neuropathy — the non-arteritic form does not need steroids and is not the same emergency.',
        one_line_summary: 'Giant cell arteritis with amaurosis fugax. Intravenous methylprednisolone today, biopsy within the week, bone protection and a steroid card from day one, ophthalmology the same day — and the point of the steroid is the eye that still works.',
      },
    },
    warnings: [
      'START STEROIDS ON CLINICAL SUSPICION — before the ESR, before the biopsy, before the specialist call back.',
      'A NORMAL ESR DOES NOT EXCLUDE giant cell arteritis. If the picture is convincing, treat regardless.',
      'A NEGATIVE BIOPSY DOES NOT EXCLUDE IT — skip lesions mean a normal segment may be sampled. Take at least 1 to 2 cm.',
      'Biopsy remains positive for several weeks after steroids start, so there is no reason to delay treatment for it.',
      'Visual loss is SUDDEN, PAINLESS and IRREVERSIBLE. Steroids protect the OTHER eye — that is the urgency.',
      'ASK ABOUT JAW CLAUDICATION explicitly — it is the most specific symptom and patients never volunteer it.',
      'Any visual symptom means the same-day intravenous regimen, not oral prednisolone.',
      'Start BONE PROTECTION on day one — do not wait for a DEXA scan.',
      'Give a STEROID EMERGENCY CARD — abrupt cessation causes adrenal crisis, and the dose must increase during illness.',
      'Check blood pressure in BOTH arms and listen for bruits — this is a large-vessel vasculitis.',
      'Tocilizumab suppresses CRP and ESR regardless of disease activity and masks infection — monitor symptoms instead.',
      'Warn every polymyalgia rheumatica patient about headache and visual symptoms.',
      'Arrange long-term aortic surveillance — aneurysm and dissection occur years later.',
      'Doses here are teaching examples for an adult. Follow your local rheumatology protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Steroid regimens, aspirin use, ultrasound-first pathways and tocilizumab access vary between services.',
      'Fast-track pathways exist in many centres and should be used where available.',
    ],
    cards: [
      { q: 'What is jaw claudication and why does it matter?', a: 'Ischaemic masseter pain on chewing relieved by rest — the most specific symptom, and patients never volunteer it.' },
      { q: 'Does a normal ESR exclude giant cell arteritis?', a: 'No. Biopsy-proven cases occur with a normal ESR — treat on clinical grounds.' },
      { q: 'Why does a negative biopsy not exclude it?', a: 'Skip lesions — inflammation is patchy, so a normal segment may be sampled.' },
      { q: 'How long does biopsy stay positive after steroids?', a: 'Several weeks — which is why treatment is never delayed for it.' },
      { q: 'What do steroids actually achieve if sight is already lost?', a: 'They protect the OTHER eye, which otherwise follows within days to weeks.' },
      { q: 'Give the regimen with and without visual symptoms.', a: 'Without: prednisolone 40 to 60 mg daily. With: IV methylprednisolone 500 mg to 1 g for 3 days, then oral.' },
      { q: 'What is the halo sign?', a: 'Hypoechoic circumferential wall thickening on temporal artery ultrasound, representing wall oedema.' },
      { q: 'What must be started on day one alongside steroids?', a: 'Bone protection — calcium, vitamin D and a bisphosphonate — plus gastric protection and a steroid card.' },
      { q: 'Why does tocilizumab complicate monitoring?', a: 'It blocks IL-6, so CRP and ESR fall regardless of activity and fail to rise with infection.' },
      { q: 'What is the relationship with polymyalgia rheumatica?', a: 'Around 40 to 50% of arteritis patients have polymyalgic symptoms; about 15% of polymyalgia patients develop arteritis.' },
      { q: 'What long-term complication needs surveillance?', a: 'Thoracic aortic aneurysm and dissection, years after the acute episode.' },
    ],
    checks: [
      'Jaw claudication asked about explicitly',
      'Visual symptoms asked about and documented',
      'Steroids given before any investigation',
      'Intravenous regimen used because of visual symptoms',
      'Same-day ophthalmology assessment arranged',
      'ESR and CRP sent, but treatment not contingent on them',
      'Temporal artery biopsy booked within one week',
      'Both arms blood pressure compared and pulses examined',
      'Glucose and HbA1c checked before steroids',
      'Bone protection started on day one',
      'Gastric protection prescribed',
      'Steroid emergency card given and sick-day rules explained',
      'Long-term aortic surveillance planned',
    ],
    related: ['giant_cell_arteritis_the_sight_threatening_vasculitis'],
  },

  {
    id: 'AS-CASE-0022',
    type: 'case',
    specialty: 'Medicine — Rheumatology',
    teaching_case: true,
    title: 'CASE: One Hot Swollen Knee — Gout or Sepsis?',
    short: 'Case: septic arthritis versus gout',
    summary:
      'A 58-year-old with a red hot knee, fever, and a history of gout. Teaches why the joint must be aspirated before antibiotics, why crystals do not exclude infection, and why the joint that is destroyed is destroyed within days.',
    domains: ['rheumatology', 'orthopaedics', 'emergency_medicine', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case septic arthritis', 'hot swollen joint case', 'gout versus septic arthritis',
      'joint aspiration case', 'synovial fluid analysis', 'negatively birefringent',
      'pseudogout', 'prosthetic joint infection', 'gonococcal arthritis',
    ],
    terms: [
      'case', 'septic arthritis', 'gout', 'pseudogout', 'joint aspiration', 'arthrocentesis',
      'synovial fluid', 'birefringence', 'monosodium urate', 'calcium pyrophosphate',
      'staphylococcus aureus', 'gonococcal arthritis', 'flucloxacillin', 'colchicine',
      'allopurinol', 'prosthetic joint infection', 'reactive arthritis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '58-year-old man with a 2-day history of a hot, red, exquisitely painful and swollen right knee, unable to bear weight, with a temperature of 38.3. He has had three previous attacks of gout in his big toe.',

      section_1_clerking: {
        the_rule_that_governs_the_case:
          'A SINGLE HOT SWOLLEN JOINT IS SEPTIC ARTHRITIS UNTIL PROVEN OTHERWISE. It is an ORTHOPAEDIC EMERGENCY. Untreated, bacteria and the enzymes released by neutrophils destroy articular cartilage IRREVERSIBLY WITHIN DAYS, and the mortality of septic arthritis is around 10%, higher in the elderly and in polyarticular disease.',
        history:
          'Two days of increasing pain, swelling, redness and heat in the right knee. He cannot bear weight or bend it. Fevers and rigors overnight. He has had three previous attacks of gout, all in the FIRST METATARSOPHALANGEAL JOINT of the left foot, each settling in a few days with anti-inflammatories. THIS ATTACK FEELS DIFFERENT — a different joint, more systemic upset, and rigors, which he has never had before.',
        reading_the_clues: {
          the_history_of_gout_is_a_trap_not_a_reassurance:
            'A PATIENT WITH GOUT CAN GET SEPTIC ARTHRITIS. Worse, they are at INCREASED risk, because a joint already damaged by crystal disease is more easily infected. THE COMMONEST WAY THIS DIAGNOSIS IS MISSED IS "he has gout, this is another attack of gout" — which is a diagnosis made from the notes rather than from the patient.',
          different_joint_and_rigors: 'The features he himself identifies as different are the ones that matter. Rigors indicate bacteraemia. Take the patient own comparison seriously.',
          risk_factors_for_septic_arthritis_to_ask_about:
            'Age over 80 · DIABETES · RHEUMATOID ARTHRITIS, which increases risk several-fold and in which the presentation is often blunted by steroids and immunosuppression · PROSTHETIC JOINT or recent joint surgery or injection · INTRAVENOUS DRUG USE, which also causes infection in unusual joints such as the sternoclavicular and sacroiliac · skin infection or ulceration · immunosuppression · and recent SEXUAL EXPOSURE, because gonococcal arthritis is a distinct and treatable entity.',
        },
        past_medical_history: 'Gout. Type 2 diabetes. Hypertension. Chronic kidney disease stage 3 — RELEVANT TO EVERY DRUG CHOICE IN THIS CASE.',
        drug_history: 'Metformin. Ramipril. BENDROFLUMETHIAZIDE — thiazide diuretics RAISE URATE and precipitate gout. He takes ibuprofen for attacks, which is a poor choice with chronic kidney disease. NOT on allopurinol despite three attacks.',
        vitals: 'BP 132/76 mmHg. Pulse 104. Respiratory rate 20. Temperature 38.3. Saturation 97%. Glucose 12.4.',
        examination:
          'The right knee is SWOLLEN, HOT, ERYTHEMATOUS with a large effusion and a positive PATELLAR TAP. Movement is limited to a few degrees in any direction and is EXQUISITELY PAINFUL — in septic arthritis, even tiny passive movement is intolerable, whereas in cellulitis over a joint the joint itself can usually be moved. He holds the knee slightly flexed, the position of maximum capsular volume and least pain. No tophi. Examine ALL other joints, the skin for a portal of entry, and the heart for a murmur, since endocarditis seeds joints.',
      },

      section_2_mechanism: {
        how_bacteria_reach_a_joint: 'HAEMATOGENOUS SPREAD is the commonest route — the synovium is highly vascular and has no basement membrane, so organisms in the bloodstream enter easily. Also by DIRECT INOCULATION from injection, surgery or a penetrating wound, and by CONTIGUOUS SPREAD from adjacent osteomyelitis or cellulitis.',
        why_the_joint_is_destroyed_so_fast:
          'Bacteria multiply in synovial fluid, which is an excellent culture medium. The host response floods the joint with NEUTROPHILS, which release PROTEASES AND COLLAGENASES. Those enzymes — the host own, not the bacteria — DIGEST ARTICULAR CARTILAGE. Cartilage is avascular and does not regenerate. Damage begins within DAYS and is permanent. The rising pressure of the effusion also compromises cartilage perfusion. THIS IS WHY DRAINAGE MATTERS AS MUCH AS ANTIBIOTICS: you are removing the enzyme-rich fluid, not just the organisms.',
        the_organisms: 'STAPHYLOCOCCUS AUREUS is the commonest overall, and dominates in prosthetic joints, intravenous drug use and skin sepsis. STREPTOCOCCI are next. GRAM-NEGATIVES in the elderly, immunosuppressed and intravenous drug users. NEISSERIA GONORRHOEAE in sexually active young adults — a distinct picture with migratory polyarthralgia, TENOSYNOVITIS and a PUSTULAR RASH. MYCOBACTERIUM TUBERCULOSIS in a chronic monoarthritis, which must be considered in endemic settings and is missed for months.',
        what_gout_is_by_contrast:
          'MONOSODIUM URATE crystals precipitate in the joint when serum urate is persistently high. They are phagocytosed by neutrophils and activate the NLRP3 INFLAMMASOME, releasing interleukin-1 beta and producing intense sterile inflammation. THE INFLAMMATION IS AS SEVERE AS INFECTION, AND CAN CAUSE FEVER AND A RAISED WHITE COUNT — WHICH IS EXACTLY WHY THE TWO CANNOT BE SEPARATED CLINICALLY.',
      },

      section_3_differentials: {
        one_septic_arthritis: 'MUST BE ASSUMED. Supporting: acute monoarthritis, fever, rigors, inability to bear weight, diabetes, and a joint not previously affected.',
        two_gout: 'Supporting: known gout, thiazide diuretic, chronic kidney disease. BUT gout usually affects the first metatarsophalangeal joint, and previous attacks do not protect against infection.',
        three_pseudogout: 'CALCIUM PYROPHOSPHATE deposition, commoner in the elderly and typically in the KNEE and WRIST. Associated with haemochromatosis, hyperparathyroidism and hypomagnesaemia. CHONDROCALCINOSIS — cartilage calcification — may be visible on radiograph, though it indicates deposition rather than the cause of this attack.',
        four_haemarthrosis: 'Blood in the joint after trauma, or spontaneously in anticoagulated or haemophilic patients. Aspiration shows frank blood.',
        five_reactive_arthritis: 'Follows gastrointestinal or genitourinary infection by 1 to 4 weeks. Typically asymmetrical lower limb oligoarthritis, sometimes with conjunctivitis and urethritis. Sterile.',
        six_cellulitis_overlying_a_joint: 'Skin infection without joint involvement. THE DISCRIMINATOR: in cellulitis the joint can usually be moved passively through a reasonable range; in septic arthritis even a few degrees is intolerable.',
        seven_flare_of_inflammatory_arthritis: 'Rheumatoid or psoriatic arthritis can flare in a single joint. BUT PATIENTS WITH RHEUMATOID ARTHRITIS ARE AT HIGH RISK OF SEPTIC ARTHRITIS AND PRESENT ATYPICALLY — assume infection.',
      },

      section_4_investigations: {
        joint_aspiration_the_investigation_that_defines_the_case: {
          the_rule:
            'ASPIRATE THE JOINT BEFORE GIVING ANTIBIOTICS, unless the patient is septic and unstable, in which case take blood cultures, give antibiotics and aspirate as soon as possible. Antibiotics given first substantially reduce the chance of growing the organism, and without an organism you cannot rationalise or shorten a course that may run for weeks.',
          the_absolute_contraindication: 'DO NOT ASPIRATE THROUGH INFECTED SKIN OR CELLULITIS — you would inoculate the joint. Approach through healthy skin, or seek an alternative route.',
          the_prosthetic_joint_rule: 'A SUSPECTED INFECTED PROSTHETIC JOINT SHOULD BE ASPIRATED BY THE ORTHOPAEDIC TEAM, usually in theatre under sterile conditions — not on the ward. Refer, do not aspirate.',
          what_to_send: 'URGENT GRAM STAIN · CULTURE AND SENSITIVITY · CELL COUNT AND DIFFERENTIAL · POLARISED LIGHT MICROSCOPY FOR CRYSTALS. Send it immediately and telephone the laboratory.',
          interpreting_the_appearance: 'NORMAL synovial fluid is clear, pale yellow and viscous, with fewer than 200 white cells per mm3. INFLAMMATORY fluid is turbid with 2,000 to 50,000 cells. SEPTIC fluid is typically purulent with MORE THAN 50,000 white cells per mm3, predominantly NEUTROPHILS, and often a low glucose relative to serum. BUT THESE ARE PROBABILITIES, NOT RULES — septic arthritis occurs with lower counts, particularly early and in the immunosuppressed.',
          crystals: 'MONOSODIUM URATE — needle-shaped, NEGATIVELY birefringent under polarised light. CALCIUM PYROPHOSPHATE — rhomboid, POSITIVELY birefringent. A memory aid: urate is Needle-shaped and Negatively birefringent.',
          the_single_most_important_point_in_the_case:
            'THE PRESENCE OF CRYSTALS DOES NOT EXCLUDE INFECTION. The two coexist, and a crystal-damaged joint is MORE susceptible to infection. A report of "urate crystals seen" in a febrile patient with a hot joint is NOT permission to stop antibiotics — you wait for the culture. Equally, a NEGATIVE GRAM STAIN DOES NOT EXCLUDE SEPSIS; it is positive in only around half of culture-proven cases.',
        },
        blood_cultures: 'AT LEAST TWO SETS BEFORE ANTIBIOTICS. Positive in a substantial proportion of septic arthritis, and sometimes the only source of an organism when the joint fluid is sterile after prior antibiotics.',
        bloods: 'Full blood count · CRP and ESR, which are useful for tracking response over days · urea and electrolytes, ESSENTIAL HERE because his chronic kidney disease governs drug choice and dosing · glucose and HbA1c · liver function · SERUM URATE — but note the trap below.',
        the_serum_urate_trap:
          'SERUM URATE IS OFTEN NORMAL OR LOW DURING AN ACUTE GOUT ATTACK, because urate is being deposited into the joint and the acute phase response lowers it. A NORMAL URATE DOES NOT EXCLUDE GOUT, AND A HIGH URATE DOES NOT DIAGNOSE IT — many people with hyperuricaemia never get gout. It is a test for later, when starting urate-lowering therapy, not a test for today.',
        imaging: 'Plain radiograph — usually normal early in septic arthritis, which is expected and not reassuring; it may show chondrocalcinosis in pseudogout, erosions in chronic gout, or a foreign body. ULTRASOUND confirms an effusion and guides aspiration. MRI if osteomyelitis or a deep joint such as the hip or sacroiliac is suspected. In gonococcal or disseminated infection, take genital, throat and rectal swabs with nucleic acid testing.',
      },

      section_5_management: {
        a_the_sequence: 'Aspirate. Blood cultures. Antibiotics. Orthopaedic referral. In an unstable septic patient the order compresses — cultures and antibiotics immediately, aspiration as soon as it can be done safely.',
        b_antibiotics: {
          empirical: 'FLUCLOXACILLIN 2 g intravenously every 6 hours, covering Staphylococcus aureus and streptococci. Add GENTAMICIN or a cephalosporin if Gram-negative infection is likely — elderly, immunosuppressed, urinary source. CAUTION WITH GENTAMICIN IN HIS CHRONIC KIDNEY DISEASE; dose by level and involve pharmacy.',
          penicillin_allergy: 'CLINDAMYCIN or a glycopeptide such as VANCOMYCIN or TEICOPLANIN, according to local policy.',
          mrsa_risk: 'VANCOMYCIN or TEICOPLANIN if MRSA is known or likely.',
          gonococcal: 'CEFTRIAXONE, with partner notification and full sexual health screening — a different pathway entirely, and much shorter treatment.',
          duration: 'Typically 2 weeks intravenously followed by 4 weeks orally, adjusted by organism, response and joint. Longer for prosthetic joints. GUIDED BY MICROBIOLOGY — this is a case for a formal microbiology discussion, not a guess.',
        },
        c_drainage_which_is_not_optional: {
          the_principle: 'ANTIBIOTICS ALONE ARE NOT SUFFICIENT. The purulent, enzyme-rich fluid must be REMOVED, and repeatedly if it reaccumulates.',
          methods: 'Repeated closed-needle aspiration · ARTHROSCOPIC washout · or open surgical drainage. Choice depends on the joint, the organism and local practice.',
          the_hip_is_different: 'A SEPTIC HIP — particularly in a child — REQUIRES URGENT SURGICAL DRAINAGE. The hip is a deep, tight, ball-and-socket joint where rising pressure compromises the blood supply to the femoral head, causing AVASCULAR NECROSIS. It cannot be managed by needle aspiration.',
          refer_immediately: 'ORTHOPAEDICS MUST BE INVOLVED FROM THE OUTSET, not after antibiotics have been tried for a day.',
        },
        d_supportive: 'Analgesia. Rest the joint in a functional position initially, then EARLY MOBILISATION AND PHYSIOTHERAPY once infection is controlled, because prolonged immobility causes stiffness and contracture. Thromboprophylaxis. Glucose control — his glucose of 12.4 both reflects and worsens the infection. Monitor CRP as a response marker.',
        e_if_it_turns_out_to_be_gout: {
          acute_treatment_with_his_kidney_disease_in_mind: {
            nsaids: 'Effective, but AVOID IN CHRONIC KIDNEY DISEASE, heart failure and peptic ulcer disease. HE SHOULD NOT BE TAKING IBUPROFEN, and that needs correcting.',
            colchicine: 'COLCHICINE 500 micrograms two to four times daily. DOSE MUST BE REDUCED IN RENAL IMPAIRMENT. Diarrhoea is the dose-limiting effect and is a signal to reduce. IT INTERACTS DANGEROUSLY with clarithromycin, ciclosporin and statins, causing toxicity and myopathy. Colchicine toxicity in overdose is severe and there is no antidote.',
            steroids: 'PREDNISOLONE 30 to 35 mg orally daily for about 5 days, or an INTRA-ARTICULAR STEROID INJECTION for a single joint — BUT ONLY ONCE INFECTION IS DEFINITIVELY EXCLUDED. Injecting steroid into a septic joint is catastrophic. Steroids are often the best choice in renal impairment where NSAIDs are contraindicated.',
          },
          urate_lowering_therapy: {
            who: 'He has had FOUR attacks including this one, plus chronic kidney disease. HE NEEDS URATE-LOWERING THERAPY. Indications include recurrent attacks, tophi, chronic kidney disease, urate stones, or radiographic damage.',
            drug: 'ALLOPURINOL, started at a low dose such as 100 mg daily — LOWER IN RENAL IMPAIRMENT, for example 50 mg — and titrated up every few weeks against serum urate, targeting below 360 micromol/L, or below 300 where there are tophi.',
            the_two_rules_that_are_routinely_broken: {
              rule_1: 'DO NOT START ALLOPURINOL DURING AN ACUTE ATTACK if the patient is not already on it — a sudden change in urate can prolong or worsen the attack. Start it 2 to 4 weeks after the attack settles. CONVERSELY, IF A PATIENT IS ALREADY TAKING ALLOPURINOL AND HAS AN ATTACK, DO NOT STOP IT — stopping causes another shift in urate and makes things worse.',
              rule_2: 'COVER THE INITIATION WITH PROPHYLAXIS for up to 6 months — low-dose colchicine or an NSAID — because starting urate-lowering therapy PRECIPITATES ATTACKS as deposited crystals mobilise. Patients who are not warned stop the drug after the first flare and conclude it does not work.',
            },
            the_allopurinol_hypersensitivity_warning: 'Rare but potentially fatal — rash, fever, eosinophilia, hepatitis and renal failure. Higher risk with renal impairment, with higher starting doses, and in carriers of HLA-B*5801, which is much commoner in some Han Chinese, Thai and Korean populations, where screening is recommended. START LOW AND WARN THE PATIENT TO STOP AND SEEK HELP IF A RASH APPEARS.',
          },
          the_modifiable_factors: 'REVIEW THE BENDROFLUMETHIAZIDE — thiazides raise urate, and an alternative antihypertensive such as losartan, which is mildly uricosuric, may suit him better. Address alcohol, particularly beer, sugar-sweetened drinks and fructose, obesity, and purine-rich foods. Optimise his diabetes and kidney disease.',
        },
      },

      section_6_teaching_points: {
        bonus_1_crystals_do_not_exclude_infection:
          'Gout and septic arthritis coexist, and a crystal-damaged joint is MORE susceptible to infection. "Urate crystals seen" in a febrile patient with a hot joint is not permission to stop antibiotics — you wait for the culture. This is the single most important sentence in the case.',
        bonus_2_aspirate_before_antibiotics:
          'Antibiotics markedly reduce the chance of growing the organism, and without an organism you cannot rationalise a course that may run six weeks. The exception is an unstable septic patient, where cultures and antibiotics come first and aspiration follows as soon as it is safe.',
        bonus_3_drainage_matters_as_much_as_antibiotics:
          'The cartilage is destroyed by the patient own neutrophil proteases and collagenases, not directly by bacteria. Removing the enzyme-rich fluid is therapeutic in itself, which is why repeated aspiration or washout is part of treatment rather than a diagnostic step.',
        bonus_4_the_septic_hip_needs_theatre:
          'A deep tight joint where rising pressure compromises the femoral head blood supply and causes avascular necrosis. It cannot be managed with needle aspiration, and in a child it is a same-day surgical emergency.',
        bonus_5_a_normal_serum_urate_does_not_exclude_gout:
          'Urate is often normal or low during an acute attack, because it is being deposited into the joint and the acute phase response lowers it. And a high urate does not diagnose gout — most hyperuricaemic people never get it. It is a test for planning treatment later, not for today.',
        bonus_6_the_two_allopurinol_rules:
          'Do NOT start it during an acute attack — but do NOT stop it if the patient is already taking one. And ALWAYS cover initiation with up to 6 months of prophylaxis, because mobilising crystals precipitates flares and an unwarned patient stops the drug and concludes it failed.',
        trap_1: 'A history of gout is a RISK FACTOR for septic arthritis, not a reassurance. Never diagnose from the notes.',
        trap_2: 'A negative Gram stain does not exclude infection — it is positive in only about half of culture-proven cases.',
        trap_3: 'Never inject steroid into a joint until infection has been definitively excluded.',
        trap_4: 'Do NOT aspirate through cellulitic skin, and do NOT aspirate a prosthetic joint on the ward — refer to orthopaedics.',
        trap_5: 'In cellulitis over a joint the joint can usually be moved; in septic arthritis even a few degrees is intolerable.',
        trap_6: 'Rheumatoid patients are at high risk and present atypically because immunosuppression blunts the signs.',
        trap_7: 'Check renal function before every drug choice here — NSAIDs, colchicine, gentamicin and allopurinol all need adjustment.',
        one_line_summary: 'A hot swollen knee is septic until proven otherwise. Aspirate before antibiotics, send for Gram stain, culture, cell count and crystals, involve orthopaedics from the outset — and remember that finding crystals does not let you stop the antibiotics.',
      },
    },
    warnings: [
      'A SINGLE HOT SWOLLEN JOINT IS SEPTIC ARTHRITIS UNTIL PROVEN OTHERWISE — cartilage is destroyed within days and mortality is around 10%.',
      'THE PRESENCE OF CRYSTALS DOES NOT EXCLUDE INFECTION. Gout and sepsis coexist, and a crystal-damaged joint is more susceptible.',
      'ASPIRATE BEFORE ANTIBIOTICS unless the patient is unstable — antibiotics first means you may never identify the organism.',
      'A NEGATIVE GRAM STAIN DOES NOT EXCLUDE SEPSIS — it is positive in only about half of culture-proven cases.',
      'A history of gout is a RISK FACTOR for septic arthritis, not reassurance. Never diagnose from the notes.',
      'DO NOT aspirate through cellulitic skin — you would inoculate the joint.',
      'DO NOT aspirate a prosthetic joint on the ward — refer to orthopaedics for theatre aspiration.',
      'ANTIBIOTICS ALONE ARE NOT ENOUGH — the joint must be drained, repeatedly if it reaccumulates.',
      'A SEPTIC HIP NEEDS URGENT SURGICAL DRAINAGE — pressure causes avascular necrosis of the femoral head.',
      'NEVER inject intra-articular steroid until infection is definitively excluded.',
      'A NORMAL SERUM URATE DOES NOT EXCLUDE GOUT, and a high urate does not diagnose it.',
      'Do NOT start allopurinol during an acute attack — but do NOT stop it if already prescribed.',
      'ALWAYS cover allopurinol initiation with up to 6 months of prophylaxis, or the patient will flare and stop the drug.',
      'Warn about allopurinol hypersensitivity — stop and seek help if a rash appears.',
      'Check renal function before every drug choice — NSAIDs, colchicine, gentamicin and allopurinol all need adjustment.',
      'Doses here are teaching examples. Follow your local orthopaedic and microbiology guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Empirical antibiotics, drainage method and duration follow local microbiology and orthopaedic policy.',
      'Prosthetic joint infection is a specialist pathway not covered in detail here.',
    ],
    cards: [
      { q: 'What must be assumed about a single hot swollen joint?', a: 'Septic arthritis until proven otherwise — cartilage is destroyed within days.' },
      { q: 'Do crystals in the aspirate exclude infection?', a: 'No. They coexist, and a crystal-damaged joint is more susceptible to infection.' },
      { q: 'Why aspirate before antibiotics?', a: 'Antibiotics markedly reduce culture yield, and without an organism you cannot rationalise a six-week course.' },
      { q: 'When must you NOT aspirate?', a: 'Through cellulitic skin, and never a prosthetic joint on the ward — refer to orthopaedics.' },
      { q: 'Give the synovial fluid findings in sepsis.', a: 'Purulent, usually over 50,000 white cells per mm3, predominantly neutrophils, low glucose — but lower counts do not exclude it.' },
      { q: 'Distinguish urate and pyrophosphate crystals.', a: 'Urate: needle-shaped, negatively birefringent. Pyrophosphate: rhomboid, positively birefringent.' },
      { q: 'Why is drainage as important as antibiotics?', a: 'Neutrophil proteases and collagenases in the fluid digest cartilage — removing the fluid is therapeutic.' },
      { q: 'Why does a septic hip need theatre?', a: 'Rising pressure in a deep tight joint compromises the femoral head blood supply, causing avascular necrosis.' },
      { q: 'Why can serum urate be normal in an acute attack?', a: 'Urate is being deposited into the joint and the acute phase response lowers it.' },
      { q: 'State the two allopurinol timing rules.', a: 'Do not START during an attack; do not STOP it if already prescribed.' },
      { q: 'Why cover allopurinol initiation with prophylaxis?', a: 'Mobilising deposited crystals precipitates flares — unwarned patients stop the drug and conclude it failed.' },
      { q: 'How does cellulitis over a joint differ on examination?', a: 'The joint can usually be moved passively; in septic arthritis even a few degrees is intolerable.' },
    ],
    checks: [
      'Joint aspirated before antibiotics where safe',
      'Aspiration route avoided cellulitic skin',
      'Prosthetic joint referred rather than aspirated on the ward',
      'Fluid sent for Gram stain, culture, cell count and crystals',
      'Two sets of blood cultures taken before antibiotics',
      'Empirical antibiotics started after aspiration',
      'Orthopaedics involved from the outset',
      'Drainage plan agreed, not antibiotics alone',
      'Renal function checked before every drug choice',
      'Antibiotics continued despite crystals until cultures return',
      'Thiazide reviewed as a gout precipitant',
      'Urate-lowering therapy planned for after the attack, with prophylaxis cover',
      'Allopurinol hypersensitivity warning given',
    ],
    related: ['crystal_arthropathy_gout_and_pseudogout'],
  },
];
