import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api"; // Ajuste o caminho conforme necessário

const useCheckAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/protected", { withCredentials: true });
        setIsAuthenticated(true);
      } catch {
        router.push("/portal/login");
      }
    };
    checkAuth();
  }, [router]);

  return isAuthenticated;
};

export default useCheckAuth;
