import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [error, SetError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("/cliente",)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setClientes(data);
                },
                (error) => {
                    setIsLoaded(true);
                    SetError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
           <ul>
            {clientes.map(cliente => (
                <li key={cliente.objectId}>
                    <Link to={`cliente/${cliente.objectId}`}>{cliente.nombre} {cliente.apellidoPaterno} {cliente.apellidoMaterno}</Link>
                </li>
            ))}            
           </ul>
        );
    }
}

 export default Home;