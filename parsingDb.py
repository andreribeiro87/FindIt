#!/usr/bin/env python3
# file to modify the db2.json file
import pprint as pp
import json
import random

with open("db2.json") as f:

    data = f.read()

pp.pprint(data)

json_data = json.loads(data)

# pp.pprint(json_data) # esta tudo bem
# ADOREI O PRECO TEM BUE DIGITOS

i = 0

arr = []  # id = index + 1

# adicionar um id a cada elemento do produto e voltar a escrever no db2.json
for key in json_data:
    print(key)
    if key == "produto":
        for item in json_data[key]:
            preco = item["preco"]
            arr.append(preco)
            item.pop("preco")

    else:
        for item in json_data[key]:
            produtosNewArray = []
            for p in item["produtos"]:
                pp.pprint(str(p) + " " + str(arr[p - 1]))
                newPreco = (arr[p - 1] * random.uniform(0.8, 1.5)).__round__(2)
                d = {"id": p, "preco": newPreco}
                produtosNewArray.append(d)
            item["produtos"] = produtosNewArray


print("_______________")

pp.pprint(json_data)

json.dump(json_data, open("db2.json", "w"), indent=4)
