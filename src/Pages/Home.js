import { Navbar } from '../Components/HomePage/Navbar'
import { Footer } from '../Components/HomePage/Footer'
import { Card } from '../Components/HomePage/Card'
import { FormContacto } from '../Components/HomePage/form-contacto'
import { useAuth0 } from '@auth0/auth0-react';
import { Fragment } from 'react';

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
    }  
]

export function Home() {
    const { isAuthenticated, isLoading } = useAuth0();
    
    return (
        <>
            <Navbar />
            <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" : "bgCustom"}>
                <div className="container mx-auto px-5 py-5 text-gray-600 body-font">
                    <h1 className="text-xl font-bold text-white mb-4">MIS EVENTOS AGENDADOS</h1>
                    <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" /> 
                    <div className="overflow-x-auto whitespace-nowrap flex">
                        {cards.map((card, index) => (
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
                    <div className="container mx-auto px-5 py-5 text-gray-600 body-font">
                    <h1 className="text-xl font-bold text-white mb-4">EVENTOS AGENDADOS</h1>
                    <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" /> 
                    <div className="overflow-x-auto whitespace-nowrap flex">
                        {cards.map((card, index) => (
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
                <FormContacto />
            </div>
            <Footer />
        </>
    );
}

