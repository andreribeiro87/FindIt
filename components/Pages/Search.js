import { useState,useEffect } from "react";

import Filter from "../../components/Filter";

import Button from "@mui/joy/Button";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/Search";
import { Autocomplete, Card } from "@mui/joy";
import Divider from "@mui/joy/Divider";

import TextField from "@mui/joy/TextField";
import { Podcasts } from "@mui/icons-material";

//TODO
// autocomplete falta

export default function SearchPage() {
  const [open, setOpen] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(null);
  const [superMarket, setSuperMarket] = useState([]);
  const [prod, setProd] = useState([]);
  const [searchProd, setSearchProd] = useState([]);

  let loading = prod.length === 0;
  const [value, setValue] = useState("");
  const fSearch =() =>{
    console.log(value)
    let temp =[]
    for (let i = 0; i < prod.length; i++) {
      if(prod[i].nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))){
        temp.push(prod[i])
      }
      
    }
    console.log(temp)
    setSearchProd(temp)
    console.log(searchProd)
  }
  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    // debugger;

    (async () => {
      fetch(`/api/getAllProducts`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {

          // supermercados do user

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
            options={prod}
            freeSolo={true}
            loading={loading}
            getOptionLabel={(option) => {
              return option.nome;
            }}
            onInputChange={(event,value,reason)=>setValue(value)}
            endDecorator={

              <Button onClick={fSearch}>
                <Search />
              </Button>
            }
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
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
