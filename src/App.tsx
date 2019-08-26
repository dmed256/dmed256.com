import React from 'react';
import { Router as ReactRouter } from 'react-router';

import Layout from './Layout';
import Router from './routing/Router';
import history from './routing/history';


const App: React.FC = () => {
  return (
    <ReactRouter history={history}>
      <Layout>
        <Router />
      </Layout>
    </ReactRouter>
  );
}

export default App;
