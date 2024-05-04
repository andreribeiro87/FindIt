import { useState, useEffect } from "react";

import ProductSearchCard from "../../components/ProductSearchCard";
import ProductDetails from "../../components/ProductDetails";

import IconButton from "@mui/joy/IconButton";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/Search";
import { Autocomplete, Card, Box } from "@mui/joy";
import Divider from "@mui/joy/Divider";

//TODO
// autocomplete falta

export default function SearchPage({
  setOpen,
  chosenSuperMarkets,
  addToCart,
  alphabetical,
  order,
  accessibility,
}) {
  const [prod, setProd] = useState([]); // todos os produtos
  const [availableProds, setAvailableProds] = useState([]);
  const [searchProd, setSearchProd] = useState([]); // produtos que vao ser mostrados na pesquisa
  const [details, setDetails] = useState(true);
  const [prodDetails, setProdDetails] = useState({});

  let loading = prod.length === 0;
  const [value, setValue] = useState("");
  const fSearch = () => {
    console.log(value);

    let temp = [];
    let chosenSuperMarketsIDList = chosenSuperMarkets.map((x) => x.id); // ficar so com os id

    for (let i = 0; i < prod.length; i++) {
      let superProdIDList = prod[i].supermercados.map((x) => x.id); // ficar so com os id
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
        temp.push(prod[i]);
      }
    }
    console.log(temp);
    setSearchProd(temp);
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
  }, [loading, value]);

  useEffect(() => {
    //filtrar os dados para mostrar apenas os que estao disponiveis nos supermercados escolhidos
    if (chosenSuperMarkets.length == 0) {
      if (accessibility) {
        // filtrar os produtos para todos os supermercados com acessibilidade
        let prodsComAcessibilidade = [];
        for (let i = 0; i < prod.length; i++) {
          for (let j = 0; j < prod[i].supermercados.length; j++) {
            console.log(
              prod[i],
              prod[i].supermercados[j],
              prod[i].supermercados[j].acessibilidade,
              accessibility.toString(),
              "PIPOCASQUENTES"
            );
            if (
              prod[i].supermercados[j].acessibilidade ==
              accessibility.toString()
            ) {
              prodsComAcessibilidade.push(prod[i]);
            }
          }
        }
        console.log(prodsComAcessibilidade, "PILOLOLOLLOLL");
        if (alphabetical) {
          console.log("pilao");
          prodsComAcessibilidade.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (order == "1") {
          // high to low
          prodsComAcessibilidade.sort((a, b) => b.preco - a.preco);
        } else if (order == "2") {
          prodsComAcessibilidade.sort((a, b) => a.preco - b.preco);
        }
        return setSearchProd(prodsComAcessibilidade);
      }

      if (alphabetical) {
        console.log("pilao");
        prod.sort((a, b) => a.nome.localeCompare(b.nome));
      } else if (order == "1") {
        // high to low
        prod.sort((a, b) => b.preco - a.preco);
      } else if (order == "2") {
        prod.sort((a, b) => a.preco - b.preco);
      }
      return setSearchProd(prod);
    }
    //TODO FALTA COLOCAR A ACESSIBILIDADE A MUDAR OS PRODUTOS

    let temp = [];
    let chosenSuperMarketsIDList = chosenSuperMarkets.map((x) => x.id); // ficar so com os id

    for (let i = 0; i < prod.length; i++) {
      let superProdIDList = prod[i].supermercados.map((x) => x.id);
      if (superProdIDList.some((r) => chosenSuperMarketsIDList.includes(r))) {
        temp.push(prod[i]);
      }
    }

    if (alphabetical) {
      console.log("pilao");
      temp.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (order == "1") {
      // high to low
      temp = temp.sort((a, b) => b.preco - a.preco);
    } else if (order == "2") {
      temp = temp.sort((a, b) => a.preco - b.preco);
    }
    console.log(temp, "pilau");
    return setSearchProd(temp);
  }, [accessibility, alphabetical, chosenSuperMarkets, order, prod]);

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
          height: "80%",
          overflow: "auto",
        }}
      >
        {details ? (
          <>
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
              />
            </Card>
            <Divider orientation="horizontal" sx={{ marginBottom: 1 }} />
            <Box sx={{ overflow: "auto" }}>
              {searchProd &&
                searchProd.map((e) => (
                  <ProductSearchCard
                    key={e.id}
                    produto={e}
                    Details={() => {
                      setDetails(false);
                      setProdDetails(e);
                    }}
                    addToCart={addToCart}
                    selectedSuperMarkets={chosenSuperMarkets}
                  />
                ))}
            </Box>
          </>
        ) : (
          <ProductDetails
            produto={prodDetails}
            close={() => {
              setDetails(true);
            }}
          ></ProductDetails>
        )}
      </Card>
    </>
  );
}
