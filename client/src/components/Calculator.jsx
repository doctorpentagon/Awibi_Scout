import { useState } from 'react';
import { api } from '../lib/api.js';
import './calculator.css';

/**
 * The calculator surface for an entry that carries a logic tree.
 *
 * Evaluation happens on the server against the closed op set — the client never
 * interprets the formula. Validation errors come back naming the field and the
 * accepted range, and are shown next to the input rather than as a toast that
 * disappears before it is read.
 */
export function Calculator({ entry }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries((entry.inputs || []).map((i) => [i.key, i.default ?? ''])),
  );
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const set = (key, v) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setError(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      setResult(await api.calculate(entry.slug, values));
    } catch (err) {
      setError(err);
      setResult(null);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setValues(Object.fromEntries((entry.inputs || []).map((i) => [i.key, i.default ?? ''])));
    setResult(null);
    setError(null);
  };

  return (
    <section className="calc" aria-labelledby="calc-h">
      <h2 id="calc-h" className="entry-h2">
        Work it out
      </h2>

      <form className="calc-form" onSubmit={submit}>
        <div className="calc-inputs">
          {(entry.inputs || []).map((input) => (
            <div className="calc-field" key={input.key}>
              <label className="field-label" htmlFor={`in-${input.key}`}>
                {input.label}
                {input.unit && <span className="faint calc-unit"> ({input.unit})</span>}
                {input.required && (
                  <span className="calc-required" aria-hidden="true">
                    {' '}
                    *
                  </span>
                )}
              </label>

              {input.type === 'enum' ? (
                <select
                  id={`in-${input.key}`}
                  className="input"
                  value={values[input.key] ?? ''}
                  onChange={(e) => set(input.key, e.target.value)}
                  required={input.required}
                >
                  <option value="">Choose…</option>
                  {(input.options || []).map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : input.type === 'boolean' ? (
                <label className="calc-check">
                  <input
                    id={`in-${input.key}`}
                    type="checkbox"
                    checked={Boolean(values[input.key])}
                    onChange={(e) => set(input.key, e.target.checked)}
                  />
                  <span>Yes</span>
                </label>
              ) : (
                <input
                  id={`in-${input.key}`}
                  className="input"
                  type="number"
                  inputMode="decimal"
                  step="any"
                  min={input.min ?? undefined}
                  max={input.max ?? undefined}
                  value={values[input.key] ?? ''}
                  onChange={(e) => set(input.key, e.target.value)}
                  required={input.required}
                  aria-describedby={input.note ? `note-${input.key}` : undefined}
                />
              )}

              {input.note && (
                <p className="calc-note" id={`note-${input.key}`}>
                  {input.note}
                </p>
              )}
              {(input.min != null || input.max != null) && input.type === 'number' && (
                <p className="calc-range faint">
                  Accepted {input.min ?? '0'}–{input.max ?? '∞'} {input.unit || ''}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="calc-actions">
          <button type="submit" className="btn btn-primary" disabled={busy}>
            {busy ? 'Working…' : 'Calculate'}
          </button>
          <button type="button" className="btn" onClick={reset}>
            Clear
          </button>
        </div>
      </form>

      {error && (
        <div className="calc-error" role="alert">
          {error.message}
        </div>
      )}

      {result && (
        <div className="calc-result" role="status" aria-live="polite">
          {result.outputs.map((o) => (
            <div className="calc-output" key={o.key}>
              <div className="calc-output-label">{o.label}</div>
              <div className="calc-output-value">
                {o.value}
                {o.unit && <span className="calc-output-unit"> {o.unit}</span>}
              </div>
              {o.interpretation && <div className="calc-output-interp">{o.interpretation}</div>}
              {o.action && <div className="calc-output-action">{o.action}</div>}
            </div>
          ))}

          {result.outputs[0]?.bands?.length > 0 && (
            <details className="calc-bands">
              <summary>All bands</summary>
              <table className="body-table">
                <thead>
                  <tr>
                    <th scope="col">Range</th>
                    <th scope="col">Means</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {result.outputs[0].bands.map((b, i) => {
                    const active = b.label === result.outputs[0].interpretation;
                    return (
                      <tr key={i} className={active ? 'band-active' : undefined}>
                        <td className="mono">
                          {b.min ?? '<'}
                          {b.min != null && b.max != null ? '–' : ''}
                          {b.max ?? '+'}
                        </td>
                        <td>{b.label}</td>
                        <td className="muted">{b.action || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </details>
          )}
        </div>
      )}
    </section>
  );
}
