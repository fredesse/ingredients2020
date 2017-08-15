import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import SavedItems from './SavedItems';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchRes: '',
      elLink: '',
      savedItems: [],
      renderItems: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }

  logOutUser() {
    //probs need some kind of server resp for ending session
    console.log('log out button clicked');
    this.props.history.push('/login');
  }

  renderSavedItems() {
    console.log('my saved items btn was clicked');

    this.setState({
      renderItems: true
    });

    //here we need to create a get method to populate savedItems array
    $.get('')
    .done((items) => {
      console.log('items received');
      //on sucess we set the new state
      this.setState({
        savedItems: items
      });
    })
    .fail(() => {
      console.log('failed getting items');
    });

  }



  handleSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  renderSearch(searchRes, link) {
    this.setState({
      searchRes: searchRes,
      elLink: link || ''
    })
  }

  searchDb(e) {
    e.preventDefault();

    var lowerCaseSearch = this.state.search.toLowerCase();

    var data = {
      ingredient: lowerCaseSearch
    }

    $.post('/api/ingredients', {
      data: data
    })
    .done((str) => {
      this.renderSearch(str.name, str.link);
      console.log(str);
    })
    .fail((str) => {
      this.renderSearch(str.responseText);
    })

  }
  render() {
    return (
      <div>
        <div>
          <div onClick={this.logOutUser.bind(this)}>LOG OUT</div>
        </div>
        <div>
          <h2>Search Ingredients 20/20</h2>
        </div>

        <form onSubmit={this.searchDb}>
          <input type="text" value={this.state.search} placeholder="Search Ingredient"
              onChange={this.handleSearch}/>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {this.state && this.state.elLink ?
            <div>{this.state.searchRes + ' found in database! - '}
              <a href={this.state.elLink} target="_blank">{this.state.elLink}</a>
            </div> :
            <div>{this.state.searchRes}</div>
          }
        </div>
        <div>
          <div onClick={this.renderSavedItems.bind(this)}>
            MY SAVED ITEMS
          </div>
          <div>
            {this.state.renderItems ? <SavedItems items={this.state.items} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
