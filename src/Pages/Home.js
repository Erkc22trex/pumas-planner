import { Navbar } from '../Components/HomePage/Navbar'
import { Footer } from '../Components/HomePage/Footer'
import { Card } from '../Components/HomePage/Card'
import { FormContacto } from '../Components/HomePage/form-contacto'

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

    return (
        <>
            <Navbar />
            <div className="container mx-auto bgCustom">
            

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                cards.map((card, index) => (
                                    <Card 
                                        image={card.image}
                                        title={card.title}
                                        description={card.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <FormContacto />

            </div>
            <Footer />
        </>
    );
}