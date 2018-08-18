import { combineReducers } from "redux";
import { LOAD_PRODUCTS } from "./actions";

const productsData = (state = {}, action) => {
  console.log("reducer chala");
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  productsData
});

export default rootReducer;
