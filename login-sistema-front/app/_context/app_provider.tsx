"use client";
import { AppContext } from "./app_context";
import SingUpSchema from "../_forms_schemas_zod/sing_up_schema";
import LoginSchema from "../_forms_schemas_zod/login_schema";

export default function AppProvider({ children }) {
  const SingUp = SingUpSchema();
  const SUapiError = SingUp.apiError;
  const SUcriarConta = SingUp.criarConta;
  const SUerrors = SingUp.errors;
  const SUhandleSubmit = SingUp.handleSubmit;
  const SUregister = SingUp.register;

  const Login = LoginSchema();
  const LGlogarUsuario = Login.LogarUsuario;
  const LGapiError = Login.apiError;
  const LGerrors = Login.errors;
  const LGhandleSubmit = Login.handleSubmit;
  const LGregister = Login.register;

  return (
    <AppContext.Provider
      value={{
        SUapiError,
        SUcriarConta,
        SUerrors,
        SUhandleSubmit,
        SUregister,
        LGlogarUsuario,
        LGapiError,
        LGerrors,
        LGhandleSubmit,
        LGregister,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
