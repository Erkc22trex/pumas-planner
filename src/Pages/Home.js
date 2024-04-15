import React from 'react';
import { Navbar } from '../Components/HomePage/Navbar';
import { Footer } from '../Components/HomePage/Footer';
import { Card } from '../Components/HomePage/Card';
import { FormContacto } from '../Components/HomePage/form-contacto';
import Calendar from '../Components/HomePage/Calendar';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SimpleSlider } from '../Components/HomePage/slider';


export function Home() {
  const { isAuthenticated, user } = useAuth0();
  const [eventos, setEventos] = useState([]);
  const [misEventos, setMisEventos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/eventos/alls')
      .then(res => {
        setEventos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/eventos/filtrar/' + user?.sub)
      .then(res => {
        setMisEventos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [user]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className={isAuthenticated ? "bg-gradient-to-r from-[#18012E] via-[#322894] to-[#18012E]" : "bgCustom"}>
          <div className="container mx-auto px-5 py-5 text-gray-600 body-font flex flex-grow">
            <div className={isAuthenticated ? "w-full lg:w-3/4" : "w-full"}>
              {isAuthenticated && (
                <div className='py-4'>
                  <h1 className="text-xl font-bold text-white mb-4">MIS EVENTOS AGENDADOS</h1>
                  <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                  <SimpleSlider
                    data={misEventos}
                  />
                  {/* <div className="overflow-x-auto whitespace-nowrap flex">
                      {misEventos.map((card, index) => (
                        <Card
                          key={index}
                          image={card.image}
                          title={card.title}
                          description={card.description}
                          className="flex-shrink-0"
                        />
                      ))}
                    </div> */}
                </div>
              )}
              <div className='py-4'>
                <h1 className="text-xl font-bold text-white mb-4">EVENTOS GENERALES</h1>
                <hr className="border-t border-l border-r border-white border-solid my-2 w-3/4" />
                <SimpleSlider
                  data={eventos}
                  view={true}
                />
                {/* <div className="overflow-x-auto whitespace-nowrap flex">
                  {eventos?.map((card, index) => (
                    <Card
                      key={index}
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      className="flex-shrink-0"
                    />
                  ))}
                </div> */}
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
    </>
  );
}

