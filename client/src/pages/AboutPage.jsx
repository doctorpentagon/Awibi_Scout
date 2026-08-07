import { Link } from 'react-router-dom';
import { StatTile } from '../components/ui.jsx';
import { builtCount } from '../visuals/tier1/index.js';
import './about.css';

const ENGINEERING = [
  {
    title: 'An index, not a loop',
    body: 'Tokens are indexed once when the app starts, with a different weight for a title than for a footnote. A query walks the postings for the words you typed. It never re-reads the library on every keystroke, which is why it stays fast on a cheap phone.',
  },
  {
    title: 'A whitelist of arithmetic, never eval',
    body: 'Every calculation is a small tree of allowed operations over typed, dimensioned inputs. Anything not on the list throws instead of running. There is no path from content into code.',
  },
  {
    title: 'Seven endings, and none of them is a shrug',
    body: 'A recognised phrase opens the entry directly. A confident match opens the card. An ambiguous short form asks which you meant. A broad noun opens an index. A part-word finds the whole word. A typo offers near misses. And a term we do not carry becomes a content requirement with a timestamp — not an empty screen.',
  },
  {
    title: 'Abbreviations are never expanded behind your back',
    body: 'MI means three things, PE means four. Scout will not pick one for you. Your term stays on screen exactly as you typed it, and you choose.',
  },
  {
    title: 'The picture is pixels; the labels are data',
    body: 'Every annotation sits in an SVG layer over the image, positioned in coordinates from 0 to 1 so it survives any screen or zoom. That means a label can be translated, read aloud by a screen reader, searched, corrected in one line — and hidden, which turns any picture into a teaching case.',
  },
  {
    title: 'Nothing released is quietly edited',
    body: 'A topic is replaced, not amended. Every card carries its version stamp, its review date and whether a doctor has signed it off. When the answer is not yet signed off, it says so.',
  },
];

export function AboutPage({ meta }) {
  return (
    <div className="about">
      <h1 className="about-h1">Built for the ward round, not the reading room.</h1>

      <p className="about-lede">
        Awibi Scout lives inside Awibi EHR. You type one thing. You get one clear answer with its source: the
        calculation, the criteria, the range, the sequence, the instrument. On a shared Android, on 3G, at
        2am.
      </p>

      <p className="about-origin">
        It started in a ward where the reference book was in someone else&rsquo;s hand and the drip was
        already running. Nothing here is clever for the sake of it — every screen exists because somebody
        needed a number fast and couldn&rsquo;t get it.
      </p>

      <div className="stat-row about-stats">
        <StatTile value={meta?.entryCount ?? '—'} label="Clinical checks in this release" />
        <StatTile value="7" label="Ways a query can end. None of them is nothing." />
        <StatTile value="0" label="Diagnoses made without a clinician. By design." />
        <StatTile value={`${meta?.visualCount ?? '—'}`} label="Pictures specified, labels and all" />
      </div>

      <section className="about-section">
        <h2 className="entry-h2">Who uses it</h2>
        <p className="about-body">
          House officers and medical officers on call. Nurses running an infusion. Pharmacists checking a
          regimen against weight. Laboratory scientists confirming an order of draw. Students clerking a first
          patient. Anyone who needs the right number, criteria or sequence — now, not after the round.
        </p>
      </section>

      <section className="about-section">
        <h2 className="entry-h2">How it is engineered</h2>
        <div className="about-cards">
          {ENGINEERING.map((c) => (
            <article className="about-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="entry-h2">What this is not</h2>
        <ul className="about-list">
          <li>
            <strong>Not a diagnostic device.</strong> It is a reference tool for qualified professionals. It
            answers; it does not decide.
          </li>
          <li>
            <strong>Not signed off yet.</strong> No topic here carries a doctor&rsquo;s sign-off. That gate is
            a human step and the counter on{' '}
            <Link to="/sources">Sources &amp; updates</Link> shows it honestly.
          </li>
          <li>
            <strong>Not a finished picture library.</strong> {meta?.visualCount ?? 96} assets are specified and{' '}
            {builtCount} are drawn. Every licence still reads TO BE CONFIRMED. The{' '}
            <Link to="/visuals">picture plan</Link> shows exactly what exists and what does not.
          </li>
          <li>
            <strong>Not complete.</strong> Where Scout does not carry something, it says so and logs it rather
            than guessing.
          </li>
        </ul>
      </section>
    </div>
  );
}
