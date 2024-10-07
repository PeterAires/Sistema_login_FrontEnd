'use client'

import { useState } from "react";
import { AppContext } from "./app_context";
import SingUpSchema from "../_forms_schemas_zod/sing_up_schema";


export default function AppProvider({children}){

  const {apiError, errors, handleSubmit, register, setApiError} = SingUpSchema()
  const [teste, setTeste] = useState(2)

  return (
    <AppContext.Provider value={{teste, setTeste, apiError, errors, handleSubmit, register, setApiError}}>
      {children}
    </AppContext.Provider>
  )
}
