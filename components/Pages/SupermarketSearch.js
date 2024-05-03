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

  const [mapPosition, setMapPosition] = useState({ lat: 40.6443, lng: -8.6455 }); 
  const [mapZoom, setMapZoom] = useState(13); 
  let allSuper = [];

  useEffect(() => {
    // debugger;
    (async () => {
      fetch(`/api/getSupermarket`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // supermercados do user
          //only supermercados
            allSuper = [data];
            console.log(allSuper);
        });

    })();
  }, []);



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
          Search bar maybe
        </Box>
        <Divider />
      </Card>
      <Map position={mapPosition} zoom={mapZoom} allSuper={allSuper}/>
    </div>
  );
}