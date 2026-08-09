# CONTENT_COVERAGE.md

**What areas exist in the Awibi Scout library, and what does not.**

Updated 7 August 2026 · base release `AWIBI-SCOUT-CONTENT-2026.08.R2` (158 entries)
· extension release `AWIBI-SCOUT-CONTENT-2026.08.R3` (153 entries) · **311 total**
· 1,436 flashcards · 212 checklists · 114 visual assets (20 drawn)

Every extension entry is `approved_for_release: false` with `clinical_reviewer: null`.
The build cannot set either. Nothing here has a doctor's sign-off.

---

## How to check coverage yourself

Coverage is not a claim in a document — it is a query. Any of these answer it live:

```bash
curl "localhost:5188/api/search?q=<term>"     # does Scout carry this?
curl "localhost:5188/api/search/gaps"          # what have people looked for and not found?
curl "localhost:5188/api/entries?limit=1000"   # everything
```

A term that returns **GAP** is genuinely absent and is logged as a content requirement.
A term that returns **PARTIAL** exists but did not clear the confidence gate.

---

## 1. Extension areas — built and searchable (151 entries)

### 1.1 Electrolytes and metabolites (12) — `AS-ELEC-*`

The theme is *relative*: a true number read in the wrong context.

| Area | Entry | The confusion it resolves |
|---|---|---|
| Potassium low | Hypokalaemia | Serum ≠ stores; magnesium blocks correction |
| Potassium high | Hyperkalaemia | Pseudohyperkalaemia; calcium protects but does not lower |
| Sodium low | Hyponatraemia | Same number, three fluid states, opposite treatments |
| Sodium high | Hypernatraemia | Why could this patient not drink? |
| Calcium | Corrected calcium | Low albumin fakes hypocalcaemia; Chvostek vs Trousseau |
| Magnesium | Magnesium | The electrolyte that blocks correction of the others |
| Phosphate | Phosphate & refeeding | Normal before feeding ≠ replete |
| Urea | Urea | Rises from a GI bleed, not just a failing kidney |
| Uric acid | Uric acid | Normal during acute gout; tumour lysis; pre-eclampsia |
| Bicarbonate | Bicarbonate | One number, two opposite meanings |
| Anion gap | Anion gap & delta ratio | Albumin correction; the hidden second disorder |
| Panel reading | Which organ is this? | Kidney / liver / bone / adrenal / gut patterns |

### 1.2 Acid–base (5) — `AS-ACID-*`

Five-step gas reading · raised-gap acidosis · normal-gap (hyperchloraemic) acidosis and RTA types 1/2/4 · metabolic alkalosis (chloride-responsive vs resistant) · respiratory acidosis and alkalosis.

### 1.3 Neurological signs and phenomena (6) — `AS-SIGN-*`

Babinski / plantar response · Kernig and Brudzinski (and their poor sensitivity) · Lhermitte · Uhthoff · Raynaud (primary vs secondary) · multiple sclerosis.

### 1.4 Neurological syndromes and vocabulary (5) — `AS-NEUR-*`

Bulbar vs pseudobulbar palsy (what "bulb" and "pseudo" mean) · Wallenberg / lateral medullary · spinal tracts and their brainstem course, with Brown-Séquard · polio / poliomyelitis / polymyositis / myelitis untangled · gliosis vs glioma.

### 1.5 Encephalopathy and CSF (4) — `AS-ENCE-*`, `AS-CSF-*`

Encephalitis vs encephalopathy vs meningoencephalitis · hepatic encephalopathy · hypertensive encephalopathy and PRES · CSF analysis across bacterial / viral / tuberculous / fungal, plus xanthochromia.

### 1.6 Imaging vocabulary (6) — `AS-RADS-*`

Silhouette sign · meniscus sign and pleural effusion · density vs intensity (hypodense/hyperdense, hypointense/hyperintense, T1/T2/FLAIR/DWI) · ring-enhancing lesions · consolidation vs collapse vs cavitation · systematic chest film reading with CTR, free air and tube positions.

### 1.7 Haematology (5) — `AS-HAEM-*`

Haemostasis (primary, secondary, fibrinolysis) · anticoagulants and reversal, including HIT · anaemia classification by MCV and reticulocytes · Coombs direct and indirect, warm vs cold AIHA · aplastic anaemia vs aplastic crisis vs sequestration.

### 1.8 General pathology and immunology (4) — `AS-GPTH-*`, `AS-IMMU-*`

