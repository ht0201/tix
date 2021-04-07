import React from "react";
import { Redirect } from "react-router-dom";

export default function Guard(props) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  if (userLogin) {
    return props.children;
  } else {
    return <Redirect to="/Login" />;
  }
}
