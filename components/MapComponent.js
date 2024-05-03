import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../styles/Map.module.css";
import { useEffect, useState } from "react";
import ProductSearchCard from "./ProductSearchCard";

export default function MyMap(props, allSuper) {
  const { position, zoom } = props;
  const {selectedSuper, setSelectedSuper} = useState(1); //id do supermercado selecionado(default 1)
 

  return (
    <div>
    <MapContainer className={styles.map} center={position} zoom={zoom} scrollWheelZoom={false} allSuper={allSuper}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {/*falta por os markers dos supermercados e o card para carregar a info so supermercado em baixo*/}
    <Marker position={[40.6318,-8.6599]}>
        <Popup>You are here!</Popup>
    </Marker>
    </MapContainer>



    </div>
  );
}