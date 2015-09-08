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
    let containerStyle = {
      float: 'right',
      padding: '4px',
      width: '20%',
    };

    return (
      <div style={containerStyle}>
        <h3>Sidebar</h3>
      </div>
    );
  }
}

Sidebar.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Sidebar;
