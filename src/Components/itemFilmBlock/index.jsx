import React from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ItemFilmBlock = (props) => {
  // const listMovie = useSelector((state) => state).movieReducer.movieList;

  // function renderListFilm() {
  //   return listMovie.map((itemFilm, index) => {
  //     return
  //   })
  // }

  const itemFilm = props.itemFilm;
  const movieDetail = props.movieDetail;

  return (
    <div className="col-3">
      <NavLink className="navLink" to={`/detail/${itemFilm.maPhim}`}>
        <div className="card h-100">
          {/* <div className="typeFilm">
                <img src="./images/film_type_1.png" />
              </div> */}
          <div className="rating">
            <span className="point">{itemFilm.danhGia}</span>
            <div className="star d-flex">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <img src="./images/star1.2.png" alt="star" />
            </div>
          </div>
          <div className="img">
            <img className="card-img-top" src={itemFilm.hinhAnh} alt="img" />
            <div className="over__img">
              <div className="btn__play">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="title d-flex">
              <span className="ageType__P">P</span>
              <h6 className="filmName">{itemFilm.tenPhim}</h6>
            </div>

            <span className="time">{movieDetail.thoiLuong} phut</span>
          </div>
          <div className="over__button d-flex">
            <NavLink className="btn__muaVe" to={`/detail/${itemFilm.maPhim}`}>
              MUA VE{" "}
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ItemFilmBlock;
