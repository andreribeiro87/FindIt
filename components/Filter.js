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

// TODO
// CLOSE MODAL esta em cima da barra de pesquisa
// os markets nao estao no centro do card
// umas animacoes please

// enter nao funciona
// apagar o input assim que o user mete
// ao clicar em order devia mudar o switch

export default function BasicModal({
  open,
  superMarket,
  closeModal,
  alphabetical,
  setAlphabetical,
  order,
  setOrder,
  setSuperMarket,
}) {
  const [markets, setMarkets] = useState([]);
  const [index, setIndex] = useState("0");
  const [accessibility, setAccessibility] = useState(false);

  let loading = open && markets.length === 0;

  useEffect(() => {
    console.log(
      "useEffect triggered with accessibility:",
      accessibility,
      "loading:",
      loading
    );
    if (!loading) {
      return undefined;
    }

    (async () => {
      console.log("2useEffect triggered with accessibility:", accessibility);
      fetch(`/api/getSupermarket?accessibility=${accessibility.toString()}`, {
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(
            "3useEffect triggered with accessibility:",
            accessibility,
            "data:",
            data
          );
          return setMarkets(data);
        });
    })();

    if (accessibility) {
      let tmp = [];

      for (let i = 0; i < markets.length; i++) {
        if (markets[i].acessibilidade.toString() == accessibility) {
          tmp.push(markets[i]);
        }
      }
      setMarkets(tmp);
    }
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
              options={markets}
              getOptionLabel={(option) => option.nome}
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
                    setAccessibility(!accessibility);
                  }}
                />
              }
            >
              Accessibility
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
            <Button onClick={() => console.log(markets, "MYPILAO")}>
              FUCKME
            </Button>

            <ToggleButtonGroup
              variant="outlined"
              color="primary"
              value={index} // index}
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
