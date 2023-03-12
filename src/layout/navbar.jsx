import Comida_1 from "../imgs/comida_1.jpg"



function Navbar() {
   
    return ( 
    <div className='flex-col md:flex-row flex  justify-between pb-3 bg-slate-50 border-b-2 border-slate-100'>
        <div className="w-80 rounded-full overflow-hidden  mt-4 ml-5 border-4 border-yellow-700 shadow-md self-center"><img src={Comida_1} /></div>
        <div className="  self-center">
          <h1 className="  text-6xl text-yellow-300  mt-10 md:mt-0 ">Verde Brisa</h1>
          <h2 className=" text-2xl ml-10 mb-12 md:mb-0">Melhor restaurante de família</h2>
        </div>
        <div className=" self-center"> 
            <ul className="flex md:flex-col">
              <li className=" bg-gradient-to-r bg-yellow-400  text-center  rounded-md p-1 mt-2 mr-3 hover:bg-yellow-100">
                <a href="#">Comidas</a></li>
              <li className=" bg-gradient-to-r bg-yellow-400  text-center  rounded-md p-1 mt-2 mr-3 hover:bg-yellow-100">
                <a href="#">Receitas</a></li>
              <li className=" bg-gradient-to-r bg-yellow-400  text-center  rounded-md p-1 mt-2 mr-3 hover:bg-yellow-100">
                <a href="#">Sobre nós</a></li>
              <li className=" bg-gradient-to-r bg-yellow-400  text-center  rounded-md p-1 mt-2 mr-3 hover:bg-yellow-100">
                <a href="#">Localização</a></li>
            </ul>
        </div>

    </div> 
    );
}

export default Navbar;