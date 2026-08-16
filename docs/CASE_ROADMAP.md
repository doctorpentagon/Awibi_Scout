# CASE_ROADMAP.md

**The case scenario library: what exists, what is planned, and where the next batch goes.**

Target: **200+ cases** covering every posting a student rotates through, at full
depth — every term defined, every investigation with expected result and normal
range, every drug with dose, route, preparation, rate and monitoring.

---

## Batches — you only need to check in at each boundary

Work proceeds in **batches of 10**. Each batch is reported when complete, so
there is a natural checkpoint every 10 cases rather than every 3.

| Batch | Cases | Areas | Status |
|---|---|---|---|
| **1** | 1–10 | Cardiology · Respiratory · Endocrinology · Nephrology · Hepatology | **COMPLETE** |
| **2** | 11–20 | Gastroenterology · Hepatology · Neurology · Haematology · Infectious disease | **COMPLETE** |
| **3** | 21–30 | Rheumatology · Infectious disease · Oncology · Dermatology | **COMPLETE** |
| **4** | 31–40 | General surgery · Trauma | **next** |
| 5 | 41–50 | Urology · Orthopaedics · Vascular | planned |
| 6 | 51–60 | Neurosurgery · Cardiothoracic · Paediatric surgery · Plastics | planned |
| 7 | 61–70 | Anaesthesia · ENT · Ophthalmology · Dental | planned |
| 8 | 71–80 | Obstetrics · Gynaecology | planned |
| 9 | 81–90 | Paediatrics · Neonatology | planned |
| 10 | 91–100 | Psychiatry · Radiology · Emergency medicine | planned |
| 11–20 | 101–200 | Second and third cases per area, depth within each specialty | planned |

**Live count — the roadmap is a plan, the API is the truth:**

```bash
curl localhost:5188/api/cases | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>console.log(JSON.parse(d).total))"
```

| | |
|---|---|
| Cases written | **30** |
| Target | 200+ |
| Specialty areas covered | 12 of ~45 |

---

## The rules every case follows

These are not style preferences. Each exists because its absence makes a case
useless to a beginner.

1. **Every term is defined where it first appears.** Not in a glossary at the
   end — in the sentence that uses it. "Tachypnoea" is followed immediately by
   "abnormally fast breathing, normal 12 to 20."
2. **Every investigation carries four things**: why we are doing it, what we
   expect to find *in this patient*, the normal range, and what the result
   changes.
3. **Every drug carries six things**: name, dose, route, frequency, how to
   prepare or mix it, and what to monitor afterwards. Infusions state the
   concentration and the calculated rate for that patient's weight.
4. **Every finding connects back to mechanism.** A symptom that is not traced
   to pathophysiology has not been taught.
5. **"BONUS" is never a bare word.** If a case says bonus, it explains what the
   bonus is and why it matters.
6. **No vague statements.** Never "give antibiotics" — name the drug, dose,
   route and frequency, and say why that one.

## The dose rule, and why cases differ from the rest of Scout

Every reference entry in Scout deliberately states **no doses**, because doses
vary by formulary and country and a wrong one on a ward kills.

Teaching cases are useless without them — you cannot learn to prescribe from a
card that will not name a dose. So cases carry `teaching_case: true`, which
renders a standing banner **on the entry itself**, not only on the index, since
a reader arriving from search never passes the index. The banner states that
doses are worked examples for an adult with normal renal and hepatic function,
and that the local formulary governs real prescribing.

---

## Coverage plan

Ticked areas have at least one case. The counts are targets, not quotas — the
point is that no area is left without a worked patient.

### Medicine

- [x] **Cardiology** (2) — inferior STEMI in a diabetic · acute pulmonary oedema
      *Planned:* atrial fibrillation with fast ventricular response · complete heart block · infective endocarditis · aortic dissection · cardiac tamponade · rheumatic mitral stenosis · hypertensive emergency · myocarditis
- [x] **Respiratory** (3) — pulmonary embolism · life-threatening asthma · COPD with type 2 failure
      *Planned:* community-acquired pneumonia with CURB-65 · pleural effusion and Light criteria · tuberculosis · bronchiectasis · lung cancer with superior vena cava obstruction · pulmonary fibrosis · tension pneumothorax
- [x] **Endocrinology** (2) — diabetic ketoacidosis · hyperosmolar hyperglycaemic state
      *Planned:* thyroid storm · myxoedema coma · adrenal crisis · Cushing syndrome · phaeochromocytoma · hypoglycaemia · hyperparathyroidism
- [x] **Nephrology** (1) — acute kidney injury with hyperkalaemia
      *Planned:* chronic kidney disease with renal bone disease · nephrotic syndrome · nephritic syndrome · interstitial nephritis · ADPKD · rhabdomyolysis · dialysis emergencies
- [x] **Gastroenterology** (1) — acute pancreatitis
      *Planned:* lower GI bleed · inflammatory bowel disease flare · bowel obstruction · coeliac disease · *Clostridioides difficile*
- [x] **Hepatology** (2) — variceal bleed in cirrhosis · paracetamol overdose and acute liver failure
      *Planned:* alcoholic hepatitis · viral hepatitis · spontaneous bacterial peritonitis · hepatic encephalopathy · hepatocellular carcinoma
