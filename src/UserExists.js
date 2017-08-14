import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class UserExists extends Component {
  render() {
    return (
      <div>
        <p>Username already exists.</p>
        <Link to="/login">LOG IN</Link>
      </div>
    )
  }
}

export default UserExists;