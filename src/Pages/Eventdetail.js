import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importar BrowserRouter

const Descrip = ({ onFormSubmit }) => {
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = textareaRef.current.value;
    if (typeof onFormSubmit === 'function') {
      onFormSubmit(description);
    }
    window.location.href = "./"; // Redirigir al home
  };

  return (
    <Router> {/* Envolver todo en BrowserRouter */}
      <div className="h-screen bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E] flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-white mb-6">Información de Evento</h2>

          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label htmlFor="descripcion" className="text-white">Comentarios del evento</label>
              <textarea
                id="descripcion"
                ref={textareaRef}
                rows="4"
                className="w-full p-2 mt-1 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>

            <div className="my-4 flex items-center">
              <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
              </svg>
              <input
                type="email"
                id="email"
                placeholder="Agregar amigo"
                className="flex-1 bg-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Agregar
              </button>
            </div>

            <div className="flex justify-end">
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-3"
                type="submit"
              >
                Enviar comentario
              </button>
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
};
export default Descrip;
