import React from "react";
import MediaCard from "../newsCard";

import "./styles.scss";

const arrCard2 = [
  {
    id: 1,
    image: "./images/news1.png",
    title:
      "Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất ",
    desc:
      "Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ",
    like: 0,
    comment: 0,
  },
  {
    id: 2,
    image: "./images/news2.png",
    title:
      "[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM",
    desc:
      "Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.",
    like: 0,
    comment: 0,
  },
];

const arrCard3 = [
  {
    id: 3,
    image: "./images/news3.png",
    title: "Ấn định chắc nịch ngày khởi chiếu 16.04",
    desc:
      "Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn ",
    like: 0,
    comment: 0,
  },
  {
    id: 4,
    image: "./images/news4.png",
    title:
      "[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ",
    desc:
      "Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám ",
    like: 0,
    comment: 0,
  },
];

const arrCard = [
  {
    id: 5,
    image: "./images/news5.png",
    title: "Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn ",
  },
  {
    id: 6,
    image: "./images/news6.png",
    title: "“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành",
  },
  {
    id: 7,
    image: "./images/news7.png",
    title: "Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn ",
  },
  {
    id: 8,
    image: "./images/news8.png",
    title: "“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành",
  },
];

export default function News() {
  function renderCard2() {
    return arrCard2.map((card, index) => {
      return (
        <div className="item" key={index}>
          <MediaCard card={card} />
        </div>
      );
    });
  }

  function renderCard3() {
    return arrCard3.map((card, index) => {
      return (
        <div className="item" key={index}>
          <MediaCard card={card} />
        </div>
      );
    });
  }

  function renderItem() {
    return arrCard.map((card, index) => {
      return (
        <div className="card mb-3">
          <img className="card-img-top" src={card.image} alt={card.id} />
          <p className="card-text">{card.title}</p>
        </div>
      );
    });
  }

  return (
    <div id="news">
      <ul
        className="nav nav-pills mb-3 container mt-5 nav__news"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Điện ảnh 24h
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Review
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Khuyến mãi
          </a>
        </li>
      </ul>

      <div className="tab-content container" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row top2">{renderCard2()}</div>
          <div className="row bot3">
            {renderCard3()}
            <div className="item">{renderItem()}</div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row top2">{renderCard2()}</div>
          <div className="row bot3">
            {renderCard3()}
            <div className="item">{renderItem()}</div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="row top2">{renderCard2()}</div>
          <div className="row bot3">
            {renderCard3()}
            <div className="item">{renderItem()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
