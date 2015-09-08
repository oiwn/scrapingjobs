/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;

class Footer extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <Paper zDepth={1}>
        <ul>
          <li><Link to='home'>Index</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
      </Paper>
    );
  }
}

Footer.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Footer;
