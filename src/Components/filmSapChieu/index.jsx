import React from "react";
import "./styles.scss";
import Slider from "react-slick";
import ItemFilmBlock from "../itemFilmBlock";

import { useDispatch, useSelector } from "react-redux";
import { getListMovieComingSoonAPI } from "../../redux/actions/movie.action";
import { useEffect } from "react";

const ListFilmSapChieu = () => {
  const dispatch = useDispatch();
  const movieListComingSoon = useSelector((state) => state).movieReducer
    .movieListComingSoon;
  const movieDetail = useSelector((state) => state).movieReducer.movieDetail;

  useEffect(function () {
    dispatch(getListMovieComingSoonAPI());
  }, []);

  const settings = {
    className: "center",
    arrow: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
  };

  function renderListFilmSapChieu() {
    return movieListComingSoon.map((itemFilm, index) => {
      return (
        <div className="listFilmBlock mt-4 mb-5" key={index}>
          <ItemFilmBlock itemFilm={itemFilm} movieDetail={movieDetail} />
        </div>
      );
    });
  }
  return (
    <div className="container">
      <Slider {...settings}>{renderListFilmSapChieu()}</Slider>
    </div>
  );
};

export default ListFilmSapChieu;
