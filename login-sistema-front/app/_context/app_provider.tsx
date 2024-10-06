import { AppContext } from "./app_context";


export default function AppProvider({ children }) {
  
  return(
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}