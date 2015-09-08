/* jshint esnext: true */
import React from 'react';
import Firebase from 'firebase';

import config from './../../config';

class Developer extends React.Component {
  render() {
    return (
      <div className='developer'>
        <h3><img src={this.props.profileImageURL} /> {this.props.username}</h3>
      </div>
    );
  }
}

class DevelopersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var developerNodes = this.props.data.map(function(developer) {
      let avatar = developer.profileImageURL + '&s=40';
      return (
        <Developer key={developer.userId} username={developer.username}
                   profileImageURL={avatar} />
      );
    });

    return (
      <div className='developersList'>
        {developerNodes}
      </div>
    );
  }
}

class Developers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.initialData};
  }

  componentWillMount() {
    // receive actual data from the firebase
    var _this = this;
    this.firebaseRef = new Firebase(config.firebaseUri + '/users/');
    this.firebaseRef.once('value', function(data) {
      var users = [];
      data.forEach(function(user) {
        let userId = user.key();
        let userData = user.val();
        userData.userId = userId;
        users.push(userData);

        // console.log('forEach', userData);
      });

      _this.setState({
        data: users,
      });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    // console.log(this.props);
    return (
      <div className='developersList'>
        <h1>List of Developers</h1>
        <DevelopersList data={this.state.data} />
      </div>
    );
  }
}
Developers.propTypes = { data: React.PropTypes.array };
Developers.defaultProps = { initialData: [] };

export default Developers;
