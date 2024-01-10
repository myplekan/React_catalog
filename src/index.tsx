import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './App.scss';
import { SiteProvider } from './components/AppContex.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
     <SiteProvider>
       <App />
     </SiteProvider>
  </HashRouter>
)

