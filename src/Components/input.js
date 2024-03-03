import React from 'react';


export default function Inputse() {
    return (
        <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-100">Titulo</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
    )
}