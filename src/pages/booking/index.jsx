import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Guard from "../../HOC/guard";
import {
  bookingTicketAPI,
  getChoiceChairAPI,
  getListTicketAPI,
} from "../../redux/actions/booking.action";
import "./styles.scss";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    booked: {
      backgroundColor: "#EEE",
    },
    choice: {
      backgroundColor: "#4af100",
    },
    notBooked: {
      backgroundColor: "#7d97a7",
    },
  };
});

function Booking() {
  const history = useHistory();
  const dispatch = useDispatch();

  const chairList = useSelector((state) => state).bookingReducer.chairList;
  const movieInfo = useSelector((state) => state).bookingReducer.movieInfo;
  const listChairChoice = useSelector((state) => state).bookingReducer
    .listChairChoice;
  const userLogin = useSelector((state) => state).userReducer.userLogin;
  console.log("chairList", chairList);
  console.log("movieInfo", movieInfo);
  console.log("userLogin", userLogin);
  console.log("listChairChoice", listChairChoice);

  const classes = useStyles();
  const { code } = useParams();
  console.log("code", code);

  // const [chairChoice, setChairChoice] = useState("");

  // api lay list ve
  useEffect(function () {
    // set timer when booking loading
    // var fiveMinutes = 60 * 5,
    //   display = document.querySelector("#timer");
    // startTimer(fiveMinutes, display);

    dispatch(getListTicketAPI(code));
  }, []);

  function renderBtnDatVe() {
    if (
      chairList?.filter((chair) => chair.dangChon === true).length > 0 &&
      typeof chairList?.filter((chair) => chair.dangChon !== "undefined")
    ) {
      return (
        <Button
          className="btnBook btnChoicing"
          variant="contained"
          onClick={() => handleBookingTicket(code, listChairChoice, history)}
        >
          DAT VE
        </Button>
      );
    } else {
      return (
        <Button
          className="btnBook btnNotChoice noClick"
          variant="contained"
          disabled
          onClick={() => handleBookingTicket(code, listChairChoice, history)}
        >
          DAT VE
        </Button>
      );
    }
  }

  function renderStatusChair(booked, choice) {
    if (booked) {
      return classes.booked;
    } else if (choice) {
      return classes.choice;
    } else {
      return classes.notBooked;
    }
  }

  function renderChairList() {
    return chairList?.map((chair, indexCh) => {
      return (
        <Button
          key={indexCh}
          variant="contained"
          disabled={chair.daDat === true ? "disabled" : ""}
          className={`chair ${renderStatusChair(chair.daDat, chair.dangChon)}`}
          onClick={() => handleChoiceChair(chair.maGhe)}
        >
          {chair.tenGhe}
        </Button>
      );
    });
  }

  function handleChoiceChair(maGhe) {
    console.log("maGhe", maGhe);
    totalAmountTicket();
    renderMaGheChoice(maGhe);
    dispatch(getChoiceChairAPI(maGhe));
  }

  function totalAmountTicket() {
    return chairList
      ?.filter((chair) => chair.dangChon === true)
      .reduce((tong, sp, index) => {
        return (tong += sp.giaVe);
      }, 0);
  }

  function renderMaGheChoice(maGhe) {
    return chairList
      ?.filter((chair) => chair.dangChon === true)
      ?.map((chairChoice, indexChoice) => {
        return (
          <span className="maGheChoice" key={indexChoice}>
            {chairChoice.tenGhe},
          </span>
        );
      });
  }

  function handleBookingTicket(maLichChieu, listChairChoice, history) {
    console.log(maLichChieu, listChairChoice);

    dispatch(bookingTicketAPI(maLichChieu, listChairChoice, history));
  }

  // function startTimer(duration, display) {
  //   var timer = duration,
  //     minutes,
  //     seconds;
  //   setInterval(function () {
  //     minutes = parseInt(timer / 60, 10);
  //     seconds = parseInt(timer % 60, 10);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     display.textContent = minutes + ":" + seconds;

  //     if (--timer < 0) {
  //       timer = duration;
  //       alert("EXPRIED");
  //     }
  //   }, 1000);
  // }

  return (
    <Guard>
      <div className="container-fluid booking">
        <div className="row ">
          <div className="col-8">
            <div className="row header__row d-flex">
              <div className="header--left d-flex">
                <div className="img__logo mr-2">
                  <img src="./../images/bhd.png" alt="img" />
                </div>
                <div className="rap">
                  <b>{movieInfo.tenCumRap?.split("-").shift()}</b>-{" "}
                  <span> {movieInfo.tenCumRap?.split("-").pop()}</span>
                  <p>
                    Hom nay - {movieInfo.gioChieu} - {movieInfo.tenRap}
                  </p>
                </div>
              </div>
              {/* <div className="header--right ml-auto">
                <p>Thời gian giữ ghế</p>
                <h4 id="timer"> </h4>
              </div> */}
            </div>

            <div className="img__screen mt-3">
              <img src="./../images/screen.png" alt="img__screen" />
            </div>

            <div className="chairList ">{renderChairList()}</div>
          </div>
          <div className="col-4 info__ticket">
            <div className="price item__box">
              <h1>{totalAmountTicket().toLocaleString()} d</h1>
            </div>
            <div className="detail__movie item__box">
              <b>C18</b> <span>{movieInfo.tenPhim}</span>
              <h6>{movieInfo.tenCumRap}</h6>
              <span>Thu bay {movieInfo.ngayChieu} -</span>{" "}
              <span>{movieInfo.gioChieu} -</span>{" "}
              <span>{movieInfo.tenRap}</span>
            </div>
            <div className="seat__price item__box d-flex">
              <h5>Ghế {renderMaGheChoice()}</h5>
              <span className="ml-auto">
                {totalAmountTicket().toLocaleString()} d
              </span>
            </div>
            <div className="email item__box">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  id="email"
                  label="email"
                  defaultValue={userLogin?.email}
                />
              </form>
            </div>
            <div className="maGiamGia item__box">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  id="phone"
                  label="phone"
                  defaultValue={userLogin?.soDT}
                />
              </form>
            </div>
            <div className="coupon item__box">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  id="maGiamGia"
                  label="maGiamGia"
                  placeholder="Nhap tai day"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>

            <div className="btn btnDatVe item__box  d-flex">
              {/* check choiceChair for btnDatVe */}
              {renderBtnDatVe()}
            </div>
          </div>
        </div>
      </div>
    </Guard>
  );
}

export default withRouter(Booking);
