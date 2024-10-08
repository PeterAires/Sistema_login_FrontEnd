import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function useAuthentication() {
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
  return isAuthenticated
}
export default useAuthentication