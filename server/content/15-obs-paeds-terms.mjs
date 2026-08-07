/**
 * Obstetric and paediatric shorthand, with clerking examples.
 *
 * Source review note: the supplied document's GTPAL section uses "P" for both
 * *para* and *preterm* in adjacent lines, which is internally inconsistent and
 * is a real cause of documentation error. Corrected here.
 */

export default [
  {
    id: 'AS-OBGY-0001',
    type: 'shorthand',
    title: 'Obstetric Shorthand — Gravida, Para, GTPAL, EDD and Gestational Age',
    short: 'Obstetric terms',
    summary:
      'The notation that opens every obstetric note. Gravida counts pregnancies; para counts births past viability. The commonest documentation error is using "P" for both para and preterm — they are different things.',
    domains: ['obstetrics', 'gynaecology'],
    intents: ['clerk', 'identify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['gravida', 'para', 'gtpal', 'edd', 'lmp', 'gestational age', 'obstetric history', 'naegele'],
    terms: ['gravida', 'para', 'gtpal', 'edd', 'lmp', 'gestation', 'naegele', 'parity', 'primigravida', 'multiparous', 'nulliparous', 'symphysis fundal height'],
    confirm_locally: true,
    body: {
      gravida_and_para: {
        gravida: 'The total number of PREGNANCIES, including the current one, and including miscarriages, terminations and ectopics. A twin pregnancy is ONE gravida.',
        para: 'The number of pregnancies carried BEYOND the threshold of viability, whether the baby was born alive or stillborn. A twin delivery is usually recorded as ONE para (some units record 2 — know your local convention).',
        the_viability_threshold: 'Conventionally 24 weeks in many systems, 20 weeks in others. This threshold is JURISDICTIONAL. Confirm the local definition before recording parity.',
        terms: 'NULLIgravida: never pregnant. PRIMIgravida: pregnant for the first time. MULTIgravida: two or more pregnancies. NULLIpara: no birth past viability. PRIMIpara: one. GRAND MULTIPARA: conventionally five or more, and a recognised risk group for malpresentation, uterine rupture and postpartum haemorrhage.',
        worked_example: 'A woman currently pregnant, with two previous term births and one first-trimester miscarriage, is G4 P2.',
      },
      gtpal: {
        what: 'A five-part expansion that removes the ambiguity of "para".',
        the_letters: {
          G: 'Gravida — total pregnancies including this one.',
          T: 'TERM births — delivered at 37 weeks or more.',
          P: 'PRETERM births — delivered from the viability threshold to before 37 weeks. NOTE: here P means PRETERM, not para.',
          A: 'ABORTIONS — pregnancy losses before viability, spontaneous or induced. Ectopics are included by most conventions.',
          L: 'LIVING children now.',
        },
        the_error_to_avoid:
          'Writing "P" for para in one place and preterm in another within the same note. In GTPAL, P is ALWAYS preterm. If you mean parity, write "para" in words or use G_P_ notation separately. Mixing them has produced real errors in handover.',
        worked_example:
          'A woman pregnant now, with one term birth, one birth at 32 weeks, one miscarriage, and both children alive: G4 T1 P1 A1 L2. Read aloud: "gravida four, one term, one preterm, one loss, two living."',
        the_check: 'T + P + A should equal G minus the current pregnancy. If it does not, the history is incomplete.',
      },
      dating: {
        lmp: 'The FIRST day of the last menstrual period. Not the last day. This single point is a frequent source of a week\'s dating error.',
        naegele_rule: 'EDD = LMP + 1 year − 3 months + 7 days. It assumes a regular 28-day cycle with ovulation on day 14; adjust for cycle length, and it is unreliable with irregular cycles, recent hormonal contraception or lactational amenorrhoea.',
        ultrasound_dating:
          'A FIRST-TRIMESTER scan (crown-rump length) is the most accurate dating method and should override LMP dating where they differ by more than the locally accepted margin. Accuracy falls progressively with advancing gestation — a third-trimester scan is poor for dating and should not be used to redate.',
        gestational_age_notation: 'Written weeks + days, as "34+2". The convention "34/40" means 34 weeks of an expected 40.',
        symphysis_fundal_height:
          'From about 24 weeks, the height in centimetres approximates the gestation in weeks, within roughly ±2–3 cm. A discrepancy beyond that warrants a growth scan. It is affected by maternal habitus, fibroids, liquor volume, lie and a full bladder — measure with the bladder empty and use it as a screening tool, not a measurement.',
      },
      recording_a_useful_obstetric_history: [
        'For EACH previous pregnancy: year, gestation at delivery, mode of delivery and indication, birth weight, complications, and the outcome and current health of the child.',
        'Previous CAESAREAN — how many, what type of uterine incision, and why. This governs the safety of a future vaginal birth.',
        'Previous postpartum haemorrhage, pre-eclampsia, gestational diabetes, preterm birth, stillbirth — each predicts recurrence.',
        'This pregnancy: dating method, booking bloods, blood group and antibody status, scans, and any complication so far.',
      ],
      key_conditions_the_notation_flags: {
        pre_eclampsia: 'New hypertension after 20 weeks with proteinuria or other organ involvement. Cure is delivery. Magnesium sulphate is for seizure prophylaxis and treatment.',
        gestational_diabetes: 'Glucose intolerance first recognised in pregnancy; screened by oral glucose tolerance test at the locally specified gestation in at-risk women.',
        iugr_and_sga: 'Growth restriction is a PROCESS (the fetus has not reached its potential); small-for-gestational-age is a MEASUREMENT below a centile. A baby can be SGA and healthy, or normal-sized and growth-restricted.',
        oligohydramnios_and_polyhydramnios: 'Too little liquor suggests ruptured membranes, renal or placental problems; too much suggests maternal diabetes or a fetal swallowing or neurological problem.',
        cephalopelvic_disproportion: 'A retrospective diagnosis, made on failure to progress despite adequate contractions — not something to predict from pelvic size alone.',
      },
    },
    warnings: [
      'The viability threshold defining parity differs between jurisdictions (commonly 20 or 24 weeks). Confirm your local definition.',
      'In GTPAL, P means PRETERM, never para. Mixing the two causes real handover errors.',
      'First-trimester ultrasound overrides LMP dating. Do not redate on a third-trimester scan.',
      'Symphysis-fundal height is a screening tool with wide error margins, not a measurement of fetal size.',
      'Always record the type of previous uterine incision, not just "previous caesarean" — it governs future delivery safety.',
    ],
    limitations: ['Conventions for twins, ectopics and the viability threshold vary by unit and country.'],
    cards: [
      { q: 'What does gravida count?', a: 'All pregnancies including the current one, and including miscarriages, terminations and ectopics. Twins count as one.' },
      { q: 'In GTPAL, what does P stand for?', a: 'PRETERM births — never para. That confusion is a documented source of error.' },
      { q: 'State Naegele rule.', a: 'EDD = first day of LMP + 1 year − 3 months + 7 days, assuming a regular 28-day cycle.' },
      { q: 'Which dating method takes precedence?', a: 'First-trimester ultrasound (crown-rump length). Accuracy falls with advancing gestation.' },
      { q: 'G4 T1 P1 A1 L2 — read it aloud.', a: 'Gravida four, one term birth, one preterm birth, one loss, two living children.' },
      { q: 'SGA versus growth restriction?', a: 'SGA is a measurement below a centile. Growth restriction is a failure to reach growth potential. A baby can be either without the other.' },
    ],
    checks: ['Local viability threshold confirmed', 'GTPAL internally consistent (T+P+A = G−1)', 'Dating method recorded', 'Previous caesarean incision type documented', 'Blood group and antibody status recorded'],
  },

  {
    id: 'AS-PAED-0001',
    type: 'shorthand',
    title: 'Paediatric Shorthand and Clerking — Growth, Milestones and the Numbers That Differ by Age',
    short: 'Paediatric terms',
    summary:
      'Children are not small adults, and the single biggest source of error is applying adult normal ranges. Respiratory rate, heart rate and blood pressure all change with age. Weight drives every drug dose.',
    domains: ['paediatrics', 'neonatology', 'nutrition'],
    intents: ['clerk', 'examine'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['paediatric clerking', 'pediatric terms', 'milestones', 'growth chart', 'muac', 'sam', 'mam', 'centile', 'z score'],
    terms: ['paediatric', 'milestone', 'centile', 'z score', 'muac', 'sam', 'mam', 'stunting', 'wasting', 'weight for age', 'imci', 'red flags', 'safeguarding', 'apgar'],
    confirm_locally: true,
    body: {
      growth_vocabulary: {
        the_three_measures: 'WEIGHT-for-age, HEIGHT (or length)-for-age, and WEIGHT-for-HEIGHT. They answer different questions and are frequently conflated.',
        wasting: 'Low WEIGHT-FOR-HEIGHT. Reflects ACUTE malnutrition — recent, and potentially rapidly reversible.',
        stunting: 'Low HEIGHT-FOR-AGE. Reflects CHRONIC malnutrition over months to years, and is largely irreversible after early childhood.',
        underweight: 'Low WEIGHT-FOR-AGE. A composite that cannot distinguish the two above, which is why it is the least useful of the three on its own.',
        z_scores_and_centiles: 'A z-score is the number of standard deviations from the reference median. Below −2 is conventionally moderate, below −3 severe. Centiles express the same thing as a percentage position.',
        the_single_most_useful_thing: 'The TREND across serial measurements, not any one point. A child tracking steadily along the 9th centile is usually fine; a child CROSSING centiles downward is not, whatever centile they are currently on.',
      },
      muac_and_acute_malnutrition: {
        muac: 'Mid-upper arm circumference, used in children aged 6–59 months. Requires only a colour-banded tape, needs no scales or arithmetic, and is less distorted by oedema than weight.',
        classification: 'Severe and moderate acute malnutrition are defined by MUAC bands and/or weight-for-height z-score, and by the presence of oedema. The exact cut-offs are set by national protocol — use the current national guideline.',
        the_non_negotiable:
          'BILATERAL PITTING OEDEMA of the feet defines SEVERE acute malnutrition REGARDLESS of the MUAC or weight. A child with oedema can look deceptively well-nourished and be critically ill. Always press over both feet for several seconds.',
        the_appetite_test: 'Whether a child can eat therapeutic food determines outpatient versus inpatient management in most protocols, alongside medical complications.',
        refeeding_caution: 'Severely malnourished children are physiologically adapted to starvation. Feeding must follow the stabilisation protocol; fluid and feeding errors kill more of these children than the malnutrition itself.',
      },
      developmental_milestones: {
        the_four_domains: 'GROSS MOTOR, FINE MOTOR AND VISION, SPEECH AND HEARING, and SOCIAL/BEHAVIOURAL. Delay in one domain means something different from global delay in all four.',
        broad_anchors: [
          '6 weeks — smiles responsively, fixes and follows.',
          '6 months — sits with support, reaches and palmar grasps, babbles.',
          '9–10 months — sits unsupported, pincer grip developing, responds to name.',
          '12 months — pulls to stand or cruises, one or two words with meaning, waves.',
          '18 months — walks steadily, several words, points to indicate wants.',
          '2 years — runs, two-word phrases, feeds with a spoon.',
          '3 years — climbs stairs alternating feet, short sentences, plays alongside others.',
        ],
        the_caveat: 'These are broad anchors, and the accepted RANGE around each is wide. Use the locally validated developmental schedule; do not label delay from a remembered list.',
        limit_ages_and_red_flags: [
          'NOT smiling by 8–10 weeks.',
          'NOT sitting unsupported by 9 months.',
          'NOT walking by 18 months.',
          'NO words by 18 months, or no two-word phrases by 2 years.',
          'HAND PREFERENCE before 12 months — abnormal, and suggests a hemiplegia on the non-preferred side.',
          'REGRESSION — the loss of a skill previously attained. This is a red flag at ANY age and always warrants urgent investigation.',
        ],
      },
      the_numbers_that_differ_by_age: {
        the_principle: 'Normal respiratory rate, heart rate and blood pressure all vary with age. A respiratory rate of 40 is normal in an infant and alarming in a teenager. Never apply adult ranges.',
        practical_rule: 'Use the age-banded observation chart your unit uses, and a paediatric early warning score. Do not eyeball it.',
        tachypnoea: 'The most sensitive single sign of pneumonia in a child, and the basis of IMCI case management.',
        the_pitfall_of_blood_pressure: 'Children compensate shock by increasing heart rate and vasoconstricting, holding blood pressure NORMAL until very late. HYPOTENSION IN A CHILD IS A PRE-TERMINAL SIGN. Judge perfusion by capillary refill, peripheral temperature, pulse volume, conscious level and urine output — not by blood pressure.',
        weight: 'Weight drives every drug and fluid calculation. Weigh the child. Where that is impossible in an emergency, use a length-based tape or the locally endorsed estimation method — but weigh as soon as feasible.',
      },
      the_paediatric_clerking_structure: [
        'Presenting complaint and its history.',
        'BIRTH history — gestation, mode of delivery, birth weight, resuscitation needed, neonatal unit admission, jaundice.',
        'FEEDING — breast or formula, volumes and frequency, weaning, and current intake during this illness.',
        'GROWTH — plot it on the chart, do not just record a number.',
        'DEVELOPMENT — the four domains, and any concern from the parent.',
        'IMMUNISATIONS — up to date? Check the CARD, do not accept "yes".',
        'Past medical, drug and allergy history.',
        'FAMILY history including consanguinity, and any childhood deaths in the family.',
        'SOCIAL — who cares for the child, housing, school or nursery, smoking in the home, and any safeguarding concern.',
      ],
      safeguarding:
        'Consider it in every child. Features that should raise concern: an injury inconsistent with the history given or with the child\'s developmental stage, delayed presentation, changing accounts, bruising in a NON-MOBILE infant, injuries to protected sites (ears, neck, torso, buttocks, genitals), recurrent attendances, and the demeanour of the child. Follow the local safeguarding procedure; document exactly what was said and by whom, in quotation marks.',
      neonatal_notes: {
        apgar: 'Scored at 1 and 5 minutes on appearance, pulse, grimace, activity and respiration. It describes the transition and the response to resuscitation. It does NOT predict long-term outcome and must not be used to guide whether to resuscitate.',
        jaundice_timing:
          'Jaundice in the FIRST 24 HOURS is always pathological — haemolysis until proven otherwise — and needs urgent bilirubin measurement. Jaundice after 14 days (21 in preterm) is PROLONGED and needs a SPLIT bilirubin: a raised CONJUGATED fraction means biliary atresia until excluded, and that diagnosis is time-critical because surgical outcome falls sharply with age.',
        kernicterus: 'Bilirubin encephalopathy. Preventable by measuring and treating against the age-specific threshold chart. Never assess neonatal jaundice by eye alone.',
      },
    },
    warnings: [
      'HYPOTENSION IN A CHILD IS PRE-TERMINAL. Assess perfusion by capillary refill, pulse volume, conscious level and urine output — a normal blood pressure does not exclude shock.',
      'Bilateral pitting oedema defines severe acute malnutrition regardless of weight or MUAC.',
      'Never apply adult observation ranges to a child. Use the age-banded chart.',
      'Jaundice in the first 24 hours of life is always pathological. Prolonged jaundice needs a SPLIT bilirubin — conjugated jaundice is biliary atresia until excluded.',
      'Loss of a previously attained developmental skill (regression) is a red flag at any age.',
      'Bruising in a non-mobile infant requires safeguarding assessment.',
      'Weight drives every paediatric dose. Weigh the child.',
    ],
    limitations: ['Milestone ranges, malnutrition cut-offs and observation ranges are all protocol-specific. Use current national guidance.'],
    cards: [
      { q: 'Wasting versus stunting?', a: 'Wasting is low weight-for-height (acute). Stunting is low height-for-age (chronic, largely irreversible).' },
      { q: 'What defines severe acute malnutrition regardless of measurements?', a: 'Bilateral pitting oedema of the feet.' },
      { q: 'Why is blood pressure misleading in a shocked child?', a: 'Children compensate until very late. Hypotension is a pre-terminal sign.' },
      { q: 'Hand preference before 12 months means what?', a: 'It is abnormal and suggests a hemiplegia on the non-preferred side.' },
      { q: 'Jaundice in the first 24 hours of life?', a: 'Always pathological — haemolysis until proven otherwise. Measure bilirubin urgently.' },
      { q: 'What does a prolonged jaundice screen need?', a: 'A SPLIT bilirubin. A raised conjugated fraction is biliary atresia until excluded — time-critical.' },
      { q: 'What does the Apgar score not do?', a: 'It does not predict long-term outcome and must not guide whether to resuscitate.' },
    ],
    checks: ['Growth plotted on a chart, not just recorded', 'Bilateral pitting oedema checked', 'Age-appropriate observation ranges used', 'Immunisation card seen', 'Development screened across four domains', 'Weight measured before dosing', 'Safeguarding considered and documented'],
  },
];
