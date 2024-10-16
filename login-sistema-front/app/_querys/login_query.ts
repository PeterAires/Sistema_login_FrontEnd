import api from "@/lib/api";

interface LoginQueryData {
  email: string,
  password: string
}

const LoginQuery = async (data: LoginQueryData) => {

  const { email, password } = data

  const response = await api.post("/portal/login", { email, password })

  return response.data
  
}
 
export default LoginQuery;

/* const [apiError, setApiError] = useState();

  const LogarUsuario = async (data: createAccountFormData) => {
    const { email, password } = data;
    try {
      ;
      router.push("http://localhost:3000/portal");
      console.log(response.data);
    } 
    catch (error: any) {
      setApiError(error.response ? error.response.data.error : error.message);
    }
  }; */