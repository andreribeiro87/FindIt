import { useState } from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import { Container } from "@mui/joy";

import EditIcon from "@mui/icons-material/Edit";
import TopicIcon from "@mui/icons-material/Topic";
import RestoreIcon from "@mui/icons-material/Restore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

//TODO IMPLEMENT EVERTHING AHHHHHH

export default function User() {
  const [name, setName] = useState("User");
  return (
    <Card
      color="danger"
      variant="soft"
      size="lg"
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "5%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "75%",
        height: "70%",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <PersonIcon color="danger" sx={{ fontSize: "7rem" }} />
          {name}
        </Container>
        <Card size="lg">
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={function () {}}
              variant="solid"
              children={"Edit Profile"}
              startDecorator={<EditIcon />}
            />
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={function () {}}
              variant="solid"
              children={"Preferences"}
              startDecorator={<TopicIcon />}
            />
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={function () {}}
              variant="solid"
              children={"History"}
              startDecorator={<RestoreIcon />}
            />
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={function () {}}
              variant="solid"
              children={"Promotions"}
              startDecorator={<NotificationsActiveIcon />}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
