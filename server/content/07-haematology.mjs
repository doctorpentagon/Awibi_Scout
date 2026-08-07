/**
 * Haemostasis, coagulation, and the anaemias.
 *
 * Source review note: the supplied build document lists "Factor VI" as a
 * coagulation factor. There is no Factor VI — the number was withdrawn when it
 * was realised that what had been called VI was activated Factor V. It is not
 * reproduced here.
 */

export default [
  {
    id: 'AS-HAEM-0001',
    type: 'mechanism',
    title: 'Haemostasis — Primary, Secondary and Fibrinolysis',
    short: 'Haemostasis',
    summary:
      'Three sequential systems: platelets plug the hole, the coagulation cascade cements it with fibrin, and fibrinolysis dissolves it once healing is done. Which one has failed determines what the bleeding looks like.',
    domains: ['haematology', 'physiology'],
    intents: ['identify', 'revise'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['haemostasis', 'hemostasis', 'clotting', 'coagulation cascade', 'clotting cascade'],
    terms: ['haemostasis', 'platelet plug', 'coagulation', 'fibrin', 'fibrinolysis', 'von willebrand', 'thrombin', 'plasmin', 'd-dimer'],
    body: {
      primary_haemostasis: {
        what: 'Platelets form a temporary plug within seconds to minutes.',
        steps: [
          'VASOCONSTRICTION — endothelin and reflex spasm reduce flow.',
          'ADHESION — von Willebrand factor bridges exposed collagen to the platelet GPIb receptor.',
          'ACTIVATION — platelets change shape and release ADP, thromboxane A2 and serotonin, recruiting more platelets.',
          'AGGREGATION — fibrinogen bridges GPIIb/IIIa receptors between platelets, forming the plug.',
        ],
        failure_looks_like:
          'MUCOCUTANEOUS bleeding: petechiae, purpura, epistaxis, gum bleeding, menorrhagia, prolonged bleeding immediately after a cut. Think low platelets, platelet dysfunction (aspirin, uraemia) or von Willebrand disease.',
      },
      secondary_haemostasis: {
        what: 'The coagulation cascade converts fibrinogen to a cross-linked fibrin mesh, stabilising the platelet plug over minutes to hours.',
        extrinsic: 'Tissue factor released by injured tissue activates Factor VII. This is the physiological initiator, and it is what the PROTHROMBIN TIME measures.',
        intrinsic: 'Contact activation: XII → XI → IX, with VIII as cofactor. This is what the APTT measures.',
        common: 'Both converge on Factor X. Xa with Va converts prothrombin (II) to thrombin (IIa); thrombin converts fibrinogen (I) to fibrin, and Factor XIII cross-links it.',
        failure_looks_like:
          'DEEP bleeding: haemarthrosis, muscle haematoma, retroperitoneal bleeds, and bleeding that starts HOURS after injury because the platelet plug forms but then falls apart. Think haemophilia, liver disease, warfarin, vitamin K deficiency.',
      },
      natural_anticoagulants: [
        'Antithrombin III — inhibits thrombin and Xa. This is what heparin potentiates.',
        'Protein C and Protein S — inactivate Va and VIIIa. Both are vitamin K dependent.',
        'Tissue factor pathway inhibitor.',
      ],
      fibrinolysis:
        'Tissue plasminogen activator converts plasminogen to plasmin, which digests fibrin into fragments including D-DIMER. A raised D-dimer therefore means fibrin has been formed and broken down somewhere — it is sensitive but very non-specific.',
      vitamin_k_dependent: 'Factors II, VII, IX and X, plus Protein C and Protein S. Remember 1972 — 10, 9, 7, 2.',
      which_test_tells_you_what: {
        pt_inr: 'Extrinsic and common pathway. Prolonged by warfarin, liver disease, vitamin K deficiency, Factor VII deficiency. Factor VII has the SHORTEST half-life, which is why PT rises first in liver failure.',
        aptt: 'Intrinsic and common pathway. Prolonged by heparin, haemophilia A and B, von Willebrand disease, lupus anticoagulant.',
        both_prolonged: 'Common pathway problem, or severe global failure: DIC, liver disease, massive transfusion, Factor X or II deficiency.',
        neither_prolonged_but_bleeding: 'Platelet problem, von Willebrand disease, vascular problem, or FACTOR XIII deficiency — which does not prolong either test.',
      },
    },
    warnings: [
      'A normal PT and APTT do not exclude a bleeding disorder. Platelet function disorders, von Willebrand disease and Factor XIII deficiency can all present with normal screening tests.',
      'D-dimer is sensitive but not specific. It rises in infection, pregnancy, malignancy, surgery, trauma and old age. Use it to rule OUT, not to rule in.',
    ],
    limitations: ['The intrinsic/extrinsic split is a laboratory model, not how clotting works in vivo, where tissue factor initiates everything.'],
    cards: [
      { q: 'Mucocutaneous bleeding versus deep bleeding — which system?', a: 'Mucocutaneous (petechiae, gums, menorrhagia) = platelets or von Willebrand. Deep (haemarthrosis, muscle haematoma) = coagulation factors.' },
      { q: 'Which factors are vitamin K dependent?', a: 'II, VII, IX, X, plus Protein C and Protein S. Remember 1972.' },
      { q: 'Which test does warfarin prolong, and which does heparin?', a: 'Warfarin prolongs PT/INR. Unfractionated heparin prolongs APTT.' },
      { q: 'Why does PT rise first in liver failure?', a: 'Factor VII has the shortest half-life, and it is measured by the PT.' },
      { q: 'Bleeding with a normal PT and APTT — name three causes.', a: 'Platelet function disorder, von Willebrand disease, Factor XIII deficiency.' },
    ],
    checks: ['Bleeding pattern characterised as mucocutaneous or deep', 'Platelet count checked', 'PT/INR and APTT sent', 'Drug history reviewed', 'Liver function checked'],
  },

  {
    id: 'AS-HAEM-0002',
    type: 'reversal',
    title: 'Anticoagulants and Their Reversal',
    short: 'Anticoagulant reversal',
    summary:
      'Which drug, which test, which antidote. In major bleeding the sequence is the same for all of them: stop the drug, support the circulation, give the specific reversal if one exists, and get help.',
    domains: ['haematology', 'emergency_medicine', 'pharmacology'],
    intents: ['prescribe_reference', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['anticoagulant reversal', 'warfarin reversal', 'doac reversal', 'heparin reversal', 'bleeding on anticoagulant'],
    terms: ['warfarin', 'heparin', 'lmwh', 'doac', 'apixaban', 'rivaroxaban', 'dabigatran', 'protamine', 'vitamin k', 'pcc', 'idarucizumab', 'andexanet', 'inr'],
    confirm_locally: true,
    body: {
      the_drugs: [
        {
          drug: 'Warfarin',
          mechanism: 'Blocks vitamin K epoxide reductase, so II, VII, IX, X, Protein C and Protein S cannot be carboxylated',
          monitor: 'INR',
          reversal: 'Vitamin K (IV for major bleeding, oral for high INR without bleeding) PLUS prothrombin complex concentrate. Fresh frozen plasma only if PCC is unavailable.',
          note: 'Vitamin K takes 6–12 hours to work. PCC works in minutes. Major bleeding needs BOTH — PCC for now, vitamin K so the reversal holds.',
        },
        {
          drug: 'Unfractionated heparin',
          mechanism: 'Potentiates antithrombin III against thrombin and Xa',
          monitor: 'APTT',
          reversal: 'Protamine sulphate. Fully reverses UFH.',
        },
        {
          drug: 'Low molecular weight heparin (enoxaparin, dalteparin)',
          mechanism: 'Mainly anti-Xa',
          monitor: 'Anti-Xa level where monitoring is needed (renal impairment, extremes of weight, pregnancy)',
          reversal: 'Protamine gives only PARTIAL reversal — roughly 60%. There is no complete antidote.',
        },
        {
          drug: 'Dabigatran',
          mechanism: 'Direct thrombin inhibitor',
          monitor: 'Thrombin time is very sensitive; a normal TT effectively excludes it',
          reversal: 'Idarucizumab. Dabigatran is also dialysable, unlike the other DOACs.',
        },
        {
          drug: 'Apixaban, rivaroxaban, edoxaban',
          mechanism: 'Direct Factor Xa inhibitors',
          monitor: 'Drug-specific anti-Xa assay',
          reversal: 'Andexanet alfa where available; otherwise prothrombin complex concentrate. Not dialysable — highly protein bound.',
        },
      ],
      in_major_bleeding: [
        'Stop the anticoagulant.',
        'Airway, breathing, circulation. Large-bore access, cross-match, activate the major haemorrhage protocol if needed.',
        'Mechanical control of the bleeding point where possible.',
        'Send FBC, coagulation screen, fibrinogen, renal and liver function, group and save.',
        'Give the specific reversal agent per the local protocol.',
        'Tranexamic acid where indicated by the local pathway.',
        'Ask WHEN the last dose was — for a DOAC this determines how much drug is even present.',
      ],
      heparin_induced_thrombocytopenia: {
        what: 'An immune reaction to heparin-PF4 complexes causing a FALL in platelets 5–10 days after starting heparin — and, paradoxically, THROMBOSIS rather than bleeding.',
        recognise: 'Use the 4Ts score: Thrombocytopenia, Timing, Thrombosis, and oTher causes excluded.',
        action: 'Stop ALL heparin including flushes and LMWH, and start a non-heparin anticoagulant. Do NOT simply stop and observe — the thrombotic risk is high.',
      },
    },
    warnings: [
      'In HIT, stopping heparin alone is not enough. The patient needs an alternative anticoagulant because the risk is thrombosis, not bleeding.',
      'Vitamin K alone will not reverse warfarin quickly enough for major bleeding. Give prothrombin complex concentrate as well.',
      'Protamine only partially reverses LMWH.',
      'Always establish the timing of the last DOAC dose. Reversal decisions depend on it.',
      'Doses, agents and availability differ by institution. Follow the local major haemorrhage and reversal protocol.',
    ],
    limitations: ['Reversal agents are not universally available. Where they are not, PCC and supportive care are the mainstay.'],
    cards: [
      { q: 'Reversal for warfarin in major bleeding?', a: 'Prothrombin complex concentrate for immediate effect PLUS intravenous vitamin K so the reversal holds.' },
      { q: 'Which anticoagulant is dialysable?', a: 'Dabigatran. The Xa inhibitors are highly protein bound and are not.' },
      { q: 'Antidote to unfractionated heparin?', a: 'Protamine sulphate — full reversal. Only partial for LMWH.' },
      { q: 'Platelets fall a week after starting heparin — what is the risk?', a: 'Heparin-induced thrombocytopenia, and the risk is THROMBOSIS. Stop all heparin and start an alternative anticoagulant.' },
    ],
    checks: ['Anticoagulant and timing of last dose established', 'Coagulation screen and fibrinogen sent', 'Specific reversal given per protocol', 'Major haemorrhage protocol considered', 'Haematology contacted'],
  },

  {
    id: 'AS-HAEM-0003',
    type: 'classification',
    title: 'Anaemia — Classification by Cell Size and by Mechanism',
    short: 'Anaemia classification',
    summary:
      'Two questions sort every anaemia. What is the MCV — small, normal or large? And what are the reticulocytes doing — is the marrow responding or not? Those two answers narrow it to a handful of causes.',
    domains: ['haematology'],
    intents: ['classify', 'interpret'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['anaemia', 'anemia', 'microcytic', 'macrocytic', 'normocytic', 'low haemoglobin'],
    terms: ['anaemia', 'mcv', 'reticulocyte', 'ferritin', 'microcytic', 'macrocytic', 'normocytic', 'megaloblastic', 'iron deficiency', 'thalassaemia'],
    confirm_locally: true,
    body: {
      step_1_the_mcv: {
        microcytic:
          'MCV low. Iron deficiency (commonest worldwide), thalassaemia, anaemia of chronic disease (can be either), sideroblastic anaemia, lead poisoning. Mnemonic: TAILS.',
        normocytic:
          'MCV normal. Acute blood loss, anaemia of chronic disease, renal failure (erythropoietin deficiency), aplastic anaemia, haemolysis early, mixed deficiencies, hypothyroidism.',
        macrocytic:
          'MCV high. Split into MEGALOBLASTIC (B12 or folate deficiency, methotrexate, hydroxycarbamide) and NON-megaloblastic (alcohol, liver disease, hypothyroidism, myelodysplasia, and RETICULOCYTOSIS — young red cells are large).',
      },
      step_2_the_reticulocytes: {
        high: 'The marrow is responding. The problem is LOSS or DESTRUCTION — bleeding or haemolysis.',
        low_or_normal: 'The marrow is not responding. The problem is PRODUCTION — deficiency, marrow failure, chronic disease, renal failure.',
        why_it_matters: 'This single test splits every anaemia into "losing it" versus "not making it", which is more useful than the MCV alone.',
      },
      iron_deficiency_versus_chronic_disease: {
        problem: 'Both can be microcytic with a low serum iron. Distinguishing them changes management completely.',
        iron_deficiency: 'FERRITIN LOW, TIBC/transferrin HIGH, transferrin saturation low, RDW high.',
        chronic_disease: 'Ferritin NORMAL OR HIGH (it is an acute phase protein), TIBC LOW, transferrin saturation low.',
        the_trap:
          'Ferritin rises with any inflammation, so a "normal" ferritin in an inflamed patient can conceal true iron deficiency. Where the picture is mixed, transferrin saturation and the response to iron help.',
      },
      b12_versus_folate: {
        shared: 'Both cause megaloblastic anaemia with macro-ovalocytes and HYPERSEGMENTED NEUTROPHILS on the film, plus glossitis and angular stomatitis.',
        the_difference:
          'B12 deficiency causes NEUROLOGICAL disease — subacute combined degeneration of the cord, peripheral neuropathy, cognitive change. Folate deficiency does NOT.',
        the_critical_rule:
          'Never treat with folate alone before excluding B12 deficiency. Folate corrects the anaemia while the neurological damage progresses, and that damage can become irreversible. Check both, and if B12 is low or unclear, treat B12 first or together.',
        pregnancy: 'Folate prevents neural tube defects and is given pre-conception and in the first trimester.',
      },
      the_essential_next_step:
        'Iron deficiency in an adult man or a post-menopausal woman is gastrointestinal blood loss until proven otherwise, and needs investigation of the gut. Do not simply prescribe iron and stop.',
    },
    warnings: [
      'Iron deficiency anaemia in an adult male or post-menopausal female requires investigation for gastrointestinal malignancy. Treating with iron alone and not investigating is a recognised cause of delayed cancer diagnosis.',
      'Do NOT give folate alone when B12 deficiency has not been excluded. It corrects the blood picture while the neurological damage worsens.',
      'A normal ferritin does not exclude iron deficiency in an inflamed patient — ferritin is an acute phase protein.',
    ],
    limitations: ['Mixed deficiency is common and produces a normal MCV with a wide RDW. Reference ranges vary by laboratory, age, sex, altitude and pregnancy.'],
    cards: [
      { q: 'Two questions that classify any anaemia?', a: 'What is the MCV, and what are the reticulocytes doing?' },
      { q: 'Iron deficiency versus anaemia of chronic disease — the discriminator?', a: 'Ferritin and TIBC. Iron deficiency: ferritin low, TIBC high. Chronic disease: ferritin normal or high, TIBC low.' },
      { q: 'What must you exclude before treating with folate?', a: 'B12 deficiency. Folate alone corrects the anaemia while neurological damage progresses.' },
      { q: 'Which macrocytic causes are NOT megaloblastic?', a: 'Alcohol, liver disease, hypothyroidism, myelodysplasia and reticulocytosis.' },
      { q: 'High reticulocytes mean what?', a: 'The marrow is responding — the problem is blood loss or haemolysis, not production.' },
    ],
    checks: ['MCV and RDW noted', 'Reticulocyte count sent', 'Ferritin, iron studies, B12 and folate sent', 'Blood film requested', 'GI investigation considered in iron deficiency', 'B12 excluded before folate replacement'],
  },

  {
    id: 'AS-HAEM-0004',
    type: 'test',
    title: 'Coombs Test — Direct and Indirect, and What Each Answers',
    short: 'Coombs test',
    summary:
      'The DIRECT test asks whether the patient\'s own red cells are already coated with antibody. The INDIRECT test asks whether the patient\'s serum contains antibody that would attack donor cells. One diagnoses haemolysis, the other cross-matches blood.',
    domains: ['haematology', 'laboratory_medicine'],
    intents: ['interpret', 'investigate'],
    hazard: 'high',
    urgency: 'urgent',
    aka: ['coombs test', 'dat', 'direct antiglobulin test', 'indirect antiglobulin test', 'iat', 'antiglobulin test'],
    terms: ['coombs', 'dat', 'iat', 'antiglobulin', 'aiha', 'haemolysis', 'crossmatch', 'rhesus', 'agglutination'],
    body: {
      the_principle:
        'Human antibodies bound to red cells are too small to bridge two cells and cause visible clumping. Anti-human globulin (Coombs reagent) binds those antibodies and bridges the cells, producing visible agglutination. It makes an invisible coating visible.',
      direct_test_dat: {
        question: 'Are antibodies or complement ALREADY stuck to this patient\'s red cells, in the body?',
        method: 'Wash the patient\'s red cells, add anti-human globulin, look for agglutination.',
        positive_means: 'Immune-mediated destruction of red cells.',
        causes: [
          'AUTOIMMUNE haemolytic anaemia — warm (IgG) or cold (IgM with C3 on the cells)',
          'Drug-induced immune haemolysis — methyldopa, penicillins, cephalosporins, quinine',
          'Haemolytic disease of the newborn — maternal IgG crossing the placenta',
          'Haemolytic transfusion reaction',
          'Underlying disease: lymphoma, chronic lymphocytic leukaemia, lupus, Evans syndrome',
        ],
        caveat: 'A positive DAT can occur without haemolysis, and haemolysis can occur with a negative DAT. Interpret it alongside haemoglobin, reticulocytes, LDH, bilirubin, haptoglobin and the film.',
      },
      indirect_test_iat: {
        question: 'Does this patient\'s SERUM contain antibodies that would attack red cells it has not yet met?',
        method: 'Incubate patient serum with test red cells, then add anti-human globulin.',
        used_for: [
          'CROSS-MATCHING before transfusion — the main use',
          'Antibody screening in pregnancy, especially in a rhesus-negative mother',
          'Detecting alloantibodies after previous transfusions',
        ],
      },
      warm_versus_cold_aiha: {
        warm: 'IgG, binds best at 37°C, EXTRAvascular destruction in the spleen, spherocytes on the film. Causes: idiopathic, lupus, lymphoma, CLL, drugs. Responds to corticosteroids in most patients; rituximab and splenectomy are later options.',
        cold: 'IgM, binds best in the cold, fixes complement so destruction is INTRAvascular, red cell agglutination on the film. Causes: Mycoplasma, Epstein-Barr virus, lymphoproliferative disease. Steroids work poorly — the mainstays are keeping the patient WARM and treating the cause.',
        the_practical_point: 'In cold AIHA, warming the patient and warming transfused blood matters more than immunosuppression.',
      },
      dat_negative_haemolysis:
        'If haemolysis is confirmed but the DAT is negative, the cause is non-immune: hereditary spherocytosis, G6PD deficiency, sickle cell disease, thalassaemia, mechanical (prosthetic valve), microangiopathic (TTP, HUS, DIC), malaria, or paroxysmal nocturnal haemoglobinuria.',
    },
    warnings: [
      'A positive DAT is not by itself a diagnosis of haemolysis. Confirm with haemoglobin, reticulocytes, LDH, bilirubin, haptoglobin and the blood film.',
      'In cold AIHA, transfused blood should be warmed and the patient kept warm. Cold blood can precipitate severe haemolysis.',
      'A negative DAT does not exclude haemolysis — consider the non-immune causes.',
    ],
    limitations: ['DAT sensitivity is limited at low levels of cell-bound antibody; specialised techniques may be needed.'],
    cards: [
      { q: 'What does the DIRECT Coombs test ask?', a: 'Are antibodies already bound to the patient\'s own red cells in vivo?' },
      { q: 'What is the INDIRECT test mainly used for?', a: 'Cross-matching blood, and antibody screening in pregnancy.' },
      { q: 'Warm AIHA — antibody, site of destruction, film?', a: 'IgG, extravascular in the spleen, spherocytes.' },
      { q: 'Cold AIHA — what matters most in management?', a: 'Keeping the patient warm and treating the underlying cause. Steroids work poorly.' },
      { q: 'Haemolysis with a negative DAT — name three causes.', a: 'Hereditary spherocytosis, G6PD deficiency, microangiopathic haemolysis (TTP/HUS/DIC). Also malaria, sickle cell, mechanical valve.' },
    ],
    checks: ['Haemolysis confirmed with LDH, bilirubin, haptoglobin and reticulocytes', 'Blood film examined', 'DAT sent', 'Drug chart reviewed', 'Patient and blood kept warm if cold AIHA suspected'],
  },

  {
    id: 'AS-HAEM-0005',
    type: 'pattern',
    title: 'Aplastic Anaemia and the Crises That Complicate Chronic Haemolysis',
    short: 'Aplastic anaemia & crises',
    summary:
      'Aplastic anaemia is marrow failure producing PANcytopenia with a hypocellular marrow. An aplastic CRISIS is a different thing entirely — a temporary shutdown of red cell production in someone who already has chronic haemolysis, usually caused by parvovirus B19.',
    domains: ['haematology', 'infectious_disease'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: ['aplastic anaemia', 'aplastic anemia', 'aplastic crisis', 'pancytopenia', 'marrow failure', 'sequestration crisis'],
    terms: ['aplastic', 'pancytopenia', 'parvovirus', 'b19', 'sickle cell', 'reticulocyte', 'bone marrow', 'camitta', 'crisis'],
    body: {
      aplastic_anaemia: {
        what: 'Failure of haematopoietic stem cells, giving PANCYTOPENIA — anaemia, neutropenia and thrombocytopenia together — with a HYPOcellular marrow replaced by fat.',
        causes: [
          'Idiopathic, immune-mediated — about half of cases',
          'Drugs: chloramphenicol, carbamazepine, sulphonamides, gold, chemotherapy',
          'Viruses: hepatitis (seronegative), Epstein-Barr virus, HIV',
          'Chemicals: benzene, insecticides',
          'Radiation',
          'Inherited: Fanconi anaemia, dyskeratosis congenita',
        ],
        presentation: 'Anaemia (fatigue, pallor), INFECTION from neutropenia, and BLEEDING from thrombocytopenia. The infection and the bleeding are what kill.',
        diagnosis: 'Full blood count showing pancytopenia, LOW reticulocytes, and a bone marrow trephine showing hypocellularity. The trephine is essential — an aspirate alone is not enough.',
        management: 'Supportive care, remove the cause, immunosuppression (antithymocyte globulin and ciclosporin) or stem cell transplant in suitable patients. Refer to haematology urgently.',
      },
      aplastic_crisis: {
        what: 'A TEMPORARY arrest of red cell production, lasting about 7–10 days, in a patient with chronic haemolysis whose red cells survive only days rather than months.',
        cause: 'PARVOVIRUS B19, which infects red cell precursors specifically.',
        who: 'Sickle cell disease, hereditary spherocytosis, thalassaemia — any chronic haemolytic state.',
        the_key_finding: 'Haemoglobin falls sharply and RETICULOCYTES DISAPPEAR (under 1%). White cells and platelets are usually NORMAL — that is what separates it from true aplastic anaemia.',
        why_it_is_dangerous: 'A person with normal red cell survival tolerates ten days without production. Someone whose red cells last twenty days does not — the haemoglobin falls off a cliff.',
        management: 'Supportive, transfusion as needed. It self-resolves as antibody develops. Parvovirus is infectious — isolate from pregnant staff and immunosuppressed patients.',
      },
      the_other_crises_in_sickle_cell: {
        vaso_occlusive: 'The commonest. Severe pain from sickled cells obstructing microvasculature. Reticulocytes HIGH.',
        sequestration: 'Sudden pooling of blood in the SPLEEN (or liver in older patients). Rapidly falling haemoglobin with an ENLARGING spleen and HIGH reticulocytes. A paediatric emergency.',
        haemolytic: 'Accelerated haemolysis — falling haemoglobin, HIGH reticulocytes, rising bilirubin and LDH.',
        the_discriminator: 'RETICULOCYTES. Low means aplastic crisis. High means sequestration or haemolysis — and then the spleen size separates those two.',
      },
    },
    warnings: [
      'Pancytopenia requires urgent haematology referral and a bone marrow trephine. Do not attribute it to a minor illness.',
      'In a child with sickle cell disease and a rapidly falling haemoglobin, palpate the spleen. Splenic sequestration can kill within hours and needs immediate transfusion.',
      'Parvovirus B19 is dangerous to pregnant contacts (hydrops fetalis) and to the immunosuppressed. Isolate appropriately.',
      'Neutropenic fever in aplastic anaemia is a medical emergency — antibiotics within the hour per the local protocol.',
    ],
    limitations: ['Severity criteria for aplastic anaemia depend on marrow cellularity plus neutrophil, platelet and reticulocyte counts; confirm the version your unit uses.'],
    cards: [
      { q: 'Aplastic anaemia versus aplastic crisis — the blood count difference?', a: 'Aplastic anaemia is PANcytopenia. An aplastic crisis has a low haemoglobin and low reticulocytes but usually NORMAL white cells and platelets.' },
      { q: 'What causes an aplastic crisis?', a: 'Parvovirus B19, which infects red cell precursors.' },
      { q: 'Which single test separates the sickle cell crises?', a: 'The reticulocyte count. Low = aplastic. High = sequestration or haemolysis.' },
      { q: 'Falling haemoglobin with an enlarging spleen in a child with sickle cell disease?', a: 'Splenic sequestration. An emergency — transfuse.' },
      { q: 'What investigation is essential in pancytopenia?', a: 'Bone marrow trephine biopsy.' },
    ],
    checks: ['Full blood count with reticulocytes', 'Blood film examined', 'Spleen palpated', 'Parvovirus serology if aplastic crisis suspected', 'Haematology referral', 'Neutropenic sepsis pathway if febrile'],
  },
];
