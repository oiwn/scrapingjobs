/* jshint esnext: true */
import React from 'react';
import Navigation from './../Navigation';

export default class Login extends React.Component {
  componentWillMount() {
    console.log('On login page!');
    var ref = new Firebase('https://vivid-inferno-4067.firebaseio.com');
    ref.authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Login using firebase jsx</p>
        <hr/>
        <Navigation />
      </div>
    );
  }
}
