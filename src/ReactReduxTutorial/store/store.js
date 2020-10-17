import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { filterReducer } from "../reducers/filterReducer";
import { todoReducer } from "../reducers/todoReducer";

// store

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
});


const logger = createLogger();
const middleware = [logger];
 
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  )
);

export { store };
