import { useContext } from "react";
import { AppContext } from "../_context/app_context";


export function useAppContext() {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('Não esta dentro do contexto')
  }

  return context
}