/* jshint esnext: true */
import React from 'react';

import Navigation from './../Navigation';
import Developers from './../Developers';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Index</h1>
        <p>website home page</p>
        <Developers />
        <hr/>
        <Navigation />
      </div>
    );
  }
}
