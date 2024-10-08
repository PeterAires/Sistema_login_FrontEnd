'use client'
import FormSingUpComponent from "@/components/_form_components/form_singup_component";
import { AppContext } from "./app_context";


export default function AppProvider({children}){

  const {register, handleSubmit, errors, apiError, LogarUsuario} = FormSingUpComponent()

  return (
    <AppContext.Provider value={{register, handleSubmit, errors, apiError, LogarUsuario}}>
      {children}
    </AppContext.Provider>
  )
}
