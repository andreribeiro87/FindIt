# # from svg.path import parse_path
# # from svg.path.path import Line
# # from xml.dom import minidom

# # # Read the SVG file
# # doc = minidom.parse("public/example7.svg")
# # path_elements = [
# #     path
# #     for path in doc.getElementsByTagName("path")
# #     if path.getAttribute("id").startswith("produto")
# # ]

# # # counter = 0
# # # for path in path_elements:
# # #     old_id = path.getAttribute("id")
# # #     new_id = old_id[:-2].replace("shape", "waypoint") + str(counter := counter + 1)
# # #     path.setAttribute("id", new_id)

# # # Write the modified SVG back to a file
# # # with open("public/example7_modified.svg", "w") as f:
# # #     doc.writexml(f)

# # doc.unlink()


# from svg.path import parse_path
# from xml.dom import minidom
# import pprint as pp


# # Função para extrair as coordenadas de um caminho SVG
# def extrair_coordenadas(svg_path):
#     coordenadas = []
#     for segmento in svg_path:
#         # Verifica se é um segmento de linha
#         if isinstance(segmento, parse_path.Line):
#             coordenadas.append((segmento.start.real, segmento.start.imag))
#     return coordenadas


# # Read the modified SVG file
# doc_modified = minidom.parse("public/mapComplete.svg")

# # Encontrar todos os elementos de caminho com ID começando com "waypoint"
# waypoint_elements = [
#     [
#         path.getAttribute("transform")
#         .replace("matrix(", "")
#         .replace(")", "")
#         .split(",")[4:],
#         (path.getAttribute("id")),
#     ]
#     for path in doc_modified.getElementsByTagName("path")
#     if path.getAttribute("id").startswith("waypoint")
# ]


# pp.pprint(waypoint_elements)


# product_elements = [
#     [
#         path.getAttribute("transform")
#         .replace("matrix(", "")
#         .replace(")", "")
#         .split(",")[4:],
#         (path.getAttribute("id")),
#     ]
#     for path in doc_modified.getElementsByTagName("path")
#     if path.getAttribute("id").startswith("produto")
# ]

# pp.pprint(product_elements)

# entrada = [
#     [
#         path.getAttribute("transform")
#         .replace("matrix(", "")
#         .replace(")", "")
#         .split(",")[4:],
#         (path.getAttribute("id")),
#     ]
#     for path in doc_modified.getElementsByTagName("path")
#     if path.getAttribute("id").startswith("entrada")
# ]

# pp.pprint(entrada)

# saida = [
#     [
#         path.getAttribute("transform")
#         .replace("matrix(", "")
#         .replace(")", "")
#         .split(",")[4:],
#         (path.getAttribute("id")),
#     ]
#     for path in doc_modified.getElementsByTagName("path")
#     if path.getAttribute("id").startswith("saida")
# ]

# pp.pprint(saida)


# # Extrair e imprimir as coordenadas de cada waypoint
# # for waypoint in waypoint_elements:
# #     path_data = waypoint.getAttribute("d")
# #     svg_path = parse_path(path_data)
# #     coordenadas = extrair_coordenadas(svg_path)
# #     print(f"Waypoint {waypoint.getAttribute('id')}: {coordenadas}")

# doc_modified.unlink()
import networkx as nx
import matplotlib.pyplot as plt
import pprint as pp


NUM_PROD = 30
NUM_WAY = 22


def create_graph():
    G = nx.Graph()

    # Adicionando nós 'p'
    p_nodes = ["p{}".format(i) for i in range(1, NUM_PROD)]
    G.add_nodes_from(p_nodes, bipartite=0)

    # Adicionando nós 'w'
    w_nodes = ["w{}".format(i) for i in range(1, NUM_WAY)]
    G.add_nodes_from(w_nodes, bipartite=1)

    # Adicionando arestas entre 'p' e 'w'
    for p_node in p_nodes:
        for w_node in w_nodes:
            G.add_edge(p_node, w_node)

    # Adicionando arestas entre nós 'w'
    for i in range(len(w_nodes)):
        for j in range(i + 1, len(w_nodes)):
            G.add_edge(w_nodes[i], w_nodes[j])

    return G


def draw_graph(G):
    pos = nx.circular_layout(G)
    nx.draw(
        G, pos, with_labels=True, node_color="skyblue", node_size=1500, font_size=10
    )
    plt.title("Grafo com restrições")
    plt.show()


if __name__ == "__main__":
    graph = create_graph()
    draw_graph(graph)

    nx.write_edgelist(graph, "graph.txt", data=False)

    with open("graph.txt", "r") as f:
        lines = f.readlines()

    dict_graph = {}
    for line in lines:
        dict_graph.setdefault(line.split()[0], set())
        dict_graph.setdefault(line.split()[1], set())
        dict_graph[line.split()[0]].add(line.split()[1])
        dict_graph[line.split()[1]].add(line.split()[0])

    pp.pprint(dict_graph)

    # write dict in a file
    with open("graphComplete.txt", "w") as f:
        for key, value in dict_graph.items():
            f.write(f'{key},{",".join([v for v in value])}\n')
