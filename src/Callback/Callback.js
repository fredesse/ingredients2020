import React, { Component } from 'react';
//import loading from './loading.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './../App.css';

class Callback extends Component {

  sendToDashboard() {
    return setTimeout(() => {
      this.props.history.push('/dashboard');
      console.log('moving on to dashboard');
    }, 2000);
  }

  render() {

    return (
      <div>
        <h1>Please wait while we redirect you to the app</h1>
        {this.sendToDashboard()}
      </div>
    );
  }
}

export default Callback;
//<img src={loading} alt="loading"/>  style={style}
//    const style = {
    //   position: 'absolute',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   height: '100vh',
    //   width: '100vw',
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   backgroundColor: 'white',
    // }
//<Link to="/dashboard"><Button bsStyle="default">Proceed</Button></Link>
