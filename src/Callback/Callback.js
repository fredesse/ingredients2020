import React, { Component } from 'react';
//import loading from './loading.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './../App.css';

class Callback extends Component {
  render() {

    return (
      <div>
        <Link to="/dashboard"><Button bsStyle="default">Proceed</Button></Link>
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
