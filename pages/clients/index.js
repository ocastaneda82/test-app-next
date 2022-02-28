import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Clients Page</h1>
    </div>
  );
}

export default ClientProjectsPage;
