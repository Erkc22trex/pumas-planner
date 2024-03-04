const express = require("express");
const router = express.Router();

// Ruta para añadir un nuevo participante (POST)
router.post('/crear', (req, res) => {
    res.send("Participante añadido");
  });

// Ruta para traer un nuevo participante (GET)
router.get('/filtrar/:filter', (req, res) => {
    res.send('Ruta de para obtener un participante con id: ${req.params.filter}');
  });
  
  // Ruta para eliminar un participante (DELETE)
router.delete('/eliminar/:id', (req, res) => {
    // Lógica para eliminar un evento por su ID
    res.send(`Participante con ID ${req.params.id} eliminado`);
  });
  
  module.exports = router;