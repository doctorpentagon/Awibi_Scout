import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Fetch-on-mount with abort on unmount and on dependency change.
 *
 * `loading` starts true only when there is nothing to show. A refetch that has
 * previous data keeps rendering it — no flash of empty state, which on a slow
 * link is the difference between "working" and "broken".
 */
export function useApi(fetcher, deps = [], { enabled = true } = {}) {
  const [state, setState] = useState({ data: null, error: null, loading: enabled });
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const [nonce, setNonce] = useState(0);
  const refetch = useCallback(() => setNonce((n) => n + 1), []);

  useEffect(() => {
    if (!enabled) {
      setState({ data: null, error: null, loading: false });
      return undefined;
    }

    const controller = new AbortController();
    let alive = true;

    setState((s) => ({ ...s, loading: true, error: null }));

    fetcherRef
      .current(controller.signal)
      .then((data) => {
        if (alive) setState({ data, error: null, loading: false });
      })
      .catch((err) => {
        if (!alive || err.name === 'AbortError') return;
        setState({ data: null, error: err, loading: false });
      });

    return () => {
      alive = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled, nonce]);

  return { ...state, refetch };
}

/** Debounce a fast-changing value — one network call per pause, not per keystroke. */
export function useDebounced(value, ms = 140) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
}

/** State mirrored to localStorage — checklist ticks, theme, deck position. */
export function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode, quota — the app still works, it just forgets */
    }
  }, [key, value]);

  return [value, setValue];
}
