import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar Sesión
        </button>
    );
}

export default Login;
