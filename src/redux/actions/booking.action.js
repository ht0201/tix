import {
  CHOICE_CHAIR,
  GET_LIST_TICKET,
} from "./../constants/booking.constants";
import axios from "axios";

export const getListTicketAction = (listTicket) => {
  return {
    type: GET_LIST_TICKET,
    payload: listTicket,
  };
};

export const getListTicketAPI = (maLichChieu) => {
  console.log("maLichChieu API", maLichChieu);
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      });
      dispatch(getListTicketAction(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getChoiceChairAction = (choiceChair) => {
  return {
    type: CHOICE_CHAIR,
    payload: choiceChair,
  };
};

export const getChoiceChairAPI = (maGhe) => {
  console.log("maGhe API", maGhe);
  return (dispatch) => {
    dispatch(getChoiceChairAction(maGhe));
  };
};
