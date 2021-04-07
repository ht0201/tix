import Home from "./../pages/home";
import Detail from "./../pages/detail";
import Login from "../pages/Login";
import DashBoard from "../pages/dashboard";
import User from "../pages/user";
import Booking from "../pages/booking";
import SignUp from "../pages/sign-up";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Components: Home,
  },

  {
    path: "/detail/:id",
    exact: false,
    Components: Detail,
  },
  {
    path: "/booking/:code",
    exact: false,
    Components: Booking,
  },
  {
    path: "/login",
    exact: false,
    Components: Login,
  },
  {
    path: "/sign-up",
    exact: false,
    Components: SignUp,
  },
];

export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Components: DashBoard,
  },
  {
    path: "/admin/user",
    exact: false,
    Components: User,
  },
];
