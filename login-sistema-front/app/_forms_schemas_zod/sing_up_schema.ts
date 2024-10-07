'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

  const SingUpSchema = () => {
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
        .email("E-mail inválido.")
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

  const [apiError, setApiError] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
  });
  return { register, handleSubmit, errors, apiError, setApiError };
}

export default SingUpSchema
