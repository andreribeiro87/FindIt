# Some guides to help everybody

## How to add images in a simple way

First Way:

```js
import Image from "next/image";
import logo from "../public/myImage.svg"; // Change here the path to your
// image and save it as some name

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
```

Second way:

```js
import Image from "next/image";

export default function Home() {
  return (
    <div>
      IMPORTANT: ALL PATHS IN NEXT JS SHOULD START WITH -> /
      <Image src="/myImage.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
```

## data:

- info para supermercados
- info de produtos

## super:

mercadoana
Auchan
continente

### info super:

localizacao/distancia:
acessibilidade true/false
detalhes #TODO

## produtos:

- preco
- nome
- imagem
- descricao -> cenas caloricas
- qtd
- supermercado
