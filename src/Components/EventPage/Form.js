import React, { useState } from 'react';
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx";
import Map from "./Map.js";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

export default function Form() {
    const { register, handleSubmit, control } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const { user } = useAuth0();


    const onSubmit = (data) => {
        console.log(data);

        console.log(data.image.length)

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
    }

    return (
        <div className={"bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]"}>
            <h1 className="text-white text-center -mb-6 text-6xl font-semibold title-font ">Creación del Evento</h1>
            <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
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

                    {/* <Map /> */}

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
                    {/* <div className="flex items-center
                     justify-center w-full mt-5 mb-5">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-00 dark:text-gray-400"><span className="font-semibold text-xl">Click para subir o arrastrar y soltar</span></p>
                                <p className="text-base text-gray-500 dark:text-gray-400">SVG, PNG, JPG, GIF or MP4 </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> */}
                    <div className="flex justify-between">
                        <Btn type="submit">Guardar</Btn>
                        <Link to="/#">
                            <Btn type="">Salir</Btn>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}