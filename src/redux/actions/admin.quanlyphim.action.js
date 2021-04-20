import axios from "axios";
import {
  GET_LIST_MOVIE_SHOWING_FIL,
  THEM_PHIM,
} from "../constants/admin.quanlyphim.constants";

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
      console.log("userLogin", userLogin);
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

export const getListMovieShowingAdminAction = (movieList, tenPhim) => {
  return {
    type: GET_LIST_MOVIE_SHOWING_FIL,
    payload: { movieList, tenPhim },
  };
};

export const getListMovieShowingAdminAPI = (tenPhim = " ") => {
  console.log("tenPhim", tenPhim);
  return (dispacth) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getListMovieShowingAdminAction(res.data, tenPhim));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
