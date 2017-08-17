import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
// import SavedItems from './SavedItems';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResName: '',
      searchResLink: '',
      pastSearches: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }


  logout() {
    this.props.auth.logout();
    this.props.history.push('/');
  }

  renderPastSearches() {
    console.log('my saved items btn was clicked');

    var data = {
      userID: this.props.history.userID
    }
    //here we need to create a get method to populate pastSearches array
    console.log('line 34', data.userID);
    $.post('/api/pastSearches', {
      data: data
    })
    .done((items) => {
      console.log('items received');
      //on sucess we set the new state
      console.log(items);
      this.setState({
        pastSearches: items
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

  renderSearch(searchResName, link) {
    this.setState({
      searchResName: searchResName,
      searchResLink: link || ''
    });
  }

  searchDb(e) {
    e.preventDefault();

    var lowerCaseSearch = this.state.search.toLowerCase();
    var userID = this.props.history.userID;

    var data = {
      ingredient: lowerCaseSearch,
      userID: userID
    }

    $.post('/api/ingredients', {
      data: data
    })
    .done((str) => {
      this.renderSearch(str.name, str.link);
    })
    .fail((str) => {
      this.renderSearch(str.responseText);
    })

  }
  render() {
    const {isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          !isAuthenticated() &&
          <p>Please log in to gain access to this page</p>
        }
        {
        isAuthenticated() && (
        <div>
          <div>
            <Button bsStyle="default" className="Logout-btn" onClick={this.logout.bind(this)}>LOG OUT</Button>
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
            {this.state && this.state.searchResLink ?
              <div>{this.state.searchResName + ' found in database! - '}
                <a href={this.state.searchResLink} target="_blank">{this.state.searchResLink}</a>
              </div> :
              <div>{this.state.searchResName}</div>
            }
          </div>
          <div>
            <button onClick={this.renderPastSearches.bind(this)}>
              MY SAVED ITEMS
            </button>
            <div>
              {this.state.pastSearches}
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default Dashboard;
