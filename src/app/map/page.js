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

        <circle cx={width / 2} cy="25" r="5" fill="red" />
        <circle cx={width / 2} cy={heigth - 25} r="5" fill="red" />
        <circle cx={width / 2} cy={heigth / 2} r="5" fill="red" />
        <circle cx={width / 2} cy={heigth / 2} r="5" fill="red" />

        <rect x="0" y="0" width={25} height={25} fill="green" />
        <rect x="25" y="50" width="100" height="25" fill="lightblue" />
        <rect x="25" y="100" width="100" height="25" fill="purple" />
        <rect x="25" y="200" width="100" height="25" fill="lightgreen" />

        <rect x="25" y="150" width="100" height="25" fill="orange" />
        <rect x="175" y="50" width="100" height="25" fill="lightblue" />
        <rect x="175" y="200" width="100" height="25" fill="lightgreen" />

        <rect x="175" y="150" width="100" height="25" fill="orange" />
        <rect x="175" y="100" width="100" height="25" fill="purple" />
        <rect x="275" y="275" width={25} height={25} fill="red" />
      </svg>
    </Card>
  );
}
