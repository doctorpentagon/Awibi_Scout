/**
 * CASE SCENARIOS — Medicine: Infectious disease.
 *
 * Batch 3, part 2. Written with African practice in mind: severe malaria and
 * advanced HIV are the two commonest ways a young adult dies on a medical ward
 * across much of the continent.
 */

export default [
  {
    id: 'AS-CASE-0023',
    type: 'case',
    specialty: 'Medicine — Infectious disease',
    teaching_case: true,
    title: 'CASE: Fever, Confusion and a Parasitaemia of 12% — Severe Malaria',
    short: 'Case: severe falciparum malaria',
    summary:
      'A 27-year-old with cerebral malaria and hypoglycaemia. Teaches the WHO severity criteria that convert "malaria" into "severe malaria", why artesunate replaced quinine, why the glucose must be checked hourly, and the delayed haemolysis that appears after the patient goes home.',
    domains: ['infectious_disease', 'emergency_medicine', 'critical_care', 'tropical_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'immediate',
    aka: [
      'case severe malaria', 'cerebral malaria case', 'falciparum case',
      'artesunate case', 'parasitaemia', 'blackwater fever', 'post artesunate haemolysis',
      'malaria rdt', 'thick and thin film', 'quinine hypoglycaemia',
    ],
    terms: [
      'case', 'malaria', 'plasmodium falciparum', 'severe malaria', 'cerebral malaria',
      'parasitaemia', 'artesunate', 'artemether lumefantrine', 'quinine', 'sequestration',
      'thick film', 'thin film', 'rapid diagnostic test', 'blackwater fever',
      'post-artesunate delayed haemolysis', 'hypoglycaemia', 'acidosis', 'primaquine',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '27-year-old man brought in confused and agitated after 4 days of fever, headache and vomiting. His blood film shows Plasmodium falciparum with a parasitaemia of 12%. His capillary glucose is 2.4 mmol/L.',

      section_1_clerking: {
        history_from_his_brother:
          'Four days of high fever with rigors, headache, and vomiting for the last two days so he has eaten and drunk almost nothing. Today he became confused, then agitated, and had a brief generalised seizure in the car on the way in. He has passed very little urine. He lives in an endemic area and did not use a bed net. He took two doses of a herbal preparation and some paracetamol at home.',
        the_first_thing_to_establish:
          'FEVER PLUS ANY ALTERED CONSCIOUSNESS IN A MALARIA-ENDEMIC AREA — OR IN ANYONE RETURNING FROM ONE — IS SEVERE MALARIA UNTIL PROVEN OTHERWISE. In a returning traveller, TAKE A TRAVEL HISTORY IN EVERY FEBRILE PATIENT: where, when, for how long, and what prophylaxis. FALCIPARUM MALARIA CAN KILL WITHIN 24 HOURS OF THE FIRST SYMPTOM, and most deaths in travellers follow a delay in diagnosis, not a failure of treatment.',
        the_prophylaxis_trap: 'NO CHEMOPROPHYLAXIS IS 100% EFFECTIVE. A patient who took doxycycline faithfully can still have falciparum malaria. "But I took my tablets" is not a reason to omit the film.',
        past_medical_history: 'Nil known. Not known to have sickle cell disease or HIV — BOTH SHOULD BE TESTED, as HIV increases severity and sickle cell trait modifies it.',
        vitals: 'BP 92/54 mmHg. Pulse 124. RESPIRATORY RATE 32 AND DEEP. Temperature 39.6. Saturation 95% on air. GCS 10 (E3 V3 M4). CAPILLARY GLUCOSE 2.4 mmol/L. Urine output minimal, dark.',
        the_vitals_that_change_everything: {
          the_glucose: 'HYPOGLYCAEMIA. It is common in severe malaria — from parasite glucose consumption, impaired hepatic gluconeogenesis, and quinine-induced insulin release if quinine has been given. IT CAUSES CONFUSION AND SEIZURES AND IS COMPLETELY REVERSIBLE. It must be corrected within the first minute and rechecked HOURLY, because it recurs.',
          the_breathing:
            'A RESPIRATORY RATE OF 32 THAT IS DEEP AND LABOURED IS NOT A CHEST INFECTION — IT IS KUSSMAUL BREATHING COMPENSATING FOR METABOLIC ACIDOSIS. ACIDOSIS IS THE STRONGEST SINGLE PREDICTOR OF DEATH IN SEVERE MALARIA. Deep laboured breathing in a child or adult with malaria is a terminal sign being announced in advance, and it is regularly recorded as "chest clear" and dismissed.',
          the_dark_urine: 'Could be concentrated urine, haemoglobinuria from massive haemolysis (BLACKWATER FEVER), or myoglobinuria. Dipstick and microscopy distinguish them: dipstick positive for blood with NO red cells on microscopy means free haemoglobin or myoglobin.',
        },
        examination:
          'Confused, restless, not localising. PALLOR. Mild jaundice. NO NECK STIFFNESS and no rash — but this does NOT exclude meningitis, and in a comatose febrile patient both must be considered. SPLENOMEGALY 3 cm. Chest clear on auscultation despite the tachypnoea — THAT MISMATCH IS THE POINT. No focal neurological deficit. FUNDOSCOPY: LOOK FOR MALARIAL RETINOPATHY — retinal whitening, vessel discolouration and haemorrhages — which is quite specific for cerebral malaria and helps when another cause of coma is possible.',
      },

      section_2_mechanism: {
        the_life_cycle_in_brief:
          'A female ANOPHELES mosquito injects sporozoites, which travel to the LIVER and multiply silently (the pre-erythrocytic stage, and the reason there is an incubation period). Merozoites are then released into the blood, invade RED CELLS, multiply, and rupture the cell to invade more — the SYNCHRONISED RUPTURE causes the classic fever spikes. Some become gametocytes, which are taken up by the next mosquito.',
        why_falciparum_is_the_lethal_one: {
          it_infects_red_cells_of_all_ages: 'Plasmodium vivax prefers young red cells and P. malariae old ones, limiting parasitaemia. FALCIPARUM INFECTS RED CELLS OF ANY AGE, so parasitaemia can reach very high levels — his is 12%, meaning more than one in eight of his red cells is infected.',
          sequestration_the_central_mechanism:
            'Falciparum-infected red cells express adhesive proteins (PfEMP1) on their surface and STICK TO THE ENDOTHELIUM of small vessels — CYTOADHERENCE — and to uninfected red cells, forming ROSETTES. Infected cells therefore SEQUESTER in the deep microvasculature of the brain, kidney, gut and placenta rather than circulating.',
          the_three_consequences: [
            '1. THE MICROCIRCULATION IS OBSTRUCTED, causing tissue hypoxia — hence CEREBRAL MALARIA, acute kidney injury and lactic acidosis.',
            '2. SEQUESTERED PARASITES ESCAPE SPLENIC CLEARANCE, which is why the parasite survives.',
            '3. CRITICALLY FOR INTERPRETATION: THE PERIPHERAL BLOOD FILM UNDERESTIMATES THE TRUE PARASITE BURDEN, because the most mature and most damaging parasites are stuck in the tissues, not in the sample you took. A LOW PARASITAEMIA THEREFORE DOES NOT MEAN MILD DISEASE.',
          ],
        },
        why_the_anaemia_is_worse_than_the_parasitaemia_suggests: 'Infected cells are destroyed, but UNINFECTED cells are also removed by the spleen, and the marrow response is suppressed by inflammation. So haemoglobin falls further and faster than the percentage of infected cells would predict.',
      },

      section_3_differentials: {
        the_who_severity_criteria_which_are_the_real_diagnostic_step: {
          why_they_matter: 'The question is not "does he have malaria" — the film answers that. The question is "IS THIS SEVERE MALARIA", because that determines INTRAVENOUS artesunate and intensive monitoring rather than oral treatment and discharge.',
          the_criteria: 'ANY ONE of the following, with asexual parasitaemia and no other cause: IMPAIRED CONSCIOUSNESS or coma (cerebral malaria) · PROSTRATION, meaning inability to sit, stand or feed unaided · more than two SEIZURES in 24 hours · ACIDOSIS · HYPOGLYCAEMIA below 2.2 mmol/L · SEVERE ANAEMIA (haemoglobin below 70 g/L in adults, 50 in children) · RENAL IMPAIRMENT · JAUNDICE with another sign · PULMONARY OEDEMA · SIGNIFICANT BLEEDING · SHOCK · and HYPERPARASITAEMIA, generally above 10% in low-transmission settings.',
          his_score: 'HE MEETS AT LEAST FIVE: impaired consciousness, seizures, acidosis, hypoglycaemia and hyperparasitaemia. This is unambiguous severe malaria.',
        },
        what_else_could_this_be_or_be_as_well: {
          bacterial_meningitis: 'MUST BE CONSIDERED IN EVERY COMATOSE FEBRILE PATIENT. Neck stiffness may be absent. A lumbar puncture is indicated once safe, and in a comatose patient with focal signs, image first.',
          bacterial_sepsis_and_typhoid: 'CO-INFECTION WITH INVASIVE BACTERIAL DISEASE IS COMMON IN SEVERE MALARIA, particularly non-typhoidal Salmonella in African children. THIS IS WHY BROAD-SPECTRUM ANTIBIOTICS ARE GIVEN ALONGSIDE ANTIMALARIALS IN SEVERE DISEASE — treating only the malaria misses the other half.',
          hiv_and_tuberculosis: 'Test for HIV in every case. Advanced HIV worsens malaria and broadens the differential for coma.',
          viral_encephalitis: 'Consider, and give aciclovir if herpes encephalitis is plausible.',
          hypoglycaemia_from_any_cause: 'Already found and corrected here — but always the first thing checked.',
          other_tropical_causes: 'Typhoid, dengue, leptospirosis, rickettsial infection, trypanosomiasis, and viral haemorrhagic fever where epidemiologically relevant. VIRAL HAEMORRHAGIC FEVER MUST BE CONSIDERED IN THE RIGHT SETTING BEFORE ANY UNPROTECTED PROCEDURE — ask about contact, travel and bleeding.',
        },
      },

      section_4_investigations: {
        blood_film_the_reference_test: {
          thick_film: 'MORE SENSITIVE — red cells are lysed and a larger volume is concentrated, so it DETECTS parasites at low density and gives the diagnosis.',
          thin_film: 'Preserves red cell morphology, so it SPECIATES the parasite and QUANTIFIES THE PARASITAEMIA as a percentage of infected red cells. Both are needed: thick to find, thin to characterise.',
          the_rule_that_prevents_missed_diagnosis:
            'A SINGLE NEGATIVE FILM DOES NOT EXCLUDE MALARIA. Parasitaemia fluctuates with the life cycle. REPEAT THE FILM AT LEAST THREE TIMES OVER 48 HOURS — conventionally 12 to 24 hours apart — before excluding it in a patient with a compatible illness.',
          quantification: 'Report the percentage of parasitised red cells. It guides severity and is repeated to monitor response.',
        },
        rapid_diagnostic_test: 'Detects parasite antigen, gives an answer in minutes, and is invaluable where microscopy is unavailable or out of hours. TWO LIMITATIONS TO KNOW: HRP2-based tests REMAIN POSITIVE FOR SEVERAL WEEKS AFTER SUCCESSFUL TREATMENT, so they cannot confirm cure or distinguish a new attack from a recent one; and SOME PARASITES HAVE DELETED THE HRP2 GENE, causing false negatives in certain regions. A negative rapid test in a convincing case still needs a film.',
        the_bloods_that_define_severity: 'FULL BLOOD COUNT — anaemia and thrombocytopenia, the latter almost universal and a useful pointer. GLUCOSE — bedside, hourly. BLOOD GAS OR LACTATE AND BICARBONATE — ACIDOSIS IS THE STRONGEST PREDICTOR OF DEATH and must be measured, not estimated. UREA, CREATININE AND ELECTROLYTES for acute kidney injury. LIVER FUNCTION and bilirubin. CLOTTING, since disseminated intravascular coagulation occurs. BLOOD CULTURES — mandatory, because bacterial co-infection is common. GROUP AND SAVE. HIV TEST. Urine dipstick and microscopy for haemoglobinuria. PREGNANCY TEST in any woman — malaria in pregnancy is a distinct and more dangerous entity.',
        lumbar_puncture: 'Indicated to exclude bacterial meningitis in a comatose febrile patient, once it is safe and after imaging if there are focal signs or very depressed consciousness. Do not let it delay antimalarial or antibiotic treatment.',
      },

      section_5_management: {
        a_the_first_five_minutes: 'ABCDE. Airway protection in a GCS of 10 — recovery position, suction, consider intubation. Oxygen. GLUCOSE FIRST: give 100 mL of 20% glucose (or 200 mL of 10%) intravenously and RECHECK IN 15 MINUTES, then HOURLY. Intravenous access, bloods and cultures. Cardiac monitoring.',
        b_intravenous_artesunate_which_is_the_treatment: {
          drug: 'INTRAVENOUS ARTESUNATE 2.4 mg/kg at 0, 12 and 24 hours, then once daily until the patient can take oral treatment. FOR A 60 kg MAN: 144 mg per dose.',
          preparation: 'Artesunate powder is reconstituted with the supplied sodium bicarbonate to form sodium artesunate, then diluted with sodium chloride 0.9% or glucose 5%, and given by SLOW INTRAVENOUS INJECTION over 1 to 2 minutes. USE IT WITHIN AN HOUR OF RECONSTITUTION. It may also be given intramuscularly if intravenous access fails. Read the specific product instructions — reconstitution is a genuine source of error.',
          why_artesunate_replaced_quinine:
            'LARGE RANDOMISED TRIALS (AQUAMAT in African children and SEAQUAMAT in Asian adults) SHOWED A SUBSTANTIAL REDUCTION IN MORTALITY WITH ARTESUNATE COMPARED WITH QUININE — roughly a third lower in adults. It also clears parasites faster and, unlike quinine, DOES NOT CAUSE HYPOGLYCAEMIA OR REQUIRE CARDIAC MONITORING AND RATE-CONTROLLED INFUSION. ARTESUNATE IS FIRST LINE EVERYWHERE FOR SEVERE MALARIA. Quinine is now a fallback when artesunate is unavailable.',
          quinine_if_it_must_be_used: 'A loading dose followed by maintenance by SLOW infusion. IT CAUSES HYPERINSULINAEMIC HYPOGLYCAEMIA — a specific and dangerous effect, so glucose must be monitored even more closely. It also prolongs the QT interval and causes CINCHONISM (tinnitus, deafness, nausea, visual disturbance). It must NEVER be given as a rapid bolus.',
          completing_treatment: 'ONCE THE PATIENT CAN SWALLOW AND HAS IMPROVED, GIVE A FULL COURSE OF ORAL ARTEMISININ-BASED COMBINATION THERAPY — for example artemether-lumefantrine. THIS IS NOT OPTIONAL. Artesunate monotherapy clears parasites rapidly but leaves a residual population; a full ACT course prevents recrudescence and protects against artemisinin resistance. Failing to complete oral treatment is a common and consequential omission.',
        },
        c_broad_spectrum_antibiotics: 'GIVE THEM. Bacterial co-infection is common in severe malaria and is a major contributor to death. Take cultures and give a broad-spectrum agent such as ceftriaxone according to local policy, and review at 48 hours.',
        d_fluids_and_the_most_important_reversal_in_modern_malaria_care: {
          the_old_teaching: 'Aggressive fluid resuscitation for the shocked, acidotic malaria patient.',
          what_changed:
            'THE FEAST TRIAL in African children showed that FLUID BOLUSES INCREASED MORTALITY in febrile children with impaired perfusion. Severe malaria patients are prone to PULMONARY OEDEMA and ACUTE RESPIRATORY DISTRESS SYNDROME, and the acidosis is largely from microvascular obstruction rather than simple hypovolaemia — so it does not respond to volume the way haemorrhagic shock does.',
          current_practice: 'CAUTIOUS, CONTROLLED FLUID REPLACEMENT. Correct genuine dehydration, but AVOID LARGE RAPID BOLUSES. Monitor closely for pulmonary oedema — rising respiratory rate and falling saturation with clear lungs early. In adults with clear hypovolaemic shock, judicious fluid is still given, but the era of reflexive large boluses has ended.',
        },
        e_the_specific_complications: {
          hypoglycaemia: 'Correct and recheck HOURLY. It recurs, and it is the single most reversible cause of persistent coma.',
          seizures: 'Treat with a benzodiazepine. Exclude hypoglycaemia FIRST every time. Prophylactic anticonvulsants are NOT recommended — phenobarbital increased mortality in a trial.',
          severe_anaemia: 'Transfuse for haemoglobin below 70 g/L in adults, or below 50 in children, or for symptomatic anaemia. Transfuse carefully given the pulmonary oedema risk.',
          acute_kidney_injury: 'Common. Careful fluid balance, avoid nephrotoxins, and consider dialysis — renal replacement improves survival in severe malaria with renal failure.',
          acidosis: 'Treat the cause — the parasite. Bicarbonate is not the answer.',
          hyperpyrexia: 'Paracetamol and physical cooling.',
        },
        f_what_not_to_do: 'NO ROUTINE CORTICOSTEROIDS — trials in cerebral malaria showed HARM, with prolonged coma and more complications. NO routine heparin. NO mannitol for cerebral oedema in cerebral malaria — trial evidence showed no benefit and possible harm. NO prophylactic anticonvulsants.',
        g_the_thing_that_happens_after_discharge: {
          post_artesunate_delayed_haemolysis:
            'A RECOGNISED PHENOMENON OCCURRING 1 TO 3 WEEKS AFTER TREATMENT, particularly after high parasitaemia. Artesunate causes "PITTING" — the spleen removes the dead parasite from an infected red cell and RETURNS the once-infected cell to the circulation. These pitted cells have a SHORTENED LIFESPAN and are destroyed later, causing a delayed drop in haemoglobin, sometimes severe enough to need transfusion.',
            the_practical_action: 'CHECK A FULL BLOOD COUNT AT ABOUT 1, 2 AND 4 WEEKS after treatment for severe malaria, especially after high parasitaemia. WARN THE PATIENT to return if they become pale, tired or breathless. A patient who was cured and discharged, and returns three weeks later with a haemoglobin of 55, is not a treatment failure — this is the explanation, and it is missed unless anticipated.',
        },
        h_species_specific_follow_up: 'IF THE SPECIES IS VIVAX OR OVALE, dormant liver HYPNOZOITES cause relapse weeks to months later. They require PRIMAQUINE (or tafenoquine) to eradicate — and G6PD STATUS MUST BE CHECKED FIRST, because primaquine causes severe haemolysis in deficiency. Falciparum has no hypnozoite stage, so this does not apply here, but the distinction must be made from the film.',
        i_prevention: 'Insecticide-treated bed nets, indoor residual spraying, and chemoprophylaxis for travellers with clear advice that no regimen is complete protection. In endemic areas, intermittent preventive treatment in pregnancy and seasonal chemoprevention in children where recommended.',
      },

      section_6_teaching_points: {
        bonus_1_deep_laboured_breathing_is_acidosis_not_pneumonia:
          'A high respiratory rate with a clear chest in severe malaria is KUSSMAUL BREATHING compensating for metabolic acidosis, and acidosis is the strongest single predictor of death. It is regularly charted as "chest clear" and dismissed. Measure the lactate and bicarbonate.',
        bonus_2_the_film_underestimates_the_parasite_burden:
          'The most mature, most damaging parasites are SEQUESTERED in the deep microvasculature and are not in the sample you took. A modest parasitaemia does not mean mild disease — the WHO severity criteria, not the percentage, decide the treatment.',
        bonus_3_artesunate_replaced_quinine_because_it_saves_more_lives:
          'AQUAMAT and SEAQUAMAT showed substantially lower mortality with artesunate. It also avoids quinine hypoglycaemia and the need for rate-controlled infusion and cardiac monitoring. Artesunate is first line everywhere for severe malaria.',
        bonus_4_finish_with_a_full_oral_act_course:
          'Artesunate clears parasites fast but leaves a residual population. A complete artemisinin-based combination course prevents recrudescence and protects against resistance. Stopping when the patient looks better is a common and consequential omission.',
        bonus_5_post_artesunate_delayed_haemolysis:
          'One to three weeks after treatment, the once-infected red cells "pitted" by the spleen are destroyed, causing a delayed anaemia that can need transfusion. Check the blood count at 1, 2 and 4 weeks and warn the patient. A patient returning pale at three weeks is not a failure of treatment — this is why.',
        bonus_6_the_fluid_teaching_reversed:
          'The FEAST trial showed fluid boluses INCREASED mortality in febrile African children with impaired perfusion. Severe malaria patients develop pulmonary oedema readily, and the acidosis comes from microvascular obstruction rather than hypovolaemia. Cautious, controlled replacement — not reflexive large boluses.',
        trap_1: 'CHECK THE GLUCOSE FIRST and hourly thereafter. Hypoglycaemia causes coma and seizures and is entirely reversible.',
        trap_2: 'A single negative film does not exclude malaria — repeat three times over 48 hours.',
        trap_3: 'HRP2 rapid tests stay positive for weeks after cure and can be falsely negative where the gene is deleted.',
        trap_4: 'Give broad-spectrum antibiotics too — bacterial co-infection is common and kills.',
        trap_5: 'No steroids, no mannitol, no prophylactic anticonvulsants — all have been tested and found harmful or useless.',
        trap_6: 'Take a travel history in every febrile patient, and remember that chemoprophylaxis does not exclude malaria.',
        trap_7: 'For vivax or ovale, check G6PD before primaquine — it causes severe haemolysis in deficiency.',
        one_line_summary: 'Severe falciparum malaria with cerebral involvement, hypoglycaemia and acidosis. Glucose in the first minute and hourly after, intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours, antibiotics alongside, cautious fluids — then a full oral ACT course and a blood count at 1, 2 and 4 weeks.',
      },
    },
    warnings: [
      'FEVER PLUS ALTERED CONSCIOUSNESS in or from an endemic area is SEVERE MALARIA until proven otherwise. Falciparum can kill within 24 hours.',
      'CHECK THE GLUCOSE FIRST and HOURLY — hypoglycaemia causes coma and seizures and recurs.',
      'DEEP LABOURED BREATHING WITH A CLEAR CHEST IS ACIDOSIS, not pneumonia — and acidosis is the strongest predictor of death.',
      'The blood film UNDERESTIMATES the parasite burden because mature parasites are sequestered. A low parasitaemia does not mean mild disease.',
      'A SINGLE NEGATIVE FILM DOES NOT EXCLUDE MALARIA — repeat at least three times over 48 hours.',
      'HRP2 rapid tests stay positive for weeks after cure, and can be falsely negative where the gene is deleted.',
      'INTRAVENOUS ARTESUNATE is first line — it reduces mortality substantially compared with quinine.',
      'FINISH WITH A FULL ORAL ACT COURSE — artesunate alone leaves a residual parasite population.',
      'GIVE BROAD-SPECTRUM ANTIBIOTICS ALONGSIDE — bacterial co-infection is common in severe malaria.',
      'AVOID LARGE RAPID FLUID BOLUSES — the FEAST trial showed increased mortality, and pulmonary oedema develops readily.',
      'NO steroids, NO mannitol, NO prophylactic anticonvulsants — all have been tested and found harmful or useless.',
      'WARN ABOUT POST-ARTESUNATE DELAYED HAEMOLYSIS — check a blood count at 1, 2 and 4 weeks after high parasitaemia.',
      'Chemoprophylaxis does not exclude malaria. Take a travel history in every febrile patient.',
      'For vivax or ovale, check G6PD before primaquine — it causes severe haemolysis in deficiency.',
      'Doses here are teaching examples. Follow WHO guidance and your national malaria treatment guideline.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Dosing in children, pregnancy and renal failure differs, and national guidelines govern.',
      'Artesunate reconstitution differs by product — read the specific instructions supplied.',
    ],
    cards: [
      { q: 'What does deep laboured breathing with a clear chest mean in malaria?', a: 'Kussmaul breathing from metabolic acidosis — the strongest single predictor of death.' },
      { q: 'Why does the film underestimate parasite burden?', a: 'Mature parasites sequester in the deep microvasculature and are not in the peripheral sample.' },
      { q: 'Name five WHO severe malaria criteria.', a: 'Impaired consciousness, acidosis, hypoglycaemia below 2.2, severe anaemia, renal impairment, shock, hyperparasitaemia, seizures, jaundice with another sign.' },
      { q: 'Give the artesunate regimen.', a: '2.4 mg/kg intravenously at 0, 12 and 24 hours, then daily until oral treatment is possible.' },
      { q: 'Why did artesunate replace quinine?', a: 'AQUAMAT and SEAQUAMAT showed substantially lower mortality; it also avoids quinine hypoglycaemia and rate-controlled infusion.' },
      { q: 'Why must a full oral ACT course follow artesunate?', a: 'Artesunate leaves a residual parasite population — the course prevents recrudescence and resistance.' },
      { q: 'Why give antibiotics as well?', a: 'Bacterial co-infection, particularly non-typhoidal Salmonella, is common in severe malaria and contributes to death.' },
      { q: 'What did the FEAST trial change?', a: 'Fluid boluses increased mortality in febrile African children — fluids are now cautious and controlled.' },
      { q: 'What is post-artesunate delayed haemolysis?', a: 'Destruction 1 to 3 weeks later of once-infected cells pitted by the spleen, causing delayed anaemia.' },
      { q: 'How do thick and thin films differ?', a: 'Thick is more sensitive and finds parasites; thin speciates and quantifies parasitaemia.' },
      { q: 'Which species need primaquine and why?', a: 'Vivax and ovale — dormant liver hypnozoites cause relapse. Check G6PD first.' },
      { q: 'What treatments are contraindicated in cerebral malaria?', a: 'Corticosteroids, mannitol and prophylactic anticonvulsants — all shown harmful or useless.' },
    ],
    checks: [
      'Glucose checked in the first minute and hourly thereafter',
      'Travel history taken and prophylaxis noted but not relied on',
      'Thick and thin films sent, with parasitaemia quantified',
      'WHO severity criteria explicitly applied',
      'Lactate and bicarbonate measured',
      'Blood cultures taken and broad-spectrum antibiotics given',
      'HIV test sent',
      'Intravenous artesunate started without delay',
      'Fluids given cautiously with monitoring for pulmonary oedema',
      'No steroids, mannitol or prophylactic anticonvulsants given',
      'Full oral ACT course prescribed to complete treatment',
      'Species identified and primaquine considered with G6PD check',
      'Follow-up blood counts at 1, 2 and 4 weeks arranged and explained',
    ],
    related: ['malaria_the_species_severity_criteria_and_treatment'],
  },

  {
    id: 'AS-CASE-0024',
    type: 'case',
    specialty: 'Medicine — Infectious disease',
    teaching_case: true,
    title: 'CASE: Two Weeks of Headache in a Patient with a CD4 of 38',
    short: 'Case: cryptococcal meningitis in advanced HIV',
    summary:
      'A 31-year-old with advanced HIV and subacute headache. Teaches why the opening pressure is the treatment rather than a measurement, why antiretrovirals must be DELAYED rather than started, and how immune reconstitution can kill a patient who is getting better.',
    domains: ['infectious_disease', 'neurology', 'emergency_medicine'],
    intents: ['identify', 'act'],
    hazard: 'critical',
    urgency: 'urgent',
    aka: [
      'case cryptococcal meningitis', 'advanced hiv case', 'crag',
      'opening pressure lumbar puncture', 'therapeutic lumbar puncture',
      'amphotericin flucytosine', 'iris case', 'immune reconstitution',
      'cd4 count', 'aids defining illness',
    ],
    terms: [
      'case', 'cryptococcal meningitis', 'cryptococcus neoformans', 'hiv', 'cd4 count',
      'viral load', 'opening pressure', 'therapeutic lumbar puncture', 'india ink',
      'cryptococcal antigen', 'amphotericin b', 'flucytosine', 'fluconazole',
      'immune reconstitution inflammatory syndrome', 'antiretroviral therapy',
      'cotrimoxazole prophylaxis', 'toxoplasmosis', 'tuberculous meningitis',
    ],
    confirm_locally: true,
    body: {
      the_one_line: '31-year-old woman with known HIV, not taking her antiretroviral therapy for 8 months, with 2 weeks of worsening headache, low-grade fever and vomiting. Her CD4 count is 38 cells/microlitre.',

      section_1_clerking: {
        history:
          'Two weeks of headache, initially mild and now constant and severe, worse in the morning and on coughing. Low-grade fevers. Vomiting for 4 days. Blurred vision for 3 days, and she describes brief episodes where her vision "goes dark" when she stands. Her family say she has become slow and forgetful over the last week. She stopped her antiretroviral therapy 8 months ago after moving town and never re-registered at a clinic.',
        reading_the_clues: {
          the_tempo:
            'SUBACUTE — over two weeks. This is the key discriminator. BACTERIAL meningitis presents over HOURS TO A COUPLE OF DAYS. CRYPTOCOCCAL and TUBERCULOUS meningitis present over WEEKS. A two-week headache with fever in an immunosuppressed patient points at the chronic causes, and the pace of the illness is as informative as any test.',
          headache_worse_in_the_morning_and_on_coughing: 'FEATURES OF RAISED INTRACRANIAL PRESSURE. Lying flat overnight and the Valsalva of coughing both raise it further.',
          transient_visual_obscurations:
            'BRIEF EPISODES OF VISION GOING DARK, typically on standing or straining, ARE A CLASSIC SYMPTOM OF RAISED INTRACRANIAL PRESSURE. They indicate transient optic nerve head ischaemia and they warn of impending PERMANENT VISUAL LOSS. In cryptococcal meningitis, blindness from raised pressure is a real and preventable outcome.',
          cognitive_slowing: 'Suggests the process is affecting the brain, not only the meninges.',
          the_treatment_interruption:
            'THE ROOT CAUSE. Eight months off treatment allowed the CD4 count to collapse. Finding out WHY she stopped — moving town, no transfer of care, stigma, cost, side effects, pill burden, depression — is what prevents this happening again. "Restart the antiretrovirals" without addressing the reason produces the same admission in a year.',
        },
        past_medical_history: 'HIV diagnosed 4 years ago. Previous oral candidiasis. Previous herpes zoster. NO documented tuberculosis. Two children.',
        drug_history: 'None currently. Previously on a fixed-dose antiretroviral combination and CO-TRIMOXAZOLE prophylaxis, both stopped 8 months ago.',
        vitals: 'BP 118/74 mmHg. Pulse 92. Respiratory rate 18. Temperature 37.8 — NOTE IT IS ONLY MILDLY RAISED, and profound immunosuppression frequently blunts the fever response. Saturation 97%. GCS 14. Glucose 5.1. Weight 44 kg.',
        examination:
          'Thin and wasted. ORAL CANDIDIASIS — white plaques scraping off the tongue and palate, a marker of significant immunosuppression. Mild neck stiffness only — MENINGISM IS OFTEN MILD OR ABSENT IN CRYPTOCOCCAL MENINGITIS BECAUSE THE INFLAMMATORY RESPONSE IS BLUNTED, which is exactly why the diagnosis is delayed. No rash. No focal neurological deficit. FUNDOSCOPY: PAPILLOEDEMA — bilateral swollen optic discs, confirming raised intracranial pressure. Sixth nerve palsy on the right, a FALSE LOCALISING SIGN of raised pressure. Chest clear. Generalised lymphadenopathy. EXAMINE THE SKIN — umbilicated papules resembling molluscum can be disseminated cryptococcosis.',
      },

      section_2_mechanism: {
        the_organism: 'CRYPTOCOCCUS NEOFORMANS is an encapsulated yeast found worldwide in soil and bird droppings, particularly pigeon guano. It is inhaled, usually causing no illness in an immunocompetent person.',
        why_it_causes_disease_here:
          'CONTROL OF CRYPTOCOCCUS DEPENDS ON CD4 T-CELL MEDIATED IMMUNITY. Below a CD4 count of about 100 cells/microlitre — hers is 38 — that control fails, and latent or newly acquired organisms disseminate from the lung to the BLOODSTREAM and then to the CENTRAL NERVOUS SYSTEM, for which the organism has a marked tropism.',
        the_capsule_which_explains_almost_everything: {
          what_it_is: 'A thick POLYSACCHARIDE CAPSULE surrounding the yeast.',
          what_it_does: 'It is ANTI-PHAGOCYTIC and immunomodulatory, so the organism largely evades the host response. It is also why the inflammatory reaction is MUTED — hence mild meningism, a modest cerebrospinal fluid cell count, and only a low-grade fever. THE PATIENT LOOKS LESS ILL THAN THEY ARE.',
          how_it_raises_the_pressure:
            'Large numbers of encapsulated yeasts and shed capsular polysaccharide physically OBSTRUCT CEREBROSPINAL FLUID REABSORPTION at the arachnoid granulations. Fluid keeps being produced but cannot drain, so pressure rises relentlessly. THE RAISED PRESSURE IS THEREFORE A MECHANICAL PROBLEM CAUSED BY FUNGAL BURDEN — which is why draining fluid works and why antifungals alone do not solve it quickly.',
          diagnostic_use: 'The capsule is what the INDIA INK stain outlines and what the CRYPTOCOCCAL ANTIGEN TEST detects.',
        },
        why_the_pressure_kills_and_blinds:
          'Sustained raised intracranial pressure causes headache, vomiting, visual loss through optic nerve compression and ischaemia, falling consciousness, and ultimately HERNIATION AND DEATH. RAISED INTRACRANIAL PRESSURE IS THE LEADING CAUSE OF EARLY DEATH IN CRYPTOCOCCAL MENINGITIS — more than the infection itself in the first two weeks.',
      },

      section_3_differentials: {
        the_framework: 'IN A PATIENT WITH A CD4 BELOW 100 AND A SUBACUTE HEADACHE, THE FOUR DIAGNOSES ARE CRYPTOCOCCAL MENINGITIS, TUBERCULOUS MENINGITIS, CEREBRAL TOXOPLASMOSIS AND CNS LYMPHOMA. They can coexist.',
        one_cryptococcal_meningitis: 'WORKING DIAGNOSIS. Supporting: CD4 of 38, subacute headache, raised intracranial pressure with papilloedema, blunted meningism, visual obscurations.',
        two_tuberculous_meningitis: 'Also subacute, also with a lymphocytic cerebrospinal fluid, but classically with a VERY HIGH PROTEIN, a LOW GLUCOSE, basal meningeal enhancement on imaging and cranial nerve palsies. IT MUST BE ACTIVELY EXCLUDED in high-burden settings and is frequently co-existent.',
        three_cerebral_toxoplasmosis: 'Typically FOCAL — hemiparesis, seizures, focal deficits — with MULTIPLE RING-ENHANCING LESIONS on imaging, characteristically in the basal ganglia. She has no focal deficit, but imaging will show it.',
        four_cns_lymphoma: 'Usually a SINGLE larger enhancing lesion, often periventricular. Epstein-Barr virus DNA in cerebrospinal fluid supports it.',
        five_bacterial_meningitis: 'Faster tempo, more toxic patient, neutrophilic cerebrospinal fluid. Still possible and still covered until excluded.',
        six_progressive_multifocal_leukoencephalopathy: 'JC virus. Progressive focal deficits WITHOUT mass effect or enhancement, and without fever or headache prominently.',
        seven_hiv_associated_neurocognitive_disorder: 'Chronic cognitive decline, not an acute febrile headache.',
        eight_syphilis: 'Test for it — neurosyphilis is treatable and commonly co-exists.',
      },

      section_4_investigations: {
        cryptococcal_antigen: {
          why_it_is_the_test_of_choice: 'CRAG — cryptococcal antigen — detects capsular polysaccharide in SERUM and CEREBROSPINAL FLUID. It is HIGHLY SENSITIVE AND SPECIFIC, and the LATERAL FLOW ASSAY gives a result in minutes at the bedside from a fingerprick, with no laboratory infrastructure. A SERUM CrAg IS OFTEN POSITIVE BEFORE MENINGITIS DEVELOPS, which is the basis of SCREENING.',
          screening_programmes: 'Many programmes SCREEN THE SERUM CrAg IN ALL PATIENTS WITH A CD4 BELOW 100. A positive screen with no meningitis is treated pre-emptively with fluconazole, preventing the disease that would otherwise follow. This is one of the highest-yield public health interventions in HIV care.',
        },
        lumbar_puncture_which_is_diagnostic_and_therapeutic: {
          the_central_point:
            'MEASURE AND RECORD THE OPENING PRESSURE WITH A MANOMETER. THIS IS NOT AN OPTIONAL EXTRA — IT IS THE SINGLE MOST IMPORTANT MEASUREMENT IN THE CASE, because raised pressure is what kills and blinds, and because DRAINING FLUID IS ITSELF THE TREATMENT. A lumbar puncture performed without measuring the pressure has wasted the most valuable information and the most valuable intervention available.',
          normal_and_abnormal: 'Normal opening pressure is roughly 10 to 20 cmH2O. ABOVE 25 cmH2O IS RAISED AND REQUIRES THERAPEUTIC DRAINAGE. Pressures above 40 are common in cryptococcal meningitis.',
          imaging_first: 'CT head before lumbar puncture if there are focal signs, seizures or significantly reduced consciousness — largely to exclude a mass lesion such as toxoplasmosis. NOTE THAT PAPILLOEDEMA WITH DIFFUSELY RAISED PRESSURE AND NO MASS IS NOT A CONTRAINDICATION to a carefully performed therapeutic puncture in this specific disease, but the decision needs senior input.',
          csf_findings: 'INDIA INK STAIN shows the encapsulated yeast as a clear halo against the ink background — rapid, cheap and highly specific, though less sensitive than antigen testing. CrAg positive. FUNGAL CULTURE, which is the reference standard and allows quantification. Cell count typically only MILDLY RAISED with LYMPHOCYTES — and a NORMAL CELL COUNT DOES NOT EXCLUDE IT, because the response is blunted. Protein mildly raised, glucose low or normal. ALSO SEND for tuberculosis — Ziehl-Neelsen stain, culture and molecular testing — and bacterial Gram stain and culture.',
        },
        hiv_specific_tests: 'CD4 COUNT — hers is 38, defining advanced disease. HIV VIRAL LOAD — expected to be high after 8 months off treatment. RESISTANCE TESTING where available, since interrupted treatment breeds resistance.',
        screening_for_the_other_opportunistic_infections: 'THIS IS MANDATORY AND ROUTINELY INCOMPLETE. TUBERCULOSIS — sputum molecular testing, and URINE LIPOARABINOMANNAN (LAM), which performs best precisely in advanced HIV where sputum is hard to obtain. CHEST RADIOGRAPH. Hepatitis B and C. SYPHILIS. Toxoplasma serology. Cervical screening. Full blood count, renal and liver function, and electrolytes including MAGNESIUM AND POTASSIUM, which matter before amphotericin.',
        imaging: 'CT or MRI brain — often normal or showing only mild changes in cryptococcal meningitis, which is itself informative. Look for the ring-enhancing lesions of toxoplasmosis, the basal enhancement of tuberculosis, and hydrocephalus.',
      },

      section_5_management: {
        a_the_three_phases_of_antifungal_treatment: {
          induction: {
            regimen: 'AMPHOTERICIN B plus FLUCYTOSINE for 1 to 2 weeks is the classical induction. Liposomal amphotericin B 3 to 4 mg/kg daily is far better tolerated than the deoxycholate formulation where available. FLUCYTOSINE 100 mg/kg per day in four divided doses. FOR A 44 kg WOMAN: flucytosine 4,400 mg daily, so 1,100 mg four times a day.',
            the_important_point_about_flucytosine: 'ADDING FLUCYTOSINE TO AMPHOTERICIN REDUCES MORTALITY compared with amphotericin alone. It is not an optional adjunct. In many settings its availability is the limiting factor, and where it is unavailable, high-dose fluconazole is combined with amphotericin instead. A single high dose of liposomal amphotericin with flucytosine and fluconazole is a WHO-recommended regimen that simplifies induction in resource-limited settings.',
            monitoring_amphotericin: 'IT IS NEPHROTOXIC and causes ELECTROLYTE WASTING — profound HYPOKALAEMIA AND HYPOMAGNESAEMIA. PRE-HYDRATE with sodium chloride 0.9%, REPLACE POTASSIUM AND MAGNESIUM PRE-EMPTIVELY, and check renal function and electrolytes at least daily. Infusion reactions with fever and rigors are common.',
            monitoring_flucytosine: 'IT IS MYELOSUPPRESSIVE. Check the full blood count at least twice weekly, and monitor levels where available. Reduce the dose in renal impairment.',
          },
          consolidation: 'FLUCONAZOLE 800 mg daily for 8 weeks (or per current guidance) once induction is complete and the patient is improving.',
          maintenance: 'FLUCONAZOLE 200 mg daily, continued until the CD4 count has recovered above 100 to 200 on antiretroviral therapy with viral suppression, sustained for at least 6 months to a year. STOPPING TOO EARLY CAUSES RELAPSE.',
        },
        b_the_intervention_that_saves_sight_and_life: {
          therapeutic_lumbar_punctures:
            'IF THE OPENING PRESSURE IS ABOVE 25 cmH2O, DRAIN CEREBROSPINAL FLUID — typically enough to halve the pressure or bring it below 20, often 20 to 30 mL. REPEAT DAILY, or more often, UNTIL THE PRESSURE AND SYMPTOMS SETTLE.',
          why_it_matters_so_much:
            'REPEATED THERAPEUTIC LUMBAR PUNCTURES REDUCE MORTALITY IN CRYPTOCOCCAL MENINGITIS. This is one of the few situations in medicine where a bedside procedure performed daily by a junior doctor is itself a life-saving treatment, and it is under-performed because it is uncomfortable for the patient and inconvenient for the team. THE PATIENT USUALLY FEELS DRAMATICALLY BETTER IMMEDIATELY AFTERWARDS, which makes the conversation easier.',
          what_does_not_work: 'ACETAZOLAMIDE, MANNITOL AND CORTICOSTEROIDS ARE NOT EFFECTIVE for the raised pressure of cryptococcal meningitis and may cause harm. A trial of adjunctive DEXAMETHASONE in cryptococcal meningitis showed WORSE outcomes and more adverse events. DRAINAGE IS THE TREATMENT.',
          persistent_pressure: 'If pressure remains uncontrollable despite repeated punctures, a lumbar drain or ventriculoperitoneal shunt may be needed.',
        },
        c_when_to_start_antiretroviral_therapy_and_why_the_answer_is_counter_intuitive: {
          the_instinct: 'She has a CD4 of 38 and is off treatment. Every instinct says start antiretroviral therapy today.',
          the_rule: 'DO NOT. DELAY ANTIRETROVIRAL THERAPY FOR AT LEAST 4 TO 6 WEEKS AFTER STARTING ANTIFUNGAL TREATMENT for cryptococcal meningitis.',
          the_evidence: 'A randomised trial (COAT) comparing early antiretroviral initiation, at 1 to 2 weeks, with deferred initiation at 5 weeks found SIGNIFICANTLY HIGHER MORTALITY IN THE EARLY GROUP. Starting too soon kills.',
          why: {
            immune_reconstitution_inflammatory_syndrome:
              'IRIS. When antiretroviral therapy restores immune function, the recovering immune system mounts a vigorous inflammatory response against the residual cryptococcal antigen already present in the central nervous system. In a CLOSED, NON-EXPANDABLE SKULL, that inflammation causes a surge in intracranial pressure, cerebral oedema and clinical deterioration — in a patient who was improving. IT CAN BE FATAL.',
            the_principle: 'CONTROL THE FUNGAL BURDEN FIRST, THEN RESTORE THE IMMUNE SYSTEM. The same reasoning applies to tuberculous meningitis, where antiretroviral therapy is also deferred. It is the opposite of the general rule in HIV care, where treatment is started as early as possible — and that is precisely why it is examined and why it is got wrong.',
          },
          recognising_iris_when_it_happens: 'Recurrence of headache, fever and raised pressure weeks after starting antiretroviral therapy, in a patient improving on antifungals, WITH STERILE CULTURES. Distinguish it from treatment FAILURE, where cultures remain positive. Management is repeated therapeutic lumbar punctures, continuation of both antifungal and antiretroviral therapy, and — in IRIS specifically, unlike primary disease — corticosteroids may be considered in severe cases under specialist guidance.',
        },
        d_the_rest_of_advanced_hiv_care_which_must_not_be_forgotten: {
          co_trimoxazole_prophylaxis: 'CO-TRIMOXAZOLE 960 mg daily prevents Pneumocystis jirovecii pneumonia, toxoplasmosis and several bacterial infections, and REDUCES MORTALITY IN ADVANCED HIV. Start it. It is one of the cheapest and highest-impact interventions available and it is frequently omitted in the focus on the acute problem.',
          tuberculosis: 'SCREEN ACTIVELY. If active tuberculosis is found, treat it — and note that antiretroviral timing in tuberculosis is also deferred, though for a shorter interval than in cryptococcal meningitis. If active disease is excluded, TUBERCULOSIS PREVENTIVE THERAPY is indicated.',
          nutrition_and_general_care: 'She weighs 44 kg. Nutritional support, treat oral candidiasis with fluconazole (already covered by her antifungal regimen), pressure area care, and thromboprophylaxis.',
          the_adherence_conversation:
            'SHE STOPPED TREATMENT FOR 8 MONTHS AFTER MOVING TOWN. That is a health SYSTEM failure as much as a patient one. Before discharge: register her with a local clinic, ensure a documented transfer of care, give a named contact, address cost and transport, screen for depression, discuss disclosure and stigma, and involve a peer supporter or adherence counsellor. THIS IS THE INTERVENTION THAT DETERMINES WHETHER SHE IS ALIVE IN FIVE YEARS — more than the choice of antifungal.',
          partner_and_children: 'Offer testing to her partner and both children. Discuss prevention, including treatment as prevention once she is suppressed.',
        },
      },

      section_6_teaching_points: {
        bonus_1_the_opening_pressure_is_the_treatment:
          'Measure it with a manometer every time. Above 25 cmH2O, drain fluid until the pressure halves or falls below 20, and repeat DAILY. Repeated therapeutic lumbar punctures REDUCE MORTALITY — a bedside procedure that is itself a life-saving drug, and it is under-performed because it is inconvenient. A lumbar puncture done without measuring the pressure has thrown away the most important information in the disease.',
        bonus_2_do_not_start_antiretrovirals_yet:
          'Deferring for 4 to 6 weeks reduces mortality — the COAT trial found significantly MORE deaths with early initiation. Restoring immunity against residual fungal antigen inside a closed skull causes IRIS, a pressure surge in a patient who was improving. Control the fungus first, then restore the immune system. It is the exact opposite of the general rule in HIV care.',
        bonus_3_the_capsule_explains_the_whole_disease:
          'It is anti-phagocytic, so the inflammatory response is muted — mild meningism, modest cell count, low-grade fever, and a patient who looks less ill than they are. It obstructs cerebrospinal fluid reabsorption, so pressure rises mechanically. And it is what India ink outlines and the antigen test detects.',
        bonus_4_serum_crag_screening_prevents_the_disease:
          'A lateral flow assay on a fingerprick gives an answer in minutes. Screening everyone with a CD4 below 100 and treating positives pre-emptively with fluconazole prevents meningitis before it starts — one of the highest-yield interventions in HIV programmes.',
        bonus_5_steroids_are_harmful_here:
          'A trial of adjunctive dexamethasone in cryptococcal meningitis showed WORSE outcomes. Acetazolamide and mannitol do not work either. Drainage is the treatment. Note the exception: in established IRIS, steroids may have a role under specialist guidance — a different situation entirely.',
        bonus_6_flucytosine_is_not_optional:
          'Adding it to amphotericin reduces mortality. Where it is unavailable, high-dose fluconazole is combined with amphotericin. Knowing that the combination matters is what drives efforts to obtain the drug rather than settling for monotherapy.',
        trap_1: 'Meningism is often mild or absent — the blunted inflammatory response is why the diagnosis is delayed.',
        trap_2: 'A normal cerebrospinal fluid cell count does NOT exclude cryptococcal meningitis.',
        trap_3: 'Transient visual obscurations warn of permanent blindness. Take them seriously and drain the pressure.',
        trap_4: 'Replace potassium and magnesium pre-emptively with amphotericin, and pre-hydrate — it is nephrotoxic and wastes electrolytes.',
        trap_5: 'Check the full blood count twice weekly on flucytosine — it is myelosuppressive.',
        trap_6: 'Start co-trimoxazole prophylaxis — it reduces mortality in advanced HIV and is routinely forgotten.',
        trap_7: 'Screen actively for tuberculosis, using urine LAM, which performs best in exactly this population.',
        trap_8: 'Distinguish IRIS from treatment failure — IRIS has STERILE cultures.',
        one_line_summary: 'Cryptococcal meningitis with a CD4 of 38. Measure the opening pressure and drain daily, amphotericin with flucytosine, co-trimoxazole prophylaxis, screen for tuberculosis — and do NOT start antiretrovirals for 4 to 6 weeks.',
      },
    },
    warnings: [
      'MEASURE THE OPENING PRESSURE with a manometer — raised pressure is the leading cause of early death and blindness.',
      'Above 25 cmH2O, DRAIN CEREBROSPINAL FLUID and repeat DAILY — therapeutic lumbar punctures reduce mortality.',
      'DO NOT START ANTIRETROVIRAL THERAPY for 4 to 6 weeks — early initiation increases mortality through IRIS.',
      'ACETAZOLAMIDE, MANNITOL AND STEROIDS DO NOT WORK for the raised pressure — a dexamethasone trial showed WORSE outcomes.',
      'Meningism is often mild or absent because the capsule blunts inflammation — the patient looks less ill than they are.',
      'A NORMAL CSF CELL COUNT DOES NOT EXCLUDE cryptococcal meningitis.',
      'Transient visual obscurations warn of PERMANENT BLINDNESS — drain the pressure.',
      'FLUCYTOSINE ADDED TO AMPHOTERICIN REDUCES MORTALITY — it is not an optional adjunct.',
      'Amphotericin is nephrotoxic and wastes potassium and magnesium — pre-hydrate and replace electrolytes pre-emptively.',
      'Flucytosine is myelosuppressive — check the full blood count at least twice weekly.',
      'START CO-TRIMOXAZOLE PROPHYLAXIS — it reduces mortality in advanced HIV and is routinely omitted.',
      'SCREEN ACTIVELY FOR TUBERCULOSIS, including urine LAM, which performs best in advanced HIV.',
      'Distinguish IRIS from treatment failure — IRIS has STERILE cultures.',
      'Do not stop maintenance fluconazole until the CD4 has recovered and been sustained on suppressive therapy.',
      'Doses here are teaching examples. Follow WHO and national HIV guidelines.',
    ],
    limitations: [
      'A WORKED TEACHING CASE, not a protocol. Induction regimens differ by drug availability, and WHO guidance has changed repeatedly.',
      'Antiretroviral timing in co-existent tuberculosis differs from cryptococcal meningitis and requires specialist input.',
    ],
    cards: [
      { q: 'What is the single most important measurement at lumbar puncture?', a: 'The opening pressure — raised pressure is the leading cause of early death and blindness.' },
      { q: 'What do you do for an opening pressure above 25 cmH2O?', a: 'Drain fluid until the pressure halves or falls below 20, and repeat daily.' },
      { q: 'When should antiretroviral therapy be started, and why?', a: 'Deferred 4 to 6 weeks — early initiation increases mortality through IRIS in a closed skull.' },
      { q: 'What is IRIS and how is it distinguished from treatment failure?', a: 'Inflammatory deterioration as immunity recovers — cultures are STERILE, unlike failure.' },
      { q: 'How does the capsule explain the clinical picture?', a: 'Anti-phagocytic so inflammation is muted, and it obstructs CSF reabsorption so pressure rises mechanically.' },
      { q: 'Why is serum CrAg screening valuable?', a: 'It is positive before meningitis develops — screening CD4 below 100 and treating pre-emptively prevents the disease.' },
      { q: 'Which adjunctive treatments are harmful or useless here?', a: 'Dexamethasone (worse outcomes in a trial), acetazolamide and mannitol. Drainage is the treatment.' },
      { q: 'Why is flucytosine important?', a: 'Adding it to amphotericin reduces mortality — it is not optional.' },
      { q: 'What must be monitored on amphotericin?', a: 'Renal function, potassium and magnesium daily — it is nephrotoxic and wastes electrolytes.' },
      { q: 'Name the four causes of subacute headache with CD4 below 100.', a: 'Cryptococcal meningitis, tuberculous meningitis, cerebral toxoplasmosis and CNS lymphoma.' },
      { q: 'What prophylaxis reduces mortality in advanced HIV?', a: 'Co-trimoxazole — against Pneumocystis, toxoplasmosis and bacterial infection.' },
      { q: 'Which TB test performs best in advanced HIV?', a: 'Urine LAM, precisely because sputum is difficult to obtain in this group.' },
    ],
    checks: [
      'Opening pressure measured with a manometer and recorded',
      'Therapeutic drainage performed if above 25 cmH2O',
      'Daily repeat punctures planned until pressure settles',
      'CSF sent for India ink, CrAg, fungal culture, TB testing and bacterial culture',
      'Serum CrAg and CD4 count sent',
      'Amphotericin with flucytosine started',
      'Pre-hydration and pre-emptive potassium and magnesium replacement',
      'Renal function and electrolytes checked daily; FBC twice weekly',
      'Antiretroviral therapy DEFERRED 4 to 6 weeks and the reason documented',
      'Co-trimoxazole prophylaxis started',
      'Active tuberculosis screening including urine LAM',
      'Hepatitis, syphilis and cervical screening arranged',
      'Reason for treatment interruption explored and clinic transfer arranged',
      'Partner and children offered testing',
    ],
    related: ['hiv_opportunistic_infections_by_cd4_count'],
  },
];
