import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class NoUser extends Component {
  render() {
    return (
      <div>
        <p>User does not exist. Please check username or sign up.</p>
        <Link to="/signup">SIGN UP</Link>
      </div>
    )
  }
}

export default NoUser;