// import React, { Component } from "react";

// export default class TodoCreate extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "",
//     };

//     this.onCreateTodo = this.onCreateTodo.bind(this);
//     this.onChangeName = this.onChangeName.bind(this);
//   }

//   onChangeName(event) {
//     this.setState({
//       value: event.target.value,
//     });
//   }

//   onCreateTodo(event) {
//     this.props.onAddTodo(this.state.value);
//     this.setState({ value: "" });
//     event.prevetDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onCreateTodo}>
//           <input
//             type="text"
//             placeholder="Add Todo..."
//             value={this.state.value}
//             onChange={this.onChangeName}
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }


import React, { useState } from "react";

export default function TodoCreate ({ onAddTodo }) {
  
  const [value, setValue] = useState('222');

  const onChangeName = event => {
    debugger;
    setValue(event.target.value);
  }

  const onCreateTodo = event => {
    onAddTodo(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onCreateTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={value}
          onChange={onChangeName}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}