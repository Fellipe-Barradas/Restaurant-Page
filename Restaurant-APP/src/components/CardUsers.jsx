import { useEffect, useState } from "react";
import { FaLaughBeam } from "react-icons/fa";
function CardUsers({name}) {
    
    return ( 
        <>
      <div className="bg-gray-200   w-40 sm:w-52
        flex-col text-center  p-2  ">
            <h1 className="text-2xl mb-6 mt-4">{name}</h1>
            <div className="flex justify-between  w-28 sm:32 sm:xl text-lg m-auto text-green-600 ">
            <FaLaughBeam className="text-3xl"/>
            <FaLaughBeam
            className="text-3xl"/>
            <FaLaughBeam
            className="text-3xl"/>
            </div>
        </div>
        </>
     );
}

export default CardUsers;