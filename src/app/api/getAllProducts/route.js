import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch("http://127.0.0.1:3001/produto").then((res) =>
    res.json()
  );

  return NextResponse.json(res);
}

/**
 * export async function GET(req) {
    //logica de id
    const myURl = new URL(req.url);
    let id = myURl.searchParams.get('id') || 1;
    console.log('cheguei')
    let datum = []
    // let id = 1;
    let res1

    while (true) {
        res1 = await fetch(`http://127.0.0.1:8000/experiencias/${id}`).then(res => res.json())
        datum.push(res1)
        if ((myURl.searchParams.get('id') != undefined)) {

            break
        }

        id++

        if (res1 == null || res1 == undefined || res1 == '' || res1 == 'undefined' || res1 == []) {
            break
        }

    }
    return NextResponse.json({
        datum
    })




 */
