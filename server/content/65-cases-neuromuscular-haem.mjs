/**
 * CASE SCENARIOS — Guillain-Barre syndrome and sickle cell crisis.
 *
 * Batch 2, part 3.
 */

export default [
  {
    id: 'AS-CASE-0016',
    type: 'case',
    specialty: 'Medicine — Neurology',
    teaching_case: true,
    title: 'CASE: Weakness Climbing From the Feet Upwards Over Five Days',
    short: 'Case: Guillain-Barré syndrome',
    summary:
      'A 34-year-old with ascending weakness two weeks after diarrhoea. Teaches why the bedside test that matters is the FORCED VITAL CAPACITY and not the oxygen saturation, why the saturation stays normal until the patient arrests, and why steroids do not work here when they work in almost every other neuroinflammatory disease.',
    domains: ['neurology', 'critical_care', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'case guillain barre', 'gbs case', 'ascending paralysis', 'ascending weakness case',
      'forced vital capacity', 'fvc 20 30 40', 'albuminocytological dissociation',
      'ivig case', 'plasma exchange', 'miller fisher',
    ],
    terms: [
      'case', 'guillain barre', 'ascending weakness', 'areflexia', 'campylobacter',
      'forced vital capacity', 'single breath count', 'albuminocytological dissociation',
      'nerve conduction study', 'demyelination', 'intravenous immunoglobulin',
      'plasma exchange', 'autonomic dysfunction', 'miller fisher syndrome',
      'transverse myelitis', 'botulism', 'tick paralysis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '34-year-old teacher with five days of progressive weakness that began as tingling in both feet and has now reached his thighs, so that he can no longer climb stairs. He had a bout of bloody diarrhoea two weeks ago.',

      section_1_clerking: {
        history:
          'Five days ago he noticed tingling and numbness in both feet. Over the next two days it spread up both legs, and the legs became weak. Today he cannot climb the stairs at home and struggles to rise from a chair. His hands have begun to tingle. He has lower back pain. NO bladder or bowel disturbance. TWO WEEKS AGO he had four days of bloody diarrhoea after a barbecue, which settled without treatment.',
        reading_the_clues: {
          ascending_and_symmetrical:
            'Weakness that starts DISTALLY and climbs PROXIMALLY, on BOTH sides roughly equally. Symmetry points strongly to a systemic or immune process rather than a structural lesion, which is almost always asymmetrical.',
          progressive_over_days:
            'The tempo is the diagnosis. Minutes to hours suggests vascular; days to weeks suggests inflammatory or immune; months suggests degenerative or compressive. GUILLAIN-BARRE PROGRESSES OVER DAYS TO A MAXIMUM OF FOUR WEEKS. If weakness is still worsening after 8 weeks, the diagnosis is chronic inflammatory demyelinating polyradiculoneuropathy instead.',
          the_preceding_diarrhoea:
            'THE CRITICAL HISTORICAL DETAIL. About two thirds of cases follow an infection by one to three weeks. CAMPYLOBACTER JEJUNI — the classic cause of bloody diarrhoea after undercooked poultry — is the commonest identified trigger, and is associated with a more severe, more axonal form. Also ask about respiratory infection, cytomegalovirus, Epstein-Barr virus, hepatitis E, HIV, Zika, and recent vaccination or surgery.',
          no_bladder_or_bowel_disturbance:
            'IMPORTANT NEGATIVE. Early sphincter involvement points to a SPINAL CORD lesion — cord compression or transverse myelitis — rather than a peripheral neuropathy. Its absence supports the peripheral diagnosis, and its presence would demand urgent spinal imaging.',
          back_pain: 'Common and often misleading — it comes from inflammation of the nerve roots. It leads to patients being investigated for a mechanical back problem while the weakness climbs.',
        },
        the_questions_that_detect_impending_respiratory_failure:
          'ASK THESE EXPLICITLY: Are you breathless lying flat? Are you breathless when talking? Do you have to pause mid-sentence? Are you sleeping propped up? Do you have difficulty swallowing, or does liquid come back through your nose? Is your voice weaker or more nasal? A patient who cannot complete a sentence in one breath, or who has bulbar weakness, is close to needing ventilation.',
        vitals: 'BP 148/88 mmHg but FLUCTUATING — it was 96/58 twenty minutes ago. Pulse 104, varying between 58 and 118 on the monitor. Respiratory rate 20. Temperature 36.8. SATURATION 98% ON AIR. FORCED VITAL CAPACITY 1.6 litres.',
        the_two_vitals_that_matter_here: {
          the_fluctuating_blood_pressure_and_pulse:
            'AUTONOMIC DYSFUNCTION. The autonomic nerves are affected alongside the motor and sensory ones, causing swings in blood pressure, bradycardia, tachycardia, arrhythmia, ileus and urinary retention. IT IS A LEADING CAUSE OF DEATH IN THIS DISEASE and is frequently overlooked because attention is on the limbs. He needs CARDIAC MONITORING.',
          the_forced_vital_capacity: 'See below. It is the most important number in the case, and the saturation of 98% is the most dangerous one.',
        },
        examination: {
          motor: 'Symmetrical weakness, worse distally: ankle dorsiflexion 3/5, knee extension 4/5, hip flexion 4/5. Upper limbs 4+/5 with normal grip so far. He cannot rise from a chair without using his arms.',
          reflexes:
            'ABSENT ankle and knee reflexes bilaterally; upper limb reflexes reduced. AREFLEXIA OR MARKED HYPOREFLEXIA IS THE CARDINAL SIGN and is what separates this from most causes of weakness. Plantars are DOWNGOING — a lower motor neurone picture. UPGOING plantars would point to a cord or brain lesion instead.',
          sensory: 'Mild glove-and-stocking sensory loss. Note the sensory findings are usually MILD compared with the motor deficit — the weakness dominates.',
          bulbar_and_respiratory: 'Speech normal, cough strong, no nasal regurgitation. He can count to 22 in one breath (see the single breath count below).',
          cranial_nerves: 'Normal. FACIAL WEAKNESS, often bilateral, occurs in a substantial minority and should be looked for.',
        },
      },

      section_2_mechanism: {
        what_it_is: 'An ACUTE IMMUNE-MEDIATED POLYRADICULONEUROPATHY — the immune system attacks the peripheral nerves and nerve roots.',
        molecular_mimicry_the_central_idea:
          'The lipooligosaccharide on the surface of Campylobacter jejuni closely RESEMBLES gangliosides — glycolipids concentrated in peripheral nerve membranes. The immune system mounts an appropriate response against the bacterium, and the resulting antibodies CROSS-REACT with the patient own nerves. This is MOLECULAR MIMICRY, and it explains both the delay of one to three weeks (the time to mount an antibody response) and why the illness continues after the infection has cleared.',
        why_distal_first_and_ascending:
          'The longest nerves have the greatest surface area of myelin and the longest axons, so they are affected earliest and most severely. Hence weakness starts in the feet and climbs.',
        the_subtypes: {
          aidp: 'ACUTE INFLAMMATORY DEMYELINATING POLYRADICULONEUROPATHY — the commonest form in Europe and North America. The MYELIN SHEATH is attacked, so conduction slows or blocks. Because the axon is preserved, recovery is usually good once remyelination occurs.',
          aman: 'ACUTE MOTOR AXONAL NEUROPATHY — the AXON itself is attacked. Commoner in Asia and after Campylobacter. Recovery is slower and often less complete, because axons must regrow at roughly 1 mm per day.',
          miller_fisher_syndrome:
            'A variant with the triad of OPHTHALMOPLEGIA (eye movement paralysis), ATAXIA (incoordination) and AREFLEXIA, associated with ANTI-GQ1B ANTIBODIES. It often DESCENDS rather than ascends, which is why a descending pattern does not exclude the diagnosis.',
        },
        why_breathing_fails_silently: {
          the_mechanism: 'The DIAPHRAGM and intercostal muscles are supplied by peripheral nerves, and they weaken along with everything else. This is VENTILATORY (pump) failure, not a problem of gas exchange.',
          why_the_saturation_lies:
            'The lungs themselves are NORMAL. Gas exchange across the alveolar membrane is fine. A patient can maintain a saturation of 98% on air right up until the muscles fail completely, and then decompensate catastrophically within minutes. THE OXYGEN SATURATION IS THE MOST REASSURING AND MOST MISLEADING NUMBER IN THIS DISEASE. Similarly, the carbon dioxide rises only LATE — by the time the blood gas is abnormal, the patient needs intubating immediately, and a normal gas is not reassurance.',
        },
      },

      section_3_differentials: {
        one_guillain_barre_syndrome: 'WORKING DIAGNOSIS. Supporting: ascending symmetrical weakness over days, AREFLEXIA, mild sensory signs, preceding diarrhoeal illness, autonomic instability, no sphincter involvement.',
        two_transverse_myelitis_or_cord_compression: {
          why_it_must_be_excluded: 'It is the diagnosis that is MISSED and that has a different, urgent treatment.',
          distinguishing_features: 'A SENSORY LEVEL on the trunk — test carefully with a pin from the feet upwards. EARLY BLADDER AND BOWEL involvement. UPGOING plantars and eventually BRISK reflexes, though in the acute phase spinal shock can produce flaccid areflexia and mimic Guillain-Barré exactly.',
          the_action: 'IF THERE IS ANY DOUBT, GET AN URGENT MRI OF THE SPINE. Do not attribute back pain plus leg weakness to Guillain-Barré without considering the cord.',
        },
        three_myasthenia_gravis: 'FATIGABLE weakness that worsens with repeated use and improves with rest, typically with ptosis and diplopia, and PRESERVED REFLEXES. Reflexes are the key discriminator.',
        four_botulism: 'DESCENDING weakness beginning with cranial nerves — blurred vision, ptosis, dysphagia — with DILATED UNREACTIVE PUPILS and a dry mouth. History of home-preserved food, or wound botulism in injecting drug users.',
        five_hypokalaemic_or_other_periodic_paralysis: 'Sudden profound flaccid weakness. CHECK THE POTASSIUM in every acute weakness — it is instantly treatable.',
        six_tick_paralysis: 'Ascending flaccid paralysis that resolves on removing the tick. SEARCH THE SCALP AND SKIN in an endemic area — it is one of the few instantly curable causes.',
        seven_poliomyelitis_and_other_causes: 'Consider polio and West Nile virus in relevant settings — typically ASYMMETRICAL, febrile, and purely motor.',
        eight_toxic_and_metabolic: 'Heavy metals, organophosphates, diphtheria, porphyria, and critical illness polyneuropathy in an intensive care patient.',
      },

      section_4_investigations: {
        the_test_that_matters_most_is_at_the_bedside: {
          forced_vital_capacity: {
            what_it_is: 'The volume of air a patient can blow out after taking the deepest possible breath, measured with a handheld spirometer at the bedside. Normal is roughly 60 to 70 mL/kg — about 4 to 5 litres in an adult male.',
            the_20_30_40_rule:
              'THE RULE THAT SAVES LIVES. FVC below 20 mL/kg · maximum INSPIRATORY pressure weaker than 30 cmH2O · maximum EXPIRATORY pressure weaker than 40 cmH2O. ANY of these means intensive care and probable intubation. FOR A 70 kg MAN, 20 mL/kg IS 1.4 LITRES.',
            his_number: 'HIS FVC IS 1.6 LITRES, which is 23 mL/kg. HE IS ALREADY CLOSE TO THE THRESHOLD despite a saturation of 98% and no distress. He needs intensive care review NOW and FVC measured at least every 4 hours, more often if it is falling.',
            how_often: 'Measure it 4-hourly during progression, and SITTING AND LYING if possible — a fall of more than 20% on lying flat indicates significant diaphragmatic weakness.',
            the_bedside_alternative:
              'THE SINGLE BREATH COUNT. Ask the patient to take a maximal breath and count aloud steadily from 1. Counting to about 25 corresponds roughly to a normal vital capacity; below about 15 is concerning. It requires no equipment and can be done anywhere, so there is no excuse for not assessing respiratory muscle strength.',
          },
          why_not_the_saturation_or_the_blood_gas:
            'BOTH REMAIN NORMAL UNTIL THE PATIENT IS ABOUT TO ARREST, because the lungs are healthy and this is pump failure. Waiting for desaturation or a rising carbon dioxide means intubating a patient who has already decompensated, in an emergency, rather than electively. THIS IS THE SINGLE MOST IMPORTANT PRINCIPLE IN THE CASE.',
        },
        lumbar_puncture: {
          the_finding: 'ALBUMINOCYTOLOGICAL DISSOCIATION — a RAISED PROTEIN with a NORMAL CELL COUNT. Literally, the albumin (protein) and the cytology (cells) are dissociated: one is abnormal and the other is not.',
          why_it_happens: 'Inflammation of the nerve roots as they traverse the subarachnoid space leaks protein into the cerebrospinal fluid, but there is no significant cellular infiltrate.',
          the_timing_caveat_that_causes_false_reassurance:
            'THE PROTEIN IS OFTEN NORMAL IN THE FIRST WEEK, rising thereafter and peaking at around 4 to 6 weeks. A NORMAL EARLY LUMBAR PUNCTURE DOES NOT EXCLUDE THE DIAGNOSIS. Treating on clinical grounds while awaiting confirmation is correct.',
          the_other_reason_to_do_it: 'A RAISED CELL COUNT points AWAY from typical Guillain-Barré and towards HIV seroconversion, Lyme disease, sarcoidosis, or malignant infiltration of the roots. So the cell count is as informative as the protein.',
          normal_values: 'Protein 0.15 to 0.45 g/L; white cells fewer than 5 per mm3.',
        },
        nerve_conduction_studies: 'Confirm the diagnosis and distinguish demyelinating from axonal forms. Expected in AIDP: slowed conduction velocity, prolonged distal latencies, conduction block, and prolonged or absent F-waves — F-waves are affected EARLY because they test the proximal nerve roots where the disease begins. NOTE THAT STUDIES MAY BE NORMAL IN THE FIRST WEEK. Do not delay treatment for them.',
        bloods: 'Full blood count · urea and electrolytes including POTASSIUM, MAGNESIUM and CALCIUM · glucose and HbA1c · liver function · CREATINE KINASE to exclude myositis · thyroid function · vitamin B12 · HIV test · stool culture for Campylobacter · and ANTI-GANGLIOSIDE ANTIBODIES where available, particularly ANTI-GQ1B if Miller Fisher variant is suspected.',
        mri_spine: 'IF THERE IS ANY SUGGESTION OF A CORD LESION — a sensory level, sphincter disturbance, or upgoing plantars. Gadolinium enhancement of the nerve roots supports Guillain-Barré, but the primary purpose is to exclude compression.',
        ecg_and_cardiac_monitoring: 'Mandatory. Autonomic dysfunction causes arrhythmia, including asystole, and sudden death.',
      },

      section_5_management: {
        a_the_priority_is_the_airway_not_the_immunotherapy: {
          statement:
            'PATIENTS WITH GUILLAIN-BARRE DIE OF RESPIRATORY FAILURE, AUTONOMIC INSTABILITY AND VENOUS THROMBOEMBOLISM — not of untreated inflammation. Immunotherapy shortens the illness; supportive care determines survival. Get the priorities the right way round.',
          actions: 'Admit to a monitored bed with intensive care input. FVC at least 4-hourly. Continuous cardiac monitoring. Assess SWALLOW before anything by mouth — bulbar weakness causes aspiration. Intubate ELECTIVELY on the trend, not as an emergency on collapse.',
          when_to_intubate: 'FVC below 20 mL/kg or falling rapidly · inability to clear secretions · bulbar failure · rising carbon dioxide (which is a LATE sign). An elective intubation in a controlled setting is far safer than an emergency one in a patient with autonomic instability.',
          suxamethonium_warning: 'AVOID SUXAMETHONIUM for intubation. Denervated muscle upregulates acetylcholine receptors, and suxamethonium then causes a massive potassium release, hyperkalaemia and cardiac arrest. Use a non-depolarising agent. This applies from a few days after denervation and for months afterwards.',
        },
        b_immunotherapy: {
          intravenous_immunoglobulin: {
            dose: 'IVIG 0.4 g/kg per day for 5 days — a TOTAL of 2 g/kg. FOR A 70 kg MAN: 28 g per day for 5 days, 140 g in total.',
            practical: 'Infuse slowly at first and increase as tolerated. Usually the FIRST CHOICE because it is easier to give, needs no specialised equipment, and works as well as plasma exchange.',
            adverse_effects: 'Headache and aseptic meningitis · fever and chills during infusion · ACUTE KIDNEY INJURY, especially with sucrose-containing preparations and in existing renal impairment · THROMBOSIS, because it increases blood viscosity — relevant in an already immobile patient · anaphylaxis in IgA-deficient patients, so CHECK IgA LEVELS where the service requires it · haemolysis.',
          },
          plasma_exchange: {
            what_it_is: 'The patient plasma, containing the pathogenic antibodies, is removed and replaced with albumin or donor plasma. Typically 5 exchanges over 1 to 2 weeks.',
            equivalence: 'EQUALLY EFFECTIVE to IVIG. Choice depends on availability, vascular access and comorbidity. It needs large-bore vascular access and specialist equipment, which limits it in many settings.',
            do_not_combine: 'GIVING BOTH SEQUENTIALLY CONFERS NO ADDITIONAL BENEFIT. And plasma exchange AFTER IVIG simply removes the immunoglobulin you just gave.',
          },
          the_timing: 'Most effective when started within 2 WEEKS of symptom onset for IVIG, or 4 weeks for plasma exchange. Treat patients who cannot walk unaided; mildly affected, ambulant patients may be observed.',
          why_steroids_do_not_work: {
            the_fact: 'CORTICOSTEROIDS ARE NOT EFFECTIVE IN GUILLAIN-BARRE SYNDROME AND SHOULD NOT BE GIVEN. Trials show no benefit, and oral steroids may even slow recovery.',
            why_it_is_worth_knowing:
              'This is genuinely counter-intuitive. Steroids work in multiple sclerosis relapse, in chronic inflammatory demyelinating polyradiculoneuropathy, in myasthenia and in most inflammatory neuropathies. Guillain-Barré is the exception. The probable reason is that the damage is antibody- and complement-mediated and largely done by the time of presentation, and steroids may impair the macrophage-mediated clearance of myelin debris that recovery requires. REMEMBERING THE EXCEPTION MATTERS BECAUSE THE INSTINCT TO REACH FOR STEROIDS IS STRONG.',
          },
        },
        c_the_supportive_care_that_actually_prevents_death: {
          venous_thromboembolism: 'HIGH RISK from immobility. LOW MOLECULAR WEIGHT HEPARIN prophylaxis plus intermittent pneumatic compression for every non-ambulant patient. PULMONARY EMBOLISM IS A LEADING CAUSE OF DEATH IN THIS DISEASE, and prophylaxis is the single easiest thing to get right.',
          autonomic_monitoring: 'Continuous cardiac monitoring. Treat significant bradyarrhythmia; some patients need temporary pacing. Be cautious with drugs that affect blood pressure — the response is exaggerated and unpredictable. Watch for ileus and urinary retention.',
          pain: 'NEUROPATHIC PAIN IS SEVERE AND SYSTEMATICALLY UNDER-TREATED in this disease, particularly back and limb pain. Use gabapentin or pregabalin, with opioids if needed. Ask about it directly — patients who cannot move often do not volunteer it, and an intubated patient cannot.',
          pressure_areas_and_contractures: 'Regular repositioning, pressure-relieving mattress, early passive physiotherapy and splinting to prevent foot drop and contractures.',
          nutrition_and_swallow: 'Formal swallow assessment. Nasogastric feeding if unsafe. Ileus is common.',
          eye_care: 'If there is facial weakness, the eye may not close. Lubricate and tape to prevent exposure keratopathy.',
          psychological: 'A fully conscious patient becoming progressively paralysed and possibly ventilated is TERRIFYING. Explain everything, establish a communication method BEFORE intubation, and remember that a paralysed patient can hear every word spoken at the bedside. This is not a soft addition — anxiety and post-traumatic stress after this illness are common and severe.',
        },
        d_prognosis_and_recovery: {
          the_course: 'Progression for up to 4 weeks, then a PLATEAU of days to weeks, then RECOVERY over weeks to months. Most patients improve substantially.',
          the_numbers: 'Roughly 20 to 30% require mechanical ventilation. Around 80% walk independently at 6 months. Mortality is roughly 3 to 7%, mainly from respiratory failure, autonomic collapse, pulmonary embolism and hospital-acquired infection. Perhaps 20% have significant residual disability, and FATIGUE is very common and long-lasting.',
          worse_prognosis: 'Older age · rapid onset · preceding diarrhoeal illness, especially Campylobacter · need for ventilation · axonal subtype on nerve conduction studies.',
          rehabilitation: 'Prolonged multidisciplinary rehabilitation is the rule, not the exception. Warn the patient and family early that recovery is measured in months.',
          the_relapse_warning: 'A small proportion deteriorate again after initial improvement — TREATMENT-RELATED FLUCTUATION — and may need a second course. If weakness continues to progress or relapses beyond 8 weeks, reconsider the diagnosis as chronic inflammatory demyelinating polyradiculoneuropathy, which IS steroid-responsive.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_saturation_is_the_most_dangerous_number:
          'The lungs are normal; this is PUMP failure. Oxygen saturation and carbon dioxide stay normal until the respiratory muscles fail completely, and then the patient decompensates within minutes. Monitoring the saturation instead of the vital capacity is how these patients arrest on a general ward.',
        bonus_2_the_20_30_40_rule:
          'FVC below 20 mL/kg, maximum inspiratory pressure weaker than 30 cmH2O, maximum expiratory pressure weaker than 40 cmH2O. Any one means intensive care. For a 70 kg adult, 20 mL/kg is 1.4 litres. Measure it 4-hourly, sitting and lying.',
        bonus_3_the_single_breath_count:
          'One maximal breath, then count aloud steadily. About 25 approximates a normal vital capacity; below 15 is concerning. It needs no equipment, so respiratory muscle strength can be assessed anywhere, on any ward, at any hour.',
        bonus_4_albuminocytological_dissociation_and_its_timing_trap:
          'Raised protein, normal cells — root inflammation leaks protein without a cellular infiltrate. BUT the protein is often normal in the first week. A normal early tap does not exclude the diagnosis, and a RAISED CELL COUNT should send you looking for HIV, Lyme disease or malignant infiltration instead.',
        bonus_5_why_steroids_fail_here_when_they_work_everywhere_else:
          'Guillain-Barré is the exception among inflammatory neuropathies. The injury is antibody- and complement-mediated and largely complete at presentation, and steroids may impair the macrophage clearance of myelin debris that recovery depends on. If the patient is still progressing at 8 weeks, the diagnosis is probably CIDP — which IS steroid-responsive.',
        bonus_6_suxamethonium_can_kill_here:
          'Denervated muscle upregulates acetylcholine receptors, so suxamethonium causes massive potassium release and cardiac arrest. Use a non-depolarising agent, and flag it clearly in the notes for anyone who may intubate.',
        trap_1: 'Do not give IVIG and plasma exchange together — no added benefit, and exchange after IVIG removes what you just gave.',
        trap_2: 'Autonomic dysfunction kills. Cardiac monitoring is not optional, and it is missed because attention is on the limbs.',
        trap_3: 'Give thromboprophylaxis. Pulmonary embolism is a leading cause of death and prophylaxis is the easiest thing to get right.',
        trap_4: 'Ask about pain directly. It is severe, systematically under-treated, and an intubated patient cannot tell you.',
        trap_5: 'A sensory level, early sphincter involvement or upgoing plantars means image the spine — cord compression is the diagnosis you cannot afford to miss.',
        trap_6: 'Miller Fisher variant DESCENDS. A descending pattern does not exclude the diagnosis.',
        one_line_summary: 'Guillain-Barré after Campylobacter. Measure the forced vital capacity, not the saturation; intubate electively on the trend; IVIG 0.4 g/kg for 5 days; no steroids; and remember that thromboprophylaxis and cardiac monitoring save more lives than the immunotherapy.',
      },
    },
    warnings: [
      'MEASURE THE FORCED VITAL CAPACITY, not the oxygen saturation. The lungs are normal — saturation stays at 98% until the patient arrests.',
      'The 20/30/40 rule: FVC below 20 mL/kg, MIP weaker than 30, MEP weaker than 40 — any one means intensive care.',
      'A normal blood gas is NOT reassurance — carbon dioxide rises only when the patient already needs intubating.',
      'Intubate ELECTIVELY on the falling trend, never as an emergency on collapse.',
      'AVOID SUXAMETHONIUM — denervated muscle releases massive potassium and causes cardiac arrest.',
      'CORTICOSTEROIDS DO NOT WORK in Guillain-Barré and should not be given, despite working in almost every other inflammatory neuropathy.',
      'Do NOT give IVIG and plasma exchange together — no benefit, and exchange after IVIG removes what you just gave.',
      'Continuous CARDIAC MONITORING is mandatory — autonomic dysfunction causes arrhythmia and sudden death.',
      'Give thromboprophylaxis — pulmonary embolism is a leading cause of death in this disease.',
      'A normal cerebrospinal fluid protein in the first week does NOT exclude the diagnosis.',
      'A raised CSF cell count points away from Guillain-Barré — think HIV, Lyme disease or malignant infiltration.',
      'A sensory level, early bladder involvement or upgoing plantars means image the spine urgently.',
      'Neuropathic pain is severe and under-treated — ask directly, especially in a patient who cannot speak.',
      'Doses here are teaching examples for an adult. Follow your local neurology protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Ventilation thresholds, immunotherapy choice and rehabilitation pathways follow local practice.',
      'Variant forms differ in presentation and prognosis; nerve conduction studies and antibody testing require specialist interpretation.',
    ],
    cards: [
      { q: 'Which bedside measurement matters most, and why not the saturation?', a: 'Forced vital capacity. The lungs are normal — this is pump failure, so saturation stays normal until collapse.' },
      { q: 'State the 20/30/40 rule.', a: 'FVC below 20 mL/kg, maximum inspiratory pressure weaker than 30 cmH2O, maximum expiratory pressure weaker than 40 cmH2O — any one means ICU.' },
      { q: 'What is the single breath count?', a: 'Count aloud after one maximal breath — about 25 approximates a normal vital capacity, below 15 is concerning.' },
      { q: 'What is albuminocytological dissociation?', a: 'Raised CSF protein with a normal cell count — but often normal in the first week.' },
      { q: 'What is the cardinal examination sign?', a: 'Areflexia or marked hyporeflexia with downgoing plantars.' },
      { q: 'Which organism is the classic trigger, and by what mechanism?', a: 'Campylobacter jejuni, by molecular mimicry between its lipooligosaccharide and nerve gangliosides.' },
      { q: 'Give the IVIG regimen for a 70 kg adult.', a: '0.4 g/kg per day for 5 days = 28 g daily, 140 g total (2 g/kg).' },
      { q: 'Why are steroids not given?', a: 'They are ineffective and may slow recovery — Guillain-Barré is the exception among inflammatory neuropathies.' },
      { q: 'Why must suxamethonium be avoided?', a: 'Denervated muscle upregulates acetylcholine receptors, causing massive potassium release and cardiac arrest.' },
      { q: 'Name the Miller Fisher triad.', a: 'Ophthalmoplegia, ataxia and areflexia, with anti-GQ1b antibodies — and it often descends.' },
      { q: 'Which findings should send you to image the spine?', a: 'A sensory level, early bladder or bowel involvement, or upgoing plantars.' },
      { q: 'What are the leading causes of death?', a: 'Respiratory failure, autonomic collapse, pulmonary embolism and hospital-acquired infection.' },
    ],
    checks: [
      'Forced vital capacity measured and repeated at least 4-hourly',
      'Single breath count documented if no spirometer',
      'Continuous cardiac monitoring for autonomic dysfunction',
      'Intensive care informed early',
      'Swallow assessed before anything by mouth',
      'Suxamethonium contraindication flagged in the notes',
      'Thromboprophylaxis prescribed',
      'Spine imaged if any suggestion of a cord lesion',
      'IVIG or plasma exchange started — not both',
      'Steroids NOT given',
      'Neuropathic pain asked about and treated',
      'Communication method established before any intubation',
      'Rehabilitation and realistic recovery timeline discussed',
    ],
    related: ['mcdonald_criteria_diagnosing_multiple_sclerosis_by_dissemination_in_space_and_time'],
  },

  {
    id: 'AS-CASE-0017',
    type: 'case',
    specialty: 'Medicine — Haematology',
    teaching_case: true,
    title: 'CASE: Severe Bone Pain in a Young Man with Sickle Cell Disease',
    short: 'Case: sickle cell vaso-occlusive crisis',
    summary:
      'A 22-year-old with HbSS and 12 hours of severe limb and back pain. Teaches why analgesia is given within 30 minutes and is not negotiable, why a normal haemoglobin can be the worst sign in the room, and how acute chest syndrome kills a patient who came in with a painful arm.',
    domains: ['haematology', 'emergency_medicine', 'internal_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'case sickle cell', 'vaso-occlusive crisis case', 'sickle cell pain crisis',
      'acute chest syndrome', 'sequestration crisis', 'aplastic crisis parvovirus',
      'hydroxyurea', 'exchange transfusion sickle', 'hbss',
    ],
    terms: [
      'case', 'sickle cell', 'hbss', 'vaso-occlusive crisis', 'sickling', 'haemoglobin s',
      'acute chest syndrome', 'splenic sequestration', 'aplastic crisis', 'parvovirus b19',
      'hyposplenism', 'incentive spirometry', 'hydroxyurea', 'exchange transfusion',
      'priapism', 'avascular necrosis', 'reticulocyte',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '22-year-old man with known sickle cell disease (HbSS) presents with 12 hours of severe pain in both arms, the lower back and both thighs, which started after he walked home in cold rain. He rates the pain 9 out of 10.',

      section_1_clerking: {
        history:
          'Pain began gradually last night in both upper arms, then spread to the lower back and thighs. It is deep, constant and boring in character, similar to his previous crises but worse. He has taken his usual paracetamol and ibuprofen at home without relief. No fever, no cough, no breathlessness, no chest pain. NO NEW NEUROLOGICAL SYMPTOMS. He has had 4 admissions in the last year.',
        the_precipitants_to_ask_about_every_time:
          'COLD EXPOSURE (he walked home in cold rain — cold causes vasoconstriction and promotes sickling) · DEHYDRATION · INFECTION · HYPOXIA including air travel and altitude · ACIDOSIS · physical exertion · emotional stress · alcohol · pregnancy · and menstruation. Identifying the trigger allows prevention of the next crisis. IN MANY CRISES NO TRIGGER IS FOUND, and that does not make the crisis less real.',
        the_questions_that_screen_for_the_complications_that_kill:
          'ASK EVERY ONE OF THESE, EVEN IF THE PATIENT PRESENTS ONLY WITH LIMB PAIN: Any CHEST PAIN, COUGH OR BREATHLESSNESS (acute chest syndrome)? Any FEVER (infection in a functionally asplenic patient)? Any ABDOMINAL PAIN OR LEFT-SIDED FULLNESS (splenic sequestration)? Any HEADACHE, WEAKNESS, SPEECH OR VISUAL CHANGE (stroke)? Any PROLONGED PAINFUL ERECTION (priapism)? PATIENTS DO NOT VOLUNTEER PRIAPISM — YOU MUST ASK, and it causes permanent impotence if untreated beyond a few hours.',
        past_medical_history: 'HbSS diagnosed in infancy. Previous ACUTE CHEST SYNDROME aged 17, requiring exchange transfusion. Cholecystectomy for pigment gallstones aged 19. Avascular necrosis of the right hip. No stroke.',
        drug_history:
          'HYDROXYUREA 1 g daily — but he admits missing doses. PENICILLIN V 250 mg twice daily prophylaxis. FOLIC ACID 5 mg daily. Paracetamol and ibuprofen as needed. IMMUNISATIONS: pneumococcal, meningococcal, Haemophilus influenzae type b and annual influenza — CHECK THESE ARE UP TO DATE, because he is functionally asplenic.',
        the_analgesia_history_that_is_often_handled_badly:
          'ASK WHAT NORMALLY WORKS AND AT WHAT DOSE. Patients with sickle cell disease know their own analgesic requirements better than the clinician meeting them for the first time, and many have an individualised care plan. Many are also opioid-tolerant from repeated crises and therefore need HIGHER doses than an opioid-naive patient — this is TOLERANCE, not addiction. TREAT THE PATIENT ACCOUNT OF THEIR PAIN AS ACCURATE.',
        vitals: 'BP 128/72 mmHg. Pulse 104. Respiratory rate 20. Temperature 37.2. SATURATION 96% on air — CHECK WHAT HIS BASELINE IS, because many patients with sickle cell disease run lower than 98%, and a "normal" reading may represent a fall. Pain score 9/10.',
        examination:
          'In obvious distress. Tenderness over both humeri, the lumbar spine and both femora, with no swelling, redness or warmth. CHEST CLEAR ON AUSCULTATION — but note that acute chest syndrome frequently has a NORMAL examination and a normal chest radiograph in the first 24 hours. Abdomen soft, SPLEEN NOT PALPABLE (expected in an adult with HbSS, who has usually auto-infarcted the spleen by adolescence). Mild scleral icterus from chronic haemolysis. No focal neurological deficit. Both legs examined for ulcers.',
      },

      section_2_mechanism: {
        the_molecular_defect:
          'A single point mutation in the beta-globin gene substitutes VALINE for GLUTAMIC ACID at position 6. Glutamic acid is charged and water-loving; valine is uncharged and water-hating. The result is HAEMOGLOBIN S.',
        why_it_sickles:
          'WHEN DEOXYGENATED, the exposed hydrophobic valine allows haemoglobin S molecules to POLYMERISE into long rigid fibres. These distort the red cell into the characteristic sickle shape. Early sickling is reversible on re-oxygenation, but repeated cycles damage the membrane and produce IRREVERSIBLY SICKLED CELLS.',
        the_two_consequences: {
          vaso_occlusion: 'Rigid, sticky sickled cells obstruct the microcirculation. Downstream tissue becomes ISCHAEMIC, causing infarction and PAIN. In bone — where the marrow has a sluggish, low-oxygen circulation — this causes the severe deep bone pain of a crisis. It is genuine tissue infarction, which is why the pain is so severe.',
          haemolysis: 'Sickled cells are fragile and survive roughly 10 to 20 days instead of 120. This causes chronic ANAEMIA, JAUNDICE from unconjugated bilirubin, PIGMENT GALLSTONES, and a high reticulocyte count as the marrow compensates. Free haemoglobin released into plasma also MOPS UP NITRIC OXIDE, causing vasoconstriction and contributing to pulmonary hypertension, priapism and leg ulcers.',
        },
        what_makes_sickling_worse: 'HYPOXIA · ACIDOSIS, which shifts the oxygen dissociation curve and promotes deoxygenation · DEHYDRATION, which concentrates haemoglobin inside the cell and accelerates polymerisation · COLD, causing vasoconstriction · and INFECTION, which combines several of these. Every element of treatment is aimed at reversing one of them.',
        why_the_spleen_stops_working:
          'Repeated splenic infarction from childhood leads to AUTOSPLENECTOMY — a shrunken, fibrotic, non-functioning spleen, usually by adolescence. The spleen clears ENCAPSULATED ORGANISMS, so these patients are at lifelong risk of OVERWHELMING SEPSIS from Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis and Salmonella. THIS IS WHY FEVER IN A SICKLE CELL PATIENT IS AN EMERGENCY, and why penicillin prophylaxis and vaccination are lifelong.',
      },

      section_3_differentials: {
        one_vaso_occlusive_crisis: 'WORKING DIAGNOSIS. Supporting: known HbSS, typical distribution and character, cold precipitant, similar to previous crises.',
        two_acute_chest_syndrome: {
          why_it_dominates_the_case: 'IT IS THE LEADING CAUSE OF DEATH IN SICKLE CELL DISEASE and it frequently DEVELOPS DURING an admission for limb pain, typically at 24 to 72 hours.',
          definition: 'A NEW PULMONARY INFILTRATE on chest radiograph PLUS at least one of: fever, chest pain, cough, wheeze, tachypnoea or hypoxia.',
          the_vicious_cycle: 'Pain causes SPLINTING — shallow breathing to avoid pain — which causes ATELECTASIS (lung collapse), which causes local HYPOXIA, which causes further SICKLING in the pulmonary vessels, which causes more infarction and more pain. Opioids worsen it by depressing respiration. So the treatment for the pain can precipitate the complication that kills.',
          the_prevention: 'INCENTIVE SPIROMETRY — see management. This is the specific reason it is prescribed.',
        },
        three_infection_including_osteomyelitis: 'Fever is an emergency in a functionally asplenic patient. OSTEOMYELITIS mimics a bone crisis exactly, and SALMONELLA is characteristically implicated in sickle cell disease. Distinguishing features: focal swelling, redness and warmth, persistent fever, and pain that does not follow the usual crisis pattern. If in doubt, image and culture.',
        four_splenic_sequestration: 'Sudden pooling of blood in the spleen causing a RAPIDLY ENLARGING SPLEEN, a FALLING HAEMOGLOBIN and HYPOVOLAEMIC SHOCK. Mainly a disease of young children, since adults with HbSS have usually auto-infarcted, but it occurs in adults with HbSC and sickle-beta-thalassaemia. PALPATE THE SPLEEN.',
        five_aplastic_crisis: 'PARVOVIRUS B19 infects red cell precursors and temporarily shuts down marrow production. The haemoglobin falls sharply and — the diagnostic clue — the RETICULOCYTE COUNT IS LOW, whereas in every other sickle complication it is high. Treated with transfusion until the marrow recovers.',
        six_stroke: 'Sickle cell disease is a major cause of stroke in young people, including silent infarcts. Any new neurological symptom requires urgent imaging and usually EXCHANGE transfusion.',
        seven_avascular_necrosis_and_other_chronic_causes: 'Hip or shoulder pain that persists between crises suggests avascular necrosis rather than acute vaso-occlusion — it needs imaging and orthopaedic input, not escalating opioids.',
        eight_other_acute_abdomen_causes: 'Do not attribute every abdominal pain to a crisis. Cholecystitis from pigment stones, appendicitis and bowel pathology all occur, and are missed by assuming.',
      },

      section_4_investigations: {
        full_blood_count_and_the_most_important_comparison: {
          the_rule:
            'COMPARE EVERY RESULT WITH HIS STEADY-STATE BASELINE, NOT WITH THE LABORATORY NORMAL RANGE. A patient whose usual haemoglobin is 78 g/L is at his baseline at 78, and a "reassuring" 105 g/L would be strange and worth explaining. Find previous results — this single habit prevents most of the misinterpretation in sickle cell care.',
          expected: 'Haemoglobin at or slightly below baseline. White cells often raised even without infection, because of chronic inflammation and marrow stimulation.',
        },
        reticulocyte_count: {
          why_it_is_the_key_test: 'Reticulocytes are immature red cells, and the count shows whether the marrow is responding.',
          interpretation: 'HIGH — expected, showing an active marrow compensating for haemolysis. LOW WITH A FALLING HAEMOGLOBIN — APLASTIC CRISIS, usually parvovirus B19. This is the single test that distinguishes it, and it changes management entirely.',
        },
        chest_radiograph: 'INDICATED IF THERE IS ANY chest symptom, fever, hypoxia, or a fall in saturation. REMEMBER IT IS FREQUENTLY NORMAL IN THE FIRST 24 HOURS OF ACUTE CHEST SYNDROME — a normal film early does not exclude it, and it should be repeated if symptoms evolve.',
        bloods: 'Urea and electrolytes · liver function including BILIRUBIN, which is raised from haemolysis · LDH, raised in haemolysis · CRP · GROUP AND SAVE WITH AN EXTENDED PHENOTYPE (see below) · blood cultures if febrile · and a reticulocyte count.',
        the_extended_red_cell_phenotype_point:
          'Patients with sickle cell disease receive many transfusions over a lifetime and readily form ALLOANTIBODIES against donor red cell antigens, which makes future cross-matching progressively harder and can cause DELAYED HAEMOLYTIC TRANSFUSION REACTIONS. Blood should be matched for an EXTENDED PHENOTYPE — at least Rh (C, D, E) and Kell — not just ABO and RhD. Arrange it early, because it takes the laboratory time.',
        oxygen_saturation_and_gas: 'Continuous saturation monitoring, compared with his own baseline. Blood gas if hypoxic or breathless.',
        imaging_for_specific_concerns: 'MRI for suspected osteomyelitis or avascular necrosis. Urgent CT or MRI brain for neurological symptoms. Abdominal ultrasound for abdominal pain or a palpable spleen. Transcranial Doppler is a screening tool in children, not an acute test.',
        what_is_not_useful: 'A "sickle test" or haemoglobin electrophoresis in a patient with an established diagnosis adds nothing acutely. There is NO blood test that confirms a vaso-occlusive crisis — IT IS A CLINICAL DIAGNOSIS BASED ON THE PATIENT ACCOUNT OF THEIR PAIN. Waiting for a test to validate the pain is a failure of care.',
      },

      section_5_management: {
        a_analgesia_within_thirty_minutes: {
          the_standard:
            'STRONG ANALGESIA SHOULD BE GIVEN WITHIN 30 MINUTES OF ARRIVAL, and the pain reassessed within 30 minutes of that. THIS IS THE MOST FREQUENTLY BREACHED STANDARD IN SICKLE CELL CARE, and the delay is well documented to be driven by unfounded suspicion of drug-seeking. A patient in crisis is experiencing bone infarction.',
          the_regimen:
            'For SEVERE pain: MORPHINE 0.1 mg/kg intravenously or subcutaneously, titrated in 2 to 2.5 mg increments every 5 to 10 minutes until pain is controlled, then regular dosing or PATIENT-CONTROLLED ANALGESIA. FOR A 70 kg MAN a typical initial dose is 5 to 10 mg, but FOLLOW HIS INDIVIDUAL CARE PLAN if one exists, because he may routinely need more.',
          adjuncts: 'PARACETAMOL 1 g orally or intravenously every 6 hours. An NSAID such as IBUPROFEN 400 mg three times daily or DICLOFENAC, PROVIDED renal function is acceptable and there is no contraindication — many patients with sickle cell disease have sickle nephropathy, so check the creatinine. A regular LAXATIVE with every opioid prescription, since constipation is universal and itself causes abdominal pain. An ANTIEMETIC as needed. ANTIHISTAMINE for opioid-induced itch.',
          avoid_pethidine: 'PETHIDINE should be avoided. Its metabolite NORPETHIDINE accumulates, particularly with repeated dosing and in renal impairment, and causes agitation, tremor and SEIZURES. It has no advantage over morphine.',
          the_monitoring_that_must_accompany_opioids:
            'Respiratory rate, sedation score and oxygen saturation. OPIOIDS CAUSE HYPOVENTILATION, WHICH CAUSES ATELECTASIS AND HYPOXIA, WHICH PRECIPITATES ACUTE CHEST SYNDROME. This is precisely why incentive spirometry is prescribed alongside them, and why "give more morphine" is never the whole plan.',
          the_attitude_point:
            'Repeated attendance is a feature of the DISEASE, not of the patient character. Opioid tolerance from years of genuine crises is not addiction. Documented individualised care plans exist for exactly this reason — follow them.',
        },
        b_hydration: 'Encourage oral fluids. If unable to drink or clinically dehydrated, give intravenous fluid at maintenance — typically around 1.5 times maintenance, guided by clinical assessment. DO NOT OVERLOAD: excessive fluid causes pulmonary oedema and CONTRIBUTES TO ACUTE CHEST SYNDROME. Monitor input, output and daily weight.',
        c_oxygen: 'Give oxygen ONLY IF THE SATURATION IS BELOW HIS BASELINE or below about 95%. Routine oxygen in a normoxic patient does not help and may mask deterioration. Target his usual baseline.',
        d_the_incentive_spirometry_that_prevents_the_thing_that_kills: {
          what_it_is: 'A simple handheld device the patient inhales through, raising a ball or piston, providing feedback on the depth of breath.',
          the_prescription: 'TEN BREATHS EVERY TWO HOURS WHILE AWAKE.',
          why: 'IT PREVENTS ACUTE CHEST SYNDROME. Pain causes splinting, splinting causes atelectasis, atelectasis causes local hypoxia, and hypoxia causes further sickling in the lung. Incentive spirometry interrupts that cycle at the first step. It is a cheap plastic device that reduces the incidence of the leading cause of death in this disease, and it is one of the most frequently omitted prescriptions on the drug chart.',
        },
        e_infection: 'If febrile, take blood cultures and START BROAD-SPECTRUM ANTIBIOTICS PROMPTLY — he is functionally asplenic and can deteriorate within hours. Do not wait for a source. Continue penicillin prophylaxis. Check vaccinations are current.',
        f_thromboprophylaxis: 'Sickle cell disease is PROTHROMBOTIC and these patients are immobile in pain. Prescribe low molecular weight heparin unless contraindicated. Venous thromboembolism is common and under-recognised in this group.',
        g_transfusion_and_the_distinction_that_matters: {
          the_default: 'MOST VASO-OCCLUSIVE CRISES DO NOT NEED TRANSFUSION. Transfusing every crisis causes iron overload and alloimmunisation without benefit.',
          simple_transfusion: 'For symptomatic anaemia significantly below baseline, aplastic crisis, or acute sequestration. Aim to correct symptoms, NOT to normalise the haemoglobin.',
          exchange_transfusion:
            'Removes the patient sickle-containing blood and replaces it with donor blood, REDUCING THE PERCENTAGE OF HAEMOGLOBIN S — typically to below 30% — WITHOUT RAISING THE TOTAL HAEMOGLOBIN AND VISCOSITY. INDICATIONS: acute chest syndrome with hypoxia · STROKE · multi-organ failure · refractory priapism · and before major surgery in selected patients.',
          the_hyperviscosity_warning:
            'DO NOT RAISE THE HAEMOGLOBIN ABOVE ABOUT 100 g/L WITH SIMPLE TRANSFUSION. Higher haemoglobin increases blood VISCOSITY, which SLOWS microvascular flow and CAN WORSEN VASO-OCCLUSION. This is exactly why exchange, rather than simple transfusion, is used when a rapid reduction in haemoglobin S is needed.',
        },
        h_specific_emergencies: {
          acute_chest_syndrome: 'Oxygen, antibiotics covering typical and ATYPICAL organisms (Mycoplasma and Chlamydia are common triggers), careful fluid balance, adequate analgesia to allow deep breathing, incentive spirometry, bronchodilators if wheezy, and EXCHANGE TRANSFUSION if hypoxic or deteriorating. Involve intensive care early.',
          priapism: 'A urological emergency. Encourage fluids, analgesia and exercise; if it persists beyond about 4 hours, ASPIRATION AND IRRIGATION of the corpora with a sympathomimetic such as phenylephrine is needed. Delay causes permanent erectile dysfunction. ASK ABOUT IT — patients do not volunteer it.',
          stroke: 'Urgent imaging and URGENT EXCHANGE TRANSFUSION. Standard thrombolysis is not the pathway here.',
          aplastic_crisis: 'Transfuse and support; it is self-limiting as the marrow recovers. Isolate, since parvovirus B19 is transmissible and dangerous to pregnant contacts and other haemolytic patients.',
        },
        i_before_discharge_the_part_that_reduces_the_next_admission: {
          hydroxyurea: {
            what_it_does: 'Increases FETAL HAEMOGLOBIN (HbF), which does not participate in sickle polymer formation and therefore INTERFERES WITH SICKLING. It also lowers the white cell count and reduces cell adhesion.',
            the_evidence: 'It reduces the frequency of painful crises and of acute chest syndrome, reduces transfusion need, and IMPROVES SURVIVAL. He has had 4 admissions in a year and admits missing doses — OPTIMISING HIS ADHERENCE IS THE HIGHEST-VALUE ACTION IN THE WHOLE ADMISSION.',
            monitoring: 'Full blood count regularly for myelosuppression. Discuss contraception, as it is teratogenic.',
            the_conversation: 'Find out WHY he misses it — side effects, cost, forgetfulness, fear of a "chemotherapy drug", or not understanding that it works only if taken continuously. Address the actual reason.',
          },
          the_rest: 'Folic acid 5 mg daily for the demands of chronic haemolysis · penicillin prophylaxis · confirm vaccinations · annual retinal screening for proliferative sickle retinopathy · renal function monitoring · echocardiogram screening for pulmonary hypertension · leg ulcer care · trigger avoidance including cold and dehydration · a WRITTEN INDIVIDUALISED PAIN PLAN so the next emergency attendance is not another 3-hour wait for analgesia · genetic counselling · and specialist haematology follow-up.',
        },
      },

      section_6_teaching_points: {
        bonus_1_analgesia_within_thirty_minutes_is_a_standard_not_a_kindness:
          'Strong analgesia within 30 minutes of arrival, reassessed within 30 minutes of that. It is the most frequently breached standard in sickle cell care, and the delay is documented to be driven by unfounded suspicion of drug-seeking. The patient is having bone infarction. Opioid tolerance from years of genuine crises is tolerance, not addiction.',
        bonus_2_incentive_spirometry_prevents_the_leading_cause_of_death:
          'Ten breaths every two hours while awake. Pain causes splinting, splinting causes atelectasis, atelectasis causes hypoxia, hypoxia causes sickling in the lung. A cheap plastic device breaks that cycle at the first step — and it is one of the most commonly omitted prescriptions on the chart.',
        bonus_3_the_reticulocyte_count_finds_the_aplastic_crisis:
          'In every other sickle complication the reticulocyte count is HIGH. In aplastic crisis from parvovirus B19 it is LOW with a falling haemoglobin. One test, entirely different management.',
        bonus_4_compare_with_his_baseline_not_the_normal_range:
          'A haemoglobin of 78 g/L may be completely normal for him. A haemoglobin that looks "reassuring" may represent a significant rise, and a saturation of 96% may be a fall from his usual. Find the previous results before interpreting anything.',
        bonus_5_do_not_raise_the_haemoglobin_above_100:
          'Higher haemoglobin raises blood viscosity, slows microvascular flow, and can WORSEN vaso-occlusion. This is why EXCHANGE transfusion — which lowers haemoglobin S without raising total haemoglobin — is used for acute chest syndrome and stroke, rather than simply transfusing more blood.',
        bonus_6_fever_is_an_emergency_because_the_spleen_is_gone:
          'Repeated infarction causes autosplenectomy by adolescence. Without a spleen, encapsulated organisms cause overwhelming sepsis within hours. That is why penicillin prophylaxis and vaccination are lifelong, and why a febrile sickle patient gets antibiotics immediately rather than a period of observation.',
        trap_1: 'Ask about PRIAPISM directly. Patients do not volunteer it, and beyond a few hours it causes permanent impotence.',
        trap_2: 'A normal chest radiograph in the first 24 hours does NOT exclude acute chest syndrome. Repeat it if symptoms evolve.',
        trap_3: 'Avoid pethidine — norpethidine accumulates and causes seizures.',
        trap_4: 'Do not over-hydrate. Fluid overload contributes to acute chest syndrome.',
        trap_5: 'Osteomyelitis, characteristically Salmonella, mimics a bone crisis exactly. Focal swelling, warmth and persistent fever should prompt imaging.',
        trap_6: 'Request an EXTENDED red cell phenotype early — these patients alloimmunise readily and future cross-matching gets harder.',
        trap_7: 'Prescribe a laxative with every opioid, and thromboprophylaxis for every immobile patient.',
        one_line_summary: 'Vaso-occlusive crisis in HbSS. Strong analgesia within 30 minutes, hydration without overload, incentive spirometry ten breaths every two hours to prevent acute chest syndrome, transfuse only for a specific indication — and fix the hydroxyurea adherence before he leaves.',
      },
    },
    warnings: [
      'STRONG ANALGESIA WITHIN 30 MINUTES of arrival, reassessed within 30 minutes. This is a standard, and it is the most frequently breached one in sickle cell care.',
      'Opioid tolerance from years of genuine crises is TOLERANCE, not addiction. Follow the patient individualised care plan.',
      'Compare every result with the patient STEADY-STATE BASELINE, not the laboratory normal range.',
      'PRESCRIBE INCENTIVE SPIROMETRY — ten breaths every two hours — it prevents acute chest syndrome, the leading cause of death.',
      'Opioids cause hypoventilation, which precipitates acute chest syndrome. Monitor respiratory rate, sedation and saturation.',
      'A normal chest radiograph in the first 24 hours does NOT exclude acute chest syndrome.',
      'A LOW reticulocyte count with a falling haemoglobin means APLASTIC CRISIS from parvovirus B19.',
      'FEVER IS AN EMERGENCY — the patient is functionally asplenic. Cultures and antibiotics immediately.',
      'Do NOT raise the haemoglobin above about 100 g/L — hyperviscosity worsens vaso-occlusion. Use exchange transfusion when haemoglobin S must be lowered.',
      'AVOID PETHIDINE — norpethidine accumulates and causes seizures.',
      'Do not over-hydrate — fluid overload contributes to acute chest syndrome.',
      'ASK ABOUT PRIAPISM — patients do not volunteer it, and it causes permanent impotence if untreated beyond a few hours.',
      'Request an EXTENDED red cell phenotype (Rh and Kell at minimum), not just ABO and RhD.',
      'Prescribe a laxative with every opioid and thromboprophylaxis for every immobile patient.',
      'Doses here are teaching examples for an adult. Follow your local sickle cell protocol and any individual care plan.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Analgesic regimens, transfusion thresholds and exchange indications follow local haematology guidance and individual care plans.',
      'Paediatric management, including splenic sequestration and transcranial Doppler screening, differs and is not covered here.',
    ],
    cards: [
      { q: 'How quickly must strong analgesia be given?', a: 'Within 30 minutes of arrival, reassessed within 30 minutes of that.' },
      { q: 'What is the molecular defect?', a: 'Valine replaces glutamic acid at position 6 of the beta-globin chain, allowing HbS to polymerise when deoxygenated.' },
      { q: 'Why is incentive spirometry prescribed?', a: 'Ten breaths every two hours prevents the splinting-atelectasis-hypoxia-sickling cycle that causes acute chest syndrome.' },
      { q: 'Define acute chest syndrome.', a: 'A new pulmonary infiltrate plus fever, chest pain, cough, wheeze, tachypnoea or hypoxia.' },
      { q: 'What does a LOW reticulocyte count with falling haemoglobin mean?', a: 'Aplastic crisis, usually parvovirus B19.' },
      { q: 'Why is fever an emergency?', a: 'Autosplenectomy leaves the patient at risk of overwhelming sepsis from encapsulated organisms within hours.' },
      { q: 'Why must haemoglobin not be raised above about 100 g/L?', a: 'Hyperviscosity slows microvascular flow and worsens vaso-occlusion.' },
      { q: 'When is exchange rather than simple transfusion used?', a: 'Acute chest syndrome with hypoxia, stroke, multi-organ failure, refractory priapism, and before major surgery in selected patients.' },
      { q: 'Why is pethidine avoided?', a: 'Its metabolite norpethidine accumulates and causes agitation, tremor and seizures.' },
      { q: 'How does hydroxyurea work?', a: 'It raises fetal haemoglobin, which does not join the sickle polymer, and reduces crises, acute chest syndrome and mortality.' },
      { q: 'Which organism characteristically causes osteomyelitis here?', a: 'Salmonella — and it mimics a bone crisis exactly.' },
      { q: 'Why request an extended red cell phenotype?', a: 'Repeated transfusion causes alloimmunisation; matching Rh and Kell reduces future cross-match difficulty and delayed reactions.' },
    ],
    checks: [
      'Strong analgesia given within 30 minutes and reassessed',
      'Individualised care plan checked and followed',
      'Chest, fever, abdominal, neurological and priapism screening questions asked',
      'Results compared with steady-state baseline',
      'Reticulocyte count sent',
      'Incentive spirometry prescribed — ten breaths every two hours',
      'Respiratory rate and sedation monitored with opioids',
      'Laxative and antiemetic prescribed',
      'Thromboprophylaxis prescribed',
      'Blood cultures and antibiotics if febrile',
      'Extended red cell phenotype requested if transfusion likely',
      'Hydroxyurea adherence addressed before discharge',
      'Vaccinations, penicillin prophylaxis and screening confirmed',
    ],
    related: ['sickle_cell_disease_crises_and_the_complications_that_kill'],
  },
];
