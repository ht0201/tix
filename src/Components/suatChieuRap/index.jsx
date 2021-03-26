import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import format from "date-format";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { getListMovieRapAPI } from "../../redux/actions/movie.action";
import moment from "moment";
import "./styles.scss";

export default function SuatChieuRap() {
  const dispatch = useDispatch();
  const [listMovieTheoRap, setListMovieTheoRap] = useState("");

  useEffect(() => {
    console.log(listMovieTheoRap.listMovieTheoRap);
    dispatch(getListMovieRapAPI(listMovieTheoRap.listMovieTheoRap));
  }, [listMovieTheoRap]);

  const listMovieRap = useSelector((state) => state).movieReducer.listMovieRap;
  const thoiLuong = useSelector((state) => state).movieReducer.thoiLuong;

  function renderUnqMovie() {
    return listMovieRap?.danhSachPhim?.map((movie, indexM) => {
      return (
        <Accordion defaultActiveKey="0" key={indexM}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="img__card">
                <img src={movie.hinhAnh} alt="img-bhd" />
              </div>
              <div className="address">
                <h5>
                  <b> {movie.tenPhim} </b>
                </h5>
                <p>phut </p>
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0" className="acc__collapse">
              <Card.Body>
                <h6>2D Digital</h6>
                <div className="listSuatChieu">
                  {renderMovieSuatChieu(movie.lstLichChieuTheoPhim)}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    });
  }

  function renderMovieSuatChieu(movieLChieu) {
    console.log("movieLChieu", movieLChieu);
    return movieLChieu?.map((lc, index) => {
      const timeIn = format("hh:mm", new Date(lc?.ngayChieuGioChieu));
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
            {format("hh:mm", new Date(lc?.ngayChieuGioChieu))} ~
          </span>
          <span className="suatChieuOut"> {out}</span>
        </div>
      );
    });
  }

  // function renderMovieSuatChieu(movieLChieu) {
  //   return movieLChieu.map((lchieu, indexLc) => {
  //     return (
  //       <div className="suatChieu" key={indexLc}>
  //         <span className="suatChieuIn">
  //           {format("hh:mm", new Date(lchieu.ngayChieuGioChieu))} ~
  //         </span>
  //         <span className="suatChieuOut"> 15:08</span>
  //       </div>
  //     );
  //   });
  // }

  return <>{renderUnqMovie()}</>;
}
