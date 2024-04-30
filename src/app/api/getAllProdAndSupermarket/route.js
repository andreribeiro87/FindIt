import { PestControlRodentSharp } from "@mui/icons-material";
import { NextResponse } from "next/server";

export async function GET(req) {
  //this function should return a json like {id: x, nome: 'nome do prod'}
  const prods = await fetch("http://127.0.0.1:3001/produto").then((res) =>
    res.json()
  );

  const supers = await fetch("http://127.0.0.1:3001/supermercado").then((res) =>
    res.json()
  );

  let prods_plus_supers = [];

  for (let i = 0; i < prods.length; i++) {
    // para cada produto vamos perguntar a que supermercado pertence, pode pertencer a mais que 1
    let super_arr = [];
    for (let j = 0; j < supers.length; j++) {
      if (supers[j].produtos.includes(parseInt(prods[i].id))) {
        super_arr.push({
          nome: supers[j].nome,
          id: supers[j].id,
          acessibilidade: supers[j].acessibilidade,
        });
      }
    }
    prods_plus_supers.push({ ...prods[i], supermercados: super_arr });
  }

  return NextResponse.json(prods_plus_supers);
}
