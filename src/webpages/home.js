import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [error, SetError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cliente", 
        {        
            
            headers : {
                "Access-Control-Allow-Headers": "http://localhost:8080",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                "Access-Control-Allow-Methods": "http://localhost:8080"      
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setUsers(data);
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
                {users.map(user => (
                    <div>
                        {user.nombre}
                    </div>
                    //<li key={user.id}>
                        //<Link to={`user/${user.id}`}>{user.name}</Link>
                    //</li>
                ))}
            </ul>
        );
    }
}

 export default Home;