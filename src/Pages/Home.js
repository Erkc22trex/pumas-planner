import { Navbar } from '../Components/HomePage/Navbar'
import { Footer } from '../Components/HomePage/Footer'
import { Card } from '../Components/HomePage/Card'
import { FormContacto } from '../Components/HomePage/form-contacto'
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cards = [
    {
        title: 'Home',
        image: './puma2.png',
        description: 'texto de la base de datos de Home'
    },
    {
        title: 'Home',
        image: './puma2.png',
        description: 'texto de la base de datos de Home'
    },
    {
        title: 'Home',
        image: './puma2.png',
        description: 'texto de la base de datos de Home'
    },
    {
        title: 'Home',
        image: './puma2.png',
        description: 'texto de la base de datos de Home'
    },
    {
        title: 'Home',
        image: './puma2.png',
        description: 'texto de la base de datos de Home'
    }
]

export function Home() {
    const { isAuthenticated, isLoading, user } = useAuth0();
    const [eventos, setEventos] = useState([]);
    const [misEventos, setMisEventos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/eventos/alls')
        .then(res => {
            // console.log(res.data);
            setEventos(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    
    useEffect(() => {
        axios.get('http://localhost:5000/eventos/filtrar/' + user?.sub)
            .then(res => {
                // console.log(res.data);
                setMisEventos(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user]);

    return (
        <>
            <Navbar />
            <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" : "bgCustom"}>

                <div className="container mx-auto px-5 py-5 text-gray-600 body-font">
                    {isAuthenticated && (
                        <div className='py-4'>
                            <h1 className="text-xl font-bold text-white mb-4">MIS EVENTOS AGENDADOS</h1>
                            <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                            <div className="overflow-x-auto whitespace-nowrap flex">
                                {misEventos.map((card, index) => (
                                    <Card
                                        key={index}
                                        image={card.image}
                                        title={card.title}
                                        description={card.description}
                                        className="flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className='py-4'>
                        <h1 className="text-xl font-bold text-white mb-4">EVENTOS GENERALES</h1>
                        <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                        <div className="overflow-x-auto whitespace-nowrap flex">
                            {eventos?.map((card, index) => (
                                <Card
                                    key={index}
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                    className="flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                    {!isAuthenticated && (<FormContacto />)}
                </div>
                <Footer />
            </div>
        </>
    );
}

