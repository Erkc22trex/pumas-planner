import React, { useState } from 'react';
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx";
import Map from "../EventPage/Map.js";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'; 

function Form() {
    const [valorDelInput, setValorDelInput] = useState('');
    const [descripcion, setDescripcion] = useState(''); 

    const [markers, setMarkers] = useState([]); // Estado para almacenar las ubicaciones marcadas

    // Función para manejar el clic en el mapa y agregar un marcador en la ubicación
    const handleMapClick = (event) => {
        const newMarker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setMarkers([...markers, newMarker]); 
    };

    return (
        <div className={"bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]"}>
            <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
                <form className="lg:w-1/3 md:w-1/2 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Creación de Evento</h2>
                    <Inputset
                        title={"Nombre"}
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Introduce nombre"
                        value={valorDelInput}
                        onChange={(e) => setValorDelInput(e.target.value)}
                    />
                    <Inputset
                        title={"Fecha"}
                        type="Date"
                        id="fecha"
                        name="fecha"
                        value={valorDelInput}
                        onChange={(e) => setValorDelInput(e.target.value)}
                    />
                    <Inputset
                        title="Horario"
                        type="time"
                        id="hora"
                        name="hora"
                        value={valorDelInput}
                        onChange={(e) => setValorDelInput(e.target.value)}
                    />
                    <Inputset
                        title={"Lugar"}
                        type="text"
                        id="lugar"
                        name="lugar"
                        placeholder="Lugar"
                        value={valorDelInput}
                        onChange={(e) => setValorDelInput(e.target.value)}
                    />
                    {/* Agregar campo de texto para la descripción */}
                    <div className="my-4">
                        <label htmlFor="descripcion" className="text-white">Descripción</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            rows="4"
                            className="w-full p-2 mt-1 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                    <LoadScript googleMapsApiKey="AIzaSyDfVj-Cnt4b0MzOoCGGFqCY3zhymkPEUSY">
                        <GoogleMap
                            mapContainerStyle={{ height: '400px', width: '100%' }}
                            center={{ lat: 14.084818012234798, lng: -87.16664545886665 }} // Coordenadas de Tegucigalpa como centro del mapa
                            zoom={10}
                            onClick={handleMapClick} // Maneja el clic en el mapa para agregar marcadores
                        >
                            {/* Renderiza todos los marcadores en el mapa */}
                            {markers.map((marker, index) => (
                                <Marker key={index} position={marker} />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                    <div className="flex items-center justify-center w-full my-3">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <Btn type="submit">Guardar</Btn>
                        <Btn type="submit">Salir</Btn>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
