import { GET_LIST_TICKET } from "./../constants/booking.constants";
import movieReducer from "./movie.reducer";

const initialState = {
  listTicket: [],
};

const bookingReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_LIST_TICKET: {
      console.log(payload);
      console.log("lich chieu", movieReducer.state.lichChieuChoice);
      const ticket = movieReducer.state.lichChieuChoice;
      return { ...state, listTicket: ticket };
    }

    default:
      return state;
  }
};

export default bookingReducer;
