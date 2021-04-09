import {
  BOOKING_TICKET,
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

export const bookingTicketAction = (infoTicket) => {
  return {
    type: BOOKING_TICKET,
    payload: infoTicket,
  };
};

export const bookingTicketAPI = (maLichChieu, danhSachVe, history) => {
  console.log("maLichChieu API", maLichChieu);
  return async (dispatch) => {
    try {
      const user = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      alert("Mua ve thanh cong");
      console.log(res);

      dispatch(bookingTicketAction(res.config.data));
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};
