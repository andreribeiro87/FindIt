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
import { ArrowBack } from "@mui/icons-material";

export default function SupermarketSearch({
  setiWantSeeWhat,
  setChosenSuperMarket,
}) {
  const [mapPosition, setMapPosition] = useState({ lat: 40.635, lng: -8.65 });
  const [mapZoom, setMapZoom] = useState(13.5);

  const Map = useMemo(
    () =>
      dynamic(() => import("../MapComponent"), {
        loading: () => <p>Loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Card sx={{ display: "flex" }}>
        <IconButton
          onClick={() => setiWantSeeWhat("")}
          color="danger"
          size="sm"
        >
          <ArrowBack />
        </IconButton>
        <Box p={2}>Tap on the icons to see more</Box>
        <Divider />
      </Card>
      <Map
        position={mapPosition}
        zoom={mapZoom}
        setChosenSuperMarket={setChosenSuperMarket}
        setiWantSeeWhat={setiWantSeeWhat}
      />
    </div>
  );
}
