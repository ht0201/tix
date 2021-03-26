import {
  GET_LIST_MOVIE_SHOWING,
  GET_LIST_HE_THONG_RAP,
  GET_FILM_DETAIL,
  GET_LIST_LICH_CHIEU_HTR_DETAIL,
  GET_LIST_CUM_RAP,
  GET_LIST_MOVIE_RAP,
  GET_LIST_RAP_FILTER,
  GET_LIST_DAY_FILTER,
  GET_LIST_MOVIE_COMING_SOON,
} from "./../constants/movie.constants";
import axios from "axios";

export const getListMovieShowingAction = (movieList) => {
  return {
    type: GET_LIST_MOVIE_SHOWING,
    payload: movieList,
  };
};

export const getListMovieShowingAPI = () => {
  return (dispacth) => {
    //call api
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getListMovieShowingAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieDetailAction = (movieDetail) => {
  return {
    type: GET_FILM_DETAIL,
    payload: movieDetail,
  };
};

export const getMovieDetailAPI = (id) => {
  return (dispacth) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getMovieDetailAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// ----- Lich chieu theo he thong rap
export const getListLichChieuHTRAction = (
  listMovieTheoHeThongRap,
  maHeThongRap,
  ngayChieu
) => {
  return {
    type: GET_LIST_LICH_CHIEU_HTR_DETAIL,
    payload: { listMovieTheoHeThongRap, maHeThongRap, ngayChieu },
  };
};

export const getListLichChieuHTRAPI = (
  id,
  maHeThongRap = "BHDStar",
  ngayChieu = "2019-01-01T10:10:00"
) => {
  return (dispacth) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getListLichChieuHTRAction(res.data, maHeThongRap, ngayChieu));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getListHeThongRapAction = (listHeThongRap) => {
  return {
    type: GET_LIST_HE_THONG_RAP,
    payload: listHeThongRap,
  };
};

export const getListHeThongRapAPI = () => {
  return (dispacth) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getListHeThongRapAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getListCumRapAction = (listCumRap) => {
  return {
    type: GET_LIST_CUM_RAP,
    payload: listCumRap,
  };
};

export const getListCumRapAPI = (maHeThong = "BHDStar") => {
  console.log(maHeThong);
  return (dispacth) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}`,
    })
      .then((res) => {
        dispacth(getListCumRapAction(res.data));
        getListMovieRapAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getListMovieTheoRapAction = (listMovieRap) => {
  return {
    type: GET_LIST_MOVIE_RAP,
    payload: listMovieRap,
  };
};

export const getListMovieRapAPI = (maCumRap = "bhd-star-cineplex-bitexco") => {
  console.log(maCumRap);
  return (dispacth) => {
    dispacth(getListMovieTheoRapAction(maCumRap));
  };
};

export const getListRapFilterAction = (listRapFilter) => {
  return {
    type: GET_LIST_RAP_FILTER,
    payload: listRapFilter,
  };
};

export const getListRapFilterAPI = (maPhim) => {
  console.log(maPhim);
  return (dispacth) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
    })
      .then((res) => {
        console.log(res.data);
        dispacth(getListRapFilterAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getListTimeFilterAction = (listTimeFilter) => {
  return {
    type: GET_LIST_DAY_FILTER,
    payload: listTimeFilter,
  };
};

export const getListTimeFilterAPI = (maLichChieu) => {
  console.log(maLichChieu);
  return (dispacth) => {
    dispacth(getListTimeFilterAction(maLichChieu));
  };
};

// export const getListHourFilterAction = (listTimeFilter) => {
//   return {
//     type: GET_LIST_HOUR_FILTER,
//     payload: listTimeFilter,
//   };
// };

// export const getListHourFilterAPI = (maLichChieu) => {
//   console.log(maLichChieu);
//   return (dispacth) => {
//     dispacth(getListHourFilterAction(maLichChieu));
//   };
// };

// export const getListLichChieuFirtsAction = (listRapFilter) => {
//   return {
//     type: GET_LIST_RAP_FILTER,
//     payload: listRapFilter,
//   };
// };

// export const getListRapFilterAPI = (maPhim) => {
//   console.log(maPhim);
//   return (dispacth) => {
//     axios({
//       method: "GET",
//       url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
//     })
//       .then((res) => {
//         console.log(res.data);
//         dispacth(getListLichChieuFirtsAction(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// List film sap chieu
export const getListMovieComingSoonAction = (listMovieSapChieu) => {
  return {
    type: GET_LIST_MOVIE_COMING_SOON,
    payload: listMovieSapChieu,
  };
};

export const getListMovieComingSoonAPI = () => {
  return (dispacth) => {
    //call api
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
    })
      .then((res) => {
        // console.log(res.data);
        dispacth(getListMovieComingSoonAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
