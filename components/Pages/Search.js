import { useState, useEffect } from "react";

import Filter from "../../components/Filter";

import IconButton from "@mui/joy/IconButton";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/Search";
import { Autocomplete, Card } from "@mui/joy";
import Divider from "@mui/joy/Divider";
import ButtonGroup from "@mui/joy/ButtonGroup";

import TextField from "@mui/joy/TextField";
import { Podcasts } from "@mui/icons-material";

//TODO
// autocomplete falta

export default function SearchPage({ setOpen, chosenSuperMarkets }) {
  const [prod, setProd] = useState([]);
  const [searchProd, setSearchProd] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  let loading = prod.length === 0;
  const [value, setValue] = useState("");
  const fSearch = () => {
    console.log(value);

    let temp = [];
    let chosenSuperMarketsIDList = chosenSuperMarkets.map((x) => x.id); // ficar so com os id
    for (let i = 0; i < prod.length; i++) {
      let superProdIDList = prod[i].supermercados.map((x) => x.id); // ficar so com os id
      console.log(
        prod[i],
        superProdIDList,
        chosenSuperMarketsIDList,
        chosenSuperMarketsIDList.some((r) => superProdIDList.includes(r)),
        "PILOCAS"
      );
      if (
        prod[i].nome
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) &&
        (chosenSuperMarkets.length == 0 ||
          chosenSuperMarketsIDList.some((r) => superProdIDList.includes(r)))
      ) {
        console.log(chosenSuperMarkets, "PILOCAS");
        console.log(prod[i], "TESTE");

        temp.push(prod[i]);
      }
    }
    console.log(temp);
    setSearchProd(temp);
    console.log(searchProd);
  };
  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    // debugger;

    (async () => {
      fetch(`/api/getAllProdAndSupermarket`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // supermercados do user
          setSearchProd(data);
          return setProd(data);
        });
    })();
  }, [loading]);

  return (
    <>
      <Card
        color="primary"
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
        <Card
          orientation="horizontal"
          variant="outline"
          size="sm"
          color="primary"
        >
          <Autocomplete
            variant="soft"
            size="lg"
            disableClearable={true}
            options={prod}
            freeSolo={true}
            loading={loading}
            getOptionLabel={(option) => {
              return option.nome;
            }}
            onInputChange={(event, value, reason) => setValue(value)}
            endDecorator={
              <>
                <IconButton onClick={fSearch}>
                  <Search size="sm" />
                </IconButton>
                <IconButton onClick={setOpen}>
                  <FilterAltIcon size="sm" />
                </IconButton>
              </>
            }
            sx={{ width: "100%" }}
            // renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Card>
        <Divider orientation="horizontal" sx={{ marginBottom: 1 }} />
        <Card sx={{ overflow: "auto" }}>
          {searchProd.map((e) => (
            <li key={e.id}>{e.nome}</li>
          ))}
        </Card>
      </Card>
    </>
  );
}
