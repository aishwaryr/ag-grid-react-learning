import store from "./store";
import { loadMsg, loadCars, loadTestData } from "./actionCreators";

export function updateReduxStore(msg) {
  // console.log("updateReduxStore Called", msg);
  return store.dispatch(loadMsg(msg));
}

export function updateCarsDataInReduxStore(cars) {
  // console.log("updateCarsDataInReduxStore ran");
  return store.dispatch(loadCars(cars));
}

export function fetchTestData(testDataArray) {
  // const testDataArray = ;
  console.log("fetchTestData Ran in Util.js");
  return store.dispatch(
    loadTestData([
      { id: 0, name: "ash", role: "dev" },
      { id: 1, name: "shaw", role: "spy" },
      { id: 2, name: "root", role: "it" }
    ])
  );
}

export function updateTestData(dataArray, newItem, index) {
  dataArray[index] = newItem;
  console.log(dataArray);
  return store.dispatch(loadTestData(dataArray));
}

export function comparePrice(a, b) {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
  return 0;
}
