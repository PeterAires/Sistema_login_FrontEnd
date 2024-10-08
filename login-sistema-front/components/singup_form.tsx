'use client'

import { useAppContext } from "@/app/_hook/use_app_context"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function SingUpForm(){

  const { SUregister, SUhandleSubmit, SUerrors, SUapiError, SUcriarConta} = useAppContext()

  return(
    <main className=" bg-zinc-900 p-8 rounded-xl flex-col gap-10 text-zinc-300 flex items-center justify-center">
      <h1>Criar Conta</h1>
      <div>
      <form
        onSubmit={SUhandleSubmit(SUcriarConta)}
        className=" flex-col flex gap-4 w-full max-w-xs"
      >
        <div className=" flex flex-col gap-1">
          <label>Nome</label>
          <Input
            type="text"
            {...SUregister("name")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {SUerrors.name && <span className="text-red-700 text-xs">{SUerrors.name.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type="email"
            {...SUregister("email")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {SUerrors.email && <span className="text-red-700 text-xs">{SUerrors.email.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Senha</label>
          <Input
            type="password"
            {...SUregister("password")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {SUerrors.password && <span className="text-red-700 text-xs">{SUerrors.password.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Conferir senha</label>
          <Input
            type="password"
            {...SUregister("checkPassword")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {SUerrors.checkPassword && <span className="text-red-700 text-xs">{SUerrors.checkPassword.message}</span>}
        </div>
        {SUapiError && <span className="text-red-600">{SUapiError}</span>}
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Criar conta
        </Button>
      </form>
    </div>
    </main>
  )
}
export default SingUpForm