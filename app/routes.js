/* jshint esnext: true */
import React from 'react';
import { Route, DefaultRoute, RouteHandler } from 'react-router';

import { App } from './containers';
import { Home, About } from './containers';
import { JobAdd } from './containers';

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="home" path="/" handler={Home} />
    <Route name="about" path="/about" handler={About} />
    <Route name="job-add" path="/add-job" handler={JobAdd} />
  </Route>
);

export default AppRoutes;
