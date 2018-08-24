import { LOAD_PRODUCTS, LOAD_MSG, LOAD_CARS } from "./actions";

export function loadProducts(productsData) {
  console.log(productsData);
  return { type: LOAD_PRODUCTS, payload: productsData };
}

export function loadMsg(msgData) {
  console.log(msgData);
  return { type: LOAD_MSG, payload: msgData };
}

export function loadCars(cars) {
  console.log(cars);
  return { type: LOAD_CARS, payload: cars };
}
