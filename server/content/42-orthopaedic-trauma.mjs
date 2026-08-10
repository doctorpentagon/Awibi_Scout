/**
 * Orthopaedic trauma — fixation, the paediatric growth plate, open fractures
 * and spinal trauma classification.
 *
 * Abbreviations are expanded on first use throughout, per the standing rule.
 */

export default [
  {
    id: 'AS-ORTH-0001',
    type: 'guideline',
    title: 'Fracture Management — The R\'s, ORIF, External Fixation and Compartment Syndrome',
    short: 'Fracture management principles',
    summary:
      'Every fracture follows the same sequence: resuscitate, reduce, hold, rehabilitate. The decision that matters is HOW you hold it — a plate (ORIF) gives perfect anatomy but needs healthy soft tissue; an external fixator gives stability without touching the zone of injury, which is why it wins in war, contamination and physiological collapse.',
    domains: ['orthopaedics', 'trauma', 'general_surgery'],
    intents: ['classify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'fracture management', 'orif', 'open reduction internal fixation', 'external fixator',
      'ex fix', 'internal fixation', 'closed reduction', 'damage control orthopaedics',
      'compartment syndrome', 'six ps', '6 ps', 'four rs', '6 rs', 'fracture healing',
      'k-wire', 'intramedullary nail', 'plate and screws', 'traction',
    ],
    terms: [
      'orif', 'open reduction', 'internal fixation', 'external fixator', 'damage control',
      'reduction', 'immobilisation', 'rehabilitation', 'compartment syndrome', 'fasciotomy',
      'intramedullary nail', 'k-wire', 'plate', 'screw', 'traction', 'non-union', 'malunion',
      'avascular necrosis', 'fat embolism', 'primary bone healing', 'secondary bone healing',
      'callus', 'relative stability', 'absolute stability',
    ],
    confirm_locally: true,
    body: {
      abbreviations_expanded: {
        orif: 'ORIF — OPEN REDUCTION AND INTERNAL FIXATION. "Open" means the fracture is surgically exposed; "reduction" means the bone ends are put back into position; "internal fixation" means metal (plate, screws, nail, wire) holds it there, inside the body.',
        crif: 'CRIF / CRPP — CLOSED Reduction and Internal Fixation, or Closed Reduction and Percutaneous Pinning. The fracture is reduced WITHOUT opening it, then held with wires passed through the skin.',
        ex_fix: 'EXTERNAL FIXATOR — pins into bone ABOVE and BELOW the fracture, connected by a frame OUTSIDE the skin, bridging the injured zone without operating in it.',
        im_nail: 'IM NAIL — INTRAMEDULLARY NAIL. A metal rod passed down the marrow cavity of a long bone.',
        dco: 'DCO — DAMAGE CONTROL ORTHOPAEDICS. Temporary stabilisation now, definitive surgery later, when the patient can survive it.',
      },

      the_sequence_the_r_s: {
        a_note_on_the_mnemonic:
          'You will hear this taught as the "4 R\'s", the "5 R\'s" and the "6 R\'s" depending on the school — the extra letters are usually Recognition and Review/Referral bolted onto the front and back. The number does not matter; the SEQUENCE does. Do not argue about the count in an exam — state the steps.',
        one_resuscitate:
          'The patient before the limb. Airway, breathing, circulation. A femoral shaft fracture can lose 1–1.5 litres and a pelvic fracture several litres — fractures cause shock. Look for the injuries that kill before the one you can see. In an open fracture, this is also when TETANUS status is checked and ANTIBIOTICS are given — antibiotic timing is one of the strongest determinants of infection.',
        two_recognise_and_assess:
          'History and mechanism (energy transferred predicts soft tissue damage more than the X-ray does), then examine: skin integrity (open or closed?), NEUROVASCULAR STATUS distal to the injury — documented BEFORE and AFTER any manipulation, every time, without exception — and compartments. Then image: two views, two joints, two occasions where needed.',
        three_reduce:
          'Restore alignment, length and rotation. CLOSED reduction (manipulation, traction) if possible; OPEN if not. Reduction relieves pain, reduces bleeding, relieves pressure on skin and neurovascular structures, and is sometimes urgent in its own right — a dislocated ankle tenting white skin must be reduced immediately, before imaging, or the skin dies.',
        four_retain_hold:
          'Maintain the reduction while the bone heals: cast or splint, traction, or surgical fixation. This is where the ORIF-versus-external-fixation decision sits.',
        five_rehabilitate:
          'Begin early. The enemy is STIFFNESS, muscle wasting and thromboembolism, not movement. "Rehabilitation starts on day one" is not a slogan — a perfectly fixed fracture with a stiff, wasted limb is a failed treatment.',
        six_review: 'Serial radiographs and clinical review for loss of position, infection, non-union and functional recovery.',
      },

      how_bone_actually_heals_and_why_it_changes_the_fixation_choice: {
        secondary_healing: 'Healing through CALLUS, in stages — haematoma, inflammation, soft callus, hard callus, remodelling. It requires MICROMOTION at the fracture site. This is what happens in a cast, in traction, with an intramedullary nail, and with an external fixator. These give RELATIVE stability, and you EXPECT to see callus on the follow-up film.',
        primary_healing: 'Direct cortical healing with NO callus, requiring ABSOLUTE stability and compression — a lag screw and compression plate. Here, visible callus is a sign that the fixation is LOOSE, not that healing is going well. This inversion catches people out constantly.',
        the_practical_rule: 'Know which kind of healing your construct is aiming for before you interpret the follow-up X-ray.',
      },

      choosing_the_construct: {
        conservative_cast_or_splint: 'Undisplaced or minimally displaced stable fractures, and most paediatric fractures, where remodelling potential is enormous. Watch for cast complications: pressure sores, compartment syndrome under a tight cast, and loss of position.',
        orif: {
          what_it_offers: 'ANATOMICAL reduction, rigid fixation and EARLY MOBILISATION. Essential for intra-articular fractures, where a step in the joint surface of even 1–2 mm leads to post-traumatic arthritis.',
          indications: 'Intra-articular fractures · failed closed reduction · unstable patterns · fractures with vascular injury needing repair · pathological fractures · non-union · some open fractures once clean · and the classic list where non-operative treatment does badly, such as displaced femoral neck fractures in the young.',
          the_cost: 'It requires a surgical exposure through soft tissue that is already injured, and it introduces METAL into a contaminated or swollen field. In the wrong soft-tissue conditions it converts a fracture problem into an INFECTION problem — and infected metal is a far worse disease than the original fracture.',
        },
        external_fixation: {
          why_it_exists: 'It achieves stability with pins placed OUTSIDE the zone of injury, so it does not require dissecting through damaged, contaminated or swollen tissue.',
          when_it_is_the_right_answer: [
            'SEVERE OPEN FRACTURES, especially Gustilo type III.',
            'GUNSHOT and blast injuries — contaminated by definition.',
            'The physiologically UNSTABLE polytrauma patient — this is DAMAGE CONTROL ORTHOPAEDICS: stabilise fast, limit the second hit of a long operation, return for definitive fixation when the patient is warm, resuscitated and not coagulopathic.',
            'Severe SOFT TISSUE swelling, fracture blisters, or degloving where a skin incision would not heal — commonly a "spanning" fixator across the ankle or knee until swelling settles.',
            'Fractures with VASCULAR INJURY, where the bone must be stabilised quickly before or after vascular repair.',
            'Infected non-union, and limb lengthening or deformity correction (Ilizarov and other circular frames).',
            'Resource-limited and conflict settings — an external fixator needs less theatre infrastructure and less implant inventory than a full plating set.',
          ],
          the_downsides: 'PIN-SITE INFECTION (needs taught daily pin care), pin loosening, joint stiffness while the frame spans a joint, bulk and social burden for the patient, and neurovascular injury during pin insertion if safe corridors are not respected.',
        },
        intramedullary_nail: 'The workhorse for femoral and tibial SHAFT fractures. Load-sharing, closed insertion away from the fracture site, allows early weight-bearing. Caution in the very contaminated open fracture, and the timing in a patient with chest injury has historically been debated because of the pulmonary insult from reaming.',
        traction: 'Largely superseded where surgery is available, but still genuinely useful as a temporising measure, in some paediatric femoral fractures, and where surgical capacity does not exist.',
      },

      compartment_syndrome: {
        why_it_belongs_here: 'It is the emergency that turns a treatable fracture into a permanently useless limb, and it is missed by relying on the wrong signs.',
        what_it_is: 'Pressure rises inside a closed fascial compartment until it exceeds perfusion pressure. Muscle and nerve become ischaemic and die. It occurs in CLOSED and OPEN fractures alike — an open fracture does NOT decompress the compartment, which is a dangerous and widespread assumption.',
        the_six_ps_and_their_real_value: {
          the_list: 'PAIN · PARAESTHESIA · PALLOR · PARALYSIS · PULSELESSNESS · POIKILOTHERMIA (perishing cold).',
          the_critical_correction:
            'Only the FIRST TWO are early. PALLOR, PARALYSIS and PULSELESSNESS are LATE — by the time the pulse is gone the muscle is usually already dead. WAITING FOR THE SIX P\'s IS HOW LIMBS ARE LOST. A PRESENT PULSE DOES NOT EXCLUDE COMPARTMENT SYNDROME, because compartment pressure rarely exceeds systolic arterial pressure.',
          what_to_act_on_instead: 'PAIN OUT OF PROPORTION to the injury, pain that ESCALATES and needs increasing opioid, and PAIN ON PASSIVE STRETCH of the muscles in that compartment. Those three, together, are the diagnosis. A rising analgesia requirement is a red flag, not a nursing problem.',
        },
        the_unreliable_patient: 'In the unconscious, intubated, regionally blocked or very young patient, pain cannot be assessed. Here you need a high index of suspicion and compartment PRESSURE MONITORING. Note also that a REGIONAL BLOCK can mask evolving compartment syndrome — a real and recognised hazard when siting blocks in high-risk fractures.',
        the_action: 'Remove all circumferential casts and dressings down to skin — a split cast is not enough, it must be split through every layer. Keep the limb at HEART LEVEL (not elevated — elevation reduces the arteriovenous gradient and worsens perfusion). Correct hypotension. Then URGENT FASCIOTOMY. Fasciotomy is a clinical decision; do not delay it for a pressure reading you cannot obtain quickly.',
        after: 'Watch for RHABDOMYOLYSIS — check creatine kinase and potassium, give generous fluids, and monitor renal function.',
      },

      the_complications_to_look_for: {
        early: 'Haemorrhage and shock · neurovascular injury · compartment syndrome · FAT EMBOLISM SYNDROME (classically 24–72 hours after a long bone fracture: breathlessness and hypoxia, confusion, and a petechial rash in the axilla, conjunctiva and upper chest) · infection · venous thromboembolism.',
        late: 'NON-UNION and delayed union · MALUNION · AVASCULAR NECROSIS at the classic watershed sites — femoral head after neck fracture, scaphoid proximal pole, talus — where the blood supply runs retrograde · post-traumatic arthritis · joint stiffness · complex regional pain syndrome · limb length discrepancy and growth arrest in children · implant failure.',
      },
    },
    warnings: [
      'Document neurovascular status BEFORE and AFTER every manipulation, cast and operation. This is the single most important record in fracture care.',
      'A PRESENT PULSE DOES NOT EXCLUDE compartment syndrome. Pain out of proportion and pain on passive stretch are the early signs.',
      'The six P\'s are mostly LATE signs. Waiting for them costs limbs.',
      'An OPEN fracture does not decompress a compartment — compartment syndrome still occurs.',
      'Keep the limb at heart level in suspected compartment syndrome. Elevation worsens perfusion.',
      'Split casts through EVERY layer down to skin, not just the plaster.',
      'A regional block can mask evolving compartment syndrome — consider this before siting one in a high-risk fracture.',
      'Visible callus around a compression plate means the fixation is LOOSE, not that healing is going well.',
      'Reduce a dislocation that is tenting or blanching skin IMMEDIATELY — before imaging — or the skin necroses.',
      'Femoral shaft fractures bleed 1–1.5 litres; pelvic fractures far more. Fractures cause shock.',
      'Internal fixation in the wrong soft-tissue conditions converts a fracture problem into an infected-metal problem.',
      'Suspect fat embolism 24–72 hours after long bone fracture: hypoxia, confusion, petechiae in the axilla and conjunctiva.',
    ],
    limitations: ['Implant choice, antibiotic agents, timing thresholds and thromboprophylaxis are protocol- and resource-specific. Scout states no doses.'],
    cards: [
      { q: 'What does ORIF stand for?', a: 'Open Reduction and Internal Fixation — the fracture is exposed, realigned and held with internal metal.' },
      { q: 'When is an external fixator preferred over a plate?', a: 'Severe open fractures, gunshot and blast, damage control in unstable polytrauma, bad soft tissues, and vascular injury.' },
      { q: 'What is damage control orthopaedics?', a: 'Rapid temporary stabilisation now, definitive fixation later once the patient is physiologically able to survive it.' },
      { q: 'Which two of the six P\'s are early?', a: 'Pain and paraesthesia. Pallor, paralysis and pulselessness are late.' },
      { q: 'Does a palpable pulse exclude compartment syndrome?', a: 'No — compartment pressure rarely exceeds systolic pressure.' },
      { q: 'Which three findings actually make the diagnosis?', a: 'Pain out of proportion, escalating analgesia requirement, and pain on passive stretch.' },
      { q: 'Should you elevate a limb with suspected compartment syndrome?', a: 'No — keep it at heart level. Elevation reduces perfusion pressure.' },
      { q: 'Callus around a compression plate means what?', a: 'The fixation is loose — absolute stability should heal without callus.' },
      { q: 'Which fractures classically cause avascular necrosis?', a: 'Femoral neck, scaphoid proximal pole, talus — retrograde blood supply.' },
      { q: 'How does fat embolism syndrome present?', a: 'Hypoxia, confusion and a petechial rash 24–72 hours after a long bone fracture.' },
    ],
    checks: ['Patient resuscitated before the limb addressed', 'Neurovascular status documented before and after every manipulation', 'Open or closed established', 'Tetanus and antibiotics given if open', 'Compartments assessed and reassessed', 'Analgesia requirement trend reviewed', 'Two views and joint above and below imaged', 'Rehabilitation started early'],
  },

  {
    id: 'AS-ORTH-0002',
    type: 'classification',
    title: 'Salter-Harris Classification — Growth Plate Fractures in Children',
    short: 'Salter-Harris',
    summary:
      'Five types, remembered as SALTR. The higher the number the worse the prognosis, because types III and IV cross into the joint and type V crushes the growth plate itself. Type I can look completely normal on X-ray — the diagnosis is tenderness over the physis, not the film.',
    domains: ['orthopaedics', 'paediatrics', 'trauma'],
    intents: ['classify', 'identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'salter harris', 'salter-harris', 'saltr', 'growth plate fracture', 'physeal fracture',
      'physeal injury', 'epiphyseal injury', 'thurston holland', 'growth arrest',
    ],
    terms: [
      'salter harris', 'saltr', 'physis', 'growth plate', 'epiphysis', 'metaphysis', 'diaphysis',
      'thurston holland', 'tillaux', 'triplane', 'growth arrest', 'physeal bar', 'angular deformity',
      'limb length discrepancy', 'lateral condyle', 'slipped upper femoral epiphysis',
    ],
    confirm_locally: true,
    body: {
      the_anatomy_you_need_first: {
        epiphysis: 'The END of the bone, beyond the growth plate, forming the joint surface.',
        physis: 'The GROWTH PLATE itself — a cartilage disc where lengthening happens. It is the WEAKEST part of a child\'s bone: weaker than the surrounding bone and weaker than the ligaments.',
        metaphysis: 'The flared segment between the growth plate and the shaft.',
        diaphysis: 'The shaft.',
        the_consequence_that_defines_paediatric_trauma:
          'Because the physis is weaker than the ligaments, a force that would SPRAIN an adult ankle FRACTURES a child\'s growth plate. "A sprain in a skeletally immature patient is a fracture until proven otherwise" — this is why a child with a tender growth plate and a normal X-ray is immobilised and reviewed, not discharged as a sprain.',
      },

      the_five_types_saltr: {
        the_mnemonic: 'SALTR — Slip, Above, Lower, Through, Rammed. Each letter tells you where the fracture line runs relative to the growth plate.',
        type_i_s_slip: {
          anatomy: 'Through the PHYSIS ONLY. The epiphysis slips off the metaphysis; no bone is fractured.',
          x_ray: 'MAY LOOK COMPLETELY NORMAL, or show only a subtly WIDENED physis. This is the trap. Diagnose it clinically on point tenderness over the growth plate.',
          examples: 'Distal radius in a young child; SLIPPED UPPER FEMORAL EPIPHYSIS is essentially a chronic type I.',
          prognosis: 'Excellent. Growth disturbance is rare.',
        },
        type_ii_a_above: {
          anatomy: 'Through the PHYSIS and out through the METAPHYSIS — taking a triangular metaphyseal fragment called the THURSTON-HOLLAND fragment.',
          frequency: 'THE COMMONEST — roughly 75% of all physeal injuries.',
          examples: 'Distal radius, distal tibia.',
          prognosis: 'Good. Usually managed by closed reduction and cast.',
        },
        type_iii_l_lower: {
          anatomy: 'Through the PHYSIS and down through the EPIPHYSIS into the JOINT. INTRA-ARTICULAR.',
          examples: 'Juvenile TILLAUX fracture of the distal tibia.',
          prognosis: 'Guarded. Because it enters the joint, it needs ANATOMICAL reduction — often ORIF — to prevent both joint incongruity and growth arrest.',
        },
        type_iv_t_through: {
          anatomy: 'Crosses ALL THREE — metaphysis, physis and epiphysis — in a single vertical line. INTRA-ARTICULAR.',
          examples: 'LATERAL CONDYLE of the humerus — the classic, and notorious for non-union and deformity if under-treated.',
          prognosis: 'Poor without perfect reduction. High risk of forming a PHYSEAL BAR (a bony bridge across the growth plate) causing angular deformity. Usually needs ORIF.',
        },
        type_v_r_rammed: {
          anatomy: 'A CRUSH injury of the physis from axial compression. Nothing is displaced.',
          x_ray: 'Often looks NORMAL at the time. The diagnosis is usually made RETROSPECTIVELY, months later, when growth has already arrested.',
          prognosis: 'THE WORST. Almost always causes growth arrest and progressive deformity. There is little to do acutely except recognise the mechanism and warn the family that follow-up is essential.',
        },
      },

      the_later_additions: {
        note: 'Types VI to IX were added by Rang and Ogden and are far less used. Know that they exist; you will rarely be asked beyond V.',
        type_vi: 'Injury to the PERICHONDRIAL RING at the edge of the physis — often from a degloving or lawnmower-type injury. Causes a peripheral bar and angular deformity.',
        type_vii: 'Isolated EPIPHYSEAL injury not involving the physis.',
        type_viii: 'Isolated METAPHYSEAL injury affecting metaphyseal growth and remodelling.',
        type_ix: 'PERIOSTEAL injury impairing appositional (width) growth.',
      },

      why_this_classification_earns_its_place: {
        prognosis: 'The number predicts outcome: I and II usually do well with closed treatment; III and IV are intra-articular and usually need surgery; V does badly whatever you do.',
        the_thing_that_must_be_said_to_the_family:
          'ANY physeal injury can cause GROWTH ARREST, and arrest may only declare itself MONTHS TO YEARS later as a progressive angular deformity or a limb length discrepancy. Every child with a physeal fracture needs planned follow-up until growth is complete or the risk has passed, and the family must be told this at the first visit — otherwise they will not return, and the deformity presents late.',
        the_younger_the_child_the_worse_the_arrest: 'A young child has more growth remaining, so an arrest produces a larger final deformity. Paradoxically, younger children also remodel non-physeal fractures better. Both are true and they apply to different things.',
      },

      practical_points: [
        'Point tenderness over the growth plate with a normal X-ray is a Salter-Harris I until proven otherwise. Immobilise and review.',
        'Compare with the OTHER SIDE if uncertain — a comparison view of the uninjured limb resolves many doubts about physeal width.',
        'Avoid repeated forceful reduction attempts of a physeal fracture; each manipulation can further damage the germinal layer and cause the arrest you are trying to prevent.',
        'If a physeal fracture presents LATE (more than about a week), aggressive remanipulation is often more harmful than accepting the position and planning later correction.',
        'A child with a physeal fracture from a mechanism that does not fit, or with multiple injuries of different ages, requires a SAFEGUARDING assessment.',
      ],
    },
    warnings: [
      'A Salter-Harris type I can have a completely NORMAL X-ray. Tenderness over the physis is the diagnosis — immobilise and review.',
      'In a skeletally immature patient, treat an apparent "sprain" as a physeal fracture until proven otherwise — the physis is weaker than the ligaments.',
      'Types III and IV are INTRA-ARTICULAR and usually need anatomical reduction, often ORIF.',
      'Type V is diagnosed retrospectively after growth arrest and has the worst prognosis.',
      'Every physeal injury needs planned follow-up for growth arrest — tell the family at the first visit or they will not return.',
      'Type IV lateral condyle of the humerus is notorious for non-union and deformity if under-treated.',
      'Repeated forceful manipulation of a physeal fracture can itself cause growth arrest.',
      'A fracture with a mechanism that does not fit, or injuries of different ages, requires safeguarding assessment.',
    ],
    limitations: ['Reduction thresholds, fixation choice and follow-up intervals are protocol- and age-specific.'],
    cards: [
      { q: 'What does SALTR stand for?', a: 'Slip (I), Above (II), Lower (III), Through (IV), Rammed/crush (V).' },
      { q: 'Which type is commonest?', a: 'Type II — about 75%, with a Thurston-Holland metaphyseal fragment.' },
      { q: 'Which type has a normal X-ray acutely and the worst prognosis?', a: 'Type V — a crush of the physis, usually diagnosed after growth has already arrested.' },
      { q: 'Which types are intra-articular?', a: 'Types III and IV — they need anatomical reduction.' },
      { q: 'What is the Thurston-Holland fragment?', a: 'The triangular metaphyseal fragment of a Salter-Harris type II.' },
      { q: 'Why is a "sprain" suspect in a child?', a: 'The physis is weaker than the ligaments, so the growth plate fractures instead.' },
      { q: 'What must every family be told?', a: 'That growth arrest can appear months to years later, so follow-up is essential.' },
      { q: 'Which type IV fracture is notorious?', a: 'Lateral condyle of the humerus — non-union and deformity if under-treated.' },
    ],
    checks: ['Physis palpated for point tenderness', 'Comparison view considered', 'Type assigned and intra-articular involvement assessed', 'Neurovascular status documented', 'Growth arrest risk explained to the family', 'Follow-up arranged and its purpose stated', 'Safeguarding considered if mechanism does not fit'],
  },

  {
    id: 'AS-ORTH-0003',
    type: 'classification',
    title: 'Gustilo-Anderson, Open Fractures and Gunshot Injuries',
    short: 'Gustilo-Anderson and open fractures',
    summary:
      'Grade by the SOFT TISSUE, not the hole in the skin. A one-centimetre wound from a high-velocity rifle round is a type III injury, and the true grade can only be assigned in theatre after debridement. Antibiotics within the hour matter more than the timing of surgery.',
    domains: ['orthopaedics', 'trauma', 'general_surgery', 'infectious_disease'],
    intents: ['classify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'gustilo anderson', 'gustilo-anderson', 'gustilo', 'open fracture', 'compound fracture',
      'gunshot fracture', 'ballistic injury', 'mess score', 'mangled extremity severity score',
      'ao ota classification', 'debridement',
    ],
    terms: [
      'gustilo', 'anderson', 'open fracture', 'compound fracture', 'debridement', 'irrigation',
      'periosteal stripping', 'flap', 'soft tissue coverage', 'gunshot', 'high velocity',
      'low velocity', 'cavitation', 'mess score', 'mangled extremity', 'amputation', 'ao ota',
      'tetanus', 'clostridium', 'gas gangrene', 'fix and flap',
    ],
    confirm_locally: true,
    body: {
      the_governing_principle:
        'An open fracture is a SOFT TISSUE injury that happens to involve bone. The prognosis is decided by the soft tissue envelope, its blood supply and its contamination — not by the fracture pattern. Everything in the classification follows from that.',

      gustilo_anderson: {
        history_note: 'Gustilo and Anderson described types I–III in 1976. Gustilo, Mendoza and Williams SUBDIVIDED type III into A, B and C in 1984. So "modified Gustilo-Anderson" simply means the version with IIIA/B/C — which is the version everyone now uses.',
        type_i: 'Wound UNDER 1 cm. Clean. LOW energy. Minimal soft tissue damage, usually an inside-out puncture from the bone end. Simple fracture pattern.',
        type_ii: 'Wound 1–10 cm. MODERATE energy and contamination. Moderate soft tissue damage but adequate coverage — no flap required.',
        type_iii_general: 'Wound usually OVER 10 cm, HIGH energy, EXTENSIVE soft tissue damage and contamination. Also type III REGARDLESS OF WOUND SIZE if there is: a segmental or severely comminuted fracture, a farmyard or heavily contaminated injury, a gunshot from a high-velocity weapon, a vascular injury, or a delay of more than several hours before treatment.',
        type_iiia: 'Extensive soft tissue damage, but the bone can still be COVERED with local soft tissue. No flap needed.',
        type_iiib: 'Extensive damage with PERIOSTEAL STRIPPING and BONE EXPOSED. Coverage is inadequate — requires a FLAP (local or free). This is the injury needing combined orthopaedic and plastic surgery.',
        type_iiic: 'ANY open fracture with an ARTERIAL INJURY REQUIRING REPAIR to save the limb — regardless of wound size or soft tissue damage. Highest amputation rate.',
        the_two_practical_corrections: {
          grade_after_debridement:
            'The definitive grade is assigned IN THEATRE AFTER DEBRIDEMENT, not in the emergency department. The skin wound systematically UNDER-represents the injury, and inter-observer agreement on Gustilo grading from the ED is known to be poor. Do not let an initial "type I" label anchor the plan.',
          the_size_is_a_proxy: 'Wound length is a proxy for energy, not the thing itself. Judge energy from the MECHANISM, the fracture comminution and the muscle findings.',
        },
      },

      management_of_open_fractures: {
        the_priority_order: [
          'Resuscitate. Look for the injuries that kill.',
          'ANTIBIOTICS AS EARLY AS POSSIBLE — ideally within an hour of injury. This is the single most evidence-supported intervention for preventing infection, and it outweighs surgical timing. Agents commonly used: a first-generation cephalosporin such as CEFAZOLIN for types I and II; broader Gram-negative cover added (for example an aminoglycoside such as GENTAMICIN) for type III; and additional anaerobic cover such as PENICILLIN or metronidazole for farmyard, soil or vascular-compromised wounds because of CLOSTRIDIUM. Follow your local protocol for agents and doses.',
          'TETANUS assessment — immunisation status and immunoglobulin as indicated.',
          'Photograph the wound once, then apply a SALINE-SOAKED sterile dressing and DO NOT repeatedly uncover it. Repeated inspection increases contamination and adds nothing.',
          'Splint, and document neurovascular status.',
          'Surgical DEBRIDEMENT — thorough excision of all dead and contaminated tissue, and copious irrigation. Debridement quality matters more than debridement speed; timing within 12–24 hours is generally acceptable for most injuries, with immediate surgery for gross contamination, vascular compromise or compartment syndrome. This has replaced the old "6-hour rule", which was never well evidenced.',
          'STABILISE the fracture — commonly an external fixator initially in type III.',
          'EARLY SOFT TISSUE COVERAGE. Definitive coverage within about 72 hours, and certainly within 7 days, substantially reduces deep infection ("fix and flap"). A bone left exposed becomes an infected bone.',
        ],
        what_not_to_do: 'Do NOT primarily close a contaminated wound under tension. Do NOT irrigate with high-pressure lavage or antiseptics into the wound — evidence favours low-pressure normal saline. Do NOT remove bone fragments that retain a soft tissue attachment and blood supply.',
      },

      gunshot_and_ballistic_injury: {
        the_first_rule: 'Every gunshot fracture is an OPEN fracture by definition — there is a tract from the outside to the bone, and the projectile is not sterile.',
        low_velocity: 'Handguns, under roughly 600 m/s. Damage is largely confined to the tract. Usually behaves as Gustilo I or II and many are managed with local wound care, antibiotics and fracture treatment without formal extensive debridement.',
        high_velocity: 'Rifles and military weapons, over roughly 600 m/s. Energy transfer is proportional to the SQUARE of velocity, and the round produces TEMPORARY CAVITATION — a transient cavity many times the projectile diameter that tears, stretches and devitalises tissue far beyond the visible tract, and sucks debris and clothing inward. These behave as Gustilo III and require formal, and often REPEATED, debridement.',
        the_key_clinical_consequence:
          'The visible entry and exit wounds tell you very little about the true zone of injury in a high-velocity wound. Tissue that looks viable at first debridement may be dead at 48 hours, which is why PLANNED SECOND-LOOK debridement is standard and why primary closure is avoided.',
        shotgun: 'Depends heavily on range. Close range transfers enormous energy plus wadding and clothing into the wound and behaves as a severe type III.',
        additional_considerations: 'Retained fragments are usually left unless intra-articular, intravascular, or near a nerve — an INTRA-ARTICULAR lead fragment must be removed because synovial fluid dissolves lead and causes systemic plumbism and joint destruction. Document injuries carefully and preserve evidence where there are forensic implications, and follow local legal reporting duties.',
      },

      ao_ota_classification: {
        what_it_is: 'The AO/OTA classification — AO from the Arbeitsgemeinschaft für Osteosynthesefragen, OTA from the Orthopaedic Trauma Association — is a universal alphanumeric code for describing any long bone fracture, used for research, audit and communication.',
        the_structure: 'BONE . SEGMENT — TYPE . GROUP. Bones: 1 humerus, 2 radius/ulna, 3 femur, 4 tibia/fibula. Segments: 1 proximal, 2 diaphysis (shaft), 3 distal. Types for the diaphysis: A simple, B wedge, C complex/comminuted.',
        example: '32-B2 = femur (3), diaphysis (2), wedge fracture (B2).',
        why_bother: 'It removes ambiguity from referral and research. It does not, by itself, tell you what to do.',
      },

      mess_score: {
        what_it_is: 'MESS — MANGLED EXTREMITY SEVERITY SCORE. Scores four domains: skeletal and soft tissue injury (1–4), limb ischaemia (1–3, DOUBLED if longer than 6 hours), shock (0–2), and age (0–2).',
        the_traditional_teaching: 'A score of 7 or more suggests amputation may be required.',
        the_correction_that_matters:
          'MESS was derived on a small retrospective series and has since performed POORLY as a predictor in prospective studies — notably the LEAP study — with a low positive predictive value. It must NOT be used alone to justify amputation. A high score should prompt senior multidisciplinary discussion, not a decision. The genuine determinants are the vascular status, the soft tissue and nerve deficit (particularly posterior tibial nerve function and plantar sensation, though even this is less decisive than once taught), the patient\'s physiology, and their own informed wishes. Amputation is sometimes the RIGHT and limb-sparing-superior choice, but the decision is clinical, consented and senior.',
      },
    },
    warnings: [
      'Give ANTIBIOTICS within an hour of an open fracture — this is the strongest infection-prevention intervention, stronger than surgical timing.',
      'The definitive Gustilo grade is assigned in THEATRE AFTER DEBRIDEMENT. The skin wound under-represents the injury.',
      'Wound size is a proxy for energy. A small wound from a high-velocity round is a type III injury.',
      'Every gunshot fracture is an open fracture.',
      'In high-velocity wounds, tissue viable at first debridement may be dead at 48 hours — plan a second-look debridement and avoid primary closure.',
      'Type IIIC means arterial injury requiring repair, regardless of wound size, and carries the highest amputation risk.',
      'The old "6-hour rule" for debridement is not well evidenced. Debridement QUALITY matters more than speed, but gross contamination, vascular injury and compartment syndrome still need immediate surgery.',
      'Achieve soft tissue coverage within about 72 hours. Exposed bone becomes infected bone.',
      'Do NOT use MESS alone to justify amputation — it performs poorly prospectively. Escalate to a senior multidisciplinary decision.',
      'Remove intra-articular lead fragments — synovial fluid dissolves lead, causing systemic toxicity and joint destruction.',
      'Do not remove bone fragments that still have a soft tissue attachment and blood supply.',
      'Check tetanus status in every open fracture.',
    ],
    limitations: ['Antibiotic agents, doses, debridement timing targets and coverage pathways are protocol- and resource-specific. Scout states no doses.'],
    cards: [
      { q: 'What defines Gustilo type IIIB?', a: 'Extensive damage with periosteal stripping and exposed bone requiring flap coverage.' },
      { q: 'What defines type IIIC?', a: 'Any open fracture with arterial injury requiring repair — regardless of wound size.' },
      { q: 'When is the Gustilo grade properly assigned?', a: 'In theatre after debridement — not in the emergency department.' },
      { q: 'What is the most important early intervention in an open fracture?', a: 'Antibiotics within an hour.' },
      { q: 'Why are high-velocity gunshot wounds worse than they look?', a: 'Temporary cavitation devitalises tissue far beyond the visible tract and draws in debris.' },
      { q: 'Why plan a second-look debridement?', a: 'Tissue viable at first debridement may be dead at 48 hours.' },
      { q: 'Decode AO/OTA 32-B2.', a: 'Femur (3), diaphysis (2), wedge fracture (B2).' },
      { q: 'Can MESS alone decide amputation?', a: 'No — it performs poorly prospectively. It prompts senior discussion, not a decision.' },
      { q: 'Which retained bullet fragment must be removed?', a: 'An intra-articular one — synovial fluid dissolves lead.' },
    ],
    checks: ['Antibiotics given within the hour and documented', 'Tetanus status established', 'Wound photographed once then covered and left alone', 'Neurovascular status documented', 'Definitive grade assigned after debridement', 'Second-look planned for high-energy injuries', 'Soft tissue coverage plan made early', 'Senior multidisciplinary discussion before any amputation decision'],
  },

  {
    id: 'AS-ORTH-0004',
    type: 'classification',
    title: 'Spinal Trauma — Denis Columns, AO Spine, TLICS and the ASIA Scale',
    short: 'Spinal trauma classification',
    summary:
      'Denis tells you if it is UNSTABLE, AO Spine tells you the morphology, TLICS tells you whether to operate, and ASIA grades the cord. And the counterintuitive point that decides surgery: an INCOMPLETE cord injury scores HIGHER than a complete one, because there is still something to save.',
    domains: ['orthopaedics', 'neurosurgery', 'trauma', 'emergency_medicine'],
    intents: ['classify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'spinal trauma classification', 'denis', 'denis three column', 'ao spine', 'tlics', 'slics',
      'asia scale', 'asia impairment scale', 'spinal cord injury', 'isis score', 'asis',
      'thoracolumbar injury', 'chance fracture', 'burst fracture', 'spinal instability',
    ],
    terms: [
      'denis', 'three column', 'anterior column', 'middle column', 'posterior column', 'ao spine',
      'tlics', 'slics', 'asia', 'impairment scale', 'sacral sparing', 'posterior ligamentous complex',
      'burst fracture', 'chance fracture', 'flexion distraction', 'translation', 'isis score',
      'instability severity index', 'asis', 'anterior superior iliac spine', 'young burgess', 'tile',
    ],
    confirm_locally: true,
    body: {
      abbreviations_expanded: {
        asia: 'ASIA — AMERICAN SPINAL INJURY ASSOCIATION. Its Impairment Scale grades spinal cord injury A to E.',
        tlics: 'TLICS — THORACOLUMBAR INJURY CLASSIFICATION AND SEVERITY score. A points system that helps decide surgery versus conservative treatment.',
        slics: 'SLICS — SUBAXIAL CERVICAL SPINE INJURY CLASSIFICATION AND SEVERITY score. The same idea for the lower cervical spine.',
        plc: 'PLC — POSTERIOR LIGAMENTOUS COMPLEX: the supraspinous and interspinous ligaments, ligamentum flavum, and facet joint capsules. The "posterior tension band" of the spine.',
        ao: 'AO — Arbeitsgemeinschaft für Osteosynthesefragen, the international group whose classification system is now standard.',
      },

      denis_three_column_concept: {
        why_it_exists: 'It is the foundation on which the later systems are built. It answers one question: IS THIS UNSTABLE?',
        anterior_column: 'Anterior longitudinal ligament + the ANTERIOR half of the vertebral body + the anterior half of the intervertebral disc and annulus.',
        middle_column: 'The POSTERIOR half of the vertebral body + the posterior half of the disc and annulus + the POSTERIOR LONGITUDINAL LIGAMENT.',
        posterior_column: 'Everything behind the posterior longitudinal ligament — pedicles, facets, laminae, spinous process, and the posterior ligamentous complex.',
        the_instability_rule: 'Disruption of TWO OR MORE columns = UNSTABLE.',
        the_key_insight_people_miss:
          'The MIDDLE column is the critical one. A simple wedge COMPRESSION fracture involves the anterior column only and is stable. The moment the MIDDLE column fails, retropulsed bone can enter the canal and the injury becomes a BURST fracture — unstable, and potentially neurologically significant. When you look at a lateral film or a CT, the question is always "what has happened to the posterior wall of the vertebral body?"',
      },

      ao_spine_thoracolumbar_classification: {
        the_logic: 'Three types in increasing severity, based on MORPHOLOGY — how the injury happened mechanically.',
        type_a_compression: 'The vertebral body is CRUSHED, with the posterior tension band INTACT. A0 minor (transverse or spinous process only) · A1 wedge impaction · A2 split/pincer · A3 INCOMPLETE burst (one endplate) · A4 COMPLETE burst (both endplates).',
        type_b_distraction: 'FAILURE OF THE TENSION BAND — the spine has been pulled apart, anteriorly or posteriorly. B1 transosseous posterior disruption (the classic CHANCE fracture, a horizontal split through the bone, associated with lap-belt injuries and often with intra-abdominal injury — always examine the abdomen) · B2 posterior LIGAMENTOUS disruption · B3 ANTERIOR hyperextension injury, typically in the ankylosed spine.',
        type_c_translation: 'DISPLACEMENT or ROTATION — one part of the spine has moved relative to another in any plane. The most unstable. Essentially always needs surgical stabilisation.',
        the_modifiers: 'A neurological modifier (N0 intact to N4 complete) and clinical modifiers (M1 uncertain tension band integrity, M2 patient-specific comorbidity such as ankylosing spondylitis) are added, because they change the decision.',
      },

      tlics_and_slics: {
        the_three_things_scored: {
          morphology: 'Compression 1 · Burst 2 · Translation/rotation 3 · Distraction 4.',
          plc_integrity: 'Intact 0 · Suspected/indeterminate 2 · Injured 3. Magnetic resonance imaging is what settles a suspected posterior ligamentous injury, and it is the finding that most often converts a conservative plan into an operative one.',
          neurology: 'Intact 0 · Nerve root 2 · COMPLETE cord or conus injury 2 · INCOMPLETE cord or conus injury 3 · Cauda equina 3.',
        },
        the_counterintuitive_point_that_is_the_whole_lesson:
          'An INCOMPLETE cord injury scores HIGHER (3) than a COMPLETE one (2). That is deliberate, not a typographical error. An incomplete injury means viable cord remains, so decompression and stabilisation may preserve or improve function — there is something to save, so the threshold to operate is lower. This is the single most commonly misread part of the score.',
        interpretation: 'Total 0–3 → conservative management. 4 → grey zone, clinical judgement. 5 or more → surgery. SLICS uses the same structure for the subaxial cervical spine, substituting discoligamentous complex integrity.',
        the_caveat: 'These are decision AIDS. They do not override the surgeon, the patient\'s other injuries, or the clinical picture.',
      },

      asia_impairment_scale: {
        what_it_grades: 'The NEUROLOGICAL severity of a spinal cord injury, from a standardised examination of motor and sensory function.',
        grade_a: 'COMPLETE. NO motor or sensory function preserved in the SACRAL SEGMENTS S4–S5.',
        grade_b: 'SENSORY INCOMPLETE. Sensation preserved below the level INCLUDING S4–S5, but no motor function below the level.',
        grade_c: 'MOTOR INCOMPLETE. Motor preserved below the level, but MORE THAN HALF of key muscles below the level are weaker than grade 3 (cannot resist gravity).',
        grade_d: 'MOTOR INCOMPLETE. Motor preserved below the level, and AT LEAST HALF of key muscles below the level are grade 3 or better.',
        grade_e: 'NORMAL motor and sensory function (in a patient who had a documented deficit).',
        the_examination_detail_that_defines_the_grade:
          'SACRAL SPARING is the whole thing. Complete versus incomplete rests on function in the LOWEST sacral segments, which means you MUST perform a PERIANAL EXAMINATION — light touch and pin-prick in the perianal region, deep anal pressure, and VOLUNTARY ANAL CONTRACTION. An injury cannot be called complete without it. Omitting the rectal examination is the most common reason an ASIA grade is wrong, and it changes the prognosis conversation completely.',
        spinal_shock: 'In the first hours to days there may be areflexia and flaccidity that mimics a complete injury. The RETURN OF THE BULBOCAVERNOSUS REFLEX marks the end of spinal shock. Do NOT give a definitive prognosis while the patient is still in spinal shock — a grade assigned then may improve.',
      },

      asia_versus_isis_versus_asis: {
        why_this_confusion_matters: 'Three similar-sounding terms from different parts of orthopaedics. Being asked one and answering another is a common and avoidable error.',
        asia: 'AMERICAN SPINAL INJURY ASSOCIATION Impairment Scale. SPINE + CORD INJURY + NEUROLOGY. Graded A to E. This is the one meant by "the spinal one".',
        isis: 'INSTABILITY SEVERITY INDEX SCORE. SHOULDER + recurrent anterior instability. A 10-point pre-operative score: age under 20 (2), competitive sport (1), contact or forced-overhead sport (1), shoulder hyperlaxity (1), Hill-Sachs lesion visible on an AP radiograph in external rotation (2), and loss of the normal glenoid contour (2). ISIS 3 or less → an arthroscopic BANKART soft tissue repair is reasonable. ISIS above 6 → a LATARJET bone block procedure, because Bankart alone has an unacceptable recurrence rate. 4–6 is a grey zone.',
        asis: 'ANTERIOR SUPERIOR ILIAC SPINE. NOT a classification at all — a BONY LANDMARK on the pelvis. It is the attachment of the inguinal ligament and sartorius, the reference point for measuring TRUE leg length (ASIS to medial malleolus), and a landmark used within pelvic fracture classifications such as YOUNG AND BURGESS (which classifies by force direction: anteroposterior compression, lateral compression, vertical shear) and TILE (which classifies by stability: A stable, B rotationally unstable, C rotationally and vertically unstable).',
        the_quick_rule: 'Spine and neurology → ASIA. Recurrent shoulder dislocation → ISIS. Pelvis and anatomy → ASIS.',
      },

      gunshot_injury_to_the_spine: {
        classification: 'Classified the same way as any spinal injury — STABLE versus UNSTABLE by the Denis columns destroyed, and COMPLETE versus INCOMPLETE by ASIA.',
        the_specific_points: 'High-velocity rounds transferring energy through the spine produce extensive destruction and are usually unstable and highly contaminated. Low-velocity civilian gunshot spinal injuries are often relatively STABLE, because the bullet destroys bone without the ligamentous disruption of a flexion-distraction mechanism — and routine surgical stabilisation is frequently NOT required, which surprises people.',
        the_management_notes: 'Antibiotics, particularly where the tract has crossed bowel (a transabdominal trajectory) which markedly raises infection risk. Bullet removal is generally reserved for cord or cauda equina compression with incomplete deficit, or for a retained intracanal fragment causing progressive symptoms. Corticosteroids are NOT recommended in penetrating spinal cord injury.',
      },

      the_practical_priorities_before_any_classification: [
        'Airway, breathing, circulation. Neurogenic shock (hypotension WITH bradycardia, from loss of sympathetic outflow above roughly T6) is distinct from haemorrhagic shock and is treated differently — but exclude bleeding first.',
        'Full spinal precautions until cleared.',
        'A documented, complete neurological examination INCLUDING perianal sensation and voluntary anal contraction, repeated and dated.',
        'Appropriate imaging — CT for bony injury, MRI for cord, disc and posterior ligamentous complex.',
        'Early specialist referral. Time to decompression matters in incomplete injuries.',
      ],
    },
    warnings: [
      'You cannot assign an ASIA grade without a PERIANAL examination — sacral sparing defines complete versus incomplete.',
      'In TLICS, an INCOMPLETE cord injury scores HIGHER than a complete one, because there is still function to save.',
      'Do not give a definitive prognosis during spinal shock — wait for the bulbocavernosus reflex to return.',
      'Denis: disruption of two or more columns is unstable. The MIDDLE column is the critical one.',
      'A Chance (flexion-distraction) fracture is strongly associated with intra-abdominal injury — examine the abdomen and image it.',
      'AO Spine type C (translation) is the most unstable and essentially always needs surgery.',
      'MRI is what settles suspected posterior ligamentous complex injury, and it frequently converts a conservative plan to an operative one.',
      'Neurogenic shock is hypotension WITH bradycardia — but exclude haemorrhage before attributing it.',
      'Corticosteroids are not recommended in penetrating spinal cord injury.',
      'An ankylosed spine (ankylosing spondylitis, DISH) fractures with trivial force and is highly unstable — CT the whole spine, never plain films alone.',
      'ASIA is spine, ISIS is shoulder instability, ASIS is a pelvic landmark. Do not confuse them.',
    ],
    limitations: ['Scores are decision aids, not decisions. Operative thresholds, imaging protocols and referral pathways are service-specific.'],
    cards: [
      { q: 'What is the Denis instability rule?', a: 'Disruption of two or more of the three columns means unstable.' },
      { q: 'Which Denis column is most critical, and why?', a: 'The middle — its failure turns a compression fracture into a burst fracture with canal compromise.' },
      { q: 'Give the three AO Spine types.', a: 'A compression, B distraction (tension band failure), C translation/rotation.' },
      { q: 'Why does an incomplete cord injury score higher in TLICS?', a: 'There is viable cord to save, so the threshold for surgery is lower.' },
      { q: 'What TLICS score indicates surgery?', a: '5 or more; 0–3 conservative; 4 is a grey zone.' },
      { q: 'Define ASIA A and ASIA B.', a: 'A: no motor or sensory function at S4–S5. B: sensory preserved including S4–S5 but no motor below the level.' },
      { q: 'What separates ASIA C from D?', a: 'Whether at least half the key muscles below the level are grade 3 or better (D) or not (C).' },
      { q: 'What examination is mandatory for an ASIA grade?', a: 'Perianal sensation, deep anal pressure and voluntary anal contraction — sacral sparing.' },
      { q: 'What is ISIS and what does it decide?', a: 'Instability Severity Index Score for shoulder instability — Bankart if ≤3, Latarjet if >6.' },
      { q: 'What is ASIS?', a: 'Anterior superior iliac spine — a pelvic bony landmark, not a classification.' },
      { q: 'What marks the end of spinal shock?', a: 'Return of the bulbocavernosus reflex.' },
    ],
    checks: ['Full neurological examination with perianal assessment documented and dated', 'Spinal precautions maintained until cleared', 'Denis columns assessed on imaging', 'Posterior ligamentous complex assessed on MRI where suspected', 'TLICS or SLICS calculated', 'ASIA grade assigned only after spinal shock considered', 'Abdomen examined if a Chance fracture', 'Whole spine imaged if ankylosed', 'Specialist referral made early'],
  },
];
