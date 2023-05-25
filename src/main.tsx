import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import GLobalStyles from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GLobalStyles />
    <App />
  </React.StrictMode>
);
