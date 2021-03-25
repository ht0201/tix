import Home from "./../pages/home";
import Detail from "./../pages/detail";
import LoginIn from "../pages/Login";
import DashBoard from "../pages/dashboard";
import User from "../pages/user";
import Booking from "../pages/booking";
import Login from "../pages/Login";

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
    path: "/sign-in",
    exact: false,
    Components: Login,
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
