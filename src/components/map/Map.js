import React, { useEffect, useState } from "react";
import "./Map.css";
import { LayersControl, MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import mikrofon from "./mikrofon.jpg";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: mikrofon,
  iconSize: [60, 96],
  iconAnchor: [30, 10],
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [koncerty, setKoncerty] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane koncertu</h1>
      <strong>Gatunek muzyczny:</strong> ${feature.properties.nazwa}</br>`);
    }
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Akoncerty&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          setKoncerty(response.data);
        });
    };
    getData();
    console.log(koncerty);
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Mapa koncertów">
            {koncerty ? (
              <GeoJSON data={koncerty} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
export default Map;
