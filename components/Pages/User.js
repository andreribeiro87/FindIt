import * as React from "react";
import Avatar from "@mui/joy/Avatar";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";


export default function User() {

  return (
    <Card
        size="lg"
      sx={{
        boxShadow: "lg",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar color="danger" size="lg" sx={{ "--Avatar-size": "10rem" }} />
        <Card color="danger" size="lg" variant="outline">

        </Card>


      </CardContent>
    </Card>
  );
}
