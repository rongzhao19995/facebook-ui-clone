// // Before
// import React, { Component } from "react";

// export default class Search extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       query: "",
//     };

//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(event) {
//     const { value } = event.target;

//     this.setState({
//       query: value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.props.children}
//         <input type="text" value={this.state.query} onChange={this.onChange} />
//       </div>
//     );
//   }
// }


// // After
import React from "react";

export default function Search({ query, onChange, children }) {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={onChange} />
    </div>
  );
}
