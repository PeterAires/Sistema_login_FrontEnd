'use client'
import FormSingUpComponent from "@/components/_form_components/form_singup_component";
import { AppContext } from "./app_context";
import SingUpSchema from "../_forms_schemas_zod/sing_up_schema";


export default function AppProvider({children}){

  const {apiError,criarConta,errors,handleSubmit,register} = SingUpSchema()

  return (
    <AppContext.Provider value={{register, handleSubmit, errors, apiError, criarConta}}>
      {children}
    </AppContext.Provider>
  )
}
