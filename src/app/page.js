"use client";

import { useEffect, useState } from "react";
import Filter from "../../components/Filter";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetch("/api/getAllProducts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <>
      {/* <Cartao /> */}

      <Filter />
      <h1>Home</h1>
    </>
  );
}
