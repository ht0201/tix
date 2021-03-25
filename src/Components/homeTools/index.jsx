import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getListMovieShowingAPI,
  getListRapFilterAPI,
  getListTimeFilterAPI,
  getListHourFilterAPI,
} from "../../redux/actions/movie.action";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import format from "date-format";

import { getListTicketAPI } from "../../redux/actions/booking.action";

const HomeTools = () => {
  const dispatch = useDispatch();
  const movieListShowing = useSelector((state) => state).movieReducer
    .movieListShowing;
  console.log(movieListShowing);

  const listRapOpt = useSelector((state) => state).movieReducer.listRapOpt;

  console.log("listRapOpt", listRapOpt);

  const lichChieuChoice = useSelector((state) => state).movieReducer
    .lichChieuChoice;
  console.log("lichChieuChoice", lichChieuChoice);

  // const listGioChieuOpt = useSelector((state) => state).movieReducer
  //   .listGioChieuOpt;
  // console.log("listGioChieuOpt", listGioChieuOpt);

  // -----------------

  const [movieFilter, setMovieFilter] = useState("");

  useEffect(
    function () {
      console.log(movieFilter.movieFilter);
      dispatch(getListRapFilterAPI(movieFilter.movieFilter));
    },
    [movieFilter]
  );

  const [rapFilter, setRapFilter] = useState("");

  useEffect(
    function () {
      console.log(rapFilter.rapFilter);
      dispatch(getListTimeFilterAPI(rapFilter.rapFilter));
    },
    [rapFilter]
  );

  const [ngayXemFilter, setNgayXemFilter] = useState("");

  useEffect(
    function () {
      console.log(ngayXemFilter.ngayXemFilter);
      dispatch(getListTimeFilterAPI(ngayXemFilter.ngayXemFilter));
    },
    [ngayXemFilter]
  );

  // const [gioXemFilter, setGioXemFilter] = useState("");

  // useEffect(
  //   function () {
  //     console.log(gioXemFilter.gioXemFilter);
  //     dispatch(getListHourFilterAPI(gioXemFilter.gioXemFilter));
  //   },
  //   [gioXemFilter]
  // );

  //--------------------------

  function renderMovieListFilter() {
    return movieListShowing?.map((movie, index) => {
      return (
        <option key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  }

  function renderListUniqueRap() {
    return listRapOpt?.map((rap, index) => {
      return (
        <option key={index} value={rap.maLichChieu}>
          {rap.thongTinRap.tenCumRap}
        </option>
      );
    });
  }

  function renderListNgayXem() {
    // return lichChieuChoice?.map((rap, index) => {
    return (
      <option value={lichChieuChoice?.maLichChieu}>
        {format("yyyy-MM-dd", new Date(lichChieuChoice?.ngayChieuGioChieu))}
      </option>
    );
    // });
  }

  function renderListGioXem() {
    // return lichChieuChoice?.map((rap, index) => {
    return (
      <option value={lichChieuChoice?.maLichChieu}>
        {format("hh:mm", new Date(lichChieuChoice?.ngayChieuGioChieu))}
      </option>
    );
    // });
  }

  //------------------

  function handleChangeOptMovie() {
    const movieSecMaPhim = document.getElementById("selectMovie").value;
    console.log("div", movieSecMaPhim);

    setMovieFilter({
      movieFilter: movieSecMaPhim,
    });
  }

  function handleChangeOptRap() {
    const rapSec = document.getElementById("selectRap").value;
    console.log("div", rapSec);

    setRapFilter({
      rapFilter: rapSec,
    });
  }

  function handleChangeOptNgayXem() {
    const ngayXemSec = document.getElementById("selectNgayXem").value;
    console.log("ngay xem", ngayXemSec);

    setNgayXemFilter({
      ngayXemFilter: ngayXemSec,
    });
  }

  // function handleChangeOptGioXem() {
  //   const gioXemSec = document.getElementById("selectGioXem").value;
  //   console.log("Gio xem", gioXemSec);

  //   setGioXemFilter({
  //     gioXemFilter: gioXemSec,
  //   });
  // }

  return (
    <>
      <div className="container homeTools">
        <div className="row">
          <div className="col-4">
            <form className="form-select">
              <select
                id="selectMovie"
                className=" drpFilm"
                onChange={() => {
                  handleChangeOptMovie();
                }}
              >
                <option defaultValue="Phim">Phim</option>
                {renderMovieListFilter()}
              </select>
            </form>
          </div>

          <div className="col-2">
            <form className="form-select">
              <select
                id="selectRap"
                className="drpRap"
                onChange={() => {
                  handleChangeOptRap();
                }}
              >
                <option defaultValue="Rap">Rap</option>
                {renderListUniqueRap()}
              </select>
            </form>
          </div>

          <div className="col-2">
            <form className="form-select">
              <select
                id="selectNgayXem"
                className="drpNgayXem"
                onChange={() => {
                  handleChangeOptNgayXem();
                }}
              >
                <option defaultValue="Ngay xem">Ngay xem</option>
                {renderListNgayXem()}
              </select>
            </form>
          </div>

          <div className="col-2">
            <form className="form-select">
              <select
                id="selectGioXem"
                className="drpGioXem"
                // onChange={() => {
                //   handleChangeOptGioXem();
                // }}
              >
                <option defaultValue="Gio xem">Gio xem</option>
                {renderListGioXem()}
              </select>
            </form>
          </div>

          <div className="col-2">
            <div className="btn__muaVe">
              <NavLink
                className="btn btn-secondary btnMuaVeNgay"
                to={`/booking/${lichChieuChoice?.maLichChieu}`}
              >
                MUA VE NGAY{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTools;
