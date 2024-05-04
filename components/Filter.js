"use client";

import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Autocomplete from "@mui/joy/Autocomplete";
import Card from "@mui/joy/Card";
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import IconButton from "@mui/joy/IconButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import CircularProgress from "@mui/joy/CircularProgress";
import Close from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";


export default function BasicModal({
  open,
  superMarket,
  closeModal,
  alphabetical,
  setAlphabetical,
  order,
  setOrder,
  setSuperMarket,
  accessibility,
  setAccessibility,
}) {
  const [markets, setMarkets] = useState([]);
  const [index, setIndex] = useState("0");

  let loading = open && markets.length === 0;

  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    // debugger;

    (async () => {
      fetch(`/api/getSupermarket`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (accessibility) {
            let newData = [];
            for (let i = 0; i < data.length; i++) {
              if (data[i].acessibilidade == accessibility.toString()) {
                newData.push(data[i]);
              }
            }
            return setMarkets(newData);
          }

          return setMarkets(data);
        });
    })();
  }, [accessibility, loading]);

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

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            width: "80%",
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
              // options={markets == null || markets.length == 0 ? [] : markets}
              options={markets}
              getOptionLabel={(option) => {
                return option.nome;
              }}
              onChange={addSuperMarket}
              isOptionEqualToValue={(option, value) => {
                return option.id == value.id;
              }}
              loading={loading}
              endDecorator={
                loading ? (
                  <CircularProgress
                    size="sm"
                    sx={{ bgcolor: "background.surface" }}
                  />
                ) : null
              }
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
                  {e.nome}
                  <Button
                    size="sm"
                    variant="outlined"
                    color="danger"
                    sx={{ ml: 1, p: 0.5 }}
                    onClick={() => deleteID(e.id)}
                  >
                    <Close fontSize="sm" />
                  </Button>
                </Card>
              ))}
            </Sheet>
          </Card>
          <Card>
            <Typography
              startDecorator={
                <Switch
                  sx={{ ml: 1 }}
                  checked={accessibility}
                  onChange={() => {
                    setMarkets([]);
                    setSuperMarket([]);
                    setAccessibility(!accessibility);
                  }}
                />
              }
            >
              Supermarket with Accessibility
            </Typography>
            <Typography
              startDecorator={
                <Switch
                  sx={{ ml: 1 }}
                  checked={alphabetical}
                  onChange={setAlphabetical}
                />
              }
            >
              Alphabetical order
            </Typography>
            <ToggleButtonGroup
              variant="outlined"
              color="primary"
              value={index}
              onChange={(event, newIndex) => {
                setIndex(newIndex);
                setOrder(newIndex);
              }}
            >
              <IconButton value={1}>
                <Typography>High To Low</Typography>
              </IconButton>
              <IconButton value={2}>
                <Typography>Low To High</Typography>
              </IconButton>
            </ToggleButtonGroup>
          </Card>
        </Sheet>
      </Modal>
    </>
  );
}
