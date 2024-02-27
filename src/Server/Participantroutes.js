const express = require("express");
const router = express.Router();

// Ruta para añadir un nuevo participante (POST)
router.post('/participante', (req, res) => {
    res.send("Participante añadido");
  });

// Ruta para traer un nuevo participante (GET)
router.get('/participante/:filter', (req, res) => {
    res.send("Ruta de para obtener un comentario:");
  });
  
  // Ruta para eliminar un participante (DELETE)
router.delete('/participante/:id', (req, res) => {
    // Lógica para eliminar un evento por su ID
    res.send(`Evento con ID ${req.params.id} eliminado`);
  });
  
  module.exports = router;