import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";
import {
  KingaDiscoIcon,
  AdrianTechnoIcon,
  PatrykRockIcon,
  EwaRapIcon,
  JuliaPopIcon,
} from "./IconKoncertKlient";

function MarkerPlacement_koncert_klient() {
  return (
    <div className="markery">
      <div>
        <Marker icon={KingaDiscoIcon} position={[49.47, 22.46]}>
          <Popup>Kinga na Disco Polo</Popup>
        </Marker>
        <Circle center={[49.47, 22.46]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={AdrianTechnoIcon} position={[52.21, 21.0]}>
          <Popup>Adrian na Techno</Popup>
        </Marker>
        <Circle center={[52.21, 21.0]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={PatrykRockIcon} position={[50.03, 19.56]}>
          <Popup>Patryk na Rocku</Popup>
        </Marker>
        <Circle center={[50.03, 19.56]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={EwaRapIcon} position={[54.11, 16.1]}>
          <Popup>Ewa na Rapie</Popup>
        </Marker>
        <Circle center={[54.11, 16.1]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={JuliaPopIcon} position={[53.46, 20.29]}>
          <Popup>Julia na Popie</Popup>
        </Marker>
        <Circle center={[53.46, 20.29]} pathOptions={{ color: "red" }}></Circle>
      </div>
    </div>
  );
}

export default MarkerPlacement_koncert_klient;
