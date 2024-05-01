const graph = {
  waypoint1: {
    prod: ["produto21", "produto20"],
    waypoint: ["waypoint2", "waypoint21"],
  },
  waypoint2: {
    prod: ["produto19"],
    waypoint: ["waypoint8", "waypoint1"],
  },
  waypoint3: {
    prod: ["produto7", "produto8", "produto27"],
    waypoint: ["waypoint11", "waypoint17"],
  },
  waypoint4: {
    prod: ["produto3", "produto4", "produto5", "produto6"],
    waypoint: ["waypoint10", "waypoint22"],
  },
  waypoint5: {
    prod: ["produto1", "produto2"],
    waypoint: ["waypoint21", "waypoint9"],
  },
  waypoint6: {
    prod: ["produto24", "produto25"],
    waypoint: ["waypoint12", "waypoint19"],
  },
  waypoint7: {
    prod: ["produto26", "produto28", "produto29"],
    waypoint: ["waypoint13", "waypoint18"],
  },
  waypoint8: {
    prod: ["produto22", "produto18", "produto9"],
    waypoint: ["waypoint9", "waypoint2"],
  },
  waypoint9: {
    prod: ["produto9", "produto10", "produto2"],
    waypoint: ["waypoint8", "waypoint5", "waypoint10"],
  },
  waypoint10: {
    prod: ["produto10", "produto4", "produto11"],
    waypoint: ["waypoint9", "waypoint4", "waypoint11"],
  },
  waypoint11: {
    prod: ["produto11"],
    waypoint: ["waypoint3", "waypoint10", "waypoint12"],
  },
  waypoint12: {
    prod: ["produto13"],
    waypoint: ["waypoint11", "waypoint6", "waypoint13"],
  },
  waypoint13: {
    prod: ["produto12"],
    waypoint: ["waypoint12", "waypoint7", "waypoint14"],
  },
  waypoint14: {
    prod: ["produto23"],
    waypoint: ["waypoint15", "waypoint13"],
  },
  waypoint15: {
    prod: ["produto14", "produto15", "produto30"],
    waypoint: ["waypoint14", "waypoint16"],
  },
  waypoint16: {
    prod: ["produto16", "produto17"],
    waypoint: ["waypoint15", "waypoint18"],
  },
  waypoint18: {
    prod: [],
    waypoint: ["waypoint16", "waypoint7", "waypoint19"],
  },
  waypoint19: {
    prod: [],
    waypoint: ["waypoint17", "waypoint18", "waypoint6"],
  },
  waypoint17: {
    prod: [],
    waypoint: ["waypoint19", "waypoint20", "waypoint3"],
  },
  waypoint20: { prod: [], waypoint: ["saida"] },
  waypoint21: { prod: [], waypoint: ["waypoint22", "waypoint5"] },
  waypoint22: { prod: [], waypoint: ["waypoint4", "waypoint17"] },
  saida: { prod: [], waypoint: [] },
  entrada: {
    prod: [],
    waypoint: ["waypoint1", "waypoint21", "waypoint22", "waypoint17"],
  },
  produto1: {
    prod: [],
    waypoint: ["waypoint5"],
  },
  produto2: {
    prod: [],
    waypoint: ["waypoint5"],
  },
  produto3: {
    prod: [],
    waypoint: ["waypoint4"],
  },
  produto4: {
    prod: [],
    waypoint: ["waypoint4"],
  },
  produto5: {
    prod: [],
    waypoint: ["waypoint4"],
  },
  produto6: {
    prod: [],
    waypoint: ["waypoint4"],
  },
  produto7: {
    prod: [],
    waypoint: ["waypoint3"],
  },
  produto8: {
    prod: [],
    waypoint: ["waypoint3"],
  },
  produto9: {
    prod: [],
    waypoint: ["waypoint9"],
  },
  produto10: {
    prod: [],
    waypoint: ["waypoint9"],
  },
  produto11: {
    prod: [],
    waypoint: ["waypoint11"],
  },
  produto12: {
    prod: [],
    waypoint: ["waypoint13"],
  },
  produto13: {
    prod: [],
    waypoint: ["waypoint12"],
  },
  produto14: {
    prod: [],
    waypoint: ["waypoint15"],
  },
  produto15: {
    prod: [],
    waypoint: ["waypoint15"],
  },
  produto16: {
    prod: [],
    waypoint: ["waypoint16"],
  },
  produto17: {
    prod: [],
    waypoint: ["waypoint16"],
  },
  produto18: {
    prod: [],
    waypoint: ["waypoint8"],
  },
  produto19: {
    prod: [],
    waypoint: ["waypoint2"],
  },
  produto20: {
    prod: [],
    waypoint: ["waypoint2"],
  },
  produto21: {
    prod: [],
    waypoint: ["waypoint1"],
  },
  produto22: {
    prod: [],
    waypoint: ["waypoint8"],
  },
  produto23: {
    prod: [],
    waypoint: ["waypoint14"],
  },
  produto24: {
    prod: [],
    waypoint: ["waypoint6"],
  },
  produto25: {
    prod: [],
    waypoint: ["waypoint6"],
  },
  produto26: {
    prod: [],
    waypoint: ["waypoint7"],
  },

  produto27: {
    prod: [],
    waypoint: ["waypoint3"],
  },
  produto28: {
    prod: [],
    waypoint: ["waypoint7"],
  },
  produto29: {
    prod: [],
    waypoint: ["waypoint7"],
  },
  produto30: {
    prod: [],
    waypoint: ["waypoint15"],
  },
};

