/**
 * CASE SCENARIOS — Major burns and acute compartment syndrome.
 *
 * Batch 4, part 5 — closes the batch at case 40.
 */

export default [
  {
    id: 'AS-CASE-0039',
    type: 'case',
    specialty: 'Surgery — Plastics and burns',
    teaching_case: true,
    title: 'CASE: Trapped in a Burning Room — 35% Burns and a Hoarse Voice',
    short: 'Case: major burn with airway and fluid calculation',
    summary:
      'A 32-year-old with 35% burns from a house fire. Teaches the airway decision that must be made before swelling makes it impossible, the Parkland calculation worked through in full, why superficial burns are excluded from the sum, and why carbon monoxide makes the saturation lie.',
    domains: ['trauma', 'plastic_surgery', 'emergency_medicine', 'critical_care'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case burns', 'major burn case', 'parkland formula case', 'inhalation injury',
      'rule of nines', 'lund and browder', 'escharotomy', 'carbon monoxide poisoning',
      'cyanide fire', 'burn fluid resuscitation', 'total body surface area burn',
    ],
    terms: [
      'case', 'burn', 'total body surface area', 'rule of nines', 'lund and browder',
      'parkland formula', 'inhalation injury', 'escharotomy', 'fasciotomy',
      'carbon monoxide', 'carboxyhaemoglobin', 'cyanide', 'hydroxocobalamin',
      'superficial partial thickness', 'deep partial thickness', 'full thickness',
      'circumferential burn', 'rhabdomyolysis', 'burn referral criteria',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '32-year-old man rescued from a house fire, trapped in a smoke-filled room for several minutes. Burns to the face, anterior chest, both arms and the front of both legs. He is hoarse, coughing black sputum, and his oxygen saturation reads 99%.',

      section_1_the_airway_decision_which_comes_first: {
        the_principle:
          'IN A MAJOR BURN, THE AIRWAY IS THE DECISION THAT CANNOT BE DEFERRED. BURN OEDEMA PROGRESSES OVER HOURS. A PATIENT WHO IS TALKING NOW MAY BE IMPOSSIBLE TO INTUBATE IN TWO HOURS, WHEN THE AIRWAY HAS SWOLLEN SHUT AND THE ANATOMY IS DISTORTED. YOU INTUBATE EARLY, ELECTIVELY, IN CONTROLLED CONDITIONS — OR YOU FACE A SURGICAL AIRWAY IN A DISTORTED, OEDEMATOUS NECK. THIS IS NOT A DECISION TO REVIEW IN AN HOUR.',
        the_features_that_predict_airway_compromise: 'BURNS SUSTAINED IN AN ENCLOSED SPACE · FACIAL AND NECK BURNS · SINGED NASAL HAIRS AND EYEBROWS · SOOT IN THE MOUTH, NOSE OR SPUTUM (CARBONACEOUS SPUTUM) · HOARSENESS OR VOICE CHANGE · STRIDOR · DROOLING OR DIFFICULTY SWALLOWING · BRASSY COUGH · REDUCED CONSCIOUS LEVEL · AND CIRCUMFERENTIAL NECK OR CHEST BURNS.',
        his_features: 'ENCLOSED SPACE · FACIAL BURNS · SINGED NASAL HAIRS · BLACK CARBONACEOUS SPUTUM · HOARSENESS. HE HAS FIVE PREDICTORS. THE DECISION IS TO INTUBATE NOW, BY THE MOST SENIOR AVAILABLE PERSON, WITH DIFFICULT AIRWAY EQUIPMENT AND A SURGICAL AIRWAY PLAN READY.',
        two_practical_points_that_matter: {
          the_tube_size: 'USE THE LARGEST APPROPRIATE ENDOTRACHEAL TUBE, because bronchoscopy and suctioning of soot and casts will be needed, and a small tube blocks.',
          do_not_cut_the_tube: 'DO NOT TRIM THE ENDOTRACHEAL TUBE TO LENGTH. FACIAL OEDEMA WILL INCREASE DRAMATICALLY OVER THE NEXT 24 TO 48 HOURS, AND A SHORTENED TUBE CAN BE PULLED OUT OF THE TRACHEA AS THE FACE SWELLS. Secure it with a TIE RATHER THAN ADHESIVE TAPE, since tape does not stick to burned or oedematous skin, and check the tie repeatedly — it can become dangerously tight as the face swells.',
        },
        suxamethonium: 'SUXAMETHONIUM IS SAFE IN THE FIRST 24 HOURS but is CONTRAINDICATED FROM ABOUT 24 TO 48 HOURS AFTER A MAJOR BURN AND FOR UP TO A YEAR, because burned muscle upregulates acetylcholine receptors and the drug causes MASSIVE POTASSIUM RELEASE AND CARDIAC ARREST. FLAG THIS PROMINENTLY IN THE NOTES for everyone who may anaesthetise him later.',
      },

      section_2_the_saturation_that_lies: {
        carbon_monoxide: {
          the_problem:
            'HIS SATURATION READS 99% AND HE IS SEVERELY HYPOXIC. THE PULSE OXIMETER CANNOT DISTINGUISH OXYHAEMOGLOBIN FROM CARBOXYHAEMOGLOBIN — both absorb light similarly at the wavelengths it uses. IT THEREFORE READS CARBON MONOXIDE-SATURATED BLOOD AS FULLY OXYGENATED. A NORMAL OR HIGH SATURATION IN A FIRE VICTIM IS MEANINGLESS AND DANGEROUSLY REASSURING.',
          why_carbon_monoxide_is_so_toxic: 'It binds haemoglobin with roughly 200 to 250 TIMES the affinity of oxygen, so it displaces oxygen at tiny concentrations. It ALSO SHIFTS THE OXYGEN DISSOCIATION CURVE TO THE LEFT, meaning the remaining oxygen is held more tightly and released less readily to tissues — a double insult. And it binds mitochondrial cytochrome oxidase, impairing cellular respiration directly.',
          the_test: 'MEASURE CARBOXYHAEMOGLOBIN ON A CO-OXIMETER — an arterial or venous blood gas analysed with co-oximetry. Note that the PaO2 on a standard gas may also be NORMAL, because it measures DISSOLVED oxygen, which is unaffected. NEITHER THE SATURATION NOR THE PaO2 REVEALS THIS DIAGNOSIS.',
          the_treatment: 'HIGH-FLOW 100% OXYGEN VIA A NON-REBREATHER MASK, OR VENTILATION WITH 100% OXYGEN. The half-life of carboxyhaemoglobin is roughly 4 to 5 hours on air, about 60 to 90 minutes on 100% oxygen, and around 20 to 30 minutes with hyperbaric oxygen. HYPERBARIC OXYGEN IS CONSIDERED FOR SEVERE POISONING — loss of consciousness, neurological signs, very high levels, pregnancy, cardiac ischaemia — but the evidence is contested, and TRANSFER FOR HYPERBARIC TREATMENT MUST NEVER COMPROMISE MANAGEMENT OF THE BURN ITSELF.',
        },
        cyanide: {
          why_it_matters: 'DOMESTIC FIRES BURN PLASTICS, FOAM AND SYNTHETIC FURNISHINGS, WHICH RELEASE HYDROGEN CYANIDE. It is frequently overlooked, and it commonly coexists with carbon monoxide poisoning.',
          the_mechanism: 'Cyanide inhibits mitochondrial CYTOCHROME C OXIDASE, blocking oxidative phosphorylation. Cells cannot use oxygen even when it is delivered.',
          the_clues: 'A PERSISTENT SEVERE LACTIC ACIDOSIS OUT OF PROPORTION TO THE CLINICAL PICTURE, with reduced consciousness and cardiovascular instability despite adequate resuscitation. A HIGH VENOUS OXYGEN SATURATION is characteristic, because tissues cannot extract oxygen — an unusual and telling finding.',
          the_treatment: 'HYDROXOCOBALAMIN is the antidote of choice in the fire setting, because it is safe in a patient who may also have carbon monoxide poisoning. NOTE THAT NITRITE-BASED ANTIDOTES INDUCE METHAEMOGLOBINAEMIA, WHICH FURTHER REDUCES OXYGEN-CARRYING CAPACITY AND IS THEREFORE HAZARDOUS IN A PATIENT WHO ALSO HAS CARBOXYHAEMOGLOBIN. Hydroxocobalamin turns the urine and skin deep red, which is expected.',
        },
      },

      section_3_assessing_the_burn: {
        estimating_the_area: {
          the_rule_of_nines_for_adults: 'HEAD AND NECK 9% · EACH ARM 9% · EACH LEG 18% · ANTERIOR TRUNK 18% · POSTERIOR TRUNK 18% · PERINEUM 1%. It is quick and adequate for initial estimation in adults.',
          the_palm_method: 'THE PATIENT PALM INCLUDING THE FINGERS IS APPROXIMATELY 1% OF THEIR BODY SURFACE. Useful for scattered or irregular burns.',
          lund_and_browder: 'A CHART THAT CORRECTS FOR AGE-RELATED PROPORTIONS AND IS THE MOST ACCURATE METHOD. IT MATTERS ESPECIALLY IN CHILDREN, WHOSE HEADS ARE PROPORTIONALLY MUCH LARGER AND LEGS SMALLER — APPLYING THE ADULT RULE OF NINES TO A CHILD SIGNIFICANTLY MISESTIMATES THE AREA AND THEREFORE THE FLUID.',
          the_rule_that_changes_the_sum:
            'ONLY PARTIAL AND FULL THICKNESS BURNS ARE COUNTED. SUPERFICIAL (EPIDERMAL) BURNS — SIMPLE ERYTHEMA, LIKE SUNBURN, WHICH BLANCHES AND DOES NOT BLISTER — ARE EXCLUDED ENTIRELY FROM THE PERCENTAGE. INCLUDING THEM IS THE COMMONEST CAUSE OF OVER-ESTIMATION AND THEREFORE OF MASSIVE OVER-RESUSCITATION, which causes its own harm.',
          the_tendency_to_over_estimate: 'Burns are consistently over-estimated by non-specialists. Where possible, confirm the estimate with the burns unit — many will review photographs remotely, and that consultation is quick and changes the fluid prescription.',
        },
        assessing_the_depth: {
          superficial_epidermal: 'Red, DRY, PAINFUL, BLANCHES on pressure, NO BLISTERS. Heals in about a week without scarring. NOT INCLUDED IN THE PERCENTAGE.',
          superficial_partial_thickness: 'Pale pink, MOIST, BLISTERS, VERY PAINFUL, BLANCHES with brisk capillary refill. Heals in 2 to 3 weeks, usually without grafting.',
          deep_partial_thickness: 'Blotchy red or white, may blister, LESS painful because nerve endings are damaged, SLUGGISH OR ABSENT capillary refill. Often needs grafting.',
          full_thickness: 'WHITE, WAXY, LEATHERY OR CHARRED, DRY, PAINLESS AND INSENSATE, DOES NOT BLANCH. Thrombosed vessels may be visible. ALWAYS NEEDS EXCISION AND GRAFTING.',
          the_key_clinical_point:
            'A PAINLESS BURN IS A DEEP BURN. Loss of sensation means the nerve endings have been destroyed. IT IS COUNTER-INTUITIVE — the patient screaming in pain has a more superficial and better-prognosis injury than the one with a comfortable white leathery area. DEPTH IS ALSO DYNAMIC: burns evolve over 48 to 72 hours and can convert from partial to full thickness, particularly if under-resuscitated, so early assessment is provisional.',
        },
        his_burn: 'FACE, ANTERIOR TRUNK (18%), BOTH ARMS (18%), ANTERIOR BOTH LEGS (18%) — with superficial areas excluded, ASSESSED AT 35% TOTAL BODY SURFACE AREA, mostly deep partial thickness. WEIGHT 70 kg.',
      },

      section_4_the_fluid_calculation_worked_through: {
        why_burns_need_so_much_fluid: 'A major burn releases inflammatory mediators causing SYSTEMIC CAPILLARY LEAK — not just at the burn, but throughout the body. Plasma escapes into the interstitium, causing massive oedema and intravascular depletion. BURN SHOCK IS DISTRIBUTIVE AND HYPOVOLAEMIC COMBINED, and it develops over hours rather than immediately.',
        the_parkland_formula: {
          the_formula: 'TOTAL FLUID IN THE FIRST 24 HOURS = 4 mL x BODY WEIGHT IN kg x PERCENTAGE TOTAL BODY SURFACE AREA BURNED. Use HARTMANN SOLUTION (compound sodium lactate) or another balanced crystalloid.',
          the_split: 'GIVE HALF IN THE FIRST 8 HOURS AND THE OTHER HALF OVER THE FOLLOWING 16 HOURS.',
          the_timing_rule_that_is_constantly_got_wrong:
            'THE 8 HOURS RUN FROM THE TIME OF THE BURN, NOT FROM THE TIME OF ARRIVAL IN HOSPITAL. IF THE PATIENT ARRIVES 2 HOURS AFTER THE INJURY, THE FIRST HALF MUST BE GIVEN IN THE REMAINING 6 HOURS — SO THE RATE IS HIGHER, NOT THE SAME. Failing to account for pre-hospital time is one of the commonest errors in burn resuscitation and leads to significant under-resuscitation.',
          his_calculation: {
            step_1: 'TOTAL = 4 x 70 kg x 35% = 9,800 mL over 24 hours.',
            step_2: 'FIRST HALF = 4,900 mL in the first 8 hours FROM THE TIME OF THE BURN.',
            step_3: 'HE ARRIVED 1 HOUR AFTER THE BURN, so 4,900 mL must be given over the remaining 7 hours = APPROXIMATELY 700 mL PER HOUR.',
            step_4: 'SECOND HALF = 4,900 mL over the following 16 hours = APPROXIMATELY 306 mL PER HOUR.',
          },
          the_essential_caveat:
            'THE FORMULA IS A STARTING POINT, NOT A PRESCRIPTION. IT IS TITRATED AGAINST URINE OUTPUT, WHICH IS THE ACTUAL TARGET: ROUGHLY 0.5 mL/kg/hour IN ADULTS (about 30 to 50 mL/hour for a 70 kg adult), AND 1 mL/kg/hour IN CHILDREN. Reassess hourly and adjust up or down. A patient meeting the target on less fluid should receive less.',
        },
        fluid_creep_and_why_more_is_not_better: {
          the_problem: '"FLUID CREEP" DESCRIBES THE TENDENCY TO GIVE PROGRESSIVELY MORE THAN THE FORMULA PREDICTS.',
          the_harms: 'OVER-RESUSCITATION CAUSES PULMONARY OEDEMA · ABDOMINAL COMPARTMENT SYNDROME · ORBITAL COMPARTMENT SYNDROME · EXTREMITY COMPARTMENT SYNDROME · AND CONVERSION OF PARTIAL TO FULL THICKNESS BURNS THROUGH TISSUE OEDEMA. IT IS NOT A SAFE ERROR — IT IS A DIFFERENT HARM, and titrating DOWN when urine output is adequate requires as much discipline as titrating up.',
        },
        maintenance_and_other_points: 'Maintenance fluid is given IN ADDITION in children. Colloid is sometimes introduced after the first 8 to 24 hours in some protocols. AVOID GIVING BOLUSES REFLEXIVELY FOR HYPOTENSION IN THE FIRST HOURS — burn shock develops gradually, and a hypotensive patient in the first hour after a burn may be bleeding from an associated injury rather than from the burn. LOOK FOR THE OTHER INJURY.',
      },

      section_5_the_rest_of_management: {
        escharotomy: {
          the_problem: 'A FULL THICKNESS CIRCUMFERENTIAL BURN CREATES A RIGID, INELASTIC ESCHAR. As oedema develops beneath it, PRESSURE RISES AND CANNOT EXPAND OUTWARDS.',
          on_a_limb: 'IT ACTS AS A TOURNIQUET, causing DISTAL ISCHAEMIA. SIGNS: increasing pain, reduced or absent distal pulses (a LATE sign), reduced capillary refill, paraesthesia, and a tense cold limb. CHECK DISTAL CIRCULATION HOURLY IN ANY CIRCUMFERENTIAL LIMB BURN.',
          on_the_chest: 'A CIRCUMFERENTIAL CHEST BURN RESTRICTS CHEST WALL EXPANSION, CAUSING VENTILATORY FAILURE WITH HIGH AIRWAY PRESSURES IN A VENTILATED PATIENT. THIS IS A CAUSE OF DETERIORATING VENTILATION THAT IS NOT A LUNG PROBLEM AND WILL NOT RESPOND TO CHANGING THE VENTILATOR.',
          the_procedure: 'ESCHAROTOMY — incision through the full thickness of the eschar along the medial and lateral aspects of the limb, or in the anterior axillary lines and along the costal margin for the chest. IT IS PERFORMED THROUGH INSENSATE FULL THICKNESS BURN AND IS THEREFORE RELATIVELY PAINLESS, though analgesia is still given. IT IS AN EMERGENCY PROCEDURE THAT CANNOT WAIT FOR TRANSFER, and it should be done in discussion with the burns unit where possible.',
          fasciotomy: 'DIFFERENT AND DEEPER — required if there is true compartment syndrome of the muscle compartments, particularly with electrical burns or crush injury.',
        },
        electrical_and_chemical_burns: {
          electrical: 'THE SURFACE BURN GROSSLY UNDERESTIMATES THE DAMAGE. Current travels through deep tissue along the path of least resistance — nerves and vessels — causing extensive deep muscle necrosis with small entry and exit wounds. EXPECT RHABDOMYOLYSIS, and give generous fluid with monitoring of creatine kinase and potassium. GET AN ECG AND MONITOR — arrhythmia occurs, including delayed arrhythmia. Look for associated injuries from falls or violent muscle contraction, including SPINAL and SHOULDER injuries.',
          chemical: 'COPIOUS PROLONGED IRRIGATION WITH WATER — for far longer than seems necessary, often 30 minutes or more, and for ALKALIS considerably longer, since they cause LIQUEFACTIVE necrosis and penetrate deeply, unlike acids which cause coagulative necrosis and are partly self-limiting. DO NOT ATTEMPT TO NEUTRALISE — the exothermic reaction causes further thermal injury. HYDROFLUORIC ACID is a special case requiring CALCIUM GLUCONATE gel and systemic calcium, because it causes profound HYPOCALCAEMIA and fatal arrhythmia. Brush off dry powder before irrigating.',
        },
        wound_care_and_analgesia: 'COOL THE BURN — running cool (not cold, not iced) water for about 20 minutes, effective up to 3 hours after injury. THEN KEEP THE PATIENT WARM: cooling the burn is right, cooling the PATIENT is dangerous, and hypothermia is a real risk in a major burn. Cover with cling film laid on longitudinally, NOT WRAPPED CIRCUMFERENTIALLY, so it does not constrict as oedema develops. ANALGESIA — intravenous opioid, titrated; burns are among the most painful injuries and are systematically under-treated, and dressing changes need additional planned analgesia. Remove rings, watches and constricting items EARLY, before swelling makes it impossible.',
        the_other_essentials: 'TETANUS PROPHYLAXIS. NO PROPHYLACTIC SYSTEMIC ANTIBIOTICS — they select resistant organisms without preventing infection; treat infection when it occurs. EARLY ENTERAL NUTRITION, because the hypermetabolic response to a major burn is extreme and prolonged, and early feeding reduces complications. STRESS ULCER PROPHYLAXIS. THROMBOPROPHYLAXIS. CATHETER for urine output. Keep the patient WARM. EYE CARE if there are facial burns — assess for corneal injury with fluorescein early, before lid oedema makes examination impossible.',
        referral: {
          the_criteria: 'REFER TO A SPECIALIST BURNS SERVICE FOR: burns over 10% in adults or 5% in children · ANY full thickness burn · burns of the FACE, HANDS, FEET, PERINEUM, GENITALIA OR MAJOR JOINTS · CIRCUMFERENTIAL burns · ELECTRICAL or CHEMICAL burns · INHALATION injury · burns with significant comorbidity or associated trauma · and any burn where NON-ACCIDENTAL INJURY is suspected.',
          the_safeguarding_point: 'BURNS ARE A COMMON PRESENTATION OF NON-ACCIDENTAL INJURY IN CHILDREN AND VULNERABLE ADULTS. Patterns suggesting it include SHARPLY DEMARCATED IMMERSION BURNS WITH A GLOVE OR STOCKING DISTRIBUTION, symmetrical burns, cigarette burns, burns to the buttocks and perineum, a history inconsistent with the injury or with the child developmental stage, and DELAYED PRESENTATION. ASK, EXAMINE, DOCUMENT AND ESCALATE.',
          transfer: 'Discuss early — burns units advise on fluid, escharotomy and airway before transfer, and that conversation improves care even if transfer is delayed.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_airway_decision_cannot_be_deferred:
          'Burn oedema progresses over hours. A patient talking now may be unintubatable in two hours. Intubate early and electively with senior help and a surgical airway plan. Use a LARGE tube, DO NOT CUT IT, and secure with a tie rather than tape — the face will swell dramatically.',
        bonus_2_the_pulse_oximeter_lies_in_fire_victims:
          'It cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so it reads 99% in a severely hypoxic patient. The PaO2 is also normal because it measures dissolved oxygen. Only CO-OXIMETRY reveals it. Give 100% oxygen immediately.',
        bonus_3_the_parkland_clock_starts_at_the_burn:
          '4 mL x weight x %TBSA, half in the first 8 hours FROM THE TIME OF INJURY. A patient arriving two hours late must receive that half over six hours, at a higher rate. Failing to account for pre-hospital time is a leading cause of under-resuscitation.',
        bonus_4_superficial_burns_are_excluded_from_the_percentage:
          'Simple erythema that blanches and does not blister is not counted. Including it is the commonest cause of over-estimation and massive over-resuscitation — and over-resuscitation causes pulmonary oedema, compartment syndromes and conversion of partial to full thickness burns. More fluid is not a safe error.',
        bonus_5_a_painless_burn_is_a_deep_burn:
          'Loss of sensation means the nerve endings are destroyed. The patient in agony has a more superficial, better-prognosis injury than the one with a comfortable white leathery area. Depth also evolves over 48 to 72 hours, so early assessment is provisional.',
        bonus_6_escharotomy_for_the_chest_treats_a_ventilation_problem_that_is_not_in_the_lungs:
          'A circumferential chest eschar restricts expansion and causes high airway pressures that will not respond to ventilator changes. On a limb, the same eschar acts as a tourniquet. Check distal circulation hourly in any circumferential limb burn.',
        bonus_7_cool_the_burn_but_warm_the_patient:
          'Cool running water for 20 minutes, effective up to 3 hours after injury. But a major burn patient loses heat rapidly and hypothermia is dangerous — cooling the burn is right, cooling the patient is not.',
        bonus_8_consider_cyanide_as_well_as_carbon_monoxide:
          'Domestic fires burn plastics that release hydrogen cyanide. Suspect it with a persistent severe lactic acidosis and a HIGH venous oxygen saturation. Hydroxocobalamin is the antidote of choice, because nitrite-based antidotes induce methaemoglobinaemia in a patient who already has carboxyhaemoglobin.',
        trap_1: 'SUXAMETHONIUM is safe in the first 24 hours but causes fatal hyperkalaemia thereafter for up to a year — flag it prominently.',
        trap_2: 'Remove rings and constricting items EARLY, before swelling makes it impossible.',
        trap_3: 'Lay cling film longitudinally, never wrapped circumferentially.',
        trap_4: 'NO prophylactic systemic antibiotics — they select resistance without preventing infection.',
        trap_5: 'Hypotension in the FIRST hour after a burn suggests another injury — burn shock develops over hours.',
        trap_6: 'Use LUND AND BROWDER in children — the adult rule of nines significantly misestimates paediatric area and therefore fluid.',
        trap_7: 'In chemical burns, irrigate copiously and do NOT neutralise. Hydrofluoric acid needs calcium gluconate.',
        trap_8: 'Electrical burns grossly underestimate deep damage — expect rhabdomyolysis, monitor the ECG, and look for fall-related injuries.',
        trap_9: 'Consider NON-ACCIDENTAL INJURY — immersion patterns, symmetrical burns, inconsistent history and delayed presentation.',
        one_line_summary: '35% burns with inhalation injury. Intubate now with a large uncut tube, 100% oxygen because the saturation is lying, 9,800 mL over 24 hours with the clock starting at the burn, titrate to urine output, and check for circumferential constriction hourly.',
      },
    },
    warnings: [
      'INTUBATE EARLY AND ELECTIVELY — burn oedema progresses over hours and a patient talking now may be unintubatable in two.',
      'USE A LARGE TUBE, DO NOT CUT IT, and secure with a TIE not tape — facial oedema will increase dramatically.',
      'THE PULSE OXIMETER READS 99% IN CARBON MONOXIDE POISONING — it cannot distinguish carboxyhaemoglobin. Use CO-OXIMETRY.',
      'GIVE 100% OXYGEN IMMEDIATELY to any fire victim — it shortens the carboxyhaemoglobin half-life from 4 to 5 hours to 60 to 90 minutes.',
      'CONSIDER CYANIDE — suspect it with severe lactic acidosis and a HIGH venous oxygen saturation. Use HYDROXOCOBALAMIN, not nitrites.',
      'THE PARKLAND CLOCK STARTS AT THE TIME OF THE BURN, not arrival — a late-arriving patient needs a HIGHER rate.',
      'EXCLUDE SUPERFICIAL ERYTHEMA from the percentage — including it causes massive over-resuscitation.',
      'OVER-RESUSCITATION IS NOT A SAFE ERROR — it causes pulmonary oedema, compartment syndromes and burn conversion.',
      'TITRATE TO URINE OUTPUT — about 0.5 mL/kg/hour in adults, 1 mL/kg/hour in children. The formula is a starting point.',
      'A PAINLESS BURN IS A DEEP BURN — loss of sensation means destroyed nerve endings.',
      'CHECK DISTAL CIRCULATION HOURLY in circumferential limb burns; a circumferential chest burn causes ventilatory failure that will not respond to ventilator changes.',
      'SUXAMETHONIUM is contraindicated from about 24 hours after a major burn for up to a year — fatal hyperkalaemia.',
      'COOL THE BURN BUT WARM THE PATIENT — hypothermia is a real and dangerous risk.',
      'Lay cling film LONGITUDINALLY, never circumferentially. Remove rings and constricting items EARLY.',
      'NO PROPHYLACTIC SYSTEMIC ANTIBIOTICS.',
      'HYPOTENSION IN THE FIRST HOUR suggests another injury — burn shock develops over hours.',
      'Use LUND AND BROWDER in children — the adult rule of nines misestimates paediatric area.',
      'CONSIDER NON-ACCIDENTAL INJURY — immersion patterns, inconsistent history, delayed presentation.',
      'Fluid volumes here are teaching examples. Follow your local burns protocol and discuss with a burns unit early.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Resuscitation formulae, colloid use and hyperbaric oxygen indications vary between services.',
      'Paediatric burns require weight-based maintenance fluid in addition and specialist paediatric burns involvement.',
    ],
    cards: [
      { q: 'Why must intubation be early in a major burn?', a: 'Oedema progresses over hours — a patient talking now may be unintubatable in two, with distorted anatomy.' },
      { q: 'Why must the endotracheal tube not be cut?', a: 'Facial oedema increases dramatically and a shortened tube can be pulled out of the trachea.' },
      { q: 'Why does the pulse oximeter read 99% in a fire victim?', a: 'It cannot distinguish carboxyhaemoglobin from oxyhaemoglobin — only co-oximetry reveals it.' },
      { q: 'How does carbon monoxide cause hypoxia in two ways?', a: 'It binds haemoglobin 200 to 250 times more avidly than oxygen AND shifts the dissociation curve left.' },
      { q: 'What suggests cyanide poisoning in a fire victim?', a: 'Severe persistent lactic acidosis with a HIGH venous oxygen saturation — treat with hydroxocobalamin.' },
      { q: 'Give the Parkland formula and the split.', a: '4 mL x weight x %TBSA over 24 hours — half in the first 8 hours from the TIME OF THE BURN.' },
      { q: 'Calculate for a 70 kg man with 35% burns.', a: '4 x 70 x 35 = 9,800 mL; 4,900 mL in the first 8 hours from injury, 4,900 mL over the next 16.' },
      { q: 'Which burns are excluded from the percentage?', a: 'Superficial epidermal burns — simple erythema that blanches and does not blister.' },
      { q: 'What is the urine output target?', a: 'About 0.5 mL/kg/hour in adults, 1 mL/kg/hour in children — the formula is titrated to this.' },
      { q: 'Why is a painless burn concerning?', a: 'It is deep — the nerve endings have been destroyed.' },
      { q: 'When is escharotomy needed on the chest?', a: 'A circumferential full thickness burn restricting expansion, causing high airway pressures unresponsive to ventilator changes.' },
      { q: 'When is suxamethonium contraindicated after a burn?', a: 'From about 24 to 48 hours and for up to a year — it causes massive potassium release and arrest.' },
      { q: 'How do acid and alkali burns differ?', a: 'Acids cause coagulative necrosis and are partly self-limiting; alkalis cause liquefactive necrosis and penetrate deeply.' },
      { q: 'Name three features suggesting non-accidental burn injury.', a: 'Sharply demarcated immersion pattern, history inconsistent with the injury, and delayed presentation.' },
    ],
    checks: [
      'Airway assessed for inhalation injury predictors and intubated early if present',
      'Large uncut tube secured with a tie, and the tie rechecked as swelling develops',
      '100% oxygen given; carboxyhaemoglobin measured by co-oximetry',
      'Cyanide considered if severe lactic acidosis',
      'Total body surface area estimated excluding superficial burns',
      'Lund and Browder used in children',
      'Parkland calculated with the clock starting at the time of the burn',
      'Fluid titrated to urine output, not run blindly to the formula',
      'Catheter and hourly urine output',
      'Circumferential burns identified; distal circulation checked hourly',
      'Escharotomy considered and discussed with the burns unit',
      'Burn cooled for 20 minutes but the patient actively warmed',
      'Rings and constricting items removed early',
      'Cling film applied longitudinally',
      'Adequate opioid analgesia with dressing changes planned',
      'Tetanus prophylaxis; no prophylactic systemic antibiotics',
      'Early enteral nutrition, thromboprophylaxis and stress ulcer prophylaxis',
      'Suxamethonium contraindication flagged prominently',
      'Burns unit referral criteria applied; safeguarding considered',
    ],
    related: ['burns_assessment_depth_area_and_first_management'],
  },

  {
    id: 'AS-CASE-0040',
    type: 'case',
    specialty: 'Surgery — Orthopaedics',
    teaching_case: true,
    title: 'CASE: Escalating Pain in a Plastered Tibial Fracture at 2 a.m.',
    short: 'Case: acute compartment syndrome',
    summary:
      'A 21-year-old with a tibial fracture whose pain is no longer controlled by morphine. Teaches why pulses are present in compartment syndrome, why the diagnosis is made on pain and passive stretch rather than the classic Ps, and why splitting the cast is not enough.',
    domains: ['orthopaedics', 'trauma', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case compartment syndrome', 'acute compartment syndrome case', 'pain on passive stretch',
      'fasciotomy case', 'compartment pressure measurement', 'delta pressure',
      'volkmann ischaemic contracture', 'crush syndrome', 'tibial fracture compartment',
    ],
    terms: [
      'case', 'compartment syndrome', 'fasciotomy', 'passive stretch', 'compartment pressure',
      'delta pressure', 'volkmann ischaemic contracture', 'rhabdomyolysis', 'myoglobinuria',
      'crush syndrome', 'reperfusion injury', 'six ps', 'tibial shaft fracture',
      'anterior compartment', 'deep peroneal nerve', 'first web space',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '21-year-old man with a closed tibial shaft fracture from football, placed in a below-knee backslab 6 hours ago. He has had 20 mg of morphine and is still in severe, escalating pain. The nurse has called you at 2 a.m. because he cannot settle.',

      section_1_the_call_and_why_it_matters: {
        the_situation:
          'THE MOST COMMON WAY THIS DIAGNOSIS IS MISSED IS THAT AN ESCALATING-ANALGESIA CALL IS TREATED AS AN ANALGESIA PROBLEM. More morphine is prescribed over the telephone, the patient becomes sedated and stops complaining, and the limb is lost. THE CORRECT RESPONSE TO "THIS PATIENT NEEDS MORE PAIN RELIEF" IN A FRACTURED OR PLASTERED LIMB IS TO GO AND LOOK AT THE LIMB.',
        the_single_most_important_sign: {
          the_statement: 'PAIN OUT OF PROPORTION TO THE INJURY, AND PAIN NOT RELIEVED BY APPROPRIATE ANALGESIA INCLUDING OPIOIDS, IS THE EARLIEST AND MOST RELIABLE SIGN OF ACUTE COMPARTMENT SYNDROME.',
          why: 'Escalating opioid requirement is an objective, documented, measurable signal that something is wrong. IT IS RECORDED ON THE DRUG CHART, and reviewing how much analgesia a patient has needed over the last few hours is one of the most useful things you can do before you even touch them.',
        },
        history: 'Closed tibial shaft fracture 8 hours ago. Backslab applied 6 hours ago. Pain initially settled with morphine, but for the last 3 hours it has become progressively worse despite repeated doses. He describes a deep, bursting, relentless pain in the calf. His foot feels "pins and needles" and the top of his foot feels numb.',
        the_risk_factors: 'TIBIAL SHAFT FRACTURE IS THE COMMONEST CAUSE — the leg has tight fascial compartments and little room to expand. Also forearm fractures, particularly supracondylar fractures in children · CRUSH INJURY · reperfusion after vascular injury or prolonged ischaemia · burns with circumferential eschar · TIGHT CASTS OR DRESSINGS · extravasation of intravenous fluid · bleeding disorders and ANTICOAGULATION · prolonged limb compression in an unconscious patient · and intense exertion.',
        the_group_at_highest_risk_of_a_missed_diagnosis: 'YOUNG MEN WITH TIBIAL FRACTURES ARE THE CLASSIC GROUP — they have more muscle bulk and tighter compartments. AND THE PATIENTS IN WHOM IT IS MOST OFTEN MISSED ARE THOSE WHO CANNOT REPORT PAIN: the UNCONSCIOUS, the INTUBATED, CHILDREN, patients with a REGIONAL BLOCK OR EPIDURAL, and those with a spinal or nerve injury. IN THESE PATIENTS, CLINICAL DIAGNOSIS IS UNRELIABLE AND COMPARTMENT PRESSURE MONITORING SHOULD BE USED.',
        the_regional_block_warning: 'A DENSE REGIONAL BLOCK OR EPIDURAL CAN MASK THE CARDINAL SIGN. This is a recognised hazard, and where a patient is at high risk of compartment syndrome, the analgesic plan should be discussed with the anaesthetist and surgeon rather than defaulting to a block.',
      },

      section_2_examination_and_the_signs_that_actually_help: {
        the_finding_that_confirms_it: {
          pain_on_passive_stretch:
            'PASSIVELY STRETCHING THE MUSCLES OF THE AFFECTED COMPARTMENT PRODUCES SEVERE PAIN. For the ANTERIOR compartment of the leg, PASSIVELY PLANTARFLEX THE ANKLE AND TOES — this stretches tibialis anterior and the toe extensors. For the DEEP POSTERIOR compartment, PASSIVELY DORSIFLEX the toes.',
          why_it_works: 'Ischaemic muscle is exquisitely sensitive to stretch. IT IS THE MOST SPECIFIC EARLY CLINICAL SIGN AND IT TAKES FIVE SECONDS TO PERFORM. Combined with escalating analgesia requirement, it is enough to act on.',
        },
        the_compartment: 'TENSE, SWOLLEN, WOODY-HARD compartment on palpation compared with the other leg. Compare sides — it is far more informative than assessing one limb alone.',
        sensory_change: 'PARAESTHESIA AND NUMBNESS IN THE DISTRIBUTION OF THE NERVE RUNNING THROUGH THE COMPARTMENT ARE EARLY. In the ANTERIOR compartment of the leg the DEEP PERONEAL NERVE runs through it, so the earliest sensory sign is NUMBNESS IN THE FIRST WEB SPACE between the great and second toes. TEST IT SPECIFICALLY — it is a small area that nobody examines unless they know to.',
        the_six_ps_and_an_honest_assessment: {
          the_list: 'PAIN · PARAESTHESIA · PALLOR · PARALYSIS · PULSELESSNESS · PERISHINGLY COLD.',
          the_critical_correction:
            'ONLY THE FIRST TWO ARE EARLY. PALLOR, PARALYSIS, PULSELESSNESS AND COLDNESS ARE LATE SIGNS OF ESTABLISHED ISCHAEMIA AND NECROSIS. BY THE TIME THEY APPEAR, THE MUSCLE IS DEAD AND THE LIMB IS LOST. THE SIX Ps ARE A LIST FOR ACUTE ARTERIAL OCCLUSION, AND APPLYING THEM TO COMPARTMENT SYNDROME IS ACTIVELY DANGEROUS.',
          the_pulse_point_that_must_be_understood:
            'PULSES ARE USUALLY PRESENT IN ACUTE COMPARTMENT SYNDROME. Compartment pressure needs only to exceed CAPILLARY perfusion pressure — around 20 to 30 mmHg — to cause muscle ischaemia. IT DOES NOT NEED TO EXCEED SYSTOLIC ARTERIAL PRESSURE, WHICH IS WHAT WOULD BE REQUIRED TO ABOLISH A PULSE. A PRESENT PULSE THEREFORE PROVIDES NO REASSURANCE WHATSOEVER, AND "PULSES PRESENT, PROBABLY FINE" IS THE SENTENCE THAT COSTS LIMBS.',
        },
        the_time_window: 'IRREVERSIBLE MUSCLE NECROSIS BEGINS AT AROUND 4 TO 6 HOURS OF RAISED PRESSURE. NERVE FUNCTION IS LOST EARLIER STILL. HE HAS HAD 3 HOURS OF ESCALATING PAIN. THE WINDOW IS CLOSING WHILE THE DECISION IS BEING DISCUSSED.',
      },

      section_3_mechanism: {
        the_compartment: 'Muscles are enclosed in compartments bounded by INELASTIC FASCIA and bone. The fascia does not stretch acutely.',
        the_cycle: [
          '1. Bleeding, oedema or external constriction increases the volume inside a fixed-volume compartment.',
          '2. PRESSURE RISES.',
          '3. When pressure exceeds the pressure in the thin-walled VENULES, VENOUS OUTFLOW IS OBSTRUCTED.',
          '4. Obstructed outflow raises capillary hydrostatic pressure, which forces MORE fluid out into the tissue — INCREASING THE SWELLING FURTHER.',
          '5. Pressure rises further, and the cycle accelerates. IT IS SELF-PERPETUATING, WHICH IS WHY IT DOES NOT SETTLE ON ITS OWN AND WHY IT PROGRESSES SO FAST.',
          '6. Once compartment pressure approaches capillary perfusion pressure, ARTERIAL INFLOW AT THE CAPILLARY LEVEL FAILS AND MUSCLE AND NERVE BECOME ISCHAEMIC — while the major arteries, which are under systemic pressure, remain patent and palpable.',
        ],
        why_the_arteries_stay_open: 'The major arteries carry blood at systolic pressure — well above the compartment pressure. It is the CAPILLARY BED, perfused at only 20 to 30 mmHg, that fails first. THIS SINGLE FACT EXPLAINS WHY PULSES ARE PRESENT AND WHY THE LIMB CAN BE PINK, WARM AND DYING.',
        volkmann_ischaemic_contracture: 'THE END RESULT OF UNTREATED COMPARTMENT SYNDROME. Necrotic muscle is replaced by fibrous tissue, which contracts, producing a fixed, clawed, functionless limb — classically the flexed wrist and fingers after a missed forearm or supracondylar compartment syndrome in a child. IT IS PERMANENT AND ENTIRELY PREVENTABLE, and it is the reason this diagnosis carries such medicolegal weight.',
      },

      section_4_investigations: {
        the_rule: 'ACUTE COMPARTMENT SYNDROME IS A CLINICAL DIAGNOSIS. IN A CONSCIOUS PATIENT WITH ESCALATING PAIN AND PAIN ON PASSIVE STRETCH, NO INVESTIGATION IS REQUIRED BEFORE OPERATING. WAITING FOR A MEASUREMENT IN A CLEAR CASE WASTES THE WINDOW.',
        compartment_pressure_measurement: {
          when_it_helps: 'In patients who CANNOT REPORT PAIN — unconscious, intubated, children, dense regional block, spinal or nerve injury — and where the clinical picture is genuinely equivocal.',
          how_it_is_interpreted: {
            absolute_pressure: 'A compartment pressure above roughly 30 mmHg has traditionally been used as a threshold.',
            the_delta_pressure_which_is_better:
              'DELTA PRESSURE = DIASTOLIC BLOOD PRESSURE MINUS COMPARTMENT PRESSURE. A DELTA PRESSURE BELOW 30 mmHg INDICATES COMPARTMENT SYNDROME AND IS AN INDICATION FOR FASCIOTOMY.',
            why_delta_is_better:
              'PERFUSION DEPENDS ON THE DIFFERENCE BETWEEN THE PRESSURE DRIVING BLOOD IN AND THE PRESSURE RESISTING IT. A HYPOTENSIVE PATIENT WITH A DIASTOLIC OF 50 IS IN TROUBLE AT A COMPARTMENT PRESSURE OF 25, WHICH AN ABSOLUTE THRESHOLD OF 30 WOULD CALL NORMAL. Conversely a hypertensive patient may tolerate a higher absolute pressure. AND THIS IS WHY MAINTAINING BLOOD PRESSURE MATTERS IN A PATIENT AT RISK — hypotension makes compartment syndrome worse at any given compartment pressure.',
          },
          practical_note: 'Measure in the compartment with maximal swelling, and near the level of the fracture, where pressures are highest. A single normal reading elsewhere is not reassurance.',
        },
        bloods: 'CREATINE KINASE — markedly raised in muscle necrosis, and rising values support the diagnosis and warn of rhabdomyolysis. UREA, CREATININE AND POTASSIUM. URINALYSIS — MYOGLOBINURIA gives urine that is POSITIVE FOR BLOOD ON DIPSTICK BUT SHOWS NO RED CELLS ON MICROSCOPY, which is the classic discrepancy. Blood gas, lactate, clotting, group and save.',
      },

      section_5_management: {
        a_the_immediate_bedside_actions_in_order: {
          one: 'REMOVE ALL CONSTRICTING DRESSINGS. SPLIT THE CAST DOWN TO SKIN ON BOTH SIDES (BIVALVE IT) AND SPREAD IT, AND CUT THROUGH THE WOOL AND ALL UNDERLYING PADDING. A CAST SPLIT ONLY THROUGH THE PLASTER WITH THE WOOL LEFT INTACT DOES ALMOST NOTHING — the padding itself is constrictive. This step alone can reduce compartment pressure substantially and takes a minute.',
          two: 'POSITION THE LIMB AT THE LEVEL OF THE HEART — NOT ELEVATED. THIS IS COUNTER-INTUITIVE. ELEVATION REDUCES ARTERIAL INFLOW PRESSURE AND THEREFORE REDUCES THE PERFUSION GRADIENT ACROSS THE COMPARTMENT, WORSENING ISCHAEMIA. Elevation is correct for simple swelling; IT IS WRONG IN COMPARTMENT SYNDROME.',
          three: 'GIVE OXYGEN, and CORRECT HYPOTENSION AND HYPOVOLAEMIA — because perfusion depends on the delta pressure, and a low diastolic makes everything worse.',
          four: 'CALL THE ORTHOPAEDIC REGISTRAR OR CONSULTANT IMMEDIATELY AND SAY THE WORDS "I AM CONCERNED ABOUT COMPARTMENT SYNDROME". Escalate if there is any delay. DOCUMENT THE TIME OF EVERY ASSESSMENT AND EVERY CALL.',
          five: 'KEEP THE PATIENT NIL BY MOUTH, take bloods and group and save, and alert theatre.',
          what_not_to_do: 'DO NOT SIMPLY PRESCRIBE MORE ANALGESIA AND REVIEW IN THE MORNING. DO NOT ELEVATE THE LIMB. DO NOT ACCEPT A PRESENT PULSE AS REASSURANCE.',
        },
        b_fasciotomy: {
          the_principle: 'THE ONLY DEFINITIVE TREATMENT IS URGENT SURGICAL DECOMPRESSION. THERE IS NO MEDICAL TREATMENT.',
          the_technique: 'ALL COMPARTMENTS OF THE AFFECTED SEGMENT MUST BE RELEASED. THE LEG HAS FOUR COMPARTMENTS — ANTERIOR, LATERAL, SUPERFICIAL POSTERIOR AND DEEP POSTERIOR — AND THE DEEP POSTERIOR COMPARTMENT IS THE ONE MOST COMMONLY MISSED, WHICH LEADS TO A PERSISTENT SYNDROME AFTER AN APPARENTLY ADEQUATE OPERATION. A two-incision technique is standard for the leg.',
          the_incisions: 'GENEROUS AND FULL LENGTH. A short "keyhole" fasciotomy does not decompress the compartment and is worse than none, because it creates the impression that the problem has been dealt with.',
          the_skin: 'THE SKIN ITSELF IS A CONSTRICTING LAYER AND MUST BE OPENED FULLY — the fascia alone is not enough.',
          afterwards: 'LEAVE THE WOUNDS OPEN. Return to theatre at 48 hours for inspection and debridement of any necrotic muscle. Delayed primary closure, split skin grafting or negative pressure dressings as the swelling settles. STABILISE THE FRACTURE.',
        },
        c_the_late_presentation_dilemma: {
          the_problem: 'IF THE COMPARTMENT SYNDROME IS OLD — GENERALLY BEYOND ABOUT 12 HOURS WITH ESTABLISHED NECROSIS AND NO MUSCLE FUNCTION — FASCIOTOMY MAY DO MORE HARM THAN GOOD.',
          why: 'OPENING DEAD MUSCLE CONVERTS A CLOSED NECROTIC COMPARTMENT INTO AN OPEN, INFECTED, SYSTEMICALLY TOXIC WOUND, RISKING SEPSIS, MASSIVE RHABDOMYOLYSIS AND DEATH. In that situation, management may be supportive with later reconstruction or amputation.',
          the_point: 'THIS IS A SENIOR DECISION — but knowing it exists explains why the urgency is real: it is not simply that late fasciotomy works less well, it is that late fasciotomy may not be performed at all.',
        },
        d_rhabdomyolysis_and_reperfusion: {
          the_problem: 'Necrotic muscle releases MYOGLOBIN, POTASSIUM, PHOSPHATE and acid. Myoglobin precipitates in renal tubules causing ACUTE KIDNEY INJURY. Potassium causes ARRHYTHMIA.',
          the_management: 'AGGRESSIVE INTRAVENOUS FLUID to maintain a generous urine output. MONITOR POTASSIUM AND THE ECG CLOSELY. Monitor creatine kinase, renal function, calcium (which falls as it binds to released phosphate) and clotting. Involve renal medicine early if the creatine kinase is very high or renal function deteriorates. Urinary alkalinisation and mannitol are sometimes used but the evidence is weak — fluid is the mainstay.',
          the_reperfusion_warning: 'DECOMPRESSION RESTORES FLOW TO ISCHAEMIC MUSCLE AND CAN CAUSE A SURGE OF POTASSIUM AND ACID INTO THE CIRCULATION, WITH ARRHYTHMIA AND CARDIOVASCULAR INSTABILITY AT THE MOMENT OF RELEASE. The anaesthetic team must anticipate it. CRUSH SYNDROME is the same physiology on a larger scale, and it is why crush victims deteriorate when they are extricated.',
        },
        e_documentation_and_escalation: {
          why_it_is_emphasised: 'ACUTE COMPARTMENT SYNDROME IS ONE OF THE MOST FREQUENT SOURCES OF SUCCESSFUL LITIGATION IN ORTHOPAEDICS, AND ALMOST ALWAYS BECAUSE OF DELAY RATHER THAN TECHNICAL ERROR.',
          what_to_document: 'THE TIME of each assessment · the analgesic requirement and its trend · the presence or absence of pain on passive stretch · sensation in the first web space · the state of the compartment · WHO WAS CALLED AND AT WHAT TIME AND WHAT THEY SAID · and the time of the decision to operate. GOOD DOCUMENTATION IS ALSO GOOD CLINICAL CARE, because a documented trend is what makes deterioration visible to the next person.',
          the_escalation_duty: 'IF YOU ARE CONCERNED AND THE RESPONSE IS INADEQUATE, ESCALATE ABOVE THE PERSON WHO REASSURED YOU. This is the situation the escalation policy exists for.',
        },
      },

      section_6_teaching_points: {
        bonus_1_pulses_are_present_and_that_means_nothing:
          'Compartment pressure only needs to exceed CAPILLARY perfusion pressure of 20 to 30 mmHg to cause ischaemia — not systolic pressure. So the major arteries stay open and the foot stays pink and warm while the muscle dies. "Pulses present, probably fine" is the sentence that costs limbs.',
        bonus_2_only_two_of_the_six_ps_are_early:
          'Pain and paraesthesia are early. Pallor, paralysis, pulselessness and cold are LATE signs of established necrosis — by then the limb is lost. The six Ps belong to acute arterial occlusion, and applying them here is actively dangerous.',
        bonus_3_escalating_analgesia_is_an_objective_sign:
          'It is documented on the drug chart. Reviewing how much opioid a patient has needed over the last few hours is one of the most useful things you can do before touching them — and the correct response to "he needs more pain relief" in a plastered limb is to go and look at the limb.',
        bonus_4_pain_on_passive_stretch_takes_five_seconds:
          'Passively plantarflex the ankle and toes to stretch the anterior compartment. Ischaemic muscle is exquisitely sensitive to stretch, and this is the most specific early clinical sign.',
        bonus_5_do_not_elevate_the_limb:
          'Elevation reduces arterial inflow pressure and therefore the perfusion gradient across the compartment, worsening ischaemia. Keep it at heart level. Elevation is right for simple swelling and WRONG here — and correcting hypotension matters for the same reason.',
        bonus_6_delta_pressure_beats_an_absolute_threshold:
          'Diastolic minus compartment pressure, below 30 mmHg, indicates fasciotomy. A hypotensive patient with a diastolic of 50 is in trouble at a compartment pressure of 25, which an absolute threshold of 30 would call normal.',
        bonus_7_split_the_padding_not_just_the_plaster:
          'A cast split only through the plaster with the wool intact achieves almost nothing — the padding is itself constrictive. Bivalve down to skin on both sides and spread it. This takes a minute and can substantially reduce pressure.',
        bonus_8_the_deep_posterior_compartment_is_the_one_that_gets_missed:
          'The leg has four compartments and all must be released. A missed deep posterior compartment produces a persistent syndrome after an apparently adequate operation — and the skin itself must be opened fully, because it is a constricting layer.',
        trap_1: 'The patients in whom it is most often missed cannot report pain — the unconscious, intubated, children, and those with a dense regional block. Use pressure monitoring in these groups.',
        trap_2: 'Irreversible muscle necrosis begins at 4 to 6 hours; nerve injury sooner. The window closes while the decision is discussed.',
        trap_3: 'Expect rhabdomyolysis — myoglobinuria gives urine positive for blood on dipstick with NO red cells on microscopy.',
        trap_4: 'Anticipate a potassium and acid surge at the moment of decompression.',
        trap_5: 'A very late presentation with dead muscle may be worse for fasciotomy — a senior decision, and part of why urgency matters.',
        trap_6: 'Document times, the analgesia trend, passive stretch, first web space sensation, and every call. Delay, not technique, is what is litigated.',
        one_line_summary: 'Acute compartment syndrome in a plastered tibial fracture. Escalating opioid need is the sign, pain on passive stretch confirms it, split the cast to skin and keep the limb at heart level — and the present pulse means nothing at all.',
      },
    },
    warnings: [
      'PULSES ARE USUALLY PRESENT in acute compartment syndrome — it only needs to exceed CAPILLARY pressure of 20 to 30 mmHg.',
      'ONLY PAIN AND PARAESTHESIA ARE EARLY — pallor, paralysis, pulselessness and cold are LATE signs of a lost limb.',
      'ESCALATING ANALGESIA REQUIREMENT IS THE EARLIEST SIGN — go and look at the limb, do not prescribe more morphine by telephone.',
      'PAIN ON PASSIVE STRETCH is the most specific early sign and takes five seconds to elicit.',
      'DO NOT ELEVATE THE LIMB — elevation reduces the perfusion gradient and worsens ischaemia. Keep it at heart level.',
      'SPLIT THE CAST DOWN TO SKIN INCLUDING ALL PADDING — splitting only the plaster achieves almost nothing.',
      'CORRECT HYPOTENSION — perfusion depends on delta pressure, so a low diastolic worsens ischaemia at any compartment pressure.',
      'DELTA PRESSURE (diastolic minus compartment pressure) BELOW 30 mmHg indicates fasciotomy — better than an absolute threshold.',
      'IRREVERSIBLE MUSCLE NECROSIS BEGINS AT 4 TO 6 HOURS, and nerve injury sooner.',
      'IT IS A CLINICAL DIAGNOSIS — do not wait for pressure measurement in a clear case.',
      'USE PRESSURE MONITORING in patients who cannot report pain — unconscious, intubated, children, dense regional block.',
      'A DENSE REGIONAL BLOCK CAN MASK THE CARDINAL SIGN — discuss the analgesic plan in high-risk patients.',
      'ALL FOUR COMPARTMENTS of the leg must be released — the DEEP POSTERIOR is the one most often missed.',
      'The SKIN is a constricting layer and must be opened fully — fascia alone is not enough.',
      'EXPECT RHABDOMYOLYSIS — give generous fluid, monitor potassium and the ECG.',
      'ANTICIPATE A POTASSIUM AND ACID SURGE at the moment of decompression.',
      'A very late presentation with established necrosis may be harmed by fasciotomy — a senior decision.',
      'DOCUMENT times, analgesia trend, passive stretch, first web space sensation and every call — delay is what is litigated.',
      'Management here is a teaching example. Follow your local orthopaedic guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Pressure thresholds, monitoring policy and fasciotomy technique vary between services.',
      'The decision not to perform a late fasciotomy in established necrosis is a senior surgical judgement.',
    ],
    cards: [
      { q: 'Why are pulses present in compartment syndrome?', a: 'Pressure only needs to exceed capillary perfusion pressure of 20 to 30 mmHg, not systolic arterial pressure.' },
      { q: 'Which of the six Ps are early?', a: 'Only pain and paraesthesia. The rest are late signs of established necrosis.' },
      { q: 'What is the earliest and most reliable sign?', a: 'Pain out of proportion, not relieved by opioids — an escalating analgesia requirement.' },
      { q: 'How do you test the anterior compartment of the leg?', a: 'Passively plantarflex the ankle and toes — pain on passive stretch is the most specific early sign.' },
      { q: 'Where is the earliest sensory loss in anterior compartment syndrome?', a: 'The first web space — deep peroneal nerve distribution.' },
      { q: 'Why must the limb NOT be elevated?', a: 'Elevation reduces arterial inflow pressure and the perfusion gradient, worsening ischaemia.' },
      { q: 'Define delta pressure and its threshold.', a: 'Diastolic blood pressure minus compartment pressure — below 30 mmHg indicates fasciotomy.' },
      { q: 'Why is delta pressure better than an absolute threshold?', a: 'A hypotensive patient is ischaemic at a compartment pressure an absolute threshold would call normal.' },
      { q: 'How should a cast be split?', a: 'Bivalved down to skin on both sides including all padding — splitting the plaster alone achieves almost nothing.' },
      { q: 'Which leg compartment is most often missed at fasciotomy?', a: 'The deep posterior compartment.' },
      { q: 'What is Volkmann ischaemic contracture?', a: 'Fibrous replacement of necrotic muscle producing a fixed clawed functionless limb — permanent and preventable.' },
      { q: 'What is the myoglobinuria dipstick discrepancy?', a: 'Urine positive for blood on dipstick with no red cells on microscopy.' },
      { q: 'What is the danger at the moment of decompression?', a: 'A surge of potassium and acid causing arrhythmia and cardiovascular instability — as in crush syndrome.' },
      { q: 'In whom is the diagnosis most often missed?', a: 'Those who cannot report pain — unconscious, intubated, children, and patients with a dense regional block.' },
    ],
    checks: [
      'Analgesia requirement and trend reviewed on the drug chart',
      'Limb examined in person rather than managed by telephone',
      'Pain on passive stretch tested',
      'First web space sensation tested',
      'Compartments palpated and compared with the other side',
      'Present pulses NOT accepted as reassurance',
      'All constricting dressings removed and cast bivalved to skin including padding',
      'Limb positioned at heart level, NOT elevated',
      'Hypotension corrected and oxygen given',
      'Orthopaedic senior called immediately with explicit wording, and escalated if delayed',
      'Compartment pressure measured only where the patient cannot report pain or the picture is equivocal',
      'Delta pressure used rather than an absolute threshold',
      'Creatine kinase, potassium, renal function and urinalysis sent',
      'Theatre alerted; patient nil by mouth with group and save',
      'All four leg compartments planned for release, with full-length incisions',
      'Reperfusion surge anticipated with the anaesthetic team',
      'Times of assessments, calls and decisions documented',
    ],
    related: ['compartment_syndrome_recognition_and_fasciotomy'],
  },
];
