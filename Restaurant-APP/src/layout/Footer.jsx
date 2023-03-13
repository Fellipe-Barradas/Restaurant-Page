import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa";
import location from "../imgs/locke.png"
function Footer() {
    return ( 
    <div className="flex justify-between bg-gray-800 text-white p-5">
        <div>
            <h1 className="text-2xl border-b-2 border-gray-200 mb-5">Redes sociais</h1>
            <div className="p-1 rounded-lg shadow-lg flex hover:bg-gray-400 transition duration-300 border text-white">
                <p>Instagram </p>
                <FaInstagramSquare className=" self-center ml-3"/>
            </div>
            <div className=" p-1 rounded-lg shadow-lg flex hover:bg-gray-400 transition duration-300 border text-white mt-2">
                <p >Facebook </p>
                <FaFacebook className=" self-center ml-4"/>
            </div>
            <div className=" p-1 rounded-lg shadow-lg flex hover:bg-gray-400 transition duration-300 border text-white mt-2">
                <p><a href="https://github.com/Fellipe-Barradas">Git Hub </a></p>
                <FaGithub className=" self-center ml-[29px]"/>
            </div>
        </div>
        <div>
            <h1 className="text-2xl border-b-2 border-gray-200 mb-5">Localização</h1>
            <img src={location} alt="Localização no mapa"  className="w-52  h-28"/>
        </div>
    </div> );
}

export default Footer;