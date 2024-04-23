"use client";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import * as React from "react";

import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/joy/Autocomplete";

import Close from "@mui/icons-material/Close";
import Card from "@mui/joy/Card";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [superMarket, setSuperMarket] = React.useState([]);

  const getIndex = (superMarket, value) => {
    for (let i = 0; i < superMarket.length; i++) {
      if (superMarket[i].id == value.id) return i;
    }
    return -1;
  };
  const addSuperMarket = (event, value, reason, details) => {
    if (value != null && getIndex(superMarket, value) == -1)
      setSuperMarket([...superMarket, value]);
  };

  const deleteID = (id) => {
    setSuperMarket(superMarket.filter((item) => item.id !== id));
  };

  var id = 0;
  const markets = [
    { id: id++, name: "continente" },
    { id: id++, name: "pingo Doce" },
    { id: id++, name: "mercadona" },
    { id: id++, name: "auchan" },
    { id: id++, name: "intermarche" },
  ];

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            width: "90%",
            borderRadius: "md",
            p: 2.5,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" color="danger" />
          <Card
            size="sm"
            sx={{
              textColor: "inherit",
              fontWeight: "lg",
              mb: 1,
              mt: 2,
              p: 0,
              level: "h4",
            }}
          >
            <Autocomplete
              placeholder="Search SuperMarket..."
              variant="soft"
              startDecorator={<SearchIcon />}
              options={markets}
              getOptionLabel={(option) => option.name}
              onChange={addSuperMarket}
              isOptionEqualToValue={(option, value) => {
                return option.id == value.id;
              }}
            />
            <Sheet
              sx={{
                display: "flex",
                direction: "row",
                flexWrap: "wrap",
                fontWeight: "sm",
              }}
            >
              {superMarket.map((e) => (
                <Card
                  key={e.id}
                  size="sm"
                  variant="soft"
                  color="primary"
                  sx={{
                    textColor: "text.tertiary",
                    display: "inline",
                    m: 0.5,
                    mt: 0,
                    p: 0.5,
                  }}
                >
                  {e.name}
                  <Button
                    size="sm"
                    variant="outlined"
                    color="danger"
                    sx={{ ml: 1 }}
                    onClick={() => deleteID(e.id)}
                  >
                    <Close fontSize="sm" />
                  </Button>
                </Card>
              ))}
            </Sheet>
          </Card>
        </Sheet>
      </Modal>
    </>
  );
}
