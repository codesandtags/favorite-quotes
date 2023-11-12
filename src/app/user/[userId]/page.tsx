export default function UserPage({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h1>Hi {params.userId}</h1>
    </div>
  );
}
