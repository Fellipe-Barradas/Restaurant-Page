import CardFood from "../components/CardFood";
import { FaChevronDown } from "react-icons/fa";
import Comida_1 from "../imgs/comida_1.jpg"
import Comida_2 from "../imgs/comida_2.jpg"
import Comida_3 from "../imgs/comida_3.jpg"
import Comida_4 from "../imgs/comida_4.jpg"

function Menu() {
    return (
        <div className="mb-10 bg-gray-100 py-10 shadow-md">
        <div className="flex-col ">
            <h1 className="mt-10 mb-3 border-b-2 text-3xl ml-4 w-52 text-yellow-300">Mais pedidos</h1>
            <div className=" grid grid-cols-1  gap-4 sm:grid-cols-2 mt-10 lg:grid-cols-4 ml-36 sm:ml-12 md:ml-4">
            <CardFood name='Tapioca' image={Comida_1} cost='20,00'/>
            <CardFood name='Paçoca' especial='true' image={Comida_2} cost='15,99'/>
            <CardFood name='Vinagrete'  image={Comida_3} cost='20,99'/>
            <CardFood name='Macaxeira' especial='true' image={Comida_4} cost='19,99'/>
            </div>
        </div>
        <button className="bg-gray-200 p-2 rounded-full absolute right-1/2 animate-bounce"
        ><FaChevronDown/></button>
        </div> 
     );
}

export default Menu;