import CardUsers from "../components/CardUsers";

function UserStars() {
    return ( 
        <>
        <h1 className="text-2xl my-10 ml-2">Acompanhe as notas dos nossos clientes</h1>
        <div className="mb-10  flex justify-around">
            <CardUsers name='Alex'/>
            <CardUsers name='Diogo Defante'/>
            <CardUsers name='Cinderela'/>
        </div>
        </>
     );
}

export default UserStars;