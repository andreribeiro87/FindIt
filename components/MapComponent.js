import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../styles/Map.module.css";
import { useEffect, useState } from "react";
import ProductSearchCard from "./ProductSearchCard";

export default function MyMap(props) {
  const { position, zoom } = props;
 

  return (
    <div>
    <MapContainer className={styles.map} center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {/*falta por os markers dos supermercados e o card para carregar a info so supermercado em baixo*/}
    <Marker position={[40.6318,-8.6599]}>
        <Popup>You are here!</Popup>
    </Marker>

    <Marker position={[40.62346750937607, -8.650157603650532]}>
        <Popup>Mercadona Av. Europa</Popup>
    </Marker>

    <Marker position={[40.64221769744397, -8.637837045230306]}>
        <Popup>Continente Estação</Popup>
    </Marker>

    <Marker position={[40.626945128935944, -8.64407200875597]}>
        <Popup>Auchan Glicínias</Popup>
    </Marker>
    </MapContainer>



    </div>
  );
}