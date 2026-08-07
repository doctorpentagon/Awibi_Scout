# Awibi Scout

The clinical reference bench inside Awibi EHR. You type one thing. You get one clear answer with its source:
the calculation, the criteria, the range, the sequence, the instrument. On a shared Android, on 3G, at 2am.

**Reference tool for qualified professionals. Not a diagnostic device.**

| | |
|---|---|
| Content release | `AWIBI-SCOUT-CONTENT-2026.08.R2` · schema 4.0.0 · **158 entries**, 36 types |
| Imaging release | `AWIBI-SCOUT-IMAGING-2026.08.R1` · **96 assets specified**, 12 drawn |
| Cards / checklists | 469 flashcards · 61 checklists · 823 items |

---

## Quick start

No login, no database, no API keys. Two commands:

```bash
npm install
npm run dev
```

- Client → http://localhost:5173
- API → http://localhost:5188/api

`npm run dev` runs both. To build and serve as one process:

```bash
npm run build && npm start     # http://localhost:5188
```

> **Windows note.** If `npm install` fails with `ERR_INVALID_ARG_TYPE` during esbuild's
> postinstall, run it from PowerShell or cmd rather than Git Bash — npm needs `ComSpec`
> set to spawn install scripts.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Client | React 18 + Vite, plain CSS custom properties | Small bundle, no runtime CSS cost, themes for free |
| Routing | react-router-dom | — |
| Server | Node 20 + Express, ESM | Boring and proven |
| Data | Immutable JSON release packages, loaded once at boot | See "Why no database" |
| 3D | three.js, dynamically imported only | Never in the main bundle |

### Bundle budget

The reference device is a mid-range Android, 4 GB RAM, on patchy 4G — not a MacBook.

| | Target | Actual |
|---|---|---|
| Initial JS + CSS (gzipped) | ≤ 180 KB | **74 KB** |
| Search keystroke → suggestions | ≤ 60 ms p95 | **0.5 ms p95** |
| Per Tier-1 diagram | 2–20 KB | 1.4–1.9 KB |
| three.js | not in main bundle | separate 194 KB chunk, on demand |

---

## Architecture

```
awibi-scout/
├── docs/
│   ├── PROJECT_MAP.md      every source file, what it is, whether it feeds the build
│   └── REQUIREMENTS.md     124 requirements, each tagged to its source
├── server/
│   ├── data/               the release packages (immutable, copied in)
│   └── src/
│       ├── data/repository.js   loads the corpus, joins it to the visual plan
│       ├── search/              the layered index and the resolution ladder
│       ├── calc/engine.js       closed-op logic-tree evaluator
│       └── routes/
└── client/src/
    ├── styles/tokens.css   design tokens, lifted from the shipped design source
    ├── pages/
    └── visuals/            ◀ the visual system
        ├── tier1/          12 hand-authored SVG diagrams
        ├── AnnotationOverlay.jsx
        ├── AnnotatedImage.jsx
        └── Model3DViewer.jsx
```

### Search — the seven-state resolution ladder

The founder's central demand was *"magical search through the data loop"* over an arbitrarily large
library. `.filter().includes()` is a prototype technique; this ranks.

Six index layers are built once at boot (~200 ms for 158 entries, 8,029 tokens):

| Layer | Structure | Fixes |
|---|---|---|
| L0 concept bridge | `Map<phrase, slug>`, O(1) | "blood drop", "how many pints", "set the drip" |
| L1 exact token | BM25F postings, k1=1.2 b=0.75 | primary retrieval |
| L2 prefix trie | trie over the vocabulary | "tetan" → tetanus, from keystroke 2 |
| L3 trigram | `Map<gram, Set<token>>`, Jaccard ≥ 0.30 | "transf", "ketoacid", "sulph" |
| L4 fuzzy | Damerau-Levenshtein, trie candidates only | "diabetis", "pnemonia" |
| L5 facet router | broad nouns + every entry type | "shock", "trial" never return empty |

Every query resolves into exactly one of seven named states, and each renders differently:

```
BRIDGE → EXACT → DISAMBIGUATE → NAVIGATE → SUBWORD → FUZZY → GAP
```

Two rules the ladder exists to enforce:

- **Scout never guesses.** `MI` means three things. It asks, and your word stays on screen as you typed it.
- **A gap is not a failure.** A term we do not carry is logged with a timestamp and becomes a content
  requirement. Three requests in a week promotes it. Patient data is never logged.

L3 is trigrammed over **tokens**, not entries — comparing a short query against an entry's whole gram set
can never clear Jaccard 0.30, which silently disables sub-word search. Body text is never trigrammed.

### Calculations

Closed op set — `add, sub, mul, div, pow, sum, var, const`. Anything else throws. There is no `eval` and no
path from content into code. Inputs are typed, dimensioned and range-checked; outputs are banded with an
interpretation and an action. **Warnings and limitations ride with every result** — they are part of the
answer, not decoration.

