/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';
import { RouteHandler} from 'react-router';

var ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <div id='app-container'>
        <Header />
        <Sidebar />
        <main id='content' style={{width:'70%'}}>
          <RouteHandler />
        </main>
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default App;
