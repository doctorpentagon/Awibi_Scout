/**
 * The tests that are actually ordered every day.
 *
 * Scout carried the diseases but not the tests themselves, so `bilirubin`,
 * `CK`, `LDH`, `ESR`, `INR` and friends resolved onto tangentially related
 * entries with low confidence. Each of these gives the test a home.
 */

export default [
  {
    id: 'AS-LABT-0001',
    type: 'test',
    title: 'Full Blood Count — Reading Every Line',
    short: 'Full blood count',
    summary:
      'The most ordered test in medicine, and the one most often read as three numbers out of twelve. The differential and the red cell indices carry most of the information, and the reticulocyte count answers the single most useful question in any anaemia: is the marrow responding?',
    domains: ['haematology', 'laboratory_medicine'],
    intents: ['investigate', 'identify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'full blood count', 'fbc', 'complete blood count', 'cbc', 'haemoglobin', 'hemoglobin', 'hb',
      'haematocrit', 'hematocrit', 'pcv', 'packed cell volume', 'mcv', 'mch', 'mchc', 'rdw',
      'white cell count', 'wcc', 'wbc', 'differential', 'neutrophil', 'neutrophilia', 'neutropenia',
      'lymphocyte', 'lymphocytosis', 'lymphopenia', 'eosinophil', 'eosinophilia', 'monocyte',
      'basophil', 'platelet', 'platelets', 'thrombocytopenia', 'thrombocytosis', 'reticulocyte',
      'reticulocyte count', 'pancytopenia', 'blood film',
    ],
    terms: [
      'fbc', 'cbc', 'haemoglobin', 'hemoglobin', 'haematocrit', 'mcv', 'mch', 'mchc', 'rdw',
      'white cell', 'leucocytosis', 'leukocytosis', 'leucopenia', 'neutrophil', 'lymphocyte',
      'eosinophil', 'monocyte', 'basophil', 'platelet', 'reticulocyte', 'left shift', 'blast',
      'pancytopenia', 'blood film', 'anisocytosis', 'poikilocytosis',
    ],
    confirm_locally: true,
    body: {
      the_red_cell_line: {
        haemoglobin: 'The concentration of haemoglobin, NOT the total red cell mass. It is a ratio, so it moves with PLASMA VOLUME as well as with red cells. In acute haemorrhage the haemoglobin can be NORMAL for hours, because whole blood is lost and the ratio is preserved until fluid shifts in or is given. A normal haemoglobin never excludes acute bleeding.',
        haematocrit: 'The proportion of blood volume occupied by red cells (also called PCV). Same plasma-volume caveat. Dehydration raises it; over-transfusion of crystalloid lowers it.',
        mcv: {
          what: 'Average red cell size. The single most useful anaemia discriminator.',
          low: 'MICROCYTIC — iron deficiency, thalassaemia, anaemia of chronic disease (late), sideroblastic, lead.',
          normal: 'NORMOCYTIC — acute blood loss, haemolysis, anaemia of chronic disease (early), renal, marrow failure, dilutional.',
          high: 'MACROCYTIC — B12 and folate deficiency, alcohol, liver disease, hypothyroidism, myelodysplasia, and drugs (methotrexate, hydroxycarbamide, zidovudine).',
          the_trap: 'A NORMAL MCV does not exclude a mixed picture. Iron deficiency (low) plus B12 deficiency (high) gives a normal average with a WIDE RDW. That is what RDW is for.',
        },
        rdw: 'Red cell distribution width — how VARIABLE the sizes are. A raised RDW with a normal MCV is the fingerprint of a MIXED deficiency, and it is routinely ignored.',
        reticulocytes: {
          what: 'Immature red cells. A direct measure of what the marrow is doing right now.',
          the_question_it_answers:
            'HIGH reticulocytes = the marrow is responding, so cells are being LOST or DESTROYED (bleeding or haemolysis). LOW or normal reticulocytes in the face of anaemia = the marrow is NOT responding, so the problem is production (deficiency, marrow failure, renal, chronic disease). This single split reorganises the entire differential and costs nothing.',
        },
      },
      the_white_cell_differential: {
        why_the_total_misleads:
          'A normal total white cell count can hide a severe neutropenia masked by a lymphocytosis. ALWAYS read the differential, not the total. This is the specific error that delays recognition of drug-induced agranulocytosis.',
        neutrophilia: 'Bacterial infection, tissue damage, infarction, burns, corticosteroids (demargination — a real rise with no infection), and myeloproliferative disease. A LEFT SHIFT means immature forms released early.',
        neutropenia: 'Drugs (chemotherapy, carbimazole, clozapine, co-trimoxazole), viral infection, marrow failure, hypersplenism, B12/folate, and autoimmune. SEVERE neutropenia with fever is NEUTROPENIC SEPSIS — a same-hour emergency.',
        lymphocytosis: 'Viral infection, pertussis, tuberculosis, and chronic lymphocytic leukaemia in an older patient with a persistent unexplained rise.',
        lymphopenia: 'HIV, corticosteroids, lupus, malnutrition, and severe acute illness including sepsis.',
        eosinophilia: 'The classic mnemonic is worth keeping: DRUGS, PARASITES (helminths — in endemic regions this is the first thought, not the last), ALLERGY and ASTHMA, plus adrenal insufficiency, vasculitis (EGPA), and malignancy.',
        monocytosis: 'Chronic infection including TB, chronic inflammation, and recovery from neutropenia.',
        blasts: 'Blast cells on the film are an URGENT haematology referral. Do not wait for a routine appointment.',
      },
      platelets: {
        low: 'Reduced production (marrow failure, B12/folate, alcohol), increased destruction (ITP, TTP, HUS, DIC, heparin-induced), or sequestration (hypersplenism). Also PSEUDOthrombocytopenia — EDTA-induced clumping in the bottle. If an isolated low platelet count is unexpected and the patient is well, REPEAT IT IN CITRATE before acting.',
        high: 'Reactive (infection, inflammation, iron deficiency, post-splenectomy, malignancy) far more often than clonal. Reactive thrombocytosis rarely needs treatment.',
        the_urgent_ones: 'Thrombocytopenia with fever and confusion and renal impairment suggests TTP — a haematological emergency. Thrombocytopenia with bleeding and a prolonged INR and APTT suggests DIC.',
      },
      the_film: 'A blood film is cheap, fast and still answers questions no analyser can. Ask for one whenever the counts do not fit the patient, when there is unexplained anaemia, or when the analyser flags abnormal cells.',
    },
    warnings: [
      'A normal haemoglobin does NOT exclude acute haemorrhage — it is a concentration and takes hours to fall.',
      'Always read the DIFFERENTIAL. A normal total white cell count can conceal severe neutropenia.',
      'Neutropenia with fever is neutropenic sepsis. Antibiotics within one hour, per local protocol.',
      'Blast cells on a film are an urgent referral, not a routine one.',
      'An unexpected isolated low platelet count in a well patient may be EDTA clumping — repeat in citrate before acting.',
      'A normal MCV can hide a mixed deficiency. Look at the RDW.',
      'Reticulocytes distinguish a marrow that is responding from one that is not — request them in any unexplained anaemia.',
    ],
    limitations: ['Reference ranges differ by laboratory, altitude, age, sex and pregnancy. Use your own laboratory ranges.'],
    cards: [
      { q: 'Why can haemoglobin be normal in acute bleeding?', a: 'It is a concentration. Whole blood is lost, so the ratio holds until fluid shifts in.' },
      { q: 'What does a high reticulocyte count in anaemia tell you?', a: 'The marrow is responding — so cells are being lost or destroyed, not underproduced.' },
      { q: 'Normal MCV but wide RDW — what does that suggest?', a: 'A mixed deficiency, e.g. iron (low MCV) plus B12 (high MCV) averaging out.' },
      { q: 'Why is the total white cell count not enough?', a: 'A lymphocytosis can mask severe neutropenia. Read the differential.' },
      { q: 'Causes of eosinophilia?', a: 'Drugs, parasites, allergy and asthma — plus adrenal insufficiency, vasculitis and malignancy.' },
      { q: 'Unexpected isolated thrombocytopenia in a well patient?', a: 'Consider EDTA-induced clumping. Repeat in citrate before acting.' },
      { q: 'Thrombocytopenia + fever + confusion + renal impairment?', a: 'Think TTP — a haematological emergency.' },
    ],
    checks: ['Differential read, not just the total', 'MCV and RDW considered together', 'Reticulocytes requested in unexplained anaemia', 'Film requested if counts do not fit the patient', 'Neutropenic fever escalated within the hour'],
  },

  {
    id: 'AS-LABT-0002',
    type: 'test',
    title: 'Liver Function Tests — Hepatocellular Versus Cholestatic',
    short: 'Liver function tests',
    summary:
      'ALT and AST report hepatocyte INJURY. ALP and GGT report BILE DUCT obstruction. Bilirubin, albumin and INR report FUNCTION. Most of these are not function tests at all, and reading them as one block is why the pattern gets missed.',
    domains: ['hepatology', 'laboratory_medicine'],
    intents: ['investigate', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'liver function tests', 'lft', 'lfts', 'alt', 'ast', 'alp', 'alkaline phosphatase', 'ggt',
      'gamma gt', 'gamma glutamyl transferase', 'transaminases', 'aminotransferase', 'albumin',
      'total protein', 'hepatocellular', 'cholestatic', 'deranged lfts', 'liver enzymes',
    ],
    terms: [
      'alt', 'ast', 'alp', 'ggt', 'alanine aminotransferase', 'aspartate aminotransferase',
      'alkaline phosphatase', 'transaminase', 'albumin', 'globulin', 'total protein',
      'hepatocellular', 'cholestatic', 'de ritis', 'synthetic function', 'liver screen',
    ],
    confirm_locally: true,
    body: {
      the_first_split: {
        the_question: 'Is this an INJURY pattern or an OBSTRUCTION pattern? Answer it before anything else, because it halves the differential.',
        hepatocellular: 'ALT and AST rise DISPROPORTIONATELY. Causes: viral hepatitis, drugs and toxins (paracetamol, alcohol, herbal remedies, anti-tuberculous therapy), ischaemic hepatitis, autoimmune hepatitis, metabolic (fatty liver), Wilson disease, haemochromatosis.',
        cholestatic: 'ALP and GGT rise DISPROPORTIONATELY. Causes: gallstones, stricture, tumour of the head of pancreas or bile duct, primary biliary cholangitis, primary sclerosing cholangitis, and drugs (co-amoxiclav, flucloxacillin, anabolic steroids).',
        mixed: 'Common, and does not mean the split was useless — it means look for a cause that does both, or two causes.',
      },
      the_individual_tests: {
        alt: 'The more LIVER-SPECIFIC of the two transaminases. A rise points at the liver.',
        ast: 'Also present in HEART, SKELETAL MUSCLE, kidney and red cells. An isolated AST rise with a normal ALT should raise the question of MUSCLE (check CK) or HAEMOLYSIS, not liver.',
        the_ratio: 'AST:ALT above 2 with a raised GGT is the classic ALCOHOL pattern. ALT above AST is more typical of viral and fatty liver disease. In established CIRRHOSIS of any cause the ratio also reverses, so the ratio is a hint and not a diagnosis.',
        the_magnitude: 'Transaminases in the THOUSANDS narrow the field sharply: paracetamol toxicity, ischaemic hepatitis ("shock liver"), acute viral hepatitis, and autoimmune hepatitis. Obstruction alone rarely does this.',
        alp: {
          what: 'Alkaline phosphatase — from bile ducts, BONE, placenta and intestine.',
          the_key_move: 'A raised ALP is NOT necessarily liver. Check the GGT: if GGT is also raised, the ALP is hepatobiliary. If GGT is NORMAL, think BONE (Paget disease, metastases, osteomalacia, fracture healing, growing children) or PREGNANCY (placental).',
          physiological: 'ALP is normally high in growing children and adolescents and in the third trimester. Do not investigate that.',
        },
        ggt: 'Sensitive but not specific. Induced by ALCOHOL and by many drugs (phenytoin, carbamazepine, rifampicin). Its main use is to confirm that a raised ALP is hepatobiliary.',
      },
      the_ones_that_really_do_measure_function: {
        albumin: 'Made only by the liver, so a LOW albumin suggests reduced synthetic function — but its half-life is about 20 days, so it falls slowly and is USELESS as an acute marker. It is also a NEGATIVE ACUTE PHASE REACTANT (falls in any inflammation) and is lost in nephrotic syndrome, enteropathy and burns. A low albumin is far more often inflammation than liver failure, and it is NOT a nutritional marker.',
        inr_and_pt: 'The BEST acute marker of synthetic function. Clotting factors have half-lives of HOURS, so the INR rises within a day of severe liver injury. A rising INR in acute liver injury is an ominous sign and features in transplant-referral criteria. Correct for vitamin K deficiency before concluding it is synthetic failure.',
        bilirubin: 'See the dedicated bilirubin entry — conjugated versus unconjugated is the whole question.',
      },
      the_liver_screen: 'When derangement is unexplained and persistent: hepatitis B and C serology, hepatitis A and E where relevant, autoantibodies (ANA, SMA, AMA, LKM) with immunoglobulins, ferritin and transferrin saturation, caeruloplasmin in the under-40s, alpha-1 antitrypsin, coeliac serology, thyroid function, and an ultrasound.',
      what_actually_needs_urgency: [
        'Jaundice with a raised INR or encephalopathy — acute liver failure until proven otherwise.',
        'Cholestatic picture with fever and right upper quadrant pain — cholangitis, which needs drainage, not just antibiotics.',
        'Transaminases in the thousands — find the cause today; paracetamol is treatable and time-critical.',
        'Any deterioration after paracetamol overdose, regardless of the initial level.',
      ],
    },
    warnings: [
      'Most "liver function tests" do not measure function. INR and albumin do; ALT, AST, ALP and GGT measure injury or obstruction.',
      'A raised ALP with a NORMAL GGT is probably bone or placenta, not liver.',
      'An isolated raised AST with a normal ALT may be muscle or haemolysis — check CK.',
      'Albumin is a negative acute phase reactant with a 20-day half-life. It is not an acute marker and not a nutrition marker.',
      'INR is the best acute marker of synthetic function — exclude vitamin K deficiency before calling it liver failure.',
      'Jaundice with a raised INR or any encephalopathy is acute liver failure. Escalate the same day.',
      'Normal transaminases do not exclude cirrhosis — they often normalise as the liver burns out.',
    ],
    limitations: ['Reference ranges and assay methods differ by laboratory. Transplant-referral criteria are protocol-specific.'],
    cards: [
      { q: 'Which LFTs actually measure function?', a: 'INR and albumin. ALT/AST measure injury; ALP/GGT measure obstruction.' },
      { q: 'Raised ALP with normal GGT — where is it from?', a: 'Bone (Paget, mets, osteomalacia) or placenta — not the biliary tree.' },
      { q: 'Isolated raised AST with normal ALT?', a: 'Consider muscle (check CK) or haemolysis — AST is not liver-specific.' },
      { q: 'AST:ALT > 2 with raised GGT suggests?', a: 'Alcohol. Also seen in established cirrhosis of any cause.' },
      { q: 'Transaminases in the thousands — differential?', a: 'Paracetamol, ischaemic hepatitis, acute viral hepatitis, autoimmune hepatitis.' },
      { q: 'Why is INR better than albumin acutely?', a: 'Clotting factors have half-lives of hours; albumin has about 20 days.' },
      { q: 'Why is a low albumin usually not liver failure?', a: 'It is a negative acute phase reactant — it falls in any inflammation.' },
    ],
    checks: ['Hepatocellular vs cholestatic pattern decided', 'GGT checked before attributing a raised ALP to liver', 'INR sent as the synthetic marker', 'Paracetamol history taken', 'Encephalopathy assessed', 'Liver screen sent if unexplained and persistent'],
  },

  {
    id: 'AS-LABT-0003',
    type: 'test',
    title: 'Bilirubin — Conjugated Versus Unconjugated',
    short: 'Bilirubin',
    summary:
      'One question decides everything: is the bilirubin CONJUGATED or not? Unconjugated means the liver has not processed it yet — haemolysis, or Gilbert. Conjugated means it was processed and then could not get out — obstruction or hepatocellular disease. Pale stools and dark urine settle it at the bedside.',
    domains: ['hepatology', 'laboratory_medicine', 'haematology'],
    intents: ['investigate', 'classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'bilirubin', 'conjugated bilirubin', 'unconjugated bilirubin', 'direct bilirubin',
      'indirect bilirubin', 'total bilirubin', 'hyperbilirubinaemia', 'jaundice', 'icterus',
      'gilbert syndrome', 'gilberts', 'urobilinogen',
    ],
    terms: [
      'bilirubin', 'conjugated', 'unconjugated', 'direct', 'indirect', 'jaundice', 'icterus',
      'gilbert', 'crigler najjar', 'dubin johnson', 'rotor', 'urobilinogen', 'pale stool',
      'dark urine', 'haemolysis', 'kernicterus', 'obstructive jaundice',
    ],
    confirm_locally: true,
    body: {
      the_normal_pathway:
        'Haem from senescent red cells becomes UNCONJUGATED bilirubin, which is fat-soluble and travels bound to albumin. The liver CONJUGATES it with glucuronic acid (enzyme: UDP-glucuronosyltransferase), making it water-soluble. Conjugated bilirubin is excreted in bile into the gut, where bacteria convert it to urobilinogen and stercobilin — which is what makes stool BROWN. Break the chain at any point and the pattern tells you where.',
      unconjugated_predominant: {
        meaning: 'Bilirubin is being made faster than the liver can conjugate it, or the conjugating step itself is impaired.',
        causes: {
          overproduction: 'HAEMOLYSIS of any cause, ineffective erythropoiesis, and resorption of a large haematoma.',
          impaired_uptake_or_conjugation: 'GILBERT SYNDROME — common, benign, and the single most frequent cause of an isolated mildly raised bilirubin in a well person. It rises with FASTING, illness, dehydration and exertion, which is exactly when blood tends to be taken. Recognising it prevents an entirely unnecessary workup. Crigler-Najjar is the rare severe form.',
          neonatal: 'Physiological jaundice, breast-milk jaundice, and haemolytic disease of the newborn. In neonates unconjugated bilirubin can cross the immature blood-brain barrier and cause KERNICTERUS — this is why neonatal jaundice is treated by threshold and not by appearance.',
        },
        the_confirming_features:
          'Urine is NORMAL in colour, because unconjugated bilirubin is fat-soluble, bound to albumin and CANNOT be filtered by the kidney. This is the classic "acholuric jaundice". Stools remain normal. If haemolysis is the cause you would also expect a raised LDH, low haptoglobin, and raised reticulocytes.',
      },
      conjugated_predominant: {
        meaning: 'The liver conjugated it successfully, but it could not reach the gut — or leaked back out of damaged hepatocytes.',
        causes: {
          obstruction_post_hepatic: 'Gallstone in the common bile duct, stricture, cholangiocarcinoma, carcinoma of the head of the pancreas, and parasitic obstruction where endemic.',
          hepatocellular: 'Hepatitis of any cause, cirrhosis, drugs, sepsis. Here bilirubin is usually raised alongside marked transaminase or ALP change.',
          rare_inherited: 'Dubin-Johnson and Rotor syndromes — benign, and worth knowing so they are not over-investigated.',
        },
        the_confirming_features:
          'DARK URINE, because conjugated bilirubin is water-soluble and IS filtered. PALE, putty-coloured STOOLS if obstruction is complete, because no bile pigment reaches the gut. ITCHING from retained bile salts. This bedside triad — dark urine, pale stools, itch — identifies a cholestatic picture before the laboratory reports.',
      },
      the_bedside_shortcut: {
        dark_urine_and_pale_stools: 'CONJUGATED. Obstructive or hepatocellular. Image the biliary tree.',
        normal_urine_and_normal_stools: 'UNCONJUGATED. Think haemolysis or Gilbert. Send a film, reticulocytes, LDH and haptoglobin.',
      },
      the_red_flags: [
        'PAINLESS jaundice with weight loss and a palpable gallbladder — Courvoisier: the cause is unlikely to be stones, and pancreatic or biliary malignancy must be excluded.',
        'Jaundice with FEVER and right upper quadrant pain — CHARCOT TRIAD, cholangitis. Needs drainage, not antibiotics alone.',
        'Jaundice with a raised INR or confusion — acute liver failure.',
        'Neonatal jaundice in the FIRST 24 HOURS, or any CONJUGATED jaundice in a neonate — always pathological. Conjugated neonatal jaundice raises biliary atresia, where the surgical window is measured in weeks.',
      ],
      when_jaundice_becomes_visible:
        'Clinically detectable at roughly twice the upper limit of normal, so a patient can be significantly hyperbilirubinaemic and look normal. Examine the SCLERAE in NATURAL LIGHT — and on darker skin the sclerae, the under-surface of the tongue and the hard palate are the reliable sites, while skin colour is not.',
    },
    warnings: [
      'Always split the bilirubin. Conjugated versus unconjugated changes the entire differential.',
      'Dark urine with pale stools means CONJUGATED. Normal urine means unconjugated — unconjugated bilirubin cannot be filtered.',
      'An isolated mildly raised bilirubin in a well patient, worse with fasting or illness, is usually Gilbert syndrome. Do not over-investigate it.',
      'Neonatal jaundice in the first 24 hours, or any conjugated neonatal jaundice, is always pathological — consider biliary atresia, where delay costs the surgical window.',
      'Painless jaundice with weight loss and a palpable gallbladder (Courvoisier) suggests malignancy, not stones.',
      'Jaundice is not visible until roughly twice normal. Examine sclerae in natural light; on darker skin use sclerae, sublingual surface and hard palate.',
    ],
    limitations: ['Assay methods and paediatric thresholds are laboratory- and protocol-specific. Neonatal treatment thresholds must come from the local chart.'],
    cards: [
      { q: 'Why is urine normal in unconjugated hyperbilirubinaemia?', a: 'Unconjugated bilirubin is fat-soluble and albumin-bound, so it cannot be filtered — "acholuric jaundice".' },
      { q: 'Dark urine + pale stools — which fraction?', a: 'Conjugated. Water-soluble so it is excreted renally, and no pigment reaches the gut.' },
      { q: 'Commonest cause of isolated raised bilirubin in a well person?', a: 'Gilbert syndrome — worse with fasting, illness and exertion.' },
      { q: 'What is Courvoisier law?', a: 'Painless jaundice with a palpable gallbladder is unlikely to be stones — suspect malignancy.' },
      { q: 'Which neonatal jaundice is always pathological?', a: 'Within the first 24 hours, or any conjugated jaundice — consider biliary atresia.' },
      { q: 'Bloods to confirm haemolysis?', a: 'Raised LDH and reticulocytes, low haptoglobin, plus a blood film.' },
      { q: 'At what level does jaundice become visible?', a: 'Roughly twice the upper limit of normal — so it can be significant and invisible.' },
    ],
    checks: ['Bilirubin split into conjugated and unconjugated', 'Urine and stool colour asked about', 'Sclerae examined in natural light', 'Haemolysis screen if unconjugated', 'Biliary imaging if conjugated', 'INR and encephalopathy assessed'],
    related: ['liver_function_tests_hepatocellular_versus_cholestatic'],
  },

  {
    id: 'AS-LABT-0004',
    type: 'test',
    title: 'Troponin, CK and LDH — Enzymes of Muscle and Heart',
    short: 'Troponin, CK, LDH',
    summary:
      'Troponin means MYOCARDIAL injury — it does not mean myocardial infarction, and treating every rise as one causes harm. CK is the rhabdomyolysis test. LDH is raised by almost everything and is only useful in a narrow set of questions.',
    domains: ['cardiovascular', 'laboratory_medicine', 'critical_care'],
    intents: ['investigate', 'identify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'troponin', 'high sensitivity troponin', 'hs troponin', 'trop', 'ck', 'creatine kinase',
      'cpk', 'ck-mb', 'ldh', 'lactate dehydrogenase', 'cardiac enzymes', 'myoglobin',
      'rhabdomyolysis', 'cardiac markers',
    ],
    terms: [
      'troponin', 'troponin i', 'troponin t', 'creatine kinase', 'ck', 'cpk', 'ckmb', 'ldh',
      'lactate dehydrogenase', 'rhabdomyolysis', 'myoglobin', 'type 2 mi', 'myocardial injury',
      'delta', 'cardiac enzyme', 'muscle enzyme',
    ],
    confirm_locally: true,
    body: {
      troponin: {
        what_it_actually_means:
          'Troponin is a marker of MYOCARDIAL INJURY — cardiomyocyte death or membrane leak. It is NOT a marker of coronary occlusion. A raised troponin says heart muscle has been hurt; it does not say why. Reading every rise as "an MI" is one of the commonest and most consequential errors in acute medicine, because it leads to anticoagulation and angiography in patients whose problem is sepsis or pulmonary embolism.',
        type_1_versus_type_2: {
          type_1: 'Atherosclerotic plaque rupture with thrombus — the "true" MI. Treated with antiplatelets, anticoagulation and revascularisation.',
          type_2: 'Supply-demand MISMATCH with no plaque rupture: sepsis, tachyarrhythmia, severe anaemia, hypotension, hypertensive crisis, hypoxia. The treatment is to TREAT THE UNDERLYING CAUSE. Anticoagulating a septic patient for a type 2 rise adds bleeding risk with no benefit.',
          how_to_tell: 'The clinical context, the ECG, and the SHAPE of the rise. Type 1 typically gives a marked rise and fall with ischaemic symptoms and ECG change. Type 2 gives a modest, relatively flat elevation in a patient who is obviously unwell for another reason.',
        },
        the_delta_is_the_point:
          'With high-sensitivity assays a SINGLE value is far less informative than the CHANGE between two. An acute injury RISES AND FALLS. A chronically raised, unchanging troponin is typical of chronic kidney disease, heart failure or structural heart disease, and is a prognostic marker, not an acute event. Always take a second sample at the interval your assay specifies.',
        non_coronary_causes_that_must_be_considered: 'Pulmonary embolism, myocarditis, pericarditis, aortic dissection, takotsubo, arrhythmia, cardiac contusion, defibrillation, chemotherapy cardiotoxicity, and severe sepsis. Aortic DISSECTION deserves separate emphasis: it can raise troponin, and anticoagulating a dissection is catastrophic.',
        renal_impairment: 'Troponin is frequently raised at baseline in chronic kidney disease. It is NOT simply "false positive" — it carries real prognostic weight — but the diagnosis of acute MI must rest on the DELTA and the clinical picture, not the absolute number.',
      },
      creatine_kinase: {
        what: 'CK is released from damaged MUSCLE. It is the test for RHABDOMYOLYSIS.',
        do_not_confuse: 'CREATINE kinase (muscle enzyme) is a completely different thing from CREATININE (renal marker). The names differ by two letters and the tests answer opposite questions. They are, however, linked clinically: rhabdomyolysis raises CK and then causes acute kidney injury, raising creatinine.',
        causes_of_a_high_ck: 'Crush injury, prolonged immobility ("long lie"), seizures, extreme exertion, compartment syndrome, statins and fibrates, alcohol and stimulants, neuroleptic malignant syndrome, malignant hyperthermia, and inflammatory myopathies such as polymyositis. Note also that CK is normally higher in people with greater muscle mass and after exercise.',
        why_it_matters: 'Massive CK release causes ACUTE KIDNEY INJURY through myoglobin toxicity. The management priority is EARLY and GENEROUS intravenous fluid to maintain urine output, plus treating hyperkalaemia — which can be life-threatening and rises fast as damaged muscle releases potassium. Watch potassium, calcium, phosphate and renal function closely.',
        ck_mb: 'A cardiac-enriched fraction, largely superseded by troponin. Its residual niche is suspected RE-infarction shortly after an index event, because it clears faster than troponin.',
      },
      ldh: {
        what: 'Lactate dehydrogenase is present in nearly every tissue, so a raised level is extremely non-specific and is not a screening test.',
        where_it_is_genuinely_useful: [
          'HAEMOLYSIS — raised LDH with low haptoglobin and raised reticulocytes and unconjugated bilirubin.',
          'TUMOUR LYSIS SYNDROME and as a bulk-of-disease and prognostic marker in lymphoma and some other malignancies.',
          'PLEURAL FLUID, where it forms part of LIGHT CRITERIA separating exudate from transudate.',
        ],
        the_trap: 'A HAEMOLYSED SAMPLE raises LDH and potassium in the bottle. Before working up a patient for haemolysis, confirm the sample was not simply difficult to draw.',
      },
    },
    warnings: [
      'A raised troponin means myocardial INJURY, not myocardial infarction. Establish type 1 versus type 2 before anticoagulating.',
      'Consider aortic dissection before anticoagulating a chest pain patient with a raised troponin — anticoagulation there is catastrophic.',
      'Use the DELTA between two samples. A flat, chronically raised troponin suggests renal or structural disease, not an acute event.',
      'CREATINE kinase and CREATININE are different tests answering opposite questions. Check which one was ordered.',
      'Rhabdomyolysis causes AKI and dangerous hyperkalaemia. Priority is early generous fluid and potassium management.',
      'A haemolysed sample falsely raises LDH and potassium. Confirm sample quality before investigating.',
      'LDH is too non-specific to be a screening test.',
    ],
    limitations: ['Assay thresholds, delta criteria and sampling intervals are assay- and protocol-specific. No doses are given here.'],
    cards: [
      { q: 'What does a raised troponin actually mean?', a: 'Myocardial injury — not necessarily infarction, and not necessarily coronary.' },
      { q: 'Type 1 vs type 2 MI?', a: 'Type 1 is plaque rupture with thrombus. Type 2 is supply-demand mismatch — treat the underlying cause.' },
      { q: 'Why is a single high-sensitivity troponin weak evidence?', a: 'Acute injury rises and falls. The delta between samples carries the information.' },
      { q: 'Which diagnosis must be excluded before anticoagulating for a raised troponin?', a: 'Aortic dissection.' },
      { q: 'CK versus creatinine?', a: 'CK is a muscle enzyme (rhabdomyolysis). Creatinine is a renal marker. Different tests, similar names.' },
      { q: 'Main danger of rhabdomyolysis?', a: 'AKI from myoglobin, plus rapid dangerous hyperkalaemia.' },
      { q: 'Where is LDH genuinely useful?', a: 'Haemolysis, tumour lysis and lymphoma bulk, and Light criteria in pleural fluid.' },
    ],
    checks: ['Second troponin taken at the assay-specified interval', 'Type 1 vs type 2 considered', 'Dissection excluded before anticoagulation', 'CK sent if muscle injury suspected', 'Potassium and renal function monitored in rhabdomyolysis', 'Sample haemolysis excluded before acting on LDH or potassium'],
  },

  {
    id: 'AS-LABT-0005',
    type: 'test',
    title: 'CRP, ESR, Procalcitonin and Ferritin — Inflammatory Markers',
    short: 'Inflammatory markers',
    summary:
      'None of these diagnoses infection. CRP moves in hours and ESR in weeks, so they answer different questions. The most dangerous belief in this area is that a normal CRP excludes serious bacterial infection — in early sepsis it frequently does not.',
    domains: ['immunology', 'laboratory_medicine', 'infectious_disease'],
    intents: ['investigate', 'monitor'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'inflammatory markers', 'crp', 'c reactive protein', 'esr', 'erythrocyte sedimentation rate',
      'procalcitonin', 'pct', 'ferritin', 'acute phase reactant', 'acute phase response',
      'sed rate', 'plasma viscosity',
    ],
    terms: [
      'crp', 'c reactive protein', 'esr', 'sedimentation rate', 'procalcitonin', 'ferritin',
      'acute phase', 'inflammation', 'infection marker', 'sepsis marker', 'plasma viscosity',
      'temporal arteritis', 'giant cell arteritis', 'still disease', 'hlh',
    ],
    confirm_locally: true,
    body: {
      the_governing_principle:
        'These are markers of INFLAMMATION, not of infection. Inflammation is caused by infection, trauma, surgery, infarction, autoimmune disease, and malignancy alike. No value on its own confirms or excludes bacterial infection, and none should override clinical judgement about a sick patient.',
      crp: {
        kinetics: 'Rises within 6–8 hours, peaks around 48 hours, and falls quickly once the stimulus stops. Its short half-life makes it a good TREND marker.',
        best_use: 'Following a known process over days — is this improving or not? A rising CRP on treatment is a prompt to reconsider the diagnosis, the drug, or an undrained collection.',
        the_critical_caveat:
          'A NORMAL CRP DOES NOT EXCLUDE SERIOUS BACTERIAL INFECTION, especially in the FIRST HOURS before it has had time to rise, in NEUTROPENIC patients, in the very young and very old, and in those on corticosteroids. Sepsis has been missed on the strength of a normal CRP in a patient who looked unwell. Treat the patient.',
      },
      esr: {
        what_it_measures: 'How fast red cells settle — an INDIRECT measure driven mostly by fibrinogen and immunoglobulins.',
        kinetics: 'Rises and falls over WEEKS. It is therefore a poor acute marker but a useful CHRONIC one.',
        what_raises_it_apart_from_inflammation: 'ANAEMIA raises it. Pregnancy raises it. It rises with AGE and is higher in women. Polycythaemia and sickle cell disease LOWER it. An ESR must be interpreted against the haemoglobin, or it will mislead.',
        where_it_still_earns_its_place: 'GIANT CELL ARTERITIS and polymyalgia rheumatica, myeloma, and chronic infection such as osteomyelitis, endocarditis and tuberculosis. A VERY high ESR (roughly above 100) narrows to a short list: malignancy — especially myeloma — serious infection, and giant cell arteritis.',
        the_urgent_one: 'Suspected giant cell arteritis with visual symptoms is a SIGHT-THREATENING emergency. Treatment is started on clinical suspicion; do NOT wait for the ESR or the biopsy, because vision lost is not recovered.',
      },
      procalcitonin: {
        what: 'A precursor of calcitonin that rises markedly in systemic BACTERIAL infection and comparatively little in viral infection or non-infective inflammation.',
        use: 'Its evidence is strongest for ANTIBIOTIC STEWARDSHIP — supporting a decision to STOP or withhold antibiotics in respiratory infection and in critical care, rather than for diagnosis.',
        cautions: 'Also raised by major surgery, trauma, burns, cardiogenic shock and medullary thyroid carcinoma. Not universally available, and it must not override clinical judgement in a patient who appears septic.',
      },
      ferritin: {
        the_dual_role: 'Ferritin is BOTH the iron store marker AND an acute phase reactant. That dual identity is the source of most misreadings.',
        low: 'A LOW ferritin is highly specific for IRON DEFICIENCY — it is one of the more useful single results in medicine.',
        normal_or_high_in_a_sick_patient:
          'Does NOT exclude iron deficiency, because inflammation raises it independently. If iron deficiency is suspected in an inflamed patient, use TRANSFERRIN SATURATION, or consider that a "normal" ferritin may be inappropriately low for the degree of inflammation.',
        very_high: 'Extremely raised ferritin has a specific differential worth knowing: HAEMOPHAGOCYTIC LYMPHOHISTIOCYTOSIS (HLH), adult-onset Still disease, haemochromatosis, liver necrosis, and haematological malignancy. HLH is rare, rapidly fatal and treatable, and a strikingly high ferritin is often the first clue anyone notices.',
      },
      how_to_use_them_together:
        'Ask what question you are answering. Following a known process over days → CRP. Suspecting a chronic or smouldering process, myeloma or giant cell arteritis → ESR. Deciding whether to stop antibiotics → procalcitonin if available. Assessing iron → ferritin, interpreted alongside CRP and transferrin saturation.',
    },
    warnings: [
      'A normal CRP does NOT exclude serious bacterial infection — particularly early, in neutropenia, at extremes of age, and on steroids.',
      'These markers indicate inflammation, not infection. They never override clinical judgement in a patient who looks unwell.',
      'Interpret ESR against the haemoglobin — anaemia raises it independently, and it rises with age and in pregnancy.',
      'Suspected giant cell arteritis with visual symptoms: start treatment on suspicion. Do not wait for the ESR or biopsy.',
      'A normal or high ferritin does not exclude iron deficiency in an inflamed patient — check transferrin saturation.',
      'A strikingly high ferritin should prompt consideration of HLH and adult-onset Still disease.',
      'Do not treat a number. Treat the patient and the source.',
    ],
    limitations: ['Reference ranges, procalcitonin availability and stewardship thresholds are local. No treatment doses are given here.'],
    cards: [
      { q: 'Does a normal CRP exclude bacterial infection?', a: 'No — especially in the first hours, in neutropenia, at extremes of age, and on steroids.' },
      { q: 'CRP vs ESR kinetics?', a: 'CRP moves in hours; ESR over weeks. They answer different questions.' },
      { q: 'What else raises the ESR?', a: 'Anaemia, pregnancy, age and female sex. Polycythaemia and sickle cell lower it.' },
      { q: 'Differential for an ESR over 100?', a: 'Malignancy (especially myeloma), serious infection, and giant cell arteritis.' },
      { q: 'Main evidence-based use of procalcitonin?', a: 'Antibiotic stewardship — supporting stopping or withholding, not diagnosis.' },
      { q: 'Why can a normal ferritin miss iron deficiency?', a: 'It is an acute phase reactant, so inflammation raises it. Use transferrin saturation.' },
      { q: 'What does a strikingly high ferritin suggest?', a: 'HLH, adult-onset Still disease, haemochromatosis, liver necrosis, haematological malignancy.' },
    ],
    checks: ['Question being answered identified before ordering', 'ESR interpreted against haemoglobin', 'Clinical picture given precedence over a normal CRP', 'GCA treated on suspicion where sight is threatened', 'Transferrin saturation used if ferritin may be confounded'],
  },

  {
    id: 'AS-LABT-0006',
    type: 'test',
    title: 'Clotting — INR, APTT, D-dimer and Fibrinogen',
    short: 'Clotting tests',
    summary:
      'PT/INR tests the EXTRINSIC pathway, APTT the INTRINSIC. Which one is prolonged localises the problem, and a mixing study separates a missing factor from an inhibitor. D-dimer is a rule-OUT test and is worse than useless when used to rule in.',
    domains: ['haematology', 'laboratory_medicine'],
    intents: ['investigate', 'monitor'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'clotting screen', 'coagulation screen', 'inr', 'pt', 'prothrombin time', 'aptt', 'ptt',
      'activated partial thromboplastin time', 'd-dimer', 'd dimer', 'ddimer', 'fibrinogen',
      'mixing study', 'coagulopathy', 'clotting profile',
    ],
    terms: [
      'inr', 'prothrombin time', 'aptt', 'ptt', 'd-dimer', 'fibrinogen', 'extrinsic', 'intrinsic',
      'common pathway', 'mixing study', 'lupus anticoagulant', 'vitamin k', 'warfarin', 'heparin',
      'dic', 'haemophilia', 'von willebrand', 'anti-xa',
    ],
    confirm_locally: true,
    body: {
      which_test_covers_which_pathway: {
        pt_inr: 'EXTRINSIC and common pathway — factors VII, X, V, II and fibrinogen. Factor VII has the SHORTEST half-life of all the clotting factors, which is why the PT/INR is the FIRST to move in liver disease, vitamin K deficiency and warfarin.',
        aptt: 'INTRINSIC and common pathway — factors XII, XI, IX, VIII, X, V, II and fibrinogen.',
        the_localisation_logic: {
          pt_prolonged_alone: 'Factor VII — early warfarin, early liver disease, early vitamin K deficiency.',
          aptt_prolonged_alone: 'Factor VIII, IX or XI — HAEMOPHILIA A or B, von Willebrand disease, unfractionated heparin, or a LUPUS ANTICOAGULANT.',
          both_prolonged: 'Common pathway or a global problem — DIC, severe liver disease, marked vitamin K deficiency, large-volume transfusion, or direct oral anticoagulants.',
        },
      },
      the_mixing_study: {
        what_it_does: 'Mix the patient plasma 1:1 with normal plasma and repeat the test.',
        interpretation: 'If it CORRECTS, the patient is MISSING a factor (a deficiency — the normal plasma supplied it). If it does NOT correct, there is an INHIBITOR present — most commonly a lupus anticoagulant, sometimes an acquired factor inhibitor.',
        the_counterintuitive_part:
          'A LUPUS ANTICOAGULANT prolongs the APTT in the test tube but causes THROMBOSIS in the patient, not bleeding. The name is thoroughly misleading. An unexplained prolonged APTT in a patient with thrombosis or recurrent miscarriage should prompt antiphospholipid testing, not a search for a bleeding disorder.',
      },
      what_a_normal_clotting_screen_does_not_exclude: [
        'PLATELET function disorders and mild VON WILLEBRAND disease — the commonest inherited bleeding disorder — can both give a normal screen.',
        'FACTOR XIII deficiency is not detected by PT or APTT at all.',
        'DIRECT ORAL ANTICOAGULANTS may leave PT and APTT near-normal at therapeutic levels. A normal screen does NOT mean a patient on a DOAC is safe to operate on — specific anti-Xa or drug-level assays are needed.',
        'A good BLEEDING HISTORY outperforms the screen for predicting surgical bleeding.',
      ],
      d_dimer: {
        what: 'A fibrin degradation product — evidence that clot has been formed and broken down SOMEWHERE.',
        the_only_correct_use:
          'A RULE-OUT test, and only in patients already assessed as LOW or INTERMEDIATE probability by a validated score such as Wells. In that group a negative D-dimer has high negative predictive value and can safely avoid imaging.',
        the_two_serious_misuses: [
          'Using it in a HIGH-probability patient. If probability is high, a negative D-dimer does not exclude the diagnosis — go straight to imaging. Ordering it here can only mislead.',
          'Using a POSITIVE result to rule IN. It is raised by infection, surgery, trauma, malignancy, pregnancy, liver disease, and simply by being old or in hospital. A positive result means "image", not "treat".',
        ],
        age_adjustment: 'Many services use an age-adjusted threshold in older patients to reduce needless imaging. Use your local protocol.',
      },
      fibrinogen: {
        what: 'The substrate for clot formation, and an ACUTE PHASE REACTANT — so it RISES in inflammation.',
        the_important_consequence:
          'In DIC, fibrinogen is being consumed while inflammation pushes it up. A "normal" fibrinogen in a septic, bleeding patient may therefore be inappropriately LOW and falling. The TREND matters more than the single value.',
        where_it_is_critical: 'Major haemorrhage and obstetric haemorrhage, where fibrinogen falls early and replacement is guided by it. In pregnancy fibrinogen is normally ELEVATED, so a "normal" level in postpartum haemorrhage is a warning sign.',
      },
      dic: {
        the_picture: 'Prolonged PT and APTT, FALLING fibrinogen, FALLING platelets, RISING D-dimer, and a film showing red cell fragments — in a patient with sepsis, malignancy, obstetric catastrophe, major trauma or severe pancreatitis.',
        the_principle: 'DIC is a manifestation, never a diagnosis in itself. Treating the numbers without finding and treating the trigger does not work.',
      },
    },
    warnings: [
      'D-dimer is a RULE-OUT test only, and only in low or intermediate probability. In high probability, image regardless.',
      'A positive D-dimer means "image", never "treat".',
      'A normal clotting screen does not exclude von Willebrand disease, platelet function disorders, factor XIII deficiency, or a therapeutic DOAC level.',
      'A lupus anticoagulant prolongs the APTT but causes THROMBOSIS, not bleeding. The name misleads.',
      'A normal fibrinogen in a septic or postpartum bleeding patient may be inappropriately low — follow the trend.',
      'DIC is a manifestation of something else. Find and treat the trigger.',
      'INR moves first in liver disease and vitamin K deficiency because factor VII has the shortest half-life.',
    ],
    limitations: ['Assay sensitivity, D-dimer thresholds and age adjustment are laboratory- and protocol-specific. Reversal agents and doses are not given here.'],
    cards: [
      { q: 'Which pathway does the PT/INR test?', a: 'Extrinsic and common — and it moves first because factor VII has the shortest half-life.' },
      { q: 'Isolated prolonged APTT — differential?', a: 'Haemophilia A/B, von Willebrand disease, unfractionated heparin, or a lupus anticoagulant.' },
      { q: 'Mixing study corrects — what does that mean?', a: 'A factor DEFICIENCY. Failure to correct means an inhibitor.' },
      { q: 'Why is "lupus anticoagulant" a misleading name?', a: 'It prolongs the APTT in vitro but causes thrombosis in vivo.' },
      { q: 'When is a D-dimer appropriate?', a: 'Only to rule out, and only at low or intermediate pre-test probability.' },
      { q: 'Why can a normal fibrinogen be dangerous in DIC or PPH?', a: 'It is an acute phase reactant and is normally raised in pregnancy — "normal" may be inappropriately low.' },
      { q: 'Does a normal clotting screen make a DOAC patient safe for surgery?', a: 'No. PT and APTT can be near-normal at therapeutic levels — specific assays are needed.' },
    ],
    checks: ['Pre-test probability scored before any D-dimer', 'Mixing study considered for unexplained prolongation', 'Anticoagulant and DOAC history taken', 'Fibrinogen trended in major haemorrhage', 'DIC trigger identified', 'Bleeding history taken, not just the screen'],
  },

  {
    id: 'AS-LABT-0007',
    type: 'test',
    title: 'Amylase and Lipase — Diagnosing Pancreatitis',
    short: 'Amylase and lipase',
    summary:
      'Lipase is more sensitive and more specific and stays up longer. The level does NOT indicate severity — a common and dangerous assumption — and a normal amylase does not exclude pancreatitis late in presentation or in chronic disease.',
    domains: ['general_surgery', 'laboratory_medicine', 'hepatology'],
    intents: ['investigate', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['amylase', 'lipase', 'serum amylase', 'serum lipase', 'pancreatitis', 'pancreatic enzymes', 'macroamylasaemia'],
    terms: ['amylase', 'lipase', 'pancreatitis', 'pancreatic enzyme', 'macroamylasaemia', 'epigastric pain', 'gallstone pancreatitis'],
    confirm_locally: true,
    body: {
      which_test: {
        lipase: 'MORE SENSITIVE and MORE SPECIFIC than amylase, and it remains raised for roughly 8–14 days. It is the preferred test where available, particularly in LATE presentations.',
        amylase: 'Rises early and falls within 3–5 days. Widely available and still perfectly usable, but it misses late presenters and has more non-pancreatic causes.',
      },
      the_single_most_important_caveat:
        'THE LEVEL DOES NOT PREDICT SEVERITY. A patient with a mildly raised amylase can have severe necrotising pancreatitis, and a patient with an enormous level can run a mild course. Severity is assessed CLINICALLY and with validated scoring and imaging — never with the enzyme level. Reassurance based on a modest level is a recognised route to a missed severe case.',
      when_the_enzymes_can_be_normal_or_only_mildly_raised: [
        'LATE presentation — amylase has already fallen. Use lipase.',
        'CHRONIC pancreatitis with an exhausted, fibrosed gland that has little enzyme left to release.',
        'HYPERTRIGLYCERIDAEMIC pancreatitis, where the lipaemic sample can interfere with the assay — a specific trap, because hypertriglyceridaemia is itself a cause.',
        'Diagnosis remains possible on characteristic pain plus imaging even if enzymes are unremarkable.',
      ],
      other_causes_of_a_raised_amylase: {
        abdominal: 'Perforated peptic ulcer, mesenteric ischaemia, bowel obstruction, ruptured ectopic pregnancy, and acute cholecystitis. Several of these are surgical emergencies that mimic pancreatitis, so a raised amylase must never close the diagnostic question.',
        non_abdominal: 'Salivary gland disease including mumps and parotitis (salivary isoenzyme), diabetic ketoacidosis, renal failure (reduced clearance), and macroamylasaemia.',
        macroamylasaemia: 'Amylase bound to immunoglobulin forms a complex too large to be filtered, so it accumulates. It gives a persistently raised amylase in a WELL patient with a NORMAL lipase — benign, and worth recognising to stop repeated investigation.',
      },
      once_pancreatitis_is_diagnosed: {
        find_the_cause: 'Gallstones and alcohol account for most cases. Others: hypertriglyceridaemia, hypercalcaemia, drugs, ERCP, trauma, infection, autoimmune, and scorpion sting where relevant.',
        the_tests_that_follow: 'Ultrasound for gallstones and duct dilatation in EVERY case, plus calcium, triglycerides and liver function. A raised ALT strongly favours a gallstone cause.',
        what_actually_changes_outcome: 'Early aggressive fluid resuscitation, analgesia, monitoring for organ failure, and early enteral nutrition where tolerated. Severity assessment, not the enzyme level, drives escalation.',
      },
    },
    warnings: [
      'The enzyme LEVEL does not indicate severity. Assess severity clinically and with validated scoring and imaging.',
      'A normal amylase does not exclude pancreatitis in late presentation, chronic pancreatitis, or hypertriglyceridaemic pancreatitis.',
      'A raised amylase does not confirm pancreatitis — perforation and mesenteric ischaemia raise it too and are surgical emergencies.',
      'Persistently raised amylase in a well patient with a normal lipase suggests macroamylasaemia — benign.',
      'Always look for the cause. Ultrasound for gallstones in every case, plus calcium and triglycerides.',
      'A lipaemic sample in hypertriglyceridaemic pancreatitis can interfere with the assay and mask the diagnosis.',
    ],
    limitations: ['Assay thresholds and severity scoring systems are protocol-specific. Fluid regimens are not given here.'],
    cards: [
      { q: 'Amylase or lipase — which is better?', a: 'Lipase: more sensitive, more specific, and raised for 8–14 days versus 3–5.' },
      { q: 'Does the enzyme level indicate severity?', a: 'No. Severity is clinical, scored and imaged — never enzymatic.' },
      { q: 'When can enzymes be normal in pancreatitis?', a: 'Late presentation, chronic pancreatitis, and hypertriglyceridaemic pancreatitis.' },
      { q: 'Non-pancreatic causes of raised amylase?', a: 'Perforation, mesenteric ischaemia, obstruction, ectopic, mumps, DKA, renal failure, macroamylasaemia.' },
      { q: 'What is macroamylasaemia?', a: 'Amylase bound to immunoglobulin, too large to filter — high amylase, normal lipase, well patient.' },
      { q: 'Which result favours a gallstone cause?', a: 'A raised ALT.' },
    ],
    checks: ['Lipase used if available or late presentation', 'Severity assessed clinically, not by enzyme level', 'Ultrasound arranged in every case', 'Calcium and triglycerides sent', 'Surgical mimics considered', 'Early fluids and analgesia given'],
  },

  {
    id: 'AS-LABT-0008',
    type: 'test',
    title: 'Creatinine, eGFR — and Why Creatine Is a Different Test',
    short: 'Creatinine and eGFR',
    summary:
      'Creatinine is a late and biased marker of kidney function that depends heavily on MUSCLE MASS, so it overestimates function in the frail. CREATINE kinase is an entirely different test. Confusing the two is easy and the names are two letters apart.',
    domains: ['renal', 'laboratory_medicine'],
    intents: ['investigate', 'monitor'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'creatinine', 'serum creatinine', 'egfr', 'gfr', 'estimated gfr', 'creatinine clearance',
      'renal function', 'kidney function', 'urea and electrolytes', 'u&e', 'cystatin c', 'creatine',
    ],
    terms: [
      'creatinine', 'creatine', 'egfr', 'gfr', 'creatinine clearance', 'cockcroft gault',
      'ckd-epi', 'mdrd', 'cystatin c', 'renal function', 'aki', 'ckd', 'muscle mass', 'urea',
      'baseline creatinine', 'nephrotoxic',
    ],
    confirm_locally: true,
    body: {
      the_naming_confusion_first: {
        creatinine: 'A waste product of muscle metabolism, filtered by the kidney. Used to ESTIMATE KIDNEY FUNCTION.',
        creatine_kinase: 'An ENZYME released from damaged MUSCLE. Used to diagnose RHABDOMYOLYSIS and myopathy.',
        why_they_are_confused: 'The names differ by two letters and both relate to muscle. They answer opposite questions and are ordered for different reasons.',
        the_link_that_is_real: 'Rhabdomyolysis raises CK massively AND then causes acute kidney injury, raising creatinine. So they can be abnormal together — but for sequential, not interchangeable, reasons.',
      },
      why_creatinine_is_a_poor_marker: {
        it_depends_on_muscle_mass:
          'Creatinine is generated by muscle. A frail elderly person, an amputee, someone with advanced liver disease or cachexia, or a person with a spinal cord injury produces LITTLE creatinine — so their creatinine may sit within the "normal" range with substantially reduced kidney function. Conversely a muscular young person may have a creatinine above the range with entirely normal kidneys. This is the single most consequential limitation, and it systematically causes UNDER-recognition of renal impairment in exactly the patients most at risk from nephrotoxic drugs.',
        it_is_late: 'GFR must fall by roughly HALF before creatinine rises above the reference range, because of compensatory hyperfiltration. A "normal" creatinine can conceal substantial loss of function.',
        the_baseline_matters_more_than_the_range:
          'A creatinine that has DOUBLED from a patient own baseline is a serious AKI even if the absolute value is still within the laboratory range. Always find the previous result. AKI is defined by CHANGE, not by crossing a threshold.',
        other_influences: 'Diet (a large cooked meat meal raises it), and drugs that block tubular SECRETION without affecting filtration — trimethoprim, cimetidine and others — raise creatinine without any true fall in GFR.',
      },
      egfr: {
        what: 'A calculated estimate from creatinine, age and sex.',
        where_it_is_not_valid: [
          'ACUTE kidney injury — the equations assume a STEADY STATE. In a rapidly changing creatinine the eGFR is meaningless.',
          'Extremes of body habitus — very muscular, very cachectic, amputees.',
          'Pregnancy.',
          'Children — paediatric equations are different.',
          'Drug dosing in some circumstances, where a measured or Cockcroft-Gault creatinine clearance may be specified instead. Follow the reference your formulary specifies.',
        ],
        note_on_ethnicity_coefficients: 'Older equations applied a race coefficient. Major guidelines have moved away from this. Use the equation your laboratory currently reports and be aware which it is.',
        cystatin_c: 'Less dependent on muscle mass, and useful precisely where creatinine is unreliable — the frail, the cachectic, and those at the extremes of muscle mass. Not universally available.',
      },
      urea_alongside_creatinine: {
        why_the_ratio_helps: 'A urea rising disproportionately to creatinine suggests a PRE-RENAL state (hypovolaemia, poor perfusion), an UPPER GASTROINTESTINAL BLEED (absorbed protein load), a high protein intake, catabolism, or corticosteroids.',
        the_reverse: 'Urea disproportionately LOW relative to creatinine occurs in liver failure (reduced synthesis), malnutrition and pregnancy.',
      },
      practical_rules: [
        'Always compare with the previous creatinine. AKI is defined by change.',
        'In a frail or cachectic patient, assume kidney function is WORSE than the creatinine suggests before prescribing anything nephrotoxic or renally cleared.',
        'Review nephrotoxics early — NSAIDs, ACE inhibitors and ARBs, diuretics, aminoglycosides, contrast. The "triple whammy" of an ACE inhibitor, a diuretic and an NSAID together is a well-described cause of avoidable AKI.',
        'A rising creatinine with a falling urine output needs a cause found today — obstruction is the one that is fully reversible and is missed by not scanning the bladder.',
      ],
    },
    warnings: [
      'CREATININE (kidney) and CREATINE kinase (muscle) are different tests with similar names. Confirm which was ordered.',
      'Creatinine depends on muscle mass — it OVERESTIMATES kidney function in the frail, cachectic and amputees.',
      'GFR must fall by roughly half before creatinine leaves the reference range.',
      'A creatinine doubled from baseline is a serious AKI even if it is still "in range". Always find the previous value.',
      'eGFR is invalid in acute kidney injury — the equations assume a steady state.',
      'Trimethoprim and cimetidine raise creatinine by blocking tubular secretion without reducing GFR.',
      'Scan the bladder in unexplained AKI. Obstruction is the fully reversible cause that gets missed.',
    ],
    limitations: ['eGFR equations, reporting conventions and drug-dosing references vary by laboratory and formulary. No doses are given here.'],
    cards: [
      { q: 'Creatinine versus creatine kinase?', a: 'Creatinine estimates kidney function. CK detects muscle damage. Two letters apart, opposite questions.' },
      { q: 'Why does creatinine overestimate function in the frail?', a: 'It is generated by muscle — low muscle mass means low creatinine despite poor kidneys.' },
      { q: 'How much GFR is lost before creatinine rises?', a: 'Roughly half, because of compensatory hyperfiltration.' },
      { q: 'Why is the baseline more important than the range?', a: 'AKI is defined by change. A doubling within the range is still a serious AKI.' },
      { q: 'When is eGFR invalid?', a: 'Acute kidney injury, extremes of body habitus, pregnancy, and children.' },
      { q: 'Which drugs raise creatinine without reducing GFR?', a: 'Trimethoprim and cimetidine — they block tubular secretion.' },
      { q: 'What does a disproportionately high urea suggest?', a: 'Pre-renal state, upper GI bleed, high protein load, catabolism or steroids.' },
    ],
    checks: ['Previous creatinine found and compared', 'Muscle mass considered before trusting the value', 'Nephrotoxics reviewed', 'Bladder scanned in unexplained AKI', 'eGFR not used in an unsteady state', 'Correct test confirmed — creatinine vs CK'],
    related: ['troponin_ck_and_ldh_enzymes_of_muscle_and_heart', 'urea_why_it_rises_when_the_kidney_is_fine'],
  },

  {
    id: 'AS-LABT-0009',
    type: 'test',
    title: 'Ammonia — When It Helps and When It Misleads',
    short: 'Ammonia',
    summary:
      'Ammonia does not diagnose hepatic encephalopathy and does not grade it — that is clinical. It is genuinely useful in unexplained encephalopathy without liver disease, where it points to a metabolic cause. It is also the test most often ruined by how the sample was taken.',
    domains: ['hepatology', 'laboratory_medicine', 'paediatrics'],
    intents: ['investigate'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['ammonia', 'serum ammonia', 'plasma ammonia', 'hyperammonaemia', 'nh3'],
    terms: ['ammonia', 'hyperammonaemia', 'hepatic encephalopathy', 'urea cycle', 'valproate', 'nh3', 'tourniquet', 'ice'],
    confirm_locally: true,
    body: {
      what_it_does_not_do:
        'In known liver disease, ammonia correlates POORLY with the grade of hepatic encephalopathy. Encephalopathy is a CLINICAL diagnosis and is graded clinically. A normal ammonia does not exclude it and a high one does not confirm it. Treating the number rather than the patient, or withholding treatment because the ammonia is normal, are both errors.',
      where_it_genuinely_earns_its_place: [
        'UNEXPLAINED encephalopathy or coma in a patient WITHOUT known liver disease — here a markedly raised ammonia redirects the entire workup toward a metabolic cause.',
        'Suspected UREA CYCLE DISORDER in a neonate or child with encephalopathy, vomiting and respiratory alkalosis. This is a time-critical, treatable diagnosis, and a high ammonia is the key that unlocks it.',
        'VALPROATE-associated hyperammonaemic encephalopathy, which can occur with normal liver function tests and a therapeutic valproate level — a specific trap.',
        'Suspected acute liver FAILURE, where a very high ammonia carries prognostic weight and relates to cerebral oedema risk.',
      ],
      the_sample_is_the_commonest_source_of_error: {
        why: 'Ammonia is generated in the tube after collection, so a delayed or badly taken sample reads falsely high and triggers an unnecessary workup.',
        the_rules: [
          'Avoid a prolonged tourniquet and avoid fist clenching — muscle activity generates ammonia.',
          'Use the correct tube, fill it fully, and keep it ON ICE.',
          'Transport to the laboratory IMMEDIATELY and have it separated and analysed promptly.',
          'A haemolysed sample is unusable — red cells contain far more ammonia than plasma.',
        ],
        the_practical_upshot: 'Before acting on an isolated high ammonia in a patient who does not fit clinically, ask how the sample was taken and repeat it properly.',
      },
      other_causes_of_a_raised_ammonia: 'Gastrointestinal bleeding (a protein load in the gut), constipation, infection, dehydration, hypokalaemia, portosystemic shunting including TIPS, urease-producing urinary infection with obstruction, high-dose chemotherapy, and drugs — valproate most notably.',
      in_hepatic_encephalopathy_what_actually_matters:
        'FIND THE PRECIPITANT. Infection including spontaneous bacterial peritonitis, gastrointestinal bleeding, constipation, dehydration, electrolyte disturbance, sedatives, and non-adherence to lactulose. Identifying and treating the precipitant changes the outcome; measuring the ammonia repeatedly does not.',
    },
    warnings: [
      'Ammonia does not diagnose or grade hepatic encephalopathy — that is clinical. A normal level does not exclude it.',
      'Sample handling ruins this test. Prolonged tourniquet, fist clenching, delay, warmth or haemolysis all falsely raise it.',
      'Markedly raised ammonia in encephalopathy WITHOUT liver disease is a red flag — consider urea cycle disorder and valproate toxicity.',
      'Valproate hyperammonaemic encephalopathy can occur with normal LFTs and a therapeutic drug level.',
      'In a child with encephalopathy, vomiting and respiratory alkalosis, send ammonia urgently — urea cycle disorders are time-critical and treatable.',
      'In known liver disease, the priority is finding the PRECIPITANT, not tracking the ammonia.',
    ],
    limitations: ['Reference ranges, tube types and handling requirements are laboratory-specific — confirm locally before sending.'],
    cards: [
      { q: 'Does ammonia grade hepatic encephalopathy?', a: 'No. Grading is clinical, and a normal level does not exclude it.' },
      { q: 'When is ammonia genuinely useful?', a: 'Unexplained encephalopathy WITHOUT liver disease — urea cycle disorders, valproate toxicity.' },
      { q: 'How is the sample ruined?', a: 'Prolonged tourniquet, fist clenching, delay, warmth, or haemolysis — all falsely raise it.' },
      { q: 'Valproate encephalopathy — what is the trap?', a: 'It can occur with normal LFTs and a therapeutic valproate level.' },
      { q: 'Child with encephalopathy, vomiting and respiratory alkalosis?', a: 'Send ammonia urgently — consider a urea cycle disorder.' },
      { q: 'What changes outcome in hepatic encephalopathy?', a: 'Finding and treating the precipitant, not tracking the ammonia.' },
    ],
    checks: ['Sample taken without prolonged tourniquet, on ice, transported immediately', 'Result questioned if it does not fit clinically', 'Precipitant sought in known liver disease', 'Valproate considered', 'Urea cycle disorder considered in a child'],
  },
];
