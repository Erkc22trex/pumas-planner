import React from 'react';
import { Link } from 'react-router-dom';

const BtnEvent = () => {
  return (
    <Link to="/evento">
      {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "> */}
      <button className="bg-gradient-to-r text-white py-2 px-4 rounded-lg from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
        Crear evento
      </button>
    </Link>
  );
};

export default BtnEvent;