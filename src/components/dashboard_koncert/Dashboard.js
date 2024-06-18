import React from "react";
import "./Dashboard.css";
import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";
import { Link } from "react-router-dom";
import mapa from "./mapa.png";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Disco Polo",
      image: discopolo,
    },
    {
      name: "Techno",
      image: techno,
    },
    {
      name: "Rock",
      image: rock,
    },
    {
      name: "Rap",
      image: rap,
    },
    {
      name: "Pop",
      image: pop,
    },
  ];
  return (
    <div>
      <div className="button">
        <Link to="map">
          <img className="mapa_button" src={mapa} alt="mapa" />
        </Link>
        <h1 className="title">Baza koncertów</h1>
        <div className="card-container">
          {input_list.map((item) => {
            return <MediaCard name={item.name} image={item.image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
