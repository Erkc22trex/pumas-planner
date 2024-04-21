import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const Descrip = ({ id }) => {
  const textareaRef = useRef(null);
  const [correo, setCorreo] = useState('');
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    const cargarDetallesEvento = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/eventos/detalles/${id}`);
        setEvento(response.data);
      } catch (error) {
        console.error('Error al cargar detalles del evento:', error);
      }
    };

    cargarDetallesEvento();
  }, [id]);

  const handleEnviarComentario = async (e) => {
    e.preventDefault();
    const comentario = textareaRef.current.value;

    try {
      const response = await axios.post("http://localhost:5000/eventos/comentarios/crear", { Comentario: comentario });
      console.log(response.data);
      toast.success('¡Comentario enviado correctamente!');
    } catch (error) {
      console.error('Error al enviar comentario:', error);
      toast.error('Error al enviar comentario');
    }
  };

  const handleEnviarCorreo = async () => {
    try {
      await axios.post(`http://localhost:5000/eventos/participantes/invitar/${correo}`);
      toast.success('¡Correo de invitación enviado correctamente!');
    } catch (error) {
      console.error('Error al enviar correo de invitación:', error);
      toast.error('Error al enviar correo de invitación');
    }
  };

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };

  return (
    <Router>
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-md overflow-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Información de Evento</h2>

          {evento && (
            <div className="bg-[#D1D5DB] rounded-lg shadow-md overflow-hidden text-center">
              <img src={evento.image} alt="Imagen del evento" className="w-32 h-auto mx-auto" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{evento.nombre}</h3>
                <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-600">{evento.lugar}</p>
                  <p className="text-gray-600">{new Date(evento.fecha).toLocaleDateString()}</p>
                  <p className="text-gray-600">{evento.hora}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleEnviarComentario} className="mt-6">
            <label htmlFor="descripcion" className="text-white block">Comentarios del evento</label>
            <textarea
              id="descripcion"
              ref={textareaRef}
              rows="4"
              className="w-full p-2 mt-1 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 mt-2 rounded-lg hover:bg-indigo-600 focus:outline-none"
              type="submit"
            >
              Enviar comentario
            </button>
          </form>

          <div className="flex items-center mt-4">
            <input
              type="email"
              id="email"
              placeholder="Agregar amigo"
              className="flex-1 bg-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={correo}
              onChange={handleChangeCorreo}
            />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleEnviarCorreo}
            >
              Agregar
            </button>
          </div>

          <Link to="/" className="block mt-4 text-center">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Salir
            </button>
          </Link>

          <ToastContainer />
        </div>
      </div>
    </Router>
  );
};

export default Descrip;





