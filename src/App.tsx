import React from 'react';

import Layout from './Layout';
import Router from './routing/Router';


const App: React.FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
