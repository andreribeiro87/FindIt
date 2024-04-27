import Card from "@mui/joy/Card";

export default function Cart() {
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
      cartoes
      {/* TODO CARTOES  */}
    </Card>
  );
}
