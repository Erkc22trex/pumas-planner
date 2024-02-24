// Eventroutes.js
const express = require('express');
const router = express.Router();

router.post('/eventos', async (req, res) => {
  console.log(req.body); // Muestra los datos del cuerpo de la solicitud en la consola
  res.status(200).json({ message: 'El evento se ha agregado con éxito' });
});

module.exports = router;
