import axios from "axios";
import { THEM_PHIM } from "../constants/admin.quanlyphim.action";

export const createMovieAction = (newMovie) => {
  return {
    type: THEM_PHIM,
    payload: newMovie,
  };
};

export const createMovieAPI = (newMovie) => {
  console.log("newMovie", newMovie);
  return async (dispatch) => {
    try {
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        data: newMovie,
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};
