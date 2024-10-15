import api from "@/lib/api";

interface  SingUpData {
    name: string,
    email: string,
    password: string
}

export const SingUpQuery = async (data: SingUpData) => {
  const { name, email, password } = data;

      const response = await api.post("/portal/cadastro", {
        name,
        email,
        password,
      });
      return response.data
}