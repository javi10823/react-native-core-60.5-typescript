// Authentication

export const REQUEST_REGISTER_USER = 'REQUEST_REGISTER_USER';
export const REQUEST_REGISTER_USER_REQUEST = 'REQUEST_REGISTER_USER_REQUEST';
export const REQUEST_REGISTER_USER_RESPONSE = 'REQUEST_REGISTER_USER_RESPONSE';
export const REQUEST_REGISTER_USER_ERROR = 'REQUEST_REGISTER_USER_ERROR';

// EXAMPLE Get Api

export const REQUEST_EXAMPLE_GET = 'REQUEST_EXAMPLE_GET';
export const REQUEST_EXAMPLE_GET_REQUEST = 'REQUEST_EXAMPLE_GET_REQUEST';
export const REQUEST_EXAMPLE_GET_RESPONSE = 'REQUEST_EXAMPLE_GET_RESPONSE';
export const REQUEST_EXAMPLE_GET_ERROR = 'REQUEST_EXAMPLE_GET_ERROR';

export const ACTION_TYPE_EXAMPLE = 'ACTION_TYPE_EXAMPLE';
export const ACTION_TYPE_OTHER_EXAMPLE = 'ACTION_TYPE_OTHER_EXAMPLE';

export interface PayloadExample {
  user: string;
  id: number;
}

interface ExampleAction {
  type: typeof ACTION_TYPE_EXAMPLE;
  payload: PayloadExample;
}
interface ExampleOtherAction {
  type: typeof ACTION_TYPE_OTHER_EXAMPLE;
  payload: PayloadExample;
}

export type ExampleActionTypes = ExampleAction | ExampleOtherAction;
