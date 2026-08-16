/**
 * Dental surgery — from the Dental Surgery compilation (428 pages, 723 topics).
 *
 * Scout had NOTHING on dentistry, despite dental infection being a genuine
 * cause of airway death and dental pain being one of the commonest reasons
 * people present anywhere.
 *
 * Written from absolute zero: a reader here is assumed never to have been
 * taught a single dental term.
 */

export default [
  {
    id: 'AS-DENT-0001',
    type: 'anatomy_physiology',
    title: 'Dentistry From Zero — The Language, the Numbering and Why Tooth Pain Behaves As It Does',
    short: 'Dental foundations',
    summary:
      'You cannot describe a dental problem without the vocabulary, and you cannot refer one without the numbering. The key biological fact is that DENTINE contains fluid-filled tubules connected to the nerve — which is why a tooth hurts to cold, and why the pain tells you how deep the damage has gone.',
    domains: ['dentistry', 'anatomy'],
    intents: ['understand', 'classify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: [
      'dental anatomy', 'tooth anatomy', 'dental terminology', 'tooth numbering', 'fdi notation',
      'universal numbering', 'palmer notation', 'dental formula', 'enamel', 'dentine', 'dental pulp',
      'periodontium', 'periodontal ligament', 'cementum', 'occlusion', 'dentition', 'diastema',
      'mesial', 'distal', 'buccal', 'lingual', 'palatal', 'occlusal',
    ],
    terms: [
      'dental', 'tooth', 'teeth', 'enamel', 'dentine', 'dentin', 'pulp', 'cementum',
      'periodontium', 'periodontal ligament', 'alveolar bone', 'gingiva', 'crown', 'root',
      'mesial', 'distal', 'buccal', 'labial', 'lingual', 'palatal', 'occlusal', 'incisal',
      'fdi', 'universal numbering', 'palmer', 'quadrant', 'incisor', 'canine', 'premolar',
      'molar', 'third molar', 'wisdom tooth', 'deciduous', 'primary dentition', 'eruption',
      'dentinal tubule', 'hydrodynamic theory', 'diastema', 'occlusion',
    ],
    confirm_locally: false,
    body: {
      the_words_first: {
        why: 'Dental notes are unreadable without these, and a referral that says "the back tooth on the left hurts" cannot be acted on. Six terms cover almost everything.',
        mesial: 'Towards the MIDLINE of the dental arch, following the curve of the arch. (Think: mesial = middle.)',
        distal: 'AWAY from the midline, following the arch backwards.',
        buccal: 'The surface facing the CHEEK. Used for back teeth.',
        labial: 'The surface facing the LIP. Used for front teeth. Buccal and labial are both "outer".',
        lingual: 'The surface facing the TONGUE. Used for LOWER teeth.',
        palatal: 'The surface facing the PALATE. Used for UPPER teeth. Lingual and palatal are both "inner".',
        occlusal: 'The BITING surface of a back tooth (premolar or molar).',
        incisal: 'The BITING EDGE of a front tooth (incisor or canine).',
        apical_and_coronal: 'APICAL means towards the root tip; CORONAL means towards the crown. These appear constantly in descriptions of disease spreading.',
      },

      the_teeth_themselves: {
        the_four_classes: {
          incisors: 'Eight in the adult, four upper and four lower. Chisel-shaped, for CUTTING.',
          canines: 'Four, one per quadrant. Pointed, for TEARING. They have the longest roots of any tooth, which matters in extraction.',
          premolars: 'Eight in the adult, none in children. For crushing and tearing.',
          molars: 'Twelve in the adult, including the THIRD MOLARS (wisdom teeth). Broad occlusal surfaces for GRINDING. Their deep grooves and difficult access make them the commonest site of caries.',
        },
        dental_formula: 'Adult (permanent) dentition: 2 incisors, 1 canine, 2 premolars, 3 molars per quadrant — written 2-1-2-3, giving 32 teeth. Child (primary/deciduous) dentition: 2 incisors, 1 canine, 0 premolars, 2 molars — written 2-1-0-2, giving 20 teeth.',
        the_quadrants: 'The mouth is divided into four quadrants by the midline and the bite line: upper right, upper left, lower left, lower right.',
      },

      tooth_numbering_systems: {
        why_there_are_three: 'Different countries and different eras adopted different conventions, and all three are still in use. A referral using one system read by someone assuming another identifies the WRONG TOOTH — which in dentistry means extracting the wrong tooth. Always state which system you are using.',
        fdi_two_digit: {
          what: 'The international standard (Fédération Dentaire Internationale), and the one to learn if you learn only one.',
          how: 'TWO digits. The FIRST is the quadrant, the SECOND is the tooth counting from the midline outwards. Adult quadrants are 1 (upper right), 2 (upper left), 3 (lower left), 4 (lower right) — numbered clockwise as seen by the examiner facing the patient. Teeth are 1 to 8 from the central incisor to the third molar.',
          examples: 'Tooth 11 is the upper right central incisor. Tooth 48 is the lower right third molar (wisdom tooth). It is spoken as "one-one" and "four-eight", NOT "eleven" and "forty-eight".',
          children: 'Primary teeth use quadrants 5, 6, 7, 8 in the same order, with teeth 1 to 5. So tooth 51 is the upper right primary central incisor.',
        },
        universal_numbering: 'Used mainly in the United States. Adult teeth are numbered 1 to 32 in a single continuous sweep, starting at the upper right third molar (1), running across to the upper left third molar (16), dropping to the lower left third molar (17), and finishing at the lower right third molar (32). Primary teeth use letters A to T.',
        palmer_notation: 'Uses a symbol representing the quadrant (a bracket shape) with a number 1 to 8 inside it. Still used by some orthodontists and in older records. Difficult to type, which is why it has largely given way to FDI.',
      },

      the_structure_of_a_tooth_and_why_it_explains_the_pain: {
        enamel: 'The outermost layer of the crown. The HARDEST substance in the body, about 96% mineral. It contains NO nerves and NO blood supply, so enamel damage is PAINLESS. Critically, it has NO CELLS, which means it CANNOT REGENERATE — enamel lost is lost permanently, and this is why dental disease is cumulative and why prevention matters so much.',
        dentine: {
          what: 'The bulk of the tooth, beneath enamel. Softer, more organic, and — the key point — permeated by millions of DENTINAL TUBULES, microscopic fluid-filled channels running from the outer surface inward to the pulp.',
          why_this_explains_everything:
            'Each tubule contains fluid and a process of the pulp cell. When dentine is exposed — by caries, wear, a fracture, or gum recession exposing the root — stimuli such as COLD, heat, sweet foods or air cause the fluid in these tubules to MOVE. That movement mechanically stimulates the nerve endings at the pulp end. This is the HYDRODYNAMIC THEORY of dentine sensitivity, and it explains why a tooth hurts sharply to cold and why the pain stops as soon as the stimulus is removed.',
          the_diagnostic_consequence: 'SHORT, SHARP pain that stops when the stimulus goes = dentine is exposed but the pulp is healthy (reversible). LINGERING, throbbing, spontaneous pain = the pulp itself is inflamed (irreversible). That distinction is the whole basis of endodontic diagnosis and is covered in the caries entry.',
        },
        pulp: 'The living core — loose connective tissue containing the BLOOD SUPPLY and NERVES, entering through a tiny opening at the root tip (the apical foramen). It is enclosed in RIGID walls, which is the source of its most important behaviour: when it becomes inflamed it SWELLS, but it cannot expand. The pressure rises, compresses its own blood supply, and the tissue strangles itself. This is why pulpitis is so severe and why, once irreversible, the pulp does not recover.',
        cementum: 'A thin mineralised layer covering the ROOT, into which the periodontal ligament fibres anchor.',
        the_periodontium: {
          what: 'The supporting apparatus — everything holding the tooth in the jaw.',
          parts: 'GINGIVA (the gum) · PERIODONTAL LIGAMENT (fibres suspending the tooth in its socket) · CEMENTUM · ALVEOLAR BONE (the bone of the tooth socket).',
          the_periodontal_ligament_point:
            'A tooth is NOT fused to bone. It is SUSPENDED in its socket by ligament fibres, giving it slight physiological movement and — importantly — a rich PROPRIOCEPTIVE nerve supply. That is why pain arising from the periodontal ligament is WELL LOCALISED (the patient can point to the exact tooth), while pain from the PULP is POORLY localised and frequently referred to the wrong tooth, the opposite jaw, or the ear. This single fact resolves most confusion about dental pain.',
        },
      },

      development_and_eruption: {
        the_two_dentitions: 'Humans are DIPHYODONT — two sets. The 20 primary (deciduous, "milk") teeth erupt from roughly 6 months to 3 years. The 32 permanent teeth replace them from about 6 to 12 years, with third molars appearing in the late teens or twenties, or never.',
        the_first_permanent_molar: 'Erupts at about SIX YEARS, BEHIND the primary molars — so no primary tooth is lost when it arrives. Parents therefore often assume it is a baby tooth and neglect it. It is the tooth most commonly lost to caries in childhood, and it is a permanent tooth that will not be replaced.',
        physiological_versus_pathological_diastema: 'A DIASTEMA is a gap between teeth. In children a gap between the upper central incisors is usually PHYSIOLOGICAL and closes as the canines erupt — the so-called "ugly duckling stage" — and needs reassurance, not treatment. A diastema that is new in an ADULT, or widening, is PATHOLOGICAL and suggests periodontal disease with tooth migration, a habit, or a lesion pushing teeth apart.',
        teething: 'Discomfort, drooling and gum irritation are common. Teething does NOT cause high fever, diarrhoea or seizures — attributing those to teething delays diagnosis of genuine illness, and this is a recognised and dangerous error.',
      },

      the_nerve_supply_that_governs_dental_anaesthesia:
        'All sensation from the teeth travels in the TRIGEMINAL NERVE (cranial nerve V). The UPPER teeth are supplied by the MAXILLARY division (V2) via the superior alveolar nerves; the LOWER teeth by the MANDIBULAR division (V3) via the inferior alveolar nerve, which runs inside the mandible and exits at the mental foramen. This is why a lower tooth requires an INFERIOR ALVEOLAR NERVE BLOCK — a single injection near the mandibular foramen numbing that whole side — while upper teeth can usually be numbed by local infiltration, because the maxillary bone is thin and porous enough for the solution to diffuse through.',
    },
    warnings: [
      'State which numbering system you are using. A referral read in the wrong system identifies the wrong tooth — and in dentistry that means extracting the wrong tooth.',
      'FDI numbers are spoken digit by digit — tooth 48 is "four-eight", not "forty-eight".',
      'Enamel has no cells and CANNOT regenerate. Damage is permanent and cumulative.',
      'PULP pain is poorly localised and often referred to the wrong tooth, the other jaw or the ear. PERIODONTAL pain is well localised.',
      'Short sharp pain that stops with the stimulus suggests reversible dentine sensitivity; lingering or spontaneous pain suggests irreversible pulpitis.',
      'The first permanent molar erupts at about six BEHIND the baby teeth and is often mistaken for one. It is the tooth most commonly lost to caries in childhood.',
      'A new or widening diastema in an ADULT is pathological — consider periodontal disease or a lesion.',
      'Teething does NOT cause high fever, diarrhoea or seizures. Attributing them to teething delays real diagnoses.',
      'Lower teeth usually need a nerve block; upper teeth can often be infiltrated because maxillary bone is porous.',
    ],
    limitations: ['Eruption dates vary between individuals and populations. Notation conventions differ by country — confirm which your service uses.'],
    cards: [
      { q: 'What do mesial and distal mean?', a: 'Mesial is towards the midline along the arch; distal is away from it.' },
      { q: 'Lingual versus palatal?', a: 'Both mean the inner surface — lingual for lower teeth, palatal for upper.' },
      { q: 'What is the adult dental formula?', a: '2-1-2-3 per quadrant — two incisors, one canine, two premolars, three molars. 32 teeth.' },
      { q: 'What is FDI tooth 36?', a: 'Lower left first molar — quadrant 3, sixth tooth from the midline.' },
      { q: 'Why does exposed dentine hurt to cold?', a: 'The hydrodynamic theory — fluid moves in the dentinal tubules and mechanically stimulates the pulp nerve.' },
      { q: 'Why is pulpitis so painful?', a: 'The pulp swells inside rigid walls, compressing its own blood supply and strangling itself.' },
      { q: 'Why is pulp pain poorly localised but periodontal pain precise?', a: 'The periodontal ligament has rich proprioceptive supply; the pulp does not.' },
      { q: 'Which tooth erupts at six years behind the baby teeth?', a: 'The first permanent molar — frequently mistaken for a primary tooth and lost to caries.' },
      { q: 'Which nerve supplies the lower teeth?', a: 'The inferior alveolar nerve, from the mandibular division (V3) of the trigeminal.' },
      { q: 'When is a diastema pathological?', a: 'When it is new or widening in an adult — suggesting periodontal disease or a lesion.' },
    ],
    checks: ['Correct surface terminology used', 'Numbering system stated explicitly', 'Tooth identified by quadrant and number', 'Pain character established as sharp-and-brief or lingering', 'Localisation noted as precise or diffuse'],
  },

  {
    id: 'AS-DENT-0002',
    type: 'mechanism',
    title: 'Dental Caries, Pulpitis and Periapical Disease — One Disease Followed to Its End',
    short: 'Caries and pulp disease',
    summary:
      'Caries is not "rot". It is bacteria fermenting sugar into acid, dissolving mineral out of the tooth faster than saliva can put it back. Follow it inward and it becomes pulpitis, then a periapical abscess, then a fascial space infection that can close an airway.',
    domains: ['dentistry', 'microbiology'],
    intents: ['understand', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'dental caries', 'tooth decay', 'cavity', 'pulpitis', 'reversible pulpitis',
      'irreversible pulpitis', 'periapical abscess', 'dental abscess', 'apical periodontitis',
      'toothache', 'dental pain', 'root canal', 'endodontics', 'fluoride', 'demineralisation',
    ],
    terms: [
      'caries', 'tooth decay', 'cavity', 'streptococcus mutans', 'biofilm', 'plaque',
      'demineralisation', 'remineralisation', 'critical ph', 'white spot lesion', 'fluoride',
      'pulpitis', 'reversible', 'irreversible', 'necrosis', 'periapical', 'apical periodontitis',
      'abscess', 'sinus tract', 'root canal treatment', 'endodontic', 'extraction', 'pulp testing',
      'ludwig angina', 'early childhood caries', 'xerostomia',
    ],
    confirm_locally: true,
    body: {
      what_caries_actually_is: {
        the_definition: 'A localised, chemical dissolution of the mineral in a tooth, driven by acid produced by bacteria in dental plaque fermenting dietary carbohydrate.',
        the_four_things_that_must_coincide: 'A susceptible TOOTH SURFACE · CARIOGENIC BACTERIA (Streptococcus mutans initiates; Lactobacillus species progress the lesion) · FERMENTABLE CARBOHYDRATE (any sugar, and cooked starch) · and TIME. Remove any one and caries does not occur. This is why prevention has four independent levers rather than one.',
        the_chemistry_in_plain_terms:
          'Plaque is a BIOFILM — an organised bacterial community, not just food debris, which is why it must be physically DISRUPTED by brushing rather than rinsed away. When sugar arrives, the bacteria ferment it and the plaque pH FALLS. Below a CRITICAL pH of roughly 5.5, the tooth mineral begins to DISSOLVE — demineralisation. Saliva then buffers the acid, the pH recovers over 20–40 minutes, and mineral flows back in — remineralisation.',
        the_insight_that_changes_advice:
          'Caries is a BALANCE between demineralisation and remineralisation, not a one-way event. Every sugar exposure triggers an acid attack lasting 20–40 minutes REGARDLESS OF HOW MUCH sugar was consumed. So the FREQUENCY of sugar intake matters far more than the total amount. One chocolate bar eaten at once is far less damaging than the same bar eaten in ten pieces across a day, and a sweetened drink sipped over an hour is worse than the same drink swallowed in two minutes. This is the single most useful thing to tell a patient, and it is almost never explained.',
      },

      risk_and_protective_factors: {
        raising_risk: 'Frequent sugar intake · poor plaque control · DRY MOUTH (xerostomia) from drugs (antimuscarinics, antidepressants, antipsychotics, diuretics), Sjögren syndrome, or head and neck RADIOTHERAPY — saliva is the tooth\'s main defence, and removing it produces devastating, rapidly progressive caries · deep pits and fissures · exposed root surfaces after gum recession, which decay faster because cementum and dentine demineralise at a HIGHER pH than enamel · orthodontic appliances · previous caries experience, which is the strongest single predictor.',
        protective: 'FLUORIDE (see below) · saliva flow · good plaque removal · fissure sealants · reduced sugar frequency.',
        how_fluoride_works: 'Three ways: it is incorporated into the mineral to form FLUORAPATITE, which is more acid-resistant than the native hydroxyapatite; it promotes REMINERALISATION of early lesions; and it inhibits bacterial metabolism. The effect is mainly TOPICAL and ongoing rather than systemic — which is why toothpaste matters more than swallowed fluoride, and why the advice is to SPIT, DO NOT RINSE after brushing, so a reservoir of fluoride stays in contact with the teeth.',
      },

      the_appearance_and_the_crucial_distinction: {
        white_spot_lesion: 'The EARLIEST visible change — a chalky, opaque white patch on smooth enamel, often near the gum margin. The surface is still INTACT. This is demineralisation WITHOUT cavitation, and it is REVERSIBLE with fluoride and plaque control.',
        cavitated_lesion: 'The surface has BROKEN DOWN, leaving a hole. Bacteria are now inside a space that cannot be cleaned.',
        why_the_distinction_governs_treatment:
          'A NON-CAVITATED lesion can be arrested and remineralised — it needs prevention, not a drill. A CAVITATED lesion cannot be cleaned by any amount of brushing and requires operative restoration. Drilling a white spot lesion destroys sound tooth that could have healed; leaving a cavitated lesion to "prevention" allows it to progress. Getting this call right is the core of modern caries management.',
        sites: 'Pits and fissures of molars · between adjacent teeth (interproximal — invisible clinically, which is why BITEWING radiographs exist) · at the gum margin · on exposed root surfaces · and around the edges of existing restorations.',
      },

      following_it_inward_the_progression: {
        stage_1_enamel: 'PAINLESS. Enamel has no nerve supply. This is why caries is silent until it is well established, and why examination and radiographs find it rather than symptoms.',
        stage_2_dentine: 'Now SENSITIVE. Short, sharp pain to cold, sweet or air, stopping as soon as the stimulus is removed — the hydrodynamic mechanism. The pulp is inflamed but healthy enough to recover: REVERSIBLE PULPITIS. Remove the caries, restore the tooth, and the pulp settles.',
        stage_3_irreversible_pulpitis: {
          the_pain: 'SEVERE, SPONTANEOUS, THROBBING. It LINGERS for minutes after a stimulus. It is often worse LYING DOWN (increased pulpal blood pressure) and it WAKES THE PATIENT AT NIGHT. It is poorly localised. Classically, heat makes it worse and COLD may RELIEVE it — a distinctive and diagnostically useful reversal.',
          what_it_means: 'The pulp inflammation has passed the point of recovery. The tooth will not settle. Treatment is either ROOT CANAL TREATMENT (removing the pulp, disinfecting and sealing the canal system) or EXTRACTION. Analgesics and antibiotics do not treat it.',
        },
        stage_4_pulp_necrosis: 'The pulp dies. Pain may STOP entirely — which patients understandably interpret as recovery. It is not: the tooth is now a dead, infected space with no blood supply and no immune access.',
        stage_5_apical_periodontitis_and_abscess: {
          what: 'Infection exits the root tip into the surrounding bone. Now the PERIODONTAL LIGAMENT is involved, so the pain becomes WELL LOCALISED — the patient can point to the exact tooth. It is exquisitely TENDER TO BITE ON and to percussion, and the tooth may feel "high" or elevated.',
          the_abscess: 'Pus collects, causing swelling, systemic upset and fever. It may discharge through a SINUS TRACT ("gum boil") onto the gum, which relieves the pain and gives a false impression of resolution while the infection continues.',
        },
        stage_6_spread_into_the_fascial_spaces: {
          why_this_is_where_dentistry_becomes_an_emergency:
            'Infection escapes the bone and enters the FASCIAL SPACES of the face and neck. Which space depends on the tooth and on whether the root apex lies above or below the attachment of the mylohyoid muscle. LOWER MOLARS, whose apices sit BELOW that line, drain into the SUBMANDIBULAR space — and bilateral involvement of the submandibular and sublingual spaces is LUDWIG ANGINA, which pushes the tongue up and back and obstructs the airway.',
          the_other_dangerous_routes: 'Spread to the lateral pharyngeal and retropharyngeal spaces and thence to the MEDIASTINUM. Spread from UPPER anterior teeth via the facial vein to the CAVERNOUS SINUS, causing cavernous sinus thrombosis — the reason the area between the nose and upper lip has historically been called the "danger triangle" of the face.',
          the_red_flags_in_any_dental_swelling: 'Difficulty BREATHING or swallowing · drooling or inability to manage saliva · TRISMUS (reduced mouth opening) · swelling crossing the midline or extending below the jaw · raised floor of mouth or elevated tongue · voice change · fever, tachycardia and systemic illness · rapidly progressive swelling · periorbital swelling or eye signs. Any of these means immediate escalation, not a dental appointment next week.',
        },
      },

      the_diagnostic_tests: {
        pulp_sensibility_testing: 'Cold (refrigerant spray or ice) and electric pulp testing assess NERVE response — which is why "sensibility" is the accurate word rather than "vitality", since they test innervation and not blood supply. Always test a healthy CONTROL tooth first so the patient knows the normal sensation. A NO response suggests necrosis; a LINGERING exaggerated response suggests irreversible pulpitis.',
        percussion_and_palpation: 'Tenderness to percussion indicates PERIAPICAL involvement — inflammation has reached the periodontal ligament.',
        radiographs: 'PERIAPICAL films show the root tip and surrounding bone; BITEWINGS show the crowns of upper and lower back teeth together and are how interproximal caries is found. Note that a periapical radiolucency takes TIME to appear — a normal film does NOT exclude acute periapical infection.',
      },

      when_antibiotics_are_and_are_not_the_treatment: {
        the_principle:
          'Dental infection is usually a problem of a CLOSED, infected SPACE with no blood supply. Antibiotics reach infected tissue through blood, and a necrotic pulp or a pus collection has none. So the definitive treatment is nearly always MECHANICAL — drainage, pulp extirpation, root canal treatment, or extraction. Antibiotics are an ADJUNCT.',
        antibiotics_are_NOT_indicated_for: 'Reversible or irreversible pulpitis without systemic involvement · a localised periapical abscess that can be drained · pericoronitis without systemic features · to "hold" a patient who could simply be treated.',
        antibiotics_ARE_indicated_for: 'Spreading infection with cellulitis · systemic involvement (fever, malaise, lymphadenopathy, tachycardia) · immunocompromise or significant comorbidity · and where definitive treatment must genuinely be delayed.',
        why_this_matters_beyond_the_individual: 'Dentistry accounts for a substantial share of antibiotic prescribing, much of it for conditions that need a procedure instead. Prescribing antibiotics for pulpitis relieves nothing, delays the treatment that would, and drives resistance.',
      },

      early_childhood_caries:
        'Rapidly progressive caries in infants and toddlers, classically affecting the upper front teeth in a distinctive pattern, from prolonged bottle or breast feeding at will overnight — when saliva flow is at its lowest and the sugar sits on the teeth for hours. Preventable by not putting a child to bed with a sweetened or milk bottle, and by starting brushing when the first tooth appears. It can require extraction of multiple teeth under general anaesthesia in a very young child, which is a major and entirely avoidable harm.',
    },
    warnings: [
      'The FREQUENCY of sugar intake matters more than the amount — every exposure causes a 20–40 minute acid attack regardless of quantity.',
      'Spit, do not rinse, after brushing — rinsing washes away the fluoride reservoir.',
      'A non-cavitated white spot lesion can be remineralised. Drilling it destroys sound tooth that could have healed.',
      'Pain STOPPING after severe toothache usually means the pulp has DIED, not that the tooth has recovered.',
      'Antibiotics do not treat pulpitis or a drainable abscess. The treatment is mechanical — drainage, root canal or extraction.',
      'Dental infection can obstruct the airway. Difficulty breathing or swallowing, drooling, trismus, raised floor of mouth or voice change means immediate escalation.',
      'Lower molar infections drain into the submandibular space and can cause Ludwig angina.',
      'A normal periapical radiograph does NOT exclude acute periapical infection — the radiolucency takes time to appear.',
      'A discharging sinus tract relieves pain while the infection continues. Resolution of pain is not resolution of disease.',
      'Dry mouth from drugs, Sjögren or radiotherapy causes rapidly progressive caries — saliva is the tooth main defence.',
      'Exposed root surfaces decay at a higher pH than enamel, so gum recession markedly raises caries risk.',
      'Never put a child to bed with a sweetened or milk bottle — early childhood caries can cost multiple teeth under general anaesthesia.',
      'Test a healthy control tooth before pulp testing so the patient knows what normal feels like.',
    ],
    limitations: ['Antibiotic agents, restorative materials and referral thresholds are protocol-specific. Scout states no doses.'],
    cards: [
      { q: 'What four factors must coincide for caries?', a: 'A susceptible tooth surface, cariogenic bacteria, fermentable carbohydrate, and time.' },
      { q: 'What is the critical pH and why does it matter?', a: 'About 5.5 — below it tooth mineral dissolves.' },
      { q: 'Why does sugar FREQUENCY matter more than amount?', a: 'Each exposure causes a 20–40 minute acid attack regardless of quantity.' },
      { q: 'How does fluoride work?', a: 'Forms acid-resistant fluorapatite, promotes remineralisation, and inhibits bacterial metabolism — mainly topically.' },
      { q: 'White spot lesion versus cavitated lesion?', a: 'White spot is intact and reversible with prevention; cavitated cannot be cleaned and needs restoration.' },
      { q: 'Reversible versus irreversible pulpitis?', a: 'Reversible: short sharp pain stopping with the stimulus. Irreversible: spontaneous, lingering, worse lying down, wakes at night.' },
      { q: 'What does pain stopping after severe toothache usually mean?', a: 'The pulp has died — not recovery.' },
      { q: 'Why does periapical pain localise well?', a: 'The periodontal ligament is richly innervated with proprioceptors, unlike the pulp.' },
      { q: 'When are antibiotics NOT indicated in dental infection?', a: 'Pulpitis, a drainable localised abscess, or pericoronitis without systemic features.' },
      { q: 'Why do lower molar infections cause Ludwig angina?', a: 'Their apices lie below the mylohyoid attachment, so pus enters the submandibular space.' },
      { q: 'What is early childhood caries and how is it prevented?', a: 'Rapid caries from overnight bottle or at-will feeding — prevented by not bottle-feeding to sleep and brushing from the first tooth.' },
    ],
    checks: ['Pain characterised as brief or lingering, provoked or spontaneous', 'Localisation established', 'Tenderness to percussion tested', 'Pulp sensibility tested against a control tooth', 'Radiograph taken and its limitations understood', 'Airway red flags actively excluded in any swelling', 'Need for drainage or extraction assessed before prescribing antibiotics', 'Sugar frequency and dry mouth addressed'],
  },

  {
    id: 'AS-ANAE-0013',
    type: 'classification',
    title: 'ASA Physical Status — What the Grades Actually Mean',
    short: 'ASA physical status',
    summary:
      'A six-point description of how sick the patient is BEFORE the operation. It is not a risk score and it does not account for the surgery, the urgency or the anaesthetist — and treating it as a predictor of outcome is the standard misuse.',
    domains: ['anaesthesia', 'general_surgery'],
    intents: ['classify'],
    hazard: 'high',
    urgency: 'routine',
    aka: [
      'asa', 'asa grade', 'asa score', 'asa class', 'asa physical status',
      'american society of anesthesiologists', 'physical status classification', 'asa 1', 'asa 2',
      'asa 3', 'asa 4', 'asa 5', 'asa 6', 'asa e',
    ],
    terms: [
      'asa', 'physical status', 'preoperative assessment', 'perioperative risk', 'grade',
      'systemic disease', 'functional capacity', 'mets', 'emergency modifier', 'brain dead',
      'organ donor', 'risk stratification',
    ],
    confirm_locally: true,
    body: {
      what_it_is_and_is_not: {
        what_it_is: 'A simple description of the patient\'s BASELINE physical state, assigned before anaesthesia. Introduced by the American Society of Anesthesiologists, it exists to give clinicians a common shorthand for "how sick is this patient".',
        what_it_is_not:
          'It is NOT a risk score. It does NOT consider the type of surgery, its duration, the urgency, the skill of the team, or the facilities available. A grade 2 patient having a complex emergency laparotomy in a poorly equipped theatre is at far higher risk than a grade 3 patient having a cataract done under local anaesthetic. Quoting ASA as though it predicts outcome — "he is only an ASA 2, he will be fine" — is the standard misuse and it produces false reassurance.',
      },

      the_grades: {
        asa_1: 'A NORMAL, HEALTHY patient. Non-smoker, no or minimal alcohol, no systemic disease.',
        asa_2: 'MILD systemic disease, WITHOUT substantive functional limitation. Examples: current smoker, social drinker, pregnancy, obesity with a body mass index of 30–40, well-controlled diabetes or hypertension, mild lung disease. Note that PREGNANCY alone makes a patient ASA 2 — this surprises people.',
        asa_3: 'SEVERE systemic disease WITH substantive functional limitation, but NOT an immediate threat to life. Examples: poorly controlled diabetes or hypertension, chronic obstructive pulmonary disease, morbid obesity (body mass index 40 or more), active hepatitis, alcohol dependence, an implanted pacemaker, moderately reduced ejection fraction, dialysis-dependent renal failure, and a myocardial infarction, stroke or coronary stent MORE than three months ago.',
        asa_4: 'Severe systemic disease that IS a CONSTANT THREAT TO LIFE. Examples: a myocardial infarction, stroke or stent placed WITHIN the last three months · ongoing cardiac ischaemia or severe valve dysfunction · severely reduced ejection fraction · sepsis · disseminated intravascular coagulation · acute respiratory distress syndrome · end-stage renal disease NOT undergoing scheduled dialysis.',
        asa_5: 'A MORIBUND patient who is NOT EXPECTED TO SURVIVE WITHOUT THE OPERATION. Examples: ruptured abdominal aortic aneurysm, massive trauma, intracranial bleed with mass effect, ischaemic bowel with significant cardiac pathology or multi-organ failure.',
        asa_6: 'A declared BRAIN-DEAD patient whose organs are being removed for donation.',
      },

      the_e_modifier: {
        what: 'The letter E is appended for an EMERGENCY — defined as a case where delay in treatment would lead to a significant increase in the threat to life or body part. So a previously healthy patient needing an emergency appendicectomy is "ASA 1E".',
        why_it_matters: 'Emergency status independently and substantially increases perioperative risk, and it is the modifier most often left off. There is no "E" for grade 6.',
      },

      how_to_apply_it_well: {
        judge_the_patient_not_the_diagnosis:
          'The grade depends on FUNCTIONAL LIMITATION, not on the label. A patient with well-controlled asthma who runs regularly is ASA 2. A patient with the same diagnosis who is breathless walking to the bathroom is ASA 3. Two people can carry an identical diagnosis and belong in different grades.',
        the_three_month_rule: 'Recent myocardial infarction, stroke or coronary stent within THREE MONTHS moves a patient from grade 3 to grade 4. This is one of the few sharp boundaries in the system and it changes the whole risk conversation, so establish the date rather than accepting "a while ago".',
        the_known_weakness: 'Inter-observer agreement is only moderate — the same patient is graded differently by different clinicians, particularly around the 2/3 boundary. It is a communication tool, not a measurement.',
      },

      what_to_use_instead_when_you_actually_want_risk:
        'If the question is "what is this patient\'s risk of a complication or of dying", ASA alone is inadequate. Use it alongside FUNCTIONAL CAPACITY (can they climb two flights of stairs without stopping — roughly 4 metabolic equivalents, and a genuinely useful bedside question), the URGENCY and MAGNITUDE of the surgery, frailty assessment in older patients, and a validated multifactorial risk tool where your service uses one. ASA answers "how sick is this patient"; it does not answer "what will happen to them".',
    },
    warnings: [
      'ASA is NOT a risk score. It ignores the surgery, its urgency, the team and the facilities.',
      '"Only an ASA 2" is false reassurance — a low grade having major emergency surgery can be at high risk.',
      'Grade by FUNCTIONAL LIMITATION, not by the diagnosis label. The same disease can be grade 2 or grade 3.',
      'A myocardial infarction, stroke or coronary stent within THREE MONTHS makes the patient grade 4. Establish the date.',
      'Do not omit the E modifier — emergency status independently and substantially raises risk.',
      'Pregnancy alone makes a patient ASA 2.',
      'Inter-observer agreement is only moderate, especially at the 2/3 boundary. It is a communication tool, not a measurement.',
      'For actual risk, add functional capacity, surgical magnitude and urgency, and frailty.',
    ],
    limitations: ['Grade definitions are periodically revised by the American Society of Anesthesiologists, and examples are illustrative rather than exhaustive. Confirm the current version in local use.'],
    cards: [
      { q: 'Is ASA a risk score?', a: 'No — it describes the patient baseline only, ignoring the surgery, urgency, team and facilities.' },
      { q: 'What separates ASA 2 from ASA 3?', a: 'Substantive functional limitation. Mild disease without limitation is 2; severe disease with limitation is 3.' },
      { q: 'What separates ASA 3 from ASA 4?', a: 'Grade 4 disease is a CONSTANT THREAT TO LIFE.' },
      { q: 'What is ASA 5?', a: 'A moribund patient not expected to survive without the operation.' },
      { q: 'What is ASA 6?', a: 'A declared brain-dead patient for organ donation.' },
      { q: 'What does the E modifier mean?', a: 'Emergency — delay would significantly increase the threat to life or a body part.' },
      { q: 'Which recent events move a patient to grade 4?', a: 'Myocardial infarction, stroke or coronary stent within three months.' },
      { q: 'What grade is an otherwise healthy pregnant woman?', a: 'ASA 2 — pregnancy alone qualifies.' },
      { q: 'What bedside question adds most to ASA?', a: 'Functional capacity — can they climb two flights of stairs without stopping?' },
    ],
    checks: ['Grade assigned on functional limitation rather than diagnosis', 'Date of any recent infarct, stroke or stent established', 'E modifier applied if emergency', 'Functional capacity documented', 'Surgical magnitude and urgency considered separately', 'Current ASA version confirmed'],
  },
];
