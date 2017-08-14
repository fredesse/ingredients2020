import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class IncorrectPw extends Component {
  render() {
    return (
      <div>
        <p>Incorrect password.</p>
        <Link to="/signup">SIGN UP</Link>
      </div>
    )
  }
}

export default IncorrectPw;