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

  const objCumRap = useSelector((state) => state).movieReducer.objCumRap;

  useEffect(() => {
    dispatch(getListHeThongRapAPI());
  }, []);

  const [state, setState] = useState({
    maHeThongRap: "BHDStar",
    maCumRap: "bhd-star-cineplex-bitexco",
  });

  useEffect(() => {
    dispatch(getListCumRapAPI(state.maHeThongRap));
  }, [state]);

  useEffect(() => {
    console.log(state);

    dispatch(getListMovieRapAPI(state.maHeThongRap, state.maCumRap));
  }, [state]);

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
          onClick={() => handleClickHeThongRap(heThongRap)}
        >
          <img src={heThongRap.logo} alt="rap" />
        </a>
      );
    });
  }

  function handleClickHeThongRap(heThongRap) {
    setState({
      maCumRap: setMaCumRap(heThongRap.maHeThongRap),
      maHeThongRap: heThongRap.maHeThongRap,
    });
  }

  function setMaCumRap(maHeThongRap) {
    const newListHTR = [...listHeThongRap];
    const rapFirstByHeThongRap = newListHTR.find((heThongRapItem) => {
      const heThongRap = heThongRapItem.maHeThongRap === maHeThongRap;
      return heThongRap;
    });
    console.log(
      "rapFirstByHeThongRap",
      rapFirstByHeThongRap.lstCumRap[0].maCumRap
    );
    return rapFirstByHeThongRap.lstCumRap[0].maCumRap;
  }

  function renderCumRap() {
    return objCumRap[0]?.lstCumRap.map((cumRap, index) => {
      return (
        <div
          key={index}
          className={`listBrand row mb-3 ${
            cumRap.maCumRap === state.maCumRap ? "active" : " "
          }`}
          onClick={() => handleClickCumRap(cumRap, index)}
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

  function handleClickCumRap(cumRap) {
    console.log(cumRap);
    setState({
      ...state,
      maCumRap: cumRap.maCumRap,
    });
  }

  return (
    <>
      <div className="container d-flex lichChieu mt-3" id="lichChieu">
        <div className="row">
          <div
            className="nav flex-column nav-pills col-1"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderListHeThongRap()}
          </div>
          <div className="tab-content col-4 listCumRap" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id={objCumRap[0]?.maHeThongRap}
              role="tabpanel"
              aria-labelledby={objCumRap[0]?.maHeThongRap}
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
