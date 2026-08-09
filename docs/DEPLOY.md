# DEPLOY.md — Hosting Awibi Scout

**Short answer: you need ONE host, not two. Render (or any Node host) is enough.
Vercel alone will not run this app as it is built.**

---

## 1. Why one host is enough

Scout is a **single Node process**. The Express server does two jobs at once:

```
server/src/index.js
  ├── /api/*        the JSON API (search, entries, calculators, visuals)
  └── /*            serves client/dist — the built React app, with SPA fallback
```

That is why `npm start` gives you the whole product on `http://localhost:5188`.
There is no separate frontend server to deploy.

So the deployment is: **build the client, start the server, point a domain at it.**

---

## 2. Render — the recommended route

Render runs a long-lived Node process, which is exactly what this needs.

### One-time setup

1. Push the repo to GitHub (see §5).
2. Go to **render.com → New → Web Service** and connect the repository.
3. Fill in:

| Field | Value |
|---|---|
| Environment | **Node** |
| Region | pick the one closest to your users |
| Branch | `master` |
| Build command | `npm install && npm run build` |
| Start command | `npm start` |
| Instance type | Free works for beta; Starter avoids cold-start sleeping |

4. **Environment variables** — add these under *Environment*:

| Key | Value | Why |
|---|---|---|
| `NODE_ENV` | `production` | Enables production logging and static serving |
| `NODE_VERSION` | `20` | The app is built and tested on Node 20 |

Do **not** set `PORT`. Render injects it, and the server already reads
`process.env.PORT`.

5. Deploy. Render gives you `https://<name>.onrender.com`.

### The free-tier caveat, stated plainly

A free Render service **sleeps after 15 minutes of inactivity** and takes
roughly 30–60 seconds to wake. For a clinical reference someone opens mid-shift,
that is a bad first impression. If real people are going to rely on it, use the
paid Starter tier. For invited beta testers, free is fine — just tell them.

---

## 3. Vercel — what it can and cannot do here

Vercel is built for static frontends plus **serverless functions**. It does not
run a persistent Node server.

**As the code stands today, deploying to Vercel will not work**, because:

- The server builds the whole search index **in memory at boot** (309 entries,
  six index layers). Serverless functions are cold-started per request, so that
  index would be rebuilt constantly — slow, and it defeats the 60 ms p95 budget
  the app was designed around.
- The in-memory gap log would reset on every invocation.

You have two honest options if you want Vercel:

**Option A — split the app (more work, more moving parts)**
- Frontend (`client/dist`) → Vercel
- API (`server/`) → Render / Railway / Fly
- Set `VITE_API_BASE` on Vercel to the API URL, and enable CORS for the Vercel
  origin on the server. Both must then be kept in sync on every release.

**Option B — just use Render.** One service, one URL, no CORS, no drift.

**Recommendation: Option B.** Splitting buys you nothing here — there is no
heavy frontend build, no ISR, no edge rendering. It only adds a second thing
that can break.

---

## 4. Other hosts that work unchanged

Anything that runs a long-lived Node process:

- **Railway** — same shape as Render, `npm run build` / `npm start`
- **Fly.io** — good if you want it close to African users; add a `Dockerfile`
- **A plain VPS** — `npm ci && npm run build && npm start` behind nginx, with
  `pm2` or a systemd unit to keep it alive
- **Any Docker host** — the app needs no database, no Redis, no volumes

### Minimal Dockerfile, if you want one

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 5188
CMD ["npm", "start"]
```

---

## 5. Pushing to GitHub

```bash
cd "C:\Users\USER\Desktop\AWIBI SCOUT\awibi-scout"

git remote add origin https://github.com/doctorpentagon/Awibi_Scout.git
git branch -M master
git push -u origin master
```

If the remote already exists, replace the first line with:

```bash
git remote set-url origin https://github.com/doctorpentagon/Awibi_Scout.git
```

---

## 6. Before you point real users at it

The app is technically deployable today. These are not blockers for a beta with
invited testers, but they are blockers for general release:

- [ ] **No entry carries a clinical sign-off.** 0 of 309. Anyone reading it must
      be told that. The banner already says so — do not remove it.
- [ ] **The gap log is in memory** and is lost on restart or redeploy. On a free
      tier that sleeps, you will lose the record of what people searched for and
      did not find — which is the single most valuable beta signal. Persist it
      before you rely on it.
- [ ] **The contact form has no inbox.** It states this honestly rather than
      swallowing messages, but nobody is receiving anything.
- [ ] **No rate limiting** on the API. Fine behind an invite; not fine public.
- [ ] **No analytics or error reporting.** You will not know if it breaks for
      someone.

---

## 7. What it costs

| Host | Free tier | Realistic paid |
|---|---|---|
| Render | Yes, sleeps after 15 min | ~$7/mo Starter |
| Railway | Trial credit | usage-based |
| Fly.io | Small free allowance | usage-based |
| VPS | No | ~$5/mo |

No database, no object storage, no queue — the whole app is a Node process and
a folder of JSON. That is deliberate, and it is why hosting is this cheap.
