"use client";

import useAuthentication from "../_hook/use_authentication";


export default function PortalPage() {
  
  const isAuthenticated = useAuthentication()

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <main className=" text-white flex min-h-screen flex-col items-center p-24">
      <h1 className=" text-xl font-bold text-white-300">Pagina do Portal</h1>
      <p>Acessada apenas com autenticação.</p>
    </main>
  );
}
