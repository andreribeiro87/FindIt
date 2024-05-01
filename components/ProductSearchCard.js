import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Radio, RadioGroup, List, ListItem, Sheet } from "@mui/joy";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
import { ArrowBack } from "@mui/icons-material";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Delete from "@mui/icons-material/Delete";

import { useState } from "react";
import { Link } from "@mui/joy";

export default function ProductSearchCard({
  produto,
  Details,
  addToCart,
  removeFromCart,
  isCart,
  cartQuantity,
  setCartQuantity,
  chosenOne,
}) {
  const [quantity, setQuantity] = useState(0);
  const [supermarket, setSupermarket] = useState([]);
  const [tolltip, setTolltip] = useState(false);

  return (
    <Card
      variant="outlined"
      size="sm"
      sx={{
        marginBottom: 1,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Card variant="plain" orientation="horizontal" sx={{ p: 1 }}>
        <AspectRatio ratio="1" sx={{ width: "50%" }}>
          <img src={"/" + produto.imagem} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent sx={{ pt: 1 }}>
          <Typography level="title-lg">{produto.nome}</Typography>

          {!isCart ? (
            <Tooltip
              open={tolltip}
              arrow
              variant="outlined"
              title={
                <Sheet>
                  <RadioGroup>
                    {produto.supermercados.map((x) => (
                      <Radio
                        key={x.produto.id}
                        value={x.produto.preco + "+" + x.id}
                        label={x.nome + " - " + x.produto.preco + "€"}
                        onClick={() =>
                          setSupermarket([x.produto.preco, x.id, x.nome])
                        }
                      />
                    ))}
                  </RadioGroup>

                  <IconButton
                    onClick={() => setTolltip(false)}
                    color="danger"
                    size="sm"
                  >
                    <ArrowBack />
                  </IconButton>
                </Sheet>
              }
              placement="bottom-start"
            >
              <Link level="body-sm" onClick={() => setTolltip(true)}>
                Prices
              </Link>
            </Tooltip>
          ) : (
            <Typography level="body-md">
              {chosenOne[2]} - {chosenOne[0]}€
            </Typography>
          )}
        </CardContent>
      </Card>

      <Card
        variant="plain"
        sx={{ p: 1, pt: 0, display: "flex", justifyContent: "space-around" }}
        orientation="horizontal"
      >
        {!isCart ? (
          <ButtonGroup variant="soft" size="sm">
            <Button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
              <Remove />
            </Button>
            <Button variant="solid" disabled>
              {quantity}
            </Button>
            <Button onClick={() => setQuantity(quantity + 1)}>
              <Add />
            </Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup variant="soft" size="sm">
            <Button
              onClick={() => {
                if (cartQuantity != 1) {
                  setCartQuantity(cartQuantity - 1, produto, chosenOne[1]);
                } else {
                  removeFromCart(produto, chosenOne[1]);
                }
              }}
            >
              <Remove />
            </Button>
            <Button variant="solid" disabled>
              {cartQuantity}
            </Button>
            <Button
              onClick={() =>
                setCartQuantity(cartQuantity + 1, produto, chosenOne[1])
              }
            >
              <Add />
            </Button>
          </ButtonGroup>
        )}
        <ButtonGroup variant="soft" size="sm">
          {isCart ? (
            <Button onClick={() => removeFromCart(produto, chosenOne[1])}>
              <Delete />
            </Button>
          ) : (
            <Button
              onClick={() => addToCart({ produto, quantity, supermarket })}
            >
              Add
            </Button>
          )}
          <Button onClick={Details}>Details</Button>
        </ButtonGroup>
      </Card>
    </Card>
  );
}
