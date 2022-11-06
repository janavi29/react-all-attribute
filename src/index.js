import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Alert from './alert';
import Acordion from './Acordion';
import Badge from './Badge';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Alert />
    <Acordion />
    <Badge />
  </StrictMode>
);
