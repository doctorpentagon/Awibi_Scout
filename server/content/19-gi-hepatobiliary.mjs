/** Gastrointestinal and hepatobiliary disease. */

export default [
  {
    id: 'AS-GAST-0001',
    type: 'guideline',
    title: 'Gallstone Disease — Biliary Colic, Cholecystitis, Cholangitis and Gallstone Pancreatitis',
    short: 'Cholecystitis',
    summary:
      'One stone, four different diseases depending on where it lodges and whether infection follows. Fever separates colic from cholecystitis; jaundice separates cholecystitis from cholangitis; and cholangitis is the one that kills quickly.',
    domains: ['general_surgery', 'hepatology', 'emergency_medicine'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['cholecystitis', 'gallstones', 'biliary colic', 'cholangitis', 'cholelithiasis', 'gallbladder', 'murphy sign'],
    terms: ['gallstone', 'cholecystitis', 'biliary colic', 'cholangitis', 'murphy', 'charcot', 'reynolds', 'ercp', 'cholecystectomy', 'courvoisier', 'mirizzi', 'gallstone ileus'],
    confirm_locally: true,
    body: {
      who_gets_them: 'The traditional "fair, fat, forty, female, fertile" is a memory aid, not a rule — it misleads by making stones seem unlikely in men and in the young. Real risk factors: increasing age, female sex, obesity, RAPID weight loss, pregnancy, family history, diabetes, HAEMOLYSIS (pigment stones — important in sickle cell disease and thalassaemia, where children get stones), ileal disease or resection, and total parenteral nutrition.',
      the_four_diseases: {
        biliary_colic: {
          what: 'A stone TEMPORARILY obstructs the cystic duct. No infection, no inflammation.',
          features: 'Severe right upper quadrant or epigastric pain, often radiating to the right shoulder tip or interscapular region, typically after a FATTY MEAL, lasting minutes to a few hours and then RESOLVING completely. No fever. Inflammatory markers NORMAL.',
          the_misnomer: 'It is not truly colicky — it is constant and then eases, rather than coming in waves.',
        },
        acute_cholecystitis: {
          what: 'The stone stays impacted; the gallbladder becomes inflamed and secondarily infected.',
          features: 'The SAME pain but now PERSISTENT (over several hours), with FEVER, raised white cell count and CRP, and local peritonism.',
          murphy_sign:
            'Ask the patient to breathe out fully, place your hand under the right costal margin, and ask them to breathe IN. The descending inflamed gallbladder meets your hand and the patient CATCHES THEIR BREATH and stops inspiring. To be valid the same manoeuvre must NOT produce the effect on the left side.',
          imaging: 'ULTRASOUND is the first-line test: stones, a thick-walled gallbladder, pericholecystic fluid, and a sonographic Murphy sign.',
          liver_tests: 'Usually near-normal or only mildly deranged. Markedly abnormal liver tests point to duct involvement instead.',
          acalculous: 'Cholecystitis WITHOUT stones occurs in critically ill, fasted, ventilated or burns patients. It is easily missed and has a high complication rate — consider it in an unexplained sepsis on intensive care.',
        },
        ascending_cholangitis: {
          what: 'A stone obstructs the COMMON BILE DUCT and the stagnant bile becomes infected. Pressure forces bacteria into the bloodstream.',
          charcot_triad: 'FEVER, JAUNDICE and RIGHT UPPER QUADRANT PAIN.',
          reynolds_pentad: 'Charcot triad plus HYPOTENSION and CONFUSION — suppurative cholangitis, with high mortality.',
          the_critical_management_point:
            'ANTIBIOTICS ALONE ARE NOT ENOUGH. This is an obstructed, infected, closed system — it must be DRAINED, usually by ERCP. A patient given antibiotics and observed overnight without drainage can die. Resuscitate, give antibiotics, and arrange urgent biliary decompression.',
          liver_tests: 'Obstructive picture — high bilirubin, high ALP and GGT.',
        },
        gallstone_pancreatitis: {
          what: 'A stone passes and transiently obstructs the ampulla, causing pancreatitis. Gallstones and alcohol together account for most acute pancreatitis.',
          features: 'Severe EPIGASTRIC pain BORING THROUGH TO THE BACK, relieved by sitting forward, with vomiting. Raised amylase or lipase.',
          the_amylase_caveat: 'Amylase falls quickly after onset and may be NORMAL in a late presentation. Lipase stays raised longer and is more sensitive. A normal amylase does not exclude pancreatitis.',
          severity: 'Scored with a validated system (Glasgow, Ranson, APACHE II) — severity, not the enzyme level, determines management. The height of the amylase does NOT correlate with severity.',
          the_definitive_step: 'Cholecystectomy during the same admission or soon after, per local protocol, because recurrence risk is high.',
        },
      },
      the_complications_worth_knowing: {
        empyema_and_perforation: 'A gallbladder full of pus, or one that perforates. Suspect in a patient who is not improving, and in the diabetic or elderly with disproportionate systemic upset.',
        gangrenous_cholecystitis: 'More common in diabetics, the elderly and men. Signs may be surprisingly mild relative to the pathology.',
        mirizzi_syndrome: 'A stone in the cystic duct compresses the common hepatic duct externally, producing obstructive jaundice without a stone in the main duct.',
        gallstone_ileus: 'A large stone erodes into the duodenum through a fistula and obstructs at the ileocaecal valve. Look for RIGLER TRIAD on imaging: small bowel obstruction, PNEUMOBILIA (air in the biliary tree), and an ectopic gallstone.',
        courvoisier_law: 'In a jaundiced patient, a PALPABLE, NON-TENDER gallbladder is unlikely to be due to stones — because chronic stone disease scars and shrinks the gallbladder. It suggests malignant obstruction, classically carcinoma of the head of the pancreas. A useful rule with recognised exceptions.',
      },
      the_practical_algorithm: [
        'Pain only, resolves, no fever, normal bloods → biliary colic. Analgesia, elective cholecystectomy.',
        'Persistent pain + fever + raised inflammatory markers + positive Murphy → cholecystitis. Admit, antibiotics, cholecystectomy per local timing.',
        'Add JAUNDICE and obstructive liver tests → duct stone or cholangitis. Imaging of the duct and consideration of ERCP.',
        'Add hypotension or confusion → suppurative cholangitis. URGENT drainage.',
        'Epigastric pain to the back with raised lipase → pancreatitis. Score severity, treat supportively, plan cholecystectomy.',
      ],
    },
    warnings: [
      'Ascending cholangitis requires biliary DRAINAGE, not antibiotics alone. An obstructed infected system will kill despite antibiotics.',
      'A normal amylase does not exclude pancreatitis — it falls with time. Lipase is more sensitive.',
      'The height of the amylase does not indicate severity. Use a validated severity score.',
      'Acalculous cholecystitis occurs in critically ill and fasted patients and is easily missed.',
      'Diabetic and elderly patients develop gangrenous or perforated gallbladders with disproportionately mild signs.',
      'A palpable non-tender gallbladder in a jaundiced patient suggests malignancy, not stones (Courvoisier).',
    ],
    limitations: ['Timing of cholecystectomy and antibiotic choice are set by local surgical protocol.'],
    cards: [
      { q: 'What separates biliary colic from cholecystitis?', a: 'Fever, raised inflammatory markers and persistent pain. Colic resolves and has normal bloods.' },
      { q: 'How do you elicit Murphy sign correctly?', a: 'Hand under the right costal margin, ask the patient to breathe in; they catch their breath. It must not occur on the left.' },
      { q: 'What is Charcot triad, and what does it demand?', a: 'Fever, jaundice, RUQ pain — ascending cholangitis. It demands biliary drainage, not antibiotics alone.' },
      { q: 'Does a normal amylase exclude pancreatitis?', a: 'No. It falls quickly after onset. Lipase is more sensitive.' },
      { q: 'What is Rigler triad?', a: 'Small bowel obstruction, pneumobilia and an ectopic gallstone — gallstone ileus.' },
      { q: 'What does Courvoisier law state?', a: 'A palpable non-tender gallbladder in jaundice is unlikely to be stones — suspect malignant obstruction.' },
    ],
    checks: ['Fever and inflammatory markers checked', 'Murphy sign tested correctly', 'Liver function checked for duct involvement', 'Ultrasound arranged', 'Urgent drainage arranged if cholangitis', 'Severity scored in pancreatitis', 'Cholecystectomy planned'],
  },

  {
    id: 'AS-GAST-0002',
    type: 'guideline',
    title: 'Peptic Ulcer, Upper GI Bleeding and Appendicitis',
    short: 'Ulcer, GI bleed, appendix',
    summary:
      'Three common surgical presentations. The unifying practical point is that resuscitation precedes diagnosis in bleeding, and that appendicitis remains a clinical diagnosis in which atypical presentations are the ones that perforate.',
    domains: ['general_surgery', 'emergency_medicine'],
    intents: ['identify', 'assess'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['peptic ulcer', 'gi bleed', 'haematemesis', 'melaena', 'appendicitis', 'upper gi bleeding', 'pud'],
    terms: ['peptic ulcer', 'h pylori', 'nsaid', 'haematemesis', 'melaena', 'glasgow blatchford', 'rockall', 'appendicitis', 'mcburney', 'rovsing', 'psoas sign', 'alvarado'],
    confirm_locally: true,
    body: {
      peptic_ulcer_disease: {
        the_two_causes_that_account_for_nearly_all: 'HELICOBACTER PYLORI and NSAIDs. Every patient with an ulcer should be tested for H. pylori and have their NSAID and aspirin use reviewed.',
        duodenal_versus_gastric:
          'DUODENAL ulcer pain is classically RELIEVED by food and returns 2–3 hours later, often waking the patient at night. GASTRIC ulcer pain is classically WORSENED by eating, so patients lose weight through fear of eating. The distinction is unreliable in practice but the weight loss matters.',
        the_rule_that_prevents_missed_cancer:
          'A GASTRIC ulcer must be biopsied and followed to healing, because gastric cancer can present as an ulcer. Duodenal ulcers are essentially never malignant. Never accept a gastric ulcer as benign without histology and confirmed healing.',
        alarm_features_requiring_urgent_endoscopy: 'Dysphagia, unintentional weight loss, persistent vomiting, gastrointestinal bleeding, iron deficiency anaemia, a palpable mass, and new dyspepsia over the locally specified age threshold.',
        h_pylori_testing_trap: 'Proton pump inhibitors and recent antibiotics cause FALSE NEGATIVES with urea breath and stool antigen tests. Stop the PPI for the period your protocol specifies before testing, or the result is meaningless.',
        complications: 'Bleeding, PERFORATION (sudden severe pain, rigid abdomen, free air under the diaphragm), and gastric outlet obstruction (vomiting undigested food, succussion splash).',
      },
      upper_gastrointestinal_bleeding: {
        recognise_it: 'HAEMATEMESIS (fresh or coffee-ground) and MELAENA — black, tarry, offensive stool. Melaena means blood has been digested, so the source is proximal. Brisk upper bleeding can present as fresh red rectal bleeding with shock.',
        the_urea_clue: 'A RAISED UREA with a normal creatinine is a classic marker of upper GI bleeding, because digested blood is a large protein load absorbed from the gut.',
        the_order_of_operations: [
          'RESUSCITATE FIRST. Two large-bore cannulae, bloods including cross-match, fluids and blood as needed. Diagnosis follows resuscitation, not the other way round.',
          'Score risk with a validated tool (Glasgow-Blatchford for the need for intervention; Rockall after endoscopy for mortality).',
          'Stop and reverse anticoagulants and antiplatelets as clinically appropriate, weighing thrombotic risk.',
          'Endoscopy within the timeframe your protocol specifies — sooner if unstable.',
        ],
        if_variceal_is_possible:
          'In known or suspected liver disease, add vasoactive therapy and PROPHYLACTIC ANTIBIOTICS. Antibiotics in variceal bleeding reduce mortality independently of the bleeding itself, and are frequently omitted.',
        transfusion: 'A RESTRICTIVE transfusion strategy improves outcomes in most non-exsanguinating upper GI bleeding. Over-transfusion in variceal bleeding raises portal pressure and can worsen it. Follow local thresholds.',
      },
      appendicitis: {
        the_classic_sequence:
          'Central, poorly localised PERIUMBILICAL pain (visceral, from midgut) that MIGRATES over hours to the RIGHT ILIAC FOSSA and becomes sharp and localised (parietal peritoneum now involved). ANOREXIA is near-universal — a patient who is hungry rarely has appendicitis. Then low-grade fever, nausea and vomiting AFTER the pain.',
        the_order_matters: 'Pain BEFORE vomiting suggests a surgical cause. Vomiting BEFORE pain suggests gastroenteritis. Reversing this order is one of the most useful discriminators in the history.',
        the_signs: {
          mcburney_point: 'Maximal tenderness one-third of the way from the anterior superior iliac spine to the umbilicus.',
          rovsing: 'Palpation of the LEFT iliac fossa produces pain in the RIGHT.',
          psoas: 'Pain on passive extension of the right hip — suggests a RETROCAECAL appendix.',
          obturator: 'Pain on passive internal rotation of the flexed right hip — suggests a PELVIC appendix.',
          percussion_tenderness: 'Kinder and more reliable than testing for rebound.',
        },
        the_atypical_presentations_that_perforate: [
          'RETROCAECAL appendix — the inflamed organ does not touch the anterior peritoneum, so abdominal signs are minimal and the pain may be flank or back. Psoas sign may be the only clue.',
          'PELVIC appendix — irritates the bladder and rectum, causing urinary frequency and diarrhoea, and is repeatedly diagnosed as urinary infection or gastroenteritis.',
          'PREGNANCY — the appendix is displaced upward by the gravid uterus, so pain is higher than expected. Appendicitis is the commonest non-obstetric surgical emergency in pregnancy.',
          'The EXTREMES OF AGE — infants and the elderly present late and non-specifically, and have the highest perforation rates.',
        ],
        investigations: 'Pregnancy test in every woman of childbearing age. Bloods and urinalysis. Ultrasound first in children and pregnancy; CT where diagnosis is uncertain in adults, balancing radiation. Scoring tools such as Alvarado support but do not replace clinical judgement.',
        the_key_differentials: 'Ectopic pregnancy, ovarian cyst rupture or torsion, pelvic inflammatory disease, mesenteric adenitis, Meckel diverticulitis, Crohn disease, right ureteric colic, and in children, right lower lobe pneumonia.',
      },
    },
    warnings: [
      'Every gastric ulcer must be biopsied and followed to healing — gastric cancer presents as an ulcer.',
      'Stop proton pump inhibitors before H. pylori breath or stool testing, or the result will be falsely negative.',
      'In gastrointestinal bleeding, resuscitate before investigating.',
      'Give prophylactic antibiotics in suspected variceal bleeding — they reduce mortality independently.',
      'A pregnancy test is mandatory in every woman of childbearing age with right iliac fossa pain.',
      'Retrocaecal and pelvic appendicitis present atypically and perforate. Minimal abdominal signs do not exclude it.',
      'A raised urea with normal creatinine suggests an upper gastrointestinal bleed.',
    ],
    limitations: ['Endoscopy timing, transfusion thresholds and imaging pathways are protocol-specific.'],
    cards: [
      { q: 'Which ulcer must always be biopsied and why?', a: 'Gastric — because gastric cancer can present as an ulcer. Duodenal ulcers are essentially never malignant.' },
      { q: 'What invalidates an H. pylori breath test?', a: 'Recent proton pump inhibitors or antibiotics — they cause false negatives.' },
      { q: 'What does a raised urea with normal creatinine suggest?', a: 'Upper gastrointestinal bleeding — digested blood is a protein load.' },
      { q: 'Pain before vomiting, or vomiting before pain — which suggests surgery?', a: 'Pain first suggests a surgical cause. Vomiting first suggests gastroenteritis.' },
      { q: 'Which appendix position causes urinary frequency and diarrhoea?', a: 'Pelvic — and it is repeatedly misdiagnosed as UTI or gastroenteritis.' },
      { q: 'What does a positive psoas sign suggest?', a: 'A retrocaecal appendix.' },
    ],
    checks: ['H. pylori tested and NSAIDs reviewed', 'Gastric ulcer biopsied and follow-up arranged', 'Resuscitation before endoscopy', 'Antibiotics given if variceal bleed suspected', 'Pregnancy test done', 'Atypical appendix positions considered'],
  },
];
