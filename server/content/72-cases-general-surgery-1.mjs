/**
 * CASE SCENARIOS — General surgery: appendicitis and perforated peptic ulcer.
 *
 * Batch 4, part 1.
 */

export default [
  {
    id: 'AS-CASE-0031',
    type: 'case',
    specialty: 'Surgery — General surgery',
    teaching_case: true,
    title: 'CASE: Central Abdominal Pain That Moved to the Right Iliac Fossa',
    short: 'Case: acute appendicitis',
    summary:
      'A 23-year-old with classic migrating pain. Teaches WHY the pain moves — two different nerve supplies — why the pregnancy test is not a formality, why a normal white count does not exclude it, and why the retrocaecal appendix produces a soft abdomen.',
    domains: ['general_surgery', 'emergency_medicine', 'gastroenterology'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case appendicitis', 'right iliac fossa pain case', 'migrating pain appendicitis',
      'rovsing sign', 'psoas sign', 'obturator sign', 'alvarado score',
      'mcburney point', 'appendix mass', 'retrocaecal appendix',
    ],
    terms: [
      'case', 'appendicitis', 'mcburney point', 'rovsing sign', 'psoas sign', 'obturator sign',
      'alvarado score', 'visceral pain', 'somatic pain', 'peritonism', 'guarding',
      'rebound tenderness', 'appendix mass', 'appendix abscess', 'retrocaecal',
      'appendicectomy', 'laparoscopic', 'ectopic pregnancy', 'mesenteric adenitis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '23-year-old man with 18 hours of abdominal pain that began around the umbilicus as a vague ache and has now settled in the right iliac fossa as a sharp, constant pain made worse by moving and coughing.',

      section_1_clerking: {
        history:
          'Yesterday evening he felt generally unwell with a dull, poorly localised ache around the navel and no appetite. He could not eat his supper. Overnight he vomited twice. This morning the pain had MOVED and become sharp and constant in the right lower abdomen. It hurts to walk, to cough, and to go over speed bumps in the car. No diarrhoea. He has passed no flatus problems and opened his bowels normally yesterday.',
        the_migration_which_is_the_diagnosis: {
          the_observation: 'PAIN BEGINS CENTRALLY AND POORLY LOCALISED, THEN MOVES TO THE RIGHT ILIAC FOSSA AND BECOMES SHARP AND WELL LOCALISED. This migration is more useful than any single examination sign.',
          why_it_happens_which_is_worth_understanding_properly: {
            phase_1_visceral_pain:
              'Early appendicitis distends the appendix. Visceral afferents from the appendix — a MIDGUT structure — enter the spinal cord at around T10, ALONGSIDE fibres from many other midgut organs. The brain cannot localise which organ is sending the signal, so it refers the pain to the DERMATOME, which at T10 is THE UMBILICUS. Hence a vague, central, colicky ache that the patient cannot point to.',
            phase_2_somatic_pain:
              'As inflammation progresses through the appendix wall, it reaches the PARIETAL PERITONEUM overlying it. Parietal peritoneum has SOMATIC innervation from the segmental nerves of the abdominal wall, which is precisely localising. The pain therefore SHIFTS to exactly where the appendix lies, becomes sharp and constant, and is aggravated by anything that moves the peritoneum — coughing, walking, the car journey.',
            the_generalisable_principle:
              'VISCERAL PAIN IS DULL, CENTRAL AND POORLY LOCALISED; SOMATIC PERITONEAL PAIN IS SHARP, LATERALISED AND MOVEMENT-SENSITIVE. This one idea explains the pain pattern of almost every intra-abdominal inflammatory process, not just appendicitis — cholecystitis moving from epigastrium to right upper quadrant, diverticulitis to the left iliac fossa.',
          },
        },
        the_sequence_of_symptoms_which_is_also_diagnostic:
          'IN APPENDICITIS THE ORDER IS USUALLY: ANOREXIA FIRST, THEN PAIN, THEN VOMITING. In gastroenteritis, VOMITING TYPICALLY PRECEDES the pain. That order is a genuinely useful discriminator and takes one question to establish. ANOREXIA IS ALMOST UNIVERSAL — a patient who is hungry and eating normally makes appendicitis much less likely, though it does not exclude it.',
        vitals: 'BP 124/76 mmHg. Pulse 96. Respiratory rate 16. Temperature 37.6 — LOW-GRADE, which is typical; a high fever early suggests something else or a perforation. Saturation 99%.',
        examination: {
          general: 'Lying still, reluctant to move — a patient with peritonitis lies still, whereas a patient with COLIC (renal or biliary) writhes and cannot get comfortable. That distinction is visible from the end of the bed.',
          abdomen: 'MAXIMAL TENDERNESS AT MCBURNEY POINT — one third of the way along a line from the right anterior superior iliac spine to the umbilicus. GUARDING — reflex involuntary contraction of the overlying abdominal muscle. PERCUSSION TENDERNESS present.',
          the_way_to_elicit_rebound_without_hurting_the_patient:
            'PERCUSSION TENDERNESS IS A KINDER AND EQUALLY VALID TEST FOR PERITONISM than the traditional press-and-release rebound. Gentle percussion, or asking the patient to COUGH or to HOP, produces the same information. DEEP PALPATION FOLLOWED BY SUDDEN RELEASE IS UNNECESSARILY PAINFUL AND SHOULD BE ABANDONED — it adds nothing that percussion does not give you.',
          special_signs: {
            rovsing_sign: 'Palpation of the LEFT iliac fossa produces pain in the RIGHT iliac fossa. Displacement of gas and stretching of the peritoneum transmits across.',
            psoas_sign: 'Pain on passive EXTENSION of the right hip, or on active hip flexion against resistance. It suggests a RETROCAECAL appendix lying on the psoas muscle.',
            obturator_sign: 'Pain on passive INTERNAL ROTATION of the flexed right hip, suggesting a PELVIC appendix lying against the obturator internus.',
            the_honest_caveat: 'THESE SIGNS ARE OF LIMITED SENSITIVITY. Their PRESENCE supports the diagnosis; their ABSENCE excludes nothing. They are most useful for localising an atypically positioned appendix — which is their real value.',
          },
          the_position_that_changes_the_examination: {
            the_point: 'THE APPENDIX BASE IS CONSTANT AT THE CONFLUENCE OF THE TAENIAE COLI, BUT ITS TIP LIES WHEREVER IT LIES. Roughly two thirds are RETROCAECAL, and pelvic, subcaecal, preileal and postileal positions all occur.',
            the_consequence:
              'A RETROCAECAL APPENDIX IS SHIELDED FROM THE ANTERIOR PARIETAL PERITONEUM BY THE CAECUM. The abdomen can therefore feel SOFT with minimal guarding despite significant inflammation — a genuinely dangerous false reassurance. A PELVIC APPENDIX irritates the bladder and rectum, causing urinary frequency and diarrhoea, and is regularly misdiagnosed as urinary infection or gastroenteritis. THE POSITION EXPLAINS ALMOST EVERY ATYPICAL PRESENTATION.',
          },
          do_not_forget: 'EXAMINE THE HERNIAL ORIFICES AND THE TESTES IN EVERY MALE WITH ABDOMINAL PAIN. Testicular torsion presents with abdominal pain and is missed by not looking. And in women, a pelvic assessment as appropriate.',
        },
      },

      section_2_mechanism: {
        the_sequence: [
          '1. THE APPENDIX LUMEN IS OBSTRUCTED — by a FAECOLITH (hardened stool) most commonly in adults, by LYMPHOID HYPERPLASIA in children and young adults following a viral illness, or occasionally by a TUMOUR in older patients.',
          '2. Mucus continues to be secreted behind the obstruction, so intraluminal PRESSURE RISES. This distension causes the early VISCERAL pain.',
          '3. Bacteria multiply in the stagnant contents; the wall becomes inflamed and oedematous.',
          '4. Rising pressure first obstructs VENOUS and LYMPHATIC drainage, worsening congestion, then compromises ARTERIAL supply.',
          '5. The wall becomes ISCHAEMIC and then NECROTIC — GANGRENOUS APPENDICITIS.',
          '6. PERFORATION follows, releasing pus and faecal material. This may be walled off by omentum and adjacent bowel into a LOCALISED ABSCESS or PHLEGMON, or spill freely to cause GENERALISED PERITONITIS.',
        ],
        the_timeline_that_matters:
          'PERFORATION BECOMES SUBSTANTIALLY MORE LIKELY AFTER ABOUT 36 TO 48 HOURS OF SYMPTOMS. This is why delay matters, and why the elderly and the very young — who present late and atypically — have much higher perforation rates.',
        the_deceptive_improvement:
          'AT THE MOMENT OF PERFORATION THE PAIN MAY BRIEFLY IMPROVE, because the distended, tense appendix decompresses. THE PATIENT AND SOMETIMES THE CLINICIAN INTERPRET THIS AS RECOVERY. Within hours the pain returns, generalised and worse, with peritonitis. A SUDDEN IMPROVEMENT IN PAIN IN A DETERIORATING PATIENT IS AN OMINOUS SIGN, NOT A GOOD ONE.',
        the_omentum: 'In children under about 5 the omentum is short and underdeveloped, so it cannot wall off a perforation. THAT IS WHY YOUNG CHILDREN GET GENERALISED PERITONITIS RATHER THAN A LOCALISED ABSCESS, and why appendicitis is more dangerous at that age.',
      },

      section_3_differentials: {
        the_one_that_must_be_excluded_first: {
          ectopic_pregnancy:
            'IN EVERY WOMAN OF CHILDBEARING AGE WITH ABDOMINAL PAIN, DO A PREGNANCY TEST. NOT "IF SHE MIGHT BE PREGNANT" — ALWAYS. A ruptured ectopic pregnancy kills within hours, presents with right or left iliac fossa pain, and has been operated on as appendicitis with fatal results. Patients may not know they are pregnant, may not disclose it, and menstrual history is unreliable. THE TEST TAKES TWO MINUTES AND IS NOT NEGOTIABLE.',
        },
        gynaecological: 'Ovarian torsion — sudden severe pain with vomiting, often with an ovarian cyst · ruptured ovarian cyst, classically mid-cycle (MITTELSCHMERZ) · PELVIC INFLAMMATORY DISEASE, with cervical excitation, vaginal discharge and often bilateral pain · endometriosis · tubo-ovarian abscess.',
        gastrointestinal: 'MESENTERIC ADENITIS — commoner in children, often after a sore throat or viral illness, with a higher fever, more shifting tenderness and generalised lymphadenopathy; it resolves without surgery but cannot always be distinguished without imaging or observation · MECKEL DIVERTICULITIS, clinically indistinguishable and found at operation · terminal ileitis, including CROHN DISEASE presenting acutely · caecal diverticulitis · perforated caecal tumour in an older patient · gastroenteritis, where VOMITING PRECEDES PAIN and diarrhoea dominates · constipation.',
        urological: 'Right URETERIC COLIC, in which the patient CANNOT LIE STILL and the pain radiates loin to groin, with haematuria · urinary tract infection · testicular torsion referring to the abdomen.',
        the_special_populations_where_it_is_missed: {
          pregnancy:
            'APPENDICITIS IS THE COMMONEST NON-OBSTETRIC SURGICAL EMERGENCY IN PREGNANCY. THE GRAVID UTERUS DISPLACES THE APPENDIX UPWARDS AND LATERALLY, so pain may be in the right flank or right upper quadrant in the third trimester rather than the right iliac fossa. Nausea, vomiting and a mildly raised white count are normal in pregnancy, which strips away the usual clues. ULTRASOUND FIRST, THEN MRI IF AVAILABLE — avoid CT. Delay harms both mother and fetus far more than an operation does; a negative appendicectomy in pregnancy is preferable to a perforation.',
          the_elderly:
            'PRESENT LATE, WITH LESS PAIN, LESS FEVER AND A LOWER WHITE COUNT because the inflammatory response is blunted. PERFORATION RATES ARE MUCH HIGHER. And an appendiceal or caecal TUMOUR may be the obstructing cause, so a follow-up colonic assessment is warranted in older patients.',
          young_children: 'Cannot localise, present with vomiting and irritability, and have higher perforation rates because the omentum cannot wall off.',
          immunosuppressed_and_diabetic_patients: 'Blunted signs and higher perforation risk. Also broaden the differential to include typhlitis (neutropenic colitis).',
        },
      },

      section_4_investigations: {
        the_principle: 'APPENDICITIS IS A CLINICAL DIAGNOSIS. INVESTIGATIONS SUPPORT IT, EXCLUDE ALTERNATIVES AND PREPARE FOR SURGERY. A CONVINCING CLINICAL PICTURE WITH NORMAL BLOODS STILL GOES TO THEATRE.',
        pregnancy_test: 'FIRST, IN EVERY WOMAN OF CHILDBEARING AGE. See above.',
        bloods: {
          full_blood_count: 'Usually a raised white cell count with NEUTROPHILIA. BUT A NORMAL WHITE COUNT DOES NOT EXCLUDE APPENDICITIS — it is normal in a meaningful proportion, particularly early and in the elderly. Never let a normal count overrule a convincing history and examination.',
          crp: 'Usually raised, and rises later than the white count. The COMBINATION of a normal white count AND a normal CRP in a patient with more than 24 hours of symptoms makes appendicitis considerably less likely — but the pairing matters, not either alone.',
          others: 'Urea and electrolytes · liver function and AMYLASE OR LIPASE to exclude pancreatitis and biliary disease · glucose · group and save · clotting if surgery is planned · venous gas with lactate if the patient looks unwell, since a raised lactate suggests ischaemia or established sepsis.',
        },
        urinalysis: {
          the_finding: 'MILD PYURIA OR HAEMATURIA IS COMMON IN APPENDICITIS, because an inflamed appendix lying against the ureter or bladder irritates them.',
          the_trap:
            'THIS IS ONE OF THE COMMONEST REASONS APPENDICITIS IS MISDIAGNOSED AS A URINARY TRACT INFECTION, the patient is given trimethoprim and sent home, and returns perforated. A FEW WHITE CELLS ON DIPSTICK IN A PATIENT WITH MIGRATORY PAIN AND RIGHT ILIAC FOSSA GUARDING DOES NOT MEAN CYSTITIS. A urine culture that is genuinely positive with heavy growth and no localising abdominal signs is a different matter.',
        },
        imaging: {
          when_it_is_needed: 'A classic presentation in a young man may go straight to theatre without imaging. Imaging is for DIAGNOSTIC UNCERTAINTY, for women where gynaecological causes are plausible, for children and for the elderly.',
          ultrasound: 'FIRST LINE IN CHILDREN, YOUNG WOMEN AND PREGNANCY — no radiation. Findings: a non-compressible blind-ending tubular structure over 6 mm in diameter, wall thickening, a faecolith, free fluid, and tenderness under the probe. IT IS OPERATOR-DEPENDENT, AND A NON-VISUALISED APPENDIX IS A COMMON AND UNHELPFUL RESULT THAT EXCLUDES NOTHING.',
          ct: 'HIGHLY SENSITIVE AND SPECIFIC, and the investigation of choice in adults where the diagnosis is unclear, and particularly in the elderly where malignancy and diverticulitis are alternatives. The trade-off is radiation, which matters most in the young.',
          mri: 'Preferred in PREGNANCY where available, after an inconclusive ultrasound.',
        },
        scoring_systems: 'ALVARADO and the Appendicitis Inflammatory Response score combine migratory pain, anorexia, nausea, right iliac fossa tenderness, rebound, fever, leucocytosis and neutrophil shift. THEY SUPPORT DECISION-MAKING AND HELP IDENTIFY LOW-RISK PATIENTS WHO CAN BE OBSERVED — but a low score never overrides clinical concern, and they perform less well in women and the elderly.',
        the_underused_option: 'ACTIVE OBSERVATION WITH SERIAL EXAMINATION over several hours by the SAME clinician is a legitimate and valuable strategy in equivocal cases. Appendicitis evolves; a soft abdomen at 4 hours may be clearly peritonitic at 10. Documenting serial findings is better medicine than a single uncertain decision.',
      },

      section_5_management: {
        a_initial: 'Nil by mouth. Intravenous fluid. ANALGESIA — see below. Antiemetic. Thromboprophylaxis assessment. Bloods and group and save. SURGICAL REFERRAL.',
        b_the_analgesia_myth_that_should_be_dead: {
          the_old_teaching: 'Withhold analgesia so as not to mask the signs and obscure the diagnosis.',
          the_evidence: 'MULTIPLE TRIALS HAVE SHOWN THAT OPIOID ANALGESIA DOES NOT MASK PERITONEAL SIGNS OR INCREASE DIAGNOSTIC ERROR IN ACUTE ABDOMINAL PAIN. If anything, a comfortable patient can be examined more reliably.',
          the_rule: 'GIVE ADEQUATE ANALGESIA PROMPTLY. Withholding it is unkind, unjustified by evidence, and is still practised. Document the examination findings before and after if you wish, but do not leave a patient in pain to preserve a sign.',
        },
        c_antibiotics: 'Broad-spectrum cover for Gram-negatives and anaerobes — for example CO-AMOXICLAV, or a cephalosporin with METRONIDAZOLE, per local policy. Given at induction as prophylaxis in simple appendicitis, and continued therapeutically if perforated or gangrenous.',
        d_appendicectomy: {
          the_standard: 'LAPAROSCOPIC APPENDICECTOMY is the usual approach — less wound infection, less pain, faster recovery, shorter stay, and it allows inspection of the pelvis and the rest of the abdomen, which is particularly valuable in women where the diagnosis may prove gynaecological. Open appendicectomy through a grid-iron or Lanz incision remains appropriate where laparoscopy is unavailable or unsafe.',
          the_normal_appendix_at_operation:
            'If the appendix looks normal, the surgeon must LOOK FOR ANOTHER CAUSE — inspect the terminal ileum for Crohn disease and Meckel diverticulum, the pelvic organs, and the caecum. Most surgeons still remove a normal-looking appendix if no other cause is found, so that future right iliac fossa pain is not attributed to it, and because early inflammation may not be visible externally.',
          the_negative_appendicectomy_rate: 'A small negative rate is ACCEPTED as the price of avoiding perforations. Imaging has reduced it, particularly in women. A service with a zero negative rate is probably operating too late.',
        },
        e_non_operative_management_with_antibiotics: {
          the_evidence: 'Trials including CODA have shown that ANTIBIOTICS ALONE CAN TREAT SELECTED UNCOMPLICATED APPENDICITIS, avoiding surgery in a majority.',
          the_honest_caveats: 'ROUGHLY A THIRD REQUIRE APPENDICECTOMY WITHIN A YEAR. Outcomes are worse where there is an APPENDICOLITH. It requires reliable follow-up and a patient who accepts the recurrence risk. In older patients, non-operative management risks leaving an underlying tumour undiagnosed.',
          where_it_fits: 'A reasonable option for selected uncomplicated cases after informed discussion, and particularly useful where surgery is high risk or unavailable. IT IS NOT A DEFAULT and it is not appropriate for perforation, abscess or generalised peritonitis.',
        },
        f_the_appendix_mass_and_abscess: {
          the_presentation: 'A patient presenting after 5 or more days with a palpable right iliac fossa MASS — inflamed appendix walled off by omentum and bowel.',
          the_management: 'Traditionally managed CONSERVATIVELY with antibiotics, fluids and observation, because immediate surgery into an inflamed mass is technically difficult and risks injuring adherent bowel. An ABSCESS is drained, usually RADIOLOGICALLY under image guidance.',
          interval_appendicectomy: 'Historically routine, now selective and debated.',
          the_essential_step_in_older_patients: 'AN APPENDIX MASS IN A PATIENT OVER ABOUT 40 REQUIRES SUBSEQUENT COLONIC IMAGING — colonoscopy or CT colonography — BECAUSE A CAECAL OR APPENDICEAL CARCINOMA CAN PRESENT EXACTLY THIS WAY. Missing this is a well-recognised and serious error.',
        },
        g_complications_and_after_care: 'Wound infection · intra-abdominal or pelvic collection, presenting with swinging fever, ileus or diarrhoea around day 5 to 7 · ileus · adhesional obstruction later · and rarely portal pyaemia. HISTOLOGY IS SENT ON EVERY SPECIMEN — appendiceal NEUROENDOCRINE TUMOURS and mucinous neoplasms are found incidentally, and the result must be followed up, not filed. Early mobilisation, thromboprophylaxis and analgesia. Give clear advice on when to return.',
      },

      section_6_teaching_points: {
        bonus_1_the_migration_is_two_different_nerve_supplies:
          'Early distension stimulates VISCERAL afferents entering at T10, referred to the T10 dermatome at the umbilicus — dull, central, unlocalisable. When inflammation reaches the PARIETAL peritoneum, SOMATIC segmental nerves take over — sharp, precisely localised, movement-sensitive. Understanding this explains the pain pattern of nearly every intra-abdominal inflammatory process.',
        bonus_2_do_a_pregnancy_test_in_every_woman_of_childbearing_age:
          'Not "if she might be" — always. Ruptured ectopic pregnancy kills within hours and has been operated on as appendicitis. Patients may not know, may not disclose, and menstrual history is unreliable.',
        bonus_3_a_normal_white_count_does_not_exclude_it:
          'It is normal in a meaningful proportion, particularly early and in the elderly. The COMBINATION of a normal white count and normal CRP after 24 hours of symptoms makes it much less likely — but neither alone overrules a convincing history and examination.',
        bonus_4_the_position_explains_the_atypical_presentation:
          'Two thirds are retrocaecal, shielded from the anterior peritoneum by the caecum — so the abdomen feels SOFT despite significant inflammation. A pelvic appendix irritates bladder and rectum, causing frequency and diarrhoea, and is misdiagnosed as urinary infection or gastroenteritis.',
        bonus_5_pyuria_does_not_mean_urinary_infection:
          'An inflamed appendix lying against the ureter or bladder causes mild pyuria and haematuria. This is one of the commonest routes to a missed appendicitis — dipstick, trimethoprim, discharge, return perforated.',
        bonus_6_sudden_improvement_can_mean_perforation:
          'The tense appendix decompresses at the moment it perforates, so pain briefly eases. It is read as recovery. Within hours the pain returns generalised and worse. Sudden improvement in a patient who is otherwise deteriorating is ominous.',
        bonus_7_analgesia_does_not_mask_the_signs:
          'Trials have shown opioid analgesia does not obscure peritoneal signs or increase diagnostic error. Withholding it is unkind and unjustified, and it is still practised.',
        trap_1: 'Percussion tenderness, coughing or hopping test for peritonism as reliably as press-and-release rebound, and far less cruelly. Abandon deep rebound.',
        trap_2: 'In PREGNANCY the appendix is displaced upwards and laterally — pain may be in the flank or right upper quadrant. Ultrasound then MRI, not CT.',
        trap_3: 'The ELDERLY present late with blunted signs and much higher perforation rates — and may have an underlying tumour.',
        trap_4: 'Examine the hernial orifices and testes in every male with abdominal pain.',
        trap_5: 'A patient with peritonitis lies STILL; a patient with colic writhes. Visible from the end of the bed.',
        trap_6: 'An appendix mass in a patient over 40 needs subsequent colonic imaging — caecal carcinoma presents this way.',
        trap_7: 'Follow up the histology — appendiceal neuroendocrine and mucinous tumours are found incidentally.',
        one_line_summary: 'Acute appendicitis with classic migration. Pregnancy test in any woman, analgesia without apology, a convincing picture goes to theatre regardless of a normal white count — and remember the retrocaecal appendix gives a soft abdomen.',
      },
    },
    warnings: [
      'DO A PREGNANCY TEST IN EVERY WOMAN OF CHILDBEARING AGE — ruptured ectopic pregnancy kills within hours and has been operated on as appendicitis.',
      'A NORMAL WHITE CELL COUNT DOES NOT EXCLUDE APPENDICITIS — a convincing clinical picture goes to theatre.',
      'MILD PYURIA IS COMMON IN APPENDICITIS — do not diagnose urinary infection and send the patient home.',
      'A RETROCAECAL APPENDIX gives a SOFT abdomen despite significant inflammation — a dangerous false reassurance.',
      'A PELVIC APPENDIX causes urinary frequency and diarrhoea and is misdiagnosed as cystitis or gastroenteritis.',
      'SUDDEN IMPROVEMENT IN PAIN in a deteriorating patient suggests PERFORATION, not recovery.',
      'GIVE ANALGESIA — trials show it does not mask peritoneal signs or increase diagnostic error.',
      'Use percussion tenderness, cough or hop rather than deep press-and-release rebound.',
      'IN PREGNANCY the appendix is displaced upwards and laterally — ultrasound then MRI, not CT. Delay harms mother and fetus more than surgery.',
      'The ELDERLY present late with blunted signs, higher perforation rates, and possible underlying tumour.',
      'EXAMINE THE HERNIAL ORIFICES AND TESTES in every male with abdominal pain.',
      'An APPENDIX MASS in a patient over 40 requires subsequent colonic imaging — caecal carcinoma presents this way.',
      'FOLLOW UP THE HISTOLOGY — appendiceal neuroendocrine and mucinous tumours are found incidentally.',
      'Non-operative antibiotic management is for selected uncomplicated cases only, with about a third needing surgery within a year.',
      'Doses and antibiotic choices here are teaching examples. Follow local surgical policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Imaging pathways, scoring system use and non-operative management policies vary between services.',
      'Paediatric presentation and management differ and require paediatric surgical input.',
    ],
    cards: [
      { q: 'Why does appendicitis pain migrate?', a: 'Visceral afferents at T10 refer to the umbilicus; when inflammation reaches parietal peritoneum, somatic nerves localise it precisely.' },
      { q: 'What is the usual symptom order, and how does gastroenteritis differ?', a: 'Anorexia, then pain, then vomiting. In gastroenteritis vomiting usually precedes the pain.' },
      { q: 'Where is McBurney point?', a: 'One third along a line from the right anterior superior iliac spine to the umbilicus.' },
      { q: 'Describe Rovsing, psoas and obturator signs.', a: 'Left iliac fossa palpation causing right-sided pain; pain on hip extension (retrocaecal); pain on internal rotation of the flexed hip (pelvic).' },
      { q: 'Why can a retrocaecal appendix give a soft abdomen?', a: 'The caecum shields it from the anterior parietal peritoneum, so guarding is minimal.' },
      { q: 'Which test is never optional in a woman with abdominal pain?', a: 'A pregnancy test — ruptured ectopic pregnancy kills within hours.' },
      { q: 'Does a normal white count exclude appendicitis?', a: 'No — it is normal in a meaningful proportion, especially early and in the elderly.' },
      { q: 'Why does appendicitis cause pyuria?', a: 'An inflamed appendix lying against the ureter or bladder irritates them — a common route to misdiagnosis as UTI.' },
      { q: 'What does sudden pain improvement suggest?', a: 'Perforation with decompression of the distended appendix — not recovery.' },
      { q: 'Should analgesia be withheld to preserve signs?', a: 'No — trials show it does not mask peritoneal signs or increase diagnostic error.' },
      { q: 'How does pregnancy change the presentation and imaging?', a: 'The appendix is displaced upwards and laterally; use ultrasound then MRI, not CT.' },
      { q: 'What must follow an appendix mass in a patient over 40?', a: 'Colonic imaging — caecal or appendiceal carcinoma can present exactly this way.' },
    ],
    checks: [
      'Pregnancy test done in any woman of childbearing age',
      'Symptom sequence established — anorexia, pain, vomiting',
      'Migration of pain documented',
      'Peritonism tested by percussion, cough or hop rather than deep rebound',
      'Hernial orifices and testes examined',
      'Analgesia given promptly',
      'Full blood count and CRP interpreted together, not in isolation',
      'Urinalysis interpreted with caution — pyuria not assumed to be UTI',
      'Imaging chosen appropriately for age, sex and pregnancy status',
      'Serial examination documented if the diagnosis is equivocal',
      'Surgical referral made',
      'Antibiotics given at induction',
      'Colonic imaging planned if appendix mass in a patient over 40',
      'Histology result followed up',
    ],
    related: ['acute_abdomen_pattern_recognition_and_first_decisions'],
  },

  {
    id: 'AS-CASE-0032',
    type: 'case',
    specialty: 'Surgery — General surgery',
    teaching_case: true,
    title: 'CASE: Sudden Agonising Epigastric Pain and a Board-Like Abdomen',
    short: 'Case: perforated peptic ulcer',
    summary:
      'A 58-year-old on long-term NSAIDs with sudden severe pain and a rigid abdomen. Teaches the three phases of perforation, why a normal erect chest film does not exclude it, why shoulder-tip pain occurs, and why resuscitation precedes theatre but must not delay it.',
    domains: ['general_surgery', 'emergency_medicine', 'gastroenterology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case perforated peptic ulcer', 'perforated duodenal ulcer case', 'pneumoperitoneum',
      'board-like rigidity', 'free air under diaphragm', 'kehr sign', 'omental patch',
      'graham patch', 'nsaid ulcer', 'helicobacter pylori',
    ],
    terms: [
      'case', 'perforated peptic ulcer', 'peptic ulcer', 'pneumoperitoneum', 'free air',
      'erect chest radiograph', 'rigidity', 'peritonitis', 'kehr sign', 'referred shoulder pain',
      'omental patch', 'graham patch', 'helicobacter pylori', 'nsaid', 'proton pump inhibitor',
      'boey score', 'sepsis six', 'nasogastric tube',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '58-year-old man with sudden, severe, generalised abdominal pain that began 4 hours ago while watching television. He can tell you the exact minute it started. He is lying completely still and his abdomen feels like a board.',

      section_1_clerking: {
        history:
          'Four hours ago, at rest, he developed INSTANTANEOUS severe epigastric pain that spread rapidly across the whole abdomen within minutes. He describes it as the worst pain of his life. He is now also aware of pain at the TIP OF THE RIGHT SHOULDER. He has vomited once. He has had intermittent burning epigastric pain for months, relieved by food and by antacids, which he has been treating himself. He has been taking IBUPROFEN daily for knee pain for the last year, bought over the counter.',
        the_features_that_make_the_diagnosis: {
          instantaneous_onset:
            'THE PATIENT CAN NAME THE MINUTE. Very few abdominal conditions do this. Sudden, maximal-at-onset abdominal pain means PERFORATION, RUPTURE (aneurysm, ectopic) or a VASCULAR event (mesenteric ischaemia, dissection). A pain that builds over hours is a different category of disease entirely.',
          the_progression: 'Epigastric first, then generalised within minutes as gastroduodenal contents spread through the peritoneal cavity.',
          shoulder_tip_pain_and_why:
            'KEHR SIGN. The DIAPHRAGM is supplied by the PHRENIC NERVE, which arises from cervical roots C3, C4 AND C5. Those same roots supply the SKIN OVER THE SHOULDER. Irritation of the diaphragmatic peritoneum by acid, gas or blood is therefore referred to the shoulder tip. THE PHRASE IS "C3, 4, 5 KEEPS THE DIAPHRAGM ALIVE" — and it also explains why free intraperitoneal fluid or air causes shoulder pain. It occurs with perforation, with intraperitoneal bleeding such as ruptured spleen or ectopic pregnancy, and after laparoscopy from residual carbon dioxide.',
          the_nsaid_history:
            'THE CAUSE, SITTING IN THE DRUG HISTORY. NSAIDs inhibit COX-1, reducing the prostaglandins that maintain gastric mucus, bicarbonate secretion and mucosal blood flow. HE BOUGHT IT HIMSELF, SO IT WOULD NOT APPEAR ON ANY PRESCRIPTION LIST. ALWAYS ASK ABOUT OVER-THE-COUNTER MEDICINES BY NAME — patients do not consider them drugs.',
        },
        the_other_risk_factors_to_ask_about: 'HELICOBACTER PYLORI infection · smoking · alcohol · STEROIDS, particularly combined with NSAIDs, which multiplies the risk · SSRIs, which impair platelet function · anticoagulants · previous ulcer disease · critical illness (stress ulceration) · and, rarely, ZOLLINGER-ELLISON SYNDROME, suggested by multiple, distal or recurrent ulcers.',
        vitals: 'BP 104/62 mmHg. Pulse 118. Respiratory rate 26 and SHALLOW. Temperature 37.2 — often normal early; fever develops later as bacterial peritonitis establishes. Saturation 96%. Lactate 3.4 mmol/L. Urine output reduced.',
        why_the_breathing_is_shallow: 'Deep breathing moves the diaphragm and the inflamed peritoneum, so the patient splints — taking rapid shallow breaths. This causes basal atelectasis and, untreated, contributes to postoperative pneumonia.',
        examination:
          'LYING ABSOLUTELY STILL, often with knees drawn up. He does not want to be touched or moved. BOARD-LIKE RIGIDITY — generalised involuntary guarding of the entire abdominal wall, the classic sign of GENERALISED PERITONITIS. GENERALISED PERCUSSION TENDERNESS. ABSENT BOWEL SOUNDS, from paralytic ileus. LOSS OF LIVER DULLNESS TO PERCUSSION in the right upper quadrant, because free gas has risen and interposed between liver and diaphragm — an old sign, insensitive but specific and free to elicit. Examine the hernial orifices. Rectal examination may reveal tenderness in the pouch of Douglas from collected fluid.',
        the_examination_point_that_matters: 'RIGIDITY IS INVOLUNTARY AND CANNOT BE OVERCOME BY REASSURANCE OR DISTRACTION. VOLUNTARY GUARDING relaxes when the patient is distracted or breathes out. Distinguishing them is the difference between a surgical abdomen and an anxious one, and it is done by watching and talking, not by pressing harder.',
      },

      section_2_mechanism: {
        where_and_why: 'Most perforations occur in the ANTERIOR wall of the FIRST PART OF THE DUODENUM or in the stomach. A POSTERIOR duodenal ulcer behaves differently — it erodes into the GASTRODUODENAL ARTERY and causes MASSIVE HAEMORRHAGE rather than perforation. ANTERIOR PERFORATES, POSTERIOR BLEEDS, and that anatomical fact explains the two entirely different emergencies arising from the same disease.',
        the_pathophysiology: 'Ulceration erodes progressively through mucosa, submucosa, muscularis and finally serosa. Once the full thickness is breached, gastric acid, bile, food and gas escape into the peritoneal cavity.',
        the_three_phases_which_explain_the_clinical_course: {
          phase_1_chemical_peritonitis_0_to_2_hours:
            'Acid and bile cause intense CHEMICAL irritation of the peritoneum. This produces the sudden agonising pain and rigidity. The patient is in severe pain but is not yet septic.',
          phase_2_the_deceptive_period_2_to_12_hours:
            'PERITONEAL FLUID DILUTES THE ACID AND THE PAIN MAY GENUINELY EASE. THE ABDOMEN CAN BECOME LESS RIGID AND THE PATIENT MAY APPEAR TO IMPROVE. THIS IS A TRAP THAT HAS COST LIVES — a patient seen at 8 hours can look considerably better than one seen at 2 hours, and be sent home or observed. Meanwhile several litres of fluid are shifting into the peritoneal cavity and bacteria are multiplying.',
          phase_3_bacterial_peritonitis_and_septic_shock_after_12_hours:
            'Bacterial contamination establishes. Fever, worsening distension, ileus, massive third-space fluid loss, hypovolaemia, organ failure and septic shock. MORTALITY RISES STEEPLY WITH DELAY TO SURGERY.',
        },
        the_fluid_loss_that_is_underestimated:
          'The inflamed peritoneum has a vast surface area and leaks plasma into the abdominal cavity — THIRD SPACING. Several litres can be lost from the circulation while the abdomen looks only moderately distended. THIS IS WHY THESE PATIENTS NEED MUCH MORE FLUID THAN EXPECTED, and why they arrive in theatre hypovolaemic if resuscitation has been half-hearted.',
      },

      section_3_differentials: {
        the_category: 'SUDDEN, MAXIMAL-AT-ONSET ABDOMINAL PAIN. The differential is short and every item is dangerous.',
        one_perforated_peptic_ulcer: 'WORKING DIAGNOSIS. Supporting: instantaneous onset, NSAID use, prior dyspepsia, generalised rigidity, shoulder tip pain.',
        two_ruptured_abdominal_aortic_aneurysm: 'MUST BE CONSIDERED IN ANY PATIENT OVER 50 WITH SUDDEN ABDOMINAL OR BACK PAIN AND HYPOTENSION. Look for a pulsatile expansile mass and asymmetric femoral pulses. It is misdiagnosed as renal colic and as perforation, and a wrong call is fatal.',
        three_acute_pancreatitis: 'Severe epigastric pain radiating to the back, with a raised amylase or lipase. CAN ALSO PRODUCE A RIGID ABDOMEN AND FREE FLUID. IMPORTANT: AMYLASE CAN BE RAISED IN PERFORATION TOO, because pancreatic enzymes are absorbed from the peritoneum — so a moderately raised amylase does not settle the question. Very high levels favour pancreatitis. CT distinguishes them.',
        four_acute_mesenteric_ischaemia: 'Sudden severe pain, classically OUT OF PROPORTION TO A SOFT ABDOMEN early, in a patient with atrial fibrillation or vascular disease, with a high lactate. It becomes rigid only when the bowel infarcts and perforates.',
        five_myocardial_infarction: 'AN INFERIOR MI CAN PRESENT WITH EPIGASTRIC PAIN AND VOMITING. DO AN ECG IN EVERY PATIENT OVER ABOUT 40 WITH UPPER ABDOMINAL PAIN. Taking a patient with an inferior MI to theatre is a catastrophe, and it happens.',
        six_ruptured_ectopic_pregnancy: 'In any woman of childbearing age — sudden pain, shoulder tip pain from intraperitoneal blood, and shock. Pregnancy test.',
        seven_other_perforations: 'Perforated diverticulitis, perforated appendix, perforated colonic tumour, oesophageal perforation (BOERHAAVE SYNDROME, after violent vomiting, with surgical emphysema in the neck).',
        eight_biliary_and_other: 'Acute cholecystitis and biliary colic build over hours rather than starting instantaneously. Diabetic ketoacidosis and sickle crisis can mimic an acute abdomen — check glucose and consider the history.',
      },

      section_4_investigations: {
        the_principle: 'RESUSCITATION AND INVESTIGATION HAPPEN TOGETHER, AND NEITHER DELAYS THE SURGICAL REFERRAL. A patient with generalised peritonitis needs a surgeon, not a longer list of tests.',
        erect_chest_radiograph: {
          what_it_shows: 'FREE GAS UNDER THE DIAPHRAGM — a crescent of lucency between the diaphragm and the liver. It is the classic and immediately available test.',
          how_to_do_it_properly: 'THE PATIENT MUST BE SITTING OR STANDING UPRIGHT FOR AT LEAST 10 TO 15 MINUTES BEFORE THE FILM, so free gas has time to rise to the highest point. A film taken immediately after sitting the patient up, or taken supine, will miss gas that is present. If the patient cannot sit up, a LEFT LATERAL DECUBITUS film shows gas between the liver and the abdominal wall.',
          the_critical_limitation:
            'IT IS ONLY ABOUT 70 TO 80% SENSITIVE. UP TO 30% OF CONFIRMED PERFORATIONS HAVE NO VISIBLE FREE AIR. A NORMAL ERECT CHEST FILM DOES NOT EXCLUDE PERFORATION. If the clinical picture is convincing, proceed to CT or straight to theatre. Reassurance from a normal film is a well-documented route to a delayed operation.',
          the_false_positive: 'CHILAIDITI SIGN — interposition of colon between liver and diaphragm — mimics free air. Look for haustral markings within the lucency.',
        },
        ct_abdomen_and_pelvis_with_contrast: 'FAR MORE SENSITIVE for free gas and free fluid, identifies the SITE of perforation, and distinguishes the alternatives — pancreatitis, ischaemia, aneurysm, diverticulitis. It is the investigation of choice where the diagnosis is uncertain, and it guides whether non-operative management is feasible. DO NOT DELAY THEATRE FOR A CT IN A PATIENT WITH UNEQUIVOCAL GENERALISED PERITONITIS AND SHOCK — that patient needs source control.',
        bloods: 'Full blood count · urea, creatinine and electrolytes · AMYLASE OR LIPASE, remembering it can be moderately raised in perforation · liver function · CRP · GLUCOSE · CLOTTING · GROUP AND CROSS-MATCH · BLOOD GAS WITH LACTATE, which is a key severity marker · blood cultures.',
        ecg: 'IN EVERY PATIENT OVER 40 WITH UPPER ABDOMINAL PAIN. See the differential.',
        pregnancy_test: 'In any woman of childbearing age.',
      },

      section_5_management: {
        a_resuscitate_aggressively_and_in_parallel: {
          the_principle: 'THIS PATIENT NEEDS AN OPERATION. RESUSCITATION MAKES THE OPERATION SURVIVABLE — IT DOES NOT REPLACE IT, AND IT MUST NOT BE ALLOWED TO DELAY IT INDEFINITELY. SOURCE CONTROL IS PART OF THE RESUSCITATION.',
          the_actions: 'Two large-bore cannulae. BALANCED CRYSTALLOID in 500 mL boluses with reassessment — EXPECT TO NEED SEVERAL LITRES because of third-space loss. Oxygen. CATHETERISE and monitor hourly urine output, targeting roughly 0.5 mL/kg/hour. Correct electrolytes. Cross-match. Arterial line and central access if shocked. CRITICAL CARE INVOLVEMENT EARLY.',
          the_sepsis_six: 'Oxygen, cultures, antibiotics, fluids, lactate, urine output — all within the hour.',
        },
        b_antibiotics: 'BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS covering Gram-negatives and anaerobes — for example piperacillin with tazobactam, or a cephalosporin with metronidazole, per local policy. Consider ANTIFUNGAL cover in patients who are immunosuppressed, critically ill, or have had a prolonged perforation, since Candida peritonitis occurs.',
        c_nasogastric_tube_and_acid_suppression: 'A NASOGASTRIC TUBE decompresses the stomach, reduces ongoing contamination of the peritoneal cavity, and relieves vomiting in ileus. INTRAVENOUS PROTON PUMP INHIBITOR — for example omeprazole 40 mg — reduces further acid secretion. NIL BY MOUTH. Analgesia — do not withhold it.',
        d_surgery: {
          the_standard_operation: 'LAPAROSCOPIC OR OPEN REPAIR WITH AN OMENTAL PATCH — the GRAHAM PATCH — in which a tongue of omentum is laid over the perforation and secured with sutures, plus THOROUGH PERITONEAL LAVAGE to wash out contamination. Simple, quick and effective, and appropriate for the majority.',
          when_more_is_needed: 'A large perforation, a perforated gastric ulcer where MALIGNANCY IS POSSIBLE, or a giant ulcer may need resection. ALWAYS BIOPSY THE EDGE OF A PERFORATED GASTRIC ULCER — a proportion are malignant, whereas duodenal ulcers essentially never are. This is a small step at operation with major consequences if omitted.',
          the_prognostic_score: 'The BOEY SCORE uses three factors — SHOCK ON ADMISSION, MAJOR MEDICAL COMORBIDITY, and SYMPTOM DURATION OVER 24 HOURS. Mortality rises steeply with each. It is useful for counselling and for deciding the level of postoperative care.',
        },
        e_non_operative_management_and_its_narrow_place: 'A small, SEALED perforation in a stable patient without generalised peritonitis, confirmed on CT with water-soluble contrast showing no leak, may occasionally be managed with antibiotics, nasogastric decompression, acid suppression and very close observation. IT REQUIRES A SURGEON REVIEWING REPEATEDLY AND AN IMMEDIATE THRESHOLD TO OPERATE IF ANYTHING CHANGES. IT IS NOT A WAY TO AVOID OPERATING ON A SICK PATIENT.',
        f_the_postoperative_and_secondary_prevention_that_prevents_recurrence: {
          the_step_that_gets_forgotten:
            'TEST FOR AND ERADICATE HELICOBACTER PYLORI IN EVERY PATIENT. Test at least 4 weeks after antibiotics and 2 weeks after stopping a proton pump inhibitor, or these cause FALSE NEGATIVES — a urea breath test or stool antigen taken while on a PPI is unreliable, and this timing error is extremely common. Eradication with a proton pump inhibitor plus two antibiotics dramatically reduces recurrence.',
          stop_the_nsaid: 'PERMANENTLY where possible. Provide an alternative analgesic plan for his knee — paracetamol, topical NSAID, physiotherapy, weight management, referral. If an NSAID is genuinely unavoidable, co-prescribe a proton pump inhibitor and use the lowest effective dose. Simply writing "stop ibuprofen" without giving him something for his knee guarantees he restarts it.',
          proton_pump_inhibitor: 'Continue for at least 6 to 8 weeks to allow healing.',
          confirm_healing_in_gastric_ulcers: 'REPEAT ENDOSCOPY TO CONFIRM HEALING AND EXCLUDE MALIGNANCY in gastric ulcers. Duodenal ulcers do not routinely require it.',
          the_rest: 'Smoking cessation, alcohol reduction, thromboprophylaxis, early mobilisation, physiotherapy for the atelectasis caused by splinting, and nutritional support.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_three_phases_include_a_deceptive_middle:
          'Chemical peritonitis for the first couple of hours, then a period where peritoneal fluid dilutes the acid and the pain genuinely EASES and the abdomen softens, then bacterial peritonitis and septic shock. A patient seen at 8 hours can look better than one seen at 2. That apparent improvement has cost lives.',
        bonus_2_anterior_perforates_posterior_bleeds:
          'An anterior duodenal ulcer perforates into the peritoneal cavity. A POSTERIOR one erodes into the gastroduodenal artery and causes massive haemorrhage. One disease, two entirely different emergencies, determined by anatomy.',
        bonus_3_a_normal_erect_chest_film_does_not_exclude_perforation:
          'It is only 70 to 80% sensitive — up to 30% of confirmed perforations show no free air. And the patient must be upright for 10 to 15 minutes beforehand for gas to rise. Reassurance from a normal film is a documented route to a delayed operation.',
        bonus_4_kehr_sign_and_c3_4_5:
          'The phrenic nerve arises from C3, C4 and C5, which also supply the shoulder skin. Diaphragmatic irritation by acid, gas or blood is therefore referred to the shoulder tip. It occurs in perforation, intraperitoneal bleeding such as ruptured spleen or ectopic pregnancy, and after laparoscopy.',
        bonus_5_third_space_loss_is_much_larger_than_it_looks:
          'The inflamed peritoneum leaks plasma over a vast surface area. Several litres can be lost while the abdomen appears only moderately distended. These patients need far more fluid than expected and arrive shocked in theatre if resuscitation was timid.',
        bonus_6_biopsy_the_edge_of_a_perforated_gastric_ulcer:
          'A proportion are malignant. Duodenal ulcers essentially never are. It is a small step at operation with major consequences if omitted, and gastric ulcers additionally need repeat endoscopy to confirm healing.',
        bonus_7_test_for_helicobacter_at_the_right_time:
          'Urea breath test or stool antigen taken while on a proton pump inhibitor or soon after antibiotics gives a FALSE NEGATIVE. Wait at least 2 weeks off the PPI and 4 weeks after antibiotics. This timing error is extremely common and leads to untreated infection and recurrence.',
        trap_1: 'DO AN ECG in every patient over 40 with upper abdominal pain — an inferior MI presents this way and taking that patient to theatre is a catastrophe.',
        trap_2: 'Amylase can be moderately raised in perforation, so it does not reliably distinguish perforation from pancreatitis.',
        trap_3: 'Consider ruptured aortic aneurysm in any patient over 50 with sudden abdominal pain and hypotension.',
        trap_4: 'Distinguish involuntary RIGIDITY from voluntary guarding by watching and talking, not by pressing harder.',
        trap_5: 'Ask about over-the-counter medicines BY NAME — the NSAID that caused this appeared on no prescription list.',
        trap_6: 'Give an alternative analgesic plan when stopping the NSAID, or the patient will restart it.',
        one_line_summary: 'Perforated peptic ulcer from over-the-counter ibuprofen. Resuscitate hard and in parallel, antibiotics and a nasogastric tube, erect chest film knowing it misses a third, straight to theatre for an omental patch — then eradicate Helicobacter and give him something else for his knee.',
      },
    },
    warnings: [
      'A NORMAL ERECT CHEST RADIOGRAPH DOES NOT EXCLUDE PERFORATION — it is only 70 to 80% sensitive.',
      'The patient must be UPRIGHT FOR 10 TO 15 MINUTES before the erect film, or free gas will not have risen.',
      'BEWARE THE DECEPTIVE MIDDLE PHASE — peritoneal fluid dilutes the acid and the pain eases while bacteria multiply.',
      'THIRD-SPACE FLUID LOSS IS MUCH LARGER THAN IT LOOKS — expect to need several litres.',
      'RESUSCITATION MUST NOT DELAY SURGERY — source control is part of the resuscitation.',
      'DO AN ECG in every patient over 40 with upper abdominal pain — inferior MI presents this way.',
      'Consider RUPTURED AORTIC ANEURYSM in any patient over 50 with sudden abdominal pain and hypotension.',
      'AMYLASE CAN BE RAISED IN PERFORATION — it does not reliably distinguish it from pancreatitis.',
      'ANTERIOR duodenal ulcers PERFORATE; POSTERIOR ones erode the gastroduodenal artery and BLEED.',
      'ALWAYS BIOPSY THE EDGE OF A PERFORATED GASTRIC ULCER — a proportion are malignant.',
      'Repeat endoscopy to confirm healing of gastric ulcers; duodenal ulcers do not routinely need it.',
      'TEST FOR HELICOBACTER AT THE RIGHT TIME — at least 2 weeks off a PPI and 4 weeks after antibiotics, or you get a false negative.',
      'ASK ABOUT OVER-THE-COUNTER MEDICINES BY NAME — the causative NSAID appears on no prescription list.',
      'Give an alternative analgesic plan when stopping the NSAID, or the patient will restart it.',
      'Doses and antibiotic choices here are teaching examples. Follow local surgical policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Antibiotic choice, operative approach and non-operative selection vary between services.',
      'Non-operative management has a narrow, carefully selected place and requires repeated senior surgical review.',
    ],
    cards: [
      { q: 'Describe the three phases of perforation.', a: 'Chemical peritonitis, then a deceptive phase as fluid dilutes the acid and pain eases, then bacterial peritonitis and shock.' },
      { q: 'Why does perforation cause shoulder tip pain?', a: 'The phrenic nerve arises from C3, C4 and C5, which also supply the shoulder skin — Kehr sign.' },
      { q: 'How sensitive is the erect chest radiograph?', a: 'Only 70 to 80% — up to 30% of confirmed perforations show no free air.' },
      { q: 'How must the erect film be taken?', a: 'The patient upright for 10 to 15 minutes beforehand, or a left lateral decubitus if they cannot sit.' },
      { q: 'What is the difference between anterior and posterior duodenal ulcers?', a: 'Anterior perforates; posterior erodes the gastroduodenal artery and causes massive haemorrhage.' },
      { q: 'What is the Graham patch?', a: 'An omental patch laid over the perforation and secured with sutures, plus thorough peritoneal lavage.' },
      { q: 'Why biopsy a perforated gastric ulcer?', a: 'A proportion are malignant — duodenal ulcers essentially never are.' },
      { q: 'What are the three Boey score factors?', a: 'Shock on admission, major medical comorbidity, and symptoms for more than 24 hours.' },
      { q: 'When should Helicobacter testing be done?', a: 'At least 2 weeks off a PPI and 4 weeks after antibiotics, or the test is falsely negative.' },
      { q: 'Why is the breathing shallow?', a: 'The patient splints to avoid moving the inflamed peritoneum, causing basal atelectasis.' },
      { q: 'How do you distinguish rigidity from voluntary guarding?', a: 'Rigidity is involuntary and cannot be overcome by distraction or reassurance.' },
      { q: 'What is Chilaiditi sign?', a: 'Colon interposed between liver and diaphragm mimicking free air — look for haustral markings.' },
    ],
    checks: [
      'ECG performed if over 40 with upper abdominal pain',
      'Pregnancy test if applicable',
      'Ruptured aortic aneurysm considered',
      'Two large-bore cannulae and aggressive fluid resuscitation',
      'Sepsis six completed within the hour',
      'Broad-spectrum antibiotics given',
      'Nasogastric tube and intravenous proton pump inhibitor',
      'Catheter with hourly urine output',
      'Erect chest film taken correctly, and a normal film not used to exclude',
      'CT considered if diagnosis uncertain, but not delaying theatre in peritonitis',
      'Cross-match and critical care involvement',
      'Surgery for omental patch and lavage',
      'Gastric ulcer edge biopsied',
      'Helicobacter testing timed correctly and eradication arranged',
      'NSAID stopped with an alternative analgesic plan provided',
    ],
    related: ['peptic_ulcer_disease_causes_complications_and_eradication'],
  },
];
