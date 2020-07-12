import { combineReducers } from "redux";
import auth from "./auth";
import book from "./book";
import genre from "./genre";
import author from "./author";

export default combineReducers({
  auth,
  book,
  genre,
  author,
});
