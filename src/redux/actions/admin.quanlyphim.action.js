import axios from "axios";
import {
  GET_LIST_MOVIE_SHOWING_FIL,
  SUA_PHIM,
  THEM_PHIM,
  XOA_PHIM,
} from "../constants/admin.quanlyphim.constants";

export const createMovieAction = (newMovie) => {
  return {
    type: THEM_PHIM,
    payload: newMovie,
  };
};

export const createMovieAPI = (movie, history, fileUpLoad) => {
  return async (dispatch) => {
    try {
      // add Movie
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        data: movie,
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res.data);
      //---------------
      // upload Image
      await dispatch(upLoadHinh(movie, fileUpLoad));
      await dispatch(createMovieAction(movie));
      history.push("/admin/quanlyphim");
    } catch (err) {
      console.log(err);
    }
  };
};

export const upLoadHinh = (movie, fileUpLoad) => {
  return async (dispatch) => {
    try {
      var frm = new FormData();
      frm.append("File", fileUpLoad, movie.hinhAnh);
      frm.append("tenPhim", movie.tenPhim);
      frm.append("maNhom", "GP01");
      console.log(frm);

      const rs = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
        data: frm,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(rs);
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
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
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

export const removeMovieAction = (maPhim) => {
  return {
    type: XOA_PHIM,
    payload: maPhim,
  };
};

export const removeMovieAPI = (maPhim) => {
  return async (dispatch) => {
    try {
      // remove Movie

      console.log(maPhim);
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "DELETE",
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res);
      dispatch(removeMovieAction(maPhim));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateMovieAction = (movie) => {
  return {
    type: SUA_PHIM,
    payload: movie,
  };
};

export const updateMovieAPI = (movie, history, fileUpLoad) => {
  return async (dispatch) => {
    try {
      console.log(movie);
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
        data: movie,
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res);
      await dispatch(upLoadHinh(movie, fileUpLoad));
      await dispatch(updateMovieAction(movie));
      //  history.push("/admin/quanlyphim");
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateMovieNoImageAPI = (movie, history) => {
  return async (dispatch) => {
    try {
      console.log(movie);
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
        data: movie,
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res);
      await dispatch(updateMovieAction(movie));
      //  history.push("/admin/quanlyphim");
    } catch (err) {
      console.log(err);
    }
  };
};
