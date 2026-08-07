import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';

import './styles/tokens.css';
import './styles/base.css';

// Set the theme before first paint so a dark-mode user never sees a white flash.
try {
  const saved = JSON.parse(localStorage.getItem('awibi_scout_dark') || 'false');
  document.documentElement.dataset.theme = saved ? 'dark' : 'light';
} catch {
  document.documentElement.dataset.theme = 'light';
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
