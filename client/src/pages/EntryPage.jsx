import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading } from '../components/ui.jsx';
import { EntryContent } from '../components/EntryContent.jsx';
import { humanise } from '../components/BodyRenderer.jsx';
import { loadEntryLinks } from '../lib/entryLinks.js';
import './entry.css';

export function EntryPage() {
  const { idOrSlug } = useParams();
  const { data: entry, error, loading, refetch } = useApi(
    (signal) => api.entry(idOrSlug, signal),
    [idOrSlug],
  );

  // Only a navigational index needs the title -> slug lookup, so only an index
  // pays for the request. Everything else renders without it.
  const [linkMap, setLinkMap] = useState(null);
  const isIndex = entry?.body?.hub_type === 'navigational_index';
  useEffect(() => {
    if (!isIndex) return undefined;
    const ac = new AbortController();
    loadEntryLinks(ac.signal).then(setLinkMap).catch(() => {
      /* names simply stay as plain text */
    });
    return () => ac.abort();
  }, [isIndex]);

  if (loading && !entry) return <Loading label="Opening the entry…" />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!entry) return null;

  return (
    <article className="entry">
      <EntryContent entry={entry} linkMap={linkMap} showBackLink />
      <Governance entry={entry} />
    </article>
  );
}

/** How we know. Sources, version stamp, review date and the sign-off gate. */
function Governance({ entry }) {
  const g = entry.governance || {};
  const sources = g.sources || [];

  return (
    <section className="entry-section governance">
      <h2 className="entry-h2">How we know</h2>

      {sources.length > 0 ? (
        <ul className="source-list">
          {sources.map((s, i) => (
            <li key={i}>{typeof s === 'string' ? s : s.citation || s.title || JSON.stringify(s)}</li>
          ))}
        </ul>
      ) : (
        <p className="muted">No source list recorded on this entry yet.</p>
      )}

      <dl className="governance-grid">
        <div>
          <dt>Version</dt>
          <dd className="mono">{entry.content_release}</dd>
        </div>
        <div>
          <dt>Schema</dt>
          <dd className="mono">{entry.schema_version}</dd>
        </div>
        <div>
          <dt>Jurisdiction</dt>
          <dd>{humanise(entry.jurisdiction || 'international')}</dd>
        </div>
        <div>
          <dt>Checked by a doctor</dt>
          <dd>{g.clinical_sign_off || g.signed_off_by || <span className="pending">Not yet — that gate is a human step</span>}</dd>
        </div>
      </dl>

      {g.local_confirmation_required && (
        <p className="callout callout-warn confirm-locally">
          <strong>Confirm with your lab or pharmacy.</strong> Reference ranges, brands and stock vary by
          facility. This entry carries the standard, not your local value.
        </p>
      )}
    </section>
  );
}
