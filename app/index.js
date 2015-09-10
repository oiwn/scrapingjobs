/* jshint esnext: true */
import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import authStore from './stores/auth.js';

main();

function main() {
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo: https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  Router.run(routes, Router.HistoryLocation, function(Handler, routerState) {
    React.render(
      <Provider store={authStore}>
        {() => <Handler routerState={routerState} />}
      </Provider>,
      document.body
    );
  });
}
