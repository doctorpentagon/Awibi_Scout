import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { RiskBadge } from '../components/ui.jsx';
import './cases.css';

/**
 * Case scenarios, browsable by posting and specialty.
 *
 * Search finds a case if you already know what it is about. A student on a
 * cardiology rotation wants the opposite: everything in cardiology, in one
 * place. This mirrors the structure of the postings people actually rotate
 * through rather than the internal domain tags.
 */
export default function CasesPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    api.cases()
      .then((d) => { if (!cancelled) setData(d); })
      .catch((e) => { if (!cancelled) setError(e); });
    return () => { cancelled = true; };
  }, []);

  if (error) {
    return (
      <div className="cases-page">
        <p className="muted">
          {error.offline ? 'You are offline and the case list is not cached.' : 'Could not load the cases.'}
        </p>
      </div>
    );
  }

  if (!data) return <div className="cases-page"><p className="muted">Loading cases…</p></div>;

  return (
    <div className="cases-page">
      <header className="cases-head">
        <h1>Case scenarios</h1>
        <p className="cases-intro">
          Whole patients, clerked from the door to discharge — history, mechanism,
          differentials, investigations with expected results, and management with
          doses and infusions worked out. {data.total} cases.
        </p>

        {/* Cases are the ONE place in Scout that carries doses. A reader moving
            between a reference card and a case must be told the rules differ. */}
        <div className="cases-dose-note" role="note">
          <strong>These cases carry drug doses. Reference entries deliberately do not.</strong>{' '}
          Doses shown are worked teaching examples for an adult with normal kidney and liver
          function unless stated. Check your own formulary before prescribing for a real patient.
        </div>
      </header>

      {data.total === 0 && <p className="muted">No cases yet.</p>}

      {data.groups.map((g) => (
        <section key={g.group} className="cases-group">
          <div className="cases-group-head">
            <h2>{g.group}</h2>
            <span className="cases-count">{g.count}</span>
          </div>

          {g.areas.map((a) => (
            <div key={a.area} className="cases-area">
              <h3 className="cases-area-title">
                {a.area} <span className="cases-area-count">{a.count}</span>
              </h3>
              <ul className="cases-list">
                {a.cases.map((c) => (
                  <li key={c.id}>
                    <Link to={`/entry/${c.slug || c.id}`} className="case-item">
                      <span className="case-item-head">
                        <span className="case-item-title">{c.short_title || c.title}</span>
                        <RiskBadge level={c.hazard} />
                      </span>
                      <span className="case-item-summary">{c.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
