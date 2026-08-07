# REQUIREMENTS.md

**Project:** Awibi Scout
**Compiled:** 7 August 2026
Every requirement is tagged to the file it came from. `[R-nn]` ids are referenced
by the audit and release checklist.

Legend — **Status:** ✅ Built · 🔨 In progress · ⬜ Not started · 🚫 Out of v1 scope

---

## 0. What this product is

> *"Awibi Scout lives inside Awibi EHR. You type one thing. You get one clear answer with its source: the calculation, the criteria, the range, the sequence, the instrument. On a shared Android, on 3G, at 2am."*
> — `08-app-about.png`

> *"Built for the ward round, not the reading room."*

A **reference bench**, not a diagnostic device. It answers, it does not decide.

| | |
|---|---|
| **Users** | House officers and medical officers on call · nurses running an infusion · pharmacists checking a regimen against weight · laboratory scientists confirming order of draw · students clerking a first patient |
| **Reference device** | Mid-range Android, 4 GB RAM, Chrome, patchy 4G. *Test on this, not a MacBook.* |
| **Content** | 158 entries, 36 types, release `AWIBI-SCOUT-CONTENT-2026.08.R2` |
| **Visuals** | 96 specified assets, release `AWIBI-SCOUT-IMAGING-2026.08.R1` |

---

## 1. Non-negotiable positions (carried v1 → v5 unchanged)

Source: `AWIBI_SCOUT_v3_MASTER_DOSSIER.md` §1.1

| ID | Requirement | Status |
|---|---|:-:|
| R-01 | Scout is a **governed clinical knowledge platform, not a JavaScript array**. The JSON is a generated deployment artefact, not the store. | ✅ |
| R-02 | **Retrieval must rank, not merely match.** `.filter().includes()` is a prototype technique. | ✅ |
| R-03 | **Arbitrary formula evaluation is prohibited.** Restricted AST or reviewed handlers only. | ✅ |
| R-04 | **Universal laboratory reference ranges are unsafe.** Provenance is mandatory; "Confirm with your lab" is a first-class state. | ✅ |
| R-05 | **Pattern checkers do not diagnose.** A triad indicates a pattern. | ✅ |
| R-06 | **Abbreviation expansion must handle ambiguity.** MI, MS, PE, PT never silently resolve. | ✅ |
| R-07 | **Intended use and excluded use must be stated and enforced.** | ✅ |
| R-08 | Nigeria-specific privacy, regulatory and interoperability obligations apply. | 🔨 |

---

## 2. Search — the founder's central demand

> *"MY MAIN CONCERN IS THE EFFICIENT ACCESS THINKING TO ACCESS ANYTHING. E.G. I DON'T WANT OPTION BASED — IF I HAVE 10000 THINGS NKO? I WANT SOMETHING SO LIKE MAGICAL SEARCH THROUGH THE DATA LOOP AND VERY EFFICIENT AND ACCURATE SEARCH THROUGH THE TERMS OR SENTENCE OR KEY THING."*
> — `AWIBI SCOUT RAW PROMPT.txt`

Source: `awibi_scout_search_v4.json` → `index_spec`, `resolution_ladder`

| ID | Requirement | Status |
|---|---|:-:|
| R-10 | **L0 concept bridge** — O(1) phrase lookup, evaluated first on the whole normalised query. Fixes "blood drop", "how many pints", "set the drip", "sugar is low". | ✅ |
| R-11 | **L1 exact token** — BM25F, k1=1.2, b=0.75. Field weights: title 8 · short_title 6 · also_known_as 5 · terms 4 · summary 2 · body 1 · flashcards 0.5. | ✅ |
| R-12 | **L2 prefix trie** — as-you-type from keystroke 2. "tetan" → tetanus. | ✅ |
| R-13 | **L3 trigram** — sub-word search, Jaccard ≥ 0.30. "transf", "ketoacid", "pheochromo", "sulph" must all hit. Padded `"  token "`. **Body is never trigrammed.** | ✅ |
| R-14 | **L4 fuzzy** — Damerau-Levenshtein over trie candidates only. Distance 1 for ≤5 chars, 2 for longer. "diabetis", "anaemai", "pnemonia". | ✅ |
| R-15 | **L5 facet navigate** — broad nouns route to a hub. "shock", "syndrome", "cancer", "trial" never return empty. | ✅ |
| R-16 | **7-state resolution ladder**, each state named and rendered differently: BRIDGE → EXACT → DISAMBIGUATE → NAVIGATE → SUBWORD → FUZZY → GAP. | ✅ |
| R-17 | Confidence threshold **0.62**; disambiguation delta **8%**. | ✅ |
| R-18 | **Scout never guesses.** On ambiguity it shows a chooser and keeps the user's original word visible. | ✅ |
| R-19 | **A gap is not a failure.** Zero results log the query with a timestamp; 3 hits in a week promotes it to the build queue. Never log patient data. | ✅ |
| R-20 | Boosts: exact title ×3 · phrase ×1.8 · also_known_as ×2.5 · emergency-in-emergency ×1.5 · Nigeria jurisdiction ×1.3. Penalties: review overdue ×0.85 · needs local check ×0.9. | ✅ |
| R-21 | Index **BOTH** British and American spellings — do not fold one into the other. | ✅ |
| R-22 | Index built **once at boot**, never on first request. | ✅ |

