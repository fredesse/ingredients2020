import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Auth from './Auth/Auth.js';
import './App.css';

class Landing extends Component {

  auth = new Auth()

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Ingredients 20/20</h1>
        </div>
        <div className="Welcome-header">
          <h2>A New Way to Ensure Your Food Safety</h2>
        </div>
        <div className="Button-parent">
          <Button className="Login-btn" bsStyle="default" bsSize="large" onClick={this.auth.login.bind(this)}>LOG IN / SIGN UP</Button>
        </div>
      </div>
    );
  }
}

export default Landing;
