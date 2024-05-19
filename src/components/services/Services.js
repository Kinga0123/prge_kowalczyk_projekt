import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import koncerty from "./koncerty.png";
import klienci from "./klienci.png";
import koncert_klient from "./koncert_klient.png";

function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_bottom">
        <div className="obrazki">
          <img className="obrazek1" src={koncerty} alt="logo1" />
          <img className="obrazek2" src={klienci} alt="logo2" />
          <img className="obrazek3" src={koncert_klient} alt="logo3" />
        </div>
        <div className="services_options">
          <Link to="map">
            <div className="services_obj">Mapa koncertów</div>
          </Link>
          <div className="services_obj">Baza danych koncertów</div>
          <Link to="map_klienci">
            <div className="services_obj2">Mapa klientów</div>
          </Link>
          <div className="services_obj2">Baza danych klientów</div>
          <Link to="map_koncert_klient">
            <div className="services_obj3">Mapa klientów na koncercie</div>
          </Link>
          <div className="services_obj3">Baza danych klientów na koncercie</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
