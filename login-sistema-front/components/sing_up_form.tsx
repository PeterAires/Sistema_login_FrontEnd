"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import axios from 'axios'

const SingUp = () => {

  const router = useRouter()

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
        .email()
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

  const criarConta = async (data: createAccountFormData) => {
    const { name, email, password } = data;
    try {
      await  axios.post("http://localhost:3333/portal/cadastro", {
        name,
        email,
        password,
      });
      console.log('deu certo')
      router.push('http://localhost3000/portal/login')
    } catch {
      throw new Error("falhou");
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
            type=""
            {...register("name")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type=""
            {...register("email")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Senha</label>
          <Input
            type=""
            {...register("password")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Conferir senha</label>
          <Input
            type=""
            {...register("checkPassword")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.checkPassword && <span>{errors.checkPassword.message}</span>}
        </div>
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Criar conta
        </Button>
      </form>
    </main>
  );
};

export default SingUp;
