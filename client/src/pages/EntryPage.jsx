import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading, RiskBadge, TimeCritical } from '../components/ui.jsx';
import { BodyRenderer, humanise } from '../components/BodyRenderer.jsx';
import { Calculator } from '../components/Calculator.jsx';
import { VisualPanel } from '../visuals/VisualPanel.jsx';
import './entry.css';

export function EntryPage() {
  const { idOrSlug } = useParams();
  const { data: entry, error, loading, refetch } = useApi(
    (signal) => api.entry(idOrSlug, signal),
    [idOrSlug],
  );

  if (loading && !entry) return <Loading label="Opening the entry…" />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!entry) return null;

  const hasCalc = entry.logic && Object.keys(entry.logic).length > 0;

  return (
    <article className="entry">
      <nav className="entry-crumb">
        <Link to="/">← Back to search</Link>
      </nav>

      <header className="entry-head">
        <div className="entry-meta-row">
          <span className="mono entry-code">{entry.id}</span>
          <RiskBadge level={entry.hazard} />
          {(entry.urgency === 'immediate' || entry.hazard === 'critical') && <TimeCritical />}
          <span className="tag">{humanise(entry.type)}</span>
        </div>

        <h1 className="entry-title">{entry.title}</h1>
        <p className="entry-summary">{entry.summary}</p>

        {entry.also_known_as?.length > 0 && (
          <p className="entry-aka">
            <span className="faint">Also called: </span>
            {entry.also_known_as.join(' · ')}
          </p>
        )}
      </header>

      {/* Warnings sit above the content. A clinician who reads only the top of
          the card must still meet them. */}
      {entry.warnings?.length > 0 && (
        <section className="callout callout-danger" aria-labelledby="warn-h">
          <h2 id="warn-h" className="callout-title">
            Warnings
          </h2>
          <ul className="callout-list">
            {entry.warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      {hasCalc && <Calculator entry={entry} />}

      <div className="entry-body">
        <BodyRenderer body={entry.body} />
      </div>

      {entry.visual_assets?.length > 0 && <VisualPanel assets={entry.visual_assets} entry={entry} />}

      {entry.checkboxes?.length > 0 && (
        <section className="entry-section">
          <h2 className="entry-h2">Bedside checklist</h2>
          <p className="muted entry-section-note">
            {entry.checkboxes.length} steps. Ticks are saved on this device — open{' '}
            <Link to="/cards">Cards &amp; checklists</Link> to work through it hands-free.
          </p>
          <ol className="entry-checklist">
            {entry.checkboxes.map((c, i) => (
              <li key={i}>{typeof c === 'string' ? c : c.text || c.label}</li>
            ))}
          </ol>
        </section>
      )}

      {entry.flashcards?.length > 0 && (
        <section className="entry-section">
          <h2 className="entry-h2">Cards</h2>
          <div className="entry-cards">
            {entry.flashcards.map((c, i) => (
              <details className="entry-card-item" key={i}>
                <summary>{c.q}</summary>
                <p>{c.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {entry.limitations?.length > 0 && (
        <section className="callout callout-warn">
          <h2 className="callout-title">Limitations</h2>
          <ul className="callout-list">
            {entry.limitations.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>
      )}

      {entry.related?.length > 0 && (
        <section className="entry-section">
          <h2 className="entry-h2">Related</h2>
          <div className="entry-related">
            {entry.related.map((r) => (
              <Link key={r.id} to={`/entry/${r.slug}`} className="related-item">
                <span className="related-title">{r.title}</span>
                <RiskBadge level={r.hazard} />
              </Link>
            ))}
          </div>
        </section>
      )}

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
