"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ProductSearchCard from "../../components/ProductSearchCard";
import ProductDetails from "../../components/ProductDetails";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";
import Cart from "../../components/Pages/Cart";
import Map from "../../components/Pages/Map";
import Promotions from "../../components/Pages/Promations";
import { Accessibility } from "@mui/icons-material";
import Filter from "../../components/Filter";

export default function Home() {
  const [open, openModal] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(null);
  const [superMarket, setSuperMarket] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/getAllProdAndSupermarket", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "PIXA");
        // return setSuperMarkets(data);
      });
  }, []);
  const [index, setIndex] = useState(2);
  return (
    <>
      {/* <ProductSearchCard /> */}
      {/* <ProductDetails /> */}

      {index == 0 && <Promotions />}
      {index == 1 && <Cart products={products} />}
      {index == 2 && (
        <SearchPage
          setOpen={() => openModal(true)}
          chosenSuperMarkets={superMarket}
        />
      )}
      {index == 3 && <Map />}
      {index == 4 && <User setOpen={() => openModal(true)} />}

      <Filter
        open={open}
        superMarket={superMarket}
        closeModal={() => openModal(false)}
        alphabetical={alphabetical}
        setAlphabetical={() => setAlphabetical(!alphabetical)}
        order={order}
        setOrder={(p) => setOrder(p)}
        setSuperMarket={(array) => setSuperMarket(array)}
      />
      <NavBar index={index} changeIndex={(event, value) => setIndex(value)} />
    </>
  );
}
