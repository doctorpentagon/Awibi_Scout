/**
 * CASE SCENARIOS — Necrotising fasciitis and lupus nephritis.
 *
 * Batch 3, part 5 — closes the batch at case 30.
 */

export default [
  {
    id: 'AS-CASE-0029',
    type: 'case',
    specialty: 'Medicine — Dermatology',
    teaching_case: true,
    title: 'CASE: A Leg That Hurts Far More Than It Looks',
    short: 'Case: necrotising fasciitis versus cellulitis',
    summary:
      'A 54-year-old diabetic with a leg that looks like cellulitis but hurts out of all proportion. Teaches the one discriminating symptom, why the LRINEC score must not be used to rule out, and why the diagnosis is made in theatre rather than on a scan.',
    domains: ['dermatology', 'general_surgery', 'emergency_medicine', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case necrotising fasciitis', 'nec fasc case', 'cellulitis versus necrotising fasciitis',
      'pain out of proportion', 'lrinec score', 'finger test', 'dishwater pus',
      'fournier gangrene', 'gas gangrene', 'flesh eating',
    ],
    terms: [
      'case', 'necrotising fasciitis', 'necrotising soft tissue infection', 'cellulitis',
      'pain out of proportion', 'lrinec', 'finger test', 'dishwater pus', 'crepitus',
      'fournier gangrene', 'group a streptococcus', 'clindamycin', 'eagle effect',
      'toxic shock syndrome', 'debridement', 'hyperbaric oxygen',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '54-year-old man with type 2 diabetes, 36 hours of increasing pain, redness and swelling of the right lower leg after a minor scratch gardening. The leg looks like cellulitis, but he is in agony and has needed three doses of morphine.',

      section_1_clerking: {
        the_symptom_that_is_the_whole_case: {
          pain_out_of_proportion_to_the_visible_findings:
            'THE SINGLE MOST IMPORTANT DISCRIMINATING FEATURE. In cellulitis, pain is proportionate to the redness and swelling and settles with simple analgesia. IN NECROTISING FASCIITIS THE PAIN IS SEVERE, RELENTLESS AND POORLY RESPONSIVE TO OPIOIDS, WHILE THE SKIN STILL LOOKS RELATIVELY UNIMPRESSIVE. THE INFECTION IS IN THE FASCIAL PLANE BENEATH THE SKIN, so the visible surface lags far behind the destruction underneath.',
          why_it_is_so_easily_dismissed:
            'The clinician looks at a red leg, sees cellulitis, and treats the pain as low pain threshold or anxiety. THE MISMATCH BETWEEN THE PATIENT DISTRESS AND THE APPEARANCE IS THE DIAGNOSIS, NOT AN INCONVENIENCE. A patient needing repeated opioids for what looks like straightforward cellulitis should be assumed to have a necrotising infection until a surgeon says otherwise.',
          the_late_paradox: 'As the infection destroys the cutaneous nerves, THE AREA MAY BECOME ANAESTHETIC. Skin that is numb within an area of severe pain is an ominous late sign — and it can be misread as improvement.',
        },
        history:
          'Minor scratch on the shin 3 days ago while gardening. Redness began 36 hours ago and has SPREAD RAPIDLY — his wife marked the edge with a pen last night and it has advanced several centimetres since. Fever and rigors. He describes the pain as the worst he has experienced, unrelieved by morphine. In the last few hours he has become confused and his urine output has fallen.',
        the_features_that_should_raise_the_alarm: 'PAIN OUT OF PROPORTION · RAPID PROGRESSION over hours, with a marked border that visibly advances · SYSTEMIC TOXICITY out of keeping with a simple skin infection — fever, tachycardia, hypotension, confusion · failure to improve on appropriate antibiotics · TENSE OEDEMA extending beyond the erythema · and the later signs of skin discolouration, bullae, crepitus and anaesthesia.',
        risk_factors_to_ask_about: 'DIABETES, present in a large proportion of cases · immunosuppression including steroids and chemotherapy · chronic kidney or liver disease · alcohol dependence · intravenous drug use · obesity · peripheral vascular disease · recent surgery or trauma, including trivial injury · VARICELLA in children · and NSAID use, which may mask early inflammatory signs and has been associated with delayed presentation. NOTE THAT A SUBSTANTIAL MINORITY HAVE NO RISK FACTORS AND NO OBVIOUS PORTAL OF ENTRY.',
        vitals: 'BP 86/48 mmHg. Pulse 132. Respiratory rate 28. Temperature 38.9. Saturation 95%. GCS 14, confused. Glucose 18.6. Lactate 5.2 mmol/L. Urine output 15 mL in the last hour.',
        the_vitals_interpretation: 'HE IS IN SEPTIC SHOCK. A patient with a "cellulitis" who is shocked does not have cellulitis.',
        examination: {
          the_leg: 'Erythema over the anterior shin extending to the knee, with a poorly demarcated edge — CELLULITIS USUALLY HAS A REASONABLY DEFINED BORDER; NECROTISING INFECTION OFTEN DOES NOT. TENSE, WOODY OEDEMA EXTENDING WELL BEYOND THE ERYTHEMA — a very important sign, because the induration follows the fascial spread rather than the skin. Two small DUSKY VIOLACEOUS PATCHES. Exquisite tenderness over the whole compartment.',
          the_late_signs_and_why_waiting_for_them_is_fatal:
            'HAEMORRHAGIC BULLAE · SKIN NECROSIS AND BLACK ESCHAR · CREPITUS, the crackling of subcutaneous gas · CUTANEOUS ANAESTHESIA. THESE ARE LATE SIGNS. THEY ARE ABSENT IN THE EARLY HOURS WHEN SURGERY WOULD SAVE THE LIMB AND THE LIFE. A patient without crepitus and without bullae can still have advanced necrotising fasciitis, and waiting for these findings to "confirm" the diagnosis is the commonest fatal error.',
          mark_the_border: 'DRAW AROUND THE ERYTHEMA WITH A PEN AND WRITE THE TIME. Rapid advance over 1 to 2 hours is powerfully suggestive, and it converts a subjective impression into a documented, reviewable observation that the next clinician can act on.',
          examine_the_perineum: 'IN ANY SEPTIC PATIENT WITH ABDOMINAL, GENITAL OR PERINEAL PAIN, INSPECT THE PERINEUM AND SCROTUM. FOURNIER GANGRENE is necrotising fasciitis of the perineum, it progresses extremely fast, and it is missed because the area is not examined.',
        },
      },

      section_2_mechanism: {
        what_it_is: 'A NECROTISING SOFT TISSUE INFECTION spreading along the FASCIAL PLANES. The superficial fascia has a relatively poor blood supply and offers little resistance, so infection tracks rapidly along it — reported spread of several centimetres per hour.',
        why_the_skin_looks_deceptively_normal_early:
          'The infection begins DEEP, in the fascia, and destroys the perforating vessels that supply the overlying skin from below. The skin is therefore only secondarily affected, and by the time it becomes dusky, blistered or necrotic, THE FASCIAL DESTRUCTION UNDERNEATH IS ALREADY EXTENSIVE. The visible signs are a late report of an early event.',
        thrombosis_and_why_antibiotics_alone_cannot_work:
          'Bacterial enzymes and the inflammatory response cause THROMBOSIS OF THE SMALL VESSELS running through the fascia. That produces ischaemic necrosis of fascia, fat and eventually muscle and skin — AND IT MEANS ANTIBIOTICS CANNOT REACH THE INFECTED TISSUE, because the blood supply that would deliver them has been destroyed. THIS IS THE SINGLE MOST IMPORTANT REASON THE DISEASE IS SURGICAL: no antibiotic can treat tissue it cannot reach. Surgery is not an adjunct to the antibiotics; the antibiotics are an adjunct to the surgery.',
        the_microbiological_types: {
          type_1_polymicrobial: 'The commonest. A mixture of aerobes and anaerobes — streptococci, staphylococci, Enterobacteriaceae, Bacteroides, Clostridium. Typical in DIABETICS, the elderly and after abdominal or perineal surgery, and the usual pattern in FOURNIER GANGRENE. GAS-FORMING organisms in this group produce the crepitus.',
          type_2_monomicrobial: 'GROUP A STREPTOCOCCUS (Streptococcus pyogenes), sometimes with Staphylococcus aureus. Classically in YOUNGER, PREVIOUSLY HEALTHY people, often after minor or unnoticed trauma. It progresses extremely rapidly and frequently causes STREPTOCOCCAL TOXIC SHOCK SYNDROME through SUPERANTIGEN-mediated massive T-cell activation and cytokine release.',
          type_3: 'VIBRIO VULNIFICUS after seawater exposure or raw shellfish, particularly in liver disease — fulminant and highly lethal. Also Aeromonas in fresh water.',
          type_4: 'Fungal, particularly in the immunocompromised or after significant trauma.',
        },
      },

      section_3_differentials: {
        one_necrotising_fasciitis: 'MUST BE ASSUMED. Supporting: pain out of proportion, rapid spread, systemic toxicity and shock, induration beyond the erythema, dusky patches, diabetes.',
        two_cellulitis: 'Pain PROPORTIONATE to appearance, a better-defined border, slower progression, and the patient is systemically much less unwell. Responds to antibiotics within 24 to 48 hours. IF A "CELLULITIS" IS NOT IMPROVING ON APPROPRIATE ANTIBIOTICS, RECONSIDER THE DIAGNOSIS RATHER THAN CHANGING THE ANTIBIOTIC.',
        three_abscess: 'Localised fluctuance, less systemic upset. Needs drainage but not radical debridement. Ultrasound identifies it.',
        four_pyomyositis: 'Infection within the muscle itself, commoner in tropical settings and in HIV. Deep pain and swelling, and MRI distinguishes it.',
        five_gas_gangrene_clostridial_myonecrosis: 'Severe pain, crepitus and rapid deterioration, typically after penetrating or contaminated trauma. It involves MUSCLE primarily rather than fascia. Management is the same — immediate surgery.',
        six_deep_vein_thrombosis: 'Swelling and pain, but without the marked erythema, fever, rigors and toxicity. Consider, but do not let it delay surgical review.',
        seven_acute_compartment_syndrome: 'Pain out of proportion is also its hallmark, with pain on passive stretch. Consider after trauma or reperfusion, and remember the two can coexist.',
        eight_pyoderma_gangrenosum: 'An inflammatory ulcerating condition with undermined violaceous borders that MIMICS INFECTION AND IS MADE WORSE BY SURGERY (pathergy). It is treated with immunosuppression. It is rare, and it must never be the reason a genuine necrotising infection is not operated on — but a "necrotising infection" that worsens after each debridement, with sterile cultures, should prompt the thought.',
      },

      section_4_investigations: {
        the_governing_principle:
          'NO INVESTIGATION EXCLUDES NECROTISING FASCIITIS. THE DIAGNOSIS IS CLINICAL, AND IT IS CONFIRMED IN THEATRE. THE ROLE OF INVESTIGATION IS TO SUPPORT RESUSCITATION AND OPERATIVE PLANNING, NOT TO DECIDE WHETHER TO OPERATE. Any test that delays surgical review has done harm.',
        the_lrinec_score: {
          what_it_is: 'The LABORATORY RISK INDICATOR FOR NECROTISING FASCIITIS, using CRP, white cell count, HAEMOGLOBIN, SODIUM, CREATININE and GLUCOSE. A score of 6 or more indicates raised risk, 8 or more high risk.',
          the_critical_limitation:
            'IT WAS DEVELOPED AS A RULE-IN TOOL AND PERFORMS POORLY AS A RULE-OUT TOOL. Subsequent validation studies found SENSITIVITY AS LOW AS AROUND 50 TO 60% in some cohorts. A LOW LRINEC SCORE DOES NOT EXCLUDE NECROTISING FASCIITIS. A patient with a convincing clinical picture and a LRINEC of 3 still goes to theatre. Using it to reassure yourself and defer surgical review is a well-documented route to a death.',
          how_to_use_it_properly: 'As supporting evidence when raising the alarm, and never as permission to wait.',
        },
        bloods: 'Full blood count · CRP · UREA, CREATININE AND ELECTROLYTES including SODIUM, which is characteristically LOW · GLUCOSE · CREATINE KINASE, which is raised with muscle involvement · LACTATE, a key severity marker · clotting, since disseminated intravascular coagulation is common · liver function · blood gas · GROUP AND CROSS-MATCH, because debridement causes significant blood loss · BLOOD CULTURES before antibiotics if it causes no delay.',
        imaging: {
          the_rule: 'DO NOT DELAY SURGERY FOR IMAGING IN A PATIENT WITH A CONVINCING CLINICAL PICTURE. Imaging is for uncertain cases and for planning.',
          plain_radiograph: 'May show SUBCUTANEOUS GAS, which is highly specific — but it is present in only a minority, so its absence means nothing.',
          ct: 'More sensitive for gas and fascial thickening, and useful for extent, particularly in the abdomen and perineum. Still cannot exclude the diagnosis.',
          mri: 'The most sensitive for fascial involvement, showing deep fascial oedema and enhancement — but it TAKES TIME the patient does not have, and over-calls oedema from simple cellulitis. Rarely appropriate acutely.',
        },
        the_finger_test_and_the_operative_findings: {
          the_bedside_finger_test: 'Under local anaesthesia a small incision is made down to the deep fascia. LACK OF BLEEDING, "DISHWATER" GREY MURKY FLUID, AND THE TISSUE PLANES SEPARATING WITH MINIMAL FINGER PRESSURE — where healthy fascia resists blunt dissection — CONFIRM THE DIAGNOSIS. It is a surgical decision and procedure, not a medical ward test.',
          at_operation: 'Grey, oedematous, necrotic fascia · thrombosed vessels · absence of bleeding from the tissue · foul thin "dishwater" pus without frank purulence · easy separation of fascial planes · and muscle involvement in advanced disease. SEND TISSUE — NOT JUST SWABS — FOR URGENT GRAM STAIN, CULTURE AND HISTOLOGY. Deep tissue culture guides definitive antibiotics; a superficial swab often grows only colonisers and is misleading.',
        },
      },

      section_5_management: {
        the_three_things_that_happen_at_once: 'RESUSCITATE. GIVE ANTIBIOTICS. GET THE PATIENT TO THEATRE. THE THIRD IS THE ONE THAT DETERMINES SURVIVAL, AND IT IS THE ONE MOST OFTEN DELAYED.',
        a_call_the_surgeons_now: {
          the_rule: 'IMMEDIATE SURGICAL REVIEW BY TELEPHONE, STATING THE WORDS "I AM CONCERNED ABOUT A NECROTISING SOFT TISSUE INFECTION". Escalate to the consultant on call if there is any hesitation. TIME TO FIRST DEBRIDEMENT IS THE STRONGEST MODIFIABLE PREDICTOR OF SURVIVAL — delay beyond about 12 to 24 hours is associated with substantially higher mortality.',
          also_alert: 'Intensive care, anaesthetics, and the blood bank. Plastic surgery for later reconstruction. Depending on site, urology or general surgery for perineal disease.',
        },
        b_resuscitation: 'ABCDE. High-flow oxygen. Large-bore access. BALANCED CRYSTALLOID in 500 mL boluses with reassessment; these patients often need several litres because of massive capillary leak. Vasopressors and central access if hypotension persists — do not delay theatre to achieve a perfect blood pressure, as SOURCE CONTROL IS PART OF THE RESUSCITATION. Catheterise and monitor urine output. Correct coagulopathy and glucose. THE SEPSIS SIX within the hour.',
        c_antibiotics: {
          the_principle: 'BROAD-SPECTRUM, HIGH-DOSE, INTRAVENOUS, AND IMMEDIATELY — covering Gram-positives, Gram-negatives and anaerobes.',
          a_typical_regimen: 'A carbapenem such as MEROPENEM 1 g intravenously every 8 hours, or piperacillin with tazobactam 4.5 g every 6 hours, PLUS CLINDAMYCIN 900 mg intravenously every 8 hours. Add a glycopeptide such as VANCOMYCIN or LINEZOLID if MRSA is a concern. Follow local microbiology policy and involve them early.',
          why_clindamycin_is_specifically_added_and_not_optional: {
            the_reasons: '1. IT IS A PROTEIN SYNTHESIS INHIBITOR, so it SWITCHES OFF TOXIN PRODUCTION — including the streptococcal superantigens driving toxic shock. Beta-lactams do not do this. 2. THE EAGLE EFFECT: in a large, dense, slowly-dividing bacterial inoculum, streptococci downregulate penicillin-binding proteins, so PENICILLIN — WHICH ONLY KILLS ACTIVELY DIVIDING BACTERIA — BECOMES MUCH LESS EFFECTIVE EXACTLY WHERE THE BURDEN IS HIGHEST. Clindamycin works independently of growth phase. 3. It has good tissue penetration.',
            the_point: 'THIS IS WHY "PENICILLIN COVERS STREPTOCOCCUS SO CLINDAMYCIN IS UNNECESSARY" IS WRONG. The two do different jobs, and in this specific setting the toxin suppression and the Eagle effect make clindamycin indispensable.',
          },
        },
        d_surgery_which_is_the_treatment: {
          radical_debridement: 'ALL NECROTIC TISSUE MUST BE EXCISED BACK TO BLEEDING, HEALTHY, VIABLE TISSUE. The excision is usually FAR MORE EXTENSIVE THAN THE SKIN CHANGES SUGGEST, because the fascial disease extends well beyond the visible margin. Inadequate first debridement is a leading cause of death.',
          planned_relook: 'A SECOND-LOOK OPERATION AT 24 TO 48 HOURS IS ROUTINE, NOT A SIGN OF FAILURE. Necrosis progresses, and repeated debridement is expected — often several procedures.',
          amputation: 'Sometimes necessary to achieve source control and save life. Discuss it honestly with the patient and family beforehand where possible, because it may be decided intraoperatively.',
          the_wound_afterwards: 'Large defects managed with negative pressure wound therapy, then reconstruction with grafts or flaps once infection is controlled.',
        },
        e_adjuncts_and_an_honest_assessment: {
          intravenous_immunoglobulin: 'Proposed to neutralise streptococcal superantigens in toxic shock syndrome. Evidence is limited and inconsistent; used in some centres for streptococcal toxic shock. Reasonable to discuss, but NOT a substitute for surgery.',
          hyperbaric_oxygen: 'Theoretically attractive for anaerobic infection. Evidence is weak and largely observational, and access is limited. IT MUST NEVER DELAY OR REPLACE DEBRIDEMENT — a patient transferred for hyperbaric oxygen instead of theatre is a patient being harmed.',
          the_honest_summary: 'EARLY RADICAL SURGERY, APPROPRIATE ANTIBIOTICS WITH CLINDAMYCIN, AND GOOD CRITICAL CARE ARE THE INTERVENTIONS WITH REAL EVIDENCE. Everything else is adjunctive.',
        },
        f_afterwards: 'Prolonged critical care. Nutrition — the catabolic demand is enormous. Physiotherapy and rehabilitation over months. Reconstruction. Psychological support, since disfigurement, amputation and intensive care are all traumatic. Address the underlying risk factors, above all DIABETIC CONTROL, before discharge. Mortality remains roughly 20 to 30% even with optimal treatment, and higher with delayed surgery.',
      },

      section_6_teaching_points: {
        bonus_1_pain_out_of_proportion_is_the_diagnosis:
          'Severe, opioid-resistant pain with a relatively unimpressive-looking leg is the single most useful discriminator, because the infection is in the fascia and the skin lags behind. The mismatch between the patient distress and the appearance is the finding — not an inconvenience to be managed with more analgesia.',
        bonus_2_a_low_lrinec_score_does_not_exclude_it:
          'It was built as a rule-IN tool, and validation studies have found sensitivity as low as 50 to 60%. A convincing clinical picture with a LRINEC of 3 still goes to theatre. Using the score to defer surgical review is a documented route to a death.',
        bonus_3_antibiotics_cannot_reach_the_dead_tissue:
          'Vessel thrombosis destroys the blood supply that would deliver them. That is why this is a surgical disease: no antibiotic treats tissue it cannot reach. Surgery is not an adjunct to antibiotics — the antibiotics are an adjunct to surgery.',
        bonus_4_clindamycin_and_the_eagle_effect:
          'Clindamycin inhibits protein synthesis, so it switches off toxin production, and it works independently of bacterial growth phase. In a dense, slowly-dividing streptococcal inoculum, penicillin loses efficacy because it needs actively dividing bacteria — the EAGLE EFFECT. The two drugs do different jobs, which is why clindamycin is added rather than considered redundant.',
        bonus_5_crepitus_and_bullae_are_late_signs:
          'They are absent in the early hours when surgery would save the limb and the life. Waiting for them to confirm the diagnosis is the commonest fatal error. So is waiting for imaging.',
        bonus_6_mark_the_border_and_write_the_time:
          'Advance of several centimetres over one to two hours converts a subjective impression into documented evidence that the next clinician can act on. It costs a pen and ten seconds.',
        trap_1: 'Cutaneous ANAESTHESIA within a painful area is an ominous late sign — destroyed nerves — and can be misread as improvement.',
        trap_2: 'Induration extending well BEYOND the erythema follows the fascial spread and is an important early sign.',
        trap_3: 'A "cellulitis" that is not improving on appropriate antibiotics needs the diagnosis reconsidered, not the antibiotic changed.',
        trap_4: 'EXAMINE THE PERINEUM in any septic patient with genital, perineal or abdominal pain — Fournier gangrene is missed because nobody looks.',
        trap_5: 'Send deep TISSUE, not superficial swabs — swabs grow colonisers and mislead.',
        trap_6: 'A planned second look at 24 to 48 hours is routine, not a sign of failure.',
        trap_7: 'Hyperbaric oxygen must never delay or replace debridement.',
        one_line_summary: 'Necrotising fasciitis presenting as cellulitis with pain out of proportion. Resuscitate, meropenem plus clindamycin, and get him to theatre now — because the antibiotics cannot reach the dead tissue and the clock is the strongest predictor of survival.',
      },
    },
    warnings: [
      'PAIN OUT OF PROPORTION to the visible findings is the single most important discriminating feature — it is the diagnosis, not a low pain threshold.',
      'A LOW LRINEC SCORE DOES NOT EXCLUDE necrotising fasciitis — it is a rule-IN tool with sensitivity as low as 50 to 60%.',
      'NO INVESTIGATION EXCLUDES IT. The diagnosis is clinical and confirmed in theatre. Do not delay surgery for imaging.',
      'CREPITUS, BULLAE AND NECROSIS ARE LATE SIGNS — waiting for them is the commonest fatal error.',
      'ANTIBIOTICS CANNOT REACH THE NECROTIC TISSUE because the vessels are thrombosed — this is a SURGICAL disease.',
      'TIME TO FIRST DEBRIDEMENT is the strongest modifiable predictor of survival — call the surgeons immediately by telephone.',
      'ADD CLINDAMYCIN — it switches off toxin production and works independently of bacterial growth phase (the Eagle effect).',
      'Cutaneous ANAESTHESIA within a painful area is an ominous late sign and can be misread as improvement.',
      'Induration extending BEYOND the erythema follows the fascial spread — an important early sign.',
      'A cellulitis not improving on appropriate antibiotics needs the DIAGNOSIS reconsidered, not the antibiotic changed.',
      'EXAMINE THE PERINEUM in any septic patient with genital, perineal or abdominal pain — Fournier gangrene is missed because nobody looks.',
      'MARK THE BORDER WITH A PEN AND WRITE THE TIME — documented rapid advance is powerful evidence.',
      'Send deep TISSUE for culture, not superficial swabs, which grow colonisers.',
      'A planned second-look operation at 24 to 48 hours is routine, not a sign of failure.',
      'HYPERBARIC OXYGEN MUST NEVER DELAY OR REPLACE DEBRIDEMENT.',
      'Doses here are teaching examples. Follow local microbiology and surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Empirical antibiotic choice follows local resistance patterns; surgical strategy is determined intraoperatively.',
      'Adjuncts such as immunoglobulin and hyperbaric oxygen have weak and inconsistent evidence.',
    ],
    cards: [
      { q: 'What is the single most important discriminating feature?', a: 'Pain out of proportion to the visible findings — the infection is in the fascia and the skin lags behind.' },
      { q: 'Can a low LRINEC score exclude the diagnosis?', a: 'No — it is a rule-IN tool with sensitivity as low as 50 to 60%.' },
      { q: 'Why can antibiotics not treat this alone?', a: 'Vessel thrombosis destroys the blood supply, so antibiotics cannot reach the infected tissue.' },
      { q: 'Why is clindamycin added?', a: 'It inhibits protein synthesis, switching off toxin production, and works independently of bacterial growth phase.' },
      { q: 'What is the Eagle effect?', a: 'In a dense, slowly-dividing streptococcal inoculum, penicillin loses efficacy because it needs actively dividing bacteria.' },
      { q: 'Name four LATE signs.', a: 'Crepitus, haemorrhagic bullae, skin necrosis and cutaneous anaesthesia — all absent when surgery would still save the limb.' },
      { q: 'Describe the operative findings.', a: 'Grey necrotic fascia, thrombosed vessels, no bleeding, thin dishwater pus, and planes separating with minimal finger pressure.' },
      { q: 'Distinguish type 1 from type 2 infection.', a: 'Type 1 is polymicrobial in diabetics and after abdominal or perineal surgery; type 2 is Group A streptococcus in previously healthy people.' },
      { q: 'What is Fournier gangrene?', a: 'Necrotising fasciitis of the perineum — extremely rapid, and missed because the area is not examined.' },
      { q: 'What is the strongest modifiable predictor of survival?', a: 'Time to first debridement.' },
      { q: 'Why send tissue rather than a swab?', a: 'Superficial swabs grow colonisers; deep tissue culture guides definitive antibiotics.' },
      { q: 'Is a second-look operation a sign of failure?', a: 'No — planned relook at 24 to 48 hours is routine because necrosis progresses.' },
    ],
    checks: [
      'Pain assessed against visible findings and the mismatch documented',
      'Erythema border marked with a pen and timed',
      'Perineum examined',
      'Surgical review requested by telephone with explicit wording',
      'Consultant escalation if any hesitation',
      'Sepsis six completed within the hour',
      'Broad-spectrum antibiotics PLUS clindamycin given',
      'Blood cultures taken; deep tissue sent at operation',
      'Cross-match arranged for debridement blood loss',
      'Imaging not allowed to delay theatre',
      'Intensive care and anaesthetics alerted',
      'Second-look operation planned at 24 to 48 hours',
      'Amputation discussed honestly where possible',
      'Diabetic control and risk factors addressed before discharge',
    ],
    related: ['necrotising_soft_tissue_infection_recognition_and_source_control'],
  },

  {
    id: 'AS-CASE-0030',
    type: 'case',
    specialty: 'Medicine — Rheumatology',
    teaching_case: true,
    title: 'CASE: A Young Woman with Facial Rash, Joint Pain and Frothy Urine',
    short: 'Case: systemic lupus erythematosus with lupus nephritis',
    summary:
      'A 26-year-old with a malar rash, arthralgia and proteinuria. Teaches why the urine dipstick is the most important test in lupus, which antibody does what, why complement FALLS in active disease, and why the kidney biopsy determines the treatment.',
    domains: ['rheumatology', 'nephrology', 'immunology'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case lupus', 'sle case', 'lupus nephritis case', 'malar rash case',
      'anti dsdna', 'low complement lupus', 'hydroxychloroquine', 'mycophenolate lupus',
      'antiphospholipid syndrome', 'urine protein creatinine ratio',
    ],
    terms: [
      'case', 'systemic lupus erythematosus', 'lupus nephritis', 'malar rash', 'photosensitivity',
      'ana', 'anti-dsdna', 'anti-smith', 'complement c3 c4', 'proteinuria',
      'urine protein creatinine ratio', 'active urinary sediment', 'red cell casts',
      'hydroxychloroquine', 'mycophenolate mofetil', 'cyclophosphamide', 'belimumab',
      'antiphospholipid syndrome', 'anti-ro', 'congenital heart block',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '26-year-old woman with 4 months of joint pain, a facial rash that worsens in sunlight, fatigue and mouth ulcers, who has noticed her urine is frothy and her ankles swollen. Urine dipstick: protein 3+, blood 2+.',

      section_1_clerking: {
        history:
          'Four months of symmetrical pain and morning stiffness in the small joints of both hands, wrists and knees. A red rash across both cheeks and the bridge of her nose that flares after being outdoors and does not itch. Recurrent painless mouth ulcers. Profound fatigue. Hair thinning. For three weeks her urine has been FROTHY and her ankles swollen by the evening. She has lost weight and has had intermittent low-grade fevers.',
        reading_the_clues: {
          the_malar_rash:
            'Erythema across the cheeks and nasal bridge that CHARACTERISTICALLY SPARES THE NASOLABIAL FOLDS — the creases running from the nose to the corners of the mouth. That sparing is the discriminating detail, because the folds are shaded from ultraviolet light. It distinguishes lupus from ROSACEA and from DERMATOMYOSITIS, both of which involve the folds.',
          photosensitivity: 'A rash provoked or worsened by sunlight. Ask specifically — patients rarely connect the two.',
          painless_oral_ulcers: 'A criterion, and distinct from the PAINFUL ulcers of Behçet disease or aphthous stomatitis. Ask the patient to open their mouth and LOOK at the hard palate, where they are commonly missed.',
          the_arthritis: 'Symmetrical, small-joint, and typically NON-EROSIVE. It can cause reducible deformity through ligament laxity — JACCOUD ARTHROPATHY — without the bone erosion of rheumatoid arthritis. The radiograph therefore looks normal despite significant deformity.',
          the_frothy_urine_and_ankle_swelling:
            'THE MOST IMPORTANT PART OF THE HISTORY. Frothy urine means PROTEINURIA — protein lowers surface tension so the urine foams. Combined with oedema it indicates SIGNIFICANT RENAL INVOLVEMENT. LUPUS NEPHRITIS IS THE COMPLICATION THAT DETERMINES LONG-TERM OUTCOME, AND IT IS OFTEN CLINICALLY SILENT UNTIL IT IS ADVANCED.',
        },
        the_questions_that_must_be_asked_in_every_lupus_assessment:
          'Chest pain that is worse lying flat and better sitting forward (PERICARDITIS) or pleuritic (PLEURISY) · breathlessness · seizures, psychosis, confusion or mood change (NEUROPSYCHIATRIC LUPUS) · Raynaud phenomenon · dry eyes and mouth (associated Sjögren syndrome) · PREVIOUS THROMBOSIS OR MISCARRIAGE, because ANTIPHOSPHOLIPID SYNDROME coexists in a substantial minority and changes management entirely · and a full DRUG HISTORY, since drug-induced lupus is a genuine differential.',
        family_and_social_history: 'Family history of autoimmune disease. Note that LUPUS IS MORE COMMON AND OFTEN MORE SEVERE IN PEOPLE OF AFRICAN, AFRO-CARIBBEAN, SOUTH ASIAN AND HISPANIC ANCESTRY, WITH A HIGHER INCIDENCE OF LUPUS NEPHRITIS AND WORSE RENAL OUTCOMES. That is a reason for a lower threshold for renal assessment, not a reason for fatalism.',
        vitals: 'BP 152/94 mmHg — NEW HYPERTENSION IN A 26-YEAR-OLD IS A RENAL SIGN UNTIL PROVEN OTHERWISE. Pulse 88. Temperature 37.4. Respiratory rate 16. Saturation 98%. Weight up 4 kg in a month.',
        examination:
          'Malar rash SPARING THE NASOLABIAL FOLDS. Painless ulcers on the hard palate. Diffuse non-scarring alopecia. Symmetrical synovitis of the metacarpophalangeal and proximal interphalangeal joints with no erosive deformity. PITTING OEDEMA to mid-shin. No rash elsewhere; CHECK FOR DISCOID LESIONS, which scar, and for vasculitic lesions and livedo reticularis. Chest clear, no rub. Abdomen soft. No focal neurology. FUNDOSCOPY for hypertensive changes.',
      },

      section_2_mechanism: {
        the_core_abnormality:
          'A LOSS OF SELF-TOLERANCE TO NUCLEAR ANTIGENS. Defective clearance of apoptotic cells exposes nuclear material — DNA, histones, ribonucleoproteins — to the immune system, which forms AUTOANTIBODIES against them.',
        the_immune_complex_mechanism_which_explains_the_kidney:
          'Autoantibodies bind their nuclear antigens to form IMMUNE COMPLEXES. These circulate and DEPOSIT in small vessels and basement membranes, particularly in the GLOMERULUS, skin, joints and serosal surfaces. Deposited complexes ACTIVATE COMPLEMENT, which recruits neutrophils and causes inflammatory tissue damage. LUPUS IS THEREFORE A TYPE III (IMMUNE COMPLEX) HYPERSENSITIVITY DISEASE, and almost every manifestation follows from where the complexes land.',
        why_complement_falls_which_is_counter_intuitive: {
          the_observation: 'C3 AND C4 ARE LOW IN ACTIVE LUPUS — the opposite of what people expect from an inflammatory disease, where most markers rise.',
          the_explanation:
            'Complement is CONSUMED. Immune complexes activate the classical pathway, using up C3 and C4 faster than the liver replaces them. A FALLING COMPLEMENT THEREFORE INDICATES ACTIVE DISEASE, and a rising complement indicates response to treatment.',
          the_practical_pairing: 'RISING ANTI-dsDNA WITH FALLING C3 AND C4 IS THE CLASSIC SIGNATURE OF A LUPUS FLARE, PARTICULARLY RENAL. Track them together — either alone is less informative.',
          the_crp_point:
            'CRP IS OFTEN NORMAL OR ONLY MILDLY RAISED IN ACTIVE LUPUS, even with significant disease, while the ESR is high. THEREFORE A MARKEDLY RAISED CRP IN A LUPUS PATIENT SHOULD MAKE YOU THINK INFECTION RATHER THAN FLARE — a genuinely useful discriminator in an immunosuppressed patient where the two look identical.',
        },
        why_it_affects_young_women: 'The female-to-male ratio in the reproductive years is roughly 9 to 1. Oestrogen influences immune responses, and there is an X-chromosome gene dosage effect. It matters practically because pregnancy planning, contraception choice and teratogenic drugs are central to management from the first consultation.',
      },

      section_3_differentials: {
        one_systemic_lupus_erythematosus_with_lupus_nephritis: 'WORKING DIAGNOSIS. Supporting: young woman, malar rash sparing nasolabial folds, photosensitivity, painless oral ulcers, non-erosive symmetrical arthritis, alopecia, proteinuria with haematuria, new hypertension and oedema.',
        two_rheumatoid_arthritis: 'Symmetrical small-joint arthritis, but EROSIVE, with rheumatoid factor and anti-CCP antibodies, and without the rash, photosensitivity, oral ulcers or renal involvement.',
        three_drug_induced_lupus: 'HYDRALAZINE, ISONIAZID, PROCAINAMIDE, MINOCYCLINE and some anti-TNF agents. Typically ANTI-HISTONE ANTIBODY POSITIVE, ANTI-dsDNA NEGATIVE, with prominent serositis and arthritis but RENAL AND CNS INVOLVEMENT ARE RARE. It resolves on stopping the drug — which makes taking a drug history worth doing properly.',
        four_mixed_connective_tissue_disease_and_overlap_syndromes: 'Features of lupus, systemic sclerosis and myositis together, with high-titre ANTI-U1-RNP antibodies.',
        five_primary_glomerular_disease: 'IgA nephropathy, membranous nephropathy or minimal change disease can present with proteinuria and haematuria — but without the systemic and cutaneous features. The serology and biopsy separate them.',
        six_infection: 'HIV, hepatitis B and C, parvovirus B19, tuberculosis and infective endocarditis can all mimic lupus with rash, arthralgia, cytopenias and a positive ANA. TEST FOR THEM BEFORE COMMITTING TO IMMUNOSUPPRESSION — immunosuppressing an undiagnosed infection is a serious harm.',
        seven_thrombotic_microangiopathy: 'Consider TTP and antiphospholipid-related microangiopathy where there is thrombocytopenia with haemolysis and renal impairment. It can complicate lupus itself.',
      },

      section_4_investigations: {
        the_urine_dipstick_which_is_the_most_important_test_in_lupus: {
          the_rule:
            'CHECK A URINE DIPSTICK AT EVERY SINGLE LUPUS REVIEW, WITHOUT EXCEPTION. Lupus nephritis is frequently ASYMPTOMATIC until it is advanced, and irreversible glomerular damage accumulates silently. A dipstick costs almost nothing and is the earliest detector. THE COMMONEST FAILURE IN LUPUS CARE IS THE UNCHECKED URINE.',
          what_to_do_when_it_is_positive: 'Quantify with a URINE PROTEIN:CREATININE RATIO or albumin:creatinine ratio on a spot sample — a 24-hour collection is rarely needed. Examine the SEDIMENT under microscopy for DYSMORPHIC RED CELLS AND RED CELL CASTS, which indicate GLOMERULAR bleeding and define an ACTIVE URINARY SEDIMENT.',
          her_results: 'Protein:creatinine ratio 320 mg/mmol — heavy proteinuria in the nephrotic range. Red cell casts present. THIS IS ACTIVE LUPUS NEPHRITIS AND IT NEEDS A BIOPSY.',
        },
        the_antibodies_and_what_each_one_actually_tells_you: {
          ana: 'ANTINUCLEAR ANTIBODY. Positive in over 95% — so a NEGATIVE ANA makes lupus very unlikely and it is an excellent SCREENING test. BUT IT IS NOT SPECIFIC: it is positive in other autoimmune diseases, in infection, in thyroid disease, and in a meaningful proportion of HEALTHY PEOPLE, more often with age. A POSITIVE ANA ALONE DOES NOT DIAGNOSE LUPUS, and ordering it in a patient with non-specific fatigue generates anxiety and unnecessary referrals.',
          anti_dsdna: 'HIGHLY SPECIFIC for lupus, positive in roughly 60 to 70%. IT CORRELATES WITH DISEASE ACTIVITY, PARTICULARLY RENAL — so it is used for MONITORING, not just diagnosis. Rising titre suggests impending or active flare.',
          anti_smith: 'THE MOST SPECIFIC antibody for lupus — near-diagnostic — but present in only about 20 to 30%, so it is insensitive. Specific but rare.',
          anti_ro_and_anti_la: 'Associated with SJOGREN syndrome, subacute cutaneous lupus and PHOTOSENSITIVITY. CRITICALLY: ANTI-Ro CROSSES THE PLACENTA AND CAUSES NEONATAL LUPUS AND CONGENITAL COMPLETE HEART BLOCK. EVERY WOMAN OF CHILDBEARING AGE WITH LUPUS MUST BE TESTED, because a positive result mandates fetal cardiac monitoring in pregnancy. This is a test whose result changes obstetric care years later.',
          antiphospholipid_antibodies: 'LUPUS ANTICOAGULANT, ANTICARDIOLIPIN and ANTI-BETA-2-GLYCOPROTEIN-I. Present in a substantial minority and associated with ARTERIAL AND VENOUS THROMBOSIS and PREGNANCY MORBIDITY. TEST EVERYONE — it changes thrombotic risk, contraception advice, pregnancy management and anticoagulation decisions. Note the confusing name: LUPUS ANTICOAGULANT PROLONGS CLOTTING TESTS IN VITRO BUT CAUSES THROMBOSIS IN VIVO.',
          anti_histone: 'Suggests drug-induced lupus.',
        },
        complement_and_inflammatory_markers: 'C3 AND C4 — LOW in active disease through consumption. ESR raised. CRP OFTEN NORMAL, so a high CRP suggests infection rather than flare.',
        bloods: 'Full blood count — lupus causes ANY OR ALL CYTOPENIAS: haemolytic anaemia (check DIRECT ANTIGLOBULIN TEST), leucopenia, lymphopenia and thrombocytopenia · urea, creatinine and electrolytes with eGFR · liver function · ALBUMIN, which falls with nephrotic proteinuria · lipids, which rise in nephrotic syndrome · clotting including APTT for lupus anticoagulant · vitamin D · and infection screen including HIV, hepatitis B and C before immunosuppression.',
        renal_biopsy: {
          why_it_is_essential: 'THE BIOPSY DETERMINES THE TREATMENT. The ISN/RPS classification runs from Class I (minimal mesangial) through Class II (mesangial proliferative), Class III (FOCAL proliferative, under 50% of glomeruli), Class IV (DIFFUSE proliferative, over 50% — the commonest and most aggressive), Class V (MEMBRANOUS) to Class VI (advanced sclerosis).',
          why_the_class_matters: 'CLASS III AND IV REQUIRE AGGRESSIVE IMMUNOSUPPRESSION. Class V is managed differently, often with a focus on proteinuria control. Class VI represents irreversible scarring where immunosuppression adds toxicity without benefit. YOU CANNOT PREDICT THE CLASS FROM THE BLOOD TESTS OR THE PROTEINURIA — THE BIOPSY IS NOT AN ACADEMIC EXERCISE. It also grades ACTIVITY (potentially reversible inflammation) against CHRONICITY (irreversible scarring), which informs prognosis and how hard to push treatment.',
          when: 'Indicated for proteinuria above roughly 50 mg/mmol, an active sediment, or unexplained renal impairment. SHE MEETS THIS CLEARLY.',
        },
        other: 'Chest radiograph and echocardiogram if serositis or breathlessness. MRI brain and lumbar puncture for neuropsychiatric features.',
      },

      section_5_management: {
        a_hydroxychloroquine_for_essentially_everyone: {
          the_drug: 'HYDROXYCHLOROQUINE, typically up to 5 mg/kg of actual body weight per day — commonly 200 to 400 mg daily.',
          why_it_is_the_backbone: 'IT SHOULD BE GIVEN TO ALL PATIENTS WITH LUPUS UNLESS CONTRAINDICATED, INCLUDING THROUGHOUT PREGNANCY. It reduces flares, reduces organ damage accrual, improves lipid profile, has antithrombotic effects, and IMPROVES SURVIVAL. In lupus nephritis it improves renal outcomes. Very few drugs in rheumatology have this breadth of benefit, and it is under-prescribed.',
          monitoring: 'RETINAL TOXICITY is the main long-term concern, related to cumulative dose and duration. BASELINE AND ANNUAL OPHTHALMOLOGICAL SCREENING after about 5 years, or earlier with risk factors such as renal impairment, high dose or tamoxifen use.',
          the_adherence_point: 'It takes WEEKS TO MONTHS to work, so patients stop it believing it does nothing. Explain the timescale explicitly, and note that hydroxychloroquine LEVELS can be measured where available and are a useful objective check on adherence.',
        },
        b_treating_the_nephritis: {
          the_structure: 'INDUCTION to switch off active inflammation, then MAINTENANCE to keep it off. For Class III or IV, and for Class V with heavy proteinuria.',
          induction_options: {
            mycophenolate_mofetil: 'Typically 2 to 3 g daily in divided doses. AT LEAST AS EFFECTIVE AS CYCLOPHOSPHAMIDE with less gonadal toxicity, and it performs particularly well in patients of African and Hispanic ancestry. IT IS TERATOGENIC — effective contraception is mandatory and must be discussed before the first dose, not at the follow-up.',
            cyclophosphamide: 'The low-dose EURO-LUPUS regimen (500 mg intravenously every 2 weeks for 6 doses) is as effective as older high-dose regimens with far less toxicity, and is widely preferred. Concerns are INFERTILITY — offer fertility preservation and consider GnRH analogue protection — haemorrhagic cystitis, for which MESNA and hydration are given, infection, and later malignancy risk.',
            plus_corticosteroids: 'High-dose steroid, often with intravenous methylprednisolone pulses followed by oral prednisolone, TAPERED AS RAPIDLY AS THE DISEASE ALLOWS. Modern practice deliberately uses LOWER cumulative steroid doses, because long-term steroid toxicity causes much of the permanent damage in lupus — more than the disease in some patients.',
            newer_agents: 'BELIMUMAB (anti-BLyS) and VOCLOSPORIN added to standard therapy have both shown improved renal responses in trials and are now part of the treatment landscape where available. RITUXIMAB is used in refractory disease.',
          },
          maintenance: 'MYCOPHENOLATE or AZATHIOPRINE for at least 3 years, with low-dose steroid. AZATHIOPRINE IS THE PREFERRED AGENT IN PREGNANCY, since mycophenolate is teratogenic. CHECK TPMT ACTIVITY BEFORE STARTING AZATHIOPRINE — deficiency causes severe myelosuppression. And NEVER co-prescribe azathioprine with ALLOPURINOL without a major dose reduction; the combination causes life-threatening marrow suppression.',
        },
        c_the_renal_protection_that_is_not_immunosuppression: 'AN ACE INHIBITOR OR ANGIOTENSIN RECEPTOR BLOCKER for proteinuria and blood pressure — but NOT in pregnancy, where they are teratogenic. STRICT BLOOD PRESSURE CONTROL. Salt restriction. Statin for the dyslipidaemia of nephrotic syndrome and for cardiovascular risk. SGLT2 inhibitors are increasingly used in proteinuric chronic kidney disease. Monitor for the THROMBOSIS RISK OF NEPHROTIC SYNDROME, which arises from urinary loss of antithrombin III.',
        d_the_things_that_reduce_long_term_harm: {
          sun_protection: 'HIGH-FACTOR BROAD-SPECTRUM SUNSCREEN DAILY, protective clothing and shade. ULTRAVIOLET LIGHT TRIGGERS BOTH CUTANEOUS AND SYSTEMIC FLARES — this is disease-modifying advice, not cosmetic advice, and it is often mentioned in passing and then forgotten.',
          infection_prevention: 'Vaccinate — pneumococcal, influenza, COVID-19 — and give LIVE VACCINES ONLY BEFORE significant immunosuppression begins. Consider Pneumocystis prophylaxis with high-dose immunosuppression. Remember that a high CRP suggests infection rather than flare.',
          cardiovascular_risk: 'LUPUS SUBSTANTIALLY ACCELERATES ATHEROSCLEROSIS — young women with lupus have markedly increased myocardial infarction risk. Address blood pressure, lipids, smoking, weight and diabetes actively. This is a leading cause of late death and is systematically under-treated because the patients look too young to be at risk.',
          bone: 'Calcium, vitamin D and bone protection with prolonged steroids. Assess fracture risk.',
          cancer_screening: 'Cervical screening, since immunosuppression increases HPV-related risk.',
        },
        e_pregnancy_which_must_be_planned_not_discovered: {
          the_rule: 'DISCUSS PREGNANCY AND CONTRACEPTION AT DIAGNOSIS, NOT WHEN SHE IS PREGNANT. She is 26 with a disease that predominantly affects women of childbearing age, and half of the drugs in the treatment plan are teratogenic.',
          the_key_points: 'CONCEIVE DURING AT LEAST 6 MONTHS OF QUIESCENT DISEASE — pregnancy during active nephritis carries high maternal and fetal risk. SWITCH TERATOGENIC DRUGS in advance: STOP mycophenolate, cyclophosphamide, methotrexate and ACE inhibitors; CONTINUE hydroxychloroquine, and use AZATHIOPRINE where an immunosuppressant is needed. Add LOW-DOSE ASPIRIN to reduce pre-eclampsia risk. IF ANTIPHOSPHOLIPID ANTIBODIES ARE PRESENT, aspirin with heparin is used for pregnancy morbidity. IF ANTI-Ro IS POSITIVE, arrange FETAL CARDIAC MONITORING for congenital heart block. Avoid oestrogen-containing contraception in antiphospholipid positivity or active disease.',
        },
        f_monitoring: 'Regular review with URINE DIPSTICK AND PROTEIN:CREATININE RATIO EVERY TIME, blood pressure, full blood count, renal function, anti-dsDNA and complement. Use a validated activity index such as SLEDAI where the service does. Teach the patient to recognise a flare and to seek help early rather than waiting for the next appointment.',
      },

      section_6_teaching_points: {
        bonus_1_the_urine_dipstick_is_the_most_important_test:
          'Lupus nephritis is often silent until advanced, and irreversible glomerular scarring accumulates without symptoms. A dipstick at every review, without exception, is the earliest detector — and the uncheck ed urine is the commonest failure in lupus care.',
        bonus_2_complement_falls_in_active_disease:
          'C3 and C4 are CONSUMED by immune complex activation of the classical pathway, so they fall when the disease is active — the opposite of most inflammatory markers. Rising anti-dsDNA with falling C3 and C4 is the classic signature of a flare, particularly renal.',
        bonus_3_a_high_crp_means_infection_not_flare:
          'CRP is characteristically normal or only mildly raised in active lupus while the ESR is high. In an immunosuppressed patient where flare and infection look identical, a markedly raised CRP is a genuinely useful discriminator.',
        bonus_4_the_biopsy_determines_the_treatment:
          'You cannot predict the ISN/RPS class from blood tests or the degree of proteinuria. Class III and IV need aggressive immunosuppression, Class V is managed differently, Class VI is scarring where immunosuppression adds toxicity without benefit. The biopsy also separates reversible activity from irreversible chronicity.',
        bonus_5_the_malar_rash_spares_the_nasolabial_folds:
          'The folds are shaded from ultraviolet light. That single detail distinguishes lupus from rosacea and dermatomyositis, both of which involve them.',
        bonus_6_anti_ro_changes_obstetric_care_years_later:
          'It crosses the placenta and causes neonatal lupus and congenital complete heart block. Every woman of childbearing age must be tested, because a positive result mandates fetal cardiac monitoring in a pregnancy that may be several years away.',
        bonus_7_hydroxychloroquine_for_everyone:
          'It reduces flares and organ damage, improves lipids and thrombotic risk, improves renal outcomes and improves SURVIVAL, and it is continued throughout pregnancy. It takes weeks to months to work, so explain the timescale or patients will stop it.',
        trap_1: 'A positive ANA alone does not diagnose lupus — it occurs in infection, other autoimmune disease and healthy people. Do not order it for non-specific fatigue.',
        trap_2: 'LUPUS ANTICOAGULANT prolongs clotting tests in vitro but causes THROMBOSIS in vivo. The name is the opposite of the effect.',
        trap_3: 'Exclude HIV, hepatitis and tuberculosis before immunosuppression — they mimic lupus and immunosuppressing them is a serious harm.',
        trap_4: 'Check TPMT before azathioprine, and never combine azathioprine with allopurinol without a major dose reduction.',
        trap_5: 'Sun protection is disease-modifying advice, not cosmetic advice.',
        trap_6: 'Lupus accelerates atherosclerosis dramatically — cardiovascular risk in a young woman with lupus is under-treated because she looks too young to be at risk.',
        trap_7: 'Plan pregnancy in advance and switch teratogenic drugs BEFORE conception, not after a positive test.',
        one_line_summary: 'Systemic lupus with active nephritis. Quantify the proteinuria and examine the sediment, send anti-dsDNA and complement together, exclude infection, biopsy the kidney to determine the class — and start hydroxychloroquine, discuss contraception, and tell her sunlight is a trigger, not a detail.',
      },
    },
    warnings: [
      'CHECK A URINE DIPSTICK AT EVERY LUPUS REVIEW — lupus nephritis is silent until advanced and the unchecked urine is the commonest failure in lupus care.',
      'C3 AND C4 FALL in active disease because they are consumed — rising anti-dsDNA with falling complement is the classic flare signature.',
      'A HIGH CRP IN A LUPUS PATIENT SUGGESTS INFECTION, NOT FLARE — CRP is characteristically normal in active lupus.',
      'THE RENAL BIOPSY DETERMINES TREATMENT — the class cannot be predicted from bloods or proteinuria.',
      'A POSITIVE ANA ALONE DOES NOT DIAGNOSE LUPUS — it occurs in infection, other autoimmune disease and healthy people.',
      'TEST ANTI-Ro in every woman of childbearing age — it causes congenital complete heart block and mandates fetal cardiac monitoring.',
      'TEST ANTIPHOSPHOLIPID ANTIBODIES in everyone — they change thrombotic risk, contraception, pregnancy care and anticoagulation.',
      'LUPUS ANTICOAGULANT prolongs clotting tests in vitro but causes THROMBOSIS in vivo.',
      'GIVE HYDROXYCHLOROQUINE to essentially every patient — it reduces flares and damage and improves survival, and is continued in pregnancy.',
      'MYCOPHENOLATE, CYCLOPHOSPHAMIDE, METHOTREXATE and ACE INHIBITORS ARE TERATOGENIC — discuss contraception before the first dose.',
      'Check TPMT before azathioprine, and never combine it with allopurinol without a major dose reduction.',
      'EXCLUDE HIV, hepatitis B and C and tuberculosis before immunosuppression.',
      'SUN PROTECTION IS DISEASE-MODIFYING, not cosmetic — ultraviolet light triggers systemic flares.',
      'Lupus dramatically accelerates atherosclerosis — treat cardiovascular risk actively even in a young patient.',
      'Doses here are teaching examples. Follow your local rheumatology and nephrology protocols.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Induction and maintenance regimens, and access to belimumab, voclosporin and rituximab, vary widely.',
      'Classification criteria are for research and epidemiology; the clinical diagnosis is made on the whole picture.',
    ],
    cards: [
      { q: 'What is the most important test at every lupus review?', a: 'The urine dipstick — lupus nephritis is often silent until advanced.' },
      { q: 'Why do C3 and C4 FALL in active lupus?', a: 'They are consumed by immune complex activation of the classical complement pathway.' },
      { q: 'What does a high CRP in a lupus patient suggest?', a: 'Infection rather than flare — CRP is characteristically normal in active lupus while ESR is high.' },
      { q: 'Why is the renal biopsy essential?', a: 'The ISN/RPS class determines treatment and cannot be predicted from bloods or proteinuria.' },
      { q: 'Which class is commonest and most aggressive?', a: 'Class IV — diffuse proliferative, involving over 50% of glomeruli.' },
      { q: 'What distinguishes the malar rash from rosacea?', a: 'It SPARES the nasolabial folds, which are shaded from ultraviolet light.' },
      { q: 'What does anti-dsDNA add over ANA?', a: 'It is highly specific and correlates with disease activity, particularly renal — so it is used for monitoring.' },
      { q: 'Why must anti-Ro be tested in women of childbearing age?', a: 'It crosses the placenta and causes neonatal lupus and congenital complete heart block.' },
      { q: 'What is the paradox of the lupus anticoagulant?', a: 'It prolongs clotting tests in vitro but causes thrombosis in vivo.' },
      { q: 'Why is hydroxychloroquine given to everyone?', a: 'It reduces flares and organ damage, improves lipids and thrombotic risk, and improves survival — and is safe in pregnancy.' },
      { q: 'Which drugs must be switched before pregnancy?', a: 'Stop mycophenolate, cyclophosphamide, methotrexate and ACE inhibitors; continue hydroxychloroquine, use azathioprine.' },
      { q: 'What must be checked before azathioprine?', a: 'TPMT activity — and never combine with allopurinol without a major dose reduction.' },
      { q: 'What defines an active urinary sediment?', a: 'Dysmorphic red cells and red cell casts, indicating glomerular bleeding.' },
    ],
    checks: [
      'Urine dipstick performed and quantified with protein:creatinine ratio',
      'Urinary sediment examined for red cell casts',
      'Blood pressure measured and treated',
      'ANA, anti-dsDNA, anti-Smith, anti-Ro/La and antiphospholipid antibodies sent',
      'C3 and C4 sent alongside anti-dsDNA',
      'CRP interpreted as a marker of infection rather than flare',
      'HIV, hepatitis B and C and tuberculosis excluded before immunosuppression',
      'Renal biopsy arranged for class and activity/chronicity',
      'Hydroxychloroquine started with ophthalmology screening planned',
      'ACE inhibitor or ARB started for proteinuria if not pregnant',
      'TPMT checked before azathioprine',
      'Contraception and pregnancy planning discussed before teratogenic drugs',
      'Sun protection explained as disease-modifying',
      'Vaccinations, bone protection and cardiovascular risk addressed',
    ],
    related: ['systemic_lupus_erythematosus_diagnosis_and_organ_involvement'],
  },
];
