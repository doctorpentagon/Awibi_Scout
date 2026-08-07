import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading, PageHead, RiskBadge } from '../components/ui.jsx';
import './library.css';

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

  return (
    <div className="library">
      <PageHead title="Browse everything">
        Every topic grouped by clinical area. {data.total} entries in this release — open an area to see what
        is inside it.
      </PageHead>

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
