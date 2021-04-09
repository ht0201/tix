// import { NavLink } from "react-router-dom";

import "./styles.scss";
import "./slick.css";
// import "./slick-theme.css";

import ListFilmBlock from "./../listFilmBlock";
import ListFilmSapChieu from "../filmSapChieu";

export default function FilmBlock() {
  return (
    <div className="filmBlock" id="movieCatelogy">
      {/* Nav pills */}
      <ul className="nav nav-pills justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#home">
            Đang chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#menu1">
            Sắp chiếu
          </a>
        </li>
      </ul>

      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="home">
          <ListFilmBlock />
        </div>
        <div className="tab-pane container fade" id="menu1">
          <ListFilmSapChieu />
        </div>
      </div>
    </div>
  );
}
