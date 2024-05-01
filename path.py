# from svg.path import parse_path
# from svg.path.path import Line
# from xml.dom import minidom

# # Read the SVG file
# doc = minidom.parse("public/example7.svg")
# path_elements = [
#     path
#     for path in doc.getElementsByTagName("path")
#     if path.getAttribute("id").startswith("produto")
# ]

# # counter = 0
# # for path in path_elements:
# #     old_id = path.getAttribute("id")
# #     new_id = old_id[:-2].replace("shape", "waypoint") + str(counter := counter + 1)
# #     path.setAttribute("id", new_id)

# # Write the modified SVG back to a file
# # with open("public/example7_modified.svg", "w") as f:
# #     doc.writexml(f)

# doc.unlink()


from svg.path import parse_path
from xml.dom import minidom
import pprint as pp


# Função para extrair as coordenadas de um caminho SVG
def extrair_coordenadas(svg_path):
    coordenadas = []
    for segmento in svg_path:
        # Verifica se é um segmento de linha
        if isinstance(segmento, parse_path.Line):
            coordenadas.append((segmento.start.real, segmento.start.imag))
    return coordenadas


# Read the modified SVG file
doc_modified = minidom.parse("public/mapComplete.svg")

# Encontrar todos os elementos de caminho com ID começando com "waypoint"
waypoint_elements = [
    [
        path.getAttribute("transform")
        .replace("matrix(", "")
        .replace(")", "")
        .split(",")[4:],
        (path.getAttribute("id")),
    ]
    for path in doc_modified.getElementsByTagName("path")
    if path.getAttribute("id").startswith("waypoint")
]


pp.pprint(waypoint_elements)


product_elements = [
    [
        path.getAttribute("transform")
        .replace("matrix(", "")
        .replace(")", "")
        .split(",")[4:],
        (path.getAttribute("id")),
    ]
    for path in doc_modified.getElementsByTagName("path")
    if path.getAttribute("id").startswith("produto")
]

pp.pprint(product_elements)

entrada = [
    [
        path.getAttribute("transform")
        .replace("matrix(", "")
        .replace(")", "")
        .split(",")[4:],
        (path.getAttribute("id")),
    ]
    for path in doc_modified.getElementsByTagName("path")
    if path.getAttribute("id").startswith("entrada")
]

pp.pprint(entrada)

saida = [
    [
        path.getAttribute("transform")
        .replace("matrix(", "")
        .replace(")", "")
        .split(",")[4:],
        (path.getAttribute("id")),
    ]
    for path in doc_modified.getElementsByTagName("path")
    if path.getAttribute("id").startswith("saida")
]

pp.pprint(saida)


# Extrair e imprimir as coordenadas de cada waypoint
# for waypoint in waypoint_elements:
#     path_data = waypoint.getAttribute("d")
#     svg_path = parse_path(path_data)
#     coordenadas = extrair_coordenadas(svg_path)
#     print(f"Waypoint {waypoint.getAttribute('id')}: {coordenadas}")

doc_modified.unlink()
