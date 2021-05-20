import Home from "./../pages/home";
import Detail from "./../pages/detail";
import Login from "../pages/Login";
import DashBoard from "../pages/dashboard";
import User from "../pages/user";
import Booking from "../pages/booking";
import SignUp from "../pages/sign-up";
import Profile from "../pages/profile";
import QuanLyPhim from "../pages/quanLyPhim";
import Admin from "../pages/admin/admin";
import ThemPhim from "../pages/themPhim";
import SuaPhim from "../pages/suaPhim";

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
  {
    path: "/profile",
    exact: false,
    Components: Profile,
  },
];

export const adminRouter = [
  // {
  //   path: "/admin",
  //   exact: true,
  //   Components: Admin,
  // },
  {
    path: "/admin/quanlyphim",
    exact: true,
    Components: QuanLyPhim,
  },
  {
    path: "/admin/user",
    exact: false,
    Components: User,
  },
  {
    path: "/admin/themphim",
    exact: false,
    Components: ThemPhim,
  },
  {
    path: "/admin/suaphim",
    exact: false,
    Components: SuaPhim,
  },
];
