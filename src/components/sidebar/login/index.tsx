import Input from "../../input";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Register from "../register";

interface SideBarProps {
  closeSidebar: () => void;
}

function Login({ closeSidebar }: SideBarProps) {
  const [activeSidebar, setActiveSidebar] = useState<null | string>(null);

  return (
    <div className="fixed top-0 right-0 flex flex-col w-[630px] h-[1024px] bg-[#393939] text-white">
      <IoIosClose
        size={38}
        className="absolute top-4 right-4 text-white cursor-pointer"
        onClick={closeSidebar}
      />
      <div className="mt-[100px] text-center">
        <h1 className="text-[24px] font-bold">Bem-vindo de volta</h1>
        <p className="text-[16px] mt-2">Faça login para acessar sua conta</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form className="mt-[50px] flex flex-col items-center w-[522px] space-y-6 text-white">
          <Input
            type="email"
            placeholder="Digite seu email"
            className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-transparent rounded-none border-b-2 border-[#8DBF7D] focus:outline-none focus:ring-0 placeholder:text-[#B5B5B5]"
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-transparent rounded-none border-b-2 border-[#8DBF7D] focus:outline-none focus:ring-0 placeholder:text-[#B5B5B5]"
          />
          <button
            type="submit"
            className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#597054] rounded-lg"
          >
            Entrar
          </button>
        </form>
        <div className="mt-[20px] flex justify-start w-full px-[60px]">
          <p className="text-[14px]">
            Não tem uma conta?{" "}
            <span
              className="text-[#8DBF7D] cursor-pointer"
              onClick={() => setActiveSidebar("register")}
            >
              Cadastre-se
            </span>
          </p>
        </div>
      </div>
      {activeSidebar === "register" && <Register closeSidebar={closeSidebar} />}
    </div>
  );
}

export default Login;
