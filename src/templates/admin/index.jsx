import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import Dashboard from "../../pages/dashboard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getListMovieShowingAPI } from "../../redux/actions/movie.action";
// import "./styles.scss";
import { MDBDataTable } from "mdbreact";

import { useState } from "react";
import "./styles.scss";

const AdminLayout = (props) => {
  function handleToggle() {
    if (
      document.getElementById("wrapper").classList.contains("toggled") === true
    ) {
      return document.getElementById("wrapper").classList.remove("toggled");
    } else {
      return document.getElementById("wrapper").classList.add("toggled");
    }
  }

  return (
    <>
      <div className="d-flex adminTemp" id="wrapper">
        {/* Sidebar */}
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">
            <NavLink to="/" className="navbar-brand" href="dddd">
              <img
                src="/images/web-logo.png"
                alt="logo"
                style={{ width: "30px", height: "30px" }}
              />
            </NavLink>{" "}
          </div>
          <div className="list-group list-group-flush">
            <NavLink
              to="/admin/quanlyphim"
              className="list-group-item list-group-item-action bg-light"
            >
              Quan ly phim
            </NavLink>
            <NavLink
              to="/admin/quanlynguoidung"
              className="list-group-item list-group-item-action bg-light"
            >
              Quan ly nguoi dung
            </NavLink>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button
              className="btn btn-primary"
              id="menu-toggle"
              onClick={() => handleToggle()}
            >
              Toggle Menu
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="aaa">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aaa">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="aaaaa"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="aaa">
                      Action
                    </a>
                    <a className="dropdown-item" href="aaa">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="aaa">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <main style={{ marginTop: "70px" }}>
            {/* Goi cp con cua cp AdminLayout */}
            {props.children}
          </main>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export const RoutesAdmin = (props) => {
  const { Components, ...routes } = props;
  return (
    <Route {...routes}>
      <AdminLayout>
        <Components />
        {/* <Admin /> */}
      </AdminLayout>
    </Route>
  );
};
