import changeTheNumber from "./incDec";
import { combineReducers } from "redux";
// Combines multiple reducers into one reducer function.

const rootReducer = combineReducers({
  changeTheNumber,
});
export default rootReducer;
