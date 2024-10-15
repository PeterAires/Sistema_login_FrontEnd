import api from "@/lib/api"

const checkAuthQuery = async () => {
  console.log('fetching...')
  const data = await api.get("/protected", { withCredentials: true })
  
  return data.data
}
 
export default checkAuthQuery