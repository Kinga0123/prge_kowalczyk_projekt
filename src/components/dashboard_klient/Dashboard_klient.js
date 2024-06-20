import React from "react";
import "./Dashboardklient.css";
import Kinga from "./Kinga.png";
import Adrian from "./Adrian.png";
import Patryk from "./Patryk.png";
import Ewa from "./Ewa.png";
import Julia from "./Julia.png";
import mapa from "./mapa.png";
import { Link } from "react-router-dom";
import MediaCard from "./Card_klient";

function Dashboard_klient() {
  const input_list = [
    {
      name: "Kinga",
      image: Kinga,
    },
    {
      name: "Adrian",
      image: Adrian,
    },
    {
      name: "Patryk",
      image: Patryk,
    },
    {
      name: "Ewa",
      image: Ewa,
    },
    {
      name: "Julia",
      image: Julia,
    },
  ];

  const createPath = (name) => {
    return `/genres/${name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}`;
  };

  return (
    <div>
      <div className="button">
        <Link to="map">
          <img className="mapa_button" src={mapa} alt="mapa" />
        </Link>
        <h1 className="title">Baza klientów</h1>
        <div className="card-container">
          {input_list.map((item) => (
            <Link
              key={item.name}
              to={createPath(item.name)}
              className="card-link"
            >
              <MediaCard name={item.name} image={item.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard_klient;
