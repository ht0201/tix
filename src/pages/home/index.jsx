import React from "react";
import Carousel from "../../Components/carousel";
import FilmBlock from "../../Components/filmBlock";
import HomeTools from "../../Components/homeTools";
import LichChieu from "../../Components/lichChieu";

export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeTools />
      <FilmBlock />
      <LichChieu />
    </div>
  );
}
