/** Microbiology and molecular tests, and the vocabulary of causation. */

export default [
  {
    id: 'AS-MICR-0001',
    type: 'test',
    title: 'Gram Stain, Culture and Sensitivity — What Each Step Actually Tells You',
    short: 'Gram stain & culture',
    summary:
      'The Gram stain gives you an answer in minutes and narrows the organism to a handful. Culture takes days but names it and tells you what will kill it. The single most consequential rule is that cultures are taken BEFORE antibiotics.',
    domains: ['microbiology', 'laboratory_medicine', 'infectious_disease'],
    intents: ['investigate', 'interpret'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['gram stain', 'culture', 'sensitivity', 'c&s', 'blood culture', 'msu', 'microbiology'],
    terms: ['gram', 'culture', 'sensitivity', 'blood culture', 'msu', 'antibiogram', 'mic', 'ziehl neelsen', 'india ink', 'contaminant', 'colonisation'],
    confirm_locally: true,
    body: {
      the_gram_stain: {
        what_it_does: 'Separates bacteria by cell wall structure in about fifteen minutes.',
        gram_positive: 'THICK peptidoglycan retains crystal violet — stains PURPLE/BLUE.',
        gram_negative: 'Thin peptidoglycan with an outer membrane loses the stain and takes up the counterstain — stains PINK/RED.',
        why_the_shape_matters: 'Shape plus colour narrows it dramatically. Gram-positive COCCI in CLUSTERS suggests staphylococcus; in CHAINS suggests streptococcus. Gram-negative RODS in a sick patient suggests an Enterobacterales or Pseudomonas and changes empirical therapy immediately.',
        what_it_misses:
          'Organisms with no cell wall (Mycoplasma), intracellular organisms (Chlamydia, Rickettsia), spirochaetes (too thin — Treponema, Leptospira), Mycobacteria (waxy wall needs ZIEHL-NEELSEN or auramine), and fungi (India ink or specific stains). A negative Gram stain does not mean no infection.',
      },
      culture: {
        what_it_adds: 'Species identification and, critically, SENSITIVITY.',
        timing: 'Most bacteria grow in 24–48 hours. Mycobacterium tuberculosis takes WEEKS on solid media — which is why you never wait for a TB culture before starting treatment on strong clinical suspicion.',
        the_cardinal_rule:
          'TAKE CULTURES BEFORE ANTIBIOTICS. A single dose beforehand can render blood cultures sterile while the patient still has the infection, leaving you treating blindly for the rest of the admission. The one exception is meningococcal sepsis and suspected bacterial meningitis, where antibiotics must not be delayed — take what you can and give the antibiotic.',
        blood_cultures_practicalities: [
          'Adequate VOLUME is the single biggest determinant of yield — under-filled bottles miss bacteraemia.',
          'Take from a fresh peripheral site with proper skin antisepsis, not from an existing line unless line infection is the question.',
          'Take at least two SETS from separate sites — this is how a true pathogen is distinguished from a contaminant.',
          'Take them BEFORE the first dose, and before each new antibiotic escalation where feasible.',
        ],
      },
      the_three_words_that_are_constantly_confused: {
        contamination:
          'The organism got in from the skin or the environment during collection, and is not in the patient. Coagulase-negative staphylococci in ONE of two blood culture sets, growing late, in a well patient — almost always contamination. Treating it exposes the patient to antibiotic harm for nothing.',
        colonisation:
          'The organism IS present on the patient but is not causing disease. A urinary catheter always grows something. A chronic leg ulcer always grows something. A tracheostomy always grows something. Treating colonisation drives resistance and Clostridioides difficile without helping the patient.',
        infection: 'The organism is present AND causing disease — there are clinical features and an inflammatory response.',
        the_test: 'Does the patient have clinical evidence of infection at that site? If not, a positive culture is a laboratory result, not a diagnosis. Treat patients, not cultures.',
      },
      asymptomatic_bacteriuria:
        'The commonest place this goes wrong. A positive urine culture in an ASYMPTOMATIC patient generally should NOT be treated — with the specific exceptions of PREGNANCY and before urological procedures that breach the mucosa. Treating asymptomatic bacteriuria in the elderly is a major driver of unnecessary antibiotic use, and confusion in an older person is not by itself a urinary symptom.',
      sensitivity_reporting: {
        what_you_see: 'Organisms reported as sensitive, intermediate or resistant against a panel.',
        selective_reporting: 'Laboratories deliberately report only a subset, to steer prescribing toward narrower agents and preserve broad-spectrum ones. If the antibiotic you want is not listed, that is often intentional — ring the laboratory rather than assuming resistance.',
        de_escalation: 'The point of sensitivities is to NARROW therapy. Starting broad while awaiting results is appropriate; staying broad after results are available is not.',
      },
      special_stains_and_tests: {
        ziehl_neelsen: 'Acid-fast bacilli — mycobacteria. Modest sensitivity; several sputum samples improve yield.',
        india_ink_and_crag: 'Cryptococcus. Cryptococcal ANTIGEN is far more sensitive than India ink and is the test of choice.',
        wet_mount_and_koh: 'Fungal elements in skin scrapings; motile organisms in genital and stool samples.',
      },
    },
    warnings: [
      'Take blood cultures BEFORE the first antibiotic dose — except in suspected bacterial meningitis or meningococcal sepsis, where antibiotics must never be delayed.',
      'Do not treat asymptomatic bacteriuria, except in pregnancy or before urological instrumentation.',
      'A positive culture from a catheter, ulcer or tracheostomy usually reflects colonisation. Treat the patient, not the culture.',
      'A negative Gram stain does not exclude infection — many important organisms do not Gram stain.',
      'Do not wait for TB culture before starting treatment on strong clinical suspicion; it takes weeks.',
    ],
    limitations: ['Yield depends heavily on sample quality, volume, transport time and prior antibiotics. Local resistance patterns govern empirical choice.'],
    cards: [
      { q: 'Gram positive versus negative — what physically differs?', a: 'Gram positives have a thick peptidoglycan wall that retains crystal violet (purple). Gram negatives have a thin wall plus outer membrane and take the counterstain (pink).' },
      { q: 'Name three organism groups the Gram stain misses.', a: 'Mycobacteria (need Ziehl-Neelsen), organisms without cell walls (Mycoplasma), intracellular organisms and spirochaetes.' },
      { q: 'Contamination versus colonisation versus infection?', a: 'Contamination: not in the patient. Colonisation: present but not causing disease. Infection: present and causing disease.' },
      { q: 'When should asymptomatic bacteriuria be treated?', a: 'In pregnancy, and before urological procedures breaching the mucosa. Otherwise not.' },
      { q: 'Which is the single biggest determinant of blood culture yield?', a: 'The volume of blood in the bottle.' },
    ],
    checks: ['Cultures taken before antibiotics (unless meningitis)', 'Two sets from separate sites', 'Bottles adequately filled', 'Clinical features of infection documented at the site', 'Therapy de-escalated when sensitivities return'],
  },

  {
    id: 'AS-MICR-0002',
    type: 'test',
    title: 'PCR and Rapid Molecular Tests — Power and Pitfalls',
    short: 'PCR',
    summary:
      'PCR amplifies a specific piece of genetic material until it is detectable. It is fast and extremely sensitive — and that sensitivity is exactly why a positive result does not always mean live, relevant infection.',
    domains: ['microbiology', 'laboratory_medicine'],
    intents: ['investigate', 'interpret'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['pcr', 'polymerase chain reaction', 'nucleic acid test', 'genexpert', 'rapid molecular test', 'naat'],
    terms: ['pcr', 'nucleic acid', 'genexpert', 'viral load', 'ct value', 'rt-pcr', 'amplification', 'primer', 'naat'],
    confirm_locally: true,
    body: {
      how_it_works:
        'Repeated cycles of heating and cooling with primers specific to the target sequence double the amount of that sequence each cycle. Roughly thirty cycles turn one copy into a billion, so vanishingly small amounts of organism become detectable. Reverse-transcription PCR (RT-PCR) first converts RNA to DNA, which is how RNA viruses are detected.',
      what_it_is_excellent_for: [
        'Organisms that are SLOW or IMPOSSIBLE to culture — Mycobacterium tuberculosis, Mycoplasma, Chlamydia, many viruses.',
        'SPEED — hours instead of days, which changes isolation and treatment decisions on the same shift.',
        'Detecting RESISTANCE GENES directly. GeneXpert MTB/RIF detects TB and rifampicin resistance simultaneously, which in one test tells you both whether to treat and whether standard therapy will work.',
        'QUANTIFICATION — viral load in HIV and hepatitis, used to monitor treatment response.',
        'Sterile-site diagnosis after antibiotics have already been given, where culture would now be negative.',
      ],
      the_pitfalls_that_matter: {
        it_detects_nucleic_acid_not_life:
          'PCR cannot distinguish a live, replicating organism from dead fragments. This is why TB PCR can remain positive for months after successful treatment, and why a positive respiratory viral PCR weeks after recovery does not mean ongoing infectiousness. A positive PCR answers "is the genetic material here?", not "is this causing disease now?".',
        colonisation_again: 'A PCR positive for a potential pathogen in a non-sterile site may reflect carriage. Pneumococcus in the nasopharynx is normal in many children.',
        false_negatives: 'Poor sampling technique, wrong swab or transport medium, sampling too early or too late in the illness, inhibitors in the sample, and target mutation under the primer site all cause false negatives. A negative PCR never overrules a strong clinical picture.',
        contamination: 'Because the method amplifies so powerfully, laboratory contamination produces false positives. Modern workflows control for it, but an isolated unexpected positive should prompt a repeat.',
        it_only_finds_what_you_ask_for: 'PCR is targeted. A respiratory panel will not detect an organism outside the panel. Culture, being untargeted, occasionally finds the unexpected — which is why the two are complementary rather than one replacing the other.',
      },
      how_to_use_a_result: [
        'Ask whether the SITE is sterile. A positive PCR from cerebrospinal fluid or blood is far more meaningful than one from sputum or a superficial swab.',
        'Ask whether the result fits the clinical picture and the timing of the illness.',
        'Ask whether a positive could represent recent past infection rather than current disease.',
        'For TB, a positive GeneXpert with rifampicin resistance must trigger the drug-resistant TB pathway immediately, not standard first-line therapy.',
      ],
      the_practical_summary:
        'Culture proves something is ALIVE. PCR proves its genetic material is PRESENT. Serology proves the immune system has MET it. Three different questions — choose the test that answers the one you are actually asking.',
    },
    warnings: [
      'A positive PCR does not prove live infection. TB PCR can stay positive long after cure, and respiratory viral PCR after recovery.',
      'A negative PCR does not exclude disease. Sampling technique, timing and target mutation all cause false negatives.',
      'A GeneXpert result showing rifampicin resistance must trigger the drug-resistant TB pathway, not standard therapy.',
      'PCR only detects what the panel targets. Consider culture where an unexpected organism is possible.',
    ],
    limitations: ['Panels, availability and turnaround differ by laboratory. Quantitative thresholds are assay-specific.'],
    cards: [
      { q: 'What does PCR actually detect?', a: 'Nucleic acid — genetic material. Not necessarily a live organism.' },
      { q: 'Why can TB PCR stay positive after successful treatment?', a: 'It detects DNA from dead organisms as well as live ones.' },
      { q: 'What does GeneXpert MTB/RIF give you in one test?', a: 'Detection of TB and rifampicin resistance simultaneously.' },
      { q: 'Culture, PCR and serology answer which three questions?', a: 'Culture: is it alive? PCR: is its genetic material present? Serology: has the immune system met it?' },
      { q: 'Name two causes of a false-negative PCR.', a: 'Poor sampling or wrong transport medium, and sampling at the wrong point in the illness. Also target mutation under the primer.' },
    ],
    checks: ['Correct swab and transport medium used', 'Timing in the illness considered', 'Site sterility considered when interpreting', 'Culture sent alongside where organism is uncertain', 'Resistance result acted on'],
  },

  {
    id: 'AS-TERM-0001',
    type: 'definition',
    title: 'Iatrogenic, Idiopathic, Nosocomial and the Surgical Suffixes',
    short: 'Clinical terminology',
    summary:
      'Words that describe HOW a disease arose or WHAT was done about it. They appear constantly in notes and are frequently used loosely — "idiopathic" in particular is often a statement about the investigation rather than about the disease.',
    domains: ['pathology', 'public_health', 'general_surgery'],
    intents: ['identify', 'revise'],
    hazard: 'low',
    urgency: 'routine',
    aka: ['iatrogenic', 'idiopathic', 'nosocomial', 'cryptogenic', 'surgical suffixes', 'ectomy', 'ostomy', 'otomy'],
    terms: ['iatrogenic', 'idiopathic', 'nosocomial', 'cryptogenic', 'essential', 'primary', 'secondary', 'ectomy', 'ostomy', 'otomy', 'oscopy', 'plasty', 'pexy', 'rrhaphy', 'nosocomial infection'],
    body: {
      words_for_cause: {
        iatrogenic:
          'From Greek *iatros* (healer) — harm CAUSED BY MEDICAL CARE. Drug side effects, procedural complications, hospital-acquired infection, radiation exposure, pressure ulcers from immobility. It is not an accusation of negligence; most iatrogenic harm is a recognised risk of necessary treatment. Naming it honestly is what allows it to be measured and reduced.',
        nosocomial:
          'From Greek *nosokomeion* (hospital) — acquired IN A HEALTHCARE SETTING, conventionally after 48 hours of admission. Hospital-acquired pneumonia, catheter-associated urinary infection, line infection, surgical site infection, Clostridioides difficile. Nosocomial organisms are typically MORE RESISTANT, which is why empirical therapy differs from community-acquired disease. The modern term is healthcare-associated infection, which also captures clinics, dialysis units and care homes.',
        idiopathic:
          'From Greek *idios* (one\'s own) + *pathos* — of UNKNOWN cause. The honest reading is "we do not know", and it should shrink as knowledge grows. The dishonest reading is "we did not look". Before writing idiopathic, ask whether the standard causes have actually been excluded.',
        cryptogenic: 'Hidden cause — used similarly, notably cryptogenic stroke, where a cause is presumed to exist but has not been found. It implies a search is warranted, and often continuing.',
        essential: 'A historical term meaning idiopathic — essential hypertension, essential tremor. It does not mean necessary.',
        primary_and_secondary:
          'PRIMARY = arising in the organ itself. SECONDARY = the consequence of something else. Primary hyperparathyroidism is a parathyroid adenoma; secondary hyperparathyroidism is the parathyroid responding appropriately to renal failure or vitamin D deficiency. The distinction changes the treatment completely.',
        congenital_vs_genetic: 'CONGENITAL means present at birth, whatever the cause — it includes infection and drug exposure in utero. GENETIC means caused by a change in the genome. They overlap but are not the same: congenital rubella is congenital but not genetic; Huntington disease is genetic but not congenital.',
        acquired: 'Developing after birth, as opposed to congenital.',
      },
      surgical_suffixes: {
        ectomy: 'REMOVAL. Appendicectomy, cholecystectomy, splenectomy, nephrectomy, hysterectomy, thyroidectomy, mastectomy, tonsillectomy.',
        otomy: 'CUTTING INTO — an incision, without removal. Laparotomy (into the abdomen), thoracotomy (into the chest), craniotomy, tracheotomy.',
        ostomy: 'Creating a permanent or temporary OPENING to the outside or between structures. Colostomy, ileostomy, tracheostomy, gastrostomy.',
        the_three_that_are_confused: 'A tracheOTOMY is the act of cutting into the trachea. A tracheOSTOMY is the resulting opening. -ectomy takes it out, -otomy cuts in, -ostomy makes a mouth.',
        oscopy: 'LOOKING INTO with an instrument. Endoscopy, colonoscopy, laparoscopy, bronchoscopy, cystoscopy, arthroscopy.',
        plasty: 'RESHAPING or repair. Angioplasty, pyeloplasty, arthroplasty (joint replacement).',
        pexy: 'FIXING in position. Orchidopexy for undescended or torted testis, rectopexy, nephropexy.',
        rrhaphy: 'SUTURING or repair. Herniorrhaphy, colporrhaphy.',
        desis: 'FUSION. Arthrodesis, spondylodesis, pleurodesis.',
        stomy_versus_tomy_memory: '-ostomy has an O for Opening. -otomy is just a cut.',
      },
      splenectomy_as_a_worked_example: {
        why_it_is_singled_out: 'Because it carries a lifelong, preventable, lethal consequence that is routinely forgotten.',
        indications: 'Trauma, hypersplenism, hereditary spherocytosis, immune thrombocytopenia refractory to treatment, some lymphomas.',
        the_consequence:
          'The spleen clears ENCAPSULATED organisms. Without it the patient is at lifelong risk of OVERWHELMING POST-SPLENECTOMY INFECTION — a fulminant sepsis that can kill a previously well person within hours.',
        the_organisms: 'Streptococcus pneumoniae above all, then Haemophilus influenzae type b and Neisseria meningitidis. Also severe malaria and Capnocytophaga after dog bites.',
        what_every_splenectomised_patient_needs: [
          'VACCINATION against pneumococcus, Hib and meningococcus — ideally before elective surgery, or after recovery in emergency cases.',
          'Antibiotic PROPHYLAXIS per local protocol.',
          'A patient-held card or alert and clear counselling that any fever needs urgent medical assessment.',
          'Advice on malaria prophylaxis and animal bites.',
        ],
        also_applies_to: 'Functional hyposplenism — sickle cell disease (autosplenectomy), coeliac disease, and after splenic irradiation. The spleen may be present and still not working.',
      },
    },
    warnings: [
      'Any splenectomised or hyposplenic patient with a fever needs urgent assessment — overwhelming post-splenectomy infection kills within hours.',
      'Confirm vaccination and prophylaxis status in every asplenic patient. It is frequently omitted and is the whole preventive strategy.',
      'Do not write "idiopathic" before the standard causes have been excluded. It records the limits of the workup, not a diagnosis.',
      'Nosocomial infections carry different resistance patterns — empirical therapy must reflect that, per local guidance.',
    ],
    limitations: ['Usage varies between specialties and countries; some terms (essential, cryptogenic) are historical survivals.'],
    cards: [
      { q: 'Iatrogenic versus nosocomial?', a: 'Iatrogenic is harm caused by medical care. Nosocomial is acquired in a healthcare setting, conventionally after 48 hours.' },
      { q: '-ectomy, -otomy, -ostomy?', a: 'Removal, cutting into, and creating an opening. -Ostomy has an O for Opening.' },
      { q: 'Primary versus secondary hyperparathyroidism?', a: 'Primary is a parathyroid adenoma. Secondary is an appropriate response to renal failure or vitamin D deficiency.' },
      { q: 'Which organisms threaten the splenectomised patient?', a: 'Encapsulated ones — pneumococcus above all, then Hib and meningococcus. Also severe malaria and Capnocytophaga.' },
      { q: 'Congenital versus genetic?', a: 'Congenital means present at birth from any cause. Genetic means caused by a genomic change. They overlap but are not the same.' },
    ],
    checks: ['Asplenia vaccination status confirmed', 'Antibiotic prophylaxis documented', 'Patient alert card issued', 'Standard causes excluded before recording "idiopathic"'],
  },
];
