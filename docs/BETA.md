# BETA.md — Publishing and running the beta

## 1. Push to GitHub (needs your login — one time)

`gh` is installed (v2.96.0) but not authenticated. Authentication is interactive,
so it has to be you:

```bash
cd "C:\Users\USER\Desktop\AWIBI SCOUT\awibi-scout"

gh auth login          # choose GitHub.com → HTTPS → browser

gh repo create awibi-scout --private --source=. --remote=origin --push
```

That creates the repo, sets `origin`, and pushes `main` in one command.
The commit is already made and the working tree is clean.

### Inviting beta testers

```bash
gh repo edit --add-collaborator <github-username>
```

Or from the repo page → Settings → Collaborators.

### If you later decide to go public

```bash
gh repo edit --visibility public --accept-visibility-change-consequences
```

Do this only once at least one entry carries a clinical sign-off — see the
governance note at the end.

---

## 2. Running it

```bash
npm install
npm run dev
```

- App → http://localhost:5173
- API → http://localhost:5188/api

Single-process production mode:

```bash
npm run build && npm start      # http://localhost:5188
```

> **Windows note.** If `npm install` fails with `ERR_INVALID_ARG_TYPE` during
> esbuild's postinstall, run it from PowerShell or cmd rather than Git Bash —
> npm needs `ComSpec` set to spawn install scripts.

### Rebuilding content after editing an entry

```bash
npm run build:content --workspace server    # validates, then emits entries.v6.json
```

Restart the server. The build fails loudly on duplicate ids, duplicate slugs,
collisions with the base release, empty bodies, missing summaries and invalid
hazard levels.

---

## 3. What to ask beta testers to do

1. **Search for things you actually look up on shift.** Anything returning
   *"We don't carry that yet"* is logged automatically — visible at
   **Sources & updates → What people searched**. Tell us anyway.
2. **Report clinical content you think is wrong.** Quote the entry code
   (e.g. `AS-HAEM-0003`) — it is printed on every card.
3. **Use it on a real phone on real network.** That is the target device, not a
   laptop on wifi.
4. **Tell us where the wording is wrong for the ward.** The rule is *name it the
   ward way, then explain it once*.
5. **Anything with patient-safety implications** → `safety@learn.awibi.com`,
   looked at the same working day.

### What to tell them up front

> Awibi Scout is a reference tool for qualified professionals. It is not a
> diagnostic device. **No topic in this release carries a doctor's sign-off.**
> Drug doses are deliberately absent — use your formulary. Reference ranges vary
> by laboratory; entries marked *Confirm with your lab* mean exactly that.

---

## 4. Release status at beta

| | |
|---|---|
| Entries | 241 (158 base + 83 extension) |
| Flashcards | 886 |
| Checklists / items | 144 / 1,282 |
| Visual assets specified / drawn | 96 / 12 |
| **Entries with a clinical reviewer** | **0** |
| **Entries approved for release** | **0** |
| Search p95 (warm) | 0.76 ms |
| Initial JS + CSS (gzipped) | 74 KB |

Full audit: [AUDIT.md](AUDIT.md). Coverage by area: [CONTENT_COVERAGE.md](CONTENT_COVERAGE.md).

---

## 5. The governance gate — read before going public

`approved_for_release` is `false` and `clinical_reviewer` is `null` on all 241
entries. The build sets both unconditionally; neither is configurable from the
authored source. **The pipeline cannot approve clinical content.**

Clearing that gate is a human process, per entry:

1. A named clinician reviews the entry against its sources.
2. Their name and the date are recorded in the manifest.
3. Every box in the QA checklist is ticked.

Until that has happened for an entry, it should be read as a well-organised
draft — which is precisely what beta testing is for.

---

## 6. Next steps after beta

- Assign clinical reviewers — this is the long-lead item and gates everything.
- Persist the gap log (currently in memory, lost on restart) so the 7-day review
  cadence works across restarts.
- Wire the contact form to a real inbox. It currently states plainly that it
  cannot deliver, rather than swallowing messages.
- Commission Wave 1 of the visual plan: the 24 Tier-1 SVGs need no licence
  negotiation, and the 6 skin-tone photographs are the highest clinical value
  per naira in the whole plan.
- Map the 83 extension entries to visual assets.
