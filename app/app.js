import React from 'react';
import mui from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

let ThemeManager = new mui.Styles.ThemeManager();

// import Header from './components/Header';
import { AppTopToolbar } from './components';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import LeftNavigation from './components/LeftNavigation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <div id="app">
        <AppTopToolbar />
        <hr />
        <div className="row">
          <main className="col-lg-9 col-md-8">
            <RouteHandler />
          </main>
          <aside className="col-lg-3 col-md-4">
            <Sidebar />
          </aside>
        </div>
        <LeftNavigation />
        <Footer />
      </div>
    );
  }
}
/* jshint ignore:stop */

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(App);
