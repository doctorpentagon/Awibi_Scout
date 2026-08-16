import { Suspense, lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell.jsx';
import { Loading } from './components/ui.jsx';
import { useApi, useLocalState } from './hooks/useApi.js';
import { api } from './lib/api.js';

import { ScoutPage } from './pages/ScoutPage.jsx';
import { EntryPage } from './pages/EntryPage.jsx';

// Screens beyond the search path are split out of the first load. The device
// budget is 180 KB gzipped and search is what a clinician opens at 2am.
const LibraryPage = lazy(() => import('./pages/LibraryPage.jsx').then((m) => ({ default: m.LibraryPage })));
const ReadPage = lazy(() => import('./pages/ReadPage.jsx'));
const CasesPage = lazy(() => import('./pages/CasesPage.jsx'));
const CardsPage = lazy(() => import('./pages/CardsPage.jsx').then((m) => ({ default: m.CardsPage })));
const SourcesPage = lazy(() => import('./pages/SourcesPage.jsx').then((m) => ({ default: m.SourcesPage })));
const VisualsPage = lazy(() => import('./pages/VisualsPage.jsx').then((m) => ({ default: m.VisualsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx').then((m) => ({ default: m.ContactPage })));

export function App() {
  const [query, setQuery] = useState('');
  const [emergency, setEmergency] = useLocalState('awibi_scout_emergency', false);
  const { data: meta } = useApi((signal) => api.meta(signal), []);

  return (
    <Shell
      meta={meta}
      query={query}
      onQuery={setQuery}
      emergency={emergency}
      onEmergency={setEmergency}
    >
      <Suspense fallback={<Loading label="Loading…" />}>
        <Routes>
          <Route path="/" element={<ScoutPage query={query} onQuery={setQuery} emergency={emergency} meta={meta} />} />
          <Route path="/entry/:idOrSlug" element={<EntryPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/read/:position" element={<ReadPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/visuals" element={<VisualsPage />} />
          <Route path="/about" element={<AboutPage meta={meta} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ScoutPage query={query} onQuery={setQuery} emergency={emergency} meta={meta} />} />
        </Routes>
      </Suspense>
    </Shell>
  );
}
