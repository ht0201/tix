import axios from "axios";
import {
  LOGIN,
  SIGN_UP,
  POST_PROFILE,
  PUT_PROFILE,
} from "./../constants/user.constant";

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
        console.log(res.data);
        dispatch(getLoginAction(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        if (res.data.maLoaiNguoiDung === "QuanTri") {
          history.push("/admin/quanlyphim");
        } else {
          history.goBack();
        }
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

export const checkLoginAction = (userLogin) => {
  return {
    type: "CHECK_LOGIN",
    payload: userLogin,
  };
};

export const checkLoginAPI = (userLogin) => {
  return async (dispatch) => {
    try {
      dispatch(checkLoginAction(userLogin));
      //   localStorage.setItem("userSignUp", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// profile

export const postProfileAction = (user) => {
  return {
    type: POST_PROFILE,
    payload: user,
  };
};

export const postProfileAPI = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        data: user,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(res);

      dispatch(postProfileAction(res.data));
      //   localStorage.setItem("userSignUp", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const putProfileAction = (user) => {
  return {
    type: PUT_PROFILE,
    payload: user,
  };
};

export const putProfileAPI = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "PUT",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: user,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(res);
      alert("CAP NHAT THANH CONG");
      dispatch(putProfileAction(res.data));

      // localStorage.setItem("userLogin", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
