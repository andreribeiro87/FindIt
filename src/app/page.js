"use client";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchPage from "../../components/Pages/Search";
import User from "../../components/Pages/User";
import Cart from "../../components/Pages/Cart";
import Map from "../../components/Pages/Map";
import Promotions from "../../components/Pages/Promations";
import Filter from "../../components/Filter";

export default function Home() {
  const [open, openModal] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [order, setOrder] = useState(null);
  const [superMarket, setSuperMarket] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [index, setIndex] = useState(2);
  return (
    <>
      {index == 0 && <Promotions />}
      {index == 1 && (
        <Cart
          products={cart}
          removeFromCart={(e) =>
            setCart(cart.filter((x) => x.produto.id != e.produto.id))
          }
        />
      )}
      {index == 2 && (
        <SearchPage
          setOpen={() => openModal(true)}
          chosenSuperMarkets={superMarket}
          addToCart={(e) => {
            if (!cart.find((x) => x.produto.id == e.produto.id))
              setCart([...cart, e]);
          }} // TODO just add to cart if the product isnt already in the cart
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
