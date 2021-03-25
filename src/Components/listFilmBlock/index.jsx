import React, { useEffect } from "react";
import Slider from "react-slick";
import ItemFilmBlock from "../itemFilmBlock";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { getListMovieShowingAPI } from "../../redux/actions/movie.action";

export default function ListFilmBlock() {
  const dispatch = useDispatch();
  const movieListShowing = useSelector((state) => state).movieReducer
    .movieListShowing;
  const movieDetail = useSelector((state) => state).movieReducer.movieDetail;
  console.log("movieListShowing", movieListShowing);
  useEffect(function () {
    dispatch(getListMovieShowingAPI());
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

  function renderListFilm() {
    return movieListShowing?.map((itemFilm, index) => {
      return (
        <div className="listFilmBlock mt-4 mb-5" key={index}>
          <ItemFilmBlock itemFilm={itemFilm} movieDetail={movieDetail} />
        </div>
      );
    });
  }

  return (
    <div className="container">
      <Slider {...settings}>{renderListFilm()}</Slider>
    </div>
  );
}
