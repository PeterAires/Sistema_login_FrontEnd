"use client";
import FormSingUpComponent from "./_form_components/form_singup_component";


const SingUp = () => {
 
  return (
    <main className=" bg-zinc-900 p-8 rounded-xl flex-col gap-10 text-zinc-300 flex items-center justify-center">
      <h1>Criar Conta</h1>
      <FormSingUpComponent />
    </main>
  );
};

export default SingUp;
