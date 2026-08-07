import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLocalState } from '../hooks/useApi.js';
import './shell.css';

const NAV_GROUPS = [
  { items: [{ to: '/', label: 'Search', icon: '⌕', kbd: '⌘K', end: true }] },
  {
    label: 'The library',
    items: [
      { to: '/library', label: 'Library', icon: '☰' },
      { to: '/cards', label: 'Cards & checklists', icon: '✎' },
    ],
  },
  {
    label: 'How we know',
    items: [{ to: '/sources', label: 'Sources & updates', icon: '⚑' }],
  },
];

const TITLES = {
  '/': 'Scout',
  '/library': 'Library',
  '/cards': 'Learn',
  '/sources': 'Sources & updates',
  '/about': 'About',
  '/contact': 'Reach us',
  '/visuals': 'Pictures',
};

export function Shell({ meta, children, query, onQuery, emergency, onEmergency }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [dark, setDark] = useLocalState('awibi_scout_dark', false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  // ⌘K / Ctrl-K focuses search from anywhere; Escape clears it.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && String(e.key).toLowerCase() === 'k') {
        e.preventDefault();
        navigate('/');
        requestAnimationFrame(() => searchRef.current?.focus());
      } else if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        onQuery('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, onQuery]);

  useEffect(() => setNavOpen(false), [location.pathname]);

  const title =
    TITLES[location.pathname] || (location.pathname.startsWith('/entry/') ? 'Entry' : 'Scout');

  const placeholder = meta?.search?.placeholders?.[0] || 'Search Scout — try “drip rate”';

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <aside className={`sidebar${navOpen ? ' is-open' : ''}`} id="sidebar">
        <div className="brand">
          <img src="/assets/awibi-icon.png" alt="" width="32" height="32" />
          <span className="brand-text">
            <span className="brand-name">
              Awibi<span className="brand-name-light">Scout</span>
            </span>
            <span className="brand-sub mono">INSIDE AWIBI EHR</span>
          </span>
        </div>

        <div className="release-chip">
          <span className="release-badge">v5</span>
          <span className="release-meta">
            <span className="release-title">Content release R2</span>
            <span className="release-sub">{meta ? `${meta.entryCount} clinical checks` : '—'}</span>
          </span>
        </div>

        <nav aria-label="Sections">
          {NAV_GROUPS.map((group, i) => (
            <div className="nav-group" key={group.label || i}>
              {group.label && <div className="eyebrow nav-group-label">{group.label}</div>}
              {group.items.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} className="nav-item">
                  <span className="nav-item-label">
                    <span className="nav-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  {item.kbd && <span className="mono nav-kbd">{item.kbd}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="nav-footer">
          <NavLink to="/about" className="nav-item">
            <span className="nav-item-label">
              <span className="nav-icon" aria-hidden="true">
                ◎
              </span>
              About Scout
            </span>
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            <span className="nav-item-label">
              <span className="nav-icon" aria-hidden="true">
                ✉
              </span>
              Reach us
            </span>
          </NavLink>
          <button type="button" className="nav-item" onClick={() => setDark(!dark)}>
            <span className="nav-item-label">
              <span className="nav-icon" aria-hidden="true">
                {dark ? '☀' : '☾'}
              </span>
              {dark ? 'Light mode' : 'Dark mode'}
            </span>
          </button>
        </div>
      </aside>

      {navOpen && <div className="nav-scrim" onClick={() => setNavOpen(false)} aria-hidden="true" />}

      <div className="main-col">
        <header className="topbar">
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open navigation"
            aria-expanded={navOpen}
            aria-controls="sidebar"
            onClick={() => setNavOpen((v) => !v)}
          >
            ☰
          </button>

          <div className="page-title">{title}</div>

          <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              ref={searchRef}
              className="search-input"
              type="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              onFocus={() => location.pathname !== '/' && navigate('/')}
              placeholder={placeholder}
              aria-label="Search the clinical bench"
            />
            <span className="search-kbd" aria-hidden="true">
              <kbd className="mono">⌘</kbd>
              <kbd className="mono">K</kbd>
            </span>
          </div>

          <div className="topbar-right">
            <button
              type="button"
              className={`btn emergency-btn${emergency ? ' is-on' : ''}`}
              onClick={() => onEmergency(!emergency)}
              aria-pressed={emergency}
              title="Put time-critical topics first"
            >
              Emergency first
            </button>

            <div className="mode-badge">
              <span className="mode-avatar">AI</span>
              <span className="mode-text">
                <span className="mode-title">Reference mode</span>
                <span className="mode-sub">No patient loaded</span>
              </span>
            </div>
          </div>
        </header>

        <main id="main" className="main">
          {children}
        </main>

        <footer className="footer">
          <span>
            Awibi Scout · content release {meta?.contentRelease?.replace('AWIBI-SCOUT-CONTENT-', '') || '—'} ·
            imaging {meta?.imagingRelease?.replace('AWIBI-SCOUT-IMAGING-', '') || '—'} · schema{' '}
            {meta?.schemaVersion || '—'}. Reference tool for qualified professionals, not a diagnostic device.
          </span>
          <span className="footer-right">
            <a href="https://learn.awibi.com" target="_blank" rel="noreferrer">
              learn.awibi.com
            </a>
            <span className="muted">WhatsApp +234 817 779 0294</span>
          </span>
        </footer>
      </div>
    </div>
  );
}
