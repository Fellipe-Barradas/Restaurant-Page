import { useEffect, useState } from "react";
import { FaLaughBeam } from "react-icons/fa";
function CardUsers({name}) {
    
    return ( 
        <>
      <div className="bg-gray-100 w-60 
        flex-col text-center h-32 p-2 ">
            <h1 className="text-2xl mb-6 mt-4">{name}</h1>
            <div className="flex justify-between w-32 text-xl m-auto text-green-300">
            <FaLaughBeam className="text-3xl"/>
            <FaLaughBeam
            className="text-3xl"/>
            <FaLaughBeam
            className="text-3xl"/>
            </div>
            <div></div>
        </div>
        </>
     );
}

export default CardUsers;