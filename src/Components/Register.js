import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 

import '../Styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/user/register', formData);
      console.log(response.data);

      // Muestra una alerta de registro exitoso
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'No se pudo completar el registro, por favor intenta nuevamente',
      });
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
