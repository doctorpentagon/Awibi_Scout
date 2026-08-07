# PROJECT_MAP.md

**Project:** Awibi Scout — the clinical reference bench inside Awibi EHR
**Mapped:** 7 August 2026
**Root:** `C:\Users\USER\Desktop\AWIBI SCOUT`

Every top-level directory and file in the source tree, what it is, and whether it
feeds the build.

---

## 1. Top-level inventory

| Path | Kind | Purpose | Feeds build? |
|---|---|---|---|
| `AWIBI SCOUT RAW PROMPT.txt` | 63 KB, 121 lines | **Founder's voice-note transcripts.** The origin brief. Clinical category wishlist + the single most important engineering instruction (§4 below). | ✅ Requirements |
| `Awibi Scout App Design/` | dir | Shipped design package — 9 UI screenshots, standalone HTML app, editable source, v3 data. | ✅ Design + data |
| `Awibi Scout Ground Research/` | dir | v3 research package — 92-entry corpus, lexicon, registries, CSV exports. | ⚠️ Superseded by v4 |
| `LATEST VERSION 4/` | dir | **v4 content release** — 158 entries, trials, plain-language fixes, visual pipeline. | ✅ Primary corpus |
| `version 5, with good images Awibi scout.zip` | 715 KB | **v5 imaging release — the moat.** Extracted to `_v5/`. | ✅ Primary visual spec |
| `Research docs/` | dir | Four narrative research reports (PDF + DOCX pairs). Lineage v1 → v2 → v2.1. | ⚠️ Superseded, kept for lineage |
| `Clinical Source/` | dir | Five raw clinical compilations, ~1,900 pages. | 📚 Content expansion source |
| `_v5/` | dir (created) | Unzipped v5 package. | ✅ |
| `awibi-scout/` | dir (created) | **The application.** | — |

---

## 2. `Awibi Scout App Design/exports/` — the design authority

### `/png` — 9 screenshots at 3166×1880 (2× retina)

| File | Screen | What it fixes |
|---|---|---|
| `01-flyer-beta-2160x2700.png` | Beta flyer | Marketing, 1080×1350 |
| `02-app-search.png` | **Scout / search results** | Sidebar, header, filter tabs, results table, hazard badges |
| `03-app-library.png` | **Library** | "Browse everything", 12 index cards, area accordions |
| `04-app-cards.png` | **Flashcards** | Card face, deck rail with counts, Hide/Show answer |
| `05-app-checklists.png` | **Checklists** | 4-column masonry, tick state, "0 of N ticked" |
| `06-app-sources-registry.png` | **Sources & updates → Review list** | 6 stat tiles, 5 tabs, registry table |
| `07-app-picture-slots.png` | **Sources & updates → Pictures** | Dashed drop slots, modality · asset-id, required-label chips |
| `08-app-about.png` | **About Scout** | "Built for the ward round, not the reading room." |
| `09-app-contact.png` | **Reach us** | Contact form + 4 routing cards |

### `/source` — editable originals (the CSS authority)

| File | Purpose |
|---|---|
| `Awibi Scout v2.dc.html` (124 KB) | **The app.** Source of every design token — see §3. |
| `Awibi Scout Offline.dc.html` (721 KB) | Same app, data inlined |
| `Awibi Scout.dc.html` | v1, kept for reference |
| `Awibi Scout Beta Flyer.dc.html` | Flyer |
| `support.js`, `image-slot.js` | Runtime helpers |
| `assets/awibi-icon.png`, `awibi-mark.png`, `awibi-ehr-logo.png` | Logos → copied to `client/public/assets/` |
| `data/corpus.json` | v3, 92 topics — **superseded by v4's 158** |
| `data/lexicon.json` | Abbreviations, ambiguity map, synonyms, broad-concept router → **used** |
| `data/governance.json` | Review registry, requests to add, picture manifest → **used** |

---

## 3. `LATEST VERSION 4/` — the clinical corpus (primary)

