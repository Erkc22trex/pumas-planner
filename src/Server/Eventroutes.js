const express = require("express");
const router = express.Router();

// Ruta para crear un nuevo evento (POST)
router.post('/eventos', (req, res) => {
  res.send("Evento creado con exito");
});

// Ruta para filtrar un nuevo evento (POST)
router.get('/eventos/:filter', (req, res) => {
  res.send("El evento es:");
});

// Ruta para editar un evento existente (PUT/PATCH)
router.put('/eventos/:id', (req, res) => {
  // Lógica para editar un evento por su ID
  res.send(`Evento con ID ${req.params.id} editado`);
});

// Ruta para mostrar detalles de un evento (GET)
router.get('/eventos/:id', (req, res) => {
  // Lógica para obtener detalles de un evento por su ID
  res.send(`Detalles del evento con ID ${req.params.id}`);
});

// Ruta para eliminar un evento (DELETE)
router.delete('/eventos/:id', (req, res) => {
  // Lógica para eliminar un evento por su ID
  res.send(`Evento con ID ${req.params.id} eliminado`);
});

module.exports = router;
// Iniciar el servidor
//app.listen(3000, () => {
 // console.log('Servidor en funcionamiento en el puerto 3000');
//});