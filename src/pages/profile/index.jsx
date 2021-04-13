import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import CardActionArea from "@material-ui/core/CardActionArea";

import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
import Guard from "../../HOC/guard";
import { useDispatch, useSelector } from "react-redux";
import { postProfileAPI, putProfileAPI } from "../../redux/actions/user.action";
import { useEffect } from "react";
import format from "date-format";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state).userReducer.userLogin;
  const profile = useSelector((state) => state).userReducer.profile;

  console.log("userLogin", userLogin);
  console.log("profile", profile);

  const [state, setState] = useState({ ...userLogin });

  console.log("state", state);

  useEffect(
    function () {
      dispatch(postProfileAPI(userLogin));
    },
    [userLogin]
  );

  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/-/g, "");

    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  }

  function renderHistoryBookTicket(profile) {
    return profile?.thongTinDatVe?.map((ticket, index) => {
      return ticket.danhSachGhe?.map((chair, indexChair) => {
        return (
          <div className="row row__movie" key={indexChair}>
            <div className="imgMovie col-md-3">
              <img
                src={`http://movie0706.cybersoft.edu.vn/hinhanh/${removeVietnameseTones(
                  ticket.tenPhim.toLowerCase()
                )
                  .split(" ")
                  .join("-")}_gp01.jpg`}
                alt=""
              />
            </div>

            <div className="infoMovie col-md-9">
              <div className="rap">
                <div className="imgRap">
                  <img
                    src={`/images/${removeVietnameseTones(
                      chair.tenHeThongRap.toLowerCase()
                    )
                      .split(" " || "-")

                      .join("-")}.png`}
                    alt=""
                  />
                </div>
                <div className="infoRap">
                  <h5>{chair.tenHeThongRap}</h5>
                  <p>dia chi</p>
                </div>
              </div>
              <div className="lichChieu">
                <p>
                  Ngày đặt:{" "}
                  <span>
                    {format("dd-MM-yyyy hh:mm", new Date(ticket.ngayDat))}
                  </span>{" "}
                  - <span>{chair.tenCumRap}</span> -{" "}
                  <span>Ghe {chair.tenGhe}</span>
                </p>
              </div>
            </div>
          </div>
        );
      });
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    let updateUser = { ...state };
    console.log("updateUser", updateUser);
    dispatch(putProfileAPI(updateUser));
  }

  function handleChange(e) {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    console.log(name, value);
    setState((state) => {
      return { ...state, [name]: value };
    });
  }

  return (
    <Guard>
      <div className="profile container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="history-tab"
              data-toggle="tab"
              href="#history"
              role="tab"
              aria-controls="history"
              aria-selected="false"
            >
              Booking history
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <form
              className="tableProfile"
              method="PUT"
              onSubmit={handleSubmitForm}
            >
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="taiKhoan">Tài khoản</label>
                  <input
                    type="taiKhoan"
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    aria-describedby="taiKhoan"
                    placeholder="Enter taiKhoan"
                    defaultValue={userLogin.taiKhoan}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="matKhau">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    placeholder="matKhau"
                    //   defaultValue={userLogin.matKhau}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Họ Tên</label>
                  <input
                    type="hoTen"
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    placeholder="hoTen"
                    defaultValue={userLogin.hoTen}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="email"
                    defaultValue={userLogin.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="soDT">số DT</label>
                  <input
                    type="soDT"
                    className="form-control"
                    id="soDT"
                    name="soDT"
                    aria-describedby="soDT"
                    placeholder="soDT"
                    defaultValue={userLogin.soDT}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="maNhom">Mã nhóm</label>
                  <input
                    type="maNhom"
                    className="form-control"
                    id="maNhom"
                    name="maNhom"
                    placeholder="GP01"
                    defaultValue={userLogin.maNhom}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loaiNguoiDung">Loại người dùng</label>
                  <input
                    type="maLoaiNguoiDung"
                    className="form-control"
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                    aria-describedby="maLoaiNguoiDung"
                    placeholder="Khách hàng"
                    defaultValue={userLogin.maLoaiNguoiDung}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade history"
            id="history"
            role="tabpanel"
            aria-labelledby="history-tab"
          >
            {renderHistoryBookTicket(profile)}
          </div>
        </div>
      </div>
    </Guard>
  );
}
