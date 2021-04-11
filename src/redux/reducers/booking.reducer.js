import {
  CHOICE_CHAIR,
  GET_LIST_TICKET,
  BOOKING_TICKET,
} from "./../constants/booking.constants";
import movieReducer from "./movie.reducer";

const initialState = {
  chairList: [],
  movieInfo: {},
  listChairChoice: [],
  infoBookingTicket: {},
};

const bookingReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_LIST_TICKET: {
      console.log(payload);

      return {
        ...state,
        chairList: payload.danhSachGhe,
        movieInfo: payload.thongTinPhim,
      };
    }

    case CHOICE_CHAIR: {
      console.log("chair", payload);

      // check dangChon in chairList
      const listChoice = state.chairList.filter(
        (chair) => chair.dangChon === true
      );

      // find index dangChon for update status chair
      const index = state.chairList.findIndex(
        (chair) => chair.maGhe === payload
      );

      if (index !== -1) {
        //ghe hien tai
        const currentChair = state.chairList[index];

        // !under = true
        const newChair = { ...currentChair, dangChon: !currentChair.dangChon };

        // update
        state.chairList[index] = newChair;

        // check lai listChairChoice
        // choice: push vo arr, If tim thay (khac -1): del khoi arr, neu ko tim thay ( -1) thi push

        const indexChoice = listChoice.findIndex(
          (chair) => chair.maGhe === payload
        );

        if (indexChoice !== -1) {
          listChoice.splice(indexChoice, 1);
        } else {
          listChoice.push(newChair);
        }

        console.log("listChairChoice", listChoice);

        return { ...state, listChairChoice: listChoice };
      }

      break;
    }

    case BOOKING_TICKET: {
      const infoBookingTicket = JSON.parse(payload);
      console.log("infoBookingTicket", infoBookingTicket);
      return { ...state, infoBookingTicket: infoBookingTicket };
    }

    default:
      return state;
  }
};

export default bookingReducer;
