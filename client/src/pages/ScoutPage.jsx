import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi, useDebounced } from '../hooks/useApi.js';
import { ErrorState, Loading, RiskBadge, StaleNote, TimeCritical } from '../components/ui.jsx';
import './scout.css';

/**
 * The search screen.
 *
 * Every one of the seven resolution states renders differently and says which
 * state it is. Scout never guesses, and a gap is reported as a gap — the one
 * thing it must never do is show an empty box and let the clinician wonder
 * whether they typed it wrong.
 */
export function ScoutPage({ query, onQuery, emergency, meta }) {
  const [type, setType] = useState(null);
  const debounced = useDebounced(query, 140);

  const { data, error, loading, refetch } = useApi(
    (signal) => api.search({ q: debounced, emergency, type, limit: 60 }, signal),
    [debounced, emergency, type],
  );

  const tabs = useMemo(() => {
    const types = meta?.facets?.types || [];
    return [{ key: null, label: 'Everything', n: meta?.entryCount }, ...types.filter((t) => t.n > 0)];
  }, [meta]);

  return (
    <div className="scout">
      <div className="tabs" role="tablist" aria-label="Filter by type">
        {tabs.map((t) => (
          <button
            key={t.key ?? 'all'}
            role="tab"
            aria-selected={type === t.key}
            className={`tab${type === t.key ? ' is-active' : ''}`}
            onClick={() => setType(t.key)}
          >
            {t.label}
            {t.n != null && t.key != null && <span className="tab-n"> · {t.n}</span>}
          </button>
        ))}
      </div>

      {data?.__stale && <StaleNote />}

      {data && <Resolution result={data} onQuery={onQuery} />}

      <div className="results-card">
        <div className="results-toolbar">
          <span className="results-count">
            <strong>{data?.total ?? '—'}</strong>
            <span className="muted"> {data?.total === 1 ? 'topic' : 'topics'}</span>
          </span>
          <span className="faint results-rank">
            {emergency ? 'Time-critical first, then risk' : 'Ordered by risk, then title'}
          </span>
          {data?.took_ms != null && (
            <span className="mono results-took" title="Server time for this query">
              {data.took_ms} ms
            </span>
          )}
        </div>

        {loading && !data && <Loading note="Tokenising the release package into an inverted index. This happens once." />}
        {error && <ErrorState error={error} onRetry={refetch} />}

        {data && data.results.length > 0 && (
          <table className="results">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Topic</th>
                <th scope="col" className="col-type">
                  Type
                </th>
                <th scope="col" className="col-risk">
                  Risk
                </th>
                <th scope="col">
                  <span className="sr-only">Open</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.results.map((r) => (
                <ResultRow key={r.id} row={r} />
              ))}
            </tbody>
          </table>
        )}

        {data && data.results.length === 0 && data.state !== 'GAP' && data.state !== 'DISAMBIGUATE' && (
          <div className="results-empty muted">Nothing to list for this filter.</div>
        )}
      </div>
    </div>
  );
}

function ResultRow({ row }) {
  const c = row.counts;
  return (
    <tr>
      <td className="mono col-code">{row.id}</td>
      <td className="col-topic">
        <div className="topic-title-row">
          <Link to={`/entry/${row.slug}`} className="topic-title">
            {row.title}
          </Link>
          {row.flags.timeCritical && <TimeCritical />}
        </div>
        <p className="topic-summary">{row.summary}</p>
        <div className="topic-chips">
          {c.checkboxes > 0 && <span className="tag">{c.checkboxes}-step checklist</span>}
          {c.flashcards > 0 && <span className="tag">{c.flashcards} cards</span>}
          {row.flags.hasCalculator && <span className="tag">Calculator</span>}
          {c.visuals > 0 && <span className="tag">{c.visuals} picture spec</span>}
          {row.flags.nigeriaNote && <span className="tag">Nigeria note</span>}
          {row.flags.confirmLocally && <span className="tag">Confirm locally</span>}
        </div>
      </td>
      <td className="col-type muted">{label(row.type)}</td>
      <td className="col-risk">
        <RiskBadge level={row.hazard} />
      </td>
      <td className="col-open">
        <Link to={`/entry/${row.slug}`} className="btn btn-primary open-btn">
          Open
        </Link>
      </td>
    </tr>
  );
}

/** The banner that names which of the seven states answered this query. */
function Resolution({ result, onQuery }) {
  const { state } = result;

  if (state === 'BRIDGE' && result.target) {
    return (
      <div className="banner banner-blue">
        <div className="mono banner-eyebrow">DIRECT MATCH</div>
        <div className="banner-title">{result.target.title}</div>
        <p className="banner-note">
          “{result.term}” is a phrase Scout recognises — it goes straight to this entry.
        </p>
        <Link to={`/entry/${result.target.slug}`} className="btn btn-primary">
          Open the entry
        </Link>
      </div>
    );
  }

  if (state === 'DISAMBIGUATE') {
    return (
      <div className="banner banner-accent">
        <div className="banner-title">{result.message}</div>
        <p className="banner-note">{result.note}</p>
        <div className="banner-chips">
          {result.options.map((o) => (
            <button key={o.label} type="button" className="chip" onClick={() => onQuery(o.query)}>
              {o.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (state === 'NAVIGATE') {
    return (
      <div className="banner banner-blue">
        <div className="mono banner-eyebrow">BROAD QUERY · OPEN AN INDEX</div>
        <div className="banner-title">{result.hub.title}</div>
        <p className="banner-note">
          “{result.term}” covers {result.total} entries. They are listed below, most relevant first.
        </p>
      </div>
    );
  }

  if (state === 'PARTIAL') {
    return (
      <div className="banner banner-accent">
        <div className="banner-title">{result.message}</div>
        <p className="banner-note">{result.note}</p>
      </div>
    );
  }

  if (state === 'SUBWORD') {
    return (
      <div className="banner banner-accent">
        <div className="banner-title">{result.message}</div>
        {result.matched_terms?.length > 0 && (
          <p className="banner-note">
            Matched inside: {result.matched_terms.slice(0, 5).join(' · ')}
          </p>
        )}
      </div>
    );
  }

  if (state === 'FUZZY') {
    return (
      <div className="banner banner-accent">
        <div className="banner-title">{result.message}</div>
        <div className="banner-chips">
          {result.suggestions.map((s) => (
            <button key={s.label} type="button" className="chip" onClick={() => onQuery(s.query)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (state === 'GAP') {
    return (
      <div className="banner banner-danger">
        <div className="banner-title">{result.message}</div>
        <p className="banner-note">{result.note}</p>
        <div className="banner-chips">
          {(result.chips || []).map((c) => (
            <button key={c} type="button" className="chip" onClick={() => onQuery(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function label(type) {
  return String(type || '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
