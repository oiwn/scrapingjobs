/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';

import Navigation from './../Navigation';
import Developers from './../Developers';

var ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let Toolbar = mui.Toolbar;
let FlatButton = mui.FlatButton;
let RaisedButton = mui.RaisedButton;
let ToolbarGroup = mui.ToolbarGroup;

class Header extends React.Component {
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
      <header>
        <AppBar title='Web Scraping Jobs Board' zDepth={1}
                onLeftIconButtonTouchTap={this._handleClick}>
          <ToolbarGroup key={1} float='right'>
            <RaisedButton label='Login' primary={true} />
          </ToolbarGroup>
        </AppBar>
      </header>
    );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Header;
