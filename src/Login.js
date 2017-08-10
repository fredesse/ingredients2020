import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <ul>
            <li><Link to="/dashboard">LOGIN</Link></li>
            <li><Link to="/signup">SIGNUP</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
