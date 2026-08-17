/**
 * CASE SCENARIOS — Plastics and hand surgery: flexor sheath infection and
 * high-pressure injection injury.
 *
 * Batch 6, part 5 — closes the batch at case 60.
 */

export default [
  {
    id: 'AS-CASE-0059',
    type: 'case',
    specialty: 'Surgery — Plastics and burns',
    teaching_case: true,
    title: 'CASE: A Swollen Finger Two Days After a Rose Thorn',
    short: 'Case: pyogenic flexor tenosynovitis',
    summary:
      'A 38-year-old with a fusiform swollen finger held in flexion. Teaches the four Kanavel signs and which appears first, why the tendon sheath is a closed compartment that destroys gliding function in hours, and why "give antibiotics and review tomorrow" costs the finger.',
    domains: ['plastic_surgery', 'orthopaedics', 'emergency_medicine', 'infectious_disease'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case flexor tenosynovitis', 'pyogenic flexor tenosynovitis case', 'kanavel signs',
      'hand infection case', 'horseshoe abscess', 'parona space', 'felon',
      'fight bite', 'human bite hand', 'paronychia',
    ],
    terms: [
      'case', 'pyogenic flexor tenosynovitis', 'kanavel signs', 'flexor tendon sheath',
      'fusiform swelling', 'pain on passive extension', 'horseshoe abscess',
      'parona space', 'felon', 'paronychia', 'fight bite', 'eikenella corrodens',
      'washout hand', 'tendon adhesions', 'hand elevation',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '38-year-old gardener with a swollen, exquisitely painful right index finger, two days after pricking it on a rose thorn. He holds the finger slightly bent and will not let anyone straighten it.',

      section_1_the_four_kanavel_signs: {
        the_list: {
          one_fusiform_swelling: 'THE WHOLE FINGER IS UNIFORMLY SWOLLEN — "SAUSAGE-SHAPED" — RATHER THAN SWOLLEN AT ONE POINT. This distinguishes it from a localised abscess or paronychia.',
          two_finger_held_in_slight_flexion: 'THE POSITION OF MAXIMUM SHEATH VOLUME AND THEREFORE LEAST PAIN. The patient adopts it without being told, and it is visible from the end of the bed.',
          three_tenderness_along_the_course_of_the_tendon_sheath: 'PALPATE ALONG THE VOLAR ASPECT OF THE FINGER AND INTO THE PALM. TENDERNESS EXTENDING PROXIMAL TO THE FINGER, INTO THE PALM, INDICATES THAT INFECTION HAS TRACKED ALONG THE SHEATH — a significant finding.',
          four_pain_on_passive_extension: {
            what_it_is: 'GENTLY ATTEMPT TO STRAIGHTEN THE FINGER. IT CAUSES SEVERE PAIN.',
            why_it_matters:
              'THIS IS THE EARLIEST AND MOST SENSITIVE OF THE FOUR SIGNS. Extension stretches the inflamed synovial sheath and raises pressure within it. IT APPEARS BEFORE FUSIFORM SWELLING IS OBVIOUS, WHICH MEANS IT IS THE SIGN THAT MAKES THE EARLY DIAGNOSIS — WHEN THE FINGER STILL LOOKS ONLY MODERATELY SWOLLEN AND THE DIAGNOSIS CAN STILL BE MADE IN TIME.',
            the_practical: 'DO IT GENTLY AND ONCE. It is diagnostic, not something to repeat.',
          },
        },
        the_honest_caveat: 'ALL FOUR SIGNS ARE PRESENT IN ONLY A PROPORTION OF CASES, AND EARLY INFECTION MAY SHOW ONLY PAIN ON PASSIVE EXTENSION AND TENDERNESS. THE ABSENCE OF FUSIFORM SWELLING DOES NOT EXCLUDE IT, and waiting for the complete set means waiting for the tendon to be destroyed.',
      },

      section_2_why_this_is_an_emergency: {
        the_anatomy: 'THE FLEXOR TENDONS RUN WITHIN A CLOSED SYNOVIAL SHEATH — A SEALED TUBE WITH A LIMITED VOLUME AND A POOR BLOOD SUPPLY.',
        the_consequences_of_that_anatomy: [
          '1. IT IS A CLOSED SPACE, SO PUS RAPIDLY GENERATES HIGH PRESSURE, AND ANTIBIOTICS PENETRATE POORLY. Same principle as an undrained abscess anywhere.',
          '2. THE TENDON HAS A TENUOUS SEGMENTAL BLOOD SUPPLY THROUGH THE VINCULA. RAISED SHEATH PRESSURE OCCLUDES IT, CAUSING TENDON NECROSIS AND RUPTURE.',
          '3. THE SYNOVIUM AND THE SMOOTH GLIDING SURFACE ARE DESTROYED BY THE INFLAMMATORY EXUDATE. EVEN IF THE INFECTION IS CURED, ADHESIONS FORM AND THE TENDON NO LONGER GLIDES — THE FINGER BECOMES STIFF AND FUNCTIONLESS.',
        ],
        the_key_teaching_point:
          'THE OUTCOME THAT MATTERS IS NOT WHETHER THE INFECTION CLEARS — IT IS WHETHER THE FINGER STILL MOVES. GLIDING FUNCTION IS LOST WITHIN HOURS TO A COUPLE OF DAYS, AND IT DOES NOT COME BACK. THAT IS WHY THIS IS A SAME-DAY SURGICAL PROBLEM AND NOT AN ANTIBIOTIC PRESCRIPTION.',
        the_spread_pathways: {
          horseshoe_abscess: 'THE SHEATHS OF THE THUMB (RADIAL BURSA) AND LITTLE FINGER (ULNAR BURSA) COMMUNICATE IN THE WRIST IN MANY PEOPLE. INFECTION IN ONE CAN THEREFORE TRACK ACROSS TO THE OTHER, PRODUCING A "HORSESHOE ABSCESS". ALWAYS EXAMINE THE THUMB IF THE LITTLE FINGER IS INFECTED, AND VICE VERSA.',
          parona_space: 'INFECTION CAN SPREAD PROXIMALLY INTO THE POTENTIAL SPACE OF PARONA IN THE DISTAL FOREARM, BETWEEN PRONATOR QUADRATUS AND THE FLEXOR TENDONS. Examine and palpate the distal forearm — a tender, swollen distal forearm in a hand infection means the infection has escaped the hand.',
        },
      },

      section_3_clerking_and_examination: {
        history: 'Rose thorn injury to the volar pad of the right index finger two days ago. Minor at the time. Pain increased overnight and the finger has become swollen and stiff. He cannot grip. NO fever. He is right-handed and works as a gardener.',
        the_history_that_matters_in_every_hand_injury: 'HAND DOMINANCE · OCCUPATION AND HOBBIES, because the functional consequence differs enormously between a labourer, a musician and an office worker · MECHANISM AND TIMING · CONTAMINATION — soil, water, animal or human · TETANUS STATUS · DIABETES AND IMMUNOSUPPRESSION · smoking, which impairs healing · and previous hand problems.',
        the_bite_question: {
          why_to_ask: 'ASK EXPLICITLY WHETHER A WOUND OVER THE KNUCKLE WAS CAUSED BY PUNCHING SOMEONE IN THE MOUTH. A "FIGHT BITE" — a clenched-fist injury over the metacarpophalangeal joint — IS ROUTINELY CONCEALED OUT OF EMBARRASSMENT AND IS DESCRIBED AS CATCHING THE HAND ON A WALL OR A DOOR.',
          why_it_matters:
            'THE WOUND LOOKS TRIVIAL — A 5 mm LACERATION. BUT WITH THE FIST CLENCHED THE TOOTH PENETRATES THE EXTENSOR TENDON AND THE JOINT CAPSULE, AND WHEN THE HAND IS OPENED THE TENDON SLIDES PROXIMALLY, SEALING ORAL BACTERIA INSIDE THE JOINT. EIKENELLA CORRODENS AND ORAL ANAEROBES CAUSE A DESTRUCTIVE SEPTIC ARTHRITIS. IT REQUIRES EXPLORATION, WASHOUT AND ANTIBIOTICS — CO-AMOXICLAV COVERS EIKENELLA; FLUCLOXACILLIN ALONE DOES NOT. A FIGHT BITE MANAGED AS A SIMPLE LACERATION DESTROYS THE JOINT.',
        },
        the_organisms: 'STAPHYLOCOCCUS AUREUS AND STREPTOCOCCI most commonly. Consider MRSA where prevalent. GARDENING AND SOIL contamination raise the possibility of unusual organisms, and a chronic, indolent tenosynovitis after a thorn or aquarium exposure should prompt consideration of ATYPICAL MYCOBACTERIA (Mycobacterium marinum) AND SPOROTHRIX — these need specific culture conditions and prolonged treatment, and are missed because nobody tells the laboratory. IN A SEXUALLY ACTIVE ADULT WITH TENOSYNOVITIS AND A PUSTULAR RASH, CONSIDER DISSEMINATED GONOCOCCAL INFECTION.',
        vitals: 'BP 132/78 mmHg. Pulse 92. Temperature 37.6 — LOW-GRADE, AND SYSTEMIC FEATURES ARE OFTEN ABSENT IN A LOCALISED HAND INFECTION. THE ABSENCE OF FEVER IS NOT REASSURANCE.',
        examination: {
          the_finger: 'ALL FOUR KANAVEL SIGNS PRESENT. Tenderness extends into the distal palm.',
          the_whole_hand_and_arm: 'EXAMINE THE THUMB AND LITTLE FINGER for a horseshoe abscess. PALPATE THE DISTAL FOREARM for Parona space involvement. Check for LYMPHANGITIS — red streaking up the forearm — and EPITROCHLEAR AND AXILLARY LYMPHADENOPATHY.',
          neurovascular: 'DOCUMENT SENSATION IN EACH DIGITAL NERVE TERRITORY AND CAPILLARY REFILL BEFORE ANY INTERVENTION.',
          function: 'Test flexor digitorum profundus (distal interphalangeal flexion with the middle joint held straight) and flexor digitorum superficialis (proximal interphalangeal flexion with the other fingers held extended) — separately, and document it.',
        },
      },

      section_4_investigations: {
        the_principle: 'THE DIAGNOSIS IS CLINICAL. INVESTIGATIONS SUPPORT MANAGEMENT AND MUST NOT DELAY THEATRE.',
        radiograph: 'LOOK FOR A RETAINED FOREIGN BODY — A THORN OR WOOD FRAGMENT IS RADIOLUCENT AND MAY NOT SHOW, SO A NORMAL FILM DOES NOT EXCLUDE ONE. ULTRASOUND IS BETTER FOR RADIOLUCENT FOREIGN BODIES. Also look for gas in the tissues, bony injury and osteomyelitis in chronic cases.',
        ultrasound: 'Can demonstrate fluid within the tendon sheath and identify a collection or a radiolucent foreign body. Useful where the diagnosis is uncertain, but it must not delay surgery in a clear case.',
        bloods: 'Full blood count, CRP, glucose and HbA1c — UNDIAGNOSED DIABETES PRESENTS AS A HAND INFECTION MORE OFTEN THAN PEOPLE EXPECT, AND IT SHOULD BE SCREENED FOR IN EVERY SIGNIFICANT HAND INFECTION. Blood cultures if febrile. Urate if gout is a differential.',
        microbiology: 'SEND DEEP TISSUE AND FLUID FROM THEATRE, NOT A SUPERFICIAL SWAB. AND TELL THE LABORATORY IF ATYPICAL ORGANISMS ARE POSSIBLE — mycobacterial and fungal cultures require specific media and prolonged incubation and will not be done unless requested.',
        the_differential: 'ACUTE GOUT OR PSEUDOGOUT can mimic infection closely and is a genuine trap — but IF IN DOUBT, TREAT AS INFECTION AND EXPLORE. Also consider septic arthritis of the interphalangeal joint, a felon (pulp space abscess), paronychia, herpetic whitlow (VESICLES, and INCISION IS CONTRAINDICATED because it worsens it and risks dissemination), cellulitis, and an inflammatory arthropathy.',
      },

      section_5_management: {
        a_immediate: 'ELEVATE THE HAND ABOVE THE LEVEL OF THE HEART — in a sling or on pillows, and genuinely above the heart, not resting on the abdomen. IT IS A GENUINE TREATMENT that reduces oedema and pain and is almost always done inadequately. INTRAVENOUS ANTIBIOTICS after cultures where possible. ANALGESIA. NIL BY MOUTH. Remove all rings from the hand immediately. TETANUS PROPHYLAXIS. SPLINT IN THE POSITION OF SAFETY. REFER TO HAND OR PLASTIC SURGERY THE SAME DAY.',
        the_position_of_safety: {
          the_position: 'WRIST EXTENDED ABOUT 20 TO 30 DEGREES · METACARPOPHALANGEAL JOINTS FLEXED TO ABOUT 70 TO 90 DEGREES · INTERPHALANGEAL JOINTS STRAIGHT · THUMB ABDUCTED.',
          why_it_is_shaped_that_way:
            'IT KEEPS THE COLLATERAL LIGAMENTS OF THE METACARPOPHALANGEAL JOINTS AT MAXIMUM LENGTH — they are taut in flexion — AND THE VOLAR PLATES OF THE INTERPHALANGEAL JOINTS AT MAXIMUM LENGTH IN EXTENSION. IMMOBILISING A HAND IN THE "COMFORTABLE" POSITION WITH THE FINGERS STRAIGHT AT THE KNUCKLES AND CURLED AT THE TIPS ALLOWS THOSE STRUCTURES TO SHORTEN, PRODUCING CONTRACTURES THAT CANNOT BE STRETCHED OUT. THE POSITION OF SAFETY LOOKS AWKWARD AND IS CORRECT.',
        },
        b_the_antibiotics_alone_question: {
          the_narrow_exception: 'VERY EARLY INFECTION, PRESENTING WITHIN ROUGHLY 24 HOURS, WITHOUT PUS AND WITH ONLY MINIMAL SIGNS, MAY BE TREATED WITH INTRAVENOUS ANTIBIOTICS, ELEVATION AND SPLINTING, WITH REVIEW BY A HAND SURGEON WITHIN A FEW HOURS.',
          the_conditions: 'IT REQUIRES ADMISSION, INTRAVENOUS ANTIBIOTICS, HOURLY-TO-FOUR-HOURLY REASSESSMENT BY SOMEONE COMPETENT, AND AN IMMEDIATE THRESHOLD TO OPERATE IF THERE IS NO CLEAR IMPROVEMENT WITHIN 12 TO 24 HOURS.',
          what_it_is_not: 'IT IS NOT ORAL ANTIBIOTICS AND A CLINIC APPOINTMENT. "GIVE FLUCLOXACILLIN AND COME BACK TOMORROW" IS THE SENTENCE THAT COSTS THE FINGER. Established infection with pus needs surgery.',
        },
        c_surgery: {
          the_operation: 'SURGICAL DRAINAGE AND IRRIGATION OF THE TENDON SHEATH, usually through limited incisions at the proximal (A1 pulley) and distal ends of the sheath, with a catheter passed through and the sheath irrigated with saline. Open drainage through a mid-lateral or Brunner incision is used for extensive infection or necrosis.',
          the_principle_of_hand_incisions: 'INCISIONS MUST RESPECT HAND ANATOMY — NEVER CROSS A FLEXION CREASE AT RIGHT ANGLES, because the resulting scar contracts and produces a fixed flexion deformity. Use Brunner zigzag or mid-lateral incisions. THIS IS WHY HAND INFECTIONS SHOULD BE DRAINED BY SOMEONE WHO OPERATES ON HANDS, AND NOT INCISED CASUALLY IN AN EMERGENCY DEPARTMENT.',
          repeat_washout: 'Frequently required at 24 to 48 hours. It is planned, not a failure.',
          debridement: 'Necrotic tendon and sheath are excised. Extensive necrosis may require staged reconstruction or, rarely, amputation.',
        },
        d_the_postoperative_care_that_determines_the_functional_result: {
          the_principle: 'THE OPERATION TREATS THE INFECTION. THE HAND THERAPY DETERMINES WHETHER THE FINGER WORKS.',
          early_mobilisation: 'EARLY, SUPERVISED MOBILISATION UNDER A HAND THERAPIST ONCE INFECTION IS CONTROLLED IS ESSENTIAL TO PREVENT ADHESIONS BETWEEN THE TENDON AND ITS SHEATH. A FINGER IMMOBILISED UNTIL IT IS COMFORTABLE IS A FINGER THAT WILL NOT BEND. THE BALANCE BETWEEN REST FOR THE INFECTION AND MOVEMENT FOR THE TENDON IS THE CENTRAL DIFFICULTY, AND IT IS A HAND THERAPIST DECISION.',
          elevation: 'Continued, strictly, for days.',
          antibiotics: 'Continued intravenously then orally, guided by culture, typically for one to two weeks or longer if bone or joint is involved.',
          the_expectation_setting: 'BE HONEST: EVEN WITH PROMPT AND CORRECT TREATMENT, SOME STIFFNESS IS COMMON, AND WITH DELAYED PRESENTATION PERMANENT LOSS OF MOVEMENT IS LIKELY. A gardener needs to know what this means for his work.',
        },
      },

      section_6_teaching_points: {
        bonus_1_pain_on_passive_extension_is_the_earliest_sign:
          'It appears before fusiform swelling is obvious, which makes it the sign that allows the diagnosis to be made in time. Gently attempt to straighten the finger, once. All four Kanavel signs are present in only a proportion of cases, and waiting for the full set means waiting for tendon destruction.',
        bonus_2_the_outcome_is_movement_not_cure:
          'The tendon sheath is a closed space with poor blood supply. Raised pressure occludes the vincular supply causing tendon necrosis, and the inflammatory exudate destroys the gliding surface. Even a cured infection leaves a stiff finger if adhesions form — and gliding function is lost within hours to days and does not return.',
        bonus_3_ask_about_the_fight_bite:
          'A wound over the knuckle from punching someone in the mouth is routinely concealed. With the fist clenched the tooth enters the joint, and opening the hand seals oral bacteria inside. Co-amoxiclav covers Eikenella; flucloxacillin alone does not. Managed as a simple laceration, it destroys the joint.',
        bonus_4_the_position_of_safety_looks_wrong_and_is_right:
          'Wrist extended, knuckles flexed 70 to 90 degrees, fingers straight, thumb abducted. It keeps the MCP collateral ligaments and IP volar plates at maximum length. The "comfortable" position lets them shorten into contractures that cannot be stretched out.',
        bonus_5_examine_the_thumb_and_the_forearm:
          'The radial and ulnar bursae communicate in many people, so little finger infection can track to the thumb — a horseshoe abscess. And infection can escape proximally into the space of Parona in the distal forearm. Both are found only by examining beyond the affected finger.',
        bonus_6_elevate_properly:
          'Genuinely above the level of the heart, in a sling or on pillows — not resting on the abdomen. It is a real treatment that reduces oedema and pain, and it is almost always done inadequately.',
        bonus_7_never_cross_a_flexion_crease_at_right_angles:
          'The scar contracts and produces a fixed flexion deformity. Use Brunner zigzag or mid-lateral incisions — which is why hand infections should be drained by someone who operates on hands.',
        trap_1: 'Absence of fever is not reassurance — systemic features are often absent in a localised hand infection.',
        trap_2: 'A normal radiograph does not exclude a retained thorn or wood fragment, which are radiolucent. Ultrasound is better.',
        trap_3: 'Screen for DIABETES — undiagnosed diabetes presents as a hand infection more often than expected.',
        trap_4: 'Tell the laboratory if atypical organisms are possible — mycobacterial and fungal cultures need specific media and will not be done unless requested.',
        trap_5: 'HERPETIC WHITLOW must not be incised — it worsens it and risks dissemination. Look for vesicles.',
        trap_6: 'Oral antibiotics and a clinic appointment is the sentence that costs the finger.',
        trap_7: 'Early supervised hand therapy determines the functional result — a finger immobilised until comfortable will not bend.',
        one_line_summary: 'Pyogenic flexor tenosynovitis. Pain on passive extension is the earliest Kanavel sign, elevate properly and splint in the position of safety, and refer for same-day washout — because what is at stake is not the infection but whether the finger ever bends again.',
      },
    },
    warnings: [
      'PAIN ON PASSIVE EXTENSION IS THE EARLIEST AND MOST SENSITIVE KANAVEL SIGN — it appears before fusiform swelling.',
      'All four Kanavel signs are present in only a proportion — waiting for the full set means waiting for tendon destruction.',
      'THE OUTCOME THAT MATTERS IS MOVEMENT, NOT CURE — gliding function is lost within hours to days and does not return.',
      'ORAL ANTIBIOTICS AND A CLINIC APPOINTMENT IS THE SENTENCE THAT COSTS THE FINGER — this needs same-day surgical referral.',
      'ASK ABOUT A FIGHT BITE — a knuckle wound from punching a mouth is routinely concealed and destroys the joint if managed as a laceration.',
      'CO-AMOXICLAV covers Eikenella corrodens; FLUCLOXACILLIN ALONE DOES NOT.',
      'ELEVATE THE HAND GENUINELY ABOVE THE HEART — it is a real treatment and is almost always done inadequately.',
      'SPLINT IN THE POSITION OF SAFETY — wrist extended, knuckles flexed 70 to 90 degrees, fingers straight, thumb abducted.',
      'NEVER CROSS A FLEXION CREASE AT RIGHT ANGLES — the scar contracts into a fixed flexion deformity.',
      'EXAMINE THE THUMB AND LITTLE FINGER for a horseshoe abscess, and the distal forearm for Parona space spread.',
      'ABSENCE OF FEVER IS NOT REASSURANCE in a localised hand infection.',
      'A NORMAL RADIOGRAPH DOES NOT EXCLUDE a radiolucent thorn or wood fragment — ultrasound is better.',
      'SCREEN FOR DIABETES in every significant hand infection.',
      'TELL THE LABORATORY if atypical mycobacteria or fungi are possible — those cultures need specific media and will not be done otherwise.',
      'HERPETIC WHITLOW MUST NOT BE INCISED — look for vesicles.',
      'REMOVE ALL RINGS immediately and give tetanus prophylaxis.',
      'EARLY SUPERVISED HAND THERAPY determines the functional result.',
      'Antibiotic choices here are teaching examples. Follow local hand surgery and microbiology guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. The narrow role of antibiotics alone in very early presentation requires admission and repeated senior hand surgical review.',
      'Timing of mobilisation balances infection control against adhesion prevention and is a hand therapist and surgeon decision.',
    ],
    cards: [
      { q: 'Name the four Kanavel signs.', a: 'Fusiform swelling, finger held in slight flexion, tenderness along the sheath, and pain on passive extension.' },
      { q: 'Which Kanavel sign appears first?', a: 'Pain on passive extension — before fusiform swelling is obvious.' },
      { q: 'Why is the tendon sheath so dangerous?', a: 'A closed space with poor blood supply — pressure occludes the vincular supply and exudate destroys the gliding surface.' },
      { q: 'What outcome actually matters?', a: 'Whether the finger still moves — gliding function is lost within hours to days and does not return.' },
      { q: 'What is a horseshoe abscess?', a: 'Infection tracking between the radial and ulnar bursae, which communicate in the wrist in many people.' },
      { q: 'What is the space of Parona?', a: 'A potential space in the distal forearm between pronator quadratus and the flexor tendons.' },
      { q: 'Why does a fight bite destroy the joint?', a: 'With the fist clenched the tooth enters the joint; opening the hand seals oral bacteria inside.' },
      { q: 'Which antibiotic covers Eikenella corrodens?', a: 'Co-amoxiclav — flucloxacillin alone does not.' },
      { q: 'Describe the position of safety and why.', a: 'Wrist extended, MCPs flexed 70 to 90, IPs straight, thumb abducted — keeps collateral ligaments and volar plates at maximum length.' },
      { q: 'Why must incisions not cross flexion creases at right angles?', a: 'The scar contracts and produces a fixed flexion deformity — use Brunner or mid-lateral incisions.' },
      { q: 'Which hand infection must NOT be incised?', a: 'Herpetic whitlow — incision worsens it and risks dissemination. Look for vesicles.' },
      { q: 'What organisms should prompt a specific laboratory request?', a: 'Atypical mycobacteria and Sporothrix after thorn or aquarium exposure — they need specific media and prolonged incubation.' },
    ],
    checks: [
      'All four Kanavel signs specifically sought, including gentle passive extension',
      'Fight bite asked about explicitly',
      'Thumb and little finger examined for horseshoe abscess',
      'Distal forearm palpated for Parona space involvement',
      'Neurovascular status and individual tendon function documented',
      'All rings removed',
      'Hand elevated genuinely above the heart',
      'Splinted in the position of safety',
      'Intravenous antibiotics with appropriate cover for the mechanism',
      'Tetanus prophylaxis given',
      'Diabetes screened for',
      'Imaging for retained foreign body considered, knowing thorns are radiolucent',
      'Same-day hand or plastic surgery referral',
      'Deep tissue sent from theatre, with atypical organisms flagged to the laboratory',
      'Herpetic whitlow excluded before any incision',
      'Early supervised hand therapy arranged',
      'Realistic functional expectations discussed',
    ],
    related: ['hand_infections_and_the_anatomy_that_governs_them'],
  },

  {
    id: 'AS-CASE-0060',
    type: 'case',
    specialty: 'Surgery — Plastics and burns',
    teaching_case: true,
    title: 'CASE: A Pinprick Wound from a Paint Gun That "Barely Hurts"',
    short: 'Case: high-pressure injection injury',
    summary:
      'A 44-year-old with a tiny entry wound on the index finger from a paint sprayer. Teaches why the most benign-looking hand injury in the emergency department is a surgical emergency, why the amputation rate is so high, and why the injected material determines the prognosis.',
    domains: ['plastic_surgery', 'orthopaedics', 'emergency_medicine', 'occupational_health'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case injection injury', 'high pressure injection injury case', 'paint gun injury',
      'grease gun injury', 'hydraulic injection injury', 'occult hand injury',
      'amputation rate injection', 'organic solvent injection',
    ],
    terms: [
      'case', 'high-pressure injection injury', 'paint gun', 'grease gun', 'hydraulic fluid',
      'organic solvent', 'chemical inflammation', 'compartment syndrome hand',
      'debridement', 'amputation', 'tendon sheath spread', 'digital nerve',
      'radiopaque injectate', 'occupational injury',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '44-year-old spray painter who was cleaning the nozzle of an airless paint gun when it discharged into the tip of his left index finger. There is a 2 mm entry wound. He says it stings a little and he only came because his supervisor insisted.',

      section_1_why_this_is_the_most_dangerous_looking_nothing_in_the_department: {
        the_statement:
          'HIGH-PRESSURE INJECTION INJURY IS A TRUE SURGICAL EMERGENCY THAT LOOKS LIKE A TRIVIAL PUNCTURE WOUND. AMPUTATION RATES ARE REPORTED BETWEEN ROUGHLY 16% AND 48% DEPENDING ON THE MATERIAL INJECTED, AND THE SINGLE STRONGEST PREDICTOR OF AMPUTATION IS DELAY TO SURGICAL DEBRIDEMENT.',
        the_mismatch: 'THE PATIENT IS COMFORTABLE, THE WOUND IS 2 mm, THERE IS NO BLEEDING AND NO OBVIOUS DEFORMITY. EVERYTHING ABOUT THE PRESENTATION SAYS "DRESSING AND DISCHARGE". THAT MISMATCH IS THE ENTIRE DANGER — AND THE PATIENT OFTEN HAS TO BE PERSUADED TO STAY.',
        the_pressures_involved: 'AIRLESS PAINT SPRAYERS OPERATE AT SEVERAL THOUSAND POUNDS PER SQUARE INCH. GREASE GUNS AND HYDRAULIC SYSTEMS OPERATE SIMILARLY. PRESSURES ABOVE ROUGHLY 100 psi PENETRATE SKIN, AND THESE DEVICES EXCEED THAT BY AN ORDER OF MAGNITUDE. THE MATERIAL IS DRIVEN DEEP ALONG THE PATH OF LEAST RESISTANCE — THE TENDON SHEATHS AND NEUROVASCULAR BUNDLES — AND CAN TRACK FROM A FINGERTIP INTO THE PALM AND FOREARM WITHIN SECONDS.',
        the_time_window: 'SURGICAL DEBRIDEMENT IS RECOMMENDED WITHIN 6 HOURS, AND OUTCOMES DETERIORATE MARKEDLY BEYOND 10 TO 12 HOURS. THE PATIENT WHO IS SENT HOME AND RETURNS THE NEXT MORNING WITH A SWOLLEN BLACK FINGER HAS USUALLY LOST IT.',
      },

      section_2_the_material_determines_the_prognosis: {
        the_principle: 'IT IS NOT THE PRESSURE ALONE THAT DESTROYS THE HAND — IT IS THE CHEMICAL PROPERTIES OF WHAT WAS INJECTED.',
        organic_solvents_and_paint_thinner: 'THE WORST. PAINT, PAINT THINNER, DIESEL AND OTHER ORGANIC SOLVENTS CAUSE INTENSE CHEMICAL INFLAMMATION AND WIDESPREAD TISSUE NECROSIS. AMPUTATION RATES ARE THE HIGHEST IN THIS GROUP — commonly quoted around 40 to 50%.',
        grease_and_oil: 'CAUSE LESS ACUTE CHEMICAL NECROSIS BUT PROVOKE A CHRONIC GRANULOMATOUS FOREIGN BODY REACTION WITH FIBROSIS, OLEOGRANULOMAS, STIFFNESS AND CHRONIC SINUSES. Amputation rates are lower but functional outcomes are frequently poor.',
        water_and_air: 'GENERALLY THE LEAST DAMAGING CHEMICALLY, BUT STILL CAUSE MECHANICAL DISRUPTION, BARELY CONTROLLED SPREAD AND INFECTION RISK, AND STILL REQUIRE ASSESSMENT.',
        the_practical_action: 'ESTABLISH EXACTLY WHAT WAS INJECTED AND, WHERE POSSIBLE, OBTAIN THE SAFETY DATA SHEET FROM THE WORKPLACE. IT INFORMS THE PROGNOSIS, THE URGENCY AND THE SURGICAL PLAN, AND NOBODY THINKS TO ASK FOR IT.',
      },

      section_3_clerking_and_examination: {
        history: 'Injury 40 minutes ago. Airless spray gun, oil-based paint. He was cleaning the nozzle with the trigger guard removed. Left index finger, non-dominant hand. Minimal pain initially, now a deep aching that is increasing. He is a spray painter by trade.',
        the_essential_questions: 'WHAT WAS INJECTED — the exact substance · THE PRESSURE OF THE DEVICE · THE TIME OF INJURY, precisely · THE SITE AND DIRECTION · hand dominance and occupation · tetanus status · and whether the workplace has a safety data sheet.',
        vitals: 'Normal throughout. AFEBRILE AND SYSTEMICALLY WELL — as expected, and not reassuring.',
        examination: {
          the_wound: 'A 2 mm PUNCTATE ENTRY WOUND ON THE VOLAR PULP OF THE LEFT INDEX FINGER. Minimal surrounding erythema. NO BLEEDING. THE FINGER LOOKS ALMOST NORMAL.',
          the_early_signs_to_look_for: 'INCREASING DEEP ACHING PAIN, WHICH IS THE EARLIEST SIGN AND IS OFTEN THE ONLY ONE · FIRMNESS OR FULLNESS OF THE PULP OR FINGER · PALLOR OR MOTTLING · REDUCED SENSATION IN A DIGITAL NERVE DISTRIBUTION, from direct injury or from pressure · REDUCED ACTIVE MOVEMENT · and TENDERNESS EXTENDING PROXIMALLY along the tendon sheath or into the palm, which indicates how far the material has tracked.',
          the_documentation: 'DOCUMENT SENSATION IN EACH DIGITAL NERVE TERRITORY, CAPILLARY REFILL, AND ACTIVE AND PASSIVE MOVEMENT, WITH THE TIME — before and after any intervention.',
          what_not_to_do: 'DO NOT INCISE, PROBE OR ATTEMPT TO EXPRESS THE MATERIAL IN THE EMERGENCY DEPARTMENT. DO NOT INJECT LOCAL ANAESTHETIC INTO THE DIGIT — ADDING VOLUME TO A CLOSED, ALREADY PRESSURISED COMPARTMENT WORSENS THE ISCHAEMIA. Use a PROXIMAL BLOCK OR SYSTEMIC ANALGESIA INSTEAD, and this is a genuine and commonly made error.',
        },
        compartment_syndrome: 'THE INJECTED VOLUME, PLUS THE INFLAMMATORY OEDEMA IT PROVOKES, RAISES PRESSURE WITHIN THE CLOSED COMPARTMENTS OF THE DIGIT, HAND AND FOREARM. EXPECT IT, LOOK FOR IT, AND NOTE THAT A DIGIT HAS NO REAL COMPARTMENT PRESSURE MONITORING OPTION — IT IS A CLINICAL DIAGNOSIS AND THE DECOMPRESSION IS PART OF THE OPERATION.',
      },

      section_4_investigations: {
        radiographs: {
          why: 'MANY INJECTED MATERIALS ARE RADIOPAQUE — INCLUDING LEAD-BASED PAINTS AND SOME GREASES — AND THE RADIOGRAPH THEN SHOWS THE EXTENT OF SPREAD, WHICH IS ROUTINELY MUCH GREATER THAN THE EXAMINATION SUGGESTS. IT ALSO SHOWS SUBCUTANEOUS AIR TRACKING ALONG THE TISSUE PLANES, WHICH MAPS THE PATH EVEN WHEN THE MATERIAL ITSELF IS NOT VISIBLE.',
          the_views: 'AP AND LATERAL OF THE DIGIT AND HAND, AND INCLUDE THE FOREARM IF THERE IS ANY PROXIMAL SPREAD.',
          the_limitation: 'A NORMAL RADIOGRAPH DOES NOT EXCLUDE EXTENSIVE INJECTION — many materials are radiolucent. IT CANNOT BE USED TO REASSURE.',
        },
        bloods: 'Full blood count, CRP, urea and electrolytes, clotting, group and save, glucose. In specific circumstances, systemic toxicity is possible from certain injected substances — ESTABLISH WHAT THE MATERIAL IS AND SEEK TOXICOLOGY ADVICE IF IT IS SYSTEMICALLY TOXIC.',
        do_not_delay: 'IMAGING IS USEFUL FOR PLANNING BUT MUST NOT DELAY THEATRE. THE DIAGNOSIS IS MADE FROM THE MECHANISM.',
      },

      section_5_management: {
        a_the_immediate_actions: 'RECOGNISE IT AS AN EMERGENCY AND SAY SO OUT LOUD — the patient and often the triage system need to be told. NIL BY MOUTH. INTRAVENOUS ACCESS AND BLOODS. BROAD-SPECTRUM INTRAVENOUS ANTIBIOTICS. TETANUS PROPHYLAXIS. ANALGESIA — SYSTEMIC OR A PROXIMAL BLOCK, NEVER A DIGITAL INFILTRATION. ELEVATE THE HAND ABOVE THE HEART. REMOVE ALL RINGS. SPLINT IN THE POSITION OF SAFETY. TELEPHONE THE HAND OR PLASTIC SURGEONS IMMEDIATELY.',
        the_steroid_question: 'SYSTEMIC CORTICOSTEROIDS ARE SOMETIMES GIVEN TO REDUCE THE INFLAMMATORY RESPONSE. THE EVIDENCE IS WEAK AND INCONSISTENT, AND PRACTICE VARIES. IT IS A SPECIALIST DECISION AND MUST NEVER SUBSTITUTE FOR OR DELAY SURGERY.',
        b_surgery: {
          the_operation: 'URGENT, WIDE SURGICAL EXPLORATION AND DEBRIDEMENT UNDER GENERAL OR REGIONAL ANAESTHESIA, WITH TOURNIQUET CONTROL — AND NOTE THAT THE LIMB SHOULD BE ELEVATED RATHER THAN EXSANGUINATED WITH A BANDAGE, BECAUSE SQUEEZING DRIVES MATERIAL FURTHER PROXIMALLY.',
          the_extent: 'THE EXPLORATION MUST FOLLOW THE MATERIAL WHEREVER IT HAS GONE, WHICH IS ALWAYS FURTHER THAN THE ENTRY WOUND SUGGESTS. It commonly requires extensile incisions from fingertip into the palm and sometimes the forearm. ALL INJECTED MATERIAL AND ALL NECROTIC TISSUE MUST BE REMOVED, AND THE TENDON SHEATHS OPENED AND IRRIGATED.',
          decompression: 'DECOMPRESS THE INVOLVED COMPARTMENTS — DIGITAL, HAND AND FOREARM AS REQUIRED.',
          the_incisions: 'BRUNNER ZIGZAG OR MID-LATERAL — NEVER CROSSING A FLEXION CREASE AT RIGHT ANGLES, BECAUSE THE CONTRACTED SCAR PRODUCES A FIXED FLEXION DEFORMITY.',
          leave_open_and_relook: 'WOUNDS ARE LEFT OPEN AND A PLANNED SECOND-LOOK DEBRIDEMENT PERFORMED AT 24 TO 48 HOURS, BECAUSE NECROSIS PROGRESSES AND RESIDUAL MATERIAL IS COMMONLY FOUND. THIS IS EXPECTED, NOT A FAILURE.',
        },
        c_amputation: 'SOMETIMES NECESSARY, EITHER PRIMARILY FOR AN UNSALVAGEABLE DIGIT OR SECONDARILY AFTER FAILED DEBRIDEMENT. IT MUST BE DISCUSSED HONESTLY WITH THE PATIENT BEFORE THE FIRST OPERATION, BECAUSE THE DECISION MAY BE MADE INTRAOPERATIVELY AND CONSENT MUST COVER IT. A patient who wakes without a finger having been told only that he needed a washout has been badly failed.',
        d_afterwards: {
          reconstruction: 'Soft tissue coverage with grafts or flaps as required, once the tissue has declared itself.',
          hand_therapy: 'EARLY AND INTENSIVE, TO PRESERVE WHATEVER FUNCTION REMAINS. Stiffness, contracture and cold intolerance are common long-term problems.',
          the_honest_conversation: 'BE EXPLICIT ABOUT THE LIKELY OUTCOME FROM THE OUTSET. A SPRAY PAINTER MAY NOT BE ABLE TO RETURN TO HIS TRADE. Chronic pain, cold intolerance, stiffness and amputation are all realistic outcomes even with correct management.',
          occupational_and_reporting: 'THIS IS AN OCCUPATIONAL INJURY. REPORT IT THROUGH THE APPROPRIATE WORKPLACE AND REGULATORY CHANNELS, INVOLVE OCCUPATIONAL HEALTH, AND ADDRESS THE MECHANISM — HE WAS CLEANING THE NOZZLE WITH THE TRIGGER GUARD REMOVED. THE MOST EFFECTIVE TREATMENT FOR THE NEXT PATIENT IS PREVENTION AT THE WORKPLACE, AND THE REPORT IS THE ONLY ROUTE TO IT.',
        },
        e_the_education_point: 'MANY OF THESE PATIENTS ARE INITIALLY MANAGED BY SOMEONE WHO HAS NEVER SEEN ONE. IF YOU WORK IN AN AREA WITH INDUSTRY, AGRICULTURE OR CONSTRUCTION, THE DEPARTMENT SHOULD KNOW THAT A PINPRICK WOUND FROM A PRESSURISED DEVICE IS A THEATRE CASE. IT IS WORTH SAYING AT TEACHING, BECAUSE THE DIAGNOSIS IS ENTIRELY DEPENDENT ON SOMEONE HAVING HEARD OF IT.',
      },

      section_6_teaching_points: {
        bonus_1_the_most_benign_looking_hand_injury_in_the_department:
          'A 2 mm painless puncture with no bleeding, in a comfortable patient who did not want to come. Amputation rates are 16 to 48%, and the strongest predictor is delay to debridement. The mismatch between appearance and severity IS the danger.',
        bonus_2_the_material_determines_the_prognosis:
          'Organic solvents such as paint and thinner cause intense chemical necrosis with the highest amputation rates. Grease and oil cause chronic granulomatous reaction, fibrosis and stiffness. Water and air are least damaging chemically. Get the safety data sheet from the workplace — nobody thinks to ask.',
        bonus_3_never_infiltrate_local_anaesthetic_into_the_digit:
          'Adding volume to a closed, already pressurised compartment worsens the ischaemia. Use a proximal block or systemic analgesia. It is a genuine and commonly made error.',
        bonus_4_do_not_exsanguinate_with_a_bandage:
          'Squeezing the limb drives injected material further proximally. Elevate to empty the limb before inflating the tourniquet.',
        bonus_5_the_radiograph_maps_the_spread:
          'Many materials are radiopaque, and subcutaneous air tracking along tissue planes maps the path even when the material is not visible. The extent is routinely far greater than the examination suggests — but a normal film excludes nothing, because many materials are radiolucent.',
        bonus_6_debride_within_six_hours_and_plan_a_second_look:
          'Outcomes deteriorate markedly beyond 10 to 12 hours. Wounds are left open with a planned relook at 24 to 48 hours because necrosis progresses and residual material is commonly found — that is expected, not failure.',
        bonus_7_consent_for_amputation_before_the_first_operation:
          'The decision may be made intraoperatively. A patient who wakes without a finger having been told only that he needed a washout has been badly failed.',
        trap_1: 'The patient is comfortable, afebrile and wants to leave — that is entirely expected and is not reassurance.',
        trap_2: 'Do NOT incise, probe or attempt to express the material in the emergency department.',
        trap_3: 'Expect COMPARTMENT SYNDROME of digit, hand and forearm — in a digit it is a clinical diagnosis and decompression is part of the operation.',
        trap_4: 'Never cross a flexion crease at right angles — use Brunner or mid-lateral incisions.',
        trap_5: 'Systemic steroids have weak evidence and must never delay or substitute for surgery.',
        trap_6: 'REPORT IT AS AN OCCUPATIONAL INJURY and address the mechanism — prevention at the workplace is the treatment for the next patient.',
        trap_7: 'Be honest early that return to the same trade may not be possible.',
        one_line_summary: 'High-pressure paint injection injury. A painless 2 mm wound in a man who wants to go home, with an amputation risk approaching half — find out exactly what was injected, never infiltrate the digit, and get him to theatre within six hours.',
      },
    },
    warnings: [
      'A PINPRICK WOUND FROM A PRESSURISED DEVICE IS A SURGICAL EMERGENCY — amputation rates are 16 to 48%.',
      'DELAY TO DEBRIDEMENT IS THE STRONGEST PREDICTOR OF AMPUTATION — aim for surgery within 6 hours.',
      'THE PATIENT LOOKS WELL AND WANTS TO GO HOME — that is expected and is NOT reassurance.',
      'ESTABLISH EXACTLY WHAT WAS INJECTED and obtain the workplace safety data sheet.',
      'ORGANIC SOLVENTS such as paint and thinner carry the highest amputation rates.',
      'NEVER INFILTRATE LOCAL ANAESTHETIC INTO THE DIGIT — it adds volume to a pressurised compartment and worsens ischaemia.',
      'DO NOT INCISE, PROBE OR ATTEMPT TO EXPRESS the material in the emergency department.',
      'DO NOT EXSANGUINATE THE LIMB WITH A BANDAGE — squeezing drives material proximally. Elevate instead.',
      'A NORMAL RADIOGRAPH DOES NOT EXCLUDE EXTENSIVE INJECTION — many materials are radiolucent.',
      'EXPECT COMPARTMENT SYNDROME of digit, hand and forearm — decompression is part of the operation.',
      'THE EXPLORATION MUST FOLLOW THE MATERIAL, which always spreads further than the entry wound suggests.',
      'NEVER CROSS A FLEXION CREASE AT RIGHT ANGLES — use Brunner or mid-lateral incisions.',
      'LEAVE WOUNDS OPEN AND PLAN A SECOND LOOK at 24 to 48 hours — necrosis progresses and residual material is common.',
      'CONSENT FOR POSSIBLE AMPUTATION BEFORE THE FIRST OPERATION — the decision may be made intraoperatively.',
      'SYSTEMIC STEROIDS have weak evidence and must never delay or replace surgery.',
      'REPORT IT AS AN OCCUPATIONAL INJURY and address the mechanism — prevention is the treatment for the next patient.',
      'Management here is a teaching example. Follow local hand surgery guidance.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Steroid use and the extent of initial debridement are specialist decisions and practice varies.',
      'Amputation rates quoted vary between series and depend heavily on the injected material and time to surgery.',
    ],
    cards: [
      { q: 'Why is this injury so dangerous?', a: 'It looks like a trivial puncture but carries amputation rates of 16 to 48%, with delay to debridement the strongest predictor.' },
      { q: 'Which injected materials are worst?', a: 'Organic solvents — paint, thinner, diesel — causing intense chemical necrosis and the highest amputation rates.' },
      { q: 'What does grease injection cause?', a: 'Chronic granulomatous foreign body reaction with fibrosis, oleogranulomas, stiffness and chronic sinuses.' },
      { q: 'Why must local anaesthetic not be infiltrated into the digit?', a: 'It adds volume to a closed pressurised compartment and worsens ischaemia — use a proximal block or systemic analgesia.' },
      { q: 'Why not exsanguinate the limb with a bandage?', a: 'Squeezing drives injected material further proximally — elevate the limb instead.' },
      { q: 'What is the target time to surgery?', a: 'Within 6 hours; outcomes deteriorate markedly beyond 10 to 12 hours.' },
      { q: 'What does the radiograph show?', a: 'Radiopaque material and subcutaneous air tracking along tissue planes, mapping spread far beyond the entry wound.' },
      { q: 'Does a normal radiograph exclude extensive injection?', a: 'No — many materials are radiolucent.' },
      { q: 'What pressure penetrates skin?', a: 'Roughly 100 psi; industrial devices exceed this by an order of magnitude.' },
      { q: 'What is the earliest clinical sign?', a: 'Increasing deep aching pain, often the only sign in the first hours.' },
      { q: 'Why leave wounds open with a planned relook?', a: 'Necrosis progresses and residual material is commonly found at 24 to 48 hours.' },
      { q: 'What must consent cover before the first operation?', a: 'Possible amputation — the decision may be made intraoperatively.' },
    ],
    checks: [
      'Mechanism recognised as an emergency and communicated to the team',
      'Exact injected material established and safety data sheet requested',
      'Time of injury documented precisely',
      'Sensation, capillary refill and movement documented with the time',
      'Proximal extent of tenderness assessed',
      'All rings removed',
      'NO digital infiltration of local anaesthetic',
      'NO incision, probing or attempt to express material',
      'Hand elevated above the heart and splinted in the position of safety',
      'Broad-spectrum intravenous antibiotics and tetanus prophylaxis given',
      'Radiographs of digit, hand and forearm obtained without delaying theatre',
      'Hand or plastic surgery telephoned immediately',
      'Consent obtained covering possible amputation',
      'Tourniquet applied after elevation, not bandage exsanguination',
      'Second-look debridement planned at 24 to 48 hours',
      'Occupational injury reported and workplace mechanism addressed',
      'Honest discussion about function and return to trade',
    ],
    related: ['hand_infections_and_the_anatomy_that_governs_them'],
  },
];
