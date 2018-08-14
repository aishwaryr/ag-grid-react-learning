import { combineReducers } from "redux";
import { SET_FORM_DATA } from "./actions";

const formData = (state = [], action) => {
  if (action.type === SET_FORM_DATA) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  formData
});

export default rootReducer;
