// Action are plain Jsvascript objects that have a type field.
// Action only tells what to do but they dont tell how to do

// Action Creator
// pure function which creates action

export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
