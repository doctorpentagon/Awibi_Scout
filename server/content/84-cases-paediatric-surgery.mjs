/**
 * CASE SCENARIOS — Paediatric surgery: intussusception, pyloric stenosis and
 * malrotation with midgut volvulus.
 *
 * Batch 6, part 3.
 */

export default [
  {
    id: 'AS-CASE-0055',
    type: 'case',
    specialty: 'Surgery — Paediatric surgery',
    teaching_case: true,
    title: 'CASE: A 9-Month-Old Drawing Up His Legs and Screaming Every Twenty Minutes',
    short: 'Case: intussusception',
    summary:
      'An infant with colic, a sausage-shaped mass and redcurrant jelly stool. Teaches why the child looks WELL between episodes, why lethargy is the presentation that gets missed, why the enema is both diagnostic and therapeutic, and what a lead point means.',
    domains: ['paediatric_surgery', 'paediatrics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case intussusception', 'intussusception case', 'redcurrant jelly stool',
      'sausage shaped mass', 'target sign ultrasound', 'air enema reduction',
      'dance sign', 'lead point intussusception', 'ileocolic intussusception',
    ],
    terms: [
      'case', 'intussusception', 'intussusceptum', 'intussuscipiens', 'ileocolic',
      'redcurrant jelly stool', 'sausage-shaped mass', 'dance sign', 'target sign',
      'pseudokidney sign', 'air enema', 'hydrostatic reduction', 'lead point',
      'meckel diverticulum', 'peyer patches', 'henoch-schonlein purpura',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '9-month-old boy with 12 hours of episodes in which he suddenly screams, draws his knees to his chest, goes pale, and then settles completely for 20 minutes before the next one. He has vomited twice and passed a stool containing blood and mucus.',

      section_1_the_pattern_that_makes_the_diagnosis: {
        the_episodic_colic: {
          the_description: 'SUDDEN, SEVERE, PAROXYSMAL PAIN LASTING A FEW MINUTES, WITH THE CHILD DRAWING UP THE LEGS, SCREAMING AND GOING PALE — THEN COMPLETE SETTLING BETWEEN EPISODES.',
          why_the_normality_between_episodes_is_the_trap:
            'THE CHILD LOOKS ENTIRELY WELL BETWEEN ATTACKS, OFTEN PLAYING NORMALLY. A CLINICIAN WHO SEES THE CHILD ONLY IN AN INTERVAL FINDS NOTHING WRONG AND SENDS THEM HOME. THE HISTORY OF THE EPISODES, FROM THE PARENT, IS THE DIAGNOSIS — NOT THE EXAMINATION AT ONE MOMENT.',
          why_it_is_episodic: 'THE PAIN CORRESPONDS TO PERISTALTIC WAVES DRIVING THE TELESCOPED BOWEL FURTHER FORWARD. Between waves the traction on the mesentery eases and the pain settles.',
        },
        the_age: 'PEAK INCIDENCE BETWEEN 6 MONTHS AND 2 YEARS, commonest around 5 to 10 months. IT OCCURS OUTSIDE THIS RANGE, AND A CHILD OVER 2 OR AN ADULT WITH INTUSSUSCEPTION IS MUCH MORE LIKELY TO HAVE A PATHOLOGICAL LEAD POINT, WHICH CHANGES THE MANAGEMENT.',
        the_presentation_that_is_most_often_missed: {
          the_problem:
            'A SIGNIFICANT PROPORTION OF INFANTS PRESENT WITH PROFOUND LETHARGY AND REDUCED RESPONSIVENESS RATHER THAN OBVIOUS COLIC. THEY ARE FLOPPY, PALE AND UNINTERESTED, AND ARE INVESTIGATED FOR SEPSIS, MENINGITIS OR A METABOLIC PROBLEM.',
          the_rule: 'AN UNEXPLAINED LETHARGIC OR "SEPTIC-LOOKING" INFANT WITH NO CLEAR SOURCE NEEDS INTUSSUSCEPTION CONSIDERED AND AN ABDOMINAL ULTRASOUND. It is a diagnosis of the abdomen presenting as a neurological or septic picture, and the mechanism is not fully explained — possibly endogenous opioid release or cytokines from the compromised bowel.',
        },
        the_classic_triad_and_its_honest_status: 'PAROXYSMAL PAIN · A PALPABLE SAUSAGE-SHAPED MASS · REDCURRANT JELLY STOOL. ALL THREE TOGETHER OCCUR IN WELL UNDER HALF OF CASES, AND REDCURRANT JELLY STOOL IS A LATE SIGN INDICATING MUCOSAL ISCHAEMIA. WAITING FOR THE TRIAD MEANS WAITING FOR ISCHAEMIC BOWEL.',
      },

      section_2_clerking_and_examination: {
        history: 'Twelve hours of the episodes described. Two episodes of vomiting, the second BILE-STAINED. One stool with blood and mucus, described by the mother as looking like jam. Off his feeds. He had a cold a week ago.',
        the_bilious_vomiting: 'BILIOUS (GREEN) VOMITING IN AN INFANT IS ALWAYS ABNORMAL AND INDICATES OBSTRUCTION DISTAL TO THE AMPULLA OF VATER UNTIL PROVEN OTHERWISE. It is a red flag in its own right — see the malrotation case.',
        the_preceding_viral_illness: 'A RECENT VIRAL INFECTION, OFTEN RESPIRATORY OR GASTROINTESTINAL, IS COMMON. It causes HYPERTROPHY OF PEYER PATCHES — lymphoid tissue in the terminal ileum — WHICH ACTS AS THE LEAD POINT. THAT IS WHY MOST CASES ARE ILEOCOLIC AND WHY THE PEAK AGE COINCIDES WITH WEANING AND THE FIRST INFECTIONS.',
        vitals: 'Temperature 37.4. Pulse 168. Respiratory rate 40. Capillary refill 3 seconds. Alert but intermittently distressed. Weight 8.6 kg.',
        examination: {
          the_mass: 'A SAUSAGE-SHAPED MASS, TYPICALLY IN THE RIGHT UPPER QUADRANT OR EPIGASTRIUM, FELT BETWEEN EPISODES WHEN THE ABDOMEN IS RELAXED. EXAMINE THE CHILD WHEN THEY ARE SETTLED, IDEALLY FEEDING OR ASLEEP — an examination during a screaming episode finds nothing but a rigid abdomen.',
          dance_sign: 'AN EMPTY, HOLLOW-FEELING RIGHT ILIAC FOSSA, BECAUSE THE CAECUM HAS BEEN DRAWN PROXIMALLY INTO THE TRANSVERSE COLON. It is subtle and inconsistent, but it is the anatomical logic of the disease made palpable.',
          rectal_examination: 'May reveal blood and mucus on the glove, or in advanced cases the apex of the intussusceptum palpable as a mass, or even prolapsing through the anus — a very late and ominous finding that can be mistaken for rectal prolapse.',
          the_rest: 'Assess hydration and perfusion carefully — these infants are often significantly dehydrated. Look for a PURPURIC RASH on the buttocks and legs, which would suggest Henoch-Schönlein purpura as a lead point.',
        },
      },

      section_3_mechanism: {
        what_it_is: 'ONE SEGMENT OF BOWEL — THE INTUSSUSCEPTUM — TELESCOPES INTO THE SEGMENT DISTAL TO IT — THE INTUSSUSCIPIENS — LIKE THE SECTIONS OF A COLLAPSING TELESCOPE, DRAGGING ITS MESENTERY IN WITH IT.',
        the_sequence: [
          '1. Peristalsis drives the proximal segment forward into the distal one.',
          '2. THE MESENTERY IS DRAGGED IN AND COMPRESSED BETWEEN THE LAYERS OF BOWEL.',
          '3. VENOUS AND LYMPHATIC DRAINAGE IS OBSTRUCTED FIRST, causing congestion and oedema, which worsens the compression.',
          '4. Mucosal congestion causes bleeding and mucus production — MIXED TOGETHER, THIS IS THE "REDCURRANT JELLY" STOOL. IT IS THEREFORE A SIGN OF MUCOSAL ISCHAEMIA, NOT AN EARLY DIAGNOSTIC FEATURE.',
          '5. ARTERIAL SUPPLY IS EVENTUALLY COMPROMISED, causing full-thickness ischaemia, necrosis and perforation.',
          '6. Meanwhile the lumen is obstructed, causing vomiting, distension and dehydration.',
        ],
        the_types: 'ILEOCOLIC IS BY FAR THE COMMONEST — the terminal ileum telescopes through the ileocaecal valve into the colon. Also ileo-ileal, colocolic and ileo-ileocolic.',
        the_lead_point: {
          what_it_is: 'ANY LESION THAT ALTERS THE NORMAL BOWEL WALL AND IS GRASPED BY PERISTALSIS, DRAGGING THE SEGMENT FORWARD.',
          in_infants: 'USUALLY IDIOPATHIC — that is, hypertrophied Peyer patches after a viral illness, which is not regarded as a pathological lead point.',
          the_pathological_lead_points: 'MECKEL DIVERTICULUM, the commonest identified · POLYP · DUPLICATION CYST · LYMPHOMA, particularly in older children · HENOCH-SCHÖNLEIN PURPURA, where submucosal haematoma acts as the lead point and the intussusception is often ILEO-ILEAL, so it may be missed on a contrast enema · CYSTIC FIBROSIS with inspissated stool · and, in adults, a TUMOUR in the majority.',
          the_rule_that_follows: 'A PATHOLOGICAL LEAD POINT IS MUCH MORE LIKELY IN CHILDREN OVER 2, IN RECURRENT INTUSSUSCEPTION, AND IN ADULTS. THESE PATIENTS NEED THE LEAD POINT SOUGHT AND USUALLY NEED SURGERY RATHER THAN ENEMA REDUCTION ALONE — IN ADULTS, INTUSSUSCEPTION IS A TUMOUR UNTIL PROVEN OTHERWISE AND IS TREATED BY RESECTION WITHOUT ATTEMPTED REDUCTION.',
        },
      },

      section_4_investigations: {
        ultrasound: {
          the_status: 'THE INVESTIGATION OF CHOICE — sensitivity and specificity above 95% in experienced hands, no radiation, immediate, and it identifies alternative diagnoses.',
          the_signs: 'THE TARGET SIGN (or DOUGHNUT SIGN) — concentric rings of bowel within bowel on TRANSVERSE section. THE PSEUDOKIDNEY SIGN — the same appearance on LONGITUDINAL section, resembling a kidney. Also look for FREE FLUID, TRAPPED FLUID between the layers, ABSENT DOPPLER FLOW in the intussusceptum, and a LEAD POINT — all of which predict a lower chance of successful enema reduction.',
        },
        abdominal_radiograph: 'NOT DIAGNOSTIC and often normal. It may show obstruction, a soft tissue mass or absence of gas in the right lower quadrant. ITS MAIN VALUE IS TO EXCLUDE FREE AIR FROM PERFORATION, which is an absolute contraindication to enema reduction. A NORMAL FILM DOES NOT EXCLUDE INTUSSUSCEPTION.',
        bloods: 'Full blood count · UREA AND ELECTROLYTES, which are frequently deranged from vomiting and third-space loss · GLUCOSE · CRP · GROUP AND SAVE · blood gas with LACTATE, where a rising lactate suggests ischaemia · and capillary blood gas for the degree of dehydration and acidosis.',
      },

      section_5_management: {
        a_resuscitate_first: {
          the_rule: 'THESE INFANTS ARE MORE DEHYDRATED THAN THEY LOOK. FLUID RESUSCITATE BEFORE ANY ATTEMPT AT REDUCTION — the procedure and any subsequent anaesthetic are unsafe in a shocked child.',
          the_practical: 'INTRAVENOUS ACCESS. FLUID BOLUS OF 10 to 20 mL/kg of balanced crystalloid, reassessing after each. FOR THIS 8.6 kg CHILD, A 20 mL/kg BOLUS IS 172 mL. Then maintenance plus deficit replacement. NASOGASTRIC TUBE on free drainage to decompress and prevent aspiration. NIL BY MOUTH. Analgesia. Broad-spectrum antibiotics before reduction, per local policy. Correct electrolytes and glucose.',
        },
        b_the_enema_which_is_both_the_test_and_the_treatment: {
          what_it_is: 'AIR (PNEUMATIC) OR HYDROSTATIC CONTRAST OR SALINE IS INSTILLED PER RECTUM UNDER RADIOLOGICAL OR ULTRASOUND GUIDANCE, AND THE PRESSURE PUSHES THE INTUSSUSCEPTUM BACK. IT IS DIAGNOSTIC AND THERAPEUTIC IN ONE PROCEDURE.',
          the_success_rate: 'ROUGHLY 80 TO 90% IN UNCOMPLICATED CASES IN EXPERIENCED HANDS. AIR ENEMA IS GENERALLY PREFERRED — higher success, lower radiation, and less contamination if perforation occurs.',
          the_confirmation_of_success: 'REFLUX OF AIR OR CONTRAST INTO THE TERMINAL ILEUM, plus clinical improvement. WITHOUT THAT REFLUX, REDUCTION IS INCOMPLETE.',
          the_absolute_contraindications: 'PERFORATION OR FREE AIR · PERITONITIS · HAEMODYNAMIC INSTABILITY OR SHOCK THAT HAS NOT BEEN CORRECTED. THESE CHILDREN GO TO THEATRE.',
          the_essential_precondition: 'A SURGEON AND A THEATRE MUST BE AVAILABLE BEFORE THE ENEMA IS STARTED, BECAUSE PERFORATION OCCURS IN ROUGHLY 1% AND REQUIRES IMMEDIATE LAPAROTOMY. THE PROCEDURE IS NEVER PERFORMED WITHOUT SURGICAL COVER.',
          the_tension_pneumoperitoneum_warning: 'IF PERFORATION OCCURS DURING AN AIR ENEMA, AIR UNDER PRESSURE ENTERS THE PERITONEUM AND CAN CAUSE A TENSION PNEUMOPERITONEUM, SPLINTING THE DIAPHRAGM AND CAUSING CARDIORESPIRATORY COLLAPSE. IT IS TREATED BY IMMEDIATE NEEDLE DECOMPRESSION OF THE ABDOMEN. THE EQUIPMENT FOR THIS MUST BE IN THE ROOM.',
          delayed_repeat_enema: 'If the first attempt partially reduces the intussusception in a stable child, a repeat attempt after a few hours is often successful and avoids surgery. It is a recognised technique, not a failure.',
        },
        c_surgery: {
          the_indications: 'FAILED ENEMA REDUCTION · PERFORATION OR PERITONITIS · SHOCK · SUSPECTED PATHOLOGICAL LEAD POINT · and generally in ADULTS and older children.',
          the_operation: 'MANUAL REDUCTION BY GENTLY SQUEEZING THE INTUSSUSCEPTUM BACK FROM THE DISTAL END — PUSHING, NEVER PULLING, BECAUSE TRACTION TEARS THE OEDEMATOUS BOWEL. If reduction fails, or the bowel is necrotic or a lead point is found, RESECTION WITH PRIMARY ANASTOMOSIS. Laparoscopic reduction is used in many centres.',
          the_incidental_appendicectomy: 'Frequently performed at the same operation given the right iliac fossa incision, though practice varies.',
        },
        d_after_reduction: {
          observe: 'ADMIT AND OBSERVE FOR AT LEAST 24 HOURS. RECURRENCE OCCURS IN ROUGHLY 5 TO 10% AFTER ENEMA REDUCTION, AND MOST RECURRENCES HAPPEN WITHIN THE FIRST 24 TO 48 HOURS. Do not discharge straight from the radiology department.',
          feeding: 'Reintroduce feeds gradually once the child is comfortable and settled.',
          the_safety_netting: 'TELL THE PARENTS EXPLICITLY WHAT RECURRENCE LOOKS LIKE — the same episodes of screaming and drawing up the legs — AND THAT THEY SHOULD RETURN IMMEDIATELY. GIVE IT IN WRITING. Recurrence is common enough that this conversation is not optional.',
          recurrent_intussusception: 'MORE THAN ONE RECURRENCE SHOULD PROMPT A SEARCH FOR A PATHOLOGICAL LEAD POINT with further imaging and often surgery.',
        },
        e_the_vaccine_note: 'AN ASSOCIATION BETWEEN THE FIRST-GENERATION ROTAVIRUS VACCINE AND INTUSSUSCEPTION LED TO ITS WITHDRAWAL. CURRENT ROTAVIRUS VACCINES CARRY A VERY SMALL EXCESS RISK THAT IS GREATLY OUTWEIGHED BY THE BENEFIT IN PREVENTING SEVERE GASTROENTERITIS, PARTICULARLY IN SETTINGS WHERE ROTAVIRUS DIARRHOEA IS A MAJOR CAUSE OF CHILD DEATH. Know the association, and do not let it become a reason to discourage vaccination.',
      },

      section_6_teaching_points: {
        bonus_1_the_child_looks_well_between_episodes:
          'The history from the parent is the diagnosis, not the examination at one moment. A clinician who sees the child in an interval finds a normal, playing infant and sends them home. Ask about the pattern and examine when the child is settled.',
        bonus_2_lethargy_is_the_presentation_that_gets_missed:
          'A significant proportion present with profound lethargy and reduced responsiveness rather than colic, and are worked up for sepsis or meningitis. An unexplained floppy, pale infant with no clear source needs an abdominal ultrasound.',
        bonus_3_redcurrant_jelly_stool_is_a_late_sign:
          'It is blood and mucus from mucosal ischaemia. Waiting for the classic triad means waiting for ischaemic bowel — and all three features together occur in well under half of cases.',
        bonus_4_the_enema_is_the_test_and_the_treatment:
          'Air enema reduces 80 to 90% of uncomplicated cases. Success is confirmed by REFLUX INTO THE TERMINAL ILEUM — without that, reduction is incomplete.',
        bonus_5_never_do_the_enema_without_surgical_cover:
          'Perforation occurs in about 1% and needs immediate laparotomy. And if air perforates, TENSION PNEUMOPERITONEUM can splint the diaphragm and cause collapse — needle decompression equipment must be in the room.',
        bonus_6_push_never_pull_at_operation:
          'Manual reduction is by squeezing the intussusceptum back from the distal end. Traction tears the oedematous bowel.',
        bonus_7_age_predicts_the_lead_point:
          'Under 2 it is usually idiopathic — hypertrophied Peyer patches after a viral illness. Over 2, recurrent, or in an adult, a pathological lead point is likely: Meckel diverticulum, polyp, lymphoma or, in adults, a tumour. Adults are resected without attempted reduction.',
        trap_1: 'BILIOUS VOMITING IN AN INFANT IS ALWAYS ABNORMAL — it indicates obstruction distal to the ampulla.',
        trap_2: 'A NORMAL ABDOMINAL RADIOGRAPH DOES NOT EXCLUDE INTUSSUSCEPTION — its role is to exclude free air.',
        trap_3: 'RESUSCITATE BEFORE REDUCING — these infants are more dehydrated than they look.',
        trap_4: 'Look for a purpuric rash — Henoch-Schönlein purpura causes ILEO-ILEAL intussusception that a contrast enema may miss.',
        trap_5: 'ADMIT AND OBSERVE for at least 24 hours — recurrence is 5 to 10% and mostly early.',
        trap_6: 'Give written safety-netting describing exactly what recurrence looks like.',
        trap_7: 'Dance sign — an empty right iliac fossa — is the anatomy of the disease made palpable.',
        one_line_summary: 'Ileocolic intussusception in a 9-month-old. The history of the episodes is the diagnosis because he looks well in between, resuscitate before reducing, air enema with a surgeon and theatre standing by — and admit him for 24 hours because it comes back.',
      },
    },
    warnings: [
      'THE CHILD LOOKS WELL BETWEEN EPISODES — the parent history is the diagnosis, not a single examination.',
      'PROFOUND LETHARGY may be the only presentation — an unexplained floppy pale infant needs an abdominal ultrasound.',
      'REDCURRANT JELLY STOOL IS A LATE SIGN of mucosal ischaemia — waiting for the triad means waiting for dead bowel.',
      'BILIOUS VOMITING IN AN INFANT IS ALWAYS ABNORMAL.',
      'A NORMAL ABDOMINAL RADIOGRAPH DOES NOT EXCLUDE INTUSSUSCEPTION — its role is to exclude free air.',
      'RESUSCITATE BEFORE ATTEMPTING REDUCTION — these infants are more dehydrated than they appear.',
      'NEVER PERFORM AN ENEMA WITHOUT A SURGEON AND THEATRE AVAILABLE — perforation occurs in about 1%.',
      'TENSION PNEUMOPERITONEUM can follow air enema perforation — needle decompression equipment must be in the room.',
      'Confirm success by REFLUX INTO THE TERMINAL ILEUM — without it, reduction is incomplete.',
      'Absolute contraindications to enema: perforation, peritonitis, or uncorrected shock.',
      'At operation PUSH, never PULL — traction tears oedematous bowel.',
      'A PATHOLOGICAL LEAD POINT is likely over age 2, in recurrence, and in adults — adults are resected without attempted reduction.',
      'Look for a PURPURIC RASH — Henoch-Schönlein purpura causes ileo-ileal intussusception a contrast enema may miss.',
      'ADMIT AND OBSERVE FOR AT LEAST 24 HOURS — recurrence is 5 to 10% and mostly early.',
      'GIVE WRITTEN SAFETY-NETTING describing exactly what recurrence looks like.',
      'Doses and volumes here are teaching examples. Follow local paediatric surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Enema technique, antibiotic policy and delayed repeat attempts vary between centres.',
      'Management of a pathological lead point and of adult intussusception differs substantially.',
    ],
    cards: [
      { q: 'Why is the diagnosis missed between episodes?', a: 'The child looks entirely well and often plays normally — the parent history of the episodes is the diagnosis.' },
      { q: 'What is the presentation that gets worked up as sepsis?', a: 'Profound lethargy and reduced responsiveness without obvious colic.' },
      { q: 'What is redcurrant jelly stool and when does it appear?', a: 'Blood and mucus from mucosal ischaemia — a LATE sign, not an early diagnostic feature.' },
      { q: 'What are the ultrasound signs?', a: 'Target or doughnut sign transversely, pseudokidney sign longitudinally.' },
      { q: 'What is Dance sign?', a: 'An empty right iliac fossa, because the caecum has been drawn proximally.' },
      { q: 'How successful is air enema reduction?', a: 'Roughly 80 to 90% in uncomplicated cases in experienced hands.' },
      { q: 'How is successful reduction confirmed?', a: 'Reflux of air or contrast into the terminal ileum plus clinical improvement.' },
      { q: 'What are the contraindications to enema reduction?', a: 'Perforation or free air, peritonitis, and uncorrected shock.' },
      { q: 'What complication of air enema needs immediate needle decompression?', a: 'Tension pneumoperitoneum splinting the diaphragm.' },
      { q: 'Why push rather than pull at operation?', a: 'Traction tears the oedematous bowel — reduce by squeezing from the distal end.' },
      { q: 'When is a pathological lead point likely?', a: 'Over age 2, in recurrent cases, and in adults — where a tumour is the commonest cause.' },
      { q: 'What is the recurrence rate and when does it occur?', a: '5 to 10% after enema reduction, mostly within the first 24 to 48 hours.' },
      { q: 'Why do most cases follow a viral illness?', a: 'Hypertrophied Peyer patches in the terminal ileum act as the lead point — hence ileocolic predominance.' },
    ],
    checks: [
      'History of paroxysmal episodes obtained from the parent',
      'Child examined when settled, not mid-scream',
      'Bilious vomiting recognised as always abnormal',
      'Lethargy considered as a presentation in its own right',
      'Purpuric rash looked for',
      'Hydration and perfusion assessed and corrected before any procedure',
      'Nasogastric tube and nil by mouth',
      'Ultrasound obtained as first-line imaging',
      'Radiograph used to exclude free air, not to exclude the diagnosis',
      'Surgeon and theatre available before the enema starts',
      'Needle decompression equipment available for air enema',
      'Reduction confirmed by reflux into the terminal ileum',
      'Admitted and observed at least 24 hours',
      'Written safety-netting describing recurrence given to parents',
      'Pathological lead point sought if over 2, recurrent, or an adult',
    ],
    related: ['intestinal_obstruction_levels_causes_and_decisions'],
  },

  {
    id: 'AS-CASE-0056',
    type: 'case',
    specialty: 'Surgery — Paediatric surgery',
    teaching_case: true,
    title: 'CASE: A 5-Week-Old Vomiting Across the Room After Every Feed',
    short: 'Case: hypertrophic pyloric stenosis',
    summary:
      'A hungry baby with projectile non-bilious vomiting. Teaches why the vomiting is NOT bilious and what that excludes, the exact electrolyte picture and why the urine becomes paradoxically acidic, and why this is a MEDICAL emergency corrected before any operation.',
    domains: ['paediatric_surgery', 'paediatrics', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'case pyloric stenosis', 'infantile hypertrophic pyloric stenosis case',
      'projectile vomiting case', 'olive mass', 'test feed', 'paradoxical aciduria',
      'hypochloraemic metabolic alkalosis', 'ramstedt pyloromyotomy',
    ],
    terms: [
      'case', 'hypertrophic pyloric stenosis', 'projectile vomiting', 'non-bilious',
      'pyloric olive', 'visible peristalsis', 'test feed', 'hypochloraemic hypokalaemic metabolic alkalosis',
      'paradoxical aciduria', 'ramstedt pyloromyotomy', 'ultrasound pylorus',
      'apnoea after anaesthesia', 'succus entericus',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '5-week-old firstborn boy with 10 days of vomiting after feeds, now forceful and travelling across the room. He is hungry immediately afterwards and feeds avidly. He has lost weight and his nappies are drier than usual.',

      section_1_the_three_features_that_make_the_diagnosis: {
        one_the_vomiting_is_non_bilious: {
          the_statement: 'THE OBSTRUCTION IS AT THE PYLORUS, WHICH IS PROXIMAL TO THE AMPULLA OF VATER WHERE BILE ENTERS THE DUODENUM. BILE THEREFORE CANNOT REACH THE STOMACH, AND THE VOMIT IS MILKY, NEVER GREEN.',
          the_diagnostic_power:
            'THIS IS THE SINGLE MOST USEFUL DISCRIMINATOR IN NEONATAL AND INFANT VOMITING. NON-BILIOUS VOMITING PLACES THE OBSTRUCTION AT OR ABOVE THE PYLORUS. BILIOUS (GREEN) VOMITING PLACES IT BELOW THE AMPULLA AND MUST TRIGGER AN IMMEDIATE SEARCH FOR MALROTATION WITH VOLVULUS, WHICH IS A DIFFERENT AND FAR MORE URGENT DISEASE. ASKING THE COLOUR OF THE VOMIT IS THE MOST IMPORTANT QUESTION IN THE HISTORY.',
        },
        two_the_vomiting_is_projectile: 'FORCEFUL, TRAVELLING A DISTANCE, OCCURRING SHORTLY AFTER A FEED. It results from vigorous gastric peristalsis against a fixed obstruction. Note that it is often NOT projectile at the outset and becomes so as the hypertrophy progresses — so early cases can be dismissed as reflux or overfeeding.',
        three_the_baby_is_hungry: {
          the_observation: 'HE VOMITS, THEN IMMEDIATELY WANTS TO FEED AGAIN AND FEEDS AVIDLY.',
          why_it_matters: 'A "HUNGRY VOMITER" IS CHARACTERISTIC. AN INFANT VOMITING FROM SEPSIS, RAISED INTRACRANIAL PRESSURE, A METABOLIC DISORDER OR GASTROENTERITIS IS TYPICALLY LETHARGIC AND UNINTERESTED IN FEEDING. THE COMBINATION OF VOMITING PLUS AVID HUNGER PLUS WEIGHT LOSS IS ALMOST DIAGNOSTIC.',
        },
      },

      section_2_clerking: {
        history: 'Vomiting for 10 days, initially small posset-like amounts and now forceful and after every feed. Milky, NEVER GREEN. Hungry immediately afterwards. Fewer wet nappies. Constipated. Weight has fallen from 4.1 kg at birth and 4.4 kg at 2 weeks to 4.0 kg today — HE HAS LOST WEIGHT AND CROSSED CENTILES.',
        the_epidemiology: 'TYPICALLY PRESENTS BETWEEN 2 AND 8 WEEKS OF AGE, most often around 3 to 6 weeks. MUCH COMMONER IN BOYS, roughly 4 to 5 times, AND CLASSICALLY IN FIRSTBORN MALES. A POSITIVE FAMILY HISTORY, especially maternal, substantially increases risk. Associated with ERYTHROMYCIN exposure in the neonate or via a breastfeeding mother, and with bottle feeding and maternal smoking.',
        the_history_to_take: 'THE COLOUR OF THE VOMIT, asked explicitly · the FORCE and TIMING relative to feeds · whether the baby is hungry afterwards · WET NAPPIES AND STOOL FREQUENCY · WEIGHT, plotted against the birth weight and previous measurements · feeding history and volumes · fever or other features of sepsis · and family history.',
        the_weight_chart: 'PLOT THE WEIGHT. A BABY WHO HAS LOST WEIGHT OR CROSSED CENTILES DOWNWARDS HAS A SIGNIFICANT PROBLEM, AND THE CHART TURNS A VAGUE "HE IS VOMITING A LOT" INTO OBJECTIVE EVIDENCE. It is the single most useful piece of paper in paediatric assessment and it is frequently not requested.',
        vitals_and_examination: {
          general: 'Alert but irritable. SUNKEN FONTANELLE, dry mucous membranes, reduced skin turgor, capillary refill 3 seconds — MODERATELY DEHYDRATED. Weight 4.0 kg.',
          visible_peristalsis: 'WATCH THE ABDOMEN DURING A FEED WITH THE LIGHT ACROSS IT — GASTRIC PERISTALTIC WAVES MAY BE SEEN MOVING FROM LEFT TO RIGHT ACROSS THE UPPER ABDOMEN. It is a striking sign when present.',
          the_test_feed: {
            what_it_is: 'THE CLASSICAL BEDSIDE EXAMINATION. FEED THE BABY — the sucking relaxes the abdominal wall and settles them — AND PALPATE IN THE EPIGASTRIUM OR RIGHT UPPER QUADRANT, JUST TO THE RIGHT OF THE MIDLINE AND BELOW THE LIVER EDGE, WITH THE BABY LYING ON THEIR LEFT SIDE OR OVER THE PARENT SHOULDER.',
            the_finding: 'THE HYPERTROPHIED PYLORUS IS PALPABLE AS A FIRM, SMOOTH, MOBILE MASS ABOUT THE SIZE AND SHAPE OF AN OLIVE.',
            the_honest_status: 'A PALPABLE OLIVE IS ESSENTIALLY DIAGNOSTIC AND, IN SOME CENTRES, REMOVES THE NEED FOR IMAGING. BUT IT REQUIRES PATIENCE AND EXPERIENCE, AND WITH THE AVAILABILITY OF ULTRASOUND FEWER CLINICIANS ARE PRACTISED AT IT. FAILURE TO FEEL IT EXCLUDES NOTHING. Attempt it — it is a genuine skill worth having — but do not rely on its absence.',
          },
        },
      },

      section_3_the_biochemistry_which_is_the_examinable_core: {
        what_is_lost: 'PERSISTENT VOMITING OF PURELY GASTRIC CONTENTS LOSES HYDROGEN IONS (HCl), CHLORIDE, SODIUM, POTASSIUM AND WATER. CRUCIALLY, NOTHING FROM BELOW THE PYLORUS IS LOST — no bicarbonate-rich duodenal secretions — WHICH IS WHY THE PICTURE IS SO PURE AND SO CHARACTERISTIC.',
        the_classic_picture: 'HYPOCHLORAEMIC, HYPOKALAEMIC METABOLIC ALKALOSIS. Low chloride, low potassium, low sodium, raised bicarbonate, alkalotic pH.',
        the_paradoxical_aciduria_explained_step_by_step: {
          the_puzzle: 'THE BABY IS ALKALOTIC, SO THE KIDNEY SHOULD EXCRETE ALKALINE URINE AND RETAIN ACID. INSTEAD, THE URINE BECOMES ACIDIC. WHY?',
          the_sequence: [
            '1. EARLY, the kidney does the appropriate thing: it excretes BICARBONATE to correct the alkalosis, and to maintain electroneutrality it excretes SODIUM alongside it. The urine is alkaline.',
            '2. But sodium loss worsens the already severe VOLUME DEPLETION.',
            '3. AT THAT POINT THE KIDNEY PRIORITY CHANGES. PRESERVING CIRCULATING VOLUME OUTRANKS CORRECTING pH. Aldosterone is activated and the kidney reabsorbs sodium avidly in the distal tubule.',
            '4. Sodium reabsorption there requires exchange for either POTASSIUM or HYDROGEN. Potassium is already depleted from the vomiting, SO THE KIDNEY IS FORCED TO EXCRETE HYDROGEN IONS INSTEAD.',
            '5. THE RESULT IS ACIDIC URINE IN AN ALKALOTIC BABY — PARADOXICAL ACIDURIA — AND IT WORSENS THE ALKALOSIS FURTHER.',
          ],
          why_it_matters_clinically: 'PARADOXICAL ACIDURIA IS A MARKER OF SEVERE, ESTABLISHED DEHYDRATION AND POTASSIUM DEPLETION. IT SIGNALS A BABY WHO NEEDS AGGRESSIVE AND CAREFUL CORRECTION, NOT A QUICK TRIP TO THEATRE. It is also one of the cleanest illustrations in medicine of the kidney trading one problem for another when volume is threatened.',
        },
      },

      section_4_investigations: {
        the_essential_bloods: 'UREA AND ELECTROLYTES INCLUDING CHLORIDE — chloride must be requested specifically in many laboratories and is the key marker. VENOUS OR CAPILLARY BLOOD GAS for pH and bicarbonate. GLUCOSE. Full blood count. Group and save. THE BIOCHEMISTRY GUIDES THE RESUSCITATION AND DETERMINES WHEN THE BABY IS FIT FOR ANAESTHESIA.',
        ultrasound: {
          the_status: 'THE INVESTIGATION OF CHOICE — non-invasive, no radiation, and highly accurate in experienced hands.',
          the_criteria: 'PYLORIC MUSCLE THICKNESS GREATER THAN ABOUT 3 mm AND PYLORIC CHANNEL LENGTH GREATER THAN ABOUT 15 to 17 mm, with failure of gastric contents to pass. Thresholds vary slightly between centres and with the age of the infant.',
          the_practical_note: 'IF THE SCAN IS EQUIVOCAL AND THE CLINICAL PICTURE IS STRONG, REPEAT IT AFTER A DAY OR TWO — the hypertrophy progresses and an early scan can be borderline.',
        },
        contrast_study: 'A barium or water-soluble upper gastrointestinal contrast study shows the "STRING SIGN" of the elongated narrowed channel and the "SHOULDER SIGN" of the mass indenting the antrum. IT IS RARELY NEEDED NOW, BUT AN UPPER GASTROINTESTINAL CONTRAST STUDY IS THE INVESTIGATION OF CHOICE IF MALROTATION IS THE CONCERN — a different question entirely.',
      },

      section_5_management: {
        the_single_most_important_principle: {
          the_statement:
            'PYLORIC STENOSIS IS A MEDICAL EMERGENCY, NOT A SURGICAL ONE. THE OBSTRUCTION IS NOT STRANGULATING AND THE BOWEL IS NOT ISCHAEMIC. THE DANGER IS THE DEHYDRATION AND THE METABOLIC DERANGEMENT. THE BABY MUST BE FULLY RESUSCITATED AND BIOCHEMICALLY CORRECTED BEFORE ANY OPERATION.',
          why_operating_early_is_dangerous:
            'ANAESTHETISING AN ALKALOTIC, HYPOKALAEMIC, DEHYDRATED INFANT RISKS ARRHYTHMIA AND, SPECIFICALLY, POSTOPERATIVE APNOEA. METABOLIC ALKALOSIS SUPPRESSES THE CENTRAL RESPIRATORY DRIVE, BECAUSE CENTRAL CHEMORECEPTORS RESPOND TO CEREBROSPINAL FLUID pH — AN ALKALOTIC BABY UNDER-BREATHES AFTER ANAESTHESIA AND CAN HAVE PROLONGED APNOEAS. THIS IS THE SPECIFIC REASON THE ALKALOSIS MUST BE CORRECTED FIRST, AND IT IS THE POINT THAT EXPLAINS EVERYTHING ELSE ABOUT THE MANAGEMENT.',
          the_practical_rule: 'THERE IS NO SUCH THING AS AN EMERGENCY PYLOROMYOTOMY. Correcting the biochemistry usually takes 24 to 48 hours, occasionally longer, and that time is treatment, not delay.',
        },
        a_fluid_resuscitation_and_correction: {
          if_shocked: 'BOLUS of 10 to 20 mL/kg of BALANCED CRYSTALLOID OR SODIUM CHLORIDE 0.9%, repeated as needed. FOR THIS 4 kg BABY, A 20 mL/kg BOLUS IS 80 mL.',
          then_replacement: 'MAINTENANCE PLUS DEFICIT, using a sodium chloride-containing fluid WITH ADDED POTASSIUM once urine output is established. Sodium chloride 0.9% with 5% glucose and added potassium chloride is a common choice. THE CHLORIDE IS THE POINT — replacing chloride allows the kidney to stop retaining bicarbonate and lets the alkalosis correct itself.',
          the_potassium_rule: 'DO NOT ADD POTASSIUM UNTIL THE BABY IS PASSING URINE. Then replace it, because the total body deficit is large even when the serum level looks only modestly low.',
          monitoring: 'Regular electrolytes and gas, urine output, weight, and clinical hydration.',
        },
        b_the_targets_before_theatre: 'THE BABY IS GENERALLY CONSIDERED FIT FOR SURGERY WHEN: CHLORIDE IS ABOVE ROUGHLY 100 mmol/L · BICARBONATE IS BELOW ROUGHLY 26 TO 30 mmol/L · SODIUM AND POTASSIUM ARE NORMAL · AND THE BABY IS CLINICALLY WELL HYDRATED WITH GOOD URINE OUTPUT. LOCAL THRESHOLDS VARY — KNOW YOURS, AND AGREE THEM WITH THE ANAESTHETIST.',
        c_supportive: 'NIL BY MOUTH. NASOGASTRIC TUBE on free drainage with aspirates measured and REPLACED millilitre for millilitre with sodium chloride 0.9% plus potassium, because the aspirate is continued loss of exactly what you are trying to replace. Keep warm. Monitor glucose — these babies are at risk of hypoglycaemia.',
        d_the_operation: {
          ramstedt_pyloromyotomy: 'THE MUSCLE OF THE PYLORUS IS INCISED LONGITUDINALLY DOWN TO, BUT NOT THROUGH, THE MUCOSA, WHICH THEN POUTS THROUGH THE DIVIDED MUSCLE AND RELIEVES THE OBSTRUCTION. Performed open through a right upper quadrant or periumbilical incision, or LAPAROSCOPICALLY.',
          the_key_technical_risk: 'PERFORATION OF THE MUCOSA, most commonly at the DUODENAL end where the mucosa is closest to the surface. It is tested for at operation by insufflating air through the nasogastric tube. If it occurs it is repaired, and feeding is delayed.',
          the_other_risk: 'INCOMPLETE MYOTOMY, causing persistent vomiting — the myotomy must extend far enough proximally onto the antrum.',
        },
        e_after_the_operation: {
          feeding: 'FEEDS ARE USUALLY REINTRODUCED WITHIN A FEW HOURS AND GRADED UP. Most babies are feeding normally within 24 to 48 hours.',
          the_expected_vomiting: 'SOME VOMITING IN THE FIRST 24 TO 48 HOURS IS COMMON AND EXPECTED, FROM GASTRIC ATONY AND OEDEMA AT THE MYOTOMY SITE. IT DOES NOT MEAN THE OPERATION HAS FAILED. WARN THE PARENTS OF THIS EXPLICITLY BEFORE IT HAPPENS — otherwise a normal postoperative course is experienced as a disaster. PERSISTENT vomiting beyond a few days should prompt consideration of incomplete myotomy or another diagnosis such as reflux.',
          apnoea_monitoring: 'MONITOR FOR POSTOPERATIVE APNOEA, particularly if the alkalosis was significant or the infant is young or was premature.',
          prognosis: 'EXCELLENT. The condition does not recur and there are no long-term sequelae. Say so to the parents, who are usually frightened.',
        },
      },

      section_6_teaching_points: {
        bonus_1_ask_the_colour_of_the_vomit:
          'NON-BILIOUS places the obstruction at or above the pylorus. BILIOUS places it below the ampulla and demands an immediate search for malrotation with volvulus. It is the most important question in the history of any vomiting infant, and it separates a condition corrected over 48 hours from one that destroys the midgut in hours.',
        bonus_2_the_hungry_vomiter:
          'He vomits then feeds avidly. Infants vomiting from sepsis, raised intracranial pressure or metabolic disease are lethargic and uninterested. Vomiting plus avid hunger plus weight loss is close to diagnostic.',
        bonus_3_paradoxical_aciduria:
          'Early the kidney excretes bicarbonate with sodium, which worsens volume depletion. Once volume is threatened, preserving it outranks correcting pH: aldosterone drives sodium reabsorption in exchange for potassium — and when potassium is depleted, for HYDROGEN. Hence acid urine in an alkalotic baby, which worsens the alkalosis.',
        bonus_4_this_is_a_medical_emergency_not_a_surgical_one:
          'The bowel is not ischaemic. The danger is dehydration and alkalosis. There is no such thing as an emergency pyloromyotomy, and the 24 to 48 hours of correction is treatment, not delay.',
        bonus_5_alkalosis_causes_postoperative_apnoea:
          'Central chemoreceptors respond to cerebrospinal fluid pH, so an alkalotic baby under-breathes after anaesthesia and can have prolonged apnoeas. That single physiological fact is why the biochemistry must be corrected before theatre.',
        bonus_6_replace_the_nasogastric_aspirate_millilitre_for_millilitre:
          'The aspirate is continued loss of exactly the chloride, potassium and hydrogen you are trying to replace. Measuring it and replacing it with saline plus potassium is how the correction actually happens.',
        bonus_7_warn_the_parents_about_postoperative_vomiting:
          'Vomiting for the first 24 to 48 hours is expected from gastric atony and myotomy site oedema. Told in advance it is a normal course; discovered without warning it feels like the operation failed.',
        trap_1: 'PLOT THE WEIGHT against birth weight and previous measurements — it converts "vomiting a lot" into objective evidence.',
        trap_2: 'Failure to feel the olive excludes nothing — the skill is worth having but its absence is not reassurance.',
        trap_3: 'Request CHLORIDE specifically — it is the key marker and is not always included by default.',
        trap_4: 'Do not add potassium until the baby is passing urine.',
        trap_5: 'If the ultrasound is equivocal and the picture is strong, repeat it in a day or two — the hypertrophy progresses.',
        trap_6: 'Mucosal perforation at the duodenal end is the main technical risk, tested by air insufflation at operation.',
        one_line_summary: 'Hypertrophic pyloric stenosis at 5 weeks. Non-bilious vomiting in a hungry baby who is losing weight, hypochloraemic hypokalaemic alkalosis with paradoxical aciduria — correct the biochemistry over 24 to 48 hours, then operate, because an alkalotic baby stops breathing after anaesthesia.',
      },
    },
    warnings: [
      'ASK THE COLOUR OF THE VOMIT — bilious (green) vomiting means malrotation with volvulus until proven otherwise, a different and far more urgent disease.',
      'THIS IS A MEDICAL EMERGENCY, NOT A SURGICAL ONE — the danger is dehydration and alkalosis, not ischaemic bowel.',
      'THERE IS NO SUCH THING AS AN EMERGENCY PYLOROMYOTOMY — correct the biochemistry first, over 24 to 48 hours.',
      'METABOLIC ALKALOSIS SUPPRESSES RESPIRATORY DRIVE AND CAUSES POSTOPERATIVE APNOEA — this is why correction precedes surgery.',
      'REQUEST CHLORIDE SPECIFICALLY — it is the key marker and is not always included by default.',
      'DO NOT ADD POTASSIUM until the baby is passing urine.',
      'REPLACE NASOGASTRIC ASPIRATE millilitre for millilitre with saline plus potassium — it is continued loss of what you are replacing.',
      'PARADOXICAL ACIDURIA indicates severe established dehydration and potassium depletion.',
      'PLOT THE WEIGHT against birth weight and previous measurements.',
      'FAILURE TO FEEL THE OLIVE EXCLUDES NOTHING.',
      'If the ultrasound is equivocal but the picture is strong, repeat it after a day or two.',
      'VOMITING FOR 24 TO 48 HOURS AFTER SURGERY IS EXPECTED — warn parents explicitly or a normal course feels like failure.',
      'Persistent vomiting beyond a few days suggests incomplete myotomy or another diagnosis.',
      'Mucosal perforation at the duodenal end is the main technical risk and is tested for at operation.',
      'MONITOR FOR POSTOPERATIVE APNOEA, especially with significant alkalosis or prematurity.',
      'Fluid volumes and thresholds here are teaching examples. Follow local paediatric surgical guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Biochemical thresholds for theatre, fluid regimens and feeding protocols vary between centres.',
      'Ultrasound criteria vary slightly with infant age and local practice.',
    ],
    cards: [
      { q: 'Why is the vomiting non-bilious?', a: 'The obstruction is at the pylorus, proximal to the ampulla of Vater, so bile cannot reach the stomach.' },
      { q: 'What does bilious vomiting in an infant mean?', a: 'Obstruction below the ampulla — malrotation with volvulus until proven otherwise.' },
      { q: 'What is the "hungry vomiter" and why does it matter?', a: 'The baby feeds avidly after vomiting — infants vomiting from sepsis or raised pressure are lethargic and uninterested.' },
      { q: 'Give the classic biochemical picture.', a: 'Hypochloraemic, hypokalaemic metabolic alkalosis with hyponatraemia and raised bicarbonate.' },
      { q: 'Explain paradoxical aciduria.', a: 'Volume preservation outranks pH: aldosterone drives sodium reabsorption in exchange for potassium, and when potassium is depleted, for hydrogen.' },
      { q: 'Why must the alkalosis be corrected before surgery?', a: 'Central chemoreceptors respond to CSF pH — an alkalotic baby under-breathes after anaesthesia and can have prolonged apnoeas.' },
      { q: 'What is a test feed?', a: 'Feeding the baby to relax the abdominal wall while palpating for the olive-sized pyloric mass in the epigastrium.' },
      { q: 'Give the ultrasound criteria.', a: 'Muscle thickness over about 3 mm and channel length over about 15 to 17 mm, with failure of gastric emptying.' },
      { q: 'What are the biochemical targets before theatre?', a: 'Chloride above roughly 100, bicarbonate below roughly 26 to 30, normal sodium and potassium, good urine output.' },
      { q: 'Describe the operation.', a: 'Ramstedt pyloromyotomy — the pyloric muscle is incised down to but not through the mucosa.' },
      { q: 'What is the main technical risk?', a: 'Mucosal perforation, most often at the duodenal end, tested for by air insufflation.' },
      { q: 'Why does vomiting persist for a day or two after surgery?', a: 'Gastric atony and oedema at the myotomy site — expected, and parents should be warned in advance.' },
    ],
    checks: [
      'Colour of the vomit established explicitly',
      'Hunger after vomiting noted',
      'Weight plotted against birth weight and previous measurements',
      'Hydration assessed clinically',
      'Test feed attempted for the pyloric olive',
      'Urea, electrolytes INCLUDING CHLORIDE and a blood gas sent',
      'Ultrasound arranged',
      'Fluid resuscitation started, with potassium added only once passing urine',
      'Nasogastric tube on free drainage with aspirate measured and replaced',
      'Biochemical targets reached before theatre and agreed with the anaesthetist',
      'Glucose monitored',
      'Postoperative apnoea monitoring arranged',
      'Parents warned that vomiting for 24 to 48 hours after surgery is expected',
      'Excellent long-term prognosis explained',
    ],
    related: ['vomiting_in_the_infant_the_bilious_versus_non_bilious_split'],
  },
];
