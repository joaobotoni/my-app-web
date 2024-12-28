import { useState } from "react";
import { IoMdExit } from "react-icons/io";
import HomeSideBar from "../../components/sidebar/home";

function Header() {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);
    return (
        <header>
            <div className="flex items-center justify-end space-x-4 p-4">
                <ul className="flex space-x-4">
                    <li><a href="#sobre">Contate-nos</a></li>
                    <li><a href="#servicos">Sobre</a></li>
                </ul>
                <button
                    className="flex items-center border-2 border-[#597054] text-white bg-transparent hover:bg-[#597054] px-4 py-1 rounded-lg"
                    onClick={showSideBar}
                >
                    <p>Acesse sua conta</p>
                    <IoMdExit className="ml-2" />
                </button>
            </div>
            {sidebar && <HomeSideBar closeSidebar={() => setSidebar(false)} />}
        </header>
    );
}

export default Header;
