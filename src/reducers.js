import { combineReducers } from "redux";
import { LOAD_PRODUCTS, LOAD_MSG, LOAD_CARS, SET_FILTER_TERM, LOAD_TEST_DATA } from "./actions";

const productsData = (state = {}, action) => {
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
  // console.log(state);
  // console.log(action);
  if (action.type === LOAD_CARS) {
    return [...action.payload];
  }
  return state;
};

const filterTerm = (state = "", action) => {
  if (action.type === SET_FILTER_TERM) {
    return action.payload;
  }
  return state;
};

const testData = (state = [], action) => {
  console.log(state);
  // console.log(action);
  if (action.type === LOAD_TEST_DATA) {
    return [...action.payload];
  }
  return state;
};

const rootReducer = combineReducers({
  productsData,
  msgData,
  carsData,
  filterTerm,
  testData
});

export default rootReducer;
