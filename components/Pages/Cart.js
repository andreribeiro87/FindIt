import Card from "@mui/joy/Card";
import ProductSearchCard from "../ProductSearchCard";

export default function Cart({ products }) {
  return (
    <Card
      color="success"
      variant="soft"
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "2%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "85%",
        height: "78%",
      }}
    >
      {products.map((product) => (
        <ProductSearchCard key={product.id} product={product} />
      ))}

      {/* TODO CARTOES  */}

      {/*<ProductDetails /> */}
    </Card>
  );
}
