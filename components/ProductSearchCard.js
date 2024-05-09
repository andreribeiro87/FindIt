import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Radio, RadioGroup, List, ListItem, Sheet } from "@mui/joy";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
import { ArrowBack, ShoppingCart } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Delete from "@mui/icons-material/Delete";

import { useState, useEffect } from "react";
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
  selectedSuperMarkets,
}) {
  const [quantity, setQuantity] = useState(0);
  const [supermarket, setSupermarket] = useState([]);
  const [check, setCheck] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [tooltip1, setTooltip1] = useState(false);

  useEffect(() => {
    // x.produto.preco, x.id, x.nome
    if (selectedSuperMarkets != null && selectedSuperMarkets.length > 0) {
      // get the price
      let preco = produto.supermercados
        .filter((x) => x.id == selectedSuperMarkets[0].id)
        .map((x) => x.produto.preco);
      setSupermarket([
        preco[0],
        selectedSuperMarkets[0].id,
        selectedSuperMarkets[0].nome,
      ]);
      setCheck(true);
    }
  }, [produto, selectedSuperMarkets]);

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
            <>
              <Tooltip
                open={tooltip1}
                arrow
                variant="outlined"
                title={
                  <Sheet>
                    {produto.supermercados.map((x) => (
                      <>
                        <ListItem key={x.produto.id + "S" + x.id}>
                          <ListItemIcon>
                            <ShoppingCart />
                          </ListItemIcon>
                          <ListItemText
                            primary={x.nome + " - " + x.produto.preco + "€"}
                          />
                        </ListItem>
                      </>
                    ))}

                    <IconButton
                      onClick={() => setTooltip1(false)}
                      color="danger"
                      size="sm"
                    >
                      <ArrowBack />
                    </IconButton>
                  </Sheet>
                }
                placement="bottom-start"
              >
                <Link level="body-sm" onClick={() => setTooltip1(true)}>
                  Prices
                </Link>
              </Tooltip>
              <Tooltip
                open={tooltip}
                arrow
                variant="outlined"
                title={
                  <Sheet>
                    <RadioGroup
                      onChange={(event) => {
                        //event.target.value -> id do supermercado
                        //event.target.parentNode.parentNode.parentNode.lastChild.textContent -> nome do supermercado
                        setSupermarket([
                          event.target.id.split("+")[1],
                          event.target.value,
                          event.target.parentNode.parentNode.parentNode
                            .lastChild.textContent,
                        ]);

                        // change the
                      }}
                    >
                      {produto.supermercados.map((x) => (
                        <Radio
                          key={x.produto.id + "+" + x.produto.preco}
                          id={x.produto.id + "+" + x.produto.preco}
                          value={x.id}
                          label={x.nome}
                          checked={
                            // selectedSuperMarkets.length > 0 &&
                            // supermarket != null
                            //   ? selectedSuperMarkets[0].id == x.id
                            //   : supermarket != null
                            //   ? supermarket[1] == x.id
                            //   : false
                            check == true && supermarket[1] == x.id
                              ? true
                              : false
                          }
                          onClick={() => {
                            setSupermarket([x.produto.preco, x.id, x.nome]);
                            setCheck(true);
                          }}
                        />
                      ))}
                    </RadioGroup>

                    <IconButton
                      onClick={() => setTooltip(false)}
                      color="danger"
                      size="sm"
                    >
                      <ArrowBack />
                    </IconButton>
                  </Sheet>
                }
                placement="bottom-start"
              >
                <Link level="body-sm" onClick={() => setTooltip(true)}>
                  {supermarket.length == 0 ? "Set SuperMarket" : "Change it"}
                </Link>
              </Tooltip>
              <Typography level="body-xs">Selected supermarket</Typography>
              <Typography level="body-xs">{supermarket[2]}</Typography>
            </>
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
