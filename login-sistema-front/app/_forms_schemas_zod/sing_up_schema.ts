"use client";

import api from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function SingUpSchema() {
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
      router.push("http://localhost:3000/portal/login"); 
    } catch {
      setApiError('Usuario já cadastrado.')
    }
  };
  return { register, handleSubmit, errors, apiError, criarConta}
};

export default SingUpSchema;
