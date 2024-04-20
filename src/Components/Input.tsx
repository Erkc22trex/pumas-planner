import React from "react"
import { UseFormRegister, Path } from "react-hook-form"

interface IFormValues {
    nombre: string;
    fecha: Date;
    hora: Date;
    lugar: string;
    descripcion: string;
}

type InputProps = {
    title: string,
    type?: string,
    id?: string,
    label: Path<IFormValues>,
    register: UseFormRegister<IFormValues>,
    required?: boolean,
    placeholder?: string
}

export default function Inputset({ title, type = 'text', id, label, register, required=false,...rest } : InputProps) {
    return (
        <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-100">{title}</label>
            <input
                type={type}
                id={id}
                {...register(label, { required })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...rest}
            />
        </div>

    );
}
