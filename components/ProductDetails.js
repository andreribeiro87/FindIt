import { Card, CardContent, IconButton } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import { List, ListItem, Sheet, Link } from "@mui/joy";
import Tooltip from "@mui/joy/Tooltip";
import Table from "@mui/joy/Table";
import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";

export default function ProductDetails({ produto, close }) {
  console.log(produto);
  const [tolltip, setTolltip] = useState(false);

  return (
    <>
      <IconButton
        onClick={close}
        color="danger"
        sx={{ position: "absolute", left: 3 }}
      >
        <ArrowBack />
      </IconButton>
      <Card variant="plain" orientation="horizontal" sx={{ p: 1, mt: 5 }}>
        <AspectRatio ratio="1" sx={{ width: "50%" }}>
          <img src={"/" + produto.imagem} loading="lazy" />
        </AspectRatio>
        <CardContent sx={{ pt: 2 }}>
          <Typography level="title-lg">{produto.nome}</Typography>
          <Typography level="body-md" mb={1}>
            {produto.preco}€
          </Typography>
          <Typography level="body-sm">{produto.descricao}</Typography>
          <Typography level="body-sm">Quantity: {produto.qtd}</Typography>
        </CardContent>
      </Card>
      <Card>
        <Typography level="body-sm">Disponivel em {"\n"}</Typography>
        <Tooltip
          open={tolltip}
          arrow
          variant="outlined"
          title={
            <Sheet>
              <List marker="disc" size="sm">
                {produto.supermercados.map((x) => (
                  <ListItem key={x.id}>{x.nome}</ListItem>
                ))}
              </List>

              <IconButton
                onClick={() => setTolltip(false)}
                color="danger"
                size="sm"
              >
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
              .slice(0, 50)
              .concat("...")}
          </Link>
        </Tooltip>
      </Card>
      <Card>
        <Table variant="soft" borderAxis="x">
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
