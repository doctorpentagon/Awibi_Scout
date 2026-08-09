/**
 * Paediatric calculators, from the charts supplied.
 *
 * The op set is closed (add, sub, mul, div, pow, sum, var, const) and there is
 * no branching — but `boolean` inputs coerce to 1/0, which is enough to express
 * the sex adjustment in mid-parental height as real arithmetic rather than as
 * two near-duplicate entries.
 *
 * Where a result genuinely requires a reference TABLE rather than a formula
 * (weight-for-age percentiles, Lubchenco), the entry says so instead of
 * inventing a curve. A fabricated centile is worse than no centile.
 */

export default [
  {
    id: 'AS-PCAL-0001',
    type: 'calculator',
    title: 'New Ballard Score — Gestational Age From Examination',
    short: 'Ballard score',
    summary:
      'Twelve criteria — six neuromuscular, six physical — each scored −1 to 5. The total converts LINEARLY to gestational age: weeks = 24 + 0.4 × score. Most useful when dates are unknown or disputed, which in practice is most of the time.',
    domains: ['paediatrics', 'neonatology', 'obstetrics'],
    intents: ['calculate', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['ballard score', 'new ballard score', 'ballard', 'gestational age assessment', 'dubowitz', 'maturity rating', 'gestational age from examination'],
    terms: ['ballard', 'gestational age', 'maturity', 'neuromuscular maturity', 'physical maturity', 'posture', 'square window', 'arm recoil', 'popliteal angle', 'scarf sign', 'heel to ear', 'lanugo', 'plantar creases', 'areola', 'preterm', 'postterm'],
    confirm_locally: true,
    inputs: [
      { key: 'neuromuscular', label: 'Neuromuscular maturity subtotal', type: 'number', unit: 'points', dimension: 'score', min: -6, max: 30, required: true, note: 'Posture, square window, arm recoil, popliteal angle, scarf sign, heel to ear — each −1 to 5' },
      { key: 'physical', label: 'Physical maturity subtotal', type: 'number', unit: 'points', dimension: 'score', min: -6, max: 30, required: true, note: 'Skin, lanugo, plantar surface, breast, eye/ear, genitals — each −1 to 5' },
    ],
    logic: {
      op: 'add',
      args: [
        { op: 'const', args: [24] },
        { op: 'mul', args: [{ op: 'const', args: [0.4] }, { op: 'add', args: [{ op: 'var', args: ['neuromuscular'] }, { op: 'var', args: ['physical'] }] }] },
      ],
    },
    outputs: [
      {
        key: 'gestational_age', label: 'Estimated gestational age', unit: 'weeks', dimension: 'time', decimals: 1, rounding: 'half_up',
        bands: [
          { min: null, max: 28, label: 'Extremely preterm', action: 'Needs the highest level of neonatal care available. Thermal control, surfactant and feeding support are immediate priorities.' },
          { min: 28, max: 32, label: 'Very preterm', action: 'Neonatal unit. High risk of respiratory distress, hypothermia, hypoglycaemia and sepsis.' },
          { min: 32, max: 37, label: 'Moderate to late preterm', action: 'Still at real risk — late preterm infants are routinely under-monitored because they look well.' },
          { min: 37, max: 42, label: 'Term', action: null },
          { min: 42, max: null, label: 'Post-term', action: 'Assess for placental insufficiency, meconium aspiration and hypoglycaemia.' },
        ],
      },
    ],
    body: {
      how_the_score_maps:
        'The relationship is exactly linear: a total of −10 corresponds to 20 weeks and each further 5 points adds 2 weeks, up to 50 points at 44 weeks. That is why the formula is weeks = 24 + 0.4 × total.',
      the_two_halves: {
        neuromuscular_maturity: 'POSTURE (flexion increases with maturity) · SQUARE WINDOW at the wrist (angle DECREASES with maturity, from >90° to 0°) · ARM RECOIL (becomes brisker, 180° down to <90°) · POPLITEAL ANGLE (decreases, 180° down to <90°) · SCARF SIGN (elbow crosses the midline less as tone increases) · HEEL TO EAR (the heel reaches the ear less easily).',
        physical_maturity: 'SKIN (sticky and transparent → smooth pink → cracking → leathery and wrinkled) · LANUGO (none → abundant → thinning → mostly bald) · PLANTAR SURFACE (no crease → faint red marks → creases over the entire sole) · BREAST (imperceptible → flat areola → full areola with a 5–10 mm bud) · EYE AND EAR (lids fused → pinna flat → thick cartilage, stiff ear with instant recoil) · GENITALS (male: scrotum flat and smooth → testes pendulous with deep rugae; female: prominent clitoris with flat labia → majora covering clitoris and minora).',
      },
      when_to_do_it: 'Ideally within 12 hours of birth for infants under 26 weeks; up to 96 hours otherwise. The neuromuscular items are affected by illness, sedation and neurological injury, so a sick or ventilated baby scores lower than their true maturity.',
      the_important_limitation:
        'Accuracy is roughly ±2 WEEKS. That range matters enormously at the margins: a score suggesting 25 weeks could be 23 or 27, and the management differs sharply. Ballard SUPPORTS a decision; it does not settle one on its own. A reliable last menstrual period or early ultrasound beats it.',
      what_to_do_with_the_answer:
        'Gestational age alone is not enough. Plot the BIRTH WEIGHT against the gestational age to classify the baby as small, appropriate or large for gestational age — that combination, not either number alone, predicts hypoglycaemia, polycythaemia and feeding problems.',
    },
    warnings: [
      'Accuracy is about ±2 weeks. Do not treat the number as exact, particularly at the extremes of viability.',
      'A sick, sedated, ventilated or neurologically injured baby scores FALSELY LOW on the neuromuscular half.',
      'Score early — within 12 hours if very preterm, within 96 hours otherwise. Reliability falls after that.',
      'An early ultrasound or a reliable LMP is more accurate than Ballard. Use Ballard when those are unavailable or disputed.',
      'Always plot birth weight against the gestational age. Gestational age alone does not identify the growth-restricted baby.',
      'Late preterm infants (34–37 weeks) look well and are routinely under-monitored. They still get hypoglycaemia, jaundice and feeding failure.',
    ],
    limitations: [
      'The score is a screening estimate, not a measurement. Local neonatal protocols govern management thresholds.',
      'The −1 column exists in the New Ballard Score to extend it to extremely preterm infants; the original Ballard did not have it.',
    ],
    cards: [
      { q: 'How does the Ballard total convert to weeks?', a: 'Linearly — weeks = 24 + 0.4 × score. −10 is 20 weeks, 50 is 44 weeks.' },
      { q: 'How accurate is it?', a: 'About ±2 weeks — which is a wide margin at the limits of viability.' },
      { q: 'Which half is unreliable in a sick baby?', a: 'The neuromuscular half — illness, sedation and injury all lower tone and underestimate maturity.' },
      { q: 'What happens to the square window angle with maturity?', a: 'It DECREASES — from over 90° to 0°.' },
      { q: 'When must it be done?', a: 'Within 12 hours if under 26 weeks; within 96 hours otherwise.' },
      { q: 'What must you do with the result?', a: 'Plot birth weight against it to classify SGA, AGA or LGA.' },
    ],
    checks: ['Scored within the time window', 'Both subtotals recorded separately', 'Illness or sedation noted as a confounder', 'Birth weight plotted against the result', 'Compared with dates or early ultrasound if available'],
  },

  {
    id: 'AS-PCAL-0002',
    type: 'calculator',
    title: 'Mid-Parental Height — The Child’s Genetic Target',
    short: 'Mid-parental height',
    summary:
      'Average the parents, then add 6.5 cm for a boy or subtract 6.5 cm for a girl. The answer is a TARGET, and the useful question is whether the child’s current centile matches it — a child tracking well below their genetic target is the one to investigate.',
    domains: ['paediatrics', 'endocrine'],
    intents: ['calculate', 'monitor'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['mid parental height', 'midparental height', 'target height', 'genetic height potential', 'expected adult height', 'predicted adult height', 'tanner height'],
    terms: ['mid parental height', 'target height', 'short stature', 'tall stature', 'growth', 'centile', 'height velocity', 'constitutional delay', 'familial short stature'],
    confirm_locally: true,
    inputs: [
      { key: 'father_height', label: 'Father’s height', type: 'number', unit: 'cm', dimension: 'length', min: 120, max: 230, required: true, note: 'Measure if possible — reported heights are systematically over-stated' },
      { key: 'mother_height', label: 'Mother’s height', type: 'number', unit: 'cm', dimension: 'length', min: 120, max: 230, required: true, note: null },
      { key: 'is_male', label: 'Child is male', type: 'boolean', unit: null, dimension: null, required: true, note: 'Adds 6.5 cm for a boy, subtracts 6.5 cm for a girl' },
    ],
    // mean parental height + 6.5 × (2·is_male − 1)
    // is_male = 1 → +6.5 ; is_male = 0 → −6.5. Identical to the (F+M±13)/2 form.
    logic: {
      op: 'add',
      args: [
        { op: 'div', args: [{ op: 'add', args: [{ op: 'var', args: ['father_height'] }, { op: 'var', args: ['mother_height'] }] }, { op: 'const', args: [2] }] },
        { op: 'mul', args: [{ op: 'const', args: [6.5] }, { op: 'sub', args: [{ op: 'mul', args: [{ op: 'const', args: [2] }, { op: 'var', args: ['is_male'] }] }, { op: 'const', args: [1] }] }] },
      ],
    },
    outputs: [
      {
        key: 'target_height', label: 'Mid-parental (target) height', unit: 'cm', dimension: 'length', decimals: 1, rounding: 'half_up',
        interpretation: 'Target range is approximately ±8.5 cm around this value — that range, not the single number, is the prediction.',
        bands: [],
      },
    ],
    body: {
      the_formula: {
        boys: '(father + mother + 13) / 2',
        girls: '(father + mother − 13) / 2',
        equivalently: 'Average the two parents, then add 6.5 cm for a boy or subtract 6.5 cm for a girl. This is the form the calculator uses, and it is arithmetically identical.',
        the_13_cm: 'That is the approximate average adult height difference between men and women. It is a population average, not a biological constant, and it varies between populations — which is one reason the prediction is a range.',
      },
      how_to_actually_use_it: {
        the_range: 'The target RANGE is roughly ±8.5 cm (about ±2 standard deviations). Quoting a single number to a family implies a precision that does not exist.',
        the_real_question:
          'Plot the child’s CURRENT height centile and compare it with the mid-parental centile. A child on the 3rd centile whose parents are both short may be entirely normal (familial short stature). A child on the 25th centile whose target is the 75th is the one who warrants investigation, even though 25th "sounds fine". The DISCREPANCY is the signal, not the absolute centile.',
        height_velocity_matters_more:
          'A single height measurement is a snapshot. CROSSING CENTILES DOWNWARDS over time is far more concerning than any single low value, and a normal height with a falling velocity is an early endocrine or systemic warning. Two accurate measurements six to twelve months apart beat one perfect measurement.',
      },
      when_the_prediction_fails: [
        'Either parent has a pathological cause for their own height — untreated growth hormone deficiency, skeletal dysplasia, undiagnosed coeliac disease.',
        'The child has a chromosomal or syndromic condition — TURNER SYNDROME in any short girl, Down syndrome, skeletal dysplasia. Turner is the classic missed diagnosis in a short girl with no other obvious features.',
        'Chronic disease, undernutrition or psychosocial deprivation, all of which suppress growth independently of genetics.',
        'Precocious or delayed puberty, which shifts the timing and the final height.',
        'REPORTED parental heights. People over-report, and fathers over-report more. Measure them in clinic where you can.',
      ],
      the_two_common_normal_patterns: {
        familial_short_stature: 'Short parents, child tracking on a low but STABLE centile, normal growth velocity, bone age matching chronological age. Normal.',
        constitutional_delay: 'Often a family history of "late developer", DELAYED bone age, delayed puberty, and a normal velocity for the bone age. These children catch up and reach a normal adult height, but they need explanation and follow-up rather than reassurance alone.',
      },
      red_flags_needing_investigation: [
        'Height well below the target range with no familial explanation.',
        'Crossing centiles downwards.',
        'Height centile markedly below WEIGHT centile — suggests an endocrine cause such as hypothyroidism, growth hormone deficiency or Cushing.',
        'Disproportionate short stature — measure sitting height and limb length; think skeletal dysplasia.',
        'Any short girl — check a karyotype for Turner syndrome.',
        'Dysmorphic features, developmental delay, or symptoms of chronic disease.',
      ],
    },
    warnings: [
      'The answer is a RANGE of about ±8.5 cm, not a single number. Do not quote a precise adult height to a family.',
      'The discrepancy between current centile and target centile matters more than the absolute centile.',
      'Height VELOCITY over time beats any single measurement. Crossing centiles downwards is the key sign.',
      'Measure the parents where possible — reported heights are systematically over-stated.',
      'Check a karyotype in any unexplained short girl. Turner syndrome is routinely missed.',
      'Height centile far below weight centile suggests an endocrine cause, not undernutrition.',
      'The 13 cm sex difference is a population average and varies between populations.',
    ],
    limitations: ['The formula is a population estimate and does not account for syndromic, endocrine, nutritional or skeletal causes. Growth charts and referral thresholds are protocol-specific.'],
    cards: [
      { q: 'Mid-parental height formula?', a: 'Boys (F+M+13)/2; girls (F+M−13)/2 — or average the parents and add/subtract 6.5 cm.' },
      { q: 'How wide is the target range?', a: 'About ±8.5 cm. The range is the prediction, not the midpoint.' },
      { q: 'What matters more than the absolute centile?', a: 'The discrepancy from the mid-parental centile, and the height velocity over time.' },
      { q: 'Height centile far below weight centile suggests what?', a: 'An endocrine cause — hypothyroidism, GH deficiency, Cushing. Undernutrition drops weight first.' },
      { q: 'Which diagnosis must be excluded in any short girl?', a: 'Turner syndrome — check a karyotype.' },
      { q: 'Familial short stature vs constitutional delay?', a: 'Familial: bone age matches chronological. Constitutional: bone age delayed, catch-up expected.' },
    ],
    checks: ['Both parents measured, not reported', 'Child height measured accurately with a stadiometer', 'Current centile plotted against target centile', 'Height velocity assessed over 6–12 months', 'Proportions measured if short', 'Karyotype considered in a short girl'],
  },

  {
    id: 'AS-PCAL-0003',
    type: 'calculator',
    title: 'Corrected Gestational Age — Age a Preterm Baby Correctly',
    short: 'Corrected age',
    summary:
      'Correct for prematurity before judging growth or development, or you will diagnose delay that does not exist. Corrected age = chronological age − (40 − gestational age at birth), and it is used until about 2 years.',
    domains: ['paediatrics', 'neonatology'],
    intents: ['calculate', 'monitor'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['corrected age', 'corrected gestational age', 'adjusted age', 'postmenstrual age', 'chronological age correction'],
    terms: ['corrected age', 'adjusted age', 'postmenstrual age', 'prematurity', 'preterm', 'developmental milestones', 'catch up growth'],
    confirm_locally: true,
    inputs: [
      { key: 'chronological_weeks', label: 'Chronological age since birth', type: 'number', unit: 'weeks', dimension: 'time', min: 0, max: 260, required: true, note: null },
      { key: 'gestational_age_at_birth', label: 'Gestational age at birth', type: 'number', unit: 'weeks', dimension: 'time', min: 22, max: 43, required: true, note: null },
    ],
    // chronological − (40 − GA)  ≡  chronological + GA − 40
    logic: {
      op: 'sub',
      args: [
        { op: 'add', args: [{ op: 'var', args: ['chronological_weeks'] }, { op: 'var', args: ['gestational_age_at_birth'] }] },
        { op: 'const', args: [40] },
      ],
    },
    outputs: [
      {
        key: 'corrected_age', label: 'Corrected age', unit: 'weeks', dimension: 'time', decimals: 1, rounding: 'half_up',
        bands: [
          { min: null, max: 0, label: 'Not yet at term-equivalent age', action: 'Assess against postmenstrual age. Do not apply term growth or development norms.' },
          { min: 0, max: 104, label: 'Correction still applies', action: 'Use corrected age for growth charts and developmental milestones.' },
          { min: 104, max: null, label: 'Correction no longer routinely applied', action: 'Beyond about 2 years, use chronological age — but consider continuing correction for the extremely preterm.' },
        ],
      },
    ],
    body: {
      the_arithmetic: 'Weeks of prematurity = 40 − gestational age at birth. Corrected age = chronological age − weeks of prematurity. A baby born at 28 weeks is 12 weeks premature, so at 6 months chronological they are roughly 3 months corrected.',
      why_it_matters:
        'Applying term milestones to a preterm baby manufactures developmental delay. A 6-month-old born at 28 weeks who is not sitting is entirely on track for their corrected age of 3 months. Failing to correct causes unnecessary referrals, unnecessary parental distress, and — more damaging — it can mask REAL delay later when everything gets attributed to prematurity.',
      what_to_correct: 'GROWTH plotting (weight, length, head circumference) and DEVELOPMENTAL milestones.',
      how_long: 'Conventionally until about 2 YEARS. Some services continue to 3 years for those born extremely preterm. Follow your local practice, and state on the chart which age you are using.',
      the_error_in_the_other_direction:
        'Correction explains a delay of a few months. It does NOT explain a gross or persistent delay, an asymmetric pattern, loss of previously acquired skills, or abnormal tone. Attributing those to prematurity delays diagnosis of cerebral palsy and of hearing and visual impairment, all of which are commoner after preterm birth and all of which benefit from early intervention.',
      related_terms: 'POSTMENSTRUAL AGE = gestational age + chronological age; used in the neonatal unit before term. CORRECTED AGE is used after discharge.',
    },
    warnings: [
      'Always correct for prematurity before judging growth or development up to about 2 years, or you will over-diagnose delay.',
      'Correction explains a few months of lag — NOT gross delay, asymmetry, regression or abnormal tone. Those need assessment regardless.',
      'State clearly on the chart whether you are plotting corrected or chronological age.',
      'Preterm infants have higher rates of cerebral palsy and of hearing and visual impairment. Do not let "he was premature" close the assessment.',
      'Immunisations are given by CHRONOLOGICAL age, not corrected age — this is a common and important error.',
    ],
    limitations: ['The age at which correction stops varies by service (commonly 2 years, sometimes 3 for extremely preterm).'],
    cards: [
      { q: 'How is corrected age calculated?', a: 'Chronological age − (40 − gestational age at birth).' },
      { q: 'Until when is it applied?', a: 'Conventionally about 2 years; sometimes 3 for extremely preterm.' },
      { q: 'What is corrected?', a: 'Growth plotting and developmental milestones.' },
      { q: 'What is NOT corrected?', a: 'Immunisation timing — that follows chronological age.' },
      { q: 'What does correction fail to explain?', a: 'Gross delay, asymmetry, regression or abnormal tone — assess those regardless.' },
      { q: 'Postmenstrual vs corrected age?', a: 'Postmenstrual = gestational + chronological, used on the neonatal unit. Corrected is used after discharge.' },
    ],
    checks: ['Gestational age at birth confirmed', 'Corrected age used for growth and development', 'Chronological age used for immunisations', 'Age basis stated on the chart', 'Red flags assessed independently of prematurity'],
  },

  {
    id: 'AS-PAED-0003',
    type: 'test',
    title: 'Plotting Growth — SGA, AGA, LGA and Reading the Chart',
    short: 'Growth charts',
    summary:
      'Birth weight ALONE means nothing without the gestational age beside it. Plotting the two together classifies the baby as small, appropriate or large for gestational age — and each of those predicts a different set of immediate problems.',
    domains: ['paediatrics', 'neonatology', 'nutrition'],
    intents: ['classify', 'monitor'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['growth chart', 'growth monitoring', 'lubchenco', 'lubchenco chart', 'intrauterine growth chart', 'sga', 'aga', 'lga', 'small for gestational age', 'large for gestational age', 'birth weight centile', 'iugr', 'growth faltering', 'failure to thrive'],
    terms: ['growth chart', 'lubchenco', 'centile', 'percentile', 'z score', 'sga', 'aga', 'lga', 'iugr', 'fgr', 'symmetric', 'asymmetric', 'macrosomia', 'low birth weight', 'growth faltering', 'weight for age', 'height for age', 'weight for height', 'head circumference', 'catch up growth'],
    confirm_locally: true,
    body: {
      the_classification: {
        how: 'Plot BIRTH WEIGHT against GESTATIONAL AGE on an intrauterine growth chart (Lubchenco, Fenton or the reference your service uses), for the correct SEX.',
        sga: 'Below the 10th centile. SMALL for gestational age.',
        aga: '10th to 90th centile. APPROPRIATE for gestational age.',
        lga: 'Above the 90th centile. LARGE for gestational age.',
        the_point: 'A 2.2 kg baby at 34 weeks is APPROPRIATELY grown. A 2.2 kg baby at 40 weeks is SEVERELY growth-restricted. Same weight, entirely different baby, entirely different management. This is why the weight alone is not a number worth quoting.',
      },
      sga_and_growth_restriction: {
        the_distinction: 'SGA is a STATISTICAL label — some SGA babies are simply constitutionally small and healthy. GROWTH RESTRICTION (IUGR/FGR) means a baby failed to reach its own growth potential, which is a pathological process. Some growth-restricted babies are not even SGA, because they started large. The distinction matters and is often blurred.',
        symmetric: 'Head, length and weight all proportionately small. Suggests an EARLY insult — chromosomal abnormality, congenital infection (TORCH), or early severe undernutrition.',
        asymmetric: 'HEAD RELATIVELY SPARED, weight most affected. Suggests a LATE insult — placental insufficiency, pre-eclampsia, maternal hypertension, smoking. The head is spared because blood flow is preferentially redirected to the brain.',
        immediate_risks: 'HYPOGLYCAEMIA (minimal glycogen stores — this is the most urgent), hypothermia (little subcutaneous fat and a high surface-area-to-weight ratio), POLYCYTHAEMIA from chronic hypoxia, meconium aspiration, and perinatal asphyxia.',
      },
      lga: {
        causes: 'Maternal DIABETES (including undiagnosed gestational diabetes) is the classic cause, plus constitutional largeness, obesity, post-term birth, and rarely Beckwith-Wiedemann syndrome.',
        immediate_risks: 'BIRTH INJURY — shoulder dystocia, brachial plexus injury, clavicular fracture. HYPOGLYCAEMIA, because fetal hyperinsulinaemia persists after the maternal glucose supply is cut. Polycythaemia and jaundice.',
        the_action: 'Any LGA baby prompts the question: was the mother screened for diabetes? And every LGA baby needs early and repeated glucose monitoring.',
      },
      the_common_thread: 'BOTH SGA and LGA babies get HYPOGLYCAEMIA, for opposite reasons — no stores in one, too much insulin in the other. Both need early feeding and glucose monitoring per protocol.',
      growth_monitoring_after_the_newborn_period: {
        the_four_measures: 'WEIGHT-for-age · LENGTH or HEIGHT-for-age · WEIGHT-for-HEIGHT (or BMI-for-age) · HEAD CIRCUMFERENCE. Each answers a different question and they are not interchangeable.',
        what_each_tells_you: {
          weight_for_height: 'ACUTE undernutrition — wasting. Falls first and recovers first.',
          height_for_age: 'CHRONIC undernutrition — stunting. Reflects long-term deprivation and is largely irreversible after early childhood.',
          weight_for_age: 'A composite of both. Useful for routine surveillance but cannot distinguish wasting from stunting, which is why it should not be used alone.',
          head_circumference: 'Brain growth. Crossing centiles in either direction is significant — upwards may indicate hydrocephalus, downwards a failure of brain growth.',
        },
        the_principle_that_matters_most:
          'A SINGLE point tells you where a child is. The TRAJECTORY tells you what is happening. Crossing centile lines DOWNWARDS — growth faltering — is the finding that demands explanation, and it can occur while the child is still "within normal limits".',
        z_scores: 'Standard deviations from the median. Preferred to centiles at the extremes, because centiles compress: the difference between a z-score of −3 and −4 is clinically enormous but both plot as "below the 0.4th centile".',
      },
      practical_cautions: [
        'Use the correct chart — WHO growth standards, a preterm chart such as Fenton, and condition-specific charts (Down syndrome, Turner syndrome) all differ. Using a term chart for a preterm baby manufactures a diagnosis.',
        'Correct for prematurity until about 2 years.',
        'Measure properly: length lying down under 2 years, height standing after; both need the right equipment and two people for length. Sloppy measurement is the commonest cause of a spurious centile crossing.',
        'Re-measure before acting on a single surprising value.',
      ],
    },
    warnings: [
      'Birth weight alone is meaningless without gestational age. Always plot the two together.',
      'SGA is a statistic; growth restriction is a pathology. A baby can be growth-restricted without being SGA.',
      'BOTH SGA and LGA babies get hypoglycaemia — from no stores, and from hyperinsulinaemia respectively. Monitor glucose early in both.',
      'An LGA baby should prompt the question of undiagnosed maternal diabetes.',
      'Use the correct chart. A term chart applied to a preterm baby creates a false diagnosis.',
      'Crossing centiles downwards matters even while values remain "normal". The trajectory is the finding.',
      'Weight-for-age alone cannot distinguish wasting from stunting — use weight-for-height and height-for-age.',
      'Re-measure before acting on a single surprising value. Poor technique is the commonest cause of spurious crossing.',
    ],
    limitations: [
      'Centile and z-score values require the reference TABLE for the chart in use (WHO, Fenton, Lubchenco, Intergrowth-21st). Scout does not carry those reference tables, so it explains the method and the interpretation rather than computing a centile. Read the value from your service’s chart.',
      'Charts differ between populations and between references — state which chart was used.',
    ],
    cards: [
      { q: 'What defines SGA, AGA and LGA?', a: 'Birth weight below the 10th, between 10th and 90th, and above the 90th centile FOR GESTATIONAL AGE.' },
      { q: 'Why is birth weight alone useless?', a: '2.2 kg at 34 weeks is appropriate; 2.2 kg at 40 weeks is severe growth restriction.' },
      { q: 'Symmetric vs asymmetric growth restriction?', a: 'Symmetric = early insult (chromosomal, TORCH). Asymmetric = late insult (placental), head spared.' },
      { q: 'Why do both SGA and LGA babies get hypoglycaemia?', a: 'SGA has no glycogen stores; LGA has persistent fetal hyperinsulinaemia.' },
      { q: 'What should an LGA baby prompt you to ask?', a: 'Was the mother screened for diabetes?' },
      { q: 'Wasting vs stunting — which measure?', a: 'Weight-for-height shows acute wasting; height-for-age shows chronic stunting.' },
      { q: 'Why prefer z-scores at the extremes?', a: 'Centiles compress — −3 and −4 SD both plot below the 0.4th centile but differ enormously.' },
    ],
    checks: ['Gestational age confirmed before plotting', 'Correct chart and sex used', 'SGA/AGA/LGA classified', 'Glucose monitored in SGA and LGA', 'Maternal diabetes considered if LGA', 'Corrected age used if preterm', 'Trajectory assessed, not a single point', 'Measurement repeated before acting'],
    related: ['new_ballard_score_gestational_age_from_examination', 'corrected_gestational_age_age_a_preterm_baby_correctly'],
  },

  {
    id: 'AS-PAED-0004',
    type: 'technique',
    title: 'Insulin Injection — Sites, Needle Length and Why Rotation Matters',
    short: 'Insulin injection technique',
    summary:
      'Absorption differs by SITE, and technique failures — not dose errors — explain a large share of unexplained glucose variability. Lipohypertrophy from failing to rotate is the commonest and most missed cause, and injecting into it makes absorption erratic.',
    domains: ['endocrine', 'nursing', 'paediatrics'],
    intents: ['act', 'monitor'],
    hazard: 'critical',
    urgency: 'routine',
    aka: ['insulin injection', 'insulin injection sites', 'insulin technique', 'subcutaneous injection', 'lipohypertrophy', 'injection site rotation', 'needle length', 'insulin pen'],
    terms: ['insulin', 'injection', 'subcutaneous', 'abdomen', 'thigh', 'upper arm', 'buttock', 'lipohypertrophy', 'lipoatrophy', 'rotation', 'needle length', 'skin fold', 'pinch', 'intramuscular', 'absorption'],
    confirm_locally: true,
    body: {
      the_target_layer:
        'Insulin must go into SUBCUTANEOUS FAT — not into muscle, and not into dermis. INTRAMUSCULAR injection accelerates absorption unpredictably and is a recognised cause of unexplained HYPOGLYCAEMIA, particularly in lean people and in children. Intradermal injection causes leakage and poor absorption.',
      the_sites_and_why_they_differ: {
        abdomen: 'FASTEST and most consistent absorption. Preferred for short-acting and mealtime insulin. Avoid within about 2–3 cm of the umbilicus.',
        upper_outer_arm: 'Intermediate absorption.',
        thigh_upper_outer: 'SLOWER absorption. Often used for longer-acting insulin.',
        buttock_upper_outer: 'Slowest. Useful in children and in lean people because the fat layer is deepest there, reducing the intramuscular risk.',
        the_practical_rule:
          'Keep the SAME REGION for the same time of day — abdomen for mealtimes, thigh or buttock for basal — and ROTATE WITHIN that region. Switching regions between days changes absorption and causes unexplained swings that get misread as dose problems.',
      },
      needle_length_and_angle: {
        the_modern_position: 'SHORT needles (4–5 mm) are sufficient for almost everyone, INCLUDING people with obesity, because subcutaneous thickness varies far less than total body fat does. Longer needles increase intramuscular risk without improving delivery.',
        by_length: '4–5 mm — 90°, usually no skin fold needed. 6–8 mm — 90°, skin fold advised in lean adults and children. 6–10 mm or longer — 45° WITH a skin fold, which is the older technique and is now rarely necessary.',
        the_skin_fold: 'Lift with THUMB AND INDEX FINGER only. Grasping with the whole hand lifts muscle too and defeats the purpose. Hold the fold until the needle is withdrawn.',
        children_and_lean_adults: 'Highest intramuscular risk. Use the shortest available needle, use a skin fold, and prefer buttock or thigh.',
      },
      lipohypertrophy: {
        what: 'Thickened, rubbery, often painless swelling of subcutaneous fat caused by repeated injection into the same spot. Insulin has a local growth-promoting effect.',
        why_it_matters:
          'Injecting into lipohypertrophy makes absorption ERRATIC and UNPREDICTABLE — sometimes reduced, sometimes suddenly rapid. It is a leading cause of unexplained glucose variability and of unexplained hypoglycaemia, and it is frequently missed because patients prefer injecting there: the area is less sensitive, so it hurts less.',
        finding_it: 'You must LOOK AND FEEL. Inspect and palpate all injection sites at review — it is often visible only in oblique light and detected only by palpation. This should be a routine part of every diabetes review and is very often skipped.',
        the_critical_safety_point:
          'When a patient stops injecting into lipohypertrophy and moves to healthy tissue, absorption IMPROVES — so the SAME dose may now cause HYPOGLYCAEMIA. The dose usually needs REDUCING, with close monitoring. Telling a patient to move sites without adjusting the dose and warning them is a recognised route to a severe hypo.',
        prevention: 'Systematic rotation within the region, a new needle for EVERY injection, and spacing injections at least 1 cm apart.',
      },
      other_technique_points: [
        'Use a NEW needle each time. Reuse blunts and barbs the tip, causes pain and tissue trauma, and contributes to lipohypertrophy.',
        'After pressing the plunger fully, COUNT TO 10 before withdrawing a pen needle — withdrawing immediately leaks a meaningful fraction of the dose back out. This single step is missed constantly.',
        'Cloudy insulins (NPH, premixed) must be RESUSPENDED gently — roll and tip, do not shake — until uniformly milky. Failure to do this is a real cause of erratic control.',
        'Do NOT inject through clothing — you cannot see the site, cannot pinch, and cannot check for bleeding or leakage.',
        'Do not inject into sites about to be EXERCISED. Exercising the limb accelerates absorption and can precipitate hypoglycaemia — this matters for a child about to play, or an adult about to walk home.',
        'Avoid injecting into scars, moles, broken or inflamed skin.',
        'Dispose of sharps in an approved container.',
      ],
      lipoatrophy: 'A LOSS of subcutaneous fat at injection sites — immunological, and now rare with modern insulins. Distinct from lipohypertrophy, which is a gain.',
    },
    warnings: [
      'Inspect AND PALPATE every injection site at every review. Lipohypertrophy is missed because it is painless and patients prefer injecting there.',
      'Moving from lipohypertrophic to healthy tissue improves absorption — the dose usually needs REDUCING or the patient will have a hypo.',
      'Intramuscular injection causes unpredictably fast absorption and hypoglycaemia. Use short needles, and a skin fold in children and lean adults.',
      'A new needle for every injection. Reuse causes trauma and lipohypertrophy.',
      'Count to 10 before withdrawing a pen needle, or part of the dose leaks out.',
      'Resuspend cloudy insulin by rolling and tipping — never shake.',
      'Do not inject into a limb about to be exercised — absorption accelerates and can cause hypoglycaemia.',
      'Keep the same region for the same time of day and rotate within it. Switching regions changes absorption.',
    ],
    limitations: ['Needle length selection, device choice and dose adjustment are individual and protocol-specific. No doses are given here.'],
    cards: [
      { q: 'Which site absorbs fastest?', a: 'The abdomen — preferred for mealtime insulin. Buttock is slowest.' },
      { q: 'Why are 4–5 mm needles enough even in obesity?', a: 'Subcutaneous thickness varies far less than total body fat. Longer needles only add intramuscular risk.' },
      { q: 'How should a skin fold be lifted?', a: 'Thumb and index finger only — a whole-hand grasp lifts muscle too.' },
      { q: 'Why does lipohypertrophy cause variability?', a: 'Absorption from it is erratic — sometimes reduced, sometimes suddenly rapid.' },
      { q: 'What must happen when a patient moves off a lipohypertrophic site?', a: 'Reduce the dose and monitor — absorption improves and the same dose can cause hypoglycaemia.' },
      { q: 'Why count to 10 before withdrawing?', a: 'Otherwise a meaningful fraction of the dose leaks back out.' },
      { q: 'Why avoid injecting a limb about to be exercised?', a: 'Exercise accelerates absorption and can precipitate hypoglycaemia.' },
    ],
    checks: ['All sites inspected AND palpated', 'Rotation pattern reviewed with the patient', 'Needle length appropriate and single-use confirmed', 'Skin fold technique demonstrated', '10-second count taught', 'Cloudy insulin resuspension demonstrated', 'Dose reviewed if moving away from lipohypertrophy'],
  },
];
