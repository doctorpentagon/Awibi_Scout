/** Spine, joints and limb alignment. */

export default [
  {
    id: 'AS-MSKS-0001',
    type: 'definition',
    title: 'Spondylosis, Spondylitis, Spondylolysis and Spondylolisthesis — Four Words, Four Diseases',
    short: 'Spondylo- terms',
    summary:
      'Four similar words that mean entirely different things. "Spondylo-" just means vertebra; the suffix carries the whole meaning. Getting them confused changes a degenerative diagnosis into an inflammatory one.',
    domains: ['orthopaedics', 'neurology', 'radiology'],
    intents: ['classify', 'identify'],
    hazard: 'high',
    urgency: 'routine',
    aka: ['spondylosis', 'spondylitis', 'spondylolysis', 'spondylolisthesis', 'ankylosing spondylitis', 'back pain'],
    terms: ['spondylosis', 'spondylitis', 'spondylolysis', 'spondylolisthesis', 'scotty dog', 'ankylosing', 'myelopathy', 'sciatica', 'cauda equina'],
    body: {
      the_root: '"Spondylos" is Greek for vertebra. Every one of these words is about a vertebra; only the suffix differs.',
      spondylosis: {
        suffix_means: '-osis = a degenerative process or state.',
        what: 'AGE-RELATED DEGENERATION of the spine — disc dehydration and height loss, osteophytes, facet joint arthropathy, ligamentum flavum thickening.',
        matters_because:
          'When those changes narrow the canal in the NECK the result is CERVICAL SPONDYLOTIC MYELOPATHY — the commonest cause of spinal cord dysfunction in older adults, and frequently missed because the presentation is insidious: clumsy hands, deteriorating handwriting, unsteady gait, and only later bladder symptoms. Neck pain may be absent.',
        signs: 'Upper motor neurone signs in the LEGS with lower motor neurone signs at the level of the lesion in the ARMS. Look for Hoffmann sign, brisk reflexes, clonus and an extensor plantar.',
      },
      spondylitis: {
        suffix_means: '-itis = inflammation.',
        what: 'INFLAMMATORY disease of the spine. ANKYLOSING SPONDYLITIS is the classic; infection (tuberculous spondylitis — Pott disease — and pyogenic discitis) also belongs here.',
        inflammatory_versus_mechanical_back_pain: {
          inflammatory: 'Age under 40 at onset, INSIDIOUS, worse with REST and at NIGHT, prolonged MORNING STIFFNESS over 30 minutes, and BETTER WITH EXERCISE. Responds well to NSAIDs.',
          mechanical: 'Any age, often sudden, WORSE with activity, BETTER with rest, morning stiffness brief.',
          why_it_matters: 'This is the single most useful history in back pain, and it is often not taken. Inflammatory features warrant rheumatology referral; mechanical features do not.',
        },
        potts_disease:
          'Tuberculous spondylitis. Classically thoracolumbar, destroying the disc and adjacent vertebral bodies and producing a GIBBUS (sharp angular kyphosis), with a paravertebral cold abscess. Can cause cord compression. In TB-endemic settings, back pain with weight loss, night sweats and a kyphotic deformity is Pott disease until excluded.',
      },
      spondylolysis: {
        suffix_means: '-lysis = a break or dissolution.',
        what: 'A DEFECT or stress fracture in the PARS INTERARTICULARIS, usually at L5.',
        who: 'Adolescent athletes in sports involving repeated hyperextension — gymnastics, cricket fast bowling, fast bowling, diving, weightlifting.',
        imaging: 'On an oblique radiograph the posterior elements form a "SCOTTY DOG"; the pars defect appears as a COLLAR on the dog\'s neck.',
      },
      spondylolisthesis: {
        suffix_means: '-listhesis = slipping.',
        what: 'One vertebral body SLIPS FORWARD on the one below. Often the consequence of bilateral spondylolysis, or of degenerative facet disease in older adults.',
        graded: 'By the percentage of slip, in quartiles (grade 1 through 4, with complete displacement termed spondyloptosis).',
        symptoms: 'Back pain, and radicular or claudicant leg symptoms if the canal or foramen narrows. A palpable step may be felt on the spinous processes.',
      },
      the_one_line_separation: 'SpondylOSIS = worn. SpondylITIS = inflamed. SpondylOLYSIS = cracked. SpondylOLISTHESIS = slipped.',
      red_flags_in_any_back_pain: [
        'CAUDA EQUINA SYNDROME — bilateral sciatica, SADDLE ANAESTHESIA, bladder or bowel dysfunction (especially painless retention with overflow), reduced anal tone. A SURGICAL EMERGENCY: image and refer the same day, because delay causes permanent incontinence.',
        'New back pain with fever — discitis, epidural abscess.',
        'Age over 50 with new pain, or a history of cancer — metastasis until proven otherwise.',
        'Thoracic pain, unexplained weight loss, night pain that wakes the patient.',
        'Progressive neurological deficit or a sensory level.',
        'Prolonged steroid use, intravenous drug use, immunosuppression.',
      ],
    },
    warnings: [
      'CAUDA EQUINA SYNDROME is a surgical emergency. Ask every back pain patient about saddle numbness and bladder function, and image the same day if present. Delay causes permanent incontinence and sexual dysfunction.',
      'Cervical spondylotic myelopathy presents insidiously with clumsy hands and gait disturbance, often without neck pain. Examine for upper motor neurone signs in the legs.',
      'In TB-endemic settings, back pain with systemic features and kyphosis is Pott disease until excluded.',
      'Inflammatory back pain in a young adult needs rheumatology referral, not repeated analgesia.',
    ],
    limitations: ['Degenerative changes are near-universal on imaging over 50 and correlate poorly with symptoms. Image findings must be matched to the clinical picture.'],
    cards: [
      { q: 'Give the four spondylo- words and their meanings.', a: 'Spondylosis = degeneration. Spondylitis = inflammation. Spondylolysis = pars defect. Spondylolisthesis = forward slip.' },
      { q: 'How does inflammatory back pain differ from mechanical?', a: 'Inflammatory: under 40, worse at rest and at night, morning stiffness over 30 minutes, better with exercise.' },
      { q: 'Clumsy hands and unsteady gait in an older adult?', a: 'Cervical spondylotic myelopathy. Look for upper motor neurone signs in the legs.' },
      { q: 'Name the cauda equina red flags.', a: 'Bilateral sciatica, saddle anaesthesia, bladder or bowel dysfunction, reduced anal tone. Same-day imaging and referral.' },
      { q: 'What is the Scotty dog collar?', a: 'A pars interarticularis defect (spondylolysis) on an oblique radiograph.' },
    ],
    checks: ['Red flags screened', 'Saddle sensation and bladder function asked about', 'Inflammatory vs mechanical pattern established', 'Neurological examination documented', 'Same-day imaging if cauda equina suspected'],
  },

  {
    id: 'AS-MSKS-0002',
    type: 'definition',
    title: 'Spinal Curvature and Limb Alignment — Kyphosis, Lordosis, Scoliosis, Varus and Valgus',
    short: 'Curvature & alignment',
    summary:
      'Kyphosis and lordosis are normal curves that become pathological in excess. Scoliosis is never normal. Varus and vertigo-inducing valgus are reversed by almost everyone — the trick is that the named part points toward or away from the midline.',
    domains: ['orthopaedics', 'paediatrics', 'anatomy'],
    intents: ['classify', 'examine'],
    hazard: 'moderate',
    urgency: 'routine',
    aka: ['kyphosis', 'lordosis', 'scoliosis', 'varus', 'valgus', 'genu varum', 'genu valgum', 'bow legs', 'knock knees'],
    terms: ['kyphosis', 'lordosis', 'scoliosis', 'varus', 'valgus', 'genu varum', 'genu valgum', 'bow legs', 'knock knees', 'cobb angle', 'gibbus', 'rickets', 'windswept'],
    body: {
      the_normal_curves:
        'The spine has four curves. CERVICAL and LUMBAR are LORDOTIC (concave posteriorly). THORACIC and SACRAL are KYPHOTIC (convex posteriorly). All four are normal. The words describe pathology only when the curve is excessive, lost, or in the wrong place.',
      kyphosis: {
        what: 'Excessive posterior convexity, usually thoracic — a rounded upper back.',
        causes: [
          'Postural — flexible, correctable when the patient extends. Common in adolescents.',
          'Scheuermann disease — rigid adolescent kyphosis with wedged vertebrae.',
          'OSTEOPOROTIC vertebral fractures in older adults — the "dowager\'s hump", with progressive height loss.',
          'Ankylosing spondylitis.',
          'GIBBUS — a sharp, ANGULAR kyphosis over one or two segments, as opposed to a smooth curve. A gibbus means vertebral body DESTRUCTION: tuberculosis (Pott disease), tumour or fracture. A smooth curve is degenerative or postural; an angular one is destructive.',
        ],
        why_severe_kyphosis_matters: 'It restricts chest expansion and can cause restrictive lung disease and, in extreme cases, cor pulmonale.',
      },
      lordosis: {
        what: 'Excessive anterior concavity, usually lumbar — a hollow lower back.',
        causes: 'Obesity, pregnancy, hip flexion contracture, spondylolisthesis, and compensation for a thoracic kyphosis. In children, marked lordosis with a waddling gait and Gowers sign raises muscular dystrophy.',
        note: 'LOSS of the normal lumbar lordosis (a flattened back) is itself a sign — it occurs with muscle spasm and in ankylosing spondylitis.',
      },
      scoliosis: {
        what: 'LATERAL curvature with vertebral ROTATION. Never a normal variant.',
        the_examination: 'The ADAMS FORWARD BEND TEST. Ask the patient to bend forward with the knees straight. A STRUCTURAL scoliosis produces a RIB HUMP on one side, because the vertebrae are rotated. A POSTURAL scoliosis — from leg length discrepancy or muscle spasm — DISAPPEARS on forward bending.',
        measurement: 'The COBB angle on a standing full-spine radiograph. Management thresholds (observation, bracing, surgery) are set by angle and by remaining skeletal growth.',
        types: 'Idiopathic (the great majority, most often adolescent and more common in girls), congenital (vertebral malformation), neuromuscular (cerebral palsy, muscular dystrophy, spina bifida), and degenerative in adults.',
        red_flags: 'Pain, a LEFT-sided thoracic curve, rapid progression, or any neurological sign. These suggest an underlying cause — syrinx, tumour, tethered cord — and warrant MRI rather than observation.',
      },
      varus_and_valgus: {
        the_definition: 'Both describe the position of the part DISTAL to the named joint, relative to the midline.',
        varus: 'The distal part points TOWARD the midline. GENU VARUM = the tibia angles inward, so the knees are apart — BOW LEGS.',
        valgus: 'The distal part points AWAY from the midline. GENU VALGUM = the tibia angles outward, so the knees touch and the ankles are apart — KNOCK KNEES.',
        the_memory_aid: 'VaLgus has an L — the limbs make an L-shape at the knee, or: knock-kneed people are "gALLant". VaRus = the knees are apaRt.',
        the_developmental_normal:
          'This is where children are over-investigated. Physiological genu VARUM is normal in infants and toddlers up to about age 2. It then swings through neutral to physiological genu VALGUM peaking around ages 3–4, and settles to the adult position by about age 7. Symmetrical, painless, age-appropriate alignment in a well child needs reassurance, not radiographs.',
        when_it_is_not_physiological: [
          'ASYMMETRICAL — one leg differs from the other',
          'Severe, or WORSENING rather than improving with age',
          'Outside the expected age window',
          'Short stature, or the child is below the growth centile expected',
          'Painful, or associated with a limp',
          'Causes to consider: RICKETS, Blount disease (tibia vara), skeletal dysplasia, trauma to the physis, and previous infection.',
        ],
        windswept_deformity:
          'One leg in valgus and the other in varus, so both knees point the same way. Classically seen in severe RICKETS and in some skeletal dysplasias. It is a marker of significant metabolic bone disease and warrants biochemistry — calcium, phosphate, alkaline phosphatase, vitamin D and PTH.',
      },
      rickets_recap:
        'Vitamin D deficiency in a growing child. Beyond the leg deformity: RACHITIC ROSARY (beaded costochondral junctions), widened wrists and ankles, frontal bossing, craniotabes, delayed fontanelle closure, delayed dentition, Harrison sulcus, and a high alkaline phosphatase with low or low-normal calcium, low phosphate and high PTH.',
    },
    warnings: [
      'A gibbus — a sharp angular kyphosis — means vertebral destruction. Think tuberculosis, tumour or fracture, not posture.',
      'Scoliosis with pain, a left thoracic curve, or neurological signs needs MRI to exclude a syrinx, tumour or tethered cord.',
      'Do not investigate physiological bowing or knock knees in a well, symmetrical, age-appropriate child. Do investigate if asymmetrical, painful, worsening, or with short stature.',
      'Windswept deformity indicates significant metabolic bone disease — check the bone profile and vitamin D.',
    ],
    limitations: ['Cobb angle thresholds for bracing and surgery are set by local orthopaedic protocol and skeletal maturity.'],
    cards: [
      { q: 'Which spinal curves are normally lordotic?', a: 'Cervical and lumbar. Thoracic and sacral are normally kyphotic.' },
      { q: 'How do you distinguish structural from postural scoliosis?', a: 'Adams forward bend test. Structural produces a rib hump; postural disappears on bending.' },
      { q: 'Genu varum versus valgum?', a: 'Varum = bow legs, knees apart, tibia toward midline. Valgum = knock knees, ankles apart.' },
      { q: 'At what ages are bowing and knock knees physiological?', a: 'Varum up to about 2 years, valgum peaking about 3–4, adult alignment by about 7.' },
      { q: 'What does a windswept deformity suggest?', a: 'Severe rickets or skeletal dysplasia — check calcium, phosphate, ALP, vitamin D and PTH.' },
      { q: 'Smooth kyphosis versus angular gibbus?', a: 'Smooth is degenerative or postural. Angular means vertebral destruction — TB, tumour, fracture.' },
    ],
    checks: ['Adams forward bend performed', 'Symmetry and age-appropriateness assessed in children', 'Bone profile and vitamin D if deformity atypical', 'Neurological examination in scoliosis', 'Growth centiles plotted'],
  },

  {
    id: 'AS-MSKS-0003',
    type: 'differential',
    title: 'The Painful Joint — Osteoarthritis, Rheumatoid, Gout, Pseudogout and Septic Arthritis',
    short: 'Painful joint',
    summary:
      'One question comes before every other: could this be SEPTIC? A hot swollen joint is septic arthritis until proven otherwise, because it destroys cartilage within days and the diagnosis is made by aspirating, not by waiting.',
    domains: ['orthopaedics', 'immunology', 'emergency_medicine'],
    intents: ['classify', 'identify'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: ['arthritis', 'joint pain', 'septic arthritis', 'gout', 'pseudogout', 'osteoarthritis', 'rheumatoid arthritis', 'hot joint'],
    terms: ['arthritis', 'septic', 'gout', 'pseudogout', 'osteoarthritis', 'rheumatoid', 'joint aspiration', 'crystals', 'birefringent', 'heberden', 'bouchard', 'anti-ccp'],
    confirm_locally: true,
    body: {
      the_rule_that_comes_first:
        'ANY acutely hot, swollen, painful joint is SEPTIC ARTHRITIS until proven otherwise. It destroys articular cartilage within days and carries significant mortality. The diagnosis requires JOINT ASPIRATION before antibiotics where at all possible — once antibiotics are given the culture yield falls sharply. Do not attribute a hot joint to a known diagnosis of gout or rheumatoid arthritis: those patients get septic arthritis too, and the pre-existing diagnosis is exactly why it gets missed.',
      septic_arthritis: {
        features: 'Usually MONOarticular, most often the knee. Severe pain, the patient will not move it even passively, warmth, effusion, systemic upset. In children, a refusal to weight-bear.',
        risk_factors: 'Pre-existing joint disease, prosthetic joint, diabetes, immunosuppression, intravenous drug use, recent joint injection or surgery, skin breach.',
        aspirate_shows: 'Very high white cell count, predominantly neutrophils, turbid or frankly purulent fluid. Send for urgent Gram stain, culture and CRYSTALS — crystals do not exclude infection and the two can coexist.',
        management: 'Aspiration, then intravenous antibiotics per local protocol, with joint washout as directed by orthopaedics.',
        the_gonococcal_variant: 'In sexually active young adults, disseminated gonococcal infection causes a migratory polyarthralgia, tenosynovitis and pustular skin lesions. Take a sexual history and send appropriate samples.',
      },
      osteoarthritis: {
        pattern: 'Mechanical. Pain WORSE with use and better with rest. Morning stiffness SHORT, typically under 30 minutes.',
        joints: 'Weight-bearing — knees, hips — plus the DIP joints (HEBERDEN nodes) and PIP joints (BOUCHARD nodes), and the first carpometacarpal joint at the thumb base.',
        signs: 'Bony enlargement, crepitus, reduced range, effusion if there is a flare, little warmth.',
        radiograph: 'LOSS of joint space, Osteophytes, Subchondral Sclerosis, Subchondral cysts — LOSS.',
        bloods: 'Inflammatory markers NORMAL. That is a useful discriminator.',
      },
      rheumatoid_arthritis: {
        pattern: 'Inflammatory. Pain BETTER with use and worse with rest. Morning stiffness PROLONGED, over an hour.',
        joints: 'SYMMETRICAL, SMALL joints — MCPs, PIPs, wrists, MTPs. It SPARES THE DIP JOINTS, which is the cleanest single discriminator from osteoarthritis and psoriatic arthritis.',
        signs: 'Soft, boggy, warm synovial swelling. Later: ulnar deviation, swan-neck and boutonnière deformities, Z-thumb, rheumatoid nodules.',
        radiograph: 'Soft tissue swelling, periarticular osteopenia, EROSIONS, joint space narrowing.',
        bloods: 'Raised CRP and ESR. Rheumatoid factor is only moderately specific; ANTI-CCP is far more specific and predicts erosive disease.',
        the_urgency: 'Erosions occur early and are irreversible. Suspected inflammatory arthritis needs EARLY rheumatology referral — the window in which disease-modifying therapy prevents damage is measured in weeks to months, not years.',
      },
      crystal_arthritis: {
        gout: {
          crystal: 'Monosodium urate. NEEDLE-shaped, NEGATIVELY birefringent.',
          joints: 'Classically the first metatarsophalangeal joint (podagra), also midfoot, ankle, knee. Exquisitely painful, often waking the patient at night, with red shiny overlying skin.',
          the_trap: 'Serum urate is frequently NORMAL during an acute attack. A normal urate does not exclude gout, and a raised urate does not diagnose it.',
          chronic: 'Tophi — firm urate deposits in the helix of the ear, olecranon, tendons and finger pulps.',
        },
        pseudogout: {
          crystal: 'Calcium pyrophosphate. RHOMBOID-shaped, POSITIVELY birefringent.',
          joints: 'Larger joints — knee and wrist especially. Older patients.',
          radiograph: 'CHONDROCALCINOSIS — a fine line of calcification within the joint cartilage, classically in the knee meniscus and the wrist triangular fibrocartilage.',
        },
        the_memory_aid: 'GOUT: needle, negative. Both begin with N. Pseudogout is therefore the other one — rhomboid and positive.',
      },
      the_practical_algorithm: [
        'Hot, swollen, single joint → ASPIRATE. Send for Gram stain, culture, cell count and crystals.',
        'Symmetrical small joints, prolonged morning stiffness, DIPs spared → inflammatory; check CRP, ESR, anti-CCP and refer to rheumatology early.',
        'Weight-bearing joints and DIPs, worse with use, normal inflammatory markers → osteoarthritis.',
        'Sudden monoarticular attack with normal markers or raised urate → crystal arthritis — but only after infection is excluded.',
      ],
    },
    warnings: [
      'A hot swollen joint is septic arthritis until proven otherwise. Aspirate BEFORE antibiotics wherever possible — antibiotics first destroys the culture yield.',
      'A known diagnosis of gout or rheumatoid arthritis does not exclude infection. Those patients are at HIGHER risk, and crystals in the fluid do not rule out sepsis.',
      'A normal serum urate does not exclude acute gout.',
      'Suspected inflammatory arthritis needs early rheumatology referral. Erosions are irreversible and occur early.',
      'A child refusing to weight-bear needs urgent assessment for septic arthritis and osteomyelitis.',
    ],
    limitations: ['Polarised microscopy requires expertise and is not universally available. Culture is negative in a proportion of true septic arthritis.'],
    cards: [
      { q: 'What is the first question in any hot swollen joint?', a: 'Could this be septic? Aspirate before antibiotics.' },
      { q: 'Which joints does rheumatoid arthritis spare?', a: 'The DIP joints — the cleanest discriminator from osteoarthritis and psoriatic arthritis.' },
      { q: 'Gout crystals — shape and birefringence?', a: 'Needle-shaped, negatively birefringent. Both start with N.' },
      { q: 'What are Heberden and Bouchard nodes?', a: 'Osteoarthritic bony swellings — Heberden at DIP, Bouchard at PIP.' },
      { q: 'Radiographic features of osteoarthritis?', a: 'LOSS — Loss of joint space, Osteophytes, Subchondral sclerosis, Subchondral cysts.' },
      { q: 'Does a normal urate exclude gout?', a: 'No. It is often normal during an acute attack.' },
    ],
    checks: ['Septic arthritis considered and excluded', 'Joint aspirated before antibiotics where possible', 'Fluid sent for Gram stain, culture, cell count and crystals', 'Morning stiffness duration recorded', 'DIP involvement noted', 'Early rheumatology referral if inflammatory'],
  },
];
