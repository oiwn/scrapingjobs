/* jshint esnext: true */
import React from 'react';
import { Route, DefaultRoute, RouteHandler } from 'react-router';

import App from './App';
import Home from './views/home';
import About from './views/about';
import AddJob from './views/addJob';

const AppRoutes = (
  <Route path='/' component={Home} handler={App}>
    <DefaultRoute component={Home} handler={Home} />
    <Route name='home' path='/' component={Home} handler={Home} />
    <Route name='about' path='/about' component={About} handler={About} />
    <Route name='add-job' path='/add-job' component={AddJob} handler={AddJob} />
  </Route>
);

export default AppRoutes;
