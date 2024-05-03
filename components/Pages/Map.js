import Card from "@mui/joy/Card";
import {
  graph,
  waypointsCoord,
  produtosCoord,
  entradaCoord,
  saidaCoord,
} from "../../public/consts.js";
export default function Map({ cart }) {
  let width = 300;
  let heigth = 300;

  console.table(cart);

  let userProducts = cart.map((x) => "produto" + x.produto.id.toString());

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
      map
      {/* TODO map  */}
      <svg
        viewBox="0 0 792 1135"
        preserveAspectRatio="xMidYMid meet"
        transform="scale(1.21, 1.21)"
      >
        <g id="page1">
          {/* <rect y="0" fill="none" height="1125" x="0" width="782" /> */}
          <path
            fill-rule="nonzero"
            fill="#cbbdb0"
            d="M.0,.0L1047.3,.0L1047.3,704.0L.0,704.0L.0,.0z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,746.000000,47.000000)"
            id="shape1"
          />
          <path
            fill-rule="nonzero"
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
              fill-rule="nonzero"
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
              fill-rule="nonzero"
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
              fill-rule="nonzero"
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
                fill-rule="nonzero"
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
              fill-rule="nonzero"
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
                fill-rule="nonzero"
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
              fill-rule="nonzero"
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
              fill-rule="nonzero"
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
            fill-rule="nonzero"
            fill="#86629f"
            d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
            transform="translate(415.000000,268.654000)"
            id="shape13"
          />
          <path
            fill-rule="nonzero"
            fill="#86629f"
            d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
            transform="translate(415.000000,377.154000)"
            id="shape14"
          />
          <path
            fill-rule="nonzero"
            fill="#86629f"
            d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
            transform="translate(415.000000,495.654000)"
            id="shape15"
          />
          <path
            fill-rule="nonzero"
            fill="#86629f"
            d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
            transform="translate(415.000000,618.154000)"
            id="shape16"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,470.000000,609.7700)"
            id="produto7"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,525.000000,609.7700)"
            id="produto8"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#86629f"
            d="M.0,.0L151.0,.0L151.0,47.0L.0,47.0L.0,.0z"
            transform="translate(415.000000,740.654000)"
            id="shape17"
          />
          <g transform="translate(415.000000,847.154000)" id="shape18">
            <path
              id="frozen"
              fill-rule="nonzero"
              fill="#a9e7f4"
              d="M.0,.0L151.0,.0L151.0,57.0L.0,57.0L.0,.0z"
            />
            <text>
              <tspan y="34.5" x="43.7">
                FROZEN
              </tspan>
            </text>
          </g>
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,440.000000,839.0)"
            id="produto28"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,550.000000,839.0)"
            id="produto29"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,475.000000,895.0)"
            id="produto30"
            stroke="#323232"
          />
          <g
            transform="matrix(-1.000000,0.000000,0.000000,-1.000000,556.000000,1023.654000)"
            id="shape19"
          >
            <path
              fill-rule="nonzero"
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
              fill-rule="nonzero"
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
            fill-rule="nonzero"
            fill="#000000"
            d="M.0,.0L242.0,.0L242.0,4.0L.0,4.0L.0,.0z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,98.000000,268.654000)"
            id="shape21"
          />
          <path
            fill-rule="nonzero"
            fill="#e0e1a7"
            d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
            transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,664.654000)"
            id="shape22"
          />
          <path
            fill-rule="nonzero"
            fill="#e0e1a7"
            d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
            transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,721.154000)"
            id="shape23"
          />
          <path
            fill-rule="nonzero"
            fill="#e0e1a7"
            d="M.0,.0L53.0,.0L53.0,23.0L.0,23.0L.0,.0z"
            transform="matrix(-1.000000,0.000000,0.000000,-1.000000,271.000000,777.654000)"
            id="shape24"
          />
          <path
            fill-rule="nonzero"
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
            fill-rule="nonzero"
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
            fill-rule="nonzero"
            fill="#00b050"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,161.000000,380.154000)"
            id="entrada"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,252.500000,204.654000)"
            id="waypoint1"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,451.000000,204.654000)"
            id="waypoint2"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,572.904000)"
            id="waypoint3"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,452.404000)"
            id="waypoint4"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,338.904000)"
            id="waypoint5"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,695.404000)"
            id="waypoint6"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,810.154000)"
            id="waypoint7"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,204.654000)"
            id="waypoint8"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,338.904000)"
            id="waypoint9"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,452.404000)"
            id="waypoint10"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,572.904000)"
            id="waypoint11"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,695.404000)"
            id="waypoint12"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,810.154000)"
            id="waypoint13"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,619.000000,924.904000)"
            id="waypoint14"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,498.000000,924.904000)"
            id="waypoint15"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,924.904000)"
            id="waypoint16"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,572.904000)"
            id="waypoint17"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,810.154000)"
            id="waypoint18"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0000"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,161.000000,793.154000)"
            id="saida"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,695.404000)"
            id="waypoint19"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,252.000000,612.154000)"
            id="waypoint20"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,338.904000)"
            id="waypoint21"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#4155c6"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,346.000000,452.404000)"
            id="waypoint22"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,552.500000,306.654000)"
            id="produto2"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,500.000000,306.654000)"
            id="produto1"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,437.500000,416.154000)"
            id="produto3"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,550.000000,416.154)"
            id="produto4"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,543.000000,487.654000)"
            id="produto5"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,503.000000,534.654000)"
            id="produto27"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,480.000000,487.654000)"
            id="produto6"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,552.500000,164.654300)"
            id="produto18"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,470.500000,164.654300)"
            id="produto19"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,375.500000,164.654300)"
            id="produto20"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,240.500000,164.654300)"
            id="produto21"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,625.500000,164.654300)"
            id="produto22"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,667.000000,756.654000)"
            id="produto12"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,667.000000,393.154000)"
            id="produto10"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,667.000000,330.154)"
            id="produto9"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,392.000000,959.654000)"
            id="produto16"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,325.000000,959.654000)"
            id="produto17"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,667.000000,527.654000)"
            id="produto11"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,667.000000,650.654000)"
            id="produto13"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,459.500000,959.654000)"
            id="produto15"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,520.500000,959.654000)"
            id="produto14"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,640.500000,959.654000)"
            id="produto23"
            stroke="#323232"
          />

          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,499.000000,733.1540)"
            id="produto24"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,550.000000,733.1540)"
            id="produto25"
            stroke="#323232"
          />
          <path
            fill-rule="nonzero"
            fill="#ff0"
            stroke-width="1"
            d="M.0,7.5C.0,3.4,3.4,.0,7.5,.0C11.6,.0,15.0,3.4,15.0,7.5C15.0,11.6,11.6,15.0,7.5,15.0C3.4,15.0,.0,11.6,.0,7.5z"
            transform="matrix(0.000000,1.000000,-1.000000,0.000000,450.000000,780.1540)"
            id="produto26"
            stroke="#323232"
          />

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
    </Card>
  );
}
