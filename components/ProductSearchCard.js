import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

import Image from "next/image";
import { useState } from "react";

export default function ProductSearchCard({ produto }) {
  console.log("MYPIXA", produto);

  const [quantity, setQuantity] = useState(0);

  return (
    <Card
      variant="outlined"
      sx={{
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
        gap: 0,
      }}
    >
      <Card variant="plain" orientation="horizontal" sx={{ p: 1 }}>
        <AspectRatio ratio="1" sx={{ width: "50%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/teste.avif" loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            {produto.nome}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            {produto.preco}
          </Typography>
          <Typography level="body-xs">Disponivel em {"\n"}</Typography>
          <Tooltip
            arrow
            title={produto.supermercados.map((x) => x.nome).join(", ")} //TODO put thin on li
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

      <Card variant="plain" sx={{ p: 1 }}>
        <ButtonGroup variant="soft" aria-label="tooltip button group">
          <Tooltip arrow title="Remove">
            <Button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
              <Remove />
            </Button>
          </Tooltip>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            level="body-xs"
          >
            {quantity}
          </Typography>
          <Tooltip arrow title="Add">
            <Button onClick={() => setQuantity(quantity + 1)}>
              <Add size="xs" />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Card>
    </Card>
  );
}

import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
