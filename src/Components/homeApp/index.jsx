import Slider from "react-slick";
import React from "react";
import "./styles.scss";

export default function HomeApp() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 500,
    autoplaySpeed: 3000,
  };
  return (
    <div className="homeApp" id="homeApp">
      <div className="container">
        <div className="row">
          <div className="col-6 content__app">
            <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="btn btn-danger">
              App mien phi - tai ve ngay
            </button>
            <p>
              TIX có hai phiên bản
              <a href="abc">iOS</a>&<a href="abc">Android</a>
            </p>
          </div>
          <div className="col-6 img__app">
            <img src="/images/mobile.png" alt="" />

            <Slider {...settings} className="slider">
              <div>
                <img src="/images/slide1.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slide2.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slide3.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slide4.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slide5.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slide6.jpg" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
