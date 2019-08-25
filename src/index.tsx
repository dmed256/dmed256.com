import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import init from './init';
import * as serviceWorker from './serviceWorker';


init();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.register();
