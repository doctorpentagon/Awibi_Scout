/**
 * CASE SCENARIOS — Medicine: Gastroenterology and Hepatology.
 *
 * Batch 3. Same rules: every term defined where it first appears, every
 * investigation with expected result and normal range, every drug with dose,
 * route, preparation, rate and monitoring.
 */

export default [
  {
    id: 'AS-CASE-0009',
    type: 'case',
    specialty: 'Medicine — Hepatology',
    teaching_case: true,
    title: 'CASE: Vomiting Fresh Blood in a Man With Known Alcohol-Related Cirrhosis',
    short: 'Case: variceal bleed',
    summary:
      'A 52-year-old with cirrhosis vomiting large volumes of fresh blood. Teaches why a variceal bleed is treated differently from an ulcer, why ANTIBIOTICS independently reduce mortality here, and why the haemoglobin is normal at the moment he is dying.',
    domains: ['hepatology', 'emergency_medicine', 'general_surgery'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case variceal bleed', 'haematemesis case', 'upper gi bleed case', 'oesophageal varices',
      'terlipressin case', 'sengstaken', 'portal hypertension case', 'blatchford case',
    ],
    terms: [
      'case', 'variceal', 'haematemesis', 'melaena', 'portal hypertension', 'cirrhosis',
      'terlipressin', 'band ligation', 'sengstaken blakemore', 'tips', 'blatchford',
      'rockall', 'child pugh', 'spontaneous bacterial peritonitis', 'ascites',
      'hepatic encephalopathy', 'lactulose', 'massive haemorrhage protocol',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '52-year-old man, known alcohol-related cirrhosis, brought in after vomiting two bowls of fresh red blood at home.',

      section_1_clerking: {
        history:
          'Two hours ago he vomited a large volume of FRESH RED blood, twice more since. He has passed BLACK TARRY STOOL twice this morning. He feels dizzy on standing and nearly fainted. His wife says he has been more confused than usual for two days, and his abdomen has been swelling for weeks.',
        reading_the_clues: {
          fresh_red_blood: 'FRESH means ACTIVE, BRISK bleeding — the blood has not sat in the stomach long enough for acid to alter it. Coffee-ground vomit means altered blood and therefore slower or stopped bleeding.',
          large_volume: 'Ask in household measures — a cupful, a bowlful — because millilitres mean nothing to a patient or relative. Two bowls is major haemorrhage.',
          melaena:
            'BLACK, TARRY, STICKY, OFFENSIVE stool. It is blood that has been DIGESTED, so it indicates an upper gastrointestinal source and at least a moderate volume. Distinguish it from the harmless black stool of IRON tablets or bismuth, which is not tarry and not offensive — ASK ABOUT THE SMELL, because patients remember it.',
          dizzy_on_standing: 'POSTURAL SYMPTOMS indicate significant volume loss. This is a better marker of severity than the appearance of the vomit.',
          more_confused_for_two_days:
            'HEPATIC ENCEPHALOPATHY, and the bleed is the precipitant. Blood in the gut is a large PROTEIN load; gut bacteria break it down to ammonia, which the failing liver cannot clear. So a variceal bleed causes encephalopathy, and the encephalopathy is a clue to the diagnosis.',
          swelling_abdomen: 'ASCITES — fluid in the peritoneal cavity from portal hypertension and low albumin. It confirms decompensated liver disease.',
        },
        past_medical_history: 'Alcohol-related cirrhosis diagnosed 3 years ago. Previous admission with ascites. No previous bleed. Hepatitis serology negative.',
        drug_history: 'Spironolactone 100 mg orally daily. Furosemide 40 mg orally daily. Thiamine 100 mg three times daily. He was prescribed PROPRANOLOL for variceal prophylaxis but stopped it because it made him tired.',
        social_history: 'Drank roughly 100 units of alcohol per week for 25 years; says he stopped 6 months ago. Lives with his wife. Unemployed.',
        vitals: {
          values: 'BP 88/52 mmHg. Pulse 122. Respiratory rate 24. Temperature 37.2. Saturation 96% on air. GCS 14/15 (confused).',
          what_this_means: 'HYPOTENSIVE AND TACHYCARDIC — he is in CLASS III HAEMORRHAGIC SHOCK, meaning roughly 30 to 40% blood volume loss. This is a major haemorrhage.',
        },
        examination: {
          general: 'Pale, clammy, cool peripheries. JAUNDICED — yellow sclerae, best seen in natural light.',
          stigmata_of_chronic_liver_disease:
            'Look for and document these deliberately, because they establish that this is a VARICEAL bleed until proven otherwise: SPIDER NAEVI (central arteriole with radiating vessels, blanching from the centre, in the distribution of the superior vena cava) · PALMAR ERYTHEMA · GYNAECOMASTIA · LOSS OF BODY HAIR · TESTICULAR ATROPHY · LEUCONYCHIA (white nails from low albumin) · DUPUYTREN CONTRACTURE · CAPUT MEDUSAE (dilated veins radiating from the umbilicus) · ASTERIXIS (the flapping tremor of encephalopathy).',
          abdomen: 'DISTENDED with SHIFTING DULLNESS (percuss from the midline outward to a dull note, roll the patient, and re-percuss — if the dullness moves, there is free fluid). SPLENOMEGALY. No guarding.',
          rectal_examination: 'MELAENA CONFIRMED. This must be done — it is essential and frequently omitted.',
        },
      },

      section_2_mechanism: {
        how_varices_form: [
          '1. Chronic alcohol injury causes CIRRHOSIS — the liver is replaced by regenerative nodules and fibrous scar.',
          '2. That scar OBSTRUCTS blood flow through the liver, so pressure rises in the PORTAL VEIN, which carries blood from the gut to the liver — PORTAL HYPERTENSION.',
          '3. Blood seeks an alternative route back to the heart, opening PORTOSYSTEMIC ANASTOMOSES — connections between the portal and systemic venous systems.',
          '4. The most important of these is at the LOWER OESOPHAGUS, where submucosal veins dilate into VARICES — thin-walled, high-pressure vessels sitting immediately under the mucosa.',
          '5. When portal pressure rises high enough, or the mucosa is eroded, a varix RUPTURES. Because it is a high-pressure, thin-walled vessel with no surrounding support, bleeding is TORRENTIAL and does not stop spontaneously the way an ulcer often does.',
        ],
        why_the_liver_disease_makes_it_worse: {
          clotting: 'The liver makes almost all clotting factors. In cirrhosis they are deficient, so the INR is prolonged and he cannot form a clot properly.',
          platelets: 'Portal hypertension causes SPLENOMEGALY, and the enlarged spleen sequesters platelets — THROMBOCYTOPENIA. So he has fewer platelets AND fewer clotting factors.',
          the_result: 'A high-pressure bleed in a patient who cannot clot.',
        },
        why_encephalopathy_follows: 'Blood in the gut is digested to a large ammonia load. The cirrhotic liver cannot clear it, and portosystemic shunting carries it straight past the liver into the systemic circulation and the brain.',
      },

      section_3_differentials: {
        one_variceal_haemorrhage: 'WORKING DIAGNOSIS. Supporting: known cirrhosis, stigmata of chronic liver disease, ascites, splenomegaly, large-volume fresh haematemesis, encephalopathy.',
        two_peptic_ulcer_bleed: 'Supporting: haematemesis and melaena. Against: no epigastric pain history, no NSAID use. IMPORTANT: cirrhotic patients also get ulcers — roughly a third of upper GI bleeds in cirrhosis are NOT variceal. Endoscopy settles it, but you must TREAT AS VARICEAL until it does, because the specific treatment is time-critical.',
        three_mallory_weiss_tear: 'Supporting: haematemesis. Against: the classic story is RETCHING FIRST, then blood; his bleeding was the first event, and the volume is too large.',
        four_gastric_malignancy: 'Supporting: bleeding. Against: no weight loss or dysphagia. Cirrhosis also raises hepatocellular carcinoma risk, which can bleed.',
        five_aorto_enteric_fistula: 'Rare and lethal. ALWAYS ASK ABOUT PREVIOUS AORTIC GRAFT SURGERY in a massive upper GI bleed. He has none.',
      },

      section_4_investigations: {
        note: 'Resuscitation and investigation happen together. Do not send him to a scanner while he is bleeding.',
        full_blood_count: {
          expected: 'Haemoglobin 118 g/L (normal 130 to 170 in men), platelets 74 (normal 150 to 400).',
          the_critical_teaching_point:
            'THE HAEMOGLOBIN IS NEARLY NORMAL, AND HE IS IN CLASS III SHOCK. Haemoglobin is a CONCENTRATION. In acute haemorrhage he loses whole blood — red cells and plasma together — so the ratio is preserved until fluid shifts into the circulation or you give fluid. It takes HOURS to fall. A NORMAL HAEMOGLOBIN NEVER EXCLUDES MAJOR BLEEDING, and treating the number instead of the patient kills people.',
          platelets: 'Low from hypersplenism — this is chronic, not acute blood loss.',
        },
        clotting_screen: 'Expected INR 1.9 (normal about 1.0), prolonged prothrombin time. This reflects SYNTHETIC LIVER FAILURE, not consumption. It is one of the best acute markers of liver function, because clotting factors have half-lives of hours.',
        urea_and_electrolytes: 'Expected urea 18.4 with creatinine 92. A UREA RAISED DISPROPORTIONATELY TO CREATININE supports an UPPER gastrointestinal bleed — digested blood is a large protein load absorbed from the gut. This is a genuinely useful discriminator.',
        liver_function_tests: 'Expected bilirubin 68 micromol/L (raised), albumin 26 g/L (low — normal 35 to 50), ALT and AST mildly raised, ALP mildly raised. Low albumin and high bilirubin with a prolonged INR indicate poor synthetic function.',
        group_and_crossmatch: 'CROSSMATCH AT LEAST 4 UNITS and alert the blood bank. Do not settle for a group and save in an actively bleeding patient.',
        venous_blood_gas: 'For a rapid haemoglobin and lactate. Expected lactate 4.2 mmol/L (normal under 2) — indicating tissue hypoperfusion and confirming significant shock.',
        risk_scores: {
          glasgow_blatchford: 'Uses urea, haemoglobin, systolic pressure, pulse, melaena, syncope, liver disease and cardiac failure. Identifies very low-risk patients who may avoid admission. HIS SCORE IS HIGH — he needs admission and urgent endoscopy.',
          rockall: 'Estimates mortality and rebleeding risk, pre- and post-endoscopy.',
          child_pugh: 'Grades severity of cirrhosis using bilirubin, albumin, INR, ascites and encephalopathy. It predicts mortality and guides whether interventions are survivable.',
        },
        endoscopy: 'UPPER GASTROINTESTINAL ENDOSCOPY is both DIAGNOSTIC and THERAPEUTIC. Target: within 24 hours of admission for all upper GI bleeds, and as soon as the patient is resuscitated in a suspected variceal bleed.',
      },

      section_5_management: {
        a_immediate: {
          the_priority: 'THIS IS A MAJOR HAEMORRHAGE. Call for senior help, alert the endoscopist and the blood bank at the same time as you resuscitate — not afterwards.',
          airway:
            'His GCS is 14 and he is vomiting large volumes of blood. THE AIRWAY IS THE FIRST AND GREATEST DANGER. Patients with variceal bleeding die of ASPIRATION as often as exsanguination. Sit him up if he can protect his airway; if consciousness falls, call anaesthetics for INTUBATION BEFORE endoscopy. Have suction working at the bedside.',
          breathing: 'Oxygen 15 L/min via non-rebreather mask.',
          circulation:
            'TWO LARGE-BORE CANNULAE — grey 16G or orange 14G. Large bore matters: flow through a tube rises with the FOURTH POWER of the radius, so a wide short cannula transfuses vastly faster than a long narrow central line. Take bloods as you cannulate.',
        },
        b_transfusion_strategy: {
          the_evidence_based_target:
            'TRANSFUSE TO A HAEMOGLOBIN TARGET OF 70 to 80 g/L — a RESTRICTIVE strategy. In variceal bleeding, over-transfusion RAISES PORTAL PRESSURE and can PROVOKE FURTHER BLEEDING. This is counterintuitive and important: giving more blood to a bleeding cirrhotic can make the bleeding worse.',
          the_exception: 'In active, uncontrolled, massive haemorrhage with shock, transfuse to maintain perfusion regardless of the number, and activate the MASSIVE HAEMORRHAGE PROTOCOL. The restrictive target applies once bleeding is controlled.',
          correcting_coagulopathy:
            'Give PLATELETS if under 50 x 10^9/L with active bleeding. Give FRESH FROZEN PLASMA or prothrombin complex concentrate per local massive haemorrhage protocol if the INR is markedly prolonged and bleeding is active. Give VITAMIN K 10 mg intravenously — though note it works slowly over hours and does not correct the INR acutely in liver disease.',
          fluid: 'Crystalloid to maintain perfusion while blood is arranged, but do NOT over-fill — excessive crystalloid dilutes clotting factors and raises portal pressure.',
        },
        c_the_three_drugs_that_change_outcome: {
          one_terlipressin: {
            drug: 'TERLIPRESSIN 2 mg intravenously every 4 hours, reducing to 1 mg every 4 hours once bleeding is controlled, continued for 2 to 5 days.',
            what_it_does: 'A vasopressin analogue. It constricts SPLANCHNIC arterioles — the vessels supplying the gut — reducing portal venous inflow and therefore PORTAL PRESSURE, which reduces bleeding from the varix.',
            evidence: 'It reduces mortality in variceal bleeding. Give it on SUSPICION, before endoscopy confirms the source.',
            cautions: 'It causes systemic vasoconstriction, so use with care in ischaemic heart disease, peripheral vascular disease and arrhythmia. Monitor for chest pain, limb ischaemia and hyponatraemia, which can be profound and rapid.',
            alternative: 'OCTREOTIDE 50 microgram intravenous bolus then 50 micrograms per hour by infusion, where terlipressin is unavailable or contraindicated.',
          },
          two_antibiotics: {
            drug: 'A broad-spectrum antibiotic per local policy — for example CEFTRIAXONE 1 g intravenously once daily, or CIPROFLOXACIN.',
            why_this_is_the_point:
              'PROPHYLACTIC ANTIBIOTICS INDEPENDENTLY REDUCE MORTALITY IN VARICEAL BLEEDING. Not just infection rates — MORTALITY. Bacterial infection is extremely common in bleeding cirrhotics because bacteria translocate across a congested gut wall, and infection both worsens bleeding and precipitates further decompensation. THIS IS THE SINGLE MOST FORGOTTEN INTERVENTION IN THE WHOLE CASE, because it feels like something for later.',
            give_it: 'To EVERY cirrhotic with an upper GI bleed, whether or not they look infected.',
          },
          three_proton_pump_inhibitor: {
            drug: 'For example OMEPRAZOLE 40 mg intravenously, or an 80 mg bolus followed by an 8 mg per hour infusion if a bleeding ulcer is found.',
            the_nuance: 'A proton pump inhibitor is the specific treatment for a bleeding ULCER, not for varices. But since roughly a third of bleeds in cirrhosis are non-variceal, it is commonly started before endoscopy and then continued or stopped depending on what is found.',
          },
        },
        d_endoscopic_therapy: {
          band_ligation: 'ENDOSCOPIC VARICEAL BAND LIGATION is the definitive first-line treatment — small elastic bands are applied to the varices, strangling them so they thrombose and scar. Superior to injection sclerotherapy.',
          timing: 'As soon as the patient is adequately resuscitated, and within 24 hours.',
          for_gastric_varices: 'Cyanoacrylate glue injection rather than banding.',
        },
        e_if_bleeding_continues: {
          balloon_tamponade: 'A SENGSTAKEN-BLAKEMORE tube (or Minnesota tube) — a tube with balloons that are inflated in the stomach and oesophagus to compress the varices mechanically. IT IS A TEMPORISING BRIDGE ONLY, for a maximum of about 24 hours, and carries serious risks including oesophageal rupture and pressure necrosis. The airway must be secured first. It buys time to reach definitive treatment.',
          tips: 'TRANSJUGULAR INTRAHEPATIC PORTOSYSTEMIC SHUNT — a stent created through the liver connecting the portal and hepatic veins, decompressing the portal system. Highly effective for uncontrolled or early rebleeding. Its major complication is worsening HEPATIC ENCEPHALOPATHY, because blood now bypasses the liver entirely.',
        },
        f_the_rest_of_his_liver_care: {
          encephalopathy: 'LACTULOSE 30 mL orally three times daily, titrated to produce 2 to 3 soft stools per day. It acidifies the colon, converting ammonia to ammonium which cannot be absorbed, and speeds transit so less is produced. Add RIFAXIMIN 550 mg twice daily where available, a non-absorbed antibiotic reducing ammonia-producing gut bacteria. AND FIND THE PRECIPITANT — here it is the bleed itself.',
          ascites_and_spontaneous_bacterial_peritonitis:
            'PERFORM A DIAGNOSTIC ASCITIC TAP in any cirrhotic with ascites who is admitted unwell. A neutrophil count of 250 cells per cubic millimetre or above in ascitic fluid diagnoses SPONTANEOUS BACTERIAL PERITONITIS, even without abdominal pain or fever — and it is frequently silent. It is a leading cause of death in cirrhosis and is missed by not tapping.',
          alcohol_withdrawal: 'He stopped drinking 6 months ago, so withdrawal is unlikely — but ASK PRECISELY, because patients understate intake. If there is any doubt, use a withdrawal scale and prescribe a reducing benzodiazepine regimen, plus PABRINEX (high-potency B vitamins) intravenously to prevent WERNICKE ENCEPHALOPATHY.',
          nutrition: 'Cirrhotic patients are profoundly catabolic. Feed early — do not keep them nil by mouth longer than necessary after endoscopy.',
        },
        g_secondary_prevention_before_discharge: {
          beta_blocker: 'NON-SELECTIVE BETA-BLOCKER — for example PROPRANOLOL 40 mg orally twice daily, titrated to reduce resting pulse by about 25% — or CARVEDILOL. It reduces portal pressure and prevents rebleeding. HE STOPPED HIS BECAUSE IT MADE HIM TIRED — this must be revisited, with an explanation of what it is preventing and a discussion of dose or drug change rather than simply represcribing the same thing.',
          banding_programme: 'Repeat endoscopic band ligation every 2 to 4 weeks until the varices are obliterated, then surveillance.',
          alcohol: 'Formal alcohol services referral. Abstinence is the single most powerful determinant of survival in alcohol-related cirrhosis, and improvement in liver function after sustained abstinence can be substantial.',
          transplant_assessment: 'Consider referral, and discuss it honestly.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_haemoglobin_lies:
          'He is in class III shock with a haemoglobin of 118. In ACUTE haemorrhage you lose red cells and plasma together, so the CONCENTRATION is preserved until fluid shifts in. It takes hours to fall. Resuscitate the PATIENT — pulse, blood pressure, capillary refill, conscious level, urine output — not the number.',
        bonus_2_antibiotics_reduce_mortality:
          'Prophylactic antibiotics in a cirrhotic with an upper GI bleed reduce MORTALITY, not merely infection. Bacteria translocate across the congested gut wall; infection worsens bleeding and precipitates decompensation. Give them to every cirrhotic with a bleed, infected-looking or not. It is the most forgotten intervention here.',
        bonus_3_transfuse_restrictively:
          'Target haemoglobin 70 to 80 g/L. Over-transfusion RAISES PORTAL PRESSURE and can provoke further variceal bleeding. Giving more blood can make a variceal bleed worse — which is the opposite of the instinct.',
        bonus_4_the_urea_creatinine_ratio: 'A urea raised out of proportion to creatinine points to an UPPER gastrointestinal source, because digested blood is absorbed as a large protein load. It is a free diagnostic clue sitting in a routine blood test.',
        trap_1: 'THE AIRWAY KILLS AS OFTEN AS THE BLEEDING. Aspiration of blood in a confused patient is a leading cause of death. Suction at the bedside, and intubate before endoscopy if consciousness is falling.',
        trap_2: 'Roughly a third of upper GI bleeds in cirrhosis are NOT variceal. Treat as variceal until endoscopy proves otherwise, because the specific treatment is time-critical — but do not assume.',
        trap_3: 'Tap the ascites. Spontaneous bacterial peritonitis is frequently silent, and a neutrophil count of 250 or above diagnoses it without pain or fever.',
        trap_4: 'Vitamin K does not correct the INR acutely in liver disease — the factors are not being made at all.',
        trap_5: 'Ask about previous aortic graft surgery in any massive upper GI bleed. Aorto-enteric fistula is rare and lethal.',
        trap_6: 'He stopped his beta-blocker because of side effects. Represcribing the identical drug without addressing why he stopped will simply repeat the failure.',
        one_line_summary: 'Variceal haemorrhage in decompensated cirrhosis. Airway first, two large cannulae, terlipressin and antibiotics on suspicion, restrictive transfusion, band ligation within 24 hours — and remember the antibiotics reduce mortality.',
      },
    },
    warnings: [
      'THE AIRWAY IS THE FIRST DANGER — patients with variceal bleeding die of aspiration as often as exsanguination. Suction at the bedside; intubate before endoscopy if consciousness falls.',
      'A NORMAL HAEMOGLOBIN NEVER EXCLUDES MAJOR BLEEDING — it takes hours to fall. Resuscitate the patient, not the number.',
      'PROPHYLACTIC ANTIBIOTICS INDEPENDENTLY REDUCE MORTALITY in variceal bleeding. Give them to every cirrhotic with an upper GI bleed. This is the most forgotten intervention.',
      'TRANSFUSE RESTRICTIVELY to 70 to 80 g/L — over-transfusion raises portal pressure and can provoke further bleeding.',
      'Give terlipressin on SUSPICION, before endoscopy confirms the source.',
      'Roughly a third of upper GI bleeds in cirrhosis are NOT variceal — treat as variceal, but do not assume.',
      'TAP THE ASCITES. Spontaneous bacterial peritonitis is often silent; 250 neutrophils per cubic millimetre diagnoses it without pain or fever.',
      'A urea raised disproportionately to creatinine supports an upper GI source.',
      'Vitamin K does not correct the INR acutely in liver disease.',
      'Ask about previous aortic graft surgery — aorto-enteric fistula is rare and lethal.',
      'Terlipressin causes systemic vasoconstriction and profound hyponatraemia — monitor sodium and watch for chest or limb ischaemia.',
      'Doses here are teaching examples for an adult. Check your local formulary and massive haemorrhage protocol before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Transfusion triggers, antibiotic choice and endoscopy timing follow local policy and vary by service.',
      'Terlipressin and TIPS availability differ enormously between settings.',
    ],
    cards: [
      { q: 'Why can the haemoglobin be normal in a massive bleed?', a: 'It is a concentration — whole blood is lost, so the ratio holds until fluid shifts in. It takes hours to fall.' },
      { q: 'Which intervention independently reduces MORTALITY in variceal bleeding?', a: 'Prophylactic antibiotics — given to every cirrhotic with an upper GI bleed.' },
      { q: 'What is the transfusion target, and why restrictive?', a: '70 to 80 g/L — over-transfusion raises portal pressure and can provoke further bleeding.' },
      { q: 'How does terlipressin work?', a: 'It constricts splanchnic arterioles, reducing portal venous inflow and therefore portal pressure.' },
      { q: 'What is the definitive endoscopic treatment?', a: 'Variceal band ligation, within 24 hours once resuscitated.' },
      { q: 'What is a Sengstaken-Blakemore tube and its limits?', a: 'A balloon tamponade bridge for up to about 24 hours, with risk of oesophageal rupture. The airway must be secured first.' },
      { q: 'What is the main complication of TIPS?', a: 'Worsening hepatic encephalopathy, because blood bypasses the liver.' },
      { q: 'What ascitic neutrophil count diagnoses SBP?', a: '250 cells per cubic millimetre or above — even without pain or fever.' },
      { q: 'How does lactulose treat encephalopathy?', a: 'It acidifies the colon, trapping ammonia as ammonium, and speeds transit. Titrate to 2 to 3 soft stools daily.' },
      { q: 'Why is the urea high with a normal creatinine?', a: 'Digested blood is absorbed as a large protein load — it supports an upper GI source.' },
      { q: 'Why does a variceal bleed cause encephalopathy?', a: 'Blood in the gut is a protein load converted to ammonia, which the failing liver cannot clear.' },
    ],
    checks: [
      'Airway assessed and suction at the bedside',
      'Two large-bore cannulae sited',
      'Crossmatch at least 4 units and blood bank alerted',
      'Terlipressin given on suspicion',
      'PROPHYLACTIC ANTIBIOTICS given',
      'Restrictive transfusion target set and documented',
      'Coagulopathy and platelets addressed',
      'Endoscopy arranged within 24 hours',
      'Rectal examination performed to confirm melaena',
      'Ascitic tap performed to exclude SBP',
      'Beta-blocker and banding programme arranged before discharge',
      'Alcohol services referral made',
    ],
    related: ['upper_gastrointestinal_bleeding_structured_history'],
  },

  {
    id: 'AS-CASE-0010',
    type: 'case',
    specialty: 'Medicine — Hepatology',
    teaching_case: true,
    title: 'CASE: A 24-Year-Old Who Took 40 Paracetamol Tablets Yesterday',
    short: 'Case: paracetamol overdose',
    summary:
      'A staggered overdose presenting late, when the patient feels almost well. Teaches why paracetamol poisoning is silent for the first 24 hours, how the antidote actually works, why the treatment line depends on TIME, and the criteria that trigger a transplant call.',
    domains: ['hepatology', 'toxicology', 'emergency_medicine', 'psychiatry'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case paracetamol overdose', 'acetaminophen overdose case', 'nac case',
      'n-acetylcysteine', 'kings college criteria', 'acute liver failure case',
      'staggered overdose', 'treatment nomogram',
    ],
    terms: [
      'case', 'paracetamol', 'acetaminophen', 'overdose', 'napqi', 'glutathione',
      'n-acetylcysteine', 'nac', 'parvolex', 'treatment line', 'nomogram', 'staggered',
      'kings college criteria', 'acute liver failure', 'transplant', 'inr', 'encephalopathy',
      'anaphylactoid', 'activated charcoal',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '24-year-old woman brought by her flatmate, having taken about 40 paracetamol 500 mg tablets over 12 hours yesterday after a relationship breakdown. She feels nauseated but otherwise well.',

      section_1_clerking: {
        history:
          'She took the tablets in several handfuls across about 12 hours yesterday, starting around 30 hours ago. She also drank most of a bottle of wine. She told nobody until this morning. She now has nausea, vomited twice, and has mild right upper abdominal discomfort. She says she regrets it and is frightened.',
        reading_the_clues: {
          forty_tablets: '40 x 500 mg = 20 GRAMS. A potentially fatal dose. Calculate it in milligrams per kilogram: at 55 kg that is roughly 364 mg/kg, far above the 150 mg/kg threshold at which harm is expected.',
          over_12_hours: 'This is a STAGGERED OVERDOSE — taken over more than one hour rather than all at once. This is critical, because the treatment nomogram CANNOT BE USED for a staggered overdose. See investigations.',
          thirty_hours_ago: 'LATE PRESENTATION. The antidote is most effective within 8 hours and its benefit declines with time — but it is still given late, and still helps.',
          she_feels_almost_well:
            'THIS IS THE TRAP AT THE CENTRE OF THE WHOLE CASE. Paracetamol poisoning is SILENT for the first 24 hours. The patient who feels fine may have irreversible liver failure developing. Never be reassured by how well they look.',
          alcohol: 'Chronic alcohol excess depletes glutathione and induces the enzyme that produces the toxic metabolite, raising risk. Acute alcohol at the time of overdose may be modestly protective by competing for the same enzyme — but never treat that as reassurance.',
          she_told_nobody: 'Establish intent carefully. This matters clinically and for her ongoing safety.',
        },
        past_medical_history: 'Depression, diagnosed 2 years ago. One previous overdose aged 19. No liver disease.',
        drug_history: 'Sertraline 50 mg orally daily. No regular paracetamol. No enzyme-inducing drugs.',
        vitals: 'BP 112/68 mmHg. Pulse 92. Respiratory rate 18. Temperature 36.8. Saturation 98% on air. GCS 15. Capillary glucose 4.6 mmol/L.',
        examination:
          'Alert and orientated, mildly distressed. NO JAUNDICE YET — jaundice takes days to develop. Mild right upper quadrant tenderness. NO ASTERIXIS (test it deliberately — arms out, wrists back, hold 30 seconds — because it is the earliest sign of encephalopathy). No stigmata of chronic liver disease. Examine for self-harm injuries elsewhere.',
      },

      section_2_mechanism: {
        the_normal_pathway:
          'At therapeutic doses, most paracetamol is safely conjugated in the liver with glucuronide and sulphate and excreted. A SMALL fraction (about 5 to 10%) is metabolised by the cytochrome P450 enzyme CYP2E1 into a highly reactive toxic metabolite called NAPQI (N-acetyl-p-benzoquinone imine). NAPQI is immediately neutralised by GLUTATHIONE, the liver principal antioxidant, and excreted harmlessly.',
        what_happens_in_overdose: [
          '1. The conjugation pathways become SATURATED — they can only process so much.',
          '2. Far more paracetamol is therefore diverted down the CYP2E1 route, producing large amounts of NAPQI.',
          '3. GLUTATHIONE STORES ARE CONSUMED and then EXHAUSTED.',
          '4. Unneutralised NAPQI binds covalently to hepatocyte proteins, causing CENTRILOBULAR (zone 3) NECROSIS — the area around the central vein, where CYP2E1 concentration is highest and oxygen tension lowest.',
          '5. Massive hepatocyte death causes ACUTE LIVER FAILURE: the liver stops making clotting factors (RISING INR), stops clearing bilirubin (JAUNDICE), stops clearing ammonia (ENCEPHALOPATHY) and stops maintaining glucose (HYPOGLYCAEMIA).',
          '6. The kidneys can also be injured directly, causing ACUTE KIDNEY INJURY, sometimes without severe liver failure.',
        ],
        how_the_antidote_works:
          'N-ACETYLCYSTEINE (NAC) works mainly by REPLENISHING GLUTATHIONE, restoring the ability to neutralise NAPQI. It also acts as a direct substitute for glutathione, and has additional benefits in established liver failure through improved microcirculation and oxygen delivery. THIS IS WHY IT WORKS BEST EARLY — before glutathione is exhausted and the damage is done — and why it is still worth giving late, when it supports a failing liver.',
        the_four_clinical_stages: {
          stage_1_0_to_24_hours: 'ASYMPTOMATIC, or nausea, vomiting and malaise. Liver tests NORMAL. THE DANGEROUS WINDOW — the patient looks well while the poisoning proceeds.',
          stage_2_24_to_72_hours: 'Right upper quadrant pain, TRANSAMINASES RISING, INR rising.',
          stage_3_72_to_96_hours: 'PEAK hepatotoxicity — jaundice, encephalopathy, coagulopathy, hypoglycaemia, lactic acidosis, acute kidney injury. This is when people die.',
          stage_4_beyond_96_hours: 'Either recovery, with the liver regenerating completely and no chronic damage, or progression to death or transplant.',
        },
      },

      section_3_differentials: {
        note: 'The diagnosis is not usually in doubt. The real questions are HOW MUCH, WHEN, WAS ANYTHING ELSE TAKEN, and HOW BAD IS THE LIVER ALREADY.',
        co_ingestants_that_change_management:
          'ALWAYS ASK AND TEST FOR: SALICYLATE (aspirin), because many combination preparations contain both and salicylate poisoning is managed completely differently. OPIOIDS, because co-codamol is paracetamol plus codeine and the codeine causes respiratory depression reversible with naloxone. TRICYCLIC ANTIDEPRESSANTS, which cause arrhythmia and seizures. ALCOHOL. Send a paracetamol AND salicylate level in every overdose, whatever the patient says they took.',
        other_causes_of_acute_liver_failure_to_keep_in_mind: 'Viral hepatitis, autoimmune hepatitis, Wilson disease, Budd-Chiari syndrome, ischaemic hepatitis, and other drugs and herbal remedies.',
      },

      section_4_investigations: {
        paracetamol_level: {
          why: 'To decide whether treatment is needed in a SINGLE acute overdose.',
          when_to_take_it: 'AT LEAST 4 HOURS AFTER INGESTION. A level taken before 4 hours is uninterpretable, because absorption is incomplete and the level is still rising.',
          the_treatment_line:
            'Plot the level against the TIME SINCE INGESTION on the treatment nomogram. If the point is ON or ABOVE the line, treat with N-acetylcysteine.',
          the_crucial_limitation_in_this_case:
            'THE NOMOGRAM CANNOT BE USED FOR A STAGGERED OVERDOSE, or where the timing is uncertain, or where presentation is beyond 15 hours. She took hers over 12 hours, 30 hours ago. THEREFORE: TREAT HER REGARDLESS OF THE LEVEL. Getting this wrong — plotting a staggered overdose on the nomogram, finding it "below the line", and discharging the patient — is a recognised and fatal error.',
        },
        the_tests_that_actually_matter_here: {
          inr_and_prothrombin_time:
            'THE SINGLE BEST MARKER OF LIVER FUNCTION IN THIS SETTING. Clotting factors have half-lives of HOURS, so the INR rises early and reflects real-time synthetic capacity. Normal about 1.0. EXPECTED HERE: 2.4 — significantly abnormal and rising.',
          alt: 'ALANINE AMINOTRANSFERASE, released from damaged hepatocytes. Normal under about 40 U/L. EXPECTED: 4,800 U/L — transaminases in the THOUSANDS are characteristic of paracetamol toxicity, ischaemic hepatitis, or acute viral hepatitis.',
          creatinine: 'Paracetamol causes direct renal injury. Normal about 60 to 110 micromol/L. Expected 142 — acute kidney injury.',
          venous_gas_with_lactate_and_ph: 'A pH below 7.3 after adequate fluid resuscitation is a transplant criterion. Expected pH 7.32, lactate 3.4.',
          glucose: 'HYPOGLYCAEMIA is a feature of acute liver failure, because the liver stores and releases glucose. Check it repeatedly — not once.',
          also_send: 'Full blood count, urea and electrolytes, phosphate, bilirubin, albumin, salicylate level, and a pregnancy test in any woman of reproductive age.',
        },
      },

      section_5_management: {
        a_immediate: 'ABCDE. She is stable. Check glucose. Establish intravenous access.',
        b_activated_charcoal: {
          when: 'Consider ACTIVATED CHARCOAL 50 g orally if the patient presents WITHIN 1 HOUR of a significant ingestion and can protect their airway.',
          here: 'She presented 30 hours later. CHARCOAL IS USELESS AND SHOULD NOT BE GIVEN. It is worth understanding why it is offered at all, so you can recognise when it is genuinely indicated.',
        },
        c_n_acetylcysteine_the_antidote: {
          indication_here: 'Treat WITHOUT waiting for a level, because this is a staggered overdose presenting late. IN ANY OF THESE SITUATIONS, START TREATMENT IMMEDIATELY: staggered overdose · uncertain timing · presentation beyond 8 hours with a significant reported dose · any patient who is already jaundiced, encephalopathic or has an abnormal INR.',
          the_regimen: {
            note: 'Regimens differ between countries and are being simplified. A widely used approach is a 21-hour, three-bag intravenous course. FOLLOW YOUR LOCAL PROTOCOL — the point here is to understand the structure and the monitoring, not to memorise one country numbers.',
            weight_based: 'All doses are calculated on ACTUAL BODY WEIGHT, capped at 110 kg. HER WEIGHT IS 55 kg.',
            bag_1: '150 mg/kg in 200 mL of 5% glucose, infused over 1 HOUR. FOR 55 kg: 150 x 55 = 8,250 mg = 8.25 g.',
            bag_2: '50 mg/kg in 500 mL of 5% glucose, infused over 4 HOURS. FOR 55 kg: 50 x 55 = 2,750 mg = 2.75 g.',
            bag_3: '100 mg/kg in 1,000 mL of 5% glucose, infused over 16 HOURS. FOR 55 kg: 100 x 55 = 5,500 mg = 5.5 g.',
            after_21_hours: 'DO NOT SIMPLY STOP. Recheck INR, ALT, creatinine and venous gas. CONTINUE the infusion at the third-bag rate if the INR is still rising, the ALT is still rising, there is encephalopathy or acidosis, or the paracetamol level remains detectable. Stopping a course while the liver is still deteriorating is a serious error.',
          },
          the_anaphylactoid_reaction: {
            what: 'Flushing, urticaria, wheeze, hypotension and nausea, most often during the FIRST bag, which is the fastest and most concentrated.',
            the_key_point:
              'THIS IS ANAPHYLACTOID, NOT TRUE ALLERGY — it is direct histamine release, dose- and rate-related, and it is NOT a contraindication to continuing. Manage it by STOPPING the infusion temporarily, giving an antihistamine such as CHLORPHENAMINE 10 mg intravenously, and RESTARTING AT A SLOWER RATE. Abandoning the antidote because of a rash is a serious and avoidable error that has cost lives.',
            severe_reactions: 'Genuine severe bronchospasm or hypotension is treated as anaphylaxis, with senior and toxicology input before restarting.',
          },
        },
        d_supportive_care_for_acute_liver_failure: {
          glucose: 'Monitor closely and treat hypoglycaemia. A 10% glucose infusion may be needed.',
          coagulopathy:
            'DO NOT routinely correct the INR with fresh frozen plasma. THIS IS COUNTERINTUITIVE BUT IMPORTANT: the INR is the single best marker of liver function and the main criterion for transplant. Correcting it cosmetically REMOVES YOUR ABILITY TO ASSESS THE LIVER and may deny the patient a transplant assessment. Give clotting products only for ACTIVE BLEEDING or before an invasive procedure, and discuss with the liver unit first. Give vitamin K if deficiency is suspected.',
          renal: 'Monitor urine output and renal function; renal replacement may be needed.',
          encephalopathy: 'Regular neurological observations. Rising grade of encephalopathy is an emergency and a transplant criterion.',
          infection: 'These patients are functionally immunosuppressed. Have a low threshold for cultures and antibiotics.',
        },
        e_when_to_call_the_liver_transplant_centre: {
          the_kings_college_criteria_for_paracetamol_induced_liver_failure: {
            criterion_one: 'ARTERIAL pH below 7.3 more than 24 hours after ingestion, AFTER adequate fluid resuscitation. ON ITS OWN this is enough.',
            criterion_two: 'ALL THREE together — PROTHROMBIN TIME above 100 seconds (INR above 6.5), CREATININE above 300 micromol/L, and GRADE III OR IV ENCEPHALOPATHY.',
            also_consider: 'A rising lactate after fluid resuscitation, and a rapidly rising INR.',
            the_practical_point:
              'DO NOT WAIT UNTIL THE CRITERIA ARE MET TO PICK UP THE PHONE. Discuss any patient with a rising INR, acidosis, renal impairment or encephalopathy with the regional liver unit EARLY. Transfer takes time, and a patient who meets criteria may already be too unstable to move.',
          },
        },
        f_the_part_that_is_not_about_the_liver: {
          psychiatric_assessment:
            'MANDATORY in every case of self-poisoning, once medically stable. A formal risk assessment by a mental health professional. Do not discharge a patient after a deliberate overdose without it — this is both a clinical and a safeguarding obligation.',
          risk_factors_to_note_here: 'Previous overdose aged 19. Known depression. She told nobody, which suggests a genuine attempt rather than a communicative act. She now expresses regret, which does not reduce future risk.',
          practical_safety: 'Remove access to means where possible. Discuss with family with her consent. Ensure follow-up is arranged and named, not vague.',
          capacity: 'If she refuses treatment, assess CAPACITY formally and take senior and legal advice. A patient in liver failure may lack capacity through encephalopathy.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_silence_is_the_danger:
          'Paracetamol overdose is ASYMPTOMATIC or nearly so for the first 24 hours. The patient who "feels fine" and wants to go home may be developing irreversible liver failure. This is the single most important fact in the case, and it is why treatment is based on dose, timing and blood tests — never on how well the patient looks.',
        bonus_2_the_nomogram_does_not_apply_to_everyone:
          'It is valid ONLY for a SINGLE acute ingestion at a KNOWN time, sampled at least 4 hours afterwards. For a STAGGERED overdose, an uncertain time, or a late presentation, the nomogram is meaningless — TREAT. Plotting a staggered overdose and discharging on a "below the line" result is a recognised fatal error.',
        bonus_3_the_anaphylactoid_reaction_is_not_an_allergy:
          'Flushing and wheeze during the first N-acetylcysteine bag is dose- and rate-related histamine release, not immune allergy. Stop, give an antihistamine, restart slower. NEVER abandon the antidote because of it.',
        bonus_4_do_not_correct_the_inr_cosmetically:
          'The INR is the best available measure of how the liver is functioning and the main transplant criterion. Giving fresh frozen plasma without active bleeding blinds you to the trend and may cost the patient a transplant referral. Treat bleeding, not numbers.',
        trap_1: 'Send a SALICYLATE level in every overdose regardless of what the patient reports. Combination preparations are common and salicylate poisoning is managed entirely differently.',
        trap_2: 'Do not take a paracetamol level before 4 hours — it is uninterpretable.',
        trap_3: 'Do not stop N-acetylcysteine at 21 hours by the clock. Recheck INR, ALT, creatinine and gas, and continue if anything is still deteriorating.',
        trap_4: 'Check glucose repeatedly. Hypoglycaemia is a feature of acute liver failure and is easily missed.',
        trap_5: 'Call the liver unit EARLY — before the criteria are met — because transfer takes time.',
        trap_6: 'No patient is discharged after deliberate self-poisoning without a mental health assessment.',
        one_line_summary: 'Staggered paracetamol overdose presenting late. The nomogram does not apply, so treat immediately; a rash during the first bag is not an allergy; do not correct the INR; and phone the liver unit before the criteria are met.',
      },
    },
    warnings: [
      'Paracetamol poisoning is SILENT for the first 24 hours. A patient who feels well may be developing irreversible liver failure.',
      'The treatment nomogram is INVALID for a staggered overdose, uncertain timing or late presentation — TREAT regardless of the level.',
      'Do not take a paracetamol level before 4 hours after ingestion; it is uninterpretable.',
      'The anaphylactoid reaction to N-acetylcysteine is NOT an allergy. Stop, give an antihistamine, restart slower. Never abandon the antidote.',
      'Do NOT correct the INR with fresh frozen plasma without active bleeding — it is the best marker of liver function and the main transplant criterion.',
      'Do not stop N-acetylcysteine by the clock at 21 hours — recheck INR, ALT, creatinine and gas first.',
      'Send a SALICYLATE level in every overdose regardless of what the patient reports.',
      'Check glucose repeatedly — hypoglycaemia is a feature of acute liver failure.',
      'Phone the regional liver unit EARLY, before King College criteria are met, because transfer takes time.',
      'No patient is discharged after deliberate self-poisoning without a mental health assessment.',
      'Activated charcoal is only useful within about 1 hour of ingestion.',
      'Doses here are teaching examples calculated on actual body weight capped at 110 kg. Follow your local toxicology protocol.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. N-acetylcysteine regimens differ between countries and are being simplified — follow local guidance and your poisons service.',
      'Always consult a national poisons information service for individual cases.',
    ],
    cards: [
      { q: 'What is the toxic metabolite and what normally neutralises it?', a: 'NAPQI, produced by CYP2E1 and neutralised by glutathione.' },
      { q: 'How does N-acetylcysteine work?', a: 'It replenishes glutathione, restoring the ability to neutralise NAPQI.' },
      { q: 'When is the nomogram invalid?', a: 'Staggered overdose, uncertain timing, or presentation beyond 15 hours — treat regardless of level.' },
      { q: 'When must a paracetamol level be taken?', a: 'At least 4 hours after ingestion — earlier is uninterpretable.' },
      { q: 'Calculate bag 1 of NAC for a 55 kg patient.', a: '150 mg/kg = 8,250 mg (8.25 g) in 200 mL of 5% glucose over 1 hour.' },
      { q: 'What is the anaphylactoid reaction and how is it managed?', a: 'Rate-related histamine release, not allergy — stop, give an antihistamine, restart slower.' },
      { q: 'Why should the INR not be corrected routinely?', a: 'It is the best marker of liver function and the main transplant criterion — correcting it blinds you to the trend.' },
      { q: 'Give the King College criterion that stands alone.', a: 'Arterial pH below 7.3 more than 24 hours after ingestion, after adequate fluid resuscitation.' },
      { q: 'Give the three-part King College criterion.', a: 'Prothrombin time above 100 seconds (INR above 6.5), creatinine above 300, and grade III or IV encephalopathy — all three.' },
      { q: 'Which four stages does paracetamol toxicity pass through?', a: 'Silent 0 to 24 hours, transaminases rising 24 to 72, peak toxicity 72 to 96, then recovery or death.' },
      { q: 'What must be sent in every overdose regardless of history?', a: 'A salicylate level, alongside paracetamol.' },
    ],
    checks: [
      'Timing, dose and staggered nature established precisely',
      'Weight recorded for dose calculation',
      'Paracetamol AND salicylate levels sent',
      'N-acetylcysteine started without waiting where the nomogram does not apply',
      'INR, ALT, creatinine and venous gas sent as the baseline',
      'Glucose checked and rechecked',
      'Infusion continued past 21 hours if anything is still deteriorating',
      'Liver unit contacted early',
      'Mental health assessment arranged before any discharge',
      'Capacity assessed if treatment is refused',
    ],
    related: ['liver_function_tests_hepatocellular_versus_cholestatic'],
  },

  {
    id: 'AS-CASE-0011',
    type: 'case',
    specialty: 'Medicine — Gastroenterology',
    teaching_case: true,
    title: 'CASE: Severe Epigastric Pain Radiating to the Back After a Heavy Weekend',
    short: 'Case: acute pancreatitis',
    summary:
      'A 45-year-old with severe epigastric pain boring through to the back and an amylase of 1,400. Teaches why the enzyme level does NOT indicate severity, why the first 48 hours are about fluid and organ support rather than the pancreas, and why every case needs an ultrasound.',
    domains: ['gastroenterology', 'general_surgery', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case pancreatitis', 'acute pancreatitis case', 'amylase case', 'lipase case',
      'glasgow score', 'modified glasgow', 'grey turner', 'cullen sign', 'get smashed',
      'necrotising pancreatitis',
    ],
    terms: [
      'case', 'acute pancreatitis', 'amylase', 'lipase', 'epigastric pain', 'radiating to back',
      'glasgow imrie', 'apache', 'atlanta classification', 'grey turner', 'cullen',
      'get smashed', 'gallstone pancreatitis', 'ercp', 'necrosis', 'pseudocyst',
      'enteral feeding', 'organ failure',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '45-year-old man with 18 hours of severe constant epigastric pain boring through to the back, relieved slightly by sitting forward, with vomiting, after a weekend of heavy drinking.',

      section_1_clerking: {
        history:
          'The pain began 18 hours ago, built over about an hour, and has been CONSTANT and SEVERE since. It is EPIGASTRIC and BORES THROUGH TO THE BACK. It is slightly RELIEVED BY SITTING FORWARD and worse lying flat. He has vomited repeatedly and retching does not relieve the pain. He has not opened his bowels since it started.',
        reading_the_clues: {
          epigastric_radiating_to_back: 'The pancreas is a RETROPERITONEAL organ lying across the back of the upper abdomen, so its pain characteristically penetrates straight through to the back. This is one of the more useful localising features in abdominal pain.',
          relieved_sitting_forward: 'Leaning forward reduces pressure of the inflamed retroperitoneal pancreas on the coeliac plexus. It is a classic and genuinely helpful sign.',
          vomiting_that_does_not_relieve: 'In bowel obstruction, vomiting often relieves. Here it does not, because the problem is inflammatory rather than obstructive.',
          constant_and_severe: 'Distinguishes it from BILIARY COLIC, which comes in waves and subsides.',
          heavy_drinking: 'One of the two commonest causes.',
        },
        past_medical_history: 'Nil significant. No previous abdominal surgery. No known gallstones.',
        drug_history: 'None regular. Occasional ibuprofen.',
        social_history: 'Drinks about 60 units per week, more at weekends. Smokes 10 a day.',
        vitals: {
          values: 'BP 104/62 mmHg. Pulse 116. Respiratory rate 26. Temperature 37.9. Saturation 92% on air. GCS 15. Capillary glucose 11.8 mmol/L.',
          interpretation:
            'Tachycardic, borderline hypotensive, tachypnoeic and HYPOXAEMIC. The hypoxaemia matters — pancreatitis causes a systemic inflammatory response with capillary leak into the lungs, and hypoxia is an early marker of severity. Hyperglycaemia reflects damage to the endocrine pancreas and the stress response.',
        },
        examination: {
          general: 'Distressed, lying still, sweaty, dehydrated.',
          abdomen:
            'EPIGASTRIC TENDERNESS with VOLUNTARY GUARDING. Bowel sounds reduced — a PARALYTIC ILEUS, where inflammation stops peristalsis. No palpable mass. NO Grey Turner or Cullen sign (see below).',
          the_two_named_signs:
            'GREY TURNER SIGN is bruising of the FLANKS; CULLEN SIGN is bruising around the UMBILICUS. Both indicate retroperitoneal haemorrhage tracking to the skin in severe necrotising pancreatitis. They are RARE, appear LATE (usually days in), and their ABSENCE means nothing. Know them, but never rely on them.',
          chest: 'Reduced air entry at both bases — sympathetic PLEURAL EFFUSIONS are common, and a left-sided effusion is a severity marker.',
        },
      },

      section_2_mechanism: {
        the_core_event:
          'The pancreas produces powerful DIGESTIVE ENZYMES which are normally secreted in an INACTIVE form and only activated in the duodenum. In acute pancreatitis, those enzymes are activated PREMATURELY, INSIDE the pancreas. The organ begins to DIGEST ITSELF — AUTODIGESTION.',
        the_cascade: [
          '1. An insult (alcohol, a gallstone obstructing the pancreatic duct, or another cause) triggers premature activation of trypsinogen to TRYPSIN inside the acinar cells.',
          '2. Trypsin activates the entire cascade of other pancreatic enzymes.',
          '3. Enzymes digest pancreatic tissue, fat and blood vessels, causing inflammation, oedema, haemorrhage and in severe cases NECROSIS.',
          '4. A massive INFLAMMATORY RESPONSE follows, with cytokine release into the circulation.',
          '5. That causes SYSTEMIC CAPILLARY LEAK — fluid pours out of the circulation into the retroperitoneum, the peritoneal cavity and the lungs. THIS IS WHY THE PATIENT IS PROFOUNDLY FLUID-DEPLETED DESPITE NOT BLEEDING, and it is why fluid is the mainstay of treatment.',
          '6. Capillary leak into the lungs causes hypoxaemia and, in severe cases, ACUTE RESPIRATORY DISTRESS SYNDROME.',
          '7. Hypovolaemia and inflammation cause ACUTE KIDNEY INJURY.',
          '8. Fat necrosis binds calcium (saponification), causing HYPOCALCAEMIA.',
        ],
        the_causes_mnemonic_get_smashed:
          'G — GALLSTONES (commonest). E — ETHANOL, alcohol (the other commonest). T — TRAUMA. S — STEROIDS. M — MUMPS and other infections. A — AUTOIMMUNE. S — SCORPION sting. H — HYPERLIPIDAEMIA, HYPERCALCAEMIA, HYPOTHERMIA. E — ERCP (endoscopic retrograde cholangiopancreatography, a procedure that itself causes pancreatitis in a few percent). D — DRUGS (azathioprine, thiazides, sodium valproate, some antiretrovirals). GALLSTONES AND ALCOHOL TOGETHER ACCOUNT FOR ABOUT 80%.',
      },

      section_3_differentials: {
        one_acute_pancreatitis: 'WORKING DIAGNOSIS. Supporting: characteristic pain radiating to the back and relieved by sitting forward, vomiting, alcohol, epigastric tenderness, raised amylase.',
        two_perforated_peptic_ulcer: 'Supporting: severe epigastric pain, and it can raise amylase. Against: pain here built over an hour rather than being instantaneous; the abdomen is not rigid with board-like guarding. Exclude with an ERECT CHEST X-RAY looking for free air under the diaphragm, or CT. THIS MUST BE EXCLUDED — it needs surgery, pancreatitis does not.',
        three_acute_cholecystitis_or_cholangitis: 'Supporting: upper abdominal pain, vomiting, fever. Against: pain is epigastric rather than right upper quadrant, and there is no Murphy sign or jaundice. Note that gallstones CAUSE pancreatitis, so the two coexist.',
        four_myocardial_infarction: 'Supporting: epigastric pain, sweating, vomiting. AN INFERIOR MI CLASSICALLY PRESENTS WITH EPIGASTRIC PAIN AND VOMITING. Exclude with an ECG in every patient with upper abdominal pain — this is a genuine and repeated misdiagnosis.',
        five_ruptured_or_leaking_abdominal_aortic_aneurysm: 'Supporting: severe pain radiating to the back, hypotension. Against: he is 45 with no vascular history. But this is the diagnosis that kills if missed — examine for a pulsatile expansile mass and consider imaging in an older patient.',
        six_mesenteric_ischaemia: 'Supporting: severe pain, and pain out of proportion to examination findings. Consider in an older patient with atrial fibrillation or vascular disease.',
      },

      section_4_investigations: {
        serum_amylase_or_lipase: {
          why: 'To confirm the diagnosis.',
          normal_amylase: 'Roughly 30 to 110 U/L, laboratory-dependent. Diagnosis is supported by a level THREE TIMES the upper limit of normal or more.',
          expected: 'Amylase 1,400 U/L.',
          the_single_most_important_teaching_point:
            'THE LEVEL DOES NOT INDICATE SEVERITY. A patient with a mildly raised amylase can have severe necrotising pancreatitis, and a patient with an enormous level can run a mild course. SEVERITY IS ASSESSED CLINICALLY AND WITH SCORING AND IMAGING — NEVER WITH THE ENZYME. Reassuring yourself because the amylase is "only moderately raised" is a recognised route to a missed severe case.',
          lipase_is_better: 'LIPASE is MORE SENSITIVE and MORE SPECIFIC, and remains raised for 8 to 14 days against 3 to 5 for amylase — so it is preferred where available, and particularly in LATE presentations where amylase has already fallen.',
          when_enzymes_can_be_normal: 'LATE presentation (amylase has fallen) · CHRONIC pancreatitis with a burnt-out gland that has little enzyme left · HYPERTRIGLYCERIDAEMIC pancreatitis, where the lipaemic sample interferes with the assay — a specific trap, since hypertriglyceridaemia is itself a cause.',
          other_causes_of_a_raised_amylase: 'Perforated ulcer, mesenteric ischaemia, bowel obstruction, ruptured ectopic pregnancy, cholecystitis, mumps and salivary disease, diabetic ketoacidosis, renal failure, and MACROAMYLASAEMIA (amylase bound to immunoglobulin, giving a persistently raised level in a WELL patient with a NORMAL lipase).',
        },
        severity_scoring: {
          modified_glasgow_imrie: 'Scored at 48 hours, mnemonic PANCREAS: PaO2 under 8 kPa · Age over 55 · Neutrophils (white cells over 15) · Calcium under 2.0 mmol/L · Renal, urea over 16 mmol/L · Enzymes, LDH over 600 · Albumin under 32 g/L · Sugar, glucose over 10 mmol/L. THREE OR MORE indicates severe pancreatitis.',
          his_score: 'PaO2 low, neutrophils raised, glucose 11.8 — at least 3 already at presentation. SEVERE.',
          other_tools: 'APACHE II, BISAP, and CRP at 48 hours (above 150 mg/L suggests severe disease). The revised ATLANTA CLASSIFICATION defines severity by the presence and persistence of ORGAN FAILURE, which is the most clinically meaningful measure.',
        },
        bloods: 'Full blood count (white cells 18), urea and electrolytes (urea 12.4, creatinine 148 — acute kidney injury), liver function tests, CALCIUM (1.94 — low, from saponification), glucose, LDH, CRP, triglycerides (to identify a hypertriglyceridaemic cause), and a venous gas with lactate.',
        the_liver_tests_that_point_to_the_cause: 'A RAISED ALT strongly suggests a GALLSTONE cause. This is a genuinely useful discriminator and it changes management, because gallstone pancreatitis needs definitive treatment of the gallstones.',
        imaging: {
          ultrasound: 'ABDOMINAL ULTRASOUND IN EVERY CASE, WITHIN 24 HOURS, to look for GALLSTONES and bile duct dilatation. This is not optional — if gallstones are the cause and are not treated, he will get pancreatitis again, and the next episode may be the fatal one.',
          erect_chest_xray: 'To exclude free air under the diaphragm from a perforation, and to assess for pleural effusions.',
          ct: 'NOT needed acutely for diagnosis. Contrast-enhanced CT is used at 72 hours or later to assess for NECROSIS and complications, or earlier if the diagnosis is genuinely uncertain or the patient deteriorates. Scanning too early UNDERESTIMATES necrosis, because it takes days to declare itself.',
          mrcp: 'Magnetic resonance cholangiopancreatography, if a duct stone is suspected but not seen on ultrasound.',
        },
      },

      section_5_management: {
        the_governing_principle:
          'THERE IS NO DRUG THAT TREATS THE PANCREAS. Management in the first 48 hours is AGGRESSIVE FLUID RESUSCITATION, ANALGESIA, ORGAN SUPPORT AND MONITORING FOR DETERIORATION. Everything else follows from finding and treating the cause.',
        a_fluid_the_mainstay: {
          why: 'Capillary leak has moved litres of fluid out of the circulation into the retroperitoneum and third spaces. He is profoundly depleted despite not bleeding, and inadequate resuscitation in the first 24 hours is strongly associated with necrosis, organ failure and death.',
          what: 'BALANCED CRYSTALLOID — for example HARTMANN SOLUTION or compound sodium lactate. Evidence favours a balanced solution over 0.9% sodium chloride, which in large volumes causes a hyperchloraemic acidosis.',
          how_much:
            'Give 500 mL to 1 litre boluses and REASSESS after each. A commonly quoted approach is roughly 5 to 10 mL/kg/hour initially, titrated to response. FOR AN 80 kg MAN that is 400 to 800 mL per hour initially — but the number matters far less than the REASSESSMENT.',
          what_to_titrate_against:
            'URINE OUTPUT above 0.5 mL/kg/hour (catheterise to measure it), heart rate, blood pressure, capillary refill, and a FALLING HAEMATOCRIT and UREA. Do not simply run a fixed rate — over-filling causes pulmonary oedema and abdominal compartment syndrome.',
        },
        b_analgesia: {
          what: 'This pain is severe and must be treated properly. MORPHINE 2.5 to 5 mg intravenously, titrated, using the 10 mg in 10 mL dilution (1 mg/mL), with an antiemetic such as ONDANSETRON 4 mg intravenously or CYCLIZINE 50 mg.',
          the_old_myth:
            'You may be taught that morphine is contraindicated because it causes spasm of the sphincter of Oddi. THIS IS NOT SUPPORTED BY EVIDENCE and it has led to patients in agony being undertreated. Give adequate analgesia. Consider patient-controlled analgesia or epidural in severe cases.',
        },
        c_oxygen_and_monitoring: 'Oxygen to maintain saturation above 94%. Hourly observations, urine output and fluid balance. Consider high-dependency or intensive care early — his Glasgow score already indicates severe disease.',
        d_nutrition: {
          the_modern_answer:
            'FEED EARLY AND ENTERALLY. Older teaching was to keep patients nil by mouth to "rest the pancreas". THIS IS WRONG. Enteral feeding maintains gut mucosal integrity and reduces bacterial translocation, infected necrosis, organ failure and mortality compared with parenteral nutrition.',
          practically: 'Oral diet as tolerated once nausea allows — often within 24 to 48 hours. If not tolerated, a NASOGASTRIC or nasojejunal tube. Parenteral nutrition only if enteral feeding genuinely fails.',
        },
        e_antibiotics: {
          the_rule: 'DO NOT GIVE PROPHYLACTIC ANTIBIOTICS. They do not prevent infected necrosis and they select resistant organisms and fungi.',
          when_they_are_indicated: 'Only for PROVEN or STRONGLY SUSPECTED infection — infected pancreatic necrosis, cholangitis, or another identified source. Infected necrosis is suspected when a patient deteriorates after about a week, with gas in the necrotic collection on CT, and is confirmed by fine-needle aspiration where required.',
        },
        f_treating_the_cause: {
          gallstones: 'If gallstone pancreatitis with CHOLANGITIS or persistent biliary obstruction: URGENT ERCP with sphincterotomy, ideally within 24 to 72 hours. For gallstone pancreatitis without obstruction: CHOLECYSTECTOMY, ideally during the SAME ADMISSION or within 2 weeks — because the risk of a further and potentially worse attack while waiting is substantial.',
          alcohol: 'Alcohol services referral, thiamine, and a withdrawal plan. Withdrawal may declare itself 6 to 72 hours after admission — anticipate it rather than react to it.',
          hypertriglyceridaemia: 'If triglycerides are markedly raised, specific treatment including insulin infusion or plasma exchange may be needed.',
        },
        g_complications_to_watch_for: {
          early_first_week: 'Systemic inflammatory response, ACUTE RESPIRATORY DISTRESS SYNDROME, acute kidney injury, shock, hypocalcaemia, hyperglycaemia, disseminated intravascular coagulation, and ABDOMINAL COMPARTMENT SYNDROME from massive fluid accumulation.',
          late_after_first_week: 'PANCREATIC NECROSIS and INFECTED necrosis · PSEUDOCYST, a collection of pancreatic fluid walled off by granulation tissue, typically appearing at 4 weeks or more and suspected when pain, vomiting or a mass persists · abscess · splenic or portal vein thrombosis · pseudoaneurysm with haemorrhage · chronic pancreatitis and diabetes.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_enzyme_level_does_not_grade_severity:
          'Amylase and lipase confirm the DIAGNOSIS; they say nothing about how sick the patient is or will become. Severity comes from the clinical picture, a validated score, organ failure and imaging. A modest amylase in an unwell patient is more worrying than a huge one in a comfortable patient.',
        bonus_2_fluid_is_the_treatment:
          'There is no drug for the pancreas. The single intervention most associated with outcome in the first 24 hours is ADEQUATE, TITRATED FLUID RESUSCITATION — because the disease removes litres from the circulation through capillary leak. Under-resuscitation drives necrosis and organ failure.',
        bonus_3_feed_them:
          '"Rest the pancreas" is obsolete. Early ENTERAL nutrition reduces infected necrosis, organ failure and death compared with keeping patients nil by mouth on parenteral feeding, because it preserves the gut barrier and prevents bacterial translocation.',
        bonus_4_the_ultrasound_is_not_optional:
          'Every patient needs an abdominal ultrasound within 24 hours to look for gallstones. If gallstones caused it and are not treated — by cholecystectomy in the same admission where possible — a substantial proportion will have another attack, and the next one may be severe.',
        trap_1: 'GET AN ECG. An inferior myocardial infarction classically presents with epigastric pain and vomiting and is repeatedly mistaken for an upper abdominal problem.',
        trap_2: 'Exclude a PERFORATED ULCER with an erect chest film — it raises amylase too, and it needs surgery.',
        trap_3: 'Do not give prophylactic antibiotics. They do not prevent infected necrosis and cause harm.',
        trap_4: 'Do not scan with CT too early — necrosis takes days to declare itself and an early scan underestimates it.',
        trap_5: 'Do not withhold morphine because of the sphincter of Oddi myth. Treat the pain properly.',
        trap_6: 'Grey Turner and Cullen signs are rare, late and unreliable. Their absence excludes nothing.',
        one_line_summary: 'Severe alcohol-related acute pancreatitis. The amylase makes the diagnosis and says nothing about severity; fluid titrated to urine output is the treatment; feed him early; no prophylactic antibiotics; and ultrasound every case for gallstones.',
      },
    },
    warnings: [
      'THE ENZYME LEVEL DOES NOT INDICATE SEVERITY. Severity is clinical, scored and imaged — never enzymatic.',
      'Fluid resuscitation titrated to urine output is the single most important intervention in the first 24 hours.',
      'Do NOT keep the patient nil by mouth to "rest the pancreas" — early enteral feeding reduces infected necrosis, organ failure and death.',
      'Do NOT give prophylactic antibiotics — they do not prevent infected necrosis and select resistant organisms.',
      'ULTRASOUND EVERY CASE within 24 hours to look for gallstones. Untreated gallstones cause recurrence.',
      'Get an ECG — an inferior myocardial infarction presents with epigastric pain and vomiting.',
      'Exclude a perforated ulcer with an erect chest film; it also raises amylase and it needs surgery.',
      'Do not CT too early — necrosis takes days to declare and an early scan underestimates it.',
      'Do not withhold opioid analgesia because of the sphincter of Oddi myth.',
      'Grey Turner and Cullen signs are rare, late and unreliable — their absence excludes nothing.',
      'Lipase is more sensitive and specific than amylase and stays raised for 8 to 14 days — prefer it in late presentation.',
      'Anticipate alcohol withdrawal at 6 to 72 hours rather than reacting to it.',
      'Doses here are teaching examples for an adult. Check your local formulary before prescribing.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Fluid regimens, scoring systems and ERCP timing differ by service.',
      'Amylase reference ranges are laboratory-specific; the three-times-normal threshold is the general principle.',
    ],
    cards: [
      { q: 'Why does pancreatic pain radiate to the back?', a: 'The pancreas is retroperitoneal, lying across the back of the upper abdomen.' },
      { q: 'Does the amylase level indicate severity?', a: 'No. It confirms the diagnosis only — severity is clinical, scored and imaged.' },
      { q: 'Why is lipase preferred?', a: 'More sensitive and specific, and raised for 8 to 14 days versus 3 to 5 for amylase.' },
      { q: 'Recite GET SMASHED.', a: 'Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion, Hyperlipidaemia/calcaemia, ERCP, Drugs.' },
      { q: 'Give the modified Glasgow PANCREAS criteria.', a: 'PaO2 under 8, Age over 55, Neutrophils over 15, Calcium under 2.0, urea over 16, LDH over 600, Albumin under 32, Sugar over 10. Three or more is severe.' },
      { q: 'Why is the patient so fluid-depleted without bleeding?', a: 'Systemic capillary leak moves litres out of the circulation into the retroperitoneum and third spaces.' },
      { q: 'Should the patient be kept nil by mouth?', a: 'No — early enteral feeding reduces infected necrosis, organ failure and mortality.' },
      { q: 'Are prophylactic antibiotics indicated?', a: 'No — they do not prevent infected necrosis and select resistant organisms.' },
      { q: 'Which blood test suggests a gallstone cause?', a: 'A raised ALT.' },
      { q: 'When should CT be performed?', a: 'At 72 hours or later to assess necrosis — earlier scanning underestimates it.' },
      { q: 'What are Grey Turner and Cullen signs, and how useful are they?', a: 'Flank and periumbilical bruising from retroperitoneal haemorrhage — rare, late, and their absence means nothing.' },
      { q: 'What is a pseudocyst and when does it appear?', a: 'A walled-off pancreatic fluid collection, typically at 4 weeks or more, suspected if pain, vomiting or a mass persists.' },
    ],
    checks: [
      'ECG performed to exclude inferior myocardial infarction',
      'Erect chest film to exclude perforation',
      'Amylase or lipase sent, with severity assessed separately',
      'Modified Glasgow score calculated at 48 hours',
      'Fluid given in boluses titrated to urine output, with a catheter',
      'Adequate opioid analgesia prescribed',
      'Enteral feeding started early',
      'No prophylactic antibiotics prescribed',
      'Abdominal ultrasound arranged within 24 hours',
      'ALT reviewed for a gallstone cause',
      'Cholecystectomy planned in the same admission if gallstones',
      'Alcohol withdrawal anticipated and thiamine given',
    ],
    related: ['amylase_and_lipase_diagnosing_pancreatitis'],
  },
];
