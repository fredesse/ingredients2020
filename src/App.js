import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Ingredients 20/20</h2>
        </div>
        <div>
          <h1>Introducing a new way to ensure your food safety</h1>
        </div>
        <button className="login">LOGIN</button>
        <button className="signup">SIGNUP</button>
      </div>
    );
  }
}

export default App;
