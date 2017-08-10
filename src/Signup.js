import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Signup extends Component {
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
          <button className="signup">SIGNUP</button>
          <button className="login">LOGIN</button>
        </div>
      </div>
    );
  }
}

export default Signup;
