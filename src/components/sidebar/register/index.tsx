import Input from "../../input";
import Login from "../login";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

interface SideBarProps {
    closeSidebar: () => void;
}

function Register({ closeSidebar }: SideBarProps) {
    const [activeSidebar, setActiveSidebar] = useState<null | string>(null);

    return (
        <div className="fixed top-0 right-0 flex flex-col w-[630px] h-[1024px] bg-[#393939] text-white">
            <IoIosClose
                size={38}
                className="absolute top-4 right-4 text-white cursor-pointer"
                onClick={closeSidebar} 
            />
            <div className="mt-[100px] text-center">
                <h1 className="text-[24px] font-bold">Olá seja bem-vindo</h1>
                <p className="text-[16px] mt-2">Faça o seu registro</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <form
                    className="mt-[50px] flex flex-col items-center w-[522px] space-y-6 text-white"
                >
                    <Input
                        type="text"
                        placeholder="Digite seu Nome"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#B7B7B7]/40 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D] placeholder:text-[#B5B5B5]"
                    />
                    <Input
                        type="text"
                        placeholder="Digite seu Telefone"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#B7B7B7]/40 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D] placeholder:text-[#B5B5B5]"
                    />
                    <Input
                        type="email"
                        placeholder="Digite seu Email"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#B7B7B7]/40 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D] placeholder:text-[#B5B5B5]"
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#B7B7B7]/40 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D] placeholder:text-[#B5B5B5]"
                    />
                    <button
                        type="submit"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#597054] rounded-lg"
                    >
                        Cadastrar-se
                    </button>
                </form>
                <div className="mt-[20px] flex justify-start w-full px-[60px]">
                    <p className="text-[14px]">
                        Já tem uma conta?{" "}
                        <span
                            className="text-[#8DBF7D] cursor-pointer"
                            onClick={() => setActiveSidebar("login")}
                        >
                            Entrar
                        </span>
                    </p>
                </div>
            </div>
            {activeSidebar === "login" && (
                <Login closeSidebar={closeSidebar} /> 
            )}
        </div>
    );
}

export default Register;
