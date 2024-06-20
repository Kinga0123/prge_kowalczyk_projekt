import React from "react";
import { useParams } from "react-router-dom";
import "./GenrePage.css";

import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";
import Kinga from "./Kinga.png";
import Ewa from "./Ewa.png";
import Patryk from "./Patryk.png";
import Adrian from "./Adrian.png";
import Julia from "./Julia.png";

const genreDescriptions = {
  "disco-polo": {
    description: "Disco Polo",
    image: discopolo,
  },
  techno: {
    description: "Techno",
    image: techno,
  },
  rock: {
    description: "Rock ",
    image: rock,
  },
  rap: {
    description: "Rap",
    image: rap,
  },
  pop: {
    description: "Pop ",
    image: pop,
  },
};

const clientDescriptions = {
  kinga: {
    description: "Opis dla Kingi",
    image: Kinga,
  },
  adrian: {
    description: "Opis dla Adriana",
    image: Adrian,
  },
  patryk: {
    description: "Opis dla Patryka",
    image: Patryk,
  },
  ewa: {
    description: "Opis dla Ewy",
    image: Ewa,
  },
  julia: {
    description: "Opis dla Julii",
    image: Julia,
  },
};

function GenrePage() {
  const { genre } = useParams();

  const genreInfo = genreDescriptions[genre];

  if (genreInfo) {
    const { description, image } = genreInfo;
    return (
      <div className="genre-page">
        <h1>{genre.replace("-", " ").toUpperCase()}</h1>
        <img src={image} alt={genre} className="img" />
        <p>{description}</p>
      </div>
    );
  }

  const clientInfo = clientDescriptions[genre];
  if (clientInfo) {
    const { description, image } = clientInfo;
    return (
      <div className="genre-page">
        <h1>{genre.replace("-", " ").toUpperCase()}</h1>
        <img src={image} alt={genre} className="img" />
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="genre-page">
      <h1>{genre.replace("-", " ").toUpperCase()}</h1>
      <p>Brak opisu</p>
    </div>
  );
}

export default GenrePage;