Acute and chronic inflammation, mediators, granuloma, ESR vs CRP · apoptosis and the six necroses · antigens, antibodies, MHC and complement · autoantibodies and how to avoid misusing them.

### 1.9 Endocrine dynamic tests (2) — `AS-ENDO-*`

Dexamethasone suppression and short Synacthen · thyroid function tests, sick euthyroid, biotin interference.

### 1.10 Nutrition, biochemistry, immunisation (4) — `AS-NUTR-*`, `AS-BIOC-*`, `AS-VACC-*`

Classes of food and their tests · vitamins and deficiency syndromes · glutathione, oxidative stress, G6PD and paracetamol · vaccines, types, cold chain and live-vaccine contraindications.

---

## 2. Already present in the base release (158 entries)

Not re-authored — search them directly. 36 types including:

**49 landmark trials** (FEAST, TRACT, AQUAMAT, AMBITION-cm, E-MOTIVE, PARADIGM-HF, RALES, TRICC, CHAP, Term Breech…) · **14 calculators** (BMI, BSA, MUAC, Cockcroft-Gault, anion gap, osmolality, corrected sodium/calcium, FENa, Holliday-Segar, paediatric fluids) · **9 emergencies** (anaphylaxis, adrenal crisis, transfusion reaction, hypoglycaemia, tension pneumothorax, PPH, status epilepticus, shock) · **9 scores** (GCS, CURB-65, Alvarado, qSOFA, Wells…) · **7 pathways / 7 guidelines** (stroke, tetanus, acute scrotum, acute abdomen, hernia) · **5 examinations** (CVS, cranial nerves, general head-to-toe) · **3 clerking** · **3 drugs** (antibiotics, brand names, digoxin) · **3 instruments** (sample bottles, tubes and catheters, colour codes) · **3 waveforms** (ECG) · plus criteria, grading, atlases, ion channels, reversal agents, reference intervals.

---

### 1.11 Dermatology (4) — `AS-DERM-*`

Rash morphology and the blanching test · tinea at every site including incognito · the scaly-rash differential (psoriasis, eczema, versicolor, pityriasis rosea) · skin and soft tissue infection through to necrotising fasciitis and herpetic whitlow.

### 1.12 Spine, joints and alignment (3) — `AS-MSKS-*`

The four spondylo- words · kyphosis, lordosis, scoliosis, varus and valgus with the developmental normals · the painful joint, led by septic arthritis.

### 1.13 ENT and eye (2) — `AS-ENTX-*`, `AS-EYEX-*`

The four otitides with mastoiditis and cholesteatoma · the eye examination — acuity, pinhole, RAPD, fields, perimetry, fundoscopy and the red-eye discriminators.

### 1.14 Microbiology, molecular and terminology (3) — `AS-MICR-*`, `AS-TERM-*`

Gram stain, culture and the contamination/colonisation/infection distinction · PCR and its pitfalls · iatrogenic, idiopathic, nosocomial and the surgical suffixes, with splenectomy worked through.

### 1.15 Obstetric and paediatric shorthand (2) — `AS-OBGY-*`, `AS-PAED-*`

Gravida, para, GTPAL, dating and Naegele · paediatric growth, milestones, MUAC, age-varying observations and clerking structure.

### 1.16 Drug classes (3) — `AS-DRGC-*`

NSAIDs and the four predictable harms including the triple whammy · anti-TB RIPE with organ-specific monitoring · monoclonals and anticancer therapy, led by the three ward emergencies.

### 1.17 Symptom differentials (4) — `AS-DIFX-*`

Chest pain · breathlessness · acute abdominal pain · headache, fever and jaundice. Each structured rule-in / rule-out, killers first.

### 1.18 Tissue pathology (4) — `AS-GPTH-0003…0006`

Fibrosis and cystic fibrosis · cirrhosis and portal hypertension · amyloid and the named swellings · cellular adaptation through the metaplasia→dysplasia→neoplasia sequence.

### 1.19 GI and hepatobiliary (2) — `AS-GAST-*`

Gallstone disease across colic, cholecystitis, cholangitis and pancreatitis · peptic ulcer, upper GI bleeding and appendicitis.

### 1.20 Cardiovascular, respiratory and renal (3) — `AS-CVSD-*`, `AS-RESP-*`, `AS-RENL-*`

Heart failure and atrial fibrillation · asthma, COPD and pneumonia · the nephron segment by segment, AKI, and the nephrotic–nephritic split.

