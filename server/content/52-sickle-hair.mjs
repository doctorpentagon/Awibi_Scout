/**
 * Sickle cell disease and hair/scalp disorders.
 *
 * `acute chest syndrome` — a leading cause of death in sickle cell disease —
 * was resolving to ACUTE CORONARY SYNDROME, and the hair disorders that
 * dominate dermatology clinics in African populations were absent entirely
 * (`traction alopecia` landed on Fracture principles).
 */

export default [
  {
    id: 'AS-HAEM-0006',
    type: 'emergency',
    title: 'Sickle Cell Disease — The Crises, and Why Acute Chest Syndrome Kills',
    short: 'Sickle cell crises',
    summary:
      'One point mutation, many crises. The one that kills adults is ACUTE CHEST SYNDROME, and its trap is that it usually develops 2 to 3 days AFTER admission for a painful crisis — in a patient who is improving — driven by the opioids and immobility used to treat the pain.',
    domains: ['haematology', 'emergency_medicine', 'paediatrics'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'sickle cell disease', 'sickle cell anaemia', 'hbss', 'sickle cell crisis',
      'vaso-occlusive crisis', 'painful crisis', 'acute chest syndrome', 'acs sickle',
      'splenic sequestration', 'aplastic crisis', 'hyperhaemolytic crisis', 'priapism',
      'dactylitis', 'hand foot syndrome', 'hydroxyurea', 'hydroxycarbamide', 'sickle trait',
    ],
    terms: [
      'sickle cell', 'hbs', 'hbss', 'hbsc', 'haemoglobin s', 'valine', 'glutamic acid',
      'polymerisation', 'vaso-occlusive', 'painful crisis', 'acute chest syndrome', 'dactylitis',
      'splenic sequestration', 'aplastic crisis', 'parvovirus b19', 'hyposplenism',
      'encapsulated organisms', 'penicillin prophylaxis', 'priapism', 'stroke', 'transcranial doppler',
      'hydroxyurea', 'hydroxycarbamide', 'exchange transfusion', 'avascular necrosis', 'leg ulcer',
      'sickle trait', 'newborn screening',
    ],
    confirm_locally: true,
    body: {
      the_molecular_basis_in_one_paragraph:
        'A single base change in the beta-globin gene substitutes VALINE for GLUTAMIC ACID at position 6. The resulting haemoglobin S POLYMERISES when DEOXYGENATED, forming rigid fibres that distort the red cell into a sickle shape. Sickled cells are stiff, sticky and fragile — so they OBSTRUCT small vessels (causing pain and infarction) and HAEMOLYSE early (causing anaemia, gallstones and a nitric-oxide-depleted vasculopathy). Every complication follows from those two consequences.',

      what_triggers_sickling: 'Anything that deoxygenates, concentrates or acidifies the blood, or slows flow: HYPOXIA, DEHYDRATION, INFECTION, COLD, ACIDOSIS, physical exertion, stress, and pregnancy. Which is exactly why the management of any crisis is oxygen, fluid, warmth and treating infection — you are reversing the triggers.',

      the_crises: {
        vaso_occlusive_painful_crisis: {
          what: 'The commonest. Severe bone pain, typically in the back, chest, long bones and joints, from marrow infarction.',
          the_management_failure_that_defines_it:
            'This pain is SEVERE — frequently comparable to a fracture — and it is systematically UNDER-TREATED. Patients are labelled drug-seeking, made to wait, and given inadequate analgesia. The evidence on this is consistent and uncomfortable: sickle cell patients wait longer in emergency departments than patients with comparable pain from other causes. Analgesia should be given RAPIDLY, titrated to effect, following the patient\'s own individualised plan where one exists — many patients know precisely what works for them and should be believed.',
          also: 'Fluids, oxygen if hypoxic, warmth, and a deliberate search for a precipitating infection. Avoid over-hydration, which contributes to acute chest syndrome.',
          dactylitis: 'Hand-foot syndrome — painful swelling of the hands and feet from infarction of the small tubular bones. Often the FIRST presentation in an infant, from around 6 months as fetal haemoglobin falls.',
        },
        acute_chest_syndrome: {
          what: 'A new pulmonary infiltrate on chest imaging with fever, chest pain, cough, breathlessness or hypoxia. A leading cause of death in sickle cell disease.',
          the_trap_that_matters_most:
            'It typically develops 2 TO 3 DAYS AFTER admission for a painful crisis, in a patient who appears to be improving. The mechanism is a vicious circle created by the treatment itself: chest and back pain causes SPLINTING and shallow breathing · OPIOIDS suppress respiration and cough · immobility and over-hydration cause atelectasis · atelectasis causes local hypoxia · hypoxia causes more sickling in the pulmonary vasculature · which causes more infarction, more pain and more hypoxia. The patient deteriorates rapidly from what looked like a settling crisis.',
          prevention_which_is_the_real_intervention: 'INCENTIVE SPIROMETRY, hourly while awake, in every patient admitted with a painful crisis involving the chest, back or ribs. It is cheap, simple, evidence-supported and very frequently omitted. Add early mobilisation, careful rather than generous fluids, and analgesia adequate to allow deep breathing but monitored for respiratory depression.',
          management: 'Oxygen, antibiotics covering typical and ATYPICAL organisms, bronchodilators, careful fluid balance, adequate analgesia, and TRANSFUSION — simple or EXCHANGE transfusion in severe or deteriorating disease. Escalate early; deterioration can be very fast.',
        },
        splenic_sequestration: {
          what: 'Sudden pooling of blood in the spleen — a rapidly ENLARGING, tender spleen with a precipitous fall in haemoglobin and hypovolaemic SHOCK.',
          who_and_why_it_is_urgent: 'Mainly YOUNG CHILDREN, before autosplenectomy has occurred. It can kill within hours and is a leading cause of early childhood death in sickle cell disease. Treatment is urgent transfusion and volume resuscitation.',
          the_parental_teaching_that_saves_lives: 'Teach parents to PALPATE THE SPLEEN and to bring the child immediately if it enlarges or the child becomes pale and listless. This is a genuinely life-saving piece of education and takes minutes to deliver.',
        },
        aplastic_crisis: 'PARVOVIRUS B19 temporarily shuts down red cell production. Because the red cell lifespan in sickle cell disease is only days rather than months, marrow arrest causes a rapid, profound fall in haemoglobin. The distinguishing feature is a LOW RETICULOCYTE count — the marrow is not responding — which separates it from sequestration and haemolysis, where reticulocytes are high.',
        hyperhaemolytic_crisis: 'Accelerated haemolysis with falling haemoglobin and RISING reticulocytes and bilirubin. Consider a delayed transfusion reaction.',
      },

      the_infection_problem: {
        why_they_are_functionally_asplenic:
          'Repeated splenic infarction destroys the spleen in early childhood — AUTOSPLENECTOMY. The spleen clears ENCAPSULATED organisms, so these patients are at high risk of overwhelming infection with STREPTOCOCCUS PNEUMONIAE, Haemophilus influenzae type b, Neisseria meningitidis and Salmonella.',
        the_consequences_for_practice: 'FEVER IN A CHILD WITH SICKLE CELL DISEASE IS AN EMERGENCY — assess urgently, culture, and give antibiotics promptly rather than observing. Lifelong or prolonged PENICILLIN prophylaxis and full vaccination including pneumococcal, meningococcal, Hib, influenza and hepatitis B are core preventive care, and the reason mortality in childhood fell so sharply where they are delivered.',
        osteomyelitis: 'SALMONELLA is characteristically over-represented in sickle cell osteomyelitis, though Staphylococcus aureus remains commonest overall. It is also genuinely difficult to distinguish bone infarction from osteomyelitis, since both cause fever, pain and raised inflammatory markers — MRI and culture help, and treating for both may be necessary.',
      },

      the_chronic_complications_worth_screening_for: {
        stroke: 'Overt and silent strokes cause major cognitive and physical morbidity. TRANSCRANIAL DOPPLER screening in children identifies high cerebral blood flow velocities that predict stroke, and regular transfusion in those children substantially reduces it — one of the clearest preventive interventions in the disease.',
        priapism: 'A prolonged painful erection. It is a UROLOGICAL EMERGENCY: beyond about 4 hours it risks permanent fibrosis and impotence. It is under-reported because of embarrassment, so ASK about it directly, and teach patients that it needs immediate attention.',
        others: 'AVASCULAR NECROSIS of the femoral and humeral heads · chronic LEG ULCERS over the malleoli, which are painful and slow to heal · PROLIFERATIVE RETINOPATHY (commoner in HbSC disease) requiring regular retinal screening · pulmonary hypertension · sickle nephropathy with hyposthenuria and progressive renal failure · gallstones from chronic haemolysis · and delayed growth and puberty.',
      },

      disease_modifying_treatment: {
        hydroxycarbamide_hydroxyurea: 'Raises FETAL haemoglobin, which does not participate in polymerisation, and so reduces painful crises, acute chest syndrome, transfusion need and mortality. It is the single most important disease-modifying drug, it is cheap, and it is substantially UNDER-USED. It requires blood count monitoring and contraception counselling.',
        transfusion: 'Simple transfusion for acute anaemia; EXCHANGE transfusion to reduce the proportion of HbS rapidly in acute chest syndrome, stroke and before major surgery. Iron overload requires chelation in chronically transfused patients, and alloimmunisation is a real and cumulative problem — extended red cell phenotyping matters.',
        curative_and_new: 'Haematopoietic stem cell transplantation is curative in selected patients. Gene therapies exist but access is extremely limited. Newer agents such as voxelotor and crizanlizumab are available in some settings.',
        the_foundation: 'Folic acid, hydration, avoiding cold and hypoxia, penicillin prophylaxis, vaccination, and — above all — an individualised pain plan the patient carries and staff actually follow.',
      },

      sickle_cell_trait: {
        what_it_is: 'One copy (HbAS). It is NOT a disease and carriers are asymptomatic with normal life expectancy. Saying this plainly matters, because trait is frequently mislabelled as mild disease and causes unnecessary anxiety and discrimination.',
        the_genuine_exceptions_worth_knowing: 'Under EXTREME conditions — severe dehydration, very high altitude, extreme exertion — sickling can occur. Recognised associations include renal papillary necrosis with painless haematuria, hyposthenuria (inability to concentrate urine), exertional rhabdomyolysis, splenic infarction at altitude, and a small risk of renal medullary carcinoma.',
        the_counselling_point: 'The real importance of trait is GENETIC. Two carriers have a one in four chance of an affected child with each pregnancy. Screening, counselling and informed reproductive choice are the interventions that change population burden, and they require the trait to be explained accurately and without stigma.',
      },
    },
    warnings: [
      'ACUTE CHEST SYNDROME typically develops 2 to 3 days AFTER admission for a painful crisis, in a patient who seems to be improving. It is a leading cause of death.',
      'Opioids, splinting, immobility and over-hydration drive it — so incentive spirometry hourly while awake is prevention, and it is very frequently omitted.',
      'Sickle cell pain is severe and systematically UNDER-TREATED. Give analgesia rapidly, follow the patient own plan, and believe them.',
      'FEVER in a child with sickle cell disease is an emergency — they are functionally asplenic and at risk of overwhelming encapsulated infection.',
      'Splenic sequestration can kill within hours. Teach parents to palpate the spleen and return immediately if it enlarges.',
      'A LOW reticulocyte count distinguishes aplastic crisis (parvovirus B19) from sequestration and haemolysis.',
      'PRIAPISM beyond about 4 hours risks permanent impotence — ask about it directly, because it is under-reported.',
      'Cover SALMONELLA as well as Staphylococcus aureus in sickle cell osteomyelitis, and remember infarction and infection are hard to separate.',
      'Hydroxycarbamide reduces crises, acute chest syndrome and mortality, and is substantially under-used.',
      'Transcranial Doppler screening in children identifies stroke risk that transfusion can substantially reduce.',
      'Sickle cell TRAIT is not a disease. Mislabelling it causes anxiety and discrimination — but counsel accurately about reproductive risk.',
      'Extended red cell phenotyping matters — alloimmunisation accumulates with every transfusion.',
    ],
    limitations: ['Transfusion thresholds, hydroxycarbamide dosing, screening intervals and prophylaxis regimens follow local haematology protocol. Scout states no doses.'],
    cards: [
      { q: 'What is the molecular defect in sickle cell disease?', a: 'Valine replaces glutamic acid at position 6 of beta-globin; HbS polymerises when deoxygenated.' },
      { q: 'When does acute chest syndrome typically appear?', a: '2 to 3 days after admission for a painful crisis, often in a patient who seems to be improving.' },
      { q: 'What drives acute chest syndrome?', a: 'Splinting from pain, opioid respiratory suppression, immobility and over-hydration causing atelectasis, hypoxia and more sickling.' },
      { q: 'What is the key preventive measure?', a: 'Incentive spirometry hourly while awake in anyone admitted with chest, back or rib pain.' },
      { q: 'What distinguishes aplastic crisis from sequestration?', a: 'A LOW reticulocyte count — the marrow is arrested, usually by parvovirus B19.' },
      { q: 'Why is fever an emergency in a sickle cell child?', a: 'Autosplenectomy leaves them at risk of overwhelming encapsulated organism infection.' },
      { q: 'What should parents be taught to do?', a: 'Palpate the spleen and return immediately if it enlarges or the child becomes pale and listless.' },
      { q: 'How long before priapism risks permanent damage?', a: 'About 4 hours — it is a urological emergency and is under-reported.' },
      { q: 'How does hydroxycarbamide work?', a: 'It raises fetal haemoglobin, which does not polymerise, reducing crises and mortality.' },
      { q: 'Which organism is over-represented in sickle osteomyelitis?', a: 'Salmonella, though Staphylococcus aureus remains commonest.' },
      { q: 'Is sickle cell trait a disease?', a: 'No — asymptomatic with normal life expectancy, though sickling can occur under extreme conditions.' },
    ],
    checks: ['Analgesia given rapidly and titrated, following the patient own plan', 'Incentive spirometry prescribed on admission', 'Precipitant infection sought', 'Reticulocyte count sent with the full blood count', 'Spleen examined and parents taught to palpate', 'Priapism asked about directly', 'Penicillin prophylaxis and vaccination confirmed', 'Hydroxycarbamide considered', 'Transcranial Doppler arranged in children'],
  },

  {
    id: 'AS-DERM-0009',
    type: 'differential',
    title: 'Hair and Scalp Disorders — Traction Alopecia, CCCA and the Scarring Alopecias',
    short: 'Hair loss and scalp disorders',
    summary:
      'The first question decides everything: is this SCARRING or NON-SCARRING? Non-scarring hair loss can regrow. Scarring alopecia destroys the follicle permanently, so the only achievable goal is to stop it spreading — which makes EARLY recognition the entire treatment.',
    domains: ['dermatology'],
    intents: ['identify', 'classify'],
    hazard: 'moderate',
    urgency: 'urgent',
    aka: [
      'alopecia', 'hair loss', 'traction alopecia', 'central centrifugal cicatricial alopecia',
      'ccca', 'scarring alopecia', 'cicatricial alopecia', 'alopecia areata', 'telogen effluvium',
      'androgenetic alopecia', 'tinea capitis', 'folliculitis decalvans', 'lichen planopilaris',
      'frontal fibrosing alopecia', 'trichotillomania', 'acne keloidalis nuchae',
    ],
    terms: [
      'alopecia', 'hair loss', 'traction', 'fringe sign', 'ccca', 'central centrifugal',
      'cicatricial', 'scarring', 'follicular ostia', 'alopecia areata', 'exclamation mark hair',
      'telogen effluvium', 'anagen', 'telogen', 'androgenetic', 'tinea capitis', 'kerion',
      'wood lamp', 'lichen planopilaris', 'frontal fibrosing', 'folliculitis decalvans',
      'trichotillomania', 'acne keloidalis nuchae', 'relaxer', 'braids', 'weave',
    ],
    confirm_locally: true,
    body: {
      the_question_that_comes_first: {
        scarring_or_not:
          'Look at the scalp itself with good light, and if possible with magnification. In NON-SCARRING alopecia the FOLLICULAR OSTIA — the tiny openings where hairs emerge — are still VISIBLE, even where hair is absent. In SCARRING (cicatricial) alopecia the ostia are LOST, and the skin looks smooth, shiny and featureless.',
        why_it_decides_everything:
          'A non-scarring alopecia has an intact follicle and can regrow. A scarring alopecia has destroyed it, and no treatment will bring that hair back. The entire therapeutic goal in scarring alopecia is therefore to HALT PROGRESSION and preserve what remains — which means it must be recognised EARLY, while there is still something to save. A patient told "it is just hair loss, try this shampoo" for two years arrives with irreversible loss that could largely have been prevented.',
        the_practical_consequence: 'Any patchy hair loss with loss of follicular openings, or with scalp symptoms of itch, burning, pain or tenderness, warrants urgent dermatology referral and usually a biopsy of the ACTIVE EDGE — not the burnt-out centre, which shows only scar.',
      },

      traction_alopecia: {
        what_it_is: 'Hair loss caused by sustained mechanical PULLING on the follicle. It begins as reversible, and becomes PERMANENT AND SCARRING if the traction continues.',
        why_it_deserves_prominence: 'It is among the commonest causes of hair loss in women of African descent and is very substantially under-diagnosed, partly because the practices causing it are normalised and partly because clinicians do not ask about them.',
        the_causes: 'Tight BRAIDS, cornrows, WEAVES and extensions · tight buns and ponytails · chemical RELAXERS, which weaken the shaft and make traction more damaging · heat styling · and, in some communities, tight religious or cultural head coverings worn over pulled-back hair.',
        the_distribution_and_the_key_sign: 'Loss at the MARGINAL hairline — frontal and temporal — where tension is greatest. The FRINGE SIGN is characteristic and diagnostically useful: a retained rim of short, fine hairs along the frontal hairline IN FRONT of the area of loss, because those tiny hairs were too short to be caught in the braid or ponytail and so escaped the traction.',
        early_signs_that_allow_reversal: 'Perifollicular erythema and pustules, tenderness or headache after styling, and broken hairs. At this stage it is FULLY REVERSIBLE.',
        management_and_how_to_have_the_conversation:
          'The treatment is REMOVING THE TRACTION, and that requires a conversation about practices that carry real cultural, professional and personal meaning. Being dismissive or judgemental about them ends the consultation and the patient does not return. What works is explaining the mechanism plainly, acknowledging that hair matters, and negotiating practical modifications: looser styles, varying the style so tension is not always in the same place, avoiding braiding on chemically relaxed hair, removing extensions periodically, and stopping immediately if styling causes pain — pain means damage. Topical or intralesional treatments have a limited adjunctive role; only reducing tension changes the outcome.',
      },

      central_centrifugal_cicatricial_alopecia: {
        what_it_is: 'A primary SCARRING alopecia beginning at the VERTEX or crown and spreading CENTRIFUGALLY — outwards in all directions — hence the name. It predominantly affects women of African descent, most often in middle age.',
        why_it_is_missed: 'It often begins with subtle symptoms — itching, tingling, tenderness or a burning sensation on the crown — or with no symptoms at all, and it is slowly progressive. Patients frequently attribute the loss to styling and present late. Meanwhile the scarring is silently advancing.',
        the_examination: 'A smooth, shiny patch at the crown with LOSS of follicular openings, expanding outwards. There may be perifollicular erythema and scale at the active margin, and polytrichia — several hairs emerging from a single opening — is characteristic.',
        management: 'Diagnosis is confirmed by SCALP BIOPSY from the ACTIVE EDGE. Treatment aims to stop progression: potent topical and intralesional corticosteroids, topical calcineurin inhibitors, and oral agents such as doxycycline for its anti-inflammatory action, or hydroxychloroquine. Gentle hair care and reduced traction and heat. Hair transplantation may be considered only once the disease has been quiescent for a prolonged period.',
        the_thing_to_say_to_the_patient: 'Be honest that hair already lost will not return, while making clear that treatment can protect what remains — and that this is why starting now matters. False promises of regrowth destroy trust and lead to abandonment of treatment that was in fact working.',
      },

      the_common_non_scarring_causes: {
        alopecia_areata: 'Autoimmune. Sudden, well-circumscribed, completely SMOOTH round patches with PRESERVED follicular openings. "EXCLAMATION MARK" hairs at the edge — short broken hairs, narrower at the base — are characteristic. Nail PITTING is common. It can progress to alopecia totalis (whole scalp) or universalis (all body hair). Associated with thyroid disease, vitiligo and other autoimmunity, so check thyroid function. The psychological impact is severe and is routinely under-addressed.',
        telogen_effluvium: 'DIFFUSE shedding 2 to 3 MONTHS after a trigger — childbirth, severe illness, surgery, high fever, major weight loss, iron deficiency, thyroid disease, or a new drug. The delay is the diagnostic clue and the reason patients do not connect it to the event. It is self-limiting and regrows, and explaining the timeline is most of the treatment. Check ferritin, thyroid function and full blood count.',
        androgenetic_alopecia: 'Patterned, gradual, familial. In men, temporal recession and vertex thinning; in women, diffuse thinning over the crown with WIDENING OF THE CENTRAL PART while the frontal hairline is preserved. In a woman with rapid onset plus acne, hirsutism or menstrual irregularity, investigate for HYPERANDROGENISM including polycystic ovary syndrome.',
        tinea_capitis: {
          why_it_must_not_be_missed: 'A fungal infection, mainly of CHILDREN, causing scaly patches with BROKEN hairs, often with occipital or cervical lymphadenopathy. A KERION is a boggy, inflamed, pustular mass that is frequently mistaken for a bacterial abscess and incised — which is wrong and makes it worse.',
          the_critical_treatment_point: 'It requires ORAL antifungal treatment. TOPICAL antifungals do NOT penetrate the hair shaft and will fail. Untreated or under-treated tinea capitis, and untreated kerion, cause PERMANENT SCARRING alopecia in a child. Treat household contacts and consider asymptomatic carriers.',
        },
        trichotillomania: 'Compulsive hair pulling producing bizarre, geometric or irregular patches with hairs of DIFFERENT LENGTHS, because they break at varying points rather than shedding. Requires a sensitive approach and psychological support rather than confrontation.',
      },

      the_other_scarring_alopecias_worth_recognising: 'LICHEN PLANOPILARIS — perifollicular erythema and scale with scarring, often itchy. FRONTAL FIBROSING ALOPECIA — a variant causing a receding frontal hairline band with LOSS OF EYEBROWS, mostly in postmenopausal women, and its incidence is rising. FOLLICULITIS DECALVANS — recurrent pustules with tufted hairs emerging together, usually Staphylococcus-driven. DISCOID LUPUS — scarring plaques with scale, follicular plugging and pigment change, which requires assessment for systemic lupus.',

      acne_keloidalis_nuchae: 'Chronic folliculitis at the nape of the neck and occipital scalp, producing firm papules that coalesce into keloid-like plaques with scarring hair loss. Predominantly affects men of African descent, and is aggravated by close shaving, tight collars and mechanical irritation from clippers. Early treatment prevents disfiguring plaques; late disease often needs surgery.',

      the_wider_point:
        'Hair carries substantial identity, cultural and professional meaning, and hair loss causes real psychological distress that is frequently dismissed as vanity. Much of the classical dermatological literature was written for straight European hair and describes neither the conditions nor the styling practices that dominate these clinics. Asking specifically and non-judgementally about hair practices — relaxers, braids, weaves, heat, frequency — is a clinical history, not small talk, and it is where most of these diagnoses are actually made.',
    },
    warnings: [
      'Decide SCARRING versus NON-SCARRING first — look for follicular openings. Scarring alopecia is permanent, so early recognition is the whole treatment.',
      'Biopsy the ACTIVE EDGE, not the burnt-out centre, which shows only scar.',
      'Traction alopecia is fully reversible early and permanent late. Perifollicular pustules and pain after styling are the warning signs.',
      'Pain during or after styling means damage. Tell patients this plainly.',
      'The FRINGE SIGN — a retained rim of short hairs in front of the loss — is characteristic of traction alopecia.',
      'CCCA begins at the crown with itch, tingling or nothing at all, and scars silently. Do not wait for symptoms.',
      'Be honest that lost hair will not return in scarring alopecia — false promises of regrowth end treatment that was working.',
      'Tinea capitis needs ORAL antifungal therapy. Topicals do not penetrate the hair shaft and will fail.',
      'A KERION is not a bacterial abscess. Incising it is wrong and worsens scarring.',
      'Untreated tinea capitis causes permanent scarring alopecia in a child.',
      'Telogen effluvium follows its trigger by 2 to 3 months — the delay is why patients do not make the connection.',
      'Rapid patterned hair loss in a woman with acne, hirsutism or menstrual irregularity warrants investigation for hyperandrogenism.',
      'Check thyroid function in alopecia areata, and take its psychological impact seriously.',
      'Ask about hair practices specifically and without judgement — it is a clinical history, and it is where the diagnosis is usually made.',
    ],
    limitations: ['Treatment regimens, biopsy practice and referral thresholds are service-specific. Scout states no doses.'],
    cards: [
      { q: 'What single feature separates scarring from non-scarring alopecia?', a: 'Follicular openings — visible in non-scarring, lost in scarring.' },
      { q: 'Why must scarring alopecia be recognised early?', a: 'The follicle is destroyed permanently — the only achievable goal is halting progression.' },
      { q: 'What is the fringe sign?', a: 'A retained rim of short fine hairs in front of the area of loss — characteristic of traction alopecia.' },
      { q: 'Which early signs make traction alopecia reversible?', a: 'Perifollicular erythema and pustules, tenderness or pain after styling, broken hairs.' },
      { q: 'What does CCCA stand for and where does it start?', a: 'Central centrifugal cicatricial alopecia — starts at the crown and spreads outwards.' },
      { q: 'Where should a scalp biopsy be taken from?', a: 'The active edge, not the burnt-out centre.' },
      { q: 'Why do topical antifungals fail in tinea capitis?', a: 'They do not penetrate the hair shaft — oral therapy is required.' },
      { q: 'What is a kerion and what must not be done to it?', a: 'A boggy inflamed fungal mass — it must NOT be incised as an abscess.' },
      { q: 'How long after a trigger does telogen effluvium appear?', a: '2 to 3 months — which is why patients do not connect the two.' },
      { q: 'What are exclamation mark hairs?', a: 'Short broken hairs narrower at the base, at the edge of alopecia areata patches.' },
      { q: 'What is acne keloidalis nuchae aggravated by?', a: 'Close shaving, tight collars and clipper irritation at the nape.' },
    ],
    checks: ['Follicular openings inspected with good light', 'Scarring versus non-scarring decided', 'Hair practices asked about specifically and without judgement', 'Fringe sign looked for', 'Active edge biopsied where scarring is suspected', 'Oral therapy used for tinea capitis', 'Ferritin, thyroid function and full blood count checked in diffuse loss', 'Psychological impact addressed'],
  },
];
