/* eslint-disable react/no-children-prop */
import { useState } from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import { Container } from "@mui/joy";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Textarea from '@mui/joy/Textarea';

import EditIcon from "@mui/icons-material/Edit";
import TopicIcon from "@mui/icons-material/Topic";
import RestoreIcon from "@mui/icons-material/Restore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

export default function User({ setOpen }) {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("Email");
  const [edit, setEdit] = useState(false);

  return (
    <Card
      color="danger"
      variant="soft"
  
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "2%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "85%",
        height: "78%",
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
          <span>{name}</span>
          <span>{email}</span>
        </Container>
        <Card size="lg">
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={() => setEdit(true)}
              variant="solid"
              children={"Edit Profile"}
              startDecorator={<EditIcon />}
            />
            <Button
              sx={{ display: "flex", justifyContent: "flex-start" }}
              color="danger"
              onClick={setOpen}
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
      {/* <Modal open={edit}    onClose={()=>setEdit(false)}>
        <Textarea color="danger" variant="outlined" placeholder="user name.." />
        <Textarea
          color="danger"
          variant="outlined"
          placeholder="user email.."

        />
      </Modal> */}
    </Card>
  );
}
