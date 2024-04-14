import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Calendar() {
  const [misEventos, setMisEventos] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      axios.get(`http://localhost:5000/eventos/filtrar/${user.sub}`)
        .then(res => {
          setMisEventos(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isAuthenticated, user]);

  const addToGoogleCalendar = (evento) => {
    // Aquí deberías implementar la lógica para agregar el evento al calendario de Google
    // Puedes utilizar la API de Google Calendar o algún paquete externo para facilitar esta tarea
    console.log("Agregando evento al calendario de Google:", evento);
  };

  return (
    <div className="w-full h-full bg-blue-800 p-4 rounded-lg overflow-hidden">
      <div className="text-l font-bold text-white mt-4 mb-2">EVENTOS CREADOS</div>
      <div className="max-h-96 overflow-y-auto scrollbar" id="style-2">
        {misEventos.map((evento, index) => (
          <div key={evento._id} className="mb-4">
            {index !== 0 && <hr className="border-t border-white border-solid my-4 w-full" />}
            <div className="text-white">
              <p className="font-semibold">Nombre: {evento.nombre}</p>
              <p>Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
              <p>Hora: {evento.hora}</p>
              <button onClick={() => addToGoogleCalendar(evento)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Agregar a Google Calendar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;


