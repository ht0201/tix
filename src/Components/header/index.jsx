import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
import "./styles";

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
    height: "50px",
    width: "50px",
  },
}));

export default function Header() {
  const classes = useStyles();

  // function handleClick() {
  //       $(document).ready(function(){
  //     $('html,body').animate({scrollTop:$(location.hash).offset().‌​top}, 500);
  //   });
  // }

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
                  Lich chieu <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#lichChieu" className="nav-link">
                  Cum rap
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="sdsd">
                  Tin tuc
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="sdsd">
                  Ung dung
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink to="/Login" className="nav-link" href="sass">
                  Dang nhap <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/sign-up" className="nav-link" href="sass">
                  Dang ky <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="aaa">
                  Ho chi minh
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Typography variant="h6" className={classes.title}>
            <NavLink to="/">
              <img
                src="./images/web-logo.png"
                alt="logo"
                className={classes.setWidthHeight}
              />
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Lich chieu</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Cum rap</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Tin tuc</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Ung dung</NavLink>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/Login">
              <i class="fas fa-user"></i>
              Dang nhap
            </NavLink>
          </Typography> */}
      </AppBar>
    </div>
  );
}
