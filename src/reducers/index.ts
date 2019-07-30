import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import example, { State as AppState } from "./exampleApi/exampleApi";
import auth from "./auth/auth";

export interface State {
  example: AppState;
}

export default combineReducers({
  form: formReducer,
  example,
  auth
});
