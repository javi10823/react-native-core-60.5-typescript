import { Action } from "../../actions/exampleGet/exampleGet";
import {
  REQUEST_EXAMPLE_GET_REQUEST,
  REQUEST_EXAMPLE_GET_ERROR,
  REQUEST_EXAMPLE_GET_RESPONSE
} from "../../actions/types";

export interface State {
  error?: string;
  loading?: boolean;
  results?: object;
}

const INITIAL_STATE: State = {
  error: undefined,
  loading: false,
  results: undefined
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case REQUEST_EXAMPLE_GET_REQUEST:
      return { ...state, loading: true };
    case REQUEST_EXAMPLE_GET_RESPONSE:
      return { ...state, results: action.payload.body.results, loading: false };
    case REQUEST_EXAMPLE_GET_ERROR:
      return { ...state, error: action.error.message, loading: false };
    default:
      return state;
  }
};
