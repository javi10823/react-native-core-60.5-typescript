/**
 * Example of Thunk Action outside Foxbox api Call Structure
 *
 */
import {
  ACTION_TYPE_EXAMPLE,
  PayloadExample,
  ExampleActionTypes
} from "../types";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { State as AppState } from "../../reducers/exampleApi/exampleApi";

// TypeScript infers that this function is returning ExampleAction
export function actionExample(
  payloadExample: PayloadExample
): ExampleActionTypes {
  return {
    type: ACTION_TYPE_EXAMPLE,
    payload: payloadExample
  };
}

export interface ParamsExample {
  id: number;
}

function exampleAPICall(params: ParamsExample) {
  // Do something with the params in the api call
  console.log(params);

  return Promise.resolve({
    user: "user",
    id: 1
  });
}

export const thunkActionApiExample = (
  params: ParamsExample
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPICall(params);
  dispatch(actionExample(asyncResp));
};
