import { TODO_ADD, TODO_TOGGLE } from "../constants/actionType";

// action creators

function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id, name },
  };
}

function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id },
  };
}

export { doToggleTodo, doAddTodo };
