import React from 'react';
import mui from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteHandler } from 'react-router';
import { TopToolbar, SideBar, Footer } from './../../components';

let ThemeManager = new mui.Styles.ThemeManager();

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
        <TopToolbar />
        <br />
        <div className="row">
          <main className="col-lg-9 col-md-8">
            <RouteHandler />
          </main>
          <aside className="col-lg-3 col-md-4">
            <SideBar />
          </aside>
        </div>
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
