/**
 * Dermatology. Morphology first, then the common diagnoses.
 *
 * Source review note: the supplied document classifies eczema as "Type I
 * hypersensitivity → mast cell degranulation → histamine". That is incorrect
 * and is corrected here — see the eczema entry.
 */

export default [
  {
    id: 'AS-DERM-0001',
    type: 'definition',
    title: 'Describing a Rash — The Words That Make a Referral Useful',
    short: 'Rash morphology',
    summary:
      'A rash described as "a rash" cannot be diagnosed by anyone who has not seen it. Six words — macule, papule, plaque, vesicle, pustule, nodule — plus distribution and configuration turn a description into a differential.',
    domains: ['pathology', 'immunology'],
    intents: ['examine', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['rash', 'skin lesion', 'macule', 'papule', 'vesicle', 'plaque', 'skin description', 'morphology'],
    terms: ['rash', 'macule', 'papule', 'plaque', 'vesicle', 'bulla', 'pustule', 'nodule', 'wheal', 'purpura', 'petechiae', 'blanching', 'lichenification', 'excoriation'],
    body: {
      primary_lesions_flat: {
        macule: 'FLAT, under about 1 cm, a change in colour only. You can see it but not feel it. Freckle, vitiligo, early viral exanthem.',
        patch: 'A macule larger than about 1 cm.',
      },
      primary_lesions_raised_solid: {
        papule: 'RAISED, solid, under about 1 cm. Acne, insect bite, molluscum.',
        plaque: 'RAISED, solid, FLAT-TOPPED, over about 1 cm — usually papules that have merged. The classic psoriasis lesion.',
        nodule: 'RAISED, solid, and DEEP — you feel it in the dermis or subcutis more than you see it.',
        wheal: 'Raised, oedematous, pale centre with a red flare, and — critically — TRANSIENT. An individual weal lasting more than 24 hours is not ordinary urticaria and raises urticarial vasculitis.',
      },
      primary_lesions_fluid_filled: {
        vesicle: 'Fluid-filled, under about 0.5 cm. Herpes simplex, chickenpox, acute eczema.',
        bulla: 'Fluid-filled, over about 0.5 cm. Bullous pemphigoid, burns, pemphigus.',
        pustule: 'Filled with PUS. Not necessarily infected — pustular psoriasis and acne are sterile.',
      },
      secondary_lesions: {
        scale: 'Accumulated stratum corneum. Silvery in psoriasis, greasy in seborrhoeic dermatitis, fine and collaretted in pityriasis rosea.',
        crust: 'Dried exudate, serum or blood. Golden crust is the signature of impetigo.',
        excoriation: 'A scratch mark. Proves the rash ITCHES, which is diagnostically useful.',
        lichenification: 'Thickened skin with exaggerated skin markings, from chronic rubbing. Marks a chronic itchy dermatosis.',
        erosion_vs_ulcer: 'An EROSION loses epidermis only and heals without a scar. An ULCER goes into dermis or deeper and WILL scar.',
      },
      the_blanching_test: {
        how: 'Press with a glass or with your finger and look at the skin under the pressure.',
        blanching: 'The redness disappears — the blood is inside vessels. Erythema, viral exanthem, urticaria, drug rash.',
        non_blanching: 'The colour REMAINS — blood is outside the vessels. PETECHIAE (under 3 mm), PURPURA (3 mm to 1 cm), ECCHYMOSIS (larger).',
        why_it_is_the_most_important_test_in_dermatology:
          'A non-blanching rash with fever is MENINGOCOCCAL SEPSIS until proven otherwise. It also raises vasculitis, thrombocytopenia, disseminated intravascular coagulation and Henoch-Schönlein purpura. This one test separates the reassuring from the lethal.',
      },
      distribution_and_configuration: {
        distribution: 'Flexural (atopic eczema), extensor (psoriasis), photodistributed (spares under the chin, behind the ears — drug photosensitivity, pellagra, lupus), dermatomal (shingles), acral (hands and feet — scabies, hand-foot-mouth, syphilis).',
        configuration: 'Annular (ring, with an active edge — tinea), linear (contact, koebnerisation), grouped or herpetiform (herpes), target (erythema multiforme), reticular (livedo).',
      },
      how_to_describe_it_in_one_sentence:
        'Site and distribution, then number, then size, then primary lesion type, then colour, then blanching, then surface change, then any secondary features. "Multiple 1–2 cm erythematous scaly plaques on the extensor elbows and knees, blanching, with silvery scale" is a diagnosis. "A rash on the arms" is not.',
      skin_tone_note:
        'Erythema is far harder to see on darker skin and may appear violaceous, grey or simply darker than surrounding skin rather than red. Rely on PALPATION for warmth and induration, on comparison with unaffected skin, and on the patient telling you where it hurts. Describing an inflamed area as "no erythema" because it is not pink is a recognised source of missed cellulitis.',
    },
    warnings: [
      'A non-blanching rash with fever is meningococcal sepsis until proven otherwise. Give antibiotics immediately and do not wait for confirmation.',
      'Erythema is easily missed on darker skin. Use palpation, comparison and the patient\'s own report of the site, not colour alone.',
      'Any individual weal lasting more than 24 hours, or leaving bruising, suggests urticarial vasculitis and needs investigation.',
      'Mucosal involvement, skin pain out of proportion, or skin that shears with pressure suggests Stevens-Johnson syndrome or toxic epidermal necrolysis — a dermatological emergency.',
    ],
    limitations: ['Morphology narrows but rarely proves. Biopsy, scraping and culture remain necessary in many cases.'],
    cards: [
      { q: 'Papule versus plaque?', a: 'Papule is raised and solid under 1 cm. Plaque is raised, flat-topped and over 1 cm.' },
      { q: 'What does a non-blanching rash mean?', a: 'Blood is outside the vessels. With fever it is meningococcal sepsis until proven otherwise.' },
      { q: 'Erosion versus ulcer?', a: 'Erosion loses epidermis only and heals without scar. Ulcer reaches dermis or deeper and scars.' },
      { q: 'What does lichenification tell you?', a: 'The rash is chronic and itchy — thickened skin from repeated rubbing.' },
      { q: 'A weal lasting more than 24 hours?', a: 'Not ordinary urticaria. Consider urticarial vasculitis.' },
    ],
    checks: ['Blanching tested with glass or finger', 'Distribution and configuration described', 'Mucosae examined', 'Itch and excoriation noted', 'Palpation used where erythema is hard to see'],
  },

  {
    id: 'AS-DERM-0002',
    type: 'guideline',
    title: 'Tinea — Ringworm of Body, Groin, Foot, Scalp and Nail',
    short: 'Tinea',
    summary:
      'One organism group, named by site. The defining feature is an ANNULAR lesion with an ACTIVE SCALY EDGE and central clearing. The commonest error is treating it with a steroid, which removes the edge and makes it unrecognisable.',
    domains: ['infectious_disease', 'microbiology'],
    intents: ['identify', 'prescribe_reference'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['tinea', 'ringworm', 'athlete foot', 'athletes foot', 'jock itch', 'dermatophyte', 'fungal skin infection', 'tinea pedis', 'tinea capitis'],
    terms: ['tinea', 'ringworm', 'dermatophyte', 'trichophyton', 'microsporum', 'koh', 'griseofulvin', 'terbinafine', 'onychomycosis', 'kerion', 'incognito'],
    confirm_locally: true,
    body: {
      the_organisms: 'Dermatophytes — Trichophyton, Microsporum and Epidermophyton. They digest keratin, so they live in skin, hair and nail and never invade deeper in an immunocompetent person.',
      named_by_site: {
        tinea_corporis: 'Body. Annular, scaly, ACTIVE ADVANCING EDGE with central clearing — hence "ringworm", which has nothing to do with worms.',
        tinea_cruris: 'Groin. Spares the scrotum, which is the point that separates it from candida (candida involves the scrotum and has satellite lesions).',
        tinea_pedis: 'Foot — athlete\'s foot. Between the toes (especially the fourth web space), or a dry "moccasin" pattern over the sole. Often the reservoir that reinfects the groin and nails, which is why you must treat the feet too.',
        tinea_capitis: 'SCALP, and almost always in CHILDREN. Scaly patches with BROKEN HAIRS and hair loss. A KERION is a boggy inflamed pustular mass — often mistaken for a bacterial abscess and incised, which is wrong.',
        tinea_unguium: 'Nail (onychomycosis). Thickened, yellow, crumbling, distal-lateral. Slow to treat.',
        tinea_manuum: 'Hand, classically ONE hand with two feet — the "two feet, one hand" pattern.',
      },
      the_two_errors_that_matter: {
        tinea_incognito:
          'Treating tinea with a TOPICAL STEROID (often as a combined steroid-antifungal, or because it was mistaken for eczema) suppresses inflammation, abolishes the raised scaly edge, and lets the fungus spread further. The result looks nothing like ringworm and is repeatedly re-treated with more steroid. If a "eczema" patch keeps spreading despite steroid, scrape it for fungus.',
        scalp_needs_oral:
          'TINEA CAPITIS AND NAIL INFECTION CANNOT BE CURED WITH TOPICAL TREATMENT. The fungus is inside the hair shaft and the nail plate where creams do not reach. Both need ORAL antifungal therapy. Treating scalp ringworm with cream alone is a guaranteed failure and allows continued transmission in schools and households.',
      },
      diagnosis: 'Usually clinical. Skin scrapings, hair pluckings or nail clippings for microscopy (potassium hydroxide preparation) and culture confirm it — and are worth doing before committing anyone to months of oral therapy for a nail.',
      management_principles: [
        'Localised skin disease: topical antifungal, continued for a period beyond clinical clearance per local guidance.',
        'Scalp or nail: ORAL antifungal. Duration is weeks to months. Baseline and monitoring bloods may be required — follow local protocol.',
        'Treat the FEET whenever the groin or nails are involved, or it recurs.',
        'Household and animal contacts: Microsporum often comes from cats and dogs. Ask, and treat the animal too.',
        'Do not use combined steroid-antifungal preparations as a default.',
      ],
    },
    warnings: [
      'Do not treat tinea with topical steroids. It produces tinea incognito, spreads the infection and delays diagnosis.',
      'Tinea capitis and onychomycosis REQUIRE oral therapy. Creams cannot reach the hair shaft or nail plate.',
      'A kerion is fungal, not bacterial. Do not incise it — treat with oral antifungal.',
      'Tinea capitis is transmissible between children. Address household and school contacts.',
    ],
    limitations: ['Antifungal choice, dose and duration are set locally and vary with age, pregnancy and hepatic function.'],
    cards: [
      { q: 'What is the defining feature of tinea?', a: 'An annular lesion with an active, scaly, advancing edge and central clearing.' },
      { q: 'Tinea cruris versus candida in the groin?', a: 'Tinea spares the scrotum. Candida involves it and has satellite lesions.' },
      { q: 'Which two sites cannot be treated topically?', a: 'Scalp (tinea capitis) and nail (onychomycosis) — both need oral therapy.' },
      { q: 'What is tinea incognito?', a: 'Tinea modified by topical steroid — the raised scaly edge is lost and it spreads, so it is no longer recognisable.' },
      { q: 'A boggy pustular scalp mass in a child?', a: 'A kerion. Fungal — treat with oral antifungal, do not incise.' },
    ],
    checks: ['Scrapings or clippings sent before oral therapy', 'Feet examined and treated', 'Scalp/nail given oral therapy', 'Steroid preparations stopped', 'Contacts and pets addressed'],
  },

  {
    id: 'AS-DERM-0003',
    type: 'differential',
    title: 'Scaly Rashes — Psoriasis, Eczema, Pityriasis Versicolor and Pityriasis Rosea',
    short: 'Scaly rash differential',
    summary:
      'Four common scaly rashes that are routinely confused. Distribution and the character of the scale separate them, and the treatments are different enough that getting it wrong matters.',
    domains: ['immunology', 'infectious_disease'],
    intents: ['classify', 'identify'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['psoriasis', 'eczema', 'dermatitis', 'pityriasis versicolor', 'pityriasis rosea', 'tinea versicolor', 'scaly rash'],
    terms: ['psoriasis', 'eczema', 'atopic dermatitis', 'versicolor', 'pityriasis rosea', 'malassezia', 'auspitz', 'herald patch', 'koebner', 'filaggrin', 'lichenification'],
    body: {
      psoriasis: {
        what: 'Immune-mediated (T-cell, IL-17/IL-23 driven) hyperproliferation — epidermal turnover accelerates from about 28 days to 4–7 days, so scale accumulates faster than it can be shed.',
        looks_like: 'Well-DEMARCATED red plaques with THICK SILVERY scale.',
        where: 'EXTENSOR surfaces — elbows, knees — plus scalp, sacrum, natal cleft and behind the ears.',
        the_clues: [
          'AUSPITZ SIGN — pinpoint bleeding when scale is lifted, from dilated capillaries in thinned suprapapillary epidermis.',
          'KOEBNER phenomenon — new lesions appear in scratches and scars.',
          'NAILS — pitting, onycholysis, oil-drop discolouration, subungual hyperkeratosis. Nail change makes psoriatic arthritis much more likely.',
          'Ask about JOINTS. Psoriatic arthritis affects a substantial minority and is erosive — the skin diagnosis is an opportunity to catch it.',
        ],
        triggers: 'Streptococcal throat infection (guttate psoriasis in children and young adults), stress, trauma, and DRUGS — beta-blockers, lithium, antimalarials, and abrupt withdrawal of systemic steroids.',
        the_steroid_warning:
          'Never treat psoriasis with a course of ORAL steroids. Withdrawal can precipitate generalised pustular or erythrodermic psoriasis, which is life-threatening.',
      },
      eczema_atopic_dermatitis: {
        the_correction:
          'Atopic eczema is NOT a type I histamine-driven disease, despite being commonly described that way. It is a SKIN BARRIER disorder — often filaggrin-related — with secondary T-cell-mediated inflammation. Allergic contact dermatitis is TYPE IV delayed hypersensitivity. Type I hypersensitivity is urticaria and anaphylaxis, not eczema. This matters practically: it is why emollients (which repair the barrier) are the foundation of treatment and why oral antihistamines do so little for the itch.',
        looks_like: 'Ill-defined, red, scaly, and above all ITCHY. Acutely vesicular and weeping; chronically lichenified with excoriations.',
        where: 'FLEXURAL in older children and adults — antecubital and popliteal fossae, neck, wrists. In INFANTS it is face and extensor surfaces, which is the reverse.',
        management_backbone: 'Liberal emollients as the base, topical steroid of appropriate potency for flares, identify and avoid triggers, and treat secondary infection. Steroid potency should match the site — face and flexures need weak preparations.',
        infection: 'Golden crusting means bacterial infection. Widespread painful punched-out monomorphic vesicles means ECZEMA HERPETICUM — a herpes simplex superinfection that is an emergency needing systemic aciclovir.',
      },
      pityriasis_versicolor: {
        what: 'Overgrowth of commensal MALASSEZIA yeast — not a dermatophyte, and not contagious.',
        looks_like: 'Numerous small oval macules with FINE scale on the upper trunk, shoulders and neck. Hypopigmented on tanned or darker skin and hyperpigmented on pale skin — hence "versicolor".',
        the_key_counselling_point:
          'The PIGMENT CHANGE PERSISTS FOR MONTHS after the fungus is killed, because melanocyte function takes time to recover. Patients and clinicians both interpret this as treatment failure and re-treat repeatedly. Tell the patient at the outset that the colour will take months to even out and that this is not failure.',
        management: 'Topical antifungal shampoo or cream per local guidance; oral therapy for extensive or recurrent disease. Recurrence is common because the organism is a normal commensal.',
      },
      pityriasis_rosea: {
        what: 'A self-limiting eruption, probably viral (human herpesvirus 6/7 implicated).',
        looks_like:
          'A single larger HERALD PATCH first, followed days to weeks later by numerous smaller oval scaly patches on the trunk, aligned along the ribs in a "CHRISTMAS TREE" pattern, with a fine COLLARETTE of scale at the inner edge of each lesion.',
        course: 'Resolves spontaneously over about 6–12 weeks. Reassurance and emollients; treatment is rarely needed.',
        the_must_not_miss: 'SECONDARY SYPHILIS can look almost identical — but it typically involves the PALMS AND SOLES, and pityriasis rosea does not. Palm and sole involvement, lymphadenopathy, or a relevant sexual history means test for syphilis.',
      },
      the_quick_separation: {
        distribution: 'Extensor + silvery scale = psoriasis. Flexural + itchy = eczema. Upper trunk + fine scale + pigment change = versicolor. Trunk + herald patch + collarette = rosea.',
        itch: 'Eczema itches intensely. Psoriasis itches variably. Versicolor and rosea usually itch little.',
        demarcation: 'Psoriasis is sharply demarcated; eczema is not.',
      },
    },
    warnings: [
      'Never give oral steroids for psoriasis. Withdrawal can precipitate pustular or erythrodermic psoriasis.',
      'Widespread painful monomorphic vesicles on eczema is eczema herpeticum — an emergency requiring systemic aciclovir.',
      'Pityriasis rosea involving the palms and soles is secondary syphilis until excluded. Test.',
      'Match topical steroid potency to the site. Potent steroids on the face or flexures cause atrophy and striae.',
      'Warn about persistent pigment change in versicolor before treatment, or it will be read as failure.',
    ],
    limitations: ['Considerable overlap exists; biopsy is occasionally required. Treatment choices are local.'],
    cards: [
      { q: 'Is atopic eczema a type I hypersensitivity?', a: 'No. It is a skin barrier disorder with T-cell-mediated inflammation. Contact dermatitis is type IV. Type I is urticaria and anaphylaxis.' },
      { q: 'Extensor silvery plaques with nail pitting?', a: 'Psoriasis — and ask about joints, because nail change predicts psoriatic arthritis.' },
      { q: 'Why must you warn patients about versicolor pigment?', a: 'The colour change persists for months after cure and is otherwise read as treatment failure.' },
      { q: 'Herald patch then a Christmas-tree trunk rash?', a: 'Pityriasis rosea — but exclude secondary syphilis if palms and soles are involved.' },
      { q: 'Which drug class must never be used systemically in psoriasis?', a: 'Oral corticosteroids — withdrawal can trigger pustular or erythrodermic disease.' },
    ],
    checks: ['Distribution mapped (flexural vs extensor vs trunk)', 'Nails and joints examined in psoriasis', 'Palms and soles checked in a rosea-like rash', 'Secondary infection looked for in eczema', 'Steroid potency matched to site'],
  },

  {
    id: 'AS-DERM-0004',
    type: 'differential',
    title: 'Skin and Soft Tissue Infection — Impetigo, Cellulitis, Erysipelas, Abscess and Necrotising Fasciitis',
    short: 'Skin infection',
    summary:
      'A spectrum by depth. The only decision that must never be got wrong is recognising necrotising fasciitis, where the finding is pain far out of proportion to appearance and the treatment is the operating theatre, not antibiotics.',
    domains: ['infectious_disease', 'general_surgery', 'emergency_medicine'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['cellulitis', 'erysipelas', 'impetigo', 'abscess', 'necrotising fasciitis', 'necrotizing fasciitis', 'skin infection', 'whitlow'],
    terms: ['cellulitis', 'erysipelas', 'impetigo', 'abscess', 'necrotising fasciitis', 'herpetic whitlow', 'paronychia', 'streptococcus', 'staphylococcus', 'crepitus'],
    confirm_locally: true,
    body: {
      by_depth: {
        impetigo: 'EPIDERMIS. Golden-crusted lesions, highly contagious, common in children. Staphylococcus aureus and Streptococcus pyogenes. Bullous form is staphylococcal.',
        erysipelas: 'UPPER dermis and lymphatics. SHARPLY DEMARCATED, raised, fiery red, with a palpable edge you can trace. Usually Streptococcus pyogenes. Fever and rigors are common and often precede the rash.',
        cellulitis: 'DEEPER dermis and subcutaneous fat. Poorly demarcated, warm, tender, swollen. You cannot draw its edge sharply.',
        abscess: 'A walled-off collection of pus. FLUCTUANT. Antibiotics alone will not cure it — it needs DRAINAGE. This is the commonest reason for "failed" antibiotic therapy in soft tissue infection.',
        necrotising_fasciitis: 'FASCIAL plane. A surgical emergency.',
      },
      erysipelas_versus_cellulitis: 'Erysipelas has a SHARP, RAISED, PALPABLE border. Cellulitis fades into normal skin. In practice they overlap and are often managed the same way, but the sharp edge points to streptococcus.',
      the_mimic_that_causes_most_over_treatment: {
        problem: 'A large proportion of "bilateral cellulitis" is not infection at all.',
        the_rule: 'CELLULITIS IS ALMOST ALWAYS UNILATERAL. Bilateral red swollen legs are far more likely to be venous stasis dermatitis, lipodermatosclerosis or chronic oedema.',
        other_mimics: 'Deep vein thrombosis, gout, acute lipodermatosclerosis, contact dermatitis, and an inflammatory reaction to an insect bite.',
      },
      necrotising_fasciitis: {
        why_it_is_here: 'Because it is missed, and every hour of delay increases mortality.',
        the_red_flags: [
          'PAIN OUT OF PROPORTION to the visible skin changes — the single most important early sign, and it appears before the skin looks bad.',
          'Rapid progression over hours, with the margin advancing while you watch.',
          'Systemic toxicity — tachycardia, hypotension, confusion — disproportionate to a "simple cellulitis".',
          'Skin anaesthesia over the area (cutaneous nerves destroyed).',
          'Crepitus, bullae, dusky or grey skin, skin necrosis — these are LATE. Do not wait for them.',
        ],
        action: 'Immediate senior surgical review, resuscitation, broad-spectrum antibiotics, and urgent surgical exploration and debridement. Imaging must never delay theatre.',
        the_teaching_point: 'The diagnosis is made in the operating theatre, not on a scan. If it is suspected strongly enough to consider imaging, it is suspected strongly enough to call a surgeon.',
      },
      hand_infections: {
        herpetic_whitlow: {
          what: 'Herpes simplex infection of a FINGERTIP. Grouped painful VESICLES on an erythematous base, often with intense burning pain preceding the lesions. Classically in healthcare and dental workers, and in children who suck their thumbs during a primary oral infection.',
          the_critical_error:
            'It is repeatedly mistaken for a bacterial paronychia or felon and INCISED. Incision does not help, risks bacterial superinfection and systemic spread, and delays healing. DO NOT INCISE A HERPETIC WHITLOW.',
          management: 'Self-limiting over 2–3 weeks. Antiviral therapy shortens it if started early. Cover the lesion — it is contagious.',
        },
        paronychia: 'Infection of the nail fold. Acute is usually staphylococcal and may need drainage if pus has collected; chronic is often candidal and related to wet work.',
        felon: 'A closed-space infection of the finger PULP. Extremely painful and tense, and needs surgical drainage because pressure necrosis of the pulp and osteomyelitis follow.',
      },
      general_management_principles: [
        'MARK THE EDGE with a pen and date it. That is the single most useful bedside monitoring tool for cellulitis — it tells you objectively whether the treatment is working.',
        'Elevate the limb.',
        'Look for and treat the PORTAL OF ENTRY — tinea pedis between the toes, an ulcer, a bite, eczema. Recurrent cellulitis is usually recurrent because the door was never closed.',
        'Check glucose — undiagnosed diabetes commonly presents this way.',
        'Drain any abscess. Antibiotics do not penetrate pus.',
      ],
    },
    warnings: [
      'Pain out of proportion to appearance is necrotising fasciitis until proven otherwise. Call the surgeon immediately; do not wait for imaging, crepitus or skin necrosis.',
      'Do NOT incise a herpetic whitlow. It is viral; incision causes harm.',
      'An abscess needs drainage. Antibiotics alone will fail.',
      'Bilateral leg redness is rarely cellulitis. Reconsider before prescribing.',
      'Always look for the portal of entry, especially tinea between the toes, or the cellulitis will recur.',
    ],
    limitations: ['Antibiotic choice is dictated by local resistance patterns and national guidance.'],
    cards: [
      { q: 'The earliest and most important sign of necrotising fasciitis?', a: 'Pain out of proportion to the visible skin changes. Crepitus and necrosis are late.' },
      { q: 'Erysipelas versus cellulitis?', a: 'Erysipelas has a sharp, raised, palpable edge and is more superficial. Cellulitis fades into normal skin.' },
      { q: 'Why does cellulitis "fail" antibiotics?', a: 'Usually an undrained abscess, or it was never cellulitis — consider stasis dermatitis, DVT or gout.' },
      { q: 'Grouped painful vesicles on a fingertip — what must you not do?', a: 'Do not incise. It is a herpetic whitlow.' },
      { q: 'Best bedside monitoring tool in cellulitis?', a: 'Mark and date the edge, then reassess.' },
    ],
    checks: ['Pain-out-of-proportion assessed', 'Edge marked and dated', 'Abscess sought and drained', 'Portal of entry found and treated', 'Glucose checked', 'Limb elevated', 'Surgical review if any red flag'],
  },
];
