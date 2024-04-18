import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/HomePage/Navbar';
import { Footer } from '../Components/HomePage/Footer';
import { FormContacto } from '../Components/HomePage/form-contacto';
import Calendar from '../Components/HomePage/Calendar';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { SimpleSlider } from '../Components/HomePage/slider';

export function Home() {
    const { isAuthenticated, user } = useAuth0();
    const [eventos, setEventos] = useState([]);
    const [eventosAgendados, setEventosAgendados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/eventos/alls')
            .then(res => {
                setEventos(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Función para manejar la adición de eventos a la lista de eventos agendados
    const handleAgregarEvento = (eventoId) => {
        const evento = eventos.find(e => e._id === eventoId);
        if (evento) {
            setEventosAgendados(prevEventos => [...prevEventos, evento]);
        }
    };

    useEffect(() => {
        const eventosGuardados = JSON.parse(localStorage.getItem('eventosAgendados'));
        if (eventosGuardados) {
            setEventosAgendados(eventosGuardados);
        }
    }, []);

    // Función para agregar un evento a la lista de eventos agendados
    const onAgendarEvento = (evento) => {
        setEventosAgendados(prevEventos => [...prevEventos, evento]); // Agrega solo el evento seleccionado
        // Guardar eventos en el almacenamiento local
        localStorage.setItem('eventosAgendados', JSON.stringify([...eventosAgendados, evento]));
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };
    
    const onDesagendarEvento = (eventoId) => {
    const eventosActualizados = eventosAgendados.filter(evento => evento._id !== eventoId);
    setEventosAgendados(eventosActualizados);
    // Guardar eventos en el almacenamiento local
    localStorage.setItem('eventosAgendados', JSON.stringify(eventosActualizados));
};
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" : "bgCustom"}>
                <div className="container mx-auto px-5 py-5 text-gray-600 body-font flex flex-grow">
                    <div className={isAuthenticated ? "w-full lg:w-3/4" : "w-full"}>
                        {isAuthenticated && (
                            <div className='py-4'>
                                <h1 className="text-xl font-bold text-white mb-4">MIS EVENTOS AGENDADOS</h1>
                                <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                                <SimpleSlider data={eventosAgendados} />
                            </div>
                        )}
                        <div className='py-4'>
                            <h1 className="text-xl font-bold text-white mb-4">EVENTOS GENERALES</h1>
                            <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                            <SimpleSlider
                    data={eventos}
                    view={true}
                    sliderKey={"EVENTOS"}
                    onAgendarEvento={onAgendarEvento} // Pasar la función onAgendarEvento a las tarjetas
                />
                        </div>
                        {!isAuthenticated && (<FormContacto />)}
                    </div>
                    <div className="w-full lg:w-1/4">
                        <Calendar />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
