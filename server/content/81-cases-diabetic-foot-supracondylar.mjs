/**
 * CASE SCENARIOS — The infected diabetic foot and the paediatric supracondylar
 * fracture.
 *
 * Batch 5, part 5 — closes the batch at case 50.
 */

export default [
  {
    id: 'AS-CASE-0049',
    type: 'case',
    specialty: 'Surgery — Vascular surgery',
    teaching_case: true,
    title: 'CASE: A Diabetic Foot Ulcer That Probes to Bone',
    short: 'Case: infected diabetic foot',
    summary:
      'A 63-year-old diabetic with a plantar ulcer, cellulitis and a normal temperature. Teaches why neuropathy makes a limb-threatening infection painless, why the ABPI lies in diabetes, what the probe-to-bone test means, and why the pulses can be normal while the foot dies.',
    domains: ['vascular_surgery', 'endocrinology', 'orthopaedics', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'case diabetic foot', 'diabetic foot infection case', 'probe to bone test',
      'charcot foot', 'abpi diabetes calcification', 'toe pressure', 'osteomyelitis foot',
      'neuropathic ulcer', 'wagner classification', 'diabetic foot ulcer',
    ],
    terms: [
      'case', 'diabetic foot', 'diabetic foot ulcer', 'peripheral neuropathy', 'probe to bone',
      'osteomyelitis', 'ankle brachial pressure index', 'medial arterial calcification',
      'toe brachial index', 'charcot neuroarthropathy', 'offloading', 'total contact cast',
      'monofilament testing', 'wagner classification', 'revascularisation', 'amputation',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '63-year-old man with type 2 diabetes and a 6-week ulcer under the first metatarsal head, now with spreading redness up the foot, a foul discharge, and a blood glucose of 22 mmol/L. He is afebrile and says the foot does not hurt.',

      section_1_the_three_things_that_make_this_dangerous: {
        one_the_pain_is_absent: {
          the_problem:
            'PERIPHERAL NEUROPATHY REMOVES THE WARNING SIGNAL. He has a limb-threatening infection and NO PAIN. Pain is the symptom that brings people to hospital, and diabetic patients with neuropathy do not have it — so they present LATE, with deep infection and bone involvement already established.',
          the_consequence: 'DO NOT USE PAIN OR ITS ABSENCE TO JUDGE SEVERITY IN A NEUROPATHIC FOOT. A PAINLESS FOOT IS NOT A REASSURING FOOT — it is a foot whose alarm has been disconnected.',
        },
        two_the_systemic_signs_are_absent: {
          the_problem: 'HE IS AFEBRILE WITH A NORMAL WHITE CELL COUNT. IN DIABETES, FEVER AND LEUCOCYTOSIS ARE ABSENT IN A LARGE PROPORTION OF SEVERE FOOT INFECTIONS, including those with osteomyelitis. Hyperglycaemia itself impairs neutrophil chemotaxis and phagocytosis.',
          the_consequence: 'THE ABSENCE OF FEVER AND A RAISED WHITE COUNT DOES NOT EXCLUDE A SEVERE OR LIMB-THREATENING INFECTION. Assess the LOCAL findings and the whole picture, and use CRP as a more useful marker than the white count.',
          the_one_that_does_signal: 'UNEXPLAINED HYPERGLYCAEMIA OR LOSS OF DIABETIC CONTROL IS FREQUENTLY THE ONLY SYSTEMIC SIGN OF INFECTION IN A DIABETIC PATIENT. HIS GLUCOSE OF 22 IS THE FEVER. Treat a sudden deterioration in glycaemic control as a sign to look for infection.',
        },
        three_the_abpi_lies: 'See the investigation section. This is the single most important technical point in the case.',
      },

      section_2_clerking: {
        history:
          'Type 2 diabetes for 18 years, HbA1c 84 mmol/mol. A callus under the first metatarsal head became an ulcer 6 weeks ago. He has continued to walk on it in ordinary shoes. Over 4 days the foot has become red and swollen with a foul-smelling discharge. NO PAIN. NO FEVER. Numbness in both feet for years — "like walking on cotton wool". No rest pain, no claudication.',
        the_history_that_matters: 'DURATION AND EVOLUTION OF THE ULCER · previous ulcers or amputation, which are the strongest predictors of recurrence · GLYCAEMIC CONTROL · SMOKING · renal function and dialysis, which markedly worsen prognosis · visual impairment, which prevents self-inspection · footwear and whether he has ever had podiatry input · and whether anyone examines his feet.',
        the_absence_of_claudication_is_not_reassuring: 'NEUROPATHY MASKS ISCHAEMIC PAIN AS WELL. A DIABETIC PATIENT CAN HAVE SEVERE PERIPHERAL ARTERIAL DISEASE WITHOUT CLAUDICATION OR REST PAIN, BECAUSE THEY CANNOT FEEL IT. THE ABSENCE OF CLAUDICATION DOES NOT EXCLUDE ISCHAEMIA.',
        vitals: 'BP 142/84 mmHg. Pulse 92. TEMPERATURE 36.9. Respiratory rate 18. GLUCOSE 22.4 mmol/L. Ketones 0.6. CRP 178.',
        examination: {
          the_ulcer: 'A 2 cm ulcer under the first metatarsal head with surrounding callus and undermined edges. PURULENT MALODOROUS DISCHARGE. Erythema extending 6 cm proximally onto the dorsum. Oedema. No crepitus.',
          probe_to_bone: {
            how: 'GENTLY PROBE THE ULCER WITH A STERILE BLUNT METAL PROBE. IF IT REACHES A HARD, GRITTY SURFACE WITH NO INTERVENING SOFT TISSUE, THE TEST IS POSITIVE.',
            what_it_means: 'A POSITIVE PROBE-TO-BONE TEST IN A PATIENT WITH A HIGH PRE-TEST PROBABILITY — a deep, chronic or infected ulcer — STRONGLY SUGGESTS OSTEOMYELITIS. In lower-risk populations its predictive value falls, but in this patient it is a powerful and free bedside test.',
            his_result: 'POSITIVE.',
          },
          neurological: {
            monofilament: 'A 10 g SEMMES-WEINSTEIN MONOFILAMENT applied to standard sites on the plantar surface, with the patient eyes closed. INABILITY TO FEEL IT INDICATES LOSS OF PROTECTIVE SENSATION AND MARKS A FOOT AT RISK OF ULCERATION. HE CANNOT FEEL IT AT ANY SITE.',
            the_rest: 'Vibration with a 128 Hz tuning fork, ankle reflexes, and proprioception. Look for the deformity of motor neuropathy — CLAW TOES AND PROMINENT METATARSAL HEADS from small muscle wasting, which redistributes pressure and creates the ulcer sites.',
          },
          vascular: 'PALPATE DORSALIS PEDIS AND POSTERIOR TIBIAL PULSES — both are PALPABLE here. Capillary refill. Skin temperature, hair loss and nail changes. AND SEE THE WARNING BELOW ABOUT PALPABLE PULSES.',
          the_rest_of_the_foot: 'INSPECT BETWEEN EVERY TOE — interdigital ulcers and fungal infection are missed because the toes are not separated. Inspect the heel and the whole plantar surface. EXAMINE THE OTHER FOOT — the risk factors are bilateral. Check footwear for foreign bodies, seams and poor fit.',
        },
      },

      section_3_mechanism: {
        the_three_contributors: {
          neuropathy: {
            sensory: 'Loss of protective sensation — the patient does not feel the stone in the shoe, the blister, or the developing ulcer.',
            motor: 'Wasting of the intrinsic foot muscles causes CLAW TOE DEFORMITY AND PROMINENT METATARSAL HEADS, concentrating pressure at points not designed to bear it. THAT IS WHY ULCERS OCCUR UNDER THE METATARSAL HEADS AND ON THE TOE TIPS.',
            autonomic: 'Loss of sweating makes the skin DRY AND FISSURED, providing an entry point, and AUTONOMIC DENERVATION CAUSES ARTERIOVENOUS SHUNTING SO THE FOOT CAN BE WARM AND WELL PERFUSED-LOOKING WHILE THE NUTRITIVE CAPILLARY FLOW TO THE SKIN IS INADEQUATE.',
          },
          ischaemia: 'Peripheral arterial disease in diabetes characteristically affects the INFRAPOPLITEAL (tibial and peroneal) VESSELS — a distal, diffuse pattern that is harder to bypass than the proximal disease of non-diabetic atherosclerosis. The foot arteries are often relatively spared, which is what makes distal bypass and angioplasty possible.',
          infection: 'Hyperglycaemia impairs neutrophil function and wound healing. Infection spreads along tendon sheaths and fascial planes, and the compartments of the foot allow it to track rapidly with little external sign.',
        },
        why_the_ulcer_forms_where_it_does: 'REPETITIVE PRESSURE ON AN INSENSATE FOOT AT A POINT OF DEFORMITY. Callus forms in response to pressure, and the callus itself increases local pressure and causes subcutaneous haemorrhage and tissue breakdown BENEATH it. THAT IS WHY CALLUS OVER A PRESSURE POINT IS A PRE-ULCER AND MUST BE DEBRIDED BY A PODIATRIST, NOT LEFT.',
        charcot_neuroarthropathy: {
          what_it_is: 'PROGRESSIVE DESTRUCTION OF BONE AND JOINTS IN A NEUROPATHIC FOOT, driven by unperceived repetitive trauma and an intense local inflammatory response with osteoclast activation.',
          the_presentation: 'A HOT, RED, SWOLLEN FOOT — WHICH LOOKS EXACTLY LIKE INFECTION. It is typically LESS PAINFUL than expected, and there may be no ulcer or portal of entry.',
          the_discriminating_test: 'ELEVATE THE LEG FOR 5 TO 10 MINUTES. IN CHARCOT, THE REDNESS AND SWELLING SUBSIDE SUBSTANTIALLY; IN INFECTION THEY DO NOT. It is not infallible, but it is a free bedside test worth knowing.',
          why_it_matters: 'MISSING ACUTE CHARCOT LEADS TO THE MIDFOOT COLLAPSING INTO A ROCKER-BOTTOM DEFORMITY, which then ulcerates and often leads to amputation. TREATMENT IS IMMEDIATE, TOTAL, NON-WEIGHT-BEARING IMMOBILISATION — usually a total contact cast — FOR MONTHS. A patient walking on an acute Charcot foot is destroying it with every step.',
          the_rule: 'A HOT SWOLLEN FOOT IN A NEUROPATHIC DIABETIC PATIENT IS CHARCOT UNTIL PROVEN OTHERWISE, AND OFTEN BOTH CHARCOT AND INFECTION ARE PRESENT. Plain radiographs may be normal early; MRI is the investigation.',
        },
      },

      section_4_investigations: {
        the_abpi_problem_which_is_the_key_technical_point: {
          what_the_abpi_is: 'ANKLE BRACHIAL PRESSURE INDEX — the ratio of the highest ankle systolic pressure to the highest brachial systolic pressure. Normal is roughly 0.9 to 1.3. Below 0.9 indicates peripheral arterial disease; below 0.5 indicates severe disease.',
          why_it_is_unreliable_in_diabetes:
            'DIABETES CAUSES MEDIAL ARTERIAL CALCIFICATION (MÖNCKEBERG SCLEROSIS) — CALCIUM IN THE ARTERIAL MEDIA MAKES THE VESSELS INCOMPRESSIBLE. THE CUFF CANNOT OCCLUDE THEM, SO THE MEASURED PRESSURE IS FALSELY HIGH. A DIABETIC PATIENT WITH SEVERE ISCHAEMIA CAN HAVE AN ABPI OF 1.2 OR HIGHER.',
          the_rule: 'AN ABPI ABOVE 1.3 IS NOT REASSURING — IT IS A RED FLAG FOR INCOMPRESSIBLE VESSELS AND SHOULD PROMPT FURTHER ASSESSMENT. A NORMAL OR HIGH ABPI IN A DIABETIC FOOT DOES NOT EXCLUDE SEVERE ISCHAEMIA.',
          what_to_use_instead: 'TOE PRESSURE AND TOE BRACHIAL INDEX — the DIGITAL arteries are much less affected by medial calcification, so toe pressures remain reliable. A toe pressure below about 30 mmHg indicates critical ischaemia. Also DOPPLER WAVEFORM ANALYSIS — a monophasic, damped waveform indicates disease regardless of the pressure — TRANSCUTANEOUS OXYGEN MEASUREMENT, and DUPLEX ULTRASOUND.',
          the_palpable_pulse_caveat: 'PALPABLE PULSES DO NOT EXCLUDE SIGNIFICANT ISCHAEMIA IN A DIABETIC FOOT. Because autonomic neuropathy causes arteriovenous shunting, the foot can be warm with palpable pulses while nutritive capillary perfusion to the skin is grossly inadequate. HIS PULSES ARE PALPABLE AND HE STILL NEEDS FORMAL VASCULAR ASSESSMENT.',
        },
        microbiology: {
          what_to_send: 'DEEP TISSUE SAMPLES OR CURETTAGE FROM THE ULCER BASE AFTER DEBRIDEMENT, AND BONE BIOPSY WHERE OSTEOMYELITIS IS SUSPECTED AND THE ORGANISM MATTERS.',
          what_not_to_send: 'SUPERFICIAL WOUND SWABS. THEY GROW SKIN AND ENVIRONMENTAL COLONISERS AND LEAD TO TREATMENT OF ORGANISMS THAT ARE NOT CAUSING THE INFECTION, DRIVING UNNECESSARY BROAD-SPECTRUM ANTIBIOTIC USE. This is one of the commonest errors in diabetic foot care.',
          the_organisms: 'Mild superficial infections are often Gram-positive — Staphylococcus aureus and streptococci. DEEP, CHRONIC, PREVIOUSLY TREATED INFECTIONS ARE TYPICALLY POLYMICROBIAL, with Gram-negatives and anaerobes. Consider MRSA in previously treated or hospitalised patients.',
        },
        imaging: {
          plain_radiograph: 'FIRST LINE. Looks for bone destruction, periosteal reaction, GAS IN THE SOFT TISSUES (which indicates a gas-forming organism and demands urgent surgery), foreign bodies and Charcot changes. IMPORTANT LIMITATION: RADIOGRAPHIC CHANGES OF OSTEOMYELITIS TAKE 2 TO 3 WEEKS TO APPEAR, so a NORMAL EARLY FILM DOES NOT EXCLUDE IT. Repeat in 2 weeks if suspicion persists.',
          mri: 'THE INVESTIGATION OF CHOICE for osteomyelitis, deep abscess and soft tissue extent. It also assesses Charcot changes — though distinguishing Charcot from osteomyelitis on MRI can be genuinely difficult and may need specialist radiological input.',
          vascular_imaging: 'DUPLEX ULTRASOUND, CT or MR angiography, or digital subtraction angiography, to plan revascularisation. THIS IS NOT OPTIONAL IN A NON-HEALING OR INFECTED ULCER — perfusion determines whether anything will heal.',
        },
        bloods: 'Full blood count — often normal, which is not reassurance · CRP and ESR, more useful than the white count, and a very high ESR supports osteomyelitis · glucose, KETONES and HbA1c · UREA, CREATININE AND ELECTROLYTES, since renal impairment worsens prognosis and affects antibiotic dosing · albumin and nutritional markers · BLOOD CULTURES if systemically unwell.',
      },

      section_5_management: {
        a_immediate_if_severe: 'IF THERE IS SYSTEMIC SEPSIS, SPREADING CELLULITIS, ABSCESS, GAS IN THE TISSUES, OR NECROSIS — THIS IS AN EMERGENCY. Resuscitate, take cultures, give broad-spectrum intravenous antibiotics, and ARRANGE URGENT SURGICAL DEBRIDEMENT. Gas in the tissues or rapidly spreading infection may be a NECROTISING infection and goes to theatre now.',
        b_the_multidisciplinary_team_which_is_the_actual_intervention: {
          the_evidence: 'MULTIDISCIPLINARY DIABETIC FOOT SERVICES — combining diabetology, vascular surgery, orthopaedics, podiatry, microbiology, orthotics and specialist nursing — SUBSTANTIALLY REDUCE MAJOR AMPUTATION RATES. THIS IS ONE OF THE BEST-DEMONSTRATED SERVICE-LEVEL INTERVENTIONS IN SURGERY.',
          the_practical_instruction: 'REFER TO THE DIABETIC FOOT TEAM IMMEDIATELY — WITHIN 24 HOURS FOR AN ACTIVE FOOT PROBLEM. A patient managed by one specialty in isolation does worse.',
        },
        c_the_five_pillars: {
          one_perfusion: 'ASSESS AND RESTORE IT. NO WOUND HEALS WITHOUT BLOOD SUPPLY, AND NO ANTIBIOTIC REACHES TISSUE THAT IS NOT PERFUSED. Revascularisation — angioplasty or bypass — should be considered EARLY in any non-healing or infected ulcer with impaired perfusion, not after months of dressings. Diabetic disease is distal and diffuse, so distal bypass and pedal angioplasty are often required, and these are specialist decisions.',
          two_infection: 'ANTIBIOTICS GUIDED BY DEEP TISSUE CULTURE. MILD infection: oral, Gram-positive cover, 1 to 2 weeks. MODERATE TO SEVERE: broad-spectrum intravenous initially, narrowed on culture. OSTEOMYELITIS: PROLONGED THERAPY, TYPICALLY 6 WEEKS, OR SHORTER IF ALL INFECTED BONE IS SURGICALLY RESECTED. ANTIBIOTICS ALONE DO NOT CURE AN ABSCESS OR NECROTIC TISSUE — DEBRIDEMENT IS PART OF THE TREATMENT.',
          three_debridement: 'REMOVE CALLUS, SLOUGH AND NECROTIC TISSUE, usually by a podiatrist for the wound and by a surgeon for deep infection. IT IS REPEATED, NOT A SINGLE EVENT. Callus removal alone substantially reduces plantar pressure.',
          four_offloading: {
            the_principle: 'A PLANTAR ULCER WILL NOT HEAL IF THE PATIENT KEEPS WALKING ON IT. THIS IS THE SINGLE MOST NEGLECTED ELEMENT OF DIABETIC FOOT CARE.',
            the_gold_standard: 'A TOTAL CONTACT CAST — a well-moulded cast that distributes pressure over the whole plantar surface and, importantly, THE PATIENT CANNOT REMOVE IT. Removable devices are less effective precisely BECAUSE they are removed, and adherence is the limiting factor.',
            the_caveat: 'Total contact casting requires expertise and is used cautiously in significant ischaemia or active infection. Alternatives include removable walkers rendered irremovable, felted foam and specialist footwear.',
            the_teaching_point: 'PRESCRIBING ANTIBIOTICS AND DRESSINGS WHILE THE PATIENT CONTINUES TO WALK ON THE ULCER IS TREATING ONE THIRD OF THE PROBLEM.',
          },
          five_glycaemic_and_metabolic_control: 'Optimise glucose — infection and hyperglycaemia drive each other, and he needs insulin adjustment now. Smoking cessation, lipid and blood pressure control, nutrition and renal management.',
        },
        d_surgery_and_amputation: {
          the_options: 'Incision and drainage of abscess · debridement of necrotic tissue · resection of infected bone, including ray amputation of a toe and its metatarsal · MINOR amputation (toe, ray, transmetatarsal) · MAJOR amputation (below or above knee) where the foot is unsalvageable or the patient is septic.',
          the_framing_that_matters: 'A WELL-TIMED MINOR AMPUTATION THAT REMOVES INFECTED BONE AND ALLOWS THE REST OF THE FOOT TO HEAL IS A SUCCESS, NOT A FAILURE. Delaying it while an ulcer fails to heal for months, and then losing the leg, is the failure. Discuss it as part of the plan rather than as a last resort.',
          the_prognosis_to_be_honest_about: 'MORTALITY AFTER MAJOR AMPUTATION IN DIABETES IS HIGH — comparable to many cancers at 5 years. The CONTRALATERAL limb is also at high risk. This is a marker of severe systemic vascular disease, and the patient deserves to understand that.',
        },
        e_prevention_which_prevents_the_next_one: {
          the_screening: 'ANNUAL FOOT CHECK FOR EVERY DIABETIC PATIENT — inspection, monofilament testing, pulses, and risk stratification. A patient who has had one ulcer has a very high recurrence rate, commonly quoted around 40% at one year.',
          the_advice: 'INSPECT THE FEET DAILY, USING A MIRROR IF NEEDED, AND HAVE SOMEONE ELSE CHECK IF EYESIGHT IS POOR. NEVER WALK BAREFOOT. CHECK INSIDE SHOES BEFORE PUTTING THEM ON. Do not use hot water bottles or sit close to a fire — BURNS ON AN INSENSATE FOOT ARE A CLASSIC AND ENTIRELY PREVENTABLE PRESENTATION. Moisturise dry skin but not between the toes. Do not self-treat callus or use corn plasters. Cut nails straight across, or have a podiatrist do it.',
          footwear_and_podiatry: 'Properly fitted footwear with adequate depth, and custom insoles or orthoses for deformity. REGULAR PODIATRY IS NOT A LUXURY — it is the intervention that removes the callus that becomes the ulcer.',
          the_reality: 'THIS ADVICE IS OFTEN GIVEN ONCE AT DIAGNOSIS AND NEVER REPEATED. It should be revisited at every review, and its delivery checked rather than assumed.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_abpi_lies_in_diabetes:
          'Medial arterial calcification makes vessels incompressible, so the measured pressure is falsely high. An ABPI above 1.3 is a RED FLAG, not reassurance, and a normal ABPI does not exclude severe ischaemia. Use TOE PRESSURES and Doppler waveforms instead — digital arteries are much less affected.',
        bonus_2_palpable_pulses_do_not_exclude_ischaemia:
          'Autonomic neuropathy causes arteriovenous shunting, so the foot can be warm with palpable pulses while nutritive capillary flow to the skin is grossly inadequate. Formal vascular assessment is still required.',
        bonus_3_the_absent_pain_and_absent_fever_are_the_disease:
          'Neuropathy removes the warning signal, and fever and leucocytosis are absent in a large proportion of severe diabetic foot infections. UNEXPLAINED HYPERGLYCAEMIA IS FREQUENTLY THE ONLY SYSTEMIC SIGN — his glucose of 22 is his fever.',
        bonus_4_probe_to_bone_is_a_free_bedside_test:
          'A blunt sterile probe reaching hard gritty bone through the ulcer strongly suggests osteomyelitis in a high-risk patient. It costs nothing and changes the antibiotic duration and the surgical plan.',
        bonus_5_a_normal_early_radiograph_does_not_exclude_osteomyelitis:
          'Radiographic changes take 2 to 3 weeks to appear. Repeat the film at 2 weeks or proceed to MRI, which is the investigation of choice.',
        bonus_6_offloading_is_the_neglected_third_of_treatment:
          'A plantar ulcer will not heal while the patient walks on it. The total contact cast works precisely because it cannot be removed — removable devices fail because they get removed. Antibiotics and dressings without offloading treat one third of the problem.',
        bonus_7_elevate_the_leg_to_test_for_charcot:
          'In acute Charcot neuroarthropathy the redness and swelling subside substantially with 5 to 10 minutes of elevation; in infection they do not. Missing Charcot leads to rocker-bottom collapse, ulceration and amputation — and the treatment is total non-weight-bearing immobilisation for months.',
        trap_1: 'Do NOT send superficial wound swabs — they grow colonisers and drive unnecessary broad-spectrum antibiotics. Send deep tissue or bone.',
        trap_2: 'The absence of claudication does not exclude ischaemia — neuropathy masks ischaemic pain too.',
        trap_3: 'Gas in the soft tissues or rapid spread means a possible necrotising infection and immediate theatre.',
        trap_4: 'Inspect BETWEEN the toes and examine the OTHER foot — the risk factors are bilateral.',
        trap_5: 'Callus over a pressure point is a PRE-ULCER and must be debrided, not left.',
        trap_6: 'A well-timed minor amputation that saves the foot is a success, not a failure.',
        trap_7: 'Burns from hot water bottles and fires on an insensate foot are a classic, entirely preventable presentation.',
        one_line_summary: 'Infected diabetic foot ulcer probing to bone. The painless, afebrile presentation IS the disease, the ABPI cannot be trusted so use toe pressures, refer to the multidisciplinary foot team today — and get him off that foot.',
      },
    },
    warnings: [
      'THE ABPI IS UNRELIABLE IN DIABETES — medial calcification makes vessels incompressible and pressures falsely high.',
      'AN ABPI ABOVE 1.3 IS A RED FLAG, NOT REASSURANCE. Use TOE PRESSURES and Doppler waveforms instead.',
      'PALPABLE PULSES DO NOT EXCLUDE SEVERE ISCHAEMIA — arteriovenous shunting makes the foot look well perfused.',
      'ABSENCE OF PAIN IS NOT REASSURANCE — neuropathy removes the warning signal and patients present late.',
      'FEVER AND LEUCOCYTOSIS ARE ABSENT in a large proportion of severe diabetic foot infections.',
      'UNEXPLAINED HYPERGLYCAEMIA IS OFTEN THE ONLY SYSTEMIC SIGN OF INFECTION in diabetes.',
      'ABSENCE OF CLAUDICATION DOES NOT EXCLUDE ISCHAEMIA — neuropathy masks ischaemic pain.',
      'DO NOT SEND SUPERFICIAL WOUND SWABS — send deep tissue or bone after debridement.',
      'A NORMAL EARLY RADIOGRAPH DOES NOT EXCLUDE OSTEOMYELITIS — changes take 2 to 3 weeks.',
      'GAS IN THE SOFT TISSUES or rapid spread suggests a necrotising infection — theatre now.',
      'OFFLOADING IS ESSENTIAL — a plantar ulcer will not heal while the patient walks on it.',
      'A HOT SWOLLEN NEUROPATHIC FOOT IS CHARCOT UNTIL PROVEN OTHERWISE — elevate the leg for 5 to 10 minutes to help distinguish it.',
      'Walking on an acute Charcot foot destroys it — immediate total non-weight-bearing immobilisation is required.',
      'REVASCULARISE EARLY where perfusion is impaired — no wound heals and no antibiotic works without blood supply.',
      'REFER TO THE MULTIDISCIPLINARY DIABETIC FOOT TEAM WITHIN 24 HOURS — it substantially reduces major amputation.',
      'Warn against hot water bottles and fires — burns on an insensate foot are a classic preventable presentation.',
      'Management here is a teaching example. Follow local diabetic foot pathways.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Antibiotic regimens, duration for osteomyelitis and offloading devices vary between services.',
      'Distinguishing Charcot from osteomyelitis on MRI is genuinely difficult and needs specialist radiological input.',
    ],
    cards: [
      { q: 'Why is the ABPI unreliable in diabetes?', a: 'Medial arterial calcification makes vessels incompressible, so measured pressures are falsely high.' },
      { q: 'What should be used instead?', a: 'Toe pressures and toe brachial index — digital arteries are much less affected — plus Doppler waveform analysis.' },
      { q: 'Why do palpable pulses not exclude ischaemia?', a: 'Autonomic neuropathy causes arteriovenous shunting, so nutritive capillary flow can be inadequate despite pulses.' },
      { q: 'What is often the only systemic sign of infection in diabetes?', a: 'Unexplained hyperglycaemia or loss of glycaemic control.' },
      { q: 'Describe the probe-to-bone test.', a: 'A blunt sterile probe reaching hard gritty bone through the ulcer strongly suggests osteomyelitis in a high-risk patient.' },
      { q: 'How long do radiographic changes of osteomyelitis take?', a: '2 to 3 weeks — a normal early film does not exclude it.' },
      { q: 'Why is a total contact cast preferred?', a: 'It distributes plantar pressure and cannot be removed — removable devices fail because they get removed.' },
      { q: 'How do you distinguish Charcot from infection at the bedside?', a: 'Elevate the leg for 5 to 10 minutes — in Charcot the redness and swelling subside substantially.' },
      { q: 'Why do ulcers form under the metatarsal heads?', a: 'Motor neuropathy wastes intrinsic muscles, causing claw toes and prominent metatarsal heads that concentrate pressure.' },
      { q: 'Which vessels does diabetic arterial disease affect?', a: 'Infrapopliteal tibial and peroneal vessels — distal and diffuse, with foot arteries often relatively spared.' },
      { q: 'What samples should be sent for culture?', a: 'Deep tissue or curettage after debridement, and bone biopsy for osteomyelitis — never superficial swabs.' },
      { q: 'Why is callus over a pressure point important?', a: 'It is a pre-ulcer — it increases local pressure and causes tissue breakdown beneath it.' },
    ],
    checks: [
      'Ulcer probed to bone and result documented',
      'Monofilament testing performed at standard sites',
      'Both feet examined including between the toes and the heels',
      'Footwear inspected',
      'ABPI interpreted with caution; toe pressures or waveforms obtained',
      'Formal vascular assessment arranged despite palpable pulses',
      'Deep tissue or bone sent for culture, not a superficial swab',
      'Radiograph obtained, with MRI if suspicion persists',
      'Gas in tissues and necrotising infection excluded',
      'Glucose, ketones, CRP and renal function checked',
      'Multidisciplinary diabetic foot team referral within 24 hours',
      'Urgent surgical debridement if abscess, necrosis or gas',
      'Offloading prescribed and its practicality addressed',
      'Revascularisation considered early',
      'Glycaemic control optimised and smoking addressed',
      'Prevention advice given and podiatry follow-up arranged',
    ],
    related: ['diabetic_foot_assessment_and_the_at_risk_foot'],
  },

  {
    id: 'AS-CASE-0050',
    type: 'case',
    specialty: 'Surgery — Orthopaedics',
    teaching_case: true,
    title: 'CASE: A 6-Year-Old Who Fell Off the Monkey Bars — Elbow Deformity',
    short: 'Case: paediatric supracondylar fracture',
    summary:
      'A child with a displaced supracondylar humeral fracture. Teaches the Gartland classification, why the anterior interosseous nerve is tested by a hand sign rather than sensation, the pink pulseless hand dilemma, and why this fracture causes Volkmann contracture.',
    domains: ['orthopaedics', 'paediatrics', 'trauma', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case supracondylar fracture', 'paediatric elbow fracture case', 'gartland classification',
      'pink pulseless hand', 'anterior interosseous nerve palsy', 'ok sign test',
      'volkmann ischaemic contracture', 'anterior humeral line', 'fat pad sign',
      'cubitus varus', 'gunstock deformity',
    ],
    terms: [
      'case', 'supracondylar fracture', 'gartland classification', 'anterior humeral line',
      'fat pad sign', 'sail sign', 'anterior interosseous nerve', 'ok sign',
      'median nerve', 'radial nerve', 'ulnar nerve', 'brachial artery',
      'pink pulseless hand', 'volkmann ischaemic contracture', 'compartment syndrome',
      'closed reduction percutaneous pinning', 'cubitus varus', 'baumann angle',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '6-year-old boy who fell onto an outstretched hand from the monkey bars 2 hours ago. His right elbow is swollen and deformed, he will not move it, and he is holding it against his body.',

      section_1_why_this_fracture_matters_disproportionately: {
        the_statement:
          'THE SUPRACONDYLAR HUMERAL FRACTURE IS THE COMMONEST ELBOW FRACTURE IN CHILDREN AND THE ONE WITH THE HIGHEST RATE OF NEUROVASCULAR COMPLICATIONS. THE BRACHIAL ARTERY AND THE MEDIAN, RADIAL AND ULNAR NERVES ALL CROSS THE FRACTURE SITE, AND THE SHARP PROXIMAL FRAGMENT DISPLACES ANTERIORLY DIRECTLY INTO THEM.',
        the_anatomy_that_creates_the_problem: 'THE SUPRACONDYLAR REGION IS THE THINNEST PART OF THE DISTAL HUMERUS, where the olecranon and coronoid fossae are separated by only a thin plate of bone. IT IS THEREFORE THE WEAKEST POINT AND FRACTURES READILY. The brachialis muscle lies anteriorly, and the neurovascular bundle sits directly in front of it.',
        the_end_point_that_must_never_be_reached:
          'VOLKMANN ISCHAEMIC CONTRACTURE — the flexed, clawed, functionless forearm and hand that results from untreated forearm compartment syndrome after this fracture. IT IS PERMANENT, DEVASTATING IN A CHILD WITH A LIFETIME AHEAD, AND ENTIRELY PREVENTABLE. It is the reason every element of the assessment below is emphasised so heavily.',
      },

      section_2_clerking_and_examination: {
        the_mechanism: 'FALL ONTO AN OUTSTRETCHED HAND WITH THE ELBOW HYPEREXTENDED — this causes the EXTENSION type, which accounts for roughly 97 to 98% and displaces the distal fragment POSTERIORLY. A fall onto a FLEXED elbow causes the rare FLEXION type, which displaces anteriorly and more often injures the ULNAR nerve.',
        the_history: 'Time and mechanism of injury · which hand is dominant · when he last ate and drank, since he is going to theatre · any other injuries · and SAFEGUARDING — a history inconsistent with the injury or with the child developmental stage, or a delayed presentation, must prompt the thought and the appropriate action.',
        examination: {
          the_approach_to_a_frightened_child: 'GIVE ANALGESIA FIRST. A child in severe pain cannot be examined and will not cooperate, and repeated painful examination destroys the trust you need for the rest of the assessment. Intranasal diamorphine or fentanyl works quickly without a cannula and is well suited to this. Then examine calmly, with the parent present, using play and distraction.',
          the_limb: 'Swollen, deformed elbow held in slight flexion. LOOK FOR PUCKERING OR DIMPLING OF THE SKIN ANTERIORLY — THE "PUCKER SIGN" — WHICH INDICATES THAT THE PROXIMAL FRAGMENT HAS BUTTONHOLED THROUGH THE BRACHIALIS MUSCLE AND IS TETHERED IN THE SUBCUTANEOUS TISSUE. IT PREDICTS A DIFFICULT OR IMPOSSIBLE CLOSED REDUCTION AND WARNS OF ENTRAPPED NEUROVASCULAR STRUCTURES. Check the skin for open injury. Examine the whole limb including the wrist and shoulder — ipsilateral forearm fractures occur and are missed.',
          vascular_assessment: 'RADIAL PULSE — present or absent. CAPILLARY REFILL. HAND COLOUR AND TEMPERATURE. Use a handheld Doppler if the pulse is impalpable. DOCUMENT ALL OF IT BEFORE AND AFTER ANY MANIPULATION OR SPLINTING, WITH THE TIME.',
          the_neurological_examination_that_is_usually_done_badly: {
            the_problem: 'Testing sensation in a frightened 6-year-old is unreliable, and the most commonly injured nerve has NO SENSORY COMPONENT AT ALL.',
            the_anterior_interosseous_nerve: {
              what_it_is: 'A PURELY MOTOR BRANCH OF THE MEDIAN NERVE. IT HAS NO CUTANEOUS SENSORY SUPPLY, SO ITS INJURY CANNOT BE DETECTED BY TESTING SENSATION.',
              why_it_matters: 'IT IS THE MOST COMMONLY INJURED NERVE IN EXTENSION-TYPE SUPRACONDYLAR FRACTURES, AND IT IS THE ONE MOST OFTEN MISSED, PRECISELY BECAUSE PEOPLE TEST SENSATION.',
              how_to_test_it: 'ASK THE CHILD TO MAKE AN "OK" SIGN — a circle with the thumb and index finger. THIS REQUIRES FLEXOR POLLICIS LONGUS (thumb interphalangeal joint) AND FLEXOR DIGITORUM PROFUNDUS TO THE INDEX FINGER (distal interphalangeal joint), BOTH SUPPLIED BY THE ANTERIOR INTEROSSEOUS NERVE. IF THE NERVE IS INJURED, THE CHILD CANNOT FLEX THE TIPS AND MAKES A FLAT, PINCH-LIKE SHAPE INSTEAD OF A ROUND O. IT IS A GAME A SIX-YEAR-OLD WILL PLAY, WHICH IS EXACTLY WHY IT WORKS.',
            },
            the_other_nerves: 'RADIAL — ask the child to give a THUMBS UP or extend the wrist and fingers; test sensation in the first dorsal web space. ULNAR — ask them to CROSS THEIR FINGERS or spread them apart against resistance; test sensation over the little finger. MEDIAN PROPER — thumb abduction (palm up, thumb to the ceiling) and sensation over the index pulp. USE GAMES, NOT INSTRUCTIONS.',
          },
          compartment_assessment: 'FOREARM COMPARTMENT SYNDROME IS THE FEARED COMPLICATION. Assess for a tense forearm and PAIN ON PASSIVE EXTENSION OF THE FINGERS. IN CHILDREN, THE CLASSIC SIGNS ARE UNRELIABLE — the more sensitive indicators are the "THREE As": INCREASING ANALGESIA REQUIREMENT, ANXIETY AND AGITATION. A CHILD WHO NEEDS ESCALATING PAIN RELIEF AND IS BECOMING DISTRESSED IS DEVELOPING COMPARTMENT SYNDROME UNTIL PROVEN OTHERWISE.',
        },
      },

      section_3_imaging_and_classification: {
        radiographs: 'TRUE AP AND LATERAL VIEWS OF THE ELBOW. Obtaining a true lateral in a painful elbow is difficult and a poor lateral will hide displacement — it is worth the effort and the analgesia to get it right.',
        the_anterior_humeral_line: {
          what_it_is: 'A LINE DRAWN ALONG THE ANTERIOR CORTEX OF THE HUMERUS ON THE LATERAL VIEW, CONTINUED DISTALLY.',
          the_normal: 'IT SHOULD PASS THROUGH THE MIDDLE THIRD OF THE CAPITELLUM.',
          the_abnormal: 'IF IT PASSES ANTERIOR TO THE CAPITELLUM, OR THROUGH THE ANTERIOR THIRD, THE DISTAL FRAGMENT IS POSTERIORLY DISPLACED — INDICATING AN EXTENSION-TYPE SUPRACONDYLAR FRACTURE. IT IS THE SINGLE MOST USEFUL LINE ON A PAEDIATRIC ELBOW FILM AND IT DETECTS SUBTLE FRACTURES THAT ARE OTHERWISE INVISIBLE.',
          the_age_caveat: 'In children under about 4 the capitellum is small and incompletely ossified, so the line is less reliable — interpret with the clinical picture.',
        },
        the_fat_pad_signs: 'A POSTERIOR FAT PAD SIGN — a lucency behind the distal humerus — IS ALWAYS ABNORMAL AND INDICATES AN INTRA-ARTICULAR EFFUSION, WHICH IN TRAUMA MEANS A FRACTURE EVEN IF NO FRACTURE LINE IS VISIBLE. An enlarged ANTERIOR fat pad — the "SAIL SIGN" — is also suggestive; a small anterior fat pad can be normal. A CHILD WITH A POSTERIOR FAT PAD SIGN AND NO VISIBLE FRACTURE HAS AN OCCULT FRACTURE AND IS TREATED AS SUCH.',
        the_gartland_classification: {
          type_i: 'UNDISPLACED. The anterior humeral line is normal. TREATMENT: above-elbow cast at roughly 90 degrees for about 3 weeks, with clinical and radiographic follow-up.',
          type_ii: 'DISPLACED WITH AN INTACT POSTERIOR CORTEX — the fragment is angulated but still hinged posteriorly. TREATMENT: closed reduction, usually with percutaneous pinning, though some minimally angulated type II fractures are casted. It is a judgement based on the degree of angulation and rotation.',
          type_iii: 'COMPLETELY DISPLACED WITH NO CORTICAL CONTINUITY. TREATMENT: URGENT CLOSED REDUCTION AND PERCUTANEOUS PINNING, or open reduction if closed reduction fails.',
          type_iv: 'A later addition — displaced and UNSTABLE IN BOTH FLEXION AND EXTENSION, identified under anaesthesia.',
          his_fracture: 'GARTLAND TYPE III.',
        },
        the_other_lines_worth_knowing: 'THE RADIOCAPITELLAR LINE — a line along the radial neck should pass through the capitellum ON EVERY VIEW; if it does not, the radial head is dislocated, which is how a MONTEGGIA injury is missed. BAUMANN ANGLE on the AP view assesses the coronal alignment and is used to judge reduction quality intraoperatively.',
      },

      section_4_management: {
        a_immediate: 'ANALGESIA FIRST — intranasal or intravenous, adequately dosed by weight. SPLINT THE ELBOW IN ABOUT 20 TO 30 DEGREES OF FLEXION — DO NOT FLEX IT BEYOND ABOUT 40 DEGREES, BECAUSE HYPERFLEXION KINKS THE BRACHIAL ARTERY AND RAISES COMPARTMENT PRESSURE, AND IS A RECOGNISED CAUSE OF IATROGENIC VASCULAR COMPROMISE. Elevate. Nil by mouth. Bloods and consent. REFER TO ORTHOPAEDICS IMMEDIATELY. Document neurovascular status before and after splinting with the time.',
        b_the_pink_pulseless_hand_which_is_the_classic_dilemma: {
          the_scenario: 'AFTER REDUCTION AND PINNING, THE HAND IS WARM AND WELL PERFUSED WITH GOOD CAPILLARY REFILL, BUT THE RADIAL PULSE IS NOT PALPABLE.',
          why_it_happens: 'THE COLLATERAL CIRCULATION AROUND THE ELBOW IS RICH ENOUGH TO PERFUSE THE HAND EVEN IF THE BRACHIAL ARTERY IS OCCLUDED, KINKED OR IN SPASM.',
          the_management: 'A WARM, WELL-PERFUSED PINK PULSELESS HAND AFTER ANATOMICAL REDUCTION IS GENERALLY OBSERVED CLOSELY IN HOSPITAL, WITH FREQUENT NEUROVASCULAR ASSESSMENT, BECAUSE THE PULSE OFTEN RETURNS OVER HOURS TO DAYS. IT IS ADMITTED, NOT DISCHARGED.',
          when_it_is_an_emergency: 'A WHITE, COLD, PULSELESS HAND — OR A PINK PULSELESS HAND THAT DETERIORATES, OR THAT PERSISTS WITH SIGNS OF INADEQUATE PERFUSION OR MEDIAN NERVE DYSFUNCTION — REQUIRES URGENT VASCULAR EXPLORATION. A COLD PULSELESS HAND IS AN EMERGENCY REGARDLESS.',
          the_essential_first_step: 'IF THE HAND IS POORLY PERFUSED BEFORE REDUCTION, REDUCE THE FRACTURE FIRST. MOST VASCULAR COMPROMISE IS CAUSED BY THE DISPLACED FRAGMENT AND RESOLVES WITH REDUCTION. DO NOT REFER FOR ANGIOGRAPHY BEFORE REDUCING THE FRACTURE — reduction is both the diagnostic and the therapeutic manoeuvre.',
        },
        c_surgery: {
          the_operation: 'CLOSED REDUCTION AND PERCUTANEOUS KIRSCHNER WIRE FIXATION under general anaesthesia and image intensifier. Wires are usually placed laterally, or crossed medially and laterally.',
          the_ulnar_nerve_point: 'A MEDIAL WIRE RISKS INJURING THE ULNAR NERVE, which lies in the cubital tunnel just behind the medial epicondyle. Lateral-only fixation avoids this but may be less stable in some patterns. Where a medial wire is used, techniques such as a small open incision to protect the nerve are employed. IATROGENIC ULNAR NERVE INJURY IS A RECOGNISED COMPLICATION AND IS SPECIFICALLY LOOKED FOR AFTERWARDS.',
          open_reduction: 'Required if closed reduction fails, if there is an open fracture, if the neurovascular bundle is entrapped, or where the pucker sign indicates buttonholing through brachialis.',
          the_timing: 'TYPE III FRACTURES WITH INTACT PERFUSION AND NO NEUROLOGICAL DEFICIT MAY BE MANAGED ON A PLANNED URGENT LIST RATHER THAN OVERNIGHT, and evidence suggests a short delay in that specific group does not worsen outcome. HOWEVER, VASCULAR COMPROMISE, AN OPEN FRACTURE, THE PUCKER SIGN OR SUSPECTED COMPARTMENT SYNDROME MEAN IMMEDIATE SURGERY. THE DISTINCTION IS THE PERFUSION AND THE NEUROLOGY, NOT THE GARTLAND GRADE ALONE.',
        },
        d_postoperative: 'ADMIT AND OBSERVE — hourly neurovascular observations initially. Elevate the limb. WATCH FOR COMPARTMENT SYNDROME using the three As: increasing ANALGESIA requirement, ANXIETY and AGITATION. Above-elbow cast or backslab in about 60 to 90 degrees of flexion, avoiding hyperflexion. Wires are usually removed at 3 to 4 weeks in clinic. Radiographs to confirm maintenance of reduction.',
        e_the_complications_and_the_honest_prognosis: {
          neurological: 'MOST NERVE INJURIES ARE NEUROPRAXIAS AND RECOVER SPONTANEOUSLY OVER WEEKS TO MONTHS — commonly quoted as within 2 to 3 months, sometimes up to 6. Reassure the family, but document the deficit carefully and follow it up, and consider exploration if there is no recovery by around 3 to 6 months or if the deficit appeared AFTER surgery.',
          cubitus_varus: {
            what_it_is: 'THE "GUNSTOCK DEFORMITY" — the forearm deviates medially, giving a characteristic appearance.',
            the_cause: 'MALUNION IN VARUS FROM AN INADEQUATE REDUCTION — IT IS A COMPLICATION OF TREATMENT, NOT OF GROWTH ARREST. IT DOES NOT REMODEL, because the deformity is largely rotational and in the plane of least remodelling potential at a physis that contributes little to humeral growth.',
            why_it_matters: 'It is mainly a COSMETIC deformity but is disliked, and it is associated with later lateral condyle fracture and posterolateral rotatory instability. THE POINT IS THAT AN ACCURATE REDUCTION AT THE FIRST OPERATION IS WHAT PREVENTS IT — this is why Baumann angle is checked intraoperatively.',
          },
          compartment_syndrome_and_volkmann: 'The catastrophic outcome. Prevented by adequate reduction, avoiding hyperflexion in splinting, and by taking escalating analgesia requirement seriously.',
          stiffness: 'Some loss of terminal extension is common and usually improves. FORMAL PHYSIOTHERAPY IS OFTEN UNNECESSARY IN YOUNG CHILDREN, WHO REGAIN MOVEMENT THROUGH NORMAL PLAY, and forced passive stretching can worsen stiffness and cause heterotopic ossification. Advise gentle use rather than aggressive therapy unless specialist input says otherwise.',
        },
      },

      section_5_teaching_points: {
        bonus_1_the_ok_sign_tests_the_nerve_that_has_no_sensation:
          'The ANTERIOR INTEROSSEOUS NERVE is purely motor, so its injury cannot be found by testing sensation — and it is the most commonly injured nerve in this fracture. Ask the child to make an OK sign: it needs flexor pollicis longus and flexor digitorum profundus to the index finger. A flat pinch instead of a round O means the nerve is injured. It is a game a six-year-old will play, which is why it works.',
        bonus_2_the_anterior_humeral_line:
          'On the lateral view it should pass through the MIDDLE third of the capitellum. If it passes anteriorly, the distal fragment is displaced posteriorly. It is the single most useful line on a paediatric elbow film and finds fractures that are otherwise invisible.',
        bonus_3_a_posterior_fat_pad_sign_is_always_abnormal:
          'It indicates an intra-articular effusion, which after trauma means a fracture even with no visible fracture line. That child has an occult fracture and is treated as such.',
        bonus_4_do_not_hyperflex_the_splinted_elbow:
          'Flexion beyond about 40 degrees kinks the brachial artery and raises compartment pressure. Splint at 20 to 30 degrees. This is a recognised cause of iatrogenic vascular compromise, produced by the instinct to make the elbow look normal.',
        bonus_5_reduce_the_fracture_before_investigating_the_pulse:
          'Most vascular compromise is caused by the displaced fragment and resolves with reduction. Reduction is both the diagnostic and the therapeutic manoeuvre — do not send a child for angiography with an unreduced fracture.',
        bonus_6_the_pink_pulseless_hand_is_admitted_not_discharged:
          'Rich collateral circulation can perfuse the hand with an occluded brachial artery. A warm, well-perfused pink pulseless hand after anatomical reduction is observed closely with frequent assessment. A WHITE, COLD pulseless hand, or deterioration, means urgent exploration.',
        bonus_7_the_three_as_of_paediatric_compartment_syndrome:
          'Classic signs are unreliable in children. Increasing ANALGESIA requirement, ANXIETY and AGITATION are the more sensitive indicators. A child needing escalating pain relief and becoming distressed is developing compartment syndrome until proven otherwise.',
        trap_1: 'The PUCKER SIGN means the fragment has buttonholed through brachialis — it predicts failed closed reduction and warns of entrapped structures.',
        trap_2: 'Give analgesia BEFORE examining — a child in severe pain cannot be assessed and repeated painful examination destroys cooperation.',
        trap_3: 'Cubitus varus is a complication of INADEQUATE REDUCTION and does not remodel — accuracy at the first operation prevents it.',
        trap_4: 'Check the radiocapitellar line on every view — it should always pass through the capitellum, or a Monteggia injury is being missed.',
        trap_5: 'A medial wire risks the ulnar nerve — check its function specifically after surgery.',
        trap_6: 'Avoid forced passive stretching — children regain movement through play, and forcing it worsens stiffness.',
        trap_7: 'Consider safeguarding if the history is inconsistent with the injury or the presentation is delayed.',
        one_line_summary: 'Gartland III supracondylar fracture. Analgesia first, ask him to make an OK sign to test the purely motor anterior interosseous nerve, splint at 20 to 30 degrees and never hyperflex — and if the hand is poorly perfused, reduce the fracture before you investigate the pulse.',
      },
    },
    warnings: [
      'TEST THE ANTERIOR INTEROSSEOUS NERVE WITH THE OK SIGN — it is purely motor and cannot be found by testing sensation.',
      'DO NOT HYPERFLEX THE SPLINTED ELBOW — beyond about 40 degrees kinks the brachial artery and raises compartment pressure.',
      'REDUCE THE FRACTURE BEFORE INVESTIGATING THE PULSE — most vascular compromise resolves with reduction.',
      'A WHITE, COLD PULSELESS HAND IS AN EMERGENCY requiring urgent exploration.',
      'A PINK PULSELESS HAND after anatomical reduction is ADMITTED and observed closely, never discharged.',
      'THE THREE As of paediatric compartment syndrome — increasing ANALGESIA, ANXIETY and AGITATION — are more sensitive than the classic signs.',
      'A POSTERIOR FAT PAD SIGN IS ALWAYS ABNORMAL — an effusion after trauma means a fracture even with no visible line.',
      'The ANTERIOR HUMERAL LINE should pass through the MIDDLE third of the capitellum.',
      'THE PUCKER SIGN indicates buttonholing through brachialis — closed reduction will likely fail and structures may be entrapped.',
      'GIVE ANALGESIA BEFORE EXAMINING — a child in pain cannot be assessed and repeated painful examination destroys cooperation.',
      'DOCUMENT NEUROVASCULAR STATUS BEFORE AND AFTER any manipulation or splinting, with the time.',
      'CUBITUS VARUS IS A COMPLICATION OF INADEQUATE REDUCTION and does not remodel.',
      'A MEDIAL WIRE RISKS THE ULNAR NERVE — check its function specifically after surgery.',
      'CHECK THE RADIOCAPITELLAR LINE on every view or a Monteggia injury will be missed.',
      'AVOID FORCED PASSIVE STRETCHING — children regain movement through play, and forcing it worsens stiffness.',
      'CONSIDER SAFEGUARDING if the history is inconsistent with the injury or presentation is delayed.',
      'Management here is a teaching example. Follow local paediatric orthopaedic guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Surgical timing, wire configuration and casting positions vary between units.',
      'Management of the pink pulseless hand remains debated and requires senior paediatric orthopaedic and vascular input.',
    ],
    cards: [
      { q: 'How do you test the anterior interosseous nerve?', a: 'Ask the child to make an OK sign — it needs FPL and FDP to the index. A flat pinch means injury.' },
      { q: 'Why can AIN injury not be found by testing sensation?', a: 'It is a purely motor branch of the median nerve with no cutaneous supply.' },
      { q: 'Where should the anterior humeral line pass?', a: 'Through the middle third of the capitellum on the lateral view.' },
      { q: 'What does a posterior fat pad sign mean?', a: 'An intra-articular effusion — always abnormal, and after trauma it means a fracture even with no visible line.' },
      { q: 'Give the Gartland classification.', a: 'I undisplaced; II displaced with intact posterior cortex; III completely displaced; IV unstable in both flexion and extension.' },
      { q: 'At what angle should the elbow be splinted, and why?', a: '20 to 30 degrees — hyperflexion kinks the brachial artery and raises compartment pressure.' },
      { q: 'What is the pucker sign?', a: 'Skin dimpling from the proximal fragment buttonholing through brachialis — predicts failed closed reduction.' },
      { q: 'How is a pink pulseless hand managed?', a: 'Admit and observe closely after anatomical reduction — the pulse often returns. A white cold hand needs urgent exploration.' },
      { q: 'What should be done first if the hand is poorly perfused?', a: 'Reduce the fracture — most compromise is caused by the displaced fragment.' },
      { q: 'Name the three As of paediatric compartment syndrome.', a: 'Increasing Analgesia requirement, Anxiety and Agitation.' },
      { q: 'What is cubitus varus and what causes it?', a: 'Gunstock deformity from malunion in varus after inadequate reduction — it does not remodel.' },
      { q: 'What is Volkmann ischaemic contracture?', a: 'Permanent flexed clawed forearm and hand from untreated forearm compartment syndrome — entirely preventable.' },
      { q: 'Which nerve is at risk from a medial wire?', a: 'The ulnar nerve, in the cubital tunnel behind the medial epicondyle.' },
    ],
    checks: [
      'Analgesia given before examination',
      'Pucker sign looked for',
      'Radial pulse, capillary refill, colour and temperature documented with the time',
      'OK sign tested for anterior interosseous nerve',
      'Radial, ulnar and median nerve function tested using games',
      'Whole limb examined including wrist and shoulder',
      'Elbow splinted at 20 to 30 degrees, NOT hyperflexed',
      'Neurovascular status reassessed and documented after splinting',
      'True AP and lateral radiographs obtained',
      'Anterior humeral line, radiocapitellar line and fat pads assessed',
      'Gartland grade assigned',
      'Orthopaedics referred immediately',
      'Fracture reduced before any vascular investigation if perfusion is poor',
      'Admitted with hourly neurovascular observations',
      'Compartment syndrome monitored using the three As',
      'Ulnar nerve function checked after surgery if a medial wire was used',
      'Safeguarding considered',
    ],
    related: ['paediatric_fractures_and_the_growing_skeleton'],
  },
];
