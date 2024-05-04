"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";
import Cart from "../../components/Pages/Cart";
import Map from "../../components/Pages/Map";
import News from "../../components/Pages/News";
import Filter from "../../components/Filter";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import * as React from "react";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export default function Home() {
  const [open, openModal] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(null);
  const [accessibility, setAccessibility] = useState(false);
  const [superMarket, setSuperMarket] = useState([]);
  const [products, setProducts] = useState([]);

  const [superMarketcart, setSuperMarketCart] = useState("");

  const [cart, setCart] = useState([]);

  const [index, setIndex] = useState(2);
  const [openError, setOpenError] = useState(-1);

  useEffect(() => {
    // debugger;
    (async () => {
      fetch(`/api/getAllProdAndSupermarket`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // supermercados do user
          // setSearchProd(data);
          // return setProd(data);
        });
    })();
  }, []);

  return (
    <>
      {index == 0 && <News />}
      {index == 1 && (
        <Cart
          products={cart}
          removeFromCart={(e, chosen) => {
            setCart(
              cart.filter(
                (x) =>
                  (x.produto.id == e.id && x.supermarket[1] != chosen) ||
                  x.produto.id != e.id
              )
            );
          }}
          changeQuantity={(q, p, s) => {
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].produto.id == p.id && cart[i].supermarket[1] == s) {
                cart[i].quantity = q;
                break;
              }
            }
            setCart([...cart]);
          }}
          setIndex={(e) => setIndex(e)}
          setSuperMarketCart={(e) => setSuperMarketCart(e)}
        />
      )}
      {index == 2 && (
        <SearchPage
          setOpen={() => openModal(true)}
          chosenSuperMarkets={superMarket}
          addToCart={(e) => {
            if (e.quantity != 0 && e.supermarket.length != 0) {
              find: {
                for (let i = 0; i < cart.length; i++) {
                  if (
                    cart[i].produto.id == e.produto.id &&
                    e.supermarket[1] == cart[i].supermarket[1]
                  ) {
                    cart[i].quantity += e.quantity;
                    break find;
                  }
                }
                setCart([...cart, e]);
              }
              setOpenError(1);
              setTimeout(function () {
                setOpenError(-1);
              }, 1000);
            } else {
              setOpenError(0);
              setTimeout(function () {
                setOpenError(-1);
              }, 1000);
            }
          }} // TODO just add to cart if the product isnt already in the cart
          alphabetical={alphabetical}
          order={order}
          accessibility={accessibility}
        />
      )}
      {index == 3 && (
        <Map
          cart={cart}
          superMarketCart={superMarketcart}
          setSuperMarketCart={(e) => setSuperMarketCart(e)}
        />
      )}
      {index == 4 && <User setOpen={() => openModal(true)} />}

      {openError != -1 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            flexDirection: "column",
          }}
        >
          {openError == 0 ? (
            <Alert
              sx={{ alignItems: "flex-start" }}
              startDecorator={<WarningIcon />}
              variant="soft"
              color="danger"
              endDecorator={
                <IconButton
                  variant="soft"
                  color="danger"
                  onClick={() => setOpenError(-1)}
                >
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              <div>
                <Typography level="body-lg" fontWeight="lg" color="danger">
                  Attention
                </Typography>
                <Typography level="body-sm" color="danger">
                  To be added to the cart, the quantity must exceed zero and you
                  must select a supermarket on <b>Set SuperMarket</b>!
                </Typography>
              </div>
            </Alert>
          ) : (
            <Alert
              sx={{ alignItems: "flex-start" }}
              startDecorator={<CheckCircleIcon />}
              variant="soft"
              color="success"
              endDecorator={
                <IconButton
                  variant="soft"
                  color="success"
                  onClick={() => setOpenError(-1)}
                >
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              <div>
                <Typography level="body-lg" fontWeight="lg" color="success">
                  Attention
                </Typography>
                <Typography level="body-sm" color="success">
                  Product added to cart successfully
                </Typography>
              </div>
            </Alert>
          )}
        </Box>
      )}

      <Filter
        open={open}
        superMarket={superMarket}
        closeModal={() => openModal(false)}
        alphabetical={alphabetical}
        setAlphabetical={() => setAlphabetical(!alphabetical)}
        order={order}
        setOrder={(p) => setOrder(p)}
        setSuperMarket={(array) => setSuperMarket(array)}
        setAccessibility={(e) => setAccessibility(e)}
        accessibility={accessibility}
      />
      <NavBar index={index} changeIndex={(event, value) => setIndex(value)} />
    </>
  );
}
