import Card from "@mui/material/Card";
import IconButton from "@mui/joy/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/Search";
import { Autocomplete, Box } from "@mui/joy";
import Divider from "@mui/joy/Divider";
import { useState } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { MapContainer } from "react-leaflet";
import { useEffect } from "react";

export default function Promotions() {

  const [mapPosition, setMapPosition] = useState({ lat: 40.635, lng:-8.652  }); 
  const [mapZoom, setMapZoom] = useState(13.5); 



  const Map = useMemo(() => dynamic(
    () => import('../MapComponent'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div>
      <Card>
        <Box p={2}>
          Supermarkets
        </Box>
        <Divider />
      </Card>
      <Map position={mapPosition} zoom={mapZoom}/>
    </div>
  );
}