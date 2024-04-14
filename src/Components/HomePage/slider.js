import React from "react";
import Descrip from '../../Pages/Eventdetail';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import { Card } from "../../Components/HomePage/Card"

export function SimpleSlider({ data }) {
    console.log(data)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const handleButtonClick1 = () => {
        console.log('Button 1 clicked');
        ReactDOM.render(<Descrip />, document.getElementById('root'));
    };

    const handleButtonClick2 = () => {
        console.log('Button 2 clicked');
    };

    return (
        <div className='w-11/12 m-auto'>
            <div className="mt-20">
                <Slider {...settings}>
                    {data?.map((d) => (
                        <Card 
                            _id={d._id}
                            nombre={d.nombre}
                            image={d.image}
                            descripcion={d.descripcion}
                        />
                    ))}
                </Slider>
            </div>

        </div>
    );
}