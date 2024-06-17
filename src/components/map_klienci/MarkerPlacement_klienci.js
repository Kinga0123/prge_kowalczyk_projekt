import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";
import {
  KingaIcon,
  AdrianIcon,
  PatrykIcon,
  EwaIcon,
  JuliaIcon,
} from "./Icon_klienci";

function MarkerPlacement_klienci() {
  return (
    <div className="markery">
      <div>
        <Marker icon={KingaIcon} position={[49.47, 22.46]}>
          <Popup>Kinga</Popup>
        </Marker>
        <Circle center={[49.47, 22.46]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={AdrianIcon} position={[52.21, 21.0]}>
          <Popup>Adrian</Popup>
        </Marker>
        <Circle center={[52.21, 21.0]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={PatrykIcon} position={[50.03, 19.56]}>
          <Popup>Patryk</Popup>
        </Marker>
        <Circle center={[50.03, 19.56]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={EwaIcon} position={[54.11, 16.1]}>
          <Popup>Ewa</Popup>
        </Marker>
        <Circle center={[54.11, 16.1]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={JuliaIcon} position={[53.46, 20.29]}>
          <Popup>Julia</Popup>
        </Marker>
        <Circle center={[53.46, 20.29]} pathOptions={{ color: "red" }}></Circle>
      </div>
    </div>
  );
}

export default MarkerPlacement_klienci;
