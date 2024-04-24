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
  const [accessibility, setAccessibility] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(false);
  const [superMarket, setSuperMarket] = useState([]);

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
      <Card
        orientation="horizontal"
        variant="outline"
        size="sm"
        color="primary"
      >
        <Autocomplete
          variant="soft"
          color="primary"
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
      <Divider orientation="horizontal" sx={{marginTop:1,marginBottom:1}} />
      <Card color="primary" variant="soft">
            
            cartoes
            {/* TODO CARTOES  */}
        </Card>
      <Filter
        markets={markets}
        open={open}
        superMarket={superMarket}
        closeModal={() => setOpen(false)}
        setAccessibility={() => setAccessibility(!accessibility)}
        setAlphabetical={() => setAlphabetical(!alphabetical)}
        setOrder={() => setOrder(!order)}
        setSuperMarket={(array) => setSuperMarket(array)}
      />
    </>
  );
}