---

## 3. Calculations

> *"It has to be sound, the calculation needs to be totally verified, scientifically verified — because this affects life, someone can die if you make a wrong calculation."*
> — raw prompt

| ID | Requirement | Status |
|---|---|:-:|
| R-30 | Closed op set only: `add, sub, mul, div, pow, sum, var, const`. Anything else throws. **No path from content into code.** | ✅ |
| R-31 | Typed, dimensioned inputs with min/max range checks. Out-of-range throws with the accepted range named. | ✅ |
| R-32 | Banded outputs with interpretation + action (e.g. BMI → "Normal range"). | ✅ |
| R-33 | **Warnings and limitations ride with every result** — they are part of the answer, not decoration. | ✅ |
| R-34 | Division by zero is caught and explained, never `Infinity`. | ✅ |
| R-35 | Rounding is declared per output (`half_up`, decimals). | ✅ |

---

## 4. The visual system — **the moat**

Source: `AWIBI_SCOUT_v5_IMAGING_DOSSIER.md`, `awibi_scout_imaging_spec_v5.json`

### 4.1 The six corrections (hard rules)

| ID | Requirement | Status |
|---|---|:-:|
| R-40 | **Meshopt, not Draco.** Decode speed beats the last 15% of file size on a mid-range Android. `EXT_meshopt_compression` + KHR_mesh_quantization, `.glb` + brotli. | ✅ (documented + enforced in pipeline docs) |
| R-41 | **NEVER generate a radiograph.** No AI-generated radiological image ships in Awibi Scout. Ever. Tier 4 is real, licence-cleared, de-identified only. Generative tools may draw the *schematic beside* the film, never the film. | ✅ enforced in code |
| R-42 | **AI anatomy is a first draft, not an asset.** Workflow: generate → REVIEW → correct → optimise → register → ship. An asset with no named reviewer does not ship. | ✅ |
| R-43 | **Licensing.** MedPix = personal/local teaching only, moved to ASNR → ✖ unusable. Radiopaedia = CC BY-NC-SA → ✖ unusable in a paid product. Put this in the developer brief so nobody loses a week. | ✅ surfaced in UI |
| R-44 | **Annotations as SVG overlays** — the highest-leverage decision in the whole visual system. The image is pixels; every label, arrow, callout and measurement is *data*. | ✅ |
| R-45 | **Efficiency-first applied honestly:** SVG carries ~80% of visuals · 8 justified 3D models, not 50 · instruments are photographs, not 3D. | ✅ |

### 4.2 The annotation model

| ID | Requirement | Status |
|---|---|:-:|
| R-46 | **All coordinates normalised 0–1** against the base image, so the overlay survives any resize, device, zoom level or future re-export. | ✅ |
| R-47 | One label object, N languages (`en`, `ha`, `yo`, `ig`). Translation is a data task, not a re-draw. | ✅ |
| R-48 | Each annotation is a **focusable element with an accessible name**. A blind clinician can read the findings on a chest film. | ✅ |
| R-49 | Annotation labels **feed the search index**. | ⬜ |
| R-50 | **Quiz mode for free** — hide the labels and the same asset is a teaching case. This is where the Duolingo-style engagement actually lives. | 🔨 |
| R-51 | Render: SVG absolutely positioned over the `<img>`, shared viewBox. **Pointer events on annotation groups only**, so pan/zoom still work underneath. | 🔨 |
| R-52 | A wrong label is a one-line JSON edit, not a re-export. | ✅ |

### 4.3 Tier matrix — four questions, stop at the first yes

