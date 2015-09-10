/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;

class Sidebar extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <div>
        <h3>Sidebar</h3>
      </div>
    );
  }
}

Sidebar.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Sidebar;
