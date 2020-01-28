import React, { Component } from 'react';
import Comments from './Comments';
import UserLogged from './UserLogged';
import SignInForm from './SignInForm';

class Home extends Component {
  render() {
    return (
      <div className="ui comments">
        <h1 style={{ textAlign: 'center' }}>Welcome Back to Fakebook!</h1>
        <h4 style={{ textAlign: 'center', padding: '10px' }}>
          LAST USERS COMMENTS. JOIN THE CONVERSATION!
        </h4>
        <Comments />
      </div>
    );
  }
}

export default Home;
