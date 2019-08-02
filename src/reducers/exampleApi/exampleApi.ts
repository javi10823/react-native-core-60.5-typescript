import {
  ACTION_TYPE_EXAMPLE,
  ExampleActionTypes,
  PayloadExample,
} from '../../actions/types';

export interface State {
  item?: PayloadExample;
}

const INITIAL_STATE: State = {
  item: undefined,
};

export default (
  state: State = INITIAL_STATE,
  action: ExampleActionTypes,
): State => {
  switch (action.type) {
    case ACTION_TYPE_EXAMPLE:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
