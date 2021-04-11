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
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import { useState } from "react";
import Guard from "../../HOC/guard";
moment().format();

const DetailLichChieu = () => {
  const dispatch = useDispatch();

  // const thoiLuong = useSelector((state) => state).movieReducer.thoiLuong;

  const listHeThongRap = useSelector((state) => state).movieReducer
    .listHeThongRap;

  const lichChieuTheoHeThongRap = useSelector((state) => state).movieReducer
    .lichChieuTheoHeThongRap;

  const listNgayChieu = useSelector((state) => state).movieReducer
    .listNgayChieu;

  console.log("lichChieuTheoHeThongRap", lichChieuTheoHeThongRap);

  const { id } = useParams();

  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [ngayChieu, setNgayChieu] = useState("");

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

  useEffect(
    function () {
      dispatch(getListHeThongRapAPI());
    },
    [maHeThongRap]
  );

  function renderRap() {
    return listNgayChieu?.map((rap, indexRap) => {
      if (rap.lcFilter.length !== 0) {
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
      }
    });
  }

  function renderListSuatChieu(rap) {
    return rap.lcFilter?.map((itemLc, index) => {
      const timeIn = format("hh:mm", new Date(itemLc?.ngayChieuGioChieu));
      const changeMinute = moment.duration(timeIn, "hh:mm").asMinutes("mm");
      const outMinute = changeMinute + 120;
      const timeOut = moment
        .utc()
        .startOf("day")
        .add({ minutes: outMinute })
        .format("H:mm");

      return (
        <NavLink
          className="suatChieu col-3"
          key={index}
          to={`/booking/${itemLc.maLichChieu} `}
        >
          <span className="suatChieuIn">
            {format("hh:mm", new Date(itemLc?.ngayChieuGioChieu))} ~
          </span>
          <span className="suatChieuOut"> {timeOut}</span>
        </NavLink>
      );
    });
  }

  function renderNgayChieu() {
    function getDayOfWeek(date) {
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek)
        ? null
        : ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"][
            dayOfWeek
          ];
    }

    return lichChieuTheoHeThongRap?.cumRapChieu?.map((rap, indexRap) => {
      return rap.lichChieuPhim?.map((lc, indexLc) => {
        return (
          <a
            key={indexLc}
            className={`dayItem ${indexLc === 0 ? "active" : " "}`}
            onClick={() => handleChangeNgayChieu(lc.ngayChieuGioChieu)}
          >
            <p>{getDayOfWeek(lc.ngayChieuGioChieu.slice(0, 10))}</p>
            <h5> {lc.ngayChieuGioChieu.slice(8, 10)}</h5>
          </a>
        );
      });
    });
  }

  function renderListHeThongRap() {
    return listHeThongRap?.map((rap, index) => {
      return (
        <a
          key={index}
          className={`rap__item ${index === 0 ? "active" : " "}`}
          id={rap.maHeThongRap}
          data-toggle="pill"
          href={`#${rap.maHeThongRap}`}
          role="tab"
          aria-controls={rap.maHeThongRap}
          aria-selected="true"
          onClick={() => handleChangeHeThongRap(rap)}
        >
          <img src={rap.logo} alt="rap" />
          <p>{rap.tenHeThongRap}</p>
        </a>
      );
    });
  }

  function handleChangeHeThongRap(rap) {
    console.log("heThongRap chon", rap);
    setMaHeThongRap({
      maHeThongRap: rap.maHeThongRap,
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
      <div className="row lichChieu__content">
        <div className="col-3 rap__info">
          <div className="rap__list">{renderListHeThongRap()}</div>
        </div>
        <div className="col-9 listDayOfWeek">
          <div className="dayOfWeek">
            <div className="listDay">{renderNgayChieu()}</div>
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
