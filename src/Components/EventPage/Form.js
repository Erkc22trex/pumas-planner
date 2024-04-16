import React, { useState, useEffect } from 'react';
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx";
import Map from "./Map.js";
import { useForm, Controller } from "react-hook-form";
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

export default function Form({ onClose, evento = {}, mode = "ADD" }) {
    const { register, handleSubmit, control, reset, setValue } = useForm();
    const { user } = useAuth0();
    const [imagePreview, setImagePreview] = useState(evento.image || null);

    const onSubmit = (data) => {
        if (mode === "ADD") {
            axios.post("http://localhost:5000/eventos/crear", {
                ...data,
                id_usr: user?.sub
            })
                .then(res => {
                    console.log(res.data);
                    onClose();
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (mode === "EDIT") {
            axios.put(`http://localhost:5000/eventos/editar/${evento._id}`, {
                ...data,
                id_usr: user?.sub
            })
                .then(res => {
                    console.log(res.data);
                    onClose();
                })
                .catch(err => {
                    console.log(err);
                });
        }

        reset();
    };

    useEffect(() => {
        if (mode === "EDIT") {
            setValue("nombre", evento.nombre);
            setValue("fecha", evento.fecha);
            setValue("hora", evento.hora);
            setValue("lugar", evento.lugar);
            setValue("descripcion", evento.descripcion);
        }
    }, [evento, setValue]);

    return (
        <div className='overflow-y-scroll h-96'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
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

                <Map />

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
                    <Btn type="button" onClick={onClose}>Salir</Btn>
                </div>
            </form>
        </div>
    );
}
