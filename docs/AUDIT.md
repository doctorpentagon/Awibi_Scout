# AUDIT.md — Beta Release Audit

**Run:** 7 August 2026 · commit at time of audit · Node 20.16.0, Windows 11
**Verdict:** **PASS for beta testing.** No blockers. Known limitations listed in §D.

---

## A. Build

| Check | Result |
|---|---|
| Content build + validation | **PASS — 83 entries, 0 errors** |
| Client production build | **PASS** — 6.8 s |
| Server boot | **PASS** — library + index built at boot |

Validation is not cosmetic: it rejects duplicate ids, duplicate slugs, collisions with the base release, empty bodies, missing summaries and invalid hazard levels. It caught 3 real id collisions and 1 syntax error during this build.

---

## B. API — 18/18 endpoints returning 200

`health` · `meta` · `search` · `suggest` · `search/gaps` · `entries` · `entries/grouped` · `entries/:id` · `entries/:id/calculate` · `cards` · `checklists` · `visuals` · `visuals/spec` · `visuals/gaps` · `visuals/:id` · `visuals/:id/annotations` · `governance` · `short-forms` · `conversions`

**Failures: 0**

---

## C. Data

| Metric | Value |
|---|---|
| Entries | **241** (158 base + 83 extension) |
| Flashcards | 886 |
| Checklists / items | 144 / 1,282 |
| Visual assets specified | 96 |
| Missing summary | **0** |
| Missing title | **0** |
| Invalid hazard value | **0** |
| Duplicate ids | **0** |
| Duplicate slugs | **0** |

---

## D. Search

68 queries covering every newly built area:

**68 resolved · 0 false gaps**

Includes: cholecystitis, Murphy sign, Charcot triad, McBurney, melaena, tinea, ringworm, psoriasis, versicolor, pityriasis rosea, cellulitis, necrotising fasciitis, whitlow, spondylolisthesis, scoliosis, genu valgum, septic arthritis, gout, otitis externa, cholesteatoma, visual acuity, perimetry, fundoscopy, Gram stain, PCR, iatrogenic, nosocomial, splenectomy, gravida, GTPAL, MUAC, NSAID, triple whammy, rifampicin, ethambutol, neutropenic sepsis, checkpoint inhibitor, chest pain, breathlessness, jaundice, fibrosis, cirrhosis, cystic fibrosis, amyloidosis, cystic hygroma, metaplasia, dysplasia, heart failure, CHA2DS2, asthma, COPD, nephron, nephrotic, nephritic, loop of Henle, Fanconi.

### Latency (warm, n=52)

| | |
|---|---|
| p50 | **0.14 ms** |
| p95 | **0.76 ms** |
| max | **1 ms** |

Budget is 60 ms p95 to suggestions. Running **79× inside it**.

### Resolution ladder — all 8 states verified

| Query | State |
|---|---|
| `drip rate` | BRIDGE |
| `tetanus` | EXACT |
| `MI` | DISAMBIGUATE (never guesses) |
| `shock` | NAVIGATE |
| `transf` `ketoacid` `sulph` | SUBWORD |
| `diabetis` `pnemonia` | FUZZY |
| `coombs` `esr` | PARTIAL |
| `pheochromo` `xyzzyplork` | GAP + logged |

---

## E. Calculation engine

| Input | Result |
|---|---|
| 70 kg / 1.75 m | 200 → 22.9 kg/m² → "Normal range" |
| 45 kg / 1.80 m | 200 → 13.9 kg/m² → "Severe thinness" |
| 9999 kg (out of range) | **400 — correctly rejected** |
| Missing height | **400 — correctly rejected** |

Closed op set (`add, sub, mul, div, pow, sum, var, const`). No `eval`. Warnings and limitations returned with every result.

---

## F. Governance gate

| Check | Result |
|---|---|
| Visual assets with `approved_for_release: true` | **0** ✅ |
| Entries signed off by a doctor | **0** ✅ |
| Entries with a named clinical reviewer | **0** ✅ |

The build sets `approved_for_release: false` and `clinical_reviewer: null` unconditionally. Neither is configurable from authored source. **The pipeline cannot approve clinical content.**

---

## G. Front end

| Check | Result |
|---|---|
| Initial JS + CSS (gzipped) | **74 KB** against a 180 KB budget |
| three.js in main bundle | **No** — separate 194 KB chunk, dynamic import only |
| Per Tier-1 diagram | 1.4–1.9 KB (budget 2–20 KB) |
| Route-level code splitting | Yes — 8 lazy routes |
| Light + dark themes | Both, via CSS custom properties |
| SPA deep links | 200 |

---

## H. Bugs found and fixed during this build

1. **Trigram layer was entry-level** — mathematically incapable of clearing Jaccard 0.30, so sub-word search silently never fired. Rebuilt over tokens.
2. **v4 entry types missing from the L5 router** — `trial` (49 entries) fell through instead of navigating.
3. **Exact matches outranked by fuzzy hits** — `hyperkalaemia` returned a generic index. Added damping + exact-match priority.
4. **GAP discarded valid results** — `coombs` scored 0.610 against the 0.62 gate and was reported as "we don't carry that" while the entry existed. This was the most serious: it is the exact failure the ladder exists to prevent. Added the `PARTIAL` state; GAP now means genuinely zero candidates.
5. **`foreignObject` in a Tier-1 diagram** — broke the real-`<text>` rule and renders inconsistently. Replaced with tspan wrapping.
6. **Overlapping legend rows** in the nephron diagram (`Math.floor(i/2) * 0`).
7. **3 id collisions** with the base release — caught by the build, which refused to emit.
8. **Numeric-literal object key** (`5_fluorouracil`) — caught by the build.

---

## I. Known limitations for beta testers

These are **deliberate and documented**, not defects:

- **No content is clinically approved.** 0 of 241 entries carry a doctor's sign-off. This is a reference tool for qualified professionals, not a diagnostic device.
- **No drug doses.** Deliberately excluded — they vary by formulary, indication and country. Entries name the drug and the decision.
- **12 of 96 visual assets are drawn.** Tier 3/4/5 render as commissioning specifications, never as fake placeholders. Every licence still reads `TO BE CONFIRMED`.
- **No authentication.** By design for beta — Scout is read-only reference with no per-user data.
- **Gap log is in-memory.** Zero-result queries survive until server restart. Persisting them is Phase 2.
- **The contact form has no inbox.** It says so and routes to a real email address rather than silently swallowing messages.
- **107 of 158 base entries have no visual**, and the 83 extension entries are not yet mapped to visuals.

---

## J. What beta testers should be asked to do

1. Search for things you actually look up on shift. Report anything that returns **GAP** — it is logged automatically at `/api/sources` → "What people searched", but tell us too.
2. Report any clinical content you believe is **wrong**. Quote the entry code (e.g. `AS-HAEM-0003`) — it is on every card.
3. Try it on a **real phone on real network**, not a desktop. That is the target device.
4. Tell us where the **wording** is wrong for the ward — the language rule is "name it the ward way, then explain it once".
5. Anything with **patient-safety implications** goes to `safety@learn.awibi.com` the same working day.
