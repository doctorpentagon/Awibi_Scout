import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading, PageHead, RiskBadge, StatTile } from '../components/ui.jsx';
import { builtCount, isBuilt } from '../visuals/tier1/index.js';
import './visualsPage.css';

const TIERS = [
  { key: null, label: 'All tiers' },
  { key: '1', label: 'Tier 1 · SVG' },
  { key: '2', label: 'Tier 2 · Animated' },
  { key: '3', label: 'Tier 3 · Photo' },
  { key: '4', label: 'Tier 4 · Radiograph' },
  { key: '5', label: 'Tier 5 · 3D' },
];

export function VisualsPage() {
  const [tier, setTier] = useState(null);
  const [wave, setWave] = useState(null);
  const { data, error, loading, refetch } = useApi(
    (signal) => api.visuals({ tier, wave }, signal),
    [tier, wave],
  );
  const { data: gaps } = useApi((signal) => api.visualGaps(signal), []);

  if (loading && !data) return <Loading label="Loading the picture plan…" />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!data) return null;

  const s = data.summary;

  return (
    <div className="visuals-page">
      <PageHead title="The picture plan">
        {s.total} assets specified, every one linked to a real entry and stating what a clinician does
        differently after seeing it. {builtCount} are drawn and shipping. The rest are a brief, not a library
        — no licence is cleared, and no asset is approved for release.
      </PageHead>

      <div className="stat-row">
        <StatTile value={s.total} label="Assets specified" tone="ink" />
        <StatTile value={builtCount} label="Drawn and shipping" tone="good" />
        <StatTile value={`${Math.round(((s.by_tier['1'] + s.by_tier['2']) / s.total) * 100)}%`} label="Tier 1+2 share — SVG carries the layer" tone="ink" />
        <StatTile value={s.needing_annotation_overlay} label="Need an annotation overlay" tone="warn" />
        <StatTile value={s.needing_skin_tone_range.length} label="Must span skin tones" tone="danger" />
        <StatTile value={gaps?.total ?? '—'} label="Entries with no picture yet" tone="warn" />
      </div>

      <div className="tabs">
        {TIERS.map((t) => (
          <button
            key={t.key ?? 'all'}
            type="button"
            className={`tab${tier === t.key ? ' is-active' : ''}`}
            onClick={() => setTier(t.key)}
          >
            {t.label}
            {t.key && <span className="tab-n"> · {s.by_tier[t.key]}</span>}
          </button>
        ))}
      </div>

      <div className="tabs">
        {[null, '1', '2', '3'].map((w) => (
          <button
            key={w ?? 'allw'}
            type="button"
            className={`tab${wave === w ? ' is-active' : ''}`}
            onClick={() => setWave(w)}
          >
            {w ? `Wave ${w}` : 'All waves'}
            {w && <span className="tab-n"> · {s.by_wave[w]}</span>}
          </button>
        ))}
      </div>

      <p className="muted visuals-count">
        {data.total} {data.total === 1 ? 'asset' : 'assets'}
      </p>

      <div className="asset-grid">
        {data.assets.map((a) => (
          <article className={`asset-card${isBuilt(a.asset_id) ? ' is-built' : ''}`} key={a.asset_id}>
            <header className="asset-card-head">
              <span className="mono asset-card-id">{a.asset_id}</span>
              <span className={`visual-tier tier-${a.tier}`}>T{a.tier}</span>
              {isBuilt(a.asset_id) && <span className="asset-built">Drawn</span>}
            </header>

            <h2 className="asset-card-title">{a.title}</h2>
            <p className="asset-card-does">{a.changes_what_a_clinician_does}</p>

            <dl className="asset-card-meta">
              <div>
                <dt>Job</dt>
                <dd>{a.job_name?.split('—')[0].trim()}</dd>
              </div>
              <div>
                <dt>Wave</dt>
                <dd>{a.build_wave}</dd>
              </div>
              <div>
                <dt>Licence</dt>
                <dd className="asset-pending">{a.licence || 'TO BE CONFIRMED'}</dd>
              </div>
              <div>
                <dt>Reviewer</dt>
                <dd className="asset-pending">{a.reviewer || 'UNASSIGNED'}</dd>
              </div>
            </dl>

            <div className="asset-card-flags">
              {a.needs_skin_tone_range && <span className="flag flag-skin">Skin-tone range required</span>}
              {a.annotation_overlay && <span className="flag">Annotation overlay</span>}
              {a.tier === 4 && <span className="flag flag-danger">Never generated</span>}
            </div>

            {a.serves_entry_slug && (
              <Link to={`/entry/${a.serves_entry_slug}`} className="asset-card-link">
                Serves: {a.serves_entry_title} →
              </Link>
            )}
          </article>
        ))}
      </div>

      {gaps && (
        <section className="gaps-section">
          <h2 className="entry-h2">Entries with no picture yet</h2>
          <p className="muted sources-note">
            {gaps.total} of 158. Ranked by hazard — P1 critical entries first. This is the honest backlog, not
            a hidden one.
          </p>
          <div className="table-wrap">
            <table className="registry">
              <thead>
                <tr>
                  <th scope="col">Priority</th>
                  <th scope="col">Entry</th>
                  <th scope="col">Type</th>
                  <th scope="col">Risk</th>
                  <th scope="col">Suggested tier</th>
                </tr>
              </thead>
              <tbody>
                {gaps.gaps.slice(0, 30).map((g) => (
                  <tr key={g.entry_id}>
                    <td className="mono">{g.priority}</td>
                    <td>{g.entry_title}</td>
                    <td className="muted">{g.type}</td>
                    <td>
                      <RiskBadge level={g.hazard} />
                    </td>
                    <td className="mono">T{g.suggested_tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