| File | Contents | Used as |
|---|---|---|
| `awibi_scout_entries_v4.json` (963 KB) | **158 entries**, schema 4.0.0, 36 types | `server/data/entries.v4.json` |
| `awibi_scout_search_v4.json` | L0–L5 index spec, concept bridges, resolution ladder, banned UI words | `server/data/search.v4.json` |
| `awibi_scout_plain_language_v4.json` | Body swaps, protected terms, banned title words | `server/data/plain-language.v4.json` |
| `awibi_scout_unit_conversions_v4.json` | Conversion table | `server/data/unit-conversions.v4.json` |
| `awibi_scout_updates_and_engagement_v4.json` | Surveillance + engagement model | `server/data/engagement.v4.json` |
| `AWIBI_SCOUT_v4_DOSSIER.md` | The v4 narrative — §1 is the plain-language rule | Requirements |
| `awibi_scout_trials_v4.csv` | 49 landmark trials | (inside entries) |
| `awibi_scout_rename_table_v4.csv` | 79 title renames | Requirements |
| `awibi_scout_visual_manifest_v4.csv` | 74 visual specs | Superseded by v5's 96 |

**Entry type distribution (158):** trial 49 · calculator 14 · named_knowledge 14 · emergency 9 · score 9 · guideline 7 · pathway 7 · examination 5 · criteria 3 · grading 3 · clerking 3 · regimen 3 · drug 3 · instrument 3 · waveform 3 · conversion 2 · atlas 2 · pattern 2 · + 18 singletons.

---

## 4. `_v5/` — the imaging release (**the moat**)

| File | Contents | Used as |
|---|---|---|
| `AWIBI_SCOUT_v5_IMAGING_DOSSIER.md` (24 KB, 391 lines) | 10 parts: 6 corrections, source registry, annotation model, tier matrix, pipelines, device budgets, DICOM, content plan, QA gate, build order | **Architecture authority** |
| `awibi_scout_imaging_spec_v5.json` (29 KB) | Machine-readable version of the above | `server/data/imaging-spec.v5.json` |
| `awibi_scout_visual_plan_v5.json` (73 KB) | **96 assets**, fully specified, each linked to a real entry | `server/data/visual-plan.v5.json` |
| `awibi_scout_visual_manifest_v5.csv` (42 KB) | The commissioning sheet for illustrators/photographers | Reference |
| `awibi_scout_visual_coverage_gaps_v5.csv` | **107 entries with no visual**, ranked P1→P3 | `server/data/visual-gaps.v5.csv` |
| `awibi_scout_annotation_example_v5.json` | Reference implementation of the overlay shape | `server/data/annotation-example.v5.json` |
| `awibi_scout_imaging_build_report_v5.md` | Validation: PASS, 0 errors | Reference |
| `Awibi Scout Imaging, Illustrations, Charts, 3d.pdf` | 110-page original brief the dossier corrects | Lineage |

**Asset distribution (96):** Tier 1 SVG 59 (61%) · Tier 2 animated 4 · Tier 3 photo 16 · Tier 4 radiograph 9 · Tier 5 3D 8.
**Waves:** 1 → 30 assets · 2 → 58 · 3 → 8 (the 3D).
**Jobs:** Recognise 47 · Understand 34 · Locate 15.

---

## 5. `Clinical Source/` — raw content for future expansion

| File | Size |
|---|---|
| `Medicine_M1_Complete_Master_Compilation_Fixed_550_Pages.pdf` | 18 MB |
| `Medicine_M2_Complete_Master_Compilation_Fixed_609_Pages.pdf` | 26 MB |
| `Medicine_M3_Complete_Consolidated_Master_Builds_01_to_07_2026_Fixed_159_Pages.pdf` | 7.2 MB |
| `Surgery_S1_Complete_Master_Consolidated.pdf` | 22 MB |
| `Surgery_S2_Complete_Master_Consolidated.pdf` | 25 MB |

