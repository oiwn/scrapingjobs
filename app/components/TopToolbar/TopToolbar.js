/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';
import { Provider } from 'react-redux';

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;
let FlatButton = mui.FlatButton;
let RaisedButton = mui.RaisedButton;
let ToolbarGroup = mui.ToolbarGroup;
let IconMenu = mui.IconMenu;
let IconButton = mui.IconButton;

class TopToolbar extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._toggleLeftNavClick.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  _toggleLeftNavClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <header>
        <AppBar title="Web Scraping Jobs Board" zDepth={1}
                onLeftIconButtonTouchTap={this._toggleLeftNavClick}>
          <ToolbarGroup key={0} float="right">
            <RaisedButton label="Login" primary={true} />
          </ToolbarGroup>
        </AppBar>
      </header>
    );
  }
}

TopToolbar.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default TopToolbar;
