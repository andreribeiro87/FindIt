from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

# htmldata = urlopen("https://pixabay.com/pt/photos/search/pao-integral")
# soup = BeautifulSoup(htmldata, "html.parser")
# images = soup.find_all("img")

# for item in images:
#     print(item["src"])

names = [
    "salada_frutas",
    "granola",
    "salmão",
    "ovos",
    "aveia",
    "banana",
    "abacate",
    "frango",
    "tomate",
]

for name in names:
    url = f"https://pixabay.com/pt/photos/search/{name}"  ## why?
    # print(url)
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

    driver.get(url)

    htmldata = driver.page_source

    soup = BeautifulSoup(htmldata, "html.parser")
    images = soup.find_all("img")
    print(images[0].get("src"))
    # for item in images:
    #     print(item["src"])


[
    "https://media.istockphoto.com/id/639812110/pt/foto/fresh-red-apple-isolated-on-white-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=DF0WoDnJd5hsQRHsVW0sej56jVHy4tSOqDozEbOQEiQ=",
    "https://media.istockphoto.com/id/538997548/pt/foto/feito-em-casa-iogurte.jpg?b=1&s=170667a&w=0&k=20&c=4x-rVtXl1vcMIQAS6-PiZWmMseI0i4aify2Ea5XhOwk=",
    "https://media.istockphoto.com/id/1706233675/pt/foto/chestnuts-in-a-wooden-plate-on-a-burlap-sack.jpg?b=1&s=170667a&w=0&k=20&c=NH5E9IL-yBrjbPelGj75d2IuOoqR-geKzu9Yj0R0Etk=",
    "https://media.istockphoto.com/id/1352426225/pt/foto/falling-carrot-slice-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?b=1&s=170667a&w=0&k=20&c=eFhPT68TMSJPfrKHL3tKD4Mv7eAbh3JJj_NTQhSU2qI=",
    "/favicon.ico",
    "https://media.istockphoto.com/id/1469228227/pt/foto/fresh-salad-of-lentils-spinach-and-almonds.jpg?b=1&s=170667a&w=0&k=20&c=2ssbgYAKi0GyuLgMLTjfv9QNoJM4QH4y9vHth4Z6ztQ=",
    "https://media.istockphoto.com/id/1448997223/pt/foto/abstract-scattered-cereals-seeds-muesli-grains-on-white-background-top-view.jpg?b=1&s=170667a&w=0&k=20&c=itY4m1Bf579lzbBrgsmqSysWSMbMSJmFfROZ42SlIGc=",
    "https://media.istockphoto.com/id/1214416414/pt/foto/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=Z3W90gUoP8Gjd1nQnqiCsyViSMkeqLPP2D-2rnEB9AY=",
    "https://media.istockphoto.com/id/1386932182/pt/foto/close-up-of-a-man-placing-eggs-in-the-fridge-door-shelf.jpg?b=1&s=170667a&w=0&k=20&c=gOUBeyVqbsvdxw6fHXyCLmLUOkqt9zhZ85k2Gmx4cZ4=",
    "https://media.istockphoto.com/id/886668116/pt/foto/rolled-oats-or-oat-flakes-and-golden-wheat-ears-on-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=vlH-F71AvPqBR_HA2yFKsVwtJjQtwRY0ASxjKroSBYk=",
    "https://media.istockphoto.com/id/1187668811/pt/foto/fresh-bananas-on-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=WO7VxHNoqLoGii1mbQYytOqfdzQd5dG8RQ7DGgULUQk=",
    "https://media.istockphoto.com/id/1359819435/pt/foto/halves-of-fresh-avocado-on-a-cutting-board.jpg?b=1&s=170667a&w=0&k=20&c=yBEFjXAA7ozEP6NhurN3aGWWDRweG6DKYc7bSiYDnPE=",
    "https://media.istockphoto.com/id/492787098/pt/foto/peitos-de-frango-na-t%C3%A1bua-de-corte.jpg?b=1&s=170667a&w=0&k=20&c=h8pk2QGjCUvhsEH_ndKiE2AK3Xq3gVsoI9c1u05-8aY=",
    "https://media.istockphoto.com/id/466175630/pt/foto/tomate-isolado-em-fundo-branco.jpg?b=1&s=170667a&w=0&k=20&c=Fl5q98WOH_HDauv14m4Ah5KGNnzv_l2GyLh-GRfiziI=",
]
