import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

import "./../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./styles.scss";

const listCarousel = [
  {
    img: "./images/lua-deu-gap-lua-dao-16105107337344.jpg",
    id: 1,
    videoId: "https://www.youtube.com/watch?v=cy7O9tk0XZA",
    dataTarget: "#modal-video-01",
  },
  {
    img: "./images/em-la-cua-em-16106818552756.jpg",
    id: 2,
    videoId: "https://www.youtube.com/watch?v=9m5HbGDFBrI",
    dataTarget: "#modal-video-02",
  },

  {
    img: "./images/can-phong-ma-am-16115699578033.jpg",
    id: 3,
    videoId: "https://www.youtube.com/watch?v=kEgUgrh2rdA",
    dataTarget: "#modal-video-03",
  },
];

export default function Carousel() {
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function renderCarousel() {
    //  const render = (
    //    <>

    return listCarousel.map((item, index) => {
      return (
        <div className="carousel__item" key={index}>
          <img className="img-fluid" src={item.img} alt="abc" />

          {/* modal Video */}
          <React.Fragment>
            <ModalVideo
              id={item.dataTarget}
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={item.videoId}
              onClose={() => setOpen(false)}
            />
            <button>
              <div
                className="play"
                data-toggle="modal"
                data-target={item.dataTarget}
                onClick={() => openModal(true, item)}
              >
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </button>
          </React.Fragment>
        </div>
      );
    });

    //    </>
    //  );

    //  return render;
  }

  function openModal(status, item) {
    setOpen({
      isOpen: status,
    });

    setState({
      state: item,
    });

    console.log("modal click play ", item);
    return state;
    //  return (
    //    <ModalVideo
    //      id={item.dataTarget}
    //      channel="youtube"
    //      autoplay
    //      isOpen={isOpen}
    //      videoId={item.videoId}
    //      onClose={() => setOpen(false)}
    //    />
    //  );
  }

  return (
    <div>
      <section className="carousel">
        <div className="row carousel__list">
          <Slider {...settings}>{renderCarousel()}</Slider>
        </div>
      </section>
    </div>
  );
}
