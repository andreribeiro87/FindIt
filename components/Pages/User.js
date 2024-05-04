/* eslint-disable react/no-children-prop */
import { useState } from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import { Container, Divider, FormLabel, Input, Stack } from "@mui/joy";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";


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
        height: "80%",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Container
          sx={{
            mt:5,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <PersonIcon color="danger" sx={{ fontSize: "7rem" }} />
          <span>{name}</span>
          <span>{email}</span>
        </Container>
        <Divider/>
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
              children={"Search Preferences"}
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
      <Modal
        open={edit}
        onClose={() => setEdit(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textColor: "inherit",
          fontWeight: "lg",
          mb: 1,
          mt: 2,
          p: 0,
          level: "h4",
        }}
      >
        <Card size="md">
          <ModalClose variant="plain" color="danger" />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setName(document.getElementById("name").value);
              setEmail(document.getElementById("email").value);
              setEdit(false)
            }}
          >
            <Stack spacing={1}>
              <FormLabel>User Name</FormLabel>
              <Input id="name" placeholder={name} required />
              <FormLabel>User Email</FormLabel>
              <Input id="email" placeholder={email} required type="email" />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </Card>
      </Modal>
    </Card>
  );
}
