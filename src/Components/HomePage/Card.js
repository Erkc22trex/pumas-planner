import React from 'react';
import Descrip from '../../Pages/Eventdetail';
import ReactDOM from 'react-dom';


export function Card({ _id, image, nombre, descripcion }) {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
    ReactDOM.render(<Descrip />, document.getElementById('root'));
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };

  return (
    <div key={_id} className="bg-white h-[400px] text-black rounded-xl">
      <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
        <img src={image} alt="" className="h-56 w-full rounded-t-xl" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 mb-auto">
        <p className="text-xl text-blue-400 font-semibold">{nombre}</p>
        <p className="text-center text-blue-400">{descripcion}</p>

        <div className='grid xl:flex gap-3 justify-center items-center'>
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
            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            onClick={handleButtonClick2}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
