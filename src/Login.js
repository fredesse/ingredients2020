import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Ingredients 20/20</h2>
        </div>
        <div>
          <input type="email" />
          <input type="password" />
        </div>
        <div>
          <button className="login">LOGIN</button>
          <button className="signup">SIGNUP</button>
        </div>
      </div>
    );
  }
}

export default Login;
