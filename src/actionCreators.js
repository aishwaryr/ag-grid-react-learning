import { LOAD_PRODUCTS, LOAD_MSG, LOAD_CARS, SET_FILTER_TERM, LOAD_TEST_DATA } from "./actions";

export function loadProducts(productsData) {
  // console.log(productsData);
  return { type: LOAD_PRODUCTS, payload: productsData };
}

export function loadMsg(msgData) {
  // console.log(msgData);
  return { type: LOAD_MSG, payload: msgData };
}

export function loadCars(cars) {
  // console.log(cars);
  return { type: LOAD_CARS, payload: cars };
}

export function setFilterTerm(term) {
  // console.log(term);
  return { type: SET_FILTER_TERM, payload: term };
}

export function loadTestData(testData) {
  console.log(testData);
  return { type: LOAD_TEST_DATA, payload: testData };
}
