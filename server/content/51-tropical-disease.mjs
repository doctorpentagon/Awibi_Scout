/**
 * Neglected tropical diseases and leprosy.
 *
 * From Medicine M2. These were the most consequential gaps in the whole
 * library given where Scout is deployed: `onchocerciasis`, `trypanosomiasis`
 * and `leishmaniasis` returned nothing at all, `hookworm` resolved to
 * Pituitary tumours, and `schistosomiasis` to Urine colour.
 */

export default [
  {
    id: 'AS-TROP-0001',
    type: 'differential',
    title: 'Neglected Tropical Diseases — The Worm and Fluke Infections That Cause Chronic Disability',
    short: 'Neglected tropical diseases',
    summary:
      'These do not usually kill quickly. They blind, disfigure, obstruct and stunt over years, in people who never present acutely — which is exactly why they are missed. Two rules matter above all: check for LOA LOA before treating onchocerciasis, and treat STRONGYLOIDES before giving corticosteroids.',
    domains: ['infectious_disease', 'public_health', 'community_medicine'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'routine',
    aka: [
      'neglected tropical diseases', 'ntd', 'schistosomiasis', 'bilharzia', 'onchocerciasis',
      'river blindness', 'lymphatic filariasis', 'elephantiasis', 'loa loa', 'loiasis',
      'soil transmitted helminths', 'hookworm', 'ascaris', 'roundworm', 'strongyloides',
      'trichuris', 'whipworm', 'guinea worm', 'dracunculiasis', 'trachoma', 'mass drug administration',
    ],
    terms: [
      'schistosomiasis', 'bilharzia', 'haematobium', 'mansoni', 'katayama', 'terminal haematuria',
      'onchocerciasis', 'river blindness', 'ivermectin', 'mazzotti', 'sowda', 'nodule',
      'lymphatic filariasis', 'wuchereria', 'elephantiasis', 'hydrocele', 'loa loa', 'loiasis',
      'calabar swelling', 'encephalopathy', 'hookworm', 'ancylostoma', 'necator', 'ascaris',
      'strongyloides', 'hyperinfection', 'larva currens', 'trichuris', 'praziquantel',
      'albendazole', 'mass drug administration', 'trachoma', 'guinea worm',
    ],
    confirm_locally: true,
    body: {
      why_they_are_called_neglected:
        'They affect the poorest populations, cause chronic disability rather than dramatic acute death, and attract little commercial research because the people affected cannot pay. The burden is enormous — hundreds of millions infected — and much of it is preventable with drugs that cost very little. The clinical consequence is that they present LATE, with established organ damage, in people who have been unwell for years and were never asked the right question.',

      the_two_rules_that_prevent_deaths: {
        loa_loa_before_ivermectin: {
          the_problem:
            'IVERMECTIN is the treatment for onchocerciasis and is given in mass drug administration campaigns. But in a person co-infected with LOA LOA who carries a HIGH microfilarial load, ivermectin kills those microfilariae rapidly and can precipitate a fatal ENCEPHALOPATHY.',
          the_practical_rule: 'In regions where Loa loa is CO-ENDEMIC — parts of Central and West Africa — screening for Loa loa microfilaraemia is required before mass ivermectin treatment. This is not a theoretical caution; it has caused deaths, and it is the reason ivermectin campaigns are conducted differently in Loa-endemic zones.',
        },
        strongyloides_before_steroids: {
          the_problem:
            'STRONGYLOIDES STERCORALIS is unique among the helminths in being able to complete its entire life cycle inside the human host — AUTOINFECTION — so it can persist for DECADES after someone has left an endemic area. When that person is given CORTICOSTEROIDS or other immunosuppression, the worm burden multiplies uncontrollably: HYPERINFECTION SYNDROME and disseminated strongyloidiasis, which carries a very high mortality and typically presents with Gram-negative sepsis or meningitis as gut organisms are carried across the bowel wall by migrating larvae.',
          the_practical_rule:
            'SCREEN OR EMPIRICALLY TREAT for strongyloides before starting corticosteroids or immunosuppression in anyone who has EVER lived in an endemic area — however long ago. Eosinophilia supports the diagnosis but is frequently ABSENT in hyperinfection, so its absence must not reassure. This is one of the highest-yield preventable catastrophes in medicine, and it is repeatedly missed because nobody asks where the patient has lived.',
        },
      },

      schistosomiasis_bilharzia: {
        the_life_cycle_in_one_line: 'Freshwater snails release cercariae, which PENETRATE INTACT SKIN during contact with contaminated water. So the exposure question is not "did you drink it" but "did you swim, wade, wash or fish in fresh water".',
        the_two_clinical_forms: {
          urinary_s_haematobium: 'Adult worms live in the vesical venous plexus. The classic symptom is PAINLESS TERMINAL HAEMATURIA — blood at the END of the stream. In highly endemic areas it is so common that children regard it as normal, even as a rite of passage, so it will not be volunteered and must be asked about directly. Long term it causes bladder fibrosis, obstructive uropathy, hydronephrosis and renal failure — and it is a recognised cause of SQUAMOUS CELL carcinoma of the bladder, which is the reverse of the transitional cell carcinoma expected elsewhere.',
          intestinal_and_hepatic_s_mansoni: 'Worms live in the mesenteric veins. Eggs lodge in the bowel wall and liver, causing abdominal pain and bloody diarrhoea, and then periportal fibrosis. That fibrosis produces PORTAL HYPERTENSION with splenomegaly and variceal bleeding while LIVER FUNCTION IS INITIALLY PRESERVED — a presynusoidal pattern that distinguishes it from cirrhosis and explains a patient who bleeds from varices with a normal albumin and clotting.',
        },
        katayama_fever: 'An acute hypersensitivity syndrome weeks after first heavy exposure — fever, urticaria, cough, wheeze, marked eosinophilia and hepatosplenomegaly. Seen mostly in travellers and the newly exposed rather than in lifelong residents, who are partially tolerant.',
        female_genital_schistosomiasis: 'Grossly under-recognised. Egg deposition in the cervix and vagina causes contact bleeding, discharge, pain and infertility, is frequently mistaken for a sexually transmitted infection or cervical cancer, and is associated with increased HIV ACQUISITION because of the mucosal damage. Consider it in any woman from an endemic area with unexplained genital symptoms.',
        diagnosis_and_treatment: 'Eggs in URINE (collected around midday, when shedding peaks) or STOOL, serology, and ultrasound for bladder and liver damage. PRAZIQUANTEL is the treatment. Note that praziquantel does not kill immature worms, so treatment in a recent heavy exposure may need repeating.',
      },

      onchocerciasis_river_blindness: {
        transmission: 'Transmitted by the BLACKFLY (Simulium), which breeds in FAST-FLOWING RIVERS — hence the name, and hence the geographic clustering along rivers that historically emptied fertile valleys of population.',
        the_disease: 'Adult worms live in subcutaneous NODULES. They release MICROFILARIAE which migrate through skin and eye. It is the microfilariae, and the inflammatory response as they die, that cause the disease — not the adults.',
        the_manifestations: 'Intense, intractable ITCH — often the dominant and most disabling symptom, and a cause of depression and social withdrawal. Papular dermatitis. "LEOPARD SKIN" — patchy depigmentation of the shins. "LIZARD SKIN" — thickened, wrinkled, prematurely aged skin. Hanging groin from lymphadenopathy. SOWDA — an intensely itchy, hyperreactive localised form.',
        the_eye_disease: 'Microfilariae in the eye cause punctate then sclerosing KERATITIS, anterior uveitis and chorioretinitis, leading to irreversible BLINDNESS. It is one of the leading infectious causes of blindness worldwide.',
        treatment: 'IVERMECTIN kills microfilariae, not adults, so it must be repeated — typically annually or six-monthly — for the lifespan of the adult worms, which is many years. Doxycycline targets the WOLBACHIA endosymbiont bacteria the worms depend on and can sterilise or kill adult worms, offering a more definitive option. And see the Loa loa rule above.',
      },

      lymphatic_filariasis: {
        what: 'Wuchereria bancrofti and Brugia species, transmitted by mosquitoes. Adult worms live in LYMPHATIC vessels and lymph nodes.',
        the_progression: 'Often asymptomatic for years while lymphatic damage accumulates. Then acute attacks of fever with painful lymphangitis and lymphadenitis — characteristically spreading RETROGRADE, down the limb away from the node, which is the opposite of bacterial lymphangitis and is a useful discriminator. Then chronic LYMPHOEDEMA progressing to ELEPHANTIASIS, and in men HYDROCELE, which is the commonest chronic manifestation and a major cause of disability and social exclusion.',
        the_practical_point_about_chronic_disease:
          'Once elephantiasis is established, antiparasitic drugs do NOT reverse it — the lymphatics are destroyed. What genuinely helps is MORBIDITY MANAGEMENT: scrupulous washing and drying of the limb, treating the entry lesions between the toes that cause the recurrent bacterial attacks which drive progression, elevation, exercise and footwear. Teaching this well does more for the patient than any prescription, and it is routinely omitted because it feels less like medicine.',
        diagnosis: 'Microfilariae on a NIGHT blood film (they show nocturnal periodicity, appearing in peripheral blood around midnight, matching the biting habit of the vector), antigen testing, and ultrasound showing the "filarial dance sign" of moving adult worms in dilated lymphatics.',
      },

      loiasis: 'The African eye worm, transmitted by the Chrysops deer fly. Produces CALABAR SWELLINGS — transient, migratory, non-pitting swellings on the limbs — and the alarming but harmless sight of an adult worm migrating across the SUBCONJUNCTIVA. Its main clinical importance is the ivermectin danger described above.',

      soil_transmitted_helminths: {
        the_group: 'ASCARIS lumbricoides (roundworm), HOOKWORM (Ancylostoma and Necator), TRICHURIS trichiura (whipworm) and STRONGYLOIDES. Transmitted by faecal contamination of soil — hookworm and strongyloides larvae penetrate the SKIN of bare feet, ascaris and trichuris eggs are swallowed.',
        why_they_matter_in_children: 'Chronic infection causes IRON DEFICIENCY ANAEMIA (hookworm feeds on blood), protein malnutrition, growth stunting and impaired cognitive development and school performance. The harm is cumulative and invisible rather than acute.',
        specific_complications: 'ASCARIS can cause intestinal OBSTRUCTION with a bolus of worms, and can migrate into the biliary tree causing obstructive jaundice or pancreatitis. Its larvae passing through the lungs cause LÖFFLER SYNDROME — transient pulmonary infiltrates with eosinophilia and cough. TRICHURIS causes rectal PROLAPSE in heavy paediatric infection. STRONGYLOIDES causes LARVA CURRENS, a rapidly moving serpiginous rash, and the hyperinfection risk described above.',
        treatment_and_prevention: 'ALBENDAZOLE or mebendazole for most; strongyloides needs IVERMECTIN because benzimidazoles are unreliable against it — a distinction worth remembering. Mass deworming of school-age children, sanitation, footwear and clean water are what actually reduce burden.',
      },

      the_two_that_are_close_to_elimination: 'GUINEA WORM (dracunculiasis) — reduced from millions of cases to a handful annually by water filtration and behaviour change alone, with no drug and no vaccine, which is one of public health\'s great achievements. TRACHOMA — repeated chlamydial conjunctival infection causing scarring, in-turned lashes (trichiasis) and corneal blindness, addressed by the SAFE strategy: Surgery for trichiasis, Antibiotics, Facial cleanliness, Environmental improvement.',

      the_history_question_that_finds_all_of_this:
        'Where have you LIVED, not just travelled — and for how long? What is your water source, and do you swim, wash or fish in fresh water? Do you go barefoot? Have you had mass drug administration? Any itch, rash, swelling, blood in urine, or eye trouble? Most of these diagnoses are made by asking rather than by testing, and they are missed because the question is never put.',
    },
    warnings: [
      'Screen for LOA LOA before ivermectin where it is co-endemic — treating high microfilarial loads can cause fatal encephalopathy.',
      'Screen or empirically treat STRONGYLOIDES before corticosteroids or immunosuppression in anyone who has EVER lived in an endemic area.',
      'Eosinophilia is frequently ABSENT in strongyloides hyperinfection — its absence must not reassure.',
      'Painless terminal haematuria in an endemic area is schistosomiasis until proven otherwise — and children will not volunteer it because they think it is normal.',
      'Schistosoma haematobium causes SQUAMOUS cell bladder carcinoma, not the usual transitional cell type.',
      'S. mansoni causes portal hypertension with PRESERVED liver function — varices with a normal albumin.',
      'Female genital schistosomiasis is mistaken for a sexually transmitted infection or cervical cancer, and it increases HIV acquisition.',
      'Ivermectin kills microfilariae, not adult worms — treatment must be repeated for years.',
      'Established elephantiasis is NOT reversed by antiparasitic drugs. Limb hygiene and treating entry lesions is the effective intervention.',
      'Filarial lymphangitis spreads RETROGRADE, unlike bacterial lymphangitis.',
      'Take night blood films for lymphatic filariasis — microfilariae show nocturnal periodicity.',
      'Strongyloides needs IVERMECTIN; benzimidazoles are unreliable against it.',
      'Ascaris can obstruct bowel or migrate into the biliary tree causing jaundice or pancreatitis.',
      'Ask where the patient has LIVED, not just travelled. Most of these are diagnosed by asking.',
    ],
    limitations: ['Drug regimens, mass drug administration policy and endemicity are country-specific and change. Scout states no doses — follow national guidelines.'],
    cards: [
      { q: 'Why must Loa loa be excluded before ivermectin?', a: 'High microfilarial loads can develop fatal encephalopathy when rapidly killed.' },
      { q: 'Why screen for strongyloides before steroids?', a: 'Autoinfection lets it persist for decades; immunosuppression causes hyperinfection with high mortality.' },
      { q: 'How is schistosomiasis acquired?', a: 'Cercariae penetrate intact skin during freshwater contact — swimming, wading, washing, fishing.' },
      { q: 'What is the classic symptom of urinary schistosomiasis?', a: 'Painless terminal haematuria — blood at the end of the stream.' },
      { q: 'Which bladder cancer does S. haematobium cause?', a: 'Squamous cell carcinoma — not transitional cell.' },
      { q: 'How does S. mansoni portal hypertension differ from cirrhosis?', a: 'It is presinusoidal — varices occur with preserved liver function.' },
      { q: 'What causes the disease in onchocerciasis?', a: 'Microfilariae and the inflammatory response as they die, not the adult worms.' },
      { q: 'What is leopard skin?', a: 'Patchy depigmentation of the shins in onchocerciasis.' },
      { q: 'What helps established elephantiasis?', a: 'Limb hygiene, treating interdigital entry lesions, elevation and footwear — not antiparasitic drugs.' },
      { q: 'Why take a night blood film in filariasis?', a: 'Microfilariae show nocturnal periodicity matching the vector biting time.' },
      { q: 'Which helminth needs ivermectin rather than albendazole?', a: 'Strongyloides — benzimidazoles are unreliable against it.' },
      { q: 'What is Löffler syndrome?', a: 'Transient pulmonary infiltrates with eosinophilia from larvae migrating through the lungs.' },
      { q: 'What does SAFE stand for in trachoma?', a: 'Surgery, Antibiotics, Facial cleanliness, Environmental improvement.' },
    ],
    checks: ['Residence history taken, not just travel', 'Freshwater contact and barefoot exposure asked about', 'Loa loa considered before ivermectin', 'Strongyloides addressed before immunosuppression', 'Terminal haematuria asked about directly in endemic areas', 'Night blood film timed correctly', 'Limb hygiene taught in lymphoedema', 'Household and community treatment considered'],
  },

  {
    id: 'AS-TROP-0003',
    type: 'differential',
    title: 'Trypanosomiasis and Leishmaniasis — The Protozoal Neglected Diseases',
    short: 'Trypanosomiasis and leishmaniasis',
    summary:
      'Two parasites carried by biting flies, both fatal untreated, both diagnosed by remembering to think of them. Sleeping sickness reverses the sleep cycle and changes the personality before it kills; visceral leishmaniasis causes fever with a massive spleen and pancytopenia, and is a leading parasitic killer after malaria.',
    domains: ['infectious_disease', 'public_health', 'neurology'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'trypanosomiasis', 'african trypanosomiasis', 'sleeping sickness', 'tsetse',
      'chagas disease', 'american trypanosomiasis', 'leishmaniasis', 'visceral leishmaniasis',
      'kala azar', 'cutaneous leishmaniasis', 'mucocutaneous leishmaniasis', 'sandfly',
      'winterbottom sign', 'romana sign', 'post kala azar dermal leishmaniasis', 'pkdl',
    ],
    terms: [
      'trypanosomiasis', 'sleeping sickness', 'tsetse', 'glossina', 'trypanosoma brucei',
      'gambiense', 'rhodesiense', 'winterbottom', 'chancre', 'somnolence', 'sleep reversal',
      'chagas', 'cruzi', 'triatomine', 'kissing bug', 'romana sign', 'megacolon', 'megaoesophagus',
      'cardiomyopathy', 'leishmaniasis', 'kala azar', 'donovani', 'sandfly', 'phlebotomus',
      'splenomegaly', 'pancytopenia', 'amastigote', 'rk39', 'pkdl', 'espundia', 'oriental sore',
    ],
    confirm_locally: true,
    body: {
      why_these_two_are_grouped:
        'Both are protozoa transmitted by biting insects, both are confined to defined endemic zones, both are fatal if untreated, and both are diagnosed almost entirely by REMEMBERING TO CONSIDER THEM in a person from the right place. Outside endemic areas they are missed for months because nobody asks where the patient has lived.',

      african_trypanosomiasis_sleeping_sickness: {
        the_vector_and_the_geography: 'Transmitted by the TSETSE FLY (Glossina), which bites by DAY and is confined to sub-Saharan Africa. Because the fly needs specific habitat, transmission is highly FOCAL — risk depends on precise locality, not on the country as a whole.',
        the_two_forms_which_behave_completely_differently: {
          gambiense_west_and_central_africa: 'The large majority of cases. CHRONIC, over months to years, with humans as the main reservoir. Slowly progressive, so it is often advanced by the time it is recognised.',
          rhodesiense_east_and_southern_africa: 'ACUTE and rapidly progressive over weeks to months, and can be fatal within months. Animals are the main reservoir, so it is more often acquired in game parks and by travellers. A febrile traveller returning from an East African safari is the classic scenario.',
        },
        stage_1_haemolymphatic: 'A painful CHANCRE may appear at the bite site, more often in rhodesiense. Then intermittent FEVER, headache, joint pain, itch and lymphadenopathy. Enlargement of the POSTERIOR CERVICAL nodes is the WINTERBOTTOM SIGN, classically associated with gambiense disease.',
        stage_2_meningoencephalitic: {
          what: 'The parasite crosses into the central nervous system.',
          the_features: 'The name comes from profound disruption of the SLEEP-WAKE CYCLE — daytime somnolence with night-time insomnia, a REVERSAL rather than simple sleepiness. Also personality and behavioural change, which families notice long before any clinician does, psychiatric presentations, tremor, ataxia, and progression to coma and death.',
          why_staging_governs_everything:
            'Staging requires LUMBAR PUNCTURE, because stage 1 and stage 2 need DIFFERENT drugs — stage 2 requires an agent that crosses the blood-brain barrier, which historically meant melarsoprol, an arsenical that itself killed a proportion of those treated. Newer oral treatment has transformed this. Treating stage 2 disease with stage 1 drugs fails and the patient dies, so the lumbar puncture is not optional.',
        },
        diagnosis: 'Trypanosomes on thick and thin blood films, in lymph node aspirate, in chancre fluid, or in CSF. Serological screening is used for gambiense. Parasitaemia in gambiense is often LOW and intermittent, so repeated and concentrated examination may be needed — a single negative film does not exclude it.',
      },

      chagas_disease_american_trypanosomiasis: {
        where_and_how: 'Trypanosoma cruzi, in Latin America, transmitted by the TRIATOMINE or "kissing" bug. The bug bites and then defecates near the wound; the parasite enters when the person SCRATCHES the faeces into the bite or into mucosa. Also transmitted by transfusion, transplantation, congenitally, and through contaminated food or drink.',
        acute_phase: 'Often mild or unrecognised. ROMANA SIGN — unilateral painless periorbital swelling where the parasite entered through the conjunctiva — is characteristic but present in a minority.',
        the_long_silence_and_what_follows: 'Most people enter an INDETERMINATE phase lasting DECADES with no symptoms. Around a third eventually develop chronic disease: a dilated CARDIOMYOPATHY with heart failure, conduction block and sudden death — the commonest serious outcome — or MEGAOESOPHAGUS causing dysphagia and MEGACOLON causing severe constipation and volvulus, from destruction of the enteric nerve plexuses.',
        why_it_matters_outside_latin_america: 'Migration means chronic Chagas presents anywhere. An unexplained dilated cardiomyopathy or conduction abnormality in someone from an endemic area warrants serological testing, and it is a recognised transfusion and transplant risk requiring donor screening.',
      },

      leishmaniasis: {
        the_vector: 'The SANDFLY — small, silent, and biting mainly at dusk and at night. Bed nets must be a FINER mesh than for mosquitoes, because sandflies pass straight through standard netting. That is a practical point worth telling patients directly.',
        visceral_leishmaniasis_kala_azar: {
          why_it_matters_most: 'Fatal in the large majority of untreated cases, and one of the leading parasitic causes of death after malaria. Occurs in East Africa, the Indian subcontinent, Brazil and the Mediterranean basin.',
          the_clinical_picture: 'Prolonged irregular FEVER · massive SPLENOMEGALY, often with hepatomegaly · progressive WEIGHT LOSS and wasting · PANCYTOPENIA from marrow infiltration and hypersplenism, causing anaemia, bleeding and secondary infection · and darkening of the skin, which gives the name kala-azar, meaning "black fever".',
          the_differential_it_sits_in: 'Fever with massive splenomegaly and pancytopenia in an endemic area: visceral leishmaniasis, chronic malaria and hyperreactive malarial splenomegaly, schistosomiasis with portal hypertension, disseminated tuberculosis, leukaemia and lymphoma. Exposure history, serology and tissue diagnosis separate them.',
          diagnosis: 'The rK39 rapid antigen test is a practical field tool with good performance in the Indian subcontinent but LOWER sensitivity in East Africa — a limitation to know before relying on a negative result. Definitive diagnosis is AMASTIGOTES seen in splenic, bone marrow or lymph node aspirate. Splenic aspirate is the most sensitive but carries a real bleeding risk and is done only where the operator and setting permit.',
          the_hiv_interaction: 'HIV co-infection is a major problem in East Africa. It makes the presentation atypical, the serology less reliable, the response to treatment poorer and RELAPSE far more likely — so treatment is longer and secondary prophylaxis may be needed.',
          post_kala_azar_dermal_leishmaniasis: 'A hypopigmented macular, papular or nodular rash appearing MONTHS TO YEARS AFTER apparently successful treatment, mainly in the Indian subcontinent and Sudan. Its importance is epidemiological as much as personal: these patients are a HUMAN RESERVOIR sustaining transmission between epidemics, so finding and treating them is a control measure. It is readily mistaken for leprosy — but PKDL lesions are NOT anaesthetic, which is the distinguishing feature.',
        },
        cutaneous_leishmaniasis: 'The commonest form. A papule at the bite site enlarges and ULCERATES, typically with a raised indurated edge and a clean base — the "oriental sore". Usually painless unless secondarily infected, and often on the face or exposed limbs. Many heal spontaneously over months to years but leave a permanent, disfiguring SCAR, which on the face carries real social consequence — so treatment decisions rest on site, size, number and species, not merely on whether it will eventually heal.',
        mucocutaneous_leishmaniasis: 'Principally South America, most associated with L. braziliensis. MONTHS TO YEARS after a healed cutaneous lesion the parasite reactivates in nasal and oropharyngeal mucosa, progressively destroying the nasal septum, palate and pharynx — ESPUNDIA. It is mutilating and can cause death from aspiration or secondary infection. Anyone with a healed cutaneous lesion from an endemic area who develops persistent nasal stuffiness, epistaxis or crusting needs assessment.',
      },

      the_practical_summary:
        'Ask where the patient has LIVED, and when. Sleeping sickness in a person from a tsetse zone with fever, personality change or disturbed sleep — and stage it with a lumbar puncture. Chagas in unexplained cardiomyopathy or megacolon in someone from Latin America. Visceral leishmaniasis in fever with a big spleen and pancytopenia. Cutaneous leishmaniasis in a chronic painless ulcer with a raised edge that will not heal. None of these is diagnosed by a test you did not think to order.',
    },
    warnings: [
      'Stage African trypanosomiasis with a LUMBAR PUNCTURE — stage 1 and stage 2 need different drugs, and treating stage 2 as stage 1 fails and the patient dies.',
      'Rhodesiense disease is ACUTE and can kill within months — a febrile traveller from an East African game park is the classic case.',
      'A single negative blood film does not exclude gambiense trypanosomiasis; parasitaemia is low and intermittent.',
      'Personality change or sleep-cycle reversal in a person from an endemic area is sleeping sickness until excluded — families notice it long before clinicians.',
      'Chronic Chagas presents decades later as dilated cardiomyopathy, megaoesophagus or megacolon, anywhere in the world.',
      'Untreated visceral leishmaniasis is fatal in the large majority — fever with massive splenomegaly and pancytopenia demands it be considered.',
      'The rK39 test has LOWER sensitivity in East Africa — a negative result there does not exclude the diagnosis.',
      'HIV co-infection makes visceral leishmaniasis atypical, serology unreliable and relapse far more likely.',
      'Post kala-azar dermal leishmaniasis is mistaken for leprosy — but PKDL lesions are NOT anaesthetic.',
      'PKDL patients are a human reservoir sustaining transmission; finding them is a control measure.',
      'Mucocutaneous leishmaniasis reactivates years after a healed skin lesion and destroys the nasal septum and palate.',
      'Sandflies pass through standard mosquito netting — finer mesh is required.',
    ],
    limitations: ['Drug availability, staging criteria and regimens are programme- and country-specific and have changed substantially. Scout states no doses.'],
    cards: [
      { q: 'Which fly transmits African trypanosomiasis, and when does it bite?', a: 'The tsetse fly (Glossina), which bites by day.' },
      { q: 'How do gambiense and rhodesiense differ?', a: 'Gambiense is chronic over months to years; rhodesiense is acute and can kill within months.' },
      { q: 'What is Winterbottom sign?', a: 'Posterior cervical lymphadenopathy, classically in gambiense sleeping sickness.' },
      { q: 'Why is lumbar puncture essential in sleeping sickness?', a: 'Staging decides the drug — stage 2 needs an agent that crosses the blood-brain barrier.' },
      { q: 'How is Chagas disease actually transmitted?', a: 'The triatomine bug defecates near the bite; the parasite enters when the person scratches it in.' },
      { q: 'What is Romana sign?', a: 'Unilateral painless periorbital swelling at the site of conjunctival entry in acute Chagas.' },
      { q: 'Name the three chronic manifestations of Chagas.', a: 'Dilated cardiomyopathy, megaoesophagus and megacolon.' },
      { q: 'Give the classic picture of visceral leishmaniasis.', a: 'Prolonged fever, massive splenomegaly, weight loss and pancytopenia.' },
      { q: 'What limits the rK39 test?', a: 'Lower sensitivity in East Africa — a negative result does not exclude the diagnosis there.' },
      { q: 'How is PKDL distinguished from leprosy?', a: 'PKDL lesions are NOT anaesthetic.' },
      { q: 'What is espundia?', a: 'Mucocutaneous leishmaniasis destroying the nasal septum and palate, years after a healed skin lesion.' },
      { q: 'Why do sandflies need finer bed nets?', a: 'They are small enough to pass through standard mosquito mesh.' },
    ],
    checks: ['Residence history and precise locality established', 'Lumbar puncture performed for staging in trypanosomiasis', 'Repeated films taken if gambiense suspected', 'Serology considered in unexplained cardiomyopathy from Latin America', 'Spleen size and full blood count assessed in prolonged fever', 'HIV status established in suspected visceral leishmaniasis', 'Nasal symptoms asked about after any healed cutaneous lesion', 'Vector avoidance advice given, including fine-mesh netting'],
  },

  {
    id: 'AS-TROP-0002',
    type: 'guideline',
    title: 'Leprosy — Nerve Damage, Reactions and the Disability That Is Preventable',
    short: 'Leprosy',
    summary:
      'Leprosy is a disease of NERVES, not skin. The skin patch is what brings the patient in; the nerve damage is what disables them. And the disability is caused mostly by REACTIONS and by neglect of insensate limbs — both of which are treatable, which is why late presentation is the tragedy rather than the infection itself.',
    domains: ['infectious_disease', 'neurology', 'dermatology', 'public_health'],
    intents: ['identify', 'act'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'leprosy', 'hansen disease', 'mycobacterium leprae', 'paucibacillary', 'multibacillary',
      'tuberculoid leprosy', 'lepromatous leprosy', 'borderline leprosy', 'type 1 reaction',
      'reversal reaction', 'type 2 reaction', 'erythema nodosum leprosum', 'lepra reaction',
      'claw hand', 'foot drop', 'lagophthalmos', 'multidrug therapy',
    ],
    terms: [
      'leprosy', 'hansen', 'mycobacterium leprae', 'ridley jopling', 'tuberculoid', 'lepromatous',
      'borderline', 'paucibacillary', 'multibacillary', 'hypopigmented', 'anaesthetic patch',
      'thickened nerve', 'ulnar', 'common peroneal', 'posterior tibial', 'great auricular',
      'claw hand', 'foot drop', 'lagophthalmos', 'leonine facies', 'madarosis', 'slit skin smear',
      'type 1 reaction', 'reversal', 'type 2 reaction', 'erythema nodosum leprosum',
      'multidrug therapy', 'rifampicin', 'dapsone', 'clofazimine', 'stigma',
    ],
    confirm_locally: true,
    body: {
      the_central_fact: {
        what_it_is: 'A chronic infection with MYCOBACTERIUM LEPRAE (and M. lepromatosis), which has a striking preference for two things: SKIN and PERIPHERAL NERVES. It grows best at cooler temperatures, which is why it affects the cooler parts of the body — the skin, the superficial nerves near the surface, the nose, the eyes, the testes, and the extremities — and spares the warm core.',
        the_thing_to_understand_first:
          'The DISABILITY of leprosy is not caused directly by the bacillus destroying tissue. It is caused by NERVE DAMAGE producing insensate, weak limbs, and then by unnoticed injury, ulceration and infection of those limbs. Fingers do not "fall off" — they are injured, infected and absorbed over years because the patient cannot feel the damage. This matters enormously, because it means the disability is PREVENTABLE by protecting insensate limbs even after the infection is cured.',
        transmission: 'Probably by respiratory droplet during prolonged close contact with an untreated multibacillary case. It is NOT highly contagious — most exposed people never develop it, and susceptibility appears largely genetic. Patients become non-infectious within days of starting treatment. Saying this clearly to patients and families is part of the treatment.',
        incubation: 'Very long — typically 3 to 5 years, and sometimes 20 or more. So a patient may have left an endemic area long before presenting.',
      },

      the_spectrum: {
        the_organising_idea: 'The clinical picture is determined by the patient\'s CELL-MEDIATED IMMUNE RESPONSE, not by the organism. A strong response contains the infection but causes intense local inflammation; a weak response permits enormous bacterial multiplication with little inflammation.',
        tuberculoid_paucibacillary: 'STRONG immunity. FEW lesions — often a single well-defined, hypopigmented or erythematous patch with a raised active edge, DRY, HAIRLESS and clearly ANAESTHETIC. Few bacilli, so smears are negative. Nerve involvement is limited but can be severe and asymmetric in the one or two nerves affected.',
        lepromatous_multibacillary: 'WEAK immunity. MANY lesions — numerous, symmetrical, poorly defined papules, nodules and diffuse infiltration, with sensation often relatively PRESERVED early. Huge numbers of bacilli. Features include LEONINE FACIES (thickened, furrowed facial skin), MADAROSIS (loss of the eyebrows, characteristically the outer third first), nasal collapse and epistaxis, and testicular atrophy with gynaecomastia.',
        borderline: 'Between the two and immunologically UNSTABLE — which is precisely why borderline patients are the ones most likely to suffer reactions.',
        the_classification_that_matters_practically: 'For treatment purposes the World Health Organization uses a simple count: PAUCIBACILLARY is up to 5 skin lesions with a negative smear; MULTIBACILLARY is more than 5 lesions or a positive smear. Treatment duration follows that split.',
      },

      making_the_diagnosis: {
        the_three_cardinal_signs: 'Any ONE of these establishes the diagnosis: (1) a HYPOPIGMENTED OR REDDISH SKIN PATCH WITH DEFINITE LOSS OF SENSATION · (2) a THICKENED OR TENDER PERIPHERAL NERVE, with or without loss of function · (3) ACID-FAST BACILLI on a slit-skin smear.',
        testing_the_patch: 'Test LIGHT TOUCH with cotton wool, comparing the patch with adjacent normal skin, with the patient\'s eyes closed. Loss of sensation IN the patch is close to diagnostic — very few other conditions produce an anaesthetic skin lesion. Also note that the patch is typically DRY (loss of sweating) and HAIRLESS, both from autonomic and small-nerve damage.',
        palpating_the_nerves: {
          why: 'Nerve THICKENING is a cardinal sign and is found only by deliberately feeling for it.',
          which_nerves: 'ULNAR at the elbow (the most commonly affected of all) · MEDIAN at the wrist · RADIAL cutaneous · COMMON PERONEAL at the fibular neck · POSTERIOR TIBIAL behind the medial malleolus · GREAT AURICULAR in the neck · and the supraorbital nerve.',
          how: 'Palpate gently, comparing both sides, feeling for enlargement, irregularity and tenderness. Tenderness suggests an active reaction.',
        },
        the_functional_assessment: 'Test motor and sensory function in each of those nerve territories and RECORD it, because the whole of subsequent management depends on detecting CHANGE. Sensory testing of hands and feet with a monofilament, and simple motor tests — little finger abduction for ulnar, thumb abduction for median, wrist and foot dorsiflexion for radial and peroneal — repeated at every visit.',
      },

      the_reactions_that_cause_the_damage: {
        why_they_dominate_management:
          'Most nerve damage in leprosy happens during REACTIONS — acute immunological events that can occur BEFORE treatment, DURING treatment, or even AFTER the infection is cured. Patients frequently interpret a reaction as the treatment failing or the disease returning, and stop their drugs. Explaining reactions in advance is therefore part of starting treatment.',
        type_1_reversal_reaction: {
          what: 'A cell-mediated hypersensitivity shift, typically in BORDERLINE disease. Existing skin lesions become RED, SWOLLEN and TENDER, and — critically — NERVES become painful, swollen and lose function, sometimes over days.',
          why_it_is_an_emergency: 'Acute NEURITIS with loss of function is a medical emergency for that nerve. Prompt CORTICOSTEROID treatment can preserve function; delay of even weeks results in permanent paralysis and anaesthesia. A patient reporting new weakness, new numbness or nerve pain must be seen the same day, not given a routine appointment.',
        },
        type_2_erythema_nodosum_leprosum: {
          what: 'An immune-complex reaction, in lepromatous and borderline lepromatous disease. Crops of painful red subcutaneous NODULES, with FEVER and systemic illness, and often iritis, orchitis, arthritis, neuritis and lymphadenitis.',
          management_principle: 'Systemic and often recurrent, requiring specific treatment — thalidomide is highly effective where it can be used, with absolute contraindication in pregnancy and a strict pregnancy-prevention programme, alongside steroids and clofazimine.',
        },
        the_instruction_to_the_patient: 'Tell every patient at the start: "Your skin patches may become red and swollen, or you may get new pain, numbness or weakness. That is a reaction, not the medicine failing. Come back IMMEDIATELY — the same day — because we can protect the nerve if we act quickly."',
      },

      treatment_and_what_actually_prevents_disability: {
        multidrug_therapy: 'A combination — RIFAMPICIN, DAPSONE and CLOFAZIMINE — given for a duration determined by the paucibacillary or multibacillary classification, and provided FREE through national programmes in endemic countries. Combination therapy exists because rifampicin monotherapy generated resistance. Patients become non-infectious rapidly.',
        the_thing_that_is_forgotten: 'CURING THE INFECTION DOES NOT RESTORE THE NERVE, and it does not protect the limb. A cured patient with an anaesthetic foot will still ulcerate, become infected and lose tissue unless taught to protect it.',
        self_care_which_is_the_real_intervention: 'DAILY inspection of hands and feet for wounds the patient cannot feel · soaking, oiling and removal of callus · PROTECTIVE FOOTWEAR with a moulded insole, which prevents plantar ulceration better than anything else · protecting hands from heat and sharp objects when cooking and working · eye protection and artificial tears where the eye does not close. This is the single most effective part of leprosy care and it is delivered by teaching, not prescribing.',
        the_eye: 'LAGOPHTHALMOS — inability to close the eye from facial nerve involvement — combined with corneal ANAESTHESIA from trigeminal involvement means the cornea is both exposed and unprotected. This causes exposure keratitis, ulceration and blindness. Check eye closure and corneal sensation in every patient.',
        contacts: 'Household and close contacts should be examined, and single-dose rifampicin post-exposure prophylaxis is recommended in many programmes.',
      },

      stigma: {
        why_it_belongs_in_a_clinical_entry:
          'Leprosy carries stigma unmatched by almost any other disease, rooted in centuries of exclusion and in language. That stigma is itself a clinical problem: it causes people to hide symptoms and present LATE, at which point nerve damage is irreversible — so stigma directly produces disability.',
        what_clinicians_can_actually_do: 'Use the words "leprosy" or "Hansen disease" and NEVER "leper", which defines a person by a disease. State clearly and early that it is CURABLE, that treatment is FREE, and that the patient becomes NON-INFECTIOUS within days of starting. Correct the belief that it is highly contagious or hereditary. Support continued school, work and family life. Involve the family in the explanation. These conversations change presentation times in a community, and that changes the disability rate.',
      },
    },
    warnings: [
      'New nerve pain, weakness or numbness in a leprosy patient is a REACTION and a medical emergency — same-day steroids can preserve the nerve; weeks of delay cause permanent paralysis.',
      'Curing the infection does NOT restore the nerve or protect the limb. Self-care and protective footwear prevent the disability.',
      'Reactions occur before, during and AFTER cure. Warn every patient in advance so they do not stop treatment believing it has failed.',
      'An anaesthetic skin patch is close to diagnostic — very few other conditions cause loss of sensation IN a lesion.',
      'Palpate the ulnar, median, radial, common peroneal, posterior tibial and great auricular nerves deliberately — thickening is found only by feeling for it.',
      'Record nerve function at every visit; management depends on detecting CHANGE.',
      'Check eye closure and corneal sensation — lagophthalmos with corneal anaesthesia causes blindness.',
      'Thalidomide for type 2 reactions is absolutely contraindicated in pregnancy and requires a strict pregnancy-prevention programme.',
      'Never use the word "leper". Stigma causes late presentation, and late presentation causes irreversible disability.',
      'Tell patients early that it is curable, free to treat, and non-infectious within days of starting therapy.',
      'Incubation can exceed 20 years — a patient may have left an endemic area long ago.',
      'Examine household contacts and consider post-exposure prophylaxis.',
    ],
    limitations: ['Regimens, duration, classification thresholds and prophylaxis policy follow national leprosy programme guidance. Scout states no doses.'],
    cards: [
      { q: 'What actually causes disability in leprosy?', a: 'Nerve damage producing insensate weak limbs, then unnoticed injury and infection — not the bacillus destroying tissue.' },
      { q: 'Give the three cardinal diagnostic signs.', a: 'An anaesthetic skin patch; a thickened or tender peripheral nerve; acid-fast bacilli on slit-skin smear.' },
      { q: 'What determines where a patient sits on the spectrum?', a: 'Their cell-mediated immune response — strong gives tuberculoid, weak gives lepromatous.' },
      { q: 'Which nerve is most commonly affected?', a: 'The ulnar nerve at the elbow.' },
      { q: 'What is a type 1 reaction and why does it matter?', a: 'A cell-mediated shift causing acute neuritis — a same-day emergency, because prompt steroids preserve function.' },
      { q: 'What is erythema nodosum leprosum?', a: 'A type 2 immune-complex reaction with painful nodules, fever and systemic involvement.' },
      { q: 'Does cure restore nerve function?', a: 'No — and it does not protect the limb. Self-care and footwear prevent the disability.' },
      { q: 'Why does lagophthalmos cause blindness in leprosy?', a: 'The eye cannot close and the cornea is anaesthetic, so exposure damage goes unnoticed.' },
      { q: 'How is paucibacillary defined by WHO?', a: 'Up to 5 skin lesions with a negative smear; more than 5 or smear positive is multibacillary.' },
      { q: 'How infectious is leprosy?', a: 'Not highly — most exposed never develop it, and patients are non-infectious within days of treatment.' },
    ],
    checks: ['Skin patches tested for sensation', 'All accessible peripheral nerves palpated and compared', 'Motor and sensory function recorded at every visit', 'Eye closure and corneal sensation checked', 'Reactions explained to the patient in advance', 'Self-care and protective footwear taught', 'Household contacts examined', 'Curability and non-infectiousness stated explicitly to patient and family'],
  },
];
