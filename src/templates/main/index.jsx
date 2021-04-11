import React from "react";
import { Route } from "react-router-dom";
import Carousel from "../../Components/carousel";
import FilmBlock from "../../Components/filmBlock";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import HomeTools from "../../Components/homeTools";
import Home from "../../pages/home";

const HomeLayout = (props) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "70px" }}>
        {/* Goi cp con cua cp HomeLayout */}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export const RoutesMain = (props) => {
  const { Components, ...routes } = props;
  return (
    <Route {...routes}>
      <HomeLayout>
        <Components />
        {/* <Home /> */}
      </HomeLayout>
    </Route>
  );
};
