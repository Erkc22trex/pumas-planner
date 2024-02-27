const express = require("express");
const router = express.Router();

// Ruta para crear un nuevo evento (POST)
router.post('/comentarios', (req, res) => {
  res.send("Ruta de comentarios");
});

// Ruta para filtrar un nuevo comentario (POST)
router.get('/comentarios/:filter', (req, res) => {
  res.send("Ruta de para obtener un comentario:");
});

// Ruta para editar un comentario existente (PUT/PATCH)
router.put('/comentarios/:id', (req, res) => {
  // Lógica para editar un evento por su ID
  res.send(`Comentario con ID ${req.params.id} editado`);
});

// Ruta para mostrar detalles de un comentario (GET)
router.get('/comentarios/:id', (req, res) => {
  // Lógica para obtener detalles de un evento por su ID
  res.send(`Detalles del evento con ID ${req.params.id}`);
});

// Ruta para eliminar un comentario (DELETE)
router.delete('/comentarios/:id', (req, res) => {
  // Lógica para eliminar un evento por su ID
  res.send(`Comentario con ID ${req.params.id} eliminado`);
});

module.exports = router;