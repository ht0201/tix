import React from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getListHeThongRapAPI,
  getListCumRapAPI,
  getListMovieRapAPI,
} from "../../redux/actions/movie.action";
import { useState, useEffect } from "react";

import format from "date-format";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import SuatChieuRap from "../suatChieuRap";

export default function LichChieu() {
  const dispatch = useDispatch();

  const listHeThongRap = useSelector((state) => state).movieReducer
    .listHeThongRap;

  const listCumRap = useSelector((state) => state).movieReducer.listCumRap;

  const listMovieRap = useSelector((state) => state).movieReducer.listMovieRap;

  useEffect(() => {
    dispatch(getListHeThongRapAPI());
  }, []);

  const [heThongRap, setHeThongRap] = useState("");

  const [cumRap, setCumRap] = useState("");

  useEffect(() => {
    dispatch(getListCumRapAPI(heThongRap.heThongRap));
  }, [heThongRap]);

  useEffect(() => {
    console.log(cumRap);
    dispatch(getListMovieRapAPI(cumRap.maCumRap));
  }, [cumRap]);

  function renderListHeThongRap() {
    return listHeThongRap?.map((heThongRap, index) => {
      return (
        <a
          key={index}
          className={`nav-link mb-3 ${index === 0 ? "active" : " "}`}
          id={heThongRap.maHeThongRap}
          data-toggle="pill"
          href={`#${heThongRap.maHeThongRap}`}
          role="tab"
          aria-controls={heThongRap.maHeThongRap}
          aria-selected="true"
          onClick={() => handleClickHeThongRap(heThongRap.maHeThongRap)}
        >
          <img src={heThongRap.logo} alt="rap" />
        </a>
      );
    });
  }

  function handleClickHeThongRap(maHeThongRap) {
    setHeThongRap({
      heThongRap: maHeThongRap,
    });
  }

  function renderCumRap() {
    return listCumRap[0]?.lstCumRap.map((cumRap, index) => {
      return (
        <div
          className={`listBrand row mb-3 ${index === 0 ? "active" : ""}`}
          key={index}
          onClick={() => handleClickCumRap(cumRap.maCumRap)}
        >
          <div className="img__card col-4">
            <img
              className="img-fluid"
              src={`./images/${cumRap.maCumRap}.png`}
              alt="img-bhd"
            />
          </div>
          <div className="address col-8">
            <h5>
              <b>{cumRap.tenCumRap} </b>
            </h5>
            <p>{cumRap.diaChi}</p>
          </div>
        </div>
      );
    });
  }

  function handleClickCumRap(maCumRap) {
    console.log(maCumRap);
    setCumRap({
      maCumRap: maCumRap,
    });
  }

  // function renderListMovieRap() {
  //   return listMovieRap.listPhim?.map((movie, index) => {
  //     return (
  //       <Accordion defaultActiveKey="0" key={index}>
  //         <Card>
  //           <Accordion.Toggle as={Card.Header} eventKey="0">
  //             <div className="img__card">
  //               <img src={movie.hinhAnh} alt="img-bhd" />
  //             </div>
  //             <div className="address">
  //               <h5>
  //                 <b> {movie.tenPhim} </b>
  //               </h5>
  //               <p>phut </p>
  //             </div>
  //           </Accordion.Toggle>
  //           <Accordion.Collapse eventKey="0" className="acc__collapse">
  //             <Card.Body>
  //               <h6>2D Digital</h6>
  //               <div className="listSuatChieu">
  //                 {listMovieRap.uniqueLichChieu[index]?.map(
  //                   (uniLC, subindex) => {
  //                     return (
  //                       <div className="suatChieu" key={subindex}>
  //                         <span className="suatChieuIn">{uniLC} ~</span>
  //                         <span className="suatChieuOut"> 15:08</span>
  //                       </div>
  //                     );
  //                   }
  //                 )}
  //               </div>
  //             </Card.Body>
  //           </Accordion.Collapse>
  //         </Card>
  //       </Accordion>
  //     );
  //   });
  // }

  return (
    <>
      <div className="container d-flex lichChieu" id="lichChieu">
        <div className="row">
          <div
            className="nav flex-column nav-pills col-1"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderListHeThongRap()}
          </div>
          <div className="tab-content col-4" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id={listCumRap[0]?.maHeThongRap}
              role="tabpanel"
              aria-labelledby={listCumRap[0]?.maHeThongRap}
            >
              {renderCumRap()}
            </div>
          </div>
          <div className="listMovies col-7">
            <SuatChieuRap />
          </div>
        </div>
      </div>
    </>
  );
}
