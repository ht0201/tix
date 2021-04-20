import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import bookingReducer from "./booking.reducer";
import userReducer from "./user.reducer";
import adminQuanLyPhimReducer from "./admin.quanlyphim.reducer";

const rootReducer = combineReducers({
  movieReducer,
  bookingReducer,
  userReducer,
  adminQuanLyPhimReducer,
});

export default rootReducer;
