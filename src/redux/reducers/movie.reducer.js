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
      // const listHeThongRap = state.listHeThongRap;
      // const lichChieu = payload.lichChieu;
      // console.log("listHeThongRap", listHeThongRap);
      // console.log("payload", payload);

      // const listLichChieu = lichChieu.map((movieRap, indexMovieRap) => {
      //   return _.omit(movieRap, ["maLichChieu", "ngayChieuGioChieu"]);
      // });

      // console.log(listLichChieu);

      // const uniqueLichChieu1 = _.uniqBy(listLichChieu, "maRap");
      // console.log("uniqueLichChieu1", uniqueLichChieu1);

      // const listTimeChieu = lichChieu.map((movieRap, indexMovieRap) => ({
      //   maRap: movieRap.maRap,
      //   thoiLuong: movieRap.thoiLuong,
      //   gioChieu: format("hh:mm", new Date(movieRap.ngayChieuGioChieu)),
      // }));

      // console.log(listTimeChieu);

      // const uniqueGioChieu = listTimeChieu?.filter((rap, index) => {
      //   const _string = JSON.stringify(rap);
      //   return (
      //     index ===
      //     listTimeChieu?.findIndex((obj) => {
      //       return JSON.stringify(obj) === _string;
      //     })
      //   );
      // });
      // console.log("uniqueGioChieu", uniqueGioChieu);

      // const unique = [...new Set(lichChieu.map((item) => item.maRap))];
      // console.log("unique", unique);
      console.log(payload);

      const thoiLuong = payload.lichChieu?.find(
        (movie) => movie.maPhim === JSON.parse(payload.maPhim)
      );

      console.log(thoiLuong.thoiLuong);

      return { ...state, movieDetail: payload, thoiLuong: thoiLuong.thoiLuong };
    }

    case GET_LIST_LICH_CHIEU_HTR_DETAIL: {
      console.log("listLichChieuHTR", payload);

      const lichChieuTheoHeThongRap = payload.listMovieTheoHeThongRap.heThongRapChieu?.find(
        (cumRap) => {
          const listHTRFilter = cumRap.maHeThongRap === payload.maHeThongRap;
          console.log("listHTRFilter", listHTRFilter);
          return listHTRFilter;

          //  .cumRapChieu?.map((cumRap, indexLc) => {
          //   return cumRap.lichChieuPhim?.filter((lc) => {
          //     const ngayChieuFilter =
          //       lc.ngayChieuGioChieu.slice(0, 10) === payload.ngayChieu;
          //     return ngayChieuFilter;
          //   });
          // });
        }
      );

      console.log("lichChieuTheoHeThongRap", lichChieuTheoHeThongRap);

      const listNgayChieu = lichChieuTheoHeThongRap.cumRapChieu.map(
        (cumRap, indexLCP) => {
          const lcFilter = cumRap.lichChieuPhim.filter((lc) => {
            return (
              lc.ngayChieuGioChieu.slice(0, 10) ===
              payload.ngayChieu.slice(0, 10)
            );
          });
          console.log("lcFilter", lcFilter);
          return { ...cumRap, lcFilter };
        }
      );

      console.log("listNgayChieu", listNgayChieu);

      return {
        ...state,
        lichChieuTheoHeThongRap: lichChieuTheoHeThongRap,
        listNgayChieu: listNgayChieu,
      };
    }

    case GET_LIST_HE_THONG_RAP: {
      return { ...state, listHeThongRap: payload };
    }

    case GET_LIST_CUM_RAP: {
      console.log(payload);
      return { ...state, listCumRap: payload };
    }

    case GET_LIST_MOVIE_RAP: {
      console.log(payload);
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
      // console.log(payload);
      // const arrLichChieu = payload?.lichChieu;

      // const listRapFil = arrLichChieu?.map((rap, index) => ({
      //   maPhim: rap.maPhim,
      //   tenCumRap: rap.thongTinRap.tenCumRap,
      // }));

      // console.log(listRapFil);

      // const uniqueRapFil = listRapFil?.filter((rap, index) => {
      //   const _string = JSON.stringify(rap);
      //   return (
      //     index ===
      //     listRapFil?.findIndex((obj) => {
      //       return JSON.stringify(obj) === _string;
      //     })
      //   );
      // });

      // console.log(uniqueRapFil);

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
