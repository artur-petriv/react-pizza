import { combineReducers } from "redux";

import filterReducer from "./filters";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filter: filterReducer,
});

export default rootReducer;
