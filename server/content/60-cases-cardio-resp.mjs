/**
 * CASE SCENARIOS — Medicine: Cardiology and Respiratory.
 *
 * A different content type from the rest of Scout. Every other entry is a
 * reference card answering one question. A CASE is a whole patient, clerked
 * from the door to discharge, built for someone who has never seen a ward.
 *
 * THE DOSE RULE IS DELIBERATELY DIFFERENT HERE AND THE READER MUST BE TOLD.
 * Reference entries in Scout state NO doses, because doses vary by formulary
 * and country and a wrong one on a ward kills. Teaching cases are useless
 * without them — you cannot learn to prescribe from a card that will not name
 * a dose. So cases carry `teaching_case: true`, which renders a permanent
 * banner saying these are worked teaching examples for an adult with normal
 * renal and hepatic function, to be checked against the local formulary before
 * any real prescription.
 */

export default [
  {
    id: 'AS-CASE-0001',
    type: 'case',
    specialty: 'Medicine — Cardiology',
    teaching_case: true,
    title: 'CASE: Crushing Central Chest Pain in a 58-Year-Old Diabetic Bus Driver',
    short: 'Case: inferior STEMI in a diabetic',
    summary:
      'A 58-year-old known diabetic and hypertensive smoker with 3 hours of crushing central chest pain radiating to jaw and left arm. Worked from the door: the ECG in 10 minutes, why troponin does not help you today, right-sided leads before any nitrate, and getting the artery open inside 120 minutes.',
    domains: ['cardiovascular', 'emergency_medicine', 'endocrine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case stemi', 'chest pain case', 'myocardial infarction case', 'inferior stemi case',
      'diabetic chest pain', 'silent mi', 'crushing chest pain', 'levine sign',
      'reciprocal change', 'right ventricular infarct', 'case scenario cardiology',
    ],
    terms: [
      'case', 'clerking', 'stemi', 'chest pain', 'crushing', 'levine sign', 'diaphoresis',
      'radiation to jaw', 'reciprocal change', 'inferior', 'right sided leads', 'v4r',
      'posterior mi', 'troponin', 'aspirin', 'ticagrelor', 'tenecteplase', 'primary pci',
      'gtn', 'nitrate', 'pde5', 'metformin contrast', 'silent infarct', 'autonomic neuropathy',
      'killip', 'four pillars secondary prevention', 'driving after mi',
    ],
    confirm_locally: true,
    body: {
      how_to_use_this_case:
        'Read it as a ward round. Each section builds on the last, and every term is explained where it first appears. If a sentence contains a word you do not know, it is defined in that same sentence or the one after it.',

      the_one_line: '58-year-old male bus driver from Kano. Known diabetic 12 years on metformin, known hypertensive. Three hours of crushing central chest pain with sweating.',

      section_1_clerking: {
        demographics_and_why_each_matters: {
          age_58: 'Atherosclerosis — fatty plaque building inside artery walls — accumulates with age. Coronary risk rises steeply after 45 in men, 55 in women.',
          male: 'Men develop coronary disease roughly 10 years earlier than women, because oestrogen is partly protective until the menopause.',
          bus_driver: 'Sedentary work. And critically for discharge: driving is a LICENSING issue after a heart attack, and a vocational licence has stricter rules than an ordinary one.',
          place: 'Determines what is available. If there is no catheter laboratory within reach, the treatment changes completely. Never plan a treatment your hospital cannot deliver.',
        },
        history_of_presenting_illness:
          'Three hours ago, at rest, central chest pain came on over about five minutes and has been constant since. He describes it as a heavy weight. It radiates to the left arm and jaw. He is sweating heavily (DIAPHORESIS), nauseated, vomited once, and is breathless at rest.',
        reading_each_clue: {
          central_heavy_crushing:
            'This is VISCERAL pain. The heart has no precise (somatic) nerve supply, so cardiac pain is diffuse and hard to point at. A patient who points with ONE FINGER to a spot is far less likely to be infarcting than one who places a WHOLE FIST on the sternum — the LEVINE SIGN.',
          radiation_to_arm_and_jaw:
            'Cardiac sensory nerves enter the spinal cord at T1 to T4, alongside nerves from arm and neck. The brain cannot tell which structure sent the signal, so it refers the pain there.',
          constant_for_three_hours:
            'Stable angina lasts minutes and settles with rest. Pain lasting MORE THAN 20 MINUTES AT REST means the artery is probably completely blocked. That is infarction, not angina.',
          sweating_and_vomiting: 'Massive sympathetic and vagal discharge. Sweating with chest pain substantially raises the probability of a true cardiac event.',
          the_clock: 'Heart muscle begins dying within 20 to 30 minutes of occlusion and is largely dead by 6 to 12 hours. TIME IS MUSCLE.',
        },
        what_known_diabetic_should_make_you_think: {
          one_silent_presentation:
            'Long-standing diabetes damages autonomic nerves (AUTONOMIC NEUROPATHY), including those carrying cardiac pain. Diabetics may infarct with NO CHEST PAIN AT ALL, presenting with breathlessness, vomiting, collapse or confusion. Roughly a third of infarcts in long-standing diabetes are painless.',
          two_accelerated_disease: 'High glucose damages the endothelium — the single-cell lining of blood vessels — so diabetics develop more extensive, more diffuse coronary disease, earlier.',
          three_metformin_and_contrast: 'He may receive iodinated contrast at angiography. You need his kidney function. The reasoning is in the investigations section.',
          four_stress_hyperglycaemia: 'The catecholamine surge of an infarct raises glucose and can precipitate diabetic ketoacidosis. Check glucose AND ketones in every acutely unwell diabetic.',
        },
        past_medical_history: 'Type 2 diabetes mellitus 12 years (the body resists insulin, the hormone that moves glucose into cells, so blood glucose stays high). Hypertension 8 years. No previous infarct or stroke.',
        drug_history: {
          metformin: 'Metformin 1 g orally twice daily. A biguanide — it mainly reduces the glucose the LIVER releases and improves muscle insulin sensitivity. It does not force insulin out of the pancreas, so alone it does not cause hypoglycaemia.',
          amlodipine: 'Amlodipine 10 mg orally once daily. A calcium channel blocker relaxing arterial smooth muscle to lower blood pressure.',
          what_is_missing: 'NO aspirin and NO statin, in a man with diabetes and hypertension. Note the omission — it is a missed prevention opportunity and a teaching point in itself.',
        },
        social_history:
          'Smokes 20 a day for 25 years = 25 PACK-YEARS. (Pack-years = cigarettes per day divided by 20, multiplied by years. Here 20/20 x 25 = 25.) Smoking damages endothelium, raises fibrinogen and makes platelets stickier. Father died suddenly at 55 — a first-degree male relative before 55 (female before 65) is premature cardiovascular disease and an independent risk factor.',
        vital_signs_and_what_each_means: {
          blood_pressure: '148/92 mmHg. Raised. Systolic is pressure during contraction, diastolic between beats. WATCH IT — a fall suggests cardiogenic shock or right ventricular infarct.',
          pulse: '104 beats per minute. TACHYCARDIA means over 100. Sympathetic drive plus reduced cardiac output.',
          respiratory_rate: '24 per minute. TACHYPNOEA means abnormally fast breathing. Normal adult is 12 to 20.',
          temperature: '37.1 C. Normal is 36.5 to 37.5. A mild fever can appear 24 to 48 hours after infarction from inflammation of dead muscle.',
          oxygen_saturation: '96% on room air. SpO2 is the percentage of haemoglobin carrying oxygen. Normal 94 to 98%. THIS IS NORMAL, SO HE DOES NOT NEED OXYGEN.',
          glucose: '14.2 mmol/L (256 mg/dL). High — stress hyperglycaemia plus his diabetes.',
        },
        general_examination_how_to_do_it: {
          pallor: 'Pull down the lower eyelid and look at the conjunctiva; look at palmar creases. He is pale and clammy — peripheral vasoconstriction shunting blood to vital organs.',
          jaundice: 'Yellowing of the sclerae, assessed in natural light. Absent.',
          cyanosis: 'Bluish discolouration. CENTRAL (tongue, lips) means low arterial oxygen; PERIPHERAL (fingers) means poor perfusion. Absent.',
          clubbing: 'Loss of the normal angle between nail and nail bed. Seen in chronic lung disease, cyanotic heart disease, endocarditis. Absent.',
          oedema: 'Press firmly over the shin against bone for 15 seconds; a remaining pit is pitting oedema. Absent — important, as it argues against pre-existing heart failure.',
        },
        systemic_examination: {
          cardiovascular:
            'Pulse regular, normal volume. JVP (jugular venous pressure — the height of the pulsation in the internal jugular vein above the sternal angle at 45 degrees, reflecting right atrial pressure) NOT raised, normal being under 3 cm. Apex beat normal at the 5th intercostal space, mid-clavicular line. Heart sounds S1 and S2 present, NO murmurs, no third or fourth heart sound. A NEW MURMUR after infarction is an emergency — it may mean papillary muscle rupture or a torn interventricular septum.',
          respiratory:
            'Equal expansion. Percussion RESONANT throughout (tapping the chest; resonant means air-filled lung beneath, dull means fluid or solid). Air entry equal, chest clear, no crackles. Basal crackles would mean fluid backing into the lungs — pulmonary oedema — which worsens prognosis.',
          abdomen: 'Soft, non-tender, no organomegaly, bowel sounds present.',
          cns: 'Alert, orientated, Glasgow Coma Scale 15/15, no focal weakness. Examined because aortic dissection can cause stroke, and because neurology must be documented BEFORE any clot-dissolving drug.',
        },
      },

      section_2_mechanism_from_scratch: {
        the_plumbing:
          'The heart is a muscle and needs its own blood supply. It gets it from the CORONARY ARTERIES, which branch off the aorta just above the aortic valve. There are two: the LEFT (dividing into the left anterior descending, supplying the front, and the circumflex, supplying the side) and the RIGHT.',
        step_by_step: [
          '1. Diabetes, smoking and hypertension chronically injure the ENDOTHELIUM, the delicate single-cell artery lining.',
          '2. Damaged endothelium lets LDL cholesterol into the artery wall.',
          '3. Macrophages (white cells) eat the cholesterol and become FOAM CELLS. Over years this builds an ATHEROSCLEROTIC PLAQUE — a fatty lump under a fibrous cap.',
          '4. THE PLAQUE RUPTURES. This is the acute event. The cap tears and the fatty core meets flowing blood.',
          '5. The body treats it as a wound: platelets stick and a THROMBUS (clot) forms.',
          '6. The clot COMPLETELY OCCLUDES the artery.',
          '7. Muscle downstream becomes ISCHAEMIC (starved of oxygen) and within 20 to 30 minutes begins to INFARCT (die).',
          '8. THE PAIN comes from dying muscle releasing adenosine and lactate, stimulating nerve endings, referred to chest, arm and jaw.',
          '9. THE BREATHLESSNESS comes from the damaged ventricle pumping less well, raising pressure back into the lungs.',
          '10. THE SWEATING AND VOMITING come from the autonomic discharge.',
        ],
        why_this_gives_st_elevation:
          'Complete occlusion injures the FULL THICKNESS of the wall, producing ST ELEVATION on the ECG. Partial occlusion damages only the inner layer, producing ST depression or T-wave inversion. This is the single most important branch point in cardiology, because it decides whether the artery must be opened right now.',
      },

      section_3_differentials: {
        one_stemi: 'WORKING DIAGNOSIS. Supporting: crushing pain over 20 minutes, radiation, sweating, vomiting, multiple risk factors. Against: nothing. Confirm: 12-lead ECG within 10 minutes.',
        two_aortic_dissection: {
          the_one_that_must_not_be_missed: true,
          supporting: 'Severe chest pain, hypertension.',
          against: 'Pain built over minutes rather than being MAXIMAL AT ONSET; no tearing quality; no radiation through to the back; pulses and blood pressure equal in both arms.',
          exclude: 'Blood pressure in BOTH ARMS (a difference over 20 mmHg is suspicious), chest X-ray for a widened mediastinum, CT aortogram if suspicion persists.',
          why_it_matters_most: 'Giving a clot-dissolving drug or anticoagulant to a dissection can kill the patient. Ask this question before you anticoagulate, every time.',
        },
        three_pulmonary_embolism: 'Supporting: chest pain, breathlessness, tachycardia. Against: pain is central and crushing, not PLEURITIC (sharp, worse on breathing in); no leg swelling; no immobility; saturations normal. Exclude: Wells score, then D-dimer or CT pulmonary angiogram.',
        four_pericarditis: 'Supporting: chest pain, and the ECG may show ST elevation. Against: pericardial pain is SHARP, WORSE LYING FLAT, RELIEVED SITTING FORWARD, often post-viral. Exclude: ECG shows WIDESPREAD saddle-shaped ST elevation with PR depression, not elevation confined to one territory.',
        five_reflux_or_oesophageal_spasm: 'Supporting: central discomfort described as indigestion. Against: sweating, vomiting, radiation and risk burden. TRAP: "it felt like indigestion" has killed people, and relief with an antacid does NOT exclude infarction. Get the ECG.',
      },

      section_4_investigations: {
        one_ecg_within_ten_minutes: {
          why: 'The most time-critical test in the department. It decides whether an artery must be opened now.',
          what_normal_looks_like: 'P wave (atrial contraction), QRS complex (ventricular contraction), T wave (ventricular recovery). The ST SEGMENT, between the end of QRS and the start of T, should sit on the BASELINE.',
          expected_here: 'ST elevation of 3 mm in leads II, III and aVF, with RECIPROCAL ST DEPRESSION in leads I and aVL.',
          how_to_read_that: 'Leads II, III and aVF look at the INFERIOR surface, usually supplied by the RIGHT CORONARY ARTERY. So this is an INFERIOR STEMI. Reciprocal depression in the opposite leads strongly supports a true infarct rather than a mimic such as pericarditis — look for it actively.',
          how_it_changes_management: 'ST elevation means complete occlusion. ACTIVATE REPERFUSION NOW. Do not wait for troponin.',
          two_extra_steps_in_an_inferior_stemi: {
            right_sided_leads_v4r:
              'Move the V4 electrode to the mirror-image position on the right chest. Up to 40% of inferior infarcts also involve the RIGHT VENTRICLE. This matters because a right ventricular infarct makes the patient PRELOAD-DEPENDENT — NITRATES dilate veins, drop preload, and can cause catastrophic hypotension and arrest. These patients need FLUID, not nitrates.',
            posterior_leads_v7_v9:
              'ST DEPRESSION with TALL R WAVES in V1 to V3 is the mirror image of a POSTERIOR STEMI, because no standard lead looks at the back of the heart. It IS a STEMI and needs reperfusion, and it is repeatedly mismanaged as a non-STEMI.',
          },
        },
        two_troponin: {
          why: 'Troponin is a protein inside heart muscle cells; it leaks into blood when they die.',
          normal: 'Assay-specific, typically under 14 ng/L for high-sensitivity troponin T.',
          expected: 'Raised, perhaps 450 ng/L, rising on a repeat sample.',
          how_it_changes_management_here: 'IT DOES NOT. In a STEMI the diagnosis is made on the ECG. Troponin takes 2 to 4 hours to rise. If you wait for it before calling for reperfusion you waste the muscle you were trying to save. Send it for prognosis; act on the ECG.',
          also_know: 'Troponin means myocardial INJURY, not necessarily infarction. It rises in sepsis, pulmonary embolism, kidney failure, myocarditis and arrhythmia.',
        },
        three_full_blood_count: 'Why: anaemia worsens ischaemia by reducing oxygen delivery, and you need a baseline before anticoagulating. Normal haemoglobin 130 to 170 g/L in men; platelets 150 to 400 x 10^9/L. Expected: likely normal with a mild white cell rise.',
        four_urea_and_electrolytes: {
          why_three_reasons: 'POTASSIUM — a low potassium provokes fatal arrhythmias in an ischaemic heart; keep it 4.0 to 5.0 (normal 3.5 to 5.0). KIDNEY FUNCTION — determines contrast risk and drug doses. METFORMIN — see below.',
          expected: 'Creatinine 105 micromol/L, eGFR 62, consistent with diabetic kidney disease.',
          the_metformin_question:
            'Metformin does NOT damage the kidney and does NOT react with contrast. The concern is a CHAIN: IF contrast or the illness causes acute kidney injury, THEN metformin accumulates, AND accumulated metformin can cause LACTIC ACIDOSIS. Practically: withhold it on the day of angiography, recheck creatinine at 48 hours, restart if stable. Follow local protocol.',
        },
        five_glucose_ketones_hba1c:
          'Glucose because he is diabetic and acutely stressed (14.2 mmol/L). Ketones to exclude diabetic ketoacidosis — normal under 0.6 mmol/L, expected 0.3, reassuring. HbA1c reflects average glucose over 2 to 3 months — normal under 42 mmol/mol, diabetes 48 or above; expected 71, showing poor control. It does not change today, it changes his discharge plan.',
        six_lipid_profile: 'Baseline before a statin. Take it EARLY — cholesterol falls after infarction and is unreliable for weeks. Expected total cholesterol 6.1 mmol/L, LDL 4.0.',
        seven_chest_xray: 'Why: pulmonary oedema, and a WIDENED MEDIASTINUM suggesting dissection. A normal film shows clear black lung fields, sharp costophrenic angles, heart under half the chest width, mediastinum under 8 cm. Expected: normal. DO NOT DELAY REPERFUSION FOR IT — it happens in parallel.',
        eight_echocardiogram: 'Ultrasound of the heart. Shows which wall is not moving (regional wall motion abnormality), measures pumping, detects complications. EJECTION FRACTION is the percentage of blood ejected per beat; normal 50 to 70%. Expected: reduced inferior wall movement, EF about 45%.',
      },

      section_5_management: {
        a_immediate_abcde: {
          airway: 'Talking in sentences, so patent.',
          breathing:
            'RR 24, SpO2 96% on air. DO NOT GIVE OXYGEN. This is a genuine change from older teaching — routine oxygen in a NON-HYPOXIC infarct does not help and may harm, because high oxygen causes coronary vasoconstriction and increases infarct size. RULE: oxygen only if SpO2 is under 94%, then target 94 to 98%. (For contrast, a NON-REBREATHER MASK has a reservoir bag and one-way valves and delivers roughly 85 to 95% oxygen at 15 L/min — for the genuinely hypoxic patient, not this man.)',
          circulation:
            'Two large-bore cannulae (grey 16G or green 18G). CONTINUOUS CARDIAC MONITORING and a DEFIBRILLATOR AT THE BEDSIDE — the commonest cause of death in the first hour is VENTRICULAR FIBRILLATION, a chaotic rhythm producing no output, instantly fatal and instantly treatable if a defibrillator is there.',
          disability: 'GCS 15, glucose 14.2.',
          exposure: 'Legs for swelling, skin for rash, temperature.',
        },
        b_specific_management: {
          step_1_antiplatelets: {
            aspirin:
              'ASPIRIN 300 mg orally STAT, chewed or dispersed. It irreversibly blocks cyclo-oxygenase-1 in platelets so they cannot make thromboxane A2, the chemical making them stick. Chewed for faster buccal absorption. 300 mg is a LOADING dose to shut down circulating platelets fast; 75 mg daily afterwards is MAINTENANCE. ISIS-2 showed aspirin alone reduced mortality by about 23%. Side effects: gastric irritation, bleeding, bronchospasm in aspirin-sensitive asthma.',
            second_antiplatelet:
              'TICAGRELOR 180 mg orally STAT, then 90 mg twice daily. A P2Y12 receptor inhibitor blocking a different activation pathway, so the two together are far more effective than either alone — DUAL ANTIPLATELET THERAPY. Alternative: CLOPIDOGREL 600 mg orally STAT then 75 mg daily, used if ticagrelor is unavailable or the patient is anticoagulated or has had a haemorrhagic stroke. Ticagrelor specifically causes DYSPNOEA (a sensation of breathlessness) in about 1 in 7 — harmless, but alarming and easily mistaken for heart failure if you do not warn them.',
          },
          step_2_reperfusion_this_is_the_treatment: {
            note: 'Everything else is supportive. THIS opens the artery.',
            option_a_primary_pci:
              'PREFERRED. A catheter from the wrist (radial) or groin (femoral) to the heart; dye shows the blockage, a balloon opens it, a STENT (metal mesh tube) holds it open. TARGET: within 120 minutes of first medical contact. ACTION NOW: telephone the on-call cardiologist directly. Do not send an electronic request.',
            option_b_fibrinolysis:
              'If PCI cannot be delivered within 120 minutes. A drug given intravenously that dissolves the clot — usable in any hospital, which matters enormously where a catheter laboratory is far away. TENECTEPLASE as a single IV bolus over 10 seconds, dosed by weight: under 60 kg = 30 mg; 60 to 69 kg = 35 mg; 70 to 79 kg = 40 mg; 80 to 89 kg = 45 mg; 90 kg or more = 50 mg. This patient at 78 kg gets 40 mg. Give with ENOXAPARIN 30 mg IV bolus then 1 mg/kg subcutaneously every 12 hours (78 mg here). Reduce to once daily if eGFR under 30, and reduce in patients over 75.',
            contraindications_to_screen_before_thrombolysis: {
              absolute: 'Any previous intracranial haemorrhage; ischaemic stroke within 6 months; known cerebral tumour or arteriovenous malformation; SUSPECTED AORTIC DISSECTION; active internal bleeding; significant head injury or major surgery within 3 weeks; bleeding disorder.',
              relative: 'Uncontrolled blood pressure over 180/110; pregnancy; active peptic ulcer; prolonged CPR; recent non-compressible vascular puncture.',
              the_habit: 'Ask the dissection question out loud, every time.',
            },
          },
          step_3_analgesia:
            'MORPHINE 2.5 to 5 mg intravenously, slowly, titrated to pain. HOW TO GIVE: dilute 10 mg in 10 mL of 0.9% sodium chloride = 1 mg/mL; give 2.5 mL, wait 5 minutes, repeat if needed. WHY: pain drives sympathetic activation, raising heart rate and myocardial oxygen demand, worsening the infarct. Give with METOCLOPRAMIDE 10 mg IV, an antiemetic, because morphine causes vomiting. WATCH FOR: respiratory depression, hypotension, drowsiness. ANTIDOTE: naloxone 400 micrograms IV. CAUTION: morphine slows gastric emptying and delays absorption of oral antiplatelets, so use the minimum needed.',
          step_4_nitrate_but_check_first: {
            drug: 'GLYCERYL TRINITRATE 2 puffs sublingually, or an infusion if pain persists. INFUSION: 50 mg GTN in 50 mL of 0.9% sodium chloride = 1 mg/mL. Start at 1 mL/hour (1 mg/hour) and titrate to pain and blood pressure.',
            what_it_does: 'Dilates veins, reducing blood returning to the heart (PRELOAD), so the heart works less. Also dilates coronary arteries.',
            absolute_contraindications:
              'ONE: RIGHT VENTRICULAR INFARCTION, found on those right-sided leads — these patients need preload and GTN removes it, causing arrest. TWO: PHOSPHODIESTERASE-5 INHIBITOR (sildenafil, tadalafil) within 24 to 48 hours — the combination causes profound refractory hypotension. YOU MUST ASK, privately and without embarrassment, because men frequently do not volunteer it.',
          },
          step_5_secondary_prevention_before_discharge: {
            antiplatelet: 'Aspirin 75 mg orally daily LIFELONG, plus ticagrelor 90 mg twice daily for 12 months. Prevents further clot on the stent.',
            statin: 'ATORVASTATIN 80 mg orally at night. Blocks HMG-CoA reductase, lowering LDL cholesterol and stabilising plaque. High dose regardless of baseline cholesterol. Monitor liver function; warn about muscle pain and rarely rhabdomyolysis.',
            beta_blocker: 'BISOPROLOL 1.25 mg orally daily, titrated upward. Slows the heart, reducing oxygen demand and arrhythmia, and improves survival. Start low. Avoid in acute heart failure, asthma, heart block or bradycardia.',
            ace_inhibitor: 'RAMIPRIL 2.5 mg orally daily, titrated to 10 mg. Blocks angiotensin-converting enzyme, reducing afterload and preventing adverse REMODELLING — the heart dilating and weakening after infarction. Monitor urea and electrolytes; it can raise potassium and creatinine. Causes a dry cough in about 10%, in which case switch to an angiotensin receptor blocker such as losartan.',
          },
        },
        d_monitoring_complications_discharge: {
          monitoring: 'Continuous cardiac monitoring at least 24 to 48 hours, since arrhythmia risk is highest early. Observations every 15 minutes for an hour, then hourly. REPEAT ECG after reperfusion — resolution of ST elevation by more than 50% indicates a successfully opened artery. Daily urea and electrolytes, especially potassium. Glucose 4-hourly.',
          complications_by_timing: {
            minutes_to_hours: 'Ventricular fibrillation or ventricular tachycardia — the commonest early death. Bradycardia and heart block, common in INFERIOR infarcts because the right coronary artery usually supplies the AV node. Cardiogenic shock.',
            days_three_to_seven: 'PAPILLARY MUSCLE RUPTURE (new loud murmur with sudden pulmonary oedema). VENTRICULAR SEPTAL RUPTURE (new harsh murmur with shock). FREE WALL RUPTURE (sudden collapse and tamponade, usually fatal). THE RULE: a new murmur with deterioration on days 3 to 7 is a surgical emergency until proven otherwise.',
            weeks: 'Dressler syndrome — autoimmune pericarditis with fever and pleuritic pain. Left ventricular aneurysm with persistent ST elevation and heart failure.',
          },
          counselling: {
            driving:
              'He is a BUS DRIVER — a vocational licence. He must STOP DRIVING and notify the licensing authority. Vocational relicensing typically needs at least 6 weeks off, satisfactory exercise testing and adequate ejection fraction. (An ordinary car licence is usually 1 to 4 weeks.) Confirm exact requirements with your national authority. This conversation is not optional and he will not like it.',
            smoking: 'The single most effective thing he can do — greater absolute benefit than any drug prescribed. Offer nicotine replacement and referral.',
            cardiac_rehabilitation: 'A structured exercise and education programme that reduces mortality. Refer everyone.',
            adherence: 'Stopping ticagrelor early risks the stent clotting off, which is often fatal. He must not stop it, even for dental work, without cardiology advice.',
            diabetes: 'HbA1c 71 mmol/mol needs addressing. With established cardiovascular disease, an SGLT2 inhibitor (dapagliflozin 10 mg daily) or a GLP-1 agonist has proven cardiovascular benefit beyond glucose lowering.',
            when_to_return: 'Any chest pain lasting more than 15 minutes — call an ambulance and chew aspirin.',
          },
        },
      },

      section_6_teaching_points: {
        bonus_1_reciprocal_change:
          'When one wall is injured, leads looking at the OPPOSITE wall record a mirror image — ST DEPRESSION. Here, elevation in II/III/aVF with depression in I/aVL. WHY IT MATTERS: the main mimic of STEMI is pericarditis, which causes WIDESPREAD elevation with NO reciprocal depression. Finding reciprocal change substantially raises your confidence in a true occlusion. It takes five seconds and is routinely skipped.',
        bonus_2_why_inferior_is_more_dangerous_than_it_looks:
          'The right coronary artery supplies the inferior wall AND usually the sinoatrial and atrioventricular nodes (the pacemaker and wiring) AND often the right ventricle. So an inferior infarct uniquely brings three extra problems: BRADYCARDIA AND HEART BLOCK, RIGHT VENTRICULAR INFARCTION making nitrates dangerous, and HYPOTENSION. Always do right-sided leads.',
        bonus_3_why_troponin_does_not_help_today:
          'It takes 2 to 4 hours to rise, and in STEMI the ECG has already given the diagnosis. A common and costly error is waiting for troponin before calling the cardiologist. IN STEMI: ECG DECIDES, TROPONIN DOCUMENTS.',
        trap_1: 'Diabetics have silent heart attacks. Unexplained breathlessness, vomiting, sweating, collapse or confusion in a diabetic deserves an ECG.',
        trap_2: 'Never give nitrates without excluding right ventricular infarction and PDE-5 inhibitor use. Both cause catastrophic hypotension.',
        trap_3: 'Do not give oxygen to a patient saturating 94% or above. Trial evidence showed no benefit and possible harm.',
        trap_4: '"It felt like indigestion" is not reassurance, and neither is relief with an antacid. Get the ECG.',
        trap_5: 'Metformin: withhold around contrast in reduced renal function and recheck creatinine at 48 hours. The mechanism is accumulation causing lactic acidosis, not a direct interaction.',
        one_line_summary: 'Inferior STEMI in a diabetic smoker. ECG in 10 minutes, aspirin plus ticagrelor, right-sided leads before any nitrate, and get the artery open within 120 minutes.',
      },
    },
    warnings: [
      'ECG within 10 minutes. In STEMI the ECG decides — do NOT wait for troponin before activating reperfusion.',
      'Do right-sided leads (V4R) in every inferior STEMI. Nitrates in right ventricular infarction can cause fatal hypotension.',
      'Ask about phosphodiesterase-5 inhibitors before any nitrate. Patients do not volunteer this.',
      'Consider aortic dissection before any antithrombotic. Check blood pressure in both arms.',
      'Do NOT give oxygen if SpO2 is 94% or above — routine oxygen may increase infarct size.',
      'ST depression with tall R waves in V1 to V3 is a POSTERIOR STEMI and needs reperfusion.',
      'A new murmur with deterioration on days 3 to 7 after infarction is a surgical emergency.',
      'Diabetics infarct silently — autonomic neuropathy blunts the pain in roughly a third.',
      'A defibrillator must be at the bedside; ventricular fibrillation is the commonest cause of death in the first hour.',
      'Doses here are teaching examples for an adult with normal renal and hepatic function. Check your local formulary before prescribing.',
    ],
    limitations: [
      'This is a WORKED TEACHING CASE, not a protocol. Reperfusion targets, drug choices, doses and licensing rules differ by country and institution.',
      'Every dose assumes an adult with normal renal and hepatic function unless stated. Verify against your formulary.',
    ],
    cards: [
      { q: 'What is the Levine sign?', a: 'A patient placing a clenched fist over the sternum to describe the pain — suggests visceral cardiac pain.' },
      { q: 'Why does cardiac pain radiate to the jaw and arm?', a: 'Cardiac sensory nerves enter the cord at T1 to T4 alongside arm and neck nerves, so the brain refers the pain there.' },
      { q: 'Which leads show an inferior infarct, and which artery?', a: 'II, III and aVF — usually the right coronary artery.' },
      { q: 'Why do right-sided leads in an inferior STEMI?', a: 'To find right ventricular infarction, where the patient is preload-dependent and nitrates can cause arrest.' },
      { q: 'What does reciprocal ST depression tell you?', a: 'It supports a true infarct rather than pericarditis, which causes widespread elevation without reciprocal change.' },
      { q: 'Why not wait for troponin in a STEMI?', a: 'It takes 2 to 4 hours to rise; the ECG has already made the diagnosis and delay costs muscle.' },
      { q: 'Give the tenecteplase dose for a 78 kg patient.', a: '40 mg as a single IV bolus over 10 seconds (70 to 79 kg band).' },
      { q: 'How do you dilute morphine for titration?', a: '10 mg in 10 mL of 0.9% sodium chloride = 1 mg/mL; give 2.5 mL and reassess.' },
      { q: 'How is a GTN infusion made and started?', a: '50 mg in 50 mL sodium chloride = 1 mg/mL, starting at 1 mL/hour and titrated to pain and blood pressure.' },
      { q: 'Why is metformin withheld around contrast?', a: 'Not a direct interaction — if contrast causes kidney injury, metformin accumulates and can cause lactic acidosis.' },
      { q: 'What are the four secondary prevention drugs after a STEMI?', a: 'Dual antiplatelet, high-dose statin, beta-blocker and ACE inhibitor.' },
    ],
    checks: [
      'ECG performed and interpreted within 10 minutes',
      'Right-sided and posterior leads considered',
      'Aortic dissection actively excluded, blood pressure both arms',
      'PDE-5 inhibitor use asked about before nitrate',
      'Aspirin and second antiplatelet given',
      'Reperfusion pathway activated with the time documented',
      'Defibrillator and cardiac monitoring at the bedside',
      'Glucose, ketones and renal function checked',
      'Driving advice given and documented',
      'Smoking cessation and cardiac rehabilitation referral made',
    ],
    related: ['acute_coronary_syndrome_stemi_nstemi_and_unstable_angina'],
  },

  {
    id: 'AS-CASE-0002',
    type: 'case',
    specialty: 'Medicine — Respiratory',
    teaching_case: true,
    title: 'CASE: Pleuritic Chest Pain and a Swollen Calf After an 11-Hour Flight',
    short: 'Case: pulmonary embolism',
    summary:
      'A 34-year-old woman on the combined pill, one day after an 11-hour flight, with pleuritic chest pain, haemoptysis and a swollen left calf. The lesson is the ORDER: score the probability BEFORE you order a D-dimer, because in a high-probability patient that test can only mislead you.',
    domains: ['respiratory', 'emergency_medicine', 'haematology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case pulmonary embolism', 'pe case', 'dvt case', 'pleuritic chest pain case',
      'long flight clot', 'wells score case', 'd-dimer case', 'virchow triad',
      'haemoptysis case', 'case scenario respiratory',
    ],
    terms: [
      'case', 'pulmonary embolism', 'deep vein thrombosis', 'virchow triad', 'stasis',
      'hypercoagulable', 'pleuritic', 'haemoptysis', 'pleural rub', 'wells score', 'd-dimer',
      'ctpa', 'filling defect', 's1q3t3', 'hampton hump', 'westermark', 'apixaban',
      'rivaroxaban', 'enoxaparin', 'alteplase', 'massive pe', 'combined oral contraceptive',
      'provoked', 'unprovoked', 'pesi',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '34-year-old female software engineer, returned yesterday from an 11-hour flight, with 6 hours of sharp right-sided chest pain, breathlessness and a swollen left calf.',

      section_1_clerking: {
        demographics: 'Age 34, female. Young — and clinicians systematically under-diagnose serious disease in the young. FEMALE OF REPRODUCTIVE AGE means you must ask about the combined oral contraceptive pill and about pregnancy, both of which raise clotting risk substantially. Software engineer: sedentary, prolonged sitting.',
        history:
          'Yesterday she flew 11 hours in an economy seat. Overnight her left calf ached and looked swollen. This morning she developed sudden sharp right-sided chest pain, worse on deep breathing and coughing. She is breathless climbing stairs and coughed once producing blood-streaked sputum.',
        reading_each_clue: {
          eleven_hour_flight: 'Prolonged immobility — one arm of VIRCHOW TRIAD.',
          unilateral_calf_swelling: 'This is the SOURCE — a deep vein thrombosis. UNILATERAL is key; both legs swelling suggests heart, liver or kidney disease instead.',
          sharp_worse_on_inspiration: 'This is PLEURITIC pain, arising from the pleura — the membrane lining lung and chest wall. It means the problem has reached the lung SURFACE.',
          haemoptysis: 'Coughing blood suggests PULMONARY INFARCTION — a segment of lung has actually died and bled into the airway.',
          sudden_onset: 'Vascular events are sudden. Infections build over days.',
        },
        drug_history:
          'COMBINED ORAL CONTRACEPTIVE PILL for 3 years. CRITICAL CLUE. Oestrogen increases hepatic production of clotting factors and reduces natural anticoagulants, raising venous thromboembolism risk roughly threefold. Combined with an 11-hour flight this is compounding risk.',
        social_and_family: 'Non-smoker. No family history of clots — but ask specifically, because inherited thrombophilias such as Factor V Leiden are common and often undiagnosed.',
        vitals: {
          blood_pressure: '118/74 mmHg — normal, and reassuring, because hypotension would mean MASSIVE PE.',
          pulse: '112 bpm — tachycardia, THE COMMONEST SIGN OF PE.',
          respiratory_rate: '26 per minute — tachypnoea.',
          temperature: '37.6 C — low-grade fever, which occurs in PE from lung infarction and is often misread as infection.',
          saturation: '93% on air — mildly hypoxaemic (normal 94 to 98%).',
        },
        the_legs_examine_both_and_measure:
          'Left calf circumference 39 cm, right 35 cm, measured 10 cm below the tibial tuberosity at the same point on each leg. WHY MEASURE: a difference over 3 cm is a scoring criterion. "It looks a bit swollen" is not documentation. Use a tape measure. Left calf warm, tender, with mild pitting oedema and prominent superficial veins.',
        chest:
          'Equal expansion, resonant percussion, and A PLEURAL RUB over the right lower zone — a creaking leathery sound like walking on fresh snow. WHAT IT IS: normally the two pleural layers glide silently on a thin fluid film; when inflamed they roughen and grate audibly. It tells you the pleura is inflamed, here from an infarcted lung segment.',
        cvs: 'Tachycardic, regular, JVP not raised. A raised JVP would suggest right heart strain — a worrying sign.',
      },

      section_2_mechanism: {
        virchow_triad: 'Clots form when any of three things go wrong: STASIS (blood not moving), ENDOTHELIAL INJURY (damage to the vessel lining), and HYPERCOAGULABILITY (blood more prone to clotting).',
        her_sequence: [
          '1. Eleven hours seated, legs dependent and still. Calf muscles normally pump venous blood back to the heart; sitting still switches that pump off — STASIS.',
          '2. Combined oral contraceptive pill increases clotting factors — HYPERCOAGULABILITY.',
          '3. Blood pools in the deep calf veins and a clot forms, usually behind a venous valve where flow is most sluggish — DEEP VEIN THROMBOSIS.',
          '4. Local obstruction and inflammation cause the swollen, painful, warm calf.',
          '5. Part of the clot breaks off. It is now an EMBOLUS — a travelling clot.',
          '6. It travels up the leg veins to the inferior vena cava, right atrium, right ventricle and into the PULMONARY ARTERY.',
          '7. It lodges in a pulmonary artery branch — PULMONARY EMBOLISM.',
          '8. That lung segment still receives AIR (ventilation) but no BLOOD (perfusion). This is V/Q MISMATCH, specifically DEAD SPACE VENTILATION — air going to lung that cannot exchange gas.',
          '9. Result: HYPOXAEMIA. She breathes faster to compensate, giving tachypnoea and a saturation of 93%.',
          '10. If the blockage is complete enough that segment dies. Dead tissue bleeds into alveoli — HAEMOPTYSIS. Inflammation reaches the pleural surface — PLEURITIC PAIN and a PLEURAL RUB.',
          '11. The right ventricle must now pump against an obstructed circulation; cardiac output falls and the heart compensates by beating faster — TACHYCARDIA.',
        ],
        trace_every_symptom_back: 'Calf swelling = the source. Pleuritic pain and rub = infarcted lung touching pleura. Haemoptysis = the infarct bleeding. Breathlessness and low saturation = V/Q mismatch. Tachycardia = compensation for obstructed outflow.',
      },

      section_3_differentials: {
        one_pulmonary_embolism: 'WORKING DIAGNOSIS. Supporting: long flight, oestrogen, unilateral swollen calf, pleuritic pain, haemoptysis, tachycardia, hypoxaemia, pleural rub, low-grade fever. Against: nothing. Confirm: CT pulmonary angiogram.',
        two_pneumonia: 'Supporting: pleuritic pain, fever, breathlessness, haemoptysis. Against: no purulent sputum, no preceding coryzal illness, no crackles or bronchial breathing, and decisively the UNILATERAL SWOLLEN CALF. Exclude: chest X-ray, inflammatory markers. THIS IS THE CLASSIC MISDIAGNOSIS — PE with infarction gives fever, pleuritic pain and haemoptysis and looks exactly like pneumonia. THE LEG IS WHAT SAVES YOU. EXAMINE IT.',
        three_pneumothorax: 'Supporting: sudden pleuritic pain and breathlessness. Against: percussion resonant not hyper-resonant, breath sounds present and equal, no tracheal deviation. Exclude: chest X-ray.',
        four_musculoskeletal: 'Supporting: sharp positional pain. Against: hypoxaemia, tachycardia and the calf findings. HYPOXIA IS NEVER MUSCULOSKELETAL. Note that chest wall tenderness does not exclude PE.',
        five_pericarditis: 'Supporting: pleuritic-type pain. Against: not relieved sitting forward, no rub at the left sternal edge, no ECG changes. Exclude: ECG showing widespread saddle ST elevation with PR depression.',
      },

      section_4_investigations: {
        first_score_the_probability: {
          the_rule: 'DO NOT ORDER A D-DIMER UNTIL YOU HAVE SCORED THE PATIENT.',
          wells_score_for_pe: 'Clinical signs of DVT (swelling and tenderness) 3.0 — PRESENT. PE most likely diagnosis 3.0 — PRESENT. Heart rate over 100 1.5 — PRESENT. Immobilisation 3 days or surgery in 4 weeks 1.5 — absent. Previous DVT or PE 1.5 — absent. Haemoptysis 1.0 — PRESENT. Malignancy 1.0 — absent. TOTAL 8.5.',
          interpretation: 'Over 4 points means PE LIKELY.',
          what_follows:
            'WELLS 4 OR LESS (PE unlikely): send a D-dimer; if negative, PE is excluded and no imaging is needed. WELLS OVER 4 (PE likely): GO STRAIGHT TO IMAGING, DO NOT SEND A D-DIMER. WHY: D-dimer is a RULE-OUT test only, with high sensitivity and poor specificity. In a high-probability patient a negative D-dimer does NOT exclude PE, so it cannot change management, and a falsely reassuring negative can kill the patient.',
        },
        ctpa: 'The definitive test. Contrast is injected intravenously and timed to opacify the pulmonary arteries. NORMAL: arteries uniformly bright with contrast, tapering smoothly. EXPECTED HERE: a FILLING DEFECT — a dark area where contrast cannot flow — in the right lower lobe pulmonary artery, with a wedge-shaped peripheral opacity of infarcted lung. Considerations: contrast (kidney function, allergy), radiation, and breast dose in a young woman.',
        ecg: 'EXPECTED: SINUS TACHYCARDIA at 112 — the commonest ECG finding in PE. The classic S1Q3T3 pattern (deep S in lead I, Q wave and inverted T in lead III) appears in only about 20% of cases and also occurs in other conditions. ITS ABSENCE MEANS NOTHING.',
        chest_xray: 'Mainly to exclude pneumothorax and pneumonia. USUALLY NORMAL — which is itself informative, because marked hypoxaemia with a normal film should raise PE. Two named signs exist and are rare and unreliable: HAMPTON HUMP, a wedge-shaped pleura-based opacity of infarcted lung, and WESTERMARK SIGN, reduced vascular markings beyond the occluded artery. Do not rely on either.',
        arterial_blood_gas: 'NORMAL ON AIR: pH 7.35 to 7.45, PaO2 11 to 13 kPa, PaCO2 4.7 to 6.0 kPa. EXPECTED: pH 7.48 (alkalotic), PaO2 9.1 (low), PaCO2 3.9 (low). INTERPRETATION: TYPE 1 RESPIRATORY FAILURE with RESPIRATORY ALKALOSIS — she is hypoxic and hyperventilating, blowing off carbon dioxide and raising pH. A normal gas does NOT exclude PE; young patients compensate well.',
        bloods: 'FBC as a baseline before anticoagulation (platelets 250, normal 150 to 400). U&E — creatinine 68, eGFR over 90, safe for contrast and full-dose anticoagulation. Clotting screen baseline. BETA-hCG PREGNANCY TEST IS MANDATORY in any woman of reproductive age, because pregnancy changes both the imaging pathway and the drug choice.',
        leg_doppler: 'The probe compresses the vein — a normal vein collapses completely, one containing clot does not. EXPECTED: non-compressible left popliteal and femoral vein with visible thrombus. USEFUL SHORTCUT: a confirmed proximal DVT in a patient with suspected PE justifies anticoagulation on its own, which helps when CTPA is unavailable or contraindicated.',
      },

      section_5_management: {
        immediate: 'Airway patent. Breathing: RR 26, SpO2 93%, so GIVE OXYGEN targeting 94 to 98% — nasal cannulae 2 to 4 L/min, stepping up to a simple face mask 5 to 10 L/min if needed. Circulation: IV access and monitoring; blood pressure stable, so this is NOT a massive PE.',
        anticoagulation: {
          key_principle: 'Anticoagulants do NOT dissolve the existing clot. They stop it GROWING and stop NEW clots forming, while the body own fibrinolytic system breaks down what is already there.',
          start_now: 'Start before the CTPA, because probability is high and bleeding risk is low.',
          option_1_doac:
            'APIXABAN 10 mg orally twice daily for 7 days, then 5 mg orally twice daily. A direct inhibitor of activated Factor X. Oral, no monitoring, fixed dosing, fewer bleeds than warfarin. ALTERNATIVE: RIVAROXABAN 15 mg orally twice daily WITH FOOD for 21 days, then 20 mg once daily with food — it must be taken with food or absorption is unreliable, and you must tell the patient that explicitly.',
          option_2_lmwh:
            'If a DOAC is unsuitable (pregnancy, severe renal impairment, some cancer protocols): ENOXAPARIN 1.5 mg/kg subcutaneously once daily, or 1 mg/kg twice daily. HER WEIGHT 62 kg: 1.5 x 62 = 93 mg subcutaneously once daily, rounded to the nearest syringe size. Injected into the abdominal wall, rotating sites. RENAL ADJUSTMENT: if eGFR under 30, reduce to 1 mg/kg once daily and consider anti-Xa monitoring. MONITOR the platelet count — HEPARIN-INDUCED THROMBOCYTOPENIA is a paradoxical immune reaction where platelets fall and the patient clots MORE; suspect it if platelets drop more than 50% between days 5 and 10.',
        },
        when_thrombolysis_is_indicated_not_here:
          'INDICATION: MASSIVE (high-risk) PE, defined by HAEMODYNAMIC INSTABILITY — systolic under 90 mmHg, or a drop of 40 mmHg or more for over 15 minutes, or needing vasopressors. DRUG: ALTEPLASE 100 mg IV over 2 hours (or 0.6 mg/kg over 15 minutes, maximum 50 mg, in cardiac arrest). It converts plasminogen to plasmin, which actively DISSOLVES fibrin — genuinely breaking the clot, unlike heparin. RISK: major bleeding including intracranial haemorrhage in roughly 2 to 3%, which is why it is reserved for those who would otherwise die. SHE IS NORMOTENSIVE AND DOES NOT GET IT.',
        duration_of_anticoagulation: {
          provoked_by_a_transient_factor: 'Surgery, immobility — 3 months, then stop.',
          provoked_by_a_persistent_factor_or_unprovoked: 'At least 3 months, then reassess; often extended indefinitely.',
          active_cancer: 'Continue while the cancer is active.',
          her_case: 'Genuinely nuanced. The flight is transient; the CONTRACEPTIVE PILL is a persistent but REMOVABLE risk factor. Standard practice: treat at least 3 months, STOP THE COMBINED PILL PERMANENTLY, and reassess. Document the reasoning.',
        },
        discharge_and_counselling: {
          can_she_go_home: 'Possibly. Use a validated severity score such as PESI or simplified PESI — low-risk patients with good support, no oxygen requirement and reliable follow-up can be managed as outpatients.',
          contraception: 'Stop the combined pill permanently. Discuss alternatives — progestogen-only pill, implant, intrauterine device — which do not carry the same risk. DO NOT LEAVE HER WITHOUT CONTRACEPTION.',
          future_flights: 'Walk hourly, calf exercises, hydrate, avoid alcohol, consider graduated compression stockings, and discuss prophylactic anticoagulation for future long flights.',
          bleeding_warnings: 'Report black tarry stools, blood in urine, unusual bruising, or any head injury even if minor.',
          pregnancy: 'She must tell any future doctor about this clot. Pregnancy raises risk further and she will need thromboprophylaxis.',
          post_pe_syndrome: 'Breathlessness can persist for months. Persistent breathlessness beyond 3 months warrants assessment for chronic thromboembolic pulmonary hypertension.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_order_is_the_whole_lesson:
          'SCORE FIRST, THEN CHOOSE THE TEST. In a Wells-likely patient, image directly — a D-dimer there can only mislead. In a Wells-unlikely patient, a negative D-dimer safely excludes PE without radiation. Getting this order wrong is the commonest error in PE management.',
        bonus_2_s1q3t3: 'It appears in only about 20% of PEs. Sinus tachycardia is the commonest finding. NEVER exclude PE because the ECG does not show S1Q3T3.',
        bonus_3_a_positive_d_dimer_means_image_never_treat:
          'D-dimer rises in infection, surgery, trauma, cancer, pregnancy, liver disease, and simply with age and hospitalisation. It is raised in most sick inpatients. It has value only as a NEGATIVE result in a LOW-probability patient.',
        trap_1: 'PE masquerading as pneumonia. Fever, pleuritic pain and haemoptysis occur in both. THE LEG TELLS YOU — examine and measure both calves in every breathless patient.',
        trap_2: 'A normal chest X-ray and normal saturations do NOT exclude PE. Young patients compensate.',
        trap_3: 'Never withhold imaging in pregnancy because of radiation. PE is a leading cause of maternal death, and fetal dose is far below the threshold for harm.',
        trap_4: 'Absence of leg signs does not exclude PE — most emboli arise from clinically silent veins. Her obvious DVT is helpful but not typical.',
        one_line_summary: 'Provoked PE with pulmonary infarction. Score before you test, anticoagulate before you image when probability is high, and stop the pill.',
      },
    },
    warnings: [
      'Score the pre-test probability BEFORE ordering a D-dimer. At high probability, image regardless of the result.',
      'A positive D-dimer means "image", never "treat".',
      'A normal chest X-ray, normal saturations and a normal blood gas do NOT exclude pulmonary embolism.',
      'Absence of leg signs does not exclude PE — most emboli come from clinically silent veins.',
      'PE with infarction mimics pneumonia exactly. Examine and MEASURE both calves.',
      'Never withhold imaging in pregnancy — PE is a leading cause of maternal death.',
      'A pregnancy test is mandatory in any woman of reproductive age before imaging and anticoagulation.',
      'Rivaroxaban must be taken WITH FOOD or absorption is unreliable — tell the patient explicitly.',
      'Monitor platelets on heparin — a fall over 50% between days 5 and 10 suggests heparin-induced thrombocytopenia, where the patient clots MORE.',
      'Doses here are teaching examples for an adult with normal renal and hepatic function. Check your local formulary before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Scoring systems, imaging pathways and anticoagulant choice differ by service.',
      'Weight-based doses shown are calculated for this patient. Recalculate for yours, and adjust for renal function.',
    ],
    cards: [
      { q: 'State Virchow triad.', a: 'Stasis, endothelial injury, and hypercoagulability.' },
      { q: 'What must you do before ordering a D-dimer?', a: 'Score the pre-test probability with a validated tool such as Wells.' },
      { q: 'Wells over 4 with a negative D-dimer — what now?', a: 'Image anyway. At high probability a negative D-dimer does not exclude PE.' },
      { q: 'What is a pleural rub and what does it mean?', a: 'A creaking sound from inflamed pleural surfaces grating — here from an infarcted lung segment.' },
      { q: 'Commonest ECG finding in PE?', a: 'Sinus tachycardia. S1Q3T3 occurs in only about 20%.' },
      { q: 'Name the two chest X-ray signs of PE and their limitation.', a: 'Hampton hump and Westermark sign — both rare and unreliable.' },
      { q: 'Calculate enoxaparin for a 62 kg woman at 1.5 mg/kg once daily.', a: '1.5 x 62 = 93 mg subcutaneously once daily.' },
      { q: 'When is thrombolysis indicated in PE?', a: 'Massive (high-risk) PE with haemodynamic instability — systolic under 90 or a 40 mmHg drop for over 15 minutes.' },
      { q: 'How does alteplase differ from heparin?', a: 'Alteplase actively dissolves fibrin; heparin only prevents the clot growing while the body breaks it down.' },
      { q: 'Why must the combined pill be stopped permanently here?', a: 'It is a persistent but removable risk factor, and it raises venous thromboembolism risk roughly threefold.' },
    ],
    checks: [
      'Both calves examined and measured with a tape',
      'Wells or Geneva score calculated and documented',
      'D-dimer used only if probability is low or intermediate',
      'Pregnancy test performed in a woman of reproductive age',
      'Anticoagulation started before imaging where probability is high',
      'Renal function checked before contrast and dosing',
      'Provoked versus unprovoked documented for duration',
      'Combined contraceptive stopped and alternative arranged',
      'Bleeding warnings given',
    ],
    related: ['pulmonary_embolism_probability_first_then_the_test'],
  },

  {
    id: 'AS-CASE-0003',
    type: 'case',
    specialty: 'Medicine — Cardiology',
    teaching_case: true,
    title: 'CASE: Waking at 2 a.m. Fighting for Breath With Pink Frothy Sputum',
    short: 'Case: acute pulmonary oedema',
    summary:
      'A 68-year-old insulin-treated diabetic with 4 hours of severe breathlessness, unable to lie flat, coughing pink frothy sputum. Covers why furosemide must be DOUBLE her usual oral dose, why a rising carbon dioxide is ominous, and why acute pulmonary oedema in a diabetic is a heart attack until proven otherwise.',
    domains: ['cardiovascular', 'emergency_medicine', 'endocrine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case pulmonary oedema', 'acute heart failure case', 'orthopnoea case', 'pnd case',
      'pink frothy sputum', 'flash pulmonary oedema', 'decompensated heart failure case',
      'cpap case', 'kerley b lines', 'case scenario heart failure',
    ],
    terms: [
      'case', 'pulmonary oedema', 'heart failure', 'orthopnoea', 'paroxysmal nocturnal dyspnoea',
      'pink frothy sputum', 'jvp', 'third heart sound', 's3', 'displaced apex', 'crackles',
      'kerley b lines', 'bat wing', 'upper lobe diversion', 'bnp', 'nt-probnp', 'furosemide',
      'gtn infusion', 'cpap', 'bipap', 'four pillars', 'hfref', 'ejection fraction',
      'cardiorenal', 'daily weights',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '68-year-old retired teacher, known diabetic 20 years on insulin, known hypertensive, with 4 hours of severe breathlessness, unable to lie flat, coughing pink frothy sputum.',

      section_1_clerking: {
        history:
          'She woke at 2 a.m. gasping for breath, sat bolt upright and opened the window. Over 4 hours it worsened. She is now unable to lie flat at all, sitting on the edge of the bed, coughing pink frothy sputum. For 2 weeks she has been increasingly breathless on walking and has needed 3 pillows at night, previously 1.',
        the_triad_you_must_know: {
          orthopnoea: 'Cannot lie flat. Lying down redistributes fluid from legs and abdomen into the chest, increasing pulmonary congestion.',
          paroxysmal_nocturnal_dyspnoea: 'Woke at 2 a.m. gasping. Same mechanism plus overnight reabsorption of tissue fluid. HIGHLY SPECIFIC for heart failure.',
          quantified_orthopnoea: 'Three pillows, from one. ALWAYS ASK how many pillows, AND how many before — it is a measurable marker of change.',
        },
        pink_frothy_sputum: 'Fluid has flooded from capillaries into the alveoli (air sacs). Pink from a small amount of blood, frothy because mixed with air. This IS acute pulmonary oedema.',
        the_diabetic_clue: 'Twenty years of insulin-treated diabetes. SHE MAY BE HAVING A SILENT HEART ATTACK RIGHT NOW. Acute pulmonary oedema in a diabetic is a myocardial infarction until proven otherwise, because autonomic neuropathy means she may feel no chest pain at all.',
        past_medical_history: 'Type 2 diabetes 20 years on insulin. Hypertension 15 years. CHRONIC KIDNEY DISEASE stage 3 (eGFR 45) from diabetic nephropathy. Previous "mild heart attack" 4 years ago.',
        drug_history: {
          insulin_glargine: 'Insulin glargine (Lantus) 28 units subcutaneously at 10 p.m. — a long-acting BASAL insulin giving background cover for 24 hours.',
          insulin_aspart: 'Insulin aspart (NovoRapid) 8 units subcutaneously three times daily before meals — a short-acting BOLUS insulin covering meals.',
          others: 'Ramipril 5 mg orally daily (ACE inhibitor). Bisoprolol 5 mg orally daily (beta-blocker). Furosemide 40 mg orally daily (loop diuretic). Aspirin 75 mg daily, atorvastatin 40 mg at night.',
          ask_immediately: 'HAS SHE BEEN TAKING THEM? Non-adherence and dietary salt are the two commonest precipitants of decompensation. Also ask about NSAIDs — ibuprofen causes fluid retention and blunts diuretics.',
        },
        vitals: {
          blood_pressure: '178/102 mmHg — markedly raised, and often both cause and consequence of acute pulmonary oedema.',
          pulse: '118 bpm regular.',
          respiratory_rate: '34 per minute — severe tachypnoea.',
          saturation: '84% on air — SEVERE HYPOXAEMIA. This is an emergency.',
          glucose: '18.4 mmol/L.',
        },
        examination: {
          general: 'Sitting bolt upright using accessory muscles (sternocleidomastoid, scalenes) — a sign of severe respiratory distress. Sweating, peripherally cool and clammy. CENTRAL CYANOSIS — blue tongue and lips, meaning severe arterial hypoxaemia.',
          cvs:
            'JVP RAISED to 7 cm above the sternal angle (normal under 3) — raised right atrial pressure and fluid overload. APEX BEAT DISPLACED to the 6th intercostal space, anterior axillary line — the left ventricle is DILATED. THIRD HEART SOUND (S3) present, a low-pitched extra sound just after S2, heard with the bell at the apex, caused by blood rushing into an already full stiff ventricle. In an adult over 40 an S3 strongly suggests heart failure. PANSYSTOLIC MURMUR at the apex radiating to the axilla — FUNCTIONAL MITRAL REGURGITATION, because the dilated ventricle stretches the valve ring so it cannot close.',
          respiratory:
            'BILATERAL FINE INSPIRATORY CRACKLES to the mid-zones — they sound like Velcro being pulled apart, and are alveoli popping open against fluid. Reduced air entry at both bases with stony dull percussion — BILATERAL PLEURAL EFFUSIONS.',
          abdomen_and_legs: 'Mild tender hepatomegaly from a congested liver. BILATERAL PITTING OEDEMA to the knees. NOTE THE CONTRAST with the PE case: BILATERAL oedema means a systemic problem (heart, liver, kidney); UNILATERAL means a local one (DVT, cellulitis, lymphatic).',
        },
      },

      section_2_mechanism: {
        what_heart_failure_is: 'The heart cannot pump enough blood to meet the body needs at normal filling pressures. It is a SYNDROME, not a diagnosis — always ask what caused it.',
        her_sequence: [
          '1. Twenty years of diabetes, 15 of hypertension and a previous infarct have damaged the left ventricle — some muscle replaced by scar, the rest working against high pressure.',
          '2. The ventricle DILATES and WEAKENS, giving a reduced EJECTION FRACTION (the percentage of blood ejected per beat; normal 50 to 70%).',
          '3. Something tips her over.',
          '4. Blood BACKS UP from the left ventricle into the left atrium, then the pulmonary veins, raising PULMONARY CAPILLARY PRESSURE.',
          '5. Normally capillary pressure (about 8 mmHg) is well below the plasma oncotic pressure (about 25 mmHg) holding fluid inside vessels. Above about 25 mmHg, FLUID IS FORCED OUT.',
          '6. Fluid enters the interstitium, then floods the ALVEOLI — PULMONARY OEDEMA.',
          '7. Fluid-filled alveoli cannot exchange gas, so oxygen cannot cross — HYPOXAEMIA, saturation 84%, cyanosis.',
          '8. She breathes faster and harder — tachypnoea and accessory muscle use.',
          '9. The fluid and air mixture is coughed up — PINK FROTHY SPUTUM.',
          '10. Fluid also backs up on the RIGHT side — raised JVP, hepatomegaly, leg oedema.',
          '11. THE VICIOUS CIRCLE: hypoxia and distress release catecholamines, causing tachycardia and vasoconstriction, raising blood pressure to 178/102, so the ventricle works even harder against greater afterload, worsening the failure.',
        ],
        why_that_last_point_matters: 'Breaking the circle — reducing afterload and preload — is exactly why nitrates and non-invasive ventilation work so quickly.',
        find_the_precipitant_mnemonic_failure:
          'F — Forgot medication or Fluid overload. A — Arrhythmia (especially new atrial fibrillation) or Anaemia. I — Ischaemia or Infarction (MOST IMPORTANT IN A DIABETIC). L — Lifestyle, dietary salt. U — Upregulation: pregnancy, thyrotoxicosis. R — Renal failure. E — Embolism or Endocarditis.',
      },

      section_3_differentials: {
        one_acute_cardiogenic_pulmonary_oedema: 'WORKING DIAGNOSIS. Supporting: orthopnoea, PND, pink frothy sputum, raised JVP, S3, displaced apex, bilateral crackles, bilateral pitting oedema, known heart disease. Confirm: chest X-ray, BNP, echocardiogram.',
        two_copd_or_asthma_exacerbation: 'Supporting: severe breathlessness. Against: non-smoker, no prior lung disease, crackles rather than wheeze, and raised JVP with peripheral oedema. CAVEAT: "CARDIAC ASTHMA" — pulmonary oedema CAN cause wheeze from bronchial wall oedema, so do not exclude heart failure because you hear a wheeze.',
        three_pneumonia: 'Supporting: breathlessness, crackles, hypoxaemia. Against: afebrile, no purulent sputum, crackles bilateral and symmetrical rather than focal, and raised JVP and oedema are not features of pneumonia. Exclude: chest X-ray, CRP, white cell count.',
        four_acute_coronary_syndrome: 'Not really a differential — a possible CAUSE, and in a diabetic it must be actively excluded with ECG and troponin in every case.',
        five_aki_with_fluid_overload: 'Supporting: known CKD and overload. Against: the cardiac findings (S3, displaced apex, murmur) point to the heart. Exclude: U&E and urine output.',
      },

      section_4_investigations: {
        note_on_order: 'This patient is in extremis at 84%. TREATMENT AND INVESTIGATION HAPPEN SIMULTANEOUSLY. Do not leave her hypoxic while organising tests.',
        ecg: 'To find an infarct or arrhythmia as the precipitant. Expected: sinus tachycardia 118, left ventricular hypertrophy with tall lateral R waves, old anterior Q waves from her previous infarct. LOOK SPECIFICALLY FOR NEW ST CHANGES.',
        chest_xray: {
          normal_appearance: 'Clear black lung fields, sharp costophrenic angles, cardiac shadow under 50% of chest width on a PA film.',
          five_features_of_pulmonary_oedema: '1. CARDIOMEGALY, cardiothoracic ratio over 50%. 2. UPPER LOBE VENOUS DIVERSION — normally lower-zone vessels are larger; in raised pressure the upper-zone vessels dilate. 3. KERLEY B LINES — short horizontal lines at the periphery meeting the pleura, which are THICKENED INTERLOBULAR SEPTA filled with fluid. 4. BAT WING perihilar shadowing from alveolar fluid. 5. PLEURAL EFFUSIONS blunting the costophrenic angles, often right more than left.',
          caution: 'An AP film taken sitting up in bed MAGNIFIES the heart. Do not diagnose cardiomegaly on an AP film.',
        },
        bnp: {
          what: 'B-type natriuretic peptide, a hormone released by ventricular muscle when STRETCHED. The best blood test for heart failure.',
          normal: 'NT-proBNP under 125 pg/mL makes heart failure very unlikely.',
          expected: '4,200 pg/mL — markedly raised.',
          two_traps: 'BNP is LOWER IN OBESITY, so a normal value in a very obese breathless patient does not exclude heart failure. BNP is RAISED IN KIDNEY DISEASE (as here, eGFR 45), atrial fibrillation, PE and sepsis. Interpret in context.',
        },
        troponin: 'To detect infarction as the precipitant — essential in a diabetic. Expected mildly raised at 85 ng/L (normal under 14). A MODEST rise is common in acute heart failure from demand ischaemia (TYPE 2 MI). A LARGE rise with a rise-and-fall pattern and ECG change suggests TYPE 1 MI from plaque rupture. The distinction decides whether she goes to the catheter laboratory.',
        u_and_e: 'Baseline before diuretics; heart failure and kidney failure worsen each other (CARDIORENAL SYNDROME). Expected sodium 132 (low — dilutional, and a poor prognostic sign), potassium 4.2, creatinine 148, eGFR 38 (worse than her baseline 45).',
        arterial_blood_gas: {
          expected: 'pH 7.28, PaO2 6.8 kPa, PaCO2 7.2 kPa, lactate 3.1 mmol/L.',
          interpretation: 'TYPE 2 RESPIRATORY FAILURE with a mixed acidosis. She is now TIRING — the rising carbon dioxide means she can no longer maintain the work of breathing.',
          why_this_is_ominous: 'In early pulmonary oedema patients hyperventilate and carbon dioxide is LOW. A RISING carbon dioxide means EXHAUSTION and impending respiratory arrest. It is the trigger for ventilatory support.',
        },
        echocardiogram: 'Expected: dilated left ventricle, EJECTION FRACTION 30%, global hypokinesia with anterior akinesia from the old infarct, moderate functional mitral regurgitation. EF 40% or below is HFrEF — heart failure with REDUCED ejection fraction. (41 to 49% is HFmrEF, mildly reduced; 50% or above is HFpEF, preserved.) This matters because HFrEF has four drugs proven to reduce mortality.',
      },

      section_5_management: {
        immediate: {
          position: 'SIT HER UPRIGHT with legs dependent. This is a treatment, not comfort — it pools blood in the legs reducing preload, and lets the diaphragm move freely.',
          oxygen: '15 L/min via NON-REBREATHER MASK — a mask with a reservoir bag and one-way valves so she inhales almost pure oxygen rather than room air, delivering roughly 85 to 95%. THE RESERVOIR BAG MUST BE INFLATED BEFORE APPLYING IT. Target 94 to 98%.',
          access: 'IV access, continuous monitoring, catheterise to measure urine output accurately.',
        },
        specific: {
          furosemide: {
            dose: 'FUROSEMIDE 80 mg by slow intravenous injection STAT.',
            what_it_is: 'A loop diuretic. It blocks the sodium-potassium-2-chloride co-transporter in the ascending limb of the loop of Henle, so sodium and water are not reabsorbed and are lost as urine.',
            why_80_not_40:
              'SHE ALREADY TAKES 40 mg ORALLY DAILY. A patient on a chronic dose needs AT LEAST DOUBLE their usual total daily dose intravenously to get a response. Giving 40 mg IV to someone on 40 mg orally does almost nothing.',
            why_iv: 'In decompensated heart failure the gut wall is oedematous, so oral absorption is unreliable.',
            how_to_give: 'Slow IV injection over 1 to 2 minutes — rapid injection can cause deafness (OTOTOXICITY).',
            monitor: 'Strict fluid balance chart, hourly urine output (aim over 0.5 mL/kg/hour), DAILY WEIGHT (the most reliable measure — 1 kg is about 1 litre), U&E daily.',
            side_effects: 'Hypokalaemia (arrhythmia risk), hyponatraemia, kidney injury from over-diuresis, gout, hearing loss.',
            if_no_response: 'Double the dose in 1 hour, or start an infusion: 250 mg furosemide in 250 mL of 0.9% sodium chloride = 1 mg/mL, run at 5 to 10 mL/hour.',
          },
          gtn_infusion: {
            indication: 'Her blood pressure is 178/102, so this is both safe and specifically indicated.',
            how_to_make: '50 mg GTN in 50 mL of 0.9% sodium chloride = 1 mg/mL.',
            start_and_titrate: 'Start 1 mL/hour (1 mg/hour), titrate up every 5 to 10 minutes by 1 to 2 mg/hour to a maximum of about 10 mg/hour. Target relief of breathlessness while keeping SYSTOLIC ABOVE 100 mmHg.',
            mechanism: 'At low doses it dilates VEINS, reducing preload so less blood returns to congested lungs. At higher doses it dilates ARTERIES, reducing afterload so the failing ventricle can eject more easily. This directly breaks the vicious circle.',
            contraindications: 'Systolic under 90 mmHg, aortic stenosis, PDE-5 inhibitor use.',
            side_effects: 'Headache (very common), hypotension, tolerance with prolonged use.',
          },
          non_invasive_ventilation: {
            indication: 'Her carbon dioxide is rising.',
            what: 'CPAP — Continuous Positive Airway Pressure — starting at 5 to 10 cmH2O. A tight-fitting mask delivering continuous pressure throughout the breathing cycle.',
            how_it_works_three_ways: '1. Splints alveoli open, recruiting collapsed lung and improving oxygenation. 2. Physically pushes fluid out of alveoli back into capillaries. 3. Raises intrathoracic pressure, reducing venous return (preload) AND reducing left ventricular afterload.',
            evidence: 'Reduces the need for intubation and reduces mortality in acute cardiogenic pulmonary oedema.',
            contraindications: 'Reduced consciousness, vomiting, facial trauma, untreated pneumothorax, haemodynamic instability.',
            if_worse: 'Intubation and mechanical ventilation. CALL INTENSIVE CARE EARLY — do not wait until she arrests.',
          },
          morphine: 'Older teaching advocated morphine for anxiety and preload reduction. Observational data suggest HIGHER MORTALITY, likely from respiratory depression and hypotension. CURRENT PRACTICE: avoid routinely. If used at all, 1.25 to 2.5 mg IV with great caution.',
          what_to_do_with_her_regular_drugs: {
            bisoprolol: 'HOLD during acute decompensation — it is a negative inotrope, reducing contractility in an already failing heart. RESTART BEFORE DISCHARGE, because it improves long-term survival.',
            ramipril: 'Hold today, given the rising creatinine and aggressive diuresis. Recheck U&E and restart when renal function stabilises.',
            insulin: 'CONTINUE — she needs it. Adjust doses and check glucose 4-hourly. Do not omit basal insulin.',
          },
          four_pillars_once_stable: {
            note: 'These reduce MORTALITY, not just symptoms. Diuretics make her feel better; these keep her alive. Start all four early and titrate rather than sequencing them over months.',
            pillar_1: 'ARNI or ACE inhibitor — sacubitril/valsartan 24/26 mg orally twice daily, or ramipril 2.5 mg daily titrated to 10 mg. Blocks the renin-angiotensin system; the ARNI also blocks neprilysin, prolonging beneficial natriuretic peptides.',
            pillar_2: 'Beta-blocker — bisoprolol 1.25 mg orally daily, titrated slowly to 10 mg. Blocks chronic sympathetic overdrive, which is toxic to myocardium.',
            pillar_3: 'Mineralocorticoid receptor antagonist — spironolactone 25 mg orally daily. Blocks aldosterone, reducing fibrosis and potassium loss. MONITOR POTASSIUM — it can cause dangerous hyperkalaemia, especially with an ACE inhibitor and CKD.',
            pillar_4: 'SGLT2 inhibitor — dapagliflozin 10 mg orally daily. Reduces hospitalisation and cardiovascular death, and works even in non-diabetics. Perfect here, since she is diabetic AND has heart failure.',
          },
        },
        monitoring_and_counselling: {
          monitoring: 'Hourly urine output and observations initially. DAILY WEIGHT — the single most useful measure. Strict fluid balance. Daily U&E while diuresing. Repeat blood gas after 1 hour of CPAP.',
          complications: 'Cardiogenic shock, over-diuresis causing acute kidney injury and hypokalaemia, arrhythmia, cardiorenal syndrome, respiratory arrest if non-invasive ventilation fails.',
          counselling: {
            daily_weights: 'Same scales, same time, after passing urine, before breakfast. A GAIN OF 2 kg OVER 2 TO 3 DAYS MEANS FLUID IS ACCUMULATING — contact the heart failure nurse. This single instruction prevents readmissions.',
            salt_and_fluid: 'No added salt, avoid processed foods and stock cubes. Fluid restriction typically 1.5 to 2 L/day if hyponatraemic.',
            avoid_nsaids: 'Ibuprofen and diclofenac cause fluid retention and blunt diuretics.',
            adherence: 'The four pillars are for SURVIVAL, not symptoms — she must continue them even when feeling well.',
            other: 'Annual influenza and pneumococcal vaccination. Cardiac rehabilitation referral. Diabetes review — HbA1c 78 mmol/mol, and the SGLT2 inhibitor helps both conditions.',
          },
        },
      },

      section_6_teaching_points: {
        bonus_1_why_furosemide_80_not_40:
          'A patient already taking a loop diuretic has adapted to it. The intravenous dose must be AT LEAST DOUBLE the usual total daily oral dose. Giving the same dose IV as the patient takes orally is a very common junior error that produces no diuresis and wastes an hour.',
        bonus_2_why_a_rising_co2_is_frightening:
          'Early on, patients hyperventilate and carbon dioxide falls. A NORMALISING or RISING carbon dioxide means the respiratory muscles are exhausted. It signals IMPENDING RESPIRATORY ARREST, not improvement. Escalate to non-invasive ventilation or intubation immediately.',
        bonus_3_what_kerley_b_lines_are:
          'Short horizontal lines 1 to 2 cm long at the lung periphery, perpendicular to and touching the pleura. They are INTERLOBULAR SEPTA — the connective tissue partitions between lung lobules — swollen with fluid. They indicate INTERSTITIAL oedema, appearing BEFORE alveolar flooding, and are one of the earliest radiographic signs.',
        bonus_4_why_the_s3_matters:
          'A third heart sound in an adult over 40 is one of the more specific bedside signs of heart failure, produced by blood rushing into a ventricle already full and stiff. Listen with the BELL at the apex, patient rolled onto the left side.',
        trap_1: 'Acute pulmonary oedema in a diabetic is a heart attack until proven otherwise. She may have no chest pain at all. ECG AND TROPONIN IN EVERY CASE.',
        trap_2: 'CARDIAC ASTHMA — pulmonary oedema can wheeze. Do not diagnose asthma or COPD and give only bronchodilators. Look at the JVP, the apex beat and the legs.',
        trap_3: 'Do not give a large fluid bolus to a breathless patient before examining the JVP. Fluid in decompensated heart failure is directly harmful.',
        trap_4: 'Hold the beta-blocker acutely, but RESTART IT BEFORE DISCHARGE. Patients discharged without it lose a proven survival benefit, and it is very frequently forgotten.',
        trap_5: 'Watch potassium. Furosemide lowers it; ramipril and spironolactone raise it. In chronic kidney disease this combination can produce dangerous hyperkalaemia.',
        one_line_summary: 'Acute cardiogenic pulmonary oedema in a diabetic — sit her up, high-flow oxygen, GTN infusion, IV furosemide at double her oral dose, CPAP for the rising carbon dioxide, and hunt for the infarct that caused it.',
      },
    },
    warnings: [
      'Acute pulmonary oedema in a diabetic is a myocardial infarction until proven otherwise — ECG and troponin in every case.',
      'Intravenous furosemide must be at least DOUBLE the usual total daily oral dose, or it will not work.',
      'A rising or normalising carbon dioxide in pulmonary oedema means exhaustion and impending respiratory arrest.',
      'Do not give a fluid bolus to a breathless patient before examining the JVP.',
      'Pulmonary oedema can wheeze ("cardiac asthma") — do not treat it as airways disease alone.',
      'Hold the beta-blocker acutely but RESTART it before discharge; it is a proven survival benefit and is routinely forgotten.',
      'BNP is LOWER in obesity and HIGHER in kidney disease — interpret in context.',
      'An AP chest film magnifies the heart; do not diagnose cardiomegaly on one.',
      'Watch potassium — furosemide lowers it while ramipril and spironolactone raise it.',
      'Doses here are teaching examples for an adult. Check your local formulary before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Diuretic strategies, ventilation thresholds and drug titration differ by service.',
      'Doses assume an adult with the renal function described. Recalculate for your patient.',
    ],
    cards: [
      { q: 'Define orthopnoea and paroxysmal nocturnal dyspnoea.', a: 'Orthopnoea is breathlessness lying flat; PND is waking gasping — both from fluid redistributing into the chest.' },
      { q: 'Why is pink frothy sputum pink and frothy?', a: 'Pink from a small amount of blood, frothy because alveolar fluid is mixed with air.' },
      { q: 'Why give furosemide 80 mg when she takes 40 mg orally?', a: 'A patient on a chronic dose needs at least double their usual total daily dose intravenously to respond.' },
      { q: 'How do you make and start a GTN infusion?', a: '50 mg in 50 mL sodium chloride = 1 mg/mL; start 1 mL/hour and titrate, keeping systolic above 100 mmHg.' },
      { q: 'Name three ways CPAP helps pulmonary oedema.', a: 'Splints alveoli open, pushes fluid back into capillaries, and reduces both preload and afterload.' },
      { q: 'What are Kerley B lines?', a: 'Interlobular septa swollen with fluid — short horizontal peripheral lines touching the pleura, an early sign of interstitial oedema.' },
      { q: 'What does a third heart sound mean in an adult over 40?', a: 'Blood rushing into a full stiff ventricle — a fairly specific sign of heart failure.' },
      { q: 'Give the four pillars of HFrEF treatment.', a: 'ARNI or ACE inhibitor, beta-blocker, mineralocorticoid receptor antagonist, and SGLT2 inhibitor.' },
      { q: 'What weight gain should prompt a patient to seek help?', a: '2 kg over 2 to 3 days — it means fluid is accumulating.' },
      { q: 'Why is a rising carbon dioxide ominous here?', a: 'She should be hyperventilating; a rising level means the respiratory muscles are exhausted.' },
    ],
    checks: [
      'Patient sat upright with legs dependent',
      'High-flow oxygen with the reservoir bag inflated',
      'ECG and troponin sent to exclude infarction',
      'Furosemide dose calculated against her usual oral dose',
      'GTN infusion started with blood pressure monitoring',
      'CPAP considered for rising carbon dioxide',
      'Beta-blocker held acutely and flagged for restart',
      'Daily weight chart started',
      'Precipitant identified using FAILURE',
    ],
    related: ['heart_failure_by_ejection_fraction_hfref_hfmref_hfpef_and_recovered'],
  },

  {
    id: 'AS-CASE-0004',
    type: 'case',
    specialty: 'Medicine — Respiratory',
    teaching_case: true,
    title: 'CASE: A 22-Year-Old Asthmatic Who Cannot Complete a Sentence',
    short: 'Case: life-threatening asthma',
    summary:
      'A student with known asthma who stopped his preventer three months ago, now with a peak flow of 30% and a saturation of 90%. The central lesson: in acute asthma a NORMAL carbon dioxide is a life-threatening sign, and a QUIETENING chest is deterioration, not improvement.',
    domains: ['respiratory', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case asthma', 'acute severe asthma case', 'life threatening asthma', 'silent chest',
      'peak flow case', 'status asthmaticus', 'near fatal asthma', 'case scenario asthma',
    ],
    terms: [
      'case', 'asthma', 'acute severe', 'life threatening', 'near fatal', 'peak flow', 'pefr',
      'silent chest', 'salbutamol', 'ipratropium', 'prednisolone', 'hydrocortisone',
      'magnesium sulphate', 'nebuliser', 'spacer', 'inhaled corticosteroid', 'preventer',
      'reliever', 'polyphonic wheeze', 'accessory muscles', 'hypokalaemia', 'asthma action plan',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '22-year-old male university student with known asthma, 8 hours of worsening breathlessness and wheeze, now unable to complete a sentence.',

      section_1_clerking: {
        history:
          'Two days of coryzal symptoms. Yesterday his chest became tight and wheezy. Overnight it worsened. Over 8 hours he has used his blue inhaler more than 20 times with no relief. He is now unable to complete a full sentence in one breath.',
        reading_the_clues: {
          preceding_viral_illness: 'Viral upper respiratory infection is the commonest trigger of an asthma exacerbation.',
          reliever_failure: 'More than 20 uses with no relief. RELIEVER FAILURE IS A MARKER OF SEVERITY, and escalating use in the days before presentation is classic of near-fatal asthma.',
          cannot_complete_sentences: 'A DEFINED MARKER of ACUTE SEVERE asthma. Assess it deliberately — ask a question and listen to how far he gets.',
        },
        past_medical_history:
          'Asthma since childhood. ONE PREVIOUS ICU ADMISSION AGED 17 REQUIRING INTUBATION. THIS IS THE SINGLE MOST IMPORTANT LINE IN THE HISTORY — previous near-fatal asthma is the strongest predictor of death from asthma. Treat any exacerbation in such a patient as high risk from the outset. Also eczema and hay fever, the ATOPIC TRIAD.',
        drug_history: {
          reliever: 'Salbutamol inhaler (blue) 100 micrograms, 2 puffs as required — a short-acting beta-2 agonist.',
          preventer: 'Beclometasone inhaler (brown) 200 micrograms twice daily — an inhaled corticosteroid.',
          the_admission: 'HE STOPPED THE BROWN INHALER 3 MONTHS AGO BECAUSE HE FELT FINE. This is the modifiable cause of this admission. The preventer reduces airway inflammation; the reliever only relaxes muscle. Poor adherence to inhaled corticosteroids is the commonest reversible factor in asthma deaths.',
        },
        social: 'Non-smoker. Shared student accommodation, DAMP WITH MOULD — a trigger. Exams next week; stress is a recognised trigger.',
        vitals_and_severity: {
          values: 'BP 128/76 (normal). Pulse 128 (marked tachycardia, from hypoxia, distress and salbutamol itself). Respiratory rate 32. Temperature 37.4 (consistent with viral trigger). Saturation 90% on air. PEAK FLOW 180 L/min against a personal best of 600 = 30%.',
          what_peak_flow_is:
            'Peak Expiratory Flow Rate — the fastest speed of air he can blow out. HOW TO DO IT: stand up, take the deepest possible breath, seal lips around the mouthpiece, blow out as hard and fast as possible in one short sharp blast. Three attempts, record the BEST. Always compare with the PERSONAL BEST where known, not a predicted value.',
          severity_classification: {
            moderate: 'Peak flow 50 to 75% of best, with no features of severe.',
            acute_severe: 'Peak flow 33 to 50%, OR cannot complete sentences, OR respiratory rate 25 or more, OR pulse 110 or more.',
            life_threatening: 'Peak flow under 33%, saturation under 92%, SILENT CHEST, cyanosis, poor respiratory effort, exhaustion, confusion, bradycardia or arrhythmia, hypotension, or a NORMAL carbon dioxide.',
            near_fatal: 'RAISED carbon dioxide, or requiring ventilation.',
            his_category: 'Peak flow 30% and saturation 90% — THIS IS LIFE-THREATENING ASTHMA.',
          },
        },
        examination: {
          general: 'Sitting forward in a tripod position, using accessory muscles, anxious, speaking in SINGLE WORDS. No cyanosis yet.',
          respiratory:
            'Hyperinflated chest with reduced expansion. WIDESPREAD POLYPHONIC EXPIRATORY WHEEZE. WHAT WHEEZE IS: a musical whistling from air forced through narrowed airways. POLYPHONIC means many different pitches, so many airways of different calibres are narrowed — diffuse airway disease. (MONOPHONIC means a single pitch and one large airway obstructed, such as by a tumour.) Percussion hyper-resonant from trapped air.',
        },
      },

      section_2_mechanism: {
        what_asthma_is: 'A chronic inflammatory disease of the airways causing REVERSIBLE airflow obstruction, with three components — and each has a different treatment.',
        the_three_components: {
          bronchoconstriction: 'Airway smooth muscle contracts, narrowing the tube. TREATED BY SALBUTAMOL.',
          inflammation_and_oedema: 'The airway wall itself swells and thickens. TREATED BY CORTICOSTEROIDS.',
          mucus_plugging: 'Thick secretions block the narrowed airway. TREATED BY STEROIDS, HYDRATION AND TIME.',
          why_salbutamol_alone_fails:
            'It relaxes muscle but does nothing for inflammation or mucus. He took 20 puffs with no relief because TWO OF HIS THREE PROBLEMS ARE UNTOUCHED BY IT. This is exactly why steroids must be given early.',
        },
        his_sequence: [
          '1. Stopped the inhaled corticosteroid 3 months ago, so suppressed airway inflammation gradually returned.',
          '2. Viral infection added further inflammation, epithelial damage and heightened airway reactivity.',
          '3. Smooth muscle contracts, walls swell, mucus is produced — airways narrow.',
          '4. EXPIRATION IS AFFECTED MORE THAN INSPIRATION, because airways naturally narrow during expiration as intrathoracic pressure rises around them. Air gets IN but struggles to get OUT.',
          '5. Air becomes TRAPPED and the lungs hyperinflate — hyper-resonant percussion, reduced expansion.',
          '6. Hyperinflation puts the diaphragm at a mechanical disadvantage, so breathing becomes far harder — accessory muscle use and exhaustion.',
          '7. Narrowed airways cause turbulent flow — WHEEZE.',
          '8. Poorly ventilated alveoli still receive blood — V/Q MISMATCH — causing HYPOXAEMIA at 90%.',
          '9. Initially he hyperventilates, so carbon dioxide FALLS — respiratory alkalosis.',
          '10. AS HE TIRES, ventilation falls, so carbon dioxide rises back to normal and then above it.',
        ],
        the_most_important_concept:
          'IN ACUTE ASTHMA, A NORMAL CARBON DIOXIDE IS A LIFE-THREATENING SIGN AND A RAISED ONE IS NEAR-FATAL. A patient with severe asthma SHOULD be hyperventilating, so carbon dioxide should be LOW. If it has climbed back to normal, the patient is exhausted and can no longer maintain ventilation. Many patients have died because someone saw a normal gas and relaxed.',
        the_silent_chest:
          'Wheeze requires airflow. If the chest becomes QUIET, almost no air is moving. A QUIETENING CHEST IS DETERIORATION, NOT IMPROVEMENT.',
      },

      section_3_differentials: {
        one_life_threatening_asthma: 'WORKING DIAGNOSIS. Supporting: known asthma, viral trigger, stopped preventer, wheeze, peak flow 30%, saturation 90%, cannot complete sentences, previous ICU admission.',
        two_anaphylaxis: 'Supporting: acute bronchospasm. Against: no urticaria, angioedema, hypotension or known exposure; onset over 2 days rather than minutes. IF IN DOUBT GIVE ADRENALINE — the risk of withholding exceeds the risk of giving it.',
        three_pneumothorax: 'Supporting: sudden worsening in a hyperinflated chest. Against: expansion equal, trachea central, no unilateral hyper-resonance. A TENSION PNEUMOTHORAX IN AN ASTHMATIC IS A GENUINE AND LETHAL COMPLICATION — if he deteriorates suddenly with unilateral signs and tracheal deviation, DECOMPRESS IMMEDIATELY WITHOUT WAITING FOR IMAGING.',
        four_pneumonia: 'Supporting: preceding infection, fever, hypoxaemia. Against: no focal crackles, no bronchial breathing, no purulent sputum, wheeze diffuse. Exclude: chest X-ray, inflammatory markers.',
        five_inhaled_foreign_body: 'Supporting: acute wheeze. Against: gradual onset over 2 days; wheeze polyphonic and bilateral rather than monophonic and unilateral.',
      },

      section_4_investigations: {
        note: 'DO NOT DELAY TREATMENT FOR INVESTIGATIONS. Give oxygen and nebulisers first.',
        peak_flow: 'The most useful single measurement. Objectively grades severity and tracks response. Under 33% defines life-threatening asthma. REPEAT AFTER EVERY TREATMENT — improvement is the best sign you are winning.',
        arterial_blood_gas: {
          indications: 'Saturation under 92%, or any life-threatening feature. He meets both.',
          normal_on_air: 'pH 7.35 to 7.45, PaO2 11 to 13 kPa, PaCO2 4.7 to 6.0 kPa, bicarbonate 22 to 26 mmol/L.',
          expected: 'pH 7.46, PaO2 8.4, PaCO2 4.1, bicarbonate 23.',
          interpretation: 'TYPE 1 RESPIRATORY FAILURE with RESPIRATORY ALKALOSIS — appropriate hyperventilation. He is not yet exhausted.',
          repeat: 'REPEAT IN 1 HOUR. If carbon dioxide climbs toward 4.7 to 6.0 (that is, "normalises"), he is tiring — CALL INTENSIVE CARE IMMEDIATELY.',
        },
        chest_xray: 'NOT ROUTINE in asthma. Indicated only for suspected pneumothorax, suspected consolidation, life-threatening asthma, or failure to respond. He qualifies. Expected: hyperinflated lungs (more than 6 anterior ribs above the diaphragm, flattened diaphragms), otherwise clear.',
        bloods: 'FBC — white cells may rise from infection or steroids; eosinophils support an allergic phenotype. U&E SPECIFICALLY BECAUSE SALBUTAMOL DRIVES POTASSIUM INTO CELLS AND CAUSES HYPOKALAEMIA — repeated nebulisers can drop potassium substantially, risking arrhythmia. Check and replace it. CRP for bacterial infection.',
        what_not_to_do: 'Routine antibiotics. Most exacerbations are VIRAL. Give antibiotics only with clear evidence of bacterial infection.',
      },

      section_5_management: {
        immediate_oshit_me: {
          o_oxygen: '15 L/min via non-rebreather mask, target 94 to 98%. UNLIKE COPD there is NO risk of losing hypoxic drive in asthma — give oxygen freely.',
          s_salbutamol: {
            dose: '5 mg NEBULISED, DRIVEN BY OXYGEN at 6 to 8 L/min.',
            critical: 'NEBULISE WITH OXYGEN, NOT AIR. Air-driven nebulisers in a hypoxic asthmatic worsen hypoxaemia. This is the OPPOSITE of COPD.',
            what_it_is: 'A short-acting beta-2 agonist stimulating beta-2 receptors on airway smooth muscle, causing relaxation and bronchodilation.',
            frequency: 'Repeat every 15 to 20 minutes, or give CONTINUOUSLY (back-to-back) in life-threatening asthma.',
            side_effects: 'Tremor, tachycardia, hypokalaemia, and lactic acidosis at high doses.',
          },
          h_steroids: {
            dose: 'PREDNISOLONE 40 to 50 mg orally once daily if able to swallow, OR HYDROCORTISONE 100 mg intravenously if not.',
            what_they_do: 'Suppress airway inflammation and mucosal oedema — treating two of the three components salbutamol cannot touch.',
            timing: 'THEY TAKE 4 TO 6 HOURS TO WORK, WHICH IS EXACTLY WHY YOU MUST GIVE THEM NOW. Continue for 5 days; no tapering needed for a short course.',
          },
          i_ipratropium: 'IPRATROPIUM BROMIDE 500 micrograms nebulised, every 4 to 6 hours, and may be given with the salbutamol initially. A short-acting muscarinic antagonist blocking acetylcholine-mediated bronchoconstriction — a DIFFERENT pathway from salbutamol, so the two are additive. Indicated in acute severe and life-threatening asthma.',
          t_theophylline: 'Rarely used now. Senior decision only; requires level monitoring and has a narrow therapeutic index.',
          m_magnesium: {
            dose: 'MAGNESIUM SULPHATE 2 g (8 mmol) intravenously over 20 minutes.',
            how_to_give: '2 g in 100 mL of 0.9% sodium chloride, infused over 20 minutes.',
            what_it_does: 'A smooth muscle relaxant blocking calcium entry into airway smooth muscle.',
            indication: 'Acute severe asthma not responding to initial treatment, or life-threatening asthma. SINGLE DOSE.',
            monitor: 'Blood pressure (can cause hypotension); watch for flushing and loss of deep tendon reflexes as signs of excess.',
          },
          e_escalate: 'CALL FOR SENIOR AND INTENSIVE CARE HELP EARLY.',
        },
        if_he_deteriorates: {
          signs_of_failure: 'Falling peak flow, rising carbon dioxide, exhaustion, confusion, SILENT CHEST, bradycardia, hypotension.',
          options: 'Intravenous salbutamol infusion (senior or ICU decision). Intubation and mechanical ventilation.',
          why_ventilation_is_dangerous:
            'Air trapping causes progressive hyperinflation ("breath stacking"), raising intrathoracic pressure, obstructing venous return, and potentially causing cardiac arrest or pneumothorax. It requires LONG EXPIRATORY TIMES and PERMISSIVE HYPERCAPNIA and must be done by someone experienced. DO NOT DELAY CALLING ICU.',
        },
        discharge: {
          criteria: 'Peak flow over 75% of best, stable off nebulisers for 24 hours on inhalers, no nocturnal symptoms, normal saturation on air.',
          before_he_leaves_every_one_of_these: {
            one_inhaler_technique: 'CHECK IT AND WATCH HIM DO IT. Studies repeatedly show most patients use inhalers incorrectly. PRESCRIBE A SPACER — it dramatically improves delivery to the lungs and reduces oral thrush.',
            two_restart_the_preventer:
              'Explain the difference properly: "The blue one opens your airways for a few hours. The brown one treats the swelling that causes the attacks. The brown one is what keeps you out of hospital, and it only works if you take it every day, even when you feel completely well."',
            three_written_action_plan: 'A personalised plan — what to do when peak flow falls, when to increase treatment, when to seek help. REDUCES ADMISSIONS AND DEATHS.',
            four_complete_the_steroid_course: 'Five days of prednisolone.',
            five_follow_up: 'Within 48 hours with the general practitioner, and respiratory clinic referral — HE HAS HAD TWO LIFE-THREATENING ATTACKS and needs specialist review.',
            six_address_the_mould: 'Write to the housing provider if needed.',
            seven_vaccination: 'Influenza vaccination.',
          },
        },
      },

      section_6_teaching_points: {
        bonus_1_normal_co2:
          'A severely breathless asthmatic should be hyperventilating, so carbon dioxide should be LOW. A NORMAL value means ventilation is falling and the patient is exhausted. A RAISED value is near-fatal asthma. NEVER be reassured by a "normal" blood gas in a struggling asthmatic — this has killed patients.',
        bonus_2_the_silent_chest: 'Wheeze requires airflow. A chest that becomes QUIET means air is barely moving. Combined with exhaustion and a rising carbon dioxide it means intubation is imminent.',
        bonus_3_why_salbutamol_alone_fails: 'Asthma has three components — bronchoconstriction, inflammation and mucus. Salbutamol treats only the first. STEROIDS TREAT THE OTHER TWO, which is why he had no relief from 20 puffs and why steroids must be given within the first hour.',
        bonus_4_nebulise_with_oxygen: 'Air-driven nebulisers worsen hypoxaemia in asthma. This is the REVERSE of COPD practice, where air-driven nebulisers avoid carbon dioxide retention. Know which patient you have.',
        trap_1: 'THE MOST DANGEROUS ASTHMATIC IS THE ONE WHO LOOKS CALM. Exhaustion, confusion, a silent chest and bradycardia are pre-terminal. Agitation and loud wheeze are paradoxically more reassuring than quiet drowsiness.',
        trap_2: 'Previous ICU admission or ventilation is the strongest predictor of asthma death. Ask about it in every asthmatic.',
        trap_3: 'Watch potassium — repeated salbutamol drives it into cells, and hypokalaemia with hypoxia and tachycardia is an arrhythmia risk.',
        trap_4: 'Antibiotics are not routine; most exacerbations are viral.',
        trap_5: 'Do not discharge without checking inhaler technique, restarting the preventer and giving a written action plan. All three reduce readmission and death, and all three are routinely skipped.',
        one_line_summary: 'Life-threatening asthma precipitated by stopping his preventer. Oxygen, back-to-back salbutamol and ipratropium nebulised with oxygen, steroids in the first hour, magnesium if not responding — and never trust a normal carbon dioxide.',
      },
    },
    warnings: [
      'A NORMAL carbon dioxide in acute asthma is a LIFE-THREATENING sign; a raised one is near-fatal.',
      'A quietening or SILENT chest is deterioration, not improvement.',
      'Nebulise with OXYGEN in asthma — air-driven nebulisers worsen hypoxaemia. This is the opposite of COPD.',
      'Give steroids within the first hour — they take 4 to 6 hours to work.',
      'Salbutamol treats only bronchoconstriction; inflammation and mucus need steroids.',
      'Previous ICU admission or intubation is the strongest predictor of asthma death — ask every asthmatic.',
      'Repeated salbutamol causes hypokalaemia — check and replace potassium.',
      'A tension pneumothorax in an asthmatic is lethal — decompress on clinical suspicion without waiting for imaging.',
      'Do not discharge without checking inhaler technique, restarting the preventer and issuing a written action plan.',
      'Doses here are teaching examples for an adult. Check your local formulary before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Severity thresholds and escalation pathways follow your national asthma guideline.',
      'Paediatric doses and thresholds differ substantially and are not covered here.',
    ],
    cards: [
      { q: 'How do you perform a peak flow measurement?', a: 'Stand, deepest breath in, seal lips, blow out hard and fast in one blast. Three attempts, record the best, compare with personal best.' },
      { q: 'What defines life-threatening asthma?', a: 'Peak flow under 33%, saturation under 92%, silent chest, cyanosis, exhaustion, confusion, bradycardia, hypotension, or a NORMAL carbon dioxide.' },
      { q: 'Why is a normal carbon dioxide alarming?', a: 'A severe asthmatic should be hyperventilating with a LOW value; a normal one means exhaustion.' },
      { q: 'Why does salbutamol alone fail?', a: 'It treats bronchoconstriction only — inflammation and mucus plugging need corticosteroids.' },
      { q: 'Give the magnesium sulphate dose and how to give it.', a: '2 g in 100 mL of 0.9% sodium chloride intravenously over 20 minutes, as a single dose.' },
      { q: 'What gas should drive the nebuliser in asthma, and why?', a: 'Oxygen — air-driven nebulisers worsen hypoxaemia. The opposite applies in COPD.' },
      { q: 'What is the strongest predictor of death from asthma?', a: 'Previous near-fatal asthma — ICU admission or intubation.' },
      { q: 'Polyphonic versus monophonic wheeze?', a: 'Polyphonic means many airways of different calibres narrowed; monophonic means one large airway obstructed.' },
      { q: 'Name the three discharge interventions that reduce death.', a: 'Check inhaler technique with a spacer, restart the inhaled corticosteroid, and issue a written action plan.' },
    ],
    checks: [
      'Peak flow measured and compared with personal best',
      'Severity classified explicitly',
      'Oxygen-driven nebulisers used',
      'Steroids given within the first hour',
      'Blood gas taken and repeated at 1 hour',
      'Potassium checked after repeated salbutamol',
      'Previous ICU admission asked about',
      'Senior and ICU alerted early',
      'Inhaler technique checked and spacer prescribed before discharge',
      'Written asthma action plan issued',
    ],
    related: ['spirometry_and_lung_function_tests_obstructive_versus_restrictive'],
  },

  {
    id: 'AS-CASE-0005',
    type: 'case',
    specialty: 'Medicine — Respiratory',
    teaching_case: true,
    title: 'CASE: A Drowsy COPD Patient on Gliclazide With Green Sputum',
    short: 'Case: COPD with type 2 failure and hypoglycaemia',
    summary:
      'A 72-year-old ex-miner with COPD, drowsy and confused after 3 days of green sputum — with TWO causes of reduced consciousness running at once: carbon dioxide retention and sulfonylurea hypoglycaemia. Teaches controlled oxygen, why nebulisers are air-driven here, and BiPAP versus CPAP.',
    domains: ['respiratory', 'emergency_medicine', 'endocrine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case copd', 'copd exacerbation case', 'type 2 respiratory failure case',
      'carbon dioxide retention', 'hypercapnia case', 'bipap case', 'venturi mask',
      'sulfonylurea hypoglycaemia', 'gliclazide hypo', 'cor pulmonale', 'case scenario copd',
    ],
    terms: [
      'case', 'copd', 'exacerbation', 'type 2 respiratory failure', 'hypercapnia', 'asterixis',
      'venturi mask', 'controlled oxygen', 'haldane effect', 'hypoxic pulmonary vasoconstriction',
      'bipap', 'ipap', 'epap', 'cpap', 'anthonisen', 'cor pulmonale', 'gliclazide',
      'sulfonylurea', 'hypoglycaemia', 'glucagon', 'long term oxygen therapy', 'pack years',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '72-year-old retired miner, known diabetic 8 years on gliclazide, 50-pack-year smoker with known COPD, 3 days of increasing breathlessness and green sputum, now drowsy.',

      section_1_clerking: {
        demographics: 'Occupational dust exposure from coal and silica causes pneumoconiosis and compounds smoking damage. ASK EVERY BREATHLESS OLDER PATIENT WHAT WORK THEY DID — occupational lung disease is missed by not asking.',
        history: 'Three days of worsening breathlessness, now at rest. Cough productive of thick green sputum, increased from his usual small clear morning sputum. Increased wheeze. Today his wife noticed he became drowsy and confused with a coarse hand tremor.',
        reading_the_clues: {
          three_days_gradual: 'Infective exacerbation, not a sudden vascular event.',
          sputum_change: 'The ANTHONISEN CRITERIA for exacerbation: increased breathlessness, increased sputum VOLUME, increased sputum PURULENCE. All three suggests bacterial infection.',
          drowsy_and_confused: 'THE ALARMING FEATURE. In a COPD patient this suggests CARBON DIOXIDE RETENTION — hypercapnia.',
          coarse_tremor: 'ASTERIXIS, the carbon dioxide flap — a metabolic encephalopathy sign.',
        },
        past_medical_history: {
          copd: 'Diagnosed 10 years ago, two admissions last year. WHAT COPD IS: Chronic Obstructive Pulmonary Disease — persistent, largely IRREVERSIBLE airflow obstruction from chronic bronchitis (airway inflammation and mucus) and emphysema (destruction of alveolar walls), almost always from smoking or biomass fuel.',
          contrast_with_asthma: 'Asthma is REVERSIBLE, typically younger, with variable symptoms. COPD is largely IRREVERSIBLE and progressive, in an older smoker.',
          others: 'Type 2 diabetes 8 years. Hypertension.',
        },
        drug_history: {
          inhalers: 'Salbutamol as required. Tiotropium 18 micrograms inhaled daily (a long-acting muscarinic antagonist). Seretide (fluticasone with salmeterol) inhaled twice daily.',
          gliclazide: {
            dose: 'Gliclazide 80 mg orally twice daily.',
            what_it_is: 'A SULFONYLUREA. It binds the sulfonylurea receptor on pancreatic beta cells and FORCES INSULIN RELEASE REGARDLESS OF THE BLOOD GLUCOSE LEVEL. That last phrase is the entire safety story — it causes HYPOGLYCAEMIA, and that hypoglycaemia can be PROLONGED and RECURRENT.',
            the_action: 'IN A DROWSY DIABETIC ON GLICLAZIDE, CHECK THE GLUCOSE IMMEDIATELY.',
          },
          ask_about_home_oxygen: 'In this case, none.',
        },
        social: 'Smokes 20 a day for 50 years = 50 PACK-YEARS, and still smoking. Retired coal miner, 25 years underground. MRC dyspnoea grade 4 at baseline — stops for breath after about 100 metres.',
        vitals: {
          values: 'BP 142/84. Pulse 104. Respiratory rate 28. Temperature 37.9. Saturation 91% on 6 L/min via face mask given by paramedics. CAPILLARY GLUCOSE 3.1 mmol/L.',
          two_things_already_wrong: {
            one_hypoglycaemia:
              'Glucose 3.1 (normal fasting 4.0 to 7.0). He is on GLICLAZIDE, which forces insulin release regardless of glucose, and three days of reduced intake while unwell has done the rest. THIS ALONE CAN EXPLAIN THE DROWSINESS AND CONFUSION, AND IT WILL KILL HIM FASTER THAN THE COPD. Treat before anything else.',
            two_too_much_oxygen:
              'In a subgroup of COPD patients, high-concentration oxygen worsens carbon dioxide retention. TARGET SATURATION IN COPD AT RISK OF RETENTION IS 88 TO 92%, NOT 94 TO 98%.',
          },
        },
        examination: {
          general: 'Drowsy but rousable, GCS 13/15. CENTRAL CYANOSIS. ASTERIXIS PRESENT — arms outstretched, wrists dorsiflexed, fingers spread, with irregular jerky lapses of posture. It indicates a metabolic encephalopathy; causes include carbon dioxide retention, liver failure and kidney failure.',
          chest_shape: 'Barrel-shaped chest. PURSED-LIP BREATHING — breathing out against partially closed lips, creating back-pressure that splints airways open, a self-taught compensation. Tar staining. NO CLUBBING — important, because COPD does NOT cause clubbing.',
          cvs: 'Tachycardic. JVP RAISED at 6 cm. LOUD P2 (the pulmonary component of the second heart sound) indicating pulmonary hypertension. PITTING OEDEMA to mid-shin. THIS COMBINATION IS COR PULMONALE — right heart failure caused by chronic lung disease, where chronic hypoxia constricts pulmonary arterioles, raising pulmonary pressure until the right ventricle fails.',
          respiratory: 'Hyperinflated, reduced expansion, HYPER-RESONANT percussion, REDUCED breath sounds throughout, widespread expiratory wheeze, and COARSE CRACKLES AT THE RIGHT BASE.',
          abdomen: 'Liver edge palpable 3 cm below the costal margin, congested from right heart failure.',
        },
      },

      section_2_mechanism: {
        what_copd_does: {
          chronic_bronchitis: 'Airway inflammation, mucus gland hypertrophy and excess mucus causing obstruction.',
          emphysema: 'Destruction of alveolar walls giving fewer, larger air spaces — less surface area for gas exchange, and loss of the elastic recoil that holds small airways open, so airways collapse on expiration and AIR IS TRAPPED.',
        },
        his_exacerbation: [
          '1. Infection increases airway inflammation and mucus.',
          '2. Already-narrowed airways narrow further, worsening obstruction.',
          '3. Air trapping increases and the chest hyperinflates, pushing the diaphragm flat so it works at a mechanical disadvantage.',
          '4. ALVEOLAR VENTILATION FALLS, so he cannot clear carbon dioxide — PaCO2 RISES and PaO2 FALLS.',
          '5. Carbon dioxide dissolves to form carbonic acid — RESPIRATORY ACIDOSIS.',
          '6. Carbon dioxide crosses into the brain causing cerebral vasodilation and altered neuronal function — DROWSINESS, CONFUSION, HEADACHE, ASTERIXIS — and ultimately carbon dioxide narcosis and coma.',
        ],
        why_high_flow_oxygen_can_harm_him: {
          note: 'You will hear "they lose their hypoxic drive". That is only part of the story, and the smaller part. There are three mechanisms.',
          one_loss_of_hypoxic_vasoconstriction:
            'THE BIGGEST FACTOR. Normally the lung diverts blood AWAY from poorly ventilated areas towards well-ventilated ones — HYPOXIC PULMONARY VASOCONSTRICTION. High oxygen abolishes it, so blood flows back into badly ventilated lung, WORSENING V/Q MISMATCH and increasing carbon dioxide retention.',
          two_the_haldane_effect:
            'Oxygenated haemoglobin carries LESS carbon dioxide than deoxygenated haemoglobin. Saturating the blood therefore RELEASES carbon dioxide from haemoglobin into plasma, raising the measured level.',
          three_reduced_hypoxic_drive:
            'In chronic retainers the respiratory centre becomes less responsive to carbon dioxide and relies more on low oxygen to drive breathing. Removing that stimulus reduces ventilation.',
          the_practical_rule:
            'TARGET 88 TO 92% IN COPD AT RISK OF RETENTION. Do NOT withhold oxygen from a hypoxic patient — HYPOXIA KILLS FASTER THAN HYPERCAPNIA — but titrate carefully and check a gas.',
        },
        and_the_hypoglycaemia:
          'Gliclazide forces insulin release REGARDLESS of glucose level. Three days of poor oral intake while acutely unwell means insulin keeps being released without carbohydrate coming in, so glucose falls, and the brain — which depends almost entirely on glucose — malfunctions. HE HAS TWO CAUSES OF REDUCED CONSCIOUSNESS: HYPERCAPNIA AND HYPOGLYCAEMIA. Both must be treated; one is treatable in 60 seconds.',
      },

      section_3_differentials: {
        one_infective_exacerbation_with_type_2_failure: 'WORKING DIAGNOSIS. Supporting: known COPD, 3 days of purulent sputum and breathlessness, wheeze, drowsy, asterixis, cyanosis. Confirm: blood gas showing raised carbon dioxide with acidosis.',
        two_hypoglycaemia: 'CO-EXISTING, AND TREAT FIRST. Supporting: gliclazide, reduced intake, glucose 3.1, drowsy and confused.',
        three_pneumonia: 'Supporting: fever, purulent sputum, focal right basal crackles. Against: not fully distinguishable — AND IT MAY WELL BE BOTH. Confirm: chest X-ray.',
        four_pneumothorax: 'Supporting: sudden deterioration in emphysema, where bullae can rupture. Against: symmetrical expansion, trachea central. IN EMPHYSEMA A PNEUMOTHORAX CAN BE SUBTLE AND EASILY MISSED against bullous lung.',
        five_pulmonary_embolism: 'Supporting: breathlessness, hypoxaemia, tachycardia; COPD patients are at increased risk. Against: gradual onset with purulent sputum and fever.',
        six_left_ventricular_failure: 'Supporting: breathlessness, raised JVP, oedema. Against: these are from COR PULMONALE — right heart failure from lung disease — and there is no orthopnoea or paroxysmal nocturnal dyspnoea.',
      },

      section_4_investigations: {
        one_glucose_first: 'WHY: he is drowsy and on a sulfonylurea. HYPOGLYCAEMIA KILLS WITHIN MINUTES AND IS REVERSIBLE IN ONE. Normal 4.0 to 7.0 fasting; hypoglycaemia under 4.0. Expected 3.1. "CHECK A GLUCOSE IN EVERY PATIENT WITH ALTERED CONSCIOUSNESS" is a rule with no exceptions.',
        two_arterial_blood_gas: {
          normal_on_air: 'pH 7.35 to 7.45, PaO2 11 to 13 kPa, PaCO2 4.7 to 6.0 kPa, bicarbonate 22 to 26 mmol/L, base excess −2 to +2.',
          expected: 'pH 7.26, PaO2 8.8, PaCO2 8.9, bicarbonate 32, base excess +6.',
          how_to_interpret_step_by_step: '1. pH 7.26 is ACIDOSIS (below 7.35). 2. PaCO2 8.9 is RAISED, and carbon dioxide is an acid, so this is RESPIRATORY ACIDOSIS. 3. Bicarbonate 32 is RAISED — the kidneys have retained base to buffer the acid, which takes DAYS, so this tells you there is CHRONIC retention on top of the acute problem. 4. CONCLUSION: ACUTE-ON-CHRONIC TYPE 2 RESPIRATORY FAILURE with partially compensated respiratory acidosis.',
          type_1_versus_type_2: 'TYPE 1: PaO2 low, PaCO2 normal or LOW — a problem of OXYGENATION (V/Q mismatch). Examples: PE, pneumonia, pulmonary oedema, early asthma. TYPE 2: PaO2 low, PaCO2 HIGH — a problem of VENTILATION, not moving enough air. Examples: COPD, exhaustion, opiate overdose, neuromuscular weakness. MEMORY HOOK: TYPE 2 HAS TWO ABNORMALITIES.',
          how_it_changes_management: 'pH under 7.35 with PaCO2 over 6.5 despite optimal medical therapy is an INDICATION FOR NON-INVASIVE VENTILATION.',
        },
        three_chest_xray: 'Expected: hyperinflated lungs with more than 6 anterior ribs above the diaphragm, flattened diaphragms, a narrow tubular heart, bullae, and RIGHT LOWER ZONE CONSOLIDATION.',
        four_bloods: 'FBC — white cells 16 (raised; normal 4 to 11) indicating infection. HAEMOGLOBIN MAY BE RAISED — SECONDARY POLYCYTHAEMIA from chronic hypoxia driving erythropoietin. U&E before diuretics, watching potassium with salbutamol and steroids. CRP 89 (normal under 5).',
        five_cultures: 'Sputum and blood cultures before antibiotics if possible. Common organisms: Haemophilus influenzae, Streptococcus pneumoniae, Moraxella catarrhalis; Pseudomonas in severe or frequently treated COPD.',
        six_ecg: 'Look for right heart strain — P PULMONALE (tall peaked P waves in lead II from right atrial enlargement), right axis deviation, right bundle branch block. Also exclude arrhythmia and ischaemia.',
      },

      section_5_management: {
        step_1_treat_the_hypoglycaemia_now: {
          treatment: 'Give 100 mL of 20% GLUCOSE intravenously over 10 to 15 minutes. ALTERNATIVE: 200 mL of 10% glucose over 15 minutes. IF NO IV ACCESS: GLUCAGON 1 mg intramuscularly — but note it works by mobilising liver glycogen and is LESS EFFECTIVE in the malnourished, in alcohol excess, or in liver disease, because the stores are empty.',
          then: 'Recheck glucose after 10 minutes and repeat if still under 4.0. Then give a LONG-ACTING CARBOHYDRATE (toast, biscuits, or a 10% glucose infusion) once alert.',
          the_critical_point:
            'SULFONYLUREA HYPOGLYCAEMIA IS PROLONGED AND IT RECURS. Gliclazide keeps forcing insulin out for many hours, so he will drop again after the initial correction. HE MUST BE ADMITTED AND MONITORED, NOT CORRECTED AND DISCHARGED. He may need a continuous 10% glucose infusion. CHECK GLUCOSE HOURLY FOR AT LEAST 12 TO 24 HOURS. Withhold further gliclazide. Patients have died after being corrected in the emergency department and sent home.',
        },
        step_2_controlled_oxygen: {
          action: 'REDUCE the oxygen. Change to a 28% VENTURI MASK.',
          what_a_venturi_mask_is: 'A mask with a colour-coded valve entraining a FIXED, PRECISE proportion of room air, delivering an exact oxygen percentage regardless of breathing pattern. Blue 24%, white 28%, yellow 35%, red 40%, green 60%.',
          target: 'SATURATION 88 TO 92%. Repeat the blood gas 30 to 60 minutes after any change.',
          do_not: 'Do NOT stop oxygen altogether. Hypoxia kills faster than hypercapnia. The goal is CONTROLLED oxygen, not NO oxygen.',
        },
        step_3_bronchodilators:
          'SALBUTAMOL 5 mg nebulised plus IPRATROPIUM 500 micrograms nebulised, every 4 to 6 hours or more often if needed. DRIVE THE NEBULISER WITH AIR, NOT OXYGEN, IN A CARBON DIOXIDE RETAINER — and give oxygen simultaneously by nasal cannulae at 1 to 2 L/min if needed. Six to eight litres of oxygen driving a nebuliser for 15 minutes can significantly worsen hypercapnia. THIS IS THE OPPOSITE OF THE ASTHMA CASE.',
        step_4_corticosteroid:
          'PREDNISOLONE 30 mg orally once daily for 5 days. Reduces inflammation, shortens recovery and reduces treatment failure. No tapering needed. WATCH HIS GLUCOSE — steroids raise blood glucose substantially in diabetics, and he is currently HYPOglycaemic from gliclazide, so he needs frequent monitoring IN BOTH DIRECTIONS and active adjustment.',
        step_5_antibiotics: {
          indication: 'He meets all three Anthonisen criteria and has consolidation on the film.',
          options: 'AMOXICILLIN 500 mg orally three times daily for 5 days, OR DOXYCYCLINE 200 mg orally on day 1 then 100 mg daily, OR CLARITHROMYCIN 500 mg orally twice daily if penicillin-allergic. If severely unwell or with consolidation, treat as pneumonia: CO-AMOXICLAV 1.2 g intravenously three times daily plus CLARITHROMYCIN 500 mg intravenously twice daily, following local guidelines and the CURB-65 score.',
          note: 'ALWAYS follow your local antibiotic policy — resistance patterns differ enormously between hospitals and countries.',
        },
        step_6_non_invasive_ventilation: {
          indication: 'Respiratory acidosis with pH under 7.35 and PaCO2 over 6.5 persisting after 1 hour of optimal medical therapy. His pH is 7.26.',
          what: 'BiPAP — Bi-level Positive Airway Pressure. A tight-fitting mask delivering TWO pressures: a higher one on inspiration (IPAP) and a lower one on expiration (EPAP).',
          typical_settings: 'IPAP 12 to 15 cmH2O, EPAP 4 to 5 cmH2O.',
          how_it_works: 'The DIFFERENCE between IPAP and EPAP — the pressure support — augments each breath, increasing tidal volume and therefore CLEARING CARBON DIOXIDE. EPAP splints airways open and improves oxygenation.',
          the_crucial_distinction:
            'In pulmonary oedema, CPAP (one continuous pressure) pushes fluid out of alveoli. In type 2 respiratory failure, BiPAP is needed because you must actively VENTILATE the patient to remove carbon dioxide. CPAP WILL NOT CLEAR CARBON DIOXIDE — you need the pressure difference.',
          monitor: 'Repeat blood gas at 1 hour. If pH improves it is working; if it worsens he needs intubation.',
          ceiling_of_care: 'DECIDE AND DOCUMENT IN ADVANCE. In severe COPD, discuss with him once alert, with his family and a senior: if non-invasive ventilation fails, is intubation appropriate? This conversation must happen BEFORE the crisis.',
        },
        step_7_other: 'Venous thromboembolism prophylaxis with enoxaparin 40 mg subcutaneously daily (dose-reduced if eGFR under 30). Chest physiotherapy for sputum clearance. Nutrition — COPD patients are often malnourished and the work of breathing raises energy needs.',
        discharge_interventions_that_change_his_future: {
          one_smoking_cessation: 'He is still smoking after 50 pack-years. THIS IS THE ONLY INTERVENTION THAT SLOWS THE DECLINE IN LUNG FUNCTION — not inhalers, not steroids. Offer nicotine replacement, varenicline and behavioural support. Repeat the offer at every admission without moralising.',
          two_review_the_gliclazide: 'He had a significant hypoglycaemic episode. In a frail 72-year-old gliclazide may be the wrong drug — consider a lower dose, or a gliptin such as LINAGLIPTIN 5 mg daily, which is gentle and needs no renal adjustment. RELAX HIS HbA1c TARGET; tight control in a frail elderly patient causes more harm than good.',
          three_long_term_oxygen_therapy: 'Measure a blood gas on air when STABLE, AT LEAST 5 WEEKS AFTER the exacerbation — not now. Indicated for PaO2 7.3 kPa or below (or 8.0 or below with cor pulmonale or polycythaemia). It is the only intervention besides smoking cessation shown to improve survival in COPD. HE MUST NOT SMOKE NEAR OXYGEN — fire risk.',
          four_pulmonary_rehabilitation: 'Improves exercise capacity and quality of life more than most drugs.',
          five_vaccination: 'Annual influenza and pneumococcal.',
          six_inhaler_technique_and_rescue_pack: 'Self-management plan with rescue steroids and antibiotics for future exacerbations.',
          seven_advance_planning: 'Discuss the ceiling of care gently and early.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_three_real_mechanisms:
          'Not just "loss of hypoxic drive". The dominant mechanism is LOSS OF HYPOXIC PULMONARY VASOCONSTRICTION worsening V/Q mismatch; second is the HALDANE EFFECT, where oxygenated haemoglobin releases carbon dioxide; third and smallest is reduced respiratory drive. Understanding this stops you doing the other dangerous thing — withholding oxygen from a dying hypoxic patient. TITRATE, DO NOT WITHHOLD.',
        bonus_2_how_bicarbonate_dates_the_illness:
          'Kidneys take 2 to 3 days to retain bicarbonate. A HIGH bicarbonate with a HIGH carbon dioxide means the retention is CHRONIC. If bicarbonate were NORMAL with a high carbon dioxide, this would be a PURELY ACUTE problem such as opiate overdose — a completely different situation. THE BICARBONATE DATES THE ILLNESS.',
        bonus_3_cpap_versus_bipap:
          'CPAP is ONE continuous pressure — it splints alveoli open and pushes fluid out, used in cardiogenic pulmonary oedema and sleep apnoea, and it improves OXYGENATION. BiPAP is TWO pressures, and the difference between them actively VENTILATES, used in type 2 respiratory failure where carbon dioxide must be cleared. CPAP WILL NOT CLEAR CARBON DIOXIDE.',
        bonus_4_clubbing_is_not_a_feature_of_copd:
          'If you find clubbing in a COPD patient, look for another disease — LUNG CANCER (this man has 50 pack-years and dust exposure), bronchiectasis, or interstitial fibrosis. A genuinely useful negative finding.',
        trap_1: 'CHECK THE GLUCOSE IN EVERY DROWSY PATIENT. He had two causes for reduced consciousness, and the hypoglycaemia was reversible in 60 seconds.',
        trap_2: 'Sulfonylurea hypoglycaemia is PROLONGED and RECURS. Admit and monitor. Do not correct and discharge. This has killed people.',
        trap_3: 'Drive nebulisers with AIR in a carbon dioxide retainer, giving oxygen separately by nasal cannulae. The reverse of asthma practice.',
        trap_4: 'WRITE THE TARGET SATURATION RANGE ON THE OBSERVATION CHART. "88 to 92%" written clearly prevents a well-meaning nurse turning the oxygen up overnight.',
        trap_5: 'Do not assess for long-term oxygen therapy during an exacerbation. Wait until stable at least 5 weeks later, or you will get a falsely low result and commit him to unnecessary treatment.',
        trap_6: 'Steroids will push his glucose UP while gliclazide pushes it DOWN. Expect swings in both directions.',
        one_line_summary: 'Acute-on-chronic type 2 respiratory failure with concurrent sulfonylurea hypoglycaemia. Glucose first, controlled oxygen to 88 to 92%, nebulisers driven by air, steroids and antibiotics, BiPAP for the acidosis — and admit for the hypoglycaemia that will recur.',
      },
    },
    warnings: [
      'CHECK THE GLUCOSE in every patient with altered consciousness — no exceptions.',
      'Sulfonylurea hypoglycaemia is PROLONGED and RECURS. Admit and monitor; do not correct and discharge.',
      'Target saturation 88 to 92% in COPD at risk of carbon dioxide retention, and WRITE IT ON THE CHART.',
      'Do NOT withhold oxygen from a hypoxic patient — hypoxia kills faster than hypercapnia. Titrate, do not withhold.',
      'Drive nebulisers with AIR in a carbon dioxide retainer, with oxygen given separately by nasal cannulae.',
      'BiPAP, not CPAP, is needed to clear carbon dioxide — CPAP alone will not ventilate.',
      'A raised bicarbonate with a raised carbon dioxide means CHRONIC retention; a normal bicarbonate means a purely acute problem.',
      'Clubbing is NOT a feature of COPD — look for lung cancer, bronchiectasis or fibrosis.',
      'Do not assess for long-term oxygen therapy during an exacerbation — wait at least 5 weeks.',
      'Steroids raise glucose while gliclazide lowers it — expect swings in both directions.',
      'Doses here are teaching examples for an adult. Check your local formulary before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Oxygen targets, ventilation thresholds and antibiotic choice follow local policy.',
      'Antibiotic selection must follow local resistance patterns, which differ enormously between hospitals and countries.',
    ],
    cards: [
      { q: 'What are the three mechanisms of oxygen-induced hypercapnia?', a: 'Loss of hypoxic pulmonary vasoconstriction (largest), the Haldane effect, and reduced hypoxic drive.' },
      { q: 'What is the target saturation in COPD at risk of retention?', a: '88 to 92% — and write it on the observation chart.' },
      { q: 'How does a raised bicarbonate help you?', a: 'It takes days to develop, so it tells you the carbon dioxide retention is chronic rather than purely acute.' },
      { q: 'Type 1 versus type 2 respiratory failure?', a: 'Type 1: low oxygen, normal or low carbon dioxide. Type 2: low oxygen AND high carbon dioxide — two abnormalities.' },
      { q: 'CPAP or BiPAP for type 2 failure, and why?', a: 'BiPAP — the difference between IPAP and EPAP ventilates the patient. CPAP alone will not clear carbon dioxide.' },
      { q: 'Why is sulfonylurea hypoglycaemia dangerous?', a: 'Insulin is forced out regardless of glucose, so it is prolonged and recurs after correction — admit and monitor.' },
      { q: 'How do you treat hypoglycaemia in a drowsy patient?', a: '100 mL of 20% glucose IV over 10 to 15 minutes, recheck at 10 minutes, then long-acting carbohydrate.' },
      { q: 'When is glucagon less effective?', a: 'In malnutrition, alcohol excess and liver disease — the liver glycogen stores it mobilises are empty.' },
      { q: 'What gas should drive the nebuliser here, and why?', a: 'Air — oxygen-driven nebulisers can significantly worsen hypercapnia in a retainer.' },
      { q: 'Which two interventions improve survival in COPD?', a: 'Smoking cessation and long-term oxygen therapy in appropriately selected patients.' },
      { q: 'Give the Anthonisen criteria.', a: 'Increased breathlessness, increased sputum volume, increased sputum purulence.' },
    ],
    checks: [
      'Glucose checked before anything else in the drowsy patient',
      'Hypoglycaemia treated and hourly monitoring started',
      'Gliclazide withheld and reviewed',
      'Oxygen reduced to a Venturi mask with target 88 to 92% written on the chart',
      'Blood gas repeated 30 to 60 minutes after each oxygen change',
      'Nebulisers driven by air',
      'Steroids and antibiotics given per local policy',
      'BiPAP considered for pH under 7.35',
      'Ceiling of care discussed and documented',
      'Smoking cessation offered again',
    ],
    related: ['spirometry_and_lung_function_tests_obstructive_versus_restrictive'],
  },
];
