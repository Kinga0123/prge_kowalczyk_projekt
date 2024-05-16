import React from "react";
import "./Home.css";
import koncert from "./koncert.jpg";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">O projekcie</div>
      </div>
      <div className="home_bottom">
        <div className="home_left">
          <img className="koncert" src={koncert} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Geoportal do zarządzania wydarzeniami muzycznymi
          </div>

          <button className="home_right_button">START</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
