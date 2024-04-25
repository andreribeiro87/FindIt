"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";
import Cart from "../../components/Pages/Cart";
import Map from "../../components/Pages/Map";
import Promotions from "../../components/Pages/Promations";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [prod_id_name, setProdIdName] = useState([]);
  const [superMarkets, setSuperMarkets] = useState([]);

  useEffect(() => {
    fetch("/api/getSupermarket?accessibility=false", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));

    // .then((data) => {
    //   console.log(data, "PIXA");
    //   return setSuperMarkets(data);
    // });
  }, []);
  const [index, setIndex] = useState(0);
  return (
    <>
      {/* <ProdutSearchCard /> */}

      {index == 0 && <Promotions />}
      {index == 1 && <Cart />}
      {index == 2 && <SearchPage />}
      {index == 3 && <Map />}
      {index == 4 && <User />}

      <NavBar index={index} changeIndex={(event, value) => setIndex(value)} />
    </>
  );
}
