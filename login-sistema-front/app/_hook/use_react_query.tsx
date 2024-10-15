import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import checkAuthQuery from "../_querys/check_auth";
import { SingUpQuery } from "../_querys/sing_up_query";

const useCheckAuth = () => {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["checkauth"],
    queryFn: checkAuthQuery,
  });
  if (error) {
    router.push("/portal/login");
  }
  return { data, isLoading };
};

const useSingUp = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: SingUpQuery,
    onSuccess: () => {
      router.push("/portal/login");
    },
    onError: () => {
      console.log("error");
    },
  });
  return mutation;
};

export const useReactQuery = {
  useCheckAuth,
  useSingUp
}