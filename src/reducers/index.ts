import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import example, { ExampleInitialState } from './example/example';

interface State {
  example: ExampleInitialState;
  form: object;
}

const State = combineReducers({
  example,
  form: formReducer,
});

export default State;
