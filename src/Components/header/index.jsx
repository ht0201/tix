import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { checkLoginAPI } from "../../redux/actions/user.action";

// import { withStyles } from "@material-ui/core";
// import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  hoverNav: {
    color: red,
  },

  setWidthHeight: {
    height: "40px",
    width: "40px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  useEffect(
    function () {
      dispatch(checkLoginAPI(userLogin));
    },
    [user]
  );

  function handleLogOut(userLogin) {
    window.localStorage.clear();
    setUser({
      user: userLogin,
    });
  }

  function checkLogin() {
    if (userLogin) {
      return (
        <>
          <li className="nav-item ">
            Chào, <b className="nav-link user"> {userLogin.taiKhoan}</b>
            <NavLink className="admin" to="/admin/quanlyphim">
              Admin
            </NavLink>
            <NavLink className="profile" to="/profile">
              Profile
            </NavLink>
            <span className="logOut" onClick={() => handleLogOut(userLogin)}>
              {" "}
              Đăng xuất{" "}
            </span>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink to="/Login" className="nav-link">
              Đăng nhập <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/sign-up" className="nav-link">
              Đăng ký <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </>
      );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand" href="dddd">
            <img
              src="/images/web-logo.png"
              alt="logo"
              className={classes.setWidthHeight}
            />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a href="#movieCatelogy" className="nav-link">
                  Lịch chiếu <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#lichChieu" className="nav-link">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a href="#homeApp" className="nav-link">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              {checkLogin()}

              {/* <li className="nav-item">
                <NavLink to="/" className="nav-link" href="aaa">
                  Ho chi minh
                </NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </AppBar>
    </div>
  );
}
