import {
  GET_LIST_MOVIE_SHOWING,
  GET_FILM_DETAIL,
  GET_LIST_HE_THONG_RAP,
  GET_LIST_CUM_RAP,
  GET_LIST_MOVIE_RAP,
  GET_LIST_RAP_FILTER,
  GET_LIST_DAY_FILTER,
  GET_LIST_MOVIE_COMING_SOON,
  GET_LIST_LICH_CHIEU_HTR_DETAIL,
} from "../constants/movie.constants";
import format from "date-format";
const _ = require("lodash");
// import uniq from "lodash.uniq";
// var _.uniq = require("lodash.uniq");

const initialState = {
  movieListShowing: [],
  movieDetail: {},
  thoiLuong: 120,
  lichChieuTheoHeThongRap: {},
  listNgayChieu: [],
  listHeThongRap: [],
  listCumRap: [],
  listMovieRap: {},
  listRapOpt: [],
  movieFilter: [],
  lichChieuChoice: {},
  listNgayChieuGioChieu: [],
  listGioChieuOpt: [],
  movieListComingSoon: [],
};

const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_LIST_MOVIE_SHOWING: {
      console.log(payload);

      return { ...state, movieListShowing: payload };
    }

    case GET_FILM_DETAIL: {
      console.log("movie detail", payload);

      // const thoiLuong = payload.lichChieu?.find(
      //   (movie) => movie.maPhim === JSON.parse(payload.maPhim)
      // );

      // console.log(thoiLuong.thoiLuong);

      return { ...state, movieDetail: payload };
    }

    case GET_LIST_LICH_CHIEU_HTR_DETAIL: {
      const lichChieuTheoHeThongRap = payload.lichChieuTheoHeThongRap?.heThongRapChieu?.find(
        (cumRap) => {
          const listHTRFilter = cumRap.maHeThongRap === payload.maHeThongRap;
          return listHTRFilter;
        }
      );

      console.log("lichChieuTheoHeThongRap", lichChieuTheoHeThongRap);

      const listNgayChieu = lichChieuTheoHeThongRap?.cumRapChieu.map(
        (cumRap, indexLCP) => {
          const lcFilter = cumRap.lichChieuPhim.filter((lc) => {
            return (
              lc.ngayChieuGioChieu.slice(0, 10) ===
              payload.ngayChieu.slice(0, 10)
            );
          });

          return { ...cumRap, lcFilter };
        }
      );

      return {
        ...state,
        lichChieuTheoHeThongRap: lichChieuTheoHeThongRap,
        listNgayChieu: listNgayChieu,
      };
    }

    case GET_LIST_HE_THONG_RAP: {
      console.log("listHeThongRap", payload);
      return { ...state, listHeThongRap: payload };
    }

    case GET_LIST_CUM_RAP: {
      console.log("listCumRap", payload);
      return { ...state, listCumRap: payload };
    }

    case GET_LIST_MOVIE_RAP: {
      console.log(state.listCumRap);
      const newListCumRap = state.listCumRap;

      const listMovie = newListCumRap[0]?.lstCumRap.find((rap, index) => {
        const dk = rap.maCumRap === payload;
        return dk;
      });

      console.log("listMovie", listMovie);

      const list = state.movieDetail;

      const thoiLuong = list.lichChieu?.find(
        (movie) => movie.maPhim === JSON.parse(payload.maPhim)
      );

      console.log("thoiLuong", thoiLuong);

      return { ...state, listMovieRap: listMovie };
    }

    case GET_LIST_RAP_FILTER: {
      return {
        ...state,
        listRapOpt: payload?.lichChieu,
      };
    }

    case GET_LIST_DAY_FILTER: {
      console.log("maLC", payload);
      const listRap = state.listRapOpt;

      const listRapFilter = listRap.find((lc, index) => {
        const dk = lc.maLichChieu === JSON.parse(payload);
        return dk;
      });

      console.log("listRapFilter", listRapFilter);

      return {
        ...state,
        lichChieuChoice: listRapFilter,
      };
    }

    case GET_LIST_MOVIE_COMING_SOON: {
      console.log(payload);

      return { ...state, movieListComingSoon: payload };
    }

    default:
      return state;
  }
};

export default movieReducer;
