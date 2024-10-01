"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";


const SingUp = () => {
  const router = useRouter();

  const createAccountFormSchema = z
    .object({
      name: z
        .string()
        .trim()
        .min(3, "Minimo de 3 caracteres")
        .nonempty("O nome é obrigatorio."),
      email: z
        .string()
        .nonempty("O e-mail é obrigatorio.")
        .email('E-mail inválido.')
        .toLowerCase()
        .trim(),
      password: z.string().min(6, "Minimo de 6 caracteres.").trim(),
      checkPassword: z.string().min(6, "Minimo de 6 caracteres.").trim(),
    })
    .refine((data) => data.checkPassword === data.password, {
      message: "As senhas não conferem",
      path: ["checkPassword"],
    });

  type createAccountFormData = z.infer<typeof createAccountFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
  });

  const [apiError, setApiError] = useState('')

  const criarConta = async (data: createAccountFormData) => {
    const { name, email, password } = data;
    try {
      await api.post("/portal/cadastro", {
        name,
        email,
        password,
      });
      toast.success('Conta criada com sucesso!')
      router.push("http://localhost:3000/portal/login"); 
    } catch {
      setApiError('Usuario já cadastrado.')
    }
  };

  return (
    <main className=" bg-zinc-900 p-8 rounded-xl flex-col gap-10 text-zinc-300 flex items-center justify-center">
      <h1>Criar Conta</h1>
      <form
        onSubmit={handleSubmit(criarConta)}
        className=" flex-col flex gap-4 w-full max-w-xs"
      >
        <div className=" flex flex-col gap-1">
          <label>Nome</label>
          <Input
            type="text"
            {...register("name")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.name && <span className="text-red-700 text-xs">{errors.name.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type="email"
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
        <div className=" flex flex-col gap-1">
          <label>Conferir senha</label>
          <Input
            type="password"
            {...register("checkPassword")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.checkPassword && <span className="text-red-700 text-xs">{errors.checkPassword.message}</span>}
        </div>
        {apiError && <span className="text-red-600">{apiError}</span>}
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Criar conta
        </Button>
      </form>
    </main>
  );
};

export default SingUp;
