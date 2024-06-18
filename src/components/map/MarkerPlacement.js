import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";
import { discopoloIcon, popIcon, rapIcon, rockIcon, technoIcon } from "./Icon";

function MarkerPlacement() {
  return (
    <div className="markery">
      <div>
        <Marker icon={discopoloIcon} position={[49.47, 22.46]}>
          <Popup>Disco Polo</Popup>
        </Marker>
        <Circle center={[49.47, 22.46]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={technoIcon} position={[52.21, 21.0]}>
          <Popup>Techno</Popup>
        </Marker>
        <Circle center={[52.21, 21.0]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={rockIcon} position={[50.03, 19.56]}>
          <Popup>Rock</Popup>
        </Marker>
        <Circle center={[50.03, 19.56]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={rapIcon} position={[54.11, 16.1]}>
          <Popup>Rap</Popup>
        </Marker>
        <Circle center={[54.11, 16.1]} pathOptions={{ color: "red" }}></Circle>
      </div>
      <div>
        <Marker icon={popIcon} position={[53.46, 20.29]}>
          <Popup>Pop</Popup>
        </Marker>
        <Circle center={[53.46, 20.29]} pathOptions={{ color: "red" }}></Circle>
      </div>
    </div>
  );
}

export default MarkerPlacement;
