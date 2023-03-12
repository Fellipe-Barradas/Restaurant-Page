import CardFood from "../components/CardFood";
import Comida_1 from "../imgs/comida_1.jpg"
import Comida_2 from "../imgs/comida_2.jpg"

function Menu() {
    return ( 
        <div className="flex-col ">
            <h1 className="mt-10 mb-3 border-b-2 text-2xl ml-4 w-44 text-gray-800">Mais pedidos</h1>
            <div className="flex justify-around">
            <CardFood name='Tapioca' image={Comida_1} cost='20,00'/>
            <CardFood name='Paçoca' especial='true' image={Comida_2} cost='15,99'/>
            </div>
        </div>
     );
}

export default Menu;