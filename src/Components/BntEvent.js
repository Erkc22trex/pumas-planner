import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
import Form from "../Components/EventPage/Form";
import { Modal } from '../Components/HomePage/Modal';

const BtnEvent = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <>
      <button
        onClick={toggleOpen}
        className="bg-gradient-to-r text-white py-2 px-4 rounded-lg from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      >
        Crear evento
      </button>
      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
        {
          <Form onClose={toggleOpen} /> 
        }
      </Modal>
    </>
  );
};
export default BtnEvent;
