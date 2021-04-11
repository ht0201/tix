import React from "react";
import Carousel from "../../Components/carousel";
import FilmBlock from "../../Components/filmBlock";
import Footer from "../../Components/footer";
import HomeApp from "../../Components/homeApp";
import HomeTools from "../../Components/homeTools";
import LichChieu from "../../Components/lichChieu";
import News from "../../Components/news";
import "./styles.scss";

export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeTools />
      <FilmBlock />
      <LichChieu />
      <News />
      <HomeApp />
    </div>
  );
}