### 1.21 Thyroid autoimmunity and MS criteria (3) — `AS-THYR-*`, `AS-NEUR-0006`

| Entry | Covers |
|---|---|
| `AS-THYR-0001` **Graves disease and the causes of thyrotoxicosis** | TSH receptor antibody mechanism · why the eyes and shins are involved in Graves alone · the three-way split against toxic nodular goitre and thyroiditis · uptake scan as the discriminator · treatment options · thyroid storm |
| `AS-THYR-0002` **Antithyroid drugs and the agranulocytosis rule** | Thyroid peroxidase block · the extra deiodinase block unique to PTU · why improvement takes 2–6 weeks · titration vs block-and-replace · **agranulocytosis** and the sore-throat rule · hepatotoxicity · pregnancy drug choice |
| `AS-NEUR-0006` **McDonald criteria** | Dissemination in space and in time · the four locations · how one scan proves two times · oligoclonal bands against paired serum · red flags against MS · **MS vs NMOSD vs ADEM** · the aquaporin-4-before-treatment rule |

**Searchable terms that resolve to these:** graves · exophthalmos · proptosis · pretibial myxoedema ·
thyroid dermopathy · thyrotoxicosis · toxic nodular goitre · thyroiditis · TRAb · carbimazole ·
methimazole · propylthiouracil · PTU · thionamide · agranulocytosis · thyroid peroxidase ·
block and replace · McDonald criteria · dissemination in space · dissemination in time ·
Dawson fingers · periventricular · juxtacortical · infratentorial · oligoclonal bands · NMO ·
NMOSD · aquaporin · MOGAD · ADEM · area postrema · longitudinally extensive.

Charcot triad and Reynolds pentad were already carried by `AS-GAST-0001` and the base
release's *Triads and Tetrads*; this release adds the **diagram** (`V-GAST-002`), not new prose.

### 1.22 Laboratory tests (9) — `AS-LABT-*`

The tests actually ordered every day, which previously resolved onto tangential entries.

Full blood count line by line · liver function, hepatocellular vs cholestatic · bilirubin,
conjugated vs unconjugated · troponin, CK and LDH · CRP, ESR, procalcitonin and ferritin ·
clotting (INR, APTT, D-dimer, fibrinogen) · amylase and lipase · creatinine, eGFR and the
creatine confusion · ammonia.

### 1.23 Eponym disambiguation (2) — `AS-EPON-*`

**Charcot** — the cholangitis triad, the historical MS triad, the neuropathic joint, and
Charcot-Marie-Tooth · **Bell** — palsy versus the normal phenomenon.

### 1.24 Core presentations (5) — `AS-CARD-*`, `AS-ENDO-0003`, `AS-RESP-*`

Acute coronary syndrome · cardiac arrest · diabetes mellitus · pulmonary embolism ·
spirometry and lung function.

### 1.25 Paediatric calculators (5) — `AS-PCAL-*`, `AS-PAED-*`

**New Ballard Score** (computes gestational age) · **mid-parental height** (computes target
height with sex adjustment) · **corrected gestational age** (computes) · growth plotting and
SGA/AGA/LGA · insulin injection technique.

### 1.26 Wave-1 emergencies (6) — `AS-NSUR-*`, `AS-CARD-*`, `AS-NEUR-*`, `AS-TOXI-*`, `AS-RESP-*`

Subarachnoid haemorrhage with Hunt and Hess · aortic dissection with Stanford and DeBakey ·
Guillain-Barré and the FVC rule · myasthenia gravis · NMS vs serotonin syndrome vs malignant
hyperthermia and the extrapyramidal syndromes · respiratory failure types 1 and 2, and ARDS.

### 1.27 Endocrine tumours and adrenal disease (5) — `AS-ENDO-*`

Phaeochromocytoma and alpha-before-beta · MEN 1/2A/2B, carcinoid and the functioning
pancreatic tumours · Cushing, Conn and Addison · pituitary and sella turcica tumours ·
advanced glycation end products.

### 1.28 Rheumatology and nephrology (4) — `AS-RHEU-*`, `AS-RENL-*`

Polymyositis and dermatomyositis · systemic sclerosis and Sjögren · spondyloarthritis,
reactive arthritis and Takayasu · ADPKD, HIVAN, IRIS and dialysis.

### 1.29 Dermatology and oncology (7) — `AS-DERM-*`, `AS-ONCO-*`