// o user comprou o prod 1 e 4 da me a lista de todas as posicoes que a pessoa tem de passar
// nao podes ir de um produto para um produto sem passar por um waypoint (o mais proximo) seguinte tens de começar na entrada e acabar na saida
// USA UMA ABORDAGEM bfs

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

// Produtos comprados pelo usuário
const userProducts = [
  "produto1",
  "produto2",
  "produto3",
  "produto4",
  "produto5",
  "produto6",
  "produto7",
  "produto8",
  "produto9",
  "produto10",
  "produto11",
  "produto12",
  "produto13",
  "produto14",
  "produto15",
  "produto16",
  "produto17",
  "produto18",
  "produto19",
  "produto20",
  "produto21",
  "produto22",
  "produto23",
  "produto24",
  "produto25",
  "produto26",
  "produto27",
  "produto28",
  "produto29",
  "produto30",
];

// Encontra o caminho para os produtos comprados
const path = findPathToProducts(graph, userProducts);

// Imprime o caminho encontrado
if (path) {
  console.log("Caminho a seguir após comprar os produtos:");
  console.log(path);
} else {
  console.log(
    "Não foi possível encontrar um caminho para os produtos comprados."
  );
}

// Caminho:
const waypointsCoord = [
  [["252.500000", "204.654000"], "waypoint1"],
  [["451.000000", "204.654000"], "waypoint2"],
  [["498.000000", "572.904000"], "waypoint3"],
  [["498.000000", "452.404000"], "waypoint4"],
  [["498.000000", "338.904000"], "waypoint5"],
  [["498.000000", "695.404000"], "waypoint6"],
  [["498.000000", "810.154000"], "waypoint7"],
  [["619.000000", "204.654000"], "waypoint8"],
  [["619.000000", "338.904000"], "waypoint9"],
  [["619.000000", "452.404000"], "waypoint10"],
  [["619.000000", "572.904000"], "waypoint11"],
  [["619.000000", "695.404000"], "waypoint12"],
  [["619.000000", "810.154000"], "waypoint13"],
  [["619.000000", "924.904000"], "waypoint14"],
  [["498.000000", "924.904000"], "waypoint15"],
  [["346.000000", "924.904000"], "waypoint16"],
  [["346.000000", "572.904000"], "waypoint17"],
  [["346.000000", "810.154000"], "waypoint18"],
  [["346.000000", "695.404000"], "waypoint19"],
  [["252.000000", "612.154000"], "waypoint20"],
  [["346.000000", "338.904000"], "waypoint21"],
  [["346.000000", "452.404000"], "waypoint22"],
];
const produtosCoord = [
  [["470.000000", "609.7700"], "produto7"],
  [["525.000000", "609.7700"], "produto8"],
  [["440.000000", "839.0"], "produto28"],
  [["550.000000", "839.0"], "produto29"],
  [["475.000000", "895.0"], "produto30"],
  [["552.500000", "306.654000"], "produto2"],
  [["500.000000", "306.654000"], "produto1"],
  [["437.500000", "416.154000"], "produto3"],
  [["550.000000", "416.154"], "produto4"],
  [["543.000000", "487.654000"], "produto5"],
  [["503.000000", "534.654000"], "produto27"],
  [["480.000000", "487.654000"], "produto6"],
  [["552.500000", "164.654300"], "produto18"],
  [["470.500000", "164.654300"], "produto19"],
  [["375.500000", "164.654300"], "produto20"],
  [["240.500000", "164.654300"], "produto21"],
  [["625.500000", "164.654300"], "produto22"],
  [["667.000000", "756.654000"], "produto12"],
  [["667.000000", "393.154000"], "produto10"],
  [["667.000000", "330.154"], "produto9"],
  [["392.000000", "959.654000"], "produto16"],
  [["325.000000", "959.654000"], "produto17"],
  [["667.000000", "527.654000"], "produto11"],
  [["667.000000", "650.654000"], "produto13"],
  [["459.500000", "959.654000"], "produto15"],
  [["520.500000", "959.654000"], "produto14"],
  [["640.500000", "959.654000"], "produto23"],
  [["499.000000", "733.1540"], "produto24"],
  [["550.000000", "733.1540"], "produto25"],
  [["450.000000", "780.1540"], "produto26"],
];

// Função para encontrar coordenadas de um ponto específico
function encontrarCoordenadas(ponto) {
  const coordenadas = waypointsCoord.find((coord) => coord[1] === ponto);
  return coordenadas ? coordenadas[0] : null;
}

// Adicionando coordenadas ao caminho
const caminhoComCoordenadas = path.reduce((acc, ponto) => {
  const coordenadas = encontrarCoordenadas(ponto);
  if (coordenadas) {
    acc.push([ponto, coordenadas]);
  }
  return acc;
}, []);
let s = "";

console.table(caminhoComCoordenadas);
for (let i = 0; i < caminhoComCoordenadas.length - 1; i++) {
  s += `<line x1="${parseFloat(caminhoComCoordenadas[i][1][0]) - 7.5}" y1="${
    parseFloat(caminhoComCoordenadas[i][1][1]) + 7.5
  }" x2="${parseFloat(caminhoComCoordenadas[i + 1][1][0]) - 7.5}" y2="${
    parseFloat(caminhoComCoordenadas[i + 1][1][1]) + 7.5
  } " style="stroke:red;stroke-width:2"/>\n`;
}

console.log(s);
