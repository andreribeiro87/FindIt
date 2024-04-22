#!/usr/bin/env python3
# file to modify the db2.json file
import pprint as pp
import json

with open("db2.json") as f:

    data = f.read()

pp.pprint(data)

json_data = json.loads(data)

pp.pprint(json_data)

i = 0

# adicionar um id a cada elemento do produto e voltar a escrever no db2.json
for key in json_data:
    print(key)
    for item in json_data[key]:
        item["id"] = i + 1
        i += 1
pp.pprint(json_data)

json.dump(json_data, open("db2.json", "w"), indent=4)
