 'use client'

import useCheckAuth from "../_hook/use_check_auth";

const PortalPage = () => {
  const isAuthenticated = useCheckAuth();

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <main className="text-white flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-bold text-white-300">Página do Portal</h1>
      <p>Acessada apenas com autenticação.</p>
    </main>
  );
};

export default PortalPage;
