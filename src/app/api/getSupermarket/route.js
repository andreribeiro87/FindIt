import { NextResponse, NextRequest } from "next/server";

export async function GET(req) {
  // console.log("PIXA1\n", req, "PIXA2\n", req.nextUrl.searchParams, "DICA");

  // let myurl = new URL(req.url);
  //   let accessibility = myurl.searchParams.get("accessibility") || "false";
  //   console.log(myurl, "PILAO", accessibility);

  const res = await fetch("http://127.0.0.1:3001/supermercado").then((res) =>
    res.json()
  );

  //   //   //   console.log(res, accessibility, "PILAO");
  //   if (accessibility == "true") {
  //     let res2 = [];
  //     for (let i = 0; i < res.length; i++) {
  //       if (res[i].acessibilidade.toString() == accessibility) {
  //         res2.push(res[i]);
  //       }
  //     }
  //     console.log(res2, "MYDICKCKCK");
  //     return NextResponse.json(res2);
  //   }

  return NextResponse.json({ res });
}
