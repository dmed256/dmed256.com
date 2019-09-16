import React from 'react';
import { Provider } from 'react-redux';
import { Router as ReactRouter } from 'react-router';

import Layout from './Layout';
import { getStore } from './redux';
import Router from './routing/Router';
import history from './routing/history';


const App: React.FC = () => (
  <Provider store={getStore()}>
    <ReactRouter history={history}>
      <Layout>
        <Router />
      </Layout>
    </ReactRouter>
  </Provider>
);

export default App;
