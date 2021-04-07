import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import bookingReducer from "./booking.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  movieReducer,
  bookingReducer,
  userReducer,
});

export default rootReducer;
