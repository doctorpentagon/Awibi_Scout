/**
 * CASE SCENARIOS — Malrotation with midgut volvulus, and empyema.
 *
 * Batch 6, part 4.
 */

export default [
  {
    id: 'AS-CASE-0057',
    type: 'case',
    specialty: 'Surgery — Paediatric surgery',
    teaching_case: true,
    title: 'CASE: A 3-Week-Old with Green Vomit',
    short: 'Case: malrotation with midgut volvulus',
    summary:
      'A neonate with bilious vomiting. Teaches the single most important rule in paediatric surgery — bilious vomiting in a neonate is malrotation until proven otherwise — why the whole midgut can infarct in hours, and why the upper GI contrast study is the emergency investigation.',
    domains: ['paediatric_surgery', 'paediatrics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case malrotation', 'midgut volvulus case', 'bilious vomiting neonate',
      'ladd bands', 'ladd procedure', 'corkscrew sign', 'whirlpool sign',
      'duodenal atresia double bubble', 'neonatal bowel obstruction',
    ],
    terms: [
      'case', 'malrotation', 'midgut volvulus', 'bilious vomiting', 'ladd bands',
      'ladd procedure', 'duodenojejunal flexure', 'ligament of treitz', 'corkscrew sign',
      'whirlpool sign', 'upper gastrointestinal contrast study', 'superior mesenteric artery',
      'short bowel syndrome', 'duodenal atresia', 'double bubble', 'necrotising enterocolitis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '3-week-old baby, previously feeding and thriving, who has vomited three times this morning. The vomit is GREEN. She has otherwise seemed well and her abdomen is soft.',

      section_1_the_single_rule: {
        the_statement:
          'BILIOUS (GREEN) VOMITING IN A NEONATE IS MALROTATION WITH MIDGUT VOLVULUS UNTIL PROVEN OTHERWISE. IT IS A SURGICAL EMERGENCY REQUIRING IMMEDIATE ASSESSMENT AND URGENT IMAGING, AND IT IS THE SINGLE MOST IMPORTANT RULE IN PAEDIATRIC SURGERY.',
        why_the_colour_matters: 'BILE ENTERS THE DUODENUM AT THE AMPULLA OF VATER. GREEN VOMIT THEREFORE MEANS THE OBSTRUCTION IS DISTAL TO THE AMPULLA. IN A NEONATE THAT MEANS A SMALL NUMBER OF DIAGNOSES, AND THE ONE THAT KILLS FASTEST IS VOLVULUS.',
        the_terrifying_part: {
          the_statement:
            'A BABY WITH MIDGUT VOLVULUS CAN LOOK COMPLETELY WELL. THE ABDOMEN IS OFTEN SOFT AND NON-DISTENDED, BECAUSE THE OBSTRUCTION IS HIGH AND THERE IS NOTHING BELOW IT TO DISTEND. THERE MAY BE NO TENDERNESS, NO FEVER AND NORMAL OBSERVATIONS.',
          the_consequence:
            'MEANWHILE THE ENTIRE MIDGUT — FROM THE SECOND PART OF THE DUODENUM TO THE MID-TRANSVERSE COLON — IS TWISTING AROUND ITS BLOOD SUPPLY AND CAN INFARCT WITHIN HOURS. BY THE TIME THE BABY LOOKS UNWELL, WITH A DISTENDED TENDER ABDOMEN, ABDOMINAL WALL DISCOLOURATION, SHOCK OR BLOODY STOOL, THE BOWEL IS USUALLY ALREADY DEAD. A WELL-LOOKING BABY WITH GREEN VOMIT IS THE PRESENTATION YOU WANT, AND IT IS EXACTLY THE ONE THAT GETS SENT HOME.',
        },
        the_practical_instruction: 'DO NOT OBSERVE. DO NOT ARRANGE AN OUTPATIENT REVIEW. DO NOT ATTRIBUTE IT TO REFLUX, FEEDING PROBLEMS OR GASTROENTERITIS. TELEPHONE THE PAEDIATRIC SURGEONS AND ARRANGE AN URGENT UPPER GASTROINTESTINAL CONTRAST STUDY.',
      },

      section_2_the_embryology_that_explains_everything: {
        normal_rotation: 'During weeks 6 to 10 of gestation the midgut herniates into the umbilical cord, ROTATES 270 DEGREES ANTICLOCKWISE around the axis of the SUPERIOR MESENTERIC ARTERY, and returns to the abdomen. The DUODENOJEJUNAL FLEXURE ends up in the LEFT UPPER QUADRANT at the ligament of Treitz, and the CAECUM in the RIGHT LOWER QUADRANT.',
        the_purpose_of_that_arrangement: {
          the_key_idea:
            'THE POINT OF NORMAL ROTATION IS THAT IT PLACES THE TWO ENDS OF THE MIDGUT — THE DUODENOJEJUNAL FLEXURE AND THE CAECUM — AS FAR APART AS POSSIBLE. THE MESENTERY THEREFORE HAS A BROAD BASE RUNNING DIAGONALLY ACROSS THE ABDOMEN, AND A BROAD BASE CANNOT TWIST.',
        },
        what_goes_wrong: 'IN MALROTATION, ROTATION IS INCOMPLETE. THE DUODENOJEJUNAL FLEXURE SITS TOO LOW AND TOO FAR RIGHT, AND THE CAECUM SITS HIGH IN THE RIGHT UPPER QUADRANT. THE TWO ENDS ARE CLOSE TOGETHER, SO THE MESENTERY HANGS ON A NARROW STALK — AND A NARROW STALK TWISTS.',
        the_two_ways_malrotation_causes_obstruction: {
          volvulus: 'THE MIDGUT ROTATES AROUND THE NARROW MESENTERIC PEDICLE, OCCLUDING THE SUPERIOR MESENTERIC ARTERY AND VEIN. THE ENTIRE MIDGUT IS AT RISK SIMULTANEOUSLY. THIS IS THE CATASTROPHE.',
          ladd_bands: 'ABNORMAL PERITONEAL BANDS RUN FROM THE MALPOSITIONED CAECUM ACROSS THE DUODENUM TO THE RIGHT POSTERIOR ABDOMINAL WALL, COMPRESSING THE DUODENUM EXTRINSICALLY. This causes obstruction WITHOUT volvulus and can present more insidiously with intermittent vomiting and failure to thrive.',
        },
        the_timing_of_presentation: 'ROUGHLY HALF TO TWO THIRDS PRESENT IN THE FIRST MONTH OF LIFE, AND THE LARGE MAJORITY WITHIN THE FIRST YEAR. BUT MALROTATION CAN PRESENT AT ANY AGE, INCLUDING IN ADULTS, WITH INTERMITTENT ABDOMINAL PAIN, VOMITING OR CHRONIC OBSTRUCTION — AND IT IS THEN MISDIAGNOSED FOR YEARS AS FUNCTIONAL ABDOMINAL PAIN OR AN EATING DISORDER. A CHILD OR ADULT WITH RECURRENT UNEXPLAINED BILIOUS VOMITING DESERVES AN UPPER GASTROINTESTINAL CONTRAST STUDY.',
      },

      section_3_clerking_and_examination: {
        history: 'Born at term, uncomplicated pregnancy and delivery. Breastfeeding well and gaining weight. This morning she vomited three times; the mother describes the vomit as bright green. She has been slightly less interested in feeding since. Her last stool was normal this morning.',
        the_questions: 'THE EXACT COLOUR OF THE VOMIT — ask the parent to describe it, and if there is a nappy or cloth, LOOK AT IT · onset and frequency · feeding and weight · stool pattern and any blood · abdominal distension · and antenatal history, since some anomalies are detected on scan.',
        the_associations_to_ask_about: 'MALROTATION IS ASSOCIATED WITH CONGENITAL DIAPHRAGMATIC HERNIA, EXOMPHALOS AND GASTROSCHISIS, and with HETEROTAXY AND CONGENITAL CARDIAC DISEASE. A child with any of these has a much higher likelihood of malrotation, and many are screened.',
        vitals: 'Temperature 36.9. Pulse 150. Respiratory rate 44. Capillary refill 2 seconds. Alert. Weight 3.6 kg. SHE LOOKS WELL — WHICH IS THE POINT.',
        examination: {
          the_abdomen: 'SOFT, NOT DISTENDED, NOT TENDER. THIS IS ENTIRELY COMPATIBLE WITH MIDGUT VOLVULUS AND MUST NOT BE REASSURING. The obstruction is high, so there is little bowel below it to distend.',
          the_late_signs_that_mean_you_are_too_late: 'ABDOMINAL DISTENSION · TENDERNESS AND GUARDING · ERYTHEMA OR BLUISH DISCOLOURATION OF THE ABDOMINAL WALL · BLOOD PER RECTUM · SHOCK, tachycardia, poor perfusion and metabolic acidosis. THESE INDICATE ESTABLISHED ISCHAEMIA OR INFARCTION.',
          the_rest: 'Assess hydration and perfusion. Examine the groins for a hernia. Check for other anomalies. Assess for sepsis, which is the main differential in an unwell neonate.',
        },
      },

      section_4_the_differential_of_bilious_vomiting_in_a_neonate: {
        one_malrotation_with_volvulus: 'MUST BE EXCLUDED FIRST BECAUSE IT IS THE MOST TIME-CRITICAL.',
        two_duodenal_atresia: 'Presents in the FIRST DAY OR TWO of life. Classic "DOUBLE BUBBLE" on plain radiograph — gas in the stomach and the proximal duodenum with NO distal gas. Strongly associated with DOWN SYNDROME, in roughly a third. Note that the vomiting is bilious only if the atresia is DISTAL to the ampulla, which is the majority.',
        three_jejunal_or_ileal_atresia: 'Distal obstruction with more distension and multiple dilated loops on the film.',
        four_meconium_ileus: 'Inspissated meconium obstructing the terminal ileum. STRONGLY ASSOCIATED WITH CYSTIC FIBROSIS — a baby with meconium ileus needs cystic fibrosis testing. Contrast enema may be both diagnostic and therapeutic.',
        five_hirschsprung_disease: 'FAILURE TO PASS MECONIUM WITHIN 48 HOURS, abdominal distension, and often an explosive release of stool and gas on rectal examination. Diagnosed by rectal suction biopsy showing absent ganglion cells.',
        six_necrotising_enterocolitis: 'Mainly PREMATURE infants. Feed intolerance, distension, bloody stool and systemic deterioration. PNEUMATOSIS INTESTINALIS on the radiograph is characteristic.',
        seven_sepsis_and_ileus: 'A very common cause of vomiting in a neonate and always considered — but SEPSIS DOES NOT EXCLUDE MALROTATION, and treating a septic-looking baby with antibiotics while the midgut infarcts is a recognised disaster.',
        eight_incarcerated_inguinal_hernia: 'Examine the groins in every vomiting infant. It is easily reduced early and catastrophic late.',
      },

      section_5_investigations: {
        the_upper_gastrointestinal_contrast_study: {
          the_status: 'THE GOLD STANDARD AND THE EMERGENCY INVESTIGATION. IT MUST BE AVAILABLE OUT OF HOURS, AND IF IT IS NOT, THE BABY MUST BE TRANSFERRED TO A CENTRE WHERE IT IS — THAT NIGHT.',
          what_it_shows: 'THE POSITION OF THE DUODENOJEJUNAL FLEXURE, WHICH IS THE KEY ANATOMICAL LANDMARK. NORMALLY IT LIES TO THE LEFT OF THE VERTEBRAL BODY MIDLINE AT THE LEVEL OF THE DUODENAL BULB. IN MALROTATION IT IS LOW AND TO THE RIGHT.',
          the_volvulus_signs: 'A CORKSCREW OR SPIRAL APPEARANCE OF THE DUODENUM AND PROXIMAL JEJUNUM as contrast passes through the twisted segment · a BEAK-LIKE TAPERING at the point of obstruction · or complete duodenal obstruction.',
          the_practical_points: 'USE WATER-SOLUBLE CONTRAST OR DILUTE BARIUM ACCORDING TO LOCAL PROTOCOL. THE STUDY MUST BE PERFORMED AND INTERPRETED BY SOMEONE EXPERIENCED IN PAEDIATRIC PRACTICE, because the position of the duodenojejunal flexure is easy to misjudge and both false positives and false negatives occur.',
        },
        ultrasound: 'THE WHIRLPOOL SIGN — the superior mesenteric vein and mesentery spiralling clockwise around the superior mesenteric artery — IS HIGHLY SUGGESTIVE OF VOLVULUS. Also look for INVERSION OF THE NORMAL RELATIONSHIP, where the superior mesenteric VEIN lies to the LEFT of the ARTERY instead of the right. ULTRASOUND IS OPERATOR-DEPENDENT AND A NORMAL SCAN DOES NOT EXCLUDE MALROTATION, but it is fast, radiation-free and increasingly used as a first test.',
        plain_abdominal_radiograph: {
          the_findings: 'May show a "double bubble" with some distal gas, a paucity of distal bowel gas, or be COMPLETELY NORMAL.',
          the_rule: 'A NORMAL ABDOMINAL RADIOGRAPH DOES NOT EXCLUDE MALROTATION OR VOLVULUS. IT MUST NEVER BE USED AS A RULE-OUT TEST, and a normal film is one of the commonest reasons a baby with green vomit is sent home.',
        },
        bloods: 'Full blood count · UREA AND ELECTROLYTES · GLUCOSE, since neonates become hypoglycaemic quickly · BLOOD GAS WITH LACTATE, where a metabolic acidosis with a rising lactate suggests ischaemia and is an indication to go straight to theatre · CRP · blood cultures · GROUP AND CROSS-MATCH · clotting.',
        the_overriding_principle: 'IF THE BABY IS UNSTABLE, HAS PERITONITIS, OR HAS A METABOLIC ACIDOSIS SUGGESTING ISCHAEMIA, GO STRAIGHT TO THEATRE. IMAGING IS FOR THE STABLE BABY IN WHOM THE DIAGNOSIS IS UNCERTAIN — IT IS NOT A PRECONDITION FOR LAPAROTOMY IN A SICK ONE.',
      },

      section_6_management: {
        a_immediate: 'NIL BY MOUTH. NASOGASTRIC TUBE on free drainage. INTRAVENOUS ACCESS with fluid resuscitation — 10 to 20 mL/kg boluses of balanced crystalloid as needed, then maintenance plus deficit. FOR THIS 3.6 kg BABY, A 20 mL/kg BOLUS IS 72 mL. Correct glucose and electrolytes. BROAD-SPECTRUM ANTIBIOTICS. Keep warm — neonates lose heat fast and hypothermia worsens acidosis and coagulopathy. Analgesia. CROSS-MATCH. TELEPHONE THE PAEDIATRIC SURGICAL CENTRE IMMEDIATELY.',
        b_the_ladd_procedure: {
          the_four_steps: {
            one: 'UNTWIST THE VOLVULUS — ANTICLOCKWISE, because the twist is clockwise. The bowel is delivered and derotated, often through more than one full turn.',
            two: 'DIVIDE THE LADD BANDS crossing the duodenum, relieving the extrinsic obstruction.',
            three: 'BROADEN THE MESENTERIC BASE by mobilising the duodenum to the right and the caecum to the left, placing the small bowel on the RIGHT side of the abdomen and the colon on the LEFT. THE POINT IS TO RECREATE A BROAD MESENTERIC BASE THAT CANNOT TWIST AGAIN.',
            four: 'APPENDICECTOMY, because the caecum is left in an abnormal position on the left and a future appendicitis would present atypically and be missed.',
          },
          the_teaching_point: 'THE OPERATION DOES NOT RESTORE NORMAL ANATOMY — IT DELIBERATELY CREATES A NON-ROTATED BUT SAFE ARRANGEMENT WITH A WIDE MESENTERIC BASE. Understanding that explains why the appendix is removed and why the bowel is left in an unusual position.',
        },
        c_the_bowel_viability_decision: {
          if_viable: 'Untwist, perform the Ladd procedure, and close.',
          if_frankly_necrotic_and_limited: 'Resect the dead segment with primary anastomosis or stomas.',
          if_extensive_ischaemia_of_doubtful_viability: {
            the_approach: 'UNTWIST, WARM THE BOWEL, WAIT, AND PERFORM A PLANNED SECOND-LOOK LAPAROTOMY AT 24 TO 48 HOURS. RESECT ONLY WHAT IS CLEARLY DEAD AT THE FIRST OPERATION.',
            why: 'BOWEL THAT LOOKS NON-VIABLE IMMEDIATELY AFTER DEROTATION FREQUENTLY RECOVERS ONCE PERFUSED. RESECTING IT AT THE FIRST OPERATION CONVERTS A SURVIVABLE ILLNESS INTO LIFELONG SHORT BOWEL SYNDROME. THIS IS THE SINGLE MOST CONSEQUENTIAL JUDGEMENT IN THE OPERATION.',
          },
          if_the_entire_midgut_is_infarcted: 'A devastating situation. Resection leaves short bowel syndrome with lifelong parenteral nutrition, and in some cases a decision is made not to resect. THIS IS A SENIOR DECISION MADE WITH THE FAMILY, AND IT MUST BE DISCUSSED HONESTLY AND DOCUMENTED.',
        },
        d_afterwards: 'Neonatal intensive care. Parenteral nutrition until enteral feeding is established. Monitor for anastomotic leak, sepsis and adhesive obstruction. RECURRENT VOLVULUS AFTER A PROPERLY PERFORMED LADD PROCEDURE IS UNCOMMON BUT POSSIBLE — parents must know the symptoms. ADHESIVE SMALL BOWEL OBSTRUCTION IS A LIFELONG RISK after any laparotomy in infancy.',
        e_the_asymptomatic_incidental_malrotation: 'Malrotation is sometimes found incidentally on imaging for another reason. WHETHER TO PERFORM A PROPHYLACTIC LADD PROCEDURE IN AN ASYMPTOMATIC CHILD IS GENUINELY DEBATED — it weighs the lifetime risk of catastrophic volvulus against operative and adhesion risk. IT IS A PAEDIATRIC SURGICAL DECISION, AND OLDER CHILDREN AND ADULTS ARE OFTEN MANAGED DIFFERENTLY FROM INFANTS.',
      },

      section_7_teaching_points: {
        bonus_1_green_vomit_in_a_neonate_is_the_rule_to_remember:
          'Bilious vomiting in a neonate is malrotation with midgut volvulus until proven otherwise. Bile enters at the ampulla, so green vomit places the obstruction below it. It is the single most important rule in paediatric surgery.',
        bonus_2_the_well_looking_baby_is_the_dangerous_one:
          'The abdomen is often soft and non-distended because the obstruction is high with nothing below it to distend. By the time there is distension, tenderness, abdominal wall discolouration or bloody stool, the midgut is usually already dead. The presentation you want is the one that gets sent home.',
        bonus_3_normal_rotation_exists_to_create_a_broad_mesenteric_base:
          '270 degrees of anticlockwise rotation places the duodenojejunal flexure and the caecum as far apart as possible, giving a broad diagonal mesenteric base that cannot twist. Malrotation leaves them close together on a narrow stalk — and a narrow stalk twists.',
        bonus_4_a_normal_abdominal_radiograph_excludes_nothing:
          'It may be completely normal in volvulus. It must never be used as a rule-out test, and a normal film is one of the commonest reasons a baby with green vomit is discharged.',
        bonus_5_the_upper_gi_contrast_study_is_an_emergency_investigation:
          'It shows the position of the duodenojejunal flexure — normally left of the midline at the level of the duodenal bulb — and the corkscrew of a volvulus. It must be available out of hours, and if it is not, the baby is transferred that night.',
        bonus_6_untwist_anticlockwise_and_do_not_resect_early:
          'The twist is clockwise, so derotation is anticlockwise. And bowel that looks dead immediately after derotation frequently recovers once perfused — resecting at the first operation converts a survivable illness into lifelong short bowel syndrome. Plan a second look.',
        bonus_7_the_ladd_procedure_does_not_restore_normal_anatomy:
          'It deliberately creates a non-rotated but safe arrangement with a wide mesenteric base — small bowel right, colon left — and the appendix is removed because a future appendicitis in a left-sided caecum would present atypically and be missed.',
        trap_1: 'Sepsis does not exclude malrotation — treating a septic-looking baby with antibiotics while the midgut infarcts is a recognised disaster.',
        trap_2: 'Examine the GROINS in every vomiting infant — an incarcerated hernia is easy early and catastrophic late.',
        trap_3: 'Malrotation presents at any age, including in adults, and is misdiagnosed for years as functional abdominal pain.',
        trap_4: 'Look for the WHIRLPOOL SIGN and an inverted superior mesenteric vein-artery relationship on ultrasound — but a normal scan does not exclude it.',
        trap_5: 'An unstable baby, peritonitis or a metabolic acidosis means theatre, not imaging.',
        trap_6: 'Meconium ileus means test for cystic fibrosis; duodenal atresia means look for Down syndrome.',
        trap_7: 'Keep the baby WARM — neonates lose heat fast and hypothermia worsens acidosis and coagulopathy.',
        one_line_summary: 'Bilious vomiting in a 3-week-old. She looks well and that means nothing — telephone the paediatric surgeons now and get an urgent upper GI contrast study, because the entire midgut can infarct while everyone waits for her to look unwell.',
      },
    },
    warnings: [
      'BILIOUS (GREEN) VOMITING IN A NEONATE IS MALROTATION WITH MIDGUT VOLVULUS UNTIL PROVEN OTHERWISE.',
      'A WELL-LOOKING BABY WITH A SOFT ABDOMEN IS ENTIRELY COMPATIBLE WITH VOLVULUS — the obstruction is high with nothing below to distend.',
      'By the time there is distension, tenderness, abdominal wall discolouration or bloody stool, the midgut is usually ALREADY DEAD.',
      'DO NOT OBSERVE, do not arrange outpatient review, and do not attribute it to reflux or gastroenteritis.',
      'A NORMAL ABDOMINAL RADIOGRAPH DOES NOT EXCLUDE MALROTATION OR VOLVULUS.',
      'The UPPER GI CONTRAST STUDY is an EMERGENCY investigation — transfer that night if it is not available.',
      'SEPSIS DOES NOT EXCLUDE MALROTATION — treating a septic-looking baby while the midgut infarcts is a recognised disaster.',
      'AN UNSTABLE BABY, PERITONITIS OR METABOLIC ACIDOSIS MEANS THEATRE, NOT IMAGING.',
      'UNTWIST ANTICLOCKWISE — the volvulus twists clockwise.',
      'DO NOT RESECT DOUBTFUL BOWEL AT THE FIRST OPERATION — plan a second look at 24 to 48 hours or you create lifelong short bowel syndrome.',
      'The LADD PROCEDURE does not restore normal anatomy — it creates a safe wide-based arrangement, and the appendix is removed deliberately.',
      'EXAMINE THE GROINS in every vomiting infant.',
      'Malrotation presents at ANY AGE including adults, and is misdiagnosed for years as functional abdominal pain.',
      'KEEP THE BABY WARM — hypothermia worsens acidosis and coagulopathy.',
      'Fluid volumes here are teaching examples. Follow local neonatal and paediatric surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Contrast choice, ultrasound-first pathways and prophylactic surgery for incidental malrotation vary between centres.',
      'Decisions about extensive resection and short bowel syndrome are senior decisions made with the family.',
    ],
    cards: [
      { q: 'What does bilious vomiting in a neonate mean?', a: 'Malrotation with midgut volvulus until proven otherwise — the single most important rule in paediatric surgery.' },
      { q: 'Why is green vomit significant?', a: 'Bile enters at the ampulla of Vater, so bilious vomit places the obstruction distal to it.' },
      { q: 'Why can the baby look well?', a: 'The obstruction is high with little bowel below to distend — a soft non-tender abdomen is compatible with volvulus.' },
      { q: 'What is the purpose of normal 270-degree rotation?', a: 'It places the duodenojejunal flexure and caecum far apart, creating a broad mesenteric base that cannot twist.' },
      { q: 'What are Ladd bands?', a: 'Peritoneal bands from the malpositioned caecum crossing and compressing the duodenum.' },
      { q: 'What does the upper GI contrast study show?', a: 'The duodenojejunal flexure position — normally left of midline at the duodenal bulb — and a corkscrew or beak in volvulus.' },
      { q: 'What is the whirlpool sign?', a: 'The superior mesenteric vein and mesentery spiralling around the artery on ultrasound.' },
      { q: 'Does a normal abdominal radiograph exclude volvulus?', a: 'No — it may be completely normal, and this is a common reason babies are sent home.' },
      { q: 'Name the four steps of the Ladd procedure.', a: 'Untwist anticlockwise, divide Ladd bands, broaden the mesenteric base, and perform appendicectomy.' },
      { q: 'Why is the appendix removed?', a: 'The caecum is left on the left, so a future appendicitis would present atypically and be missed.' },
      { q: 'Why not resect doubtful bowel at the first operation?', a: 'Bowel that looks dead after derotation frequently recovers once perfused — early resection creates short bowel syndrome.' },
      { q: 'Which conditions are associated with malrotation?', a: 'Congenital diaphragmatic hernia, exomphalos, gastroschisis, heterotaxy and congenital cardiac disease.' },
    ],
    checks: [
      'Colour of the vomit established and, if possible, seen',
      'Bilious vomiting treated as an emergency regardless of how well the baby looks',
      'Paediatric surgeons telephoned immediately',
      'Nil by mouth with nasogastric tube on free drainage',
      'Fluid resuscitation, glucose and electrolytes corrected',
      'Broad-spectrum antibiotics given',
      'Baby kept warm',
      'Blood gas with lactate checked for ischaemia',
      'Cross-match arranged',
      'Urgent upper GI contrast study arranged, or transfer organised',
      'Normal plain radiograph NOT used to exclude the diagnosis',
      'Straight to theatre if unstable, peritonitic or acidotic',
      'Second-look laparotomy planned if bowel viability is doubtful',
      'Honest discussion with the family about extensive infarction if relevant',
      'Groins examined for hernia',
    ],
    related: ['vomiting_in_the_infant_the_bilious_versus_non_bilious_split'],
  },

  {
    id: 'AS-CASE-0058',
    type: 'case',
    specialty: 'Surgery — Cardiothoracic surgery',
    teaching_case: true,
    title: 'CASE: Pneumonia That Will Not Settle After Ten Days of Antibiotics',
    short: 'Case: empyema and complicated parapneumonic effusion',
    summary:
      'A 64-year-old still febrile after ten days of antibiotics with a large left effusion. Teaches Light criteria, the pleural fluid pH threshold that decides drainage, the three stages of empyema and why timing determines whether a drain or a surgeon is needed.',
    domains: ['cardiothoracic_surgery', 'respiratory', 'infectious_disease', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case empyema', 'parapneumonic effusion case', 'light criteria case',
      'pleural fluid ph', 'chest drain empyema', 'fibrinolytic pleural',
      'decortication', 'vats empyema', 'loculated effusion',
    ],
    terms: [
      'case', 'empyema', 'parapneumonic effusion', 'light criteria', 'exudate', 'transudate',
      'pleural fluid ph', 'pleural fluid glucose', 'pleural fluid ldh', 'loculation',
      'fibrinopurulent', 'organising stage', 'decortication', 'vats',
      'intrapleural alteplase dornase', 'chest drain', 'ultrasound guided',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '64-year-old man treated for community-acquired pneumonia ten days ago, still febrile with night sweats, worsening breathlessness and pleuritic pain. Chest radiograph shows a large left-sided effusion.',

      section_1_the_rule_that_should_trigger_the_thought: {
        the_statement:
          'A PATIENT WITH PNEUMONIA WHO FAILS TO IMPROVE AFTER 48 TO 72 HOURS OF APPROPRIATE ANTIBIOTICS, OR WHO HAS PERSISTENT FEVER, RISING INFLAMMATORY MARKERS OR AN EFFUSION, HAS A COMPLICATED PARAPNEUMONIC EFFUSION OR EMPYEMA UNTIL PROVEN OTHERWISE. THE ANSWER IS NOT A DIFFERENT ANTIBIOTIC — IT IS AN ULTRASOUND AND A NEEDLE.',
        why_antibiotics_alone_fail: 'PUS IN A CLOSED SPACE IS NOT ADEQUATELY PENETRATED BY ANTIBIOTICS, AND THE LOW pH AND LOW OXYGEN TENSION OF AN EMPYEMA IMPAIR BOTH ANTIBIOTIC ACTIVITY AND NEUTROPHIL FUNCTION. IT IS THE SAME PRINCIPLE AS CHOLANGITIS, THE OBSTRUCTED INFECTED KIDNEY AND ANY UNDRAINED ABSCESS: SOURCE CONTROL IS THE TREATMENT.',
        the_frequency: 'AROUND 40% OF PATIENTS HOSPITALISED WITH PNEUMONIA DEVELOP A PLEURAL EFFUSION, AND A SUBSTANTIAL MINORITY OF THOSE BECOME COMPLICATED. IT IS COMMON, AND MORTALITY IS SIGNIFICANT — commonly quoted around 15 to 20%, higher in the elderly and comorbid.',
      },

      section_2_clerking: {
        history: 'Ten days ago treated with oral antibiotics for pneumonia. Initially slightly better, then worse. Persistent fever with drenching NIGHT SWEATS. Increasing breathlessness. Sharp LEFT-SIDED PLEURITIC PAIN. Poor appetite and 4 kg weight loss. Productive cough.',
        the_risk_factors: 'DIABETES · ALCOHOL EXCESS · intravenous drug use · POOR DENTITION AND PERIODONTAL DISEASE, which is a major source of anaerobes · ASPIRATION RISK — stroke, reduced consciousness, oesophageal disease, alcohol · immunosuppression · malignancy · previous thoracic surgery or trauma · and delayed or inadequate initial treatment.',
        the_aspiration_point: 'ASK ABOUT SWALLOWING, ALCOHOL, SEIZURES, DENTAL HEALTH AND ANYTHING CAUSING REDUCED CONSCIOUSNESS. ASPIRATION-RELATED EMPYEMA IS TYPICALLY POLYMICROBIAL WITH ANAEROBES, IS FOUL-SMELLING, AND REQUIRES ANAEROBIC COVER THAT SOME PNEUMONIA REGIMENS DO NOT PROVIDE.',
        vitals: 'BP 118/68 mmHg. Pulse 108. Respiratory rate 26. Temperature 38.4. Saturation 91% on air. CRP 240, white cells 19.4.',
        examination: 'Reduced expansion on the LEFT. STONY DULL to percussion at the left base with ABSENT breath sounds and reduced vocal resonance. Tracheal position central. Look for FINGER CLUBBING, which occurs in chronic empyema and lung abscess. Examine the MOUTH AND TEETH. Look for an EMPYEMA NECESSITANS — a rare presentation where pus tracks through the chest wall to form a subcutaneous collection.',
      },

      section_3_the_stages_which_determine_the_treatment: {
        stage_1_exudative_simple_parapneumonic: {
          what: 'Sterile inflammatory fluid crossing into the pleural space because of increased capillary permeability from the adjacent pneumonia.',
          the_fluid: 'Free-flowing, clear, pH above 7.2, glucose normal, negative Gram stain and culture.',
          the_treatment: 'ANTIBIOTICS ALONE. It resolves as the pneumonia resolves.',
        },
        stage_2_fibrinopurulent_complicated: {
          what: 'BACTERIAL INVASION OF THE PLEURAL SPACE. Neutrophils accumulate, fibrin is deposited, and SEPTATIONS AND LOCULATIONS FORM, dividing the space into compartments.',
          the_fluid: 'Turbid or frankly purulent. pH BELOW 7.2. GLUCOSE LOW. LDH HIGH. Gram stain or culture may be positive.',
          the_treatment: 'DRAINAGE IS REQUIRED. Antibiotics alone will fail. Intrapleural fibrinolytics may be needed once loculations form.',
        },
        stage_3_organising: {
          what: 'FIBROBLASTS PRODUCE A THICK, INELASTIC FIBROUS PEEL OVER THE VISCERAL AND PARIETAL PLEURA, TRAPPING THE LUNG AND PREVENTING IT FROM RE-EXPANDING.',
          the_treatment: 'A DRAIN CANNOT FIX THIS. SURGICAL DECORTICATION IS REQUIRED TO PEEL THE FIBROUS RIND OFF THE LUNG.',
          the_timing_lesson: 'THE STAGES PROGRESS OVER DAYS TO WEEKS. THE LONGER THE DELAY, THE MORE LIKELY SURGERY BECOMES. A COLLECTION DRAINED IN WEEK ONE NEEDS A TUBE; THE SAME COLLECTION IN WEEK FOUR NEEDS A THORACOTOMY. THAT IS THE ENTIRE ARGUMENT FOR EARLY SAMPLING.',
        },
      },

      section_4_investigations: {
        the_light_criteria: {
          the_purpose: 'TO DISTINGUISH AN EXUDATE FROM A TRANSUDATE, WHICH SEPARATES INFLAMMATORY AND INFECTIVE CAUSES FROM PRESSURE-DRIVEN ONES SUCH AS HEART FAILURE.',
          the_criteria: 'THE FLUID IS AN EXUDATE IF ANY ONE OF: PLEURAL FLUID PROTEIN TO SERUM PROTEIN RATIO GREATER THAN 0.5 · PLEURAL FLUID LDH TO SERUM LDH RATIO GREATER THAN 0.6 · PLEURAL FLUID LDH GREATER THAN TWO THIRDS OF THE UPPER LIMIT OF THE NORMAL SERUM LDH RANGE.',
          the_practical_requirement: 'A PAIRED SERUM SAMPLE MUST BE TAKEN AT THE SAME TIME AS THE PLEURAL FLUID. THE CRITERIA CANNOT BE APPLIED WITHOUT IT, AND FORGETTING THE SERUM SAMPLE IS THE COMMONEST PRACTICAL ERROR IN PLEURAL ASSESSMENT.',
          the_known_limitation: 'LIGHT CRITERIA ARE SENSITIVE FOR EXUDATES BUT MISCLASSIFY A PROPORTION OF TRANSUDATES AS EXUDATES, PARTICULARLY IN PATIENTS ON DIURETICS FOR HEART FAILURE, BECAUSE DIURESIS CONCENTRATES THE FLUID. IF THE CLINICAL PICTURE IS CLEARLY HEART FAILURE, A SERUM-TO-PLEURAL-FLUID ALBUMIN GRADIENT ABOVE 12 g/L SUGGESTS A TRANSUDATE DESPITE THE CRITERIA.',
        },
        the_pleural_fluid_ph_which_is_the_decision_point: {
          the_threshold: 'A PLEURAL FLUID pH BELOW 7.2 IN A PARAPNEUMONIC EFFUSION INDICATES A COMPLICATED EFFUSION AND IS AN INDICATION FOR DRAINAGE. IT IS THE SINGLE MOST USEFUL NUMBER IN THE ASSESSMENT.',
          how_to_measure_it_properly: 'THE SAMPLE MUST BE COLLECTED ANAEROBICALLY IN A HEPARINISED SYRINGE AND ANALYSED IN A BLOOD GAS MACHINE. DO NOT USE A pH STICK, WHICH IS UNRELIABLE. DO NOT PUT LOCAL ANAESTHETIC IN THE SYRINGE — LIDOCAINE IS ACIDIC AND FALSELY LOWERS THE READING. AND DO NOT PUT FRANK PUS THROUGH A BLOOD GAS ANALYSER, because it damages the machine — and it is unnecessary, since obvious pus needs no pH to justify drainage.',
          the_other_markers: 'GLUCOSE BELOW ROUGHLY 2.2 mmol/L and LDH ABOVE ROUGHLY 1000 IU/L also indicate a complicated effusion. THEY ARE USEFUL IF THE pH IS UNAVAILABLE, AND GLUCOSE IS THE MOST PRACTICAL SUBSTITUTE.',
          the_governing_rule: 'FRANK PUS, A POSITIVE GRAM STAIN OR A POSITIVE CULTURE MEANS DRAIN IT — NO FURTHER TESTS ARE NEEDED.',
        },
        thoracic_ultrasound: {
          the_status: 'ESSENTIAL, AND IT SHOULD BE USED FOR EVERY PLEURAL PROCEDURE.',
          why: 'IT IDENTIFIES SEPTATIONS AND LOCULATIONS THAT A CHEST RADIOGRAPH CANNOT SEE, ESTIMATES VOLUME, AND — CRITICALLY — GUIDES A SAFE SITE FOR ASPIRATION OR DRAIN INSERTION. ULTRASOUND-GUIDED PLEURAL PROCEDURES HAVE SUBSTANTIALLY LOWER COMPLICATION RATES THAN LANDMARK TECHNIQUES, AND PERFORMING THEM WITHOUT IMAGING IS NO LONGER ACCEPTABLE PRACTICE IN MOST SETTINGS.',
          the_marking_caveat: 'MARK AND PUNCTURE AT THE SAME SITTING WITH THE PATIENT IN THE SAME POSITION. A SITE MARKED ON THE WARD AND PUNCTURED AN HOUR LATER IN A DIFFERENT POSITION IS A RECOGNISED CAUSE OF ORGAN INJURY.',
        },
        ct_thorax_with_contrast: 'Defines the extent, shows loculations and pleural thickening, identifies an underlying lung abscess or malignancy, and plans surgery. THE "SPLIT PLEURA SIGN" — enhancement and separation of the thickened visceral and parietal pleura around the collection — IS CHARACTERISTIC OF EMPYEMA AND HELPS DISTINGUISH IT FROM A LUNG ABSCESS, WHICH HAS A THICK IRREGULAR WALL AND AN ACUTE ANGLE WITH THE CHEST WALL.',
        microbiology: 'SEND PLEURAL FLUID FOR GRAM STAIN, CULTURE AND SENSITIVITY, AND INOCULATE SOME INTO BLOOD CULTURE BOTTLES, WHICH SIGNIFICANTLY INCREASES THE YIELD. SEND BLOOD CULTURES. SEND FLUID FOR CYTOLOGY, TUBERCULOSIS CULTURE AND ACID-FAST STAIN WHERE RELEVANT. NOTE THAT CULTURES ARE NEGATIVE IN A LARGE PROPORTION, particularly after antibiotics — a negative culture does not mean the fluid is not infected.',
        the_tuberculosis_consideration: 'IN HIGH-BURDEN SETTINGS, A LYMPHOCYTE-PREDOMINANT EXUDATE WITH A HIGH PROTEIN AND A RAISED ADENOSINE DEAMINASE SUGGESTS TUBERCULOUS PLEURAL EFFUSION. IT IS TREATED WITH ANTITUBERCULOUS THERAPY, NOT PRIMARILY BY DRAINAGE, AND MISSING IT LEADS TO PROLONGED INEFFECTIVE ANTIBACTERIAL TREATMENT.',
      },

      section_5_management: {
        a_antibiotics: 'INTRAVENOUS, GUIDED BY CULTURE WHERE AVAILABLE AND LOCAL POLICY OTHERWISE. INCLUDE ANAEROBIC COVER, particularly where aspiration is likely or the fluid is foul-smelling. A PROLONGED COURSE IS REQUIRED — typically several weeks in total, with a switch to oral once the patient is improving and the collection is drained. NOTE THAT MOST ANTIBIOTICS PENETRATE THE PLEURAL SPACE ADEQUATELY EXCEPT AMINOGLYCOSIDES, WHICH ARE INACTIVATED BY THE LOW pH AND SHOULD NOT BE RELIED ON.',
        b_drainage: {
          the_indications: 'FRANK PUS · POSITIVE GRAM STAIN OR CULTURE · pH BELOW 7.2 · and often a large effusion with ongoing sepsis.',
          the_drain: 'A CHEST DRAIN INSERTED UNDER ULTRASOUND GUIDANCE IN THE SAFE TRIANGLE. SMALL-BORE DRAINS (10 to 14 French) ARE AS EFFECTIVE AS LARGE-BORE ONES FOR EMPYEMA AND ARE MORE COMFORTABLE — THIS WAS DEMONSTRATED IN TRIAL DATA AND OVERTURNED THE ASSUMPTION THAT PUS NEEDS A BIG TUBE. FLUSH SMALL DRAINS REGULARLY WITH SALINE TO PREVENT BLOCKAGE.',
          the_technique_points: 'ULTRASOUND GUIDANCE ALWAYS. Blunt dissection, never a trocar. The safe triangle, above the rib below. Secure well. Connect to an underwater seal.',
        },
        c_intrapleural_fibrinolytics: {
          what_they_are: 'INTRAPLEURAL ALTEPLASE COMBINED WITH DORNASE ALFA, INSTILLED THROUGH THE CHEST DRAIN.',
          why_the_combination_matters: 'ALTEPLASE BREAKS DOWN FIBRIN SEPTATIONS, OPENING UP LOCULATED COMPARTMENTS. DORNASE ALFA DIGESTS EXTRACELLULAR DNA FROM DEGENERATE NEUTROPHILS, WHICH IS WHAT MAKES THE PUS THICK AND VISCOUS. THE MIST2 TRIAL SHOWED THAT THE COMBINATION IMPROVED FLUID DRAINAGE AND REDUCED THE NEED FOR SURGERY, WHEREAS NEITHER AGENT ALONE WAS EFFECTIVE — AND DORNASE ALONE WAS WORSE THAN PLACEBO. THE POINT IS THAT THEY DO TWO DIFFERENT JOBS AND BOTH ARE REQUIRED.',
          the_practical: 'Given as instillations over several days with the drain clamped for a period after each dose. Bleeding is the main risk.',
        },
        d_surgery: {
          the_indications: 'FAILURE TO IMPROVE AFTER ADEQUATE DRAINAGE AND FIBRINOLYTICS · EXTENSIVE LOCULATION · A THICK PLEURAL PEEL TRAPPING THE LUNG · ONGOING SEPSIS · and a chronic organised empyema.',
          the_operations: 'VIDEO-ASSISTED THORACOSCOPIC SURGERY (VATS) with debridement and washout, which is the usual first surgical approach and may be used early in fit patients. OPEN THORACOTOMY AND DECORTICATION for the organised stage, peeling the fibrous rind off the lung. In very frail patients, an OPEN WINDOW THORACOSTOMY or long-term drain may be used for palliation.',
          the_timing_message: 'REFER TO THORACIC SURGERY EARLY RATHER THAN AFTER WEEKS OF FAILED MEDICAL MANAGEMENT. THE OPERATION IS EASIER AND SMALLER IN THE FIBRINOPURULENT STAGE THAN IN THE ORGANISED STAGE, AND OUTCOMES ARE BETTER.',
        },
        e_supportive_and_the_things_that_get_forgotten: {
          nutrition: 'THESE PATIENTS ARE PROFOUNDLY CATABOLIC AND OFTEN MALNOURISHED BY PRESENTATION. NUTRITIONAL SUPPORT IS PART OF THE TREATMENT AND AFFECTS HEALING AND OUTCOME.',
          physiotherapy: 'Chest physiotherapy and early mobilisation to promote lung re-expansion.',
          analgesia: 'A drain and pleuritic pain both restrict breathing. GOOD ANALGESIA IS A RESPIRATORY TREATMENT.',
          thromboprophylaxis: 'Sepsis plus immobility.',
          the_dental_referral: 'IF POOR DENTITION IS THE SOURCE, ARRANGE DENTAL ASSESSMENT — otherwise it recurs. It is a genuinely useful referral that is almost never made.',
          the_underlying_cause: 'CONSIDER AND EXCLUDE AN UNDERLYING BRONCHIAL OBSTRUCTION OR MALIGNANCY, particularly in a smoker or where the pneumonia recurs in the same lobe. Arrange follow-up imaging to confirm resolution and bronchoscopy where indicated.',
        },
      },

      section_6_teaching_points: {
        bonus_1_failure_to_improve_is_the_trigger:
          'A patient with pneumonia not improving after 48 to 72 hours, or with persistent fever, rising markers or an effusion, needs an ultrasound and a needle — not a different antibiotic. Pus in a closed space is not penetrated by antibiotics, and low pH and oxygen tension impair both the drug and the neutrophils.',
        bonus_2_the_pleural_fluid_ph_decides:
          'Below 7.2 in a parapneumonic effusion means drainage. Collect it anaerobically in a heparinised syringe through a blood gas machine — no pH sticks, no lidocaine in the syringe (it is acidic and falsely lowers the reading), and no frank pus through the analyser, which damages it and is unnecessary anyway.',
        bonus_3_take_a_paired_serum_sample:
          'Light criteria are ratios and cannot be applied without simultaneous serum protein and LDH. Forgetting the serum sample is the commonest practical error in pleural assessment.',
        bonus_4_the_stage_determines_whether_a_tube_or_a_surgeon_is_needed:
          'Exudative stage: antibiotics. Fibrinopurulent: drainage, possibly with fibrinolytics. Organising: a fibrous peel that a drain cannot fix, requiring decortication. The same collection needs a tube in week one and a thoracotomy in week four — which is the whole argument for early sampling.',
        bonus_5_alteplase_and_dornase_do_two_different_jobs:
          'Alteplase breaks fibrin septations; dornase digests neutrophil DNA that makes pus viscous. MIST2 showed the combination worked while neither alone did — and dornase alone was worse than placebo.',
        bonus_6_small_drains_work_as_well_as_large_ones:
          'Trial data showed 10 to 14 French drains are as effective for empyema and more comfortable, overturning the assumption that pus needs a big tube. Flush them regularly to prevent blockage.',
        bonus_7_always_use_ultrasound_and_puncture_at_the_same_sitting:
          'Ultrasound-guided procedures have substantially lower complication rates. Marking a site on the ward and puncturing an hour later in a different position is a recognised cause of organ injury.',
        trap_1: 'FRANK PUS, a positive Gram stain or a positive culture means DRAIN IT — no further tests required.',
        trap_2: 'A NEGATIVE CULTURE DOES NOT MEAN THE FLUID IS NOT INFECTED — cultures are negative in a large proportion, especially after antibiotics. Inoculate blood culture bottles to raise the yield.',
        trap_3: 'AMINOGLYCOSIDES ARE INACTIVATED BY THE LOW pH of an empyema.',
        trap_4: 'Light criteria misclassify some transudates as exudates in patients on diuretics — use the albumin gradient if the picture is heart failure.',
        trap_5: 'Consider TUBERCULOUS effusion in high-burden settings — lymphocytic, high protein, raised adenosine deaminase, and treated medically.',
        trap_6: 'ASK ABOUT ASPIRATION AND DENTITION — anaerobic cover may be missing from a standard pneumonia regimen, and the teeth are the source that recurs.',
        trap_7: 'Refer to thoracic surgery EARLY — the operation is smaller and the outcome better in the fibrinopurulent stage.',
        one_line_summary: 'Empyema after inadequately treated pneumonia. Not improving means ultrasound and a needle, not a new antibiotic — send a paired serum sample, get the pH properly, drain below 7.2, add alteplase with dornase for loculations, and refer to surgery early.',
      },
    },
    warnings: [
      'FAILURE TO IMPROVE ON ANTIBIOTICS after 48 to 72 hours means an ultrasound and a needle, NOT a different antibiotic.',
      'FRANK PUS, A POSITIVE GRAM STAIN OR CULTURE MEANS DRAIN IT — no further tests needed.',
      'A PLEURAL FLUID pH BELOW 7.2 in a parapneumonic effusion is an indication for drainage.',
      'Collect the pH sample ANAEROBICALLY in a heparinised syringe via a blood gas machine — NOT a pH stick.',
      'DO NOT PUT LIDOCAINE IN THE SYRINGE — it is acidic and falsely lowers the pH.',
      'DO NOT PUT FRANK PUS THROUGH A BLOOD GAS ANALYSER — it damages the machine and is unnecessary.',
      'TAKE A PAIRED SERUM SAMPLE — Light criteria are ratios and cannot be applied without it.',
      'ALWAYS USE ULTRASOUND for pleural procedures, and mark and puncture at the SAME SITTING in the SAME POSITION.',
      'A NEGATIVE CULTURE DOES NOT MEAN THE FLUID IS NOT INFECTED — inoculate blood culture bottles to raise the yield.',
      'AMINOGLYCOSIDES ARE INACTIVATED by the low pH of an empyema.',
      'ALTEPLASE AND DORNASE MUST BE GIVEN TOGETHER — neither alone was effective in MIST2, and dornase alone was worse than placebo.',
      'SMALL-BORE DRAINS are as effective as large ones for empyema — but flush them to prevent blockage.',
      'REFER TO THORACIC SURGERY EARLY — the operation is smaller and outcomes better in the fibrinopurulent stage.',
      'Light criteria misclassify some transudates as exudates on diuretics — use the albumin gradient if heart failure is likely.',
      'Consider TUBERCULOUS effusion in high-burden settings — lymphocytic with raised adenosine deaminase, treated medically.',
      'ASK ABOUT ASPIRATION AND DENTITION — anaerobic cover may be missing, and the teeth are the source that recurs.',
      'Doses and antibiotic choices here are teaching examples. Follow local respiratory and thoracic guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Antibiotic regimens, fibrinolytic protocols and surgical thresholds vary between services.',
      'Early surgical intervention versus fibrinolytics remains an area of variation between centres.',
    ],
    cards: [
      { q: 'What should trigger the thought of empyema?', a: 'Pneumonia not improving after 48 to 72 hours, or persistent fever, rising markers or an effusion.' },
      { q: 'Why do antibiotics alone fail?', a: 'Pus in a closed space is poorly penetrated, and low pH and oxygen tension impair both antibiotic activity and neutrophil function.' },
      { q: 'State the Light criteria.', a: 'Exudate if pleural/serum protein over 0.5, pleural/serum LDH over 0.6, or pleural LDH over two thirds the upper serum limit.' },
      { q: 'What is the pleural fluid pH threshold for drainage?', a: 'Below 7.2 in a parapneumonic effusion.' },
      { q: 'How must the pH sample be handled?', a: 'Anaerobically in a heparinised syringe through a blood gas machine — no pH sticks, no lidocaine, and never frank pus.' },
      { q: 'Name the three stages of empyema.', a: 'Exudative (antibiotics), fibrinopurulent (drainage), organising (decortication).' },
      { q: 'Why must alteplase and dornase be combined?', a: 'Alteplase breaks fibrin septations; dornase digests neutrophil DNA making pus viscous. MIST2 showed neither alone worked.' },
      { q: 'What size chest drain is needed?', a: 'Small-bore 10 to 14 French is as effective as large-bore and more comfortable — but flush it regularly.' },
      { q: 'What is the split pleura sign?', a: 'Enhancement and separation of thickened visceral and parietal pleura on CT — characteristic of empyema.' },
      { q: 'Which antibiotic class is inactivated in empyema?', a: 'Aminoglycosides — inactivated by the low pH.' },
      { q: 'What alternative markers indicate a complicated effusion?', a: 'Glucose below about 2.2 mmol/L and LDH above about 1000 IU/L.' },
      { q: 'What suggests a tuberculous effusion?', a: 'Lymphocyte-predominant exudate with high protein and raised adenosine deaminase — treated medically.' },
    ],
    checks: [
      'Failure to improve recognised as an indication for imaging, not a new antibiotic',
      'Thoracic ultrasound performed',
      'Pleural aspiration performed under ultrasound guidance at the same sitting',
      'PAIRED SERUM protein and LDH sent with the pleural sample',
      'pH sampled anaerobically in a heparinised syringe and run on a gas machine',
      'Glucose and LDH sent as alternatives if pH unavailable',
      'Fluid sent for Gram stain, culture, and inoculated into blood culture bottles',
      'Cytology and tuberculosis testing sent where relevant',
      'Blood cultures taken',
      'Intravenous antibiotics with anaerobic cover where aspiration is likely',
      'Chest drain inserted for pus, positive Gram stain, or pH below 7.2',
      'Intrapleural alteplase WITH dornase considered for loculations',
      'Thoracic surgery referral made early rather than after prolonged failure',
      'Nutrition, physiotherapy, analgesia and thromboprophylaxis addressed',
      'Dental assessment arranged if poor dentition is the source',
      'Underlying malignancy or bronchial obstruction excluded with follow-up imaging',
    ],
    related: ['pleural_effusion_light_criteria_and_the_diagnostic_tap'],
  },
];
