import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// Create Redux store
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
