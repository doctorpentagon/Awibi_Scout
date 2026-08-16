/**
 * CASE SCENARIOS — Acute mesenteric ischaemia and the polytrauma primary survey.
 *
 * Batch 4, part 3.
 */

export default [
  {
    id: 'AS-CASE-0035',
    type: 'case',
    specialty: 'Surgery — General surgery',
    teaching_case: true,
    title: 'CASE: Severe Abdominal Pain with a Soft Abdomen in Atrial Fibrillation',
    short: 'Case: acute mesenteric ischaemia',
    summary:
      'A 76-year-old in atrial fibrillation with agonising pain and an almost normal examination. Teaches the pain-examination mismatch, why the lactate is normal early, why waiting for peritonitis means waiting for dead bowel, and the four different mechanisms with four different treatments.',
    domains: ['general_surgery', 'vascular_surgery', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case mesenteric ischaemia', 'acute mesenteric ischaemia case', 'pain out of proportion abdomen',
      'superior mesenteric artery embolus', 'mesenteric venous thrombosis',
      'non-occlusive mesenteric ischaemia', 'ct angiography mesenteric', 'second look laparotomy',
    ],
    terms: [
      'case', 'mesenteric ischaemia', 'superior mesenteric artery', 'embolus', 'thrombosis',
      'non-occlusive mesenteric ischaemia', 'mesenteric venous thrombosis', 'pain out of proportion',
      'ct angiography', 'lactate', 'pneumatosis intestinalis', 'portal venous gas',
      'second look laparotomy', 'damage control surgery', 'atrial fibrillation', 'short bowel syndrome',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '76-year-old woman in atrial fibrillation, not anticoagulated, with 5 hours of sudden severe central abdominal pain. She is in obvious agony, but her abdomen is soft with only mild generalised tenderness and no guarding.',

      section_1_clerking: {
        the_finding_that_defines_the_case: {
          pain_out_of_proportion_to_the_examination:
            'THE HALLMARK. THE PATIENT IS IN SEVERE, RELENTLESS PAIN WHILE THE ABDOMEN IS SOFT AND ALMOST UNREMARKABLE. This is the exact opposite of what clinicians are trained to expect, and it is why the diagnosis is missed.',
          why_it_happens:
            'EARLY MESENTERIC ISCHAEMIA IS A VISCERAL PROCESS. The bowel is ischaemic and generating intense visceral pain, but the PARIETAL PERITONEUM IS NOT YET INVOLVED, so there is no guarding, no rigidity and no rebound. PERITONISM ONLY APPEARS WHEN THE BOWEL WALL IS FULL-THICKNESS NECROTIC AND INFLAMMATION REACHES THE PERITONEUM.',
          the_consequence_that_must_be_understood:
            'WAITING FOR THE ABDOMEN TO BECOME PERITONITIC BEFORE ACTING MEANS WAITING FOR THE BOWEL TO DIE. By the time the examination looks convincing, the window for revascularisation and bowel salvage has closed. MORTALITY IS ROUGHLY 60 TO 80% AND THE SINGLE BIGGEST DETERMINANT IS TIME TO DIAGNOSIS. THE DIAGNOSIS MUST BE MADE ON SUSPICION, NOT ON SIGNS.',
        },
        history:
          'Sudden onset five hours ago of severe, constant central abdominal pain. She has vomited twice and passed a loose stool shortly after the pain began — GUT EMPTYING is an early feature. She has no appetite and feels frightened. No previous abdominal surgery. No fever.',
        the_early_symptom_triad_worth_knowing: 'SEVERE PAIN · VOMITING OR DIARRHOEA (gut emptying) · AND A RISK FACTOR FOR EMBOLISM OR THROMBOSIS. That combination in an older patient should trigger the thought before any test.',
        the_risk_factors_that_point_at_each_mechanism: {
          embolic: 'ATRIAL FIBRILLATION (especially unanticoagulated, as here) · recent myocardial infarction with mural thrombus · prosthetic valves · endocarditis · previous embolic events. SUDDEN onset, in a patient with a clear cardiac source.',
          thrombotic: 'ESTABLISHED ATHEROSCLEROSIS — peripheral vascular disease, coronary disease, previous stroke, smoking. LOOK FOR A HISTORY OF CHRONIC MESENTERIC ISCHAEMIA: POST-PRANDIAL ABDOMINAL PAIN ("INTESTINAL ANGINA"), FEAR OF EATING (SITOPHOBIA) AND WEIGHT LOSS over months. That history converts an obscure presentation into an obvious one, and it takes one question.',
          non_occlusive: 'LOW FLOW STATES — cardiac failure, cardiogenic or septic shock, recent cardiac surgery, dialysis, and VASOPRESSORS or digoxin. Often more insidious in a patient already critically ill.',
          venous: 'THROMBOPHILIA · malignancy · portal hypertension · recent abdominal surgery or sepsis · oral contraceptives · inflammatory bowel disease · pancreatitis. Typically a SUBACUTE course over days rather than hours, and often in a younger patient.',
        },
        past_medical_history: 'Atrial fibrillation, DECLINED ANTICOAGULATION 2 years ago after reading about bleeding risk. Hypertension. Type 2 diabetes.',
        vitals: 'BP 138/82 mmHg. Pulse 108, IRREGULARLY IRREGULAR. Respiratory rate 22. Temperature 36.9. Saturation 96%. LACTATE 1.8 mmol/L — WITHIN THE NORMAL RANGE, and see below why that is not reassuring.',
        examination:
          'Distressed and in obvious pain, restless rather than lying still. Abdomen SOFT, mildly tender centrally, NO GUARDING, NO REBOUND. Bowel sounds present. IRREGULARLY IRREGULAR PULSE. Peripheral pulses present. Rectal examination: no melaena at present, though it appears later. NOTHING ON EXAMINATION EXPLAINS HER PAIN — AND THAT IS THE FINDING.',
        the_deceptive_middle_phase: 'AFTER SEVERAL HOURS THE PAIN MAY LESSEN as the ischaemic bowel wall becomes necrotic and its afferent nerves die. THE PATIENT APPEARS TO IMPROVE. This is followed by peritonitis, shock and death. A REDUCTION IN PAIN IN THIS SETTING IS NOT IMPROVEMENT.',
      },

      section_2_mechanism: {
        the_anatomy_that_explains_the_distribution: 'The COELIAC AXIS supplies the foregut, the SUPERIOR MESENTERIC ARTERY the midgut (distal duodenum to the proximal two thirds of the transverse colon), and the INFERIOR MESENTERIC ARTERY the hindgut. THE SUPERIOR MESENTERIC ARTERY IS INVOLVED IN THE VAST MAJORITY OF ACUTE MESENTERIC ISCHAEMIA, because it takes off from the aorta at a SHALLOW, OBLIQUE ANGLE that directs emboli straight into it.',
        the_four_mechanisms_and_why_they_matter: {
          one_arterial_embolism: 'ROUGHLY 50%. Sudden, complete occlusion, classically lodging just distal to the origin of the middle colic artery — which is why the PROXIMAL JEJUNUM IS OFTEN SPARED, a useful operative and radiological clue. Presents with the most abrupt onset. TREATMENT: EMBOLECTOMY OR ENDOVASCULAR RETRIEVAL.',
          two_arterial_thrombosis: 'ROUGHLY 25%. Thrombosis on pre-existing atherosclerotic plaque, usually AT THE ORIGIN of the vessel — so the ischaemia is more EXTENSIVE. Preceded by chronic mesenteric ischaemia in many patients. TREATMENT: STENTING OR BYPASS.',
          three_non_occlusive_mesenteric_ischaemia: 'ROUGHLY 20%. NO OCCLUSION AT ALL — profound splanchnic VASOCONSTRICTION in a low-flow state. The vessels are patent on angiography, which is why it is missed if you are only looking for a blockage. TREATMENT: OPTIMISE CARDIAC OUTPUT, WITHDRAW VASOCONSTRICTORS WHERE POSSIBLE, AND INTRA-ARTERIAL VASODILATOR SUCH AS PAPAVERINE. Revascularisation is not the answer because there is nothing to revascularise.',
          four_mesenteric_venous_thrombosis: 'ROUGHLY 5 to 10%. Venous outflow obstruction causes congestion, oedema and eventually arterial compromise. SUBACUTE presentation over days. TREATMENT: ANTICOAGULATION, often without surgery unless the bowel is infarcted.',
          the_teaching_point: 'FOUR MECHANISMS, FOUR DIFFERENT TREATMENTS. "Mesenteric ischaemia" is not one disease, and identifying which one you are dealing with determines whether the patient needs an embolectomy, a stent, a vasodilator or heparin.',
        },
        why_the_bowel_dies_in_stages: [
          '1. The MUCOSA is the most metabolically active layer and the furthest from the arterial supply, so it dies FIRST — within a few hours.',
          '2. Mucosal death breaks the gut barrier, allowing BACTERIAL TRANSLOCATION and endotoxin release into the portal circulation and then systemically — hence sepsis before the bowel is visibly dead.',
          '3. Progressive full-thickness necrosis of muscularis and serosa follows, producing peritonitis and perforation.',
          '4. REPERFUSION AFTER REVASCULARISATION CAUSES FURTHER INJURY — a surge of potassium, acid and inflammatory mediators from the ischaemic bed, which can cause arrhythmia, profound acidosis and cardiovascular collapse. THE PATIENT CAN DETERIORATE AT THE MOMENT THE BLOOD SUPPLY IS RESTORED, and the theatre team must anticipate it.',
        ],
      },

      section_3_differentials: {
        one_acute_mesenteric_ischaemia: 'MUST BE ASSUMED. Supporting: sudden severe pain, soft abdomen, atrial fibrillation without anticoagulation, gut emptying, age.',
        two_perforated_viscus: 'Sudden severe pain, BUT with a rigid abdomen from the outset rather than a soft one. Free air on imaging.',
        three_ruptured_abdominal_aortic_aneurysm: 'Sudden pain with hypotension and a pulsatile mass. Must be excluded in any older patient with sudden abdominal pain — and CT answers both questions at once.',
        four_acute_pancreatitis: 'Epigastric pain to the back with raised amylase or lipase. Note that amylase can also be modestly raised in mesenteric ischaemia.',
        five_intestinal_obstruction_and_strangulation: 'Colicky pain, distension, absolute constipation. A strangulated hernia or closed-loop obstruction produces localised ischaemia and is a differential and a cause.',
        six_myocardial_infarction: 'Inferior MI presents with epigastric pain — DO AN ECG. And atrial fibrillation raises the possibility of a coronary embolus too.',
        seven_diabetic_ketoacidosis_and_metabolic_causes: 'Can present with severe abdominal pain and a soft abdomen. Check glucose and ketones — it is a cheap way to avoid an unnecessary laparotomy.',
        eight_renal_colic_and_gastroenteritis: 'Frequently the label attached to early mesenteric ischaemia. A patient given an antispasmodic for "gastroenteritis" and discharged is the classic missed case.',
      },

      section_4_investigations: {
        the_lactate_trap_which_is_the_most_important_laboratory_point: {
          the_expectation: 'Clinicians look for a raised lactate to confirm ischaemia.',
          the_reality:
            'THE LACTATE IS OFTEN NORMAL IN EARLY MESENTERIC ISCHAEMIA. Lactate produced by the ischaemic gut drains into the PORTAL VEIN and is largely METABOLISED BY THE LIVER on first pass. It only rises systemically when the ischaemia is extensive, the liver is overwhelmed, or there is established shock — BY WHICH POINT THE BOWEL IS USUALLY ALREADY DEAD.',
          the_rule: 'A NORMAL LACTATE DOES NOT EXCLUDE MESENTERIC ISCHAEMIA. It is a LATE marker and a marker of severity, NOT a screening test. Using a normal lactate to reassure yourself and discharge or observe the patient is the commonest laboratory error in this diagnosis.',
        },
        other_bloods: 'Full blood count — often a raised white count, sometimes markedly. UREA AND ELECTROLYTES. AMYLASE, which may be modestly raised. LIVER FUNCTION. CLOTTING. BLOOD GAS — a METABOLIC ACIDOSIS WITH A RAISED ANION GAP, when present, is significant, but its absence again does not exclude. CROSS-MATCH. D-dimer is sensitive but very non-specific — a normal value is mildly reassuring, a raised one means little.',
        ct_angiography_which_is_the_investigation: {
          the_rule: 'CT ANGIOGRAPHY OF THE ABDOMEN IS THE INVESTIGATION OF CHOICE AND MUST BE OBTAINED URGENTLY. Do not wait for blood results. Do not observe overnight.',
          the_protocol_point:
            'REQUEST AN ARTERIAL PHASE CT ANGIOGRAM, AND DISCUSS IT WITH THE RADIOLOGIST — a routine portal-venous-phase abdominal CT can MISS the arterial occlusion. STATING THE CLINICAL SUSPICION EXPLICITLY CHANGES THE PROTOCOL THAT IS USED, AND THEREFORE CHANGES THE ANSWER.',
          the_renal_function_objection:
            'CONTRAST NEPHROPATHY IS A REAL BUT MANAGEABLE RISK. WITHHOLDING A CT ANGIOGRAM BECAUSE OF A RAISED CREATININE IN A PATIENT WHO MAY HAVE DEAD BOWEL IS A SERIOUS ERROR — the patient will not survive to have chronic kidney disease. Give the contrast.',
          what_it_shows: 'Filling defect or occlusion in the superior mesenteric artery, vein or coeliac axis · bowel wall thickening or, ominously, PAPER-THIN wall · lack of bowel wall enhancement, which is a key sign of non-viability · PNEUMATOSIS INTESTINALIS (gas within the bowel wall) · PORTAL VENOUS GAS · mesenteric fat stranding and free fluid · and free air if perforated. PNEUMATOSIS AND PORTAL VENOUS GAS ARE LATE SIGNS OF ESTABLISHED INFARCTION — their absence is not reassurance, and their presence means the bowel is already dead.',
        },
        plain_radiograph: 'Usually normal early, which is precisely why it must not be used to exclude the diagnosis. Later it may show thickened "thumbprinted" bowel wall, ileus, or pneumatosis. IT HAS NO ROLE IN RULING THIS OUT.',
        ecg: 'Confirms atrial fibrillation, identifies myocardial infarction, and documents the embolic source.',
      },

      section_5_management: {
        a_immediate_resuscitation: 'ABCDE. High-flow oxygen. Two large-bore cannulae. AGGRESSIVE FLUID RESUSCITATION — these patients have massive third-space loss into ischaemic bowel and are far more depleted than they look. Catheterise. Correct electrolytes and acidosis. Analgesia — generously, and without apology. NASOGASTRIC TUBE. Cross-match.',
        the_vasopressor_caution: 'IF VASOPRESSORS ARE UNAVOIDABLE, REMEMBER THEY WORSEN SPLANCHNIC VASOCONSTRICTION. Prefer adequate volume resuscitation; where a vasopressor is needed, this is a specific reason to avoid agents with the most intense splanchnic effect where alternatives exist, and to withdraw them as soon as possible. IN NON-OCCLUSIVE ISCHAEMIA, VASOPRESSORS ARE PART OF THE CAUSE.',
        b_anticoagulation: 'SYSTEMIC HEPARINISATION as soon as the diagnosis is suspected and bleeding risk permits — it limits propagation of thrombus. In MESENTERIC VENOUS THROMBOSIS, ANTICOAGULATION IS THE PRIMARY TREATMENT and many patients recover without surgery.',
        c_antibiotics: 'BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS covering Gram-negatives and anaerobes. Bacterial translocation across the dead mucosa begins early, before the bowel is visibly infarcted.',
        d_call_the_vascular_and_general_surgeons_immediately: 'THIS IS A JOINT PROBLEM. The general surgeon assesses bowel viability; the vascular surgeon or interventional radiologist restores the blood supply. INVOLVE BOTH AT THE SAME TIME, and involve interventional radiology, because endovascular options may be quicker and less morbid.',
        e_restoring_the_blood_supply_by_mechanism: {
          embolus: 'SURGICAL EMBOLECTOMY through the superior mesenteric artery, or ENDOVASCULAR aspiration or thrombolysis in selected patients without peritonitis.',
          thrombosis: 'ENDOVASCULAR STENTING, or surgical BYPASS. Usually needs the vascular team.',
          non_occlusive: 'OPTIMISE CARDIAC OUTPUT AND PERFUSION, WITHDRAW VASOCONSTRICTORS, and consider INTRA-ARTERIAL VASODILATOR INFUSION such as PAPAVERINE via a catheter in the superior mesenteric artery. THERE IS NO OCCLUSION TO REMOVE.',
          venous: 'ANTICOAGULATION, with surgery reserved for infarcted bowel.',
          the_sequencing_principle: 'WHERE BOTH ARE NEEDED, REVASCULARISE BEFORE DECIDING WHAT BOWEL TO RESECT. Bowel that looks non-viable in an ischaemic field may recover once perfused, and resecting first leads to unnecessarily long resections.',
        },
        f_laparotomy_and_the_damage_control_approach: {
          when: 'PERITONITIS, evidence of infarction, or failure of endovascular treatment.',
          assessing_viability: 'Colour, peristalsis, mesenteric pulsation and bleeding from cut edges. Doppler and indocyanine green fluorescence assist where available. VIABILITY IS GENUINELY DIFFICULT TO JUDGE, and that uncertainty is the reason for the next point.',
          the_planned_second_look: {
            what_it_is: 'RESECT CLEARLY DEAD BOWEL, LEAVE THE BOWEL ENDS STAPLED OFF WITHOUT AN ANASTOMOSIS, TEMPORARILY CLOSE THE ABDOMEN, AND RETURN TO THEATRE AT 24 TO 48 HOURS TO REASSESS.',
            why_it_is_right: 'It allows marginal bowel time to declare itself, avoids over-resection at the first operation, and avoids anastomosis in an unstable, acidotic, hypothermic patient where it would leak. A PLANNED SECOND LOOK IS A DELIBERATE STRATEGY, NOT AN ADMISSION OF FAILURE, and it must be planned at the first operation rather than triggered by deterioration.',
          },
        },
        g_the_realistic_conversation: {
          the_prognosis: 'MORTALITY IS 60 TO 80%, higher with delayed diagnosis, extensive infarction and advanced age.',
          extensive_resection: 'If the entire midgut is infarcted, resection leaves SHORT BOWEL SYNDROME with lifelong parenteral nutrition — and in a frail elderly patient, a decision that resection is not in their interests may be the right one. THIS CONVERSATION SHOULD HAPPEN BEFORE OR DURING THE OPERATION, WITH FAMILY WHERE POSSIBLE, AND MUST BE DOCUMENTED. Palliative care involvement is appropriate and should not be delayed by reluctance to have the conversation.',
        },
        h_the_thing_that_should_have_prevented_this: {
          the_point: 'SHE HAS ATRIAL FIBRILLATION AND DECLINED ANTICOAGULATION. Anticoagulation in atrial fibrillation prevents systemic embolism — of which mesenteric embolism is one form, alongside stroke and acute limb ischaemia.',
          the_lesson: 'When a patient declines anticoagulation, the conversation should cover WHAT IT PREVENTS in terms they can weigh — not just "reduces stroke risk", but the concrete alternatives — and it should be REVISITED rather than recorded once and never raised again. A single documented refusal two years ago is not informed consent for the present situation.',
        },
        i_survivors: 'Long-term anticoagulation. Investigate and treat the underlying cause — cardiac source, atherosclerosis, thrombophilia screen in venous cases, malignancy screen where appropriate. Nutritional support and dietitian input, especially after significant resection. Stoma care. Rehabilitation.',
      },

      section_6_teaching_points: {
        bonus_1_pain_out_of_proportion_with_a_soft_abdomen:
          'Early ischaemia is a purely visceral process — the parietal peritoneum is not involved, so there is no guarding. Peritonism only appears when the bowel is full-thickness necrotic. WAITING FOR THE ABDOMEN TO BECOME PERITONITIC MEANS WAITING FOR THE BOWEL TO DIE.',
        bonus_2_a_normal_lactate_does_not_exclude_it:
          'Lactate from the ischaemic gut drains into the portal vein and is metabolised by the liver on first pass. It rises systemically only when ischaemia is extensive or shock is established — by which time the bowel is usually dead. Lactate is a severity marker, not a screening test.',
        bonus_3_say_the_words_when_you_request_the_ct:
          'A routine portal-venous-phase abdominal CT can miss the arterial occlusion. Requesting an ARTERIAL PHASE CT ANGIOGRAM and telling the radiologist what you suspect changes the protocol and therefore changes the answer.',
        bonus_4_four_mechanisms_four_treatments:
          'Embolus needs embolectomy; thrombosis needs stenting or bypass; NON-OCCLUSIVE disease has patent vessels and needs vasodilators and withdrawal of vasoconstrictors; venous thrombosis needs anticoagulation. Treating all mesenteric ischaemia as one disease produces the wrong operation.',
        bonus_5_revascularise_before_resecting:
          'Bowel that looks dead in an ischaemic field may recover once perfused. Resecting first leads to unnecessarily long resections and avoidable short bowel syndrome.',
        bonus_6_the_planned_second_look_is_a_strategy:
          'Resect only clearly dead bowel, leave the ends stapled without anastomosis, and return at 24 to 48 hours. It lets marginal bowel declare itself and avoids anastomosis in an unstable acidotic patient. Plan it at the first operation, not after a deterioration.',
        bonus_7_reperfusion_can_kill_at_the_moment_of_success:
          'Restoring flow releases potassium, acid and inflammatory mediators from the ischaemic bed, causing arrhythmia, profound acidosis and collapse. The theatre and anaesthetic team must anticipate it.',
        trap_1: 'Ask about POST-PRANDIAL PAIN, FEAR OF EATING and WEIGHT LOSS — chronic mesenteric ischaemia precedes thrombotic occlusion and makes the diagnosis obvious.',
        trap_2: 'A reduction in pain after several hours can mean the afferent nerves have died, not that the patient is improving.',
        trap_3: 'Do not withhold contrast because of a raised creatinine — the patient will not survive to have chronic kidney disease.',
        trap_4: 'Pneumatosis and portal venous gas are LATE signs — their absence is not reassurance and their presence means the bowel is already dead.',
        trap_5: 'A plain abdominal radiograph has no role in excluding this diagnosis.',
        trap_6: 'Vasopressors worsen splanchnic vasoconstriction, and in non-occlusive ischaemia they are part of the cause.',
        trap_7: 'DO AN ECG — inferior MI presents with epigastric pain, and check glucose and ketones, since DKA causes severe pain with a soft abdomen.',
        one_line_summary: 'Acute mesenteric ischaemia from an embolus in unanticoagulated atrial fibrillation. Severe pain with a soft abdomen IS the diagnosis, the normal lactate means nothing, request an arterial-phase CT angiogram now — and revascularise before deciding what to resect.',
      },
    },
    warnings: [
      'PAIN OUT OF PROPORTION TO A SOFT ABDOMEN IS THE DIAGNOSIS. Waiting for peritonitis means waiting for dead bowel.',
      'A NORMAL LACTATE DOES NOT EXCLUDE MESENTERIC ISCHAEMIA — portal lactate is metabolised by the liver on first pass.',
      'REQUEST AN ARTERIAL PHASE CT ANGIOGRAM and state the suspicion — a routine portal-venous CT can miss the occlusion.',
      'DO NOT WITHHOLD CONTRAST because of a raised creatinine — the patient will not survive to have chronic kidney disease.',
      'PNEUMATOSIS AND PORTAL VENOUS GAS ARE LATE SIGNS — absence is not reassurance, presence means the bowel is already dead.',
      'A PLAIN ABDOMINAL RADIOGRAPH HAS NO ROLE in excluding this diagnosis.',
      'A REDUCTION IN PAIN after several hours may mean the afferent nerves have died, not improvement.',
      'FOUR MECHANISMS, FOUR TREATMENTS — embolectomy, stenting, vasodilators, or anticoagulation. Identify which one.',
      'In NON-OCCLUSIVE ischaemia the vessels are PATENT — there is nothing to revascularise, and vasopressors are part of the cause.',
      'REVASCULARISE BEFORE RESECTING — bowel that looks dead in an ischaemic field may recover once perfused.',
      'PLAN A SECOND-LOOK LAPAROTOMY at the first operation — it is a strategy, not an admission of failure.',
      'REPERFUSION CAN CAUSE COLLAPSE at the moment flow is restored — potassium, acid and mediators surge from the ischaemic bed.',
      'ASK ABOUT POST-PRANDIAL PAIN, FEAR OF EATING AND WEIGHT LOSS — chronic mesenteric ischaemia precedes thrombotic occlusion.',
      'DO AN ECG and check glucose and ketones — inferior MI and DKA both present with severe pain and a soft abdomen.',
      'Management here is a teaching example. Follow local vascular and surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Endovascular versus open strategy depends on local vascular and interventional radiology availability.',
      'Decisions about extensive resection and short bowel syndrome are individual and require senior and family involvement.',
    ],
    cards: [
      { q: 'What is the hallmark finding?', a: 'Severe pain with a soft abdomen — early ischaemia is visceral and does not involve the parietal peritoneum.' },
      { q: 'Why is the lactate normal early?', a: 'Lactate drains into the portal vein and is metabolised by the liver on first pass — it rises only late.' },
      { q: 'What must you specify when requesting the CT?', a: 'An ARTERIAL PHASE CT angiogram, stating the suspicion — routine portal-venous CT can miss the occlusion.' },
      { q: 'Name the four mechanisms and their treatments.', a: 'Embolus (embolectomy), thrombosis (stent or bypass), non-occlusive (vasodilators, stop vasoconstrictors), venous (anticoagulation).' },
      { q: 'Why does the SMA receive most emboli?', a: 'It leaves the aorta at a shallow oblique angle that directs emboli straight into it.' },
      { q: 'Why is the proximal jejunum often spared in embolism?', a: 'The embolus typically lodges just distal to the origin of the middle colic artery.' },
      { q: 'What do pneumatosis and portal venous gas indicate?', a: 'Established infarction — late signs meaning the bowel is already dead.' },
      { q: 'Why revascularise before resecting?', a: 'Bowel that looks non-viable in an ischaemic field may recover once perfused, avoiding over-resection.' },
      { q: 'What is a planned second-look laparotomy?', a: 'Resect clearly dead bowel, leave ends stapled without anastomosis, and reassess at 24 to 48 hours.' },
      { q: 'What is the danger at the moment of reperfusion?', a: 'A surge of potassium, acid and inflammatory mediators causing arrhythmia, acidosis and collapse.' },
      { q: 'What history points at thrombotic occlusion?', a: 'Post-prandial pain, fear of eating (sitophobia) and weight loss — chronic mesenteric ischaemia.' },
      { q: 'What is the mortality and its biggest determinant?', a: 'Roughly 60 to 80%, and the biggest determinant is time to diagnosis.' },
    ],
    checks: [
      'Pain-examination mismatch recognised and documented',
      'Risk factors for each of the four mechanisms elicited',
      'Post-prandial pain and weight loss asked about',
      'ECG performed; glucose and ketones checked',
      'Normal lactate NOT used to exclude the diagnosis',
      'Arterial-phase CT angiogram requested with explicit suspicion stated',
      'Contrast not withheld for renal function',
      'Aggressive fluid resuscitation started',
      'Systemic heparinisation considered',
      'Broad-spectrum antibiotics given',
      'Vascular surgery, general surgery and interventional radiology all involved',
      'Revascularisation planned before resection decisions',
      'Second-look laparotomy planned at the first operation',
      'Prognosis and extent-of-resection discussion documented with family',
      'Long-term anticoagulation and cause investigation arranged for survivors',
    ],
    related: ['acute_abdomen_pattern_recognition_and_first_decisions'],
  },

  {
    id: 'AS-CASE-0036',
    type: 'case',
    specialty: 'Surgery — Trauma',
    teaching_case: true,
    title: 'CASE: Motorcycle Versus Lorry — The First Ten Minutes',
    short: 'Case: polytrauma primary survey',
    summary:
      'A 24-year-old motorcyclist arriving by ambulance, hypotensive and agitated. Teaches the primary survey done properly, why catastrophic haemorrhage comes before airway, the four places blood hides, permissive hypotension and why the agitation is hypoxia until proven otherwise.',
    domains: ['trauma', 'emergency_medicine', 'critical_care', 'general_surgery'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case polytrauma', 'primary survey case', 'atls case', 'catastrophic haemorrhage',
      'cabcde trauma', 'blood on the floor and four more', 'permissive hypotension',
      'damage control resuscitation', 'lethal triad trauma', 'tranexamic acid trauma',
      'fast scan', 'massive haemorrhage protocol',
    ],
    terms: [
      'case', 'polytrauma', 'primary survey', 'catastrophic haemorrhage', 'tourniquet',
      'cervical spine immobilisation', 'tension pneumothorax', 'massive haemothorax',
      'pelvic binder', 'permissive hypotension', 'damage control resuscitation',
      'lethal triad', 'tranexamic acid', 'crash-2', 'fast scan', 'massive haemorrhage protocol',
      'log roll', 'secondary survey', 'ampl e history',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '24-year-old motorcyclist hit by a lorry at speed, arriving 25 minutes after the collision. Blood pressure 82/50, pulse 130, agitated and combative, with an obvious deformed left thigh and blood soaking through a dressing on his right arm.',

      section_1_the_structure: {
        the_principle: 'THE PRIMARY SURVEY IS NOT AN EXAMINATION ROUTINE — IT IS A PRIORITISED SEQUENCE OF FINDING AND FIXING THINGS THAT KILL WITHIN MINUTES. YOU DO NOT MOVE ON UNTIL THE CURRENT PROBLEM IS ADDRESSED. IF THE PATIENT DETERIORATES AT ANY POINT, YOU GO BACK TO THE BEGINNING.',
        the_modern_sequence: {
          the_change: 'Classical teaching is A-B-C-D-E. MODERN TRAUMA PRACTICE PUTS A C IN FRONT: <C>-A-B-C-D-E, WHERE <C> IS CATASTROPHIC HAEMORRHAGE.',
          why: 'A patient exsanguinating from a limb wound will die of blood loss long before an airway problem kills them. MILITARY AND CIVILIAN EXPERIENCE SHOWED THAT COMPRESSIBLE EXTERNAL HAEMORRHAGE IS A LEADING CAUSE OF PREVENTABLE TRAUMA DEATH, AND IT TAKES SECONDS TO CONTROL. So it is dealt with FIRST, in parallel with the airway, not after it.',
        },
        the_team: 'This is a TEAM activity with a designated TEAM LEADER who stands back, does not perform procedures, and directs. PRE-ALERT allows the team to assemble before arrival, allocate roles, prepare equipment and activate the massive haemorrhage protocol. A trauma call received on arrival has already lost time.',
      },

      section_2_the_primary_survey: {
        catastrophic_haemorrhage: {
          the_finding: 'Blood soaking through the arm dressing and pooling on the trolley.',
          the_actions: 'DIRECT PRESSURE FIRST — firm, sustained, with a gloved hand, not a gentle pat with gauze. If that fails, a HAEMOSTATIC DRESSING packed into the wound. If that fails on a limb, a TOURNIQUET applied proximally, tightened until bleeding stops, AND THE TIME WRITTEN ON IT.',
          the_tourniquet_facts_worth_knowing: 'A CORRECTLY APPLIED TOURNIQUET IS PAINFUL — if it does not hurt, it is probably not tight enough and may be worsening bleeding by occluding venous return while leaving arterial inflow. DOCUMENT THE TIME OF APPLICATION. Do not remove it on the ward without a surgeon and a plan. Prolonged application risks limb ischaemia and reperfusion injury, but the limb is a lesser problem than exsanguination.',
        },
        a_airway_with_cervical_spine_control: {
          assess: 'CAN HE TALK? A patient who speaks clearly in full sentences has a patent airway and adequate ventilation for the moment. HE IS AGITATED AND SHOUTING — which tells you the airway is open, and tells you something else (see D).',
          look_for: 'Stridor, gurgling, snoring, facial or neck trauma, burns to the face or singed nasal hairs, expanding neck haematoma, blood or vomit in the mouth.',
          the_actions: 'Suction. Jaw thrust — NOT head tilt, because of the cervical spine. Airway adjuncts. Definitive airway with rapid sequence induction where indicated. ANTICIPATE THE DIFFICULT AIRWAY in facial trauma and have a surgical airway plan and equipment ready before you start.',
          cervical_spine: 'MANUAL IN-LINE STABILISATION, then a collar with blocks and tape — or, increasingly, careful manual control and minimal handling, since rigid collars have their own harms including raised intracranial pressure and pressure injury. THE PRINCIPLE IS TO AVOID MOVING AN UNSTABLE SPINE, NOT TO APPLY A PARTICULAR DEVICE. Immobilisation must never obstruct airway management.',
        },
        b_breathing_and_ventilation: {
          assess: 'RESPIRATORY RATE, oxygen saturation, TRACHEAL POSITION, chest expansion and symmetry, percussion, auscultation, and inspection for wounds, flail segments and surgical emphysema. EXPOSE THE WHOLE CHEST AND LOOK AT BOTH SIDES.',
          the_immediately_life_threatening_chest_injuries: 'TENSION PNEUMOTHORAX · OPEN PNEUMOTHORAX (sucking chest wound) · MASSIVE HAEMOTHORAX · FLAIL CHEST WITH PULMONARY CONTUSION · CARDIAC TAMPONADE (strictly circulation, but found here).',
          tension_pneumothorax: {
            the_rule: 'IT IS A CLINICAL DIAGNOSIS AND MUST BE TREATED BEFORE ANY RADIOGRAPH. A patient who dies waiting for a chest film to confirm a tension pneumothorax has died of a delay, not of a pneumothorax.',
            the_signs: 'Respiratory distress, hypoxia, reduced or absent breath sounds and hyper-resonance on the affected side, tracheal deviation AWAY from the side (a LATE sign), distended neck veins (absent if the patient is also hypovolaemic), and HYPOTENSION from obstructed venous return.',
            the_action: 'IMMEDIATE DECOMPRESSION. Needle decompression is a temporising measure — and note that current guidance favours the 4th or 5th INTERCOSTAL SPACE IN THE ANTERIOR AXILLARY LINE over the traditional 2nd space mid-clavicular line, because the chest wall is thinner there and standard cannulae frequently fail to reach the pleura anteriorly in adults. FOLLOW IT WITH A FORMAL CHEST DRAIN, which is the definitive treatment. In many services, FINGER THORACOSTOMY is now preferred as the initial manoeuvre because it reliably enters the pleural space.',
          },
          oxygen: 'High-flow oxygen for every major trauma patient initially.',
        },
        c_circulation_and_haemorrhage_control: {
          assess: 'Pulse rate and character, blood pressure, capillary refill, skin colour and temperature, conscious level, and urine output once catheterised. NOTE THAT A YOUNG FIT ADULT COMPENSATES EXTREMELY WELL — TACHYCARDIA AND NARROWED PULSE PRESSURE APPEAR LONG BEFORE THE SYSTOLIC BLOOD PRESSURE FALLS. A NORMAL BLOOD PRESSURE IN A TACHYCARDIC YOUNG TRAUMA PATIENT IS NOT REASSURANCE; IT IS COMPENSATION ABOUT TO FAIL.',
          the_four_places_blood_hides: {
            the_phrase: '"BLOOD ON THE FLOOR AND FOUR MORE" — the five places a trauma patient can lose enough blood to die.',
            the_list: '1. EXTERNAL (on the floor, in the dressings, at the scene — ask the paramedics how much was lost). 2. CHEST. 3. ABDOMEN. 4. PELVIS AND RETROPERITONEUM. 5. LONG BONES, particularly the femurs — a closed femoral shaft fracture can hold 1 to 1.5 litres, and bilateral femoral fractures alone can cause shock.',
            the_point: 'A HYPOTENSIVE TRAUMA PATIENT IS BLEEDING INTO ONE OF THESE FIVE UNTIL PROVEN OTHERWISE. Working through them systematically finds the source. HE HAS A DEFORMED THIGH — THAT IS ONE SOURCE ALREADY IDENTIFIED.',
          },
          the_actions: 'TWO LARGE-BORE CANNULAE (14 or 16 gauge) and bloods including CROSS-MATCH. ACTIVATE THE MASSIVE HAEMORRHAGE PROTOCOL. PELVIC BINDER applied at the level of the GREATER TROCHANTERS — a common error is placing it too high over the iliac crests, where it does not close the pelvic ring. SPLINT THE FEMUR — a traction splint reduces the fracture, restores length, reduces the volume available for bleeding and relieves pain. Control external bleeding.',
          the_pelvic_binder_rule: 'ONCE A BINDER IS ON, LEAVE IT ON. Repeated "springing" or examination of the pelvis to test stability is unnecessary, disrupts clot and can cause further bleeding. THE PELVIS IS ASSESSED BY IMAGING, NOT BY REPEATED MANUAL EXAMINATION.',
        },
        d_disability: {
          assess: 'GCS, pupils, blood GLUCOSE, and gross limb movement. Look for lateralising signs.',
          the_point_about_his_agitation: {
            the_error: 'A combative, agitated trauma patient is easily labelled as drunk, on drugs, or simply difficult.',
            the_rule:
              'AGITATION AND COMBATIVENESS IN TRAUMA ARE HYPOXIA OR HYPOPERFUSION UNTIL PROVEN OTHERWISE. Cerebral hypoxia and shock both cause agitation before they cause drowsiness. THE ANSWER IS OXYGEN AND BLOOD, NOT SEDATION. Sedating a hypoxic, shocked patient to make them easier to manage can be fatal, and alcohol or drugs must never be assumed as the explanation until hypoxia, hypoglycaemia, hypoperfusion and head injury have been addressed.',
          },
          glucose: 'Check it in every patient with altered consciousness — including trauma. Hypoglycaemia may have caused the crash.',
        },
        e_exposure_and_environment: {
          expose: 'Undress fully to examine, including the back during a controlled LOG ROLL, inspecting the whole spine and the perineum, and performing a rectal examination where indicated.',
          then_cover_immediately: {
            the_reason: 'HYPOTHERMIA IS PART OF THE LETHAL TRIAD. Trauma patients cool rapidly — undressed, wet, receiving cold fluids, in a cold resuscitation room, with impaired thermoregulation from shock.',
            the_actions: 'Warm blankets, forced-air warming, WARMED intravenous fluids and blood, a warm room. It is easy, cheap, and it is neglected because it feels less urgent than everything else in the room.',
          },
        },
      },

      section_3_the_lethal_triad_and_damage_control_resuscitation: {
        the_lethal_triad: {
          the_three: 'HYPOTHERMIA · ACIDOSIS · COAGULOPATHY.',
          how_they_reinforce_each_other:
            'HYPOTHERMIA impairs enzymatic clotting factor function and platelet activity, causing COAGULOPATHY. Bleeding causes hypoperfusion and ACIDOSIS, which further impairs clotting factor function. Coagulopathy causes more bleeding, more hypoperfusion, more acidosis and more heat loss. IT IS A SELF-REINFORCING SPIRAL, AND ONCE ESTABLISHED IT IS VERY DIFFICULT TO REVERSE. The whole of damage control resuscitation is designed to prevent entering it.',
          trauma_induced_coagulopathy: 'Note that severe trauma causes an EARLY coagulopathy present on arrival, before dilution or hypothermia — driven by tissue injury, shock and activation of protein C. It is not simply a consequence of fluid administration.',
        },
        permissive_hypotension: {
          the_concept: 'IN UNCONTROLLED HAEMORRHAGE, ACCEPT A LOWER-THAN-NORMAL BLOOD PRESSURE — commonly a palpable radial pulse or a systolic around 80 to 90 mmHg — UNTIL SURGICAL CONTROL IS ACHIEVED.',
          why: 'Raising the blood pressure to normal before the bleeding is stopped DISLODGES FORMED CLOT ("POPPING THE CLOT"), DILUTES CLOTTING FACTORS AND INCREASES BLEEDING. The aim is enough perfusion to keep the brain and heart going, not a normal number on the monitor.',
          the_critical_exception:
            'DO NOT APPLY PERMISSIVE HYPOTENSION IN SIGNIFICANT TRAUMATIC BRAIN INJURY. The injured brain needs CEREBRAL PERFUSION PRESSURE, and hypotension dramatically worsens outcome after head injury — a single episode of systolic below 90 roughly doubles mortality. IN COMBINED HAEMORRHAGE AND HEAD INJURY, A HIGHER TARGET IS USED AND THE PRIORITY IS SURGICAL CONTROL AS FAST AS POSSIBLE. Knowing WHICH patient you have determines opposite strategies.',
        },
        blood_not_crystalloid: 'GIVE BLOOD PRODUCTS EARLY IN HAEMORRHAGIC SHOCK, IN BALANCED RATIOS approaching 1:1:1 red cells to plasma to platelets. LARGE VOLUMES OF CRYSTALLOID DILUTE CLOTTING FACTORS, WORSEN ACIDOSIS AND HYPOTHERMIA, AND INCREASE MORTALITY. The old teaching of two litres of crystalloid before blood has been abandoned.',
        tranexamic_acid: {
          the_drug: 'TRANEXAMIC ACID 1 g intravenously over 10 minutes, then 1 g over 8 hours.',
          the_evidence: 'The CRASH-2 trial showed reduced mortality in bleeding trauma patients. CRASH-3 showed benefit in traumatic brain injury with mild to moderate injury.',
          the_timing_rule_that_matters: 'GIVE IT WITHIN 3 HOURS OF INJURY. GIVEN AFTER 3 HOURS IT WAS ASSOCIATED WITH INCREASED MORTALITY IN CRASH-2 — SO LATE ADMINISTRATION IS NOT NEUTRAL, IT IS HARMFUL. Earlier is better; benefit declines with every 15 minutes of delay. THE TIME OF INJURY, NOT THE TIME OF ARRIVAL, IS WHAT COUNTS.',
        },
        damage_control_surgery: 'IN AN UNSTABLE PATIENT, DO THE SHORTEST OPERATION THAT STOPS THE BLEEDING AND CONTROLS CONTAMINATION — pack, clamp, staple, temporarily close — THEN TAKE THE PATIENT TO INTENSIVE CARE TO WARM, CORRECT ACIDOSIS AND COAGULOPATHY, AND RETURN FOR DEFINITIVE SURGERY IN 24 TO 48 HOURS. A long definitive operation in a cold, acidotic, coagulopathic patient kills them on the table.',
      },

      section_4_adjuncts_and_imaging: {
        adjuncts_to_the_primary_survey: 'ECG monitoring · pulse oximetry · capnography if intubated · CATHETER and gastric tube (NASOGASTRIC AVOIDED AND OROGASTRIC USED IF THERE IS SUSPECTED BASE OF SKULL FRACTURE, because of the risk of intracranial placement) · blood gas including lactate and base deficit · ARTERIAL BLOOD GAS BASE DEFICIT IS A BETTER EARLY MARKER OF SHOCK SEVERITY THAN BLOOD PRESSURE.',
        the_catheter_caution: 'DO NOT CATHETERISE URETHRALLY IF THERE IS BLOOD AT THE MEATUS, A HIGH-RIDING PROSTATE, OR PERINEAL BRUISING — these suggest URETHRAL INJURY, and passing a catheter can convert a partial tear into a complete one. Seek urological advice; suprapubic catheterisation may be needed.',
        fast_scan: 'FOCUSED ASSESSMENT WITH SONOGRAPHY FOR TRAUMA — bedside ultrasound looking for FREE FLUID in the hepatorenal recess, splenorenal recess, pelvis and pericardium. FAST — RAPID, REPEATABLE, NO RADIATION, AND DONE WITHOUT MOVING THE PATIENT. ITS VALUE IS IN THE UNSTABLE PATIENT: A POSITIVE FAST IN A HYPOTENSIVE PATIENT MEANS THE ABDOMEN IS THE SOURCE AND THE PATIENT NEEDS THEATRE. A NEGATIVE FAST DOES NOT EXCLUDE INTRA-ABDOMINAL INJURY — it is insensitive for solid organ injury without free fluid, and for retroperitoneal and hollow viscus injury.',
        radiographs: 'CHEST and PELVIS films are the traditional trauma-room radiographs, taken without moving the patient.',
        ct: {
          the_rule: 'WHOLE-BODY CT IS THE STANDARD FOR THE STABLE OR STABILISED POLYTRAUMA PATIENT and identifies injuries that clinical examination misses entirely.',
          the_absolute_caution: 'THE CT SCANNER IS A DANGEROUS PLACE FOR AN UNSTABLE PATIENT. A HYPOTENSIVE PATIENT WHO IS NOT RESPONDING TO RESUSCITATION NEEDS SURGICAL CONTROL OF BLEEDING, NOT A SCAN. "DEATH BY CT" IS A RECOGNISED PHENOMENON AND A REAL ONE.',
        },
      },

      section_5_the_secondary_survey_and_what_follows: {
        when: 'ONLY AFTER THE PRIMARY SURVEY IS COMPLETE AND THE PATIENT IS STABILISED. If the patient deteriorates, ABANDON THE SECONDARY SURVEY AND RETURN TO THE PRIMARY SURVEY.',
        what_it_is: 'A HEAD-TO-TOE EXAMINATION INCLUDING EVERY ORIFICE AND THE BACK, DESIGNED TO FIND EVERY INJURY. Fingers and tubes in every orifice, as the old phrase has it.',
        the_history: {
          ampl_e: 'ALLERGIES · MEDICATIONS (including ANTICOAGULANTS, which change everything) · PAST MEDICAL HISTORY AND PREGNANCY · LAST MEAL · EVENTS AND ENVIRONMENT OF THE INJURY.',
          the_mechanism_matters: 'ASK THE PARAMEDICS ABOUT THE MECHANISM IN DETAIL — speed, ejection, death of another occupant, height of fall, entrapment time, and estimated blood loss at scene. MECHANISM PREDICTS INJURY PATTERNS THAT ARE NOT YET APPARENT, and the paramedics leave. Get it from them before they go.',
        },
        the_missed_injury_problem: {
          the_reality: 'MISSED INJURIES ARE COMMON IN POLYTRAUMA — distracting injuries, an intubated patient who cannot report symptoms, and attention focused on the dramatic wound.',
          the_solution: 'A FORMAL TERTIARY SURVEY — a systematic repeat head-to-toe examination and review of all imaging within 24 hours, and again when the patient is awake and able to report symptoms. IT IS A SPECIFIC, SCHEDULED TASK, NOT AN INTENTION.',
        },
        the_rest: 'ANALGESIA — trauma patients are under-analgesed, and pain relief is not a distraction from resuscitation. TETANUS PROPHYLAXIS. ANTIBIOTICS for open fractures and contaminated wounds. Splint fractures. Reassess frequently. Early involvement of orthopaedics, neurosurgery and other specialties. Communicate with the family. And DOCUMENT — trauma documentation is frequently poor and is later needed for clinical, legal and audit purposes.',
      },

      section_6_teaching_points: {
        bonus_1_catastrophic_haemorrhage_comes_before_the_airway:
          'A patient exsanguinating from a limb wound dies of blood loss before an airway problem kills them, and control takes seconds. That is why the sequence is <C>-A-B-C-D-E. A correctly applied tourniquet HURTS — if it does not, it may be worsening bleeding by occluding venous return alone. Write the time on it.',
        bonus_2_blood_on_the_floor_and_four_more:
          'External, chest, abdomen, pelvis and retroperitoneum, long bones. A hypotensive trauma patient is bleeding into one of these five until proven otherwise. A closed femoral fracture holds 1 to 1.5 litres — the deformed thigh is already one answer.',
        bonus_3_agitation_is_hypoxia_until_proven_otherwise:
          'Cerebral hypoxia and hypoperfusion cause agitation BEFORE drowsiness. The answer is oxygen and blood, not sedation. Assuming alcohol or drugs before addressing hypoxia, hypoglycaemia, hypoperfusion and head injury is how patients die labelled as difficult.',
        bonus_4_a_normal_blood_pressure_in_a_young_trauma_patient_is_compensation:
          'Young adults maintain systolic pressure until they have lost a great deal of volume. Tachycardia and a narrowed pulse pressure come first. Base deficit on the blood gas is a better early marker of shock severity than blood pressure.',
        bonus_5_permissive_hypotension_except_in_head_injury:
          'Raising the pressure before surgical control pops the clot and dilutes clotting factors. BUT the injured brain needs perfusion pressure, and a single systolic below 90 roughly doubles mortality after head injury. Knowing which patient you have determines opposite strategies.',
        bonus_6_tranexamic_acid_within_three_hours_only:
          'CRASH-2 showed reduced mortality when given early, and INCREASED mortality when given after 3 hours. Late administration is not neutral, it is harmful. The clock runs from the TIME OF INJURY, not the time of arrival.',
        bonus_7_the_lethal_triad_is_a_spiral:
          'Hypothermia impairs clotting; bleeding causes acidosis which impairs clotting; coagulopathy causes more bleeding, more acidosis and more heat loss. Everything in damage control resuscitation — warming, blood not crystalloid, short operations — exists to avoid entering it.',
        bonus_8_the_ct_scanner_is_a_dangerous_place_for_an_unstable_patient:
          'A hypotensive patient not responding to resuscitation needs surgical control, not imaging. "Death by CT" is a real phenomenon.',
        trap_1: 'Tension pneumothorax is a CLINICAL diagnosis — decompress before any radiograph. Use the 4th or 5th space in the anterior axillary line, or finger thoracostomy.',
        trap_2: 'Apply the pelvic binder at the GREATER TROCHANTERS, not the iliac crests — and once it is on, leave it on. Do not repeatedly spring the pelvis.',
        trap_3: 'Do NOT catheterise urethrally with blood at the meatus, a high-riding prostate or perineal bruising.',
        trap_4: 'Use an OROGASTRIC rather than nasogastric tube if base of skull fracture is suspected.',
        trap_5: 'A NEGATIVE FAST does not exclude intra-abdominal injury — it misses solid organ injury without free fluid, retroperitoneal and hollow viscus injury.',
        trap_6: 'Get the MECHANISM from the paramedics before they leave — it predicts injuries not yet apparent.',
        trap_7: 'Schedule a formal TERTIARY SURVEY within 24 hours and again when the patient is awake — missed injuries are common and this is the systematic answer.',
        trap_8: 'Cover the patient and warm them actively. Hypothermia is neglected because it feels less urgent than everything else in the room.',
        one_line_summary: 'Polytrauma with haemorrhagic shock. Stop the catastrophic bleeding first, work through the four hidden compartments, treat the agitation as hypoxia, give tranexamic acid within three hours and blood rather than crystalloid — and keep him warm.',
      },
    },
    warnings: [
      'CATASTROPHIC HAEMORRHAGE COMES BEFORE THE AIRWAY — the sequence is <C>-A-B-C-D-E.',
      'A correctly applied TOURNIQUET HURTS — if it does not, it may be worsening bleeding. WRITE THE TIME ON IT.',
      'BLOOD ON THE FLOOR AND FOUR MORE — external, chest, abdomen, pelvis/retroperitoneum, long bones.',
      'AGITATION IN TRAUMA IS HYPOXIA OR HYPOPERFUSION UNTIL PROVEN OTHERWISE — the answer is oxygen and blood, NOT sedation.',
      'A NORMAL BLOOD PRESSURE IN A TACHYCARDIC YOUNG TRAUMA PATIENT IS COMPENSATION, NOT REASSURANCE.',
      'TENSION PNEUMOTHORAX IS A CLINICAL DIAGNOSIS — decompress before any radiograph.',
      'Decompress at the 4th or 5th intercostal space in the ANTERIOR AXILLARY LINE, or use finger thoracostomy.',
      'Apply the PELVIC BINDER AT THE GREATER TROCHANTERS, not the iliac crests — and once on, LEAVE IT ON.',
      'PERMISSIVE HYPOTENSION — but NOT in traumatic brain injury, where hypotension roughly doubles mortality.',
      'GIVE BLOOD, NOT LARGE VOLUMES OF CRYSTALLOID — crystalloid dilutes clotting factors and worsens acidosis and hypothermia.',
      'TRANEXAMIC ACID WITHIN 3 HOURS OF INJURY — after 3 hours it INCREASED mortality in CRASH-2.',
      'THE LETHAL TRIAD is a self-reinforcing spiral — hypothermia, acidosis and coagulopathy. Warm the patient actively.',
      'THE CT SCANNER IS A DANGEROUS PLACE FOR AN UNSTABLE PATIENT — they need surgical control, not a scan.',
      'DO NOT CATHETERISE URETHRALLY with blood at the meatus, a high-riding prostate or perineal bruising.',
      'Use an OROGASTRIC tube if base of skull fracture is suspected.',
      'A NEGATIVE FAST DOES NOT EXCLUDE intra-abdominal injury.',
      'Schedule a formal TERTIARY SURVEY within 24 hours — missed injuries are common in polytrauma.',
      'Management here is a teaching example. Follow your local major trauma protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Trauma systems, transfusion ratios and imaging pathways differ between services and countries.',
      'Paediatric trauma has different physiology, weight-based dosing and different compensation patterns.',
    ],
    cards: [
      { q: 'Why does catastrophic haemorrhage precede the airway?', a: 'Exsanguination from a limb wound kills before an airway problem does, and control takes seconds.' },
      { q: 'Name the five places a trauma patient bleeds.', a: 'External, chest, abdomen, pelvis and retroperitoneum, long bones.' },
      { q: 'How much blood can a closed femoral fracture hold?', a: '1 to 1.5 litres — bilateral fractures alone can cause shock.' },
      { q: 'What does agitation in a trauma patient mean?', a: 'Hypoxia or hypoperfusion until proven otherwise — treat with oxygen and blood, not sedation.' },
      { q: 'Where is needle decompression now recommended, and why?', a: '4th or 5th intercostal space, anterior axillary line — the chest wall is thinner than anteriorly.' },
      { q: 'Where should a pelvic binder be applied?', a: 'At the greater trochanters, not the iliac crests — and once on, leave it on.' },
      { q: 'What is permissive hypotension and its exception?', a: 'Accepting a lower pressure until surgical control — but NOT in traumatic brain injury, which needs perfusion pressure.' },
      { q: 'State the tranexamic acid regimen and timing rule.', a: '1 g over 10 minutes then 1 g over 8 hours, WITHIN 3 HOURS of injury — later increases mortality.' },
      { q: 'Name the lethal triad and how it self-reinforces.', a: 'Hypothermia, acidosis, coagulopathy — each worsens clotting, causing more bleeding, acidosis and heat loss.' },
      { q: 'What is damage control surgery?', a: 'The shortest operation that stops bleeding and controls contamination, then ICU to correct physiology, then definitive surgery.' },
      { q: 'What does a negative FAST tell you?', a: 'Very little — it misses solid organ injury without free fluid, retroperitoneal and hollow viscus injury.' },
      { q: 'When must urethral catheterisation be avoided?', a: 'Blood at the meatus, high-riding prostate, or perineal bruising — suggesting urethral injury.' },
      { q: 'What is a tertiary survey and when is it done?', a: 'A systematic repeat head-to-toe examination and imaging review within 24 hours and again when the patient is awake.' },
    ],
    checks: [
      'Trauma team pre-alerted with roles allocated',
      'Catastrophic external haemorrhage controlled first; tourniquet time documented',
      'Airway assessed with manual in-line cervical stabilisation',
      'Tension pneumothorax excluded clinically before imaging',
      'Both sides of the chest exposed, percussed and auscultated',
      'Two large-bore cannulae and cross-match',
      'Massive haemorrhage protocol activated',
      'Pelvic binder applied at greater trochanters and left in place',
      'Femoral fracture splinted',
      'Agitation treated as hypoxia, not sedated',
      'Glucose checked',
      'Tranexamic acid given within 3 hours of INJURY',
      'Blood products in balanced ratios rather than large-volume crystalloid',
      'Patient covered and actively warmed',
      'Urethral catheter avoided if urethral injury suspected; orogastric if base of skull fracture',
      'CT only once stabilised; unstable patient taken for surgical control',
      'AMPLE history and mechanism obtained from paramedics before they leave',
      'Tertiary survey scheduled within 24 hours',
    ],
    related: ['trauma_primary_survey_and_the_immediately_life_threatening_injuries'],
  },
];
