/* jshint esnext: true */
import React from 'react';
import Router from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';

main();

function main() {
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo: https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.body);
  });
}
