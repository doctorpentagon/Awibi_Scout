/**
 * Peripheral stigmata — the findings you gather from the end of the bed and
 * the hands, before you ever touch the organ itself.
 *
 * Scout carried liver stigmata but not hypertension or renal, which were both
 * asked for. Both are exam favourites and, more importantly, both change what
 * you do next.
 */

export default [
  {
    id: 'AS-STIG-0002',
    type: 'stigmata',
    title: 'Peripheral Stigmata of Long-Standing Hypertension',
    short: 'Hypertension stigmata',
    summary:
      'Blood pressure is a number taken at one moment. The stigmata tell you how long it has been high and what it has already damaged — and the two that matter most are the DISPLACED APEX BEAT and the RETINA, because they are end-organ damage you can find at the bedside without a single test.',
    domains: ['cardiovascular', 'physiology'],
    intents: ['identify'],
    hazard: 'high',
    urgency: 'urgent',
    aka: [
      'hypertension stigmata', 'peripheral stigmata of hypertension', 'signs of hypertension',
      'end organ damage', 'hypertensive retinopathy', 'displaced apex beat', 'heaving apex',
      'thickened arterial wall', 'arterial thickening', 'hypertensive heart disease',
      'malignant hypertension', 'accelerated hypertension',
    ],
    terms: [
      'hypertension', 'stigmata', 'apex beat', 'displaced', 'heaving', 'sustained', 'thrusting',
      'left ventricular hypertrophy', 'fourth heart sound', 's4', 'radiofemoral delay',
      'coarctation', 'renal bruit', 'retinopathy', 'keith wagener', 'silver wiring',
      'av nipping', 'cotton wool', 'papilloedema', 'thickened artery', 'arteriosclerosis',
      'xanthelasma', 'corneal arcus', 'target organ damage',
    ],
    confirm_locally: true,
    body: {
      where_the_rest_of_hypertension_lives:
        'This entry is the BEDSIDE EXAMINATION in depth — what to look for, how to elicit it, and what each finding means. The ECG changes of potassium disturbance, the J-curve of blood pressure lowering, and the wider management of hypertension are covered in "Hypertension — End-Organ Stigmata, ECG Potassium Changes and the J-Curve". Use that entry for the disease; use this one when you are standing at the bed.',

      why_look_for_these_at_all:
        'A blood pressure reading tells you about this moment. Stigmata tell you about YEARS. They answer three questions no single reading can: has this been present long enough to damage organs, is there a SECONDARY cause, and is this an emergency right now? Finding end-organ damage converts "raised blood pressure" into "hypertensive heart disease" or "hypertension with retinopathy", which changes the urgency, the target and the drug.',

      the_hands_and_arms: {
        the_arterial_wall_itself: {
          what_to_feel: 'Palpate the RADIAL and especially the BRACHIAL artery. In long-standing hypertension and arteriosclerosis the wall becomes THICKENED, stiff and palpably cord-like — it can be rolled under the finger rather than compressed.',
          the_related_sign: 'A very stiff vessel may produce PSEUDOHYPERTENSION, where the cuff cannot compress the rigid artery and reads falsely high. The classic bedside test is OSLER SIGN — the radial artery remains palpable as a firm cord even when the cuff is inflated above systolic. Its reliability is debated, but the concept matters: suspect it in an elderly patient with very high readings and no end-organ damage who becomes symptomatically hypotensive on treatment. That combination is a real trap.',
        },
        pulse_character: 'Assess rate, rhythm and character. Long-standing hypertension gives a stiff arterial tree and a WIDE PULSE PRESSURE with a sharp upstroke in the elderly. Note that isolated systolic hypertension in an older patient is a stiff-artery disease, not simply "mild" hypertension.',
        radiofemoral_delay: 'Palpate the radial and femoral pulses SIMULTANEOUSLY. A delay, or weak femoral pulses, suggests COARCTATION OF THE AORTA — a correctable, secondary cause of hypertension that is missed for decades because nobody feels the femorals. Also check for a blood pressure difference between arms.',
        signs_of_lipid_and_vascular_disease: 'Tendon xanthomata, xanthelasma and a CORNEAL ARCUS in a patient under about 45 all point to hyperlipidaemia and shared cardiovascular risk rather than to hypertension itself — but they belong in the same survey.',
      },

      the_face_and_eyes: {
        the_retina_is_the_only_place_you_see_arteries_directly:
          'FUNDOSCOPY is the single highest-value examination here, and it is the one most often skipped. Nowhere else in the body can you look at small arteries without an instrument through the skin.',
        keith_wagener_barker_grading: {
          grade_1: 'Generalised arteriolar NARROWING and increased light reflex — "SILVER" or "COPPER WIRING".',
          grade_2: 'ARTERIOVENOUS NIPPING — the thickened arteriole indents the vein where they cross.',
          grade_3: 'Grade 2 plus FLAME HAEMORRHAGES, COTTON-WOOL SPOTS (retinal infarcts) and hard exudates.',
          grade_4: 'Grade 3 plus PAPILLOEDEMA — swelling of the optic disc.',
        },
        the_action_point:
          'Grades 3 and 4 define ACCELERATED (malignant) HYPERTENSION. This is a HYPERTENSIVE EMERGENCY requiring same-day assessment and controlled blood pressure reduction, not a routine clinic adjustment. Papilloedema in a hypertensive patient is not a finding to note and review in six weeks.',
        the_face_in_secondary_causes: 'A CUSHINGOID appearance — moon face, plethora, supraclavicular and interscapular fat pads — suggests Cushing syndrome or exogenous steroid. COARSE features, prognathism and large hands suggest acromegaly. Both are secondary, treatable causes.',
      },

      the_praecordium_the_two_most_important_findings: {
        the_displaced_apex_beat: {
          how_to_find_it: 'The apex beat is the most inferolateral point at which the cardiac impulse is palpable. Locate it by INTERCOSTAL SPACE and by its relation to the MID-CLAVICULAR LINE. Normal is the 5th intercostal space in or medial to the mid-clavicular line.',
          what_displacement_means:
            'DISPLACEMENT — down and out — indicates VOLUME overload and chamber DILATATION. In the hypertensive patient this signifies that the ventricle has moved beyond compensated hypertrophy into DILATATION and failure. It is a late and serious sign.',
          the_distinction_that_matters_more: {
            heaving_sustained: 'A HEAVING (sustained, thrusting) apex that is NOT displaced indicates PRESSURE overload with CONCENTRIC LEFT VENTRICULAR HYPERTROPHY. This is the characteristic finding of long-standing hypertension and of aortic stenosis. The ventricle has thickened, not dilated.',
            thrusting_displaced: 'A hyperdynamic, DISPLACED apex indicates VOLUME overload — aortic or mitral regurgitation, or a dilated failing ventricle.',
            why_it_matters: 'Heaving-but-not-displaced tells you the hypertension has been present for years and the ventricle is compensating. Heaving AND displaced tells you compensation has failed. That is a genuinely different clinical situation and it is decided entirely by palpation.',
          },
          when_you_cannot_feel_it: 'An impalpable apex is common and does not exclude disease — obesity, emphysema, pericardial effusion and dextrocardia all account for it. Say so rather than inventing a position.',
        },
        the_fourth_heart_sound:
          'An S4 is a LOW-PITCHED sound just BEFORE S1, produced by atrial contraction against a STIFF, non-compliant ventricle. It is heard best at the apex with the BELL, patient in the left lateral position. It is a classic accompaniment of hypertensive left ventricular hypertrophy. Crucially, an S4 CANNOT exist in atrial fibrillation, because it requires organised atrial contraction — a small logical check that catches a lot of invented findings.',
        other_praecordial_findings: 'A loud or ringing A2 (the aortic component of the second heart sound). Murmurs of associated aortic valve disease. Signs of heart failure if compensation has failed — raised JVP, third heart sound, basal crackles, dependent oedema.',
      },

      the_abdomen: {
        renal_bruit: 'AUSCULTATE for a bruit above the umbilicus and in the flanks. A bruit suggests RENAL ARTERY STENOSIS — a secondary and potentially correctable cause. Suspect it particularly in resistant hypertension, in a patient with widespread atherosclerosis, in a young woman (fibromuscular dysplasia), or where renal function DETERIORATES SHARPLY after starting an ACE inhibitor or ARB, which is a near-classic presentation.',
        ballotable_kidneys: 'Bilateral enlarged, ballotable kidneys suggest AUTOSOMAL DOMINANT POLYCYSTIC KIDNEY DISEASE — hypertension often appears BEFORE any fall in renal function and is the earliest treatable finding in that condition.',
        aortic_aneurysm: 'Palpate for an expansile pulsatile mass. Hypertension is a major risk factor.',
        adrenal_causes: 'Episodic hypertension with headache, sweating and palpitations suggests PHAEOCHROMOCYTOMA; hypertension with hypokalaemia suggests primary hyperaldosteronism (Conn syndrome). Neither has a specific abdominal sign, but both belong in the survey.',
      },

      the_legs_and_the_rest: 'Peripheral pulses and evidence of peripheral arterial disease. Oedema, which may be heart failure or a calcium channel blocker side effect — a distinction worth making before escalating diuretics. Signs of chronic kidney disease, since hypertension is both cause and consequence.',

      the_synthesis: {
        what_the_findings_together_tell_you: 'Thickened vessels + heaving non-displaced apex + S4 + grade 1–2 retinopathy = long-standing, compensated hypertensive heart disease. Add a displaced apex, a third heart sound and basal crackles and compensation has failed. Add grade 3–4 retinopathy and it is an emergency today.',
        the_secondary_cause_checklist_from_examination_alone: 'Radiofemoral delay (coarctation) · renal bruit (renal artery stenosis) · ballotable kidneys (polycystic disease) · cushingoid habitus (Cushing) · acromegalic features · thyroid signs. Any one of these changes the investigation completely, and all are found by looking.',
      },
    },
    warnings: [
      'A HEAVING but NOT displaced apex means concentric hypertrophy from pressure overload — the hypertension has been present for years. A DISPLACED apex means dilatation and failed compensation. The distinction is made by palpation alone.',
      'Grade 3 or 4 retinopathy (haemorrhages, cotton-wool spots, papilloedema) is accelerated hypertension — a same-day emergency, not a clinic adjustment.',
      'Do fundoscopy. It is the only place you can see arteries directly and it is the most commonly skipped part of this examination.',
      'Feel the femoral pulses with the radials. Coarctation is a correctable cause missed for decades because nobody checks.',
      'Listen for a renal bruit — especially in resistant hypertension, or if renal function falls sharply after starting an ACE inhibitor or ARB.',
      'Suspect pseudohypertension in an elderly patient with very high readings, no end-organ damage, and symptomatic hypotension on treatment.',
      'An S4 cannot exist in atrial fibrillation — it requires organised atrial contraction.',
      'An impalpable apex does not exclude disease. Say it is impalpable rather than inventing a position.',
      'Ankle oedema in a hypertensive patient may be a calcium channel blocker effect, not heart failure — check before adding a diuretic.',
    ],
    limitations: ['Retinopathy grading systems vary between services. Blood pressure thresholds and treatment targets are guideline-specific.'],
    cards: [
      { q: 'What does a heaving, non-displaced apex indicate?', a: 'Pressure overload with concentric left ventricular hypertrophy — long-standing hypertension or aortic stenosis.' },
      { q: 'What does a displaced apex indicate?', a: 'Volume overload and chamber dilatation — compensation has failed.' },
      { q: 'Grade the Keith-Wagener-Barker retinopathy stages.', a: '1 silver wiring, 2 AV nipping, 3 haemorrhages and cotton-wool spots, 4 papilloedema.' },
      { q: 'Which retinopathy grades constitute an emergency?', a: 'Grades 3 and 4 — accelerated (malignant) hypertension, same-day assessment.' },
      { q: 'What does radiofemoral delay suggest?', a: 'Coarctation of the aorta — a correctable secondary cause.' },
      { q: 'When should you suspect renal artery stenosis?', a: 'Resistant hypertension, a renal bruit, or renal function falling sharply after an ACE inhibitor or ARB.' },
      { q: 'What is Osler sign and why does it matter?', a: 'A palpable radial artery despite suprasystolic cuff inflation — suggests pseudohypertension from a rigid vessel.' },
      { q: 'Why can an S4 not occur in atrial fibrillation?', a: 'It is produced by organised atrial contraction, which AF abolishes.' },
      { q: 'Which bedside findings suggest a secondary cause?', a: 'Radiofemoral delay, renal bruit, ballotable kidneys, cushingoid or acromegalic features.' },
    ],
    related: ['hypertension_end_organ_stigmata_ecg_potassium_changes_and_the_j_curve'],
    checks: ['Brachial and radial wall character palpated', 'Radial and femoral pulses timed together', 'Blood pressure measured in both arms', 'Apex beat located by space and mid-clavicular line, and its character described', 'Auscultated for S4 and a loud A2', 'Fundoscopy performed and graded', 'Renal bruit auscultated', 'Kidneys ballotted', 'Secondary-cause features documented'],
  },

  {
    id: 'AS-STIG-0003',
    type: 'stigmata',
    title: 'Peripheral Stigmata of Chronic Kidney Disease',
    short: 'Renal stigmata',
    summary:
      'Uraemia is visible before it is measured. The hands, the skin, the breath and the fistula tell you how advanced the disease is and whether the patient is already on dialysis — and a PERICARDIAL RUB in a uraemic patient is an emergency, because it is an absolute indication for dialysis.',
    domains: ['renal', 'physiology'],
    intents: ['identify'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'renal stigmata', 'peripheral stigmata of renal disease', 'signs of chronic kidney disease',
      'uraemic signs', 'uraemia', 'uraemic frost', 'uraemic fetor', 'leuconychia', 'half and half nails',
      'lindsay nails', 'terry nails', 'asterixis', 'pericardial rub', 'av fistula', 'renal failure signs',
    ],
    terms: [
      'chronic kidney disease', 'uraemia', 'uraemic frost', 'uraemic fetor', 'asterixis',
      'flapping tremor', 'leuconychia', 'half and half nails', 'lindsay', 'terry nails',
      'beau lines', 'muehrcke lines', 'pruritus', 'excoriation', 'sallow', 'pallor',
      'arteriovenous fistula', 'thrill', 'bruit', 'tunnelled line', 'peritoneal dialysis catheter',
      'pericardial rub', 'renal bone disease', 'tetany', 'chvostek', 'trousseau', 'calciphylaxis',
      'nephrotic', 'periorbital oedema', 'transplant scar', 'rutherford morrison',
    ],
    confirm_locally: true,
    body: {
      why_this_matters: 'Chronic kidney disease is a whole-body disease, not a number on a blood test. The stigmata tell you the STAGE, whether the patient is on RENAL REPLACEMENT THERAPY, whether there are complications needing action today, and often what the underlying cause was. Much of it is visible from the end of the bed.',

      the_hands_and_nails: {
        leuconychia: 'WHITE nails from HYPOALBUMINAEMIA — nephrotic syndrome, or malnutrition of chronic disease. Also seen in liver disease.',
        half_and_half_nails: 'LINDSAY NAILS — the PROXIMAL half white and the DISTAL half red-brown, with a sharp line between. Relatively specific for CHRONIC KIDNEY DISEASE and genuinely useful. Distinguish from TERRY NAILS (proximal white with only a narrow distal brown band), which are more associated with cirrhosis.',
        muehrcke_lines: 'Paired transverse WHITE bands that do NOT move with nail growth — a sign of sustained hypoalbuminaemia.',
        beau_lines: 'Transverse GROOVES marking a period of arrested nail growth during severe systemic illness. They date the illness.',
        asterixis: {
          what: 'A FLAPPING TREMOR elicited by asking the patient to extend the arms with wrists dorsiflexed and fingers spread, and hold for 30 seconds. There are irregular, jerky lapses of posture.',
          what_it_means: 'A METABOLIC ENCEPHALOPATHY — here uraemic. It is NOT specific to the kidney: hepatic encephalopathy, carbon dioxide retention and severe electrolyte disturbance all cause it. In a uraemic patient it signals advanced disease and is an indication to consider dialysis urgently.',
        },
        other_hand_signs: 'Pallor of the palmar creases from ANAEMIA of chronic kidney disease (reduced erythropoietin). Peripheral neuropathy. Signs of the underlying cause — the sclerodactyly of systemic sclerosis, the joint deformity of rheumatoid, gouty tophi, or the vasculitic lesions of ANCA-associated disease.',
        the_arm_you_must_examine_and_protect: {
          arteriovenous_fistula: 'Look for a surgical scar with a dilated, tortuous vein at the wrist or antecubital fossa. PALPATE for a THRILL and AUSCULTATE for a BRUIT — both should be present in a working fistula. Their ABSENCE suggests THROMBOSIS and needs urgent vascular assessment, because a lost fistula is a lost access.',
          the_rule_that_protects_the_patient_for_life:
            'NEVER take blood, site a cannula, place a PICC line or apply a blood pressure cuff on a fistula arm — or on the non-dominant arm of anyone with advancing chronic kidney disease who may need one in future. Damaging those veins destroys future access. Ward staff do this routinely without realising, and the consequences are permanent. Say it aloud at the bedside and document it.',
        },
      },

      the_face_and_mouth: {
        complexion: 'A SALLOW, yellow-brown or muddy complexion from retained urochrome pigment, combined with the pallor of anaemia. On darker skin this is subtle — assess conjunctival and palmar pallor rather than relying on complexion.',
        periorbital_oedema: 'Prominent on WAKING and characteristic of NEPHROTIC syndrome, because low oncotic pressure lets fluid collect in the loose periorbital tissue overnight.',
        uraemic_fetor: 'A distinctive AMMONIACAL or "fishy" smell on the breath, from urea broken down to ammonia in saliva. It indicates severe uraemia.',
        mouth: 'Dry mucosa, gum hypertrophy in transplant patients on CICLOSPORIN or on calcium channel blockers, and oral candidiasis in the immunosuppressed.',
        eyes: 'Band keratopathy from chronic hypercalcaemia. Retinopathy from the diabetes or hypertension that often caused the kidney disease in the first place — and its ABSENCE in presumed diabetic nephropathy should make you question that diagnosis.',
      },

      the_skin: {
        pruritus_and_excoriation: 'ITCH is one of the most distressing and under-treated symptoms of advanced chronic kidney disease. Look for widespread EXCORIATIONS and lichenification — often the most visible sign, and often the one the patient most wants addressed.',
        uraemic_frost: 'A fine WHITE crystalline deposit of urea on the skin, most visible on the face and trunk, appearing as sweat evaporates. It is a sign of PROFOUND, untreated uraemia. It is rare wherever dialysis is available, and where it is seen it indicates a patient who has been without treatment far too long.',
        pallor_and_bruising: 'Anaemia, plus easy bruising and purpura from URAEMIC PLATELET DYSFUNCTION — the platelet COUNT is often normal while platelet FUNCTION is impaired, which is why these patients bleed with a normal full blood count.',
        calciphylaxis: 'Extremely painful, violaceous, net-like (retiform) skin lesions progressing to necrotic ulcers, typically on the thighs, abdomen and buttocks. Caused by calcification of small dermal vessels in advanced renal bone-mineral disease. It carries a very high mortality and needs urgent specialist involvement — it is regularly misdiagnosed as cellulitis or a vasculitic ulcer.',
        other: 'Nephrogenic systemic fibrosis, historically associated with gadolinium exposure in severe renal impairment. Porphyria cutanea tarda-like blistering on sun-exposed skin in dialysis patients.',
      },

      the_neck_chest_and_abdomen: {
        volume_status: 'The JUGULAR VENOUS PRESSURE is central. Raised in fluid overload, low in the over-dialysed or volume-depleted patient. Assess it deliberately — fluid management is the daily question in this population.',
        pericardial_rub: {
          what: 'A scratchy, superficial, to-and-fro sound heard best at the left sternal edge with the patient leaning forward at end-expiration.',
          why_it_is_urgent:
            'URAEMIC PERICARDITIS is an ABSOLUTE INDICATION FOR DIALYSIS. It can progress to a haemorrhagic effusion and TAMPONADE. Finding a rub in a uraemic patient is not an interesting sign to record — it changes management today. It is one of the highest-yield findings in this entire examination and it is frequently not listened for.',
        },
        lungs: 'Basal crackles and pleural effusions from fluid overload. "Uraemic lung" — a bat-wing pattern of pulmonary oedema on the chest film.',
        heart: 'Hypertension is almost universal. Left ventricular hypertrophy is common. Listen for the murmurs of accelerated valvular calcification.',
        abdomen: {
          transplant: 'A hockey-stick or RUTHERFORD MORRISON scar in the ILIAC FOSSA with a palpable, firm mass beneath it is a RENAL TRANSPLANT. It is placed in the iliac fossa, not orthotopically, and it is easily mistaken for a mass by the unwary. Its presence tells you the patient is immunosuppressed.',
          peritoneal_dialysis: 'A Tenckhoff CATHETER exit site, usually paramedian. Inspect it for infection, and remember the rule: a CLOUDY BAG is peritonitis until proven otherwise.',
          ballotable_kidneys: 'Bilateral enlargement suggests polycystic kidney disease. Also look for a hepatomegaly of associated liver cysts.',
          nephrectomy_scars: 'Loin scars from previous surgery.',
        },
        vascular_access_elsewhere: 'A TUNNELLED CENTRAL LINE below the clavicle, or scars from previous ones. Multiple scars indicate repeated access failure and a difficult vascular future.',
      },

      the_neuromuscular_signs: {
        renal_bone_mineral_disease: 'Bone pain, proximal myopathy and fracture from renal osteodystrophy — driven by phosphate retention, reduced vitamin D activation and secondary hyperparathyroidism.',
        hypocalcaemia: 'Look for CHVOSTEK SIGN (tapping the facial nerve causes facial twitching) and TROUSSEAU SIGN (inflating a blood pressure cuff above systolic for three minutes causes carpopedal spasm). Trousseau is the more specific of the two.',
        peripheral_neuropathy_and_restless_legs: 'Both common, both under-recognised, and restless legs in particular is a substantial cause of sleep disturbance in dialysis patients.',
      },

      putting_it_together: 'Half-and-half nails + sallow complexion + excoriations + a fistula with a thrill = established chronic kidney disease on haemodialysis. Add asterixis, uraemic fetor or a pericardial rub and the patient is inadequately dialysed or presenting late, and that requires action today rather than at the next clinic.',
    },
    warnings: [
      'A PERICARDIAL RUB in a uraemic patient is an ABSOLUTE indication for dialysis and can progress to tamponade. Listen for it deliberately.',
      'NEVER cannulate, venepuncture, or apply a blood pressure cuff to a fistula arm — or the non-dominant arm of anyone with advancing CKD. The damage is permanent.',
      'An absent thrill or bruit over a fistula suggests thrombosis — urgent vascular assessment.',
      'Asterixis in a uraemic patient signals encephalopathy and advanced disease — consider dialysis urgently.',
      'Uraemic platelet DYSFUNCTION causes bleeding with a NORMAL platelet count.',
      'Calciphylaxis is regularly misdiagnosed as cellulitis. Painful violaceous retiform lesions in advanced CKD need urgent specialist input and carry high mortality.',
      'A cloudy peritoneal dialysis bag is peritonitis until proven otherwise, even without pain or fever.',
      'A firm mass under an iliac fossa scar is a transplanted kidney — the patient is immunosuppressed.',
      'Uraemic frost indicates profound untreated uraemia and a patient who has gone far too long without treatment.',
      'Absence of retinopathy in presumed diabetic nephropathy should make you question the diagnosis.',
      'On darker skin, assess pallor at the conjunctivae and palmar creases rather than by complexion.',
    ],
    limitations: ['Dialysis indications, access protocols and bone-mineral targets are service-specific.'],
    cards: [
      { q: 'What are half-and-half (Lindsay) nails?', a: 'Proximal half white, distal half red-brown — relatively specific for chronic kidney disease.' },
      { q: 'How do you elicit asterixis and what does it mean?', a: 'Arms extended, wrists dorsiflexed, held 30 seconds — jerky lapses of posture indicate metabolic encephalopathy.' },
      { q: 'Why is a pericardial rub urgent in a uraemic patient?', a: 'Uraemic pericarditis is an absolute indication for dialysis and can progress to tamponade.' },
      { q: 'What must never be done to a fistula arm?', a: 'No cannulation, venepuncture, PICC line or blood pressure cuff — the damage to future access is permanent.' },
      { q: 'What does an absent thrill over a fistula suggest?', a: 'Thrombosis — urgent vascular assessment.' },
      { q: 'Why do uraemic patients bleed with a normal platelet count?', a: 'Platelet FUNCTION is impaired, not the count.' },
      { q: 'What is calciphylaxis?', a: 'Calcification of small dermal vessels causing painful retiform necrotic ulcers — high mortality, often mistaken for cellulitis.' },
      { q: 'Where is a transplanted kidney placed?', a: 'The iliac fossa, under a Rutherford Morrison scar — not orthotopically.' },
      { q: 'What is uraemic frost?', a: 'Crystalline urea deposited on the skin — a sign of profound untreated uraemia.' },
      { q: 'Which sign is more specific for hypocalcaemia, Chvostek or Trousseau?', a: 'Trousseau — carpopedal spasm on cuff inflation.' },
    ],
    related: ['the_nephron_acute_kidney_injury_and_the_nephrotic_nephritic_split', 'adpkd_hivan_and_dialysis'],
    checks: ['Nails inspected for half-and-half and Muehrcke lines', 'Asterixis tested', 'Fistula examined for thrill and bruit, and the arm protected and documented', 'Skin examined for excoriation, purpura and calciphylaxis', 'JVP and volume status assessed', 'Auscultated specifically for a pericardial rub', 'Abdomen examined for transplant, PD catheter and ballotable kidneys', 'Chvostek and Trousseau tested if hypocalcaemia suspected'],
  },
];
