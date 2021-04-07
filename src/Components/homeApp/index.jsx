import React from "react";
import "./styles.scss";

export default function HomeApp() {
  return (
    <div className="homeApp">
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
            <img src="./images/mobile.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
