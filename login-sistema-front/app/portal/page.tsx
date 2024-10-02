"use client";

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PortalPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/protected", { withCredentials: true });
        setIsAuthenticated(true);
      } catch {
        router.push("http://localhost:3000/portal/login");
      }
    };
    checkAuth();
  }, [router]);

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
