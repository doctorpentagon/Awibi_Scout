import { useState } from 'react';
import { PageHead } from '../components/ui.jsx';
import './contact.css';

const REASONS = [
  'Something here is clinically wrong',
  'Something is missing — please add it',
  'Request a beta code',
  'A picture is wrong or misleading',
  'Something else',
];

const ROUTES = [
  {
    eyebrow: 'Clinical safety',
    value: 'safety@learn.awibi.com',
    note: 'Anything that could hurt a patient. Looked at the same working day.',
  },
  {
    eyebrow: 'Product and content',
    value: 'scout@learn.awibi.com',
    note: 'Corrections, requests, questions about any topic here.',
  },
  {
    eyebrow: 'Beta access · WhatsApp',
    value: '+234 817 779 0294',
    note: 'Twenty testers this round. Message for a code.',
  },
  {
    eyebrow: 'Web',
    value: 'learn.awibi.com',
    note: 'Awibi Learn and the rest of the programme.',
  },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', reply: '', role: '', reason: REASONS[0], message: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // No inbox is wired yet. Rather than pretend the message went somewhere,
    // hand the user a route that actually works.
    setSent(true);
  };

  return (
    <div className="contact">
      <PageHead title="Reach us">
        Tell us something is wrong, ask for something we don&rsquo;t have, or request a beta code. Anything
        with patient-safety in it gets looked at the same working day.
      </PageHead>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={submit}>
          <div className="contact-row">
            <div>
              <label className="field-label" htmlFor="c-name">
                Name
              </label>
              <input id="c-name" className="input" value={form.name} onChange={set('name')} placeholder="Your name" />
            </div>
            <div>
              <label className="field-label" htmlFor="c-reply">
                Email or WhatsApp
              </label>
              <input id="c-reply" className="input" value={form.reply} onChange={set('reply')} placeholder="So we can reply" />
            </div>
          </div>

          <div className="contact-field">
            <label className="field-label" htmlFor="c-role">
              Role and facility
            </label>
            <input
              id="c-role"
              className="input"
              value={form.role}
              onChange={set('role')}
              placeholder="e.g. Medical officer, General Hospital Ede"
            />
          </div>

          <div className="contact-field">
            <label className="field-label" htmlFor="c-reason">
              What is this about
            </label>
            <select id="c-reason" className="input" value={form.reason} onChange={set('reason')}>
              {REASONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="contact-field">
            <label className="field-label" htmlFor="c-message">
              Message
            </label>
            <textarea
              id="c-message"
              className="input contact-textarea"
              value={form.message}
              onChange={set('message')}
              rows={6}
              placeholder="Quote the code and version stamp if you can — they are on every note."
            />
          </div>

          <button type="submit" className="btn btn-primary contact-submit">
            Send message
          </button>

          {sent && (
            <div className="contact-sent" role="status">
              <strong>No inbox is connected yet.</strong> So this form cannot deliver your message, and we
              would rather say that than swallow it. Send the same text to{' '}
              <a href="mailto:scout@learn.awibi.com">scout@learn.awibi.com</a>, or{' '}
              <a href="mailto:safety@learn.awibi.com">safety@learn.awibi.com</a> if it is a safety issue.
            </div>
          )}

          <p className="contact-warning">
            Never paste anything that identifies a patient. No names, no numbers, no photographs. Quote the
            topic code instead.
          </p>
        </form>

        <aside className="contact-routes">
          {ROUTES.map((r) => (
            <div className="contact-route" key={r.eyebrow}>
              <div className="eyebrow">{r.eyebrow}</div>
              <div className="contact-route-value">{r.value}</div>
              <p className="muted">{r.note}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
