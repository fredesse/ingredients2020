import React, { Component } from 'react';
import './App.css';

class SavedItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Dummy item 1</li>
            <li>Dummy item 2</li>
          </ul>
{/*          {this.props.items.map((item) =>
            <div>
              {item}
            </div>
          )}*/}
        </div>
      </div>
    )
  }
}

export default SavedItems;