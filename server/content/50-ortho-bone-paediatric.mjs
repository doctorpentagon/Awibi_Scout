/**
 * Bone infection, bone tumours, named fractures and paediatric orthopaedics.
 *
 * From Surgery S2 and S3. `clubfoot` was an outright GAP; `bone tumour` landed
 * on Phosphate, `osteomyelitis` on Diabetic foot, and the named fractures all
 * fell through to generic fracture principles.
 */

export default [
  {
    id: 'AS-ORTH-0005',
    type: 'differential',
    title: 'Bone and Joint Infection — Osteomyelitis and Septic Arthritis',
    short: 'Bone and joint infection',
    summary:
      'A hot, swollen, painful joint is SEPTIC ARTHRITIS until proven otherwise, and it destroys cartilage within DAYS. Aspirate before antibiotics wherever possible — and never inject steroid into a joint you have not excluded infection in.',
    domains: ['orthopaedics', 'infectious_disease', 'paediatrics'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'osteomyelitis', 'bone infection', 'septic arthritis', 'joint infection', 'pyogenic arthritis',
      'brodie abscess', 'sequestrum', 'involucrum', 'chronic osteomyelitis', 'kocher criteria',
      'discitis', 'prosthetic joint infection', 'pott disease', 'spinal tuberculosis',
    ],
    terms: [
      'osteomyelitis', 'septic arthritis', 'staphylococcus aureus', 'aspiration', 'joint aspirate',
      'synovial fluid', 'kocher', 'sequestrum', 'involucrum', 'cloaca', 'brodie abscess',
      'metaphysis', 'haematogenous', 'sickle cell', 'salmonella', 'discitis', 'pott disease',
      'prosthetic joint infection', 'gonococcal arthritis', 'crystal arthropathy', 'gout',
    ],
    confirm_locally: true,
    body: {
      septic_arthritis_the_emergency: {
        why_it_is_urgent:
          'Bacterial enzymes and the inflammatory response destroy articular CARTILAGE within DAYS, and cartilage does not regenerate. A delay of a day or two produces permanent damage; untreated it destroys the joint and can cause sepsis and death. There is no version of this that can safely wait for a clinic appointment.',
        the_presentation: 'A single HOT, SWOLLEN, exquisitely PAINFUL joint, held still in the position of maximum capacity, with severe pain on ANY movement — including small passive movements, which distinguishes it from surrounding cellulitis. Fever and systemic upset are common but NOT universal, especially in the elderly, the immunosuppressed and those already on antibiotics or steroids.',
        the_decisive_investigation:
          'JOINT ASPIRATION, ideally BEFORE antibiotics are given. Send for urgent GRAM STAIN, CULTURE, cell count with differential, and POLARISED LIGHT MICROSCOPY for crystals. Aspirating after antibiotics have started frequently produces a sterile culture and leaves you treating blind for weeks.',
        the_trap_worth_stating_plainly:
          'CRYSTAL arthropathy — gout and pseudogout — presents identically: a single hot, swollen, agonising joint with fever and raised inflammatory markers. Crystals in the fluid do NOT exclude infection, because the two can coexist. If the picture is at all septic, treat as septic while awaiting culture.',
        never: 'NEVER inject corticosteroid into a joint in which infection has not been excluded. It converts a treatable infection into a destroyed joint.',
        kocher_criteria: 'For distinguishing septic arthritis from transient synovitis in a CHILD with a painful hip: non-weight-bearing · fever · raised ESR · raised white cell count. The more present, the higher the probability. It is a decision AID with imperfect performance, not a rule that permits discharge — a child who cannot weight-bear needs a definitive answer, not a score.',
        special_situations: 'A PROSTHETIC joint infection is managed differently and needs the implanting team — do not aspirate a prosthetic joint outside a controlled setting. Disseminated GONOCOCCAL infection in a young sexually active adult can cause a migratory polyarthritis with tenosynovitis and pustular skin lesions.',
      },

      osteomyelitis: {
        what_it_is: 'Infection of BONE. Reached by three routes: HAEMATOGENOUS spread through the blood (the usual route in children), CONTIGUOUS spread from adjacent infection or an open fracture, and DIRECT inoculation from trauma or surgery.',
        why_children_get_it_in_the_metaphysis:
          'The metaphysis next to the growth plate has slow, turbulent blood flow in hairpin capillary loops with relatively few phagocytes, so bacteria settle there. That is why haematogenous osteomyelitis in a child is characteristically metaphyseal, and why in young children — where vessels still cross the physis — it can spread into the joint and cause a concurrent septic arthritis.',
        the_organisms: 'STAPHYLOCOCCUS AUREUS is the commonest at every age. Group B streptococcus and Gram negatives in neonates. In SICKLE CELL DISEASE, Staphylococcus aureus remains commonest but SALMONELLA is characteristically over-represented and must be covered. Pseudomonas after a puncture wound through a trainer. Tuberculosis where prevalent, and it can be indolent for months.',
        the_diagnostic_difficulty:
          'PLAIN RADIOGRAPHS ARE NORMAL FOR THE FIRST 10–14 DAYS, because roughly a third to half of the bone mineral must be lost before change is visible. A normal film early therefore excludes nothing. MRI is the investigation of choice — it shows marrow oedema within days. Blood cultures are positive in a substantial minority and should always be taken. Bone biopsy or aspiration gives the definitive organism.',
        the_chronic_disease_vocabulary: 'SEQUESTRUM — a piece of DEAD, avascular bone that has separated. It cannot be reached by antibiotics or by the immune system, so it acts as a permanent reservoir and is why chronic osteomyelitis needs SURGICAL removal rather than longer courses of drugs. INVOLUCRUM — new bone laid down around it. CLOACA — an opening through which pus discharges. A BRODIE ABSCESS is a walled-off subacute focus, often presenting as chronic localised pain with a lytic lesion on X-ray.',
        the_long_term_hazard: 'A chronic discharging sinus over many years can undergo malignant change to SQUAMOUS CELL CARCINOMA — a Marjolin ulcer. Any change in a long-standing sinus warrants biopsy.',
        management_principles: 'Cultures FIRST wherever possible, then prolonged antibiotics guided by sensitivity, with SURGICAL debridement for abscess, sequestrum or failure to respond. Immobilise, and address the underlying cause — diabetic foot disease, peripheral vascular disease, an implant, or an open fracture.',
      },

      spinal_infection: {
        why_it_is_singled_out: 'Discitis and vertebral osteomyelitis are missed for weeks because back pain is common and the presentation is non-specific.',
        the_red_flags: 'Back pain with FEVER · pain that is CONSTANT, unrelieved by rest and WORSE AT NIGHT · localised spinal tenderness · a history of intravenous drug use, recent bacteraemia, immunosuppression or spinal instrumentation · and above all any NEUROLOGICAL deficit, which suggests an EPIDURAL ABSCESS.',
        epidural_abscess: 'A surgical emergency. The classic sequence is back pain, then radicular pain, then weakness and sphincter disturbance, then paralysis — and once weakness is established, recovery is often incomplete. Urgent MRI of the WHOLE spine, because lesions can be multi-level.',
        pott_disease: 'Tuberculous spondylitis. Insidious over months, classically affecting the thoracolumbar spine, destroying vertebral bodies while relatively SPARING the discs early — a useful distinction from pyogenic infection. Causes a sharp angular kyphosis (gibbus) and can produce a cold abscess tracking along the psoas. Remains a leading cause of spinal deformity and paraplegia in high-prevalence settings.',
      },
    },
    warnings: [
      'A hot, swollen, painful joint is SEPTIC ARTHRITIS until proven otherwise. Cartilage is destroyed within days.',
      'Aspirate the joint BEFORE antibiotics wherever possible — starting antibiotics first commonly sterilises the culture.',
      'Crystals in the fluid do NOT exclude infection — gout and sepsis can coexist.',
      'NEVER inject corticosteroid into a joint without excluding infection.',
      'Plain radiographs are NORMAL for the first 10–14 days of osteomyelitis. A normal early film excludes nothing — use MRI.',
      'Kocher criteria are a decision aid, not permission to discharge. A child who cannot weight-bear needs a definitive answer.',
      'In sickle cell disease, cover Salmonella as well as Staphylococcus aureus.',
      'A sequestrum is dead bone that antibiotics cannot reach — chronic osteomyelitis needs surgery, not longer drugs.',
      'Back pain with fever, night pain or any neurological deficit means urgent MRI — epidural abscess.',
      'Once weakness is established in epidural abscess, recovery is often incomplete. Image before that point.',
      'Pott disease spares the discs early, unlike pyogenic infection.',
      'A long-standing discharging sinus can become squamous cell carcinoma — biopsy any change.',
      'Fever may be absent in the elderly, the immunosuppressed and those already on antibiotics or steroids.',
    ],
    limitations: ['Antibiotic choice, duration and surgical thresholds are protocol-specific. Scout states no doses.'],
    cards: [
      { q: 'Why is septic arthritis an emergency?', a: 'Bacterial enzymes destroy articular cartilage within days, and cartilage does not regenerate.' },
      { q: 'What is the decisive investigation, and when?', a: 'Joint aspiration, before antibiotics — Gram stain, culture, cell count and polarised microscopy.' },
      { q: 'Do crystals exclude septic arthritis?', a: 'No — gout and infection can coexist. Treat as septic if the picture fits.' },
      { q: 'Why is childhood osteomyelitis metaphyseal?', a: 'Slow turbulent flow in hairpin capillary loops with few phagocytes lets bacteria settle there.' },
      { q: 'How long before radiographs change in osteomyelitis?', a: '10 to 14 days — a third to half the bone mineral must be lost first.' },
      { q: 'Which organism is over-represented in sickle cell osteomyelitis?', a: 'Salmonella — though Staphylococcus aureus remains commonest.' },
      { q: 'What is a sequestrum and why does it matter?', a: 'Dead avascular bone acting as a reservoir — unreachable by antibiotics, so surgery is required.' },
      { q: 'Give the Kocher criteria.', a: 'Non-weight-bearing, fever, raised ESR, raised white cell count.' },
      { q: 'What sequence suggests spinal epidural abscess?', a: 'Back pain, then radicular pain, then weakness and sphincter disturbance, then paralysis.' },
      { q: 'How does Pott disease differ from pyogenic spinal infection?', a: 'It relatively spares the discs early and causes an angular gibbus deformity.' },
    ],
    checks: ['Joint aspirated before antibiotics where possible', 'Blood cultures taken', 'Crystals and infection both considered', 'MRI arranged rather than relying on early radiographs', 'Sickle cell status considered for organism cover', 'Neurological examination documented in spinal infection', 'Surgical opinion sought for collection or sequestrum'],
  },

  {
    id: 'AS-ORTH-0006',
    type: 'differential',
    title: 'Bone Tumours and the Named Fractures Worth Knowing',
    short: 'Bone tumours and named fractures',
    summary:
      'Most bone lesions are benign, but NIGHT PAIN, rest pain and a lesion that is destroying rather than remodelling bone are the features that matter. And the named fractures each carry a specific hazard — the scaphoid its blood supply, the supracondylar its artery and nerve, the hip its mortality.',
    domains: ['orthopaedics', 'oncology'],
    intents: ['identify', 'classify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'bone tumour', 'bone cancer', 'osteosarcoma', 'ewing sarcoma', 'chondrosarcoma',
      'osteoid osteoma', 'giant cell tumour', 'bone metastases', 'pathological fracture',
      'codman triangle', 'sunburst', 'onion skin', 'colles fracture', 'smith fracture',
      'scaphoid fracture', 'supracondylar fracture', 'neck of femur fracture', 'hip fracture',
      'monteggia', 'galeazzi', 'boxer fracture', 'jones fracture',
    ],
    terms: [
      'bone tumour', 'osteosarcoma', 'ewing', 'chondrosarcoma', 'osteoid osteoma',
      'giant cell tumour', 'metastases', 'pathological fracture', 'codman triangle', 'sunburst',
      'onion skin', 'periosteal reaction', 'lytic', 'sclerotic', 'night pain', 'biopsy tract',
      'colles', 'dinner fork', 'smith', 'scaphoid', 'anatomical snuffbox', 'avascular necrosis',
      'supracondylar', 'brachial artery', 'anterior interosseous', 'volkmann', 'neck of femur',
      'shortened externally rotated', 'garden classification', 'monteggia', 'galeazzi',
    ],
    confirm_locally: true,
    body: {
      bone_tumours: {
        the_red_flags_that_should_prompt_imaging: 'PAIN AT REST and particularly PAIN AT NIGHT that wakes the patient · pain not related to activity · a palpable MASS · systemic features of weight loss or fever · a PATHOLOGICAL fracture through abnormal bone after trivial force · and in a child, persistent bone pain attributed to "growing pains" that does not fit the usual pattern.',
        the_single_most_useful_epidemiological_fact:
          'In an adult over 40 with a destructive bone lesion, METASTASIS is far more likely than a primary bone tumour. The common primaries that go to bone are BREAST, PROSTATE, LUNG, THYROID and KIDNEY. So the workup of an adult bone lesion is often a search for a primary elsewhere, not a hunt for a rare sarcoma. Myeloma also belongs on that list and is frequently missed.',
        reading_the_radiograph: {
          the_question: 'Is the lesion behaving in a SLOW, well-behaved way, or is it destroying bone faster than bone can respond?',
          benign_features: 'A narrow ZONE OF TRANSITION — a sharp, clearly definable edge · a sclerotic rim · no cortical destruction · no soft tissue mass · geographic, well-defined shape.',
          aggressive_features: 'A WIDE zone of transition where you cannot tell where the lesion ends · cortical destruction or breach · a SOFT TISSUE mass · and aggressive PERIOSTEAL REACTION.',
          the_named_periosteal_patterns: 'CODMAN TRIANGLE — the periosteum lifted off the bone with new bone at the elevated edge, seen where a tumour has broken through. SUNBURST or spiculated — bone spicules radiating perpendicular, classically OSTEOSARCOMA. ONION SKIN — multiple concentric layers, classically EWING SARCOMA. These are patterns of aggression, not diagnoses in themselves.',
        },
        the_main_primaries: {
          osteosarcoma: 'The commonest primary bone malignancy of ADOLESCENCE. Around the KNEE — distal femur and proximal tibia — where growth is fastest. Sunburst reaction and Codman triangle.',
          ewing_sarcoma: 'Children and young adults. DIAPHYSIS of long bones and flat bones including the pelvis. Onion-skin periosteal reaction. Frequently presents with FEVER, raised inflammatory markers and a warm tender swelling, so it is repeatedly mistaken for OSTEOMYELITIS — a genuinely important and recurring error.',
          chondrosarcoma: 'Older adults. Cartilage-forming, often pelvis and proximal long bones, with rings-and-arcs calcification.',
          osteoid_osteoma: 'Benign but distinctive: a small lesion with a central nidus causing severe NIGHT PAIN that is characteristically RELIEVED BY ASPIRIN or other non-steroidal drugs. That response is close to diagnostic.',
          giant_cell_tumour: 'Young adults after physeal closure, at the EPIPHYSIS, typically around the knee. Locally aggressive, "soap bubble" appearance, and occasionally metastasises despite benign histology.',
        },
        the_procedural_rule_that_must_not_be_broken:
          'DO NOT BIOPSY A SUSPECTED PRIMARY BONE SARCOMA OUTSIDE A SPECIALIST CENTRE. A badly placed biopsy tract CONTAMINATES compartments that would otherwise have been spared, and can convert a limb-sparing operation into an amputation. The correct action on suspecting a primary bone tumour is to image and REFER — not to obtain tissue.',
      },

      the_named_fractures_and_the_hazard_each_carries: {
        colles_and_smith: 'COLLES — a distal radius fracture with DORSAL displacement, from a fall on the OUTSTRETCHED hand, giving the classic "DINNER FORK" deformity. SMITH — the reverse, VOLAR displacement, from a fall on the flexed wrist. Watch for median nerve compression and, later, for stiffness and complex regional pain syndrome.',
        scaphoid: {
          the_hazard: 'The scaphoid receives its blood supply RETROGRADE, entering distally and running back towards the proximal pole. A fracture across the waist interrupts that supply, so the PROXIMAL fragment can undergo AVASCULAR NECROSIS and non-union.',
          the_clinical_trap:
            'THE INITIAL RADIOGRAPH IS NORMAL IN A SIGNIFICANT PROPORTION OF SCAPHOID FRACTURES. So a patient with tenderness in the ANATOMICAL SNUFFBOX, or over the scaphoid tubercle, or pain on axial compression of the thumb, is treated as a scaphoid fracture — immobilised and re-imaged or scanned — regardless of the first film. Discharging on a normal X-ray is the classic error, and the consequence is a wrist that is arthritic decades early.',
        },
        supracondylar_humerus: {
          who: 'The classic paediatric elbow fracture, from a fall on the outstretched hand.',
          the_hazards: 'The BRACHIAL ARTERY and the MEDIAN nerve — particularly its ANTERIOR INTEROSSEOUS branch — lie directly in front of the fracture. Document the radial pulse, capillary refill and the specific nerve function BEFORE and AFTER any manipulation.',
          the_thing_to_test: 'The anterior interosseous nerve is PURELY MOTOR, so there is NO sensory loss to alert you. Test it by asking the child to make an "OK" sign — they cannot flex the tip of the thumb and index finger, producing a flattened pinch instead of a circle.',
          volkmann_ischaemic_contracture: 'The late consequence of untreated compartment syndrome in the forearm — irreversible muscle necrosis, fibrosis and a fixed clawed hand. It is entirely preventable and is the reason this fracture is treated with such urgency.',
        },
        neck_of_femur: {
          the_presentation: 'A SHORTENED and EXTERNALLY ROTATED leg, with pain on any movement, in an older person after a fall. Note that an impacted or undisplaced fracture may allow weight-bearing, so a patient who can walk has NOT excluded it.',
          the_blood_supply_point: 'The femoral head is supplied largely by retinacular vessels running up the neck. An INTRACAPSULAR fracture disrupts them, risking avascular necrosis — which is why displaced intracapsular fractures are usually replaced (hemiarthroplasty or total hip replacement) while EXTRACAPSULAR fractures, with intact supply, are fixed.',
          the_bigger_picture: 'This is not merely a bone problem. It carries substantial one-year MORTALITY and is a sentinel event of frailty. It requires prompt surgery, orthogeriatric care, analgesia, delirium prevention, a falls assessment and BONE PROTECTION — because a fragility fracture predicts the next one, and osteoporosis treatment is very frequently omitted.',
        },
        forearm_pairs: 'MONTEGGIA — fracture of the proximal ULNA with dislocation of the RADIAL head. GALEAZZI — fracture of the distal RADIUS with dislocation of the distal radio-ULNAR joint. The rule that follows: in ANY forearm fracture, IMAGE THE JOINT ABOVE AND BELOW, because a single bone of a paired forearm rarely breaks and shortens without something dislocating.',
        others: 'BOXER fracture — fifth metacarpal neck, from punching; always ask whether the injury was sustained on a tooth, because a "fight bite" over the knuckle is a joint inoculation with oral flora and needs urgent washout, not a plaster. JONES fracture — base of fifth metatarsal at the metaphyseal-diaphyseal junction, notorious for non-union because of a watershed blood supply.',
      },
    },
    warnings: [
      'NIGHT PAIN and rest pain in bone are red flags. Do not dismiss persistent bone pain in a child as growing pains.',
      'In an adult over 40, a destructive bone lesion is more likely a METASTASIS than a primary — search breast, prostate, lung, thyroid, kidney, and consider myeloma.',
      'DO NOT biopsy a suspected primary bone sarcoma outside a specialist centre — a bad tract can cost the limb.',
      'Ewing sarcoma presents with fever and raised inflammatory markers and is repeatedly mistaken for osteomyelitis.',
      'A NORMAL radiograph does not exclude a scaphoid fracture. Snuffbox tenderness means immobilise and re-image.',
      'Osteoid osteoma causes night pain relieved by aspirin — that response is nearly diagnostic.',
      'In supracondylar fractures, document the radial pulse and nerve function BEFORE and AFTER manipulation.',
      'The anterior interosseous nerve is purely motor — test the "OK" sign, because there will be no sensory loss to warn you.',
      'Volkmann ischaemic contracture is a preventable consequence of missed compartment syndrome.',
      'A patient with a hip fracture may still weight-bear if it is impacted — walking does not exclude it.',
      'Hip fracture carries high one-year mortality — it needs orthogeriatric care, falls assessment and BONE PROTECTION, which is routinely omitted.',
      'In any forearm fracture, image the joint above and below — Monteggia and Galeazzi are missed otherwise.',
      'Ask whether a boxer fracture was sustained on a tooth — a fight bite needs urgent washout, not a plaster.',
    ],
    limitations: ['Fixation choices, referral pathways and staging protocols are service-specific.'],
    cards: [
      { q: 'What are the radiographic features of an aggressive bone lesion?', a: 'Wide zone of transition, cortical destruction, soft tissue mass, aggressive periosteal reaction.' },
      { q: 'What does a sunburst periosteal reaction suggest?', a: 'Osteosarcoma. Onion-skin suggests Ewing sarcoma.' },
      { q: 'Which bone tumour mimics osteomyelitis?', a: 'Ewing sarcoma — fever, raised inflammatory markers, warm tender swelling.' },
      { q: 'What is nearly diagnostic of osteoid osteoma?', a: 'Severe night pain relieved by aspirin or NSAIDs.' },
      { q: 'Why must a suspected bone sarcoma not be biopsied locally?', a: 'A poorly placed tract contaminates compartments and can convert limb salvage into amputation.' },
      { q: 'Why can a scaphoid fracture cause avascular necrosis?', a: 'Its blood supply is retrograde, entering distally — a waist fracture strands the proximal pole.' },
      { q: 'What do you do with snuffbox tenderness and a normal X-ray?', a: 'Treat as a scaphoid fracture — immobilise and re-image or scan.' },
      { q: 'How do you test the anterior interosseous nerve?', a: 'The "OK" sign — it is purely motor, so there is no sensory loss.' },
      { q: 'Why are displaced intracapsular hip fractures replaced?', a: 'They disrupt the retinacular blood supply to the head, risking avascular necrosis.' },
      { q: 'Monteggia versus Galeazzi?', a: 'Monteggia: proximal ulna fracture with radial head dislocation. Galeazzi: distal radius fracture with distal radioulnar dislocation.' },
      { q: 'What must you ask about a boxer fracture?', a: 'Whether it was sustained on a tooth — a fight bite needs urgent washout.' },
    ],
    checks: ['Night and rest pain asked about', 'Age-appropriate search for a primary in adults', 'Referral rather than local biopsy for suspected sarcoma', 'Snuffbox tenderness acted on regardless of film', 'Neurovascular status documented before and after manipulation', 'Joint above and below imaged in forearm fractures', 'Bone protection and falls assessment arranged after fragility fracture'],
  },

  {
    id: 'AS-ORTH-0007',
    type: 'guideline',
    title: 'Paediatric Orthopaedics — DDH, Clubfoot and the Limping Child',
    short: 'Paediatric orthopaedics',
    summary:
      'Two conditions are found by SCREENING because they are silent and painless — developmental dysplasia of the hip and clubfoot — and both are far easier to treat the earlier they are caught. A limping child, by contrast, is septic arthritis until proven otherwise.',
    domains: ['orthopaedics', 'paediatrics'],
    intents: ['identify', 'classify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'developmental dysplasia of the hip', 'ddh', 'congenital hip dislocation', 'barlow',
      'ortolani', 'galeazzi sign', 'pavlik harness', 'clubfoot', 'talipes equinovarus',
      'ponseti', 'limping child', 'irritable hip', 'transient synovitis', 'perthes',
      'slipped upper femoral epiphysis', 'sufe', 'scfe', 'bow legs', 'knock knees',
    ],
    terms: [
      'ddh', 'developmental dysplasia', 'barlow', 'ortolani', 'galeazzi', 'pavlik harness',
      'breech', 'clubfoot', 'talipes', 'equinovarus', 'ponseti', 'tenotomy', 'boots and bar',
      'limping child', 'transient synovitis', 'irritable hip', 'perthes', 'avascular necrosis',
      'slipped upper femoral epiphysis', 'sufe', 'trethowan', 'genu varum', 'genu valgum',
      'blount', 'rickets', 'in-toeing', 'safeguarding',
    ],
    confirm_locally: true,
    body: {
      developmental_dysplasia_of_the_hip: {
        what_it_is: 'A spectrum, not a single condition — from a shallow acetabulum with a located hip, through subluxation, to complete dislocation. "Developmental" replaced "congenital" deliberately, because it can EVOLVE after birth: a hip normal at the newborn check can become dysplastic later, which is why examination is repeated at intervals.',
        why_it_matters: 'It is PAINLESS and produces no symptoms in infancy, so it is found only by looking. Untreated it causes limp, leg length discrepancy, and early, severe osteoarthritis in young adulthood. Treatment in the first weeks is usually a simple harness; treatment after walking age often means surgery with a far worse outcome. The entire benefit depends on catching it early.',
        the_risk_factors: 'BREECH presentation (the strongest) · FEMALE sex · FIRST-born · FAMILY history · oligohydramnios · and other packaging deformities such as torticollis and foot abnormalities. Left hip more often than right.',
        the_examination: {
          ortolani: 'A RELOCATION test. With the hip flexed, abduct and lift the greater trochanter forward — a dislocated hip CLUNKS back INTO the socket. "Ortolani puts it In."',
          barlow: 'A DISLOCATION test. Adduct the flexed hip and apply gentle posterior pressure — a dislocatable hip slips OUT. "Barlow pushes it Back/Out."',
          the_important_caveat: 'Both rely on a soft, lax neonatal hip and become UNRELIABLE after about 3 months, when soft tissues tighten. After that age the signs are LIMITED ABDUCTION (often the earliest and most reliable), asymmetric thigh or buttock skin creases, apparent leg shortening, and a GALEAZZI sign — with hips and knees flexed and feet together, one knee sits lower.',
          a_note_on_clicks: 'A high-pitched CLICK without movement is usually benign and comes from soft tissue. A CLUNK — a palpable movement of the femoral head — is the significant finding. Do not escalate every click, and do not dismiss a clunk.',
        },
        imaging: 'ULTRASOUND is the investigation under about 4–6 months, because the femoral head is still cartilaginous and invisible on X-ray. After the head ossifies, plain RADIOGRAPHY becomes useful.',
        treatment: 'A PAVLIK HARNESS or similar abduction device in early infancy holds the hip flexed and abducted so the acetabulum develops around a located head. Later presentation may need closed or open reduction and osteotomy. Splinting carries its own risk of avascular necrosis if the hip is forced, so it is supervised specialist treatment.',
      },

      clubfoot_congenital_talipes_equinovarus: {
        what_it_is: 'A complex three-dimensional deformity present at birth, in which the foot is turned down and inward. Break the name apart: TALIPES means an ankle-and-foot deformity; EQUINUS means the foot points DOWN like a horse hoof; VARUS means the heel turns INWARD.',
        the_four_components_cave: 'C — CAVUS, a high arch. A — ADDUCTUS, the forefoot turned inward. V — VARUS, the heel inverted. E — EQUINUS, the ankle pointed down. The mnemonic CAVE holds all four, and they are corrected in that ORDER by the Ponseti method.',
        the_critical_distinction: 'POSITIONAL talipes results from intrauterine packing and is FULLY CORRECTABLE by passive manipulation — the foot can be brought to a normal position with gentle pressure, and it resolves with stretching. STRUCTURAL (true) clubfoot is RIGID and cannot be fully corrected passively. Distinguishing them at the newborn check determines whether the family needs reassurance or urgent referral.',
        associations: 'Often isolated and idiopathic, but examine for SPINA BIFIDA and other neural tube defects, arthrogryposis, and developmental dysplasia of the hip, which coexists more often than chance. Bilateral in about half.',
        the_ponseti_method: {
          what_it_is: 'Sequential gentle manipulation and CASTING, changed weekly, correcting the components in the CAVE order. Most feet then require a small percutaneous ACHILLES TENOTOMY to correct the residual equinus, followed by a BOOTS-AND-BAR foot abduction brace.',
          why_it_transformed_the_condition: 'It is largely NON-SURGICAL, cheap, and deliverable without an operating theatre — which has made effective treatment possible in settings where extensive surgery is not. It has become the global standard.',
          the_single_biggest_determinant_of_success:
            'BRACE COMPLIANCE. The bracing phase runs for YEARS — full-time initially, then at night and during naps until around age four or five. RELAPSE is common and is almost always due to the brace not being worn. Families must be told this at the very start, in plain terms: the casts correct the foot, but the brace is what keeps it corrected, and stopping early undoes the work. Supporting compliance is the intervention, not an afterthought.',
        },
      },

      the_limping_child: {
        the_governing_rule: 'A limping child is SEPTIC ARTHRITIS or osteomyelitis until proven otherwise. That is the first thing to exclude, not the last.',
        sort_by_age: {
          toddler_1_to_3: 'Transient synovitis · septic arthritis · toddler fracture (an undisplaced spiral tibial fracture from a twist, often with a normal initial film) · developmental dysplasia presenting late · NON-ACCIDENTAL INJURY.',
          child_4_to_10: 'Transient synovitis · septic arthritis · PERTHES disease · juvenile idiopathic arthritis · malignancy including leukaemia.',
          adolescent_10_to_16: 'SLIPPED UPPER FEMORAL EPIPHYSIS · septic arthritis · osteochondritis dissecans · tumour.',
        },
        transient_synovitis: 'The commonest cause — a self-limiting inflammatory hip effusion, often after a viral illness. The child is systemically WELL, afebrile or with a low fever, and can usually weight-bear with a limp. But it is a diagnosis of EXCLUSION: it cannot be made confidently in a child who is febrile, unwell or refusing to weight-bear.',
        perthes_disease: 'Idiopathic AVASCULAR NECROSIS of the femoral head, typically in boys aged about 4 to 8. Insidious painless limp, or pain referred to the KNEE or thigh, with reduced abduction and internal rotation.',
        slipped_upper_femoral_epiphysis: {
          what: 'The femoral head slips off the neck through the growth plate — effectively a Salter-Harris type I injury of the proximal femoral physis.',
          who: 'Overweight adolescents around puberty; also with hypothyroidism, growth hormone deficiency and renal disease. Bilateral in a substantial minority.',
          the_finding_that_gives_it_away: 'OBLIGATORY EXTERNAL ROTATION on hip flexion — as you flex the hip, the leg automatically rotates outward. Combined with restricted internal rotation, this is close to diagnostic.',
          the_trap: 'Pain is very frequently referred to the KNEE or distal thigh, and the hip is never examined. ALWAYS EXAMINE THE HIP IN A CHILD WITH KNEE PAIN. Weight-bearing on an unstable slip worsens it and raises the risk of avascular necrosis, so a suspected slip should be made NON-WEIGHT-BEARING immediately while imaging is arranged.',
        },
        the_safeguarding_obligation: 'Consider NON-ACCIDENTAL INJURY in any child with a fracture that does not fit the described mechanism, a delay in presentation, inconsistent histories, injuries of DIFFERENT AGES, or any fracture in a NON-MOBILE infant. A femoral or humeral shaft fracture in a child who cannot yet walk requires explanation.',
      },

      angular_deformity_bow_legs_and_knock_knees: {
        the_normal_developmental_sequence: 'Most children are physiologically BOW-LEGGED (genu varum) up to about age 2, pass through straight, become somewhat KNOCK-KNEED (genu valgum) around age 3 to 4, and settle to the adult alignment by about age 7. Recognising this normal sequence prevents a great deal of unnecessary investigation and parental anxiety.',
        when_it_is_not_physiological: 'ASYMMETRY between the two legs · deformity that is SEVERE or WORSENING rather than improving · deformity outside the expected age window · SHORT STATURE · pain · or a family history of skeletal dysplasia.',
        the_causes_to_exclude: 'RICKETS — nutritional vitamin D deficiency remains common in many populations and is treatable; look for wrist widening, rachitic rosary and delayed closure of the fontanelle. BLOUNT disease — a growth disturbance of the medial proximal tibia causing progressive varus, commoner in early walkers and in obesity. Skeletal dysplasias, and post-traumatic or post-infective growth arrest.',
      },
    },
    warnings: [
      'A limping child is SEPTIC ARTHRITIS until proven otherwise. Transient synovitis is a diagnosis of exclusion.',
      'ALWAYS EXAMINE THE HIP in a child with knee pain — slipped upper femoral epiphysis and Perthes both refer there.',
      'A suspected slipped upper femoral epiphysis must be made NON-WEIGHT-BEARING immediately — walking worsens the slip.',
      'Obligatory external rotation on hip flexion is close to diagnostic of a slipped epiphysis.',
      'Ortolani and Barlow become unreliable after about 3 months — after that, limited abduction is the key sign.',
      'A CLICK is usually benign; a CLUNK is significant. Do not confuse them.',
      'Use ULTRASOUND for the hip under 4 to 6 months — the femoral head is cartilaginous and invisible on X-ray.',
      'Distinguish positional talipes (fully correctable passively) from structural clubfoot (rigid) at the newborn check.',
      'Ponseti relapse is almost always brace non-compliance. Tell families at the start that bracing runs for years.',
      'Examine for spina bifida and hip dysplasia in any child with clubfoot.',
      'Bow legs to age 2 and knock knees at 3 to 4 are normal. Asymmetry, worsening, pain or short stature are not.',
      'Consider rickets in angular deformity — it is common and treatable.',
      'Any fracture in a NON-MOBILE infant requires explanation and a safeguarding assessment.',
    ],
    limitations: ['Screening programmes, referral ages and bracing protocols differ by country and service.'],
    cards: [
      { q: 'What do Ortolani and Barlow test?', a: 'Ortolani relocates a dislocated hip (In); Barlow dislocates a dislocatable one (Back/Out).' },
      { q: 'Why do they become unreliable after 3 months?', a: 'Soft tissues tighten — after that, limited abduction is the key sign.' },
      { q: 'Which imaging for a hip under 6 months?', a: 'Ultrasound — the femoral head is still cartilaginous.' },
      { q: 'Expand talipes equinovarus.', a: 'Talipes = ankle-foot deformity; equinus = foot pointing down; varus = heel turned inward.' },
      { q: 'What does CAVE stand for in clubfoot?', a: 'Cavus, Adductus, Varus, Equinus — corrected in that order by Ponseti.' },
      { q: 'What distinguishes positional from structural talipes?', a: 'Positional corrects fully with gentle passive manipulation; structural is rigid.' },
      { q: 'What is the main determinant of Ponseti success?', a: 'Brace compliance — relapse is almost always non-compliance.' },
      { q: 'What must be excluded first in a limping child?', a: 'Septic arthritis and osteomyelitis.' },
      { q: 'Which sign suggests slipped upper femoral epiphysis?', a: 'Obligatory external rotation on hip flexion, with restricted internal rotation.' },
      { q: 'Why examine the hip in a child with knee pain?', a: 'Both Perthes and slipped epiphysis refer pain to the knee, and the hip is otherwise never examined.' },
      { q: 'When are bow legs and knock knees normal?', a: 'Varus to about age 2, valgus around 3 to 4, adult alignment by about 7.' },
      { q: 'What does a fracture in a non-mobile infant require?', a: 'Explanation and a safeguarding assessment.' },
    ],
    checks: ['Hip examined in every child presenting with knee pain', 'Septic arthritis excluded before diagnosing transient synovitis', 'Weight-bearing stopped if a slip is suspected', 'Risk factors for DDH identified and hips examined at each check', 'Ultrasound used under 6 months', 'Positional versus structural talipes distinguished', 'Brace compliance discussed with the family from the outset', 'Safeguarding considered where the mechanism does not fit'],
  },
];
