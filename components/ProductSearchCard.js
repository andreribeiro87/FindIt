import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Tooltip from "@mui/joy/Tooltip";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Delete from "@mui/icons-material/Delete";

import { useState } from "react";

export default function ProductSearchCard({
  produto,
  Details,
  addToCart,
  removeFromCart,
  isCart,
  cartQuantity,
}) {
  const [quantity, setQuantity] = useState(0);

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
        <CardContent sx={{ pt: 2 }}>
          <Typography level="title-lg">{produto.nome}</Typography>
          <Typography level="body-sm" mb={1}>
            {produto.preco}€
          </Typography>
          <Typography level="body-xs">Disponivel em {"\n"}</Typography>
          <Tooltip
            arrow
            variant="outlined"
            title={produto.supermercados.map((x) => (
              <Typography key={x.id}>{x.nome}</Typography>
            ))}
            placement="bottom-start"
          >
            <Typography level="body-xs">
              {" "}
              {/*on click adicionar a possibilidade de ver tudo tipo uma tooltip */}
              {produto.supermercados
                .map((x) => x.nome)
                .join(", ")
                .slice(0, 20)
                .concat("...")}
            </Typography>
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
