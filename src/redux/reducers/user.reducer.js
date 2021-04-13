import {
  LOGIN,
  POST_PROFILE,
  PUT_PROFILE,
  SIGN_UP,
} from "./../constants/user.constant";

const initialState = {
  userLogin: null,
  userSignUp: null,
  profile: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return { ...state, userLogin: payload };
    }
    case SIGN_UP: {
      return { ...state, userSignUp: payload };
    }

    case "CHECK_LOGIN": {
      return { ...state, userLogin: "" };
    }

    case POST_PROFILE: {
      return { ...state, profile: payload };
    }

    case PUT_PROFILE: {
      console.log("rs PUT", payload);
      localStorage.clear();
      // JSON.stringify(localStorage.setItem("userLogin", payload));

      return { ...state, userLogin: payload };
    }

    default: {
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));

      return { state, userLogin: userLogin };
    }
  }
};

export default userReducer;