### The visual system

Five tiers, chosen by four questions — stop at the first yes:

1. Is the real-world **appearance** the thing being taught? → **Tier 3** photograph
2. Is it a **radiological** image? → **Tier 4** (real, never generated)
3. Does it change over **time or sequence**? → **Tier 2** animated SVG
4. Does understanding require **rotating it**? → **Tier 5** 3D (justify individually)

Otherwise **Tier 1 SVG**. If unsure, Tier 1. SVG carries 66% of the plan, which is correct, not a compromise.

**Hard rules enforced in code:**

- **No AI-generated radiological image ships. Ever.** A generated film contains plausible-looking,
  anatomically impossible findings, and a student who learns from it carries that error to a real patient.
- **MedPix and Radiopaedia are unusable.** MedPix is personal/local-teaching only and has moved to the ASNR;
  Radiopaedia is CC BY-NC-SA. They are the first two places a developer looks. Start at NIH BioArt instead.
- **`approved_for_release` stays false** until a named human ticks every QA box. The pipeline cannot set it.
- **Every asset must state `changes_what_a_clinician_does`.** If it is blank, the asset is decoration.

**The annotation model** — the highest-leverage decision in the whole visual system:

> The image is pixels. Everything a human reads is data rendered on top.

Annotations are an SVG overlay above the raster, in coordinates normalised 0–1 so they survive any resize,
device, zoom or future re-export. That single choice buys translation (one label object, N languages),
accessibility (a blind clinician can read the findings on a chest film), search, one-line corrections, and
**quiz mode for free** — hide the labels and the same asset is a teaching case.

**Tier 5 runtime rules:** three.js is dynamically imported only when a reader opens a model; the 2D fallback
is mandatory and renders first; the capability gate is `deviceMemory ≥ 2 && !saveData && WebGL2`, and when it
fails there is no error and no mention of 3D; geometry, materials **and** textures are disposed on unmount.

---

## API

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/health` · `/api/meta` | Liveness; boot payload (facets, placeholders, vocabulary) |
| GET | `/api/search?q=&emergency=&type=` | The resolution ladder |
| GET | `/api/suggest?q=` | As-you-type, from keystroke 2 |
| GET | `/api/search/gaps` | Queries that found nothing |
| GET | `/api/entries` · `/api/entries/grouped` · `/api/entries/:idOrSlug` | The library |
| POST | `/api/entries/:idOrSlug/calculate` | Run the logic tree |
| GET | `/api/cards` · `/api/checklists` | Flashcards and bedside checklists |
| GET | `/api/visuals` · `/api/visuals/spec` · `/api/visuals/gaps` | The 96-asset plan |
| GET | `/api/visuals/:assetId/annotations` | The overlay document |
| GET | `/api/governance` · `/api/short-forms` · `/api/conversions` | Sources, abbreviations, units |

---

## Environment

Every value has a working default; the app starts with no `.env`.

| Variable | Default | Meaning |
|---|---|---|
| `PORT` | `5188` | Server port |
| `NODE_ENV` | `development` | — |
| `CORS_ORIGIN` | *(all in dev)* | Comma-separated allowed origins |
| `DATA_DIR` | `server/data` | Where the release packages live |
| `LOG_LEVEL` | `info` | `error` · `warn` · `info` · `debug` |

---

## Two deliberate decisions

**Why no database.** Scout's content is a 158-entry immutable release with no accounts and no writes. Its
governance rule is explicit: *nothing already released is quietly edited — it is replaced*, which is a new
release file, not an `UPDATE`. A database would add an operational dependency and a failure mode to a product
whose whole value is working offline on a shared phone. The two things that do accumulate state are handled:
checklist ticks in `localStorage` (per the design — *"ticks are saved on this device"*), and zero-result
queries in an in-memory log at `/api/search/gaps`. Persisting those across restarts is when Postgres earns
its place; `data/repository.js` is the single seam to change.

**Why these design tokens.** Colours, type scale, spacing and the four-step risk palette are lifted verbatim
from the shipped design source, in both light and dark. They are the authority — a generic design system does
not override them. Every colour is a CSS custom property, which is what lets the Tier-1 diagrams theme
themselves with no second export.

---

## Honest status

- **0 of 158 entries carry a doctor's sign-off.** That gate is a human step, and the counter says so.
- **12 of 96 visual assets are drawn.** Every licence row still reads `TO BE CONFIRMED`, every reviewer
  `UNASSIGNED`. Tier 3/4/5 assets render as commissioning specifications, not fake placeholders.
- **107 of 158 entries have no visual**, ranked by hazard at `/visuals`.
- **The corpus has real gaps.** "snake bite" returns GAP and is logged — that is the design working, and it
  is also a content requirement.
