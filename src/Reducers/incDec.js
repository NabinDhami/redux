// Reducer is a function that is used to store logic.
// Accepts state and action (simple object).

// Reducers are functions that takes current state and an action as argumnets and return a new state

// Reducer must be a pure function! This means that:
// The return value depends only on the arguments (you can only work with arguments)
// The function has no side effects (changing external data or changing arguments)

const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export default changeTheNumber;
