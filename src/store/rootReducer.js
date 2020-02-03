import { combineReducers } from "redux";

import meals from "./meals/reducers";

const rootReducer = combineReducers({
  meals
});

export default rootReducer;
