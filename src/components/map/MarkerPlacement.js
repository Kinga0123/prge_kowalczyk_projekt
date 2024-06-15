import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";
import { KingaIcon } from "./Icon";

function MarkerPlacement() {
  return (
    <div>
      <Marker icon={KingaIcon} position={[52.23, 21.0]}>
        <Popup>aaa</Popup>
      </Marker>
      <Circle center={[52.23, 21.0]} pathOptions={{ color: "red" }}></Circle>
    </div>
  );
}

export default MarkerPlacement;
