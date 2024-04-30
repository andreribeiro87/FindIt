import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { List, ListItem, Sheet } from "@mui/joy";
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
}) {
  const [quantity, setQuantity] = useState(0);
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
          <img src="/teste.avif" loading="lazy" alt="" />
        </AspectRatio>
        <CardContent sx={{ pt: 1 }}>
          <Typography level="title-lg">{produto.nome}</Typography>
          <Typography level="body-sm" mb={1}>
            {produto.preco}€
          </Typography>
          <Typography level="body-xs">Disponivel em {"\n"}</Typography>
          <Tooltip
            open={tolltip}
            arrow
            variant="outlined"
            title={

              <Sheet >
                <List marker="disc" size="sm">
                  {produto.supermercados.map((x) => (
                    <ListItem key={x.id} >{x.nome}</ListItem>
                  ))}
                </List>

                <IconButton onClick={() => setTolltip(false)} color="danger" size="sm">
                  <ArrowBack />
                </IconButton>
              </Sheet>
            }
            placement="bottom"
          >
            <Link level="body-xs" onClick={() => setTolltip(true)}>
              {produto.supermercados
                .map((x) => x.nome)
                .join(", ")
                .slice(0, 20)
                .concat("...")}
            </Link>
          </Tooltip>
        </CardContent>
      </Card>

      <Card
        variant="plain"
        sx={{ p: 1, pt: 0, display: "flex", justifyContent: "space-around" }}
        orientation="horizontal"
      >
        {!isCart ? (
          <ButtonGroup variant="soft" size="sm">
            <Button onClick={() => z > 0 && setQuantity(quantity - 1)}>
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
          <Typography level="body-md">Quantity: {cartQuantity}</Typography>
        )}
        <ButtonGroup variant="soft" size="sm">
          {isCart ? (
            <Button onClick={() => removeFromCart({ produto })}>
              <Delete />
            </Button>
          ) : (
            <Button onClick={() => addToCart({ produto, quantity })}>
              Add
            </Button>
          )}
          <Button onClick={Details}>Details</Button>
        </ButtonGroup>
      </Card>
    </Card>
  );
}