| ID | Requirement | Status |
|---|---|:-:|
| R-53 | 1) Real-world **appearance** taught? → Tier 3 photo. 2) **Radiological**? → Tier 4. 3) Changes over **time/sequence**? → Tier 2 animated SVG. 4) Needs **rotating / seeing behind**? → Tier 5 3D. Otherwise → **Tier 1 SVG. If unsure, Tier 1.** | ✅ |
| R-54 | Budgets: T1 2–20 KB · T2 5–40 KB · T3 30–120 KB · T4 60–200 KB · T5 ≤3 MB. | 🔨 |
| R-55 | Tier 1 SVG rules: real `<text>` elements never outlined paths · fills as `var(--scout-stroke)` CSS custom properties (dark mode free) · `<title>`+`<desc>` on every meaningful group · `role="img"` + `aria-labelledby` · **colour never the only cue** · SVGO config that **preserves** ids/titles/descs. | 🔨 |
| R-56 | **Six assets must be shot across skin tones:** V-EXAM-001 conjunctival pallor · V-EXAM-002 scleral jaundice · V-FOOT-002 Charcot foot · V-BURN-002 burn depth · V-LMRK-001 · V-SAM-002 nutritional oedema. *For a Nigerian product this is a clinical accuracy failure, not a diversity checkbox.* | ✅ surfaced |
| R-57 | Every clickable 3D mesh **emits its slug and opens the matching clinical entry**. The model is a navigation surface into the library, not a separate feature. Mesh naming is the critical step, not the geometry. | ⬜ |
| R-58 | **Mandatory 2D fallback for every 3D asset**, rendered immediately, swapped when the model resolves. | ⬜ |
| R-59 | Capability gate: `deviceMemory >= 2` AND `!saveData` AND WebGL2. Otherwise fallback + "load 3D anyway". No WebGL2 → no error, no mention of 3D. | ⬜ |
| R-60 | three.js **never in the main bundle** — dynamic import when a 3D card opens. Draw calls < 100. Hard cap 3 models in memory; dispose geometry, materials **and** textures on unmount. | 🔨 (build config done) |

### 4.4 The philosophy gate

| ID | Requirement | Status |
|---|---|:-:|
| R-61 | **The test:** after seeing this, what does a clinician DO differently? The manifest column is `changes_what_a_clinician_does`. **If it's blank, the asset is decoration and the build fails.** | ✅ |
| R-62 | Three jobs: **Recognise** (47) · **Understand** (34) · **Locate** (15). | ✅ |
| R-63 | Anti-patterns, do not commission: stock stethoscope photo · a 3D heart that spins but teaches nothing · a diagram with 40 labels · an image that duplicates the text beside it · a beautiful illustration of something nobody must identify. | ✅ documented |
| R-64 | `approved_for_release` stays **false** until every QA box is ticked by a named human. **The pipeline cannot set it.** | ✅ enforced in API |
| R-65 | Honest status: **96 specifications, 0 assets built.** Every licence row says TO BE CONFIRMED. 107 of 158 entries have no visual. The UI must not imply otherwise. | ✅ |

---

## 5. Device and performance budgets

Source: `awibi_scout_imaging_spec_v5.json` → `device_budgets`

| ID | Metric | Target | Status |
|---|---|---|:-:|
| R-70 | Initial JS bundle (gzipped) | ≤ 180 KB | 🔨 |
| R-71 | Time to interactive, first visit, 3G | ≤ 4 s | ⬜ |
| R-72 | Repeat visit (service worker) | ≤ 1 s | ⬜ |
| R-73 | Search keystroke → suggestions | ≤ 60 ms p95 | ✅ (~1 ms) |
| R-74 | Tap entry → card rendered | ≤ 150 ms p95 offline | 🔨 |
| R-75 | Tier-1 SVG paint | ≤ 16 ms (one frame) | 🔨 |
| R-76 | Tier-3/4 LQIP visible | ≤ 100 ms | ⬜ |
| R-77 | Tier-5 fallback visible / model interactive | ≤ 200 ms / ≤ 3 s wifi | ⬜ |
| R-78 | Offline package (Tier 1–4) | ≤ 60 MB; 3D opt-in | ⬜ |
| R-79 | Peak JS heap | ≤ 120 MB | ⬜ |

**Graceful degradation (R-80):** no WebGL2 → 2D fallback, no error · saveData → lower quality, 3D behind explicit tap · offline → all Tier 1–4 works · slow network → LQIP then progressive upgrade, **never a blank box or a spinner over nothing** · screen reader → SVG titles and overlays carry the full teaching content.

---

## 6. Language and UI vocabulary

Source: `AWIBI_SCOUT_v4_DOSSIER.md` §1, `awibi_scout_search_v4.json`

