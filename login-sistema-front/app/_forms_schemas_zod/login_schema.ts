import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import api from "@/lib/api";
import { useRouter } from "next/navigation";

function LoginSchema(){
  const router = useRouter();

  const createAccountFormSchema = z.object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatorio.")
      .email('E-mail inválido.')
      .toLowerCase()
      .trim(),
    password: z.string().min(6, "Minimo de 6 caracteres.").trim(),
  });

  type createAccountFormData = z.infer<typeof createAccountFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
  });

  const [apiError, setApiError] = useState();

  const LogarUsuario = async (data: createAccountFormData) => {
    const { email, password } = data;
    try {
      const response = await api.post("/portal/login", { email, password });
      router.push("http://localhost:3000/portal");
      console.log(response.data);
    } 
    catch (error: any) {
      setApiError(error.response ? error.response.data.error : error.message);
    }
  };
  return {register, handleSubmit, errors, apiError, LogarUsuario}
}
export default LoginSchema