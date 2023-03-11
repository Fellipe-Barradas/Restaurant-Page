import Comida_1 from "../imgs/comida_1.jpg"
import Comida_2 from "../imgs/comida_2.jpg"


function Navbar() {
   
    return ( 
    <div className='flex  bg-yellow-300 justify-between pb-3'>
        <div className="w-80 rounded-full overflow-hidden  mt-4 ml-5 border-4 border-yellow-700 shadow-md"><img src={Comida_1} /></div>
        <div className="  self-center">
          <h1 className="  text-6xl text-yellow-100 ">Verde Brisa</h1>
          <h2 className=" text-2xl ml-10">Melhor restaurante de família</h2>
        </div>
        <div className=" self-center"> 
            <ul>
              <li className=" bg-gradient-to-r from-yellow-400 to-yellow-500 text-center  rounded-md p-1 mt-2 mr-3 hover:from-yellow-200">
                <a href="#">Comidas</a></li>
              <li className=" bg-gradient-to-r from-yellow-400 to-yellow-500 text-center  rounded-md p-1 mt-2 mr-3 hover:from-yellow-200">
                <a href="#">Receitas</a></li>
              <li className=" bg-gradient-to-r from-yellow-400 to-yellow-500 text-center  rounded-md p-1 mt-2 mr-3 hover:from-yellow-200">
                <a href="#">Sobre nós</a></li>
              <li className=" bg-gradient-to-r from-yellow-400 to-yellow-500 text-center  rounded-md p-1 mt-2 mr-3 hover:from-yellow-200">
                <a href="#">Localização</a></li>
            </ul>
        </div>
    </div> 
    );
}

export default Navbar;