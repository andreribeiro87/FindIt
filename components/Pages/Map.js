import Card from "@mui/joy/Card";

export default function Map() {
  let width = 300;
  let heigth = 300;
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
      <svg width="400" height="400">
        <rect
          x="0"
          y="0"
          width={width}
          height={heigth}
          fill="none"
          stroke="black"
          stroke-width="2"
        />

        <circle cx="25" cy="25" r="25" fill="red" />

        <rect x="0" y="0" width={25} height={25} fill="green" />
        <rect x="25" y="75" width="100" height="25" fill="lightblue" />
        <rect x="25" y="225" width="100" height="25" fill="lightgreen" />

        <rect x="25" y="175" width="100" height="25" fill="orange" />
        <rect x="25" y="125" width="100" height="25" fill="purple" />
        <rect x="175" y="75" width="100" height="25" fill="lightblue" />
        <rect x="175" y="225" width="100" height="25" fill="lightgreen" />

        <rect x="175" y="175" width="100" height="25" fill="orange" />
        <rect x="175" y="125" width="100" height="25" fill="purple" />
        <rect x="275" y="275" width={25} height={25} fill="red" />
      </svg>
    </Card>
  );
}
