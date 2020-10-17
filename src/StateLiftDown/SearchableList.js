// // Before
// import React from "react";
// import List from "./List";
// import Search from "./Search";

// export default function SearchableList({ list }) {
//   return (
//     <div>
//       <Search>Search List</Search>
//       <List list={list} />
//     </div>
//   );
// }

// After Lift Up / Before State Down
// import React, { Component } from "react";
// import List from "./List";
// import Search from "./Search";

// export default class SearchableList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       query: "",
//       archiveItem: []
//     };

//     // this.onChange = this.onChange.bind(this);
//   }

//   onChange = (event) => {
//     const { value } = event.target;

//     this.setState({
//       query: value,
//     });
//   };

//   onArchive(id) {
//       const { archiveItem } = this.state;
      
//       this.setItem({
//           archiveItem: [...archiveItem, id]
//       });
//   }
//   render() {
//     const { list } = this.props;
//     const { query, archiveItem } = this.state;

//     const filteredList = list.filter(byQuery(query)).filter(byArchived(archiveItem));

//     return (
//       <div>
//         <Search query={query} onChange={this.onChange}>
//           Search List
//         </Search>
//         <List list={filteredList} onArchive={this.onArchive} />
//       </div>
//     );
//   }
// }

// function byQuery(query) {
//   return function (item) {
//     return !query || item.name.toLowerCase().includes(query.toLowerCase());
//   };
// }

// function byArchived(archiveItem) {
//     return function(item) {
//         return !archiveItem.includes(item.id);
//     }
// }
// // function byQuery(query, item) {
// // //   return function () {
// //     debugger;
// //     return !query || item.name.toLowerCase().includes(query.toLowerCase());
// // //   };
// // }

// // byQuery = query => item => {
// //     debugger;
// //     return !query || item.name.toLowerCase().includes(query.toLowerCase());
// // }



// After State Down 
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
