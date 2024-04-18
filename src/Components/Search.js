import React from 'react';

export default function SearchBar() { 

  const [ search, setSearch ] = useState("")

//funcion de captura de datos en la busqueda
const searcher = (e) => {
	setSearch(e.value.target.value)
	//console.log(e.target.value) esto muestra en consola los datos que captura es opcional por si quieren ver en consola los resultados
}

//metodo para filtrar
let results = []
if(!search)
{
	results = users   //users es de donde se trae la tabla con los resultados, cambiar a la tabla o la funcion donde tengan los datos
	
}else{
	results = users.filtrer( (dato) => //users es de donde se trae la tabla con los resultados, cambiar a la tabla o la funcion donde tengan los datos
	dato.name.toLowerCase().includes(searchs.tolocaleLowerCase()) //.name es por la columna de la tabla a filtrar o nombre del evento
	)
}

  return (
    <div className='Search-bar'>
      <form className="flex items-center w-80 md:w-[500px] p-2 bg-white rounded-lg shadow-md">
        <input
          type="search" 
          onChange = {searcher} // aqui  se manda a llamar el filtrado en la barra de busqueda al estar escribiendo
          id="default-search"
          className="block w-full py-2 pl-3 pr-3 text-md text-gray-900 bg-transparent border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:outline-none"
          placeholder="Buscar..."
          required
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
