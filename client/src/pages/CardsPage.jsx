import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import { useApi, useLocalState } from '../hooks/useApi.js';
import { ErrorState, Loading, PageHead, RiskBadge } from '../components/ui.jsx';
import './cards.css';

export function CardsPage() {
  const [mode, setMode] = useState('cards');
  const { data: cardData } = useApi((signal) => api.cards(null, signal), []);
  const { data: listData, error, loading, refetch } = useApi((signal) => api.checklists(signal), []);

  return (
    <div className="learn">
      <PageHead title="Cards and checklists">
        Same content, cut two other ways. Cards for the ten minutes before the round. Checklists for while
        your hands are busy — ticks are saved on this device.
      </PageHead>

      <div className="learn-toggle">
        <button
          type="button"
          className={`tab${mode === 'cards' ? ' is-active' : ''}`}
          onClick={() => setMode('cards')}
          aria-pressed={mode === 'cards'}
        >
          Flashcards · {cardData?.total ?? '—'}
        </button>
        <button
          type="button"
          className={`tab${mode === 'lists' ? ' is-active' : ''}`}
          onClick={() => setMode('lists')}
          aria-pressed={mode === 'lists'}
        >
          Checklists · {listData?.total_items ?? '—'}
        </button>
      </div>

      {mode === 'cards' && <Flashcards data={cardData} />}
      {mode === 'lists' && (
        <>
          {loading && !listData && <Loading label="Loading checklists…" />}
          {error && <ErrorState error={error} onRetry={refetch} />}
          {listData && <Checklists data={listData} />}
        </>
      )}
    </div>
  );
}

/* ---------------- flashcards ---------------- */

function Flashcards({ data }) {
  const [deck, setDeck] = useState('full');
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);

  const cards = useMemo(() => {
    if (!data) return [];
    return deck === 'full' ? data.cards : data.cards.filter((c) => c.deck === deck);
  }, [data, deck]);

  if (!data) return <Loading label="Shuffling the deck…" />;
  if (!cards.length) return <p className="muted">No cards in this deck.</p>;

  const card = cards[Math.min(index, cards.length - 1)];
  const go = (delta) => {
    setIndex((i) => (i + delta + cards.length) % cards.length);
    setShown(false);
  };

  return (
    <div className="deck-layout">
      <div>
        <article className="flashcard">
          <div className="flashcard-meta">
            <RiskBadge level={card.hazard} />
            <span className="muted">{card.entry_title}</span>
          </div>

          <h2 className="flashcard-q">{card.q}</h2>

          <div className="flashcard-a-wrap">
            {shown ? (
              <p className="flashcard-a">{card.a}</p>
            ) : (
              <p className="flashcard-a is-hidden" aria-hidden="true">
                Tap to reveal the answer
              </p>
            )}
          </div>

          <div className="flashcard-actions">
            <button type="button" className="btn btn-primary" onClick={() => setShown((v) => !v)}>
              {shown ? 'Hide answer' : 'Show answer'}
            </button>
            <button type="button" className="btn" onClick={() => go(-1)} aria-label="Previous card">
              ←
            </button>
            <button type="button" className="btn" onClick={() => go(1)} aria-label="Next card">
              →
            </button>
            <Link to={`/entry/${card.entry_slug}`} className="flashcard-open">
              Open the full note →
            </Link>
          </div>
        </article>

        <p className="mono deck-position">
          Card {Math.min(index, cards.length - 1) + 1} of {cards.length} · {deck === 'full' ? 'full deck' : deck}
        </p>
      </div>

      <aside className="deck-rail" aria-label="Decks">
        <div className="eyebrow deck-rail-head">Deck</div>
        <button
          type="button"
          className={`deck-item${deck === 'full' ? ' is-active' : ''}`}
          onClick={() => {
            setDeck('full');
            setIndex(0);
            setShown(false);
          }}
        >
          <span>Full deck</span>
          <span className="mono deck-n">{data.total}</span>
        </button>
        {data.decks.map((d) => (
          <button
            key={d.key}
            type="button"
            className={`deck-item${deck === d.key ? ' is-active' : ''}`}
            onClick={() => {
              setDeck(d.key);
              setIndex(0);
              setShown(false);
            }}
          >
            <span>{d.label}</span>
            <span className="mono deck-n">{d.n}</span>
          </button>
        ))}
      </aside>
    </div>
  );
}

/* ---------------- checklists ---------------- */

function Checklists({ data }) {
  const [ticks, setTicks] = useLocalState('awibi_scout_checked', {});

  const toggle = (id) =>
    setTicks((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });

  const resetList = (list) =>
    setTicks((prev) => {
      const next = { ...prev };
      for (const item of list.items) delete next[item.id];
      return next;
    });

  return (
    <div className="checklist-grid">
      {data.checklists.map((list) => {
        const done = list.items.filter((i) => ticks[i.id]).length;
        return (
          <section className="checklist" key={list.id}>
            <div className="checklist-head">
              <RiskBadge level={list.hazard} />
              <span className="muted checklist-type">{label(list.type)}</span>
            </div>
            <h2 className="checklist-title">{list.title}</h2>

            <div
              className="checklist-progress"
              role="progressbar"
              aria-valuenow={done}
              aria-valuemin={0}
              aria-valuemax={list.items.length}
              aria-label={`${done} of ${list.items.length} ticked`}
            >
              <span style={{ width: `${(done / list.items.length) * 100}%` }} />
            </div>
            <p className="checklist-count muted">
              {done} of {list.items.length} ticked
            </p>

            <ul className="checklist-items">
              {list.items.map((item) => (
                <li key={item.id}>
                  <label className="checklist-item">
                    <input type="checkbox" checked={Boolean(ticks[item.id])} onChange={() => toggle(item.id)} />
                    <span className={ticks[item.id] ? 'is-done' : undefined}>{item.text}</span>
                  </label>
                </li>
              ))}
            </ul>

            <div className="checklist-actions">
              <Link to={`/entry/${list.slug}`}>Open note</Link>
              <button type="button" className="checklist-reset" onClick={() => resetList(list)}>
                Reset ticks
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function label(type) {
  return String(type || '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
