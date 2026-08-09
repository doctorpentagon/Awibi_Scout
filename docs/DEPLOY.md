# DEPLOY.md — Hosting Awibi Scout

## The short answer

| Question | Answer |
|---|---|
| Is it frontend only? | **No.** Frontend **and** backend. |
| Does it need a database? | **No.** Do not create one. |
| How many hosts do I need? | **One.** |
| Which host? | **Render** (Web Service). |
| Can I use Vercel? | Only for the frontend, and only with a split setup. It cannot run the backend. |

---

## 1. What this app actually is

Verified from the code, not assumed:

```
client/           React 18 + Vite    -> builds to static files in client/dist
server/           Node 20 + Express  -> serves /api  AND  serves client/dist
server/data/*.json  ~2.6 MB of content, read into memory at boot
```

**Server dependencies, in full:** `express`, `cors`, `helmet`, `compression`,
`morgan`. That is the entire list.

- **No database driver** of any kind — no Postgres, MySQL, Mongo, SQLite, Prisma or Redis.
- **The server never writes to disk at runtime.** Nothing is persisted.
- All content lives as **JSON files committed to the repository** and is loaded
  into memory when the process starts.

So it is a **two-part app with no database**: a React frontend and a Node
backend, where the backend also serves the frontend. `npm start` gives you the
whole product on one URL.

### Do you need Render's PostgreSQL?

**No. Do not create it.** There is nothing to put in it. It would cost money and
sit empty.

You would only need a database when you add something that must **survive a
restart**. Right now the only candidate is the **search gap log** (what people
searched for and did not find), which is currently in memory and is lost on
every restart or redeploy. That is the first genuine reason you will ever have
to add storage — and even then a small managed Postgres or a file-backed store
would do.

---

## 2. Render — the recommended route (works today, no code changes)

### Step by step

1. Go to **render.com** → sign in with GitHub → **New +** → **Web Service**.
2. Connect the repository **doctorpentagon/Awibi_Scout**. Authorise Render if asked.
3. Fill in the form:

| Field | Value |
|---|---|
| Name | `awibi-scout` |
| Region | closest to your users |
| Branch | `master` |
| Root Directory | *(leave blank)* |
| Runtime | **Node** |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Instance Type | Free to start |

4. Click **Advanced** → **Add Environment Variable**:

| Key | Value |
|---|---|
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `20` |

**Do not set `PORT`.** Render injects it and the server already reads
`process.env.PORT`. Setting it yourself will break the health check.

5. **Create Web Service.** First build takes a few minutes.
6. You get `https://awibi-scout.onrender.com`. That single URL serves the app
   and the API. Nothing else to configure.

### Redeploying

Render watches the branch. `git push origin master` triggers a new deploy.

### The free-tier caveat, stated plainly

A free Render service **sleeps after 15 minutes of inactivity** and takes
roughly 30–60 seconds to wake. For someone opening a clinical reference
mid-shift, that is a bad first impression. Free is fine for invited testers if
you warn them. If real clinicians will depend on it, use the paid Starter tier
(~$7/month).

### Optional environment variables

| Key | Purpose |
|---|---|
| `CORS_ORIGIN` | Comma-separated origins to allow. Only needed for a split setup. |
| `LOG_LEVEL` | `debug`, `info`, `warn`, `error` |
| `DATA_DIR` | Point at a different content folder |

---

## 3. Vercel — what it can and cannot do

**Vercel cannot host the backend as written.** It runs serverless functions,
not a long-lived process. The server builds its **six-layer search index in
memory at boot** (312 entries). Serverless would rebuild that index on cold
starts, which destroys the latency the app is designed around, and the in-memory
gap log would reset constantly.

So Vercel is only an option for the **frontend**, with the API somewhere else.

### The split setup, step by step

You need **both** hosts. Deploy the API first.

**Step 1 — API on Render.** Follow §2. Note the URL, e.g.
`https://awibi-scout-api.onrender.com`.

**Step 2 — Allow the Vercel origin on the API.** In Render → Environment, add:

```
CORS_ORIGIN = https://your-project.vercel.app
```

Without this the browser blocks every request and the app will look broken with
no obvious cause.

**Step 3 — Frontend on Vercel.**

1. **vercel.com** → **Add New** → **Project** → import `doctorpentagon/Awibi_Scout`.
2. Configure:

| Field | Value |
|---|---|
| Framework Preset | **Vite** |
| Root Directory | **`client`** |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

3. **Environment Variables** — add:

| Key | Value |
|---|---|
| `VITE_API_BASE` | `https://awibi-scout-api.onrender.com/api` |

This is read at **build time**, so changing it later requires a **redeploy**,
not just a restart.

4. Deploy.

**Step 4 — SPA routing.** Deep links such as `/entry/AS-THYR-0001` must serve
`index.html`. Vercel's Vite preset usually handles this; if you get a 404 on a
deep link, add `client/vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### What the split costs you

- Two services to deploy, monitor and keep in version-sync.
- CORS to maintain.
- A Vercel build that is stale until you redeploy after changing the API URL.
- Slightly slower first paint, since the API is on another origin.

**It buys you nothing here.** There is no heavy frontend build, no ISR, no edge
rendering, no image optimisation in play. **Use Render alone unless you have a
specific reason not to.**

---

## 4. Other hosts that work with no changes

Anything that runs a persistent Node process: **Railway**, **Fly.io** (good for
African latency), **Koyeb**, or a **plain VPS** with `pm2` or systemd behind
nginx.

### Dockerfile, if you want one

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

## 5. Before real users see it

Deployable today. Not blockers for invited beta testers; genuine blockers for
general release:

- [ ] **No entry carries a clinical sign-off.** 0 of 312. The banner says so — leave it.
- [ ] **The gap log is in memory** and is lost on every restart. On a sleeping free tier you will lose the single most valuable beta signal. This is the first thing that will justify a database.
- [ ] **The contact form has no inbox.** It says so honestly, but nobody receives anything.
- [ ] **No rate limiting** on the API. Fine behind an invite; not fine public.
- [ ] **No error reporting or analytics.** You will not know when it breaks for someone.
- [ ] **The repository is public.** The content is readable by anyone. `gh repo edit --visibility private` if that is not what you want.

---

## 6. Cost

| Host | Free | Paid |
|---|---|---|
| Render Web Service | Yes, sleeps after 15 min | ~$7/mo Starter |
| Render PostgreSQL | **not needed** | **do not buy** |
| Vercel (frontend only) | Generous hobby tier | — |
| Fly.io / Railway | Small allowance | usage-based |
| VPS | No | ~$5/mo |

No database, no object storage, no queue, no cache server. The whole app is one
Node process and a folder of JSON. That is deliberate, and it is why this is
cheap to run.
