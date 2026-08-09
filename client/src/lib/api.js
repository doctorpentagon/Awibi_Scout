/**
 * API client. One place that knows how to talk to the server, so every screen
 * gets the same error shape and the same caching behaviour.
 *
 * Offline is a first-class state, not an error: on a network failure we serve
 * the last good response for that URL if we have one, and say so.
 */

/**
 * Where the API lives.
 *
 * Default is a same-origin relative path, because the Express server serves
 * both the API and this bundle — one origin, no CORS, nothing to configure.
 *
 * Set VITE_API_BASE at BUILD time only if you are hosting the frontend
 * separately from the API (for example the client on Vercel and the server on
 * Render). The server must then allow that origin via its CORS_ORIGIN
 * environment variable, or every request will be blocked by the browser.
 */
const BASE = (import.meta.env?.VITE_API_BASE || '/api').replace(/\/$/, '');

/** Successful GET responses, kept for the session. Also the offline fallback. */
const cache = new Map();

export class ApiError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
    this.offline = status === 0;
  }
}

async function request(path, { signal, method = 'GET', body } = {}) {
  const url = `${BASE}${path}`;

  try {
    const res = await fetch(url, {
      method,
      signal,
      headers: body ? { 'content-type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
      throw new ApiError(res.status, data?.error?.message || `Request failed (${res.status})`, data?.error?.details);
    }

    if (method === 'GET') cache.set(url, data);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') throw err;
    if (err instanceof ApiError) throw err;

    // Network-level failure. Never show a blank box — fall back to cache.
    if (method === 'GET' && cache.has(url)) {
      const cached = cache.get(url);
      return { ...cached, __stale: true };
    }
    throw new ApiError(0, 'No connection, and nothing saved on this device yet.');
  }
}

const qs = (params) => {
  const s = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== null && v !== undefined && v !== ''),
  ).toString();
  return s ? `?${s}` : '';
};

export const api = {
  meta: (signal) => request('/meta', { signal }),

  search: (params, signal) => request(`/search${qs(params)}`, { signal }),
  suggest: (q, signal) => request(`/suggest${qs({ q })}`, { signal }),
  searchGaps: (signal) => request('/search/gaps', { signal }),

  entries: (params, signal) => request(`/entries${qs(params)}`, { signal }),
  entriesGrouped: (signal) => request('/entries/grouped', { signal }),
  entry: (idOrSlug, signal) => request(`/entries/${encodeURIComponent(idOrSlug)}`, { signal }),
  calculate: (idOrSlug, inputs, signal) =>
    request(`/entries/${encodeURIComponent(idOrSlug)}/calculate`, { method: 'POST', body: { inputs }, signal }),

  cards: (deck, signal) => request(`/cards${qs({ deck })}`, { signal }),
  checklists: (signal) => request('/checklists', { signal }),

  visuals: (params, signal) => request(`/visuals${qs(params)}`, { signal }),
  visual: (assetId, signal) => request(`/visuals/${encodeURIComponent(assetId)}`, { signal }),
  visualSpec: (signal) => request('/visuals/spec', { signal }),
  visualGaps: (signal) => request('/visuals/gaps', { signal }),
  annotations: (assetId, signal) => request(`/visuals/${encodeURIComponent(assetId)}/annotations`, { signal }),

  governance: (signal) => request('/governance', { signal }),
  shortForms: (signal) => request('/short-forms', { signal }),
  conversions: (signal) => request('/conversions', { signal }),
};