Lesion morphology vocabulary · skin structure, cell types and Blaschko lines · pigment
disorders · skin cancer and the blistering diseases · **histological type versus primary
site** (the "is adenocarcinoma one disease?" question) · breast cancer · GI and lung cancer
with the paraneoplastic syndromes.

### 1.30 Psychiatry, toxicology and safeguarding (6) — `AS-PSYC-*`, `AS-TOXI-*`, `AS-SAFE-*`

Delirium vs dementia and the subtypes · bipolar disorder · substance misuse, withdrawal and
what actually reverses what · safeguarding children · exploitation, trafficking and FGM ·
adult safeguarding, capacity and coercion.

### 1.31 Clerking templates, anaesthesia and surgery (5) — `AS-HIST-*`, `AS-ANAE-*`, `AS-SURG-*`, `AS-GAST-*`

Upper GI bleed · oliguria and frothy urine · seizure, cough, chest pain and weakness · local
anaesthetics and LAST · induction agents, relaxants and neuraxial blocks · gastroschisis,
omphalocele and pharyngeal pouch · diarrhoea, constipation and fever.

### 1.32 Wave-6 cardiology, neurology and pathology (6) — `AS-CARD-*`, `AS-NEUR-*`, `AS-RADS-*`, `AS-GPTH-*`, `AS-NAMK-*`

Cardiomyopathies and WPW · hypertension stigmata, ECG potassium and the J-curve · inotropes,
vasopressors and cardiorenal syndrome · peripheral neuropathy · optic neuritis, trigeminal
neuralgia and cerebellar ataxia · intracranial bleeds and the named imaging signs · cell
injury and death · inflammation and healing · the clinical rules of N.

---

## 3. Coverage against the supplied build document

Every area named in the document is now built.

| Area in the document | Status |
|---|---|
| Cholecystitis (acute/chronic, Murphy, ultrasound) | ✅ `AS-GAST-0001` |
| Head-to-toe disease reference | ✅ Across `AS-GAST-*`, `AS-CVSD-*`, `AS-RESP-*`, `AS-RENL-*`, `AS-MSKS-*`, `AS-DERM-*` plus the base release's pathways |
| Symptom rule-in / rule-out tables | ✅ `AS-DIFX-0001…0004` |
| Haemostasis, coagulation factors, vitamin-K dependence | ✅ `AS-HAEM-0001`, `AS-HAEM-0002` |
| Renal physiology (nephron segment by segment, countercurrent) | ✅ `AS-RENL-0001` |
| Inflammation, cytokines, interferons, ESR/CRP | ✅ `AS-GPTH-0001` |
| O&G top-20 terms with clerking | ✅ `AS-OBGY-0001` |
| Paediatrics top-20 terms with clerking | ✅ `AS-PAED-0001` |
| Folate/B12 megaloblastic | ✅ Inside `AS-HAEM-0003` |
| Drug classes: NSAIDs, monoclonals, anti-TB, cancer regimens | ✅ `AS-DRGC-0001…0003` |
| Dermatology (tinea, versicolor, rosea, psoriasis, eczema, whitlow, morphology, cellulitis) | ✅ `AS-DERM-0001…0004` |
| Spine and MSK (spondylo- family, curvature, valgus/varus) | ✅ `AS-MSKS-0001…0003` |
| ENT and eye (otitis, acuity, fields, perimetry, fundoscopy, red eye) | ✅ `AS-ENTX-0001`, `AS-EYEX-0001` |
| Fibrosis, cirrhosis, cystic fibrosis, amyloidosis, hygroma, metaplasia | ✅ `AS-GPTH-0003…0006` |
| PCR, culture, Gram stain | ✅ `AS-MICR-0001`, `AS-MICR-0002` |
| Clinical terminology (iatrogenic, idiopathic, nosocomial, -ectomies) | ✅ `AS-TERM-0001` |
| Glutathione, oxidative stress, antioxidants | ✅ `AS-BIOC-0001` |
| Vaccination (types, cold chain, contraindications) | ✅ `AS-VACC-0001` |
| Endocrine dynamic tests (DST, Synacthen, thyroid) | ✅ `AS-ENDO-0001`, `AS-ENDO-0002` |
| Immunology (antigens, antibodies, complement, APC, Coombs, autoantibodies) | ✅ `AS-IMMU-0001`, `AS-IMMU-0002`, `AS-HAEM-0004` |
| Anaemia classification, warm/cold AIHA, aplastic crises | ✅ `AS-HAEM-0003`, `AS-HAEM-0005` |
| Apoptosis and necrosis types | ✅ `AS-GPTH-0002` |

