import React, { useState } from 'react';
import axios from 'axios';

// Importar estilos de Tailwind CSS
import 'tailwindcss/tailwind.css';

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    console.log(query);
    setSearch(query);
    try {
      const response = await axios.get(`http://localhost:5000/eventos/buscar?nombre=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error al buscar eventos:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <div className="relative">
      <div className='Search-bar'>
        <form className="flex items-center w-80 md:w-[500px] p-2 bg-white rounded-lg shadow-md">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            id="default-search"
            className="block w-full py-2 pl-3 pr-3 text-md text-gray-900 bg-transparent border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:outline-none"
            placeholder="Buscar..."
            required
          />
        </form>
      </div>
      {search !== "" && ( // Mostrar resultados solo si hay una búsqueda activa
        <div className="absolute top-full mt-2 bg-white w-full rounded-lg shadow-md border border-gray-200">
          <div className="p-4">
            {results.length > 0 &&
              results.map((evento) => (
                <div key={evento._id} className="evento shadow-md p-4 mb-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">{evento.nombre}</h3>
                  {evento.image && <img src={evento.image} alt={evento.nombre} className="w-full h-auto max-w-[200px]" />}
                </div>
              ))
            }
            {results.length === 0 && (
              <p className="text-gray-500">No se encontraron resultados</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



