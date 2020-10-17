// // Before Lift State 
// import React from "react";

// export default function List({ list }) {
//   return (
//     <div>
//       <ul>
//         {list.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// After Lift State
// Before Down State
// import React from "react";

// export default function List({ list, onArchive}) {
//   return (
//     <div>
//       <ul>
//         {list.map((item) => (
//           <li key={item.id}>
//               <span>{item.name}</span>
//               <span>
//                   <button type="button" onClick={()=> onArchive(item.id)}>Archive</button>
//               </span>
//               </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// After Down State
import React, { Component } from 'react'

export default class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      archiveItems : []
    }

    // this.onArchive = this.onArchive.bind(this);
    
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