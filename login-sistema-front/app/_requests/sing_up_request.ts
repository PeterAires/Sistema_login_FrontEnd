'use client'

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAppContext } from "../_hook/use_app_context";

interface SingUpRequestData {
  name: string,
  email: string,
  password: string,
}

export function SingUpRequest() {

  const router = useRouter();
  const { setApiError } = useAppContext()

  const criarConta = async (data: SingUpRequestData): Promise<void> => {
    const { name, email, password } = data;
    try {
      await api.post("/portal/cadastro", {
        name,
        email,
        password,
      });
      router.push("http://localhost:3000/portal/login"); 
    } catch {
      setApiError('Usuario já cadastrado.')
    }
  };
  return criarConta
}