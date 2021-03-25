import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getListTicketAPI } from "../../redux/actions/booking.action";

function Booking() {
  const dispatch = useDispatch();
  const listTicket = useSelector((state) => state).bookingReducer.listTicket;
  console.log("listTicket", listTicket);

  const { code } = useParams();
  console.log("code", code);

  useEffect(function () {
    dispatch(getListTicketAPI(code));
  }, []);

  return <div>Booking</div>;
}

export default Booking;
