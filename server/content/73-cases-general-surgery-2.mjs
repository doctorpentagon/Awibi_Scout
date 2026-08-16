/**
 * CASE SCENARIOS — Ascending cholangitis and sigmoid volvulus.
 *
 * Batch 4, part 2. Sigmoid volvulus is included deliberately: it is a leading
 * cause of large bowel obstruction across much of Africa and Asia, and is
 * under-represented in textbooks written elsewhere.
 */

export default [
  {
    id: 'AS-CASE-0033',
    type: 'case',
    specialty: 'Surgery — General surgery',
    teaching_case: true,
    title: 'CASE: Fever, Jaundice and Right Upper Quadrant Pain — Then Confusion',
    short: 'Case: acute ascending cholangitis',
    summary:
      'A 71-year-old with Charcot triad progressing to Reynolds pentad. Teaches why this is an obstructed infected system rather than an infection you can treat with antibiotics, and why DRAINAGE within hours is the treatment.',
    domains: ['general_surgery', 'gastroenterology', 'emergency_medicine', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case cholangitis', 'ascending cholangitis case', 'charcot triad case',
      'reynolds pentad', 'ercp case', 'biliary sepsis', 'obstructive jaundice sepsis',
      'tokyo guidelines', 'biliary drainage',
    ],
    terms: [
      'case', 'ascending cholangitis', 'charcot triad', 'reynolds pentad', 'ercp',
      'biliary drainage', 'sphincterotomy', 'common bile duct stone', 'choledocholithiasis',
      'obstructive jaundice', 'tokyo guidelines', 'percutaneous transhepatic cholangiography',
      'mrcp', 'cholecystectomy', 'gallstone', 'murphy sign',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '71-year-old woman with 2 days of right upper quadrant pain, fever with rigors and yellow eyes, who has become confused and hypotensive in the last 3 hours.',

      section_1_clerking: {
        history:
          'Two days of constant right upper quadrant pain radiating to the back and right shoulder blade. Fever with SHAKING RIGORS. Her daughter noticed her eyes turned yellow yesterday. Her urine has gone DARK and her stools PALE. In the last three hours she has become confused and drowsy. She has had episodes of similar but milder right upper quadrant pain after fatty meals for two years.',
        the_two_named_patterns_and_what_they_mean: {
          charcot_triad: 'FEVER (with rigors) · JAUNDICE · RIGHT UPPER QUADRANT PAIN. THE TRIAD OF ACUTE CHOLANGITIS. It is SPECIFIC but only moderately SENSITIVE — present in perhaps half to two thirds of cases — SO ITS ABSENCE DOES NOT EXCLUDE CHOLANGITIS, particularly in the elderly, where fever and pain may both be muted.',
          reynolds_pentad: 'CHARCOT TRIAD PLUS HYPOTENSION AND CONFUSION. IT INDICATES SUPPURATIVE CHOLANGITIS WITH SEPTIC SHOCK AND CARRIES HIGH MORTALITY. SHE HAS ALL FIVE. THE PENTAD IS NOT AN EXAM CURIOSITY — IT IS THE SIGNAL THAT THE PATIENT NEEDS DRAINAGE WITHIN HOURS, NOT TOMORROW.',
        },
        the_dark_urine_and_pale_stool_which_localise_the_problem: {
          the_explanation:
            'CONJUGATED bilirubin is water-soluble. When the bile duct is obstructed, conjugated bilirubin cannot reach the gut, so it refluxes into the blood and is excreted by the KIDNEYS — giving DARK URINE. Meanwhile no bilirubin reaches the intestine to be converted to stercobilin, so the stool loses its colour — PALE STOOL. There is also no bile salt delivery, so fat is not emulsified — hence STEATORRHOEA and, over time, fat-soluble vitamin deficiency.',
          why_it_matters: 'DARK URINE PLUS PALE STOOL MEANS OBSTRUCTIVE (POST-HEPATIC) JAUNDICE. In HAEMOLYTIC jaundice the bilirubin is UNCONJUGATED, fat-soluble, bound to albumin and NOT excreted in urine — so the urine is NORMAL and the stool is normal or dark. Two questions at the bedside separate the categories before any test.',
        },
        the_associated_symptom_to_ask_about: 'PRURITUS — itching from retained bile salts. It is common in obstructive jaundice, often severe, and it is frequently not asked about and therefore not treated.',
        past_medical_history: 'Type 2 diabetes. Hypertension. Known gallstones on an ultrasound two years ago, for which she declined surgery.',
        vitals: 'BP 84/46 mmHg. Pulse 124. Respiratory rate 28. Temperature 38.9. Saturation 94%. GCS 13. Glucose 14.2. Lactate 4.8 mmol/L. Urine output minimal.',
        examination:
          'Jaundiced sclerae and skin. Confused. Cool peripheries with prolonged capillary refill. Tender right upper quadrant with guarding. MURPHY SIGN — ask the patient to breathe out, place your hand at the right costal margin, then ask them to breathe in; the descending inflamed gallbladder meets your hand and the patient CATCHES THEIR BREATH IN PAIN. It is a sign of CHOLECYSTITIS rather than cholangitis, and the two coexist. Scratch marks from pruritus. No stigmata of chronic liver disease. NO palpable mass — but see Courvoisier below.',
        courvoisier_law_and_its_honest_status: {
          the_statement: 'In the presence of PAINLESS jaundice, a PALPABLE, NON-TENDER GALLBLADDER is unlikely to be due to gallstones — and therefore suggests MALIGNANT obstruction, classically pancreatic head carcinoma or cholangiocarcinoma.',
          the_reasoning: 'Chronic gallstone disease causes a FIBROTIC, SHRUNKEN gallbladder that cannot distend. A previously normal gallbladder obstructed by tumour distends freely and becomes palpable.',
          the_caveat: 'IT IS A USEFUL RULE OF THUMB, NOT A LAW. Exceptions exist in both directions, including a stone impacted in the cystic duct with a separate distal obstruction. Use it to raise suspicion of malignancy, never to exclude stones.',
        },
      },

      section_2_mechanism: {
        the_two_ingredients: 'CHOLANGITIS REQUIRES BOTH BILIARY OBSTRUCTION AND BACTERIAL COLONISATION OF BILE. Neither alone produces it. Bile is normally sterile and flows continuously, flushing the tree.',
        the_sequence: [
          '1. Obstruction — most commonly a STONE IN THE COMMON BILE DUCT (choledocholithiasis). Also benign or malignant STRICTURE, tumour of the pancreatic head, ampulla or bile duct, parasitic infestation, and blocked biliary stents.',
          '2. Bile stasis behind the obstruction allows bacterial proliferation — typically gut organisms ascending from the duodenum: ESCHERICHIA COLI, KLEBSIELLA, ENTEROCOCCUS, ENTEROBACTER and anaerobes.',
          '3. INTRABILIARY PRESSURE RISES BEHIND THE OBSTRUCTION.',
          '4. ABOVE ROUGHLY 20 cmH2O, THE TIGHT JUNCTIONS BETWEEN HEPATOCYTES AND BILE CANALICULI FAIL, AND BACTERIA AND ENDOTOXIN ARE FORCED DIRECTLY INTO THE HEPATIC SINUSOIDS AND HENCE INTO THE BLOODSTREAM — CHOLANGIOVENOUS REFLUX.',
        ],
        the_single_most_important_consequence: {
          the_statement:
            'THIS IS WHY ANTIBIOTICS ALONE ARE NOT ENOUGH. As long as the pressure remains high, bacteria continue to be pumped into the blood, and antibiotics penetrate obstructed bile poorly. THE DRIVER OF THE SEPSIS IS THE PRESSURE. RELIEVING THE OBSTRUCTION IS THE TREATMENT; THE ANTIBIOTIC SUPPORTS IT.',
          the_analogy: 'It is the same principle as an obstructed infected kidney or an undrained abscess. YOU CANNOT TREAT AN OBSTRUCTED INFECTED SYSTEM WITHOUT DRAINING IT — and recognising cholangitis as belonging to that category, rather than to the category of "infections treated with antibiotics", is the conceptual step that changes management.',
        },
        the_associated_risk: 'GALLSTONE PANCREATITIS may coexist if a stone obstructs the pancreatic duct at the ampulla — always check amylase or lipase.',
      },

      section_3_differentials: {
        one_acute_cholangitis: 'WORKING DIAGNOSIS. Supporting: Charcot triad progressing to Reynolds pentad, known gallstones, obstructive pattern of jaundice.',
        two_acute_cholecystitis: 'Right upper quadrant pain, fever and positive Murphy sign, BUT USUALLY WITHOUT SIGNIFICANT JAUNDICE, because the cystic duct rather than the common bile duct is obstructed. Mild jaundice can occur with MIRIZZI SYNDROME, where a stone in the cystic duct or Hartmann pouch compresses the common hepatic duct externally. The two frequently coexist.',
        three_biliary_colic: 'Pain after fatty meals lasting a few hours, WITHOUT fever, jaundice or raised inflammatory markers. Her two-year history fits this, and it is the warning that preceded today.',
        four_acute_pancreatitis: 'Epigastric pain radiating to the back with raised amylase or lipase. GALLSTONE PANCREATITIS AND CHOLANGITIS CAN OCCUR TOGETHER when a stone impacts at the ampulla — the presence of one does not exclude the other.',
        five_liver_abscess: 'Fever, right upper quadrant pain and raised inflammatory markers, but usually a more subacute course. AMOEBIC LIVER ABSCESS must be considered in the appropriate setting and is treated with metronidazole rather than by drainage in most cases. Ultrasound and CT distinguish them.',
        six_malignant_obstruction: 'Pancreatic head carcinoma, cholangiocarcinoma or ampullary tumour, presenting with PROGRESSIVE PAINLESS jaundice and weight loss — but they can become infected and present exactly as cholangitis, particularly after instrumentation.',
        seven_viral_or_drug_hepatitis: 'Jaundice with markedly raised transaminases and a HEPATITIC rather than cholestatic pattern, without the biliary pain.',
        eight_right_lower_lobe_pneumonia_and_sepsis_of_other_origin: 'Can cause right upper quadrant pain and a degree of jaundice. Examine the chest and consider the whole patient.',
      },

      section_4_investigations: {
        the_pattern_on_liver_function_tests: {
          the_cholestatic_pattern: 'ALKALINE PHOSPHATASE AND GAMMA-GT RAISED DISPROPORTIONATELY TO THE TRANSAMINASES, with a raised CONJUGATED bilirubin. That combination indicates OBSTRUCTION.',
          the_hepatitic_pattern: 'ALT and AST raised disproportionately — indicating hepatocyte injury from viral, drug or ischaemic causes.',
          the_useful_nuance: 'A brief but MARKED SPIKE IN TRANSAMINASES can occur at the moment a stone passes or impacts, which can be mistaken for hepatitis. Interpret the trend and the whole picture, not one result.',
          the_alkaline_phosphatase_source_check: 'Alkaline phosphatase also comes from BONE and PLACENTA. A raised GAMMA-GT alongside confirms the biliary origin.',
        },
        bloods: 'FULL BLOOD COUNT — raised white cells with neutrophilia · CRP · UREA AND ELECTROLYTES for acute kidney injury, which is common in biliary sepsis · LIVER FUNCTION as above · AMYLASE OR LIPASE for coexisting pancreatitis · CLOTTING — the PROTHROMBIN TIME MAY BE PROLONGED because obstruction prevents bile salt delivery and therefore absorption of FAT-SOLUBLE VITAMIN K, and this matters before any procedure · GLUCOSE · LACTATE · BLOOD CULTURES BEFORE ANTIBIOTICS, which are positive in a high proportion and guide definitive therapy · GROUP AND SAVE.',
        imaging: {
          ultrasound_first: 'FIRST-LINE, immediate, no radiation. Looks for GALLSTONES, a DILATED COMMON BILE DUCT (normally under about 6 mm, rising slightly with age and after cholecystectomy), intrahepatic duct dilatation, and gallbladder wall thickening. IMPORTANT LIMITATION: ULTRASOUND FREQUENTLY FAILS TO SEE THE STONE IN THE DISTAL COMMON BILE DUCT because of overlying bowel gas — SO A DILATED DUCT WITHOUT A VISIBLE STONE IS STILL HIGHLY SUGGESTIVE, and a normal-calibre duct does not exclude a stone, particularly early.',
          mrcp: 'MAGNETIC RESONANCE CHOLANGIOPANCREATOGRAPHY — highly sensitive for duct stones, non-invasive, and the investigation of choice where the diagnosis is uncertain and the patient is stable. IT IS DIAGNOSTIC ONLY — it cannot treat. DO NOT DELAY DRAINAGE IN A SEPTIC PATIENT TO OBTAIN AN MRCP.',
          ct: 'Useful for complications, for malignancy, and where ultrasound is inconclusive. Less sensitive than MRCP for small stones.',
          endoscopic_ultrasound: 'Very sensitive for small distal duct stones where MRCP is equivocal.',
        },
        severity_grading: 'The TOKYO GUIDELINES grade cholangitis as MILD (responds to initial treatment), MODERATE (does not respond, or has specific adverse features) and SEVERE (organ dysfunction — cardiovascular, neurological, respiratory, renal, hepatic or haematological). SEVERE DISEASE MANDATES URGENT DRAINAGE AND CRITICAL CARE. SHE IS SEVERE, WITH CARDIOVASCULAR AND NEUROLOGICAL DYSFUNCTION.',
      },

      section_5_management: {
        the_three_simultaneous_priorities: 'RESUSCITATE · ANTIBIOTICS · DRAIN. THE THIRD IS THE DEFINITIVE TREATMENT AND IS THE ONE MOST OFTEN DELAYED WHILE THE FIRST TWO ARE ATTENDED TO.',
        a_resuscitation: 'ABCDE. Oxygen. Two large-bore cannulae. BALANCED CRYSTALLOID boluses with reassessment. Blood cultures. CATHETERISE with hourly urine output. Correct glucose. If hypotension persists after adequate fluid, VASOPRESSORS and CRITICAL CARE — she is in septic shock and will not tolerate a procedure without support. The SEPSIS SIX within the hour.',
        b_antibiotics: 'BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS covering Gram-negatives, enterococci and anaerobes — for example piperacillin with tazobactam, or a cephalosporin with metronidazole, per local policy. Give them after cultures, but do not let culture-taking delay them. NARROW LATER guided by blood and bile cultures — BILE OBTAINED AT DRAINAGE SHOULD BE SENT FOR CULTURE, and it frequently yields the organism when blood cultures do not.',
        c_correct_the_coagulopathy_before_the_procedure: 'GIVE INTRAVENOUS VITAMIN K if the prothrombin time is prolonged, because obstruction impairs vitamin K absorption. In urgent situations, or with significant coagulopathy, prothrombin complex concentrate or plasma may be needed. THIS IS EASILY OVERLOOKED AND MATTERS, because ERCP with sphincterotomy causes bleeding.',
        d_biliary_drainage_which_is_the_treatment: {
          the_timing: 'URGENT — WITHIN 24 HOURS, AND WITHIN HOURS IN SEVERE DISEASE OR SEPTIC SHOCK. Delay to drainage is strongly associated with mortality. In a patient with Reynolds pentad, drainage is as urgent as an operation for peritonitis.',
          ercp_the_first_choice: {
            what_it_is: 'ENDOSCOPIC RETROGRADE CHOLANGIOPANCREATOGRAPHY. A side-viewing endoscope reaches the duodenum, the ampulla is cannulated, and the biliary tree is opacified. SPHINCTEROTOMY divides the sphincter of Oddi, stones are extracted with a balloon or basket, and a STENT is placed if needed to guarantee drainage.',
            why_it_is_preferred: 'It is both diagnostic and THERAPEUTIC in one procedure, and it is less invasive than surgery.',
            in_the_very_unstable_patient: 'A SHORT PROCEDURE WITH SIMPLE STENT INSERTION OR NASOBILIARY DRAIN PLACEMENT TO ACHIEVE DECOMPRESSION, DEFERRING STONE CLEARANCE, IS OFTEN THE RIGHT CHOICE. THE AIM IS TO RELIEVE PRESSURE, NOT TO ACHIEVE A PERFECT RESULT IN ONE SITTING.',
            complications_to_know: 'POST-ERCP PANCREATITIS, the commonest — rectal NSAIDs such as diclofenac or indometacin at the time of the procedure reduce its incidence and are given routinely unless contraindicated. Also bleeding after sphincterotomy, perforation, cholangitis and sedation-related events.',
          },
          percutaneous_transhepatic_biliary_drainage: 'PTC — a radiologically placed drain through the liver into a dilated duct. USED WHEN ERCP FAILS, IS NOT AVAILABLE, OR IS NOT POSSIBLE — for example altered anatomy after gastric surgery, or a hilar obstruction. It is an essential alternative and should be considered early rather than after repeated failed attempts.',
          surgical_drainage: 'Open common bile duct exploration is now rarely first-line but remains necessary where endoscopic and percutaneous options are unavailable — which is the reality in many settings, and it is a legitimate and life-saving operation.',
        },
        e_the_definitive_treatment_of_the_gallbladder: {
          the_rule: 'RELIEVING THE DUCT DOES NOT TREAT THE GALLBLADDER. IF GALLSTONES ARE THE CAUSE, CHOLECYSTECTOMY IS NEEDED, OR SHE WILL RETURN.',
          the_timing: 'Usually performed during the SAME ADMISSION or shortly afterwards, once sepsis has resolved. Delaying it for months carries a substantial risk of recurrent cholangitis, cholecystitis or pancreatitis in the interval — and "we will do it as an outpatient" is how patients come back sicker. In a frail patient unfit for surgery, sphincterotomy alone may be accepted as definitive management.',
        },
        f_the_things_that_get_missed_afterwards: 'PRURITUS — treat it; it is miserable and often ignored. NUTRITION and fat-soluble vitamin status (A, D, E, K) after prolonged obstruction. DIABETES control, which is disrupted by sepsis. If obstruction proves MALIGNANT, arrange staging and multidisciplinary discussion promptly — the drainage is palliative, not the plan. Ensure the histology or cytology from any brushings is followed up.',
      },

      section_6_teaching_points: {
        bonus_1_it_is_an_obstructed_infected_system:
          'Above roughly 20 cmH2O of biliary pressure, the junctions between hepatocytes and canaliculi fail and bacteria are pumped directly into the bloodstream — cholangiovenous reflux. Antibiotics cannot fix that, and they penetrate obstructed bile poorly. This belongs to the same category as an obstructed infected kidney or an undrained abscess: DRAINAGE IS THE TREATMENT.',
        bonus_2_charcot_is_specific_but_not_sensitive:
          'The triad is present in only about half to two thirds of cases, and much less often in the elderly, where fever and pain are muted. Its absence excludes nothing. Reynolds pentad — adding hypotension and confusion — means suppurative cholangitis and mandates drainage within hours.',
        bonus_3_dark_urine_and_pale_stool_localise_the_jaundice:
          'Conjugated bilirubin is water-soluble and is excreted by the kidney when it cannot reach the gut, giving dark urine; no bilirubin reaching the intestine gives pale stool. In haemolysis the bilirubin is unconjugated, albumin-bound and NOT excreted in urine. Two bedside questions separate the categories.',
        bonus_4_ultrasound_often_misses_the_duct_stone:
          'Bowel gas obscures the distal common bile duct. A DILATED DUCT WITHOUT A VISIBLE STONE is still highly suggestive, and a normal-calibre duct does not exclude one. MRCP is far more sensitive — but it is diagnostic only and must not delay drainage in a septic patient.',
        bonus_5_check_the_clotting_before_the_procedure:
          'Obstruction prevents bile salt delivery, so fat-soluble VITAMIN K is not absorbed and the prothrombin time is prolonged. ERCP with sphincterotomy causes bleeding. Giving vitamin K is easily overlooked and easily done.',
        bonus_6_decompress_rather_than_perfect:
          'In an unstable patient, a short ERCP placing a stent or nasobiliary drain, deferring stone clearance, is often the correct choice. The aim is to relieve the pressure driving the sepsis, not to complete the definitive repair in one sitting.',
        bonus_7_rectal_nsaids_reduce_post_ercp_pancreatitis:
          'Rectal diclofenac or indometacin at the time of the procedure reduces the commonest complication of ERCP and is given routinely unless contraindicated.',
        trap_1: 'Courvoisier is a rule of thumb, not a law — use a palpable non-tender gallbladder in painless jaundice to raise suspicion of malignancy, never to exclude stones.',
        trap_2: 'Cholangitis and gallstone pancreatitis coexist — always check amylase or lipase.',
        trap_3: 'Send BILE for culture at drainage — it often yields the organism when blood cultures do not.',
        trap_4: 'Consider percutaneous drainage EARLY when ERCP fails or is not feasible, rather than after repeated attempts.',
        trap_5: 'Arrange cholecystectomy during the same admission or shortly after — deferring it for months brings the patient back sicker.',
        trap_6: 'Alkaline phosphatase also comes from bone and placenta — a raised gamma-GT confirms the biliary source.',
        one_line_summary: 'Severe ascending cholangitis with Reynolds pentad. Resuscitate, cultures then broad-spectrum antibiotics, correct the vitamin K-dependent coagulopathy, and get her drained within hours — because the pressure, not the bacteria, is what is killing her.',
      },
    },
    warnings: [
      'CHOLANGITIS IS AN OBSTRUCTED INFECTED SYSTEM — antibiotics alone are NOT enough. DRAINAGE IS THE TREATMENT.',
      'REYNOLDS PENTAD means suppurative cholangitis and septic shock — drainage within HOURS, not tomorrow.',
      'CHARCOT TRIAD is present in only about half to two thirds of cases — its absence excludes nothing, especially in the elderly.',
      'ULTRASOUND OFTEN MISSES THE DISTAL DUCT STONE because of bowel gas — a dilated duct without a visible stone is still highly suggestive.',
      'MRCP IS DIAGNOSTIC ONLY — do not delay drainage in a septic patient to obtain one.',
      'CHECK AND CORRECT THE CLOTTING before ERCP — obstruction prevents vitamin K absorption and sphincterotomy bleeds.',
      'In an unstable patient, DECOMPRESS with a stent or nasobiliary drain rather than attempting full stone clearance.',
      'Give RECTAL NSAIDs at ERCP to reduce post-ERCP pancreatitis unless contraindicated.',
      'Consider PERCUTANEOUS DRAINAGE EARLY when ERCP fails or is not feasible.',
      'SEND BILE FOR CULTURE at drainage — it often yields the organism when blood cultures do not.',
      'Always check AMYLASE OR LIPASE — gallstone pancreatitis coexists.',
      'ARRANGE CHOLECYSTECTOMY during the same admission or shortly after — deferring it brings the patient back sicker.',
      'Courvoisier is a rule of thumb, NOT a law — never use it to exclude stones.',
      'Alkaline phosphatase also comes from bone and placenta — check gamma-GT to confirm the biliary source.',
      'Antibiotic choices here are teaching examples. Follow local microbiology policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Drainage modality depends on local availability of ERCP and interventional radiology.',
      'Where endoscopic and percutaneous options are unavailable, open surgical drainage remains a legitimate life-saving alternative.',
    ],
    cards: [
      { q: 'What is Charcot triad and how sensitive is it?', a: 'Fever, jaundice and right upper quadrant pain — present in only about half to two thirds of cases.' },
      { q: 'What is Reynolds pentad?', a: 'Charcot triad plus hypotension and confusion — suppurative cholangitis with septic shock.' },
      { q: 'Why are antibiotics alone insufficient?', a: 'High biliary pressure forces bacteria into the bloodstream via cholangiovenous reflux, and antibiotics penetrate obstructed bile poorly.' },
      { q: 'Why is the urine dark and the stool pale?', a: 'Conjugated bilirubin is water-soluble and excreted renally when it cannot reach the gut; no bilirubin reaches the intestine to colour the stool.' },
      { q: 'What is the limitation of ultrasound here?', a: 'Bowel gas obscures the distal common bile duct — a dilated duct without a visible stone is still highly suggestive.' },
      { q: 'Why check clotting before ERCP?', a: 'Obstruction prevents bile salt delivery so fat-soluble vitamin K is not absorbed; sphincterotomy causes bleeding.' },
      { q: 'What should be done in an unstable patient at ERCP?', a: 'Decompress with a stent or nasobiliary drain and defer stone clearance.' },
      { q: 'How is post-ERCP pancreatitis reduced?', a: 'Rectal diclofenac or indometacin at the time of the procedure.' },
      { q: 'What is Courvoisier law and its caveat?', a: 'A palpable non-tender gallbladder in painless jaundice suggests malignancy — a rule of thumb, never used to exclude stones.' },
      { q: 'What is Mirizzi syndrome?', a: 'A stone in the cystic duct or Hartmann pouch compressing the common hepatic duct externally, causing jaundice.' },
      { q: 'What distinguishes cholestatic from hepatitic liver function tests?', a: 'Cholestatic: ALP and gamma-GT raised disproportionately. Hepatitic: ALT and AST raised disproportionately.' },
      { q: 'What must follow duct clearance?', a: 'Cholecystectomy during the same admission or shortly after, or the patient returns.' },
    ],
    checks: [
      'Charcot and Reynolds features documented',
      'Urine and stool colour asked about',
      'Sepsis six completed within the hour',
      'Blood cultures taken before antibiotics',
      'Broad-spectrum antibiotics given',
      'Amylase or lipase checked',
      'Clotting checked and vitamin K given if prolonged',
      'Ultrasound performed urgently',
      'MRCP not allowed to delay drainage in a septic patient',
      'Tokyo severity grade assigned',
      'Urgent biliary drainage arranged within hours for severe disease',
      'Percutaneous drainage considered if ERCP fails or is unavailable',
      'Bile sent for culture at drainage',
      'Rectal NSAID given at ERCP',
      'Cholecystectomy planned for the same admission or shortly after',
    ],
    related: ['charcot_triad_and_the_biliary_emergencies'],
  },

  {
    id: 'AS-CASE-0034',
    type: 'case',
    specialty: 'Surgery — General surgery',
    teaching_case: true,
    title: 'CASE: Massive Abdominal Distension and No Flatus for Three Days',
    short: 'Case: sigmoid volvulus and large bowel obstruction',
    summary:
      'A 68-year-old with gross distension, absolute constipation and a coffee-bean sign. Teaches the four cardinal features of obstruction, why a competent ileocaecal valve is dangerous, why the caecum perforates rather than the sigmoid, and when decompression must be abandoned for theatre.',
    domains: ['general_surgery', 'emergency_medicine', 'gastroenterology'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case sigmoid volvulus', 'large bowel obstruction case', 'coffee bean sign',
      'closed loop obstruction', 'ileocaecal valve competent', 'flatus tube',
      'caecal perforation', 'laplace law bowel', 'absolute constipation',
    ],
    terms: [
      'case', 'sigmoid volvulus', 'large bowel obstruction', 'closed loop obstruction',
      'coffee bean sign', 'ileocaecal valve', 'caecal diameter', 'law of laplace',
      'flatus tube', 'sigmoidoscopic decompression', 'sigmoid colectomy', 'hartmann procedure',
      'pseudo-obstruction', 'ogilvie syndrome', 'neostigmine', 'absolute constipation',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '68-year-old man with 3 days of increasing abdominal distension, colicky pain, no flatus and no bowel movement, whose abdomen is now grossly distended and tympanitic. His abdominal radiograph shows a huge loop arising from the pelvis.',

      section_1_clerking: {
        the_four_cardinal_features_of_intestinal_obstruction: {
          the_list: 'ABDOMINAL PAIN (colicky) · VOMITING · ABDOMINAL DISTENSION · ABSOLUTE CONSTIPATION (no faeces AND no flatus).',
          how_the_pattern_localises_the_level:
            'IN HIGH (PROXIMAL SMALL BOWEL) OBSTRUCTION, VOMITING IS EARLY AND PROFUSE, and distension is minimal. IN LOW (LARGE BOWEL) OBSTRUCTION, DISTENSION IS MARKED AND EARLY, and vomiting is LATE and may be faeculent. ABSOLUTE CONSTIPATION APPEARS EARLY IN LARGE BOWEL OBSTRUCTION AND LATE IN SMALL BOWEL OBSTRUCTION, because the distal bowel below a small bowel obstruction still has content to pass. HIS PATTERN — MARKED DISTENSION, EARLY ABSOLUTE CONSTIPATION, LATE VOMITING — IS LARGE BOWEL OBSTRUCTION.',
          the_term_absolute_constipation: 'It means NO FAECES AND NO FLATUS. Passing flatus means the lumen is not completely obstructed. ASK ABOUT FLATUS SPECIFICALLY — patients report "constipation" meaning they have not opened their bowels, which is not the same thing.',
        },
        history:
          'Three days of gradually increasing distension with intermittent colicky central pain. No flatus and no stool for three days. He vomited for the first time this morning. He has a long history of CHRONIC CONSTIPATION and has had two similar but milder episodes in the past year that settled spontaneously. He lives in a residential home. NO weight loss, no rectal bleeding, no change in stool calibre before this.',
        the_history_that_points_at_volvulus: 'CHRONIC CONSTIPATION with a redundant, elongated sigmoid colon · INSTITUTIONALISED OR IMMOBILE patients · NEUROLOGICAL OR PSYCHIATRIC disease · high-fibre diet in some populations · pregnancy · and PREVIOUS SELF-RESOLVING EPISODES, which are highly suggestive because volvulus can twist and untwist. IN MUCH OF AFRICA AND ASIA, SIGMOID VOLVULUS IS A LEADING CAUSE OF LARGE BOWEL OBSTRUCTION AND AFFECTS YOUNGER PATIENTS THAN IN EUROPE — the textbook picture of an elderly institutionalised patient is not universal.',
        the_history_that_would_point_at_cancer_instead: 'PROGRESSIVE change in bowel habit over weeks to months · rectal bleeding · weight loss · narrowing stool calibre · iron deficiency anaemia · family history. COLORECTAL CARCINOMA IS THE COMMONEST CAUSE OF LARGE BOWEL OBSTRUCTION IN MOST HIGH-INCOME SETTINGS and must always be considered.',
        vitals: 'BP 108/64 mmHg. Pulse 106. Respiratory rate 22. Temperature 37.4. Saturation 95%. Lactate 2.4 mmol/L. Urine output reduced.',
        examination:
          'GROSSLY DISTENDED, TYMPANITIC abdomen — drum-like on percussion because it is full of gas. Generally tender but NOT rigid, with no rebound at present. HIGH-PITCHED "TINKLING" BOWEL SOUNDS early in obstruction, becoming ABSENT as the bowel tires and ileus supervenes — so absent sounds in obstruction is a LATE and WORSE sign, not a normal one. EXAMINE THE HERNIAL ORIFICES CAREFULLY — an obstructed hernia is a common and easily missed cause and requires only that you look. RECTAL EXAMINATION: EMPTY, BALLOONED RECTUM, which is characteristic of a more proximal obstruction; also feel for a rectal tumour and look for blood on the glove.',
        the_signs_that_would_change_everything: 'LOCALISED TENDERNESS, GUARDING, REBOUND OR RIGIDITY · FEVER · TACHYCARDIA OUT OF PROPORTION · RISING LACTATE · PERSISTENT PAIN THAT BECOMES CONSTANT RATHER THAN COLICKY. ANY OF THESE SUGGESTS ISCHAEMIA OR PERFORATION AND MEANS THEATRE, NOT FURTHER OBSERVATION.',
      },

      section_2_mechanism: {
        what_a_volvulus_is: 'TWISTING OF A SEGMENT OF BOWEL AROUND ITS MESENTERIC AXIS. It requires a long, mobile segment on a NARROW MESENTERIC BASE — which is exactly what a chronically loaded, elongated sigmoid becomes.',
        why_it_is_a_closed_loop: {
          the_definition: 'A CLOSED LOOP OBSTRUCTION IS OBSTRUCTED AT BOTH ENDS. In sigmoid volvulus the twist occludes the lumen at the point of torsion, so the loop between cannot decompress in either direction.',
          why_that_is_dangerous:
            'Gas and fluid continue to accumulate inside a segment with no outlet. PRESSURE RISES RAPIDLY. The twist ALSO occludes the mesenteric vessels — first the thin-walled VEINS, causing congestion and worsening oedema, then the ARTERIES, causing ISCHAEMIA, NECROSIS AND PERFORATION. A CLOSED LOOP THEREFORE STRANGULATES MUCH FASTER THAN A SIMPLE OBSTRUCTION, AND IT IS A SURGICAL EMERGENCY RATHER THAN A PROBLEM THAT CAN BE OBSERVED.',
        },
        the_ileocaecal_valve_which_determines_the_whole_picture: {
          if_the_valve_is_INCOMPETENT: 'Colonic contents reflux backwards into the small bowel, which decompresses the colon. The patient vomits more and both small and large bowel dilate on the film. IT IS UNCOMFORTABLE BUT SAFER.',
          if_the_valve_is_COMPETENT:
            'Gas cannot escape backwards. THE ENTIRE COLON BETWEEN THE VALVE AND THE OBSTRUCTION BECOMES A SECOND CLOSED LOOP. Pressure rises steeply and the risk of perforation is high. A COMPETENT ILEOCAECAL VALVE CONVERTS LARGE BOWEL OBSTRUCTION INTO A SURGICAL EMERGENCY — this is the counter-intuitive point, because a competent valve sounds like a good thing.',
        },
        why_the_caecum_perforates_and_not_the_obstructed_segment: {
          the_law: 'THE LAW OF LAPLACE. For a cylinder, WALL TENSION IS PROPORTIONAL TO PRESSURE MULTIPLIED BY RADIUS. Pressure is transmitted equally throughout the closed system, so the segment with the LARGEST RADIUS experiences the GREATEST WALL TENSION.',
          the_consequence:
            'THE CAECUM IS THE WIDEST PART OF THE COLON. It therefore develops the highest wall tension and PERFORATES FIRST — even though the obstruction is in the sigmoid, far away. THIS IS WHY THE CAECAL DIAMETER ON THE FILM IS THE NUMBER THAT MATTERS, NOT THE SIZE OF THE SIGMOID LOOP.',
          the_threshold: 'A CAECAL DIAMETER OVER ABOUT 9 TO 12 cm INDICATES IMPENDING PERFORATION AND DEMANDS URGENT ACTION. Measure it and write it down.',
        },
      },

      section_3_differentials: {
        one_sigmoid_volvulus: 'WORKING DIAGNOSIS. Supporting: chronic constipation, institutionalised, previous self-resolving episodes, gross tympanitic distension, characteristic radiograph.',
        two_colorectal_carcinoma: 'THE COMMONEST CAUSE OF LARGE BOWEL OBSTRUCTION IN MOST HIGH-INCOME SETTINGS. Suggested by progressive symptoms, weight loss, rectal bleeding and anaemia. CT distinguishes it, and it must be excluded even when volvulus is found, because both can be present.',
        three_caecal_volvulus: 'Less common. Occurs in younger patients with a mobile caecum. The distended loop typically points to the LEFT UPPER quadrant, the reverse of sigmoid volvulus. IT DOES NOT RESPOND TO ENDOSCOPIC DECOMPRESSION AND REQUIRES SURGERY.',
        four_diverticular_stricture: 'A history of diverticular disease with previous episodes of left iliac fossa pain and fever.',
        five_acute_colonic_pseudo_obstruction_ogilvie_syndrome: {
          what_it_is: 'MASSIVE COLONIC DILATATION WITH NO MECHANICAL OBSTRUCTING LESION, caused by autonomic imbalance. Typical settings: elderly, recent surgery (especially orthopaedic), trauma, severe illness, electrolyte disturbance, and opioids or anticholinergics.',
          why_the_distinction_is_essential:
            'IT IS TREATED MEDICALLY, NOT SURGICALLY. Correct electrolytes (potassium, magnesium, calcium), stop opioids and anticholinergics, treat the underlying illness, decompress with a flatus tube, and consider NEOSTIGMINE — which produces dramatic decompression but requires CARDIAC MONITORING AND ATROPINE AVAILABLE because it causes BRADYCARDIA, and is contraindicated in mechanical obstruction, asthma and significant bradycardia. OPERATING ON PSEUDO-OBSTRUCTION IS A SIGNIFICANT AVOIDABLE HARM, AND ONLY IMAGING SEPARATES THEM RELIABLY.',
        },
        six_faecal_impaction: 'Common in the same population. Rectal examination finds it — which is one of several reasons the rectal examination is not optional.',
        seven_small_bowel_obstruction: 'Adhesions and hernias dominate. More vomiting, less distension, and a different radiographic pattern — central loops with VALVULAE CONNIVENTES crossing the FULL width of the bowel, versus peripheral loops with HAUSTRA crossing only PART of the width in the colon.',
      },

      section_4_investigations: {
        abdominal_radiograph: {
          the_coffee_bean_sign: 'A MASSIVELY DILATED LOOP ARISING FROM THE PELVIS AND EXTENDING TOWARDS THE RIGHT UPPER QUADRANT, with the two limbs of the loop separated by the dense line of the apposed inner walls — resembling a coffee bean. It is characteristic of SIGMOID volvulus. Loss of haustral markings in the twisted loop is usual.',
          what_else_to_look_for: 'MEASURE THE CAECAL DIAMETER. Assess whether small bowel is also dilated, which tells you about the ileocaecal valve. Look for FREE AIR under the diaphragm on an erect chest film if perforation is suspected, and for PNEUMATOSIS (gas in the bowel wall) or PORTAL VENOUS GAS, both indicating ischaemia.',
          distinguishing_small_from_large_bowel: 'SMALL BOWEL — central, VALVULAE CONNIVENTES crossing the FULL width, diameter over 3 cm abnormal. LARGE BOWEL — peripheral, HAUSTRA crossing only PART of the width, over 6 cm abnormal, and over 9 cm for the CAECUM.',
        },
        ct_abdomen_and_pelvis_with_contrast: {
          why_it_is_usually_still_needed: 'It CONFIRMS the volvulus, showing the WHIRL SIGN of twisted mesentery and the transition point; it EXCLUDES an underlying tumour, which can coexist; it identifies ISCHAEMIA through bowel wall changes, poor enhancement, pneumatosis, portal venous gas and free fluid; and it distinguishes mechanical obstruction from PSEUDO-OBSTRUCTION.',
          the_exception: 'A patient with peritonitis and clear evidence of perforation goes to theatre. Do not delay a laparotomy for a scan in that situation.',
        },
        bloods: 'Full blood count · UREA AND ELECTROLYTES, which are frequently deranged from vomiting and third-space loss and are also the key to identifying pseudo-obstruction · CRP · LACTATE, which is the most useful single marker of bowel ischaemia, though a NORMAL LACTATE DOES NOT EXCLUDE EARLY ISCHAEMIA · liver function · amylase · clotting · GROUP AND CROSS-MATCH · blood gas.',
        do_not: 'AVOID BARIUM CONTRAST STUDIES where perforation is possible — barium in the peritoneum causes severe chemical peritonitis. Use water-soluble contrast if a contrast study is needed.',
      },

      section_5_management: {
        a_the_immediate_measures: {
          drip_and_suck: 'The traditional phrase for the foundation of obstruction management. INTRAVENOUS FLUID RESUSCITATION — these patients are profoundly volume-deplete from vomiting, reduced intake and litres of fluid sequestered in the distended bowel. NASOGASTRIC TUBE on free drainage to decompress the stomach, reduce vomiting and reduce the risk of aspiration.',
          the_rest: 'NIL BY MOUTH. Catheterise with hourly urine output. Correct ELECTROLYTES, particularly potassium. Analgesia and antiemetic. Thromboprophylaxis. Bloods and cross-match. Antibiotics if there is any suspicion of ischaemia, perforation or sepsis. SURGICAL REFERRAL IMMEDIATELY.',
        },
        b_endoscopic_decompression_which_is_the_first_line_for_sigmoid_volvulus: {
          the_procedure: 'FLEXIBLE SIGMOIDOSCOPY (or rigid sigmoidoscopy) TO UNTWIST THE LOOP, followed by insertion of a FLATUS TUBE left in place for 24 to 48 hours to keep it decompressed and prevent immediate recurrence.',
          the_result: 'SUCCESSFUL IN A HIGH PROPORTION — typically 70 to 90% — with a dramatic and immediately obvious rush of gas and liquid faeces, and rapid relief of the distension.',
          the_essential_part_of_the_procedure:
            'INSPECT THE MUCOSA AS YOU GO. IF THE MUCOSA IS ISCHAEMIC — dusky, black, ulcerated or gangrenous — ABANDON THE DECOMPRESSION AND PROCEED TO SURGERY. Decompressing dead bowel and sending the patient back to the ward is a catastrophic error, and it is the single most important judgement in the procedure.',
          the_absolute_contraindications: 'PERITONITIS · SUSPECTED PERFORATION · EVIDENCE OF ISCHAEMIA. THESE PATIENTS GO TO THEATRE.',
        },
        c_when_to_operate: {
          the_indications: 'FAILED endoscopic decompression · ISCHAEMIC or gangrenous bowel · PERFORATION · PERITONITIS · CAECAL DIAMETER approaching or exceeding the perforation threshold with no decompression achieved · RECURRENT volvulus · and CAECAL volvulus, which does not respond to endoscopic decompression at all.',
          the_operations: 'SIGMOID COLECTOMY with primary anastomosis in a stable patient with healthy bowel. HARTMANN PROCEDURE — resection with an END COLOSTOMY and closure of the rectal stump — where the bowel is ischaemic, the patient is unstable, or the abdomen is contaminated, because an anastomosis in those conditions leaks. RESECTION WITH ANASTOMOSIS AND DEFUNCTIONING STOMA is an intermediate option.',
          the_honest_point_about_stomas: 'A HARTMANN PROCEDURE IS THE SAFE OPERATION IN A SICK PATIENT. The stoma can often be reversed later, but many never are. THAT CONVERSATION SHOULD HAPPEN BEFORE THE OPERATION WHERE THE PATIENT IS ABLE TO HAVE IT — and a stoma nurse should see them preoperatively if time allows, including for siting.',
        },
        d_the_step_that_prevents_the_next_admission: {
          the_problem: 'DECOMPRESSION ALONE DOES NOT CURE THE VOLVULUS. THE REDUNDANT SIGMOID IS STILL THERE. RECURRENCE RATES AFTER DECOMPRESSION ALONE ARE HIGH — commonly quoted between 40 and 60%, and each recurrence carries a risk of gangrene.',
          the_action: 'ELECTIVE SIGMOID COLECTOMY DURING THE SAME ADMISSION, once the patient is decompressed, resuscitated and prepared, IS RECOMMENDED FOR PATIENTS FIT FOR SURGERY. Sending a decompressed patient home with a follow-up appointment is how they return with gangrenous bowel. In genuinely unfit patients, a decision to accept recurrence risk is legitimate — but it should be a documented decision, not an omission.',
        },
        e_after_care: 'Correct nutrition and electrolytes. Treat the underlying constipation. Review causative medication. Mobilise. IF ANY SUSPICION OF UNDERLYING MALIGNANCY REMAINS, ARRANGE COLONIC ASSESSMENT — the emergency presentation may have masked a tumour, and a colonoscopy after recovery is often warranted. Stoma care and follow-up if one was formed.',
      },

      section_6_teaching_points: {
        bonus_1_a_competent_ileocaecal_valve_is_dangerous:
          'If the valve is competent, gas cannot reflux into the small bowel, so the colon between valve and obstruction becomes a SECOND closed loop and pressure rises steeply. A competent valve therefore converts large bowel obstruction into a surgical emergency — the opposite of what "competent" suggests.',
        bonus_2_laplace_explains_why_the_caecum_perforates:
          'Wall tension is proportional to pressure times radius. Pressure is equal throughout the closed system, so the widest segment — the CAECUM — bears the greatest tension and perforates first, even though the obstruction is in the sigmoid. That is why the CAECAL diameter is the number that matters, and over about 9 to 12 cm demands urgent action.',
        bonus_3_the_pattern_of_symptoms_localises_the_level:
          'High obstruction: early profuse vomiting, little distension, late constipation. Low obstruction: early marked distension and absolute constipation, late and sometimes faeculent vomiting. And "absolute constipation" means no flatus either — ask about flatus specifically.',
        bonus_4_inspect_the_mucosa_during_decompression:
          'Dusky, black or ulcerated mucosa means abandon the procedure and go to theatre. Decompressing dead bowel and returning the patient to the ward is catastrophic, and this judgement is the most important part of the procedure.',
        bonus_5_decompression_is_not_a_cure:
          'The redundant sigmoid remains, and recurrence after decompression alone runs at 40 to 60%, each episode risking gangrene. Elective sigmoid colectomy during the same admission is recommended for fit patients — a follow-up appointment is not a plan.',
        bonus_6_do_not_operate_on_pseudo_obstruction:
          'Ogilvie syndrome causes massive colonic dilatation with NO mechanical lesion, in the elderly, post-surgical, electrolyte-deranged or opioid-treated patient. It is treated medically — correct electrolytes, stop the offending drugs, flatus tube, and neostigmine with cardiac monitoring and atropine available. Only imaging separates it reliably from mechanical obstruction.',
        bonus_7_absent_bowel_sounds_in_obstruction_is_a_late_bad_sign:
          'Early obstruction gives high-pitched tinkling sounds as bowel fights against the block. Silence means the bowel has tired and ileus has supervened — it is not a return to normal.',
        trap_1: 'EXAMINE THE HERNIAL ORIFICES in every patient with obstruction — an obstructed hernia requires only that you look.',
        trap_2: 'Do a RECTAL EXAMINATION — it finds impaction, a rectal tumour, blood, and the ballooned empty rectum of proximal obstruction.',
        trap_3: 'Distinguish small from large bowel on the film — valvulae conniventes cross the FULL width, haustra only PART of it.',
        trap_4: 'CAECAL volvulus points to the LEFT upper quadrant and does NOT respond to endoscopic decompression.',
        trap_5: 'AVOID BARIUM if perforation is possible — use water-soluble contrast.',
        trap_6: 'A normal lactate does not exclude early ischaemia.',
        trap_7: 'Exclude an underlying malignancy — colorectal cancer is the commonest cause of large bowel obstruction in many settings and can coexist with volvulus.',
        one_line_summary: 'Sigmoid volvulus with closed-loop large bowel obstruction. Drip and suck, measure the caecum, sigmoidoscopic decompression while inspecting the mucosa, theatre immediately if it looks ischaemic — and resect the sigmoid before he goes home, or he will be back.',
      },
    },
    warnings: [
      'A COMPETENT ILEOCAECAL VALVE creates a second closed loop and converts large bowel obstruction into a surgical emergency.',
      'THE CAECUM PERFORATES FIRST because of the law of Laplace — measure the CAECAL diameter, and over about 9 to 12 cm demands urgent action.',
      'ABSOLUTE CONSTIPATION means no faeces AND NO FLATUS — ask about flatus specifically.',
      'INSPECT THE MUCOSA during endoscopic decompression — dusky or black bowel means ABANDON and go to theatre.',
      'Peritonitis, suspected perforation or evidence of ischaemia are ABSOLUTE CONTRAINDICATIONS to endoscopic decompression.',
      'DECOMPRESSION IS NOT A CURE — recurrence runs at 40 to 60%. Elective sigmoid colectomy during the same admission for fit patients.',
      'DO NOT OPERATE ON PSEUDO-OBSTRUCTION — treat it medically. Only imaging separates it reliably from mechanical obstruction.',
      'Neostigmine for pseudo-obstruction requires CARDIAC MONITORING and atropine available — it causes bradycardia.',
      'ABSENT BOWEL SOUNDS in obstruction is a LATE and WORSE sign, not a return to normal.',
      'EXAMINE THE HERNIAL ORIFICES and perform a RECTAL EXAMINATION in every patient with obstruction.',
      'CAECAL VOLVULUS points to the LEFT upper quadrant and does NOT respond to endoscopic decompression.',
      'AVOID BARIUM where perforation is possible — it causes severe chemical peritonitis. Use water-soluble contrast.',
      'A NORMAL LACTATE DOES NOT EXCLUDE early bowel ischaemia.',
      'EXCLUDE UNDERLYING MALIGNANCY — colorectal cancer is the commonest cause of large bowel obstruction in many settings.',
      'Management here is a teaching example. Follow local surgical policy.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Thresholds for surgery, decompression technique and same-admission resection policy vary between services.',
      'Epidemiology differs markedly by region — sigmoid volvulus is far commoner and affects younger patients in parts of Africa and Asia.',
    ],
    cards: [
      { q: 'Name the four cardinal features of intestinal obstruction.', a: 'Colicky pain, vomiting, distension and absolute constipation (no faeces AND no flatus).' },
      { q: 'How does the symptom pattern localise the level?', a: 'High: early profuse vomiting, little distension. Low: early marked distension and absolute constipation, late vomiting.' },
      { q: 'Why is a competent ileocaecal valve dangerous?', a: 'Gas cannot reflux into the small bowel, creating a second closed loop with steeply rising pressure.' },
      { q: 'Why does the caecum perforate rather than the sigmoid?', a: 'Law of Laplace — wall tension is proportional to pressure times radius, and the caecum is widest.' },
      { q: 'What caecal diameter indicates impending perforation?', a: 'Over about 9 to 12 cm.' },
      { q: 'What is the coffee-bean sign?', a: 'A massively dilated loop from the pelvis to the right upper quadrant with apposed inner walls forming a dense line.' },
      { q: 'When must endoscopic decompression be abandoned?', a: 'If the mucosa is dusky, black or ulcerated — that patient goes to theatre.' },
      { q: 'What is the recurrence rate after decompression alone?', a: 'Commonly 40 to 60% — which is why elective sigmoid colectomy is recommended in fit patients.' },
      { q: 'What is Ogilvie syndrome and how is it treated?', a: 'Acute colonic pseudo-obstruction — treated medically with electrolyte correction, stopping opioids, flatus tube and neostigmine.' },
      { q: 'What precautions accompany neostigmine?', a: 'Cardiac monitoring and atropine available — it causes bradycardia; contraindicated in mechanical obstruction and asthma.' },
      { q: 'How do you distinguish small from large bowel on a film?', a: 'Valvulae conniventes cross the FULL width (small bowel); haustra cross only PART of it (large bowel).' },
      { q: 'How does caecal volvulus differ?', a: 'It points to the LEFT upper quadrant, occurs in younger patients, and requires surgery rather than endoscopic decompression.' },
    ],
    checks: [
      'Absolute constipation confirmed — flatus asked about specifically',
      'Hernial orifices examined',
      'Rectal examination performed',
      'Caecal diameter measured on the radiograph and documented',
      'Small versus large bowel pattern identified',
      'Pseudo-obstruction considered and electrolytes checked',
      'Drip and suck instituted — fluids and nasogastric tube',
      'Catheter with hourly urine output',
      'Lactate measured, knowing a normal value does not exclude ischaemia',
      'CT arranged unless peritonitis mandates immediate theatre',
      'Barium avoided',
      'Endoscopic decompression with mucosal inspection',
      'Surgery if ischaemia, perforation or failed decompression',
      'Same-admission sigmoid colectomy planned for fit patients',
      'Underlying malignancy excluded before or after discharge',
    ],
    related: ['intestinal_obstruction_levels_causes_and_decisions'],
  },
];
