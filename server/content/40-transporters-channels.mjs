/**
 * The Electrolyte and Channel Index listed thirteen transporters as bare names.
 * A list of names is not an explanation. Each one is worked through here from
 * scratch: what it is in plain English, where it sits, what it moves, which
 * drug targets it, which disease breaks it, and what the patient looks like.
 */

export default [
  {
    id: 'AS-CHAN-0002',
    type: 'channel',
    title: 'Every Transporter and Channel, One by One — What It Moves, What Blocks It, What Breaks It',
    short: 'Transporters and channels explained',
    summary:
      'Thirteen pumps and channels explained from scratch. Nearly every diuretic, several inherited diseases and a good share of electrolyte medicine come down to one of these, and once you can picture what each one moves, the drug effects and the derangements stop needing memorisation.',
    domains: ['physiology', 'renal', 'pharmacology', 'biochemistry'],
    intents: ['understand'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: [
      'transporters and channels', 'ion channels', 'membrane transport', 'na/k-atpase',
      'sodium potassium pump', 'serca', 'pmca', 'sodium calcium exchanger', 'ncx',
      'sodium hydrogen exchanger', 'nhe', 'nkcc2', 'ncc', 'enac', 'romk', 'cftr',
      'voltage gated channels', 'aquaporin', 'sglt1', 'sglt2', 'glut', 'glut4',
      'bartter syndrome', 'gitelman syndrome', 'liddle syndrome', 'nephrogenic diabetes insipidus',
    ],
    terms: [
      'na/k-atpase', 'sodium potassium pump', 'serca', 'pmca', 'ncx', 'sodium calcium exchanger',
      'nhe', 'sodium hydrogen exchanger', 'nkcc2', 'loop diuretic', 'furosemide', 'ncc', 'thiazide',
      'enac', 'amiloride', 'spironolactone', 'romk', 'cftr', 'cystic fibrosis', 'voltage gated',
      'aquaporin', 'adh', 'vasopressin', 'sglt1', 'sglt2', 'gliflozin', 'glut', 'glut4', 'insulin',
      'bartter', 'gitelman', 'liddle', 'diabetes insipidus', 'digoxin', 'lithium',
    ],
    confirm_locally: true,
    body: {
      how_to_read_this: {
        the_three_kinds: {
          pump: 'Burns ATP to move something AGAINST its gradient — uphill. Slow, but it can build a gradient from nothing. Named "-ATPase".',
          exchanger_or_cotransporter: 'Spends NO energy directly. It rides the gradient a pump already built, carrying a second substance along for the ride (symport, same direction) or in exchange (antiport, opposite directions). This is "secondary active transport".',
          channel: 'A hole with a gate. Things move DOWNHILL through it, fast, when the gate opens. No energy used.',
        },
        the_one_idea_that_ties_it_together:
          'Almost every transporter in the body is ultimately powered by the SODIUM GRADIENT, and that gradient is built by ONE pump — the Na⁺/K⁺-ATPase. Poison that pump and everything downstream fails. That is why it appears first, and why digoxin, which blocks it, has effects everywhere.',
      },

      one_na_k_atpase: {
        plain_english: 'The battery. It sits in the membrane of every cell in the body and constantly pushes sodium OUT and pulls potassium IN.',
        what_it_moves: '3 Na⁺ OUT, 2 K⁺ IN, for every 1 ATP. Because it moves three positives out and only two in, it makes the inside of the cell slightly NEGATIVE — it is electrogenic.',
        why_it_matters: 'It creates the low-sodium, high-potassium interior that every other transporter borrows. It maintains cell volume (stop it and cells swell and burst). It sets the resting membrane potential, which is why nerve and muscle can fire at all. It uses a very large share of the body\'s resting energy — a substantial fraction of basal metabolic rate.',
        the_drug: 'DIGOXIN blocks it at the potassium site. Less sodium leaves, so the Na⁺/Ca²⁺ exchanger (below) cannot expel calcium, calcium accumulates, and the heart contracts harder. That single chain is the whole mechanism of digoxin.',
        the_clinical_link: 'Potassium and digoxin COMPETE for the same site. Low potassium means more digoxin binds — which is why hypokalaemia causes digoxin toxicity at an ordinary dose.',
        when_it_fails: 'Ischaemia (no ATP) → sodium and water rush in → cellular swelling, the earliest visible change in cell injury. Continue and the cell dies.',
      },

      two_ca_atpase_serca_and_pmca: {
        plain_english: 'The calcium vacuum cleaners. Calcium is a signal, and a signal only works if it can be switched OFF. These pumps clear it away.',
        serca: 'Sarco/endoplasmic reticulum Ca²⁺-ATPase — pumps calcium from the cytoplasm back INTO the internal store, ready to be released again. It is what makes a muscle RELAX.',
        pmca: 'Plasma membrane Ca²⁺-ATPase — pumps calcium out of the cell entirely. Low capacity but high affinity, so it handles the fine trimming.',
        why_it_matters: 'Relaxation is an ACTIVE, energy-requiring process. This is not obvious and it explains a lot: rigor mortis occurs because ATP runs out and SERCA stops, so calcium stays high and the muscle cannot let go.',
        the_disease: 'Reduced SERCA activity is a feature of failing heart muscle and contributes to impaired relaxation — one mechanical reason a failing ventricle fills poorly.',
      },

      three_na_ca_exchanger_ncx: {
        plain_english: 'A swap door. It lets sodium fall inwards down its gradient and uses that energy to throw calcium out.',
        what_it_moves: '3 Na⁺ IN, 1 Ca²⁺ OUT, normally. No ATP — it spends the gradient the Na⁺/K⁺-ATPase built.',
        the_critical_property: 'It is REVERSIBLE. If intracellular sodium rises (digoxin, ischaemia), the exchanger runs BACKWARDS and brings calcium IN. That reversal is the therapeutic effect of digoxin and, taken too far, is also part of how ischaemic cells kill themselves with calcium overload.',
      },

      four_na_h_exchanger_nhe: {
        plain_english: 'The acid bailer. It throws hydrogen ions out of the cell, again riding the sodium gradient inwards.',
        why_it_matters: 'It defends intracellular pH, and in the kidney proximal tubule it is the main route for reabsorbing bicarbonate — so it is central to acid-base balance.',
        the_drug_link: 'ACETAZOLAMIDE does not block NHE itself but blocks carbonic anhydrase, which supplies it — the net effect is bicarbonate loss and a metabolic acidosis, which is exactly why it is used in altitude sickness and glaucoma.',
      },

      five_nkcc2_the_loop_diuretic_target: {
        plain_english: 'A minibus that only leaves when all four seats are full. In the thick ascending limb it carries sodium, potassium and two chlorides in together.',
        what_it_moves: '1 Na⁺, 1 K⁺, 2 Cl⁻ — all INTO the cell from the tubular fluid.',
        why_it_matters_enormously: 'The thick ascending limb reabsorbs a large share of filtered sodium and, critically, builds the CONCENTRATED MEDULLARY INTERSTITIUM. That gradient is what lets the body concentrate urine at all. Block it and you lose both the sodium and the ability to concentrate — which is why loop diuretics are so powerful.',
        the_drug: 'LOOP DIURETICS — furosemide, bumetanide, torasemide.',
        the_side_effects_all_follow_from_the_mechanism: 'Potassium recycling through ROMK creates a positive charge in the lumen that drives CALCIUM and MAGNESIUM reabsorption. Block NKCC2 and that driving force disappears — so loop diuretics waste calcium AND magnesium as well as potassium. Hypocalcaemia here is a feature, not a surprise, and it is why loops are used in hypercalcaemia.',
        the_inherited_version: 'BARTTER SYNDROME — a genetic loss of NKCC2 function. It looks exactly like being permanently on a loop diuretic: salt wasting, hypokalaemia, metabolic alkalosis, hypercalciuria with a risk of nephrocalcinosis, and normal or low blood pressure. Presents in childhood.',
      },

      six_ncc_the_thiazide_target: {
        plain_english: 'The same idea, smaller vehicle, further down. In the distal convoluted tubule it carries sodium and chloride in together.',
        what_it_moves: '1 Na⁺, 1 Cl⁻ INTO the cell.',
        the_drug: 'THIAZIDES — bendroflumethiazide, hydrochlorothiazide, indapamide, and chlortalidone.',
        the_calcium_difference_that_confuses_everyone:
          'Loop diuretics LOSE calcium; thiazides RETAIN it. Blocking NCC lowers intracellular sodium, which makes the basolateral Na⁺/Ca²⁺ exchanger work harder, pulling MORE calcium out of the tubular fluid. So thiazides RAISE serum calcium and reduce urinary calcium — which is why they are used to prevent calcium kidney stones, and why an unexplained hypercalcaemia should prompt a look at the drug chart before a parathyroid workup.',
        the_other_effects: 'Hyponatraemia (thiazides are a leading drug cause, especially in thin older women), hypokalaemia, metabolic alkalosis, hyperuricaemia and gout, hyperglycaemia and hyperlipidaemia.',
        the_inherited_version: 'GITELMAN SYNDROME — genetic loss of NCC. Like permanent thiazide: hypokalaemia, alkalosis, HYPOcalciuria and — distinctively — marked HYPOMAGNESAEMIA with muscle cramps and tetany. Presents later and more mildly than Bartter. Remember it as "Gitelman = thiazide, Bartter = loop", and the calcium goes the same way as the drug.',
      },

      seven_enac_the_amiloride_target: {
        plain_english: 'The final sodium door, in the collecting duct. Whatever sodium is left, this is the last chance to take it back.',
        what_it_moves: 'Na⁺ IN, through a channel — no partner, no ATP.',
        the_control: 'ALDOSTERONE increases the number of these channels. So aldosterone → more sodium reabsorbed → water follows → blood pressure rises. Sodium entering leaves the lumen negative, which drives POTASSIUM and HYDROGEN out into the urine — which is why aldosterone excess causes hypokalaemia AND alkalosis together.',
        the_drugs: 'AMILORIDE and triamterene block the channel directly. SPIRONOLACTONE and eplerenone block the aldosterone receptor upstream. Both are potassium-SPARING for the same reason: less sodium in means less potassium out.',
        the_inherited_version: 'LIDDLE SYNDROME — a gain-of-function mutation leaving ENaC permanently open. Severe early hypertension with hypokalaemia and alkalosis, but LOW aldosterone and low renin, because the channel is stuck on without needing the hormone. It looks like Conn syndrome and is treated with amiloride, not spironolactone — spironolactone cannot work because the problem is downstream of the receptor. That distinction is the whole point of knowing it exists.',
      },

      eight_romk: {
        plain_english: 'The potassium exit. A channel that lets potassium leak back out into the tubule.',
        why_it_matters: 'In the thick ascending limb it RECYCLES potassium back into the lumen so NKCC2 keeps working, and creates the positive lumen charge that drives calcium and magnesium reabsorption. In the collecting duct it is the main route by which potassium is actually excreted.',
        the_link: 'Loss-of-function causes a form of Bartter syndrome. It also explains why potassium excretion depends on sodium delivery and aldosterone together.',
      },

      nine_cftr: {
        plain_english: 'A chloride door that is gated by the cell\'s internal signalling. Where chloride goes, water follows — so this channel decides whether secretions are watery or thick.',
        what_it_moves: 'Cl⁻ OUT of epithelial cells (and it regulates other channels, including inhibiting ENaC).',
        the_disease: 'CYSTIC FIBROSIS — autosomal recessive loss of CFTR. Chloride cannot leave, so water does not follow, so every exocrine secretion becomes THICK and STICKY. That one defect explains the whole disease: recurrent chest infection and bronchiectasis, pancreatic insufficiency with steatorrhoea and malnutrition, meconium ileus at birth, biliary disease, and infertility from congenital absence of the vas deferens.',
        the_diagnostic_test_and_why_it_works: 'The SWEAT TEST. In a normal sweat duct CFTR REABSORBS chloride from sweat before it reaches the skin. Without CFTR that reabsorption fails, so the sweat stays SALTY — the basis of the test, and of the old saying that a baby who tastes salty when kissed will not thrive.',
        the_flip_side: 'CHOLERA toxin locks CFTR permanently OPEN. Chloride and water pour into the gut lumen — that is the profuse watery "rice water" diarrhoea. Same channel, opposite fault, opposite disease.',
      },

      ten_voltage_gated_na_k_ca_channels: {
        plain_english: 'Gates that open in response to a change in voltage rather than a chemical. They are how electrical signals travel.',
        the_sequence_of_an_action_potential: 'Voltage-gated Na⁺ channels open → sodium floods in → the cell depolarises rapidly (the upstroke). They then INACTIVATE. Voltage-gated K⁺ channels open → potassium leaves → the cell repolarises. Voltage-gated Ca²⁺ channels let calcium in, which is what actually triggers muscle contraction and neurotransmitter release.',
        the_drugs: 'LOCAL ANAESTHETICS block voltage-gated Na⁺ channels from inside the axon — no upstroke, no signal, no pain. Class I ANTIARRHYTHMICS block cardiac Na⁺ channels. PHENYTOIN and carbamazepine stabilise them in the inactivated state, which is how they stop seizures. CALCIUM CHANNEL BLOCKERS act on the L-type calcium channel — dihydropyridines mainly on vessels, verapamil and diltiazem more on the heart.',
        the_electrolyte_link: 'This is why potassium and calcium disturbances are dangerous: they shift the resting potential and the threshold, so the heart becomes either unexcitable or too excitable. It is also why calcium is given in hyperkalaemia — it does not lower potassium, it restores the gap between resting potential and threshold and stabilises the membrane.',
        the_channelopathies: 'Long QT syndrome, Brugada syndrome, catecholaminergic polymorphic VT, malignant hyperthermia (ryanodine receptor), and the periodic paralyses — all faults in these channels.',
      },

      eleven_aquaporins: {
        plain_english: 'Dedicated water pipes. Water can seep slowly through a membrane on its own; aquaporins let it pour.',
        the_one_that_matters_clinically: 'AQUAPORIN-2 in the collecting duct. ADH (vasopressin) makes the cell insert AQP2 into the membrane. More channels → more water reabsorbed → concentrated urine. No ADH → no channels → dilute urine.',
        the_diseases: {
          central_diabetes_insipidus: 'The pituitary does not MAKE ADH. Responds to desmopressin.',
          nephrogenic_diabetes_insipidus: 'The kidney does not RESPOND to ADH — the AQP2 machinery fails. Does NOT respond to desmopressin, which is the test that separates the two. Causes: LITHIUM (the commonest acquired cause by far), hypercalcaemia, hypokalaemia, and inherited receptor defects.',
          siadh: 'Too much ADH — too many channels — water retained — dilutional HYPONATRAEMIA with concentrated urine in a euvolaemic patient.',
        },
        the_other_one: 'AQUAPORIN-4 in astrocytes is the antigen in NMOSD — the same molecule, an entirely different disease, and the reason aquaporin-4 antibody must be tested before starting MS therapy.',
      },

      twelve_sglt1_and_sglt2: {
        plain_english: 'Glucose hitchhikers. They cannot move glucose on their own, so they bind sodium and let sodium\'s inward rush drag glucose along with it.',
        sglt2: 'In the early proximal tubule. Reabsorbs the large majority of filtered glucose — high capacity, low affinity.',
        sglt1: 'Further along the tubule, and in the SMALL INTESTINE, where it absorbs dietary glucose.',
        the_drug: 'SGLT2 INHIBITORS (the "-gliflozins"). Blocking reabsorption makes the patient pass glucose in the urine, lowering blood glucose in a way that does not depend on insulin. Their benefits in HEART FAILURE and CHRONIC KIDNEY DISEASE turned out to be larger and partly independent of glucose lowering, which is why they are now used in patients without diabetes.',
        the_harms_that_follow_from_the_mechanism: 'Sugar in the urine and the genital area causes GENITAL MYCOTIC INFECTION and, rarely, Fournier gangrene. Osmotic diuresis causes volume depletion. And EUGLYCAEMIC DIABETIC KETOACIDOSIS — ketoacidosis with a near-normal glucose, because the glucose is being excreted. That is a genuine trap: a patient can be in DKA with a glucose that looks reassuring, so check KETONES, not just sugar, in any unwell patient on a gliflozin.',
        the_beautiful_bit: 'SGLT1 in the gut is why ORAL REHYDRATION SOLUTION works. Cholera destroys chloride handling but leaves SGLT1 intact, so giving glucose WITH salt drags sodium — and therefore water — across the gut wall. Glucose alone would not do it; salt alone would not do it. That is why the recipe has both, and it is one of the highest-impact applications of a single transporter in medicine.',
      },

      thirteen_glut_transporters: {
        plain_english: 'Revolving doors for glucose. Unlike SGLT they need no sodium and no energy — glucose simply moves down its gradient, but far faster than it could alone. This is FACILITATED DIFFUSION.',
        the_ones_worth_knowing: {
          glut1: 'Red cells and the blood-brain barrier — constant, baseline supply. Deficiency causes a treatable childhood epilepsy that responds to a ketogenic diet.',
          glut2: 'Liver, pancreatic beta cell, kidney, gut basolateral membrane. Low affinity and high capacity, so it senses HIGH glucose — which is exactly what a glucose SENSOR in the beta cell needs to do.',
          glut3: 'Neurons. High affinity, so the brain takes glucose even when the supply is low. The brain is protected first.',
          glut4: 'Muscle and fat, and the only one that is INSULIN-DEPENDENT. Insulin makes the cell move GLUT4 to the surface. No insulin, or resistance to it, means glucose cannot get into muscle and fat — which is a large part of what diabetes IS.',
        },
        the_thing_worth_understanding: 'EXERCISE also recruits GLUT4 to the membrane, by a pathway that does NOT need insulin. That is why exercise lowers blood glucose in type 2 diabetes, why it can cause hypoglycaemia in someone on insulin, and why it is a genuine treatment rather than general advice.',
      },

      the_summary_table_worth_memorising: {
        loop_diuretic: 'NKCC2 · thick ascending limb · loses K, Ca, Mg · Bartter is the inherited copy',
        thiazide: 'NCC · distal convoluted tubule · loses K and Mg, KEEPS Ca · Gitelman is the inherited copy',
        potassium_sparing: 'ENaC or the aldosterone receptor · collecting duct · keeps K · Liddle is the inherited opposite',
        digoxin: 'Na/K-ATPase · everywhere · raises intracellular Ca via the Na/Ca exchanger',
        gliflozin: 'SGLT2 · proximal tubule · glucose out in the urine',
        local_anaesthetic: 'Voltage-gated Na channel · from inside the axon',
        cystic_fibrosis: 'CFTR · thick secretions everywhere · salty sweat',
        lithium: 'Aquaporin-2 response · nephrogenic diabetes insipidus',
      },
    },
    warnings: [
      'Loop diuretics LOSE calcium; thiazides RETAIN it. An unexplained hypercalcaemia should prompt a look at the drug chart before a parathyroid workup.',
      'Bartter looks like a permanent loop diuretic; Gitelman like a permanent thiazide. The calcium goes the same way as the corresponding drug.',
      'Liddle syndrome does NOT respond to spironolactone — the fault is downstream of the receptor. Use amiloride.',
      'Hypokalaemia causes digoxin toxicity because potassium and digoxin compete for the same site on the Na/K-ATPase.',
      'Calcium in hyperkalaemia does not lower potassium — it stabilises the membrane by restoring the gap between resting potential and threshold.',
      'Lithium is the commonest acquired cause of nephrogenic diabetes insipidus. It does not respond to desmopressin.',
      'SGLT2 inhibitors cause EUGLYCAEMIC ketoacidosis. Check ketones, not just glucose, in any unwell patient on a gliflozin.',
      'Oral rehydration needs BOTH glucose and salt — SGLT1 requires the pair. Sugar alone or salt alone does not work.',
      'Muscle relaxation is active and requires ATP through SERCA. Loss of ATP is why rigor mortis occurs.',
      'Aquaporin-4 is the NMOSD antigen — the same protein family, a completely different disease from diabetes insipidus.',
    ],
    limitations: ['A mechanistic reference. Drug choice, doses and monitoring are protocol-specific and are not given here.'],
    cards: [
      { q: 'What does the Na/K-ATPase move, and at what cost?', a: '3 Na⁺ out, 2 K⁺ in, per ATP — and it is electrogenic, making the inside negative.' },
      { q: 'How does digoxin actually strengthen contraction?', a: 'Blocks Na/K-ATPase → intracellular Na rises → Na/Ca exchanger reverses → calcium accumulates.' },
      { q: 'Which transporter do loop diuretics block, and what else is lost?', a: 'NKCC2 — and with it calcium and magnesium, because the lumen-positive charge disappears.' },
      { q: 'Why do thiazides raise calcium?', a: 'Blocking NCC lowers intracellular sodium, so the Na/Ca exchanger pulls more calcium out of the tubule.' },
      { q: 'Bartter vs Gitelman?', a: 'Bartter = NKCC2 = loop-like, hypercalciuria. Gitelman = NCC = thiazide-like, hypocalciuria with marked hypomagnesaemia.' },
      { q: 'Why does Liddle syndrome not respond to spironolactone?', a: 'ENaC is stuck open independently of aldosterone — the fault is downstream of the receptor. Use amiloride.' },
      { q: 'Why is sweat salty in cystic fibrosis?', a: 'CFTR normally reabsorbs chloride from sweat; without it the chloride stays in.' },
      { q: 'How does cholera toxin act on CFTR?', a: 'Locks it permanently open — chloride and water pour into the gut.' },
      { q: 'Which aquaporin does ADH control, and what fails with lithium?', a: 'Aquaporin-2 — lithium blocks the response, causing nephrogenic diabetes insipidus.' },
      { q: 'Why does oral rehydration need both glucose and salt?', a: 'SGLT1 co-transports them — glucose drags sodium and water across. Neither works alone.' },
      { q: 'Which GLUT is insulin-dependent, and what else recruits it?', a: 'GLUT4 — and exercise recruits it without insulin, which is why exercise lowers glucose.' },
      { q: 'What is euglycaemic DKA?', a: 'Ketoacidosis with near-normal glucose on an SGLT2 inhibitor — check ketones, not sugar.' },
    ],
    checks: ['Diuretic class matched to the expected electrolyte pattern', 'Drug chart reviewed before investigating a calcium abnormality', 'Ketones checked in any unwell patient on an SGLT2 inhibitor', 'Lithium considered in polyuria', 'Potassium corrected before blaming digoxin level alone'],
    related: ['electrolyte_and_channel_index'],
  },
];
