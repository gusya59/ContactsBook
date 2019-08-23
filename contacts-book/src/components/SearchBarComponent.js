import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";

import './SearchBarComponent.css'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //handle search
  handleChange(event) {
    this.setState({ searchText: event.target.value }, () => {
      this.props.searchText(this.state.searchText);
    });
  }

  render() {
    return (
      <div className="search">
        <InputBase className="input"
          placeholder="Search…"
          name="SearchTerm"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
