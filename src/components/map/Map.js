import React, { useEffect, useState } from "react";
import "./Map.css";
import { LayersControl, MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import pinezka from "./pinezka.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: pinezka,
  iconSize: [50, 50],
  iconAnchor: [30, 10],
});

let KlienciIcon = L.icon({
  iconUrl: pinezka,
  iconSize: [50, 50],
  iconAnchor: [30, 10],
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [koncerty, setKoncerty] = useState(null);
  const [klienci, setKlienci] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane koncertu</h1>
      <strong>Gatunek muzyczny:</strong> ${feature.properties.nazwa}</br>`);
    }
  };
  const makePopup2 = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
      <h1>Dane klienta</h1>
      <strong>Imię:</strong> ${feature.properties.imie}</br>
      <strong>Miejsce zamieszkania:</strong> ${feature.properties.miasto}</br>
      <strong>Wybrany koncert:</strong> ${feature.properties.koncert}</br>
      <strong>Posiada bilet:</strong> ${feature.properties.bilet}`);
    }
  };
  useEffect(() => {
    const getKoncertyData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Akoncerty&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          setKoncerty(response.data);
        });
    };
    getKoncertyData();

    const getKlienciData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aklienci_db&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          setKlienci(response.data);
        });
    };
    getKlienciData();
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
          <LayersControl.Overlay name="Mapa klientów">
            {koncerty ? (
              <GeoJSON data={klienci} onEachFeature={makePopup2} />
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