| ID | Requirement | Status |
|---|---|:-:|
| R-90 | **The rule: name it the ward way, then explain it once.** "Use an infusion pump or syringe driver — a machine that controls the rate itself." Not "rate-controlled pump". **Simple is not the same as unstandard.** | ✅ (content) |
| R-91 | **Banned UI words:** artifact, governed, corpus, schema, facet, taxonomy, ontology, instantiate, provenance envelope, knowledge object, payload. | ✅ enforced |
| R-92 | **Swaps:** artifact→entry · governed library→Scout library · corpus→library · facet filter→filter · taxonomy→categories · verification status→checked by · evidence tier→source strength · hazard→risk level · content release→version · "no approved artifact matches"→"Nothing yet for that — try these". | ✅ |
| R-93 | Search placeholders rotate through 20 real queries: "drip rate", "tetanus", "snake bite", "transfusion", "insulin", "Lantus", "DKA", "malaria", "which bottle", "chest x-ray", "GCS", "PPH", "clubbing", "eclampsia", "low sugar", "Widal", "hernia", "sepsis", "normal values", "brand name". | 🔨 |
| R-94 | Empty-state chips: Emergencies · Calculators · Drugs · Examinations · X-ray & scans · Normal values · Bottles & tubes · Trials · Clerking · Instruments. | 🔨 |

---

## 7. Screens

Source: the 9 PNGs + `Awibi Scout v2.dc.html`

| ID | Screen | Requirement | Status |
|---|---|---|:-:|
| R-100 | **Shell** | 248 px sidebar (sticky, full height) · sticky header with page title, 560 px-max search, ⌘K badge, "Emergency first" toggle, "Reference mode / No patient loaded" · footer with release stamp. Sidebar collapses < 980 px. | 🔨 |
| R-101 | **Scout** | Horizontal type-filter tabs with counts · toolbar "N topics — Ordered by risk, then title" + Filters · results table: Code / Topic / Type / Risk / Open · TIME-CRITICAL flag · chips for checklist, cards, Nigeria note, Confirm locally, Picture spec. | 🔨 |
| R-102 | **Library** | "Browse everything" · 12 "START HERE" index cards · area accordions with Show/Hide, risk badge + type per row. | ⬜ |
| R-103 | **Cards & checklists** | Toggle Flashcards (469) / Checklists (61 lists, 823 items) · card face with risk badge + Hide answer + ←/→ + "Open the full note →" · deck rail with counts · **ticks saved on this device**. | ⬜ |
| R-104 | **Sources & updates** | 6 stat tiles · 5 tabs (Review list, To add, Pictures, What people searched, Short forms) · registry table with Checked / Review due / Version hash · picture slots. | ⬜ |
| R-105 | **About Scout** | "Built for the ward round, not the reading room." + 4 stat tiles + "Who uses it" + "How it is engineered". | ⬜ |
| R-106 | **Reach us** | Form (Name, Email/WhatsApp, Role and facility, What is this about, Message) + 4 routing cards. **"Never paste anything that identifies a patient."** | ⬜ |
| R-107 | **Entry card** | The answer + inputs/outputs, warnings, limitations, sources, version stamp, related, and its visual assets. | ⬜ |

---

## 8. Design tokens — lifted exactly from `Awibi Scout v2.dc.html`

**These are the authority. A generic design system does not override them.**

| ID | Token set | Status |
|---|---|:-:|
| R-110 | **Fonts:** Inter 400/500/600/700/800 (UI) · IBM Plex Mono 400/500/600 (codes, counts, kbd, stamps). Base 14 px / 1.5. | ✅ |
| R-111 | **Light:** bg `#F4F6FB` · card `#FFFFFF` · skel `#E7ECF4` · skel-2 `#F0F3F9` · line `#E2E6EE` · line-2 `#EEF1F7` · ink `#0E1320` · ink-2 `#2A3344` · muted `#6B7588` · faint `#9AA3B2` · blue `#335CF4` · blue-700 `#2954F3` · blue-100 `#DBE1F8` · blue-wash `#EAEEFE` · danger `#DC2626` · accent orange `#FF7A3C`. | ✅ |
| R-112 | **Dark:** bg `#0B0F1A` · card `#131A2A` · skel `#1E2739` · skel-2 `#1A2233` · line `#28324A` · line-2 `#1F2839` · ink `#EAEEF6` · ink-2 `#C3CCDC` · muted `#93A0B5` · faint `#6D7A92` · blue `#6E8CFF` · blue-700 `#8CA4FF` · blue-100 `#2A3763` · blue-wash `#1B2445` · danger `#FF7A73`. | ✅ |
| R-113 | **Risk badges** — light: low `#1FA93B`/`#EAFBEC` · moderate `#B07900`/`#FFF6E5` · high `#B4490F`/`#FFF1E9` · critical `#DC2626`/`#FCEBEB`. Dark: low `#6BDA84`/`#16301D` · moderate `#E9BC53`/`#332A12` · high `#FF9E5E`/`#3A2415` · critical `#FF7A73`/`#3A1A18`. 10 px, 700, uppercase, `.05em`, 3×7 px, radius 6. | ✅ |
| R-114 | **Geometry:** sidebar 248 px · header height 40 px input · radii 6/7/9/10/11/12/14 px · card border 1 px `--line` · page padding `clamp(13px,2.2vw,26px)`. | ✅ |
| R-115 | Theme persisted to `localStorage` key `awibi_scout_dark`; `color-scheme` set on `<html>`. | 🔨 |

