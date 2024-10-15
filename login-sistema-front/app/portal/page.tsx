 'use client'

import { useReactQuery } from "../_hook/use_react_query";




const PortalPage = () => {

    const {data, isLoading} = useReactQuery.useCheckAuth()
   
  console.log(data)
  if (!data && isLoading) {
    return <h1 className="bg-red-700">LOADING...</h1>
  }

  /* const isAuthenticated = useCheckAuth();

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  } */

  return (
    <main className="text-white flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-bold text-white-300">Página do Portal</h1>
      <p>Acessada apenas com autenticação.</p>
      
    </main>
  );
};

export default PortalPage;
