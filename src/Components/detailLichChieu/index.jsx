import React from "react";
import "./styles.scss";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import format from "date-format";
import { useDispatch, useSelector } from "react-redux";
import {
  getListHeThongRapAPI,
  getListLichChieuHTRAPI,
} from "../../redux/actions/movie.action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import { useState } from "react";
moment().format();

const DetailLichChieu = () => {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state).movieReducer.movieDetail;
  const thoiLuong = useSelector((state) => state).movieReducer.thoiLuong;
  const listHeThongRap = useSelector((state) => state).movieReducer
    .listHeThongRap;
  const { heThongRapChieu } = listHeThongRap;

  const lichChieu = movieDetail.lichChieu;

  const lichChieuTheoHeThongRap = useSelector((state) => state).movieReducer
    .lichChieuTheoHeThongRap;

  const listNgayChieu = useSelector((state) => state).movieReducer
    .listNgayChieu;

  console.log("lichChieuTheoHeThongRap", lichChieuTheoHeThongRap);

  const { id } = useParams();

  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [ngayChieu, setNgayChieu] = useState("");

  // useEffect(function () {
  //   dispatch(getFilmDetailAPI(id));
  // }, []);

  useEffect(
    function () {
      dispatch(
        getListLichChieuHTRAPI(
          id,
          maHeThongRap.maHeThongRap,
          ngayChieu.ngayChieu
        )
      );
    },
    [maHeThongRap, ngayChieu]
  );

  useEffect(function () {
    dispatch(getListHeThongRapAPI());
  }, []);

  function renderRap() {
    return lichChieuTheoHeThongRap?.cumRapChieu?.map((rap, indexRap) => {
      return (
        <Accordion defaultActiveKey="0" key={indexRap}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="img__card">
                <img src={`/images/${rap.maCumRap}.png`} alt="img-bhd" />
              </div>
              <div className="address">
                <h5>
                  <b>{rap.tenCumRap.split("-").shift()} </b> -{" "}
                  {rap.tenCumRap.split("-").pop()}
                </h5>
                <p></p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="acc__collapse">
              <Card.Body>
                <h6>2D Digital</h6>
                <div className="listSuatChieu row">
                  {renderListSuatChieu(rap)}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    });
  }

  function renderListSuatChieu() {
    return listNgayChieu?.map((lc, indexLc) => {
      return lc?.map((itemLc, index) => {
        const timeIn = format("hh:mm", new Date(itemLc?.ngayChieuGioChieu));
        const changeMinute = moment.duration(timeIn, "hh:mm").asMinutes("mm");
        const plus = changeMinute + thoiLuong;
        const out = moment
          .utc()
          .startOf("day")
          .add({ minutes: plus })
          .format("H:mm");

        return (
          <div className="suatChieu col-3" key={index}>
            <span className="suatChieuIn">
              {" "}
              {format("hh:mm", new Date(itemLc?.ngayChieuGioChieu))} ~
            </span>
            <span className="suatChieuOut"> {out}</span>
          </div>
        );
      });
    });
  }

  function renderNgayChieu() {
    function getDayOfWeek(date) {
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek)
        ? null
        : ["Chu nhat", "Thu 2", "Thu 3", "Thu 4", "Thu 5", "Thu 6", "Thu 7"][
            dayOfWeek
          ];
    }

    return lichChieuTheoHeThongRap?.cumRapChieu?.map((rap, indexRap) => {
      return rap.lichChieuPhim?.map((lc, indexLc) => {
        return (
          <li
            className="dayItem"
            key={indexLc}
            onClick={() => handleChangeNgayChieu(lc.ngayChieuGioChieu)}
          >
            <p>{getDayOfWeek(lc.ngayChieuGioChieu.slice(0, 10))}</p>
            <h5> {lc.ngayChieuGioChieu.slice(8, 10)}</h5>
          </li>
        );
      });
    });
  }

  function renderListHeThongRap() {
    return listHeThongRap?.map((rap, index) => {
      return (
        <li
          key={index}
          className={`rap__item ${index === 0 ? "active" : " "}`}
          onClick={() => handleChangeHeThongRap(rap.maHeThongRap)}
        >
          <img src={rap.logo} alt="rap" />
          <p>{rap.tenHeThongRap}</p>
        </li>
      );
    });
  }

  function handleChangeHeThongRap(maHeThongRap) {
    setMaHeThongRap({
      maHeThongRap: maHeThongRap,
    });
  }

  function handleChangeNgayChieu(ngayChieuGioChieu) {
    console.log("ngayChieuGioChieu", ngayChieuGioChieu);
    setNgayChieu({
      ngayChieu: ngayChieuGioChieu,
    });
  }

  return (
    <>
      <div className="row lichChieu">
        <div className="col-3 rap__info">
          <ul className="rap__list">{renderListHeThongRap()}</ul>
        </div>
        <div className="col-9 listDayOfWeek">
          <div className="dayOfWeek">
            <ul className="listDay">
              {renderNgayChieu()}
              {/* {renderNgayChieu(lichChieu.maPhim)} */}
            </ul>
          </div>
          <div className="tab-content projection">
            <div
              className="tab-pane container active projection__list"
              id="home"
            >
              {renderRap()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLichChieu;
