/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
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

  return (
    <main className=" bg-zinc-900 p-8 rounded-xl flex-col gap-10 text-zinc-300 flex items-center justify-center">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(LogarUsuario)}
        className=" flex-col flex gap-4 w-full max-w-xs"
      >
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type=""
            {...register("email")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.email && <span className="text-red-700 text-xs">{errors.email.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Senha</label>
          <Input
            type="password"
            {...register("password")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.password && <span className="text-red-700 text-xs">{errors.password.message}</span>}
        </div>
        {apiError && <span className="text-red-600 text-sm">{apiError}</span>}
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Entrar
        </Button>
      </form>
    </main>
  );
};

export default LoginForm;