---

## 9. Governance

| ID | Requirement | Status |
|---|---|:-:|
| R-120 | Every entry carries sources, a version stamp, a named review date and a sign-off gate. | ✅ |
| R-121 | **"Nothing already released is quietly edited — it is replaced."** Entries frozen at load. | ✅ |
| R-122 | Honest counters, including the uncomfortable ones: **0 signed off by a doctor**, 38 "confirm with your lab". | ✅ |
| R-123 | Footer on every screen: *"Reference tool for qualified professionals, not a diagnostic device."* | 🔨 |
| R-124 | **0 diagnoses made without a clinician. By design.** | ✅ |

---

## 10. Deferred / out of scope for v1

| ID | Item | Note |
|---|---|---|
| R-130 | **Authentication** | Explicitly deferred. No login — easy access. Scout is read-only reference; there is no per-user data beyond device-local ticks. |
| R-131 | **Patient DICOM viewer** | Phase 3. *"That is a different product."* When built: Cornerstone3D + OHIF, requires a DICOMweb archive. Borrow the SVG-overlay pattern now. |
| R-132 | **PostgreSQL + Prisma** | See §11. |
| R-133 | Hausa / Yoruba / Igbo translations | Data slots exist (`label.ha/yo/ig`); strings not authored. |

---

## 11. Two deliberate deviations from the generic build template

Flagging these rather than silently ignoring them.

**11.1 — No PostgreSQL/Prisma in v1.**
The generic template specifies Postgres + Prisma + multi-tenancy + RBAC. Scout's data is a **158-entry immutable release package**: no user accounts, no tenant rows, no writes. The governance model is explicitly *"nothing already released is quietly edited — it is replaced"* — a new release file, not an UPDATE statement. Adding a database now would add an operational dependency, a migration story and a failure mode to a product whose entire value is *working offline on a shared Android at 2am*.
**The two things that do accumulate state** — checklist ticks and zero-result gap queries — are handled correctly today: ticks in `localStorage` (per the design: *"ticks are saved on this device"*), gaps in an in-memory log exposed at `/api/search/gaps`.
**When Postgres earns its place:** persisting gap queries across restarts for the 7-day review cadence, and multi-facility analytics. Both are Phase 2. The repository layer is a single module (`data/repository.js`) so swapping the source is contained.
→ **Decision needed from you** if you want Postgres wired now regardless.

**11.2 — The design system is Scout's, not the template's.**
The template proposes Inter + `#2563EB` + 8 px base + `rounded-md`. Scout's shipped design uses `#335CF4`, a 248 px sidebar, radii of 6–14 px, IBM Plex Mono for codes, and a specific 4-step risk-badge palette in two themes. Your instruction was to match the v5/design package **exactly — font, colours, layout**. Where the two conflict, **Scout's tokens win** (§8). The template's *principles* — mobile-first, ≥48 px touch targets, WCAG AA contrast, no gradients, no chat bubbles — are all adopted.

---

## 12. Traceability summary

| Source file | Requirements derived |
|---|---|
| `AWIBI SCOUT RAW PROMPT.txt` | R-10…R-22 (search), R-30…R-35 (calculations), product intent |
| `awibi_scout_search_v4.json` | R-10…R-22, R-91…R-94 |
| `lexicon.json` | R-06, R-15, R-20 |
| `entries.v4.json` | R-30…R-35, R-120…R-124 |
| `AWIBI_SCOUT_v5_IMAGING_DOSSIER.md` + `imaging_spec_v5.json` | R-40…R-65, R-70…R-80 |
| `visual_plan_v5.json` / `visual_coverage_gaps_v5.csv` | R-61…R-65 |
| `AWIBI_SCOUT_v4_DOSSIER.md` | R-90…R-92 |
| `AWIBI_SCOUT_v3_MASTER_DOSSIER.md` | R-01…R-08 |
| 9 PNG screenshots | R-100…R-107 |
| `Awibi Scout v2.dc.html` | R-110…R-115 |
| `governance.json` | R-120…R-124 |
