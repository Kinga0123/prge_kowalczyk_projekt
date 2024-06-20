import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapa from "./mapa.png";
import baza_danych from "./baza_danych.png";

function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_bottom">
        <div className="services_options">
          <div className="services_mapa">
            <Link to="map">
              <img className="mapa" title="mapy" src={mapa} alt="mapa" />
            </Link>
          </div>
          <div className="services_baza_danych">
            <Link to="dashboard_koncert">
              <img
                title="koncerty"
                className="services_obj"
                src={baza_danych}
                alt="bazadanychkoncertow"
              />
            </Link>
            <Link to="dashboard_klient">
              <img
                title="klienci"
                className="services_obj2"
                src={baza_danych}
                alt="bazadanychklientow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
