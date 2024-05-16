import Card from "@mui/joy/Card";
import ProductSearchCard from "../ProductSearchCard";
import ProductDetails from "../ProductDetails";
import { useState, useEffect } from "react";
import { Button, Sheet } from "@mui/joy";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItemButton from "@mui/joy/ListItemButton";
import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

export default function Cart({
  products,
  removeFromCart,
  changeQuantity,
  setIndex,
  setSuperMarketCart,
}) {
  const [details, setDetails] = useState(true);
  const [prodDetails, setProdDetails] = useState({});

  return (
    <Card
      color="success"
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
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          overflow: "auto",
          borderRadius: "sm",
        }}
      >
        {details ? (
          <AccordionGroup>
            {[...new Set(products.map((x) => x.supermarket[2]))].map(
              (superName,i) => (
                <Accordion defaultExpanded={i == 0?true:false}
                  // sx={{ p: 0, maxWidth: "85%" }}
                  // nested
                  key={superName}
                >
                  <AccordionSummary > {superName}</AccordionSummary>
                  <AccordionDetails>
                    {products.map((p) => {
                      if (p.supermarket[2] == superName)
                        return (
                          <ProductSearchCard
                            key={p.produto.id}
                            Details={() => {
                              setProdDetails(p.produto);
                              setDetails(false);
                            }}
                            produto={p.produto}
                            isCart={true}
                            cartQuantity={p.quantity}
                            chosenOne={p.supermarket}
                            setCartQuantity={changeQuantity}
                            removeFromCart={removeFromCart}
                          />
                        );
                    })}
                    <Card orientation="horizontal">
                      <Button
                        onClick={() => {
                          setIndex(3);
                          setSuperMarketCart(superName);
                        }}
                      >
                        Show Path
                      </Button>
                      TOTAL:
                      {products
                        .filter((x) => x.supermarket[2] == superName)
                        .reduce((acc, x) => {
                          return acc + x.supermarket[0] * x.quantity;
                        }, 0)
                        .toFixed(2)}
                    </Card>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </AccordionGroup>
        ) : (
          <ProductDetails
            close={() => setDetails(true)}
            produto={prodDetails}
          />
        )}
        {/* </Sheet> */}
      </Sheet>
    </Card>
  );
}
