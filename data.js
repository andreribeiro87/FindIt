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
const entradaCoord = [[["161.000000", "380.154000"], "entrada"]];
const saidaCoord = [[["161.000000", "793.154000"], "saida"]];

const graph = {
  waypoint1: {
    prod: ["produto21", "produto20"],
    waypoint: ["waypoint2", "waypoint21"],
  },
  waypoint2: {
    prod: ["produto19", "produto18"],
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
    prod: ["produto11", "produto8", "produto13"],
    waypoint: ["waypoint3", "waypoint10", "waypoint12"],
  },
  waypoint12: {
    prod: ["produto13", "produto25", "produto12"],
    waypoint: ["waypoint11", "waypoint6", "waypoint13"],
  },
  waypoint13: {
    prod: ["produto12", "produto29"],
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
};

// o user comprou o prod 1 e 4 da me a lista de todas as posicoes que a pessoa tem de passar
// nao podes ir de um produto para um produto sem passar por um waypoint (o mais proximo) seguinte tens de começar na entrada e acabar na saida
function encontrarCaminho(produtosSelecionados) {
  // Inicialização do caminho com a entrada
  let caminho = [[...entradaCoord[0][0]]];

  // Ordenar os produtos selecionados pelas coordenadas
  produtosSelecionados.sort((a, b) => {
    return (
      distancia(caminho[caminho.length - 1], a[0]) -
      distancia(caminho[caminho.length - 1], b[0])
    );
  });

  // Adicionar waypoints e produtos selecionados ao caminho
  for (let i = 0; i < produtosSelecionados.length; i++) {
    let produto = produtosSelecionados[i];
    let waypointMaisProximo = encontrarWaypointMaisProximo(
      caminho[caminho.length - 1]
    );
    caminho.push([...waypointMaisProximo[0], waypointMaisProximo[1]]);
    caminho.push([...produto[0], produto[1]]);
  }

  // Adicionar a saída ao caminho
  caminho.push([...saidaCoord[0][0]]);

  return caminho;
}

function distancia(coordA, coordB) {
  let x1 = parseFloat(coordA[0]);
  let y1 = parseFloat(coordA[1]);
  let x2 = parseFloat(coordB[0]);
  let y2 = parseFloat(coordB[1]);
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function encontrarWaypointMaisProximo(coord) {
  let waypointMaisProximo;
  let menorDistancia = Infinity;
  let pontoPrateleira = extrairPontoPrateleira(coord);

  for (let i = 0; i < waypointsCoord.length; i++) {
    let waypointCoord = waypointsCoord[i][0];
    let pontoPrateleiraWaypoint = extrairPontoPrateleira(waypointCoord);

    // Verificar se o waypoint está na mesma prateleira
    if (pontoPrateleira[0] === pontoPrateleiraWaypoint[0]) {
      let dist = distancia(coord, waypointCoord);
      if (dist < menorDistancia) {
        menorDistancia = dist;
        waypointMaisProximo = waypointsCoord[i];
      }
    }
  }
  return waypointMaisProximo;
}

function extrairPontoPrateleira(coord) {
  // Aqui, extraímos apenas a coordenada x, que representa a posição da prateleira
  return parseFloat(coord[0]);
}

// Produtos selecionados (produto1 e produto4)
const produtosSelecionados = [
  [["500.000000", "306.654000"], "produto1"],
  [["550.000000", "416.154"], "produto4"],
];

// Encontrar o caminho
const caminho = encontrarCaminho(produtosSelecionados);
console.log("Caminho:", caminho);
