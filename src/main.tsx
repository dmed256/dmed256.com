import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/main.css';
import { Desktop } from '@/os/Desktop';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>
);
