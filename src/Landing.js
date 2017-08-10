import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to Ingredients 20/20</h2>
        </div>
        <div>
          <h1>Introducing a new way to ensure your food safety</h1>
        </div>
        <ul>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/signup">SIGNUP</Link></li>
        </ul>
      </div>
    )
  }
}

export default Landing;