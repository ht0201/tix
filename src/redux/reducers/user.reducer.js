import { LOGIN, SIGN_UP } from "./../constants/user.constant";

const initialState = {
  userLogin: null,
  userSignUp: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      console.log("userLogin", payload);
      return { ...state, userLogin: payload };
    }
    case SIGN_UP: {
      return { ...state, userSignUp: payload };
    }

    case "CHECK_LOGIN": {
      return { ...state, userLogin: "" };
    }

    default: {
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      console.log("userLogin", userLogin);

      return { state, userLogin: userLogin };
    }
  }
};

export default userReducer;
