import React from 'react';

export default function SearchBar() {
  return (
    <div className='Search-bar'>
      <form className="flex items-center w-80 md:w-[500px] p-2 bg-white rounded-lg shadow-md">
        <input
          type="search"
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