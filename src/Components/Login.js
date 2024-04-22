import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <button onClick={() => loginWithRedirect()} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Iniciar Sesión
            </button>
            <Link to="/register">
                <button className="bg-blue-800 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ml-4">
                    Registrarse
                </button>
            </Link>
        </div>
    );
}

export default Login;
