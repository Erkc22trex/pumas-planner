import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Form from '../EventPage/Form';


function Calendar() {
  const [misEventos, setMisEventos] = useState([]);
  const [EventoEditar, setEventoEditar] = useState(null); // Estado para el evento que se está editando
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

  // Función para eliminar un evento
const deleteEvent = (eventId) => {
  axios.delete(`http://localhost:5000/eventos/eliminar/${eventId}`)
    .then(res => {
      console.log(res.data);
      // Si la eliminación en la base de datos fue exitosa, actualiza la lista de eventos
      setMisEventos(misEventos.filter(evento => evento._id !== eventId));
    })
    .catch(err => {
      console.log(err);
    });
};


  // Función para abrir el formulario de edición
  const openEditForm = (evento) => {
    setEventoEditar(evento); // Establecer el evento a editar
  };

  // Función para agregar evento a Google Calendar
  const addToGoogleCalendar = (evento) => {
    // Extraer datos del evento
    const { nombre, fecha, hora, lugar, descripcion } = evento;

    // Formatear la fecha y la hora para Google Calendar
    const formattedDate = new Date(fecha).toISOString().replace(/-|:|\.\d+/g, '');
    const startTime = formattedDate;

    // Construir la URL de Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${nombre}&details=${descripcion}&location=${lugar}&dates=${startTime}/${startTime}`;

    // Abrir la URL en una nueva pestaña
    window.open(googleCalendarUrl);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="w-full h-full bg-blue-800 p-4 rounded-lg overflow-hidden">
      <div className="text-l font-bold text-white mt-4 mb-2">EVENTOS CREADOS</div>
      <hr className="border-t border-white border-solid my-4 w-full" />
      <div className="max-h-[96vh] overflow-y-auto scrollbar">
        {misEventos.map((evento, index) => (
          <div key={evento._id} className="mb-4">
            {index !== 0 && <hr className="border-t border-white border-solid my-4 w-full" />}
            <div className="text-white">
              <p className="font-semibold">Evento: {evento.nombre}</p>
              <p>Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
              <p>Hora: {evento.hora}</p>
              <button onClick={() => addToGoogleCalendar(evento)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Agregar a mi calendario</button>
              <button onClick={() => openEditForm(evento)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2">Editar</button>
              <button onClick={() => deleteEvent(evento._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      {EventoEditar && <Form evento={EventoEditar} />} {/* Renderizar el formulario de edición si hay un evento a editar */}
    </div>
  );
}

export default Calendar;



