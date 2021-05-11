import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

import "./../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Carousel() {
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState("");

  const movieListShowing = useSelector((state) => state).movieReducer
    .movieListShowing;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  function renderCarousel() {
    return movieListShowing
      .map((item, index) => {
        return (
          <div className="carousel__item" key={index}>
            <img src={item.hinhAnh} alt="abc" />

            <React.Fragment>
              <button
                className="btn-primary play"
                data-toggle="modal"
                data-target={item.dataTarget}
                onClick={() => openModal(true, item)}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </React.Fragment>
          </div>
        );
      })
      .slice(3, 6);
  }

  function openModal(status, item) {
    setOpen({
      isOpen: status,
    });

    setState({
      state: {
        ...item,
        idVideo: renderShortTrailer(item.trailer),
      },
    });
  }

  function renderShortTrailer(trailer) {
    let stringEndTrailer = trailer?.split("/");

    if (stringEndTrailer) {
      return stringEndTrailer[stringEndTrailer.length - 1];
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__list">
        <Slider {...settings}>{renderCarousel()}</Slider>
      </div>
      <ModalVideo
        id={state.state?.maPhim}
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={state.state?.idVideo}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
