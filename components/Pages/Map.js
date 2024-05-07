import { useState } from "react";

import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Tooltip from "@mui/joy/Tooltip";
import { SvgIcon } from "@mui/joy";

import {
  graph,
  waypointsCoord,
  produtosCoord,
  entradaCoord,
  saidaCoord,
} from "../../public/consts.js";
export default function Map({ cart, superMarketCart, setSuperMarketCart }) {
  const [open, setOpen] = useState(false);
  const [openp, setOpenp] = useState("");
  console.log(cart, superMarketCart, "TESTE");

  let filteredCart = cart.filter((x) => x.supermarket[2] == superMarketCart);

  let userProducts = filteredCart.map(
    (x) => "produto" + x.produto.id.toString()
  );

  function bfs(graph, start, end) {
    const queue = [[start, []]]; // Queue of [node, path]
    const visited = new Set();

    while (queue.length > 0) {
      const [node, path] = queue.shift();

      if (node === end) {
        return path; // Retorna o caminho se chegarmos ao destino
      }

      if (visited.has(node)) {
        continue; // Se já visitou este nó, passa para o próximo
      }
      visited.add(node);

      // Adiciona os waypoints deste nó à fila
      for (const waypoint of graph[node].waypoint) {
        queue.push([waypoint, [...path, waypoint]]);
      }
    }

    return null; // Retorna null se não encontrar um caminho
  }

  function findNearestWaypoint(graph, start, product) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();

      if (graph[node].prod.includes(product)) {
        return node; // Retorna o nó se encontrarmos o produto nele
      }

      visited.add(node);

      for (const waypoint of graph[node].waypoint) {
        if (!visited.has(waypoint)) {
          queue.push(waypoint);
        }
      }
    }

    return null; // Retorna null se não encontrarmos nenhum waypoint com o produto
  }

  function findPathToProducts(graph, products) {
    let currentLocation = "entrada";
    let path = [];

    for (const product of products) {
      const nearestWaypoint = findNearestWaypoint(
        graph,
        currentLocation,
        product
      );
      if (!nearestWaypoint) {
        return null; // Se não for possível encontrar um waypoint para o produto, retorna null
      }

      const productPath = bfs(graph, currentLocation, nearestWaypoint);
      if (!productPath) {
        return null; // Se não for possível encontrar um caminho para o waypoint, retorna null
      }

      path = path.concat(productPath); // Concatena o caminho do local atual para o waypoint
      currentLocation = nearestWaypoint; // Atualiza a localização atual para o waypoint
    }

    // Adiciona o caminho do último waypoint até a saída
    const exitPath = bfs(graph, currentLocation, "saida");
    if (!exitPath) {
      return null; // Se não for possível encontrar um caminho até a saída, retorna null
    }
    path = path.concat(exitPath);

    return path;
  }

  const path = findPathToProducts(graph, userProducts);

  function encontrarCoordenadas(ponto) {
    const coordenadas = waypointsCoord.find((coord) => coord[1] === ponto);
    return coordenadas ? coordenadas[0] : null;
  }

  // Adicionando coordenadas ao caminho
  let caminhoComCoordenadas = path.reduce((acc, ponto) => {
    const coordenadas = encontrarCoordenadas(ponto);
    if (coordenadas) {
      acc.push([ponto, coordenadas]);
    }
    return acc;
  }, []);
  caminhoComCoordenadas = [["entrada", entradaCoord[0][0]]].concat(
    caminhoComCoordenadas,
    [["saida", saidaCoord[0][0]]]
  );

  console.table(caminhoComCoordenadas);

  return (
    <Card
      color="warning"
      variant="soft"
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "2%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "85%",
        height: "80%",
        overflow: "auto",
      }}
    >
      {cart.length > 0 ? (
        <>
          <Select
            defaultValue={superMarketCart}
            placeholder="Chose a supermarket"
            onChange={(event, newValue) => setSuperMarketCart(newValue)}
          >
            {[...new Set(cart.map((x) => x.supermarket[2]))].map((x) => (
              <Option key={x} value={x}>
                {x}
              </Option>
            ))}
          </Select>
          <svg
            viewBox="0 0 792 1135"
            preserveAspectRatio="xMidYMid meet"
            transform="scale(1.21, 1.21)"
            width="100%"
            height="100%"
            style={{
              maxWidth: "100%",
              maxHeight: "75%",
              margin: "auto",
            }}
          >
            <g id="page1">
              {/* <rect y="0" fill="none" height="1125" x="0" width="782" /> */}
              <path
                fillRule="nonzero"
                fill="#cbbdb0"
                d="M.0,.0L1047.3,.0L1047.3,704.0L.0,704.0L.0,.0z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,746.000000,47.000000)"
                id="shape1"
              />
              <path
                fillRule="nonzero"
                fill="#edf0f5"
                d="M.0,.0L964.0,.0L964.0,648.0L.0,648.0L.0,.0z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,718.000000,88.655000)"
                id="shape2"
              />
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,699.000000,268.654000)"
                id="shape3"
              >
                <path
                  fillRule="nonzero"
                  fill="#fced6e"
                  d="M.0,.0L189.0,.0L189.0,38.0L.0,38.0L.0,.0z"
                />
                <text>
                  <tspan y="25.0" x="70.4">
                    DAIRY
                  </tspan>
                </text>
              </g>
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,699.000000,476.654000)"
                id="shape4"
              >
                <path
                  fillRule="nonzero"
                  fill="#e88aac"
                  d="M.0,.0L397.0,.0L397.0,38.0L.0,38.0L.0,.0z"
                />
                <text>
                  <tspan y="25.0" x="128.3">
                    MEAT &amp; POULTRY
                  </tspan>
                </text>
              </g>
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,699.000000,117.654000)"
                id="group5"
              >
                <path
                  fillRule="nonzero"
                  fill="#f1ca7b"
                  d="M.0,.0L132.0,.0L132.0,38.0L.0,38.0L.0,.0z"
                  transform="translate(0.000000,0.000057)"
                  id="shape6"
                />
                <g
                  transform="matrix(0.000000,-1.000000,1.000000,0.000000,0.000000,114.000000)"
                  id="shape7"
                >
                  <path
                    fillRule="nonzero"
                    fill="#f1ca7b"
                    d="M.0,.0L114.0,.0L114.0,57.0L.0,57.0L.0,.0z"
                  />
                  <text>
                    <tspan y="34.5" x="26.8">
                      BAKERY
                    </tspan>
                  </text>
                </g>
              </g>
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,699.000000,892.654000)"
                id="group8"
              >
                <path
                  fillRule="nonzero"
                  fill="#f1ca7b"
                  d="M.0,.0L132.0,.0L132.0,38.0L.0,38.0L.0,.0z"
                  transform="matrix(-1.000000,0.000000,0.000000,1.000000,132.000000,0.000057)"
                  id="shape9"
                />
                <g
                  transform="matrix(0.000000,-1.000000,-1.000000,0.000000,132.000000,114.000000)"
                  id="shape10"
                >
                  <path
                    fillRule="nonzero"
                    fill="#f1ca7b"
                    d="M.0,.0L114.0,.0L114.0,57.0L.0,57.0L.0,.0z"
                  />
                  <text transform="matrix(-1.00,0.00,0.00,1.00,114.0,0.0)">
                    <tspan y="34.5" x="19.0">
                      SEAFOOD
                    </tspan>
                  </text>
                </g>
              </g>
              <g transform="translate(321.000000,117.654300)" id="shape11">
                <path
                  fillRule="nonzero"
                  fill="#aae3ac"
                  d="M.0,.0L245.0,.0L245.0,57.0L.0,57.0L.0,.0z"
                />
                <text>
                  <tspan y="34.5" x="84.1">
                    PRODUCE
                  </tspan>
                </text>
              </g>
              <g transform="translate(188.000000,117.654300)" id="shape12">
                <path
                  fillRule="nonzero"
                  fill="#d0bae0"
                  d="M.0,.0L114.0,.0L114.0,57.0L.0,57.0L.0,.0z"
                />
                <text>
                  <tspan y="34.5" x="19.8">
                    FLOWERS
                  </tspan>
                </text>
              </g>
              <path
                fillRule="nonzero"
                fill="#86629f"
                d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
                transform="translate(415.000000,268.654000)"
                id="shape13"
              />
              <path
                fillRule="nonzero"
                fill="#86629f"
                d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
                transform="translate(415.000000,377.154000)"
                id="shape14"
              />
              <path
                fillRule="nonzero"
                fill="#86629f"
                d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
                transform="translate(415.000000,495.654000)"
                id="shape15"
              />
              <path
                fillRule="nonzero"
                fill="#86629f"
                d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
                transform="translate(415.000000,618.154000)"
                id="shape16"
              />

              <path
                fillRule="nonzero"
                fill="#86629f"
                d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
                transform="translate(415.000000,740.654000)"
                id="shape17"
              />
              <g transform="translate(415.000000,847.154000)" id="shape18">
                <path
                  id="frozen"
                  fillRule="nonzero"
                  fill="#a9e7f4"
                  d="M.0,.0L151.0,.0L151.0,57.0L.0,57.0L.0,.0z"
                />
                <text>
                  <tspan y="34.5" x="43.7">
                    FROZEN
                  </tspan>
                </text>
              </g>

              <g
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,556.000000,1023.654000)"
                id="shape19"
              >
                <path
                  fillRule="nonzero"
                  fill="#cae2e2"
                  d="M.0,.0L122.0,.0L122.0,57.0L.0,57.0L.0,.0z"
                />
                <text>
                  <tspan y="34.5" x="39.3">
                    irineu
                  </tspan>
                </text>
              </g>
              <g
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,405.000000,1023.654000)"
                id="shape20"
              >
                <path
                  fillRule="nonzero"
                  fill="#d4c4a2"
                  d="M.0,.0L133.0,.0L133.0,57.0L.0,57.0L.0,.0z"
                />
                <text>
                  <tspan y="23.5" x="31.3">
                    DELIAND
                  </tspan>
                  <tspan y="45.5" x="19.1">
                    COFFEE BAR
                  </tspan>
                </text>
              </g>
              <path
                fillRule="nonzero"
                fill="#000000"
                d="M.0,.0L242.0,.0L242.0,4.0L.0,4.0L.0,.0z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,98.000000,268.654000)"
                id="shape21"
              />
              <path
                fillRule="nonzero"
                fill="#e0e1a7"
                d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,664.654000)"
                id="shape22"
              />
              <path
                fillRule="nonzero"
                fill="#e0e1a7"
                d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,721.154000)"
                id="shape23"
              />
              <path
                fillRule="nonzero"
                fill="#e0e1a7"
                d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,777.654000)"
                id="shape24"
              />
              <path
                fillRule="nonzero"
                fill="#e0e1a7"
                d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
                transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,834.154000)"
                id="shape25"
              />
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,124.000000,340.654000)"
                id="shape26"
              >
                <text>
                  <tspan y="21.0" x="8.4">
                    ENTRANCE
                  </tspan>
                </text>
              </g>
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,211.000000,698.154000)"
                id="shape27"
              >
                <text>
                  <tspan y="21.0" x="8.3">
                    REGISTER
                  </tspan>
                </text>
              </g>
              <path
                fillRule="nonzero"
                fill="#000000"
                d="M.0,.0L242.0,.0L242.0,4.0L.0,4.0L.0,.0z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,98.000000,679.654000)"
                id="shape28"
              />
              <g
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,124.000000,751.654000)"
                id="shape29"
              >
                <text>
                  <tspan y="21.0" x="34.5">
                    EXIT
                  </tspan>
                </text>
              </g>
              <path
                fillRule="nonzero"
                fill="#00b050"
                strokeWidth="1"
                d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,161.000000,380.154000)"
                id="entrada"
                stroke="#323232"
              />
              <path
                fillRule="nonzero"
                fill="#ff0000"
                strokeWidth="1"
                d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
                transform="matrix(0.000000,1.000000,-1.000000,0.000000,161.000000,793.154000)"
                id="saida"
                stroke="#323232"
              />

              {produtosCoord
                .filter((e) => userProducts.includes(e[1]))
                .map((e) => (
                  <Tooltip
                    key={e[1]}
                    title={
                      cart.filter((c) => c.produto.id == e[1].substring(7))[0]
                        .produto.nome
                    }
                    size="sm"
                    open={open && openp == e[1]}
                  >
                    <path
                      onClick={() => {
                        setOpenp(e[1]);
                        setOpen(!open);
                      }}
                      fillRule="nonzero"
                      fill="#ff0"
                      strokeWidth="1"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
                      id={e[1]}
                      key={e[1]}
                      transform={
                        "matrix(0.000000,1.900000,-1.9000000,0.000000," +
                        e[0][0] +
                        "," +
                        e[0][1] +
                        ") rotate(-90) translate(-20, -20)"
                      }
                      stroke="#323232"
                    />
                  </Tooltip>
                ))}
              {waypointsCoord.map((e) => {
                return (
                  <path
                    fillRule="nonzero"
                    fill="#4155c6"
                    display={"none"}
                    strokeWidth="1"
                    d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
                    transform={
                      "matrix(0.000000,1.000000,-1.000000,0.000000," +
                      e[0][0] +
                      "," +
                      e[0][1] +
                      ")"
                    }
                    id={e[1]}
                    key={e[1]}
                    stroke="#323232"
                  />
                );
              })}

              {caminhoComCoordenadas.length > 4 &&
                caminhoComCoordenadas
                  .slice(0, caminhoComCoordenadas.length - 1)
                  .map((coordenada, index) => {
                    const x1 = parseFloat(coordenada[1][0]) - 7.5;
                    const y1 = parseFloat(coordenada[1][1]) + 7.5;
                    const x2 =
                      parseFloat(caminhoComCoordenadas[index + 1][1][0]) - 7.5;
                    const y2 =
                      parseFloat(caminhoComCoordenadas[index + 1][1][1]) + 7.5;
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        style={{ stroke: "red", strokeWidth: 2 }}
                      />
                    );
                  })}
            </g>
          </svg>
        </>
      ) : (
        <>You must have a full cart!</>
      )}
    </Card>
  );
}
