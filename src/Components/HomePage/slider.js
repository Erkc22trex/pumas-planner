import React from "react";
import Slider from "react-slick";
import { Card } from "../../Components/HomePage/Card";
import { v4 as uuidv4 } from 'uuid';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

export function SimpleSlider({ data, view=false, sliderKey, onAgendarEvento, onDesagendarEvento, eventosAgendados=[], isAgendados=false }) {
    const handleAgregarEvento = (eventoId) => {
        const evento = data.find(e => e._id === eventoId);
        if (evento) {
            onAgendarEvento(evento);
        }
    };

    const handleDesagendarEvento = (eventoId) => {
        onDesagendarEvento(eventoId);
    };

    return (
        <div className='w-11/12 m-auto' key={`${sliderKey}_${uuidv4()}`}>
            <div className="mt-20" key={`${sliderKey}_${uuidv4()}`}>
                <Slider {...settings}>
                    {data?.map((d) => (
                        <Card 
                            key={`${d._id}_${uuidv4()}`}
                            _id={d._id}
                            nombre={d.nombre}
                            image={d.image}
                            descripcion={d.descripcion}
                            hora={d.hora}
                            lugar={d.lugar}
                            fecha={d.fecha} 
                            view={view}
                            onAgendarEvento={handleAgregarEvento}
                            onDesagendarEvento={handleDesagendarEvento}
                            evento={d}
                            isAgendado={eventosAgendados.some(evento => evento._id === d._id)} 
                            isAgendados={isAgendados} 
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
