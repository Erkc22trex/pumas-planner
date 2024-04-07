import React from 'react';
import FormDesc from '../../Pages/Eventdetail';

export function Card({ image, title, description }) {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
  };
  
  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };
  
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8 mx-5">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img className="lg:h-56 md:h-48 m-auto rounded-full" src={image} alt="blog" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button 
          data-ripple-light="true" 
          type="button" 
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          onClick={handleButtonClick1}
        >
          Información
        </button>
        <button 
          data-ripple-light="true" 
          type="button" 
          className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mx-5" 
          onClick={handleButtonClick2}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

