 import React, { Component } from "react";
import List from "./List";
import Search from "./Search";

export default class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    // this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { list } = this.props;
    const { query } = this.state;

    const filteredList = list.filter(byQuery(query));

    return (
      <div>
        <Search query={query} onChange={this.onChange}>
          Search List
        </Search>
        <List list={filteredList}/>
      </div>
    );
  }
}

function byQuery(query) {
  return function (item) {
    return !query || item.name.toLowerCase().includes(query.toLowerCase());
  };
}
