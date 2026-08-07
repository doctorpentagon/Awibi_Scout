import './ui.css';

/**
 * Risk badge. Colour is never the only cue — the level is always spelled out,
 * which is what makes this readable in high-contrast mode and to a screen
 * reader, and survives a monochrome print of the ward round.
 */
export function RiskBadge({ level }) {
  if (!level) return null;
  return (
    <span className={`risk risk-${level}`}>
      {level}
      <span className="sr-only"> risk</span>
    </span>
  );
}

export function TimeCritical() {
  return <span className="time-critical">TIME-CRITICAL</span>;
}

export function StatTile({ value, label, tone }) {
  return (
    <div className="stat-tile">
      <div className={`stat-value${tone ? ` tone-${tone}` : ''}`}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function Loading({ label = 'Building the index…', note }) {
  return (
    <div className="state-block" role="status" aria-live="polite">
      <div className="mono loading-line">{label.toUpperCase()}</div>
      {note && <p className="muted state-note">{note}</p>}
    </div>
  );
}

/**
 * Errors say what happened and what to do. A network failure is reported as
 * offline, not as a crash — the distinction matters on a ward with no signal.
 */
export function ErrorState({ error, onRetry }) {
  const offline = error?.offline;
  return (
    <div className="state-block error-block" role="alert">
      <div className="error-title">{offline ? 'No connection' : 'Something went wrong'}</div>
      <p className="muted state-note">{error?.message || 'Unknown error.'}</p>
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export function EmptyState({ title, note, children }) {
  return (
    <div className="state-block">
      <div className="error-title">{title}</div>
      {note && <p className="muted state-note">{note}</p>}
      {children}
    </div>
  );
}

/** Shown when a screen is rendering cached data because the network failed. */
export function StaleNote() {
  return (
    <div className="stale-note">
      Showing what is saved on this device. Reconnect to refresh.
    </div>
  );
}

export function PageHead({ title, children }) {
  return (
    <header className="page-head">
      <h1 className="page-h1">{title}</h1>
      {children && <p className="page-lede">{children}</p>}
    </header>
  );
}
