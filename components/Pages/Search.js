import { useState } from "react";

import Filter from "../../components/Filter";

import Button from "@mui/joy/Button";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Autocomplete, Card } from "@mui/joy";
import Divider from "@mui/joy/Divider";

//TODO
// autocomplete falta

export default function SearchPage() {
  const [open, setOpen] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(null);
  const [superMarket, setSuperMarket] = useState([]);
  const [prod, setProd] = useState([]);

  return (
    <>
      <Card
        color="primary"
        variant="soft"
        sx={{
          boxShadow: "lg",
          position: "absolute",
          top: "5%",
          left: 0,
          right: 0,
          margin: "auto",
          maxWidth: "75%",
          height: "73%",
        }}
      >
        <Card
          orientation="horizontal"
          variant="outline"
          size="sm"
          color="primary"
        >
          <Autocomplete
            variant="soft"
            size="lg"
            sx={{ width: "90%" }}
            options={["oi", "pixa"]}
          ></Autocomplete>
          <Button
            sx={{ width: "10%" }}
            variant="solid"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <FilterAltIcon />
          </Button>
        </Card>
        <Divider orientation="horizontal" sx={{ marginBottom: 1 }} />
        cartoes
        {/* TODO CARTOES  */}
      </Card>
      <Button onClick={() => console.log("MYPIXA")}>pixa</Button>
      <Filter
        open={open}
        superMarket={superMarket}
        closeModal={() => setOpen(false)}
        alphabetical={alphabetical}
        setAlphabetical={() => setAlphabetical(!alphabetical)}
        order={order}
        setOrder={(p) => setOrder(p)}
        setSuperMarket={(array) => setSuperMarket(array)}
      />
    </>
  );
}
