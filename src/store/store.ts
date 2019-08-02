import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import { getConfig } from '../config';

function getMiddlewares() {
  const middlewares = [thunk];

  const config = getConfig();

  if (config.isDev) {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  return middlewares;
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...getMiddlewares()),
);

export type Store = ReturnType<typeof rootReducer>;
