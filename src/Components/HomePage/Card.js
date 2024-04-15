import React from 'react';
import Descrip from '../../Pages/Eventdetail';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "../../Styles/Button.css"
import "../../Styles/DeleteButton.css"


export function Card({ _id, image, nombre, descripcion, view = false }) {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
    ReactDOM.render(<Descrip />, document.getElementById('root'));
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
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
            {/* <button className="button" type="button">
              <span className="button__text">Delete</span>
              <span className="button__icon"><svg className="svg" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style={{fill:"none", stroke:"#fff", strokeLinecap:"round",strokeLinejoin:"round", strokeWidth:"32px"}}></path>
              <line style={{ stroke:"#fff", strokeLinecap:"round", strokeMiterlimit:"10", strokeWidth:"32px" }} x1="80" x2="432" y1="112" y2="112"></line><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style={{fill:"none", stroke:"#fff", strokeLinecap:"round", strokeLinejoin:"round",strokeWidth:"32px"}}></path><line style={{fill:"none", stroke:"#fff", strokeLinecap:"round",strokeLinejoin:"round", strokeWidth:"32px"}} x1="256" x2="256" y1="176" y2="400"></line><line style={{fill:"none", stroke:"#fff", strokelinecap:"round", strokeLinejoin:"round", strokeWidth:"32px"}} x1="184" x2="192" y1="176" y2="400"></line><line style={{fill:"none", stroke:"#fff",strokeLinecap:"round", strokeLinejoin:"round", strokeWidth:"32px"}} x1="328" x2="320" y1="176" y2="400"></line></svg></span>
            </button> */}
            
            {/* <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              onClick={handleButtonClick2}
            >
              Agregar
            </button> */}

            {
              view && (<button
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
              )
            }
          </div>
        )}

      </div>
    </div>
  );
}
