import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import BlogListing from '../pages/BlogListing';
import NotFoundPage from '../pages/NotFoundPage';
import Resume from '../pages/Resume';


const Router = () => (
  <Switch>
    <Route path="/" exact component={BlogListing} />
    <Route path="/about" exact component={About} />
    <Route path="/resume" exact component={Resume} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Router;
