import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Form from "../Components/EventPage/Form";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '57%',
    left: '50%',
    // right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    backgroundColor: '#322894',
  },
};


const BtnEvent = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <Link to="/evento"> */}
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "> */}
        <button onClick={openModal} className="bg-gradient-to-r text-white py-2 px-4 rounded-lg from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          Crear evento
        </button>
      {/* </Link> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Creación del Evento</h2>
        <button onClick={closeModal}>close</button>

        <Form></Form>
      </Modal>
    </>
  );
};

export default BtnEvent;