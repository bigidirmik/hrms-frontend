import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
