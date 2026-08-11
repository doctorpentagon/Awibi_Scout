/**
 * Central abbreviation dictionary.
 *
 * An audit found 165 places where an abbreviation was used and never expanded.
 * Patching the prose by hand is fragile and would drift again, so the build
 * instead scans every entry, finds the abbreviations it actually uses, and
 * attaches a glossary. Add a term here once and every entry that uses it gains
 * the expansion.
 *
 * Rules for entries here:
 *   · `full` is the plain expansion — what the letters stand for.
 *   · `gloss` is optional and says what it IS, for a reader who has the words
 *     but not the meaning. "Left ventricular ejection fraction" does not help
 *     someone who does not know what an ejection fraction is.
 *   · `word: true` marks abbreviations that are also ordinary English words
 *     (LAST, MEN, IRIS, ACE, CAGE). These need a case-sensitive match or the
 *     scanner tags every entry containing "last" or "men".
 */

export const ABBREVIATIONS = {
  // ---- cardiology ----
  ACS: { full: 'acute coronary syndrome', gloss: 'the spectrum of heart attack and unstable angina' },
  STEMI: { full: 'ST-elevation myocardial infarction', gloss: 'a complete coronary occlusion needing immediate reperfusion' },
  NSTEMI: { full: 'non-ST-elevation myocardial infarction' },
  HFrEF: { full: 'heart failure with reduced ejection fraction', gloss: 'ejection fraction 40% or below — a weak, poorly contracting ventricle' },
  HFmrEF: { full: 'heart failure with mildly reduced ejection fraction', gloss: 'ejection fraction 41–49%' },
  HFpEF: { full: 'heart failure with preserved ejection fraction', gloss: 'ejection fraction 50% or above — a stiff ventricle that cannot fill' },
  HFrecEF: { full: 'heart failure with recovered ejection fraction' },
  LVEF: { full: 'left ventricular ejection fraction', gloss: 'the proportion of blood pushed out of the left ventricle with each beat; normal is roughly 50–70%' },
  EF: { full: 'ejection fraction', word: true },
  NYHA: { full: 'New York Heart Association', gloss: 'a symptom scale from I (no limitation) to IV (symptoms at rest)' },
  ARNI: { full: 'angiotensin receptor neprilysin inhibitor', gloss: 'sacubitril combined with valsartan' },
  MRA: { full: 'mineralocorticoid receptor antagonist', gloss: 'spironolactone or eplerenone — they block aldosterone' },
  ACEi: { full: 'angiotensin-converting enzyme inhibitor', gloss: 'the "-prils" — ramipril, lisinopril, enalapril' },
  ARB: { full: 'angiotensin receptor blocker', gloss: 'the "-sartans" — losartan, candesartan, valsartan' },
  BNP: { full: 'B-type natriuretic peptide', gloss: 'a hormone released by a stretched ventricle, used as a blood test for heart failure' },
  ICD: { full: 'implantable cardioverter defibrillator' },
  CRT: { full: 'cardiac resynchronisation therapy' },
  AF: { full: 'atrial fibrillation' },
  WPW: { full: 'Wolff-Parkinson-White syndrome' },
  HOCM: { full: 'hypertrophic obstructive cardiomyopathy' },
  ARVC: { full: 'arrhythmogenic right ventricular cardiomyopathy' },
  VT: { full: 'ventricular tachycardia' },
  VF: { full: 'ventricular fibrillation' },
  PEA: { full: 'pulseless electrical activity' },
  ROSC: { full: 'return of spontaneous circulation' },
  JVP: { full: 'jugular venous pressure' },
  PCI: { full: 'percutaneous coronary intervention', gloss: 'angioplasty and stenting' },

  // ---- respiratory ----
  COPD: { full: 'chronic obstructive pulmonary disease' },
  ARDS: { full: 'acute respiratory distress syndrome', gloss: 'diffuse inflammatory lung injury causing refractory hypoxaemia' },
  PE: { full: 'pulmonary embolism', word: true },
  FEV1: { full: 'forced expiratory volume in one second' },
  FVC: { full: 'forced vital capacity', gloss: 'the total volume forcibly exhaled after a full breath in' },
  PEFR: { full: 'peak expiratory flow rate' },
  DLCO: { full: 'diffusing capacity of the lung for carbon monoxide', gloss: 'the transfer factor — how well gas crosses into the blood' },
  TLCO: { full: 'transfer factor for carbon monoxide' },
  NIV: { full: 'non-invasive ventilation' },
  OSA: { full: 'obstructive sleep apnoea' },
  CFTR: { full: 'cystic fibrosis transmembrane conductance regulator', gloss: 'the chloride channel that is faulty in cystic fibrosis' },

  // ---- renal and electrolyte ----
  AKI: { full: 'acute kidney injury' },
  CKD: { full: 'chronic kidney disease' },
  eGFR: { full: 'estimated glomerular filtration rate', gloss: 'a calculated estimate of kidney filtering capacity' },
  GFR: { full: 'glomerular filtration rate' },
  ADPKD: { full: 'autosomal dominant polycystic kidney disease' },
  HIVAN: { full: 'HIV-associated nephropathy' },
  ESRD: { full: 'end-stage renal disease' },
  RRT: { full: 'renal replacement therapy', gloss: 'dialysis or transplantation' },
  ACR: { full: 'albumin:creatinine ratio' },
  ATN: { full: 'acute tubular necrosis' },
  RTA: { full: 'renal tubular acidosis' },
  NKCC2: { full: 'sodium-potassium-2-chloride co-transporter', gloss: 'the loop of Henle transporter that loop diuretics block' },
  ENaC: { full: 'epithelial sodium channel', gloss: 'the collecting duct channel that amiloride blocks' },
  ROMK: { full: 'renal outer medullary potassium channel' },
  SGLT2: { full: 'sodium-glucose co-transporter 2', gloss: 'the kidney protein that reabsorbs filtered glucose; blocking it makes you pass sugar in the urine' },
  SGLT1: { full: 'sodium-glucose co-transporter 1' },
  GLUT: { full: 'glucose transporter' },
  SERCA: { full: 'sarcoplasmic/endoplasmic reticulum calcium ATPase', gloss: 'the pump that returns calcium into intracellular stores' },

  // ---- endocrine and metabolic ----
  DKA: { full: 'diabetic ketoacidosis' },
  HHS: { full: 'hyperosmolar hyperglycaemic state' },
  HbA1c: { full: 'glycated haemoglobin', gloss: 'average glucose over roughly the past 2–3 months' },
  GLP1: { full: 'glucagon-like peptide 1', gloss: 'a gut hormone that raises insulin only when glucose is high and reduces appetite' },
  'GLP-1': { full: 'glucagon-like peptide 1' },
  DPP4: { full: 'dipeptidyl peptidase 4', gloss: 'the enzyme that destroys GLP-1' },
  'DPP-4': { full: 'dipeptidyl peptidase 4' },
  TZD: { full: 'thiazolidinedione', gloss: 'pioglitazone — improves insulin sensitivity' },
  AGE: { full: 'advanced glycation end product', word: true },
  TSH: { full: 'thyroid-stimulating hormone' },
  TRAb: { full: 'TSH receptor antibody', gloss: 'the autoantibody that causes Graves disease' },
  PTU: { full: 'propylthiouracil' },
  MEN: { full: 'multiple endocrine neoplasia', word: true },
  PCOS: { full: 'polycystic ovary syndrome' },
  IGF1: { full: 'insulin-like growth factor 1' },
  'IGF-1': { full: 'insulin-like growth factor 1' },

  // ---- neurology ----
  MS: { full: 'multiple sclerosis', word: true },
  NMOSD: { full: 'neuromyelitis optica spectrum disorder' },
  MOGAD: { full: 'myelin oligodendrocyte glycoprotein antibody-associated disease' },
  ADEM: { full: 'acute disseminated encephalomyelitis' },
  CIDP: { full: 'chronic inflammatory demyelinating polyradiculoneuropathy' },
  GBS: { full: 'Guillain-Barré syndrome' },
  INO: { full: 'internuclear ophthalmoplegia' },
  RAPD: { full: 'relative afferent pupillary defect', gloss: 'a pupil that dilates when the light swings to it — signals optic nerve disease' },
  CSF: { full: 'cerebrospinal fluid' },
  SAH: { full: 'subarachnoid haemorrhage' },
  ICP: { full: 'intracranial pressure' },
  GCS: { full: 'Glasgow Coma Scale' },
  DIS: { full: 'dissemination in space' },
  DIT: { full: 'dissemination in time' },
  // Case-sensitive: lowercase "mg" is milligrams and matched 14 entries wrongly.
  MG: { full: 'myasthenia gravis', word: true },
  NMS: { full: 'neuroleptic malignant syndrome' },
  ASIA: { full: 'American Spinal Injury Association', gloss: 'its Impairment Scale grades spinal cord injury A to E' },

  // ---- haematology and immunology ----
  FBC: { full: 'full blood count' },
  MCV: { full: 'mean corpuscular volume', gloss: 'average red cell size' },
  RDW: { full: 'red cell distribution width', gloss: 'how variable the red cell sizes are' },
  INR: { full: 'international normalised ratio', gloss: 'a standardised measure of how long blood takes to clot' },
  APTT: { full: 'activated partial thromboplastin time' },
  DIC: { full: 'disseminated intravascular coagulation' },
  ITP: { full: 'immune thrombocytopenic purpura' },
  TTP: { full: 'thrombotic thrombocytopenic purpura' },
  VTE: { full: 'venous thromboembolism' },
  DVT: { full: 'deep vein thrombosis' },
  DOAC: { full: 'direct oral anticoagulant', gloss: 'apixaban, rivaroxaban, edoxaban, dabigatran' },
  HLH: { full: 'haemophagocytic lymphohistiocytosis' },
  CRP: { full: 'C-reactive protein' },
  ESR: { full: 'erythrocyte sedimentation rate' },
  IRIS: { full: 'immune reconstitution inflammatory syndrome', word: true },
  ANCA: { full: 'antineutrophil cytoplasmic antibody' },
  ANA: { full: 'antinuclear antibody' },
  GBM: { full: 'glomerular basement membrane' },

  // ---- gastro and hepatology ----
  LFT: { full: 'liver function test' },
  ALT: { full: 'alanine aminotransferase', gloss: 'a liver-specific enzyme released when hepatocytes are injured' },
  AST: { full: 'aspartate aminotransferase', gloss: 'an enzyme from liver, heart, muscle and red cells' },
  ALP: { full: 'alkaline phosphatase', gloss: 'from bile ducts, bone, placenta and intestine' },
  GGT: { full: 'gamma-glutamyl transferase' },
  ERCP: { full: 'endoscopic retrograde cholangiopancreatography' },
  MRCP: { full: 'magnetic resonance cholangiopancreatography' },
  IBD: { full: 'inflammatory bowel disease' },
  PPI: { full: 'proton pump inhibitor', gloss: 'omeprazole, lansoprazole and similar acid-suppressing drugs' },
  SBP: { full: 'spontaneous bacterial peritonitis' },
  TIPS: { full: 'transjugular intrahepatic portosystemic shunt' },
  GAVE: { full: 'gastric antral vascular ectasia', gloss: '"watermelon stomach"' },

  // ---- pharmacology ----
  NSAID: { full: 'non-steroidal anti-inflammatory drug', gloss: 'ibuprofen, naproxen, diclofenac — as distinct from corticosteroids' },
  COX: { full: 'cyclo-oxygenase', gloss: 'the enzyme making prostaglandins and thromboxane from arachidonic acid' },
  'COX-1': { full: 'cyclo-oxygenase 1', gloss: 'the constant housekeeping form protecting stomach, kidney and platelets' },
  'COX-2': { full: 'cyclo-oxygenase 2', gloss: 'the form induced by inflammation' },
  LOX: { full: 'lipoxygenase', gloss: 'the enzyme making leukotrienes — the asthma arm' },
  SSRI: { full: 'selective serotonin reuptake inhibitor' },
  TCA: { full: 'tricyclic antidepressant' },
  LAST: { full: 'local anaesthetic systemic toxicity', word: true },
  NMB: { full: 'neuromuscular blocker' },

  // ---- infection ----
  TB: { full: 'tuberculosis' },
  ART: { full: 'antiretroviral therapy', word: true },
  PCR: { full: 'polymerase chain reaction', gloss: 'a test that amplifies and detects a specific DNA or RNA sequence' },
  MRSA: { full: 'meticillin-resistant Staphylococcus aureus' },
  UTI: { full: 'urinary tract infection' },
  PJP: { full: 'Pneumocystis jirovecii pneumonia' },

  // ---- obstetrics and paediatrics ----
  PPH: { full: 'postpartum haemorrhage' },
  PROM: { full: 'prelabour rupture of membranes' },
  IUGR: { full: 'intrauterine growth restriction' },
  SGA: { full: 'small for gestational age' },
  NICU: { full: 'neonatal intensive care unit' },
  RDS: { full: 'respiratory distress syndrome' },
  MUAC: { full: 'mid-upper arm circumference' },

  // ---- orthopaedics and trauma ----
  ORIF: { full: 'open reduction and internal fixation' },
  MESS: { full: 'Mangled Extremity Severity Score' },
  TLICS: { full: 'Thoracolumbar Injury Classification and Severity score' },
  SLICS: { full: 'Subaxial Cervical Spine Injury Classification and Severity score' },
  PLC: { full: 'posterior ligamentous complex', gloss: 'the posterior tension band of the spine' },
  ISIS: { full: 'Instability Severity Index Score', gloss: 'a shoulder instability score, not a spinal one' },
  ASIS: { full: 'anterior superior iliac spine', gloss: 'a pelvic bony landmark, not a classification' },
  DCO: { full: 'damage control orthopaedics' },

  // ---- general ----
  ECG: { full: 'electrocardiogram' },
  CT: { full: 'computed tomography' },
  MRI: { full: 'magnetic resonance imaging' },
  ICU: { full: 'intensive care unit' },
  BMI: { full: 'body mass index' },
  CV: { full: 'cardiovascular' },
  ASCVD: { full: 'atherosclerotic cardiovascular disease', gloss: 'established artery disease — previous heart attack, stroke or peripheral arterial disease' },
};

/** Abbreviations that are also ordinary words need a case-sensitive match. */
export const CASE_SENSITIVE = new Set(
  Object.entries(ABBREVIATIONS).filter(([, v]) => v.word).map(([k]) => k),
);
