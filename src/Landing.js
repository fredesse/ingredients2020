import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
        <button className="login" to="/login">LOGIN</button>
        <button className="signup" to="/signup">SIGNUP</button>
      </div>
    )
  }
}

export default Landing;