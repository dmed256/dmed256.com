import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import init from './init';
import * as serviceWorker from './serviceWorker';
import './index.css';


init();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.register();
