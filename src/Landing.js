import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';

class Landing extends Component {
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
          <Link to="/login"><Button className="Login-btn" bsStyle="default" bsSize="large">LOG IN</Button></Link>
          <Link to="/signup"><Button className="Signup-btn" bsStyle="primary" bsSize="large">SIGN UP</Button></Link>
        </div>
      </div>
    );
  }
}

export default Landing;
