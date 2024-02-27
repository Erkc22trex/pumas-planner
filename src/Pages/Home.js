import { Navbar } from '../Components/HomePage/Navbar'
import { Footer } from '../Components/HomePage/Footer'
import { Card } from '../Components/HomePage/Card'
import { FormContacto } from '../Components/HomePage/form-contacto'
import { useAuth0 } from '@auth0/auth0-react';

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
    const {isAuthenticated, isLoading} = useAuth0()
    return (
        <>
            <Navbar />
            <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" :"bgCustom"}>
                <div className="container mx-auto px-5 py-24 text-gray-600 body-font">
                    <div className="flex flex-wrap -m-4">
                        {
                            cards.map((card, index) => (
                                <Card
                                    key={index}
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))
                        }
                    </div>
                </div>
                <FormContacto />
            </div>
            <Footer />
        </>
    );
}