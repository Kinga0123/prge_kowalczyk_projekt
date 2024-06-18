import React from "react";
import "./Dashboardkoncertklient.css";
import { Link } from "react-router-dom";
import mapa from "./mapa.png";
import MediaCard from "./Card_koncert_klient";
import Kinga_disco from "./Kinga_disco.png";
import Adrian_techno from "./Adrian_techno.png";
import Patryk_rock from "./Patryk_rock.png";
import Ewa_rap from "./Ewa_rap.png";
import Julia_pop from "./Julia_pop.png";

function Dashboard_koncert_klient() {
  const input_list = [
    {
      name: "Kinga",
      content: "Koncert Disco Polo",
      image: Kinga_disco,
    },
    {
      name: "Adrian",
      content: "Koncert Techno",
      image: Adrian_techno,
    },
    {
      name: "Patryk",
      content: "Koncert Rock",
      image: Patryk_rock,
    },
    {
      name: "Ewa",
      content: "Koncert Rap",
      image: Ewa_rap,
    },
    {
      name: "Julia",
      content: "Koncert Pop",
      image: Julia_pop,
    },
  ];
  return (
    <div>
      <div className="button">
        <Link to="map_koncert_klient">
          <img className="map_button" src={mapa} alt="mapa" />
        </Link>
        <h1 className="title">Baza klientów wybranego koncertu</h1>
        <div className="card-container">
          {input_list.map((item) => {
            return (
              <MediaCard
                name={item.name}
                content={item.content}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard_koncert_klient;
