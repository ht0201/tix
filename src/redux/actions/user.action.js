import axios from "axios";
import { LOGIN, SIGN_UP } from "./../constants/user.constant";

export const getLoginAction = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const getLoginAPI = (user, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((res) => {
        dispatch(getLoginAction(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSignUpAction = (userSU) => {
  return {
    type: SIGN_UP,
    payload: userSU,
  };
};

export const getSignUpAPI = (userSU, history) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: userSU,
        headers: {
          Authorization: `Bearer ${userSU.accessToken}`,
        },
      });
      console.log(res);
      alert("Them thanh cong");
      history.push("/Login");
      //   dispatch(getSignUpAction(res.data));

      //   localStorage.setItem("userSignUp", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
