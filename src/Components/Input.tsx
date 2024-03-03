import React from "react-hook-form"

export default function Inputse({ type = 'text', id, name, ...rest }) {
    return (
            <input
                type={type}
                id={id}
                name={name}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...rest} // Destructuración de propiedades para pasar todas las demás propiedades
            />
        
    );
}