**Not built, and deliberately so:** national vaccination schedules (they change and vary by country — use the current national programme document) and drug DOSES (see §4 item 9).

---

## 4. Review of the supplied document — clinical corrections

The document is a useful brief. It also carries its own disclaimer
("*This response is AI-generated, for reference only*"), and the following points
were **not** reproduced into the library because they are wrong or misleading.

| # | Document says | Correction |
|---|---|---|
| 1 | Eczema/dermatitis is "Type I hypersensitivity → mast cell degranulation → histamine" | **Wrong.** Atopic dermatitis is driven by skin-barrier failure (filaggrin) with a T-cell-mediated response; allergic contact dermatitis is **Type IV** delayed hypersensitivity. Type I is urticaria, angioedema and anaphylaxis. Treating eczema as a histamine disease is why oral antihistamines are so often prescribed and so often disappoint. |
| 2 | Coagulation factor table includes **"Factor VI"** | **There is no Factor VI.** The number was withdrawn once it was recognised as activated Factor V. Reproducing it teaches a fact that does not exist. |
| 3 | "TSH ↓ in secondary hypothyroidism" | Incomplete. In secondary hypothyroidism TSH is **low OR inappropriately normal** — a normal TSH with a low free T4 is the classic missed pituitary picture. Stating only "low" causes the miss. |
| 4 | Mantoux: ">15 mm immunocompetent, >5 mm HIV+" | Over-simplified. Cut-offs are **5 / 10 / 15 mm** by risk stratum. Using two numbers misclassifies the middle group. |
| 5 | "Pegylated IFN-λ" listed as hepatitis C treatment | Investigational, never standard care. Hepatitis C is treated with **direct-acting antivirals**. |
| 6 | Albumin/prealbumin presented as nutritional status markers | Both are **negative acute phase proteins**. In illness they measure inflammation, not intake. Presented with that caveat in the library. |
| 7 | GTPAL described with "P" for both *para* and *preterm* in adjacent lines | Internally inconsistent and a real source of documentation error. Not reproduced. |
| 8 | Prisma models proposed per topic (`HormoneTest`, `FoodClass`, `AnemiaCrisis`, `Glutathione`, `Vaccination`, `ObstetricsTerms`, `PediatricsTerms`, `DiseaseReference`…) | **Not adopted, deliberately.** Every one of these fits the existing schema-4.0.0 entry shape, which already carries `body`, `inputs`, `logic`, `outputs`, `warnings`, `limitations`, `flashcards`, `checkboxes` and `governance`. Creating a table per clinical topic would fragment search across a dozen shapes and require a new index, a new renderer and a new migration for every future topic. One schema, many types, is what makes the single search index and the generic body renderer possible. |
| 9 | Drug doses given throughout (e.g. "1 mg dexamethasone", "250 μg Synacthen", "aspirin 300 mg") | Doses are **not reproduced** in the extension. They vary by protocol, formulation and country, and a reference tool that carries an unreviewed dose is a patient-safety hazard. Entries name the drug and the decision; the dose comes from the local protocol. |
| 10 | Checklists marked "✅ Complete" throughout | No content in this library is complete or approved. Every entry ships `approved_for_release: false`. |

---

## 5. Governance status

| | |
|---|---|
| Entries with a named clinical reviewer | **0 of 241** |
| Entries approved for release | **0 of 241** |
| Extension entries flagged "confirm locally" | 30 |
| Visual assets specified / drawn | 96 / 12 |
| Entries with no visual | 107 of 158 base (the 83 extension entries are not yet mapped to visuals) |

The build pipeline sets `approved_for_release: false` and `clinical_reviewer: null`
unconditionally. Neither field is configurable from the authored source. Approval
is a human step and the code cannot perform it.

---

## 6. Adding a new area

```bash
# 1. author  server/content/NN-topic.mjs   (compact shape: id, title, summary, body, warnings, cards, checks)
# 2. build   npm run build:content --workspace server
# 3. restart the server — the repository merges v4 + v6 at boot
```

The build **fails loudly** on a duplicate id, a duplicate slug, a collision with
the base release, an empty body, a missing summary or an invalid hazard level.
It caught three real id collisions on the first run of this extension.
