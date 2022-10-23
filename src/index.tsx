import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import init from './init';

const container = document.getElementById('root');
const root = createRoot(container!);

init();

root.render(<App />);
