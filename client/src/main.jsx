import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';

import './styles/tokens.css';
import './styles/base.css';

// Set the theme before first paint so a dark-mode user never sees a white flash.
//
// An explicit choice always wins. With no stored choice we follow the operating
// system, because defaulting to light meant a dark-mode user got the white flash
// this block exists to prevent — and on a night shift that is the whole point.
try {
  const stored = localStorage.getItem('awibi_scout_dark');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  const dark = stored === null ? prefersDark : JSON.parse(stored);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
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
