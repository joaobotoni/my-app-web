import Input from "../../input";
import { IoIosClose } from "react-icons/io";

interface SideBarProps {
    closeSidebar: () => void;
}


function Login({ closeSidebar }: SideBarProps) {
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
                <form
                    className="mt-[50px] flex flex-col items-center w-[522px] space-y-6 text-white"
                >
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#6C6565] rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D]"
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#6C6565] rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8DBF7D]"
                    />
                    <button
                        type="submit"
                        className="w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#597054] rounded-lg"
                    >
                        Entrar
                    </button>
                </form>
                <div className="mt-[20px]">
                    <p className="text-[14px]">
                        Não tem uma conta?{" "}
                        <span className="text-[#8DBF7D] cursor-pointer">Cadastre-se</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login
