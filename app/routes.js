/* jshint esnext: true */
import React from 'react';
import {Route, RouteHandler} from 'react-router';

import Home from './components/Home';
import About from './components/About';

export default (
  <Route>
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='/about' handler={About} />
  </Route>
);
