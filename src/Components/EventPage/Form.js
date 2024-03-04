
import Btn from "../Btn.tsx";
import Inputset from "../Input.tsx"
import React, { useState } from 'react';


export default function Form() {
    const [valorDelInput, setValorDelInput] = useState('');
    return (
        <div className={"bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]"}>
            <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
                <form className="lg:w-1/3 md:w-1/2 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Creación de Evento</h2>
                    <form>
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
                            id="nombre"
                            name="nombre"
                            value={valorDelInput}
                            onChange={(e) => setValorDelInput(e.target.value)}
                        />
                        <Inputset
                            title="time"
                            type="time"
                            id="nombre"
                            name="nombre"
                            value={valorDelInput}
                            onChange={(e) => setValorDelInput(e.target.value)}
                        />
                        <Inputset
                            title={"Lugar"}
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Lugar"
                            value={valorDelInput}
                            onChange={(e) => setValorDelInput(e.target.value)}
                        />

                        <div class="flex items-center justify-center w-full my-3">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                    </form>
                    <Btn type="submit" >
                        Guardar
                    </Btn>
                    <Btn type="submit" >
                        Salir
                    </Btn>
                </form>
            </div>
        </div>
    );
}