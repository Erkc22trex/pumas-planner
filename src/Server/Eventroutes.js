const express = require("express");
const router = express.Router();

// Ruta para crear un nuevo evento (POST)
router.post('/crear', (req, res) => {
  console.log(req.body);
  res.send(req.body)
  //res.send("Evento creado con exito");
});

// Ruta para filtrar un nuevo evento (POST)
router.get('/filtrar/:filter', (req, res) => {
  res.send(`Evento con ID ${req.params.filter} filtrados  `);
});

// Ruta para editar un evento existente (PUT/PATCH)
router.put('/editar/:id', (req, res) => {
  // Lógica para editar un evento por su ID
  res.send(`Evento con ID ${req.params.id} editado`);
});

// Ruta para mostrar detalles de un evento (GET)
router.get('/detalles/:id', (req, res) => {
  // Lógica para obtener detalles de un evento por su ID
  res.send(`Detalles del evento con ID ${req.params.id}`);
});

// Ruta para eliminar un evento (DELETE)
router.delete('/eliminar/:id', (req, res) => {
  // Lógica para eliminar un evento por su ID
  res.send(`Evento con ID ${req.params.id} eliminado`);
});

module.exports = router;
// Iniciar el servidor
//app.listen(3000, () => {
 // console.log('Servidor en funcionamiento en el puerto 3000');
//});