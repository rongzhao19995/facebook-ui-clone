import React, { Component } from 'react'

export default class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      archiveItems : []
    }

  }

  onArchive(id) {
    const { archiveItems } = this.state;

    this.setState({
      archiveItems: [...archiveItems, id]
    })
  }
  render() {
    const { list } = this.props;
    const { archiveItems } = this.state;

    const filteredList = list.filter(byArchived(archiveItems));
    return (
      <div>
        {filteredList.map((item) => (
          <li key={item.id}>
              <span>{item.name}</span>
              <span>
                  <button type="button" onClick={()=> this.onArchive(item.id)}>Archive</button>
              </span>
              </li>
        ))}
      </div>
    )
  }
}


function byArchived(archiveItem) {
  return function(item) {
      return !archiveItem.includes(item.id);
  }
}