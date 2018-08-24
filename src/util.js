import store from "./store";
import { loadMsg, loadCars } from "./actionCreators";

export function updateReduxStore(msg) {
  console.log("updateReduxStore Called", msg);
  return store.dispatch(loadMsg(msg));
}

export function updateCarsDataInReduxStore(cars) {
  console.log("updateCarsDataInReduxStore ran");
  return store.dispatch(loadCars(cars));
}

export function comparePrice(a, b) {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
  return 0;
}
