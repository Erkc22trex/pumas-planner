import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from '../Components/HomePage/Navbar';
import { Footer } from '../Components/HomePage/Footer';
import { FormContacto } from '../Components/HomePage/form-contacto';
import Calendar from '../Components/HomePage/Calendar';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { SimpleSlider } from '../Components/HomePage/slider.tsx';

export function Home() {
    const { isAuthenticated, user } = useAuth0();
    const [eventosGenerales, setEventosGenerales] = useState([]);
    const [misEventosAgen, setMisEventosAgen] = useState([]);
    const [misEventos, setMisEventos] = useState([]);

    const getMisEventos = useCallback(() => {
        axios.get(`http://localhost:5000/eventos/filtrarMisEventos/${user?.sub}`)
        .then(res => {
            setMisEventos(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [user?.sub])

    const getEvents = useCallback(() => {
        if (isAuthenticated && user?.sub) {
            axios.get(`http://localhost:5000/eventos/filtrarNo/${user?.sub}`)
                .then(res => {
                    console.log(res.data);
                    setEventosGenerales(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            axios.get('http://localhost:5000/eventos/alls')
                .then(res => {                    
                    console.log(res.data)
                    setEventosGenerales(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [isAuthenticated, user?.sub]);

    const getMisEventosAge = useCallback(() => {
        axios.get(`http://localhost:5000/eventos/filtrar/${user?.sub}`)
            .then(res => {
                setMisEventosAgen(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [user?.sub]);

    useEffect(() => {
        if (isAuthenticated) {
            getMisEventosAge();
            getEvents();
            getMisEventos();
        } else {
            getEvents();
        }
    }, [isAuthenticated, getMisEventosAge, getEvents, getMisEventos]);

    const onRegistrarAEvento = (eventoId) => {
        const userId = user?.sub
        axios.put(`http://localhost:5000/eventos/registrar/${eventoId}`, { userId })
            .then(resp => {
                console.log(resp.data.message)
                alert(resp.data.message)
                getMisEventosAge();
                getEvents();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onDesagendarEvento = (eventoId) => {
        console.log(eventoId)
        axios.delete(`http://localhost:5000/eventos/eliminar/${eventoId}`)
            .then(res => {
                console.log(res.data);
                getEvents();
                getMisEventosAge();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar
                refreshEvents={getMisEventosAge}
                refreshMisEventos={getMisEventos}
                refreshEventsGenerales={getEvents}
            />
            <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" : "bgCustom"}>
                <div className="container mx-auto px-5 py-5 text-gray-600 body-font flex flex-grow">
                    <div className={isAuthenticated ? "w-full lg:w-3/4" : "w-full"}>
                        {isAuthenticated && (
                            <div className='py-4'>
                                <h1 className="text-xl font-bold text-white mb-4">MIS EVENTOS AGENDADOS</h1>
                                <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                                <SimpleSlider
                                    data={misEventosAgen}
                                    view={true}
                                    sliderKey={"EVENTOS_AGENDADOS"}
                                    onDesagendarEvento={onDesagendarEvento}
                                />
                            </div>
                        )}
                        <div className='py-4'>
                            <h1 className="text-xl font-bold text-white mb-4">EVENTOS GENERALES</h1>
                            <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4"/>
                            <SimpleSlider
                                data={eventosGenerales}
                                sliderKey={"EVENTOS_GENERALES"}
                                onAgendarEvento={onRegistrarAEvento}
                            />
                        </div>
                        {!isAuthenticated && (<FormContacto />)}
                    </div>
                    <div className="w-full lg:w-1/4">
                        <Calendar
                            getMisEventos={getMisEventos}
                            getMisEventosAge={getMisEventosAge}
                            misEventos={misEventos}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
