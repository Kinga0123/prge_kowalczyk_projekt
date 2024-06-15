import React from "react";
import "./Dashboardkoncertklient.css";
import Kinga from "./Kinga.png";
import Adrian from "./Adrian.png";
import Patryk from "./Patryk.png";
import Ewa from "./Ewa.png";
import Julia from "./Julia.png";
import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";
import { Link } from "react-router-dom";
import mapa from "./mapa.png";
import windows_start from "./windows_start.png";
import menu from "./menu.png";

function Dashboard() {
  return (
    <div className="dasboard_koncerty_2">
      <div className="button">
        <Link to="map_koncert_klient">
          <img className="mapa_button" src={mapa} alt="mapa" />
        </Link>
        <img
          className="windows_start"
          src={windows_start}
          alt="windows_start"
        />
        <img className="menu" src={menu} alt="menu" />
      </div>
      <div className="dashboard_koncert">
        <div className="dashboard_title">Baza klientów wybranego koncertu</div>
        <div className="rysunki">
          <div className="obrazki1">
            <img className="Kinga" src={Kinga} alt="kinga" />
            <img className="Adrian" src={Adrian} alt="adrian" />
            <img className="Patryk" src={Patryk} alt="patryk" />
            <img className="Ewa" src={Ewa} alt="ewa" />
            <img className="Julia" src={Julia} alt="julia" />
          </div>
          <div className="obrazki2">
            <img className="discopolo" src={discopolo} alt="discopolo" />
            <img className="techno" src={techno} alt="techno" />
            <img className="rock" src={rock} alt="rock" />
            <img className="rap" src={rap} alt="rap" />
            <img className="pop" src={pop} alt="pop" />
          </div>
        </div>
        <div className="tytuly">
          <div className="napisy1">
            <div className="Kinga">Kinga</div>
            <div className="Adrian">Adrian</div>
            <div className="Patryk">Patryk</div>
            <div className="Ewa">Ewa</div>
            <div className="Julia">Julia</div>
          </div>
          <div className="napisy2">
            <div className="discopolo">Disco Polo</div>
            <div className="techno">Techno</div>
            <div className="rock">Rock</div>
            <div className="rap">Rap</div>
            <div className="pop">Pop</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
