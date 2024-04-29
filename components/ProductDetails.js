import { Card, CardContent,IconButton } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";

import Table from "@mui/joy/Table";
import * as React from "react";
import { ArrowBack } from "@mui/icons-material";

export default function ProductDetails({ produto,close }) {
  console.log(produto);
  return (
    <>
      <IconButton onClick={close} color="danger" sx={{position:"absolute",left:3}}><ArrowBack/></IconButton>
      <Card variant="plain" orientation="horizontal" sx={{ p: 1,mt:5 }}>
        <AspectRatio ratio="1" sx={{ width: "50%" }}>
          <img src="/teste.avif" loading="lazy"/>
        </AspectRatio>
        <CardContent sx={{ pt: 2 }}>
          <Typography level="title-lg">{produto.nome}</Typography>
          <Typography level="body-md" mb={1}>
            {produto.preco}€
          </Typography>
          <Typography level="body-sm">
            {produto.descricao}
          </Typography>
          <Typography level="body-sm">
            Quantity: {produto.qtd}
          </Typography>
        </CardContent>
      </Card>
      <Card>
      <Table
      variant="soft"
        borderAxis="x"
      >
        <tbody>
          <tr>
            <th scope="row">Calories</th>
            <td>{produto.tabela_nutritiva.calorias}</td>
          </tr>
          <tr>
            <th scope="row">Carbs</th>
            <td>{produto.tabela_nutritiva.carboidratos}</td>
          </tr>
          <tr>
            <th scope="row">Protein</th>
            <td>{produto.tabela_nutritiva.proteinas}</td>
          </tr>
          <tr>
            <th scope="row">Fat</th>
            <td>{produto.tabela_nutritiva.gorduras}</td>
          </tr>
        </tbody>
      </Table>
      </Card>
    </>
  );
}

