import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import koncerty from "./koncerty.png";
import klienci from "./klienci.png";
import koncert_klient from "./koncert_klient.png";
import mapa from "./mapa.png";
import baza_danych from "./baza_danych.png";

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
          <div className="services_mapa">
            <Link to="map">
              <img className="services_obj" src={mapa} alt="mapakoncertow" />
            </Link>
            <Link to="map_klienci">
              <img className="services_obj2" src={mapa} alt="mapaklientow" />
            </Link>
            <Link to="map_koncert_klient">
              <img
                className="services_obj3"
                src={mapa}
                alt="mapakoncertklient"
              />
            </Link>
          </div>
          <div className="services_baza_danych">
            <Link to="dashboard_koncert">
              <img
                className="services_obj"
                src={baza_danych}
                alt="bazadanychkoncertow"
              />
            </Link>
            <Link to="dashboard_klient">
              <img
                className="services_obj2"
                src={baza_danych}
                alt="bazadanychklientow"
              />
            </Link>
            <Link to="dashboard_koncert_klient">
              <img
                className="services_obj3"
                src={baza_danych}
                alt="bazadanychkoncertklient"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
