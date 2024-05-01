import Card from "@mui/joy/Card";
import ProductSearchCard from "../ProductSearchCard";
import ProductDetails from "../ProductDetails";
import { useState } from "react";
import { Button, Sheet } from "@mui/joy";

export default function Cart({ products, removeFromCart, changeQuantity }) {
  console.log(products);
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
        height: "78%",
      }}
    >
      Your ShoppingCart
      <Sheet sx={{ overflow: "auto" }}>
        {details ? (
          products.map((p) => {
            console.log(p.produto);

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
          })
        ) : (
          <ProductDetails
            close={() => setDetails(true)}
            produto={prodDetails}
          />
        )}
      </Sheet>
      <Card orientation="horizontal">
        <Button>Show Path</Button>
        TOTAL:
      </Card>
    </Card>
  );
}
