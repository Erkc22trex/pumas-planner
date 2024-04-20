import React, { useState, useEffect } from 'react';
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx";
import Map from "./Map.js";
import { useForm, Controller } from "react-hook-form";
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import Confetti from "canvas-confetti"

export default function Form({ onClose, evento = {}, mode = "ADD", refreshEvents, refreshMisEventos, refreshEventsGenerales }) {
    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm();
    const { user } = useAuth0();
    const [imagePreview, setImagePreview] = useState(evento.image || null);

    const getEvents = () => {
        refreshEvents();
    };

    const getEventsGen = () => {
        refreshEventsGenerales();
    };

    const getMisEventos = () => {
        refreshMisEventos();
    };

    const onSubmit = (data) => {
        if (mode === "ADD") {
            axios.post("http://localhost:5000/eventos/crear", {
                ...data,
                id_usr: user?.sub
            })
                .then(res => {
                    console.log(res.data);
                    getEvents();
                    getMisEventos();
                    getEventsGen();
                    setImagePreview(null);
                    reset();
                    Confetti();
                    onClose();
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (mode === "EDIT") {
            axios.put(`http://localhost:5000/eventos/editar/${evento._id}`, {
                ...data,
                image: imagePreview,
                id_usr: user?.sub
            })
                .then(res => {
                    console.log(res.data);
                    getEvents();
                    getMisEventos();
                    reset();
                    onClose();
                })
                .catch(err => {
                    console.log(err);
                });
        }        
    };

    useEffect(() => {

        if (mode === "EDIT") {
            setValue("nombre", evento.nombre);
            const fecha = new Date(evento.fecha);
            if (!isNaN(fecha.getTime())) {
                console.log(fecha.toISOString().split("T")[0])
                setValue("fecha", fecha.toISOString().split("T")[0]);
            }
            setValue("hora", evento.hora);
            setValue("lugar", evento.lugar);
            setValue("descripcion", evento.descripcion);
            setImagePreview(evento.image);
        }
    }, [evento, setValue, mode]);

    return (
        <div className='overflow-y-scroll h-96'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
                <Inputset
                    title={"Nombre"}
                    type="text"
                    id="nombre"
                    label="nombre"
                    register={register}
                    required={true}
                    placeholder="Introduce nombre"
                    aria-invalid={errors.nombre ? "true" : "false"}
                />
                {errors.nombre?.type === "required" && (
                    <p className='text-red-500' role="alert">El nombre es obligatorio</p>
                )}

                <Inputset
                    title={"Fecha"}
                    type="Date"
                    id="fecha"
                    label="fecha"
                    register={register}
                    required={true}
                    placeholder="Introduce fecha"
                    aria-invalid={errors.fecha ? "true" : "false"}
                />
                {errors.fecha?.type === "required" && (
                    <p className='text-red-500' role="alert">La fecha es obligatorio</p>
                )}
                <Inputset
                    title="Horario"
                    type="time"
                    id="hora"
                    label="hora"
                    register={register}
                    required={true}
                    placeholder="Introduce hora"
                    aria-invalid={errors.hora ? "true" : "false"}
                />
                {errors.hora?.type === "required" && (
                    <p className='text-red-500' role="alert">La hora es obligatorio</p>
                )}
                <Inputset
                    title={"Lugar"}
                    type="text"
                    id="lugar"
                    label="lugar"
                    register={register}
                    required={true}
                    placeholder="Introduce lugar"
                    aria-invalid={errors.lugar ? "true" : "false"}
                />
                {errors.lugar?.type === "required" && (
                    <p className='text-red-500' role="alert">El lugar es obligatorio</p>
                )}
                <div className="my-4">
                    <label htmlFor="descripcion" className="text-white">Descripción</label>
                    <textarea
                        id="descripcion"
                        {...register("descripcion", { required: true })}
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
                    <Btn type="submit">{mode === "ADD" ? "Guardar" : "Actualizar"}</Btn>
                    <Btn type="button" onClick={() => {
                        onClose()
                        reset()
                    }}>Salir</Btn>
                </div>
            </form>
        </div>
    );
}
