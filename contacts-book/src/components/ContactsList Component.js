import React, { Component } from 'react';
import ContactCard from './ContactCardComponent';
import { getRandomUsers } from '../User';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBarComponent'
import './ContactsListComponent.css'
export default class ContactsList extends Component {

  constructor(props) {
    super(props);
    this.state = { fetching: true, searchText: '' };
  }
  //gets first 9 users
  componentWillMount() {
    //request random users
    //set state to fetching
    getRandomUsers(9)
      .then(data => {
        this.setState({
          users: data,
          fetching: false
        });
      });
  }

  //serach by
  searchText = res => {
    this.setState({ searchText: res });
  }

  //Loads 9 more users
  addUsers() {
    getRandomUsers(9)
      .then(data => {
        data.map(u => {
          this.setState({
            users: [...this.state.users, u],
            fetching: false
          })
        });
      });
  }

  //render user items into the ContactCard
  renderUserItems() {
    return this.state.users.filter(user => ( //search filter
      user.name.first.toLowerCase().includes(this.state.searchText.toLowerCase())
      || user.name.last.toLowerCase().includes(this.state.searchText.toLowerCase())
    ))
      .map((user, index) => {
        const first = user.name.first;
        const last = user.name.last;
        return (
          <ContactCard
            key={first + last + index}
            gender={user.gender}
            firstName={first}
            lastName={last}
            email={user.email}
            picture={user.picture.large} />
        );
      });
  }

  render() {
    if (this.state.fetching) {
      //show loader
      return (
        <div>
        </div>
      );
    }

    return (
      <div >
        <SearchBar searchText={this.searchText} />
        <div className="root">
          <GridList className="gridList" cols={3}>
            {this.renderUserItems()
              .map(tile => (
                <GridListTile >
                  {tile}
                </GridListTile>
              ))}
          </GridList>
          <br />
          <Button variant="contained" color="secondary" onClick={() => { this.addUsers() }}>Load More</Button>
        </div>
      </div>

    );
  }
}