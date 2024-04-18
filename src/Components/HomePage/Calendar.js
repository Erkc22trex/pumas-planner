import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Form from '../EventPage/Form';
import "../../Styles/DeleteButton.css"
import { Modal } from '../../Components/HomePage/Modal';

function Calendar() {
    const [misEventos, setMisEventos] = useState([]);
    const [EventoEditar, setEventoEditar] = useState({});
    const { isAuthenticated, user } = useAuth0();

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    useEffect(() => {
        if (isAuthenticated && user) {
            axios.get(`http://localhost:5000/eventos/filtrar/${user.sub}`)
                .then(res => {
                    setMisEventos(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [isAuthenticated, user]);

    // Función para eliminar un evento
    const deleteEvent = (eventId) => {
        axios.delete(`http://localhost:5000/eventos/eliminar/${eventId}`)
            .then(res => {
                console.log(res.data);
                // Si la eliminación en la base de datos fue exitosa, actualiza la lista de eventos
                setMisEventos(misEventos.filter(evento => evento._id !== eventId));
            })
            .catch(err => {
                console.log(err);
            });
            setTimeout(() => {
                window.location.reload();
            }, 100);
    };

    // Función para abrir el formulario de edición
    const EditEvent = (eventId) => {
        console.log(eventId);

        const evento = misEventos.filter(event => event._id === eventId);
        console.log(evento);
        setEventoEditar(evento[0]);
        
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
                {
                    <Form
                        mode='EDIT'
                        evento={EventoEditar}
                        onClose={toggleOpen}
                    />
                }
            </Modal>
            <div className="w-full bg-blue-800 p-5 rounded-lg overflow-hidden">
                <div className="text-l font-bold text-white mt-4 mb-2">EVENTOS CREADOS</div>
                <hr className="border-t border-white border-solid my-4 w-full" />
                <div className="max-h-[96vh] overflow-y-auto scrollbar">
                    {misEventos.map((evento, index) => (
                        <div key={evento._id} className="mb-4 bg-sky-600 rounded p-4">
                            {index !== 0 && <hr className="border-t border-white border-solid my-4 w-full" />}
                            <div className="text-white">
                                <p className="font-semibold">Evento: {evento.nombre}</p>
                                <p>Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
                                <p>Hora: {evento.hora}</p>
                                <p>Ubicación: {evento.lugar}</p>
                                <div className="flex">
                                    <button onClick={() => {
                                        toggleOpen()
                                        EditEvent(evento._id)
                                    }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">Editar</button>

                                    <button onClick={() => deleteEvent(evento._id)} className="button rounded mt-2 ml-2" type="button">
                                        <span className="button__text">Eliminar</span>
                                        <span className="button__icon">
                                            <svg className="svg" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                <title></title>
                                                <path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }}></path>
                                                <line style={{ stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "32px" }} x1="80" x2="432" y1="112" y2="112"></line>
                                                <path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }}></path>
                                                <line style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} x1="256" x2="256" y1="176" y2="400"></line>
                                                <line style={{ fill: "none", stroke: "#fff", strokelinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} x1="184" x2="192" y1="176" y2="400"></line>
                                                <line style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} x1="328" x2="320" y1="176" y2="400"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calendar;
