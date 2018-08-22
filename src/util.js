import store from "./store";
import { loadMsg } from "./actionCreators";

export function updateReduxStore(msg) {
  console.log("updateReduxStore Called", msg);
  return store.dispatch(loadMsg(msg));
}
