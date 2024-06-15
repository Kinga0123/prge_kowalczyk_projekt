import React from "react";
import "./Dashboardklient.css";
import Kinga from "./Kinga.png";
import Adrian from "./Adrian.png";
import Patryk from "./Patryk.png";
import Ewa from "./Ewa.png";
import Julia from "./Julia.png";
import mapa from "./mapa.png";
import windows_start from "./windows_start.png";
import menu from "./menu.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dasboard_koncerty_2">
      <div className="button">
        <Link to="map_klienci">
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
        <div className="dashboard_title">Baza klientów</div>
        <div className="obrazki_klienci">
          <img className="Kinga" src={Kinga} alt="kinga" />
          <img className="Adrian" src={Adrian} alt="adrian" />
          <img className="Patryk" src={Patryk} alt="patryk" />
          <img className="Ewa" src={Ewa} alt="ewa" />
          <img className="Julia" src={Julia} alt="julia" />
        </div>
        <div className="napisy_klienci">
          <div className="Kinga">Kinga</div>
          <div className="Adrian">Adrian</div>
          <div className="Patryk">Patryk</div>
          <div className="Ewa">Ewa</div>
          <div className="Julia">Julia</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
