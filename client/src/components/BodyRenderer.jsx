/**
 * Renders an entry `body`.
 *
 * The 36 entry types carry genuinely different body shapes — a trial has
 * question/design/result, an emergency has immediate_actions, a hub has a facet
 * filter. Writing 36 templates would rot on the next content release, so this
 * walks the structure and picks a presentation per shape:
 *
 *   string                -> paragraph
 *   array<string>         -> ordered list where sequence matters, else bullets
 *   array<object>         -> table, columns from the union of keys
 *   object                -> nested section
 *   boolean               -> yes/no line
 *
 * Any new field a future release adds renders sensibly without a code change.
 */

/** Fields whose order is the clinical content — these render as numbered steps. */
const SEQUENCED = new Set([
  'immediate_actions',
  'immediate_sequence',
  'preparation',
  'closing',
  'steps',
  'sequence',
  'order_of_draw',
  'procedure',
  'management',
  'management_principles',
]);

export function BodyRenderer({ body, depth = 0 }) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const fields = Object.entries(body).filter(([, v]) => !isEmpty(v));
  if (!fields.length) return null;

  return (
    <>
      {fields.map(([key, value]) => (
        <section className={`body-field depth-${Math.min(depth, 2)}`} key={key}>
          <h3 className="body-field-title">{humanise(key)}</h3>
          <FieldValue field={key} value={value} depth={depth} />
        </section>
      ))}
    </>
  );
}

function FieldValue({ field, value, depth }) {
  if (typeof value === 'string') return <p className="body-text">{value}</p>;

  if (typeof value === 'boolean') {
    return <p className="body-text">{value ? 'Yes' : 'No'}</p>;
  }

  if (typeof value === 'number') return <p className="body-text">{value}</p>;

  if (Array.isArray(value)) {
    if (!value.length) return null;

    if (value.every((v) => typeof v === 'string' || typeof v === 'number')) {
      const List = SEQUENCED.has(field) ? 'ol' : 'ul';
      return (
        <List className={`body-list${List === 'ol' ? ' body-list-ordered' : ''}`}>
          {value.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </List>
      );
    }

    if (value.every((v) => v && typeof v === 'object' && !Array.isArray(v))) {
      const columns = [...new Set(value.flatMap((v) => Object.keys(v)))];
      return (
        <div className="body-table-wrap">
          <table className="body-table">
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c} scope="col">
                    {humanise(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.map((row, i) => (
                <tr key={i}>
                  {columns.map((c) => (
                    <td key={c}>{renderCell(row[c])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <ul className="body-list">
        {value.map((v, i) => (
          <li key={i}>{renderCell(v)}</li>
        ))}
      </ul>
    );
  }

  // Plain object — nest one level deeper.
  return (
    <div className="body-nested">
      <BodyRenderer body={value} depth={depth + 1} />
    </div>
  );
}

function renderCell(v) {
  if (v === null || v === undefined || v === '') return <span className="faint">—</span>;
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'object' ? JSON.stringify(x) : String(x))).join(' · ');
  if (typeof v === 'object') {
    return Object.entries(v)
      .map(([k, val]) => `${humanise(k)}: ${val}`)
      .join(' · ');
  }
  return String(v);
}

function isEmpty(v) {
  if (v === null || v === undefined || v === '') return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v).length === 0;
  return false;
}

export function humanise(key) {
  return String(key)
    .replace(/_/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());
}
