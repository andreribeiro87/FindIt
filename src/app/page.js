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
    fetch("/api/getAllProducts", { method: "GET" })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        return setProdutos(data);
      });

    fetch("/api/getAllProdId_Name", { method: "GET" })
      .then((res) => res.json())

      .then((data) => {
        return setProdIdName(data);
      });
    fetch("/api/getSupermarket", { method: "GET" })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        return setSuperMarkets(data);
      });
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
