import CardUsers from "../components/CardUsers";

function UserStars() {
    return ( 
        <div className="flex flex-col justify-center align-middle">
        <h1 className="text-2xl my-10 bg-yellow-100 p-2   shadow-sm   rounded-md text-black">Acompanhe as notas dos nossos clientes</h1>
        <div className="mb-10  grid grid-cols-2  gap-5 self-center lg:flex">
            <CardUsers name='Alex'/>
            <CardUsers name='Diogo Defante'/>
            <CardUsers name='Cinderela'/>
            <CardUsers name='Casé'/>
        </div>
        </div>
     );
}

export default UserStars;