
import Header from '../../components/header';
import { CiCircleCheck } from "react-icons/ci";

function Home() {

    return (
        <>
            <Header />
            <div className="flex justify-between m-20">
                <div >
                    <h1 className="text-[50px] font-bold">Qualidade Orgânica Aprovada <br />Sempre!</h1>
                    <p>Conecte-se direto com quem produz. Sem intermediários!</p>
                    <div className='mt-10'>
                        <button className="flex items-center bg-[#597054] px-4 py-3 rounded-lg">
                            <span>Saiba Mais</span>
                        </button>
                    </div>
                </div>
                <div className="mr-[40px]">
                    <div className="w-[465px] h-[502px] border-2 border-[#597054] rounded-xl flex flex-col justify-between pt-[80px] pb-[80px] pl-[50px]">
                        <div className="flex items-center space-x-4 mb-4">
                            <CiCircleCheck className="text-[50px]" />
                            <p className="flex-1">Produtos orgânicos acessível para <br />todos na região</p>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <CiCircleCheck className="text-[50px]" />
                            <p className="flex-1">Garantindo qualidade do início ao fim.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CiCircleCheck className="text-[50px]" />
                            <p className="flex-1">Conectando você a produtos orgânicos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home