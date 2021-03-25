import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import DetailFilm from "../../Components/detailFilm";
import { getFilmDetailAPI } from "../../redux/actions/movie.action";

function Detail() {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state).movieReducer.movieDetail;
  const { lichChieu } = movieDetail;
  const { id } = useParams();
  console.log("id ", id);

  // useEffect(function () {
  //   dispatch(getFilmDetailAPI(id));
  // }, []);

  return (
    <div>
      <DetailFilm movieDetail={movieDetail} />
    </div>
  );
}

export default Detail;
