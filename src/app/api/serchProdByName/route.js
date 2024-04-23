export async function GET() {
  const res = await fetch("localhost:3000/produto", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();

  return Response.json(data);
}
