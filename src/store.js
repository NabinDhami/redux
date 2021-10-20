/*A store is made from a reducer function,
which takes the current state, and returns a new state 
depending on the action it was given.*/

import { createStore } from "redux";
import rootReducer from "./Reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
