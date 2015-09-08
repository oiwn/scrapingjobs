/* jshint esnext: true */
import React from 'react';
import {Route, DefaultRoute, RouteHandler} from 'react-router';

import App from './app';
import Home from './components/Home';
import About from './components/About';

const AppRoutes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='/about' handler={About} />
  </Route>
);

export default AppRoutes;
