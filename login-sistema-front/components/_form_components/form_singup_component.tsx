import { useAppContext } from "@/app/_hook/use_app_context";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FormSingUpComponent = () => {

  const { apiError, handleSubmit, register, criarConta, errors } = useAppContext()

  return ( 
    <div>
      <form
        onSubmit={handleSubmit(criarConta)}
        className=" flex-col flex gap-4 w-full max-w-xs"
      >
        <div className=" flex flex-col gap-1">
          <label>Nome</label>
          <Input
            type="text"
            {...register("name")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.name && <span className="text-red-700 text-xs">{errors.name.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type="email"
            {...register("email")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.email && <span className="text-red-700 text-xs">{errors.email.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Senha</label>
          <Input
            type="password"
            {...register("password")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.password && <span className="text-red-700 text-xs">{errors.password.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Conferir senha</label>
          <Input
            type="password"
            {...register("checkPassword")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {errors.checkPassword && <span className="text-red-700 text-xs">{errors.checkPassword.message}</span>}
        </div>
        {apiError && <span className="text-red-600">{apiError}</span>}
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Criar conta
        </Button>
      </form>
    </div>
   );
}
 
export default FormSingUpComponent;