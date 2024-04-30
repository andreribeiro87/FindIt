"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";
import Cart from "../../components/Pages/Cart";
import Map from "../../components/Pages/Map";
import Promotions from "../../components/Pages/Promations";
import Filter from "../../components/Filter";

import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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

  const [cart, setCart] = useState([]);

  const [index, setIndex] = useState(2);
  const [openError, setOpenError] = useState(false);
  return (
    <>
      {index == 0 && <Promotions />}
      {index == 1 && (
        <Cart
          products={cart}
          removeFromCart={(e) =>
            setCart(cart.filter((x) => x.produto.id != e.produto.id))
          }
          changeQuantity={(q, p) => {
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].produto.id == p.id) {
                cart[i].quantity = q;
                break;
              }
            }
            setCart(cart);
          }}
        />
      )}
      {index == 2 && (
        <SearchPage
          setOpen={() => openModal(true)}
          chosenSuperMarkets={superMarket}
          addToCart={(e) => {
            if (e.quantity != 0) {
              find: {
                for (let i = 0; i < cart.length; i++) {
                  if (cart[i].produto.id == e.produto.id) {
                    cart[i].quantity += e.quantity;
                    break find;
                  }
                }
                setCart([...cart, e]);
              }
            } else {
              console.log("oi");
              setOpenError(true);
            }
          }} // TODO just add to cart if the product isnt already in the cart
          alphabetical={alphabetical}
          order={order}
          accessibility={accessibility}
        />
      )}
      {index == 3 && <Map />}
      {index == 4 && <User setOpen={() => openModal(true)} />}

      {openError && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Alert
            sx={{ alignItems: "flex-start" }}
            startDecorator={<WarningIcon />}
            variant="soft"
            color="danger"
            endDecorator={
              <IconButton
                variant="soft"
                color="danger"
                onClick={() => setOpenError(false)}
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
                To be added to the cart, the quantity must exceed zero!
              </Typography>
            </div>
          </Alert>
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
