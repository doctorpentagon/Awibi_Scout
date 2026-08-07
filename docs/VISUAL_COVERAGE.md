# VISUAL_COVERAGE.md

**What visuals exist, what is specified but not yet sourced, and why the difference is enforced rather than aspirational.**

Updated 7 August 2026 · **114 assets specified · 20 drawn · 0 licensed · 0 approved**

---

## The one thing to understand first

An asset in this library is in exactly one of two states, and the UI never blurs them:

| State | What ships | What the user sees |
|---|---|---|
| **Drawn** | A real, hand-authored SVG in `client/src/visuals/tier1/` | The diagram |
| **Specified** | A specification only — title, what it must show, labels, sourcing constraints | An honest *"specified, not yet sourced"* card stating what is missing |

There is no third state. **There are no placeholder images, no stock substitutes, and no
generated approximations.** A specification card that says "this image does not exist yet" is
more useful to a clinician than a picture that is nearly right.

```bash
curl "localhost:5188/api/visuals/gaps"    # everything specified but not built
curl "localhost:5188/api/visuals/spec"    # the tier matrix and pipeline rules
```

---

## The hard rule on photographs and radiology

> **HARD RULE: no AI-generated radiological image ships in Awibi Scout. Ever.**

This is stated in `server/data/imaging-spec.v5.json`, enforced in `AnnotatedImage.jsx`, and
repeated in `README.md`. It is the most important safety rule in the project and it exists
because a plausible-looking fake radiograph is worse than no radiograph: it teaches a pattern
that does not occur, to someone who will later see a real one.

The same discipline applies to clinical photographs. Every Tier 3 and Tier 4 asset must be:

1. **Real** — photographed or acquired from a patient, not synthesised.
2. **Licence-cleared** — with the licence recorded in the manifest before it ships.
3. **De-identified** — including burned-in pixel text on DICOM, not just header tags.
4. **Consented** for publication where it shows an identifiable person.

### Two sources people reach for that Scout cannot use

| Source | Why not |
|---|---|
| **MedPix** | Licensed for personal and local teaching use only. Not redistributable in a product. |
| **Radiopaedia** | CC BY-NC-SA. The non-commercial and share-alike terms are both incompatible. |

Acceptable routes are an institutional teaching set with **written permission**, a permissively
licensed research dataset, or images commissioned and consented directly.

---

## Tier matrix

| Tier | What it is | Budget | Can be built by us |
|---|---|---|---|
| 1 | Inline SVG diagram | 2–20 KB | **Yes** |
| 2 | Animated SVG | 2–20 KB | **Yes** |
| 3 | Photograph | raster | No — must be sourced |
| 4 | Radiograph / DICOM | raster | No — must be sourced |
| 5 | 3D glTF model | ≤ 3 MB | Yes, but needs a mandatory 2D fallback |

---

## Drawn in this release (20)

### Base wave (12)

`V-ECG-001` ECG intervals · `V-ECG-002` hyperkalaemia progression (Tier 2, animated) ·
`V-ECG-003` ST elevation patterns · `V-ECG-004` ECG territories · `V-CHEST-001` the safe
triangle · `V-CHEST-002` rib neurovascular bundle · `V-DRIP-001` drip rate formula ·
`V-SHOCK-001` shock quadrants · `V-CN-001` facial palsy, upper vs lower motor neurone ·
`V-NEPH-001` nephron and diuretic sites · `V-CVS-001` auscultation areas · `V-PPH-001` the four Ts.

### Thyroid, biliary and demyelination wave (8)

| Asset | Diagram | Why it changes what a clinician does |
|---|---|---|
| `V-THY-001` | **Graves pathophysiology** — normal axis beside the Graves axis, TRAb binding the TSH receptor, feedback loop visibly broken, orbital and pretibial fibroblast targets | Explains why TSH is undetectable while the gland over-produces, and why only Graves causes eye and shin signs |
| `V-THY-002` | **Graves vs toxic nodular goitre vs thyroiditis** — 7-row comparison, uptake row emphasised | Stops carbimazole being prescribed for thyroiditis, where there is nothing to block |
| `V-THY-003` | **Antithyroid mechanism** — peroxidase block ① for all thionamides, deiodinase block ② for PTU alone, colloid store drawn as explicitly untouched | Explains the 2–6 week delay (so a beta-blocker is added) and why PTU is the storm drug |
| `V-THY-004` | **Agranulocytosis warning + flowchart** — sore throat / fever / mouth ulcer icons, the verbatim patient instruction, then suspected → STOP → urgent FBC → refer | The single highest-value instruction in prescribing thionamides. Printable as a handout |
| `V-GAST-002` | **Charcot triad and Reynolds pentad** — three labelled icons, then + shock + altered mental status | Moves from antibiotics to source control; the pentad makes drainage same-day |
| `V-NEUR-004` | **McDonald criteria** — the "no better explanation" gate first, four locations for space, four routes to time, and how one scan proves two times | Shows what actually has to be demonstrated, and puts the misdiagnosis gate where it belongs |
| `V-NEUR-005` | **MS vs NMOSD vs ADEM** — 9-row comparison, cord length and encephalopathy emphasised | Prevents an MS drug being started in NMOSD, where it causes harm |
| `V-SUMM-001` | **Four-topic summary** — Graves, PTU toxicity, Charcot, MS across key features / diagnosis / treatment / red flags | One screen for revision and handover |

