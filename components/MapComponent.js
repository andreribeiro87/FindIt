import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../styles/Map.module.css";
import { Icon } from 'leaflet'; // Import Icon from leaflet
import { useEffect, useState } from "react";
import ProductSearchCard from "./ProductSearchCard";
import personIconImage from "../public/personicon.png";
import supermarketIconImage from "../public/supermarketicon.png";


export default function MyMap(props) {
  const { position, zoom } = props;

  // Define custom icon options
  const personIcon = new Icon({
    iconUrl: personIconImage.src,
    iconSize: [50, 50], // Adjust the icon size as needed
    iconAnchor: [25, 50], // Position the icon anchor to the bottom center
    popupAnchor: [0, -50] // Position the popup anchor above the icon
  });

  const supermarketicon = new Icon({
    iconUrl: supermarketIconImage.src,
    iconSize: [50, 50], // Adjust the icon size as needed
    iconAnchor: [25, 50], // Position the icon anchor to the bottom center
    popupAnchor: [0, -50] // Position the popup anchor above the icon
  });

  return (
    <div>
      <MapContainer className={styles.map} center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[40.6318,-8.6599]} icon={personIcon}>
          <Popup>You are here!</Popup>
        </Marker>

        <Marker position={[40.62346750937607, -8.650157603650532]} icon={supermarketicon}>
        <Popup>
              <div>
                <h3>Mercadona Av. Europa</h3>
                <p><strong>Distance:</strong> 1.6 km</p>
                <p><strong>Accessibility:</strong> No</p>
                <button className={styles.dirbutton} onClick={() => console.log("Direções")}>Get directions</button>
              </div>
        </Popup>
        </Marker>

        <Marker position={[40.64221769744397, -8.637837045230306]} icon={supermarketicon}>

        <Popup>
            <div>
                <h3>Continente Estação</h3>
                <p><strong>Distance:</strong> 2.4 km</p>
                <p><strong>Accessibility:</strong> No</p>
                <button className={styles.dirbutton} onClick={() => console.log("Direções")}>Get directions</button>
              </div>
        </Popup>
        </Marker>

        <Marker position={[40.626945128935944, -8.64407200875597]} icon={supermarketicon}>
        <Popup>
            <div>
                <h3>Auchan Glicínias</h3>
                <p><strong>Distance:</strong> 1.8 km</p>
                <p><strong>Accessibility:</strong> Yes</p>
                <button className={styles.dirbutton}  onClick={() => console.log("Direções")}>Get directions</button>
              </div>
        </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
