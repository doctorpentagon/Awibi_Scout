import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading, PageHead, RiskBadge } from '../components/ui.jsx';
import './library.css';

/**
 * The navigational index entries, in the order the design specifies rather than
 * alphabetically — the broad clinical questions come before the narrow ones.
 * Listed by id so that renaming an entry cannot silently drop it from the grid.
 */
const INDEX_IDS = [
  'AS-NAMK-0002', // Syndrome
  'AS-NAMK-0003', // Shock (navigational)
  'AS-NAMK-0004', // Examination
  'AS-NAMK-0005', // Investigation and test
  'AS-NAMK-0006', // Calculator and scoring
  'AS-NAMK-0007', // Guideline and management principles
  'AS-NAMK-0008', // Instrument, equipment and colour code
  'AS-NAMK-0009', // Oncology
  'AS-NAMK-0010', // Drug and brand
  'AS-NAMK-0011', // Electrolyte and channel
  'AS-NAMK-0012', // Hormone
  'AS-NAMK-0013', // Monitoring
];

export function LibraryPage() {
  const { data, error, loading, refetch } = useApi((signal) => api.entriesGrouped(signal), []);
  const [open, setOpen] = useState(() => new Set());

  if (loading && !data) return <Loading label="Loading the library…" />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!data) return null;

  const toggle = (area) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });

  // The navigational indexes are the twelve doors into the library — "which
  // scores exist", "what counts as shock". They already existed as entries but
  // were buried inside their clinical area, so the one thing the Library is for
  // was the hardest thing to find. Surfaced here, ordered as authored.
  const startHere = data.groups
    .flatMap((g) => g.entries)
    .filter((e) => INDEX_IDS.includes(e.id))
    .sort((a, b) => INDEX_IDS.indexOf(a.id) - INDEX_IDS.indexOf(b.id));

  return (
    <div className="library">
      <PageHead title="Browse everything">
        {startHere.length} starting points for the big questions — which scores exist, what to do in an
        emergency. Under them, all {data.total} topics grouped by area.
      </PageHead>

      {startHere.length > 0 && (
        <section className="start-here" aria-labelledby="start-here-h">
          <h2 className="start-here-label" id="start-here-h">
            Start here
          </h2>
          <ul className="start-here-grid">
            {startHere.map((e) => (
              <li key={e.id}>
                <Link to={`/entry/${e.slug}`} className="start-here-card">
                  <span className="start-here-title">{e.title}</span>
                  <span className="start-here-summary">{e.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="library-groups">
        {data.groups.map((g) => {
          const isOpen = open.has(g.area);
          return (
            <section className="library-group" key={g.area}>
              <button
                type="button"
                className="library-group-head"
                onClick={() => toggle(g.area)}
                aria-expanded={isOpen}
                aria-controls={`grp-${g.area}`}
              >
                <span className="library-group-title">
                  {g.label} <span className="muted library-group-count">{g.count} topics</span>
                </span>
                <span className="library-group-toggle">{isOpen ? 'Hide' : 'Show'}</span>
              </button>

              {isOpen && (
                <ul className="library-list" id={`grp-${g.area}`}>
                  {g.entries.map((e) => (
                    <li key={e.id}>
                      <Link to={`/entry/${e.slug}`} className="library-row">
                        <RiskBadge level={e.hazard} />
                        <span className="library-row-title">{e.title}</span>
                        <span className="muted library-row-type">{label(e.type)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function label(type) {
  return String(type || '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
