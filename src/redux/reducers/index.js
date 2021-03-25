import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import bookingReducer from "./booking.reducer";

const rootReducer = combineReducers({
  movieReducer,
  bookingReducer,
});

export default rootReducer;
