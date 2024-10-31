import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Router>
);
