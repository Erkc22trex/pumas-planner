import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout()} className="bg-gradient-to-b from-blue-800 to-blue-700 text-white font-bold py-2 px-4 rounded">
            Cerrar Sesión
        </button>
    );
}

export default Logout;
