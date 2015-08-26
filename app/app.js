/* jshint esnext: true */
import React from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';

import routes from './routes';

main();

function main() {
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });
}
