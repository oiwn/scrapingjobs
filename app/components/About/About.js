/* jshint esnext: true */
import React from 'react';
import Navigation from './../Navigation';

export default class About extends React.Component {
    render() {
      return (
        <div>
          <h1>About</h1>
          <p>Few sentences about this website</p>
          <hr/>
          <Navigation />
        </div>
      );
    }
}
