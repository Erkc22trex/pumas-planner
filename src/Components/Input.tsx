import React from "react-hook-form"

export default function Inputset({ title, type = 'text', id, name, ...rest }) {
    return (
        <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-100">{title}</label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...rest} // Destructuración de propiedades para pasar todas las demás propiedades
            />
        </div>

    );
}
