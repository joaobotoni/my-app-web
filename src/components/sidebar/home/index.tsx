import { IoIosClose } from "react-icons/io";
import { BsPatchCheck } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";

interface HomeSideBarProps {
    closeSidebar: () => void;
}

function HomeSideBar({ closeSidebar }: HomeSideBarProps) {
    return (
        <div className="fixed top-0 right-0 flex flex-col items-center w-[630px] h-[1024px] bg-[#393939] text-white">
            <IoIosClose
                size={38}
                className="absolute top-4 right-4 text-white cursor-pointer"
                onClick={closeSidebar}
            />
            <div className="mt-[170px] text-center font-bold">
                <p className="text-[20px]">
                    Do campo a você, sem intermediários, com o <br />
                    compromisso de entregar o que há de melhor.
                </p>
            </div>
            <div className="mt-[140px] flex space-x-6">
                <div className="w-[150px] h-[150px] bg-[#6C6565] rounded-lg">
                    <MdOutlineHandshake className="m-[10px] text-[30px]" />
                    <p className="mt-[80px] ml-[10px]">Compromisso</p>
                </div>
                <div className="w-[150px] h-[150px] bg-[#6C6565] rounded-lg">
                    <BsPatchCheck className="m-[10px] text-[30px]" />
                    <p className="mt-[80px] ml-[10px]">Qualidade</p>
                </div>
                <div className="w-[150px] h-[150px] bg-[#6C6565] rounded-lg">
                    <FaShieldAlt className="m-[10px] text-[30px]" />
                    <p className="mt-[80px] ml-[10px]">Segurança</p>
                </div>
            </div>
            <div className="mt-[100px] flex flex-col space-y-6">
                <button className="w-[522px] h-[70px] bg-[#597054] rounded-lg">Acessar minha conta</button>
                <button className="w-[522px] h-[70px] border-2 border-[#597054] rounded-lg">Cadastrar-se</button>
            </div>
        </div>
    );
}

export default HomeSideBar;