- [x] **Neurology** (4) — acute ischaemic stroke · subarachnoid haemorrhage · status epilepticus · Guillain-Barré syndrome
      *Planned:* haemorrhagic stroke · myasthenic crisis · multiple sclerosis relapse · peripheral neuropathy · spinal cord compression
- [x] **Haematology** (4) — sickle cell vaso-occlusive crisis · neutropenic sepsis · acute leukaemia with leukostasis and tumour lysis · anticoagulant-related major bleeding
      *Planned:* lymphoma presentation · anaemia workup · thrombocytopenia and TTP · haemophilia · transfusion reaction
- [x] **Rheumatology** (3) — giant cell arteritis · septic arthritis versus gout · SLE with lupus nephritis
      *Planned:* rheumatoid flare · ANCA vasculitis · systemic sclerosis renal crisis · antiphospholipid syndrome
- [x] **Infectious disease** (4) — bacterial meningitis with meningococcal sepsis · severe falciparum malaria · cryptococcal meningitis in advanced HIV · generalised tetanus
      *Planned:* · typhoid · HIV with opportunistic infection · tuberculosis · tetanus · sepsis of unknown source · Lassa fever · rabies exposure
- [x] **Oncology** (2) — malignant spinal cord compression · hypercalcaemia of malignancy
      *Planned:* superior vena cava obstruction · tumour lysis syndrome · febrile neutropenia in solid tumour
- [x] **Dermatology** (2) — Stevens-Johnson syndrome and toxic epidermal necrolysis · necrotising fasciitis versus cellulitis
      *Planned:* erythroderma · pemphigus · DRESS syndrome · erythema nodosum

### Surgery

- [ ] **General surgery** — appendicitis · perforated peptic ulcer · acute cholecystitis and cholangitis · bowel obstruction · incarcerated hernia · diverticulitis · mesenteric ischaemia
- [ ] **Trauma** — polytrauma primary survey · head injury · chest trauma · abdominal trauma · pelvic fracture · burns
- [ ] **Urology** — renal colic · acute urinary retention · testicular torsion · Fournier gangrene · haematuria · prostate cancer
- [ ] **Orthopaedics** — neck of femur fracture · open fracture · compartment syndrome · septic arthritis · cauda equina · supracondylar fracture in a child
- [ ] **Neurosurgery** — extradural haematoma · chronic subdural · raised intracranial pressure · hydrocephalus with a blocked shunt
- [ ] **Cardiothoracic** — aortic dissection · empyema · pneumothorax requiring drain · oesophageal perforation
- [ ] **Vascular** — acute limb ischaemia · ruptured abdominal aortic aneurysm · diabetic foot · critical limb ischaemia
- [ ] **Paediatric surgery** — intussusception · pyloric stenosis · gastroschisis and omphalocele · undescended testis
- [ ] **Plastics and burns** — major burn with fluid calculation · hand injury · degloving · pressure ulcer

### Special postings

- [ ] **Anaesthesia** — pre-operative assessment · failed intubation · anaphylaxis under anaesthesia · malignant hyperthermia · local anaesthetic systemic toxicity · post-operative hypoxia
- [ ] **ENT** — epistaxis · quinsy · stridor in a child · blocked tracheostomy · sudden sensorineural hearing loss · foreign body
- [ ] **Ophthalmology** — acute angle closure · chemical injury · central retinal artery occlusion · orbital cellulitis · retinal detachment · giant cell arteritis
- [ ] **Dental surgery** — Ludwig angina · dental abscess with facial swelling · avulsed tooth · post-extraction bleeding
- [ ] **Radiology** — interpreting an acute abdomen series · reading a trauma CT · contrast reaction · incidental finding
- [ ] **Obstetrics** — pre-eclampsia and eclampsia · postpartum haemorrhage · obstructed labour · ectopic pregnancy · sepsis in pregnancy
- [ ] **Gynaecology** — ovarian torsion · pelvic inflammatory disease · abnormal uterine bleeding · ovarian cancer
- [ ] **Paediatrics** — the febrile child · bronchiolitis · croup versus epiglottitis · gastroenteritis with dehydration · severe acute malnutrition · neonatal jaundice · seizure in a child
- [ ] **Psychiatry** — acute psychosis · suicide risk assessment · delirium versus dementia · alcohol withdrawal · lithium toxicity

---

## How a batch is added

```bash
# 1. Check which ids are free FIRST — three modules were once written with
#    ids already in use, and the build correctly refused each time.
node scripts/next-id.mjs AS-CASE 6

# 2. Author server/content/6N-cases-<area>.mjs
#    type: 'case', specialty: 'Medicine — Nephrology', teaching_case: true

# 3. Build, restart, verify
npm run build:content --workspace server
curl localhost:5188/api/cases

# 4. Render at least one new case in a real browser before pushing.
#    A green build does not prove a page renders — that error has happened.
```

Cases are entries, so they inherit search, the abbreviation glossary, the
sequential reading order and the governance gate automatically. Nothing extra
needs wiring for a new batch.

---

## Honest note on scale

At the depth these cases are written, each is roughly 2,000 to 2,500 words.
**200 cases is around half a million words.** That is many sessions of work, not
one. The trade-off was offered and the depth was chosen deliberately over the
count, because a thin case teaches nothing.

The structure is finished. Every remaining batch is content, and each one drops
into the existing navigation with no further engineering.
