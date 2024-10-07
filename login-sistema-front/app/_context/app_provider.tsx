import  SingUpSchema  from "../_forms_schemas_zod/sing_up_schema";
import { SingUpRequest } from "../_requests/sing_up_request";
import { AppContext } from "./app_context";

export default function AppProvider({ children }) {
  

  return (
    <AppContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        apiError,
        setApiError,
        criarConta,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
