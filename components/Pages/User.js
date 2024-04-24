import { useState } from "react";
import Avatar from "@mui/joy/Avatar";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";

import EditIcon from "@mui/icons-material/Edit";
import TopicIcon from "@mui/icons-material/Topic";
import RestoreIcon from "@mui/icons-material/Restore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

import colors from "@mui/joy/colors/colors";

export default function User() {
  const [name, setName] = useState("User");
  return (
    <Card
      color={colors.blue[900]}
      variant="solid"
      size="lg"
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "5%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "90%",
        height: "70%",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <PersonIcon color="danger" sx={{ fontSize: "80" }} />
        {name}
        <Card size="lg">
          <CardContent>
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
              children={"My Promotions"}
              startDecorator={<NotificationsActiveIcon />}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
