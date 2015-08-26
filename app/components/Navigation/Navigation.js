/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router';
import Firebase from 'firebase';

import config from './../../config';

export default class Navigation extends React.Component {
  _loginClick() {
    var ref = new Firebase('https://vivid-inferno-4067.firebaseio.com');
    ref.authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });

    // we would probably save a profile when we register new users on our site
    // we could also read the profile to see if it's null
    // here we will just simulate this with an isNewUser boolean
    var isNewUser = true;
    ref.onAuth(function(authData) {
      if (authData && isNewUser) {
        // save the user's profile into the database so we can list users,
        // use them in Security and Firebase Rules, and show profiles
        ref.child('users').child(authData.uid).set({
          provider: authData.provider,
          name: authData.github.displayName,
          username: authData.github.username,
          email: authData.github.email,
          profileImageURL: authData.github.profileImageURL,
        });
      }
    });
  }

  _logoutClick() {
    var ref = new Firebase(config.firebaseUri);
    ref.unauth();
  }

  render() {
    return (
      <ul>
        <li><Link to='home'>Index</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><button onClick={this._loginClick}>Login</button></li>
        <li><button onClick={this._logoutClick}>Logout</button></li>
      </ul>
    );
  }
}
