import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

import Image from "next/image";

export default function ProductSearchCard({ produto }) {
  console.log("MYPIXA", produto);
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
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              {produto.preco}
            </Link>
          </Typography>
          <Typography level="body-xs">
            {" "}
            {/*on click adicionar a possibilidade de ver tudo tipo uma tool tip */}
            Disponivel em{" "}
            {produto.supermercados
              .map((x) => x.nome)
              .join(", ")
              .slice(0, 10)
              .concat("...")}
          </Typography>
        </CardContent>
      </Card>

      <Card variant="plain" sx={{ p: 1 }}>
        <TooltipButtonGroup />
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

export function TooltipButtonGroup() {
  return (
    <ButtonGroup variant="soft" aria-label="tooltip button group">
      <Tooltip arrow title="Go to profile">
        <Button startDecorator={<Person />}>Hover me</Button>
      </Tooltip>
      <Tooltip arrow title="Open settings">
        <span>
          <IconButton disabled>
            <Settings />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip arrow title="Go to profile">
        <Button endDecorator={<Person />}>Hover me</Button>
      </Tooltip>
    </ButtonGroup>
  );
}
