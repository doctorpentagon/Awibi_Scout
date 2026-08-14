import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import './read.css';

/**
 * Read the library in order.
 *
 * Search only finds what you can already name. In a library this size, the
 * entries you have never heard of are exactly the ones worth meeting — so this
 * page presents the whole thing as an ordered book with a position you can
 * keep, leave and come back to.
 */

const STORAGE_KEY = 'awibi-scout:reading-position';

export default function ReadPage() {
  const { position } = useParams();
  const navigate = useNavigate();
  const [toc, setToc] = useState(null);
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // No position in the URL means the table of contents.
  const showToc = !position;

  useEffect(() => {
    let cancelled = false;
    api.readToc()
      .then((d) => { if (!cancelled) setToc(d); })
      .catch((e) => { if (!cancelled) setError(e); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (showToc) { setPage(null); return undefined; }
    let cancelled = false;
    setLoading(true);
    setError(null);
    api.readAt(position)
      .then((d) => {
        if (cancelled) return;
        setPage(d);
        // Remember where they got to, so "resume" is honest rather than a guess.
        try { localStorage.setItem(STORAGE_KEY, String(d.position)); } catch { /* private mode */ }
      })
      .catch((e) => { if (!cancelled) setError(e); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [position, showToc]);

  const go = useCallback((n) => { if (n) navigate(`/read/${n}`); }, [navigate]);

  // Arrow keys move between entries — this is a reading interface, so it should
  // behave like one.
  useEffect(() => {
    if (showToc || !page) return undefined;
    const onKey = (e) => {
      if (e.target.matches('input, textarea, select')) return;
      if (e.key === 'ArrowRight' && page.next) go(page.next.position);
      if (e.key === 'ArrowLeft' && page.previous) go(page.previous.position);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page, showToc, go]);

  let resume = null;
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved > 0) resume = saved;
  } catch { /* ignore */ }

  if (error) {
    return (
      <div className="read-page">
        <p className="read-error">
          {error.offline ? 'You are offline and this position is not cached.' : 'Could not load the reading order.'}
        </p>
      </div>
    );
  }

  // ---- table of contents ----
  if (showToc) {
    if (!toc) return <div className="read-page"><p className="muted">Loading the contents…</p></div>;
    return (
      <div className="read-page">
        <header className="read-head">
          <h1>Read the whole library</h1>
          <p className="read-intro">
            Every entry, in a teaching order — foundations before diseases, and the
            dangerous material early. {toc.total} entries. Search finds what you can
            already name; this is for everything else.
          </p>
          <div className="read-actions">
            <Link className="read-btn read-btn-primary" to="/read/1">Start at the beginning</Link>
            {resume && resume > 1 && (
              <Link className="read-btn" to={`/read/${resume}`}>Resume at {resume}</Link>
            )}
          </div>
        </header>

        <ol className="read-parts">
          {toc.parts.map((p) => (
            <li key={p.key} className="read-part">
              <div className="read-part-head">
                <h2>{p.title}</h2>
                <span className="read-part-count">{p.count}</span>
              </div>
              <p className="read-part-blurb">{p.blurb}</p>
              <ul className="read-chapters">
                {p.chapters.map((ch) => (
                  <li key={ch.key}>
                    <Link to={`/read/${ch.start}`}>
                      <span className="read-ch-title">{ch.title}</span>
                      <span className="read-ch-meta">{ch.count} · from {ch.start}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // ---- a single position ----
  if (loading || !page) return <div className="read-page"><p className="muted">Loading…</p></div>;

  const { entry } = page;
  const pct = Math.round((page.position / page.total) * 100);

  return (
    <div className="read-page read-reader">
      <nav className="read-bar" aria-label="Reading position">
        <Link to="/read" className="read-bar-toc">Contents</Link>
        <div className="read-bar-where">
          <span className="read-bar-part">{page.part?.title}</span>
          <span className="read-bar-chapter">
            {page.chapter?.title} · {page.positionInChapter} of {page.chapter?.count}
          </span>
        </div>
        <span className="read-bar-pos">{page.position} / {page.total}</span>
      </nav>

      <div className="read-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}
           aria-label={`${pct}% through the library`}>
        <div className="read-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <article className="read-entry">
        <h1>{entry.title}</h1>
        <p className="read-summary">{entry.summary}</p>
        <Link className="read-btn read-btn-primary" to={`/entry/${entry.slug || entry.id}`}>
          Open the full entry
        </Link>
      </article>

      <nav className="read-nav" aria-label="Move through the library">
        <button type="button" className="read-btn" disabled={!page.previous}
                onClick={() => go(page.previous?.position)}>
          ← Previous
        </button>
        <button type="button" className="read-btn read-btn-primary" disabled={!page.next}
                onClick={() => go(page.next?.position)}>
          Next →
        </button>
      </nav>
      <p className="read-hint">Arrow keys also move between entries.</p>
    </div>
  );
}
