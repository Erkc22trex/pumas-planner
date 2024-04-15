import React from 'react';
import Descrip from '../../Pages/Eventdetail';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "../../Styles/Button.css"

export function Card({ _id, image, nombre, descripcion, hora, lugar, fecha, view = false }) {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
    ReactDOM.render(<Descrip />, document.getElementById('root'));
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };

  const handleCalendarButtonClick = () => {
    const startTime = new Date(fecha).toISOString().replace(/-|:|\.\d+/g, '');
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${nombre}&details=${descripcion}&location=${lugar}&dates=${startTime}/${startTime}`;
    window.open(googleCalendarUrl);
};
  const { isAuthenticated, user } = useAuth0();

  return (
    <div key={_id} className="bg-white h-[400px] text-black rounded-xl">
      <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
        <img src={image} alt="" className="h-56 w-full rounded-t-xl" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 mb-auto">
        <p className="text-xl text-blue-400 font-semibold">{nombre}</p>
        <p className="text-center text-blue-400">{descripcion}</p>

        {isAuthenticated && (
          <div className='grid xl:flex gap-3 justify-center items-center'>
            <button className="learn-more" onClick={handleButtonClick1}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Detalles</span>
            </button>

            {view && (
              <button
                className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
              >
                <span
                  className="text-gray-200 font-semibold ml-8 transform group-hover:hidden transition-all duration-300"
                >AGREGAR</span>
                <span
                  className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                >
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                  </svg>
                </span>
              </button>
            )}

            <button className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-orange-500 bg-orange-500 group hover:bg-orange-500 active:bg-orange-500 active:border-orange-500" onClick={handleCalendarButtonClick}>
              <span className="text-gray-200 font-semibold ml-8 transform group-hover:hidden transition-all duration-300">Calendario</span>
              <span className="absolute right-0 h-full w-10 rounded-lg bg-orange-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                <svg
                  className="svg w-8 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
