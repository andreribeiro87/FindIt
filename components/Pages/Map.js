import Card from "@mui/joy/Card";

export default function Map() {
  return (
    <Card
      color="warning"
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
      map
      {/* TODO map  */}
    </Card>
  );
}
