/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router';
import Firebase from 'firebase';

import config from './../../config';

export default class Navigation extends React.Component {
  constructor() {
    super();

    this._loginClick = this._loginClick.bind(this);
    this._logoutClick = this._logoutClick.bind(this);

    // this.propTypes = { data: React.PropTypes.object };
    // this.defaultProps = { initialData: [] };
    // this = {authorized: false};
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(config.firebaseUri);
    let authData = this.firebaseRef.getAuth();
    let authorized = authData ? true : false;
    console.log(authData);
    let userName = authData ? authData[authData.provider].displayName : null;

    this.setState({
      authorized: authorized,
      userName: userName,
      authData: authData,
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  _loginClick() {
    var ref = new Firebase(config.firebaseUri);
    ref.authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
        this.setState({authorized: false});
      } else {
        console.log('Authenticated successfully with payload:', authData);
        let userName = authData[authData.provider].displayName;
        this.setState({authorized: true, authData: authData, userName: userName});
      }
    }.bind(this));

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

        let userName = authData[authData.provider].displayName;
        this.setState({authorized: true, authData: authData, userName: userName});
      }
    }.bind(this));
  }

  _logoutClick() {
    var ref = new Firebase(config.firebaseUri);
    ref.unauth();
    this.setState({authorized: false});
  }

  render() {
    let welcome;
    let authButton;
    if (this.state.authorized) {
      authButton = (<button onClick={this._logoutClick}>Logout</button>);
      welcome = (<h5>Welcome back {this.state.userName}</h5>);
    } else {
      authButton = (<button onClick={this._loginClick}>Login</button>);
    };

    return (
      <nav>
        {welcome}
        <ul>
          <li><Link to='home'>Index</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
        {authButton}
      </nav>
    );
  }
}
