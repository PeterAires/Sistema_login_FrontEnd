'use client'

import Link from "next/link";
import { useAppContext } from "./_hook/use_app_context";

export default function Home() {

  const { teste, errors } = useAppContext()
  return (
    <main className=" flex min-h-screen flex-col items-center p-24">
      <h1 className=" text-xl font-bold"> Homepage do Site</h1>
      <hr />      
      <nav className=" mt-6 gap-6 justify-between flex">
        <h1 className=" p-4 bg-red-600">{teste}</h1>
        <h1 className=" p-4 bg-red-600">{errors}</h1>
        <Link className="text-blue-500" href="/portal">
          Acesse o portal
        </Link>
        <Link className="text-blue-500" href="/portal/cadastro">
          Crie uma conta
        </Link>
      </nav>
    </main>
  );
}
