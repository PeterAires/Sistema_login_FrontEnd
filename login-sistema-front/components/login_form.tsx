/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

"use client";

import { useAppContext } from "@/app/_hook/use_app_context";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const LoginForm = () => {
 
  const { LGregister, LGhandleSubmit, LGerrors, LGapiError, LGLogarUsuario} = useAppContext()

  return (
    <main className=" bg-zinc-900 p-8 rounded-xl flex-col gap-10 text-zinc-300 flex items-center justify-center">
      <h1>Login</h1>
      <form
        onSubmit={LGhandleSubmit(LGLogarUsuario)}
        className=" flex-col flex gap-4 w-full max-w-xs"
      >
        <div className=" flex flex-col gap-1">
          <label>E-mail</label>
          <Input
            type=""
            {...LGregister("email")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {LGerrors.email && <span className="text-red-700 text-xs">{LGerrors.email.message}</span>}
        </div>
        <div className=" flex flex-col gap-1">
          <label>Senha</label>
          <Input
            type="password"
            {...LGregister("password")}
            className=" border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-900"
          />
          {LGerrors.password && <span className="text-red-700 text-xs">{LGerrors.password.message}</span>}
        </div>
        {LGapiError && <span className="text-red-600 text-sm">{LGapiError}</span>}
        <Button className="bg-purple-950 rounded font-semibold text-white h-10">
          Entrar
        </Button>
      </form>
    </main>
  );
};

export default LoginForm;
