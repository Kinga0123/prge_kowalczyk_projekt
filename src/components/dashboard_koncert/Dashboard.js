import React from "react";
import "./Dashboard.css";
import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";
import { Link } from "react-router-dom";
import mapa from "./mapa.png";

function Dashboard() {
  return (
    <div className="dasboard_koncerty_2">
      <div className="button">
        <Link to="map">
          <img className="mapa_button" src={mapa} alt="mapa" />
        </Link>
        <div className="dashboard_koncert">
          <div className="dashboard_title">Baza koncertów</div>
          <div className="zdjecia">
            <img className="discopolo1" src={discopolo} alt="discopolo" />
            <img className="techno1" src={techno} alt="techno" />
            <img className="rock1" src={rock} alt="rock" />
            <img className="rap1" src={rap} alt="rap" />
            <img className="pop1" src={pop} alt="pop" />
          </div>
          <div className="napisy">
            <div className="discopolo1">Disco Polo</div>
            <div className="techno1">Techno</div>
            <div className="rock1">Rock</div>
            <div className="rap1">Rap</div>
            <div className="pop1">Pop</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
