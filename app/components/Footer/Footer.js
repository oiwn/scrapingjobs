/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;
let Toolbar = mui.Toolbar;
let ToolbarGroup = mui.ToolbarGroup;
let FlatButton = mui.FlatButton;
let ToolbarSeparator = mui.ToolbarSeparator;

class Footer extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <Paper zDepth={1}>
        <Toolbar>
          <ToolbarGroup key={1} float='left'>
            <FlatButton label='Home' containerElement={<Link to='home'/>} />
            <FlatButton label='About' containerElement={<Link to='about'/>} primary={true} />
            <FlatButton label='Add Job' containerElement={<Link to='add-job'/>} primary={true} />
          </ToolbarGroup>
          <ToolbarSeparator/>
        </Toolbar>

        <nav>
          <Link to='home'>Index</Link>
          <Link to='about'>About</Link>
        </nav>
      </Paper>
    );
  }
}

Footer.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Footer;
