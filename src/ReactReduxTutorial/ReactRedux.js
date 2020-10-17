import React from "react";
import { store } from "./store/store";
import { Provider, connect } from "react-redux";
import { doAddTodo, doToggleTodo } from "./actions/todoAction";
import TodoCreate from "./components/TodoCreate";
import { v4 as uuid } from "uuid";

function mapStateToPropsList(state) {
  return {
    todosAsIds: state.todoState.ids,
  };
}

function mapStateToPropsItem(state, props) {
  return {
    todo: state.todoState.entities[props.todoId],
  };
}

function mapDispatchToPropsItem(dispatch) {
  return {
    onToggleTodo: (id) => dispatch(doToggleTodo(id)),
  };
}

function mapDispatchToPropsCreate(dispatch) {
  return {
    onAddTodo: (name) => dispatch(doAddTodo(uuid(), name)),
  };
}

const ConnectedTodoList = connect(mapStateToPropsList, null)(TodoList);
const ConnectedTodoItem = connect(
  mapStateToPropsItem,
  mapDispatchToPropsItem
)(TodoItem);
const ConnectedTodoCreate = connect(null, mapDispatchToPropsCreate)(TodoCreate);

function ReactReduxTutorial() {
  return (
    <Provider store={store}>
      <div>Todo App</div>
      <TodoApp />
    </Provider>
  );
}

function TodoApp() {
  return (
    <div>
      <ConnectedTodoCreate />
      <ConnectedTodoList />
    </div>
  );
}

function TodoList({ todosAsIds }) {
  return (
    <div>
      {todosAsIds.map((todoId) => (
        <ConnectedTodoItem key={todoId} todoId={todoId} />
      ))}
    </div>
  );
}

function TodoItem({ todo, onToggleTodo }) {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
}

export default ReactReduxTutorial;
