/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let LeftNav = mui.LeftNav;
let MenuItem = mui.MenuItem;


class LeftNavigation extends React.Component {
  render() {
    let menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];

    return (
      <LeftNav
        ref="leftNavigation"
        docked={false}
        menuItems={menuItems} />
    );
  }
}

export default LeftNavigation;
