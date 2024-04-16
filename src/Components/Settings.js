import React, { useState } from 'react';

const Configuracion = () => {
    // Estado para controlar el modo oscuro
    const [modoOscuro, setModoOscuro] = useState(false);

    // Estado para controlar las notificaciones
    const [notificacionesActivas, setNotificacionesActivas] = useState(true);

    // Función para cambiar el estado del modo oscuro
    const toggleModoOscuro = () => {
        setModoOscuro(!modoOscuro);
        // Aquí podrías guardar el estado en localStorage o en alguna API para mantener la preferencia del usuario
    };

    // Función para cambiar el estado de las notificaciones
    const toggleNotificaciones = () => {
        setNotificacionesActivas(!notificacionesActivas);
        // Aquí podrías guardar el estado en localStorage o en alguna API para mantener la preferencia del usuario
    };

    return (
        <div>
            <h2>Configuraciones</h2>
            <div>
                <label htmlFor="modoOscuro">Modo Oscuro:</label>
                <input
                    type="checkbox"
                    id="modoOscuro"
                    checked={modoOscuro}
                    onChange={toggleModoOscuro}
                />
            </div>
            <div>
                <label htmlFor="notificaciones">Notificaciones:</label>
                <input
                    type="checkbox"
                    id="notificaciones"
                    checked={notificacionesActivas}
                    onChange={toggleNotificaciones}
                />
            </div>
        </div>
    );
};

export default Configuracion;
