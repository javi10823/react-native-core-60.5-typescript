import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

function getMiddlewares() {
  const middlewares = [thunk];

  if (__DEV__) {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  return middlewares;
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...getMiddlewares())
);
