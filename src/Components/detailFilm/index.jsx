import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Rap from "../detailLichChieu";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailLichChieu from "../detailLichChieu";
import { getMovieDetailAPI } from "../../redux/actions/movie.action";
import format from "date-format";

function DetailFilm() {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state).movieReducer.movieDetail;
  const { lichChieu } = movieDetail;

  const thoiLuong = useSelector((state) => state).movieReducer.thoiLuong;
  const { id } = useParams();
  console.log(movieDetail);

  useEffect(function () {
    dispatch(getMovieDetailAPI(id));
  }, []);

  return (
    <div className="detailFilm">
      <div className="img__cover">
        {/* <img src={movieDetail.hinhAnh} alt="" /> */}
      </div>

      <div className="container">
        <div className="row infoFilm">
          <div className="col-3 img ">
            <img className="img-fluid" src={movieDetail.hinhAnh} alt="img" />
          </div>
          <div className="col-6 descriptionFilm">
            <p>{format("dd.MM.yyyy", new Date(movieDetail.ngayKhoiChieu))}</p>

            <div className="typeAndTitle d-flex">
              <span className="ageType__P">P</span>
              <h5>{movieDetail.tenPhim}</h5>
            </div>

            <p> {thoiLuong} phut</p>

            <button className="btn__muaVe">MUA VE</button>
          </div>
          <div className="col-3 point__rating">
            <div className="point__rating__flex">
              <div className="point__circle">
                <h4>{movieDetail.danhGia}</h4>
              </div>
              <div className="star d-flex">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <img src="./../images/star1.2.png" alt="star" />
              </div>
              <div className="feedBack">
                <span>10 nguoi danh gia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row infoRapChieuFilm">
          <div className="rap__lichChieu">
            {/* Nav pills */}
            <ul className="nav nav-pills justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">
                  Lich Chieu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">
                  Thong tin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu2">
                  Danh gia
                </a>
              </li>
            </ul>

            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <DetailLichChieu />
              </div>
              <div className="tab-pane container fade" id="menu1">
                Thong tin
              </div>
              <div className="tab-pane container fade" id="menu2">
                Danh gia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