~1,900 pages of clinical compilations. **Not app requirements** — this is the quarry the 158 entries were cut from, and the quarry for growing toward the 400+ target. No code reads these.

---

## 6. `Research docs/` — narrative lineage (superseded)

| File | Role |
|---|---|
| `Modular Research Report Template and Applied Blueprint for Awibi Scout` | v1 blueprint |
| `Awibi Scout Critical Corrections and Expansion Research` | v2 corrections |
| `Awibi Scout Comprehensive Corrective Research Dossier` | v2.1 |
| `DO RESEARCH, LIKE 100000000 YEAR OLD_` (4.2 MB) | Founder's research directive |

All superseded by `AWIBI_SCOUT_v3_MASTER_DOSSIER.md`, itself superseded by v4. Positions carried forward unchanged are listed in REQUIREMENTS.md §1.

---

## 7. `awibi-scout/` — the application

```
awibi-scout/
├── package.json               npm workspaces root
├── docs/
│   ├── PROJECT_MAP.md         this file
│   └── REQUIREMENTS.md        master requirements, source-tagged
├── server/                    Node.js + Express, ESM
│   ├── data/                  the release datasets (copied, immutable)
│   └── src/
│       ├── config/            runtime config + release stamps
│       ├── lib/               logger, typed errors
│       ├── data/repository.js loads corpus + visual plan, joins them
│       ├── search/            L0–L5 index + 7-state resolution ladder
│       │   ├── normalise.js   shared by index build and query time
│       │   ├── index-builder.js  BM25F postings, trie, trigram
│       │   ├── fuzzy.js       Damerau-Levenshtein
│       │   └── resolver.js    the ladder
│       ├── calc/engine.js     closed-op logic-tree evaluator, no eval
│       ├── routes/            entries, search, visuals, governance, health
│       └── middleware/
└── client/                    React 18 + Vite
    ├── public/assets/         Awibi logos
    └── src/
        ├── styles/            design tokens lifted from the v2 source
        ├── lib/               API client, hooks
        ├── components/        shell, sidebar, header, badges
        ├── pages/             Scout, Library, Cards, Sources, About, Reach us
        └── visuals/           ◀ THE MOAT
            ├── tier1/         hand-authored SVG diagrams (20 drawn)
            │   ├── Diagram.jsx        wrapper enforcing the v5 SVG rules
            │   ├── index.js           TIER1_REGISTRY: asset_id → lazy component
            │   └── *.jsx              one file per diagram
            ├── AnnotationOverlay.jsx  normalised 0–1 annotation data over a raster
            ├── AnnotatedImage.jsx     renders the "specified, not yet sourced" card
            ├── Model3DViewer.jsx      capability gate + mandatory 2D fallback
            └── VisualPanel.jsx        tier router
```

Documentation lives in `docs/`:

| File | Answers |
|---|---|
| `PROJECT_MAP.md` | where is everything, and which source wins |
| `REQUIREMENTS.md` | R-01…R-133, each tagged to its source |
| `CONTENT_COVERAGE.md` | which clinical areas exist, and how to query coverage live |
| `VISUAL_COVERAGE.md` | which visuals are **drawn** vs **specified**, and the sourcing rules |
| `AUDIT.md` | the release audit |
| `BETA.md` | publishing, running, and the beta tester briefing |

---

## 8. Source-of-truth resolution

Where files disagree, the later release wins:

| Concern | Authority | Not |
|---|---|---|
| Clinical content | `entries.v4.json` (158) | corpus.json (92) |
| Search behaviour | `search.v4.json` + `lexicon.json` | v3 ranking block |
| Visual system | `_v5/` imaging spec + visual plan | v4 visual pipeline, v3 image manifest |
| UI design tokens | `Awibi Scout v2.dc.html` | any generic design system |
| UI vocabulary | `search.v4.json` `banned_ui_words` / `ui_word_swaps` | v3 wording |
