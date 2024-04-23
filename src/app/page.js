"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";

export default function Home() {
  // const [produtos, setProdutos] = useState([]);
  // useEffect(() => {
  //   fetch("/api/getAllProducts", { method: "GET" })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log(data);
  //       return setProdutos(data);
  //     });

  //   fetch("/api/getAllProdId_Name", { method: "GET" })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log(data);
  //       // return setProdutos(data);
  //     });
  // }, []);
  const [index, setIndex] = useState(0);
  return (
    <>
      {/* <ProdutSearchCard /> */}

      {index==0 && <>page0</>}
      {index==1 && <>page1</>}
      {index==2 && <SearchPage/>}
      {index==3 && <>page3</>}
      {index==4 && <User/>}

      <NavBar index={index} changeIndex={(event, value) => setIndex(value)}/>
    </>
  );
}
