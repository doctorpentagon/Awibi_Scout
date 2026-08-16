/**
 * CASE SCENARIOS — Medicine: Haematology.
 *
 * Batch 2, part 4 — closes the batch at case 20.
 */

export default [
  {
    id: 'AS-CASE-0018',
    type: 'case',
    specialty: 'Medicine — Haematology',
    teaching_case: true,
    title: 'CASE: A Temperature of 38.2 Ten Days After Chemotherapy',
    short: 'Case: neutropenic sepsis',
    summary:
      'A 58-year-old ten days after chemotherapy with a single fever spike and no other symptoms. Teaches why antibiotics go in within one hour on suspicion alone, why the absence of signs is the disease rather than reassurance, and why a normal-looking patient can be dead by morning.',
    domains: ['haematology', 'oncology', 'emergency_medicine', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case neutropenic sepsis', 'febrile neutropenia case', 'neutropenic fever',
      'piperacillin tazobactam', 'tazocin neutropenic', 'masc score', 'g-csf',
      'chemotherapy fever', 'door to needle antibiotic',
    ],
    terms: [
      'case', 'neutropenic sepsis', 'febrile neutropenia', 'neutrophil count', 'nadir',
      'piperacillin tazobactam', 'meropenem', 'masc score', 'g-csf', 'filgrastim',
      'central line infection', 'tumour lysis', 'chemotherapy', 'immunosuppression',
      'sepsis six', 'lactate',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '58-year-old woman, day 10 after her second cycle of chemotherapy for breast cancer, attends because she recorded a temperature of 38.2 at home. She feels "a bit off" but has no cough, no dysuria, no diarrhoea and no localising symptoms at all.',

      section_1_clerking: {
        the_rule_that_governs_the_entire_case:
          'A TEMPERATURE OF 38.0 OR ABOVE — OR ANY UNEXPLAINED DETERIORATION — IN A PATIENT WHO HAS HAD CHEMOTHERAPY IN THE LAST SIX WEEKS IS NEUTROPENIC SEPSIS UNTIL PROVEN OTHERWISE. It is treated as an emergency BEFORE the blood count is known, because waiting for confirmation is what kills these patients.',
        history:
          'Second cycle of chemotherapy 10 days ago. Recorded 38.2 at home this afternoon using the thermometer the oncology unit gave her. No cough, no sputum, no breathlessness, no urinary symptoms, no abdominal pain, no diarrhoea, no rash, no sore throat. She has a PICC line (peripherally inserted central catheter) in the right arm which she says looks normal. She "did not want to make a fuss" and waited four hours before coming in.',
        reading_the_clues: {
          day_10: 'THE NADIR — the point at which the neutrophil count is at its lowest — is typically DAYS 7 TO 14 after chemotherapy. She is precisely in that window. Knowing the nadir means you can anticipate the risk rather than react to it.',
          no_localising_symptoms:
            'THIS IS THE MOST IMPORTANT AND MOST MISUNDERSTOOD FEATURE. Neutrophils produce the signs of infection — pus, consolidation on a chest film, redness, swelling, the exudate on a tonsil. WITHOUT NEUTROPHILS, THOSE SIGNS CANNOT FORM. A neutropenic patient with pneumonia may have a clear chest radiograph; with a urinary infection, a clean-looking urine dipstick; with an abscess, no pus. THE ABSENCE OF SIGNS IS THE DISEASE, NOT REASSURANCE.',
          she_looks_well:
            'Equally dangerous. Patients with neutropenic sepsis can look entirely well and then deteriorate into septic shock over a few hours. There is no clinical impression that safely rules it out.',
          the_picc_line: 'An indwelling central catheter is a direct route into the bloodstream and a common source. Examine the site, and take blood cultures FROM THE LINE AS WELL AS PERIPHERALLY.',
          the_four_hour_delay: 'Common, and a target for patient education. Every patient starting chemotherapy should leave with a thermometer, a 24-hour contact number, and an instruction that fever means come in NOW, not in the morning.',
        },
        past_medical_history: 'Breast cancer, on adjuvant chemotherapy. Type 2 diabetes. No other significant history.',
        drug_history: 'Chemotherapy regimen as per protocol. Metformin. DEXAMETHASONE as part of her antiemetic regimen — IMPORTANT, because steroids blunt the fever response, so a patient on steroids may be septic WITHOUT a temperature at all.',
        vitals: 'BP 108/64 mmHg (her usual is 130/80 — A FALL, even though the number looks acceptable). Pulse 112. Respiratory rate 22. Temperature 38.4. Saturation 96% on air. Capillary refill 3 seconds. Glucose 9.1.',
        the_vitals_reading: 'A raised respiratory rate is the EARLIEST and most sensitive sign of deterioration, and it is the most frequently unrecorded observation on a chart. Her blood pressure has fallen relative to HER OWN baseline. She is not yet shocked, but she is moving.',
        examination:
          'EXAMINE EVERY POTENTIAL SOURCE, knowing signs may be absent: mouth for mucositis and candida · skin and all line sites · PICC exit site for redness or tenderness · chest · abdomen · perineum and PERIANAL AREA (a perianal abscess is a classic occult source, and it is missed because nobody looks) · any recent wounds. DO NOT PERFORM A DIGITAL RECTAL EXAMINATION in a neutropenic patient — it risks bacteraemia and mucosal injury. Here: mild oral mucositis, PICC site clean, chest clear, abdomen soft, perineum normal.',
      },

      section_2_mechanism: {
        what_neutropenia_is: 'A NEUTROPHIL COUNT below 1.0 x 10^9/L, with SEVERE neutropenia below 0.5. Normal is roughly 2.0 to 7.5 x 10^9/L. Neutrophils are the first-line phagocytes against bacteria and fungi.',
        why_chemotherapy_causes_it:
          'Cytotoxic drugs kill rapidly dividing cells. That is how they kill cancer, but bone marrow precursors, gut mucosa and hair follicles also divide rapidly — hence myelosuppression, mucositis and alopecia from the same mechanism. Neutrophils have a circulating half-life of only about 6 to 8 hours, so once production stops the count falls quickly.',
        the_nadir: 'Production stops, existing neutrophils are consumed, and the count reaches its lowest point at DAY 7 TO 14, recovering by around day 21. The timing is predictable, which is why the date of the last cycle is a vital piece of history.',
        the_two_breaches: [
          '1. LOSS OF THE CELLULAR DEFENCE — no neutrophils to contain organisms at the point of entry, so a local infection becomes a bloodstream infection quickly.',
          '2. LOSS OF THE BARRIER — chemotherapy damages gut mucosa, causing MUCOSITIS. The gut wall becomes leaky, and the patient own gut flora translocate directly into the blood. THIS IS WHY GRAM-NEGATIVE ORGANISMS FROM THE GUT DOMINATE, AND WHY THE EMPIRICAL ANTIBIOTIC MUST COVER PSEUDOMONAS.',
        ],
        the_organisms: 'Historically Gram-negative — Escherichia coli, Klebsiella, PSEUDOMONAS AERUGINOSA, which is why antipseudomonal cover is mandatory. Gram-positive organisms have become commoner with indwelling lines — coagulase-negative staphylococci, Staphylococcus aureus, streptococci. FUNGAL infection, particularly Candida and Aspergillus, becomes important in PROLONGED neutropenia beyond about 4 to 7 days.',
      },

      section_3_differentials: {
        the_framing: 'The differential is not "is this infection or not" — it is "WHERE is the infection", asked while the antibiotic is already running.',
        sources_to_consider: 'Chest · urinary tract · LINE-RELATED bloodstream infection · gut translocation from mucositis · PERIANAL infection · skin and soft tissue · sinuses · and CNS. Roughly half of febrile neutropenic episodes never have a source identified, and that does not change the management.',
        non_infective_causes_of_fever: 'Drug fever · transfusion reaction · TUMOUR FEVER from the malignancy itself · TUMOUR LYSIS SYNDROME · venous thromboembolism, which is common in cancer and causes fever. NONE OF THESE MAY BE ASSUMED UNTIL SEPSIS HAS BEEN TREATED. You treat first and reconsider later.',
        the_patient_without_a_fever: 'Neutropenic sepsis can present with HYPOTHERMIA, confusion, hypotension or simply feeling unwell, particularly in patients on steroids. Do not require a temperature to make the diagnosis.',
      },

      section_4_investigations: {
        the_governing_rule: 'INVESTIGATIONS DO NOT DELAY THE ANTIBIOTIC. Take the cultures as you site the cannula, then give the drug. If cultures are difficult, give the drug.',
        blood_cultures: 'PERIPHERAL cultures AND cultures FROM EACH LUMEN OF THE CENTRAL LINE, labelled by site. Comparing them identifies a line as the source — if the line cultures turn positive significantly earlier than the peripheral ones, that "differential time to positivity" points to line infection.',
        full_blood_count: 'Confirms neutropenia and its severity. Also shows platelets, which may be low and affects procedures. Expected here: neutrophils 0.3 x 10^9/L — severe neutropenia.',
        bloods: 'Urea and electrolytes · liver function · CRP · LACTATE, which is the key marker of tissue hypoperfusion and of severity · clotting · glucose · and blood gas if unwell. In a patient with a high tumour burden, add URATE, PHOSPHATE, POTASSIUM and CALCIUM for tumour lysis.',
        cultures_and_samples: 'Urine culture · sputum if productive · stool if diarrhoea, including Clostridioides difficile testing · swabs of any wound or line site · viral respiratory swabs.',
        chest_radiograph: 'Perform it — but REMEMBER IT MAY BE NORMAL DESPITE PNEUMONIA, because without neutrophils there is no consolidation to see. A normal film does not exclude a chest source, and CT is far more sensitive if suspicion persists.',
        risk_stratification: 'The MASCC score (Multinational Association for Supportive Care in Cancer) stratifies patients into low and high risk, and identifies a subgroup who may be suitable for oral antibiotics and early discharge. USE IT AFTER the first intravenous dose has been given and the patient assessed — never as a reason to delay treatment.',
      },

      section_5_management: {
        a_the_door_to_needle_target: {
          the_standard:
            'BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS WITHIN ONE HOUR OF ARRIVAL — and ideally within 30 minutes. This is the single measure most strongly associated with survival, and it is the standard against which units are audited. Give it on SUSPICION. DO NOT WAIT for the full blood count to confirm neutropenia; do not wait for the chest film; do not wait for a senior review.',
          why_it_is_missed: 'Because the patient looks well, has no localising symptoms, and is often triaged as low priority. The presentation is deliberately unimpressive. That is the trap.',
        },
        b_the_antibiotic: {
          first_line: 'PIPERACILLIN WITH TAZOBACTAM 4.5 g intravenously every 6 to 8 hours. It covers Gram-negatives INCLUDING PSEUDOMONAS, Gram-positives and anaerobes — which is exactly the spectrum required.',
          penicillin_allergy: 'MEROPENEM 1 g intravenously every 8 hours, or a combination such as CIPROFLOXACIN plus a glycopeptide, according to local policy and the nature of the allergy. Establish what the "allergy" actually was — a documented rash decades ago is not the same as anaphylaxis, and mislabelled penicillin allergy leads to worse antibiotic choices.',
          when_to_add_a_glycopeptide: 'ADD VANCOMYCIN or TEICOPLANIN if there is suspected LINE INFECTION, evident skin or soft tissue infection, known MRSA colonisation, or haemodynamic instability. It is NOT added routinely, because it does not improve outcomes in unselected patients and drives resistance.',
          antifungals: 'Considered if fever persists beyond about 4 to 7 days of appropriate antibacterials in a persistently neutropenic patient — a specialist decision, guided by imaging and fungal markers.',
        },
        c_the_sepsis_six_within_the_hour: 'GIVE oxygen if hypoxic · GIVE intravenous antibiotics · GIVE intravenous fluid · TAKE blood cultures · TAKE lactate · TAKE urine output measurement (catheterise if needed). Three in, three out, all within one hour.',
        d_resuscitation: 'Balanced crystalloid 500 mL boluses with reassessment after each. If hypotension persists after adequate fluid, she needs VASOPRESSOR support and critical care — escalate early rather than repeating boluses. INVOLVE CRITICAL CARE EARLY: a neutropenic patient has no physiological reserve and deteriorates faster than a non-neutropenic one.',
        e_the_line: 'Do not remove a central line reflexively. Remove it for a tunnel infection, persistent bacteraemia despite appropriate antibiotics, haemodynamic instability, or specific organisms — Staphylococcus aureus, Pseudomonas, Candida — where line removal is required for cure. Decide with microbiology.',
        f_supportive_care: 'Isolate in a single room. Strict hand hygiene — THE MOST EFFECTIVE INFECTION CONTROL MEASURE AVAILABLE AND THE ONE MOST OFTEN SKIPPED. Mouth care for mucositis. Avoid rectal examinations, suppositories and rectal thermometers. Monitor observations at least hourly initially. Nutrition. Thromboprophylaxis if the platelet count permits — cancer is prothrombotic.',
        g_g_csf: 'GRANULOCYTE COLONY-STIMULATING FACTOR (for example FILGRASTIM) stimulates neutrophil production. It is NOT routinely given for an established febrile neutropenic episode, because it shortens neutropenia without clearly improving survival. It IS used as PRIMARY PROPHYLAXIS in regimens with a high risk of febrile neutropenia, and as secondary prophylaxis after a previous episode. Its use here is an oncology decision.',
        h_de_escalation_and_the_conversation_that_prevents_the_next_episode: {
          review: 'Review at 48 hours with culture results. De-escalate to a narrower agent if an organism is identified, or continue if the patient remains neutropenic and febrile. Duration is usually until the neutrophil count recovers above 0.5 and the patient is afebrile.',
          the_oncology_decision: 'The next chemotherapy cycle may need a dose reduction, a delay, or G-CSF prophylaxis. That decision belongs to the oncology team and must be explicitly communicated, not left to the next clerking.',
          patient_education:
            'She waited four hours because she "did not want to make a fuss". BEFORE DISCHARGE: give her a thermometer, a written 24-hour contact number, an alert card stating she is on chemotherapy, and an unambiguous instruction — ANY temperature of 38 or above, or feeling unwell, means attend IMMEDIATELY, at any hour, and show the card at the door. This is the intervention that converts a 4-hour delay into a 30-minute one, and it saves more lives than the choice between one antibiotic and another.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_absence_of_signs_is_the_disease:
          'Neutrophils create the visible signs of infection — pus, consolidation, redness, exudate. Without them, a neutropenic patient with pneumonia has a clear chest film and one with an abscess has no pus. A "normal" examination and a "normal" chest radiograph are entirely compatible with life-threatening infection. This inverts normal clinical reasoning, which is why it must be taught explicitly.',
        bonus_2_antibiotics_within_one_hour_on_suspicion:
          'Not after the blood count, not after the chest film, not after senior review. Door-to-needle time is the measure most strongly associated with survival. The presentation is deliberately unimpressive — a well-looking patient with a single fever spike — and that is precisely the trap.',
        bonus_3_why_pseudomonas_cover_is_mandatory:
          'Chemotherapy damages gut mucosa, so the patient own gut flora translocate directly into the bloodstream. That is why Gram-negatives including Pseudomonas dominate, and why an antibiotic without antipseudomonal activity is inadequate no matter how broad it otherwise looks.',
        bonus_4_the_nadir_lets_you_predict_rather_than_react:
          'Days 7 to 14 after the cycle, recovering by about day 21. Ask the date of the last chemotherapy in every unwell cancer patient — it tells you where in that curve they are.',
        bonus_5_steroids_hide_the_fever:
          'A patient on dexamethasone as an antiemetic may be septic without a temperature. Hypothermia, confusion, hypotension or simply feeling unwell are enough. Do not require a fever to make the diagnosis.',
        trap_1: 'Do NOT perform a digital rectal examination or give suppositories — risk of bacteraemia and mucosal injury. But DO look at the perineum; a perianal source is classic and missed because nobody looks.',
        trap_2: 'Take cultures from EVERY lumen of the line as well as peripherally — differential time to positivity identifies the line as the source.',
        trap_3: 'Do not add vancomycin routinely — reserve it for suspected line or skin infection, MRSA colonisation, or instability.',
        trap_4: 'Record the RESPIRATORY RATE. It is the earliest sign of deterioration and the most frequently omitted observation.',
        trap_5: 'Interpret blood pressure against the patient own baseline. 108/64 is a significant fall for someone who runs at 130/80.',
        trap_6: 'G-CSF is not a treatment for an established episode — it is prophylaxis, and that is an oncology decision.',
        one_line_summary: 'Neutropenic sepsis at the day-10 nadir. Cultures as you cannulate, piperacillin-tazobactam within the hour on suspicion alone, sepsis six completed, critical care alerted early — and she leaves with a thermometer, a card and an instruction never to wait four hours again.',
      },
    },
    warnings: [
      'ANY temperature of 38 or above within 6 weeks of chemotherapy is NEUTROPENIC SEPSIS until proven otherwise.',
      'BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS WITHIN ONE HOUR — on suspicion, before the blood count, before the chest film, before senior review.',
      'THE ABSENCE OF SIGNS IS THE DISEASE. Without neutrophils there is no pus, no consolidation, no redness — a normal examination and a normal chest film do not exclude severe infection.',
      'A patient who looks well can be in septic shock within hours. There is no clinical impression that rules this out.',
      'Antipseudomonal cover is MANDATORY — gut mucositis translocates Gram-negative flora directly into the blood.',
      'Steroids blunt the fever response — a septic patient on dexamethasone may have no temperature at all.',
      'Do NOT perform a digital rectal examination or give suppositories — but DO inspect the perineum for an occult perianal source.',
      'Take blood cultures from EVERY lumen of the central line as well as peripherally.',
      'Do NOT add vancomycin routinely — reserve it for line or skin infection, MRSA colonisation, or instability.',
      'RECORD THE RESPIRATORY RATE — it is the earliest sign of deterioration and the most frequently omitted observation.',
      'Interpret blood pressure against the patient own baseline, not the normal range.',
      'G-CSF is prophylaxis, not treatment for an established episode.',
      'Doses here are teaching examples for an adult with normal renal function. Follow your local neutropenic sepsis protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Empirical antibiotic choice is dictated by local resistance patterns and formulary.',
      'Risk stratification tools and outpatient management pathways vary between services.',
    ],
    cards: [
      { q: 'What defines neutropenic sepsis as an emergency?', a: 'Temperature 38 or above, or any unexplained deterioration, within 6 weeks of chemotherapy — treated before the count is known.' },
      { q: 'What is the door-to-needle target?', a: 'Broad-spectrum intravenous antibiotics within one hour, ideally 30 minutes, on suspicion alone.' },
      { q: 'Why may examination and chest radiograph be normal?', a: 'Neutrophils produce the signs of infection — without them there is no pus, consolidation or redness.' },
      { q: 'When is the neutrophil nadir?', a: 'Days 7 to 14 after chemotherapy, recovering by about day 21.' },
      { q: 'Why must the antibiotic cover Pseudomonas?', a: 'Mucositis lets gut Gram-negative flora translocate directly into the bloodstream.' },
      { q: 'Give a first-line regimen.', a: 'Piperacillin with tazobactam 4.5 g intravenously every 6 to 8 hours.' },
      { q: 'When is a glycopeptide added?', a: 'Suspected line or skin infection, known MRSA colonisation, or haemodynamic instability — not routinely.' },
      { q: 'Why take cultures from every line lumen?', a: 'Differential time to positivity against peripheral cultures identifies the line as the source.' },
      { q: 'Why can a septic patient on steroids have no fever?', a: 'Steroids blunt the fever response — hypothermia, confusion or simply feeling unwell are enough.' },
      { q: 'What must not be done in a neutropenic patient, and what must?', a: 'No rectal examination or suppositories — but DO inspect the perineum for a perianal source.' },
      { q: 'What is the role of G-CSF?', a: 'Prophylaxis in high-risk regimens or after a previous episode — not treatment for an established one.' },
    ],
    checks: [
      'Date of last chemotherapy established',
      'Antibiotic given within one hour of arrival',
      'Blood cultures taken peripherally and from every line lumen',
      'Sepsis six completed within the hour',
      'Lactate measured',
      'Perineum inspected; no rectal examination performed',
      'Respiratory rate recorded',
      'Blood pressure compared with the patient own baseline',
      'Critical care alerted if hypotension persists after fluid',
      'Isolation and hand hygiene enforced',
      'Microbiology consulted about line management',
      'Oncology informed for next-cycle dose and G-CSF decision',
      'Thermometer, alert card and 24-hour contact number given before discharge',
    ],
    related: ['sepsis_recognition_the_sepsis_six_and_why_the_first_hour_decides'],
  },

  {
    id: 'AS-CASE-0019',
    type: 'case',
    specialty: 'Medicine — Haematology',
    teaching_case: true,
    title: 'CASE: Bruising, Exhaustion and a White Cell Count of 180',
    short: 'Case: acute leukaemia presentation',
    summary:
      'A 24-year-old with three weeks of bruising and fatigue whose white count is 180 x 10^9/L. Teaches the pancytopenia triad, why a very high white count is itself an emergency, why transfusion can kill here, and how tumour lysis syndrome is prevented rather than treated.',
    domains: ['haematology', 'oncology', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case leukaemia', 'acute leukaemia presentation', 'blast crisis case',
      'hyperleukocytosis', 'leukostasis', 'tumour lysis syndrome case',
      'rasburicase', 'auer rods', 'apl dic', 'pancytopenia case',
    ],
    terms: [
      'case', 'leukaemia', 'acute myeloid leukaemia', 'acute lymphoblastic leukaemia',
      'blasts', 'pancytopenia', 'hyperleukocytosis', 'leukostasis', 'leukapheresis',
      'tumour lysis syndrome', 'rasburicase', 'allopurinol', 'urate', 'auer rods',
      'acute promyelocytic leukaemia', 'atra', 'disseminated intravascular coagulation',
      'bone marrow aspirate', 'immunophenotyping',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '24-year-old man with three weeks of increasing tiredness, bruising on both legs he cannot account for, bleeding gums when brushing his teeth, and a sore throat that has not settled. His full blood count shows a white cell count of 180 x 10^9/L.',

      section_1_clerking: {
        history:
          'Three weeks of progressive fatigue, now breathless climbing one flight of stairs. Bruises appearing on his legs without injury. Gums bleed on brushing. A sore throat for 10 days that did not respond to a course of amoxicillin from his general practitioner. Drenching night sweats. He has lost about 5 kg. No recent travel. No new medication.',
        reading_the_clues: {
          the_triad_that_should_trigger_the_thought:
            'ANAEMIA (fatigue, breathlessness, pallor) + THROMBOCYTOPENIA (bruising, bleeding gums, petechiae) + NEUTROPENIA (an infection that will not settle). THREE CELL LINES FAILING AT ONCE IS PANCYTOPENIA, and pancytopenia in a young person points at the BONE MARROW. A single low cell line has many causes; all three together narrows the field sharply.',
          the_sore_throat_that_did_not_respond_to_antibiotics: 'Frequently the presenting complaint, and frequently treated twice before anyone counts the cells. Any infection that does not behave as expected deserves a full blood count.',
          bleeding_from_mucous_membranes: 'Gum and nose bleeding, and petechiae, indicate a PLATELET problem rather than a clotting factor problem. Clotting factor deficiencies bleed into joints and muscles instead. The pattern of bleeding tells you which arm of haemostasis has failed.',
          night_sweats_and_weight_loss: 'B symptoms — systemic features of a haematological malignancy.',
        },
        vitals: 'BP 118/70 mmHg. Pulse 118. Respiratory rate 26. Temperature 38.1. SATURATION 91% ON AIR. Glucose 6.4. He is confused about the date and mildly drowsy.',
        the_vitals_that_change_the_urgency:
          'HYPOXIA AND CONFUSION IN A PATIENT WITH A WHITE COUNT OF 180 ARE NOT INCIDENTAL. They are LEUKOSTASIS — see below — and they make this a same-hour emergency rather than a same-day referral.',
        examination:
          'Pale. WIDESPREAD PETECHIAE on both shins and PURPURA on the forearms. Gum hypertrophy and bleeding — GUM INFILTRATION IS CHARACTERISTIC OF MONOCYTIC ACUTE MYELOID LEUKAEMIA. Cervical lymphadenopathy. SPLENOMEGALY 4 cm below the costal margin. Sternal tenderness. Chest clear. FUNDOSCOPY: retinal haemorrhages — a sign of both thrombocytopenia and hyperviscosity. No focal neurological deficit but he is drowsy. TESTICULAR EXAMINATION in a young man with suspected acute lymphoblastic leukaemia, as the testes are a sanctuary site.',
      },

      section_2_mechanism: {
        what_acute_leukaemia_is:
          'A malignant clone of an immature white cell precursor — a BLAST — proliferates uncontrollably in the bone marrow. The defining feature is a BLOCK IN MATURATION: the cells divide but never mature into functioning neutrophils or lymphocytes.',
        the_two_consequences: {
          marrow_failure:
            'Blasts CROWD OUT normal haematopoiesis. Red cell production fails, giving ANAEMIA. Platelet production fails, giving THROMBOCYTOPENIA and bleeding. Normal white cell production fails, giving functional NEUTROPENIA and infection. THIS IS WHY THE WHITE COUNT CAN BE ENORMOUS WHILE THE PATIENT IS PROFOUNDLY IMMUNOSUPPRESSED — the 180 x 10^9/L cells are useless blasts, not functioning neutrophils. That paradox is the single most important concept in the case.',
          tissue_infiltration: 'Blasts infiltrate the liver, spleen, lymph nodes, gums, skin, testes and central nervous system, producing the organomegaly and gum hypertrophy.',
        },
        leukostasis_the_reason_this_is_an_emergency_tonight: {
          the_mechanism:
            'When the blast count is very high — generally above 100 x 10^9/L, and more dangerous in myeloid leukaemia because myeloblasts are larger and stickier than lymphoblasts — the blood becomes VISCOUS and blast plugs obstruct the microcirculation. The most vulnerable beds are the LUNGS and the BRAIN.',
          the_presentation: 'PULMONARY: breathlessness, hypoxia, and a chest radiograph that may look unimpressive relative to the hypoxia. NEUROLOGICAL: confusion, headache, visual disturbance, drowsiness, and ultimately intracranial haemorrhage. HE HAS BOTH.',
          the_mortality: 'Untreated leukostasis carries a very high early mortality — measured in the first days, not weeks.',
        },
        tumour_lysis_syndrome_the_thing_treatment_causes: {
          the_mechanism:
            'When a large mass of cells is killed rapidly — by chemotherapy, or spontaneously in a fast-growing leukaemia — their intracellular contents are released into the blood all at once.',
          the_four_derangements: 'HIGH POTASSIUM, released from cells, causing ARRHYTHMIA AND CARDIAC ARREST — the fastest killer. HIGH PHOSPHATE, released from cells. LOW CALCIUM, because the released phosphate binds calcium and precipitates it, causing tetany, seizures and arrhythmia. HIGH URATE, from the breakdown of nucleic acids, which crystallises in the renal tubules and causes ACUTE KIDNEY INJURY. The calcium phosphate also precipitates in the kidney, compounding it.',
          the_point: 'IT IS PREVENTED, NOT TREATED. Once established, it causes renal failure and arrhythmia. Prevention starts BEFORE the first dose of chemotherapy.',
        },
      },

      section_3_differentials: {
        one_acute_leukaemia: 'WORKING DIAGNOSIS. Supporting: pancytopenia of the functioning lines with a massive blast count, B symptoms, organomegaly, gum infiltration, sternal tenderness.',
        two_chronic_myeloid_leukaemia_in_blast_phase: 'Can present with a very high white count. The chronic phase has a full spectrum of maturing myeloid cells rather than a dominant blast population; blast transformation converts it into an acute picture.',
        three_leukaemoid_reaction: 'A reactive white count that can exceed 50 x 10^9/L in severe infection, but consists of MATURE neutrophils and their immediate precursors, not blasts. THE BLOOD FILM DISTINGUISHES THEM IMMEDIATELY, which is why the film is requested urgently rather than left to routine reporting.',
        four_aplastic_anaemia: 'Pancytopenia with an EMPTY marrow and NO blasts, and no organomegaly.',
        five_severe_b12_or_folate_deficiency: 'Can cause pancytopenia with a MACROCYTIC picture and hypersegmented neutrophils. Reversible, and worth excluding.',
        six_marrow_infiltration_by_another_malignancy_or_infection: 'Metastatic carcinoma, lymphoma, myeloma, and disseminated tuberculosis all infiltrate marrow. The marrow biopsy answers it.',
        the_subtype_that_changes_everything: {
          acute_promyelocytic_leukaemia:
            'A subtype of acute myeloid leukaemia that MUST be identified immediately, because it presents with severe DISSEMINATED INTRAVASCULAR COAGULATION and patients die of catastrophic haemorrhage — often intracranial or pulmonary — in the first days, BEFORE chemotherapy has even started. It is ALSO the most curable subtype, treated with ALL-TRANS RETINOIC ACID (ATRA), which forces the malignant promyelocytes to mature rather than killing them.',
            the_practical_rule: 'IF ACUTE PROMYELOCYTIC LEUKAEMIA IS SUSPECTED, ATRA IS STARTED IMMEDIATELY ON SUSPICION — before genetic confirmation — because the drug is relatively safe and the delay is lethal. Aggressive blood product support to keep fibrinogen and platelets up is given alongside.',
        },
      },

      section_4_investigations: {
        full_blood_count_and_urgent_blood_film: {
          why_the_film_is_urgent: 'The film distinguishes BLASTS from a reactive leukaemoid reaction within minutes and can identify AUER RODS — needle-shaped cytoplasmic inclusions that are diagnostic of MYELOID lineage, and are seen in abundance in acute promyelocytic leukaemia. TELEPHONE THE HAEMATOLOGY LABORATORY; do not let this sit in a routine queue.',
          expected: 'White cells 180 x 10^9/L with a high blast percentage. Haemoglobin 68 g/L (normal roughly 130 to 175 in men). PLATELETS 12 x 10^9/L (normal 150 to 400) — a level at which spontaneous bleeding occurs.',
        },
        clotting_screen_and_fibrinogen: {
          why_it_is_not_optional: 'To identify DISSEMINATED INTRAVASCULAR COAGULATION, which is the emergency within the emergency in acute promyelocytic leukaemia. SEND FIBRINOGEN AND D-DIMER SPECIFICALLY, not just PT and APTT — a falling fibrinogen is the early warning, and a standard clotting screen may not include it.',
        },
        tumour_lysis_bloods: 'POTASSIUM, PHOSPHATE, CORRECTED CALCIUM, URATE, urea, creatinine and LDH. Repeat at least 6-hourly, more often once treatment starts. LDH reflects cell turnover and is typically very high.',
        bone_marrow_aspirate_and_trephine: 'THE DIAGNOSTIC TEST. Sent for morphology, IMMUNOPHENOTYPING by flow cytometry (which assigns lineage — myeloid versus lymphoid — and therefore determines the treatment protocol), CYTOGENETICS and MOLECULAR studies. Cytogenetics determine both prognosis and specific therapy, including the t(15;17) translocation that defines acute promyelocytic leukaemia.',
        lumbar_puncture: 'For central nervous system involvement, particularly in acute lymphoblastic leukaemia. DO NOT PERFORM IT WHILE THE PLATELET COUNT IS CRITICALLY LOW OR IN THE PRESENCE OF DIC — correct first. It is typically deferred and combined with intrathecal chemotherapy.',
        other: 'Chest radiograph — looking for a MEDIASTINAL MASS, characteristic of T-cell acute lymphoblastic leukaemia and capable of causing superior vena cava obstruction or airway compromise. Blood cultures and a full septic screen, as he is febrile. Virology including hepatitis B and C, HIV and CMV before immunosuppression. Echocardiogram before anthracycline chemotherapy, which is cardiotoxic. Group and save with an extended phenotype. FERTILITY DISCUSSION AND SPERM BANKING before chemotherapy — in a 24-year-old this is time-critical and is forgotten in the rush of an acute admission.',
      },

      section_5_management: {
        a_the_first_hours: 'This is a haematological emergency. TELEPHONE HAEMATOLOGY IMMEDIATELY — not a written referral. Admit to a monitored bed. Cardiac monitoring for the potassium. Large-bore access.',
        b_treat_the_infection: 'He is febrile with functional neutropenia despite a white count of 180. TREAT AS NEUTROPENIC SEPSIS — broad-spectrum intravenous antibiotics with antipseudomonal cover within one hour, after cultures. The enormous white count is not protection; it is the disease.',
        c_prevent_tumour_lysis_before_it_happens: {
          hydration: 'AGGRESSIVE INTRAVENOUS FLUID — typically 2.5 to 3 litres per square metre per day of isotonic fluid, aiming for a high urine output, generally above 100 mL per hour. Fluid dilutes the released solutes and maintains renal flow. Monitor for overload, particularly if there is cardiac or renal impairment.',
          urate_lowering: {
            allopurinol: 'ALLOPURINOL 300 mg orally daily PREVENTS the formation of new urate by inhibiting xanthine oxidase. IT DOES NOT REMOVE URATE ALREADY PRESENT. Use for lower-risk patients. Note it interacts dangerously with azathioprine and mercaptopurine.',
            rasburicase: {
              what_it_is: 'A recombinant URATE OXIDASE enzyme that CONVERTS EXISTING URATE into allantoin, which is highly water-soluble and readily excreted. It therefore lowers a urate that is ALREADY HIGH, which allopurinol cannot do.',
              dose: 'Typically 0.2 mg/kg intravenously daily, often as a single dose with further doses guided by urate levels. FOR A 70 kg MAN: 14 mg.',
              indication: 'HIGH-RISK patients — a very high white count, a high urate, renal impairment, or bulky disease. HE QUALIFIES.',
              the_contraindication_that_must_be_checked:
                'G6PD DEFICIENCY. Rasburicase generates HYDROGEN PEROXIDE as it breaks down urate. A patient deficient in glucose-6-phosphate dehydrogenase cannot neutralise it and suffers SEVERE HAEMOLYSIS and METHAEMOGLOBINAEMIA. CHECK G6PD STATUS, particularly in patients of African, Mediterranean, Middle Eastern or Southeast Asian ancestry, where deficiency is common.',
              the_sampling_trap:
                'Rasburicase CONTINUES TO DEGRADE URATE IN THE SAMPLE TUBE AT ROOM TEMPERATURE, producing a falsely low result. Samples must be collected into a PRE-CHILLED tube and transported ON ICE to the laboratory. A falsely reassuring urate leads to prophylaxis being stopped in a patient who still needs it.',
            },
          },
          monitoring: 'Potassium, phosphate, calcium, urate and creatinine at least 6-hourly. Cardiac monitoring. Involve nephrology early — some patients need dialysis.',
          what_not_to_do: 'DO NOT give potassium in maintenance fluid. Avoid nephrotoxic drugs. Routine urinary ALKALINISATION is NO LONGER RECOMMENDED — it increases urate solubility but promotes calcium phosphate precipitation in the tubules, and may do net harm.',
        },
        d_leukostasis: {
          the_actions: 'Oxygen. AVOID RED CELL TRANSFUSION IF AT ALL POSSIBLE UNTIL THE WHITE COUNT IS REDUCED — see the trap below. Urgent CYTOREDUCTION, which is the definitive treatment: starting chemotherapy, or HYDROXYCARBAMIDE as a temporising measure. LEUKAPHERESIS — mechanically filtering white cells from the blood — may be used in severe symptomatic leukostasis, though the evidence for improved survival is debated and it must not delay definitive chemotherapy.',
          the_transfusion_trap_that_can_kill: {
            the_rule: 'DO NOT TRANSFUSE RED CELLS INTO A PATIENT WITH HYPERLEUKOCYTOSIS AND LEUKOSTASIS UNLESS ABSOLUTELY NECESSARY, and if you must, transfuse SLOWLY and in small volumes.',
            why: 'Red cells are the main determinant of blood VISCOSITY. Raising the haematocrit in a patient whose blood is already viscous with blasts can PRECIPITATE OR WORSEN LEUKOSTASIS, causing respiratory failure or intracranial catastrophe. His haemoglobin of 68 g/L looks alarming and the instinct to transfuse is strong — THIS IS THE TRAP. PLATELETS, by contrast, do not raise viscosity meaningfully and SHOULD be given for bleeding or a critically low count.',
          },
        },
        e_bleeding_and_platelets: 'Platelets 12 x 10^9/L with active mucosal bleeding — TRANSFUSE PLATELETS. Typical thresholds are below 10 x 10^9/L prophylactically, below 20 if febrile, and higher for active bleeding or procedures. TRANEXAMIC ACID may help mucosal bleeding, but AVOID IT IF DIC IS SUSPECTED. If DIC is present, give fresh frozen plasma, cryoprecipitate for fibrinogen and platelets, guided by the clotting screen and the bleeding, and treat the underlying leukaemia urgently.',
        f_supportive_and_definitive_care: 'Irradiated and CMV-safe blood products where indicated, to prevent transfusion-associated graft-versus-host disease. Tumour lysis prophylaxis continued. Antifungal and antiviral prophylaxis per protocol. CENTRAL VENOUS ACCESS once the platelet count and clotting permit. Definitive chemotherapy determined by lineage and cytogenetics, delivered in a specialist centre. Consider stem cell transplantation depending on risk category.',
        g_the_conversations: 'A 24-year-old is being told he has leukaemia. FERTILITY PRESERVATION IS TIME-CRITICAL and must be raised before chemotherapy begins — it is the thing most often lost in an acute admission and cannot be recovered afterwards. Involve the clinical nurse specialist early. Discuss the diagnosis honestly, with realistic prognosis once the subtype is known, and give written information. Involve family with his consent.',
      },

      section_6_teaching_points: {
        bonus_1_a_white_count_of_180_is_not_immunity:
          'The cells are useless blasts, not functioning neutrophils. He is FUNCTIONALLY NEUTROPENIC despite an enormous count, and his fever is treated as neutropenic sepsis. Reading the white count as protective is the conceptual error the case is built to prevent.',
        bonus_2_do_not_transfuse_red_cells_into_leukostasis:
          'Red cells drive viscosity. Transfusing into hyperleukocytosis can precipitate respiratory failure or intracranial haemorrhage. A haemoglobin of 68 makes the instinct to transfuse almost irresistible — resist it, reduce the white count first, and if transfusion is unavoidable give it slowly in small volumes. PLATELETS do not raise viscosity and should be given.',
        bonus_3_allopurinol_prevents_rasburicase_removes:
          'Allopurinol blocks xanthine oxidase so no NEW urate forms — it cannot touch urate already present. Rasburicase is an enzyme that converts EXISTING urate to soluble allantoin. High-risk patients with an already-high urate need rasburicase; allopurinol alone is inadequate.',
        bonus_4_two_rasburicase_traps:
          'CHECK G6PD STATUS FIRST — rasburicase generates hydrogen peroxide, and a deficient patient suffers severe haemolysis and methaemoglobinaemia. And send urate samples in a PRE-CHILLED tube ON ICE, because the drug keeps degrading urate inside the tube and gives a falsely low, falsely reassuring result.',
        bonus_5_acute_promyelocytic_leukaemia_is_treated_on_suspicion:
          'It kills by catastrophic haemorrhage from DIC in the first days, before chemotherapy starts, and it is the most curable subtype. ATRA is started ON SUSPICION, before genetic confirmation, because the drug is relatively safe and the delay is not. Send fibrinogen and D-dimer specifically — a falling fibrinogen is the early warning.',
        bonus_6_the_pattern_of_bleeding_localises_the_defect:
          'Mucosal bleeding — gums, nose, petechiae — indicates a PLATELET problem. Bleeding into joints and muscles indicates a CLOTTING FACTOR problem. The pattern tells you which arm of haemostasis has failed before any test returns.',
        trap_1: 'Urinary alkalinisation is NO LONGER recommended — it promotes calcium phosphate precipitation in the tubules.',
        trap_2: 'Do not put potassium in maintenance fluid in a patient at risk of tumour lysis.',
        trap_3: 'Telephone the laboratory for an urgent film. Blasts versus a leukaemoid reaction is answered in minutes and changes everything.',
        trap_4: 'Do not perform a lumbar puncture with critical thrombocytopenia or DIC — correct first.',
        trap_5: 'Avoid tranexamic acid if DIC is suspected.',
        trap_6: 'RAISE FERTILITY PRESERVATION BEFORE CHEMOTHERAPY. In a 24-year-old it is time-critical and cannot be recovered later.',
        one_line_summary: 'Acute leukaemia with hyperleukocytosis, leukostasis and impending tumour lysis. Telephone haematology, treat the fever as neutropenic sepsis, hydrate and give rasburicase after checking G6PD, give platelets but withhold red cells, exclude promyelocytic leukaemia urgently — and raise sperm banking today.',
      },
    },
    warnings: [
      'A white cell count of 180 is NOT immunity — the cells are useless blasts. Treat fever as NEUTROPENIC SEPSIS with antibiotics within one hour.',
      'DO NOT TRANSFUSE RED CELLS in hyperleukocytosis with leukostasis unless unavoidable — it raises viscosity and can cause respiratory failure or intracranial haemorrhage. Platelets are safe and should be given.',
      'Hypoxia and confusion with a very high blast count are LEUKOSTASIS — a same-hour emergency.',
      'Tumour lysis syndrome is PREVENTED, not treated. Start hydration and urate-lowering before chemotherapy.',
      'Allopurinol prevents NEW urate; only RASBURICASE removes urate already present.',
      'CHECK G6PD STATUS before rasburicase — deficiency causes severe haemolysis and methaemoglobinaemia.',
      'Send urate samples in a PRE-CHILLED tube ON ICE after rasburicase — the drug degrades urate in the tube and gives a falsely low result.',
      'Suspect ACUTE PROMYELOCYTIC LEUKAEMIA and start ATRA on suspicion — patients die of DIC haemorrhage before chemotherapy begins.',
      'Send FIBRINOGEN and D-DIMER specifically, not just PT and APTT — a falling fibrinogen is the early warning of DIC.',
      'Urinary alkalinisation is NO LONGER recommended — it precipitates calcium phosphate in the tubules.',
      'Do not add potassium to maintenance fluid in a patient at risk of tumour lysis.',
      'Do not perform a lumbar puncture with critical thrombocytopenia or DIC.',
      'Avoid tranexamic acid if DIC is suspected.',
      'RAISE FERTILITY PRESERVATION BEFORE CHEMOTHERAPY — it is time-critical and cannot be recovered afterwards.',
      'Doses here are teaching examples. Follow your specialist haematology protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Definitive treatment is determined by lineage, cytogenetics and trial protocol in a specialist centre.',
      'Tumour lysis prophylaxis intensity and leukapheresis indications vary between services.',
    ],
    cards: [
      { q: 'What does pancytopenia in a young person point to?', a: 'The bone marrow — anaemia, thrombocytopenia and neutropenia together narrow the field sharply.' },
      { q: 'Why is a white count of 180 not protective?', a: 'The cells are useless blasts; the patient is functionally neutropenic and must be treated as neutropenic sepsis.' },
      { q: 'What is leukostasis and how does it present?', a: 'Blast plugging of the microcirculation — hypoxia and breathlessness, plus confusion, headache and drowsiness.' },
      { q: 'Why must red cells not be transfused in leukostasis?', a: 'Red cells drive viscosity — transfusion can precipitate respiratory failure or intracranial haemorrhage.' },
      { q: 'Name the four derangements of tumour lysis syndrome.', a: 'High potassium, high phosphate, LOW calcium, high urate.' },
      { q: 'How do allopurinol and rasburicase differ?', a: 'Allopurinol prevents new urate forming; rasburicase converts existing urate to soluble allantoin.' },
      { q: 'What must be checked before rasburicase, and why?', a: 'G6PD status — the drug generates hydrogen peroxide, causing haemolysis and methaemoglobinaemia in deficiency.' },
      { q: 'How must urate samples be handled after rasburicase?', a: 'Pre-chilled tube, transported on ice — the drug keeps degrading urate in the tube.' },
      { q: 'Why is acute promyelocytic leukaemia treated on suspicion?', a: 'It kills by DIC haemorrhage in the first days, and ATRA is relatively safe — the delay is not.' },
      { q: 'What are Auer rods?', a: 'Needle-shaped cytoplasmic inclusions diagnostic of myeloid lineage, abundant in acute promyelocytic leukaemia.' },
      { q: 'What does the pattern of bleeding tell you?', a: 'Mucosal bleeding means a platelet problem; joint and muscle bleeding means a clotting factor problem.' },
      { q: 'What is time-critical and easily forgotten in a young patient?', a: 'Fertility preservation — it must be raised before chemotherapy begins.' },
    ],
    checks: [
      'Haematology telephoned immediately',
      'Urgent blood film requested by telephone',
      'Fever treated as neutropenic sepsis within one hour',
      'Clotting screen with FIBRINOGEN and D-dimer sent',
      'Acute promyelocytic leukaemia considered and ATRA started if suspected',
      'Tumour lysis bloods sent and repeated 6-hourly',
      'Aggressive hydration started',
      'G6PD checked before rasburicase',
      'Urate samples sent on ice',
      'Red cell transfusion withheld or given slowly in small volumes',
      'Platelets given for bleeding or critical count',
      'Cardiac monitoring for potassium',
      'Fertility preservation raised before chemotherapy',
      'Virology, echocardiogram and extended phenotype arranged',
    ],
    related: ['tumour_lysis_syndrome_and_the_oncological_emergencies'],
  },

  {
    id: 'AS-CASE-0020',
    type: 'case',
    specialty: 'Medicine — Haematology',
    teaching_case: true,
    title: 'CASE: An INR of 8.4 and Blood in the Stool on Warfarin',
    short: 'Case: anticoagulant-related major bleeding',
    summary:
      'A 76-year-old on warfarin with melaena and an INR of 8.4. Teaches the four-question framework for any bleeding anticoagulated patient, why vitamin K alone is not enough when there is major bleeding, and how the answer differs completely for a direct oral anticoagulant.',
    domains: ['haematology', 'emergency_medicine', 'gastroenterology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case warfarin bleeding', 'high inr case', 'inr reversal', 'prothrombin complex concentrate',
      'vitamin k reversal', 'octaplex beriplex', 'doac reversal', 'idarucizumab',
      'andexanet', 'melaena case', 'anticoagulant bleeding',
    ],
    terms: [
      'case', 'warfarin', 'inr', 'vitamin k', 'phytomenadione', 'prothrombin complex concentrate',
      'fresh frozen plasma', 'melaena', 'major bleeding', 'doac', 'dabigatran', 'idarucizumab',
      'apixaban', 'rivaroxaban', 'andexanet alfa', 'tranexamic acid', 'anticoagulation restart',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '76-year-old woman on warfarin for atrial fibrillation attends with three days of black tarry stools and dizziness on standing. Her INR is 8.4 (her target range is 2.0 to 3.0).',

      section_1_clerking: {
        history:
          'Three days of BLACK, TARRY, OFFENSIVE-SMELLING STOOL — MELAENA, which indicates bleeding from the upper gastrointestinal tract, digested during transit. Dizzy on standing. No haematemesis. No abdominal pain. She started a course of CLARITHROMYCIN five days ago for a chest infection, and has been eating poorly since.',
        the_four_questions_that_structure_every_bleeding_anticoagulated_patient: {
          question_1: 'IS THE BLEEDING MAJOR? Major means bleeding into a critical site — intracranial, intraspinal, intraocular, pericardial, retroperitoneal, intra-articular, intramuscular with compartment syndrome — OR bleeding causing haemodynamic compromise, OR a fall in haemoglobin of 20 g/L or more, OR requiring transfusion of two or more units. HER ANSWER IS YES: she is symptomatically hypovolaemic with a significant haemoglobin fall.',
          question_2: 'WHICH ANTICOAGULANT, AND WHEN WAS THE LAST DOSE? Warfarin, direct oral anticoagulant and heparin are reversed COMPLETELY DIFFERENTLY. For a direct oral anticoagulant the TIMING of the last dose matters more than any laboratory number, because they have short half-lives.',
          question_3: 'WHY IS THE INR HIGH TODAY? A supratherapeutic INR is almost never random. Find the cause or it recurs.',
          question_4: 'WHY IS SHE ANTICOAGULATED, AND WHAT HAPPENS IF WE STOP? A mechanical mitral valve is a different risk from atrial fibrillation with a low score. This governs whether and when anticoagulation restarts.',
        },
        answering_question_three_here: {
          the_clarithromycin:
            'THE CAUSE IS IN THE HISTORY. Clarithromycin is a potent inhibitor of CYP3A4 and reduces warfarin metabolism, raising the INR sharply. Warfarin has an enormous interaction list — MACROLIDES, METRONIDAZOLE, CIPROFLOXACIN, FLUCONAZOLE and AZOLE antifungals, AMIODARONE, and many others potentiate it; RIFAMPICIN, CARBAMAZEPINE, PHENYTOIN and ST JOHN WORT reduce it.',
          the_poor_oral_intake: 'Reduced dietary vitamin K intake also raises the INR. Acute illness, heart failure and liver dysfunction all potentiate warfarin as well. SEVERAL FACTORS USUALLY COMBINE.',
          why_this_matters_beyond_today: 'If you correct the INR and discharge her on the same warfarin dose while she finishes the clarithromycin, she will bleed again. The interaction is the diagnosis.',
        },
        past_medical_history: 'Atrial fibrillation. Hypertension. Osteoarthritis. PREVIOUS PEPTIC ULCER 8 years ago.',
        drug_history: 'Warfarin as directed by the anticoagulation clinic. Bisoprolol. Amlodipine. CLARITHROMYCIN, day 5. IBUPROFEN taken regularly for knee pain — SHE BUYS IT HERSELF AND DID NOT MENTION IT UNTIL ASKED DIRECTLY. NSAIDs cause ulcers, inhibit platelets, and combined with warfarin greatly increase bleeding risk. ALWAYS ASK ABOUT OVER-THE-COUNTER AND HERBAL MEDICINES BY NAME — patients do not consider them "medicines".',
        vitals: 'BP 96/58 mmHg lying, dropping to 78/48 on sitting. Pulse 108. Respiratory rate 20. Temperature 36.6. Saturation 97%. Capillary refill 3 seconds. She is pale and clammy.',
        examination: 'Pale, cool peripheries. Abdomen soft with no tenderness or mass. RECTAL EXAMINATION CONFIRMS MELAENA — this is the examination that converts a reported symptom into a finding, and it must be done. No stigmata of chronic liver disease. No bruising elsewhere, no joint swelling. GCS 15 with no focal neurology — and CHECK THIS CAREFULLY, because an intracranial bleed is the reversal indication you cannot afford to miss.',
      },

      section_2_mechanism: {
        how_warfarin_works:
          'Warfarin inhibits VITAMIN K EPOXIDE REDUCTASE, the enzyme that regenerates active vitamin K. Vitamin K is required to carboxylate clotting FACTORS II, VII, IX AND X, plus the natural anticoagulants PROTEIN C and PROTEIN S. Without carboxylation these factors cannot bind calcium and phospholipid, and cannot function.',
        why_the_inr_measures_it: 'The INR is a standardised prothrombin time, which reflects the EXTRINSIC and COMMON pathways. FACTOR VII has the SHORTEST HALF-LIFE — about 4 to 6 hours — so it falls first, and the INR is therefore highly sensitive to warfarin. Factor II has the longest half-life at around 60 to 72 hours.',
        the_two_practical_consequences_of_those_half_lives: [
          '1. THE INR RISES BEFORE THE PATIENT IS FULLY ANTICOAGULATED when starting warfarin, because factor VII falls first while factor II remains. This is why bridging is used in high-risk patients.',
          '2. PROTEIN C ALSO HAS A SHORT HALF-LIFE, so in the first days of warfarin the patient can be transiently PROCOAGULANT — the cause of the rare WARFARIN-INDUCED SKIN NECROSIS.',
        ],
        why_the_bleeding_site_matters: 'A high INR does not create a bleeding lesion; it unmasks one. She has melaena, a previous peptic ulcer and is taking an NSAID. THE ANTICOAGULANT IS THE MULTIPLIER, THE ULCER IS THE SOURCE. Correcting the INR without finding and treating the source treats half the problem.',
      },

      section_3_differentials: {
        the_source_of_the_bleeding: 'PEPTIC ULCER — most likely, given the previous ulcer and NSAID use · gastritis or oesophagitis · oesophageal varices, less likely with no liver disease · MALIGNANCY, which must be excluded in a 76-year-old with gastrointestinal bleeding · Mallory-Weiss tear · angiodysplasia.',
        the_important_reframing: 'ANTICOAGULANT-ASSOCIATED GASTROINTESTINAL BLEEDING IS OFTEN THE FIRST PRESENTATION OF A CANCER. The anticoagulant made an occult lesion bleed sooner. Never conclude "it was just the warfarin" — investigate the source properly.',
        other_causes_of_a_high_inr: 'Liver disease, which impairs synthesis of the same factors · disseminated intravascular coagulation, where fibrinogen falls and D-dimer rises · vitamin K deficiency from malnutrition or malabsorption · and deliberate or accidental overdose, including superwarfarin rodenticide, which causes a very prolonged effect lasting weeks.',
      },

      section_4_investigations: {
        immediate: 'FULL BLOOD COUNT — expected haemoglobin low, and REMEMBER IT MAY BE FALSELY NORMAL IN ACUTE BLEEDING before haemodilution occurs. Platelets. CLOTTING SCREEN with INR and FIBRINOGEN. UREA AND ELECTROLYTES — A RAISED UREA WITH A NORMAL CREATININE IS CHARACTERISTIC OF UPPER GASTROINTESTINAL BLEEDING, because digested blood is absorbed protein. Liver function. GROUP AND SAVE AND CROSS-MATCH. Lactate. Venous gas for a rapid haemoglobin.',
        risk_scoring: 'The GLASGOW-BLATCHFORD score at presentation identifies who needs intervention; the ROCKALL score assesses mortality risk after endoscopy. Use them to support decisions, not to replace assessment of a shocked patient.',
        endoscopy: 'UPPER GASTROINTESTINAL ENDOSCOPY within 24 hours, and IMMEDIATELY AFTER RESUSCITATION in unstable bleeding. It is both diagnostic and therapeutic — injection, clips, thermal coagulation. RESUSCITATE FIRST: an unstable patient does not become safer in the endoscopy suite.',
        imaging: 'CT angiography if bleeding continues and endoscopy has not identified or controlled the source. URGENT CT HEAD in any anticoagulated patient with head injury, headache, confusion or focal signs — with a LOW threshold, because intracranial bleeding on anticoagulation can be catastrophic and initially silent.',
      },

      section_5_management: {
        a_resuscitate_first: 'ABCDE. TWO LARGE-BORE CANNULAE. Bloods and cross-match. Fluid resuscitation with balanced crystalloid, and BLOOD if she remains unstable. ACTIVATE THE MAJOR HAEMORRHAGE PROTOCOL if bleeding is severe — it delivers red cells, plasma and platelets in a coordinated way rather than piecemeal. Catheterise and monitor urine output. Nil by mouth for endoscopy. Reversal and resuscitation happen in parallel, not in sequence.',
        b_stop_the_anticoagulant: 'WITHHOLD WARFARIN. Obvious, and still sometimes missed on the drug chart while everything else is being done.',
        c_reverse_the_warfarin_the_core_of_the_case: {
          major_bleeding_which_is_her_situation: {
            step_1: 'PROTHROMBIN COMPLEX CONCENTRATE (PCC), for example Beriplex or Octaplex, intravenously. Dose is typically 25 to 50 units/kg according to INR and local protocol. FOR A 65 kg WOMAN with an INR of 8.4, a typical dose at 50 units/kg is 3,250 units.',
            why_pcc: 'It contains CONCENTRATED FACTORS II, VII, IX AND X — exactly what warfarin has depleted. It works WITHIN MINUTES, requires no cross-matching, and comes in a SMALL VOLUME, which matters in an elderly patient who cannot tolerate fluid loading.',
            step_2: 'VITAMIN K (PHYTOMENADIONE) 5 to 10 mg by SLOW INTRAVENOUS INJECTION. IT MUST BE GIVEN AS WELL AS THE PCC, NOT INSTEAD OF IT.',
            why_both_are_needed_the_central_point:
              'PCC works in minutes but its effect WEARS OFF IN ABOUT 6 TO 8 HOURS, because the infused factors are consumed and cleared. WARFARIN IS STILL PRESENT IN THE BODY AND HAS A LONG HALF-LIFE OF ROUGHLY 36 TO 42 HOURS. So the INR REBOUNDS. Vitamin K takes about 6 to 12 hours to work, but its effect LASTS, because it restores the patient own ability to make functional factors. GIVING PCC ALONE PRODUCES A PATIENT WHO LOOKS CORRECTED AT MIDNIGHT AND IS BLEEDING AGAIN AT SIX IN THE MORNING. THE TWO COVER DIFFERENT PARTS OF THE SAME TIMELINE.',
            recheck: 'Repeat the INR 20 to 30 minutes after PCC to confirm correction, and again at 6 hours to detect rebound.',
          },
          fresh_frozen_plasma: 'ONLY IF PCC IS UNAVAILABLE. It is INFERIOR — it needs thawing and cross-matching, which costs time; it requires a LARGE VOLUME with real risk of fluid overload in the elderly; and it corrects the INR incompletely. Where PCC exists, it is the correct choice.',
          minor_or_no_bleeding_which_is_a_different_algorithm: {
            inr_above_8_with_no_bleeding: 'Stop warfarin. Give VITAMIN K 1 to 5 mg ORALLY. Recheck the INR daily and restart warfarin at a reduced dose when it is in range.',
            inr_5_to_8_with_no_bleeding: 'Withhold 1 or 2 doses and reduce the maintenance dose. Vitamin K is often unnecessary.',
            inr_5_to_8_with_minor_bleeding: 'Stop warfarin and give VITAMIN K 1 to 3 mg intravenously.',
            the_principle: 'DO NOT GIVE A LARGE DOSE OF VITAMIN K TO A PATIENT WHO IS NOT BLEEDING AND NEEDS TO BE RE-ANTICOAGULATED. It causes prolonged warfarin resistance lasting a week or more, leaving them unprotected — particularly dangerous with a mechanical heart valve. Match the dose to the situation.',
          },
        },
        d_what_changes_completely_if_this_were_a_direct_oral_anticoagulant: {
          the_general_principles: 'ESTABLISH THE TIME OF THE LAST DOSE — it matters more than any number, because half-lives are around 8 to 15 hours and the drug clears on its own. THE INR IS NOT A USEFUL MEASURE OF DOAC EFFECT and must not be used to guide reversal. Renal function is critical, especially for DABIGATRAN, which is largely renally cleared. ACTIVATED CHARCOAL may be considered if ingestion was within about 2 to 4 hours.',
          dabigatran: 'A direct THROMBIN inhibitor. SPECIFIC REVERSAL AGENT: IDARUCIZUMAB, 5 g intravenously as two 2.5 g doses. It is a monoclonal antibody fragment that binds dabigatran with very high affinity and works within minutes. Dabigatran is also DIALYSABLE, unlike the factor Xa inhibitors, because it has low protein binding.',
          apixaban_rivaroxaban_edoxaban: 'Direct FACTOR Xa inhibitors. SPECIFIC REVERSAL AGENT: ANDEXANET ALFA, a modified decoy factor Xa molecule that binds and sequesters the drug — where available and affordable, as access is limited in many settings. If it is not available, PROTHROMBIN COMPLEX CONCENTRATE is used as a non-specific alternative. THESE DRUGS ARE NOT DIALYSABLE, because they are highly protein-bound.',
          the_examinable_contrast: 'WARFARIN — vitamin K plus PCC. DABIGATRAN — idarucizumab, and it dialyses. XA INHIBITORS — andexanet alfa, or PCC if unavailable, and they do not dialyse. Vitamin K is useless for all of the direct oral anticoagulants, because they do not act through vitamin K at all.',
        },
        e_treat_the_source: 'PROTON PUMP INHIBITOR — for example omeprazole 40 mg intravenously — and ENDOSCOPY with therapeutic intervention. Test and treat HELICOBACTER PYLORI. STOP THE IBUPROFEN PERMANENTLY and provide a safer analgesic plan for her knee. TRANEXAMIC ACID IS NOT RECOMMENDED FOR GASTROINTESTINAL BLEEDING — trial evidence showed no mortality benefit and a signal of increased venous thromboembolism and seizures, which reversed earlier practice.',
        f_the_restart_decision_which_is_genuinely_difficult: {
          the_tension: 'She has atrial fibrillation and needs anticoagulation to prevent stroke. She has just had a major gastrointestinal bleed. BOTH RISKS ARE REAL AND BOTH CAN KILL.',
          the_general_principle:
            'FOR MOST PATIENTS WITH GASTROINTESTINAL BLEEDING, ANTICOAGULATION SHOULD BE RESTARTED once the source is treated and haemostasis secure — typically within days to a couple of weeks. Observational data consistently show LOWER overall mortality in patients restarted than in those left off, because thrombotic risk accumulates relentlessly while bleeding risk is a one-off event that has been treated. THE DEFAULT OF "SHE BLED, SO STOP IT FOREVER" IS USUALLY WRONG AND IS ONE OF THE COMMONEST ERRORS AFTER THIS ADMISSION.',
          how_to_decide: 'Multidisciplinary — gastroenterology, cardiology and the patient. Consider a direct oral anticoagulant rather than warfarin, cover with a proton pump inhibitor, remove the NSAID, and treat Helicobacter. In a patient who genuinely cannot be anticoagulated, LEFT ATRIAL APPENDAGE OCCLUSION is an option worth knowing about.',
          document_it: 'Write the reasoning, the plan, the restart date and who will review it. An undocumented "hold anticoagulation" becomes a permanent stop by default, and nobody revisits it.',
        },
        g_before_discharge: 'Explain the clarithromycin interaction explicitly, and give a written list of drugs that interact with warfarin. Confirm the anticoagulation clinic knows about the admission and arrange early INR checks. STOP THE IBUPROFEN and address her knee pain another way. Consider whether a direct oral anticoagulant would be simpler and safer for her. Give a bleeding-alert card and clear instructions about what to do if bleeding recurs.',
      },

      section_6_teaching_points: {
        bonus_1_pcc_and_vitamin_k_cover_different_parts_of_the_timeline:
          'PCC works in minutes but wears off in 6 to 8 hours. Warfarin persists for 36 to 42 hours. Vitamin K takes 6 to 12 hours to work but lasts. Give PCC alone and the patient looks corrected at midnight and rebleeds by morning. THE TWO ARE NOT ALTERNATIVES — they are sequential halves of one plan.',
        bonus_2_match_the_vitamin_k_dose_to_the_situation:
          'A large dose in a patient who is not bleeding causes warfarin resistance for a week or more, leaving them unprotected — dangerous with a mechanical valve. Major bleeding gets 5 to 10 mg intravenously; a high INR without bleeding gets 1 to 5 mg orally.',
        bonus_3_the_reversal_answer_is_completely_different_for_a_doac:
          'Warfarin — vitamin K plus PCC. Dabigatran — IDARUCIZUMAB, and it is DIALYSABLE. Factor Xa inhibitors — ANDEXANET ALFA, or PCC if unavailable, and they are NOT dialysable because they are highly protein-bound. Vitamin K is useless for all of them. And the INR does not measure their effect — establish the time of the last dose instead.',
        bonus_4_a_raised_urea_with_a_normal_creatinine_means_upper_gi_bleeding:
          'Digested blood is absorbed protein, which is metabolised to urea. A disproportionately raised urea in a patient with anaemia is a strong pointer to an upper gastrointestinal source, and it is a free piece of information on a routine blood test.',
        bonus_5_the_anticoagulant_is_the_multiplier_not_the_lesion:
          'A high INR unmasks a bleeding source; it does not create one. She has an ulcer and takes an NSAID. Anticoagulant-associated bleeding is often the first presentation of a CANCER, so "it was just the warfarin" is never a diagnosis. Investigate the source.',
        bonus_6_restarting_is_usually_right:
          'Observational data show lower overall mortality in patients restarted on anticoagulation after gastrointestinal bleeding than in those left off, because thrombotic risk accumulates continuously while the bleed is a treated one-off. Stopping forever by default is one of the commonest errors after this admission — and an undocumented hold becomes a permanent stop because nobody revisits it.',
        trap_1: 'Fresh frozen plasma is INFERIOR to PCC — slower, larger volume, incomplete correction. Use it only if PCC is unavailable.',
        trap_2: 'TRANEXAMIC ACID IS NOT RECOMMENDED for gastrointestinal bleeding — no mortality benefit and a signal of increased thromboembolism and seizures.',
        trap_3: 'Ask about over-the-counter and herbal medicines BY NAME. Patients do not consider ibuprofen a "medicine".',
        trap_4: 'Haemoglobin may be falsely normal in acute bleeding before haemodilution. Do not be reassured by an early result.',
        trap_5: 'Have a LOW threshold for CT head in any anticoagulated patient with head injury, headache or confusion.',
        trap_6: 'Resuscitate before endoscopy. An unstable patient does not become safer in the endoscopy suite.',
        one_line_summary: 'Major bleeding on warfarin with an INR of 8.4 caused by a clarithromycin interaction and an NSAID-related ulcer. Resuscitate, stop the warfarin, give PCC AND vitamin K together, endoscope after stabilising, remove the interacting drugs — and plan the restart rather than defaulting to stopping forever.',
      },
    },
    warnings: [
      'GIVE PROTHROMBIN COMPLEX CONCENTRATE AND VITAMIN K TOGETHER in major bleeding — PCC works in minutes but wears off in 6 to 8 hours while warfarin persists for 36 to 42 hours.',
      'Match the vitamin K dose to the situation — a large dose in a non-bleeding patient causes warfarin resistance for a week or more.',
      'Fresh frozen plasma is INFERIOR to PCC — slower, large volume, incomplete correction. Use only if PCC is unavailable.',
      'The INR does NOT measure direct oral anticoagulant effect — establish the time of the last dose instead.',
      'Dabigatran is reversed with IDARUCIZUMAB and is DIALYSABLE; factor Xa inhibitors need ANDEXANET ALFA or PCC and are NOT dialysable.',
      'Vitamin K is useless for direct oral anticoagulants — they do not act through vitamin K.',
      'A raised urea with a normal creatinine points to an upper gastrointestinal bleed.',
      'TRANEXAMIC ACID IS NOT RECOMMENDED for gastrointestinal bleeding — no mortality benefit, with increased thromboembolism and seizures.',
      'Ask about over-the-counter and herbal medicines BY NAME — patients do not consider ibuprofen a medicine.',
      'Haemoglobin may be falsely normal in acute bleeding before haemodilution occurs.',
      'Have a LOW threshold for CT head in any anticoagulated patient with head injury, headache or confusion.',
      'Resuscitate before endoscopy — an unstable patient does not become safer in the endoscopy suite.',
      'Anticoagulant-associated bleeding is often the first presentation of a CANCER. Never conclude it was just the warfarin.',
      'Restarting anticoagulation after gastrointestinal bleeding usually lowers overall mortality. Document the plan and the review date, or the hold becomes permanent by default.',
      'Doses here are teaching examples. Follow your local anticoagulation reversal protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. PCC dosing, reversal agent availability and restart timing vary between services and countries.',
      'Andexanet alfa is not available in many settings; local policy dictates the alternative.',
    ],
    cards: [
      { q: 'Give the four questions for any bleeding anticoagulated patient.', a: 'Is the bleeding major? Which drug and when was the last dose? Why is the INR high today? Why are they anticoagulated?' },
      { q: 'Why give PCC AND vitamin K rather than either alone?', a: 'PCC works in minutes but wears off in 6 to 8 hours; warfarin persists 36 to 42 hours; vitamin K takes 6 to 12 hours but lasts.' },
      { q: 'Which clotting factors does warfarin deplete?', a: 'II, VII, IX and X, plus proteins C and S.' },
      { q: 'Why is the INR so sensitive to warfarin?', a: 'Factor VII has the shortest half-life at 4 to 6 hours and falls first.' },
      { q: 'Why not give a large vitamin K dose to a non-bleeding patient?', a: 'It causes warfarin resistance for a week or more, leaving them unprotected.' },
      { q: 'How is dabigatran reversed?', a: 'Idarucizumab 5 g intravenously — and dabigatran is dialysable.' },
      { q: 'How are factor Xa inhibitors reversed?', a: 'Andexanet alfa, or PCC if unavailable. They are NOT dialysable.' },
      { q: 'What does a raised urea with a normal creatinine suggest?', a: 'Upper gastrointestinal bleeding — digested blood is absorbed protein.' },
      { q: 'Why is tranexamic acid not recommended in GI bleeding?', a: 'No mortality benefit, with a signal of increased venous thromboembolism and seizures.' },
      { q: 'Name drugs that raise the INR on warfarin.', a: 'Macrolides, metronidazole, ciprofloxacin, fluconazole and azoles, amiodarone — plus poor dietary vitamin K intake.' },
      { q: 'Should anticoagulation be restarted after a GI bleed?', a: 'Usually yes once the source is treated — overall mortality is lower in those restarted than those left off.' },
    ],
    checks: [
      'Bleeding classified as major or minor',
      'Anticoagulant identified and time of last dose established',
      'Cause of the high INR identified — interacting drugs asked about by name',
      'Indication for anticoagulation established',
      'Two large-bore cannulae, cross-match and major haemorrhage protocol if needed',
      'Warfarin withheld on the drug chart',
      'PCC AND vitamin K both given',
      'INR rechecked at 30 minutes and again at 6 hours for rebound',
      'Proton pump inhibitor and endoscopy arranged after resuscitation',
      'NSAID stopped and alternative analgesia planned',
      'Helicobacter pylori tested and treated',
      'CT head considered if any head injury, headache or confusion',
      'Restart plan documented with a date and a named reviewer',
    ],
    related: ['warfarin_versus_direct_oral_anticoagulants_monitoring_interactions_and_reversal'],
  },
];
