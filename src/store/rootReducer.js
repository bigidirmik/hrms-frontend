import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";

const rootReducer = combineReducers({
  candidate: candidateReducer,
});

export default rootReducer;
