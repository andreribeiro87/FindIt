import { useEffect } from "react";
import Cartao from "../../components/Cartao";
import Filter from "../../components/Filter";
import NavBar from "../../components/NavBar";

export default function Home() {
  useEffect(() => {
    fetch("/api/getAllProducts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      {/* <ProdutSearchCard /> */}

      

      <Filter/>
      <h1>Home</h1>
    </>
  );
}
