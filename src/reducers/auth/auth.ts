import { Action } from '../../actions/auth/auth';
import {
  REQUEST_REGISTER_USER_REQUEST,
  REQUEST_REGISTER_USER_RESPONSE,
  REQUEST_REGISTER_USER_ERROR,
} from '../../actions/types';

export interface State {
  error?: string;
  loading?: boolean;
  createUseriid?: string;
  userId?: string;
}

const INITIAL_STATE: State = {
  error: undefined,
  loading: false,
  createUseriid: undefined,
  userId: undefined,
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case REQUEST_REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case REQUEST_REGISTER_USER_RESPONSE:
      return { ...state, userId: action.payload.body.iid, loading: false };
    case REQUEST_REGISTER_USER_ERROR:
      return { ...state, error: action.error.message, loading: false };
    default:
      return state;
  }
};
