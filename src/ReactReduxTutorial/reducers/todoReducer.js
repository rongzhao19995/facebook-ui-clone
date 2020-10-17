import { schema, normalize } from "normalizr";
import { TODO_ADD, TODO_TOGGLE } from "../constants/actionType";

const todos = [
  { id: "1", name: "Redux Standalone with advanced Actions", completed:false },
  { id: "2", name: "Redux Standalone with advanced Reducers", completed:false },
  { id: "3", name: "Bootstrap App with Redux", completed:false },
  { id: "4", name: "Naive Todo with React and Redux", completed:false },
  { id: "5", name: "Sophisticated Todo with React and Redux", completed:false },
  { id: "6", name: "Connecting State Everywhere", completed:false },
  { id: "7", name: "Todo with advanced Redux", completed:false },
  { id: "8", name: "Todo but more Features", completed:false },
  { id: "9", name: "Todo with Notifications", completed:false },
  { id: "10", name: "Hacker News with Redux", completed:false },
];

const todoSchema = new schema.Entity("todo");

const normalizedTodos = normalize(todos, [todoSchema]);

const initialTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result,
};

console.log(normalizedTodos);

function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE: {
      return applyToggleTodo(state, action);
    }
    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false };
  const entities = { ...state.entities, [todo.id]: todo };
  const ids = [...state.ids, action.todo.id];
  return [...state, entities, ids];
}

function applyToggleTodo(state, action) {
  const id = action.todo.id;
  const todo = state.entities[id];
  const toggleTodo = { ...todo, completed: !todo.completed };
  const entities = { ...state.entities, [id]: toggleTodo };
  return { ...state, entities };
}

export { todoReducer };
