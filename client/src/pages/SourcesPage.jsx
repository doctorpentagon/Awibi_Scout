import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { ErrorState, Loading, PageHead, RiskBadge, StatTile } from '../components/ui.jsx';
import './sources.css';

const TABS = [
  { key: 'review', label: 'Review list' },
  { key: 'add', label: 'To add' },
  { key: 'pictures', label: 'Pictures' },
  { key: 'searched', label: 'What people searched' },
  { key: 'short', label: 'Short forms' },
];

export function SourcesPage() {
  const [tab, setTab] = useState('review');
  const { data, error, loading, refetch } = useApi((signal) => api.governance(signal), []);

  if (loading && !data) return <Loading label="Loading the registry…" />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!data) return null;

  const s = data.stats;

  return (
    <div className="sources">
      <PageHead title="Sources, reviews and short forms">
        This is how the content stays trustworthy over the years. Every topic carries its sources, a version
        stamp, a named review date and a sign-off gate. Nothing already released is quietly edited — it is
        replaced, and this list shows what is due.
      </PageHead>

      <div className="stat-row">
        <StatTile value={s.topics_tracked} label="Topics tracked" tone="ink" />
        <StatTile value={s.signed_off_by_a_doctor} label="Signed off by a doctor" tone="danger" />
        <StatTile value={s.confirm_with_your_lab} label="Confirm with your lab" tone="warn" />
        <StatTile value={s.past_review_date} label="Past review date" tone="good" />
        <StatTile value={s.requests_to_add} label="Requests to add" tone="ink" />
        <StatTile value={s.pictures_to_add} label="Pictures to add" tone="ink" />
      </div>

      <div className="tabs sources-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`tab${tab === t.key ? ' is-active' : ''}`}
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'review' && <ReviewList rows={data.registry} />}
      {tab === 'add' && <ToAdd rows={data.requests} />}
      {tab === 'pictures' && <PicturesTab />}
      {tab === 'searched' && <Searched />}
      {tab === 'short' && <ShortForms />}
    </div>
  );
}

function ReviewList({ rows }) {
  const [filter, setFilter] = useState('');
  const shown = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => `${r.id} ${r.title} ${r.type} ${r.hazard}`.toLowerCase().includes(q));
  }, [rows, filter]);

  return (
    <>
      <input
        className="input sources-filter"
        placeholder="Filter by topic, code, type or risk…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter the review list"
      />

      <div className="table-wrap">
        <table className="registry">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Topic</th>
              <th scope="col">Type</th>
              <th scope="col">Risk</th>
              <th scope="col">Checked by</th>
              <th scope="col">Review due</th>
              <th scope="col">Version</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.id}>
                <td className="mono registry-code">{r.id}</td>
                <td>
                  <Link to={`/entry/${r.slug}`}>{r.title}</Link>
                </td>
                <td className="muted">{label(r.type)}</td>
                <td>
                  <RiskBadge level={r.hazard} />
                </td>
                <td className={r.signed_off ? 'signed' : 'unsigned'}>
                  {r.signed_off ? 'Signed off' : 'Not yet signed off'}
                </td>
                <td className="muted">{r.review_due || '—'}</td>
                <td className="mono registry-version">{r.version?.replace('AWIBI-SCOUT-CONTENT-', '') || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ToAdd({ rows }) {
  if (!rows?.length) return <p className="muted">Nothing in the queue.</p>;
  return (
    <div className="add-grid">
      {rows.map((r, i) => (
        <div className="add-card" key={i}>
          <div className="add-term">{r.term || r.query || r.title || JSON.stringify(r)}</div>
          {r.reason && <p className="muted">{r.reason}</p>}
          {r.hits != null && <span className="mono add-hits">{r.hits} requests</span>}
        </div>
      ))}
    </div>
  );
}

function PicturesTab() {
  const { data } = useApi((signal) => api.visuals({}, signal), []);
  if (!data) return <Loading label="Loading the picture plan…" />;

  return (
    <>
      <p className="muted sources-note">
        {data.total} pictures are described, not borrowed. Each says what must be visible, why it matters at
        the bedside, and the labels it must carry.{' '}
        <Link to="/visuals">Open the full picture plan →</Link>
      </p>
      <div className="pic-grid">
        {data.assets.slice(0, 24).map((a) => (
          <div className="pic-card" key={a.asset_id}>
            <div className="pic-slot">
              <span className="mono">
                {a.tier_name?.toLowerCase()} · {a.asset_id}
              </span>
            </div>
            <div className="pic-body">
              <h3>{a.title}</h3>
              <p className="muted">{a.changes_what_a_clinician_does}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Searched() {
  const { data } = useApi((signal) => api.searchGaps(signal), []);
  if (!data) return <Loading label="Loading…" />;
  if (!data.gaps.length) {
    return (
      <p className="muted sources-note">
        No zero-result searches yet this session. When someone searches for something Scout does not carry,
        the query is logged here with a timestamp — three requests in a week moves it into the build queue.
        Patient data is never logged.
      </p>
    );
  }
  return (
    <div className="table-wrap">
      <table className="registry">
        <thead>
          <tr>
            <th scope="col">Searched for</th>
            <th scope="col">Times</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.gaps.map((g) => (
            <tr key={g.normalised}>
              <td>{g.term}</td>
              <td className="mono">{g.hits}</td>
              <td className={g.promoted ? 'signed' : 'muted'}>
                {g.promoted ? 'Promoted to the build queue' : 'Logged'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShortForms() {
  const { data } = useApi((signal) => api.shortForms(signal), []);
  if (!data) return <Loading label="Loading…" />;

  return (
    <div className="short-forms">
      <section>
        <h2 className="entry-h2">Never expanded behind your back</h2>
        <p className="muted sources-note">
          These short forms mean more than one thing. Scout will not guess which — it asks.
        </p>
        <div className="short-grid">
          {Object.entries(data.ambiguous).map(([k, v]) => (
            <div className="short-card ambiguous" key={k}>
              <span className="mono short-key">{k.toUpperCase()}</span>
              <span className="short-vals">{v.join(' · ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="entry-h2">Expanded automatically</h2>
        <div className="short-grid">
          {Object.entries(data.unambiguous).map(([k, v]) => (
            <div className="short-card" key={k}>
              <span className="mono short-key">{k.toUpperCase()}</span>
              <span className="short-vals">{v}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function label(type) {
  return String(type || '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
