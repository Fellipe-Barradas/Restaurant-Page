import { FaFire } from "react-icons/fa";
function CardFood({name, image, cost, especial=false}) {
    return ( 
        <div className=" bg-slate-100 w-52 p-4  text-slate-800 rounded-md  shadow-md mb-10 cursor-pointer hover:bg-slate-200">
            <div className="flex justify-between">
            <h1 className="mb-5 text-2xl">{name}</h1>
            {!especial ? (<FaFire className="self-top text-yellow-300  animate-pulse text-xl"/>):(<></>)}
            </div>
            <div className="rounded-full overflow-hidden   border-4 border-yellow-300 shadow-md self-center"><img src={image} alt="#" /></div>
            <p className="text-center mt-5 text-green-800">{cost}R$</p>
        </div>
     );
}

export default CardFood;