Each is 2.0–3.0 KB gzipped, lazily imported, and themed entirely through CSS custom
properties — so dark mode is free and no diagram is ever re-exported for a second theme.

---

## Specified for this wave, not yet sourced (10)

These were requested and are fully specified in `server/data/visual-plan.v5.json`. **None can
be fabricated.** Each renders as a specification card until a real, cleared image exists.

### Tier 3 — photographs

| Asset | What it must show | Sourcing constraint |
|---|---|---|
| `V-THY-P01` | Graves exophthalmos, **frontal and lateral** views, sclera below the limbus | Must include a lid-retraction-only comparator — lid retraction occurs in *any* thyrotoxicosis and is constantly mistaken for proptosis. Lateral view essential; proptosis is missed from the front |
| `V-THY-P02` | Diffuse goitre, neutral and on swallowing, **paired with a nodular goitre** | The pairing *is* the asset — diffuse vs nodular is the bedside finding that separates Graves from a toxic nodule |
| `V-THY-P03` | Pretibial myxoedema — raised, waxy, peau d'orange plaques | Needs **raking light**; flat clinical lighting makes the asset useless. **Range of skin tones required** — erythema is the least reliable cue on darker skin, so texture must carry it |
| `V-THY-P04` | Carbimazole, methimazole, PTU and propranolol as dispensed | Helps a patient identify *which box to stop*. **No doses appear anywhere in Scout.** Packaging differs by country → source per deployment region, not once globally |
| `V-GAST-P01` | Scleral icterus in natural light, across skin tones | **Range of skin tones mandatory.** A jaundice reference showing only light skin is clinically misleading in the deployment population |

### Tier 4 — radiology

| Asset | What it must show |
|---|---|
| `V-NEUR-R01` | Sagittal FLAIR — **Dawson fingers** perpendicular to the callosal surface, plus axial correlation. The perpendicular orientation is what separates MS from age-related white matter change, the commonest cause of MS misdiagnosis |
| `V-NEUR-R02` | Juxtacortical / cortical lesion abutting cortex with no intervening white matter (DIR improves detection) |
| `V-NEUR-R03` | Infratentorial — pons and middle cerebellar peduncle; also the INO correlate |
| `V-NEUR-R04` | Spine — **short-segment** MS lesion under 2 vertebral bodies, with the axial view proving it is eccentric |
| `V-NEUR-R05` | Spine — **longitudinally extensive** lesion ≥ 3 segments, central cord, **displayed beside R04** |

`V-NEUR-R04` and `V-NEUR-R05` must be commissioned and displayed **as a pair**. The contrast
between short-eccentric and long-central is the entire teaching point, and it is the one that
changes the drug — MS disease-modifying therapies worsen NMOSD.

---

## Governance

Every asset in the manifest carries:

```
status:   "specified"
reviewer: null
licence:  null
```

The build sets these unconditionally; they are not configurable from authored source. **The
pipeline cannot approve, review or license a visual.** Clearing an asset is a human process:
a named person records the licence, a named clinician records the review, and both go in the
manifest with a date.

`needing_skin_tone_range` now lists **10 assets**. That field is not a diversity checkbox —
it is a clinical accuracy requirement. Erythema, cyanosis, jaundice and pallor all present
differently across skin tones, and a reference library that shows one tone teaches a sign
that will not be recognised on the patients in front of the user.

---

## Adding a visual

```bash
# 1. Tier 1/2 — author the SVG
#    client/src/visuals/tier1/YourDiagram.jsx   (use the Diagram wrapper — it enforces
#    role="img", real <title>/<desc>, CSS-variable fills, and real <text>)
# 2. Register it
#    client/src/visuals/tier1/index.js → TIER1_REGISTRY
# 3. Specify it
#    server/data/visual-plan.v5.json → assets[]  (status/reviewer/licence stay null)
# 4. Verify
npm run build --workspace client
curl "localhost:5188/api/visuals/gaps"
```

For Tier 3/4, stop at step 3. The asset stays a specification until a real, cleared,
de-identified image exists — and that is a sourcing task, not a build task.
