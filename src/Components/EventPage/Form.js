import React, { useState } from 'react';
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx";
import Map from "./Map.js";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import Eventos from '../../Models/Eventmodel.js';

export default function Form() {
    const { register, handleSubmit, control } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const { user } = useAuth0();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        console.log(data.image.length);

        axios.post("http://localhost:5000/eventos/crear", {
            ...data,
            id_usr: user?.sub
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const handleExit = () => {
        navigate("/"); // Redirigir al home al hacer clic en "Salir"
    };

    // Función para eliminar un evento
    const deleteEvent = (eventId) => {
        axios.delete(`localhost:5000/eventos/eliminar/:eventId`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className={"bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]"}>
            <h1 className="text-white text-center -mb-6 text-6xl font-semibold title-font ">Creación del Evento</h1>
            <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-1/4 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
                    <Inputset
                        title={"Nombre"}
                        type="text"
                        id="nombre"
                        label="nombre"
                        register={register}
                        placeholder="Introduce nombre"
                    />
                    <Inputset
                        title={"Fecha"}
                        type="Date"
                        id="fecha"
                        label="fecha"
                        register={register}
                    />
                    <Inputset
                        title="Horario"
                        type="time"
                        id="hora"
                        label="hora"
                        register={register}
                    />
                    <Inputset
                        title={"Lugar"}
                        type="text"
                        id="lugar"
                        label="lugar"
                        register={register}
                        placeholder="Lugar"
                    />
                    <div className="my-4">
                        <label htmlFor="descripcion" className="text-white">Descripción</label>
                        <textarea
                            id="descripcion"
                            {...register("descripcion")}
                            rows="4"
                            className="w-full p-2 mt-1 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>

                    { <Map /> }

                    <div>
                        <label>Subir Imagen</label>
                        <Controller
                            name="image"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    field.onChange(reader.result);
                                                    setImagePreview(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                    {imagePreview && (
                                        <img
                                            src={imagePreview}
                                            alt="Vista previa de la imagen"
                                            style={{ maxWidth: '100%', marginTop: '10px' }}
                                        />
                                    )}
                                </>
                            )}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Btn type="submit">Guardar</Btn>
                        <Btn type="button" onClick={handleExit}>Salir</Btn>
                    </div>
                </form>
            </div>
        </div>
    );
}
