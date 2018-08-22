import { combineReducers } from "redux";
import { LOAD_PRODUCTS } from "./actions";
import { LOAD_MSG } from "./actions";
import { LOAD_CARS } from "./actions";

const productsData = (state = {}, action) => {
  console.log("reducer chala");
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  }
  return state;
};

const msgData = (state = {}, action) => {
  if (action.type === LOAD_MSG) {
    return action.payload;
  }
  return state;
};

const carsData = (state = [], action) => {
  console.log(action);
  if (action.type === LOAD_CARS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  productsData,
  msgData,
  carsData
});

export default rootReducer;
