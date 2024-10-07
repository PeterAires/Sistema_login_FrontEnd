import { AppContext } from "./app_context";

//aplicando branch
export default function AppProvider({ children }) {
  
  return(
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}