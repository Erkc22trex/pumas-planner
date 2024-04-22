const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/Usermodel');
const app = express()

app.use(express.json())

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Verificar si el correo electrónico ya está en uso
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
      }
  
      // Hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear un nuevo usuario con la contraseña hasheada
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ message: 'Ocurrió un error al registrar usuario' });
    }
  });
  
  module.exports = router;